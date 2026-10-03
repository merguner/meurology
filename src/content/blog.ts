import type { Locale } from '@/i18n/routing';

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

export interface BlogPost {
  slug: string;
  date: string; // ISO
  treatmentSlug?: string; // ilgili tedavi (opsiyonel)
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

export const blogPosts: BlogPost[] = [
  {
    slug: 'prostat-kanseri-belirtileri-ve-tedavi-secenekleri',
    date: '2026-01-15',
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
  }
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
