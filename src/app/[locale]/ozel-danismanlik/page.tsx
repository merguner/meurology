import type { Metadata } from 'next';
import { buildAlternates } from '@/i18n/navigation';
import { setRequestLocale } from 'next-intl/server';
import type { Locale } from '@/i18n/routing';
import { resolveConsultation } from '@/content/consultation';
import { siteConfig, approxForeign } from '@/config/site';
import { PageHero } from '@/components/PageHero';
import { BookingFlow } from '@/components/BookingFlow';
import { Icon } from '@/components/Icon';

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const c = resolveConsultation(locale);
  return {
    title: c.title,
    description: c.summary,
    alternates: buildAlternates(locale, '/ozel-danismanlik')
  };
}

export default async function ConsultationPage({
  params
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const c = resolveConsultation(locale);
  const cfg = siteConfig.consultation;
  const price = `${cfg.price.amount} (${c.vatIncluded})`; // ör. "8.000 TL (KDV dahil)"
  const priceNote = c.priceNote.replace('{duration}', String(cfg.durationMinutes));

  return (
    <>
      <PageHero eyebrow={c.eyebrow} title={c.title} description={c.summary} />

      <div className="container-content grid gap-10 py-12 lg:grid-cols-2">
        {/* Sol: anlatım */}
        <div className="space-y-8">
          <span className="chip border-accent/40 bg-accent/10 text-accent">
            <Icon name="video" size={14} />
            {c.badge}
          </span>

          <div className="prose-content space-y-3">
            {c.heroDescription.map((p, i) => (
              <p key={i} className="text-muted">{p}</p>
            ))}
          </div>

          <p className="rounded-lg border border-border bg-surface-2 p-4 text-sm text-muted">
            {c.forWhom}
          </p>

          {/* Ücret */}
          <div className="card p-5">
            <p className="label-mono">{c.priceLabel}</p>
            <p className="mt-1 text-2xl font-bold text-primary">
              {price} <span className="text-base font-normal text-muted">{approxForeign(siteConfig.consultation.price.amountTRY)}</span>
            </p>
            <p className="mt-1 text-sm text-muted">{priceNote}</p>
            {c.fxNote && <p className="mt-2 text-xs text-muted">{c.fxNote}</p>}
          </div>

          {/* Nasıl işliyor */}
          <div>
            <h2 className="mb-4 text-xl font-bold">{c.howTitle}</h2>
            <ol className="space-y-4 border-s-2 border-border ps-6">
              {c.how.map((s, i) => (
                <li key={i} className="relative">
                  <span className="absolute -start-[1.72rem] top-1 h-3 w-3 rounded-full bg-primary" aria-hidden="true" />
                  <h3 className="font-bold">{s.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{s.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Sağ: rezervasyon akışı (yapışkan) */}
        <div>
          <div className="lg:sticky lg:top-20">
            <BookingFlow copy={c} locale={locale} />
          </div>
        </div>
      </div>
    </>
  );
}
