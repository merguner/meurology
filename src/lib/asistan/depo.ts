// Konuşma hafızası ve bayraklar — Upstash Redis (ücretsiz plan yeterli).
// UPSTASH_REDIS_REST_URL / UPSTASH_REDIS_REST_TOKEN tanımlı değilse
// sistem hafızasız çalışır (her mesaj tek başına cevaplanır).
import type { Mesaj } from './claude';

const URL = process.env.UPSTASH_REDIS_REST_URL;
const TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN;
export const hafizaVar = Boolean(URL && TOKEN);

async function komut(...args: (string | number)[]): Promise<any> {
  if (!hafizaVar) return null;
  const res = await fetch(URL!, {
    method: 'POST',
    headers: { Authorization: `Bearer ${TOKEN}`, 'content-type': 'application/json' },
    body: JSON.stringify(args.map(String)),
    cache: 'no-store',
  });
  if (!res.ok) return null;
  return (await res.json()).result;
}

const GUN = 60 * 60 * 24;

export async function gecmisGetir(kisi: string): Promise<Mesaj[]> {
  const v = await komut('GET', `gecmis:${kisi}`);
  try {
    return v ? JSON.parse(v) : [];
  } catch {
    return [];
  }
}

export async function gecmisKaydet(kisi: string, gecmis: Mesaj[]) {
  await komut('SET', `gecmis:${kisi}`, JSON.stringify(gecmis.slice(-20)), 'EX', 7 * GUN);
}

/** Doktor (veya sekreter) bu kişiye telefondan elle yazdıysa asistan 12 saat susar. */
export async function insanDevraldi(kisi: string) {
  await komut('SET', `insan:${kisi}`, '1', 'EX', 12 * 60 * 60);
}
export async function insanDevredeMi(kisi: string): Promise<boolean> {
  return (await komut('GET', `insan:${kisi}`)) === '1';
}

/** Aynı olayın (webhook tekrarı) iki kez işlenmesini engeller. true = ilk kez görülüyor. */
export async function ilkKezMi(olayId: string): Promise<boolean> {
  if (!hafizaVar) return true;
  return (await komut('SET', `olay:${olayId}`, '1', 'NX', 'EX', 2 * GUN)) === 'OK';
}

/** Kısa süreli işaret (ör. asistanın gönderdiği mesaj kimlikleri). */
export async function isaretle(anahtar: string, saniye = 60 * 60) {
  await komut('SET', `isaret:${anahtar}`, '1', 'EX', saniye);
}
export async function isaretliMi(anahtar: string): Promise<boolean> {
  return (await komut('GET', `isaret:${anahtar}`)) === '1';
}

/** Basit hız sınırı: anahtar başına pencere içinde en fazla `limit` istek. */
export async function hizSiniriAsildiMi(anahtar: string, limit: number, saniye: number) {
  if (!hafizaVar) return false;
  const n = Number(await komut('INCR', `hiz:${anahtar}`));
  if (n === 1) await komut('EXPIRE', `hiz:${anahtar}`, saniye);
  return n > limit;
}
