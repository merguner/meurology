import type { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';
import { getPathname } from '@/i18n/navigation';
import { siteConfig } from '@/config/site';
import { treatmentSlugs } from '@/content/treatments';
import { blogPosts } from '@/content/blog';

/** Tüm diller ve içerik yolları için otomatik sitemap (lokalize slug'larla). */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.domain.replace(/\/$/, '');

  // İç (canonical) href'ler — getPathname bunları her dilin lokalize yoluna çevirir.
  const staticHrefs = [
    '/',
    '/tedaviler',
    '/rekonstruktif-uroloji',
    '/ozel-danismanlik',
    '/cerrah',
    '/hastane',
    '/uluslararasi-hasta',
    '/deneyimler',
    '/blog',
    '/iletisim',
    '/yasal/kvkk',
    '/yasal/acik-riza'
  ] as const;

  const dynamicHrefs = [
    ...treatmentSlugs.map((slug) => ({ pathname: '/tedaviler/[slug]', params: { slug } }) as const),
    ...blogPosts.map((p) => ({ pathname: '/blog/[slug]', params: { slug: p.slug } }) as const)
  ];

  const allHrefs = [...staticHrefs, ...dynamicHrefs];
  const now = new Date();

  return routing.locales.flatMap((locale) =>
    allHrefs.map((href) => ({
      url: `${base}${getPathname({ locale, href })}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: href === '/' ? 1 : 0.7,
      alternates: {
        languages: Object.fromEntries(
          routing.locales.map((l) => [l, `${base}${getPathname({ locale: l, href })}`])
        )
      }
    }))
  );
}
