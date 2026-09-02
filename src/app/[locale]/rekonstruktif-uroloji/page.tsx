import type { Metadata } from 'next';
import { buildAlternates, getPathname } from '@/i18n/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import type { Locale } from '@/i18n/routing';
import { reconstructiveTreatments } from '@/content/treatments';
import { resolveContent } from '@/content/types';
import { resolveReconstructive } from '@/content/reconstructive';
import { siteConfig } from '@/config/site';
import { TreatmentCard } from '@/components/TreatmentCard';
import { WhatsAppCta } from '@/components/WhatsAppCta';
import { Icon, type IconName } from '@/components/Icon';
import { JsonLd } from '@/components/JsonLd';

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const c = resolveReconstructive(locale);
  return {
    title: c.title,
    description: c.intro[0],
    alternates: buildAlternates(locale, '/rekonstruktif-uroloji'),
    openGraph: { title: c.title, description: c.intro[0], type: 'website' }
  };
}

export default async function ReconstructivePage({
  params
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const c = resolveReconstructive(locale);
  const tc = await getTranslations('Common');

  const whyIcons: IconName[] = ['oncology', 'swap', 'shield'];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: c.title,
    description: c.intro[0],
    inLanguage: locale,
    url: `${siteConfig.domain}${getPathname({ locale, href: '/rekonstruktif-uroloji' })}`
  };

  return (
    <>
      <JsonLd data={jsonLd} />

      {/* Hero — uzmanlık/karmaşıklık çerçevesi, fiyat vurgusu yok */}
      <section className="border-b border-border bg-surface">
        <div className="container-content py-14 md:py-20">
          <p className="label-mono mb-3 text-primary">{c.eyebrow}</p>
          <h1 className="max-w-3xl text-3xl font-bold leading-tight md:text-4xl">{c.title}</h1>
          <div className="prose-content mt-5 max-w-2xl space-y-3">
            {c.intro.map((p, i) => (
              <p key={i} className="text-muted">{p}</p>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/iletisim" className="btn-primary">
              <Icon name="document" size={18} />
              {tc('fileEvalCta')}
            </Link>
            <WhatsAppCta className="!bg-transparent !text-fg border border-border hover:!bg-surface-2" />
          </div>
        </div>
      </section>

      {/* Neden buraya */}
      <section className="container-content py-14">
        <h2 className="mb-6 text-xl font-bold md:text-2xl">{c.whyTitle}</h2>
        <div className="grid gap-5 md:grid-cols-3">
          {c.why.map((w, i) => (
            <div key={i} className="card p-6">
              <span className="mb-3 flex h-11 w-11 items-center justify-center rounded-lg bg-primary-soft text-primary">
                <Icon name={whyIcons[i] ?? 'shield'} size={22} />
              </span>
              <h3 className="font-bold">{w.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">{w.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Bu alandaki cerrahiler */}
      <section className="container-content pb-6">
        <h2 className="mb-6 text-xl font-bold md:text-2xl">{c.treatmentsTitle}</h2>
        <div className="grid gap-5 sm:grid-cols-2">
          {reconstructiveTreatments.map((tr) => {
            const rc = resolveContent(tr, locale);
            return (
              <TreatmentCard key={tr.slug} slug={tr.slug} icon={tr.icon} title={rc.title} summary={rc.summary} />
            );
          })}
        </div>
      </section>

      {/* Dosya değerlendirmesi CTA (fiyat değil, akış) */}
      <section className="container-content py-14">
        <div className="rounded-2xl border border-primary/25 bg-primary p-8 text-primary-fg md:p-12">
          <h2 className="max-w-2xl text-2xl font-bold text-primary-fg md:text-3xl">{c.ctaTitle}</h2>
          <p className="mt-3 max-w-2xl text-primary-fg/85">{c.ctaBody}</p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link href="/iletisim" className="btn bg-accent text-accent-fg hover:bg-accent/90">
              <Icon name="document" size={18} />
              {tc('fileEvalCta')}
            </Link>
            <WhatsAppCta className="!bg-transparent !text-primary-fg border border-primary-fg/40 hover:!bg-primary-fg/10" />
          </div>
        </div>
      </section>
    </>
  );
}
