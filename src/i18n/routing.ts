import { defineRouting } from 'next-intl/routing';

export const locales = ['tr', 'en', 'ar'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'tr';

// Sağdan-sola yazılan diller (layout dir="rtl" için).
export const rtlLocales: Locale[] = ['ar'];

/**
 * LOKALİZE ROUTE SLUG'LARI.
 * İç (canonical) anahtar Türkçe klasör adıdır; dış URL her dile göre değişir.
 * AR için temiz ASCII olması adına İngilizce slug kullanılır
 * (Arapça URL'ler encode edilip okunaksız olurdu).
 *
 * Yeni bir çevrilmiş route eklerken: klasör Türkçe kalır, buraya diller eklenir.
 * Eski Türkçe slug'lardan yeni slug'lara 301 redirect: next.config.mjs.
 */
export const pathnames = {
  '/': '/',
  '/tedaviler': {
    tr: '/tedaviler',
    en: '/treatments',
    ar: '/treatments',
  },
  '/tedaviler/[slug]': {
    tr: '/tedaviler/[slug]',
    en: '/treatments/[slug]',
    ar: '/treatments/[slug]',
  },
  '/rekonstruktif-uroloji': {
    tr: '/rekonstruktif-uroloji',
    en: '/reconstructive-urology',
    ar: '/reconstructive-urology',
  },
  '/cerrah': {
    tr: '/cerrah',
    en: '/surgeon',
    ar: '/surgeon',
  },
  '/hastane': {
    tr: '/hastane',
    en: '/hospital',
    ar: '/hospital',
  },
  '/uluslararasi-hasta': {
    tr: '/uluslararasi-hasta',
    en: '/international-patients',
    ar: '/international-patients',
  },
  // Ülke sayfaları yalnızca yabancı dillerde yayımlanır (prompt m.4.5).
  // tr yolu yine de tanımlıdır çünkü next-intl her anahtar için tüm dilleri
  // bekler; /tr altında sayfa ÜRETİLMEZ (generateStaticParams tr'yi atlar).
  '/uluslararasi-hasta/ulke/[slug]': {
    tr: '/uluslararasi-hasta/ulke/[slug]',
    en: '/international-patients/country/[slug]',
    ar: '/international-patients/country/[slug]',
  },
  '/deneyimler': {
    tr: '/deneyimler',
    en: '/experiences',
    ar: '/experiences',
  },
  '/ozel-danismanlik': {
    tr: '/ozel-danismanlik',
    en: '/online-consultation',
    ar: '/online-consultation',
  },
  '/sozluk': {
    tr: '/sozluk',
    en: '/glossary',
    ar: '/glossary',
  },
  '/blog': '/blog',
  '/blog/[slug]': '/blog/[slug]',
  '/iletisim': {
    tr: '/iletisim',
    en: '/contact',
    ar: '/contact',
  },
  /**
   * SGK ve özel sigorta sayfası. Türkçe'de SGK'ya, diğer dillerde kendi
   * sigortanızdan geri ödemeye odaklanır; bu yüzden slug'lar birebir çeviri
   * değil, her pazarda aranan kavramın karşılığıdır.
   */
  '/sgk-ve-sigorta': {
    tr: '/sgk-ve-ozel-sigorta',
    en: '/insurance-and-reimbursement',
    ar: '/insurance-and-reimbursement',
  },
  '/yasal/kvkk': {
    tr: '/yasal/kvkk',
    en: '/legal/privacy',
    ar: '/legal/privacy',
  },
  '/yasal/cerez-politikasi': {
    tr: '/yasal/cerez-politikasi',
    en: '/legal/cookie-policy',
    ar: '/legal/cookie-policy',
  },
  '/yasal/kullanim-kosullari': {
    tr: '/yasal/kullanim-kosullari',
    en: '/legal/terms-of-use',
    ar: '/legal/terms-of-use',
  },
  '/yasal/tibbi-sorumluluk-reddi': {
    tr: '/yasal/tibbi-sorumluluk-reddi',
    en: '/legal/medical-disclaimer',
    ar: '/legal/medical-disclaimer',
  },
  '/yasal/acik-riza': {
    tr: '/yasal/acik-riza',
    en: '/legal/consent',
    ar: '/legal/consent',
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
