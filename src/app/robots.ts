import type { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';
import { isIndexable } from '@/config/seo';

export default function robots(): MetadataRoute.Robots {
  const base = siteConfig.domain.replace(/\/$/, '');

  /**
   * Geçici dağıtım adresinde (*.vercel.app) ve önizleme dağıtımlarında
   * tarama tamamen kapatılır — bkz. config/seo.ts. Meta robots noindex
   * tek başına yeterli değildir: sayfa yine de taranır ve geçici adres
   * arama sonuçlarına referansla sızabilir.
   *
   * Sitemap de bu durumda verilmez; aksi hâlde yayında olmayan adresleri
   * tarayıcıya aktif olarak bildirmiş oluruz.
   */
  if (!isIndexable()) {
    return {
      rules: { userAgent: '*', disallow: '/' }
    };
  }

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/']
    },
    sitemap: `${base}/sitemap.xml`,
    host: base
  };
}
