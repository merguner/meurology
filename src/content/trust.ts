import type { Locale } from '@/i18n/routing';

/**
 * AKREDİTASYON & GÜVEN SİNYALLERİ
 * Her rozet sadece logo değil, ne anlama geldiğini anlatan 1 cümle ile gösterilir.
 * PLACEHOLDER: Gerçek belge numaraları ve logolar eklenmeli.
 */
export interface Accreditation {
  id: string;
  /** /public içine eklenecek logo yolu (opsiyonel — yoksa metin rozet). */
  logo?: string;
  i18n: Partial<Record<Locale, { name: string; explainer: string }>>;
}

export const accreditations: Accreditation[] = [
  {
    id: 'jci',
    i18n: {
      tr: {
        name: 'JCI Akreditasyonu',
        explainer:
          'Joint Commission International — hasta güvenliği ve bakım kalitesinde uluslararası altın standart belgesidir.'
      },
      en: {
        name: 'JCI Accreditation',
        explainer:
          'Joint Commission International — the global gold standard for patient safety and quality of care.'
      },
      ar: {
        name: 'اعتماد JCI',
        explainer:
          'اللجنة الدولية المشتركة (Joint Commission International) — المعيار الذهبي العالمي لسلامة المرضى وجودة الرعاية.'
      },
      de: {
        name: 'JCI-Akkreditierung',
        explainer:
          'Joint Commission International — der weltweite Goldstandard für Patientensicherheit und Versorgungsqualität.'
      },
      ru: {
        name: 'Аккредитация JCI',
        explainer:
          'Joint Commission International — мировой золотой стандарт безопасности пациентов и качества медицинской помощи.'
      }
    }
  },
  {
    id: 'ushas',
    i18n: {
      tr: {
        name: 'USHAŞ Yetkisi',
        explainer:
          'T.C. Sağlık Bakanlığı bağlı kuruluşu USHAŞ tarafından yetkilendirilmiş uluslararası sağlık turizmi sağlayıcısı.'
      },
      en: {
        name: 'USHAŞ Authorization',
        explainer:
          'Authorized international health tourism provider under USHAŞ, affiliated with the Turkish Ministry of Health.'
      },
      ar: {
        name: 'ترخيص USHAŞ',
        explainer:
          'مزوّد معتمد للسياحة العلاجية الدولية من قِبل USHAŞ التابعة لوزارة الصحة التركية.'
      },
      de: {
        name: 'USHAŞ-Genehmigung',
        explainer:
          'Autorisierter Anbieter für internationalen Gesundheitstourismus unter USHAŞ, angegliedert an das türkische Gesundheitsministerium.'
      },
      ru: {
        name: 'Разрешение USHAŞ',
        explainer:
          'Аккредитованный поставщик международного медицинского туризма при USHAŞ, подведомственной Министерству здравоохранения Турции.'
      }
    }
  },
  {
    id: 'iso',
    i18n: {
      tr: {
        name: 'ISO 9001',
        explainer: 'Kalite yönetim sistemi belgesi — hizmet süreçlerinde standart ve izlenebilirlik.'
      },
      en: {
        name: 'ISO 9001',
        explainer: 'Quality management certification — standardized, traceable service processes.'
      },
      ar: {
        name: 'ISO 9001',
        explainer: 'شهادة نظام إدارة الجودة — عمليات خدمة موحّدة وقابلة للتتبّع.'
      },
      de: {
        name: 'ISO 9001',
        explainer: 'Zertifizierung des Qualitätsmanagements — standardisierte, nachvollziehbare Serviceprozesse.'
      },
      ru: {
        name: 'ISO 9001',
        explainer: 'Сертификация системы менеджмента качества — стандартизированные и прослеживаемые процессы обслуживания.'
      }
    }
  },
  {
    id: 'eau',
    i18n: {
      tr: {
        name: 'EAU Üyeliği',
        explainer: 'Cerrahımız Avrupa Üroloji Derneği üyesidir; güncel kılavuzları takip eder.'
      },
      en: {
        name: 'EAU Membership',
        explainer: 'Our surgeon is a member of the European Association of Urology, following current guidelines.'
      },
      ar: {
        name: 'عضوية EAU',
        explainer: 'جرّاحنا عضو في الجمعية الأوروبية للمسالك البولية ويتّبع أحدث الإرشادات السريرية.'
      },
      de: {
        name: 'EAU-Mitgliedschaft',
        explainer: 'Unser Chirurg ist Mitglied der Europäischen Gesellschaft für Urologie und folgt den aktuellen Leitlinien.'
      },
      ru: {
        name: 'Членство в EAU',
        explainer: 'Наш хирург — член Европейской ассоциации урологии и следует актуальным клиническим рекомендациям.'
      }
    }
  }
];

