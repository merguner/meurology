import type { Locale } from '@/i18n/routing';

/**
 * CERRAH PROFİLİ — gerçek CV verisiyle (unvan, akademik kariyer, eğitim,
 * kurslar/sertifikalar, ödül ve seçilmiş yayınlar) dolduruldu.
 *
 * HÂLÂ PLACEHOLDER (gerçek veri gelmedi, uydurma YAPILMADI):
 *  - diplomaRegistryNo: Sağlık Bakanlığı diploma tescil no (CV'de yok)
 *  - photo: cerrah fotoğrafı (henüz yok)
 *  - languages: ['tr','en'] — DOĞRULANMAMIŞ VARSAYIM (CV'de açık dil listesi yok;
 *    uluslararası İngilizce yayınlar İngilizce yetkinliğini ima eder ama CV
 *    doğrudan belirtmez). Doğrulanana kadar değiştirmeyin.
 *
 * ÇOK DİLLİLİK: Kurum adları (Uludağ Üniversitesi, Antalya Eğitim ve Araştırma
 * Hastanesi, İstanbul Atlas Üniversitesi) özel isimdir, çevrilmez; yalnızca
 * derece/unvan sözcükleri (Tıp Fakültesi → Medical School vb.) çevrilir.
 * Yayın başlıkları İngilizce yazıldığı için tüm dillerde aynı kalır.
 */
export interface SurgeonPublication {
  title: string;
  journal: string;
  year: string;
  authors?: string;
  url?: string;
}

export interface SurgeonTimelineItem {
  year: string;
  item: string;
  note?: string;
}

export interface SurgeonProfile {
  name: string;
  photo?: string; // /public içine eklenecek görsel yolu
  languages: string[]; // konuştuğu diller (kod veya ad)
  // Doğrulanabilir güven sinyalleri
  diplomaRegistryNo: string; // Diploma tescil no (PLACEHOLDER)
  societies: { name: string; note: string }[]; // EAU, AUA vb.
  videoPlaceholderNote: string;
  i18n: Partial<
    Record<
      Locale,
      {
        /** Akademik unvan + ad (ör. "Doç. Dr. Müslüm Ergün") — dile göre. */
        fullName: string;
        title: string; // meslek/uzmanlık alt başlığı
        /** Güncel akademik görev (ör. Üroloji Anabilim Dalı Başkanı) — opsiyonel. */
        role?: string;
        bio: string[];
        education: SurgeonTimelineItem[];
        /** Kurslar / sertifikalar — opsiyonel. */
        courses?: SurgeonTimelineItem[];
        /** Ödüller — opsiyonel. */
        awards?: SurgeonTimelineItem[];
        publications: SurgeonPublication[];
      }
    >
  >;
}

/**
 * SEÇİLMİŞ YAYINLAR — tüm dillerde AYNI (başlıklar İngilizce; çevrilmez).
 * CV'deki 50+ yayından hasta profili için seçilmiş 6 makale + 1 kitap bölümü.
 */
const publications: SurgeonPublication[] = [
  {
    authors: 'Ergün M, Sağır S, Hacibey İ',
    title:
      'ThuLEP technique for managing benign prostatic hyperplasia: Intraoperative and postoperative complications in a series of 42 consecutive cases',
    journal: 'Journal of Surgery and Medicine',
    year: '2025'
  },
  {
    authors: 'Ergün M, Sağır S',
    title:
      "Low-Intensity Extracorporeal Shock Wave Therapy and Platelet-Rich Plasma: Effective Combination Treatment of Chronic-Phase Peyronie's Disease",
    journal: 'Archivos Españoles de Urología',
    year: '2025'
  },
  {
    authors: 'Ergün M, Sağır S',
    title:
      'Factors determining the number of sessions in successful extracorporeal shock wave lithotripsy patients',
    journal: 'Open Medicine',
    year: '2025'
  },
  {
    authors: 'Ergün M, Sağır S, Akyüz O, Akman RY',
    title:
      'Evolving Approach in Nephron-Sparing Surgery: Has Anything Changed from Open Surgery to Laparoscopy?',
    journal: 'Archivos Españoles de Urología',
    year: '2024'
  },
  {
    authors: 'Sağır S, Başgut Ö, Tunçekin A, Ergün M, Turğut Ö',
    title:
      'Comparison of the Transobturator Tape and Minisling Methods in the Treatment of Stress Urinary Incontinence',
    journal: 'Archivos Españoles de Urología',
    year: '2025'
  },
  {
    authors: 'Ergün M, Akyüz O',
    title: 'Is Li-ESWT effective in diabetic patients with severe erectile dysfunction?',
    journal: 'Asian Journal of Andrology',
    year: '2022'
  },
  {
    authors: 'Ergün M',
    title: 'İyi Huylu Prostat Büyümesi ve HoLEP Tedavisi',
    journal:
      'Sağlıklı ve Kaliteli Hayata Dair Bilgiler — Kitap bölümü, Orient Yayınları',
    year: '2024'
  }
];

