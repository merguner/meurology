import type { Locale } from '@/i18n/routing';

/**
 * PAYLAŞIM GÖRSELİ (og:image / twitter:image) — DİLE GÖRE.
 *
 * Her dil için ayrı bir 1200×630 PNG üretilir; başlık satırı o dilde
 * yazılıdır. Kaynak: scripts/build-og-images.js (SVG → PNG, sharp ile).
 * SVG YAYINLANMAZ: WhatsApp, X ve LinkedIn önizlemeleri SVG'yi işlemez.
 *
 * Görseli güncellemek için metinleri scripts/build-og-images.js içinde
 * değiştirip `node scripts/build-og-images.js` çalıştırın.
 */
export function ogImagePath(locale: Locale): string {
  return `/brand/og-${locale}.png`;
}

/** Next.js metadata'sına doğrudan verilebilecek images dizisi. */
export function ogImages(locale: Locale, alt: string) {
  return [{ url: ogImagePath(locale), width: 1200, height: 630, alt }];
}
