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
  de: {
    title: 'Versicherung / Kostenübernahme',
    body: [
      'Für internationale Patienten werden die Eingriffe im Rahmen des Gesundheitstourismus angeboten und nicht von der türkischen Sozialversicherung (SGK) übernommen.',
      'Bei inländischen Patienten kann die SGK- oder Privatversicherungsübernahme je nach Eingriff variieren; bitte kontaktieren Sie uns.'
    ]
  },
  ru: {
    title: 'Страхование / Покрытие',
    body: [
      'Для иностранных пациентов процедуры предоставляются в рамках медицинского туризма и не покрываются турецким соцстрахованием (SGK).',
      'Для местных пациентов покрытие SGK или частной страховки может зависеть от процедуры; свяжитесь с нами для уточнения.'
    ]
  },
  ar: {
    title: 'التأمين / التغطية',
    body: [
      'للمرضى الدوليين، تُقدَّم الإجراءات ضمن السياحة العلاجية ولا يغطّيها الضمان الاجتماعي التركي (SGK).',
      'أما المرضى المحليون فقد تختلف تغطية SGK أو التأمين الخاص حسب الإجراء؛ يُرجى التواصل معنا للتفاصيل.'
    ]
  },
  fr: {
    title: 'Assurance / Prise en charge',
    body: [
      'Pour les patients internationaux, les interventions relèvent du tourisme médical et ne sont pas prises en charge par la sécurité sociale turque (SGK).',
      'Pour les patients résidant en Türkiye, la prise en charge par la SGK ou une assurance privée varie selon l’intervention ; contactez-nous pour en savoir plus.'
    ]
  }
};

/** İlgili dildeki sigorta bilgisini döndürür; içerik boşsa null (blok gizlenir). */
export function getInsuranceInfo(locale: Locale): InsuranceInfo | null {
  const info = insuranceInfo[locale] ?? insuranceInfo.en ?? insuranceInfo.tr;
  if (!info || info.body.length === 0) return null;
  return info;
}
