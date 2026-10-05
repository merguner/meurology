/**
 * HİZMET VAATLERİ — AÇ / KAPA
 * ------------------------------------------------------------------
 * Uluslararası hasta sayfasındaki bazı cevaplar bir HİZMET VAADİ içerir
 * ("koordinatörümüz vardır", "konaklama pakete dâhildir" gibi). Bir vaat
 * tutulamıyorsa onu metinden elle silmek yerine burada kapatılır; ilgili
 * soru-cevap sayfadan ve FAQPage yapılandırılmış verisinden tamamen çıkar.
 *
 * !!! TODO(Dr. Ergün): TEYİT EDİLECEK !!!
 * Aşağıdaki değerler sitenin BUGÜNKÜ beyanıyla aynı bırakıldı; hiçbiri
 * yeni bir iddia değildir. Tutulamayan bir vaat varsa `false` yapın —
 * metin değişmez, yalnızca o cevap gösterilmez.
 *
 * Yanıltıcı tanıtım açısından riskli olan, vaadin yazılması değil
 * TUTULAMAMASIDIR; bu yüzden bu liste ayrı bir dosyada tutulur.
 */
export const servicePromises = {
  /** "Uluslararası hasta koordinatörümüz var." TODO(Dr. Ergün) */
  internationalCoordinator: true,
  /** "Görüşme öncesi tercüman ayarlanır." TODO(Dr. Ergün) */
  interpreter: true,
  /** "Konaklama ve transferler paket kapsamındadır." TODO(Dr. Ergün) */
  packageIncludesStayAndTransfer: true,
  /** "Bir refakatçinin konaklaması da kapsanır." TODO(Dr. Ergün) */
  companionAccommodation: true,
  /** "Talep üzerine kadın koordinatör desteği sağlanır." TODO(Dr. Ergün) */
  femaleCoordinator: true,
  /** "Tıbbi raporlar İngilizce hazırlanır." TODO(Dr. Ergün) */
  englishEpicrisis: true
} as const;

export type ServicePromiseKey = keyof typeof servicePromises;

/** Vaat açık mı? Anahtar verilmemişse içerik her zaman gösterilir. */
export function promiseEnabled(key?: ServicePromiseKey): boolean {
  return key ? servicePromises[key] : true;
}
