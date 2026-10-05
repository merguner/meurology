import { siteConfig } from './site';

/**
 * DİZİNE EKLENEBİLİRLİK (prompt m.7: "vercel.app noindex, canonical'lar
 * www.meurology.com").
 *
 * SORUN: Aynı site hem geçici dağıtım adresinde (*.vercel.app) hem de
 * gerçek alan adında yayınlanırsa arama motoru iki ayrı kopya görür.
 * Canonical etiketi doğru alan adını gösterse bile, geçici adresin
 * taranmaya açık olması gereksiz risktir ve alan adı bağlanmadan önce
 * sitenin yarım hâlinin dizine girmesine yol açar.
 *
 * ÇÖZÜM: Dizine eklenmeye YALNIZCA şu koşulda izin verilir — dağıtım
 * production dağıtımıdır VE production alan adı siteConfig.domain ile
 * ya birebir aynıdır ya da onun apex karşılığıdır. Vercel bu bilgiyi
 * VERCEL_PROJECT_PRODUCTION_URL ile verir.
 *
 * APEX TOLERANSI NEDEN GEREKLİ: Vercel bu değişkene projeye bağlı
 * özel alan adlarından EN KISA olanı yazar. Projede hem meurology.com
 * hem www.meurology.com bağlı olduğundan değişken 'meurology.com'
 * döner, oysa kanonik adres 'www.meurology.com'dur. Birebir
 * karşılaştırma bu yüzden 6 Eki 2026'da yanlış biçimde noindex üretti:
 * alan adı canlıya alınmıştı ama robots.txt "Disallow: /" basıyordu.
 * Apex varyantı da kabul edilerek bu düzeltildi.
 *
 * GÜVENLİK KORUNUYOR: 'meurology.vercel.app' ne kanonik adrese ne de
 * apex'e eşittir, dolayısıyla geçici adres hâlâ reddedilir. Ayrıca
 * next.config.mjs *.vercel.app için X-Robots-Tag: noindex basar.
 *
 * Yerel geliştirmede (VERCEL_ENV tanımsız) noindex'tir — localhost zaten
 * taranmaz, ama sitemap/robots çıktısının yanlışlıkla canlıya benzemesini
 * de engeller.
 *
 * ACİL GEÇERSİZ KILMA: SITE_INDEXABLE=true ortam değişkeni tanımlanırsa
 * kontrol atlanır. Yalnızca gerçek alan adı yayına alındığı hâlde otomatik
 * algılama çalışmazsa kullanın.
 */
function canonicalHost(): string {
  try {
    return new URL(siteConfig.domain).host.toLowerCase();
  } catch {
    return '';
  }
}

/** 'www.meurology.com' -> 'meurology.com'. Yalnızca www ön ekini atar. */
function apexOf(host: string): string {
  return host.replace(/^www\./, '');
}

export function isIndexable(): boolean {
  if (process.env.SITE_INDEXABLE === 'true') return true;
  if (process.env.VERCEL_ENV !== 'production') return false;
  const prodHost = process.env.VERCEL_PROJECT_PRODUCTION_URL?.toLowerCase();
  if (!prodHost) return false;
  const canon = canonicalHost();
  if (!canon) return false;
  return prodHost === canon || prodHost === apexOf(canon);
}

/** Sayfa metadata'sı için robots alanı. */
export function robotsMeta() {
  return isIndexable()
    ? { index: true, follow: true }
    : { index: false, follow: false };
}
