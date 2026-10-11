import { NextResponse } from 'next/server';
import { parsePhoneNumberFromString, type CountryCode } from 'libphonenumber-js';
import { siteConfig } from '@/config/site';
import { createMailTransport } from '@/lib/mailer';
import { verifyTurnstile } from '@/config/turnstile';
import { esc, isValidEmail, clientIp, createRateLimiter, postToCrm } from '@/lib/leadDelivery';

// nodemailer Node.js API'leri (net/tls) kullanır — Edge değil, Node runtime gerekir.
export const runtime = 'nodejs';

/**
 * ONLINE DANIŞMANLIK TALEBİ — API (11 Eki 2026).
 * ------------------------------------------------------------------
 * 11 Eki 2026'ya kadar randevu akışı TAMAMEN istemcideydi: talep kodu yalnızca
 * hastanın ekranında üretiliyor, sunucuya hiçbir şey gitmiyordu. Hasta son
 * adımdaki WhatsApp düğmesine basmazsa klinik talepten habersiz kalıyor, GA4
 * ise talebi "randevu" diye sayıyordu (denetim raporu, 11 Eki 2026).
 *
 * Artık talep oluştuğu anda:
 *  1. kliniğe e-posta bildirimi gider (ön değerlendirme formuyla aynı SMTP),
 *  2. başvuru tablosuna (CRM) bir satır yazılır.
 *
 * Koruma: hız sınırı + honeypot + Turnstile (anahtar tanımlıysa) — form ucuyla aynı.
 * Hastaya otomatik e-posta GÖNDERİLMEZ: onay WhatsApp'tan, ekip tarafından yapılır.
 * KVKK: sunucu günlüğünde ad, telefon, not gibi kişisel veri tutulmaz.
 */

interface ConsultationRequestPayload {
  code: string;
  date: string; // YYYY-MM-DD (İstanbul takvim günü)
  time: string; // HH:MM (İstanbul)
  timeZone?: string; // hastanın tarayıcı saat dilimi
  name: string;
  country?: string;
  phone: string;
  email?: string;
  note?: string;
  consent: boolean;
  locale?: string;
  turnstileToken?: string;
  /** Honeypot — botlar doldurur; gerçek kullanıcıya görünmez. */
  company?: string;
}

const checkRateLimit = createRateLimiter(5, 60_000);
const KOD = /^ME-\d{8}-[A-Z0-9]{4}$/;

/** Tarih geçerli bir YYYY-MM-DD mi, randevu günlerinden biri mi ve önümüzdeki 60 gün içinde mi? */
function gecerliGun(date: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) return false;
  const d = new Date(`${date}T12:00:00Z`);
  if (Number.isNaN(d.getTime()) || d.toISOString().slice(0, 10) !== date) return false;
  const gun = d.getUTCDay();
  if (!(siteConfig.consultation.availableWeekdays as readonly number[]).includes(gun)) return false;
  const simdi = Date.now();
  return d.getTime() > simdi - 36 * 3600_000 && d.getTime() < simdi + 60 * 24 * 3600_000;
}

