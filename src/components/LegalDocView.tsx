import { getTranslations } from 'next-intl/server';
import type { Locale } from '@/i18n/routing';
import type { LegalDoc } from '@/content/legal';
import { PageHero } from './PageHero';

export async function LegalDocView({
  doc,
  title,
  locale
}: {
  doc: LegalDoc;
  title: string;
  locale: Locale;
}) {
  const t = await getTranslations('Legal');
  const c = doc.i18n[locale] ?? doc.i18n.en ?? doc.i18n.tr!;

  return (
    <>
      <PageHero title={title} />
      <div className="container-content max-w-3xl py-12">
        <p className="label-mono mb-6">
          {t('lastUpdated')}:{' '}
          {new Intl.DateTimeFormat(locale, { dateStyle: 'long' }).format(new Date(doc.lastUpdated))}
        </p>

        <p className="text-muted">{c.intro}</p>

        <div className="mt-8 space-y-8">
          {c.sections.map((section, i) => (
            <section key={i}>
              <h2 className="text-lg font-bold">{section.heading}</h2>
              <div className="prose-content mt-2 space-y-3">
                {section.paragraphs.map((p, j) => (
                  <p key={j} className="text-sm">{p}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </>
  );
}
