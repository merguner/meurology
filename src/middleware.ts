import createMiddleware from 'next-intl/middleware';
import { NextResponse, type NextRequest } from 'next/server';
import { routing } from './i18n/routing';

const intlMiddleware = createMiddleware(routing);

/**
 * Eski Türkçe slug → yeni lokalize slug eşlemesi (yalnızca TR dışı diller).
 * Anahtar: Türkçe iç yol (locale'siz). Değer: locale'e göre yeni yol.
 * AR/RU İngilizce slug kullanır (routing.ts ile aynı).
 */
const LOCALIZED: Record<string, Record<string, string>> = {
  tedaviler: { en: 'treatments', de: 'behandlungen', ru: 'treatments', ar: 'treatments' },
  'rekonstruktif-uroloji': {
    en: 'reconstructive-urology',
    de: 'rekonstruktive-urologie',
    ru: 'reconstructive-urology',
    ar: 'reconstructive-urology'
  },
  cerrah: { en: 'surgeon', de: 'chirurg', ru: 'surgeon', ar: 'surgeon' },
  hastane: { en: 'hospital', de: 'krankenhaus', ru: 'hospital', ar: 'hospital' },
  'uluslararasi-hasta': {
    en: 'international-patients',
    de: 'internationale-patienten',
    ru: 'international-patients',
    ar: 'international-patients'
  },
  deneyimler: { en: 'experiences', de: 'erfahrungen', ru: 'experiences', ar: 'experiences' },
  'ozel-danismanlik': {
    en: 'online-consultation',
    de: 'online-beratung',
    ru: 'online-consultation',
    ar: 'online-consultation'
  },
  iletisim: { en: 'contact', de: 'kontakt', ru: 'contact', ar: 'contact' },
  'yasal/kvkk': { en: 'legal/privacy', de: 'rechtliches/datenschutz', ru: 'legal/privacy', ar: 'legal/privacy' },
  'yasal/acik-riza': {
    en: 'legal/consent',
    de: 'rechtliches/einwilligung',
    ru: 'legal/consent',
    ar: 'legal/consent'
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

  // Dinamik: /tedaviler/<slug> → /{loc}/<treatmentsLoc>/<slug>
  if (rest.startsWith('tedaviler/')) {
    const slug = rest.slice('tedaviler/'.length);
    const base = LOCALIZED.tedaviler[locale];
    if (base && slug) return `/${locale}/${base}/${slug}`;
  }
  return null;
}

export default function middleware(request: NextRequest) {
  const legacy = resolveLegacyRedirect(request.nextUrl.pathname);
  if (legacy) {
    const url = request.nextUrl.clone();
    url.pathname = legacy;
    return NextResponse.redirect(url, 301); // kalıcı — SEO için
  }
  return intlMiddleware(request);
}

export const config = {
  // Tüm yolları eşle; /api, statik dosyalar ve dahili Next.js yollarını hariç tut.
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
