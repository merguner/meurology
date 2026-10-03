import type { Metadata } from 'next';
import { buildAlternates, redirect } from '@/i18n/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Locale } from '@/i18n/routing';
import { PageHero } from '@/components/PageHero';
import { ExperiencesList } from '@/components/ExperiencesList';
import { GoogleReviews } from '@/components/GoogleReviews';
import { features } from '@/config/features';

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Experiences' });
  // Türkçe'de sayfa yayından kalktı: arama motorlarına indekslenmemesi bildirilir.
  if (!features(locale).testimonials) {
    return { title: t('title'), robots: { index: false, follow: false } };
  }
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

  /**
   * YÖNETMELİK: Yurt içine yönelik (Türkçe) tanıtımda hasta yorumu/görseli yasak.
   * Bu nedenle /tr/deneyimler yayından kaldırıldı ve ana sayfaya yönlendirilir.
   * Menüden de gizlidir (config/nav.ts).
   */
  if (!features(locale).testimonials) {
    redirect({ href: '/', locale });
  }

  const t = await getTranslations('Experiences');

  return (
    <>
      <PageHero eyebrow={t('title')} title={t('title')} description={t('subtitle')} />

      {/* Google yorumları — otomatik (anahtar varsa); yoksa profil linki */}
      <section className="container-content pt-12">
        <GoogleReviews locale={locale} />
      </section>

      {/*
        Hasta fotoğrafı galerisi KALDIRILDI — imzalı Ek-1 açık rıza yok.
        Onam alınınca content/patientMedia.ts → consentedPhotos doldurulur ve
        config/features.ts → patientPhotos açılır.
      */}

      {/* Seçili (onaylı) hasta deneyimleri — ülkeye göre filtreli */}
      <section className="container-content py-12">
        <ExperiencesList />
      </section>
    </>
  );
}
