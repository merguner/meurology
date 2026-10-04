import type { Metadata } from 'next';
import { buildAlternates } from '@/i18n/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Locale } from '@/i18n/routing';
import { disclaimerDoc } from '@/content/legal';
import { LegalDocView } from '@/components/LegalDocView';

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Legal' });
  return {
    title: t('disclaimerTitle'),
    robots: { index: false, follow: true },
    alternates: buildAlternates(locale, '/yasal/tibbi-sorumluluk-reddi')
  };
}

export default async function MedicalDisclaimerPage({
  params
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('Legal');
  return <LegalDocView doc={disclaimerDoc} title={t('disclaimerTitle')} locale={locale} />;
}
