import type { Locale } from './routing';

/**
 * ÇEVİRİ İNCELEME DURUMU (prompt m.8.4).
 *
 * `reviewed: false` → çeviri bir ANADİL KONUŞAN TIBBİ ÇEVİRMEN tarafından
 * henüz doğrulanmadı. Tıbbi terminoloji, hasta güvenliği ve hukuki metinler
 * açısından yayından önce kontrol edilmelidir.
 *
 * Bu bayrak şu an yalnızca kayıt/izleme amaçlıdır; sayfa davranışını değiştirmez.
 * Çeviri onaylandıkça `reviewed: true` yapın ve `reviewedBy`/`reviewedAt` doldurun.
 */
export interface TranslationStatus {
  reviewed: boolean;
  /** Kimin doğruladığı (ad veya ajans). */
  reviewedBy?: string;
  /** ISO tarih. */
  reviewedAt?: string;
  note?: string;
}

export const translationStatus: Record<Locale, TranslationStatus> = {
  tr: {
    reviewed: true,
    note: 'Kaynak dil — cerrah tarafından yazıldı/onaylandı.'
  },
  en: {
    reviewed: false,
    note: 'Tıbbi çevirmen kontrolü bekliyor.'
  },
  de: {
    reviewed: false,
    note: 'Tıbbi çevirmen kontrolü bekliyor.'
  },
  ru: {
    reviewed: false,
    note: 'Anadil konuşan tıbbi çevirmen kontrolü bekliyor (Kiril).'
  },
  ar: {
    reviewed: false,
    note: 'Anadil konuşan tıbbi çevirmen kontrolü bekliyor (RTL + Körfez terminolojisi).'
  },
  fr: {
    reviewed: false,
    note: 'Faz 2’de eklendi. Anadil konuşan tıbbi çevirmen kontrolü bekliyor; Batı/Kuzey Afrika pazarı hedefli.'
  }
};

/** Henüz doğrulanmamış diller — rapor ve kontrol listeleri için. */
export function unreviewedLocales(): Locale[] {
  return (Object.keys(translationStatus) as Locale[]).filter(
    (l) => !translationStatus[l].reviewed
  );
}
