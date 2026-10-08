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
  preload: false,
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
  preload: false,
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
  preload: false,
  variable: '--font-sans-arabic',
  weight: ['400', '500', '600', '700']
});

/**
 * DİLE GÖRE FONT DEĞİŞKENLERİ.
 *
 * Tarayıcı bir fontu ancak kullanıldığında indirir; ama Arapça sayfada da
 * Latin metin (marka adı, "WhatsApp", tarihler, sayılar) bulunduğu için üç
 * aile birden iniyordu. Bu yüzden her dile yalnızca gerçekten kullandığı
 * aileler basılır.
 *
 * DİKKAT — bu fonksiyon ÖN YÜKLEMEYİ (preload) ETKİLEMEZ. next/font,
 * <link rel="preload"> etiketlerini DERLEME anında, modül grafiğine göre
 * üretir; hangi dilin hangi değişkeni aldığına bakmaz. 8 Eki 2026 ölçümünde
 * /tr, /ru ve /ar sayfalarının ÜÇÜNDE de aynı 16 woff2 dosyası (~274 KB) ön
 * yükleniyordu. Ayrımı sağlayan tek şey yukarıdaki preload bayrağıdır:
 * yalnızca Poppins preload:true, diğerleri preload:false. Böylece Montserrat
 * ve Arapça aile Latin sayfalarda hiç istenmez; kendi dillerinde ise CSS
 * çözümlendikten hemen sonra inerler (display:swap + next/font ölçü uyumlu
 * yedeği sayesinde kayma oluşturmadan).
 *
 * NOT: bu ayrım YEREL Windows derlemesinde doğrulanamaz; next-font-manifest
 * orada boş üretildiği için yerelde hiçbir font ön yüklenmiyor görünür.
 * Doğrulama Vercel derlemesi üzerinden yapılmalıdır.
 */
export function fontVariablesFor(locale: string): string {
  // Poppins ar ve ru'da bilerek yok: globals.css'teki :root:lang(ar) /
  // :root:lang(ru) kuralları --font-sans'i tamamen diğerine devrediyor,
  // dolayısıyla o sayfalarda Poppins hiçbir yerde kullanılmıyor.
  if (locale === 'ar') return `${mono.variable} ${sansArabic.variable}`;
  if (locale === 'ru') return `${mono.variable} ${sansCyrillic.variable}`;
  return `${sans.variable} ${mono.variable}`;
}
