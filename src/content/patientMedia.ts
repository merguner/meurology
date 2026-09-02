/**
 * HASTA FOTOĞRAFLARI (mevcut siteden alınan "Our Happy Patients" görselleri).
 * public/patients/ altında; next/image otomatik optimize eder (WebP/AVIF).
 *
 * MAHREMİYET KURALI: Androloji (ED, penil protez, varikosel) ve rekonstrüktif
 * üroloji/fistül sayfalarına HİÇBİR hasta fotoğrafı KONMAZ. Yalnızca aşağıdaki
 * uygun kategoriler + genel "Hasta Deneyimleri" galerisi.
 *
 * KVKK: Hasta fotoğrafı yayını açık rıza gerektirir (görseller mevcut klinik
 * sitesinde de yayımlanmıştı).
 */

/** Genel galeri havuzu — tüm fotoğraflar (Hasta Deneyimleri sayfası). */
export const patientPhotos: string[] = [
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
const PHOTO_ELIGIBLE = new Set([
  'robotik-prostatektomi',
  'bobrek-tasi',
  'bph-prostat-buyumesi',
  'uroonkoloji',
  'kadin-urolojisi'
]);

// Her uygun tedaviye ayrı 3 fotoğraf (aynı görsel genel galeride de bulunur).
const PER_TREATMENT: Record<string, string[]> = {
  'robotik-prostatektomi': ['/patients/robotik-prostatektomi-hasta-1.jpg', '/patients/robotik-prostatektomi-hasta-2.jpg', '/patients/robotik-prostatektomi-hasta-3.jpg'],
  'bobrek-tasi': ['/patients/bobrek-tasi-hasta-1.jpg', '/patients/bobrek-tasi-hasta-2.jpg', '/patients/bobrek-tasi-hasta-3.jpg'],
  'bph-prostat-buyumesi': ['/patients/bph-prostat-tedavisi-hasta-1.jpg', '/patients/bph-prostat-tedavisi-hasta-2.jpg', '/patients/bph-prostat-tedavisi-hasta-3.jpg'],
  uroonkoloji: ['/patients/uroonkoloji-hasta-1.jpg', '/patients/uroonkoloji-hasta-2.jpg', '/patients/uroonkoloji-hasta-3.jpg'],
  'kadin-urolojisi': ['/patients/kadin-urolojisi-hasta-1.jpg', '/patients/kadin-urolojisi-hasta-2.jpg', '/patients/kadin-urolojisi-hasta-3.jpg']
};

/**
 * Bir tedavi sayfasında gösterilecek hasta fotoğrafları.
 * Androloji ve rekonstrüktif tedaviler için DAİMA boş dizi döner (foto yok).
 */
export function photosForTreatment(slug: string): string[] {
  if (!PHOTO_ELIGIBLE.has(slug)) return [];
  return PER_TREATMENT[slug] ?? [];
}
