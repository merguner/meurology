import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { navItemsFor } from '@/config/nav';
import { siteConfig } from '@/config/site';
import { contactConfig } from '@/config/contact';
import { SocialLinks } from './SocialLinks';
import { CookiePrefsButton } from './CookieConsent';
import { Icon } from './Icon';
import { getLocale } from 'next-intl/server';
import { resolveConsultation } from '@/content/consultation';
import type { Locale } from '@/i18n/routing';

export async function SiteFooter() {
  const t = await getTranslations('Footer');
  const tn = await getTranslations('Nav');
  const tc = await getTranslations('Contact');
  const tcom = await getTranslations('Common');
  const locale = (await getLocale()) as Locale;
  const consult = resolveConsultation(locale);
  const navItems = navItemsFor(locale);
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-border bg-surface">
      <div className="container-content grid gap-10 py-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-[9px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            {/* Alt metin DİLE GÖRE: bu amblem bir bağlantının içinde değil,
                dolayısıyla kendi erişilebilir adına ihtiyaç duyar.
                (Başlıktaki amblem bunun tersidir — oradaki bağlantının zaten
                aria-label'ı var, bu yüzden orada alt="" doğrudur.) */}
            <img
              src="/brand/emblem.svg"
              alt={tcom('logoAlt')}
              width={36}
              height={36}
              className="h-9 w-9"
            />
            <span translate="no" className="whitespace-nowrap font-brand text-lg font-semibold tracking-tight text-brand">
              Urology Clinic
            </span>
          </div>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
            {t('tagline')}
          </p>
          {/* KİMLİK VE YETKİ BİLGİLERİ.
              Yetki belgesini T.C. Sağlık Bakanlığı verir (USHAŞ değil); belge sahibi
              hastanedir. Numara/VERBİS boşken ilgili satır render EDİLMEZ. */}
          <dl className="mt-4 space-y-1 text-xs text-muted">
            <div className="flex flex-wrap gap-x-1.5">
              <dt>{t('licenseLabel')}:</dt>
              <dd className="text-fg">
                {contactConfig.healthTourism.licenseHolder}
                {contactConfig.healthTourism.licenseNo
                  ? ` · ${contactConfig.healthTourism.licenseNo}`
                  : ''}
              </dd>
            </div>
            <div className="flex flex-wrap gap-x-1.5">
              <dt>{t('diplomaLabel')}:</dt>
              <dd className="font-mono text-fg">{contactConfig.diplomaRegistryNo}</dd>
            </div>
            {contactConfig.verbisNo && (
              <div className="flex flex-wrap gap-x-1.5">
                <dt>{t('verbisLabel')}:</dt>
                <dd className="font-mono text-fg">{contactConfig.verbisNo}</dd>
              </div>
            )}
          </dl>

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
            {/* Sözlük ve sigorta sayfası ana menüde değil (menü kalabalığı);
                footer'dan erişilir. İkisi de arama motorlarına açıktır. */}
            <li>
              <Link href="/sozluk" className="text-sm text-muted transition-colors hover:text-fg">
                {tn('glossary')}
              </Link>
            </li>
            <li>
              <Link href="/sgk-ve-sigorta" className="text-sm text-muted transition-colors hover:text-fg">
                {tn('insurance')}
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
            <li>
              <Link href="/yasal/cerez-politikasi" className="text-sm text-muted transition-colors hover:text-fg">
                {t('cookies')}
              </Link>
            </li>
            <li>
              <Link href="/yasal/kullanim-kosullari" className="text-sm text-muted transition-colors hover:text-fg">
                {t('terms')}
              </Link>
            </li>
            <li>
              <Link
                href="/yasal/tibbi-sorumluluk-reddi"
                className="text-sm text-muted transition-colors hover:text-fg"
              >
                {t('disclaimer')}
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-content flex flex-col gap-3 py-5 text-xs text-muted md:flex-row md:items-center md:justify-between">
          <p className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <span>© {year} {siteConfig.name}. {t('rights')}</span>
            {/* Analitik yapılandırılmamışsa bu düğme hiç render edilmez. */}
            <CookiePrefsButton label={t('cookiePrefs')} />
          </p>
          <p className="max-w-xl md:text-end">{t('medicalDisclaimer')}</p>
        </div>
      </div>
    </footer>
  );
}
