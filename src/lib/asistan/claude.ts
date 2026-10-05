// Claude API çağrısı + araç döngüsü (SDK gerektirmez, yalnızca fetch)
import { ARACLAR, type Kanal, sistemPromptu } from './bilgi';
import { doktoraBildir } from './bildirim';

export type Mesaj = { role: 'user' | 'assistant'; content: string };

type AracCagrisi = { ad: string; girdi: Record<string, unknown> };

const MODEL = process.env.ANTHROPIC_MODEL || 'claude-sonnet-5-5';
const API = 'https://api.anthropic.com/v1/messages';

/**
 * SAHTE SERVİS MODU — yalnızca geliştirme ve test içindir.
 * ASISTAN_FAKE=1 iken Claude API'ye HİÇBİR istek gitmez; sabit bir
 * cevap döner. Arayüzü (balon, diller, RTL, hata yolu) gerçek veri
 * göndermeden sınamak için kullanılır. Üretimde TANIMLAMAYIN.
 * Aynı yaklaşım e-posta tarafında MAIL_FAKE ile kullanılıyor.
 */
export const sahteAsistan = process.env.ASISTAN_FAKE === '1';

const SAHTE_CEVAP =
  '[SAHTE ASISTAN] Bu bir test cevabıdır; Claude API çağrılmadı. ' +
  'Gerçek yanıt için ANTHROPIC_API_KEY tanımlanmalı ve ASISTAN_FAKE kaldırılmalıdır.';

async function claudeCagir(body: unknown) {
  if (sahteAsistan) {
    return { content: [{ type: 'text', text: SAHTE_CEVAP }], stop_reason: 'end_turn' };
  }
  const res = await fetch(API, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'x-api-key': process.env.ANTHROPIC_API_KEY || '',
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`Claude API ${res.status}: ${await res.text()}`);
  return res.json();
}

/**
 * Hasta mesajına cevap üretir. Araç çağrılarını (randevu_talebi, doktora_ilet)
 * doktora bildirim olarak iletir ve nihai metni döndürür.
 * @param kaynak  Bildirimde görünecek kanal bilgisi (ör. "WhatsApp +90555...")
 */
export async function cevapUret(
  kanal: Kanal,
  gecmis: Mesaj[],
  kaynak: string,
): Promise<{ metin: string; araclar: AracCagrisi[] }> {
  const araclar: AracCagrisi[] = [];
  // Claude API, user ile başlayan ve user/assistant sırası bozulmayan bir dizi bekler
  const messages: any[] = duzelt(gecmis).slice(-20);

  for (let tur = 0; tur < 4; tur++) {
    const yanit = await claudeCagir({
      model: MODEL,
      max_tokens: kanal === 'email' ? 900 : 600,
      system: sistemPromptu(kanal),
      ...(kanal === 'linkedin' ? {} : { tools: ARACLAR }),
      messages,
    });

    const icerik: any[] = yanit.content || [];
    const kullanimlar = icerik.filter((b) => b.type === 'tool_use');

    if (yanit.stop_reason !== 'tool_use' || kullanimlar.length === 0) {
      const metin = icerik
        .filter((b) => b.type === 'text')
        .map((b) => b.text)
        .join('\n')
        .trim();
      return { metin, araclar };
    }

    messages.push({ role: 'assistant', content: icerik });
    const sonuclar = [];
    for (const k of kullanimlar) {
      araclar.push({ ad: k.name, girdi: k.input });
      let sonuc = 'İletildi.';
      try {
        await doktoraBildir(k.name, kaynak, k.input, gecmis);
      } catch (e) {
        console.error('Bildirim hatası', e);
        sonuc = 'İletim sırasında teknik sorun oldu; hastaya WhatsApp numarasını ver.';
      }
      sonuclar.push({ type: 'tool_result', tool_use_id: k.id, content: sonuc });
    }
    messages.push({ role: 'user', content: sonuclar });
  }
  return { metin: '', araclar };
}

/** Araçsız tek seferlik çağrı (sınıflandırma vb.) */
export async function basitCagri(system: string, kullanici: string, maxTokens = 300): Promise<string> {
  const yanit = await claudeCagir({
    model: MODEL,
    max_tokens: maxTokens,
    system,
    messages: [{ role: 'user', content: kullanici.slice(0, 8000) }],
  });
  return (yanit.content || [])
    .filter((b: any) => b.type === 'text')
    .map((b: any) => b.text)
    .join('')
    .trim();
}

/** Ardışık aynı roldeki mesajları birleştirir, boşları atar, user ile başlatır. */
export function duzelt(gecmis: Mesaj[]): Mesaj[] {
  const out: Mesaj[] = [];
  for (const m of gecmis) {
    const content = (m.content || '').toString().slice(0, 4000).trim();
    if (!content) continue;
    const son = out[out.length - 1];
    if (son && son.role === m.role) son.content += '\n' + content;
    else out.push({ role: m.role, content });
  }
  while (out.length && out[0].role !== 'user') out.shift();
  return out;
}
