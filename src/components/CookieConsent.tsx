'use client';

import { useCallback, useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { analyticsConfig, analyticsEnabled } from '@/config/analytics';

type Choice = 'granted' | 'denied';

interface StoredConsent {
  choice: Choice;
  at: number;
}

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    /** Alt bilgideki "çerez tercihleri" bağlantısı bandı yeniden açar. */
    meOpenCookiePrefs?: () => void;
  }
}

function readConsent(): StoredConsent | null {
  try {
    const raw = localStorage.getItem(analyticsConfig.storageKey);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as StoredConsent;
    if (parsed.choice !== 'granted' && parsed.choice !== 'denied') return null;
    const ageDays = (Date.now() - parsed.at) / 86_400_000;
    if (ageDays > analyticsConfig.consentMaxAgeDays) return null;
    return parsed;
  } catch {
    // Gizli sekme veya engellenmiş depolama: onay yok sayılır, analitik yüklenmez.
    return null;
  }
}

function writeConsent(choice: Choice) {
  try {
    localStorage.setItem(
      analyticsConfig.storageKey,
      JSON.stringify({ choice, at: Date.now() } satisfies StoredConsent)
    );
  } catch {
    /* depolama engelli olabilir; tercih yalnızca bu oturumda geçerli olur */
  }
}

/**
 * gtag'i SADECE onay verildiğinde yükler. Önce Consent Mode v2 varsayılanı
 * (hepsi denied) satır içi betikle yazılır, hemen ardından analytics_storage
 * granted'a çekilir; dış betik ancak bundan sonra eklenir.
 */
function loadAnalytics(gaId: string) {
  if (document.getElementById('ga-consent-init')) return;

  const init = document.createElement('script');
  init.id = 'ga-consent-init';
  init.text = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = gtag;
gtag('consent','default',{
  ad_storage:'denied',
  ad_user_data:'denied',
  ad_personalization:'denied',
  analytics_storage:'denied',
  functionality_storage:'granted',
  security_storage:'granted'
});
gtag('consent','update',{analytics_storage:'granted'});
gtag('js', new Date());
gtag('config', ${JSON.stringify(gaId)}, { anonymize_ip: true });
`.trim();
  document.head.appendChild(init);

  const s = document.createElement('script');
  s.id = 'ga-script';
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(gaId)}`;
  document.head.appendChild(s);
}

/**
 * META (FACEBOOK) PIXEL — yalnizca onaydan sonra.
 * GA ile ayni kural: onay verilmeden tek bir ag cagrisi yapilmaz.
 * Otomatik sayfa gorunumu (PageView) gonderilir; saglik verisi iceren
 * hicbir parametre eklenmez (bkz. lib/analytics).
 */
function loadMetaPixel(pixelId: string) {
  if (document.getElementById('meta-pixel-init')) return;
  const init = document.createElement('script');
  init.id = 'meta-pixel-init';
  init.text = `
!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('init', ${JSON.stringify(pixelId)});
fbq('track', 'PageView');
`.trim();
  document.head.appendChild(init);
}

/**
 * ÇEREZ ONAY BANDI (prompt m.5.3 — Consent Mode v2).
 * Yalnızca GA4 kimliği yapılandırılmışsa görünür; aksi halde sitede zorunlu
 * çerez dışında bir şey yoktur ve bant gösterilmez. Bu davranış çerez
 * politikası metniyle birebir uyumludur.
 */
export function CookieConsent() {
  const t = useTranslations('Consent');
  const [open, setOpen] = useState(false);
  const { gaId, metaPixelId } = analyticsConfig;
  const enabled = analyticsEnabled();

  useEffect(() => {
    if (!enabled) return;
    const stored = readConsent();
    if (stored) {
      if (stored.choice === 'granted') {
        if (gaId) loadAnalytics(gaId);
        if (metaPixelId) loadMetaPixel(metaPixelId);
      }
    } else {
      setOpen(true);
    }
    window.meOpenCookiePrefs = () => setOpen(true);
    return () => {
      delete window.meOpenCookiePrefs;
    };
  }, [enabled, gaId, metaPixelId]);

  const choose = useCallback(
    (choice: Choice) => {
      writeConsent(choice);
      setOpen(false);
      if (choice === 'granted') {
        if (gaId) loadAnalytics(gaId);
        if (metaPixelId) loadMetaPixel(metaPixelId);
      } else if (typeof window.gtag === 'function') {
        window.gtag('consent', 'update', { analytics_storage: 'denied' });
      }
    },
    [gaId, metaPixelId]
  );

  if (!enabled || !open) return null;

  return (
    <section
      aria-labelledby="cookie-consent-title"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-surface-1 shadow-lg"
    >
      <div className="container-content flex flex-col gap-4 py-4 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <h2 id="cookie-consent-title" className="text-sm font-semibold text-fg">
            {t('title')}
          </h2>
          <p className="mt-1 text-sm text-muted">
            {t('body')}{' '}
            <Link
              href="/yasal/cerez-politikasi"
              className="underline underline-offset-2 hover:text-fg"
            >
              {t('policyLink')}
            </Link>
          </p>
        </div>
        <div className="flex shrink-0 gap-2">
          {/*
            İKİ DÜĞME EŞİT GÖRÜNÜRLÜKTE.
            "Kabul et" daha dolgun/renkli, "Reddet" soluk bir düğme olduğunda
            kullanıcı yönlendirilmiş olur; bu, geçerli bir rıza sayılmaz.
            Bu yüzden iki düğme aynı boyutta, aynı çerçevede ve aynı yazı
            ağırlığındadır; yalnızca yazı rengiyle ayrışırlar.
          */}
          <button
            type="button"
            onClick={() => choose('denied')}
            className="min-w-[7.5rem] rounded-lg border border-border bg-surface px-4 py-2 text-sm font-medium text-fg transition-colors hover:bg-surface-2"
          >
            {t('reject')}
          </button>
          <button
            type="button"
            onClick={() => choose('granted')}
            className="min-w-[7.5rem] rounded-lg border border-border bg-surface px-4 py-2 text-sm font-medium text-fg transition-colors hover:bg-surface-2"
          >
            {t('accept')}
          </button>
        </div>
      </div>
    </section>
  );
}

/** Alt bilgideki "çerez tercihleri" düğmesi. Analitik kapalıysa hiç görünmez. */
export function CookiePrefsButton({ label }: { label: string }) {
  const [available, setAvailable] = useState(false);
  useEffect(() => {
    setAvailable(analyticsEnabled());
  }, []);
  if (!available) return null;
  return (
    <button
      type="button"
      onClick={() => window.meOpenCookiePrefs?.()}
      className="text-xs text-muted underline underline-offset-2 transition-colors hover:text-fg"
    >
      {label}
    </button>
  );
}
