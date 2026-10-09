import type { Locale } from '@/i18n/routing';

/**
 * DİL BAZLI İÇERİK BAYRAKLARI — yasal uyum tek kaynağı.
 *
 * Dayanak: Sağlık Hizmetlerinde Tanıtım ve Bilgilendirme Faaliyetleri Hakkında
 * Yönetmelik (12 Kasım 2025, RG 33075).
 *  - Yurt içine (Türkçe) yönelik tanıtımda fiyat, hasta yorumu/görseli,
 *    öncesi-sonrası ve üstünlük ifadeleri YASAK.
 *  - m.8 sağlık turizmi istisnası fiyat ve hasta hikâyesine izin verir; yalnızca
 *    yurt dışına yönelik ve Türkçe DIŞI dillerde.
 *
 * Ayrıntı ve avukata sorulacaklar: /legal-review.md
 */
export interface ContentFeatures {
  /** Fiyat, fiyat aralığı, paket tutarı gösterilebilir mi? */
  prices: boolean;
  /** Hasta yorumu / hasta hikâyesi gösterilebilir mi? */
  testimonials: boolean;
  /** Hasta fotoğrafı / öncesi-sonrası görsel gösterilebilir mi? */
  patientPhotos: boolean;
  /** "En iyi / lider / öncü" türü üstünlük ve karşılaştırma ifadeleri. */
  superlatives: boolean;
  /** Vaka sayısı (ameliyat adedi) gösterilebilir mi? */
  caseNumbers: boolean;
}

/**
 * patientPhotos: TÜM dillerde false.
 *   Gerekçe: Bölüm 0 → "Hasta onam formu (Ek-1) imzalı fotoğraf/video: yok".
 *   Yönetmelik imzalı açık rıza olmadan hasta görseli yayınını yasaklar.
 *   Onam alındığında patientMedia.ts'te consentDocumentId doldurulup burası açılır.
 *
 * caseNumbers: TÜM dillerde false.
 *   Gerekçe: Mevcut rakamlar (5.230 toplam / 945 robotik) ile bildirilen işlem
 *   bazlı rakamlar (toplam 2.385) çelişiyor; hiçbiri doğrulanmadı. Yanıltıcı bilgi
 *   riski nedeniyle doğrulanana kadar hiçbir vaka sayısı yayınlanmaz.
 *   → TODO-DOGRULA: content/caseStats.ts
 */
const FEATURES: Record<Locale, ContentFeatures> = {
  tr: {
    prices: false,
    testimonials: false,
    patientPhotos: false,
    superlatives: false,
    caseNumbers: false
  },
  en: {
    prices: true,
    testimonials: true,
    patientPhotos: false,
    superlatives: false,
    caseNumbers: false
  },
  ar: {
    prices: true,
    testimonials: true,
    patientPhotos: false,
    superlatives: false,
    caseNumbers: false
  },
};

/** Bilinmeyen locale'de en kısıtlayıcı (yurt içi) profile düşer. */
export function features(locale: Locale | string): ContentFeatures {
  return FEATURES[locale as Locale] ?? FEATURES.tr;
}
