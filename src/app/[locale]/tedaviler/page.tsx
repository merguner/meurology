import type { Metadata } from 'next';
import { buildAlternates } from '@/i18n/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Locale } from '@/i18n/routing';
import { publishedTreatments } from '@/content/treatments';
import { resolveContent } from '@/content/types';
import { PageHero } from '@/components/PageHero';
import { TreatmentCard } from '@/components/TreatmentCard';

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Nav' });
  const tm = await getTranslations({ locale, namespace: 'Meta' });
  return {
    title: t('treatments'),
    description: tm('defaultDescription'),
    alternates: buildAlternates(locale, '/tedaviler')
  };
}

export default async function TreatmentsPage({
  params
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('Nav');
  const th = await getTranslations('Home');

  return (
    <>
      <PageHero
        eyebrow={th('positioning')}
        title={t('treatments')}
        description={th('treatmentsSubtitle')}
      />
      <section className="container-content py-12">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {publishedTreatments.map((tr) => {
            const c = resolveContent(tr, locale);
            return (
              <TreatmentCard
                key={tr.slug}
                slug={tr.slug}
                icon={tr.icon}
                title={c.title}
                summary={c.summary}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}
