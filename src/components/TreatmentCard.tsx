import { useLocale, useTranslations } from 'next-intl';
import { Link, treatmentHref } from '@/i18n/navigation';
import type { Locale } from '@/i18n/routing';
import { Icon, type IconName } from './Icon';

export function TreatmentCard({
  slug,
  icon,
  title,
  summary
}: {
  slug: string;
  icon: string;
  title: string;
  summary: string;
}) {
  const t = useTranslations('Common');
  const locale = useLocale() as Locale;
  return (
    <Link
      href={treatmentHref(slug, locale)}
      className="card group flex flex-col p-6 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg"
    >
      <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-soft text-primary">
        <Icon name={icon as IconName} size={24} />
      </span>
      <h3 className="text-lg font-bold leading-snug">{title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{summary}</p>
      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
        {t('learnMore')}
        <Icon name="arrow" size={16} className="transition-transform group-hover:translate-x-0.5 rtl:rotate-180 rtl:group-hover:-translate-x-0.5" />
      </span>
    </Link>
  );
}