export async function POST(request: Request) {
  const ip = clientIp(request);
  const rl = checkRateLimit(ip);
  if (!rl.ok) {
    console.warn(`[danismanlik-talebi] hız sınırı aşıldı — ${rl.retryAfter}s sonra tekrar`);
    return NextResponse.json(
      { ok: false, error: 'rate_limited' },
      { status: 429, headers: { 'Retry-After': String(rl.retryAfter) } }
    );
  }

  let data: Partial<ConsultationRequestPayload>;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'invalid_json' }, { status: 400 });
  }

  // Honeypot: dolu geldiyse (bot) sessizce başarı döndür — botu bilgilendirme.
  if (typeof data.company === 'string' && data.company.trim() !== '') {
    console.info('[danismanlik-talebi] honeypot tetiklendi — istek sessizce yok sayıldı');
    return NextResponse.json({ ok: true });
  }

  const turnstileOk = await verifyTurnstile(data.turnstileToken, ip);
  if (!turnstileOk) {
    console.warn('[danismanlik-talebi] Turnstile doğrulaması başarısız');
    return NextResponse.json({ ok: false, error: 'captcha_failed' }, { status: 403 });
  }

  // ---- Doğrulama (istemci doğrulamasına ek) ------------------------------
  const cfg = siteConfig.consultation;
  if (!data.code || !KOD.test(data.code)) {
    return NextResponse.json({ ok: false, error: 'invalid_code' }, { status: 422 });
  }
  if (!data.date || !gecerliGun(data.date) || !data.time || !(cfg.slots as readonly string[]).includes(data.time)) {
    return NextResponse.json({ ok: false, error: 'invalid_slot' }, { status: 422 });
  }
  if (!data.name || data.name.trim().length < 2 || data.name.length > 120) {
    return NextResponse.json({ ok: false, error: 'invalid_name' }, { status: 422 });
  }
  // Telefon ZORUNLU: görüşme WhatsApp'tan yapılır; ekip hastaya buradan ulaşır.
  let phone = '';
  try {
    const region =
      data.country && /^[A-Za-z]{2}$/.test(data.country) ? (data.country.toUpperCase() as CountryCode) : undefined;
    const parsed = data.phone ? parsePhoneNumberFromString(data.phone.trim(), region) : undefined;
    if (!parsed || !parsed.isValid()) {
      return NextResponse.json({ ok: false, error: 'invalid_phone' }, { status: 422 });
    }
    phone = parsed.number; // E.164
  } catch {
    return NextResponse.json({ ok: false, error: 'invalid_phone' }, { status: 422 });
  }
  const email = data.email && data.email.trim() ? data.email.trim() : '';
  if (email && (!isValidEmail(email) || email.length > 200)) {
    return NextResponse.json({ ok: false, error: 'invalid_email' }, { status: 422 });
  }
  if (data.consent !== true) {
    return NextResponse.json({ ok: false, error: 'consent_required' }, { status: 422 });
  }
  const note = (data.note ?? '').slice(0, 2000);
  const timeZone = (data.timeZone ?? '').slice(0, 64);
  const locale = (data.locale ?? 'tr').slice(0, 5);
  const country = (data.country ?? '').slice(0, 60);

  const at = new Date().toISOString();
  // Randevu akışının bilgilendirme metni sürümü (content/consultation.ts → legalText).
  const consentTextVersion = 'danismanlik-2026-10-11';
  const gunMetni = new Intl.DateTimeFormat('tr-TR', { dateStyle: 'full', timeZone: 'UTC' }).format(
    new Date(`${data.date}T12:00:00Z`)
  );

  let ulke = country || '—';
  if (/^[A-Za-z]{2}$/.test(country)) {
    try {
      const ad = new Intl.DisplayNames(['tr'], { type: 'region' }).of(country.toUpperCase());
      if (ad) ulke = `${ad} (${country.toUpperCase()})`;
    } catch {
      /* yoksay */
    }
  }

  console.info('[danismanlik-talebi] Yeni talep alındı:', { hasEmail: Boolean(email), locale, at });

  // ---- Kliniğe e-posta (birincil kanal) ----------------------------------
  try {
    const { transport, from } = createMailTransport();
    const to = process.env.LEAD_NOTIFICATION_EMAIL || siteConfig.email;
    const wa = `https://wa.me/${phone.replace(/[^\d]/g, '')}`;
    const satir = (etiket: string, deger: string, vurgu = false) =>
      `<tr><td style="padding:6px 0;color:#555;width:170px;vertical-align:top;">${esc(etiket)}</td><td style="padding:6px 0;${
        vurgu ? 'font-weight:700;font-size:16px;' : 'font-weight:600;'
      }">${deger}</td></tr>`;

    const html = `
    <div style="font-family:Arial,Helvetica,sans-serif;max-width:600px;margin:0 auto;color:#111;">
      <h2 style="margin:0 0 4px;">Online Danışmanlık Talebi</h2>
      <p style="margin:0 0 16px;color:#555;">${esc(data.name)} — ${esc(gunMetni)}, ${esc(data.time)} (İstanbul)</p>
      <table style="width:100%;border-collapse:collapse;font-size:14px;">
        ${satir('Randevu kodu', `<span style="font-family:monospace;">${esc(data.code)}</span>`, true)}
        ${satir('Gün ve saat', `${esc(gunMetni)}, ${esc(data.time)} (İstanbul)`, true)}
        ${satir('Hastanın saat dilimi', esc(timeZone || '—'))}
        ${satir('Ad Soyad', esc(data.name))}
        ${satir('Ülke', esc(ulke))}
        ${satir('Telefon / WhatsApp', `<a href="${esc(wa)}">${esc(phone)}</a>`, true)}
        ${satir('E-posta', email ? `<a href="mailto:${esc(email)}">${esc(email)}</a>` : '—')}
        ${satir('Sayfa dili', esc(locale))}
        ${satir('Talep zamanı', esc(at))}
        ${satir('Bilgilendirme onayı', `Onaylandı (metin sürümü: ${esc(consentTextVersion)})`)}
      </table>
      <div style="margin-top:16px;">
        <p style="margin:0 0 4px;color:#555;font-size:14px;">Hastanın notu</p>
        <div style="padding:12px;background:#f6f7f9;border-radius:8px;font-size:14px;white-space:pre-wrap;">${esc(note || '—')}</div>
      </div>
      <div style="margin-top:16px;padding:12px;background:#e7f7ee;border-radius:8px;color:#0a7c42;font-weight:600;">
        Sıradaki adım: uygunluğu kontrol edip randevuyu
        <a href="${esc(wa)}" style="color:#0a7c42;">WhatsApp’tan yazılı olarak onaylayın</a>.
        Hasta kodu ayrıca WhatsApp’tan da gönderebilir.
      </div>
    </div>`;

    const text = [
      `Online Danışmanlık Talebi — ${data.name}`,
      '',
      `Randevu kodu: ${data.code}`,
      `Gün ve saat: ${gunMetni}, ${data.time} (İstanbul)`,
      `Hastanın saat dilimi: ${timeZone || '—'}`,
      `Ad Soyad: ${data.name}`,
      `Ülke: ${ulke}`,
      `Telefon / WhatsApp: ${phone} (${wa})`,
      `E-posta: ${email || '—'}`,
      `Sayfa dili: ${locale}`,
      `Talep zamanı: ${at}`,
      `Bilgilendirme onayı: Onaylandı (metin sürümü: ${consentTextVersion})`,
      '',
      `Not: ${note || '—'}`,
      '',
      'Sıradaki adım: uygunluğu kontrol edip randevuyu WhatsApp’tan yazılı olarak onaylayın.'
    ].join('\n');

    await transport.sendMail({
      from: `"ME Urology Clinic" <${from}>`,
      to,
      subject: `Online Danışmanlık Talebi — ${data.name} — ${data.date} ${data.time}`,
      html,
      text,
      ...(email ? { replyTo: email } : {})
    });
  } catch (err) {
    console.error('[danismanlik-talebi] E-posta bildirimi gönderilemedi:', err);
    return NextResponse.json({ ok: false, error: 'delivery_failed' }, { status: 503 });
  }

  // ---- Başvuru tablosu (CRM) — başarısızlık talebi geçersiz kılmaz --------
  await postToCrm(
    {
      at,
      name: data.name.trim(),
      country,
      email,
      phone,
      treatment: 'online-danismanlik',
      message: `ONLINE DANIŞMANLIK TALEBİ · Kod ${data.code} · ${gunMetni} ${data.time} (İstanbul)${
        timeZone ? ` · Hastanın saat dilimi: ${timeZone}` : ''
      }${note ? ` · Not: ${note}` : ''}`,
      locale,
      consentTextVersion
    },
    '[danismanlik-talebi]'
  );

  return NextResponse.json({ ok: true });
}
