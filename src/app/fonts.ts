import { Poppins, IBM_Plex_Mono, IBM_Plex_Sans_Arabic, Montserrat } from 'next/font/google';

/**
 * Marka fontu: Poppins (logo wordmark'ıyla birebir uyumlu, yuvarlak hatlı
 * geometrik). Başlık + gövde + wordmark tek font ailesinden gelir; veri/etiket
 * alanları için mono korunur.
 *
 * Poppins latin + latin-ext kapsar (tr/en/de/fr).
 * KİRİL KAPSAMAZ — 8 Eki 2026'da üretilen CSS'te Poppins'in 12 yüzünün
 * hiçbirinde Kiril unicode-range'i olmadığı doğrulandı; /ru sayfaları
 * sessizce sistem yedeğine (Georgia) düşüyordu. Rusça için Montserrat,
 * Arapça için IBM Plex Sans Arabic eklendi (ikisi de aşağıda).
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
 * RUSÇA (KİRİL) GÖVDE FONTU.
 * Poppins Kiril alfabesini kapsamaz; <html lang="ru"> olduğunda gövde
 * fontu Montserrat'a geçer (globals.css). Montserrat da geometrik sans
 * olduğu için Poppins'le görsel olarak uyumludur ve Kiril + Kiril-Ext
 * kapsar. Latin alt kümesi de yüklenir, çünkü Rusça sayfada marka adı,
 * "WhatsApp" ve rakamlar Latin harflidir.
 */
export const sansCyrillic = Montserrat({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  variable: '--font-sans-cyrillic',
  weight: ['400', '500', '600', '700']
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
  // POPPINS, ar ve ru'da BILEREK YOK.
  // globals.css'teki :root:lang(ar) / :root:lang(ru) kurallari --font-sans'i
  // tamamen digerine devrediyor; Poppins o sayfalarda hicbir yerde
  // kullanilmiyor. Degiskeni yine de basmak next/font'un onu ON YUKLEMESINE
  // yol aciyordu: olcumde /ar ve /ru'da 8 Poppins dosyasi bosa iniyordu.
  if (locale === 'ar') return `${mono.variable} ${sansArabic.variable}`;
  if (locale === 'ru') return `${mono.variable} ${sansCyrillic.variable}`;
  return `${sans.variable} ${mono.variable}`;
}

/** Geriye dönük uyumluluk için: tüm aileler. */
export const fontVariables = `${sans.variable} ${mono.variable} ${sansArabic.variable}`;
