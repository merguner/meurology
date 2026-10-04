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
 */
export function TurnstileWidget({ locale }: { locale: string }) {
  const boxRef = useRef<HTMLDivElement>(null);
  const [token, setToken] = useState('');
  const siteKey = turnstileConfig.siteKey;

  useEffect(() => {
    if (!siteKey || !boxRef.current) return;
    let widgetId: string | undefined;
    const el = boxRef.current;

    function render() {
      if (!window.turnstile || !el) return;
      widgetId = window.turnstile.render(el, {
        sitekey: siteKey,
        language: locale,
        callback: (t: string) => setToken(t),
        'expired-callback': () => setToken(''),
        'error-callback': () => setToken('')
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
  }, [siteKey, locale]);

  if (!siteKey) return null;

  return (
    <div>
      <div ref={boxRef} />
      <input type="hidden" name="turnstileToken" value={token} readOnly />
    </div>
  );
}
