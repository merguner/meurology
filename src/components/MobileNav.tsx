'use client';

import { useState, useEffect } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import type { Locale } from '@/i18n/routing';
import { Link, usePathname, treatmentHref } from '@/i18n/navigation';
import { navItemsFor } from '@/config/nav';
import { SocialLinks } from './SocialLinks';

export function MobileNav() {
  const t = useTranslations('Nav');
  const locale = useLocale() as Locale;
  const navItems = navItemsFor(locale);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Rota değişince menüyü kapat.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Menü açıkken arka plan kaymasını engelle + Esc ile kapat.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false);
    }
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <div className="min-[1200px]:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={t('openMenu')}
        className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface text-fg"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      </button>

      {open && (
        <div className="fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <nav
            aria-label="Mobil menü"
            className="absolute end-0 top-0 h-full w-[82%] max-w-sm overflow-y-auto border-s border-border bg-surface p-5"
          >
            <div className="mb-4 flex items-center justify-between">
              <span className="label-mono">{t('home')}</span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label={t('closeMenu')}
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border text-fg"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </button>
            </div>
            <ul className="flex flex-col gap-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block rounded-lg px-3 py-3 text-base font-medium text-fg transition-colors hover:bg-surface-2"
                  >
                    {t(item.key)}
                  </Link>
                  {item.children && (
                    <ul className="mb-1 ms-3 border-s border-border ps-3">
                      {item.children.map((child) => (
                        <li key={child.slug}>
                          <Link
                            href={treatmentHref(child.slug, locale)}
                            className="block rounded-lg px-3 py-2 text-sm text-muted transition-colors hover:bg-surface-2 hover:text-primary"
                          >
                            {t(child.key)}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
            {/* Sosyal medya ikonları */}
            <div className="mt-6 border-t border-border pt-5">
              <SocialLinks />
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}
