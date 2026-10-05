/**
 * Web sitesi sohbet balonu → Claude.
 * Kaynak: merguner/andrology, ai-asistan dalı.
 *
 * ANTHROPIC_API_KEY tanımlı değilse uç nokta 404 döner (balon da hiç
 * render edilmez — bkz. config/assistant.ts → assistantEnabled).
 */
import { NextResponse } from 'next/server';
import { cevapUret, type Mesaj } from '@/lib/asistan/claude';
import { hizSiniriAsildiMi } from '@/lib/asistan/depo';
import { assistantEnabled } from '@/config/assistant';
import { siteConfig } from '@/config/site';

export const runtime = 'nodejs';
export const maxDuration = 60;

const WA = siteConfig.phoneIntl;

export async function POST(req: Request) {
  if (!assistantEnabled()) {
    return NextResponse.json({ hata: 'Bulunamadı' }, { status: 404 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ hata: 'Geçersiz istek' }, { status: 400 });
  }

  const g = body as { mesajlar?: unknown; oturum?: unknown };
  const mesajlar: Mesaj[] = Array.isArray(g?.mesajlar) ? (g.mesajlar as Mesaj[]) : [];
  const temiz = mesajlar
    .filter((m) => (m?.role === 'user' || m?.role === 'assistant') && typeof m.content === 'string')
    .slice(-20)
    .map((m) => ({ role: m.role, content: m.content.slice(0, 2000) }));

  if (!temiz.length || temiz[temiz.length - 1].role !== 'user') {
    return NextResponse.json({ hata: 'Mesaj yok' }, { status: 400 });
  }

  const ip = (req.headers.get('x-forwarded-for') || 'bilinmiyor').split(',')[0].trim();
  if (await hizSiniriAsildiMi(`web:${ip}`, 40, 60 * 60)) {
    return NextResponse.json({
      cevap: `Çok sayıda mesaj gönderildi. Lütfen WhatsApp üzerinden yazın: ${WA}`
    });
  }

  const oturum = String(g?.oturum || '').slice(0, 40) || 'anonim';
  try {
    const { metin } = await cevapUret('web', temiz, `Web sitesi sohbeti (oturum ${oturum})`);
    return NextResponse.json({
      cevap: metin || `Şu an cevap veremiyorum. Lütfen WhatsApp üzerinden yazın: ${WA}`
    });
  } catch (e) {
    /**
     * Hata GÖVDESİ loglanmaz: hastanın yazdığı metin sağlık verisi
     * olabilir ve sunucu günlüğüne düşmemelidir.
     */
    console.error('Asistan cevap hatası:', e instanceof Error ? e.message : 'bilinmeyen');
    return NextResponse.json(
      { cevap: `Teknik bir sorun oluştu. Lütfen WhatsApp üzerinden yazın: ${WA}` },
      { status: 200 }
    );
  }
}
