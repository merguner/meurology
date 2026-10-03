import { createNavigation } from 'next-intl/navigation';
import { routing } from './routing';
import { locales, type Locale } from './routing';
import { localizedSlug } from './slugs';

// Yerelleştirilmiş <Link>, useRouter, usePathname, redirect, getPathname yardımcıları.
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);

// getPathname'in kabul ettiği href tipi (static anahtar veya {pathname, params}).
type Href = Parameters<typeof getPathname>[0]['href'];

/**
 * Bir sayfa için lokalize canonical + hreflang alternates üretir.
 *
 * canonical: mevcut dilin lokalize yolu (metadataBase ile birleşip
 *            https://www.meurology.com/... olur).
 * languages: tüm diller + **x-default**.
 *
 * x-default → /en: Dili desteklenmeyen ziyaretçiler için varsayılan sürüm.
 * Türkçe değil İngilizce seçildi; site uluslararası hasta odaklıdır ve
 * Türkçe sürüm yönetmelik gereği daha kısıtlı içerik taşır.
 *
 * href: static route anahtarı (ör. '/cerrah') veya {pathname:'/tedaviler/[slug]', params}.
 */
export function buildAlternates(locale: Locale, href: Href) {
  return {
    canonical: getPathname({ locale, href }),
    languages: {
      ...(Object.fromEntries(
        locales.map((l) => [l, getPathname({ locale: l, href })])
      ) as Record<Locale, string>),
      'x-default': getPathname({ locale: 'en', href })
    }
  };
}

/**
 * Bir tedavi sayfasına, verilen dilin KENDİ slug'ıyla link üretir.
 * canonical: içerikteki Türkçe anahtar (ör. 'bobrek-tasi').
 * Çıktı <Link href={...}> ile doğrudan kullanılabilir.
 */
export function treatmentHref(canonical: string, locale: Locale) {
  return {
    pathname: '/tedaviler/[slug]' as const,
    params: { slug: localizedSlug(canonical, locale) }
  };
}

/**
 * Tedavi sayfası için canonical + hreflang.
 * buildAlternates burada KULLANILAMAZ: her dilin slug'ı farklı olduğundan
 * tek bir slug değeriyle tüm diller üretilemez.
 */
export function buildTreatmentAlternates(locale: Locale, canonical: string) {
  const urlFor = (l: Locale) => getPathname({ locale: l, href: treatmentHref(canonical, l) });
  return {
    canonical: urlFor(locale),
    languages: {
      ...(Object.fromEntries(locales.map((l) => [l, urlFor(l)])) as Record<Locale, string>),
      'x-default': urlFor('en')
    }
  };
}
