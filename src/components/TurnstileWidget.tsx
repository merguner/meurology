'use client';

import { useEffect, useRef, useState } from 'react';
import { turnstileConfig } from '@/config/turnstile';

declare global {
  interface Window {
    turnstile?: {
      render: (el: HTMLElement, opts: Record<string, unknown>) => string;
      remove: (id: string) => void;
    };
  }
}

const SCRIPT_ID = 'cf-turnstile-script';

/**
 * Turnstile widget'ı. Site anahtarı yoksa HİÇ render edilmez (yer tutucu yok).
 * Çözülen jeton gizli bir input'a yazılır; form onu gövdeye ekler.
 * <form> kullanmayan akışlar (online danışmanlık randevusu) jetonu onToken ile alır.
 *
 * TEMBEL YÜKLEME (11 Eki 2026 denetimi, madde 6): Cloudflare betiği ve
 * çerçevesi ~700 KB indiriyordu ve formu hiç kullanmayan her ziyaretçiye
 * (iletişim + tüm tedavi sayfaları) yükleniyordu. Artık yalnızca kutu ekrana
 * yaklaşınca ya da formdaki bir alana dokunulunca yüklenir. Jeton, hasta
 * formu doldururken arka planda hazırlanır.
 */
export function TurnstileWidget({ locale, onToken }: { locale: string; onToken?: (token: string) => void }) {
  const boxRef = useRef<HTMLDivElement>(null);
  const [token, setToken] = useState('');
  const siteKey = turnstileConfig.siteKey;
  // Etki yeniden çalışmasın diye geri çağrı ref'te tutulur (her render'da yeni fonksiyon gelebilir).
  const onTokenRef = useRef(onToken);
  onTokenRef.current = onToken;
  const [load, setLoad] = useState(false);

  // Ne zaman yüklenecek: kutu ekrana 200 px yaklaşınca VEYA formda ilk etkileşimde.
  useEffect(() => {
    if (!siteKey || load || !boxRef.current) return;
    const el = boxRef.current;
    const start = () => setLoad(true);
    // Sayfada betik zaten varsa (başka bir form yükledi) beklemeye gerek yok.
    if (window.turnstile || typeof IntersectionObserver === 'undefined') {
      start();
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) start();
      },
      { rootMargin: '200px 0px' }
    );
    io.observe(el);
    const form = el.closest('form');
    form?.addEventListener('focusin', start);
    form?.addEventListener('pointerdown', start);
    return () => {
      io.disconnect();
      form?.removeEventListener('focusin', start);
      form?.removeEventListener('pointerdown', start);
    };
  }, [siteKey, load]);

  useEffect(() => {
    if (!siteKey || !load || !boxRef.current) return;
    let widgetId: string | undefined;
    const el = boxRef.current;

    function render() {
      if (!window.turnstile || !el) return;
      widgetId = window.turnstile.render(el, {
        sitekey: siteKey,
        language: locale,
        callback: (t: string) => { setToken(t); onTokenRef.current?.(t); },
        'expired-callback': () => { setToken(''); onTokenRef.current?.(''); },
        'error-callback': () => { setToken(''); onTokenRef.current?.(''); }
      });
    }

    if (window.turnstile) {
      render();
    } else if (!document.getElementById(SCRIPT_ID)) {
      const s = document.createElement('script');
      s.id = SCRIPT_ID;
      s.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
      s.async = true;
      s.defer = true;
      s.onload = render;
      document.head.appendChild(s);
    } else {
      document.getElementById(SCRIPT_ID)?.addEventListener('load', render);
    }

    return () => {
      if (widgetId && window.turnstile) window.turnstile.remove(widgetId);
    };
  }, [siteKey, locale, load]);

  if (!siteKey) return null;

  return (
    <div>
      {/* minHeight: widget (65 px) geç yüklenince sayfa kaymasın (CLS) */}
      <div ref={boxRef} style={{ minHeight: 65 }} />
      <input type="hidden" name="turnstileToken" value={token} readOnly />
    </div>
  );
}
