import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';

export default async function LocaleNotFound() {
  const t = await getTranslations('NotFound');
  return (
    <div className="container-content flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <p className="label-mono mb-3">404</p>
      <h1 className="text-3xl font-bold md:text-4xl">{t('title')}</h1>
      <p className="mt-3 max-w-md text-muted">{t('body')}</p>
      <Link href="/" className="btn-primary mt-8">
        {t('home')}
      </Link>
    </div>
  );
}
