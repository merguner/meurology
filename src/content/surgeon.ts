import type { Locale } from '@/i18n/routing';

/**
 * CERRAH PROFİLİ — gerçek CV verisiyle (unvan, akademik kariyer, eğitim,
 * kurslar/sertifikalar, ödül ve seçilmiş yayınlar) dolduruldu.
 *
 * TODO-DOGRULA (doğrulanmış veri gelmedi, uydurma YAPILMADI):
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
  diplomaRegistryNo: string; // Diploma / uzmanlık belge tescil no
  societies: { name: string; note: string }[]; // EAU, AUA vb.
  i18n: Partial<
    Record<
      Locale,
      {
        /** Akademik unvan + ad (ör. "Doç. Dr. Müslüm Ergün") — dile göre. */
        fullName: string;
        /**
         * YALNIZCA unvan (ör. "Doç. Dr."). schema.org Physician
         * honorificPrefix alani icin: unvanin ad sanilmasini onler.
         */
        honorificPrefix: string;
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
    authors: 'Ergün M, Sağır S, Hacıbey İ',
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
  // Doğrulandı (Bölüm 0): Türkçe, İngilizce.
  languages: ['tr', 'en'],
  diplomaRegistryNo: '121270', // Diploma / uzmanlık belge tescil no
  // Dernek üyelikleri kaldırıldı (doğrulanmamıştı). Doğrulanmış üyelik(ler)
  // eklenecekse buraya { name, note } olarak girin; cerrah sayfasında tekrar gösterilir.
  societies: [],
  i18n: {
    tr: {
      fullName: 'Doç. Dr. Müslüm Ergün',
      honorificPrefix: 'Doç. Dr.',
      title: 'Üroloji Uzmanı',
      role: 'Üroloji Kliniği — Altınbaş Üniversitesi',
      bio: [
        'Doç. Dr. Müslüm Ergün bir üroloji uzmanıdır. Robotik ve laparoskopik cerrahi, endoüroloji ve taş cerrahisi, androloji, üroonkoloji ile fonksiyonel ve rekonstrüktif üroloji alanlarında çalışmaktadır. Hâlen Altınbaş Üniversitesi Üroloji Kliniği’nde görev yapmakta, ameliyatlarını İstanbul’daki Medical Park Bahçelievler ve LİV Hospital Topkapı’da gerçekleştirmektedir.',
        'Uluslararası hastalara şeffaf bir süreç, kanıta dayalı bir yaklaşım ve kişiye özel tedavi planları sunar. Özellikle kompleks ve redo (yeniden onarım) vakalarında deneyimlidir.'
      ],
      education: [
        { year: '2004', item: 'Tıp Fakültesi mezuniyeti — Uludağ Üniversitesi' },
        {
          year: '2009–2014',
          item: 'Üroloji Uzmanlık Eğitimi — Antalya Eğitim ve Araştırma Hastanesi',
          note: 'Tez: “Prostat biyopsi kor uzunluğunun prostat kanseri teşhisi üzerindeki etkisi” (Danışman: Murat Savaş)'
        },
        { year: '2019', item: 'Doktor Öğretim Üyesi — İstanbul Atlas Üniversitesi' },
        { year: '2025', item: 'Üroloji Anabilim Dalı Başkanı — İstanbul Atlas Üniversitesi Tıp Fakültesi' },
        { year: 'Ocak 2026', item: 'Doçentlik unvanı' },
        { year: '2026', item: 'Üroloji Kliniği — Altınbaş Üniversitesi' }
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
      honorificPrefix: 'Assoc. Prof. Dr.',
      title: 'Urologist',
      role: 'Department of Urology — Altınbaş Üniversitesi',
      bio: [
        'Assoc. Prof. Dr. Müslüm Ergün is a urology specialist. His practice covers robotic and laparoscopic surgery, endourology and stone surgery, andrology, uro-oncology, and functional and reconstructive urology. He currently works at the Department of Urology, Altınbaş Üniversitesi, and operates at Medical Park Bahçelievler and LİV Hospital Topkapı in Istanbul.',
        'He offers international patients a transparent process, an evidence-based approach and individualized treatment plans, with particular experience in complex and redo (revision) cases.'
      ],
      education: [
        { year: '2004', item: 'Medical School graduation — Uludağ Üniversitesi' },
        {
          year: '2009–2014',
          item: 'Urology Residency — Antalya Eğitim ve Araştırma Hastanesi',
          note: 'Thesis: “The effect of prostate biopsy core length on the diagnosis of prostate cancer” (Advisor: Murat Savaş)'
        },
        { year: '2019', item: 'Assistant Professor — İstanbul Atlas Üniversitesi' },
        { year: '2025', item: 'Head of the Department of Urology — İstanbul Atlas Üniversitesi' },
        { year: 'January 2026', item: 'Associate Professorship' },
        { year: '2026', item: 'Department of Urology — Altınbaş Üniversitesi' }
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
      honorificPrefix: 'الأستاذ المشارك د.',
      title: 'أخصائي المسالك البولية',
      role: 'قسم المسالك البولية — Altınbaş Üniversitesi',
      bio: [
        'الأستاذ المشارك د. مسلم إرغن اختصاصي في المسالك البولية. يشمل مجال عمله الجراحة الروبوتية وبالمنظار، وجراحة المناظير الداخلية والحصوات، وطب الذكورة، وأورام المسالك البولية، والمسالك البولية الوظيفية والترميمية. يعمل حاليًا في قسم المسالك البولية بجامعة Altınbaş Üniversitesi، ويُجري عملياته في Medical Park Bahçelievler وLİV Hospital Topkapı بإسطنبول.',
        'يقدّم للمرضى الدوليين مسارًا شفافًا ونهجًا قائمًا على الأدلة وخططًا علاجية مخصّصة، مع خبرة خاصة في الحالات المعقدة وحالات إعادة الجراحة (redo).'
      ],
      education: [
        { year: '2004', item: 'التخرج من كلية الطب — Uludağ Üniversitesi' },
        {
          year: '2009–2014',
          item: 'اختصاص المسالك البولية — Antalya Eğitim ve Araştırma Hastanesi',
          note: 'الأطروحة: «تأثير طول عيّنة خزعة البروستاتا على تشخيص سرطان البروستاتا» (المشرف: Murat Savaş)'
        },
        { year: '2019', item: 'أستاذ مساعد — İstanbul Atlas Üniversitesi' },
        { year: '2025', item: 'رئيس قسم المسالك البولية — İstanbul Atlas Üniversitesi Tıp Fakültesi' },
        { year: 'يناير 2026', item: 'لقب أستاذ مشارك' },
        { year: '2026', item: 'قسم المسالك البولية — Altınbaş Üniversitesi' }
      ],
      courses: [
        { year: '2024', item: 'دورة عملية في التحفيز العصبي العجزي — المؤتمر الوطني الثالث والثلاثون للمسالك البولية، أنطاليا' },
        { year: '2009', item: 'دورة أساسيات ديناميكا البول — المؤتمر الوطني الأول لمسالك النساء والمسالك الوظيفية، أنطاليا' },
        { year: '2014', item: 'دورة تدريبية في تفتيت الحصى بالمنظار المرن (URS) — الاجتماع التدريبي الإقليمي لتنظير المسالك، فان' }
      ],
      awards,
      publications
    },
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
      'Üretroplasti, piyeloplasti, fistül onarımı ve üreter rekonstrüksiyonunda cerrahi deneyim',
      'Kompleks, nadir ve başka merkezde başarısız olmuş (redo) vakalarda yoğun deneyim',
      'Buccal mukoza grefti ve ileal interpozisyon gibi ileri tekniklerde deneyim'
    ]
  },
  en: {
    body: 'Our surgeon has extensive experience in reconstructive urology (urethroplasty, pyeloplasty, fistula repair and ureteral reconstruction). What stands out here is not case volume but outcomes in complex, rare and previously failed (redo) cases referred from other centers.',
    points: [
      'Surgical experience in urethroplasty, pyeloplasty, fistula repair and ureteral reconstruction',
      'Substantial experience in complex, rare and previously failed (redo) cases referred from other centers',
      'Experience in advanced techniques such as buccal mucosa graft and ileal interposition'
    ]
  },
  ar: {
    body: 'يتمتّع جرّاحنا بخبرة واسعة في المسالك البولية الترميمية (رأب الإحليل، ورأب حوض الكلية، وإصلاح الناسور، وإعادة بناء الحالب). والمؤشّر البارز هنا ليس عدد الحالات، بل النتيجة في الحالات المعقّدة والنادرة والتي سبق أن فشلت في مركز آخر (redo).',
    points: [
      'خبرة جراحية في رأب الإحليل ورأب حوض الكلية وإصلاح الناسور وإعادة بناء الحالب',
      'خبرة واسعة في الحالات المعقدة والنادرة والتي سبق أن فشلت في مركز آخر (redo)',
      'خبرة في التقنيات المتقدّمة مثل طُعم الغشاء المخاطي للخد والإحلال اللفائفي'
    ]
  },
};
