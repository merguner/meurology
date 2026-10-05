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
          'Joint Commission International — hasta güvenliği ve bakım kalitesi alanında uluslararası bir akreditasyon programıdır.'
      },
      en: {
        name: 'JCI Accreditation',
        explainer:
          'Joint Commission International — an international accreditation programme for patient safety and quality of care.'
      },
      ar: {
        name: 'اعتماد JCI',
        explainer:
          'اللجنة الدولية المشتركة (Joint Commission International) — برنامج اعتماد دولي لسلامة المرضى وجودة الرعاية.'
      },
      fr: {
        name: 'Accréditation JCI',
        explainer:
          'Programme international d’accréditation pour la sécurité des patients et la qualité des soins (Joint Commission International).'
      },
      de: {
        name: 'JCI-Akkreditierung',
        explainer:
          'Joint Commission International — ein internationales Akkreditierungsprogramm für Patientensicherheit und Versorgungsqualität.'
      },
      ru: {
        name: 'Аккредитация JCI',
        explainer:
          'Joint Commission International — международная программа аккредитации по безопасности пациентов и качеству медицинской помощи.'
      }
    }
  },
  {
    /**
     * DÜZELTİLDİ: Yetki belgesini T.C. SAĞLIK BAKANLIĞI verir.
     * USHAŞ (Uluslararası Sağlık Hizmetleri A.Ş.) bir tanıtım/koordinasyon
     * şirketidir ve yetki belgesi DÜZENLEMEZ. Belge sahibi de hekim değil
     * HASTANEDİR (config/contact.ts → healthTourism).
     */
    id: 'health-tourism-license',
    i18n: {
      tr: {
        name: 'Sağlık Turizmi Yetki Belgesi',
        explainer:
          'Ameliyatların yapıldığı hastane, T.C. Sağlık Bakanlığı Uluslararası Sağlık Turizmi Yetki Belgesi sahibidir.'
      },
      en: {
        name: 'Health Tourism Authorisation',
        explainer:
          'The hospital where procedures are performed holds the International Health Tourism Authorisation Certificate issued by the Republic of Türkiye Ministry of Health.'
      },
      ar: {
        name: 'تصريح السياحة الصحية',
        explainer:
          'المستشفى الذي تُجرى فيه العمليات حاصل على شهادة تصريح السياحة الصحية الدولية الصادرة عن وزارة الصحة التركية.'
      },
      fr: {
        name: 'Autorisation de tourisme médical',
        explainer:
          'L’hôpital où sont réalisées les interventions est titulaire du certificat d’autorisation de tourisme médical international délivré par le ministère de la Santé de la République de Türkiye.'
      },
      de: {
        name: 'Zulassung Gesundheitstourismus',
        explainer:
          'Das Krankenhaus, in dem die Eingriffe durchgeführt werden, besitzt die vom türkischen Gesundheitsministerium ausgestellte Zulassung für internationalen Gesundheitstourismus.'
      },
      ru: {
        name: 'Разрешение на медицинский туризм',
        explainer:
          'Больница, где проводятся операции, имеет свидетельство о праве на международный медицинский туризм, выданное Министерством здравоохранения Турции.'
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
      fr: {
        name: 'ISO 9001',
        explainer:
          'Certification du management de la qualité — des processus de service normalisés et traçables.'
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
  }
  // KALDIRILDI: "EAU Üyeliği" rozeti.
  // Gerekçe: Bölüm 0 → "Dernek üyelikleri: yok". Doğrulanamayan bir üyelik beyanı
  // yönetmelik açısından yanıltıcı tanıtım sayılır. Üyelik belgelenirse hem buraya
  // hem content/surgeon.ts → societies alanına birlikte eklenmelidir.
];

/**
 * HASTANE VE TEKNOLOJİ (Bölüm 0'dan doğrulanmış veri).
 * Ameliyatlar iki hastanede yapılıyor. Cihaz adları özel isimdir, çevrilmez.
 * TODO-DOGRULA: JCI/ISO akreditasyon doğrulama linkleri (config/contact.ts).
 */
export const hospital = {
  /** Robotik cerrahi platformu — Bölüm 0: "da vinci". Model (Xi/X/SP) bildirilmedi. */
  robotSystem: 'da Vinci',
  /** HoLEP/ThuLEP lazer platformu — Bölüm 0: "quanta". */
  laserSystem: 'Quanta',
  i18n: {
    tr: {
      name: 'Medical Park Bahçelievler · LİV Hospital Topkapı',
      intro: [
        'ME Urology Clinic ameliyatları İstanbul’da Medical Park Bahçelievler Hastanesi ve LİV Hospital Topkapı’da gerçekleştirilir.',
        'Her iki merkez de tam teşekküllü özel hastanedir; modern cerrahi altyapı, yoğun bakım ve uluslararası hasta hizmetleri sunar.'
      ],
      features: [
        'da Vinci robotik cerrahi sistemi',
        'Quanta lazer platformu (HoLEP / ThuLEP)',
        'Yoğun bakım ve tam teşekküllü ameliyathane altyapısı',
        'Uluslararası hasta birimi ve tercüman hizmeti'
      ]
    },
    en: {
      name: 'Medical Park Bahçelievler · LİV Hospital Topkapı',
      intro: [
        'ME Urology Clinic procedures are performed at Medical Park Bahçelievler Hospital and LİV Hospital Topkapı in Istanbul.',
        'Both are full-service private hospitals offering modern surgical infrastructure, intensive care and international patient services.'
      ],
      features: [
        'da Vinci robotic surgery system',
        'Quanta laser platform (HoLEP / ThuLEP)',
        'Intensive care and full operating-theatre infrastructure',
        'International patient unit and interpreter service'
      ]
    },
    ar: {
      name: 'Medical Park Bahçelievler · LİV Hospital Topkapı',
      intro: [
        'تُجرى عمليات ME Urology Clinic في مستشفى Medical Park Bahçelievler ومستشفى LİV Hospital Topkapı في إسطنبول.',
        'وكلاهما مستشفى خاص متكامل الخدمات يوفّر بنية جراحية حديثة وعناية مركزة وخدمات للمرضى الدوليين.'
      ],
      features: [
        'نظام الجراحة الروبوتية da Vinci',
        'منصّة الليزر Quanta (HoLEP / ThuLEP)',
        'عناية مركزة وبنية غرف عمليات متكاملة',
        'وحدة المرضى الدوليين وخدمة الترجمة'
      ]
    },
    fr: {
      name: 'Medical Park Bahçelievler · LİV Hospital Topkapı',
      intro: [
        'Les interventions de ME Urology Clinic sont réalisées à l’hôpital Medical Park Bahçelievler et au LİV Hospital Topkapı, à Istanbul.',
        'Ces deux établissements privés à service complet offrent une infrastructure chirurgicale moderne, des soins intensifs et des services dédiés aux patients internationaux.'
      ],
      features: [
        'Système de chirurgie robotique da Vinci',
        'Plateforme laser Quanta (HoLEP / ThuLEP)',
        'Soins intensifs et infrastructure complète de blocs opératoires',
        'Unité patients internationaux et service d’interprétariat'
      ]
    },
    de: {
      name: 'Medical Park Bahçelievler · LİV Hospital Topkapı',
      intro: [
        'Die Eingriffe der ME Urology Clinic werden im Medical Park Bahçelievler und im LİV Hospital Topkapı in Istanbul durchgeführt.',
        'Beide sind Privatkrankenhäuser der Vollversorgung mit moderner chirurgischer Infrastruktur, Intensivmedizin und Diensten für internationale Patienten.'
      ],
      features: [
        'da Vinci Robotik-Chirurgiesystem',
        'Quanta Laserplattform (HoLEP / ThuLEP)',
        'Intensivmedizin und vollständige OP-Infrastruktur',
        'Abteilung für internationale Patienten und Dolmetscherdienst'
      ]
    },
    ru: {
      name: 'Medical Park Bahçelievler · LİV Hospital Topkapı',
      intro: [
        'Операции ME Urology Clinic проводятся в больницах Medical Park Bahçelievler и LİV Hospital Topkapı в Стамбуле.',
        'Обе — частные больницы полного цикла с современной хирургической инфраструктурой, интенсивной терапией и услугами для иностранных пациентов.'
      ],
      features: [
        'Роботическая хирургическая система da Vinci',
        'Лазерная платформа Quanta (HoLEP / ThuLEP)',
        'Интенсивная терапия и полностью оснащённые операционные',
        'Отделение для иностранных пациентов и услуга переводчика'
      ]
    }
  } as Partial<Record<Locale, { name: string; intro: string[]; features: string[] }>>
};
