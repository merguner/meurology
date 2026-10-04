import type { Metadata } from 'next';
import { buildAlternates } from '@/i18n/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Locale } from '@/i18n/routing';
import { termsDoc } from '@/content/legal';
import { LegalDocView } from '@/components/LegalDocView';

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Legal' });
  return {
    title: t('termsTitle'),
    robots: { index: false, follow: true },
    alternates: buildAlternates(locale, '/yasal/kullanim-kosullari')
  };
}

export default async function TermsPage({
  params
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('Legal');
  return <LegalDocView doc={termsDoc} title={t('termsTitle')} locale={locale} />;
}
