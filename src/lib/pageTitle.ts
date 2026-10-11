/**
 * SAYFA BAŞLIĞI UZUNLUĞU (11 Eki 2026 denetimi, madde 7).
 *
 * Dil şablonu her başlığa " — ME Urology Clinic" (20 karakter) ekliyordu;
 * 171 başlık 60 karakteri aşıyor ve Google sonuçta "…" ile kesiyordu.
 * Kesilen kısım çoğu zaman marka değil, konunun kendisiydi.
 *
 * Sıra: tam ek sığıyorsa şablon tam eki ekler; sığmıyorsa kısa ek
 * (" — ME Urology"); o da sığmıyorsa yalnızca sayfa başlığı. Marka adı yine
 * og:site_name ve yapılandırılmış veride (JSON-LD) duruyor.
 *
 * Şablon metni src/messages/*.json → Meta.titleTemplate (üç dilde aynı).
 */
const SINIR = 60;
const TAM_EK = ' — ME Urology Clinic';
const KISA_EK = ' — ME Urology';

export function pageTitle(title: string): string | { absolute: string } {
  if ((title + TAM_EK).length <= SINIR) return title;
  if ((title + KISA_EK).length <= SINIR) return { absolute: title + KISA_EK };
  return { absolute: title };
}
