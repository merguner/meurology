import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getTranslations, getMessages, setRequestLocale } from 'next-intl/server';
import { routing, rtlLocales, type Locale } from '@/i18n/routing';
import { fontVariablesFor } from '@/app/fonts';
import { siteConfig } from '@/config/site';
import { robotsMeta } from '@/config/seo';
import { ogImages, ogImagePath } from '@/config/ogImage';
import { ThemeScript } from '@/components/ThemeScript';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';
import { CookieConsent } from '@/components/CookieConsent';
import { AnalyticsEvents } from '@/components/AnalyticsEvents';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import { AssistantBubble } from '@/components/AssistantBubble';
import { JsonLd } from '@/components/JsonLd';
import { physicianId } from '@/lib/physicianJsonLd';
import { buildAlternates, getPathname } from '@/i18n/navigation';
import '@/app/globals.css';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Meta' });
  return {
    metadataBase: new URL(siteConfig.domain),
    title: {
      default: t('defaultTitle'),
      template: t('titleTemplate', { page: '%s' })
    },
    description: t('defaultDescription'),
    alternates: buildAlternates(locale, '/'),
    openGraph: {
      type: 'website',
      siteName: t('siteName'),
      title: t('defaultTitle'),
      description: t('defaultDescription'),
      locale,
      images: ogImages(locale, t('defaultTitle'))
    },
    twitter: {
      card: 'summary_large_image',
      title: t('defaultTitle'),
      description: t('defaultDescription'),
      images: [ogImagePath(locale)]
    },
    // Geçici dağıtım adresinde (*.vercel.app) noindex — bkz. config/seo.ts
    robots: robotsMeta()
  };
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!(routing.locales as readonly string[]).includes(locale)) {
    notFound();
  }
  setRequestLocale(locale);

  const dir = rtlLocales.includes(locale as Locale) ? 'rtl' : 'ltr';
  const t = await getTranslations('Common');
  // İstemci bileşenlerine mesajları açıkça geçir (client component çevirileri için).
  const messages = await getMessages();

  // Site geneli yapılandırılmış veri — yerel arama/haritada çıkmayı destekler.
  const orgJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalClinic',
    name: siteConfig.name,
    url: `${siteConfig.domain}/${locale}`,
    email: siteConfig.email,
    telephone: siteConfig.phoneIntl,
    image: `${siteConfig.domain}${ogImagePath(locale as Locale)}`,
    medicalSpecialty: 'Urology',
    // Kliniği hekime bağlar (aynı @id cerrah sayfasındaki tam düğümde).
    employee: { '@id': physicianId(locale as Locale) },
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.streetAddress,
      addressLocality: siteConfig.address.addressLocality,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.addressCountry
    },
    location: {
      '@type': 'Place',
      name: siteConfig.address.center,
      hasMap: siteConfig.address.mapsLink
    },
    hasMap: siteConfig.address.mapsLink,
    /**
     * Boş profiller filtrelenir: doğrulanmamış bir URL yayımlamaktansa
     * alanı hiç basmamak doğrudur (bkz. siteConfig.profiles).
     */
    sameAs: [
      siteConfig.social.instagram,
      siteConfig.social.youtube,
      siteConfig.social.linkedin,
      siteConfig.social.google,
      ...Object.values(siteConfig.profiles)
    ].filter((u) => u.length > 0)
  };

  return (
    <html lang={locale} dir={dir} className={fontVariablesFor(locale)} suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body className="min-h-screen bg-bg font-sans antialiased">
        <JsonLd data={orgJsonLd} />
        <NextIntlClientProvider locale={locale} messages={messages}>
          <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-fg">
            {t('skipToContent')}
          </a>
          <SiteHeader />
          <main id="main">{children}</main>
          <SiteFooter />
          <FloatingWhatsApp />
          {/*
            Yapay zekâ sohbet balonu — WhatsApp düğmesinin ÜSTÜNDE durur
            (AsistanSohbet → altBosluk). ANTHROPIC_API_KEY tanımlı
            değilse hiç render edilmez.
          */}
          <AssistantBubble locale={locale as Locale} />
          <CookieConsent />
          {/* WhatsApp / telefon / e-posta tiklamalarini tek noktadan olcer. */}
          <AnalyticsEvents />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
