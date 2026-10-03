import type { Metadata } from 'next';
import { buildAlternates, getPathname, treatmentHref, Link } from '@/i18n/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Locale } from '@/i18n/routing';
import { glossary, glossaryByCategory, resolveTerm, type GlossaryCategory } from '@/content/glossary';
import { siteConfig } from '@/config/site';
import { PageHero } from '@/components/PageHero';
import { JsonLd } from '@/components/JsonLd';
import { Icon } from '@/components/Icon';

/** Kategorilerin sayfadaki sırası (en çok aranandan başlayarak). */
const CATEGORY_ORDER: GlossaryCategory[] = [
  'prostate',
  'bph',
  'stones',
  'andrology',
  'femaleUrology',
  'reconstructive',
  'general'
];

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Glossary' });
  return {
    title: t('title'),
    description: t('subtitle'),
    alternates: buildAlternates(locale, '/sozluk')
  };
}

export default async function GlossaryPage({
  params
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('Glossary');
  const groups = glossaryByCategory(locale);
  const pageUrl = `${siteConfig.domain}${getPathname({ locale, href: '/sozluk' })}`;

  /**
   * DefinedTermSet + DefinedTerm (prompt m.4.8).
   * Her terim kendi anchor'ıyla ayrı bir varlık olarak tanımlanır; uzun kuyruk
   * sorgularda terimin doğrudan bulunmasını kolaylaştırır.
   */
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'DefinedTermSet',
    name: t('title'),
    description: t('subtitle'),
    inLanguage: locale,
    url: pageUrl,
    hasDefinedTerm: glossary.map((g) => {
      const c = resolveTerm(g, locale);
      return {
        '@type': 'DefinedTerm',
        '@id': `${pageUrl}#${g.id}`,
        name: c.term,
        description: c.definition,
        inDefinedTermSet: pageUrl
      };
    })
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <PageHero eyebrow={t('title')} title={t('title')} description={t('subtitle')} />

      <div className="container-content py-12">
        {/* Kategori kısayolları */}
        <nav aria-label={t('jumpTo')} className="mb-10 flex flex-wrap gap-2">
          {CATEGORY_ORDER.filter((cat) => (groups.get(cat)?.length ?? 0) > 0).map((cat) => (
            <a
              key={cat}
              href={`#kategori-${cat}`}
              className="chip border-border bg-surface text-muted transition-colors hover:border-primary/40 hover:text-primary"
            >
              {t(`categories.${cat}` as never)}
            </a>
          ))}
        </nav>

        <div className="space-y-12">
          {CATEGORY_ORDER.map((cat) => {
            const terms = groups.get(cat);
            if (!terms || terms.length === 0) return null;
            return (
              <section key={cat} id={`kategori-${cat}`} className="scroll-mt-24">
                <h2 className="mb-5 text-xl font-bold md:text-2xl">{t(`categories.${cat}` as never)}</h2>
                <dl className="divide-y divide-border rounded-xl border border-border">
                  {terms.map((g) => {
                    const c = resolveTerm(g, locale);
                    return (
                      <div key={g.id} id={g.id} className="scroll-mt-24 px-5 py-4">
                        <dt className="font-semibold">{c.term}</dt>
                        <dd className="mt-1.5 text-sm leading-relaxed text-muted">
                          {c.definition}
                          {g.related && (
                            <Link
                              href={treatmentHref(g.related, locale)}
                              className="ms-2 inline-flex items-center gap-1 font-medium text-primary underline-offset-2 hover:underline"
                            >
                              {t('relatedLink')}
                              <Icon name="arrow" size={14} className="rtl:rotate-180" />
                            </Link>
                          )}
                        </dd>
                      </div>
                    );
                  })}
                </dl>
              </section>
            );
          })}
        </div>

        <p className="mt-10 text-xs text-muted">{t('disclaimer')}</p>
      </div>
    </>
  );
}
