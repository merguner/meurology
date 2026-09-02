import type { Metadata } from 'next';
import { buildAlternates } from '@/i18n/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Locale } from '@/i18n/routing';
import { PageHero } from '@/components/PageHero';
import { ExperiencesList } from '@/components/ExperiencesList';
import { GoogleReviews } from '@/components/GoogleReviews';
import { PatientGallery } from '@/components/PatientGallery';
import { patientPhotos } from '@/content/patientMedia';

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Experiences' });
  return {
    title: t('title'),
    description: t('subtitle'),
    alternates: buildAlternates(locale, '/deneyimler')
  };
}

export default async function ExperiencesPage({
  params
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('Experiences');

  return (
    <>
      <PageHero eyebrow={t('title')} title={t('title')} description={t('subtitle')} />

      {/* Google yorumları — otomatik (anahtar varsa); yoksa profil linki */}
      <section className="container-content pt-12">
        <GoogleReviews locale={locale} />
      </section>

      {/* Hasta fotoğrafları galerisi (androloji/rekonstrüktif hariç havuz) */}
      <section className="container-content py-12">
        <PatientGallery
          photos={patientPhotos}
          alt={t('photoAlt')}
          title={t('galleryTitle')}
        />
      </section>

      {/* Seçili (onaylı) hasta deneyimleri — ülkeye göre filtreli */}
      <section className="container-content pb-12">
        <ExperiencesList />
      </section>
    </>
  );
}
