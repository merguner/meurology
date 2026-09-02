import type { StaticPathname } from '@/i18n/routing';

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
}

export const navItems: NavItem[] = [
  { href: '/', key: 'home' },
  { href: '/tedaviler', key: 'treatments' },
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
  { href: '/deneyimler', key: 'experiences' },
  { href: '/blog', key: 'blog' },
  { href: '/iletisim', key: 'contact' }
];
