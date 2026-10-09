import type { Locale } from '@/i18n/routing';

/**
 * SGK / ÖZEL SİGORTA BİLGİ SLOTU (yerli hastalar için).
 * ------------------------------------------------------------------
 * İçeriği güncelleyin/değiştirin — aşağıdaki metin güvenli bir varsayılandır.
 * `body` boş bırakılırsa blok hiçbir sayfada GÖRÜNMEZ (getInsuranceInfo null döner).
 * Tedavi detay sayfaları ve iletişim sayfası bu slotu otomatik kullanır.
 */
export interface InsuranceInfo {
  title: string;
  body: string[];
}

export const insuranceInfo: Partial<Record<Locale, InsuranceInfo>> = {
  tr: {
    title: 'SGK / Sigorta Durumu',
    body: [
      'Uluslararası hastalarımız için işlemler sağlık turizmi kapsamında sunulur ve SGK kapsamı dışındadır.',
      'Yerli hastalarda SGK veya özel sigorta durumu tedaviye göre değişebilir; net bilgi için bizimle iletişime geçin.'
    ]
  },
  en: {
    title: 'Insurance / Coverage',
    body: [
      'For international patients, procedures are provided under health tourism and are not covered by the Turkish social security (SGK).',
      'For domestic patients, SGK or private insurance coverage may vary by procedure; please contact us for details.'
    ]
  },
  ar: {
    title: 'التأمين / التغطية',
    body: [
      'للمرضى الدوليين، تُقدَّم الإجراءات ضمن السياحة العلاجية ولا يغطّيها الضمان الاجتماعي التركي (SGK).',
      'أما المرضى المحليون فقد تختلف تغطية SGK أو التأمين الخاص حسب الإجراء؛ يُرجى التواصل معنا للتفاصيل.'
    ]
  },
};

/** İlgili dildeki sigorta bilgisini döndürür; içerik boşsa null (blok gizlenir). */
export function getInsuranceInfo(locale: Locale): InsuranceInfo | null {
  const info = insuranceInfo[locale] ?? insuranceInfo.en ?? insuranceInfo.tr;
  if (!info || info.body.length === 0) return null;
  return info;
}
