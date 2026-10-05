import type { Metadata } from 'next';
import { ogImages, ogImagePath } from '@/config/ogImage';
import { buildAlternates, getPathname, treatmentHref } from '@/i18n/navigation';
import { notFound } from 'next/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { routing, type Locale } from '@/i18n/routing';
import {
  publishedPosts,
  getBlogPost,
  readingMinutes,
  postLocales,
  isPostInLocale,
  type BlogPost
} from '@/content/blog';
import { getTreatment } from '@/content/treatments';
import { resolveContent } from '@/content/types';
import { siteConfig } from '@/config/site';
import { surgeonFullName } from '@/content/surgeon';
import { Icon } from '@/components/Icon';
import { WhatsAppCta } from '@/components/WhatsAppCta';
import { JsonLd } from '@/components/JsonLd';

/**
 * Yazılar çeviri değil, pazara özgüdür (bkz. BlogPost.languages). Bu yüzden
 * her yazı yalnızca yayınlandığı dillerde üretilir — Türkçe bir yazının
 * /ar altında Türkçe görünmesi engellenir.
 */
export function generateStaticParams() {
  return publishedPosts.flatMap((p) =>
    postLocales(p).map((locale) => ({ locale, slug: p.slug }))
  );
}

/**
 * hreflang YALNIZCA yazının gerçekten yayında olduğu dilleri listeler.
 * Var olmayan çeviriyi bildirmek Search Console'da hata üretir.
 */
function blogAlternates(post: BlogPost, locale: Locale) {
  const href = { pathname: '/blog/[slug]' as const, params: { slug: post.slug } };
  const published = postLocales(post);
  if (!post.languages) return buildAlternates(locale, href);
  return {
    canonical: getPathname({ locale, href }),
    languages: Object.fromEntries(
      published.map((l) => [l, getPathname({ locale: l, href })])
    ) as Partial<Record<Locale, string>>
  };
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = getBlogPost(slug);
  if (!post || !isPostInLocale(post, locale)) return {};
  const c = post.i18n[locale] ?? post.i18n.en ?? post.i18n.tr!;
  return {
    title: c.metaTitle,
    description: c.metaDescription,
    alternates: blogAlternates(post, locale),
    openGraph: {
      title: c.metaTitle,
      description: c.metaDescription,
      type: 'article',
      images: ogImages(locale, c.metaTitle)
    },
    twitter: {
      card: 'summary_large_image',
      title: c.metaTitle,
      description: c.metaDescription,
      images: [ogImagePath(locale)]
    }
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
  if (!post || !isPostInLocale(post, locale)) notFound();

  const c = post.i18n[locale] ?? post.i18n.en ?? post.i18n.tr!;
  const t = await getTranslations('Blog');
  const tc = await getTranslations('Blog');
  const tt = await getTranslations('Treatment');

  const relatedTreatment = post.treatmentSlug ? getTreatment(post.treatmentSlug) : undefined;
  const relatedTitle = relatedTreatment ? resolveContent(relatedTreatment, locale).title : undefined;

  const author = surgeonFullName(locale);
  const minutes = readingMinutes(post, locale);
  const fmtDate = (iso: string) =>
    new Intl.DateTimeFormat(locale, { dateStyle: 'long' }).format(new Date(`${iso}T00:00:00`));

  /**
   * Article + yazar olarak Physician (prompt m.3.4).
   * Tıbbi içerikte yazar kimliği (E-E-A-T) arama görünürlüğü için belirleyicidir.
   */
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: c.title,
    description: c.metaDescription,
    inLanguage: locale,
    datePublished: post.date,
    dateModified: post.updated ?? post.date,
    author: {
      '@type': 'Physician',
      name: author,
      medicalSpecialty: 'Urology',
      url: `${siteConfig.domain}${getPathname({ locale, href: '/cerrah' })}`
    },
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

        <p className="label-mono">{tc(`categories.${post.category}` as never)}</p>
        <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">{c.title}</h1>
        <p className="mt-4 text-lg text-muted">{c.excerpt}</p>

        {/* YAZAR KUTUSU + tarihler + okuma süresi (prompt m.4.7). */}
        <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 rounded-xl border border-border bg-surface p-4 text-sm">
          <Link href="/cerrah" className="flex items-center gap-2.5 font-semibold hover:text-primary">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-soft text-primary">
              <Icon name="shield" size={18} />
            </span>
            {author}
          </Link>
          <span className="text-muted">
            {t('publishedOn')}: <time dateTime={post.date}>{fmtDate(post.date)}</time>
          </span>
          {post.updated && post.updated !== post.date && (
            <span className="text-muted">
              {t('updatedOn')}: <time dateTime={post.updated}>{fmtDate(post.updated)}</time>
            </span>
          )}
          <span className="text-muted">
            {minutes} {t('readingTime')}
          </span>
        </div>

        {/* İÇİNDEKİLER — iki bölümden fazlaysa gösterilir. */}
        {c.sections.length > 2 && (
          <nav aria-label={t('tocTitle')} className="mt-6 rounded-xl border border-border bg-surface-2 p-5">
            <p className="mb-2 font-semibold">{t('tocTitle')}</p>
            <ol className="space-y-1.5 text-sm">
              {c.sections.map((s, i) => (
                <li key={i}>
                  <a href={`#bolum-${i}`} className="text-muted underline-offset-2 hover:text-primary hover:underline">
                    {s.heading}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        )}

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
            <section key={i} id={`bolum-${i}`} className="scroll-mt-24">
              <h2 className="text-xl font-bold">{section.heading}</h2>
              <div className="prose-content mt-3 space-y-3">
                {section.paragraphs.map((p, j) => (
                  <p key={j}>{p}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* KAYNAKÇA */}
        {post.sources && post.sources.length > 0 && (
          <section className="mt-10">
            <h2 className="mb-3 text-lg font-bold">{t('sourcesTitle')}</h2>
            <ul className="space-y-2">
              {post.sources.map((src, i) => (
                <li key={i} className="flex gap-2 text-sm text-muted">
                  <Icon name="document" size={15} className="mt-0.5 shrink-0 text-primary" />
                  {src.url ? (
                    <a
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-2 hover:text-primary"
                    >
                      {src.label}
                    </a>
                  ) : (
                    src.label
                  )}
                </li>
              ))}
            </ul>
          </section>
        )}

        <p className="mt-8 text-xs text-muted">{tt('medicalDisclaimer')}</p>

        <div className="mt-10 rounded-xl border border-primary/25 bg-primary-soft/50 p-6">
          <WhatsAppCta />
        </div>
      </article>
    </>
  );
}
