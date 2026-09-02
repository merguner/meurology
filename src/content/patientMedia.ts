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
  '/patients/IMG_9562.jpg',
  '/patients/IMG_9544.jpg',
  '/patients/IMG_9376.jpg',
  '/patients/IMG_9360.jpg',
  '/patients/IMG_9352.jpg',
  '/patients/IMG_9349.jpg',
  '/patients/IMG_9222.jpg',
  '/patients/IMG_8423.jpg',
  '/patients/IMG_8257.jpg',
  '/patients/IMG_7293.jpg',
  '/patients/IMG_7009.jpg',
  '/patients/IMG_6753.jpg',
  '/patients/IMG_3324.jpg',
  '/patients/IMG_1884.jpg',
  '/patients/IMG_1207.jpg',
  '/patients/patient-fc98.jpg',
  '/patients/patient-untitled.png'
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
  'robotik-prostatektomi': ['/patients/IMG_9562.jpg', '/patients/IMG_9544.jpg', '/patients/IMG_9376.jpg'],
  'bobrek-tasi': ['/patients/IMG_9360.jpg', '/patients/IMG_9352.jpg', '/patients/IMG_9349.jpg'],
  'bph-prostat-buyumesi': ['/patients/IMG_9222.jpg', '/patients/IMG_8423.jpg', '/patients/IMG_8257.jpg'],
  uroonkoloji: ['/patients/IMG_7293.jpg', '/patients/IMG_7009.jpg', '/patients/IMG_6753.jpg'],
  'kadin-urolojisi': ['/patients/IMG_3324.jpg', '/patients/IMG_1884.jpg', '/patients/IMG_1207.jpg']
};

/**
 * Bir tedavi sayfasında gösterilecek hasta fotoğrafları.
 * Androloji ve rekonstrüktif tedaviler için DAİMA boş dizi döner (foto yok).
 */
export function photosForTreatment(slug: string): string[] {
  if (!PHOTO_ELIGIBLE.has(slug)) return [];
  return PER_TREATMENT[slug] ?? [];
}
