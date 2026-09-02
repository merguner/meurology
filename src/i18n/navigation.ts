import { createNavigation } from 'next-intl/navigation';
import { routing } from './routing';
import { locales, type Locale } from './routing';

// Yerelleştirilmiş <Link>, useRouter, usePathname, redirect, getPathname yardımcıları.
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);

// getPathname'in kabul ettiği href tipi (static anahtar veya {pathname, params}).
type Href = Parameters<typeof getPathname>[0]['href'];

/**
 * Bir sayfa için lokalize canonical + hreflang alternates üretir.
 * canonical: mevcut dilin lokalize yolu; languages: tüm diller (hreflang).
 * href: static route anahtarı (ör. '/cerrah') veya {pathname:'/tedaviler/[slug]', params}.
 */
export function buildAlternates(locale: Locale, href: Href) {
  return {
    canonical: getPathname({ locale, href }),
    languages: Object.fromEntries(
      locales.map((l) => [l, getPathname({ locale: l, href })])
    ) as Record<Locale, string>
  };
}
