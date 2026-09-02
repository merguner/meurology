import { Poppins, IBM_Plex_Mono } from 'next/font/google';

/**
 * Marka fontu: Poppins (logo wordmark'ıyla birebir uyumlu, yuvarlak hatlı
 * geometrik). Başlık + gövde + wordmark tek font ailesinden gelir; veri/etiket
 * alanları için mono korunur.
 * Not: Poppins latin/latin-ext kapsar. Kiril (ru) ve Arapça (ar) metinler
 * font yığınındaki system-ui fallback'ine düşer (Latin diller Poppins alır).
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

export const fontVariables = `${sans.variable} ${mono.variable}`;
