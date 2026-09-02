import type { Locale } from '@/i18n/routing';

/**
 * İçerik veri modeli. Bugün TypeScript veri dosyalarında tutuluyor; alanlar
 * headless CMS'e (Sanity vb.) birebir taşınabilecek şekilde düz tutuldu.
 * Uzun metin içerikleri dil bazlı; UI etiketleri next-intl mesajlarında.
 */

export interface TimelineStep {
  /** ör. "1. Gün" / "Ameliyat öncesi" */
  when: string;
  title: string;
  body: string;
}

export interface ComparisonRow {
  label: string;
  values: string[]; // sütun başına bir değer
}

export interface ComparisonTable {
  title: string;
  columns: string[];
  rows: ComparisonRow[];
  note?: string;
}

export interface Faq {
  q: string;
  a: string;
}

/**
 * Tahmini fiyat aralığı (sağlık turizmi).
 * from/to > 0 girilirse sayfada "$X,XXX–$X,XXX (yaklaşık)" gösterilir;
 * from/to = 0 bırakılırsa "değerlendirme sonrası paylaşılır" mesajı korunur.
 * Standart prosedürler (prostatektomi, taş, BPH) için aralık girin;
 * rekonstrüktif/redo vakalar için 0 bırakın (dosya bazlı değerlendirme).
 * currency: 'USD' | 'EUR' (Intl ile biçimlenir).
 */
export interface PriceRange {
  from: number;
  to: number;
  currency: string; // 'USD' | 'EUR'
  /** Fiyat bir tahmini aralıktır; kişiye göre değişir uyarısı için. */
  disclaimer?: string;
}

/**
 * Uzmanlık göstergeleri — özellikle rekonstrüktif (karmaşık/nadir) vakalar için.
 * Fiyat/hacim yerine vaka karmaşıklığı, redo deneyimi ve ileri teknikleri öne çıkarır.
 */
export interface ExpertiseSignals {
  /** Redo (tekrar ameliyat) vaka oranı/deneyimi. */
  redoRate: string;
  /** "Kompleks vaka" tanımı — bu merkeze neden sevk edilir. */
  complexCase: string;
  /** Kullanılan ileri teknik (ör. buccal mukoza grefti, ileal interpozisyon). */
  advancedTechnique: string;
}

export interface TreatmentContent {
  title: string;
  /** Kart ve meta açıklaması için kısa özet. */
  summary: string;
  /** SEO meta title/description. */
  metaTitle: string;
  metaDescription: string;
  /** Durumun sade dille tanımı (paragraflar). */
  definition: string[];
  /** Bu prosedürde cerrah deneyimi — PLACEHOLDER sayılar. */
  surgeonExperience: {
    caseVolume: string; // ör. "1.500+ vaka" (PLACEHOLDER)
    note: string;
  };
  /** Rekonstrüktif vakalarda ek uzmanlık göstergeleri (opsiyonel). */
  expertise?: ExpertiseSignals;
  timeline: TimelineStep[];
  risks: string[];
  alternatives: string[];
  comparison?: ComparisonTable;
  price: PriceRange;
  packageIncludes: string[];
  faqs: Faq[];
}

/**
 * Tedavi kategorisi.
 * - 'general': fiyat/hacim odaklı sağlık turizmi kategorileri (varsayılan).
 * - 'reconstructive': uzmanlık/karmaşıklık odaklı; fiyat ön plana çıkmaz,
 *   dosya değerlendirmesi akışı önceliklidir.
 */
export type TreatmentCategory = 'general' | 'reconstructive';

export interface Treatment {
  slug: string;
  /** Kart ikonu için anahtar (components/Icon içinde eşlenir). */
  icon: string;
  /** Kategori — belirtilmezse 'general' kabul edilir. */
  category?: TreatmentCategory;
  /**
   * Tahmini fiyat aralığı (TL, tedavi başına bir kez; dile bağlı değil).
   * Girilirse sayfada "X–Y TL (≈ $a–b / €c–d)" gösterilir (USD/EUR kurdan türetilir).
   * Boş bırakılırsa "değerlendirme sonrası paylaşılır" mesajı korunur
   * (rekonstrüktif/redo vakalar için). Standart prosedürlerde doldurun.
   */
  priceRangeTRY?: { from: number; to: number };
  /** Ücretli "Özel Online Danışmanlık" CTA'sı bu tedavi sayfasında gösterilsin mi. */
  offersConsultation?: boolean;
  /** Hasta deneyimi videosu — gerçek embed URL'i girilene kadar boş. */
  videoPlaceholderNote: string;
  /** Dil bazlı içerik. tr ve en dolu; diğerleri render'da en'e düşer. */
  i18n: Partial<Record<Locale, TreatmentContent>>;
}

/** Tedavinin kategorisini döndürür (varsayılan 'general'). */
export function treatmentCategory(t: Treatment): TreatmentCategory {
  return t.category ?? 'general';
}

/** İçeriği locale'e göre çözer; sıra: istenen dil → en → tr. */
export function resolveContent(
  treatment: Treatment,
  locale: Locale
): TreatmentContent {
  return (
    treatment.i18n[locale] ??
    treatment.i18n.en ??
    treatment.i18n.tr!
  );
}

/**
 * Bir alanın hâlâ doldurulmamış PLACEHOLDER olup olmadığını söyler.
 * UI, gerçek veri gelene kadar bu tür alanları GİZLEMEK için kullanır
 * (böylece ziyaretçi "PLACEHOLDER" metnini görmez, veri de kaybolmaz).
 */
export function isPlaceholder(v?: string | null): boolean {
  return typeof v === 'string' && v.includes('PLACEHOLDER');
}
