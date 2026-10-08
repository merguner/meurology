import { NextResponse } from 'next/server';
import { siteConfig, whatsappLink } from '@/config/site';
import { createMailTransport } from '@/lib/mailer';
import {
  MAX_ATTACHMENTS,
  MAX_ATTACHMENT_BYTES,
  validateAttachments,
  type IncomingFile
} from '@/lib/formAttachments';
import { getTreatment } from '@/content/treatments';
import { resolveContent } from '@/content/types';
import type { Locale } from '@/i18n/routing';
import { autoReplyCopy, isRtlLocale } from '@/content/autoReply';
import { parsePhoneNumberFromString, type CountryCode } from 'libphonenumber-js';
import { verifyTurnstile } from '@/config/turnstile';

// nodemailer Node.js API'leri (net/tls) kullanır — Edge değil, Node runtime gerekir.
export const runtime = 'nodejs';

/**
 * ÖN DEĞERLENDİRME FORMU — API
 * ------------------------------------------------------------------
 * Gelen veriyi doğrular ve kliniğin kendi SMTP hesabı üzerinden (info@meurology.com)
 * kendine bir bildirim e-postası gönderir (nodemailer). Üçüncü parti servis yok.
 *
 * E-posta gönderimi başarısızsa başvuru başarılı sayılmaz; hasta tekrar
 * deneyebilir veya doğrudan iletişim kanalına geçebilir.
 *
 * Ortam değişkenleri (.env.local) — KODA YAZILMAZ:
 *  - SMTP_HOST    (ör. mail.meurology.com)
 *  - SMTP_PORT    (465 [SSL] veya 587 [STARTTLS])
 *  - SMTP_SECURE  ('true' → 465/SSL, 'false' → 587/STARTTLS)
 *  - SMTP_USER    (info@meurology.com)
 *  - SMTP_PASS    (mail hesabının şifresi)
 *  - LEAD_NOTIFICATION_EMAIL (opsiyonel — varsayılan: siteConfig.email)
 *  - MAIL_FAKE=1  (test/geliştirme — hiçbir e-posta GÖNDERİLMEZ)
 *
 * İSTEK BİÇİMİ: hem `application/json` hem de `multipart/form-data`
 * kabul edilir. Dosya eki gönderilecekse multipart kullanılır; alanlar
 * `payload` adlı JSON parçası, dosyalar `files` alanıdır.
 *
 * KVKK: PII yalnızca bildirim amacıyla, hastanın açık rızasıyla iletilir.
 * YÜKLENEN BELGELER SUNUCUDA SAKLANMAZ — yalnızca bildirim e-postasına
 * ek olarak iliştirilir ve istek bitince bellekten düşer. Hastaya giden
 * otomatik yanıta ve CRM webhook'una EK GÖNDERİLMEZ.
 */

