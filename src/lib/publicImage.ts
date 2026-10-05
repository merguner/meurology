import fs from 'node:fs';
import path from 'node:path';

/**
 * /public ALTINDAKİ BİR GÖRSELİN GERÇEKTEN VAR OLUP OLMADIĞI.
 *
 * Yer tutucu görseller için: dosya henüz eklenmemişse ilgili blok HİÇ
 * render edilmez. Böylece yayında kırık görsel kutusu çıkmaz ve görsel
 * eklendiği anda — kod değişmeden — kendiliğinden görünür.
 *
 * YALNIZCA SUNUCU TARAFINDA çağrılır (derleme sırasında çalışır);
 * istemci bileşenlerine sonucu prop olarak geçirin.
 */
const cache = new Map<string, boolean>();

export function publicImageExists(publicPath: string): boolean {
  const key = publicPath.replace(/^\/+/, '');
  const hit = cache.get(key);
  if (hit !== undefined) return hit;
  let ok = false;
  try {
    ok = fs.statSync(path.join(process.cwd(), 'public', key)).isFile();
  } catch {
    ok = false;
  }
  cache.set(key, ok);
  return ok;
}

/** Dosya varsa yolu, yoksa undefined — doğrudan next/image'e verilebilir. */
export function publicImage(publicPath: string): string | undefined {
  return publicImageExists(publicPath) ? publicPath : undefined;
}
