import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { publishableStories } from '@/content/experiences';
import type { Locale } from '@/i18n/routing';
import { features } from '@/config/features';
import { Icon } from './Icon';

// Güven şeridinde öne çıkarılacak yorumlar (kısa ve etkili olanlar).
const FEATURED_REVIEW_IDS = ['mehmet-d', 'ahmet-s'];

/**
 * SABİT GÜVEN ŞERİDİ — hero slider'ın hemen altında, KAYMAYAN statik bölüm.
 *
 * Vaka sayısı istatistikleri KALDIRILDI (doğrulanmamış rakamlar — caseStats.ts).
 * Geriye yalnızca öne çıkan hasta yorumları kaldı; bunlar da yönetmelik gereği
 * Türkçe sayfalarda gösterilmez. Türkçe'de bileşen hiç render edilmez.
 */
export async function TrustStrip({ locale }: { locale: Locale }) {
  if (!features(locale).testimonials) return null;

  const th = await getTranslations('Home');

  const featured = FEATURED_REVIEW_IDS.map((id) =>
    publishableStories.find((s) => s.id === id)
  ).filter((s): s is NonNullable<typeof s> => Boolean(s));

  if (featured.length === 0) return null;

  return (
    <section className="border-b border-border bg-surface">
      <div className="container-content py-8">
        <div className="mb-3 flex items-center justify-between gap-4">
          <span className="inline-flex items-center gap-2 text-sm font-medium">
            <span className="text-[#F4B400]" aria-hidden="true">
              ★★★★★
            </span>
            <span className="text-muted">{th('trustReviewsLabel')}</span>
          </span>
          <Link
            href="/deneyimler"
            className="inline-flex shrink-0 items-center gap-1 text-sm font-semibold text-primary hover:underline"
          >
            {th('seeAllReviews')}
            <Icon name="arrow" size={15} className="rtl:rotate-180" />
          </Link>
        </div>
        <ul className="grid gap-3 sm:grid-cols-2">
          {featured.map((s) => (
            <li key={s.id} className="rounded-xl border border-border bg-bg p-4">
              <p className="line-clamp-3 text-sm leading-relaxed text-fg/90">“{s.quote}”</p>
              <p className="mt-2 text-xs font-semibold text-muted">{s.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
