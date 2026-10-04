import type { Metadata } from 'next';
import { buildAlternates } from '@/i18n/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Locale } from '@/i18n/routing';
import { siteConfig, whatsappLink } from '@/config/site';
import { PageHero } from '@/components/PageHero';
import { PreAssessmentForm } from '@/components/PreAssessmentForm';
import { WhatsAppCta } from '@/components/WhatsAppCta';
import { Icon } from '@/components/Icon';
import { InsuranceInfo } from '@/components/InsuranceInfo';
import { MapEmbed } from '@/components/MapEmbed';
// Başlıklar SUNUCUDA çözülür; istemciye 2 MB'lık içerik dosyası gitmesin.
import { publishedTreatments } from '@/content/treatments';
import { resolveContent } from '@/content/types';

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Contact' });
  return {
    title: t('title'),
    description: t('subtitle'),
    alternates: buildAlternates(locale, '/iletisim')
  };
}

export default async function ContactPage({
  params
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const treatmentOptions = publishedTreatments.map((tr) => ({
    slug: tr.slug,
    title: resolveContent(tr, locale).title
  }));
  const t = await getTranslations('Contact');
  const tf = await getTranslations('Form');
  const tc = await getTranslations('Common');

  return (
    <>
      <PageHero eyebrow={t('title')} title={t('title')} description={t('subtitle')} />

      <div className="container-content grid gap-10 py-12 lg:grid-cols-5">
        {/* Form */}
        <div className="lg:col-span-3">
          <div className="card p-6 md:p-8">
            <h2 className="font-serif text-xl font-bold">{tf('title')}</h2>
            <p className="mb-6 mt-1 text-sm text-muted">{tf('subtitle')}</p>
            <PreAssessmentForm treatmentOptions={treatmentOptions} />
          </div>
        </div>

        {/* Kanallar */}
        <aside className="space-y-5 lg:col-span-2">
          <div className="card p-6">
            <h3 className="flex items-center gap-2 font-semibold">
              <Icon name="whatsapp" size={20} className="text-[#25D366]" />
              {t('whatsappTitle')}
            </h3>
            <p className="mt-1.5 text-sm text-muted">{t('whatsappBody')}</p>
            <div className="mt-4">
              <WhatsAppCta className="w-full" />
            </div>
          </div>

          <div className="card p-6">
            <h3 className="flex items-center gap-2 font-semibold">
              <Icon name="video" size={20} className="text-primary" />
              {t('consultTitle')}
            </h3>
            <p className="mt-1.5 text-sm text-muted">{t('consultBody')}</p>
            <a
              href={whatsappLink(tc('bookConsult'))}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline mt-4 w-full"
            >
              <Icon name="video" size={18} />
              {tc('bookConsult')}
            </a>
          </div>

          <div className="card p-6">
            <h3 className="mb-3 font-semibold">{t('infoTitle')}</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <Icon name="phone" size={18} className="shrink-0 text-primary" />
                <a href={`tel:${siteConfig.phoneIntl}`} className="hover:text-primary">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Icon name="mail" size={18} className="shrink-0 text-primary" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-primary">
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="pin" size={18} className="mt-0.5 shrink-0 text-primary" />
                <a
                  href={siteConfig.address.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group text-muted hover:text-primary"
                >
                  <span className="block font-medium text-fg">
                    {t('centerLabel')}: {siteConfig.address.center}
                  </span>
                  <span className="mt-0.5 block">{siteConfig.address.full}</span>
                  <span className="mt-1 inline-flex items-center gap-1 text-xs font-medium text-primary">
                    {t('viewOnMaps')}
                    <Icon name="arrow" size={13} className="rtl:rotate-180" />
                  </span>
                </a>
              </li>
            </ul>

            {/* Google Haritası — tıklanana kadar yüklenmez (çerez politikası). */}
            <MapEmbed
              query={siteConfig.address.mapsQuery}
              locale={locale}
              title={t('mapTitle')}
              loadLabel={t('mapLoad')}
              notice={t('mapNotice')}
            />
          </div>

          {/* SGK / özel sigorta bilgi bloğu (içerik varsa görünür) */}
          <InsuranceInfo locale={locale} variant="card" />
        </aside>
      </div>
    </>
  );
}
