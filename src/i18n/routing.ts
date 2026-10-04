import { defineRouting } from 'next-intl/routing';

export const locales = ['tr', 'en', 'ar', 'de', 'ru', 'fr'] as const;
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
    ar: '/treatments',
    fr: '/traitements'
  },
  '/tedaviler/[slug]': {
    tr: '/tedaviler/[slug]',
    en: '/treatments/[slug]',
    de: '/behandlungen/[slug]',
    ru: '/treatments/[slug]',
    ar: '/treatments/[slug]',
    fr: '/traitements/[slug]'
  },
  '/rekonstruktif-uroloji': {
    tr: '/rekonstruktif-uroloji',
    en: '/reconstructive-urology',
    de: '/rekonstruktive-urologie',
    ru: '/reconstructive-urology',
    ar: '/reconstructive-urology',
    fr: '/urologie-reconstructrice'
  },
  '/cerrah': {
    tr: '/cerrah',
    en: '/surgeon',
    de: '/chirurg',
    ru: '/surgeon',
    ar: '/surgeon',
    fr: '/chirurgien'
  },
  '/hastane': {
    tr: '/hastane',
    en: '/hospital',
    de: '/krankenhaus',
    ru: '/hospital',
    ar: '/hospital',
    fr: '/hopital'
  },
  '/uluslararasi-hasta': {
    tr: '/uluslararasi-hasta',
    en: '/international-patients',
    de: '/internationale-patienten',
    ru: '/international-patients',
    ar: '/international-patients',
    fr: '/patients-internationaux'
  },
  // Ülke sayfaları yalnızca yabancı dillerde yayımlanır (prompt m.4.5).
  // tr yolu yine de tanımlıdır çünkü next-intl her anahtar için tüm dilleri
  // bekler; /tr altında sayfa ÜRETİLMEZ (generateStaticParams tr'yi atlar).
  '/uluslararasi-hasta/ulke/[slug]': {
    tr: '/uluslararasi-hasta/ulke/[slug]',
    en: '/international-patients/country/[slug]',
    de: '/internationale-patienten/land/[slug]',
    ru: '/international-patients/country/[slug]',
    ar: '/international-patients/country/[slug]',
    fr: '/patients-internationaux/pays/[slug]'
  },
  '/deneyimler': {
    tr: '/deneyimler',
    en: '/experiences',
    de: '/erfahrungen',
    ru: '/experiences',
    ar: '/experiences',
    fr: '/temoignages'
  },
  '/ozel-danismanlik': {
    tr: '/ozel-danismanlik',
    en: '/online-consultation',
    de: '/online-beratung',
    ru: '/online-consultation',
    ar: '/online-consultation',
    fr: '/consultation-en-ligne'
  },
  '/sozluk': {
    tr: '/sozluk',
    en: '/glossary',
    de: '/glossar',
    ru: '/glossary',
    ar: '/glossary',
    fr: '/glossaire'
  },
  '/blog': '/blog',
  '/blog/[slug]': '/blog/[slug]',
  '/iletisim': {
    tr: '/iletisim',
    en: '/contact',
    de: '/kontakt',
    ru: '/contact',
    ar: '/contact',
    fr: '/contact'
  },
  '/yasal/kvkk': {
    tr: '/yasal/kvkk',
    en: '/legal/privacy',
    de: '/rechtliches/datenschutz',
    ru: '/legal/privacy',
    ar: '/legal/privacy',
    fr: '/mentions-legales/confidentialite'
  },
  '/yasal/cerez-politikasi': {
    tr: '/yasal/cerez-politikasi',
    en: '/legal/cookie-policy',
    de: '/rechtliches/cookie-richtlinie',
    ru: '/legal/cookie-policy',
    ar: '/legal/cookie-policy',
    fr: '/mentions-legales/politique-cookies'
  },
  '/yasal/kullanim-kosullari': {
    tr: '/yasal/kullanim-kosullari',
    en: '/legal/terms-of-use',
    de: '/rechtliches/nutzungsbedingungen',
    ru: '/legal/terms-of-use',
    ar: '/legal/terms-of-use',
    fr: '/mentions-legales/conditions-utilisation'
  },
  '/yasal/tibbi-sorumluluk-reddi': {
    tr: '/yasal/tibbi-sorumluluk-reddi',
    en: '/legal/medical-disclaimer',
    de: '/rechtliches/medizinischer-haftungsausschluss',
    ru: '/legal/medical-disclaimer',
    ar: '/legal/medical-disclaimer',
    fr: '/mentions-legales/avertissement-medical'
  },
  '/yasal/acik-riza': {
    tr: '/yasal/acik-riza',
    en: '/legal/consent',
    de: '/rechtliches/einwilligung',
    ru: '/legal/consent',
    ar: '/legal/consent',
    fr: '/mentions-legales/consentement'
  }
} as const;

/** Tüm route anahtarları. */
export type AppPathname = keyof typeof pathnames;
/** Parametresiz (static) route anahtarları — doğrudan <Link href> için güvenli. */
export type StaticPathname = Exclude<
  AppPathname,
  '/tedaviler/[slug]' | '/blog/[slug]' | '/uluslararasi-hasta/ulke/[slug]'
>;

export const routing = defineRouting({
  locales,
  defaultLocale,
  // Her dil kendi ön ekiyle: /tr, /en, /ar ... (varsayılan dahil).
  localePrefix: 'always',
  pathnames
});
