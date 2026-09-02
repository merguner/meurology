import type { Metadata } from 'next';
import { buildAlternates } from '@/i18n/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Locale } from '@/i18n/routing';
import { hospital } from '@/content/trust';
import { isPlaceholder } from '@/content/types';
import { PageHero } from '@/components/PageHero';
import { AccreditationBadges } from '@/components/AccreditationBadges';
import { Icon } from '@/components/Icon';

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Hospital' });
  return {
    title: t('title'),
    alternates: buildAlternates(locale, '/hastane')
  };
}

export default async function HospitalPage({
  params
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('Hospital');
  const c = hospital.i18n[locale] ?? hospital.i18n.en!;

  // Doğrulanmamış teknik detaylar gerçek bilgi gelene kadar gizli.
  const showRobot = !isPlaceholder(hospital.robotSystem);
  const showOr = !isPlaceholder(hospital.operatingRooms);
  const features = c.features.filter((f) => !isPlaceholder(f));

  return (
    <>
      <PageHero eyebrow={t('title')} title={c.name} description={c.intro[0]} />

      <div className="container-content py-12">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="prose-content space-y-3 lg:col-span-2">
            {c.intro.slice(1).map((p, i) => (
              <p key={i}>{p}</p>
            ))}

            {(showRobot || showOr) && (
              <div className="grid gap-4 pt-4 sm:grid-cols-2">
                {showRobot && (
                  <div className="card p-5">
                    <p className="label-mono mb-1">{t('robotLabel')}</p>
                    <p className="font-medium">{hospital.robotSystem}</p>
                  </div>
                )}
                {showOr && (
                  <div className="card p-5">
                    <p className="label-mono mb-1">{t('orLabel')}</p>
                    <p className="font-medium">{hospital.operatingRooms}</p>
                  </div>
                )}
              </div>
            )}
          </div>

          {features.length > 0 && (
            <aside>
              <div className="card p-6">
                <h2 className="mb-3 font-semibold">{t('featuresTitle')}</h2>
                <ul className="space-y-2.5">
                  {features.map((f, i) => (
                    <li key={i} className="flex gap-2 text-sm text-muted">
                      <Icon name="check" size={16} className="mt-0.5 shrink-0 text-success" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          )}
        </div>

        <section className="mt-14">
          <h2 className="mb-6 text-xl font-bold md:text-2xl">{t('accreditationsTitle')}</h2>
          <AccreditationBadges />
        </section>
      </div>
    </>
  );
}
