'use client';
/**
 * Sitedeki yapay zekâ sohbet balonu.
 * Kaynak: merguner/andrology, ai-asistan dalı — bu projeye uyarlandı.
 *
 * Uyarlamalar:
 *  - Kaynak bileşen yalnızca tr/en/ar biliyordu ve diğer diller Türkçeye
 *    düşüyordu. Site 6 dilliyken de/ru/fr metinleri eklenmişti; 9 Eki
 *    2026'da site tr/en/ar'a indirilince onlar da kaldırıldı.
 *  - Sabit renkler yerine sitenin tasarım değişkenleri kullanılır; böylece
 *    koyu temada da doğru görünür.
 *  - Konum mantıksal (inset-inline-end) verilir: RTL'de balon, WhatsApp
 *    düğmesiyle aynı tarafta ve onun ÜSTÜNDE durur.
 *  - Kapat düğmesinin erişilebilir adı çevrilir.
 *
 * Balonun gösterilip gösterilmeyeceğine SUNUCU karar verir
 * (config/assistant.ts → assistantEnabled); ANTHROPIC_API_KEY yoksa bu
 * bileşen hiç render edilmez.
 */
import { useEffect, useRef, useState } from 'react';

type Dil = 'tr' | 'en' | 'ar';
type Mesaj = { role: 'user' | 'assistant'; content: string };

const DILLER: Dil[] = ['tr', 'en', 'ar',];

const METIN: Record<Dil, Record<string, string>> = {
  tr: {
    baslik: 'ME Urology Asistanı',
    alt: 'Yapay zekâ · genellikle anında yanıt',
    selam:
      'Merhaba, ben ME Urology’nin yapay zekâ asistanıyım. Doç. Dr. Müslüm Ergün’ün tedavileri, randevu ve online danışmanlık hakkında yardımcı olabilirim. Size nasıl yardımcı olabilirim?',
    yer: 'Mesajınızı yazın…',
    gonder: 'Gönder',
    not: 'Yapay zekâ asistanıdır, tanı koymaz. Acil durumda 112’yi arayın. Lütfen kimlik numarası veya ayrıntılı tıbbi geçmiş yazmayın.',
    gizlilik: 'Gizlilik',
    ac: 'Soru sorun',
    kapat: 'Sohbeti kapat',
    yaziyor: 'Yazıyor…'
  },
  en: {
    baslik: 'ME Urology Assistant',
    alt: 'AI assistant · usually replies instantly',
    selam:
      'Hello, I am ME Urology’s AI assistant. I can help with Assoc. Prof. Dr. Müslüm Ergün’s treatments, appointments and online consultation. How can I help you?',
    yer: 'Type your message…',
    gonder: 'Send',
    not: 'AI assistant, does not diagnose. In an emergency call your local emergency number. Please do not type identity numbers or a detailed medical history.',
    gizlilik: 'Privacy',
    ac: 'Ask a question',
    kapat: 'Close chat',
    yaziyor: 'Typing…'
  },
  ar: {
    baslik: 'مساعد ME Urology',
    alt: 'مساعد ذكاء اصطناعي · رد فوري عادةً',
    selam:
      'مرحبًا، أنا المساعد الذكي لعيادة ME Urology. يمكنني مساعدتك بشأن علاجات الدكتور مسلم أرغون والمواعيد والاستشارة عبر الإنترنت. كيف أساعدك؟',
    yer: 'اكتب رسالتك…',
    gonder: 'إرسال',
    not: 'مساعد ذكاء اصطناعي ولا يقدّم تشخيصًا. في الطوارئ اتصل برقم الإسعاف المحلي. ويُرجى عدم كتابة رقم الهوية أو تاريخ مرضي مفصّل.',
    gizlilik: 'الخصوصية',
    ac: 'اسألنا',
    kapat: 'إغلاق المحادثة',
    yaziyor: 'يكتب…'
  },
};

