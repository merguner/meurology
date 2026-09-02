import type { Locale } from '@/i18n/routing';

/**
 * REKONSTRÜKTİF ÜROLOJİ KATEGORİ SAYFASI İÇERİĞİ
 * Fiyat/hacim değil; vaka karmaşıklığı, redo deneyimi ve uzun dönem başarı odaklı.
 * tr/en dolu; ar/de/ru render'da en'e düşer (çeviriler ayrı adımda).
 */
export interface ReconstructiveWhy {
  title: string;
  body: string;
}

export interface ReconstructiveContent {
  eyebrow: string;
  title: string;
  intro: string[];
  whyTitle: string;
  why: ReconstructiveWhy[];
  treatmentsTitle: string;
  ctaTitle: string;
  ctaBody: string;
}

const content: Partial<Record<Locale, ReconstructiveContent>> = {
  tr: {
    eyebrow: 'Uzmanlık gerektiren, karmaşık vakalar',
    title: 'Rekonstrüktif Üroloji',
    intro: [
      'Rekonstrüktif üroloji, üriner sistemin darlık, hasar veya fistül nedeniyle bozulan yapısının yeniden onarıldığı ileri bir cerrahi alandır. Bu vakalar standart tedavi kategorilerinden farklıdır: hasta bir fiyat avantajı için değil, bu cerrahiyi güvenle yapabilecek az sayıda merkezden birine ulaşmak için gelir.',
      'Bu nedenle burada öne çıkan şey fiyat ya da vaka hacmi değil; vaka karmaşıklığı, daha önce başka merkezde başarısız olmuş girişimleri (redo) çözebilme deneyimi, kullanılan ileri teknikler ve uzun dönem başarıdır. Her vaka önce dosya bazında cerrah tarafından değerlendirilir.'
    ],
    whyTitle: 'Hastalar buraya neden geliyor?',
    why: [
      {
        title: 'Karmaşık ve nadir vakalar',
        body: 'Uzun segment darlık, çok odaklı fistül veya anatomik varyasyonlar gibi, deneyimli merkezlere yönlendirilen vakalar.'
      },
      {
        title: 'Redo (tekrar) ameliyat deneyimi',
        body: 'Daha önce başka bir merkezde başarısız olmuş girişimler sonrası, skar dokusuna rağmen onarım.'
      },
      {
        title: 'Uzun dönem başarı ve takip',
        body: 'Bu cerrahilerde başarı kısa vadede değil, uzun dönem açıklık ve fonksiyonla ölçülür; takip protokolü kritik önemdedir.'
      }
    ],
    treatmentsTitle: 'Bu alandaki cerrahiler',
    ctaTitle: 'Önce dosyanızı cerrah değerlendirsin',
    ctaBody: 'Görüntülemelerinizi (üretrografi, BT ürografi, sintigrafi vb.) ve önceki ameliyat notlarınızı paylaşın; vakaya özel değerlendirme ve yol haritası çıkaralım. Bu kategoride fiyat, ancak dosya değerlendirmesi sonrası netleşir.'
  },
  en: {
    eyebrow: 'Complex cases that demand expertise',
    title: 'Reconstructive Urology',
    intro: [
      'Reconstructive urology is an advanced surgical field that rebuilds the structure of the urinary tract when it is damaged by stricture, injury or fistula. These cases differ from standard treatment categories: patients come not for a price advantage but to reach one of the few centers that can perform this surgery safely.',
      'What matters here is therefore not price or case volume, but case complexity, the experience to solve attempts that previously failed elsewhere (redo), the advanced techniques used and long-term success. Every case is first assessed by the surgeon on a file basis.'
    ],
    whyTitle: 'Why patients come here',
    why: [
      {
        title: 'Complex and rare cases',
        body: 'Cases referred to experienced centers, such as long-segment stricture, multifocal fistula or anatomical variants.'
      },
      {
        title: 'Redo (repeat) surgery experience',
        body: 'Repair despite scar tissue, after attempts that previously failed at another center.'
      },
      {
        title: 'Long-term success and follow-up',
        body: 'Success in these surgeries is measured not in the short term but by long-term patency and function; the follow-up protocol is critical.'
      }
    ],
    treatmentsTitle: 'Surgeries in this field',
    ctaTitle: 'Let the surgeon assess your file first',
    ctaBody: 'Share your imaging (urethrogram, CT urography, renal scan, etc.) and previous operative notes; we will produce a case-specific assessment and roadmap. In this category, price becomes clear only after a file assessment.'
  },
  ar: {
    eyebrow: 'حالات معقّدة تتطلب خبرة متخصصة',
    title: 'المسالك البولية الترميمية',
    intro: [
      'المسالك البولية الترميمية مجال جراحي متقدّم يُعاد فيه بناء بنية الجهاز البولي المتضرّرة بسبب التضيّق أو الإصابة أو الناسور. تختلف هذه الحالات عن فئات العلاج القياسية: لا يأتي المريض بحثًا عن ميزة سعرية، بل للوصول إلى أحد المراكز القليلة القادرة على إجراء هذه الجراحة بأمان.',
      'لذلك ما يتصدّر هنا ليس السعر أو عدد الحالات، بل تعقيد الحالة، والخبرة في حلّ محاولات فشلت سابقًا في مكان آخر (redo)، والتقنيات المتقدّمة المستخدمة، والنجاح طويل الأمد. تُقيَّم كل حالة أولًا من قِبل الجرّاح على أساس الملف.'
    ],
    whyTitle: 'لماذا يأتي المرضى إلى هنا؟',
    why: [
      {
        title: 'حالات معقّدة ونادرة',
        body: 'حالات تُحال إلى مراكز ذات خبرة، مثل التضيّق طويل المقطع أو الناسور متعدّد البؤر أو التنوّعات التشريحية.'
      },
      {
        title: 'خبرة إعادة الجراحة (redo)',
        body: 'إصلاح رغم النسيج الندبي بعد محاولات فشلت سابقًا في مركز آخر.'
      },
      {
        title: 'النجاح والمتابعة طويلة الأمد',
        body: 'يُقاس النجاح في هذه الجراحات ليس على المدى القصير، بل بالانفتاح والوظيفة على المدى الطويل؛ وبروتوكول المتابعة بالغ الأهمية.'
      }
    ],
    treatmentsTitle: 'الجراحات في هذا المجال',
    ctaTitle: 'دع الجرّاح يقيّم ملفك أولًا',
    ctaBody: 'شارك صورك (تصوير الإحليل، التصوير المقطعي بالصبغة، التصوير النووي، إلخ) وملاحظات عملياتك السابقة؛ وسنُعدّ تقييمًا وخطة خاصة بحالتك. في هذه الفئة، لا يتّضح السعر إلا بعد تقييم الملف.'
  },
  de: {
    eyebrow: 'Komplexe Fälle, die Expertise erfordern',
    title: 'Rekonstruktive Urologie',
    intro: [
      'Die rekonstruktive Urologie ist ein fortgeschrittenes chirurgisches Fachgebiet, das die Struktur des Harntrakts wiederaufbaut, wenn sie durch Striktur, Verletzung oder Fistel geschädigt ist. Diese Fälle unterscheiden sich von Standard-Behandlungskategorien: Patienten kommen nicht wegen eines Preisvorteils, sondern um eines der wenigen Zentren zu erreichen, die diese Chirurgie sicher durchführen können.',
      'Entscheidend ist hier daher nicht Preis oder Fallzahl, sondern die Fallkomplexität, die Erfahrung, andernorts zuvor gescheiterte Versuche zu lösen (Redo), die verwendeten fortgeschrittenen Techniken und der langfristige Erfolg. Jeder Fall wird zunächst vom Chirurgen anhand der Akte bewertet.'
    ],
    whyTitle: 'Warum Patienten hierherkommen',
    why: [
      {
        title: 'Komplexe und seltene Fälle',
        body: 'Fälle, die an erfahrene Zentren überwiesen werden, etwa langstreckige Striktur, multifokale Fistel oder anatomische Varianten.'
      },
      {
        title: 'Redo-Erfahrung (Wiederholungseingriff)',
        body: 'Reparatur trotz Narbengewebe, nach andernorts zuvor gescheiterten Versuchen.'
      },
      {
        title: 'Langfristiger Erfolg und Nachsorge',
        body: 'Der Erfolg dieser Eingriffe bemisst sich nicht kurzfristig, sondern an langfristiger Durchgängigkeit und Funktion; das Nachsorgeprotokoll ist entscheidend.'
      }
    ],
    treatmentsTitle: 'Eingriffe in diesem Bereich',
    ctaTitle: 'Lassen Sie zuerst den Chirurgen Ihre Akte bewerten',
    ctaBody: 'Teilen Sie Ihre Bildgebung (Urethrogramm, CT-Urographie, Szintigraphie usw.) und frühere OP-Berichte; wir erstellen eine fallspezifische Bewertung und einen Fahrplan. In dieser Kategorie wird der Preis erst nach einer Aktenprüfung klar.'
  },
  ru: {
    eyebrow: 'Сложные случаи, требующие экспертизы',
    title: 'Реконструктивная урология',
    intro: [
      'Реконструктивная урология — продвинутая хирургическая область, которая восстанавливает структуру мочевыводящих путей, повреждённую стриктурой, травмой или свищом. Эти случаи отличаются от стандартных категорий лечения: пациенты приходят не ради ценового преимущества, а чтобы попасть в один из немногих центров, способных выполнить такую операцию безопасно.',
      'Поэтому здесь важна не цена и не число операций, а сложность случая, опыт решения ранее неудавшихся в другом месте попыток (redo), применяемые продвинутые методики и долгосрочный успех. Каждый случай сначала оценивает хирург на основании документов.'
    ],
    whyTitle: 'Почему пациенты приезжают сюда',
    why: [
      {
        title: 'Сложные и редкие случаи',
        body: 'Случаи, направляемые в опытные центры: протяжённая стриктура, многоочаговый свищ или анатомические варианты.'
      },
      {
        title: 'Опыт повторных операций (redo)',
        body: 'Восстановление несмотря на рубцовую ткань, после ранее неудавшихся в другом месте попыток.'
      },
      {
        title: 'Долгосрочный успех и наблюдение',
        body: 'Успех этих операций измеряется не в краткосрочной перспективе, а долгосрочной проходимостью и функцией; протокол наблюдения критически важен.'
      }
    ],
    treatmentsTitle: 'Операции в этой области',
    ctaTitle: 'Пусть хирург сначала оценит ваши документы',
    ctaBody: 'Поделитесь снимками (уретрограмма, КТ-урография, сцинтиграфия и т. д.) и записями предыдущих операций; мы подготовим индивидуальную оценку и план. В этой категории цена становится ясна только после оценки документов.'
  }
};

export function resolveReconstructive(locale: Locale): ReconstructiveContent {
  return content[locale] ?? content.en ?? content.tr!;
}
