import type { Metadata } from 'next';
import { buildAlternates } from '@/i18n/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Locale } from '@/i18n/routing';
import { PageHero } from '@/components/PageHero';
import { WhatsAppCta } from '@/components/WhatsAppCta';
import { Icon } from '@/components/Icon';
import { Link } from '@/i18n/navigation';
import { resolveInternationalFaq } from '@/content/internationalFaq';
import { countriesForLocale } from '@/content/countries';
import { JsonLd } from '@/components/JsonLd';

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Process' });
  return {
    title: t('title'),
    description: t('subtitle'),
    alternates: buildAlternates(locale, '/uluslararasi-hasta')
  };
}

export default async function ProcessPage({
  params
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('Process');
  const tc = await getTranslations('Common');
  const tCountry = await getTranslations('Country');

  // /tr'de boş döner — ülke sayfaları yalnızca yabancı dillerde yayımlanır.
  const countryList = countriesForLocale(locale);
  // Ülke adını okuyucunun dilinde göster (ISO kodundan).
  const regionName = (iso: string, loc: string) => {
    try {
      return new Intl.DisplayNames([loc], { type: 'region' }).of(iso) ?? iso;
    } catch {
      return iso;
    }
  };

  const steps = ['s1', 's2', 's3', 's4', 's5'] as const;
  const faqs = resolveInternationalFaq(locale);
  const packageItems = [
    t('packageAccommodation'),
    t('packageTransfer'),
    t('packageInterpreter'),
    t('packageFollowup')
  ];

  // FAQPage yapısal verisi — arama sonuçlarında soru/cevap görünürlüğü.
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a }
    }))
  };

  return (
    <>
      {faqs.length > 0 && <JsonLd data={faqJsonLd} />}
      <PageHero eyebrow={t('title')} title={t('title')} description={t('subtitle')} />

      <div className="container-content py-12">
        {/* Adımlar */}
        <section>
          <h2 className="mb-6 text-xl font-bold md:text-2xl">{t('stepsTitle')}</h2>
          <ol className="grid gap-5 md:grid-cols-5">
            {steps.map((s, i) => (
              <li key={s} className="card relative p-5">
                <span className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-lg font-bold text-primary-fg">
                  {i + 1}
                </span>
                <h3 className="text-sm font-bold">{t(`steps.${s}Title`)}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{t(`steps.${s}Body`)}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* Paketler */}
        <section className="mt-14 grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="mb-4 text-xl font-bold md:text-2xl">{t('packagesTitle')}</h2>
            <p className="text-muted">{t('packagesBody')}</p>
            <div className="mt-6">
              <WhatsAppCta />
            </div>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {packageItems.map((item, i) => (
              <li key={i} className="card flex items-start gap-3 p-4">
                <Icon name="check" size={18} className="mt-0.5 shrink-0 text-success" />
                <span className="text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Vize & seyahat */}
        <section className="mt-14 rounded-2xl border border-border bg-surface p-6 md:p-8">
          <h2 className="flex items-center gap-2 text-xl font-bold md:text-2xl">
            <Icon name="globe" size={24} className="text-primary" />
            {t('visaTitle')}
          </h2>
          <p className="mt-3 max-w-3xl text-muted">{t('visaBody')}</p>
          <p className="mt-3 text-xs text-muted">{t('visaDisclaimer')}</p>
        </section>

        {/* ÜLKE SAYFALARI — /tr'de boş döner, bölüm hiç render edilmez. */}
        {countryList.length > 0 && (
          <section className="mt-14">
            <h2 className="mb-2 text-xl font-bold md:text-2xl">{tCountry('listTitle')}</h2>
            <p className="mb-6 text-sm text-muted">{tCountry('listBody')}</p>
            <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {countryList.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={{
                      pathname: '/uluslararasi-hasta/ulke/[slug]',
                      params: { slug: c.slug }
                    }}
                    className="flex items-center justify-between gap-3 rounded-xl border border-border bg-surface px-4 py-3 text-sm font-medium transition-colors hover:border-primary/40 hover:bg-surface-2"
                  >
                    {regionName(c.iso, locale)}
                    <Icon name="arrow" size={15} className="shrink-0 text-muted rtl:rotate-180" />
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* SSS — süreç, ödeme, seyahat, komplikasyon ve takip (prompt m.4.5) */}
        {faqs.length > 0 && (
          <section className="mt-14">
            <h2 className="mb-6 text-xl font-bold md:text-2xl">{t('faqTitle')}</h2>
            <div className="divide-y divide-border rounded-xl border border-border">
              {faqs.map((f, i) => (
                <details key={i} className="group px-5 py-4">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium">
                    {f.q}
                    <Icon
                      name="arrow"
                      size={18}
                      className="shrink-0 rotate-90 text-muted transition-transform group-open:-rotate-90"
                    />
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{f.a}</p>
                </details>
              ))}
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="mt-14 flex flex-col items-start gap-4 rounded-2xl bg-primary p-8 text-primary-fg md:flex-row md:items-center md:justify-between md:p-10">
          <p className="max-w-xl text-lg font-semibold text-primary-fg">{t('subtitle')}</p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <WhatsAppCta />
            <Link href="/iletisim" className="btn bg-accent text-accent-fg hover:bg-accent/90">
              {tc('formCta')}
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
