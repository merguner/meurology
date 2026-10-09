import createNextIntlPlugin from 'next-intl/plugin';
import { legacyRedirects } from './src/config/legacy-redirects.mjs';
import { removedLocaleRedirects, removedLocaleCatchAll } from './src/config/removed-locale-redirects.mjs';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const isProd = process.env.NODE_ENV === 'production';

/**
 * İÇERİK GÜVENLİĞİ POLİTİKASI (CSP)
 * Sitenin ihtiyaç duyduğu kaynaklar:
 *  - Google Maps iframe (klinik konumu)
 *  - YouTube (nocookie) gömülü video
 *  - next/image optimizasyonu (data: ve https: görseller)
 *
 * NOT: Next.js App Router hidrasyon için satır içi script/stil üretir. Tam
 * sıkılaştırma (nonce tabanlı CSP) middleware'de nonce üretimi gerektirir;
 * bu bir sonraki adıma bırakıldı. 'unsafe-inline' olmadan sayfa bozulur.
 */
const csp = [
  "default-src 'self'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'self'",
  "object-src 'none'",
  "img-src 'self' data: blob: https:",
  "font-src 'self' data:",
  "style-src 'self' 'unsafe-inline'",
  // Prod'da eval gerekmez; dev sunucusu (HMR) için gevşetilir.
  /*
   * ONAYA BAGLI OLCUM ARACLARI — 7 Eki 2026'da eklendi.
   * GA4 canliya alindiginda her sayfada su hata veriliyordu:
   *   "Loading the script 'https://www.googletagmanager.com/gtag/js'
   *    violates ... script-src 'self' 'unsafe-inline'. Blocked."
   * Yani ziyaretci onay veriyor, betik DOM'a ekleniyor, tarayici
   * engelliyordu; GA4'e tek bir olay bile ulasmiyordu. Sessiz bir
   * arizaydi: sitede hicbir sey bozuk gorunmuyor, yalniz veri gelmiyor.
   *
   * connect-src de gerekli: gtag olculeri /g/collect ucuna XHR/beacon
   * ile gonderir, 'self' ile engellenir.
   *
   * Meta Pixel kimligi henuz tanimli degil ama kod onu da destekliyor;
   * ayni tuzaga dusmemek icin facebook alan adlari da simdiden eklendi.
   * Izin verilenler YALNIZCA bu aracların alan adlaridir.
   */
  /*
   * TURNSTILE (bot korumasi) — 8 Eki 2026'da anahtarlar EKLENMEDEN ONCE
   * izin verildi. Sebebi onemli: GA4'teki sessiz arizanin aksine, burada
   * eksik CSP formu TAMAMEN KAPATIRDI.
   *
   * Zincir soyle isliyordu: site anahtari tanimlaninca widget render
   * ediliyor -> tarayici challenges.cloudflare.com betigini CSP yuzunden
   * engelliyor -> jeton uretilemiyor -> gizli anahtar tanimli oldugu icin
   * verifyTurnstile() false donuyor -> /api/on-degerlendirme her basvuruyu
   * 403 captcha_failed ile reddediyor. Yani tek bir hasta basvurusu bile
   * ulasmazdi ve sitede hicbir sey bozuk gorunmezdi.
   *
   * Widget bir iframe icinde cizildigi icin frame-src de gerekli; yalnizca
   * script-src yetmez.
   */
  `script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://connect.facebook.net https://challenges.cloudflare.com${isProd ? '' : " 'unsafe-eval'"}`,
  "connect-src 'self' https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com https://www.facebook.com",
  'frame-src https://www.google.com https://maps.google.com https://www.youtube-nocookie.com https://www.youtube.com https://challenges.cloudflare.com',
  'upgrade-insecure-requests'
].join('; ');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      // Görsel CDN'i eklendiğinde buraya tanımlayın (ör. Sanity, Cloudinary).
      { protocol: 'https', hostname: 'images.unsplash.com' }
    ]
  },
  /**
   * Eski WordPress sitesinin adreslerinden 301 yonlendirmeleri.
   * Kurallar src/config/legacy-redirects.mjs icinde; gerekcesi ve
   * esleme ilkesi orada aciklandi.
   */
  async redirects() {
    return [
      /*
       * APEX -> WWW (kalici).
       * Kanonik adres www.meurology.com (bkz. config/site.ts). Apex de
       * Vercel'e baglandiginda ayni icerigi ikinci bir adreste sunmamak
       * icin tum istekler www'ya tasinir; yol ve sorgu korunur.
       *
       * host kosulu TAM 'meurology.com' oldugundan www kendini
       * yonlendirmez, dolayisiyla dongu olusmaz.
       *
       * NOT: Apex DNS kaydi hala eski hostingi gosterdigi surece bu
       * kural hic tetiklenmez; apex Vercel'e cevrildigi an devreye
       * girer. Onceden eklenmesi bilincli — DNS degisimi ile kod
       * degisimi ayni ana denk gelmesin diye.
       */
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'meurology.com' }],
        destination: 'https://www.meurology.com/:path*',
        permanent: true
      },
      ...legacyRedirects,
      // Kaldirilan diller (de/ru/fr) -> Ingilizce karsiliklari. Genel kural
      // EN SONDA olmali: once belirli 196 kural eslesir, kalanlar ana sayfaya.
      ...removedLocaleRedirects,
      ...removedLocaleCatchAll
    ];
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()'
          },
          { key: 'Content-Security-Policy', value: csp },
          ...(isProd
            ? [
                {
                  key: 'Strict-Transport-Security',
                  value: 'max-age=63072000; includeSubDomains; preload'
                }
              ]
            : [])
        ]
      },
      {
        /**
         * KANONİKLEŞTİRME: Tüm canonical'lar www.meurology.com'u gösterir.
         * meurology.vercel.app ve önizleme URL'leri yinelenen içerik oluşturmasın
         * diye indekslenmez. Alan adı bağlanana kadar site arama motorlarına
         * KAPALIDIR — bu bilinçli bir tercihtir (yanlış alan adıyla indekslenmek,
         * hiç indekslenmemekten kötüdür).
         */
        source: '/:path*',
        has: [{ type: 'host', value: '.*\\.vercel\\.app' }],
        headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }]
      }
    ];
  }
};

export default withNextIntl(nextConfig);
