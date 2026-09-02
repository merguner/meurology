/**
 * CERRAHİ DENEYİM İSTATİSTİKLERİ (gerçek).
 * Tek kaynak — hem ana sayfa "Rakamlarla" bölümü hem cerrah profili kullanır.
 * Sayı DEĞERLERİ tüm dillerde AYNI; yalnızca binlik ayraç locale'e göre biçimlenir
 * (Intl.NumberFormat, StatsBand içinde). Etiketler messages/*.json → "Stats".
 *
 * Kategori toplamı = genel toplam (tutarlılık kontrolü):
 * 945 + 1.350 + 583 + 1.352 + 347 + 653 = 5.230
 */
export const TOTAL_PROCEDURES = 5230;
export const YEARS_EXPERIENCE = 18;

export interface CategoryStat {
  /** messages "Stats" altındaki etiket anahtarı */
  key: string;
  value: number;
}

export const categoryStats: CategoryStat[] = [
  { key: 'robotic', value: 945 },
  { key: 'endourology', value: 1350 },
  { key: 'andrology', value: 583 },
  { key: 'microsurgery', value: 1352 },
  { key: 'reconstructive', value: 347 },
  { key: 'uroOnc', value: 653 }
];

// Derleme-zamanı tutarlılık güvencesi: kategori toplamı genel toplama eşit olmalı.
const _sum = categoryStats.reduce((a, c) => a + c.value, 0);
if (_sum !== TOTAL_PROCEDURES) {
  throw new Error(
    `stats.ts tutarsız: kategori toplamı ${_sum} ≠ TOTAL_PROCEDURES ${TOTAL_PROCEDURES}`
  );
}
