/**
 * BAŞVURU TESLİMİ — ön değerlendirme formu ve online danışmanlık talebinin
 * ORTAK parçaları: HTML kaçışı, istemci IP'si, hız sınırı ve CRM kaydı.
 *
 * 11 Eki 2026'ya kadar bunlar yalnızca api/on-degerlendirme içindeydi.
 * Online danışmanlık talebi de sunucuya gönderilmeye başlayınca iki ayrı
 * kopya yerine tek kaynak yapıldı: CRM kaydındaki iki sessiz arıza
 * (8 Eki 2026, aşağıda) bir kez çözüldü ve iki uç da aynı çözümü kullanır.
 */

/** HTML enjeksiyonunu önlemek için kaçış. */
export function esc(v: unknown): string {
  return String(v ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/** İstemci IP'sini proxy başlıklarından çıkarır (yoksa 'unknown'). */
export function clientIp(request: Request): string {
  const xff = request.headers.get('x-forwarded-for');
  if (xff) return xff.split(',')[0].trim();
  return request.headers.get('x-real-ip') || 'unknown';
}

/**
 * BASİT IP BAZLI HIZ SINIRLAMA (sabit pencere). Her uç kendi sayacını oluşturur.
 * NOT: Bellek-içi (Map) — tek sunucu süreci için çalışır. Vercel/serverless veya
 * çok örnekli dağıtımda örnekler arası paylaşılmaz; o durumda Upstash Redis vb.
 * merkezî bir depo gerekir.
 */
export function createRateLimiter(max: number, windowMs: number) {
  const hits = new Map<string, { count: number; resetAt: number }>();
  return function check(ip: string): { ok: boolean; retryAfter: number } {
    const now = Date.now();
    // Sızıntıyı önlemek için ara sıra süresi geçmiş kayıtları temizle.
    if (hits.size > 5000) {
      for (const [k, v] of hits) if (now > v.resetAt) hits.delete(k);
    }
    const entry = hits.get(ip);
    if (!entry || now > entry.resetAt) {
      hits.set(ip, { count: 1, resetAt: now + windowMs });
      return { ok: true, retryAfter: 0 };
    }
    if (entry.count >= max) {
      return { ok: false, retryAfter: Math.ceil((entry.resetAt - now) / 1000) };
    }
    entry.count++;
    return { ok: true, retryAfter: 0 };
  };
}

/** CRM (Google E-Tablo) satırı — Apps Script'in yazdığı sütunlarla aynı adlar. */
export interface CrmRecord {
  at: string;
  name: string;
  country: string;
  email: string;
  phone: string;
  treatment: string;
  message: string;
  locale: string;
  consentTextVersion: string;
}

/**
 * CRM KAYDI. CRM_WEBHOOK_URL tanımlı değilse hiçbir şey yapmaz. Başarısızlık
 * başvuruyu geçersiz kılmaz (e-posta birincil kanaldır); yalnızca günlüğe yazılır.
 */
export async function postToCrm(record: CrmRecord, logPrefix: string): Promise<void> {
  const webhook = process.env.CRM_WEBHOOK_URL;
  if (!webhook) return;
  try {
    /**
     * Authorization başlığı YALNIZCA jeton ASCII ise eklenir.
     *
     * 8 Eki 2026'da Türkçe karakter içeren bir jetonla şu hata alındı:
     *   "Cannot convert argument to a ByteString because the character at
     *    index 79 has a value of 305" — 305, 'ı' harfinin kodu.
     * HTTP başlık değerleri latin-1 taşır; 'ı', 'ş', 'ğ' gibi harfler
     * fetch'i daha istek gönderilmeden patlatır. Sonuç sessizdi: başvuru
     * ve e-posta sorunsuz gidiyor, yalnızca CRM kaydı hiç oluşmuyordu.
     *
     * Jeton gövdede de gönderildiği için (aşağıda) başlığın atlanması
     * Apps Script tarafında hiçbir şeyi bozmaz — o zaten başlıkları
     * okuyamıyor. Başlık bekleyen gerçek CRM'ler ASCII jeton kullanır.
     */
    const jeton = process.env.CRM_WEBHOOK_TOKEN;
    const jetonAsciiMi = jeton ? /^[\x20-\x7E]*$/.test(jeton) : false;
    if (jeton && !jetonAsciiMi) {
      console.warn(`${logPrefix} CRM jetonu ASCII değil; Authorization başlığı atlandı, jeton gövdede gönderiliyor.`);
    }

    const res = await fetch(webhook, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(jeton && jetonAsciiMi ? { Authorization: `Bearer ${jeton}` } : {})
      },
      body: JSON.stringify({
        ...record,
        /**
         * Jeton GÖVDEDE de gönderilir — yalnızca Authorization başlığı yetmiyor.
         * Google Apps Script'in doPost(e) fonksiyonu istek BAŞLIKLARINI okuyamaz;
         * alıcı Apps Script ise başlıktaki jeton ona hiç ulaşmaz. Apps Script
         * web uygulamasının adresi herkese açık olduğundan, jeton olmadan adresi
         * ele geçiren biri tabloya sahte satır yazabilirdi.
         */
        ...(jeton ? { token: jeton } : {})
      }),
      signal: AbortSignal.timeout(5000)
    });
    /**
     * YANIT GÖVDESİ DE OKUNUR — yalnızca HTTP durumuna bakmak yetmiyor.
     *
     * Google Apps Script hata durumlarında da HTTP 200 döner; hatayı gövdede
     * bildirir (ör. {"ok":false,"error":"yetkisiz"}). 8 Eki 2026'da bu yüzden
     * sessiz bir arıza yaşandı: jeton uyuşmadığı için hiçbir satır yazılmıyordu
     * ama günlükte tek bir hata satırı bile yoktu, çünkü res.ok true idi.
     */
    const govde = (await res.text()).slice(0, 300);
    if (!res.ok) {
      console.error(`${logPrefix} CRM webhook yanıtı başarısız:`, res.status, govde);
    } else if (!/"ok"\s*:\s*true/.test(govde)) {
      console.error(`${logPrefix} CRM webhook 200 döndü ama kayıt YAZILMADI:`, govde);
    } else {
      console.info(`${logPrefix} CRM kaydı yazıldı.`);
    }
  } catch (err) {
    console.error(`${logPrefix} CRM webhook çağrılamadı (başvuru yine de geçerli):`, err);
  }
}
