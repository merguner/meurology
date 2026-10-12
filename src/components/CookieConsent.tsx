'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { analyticsConfig, analyticsEnabled } from '@/config/analytics';

/**
 * İKİ AYRI ONAY GRUBU (12 Eki 2026).
 *   analytics  → Google Analytics (ziyaret istatistiği)
 *   marketing  → Meta Pixel (Facebook/Instagram'dan gelen ziyaretlerin ölçümü)
 * Önceki sürümde tek bir "Kabul et" ikisini birden yüklüyordu, oysa bant
 * metni yalnızca istatistikten söz ediyordu ve çerez politikası "pazarlama
 * çerezi kullanılmıyor, kullanılırsa ayrıca onay istenir" diyordu.
 */
interface ConsentChoice {
  analytics: boolean;
  marketing: boolean;
}

interface StoredConsent extends ConsentChoice {
  v: typeof CONSENT_VERSION;
  at: number;
}

/**
 * Sürüm 1 kayıtları ({ choice }) Meta Pixel'den söz etmeyen bantla
 * alınmıştı; bilgilendirilmiş onay sayılmadıkları için okunmaz ve bant
 * herkese yeniden gösterilir. Bant metni esaslı değişirse sürümü artırın.
 */
const CONSENT_VERSION = 2;

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
    const parsed = JSON.parse(raw) as Partial<StoredConsent>;
    if (
      parsed.v !== CONSENT_VERSION ||
      typeof parsed.analytics !== 'boolean' ||
      typeof parsed.marketing !== 'boolean' ||
      typeof parsed.at !== 'number'
    ) {
      return null;
    }
    const ageDays = (Date.now() - parsed.at) / 86_400_000;
    if (ageDays > analyticsConfig.consentMaxAgeDays) return null;
    return parsed as StoredConsent;
  } catch {
    // Gizli sekme veya engellenmiş depolama: onay yok sayılır, analitik yüklenmez.
    return null;
  }
}

function writeConsent(choice: ConsentChoice) {
  try {
    localStorage.setItem(
      analyticsConfig.storageKey,
      JSON.stringify({
        v: CONSENT_VERSION,
        analytics: choice.analytics,
        marketing: choice.marketing,
        at: Date.now()
      } satisfies StoredConsent)
    );
  } catch {
    /* depolama engelli olabilir; tercih yalnızca bu oturumda geçerli olur */
  }
}

/**
 * Onayı olmayan grubun birinci taraf çerezlerini siler (_ga, _ga_XXXX,
 * _fbp, _fbc). Çerez hem alt alan adına hem üst alan adına yazılmış
 * olabileceği için her olası domain için ayrı ayrı süresi doldurulur.
 * Çerez politikası "onayınızı geri çektiğinizde ilgili çerezler silinir"
 * der; bu fonksiyon o cümlenin karşılığıdır.
 */
function clearCookies(names: readonly string[]) {
  try {
    const parts = window.location.hostname.split('.');
    const domains = [''];
    for (let i = 0; i < parts.length - 1; i++) {
      domains.push(`; domain=.${parts.slice(i).join('.')}`);
    }
    for (const pair of document.cookie.split(';')) {
      const name = pair.split('=')[0].trim();
      if (!names.some((n) => name === n || name.startsWith(`${n}_`))) continue;
      for (const d of domains) {
        document.cookie = `${name}=; Max-Age=0; path=/${d}`;
      }
    }
  } catch {
    /* çerez erişimi engelli olabilir */
  }
}

/**
 * gtag'i SADECE onay verildiğinde yükler. Önce Consent Mode v2 varsayılanı
 * (hepsi denied) satır içi betikle yazılır, hemen ardından analytics_storage
 * granted'a çekilir; dış betik ancak bundan sonra eklenir.
 */
