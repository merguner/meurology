import { Poppins, IBM_Plex_Mono, IBM_Plex_Sans_Arabic } from 'next/font/google';

/**
 * Marka fontu: Poppins (logo wordmark'ıyla birebir uyumlu, yuvarlak hatlı
 * geometrik). Başlık + gövde + wordmark tek font ailesinden gelir; veri/etiket
 * alanları için mono korunur.
 *
 * Poppins latin + latin-ext kapsar (tr/en). Arap alfabesini kapsamadığı için
 * Arapça'da IBM Plex Sans Arabic devreye girer (aşağıda).
 *
 * 9 Eki 2026'ya kadar site 6 dildeydi ve Rusça için Kiril kapsayan Montserrat
 * da yükleniyordu. Site tr/en/ar'a indirildiğinde o aile tamamen kaldırıldı.
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
  // Ön yüklü değil: mono hiçbir sayfada LCP ögesi değil (tarih, etiket, yıl
  // gibi ikincil alanlarda), geç gelmesi görünür bir kayma üretmiyor.
  preload: false,
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
  // ON YUKLU KALMALI. 8 Eki 2026 olcumu: preload kapatildiginda /ar sayfasinda
  // CLS 0,000 -> 0,139 (uc kosuda da ayni) cikti. Arap alfabesinin olculeri
  // Latin yedeginden cok farkli oldugu icin next/font olcu uyumlu yedegi burada
  // yetmiyor; font gec gelince metin yeniden akip sayfayi kaydiriyor.
  // Bedeli: Latin sayfalar bu aileyi de indirir (bkz. fontVariablesFor notu).
  variable: '--font-sans-arabic',
  weight: ['400', '500', '600', '700']
});

/**
 * DİLE GÖRE FONT DEĞİŞKENLERİ.
 *
 * Tarayıcı bir fontu ancak kullanıldığında indirir; ama Arapça sayfada da
 * Latin metin (marka adı, "WhatsApp", tarihler, sayılar) bulunduğu için
 * aileler birden iniyordu. Bu yüzden her dile yalnızca gerçekten kullandığı
 * aileler basılır.
 *
 * DİKKAT — bu fonksiyon ÖN YÜKLEMEYİ (preload) ETKİLEMEZ. next/font,
 * <link rel="preload"> etiketlerini DERLEME anında, modül grafiğine göre
 * üretir; hangi dilin hangi değişkeni aldığına bakmaz. Ayrımı sağlayan tek
 * şey her ailenin preload bayrağıdır: Poppins ve IBM Plex Sans Arabic ön
 * yüklü (ikisi de gövde metni taşıyor, geç gelirse metin yeniden akıp sayfa
 * kayıyor), mono değil.
 *
 * NOT: bu ayrım YEREL Windows derlemesinde doğrulanamaz; next-font-manifest
 * orada boş üretildiği için yerelde hiçbir font ön yüklenmiyor görünür.
 * Doğrulama Vercel derlemesi üzerinden yapılmalıdır.
 */
export function fontVariablesFor(locale: string): string {
  // Poppins ar'da bilerek yok: globals.css'teki :root:lang(ar) kuralı
  // --font-sans'i tamamen Arapça aileye devrediyor, dolayısıyla o sayfada
  // Poppins hiçbir yerde kullanılmıyor.
  if (locale === 'ar') return `${mono.variable} ${sansArabic.variable}`;
  return `${sans.variable} ${mono.variable}`;
}
