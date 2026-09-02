import type { Locale } from '@/i18n/routing';
import { getInsuranceInfo } from '@/content/insurance';
import { Icon } from './Icon';

/**
 * SGK / özel sigorta bilgi bloğu (yerli hastalar için).
 * İçerik src/content/insurance.ts'ten gelir; boşsa hiçbir şey render etmez.
 * `variant`: 'card' (iletişim yan paneli) | 'inline' (tedavi sayfası içi).
 */
export function InsuranceInfo({
  locale,
  variant = 'inline'
}: {
  locale: Locale;
  variant?: 'card' | 'inline';
}) {
  const info = getInsuranceInfo(locale);
  if (!info) return null;

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
    </div>
  );
}
