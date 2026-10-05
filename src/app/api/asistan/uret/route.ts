// Gmail / YouTube betiğinin (Google Apps Script) kullandığı uç nokta.
// Claude anahtarı yalnızca Vercel'de durur; betik bu adrese ortak gizli anahtarla gelir.
import { NextResponse } from 'next/server';
import { basitCagri, cevapUret, Mesaj } from '@/lib/asistan/claude';
import { KANALLAR, type Kanal } from '@/lib/asistan/bilgi';
import { assistantEnabled } from '@/config/assistant';

export const runtime = 'nodejs';
export const maxDuration = 60;

const SINIFLANDIRMA = `Bir üroloji kliniğinin (ME Urology, Doç. Dr. Müslüm Ergün) gelen kutusundaki e-postayı sınıflandır.
Yalnızca şu JSON'u döndür, başka hiçbir şey yazma: {"tur":"HASTA|DIGER|SPAM","dil":"tr|en|ar|...","ozet":"tek cümle"}
- HASTA: hasta veya hasta yakını; hastalık, tedavi, ameliyat, randevu, fiyat, online değerlendirme, sağlık turizmi soran kişi (aracı kurum değil, bireysel).
- DIGER: akademik (dergi, kongre, hakemlik), hastane/kurum yazışması, iş birliği, aracı kurum, tedarikçi, banka, resmi kurum, kişisel yazışma, bildirimler.
- SPAM: reklam, bülten, kampanya, dolandırıcılık/oltalama, anlamsız içerik.
Emin değilsen DIGER seç.`;

export async function POST(req: Request) {
  if (!assistantEnabled()) {
    return NextResponse.json({ hata: 'Bulunamadı' }, { status: 404 });
  }
  const govde = await req.json().catch(() => null);
  if (!govde || !process.env.BILDIRIM_GIZLI || govde.gizli !== process.env.BILDIRIM_GIZLI) {
    return NextResponse.json({ hata: 'yetkisiz' }, { status: 401 });
  }

  try {
    if (govde.gorev === 'siniflandir') {
      const ham = await basitCagri(SINIFLANDIRMA, String(govde.metin || ''), 200);
      const json = ham.slice(ham.indexOf('{'), ham.lastIndexOf('}') + 1);
      let sonuc: any = { tur: 'DIGER', dil: 'tr', ozet: '' };
      try {
        sonuc = { ...sonuc, ...JSON.parse(json) };
      } catch {}
      if (!['HASTA', 'DIGER', 'SPAM'].includes(sonuc.tur)) sonuc.tur = 'DIGER';
      return NextResponse.json(sonuc);
    }

    const kanal = govde.kanal as Kanal;
    if (!KANALLAR.includes(kanal)) return NextResponse.json({ hata: 'kanal' }, { status: 400 });
    const mesajlar: Mesaj[] = Array.isArray(govde.mesajlar) ? govde.mesajlar : [];
    const { metin, araclar } = await cevapUret(kanal, mesajlar, String(govde.kaynak || kanal));
    return NextResponse.json({ metin, araclar: araclar.map((a) => a.ad) });
  } catch (e: any) {
    console.error(e);
    return NextResponse.json({ hata: String(e?.message || e) }, { status: 500 });
  }
}
