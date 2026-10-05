// Doktora bildirim: Gmail'deki Google Apps Script web uygulamasına gönderilir,
// o da Doç. Dr. Ergün'ün e-postasına (ve isteğe bağlı ikinci adrese) iletir.
// Ek hesap/ücret gerekmez.
import type { Mesaj } from './claude';

export async function doktoraBildir(
  arac: string,
  kaynak: string,
  girdi: Record<string, unknown>,
  gecmis: Mesaj[],
) {
  const url = process.env.BILDIRIM_URL;
  if (!url) {
    console.warn('BILDIRIM_URL tanımlı değil; bildirim gönderilmedi', arac, girdi);
    return;
  }
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({
      gizli: process.env.BILDIRIM_GIZLI || '',
      tur: arac, // randevu_talebi | doktora_ilet
      kaynak,
      girdi,
      sonMesajlar: gecmis.slice(-6),
    }),
    redirect: 'follow',
  });
  if (!res.ok) throw new Error(`Bildirim ${res.status}`);
}
