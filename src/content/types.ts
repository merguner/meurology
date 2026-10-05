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

/**
 * HIZLI BİLGİ KUTUSU (prompt m.4.2/2).
 * Hastanın en çok sorduğu pratik bilgiler, sayfanın en üstünde.
 * Her alan opsiyoneldir; boş olan satır render EDİLMEZ.
 */
export interface QuickFacts {
  /** İşlem süresi — ör. "2–4 saat". */
  duration?: string;
  /** Anestezi tipi — ör. "Genel anestezi". */
  anesthesia?: string;
  /** Hastanede kalış — ör. "1 gece". */
  hospitalStay?: string;
  /** Türkiye'de toplam kalış (yabancı hasta) — ör. "7–10 gün". */
  stayInTurkey?: string;
  /** Sonda süresi — ör. "7–10 gün". */
  catheter?: string;
  /** İşe dönüş — ör. "2–3 hafta". */
  returnToWork?: string;
  /** Uçuşa izin — ör. "10. günden sonra". */
  flightClearance?: string;
}

/** Kimlere uygundur / uygun değildir (prompt m.4.2/4). */
export interface Eligibility {
  suitable: string[];
  notSuitable: string[];
}

/** Hafta hafta iyileşme (prompt m.4.2/10). */
export interface RecoveryStep {
  /** ör. "1. hafta" */
  period: string;
  body: string;
}

/** Bilimsel kaynak (prompt m.4.2/14). */
export interface ContentSource {
  label: string;
  url?: string;
}

export interface TreatmentContent {
  title: string;
  /** Kart ve meta açıklaması için kısa özet. */
  summary: string;
  /** SEO meta title/description. */
  metaTitle: string;
  metaDescription: string;
  /** Hızlı bilgi kutusu — opsiyonel, boş alanlar gizlenir. */
  quickFacts?: QuickFacts;
  /** Durumun sade dille tanımı (paragraflar). */
  definition: string[];
  /** Kimlere uygundur / uygun değildir. */
  eligibility?: Eligibility;
  /** Kullanılan teknoloji (cihaz adı/modeli) — trust.ts'ten de beslenebilir. */
  technology?: string[];
  /** Hafta hafta iyileşme süreci. */
  recovery?: RecoveryStep[];
  /** Bilimsel kaynaklar (EAU kılavuzu, cerrahın yayınları). */
  sources?: ContentSource[];
  /**
   * SAYFANIN EN ÜSTÜNDEKİ KISA KLİNİK NOT — opsiyonel.
   * Örn. "Kliniğimizde enükleasyon yöntemi olarak öncelikle ThuLEP
   * uygulanmaktadır." Boşken hiç render edilmez.
   * linkSlug verilirse notun sonunda ilgili tedavi sayfasına bağlantı çıkar
   * (slug KANONİK yazılır; dile göre çevrilmiş adrese dönüştürülür).
   */
  topNote?: { body: string; linkSlug?: string; linkLabel?: string };
  /**
   * HEKİMİN BU ALANDAKİ KENDİ YAYINI — opsiyonel.
   * YALNIZCA atıf yapılır. Yayından başarı oranı, yüzde veya vaka sayısı
   * ÇIKARILMAZ; tanıtım yönetmeliği açısından bu bir sonuç iddiası olurdu.
   * Boşken bölüm hiç render edilmez.
   */
  surgeonPublication?: {
    /** Kutunun içindeki kısa giriş cümlesi (dile göre). */
    intro: string;
    /** Tam atıf — kaynak biçiminde, çevrilmez. */
    citation: string;
    url?: string;
  };
  /** Bu prosedürde cerrah deneyimi — PLACEHOLDER sayılar. */
  surgeonExperience: {
    caseVolume: string; // ör. "1.500+ vaka" — doğrulanana kadar boş bırakılır
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
   * TASLAK. true iken sayfa YAYINDA GÖRÜNMEZ:
   * listelerde ve menüde çıkmaz, sitemap'e girmez, statik olarak üretilmez.
   * Tıbbi metinler cerrah tarafından onaylanana kadar true kalır (prompt m.8.3).
   */
  draft?: boolean;
  /**
   * Üst kategori (hub) slug'ı. Verilirse bu sayfa o hub'ın alt sayfasıdır.
   * Hub'ın kendisi parent almaz. Ekmek kırıntısı ve iç linkleme bunu kullanır.
   */
  parent?: string;
  /** Son tıbbi gözden geçirme tarihi (ISO) — sayfada gösterilir, JSON-LD lastReviewed. */
  lastReviewed?: string;
  /**
   * İÇERİK GÖZDEN GEÇİRME DURUMU.
   * 'draft': metin hazır ama HEKİM HENÜZ ONAYLAMADI. Bu durumda
   * `lastReviewed` DOLDURULMAZ; sayfada "Son tıbbi gözden geçirme —
   * Doç. Dr. Müslüm Ergün" satırı ve JSON-LD'deki reviewedBy alanı
   * basılmaz. Onaylanmamış bir metni hekim onaylıymış gibi göstermek
   * yanıltıcı olurdu.
   * Onaydan sonra: reviewStatus 'reviewed' yapılır ve lastReviewed girilir.
   */
  reviewStatus?: 'draft' | 'reviewed';
  /**
   * Fiyat aralığı — EURO (tedavi başına bir kez; dile bağlı değil).
   * YALNIZCA features(locale).prices === true olan dillerde gösterilir;
   * Türkçe sayfalarda hiçbir koşulda gösterilmez (yönetmelik).
   * Boş bırakılırsa "değerlendirme sonrası teklif" mesajı gösterilir.
   * TODO-DOGRULA: işlem bazlı gerçek aralıklar girilecek.
   */
  priceRangeEUR?: { from: number; to: number };
  /** Ücretli "Özel Online Danışmanlık" CTA'sı bu tedavi sayfasında gösterilsin mi. */
  offersConsultation?: boolean;
  /**
   * Hasta deneyimi videosu — gerçek embed URL'i girilene kadar BOŞ bırakılır.
   * Boşken video bölümü hiç render edilmez (yayında yer tutucu görünmez).
   */
  videoEmbedUrl?: string;
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
