'use client';

import { useRef, useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';
import type { Locale } from '@/i18n/routing';
import { Icon } from './Icon';
import { TurnstileWidget } from './TurnstileWidget';
import { CountrySelect } from './CountrySelect';
import { track } from '@/lib/analytics';
import {
  ALLOWED_ATTACHMENT_ACCEPT,
  MAX_ATTACHMENTS,
  MAX_ATTACHMENT_BYTES
} from '@/lib/formAttachments';

type Status = 'idle' | 'submitting' | 'success' | 'error';

/** Açılır listede gösterilecek en az veri: slug + o dildeki başlık. */
export interface TreatmentOption {
  slug: string;
  title: string;
}

/**
 * PERFORMANS NOTU — treatments.ts'i BURADAN IMPORT ETMEYİN.
 *
 * Bu bir istemci bileşenidir. `@/content/treatments` dosyası üç dilde tüm
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
  const [files, setFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  /**
   * ÇİFT GÖNDERİM KORUMASI.
   * Düğme `disabled` oluyor ama durum güncellemesi eşzamansızdır; hızlı
   * iki tıklama veya Enter'a basılı tutma iki isteği birden başlatabilir.
   * Bu kilit senkron çalışır ve ikinci çağrıyı hemen keser.
   */
  const submitting = useRef(false);

  function onFilesChange(e: React.ChangeEvent<HTMLInputElement>) {
    setClientError(null);
    const picked = Array.from(e.target.files ?? []);
    if (picked.length > MAX_ATTACHMENTS) {
      setClientError(t('validationTooManyFiles'));
      e.target.value = '';
      setFiles([]);
      return;
    }
    const tooBig = picked.find((f) => f.size > MAX_ATTACHMENT_BYTES);
    if (tooBig) {
      setClientError(t('validationFileTooLarge'));
      e.target.value = '';
      setFiles([]);
      return;
    }
    const allowed = /\.(pdf|jpe?g|png)$/i;
    const badType = picked.find((f) => !allowed.test(f.name));
    if (badType) {
      setClientError(t('validationFileType'));
      e.target.value = '';
      setFiles([]);
      return;
    }
    setFiles(picked);
  }

  function clearFiles() {
    setFiles([]);
    if (fileInputRef.current) fileInputRef.current.value = '';
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (submitting.current) return;
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

    submitting.current = true;
    setStatus('submitting');
    try {
      const payload = {
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
      };

      /*
        Dosya YOKSA eskisi gibi düz JSON gönderilir (daha küçük istek).
        Dosya varsa multipart'a geçilir: alanlar `payload` adlı JSON
        parçasında, belgeler `files` alanında gider.
      */
      let res: Response;
      if (files.length === 0) {
        res = await fetch('/api/on-degerlendirme', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
      } else {
        const body = new FormData();
        body.set('payload', JSON.stringify(payload));
        for (const f of files) body.append('files', f);
        // Content-Type ELLE VERİLMEZ: tarayıcı boundary'yi kendi ekler.
        res = await fetch('/api/on-degerlendirme', { method: 'POST', body });
      }

      if (!res.ok) {
        // Sunucu nedeni bildirdiyse genel hata yerine onu göster;
        // hasta neyi düzelteceğini bilsin.
        let code = '';
        try {
          code = ((await res.json()) as { error?: string }).error ?? '';
        } catch {
          /* gövde okunamadıysa genel hataya düş */
        }
        const fieldErrors: Record<string, string> = {
          invalid_phone: t('validationPhone'),
          too_many_files: t('validationTooManyFiles'),
          file_too_large: t('validationFileTooLarge'),
          file_type_not_allowed: t('validationFileType'),
          file_empty: t('validationFileType')
        };
        if (fieldErrors[code]) {
          setStatus('idle');
          setClientError(fieldErrors[code]);
          return;
        }
        throw new Error('request_failed');
      }
      setStatus('success');
      /*
        OLCUM: yalnizca formun gonderildigi bilgisi gider.
        Secilen tedavi, sikayet metni, ad, e-posta ve telefon
        BILEREK gonderilmez — bunlar saglik/kisisel veridir.
      */
      track('form_submit');
      form.reset();
      clearFiles();
    } catch {
      setStatus('error');
    } finally {
      submitting.current = false;
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

      {/*
        BELGE EKLEME.
        Dosyalar SUNUCUDA SAKLANMAZ; yalnızca kliniğe giden bildirim
        e-postasına eklenir. KVKK uyarısı alanın yanında durur, çünkü
        hasta "yükle" demeden önce okumalıdır.
      */}
      <div>
        <label htmlFor="files" className="mb-1.5 block text-sm font-medium text-fg">
          {t('attachments')}
        </label>
        {/*
          Yerel dosya seçici düğmesinin yazısı (ör. "Dosya seçilmedi")
          TARAYICININ dilinden gelir, sayfanın dilinden değil: Arapça bir
          sayfada Türkçe bir düğme çıkıyordu. Bu yüzden asıl input ekran
          okuyucuya açık kalacak biçimde gizlenir ve etiket kendi dilimizde
          düğme gibi biçimlendirilir. Odak halkası `peer` ile input'tan gelir.
        */}
        <input
          ref={fileInputRef}
          id="files"
          name="files"
          type="file"
          multiple
          accept={ALLOWED_ATTACHMENT_ACCEPT}
          onChange={onFilesChange}
          aria-describedby="files-hint files-kvkk"
          className="peer sr-only"
        />
        <div className="flex flex-wrap items-center gap-3">
          <label
            htmlFor="files"
            className="inline-flex cursor-pointer items-center gap-2 rounded-lg border border-border bg-surface-2 px-4 py-2.5 text-sm font-medium text-fg transition-colors hover:bg-border peer-focus-visible:outline-none peer-focus-visible:ring-2 peer-focus-visible:ring-ring peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-bg"
          >
            <Icon name="document" size={16} />
            {t('attachmentsChoose')}
          </label>
          {files.length === 0 && <span className="text-sm text-muted">{t('attachmentsNone')}</span>}
        </div>
        <p id="files-hint" className="mt-1.5 text-xs text-muted">
          {t('attachmentsHint')}
        </p>
        {files.length > 0 && (
          <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-muted">
            <span className="font-medium text-fg">{t('attachmentsSelected')}:</span>
            <span className="min-w-0 break-all">{files.map((f) => f.name).join(', ')}</span>
            <button
              type="button"
              onClick={clearFiles}
              className="font-medium text-primary underline underline-offset-2"
            >
              {t('attachmentsClear')}
            </button>
          </div>
        )}
        <p
          id="files-kvkk"
          className="mt-2 rounded-lg border border-border bg-surface-2 p-3 text-xs leading-relaxed text-muted"
        >
          <Icon name="shield" size={14} className="me-1.5 inline align-[-2px] text-primary" />
          {t('attachmentsKvkk')}
        </p>
      </div>

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
