import createNextIntlPlugin from 'next-intl/plugin';
import { legacyRedirects } from './src/config/legacy-redirects.mjs';

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
  `script-src 'self' 'unsafe-inline'${isProd ? '' : " 'unsafe-eval'"}`,
  "connect-src 'self'",
  'frame-src https://www.google.com https://maps.google.com https://www.youtube-nocookie.com https://www.youtube.com',
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
      ...legacyRedirects
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
