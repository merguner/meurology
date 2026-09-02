import { getTranslations } from 'next-intl/server';
import type { Locale } from '@/i18n/routing';
import { getGoogleReviews } from '@/lib/googleReviews';
import { siteConfig } from '@/config/site';
import { Icon } from './Icon';

function Stars({ rating }: { rating: number }) {
  const full = Math.max(0, Math.min(5, Math.round(rating)));
  return (
    <span className="text-[#F4B400]" aria-label={`${rating} / 5`}>
      {'★'.repeat(full)}
      {'☆'.repeat(5 - full)}
    </span>
  );
}

/**
 * Hasta Deneyimleri sayfasında Google yorumlarını otomatik gösterir.
 * Anahtar/Place ID yoksa yalnızca Google profiline yönlendiren butona düşer.
 */
export async function GoogleReviews({ locale }: { locale: Locale }) {
  const t = await getTranslations({ locale, namespace: 'Experiences' });
  const data = await getGoogleReviews(locale);

  if (!data || data.reviews.length === 0) {
    return (
      <a
        href={siteConfig.social.google}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-outline"
      >
        <Icon name="star" size={18} className="text-[#F4B400]" />
        {t('googleReviews')}
      </a>
    );
  }

  return (
    <section aria-label={t('googleReviews')}>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="flex items-center gap-2 text-xl font-bold md:text-2xl">
            <Icon name="star" size={22} className="text-[#F4B400]" />
            {t('googleReviews')}
          </h2>
          <p className="mt-1 flex flex-wrap items-center gap-2 text-sm text-muted">
            <span className="font-mono text-base font-bold text-fg">{data.rating.toFixed(1)}</span>
            <Stars rating={data.rating} />
            <span>· {t('basedOnReviews', { count: data.total })}</span>
          </p>
        </div>
        <a
          href={siteConfig.social.google}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline"
        >
          {t('seeAllGoogle')}
          <Icon name="arrow" size={16} className="rtl:rotate-180" />
        </a>
      </div>

      <ul className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {data.reviews.map((rv, i) => (
          <li key={i} className="card p-5">
            <div className="flex items-center justify-between gap-2">
              <span className="font-semibold">{rv.author}</span>
              <Stars rating={rv.rating} />
            </div>
            {rv.relativeTime && <p className="mt-0.5 text-xs text-muted">{rv.relativeTime}</p>}
            <p className="mt-3 text-sm leading-relaxed text-fg/90">“{rv.text}”</p>
          </li>
        ))}
      </ul>

      <p className="mt-3 text-xs text-muted">{t('googleAttribution')}</p>
    </section>
  );
}
