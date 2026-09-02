import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getTranslations, getMessages, setRequestLocale } from 'next-intl/server';
import { routing, rtlLocales, type Locale } from '@/i18n/routing';
import { fontVariables } from '@/app/fonts';
import { siteConfig } from '@/config/site';
import { ThemeScript } from '@/components/ThemeScript';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import { JsonLd } from '@/components/JsonLd';
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
      images: [{ url: '/brand/og.svg', width: 1200, height: 630, alt: t('siteName') }]
    },
    robots: { index: true, follow: true }
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
    image: `${siteConfig.domain}/brand/og.svg`,
    medicalSpecialty: 'Urology',
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
    sameAs: [
      siteConfig.social.instagram,
      siteConfig.social.youtube,
      siteConfig.social.linkedin,
      siteConfig.social.google
    ]
  };

  return (
    <html lang={locale} dir={dir} className={fontVariables} suppressHydrationWarning>
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
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
