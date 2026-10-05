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
  eswl: {
    tr: 'eswl-ses-dalgasiyla-tas-kirma',
    en: 'eswl-shock-wave-lithotripsy',
    de: 'eswl-stosswellenlithotripsie',
    fr: 'leoc-lithotritie-ondes-de-choc',
    ru: 'dlt-distancionnaya-litotripsiya',
    ar: 'eswl-shock-wave-lithotripsy'
  },
  'testis-kanseri': {
    tr: 'testis-kanseri',
    en: 'testicular-cancer',
    de: 'hodenkrebs',
    fr: 'cancer-du-testicule',
    ru: 'rak-yaichka',
    ar: 'testicular-cancer'
  },
  'asiri-aktif-mesane': {
    tr: 'asiri-aktif-mesane',
    en: 'overactive-bladder',
    de: 'ueberaktive-blase',
    fr: 'vessie-hyperactive',
    ru: 'giperaktivnyy-mochevoy-puzyr',
    ar: 'overactive-bladder'
  },
  'stres-inkontinans': {
    tr: 'stres-inkontinans-idrar-kacirma',
    en: 'stress-urinary-incontinence',
    de: 'belastungsinkontinenz',
    fr: 'incontinence-urinaire-effort',
    ru: 'stressovoe-nederzhanie-mochi',
    ar: 'stress-urinary-incontinence'
  },
  'peyronie-hastaligi': {
    tr: 'peyronie-hastaligi',
    en: 'peyronies-disease',
    de: 'peyronie-krankheit',
    fr: 'maladie-de-lapeyronie',
    ru: 'bolezn-peyroni',
    ar: 'peyronies-disease'
  },
  'erkek-infertilitesi': {
    tr: 'erkek-infertilitesi-mikro-tese',
    en: 'male-infertility-micro-tese',
    de: 'maennliche-unfruchtbarkeit-micro-tese',
    fr: 'infertilite-masculine-micro-tese',
    ru: 'muzhskoe-besplodie-mikro-tese',
    ar: 'male-infertility-micro-tese'
  },
  'mesane-kanseri': {
    tr: 'mesane-kanseri',
    en: 'bladder-cancer',
    de: 'blasenkrebs',
    fr: 'cancer-de-la-vessie',
    ru: 'rak-mochevogo-puzyrya',
    ar: 'bladder-cancer'
  },
  'bobrek-kanseri': {
    tr: 'bobrek-kanseri',
    en: 'kidney-cancer',
    de: 'nierenkrebs',
    fr: 'cancer-du-rein',
    ru: 'rak-pochki',
    ar: 'kidney-cancer'
  },
  'erektil-disfonksiyon': {
    tr: 'erektil-disfonksiyon',
    en: 'erectile-dysfunction',
    de: 'erektile-dysfunktion',
    fr: 'dysfonction-erectile',
    ru: 'erektilnaya-disfunkciya',
    ar: 'erectile-dysfunction'
  },
  varikosel: {
    tr: 'varikosel',
    en: 'varicocele',
    de: 'varikozele',
    fr: 'varicocele',
    ru: 'varikocele',
    ar: 'varicocele'
  },
  rirs: {
    tr: 'rirs-fleksibl-ureteroskopi',
    en: 'rirs-flexible-ureteroscopy',
    de: 'rirs-flexible-ureteroskopie',
    fr: 'rirs-ureteroscopie-souple',
    ru: 'rirs-gibkaya-ureteroskopiya',
    ar: 'rirs-flexible-ureteroscopy'
  },
  pcnl: {
    tr: 'pcnl-perkutan-nefrolitotomi',
    en: 'pcnl-percutaneous-nephrolithotomy',
    de: 'pcnl-perkutane-nephrolitholapaxie',
    fr: 'nlpc-nephrolithotomie-percutanee',
    ru: 'pcnl-perkutannaya-nefrolitotomiya',
    ar: 'pcnl-percutaneous-nephrolithotomy'
  },
  turp: {
    tr: 'turp-prostat-rezeksiyonu',
    en: 'turp-prostate-resection',
    de: 'turp-prostataresektion',
    fr: 'rtup-resection-prostatique',
    ru: 'turp-transuretralnaya-rezekciya',
    ar: 'turp-prostate-resection'
  },
  rezum: {
    tr: 'rezum-buhar-tedavisi',
    en: 'rezum-water-vapour-therapy',
    de: 'rezum-wasserdampftherapie',
    fr: 'rezum-therapie-vapeur-eau',
    ru: 'rezum-parovaya-terapiya',
    ar: 'rezum-water-vapour-therapy'
  },
  'psa-yuksekligi-ve-biyopsi': {
    tr: 'psa-yuksekligi-ve-biyopsi',
    en: 'raised-psa-and-biopsy',
    de: 'erhoehter-psa-und-biopsie',
    fr: 'psa-eleve-et-biopsie',
    ru: 'povyshennyy-psa-i-biopsiya',
    ar: 'raised-psa-and-biopsy'
  },
  'prostat-kanseri': {
    tr: 'prostat-kanseri',
    en: 'prostate-cancer',
    de: 'prostatakrebs',
    fr: 'cancer-de-la-prostate',
    ru: 'rak-prostaty',
    ar: 'prostate-cancer'
  },
  'sinir-koruyucu-cerrahi': {
    tr: 'sinir-koruyucu-cerrahi',
    en: 'nerve-sparing-surgery',
    de: 'nervenschonende-operation',
    fr: 'chirurgie-preservation-nerveuse',
    ru: 'nervosberegayushchaya-operaciya',
    ar: 'nerve-sparing-surgery'
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
  holep: {
    tr: 'holep',
    en: 'holep',
    de: 'holep',
    fr: 'holep',
    ru: 'holep',
    ar: 'holep'
  },
  thulep: {
    tr: 'thulep',
    en: 'thulep',
    de: 'thulep',
    fr: 'thulep',
    ru: 'thulep',
    ar: 'thulep'
  },
  'penis-buyutme': {
    tr: 'penis-buyutme',
    en: 'penile-enlargement',
    de: 'penisvergroesserung',
    fr: 'agrandissement-penien',
    ru: 'uvelichenie-polovogo-chlena',
    ar: 'penile-enlargement'
  },
  'penil-protez': {
    tr: 'penil-protez',
    en: 'penile-prosthesis',
    de: 'penisprothese',
    fr: 'prothese-penienne',
    ru: 'falloprotezirovanie',
    ar: 'penile-implant'
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
  },
  'cocuk-urolojisi': {
    tr: 'cocuk-urolojisi',
    en: 'paediatric-urology',
    de: 'kinderurologie',
    fr: 'urologie-pediatrique',
    ru: 'detskaya-urologiya',
    ar: 'paediatric-urology'
  },
  'hipospadias-onarimi': {
    tr: 'hipospadias-onarimi',
    en: 'hypospadias-repair',
    de: 'hypospadie-korrektur',
    fr: 'cure-hypospadias',
    ru: 'korrekciya-gipospadii',
    ar: 'hypospadias-repair'
  },
  'vur-cerrahisi': {
    tr: 'vezikoureteral-reflu-cerrahisi',
    en: 'vesicoureteral-reflux-surgery',
    de: 'vesikoureteraler-reflux-operation',
    fr: 'chirurgie-reflux-vesico-ureteral',
    ru: 'operaciya-pri-puzyrno-mochetochnikovom-reflyukse',
    ar: 'vesicoureteral-reflux-surgery'
  },
  tot: {
    tr: 'tot-aski-ameliyati',
    en: 'tot-sling-surgery',
    de: 'tot-schlingenoperation',
    fr: 'bandelette-tot',
    ru: 'tot-sling-operaciya',
    ar: 'tot-sling-surgery'
  },
  pektopeksi: {
    tr: 'pektopeksi',
    en: 'pectopexy',
    de: 'pektopexie',
    fr: 'pectopexie',
    ru: 'pektopeksiya',
    ar: 'pectopexy'
  },
  'mesane-botoksu': {
    tr: 'mesane-botoksu',
    en: 'bladder-botox',
    de: 'blasen-botox',
    fr: 'botox-vesical',
    ru: 'botoks-mochevogo-puzyrya',
    ar: 'bladder-botox'
  },
  'yapay-idrar-sfinkteri': {
    tr: 'yapay-idrar-sfinkteri',
    en: 'artificial-urinary-sphincter',
    de: 'kuenstlicher-schliessmuskel',
    fr: 'sphincter-urinaire-artificiel',
    ru: 'iskusstvennyy-sfinkter-mochevogo-puzyrya',
    ar: 'artificial-urinary-sphincter'
  },
  tumt: {
    tr: 'tumt-mikrodalga-tedavisi',
    en: 'tumt-microwave-therapy',
    de: 'tumt-mikrowellentherapie',
    fr: 'tumt-thermotherapie-micro-ondes',
    ru: 'tumt-mikrovolnovaya-terapiya',
    ar: 'tumt-microwave-therapy'
  },
  'mikroskopik-varikoselektomi': {
    tr: 'mikroskopik-varikoselektomi',
    en: 'microsurgical-varicocelectomy',
    de: 'mikrochirurgische-varikozelektomie',
    fr: 'varicocelectomie-microchirurgicale',
    ru: 'mikrohirurgicheskaya-varikocelektomiya',
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