/** ÖDÜL — tüm dillerde aynı (özel ad; çevrilmez). */
const awards: SurgeonTimelineItem[] = [
  { year: '2017', item: 'Seal of Excellence — European Commission (Research & Innovation)' }
];

export const surgeon: SurgeonProfile = {
  // Dil-nötr ad (JSON-LD Person.name için); görüntüde dile göre fullName kullanılır.
  name: 'Müslüm Ergün',
  photo: '/dr-muslum-ergun.jpg', // Doç. Dr. Müslüm Ergün — cerrah portresi
  // PLACEHOLDER (doğrulanmamış varsayım): CV'de açık dil listesi yok — değiştirmeyin.
  languages: ['tr', 'en'],
  diplomaRegistryNo: 'PLACEHOLDER: 000000', // Sağlık Bakanlığı diploma tescil no (CV'de yok)
  // Dernek üyelikleri kaldırıldı (doğrulanmamıştı). Doğrulanmış üyelik(ler)
  // eklenecekse buraya { name, note } olarak girin; cerrah sayfasında tekrar gösterilir.
  societies: [],
  videoPlaceholderNote: 'PLACEHOLDER: Cerrah tanıtım videosu embed URL’i buraya eklenecek.',
  i18n: {
    tr: {
      fullName: 'Doç. Dr. Müslüm Ergün',
      title: 'Üroloji Uzmanı',
      role: 'Üroloji Anabilim Dalı Başkanı — İstanbul Atlas Üniversitesi Tıp Fakültesi',
      bio: [
        'Doç. Dr. Müslüm Ergün, 18 yılı aşkın cerrahi deneyime sahip bir üroloji uzmanıdır. Robotik ve laparoskopik cerrahi, endoüroloji ve taş cerrahisi, androloji, üroonkoloji ile fonksiyonel ve rekonstrüktif üroloji alanlarında toplam 5.230’u aşkın cerrahi işlem gerçekleştirmiştir. Hâlen İstanbul Atlas Üniversitesi Tıp Fakültesi’nde Üroloji Anabilim Dalı Başkanı olarak görev yapmakta, ameliyatlarını İstanbul’daki Medical Park Bahçelievler’de gerçekleştirmektedir.',
        'Uluslararası hastalara şeffaf bir süreç, kanıta dayalı bir yaklaşım ve kişiye özel tedavi planları sunar. Özellikle kompleks ve redo (yeniden onarım) vakalarında deneyimlidir.'
      ],
      education: [
        { year: '2000–2004', item: 'Tıp Fakültesi — Uludağ Üniversitesi' },
        {
          year: '2009–2014',
          item: 'Üroloji Uzmanlık Eğitimi — Antalya Eğitim ve Araştırma Hastanesi',
          note: 'Tez: “Prostat biyopsi kor uzunluğunun prostat kanseri teşhisi üzerindeki etkisi” (Danışman: Murat Savaş)'
        },
        { year: '2019', item: 'Doktor Öğretim Üyesi — İstanbul Atlas Üniversitesi' },
        { year: '2025', item: 'Üroloji Anabilim Dalı Başkanı — İstanbul Atlas Üniversitesi Tıp Fakültesi' },
        { year: '2026', item: 'Altınbaş Üniversitesi, Medical Park Hastanesi' }
      ],
      courses: [
        { year: '2024', item: 'Uygulamalı Sakral Nöromodülasyon Kursu — 33. Ulusal Üroloji Kongresi, Antalya' },
        { year: '2009', item: 'Temel Ürodinami Kursu — 1. Ulusal Kadın ve İşlevsel Üroloji Kongresi, Antalya' },
        { year: '2014', item: 'Flexible URS Eğitim Kursu — Endoüroloji Bölgesel Eğitim Toplantısı, Van' }
      ],
      awards,
      publications
    },
    en: {
      fullName: 'Assoc. Prof. Dr. Müslüm Ergün',
      title: 'Urologist',
      role: 'Head of the Department of Urology — İstanbul Atlas Üniversitesi',
      bio: [
        'Assoc. Prof. Dr. Müslüm Ergün is a urology specialist with more than 18 years of surgical experience. He has performed over 5,230 surgical procedures across robotic and laparoscopic surgery, endourology and stone surgery, andrology, uro-oncology, and functional and reconstructive urology. He currently serves as Head of the Department of Urology at İstanbul Atlas Üniversitesi and operates at Medical Park Bahçelievler in Istanbul.',
        'He offers international patients a transparent process, an evidence-based approach and individualized treatment plans, with particular experience in complex and redo (revision) cases.'
      ],
      education: [
        { year: '2000–2004', item: 'Medical School — Uludağ Üniversitesi' },
        {
          year: '2009–2014',
          item: 'Urology Residency — Antalya Eğitim ve Araştırma Hastanesi',
          note: 'Thesis: “The effect of prostate biopsy core length on the diagnosis of prostate cancer” (Advisor: Murat Savaş)'
        },
        { year: '2019', item: 'Assistant Professor — İstanbul Atlas Üniversitesi' },
        { year: '2025', item: 'Head of the Department of Urology — İstanbul Atlas Üniversitesi' },
        { year: '2026', item: 'Altınbaş Üniversitesi, Medical Park Hastanesi' }
      ],
      courses: [
        { year: '2024', item: 'Hands-on Sacral Neuromodulation Course — 33rd National Urology Congress, Antalya' },
        { year: '2009', item: 'Basic Urodynamics Course — 1st National Congress of Female and Functional Urology, Antalya' },
        { year: '2014', item: 'Flexible URS Training Course — Regional Endourology Training Meeting, Van' }
      ],
      awards,
      publications
    },
    ar: {
      fullName: 'الأستاذ المشارك د. مسلم إرغن',
      title: 'أخصائي المسالك البولية',
      role: 'رئيس قسم المسالك البولية — İstanbul Atlas Üniversitesi',
      bio: [
        'الأستاذ المشارك د. مسلم إرغن اختصاصي في المسالك البولية بخبرة جراحية تتجاوز 18 عامًا. أجرى أكثر من 5,230 عملية جراحية في مجالات الجراحة الروبوتية وبالمنظار، وجراحة المناظير الداخلية والحصوات، وطب الذكورة، وأورام المسالك البولية، والمسالك البولية الوظيفية والترميمية. ويشغل حاليًا منصب رئيس قسم المسالك البولية في İstanbul Atlas Üniversitesi، ويُجري عملياته في Medical Park Bahçelievler بإسطنبول.',
        'يقدّم للمرضى الدوليين مسارًا شفافًا ونهجًا قائمًا على الأدلة وخططًا علاجية مخصّصة، مع خبرة خاصة في الحالات المعقدة وحالات إعادة الجراحة (redo).'
      ],
      education: [
        { year: '2000–2004', item: 'كلية الطب — Uludağ Üniversitesi' },
        {
          year: '2009–2014',
          item: 'اختصاص المسالك البولية — Antalya Eğitim ve Araştırma Hastanesi',
          note: 'الأطروحة: «تأثير طول عيّنة خزعة البروستاتا على تشخيص سرطان البروستاتا» (المشرف: Murat Savaş)'
        },
        { year: '2019', item: 'أستاذ مساعد — İstanbul Atlas Üniversitesi' },
        { year: '2025', item: 'رئيس قسم المسالك البولية — İstanbul Atlas Üniversitesi Tıp Fakültesi' },
        { year: '2026', item: 'Altınbaş Üniversitesi, Medical Park Hastanesi' }
      ],
      courses: [
        { year: '2024', item: 'دورة عملية في التحفيز العصبي العجزي — المؤتمر الوطني الثالث والثلاثون للمسالك البولية، أنطاليا' },
        { year: '2009', item: 'دورة أساسيات ديناميكا البول — المؤتمر الوطني الأول لمسالك النساء والمسالك الوظيفية، أنطاليا' },
        { year: '2014', item: 'دورة تدريبية في تفتيت الحصى بالمنظار المرن (URS) — الاجتماع التدريبي الإقليمي لتنظير المسالك، فان' }
      ],
      awards,
      publications
    },
    de: {
      fullName: 'Doz. Dr. Müslüm Ergün',
      title: 'Facharzt für Urologie',
      role: 'Leiter der Abteilung für Urologie — İstanbul Atlas Üniversitesi',
      bio: [
        'Doz. Dr. Müslüm Ergün ist Facharzt für Urologie mit mehr als 18 Jahren chirurgischer Erfahrung. Er hat über 5.230 chirurgische Eingriffe in der robotischen und laparoskopischen Chirurgie, Endourologie und Steinchirurgie, Andrologie, Uroonkologie sowie funktionellen und rekonstruktiven Urologie durchgeführt. Derzeit ist er Leiter der Abteilung für Urologie an der İstanbul Atlas Üniversitesi und operiert im Medical Park Bahçelievler in Istanbul.',
        'Internationalen Patienten bietet er einen transparenten Ablauf, einen evidenzbasierten Ansatz und individuelle Behandlungspläne – mit besonderer Erfahrung bei komplexen und Redo-(Revisions-)Fällen.'
      ],
      education: [
        { year: '2000–2004', item: 'Medizinische Fakultät — Uludağ Üniversitesi' },
        {
          year: '2009–2014',
          item: 'Facharztausbildung Urologie — Antalya Eğitim ve Araştırma Hastanesi',
          note: 'Dissertation: „Der Einfluss der Länge des Prostatabiopsie-Zylinders auf die Diagnose von Prostatakrebs“ (Betreuer: Murat Savaş)'
        },
        { year: '2019', item: 'Assistenzprofessor — İstanbul Atlas Üniversitesi' },
        { year: '2025', item: 'Leiter der Abteilung für Urologie — İstanbul Atlas Üniversitesi' },
        { year: '2026', item: 'Altınbaş Üniversitesi, Medical Park Hastanesi' }
      ],
      courses: [
        { year: '2024', item: 'Praktischer Kurs für sakrale Neuromodulation — 33. Nationaler Urologie-Kongress, Antalya' },
        { year: '2009', item: 'Grundkurs Urodynamik — 1. Nationaler Kongress für weibliche und funktionelle Urologie, Antalya' },
        { year: '2014', item: 'Schulungskurs für flexible URS — Regionales Endourologie-Fortbildungstreffen, Van' }
      ],
      awards,
      publications
    },
    ru: {
      fullName: 'Доцент, д-р Мюслюм Эргюн',
      title: 'Врач-уролог',
      role: 'Заведующий кафедрой урологии — İstanbul Atlas Üniversitesi',
      bio: [
        'Доцент, д-р Мюслюм Эргюн — специалист-уролог с более чем 18-летним хирургическим опытом. Он выполнил свыше 5 230 хирургических вмешательств в области роботической и лапароскопической хирургии, эндоурологии и хирургии камней, андрологии, онкоурологии, а также функциональной и реконструктивной урологии. В настоящее время он заведует кафедрой урологии в İstanbul Atlas Üniversitesi и оперирует в Medical Park Bahçelievler в Стамбуле.',
        'Иностранным пациентам он предлагает прозрачный процесс, доказательный подход и индивидуальные планы лечения, обладая особым опытом в сложных и повторных (redo) случаях.'
      ],
      education: [
        { year: '2000–2004', item: 'Медицинский факультет — Uludağ Üniversitesi' },
        {
          year: '2009–2014',
          item: 'Ординатура по урологии — Antalya Eğitim ve Araştırma Hastanesi',
          note: 'Диссертация: «Влияние длины биопсийного столбика простаты на диагностику рака простаты» (научный руководитель: Murat Savaş)'
        },
        { year: '2019', item: 'Ассистент-профессор — İstanbul Atlas Üniversitesi' },
        { year: '2025', item: 'Заведующий кафедрой урологии — İstanbul Atlas Üniversitesi' },
        { year: '2026', item: 'Altınbaş Üniversitesi, Medical Park Hastanesi' }
      ],
      courses: [
        { year: '2024', item: 'Практический курс по сакральной нейромодуляции — 33-й Национальный урологический конгресс, Анталья' },
        { year: '2009', item: 'Базовый курс по уродинамике — 1-й Национальный конгресс женской и функциональной урологии, Анталья' },
        { year: '2014', item: 'Учебный курс по гибкой URS — Региональное учебное собрание по эндоурологии, Ван' }
      ],
      awards,
      publications
    }
  }
};

