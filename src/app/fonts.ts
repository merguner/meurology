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
  weight: ['400', '500', '600']
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

export const fontVariables = `${sans.variable} ${mono.variable} ${sansArabic.variable}`;
