/**
 * CLOUDFLARE TURNSTILE (prompt m.5.1 — spam koruması).
 *
 * Katmanlı koruma: honeypot + IP bazlı hız sınırı HER ZAMAN açıktır
 * (api/on-degerlendirme). Turnstile bunların üstüne gelen üçüncü katmandır
 * ve yalnızca anahtarlar tanımlıysa devreye girer.
 *
 * Devreye almak için:
 *   1. Cloudflare → Turnstile → yeni site ekleyin (alan adı: meurology.com).
 *   2. Vercel ortam değişkenleri:
 *      NEXT_PUBLIC_TURNSTILE_SITE_KEY = 0x4AAA...
 *      TURNSTILE_SECRET_KEY           = 0x4AAA...   (GİZLİ — public değil)
 *   3. Yeniden dağıtın.
 *
 * TODO-DOGRULA: Turnstile anahtarları kullanıcıdan bekleniyor.
 *
 * Anahtar yoksa widget render edilmez ve sunucu doğrulaması atlanır —
 * yayında bekleme metni veya boş kutu GÖRÜNMEZ (prompt m.2.3).
 */
export const turnstileConfig = {
  siteKey: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY?.trim() ?? '',
  verifyUrl: 'https://challenges.cloudflare.com/turnstile/v0/siteverify'
} as const;

export function turnstileEnabled(): boolean {
  return turnstileConfig.siteKey.length > 0;
}

/**
 * Sunucu tarafı doğrulama. Gizli anahtar yoksa doğrulama atlanır (true döner),
 * çünkü widget da gösterilmemiştir.
 */
export async function verifyTurnstile(token: string | undefined, ip: string): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY?.trim();
  if (!secret) return true; // Turnstile yapılandırılmamış.
  if (!token) return false;

  try {
    const body = new URLSearchParams({ secret, response: token });
    if (ip && ip !== 'unknown') body.set('remoteip', ip);
    const res = await fetch(turnstileConfig.verifyUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body,
      signal: AbortSignal.timeout(5000)
    });
    const data = (await res.json()) as { success?: boolean };
    return data.success === true;
  } catch (err) {
    console.error('[turnstile] doğrulama çağrısı başarısız:', err);
    // Doğrulama servisine ulaşılamadıysa başvuruyu reddetme — honeypot ve
    // hız sınırı zaten devrede; hastayı mağdur etmek daha kötü bir sonuç.
    return true;
  }
}