/** Cerrahın dile göre tam adı (akademik unvan + ad). */
export function surgeonFullName(locale: Locale): string {
  return (surgeon.i18n[locale] ?? surgeon.i18n.en!).fullName;
}

/**
 * Cerrah profilinde ayrı bir bölüm olarak vurgulanan rekonstrüktif üroloji
 * deneyimi (fiyat/hacim değil; redo ve kompleks vaka odaklı). tr/en dolu.
 */
export const surgeonReconstructive: Partial<
  Record<Locale, { body: string; points: string[] }>
> = {
  tr: {
    body: 'Cerrahımız rekonstrüktif ürolojide (üretroplasti, piyeloplasti, fistül onarımı ve üreter rekonstrüksiyonu) yoğun deneyime sahiptir. Bu alanda öne çıkan gösterge vaka sayısı değil; karmaşık, nadir ve daha önce başka merkezde başarısız olmuş (redo) vakalardaki sonuçtur.',
    points: [
      '347+ rekonstrüktif vaka (üretroplasti, piyeloplasti, fistül onarımı ve üreter rekonstrüksiyonu)',
      'Kompleks, nadir ve başka merkezde başarısız olmuş (redo) vakalarda yoğun deneyim',
      'Buccal mukoza grefti ve ileal interpozisyon gibi ileri tekniklerde deneyim'
    ]
  },
  en: {
    body: 'Our surgeon has extensive experience in reconstructive urology (urethroplasty, pyeloplasty, fistula repair and ureteral reconstruction). What stands out here is not case volume but outcomes in complex, rare and previously failed (redo) cases referred from other centers.',
    points: [
      '347+ reconstructive cases (urethroplasty, pyeloplasty, fistula repair and ureteral reconstruction)',
      'Substantial experience in complex, rare and previously failed (redo) cases referred from other centers',
      'Experience in advanced techniques such as buccal mucosa graft and ileal interposition'
    ]
  },
  ar: {
    body: 'يتمتّع جرّاحنا بخبرة واسعة في المسالك البولية الترميمية (رأب الإحليل، ورأب حوض الكلية، وإصلاح الناسور، وإعادة بناء الحالب). والمؤشّر البارز هنا ليس عدد الحالات، بل النتيجة في الحالات المعقّدة والنادرة والتي سبق أن فشلت في مركز آخر (redo).',
    points: [
      'أكثر من 347 حالة ترميمية (رأب الإحليل، رأب حوض الكلية، إصلاح الناسور، وإعادة بناء الحالب)',
      'خبرة واسعة في الحالات المعقدة والنادرة والتي سبق أن فشلت في مركز آخر (redo)',
      'خبرة في التقنيات المتقدّمة مثل طُعم الغشاء المخاطي للخد والإحلال اللفائفي'
    ]
  },
  de: {
    body: 'Unser Chirurg verfügt über umfangreiche Erfahrung in der rekonstruktiven Urologie (Urethroplastik, Nierenbeckenplastik, Fistelverschluss und Harnleiter-Rekonstruktion). Entscheidend ist hier nicht die Fallzahl, sondern das Ergebnis in komplexen, seltenen und andernorts zuvor gescheiterten (Redo-)Fällen.',
    points: [
      'über 347 rekonstruktive Fälle (Urethroplastik, Nierenbeckenplastik, Fistelverschluss und Harnleiter-Rekonstruktion)',
      'Umfangreiche Erfahrung bei komplexen, seltenen und andernorts zuvor gescheiterten (Redo-)Fällen',
      'Erfahrung mit fortgeschrittenen Techniken wie Mundschleimhaut-Transplantat und Ileuminterposition'
    ]
  },
  ru: {
    body: 'Наш хирург обладает большим опытом в реконструктивной урологии (уретропластика, пиелопластика, пластика свища и реконструкция мочеточника). Здесь важно не число операций, а результат в сложных, редких и ранее неудавшихся в другом месте (redo) случаях.',
    points: [
      'более 347 реконструктивных случаев (уретропластика, пиелопластика, пластика свища и реконструкция мочеточника)',
      'Большой опыт в сложных, редких и ранее неудавшихся в другом месте (redo) случаях',
      'Опыт в продвинутых методиках, таких как трансплантат слизистой щеки и кишечная интерпозиция'
    ]
  }
};
