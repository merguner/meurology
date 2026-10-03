import type { Metadata } from 'next';
import { buildAlternates, getPathname, treatmentHref } from '@/i18n/navigation';
import { notFound } from 'next/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { routing, type Locale } from '@/i18n/routing';
import { blogPosts, getBlogPost } from '@/content/blog';
import { getTreatment } from '@/content/treatments';
import { resolveContent } from '@/content/types';
import { siteConfig } from '@/config/site';
import { Icon } from '@/components/Icon';
import { WhatsAppCta } from '@/components/WhatsAppCta';
import { JsonLd } from '@/components/JsonLd';

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    blogPosts.map((p) => ({ locale, slug: p.slug }))
  );
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  const c = post.i18n[locale] ?? post.i18n.en ?? post.i18n.tr!;
  return {
    title: c.metaTitle,
    description: c.metaDescription,
    alternates: buildAlternates(locale, { pathname: '/blog/[slug]', params: { slug } }),
    openGraph: { title: c.metaTitle, description: c.metaDescription, type: 'article' }
  };
}

export default async function BlogPostPage({
  params
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const post = getBlogPost(slug);
  if (!post) notFound();

  const c = post.i18n[locale] ?? post.i18n.en ?? post.i18n.tr!;
  const t = await getTranslations('Blog');

  const relatedTreatment = post.treatmentSlug ? getTreatment(post.treatmentSlug) : undefined;
  const relatedTitle = relatedTreatment ? resolveContent(relatedTreatment, locale).title : undefined;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    headline: c.title,
    description: c.metaDescription,
    inLanguage: locale,
    datePublished: post.date,
    url: `${siteConfig.domain}${getPathname({ locale, href: { pathname: '/blog/[slug]', params: { slug } } })}`,
    publisher: { '@type': 'Organization', name: siteConfig.name }
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <article className="container-content max-w-3xl py-12">
        <Link href="/blog" className="mb-6 inline-flex items-center gap-1.5 text-sm font-medium text-muted hover:text-fg">
          <Icon name="arrow" size={16} className="rotate-180 rtl:rotate-0" />
          {t('backToBlog')}
        </Link>

        <p className="label-mono">
          {t('publishedOn')}:{' '}
          <time dateTime={post.date}>
            {new Intl.DateTimeFormat(locale, { dateStyle: 'long' }).format(new Date(post.date))}
          </time>
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">{c.title}</h1>
        <p className="mt-4 text-lg text-muted">{c.excerpt}</p>

        {relatedTreatment && relatedTitle && (
          <Link
            href={treatmentHref(relatedTreatment.slug, locale)}
            className="mt-5 inline-flex items-center gap-2 rounded-lg border border-border bg-surface-2 px-3 py-2 text-sm hover:border-primary/40"
          >
            <Icon name="arrow" size={16} className="text-primary rtl:rotate-180" />
            <span className="text-muted">{t('relatedTreatment')}:</span>
            <span className="font-semibold text-primary">{relatedTitle}</span>
          </Link>
        )}

        <div className="mt-8 space-y-8">
          {c.sections.map((section, i) => (
            <section key={i}>
              <h2 className="text-xl font-bold">{section.heading}</h2>
              <div className="prose-content mt-3 space-y-3">
                {section.paragraphs.map((p, j) => (
                  <p key={j}>{p}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-12 rounded-xl border border-primary/25 bg-primary-soft/50 p-6">
          <WhatsAppCta />
        </div>
      </article>
    </>
  );
}
