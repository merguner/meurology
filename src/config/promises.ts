/**
 * HİZMET VAATLERİ — AÇ / KAPA
 * ------------------------------------------------------------------
 * Uluslararası hasta sayfasındaki bazı cevaplar bir HİZMET VAADİ içerir
 * ("koordinatörümüz vardır", "konaklama pakete dâhildir" gibi). Bir vaat
 * tutulamıyorsa onu metinden elle silmek yerine burada kapatılır; ilgili
 * soru-cevap sayfadan ve FAQPage yapılandırılmış verisinden tamamen çıkar.
 *
 * TEYİT EDİLDİ — Doç. Dr. Müslüm Ergün, 6 Ekim 2026.
 * Aşağıdaki altı vaadin tamamı hekim tarafından doğrulanmıştır.
 * Bir vaat ileride tutulamaz hâle gelirse `false` yapın — metin
 * değişmez, yalnızca o cevap sayfadan ve FAQPage verisinden çıkar.
 *
 * Yanıltıcı tanıtım açısından riskli olan, vaadin yazılması değil
 * TUTULAMAMASIDIR; bu yüzden bu liste ayrı bir dosyada tutulur.
 */
export const servicePromises = {
  /** "Uluslararası hasta koordinatörümüz var." Teyit: 6 Eki 2026. */
  internationalCoordinator: true,
  /** "Görüşme öncesi tercüman ayarlanır." Teyit: 6 Eki 2026. */
  interpreter: true,
  /** "Konaklama ve transferler paket kapsamındadır." Teyit: 6 Eki 2026. */
  packageIncludesStayAndTransfer: true,
  /** "Bir refakatçinin konaklaması da kapsanır." Teyit: 6 Eki 2026. */
  companionAccommodation: true,
  /** "Talep üzerine kadın koordinatör desteği sağlanır." Teyit: 6 Eki 2026. */
  femaleCoordinator: true,
  /** "Tıbbi raporlar İngilizce hazırlanır." Teyit: 6 Eki 2026. */
  englishEpicrisis: true
} as const;

export type ServicePromiseKey = keyof typeof servicePromises;

/** Vaat açık mı? Anahtar verilmemişse içerik her zaman gösterilir. */
export function promiseEnabled(key?: ServicePromiseKey): boolean {
  return key ? servicePromises[key] : true;
}
