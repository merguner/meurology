import type { Locale, StaticPathname } from '@/i18n/routing';
import { features } from './features';

/** Lokalize route anahtarları (static üst-seviye yollar). */
type Pathname = StaticPathname;

/** Ana gezinme yolları ve i18n etiket anahtarları (Nav namespace). */
export interface NavChild {
  /** Tedavi slug'ı — /tedaviler/[slug] altına lokalize link üretilir. */
  slug: string;
  key: string;
}

export interface NavItem {
  href: Pathname;
  key: string;
  /** Varsa üst kategori olarak açılır menü (dropdown) gösterilir. */
  children?: NavChild[];
  /**
   * Yalnızca hasta yorumu gösterilebilen dillerde görünür.
   * (Yönetmelik: Türkçe menüde "Hasta Deneyimleri" yer almaz.)
   */
  requiresTestimonials?: boolean;
}

export const navItems: NavItem[] = [
  { href: '/', key: 'home' },
  {
    href: '/tedaviler',
    key: 'treatments',
    /**
     * Kategori (hub) sayfalari menuden dogrudan erisilebilir olsun.
     * 'cocuk-urolojisi' Gorev 7'de eklendi.
     */
    children: [
      { slug: 'androloji', key: 'androloji' },
      { slug: 'uroonkoloji', key: 'uroonkoloji' },
      { slug: 'kadin-urolojisi', key: 'kadinUrolojisi' },
      { slug: 'cocuk-urolojisi', key: 'cocukUrolojisi' }
    ]
  },
  {
    href: '/rekonstruktif-uroloji',
    key: 'reconstructive',
    children: [
      { slug: 'uretroplasti', key: 'uretroplasti' },
      { slug: 'piyeloplasti', key: 'piyeloplasti' },
      { slug: 'fistul-onarimi', key: 'fistul' },
      { slug: 'ureter-rekonstruksiyonu', key: 'ureterRekon' }
    ]
  },
  { href: '/cerrah', key: 'surgeon' },
  { href: '/hastane', key: 'hospital' },
  { href: '/uluslararasi-hasta', key: 'process' },
  { href: '/deneyimler', key: 'experiences', requiresTestimonials: true },
  { href: '/blog', key: 'blog' },
  { href: '/iletisim', key: 'contact' }
];

/** Belirli bir dilde gösterilecek menü öğeleri (yasal filtre uygulanmış). */
export function navItemsFor(locale: Locale | string): NavItem[] {
  const f = features(locale);
  return navItems.filter((i) => !i.requiresTestimonials || f.testimonials);
}
