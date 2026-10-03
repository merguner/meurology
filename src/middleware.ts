import createMiddleware from 'next-intl/middleware';
import { NextResponse, type NextRequest } from 'next/server';
import { routing, locales, type Locale } from './i18n/routing';
import { canonicalSlug, localizedSlug } from './i18n/slugs';
import { getPathname } from './i18n/navigation';

const intlMiddleware = createMiddleware(routing);

/**
 * Eski Türkçe slug → yeni lokalize slug eşlemesi (yalnızca TR dışı diller).
 * Anahtar: Türkçe iç yol (locale'siz). Değer: locale'e göre yeni yol.
 * AR/RU İngilizce slug kullanır (routing.ts ile aynı).
 */
const LOCALIZED: Record<string, Record<string, string>> = {
  tedaviler: { en: 'treatments', de: 'behandlungen', ru: 'treatments', ar: 'treatments', fr: 'traitements' },
  'rekonstruktif-uroloji': {
    en: 'reconstructive-urology',
    de: 'rekonstruktive-urologie',
    ru: 'reconstructive-urology',
    ar: 'reconstructive-urology', fr: 'urologie-reconstructrice'
  },
  cerrah: { en: 'surgeon', de: 'chirurg', ru: 'surgeon', ar: 'surgeon', fr: 'chirurgien' },
  hastane: { en: 'hospital', de: 'krankenhaus', ru: 'hospital', ar: 'hospital', fr: 'hopital' },
  'uluslararasi-hasta': {
    en: 'international-patients',
    de: 'internationale-patienten',
    ru: 'international-patients',
    ar: 'international-patients', fr: 'patients-internationaux'
  },
  deneyimler: { en: 'experiences', de: 'erfahrungen', ru: 'experiences', ar: 'experiences', fr: 'temoignages' },
  'ozel-danismanlik': {
    en: 'online-consultation',
    de: 'online-beratung',
    ru: 'online-consultation',
    ar: 'online-consultation', fr: 'consultation-en-ligne'
  },
  iletisim: { en: 'contact', de: 'kontakt', ru: 'contact', ar: 'contact', fr: 'contact' },
  'yasal/kvkk': { en: 'legal/privacy', de: 'rechtliches/datenschutz', ru: 'legal/privacy', ar: 'legal/privacy', fr: 'mentions-legales/confidentialite' },
  'yasal/acik-riza': {
    en: 'legal/consent',
    de: 'rechtliches/einwilligung',
    ru: 'legal/consent',
    ar: 'legal/consent', fr: 'mentions-legales/consentement'
  }
};

/** /{locale}/{eskiTürkçeYol} isteğini yeni lokalize yola çevirir (yoksa null). */
function resolveLegacyRedirect(pathname: string): string | null {
  const segments = pathname.split('/').filter(Boolean);
  const locale = segments[0];
  if (!locale || !(locale in LOCALIZED.tedaviler)) return null; // yalnızca en/de/ru/ar
  const rest = segments.slice(1).join('/');
  if (!rest) return null;

  // Birebir eşleşme (örn. iletisim, yasal/kvkk)
  const exact = LOCALIZED[rest]?.[locale];
  if (exact) return `/${locale}/${exact}`;

  // Dinamik: /tedaviler/<slug> → /{loc}/<treatmentsLoc>/<slugLoc>
  if (rest.startsWith('tedaviler/')) {
    const slug = rest.slice('tedaviler/'.length);
    const base = LOCALIZED.tedaviler[locale];
    if (base && slug) {
      const canonical = canonicalSlug(slug, locale as Locale);
      const target = canonical ? localizedSlug(canonical, locale as Locale) : slug;
      return `/${locale}/${base}/${target}`;
    }
  }
  return null;
}

/**
 * TEDAVİ SLUG'I YANLIŞ DİLDE: /{loc}/{treatmentsLoc}/{başkaDilinSlug'ı}
 * → o dilin kendi slug'ına 301. Örn:
 *   /en/treatments/robotik-prostatektomi → /en/treatments/robotic-prostatectomy
 * Böylece her tedavi her dilde TEK kanonik URL'ye sahip olur.
 */
function resolveTreatmentSlugRedirect(pathname: string): string | null {
  const segments = pathname.split('/').filter(Boolean);
  if (segments.length !== 3) return null;
  const [locale, section, slug] = segments;
  if (!locales.includes(locale as Locale)) return null;

  // İkinci segment o dilin "tedaviler" karşılığı mı?
  const expectedSection = getPathname({
    locale: locale as Locale,
    href: '/tedaviler'
  }).split('/').filter(Boolean)[1];
  if (section !== expectedSection) return null;

  const canonical = canonicalSlug(slug, locale as Locale);
  if (!canonical) return null;
  const correct = localizedSlug(canonical, locale as Locale);
  if (correct === slug) return null; // zaten doğru
  return `/${locale}/${section}/${correct}`;
}

/**
 * YÖNETMELİK: Yurt içine yönelik (Türkçe) tanıtımda hasta yorumu/görseli yasak.
 * /tr/deneyimler yayından kaldırıldı → 301 ile /tr'ye yönlendirilir.
 * (Sayfa bileşeni de aynı kontrolü yapar; burada SEO için kalıcı yönlendirme.)
 */
function resolveComplianceRedirect(pathname: string): string | null {
  const segments = pathname.split('/').filter(Boolean);
  if (segments[0] !== 'tr') return null;
  if (segments[1] === 'deneyimler') return '/tr';
  return null;
}

export default function middleware(request: NextRequest) {
  const compliance = resolveComplianceRedirect(request.nextUrl.pathname);
  if (compliance) {
    const url = request.nextUrl.clone();
    url.pathname = compliance;
    return NextResponse.redirect(url, 301);
  }

  const legacy = resolveLegacyRedirect(request.nextUrl.pathname);
  if (legacy) {
    const url = request.nextUrl.clone();
    url.pathname = legacy;
    return NextResponse.redirect(url, 301); // kalıcı — SEO için
  }

  const slugFix = resolveTreatmentSlugRedirect(request.nextUrl.pathname);
  if (slugFix) {
    const url = request.nextUrl.clone();
    url.pathname = slugFix;
    return NextResponse.redirect(url, 301);
  }

  return intlMiddleware(request);
}

export const config = {
  // Tüm yolları eşle; /api, statik dosyalar ve dahili Next.js yollarını hariç tut.
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
