import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { getPathname, Link } from '@/i18n/navigation';
import { routing, locales, type Locale } from '@/i18n/routing';
import { countries, getCountry, VISA_SOURCE_URL, EVISA_URL } from '@/content/countries';
import { siteConfig } from '@/config/site';
import { PageHero } from '@/components/PageHero';
import { WhatsAppCta } from '@/components/WhatsAppCta';
import { Icon } from '@/components/Icon';
import { JsonLd } from '@/components/JsonLd';

/**
 * ÜLKE SAYFASI (prompt m.4.5).
 *
 * /tr'de ÜRETİLMEZ: generateStaticParams tr'yi atlar ve sayfa tr isteğinde
 * notFound() döner. Sağlık turizmi istisnası yalnızca yabancı dil içindir.
 *
 * hreflang yalnızca ülkenin GERÇEKTEN yayımlandığı dilleri listeler —
 * var olmayan bir dile hreflang vermek hatalıdır.
 */
export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    locale === 'tr'
      ? []
      : countries
          .filter((c) => c.locales.includes(locale as Exclude<Locale, 'tr'>) && c.i18n[locale])
          .map((c) => ({ locale, slug: c.slug }))
  );
}

/** Yalnızca bu ülkenin yayımlandığı diller için hreflang üretir. */
function alternatesFor(country: { slug: string; locales: Exclude<Locale, 'tr'>[] }, locale: Locale) {
  const href = { pathname: '/uluslararasi-hasta/ulke/[slug]' as const, params: { slug: country.slug } };
  const languages = Object.fromEntries(
    locales
      .filter((l) => l !== 'tr' && country.locales.includes(l as Exclude<Locale, 'tr'>))
      .map((l) => [l, getPathname({ locale: l, href })])
  );
  return {
    canonical: getPathname({ locale, href }),
    languages: {
      ...languages,
      ...(country.locales.includes('en') ? { 'x-default': getPathname({ locale: 'en', href }) } : {})
    }
  };
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const country = getCountry(slug, locale);
  if (!country) return {};
  const c = country.i18n[locale]!;
  return {
    title: c.metaTitle,
    description: c.metaDescription,
    alternates: alternatesFor(country, locale)
  };
}

export default async function CountryPage({
  params
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const country = getCountry(slug, locale);
  if (!country) notFound();

  const c = country.i18n[locale]!;
  const t = await getTranslations('Country');
  const tc = await getTranslations('Common');

  const facts = [
    { icon: 'clock' as const, label: t('flightTime'), value: c.flightTime },
    { icon: 'pin' as const, label: t('routes'), value: c.routes },
    { icon: 'globe' as const, label: t('language'), value: c.language },
    { icon: 'document' as const, label: t('payment'), value: c.payment }
  ];

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: c.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a }
    }))
  };

  return (
    <>
      <JsonLd data={faqJsonLd} />
      <PageHero title={c.title} description={c.summary} />

      <div className="container-content py-12 md:py-16">
        {/* Hızlı bilgiler */}
        <section aria-label={t('quickFacts')} className="grid gap-4 sm:grid-cols-2">
          {facts.map((f) => (
            <div key={f.label} className="rounded-xl border border-border bg-surface p-5">
              <div className="flex items-center gap-2 text-muted">
                <Icon name={f.icon} size={16} />
                <span className="text-xs font-semibold uppercase tracking-wide">{f.label}</span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-fg">{f.value}</p>
            </div>
          ))}
        </section>

        {/* Vize — kural YAZILMAZ, resmî kaynağa yönlendirilir */}
        <section className="mt-10 rounded-2xl border border-accent/30 bg-accent/5 p-6">
          <h2 className="flex items-center gap-2 text-lg font-bold">
            <Icon name="alert" size={18} />
            {t('visaTitle')}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted">{t('visaBody')}</p>
          <div className="mt-3 flex flex-wrap gap-4 text-sm">
            <a
              href={VISA_SOURCE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary underline underline-offset-2"
            >
              {t('visaOfficial')}
            </a>
            <a
              href={EVISA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary underline underline-offset-2"
            >
              {t('visaEvisa')}
            </a>
          </div>
        </section>

        {/* Ülkeye özgü bölümler */}
        {c.sections.map((s) => (
          <section key={s.heading} className="mt-10">
            <h2 className="text-xl font-bold md:text-2xl">{s.heading}</h2>
            <p className="mt-3 leading-relaxed text-muted">{s.body}</p>
          </section>
        ))}

        {/* SSS */}
        <section className="mt-14">
          <h2 className="mb-6 text-xl font-bold md:text-2xl">{t('faqTitle')}</h2>
          <div className="space-y-4">
            {c.faqs.map((f) => (
              <details key={f.q} className="rounded-xl border border-border bg-surface p-5">
                <summary className="cursor-pointer text-sm font-semibold text-fg">{f.q}</summary>
                <p className="mt-2 text-sm leading-relaxed text-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mt-14 flex flex-col items-start gap-4 rounded-2xl bg-primary p-8 text-primary-fg md:flex-row md:items-center md:justify-between md:p-10">
          <div>
            <h2 className="text-xl font-bold">{t('ctaTitle')}</h2>
            <p className="mt-1 text-sm opacity-90">{t('ctaBody')}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <WhatsAppCta
              message={`[${locale.toUpperCase()}-COUNTRY-${country.iso}] ${c.title}`}
              className="!bg-transparent !text-primary-fg border border-primary-fg/40 hover:!bg-primary-fg/10"
            />
            <Link href="/iletisim" className="btn-secondary">
              {tc('formCta')}
            </Link>
          </div>
        </section>

        <p className="mt-10 text-xs text-muted">
          {t('backTo')}{' '}
          <Link href="/uluslararasi-hasta" className="underline underline-offset-2">
            {siteConfig.name}
          </Link>
        </p>
      </div>
    </>
  );
}
