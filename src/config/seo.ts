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
 * aynıdır. Vercel bu bilgiyi VERCEL_PROJECT_PRODUCTION_URL ile verir
 * (ör. şu an 'meurology.vercel.app', alan adı bağlanınca
 * 'www.meurology.com'). Yani alan adı bağlandığı anda site kendiliğinden
 * dizine açılır; ayrıca kod değişikliği gerekmez.
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

export function isIndexable(): boolean {
  if (process.env.SITE_INDEXABLE === 'true') return true;
  if (process.env.VERCEL_ENV !== 'production') return false;
  const prodHost = process.env.VERCEL_PROJECT_PRODUCTION_URL?.toLowerCase();
  if (!prodHost) return false;
  return prodHost === canonicalHost();
}

/** Sayfa metadata'sı için robots alanı. */
export function robotsMeta() {
  return isIndexable()
    ? { index: true, follow: true }
    : { index: false, follow: false };
}
