import { locales, type Locale } from './routing';

/**
 * TEDAVİ SLUG EŞLEMESİ (dil bazlı URL'ler).
 *
 * İç (canonical) anahtar Türkçe slug'dır — content/treatments.ts bu anahtarı kullanır.
 * Dış URL her dilde o dilin slug'ıdır:
 *   /tr/tedaviler/bobrek-tasi
 *   /en/treatments/kidney-stones
 *   /de/behandlungen/nierensteine
 *   /fr/traitements/calculs-renaux
 *
 * ARAPÇA ve RUSÇA için LATİN slug kullanılır: Arapça/Kiril URL'ler paylaşımda
 * yüzde-kodlanıp okunaksız hale gelir (prompt m.3.2).
 *
 * Eski Türkçe slug'lardan yenilerine 301 yönlendirmesi: src/middleware.ts.
 */
export const treatmentSlugMap = {
  'robotik-prostatektomi': {
    tr: 'robotik-prostatektomi',
    en: 'robotic-prostatectomy',
    de: 'roboter-prostatektomie',
    fr: 'prostatectomie-robotique',
    ru: 'roboticheskaya-prostatektomiya',
    ar: 'robotic-prostatectomy'
  },
  'bobrek-tasi': {
    tr: 'bobrek-tasi',
    en: 'kidney-stones',
    de: 'nierensteine',
    fr: 'calculs-renaux',
    ru: 'kamni-v-pochkah',
    ar: 'kidney-stones'
  },
  'bph-prostat-buyumesi': {
    tr: 'bph-prostat-buyumesi',
    en: 'bph-enlarged-prostate',
    de: 'gutartige-prostatavergroesserung',
    fr: 'hypertrophie-benigne-prostate',
    ru: 'dgpzh-adenoma-prostaty',
    ar: 'enlarged-prostate'
  },
  thulep: {
    tr: 'thulep',
    en: 'thulep',
    de: 'thulep',
    fr: 'thulep',
    ru: 'thulep',
    ar: 'thulep'
  },
  androloji: {
    tr: 'androloji',
    en: 'andrology',
    de: 'andrologie',
    fr: 'andrologie',
    ru: 'andrologiya',
    ar: 'andrology'
  },
  uroonkoloji: {
    tr: 'uroonkoloji',
    en: 'uro-oncology',
    de: 'uroonkologie',
    fr: 'uro-oncologie',
    ru: 'onkourologiya',
    ar: 'uro-oncology'
  },
  'kadin-urolojisi': {
    tr: 'kadin-urolojisi',
    en: 'female-urology',
    de: 'urologie-der-frau',
    fr: 'urologie-feminine',
    ru: 'zhenskaya-urologiya',
    ar: 'female-urology'
  },
  uretroplasti: {
    tr: 'uretroplasti',
    en: 'urethroplasty',
    de: 'urethroplastik',
    fr: 'urethroplastie',
    ru: 'uretroplastika',
    ar: 'urethroplasty'
  },
  piyeloplasti: {
    tr: 'piyeloplasti',
    en: 'pyeloplasty',
    de: 'pyeloplastik',
    fr: 'pyeloplastie',
    ru: 'pieloplastika',
    ar: 'pyeloplasty'
  },
  'fistul-onarimi': {
    tr: 'fistul-onarimi',
    en: 'fistula-repair',
    de: 'fistelverschluss',
    fr: 'reparation-fistule',
    ru: 'plastika-svishcha',
    ar: 'fistula-repair'
  },
  'ureter-rekonstruksiyonu': {
    tr: 'ureter-rekonstruksiyonu',
    en: 'ureteral-reconstruction',
    de: 'harnleiterrekonstruktion',
    fr: 'reconstruction-ureterale',
    ru: 'rekonstrukciya-mochetochnika',
    ar: 'ureteral-reconstruction'
  }
} as const satisfies Record<string, Record<Locale, string>>;

/** İç (Türkçe) slug'lar — içerik dosyasının anahtarları. */
export type CanonicalSlug = keyof typeof treatmentSlugMap;

/** İç slug → o dildeki dış slug. */
export function localizedSlug(canonical: string, locale: Locale): string {
  const row = treatmentSlugMap[canonical as CanonicalSlug];
  return row ? row[locale] : canonical;
}

/**
 * Dış slug → iç (Türkçe) slug. Bilinmeyen slug'da undefined döner (404).
 * Herhangi bir dilin slug'ını kabul eder; böylece dil değiştirince
 * ya da eski bağlantı paylaşılınca sayfa yine bulunur.
 */
export function canonicalSlug(external: string, locale: Locale): CanonicalSlug | undefined {
  const keys = Object.keys(treatmentSlugMap) as CanonicalSlug[];
  // Önce o dilin kendi slug'ı
  const exact = keys.find((k) => treatmentSlugMap[k][locale] === external);
  if (exact) return exact;
  // Sonra diğer dillerin slug'ları (301 ile doğruya yönlendirilir)
  return keys.find((k) => locales.some((l) => treatmentSlugMap[k][l] === external));
}

/** Bir dilde üretilecek tüm dış slug'lar (generateStaticParams için). */
export function slugsForLocale(locale: Locale): string[] {
  return (Object.keys(treatmentSlugMap) as CanonicalSlug[]).map((k) =>
    treatmentSlugMap[k][locale]
  );
}
