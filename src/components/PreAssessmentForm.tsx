'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';
import type { Locale } from '@/i18n/routing';
import { Icon } from './Icon';
import { TurnstileWidget } from './TurnstileWidget';
import { CountrySelect } from './CountrySelect';

type Status = 'idle' | 'submitting' | 'success' | 'error';

/** Açılır listede gösterilecek en az veri: slug + o dildeki başlık. */
export interface TreatmentOption {
  slug: string;
  title: string;
}

/**
 * PERFORMANS NOTU — treatments.ts'i BURADAN IMPORT ETMEYİN.
 *
 * Bu bir istemci bileşenidir. `@/content/treatments` dosyası 6 dilde tüm
 * tedavi metinlerini içerir (~2 MB kaynak). Buradan import edilirse paketleyici
 * dosyanın TAMAMINI tarayıcıya gönderir; ölçümde tek bir 506 KB'lık JS yığını
 * ve mobilde 3,3 sn LCP olarak görüldü. Oysa listenin ihtiyacı yalnızca
 * slug + başlıktır. Bu yüzden seçenekler SUNUCUDA çözülüp prop olarak geçilir.
 */
export function PreAssessmentForm({
  defaultTreatment,
  treatmentOptions = []
}: {
  defaultTreatment?: string;
  treatmentOptions?: TreatmentOption[];
}) {
  const t = useTranslations('Form');
  const tl = useTranslations('Legal');
  const locale = useLocale() as Locale;
  const [status, setStatus] = useState<Status>('idle');
  const [clientError, setClientError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setClientError(null);
    const form = e.currentTarget;
    const fd = new FormData(form);

    const name = String(fd.get('name') ?? '').trim();
    const email = String(fd.get('email') ?? '').trim();
    const phone = String(fd.get('phone') ?? '').trim();
    const consent = fd.get('consent') === 'on';

    // İstemci tarafı doğrulama — kullanıcı diliyle net mesajlar.
    if (name.length < 2) {
      setClientError(t('validationName'));
      return;
    }
    if (!email && !phone) {
      setClientError(t('validationContact'));
      return;
    }
    if (!consent) {
      setClientError(t('consentRequired'));
      return;
    }

    setStatus('submitting');
    try {
      const res = await fetch('/api/on-degerlendirme', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          country: String(fd.get('country') ?? ''),
          email,
          phone,
          treatment: String(fd.get('treatment') ?? ''),
          message: String(fd.get('message') ?? ''),
          consent,
          locale,
          // Honeypot — gerçek kullanıcı boş bırakır; bot doldurursa sunucu reddeder.
          company: String(fd.get('company') ?? ''),
          turnstileToken: String(fd.get('turnstileToken') ?? '')
        })
      });
      if (!res.ok) {
        // Sunucu telefonu geçersiz bulduysa genel hata yerine nedenini göster;
        // hasta neyi düzelteceğini bilsin (libphonenumber doğrulaması).
        let code = '';
        try {
          code = ((await res.json()) as { error?: string }).error ?? '';
        } catch {
          /* gövde okunamadıysa genel hataya düş */
        }
        if (code === 'invalid_phone') {
          setStatus('idle');
          setClientError(t('validationPhone'));
          return;
        }
        throw new Error('request_failed');
      }
      setStatus('success');
      form.reset();
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div
        role="status"
        className="rounded-xl border border-success/40 bg-success/10 p-6"
      >
        <div className="mb-2 flex items-center gap-2 text-success">
          <Icon name="check" size={22} />
          <h3 className="font-serif text-lg font-bold text-fg">{t('successTitle')}</h3>
        </div>
        <p className="text-sm text-muted">{t('successBody')}</p>
      </div>
    );
  }

  const req = <span className="text-danger" aria-hidden="true">*</span>;

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-4">
      {/*
        Honeypot — kullanıcıya görünmez, klavye ve ekran okuyucu erişemez.

        `left: -9999px` KULLANILMAZ. RTL (Arapça) düzende satır ekseni
        ters çevrildiği için bu değer öğeyi belgenin kaydırılabilir alanına
        taşıyordu: /ar mobilde belge genişliği 375 px yerine 10375 px
        çıkıyor ve sayfa yana kayıyordu. Aşağıdaki kırpma (clip) yöntemi
        yön bağımsızdır ve hiçbir dilde taşma üretmez.
      */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          width: '1px',
          height: '1px',
          margin: '-1px',
          padding: 0,
          border: 0,
          overflow: 'hidden',
          clipPath: 'inset(50%)',
          whiteSpace: 'nowrap'
        }}
      >
        <label htmlFor="company">Company (leave empty)</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label={<>{t('name')} {req}</>} htmlFor="name">
          <input id="name" name="name" type="text" autoComplete="name" placeholder={t('namePlaceholder')} className="form-input" required />
        </Field>
        <Field label={t('country')} htmlFor="country">
          <CountrySelect id="country" name="country" placeholder={t('countryPlaceholder')} />
        </Field>
        <Field label={t('email')} htmlFor="email">
          <input id="email" name="email" type="email" autoComplete="email" placeholder={t('emailPlaceholder')} className="form-input" inputMode="email" />
        </Field>
        <Field label={t('phone')} htmlFor="phone">
          <input id="phone" name="phone" type="tel" autoComplete="tel" placeholder={t('phonePlaceholder')} className="form-input" inputMode="tel" />
        </Field>
      </div>

      <Field label={t('treatment')} htmlFor="treatment">
        <select id="treatment" name="treatment" defaultValue={defaultTreatment ?? ''} className="form-input">
          <option value="">{t('treatmentPlaceholder')}</option>
          {treatmentOptions.map((o) => (
            <option key={o.slug} value={o.slug}>
              {o.title}
            </option>
          ))}
        </select>
      </Field>

      <Field label={t('message')} htmlFor="message">
        <textarea id="message" name="message" rows={4} placeholder={t('messagePlaceholder')} className="form-input resize-y" />
      </Field>

      {/* KALDIRILDI: devre dışı dosya yükleme alanı.
          Çalışmayan bir alan yayında gösterilmez. Şifreli depolama + KVKK özel
          nitelikli veri onayı ile birlikte Faz 4'te eklenecek; o zamana kadar
          hastalar dosyalarını WhatsApp'tan iletiyor. */}

      <p className="text-sm text-muted">
        {t('privacyLinksIntro')}{' '}
        <Link href="/yasal/kvkk" className="font-medium text-primary underline underline-offset-2">
          {tl('kvkkTitle')}
        </Link>{' '}
        ·{' '}
        <Link href="/yasal/acik-riza" className="font-medium text-primary underline underline-offset-2">
          {tl('consentTitle')}
        </Link>
      </p>

      <label className="flex items-start gap-3 text-sm">
        <input type="checkbox" name="consent" className="mt-1 h-4 w-4 shrink-0 rounded border-border accent-[rgb(var(--c-primary))]" required />
        <span className="text-muted">{t('consent')} {req}</span>
      </label>

      {/* Turnstile — anahtar yoksa hiç render edilmez (yer tutucu bırakmaz). */}
      <TurnstileWidget locale={locale} />

      {clientError && (
        <p role="alert" className="flex items-center gap-2 text-sm text-danger">
          <Icon name="alert" size={16} />
          {clientError}
        </p>
      )}

      {status === 'error' && (
        <div role="alert" className="rounded-lg border border-danger/40 bg-danger/10 p-4">
          <p className="text-sm font-semibold text-fg">{t('errorTitle')}</p>
          <p className="text-sm text-muted">{t('errorBody')}</p>
        </div>
      )}

      <button type="submit" className="btn-primary w-full sm:w-auto" disabled={status === 'submitting'}>
        {status === 'submitting' ? t('submitting') : t('submit')}
      </button>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  children
}: {
  label: React.ReactNode;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-medium text-fg">
        {label}
      </label>
      {children}
    </div>
  );
}
