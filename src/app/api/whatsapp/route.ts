// WhatsApp Business (YCloud, coexistence) → Claude → otomatik cevap
// YCloud panelinde Webhook URL: https://www.meurology.com/api/whatsapp?anahtar=<WEBHOOK_ANAHTARI>
// Abone olunacak olaylar: whatsapp.inbound_message.received (+ varsa SMB message echoes)
import { NextResponse } from 'next/server';
import { cevapUret } from '@/lib/asistan/claude';
import { gecmisGetir, gecmisKaydet, ilkKezMi, insanDevraldi, insanDevredeMi, hizSiniriAsildiMi } from '@/lib/asistan/depo';
import { assistantEnabled } from '@/config/assistant';

export const runtime = 'nodejs';
export const maxDuration = 60;

const YAZILI_DEGIL =
  'Mesajınızı aldık. Sesli mesaj, fotoğraf ve belgeleri asistanımız okuyamıyor; lütfen sorunuzu kısaca yazılı iletin. Rapor/görüntü için online ön değerlendirme: https://www.meurology.com/tr/online-consultation';

async function whatsappGonder(kime: string, metin: string) {
  const res = await fetch('https://api.ycloud.com/v2/whatsapp/messages/sendDirectly', {
    method: 'POST',
    headers: { 'content-type': 'application/json', 'X-API-Key': process.env.YCLOUD_API_KEY || '' },
    body: JSON.stringify({ from: process.env.WHATSAPP_NUMARA, to: kime, type: 'text', text: { body: metin } }),
  });
  if (!res.ok) console.error('YCloud gönderim hatası', res.status, await res.text());
}

export async function POST(req: Request) {
  if (!assistantEnabled()) return NextResponse.json({ ok: false }, { status: 404 });
  const anahtar = new URL(req.url).searchParams.get('anahtar');
  if (!process.env.WEBHOOK_ANAHTARI || anahtar !== process.env.WEBHOOK_ANAHTARI) {
    return NextResponse.json({ ok: false }, { status: 401 });
  }

  const olay = await req.json().catch(() => null);
  if (!olay?.type) return NextResponse.json({ ok: true });
  if (olay.id && !(await ilkKezMi(`wa:${olay.id}`))) return NextResponse.json({ ok: true, tekrar: true });

  // Doktor/sekreter telefondaki WhatsApp Business uygulamasından yazdıysa → asistan 12 saat susar
  if (/echo|smb_message/i.test(olay.type)) {
    const m = olay.whatsappMessage || olay.smbMessageEcho || olay.whatsappSmbMessageEcho || olay.data || {};
    if (m.to) await insanDevraldi(`wa:${m.to}`);
    return NextResponse.json({ ok: true });
  }

  if (olay.type !== 'whatsapp.inbound_message.received') return NextResponse.json({ ok: true });

  const m = olay.whatsappInboundMessage || {};
  const kisi: string = m.from;
  if (!kisi) return NextResponse.json({ ok: true });
  const anahtarKisi = `wa:${kisi}`;

  if (await insanDevredeMi(anahtarKisi)) return NextResponse.json({ ok: true, insan: true });
  if (await hizSiniriAsildiMi(anahtarKisi, 30, 60 * 60)) return NextResponse.json({ ok: true, sinir: true });

  const metin: string = m.type === 'text' ? m.text?.body || '' : m.button?.text || m.interactive?.button_reply?.title || '';
  if (!metin.trim()) {
    await whatsappGonder(kisi, YAZILI_DEGIL);
    return NextResponse.json({ ok: true });
  }

  const gecmis = await gecmisGetir(anahtarKisi);
  gecmis.push({ role: 'user', content: metin });

  const isim = m.customerProfile?.name ? ` (${m.customerProfile.name})` : '';
  try {
    const { metin: cevap } = await cevapUret('whatsapp', gecmis, `WhatsApp ${kisi}${isim}`);
    if (cevap) {
      await whatsappGonder(kisi, cevap);
      gecmis.push({ role: 'assistant', content: cevap });
    }
  } catch (e) {
    console.error(e);
    await whatsappGonder(kisi, 'Mesajınızı aldık, en kısa sürede size dönüş yapılacaktır.');
  }
  await gecmisKaydet(anahtarKisi, gecmis);
  return NextResponse.json({ ok: true });
}
