/**
 * HASTA FOTOĞRAFLARI — ⚠️ TÜM DİLLERDE YAYINDAN KALDIRILDI.
 *
 * GEREKÇE: Bölüm 0 → "Hasta onam formu (Ek-1) imzalı fotoğraf/video: yok".
 * Sağlıkta Tanıtım ve Bilgilendirme Yönetmeliği (12 Kasım 2025, RG 33075) ile
 * KVKK, imzalı açık rıza olmadan hasta görseli yayınını yasaklar. Bu kural
 * sağlık turizmi istisnasında da geçerlidir; bu nedenle yabancı dil
 * sayfalarında da gösterilmez.
 *
 * GERİ AÇMA: Her görsel için imzalı Ek-1 onam alındığında
 *  1. aşağıdaki CONSENTED_PHOTOS listesine { src, consentDocumentId } ekleyin,
 *  2. config/features.ts → ilgili dillerde patientPhotos: true yapın.
 *
 * MAHREMİYET KURALI (onam alınsa bile geçerli): Androloji (ED, penil protez,
 * varikosel) ve rekonstrüktif üroloji/fistül sayfalarına HİÇBİR hasta
 * fotoğrafı konmaz.
 */

export interface ConsentedPhoto {
  src: string;
  /** İmzalı Ek-1 açık rıza belge referansı — ZORUNLU. */
  consentDocumentId: string;
  /** Hangi tedavi sayfasında gösterilebileceği. */
  treatmentSlug?: string;
}

/**
 * ⚠️ BİLEREK BOŞ — imzalı onam gelene kadar hiçbir hasta fotoğrafı yayınlanmaz.
 * Dosyalar public/patients/ altında duruyor ama hiçbir sayfadan referans verilmiyor.
 */
export const consentedPhotos: ConsentedPhoto[] = [];

/** Yayınlanabilir galeri — onam kapısından geçen görseller (şu an boş). */
export const patientPhotos: string[] = consentedPhotos.map((p) => p.src);

/** Onam bekleyen arşiv (YAYINDA KULLANILMAZ; yalnızca kayıt amaçlı). */
const ARCHIVED_AWAITING_CONSENT: string[] = [
  '/patients/robotik-prostatektomi-hasta-1.jpg',
  '/patients/robotik-prostatektomi-hasta-2.jpg',
  '/patients/robotik-prostatektomi-hasta-3.jpg',
  '/patients/bobrek-tasi-hasta-1.jpg',
  '/patients/bobrek-tasi-hasta-2.jpg',
  '/patients/bobrek-tasi-hasta-3.jpg',
  '/patients/bph-prostat-tedavisi-hasta-1.jpg',
  '/patients/bph-prostat-tedavisi-hasta-2.jpg',
  '/patients/bph-prostat-tedavisi-hasta-3.jpg',
  '/patients/uroonkoloji-hasta-1.jpg',
  '/patients/uroonkoloji-hasta-2.jpg',
  '/patients/uroonkoloji-hasta-3.jpg',
  '/patients/kadin-urolojisi-hasta-1.jpg',
  '/patients/kadin-urolojisi-hasta-2.jpg',
  '/patients/kadin-urolojisi-hasta-3.jpg',
  '/patients/meurology-mutlu-hasta-1.jpg',
  '/patients/meurology-klinik-1.jpg'
];

// Fotoğraf gösterilebilen tedaviler (androloji + rekonstrüktif HARİÇ).
// Onam alındığında ConsentedPhoto.treatmentSlug bu kümeyle doğrulanır.
const PHOTO_ELIGIBLE = new Set([
  'robotik-prostatektomi',
  'bobrek-tasi',
  'bph-prostat-buyumesi',
  'uroonkoloji',
  'kadin-urolojisi'
]);

/**
 * Bir tedavi sayfasında gösterilecek hasta fotoğrafları.
 * Yalnızca imzalı onamı olan görseller döner; onam yoksa boş dizi (bölüm gizlenir).
 * Androloji ve rekonstrüktif tedaviler için onam olsa bile DAİMA boş döner.
 */
export function photosForTreatment(slug: string): string[] {
  if (!PHOTO_ELIGIBLE.has(slug)) return [];
  return consentedPhotos.filter((p) => p.treatmentSlug === slug).map((p) => p.src);
}

// Arşiv listesi yayında kullanılmaz; lint "kullanılmıyor" demesin diye dışa verilir.
export const _archivedAwaitingConsent = ARCHIVED_AWAITING_CONSENT;
