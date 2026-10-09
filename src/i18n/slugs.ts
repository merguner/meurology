import { locales, type Locale } from './routing';

/**
 * TEDAVİ SLUG EŞLEMESİ (dil bazlı URL'ler).
 *
 * İç (canonical) anahtar Türkçe slug'dır — content/treatments.ts bu anahtarı kullanır.
 * Dış URL her dilde o dilin slug'ıdır:
 *   /tr/tedaviler/bobrek-tasi
 *   /en/treatments/kidney-stones
 *
 * ARAPÇA için LATİN slug kullanılır: Arapça URL'ler paylaşımda
 * yüzde-kodlanıp okunaksız hale gelir (prompt m.3.2).
 *
 * Eski Türkçe slug'lardan yenilerine 301 yönlendirmesi: src/middleware.ts.
 */
export const treatmentSlugMap = {
  'robotik-prostatektomi': {
    tr: 'robotik-prostatektomi',
    en: 'robotic-prostatectomy',
    ar: 'robotic-prostatectomy'
  },
  eswl: {
    tr: 'eswl-ses-dalgasiyla-tas-kirma',
    en: 'eswl-shock-wave-lithotripsy',
    ar: 'eswl-shock-wave-lithotripsy'
  },
  'testis-kanseri': {
    tr: 'testis-kanseri',
    en: 'testicular-cancer',
    ar: 'testicular-cancer'
  },
  'asiri-aktif-mesane': {
    tr: 'asiri-aktif-mesane',
    en: 'overactive-bladder',
    ar: 'overactive-bladder'
  },
  'stres-inkontinans': {
    tr: 'stres-inkontinans-idrar-kacirma',
    en: 'stress-urinary-incontinence',
    ar: 'stress-urinary-incontinence'
  },
  'peyronie-hastaligi': {
    tr: 'peyronie-hastaligi',
    en: 'peyronies-disease',
    ar: 'peyronies-disease'
  },
  'erkek-infertilitesi': {
    tr: 'erkek-infertilitesi-mikro-tese',
    en: 'male-infertility-micro-tese',
    ar: 'male-infertility-micro-tese'
  },
  'mesane-kanseri': {
    tr: 'mesane-kanseri',
    en: 'bladder-cancer',
    ar: 'bladder-cancer'
  },
  'bobrek-kanseri': {
    tr: 'bobrek-kanseri',
    en: 'kidney-cancer',
    ar: 'kidney-cancer'
  },
  'erektil-disfonksiyon': {
    tr: 'erektil-disfonksiyon',
    en: 'erectile-dysfunction',
    ar: 'erectile-dysfunction'
  },
  varikosel: {
    tr: 'varikosel',
    en: 'varicocele',
    ar: 'varicocele'
  },
  rirs: {
    tr: 'rirs-fleksibl-ureteroskopi',
    en: 'rirs-flexible-ureteroscopy',
    ar: 'rirs-flexible-ureteroscopy'
  },
  pcnl: {
    tr: 'pcnl-perkutan-nefrolitotomi',
    en: 'pcnl-percutaneous-nephrolithotomy',
    ar: 'pcnl-percutaneous-nephrolithotomy'
  },
  turp: {
    tr: 'turp-prostat-rezeksiyonu',
    en: 'turp-prostate-resection',
    ar: 'turp-prostate-resection'
  },
  rezum: {
    tr: 'rezum-buhar-tedavisi',
    en: 'rezum-water-vapour-therapy',
    ar: 'rezum-water-vapour-therapy'
  },
  'psa-yuksekligi-ve-biyopsi': {
    tr: 'psa-yuksekligi-ve-biyopsi',
    en: 'raised-psa-and-biopsy',
    ar: 'raised-psa-and-biopsy'
  },
  'prostat-kanseri': {
    tr: 'prostat-kanseri',
    en: 'prostate-cancer',
    ar: 'prostate-cancer'
  },
  'sinir-koruyucu-cerrahi': {
    tr: 'sinir-koruyucu-cerrahi',
    en: 'nerve-sparing-surgery',
    ar: 'nerve-sparing-surgery'
  },
  'bobrek-tasi': {
    tr: 'bobrek-tasi',
    en: 'kidney-stones',
    ar: 'kidney-stones'
  },
  'bph-prostat-buyumesi': {
    tr: 'bph-prostat-buyumesi',
    en: 'bph-enlarged-prostate',
    ar: 'enlarged-prostate'
  },
  holep: {
    tr: 'holep',
    en: 'holep',
    ar: 'holep'
  },
  thulep: {
    tr: 'thulep',
    en: 'thulep',
    ar: 'thulep'
  },
  'penis-buyutme': {
    tr: 'penis-buyutme',
    en: 'penile-enlargement',
    ar: 'penile-enlargement'
  },
  'penil-protez': {
    tr: 'penil-protez',
    en: 'penile-prosthesis',
    ar: 'penile-implant'
  },
  androloji: {
    tr: 'androloji',
    en: 'andrology',
    ar: 'andrology'
  },
  uroonkoloji: {
    tr: 'uroonkoloji',
    en: 'uro-oncology',
    ar: 'uro-oncology'
  },
  'kadin-urolojisi': {
    tr: 'kadin-urolojisi',
    en: 'female-urology',
    ar: 'female-urology'
  },
  uretroplasti: {
    tr: 'uretroplasti',
    en: 'urethroplasty',
    ar: 'urethroplasty'
  },
  piyeloplasti: {
    tr: 'piyeloplasti',
    en: 'pyeloplasty',
    ar: 'pyeloplasty'
  },
  'fistul-onarimi': {
    tr: 'fistul-onarimi',
    en: 'fistula-repair',
    ar: 'fistula-repair'
  },
  'ureter-rekonstruksiyonu': {
    tr: 'ureter-rekonstruksiyonu',
    en: 'ureteral-reconstruction',
    ar: 'ureteral-reconstruction'
  },
  'cocuk-urolojisi': {
    tr: 'cocuk-urolojisi',
    en: 'paediatric-urology',
    ar: 'paediatric-urology'
  },
  'hipospadias-onarimi': {
    tr: 'hipospadias-onarimi',
    en: 'hypospadias-repair',
    ar: 'hypospadias-repair'
  },
  'vur-cerrahisi': {
    tr: 'vezikoureteral-reflu-cerrahisi',
    en: 'vesicoureteral-reflux-surgery',
    ar: 'vesicoureteral-reflux-surgery'
  },
  tot: {
    tr: 'tot-aski-ameliyati',
    en: 'tot-sling-surgery',
    ar: 'tot-sling-surgery'
  },
  pektopeksi: {
    tr: 'pektopeksi',
    en: 'pectopexy',
    ar: 'pectopexy'
  },
  'mesane-botoksu': {
    tr: 'mesane-botoksu',
    en: 'bladder-botox',
    ar: 'bladder-botox'
  },
  'yapay-idrar-sfinkteri': {
    tr: 'yapay-idrar-sfinkteri',
    en: 'artificial-urinary-sphincter',
    ar: 'artificial-urinary-sphincter'
  },
  tumt: {
    tr: 'tumt-mikrodalga-tedavisi',
    en: 'tumt-microwave-therapy',
    ar: 'tumt-microwave-therapy'
  },
  'mikroskopik-varikoselektomi': {
    tr: 'mikroskopik-varikoselektomi',
    en: 'microsurgical-varicocelectomy',
    ar: 'microsurgical-varicocelectomy'
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
