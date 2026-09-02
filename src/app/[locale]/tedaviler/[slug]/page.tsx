import type { Metadata } from 'next';
import { buildAlternates } from '@/i18n/navigation';
import { notFound } from 'next/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { routing, type Locale } from '@/i18n/routing';
import { getTreatment, treatments, treatmentSlugs } from '@/content/treatments';
import { resolveContent, treatmentCategory, isPlaceholder } from '@/content/types';
import { resolveConsultation } from '@/content/consultation';
import { siteConfig, formatPriceRangeTRY } from '@/config/site';
import { surgeon, surgeonFullName } from '@/content/surgeon';
import { SectionHeading } from '@/components/PageHero';
import { Icon } from '@/components/Icon';
import { WhatsAppCta } from '@/components/WhatsAppCta';
import { VerifiedInfo } from '@/components/VerifiedInfo';
import { VideoPlaceholder } from '@/components/VideoPlaceholder';
import { PreAssessmentForm } from '@/components/PreAssessmentForm';
import { JsonLd } from '@/components/JsonLd';
import { TreatmentCard } from '@/components/TreatmentCard';
import { PatientGallery } from '@/components/PatientGallery';
import { InsuranceInfo } from '@/components/InsuranceInfo';
import { photosForTreatment } from '@/content/patientMedia';
import { storiesForTreatment } from '@/content/experiences';

// Tüm dil + slug kombinasyonlarını statik üret (hız için).
export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    treatmentSlugs.map((slug) => ({ locale, slug }))
  );
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const treatment = getTreatment(slug);
  if (!treatment) return {};
  const c = resolveContent(treatment, locale);
  return {
    title: c.metaTitle,
    description: c.metaDescription,
    alternates: buildAlternates(locale, { pathname: '/tedaviler/[slug]', params: { slug } }),
    openGraph: { title: c.metaTitle, description: c.metaDescription, type: 'article' }
  };
}

