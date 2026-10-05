/**
 * ANA SAYFA AYARLARI
 * ------------------------------------------------------------------
 * Ana sayfa artık tüm tedavileri listelemez. Yalnızca aşağıdaki liste,
 * yazıldığı SIRAYLA gösterilir; sıra kliniğin öncelik sırasıdır.
 * Listeyi değiştirmek için kod değil, yalnızca bu dizi düzenlenir.
 *
 * Listede olup yayından kaldırılmış (draft) bir slug sessizce atlanır;
 * böylece bir tedavi taslağa alındığında ana sayfa kırılmaz.
 */
export const featuredTreatmentSlugs = [
  'bph-prostat-buyumesi', // BPH / ThuLEP
  'robotik-prostatektomi',
  'bobrek-tasi',
  'penil-protez',
  'uretroplasti', // rekonstrüktif üroloji
  'prostat-kanseri'
] as const;

/**
 * HERO'DAKİ HEKİM FOTOĞRAFI.
 * Dosya /public altına eklenene kadar hero'da fotoğraf alanı HİÇ
 * render edilmez (yer tutucu kutu gösterilmez). Dosya eklendiği anda
 * kod değişikliği gerekmeden görünür.
 * TODO(Dr. Ergün): hero için ayrı bir portre eklenecek. Cerrah sayfasında
 * kullanılan portre hâlihazırda /public/dr-muslum-ergun.jpg altındadır;
 * istenirse bu dosya aşağıdaki yola kopyalanabilir.
 */
export const heroDoctorPhoto = '/photos/dr-ergun-hero.jpg';