export interface PreAssessmentPayload {
  name: string;
  country?: string;
  email?: string;
  phone?: string;
  treatment?: string;
  message?: string;
  consent: boolean;
  locale?: string;
  /** Turnstile jetonu — yalnızca Turnstile yapılandırılmışsa dolu gelir. */
  turnstileToken?: string;
  /** Honeypot — botlar doldurur; gerçek kullanıcıya görünmez. Dolu ise reddedilir. */
  company?: string;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/** HTML enjeksiyonunu önlemek için kaçış. */
function esc(v: unknown): string {
  return String(v ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/**
 * BASİT IP BAZLI HIZ SINIRLAMA (sabit pencere).
 * Honeypot'u aşan spam/flood trafiğini de azaltır.
 * NOT: Bellek-içi (Map) — tek sunucu süreci için çalışır. Vercel/serverless veya
 * çok örnekli dağıtımda örnekler arası paylaşılmaz; o durumda Upstash Redis vb.
 * merkezî bir depo gerekir (aşağıdaki mantığı oraya taşıyın).
 */
const RATE_LIMIT_MAX = 5; // pencere başına izinli istek
const RATE_LIMIT_WINDOW_MS = 60_000; // 1 dakika
const rateHits = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(ip: string): { ok: boolean; retryAfter: number } {
  const now = Date.now();
  // Sızıntıyı önlemek için ara sıra süresi geçmiş kayıtları temizle.
  if (rateHits.size > 5000) {
    for (const [k, v] of rateHits) if (now > v.resetAt) rateHits.delete(k);
  }
  const entry = rateHits.get(ip);
  if (!entry || now > entry.resetAt) {
    rateHits.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return { ok: true, retryAfter: 0 };
  }
  if (entry.count >= RATE_LIMIT_MAX) {
    return { ok: false, retryAfter: Math.ceil((entry.resetAt - now) / 1000) };
  }
  entry.count++;
  return { ok: true, retryAfter: 0 };
}

/** İstemci IP'sini proxy başlıklarından çıkarır (yoksa 'unknown'). */
function clientIp(request: Request): string {
  const xff = request.headers.get('x-forwarded-for');
  if (xff) return xff.split(',')[0].trim();
  return request.headers.get('x-real-ip') || 'unknown';
}

export async function POST(request: Request) {
  // Hız sınırı — ağır işlemden ve gövde ayrıştırmadan ÖNCE, ucuzca reddet.
  const ip = clientIp(request);
  const rl = checkRateLimit(ip);
  if (!rl.ok) {
    console.warn(`[on-degerlendirme] hız sınırı aşıldı — IP: ${ip}, ${rl.retryAfter}s sonra tekrar`);
    return NextResponse.json(
      { ok: false, error: 'rate_limited' },
      { status: 429, headers: { 'Retry-After': String(rl.retryAfter) } }
    );
  }

  /*
    GÖVDE: JSON veya multipart.
    Dosya eki olmayan istekler eskisi gibi düz JSON gönderebilir; forma
    dosya eklendiğinde istemci multipart'a geçer. İki biçim de desteklenir
    ki dışarıdan JSON ile çağıran bir entegrasyon kırılmasın.
  */
  let data: Partial<PreAssessmentPayload>;
  let incomingFiles: IncomingFile[] = [];
  const contentType = request.headers.get('content-type') ?? '';

  if (contentType.includes('multipart/form-data')) {
    try {
      const form = await request.formData();
      const raw = form.get('payload');
      data = typeof raw === 'string' ? JSON.parse(raw) : {};
      const entries = form.getAll('files').filter((v): v is File => v instanceof File);
      // Sayı sınırını dosyaları belleğe almadan ÖNCE uygula.
      if (entries.length > MAX_ATTACHMENTS) {
        return NextResponse.json(
          { ok: false, error: 'too_many_files', max: MAX_ATTACHMENTS },
          { status: 422 }
        );
      }
      for (const f of entries) {
        if (f.size === 0) continue; // boş dosya alanı — yok say
        if (f.size > MAX_ATTACHMENT_BYTES) {
          return NextResponse.json(
            { ok: false, error: 'file_too_large', maxBytes: MAX_ATTACHMENT_BYTES },
            { status: 413 }
          );
        }
        incomingFiles.push({
          name: f.name,
          type: f.type,
          bytes: new Uint8Array(await f.arrayBuffer())
        });
      }
    } catch {
      return NextResponse.json({ ok: false, error: 'invalid_form' }, { status: 400 });
    }
  } else {
    try {
      data = await request.json();
    } catch {
      return NextResponse.json({ ok: false, error: 'invalid_json' }, { status: 400 });
    }
  }

  // Honeypot: dolu geldiyse (bot) sessizce başarı döndür — botu bilgilendirme.
  if (typeof data.company === 'string' && data.company.trim() !== '') {
    console.info('[on-degerlendirme] honeypot tetiklendi — istek sessizce yok sayıldı');
    return NextResponse.json({ ok: true });
  }

  // Turnstile — yalnızca gizli anahtar tanımlıysa zorunludur, aksi halde
  // atlanır (honeypot ve hız sınırı her durumda devrededir).
  const turnstileOk = await verifyTurnstile(data.turnstileToken, ip);
  if (!turnstileOk) {
    console.warn('[on-degerlendirme] Turnstile doğrulaması başarısız — IP:', ip);
    return NextResponse.json({ ok: false, error: 'captcha_failed' }, { status: 403 });
  }

  // Sunucu tarafı doğrulama (istemci doğrulamasına ek güvenlik).
  if (!data.name || data.name.trim().length < 2) {
    return NextResponse.json({ ok: false, error: 'invalid_name' }, { status: 422 });
  }
  const hasEmail = Boolean(data.email && isValidEmail(data.email));

  // Telefon: uluslararası biçim doğrulaması (prompt m.5.1 — libphonenumber).
  // Hasta ülke seçtiyse o ülkeye göre, seçmediyse yalnızca +ülke kodlu biçim
  // kabul edilir. Geçerliyse E.164'e normalleştirilir ki WhatsApp bağlantısı
  // ve CRM kaydı tutarlı olsun.
  let normalizedPhone = '';
  if (data.phone && data.phone.trim()) {
    const region =
      data.country && /^[A-Za-z]{2}$/.test(data.country)
        ? (data.country.toUpperCase() as CountryCode)
        : undefined;
    try {
      const parsed = parsePhoneNumberFromString(data.phone.trim(), region);
      if (!parsed || !parsed.isValid()) {
        return NextResponse.json({ ok: false, error: 'invalid_phone' }, { status: 422 });
      }
      normalizedPhone = parsed.number; // E.164, ör. +905320630969
    } catch {
      return NextResponse.json({ ok: false, error: 'invalid_phone' }, { status: 422 });
    }
  }
  const hasPhone = normalizedPhone !== '';
  if (hasPhone) data.phone = normalizedPhone;

  if (!hasEmail && !hasPhone) {
    return NextResponse.json({ ok: false, error: 'missing_contact' }, { status: 422 });
  }
  if (data.consent !== true) {
    return NextResponse.json({ ok: false, error: 'consent_required' }, { status: 422 });
  }

  /*
    EKLERİN DOĞRULANMASI — uzantı ve tarayıcı MIME'ı yeterli sayılmaz;
    dosyanın ilk baytlarına bakılarak gerçek türü belirlenir. Tanınmayan
    içerik reddedilir ve kliniğin gelen kutusuna hiç ulaşmaz.
  */
  const attachmentResult = validateAttachments(incomingFiles);
  if (!attachmentResult.ok) {
    return NextResponse.json(
      { ok: false, error: attachmentResult.error },
      { status: attachmentResult.error === 'file_too_large' ? 413 : 422 }
    );
  }
  const attachments = attachmentResult.attachments;

  const at = new Date().toISOString();
  const consentTextVersion = '2026-09-21';

  // Sunucu logunda hasta kimliği, iletişim bilgisi veya DOSYA ADI tutma:
  // dosya adları ("ahmet-psa-raporu.pdf") kendi başına sağlık verisidir.
  console.info('[on-degerlendirme] Yeni başvuru alındı:', {
    hasEmail,
    hasPhone,
    attachmentCount: attachments.length,
    at
  });

  // SMTP ile e-posta bildirimi.
  try {
    const { transport: transporter, from: mailFrom } = createMailTransport();

    // Bildirim alıcısı: kliniğin görünen e-postası (siteConfig.email = info@meurology.com).
    // SMTP_USER yalnızca gönderen/kimlik doğrulama hesabıdır (info@meurology.com).
    const to = process.env.LEAD_NOTIFICATION_EMAIL || siteConfig.email;
    const locale = (data.locale as Locale) || 'tr';
    const treatment = data.treatment ? getTreatment(data.treatment) : undefined;
    const treatmentTitle = treatment ? resolveContent(treatment, locale).title : data.treatment || '—';

    // Ülke artık ISO kodu (ör. "DE") — e-postada okunur ada çevir (kod + ad).
    let countryDisplay = data.country || '—';
    if (data.country && /^[A-Za-z]{2}$/.test(data.country)) {
      try {
        const name = new Intl.DisplayNames(['en'], { type: 'region' }).of(data.country.toUpperCase());
        if (name) countryDisplay = `${name} (${data.country.toUpperCase()})`;
      } catch {
        /* yoksay */
      }
    }

    // İletişim bloğu: e-posta varsa onu; yoksa telefon + WhatsApp notunu belirgin göster.
    const waHref = data.phone
      ? `https://wa.me/${data.phone.replace(/[^\d]/g, '')}`
      : whatsappLink();
    const contactHtml = hasEmail
      ? `<tr><td style="padding:6px 0;color:#555;">E-posta</td><td style="padding:6px 0;font-weight:600;"><a href="mailto:${esc(
          data.email
        )}">${esc(data.email)}</a></td></tr>` +
        (hasPhone
          ? `<tr><td style="padding:6px 0;color:#555;">Telefon</td><td style="padding:6px 0;font-weight:600;">${esc(
              data.phone
            )}</td></tr>`
          : '')
      : `<tr><td style="padding:6px 0;color:#555;">Telefon</td><td style="padding:6px 0;font-weight:700;font-size:16px;">${esc(
          data.phone
        )}</td></tr>
         <tr><td colspan="2" style="padding:10px 12px;background:#e7f7ee;border-radius:8px;color:#0a7c42;font-weight:600;">
           ⚠️ Hasta e-posta bırakmadı — <a href="${esc(
             waHref
           )}" style="color:#0a7c42;">WhatsApp’tan yazabilirsiniz</a>.
         </td></tr>`;

    const subject = `Yeni Ön Değerlendirme Başvurusu — ${data.name}`;

    const html = `
    <div style="font-family:Arial,Helvetica,sans-serif;max-width:600px;margin:0 auto;color:#111;">
      <h2 style="margin:0 0 4px;">Yeni Ön Değerlendirme Başvurusu</h2>
      <p style="margin:0 0 16px;color:#555;">${esc(data.name)}</p>
      <table style="width:100%;border-collapse:collapse;font-size:14px;">
        <tr><td style="padding:6px 0;color:#555;width:140px;">Ad Soyad</td><td style="padding:6px 0;font-weight:600;">${esc(
          data.name
        )}</td></tr>
        <tr><td style="padding:6px 0;color:#555;">Ülke</td><td style="padding:6px 0;">${esc(countryDisplay)}</td></tr>
        <tr><td style="padding:6px 0;color:#555;">Tedavi ilgisi</td><td style="padding:6px 0;">${esc(
          treatmentTitle
        )}</td></tr>
        ${contactHtml}
        <tr><td style="padding:6px 0;color:#555;">Dil</td><td style="padding:6px 0;">${esc(
          data.locale || 'tr'
        )}</td></tr>
        <tr><td style="padding:6px 0;color:#555;">Başvuru zamanı</td><td style="padding:6px 0;">${esc(
          at
        )}</td></tr>
        <tr><td style="padding:6px 0;color:#555;">Sağlık verisi rızası</td><td style="padding:6px 0;">Onaylandı (metin sürümü: ${consentTextVersion})</td></tr>
      </table>
      <div style="margin-top:16px;">
        <p style="margin:0 0 4px;color:#555;font-size:14px;">Mesaj</p>
        <div style="padding:12px;background:#f6f7f9;border-radius:8px;font-size:14px;white-space:pre-wrap;">${esc(
          data.message || '—'
        )}</div>
      </div>
      ${
        attachments.length
          ? `<div style="margin-top:16px;">
        <p style="margin:0 0 4px;color:#555;font-size:14px;">Hastanın eklediği belgeler (${attachments.length})</p>
        <ul style="margin:0;padding-inline-start:18px;font-size:14px;">${attachments
          .map((a) => `<li>${esc(a.filename)}</li>`)
          .join('')}</ul>
      </div>`
          : ''
      }
    </div>`;

    const textLines = [
      `Yeni Ön Değerlendirme Başvurusu — ${data.name}`,
      '',
      `Ad Soyad: ${data.name}`,
      `Ülke: ${countryDisplay}`,
      `Tedavi ilgisi: ${treatmentTitle}`,
      hasEmail ? `E-posta: ${data.email}` : null,
      hasPhone ? `Telefon: ${data.phone}` : null,
      !hasEmail ? 'NOT: Hasta e-posta bırakmadı — WhatsApp’tan yazabilirsiniz.' : null,
      `Dil: ${data.locale || 'tr'}`,
      `Başvuru zamanı: ${at}`,
      `Sağlık verisi rızası: Onaylandı (metin sürümü: ${consentTextVersion})`,
      '',
      `Mesaj: ${data.message || '—'}`,
      attachments.length
        ? `Ekler (${attachments.length}): ${attachments.map((a) => a.filename).join(', ')}`
        : null
    ].filter(Boolean);

    await transporter.sendMail({
      from: `"ME Urology Clinic" <${mailFrom}>`,
      to,
      subject,
      html,
      text: textLines.join('\n'),
      // Belgeler YALNIZCA kliniğe giden bu bildirime iliştirilir.
      ...(attachments.length ? { attachments } : {}),
      // "Yanıtla" doğrudan hastaya gitsin (e-posta verdiyse).
      ...(hasEmail ? { replyTo: data.email as string } : {})
    });
    // ---- Hastaya otomatik yanıt (prompt m.5.1) --------------------------
    // Bildirimden SONRA ve ayrı try/catch içinde: yanıt gönderilemese bile
    // başvuru başarılı sayılır, çünkü klinik bildirimi zaten ulaştı.
    if (hasEmail) {
      try {
        const c = autoReplyCopy(locale);
        const rtl = isRtlLocale(locale);
        const dirAttr = rtl ? 'rtl' : 'ltr';
        const align = rtl ? 'right' : 'left';
        await transporter.sendMail({
          from: `"ME Urology Clinic" <${mailFrom}>`,
          to: data.email as string,
          subject: c.subject,
          html: `
<div dir="${dirAttr}" style="font-family:Arial,Helvetica,sans-serif;max-width:600px;margin:0 auto;color:#111;text-align:${align};">
  <p style="margin:0 0 12px;">${esc(c.greeting(data.name as string))}</p>
  <p style="margin:0 0 12px;">${esc(c.received)}</p>
  <p style="margin:0 0 12px;"><strong>${esc(c.timing)}</strong></p>
  <p style="margin:0 0 16px;">${esc(c.whatNext)}</p>
  <div style="padding:12px;background:#fff4f4;border-radius:8px;color:#8a1c1c;font-size:14px;margin-bottom:16px;">${esc(
    c.emergency
  )}</div>
  <p style="margin:0 0 16px;color:#555;font-size:13px;">${esc(c.disclaimer)}</p>
  <p style="margin:0;font-weight:600;">${esc(c.signature)}</p>
</div>`,
          text: [
            c.greeting(data.name as string),
            '',
            c.received,
            '',
            c.timing,
            '',
            c.whatNext,
            '',
            c.emergency,
            '',
            c.disclaimer,
            '',
            c.signature
          ].join('\n')
        });
      } catch (err) {
        console.error('[on-degerlendirme] Otomatik yanıt gönderilemedi (başvuru yine de geçerli):', err);
      }
    }
  } catch (err) {
    console.error('[on-degerlendirme] E-posta bildirimi gönderilemedi:', err);
    return NextResponse.json({ ok: false, error: 'delivery_failed' }, { status: 503 });
  }

  // ---- CRM kaydı (prompt m.5.1) -----------------------------------------
  // CRM_WEBHOOK_URL tanımlıysa başvuru oraya da POST edilir (Google Sheets /
  // Airtable / Zapier webhook'u fark etmez). Başarısız olursa başvuru yine
  // geçerlidir; e-posta bildirimi birincil kanaldır.
  const webhook = process.env.CRM_WEBHOOK_URL;
  if (webhook) {
    try {
      /**
       * Authorization başlığı YALNIZCA jeton ASCII ise eklenir.
       *
       * 8 Eki 2026'da Türkçe karakter içeren bir jetonla şu hata alındı:
       *   "Cannot convert argument to a ByteString because the character at
       *    index 79 has a value of 305" — 305, 'ı' harfinin kodu.
       * HTTP başlık değerleri latin-1 taşır; 'ı', 'ş', 'ğ' gibi harfler
       * fetch'i daha istek gönderilmeden patlatır. Sonuç sessizdi: başvuru
       * ve e-posta sorunsuz gidiyor, yalnızca CRM kaydı hiç oluşmuyordu.
       *
       * Jeton gövdede de gönderildiği için (aşağıda) başlığın atlanması
       * Apps Script tarafında hiçbir şeyi bozmaz — o zaten başlıkları
       * okuyamıyor. Başlık bekleyen gerçek CRM'ler ASCII jeton kullanır.
       */
      const jeton = process.env.CRM_WEBHOOK_TOKEN;
      const jetonAsciiMi = jeton ? /^[\x20-\x7E]*$/.test(jeton) : false;
      if (jeton && !jetonAsciiMi) {
        console.warn(
          '[on-degerlendirme] CRM jetonu ASCII değil; Authorization başlığı atlandı, jeton gövdede gönderiliyor.'
        );
      }

      const res = await fetch(webhook, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(jeton && jetonAsciiMi ? { Authorization: `Bearer ${jeton}` } : {})
        },
        body: JSON.stringify({
          at,
          name: data.name,
          country: data.country ?? '',
          email: data.email ?? '',
          phone: data.phone ?? '',
          treatment: data.treatment ?? '',
          message: data.message ?? '',
          locale: data.locale ?? 'tr',
          consentTextVersion,
          /**
           * Jeton GÖVDEDE de gönderilir — yalnızca Authorization başlığı yetmiyor.
           * Google Apps Script'in doPost(e) fonksiyonu istek BAŞLIKLARINI okuyamaz;
           * alıcı Apps Script ise başlıktaki jeton ona hiç ulaşmaz. Apps Script
           * web uygulamasının adresi herkese açık olduğundan, jeton olmadan adresi
           * ele geçiren biri tabloya sahte satır yazabilirdi.
           *
           * Başlık ASCII jetonlarda ayrıca gönderilir (yukarıya bakın): gerçek
           * CRM'ler (Airtable, HubSpot) onu bekler. Alıcı hangisini
           * okuyabiliyorsa onu kullanır. Gövdedeki jeton JSON içinde gittiği
           * için Türkçe karakter sorunu yaşamaz.
           */
          ...(jeton ? { token: jeton } : {})
        }),
        signal: AbortSignal.timeout(5000)
      });
      /**
       * YANIT GÖVDESİ DE OKUNUR — yalnızca HTTP durumuna bakmak yetmiyor.
       *
       * Google Apps Script hata durumlarında da HTTP 200 döner; hatayı gövdede
       * bildirir (ör. {"ok":false,"error":"yetkisiz"}). 8 Eki 2026'da bu yüzden
       * sessiz bir arıza yaşandı: jeton uyuşmadığı için hiçbir satır yazılmıyordu
       * ama günlükte tek bir hata satırı bile yoktu, çünkü res.ok true idi.
       */
      const govde = (await res.text()).slice(0, 300);
      if (!res.ok) {
        console.error('[on-degerlendirme] CRM webhook yanıtı başarısız:', res.status, govde);
      } else if (!/"ok"\s*:\s*true/.test(govde)) {
        console.error('[on-degerlendirme] CRM webhook 200 döndü ama kayıt YAZILMADI:', govde);
      } else {
        console.info('[on-degerlendirme] CRM kaydı yazıldı.');
      }
    } catch (err) {
      console.error('[on-degerlendirme] CRM webhook çağrılamadı (başvuru yine de geçerli):', err);
    }
  }

  return NextResponse.json({ ok: true });
}
