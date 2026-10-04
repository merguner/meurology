import { getTranslations } from 'next-intl/server';
import type { Locale } from '@/i18n/routing';
import { getInsuranceInfo } from '@/content/insurance';
import { Link } from '@/i18n/navigation';
import { Icon } from './Icon';

/**
 * SGK / özel sigorta ÖZET bloğu (tedavi ve iletişim sayfalarında).
 * İçerik src/content/insurance.ts'ten gelir; boşsa hiçbir şey render etmez.
 * `variant`: 'card' (iletişim yan paneli) | 'inline' (tedavi sayfası içi).
 *
 * Ayrıntılı anlatım ayrı bir sayfadadır (/sgk-ve-sigorta, content/insuranceDoc.ts);
 * bu blok oraya bağlanır. İki metnin birbiriyle çelişmemesi için ayrıntı
 * yalnızca o sayfada tutulur, burada çoğaltılmaz.
 */
export async function InsuranceInfo({
  locale,
  variant = 'inline'
}: {
  locale: Locale;
  variant?: 'card' | 'inline';
}) {
  const info = getInsuranceInfo(locale);
  if (!info) return null;
  const t = await getTranslations('Common');

  return (
    <div
      className={
        variant === 'card'
          ? 'card p-6'
          : 'rounded-xl border border-border bg-surface-2 p-5'
      }
    >
      <h3 className="flex items-center gap-2 font-semibold">
        <Icon name="shield" size={18} className="text-primary" />
        {info.title}
      </h3>
      <div className="mt-2 space-y-1.5">
        {info.body.map((p, i) => (
          <p key={i} className="text-sm leading-relaxed text-muted">
            {p}
          </p>
        ))}
      </div>
      <Link
        href="/sgk-ve-sigorta"
        className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
      >
        {t('readMore')}
        <Icon name="arrow" size={15} className="rtl:rotate-180" />
      </Link>
    </div>
  );
}
