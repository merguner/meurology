// Instagram + Facebook (Meta Graph API) → Claude → otomatik cevap
// - Instagram DM ve Facebook Messenger mesajları
// - Instagram ve Facebook gönderi yorumları (herkese açık kısa cevap + gerekirse özel mesaj)
// Meta uygulamasında Webhook URL: https://www.meurology.com/api/meta
// Doğrulama jetonu: META_VERIFY_TOKEN
import { NextResponse } from 'next/server';
import crypto from 'crypto';
import { cevapUret } from '@/lib/asistan/claude';
import type { Kanal } from '@/lib/asistan/bilgi';
import {
  gecmisGetir, gecmisKaydet, ilkKezMi, insanDevraldi, insanDevredeMi,
  hizSiniriAsildiMi, isaretle, isaretliMi,
} from '@/lib/asistan/depo';
import { assistantEnabled } from '@/config/assistant';

export const runtime = 'nodejs';
export const maxDuration = 60;

const SURUM = process.env.META_GRAPH_VERSION || 'v23.0';
const GRAPH = `https://graph.facebook.com/${SURUM}`;
const YAZILI_DEGIL =
  'Mesajınızı aldık. Sesli mesaj, fotoğraf ve belgeleri asistanımız okuyamıyor; lütfen sorunuzu kısaca yazılı iletin. Rapor/görüntü için online ön değerlendirme: https://www.meurology.com/tr/online-consultation';

// ───────── Webhook doğrulama (Meta uygulama kurulumunda bir kez) ─────────
export async function GET(req: Request) {
  if (!assistantEnabled()) return new Response('Bulunamadı', { status: 404 });
  const p = new URL(req.url).searchParams;
  if (p.get('hub.mode') === 'subscribe' && p.get('hub.verify_token') === process.env.META_VERIFY_TOKEN) {
    return new Response(p.get('hub.challenge') || '', { status: 200 });
  }
  return new Response('Yetkisiz', { status: 403 });
}

// ───────── Graph API yardımcıları ─────────
async function graphPost(yol: string, govde: unknown) {
  const res = await fetch(`${GRAPH}/${yol}?access_token=${process.env.META_PAGE_TOKEN}`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(govde),
  });
  const veri = await res.json().catch(() => ({}));
  if (!res.ok) console.error('Graph API hatası', yol, res.status, JSON.stringify(veri));
  return veri;
}

async function mesajGonder(alici: { id?: string; comment_id?: string }, metin: string) {
  const veri = await graphPost(`${process.env.META_PAGE_ID}/messages`, {
    recipient: alici,
    messaging_type: 'RESPONSE',
    message: { text: metin.slice(0, 1900) },
  });
  if (veri?.message_id) await isaretle(`mid:${veri.message_id}`); // kendi echo'muzu tanımak için
  return veri;
}

function imzaGecerli(ham: string, imza: string | null) {
  const sir = process.env.META_APP_SECRET;
  if (!sir || !imza) return false;
  const beklenen = 'sha256=' + crypto.createHmac('sha256', sir).update(ham).digest('hex');
  const a = Buffer.from(beklenen);
  const b = Buffer.from(imza);
  return a.length === b.length && crypto.timingSafeEqual(a, b);
}

// ───────── Ana işleyici ─────────
export async function POST(req: Request) {
  if (!assistantEnabled()) return NextResponse.json({ ok: false }, { status: 404 });
  const ham = await req.text();
  if (!imzaGecerli(ham, req.headers.get('x-hub-signature-256'))) {
    return NextResponse.json({ ok: false }, { status: 401 });
  }
  const govde = JSON.parse(ham);
  const platform: 'instagram' | 'facebook' = govde.object === 'instagram' ? 'instagram' : 'facebook';

  for (const giris of govde.entry || []) {
    for (const olay of giris.messaging || []) {
      try {
        await mesajIsle(platform, olay);
      } catch (e) {
        console.error('Mesaj işleme hatası', e);
      }
    }
    for (const degisim of giris.changes || []) {
      try {
        await yorumIsle(platform, giris.id, degisim);
      } catch (e) {
        console.error('Yorum işleme hatası', e);
      }
    }
  }
  return NextResponse.json({ ok: true });
}