function loadAnalytics(gaId: string) {
  if (document.getElementById('ga-consent-init')) {
    // Aynı oturumda reddedilip yeniden onaylandıysa betik zaten sayfada.
    window.gtag?.('consent', 'update', { analytics_storage: 'granted' });
    return;
  }

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
 * META (FACEBOOK) PIXEL — yalnizca PAZARLAMA onayindan sonra.
 * Istatistik onayi Pixel'i calistirmaz. Onay verilmeden tek bir ag
 * cagrisi yapilmaz. Otomatik sayfa gorunumu (PageView) gonderilir; saglik
 * verisi iceren hicbir parametre eklenmez (bkz. lib/analytics).
 *
 * autoConfig=false: Meta'nin "inferredEvents" eklentisi (12 Eki 2026'da bu
 * Pixel'de acikti) dugme tiklamalarini metinleriyle ve sayfa meta verisini
 * kendiliginden toplar. Dugme metni tedavi adi tasiyabilecegi icin kapali;
 * Meta'ya yalnizca lib/analytics'in acikca gonderdigi olaylar gider.
 */
function loadMetaPixel(pixelId: string) {
  if (document.getElementById('meta-pixel-init')) {
    // Aynı oturumda geri çekilip yeniden verildiyse betik zaten sayfada.
    window.fbq?.('consent', 'grant');
    return;
  }
  const init = document.createElement('script');
  init.id = 'meta-pixel-init';
  init.text = `
!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('set', 'autoConfig', false, ${JSON.stringify(pixelId)});
fbq('init', ${JSON.stringify(pixelId)});
fbq('track', 'PageView');
`.trim();
  document.head.appendChild(init);
}

/**
 * Seçimi sayfaya uygular: onaylı grubun betiğini yükler, onaysız grubu
 * durdurur ve çerezlerini siler. Hem sayfa açılışında (kayıtlı tercih)
 * hem de kullanıcı seçim yaptığında çağrılır.
 */
function applyConsent(choice: ConsentChoice, gaId: string, pixelId: string) {
  if (gaId) {
    if (choice.analytics) {
      loadAnalytics(gaId);
    } else {
      window.gtag?.('consent', 'update', { analytics_storage: 'denied' });
      clearCookies(['_ga']);
    }
  }
  if (pixelId) {
    if (choice.marketing) {
      loadMetaPixel(pixelId);
    } else {
      window.fbq?.('consent', 'revoke');
      clearCookies(['_fbp', '_fbc']);
    }
  }
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
  /** "Seçenekler" açık mı — alt bilgiden açıldığında doğrudan açık gelir. */
  const [details, setDetails] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);
  const { gaId, metaPixelId } = analyticsConfig;
  const enabled = analyticsEnabled();

  useEffect(() => {
    if (!enabled) return;
    const stored = readConsent();
    if (stored) {
      applyConsent(stored, gaId, metaPixelId);
    } else {
      setOpen(true);
    }
    window.meOpenCookiePrefs = () => {
      const current = readConsent();
      setAnalytics(current?.analytics ?? false);
      setMarketing(current?.marketing ?? false);
      setDetails(true);
      setOpen(true);
    };
    return () => {
      delete window.meOpenCookiePrefs;
    };
  }, [enabled, gaId, metaPixelId]);

  // "Seçenekler" düğmesi tıklanınca yerini "Seçimi kaydet"e bırakır; klavye
  // odağı boşa düşmesin diye ilk seçilebilir kutuya taşınır.
  const optionsRef = useRef<HTMLFieldSetElement>(null);
  useEffect(() => {
    if (details && open) {
      optionsRef.current?.querySelector<HTMLInputElement>('input:not([disabled])')?.focus();
    }
  }, [details, open]);

  const save = useCallback(
    (choice: ConsentChoice) => {
      writeConsent(choice);
      setOpen(false);
      setDetails(false);
      applyConsent(choice, gaId, metaPixelId);
    },
    [gaId, metaPixelId]
  );

  if (!enabled || !open) return null;

  /*
    ÜÇ DÜĞME EŞİT GÖRÜNÜRLÜKTE.
    "Kabul et" daha dolgun/renkli, "Reddet" soluk bir düğme olduğunda
    kullanıcı yönlendirilmiş olur; bu, geçerli bir rıza sayılmaz.
    Bu yüzden düğmeler aynı boyutta, aynı çerçevede ve aynı yazı
    ağırlığındadır.
  */
  const button =
    'rounded-lg border border-border bg-surface px-3 py-2 text-sm font-medium leading-tight text-fg transition-colors hover:bg-surface-2 md:min-w-[7.5rem] md:px-4';
  const checkbox = 'h-4 w-4 shrink-0 accent-primary';

  return (
    <section
      aria-labelledby="cookie-consent-title"
      className="fixed inset-x-0 bottom-0 z-50 max-h-[85vh] overflow-y-auto border-t border-border bg-surface shadow-lg"
    >
      <div className="container-content flex flex-col gap-4 py-4 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <h2 id="cookie-consent-title" className="text-sm font-semibold text-fg">
            {t('title')}
          </h2>
          <p className="mt-1 text-sm text-muted">
            {t('intro')}
            {gaId ? ` ${t('analyticsLine')}` : ''}
            {metaPixelId ? ` ${t('marketingLine')}` : ''} {t('formNotSent')}{' '}
            <Link
              href="/yasal/cerez-politikasi"
              className="underline underline-offset-2 hover:text-fg"
            >
              {t('policyLink')}
            </Link>
          </p>
          {details && (
            <fieldset ref={optionsRef} className="mt-3 space-y-2 text-sm text-fg">
              <legend className="sr-only">{t('optionsLegend')}</legend>
              <label className="flex items-center gap-2 text-muted">
                <input type="checkbox" checked disabled className={checkbox} />
                {t('necessary')}
              </label>
              {gaId && (
                <label className="flex cursor-pointer items-center gap-2">
                  <input
                    type="checkbox"
                    checked={analytics}
                    onChange={(e) => setAnalytics(e.target.checked)}
                    className={checkbox}
                  />
                  {t('analytics')}
                </label>
              )}
              {metaPixelId && (
                <label className="flex cursor-pointer items-center gap-2">
                  <input
                    type="checkbox"
                    checked={marketing}
                    onChange={(e) => setMarketing(e.target.checked)}
                    className={checkbox}
                  />
                  {t('marketing')}
                </label>
              )}
            </fieldset>
          )}
        </div>
        <div className="grid shrink-0 grid-cols-3 gap-2 md:flex">
          <button
            type="button"
            onClick={() => save({ analytics: false, marketing: false })}
            className={button}
          >
            {t('reject')}
          </button>
          {details ? (
            <button
              type="button"
              onClick={() => save({ analytics, marketing })}
              className={button}
            >
              {t('save')}
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setDetails(true)}
              className={button}
            >
              {t('customize')}
            </button>
          )}
          <button
            type="button"
            onClick={() => save({ analytics: Boolean(gaId), marketing: Boolean(metaPixelId) })}
            className={button}
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
