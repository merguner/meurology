import { locales, type Locale } from '@/i18n/routing';

/**
 * BLOG / BİLGİ MERKEZİ
 * SEO odaklı uzun içerik. Şu an yapılandırılmış veri olarak tutuluyor
 * (CMS-ready). İleride MDX'e taşımak için: her post'un `body` alanını bir
 * .mdx dosyasına çıkarıp burada sadece meta veriyi bırakabilirsiniz.
 * Örnek içerik eğiticidir; genişletilebilir.
 */
export interface BlogSection {
  heading: string;
  paragraphs: string[];
}

/** Blog kategorileri (prompt m.4.7). Etiketler messages Blog.categories.* altında. */
export type BlogCategory =
  | 'prostate'
  | 'bph'
  | 'andrology'
  | 'stones'
  | 'oncology'
  | 'femaleUrology'
  | 'healthTourism';

/** Kaynakça maddesi. */
export interface BlogSource {
  label: string;
  url?: string;
}

export interface BlogPost {
  slug: string;
  /** İlk yayın tarihi (ISO). */
  date: string;
  /** Son güncelleme tarihi (ISO). Yoksa date kullanılır. */
  updated?: string;
  /** Kategori — liste filtreleme ve iç linkleme için. */
  category: BlogCategory;
  treatmentSlug?: string; // ilgili tedavi (opsiyonel)
  /**
   * TASLAK. true iken yazı yayında görünmez (liste, sitemap, statik üretim).
   * Tıbbi metinler cerrah onayına kadar true kalır (prompt m.8.3).
   */
  draft?: boolean;
  /** Kaynakça — tüm dillerde aynı (başlıklar çoğunlukla İngilizce). */
  sources?: BlogSource[];
  /**
   * YAZININ YAYINLANDIĞI DİLLER.
   *
   * Blog yazıları ÇEVİRİ DEĞİLDİR — her pazarın kendi arama davranışına göre
   * yazılır (içerik planı böl. C). "HoLEP mi ThuLEP mi" sorusu Türkiye'de
   * aranır; "cost of robotic prostatectomy in Turkey" sorusu Türkiye'de
   * aranmaz. Bir yazıyı ilgisiz pazarda yayımlamak hem faydasız hem de
   * hreflang açısından yanlıştır.
   *
   * Bu alan boş bırakılırsa yazı TÜM dillerde yayınlanır (i18n'de karşılığı
   * olmayan dilde en/tr'ye düşer). Yalnızca gerçekten her dile çevrilmiş
   * yazılarda boş bırakın.
   *
   * ÖNEMLİ: Türkiye yönetmeliği gereği fiyat/karşılaştırma içeren yazılar
   * 'tr' listesine ALINMAZ (src/config/features.ts ile aynı mantık).
   */
  languages?: Locale[];
  i18n: Partial<
    Record<
      Locale,
      {
        title: string;
        excerpt: string;
        metaTitle: string;
        metaDescription: string;
        sections: BlogSection[];
      }
    >
  >;
}

/**
 * Okuma süresini (dakika) içerikten hesaplar — elle girilmez.
 * Dakikada ~200 kelime varsayımı; en az 1 dakika.
 */
