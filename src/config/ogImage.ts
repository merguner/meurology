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
/**
 * SÜRÜM NUMARASI — görseli her değiştirdiğinizde ARTIRIN.
 *
 * WhatsApp, Facebook ve LinkedIn paylaşım görselini ADRESE göre
 * önbelleğe alır ve haftalarca tutar; sunucunun Cache-Control başlığını
 * dikkate almazlar. Dosya adı aynı kaldığı sürece yeni görseli
 * göstermezler. 8 Eki 2026'da amblem rengi değiştirildiğinde tam olarak
 * bu yaşandı: dosya canlıda yenilenmişti ama önizlemeler eskiydi.
 *
 * Sorgu parametresi adresi değiştirdiği için platformlar görseli yeni
 * sayar ve yeniden indirir.
 */
const OG_SURUM = 2;

export function ogImagePath(locale: Locale): string {
  return `/brand/og-${locale}.png?v=${OG_SURUM}`;
}

/** Next.js metadata'sına doğrudan verilebilecek images dizisi. */
export function ogImages(locale: Locale, alt: string) {
  return [{ url: ogImagePath(locale), width: 1200, height: 630, alt }];
}
