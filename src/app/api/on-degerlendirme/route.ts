import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { siteConfig, whatsappLink } from '@/config/site';
import { getTreatment } from '@/content/treatments';
import { resolveContent } from '@/content/types';
import type { Locale } from '@/i18n/routing';

// nodemailer Node.js API'leri (net/tls) kullanır — Edge değil, Node runtime gerekir.
export const runtime = 'nodejs';

/**
 * ÖN DEĞERLENDİRME FORMU — API
 * ------------------------------------------------------------------
 * Gelen veriyi doğrular ve kliniğin kendi SMTP hesabı üzerinden (info@meurology.com)
 * kendine bir bildirim e-postası gönderir (nodemailer). Üçüncü parti servis yok.
 *
 * E-posta gönderimi başarısız olsa bile hasta tarafında HATA GÖSTERİLMEZ
 * (başvuru kaybolmasın); hata sunucu loguna yazılır.
 *
 * Ortam değişkenleri (.env.local) — KODA YAZILMAZ:
 *  - SMTP_HOST    (ör. mail.meurology.com)
 *  - SMTP_PORT    (465 [SSL] veya 587 [STARTTLS])
 *  - SMTP_SECURE  ('true' → 465/SSL, 'false' → 587/STARTTLS)
 *  - SMTP_USER    (info@meurology.com)
 *  - SMTP_PASS    (mail hesabının şifresi)
 *  - LEAD_NOTIFICATION_EMAIL (opsiyonel — varsayılan: SMTP_USER)
 *
 * KVKK: PII yalnızca bildirim amacıyla, hastanın açık rızasıyla iletilir.
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

  let data: Partial<PreAssessmentPayload>;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'invalid_json' }, { status: 400 });
  }

  // Honeypot: dolu geldiyse (bot) sessizce başarı döndür — botu bilgilendirme.
  if (typeof data.company === 'string' && data.company.trim() !== '') {
    console.info('[on-degerlendirme] honeypot tetiklendi — istek sessizce yok sayıldı');
    return NextResponse.json({ ok: true });
  }

  // Sunucu tarafı doğrulama (istemci doğrulamasına ek güvenlik).
  if (!data.name || data.name.trim().length < 2) {
    return NextResponse.json({ ok: false, error: 'invalid_name' }, { status: 422 });
  }
  const hasEmail = Boolean(data.email && isValidEmail(data.email));
  const hasPhone = Boolean(data.phone && data.phone.trim().length >= 6);
  if (!hasEmail && !hasPhone) {
    return NextResponse.json({ ok: false, error: 'missing_contact' }, { status: 422 });
  }
  if (data.consent !== true) {
    return NextResponse.json({ ok: false, error: 'consent_required' }, { status: 422 });
  }

  const at = new Date().toISOString();

  // Her hâlükârda sunucu loguna yaz (PII olmadan özet).
  console.info('[on-degerlendirme] Yeni başvuru alındı:', {
    name: data.name,
    country: data.country,
    treatment: data.treatment,
    hasEmail,
    hasPhone,
    locale: data.locale,
    at
  });

  // SMTP ile e-posta bildirimi. Başarısız olsa da hasta tarafında hata gösterme.
  try {
    const { SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_PASS } = process.env;
    if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
      throw new Error('SMTP ortam değişkenleri (SMTP_HOST/SMTP_USER/SMTP_PASS) tanımlı değil');
    }

    const port = Number(SMTP_PORT) || 465;
    // SMTP_SECURE açıkça 'false' değilse SSL (465) varsayılır.
    const secure = SMTP_SECURE ? SMTP_SECURE === 'true' : port === 465;

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port,
      secure,
      auth: { user: SMTP_USER, pass: SMTP_PASS }
    });

    const to = process.env.LEAD_NOTIFICATION_EMAIL || SMTP_USER;
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
      </table>
      <div style="margin-top:16px;">
        <p style="margin:0 0 4px;color:#555;font-size:14px;">Mesaj</p>
        <div style="padding:12px;background:#f6f7f9;border-radius:8px;font-size:14px;white-space:pre-wrap;">${esc(
          data.message || '—'
        )}</div>
      </div>
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
      '',
      `Mesaj: ${data.message || '—'}`
    ].filter(Boolean);

    await transporter.sendMail({
      from: `"ME Urology Clinic" <${SMTP_USER}>`,
      to,
      subject,
      html,
      text: textLines.join('\n'),
      // "Yanıtla" doğrudan hastaya gitsin (e-posta verdiyse).
      ...(hasEmail ? { replyTo: data.email as string } : {})
    });
  } catch (err) {
    // Hasta deneyimini bozmadan hatayı loga yaz — böylece arıza fark edilir.
    console.error('[on-degerlendirme] E-posta bildirimi gönderilemedi:', err);
  }

  return NextResponse.json({ ok: true });
}
