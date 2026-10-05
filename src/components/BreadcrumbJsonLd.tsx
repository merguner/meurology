import { getTranslations } from 'next-intl/server';
import { getPathname } from '@/i18n/navigation';
import { siteConfig } from '@/config/site';
import type { Locale } from '@/i18n/routing';
import { JsonLd } from './JsonLd';

/**
 * EKMEK KIRINTISI (BreadcrumbList) YAPILANDIRILMIŞ VERİSİ
 * ------------------------------------------------------------------
 * Arama sonuçlarında sayfanın site içindeki yerini gösterir. Google,
 * URL yerine bu kırıntıyı gösterdiği için her iç sayfada bulunmalıdır.
 *
 * "Ana Sayfa" adımı BURADA eklenir; çağıran sayfa yalnızca kendi
 * zincirini verir. Adresler dile göre yerelleştirilmiş yollardır.
 *
 * Not: tedavi sayfası kendi BreadcrumbList'ini @graph içinde üretir
 * (orada MedicalWebPage ve FAQPage ile aynı blokta tutulur); bu bileşen
 * diğer sayfalar içindir.
 */
export interface Crumb {
  name: string;
  /** Lokalize edilecek iç yol (ör. '/tedaviler') veya hazır URL yolu. */
  href: Parameters<typeof getPathname>[0]['href'];
}

export async function BreadcrumbJsonLd({
  locale,
  items
}: {
  locale: Locale;
  items: Crumb[];
}) {
  const tn = await getTranslations({ locale, namespace: 'Nav' });
  const trail = [
    { name: tn('home'), url: `${siteConfig.domain}${getPathname({ locale, href: '/' })}` },
    ...items.map((c) => ({
      name: c.name,
      url: `${siteConfig.domain}${getPathname({ locale, href: c.href })}`
    }))
  ];
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: trail.map((x, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: x.name,
          item: x.url
        }))
      }}
    />
  );
}
