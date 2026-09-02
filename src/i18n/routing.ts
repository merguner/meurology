import { defineRouting } from 'next-intl/routing';

export const locales = ['tr', 'en', 'ar', 'de', 'ru'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'tr';

// Sağdan-sola yazılan diller (layout dir="rtl" için).
export const rtlLocales: Locale[] = ['ar'];

/**
 * LOKALİZE ROUTE SLUG'LARI.
 * İç (canonical) anahtar Türkçe klasör adıdır; dış URL her dile göre değişir.
 * AR ve RU için temiz ASCII olması adına İngilizce slug kullanılır
 * (Cyrillic/Arapça URL'ler encode edilip okunaksız olurdu).
 *
 * Yeni bir çevrilmiş route eklerken: klasör Türkçe kalır, buraya diller eklenir.
 * Eski Türkçe slug'lardan yeni slug'lara 301 redirect: next.config.mjs.
 */
export const pathnames = {
  '/': '/',
  '/tedaviler': {
    tr: '/tedaviler',
    en: '/treatments',
    de: '/behandlungen',
    ru: '/treatments',
    ar: '/treatments'
  },
  '/tedaviler/[slug]': {
    tr: '/tedaviler/[slug]',
    en: '/treatments/[slug]',
    de: '/behandlungen/[slug]',
    ru: '/treatments/[slug]',
    ar: '/treatments/[slug]'
  },
  '/rekonstruktif-uroloji': {
    tr: '/rekonstruktif-uroloji',
    en: '/reconstructive-urology',
    de: '/rekonstruktive-urologie',
    ru: '/reconstructive-urology',
    ar: '/reconstructive-urology'
  },
  '/cerrah': {
    tr: '/cerrah',
    en: '/surgeon',
    de: '/chirurg',
    ru: '/surgeon',
    ar: '/surgeon'
  },
  '/hastane': {
    tr: '/hastane',
    en: '/hospital',
    de: '/krankenhaus',
    ru: '/hospital',
    ar: '/hospital'
  },
  '/uluslararasi-hasta': {
    tr: '/uluslararasi-hasta',
    en: '/international-patients',
    de: '/internationale-patienten',
    ru: '/international-patients',
    ar: '/international-patients'
  },
  '/deneyimler': {
    tr: '/deneyimler',
    en: '/experiences',
    de: '/erfahrungen',
    ru: '/experiences',
    ar: '/experiences'
  },
  '/ozel-danismanlik': {
    tr: '/ozel-danismanlik',
    en: '/online-consultation',
    de: '/online-beratung',
    ru: '/online-consultation',
    ar: '/online-consultation'
  },
  '/blog': '/blog',
  '/blog/[slug]': '/blog/[slug]',
  '/iletisim': {
    tr: '/iletisim',
    en: '/contact',
    de: '/kontakt',
    ru: '/contact',
    ar: '/contact'
  },
  '/yasal/kvkk': {
    tr: '/yasal/kvkk',
    en: '/legal/privacy',
    de: '/rechtliches/datenschutz',
    ru: '/legal/privacy',
    ar: '/legal/privacy'
  },
  '/yasal/acik-riza': {
    tr: '/yasal/acik-riza',
    en: '/legal/consent',
    de: '/rechtliches/einwilligung',
    ru: '/legal/consent',
    ar: '/legal/consent'
  }
} as const;

/** Tüm route anahtarları. */
export type AppPathname = keyof typeof pathnames;
/** Parametresiz (static) route anahtarları — doğrudan <Link href> için güvenli. */
export type StaticPathname = Exclude<AppPathname, '/tedaviler/[slug]' | '/blog/[slug]'>;

export const routing = defineRouting({
  locales,
  defaultLocale,
  // Her dil kendi ön ekiyle: /tr, /en, /ar ... (varsayılan dahil).
  localePrefix: 'always',
  pathnames
});