export function readingMinutes(post: BlogPost, locale: Locale): number {
  const c = post.i18n[locale] ?? post.i18n.en ?? post.i18n.tr;
  if (!c) return 1;
  const words = c.sections
    .flatMap((s) => [s.heading, ...s.paragraphs])
    .join(' ')
    .trim()
    .split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'prostat-kanseri-belirtileri-ve-tedavi-secenekleri',
    date: '2026-01-15',
    updated: '2026-10-03',
    category: 'prostate',
    sources: [
      {
        label: 'EAU Guidelines on Prostate Cancer — European Association of Urology',
        url: 'https://uroweb.org/guidelines/prostate-cancer'
      }
    ],
    treatmentSlug: 'robotik-prostatektomi',
    i18n: {
      tr: {
        title: 'Prostat Kanseri: Belirtiler ve Tedavi Seçenekleri',
        excerpt:
          'Prostat kanserinde erken tanının önemi, PSA testi ve robotik cerrahi dahil tedavi seçeneklerine genel bir bakış.',
        metaTitle: 'Prostat Kanseri Belirtileri ve Tedavi Seçenekleri',
        metaDescription:
          'Prostat kanseri belirtileri, PSA testi, tanı süreci ve robotik prostatektomi dahil tedavi seçenekleri hakkında bilgilendirici rehber.',
        sections: [
          {
            heading: 'Prostat kanseri nedir?',
            paragraphs: [
              'Prostat kanseri, erkeklerde en sık görülen kanserlerden biridir ve erken evrede genellikle belirti vermez. Bu nedenle düzenli kontrol önemlidir.'
            ]
          },
          {
            heading: 'Belirtiler ve tanı',
            paragraphs: [
              'İdrar yapmada zorluk, sık idrara çıkma veya idrarda kan gibi belirtiler görülebilir. Tanıda PSA kan testi, muayene, görüntüleme ve gerektiğinde biyopsi kullanılır.'
            ]
          },
          {
            heading: 'Tedavi seçenekleri',
            paragraphs: [
              'Tedavi; kanserin evresine, yaşa ve hasta tercihine göre planlanır. Seçenekler aktif izlem, cerrahi (robotik prostatektomi) ve radyoterapiyi içerir.',
              'Bu içerik genel bilgilendirme amaçlıdır ve tıbbi tavsiye yerine geçmez. Kişisel değerlendirme için ekibimizle iletişime geçin.'
            ]
          }
        ]
      },
      en: {
        title: 'Prostate Cancer: Symptoms and Treatment Options',
        excerpt:
          'An overview of the importance of early detection, the PSA test and treatment options including robotic surgery.',
        metaTitle: 'Prostate Cancer Symptoms and Treatment Options',
        metaDescription:
          'An informative guide to prostate cancer symptoms, the PSA test, the diagnostic process and treatment options including robotic prostatectomy.',
        sections: [
          {
            heading: 'What is prostate cancer?',
            paragraphs: [
              'Prostate cancer is one of the most common cancers in men and often causes no symptoms in early stages, which is why regular check-ups matter.'
            ]
          },
          {
            heading: 'Symptoms and diagnosis',
            paragraphs: [
              'Symptoms may include difficulty urinating, frequent urination or blood in the urine. Diagnosis uses the PSA blood test, examination, imaging and, when needed, biopsy.'
            ]
          },
          {
            heading: 'Treatment options',
            paragraphs: [
              'Treatment is planned according to stage, age and patient preference. Options include active surveillance, surgery (robotic prostatectomy) and radiotherapy.',
              'This content is for general information only and is not a substitute for medical advice. Contact our team for a personal assessment.'
            ]
          }
        ]
      },
      ar: {
        title: 'سرطان البروستاتا: الأعراض وخيارات العلاج',
        excerpt: 'نظرة عامة على أهمية الكشف المبكر واختبار PSA وخيارات العلاج بما فيها الجراحة الروبوتية.',
        metaTitle: 'أعراض سرطان البروستاتا وخيارات العلاج',
        metaDescription: 'دليل تعريفي حول أعراض سرطان البروستاتا واختبار PSA ومسار التشخيص وخيارات العلاج بما فيها استئصال البروستاتا بالروبوت.',
        sections: [
          {
            heading: 'ما هو سرطان البروستاتا؟',
            paragraphs: [
              'سرطان البروستاتا من أكثر السرطانات شيوعًا لدى الرجال، وغالبًا لا يسبّب أعراضًا في مراحله المبكرة؛ لذا تُعدّ الفحوصات المنتظمة مهمة.'
            ]
          },
          {
            heading: 'الأعراض والتشخيص',
            paragraphs: [
              'قد تشمل الأعراض صعوبة التبول أو كثرته أو وجود دم في البول. ويعتمد التشخيص على تحليل PSA والفحص والتصوير وأخذ خزعة عند الحاجة.'
            ]
          },
          {
            heading: 'خيارات العلاج',
            paragraphs: [
              'يُخطَّط للعلاج حسب المرحلة والعمر وتفضيل المريض. وتشمل الخيارات المراقبة النشطة والجراحة (استئصال البروستاتا بالروبوت) والعلاج الإشعاعي.',
              'هذا المحتوى لأغراض المعلومات العامة فقط وليس بديلاً عن الاستشارة الطبية. تواصل مع فريقنا لتقييم شخصي.'
            ]
          }
        ]
      },
      de: {
        title: 'Prostatakrebs: Symptome und Behandlungsoptionen',
        excerpt: 'Ein Überblick über die Bedeutung der Früherkennung, den PSA-Test und Behandlungsoptionen einschließlich robotischer Chirurgie.',
        metaTitle: 'Prostatakrebs – Symptome und Behandlungsoptionen',
        metaDescription: 'Ein informativer Leitfaden zu Symptomen von Prostatakrebs, dem PSA-Test, dem Diagnoseprozess und Behandlungsoptionen einschließlich robotischer Prostatektomie.',
        sections: [
          {
            heading: 'Was ist Prostatakrebs?',
            paragraphs: [
              'Prostatakrebs ist eine der häufigsten Krebserkrankungen bei Männern und verursacht im Frühstadium oft keine Symptome – deshalb sind regelmäßige Vorsorgeuntersuchungen wichtig.'
            ]
          },
          {
            heading: 'Symptome und Diagnose',
            paragraphs: [
              'Symptome können Probleme beim Wasserlassen, häufiges Wasserlassen oder Blut im Urin sein. Zur Diagnose dienen der PSA-Bluttest, die Untersuchung, Bildgebung und bei Bedarf eine Biopsie.'
            ]
          },
          {
            heading: 'Behandlungsoptionen',
            paragraphs: [
              'Die Behandlung wird nach Stadium, Alter und Patientenpräferenz geplant. Zu den Optionen zählen aktive Überwachung, Operation (robotische Prostatektomie) und Strahlentherapie.',
              'Dieser Inhalt dient nur der allgemeinen Information und ersetzt keine ärztliche Beratung. Kontaktieren Sie unser Team für eine persönliche Einschätzung.'
            ]
          }
        ]
      },
      ru: {
        title: 'Рак простаты: симптомы и варианты лечения',
        excerpt: 'Обзор важности раннего выявления, теста PSA и вариантов лечения, включая роботическую хирургию.',
        metaTitle: 'Симптомы рака простаты и варианты лечения',
        metaDescription: 'Информативное руководство по симптомам рака простаты, тесту PSA, процессу диагностики и вариантам лечения, включая роботическую простатэктомию.',
        sections: [
          {
            heading: 'Что такое рак простаты?',
            paragraphs: [
              'Рак простаты — один из самых частых видов рака у мужчин и на ранних стадиях часто протекает бессимптомно, поэтому важны регулярные обследования.'
            ]
          },
          {
            heading: 'Симптомы и диагностика',
            paragraphs: [
              'Симптомы могут включать затруднённое мочеиспускание, учащённое мочеиспускание или кровь в моче. Для диагностики используют анализ крови на PSA, осмотр, визуализацию и при необходимости биопсию.'
            ]
          },
          {
            heading: 'Варианты лечения',
            paragraphs: [
              'Лечение планируется с учётом стадии, возраста и предпочтений пациента. Варианты включают активное наблюдение, операцию (роботическую простатэктомию) и лучевую терапию.',
              'Этот материал носит только общий информационный характер и не заменяет консультацию врача. Свяжитесь с нашей командой для индивидуальной оценки.'
            ]
          }
        ]
      },
      fr: {
        title: 'Cancer de la prostate : symptômes et options thérapeutiques',
        excerpt:
          'Un aperçu de l’importance du dépistage précoce, du dosage du PSA et des options de traitement, dont la chirurgie robotique.',
        metaTitle: 'Cancer de la prostate : symptômes et options de traitement',
        metaDescription:
          'Un guide informatif sur les symptômes du cancer de la prostate, le dosage du PSA, la démarche diagnostique et les options thérapeutiques dont la prostatectomie robotique.',
        sections: [
          {
            heading: 'Qu’est-ce que le cancer de la prostate ?',
            paragraphs: [
              'Le cancer de la prostate est l’un des cancers les plus fréquents chez l’homme et ne provoque souvent aucun symptôme à un stade précoce : c’est pourquoi un suivi régulier est important.'
            ]
          },
          {
            heading: 'Symptômes et diagnostic',
            paragraphs: [
              'Les signes possibles sont des difficultés à uriner, des mictions fréquentes ou du sang dans les urines. Le diagnostic repose sur le dosage sanguin du PSA, l’examen clinique, l’imagerie et, si nécessaire, une biopsie.'
            ]
          },
          {
            heading: 'Options thérapeutiques',
            paragraphs: [
              'Le traitement est planifié selon le stade, l’âge et la préférence du patient. Les options comprennent la surveillance active, la chirurgie (prostatectomie robotique) et la radiothérapie.',
              'Ce contenu est fourni à titre d’information générale et ne remplace pas un avis médical. Contactez notre équipe pour une évaluation personnalisée.'
            ]
          }
        ]
      }
    }
  },
  {
    slug: 'bobrek-tasi-nasil-olusur-ve-korunma-yollari',
    date: '2026-02-10',
    updated: '2026-10-03',
    category: 'stones',
    sources: [
      {
        label: 'EAU Guidelines on Urolithiasis — European Association of Urology',
        url: 'https://uroweb.org/guidelines/urolithiasis'
      }
    ],
    treatmentSlug: 'bobrek-tasi',
    i18n: {
      tr: {
        title: 'Böbrek Taşı Nasıl Oluşur ve Nasıl Korunulur?',
        excerpt: 'Böbrek taşı oluşum nedenleri, risk faktörleri ve günlük hayatta alınabilecek önlemler.',
        metaTitle: 'Böbrek Taşı Nasıl Oluşur? Korunma Yolları',
        metaDescription:
          'Böbrek taşı oluşum nedenleri, risk faktörleri, beslenme önerileri ve tedavi yöntemleri hakkında bilgilendirici rehber.',
        sections: [
          {
            heading: 'Böbrek taşı neden oluşur?',
            paragraphs: [
              'Böbrek taşları, idrardaki bazı minerallerin yoğunlaşıp kristalleşmesiyle oluşur. Yetersiz su tüketimi en önemli risk faktörlerinden biridir.'
            ]
          },
          {
            heading: 'Korunma önerileri',
            paragraphs: [
              'Yeterli su içmek, tuz ve hayvansal protein tüketimini dengelemek ve düzenli takip taş oluşma riskini azaltabilir.',
              'Bu içerik genel bilgilendirme amaçlıdır. Tekrarlayan taş öykünüz varsa değerlendirme için bize ulaşın.'
            ]
          }
        ]
      },
      en: {
        title: 'How Kidney Stones Form and How to Prevent Them',
        excerpt: 'Causes of kidney stone formation, risk factors and everyday preventive measures.',
        metaTitle: 'How Do Kidney Stones Form? Prevention Tips',
        metaDescription:
          'An informative guide to why kidney stones form, risk factors, dietary tips and treatment methods.',
        sections: [
          {
            heading: 'Why do kidney stones form?',
            paragraphs: [
              'Kidney stones form when certain minerals in urine concentrate and crystallize. Insufficient water intake is one of the main risk factors.'
            ]
          },
          {
            heading: 'Prevention tips',
            paragraphs: [
              'Drinking enough water, balancing salt and animal protein intake and regular follow-up can reduce the risk of stone formation.',
              'This content is for general information only. If you have recurrent stones, contact us for an assessment.'
            ]
          }
        ]
      },
      ar: {
        title: 'كيف تتكوّن حصوات الكلى وكيف نتجنّبها؟',
        excerpt: 'أسباب تكوّن حصوات الكلى وعوامل الخطر والتدابير الوقائية في الحياة اليومية.',
        metaTitle: 'كيف تتكوّن حصوات الكلى؟ طرق الوقاية',
        metaDescription: 'دليل تعريفي حول أسباب تكوّن حصوات الكلى وعوامل الخطر ونصائح التغذية وطرق العلاج.',
        sections: [
          {
            heading: 'لماذا تتكوّن حصوات الكلى؟',
            paragraphs: [
              'تتكوّن حصوات الكلى عند تركّز بعض المعادن في البول وتبلورها. ويُعدّ قلة شرب الماء أحد أهم عوامل الخطر.'
            ]
          },
          {
            heading: 'نصائح للوقاية',
            paragraphs: [
              'شرب كمية كافية من الماء، وموازنة استهلاك الملح والبروتين الحيواني، والمتابعة المنتظمة قد تقلّل خطر تكوّن الحصوات.',
              'هذا المحتوى لأغراض المعلومات العامة. إذا كان لديك تاريخ متكرر للحصوات، فتواصل معنا للتقييم.'
            ]
          }
        ]
      },
      de: {
        title: 'Wie Nierensteine entstehen und wie man ihnen vorbeugt',
        excerpt: 'Ursachen der Nierensteinbildung, Risikofaktoren und alltägliche Vorbeugemaßnahmen.',
        metaTitle: 'Wie entstehen Nierensteine? Tipps zur Vorbeugung',
        metaDescription: 'Ein informativer Leitfaden dazu, warum Nierensteine entstehen, zu Risikofaktoren, Ernährungstipps und Behandlungsmethoden.',
        sections: [
          {
            heading: 'Warum entstehen Nierensteine?',
            paragraphs: [
              'Nierensteine entstehen, wenn bestimmte Mineralien im Urin konzentrieren und auskristallisieren. Zu geringe Wasseraufnahme ist einer der wichtigsten Risikofaktoren.'
            ]
          },
          {
            heading: 'Tipps zur Vorbeugung',
            paragraphs: [
              'Ausreichend Wasser trinken, den Salz- und tierischen Eiweißkonsum ausgleichen und regelmäßige Kontrollen können das Risiko der Steinbildung senken.',
              'Dieser Inhalt dient nur der allgemeinen Information. Wenn Sie wiederkehrende Steine haben, kontaktieren Sie uns für eine Bewertung.'
            ]
          }
        ]
      },
      ru: {
        title: 'Как образуются камни в почках и как их предотвратить',
        excerpt: 'Причины образования камней в почках, факторы риска и повседневные меры профилактики.',
        metaTitle: 'Как образуются камни в почках? Советы по профилактике',
        metaDescription: 'Информативное руководство о том, почему образуются камни в почках, о факторах риска, советах по питанию и методах лечения.',
        sections: [
          {
            heading: 'Почему образуются камни в почках?',
            paragraphs: [
              'Камни в почках образуются, когда некоторые минералы в моче концентрируются и кристаллизуются. Недостаточное потребление воды — один из главных факторов риска.'
            ]
          },
          {
            heading: 'Советы по профилактике',
            paragraphs: [
              'Достаточное потребление воды, баланс соли и животного белка и регулярное наблюдение могут снизить риск образования камней.',
              'Этот материал носит общий информационный характер. При повторяющихся камнях свяжитесь с нами для оценки.'
            ]
          }
        ]
      },
      fr: {
        title: 'Comment se forment les calculs rénaux et comment les prévenir',
        excerpt: 'Causes de formation des calculs rénaux, facteurs de risque et mesures préventives au quotidien.',
        metaTitle: 'Comment se forment les calculs rénaux ? Conseils de prévention',
        metaDescription:
          'Un guide informatif sur les causes de formation des calculs rénaux, les facteurs de risque, les conseils alimentaires et les méthodes de traitement.',
        sections: [
          {
            heading: 'Pourquoi les calculs rénaux se forment-ils ?',
            paragraphs: [
              'Les calculs rénaux se forment lorsque certains minéraux présents dans l’urine se concentrent et cristallisent. Un apport insuffisant en eau est l’un des principaux facteurs de risque.'
            ]
          },
          {
            heading: 'Conseils de prévention',
            paragraphs: [
              'Boire suffisamment d’eau, équilibrer les apports en sel et en protéines animales et assurer un suivi régulier réduisent le risque de récidive.',
              'Ce contenu est fourni à titre d’information générale. En cas de calculs récidivants, contactez-nous pour une évaluation.'
            ]
          }
        ]
      }
    }
  },
  {
    slug: 'holep-mi-thulep-mi-prostat-buyuklugune-gore-secim',
    date: '2026-10-04',
    category: 'bph',
    languages: ['tr'],
    treatmentSlug: 'holep',
    sources: [
      { label: 'EAU Guidelines on Management of Non-Neurogenic Male LUTS — European Association of Urology', url: 'https://uroweb.org/guidelines/management-of-non-neurogenic-male-luts' }
    ],
    i18n: {
      tr: {
        title: 'HoLEP mi ThuLEP mi? Prostat Büyüklüğüne Göre Seçim',
        excerpt:
          'İki yöntem de prostatın büyümüş kısmını çıkarır ve sonuçları birbirine yakındır. Asıl belirleyici lazerin markası değil, prostatın büyüklüğü, idrar yolunun durumu ve cerrahın hangi sistemle çalıştığıdır.',
        metaTitle: 'HoLEP mi ThuLEP mi? Hangi Prostatta Hangisi Seçilir',
        metaDescription:
          'HoLEP ve ThuLEP arasındaki gerçek farklar, prostat büyüklüğünün seçime etkisi, kanama riski, geçici idrar kaçırma ve hangi durumda hangi yöntemin öne çıktığı.',
        sections: [
          {
            heading: 'İki yöntem aslında aynı ameliyatın iki farklı enerjisidir',
            paragraphs: [
              'HoLEP ve ThuLEP ayrı ameliyatlar değildir. İkisi de "enükleasyon" dediğimiz aynı işi yapar: prostatın idrar yolunu sıkıştıran iç kısmını, dış kapsülünden bir bütün hâlinde ayırıp mesaneye iter, sonra orada küçük parçalara bölüp dışarı alır. Fark, bu ayırma işleminde kullanılan lazerin cinsindedir — HoLEP holmiyum, ThuLEP tulyum lazer kullanır.',
              'Bu ayrımı bilmek önemli, çünkü iki ismin pazarlandığı kadar büyük bir fark yoktur. Hastaya "size şu lazer yapılacak" denildiğinde sorulması gereken soru markanın ne olduğu değil, prostatın tamamının çıkarılıp çıkarılmayacağıdır. Enükleasyon yapılıyorsa iki yöntemin de uzun vadeli sonucu birbirine yakındır.'
            ]
          },
          {
            heading: 'Prostat büyüklüğü kararın neresinde duruyor',
            paragraphs: [
              'Enükleasyon yöntemlerinin asıl üstünlüğü büyük prostatlarda ortaya çıkar. Klasik TURP ameliyatında prostat büyüdükçe işlem süresi uzar, emilen sıvı miktarı artar ve bir noktadan sonra açık cerrahi gündeme gelir. Enükleasyonda ise prostatın büyüklüğü bu anlamda bir tavan oluşturmaz; bezin tamamı çıkarılabildiği için çok büyük prostatlarda da aynı mantıkla çalışılır.',
              'Bu nedenle prostatınız büyükse esas soru "HoLEP mi ThuLEP mi" değil, "enükleasyon mu, TURP mu" sorusudur. İki lazer arasındaki tercih, bu asıl karardan sonra gelir.',
              'Küçük prostatlarda ise durum tersine döner: orada enükleasyonun sağladığı ek fayda azalır ve TURP ya da uygun hastalarda Rezüm gibi daha az girişimsel seçenekler masaya gelir.'
            ]
          },
          {
            heading: 'Dokunun kesilme biçimindeki fark neye yarar',
            paragraphs: [
              'Tulyum lazerin kesme özelliği holmiyumdan biraz farklıdır; daha düzgün bir kesi yüzeyi bırakma eğilimindedir. Holmiyum lazerin ise darbeli yapısı nedeniyle dokuyu ayırırken mekanik bir etkisi de vardır.',
              'Pratikte bu farkın hastaya yansıması sınırlıdır. Ameliyat sonrası sonda süresi, hastanede kalış ve idrar akım hızındaki düzelme iki yöntemde de benzer seyreder. Bir cerrahın hangi sistemle daha çok çalıştığı, lazerin cinsinden daha belirleyicidir.'
            ]
          },
          {
            heading: 'Kanama ve kan sulandırıcı kullanan hastalar',
            paragraphs: [
              'Enükleasyon yöntemlerinin öne çıktığı alanlardan biri kanama kontrolüdür. Prostat dokusu kapsülden ayrılırken kanayan damarlar işlem sırasında kapatılır ve TURP ile kıyaslandığında kanama daha sınırlı kalma eğilimindedir.',
              'Bu nedenle kalp hastalığı olan, kan sulandırıcı kullanan veya kanama açısından riskli hastalarda enükleasyon mantıklı bir seçenek olarak değerlendirilir. Ancak kan sulandırıcıların ameliyat öncesi yönetimi her hastada ayrı planlanır; ilacınızı kendi kararınızla kesmeyin.'
            ]
          },
          {
            heading: 'Dürüst olunması gereken konu: geçici idrar kaçırma',
            paragraphs: [
              'Enükleasyondan sonra bir süre idrar kaçırma görülebilir. Bunun nedeni prostat çıkarıldığında idrar tutmanın tek sorumlusunun dış büzücü kas hâline gelmesi ve bu kasın yeni duruma alışmasının zaman almasıdır. Çoğu hastada haftalar içinde düzelir.',
              'Bu konu ameliyat öncesinde açıkça konuşulmalıdır. "Hiç olmaz" demek doğru değildir; olabileceğini, genellikle geçici olduğunu ve pelvik taban egzersizlerinin bu süreci kısaltmaya yardımcı olduğunu bilerek ameliyata girmek, beklenmedik bir durumla karşılaşmaktan daha iyidir.'
            ]
          },
          {
            heading: 'Retrograd boşalma: ameliyat sonrası en sık karşılaşılan değişiklik',
            paragraphs: [
              'Prostat ameliyatlarından sonra meninin dışarı çıkmak yerine mesaneye geri kaçması sık görülür. Cinsel isteği ya da sertleşmeyi bozmaz, zararlı değildir, ama çocuk sahibi olma planı varsa bu durum önceden konuşulmalıdır.',
              'Hâlâ çocuk isteyen bir hastada enükleasyon ilk tercih olmayabilir; bu durumda başka seçenekler değerlendirilir.'
            ]
          },
          {
            heading: 'Peki nasıl karar veriliyor',
            paragraphs: [
              'Karar tek bir ölçüye değil, birkaç başlığa birlikte bakılarak verilir: prostatın hacmi, idrar akım hızı ve işedikten sonra mesanede kalan idrar miktarı, şikâyetlerin günlük yaşamı ne kadar kısıtladığı, kullanılan ilaçlar, kanama riski, cinsel işlev beklentileri ve çocuk isteği.',
              'Bu başlıkların hepsi muayene ve birkaç basit tetkikle değerlendirilir. Hangi lazerin kullanılacağı bu değerlendirmenin sonunda belirlenen bir ayrıntıdır — başında sorulan bir soru değil.',
              'Bu içerik genel bilgilendirme amaçlıdır ve tıbbi tavsiye yerine geçmez. Size uygun yöntemin belirlenmesi için ürologla görüşmeniz gerekir.'
            ]
          }
        ]
      }
    }
  },
  {
    slug: 'robotik-prostatektomi-sonrasi-idrar-kacirma-hafta-hafta',
    date: '2026-10-04',
    category: 'prostate',
    languages: ['tr'],
    treatmentSlug: 'robotik-prostatektomi',
    sources: [
      { label: 'EAU Guidelines on Prostate Cancer — European Association of Urology', url: 'https://uroweb.org/guidelines/prostate-cancer' }
    ],
    i18n: {
      tr: {
        title: 'Robotik Prostatektomi Sonrası İdrar Kaçırma: Hafta Hafta Ne Beklenmeli',
        excerpt:
          'Sonda çekildikten sonraki ilk günlerde idrar kaçırmak beklenen bir durumdur. Asıl mesele bunun ne kadar süreceği ve hangi noktada ek bir değerlendirme gerektiğidir.',
        metaTitle: 'Robotik Prostatektomi Sonrası İdrar Kaçırma Süreci',
        metaDescription:
          'Prostat kanseri ameliyatından sonra idrar kontrolünün dönüşü, hafta hafta beklentiler, pelvik taban egzersizleri ve hangi durumda ek değerlendirme gerektiği.',
        sections: [
          {
            heading: 'Neden oluyor',
            paragraphs: [
              'İdrarı tutmamızı sağlayan iki yapı vardır: prostatın içinden geçen iç büzücü mekanizma ve prostatın hemen altındaki dış büzücü kas. Prostat kanseri ameliyatında prostat tamamen çıkarıldığı için iç mekanizma da onunla birlikte gider. Geriye kalan dış kas, daha önce yardımcı rolde olduğu işi tek başına üstlenmek zorunda kalır.',
              'Bu nedenle ameliyattan sonra idrar kaçırmak bir komplikasyon değil, beklenen bir geçiş dönemidir. Kasın yeni görevine uyum sağlaması zaman alır.'
            ]
          },
          {
            heading: 'Sonda çekildikten sonraki ilk günler',
            paragraphs: [
              'Sonda çekildiğinde idrarın hiç kontrol edilemediği birkaç gün yaşanabilir. Ayağa kalkarken, öksürürken, hatta durup dururken kaçırma olabilir. Bu dönemde ped kullanmak gerekir ve bu durum utanılacak değil, planlanması gereken bir şeydir.',
              'İlk günlerde kaçırmanın fazla olması, iyileşmenin kötü gideceği anlamına gelmez. Bu ikisi arasında doğrudan bir ilişki yoktur.'
            ]
          },
          {
            heading: 'İlk 4–6 hafta',
            paragraphs: [
              'Bu dönemde çoğu hastada belirgin bir düzelme başlar. Önce gece kuruluk gelir — yatarken karın içi basıncı düşük olduğu için kaçırma azalır. Ardından gündüz, hareketsiz dururken kontrol gelişir.',
              'En son düzelen şey genellikle "zorlanma anlarıdır": öksürme, hapşırma, ağır kaldırma, merdiven çıkma. Bu sırayı bilmek önemlidir; gece kuru kalmaya başladığınızda süreç doğru gidiyor demektir, gündüz hâlâ ped kullanıyor olsanız bile.'
            ]
          },
          {
            heading: '3. aydan 12. aya',
            paragraphs: [
              'İyileşme bu dönemde yavaşlayarak devam eder. Pek çok hasta üçüncü ay civarında günlük yaşamını kısıtlamayan bir noktaya ulaşır, ancak süreç burada bitmez; kontrol bir yıla kadar düzelmeye devam edebilir.',
              'Bu nedenle üçüncü ayda tam kuruluk sağlanmamış olması bir başarısızlık işareti değildir. Aceleci bir karar vermeden, egzersizi sürdürerek beklemek doğru yaklaşımdır.'
            ]
          },
          {
            heading: 'Pelvik taban egzersizleri gerçekten işe yarıyor mu',
            paragraphs: [
              'Evet, ancak doğru kası çalıştırmak şartıyla. En sık yapılan hata karın, kalça veya bacak kaslarının sıkılmasıdır; bu egzersiz olmaz. Doğru kas, idrarı tutmaya çalışırken kasılan kastır.',
              'Egzersizin ameliyat öncesinde öğrenilmesi, sonrasında öğrenmeye çalışmaktan daha kolaydır. Mümkünse ameliyattan önce doğru tekniği öğrenin.',
              'Egzersizi günde birkaç kez, kısa setler hâlinde yapmak, uzun ve seyrek seanslardan daha etkilidir. Abartmak da yanlıştır: aşırı çalıştırma kası yorar.'
            ]
          },
          {
            heading: 'Günlük yaşamda işe yarayan birkaç basit şey',
            paragraphs: [
              'Kabızlıktan kaçınmak gerekir; ıkınma pelvik taban üzerindeki baskıyı artırır. Lifli beslenme ve yeterli su bu açıdan önemlidir.',
              'Kilo fazlası karın içi basıncını artırarak kaçırmayı kötüleştirir. Kilo vermek bu dönemde ölçülebilir bir fark yaratır.',
              'Sıvıyı kısmak yanlıştır. Az su içmek idrarı yoğunlaştırır, mesaneyi tahriş eder ve şikâyeti artırır. Kafein ve gazlı içecekleri azaltmak ise yardımcı olabilir.'
            ]
          },
          {
            heading: 'Hangi noktada ek değerlendirme gerekir',
            paragraphs: [
              'Bir yılın sonunda hâlâ günlük yaşamı kısıtlayan düzeyde kaçırma varsa durum ayrıca değerlendirilir. Bu değerlendirmede kaçırmanın tipi, miktarı ve mesanenin davranışı incelenir.',
              'Bu aşamada devreye giren seçenekler vardır ve bunlar istisnai durumlar için ayrılmıştır. Bu nedenle erken dönemde "düzelmezse ne olacak" kaygısıyla karar almaya çalışmak gereksizdir.',
              'Ayrıca şu belirtiler beklenen sürecin parçası değildir ve hekime bildirilmelidir: ateş, idrar yaparken yanma, idrarın hiç gelmemesi, karında şişkinlik ve giderek artan ağrı.'
            ]
          },
          {
            heading: 'Beklentiyi doğru kurmak',
            paragraphs: [
              'İdrar kontrolünün dönüş hızı kişiden kişiye değişir; yaş, ameliyat öncesi idrar durumu, mesanenin yapısı ve ek hastalıklar bu süreci etkiler. Bu nedenle başka bir hastanın takvimiyle kendinizi kıyaslamak yanıltıcıdır.',
              'Size kesin bir süre veya kesin bir sonuç vaat eden bir yaklaşıma temkinli yaklaşın. Doğru olan, beklenen seyri bilmek ve süreci takip etmektir.',
              'Bu içerik genel bilgilendirme amaçlıdır ve tıbbi tavsiye yerine geçmez. Kendi durumunuz için ameliyatınızı yapan ekiple görüşün.'
            ]
          }
        ]
      }
    }
  },
  {
    slug: 'sinir-koruyucu-cerrahi-kimlere-yapilabilir',
    date: '2026-10-04',
    category: 'prostate',
    languages: ['tr'],
    treatmentSlug: 'sinir-koruyucu-cerrahi',
    sources: [
      { label: 'EAU Guidelines on Prostate Cancer — European Association of Urology', url: 'https://uroweb.org/guidelines/prostate-cancer' }
    ],
    i18n: {
      tr: {
        title: 'Sinir Koruyucu Cerrahi Kimlere Yapılabilir?',
        excerpt:
          'Sinir koruyucu teknik her hastaya uygulanabilen bir tercih değildir. Kanserin yerleşimi, yaygınlığı ve ameliyat öncesi cinsel işlev bu kararı birlikte belirler.',
        metaTitle: 'Sinir Koruyucu Prostat Cerrahisi Kimlere Uygundur',
        metaDescription:
          'Prostat kanseri ameliyatında sinir koruyucu tekniğin kimlere uygulanabildiği, kararı etkileyen faktörler, kısmi koruma kavramı ve gerçekçi beklentiler.',
        sections: [
          {
            heading: 'Korunan sinirler ne işe yarıyor',
            paragraphs: [
              'Prostatın her iki yanından, bezle neredeyse temas hâlinde geçen ince sinir-damar demetleri vardır. Bu yapılar sertleşme mekanizmasının çalışmasında rol oynar. Prostat çıkarılırken bu demetler korunabilirse, ameliyat sonrası cinsel işlevin geri dönme ihtimali artar.',
              'Burada iki noktayı netleştirmek gerekir. Birincisi, bu sinirler idrar tutmanın asıl sorumlusu değildir; sinir koruması idrar kaçırma sorununu ortadan kaldırmaz. İkincisi, sinirler korunsa bile işlevin dönmesi aylar alır ve her hastada aynı ölçüde olmaz.'
            ]
          },
          {
            heading: 'Birinci ve değişmez kural: önce kanser',
            paragraphs: [
              'Sinir koruyucu cerrahi, prostat kapsülüne çok yakın çalışmayı gerektirir. Kanser o bölgeye uzanmışsa, sinirleri korumak için yakın çalışmak ameliyat sınırında tümör bırakma riskini artırır.',
              'Bu nedenle karar her zaman aynı sırayla verilir: önce kanserin tam olarak çıkarılması, sonra mümkünse sinirin korunması. Bu sıra tersine çevrilmez. Cinsel işlev önemlidir, ama onkolojik sonucun önüne geçmez.',
              'Bir hekimin size bu dengeyi açıkça anlatması, "merak etmeyin sinirler korunur" demesinden daha değerlidir.'
            ]
          },
          {
            heading: 'Kararı etkileyen başlıca faktörler',
            paragraphs: [
              'Biyopsi sonucu: Tümörün hangi bölgelerden alınan örneklerde çıktığı ve derecesi, kanserin sinir demetine yakın olup olmadığı konusunda fikir verir.',
              'Multiparametrik MR: Tümörün prostat içindeki yerleşimini ve kapsülün dışına taşma şüphesi olup olmadığını gösterir. Sinir koruma kararında en çok başvurulan incelemedir.',
              'Parmakla muayene bulgusu: Prostatta sertlik hissedilen taraf, karar sırasında dikkate alınır.',
              'PSA seviyesi ve seyri: Genel risk değerlendirmesinin parçasıdır.',
              'Ameliyat öncesi cinsel işlev: Belki de en çok göz ardı edilen başlık. Ameliyattan önce sertleşme sorunu belirgin olan bir hastada, sinirlerin korunması beklenen faydayı sağlamayabilir. Bu durum ameliyat öncesinde dürüstçe konuşulmalıdır.'
            ]
          },
          {
            heading: '"Her şey ya da hiç" değil: kısmi koruma',
            paragraphs: [
              'Sinir koruma ikili bir seçim değildir. Kanser prostatın yalnızca bir tarafındaysa, o taraf gereken genişlikte çıkarılıp diğer tarafta sinir korunabilir. Buna tek taraflı koruma denir.',
              'Ayrıca koruma derecesi de değişebilir: sinir demetine ne kadar yakın çalışılacağı, tümörün o bölgedeki durumuna göre ayarlanır. Yani "korundu" ve "korunmadı" arasında ara basamaklar vardır.',
              'Bu esneklik, kararın ameliyat öncesinde kesin olarak verilememesinin de nedenidir. Cerrah ameliyat sırasındaki görüntüye göre planı güncelleyebilir.'
            ]
          },
          {
            heading: 'Gerçekçi beklenti nasıl kurulur',
            paragraphs: [
              'Sinirler korunduğunda bile cinsel işlev ameliyattan hemen sonra geri gelmez. Sinir dokusu cerrahi sırasında gerilme ve ısı etkisine maruz kalır; toparlanması aylar sürer. Bu dönemde beklenti kurmak değil, sabırlı olmak gerekir.',
              'İyileşmeyi etkileyen başka etkenler de vardır: yaş, şeker hastalığı, kalp-damar hastalığı, sigara ve ameliyat öncesi işlevin düzeyi. Aynı ameliyat iki hastada farklı sonuç verebilir.',
              'Bu süreçte penil rehabilitasyon adı verilen bir yaklaşım uygulanabilir. Amacı, işlev dönene kadar dokunun kan akımını desteklemektir. Bu konuyu ameliyat sonrası kontrollerinizde gündeme getirin.'
            ]
          },
          {
            heading: 'Hastanın sorması gereken sorular',
            paragraphs: [
              'Benim biyopsi ve MR sonucuma göre sinir koruması tek taraflı mı, iki taraflı mı planlanıyor?',
              'Ameliyat sırasında plan değişirse hangi durumda korumadan vazgeçilir?',
              'Ameliyat öncesi cinsel işlev durumum bu kararı nasıl etkiliyor?',
              'Sonrasında işlevin dönmesi için ne yapılacak ve ne zaman değerlendirme yapılacak?',
              'Bu sorulara net cevap alabildiğiniz bir süreç, size kesin sonuç vaat eden bir süreçten daha güvenilirdir.',
              'Bu içerik genel bilgilendirme amaçlıdır ve tıbbi tavsiye yerine geçmez. Kendi durumunuzun değerlendirilmesi için ürologla görüşün.'
            ]
          }
        ]
      }
    }
  },
  {
    slug: 'psa-yuksekligi-biyopsiden-once-mr-neden-onemli',
    date: '2026-10-04',
    category: 'prostate',
    languages: ['tr'],
    treatmentSlug: 'psa-yuksekligi-ve-biyopsi',
    sources: [
      { label: 'EAU Guidelines on Prostate Cancer — European Association of Urology', url: 'https://uroweb.org/guidelines/prostate-cancer' }
    ],
    i18n: {
      tr: {
        title: 'PSA Yüksekliği: Biyopsiden Önce MR Neden Önemli',
        excerpt:
          'PSA yüksekliği tek başına kanser demek değildir. Biyopsiden önce multiparametrik MR çekilmesi, hem gereksiz biyopsiyi hem de atlanan tümörü azaltan bir adımdır.',
        metaTitle: 'PSA Yüksekliğinde Biyopsi Öncesi MR Neden Gerekir',
        metaDescription:
          'PSA neden yükselir, biyopsiden önce multiparametrik MR ne sağlar, PI-RADS ne anlama gelir ve füzyon biyopsi ile klasik biyopsi arasındaki fark.',
        sections: [
          {
            heading: 'PSA yüksekliği kanser demek değildir',
            paragraphs: [
              'PSA prostat dokusunun ürettiği bir maddedir ve kana geçer. Kanser PSA\'yı yükseltebilir, ama yükselten tek şey kanser değildir. Prostatın iyi huylu büyümesi, iltihabı, idrar yolu enfeksiyonu, sonda takılması, bisiklet sürmek ve cinsel ilişki de PSA\'yı geçici olarak yükseltebilir.',
              'Bu nedenle tek bir yüksek PSA sonucuyla doğrudan biyopsiye gitmek çoğu zaman doğru değildir. Önce tekrarlanması, enfeksiyon şüphesi varsa tedavi sonrası yeniden bakılması ve diğer bulgularla birlikte değerlendirilmesi gerekir.',
              'Tersi de doğrudur: PSA normal sınırlarda olan bir erkekte kanser olmayacağı anlamına gelmez. Bu yüzden parmakla muayene bulgusu da değerlendirmenin parçasıdır.'
            ]
          },
          {
            heading: 'Eskiden nasıl yapılıyordu, sorun neydi',
            paragraphs: [
              'Geçmişte PSA yüksekse doğrudan biyopsi yapılırdı ve bu biyopsi prostattan belirli bir haritaya göre, rastgele denebilecek şekilde örnek alınarak gerçekleştirilirdi. Tümörün nerede olduğu bilinmediği için iğneler "her yere bakalım" mantığıyla atılırdı.',
              'Bu yaklaşımın iki ayrı sorunu vardı. Bir yandan tedavi gerektirmeyecek kadar sessiz tümörler bulunuyor ve hastalar gereksiz tedavilere yönlendirilebiliyordu. Öte yandan prostatın ön kısmında yerleşmiş, iğnelerin ulaşmadığı önemli tümörler atlanabiliyordu.',
              'Yani sorun yalnızca "fazla biyopsi" değildi; aynı anda hem fazlası hem eksiği yapılıyordu.'
            ]
          },
          {
            heading: 'Multiparametrik MR ne değiştiriyor',
            paragraphs: [
              'Multiparametrik MR, prostatı farklı görüntüleme parametrelerini birleştirerek inceler ve şüpheli alanları gösterebilir. Biyopsiden önce çekildiğinde iki şey sağlar: şüpheli bir odak varsa iğnenin nereye atılacağı bilinir; hiç şüpheli odak yoksa biyopsi kararı yeniden değerlendirilebilir.',
              'Bu, "MR temizse biyopsi hiç yapılmaz" anlamına gelmez. Karar PSA seviyesi, PSA\'nın zaman içindeki seyri, muayene bulgusu, aile öyküsü ve yaş ile birlikte verilir. Ancak MR, bu kararı tahmine değil görüntüye dayandırır.',
              'MR\'ın biyopsiden ÖNCE çekilmesi önemlidir. Biyopsiden sonra oluşan kanama ve ödem, görüntüyü haftalarca yorumlanamaz hâle getirebilir.'
            ]
          },
          {
            heading: 'PI-RADS ne anlama geliyor',
            paragraphs: [
              'MR raporunda göreceğiniz PI-RADS, radyoloğun gördüğü alanın ne kadar şüpheli olduğunu 1\'den 5\'e kadar derecelendiren bir ölçektir. Düşük puanlar klinik olarak önemli kanser olasılığının düşük olduğunu, yüksek puanlar bu olasılığın arttığını anlatır.',
              'PI-RADS bir tanı değildir. 5 puan "kanser var" demek olmadığı gibi, 2 puan "kesinlikle yok" demek de değildir. Bu ölçek, biyopsi kararını ve iğnelerin nereye atılacağını yönlendirmek için vardır.'
            ]
          },
          {
            heading: 'Füzyon biyopsi: MR ile ultrasonun birleştirilmesi',
            paragraphs: [
              'MR\'da şüpheli bir alan görüldüğünde bu görüntü, biyopsi sırasında kullanılan ultrason görüntüsüyle yazılım aracılığıyla üst üste bindirilir. Böylece iğne, MR\'da işaretlenen alana yönlendirilebilir.',
              'Genellikle hedefe yönelik örneklerin yanında, prostatın geri kalanından da sistematik örnekler alınır. Çünkü MR her tümörü göstermez; ikisi birlikte yapıldığında sonuç daha güvenilir olur.'
            ]
          },
          {
            heading: 'Biyopsi yolu: transrektal ve transperineal',
            paragraphs: [
              'Biyopsi iğnesi makat yoluyla (transrektal) veya makat ile torbalar arasındaki ciltten (transperineal) girilerek alınabilir. İkinci yolun bağırsak florasıyla temas etmemesi nedeniyle enfeksiyon açısından avantajı olduğu bildirilmektedir.',
              'Bu tercih hastanenin imkânlarına, hastanın durumuna ve prostatın hangi bölgesine ulaşılması gerektiğine göre belirlenir. Hangi yolun planlandığını ve nedenini sormakta fayda vardır.'
            ]
          },
          {
            heading: 'Biyopsi sonrası beklenenler',
            paragraphs: [
              'İdrarda, menide ve dışkıda bir süre kan görülmesi beklenen bir durumdur. Menideki kahverengi renk haftalarca sürebilir ve bu normaldir.',
              'Ancak şu durumlar acil değerlendirme gerektirir: ateş ve titreme, idrar yapamama, giderek artan ağrı, durmayan kanama. Bu belirtileri önceden bilmek, geceyi kaygıyla geçirmeyi önler.',
              'Bu içerik genel bilgilendirme amaçlıdır ve tıbbi tavsiye yerine geçmez. PSA sonucunuzun değerlendirilmesi için ürologla görüşün.'
            ]
          }
        ]
      }
    }
  },
  {
    slug: 'bobrek-tasi-rirs-mi-pcnl-mi',
    date: '2026-10-04',
    category: 'stones',
    languages: ['tr'],
    treatmentSlug: 'rirs',
    sources: [
      { label: 'EAU Guidelines on Urolithiasis — European Association of Urology', url: 'https://uroweb.org/guidelines/urolithiasis' }
    ],
    i18n: {
      tr: {
        title: 'Böbrek Taşı: RIRS mi PCNL mi?',
        excerpt:
          'Taşın boyutu, sertliği, yerleşimi ve böbreğin anatomisi hangi yöntemin seçileceğini belirler. İkisi de iyi yöntemdir; yanlış olan, uygun olmayan taşa uygun olmayan yöntemi uygulamaktır.',
        metaTitle: 'RIRS mi PCNL mi? Böbrek Taşında Yöntem Seçimi',
        metaDescription:
          'Böbrek taşı tedavisinde RIRS ve PCNL arasındaki farklar, taş boyutunun ve sertliğinin rolü, alt kaliks taşları, riskler ve taşsızlık beklentisi.',
        sections: [
          {
            heading: 'İki yöntem böbreğe iki farklı kapıdan girer',
            paragraphs: [
              'RIRS\'te vücuda hiçbir kesi yapılmaz. Bükülebilen ince bir alet idrar yolundan girilerek mesane ve üreter üzerinden böbreğe ulaştırılır; taş lazerle toz hâline getirilir.',
              'PCNL\'de ise sırttan yaklaşık bir santimetrelik bir delikle doğrudan böbreğe girilir. Oluşturulan bu tünelden daha kalın aletler geçirilebilir, böylece büyük taşlar parçalanıp tek seansta dışarı alınabilir.',
              'Yani fark "açık ameliyat ve kapalı ameliyat" değildir; ikisi de kapalıdır. Fark, böbreğe hangi yoldan ulaşıldığı ve bu yolun ne kadar alet geçirmeye izin verdiğidir.'
            ]
          },
          {
            heading: 'Taşın boyutu: en belirleyici başlık',
            paragraphs: [
              'Küçük taşlarda RIRS öne çıkar. Taş toz hâline getirilir, parçalar idrarla düşer ve vücutta kesi izi kalmaz.',
              'Taş büyüdükçe denklem değişir. Büyük bir taşı RIRS ile tozlaştırmak hem çok uzun sürer hem de bütün parçaların dışarı atılması beklenemeyeceği için ikinci, hatta üçüncü seans gerekebilir. Bu noktada tek seansta sonuç veren PCNL mantıklı hâle gelir.',
              'Arada kalan boyutlarda karar tek başına ölçüye göre verilmez; aşağıdaki başlıklar devreye girer.'
            ]
          },
          {
            heading: 'Taşın sertliği',
            paragraphs: [
              'Taşlar aynı sertlikte değildir. Bilgisayarlı tomografide ölçülen yoğunluk değeri, taşın lazere ne kadar direnç göstereceği konusunda fikir verir.',
              'Çok sert bir taşın RIRS ile tozlaştırılması uzun sürer; bu da ameliyat süresini ve böbrek içi basıncı artırır. Sertlik, boyutla birlikte değerlendirilir.'
            ]
          },
          {
            heading: 'Yerleşim: özellikle alt kaliks taşları',
            paragraphs: [
              'Böbreğin alt bölümündeki (alt kaliks) taşlar özel bir durumdur. Burası yerçekimi nedeniyle parçaların zor boşaldığı bir cepte bulunur. Taş tozlaştırılsa bile parçalar orada kalabilir.',
              'Bu nedenle alt kaliks taşlarında, benzer boyuttaki bir başka taşa göre PCNL daha erken gündeme gelebilir. Böbreğin bu bölgedeki açısı ve kaliks boynunun genişliği de kararı etkiler.'
            ]
          },
          {
            heading: 'Hangi durumlarda RIRS tercih edilir',
            paragraphs: [
              'Kan sulandırıcı kullanan hastalarda RIRS, böbreğe delik açılmadığı için daha uygun bir seçenek olarak değerlendirilir.',
              'Şişmanlık, iskelet deformiteleri gibi sırttan girişi zorlaştıran durumlarda da RIRS öne çıkabilir.',
              'Tek böbreği olan hastalarda böbrek dokusunu koruma kaygısı RIRS lehine bir etkendir.',
              'Ayrıca aynı seansta üreterdeki bir taşa da müdahale edilebilmesi RIRS\'in pratik bir üstünlüğüdür.'
            ]
          },
          {
            heading: 'Hangi durumlarda PCNL tercih edilir',
            paragraphs: [
              'Büyük ve böbrek havuzunu dolduran taşlarda, özellikle geyik boynuzu dediğimiz dallanmış taşlarda PCNL temel yöntemdir.',
              'Çok sayıda taşın bir arada bulunduğu böbreklerde tek seansta temizlik şansı daha yüksektir.',
              'Daha önce RIRS denenip taşsızlık sağlanamamış hastalarda da PCNL gündeme gelir.'
            ]
          },
          {
            heading: 'Riskler dürüstçe nasıl anlatılır',
            paragraphs: [
              'PCNL\'in en bilinen riski kanamadır; böbreğe bir tünel açıldığı için bu risk RIRS\'ten yüksektir. Nadiren kan verilmesi veya ek girişim gerekebilir. Komşu organ yaralanması nadir ama bilinen bir risktir.',
              'RIRS\'in riskleri daha çok üreterle ilgilidir: alet geçişine bağlı zedelenme ve daha sonra darlık gelişmesi bildirilmiştir. Ayrıca işlem sırasında böbrek içi basıncın artması enfeksiyon açısından önemlidir.',
              'Her iki yöntemde de ateşli enfeksiyon ciddiye alınması gereken bir durumdur. İdrar kültürünün ameliyat öncesi temiz olması bu nedenle önemlidir — enfeksiyonlu idrarla taş ameliyatı planlanmaz.'
            ]
          },
          {
            heading: 'Stent (JJ kateter) konusu',
            paragraphs: [
              'Her iki yöntemden sonra da böbrekle mesane arasına geçici bir stent konulabilir. Stent böbreğin boşalmasını güvence altına alır, ancak kendisi de şikâyet yaratır: sık idrara çıkma, kasıkta ağrı, idrarda kan.',
              'Bu şikâyetler stent çıkarıldığında geçer. Stentin ne kadar süre kalacağını önceden sormak, bu dönemi psikolojik olarak kolaylaştırır.'
            ]
          },
          {
            heading: 'Asıl soru: taş neden oluştu',
            paragraphs: [
              'Taşın temizlenmesi tedavinin yarısıdır. Hiçbir şey yapılmazsa taş tekrarlama eğilimindedir. Bu nedenle düşen veya çıkarılan taşın cinsinin belirlenmesi, idrar incelemesi ve beslenme-sıvı düzeninin gözden geçirilmesi gerekir.',
              'Günlük sıvı alımını artırmak, en basit ve en çok ihmal edilen önlemdir. Taş cinsine göre beslenme önerileri değişir; herkese aynı liste verilmez.',
              'Bu içerik genel bilgilendirme amaçlıdır ve tıbbi tavsiye yerine geçmez. Taşınız için uygun yöntem, tomografi ve tetkikleriniz değerlendirilerek belirlenir.'
            ]
          }
        ]
      }
    }
  },
  {
    slug: 'rezum-sonrasi-cinsel-fonksiyon',
    date: '2026-10-04',
    category: 'bph',
    languages: ['tr'],
    treatmentSlug: 'rezum',
    sources: [
      { label: 'EAU Guidelines on Management of Non-Neurogenic Male LUTS — European Association of Urology', url: 'https://uroweb.org/guidelines/management-of-non-neurogenic-male-luts' }
    ],
    i18n: {
      tr: {
        title: 'Rezüm Sonrası Cinsel Fonksiyon',
        excerpt:
          'Rezüm\'ün öne çıktığı nokta, cinsel işlev üzerindeki etkisinin klasik prostat ameliyatlarına göre daha sınırlı olmasıdır. Ancak bu "hiçbir şey değişmez" anlamına gelmez.',
        metaTitle: 'Rezüm Sonrası Cinsel İşlev: Ne Değişir, Ne Değişmez',
        metaDescription:
          'Rezüm buhar tedavisinden sonra sertleşme ve boşalma işlevinin nasıl etkilendiği, iyileşme süreci, kimlere uygun olduğu ve gerçekçi beklentiler.',
        sections: [
          {
            heading: 'Rezüm nasıl çalışıyor',
            paragraphs: [
              'Rezüm, prostatın büyümüş dokusuna su buharı verilmesi esasına dayanır. Buhar doku içinde yayılır ve hedeflenen bölgedeki hücrelerin zamanla vücut tarafından emilmesini sağlar. Prostat haftalar içinde küçülür ve idrar yolu üzerindeki baskı azalır.',
              'Bu nedenle sonuç hemen alınmaz. İşlemden sonraki ilk haftalarda şikâyetler geçici olarak artabilir; asıl düzelme birkaç hafta içinde ortaya çıkar. Hızlı sonuç bekleyen bir hasta için bu durum hayal kırıklığı yaratabilir, o yüzden önceden bilinmelidir.'
            ]
          },
          {
            heading: 'Prostat ameliyatlarında cinsel işlevle ilgili iki ayrı konu vardır',
            paragraphs: [
              'Birincisi sertleşme işlevidir. İkincisi boşalmanın yönüdür — meninin dışarı mı çıktığı, yoksa mesaneye mi geri kaçtığı (retrograd boşalma).',
              'Bu ikisi sık karıştırılır. Retrograd boşalma sertleşmeyi bozmaz, cinsel isteği etkilemez ve zararlı değildir; ancak hasta için rahatsız edici olabilir ve çocuk sahibi olmayı zorlaştırır.',
              'Klasik prostat ameliyatlarından sonra retrograd boşalma sık görülür. Rezüm\'ün tercih edilme nedenlerinden biri, bu konudaki etkisinin daha sınırlı olmasıdır.'
            ]
          },
          {
            heading: 'Rezüm sertleşmeyi etkiler mi',
            paragraphs: [
              'Rezüm, sertleşmeden sorumlu sinir-damar yapılarının geçtiği bölgeye doğrudan bir kesi veya rezeksiyon uygulamaz. Bu nedenle sertleşme işlevi üzerindeki etkisinin sınırlı olduğu kabul edilir ve yöntemin öne çıkan özelliklerinden biri budur.',
              'Bununla birlikte "hiçbir etki olmaz" demek doğru olmaz. İşlemden sonraki ilk dönemde ödem ve rahatsızlık nedeniyle cinsel yaşamda geçici bir duraklama olabilir. Ayrıca prostat büyümesi olan yaş grubunda sertleşme sorunu zaten sık görülür; işlemden bağımsız olarak var olan bir sorun, işleme bağlanabilir.',
              'Bu nedenle işlem öncesi cinsel işlevin kayıt altına alınması, sonrasında neyin değişip neyin değişmediğini anlamak açısından değerlidir.'
            ]
          },
          {
            heading: 'Boşalma nasıl etkilenir',
            paragraphs: [
              'Rezüm sonrasında boşalmanın korunma ihtimalinin, prostat dokusunun çıkarıldığı yöntemlere göre daha yüksek olduğu bildirilmektedir. Yöntemin genç ve cinsel aktif hastalarda tercih edilmesinin başlıca nedeni budur.',
              'Yine de bu kesin bir sonuç değildir. Boşalmada azalma veya değişiklik olabileceği önceden konuşulmalıdır. Kesin vaat veren bir anlatıma temkinli yaklaşın.'
            ]
          },
          {
            heading: 'İlk haftalarda ne bekleniyor',
            paragraphs: [
              'İşlemden sonra kısa süreli sonda kullanılabilir. Sonda çekildikten sonra idrar yaparken yanma, sık idrara çıkma ve idrarda kan görülmesi beklenen bulgulardır.',
              'Cinsel yaşama dönüş zamanı hastaya göre belirlenir. Bu dönemde acele etmemek, ödemin ve tahrişin geçmesini beklemek mantıklıdır.',
              'İşlemin asıl faydası birkaç hafta içinde belirginleştiği için, cinsel işlev hakkındaki değerlendirmeyi de erken yapmamak gerekir.'
            ]
          },
          {
            heading: 'Rezüm kimler için uygun bir seçenek',
            paragraphs: [
              'Prostatı aşırı büyük olmayan, cinsel işlevini ve boşalmasını korumayı öncelikli tutan, ameliyat ve anestezi yükünü azaltmak isteyen hastalarda değerlendirilir.',
              'Buna karşılık çok büyük prostatlarda, mesanede taş gelişmiş olanlarda, idrarını hiç yapamayıp sondaya bağlı kalmış hastalarda ve tekrarlayan ciddi kanaması olanlarda Rezüm yeterli olmayabilir. Bu durumlarda dokunun çıkarıldığı yöntemler öne çıkar.',
              'Ayrıca Rezüm\'ün zaman içinde yeniden girişim gerekme ihtimalinin, dokunun tamamen çıkarıldığı yöntemlere göre daha yüksek olabileceği akılda tutulmalıdır. Bu, kararı verirken tartılması gereken bir denge noktasıdır.'
            ]
          },
          {
            heading: 'Nasıl karar verilmeli',
            paragraphs: [
              'Doğru soru "hangi yöntem daha gelişmiş" değil, "benim için hangi denge daha uygun" sorusudur. Cinsel işlevi korumaya öncelik veriyorsanız bu açıkça söylenmeli; idrar şikâyetlerinin kesin biçimde çözülmesi önceliğinizse bu da söylenmelidir.',
              'Prostat hacmi, idrar akım hızı, kalan idrar miktarı, cinsel işlev durumu ve çocuk isteği birlikte değerlendirilerek karar verilir.',
              'Bu içerik genel bilgilendirme amaçlıdır ve tıbbi tavsiye yerine geçmez. Size uygun yöntem için ürologla görüşün.'
            ]
          }
        ]
      }
    }
  },
  {
    slug: 'penil-protez-cesitleri-sisirilebilir-mi-bukulebilir-mi',
    date: '2026-10-04',
    category: 'andrology',
    languages: ['tr'],
    treatmentSlug: 'penil-protez',
    sources: [
      { label: 'EAU Guidelines on Sexual and Reproductive Health — European Association of Urology', url: 'https://uroweb.org/guidelines/sexual-and-reproductive-health' }
    ],
    i18n: {
      tr: {
        title: 'Penil Protez Çeşitleri: Şişirilebilir mi, Bükülebilir mi?',
        excerpt:
          'İki protez tipi arasındaki seçim, doğal görünüm beklentisi ile cihazı kullanabilme becerisi arasındaki dengeye dayanır. Her hasta için doğru cevap aynı değildir.',
        metaTitle: 'Penil Protez Tipleri: Şişirilebilir ve Bükülebilir Karşılaştırması',
        metaDescription:
          'Şişirilebilir ve bükülebilir penil protez arasındaki farklar, hangi hastada hangisinin öne çıktığı, gerçekçi beklentiler, enfeksiyon riski ve cihaz ömrü.',
        sections: [
          {
            heading: 'Protez ne zaman gündeme gelir',
            paragraphs: [
              'Penil protez, sertleşme sorununda ilk basamak değildir. İlaç tedavileri, gerekiyorsa enjeksiyon tedavisi ve vakum cihazı gibi seçenekler denendikten sonra, bunlardan yeterli fayda görmeyen hastalarda gündeme gelir.',
              'Bu sıralamayı bilmek önemlidir. "Hemen protez yapalım" yaklaşımı doğru değildir; geri dönüşü olmayan bir karardır, çünkü protez takıldıktan sonra doğal sertleşme mekanizması geri gelmez.'
            ]
          },
          {
            heading: 'Bükülebilir (malleabl) protez',
            paragraphs: [
              'İki adet yarı sert çubuktan oluşur. Penis istenildiğinde yukarı doğru bükülür, kullanılmadığında aşağı indirilir. İçinde pompa, hazne veya sıvı yoktur.',
              'Üstünlüğü basitliğidir: öğrenilecek bir mekanizma yoktur, el becerisi gerektirmez, mekanik arıza ihtimali daha düşüktür. Ameliyatı daha kısa sürer.',
              'Dezavantajı, penisin her zaman belirli bir sertlikte kalmasıdır. Giyinirken dikkat gerektirebilir ve bazı hastalar için bu durum rahatsız edicidir. Ayrıca sertlik hissi, şişirilebilir modele göre daha az doğal bulunabilir.'
            ]
          },
          {
            heading: 'Şişirilebilir protez',
            paragraphs: [
              'Penis içine yerleştirilen iki silindir, torbaya yerleştirilen küçük bir pompa ve karın bölgesine konulan bir sıvı haznesinden oluşur. Pompaya basıldığında sıvı silindirlere geçer ve sertleşme oluşur; bırakıldığında sıvı hazneye geri döner.',
              'Üstünlüğü doğala en yakın sonucu vermesidir. Kullanılmadığında penis yumuşak kalır, bu nedenle günlük yaşamda fark edilmez.',
              'Buna karşılık sistem daha karmaşıktır: hastanın pompayı kullanmayı öğrenmesi gerekir ve mekanik arıza ihtimali vardır. Ameliyatı daha uzundur.'
            ]
          },
          {
            heading: 'Hangi hastada hangisi öne çıkıyor',
            paragraphs: [
              'El becerisi ve kavrama gücü yeterli olmayan, ileri yaşta veya romatizmal hastalığı olan hastalarda bükülebilir protez daha uygun olabilir — çünkü kullanılamayan bir pompa, hiçbir işe yaramaz.',
              'Doğal görünümü öncelikli tutan ve cihazı kullanmakta zorlanmayacak hastalarda şişirilebilir protez öne çıkar.',
              'Penisin içinde yoğun sertleşme (fibrozis) gelişmiş hastalarda, örneğin daha önce priapizm geçirmiş olanlarda, teknik nedenlerle bükülebilir protez tercih edilebilir.',
              'Peyronie hastalığında eğriliğin düzeltilmesi de gerekebileceğinden plan farklılaşır.'
            ]
          },
          {
            heading: 'Dürüstçe konuşulması gereken beklentiler',
            paragraphs: [
              'Protez, sertleşmeyi sağlar; cinsel isteği, duyuyu veya boşalmayı yeniden kazandırmaz. Daha önce boşalma sorunu olan bir hastada bu sorun protezle çözülmez.',
              'Penis boyunun ameliyat öncesine göre bir miktar kısa hissedilmesi yaygın bir geri bildirimdir. Bu, hastaların memnuniyetsizlik bildirdiği başlıca konulardan biridir ve ameliyattan önce açıkça konuşulmalıdır.',
              'Protez doğal sertleşmenin yerini alır; geri dönüşü yoktur. Bu nedenle karar acele verilmemelidir.'
            ]
          },
          {
            heading: 'Enfeksiyon: en ciddi risk',
            paragraphs: [
              'Protez cerrahisinde en çok korkulan komplikasyon enfeksiyondur, çünkü enfekte olan bir cihazın çıkarılması gerekebilir.',
              'Şeker hastalığının kontrol altında olması bu riski azaltmak açısından önemlidir. Ameliyat öncesi kan şekeri düzeninin sağlanması, ertelemeye değer bir adımdır.',
              'Enfeksiyon riskini azaltmak için antibiyotik kaplı cihazlar, titiz hazırlık ve cerrahi teknik kullanılır. Yine de risk sıfırlanmaz ve bu bilinerek karar verilmelidir.'
            ]
          },
          {
            heading: 'Cihazın ömrü ve sonrasında ne olur',
            paragraphs: [
              'Protezler kalıcı cihazlardır, ancak sonsuza kadar sorunsuz çalışacakları söylenemez. Yıllar içinde mekanik arıza gelişebilir ve değişim gerekebilir. Bu ihtimal, özellikle genç hastalarda hesaba katılmalıdır.',
              'Ameliyattan sonra cihazın kullanılmaya başlanması için iyileşmenin tamamlanması beklenir. Bu süre hekiminiz tarafından belirlenir; erken kullanım zarar verebilir.',
              'Bu içerik genel bilgilendirme amaçlıdır ve tıbbi tavsiye yerine geçmez. Karar öncesinde ürologla ayrıntılı görüşülmelidir.'
            ]
          }
        ]
      }
    }
  },
  {
    slug: 'varikosel-ameliyati-kisirligi-duzeltir-mi',
    date: '2026-10-04',
    category: 'andrology',
    languages: ['tr'],
    treatmentSlug: 'varikosel',
    sources: [
      { label: 'EAU Guidelines on Sexual and Reproductive Health — European Association of Urology', url: 'https://uroweb.org/guidelines/sexual-and-reproductive-health' }
    ],
    i18n: {
      tr: {
        title: 'Varikosel Ameliyatı Kısırlığı Düzeltir mi?',
        excerpt:
          'Varikosel bulunan her erkeğin ameliyat olması gerekmez ve ameliyat olan her erkek baba olamaz. Doğru soru, ameliyatın hangi çiftte anlamlı bir fark yaratabileceğidir.',
        metaTitle: 'Varikosel Ameliyatı ve Kısırlık: Gerçekçi Beklentiler',
        metaDescription:
          'Varikoselin sperm üzerindeki etkisi, kimlerde ameliyat düşünülür, mikrocerrahi yöntemin yeri, sonuçların ne zaman görüldüğü ve dürüst beklenti yönetimi.',
        sections: [
          {
            heading: 'Varikosel nedir, neden önemli',
            paragraphs: [
              'Varikosel, testisten dönen toplardamarların genişlemesidir — bacaklardaki varise benzer bir durumdur. Erkeklerin önemli bir bölümünde bulunabilir ve çoğu zaman hiçbir şikâyet yaratmaz.',
              'Sperm üretimi ısıya duyarlıdır; testislerin vücut dışında bulunmasının nedeni budur. Varikoselde kan akımının yavaşlaması bölgedeki ısıyı artırarak sperm üretimini olumsuz etkileyebilir.',
              'Ancak kritik nokta şudur: varikosel bulunması tek başına ameliyat gerekçesi değildir. Hiçbir şikâyeti olmayan, spermi normal olan ve çocuk sorunu yaşamayan bir erkekte varikoselin bulunması müdahale gerektirmez.'
            ]
          },
          {
            heading: 'Kimlerde ameliyat gündeme gelir',
            paragraphs: [
              'Muayenede elle hissedilebilen bir varikoselin bulunması, sperm değerlerinde bozulma olması ve çiftin çocuk sahibi olamaması bir araya geldiğinde ameliyat değerlendirilir.',
              'Yalnızca ultrasonda görülen, muayenede hissedilmeyen varikoselin ameliyat edilmesi genellikle önerilmez. Bu ayrımı bilmek, gereksiz ameliyattan korur.',
              'Ağrı da bir gerekçe olabilir: günlük yaşamı etkileyen, ayakta durmakla artan ve başka nedenle açıklanamayan testis ağrısında ameliyat düşünülebilir.',
              'Ergenlik dönemindeki gençlerde, varikosel bulunan taraftaki testisin diğerine göre belirgin küçük kalması ayrı bir değerlendirme nedenidir.'
            ]
          },
          {
            heading: 'Eşin değerlendirilmesi atlanmamalı',
            paragraphs: [
              'Çocuk sahibi olamama bir çift sorunudur. Erkekte varikosel bulunduğunda bazen incelemenin burada durduğu görülür; bu yanlıştır.',
              'Kadının yumurtlama düzeni, tüplerin durumu ve yaşı sonucu doğrudan etkiler. Varikosel ameliyatından beklenen faydanın olup olmayacağı, eşin durumu bilinmeden sağlıklı biçimde değerlendirilemez.',
              'Örneğin kadın yaşı ilerlemişse zaman önemli bir değişkendir ve varikosel ameliyatının sonucunu beklemek yerine doğrudan yardımcı üreme tekniklerine geçmek daha doğru olabilir. Bu karar kadın doğum hekimiyle birlikte verilir.'
            ]
          },
          {
            heading: 'Ameliyat yöntemleri arasındaki fark',
            paragraphs: [
              'Varikosel ameliyatında amaç, genişlemiş toplardamarların bağlanmasıdır. Bunu yaparken atardamarın ve lenf damarlarının korunması önemlidir.',
              'Mikrocerrahi yöntemde mikroskop kullanılır; damarlar büyütülerek ayırt edilir. Bu yaklaşımın tekrarlama ve su toplanması (hidrosel) açısından daha düşük oran bildirildiği için yaygın olarak tercih edildiği belirtilmektedir.',
              'Laparoskopik ve klasik açık yöntemler de kullanılmaktadır. Hangi yöntemin uygulanacağı, varikoselin durumuna ve cerrahın deneyimine göre belirlenir.'
            ]
          },
          {
            heading: 'Sonuç ne zaman görülür',
            paragraphs: [
              'Sperm üretimi bir döngüdür ve yeni spermin oluşması yaklaşık üç ay sürer. Bu nedenle ameliyattan hemen sonra yapılan sperm testi anlamlı değildir.',
              'Genellikle üçüncü ayda ve sonrasında tekrarlanan sperm analizleriyle değişim izlenir. Bu bekleme süresi çiftler için zorlayıcıdır ama kaçınılmazdır.',
              'Sperm değerlerindeki düzelme ile gebelik elde edilmesi aynı şey değildir. Sperm sayısı veya hareketliliği artsa bile gebelik olmayabilir; tersi de mümkündür.'
            ]
          },
          {
            heading: 'Dürüst cevap: ameliyat kesin sonuç vermez',
            paragraphs: [
              'Varikosel ameliyatı, uygun seçilmiş hastalarda sperm parametrelerinde düzelme sağlayabilen bir girişimdir. Ancak her hastada düzelme olmaz ve düzelme olan her çiftte gebelik gerçekleşmez.',
              'Bu nedenle size kesin sonuç vaat eden bir anlatıma temkinli yaklaşın. Ameliyat öncesinde "ne olursa başarılı sayacağız" sorusunun cevabının netleştirilmesi önemlidir.',
              'Varikosel ameliyatı ile yardımcı üreme teknikleri birbirinin alternatifi olmak zorunda değildir; bazı çiftlerde ameliyat, tedavi şansını artırmak amacıyla planlanır.'
            ]
          },
          {
            heading: 'Ameliyat sonrası bilinmesi gerekenler',
            paragraphs: [
              'İşlemden sonra bölgede şişlik ve rahatsızlık birkaç gün sürebilir. Ağır kaldırmaktan ve zorlayıcı aktiviteden bir süre kaçınmak gerekir.',
              'Bilinen riskler arasında testiste su toplanması, varikoselin tekrarlaması ve nadiren testis atardamarının zedelenmesi yer alır. Bu riskler ameliyat öncesinde konuşulmalıdır.',
              'Bu içerik genel bilgilendirme amaçlıdır ve tıbbi tavsiye yerine geçmez. Değerlendirme için ürologla görüşün.'
            ]
          }
        ]
      }
    }
  },
  {
    slug: 'idrar-kacirma-hangi-tip-hangi-tedavi',
    date: '2026-10-04',
    category: 'femaleUrology',
    languages: ['tr'],
    treatmentSlug: 'stres-inkontinans',
    sources: [
      { label: 'EAU Guidelines on Non-neurogenic Female LUTS — European Association of Urology', url: 'https://uroweb.org/guidelines/non-neurogenic-female-luts' }
    ],
    i18n: {
      tr: {
        title: 'İdrar Kaçırma: Hangi Tip, Hangi Tedavi?',
        excerpt:
          'İdrar kaçırmanın tek bir tedavisi yoktur, çünkü tek bir türü yoktur. Yanlış tipe uygulanan doğru tedavi işe yaramaz — bu yüzden ilk adım tipin belirlenmesidir.',
        metaTitle: 'İdrar Kaçırma Tipleri ve Her Birine Uygun Tedavi',
        metaDescription:
          'Stres, sıkışma, karışık ve taşma tipi idrar kaçırma arasındaki farklar, her tipte uygulanan tedaviler ve ayrımın neden bu kadar önemli olduğu.',
        sections: [
          {
            heading: 'Önce şunu söyleyelim: bu yaşlılığın doğal sonucu değildir',
            paragraphs: [
              'İdrar kaçırma çok yaygındır, ancak yaygın olması normal olduğu anlamına gelmez. Pek çok kişi yıllarca bu durumu kimseye söylemeden, ped kullanarak ve sosyal yaşamını kısıtlayarak yaşar.',
              'Tedavi edilebilir bir durumdur ve çoğu hastada ameliyat gerekmeden belirgin iyileşme sağlanabilir. Bu nedenle gecikmeden değerlendirme yaptırmak anlamlıdır.'
            ]
          },
          {
            heading: 'Stres tipi: öksürünce, gülünce, ağır kaldırınca',
            paragraphs: [
              'Burada kaçırma karın içi basıncın arttığı anlarda olur: öksürme, hapşırma, gülme, ağır kaldırma, merdiven çıkma, spor. Öncesinde idrar hissi yoktur; idrar aniden gelir.',
              'Nedeni idrar yolunu kapatan destek mekanizmasının zayıflamasıdır. Doğumlar, menopoz, kronik kabızlık, sürekli öksürük ve kilo fazlası bu zayıflamada rol oynar.',
              'Tedavide ilk basamak pelvik taban kas egzersizleridir; doğru yapıldığında etkili bir yöntemdir. Kilo verme ve kabızlığın giderilmesi fark yaratır. Bunlar yetersiz kaldığında idrar yoluna destek sağlayan cerrahi seçenekler değerlendirilir.',
              'Burada önemli bir not: mesaneyi gevşeten ilaçlar bu tipte işe yaramaz. Yanlış tipe verilen ilaç, hastanın "benim sorunum çözülmez" sonucuna varmasına yol açar.'
            ]
          },
          {
            heading: 'Sıkışma tipi: tuvalete yetişememe',
            paragraphs: [
              'Burada önce ani ve ertelenemeyen bir sıkışma hissi gelir; kişi tuvalete yetişemeden idrar kaçırır. Yanında sık idrara çıkma ve gece uyanma da bulunur.',
              'Nedeni mesane kasının dolum sırasında istemsiz kasılmasıdır. Buna aşırı aktif mesane denir.',
              'Tedavide ilk adım yine ilaç değildir: mesane eğitimi, sıvı ve kafein düzeninin ayarlanması, kabızlığın giderilmesi. Bunlar yetersiz kalırsa mesane kasını gevşeten ilaçlar başlanır. İlaç da yeterli olmazsa mesane içine botulinum toksini uygulaması ve sakral nöromodülasyon gündeme gelir.',
              'Bu tipte sarkma ameliyatı yapmak fayda sağlamaz; tip ayrımının neden önemli olduğunun en net örneği budur.'
            ]
          },
          {
            heading: 'Karışık tip: ikisi bir arada',
            paragraphs: [
              'Hastaların önemli bir bölümünde her iki tip birlikte bulunur. Bu durumda hangisinin günlük yaşamı daha çok kısıtladığı belirlenir ve tedavi ona göre planlanır.',
              'Genellikle önce sıkışma bileşeni ele alınır, çünkü bu bileşen ilaç ve davranış tedavisine yanıt verebilir ve cerrahi gereksinimini değiştirebilir.',
              'Karışık tipte, yalnızca bir bileşene yönelik tedavi sonrasında şikâyetin tamamen geçmeyebileceği önceden konuşulmalıdır.'
            ]
          },
          {
            heading: 'Taşma tipi: mesane boşalamıyor',
            paragraphs: [
              'Burada mesane dolar, boşalamaz ve dolup taşarak sızdırır. Hasta sık sık az miktarda idrar yaptığını, tam boşalamadığını, idrarın damla damla geldiğini söyler.',
              'Erkeklerde en sık nedeni prostat büyümesidir. Kadınlarda ve erkeklerde şeker hastalığına bağlı sinir hasarı, bazı ilaçlar ve ileri derecede sarkma neden olabilir.',
              'Bu tipte mesaneyi gevşeten ilaç vermek durumu kötüleştirir — işte bu yüzden işedikten sonra mesanede kalan idrar miktarının ölçülmesi, tedaviye başlamadan önce yapılması gereken bir adımdır.'
            ]
          },
          {
            heading: 'Değerlendirmede neler yapılır',
            paragraphs: [
              'İdrar tahlili ve kültürü ile enfeksiyon dışlanır; tedavi edilmemiş bir enfeksiyon bu şikâyetlerin tamamını taklit edebilir.',
              'Birkaç günlük işeme günlüğü, ne sıklıkta ve ne miktarda idrar yapıldığını gösterir. Basit görünen bu kayıt, pahalı tetkiklerden daha çok bilgi verir.',
              'İşedikten sonra mesanede kalan idrar ölçülür. Gerektiğinde ürodinami ve görüntüleme yapılır.',
              'İdrarda kan görülmesi ayrı bir durumdur ve mutlaka araştırılmalıdır; basit bir kaçırma şikâyeti olarak geçiştirilmemelidir.'
            ]
          },
          {
            heading: 'Her tipte işe yarayan ortak adımlar',
            paragraphs: [
              'Kilo fazlasının azaltılması karın içi basıncı düşürür ve ölçülebilir fayda sağlar.',
              'Kabızlığın giderilmesi, pelvik taban üzerindeki sürekli baskıyı kaldırır.',
              'Sigaranın bırakılması, kronik öksürüğü azaltarak dolaylı fayda sağlar.',
              'Sıvıyı aşırı kısmak ise yanlıştır: idrar yoğunlaşır, mesaneyi tahriş eder ve şikâyet artar. Doğru olan sıvının gün içine yayılması ve akşam saatlerinde azaltılmasıdır.',
              'Bu içerik genel bilgilendirme amaçlıdır ve tıbbi tavsiye yerine geçmez. Tipin belirlenmesi için ürologla görüşün.'
            ]
          }
        ]
      }
    }
  },
  {
    slug: 'uretra-darliginda-neden-urethrotomi-yetmez',
    date: '2026-10-04',
    category: 'bph',
    languages: ['tr'],
    treatmentSlug: 'uretroplasti',
    sources: [
      { label: 'EAU Guidelines on Urethral Strictures — European Association of Urology', url: 'https://uroweb.org/guidelines/urethral-strictures' }
    ],
    i18n: {
      tr: {
        title: 'Üretra Darlığında Neden Üretrotomi Yetmez?',
        excerpt:
          'Darlığın içeriden kesilmesi kısa sürede rahatlama sağlar, ancak tekrarlama eğilimi yüksektir. Tekrarlayan kesi işlemleri sorunu çözmek yerine zorlaştırabilir.',
        metaTitle: 'Üretra Darlığı: Üretrotomi mi Üretroplasti mi',
        metaDescription:
          'Üretra darlığında içeriden kesme işleminin neden sık tekrarladığı, tekrarlayan girişimlerin zararı, üretroplastinin yeri ve doğru zamanlama.',
        sections: [
          {
            heading: 'Üretra darlığı nedir',
            paragraphs: [
              'Üretra, mesaneden idrarın dışarı taşındığı kanaldır. Bu kanalın bir bölümünde yara dokusu gelişip daralmasına üretra darlığı denir.',
              'Belirtiler yavaş başlar ve çoğu hasta uzun süre fark etmez: idrar akımının zayıflaması, dallanması, idrarı başlatmakta zorlanma, tam boşaltamama hissi, sık idrara çıkma ve tekrarlayan idrar yolu enfeksiyonları.',
              'Nedeni çoğu zaman geçmişteki bir sonda uygulaması, idrar yolundan yapılmış bir işlem, bir travma veya iltihaptır. Bazen belirgin bir neden bulunamaz.'
            ]
          },
          {
            heading: 'Üretrotomi ne yapar',
            paragraphs: [
              'Üretrotomi, idrar yolundan girilerek dar bölgenin içeriden bıçakla veya lazerle kesilmesidir. İşlem kısa sürer, kesi yoktur ve hasta genellikle hızla rahatlar.',
              'Bu hızlı rahatlama yöntemi cazip gösterir. Ancak burada önemli bir ayrım vardır: üretrotomi darlığı ortadan kaldırmaz, yalnızca açar. Dar bölgedeki yara dokusu yerinde kalır.'
            ]
          },
          {
            heading: 'Neden sık tekrarlıyor',
            paragraphs: [
              'Darlığın nedeni yara dokusudur ve yara dokusu kesildiğinde vücut orayı yine yara dokusuyla onarır. Yani iyileşme süreci, darlığı yeniden oluşturan süreçtir.',
              'Bu nedenle üretrotomiden sonra darlığın tekrarlaması beklenmedik bir durum değildir. Özellikle uzun darlıklarda, yara dokusunun çevre dokulara yayıldığı durumlarda ve daha önce girişim yapılmış hastalarda tekrarlama eğilimi daha belirgindir.',
              'İlk üretrotomi, kısa ve uygun yerleşimli bir darlıkta makul bir seçenektir. Sorun, aynı işlemin tekrar tekrar yapılmasıdır.'
            ]
          },
          {
            heading: 'Tekrarlayan kesi işlemlerinin asıl zararı',
            paragraphs: [
              'Her kesi işlemi yeni bir yara dokusu oluşturur. Darlık zamanla kısalmak yerine uzar ve çevre dokular sertleşir.',
              'Bunun pratik sonucu şudur: ileride kalıcı onarım gerektiğinde, cerrahın çalışacağı doku daha kötü durumda olur. Yani tekrarlanan üretrotomiler yalnızca işe yaramamakla kalmaz, asıl tedaviyi de zorlaştırabilir.',
              'Bu nedenle "bir kez daha açalım, belki bu sefer olur" yaklaşımı belirli bir noktadan sonra hastanın lehine değildir.'
            ]
          },
          {
            heading: 'Kendi kendine sonda uygulaması',
            paragraphs: [
              'Üretrotomi sonrası darlığın tekrar kapanmasını geciktirmek amacıyla hastaya düzenli aralıklarla kendi kendine sonda takması önerilebilir.',
              'Bu uygulama darlığın açık kalmasına yardımcı olabilir, ancak kalıcı bir çözüm değildir ve hasta için yük oluşturur. Uzun yıllar sürdürülmesi beklenen bir yöntem olarak sunulmamalıdır.'
            ]
          },
          {
            heading: 'Üretroplasti nedir, neden farklı',
            paragraphs: [
              'Üretroplasti, darlığın açılması değil onarılmasıdır. Dar segment ya çıkarılıp sağlam uçlar birleştirilir, ya da kanal bir doku yaması kullanılarak genişletilir.',
              'Yama olarak en sık ağız içinden alınan doku kullanılır. Bu doku nemli ortama alışkın olduğu ve alındığı yer kısa sürede iyileştiği için tercih edilir.',
              'Üretroplasti daha büyük bir ameliyattır ve iyileşmesi daha uzundur; ameliyat sonrası bir süre sonda kalır. Buna karşılık kalıcı sonuç verme açısından üretrotomiye göre öne çıkan yöntemdir.'
            ]
          },
          {
            heading: 'Hangi hastada hangisi',
            paragraphs: [
              'Kısa, ilk kez görülen ve uygun yerleşimli bir darlıkta üretrotomi denenebilir.',
              'Uzun darlıklarda, birden fazla bölgede darlık olanlarda ve daha önce girişim yapılıp tekrarlamış hastalarda üretroplasti öne çıkar.',
              'Burada en önemli nokta zamanlamadır: tekrarlayan girişimlerle yıllar geçirmek yerine, uygun hastada kalıcı onarımın erken gündeme gelmesi doku açısından avantajlıdır.',
              'Hekiminize şu soruyu sormakta tereddüt etmeyin: "Benim darlığım kaç santim, nerede ve bu işlem tekrarlarsa sıradaki adım ne olacak?" Bu sorunun cevabını bilmek, süreci yönetmenizi kolaylaştırır.',
              'Bu içerik genel bilgilendirme amaçlıdır ve tıbbi tavsiye yerine geçmez. Darlığınızın değerlendirilmesi için ürologla görüşün.'
            ]
          }
        ]
      }
    }
  }
];

