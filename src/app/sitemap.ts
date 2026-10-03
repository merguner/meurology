import type { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';
import { getPathname } from '@/i18n/navigation';
import { siteConfig } from '@/config/site';
import { features } from '@/config/features';
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

  /**
   * Bir yolun o dilde yayında olup olmadığı.
   * /deneyimler Türkçe'de yayından kaldırıldı (301 → /tr), sitemap'e girmez.
   */
  const isPublished = (locale: string, href: (typeof allHrefs)[number]) =>
    !(href === '/deneyimler' && !features(locale).testimonials);

  /** hreflang listesi — yalnızca o yolun yayında olduğu diller. */
  const languagesFor = (href: (typeof allHrefs)[number]) =>
    Object.fromEntries(
      routing.locales
        .filter((l) => isPublished(l, href))
        .map((l) => [l, `${base}${getPathname({ locale: l, href })}`])
    );

  return routing.locales.flatMap((locale) =>
    allHrefs
      .filter((href) => isPublished(locale, href))
      .map((href) => ({
        url: `${base}${getPathname({ locale, href })}`,
        lastModified: now,
        changeFrequency: 'weekly' as const,
        priority: href === '/' ? 1 : 0.7,
        alternates: { languages: languagesFor(href) }
      }))
  );
}
