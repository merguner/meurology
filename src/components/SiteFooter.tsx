import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { navItems } from '@/config/nav';
import { siteConfig } from '@/config/site';
import { SocialLinks } from './SocialLinks';
import { Icon } from './Icon';
import { getLocale } from 'next-intl/server';
import { resolveConsultation } from '@/content/consultation';
import type { Locale } from '@/i18n/routing';

export async function SiteFooter() {
  const t = await getTranslations('Footer');
  const tn = await getTranslations('Nav');
  const tc = await getTranslations('Contact');
  const consult = resolveConsultation((await getLocale()) as Locale);
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-border bg-surface">
      <div className="container-content grid gap-10 py-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/brand/emblem.svg" alt="" width={32} height={32} className="h-8 w-8" />
            <span translate="no" className="whitespace-nowrap font-brand text-lg font-semibold tracking-tight text-primary">
              Urology Clinic
            </span>
          </div>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
            {t('tagline')}
          </p>
          {!siteConfig.ushasLicenseNo.includes('XXXX') && (
            <p className="mt-4 font-mono text-xs text-muted">
              {t('ushasLabel')}:{' '}
              <span className="text-fg">{siteConfig.ushasLicenseNo}</span>
            </p>
          )}

          {/* İletişim: adres (Google Maps'e tıklanabilir) + telefon + e-posta */}
          <ul className="mt-5 space-y-2.5 text-sm">
            <li className="flex items-start gap-2.5">
              <Icon name="pin" size={16} className="mt-0.5 shrink-0 text-primary" />
              <a
                href={siteConfig.address.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted transition-colors hover:text-primary"
              >
                <span className="text-fg">{tc('centerLabel')}: {siteConfig.address.center}</span>
                <br />
                {siteConfig.address.full}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Icon name="phone" size={16} className="shrink-0 text-primary" />
              <a href={`tel:${siteConfig.phoneIntl}`} className="text-muted transition-colors hover:text-primary">
                {siteConfig.phone}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Icon name="mail" size={16} className="shrink-0 text-primary" />
              <a href={`mailto:${siteConfig.email}`} className="text-muted transition-colors hover:text-primary">
                {siteConfig.email}
              </a>
            </li>
          </ul>

          {/* Sosyal medya + Google inceleme */}
          <SocialLinks className="mt-5" />
          <a
            href={siteConfig.social.google}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline mt-4 !py-2 text-sm"
          >
            <Icon name="star" size={16} className="text-[#F4B400]" />
            {t('googleReview')}
          </a>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-fg">{t('quickLinks')}</h3>
          <ul className="mt-3 space-y-2">
            <li>
              <Link
                href="/ozel-danismanlik"
                className="text-sm font-semibold text-[rgb(var(--c-accent-ink))] transition-opacity hover:opacity-80"
              >
                {consult.navLabel}
              </Link>
            </li>
            {navItems.slice(1).map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-muted transition-colors hover:text-fg"
                >
                  {tn(item.key)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-fg">{t('legal')}</h3>
          <ul className="mt-3 space-y-2">
            <li>
              <Link href="/yasal/kvkk" className="text-sm text-muted transition-colors hover:text-fg">
                {t('kvkk')}
              </Link>
            </li>
            <li>
              <Link href="/yasal/acik-riza" className="text-sm text-muted transition-colors hover:text-fg">
                {t('consent')}
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-content flex flex-col gap-3 py-5 text-xs text-muted md:flex-row md:items-center md:justify-between">
          <p>© {year} {siteConfig.name}. {t('rights')}</p>
          <p className="max-w-xl md:text-end">{t('medicalDisclaimer')}</p>
        </div>
      </div>
    </footer>
  );
}
