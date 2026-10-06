import type { Metadata } from 'next';
import { BreadcrumbJsonLd } from '@/components/BreadcrumbJsonLd';
import Image from 'next/image';
import { buildAlternates } from '@/i18n/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Locale } from '@/i18n/routing';
import { hospital } from '@/content/trust';
import { resolveHospitalDetails } from '@/content/hospitalDetails';
import { hospitals, tourismLicenseHolders } from '@/config/hospitals';
import { contactConfig } from '@/config/contact';
import { isPlaceholder } from '@/content/types';
import { publicImage } from '@/lib/publicImage';
import { PageHero, SectionHeading } from '@/components/PageHero';
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
  const details = resolveHospitalDetails(locale);

  // Doğrulanmamış teknik detaylar gerçek bilgi gelene kadar gizli.
  const showRobot = !isPlaceholder(hospital.robotSystem);
  const showLaser = !isPlaceholder(hospital.laserSystem);
  const features = c.features.filter((f) => !isPlaceholder(f));

  return (
    <>
      <BreadcrumbJsonLd locale={locale} items={[{ name: t('title'), href: '/hastane' }]} />
      <PageHero eyebrow={t('title')} title={c.name} description={c.intro[0]} />

      <div className="container-content py-12">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="min-w-0 lg:col-span-2">
            <div className="prose-content space-y-3">
              {c.intro.slice(1).map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {(showRobot || showLaser) && (
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {showRobot && (
                  <div className="card p-5">
                    <p className="label-mono mb-1">{t('robotLabel')}</p>
                    <p className="font-medium">{hospital.robotSystem}</p>
                  </div>
                )}
                {showLaser && (
                  <div className="card p-5">
                    <p className="label-mono mb-1">{t('laserLabel')}</p>
                    <p className="font-medium">{hospital.laserSystem}</p>
                  </div>
                )}
              </div>
            )}

            {/*
              GENİŞLETİLMİŞ İÇERİK — content/hospitalDetails.ts.
              Sayfa daha önce 113 kelimeydi; ameliyathane altyapısı, cerrahi
              teknoloji, uluslararası hasta birimi ve ulaşım başlıkları eklendi.
            */}
            <div className="mt-10 space-y-10">
              {details.sections.map((s) => (
                <section key={s.title}>
                  <SectionHeading title={s.title} />
                  <div className="prose-content space-y-3">
                    {s.body.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                </section>
              ))}
            </div>
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

        {/*
          MERKEZLER — her hastane için belge durumu config/hospitals.ts'ten
          okunur. İşaretli olmayan belge hiç basılmaz; belge numarası boşsa
          numara satırı hiç görünmez (doğrulanmamış numara yayımlanmaz).
          Fotoğraf dosyası yoksa görsel alanı da hiç render edilmez.
        */}
        <section className="mt-14">
          <SectionHeading title={t('centersTitle')} />
          <div className="grid gap-6 md:grid-cols-2">
            {hospitals.map((h) => {
              const photo = publicImage(h.photo);
              const a = h.accreditation;
              const badges = [
                a.jci ? 'JCI' : null,
                a.iso9001 ? 'ISO 9001' : null
              ].filter(Boolean) as string[];
              return (
                <div key={h.id} className="card overflow-hidden">
                  {photo && (
                    <div className="relative aspect-[16/9] bg-surface-2">
                      <Image
                        src={photo}
                        alt={t('hospitalPhotoAlt', { name: h.name })}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                        loading="lazy"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="font-serif text-lg font-bold">{h.name}</h3>
                    {badges.length > 0 && (
                      <ul className="mt-3 flex flex-wrap gap-2">
                        {badges.map((b) => (
                          <li key={b} className="chip border-primary/30 bg-primary-soft text-primary">
                            <Icon name="shield" size={14} />
                            {b}
                          </li>
                        ))}
                      </ul>
                    )}
                    {a.tourismLicense && (
                      <p className="mt-3 text-sm text-muted">
                        {t('licenseHolder', { holder: h.name })}
                        {a.tourismLicenseNo ? ` · ${t('licenseNo')}: ${a.tourismLicenseNo}` : ''}
                      </p>
                    )}
                    {h.mapsLink && (
                      <a
                        href={h.mapsLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
                      >
                        <Icon name="pin" size={16} />
                        {t('mapLink')}
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          <p className="mt-4 rounded-xl border border-border bg-surface p-4 text-sm text-muted">
            {details.choiceNote}
          </p>
        </section>

        <section className="mt-14">
          <h2 className="mb-6 text-xl font-bold md:text-2xl">{t('accreditationsTitle')}</h2>
          <AccreditationBadges />
          {/* Belge sahibi kurumu site genelinde bir kez daha belirt — belgeyi
              T.C. Sağlık Bakanlığı verir ve sahibi hekim değil hastanedir. */}
          <p className="mt-4 text-sm text-muted">
            {t('licenseLabel')}:{' '}
            {t('licenseHolder', { holder: tourismLicenseHolders().join(' · ') })}
          </p>
        </section>
      </div>
    </>
  );
}
