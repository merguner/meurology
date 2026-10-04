import { Poppins, IBM_Plex_Mono, IBM_Plex_Sans_Arabic } from 'next/font/google';

/**
 * Marka fontu: Poppins (logo wordmark'ıyla birebir uyumlu, yuvarlak hatlı
 * geometrik). Başlık + gövde + wordmark tek font ailesinden gelir; veri/etiket
 * alanları için mono korunur.
 *
 * Poppins latin + latin-ext + Kiril kapsar (tr/en/de/fr/ru).
 * Arapça için ayrı bir aile gerekir → IBM Plex Sans Arabic (aşağıda).
 */
export const sans = Poppins({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  variable: '--font-sans',
  weight: ['400', '500', '600', '700']
});

// Veri/etiketler için mono.
export const mono = IBM_Plex_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
  // 500 KALDIRILDI: arayuzde mono yalnizca 400 (label-mono) ve 600
  // (dogrulanmis bilgi degerleri) agirliklariyla kullaniliyor. Kullanilmayan
  // her agirlik mobilde ek bir font dosyasi indirmesi demektir.
  weight: ['400', '600']
});

/**
 * ARAPÇA GÖVDE FONTU.
 * Poppins Arap alfabesini kapsamadığı için /ar sayfaları system-ui fallback'ine
 * düşüyordu (tutarsız ve çoğu sistemde zayıf tipografi). IBM Plex Sans Arabic
 * aynı tasarım ailesinden geldiği için Latin markayla görsel olarak uyumludur.
 * Yalnızca <html lang="ar"> olduğunda --font-sans'ın önüne geçer (globals.css).
 */
export const sansArabic = IBM_Plex_Sans_Arabic({
  subsets: ['arabic'],
  display: 'swap',
  variable: '--font-sans-arabic',
  weight: ['400', '500', '600', '700']
});

/**
 * DİLE GÖRE FONT DEĞİŞKENLERİ.
 *
 * Daha önce üç ailenin değişkeni de her sayfada <html>'e basılıyordu. Tarayıcı
 * bir fontu ancak kullanıldığında indirir; ama Arapça sayfada da Latin metin
 * (marka adı, "WhatsApp", tarihler, sayılar) bulunduğu için ÜÇ aile birden
 * indiriliyordu. Ölçümde /ar mobilde 20 font dosyası / 283 KB görüldü ve
 * LCP'yi (h1 metni) geciktiren asıl yük buydu.
 *
 * Latin dillerinde Arapça ailesine hiç ihtiyaç yoktur; bu yüzden yalnızca
 * Arapça sayfalarda eklenir. Arapça sayfada Latin ailesi kalır, çünkü marka
 * adı ve rakamlar hâlâ Latin harflidir.
 */
export function fontVariablesFor(locale: string): string {
  const base = `${sans.variable} ${mono.variable}`;
  return locale === 'ar' ? `${base} ${sansArabic.variable}` : base;
}

/** Geriye dönük uyumluluk için: tüm aileler. */
export const fontVariables = `${sans.variable} ${mono.variable} ${sansArabic.variable}`;
