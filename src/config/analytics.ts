/**
 * ANALİTİK YAPILANDIRMASI (prompt m.5.3).
 *
 * Tasarım kararı: ÖLÇÜM KİMLİĞİ YOKSA HİÇBİR ŞEY YÜKLENMEZ ve çerez bandı
 * gösterilmez. Sebep: yalnızca zorunlu çerez kullanan bir sitede onay bandı
 * göstermek hem gereksiz hem yanıltıcıdır (çerez politikası metni bu
 * davranışı anlatır).
 *
 * Google Analytics'i devreye almak için:
 *   1. GA4 mülkü oluşturup "G-" ile başlayan ölçüm kimliğini alın.
 *   2. Vercel → Project → Settings → Environment Variables:
 *      NEXT_PUBLIC_GA_ID = G-XXXXXXXXXX
 *   3. Yeniden dağıtın. Çerez bandı kendiliğinden görünür hale gelir.
 *
 * TODO-DOGRULA: GA4 ölçüm kimliği kullanıcıdan bekleniyor.
 *
 * ÖNEMLİ: Onay verilmeden gtag betiği DOM'a hiç eklenmez. Consent Mode v2'nin
 * "denied" varsayılanıyla betiği yükleyip çerezsiz ping göndermek de bir ağ
 * çağrısıdır; çerez politikasında "hiçbir analitik çağrısı yapılmaz" dediğimiz
 * için betik yalnızca onaydan sonra enjekte edilir.
 */
export const analyticsConfig = {
  /** GA4 ölçüm kimliği (G-...). Boşsa analitik tamamen kapalıdır. */
  gaId: process.env.NEXT_PUBLIC_GA_ID?.trim() ?? '',
  /** Onay tercihinin tarayıcıda saklandığı anahtar. */
  storageKey: 'me-cookie-consent',
  /** Tercihin geçerli sayılacağı süre (gün). Sonrasında yeniden sorulur. */
  consentMaxAgeDays: 180
} as const;

/** Analitik yapılandırılmış mı? Bant ve gtag yalnızca bu doğruysa devreye girer. */
export function analyticsEnabled(): boolean {
  return analyticsConfig.gaId.length > 0;
}