// ───────── Özel mesaj (DM / Messenger) ─────────
async function mesajIsle(platform: 'instagram' | 'facebook', olay: any) {
  const msj = olay.message;
  if (!msj) return; // okundu, tepki vb.

  // Echo = sayfanın/hesabın gönderdiği mesaj. Asistanınki değilse bir insan cevap vermiştir → 12 saat sus.
  if (msj.is_echo) {
    const bizim = (await isaretliMi(`mid:${msj.mid}`)) || (msj.app_id && String(msj.app_id) === process.env.META_APP_ID);
    if (!bizim && olay.recipient?.id) await insanDevraldi(`${platform}:${olay.recipient.id}`);
    return;
  }

  const kisi = olay.sender?.id;
  if (!kisi || !(await ilkKezMi(`meta:${msj.mid}`))) return;
  const anahtar = `${platform}:${kisi}`;
  if (await insanDevredeMi(anahtar)) return;
  if (await hizSiniriAsildiMi(anahtar, 30, 60 * 60)) return;

  const metin: string = msj.text || msj.quick_reply?.payload || '';
  if (!metin.trim()) {
    await mesajGonder({ id: kisi }, YAZILI_DEGIL);
    return;
  }

  const gecmis = await gecmisGetir(anahtar);
  gecmis.push({ role: 'user', content: metin });
  const etiket = platform === 'instagram' ? 'Instagram DM' : 'Facebook Messenger';
  try {
    const { metin: cevap } = await cevapUret(platform as Kanal, gecmis, `${etiket} (kullanıcı ${kisi})`);
    if (cevap) {
      await mesajGonder({ id: kisi }, cevap);
      gecmis.push({ role: 'assistant', content: cevap });
    }
  } catch (e) {
    console.error(e);
    await mesajGonder({ id: kisi }, 'Mesajınızı aldık, en kısa sürede size dönüş yapılacaktır.');
  }
  await gecmisKaydet(anahtar, gecmis);
}

// ───────── Gönderi yorumları ─────────
async function yorumIsle(platform: 'instagram' | 'facebook', hesapId: string, degisim: any) {
  const v = degisim.value || {};
  let yorumId: string, metin: string, yazarId: string, yazarAd: string;

  if (platform === 'instagram') {
    if (degisim.field !== 'comments') return;
    if (v.parent_id) return; // yalnızca ana yorumlar (yanıt zincirlerine girme)
    yorumId = v.id;
    metin = v.text || '';
    yazarId = v.from?.id;
    yazarAd = v.from?.username || '';
  } else {
    if (degisim.field !== 'feed' || v.item !== 'comment' || v.verb !== 'add') return;
    if (v.parent_id && v.parent_id !== v.post_id) return; // yalnızca ana yorumlar
    yorumId = v.comment_id;
    metin = v.message || '';
    yazarId = v.from?.id;
    yazarAd = v.from?.name || '';
  }

  if (!yorumId || !metin.trim()) return;
  if (yazarId && (yazarId === hesapId || yazarId === process.env.META_PAGE_ID || yazarId === process.env.META_IG_ID)) return; // kendi yorumumuz
  if (!(await ilkKezMi(`yorum:${yorumId}`))) return;
  if (await hizSiniriAsildiMi(`yorum:${yazarId || yorumId}`, 5, 60 * 60)) return;

  const yer = platform === 'instagram' ? 'Instagram' : 'Facebook';
  const { metin: cevapHam } = await cevapUret(
    'yorum',
    [{ role: 'user', content: `[${yer} gönderi yorumu, yazan: ${yazarAd || 'bilinmiyor'}]\n${metin}` }],
    `${yer} yorumu (${yazarAd || yazarId}) — yorum ${yorumId}`,
  );
  let cevap = (cevapHam || '').trim();
  if (!cevap || cevap.includes('[ATLA]')) return;

  const ozel = cevap.startsWith('[OZEL]');
  cevap = cevap.replace('[OZEL]', '').trim();

  // Herkese açık cevap
  if (platform === 'instagram') await graphPost(`${yorumId}/replies`, { message: cevap });
  else await graphPost(`${yorumId}/comments`, { message: cevap });

  // Kişisel soru ise özel mesajla devam (Meta "private reply": yorum başına bir kez, 7 gün içinde)
  if (ozel) {
    const anahtar = `${platform}:${yazarId}`;
    const gecmis = [{ role: 'user' as const, content: `(${yer} gönderisine yazdığı yorum) ${metin}` }];
    const { metin: dm } = await cevapUret(platform as Kanal, gecmis, `${yer} yorumundan özel mesaj (${yazarAd || yazarId})`);
    if (dm) {
      await mesajGonder({ comment_id: yorumId }, dm);
      if (yazarId) await gecmisKaydet(anahtar, [...gecmis, { role: 'assistant', content: dm }]);
    }
  }
}