export default async function TreatmentPage({
  params
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const treatment = getTreatment(slug);
  if (!treatment) notFound();

  const c = resolveContent(treatment, locale);
  const t = await getTranslations('Treatment');
  const tc = await getTranslations('Common');
  const tf = await getTranslations('Form');
  const te = await getTranslations('Experiences');

  // TL fiyat aralığı (varsa) — TL + yaklaşık USD/EUR olarak biçimlenir.
  const priceRange = treatment.priceRangeTRY
    ? formatPriceRangeTRY(treatment.priceRangeTRY, locale)
    : null;
  const isReconstructive = treatmentCategory(treatment) === 'reconstructive';
  // Fotoğraflar androloji/rekonstrüktifte daima boş (mahremiyet); yorumlar serbest.
  const galleryPhotos = photosForTreatment(slug);
  const patientStories = storiesForTreatment(slug);
  // İlgili tedaviler aynı kategoriden; yetmezse genelle tamamla.
  const sameCat = treatments.filter(
    (tr) => tr.slug !== slug && treatmentCategory(tr) === treatmentCategory(treatment)
  );
  const related = (sameCat.length >= 3 ? sameCat : treatments.filter((tr) => tr.slug !== slug)).slice(0, 3);

  // JSON-LD: MedicalWebPage + FAQPage + ilişkili Physician.
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MedicalWebPage',
        name: c.metaTitle,
        description: c.metaDescription,
        inLanguage: locale,
        url: `${siteConfig.domain}/${locale}/tedaviler/${slug}`,
        about: { '@type': 'MedicalProcedure', name: c.title },
        lastReviewed: new Date().toISOString().slice(0, 10)
      },
      {
        '@type': 'Physician',
        name: surgeonFullName(locale),
        medicalSpecialty: 'Urology',
        url: `${siteConfig.domain}/${locale}/cerrah`
      },
      {
        '@type': 'FAQPage',
        mainEntity: c.faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a }
        }))
      }
    ]
  };

  return (
    <>
      <JsonLd data={jsonLd} />

      {/* Başlık */}
      <div className="border-b border-border bg-surface">
        <div className="container-content py-10 md:py-14">
          <Link href="/tedaviler" className="mb-4 inline-flex items-center gap-1.5 text-sm font-medium text-muted hover:text-fg">
            <Icon name="arrow" size={16} className="rotate-180 rtl:rotate-0" />
            {tc('backToTreatments')}
          </Link>
          <div className="flex items-start gap-4">
            <span className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary sm:flex">
              <Icon name={treatment.icon as never} size={30} />
            </span>
            <div>
              <h1 className="text-3xl font-bold leading-tight md:text-4xl">{c.title}</h1>
              <p className="mt-3 max-w-2xl text-muted md:text-lg">{c.summary}</p>
            </div>
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            {isReconstructive ? (
              <>
                <a href="#form" className="btn-primary">
                  <Icon name="document" size={18} />
                  {tc('fileEvalCta')}
                </a>
                <WhatsAppCta
                  message={`${c.title} — ${tf('title')}`}
                  className="!bg-transparent !text-fg border border-border hover:!bg-surface-2"
                />
              </>
            ) : (
              <>
                <WhatsAppCta message={`${c.title} — ${tf('title')}`} />
                <a href="#form" className="btn bg-accent text-accent-fg hover:bg-accent/90">
                  {tc('formCta')}
                </a>
              </>
            )}
          </div>
        </div>
      </div>

      {/* ÜCRETLİ ÖZEL GÖRÜŞME — yalnızca offersConsultation olan tedavilerde (androloji).
          Ücretsiz WhatsApp/form CTA'larından görsel olarak ayrışır. */}
      {treatment.offersConsultation &&
        (() => {
          const consult = resolveConsultation(locale);
          return (
            <div className="container-content pt-8">
              <div className="flex flex-col gap-5 rounded-2xl border border-accent/40 bg-accent/10 p-6 md:flex-row md:items-center md:justify-between md:p-7">
                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-fg">
                    <Icon name="video" size={24} />
                  </span>
                  <div>
                    <span className="chip border-accent/40 bg-accent/15 text-accent">{consult.badge}</span>
                    <h2 className="mt-2 text-lg font-bold">{consult.title}</h2>
                    <p className="mt-1 max-w-xl text-sm text-muted">{consult.summary}</p>
                  </div>
                </div>
                <Link
                  href="/ozel-danismanlik"
                  className="btn bg-accent text-accent-fg hover:bg-accent/90 shrink-0"
                >
                  <Icon name="video" size={18} />
                  {consult.ctaBook}
                </Link>
              </div>
            </div>
          );
        })()}

      <div className="container-content grid gap-10 py-12 lg:grid-cols-3">
        {/* ANA İÇERİK */}
        <div className="space-y-12 lg:col-span-2">
          {/* Durumun tanımı */}
          <section>
            <SectionHeading title={t('sectionDefinition')} />
            <div className="prose-content space-y-3">
              {c.definition.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </section>

          {/* Cerrah deneyimi — doğrulanabilir. Rekonstrüktif vakalarda vaka sayısının
              yanında redo oranı, kompleks vaka tanımı ve ileri teknik öne çıkar. */}
          <section>
            <SectionHeading title={t('sectionExperience')} />
            <VerifiedInfo
              title={tc('verified')}
              note={c.surgeonExperience.note}
              items={[
                { label: t('caseVolumeLabel'), value: c.surgeonExperience.caseVolume },
                ...(c.expertise
                  ? [
                      { label: t('redoRateLabel'), value: c.expertise.redoRate },
                      { label: t('complexCaseLabel'), value: c.expertise.complexCase },
                      { label: t('advancedTechniqueLabel'), value: c.expertise.advancedTechnique }
                    ]
                  : []),
                {
                  label: t('sectionExperience'),
                  value: surgeonFullName(locale),
                  note: isPlaceholder(surgeon.diplomaRegistryNo) ? undefined : surgeon.diplomaRegistryNo
                }
              ]}
            />
          </section>

          {/* Süreç zaman çizelgesi */}
          <section>
            <SectionHeading title={t('sectionTimeline')} />
            <ol className="relative space-y-6 border-s-2 border-border ps-6">
              {c.timeline.map((step, i) => (
                <li key={i} className="relative">
                  <span className="absolute -start-[1.72rem] top-1 flex h-4 w-4 items-center justify-center rounded-full border-2 border-primary bg-bg" aria-hidden="true" />
                  <span className="label-mono">{step.when}</span>
                  <h3 className="mt-1 font-bold">{step.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{step.body}</p>
                </li>
              ))}
            </ol>
          </section>

          {/* Yöntem karşılaştırması (opsiyonel) */}
          {c.comparison && (
            <section>
              <SectionHeading title={t('sectionComparison')} />
              <div className="overflow-x-auto rounded-xl border border-border">
                <table className="w-full border-collapse text-sm">
                  <caption className="sr-only">{c.comparison.title}</caption>
                  <thead>
                    <tr className="bg-surface-2">
                      {c.comparison.columns.map((col, i) => (
                        <th key={i} scope="col" className="whitespace-nowrap px-4 py-3 text-start font-semibold">
                          {col}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {c.comparison.rows.map((row, ri) => (
                      <tr key={ri} className="border-t border-border">
                        <th scope="row" className="px-4 py-3 text-start font-medium text-fg">{row.label}</th>
                        {row.values.map((v, vi) => (
                          <td key={vi} className="px-4 py-3 text-muted">{v}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {c.comparison.note && <p className="mt-2 text-xs text-muted">{c.comparison.note}</p>}
            </section>
          )}

          {/* Riskler ve alternatifler */}
          <section className="grid gap-6 sm:grid-cols-2">
            <div>
              <SectionHeading title={t('sectionRisks')}>
                <Icon name="alert" size={20} className="text-accent" />
              </SectionHeading>
              <ul className="space-y-2">
                {c.risks.map((r, i) => (
                  <li key={i} className="flex gap-2 text-sm text-muted">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                    {r}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <SectionHeading title={t('sectionAlternatives')}>
                <Icon name="swap" size={20} className="text-primary" />
              </SectionHeading>
              <ul className="space-y-2">
                {c.alternatives.map((a, i) => (
                  <li key={i} className="flex gap-2 text-sm text-muted">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Hasta deneyimi videosu */}
          <section>
            <SectionHeading title={t('sectionVideo')} />
            <VideoPlaceholder caption={t('videoPlaceholder')} title={c.title} />
          </section>

          {/* Hastalarımızdan — fotoğraflar (androloji/rekonstrüktifte gizli) + yorumlar */}
          {(galleryPhotos.length > 0 || patientStories.length > 0) && (
            <section className="space-y-6">
              <SectionHeading title={te('galleryTitle')} />
              <PatientGallery photos={galleryPhotos} alt={te('photoAlt')} />
              {patientStories.length > 0 && (
                <ul className="grid gap-5 sm:grid-cols-2">
                  {patientStories.map((s) => {
                    const dateStr = new Intl.DateTimeFormat(locale, {
                      year: 'numeric',
                      month: 'long'
                    }).format(new Date(`${s.date}-01T00:00:00`));
                    return (
                      <li key={s.id} className="card p-5">
                        <div className="mb-2 flex items-center justify-between gap-2">
                          <span className="font-semibold">{s.name}</span>
                          {s.rating ? (
                            <span className="text-[#F4B400]" aria-label={`${s.rating} / 5`}>
                              {'★'.repeat(s.rating)}
                            </span>
                          ) : null}
                        </div>
                        <blockquote className="text-sm leading-relaxed text-fg/90">
                          “{s.quote}”
                        </blockquote>
                        <p className="mt-2 text-xs text-muted">{dateStr}</p>
                      </li>
                    );
                  })}
                </ul>
              )}
            </section>
          )}

          {/* SSS */}
          <section>
            <SectionHeading title={t('sectionFaq')} />
            <div className="divide-y divide-border rounded-xl border border-border">
              {c.faqs.map((f, i) => (
                <details key={i} className="group px-5 py-4">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium">
                    {f.q}
                    <Icon name="arrow" size={18} className="shrink-0 rotate-90 text-muted transition-transform group-open:-rotate-90" />
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{f.a}</p>
                </details>
              ))}
            </div>
          </section>

          <p className="text-xs text-muted">{t('medicalDisclaimer')}</p>
        </div>

        {/* YAN PANEL — fiyat + paket + CTA (masaüstünde yapışkan) */}
        <aside className="lg:col-span-1">
          <div className="lg:sticky lg:top-20 space-y-5">
            <div className="card p-6">
              <h2 className="font-serif text-lg font-bold">{t('sectionPrice')}</h2>
              <div className="mt-3">
                {priceRange ? (
                  <>
                    {/* TL aralığı girilmiş — TL + yaklaşık USD/EUR (her kategoride). */}
                    <p className="label-mono">{t('priceRange')}</p>
                    <p className="mt-1 font-mono text-2xl font-bold text-primary">
                      {priceRange.try}{' '}
                      <span className="text-sm font-medium text-muted">{t('priceApprox')}</span>
                    </p>
                    <p className="mt-0.5 text-sm text-muted">{priceRange.approx}</p>
                  </>
                ) : isReconstructive ? (
                  <>
                    <p className="label-mono">{t('priceByAssessment')}</p>
                    <p className="mt-1 font-semibold text-fg">{t('priceOnRequest')}</p>
                  </>
                ) : (
                  <>
                    <p className="label-mono">{t('priceRange')}</p>
                    <p className="mt-1 font-semibold text-fg">{t('priceOnRequest')}</p>
                  </>
                )}
                {c.price.disclaimer && (
                  <p className="mt-2 text-xs text-muted">{c.price.disclaimer}</p>
                )}
              </div>

              <hr className="my-5 border-border" />

              <p className="label-mono mb-3">{t('packageIncludes')}</p>
              <ul className="space-y-2">
                {c.packageIncludes.map((item, i) => (
                  <li key={i} className="flex gap-2 text-sm text-muted">
                    <Icon name="check" size={16} className="mt-0.5 shrink-0 text-success" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-col gap-2.5">
                {isReconstructive ? (
                  <>
                    <a href="#form" className="btn-primary w-full">
                      <Icon name="document" size={18} />
                      {tc('fileEvalCta')}
                    </a>
                    <WhatsAppCta message={`${c.title} — ${tf('title')}`} className="w-full !bg-transparent !text-fg border border-border hover:!bg-surface-2" />
                  </>
                ) : (
                  <>
                    <WhatsAppCta message={`${c.title} — ${tf('title')}`} className="w-full" />
                    <a href="#form" className="btn-outline w-full">{tc('formCta')}</a>
                  </>
                )}
              </div>
            </div>

            {/* SGK / özel sigorta bilgi bloğu (içerik varsa görünür) */}
            <InsuranceInfo locale={locale} variant="inline" />
          </div>
        </aside>
      </div>

      {/* FORM CTA */}
      <section id="form" className="border-t border-border bg-surface scroll-mt-20">
        <div className="container-content grid gap-8 py-14 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold md:text-3xl">{t('ctaTitle')}</h2>
            <p className="mt-3 text-muted">{t('ctaBody')}</p>
            <div className="mt-5">
              <WhatsAppCta message={`${c.title} — ${tf('title')}`} />
            </div>
          </div>
          <div className="card p-6">
            <h3 className="mb-1 font-serif text-lg font-bold">{tf('title')}</h3>
            <p className="mb-5 text-sm text-muted">{tf('subtitle')}</p>
            <PreAssessmentForm defaultTreatment={slug} />
          </div>
        </div>
      </section>

      {/* İlgili tedaviler */}
      <section className="container-content py-14">
        <h2 className="mb-6 text-xl font-bold md:text-2xl">{t('relatedTitle')}</h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((tr) => {
            const rc = resolveContent(tr, locale);
            return (
              <TreatmentCard key={tr.slug} slug={tr.slug} icon={tr.icon} title={rc.title} summary={rc.summary} />
            );
          })}
        </div>
      </section>
    </>
  );
}
