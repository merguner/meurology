import { siteConfig } from '@/config/site';
import { contactConfig } from '@/config/contact';
import { getPathname } from '@/i18n/navigation';
import type { Locale } from '@/i18n/routing';
import { surgeon, surgeonFullName } from '@/content/surgeon';

/**
 * HEKİM DÜĞÜMÜ — blog yazarı ve tedavi sayfalarındaki Physician için TEK kaynak.
 *
 * Schema.org'da Physician bir yerel işletme alt türüdür. Google'ın Zengin
 * Sonuçlar Testi (9 Eki 2026) yalnızca ad ve bağlantı içeren Physician
 * düğümlerini "yerel işletme" olarak okuyup telefon, adres ve görsel eksik
 * diye uyarı veriyordu. Bu alanlar burada bir kez tamamlanır.
 *
 * @id ile aynı sayfadaki başka düğümler (ör. tedavi sayfasındaki reviewedBy)
 * bu düğüme tam kopya yerine referansla bağlanır.
 */
export function physicianId(locale: Locale): string {
  return `${siteConfig.domain}${getPathname({ locale, href: '/cerrah' })}#hekim`;
}

export function physicianJsonLd(locale: Locale) {
  return {
    '@type': 'Physician',
    '@id': physicianId(locale),
    name: surgeonFullName(locale),
    medicalSpecialty: 'Urology',
    knowsLanguage: [...contactConfig.surgeonLanguages],
    url: `${siteConfig.domain}${getPathname({ locale, href: '/cerrah' })}`,
    telephone: siteConfig.phoneIntl,
    ...(surgeon.photo ? { image: `${siteConfig.domain}${surgeon.photo}` } : {}),
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.streetAddress,
      addressLocality: siteConfig.address.addressLocality,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.addressCountry
    }
  };
}
