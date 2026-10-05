/**
 * PAKETLER VE BAŞLANGIÇ FİYATLARI — BOŞ YAPI
 * ------------------------------------------------------------------
 * !!! TODO(Dr. Ergün): DOLDURULACAK !!!
 *
 * Bu liste BOŞ olduğu sürece sayfada "Paketler ve başlangıç fiyatları"
 * bölümü HİÇ render edilmez. Yani yayında boş bir tablo veya "yakında"
 * yazısı görünmez; veri girildiği an bölüm kendiliğinden çıkar.
 *
 * KURALLAR:
 * 1. Tutarlar YALNIZCA fiyat gösterimine izin verilen dillerde basılır.
 *    Türkçe sayfalarda hiçbir koşulda tutar yazılmaz
 *    (Sağlık Bakanlığı tanıtım yönetmeliği, bkz. config/features.ts).
 * 2. Tutar bir BAŞLANGIÇ aralığıdır, teklif değildir; sayfada bu
 *    açıkça yazar.
 * 3. Doğrulanmamış rakam girilmez. Emin olunmayan bir satır hiç
 *    eklenmez — eksik satır, yanlış satırdan iyidir.
 */

/** Pakete dâhil kalemler — metinleri messages'taki Process.* anahtarlarından gelir. */
export type PackageInclusion = 'accommodation' | 'transfer' | 'interpreter' | 'followup';

export interface TreatmentPackage {
  /** content/treatments.ts içindeki kanonik slug. */
  treatmentSlug: string;
  /** Başlangıç aralığı — EURO. İkisi de 0 ise bu satır gösterilmez. */
  priceFromEUR: number;
  priceToEUR: number;
  /** Türkiye'de toplam kalış (gece). 0 ise hücre boş bırakılır. */
  nights: number;
  /** Pakete dâhil olanlar. */
  includes: PackageInclusion[];
}

/** TODO(Dr. Ergün): doğrulanmış paketler girilecek. Boşken bölüm gizlidir. */
export const treatmentPackages: TreatmentPackage[] = [];

/** Gösterilebilir (tutarı girilmiş) paketler. */
export function publishablePackages(): TreatmentPackage[] {
  return treatmentPackages.filter((p) => p.priceFromEUR > 0 && p.priceToEUR > 0);
}
