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

/**
 * MASAÜSTÜ MENÜSÜNÜN AÇILDIĞI GENİŞLİK — DİLE GÖRE.
 *
 * Menü etiketleri dilden dile ciddi biçimde uzuyor. 8 Eki 2026'da ölçüldü
 * (1280 px, /{dil}/iletişim): menü genişliği tr 807 · ar 732 · en 945 ·
 * ru 949 · de 963 · fr 977 px. Menü dışı öğeler (logo + dil/tema/menü
 * düğmeleri) ~328 px yer kaplıyor.
 *
 * Tek bir kırılma noktası kullanmak iki kötü sonuçtan birini veriyordu:
 * 1200 px'te tr sığıyor ama en/de/fr/ru TAŞIYOR (sayfa yatay kayıyordu),
 * hepsini 1320'ye çekmek ise tr/ar kullanıcısını gereksiz yere hamburger
 * menüye düşürüyordu. Bu yüzden eşik dile göre belirlenir.
 *
 * SINIF METİNLERİ BİLEREK BURADA DEĞİL, SiteHeader/MobileNav içinde.
 * Tailwind'in content listesine src/config/** eklemek CSS'i iki ayrı
 * render engelleyen dosyaya böldü ve mobil LCP'yi 2,9 → 3,1 sn yavaşlattı
 * (8 Eki 2026 ölçümü). Bu fonksiyon yalnızca KARARI döndürür.
 *
 * YENİ MENÜ ÖĞESİ VEYA UZUN ETİKET EKLERKEN: 1280 px'te fr ve de ile
 * kontrol edin; `document.documentElement.scrollWidth - clientWidth`
 * sıfır olmalı.
 */
export function navNeedsWideBreakpoint(locale: Locale | string): boolean {
  // tr ve ar kısa etiketlidir ve 1200 px'te sığar; diğerleri 1320 ister.
  return !(locale === 'tr' || locale === 'ar');
}