/**
 * HASTANE / TEKNOLOJİ — PLACEHOLDER.
 */
export const hospital = {
  robotSystem: 'PLACEHOLDER: Robotik cerrahi sistemi (ör. da Vinci Xi)',
  operatingRooms: 'PLACEHOLDER: Ameliyathane sayısı ve donanım bilgisi',
  i18n: {
    tr: {
      name: 'Medical Park Bahçelievler',
      intro: [
        'ME Urology Clinic ameliyatları, İstanbul Bahçelievler’de yer alan Medical Park Bahçelievler Hastanesi’nde gerçekleştirilir.',
        'Tam teşekküllü özel bir hastane olarak modern cerrahi altyapı, yoğun bakım ve uluslararası hasta hizmetleri sunar.'
      ],
      features: [
        'PLACEHOLDER: Robotik cerrahi platformu',
        'PLACEHOLDER: Hibrit ameliyathaneler',
        'PLACEHOLDER: Uluslararası hasta katı ve tercüman hizmeti'
      ]
    },
    en: {
      name: 'Medical Park Bahçelievler',
      intro: [
        'ME Urology Clinic procedures are performed at Medical Park Bahçelievler Hospital in Bahçelievler, Istanbul.',
        'As a full-service private hospital, it offers modern surgical infrastructure, intensive care and international patient services.'
      ],
      features: [
        'PLACEHOLDER: Robotic surgery platform',
        'PLACEHOLDER: Hybrid operating rooms',
        'PLACEHOLDER: International patient floor and interpreter service'
      ]
    },
    ar: {
      name: 'Medical Park Bahçelievler',
      intro: [
        'تُجرى عمليات ME Urology Clinic في مستشفى Medical Park Bahçelievler بحي Bahçelievler في إسطنبول.',
        'وهو مستشفى خاص متكامل الخدمات يوفّر بنية جراحية حديثة وعناية مركزة وخدمات للمرضى الدوليين.'
      ],
      features: [
        'PLACEHOLDER: منصّة الجراحة الروبوتية',
        'PLACEHOLDER: غرف عمليات هجينة',
        'PLACEHOLDER: جناح المرضى الدوليين وخدمة الترجمة'
      ]
    },
    de: {
      name: 'Medical Park Bahçelievler',
      intro: [
        'Die Eingriffe der ME Urology Clinic werden im Medical Park Bahçelievler in Bahçelievler, Istanbul, durchgeführt.',
        'Als Vollversorger-Privatkrankenhaus bietet es moderne chirurgische Infrastruktur, Intensivmedizin und Dienste für internationale Patienten.'
      ],
      features: [
        'PLACEHOLDER: Robotische Chirurgieplattform',
        'PLACEHOLDER: Hybrid-Operationssäle',
        'PLACEHOLDER: Station für internationale Patienten und Dolmetscherdienst'
      ]
    },
    ru: {
      name: 'Medical Park Bahçelievler',
      intro: [
        'Операции ME Urology Clinic проводятся в больнице Medical Park Bahçelievler в районе Бахчелиэвлер, Стамбул.',
        'Это частная больница полного цикла с современной хирургической инфраструктурой, интенсивной терапией и услугами для иностранных пациентов.'
      ],
      features: [
        'PLACEHOLDER: Платформа роботической хирургии',
        'PLACEHOLDER: Гибридные операционные',
        'PLACEHOLDER: Отделение для иностранных пациентов и услуга переводчика'
      ]
    }
  } as Partial<Record<Locale, { name: string; intro: string[]; features: string[] }>>
};
