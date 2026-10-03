'use client';

import { useState, useRef, useEffect } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { Link, usePathname, treatmentHref } from '@/i18n/navigation';
import type { NavItem } from '@/config/nav';
import type { Locale } from '@/i18n/routing';
import { Icon } from './Icon';

/** Masaüstü üst-kategori açılır menüsü (hover + klavye erişimli). */
export function NavDropdown({ item }: { item: NavItem }) {
  const locale = useLocale() as Locale;
  const t = useTranslations('Nav');
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLLIElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false);
    }
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onClick);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onClick);
    };
  }, []);

  function openNow() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(true);
  }
  function closeSoon() {
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  }

  return (
    <li
      ref={ref}
      className="relative"
      onMouseEnter={openNow}
      onMouseLeave={closeSoon}
    >
      {/* Tek kontrol: metin sayfaya götürür, ok yalnızca alt menüyü açar/kapatır.
          İkisi tek bir hover grubu; ayrı ayrı iki menü öğesi gibi görünmez. */}
      <div className="group flex items-center rounded-lg transition-colors hover:bg-surface-2">
        <Link
          href={item.href}
          className="whitespace-nowrap rounded-s-lg py-2 ps-2 pe-1 text-[13px] font-medium text-fg/85 transition-colors group-hover:text-fg"
        >
          {t(item.key)}
        </Link>
        <button
          type="button"
          aria-haspopup="menu"
          aria-expanded={open}
          aria-label={t('toggleSubmenu')}
          onClick={() => setOpen((v) => !v)}
          onFocus={openNow}
          className="inline-flex h-8 w-6 items-center justify-center rounded-e-lg pe-1 text-muted transition-colors group-hover:text-fg"
        >
          <Icon name="arrow" size={14} className={`transition-transform ${open ? '-rotate-90' : 'rotate-90'}`} />
        </button>
      </div>
      {open && item.children && (
        <ul className="absolute start-0 top-full z-50 mt-1 min-w-[15rem] overflow-hidden rounded-xl border border-border bg-surface py-1.5 shadow-card">
          {item.children.map((child) => (
            <li key={child.slug}>
              <Link
                href={treatmentHref(child.slug, locale)}
                className="block whitespace-nowrap px-4 py-2.5 text-sm text-fg/90 transition-colors hover:bg-surface-2 hover:text-primary"
              >
                {t(child.key)}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}
