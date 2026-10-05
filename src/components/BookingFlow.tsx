'use client';

import { useState, useEffect } from 'react';
import { track } from '@/lib/analytics';
import { useTranslations } from 'next-intl';
import type { Locale } from '@/i18n/routing';
import type { ConsultationCopy } from '@/content/consultation';
import { siteConfig, whatsappLink, formatEUR } from '@/config/site';
import { Icon } from './Icon';
import { CountrySelect } from './CountrySelect';

/** Klinik saatini (Europe/Istanbul, kalıcı UTC+3) hasta saat dilimine çevirir. */
function slotToLocal(dateStr: string, hhmm: string, tz: string, locale: string): string {
  try {
    const [h, m] = hhmm.split(':').map(Number);
    const [y, mo, d] = dateStr.split('-').map(Number);
    const utcMs = Date.UTC(y, mo - 1, d, h - 3, m); // İstanbul = UTC+3 (DST yok)
    return new Intl.DateTimeFormat(locale, {
      hour: '2-digit',
      minute: '2-digit',
      timeZone: tz
    }).format(new Date(utcMs));
  } catch {
    return hhmm;
  }
}

function pad(n: number): string {
  return String(n).padStart(2, '0');
}

function toDateStr(d: Date): string {
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

/** Bugünden itibaren yalnızca izin verilen hafta içi günlerini döndürür. */
function nextAvailableDates(weekdays: readonly number[], count: number): string[] {
  const out: string[] = [];
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  let guard = 0;
  while (out.length < count && guard < 180) {
    if (weekdays.includes(d.getDay())) out.push(toDateStr(d));
    d.setDate(d.getDate() + 1);
    guard++;
  }
  return out;
}

function makeCode(dateStr: string): string {
  const rand = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `ME-${dateStr.replace(/-/g, '')}-${rand}`;
}

export function BookingFlow({ copy, locale }: { copy: ConsultationCopy; locale: Locale }) {
  const c = copy;
  const cfg = siteConfig.consultation;
  // Tam ücret ifadesi (ör. "200 € (KDV dahil)") — ödeme adımında ve WhatsApp mesajında.
  const price = `${formatEUR(cfg.consultationFeeEUR, locale)} (${c.vatIncluded})`;


  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [tz, setTz] = useState('Europe/Istanbul');
  const [availableDates, setAvailableDates] = useState<string[]>([]);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [name, setName] = useState('');
  const [country, setCountry] = useState('');
  const [note, setNote] = useState('');
  const [consent, setConsent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [code, setCode] = useState('');
  const [cardStatus, setCardStatus] = useState<'idle' | 'loading' | 'unavailable' | 'error'>('idle');
  const tp = useTranslations('Payment');

  /**
   * KARTLI ÖDEME — placeholder akış. /api/odeme'ye istek atar; entegrasyon
   * aktifse checkoutUrl'e yönlendirir, değilse "kullanılamıyor" mesajı gösterir.
   */
  async function startCardPayment() {
    setCardStatus('loading');
    try {
      const res = await fetch('/api/odeme', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code, amountEUR: cfg.consultationFeeEUR, name, country })
      });
      const result = await res.json();
      if (result?.ok && result?.checkoutUrl) {
        window.location.href = result.checkoutUrl as string; // gerçek ödeme sayfası
        return;
      }
      setCardStatus('unavailable'); // not_configured / not_implemented
    } catch {
      setCardStatus('error');
    }
  }

  // İstemcide: saat dilimi + yalnızca hafta içi (Pzt–Cuma) uygun günler.
  useEffect(() => {
    try {
      setTz(Intl.DateTimeFormat().resolvedOptions().timeZone || 'Europe/Istanbul');
    } catch {
      /* yoksay */
    }
    const days = nextAvailableDates(cfg.availableWeekdays, 20);
    setAvailableDates(days);
    setDate((prev) => prev || days[0] || '');
  }, [cfg.availableWeekdays]);

  function goStep2() {
    setError(null);
    if (!date || !time) {
      setError(c.validationSlot);
      return;
    }
    setStep(2);
  }

  function create() {
    setError(null);
    if (name.trim().length < 2) {
      setError(c.validationName);
      return;
    }
    if (!consent) {
      setError(c.consentRequired);
      return;
    }
    setCode(makeCode(date));
    setStep(3);
  }

  const dateLabel = date
    ? new Intl.DateTimeFormat(locale, { dateStyle: 'full' }).format(new Date(`${date}T00:00:00`))
    : '';
  // Kullanıcının saat dilimi İstanbul ise dönüşüm göstermek gereksiz (aynı saat).
  const isIstanbul = tz === 'Europe/Istanbul';
  const localTime = date && time ? slotToLocal(date, time, tz, locale) : '';
  const waMessage = c.whatsappMessage.replace('{code}', code).replace('{amount}', price);

  return (
    <div className="card p-6 md:p-8">
      {/* Adım göstergesi */}
      <ol className="mb-6 flex items-center gap-2 text-xs font-medium text-muted">
        {[1, 2, 3].map((s) => (
          <li key={s} className="flex items-center gap-2">
            <span
              className={`flex h-6 w-6 items-center justify-center rounded-full ${
                step >= s ? 'bg-primary text-primary-fg' : 'bg-surface-2 text-muted'
              }`}
            >
              {s}
            </span>
            {s < 3 && <span className="h-px w-6 bg-border" aria-hidden="true" />}
          </li>
        ))}
      </ol>

      {/* ADIM 1 — Gün ve saat */}
      {step === 1 && (
        <div>
          <h3 className="font-serif text-lg font-bold">{c.step1Title}</h3>
          <p className="mt-1 text-xs text-muted">
            {c.clinicTimeNote}
            {!isIstanbul && (
              <>
                {' · '}
                {c.timezoneLabel}: <span className="font-mono">{tz}</span>
              </>
            )}
          </p>

          <div className="mt-4">
            <label htmlFor="cal-date" className="mb-1.5 block text-sm font-medium">
              {c.selectDate}
            </label>
            {/* Yalnızca hafta içi (Pzt–Cuma) günler; hafta sonu hiç listelenmez. */}
            <select
              id="cal-date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="form-input"
            >
              {availableDates.map((ds) => (
                <option key={ds} value={ds}>
                  {new Intl.DateTimeFormat(locale, {
                    weekday: 'long',
                    day: 'numeric',
                    month: 'long'
                  }).format(new Date(`${ds}T00:00:00`))}
                </option>
              ))}
            </select>
          </div>

          <div className="mt-4">
            <p className="mb-1.5 text-sm font-medium">{c.selectTime}</p>
            <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
              {cfg.slots.map((s) => {
                const active = time === s;
                return (
                  <button
                    key={s}
                    type="button"
                    onClick={() => {
                      setTime(s);
                      // Olcum: saat ve tarih GONDERILMEZ; yalnizca secim yapildigi bilgisi.
                      track('consultation_slot_selected', { source: 'ozel-danismanlik' });
                    }}
                    aria-pressed={active}
                    className={`rounded-lg border px-2 py-2 text-sm transition-colors ${
                      active
                        ? 'border-primary bg-primary text-primary-fg'
                        : 'border-border bg-surface hover:bg-surface-2'
                    }`}
                  >
                    {s}
                    {date && !isIstanbul && (
                      <span className={`block text-[11px] ${active ? 'text-primary-fg/80' : 'text-muted'}`}>
                        {slotToLocal(date, s, tz, locale)} {c.yourTimeLabel}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {error && <p role="alert" className="mt-4 text-sm text-danger">{error}</p>}

          <button type="button" onClick={goStep2} className="btn-primary mt-6 w-full sm:w-auto">
            {c.next}
            <Icon name="arrow" size={18} className="rtl:rotate-180" />
          </button>
        </div>
      )}

      {/* ADIM 2 — Bilgiler + onay */}
      {step === 2 && (
        <div>
          <h3 className="font-serif text-lg font-bold">{c.step2Title}</h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="cal-name" className="mb-1.5 block text-sm font-medium">
                {c.nameLabel} <span className="text-danger">*</span>
              </label>
              <input id="cal-name" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder={c.namePlaceholder} className="form-input" />
            </div>
            <div>
              <label htmlFor="cal-country" className="mb-1.5 block text-sm font-medium">{c.countryLabel}</label>
              <CountrySelect id="cal-country" value={country} onChange={setCountry} placeholder={c.countryPlaceholder} />
            </div>
          </div>
          <div className="mt-4">
            <label htmlFor="cal-note" className="mb-1.5 block text-sm font-medium">{c.noteLabel}</label>
            <textarea id="cal-note" rows={3} value={note} onChange={(e) => setNote(e.target.value)} placeholder={c.notePlaceholder} className="form-input resize-y" />
          </div>

          {/* Bilgilendirme + onay */}
          <div className="mt-5 rounded-lg border border-border bg-surface-2 p-4">
            <p className="mb-2 text-sm font-semibold">{c.legalTitle}</p>
            <ul className="space-y-1.5">
              {c.legalText.map((p, i) => (
                <li key={i} className="text-xs leading-relaxed text-muted">{p}</li>
              ))}
            </ul>
          </div>
          <label className="mt-4 flex items-start gap-3 text-sm">
            <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} className="mt-1 h-4 w-4 shrink-0 rounded border-border accent-[rgb(var(--c-primary))]" />
            <span className="text-muted">{c.consentLabel} <span className="text-danger">*</span></span>
          </label>

          {error && <p role="alert" className="mt-4 text-sm text-danger">{error}</p>}

          <div className="mt-6 flex flex-col gap-2.5 sm:flex-row">
            <button type="button" onClick={() => setStep(1)} className="btn-outline">
              <Icon name="arrow" size={18} className="rotate-180 rtl:rotate-0" />
              {c.back}
            </button>
            <button type="button" onClick={create} className="btn-primary">{c.create}</button>
          </div>
        </div>
      )}

      {/* ADIM 3 — Özet + IBAN + WhatsApp dekont */}
      {step === 3 && (
        <div>
          <div className="mb-4 flex items-center gap-2 text-success">
            <Icon name="check" size={22} />
            <h3 className="font-serif text-lg font-bold text-fg">{c.step3Title}</h3>
          </div>

          <dl className="grid gap-3 rounded-lg border border-border bg-surface-2 p-4 text-sm sm:grid-cols-2">
            <div>
              <dt className="label-mono">{c.dateTimeLabel}</dt>
              <dd className="mt-0.5 font-medium">{dateLabel} · {time} (İstanbul)</dd>
              {localTime && !isIstanbul && (
                <dd className="text-xs text-muted">{localTime} {c.yourTimeLabel}</dd>
              )}
            </div>
            <div>
              <dt className="label-mono">{c.codeLabel}</dt>
              <dd className="mt-0.5 font-mono text-base font-bold text-primary">{code}</dd>
            </div>
            <div className="sm:col-span-2 border-t border-border pt-3">
              <dt className="label-mono">{c.amountLabel}</dt>
              <dd className="mt-0.5 text-base font-bold">
                {price}
              </dd>
            </div>
          </dl>

          {/* Havale bilgileri */}
          <div className="mt-4 rounded-lg border border-primary/25 bg-primary-soft/50 p-4">
            <p className="mb-3 flex items-center gap-2 font-semibold">
              <Icon name="shield" size={18} className="text-primary" /> {c.bankTitle}
            </p>
            <dl className="space-y-2 text-sm">
              <div className="flex justify-between gap-4">
                <dt className="shrink-0 text-muted">{c.accountHolderLabel}</dt>
                <dd className="min-w-0 break-words text-end font-medium">{cfg.bank.accountHolder}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="shrink-0 text-muted">{c.bankNameLabel}</dt>
                <dd className="min-w-0 break-words text-end font-medium">{cfg.bank.bankName}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="shrink-0 text-muted">{c.ibanLabel}</dt>
                <dd className="min-w-0 break-all text-end font-mono">{cfg.bank.iban}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="shrink-0 text-muted">{c.amountLabel}</dt>
                <dd className="min-w-0 break-words text-end font-semibold">{price}</dd>
              </div>
              <div className="flex justify-between gap-4 border-t border-border pt-2">
                <dt className="shrink-0 text-muted">{c.referenceLabel}</dt>
                <dd className="min-w-0 break-all text-end font-mono font-semibold text-primary">{code}</dd>
              </div>
            </dl>
            <p className="mt-3 text-xs text-muted">{c.instructions}</p>
          </div>

          {/* WhatsApp dekont butonu — kod önceden yazılmış */}
          <a
            href={whatsappLink(waMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp mt-4 w-full"
          >
            <Icon name="whatsapp" size={18} />
            {c.whatsappReceiptCta}
          </a>

          {/*
            ALTERNATIF: KARTLA ODE — HARICI BAGLANTI.
            Odeme saglayicisinin hazir odeme sayfasi
            NEXT_PUBLIC_CARD_PAYMENT_URL ile verilmisse, havale akisinin
            yanina bu dugme eklenir. Tanimli degilse HIC render edilmez;
            yayinda calismayan bir dugme gorunmez.
            Randevu kodu baglantiya parametre olarak eklenir ki odeme
            saglayicisindaki kayit randevuyla eslestirilebilsin.
          */}
          {cfg.cardPaymentUrl && (
            <>
              <div className="mt-3 flex items-center gap-3 text-xs text-muted">
                <span className="h-px flex-1 bg-border" aria-hidden="true" />
                {tp('orLabel')}
                <span className="h-px flex-1 bg-border" aria-hidden="true" />
              </div>
              <a
                href={`${cfg.cardPaymentUrl}${cfg.cardPaymentUrl.includes('?') ? '&' : '?'}ref=${encodeURIComponent(code)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline mt-3 w-full"
              >
                <Icon name="document" size={18} />
                {tp('cardCta')}
              </a>
            </>
          )}

          {/* Alternatif: site ici kartli odeme akisi (API). Entegrasyon
              aktif degilken buton ve uyari metni HIC render edilmez.
              TODO-DOGRULA: odeme altyapisi secilince cardPaymentEnabled: true. */}
          {cfg.cardPaymentEnabled && (
          <>
          <div className="mt-3 flex items-center gap-3 text-xs text-muted">
            <span className="h-px flex-1 bg-border" aria-hidden="true" />
            {tp('orLabel')}
            <span className="h-px flex-1 bg-border" aria-hidden="true" />
          </div>
          <button
            type="button"
            onClick={startCardPayment}
            disabled={cardStatus === 'loading'}
            className="btn-outline mt-3 w-full"
          >
            <Icon name="document" size={18} />
            {tp('cardCta')}
          </button>
          {cardStatus === 'unavailable' && (
            <p className="mt-2 rounded-lg border border-border bg-surface-2 p-3 text-xs text-muted">
              {tp('comingSoon')}
            </p>
          )}
          {cardStatus === 'error' && (
            <p role="alert" className="mt-2 text-xs text-danger">
              {tp('error')}
            </p>
          )}
          </>
          )}

          {/* Döviz/kur notu (yabancı hasta) + uluslararası hasta notu */}
          {c.fxNote && <p className="mt-4 text-xs text-muted">{c.fxNote}</p>}
          <p className="mt-2 rounded-lg border border-border bg-surface-2 p-3 text-xs text-muted">
            {c.internationalNote}
          </p>

          {/* Bekleyiş mesajı */}
          <div className="mt-4 rounded-lg border border-success/40 bg-success/10 p-4">
            <p className="mb-1 text-sm font-semibold text-fg">{c.waitingTitle}</p>
            <p className="text-sm text-muted">{c.waitingBody}</p>
          </div>
        </div>
      )}
    </div>
  );
}
