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
  } as Partial<Record<Locale, { name: string; intro: string[]; features: string[] }>>
};
