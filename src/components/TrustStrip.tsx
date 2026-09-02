import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { TOTAL_PROCEDURES, YEARS_EXPERIENCE } from '@/content/stats';
import { patientStories } from '@/content/experiences';
import type { Locale } from '@/i18n/routing';
import { Icon } from './Icon';

// Güven şeridinde öne çıkarılacak yorumlar (kısa ve etkili olanlar).
const FEATURED_REVIEW_IDS = ['mehmet-d', 'ahmet-s'];

/**
 * SABİT GÜVEN ŞERİDİ — hero slider'ın hemen altında, KAYMAYAN statik bölüm.
 * İstatistik (gerçek sayılar) + öne çıkan Google yorumları + tüm yorumlara link.
 */
export async function TrustStrip({ locale }: { locale: Locale }) {
  const ts = await getTranslations('Stats');
  const th = await getTranslations('Home');
  // Geçersiz/boş locale'de Intl fırlatmasın diye savunmacı (en'e düş).
  let fmt: Intl.NumberFormat;
  try {
    fmt = new Intl.NumberFormat(locale);
  } catch {
    fmt = new Intl.NumberFormat('en');
  }

  const featured = FEATURED_REVIEW_IDS.map((id) =>
    patientStories.find((s) => s.id === id)
  ).filter((s): s is NonNullable<typeof s> => Boolean(s));

  return (
    <section className="border-b border-border bg-surface">
      <div className="container-content grid gap-8 py-8 lg:grid-cols-[auto,1fr] lg:items-center lg:gap-12">
        {/* İstatistikler */}
        {/* dl > div > (dt, dd) — geçerli tanım listesi yapısı (axe definition-list).
            flex-col-reverse ile sayı görsel olarak üstte, etiket altta durur. */}
        <dl className="flex gap-8 sm:gap-10">
          <div className="flex flex-col-reverse">
            <dt className="mt-1 text-xs font-medium text-muted">{ts('totalLabel')}</dt>
            <dd className="font-mono text-3xl font-bold text-primary md:text-4xl">
              {fmt.format(TOTAL_PROCEDURES)}+
            </dd>
          </div>
          <div className="flex flex-col-reverse">
            <dt className="mt-1 text-xs font-medium text-muted">{ts('yearsLabel')}</dt>
            <dd className="font-mono text-3xl font-bold text-primary md:text-4xl">
              {fmt.format(YEARS_EXPERIENCE)}
            </dd>
          </div>
        </dl>

        {/* Öne çıkan yorumlar + tüm yorumlara link */}
        <div className="min-w-0">
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
      </div>
    </section>
  );
}
