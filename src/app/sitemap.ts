import type { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';
import { getPathname, treatmentHref } from '@/i18n/navigation';
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
    // Tedaviler aşağıda dil bazlı slug ile ayrıca eklenir (bkz. treatmentEntries).
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

  const staticEntries = routing.locales.flatMap((locale) =>
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

  /**
   * TEDAVİ SAYFALARI — her dil KENDİ slug'ıyla.
   * hreflang karşılıkları da dil bazlı slug taşır (ör. en: kidney-stones,
   * de: nierensteine), yoksa Google karşılıklı referansı doğrulayamaz.
   */
  const treatmentEntries = routing.locales.flatMap((locale) =>
    treatmentSlugs.map((canonical) => ({
      url: `${base}${getPathname({ locale, href: treatmentHref(canonical, locale) })}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
      alternates: {
        languages: {
          ...Object.fromEntries(
            routing.locales.map((l) => [
              l,
              `${base}${getPathname({ locale: l, href: treatmentHref(canonical, l) })}`
            ])
          ),
          'x-default': `${base}${getPathname({ locale: 'en', href: treatmentHref(canonical, 'en') })}`
        }
      }
    }))
  );

  return [...staticEntries, ...treatmentEntries];
}
