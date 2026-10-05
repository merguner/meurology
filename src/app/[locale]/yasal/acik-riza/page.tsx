import type { Metadata } from 'next';
import { buildAlternates } from '@/i18n/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Locale } from '@/i18n/routing';
import { consentDoc } from '@/content/legal';
import { LegalDocView } from '@/components/LegalDocView';

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Legal' });
  return {
    title: t('consentTitle'),
    robots: { index: false, follow: true },
    alternates: buildAlternates(locale, '/yasal/acik-riza')
  };
}

export default async function ConsentPage({
  params
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('Legal');
  return <LegalDocView doc={consentDoc} title={t('consentTitle')} locale={locale} href="/yasal/acik-riza" />;
}