/** Yayındaki yazılar — taslaklar hariç. Liste, sitemap ve statik üretim bunu kullanır. */
export const publishedPosts = blogPosts
  .filter((p) => !p.draft)
  .sort((a, b) => (a.date < b.date ? 1 : -1));

/** Slug ile yazı getirir; taslaklar yalnızca includeDrafts ile döner. */
export function getBlogPost(slug: string, includeDrafts = false): BlogPost | undefined {
  const p = blogPosts.find((x) => x.slug === slug);
  if (!p) return undefined;
  if (p.draft && !includeDrafts) return undefined;
  return p;
}

/** Belirli kategorideki yayındaki yazılar. */
export function postsByCategory(category: BlogCategory): BlogPost[] {
  return publishedPosts.filter((p) => p.category === category);
}

/**
 * Yazının yayında olduğu diller. `languages` yoksa tüm diller.
 * `languages` varsa yalnızca o dillerde içerik gerçekten mevcut olanlar —
 * böylece listede görünüp sayfası boş çıkan yazı olmaz.
 */
export function postLocales(post: BlogPost): Locale[] {
  if (!post.languages) return [...locales];
  return post.languages.filter((l) => post.i18n[l]);
}

/** Yazı bu dilde yayında mı? Rota ve liste bunu kullanır. */
export function isPostInLocale(post: BlogPost, locale: Locale): boolean {
  return postLocales(post).includes(locale);
}

/**
 * Bir dilde gösterilecek yazılar. Blog listesi, sitemap ve
 * generateStaticParams bunu kullanır — başka dilin yazısı sızmaz.
 */
export function postsForLocale(locale: Locale): BlogPost[] {
  return publishedPosts.filter((p) => isPostInLocale(p, locale));
}
