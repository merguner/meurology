/**
 * OLAY ÖLÇÜMÜ
 * ------------------------------------------------------------------
 * SAĞLIK VERİSİ OLAY PARAMETRESİ OLARAK GÖNDERİLMEZ.
 *
 * Bu kural kodun içine gömülüdür: `track()` yalnızca aşağıdaki iki
 * parametreyi kabul eder ve başka hiçbir alanı iletmez.
 *   - source     : hangi düğme/sayfa (ör. 'anasayfa', 'tedavi-sayfasi')
 *   - to_locale  : yalnızca dil değişiminde, hedef dil kodu
 * Buna ek olarak sayfa YOLU (page_path) gönderilir.
 *
 * Şikâyet metni, seçilen tedavi, ad, e-posta, telefon, ülke veya
 * herhangi bir serbest metin BİLEREK gönderilmez. Tedavi seçimi de
 * sağlık verisidir: "form_submit" olayı hangi tedavinin seçildiğini
 * TAŞIMAZ; yalnızca formun gönderildiğini bildirir.
 *
 * Çağrılar, kullanıcı onay vermediyse sessizce hiçbir şey yapmaz:
 * gtag ve fbq yalnızca onaydan sonra sayfaya eklenir, dolayısıyla
 * bu fonksiyon o ana kadar boş bir işlemdir.
 */

export type TrackedEvent =
  | 'whatsapp_click'
  | 'phone_click'
  | 'email_click'
  | 'form_submit'
  | 'consultation_slot_selected'
  | 'consultation_booked'
  | 'language_switch';

export interface TrackParams {
  /** Hangi düğme veya sayfadan geldiği — serbest metin DEĞİL, kısa etiket. */
  source?: string;
  /** Yalnızca language_switch için hedef dil kodu. */
  toLocale?: string;
}

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

/** Etiketi güvenli bir forma indirger: yalnızca harf, rakam ve tire. */
function safeTag(v: string): string {
  return v
    .toLowerCase()
    .replace(/[^a-z0-9-]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 48);
}

/**
 * META STANDART OLAYLARI.
 *
 * Meta reklamları yalnızca STANDART olaylara göre optimize edilebilir: bir
 * kampanyayı "başvuru getir" diye hedeflemek için Pixel'in `Lead` görmesi
 * gerekir. 9 Eki 2026'ya kadar her olay `trackCustom` ile gidiyordu, yani
 * reklam verildiğinde hiçbir dönüşüm optimizasyon hedefi olarak seçilemezdi.
 *
 * Eşlemede olmayanlar (dil değişimi, saat seçimi) özel olay olarak kalır;
 * onlar dönüşüm değil, ara adım.
 */
const META_STANDARD: Partial<Record<TrackedEvent, string>> = {
  form_submit: 'Lead',
  whatsapp_click: 'Contact',
  phone_click: 'Contact',
  email_click: 'Contact',
  consultation_booked: 'Schedule'
};

export function track(event: TrackedEvent, params: TrackParams = {}): void {
  if (typeof window === 'undefined') return;

  const payload: Record<string, string> = {
    page_path: window.location.pathname
  };
  if (params.source) payload.source = safeTag(params.source);
  if (params.toLocale) payload.to_locale = safeTag(params.toLocale);

  try {
    window.gtag?.('event', event, payload);
  } catch {
    /* ölçüm hatası kullanıcıyı etkilemez */
  }
  try {
    const standart = META_STANDARD[event];
    if (standart) {
      // Asıl olay adı parametrede kalır: WhatsApp, telefon ve e-posta üçü de
      // "Contact" olarak gider ama Events Manager'da birbirinden ayrılabilir.
      window.fbq?.('track', standart, { ...payload, event_name: event });
    } else {
      window.fbq?.('trackCustom', event, payload);
    }
  } catch {
    /* ölçüm hatası kullanıcıyı etkilemez */
  }
}

/**
 * WhatsApp bağlantısındaki kaynak etiketini ([TR-ANASAYFA]) çıkarır.
 * Mesajın içine konan bu etiket zaten hangi sayfadan gelindiğini
 * gösterir; ayrı bir parametre uydurmak yerine onu kullanırız.
 */
export function whatsappSourceFromHref(href: string): string | undefined {
  try {
    const url = new URL(href, window.location.origin);
    const text = url.searchParams.get('text');
    if (!text) return undefined;
    // Kod artık mesajın sonunda değil, ilk satırın sonunda (ülke sorusu en
    // altta). Bu yüzden ifade satır sonuna bağlanmaz; ilk etiket alınır.
    const m = text.match(/\[([A-Z0-9-]+)\]/);
    return m ? m[1] : undefined;
  } catch {
    return undefined;
  }
}
