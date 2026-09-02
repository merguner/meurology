'use client';

import { useState, useRef, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import { routing, type Locale } from '@/i18n/routing';

const LOCALE_LABELS: Record<Locale, string> = {
  tr: 'Türkçe',
  en: 'English',
  ar: 'العربية',
  de: 'Deutsch',
  ru: 'Русский'
};

export function LanguageSwitcher() {
  const t = useTranslations('Common');
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, []);

  function switchTo(next: Locale) {
    setOpen(false);
    // Aynı sayfada dili değiştir; dinamik route parametreleri ([slug]) korunur.
    router.replace(
      // @ts-expect-error next-intl: dinamik params tipi statik doğrulanamaz
      { pathname, params },
      { locale: next }
    );
  }

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t('language')}
        className="inline-flex h-10 items-center gap-1.5 rounded-lg border border-border bg-surface px-3 text-sm font-medium text-fg transition-colors hover:bg-surface-2"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
          <path d="M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18" stroke="currentColor" strokeWidth="1.4" />
        </svg>
        <span className="uppercase">{locale}</span>
      </button>
      {open && (
        <ul
          role="listbox"
          className="absolute end-0 z-50 mt-2 min-w-[9rem] overflow-hidden rounded-lg border border-border bg-surface py-1 shadow-card"
        >
          {routing.locales.map((l) => (
            <li key={l}>
              <button
                type="button"
                role="option"
                aria-selected={l === locale}
                onClick={() => switchTo(l)}
                className={`flex w-full items-center justify-between px-3 py-2 text-sm transition-colors hover:bg-surface-2 ${
                  l === locale ? 'font-semibold text-primary' : 'text-fg'
                }`}
              >
                <span>{LOCALE_LABELS[l]}</span>
                <span className="font-mono text-xs uppercase text-muted">{l}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
