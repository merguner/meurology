import type { MetadataRoute } from 'next';
import { routing, type Locale } from '@/i18n/routing';
import { getPathname, treatmentHref } from '@/i18n/navigation';
import { siteConfig } from '@/config/site';
import { features } from '@/config/features';
import { treatmentSlugs } from '@/content/treatments';
import { publishedPosts, isPostInLocale } from '@/content/blog';
import { countries } from '@/content/countries';

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
    '/sozluk',
    '/blog',
    '/iletisim',
    '/yasal/kvkk',
    '/yasal/acik-riza',
    '/yasal/cerez-politikasi',
    '/yasal/kullanim-kosullari',
    '/yasal/tibbi-sorumluluk-reddi'
  ] as const;

  const dynamicHrefs = [
    // Tedaviler aşağıda dil bazlı slug ile ayrıca eklenir (bkz. treatmentEntries).
    ...publishedPosts.map((p) => ({ pathname: '/blog/[slug]', params: { slug: p.slug } }) as const)
  ];

  const allHrefs = [...staticHrefs, ...dynamicHrefs];
  const now = new Date();

  /**
   * Bir yolun o dilde yayında olup olmadığı.
   * /deneyimler Türkçe'de yayından kaldırıldı (301 → /tr), sitemap'e girmez.
   */
  const isPublished = (locale: string, href: (typeof allHrefs)[number]) => {
    if (href === '/deneyimler' && !features(locale).testimonials) return false;
    // Blog yazıları pazara özgüdür; yalnızca yayınlandıkları dilde listelenir.
    if (typeof href === 'object' && href.pathname === '/blog/[slug]') {
      const post = publishedPosts.find((p) => p.slug === href.params.slug);
      return post ? isPostInLocale(post, locale as Locale) : false;
    }
    return true;
  };

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

  /**
   * ÜLKE SAYFALARI — yalnızca yayımlandıkları dillerde (prompt m.4.5).
   * /tr'de hiç yer almaz; hreflang de yalnızca o ülkenin gerçekten
   * yayımlandığı dilleri listeler (var olmayan dile hreflang verilmez).
   */
  const countryEntries = countries.flatMap((c) =>
    c.locales
      .filter((l) => c.i18n[l])
      .map((locale) => {
        const href = {
          pathname: '/uluslararasi-hasta/ulke/[slug]' as const,
          params: { slug: c.slug }
        };
        return {
          url: `${base}${getPathname({ locale, href })}`,
          lastModified: now,
          changeFrequency: 'monthly' as const,
          priority: 0.6,
          alternates: {
            languages: {
              ...Object.fromEntries(
                c.locales
                  .filter((l) => c.i18n[l])
                  .map((l) => [l, `${base}${getPathname({ locale: l, href })}`])
              ),
              ...(c.locales.includes('en')
                ? { 'x-default': `${base}${getPathname({ locale: 'en', href })}` }
                : {})
            }
          }
        };
      })
  );

  return [...staticEntries, ...treatmentEntries, ...countryEntries];
}
