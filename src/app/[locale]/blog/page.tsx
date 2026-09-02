import type { Metadata } from 'next';
import { buildAlternates } from '@/i18n/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Locale } from '@/i18n/routing';
import { blogPosts } from '@/content/blog';
import { PageHero } from '@/components/PageHero';
import { Link } from '@/i18n/navigation';
import { Icon } from '@/components/Icon';

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Blog' });
  return {
    title: t('title'),
    description: t('subtitle'),
    alternates: buildAlternates(locale, '/blog')
  };
}

export default async function BlogIndexPage({
  params
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('Blog');

  const posts = [...blogPosts].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <>
      <PageHero eyebrow={t('title')} title={t('title')} description={t('subtitle')} />
      <section className="container-content py-12">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => {
            const c = post.i18n[locale] ?? post.i18n.en ?? post.i18n.tr!;
            return (
              <Link
                key={post.slug}
                href={{ pathname: '/blog/[slug]', params: { slug: post.slug } }}
                className="card group flex flex-col p-6 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg"
              >
                <time dateTime={post.date} className="label-mono">
                  {new Intl.DateTimeFormat(locale, { dateStyle: 'medium' }).format(new Date(post.date))}
                </time>
                <h2 className="mt-2 text-lg font-bold leading-snug">{c.title}</h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{c.excerpt}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                  {t('readingTime')}
                  <Icon name="arrow" size={16} className="rtl:rotate-180" />
                </span>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
}
