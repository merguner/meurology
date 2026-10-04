'use client';

import { useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { patientStories, experienceCountries } from '@/content/experiences';
import type { Locale } from '@/i18n/routing';
import { Icon } from './Icon';

function countryName(code: string, locale: string): string {
  try {
    return new Intl.DisplayNames([locale], { type: 'region' }).of(code) ?? code;
  } catch {
    return code;
  }
}

/**
 * PERFORMANS NOTU — treatments.ts'i BURADAN IMPORT ETMEYİN (bkz. PreAssessmentForm).
 * İstemci bileşeni olduğu için import edilirse 6 dildeki tüm tedavi metni
 * tarayıcıya gönderilir. Başlıklar sunucuda çözülüp prop olarak geçilir.
 */
export function ExperiencesList({
  treatmentTitles = {}
}: {
  /** slug -> o dildeki başlık. Sunucuda hazırlanır. */
  treatmentTitles?: Record<string, string>;
}) {
  const t = useTranslations('Experiences');
  const locale = useLocale() as Locale;
  const [country, setCountry] = useState<string>('all');

  const filtered =
    country === 'all'
      ? patientStories
      : patientStories.filter((s) => s.country === country);

  return (
    <>
      {/* Ülke filtresi */}
      <div className="mb-8 flex flex-wrap items-center gap-2" role="group" aria-label={t('filterByCountry')}>
        <span className="me-1 text-sm font-medium text-muted">{t('filterByCountry')}:</span>
        <FilterChip active={country === 'all'} onClick={() => setCountry('all')}>
          {t('allCountries')}
        </FilterChip>
        {experienceCountries.map((code) => (
          <FilterChip key={code} active={country === code} onClick={() => setCountry(code)}>
            {countryName(code, locale)}
          </FilterChip>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="rounded-xl border border-dashed border-border bg-surface-2 p-8 text-center text-muted">
          {t('empty')}
        </p>
      ) : (
        <ul className="grid gap-6 md:grid-cols-2">
          {filtered.map((s) => {
            const treatmentTitle = s.treatmentSlug ? (treatmentTitles[s.treatmentSlug] ?? null) : null;
            const dateStr = new Intl.DateTimeFormat(locale, {
              year: 'numeric',
              month: 'long'
            }).format(new Date(`${s.date}-01T00:00:00`));
            return (
              <li key={s.id} className="card p-6">
                <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                  <span className="chip">
                    <Icon name="pin" size={14} className="text-primary" />
                    {countryName(s.country, locale)}
                  </span>
                  {s.rating ? (
                    <span className="text-[#F4B400]" aria-label={`${s.rating} / 5`}>
                      {'★'.repeat(s.rating)}
                    </span>
                  ) : null}
                </div>
                <blockquote className="text-sm leading-relaxed text-fg/90">“{s.quote}”</blockquote>
                <footer className="mt-3 flex flex-wrap items-center gap-x-2 text-sm">
                  <span className="font-semibold">{s.name}</span>
                  <span className="text-muted">· {dateStr}</span>
                  {treatmentTitle ? <span className="text-muted">· {treatmentTitle}</span> : null}
                </footer>
              </li>
            );
          })}
        </ul>
      )}

      <p className="mt-8 text-xs text-muted">{t('consentNote')}</p>
    </>
  );
}

function FilterChip({
  active,
  onClick,
  children
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors ${
        active
          ? 'border-primary bg-primary text-primary-fg'
          : 'border-border bg-surface text-fg hover:bg-surface-2'
      }`}
    >
      {children}
    </button>
  );
}
