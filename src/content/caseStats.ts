/**
 * CERRAHİ VAKA SAYILARI — TEK KAYNAK.
 *
 * ⚠️ TODO-DOGRULA: Hiçbir rakam yayınlanmıyor.
 * Gerekçe: Sitede yayındaki rakamlar (toplam 5.230 / 945 robotik) ile sonradan
 * bildirilen işlem bazlı rakamlar (toplam 2.385 / 93 robotik radikal prostatektomi)
 * birbiriyle çelişiyor ve ikisi de doğrulanmadı. Yanıltıcı bilgi riski nedeniyle
 * doğrulanana kadar sitede HİÇBİR vaka sayısı gösterilmez
 * (bkz. config/features.ts → caseNumbers: false).
 *
 * DOLDURMA TALİMATI (rakamlar doğrulanınca):
 *  1. Aşağıdaki `caseStats` dizisine her işlem için bir kayıt ekleyin.
 *     `scopeKey` → messages/*.json "CaseStats" altındaki kapsam açıklaması.
 *     `sinceYear` → o rakamın hangi yıldan bu yana biriktiği (zorunlu).
 *  2. config/features.ts → ilgili dillerde `caseNumbers: true` yapın.
 *  3. Toplam ELLE YAZILMAZ; `totalCases()` alt kalemlerden otomatik hesaplar.
 *
 * Kapsam örneği (prompt m.2.2): "945 robotik ve laparoskopik işlem (2009'dan bu
 * yana); bunların 145'i robotik radikal prostatektomi" — iç içe kapsamlar
 * `partOf` ile belirtilir ki toplam çift saymasın.
 */

export interface CaseStat {
  /** Teknik anahtar — messages "CaseStats" etiketleri bu anahtarla eşleşir. */
  key: string;
  /** Doğrulanmış işlem sayısı. */
  value: number;
  /** Bu rakamın hangi yıldan bu yana biriktiği (ör. 2009). Zorunlu. */
  sinceYear: number;
  /**
   * Bu kalem başka bir kalemin alt kümesiyse üst kalemin `key` değeri.
   * Toplama dahil EDİLMEZ (çift sayım önlenir).
   * Ör. robotik radikal prostatektomi, "robotik+laparoskopik" kaleminin alt kümesi.
   */
  partOf?: string;
}

/**
 * ⚠️ BİLEREK BOŞ — doğrulanmış rakam gelene kadar doldurulmayacak.
 * Boş olduğu sürece tüm vaka sayısı bölümleri render edilmez.
 */
export const caseStats: CaseStat[] = [];

/** Alt kalemler hariç, doğrulanmış toplam işlem sayısı (otomatik). */
export function totalCases(): number {
  return caseStats.filter((s) => !s.partOf).reduce((a, s) => a + s.value, 0);
}

/** Belirli bir işlemin doğrulanmış rakamı (yoksa undefined → bölüm gizlenir). */
export function caseStat(key: string): CaseStat | undefined {
  return caseStats.find((s) => s.key === key);
}

/** Yayınlanacak doğrulanmış rakam var mı? */
export function hasCaseStats(): boolean {
  return caseStats.length > 0;
}

/**
 * ⚠️ TODO-DOGRULA: Deneyim yılı.
 * Sitede "18 yıl" yazıyordu; tıp fakültesi mezuniyeti 2004 olduğuna göre 22 yıl
 * eder, uzmanlık başlangıç yılı ise bildirilmedi. Doğrulanmadığı için
 * yayınlanmıyor. Uzmanlık başlangıç yılı verilince buraya girilir ve
 * "…'den bu yana" biçiminde gösterilir.
 */
export const SPECIALTY_START_YEAR: number | null = null;