export default function AsistanSohbet({
  dil = 'tr',
  gizlilikLinki,
  /**
   * WhatsApp düğmesinin üstünde durması için alt boşluk.
   * Masaüstünde WhatsApp balonu bottom:20px + 56px yükseklik = 76px;
   * mobilde alt çubuk 52px. 96px ikisini de aşar.
   */
  altBosluk = 96
}: {
  dil?: string;
  gizlilikLinki?: string;
  altBosluk?: number;
}) {
  const d: Dil = (DILLER as string[]).includes(dil) ? (dil as Dil) : 'tr';
  const t = METIN[d];
  const [acik, setAcik] = useState(false);
  const [mesajlar, setMesajlar] = useState<Mesaj[]>([]);
  const [girdi, setGirdi] = useState('');
  const [bekliyor, setBekliyor] = useState(false);
  const oturum = useRef('');
  const liste = useRef<HTMLDivElement>(null);

  useEffect(() => {
    oturum.current = Math.random().toString(36).slice(2, 10);
  }, []);
  useEffect(() => {
    liste.current?.scrollTo({ top: liste.current.scrollHeight, behavior: 'smooth' });
  }, [mesajlar, bekliyor]);

  async function gonder() {
    const metin = girdi.trim();
    if (!metin || bekliyor) return;
    const yeni: Mesaj[] = [...mesajlar, { role: 'user', content: metin }];
    setMesajlar(yeni);
    setGirdi('');
    setBekliyor(true);
    try {
      const res = await fetch('/api/asistan', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        // Karşılama mesajı modele gönderilmez; konuşma kullanıcı mesajıyla başlar.
        body: JSON.stringify({ mesajlar: yeni.slice(-20), oturum: oturum.current })
      });
      const veri = await res.json();
      setMesajlar([...yeni, { role: 'assistant', content: veri.cevap || veri.hata || '…' }]);
    } catch {
      setMesajlar([...yeni, { role: 'assistant', content: 'WhatsApp: +90 532 063 09 69' }]);
    } finally {
      setBekliyor(false);
    }
  }

  const balon = (m: Mesaj, i: number) => (
    <div
      key={i}
      dir="auto"
      className={
        m.role === 'user'
          ? 'max-w-[85%] self-end whitespace-pre-wrap rounded-2xl bg-primary px-3 py-2 text-sm leading-relaxed text-primary-fg'
          : 'max-w-[85%] self-start whitespace-pre-wrap rounded-2xl border border-border bg-surface px-3 py-2 text-sm leading-relaxed text-fg'
      }
    >
      {linkle(m.content)}
    </div>
  );

  return (
    <div
      /**
       * `end-4` (inset-inline-end) kullanılır: RTL'de balon sola geçer ve
       * WhatsApp düğmesiyle aynı tarafta kalır.
       */
      className="fixed end-4 z-40 print:hidden"
      style={{ bottom: altBosluk }}
    >
      {acik && (
        <div
          role="dialog"
          aria-label={t.baslik}
          className="mb-3 flex h-[min(540px,calc(100vh-180px))] w-[min(370px,calc(100vw-32px))] flex-col overflow-hidden rounded-2xl border border-border bg-bg shadow-2xl"
        >
          <div className="flex items-center gap-2.5 bg-surface-2 px-4 py-3">
            <span aria-hidden className="h-2.5 w-2.5 shrink-0 rounded-full bg-success" />
            <div className="min-w-0 flex-1">
              <div className="truncate text-sm font-bold text-fg">{t.baslik}</div>
              <div className="truncate text-xs text-muted">{t.alt}</div>
            </div>
            <button
              type="button"
              onClick={() => setAcik(false)}
              aria-label={t.kapat}
              className="-me-1 rounded-lg px-2 py-1 text-xl leading-none text-muted transition-colors hover:bg-border hover:text-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              ×
            </button>
          </div>

          <div ref={liste} className="flex flex-1 flex-col gap-2 overflow-y-auto bg-surface-2 p-3.5">
            {balon({ role: 'assistant', content: t.selam }, -1)}
            {mesajlar.map(balon)}
            {bekliyor && <div className="text-sm text-muted">{t.yaziyor}</div>}
          </div>

          <div className="border-t border-border bg-surface p-2.5">
            <div className="flex gap-2">
              {/*
                fontSize 16px altına düşürülmez: iOS Safari daha küçük
                yazı tipinde alana odaklanınca sayfayı yakınlaştırıyor.
              */}
              <textarea
                dir="auto"
                value={girdi}
                onChange={(e) => setGirdi(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    gonder();
                  }
                }}
                rows={1}
                maxLength={2000}
                placeholder={t.yer}
                aria-label={t.yer}
                className="flex-1 resize-none rounded-lg border border-border bg-bg px-2.5 py-2 text-base text-fg placeholder:text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />
              <button
                type="button"
                onClick={gonder}
                disabled={bekliyor || !girdi.trim()}
                className="rounded-lg bg-primary px-3.5 text-sm font-bold text-primary-fg transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50"
              >
                {t.gonder}
              </button>
            </div>
            <p className="mt-1.5 text-[11px] leading-relaxed text-muted">
              {t.not}{' '}
              {gizlilikLinki && (
                <a href={gizlilikLinki} className="text-primary underline underline-offset-2">
                  {t.gizlilik}
                </a>
              )}
            </p>
          </div>
        </div>
      )}

      {!acik && (
        <button
          type="button"
          onClick={() => setAcik(true)}
          className="flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-3 text-sm font-bold text-fg shadow-lg transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
        >
          <svg aria-hidden viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          </svg>
          {t.ac}
        </button>
      )}
    </div>
  );
}

/** Metindeki bağlantıları tıklanabilir yapar. */
function linkle(metin: string) {
  const parcalar = metin.split(/(https?:\/\/[^\s)]+|www\.[^\s)]+)/g);
  return parcalar.map((p, i) =>
    /^(https?:\/\/|www\.)/.test(p) ? (
      <a
        key={i}
        href={p.startsWith('http') ? p : `https://${p}`}
        target="_blank"
        rel="noopener noreferrer"
        className="underline underline-offset-2"
      >
        {p}
      </a>
    ) : (
      <span key={i}>{p}</span>
    )
  );
}
