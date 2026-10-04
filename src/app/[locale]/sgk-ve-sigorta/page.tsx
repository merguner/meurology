import type { Metadata } from 'next';
import { buildAlternates } from '@/i18n/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Locale } from '@/i18n/routing';
import { insuranceDoc } from '@/content/insuranceDoc';
import { LegalDocView } from '@/components/LegalDocView';

/**
 * SGK / sigorta bilgilendirme sayfası (prompt m.6 — ulusal erişim).
 *
 * Yasal metinlerin aksine bu sayfa ARAMA MOTORLARINA AÇIKTIR (noindex yok):
 * amacı zaten Türkiye'de sık aranan "SGK karşılıyor mu" sorusuna bilgilendirici
 * bir karşılık vermektir. Belge görünümü (LegalDocView) yeniden kullanılır;
 * içerik yapısı aynıdır ve son güncelleme tarihi gösterilmesi bu sayfada da
 * doğrudur — mevzuat değiştikçe tarihin görünmesi gerekir.
 */
export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Insurance' });
  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
    alternates: buildAlternates(locale, '/sgk-ve-sigorta')
  };
}

export default async function InsurancePage({
  params
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('Insurance');
  return <LegalDocView doc={insuranceDoc} title={t('title')} locale={locale} />;
}
