'use client';

import { useEffect } from 'react';
import { track, whatsappSourceFromHref } from '@/lib/analytics';

/**
 * İLETİŞİM TIKLAMALARININ ÖLÇÜMÜ — TEK NOKTADAN.
 *
 * WhatsApp, telefon ve e-posta bağlantıları sitenin pek çok yerinde ve
 * çoğu SUNUCU bileşeninde üretiliyor. Her birine ayrı bir onClick
 * eklemek yerine belge düzeyinde tek bir dinleyici kullanılır: tıklanan
 * öğenin en yakın <a> atası incelenir ve adresine göre olay gönderilir.
 *
 * Böylece yeni eklenen bir WhatsApp düğmesi ölçüme kendiliğinden dâhil
 * olur; kimse "burada track çağırmayı unutmuş" durumuna düşmez.
 *
 * Onay verilmediyse track() zaten hiçbir şey yapmaz (bkz. lib/analytics).
 */
export function AnalyticsEvents() {
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const el = (e.target as HTMLElement | null)?.closest?.('a');
      if (!el) return;
      const href = el.getAttribute('href') ?? '';
      if (!href) return;

      if (href.startsWith('https://wa.me/') || href.includes('wa.me/')) {
        track('whatsapp_click', { source: whatsappSourceFromHref(href) });
      } else if (href.startsWith('tel:')) {
        track('phone_click');
      } else if (href.startsWith('mailto:')) {
        track('email_click');
      }
    }
    // capture: bağlantı yeni sekmede açılsa bile olay yakalanır.
    document.addEventListener('click', onClick, { capture: true });
    return () => document.removeEventListener('click', onClick, { capture: true });
  }, []);

  return null;
}
