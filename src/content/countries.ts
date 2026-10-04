import type { Locale } from '@/i18n/routing';

/**
 * ÜLKE SAYFALARI (prompt m.4.5).
 *
 * KURALLAR
 *  - /tr'de YAYINLANMAZ. Sağlık turizmi istisnası yalnızca yabancı dil
 *    sayfaları içindir; `countriesForLocale()` tr için boş döner.
 *  - Doorway page riskine karşı her ülke sayfası O ÜLKEYE ÖZGÜ, benzersiz
 *    içerik taşır (uçuş, dil, ödeme, tipik kalış planı, yerel sorular).
 *    Şablon metni kopyalanmaz.
 *  - VİZE KURALI YAZILMAZ. Kurallar sık değişir ve yanlış bilgi hastayı
 *    havalimanında mağdur eder. Bunun yerine T.C. resmî kaynağına link
 *    verilir ve "kendi pasaportunuz için doğrulayın" denir (prompt m.4.5
 *    bunu açıkça TODO-DOGRULA olarak işaretler).
 *  - Uçuş süreleri "yaklaşık" ve doğrudan uçuş içindir; bağlantılı uçuşta
 *    süre uzar. Kesin rakam verilmez.
 *  - Her ülke yalnızca ANLAMLI dillerde yayımlanır (Irak → ar+en,
 *    Almanya → de+en). Kimsenin okumayacağı bir dilde sayfa üretmek
 *    hem yararsız hem doorway riskidir.
 *
 * TODO-DOGRULA: Koordinatör şu an yalnızca İngilizce hizmet veriyor
 * (contact.ts). Arapça/Fransızca/Rusça için görüşme öncesi tercüman
 * ayarlanır — metinler bunu olduğu gibi söyler, dil vaadi verilmez.
 */

export interface CountrySection {
  heading: string;
  body: string;
}

export interface CountryContent {
  /** Sayfa başlığı (H1). */
  title: string;
  /** Tek cümlelik özet. */
  summary: string;
  metaTitle: string;
  metaDescription: string;
  /** Yaklaşık doğrudan uçuş süresi, serbest metin (ör. "yaklaşık 3 saat"). */
  flightTime: string;
  /** Hangi havalimanlarından doğrudan uçuş var — serbest metin. */
  routes: string;
  /** Görüşme dili ve tercüman durumu. */
  language: string;
  /** Para birimi ve ödeme pratiği. */
  payment: string;
  /** Ülkeye özgü ek bölümler. */
  sections: CountrySection[];
  /** Ülkeye özgü sorular. */
  faqs: { q: string; a: string }[];
}

export interface Country {
  /** URL slug'ı — tüm dillerde aynı (Latin). */
  slug: string;
  /** ISO 3166-1 alpha-2 — bayrak/okunur ad için. */
  iso: string;
  /** Bu ülke için sayfa üretilecek diller. tr ASLA yer almaz. */
  locales: Exclude<Locale, 'tr'>[];
  i18n: Partial<Record<Locale, CountryContent>>;
}

/**
 * T.C. resmî vize bilgi kaynağı. Ülke metinlerinde kural yazmak yerine
 * buraya yönlendirilir.
 */
export const VISA_SOURCE_URL = 'https://www.mfa.gov.tr/vize-bilgileri.tr.mfa';
export const EVISA_URL = 'https://www.evisa.gov.tr/';

export const countries: Country[] = [
  {
    slug: 'iraq',
    iso: 'IQ',
    locales: ['ar', 'en'],
    i18n: {
      ar: {
        title: 'مرضى العراق: جراحة المسالك البولية في إسطنبول',
        summary: 'القرب الجغرافي والرحلات المباشرة يجعلان الوصول من العراق إلى إسطنبول ممكنًا في اليوم نفسه. هذه الصفحة تشرح ما يخصّك أنت تحديدًا.',
        metaTitle: 'جراحة المسالك البولية في تركيا للمرضى من العراق',
        metaDescription: 'الرحلات من العراق إلى إسطنبول، ولغة المقابلة، والدفع، وخطة الإقامة النموذجية، والمتابعة بعد العودة، لمرضى جراحة المسالك البولية.',
        flightTime: 'نحو 2.5–3.5 ساعة بالرحلة المباشرة بحسب مدينة الانطلاق',
        routes: 'تتوفر خيارات رحلات مباشرة إلى مطاري إسطنبول من المدن العراقية الرئيسة مثل بغداد وأربيل والسليمانية والبصرة. الجداول تتغير موسميًا، فيُرجى تأكيد الرحلة الحالية مع شركة الطيران.',
        language: 'لغة المقابلة الطبية عربية. ويُرتَّب مترجم قبل الموعد؛ أما منسقة المرضى الدوليين فتقدّم الخدمة بالإنجليزية. ولا نَعِد بخدمة عربية على مدار الساعة، بل نرتّبها لموعدك.',
        payment: 'لا يُتداول الدينار العراقي في تركيا. ويمكن الدفع بالليرة التركية أو اليورو أو الدولار بحسب ترتيب المستشفى. الحوالات المصرفية الدولية قد تستغرق أيامًا، لذا يُفضَّل ترتيبها قبل السفر لا في يوم العملية.',
        sections: [
          { heading: 'لماذا يصل كثير من المرضى من العراق في اليوم نفسه', body: 'المسافة القصيرة تعني أن المريض يستطيع الإقلاع صباحًا والوصول إلى المستشفى بعد الظهر. وهذا يغيّر طريقة التخطيط: فبدل حجز إقامة طويلة قبل التقييم، يمكن ترتيب يوم الفحص والتصوير أولًا، ثم تحديد موعد العملية بناءً على النتيجة. ومن لا يحتاج إلى جراحة يعود بعد يومين من دون تكلفة إقامة طويلة.' },
          { heading: 'خطة إقامة نموذجية', body: 'لإجراء مثل تفتيت حصى الكلى بالمنظار المرن: اليوم الأول فحص وتحاليل وتصوير؛ اليوم الثاني العملية والخروج في اليوم نفسه أو بعد ليلة؛ اليومان الثالث والرابع راحة ومراجعة؛ ثم العودة. أما جراحة البروستاتا الجذرية فتتطلب إقامة أطول تمتد عادةً سبعة إلى عشرة أيام بسبب فترة القسطرة. وتُحدَّد المدة بدقة بعد تقييم ملفك.' },
          { heading: 'أرسل تقاريرك قبل السفر', body: 'إن كانت لديك تحاليل أو أشعة أو تقرير علم أمراض من مستشفى في العراق، أرسلها قبل الحجز. فكثير من المرضى يسافرون ثم يُعاد عليهم فحص سبق إجراؤه، وهذا يضيّع يومًا ومالًا. وأقراص التصوير المقطعي والرنين مفيدة أكثر من صور التقارير الورقية، لأن الطبيب يحتاج إلى الصور نفسها لا إلى وصفها.' },
          { heading: 'بعد عودتك', body: 'تُسلَّم تقاريرك مكتوبة بحيث يستطيع طبيبك في العراق متابعتها. والمتابعة بعد العودة تتم عن بُعد: تُرسل نتائج التحاليل وتُقيَّم، ويُحدَّد موعد المراجعة التالي. وإن احتجت إلى تدخل عاجل في بلدك فالتقرير يوضح ما أُجري بالضبط حتى يتصرف الطبيب المحلي على بيّنة.' }
        ],
        faqs: [
          { q: 'هل أحتاج إلى تأشيرة؟', a: 'تتغير قواعد التأشيرة بحسب نوع جواز السفر وتُحدَّث من حين لآخر، ولذلك لا نذكرها هنا حتى لا نضلّلك. تحقّق من وضعك على الموقع الرسمي لوزارة الخارجية التركية أو على موقع التأشيرة الإلكترونية قبل الحجز.' },
          { q: 'هل يمكن أن يرافقني أحد؟', a: 'نعم، ويُوصى بذلك خصوصًا بعد العمليات التي تتطلب مبيتًا. وتشمل ترتيبات الإقامة عادةً مرافقًا واحدًا. أخبرنا مسبقًا ليُحجَز له مكان.' },
          { q: 'هل تُكتب التقارير بالعربية؟', a: 'تُعدّ التقارير الطبية بالإنجليزية لأنها اللغة المتعارف عليها بين الأطباء، ويُشرح مضمونها لك بالعربية في المقابلة. وإن احتجت نسخة مترجمة فأخبرنا قبل الخروج من المستشفى.' },
          { q: 'ماذا عن الأدوية بعد العودة؟', a: 'تُكتب الأدوية بأسمائها العلمية لا بالأسماء التجارية فقط، حتى تجد المكافئ المتاح في الصيدليات العراقية. وإن لم يتوفر دواء فاسأل قبل تغييره من تلقاء نفسك.' }
        ]
      },
      en: {
        title: 'Patients from Iraq: urological surgery in Istanbul',
        summary: 'Short distances and direct flights make same-day arrival from Iraq possible. This page covers what applies specifically to you.',
        metaTitle: 'Urological Surgery in Turkey for Patients from Iraq',
        metaDescription: 'Flights from Iraq to Istanbul, the language of the consultation, payment, a typical length of stay and follow-up after you return home.',
        flightTime: 'About 2.5–3.5 hours on a direct flight, depending on your departure city',
        routes: 'Direct flight options to Istanbul’s two airports are available from the main Iraqi cities such as Baghdad, Erbil, Sulaymaniyah and Basra. Schedules change seasonally, so please confirm the current service with your airline.',
        language: 'The medical consultation is held in Arabic. An interpreter is arranged ahead of the appointment; the international patient coordinator works in English. We do not promise round-the-clock Arabic cover — we arrange it for your appointment.',
        payment: 'The Iraqi dinar is not used in Turkey. Payment can be made in Turkish lira, euro or US dollars according to the hospital’s arrangement. International bank transfers can take several days, so it is better to arrange them before travelling rather than on the day of surgery.',
        sections: [
          { heading: 'Why many patients from Iraq arrive the same day', body: 'The short distance means you can take off in the morning and reach the hospital in the afternoon. That changes how the trip is planned: rather than booking a long stay before you have been assessed, the examination and imaging day can be arranged first and the operation date set according to the result. Patients who turn out not to need surgery go home after two days without paying for a long stay.' },
          { heading: 'A typical length of stay', body: 'For a procedure such as flexible endoscopic kidney stone surgery: day one examination, blood tests and imaging; day two the procedure with discharge the same day or after one night; days three and four rest and a check-up; then home. Radical prostate surgery needs longer — usually seven to ten days because of the catheter period. The exact length is set once your file has been assessed.' },
          { heading: 'Send your reports before you travel', body: 'If you have blood tests, imaging or a pathology report from a hospital in Iraq, send them before booking. Many patients travel and then have an investigation repeated that had already been done, which costs a day and money. CT and MRI discs are far more useful than photographs of paper reports, because the surgeon needs the images themselves rather than a description of them.' },
          { heading: 'After you return', body: 'Your reports are issued in writing so that your doctor in Iraq can follow them. Follow-up after you go home is done remotely: test results are sent in and reviewed, and the next check is scheduled. If you need urgent care at home, the report states exactly what was done so that the local doctor can act on solid information.' }
        ],
        faqs: [
          { q: 'Do I need a visa?', a: 'Visa rules vary with the type of passport and are updated from time to time, so we do not state them here in case we mislead you. Check your own position on the official website of the Turkish Ministry of Foreign Affairs or the e-visa site before booking.' },
          { q: 'Can someone travel with me?', a: 'Yes, and it is advisable, particularly after operations that require an overnight stay. Accommodation arrangements usually include one companion. Tell us in advance so that a place can be reserved.' },
          { q: 'Are the reports written in Arabic?', a: 'Medical reports are prepared in English because that is the common language between doctors, and their content is explained to you in Arabic during the consultation. If you need a translated copy, tell us before you are discharged.' },
          { q: 'What about medication after I get home?', a: 'Medicines are prescribed by their generic names, not only by brand name, so that you can find the equivalent available in Iraqi pharmacies. If something is not available, ask before changing it on your own.' }
        ]
      }
    }
  },
  {
    slug: 'libya',
    iso: 'LY',
    locales: ['ar', 'en'],
    i18n: {
      ar: {
        title: 'مرضى ليبيا: جراحة المسالك البولية في إسطنبول',
        summary: 'يصل كثير من المرضى من ليبيا إلى إسطنبول بعد انتظار طويل أو علاج غير مكتمل. هذه الصفحة تشرح كيف نخطط لذلك.',
        metaTitle: 'جراحة المسالك البولية في تركيا للمرضى من ليبيا',
        metaDescription: 'الرحلات من ليبيا إلى إسطنبول، ولغة المقابلة، والدفع، والإقامة النموذجية، وما ينبغي إحضاره، والمتابعة بعد العودة.',
        flightTime: 'نحو 3.5–4.5 ساعة بالرحلة المباشرة',
        routes: 'تتوفر رحلات إلى إسطنبول من طرابلس ومصراتة وبنغازي، غير أن الجداول تتغير أكثر من غيرها. يُرجى تأكيد الرحلة مع شركة الطيران قبل تحديد موعد العملية، وترك هامش يوم إضافي عند الحجز.',
        language: 'المقابلة الطبية بالعربية، ويُرتَّب مترجم قبل الموعد. أما التواصل الكتابي فيجري بالإنجليزية مع منسقة المرضى الدوليين.',
        payment: 'تُسوّى المدفوعات باليورو أو الدولار عادةً. ولأن الحوالات الدولية من ليبيا قد تتأخر، يُفضَّل بدء الترتيب المالي مبكرًا وعدم تركه إلى يوم الدخول إلى المستشفى.',
        sections: [
          { heading: 'حالات وصلت متأخرة', body: 'كثير من المرضى من ليبيا يصلون بعد فترة انتظار طويلة أو بعد علاج بدأ ولم يكتمل. وهذا يغيّر الأولوية: فقبل الحديث عن العملية يجب معرفة ما حدث للكلية أو للمثانة في أثناء الانتظار. ولهذا يبدأ التقييم عندنا بالتصوير وفحوص وظائف الكلى، لا بتحديد موعد جراحي مباشرة.' },
          { heading: 'إن كنت قد خضعت لعملية سابقة', body: 'الجراحة الثانية ليست تكرارًا للأولى. فالنسيج الندبي يغيّر التشريح، وخطر المضاعفات يختلف. أحضر تقرير العملية السابقة إن أمكن — وإن لم يتوفر فاذكر على الأقل اسم المستشفى وتاريخ العملية ونوع الشقّ. هذه المعلومة تغيّر خطة التدخل فعلًا.' },
          { heading: 'خطة إقامة نموذجية', body: 'يُخطَّط عادةً لإقامة من سبعة إلى عشرة أيام، أطول مما يُخطَّط لمرضى الدول المجاورة. والسبب ليس طبيًا بل لوجستي: تباعد الرحلات يجعل تمديد الإقامة يومًا أسهل من تقديم العودة. وتشمل الخطة يوم التقييم، ويوم العملية، وفترة المراقبة، ومراجعة قبل السفر.' },
          { heading: 'المتابعة بعد العودة', body: 'تُجرى المتابعة عن بُعد بإرسال التحاليل والصور. ونكتب في التقرير ما الذي ينبغي مراقبته ومتى، حتى يتمكن طبيبك في ليبيا من المتابعة من دون الرجوع إلينا في كل خطوة. وإن ظهرت علامة تحذير فالتقرير يذكرها صراحةً.' }
        ],
        faqs: [
          { q: 'هل أحتاج إلى تأشيرة؟', a: 'لا نذكر قواعد التأشيرة هنا لأنها تتغير وتختلف بحسب نوع الجواز. تحقّق من وضعك على الموقع الرسمي لوزارة الخارجية التركية أو موقع التأشيرة الإلكترونية قبل شراء التذكرة.' },
          { q: 'ماذا لو تأخرت رحلتي وفات موعد العملية؟', a: 'أخبرنا فور علمك بالتأخير. فإعادة الجدولة ممكنة عادةً، لكنها أسهل بكثير قبل يوم العملية منها بعده. ولهذا ننصح بترك هامش يوم إضافي عند الحجز.' },
          { q: 'هل يمكن تجهيز تقرير طبي رسمي للسفارة أو لجهة العمل؟', a: 'نعم. أخبرنا بما تحتاجه الجهة بالضبط قبل الخروج من المستشفى، لأن إعداد التقرير بعد المغادرة أصعب.' }
        ]
      },
      en: {
        title: 'Patients from Libya: urological surgery in Istanbul',
        summary: 'Many patients from Libya arrive after a long wait or after treatment that was started but not completed. This page explains how we plan for that.',
        metaTitle: 'Urological Surgery in Turkey for Patients from Libya',
        metaDescription: 'Flights from Libya to Istanbul, the language of the consultation, payment, a typical stay, what to bring and follow-up after you return.',
        flightTime: 'About 3.5–4.5 hours on a direct flight',
        routes: 'Flights to Istanbul are available from Tripoli, Misrata and Benghazi, although the schedules change more often than most. Please confirm your flight with the airline before an operation date is set, and allow an extra day when booking.',
        language: 'The medical consultation is held in Arabic, with an interpreter arranged ahead of the appointment. Written correspondence is in English with the international patient coordinator.',
        payment: 'Payment is usually settled in euros or US dollars. Because international transfers from Libya can be delayed, it is better to start the financial arrangement early rather than leave it to the day of admission.',
        sections: [
          { heading: 'Cases that arrive late', body: 'Many patients from Libya arrive after a long wait, or after treatment that was begun and never finished. That changes the priority: before discussing an operation we need to know what has happened to the kidney or the bladder during the wait. For that reason the assessment here begins with imaging and kidney function tests, not with booking a surgical date.' },
          { heading: 'If you have had an operation before', body: 'A second operation is not a repeat of the first. Scar tissue changes the anatomy and the risk of complications differs. Bring the report of your previous operation if you can — and if it is not available, at least tell us the hospital, the date and the type of incision. That information genuinely changes the surgical plan.' },
          { heading: 'A typical length of stay', body: 'A stay of seven to ten days is usually planned, longer than for patients from neighbouring countries. The reason is logistical rather than medical: with flights further apart, extending a stay by a day is easier than bringing the return forward. The plan covers the assessment day, the operation, the observation period and a check-up before you fly.' },
          { heading: 'Follow-up after you return', body: 'Follow-up is done remotely, with test results and images sent in. We write in the report what should be monitored and when, so that your doctor in Libya can carry on without coming back to us at every step. If there is a warning sign to watch for, the report states it plainly.' }
        ],
        faqs: [
          { q: 'Do I need a visa?', a: 'We do not state visa rules here because they change and vary with the type of passport. Check your own position on the official website of the Turkish Ministry of Foreign Affairs or the e-visa site before buying a ticket.' },
          { q: 'What if my flight is delayed and I miss the operation date?', a: 'Tell us as soon as you know about the delay. Rescheduling is usually possible, but it is far easier before the day of surgery than afterwards. That is why we advise allowing an extra day when booking.' },
          { q: 'Can an official medical report be prepared for an embassy or an employer?', a: 'Yes. Tell us exactly what the organisation requires before you are discharged, because preparing the report after you have left is harder.' }
        ]
      }
    }
  }
,
  {
    slug: 'saudi-arabia',
    iso: 'SA',
    locales: ['ar', 'en'],
    i18n: {
      ar: {
        title: 'مرضى السعودية: جراحة المسالك البولية في إسطنبول',
        summary: 'كثير من المرضى من السعودية يأتون للحصول على رأي ثانٍ أو لإجراء محدد. هذه الصفحة تشرح ما يلزمك عمليًا.',
        metaTitle: 'جراحة المسالك البولية في تركيا للمرضى من السعودية',
        metaDescription: 'الرحلات من السعودية إلى إسطنبول، ولغة المقابلة، والدفع، والخصوصية، والرأي الثاني، والمتابعة بعد العودة.',
        flightTime: 'نحو 4–5 ساعات بالرحلة المباشرة بحسب مدينة الانطلاق',
        routes: 'تتوفر رحلات مباشرة إلى إسطنبول من الرياض وجدة والدمام على مدار العام، وتزداد الخيارات في موسم الصيف. يُرجى تأكيد الرحلة مع شركة الطيران.',
        language: 'المقابلة الطبية بالعربية ويُرتَّب مترجم قبل الموعد. منسقة المرضى الدوليين تعمل بالإنجليزية.',
        payment: 'يمكن الدفع بالبطاقة أو بالحوالة. أبلغ مصرفك مسبقًا بسفرك حتى لا تُرفض العملية تلقائيًا، فهذا سبب شائع للتعطّل في يوم الدخول.',
        sections: [
          { heading: 'الرأي الثاني قبل قرار جراحي', body: 'كثير من المرضى يصلون ومعهم خطة علاج مقترحة بالفعل ويريدون رأيًا ثانيًا قبل الموافقة. وهذا طلب مشروع وشائع. ولكي يكون الرأي الثاني ذا قيمة يجب أن يُبنى على البيانات نفسها: أي على صور التصوير المقطعي أو الرنين وتقرير علم الأمراض، لا على ملخص شفهي. أرسل الصور بصيغتها الأصلية قبل الموعد.' },
          { heading: 'الخصوصية وترتيبات الإقامة', body: 'تتوفر غرف خاصة وترتيبات تراعي خصوصية العائلة، كما يمكن ترتيب إقامة المرافق. وإن كانت لديك تفضيلات تتعلق بجنس مقدّم الخدمة في فحوص معيّنة فاذكرها عند الحجز لا في يوم الفحص، لأن الترتيب المسبق أسهل.' },
          { heading: 'ماذا لو لم تكن الجراحة ضرورية؟', body: 'يحدث أن ينتهي التقييم إلى أن المتابعة أنسب من التدخل — في ارتفاع الـ PSA الحدّي مثلًا أو في دوالي الخصية من دون أثر على التحاليل. ونحن نقول ذلك صراحةً. وسفرك في هذه الحالة لا يذهب سدى؛ فالخروج بقرار "لا داعي للعملية الآن" مبني على بيانات هو نتيجة في حد ذاتها.' }
        ],
        faqs: [
          { q: 'هل أحتاج إلى تأشيرة؟', a: 'تختلف القواعد بحسب نوع الجواز وتتغير، ولذلك لا نذكرها هنا. تحقّق من المصدر الرسمي قبل الحجز.' },
          { q: 'هل يمكن إجراء المقابلة عن بُعد أولًا؟', a: 'نعم، وهذا هو المعتاد للرأي الثاني. تُراجَع صورك وتقاريرك ثم يُحدَّد ما إذا كان السفر ضروريًا أصلًا.' },
          { q: 'هل تُقبل التغطية التأمينية؟', a: 'تُسوّى معظم الحالات مباشرةً، ثم يُقدَّم للمريض ملف فواتير وتقارير ليطالب شركته. تحقّق من شروط وثيقتك للعلاج بالخارج قبل السفر.' }
        ]
      },
      en: {
        title: 'Patients from Saudi Arabia: urological surgery in Istanbul',
        summary: 'Many patients from Saudi Arabia come for a second opinion or for one specific procedure. This page covers the practical side.',
        metaTitle: 'Urological Surgery in Turkey for Patients from Saudi Arabia',
        metaDescription: 'Flights from Saudi Arabia to Istanbul, the language of the consultation, payment, privacy, second opinions and follow-up after you return.',
        flightTime: 'About 4–5 hours on a direct flight, depending on your departure city',
        routes: 'Direct flights to Istanbul run year-round from Riyadh, Jeddah and Dammam, with more options in the summer season. Please confirm your flight with the airline.',
        language: 'The medical consultation is held in Arabic, with an interpreter arranged ahead of the appointment. The international patient coordinator works in English.',
        payment: 'Payment can be made by card or by transfer. Tell your bank you are travelling so the transaction is not declined automatically — that is a common cause of delay on the day of admission.',
        sections: [
          { heading: 'A second opinion before a surgical decision', body: 'Many patients arrive already holding a proposed treatment plan and want a second opinion before agreeing to it. That is a legitimate and common request. For a second opinion to be worth anything it has to rest on the same data: on the CT or MRI images and the pathology report, not on a verbal summary. Send the images in their original format before the appointment.' },
          { heading: 'Privacy and accommodation arrangements', body: 'Private rooms and arrangements that respect family privacy are available, and accommodation for a companion can be organised. If you have preferences about the gender of the staff carrying out particular examinations, say so when booking rather than on the day — arranging it in advance is far easier.' },
          { heading: 'What if surgery turns out not to be necessary?', body: 'Sometimes the assessment concludes that surveillance suits you better than intervention — with a borderline raised PSA, for instance, or a varicocele that is not affecting the sperm values. We say so plainly. Your trip is not wasted in that case; leaving with a data-based decision that surgery is not needed now is itself a result.' }
        ],
        faqs: [
          { q: 'Do I need a visa?', a: 'Rules differ with the type of passport and do change, so we do not state them here. Check the official source before booking.' },
          { q: 'Can the consultation be held remotely first?', a: 'Yes, and that is the usual route for a second opinion. Your images and reports are reviewed, and only then is it decided whether travelling is necessary at all.' },
          { q: 'Is insurance cover accepted?', a: 'Most cases are settled directly, and the patient is then given a file of invoices and reports to claim from their insurer. Check the overseas-treatment terms of your policy before you travel.' }
        ]
      }
    }
  },
  {
    slug: 'uae',
    iso: 'AE',
    locales: ['ar', 'en'],
    i18n: {
      ar: {
        title: 'مرضى الإمارات: جراحة المسالك البولية في إسطنبول',
        summary: 'الرحلات المتكررة من دبي وأبوظبي تجعل التخطيط لإقامة قصيرة سهلًا. هذه الصفحة تشرح كيف نستفيد من ذلك.',
        metaTitle: 'جراحة المسالك البولية في تركيا للمرضى من الإمارات',
        metaDescription: 'الرحلات من الإمارات إلى إسطنبول، ولغة المقابلة، والدفع، وخطة الإقامة القصيرة، والمتابعة بعد العودة.',
        flightTime: 'نحو 4.5–5 ساعات بالرحلة المباشرة',
        routes: 'الرحلات المباشرة من دبي وأبوظبي والشارقة إلى إسطنبول متعددة يوميًا، وهذا يتيح مرونة في تغيير موعد العودة عند الحاجة.',
        language: 'المقابلة بالعربية مع ترتيب مترجم، أو بالإنجليزية مباشرةً إن كنت تفضّل ذلك.',
        payment: 'يمكن الدفع بالبطاقة أو بالحوالة، وتُقبل اليورو والدولار. أبلغ مصرفك بسفرك لتفادي رفض المعاملة.',
        sections: [
          { heading: 'لماذا تناسب الإمارات خطة الإقامة القصيرة', body: 'تعدد الرحلات اليومية يغيّر طريقة التخطيط. فبدل حجز رحلة عودة ثابتة بعد أسبوع، يمكن حجز تذكرة قابلة للتغيير وتحديد يوم العودة بعد رؤية مسار التعافي. وهذا مفيد خصوصًا في الإجراءات التي تُنزَع فيها القسطرة أو الدعامة في موعد مراجعة.' },
          { heading: 'إن كنت مقيمًا لا مواطنًا', body: 'كثير من المرضى في الإمارات مقيمون بجوازات دول أخرى. وقواعد التأشيرة ترتبط بجواز السفر لا بمحل الإقامة، لذلك تحقّق من وضعك وفق جوازك أنت. كما أن تغطية التأمين للعلاج بالخارج قد تختلف لدى المقيمين؛ راجع وثيقتك قبل الحجز.' },
          { heading: 'المتابعة بعد العودة', body: 'تُجرى المتابعة عن بُعد بإرسال التحاليل. وإن كنت تتابع مع طبيب في الإمارات فنكتب التقرير بما يمكّنه من الاستمرار: ما أُجري بالضبط، وما الذي يُراقَب، ومتى. ولا نطلب منك العودة لمجرد مراجعة روتينية يمكن إجراؤها عندك.' }
        ],
        faqs: [
          { q: 'هل أحتاج إلى تأشيرة؟', a: 'يعتمد ذلك على جواز سفرك لا على إقامتك في الإمارات. تحقّق من المصدر الرسمي قبل الحجز.' },
          { q: 'هل يمكن إنهاء الأمر في إقامة قصيرة؟', a: 'في كثير من الإجراءات نعم، لكن ذلك يعتمد على نوع العملية. تُحدَّد المدة بعد مراجعة ملفك، ولا نَعِد بمدة قبل رؤية البيانات.' },
          { q: 'هل تُقبل بطاقتي الائتمانية؟', a: 'عادةً نعم، لكن أبلغ مصرفك بالسفر مسبقًا. رفض المعاملة بسبب إجراءات الأمان سبب شائع للتأخير.' }
        ]
      },
      en: {
        title: 'Patients from the UAE: urological surgery in Istanbul',
        summary: 'Frequent flights from Dubai and Abu Dhabi make a short stay easy to plan. This page explains how we make use of that.',
        metaTitle: 'Urological Surgery in Turkey for Patients from the UAE',
        metaDescription: 'Flights from the UAE to Istanbul, the language of the consultation, payment, planning a short stay and follow-up after you return.',
        flightTime: 'About 4.5–5 hours on a direct flight',
        routes: 'Direct flights from Dubai, Abu Dhabi and Sharjah to Istanbul run several times a day, which gives you flexibility to change your return date if needed.',
        language: 'The consultation can be held in Arabic with an interpreter arranged, or directly in English if you prefer.',
        payment: 'Payment can be made by card or transfer, and euros and US dollars are accepted. Tell your bank you are travelling to avoid a declined transaction.',
        sections: [
          { heading: 'Why the UAE suits a short-stay plan', body: 'Several flights a day changes how the trip is planned. Rather than booking a fixed return a week out, you can buy a changeable ticket and set the return date once the course of recovery is clear. That is particularly useful for procedures where a catheter or a stent is removed at a follow-up appointment.' },
          { heading: 'If you are a resident rather than a citizen', body: 'Many patients in the UAE are residents holding passports of other countries. Visa rules follow your passport, not your place of residence, so check your position according to your own passport. Insurance cover for treatment abroad can also differ for residents; review your policy before booking.' },
          { heading: 'Follow-up after you return', body: 'Follow-up is done remotely with test results sent in. If you are being followed by a doctor in the UAE, we write the report so that they can carry on: exactly what was done, what should be monitored and when. We do not ask you to fly back for a routine check that can be done where you are.' }
        ],
        faqs: [
          { q: 'Do I need a visa?', a: 'That depends on your passport rather than your residence in the UAE. Check the official source before booking.' },
          { q: 'Can it all be done in a short stay?', a: 'For many procedures yes, but it depends on the operation. The length is set once your file has been reviewed; we do not promise a duration before seeing the data.' },
          { q: 'Will my credit card be accepted?', a: 'Usually yes, but tell your bank you are travelling beforehand. A transaction declined by security checks is a common cause of delay.' }
        ]
      }
    }
  }
,
  {
    slug: 'nigeria',
    iso: 'NG',
    locales: ['en'],
    i18n: {
      en: {
        title: 'Patients from Nigeria: urological surgery in Istanbul',
        summary: 'Istanbul is reachable in a single flight from Lagos and Abuja, and consultations are held in English. This page covers what applies to you.',
        metaTitle: 'Urological Surgery in Turkey for Patients from Nigeria',
        metaDescription: 'Flights from Nigeria to Istanbul, consultations in English, payment, a typical length of stay, what to bring and follow-up after you return.',
        flightTime: 'About 6–7 hours on a direct flight',
        routes: 'Direct flights to Istanbul are available from Lagos and Abuja. Because these are long-haul services with fewer daily departures than short-haul routes, allow a day of margin either side when planning around an operation date.',
        language: 'Consultations are held in English, so no interpreter is needed. The international patient coordinator also works in English, which means written correspondence before you travel is direct.',
        payment: 'Payment is normally settled in euros or US dollars. International transfers from Nigeria can take several working days and may be subject to limits, so begin the financial arrangement well before travelling rather than on arrival.',
        sections: [
          { heading: 'Planning around a long-haul flight', body: 'The flight matters medically, not only logistically. After operations that involve a longer recovery, flying too soon raises the risk of clots in the legs. For that reason flight clearance is given as a date, not as a guess, and for longer flights we tend to be more cautious than the figures stated on the treatment pages. Book a changeable ticket if you can.' },
          { heading: 'Bring your imaging, not just the report', body: 'Many patients arrive with a printed report but without the scan itself. A written description is not enough for surgical planning: the surgeon needs to look at the images. Ask your hospital in Nigeria for the CT or MRI on a disc or as a digital file before you leave. This single step frequently saves a day and the cost of repeating the scan.' },
          { heading: 'One trip, one plan', body: 'Because the journey is long, the aim is to complete assessment and treatment within one trip wherever that is medically sound. That means sending your file in advance so that the investigations needed can be booked for the day you land, rather than discovered after you arrive. Where a condition genuinely requires staged treatment, we say so before you buy a ticket.' }
        ],
        faqs: [
          { q: 'Do I need a visa?', a: 'Visa rules vary by passport type and change from time to time, so we do not state them here. Check your own position with the official Turkish source before booking.' },
          { q: 'How long should I plan to stay?', a: 'It depends entirely on the procedure — a few days for endoscopic stone surgery, longer for radical prostate surgery because of the catheter period. The length is set after your file is reviewed, not before.' },
          { q: 'Can I be followed up by my doctor at home?', a: 'Yes, and that is the usual arrangement. Reports are written so that a doctor in Nigeria can continue the follow-up, stating what was done and what should be monitored.' }
        ]
      }
    }
  },
  {
    slug: 'ghana',
    iso: 'GH',
    locales: ['en'],
    i18n: {
      en: {
        title: 'Patients from Ghana: urological surgery in Istanbul',
        summary: 'Consultations in English and a single connection from Accra. This page sets out the practical points for patients travelling from Ghana.',
        metaTitle: 'Urological Surgery in Turkey for Patients from Ghana',
        metaDescription: 'Travel from Ghana to Istanbul, consultations in English, payment, what to bring, length of stay and follow-up after you return home.',
        flightTime: 'About 6.5–7.5 hours on a direct flight from Accra',
        routes: 'There are direct services from Accra to Istanbul, and connecting options through other hubs. Connections add several hours, so if you are travelling after an operation, choose the shortest routing available rather than the cheapest.',
        language: 'Consultations are held in English and no interpreter is required. Correspondence before and after your visit is also in English.',
        payment: 'Payment is normally settled in euros or US dollars. Check any limits your bank applies to international transactions before you travel, and tell them the dates you will be abroad.',
        sections: [
          { heading: 'Make the remote review do the work', body: 'Before deciding to travel, a remote review of your file costs you nothing but time and can change the plan entirely. Send blood tests, imaging and any pathology report. Three outcomes are possible: travel is worthwhile and the plan is clear; more investigation is needed first and can be done in Ghana; or the condition does not require the procedure you were considering. All three are useful answers.' },
          { heading: 'What to bring with you', body: 'Bring imaging on a disc or as digital files rather than photographs of reports, a list of every medicine you take with its generic name, and the details of any previous operation. If you take blood thinners, say so in your very first message — the schedule for stopping and restarting them shapes the whole operation date.' },
          { heading: 'After you return', body: 'Follow-up is carried out remotely. Reports are written in English so your doctor in Ghana can read them without translation, and they state explicitly what should be checked and when. If a warning sign requires urgent local care, the report names it so that whoever sees you can act without contacting us first.' }
        ],
        faqs: [
          { q: 'Do I need a visa?', a: 'We do not state visa rules here because they change and depend on the type of passport. Check the official Turkish source before buying a ticket.' },
          { q: 'Can a family member travel with me?', a: 'Yes. Accommodation arrangements usually include one companion; tell us in advance so a place can be reserved.' },
          { q: 'What happens if a complication develops after I get home?', a: 'Contact us first — the report describes exactly what was done, which is what a local doctor needs. For anything urgent, go to the nearest emergency department and send us the details afterwards.' }
        ]
      }
    }
  },
  {
    slug: 'senegal',
    iso: 'SN',
    locales: ['fr', 'en'],
    i18n: {
      fr: {
        title: 'Patients du Sénégal : chirurgie urologique à Istanbul',
        summary: 'Vol direct depuis Dakar et consultation en français avec interprète. Cette page présente les aspects pratiques qui vous concernent.',
        metaTitle: 'Chirurgie urologique en Turquie pour les patients du Sénégal',
        metaDescription: 'Vols du Sénégal vers Istanbul, langue de la consultation, paiement, durée de séjour, documents à apporter et suivi après le retour.',
        flightTime: 'Environ 6 à 7 heures en vol direct depuis Dakar',
        routes: 'Des vols directs relient Dakar à Istanbul, avec également des options en correspondance. Les correspondances allongent sensiblement le trajet ; après une intervention, privilégiez l’itinéraire le plus court plutôt que le moins cher.',
        language: 'La consultation médicale se tient en français, avec un interprète organisé avant le rendez-vous. La coordinatrice des patients internationaux travaille en anglais ; la correspondance écrite peut donc se faire en anglais ou en français selon ce qui vous convient.',
        payment: 'Le règlement se fait généralement en euros. Le franc CFA n’a pas cours en Turquie. Prévenez votre banque de votre voyage et vérifiez les plafonds applicables aux opérations internationales avant de partir.',
        sections: [
          { heading: 'Faire travailler l’évaluation à distance', body: 'Avant d’acheter un billet, faites examiner votre dossier à distance. Envoyez les analyses, l’imagerie et, le cas échéant, le compte rendu d’anatomopathologie. Trois réponses sont possibles : le déplacement est justifié et le plan est clair ; des examens complémentaires sont nécessaires et peuvent être faits au Sénégal ; ou l’intervention envisagée ne s’impose pas. Ces trois réponses vous font gagner du temps et de l’argent.' },
          { heading: 'Apporter les images, pas seulement le compte rendu', body: 'Beaucoup de patients arrivent avec un compte rendu imprimé mais sans l’examen lui-même. Une description écrite ne suffit pas à planifier une intervention : le chirurgien doit voir les images. Demandez à votre hôpital le scanner ou l’IRM sur disque ou sous forme de fichier numérique avant de partir ; cette seule démarche évite souvent une journée perdue et le coût d’un examen refait.' },
          { heading: 'Le vol fait partie du plan médical', body: 'Un vol long ne relève pas que de la logistique. Après certaines interventions, voyager trop tôt augmente le risque de caillots dans les jambes. L’autorisation de vol est donc donnée sous forme de date, et nous restons plus prudents pour les longs trajets que les durées indiquées sur les pages de traitement. Un billet modifiable est recommandé.' }
        ],
        faqs: [
          { q: 'Ai-je besoin d’un visa ?', a: 'Les règles varient selon le type de passeport et évoluent ; nous ne les indiquons donc pas ici. Vérifiez votre situation auprès de la source officielle turque avant de réserver.' },
          { q: 'La consultation peut-elle se faire en français ?', a: 'Oui. Un interprète est organisé avant le rendez-vous. Nous ne promettons pas une permanence francophone permanente : elle est mise en place pour votre consultation.' },
          { q: 'Qui assure le suivi après mon retour ?', a: 'Le suivi se fait à distance, et les comptes rendus sont rédigés pour qu’un médecin au Sénégal puisse poursuivre la prise en charge sans nous consulter à chaque étape.' }
        ]
      },
      en: {
        title: 'Patients from Senegal: urological surgery in Istanbul',
        summary: 'A direct flight from Dakar and a consultation in French with an interpreter. This page sets out the practical points.',
        metaTitle: 'Urological Surgery in Turkey for Patients from Senegal',
        metaDescription: 'Flights from Senegal to Istanbul, the language of the consultation, payment, length of stay, what to bring and follow-up after you return.',
        flightTime: 'About 6–7 hours on a direct flight from Dakar',
        routes: 'Direct flights connect Dakar with Istanbul, and connecting options also exist. Connections lengthen the journey considerably; after an operation, choose the shortest routing rather than the cheapest.',
        language: 'The medical consultation is held in French, with an interpreter arranged before the appointment. The international patient coordinator works in English, so written correspondence can be in either language.',
        payment: 'Payment is usually settled in euros. The CFA franc is not used in Turkey. Tell your bank you are travelling and check the limits that apply to international transactions before you leave.',
        sections: [
          { heading: 'Let the remote review do the work', body: 'Before buying a ticket, have your file reviewed remotely. Send blood tests, imaging and any pathology report. Three answers are possible: the trip is worthwhile and the plan is clear; further investigation is needed first and can be done in Senegal; or the procedure you were considering is not required. All three save you time and money.' },
          { heading: 'Bring the images, not only the report', body: 'Many patients arrive with a printed report but without the scan itself. A written description is not enough for surgical planning: the surgeon needs to see the images. Ask your hospital for the CT or MRI on a disc or as digital files before you leave; this one step often saves a lost day and the cost of a repeat scan.' },
          { heading: 'The flight is part of the medical plan', body: 'A long flight is not merely logistics. After some operations, travelling too soon raises the risk of clots in the legs. Flight clearance is therefore given as a date, and for long journeys we are more cautious than the figures stated on the treatment pages. A changeable ticket is advisable.' }
        ],
        faqs: [
          { q: 'Do I need a visa?', a: 'Rules vary with passport type and change over time, so we do not state them here. Check your position with the official Turkish source before booking.' },
          { q: 'Can the consultation be in French?', a: 'Yes. An interpreter is arranged ahead of the appointment. We do not promise permanent French-speaking cover; it is organised for your consultation.' },
          { q: 'Who follows me up after I return?', a: 'Follow-up is done remotely, and reports are written so that a doctor in Senegal can continue your care without consulting us at every step.' }
        ]
      }
    }
  }
,
  {
    slug: 'germany',
    iso: 'DE',
    locales: ['de', 'en'],
    i18n: {
      de: {
        title: 'Patientinnen und Patienten aus Deutschland: Urologische Chirurgie in Istanbul',
        summary: 'Kurze Flugzeit, Beratung auf Deutsch und oft deutlich kürzere Wartezeiten. Diese Seite erklärt, worauf es bei Ihnen ankommt.',
        metaTitle: 'Urologische Operation in der Türkei für Patienten aus Deutschland',
        metaDescription: 'Flüge aus Deutschland nach Istanbul, Beratung auf Deutsch, Zahlung, Wartezeiten, Kostenerstattung und Nachsorge nach der Rückkehr.',
        flightTime: 'Etwa 3–3,5 Stunden im Direktflug',
        routes: 'Direktflüge nach Istanbul bestehen aus nahezu allen größeren deutschen Flughäfen, darunter Frankfurt, München, Düsseldorf, Berlin, Hamburg und Stuttgart — meist mehrmals täglich. Das erleichtert es, den Rückflug nach dem Heilungsverlauf zu legen.',
        language: 'Das ärztliche Gespräch wird auf Deutsch geführt; dafür wird vor dem Termin ein Dolmetscher organisiert. Die Koordinatorin für internationale Patienten arbeitet auf Englisch.',
        payment: 'Die Abrechnung erfolgt in Euro. Informieren Sie Ihre Bank über die Reise, damit Kartenzahlungen nicht aus Sicherheitsgründen abgelehnt werden.',
        sections: [
          { heading: 'Wartezeit ist ein medizinisches Argument, kein reines Komfortargument', body: 'Viele Patientinnen und Patienten kommen, weil ein Termin erst in einigen Monaten frei ist. Bei manchen Erkrankungen ist das unproblematisch; bei anderen nicht. Ein Harnleiterstein, der die Niere staut, oder ein Tumor mit ungünstiger Biologie verträgt kein langes Warten. Wir sagen Ihnen offen, in welche Kategorie Ihr Befund fällt — auch dann, wenn Abwarten die richtige Antwort ist.' },
          { heading: 'Kostenerstattung und Unterlagen', body: 'Eine Erstattung durch gesetzliche oder private Kassen ist im Voraus zu klären und hängt von Ihrem Versicherungsvertrag ab; wir können dazu keine Zusage machen. Was wir leisten können: eine Rechnung mit nachvollziehbarer Leistungsaufstellung sowie Operations- und Befundberichte. Klären Sie vor der Reise mit Ihrer Kasse, welche Unterlagen sie verlangt, damit diese vor Ihrer Abreise ausgestellt werden können.' },
          { heading: 'Nachsorge in Deutschland', body: 'Die Nachsorge übernimmt in der Regel Ihre Urologin oder Ihr Urologe vor Ort. Die Berichte werden deshalb so geschrieben, dass sie ohne Rückfragen weiterbehandeln können: was genau gemacht wurde, welche Werte wann zu kontrollieren sind und welche Warnzeichen sofortiges Handeln erfordern. Für Routinekontrollen bitten wir Sie nicht zurückzufliegen.' }
        ],
        faqs: [
          { q: 'Brauche ich ein Visum?', a: 'Die Regeln hängen von der Art des Reisepasses ab und ändern sich; wir nennen sie hier deshalb nicht. Prüfen Sie Ihre Lage vor der Buchung bei der offiziellen türkischen Quelle.' },
          { q: 'Übernimmt meine Krankenkasse die Kosten?', a: 'Das richtet sich nach Ihrem Vertrag und ist vorab mit der Kasse zu klären. Wir stellen die Unterlagen bereit, können aber keine Erstattung zusagen.' },
          { q: 'Wie schnell darf ich zurückfliegen?', a: 'Das hängt vom Eingriff ab und steht auf der jeweiligen Behandlungsseite. Die Freigabe wird als Datum erteilt, nicht geschätzt — ein zu früher Flug erhöht das Thromboserisiko.' }
        ]
      },
      en: {
        title: 'Patients from Germany: urological surgery in Istanbul',
        summary: 'A short flight, consultation in German and often much shorter waiting times. This page explains what matters in your case.',
        metaTitle: 'Urological Surgery in Turkey for Patients from Germany',
        metaDescription: 'Flights from Germany to Istanbul, consultation in German, payment, waiting times, reimbursement and follow-up after you return.',
        flightTime: 'About 3–3.5 hours on a direct flight',
        routes: 'Direct flights to Istanbul run from nearly all major German airports, including Frankfurt, Munich, Düsseldorf, Berlin, Hamburg and Stuttgart, usually several times a day. That makes it easier to set the return flight according to how recovery goes.',
        language: 'The medical consultation is held in German, with an interpreter arranged before the appointment. The international patient coordinator works in English.',
        payment: 'Billing is in euros. Tell your bank about the trip so that card payments are not declined for security reasons.',
        sections: [
          { heading: 'Waiting time is a medical argument, not just a convenience one', body: 'Many patients come because the next appointment at home is months away. For some conditions that is of no consequence; for others it is. A ureteric stone obstructing the kidney, or a tumour with unfavourable biology, does not tolerate a long wait. We will tell you plainly which category your findings fall into — including when waiting is the right answer.' },
          { heading: 'Reimbursement and paperwork', body: 'Reimbursement by a statutory or private insurer must be settled in advance and depends on your contract; we cannot give an undertaking about it. What we can provide is an invoice with an itemised breakdown together with operation and pathology reports. Before travelling, ask your insurer which documents they require so that these can be issued before you leave.' },
          { heading: 'Follow-up in Germany', body: 'Follow-up is normally carried out by your urologist at home. Reports are therefore written so that they can continue without having to ask: exactly what was done, which values to check and when, and which warning signs require immediate action. We do not ask you to fly back for routine checks.' }
        ],
        faqs: [
          { q: 'Do I need a visa?', a: 'Rules depend on the type of passport and change, so we do not state them here. Check your position with the official Turkish source before booking.' },
          { q: 'Will my insurer cover the cost?', a: 'That depends on your contract and must be settled with the insurer in advance. We supply the paperwork but cannot promise reimbursement.' },
          { q: 'How soon can I fly back?', a: 'It depends on the procedure and is stated on each treatment page. Clearance is given as a date rather than estimated — flying too soon raises the risk of clots.' }
        ]
      }
    }
  },
  {
    slug: 'netherlands',
    iso: 'NL',
    locales: ['en'],
    i18n: {
      en: {
        title: 'Patients from the Netherlands: urological surgery in Istanbul',
        summary: 'A short flight from Amsterdam and consultations in English. This page covers waiting times, paperwork and follow-up at home.',
        metaTitle: 'Urological Surgery in Turkey for Patients from the Netherlands',
        metaDescription: 'Flights from the Netherlands to Istanbul, consultations in English, payment, reimbursement paperwork and follow-up after you return.',
        flightTime: 'About 3.5 hours on a direct flight',
        routes: 'Direct flights to Istanbul run several times a day from Amsterdam, with services from some regional airports as well. Frequent departures make it practical to buy a changeable ticket and set the return once recovery is clear.',
        language: 'Consultations are held in English and no interpreter is required. Written correspondence before and after your visit is also in English.',
        payment: 'Billing is in euros. Tell your bank about the trip so a card payment is not declined by security checks.',
        sections: [
          { heading: 'Bring your referral letter and your own records', body: 'Patients from the Netherlands usually arrive with a well-documented file, which is an advantage: the more complete the record, the fewer investigations need repeating. Bring the referral letter, previous imaging on disc or as digital files, and the list of your current medication with generic names. If you take anticoagulants, mention this in your first message, because the schedule for pausing them shapes the operation date.' },
          { heading: 'Reimbursement must be settled beforehand', body: 'Whether treatment abroad is reimbursed depends on your policy and often on prior authorisation. This has to be arranged with your insurer before you travel; we cannot give any undertaking about it. We provide an itemised invoice, the operation report and the pathology report in English, which is normally what insurers ask for. Check the exact list with your insurer in advance.' },
          { heading: 'Follow-up at home', body: 'Your own urologist normally takes over follow-up. Reports therefore state plainly what was done, which values to monitor and at what intervals, and which warning signs require immediate local care. We do not ask you to return for a routine check that can be done in the Netherlands.' }
        ],
        faqs: [
          { q: 'Do I need a visa?', a: 'Rules depend on the type of passport and change over time, so we do not state them here. Check the official Turkish source before booking.' },
          { q: 'Will my insurance reimburse this?', a: 'That depends on your policy and often requires prior authorisation. Settle it with your insurer before travelling; we supply the documentation but cannot promise reimbursement.' },
          { q: 'Can I get a second opinion before deciding to travel?', a: 'Yes. A remote review of your imaging and reports can establish whether travelling is worthwhile at all, and sometimes concludes that the procedure you were considering is not needed.' }
        ]
      }
    }
  },
  {
    slug: 'united-kingdom',
    iso: 'GB',
    locales: ['en'],
    i18n: {
      en: {
        title: 'Patients from the United Kingdom: urological surgery in Istanbul',
        summary: 'Direct flights from several UK airports and consultations in English. This page covers waiting lists, records and follow-up on the NHS.',
        metaTitle: 'Urological Surgery in Turkey for Patients from the UK',
        metaDescription: 'Flights from the UK to Istanbul, consultations in English, payment, what records to bring, and how follow-up works once you are home.',
        flightTime: 'About 4 hours on a direct flight from London',
        routes: 'Direct flights to Istanbul run from London, Manchester, Birmingham and Edinburgh among others, several times a day from the larger airports. That makes a changeable return ticket practical.',
        language: 'Consultations are held in English and no interpreter is needed. Correspondence before and after your visit is also in English.',
        payment: 'Billing is normally in euros. Tell your bank about the trip so a card payment is not declined, and check the exchange rate your card applies to foreign currency transactions.',
        sections: [
          { heading: 'Waiting lists: when waiting is safe and when it is not', body: 'Most UK patients come because of waiting times. The honest answer is that waiting is harmless for some conditions and harmful for others. A stone obstructing a kidney, deteriorating kidney function, or a cancer with unfavourable features will not wait comfortably; mild symptoms of prostate enlargement generally will. We tell you which applies to your findings, including when the right advice is to stay on the list.' },
          { heading: 'Bring your records, including the imaging itself', body: 'Ask your GP or hospital for copies of your results and, importantly, for the scans themselves on a disc or as digital files rather than only the radiologist’s report. UK patients can usually obtain these on request. Having the actual images avoids repeating a scan and gives the surgeon what a written description cannot.' },
          { heading: 'Going back to NHS care afterwards', body: 'Follow-up after you return is normally shared between us remotely and your GP or local urology department. For that to work, the paperwork has to be usable: you are given the operation report, the pathology report and a clear statement of what should be monitored and when. Give these to your GP on your return rather than keeping them to yourself, so your record is complete if something arises later.' }
        ],
        faqs: [
          { q: 'Do I need a visa?', a: 'Rules depend on the type of passport and change from time to time, so we do not state them here. Check your position with the official Turkish source before booking.' },
          { q: 'What happens if there is a complication once I am home?', a: 'Contact us first; the reports describe exactly what was done, which is what a local clinician needs. For anything urgent, use NHS emergency services and send us the details afterwards.' },
          { q: 'Can I have a remote consultation before deciding?', a: 'Yes. Your imaging and reports can be reviewed before you commit to travelling, and the review sometimes concludes that the procedure is not required.' }
        ]
      }
    }
  }
,
  {
    slug: 'russia',
    iso: 'RU',
    locales: ['ru', 'en'],
    i18n: {
      ru: {
        title: 'Пациенты из России: урологическая хирургия в Стамбуле',
        summary: 'Прямые рейсы из многих городов и консультация на русском через переводчика. Здесь — то, что касается именно вас.',
        metaTitle: 'Урологическая операция в Турции для пациентов из России',
        metaDescription: 'Перелёты из России в Стамбул, язык консультации, оплата, срок пребывания, что взять с собой и наблюдение после возвращения.',
        flightTime: 'Около 3–4,5 часа прямым рейсом в зависимости от города вылета',
        routes: 'Прямые рейсы в Стамбул выполняются из Москвы, Санкт-Петербурга, Казани, Екатеринбурга и ряда других городов. Расписание меняется, поэтому уточните рейс у авиакомпании до назначения даты операции.',
        language: 'Консультация проводится на русском языке, переводчик организуется до приёма. Координатор международных пациентов работает на английском.',
        payment: 'Расчёт обычно в евро или долларах. Международные карты и переводы из России могут работать с ограничениями, поэтому решите вопрос оплаты заранее, а не в день госпитализации. Уточните у нас доступные варианты до поездки.',
        sections: [
          { heading: 'Оплату решайте до вылета, а не на месте', body: 'Это самый частый источник трудностей у пациентов из России, и он не медицинский. Возможности международных платежей менялись в последние годы, и то, что работало полгода назад, может не работать сейчас. Напишите нам заранее и уточните, какой способ расчёта действует на момент вашей поездки. Решать это в день госпитализации — худший вариант.' },
          { heading: 'Привезите снимки, а не только заключение', body: 'Пациенты из России обычно приезжают с хорошо оформленными документами, и это преимущество. Но заключение рентгенолога не заменяет сами снимки: для планирования операции хирургу нужно смотреть изображения. Возьмите компьютерную томографию или МРТ на диске либо в виде файлов. Это часто экономит день и стоимость повторного исследования.' },
          { heading: 'Наблюдение после возвращения', body: 'Наблюдение ведётся дистанционно: вы присылаете результаты анализов, их оценивают и назначают следующий контроль. Заключения пишутся так, чтобы врач в России мог продолжить ведение без обращения к нам на каждом шаге: что именно выполнено, что контролировать и в какие сроки. Ради рутинного контроля прилетать не нужно.' }
        ],
        faqs: [
          { q: 'Нужна ли виза?', a: 'Правила зависят от типа паспорта и время от времени меняются, поэтому мы их здесь не приводим. Проверьте свою ситуацию в официальном турецком источнике до бронирования.' },
          { q: 'Как оплатить лечение?', a: 'Уточните это у нас до поездки: доступные способы расчёта меняются. Планируйте оплату заранее, а не в день поступления в больницу.' },
          { q: 'Будут ли документы на русском языке?', a: 'Медицинские заключения готовятся на английском — это общий язык между врачами, — а их содержание разбирается с вами на русском на приёме. Если нужен перевод, скажите до выписки.' }
        ]
      },
      en: {
        title: 'Patients from Russia: urological surgery in Istanbul',
        summary: 'Direct flights from many cities and a consultation in Russian through an interpreter. This page covers what applies to you.',
        metaTitle: 'Urological Surgery in Turkey for Patients from Russia',
        metaDescription: 'Flights from Russia to Istanbul, the language of the consultation, payment, length of stay, what to bring and follow-up after you return.',
        flightTime: 'About 3–4.5 hours on a direct flight, depending on your departure city',
        routes: 'Direct flights to Istanbul operate from Moscow, St Petersburg, Kazan, Yekaterinburg and a number of other cities. Schedules change, so confirm your flight with the airline before an operation date is set.',
        language: 'The consultation is held in Russian, with an interpreter arranged before the appointment. The international patient coordinator works in English.',
        payment: 'Settlement is usually in euros or US dollars. International cards and transfers from Russia may be subject to restrictions, so resolve payment in advance rather than on the day of admission. Ask us which options apply at the time of your trip.',
        sections: [
          { heading: 'Settle payment before you fly, not on arrival', body: 'This is the most common source of difficulty for patients from Russia, and it is not a medical one. International payment options have changed in recent years, and what worked six months ago may not work now. Write to us beforehand and confirm which method is available at the time of your trip. Leaving it to the day of admission is the worst option.' },
          { heading: 'Bring the images, not only the report', body: 'Patients from Russia usually arrive with well-organised documentation, which is an advantage. But a radiologist’s report does not replace the images themselves: to plan an operation the surgeon needs to look at them. Bring the CT or MRI on a disc or as files. This often saves a day and the cost of a repeat scan.' },
          { heading: 'Follow-up after you return', body: 'Follow-up is carried out remotely: you send in test results, they are reviewed and the next check is scheduled. Reports are written so that a doctor in Russia can continue your care without consulting us at every step — what exactly was done, what to monitor and at what intervals. There is no need to fly back for a routine check.' }
        ],
        faqs: [
          { q: 'Do I need a visa?', a: 'Rules depend on the type of passport and change from time to time, so we do not state them here. Check your position with the official Turkish source before booking.' },
          { q: 'How do I pay for treatment?', a: 'Confirm this with us before travelling, as the available methods change. Plan payment in advance rather than on the day of admission.' },
          { q: 'Will the documents be in Russian?', a: 'Medical reports are prepared in English, the common language between doctors, and their content is gone through with you in Russian at the appointment. If you need a translation, say so before discharge.' }
        ]
      }
    }
  },
  {
    slug: 'azerbaijan',
    iso: 'AZ',
    locales: ['ru', 'en'],
    i18n: {
      ru: {
        title: 'Пациенты из Азербайджана: урологическая хирургия в Стамбуле',
        summary: 'Короткий перелёт из Баку и несколько рейсов в день. Это позволяет планировать поездку гибко.',
        metaTitle: 'Урологическая операция в Турции для пациентов из Азербайджана',
        metaDescription: 'Перелёты из Азербайджана в Стамбул, язык консультации, оплата, короткое пребывание и наблюдение после возвращения.',
        flightTime: 'Около 3 часов прямым рейсом из Баку',
        routes: 'Прямые рейсы Баку — Стамбул выполняются несколько раз в день. Частое сообщение позволяет взять билет с возможностью изменения и назначить дату возвращения уже по ходу восстановления.',
        language: 'Консультация может проходить на русском или на турецком — многие пациенты из Азербайджана понимают турецкий без переводчика. Скажите заранее, что вам удобнее.',
        payment: 'Расчёт в евро, долларах или турецких лирах. Предупредите банк о поездке, чтобы операция по карте не была отклонена автоматически.',
        sections: [
          { heading: 'Близость меняет план поездки', body: 'Трёхчасовой перелёт означает, что не нужно бронировать длительное пребывание заранее. Разумнее приехать на день обследования, получить результаты и только затем назначить дату операции — иногда вторым, отдельным приездом. Для пациентов из более далёких стран такой вариант неудобен, для вас он вполне реален.' },
          { heading: 'Повторные операции и ранее начатое лечение', body: 'Если вам уже делали операцию, принесите выписку. Повторное вмешательство отличается от первого: рубцовая ткань меняет анатомию и риски. Если документа нет, сообщите хотя бы название больницы, дату и вид доступа — эти сведения действительно меняют план.' },
          { heading: 'Наблюдение после возвращения', body: 'Наблюдение ведётся дистанционно, а заключения пишутся так, чтобы врач в Азербайджане мог продолжить ведение. Благодаря короткому перелёту приехать на очный контроль при необходимости тоже несложно — но ради рутинной проверки мы об этом не просим.' }
        ],
        faqs: [
          { q: 'Нужна ли виза?', a: 'Правила зависят от типа паспорта и меняются; мы их здесь не приводим. Проверьте свою ситуацию в официальном турецком источнике.' },
          { q: 'Можно ли говорить по-турецки?', a: 'Да. Многим пациентам из Азербайджана переводчик не нужен. Скажите заранее, на каком языке вам удобнее вести приём.' },
          { q: 'Можно ли приехать дважды — на обследование и на операцию?', a: 'Да, и при коротком перелёте это часто разумнее, чем долго ждать на месте между этапами.' }
        ]
      },
      en: {
        title: 'Patients from Azerbaijan: urological surgery in Istanbul',
        summary: 'A short flight from Baku with several departures a day, which makes planning flexible.',
        metaTitle: 'Urological Surgery in Turkey for Patients from Azerbaijan',
        metaDescription: 'Flights from Azerbaijan to Istanbul, the language of the consultation, payment, short stays and follow-up after you return.',
        flightTime: 'About 3 hours on a direct flight from Baku',
        routes: 'Direct Baku–Istanbul flights operate several times a day. Frequent services make it practical to buy a changeable ticket and set the return date as recovery progresses.',
        language: 'The consultation can be held in Russian or in Turkish — many patients from Azerbaijan follow Turkish without an interpreter. Tell us in advance which you prefer.',
        payment: 'Settlement in euros, US dollars or Turkish lira. Tell your bank about the trip so a card transaction is not declined automatically.',
        sections: [
          { heading: 'Being close changes how the trip is planned', body: 'A three-hour flight means you do not have to book a long stay in advance. It is often more sensible to come for an assessment day, get the results, and only then set an operation date — sometimes as a second, separate trip. For patients from further away that is impractical; for you it is entirely realistic.' },
          { heading: 'Repeat operations and treatment already started', body: 'If you have had an operation before, bring the discharge summary. A second procedure is not the same as the first: scar tissue changes the anatomy and the risks. If you do not have the document, at least tell us the hospital, the date and the type of approach — that information genuinely changes the plan.' },
          { heading: 'Follow-up after you return', body: 'Follow-up is carried out remotely and reports are written so that a doctor in Azerbaijan can continue your care. With such a short flight, coming in person for a check is also easy if needed — but we do not ask you to do so for a routine review.' }
        ],
        faqs: [
          { q: 'Do I need a visa?', a: 'Rules depend on the type of passport and change; we do not state them here. Check your position with the official Turkish source.' },
          { q: 'Can the consultation be in Turkish?', a: 'Yes. Many patients from Azerbaijan need no interpreter. Tell us in advance which language suits you.' },
          { q: 'Can I come twice — once for assessment and once for surgery?', a: 'Yes, and with a short flight that is often more sensible than waiting on site between the two stages.' }
        ]
      }
    }
  },
  {
    slug: 'kazakhstan',
    iso: 'KZ',
    locales: ['ru', 'en'],
    i18n: {
      ru: {
        title: 'Пациенты из Казахстана: урологическая хирургия в Стамбуле',
        summary: 'Прямые рейсы из Алматы и Астаны, консультация на русском. Здесь — практическая сторона поездки.',
        metaTitle: 'Урологическая операция в Турции для пациентов из Казахстана',
        metaDescription: 'Перелёты из Казахстана в Стамбул, язык консультации, оплата, срок пребывания, что взять с собой и наблюдение после возвращения.',
        flightTime: 'Около 5,5–6,5 часа прямым рейсом',
        routes: 'Прямые рейсы в Стамбул выполняются из Алматы, Астаны и ряда других городов, но реже, чем на коротких направлениях. Планируя дату операции, закладывайте запас в один день с каждой стороны.',
        language: 'Консультация проводится на русском языке, переводчик организуется до приёма. Координатор международных пациентов работает на английском.',
        payment: 'Расчёт обычно в евро или долларах. Международные переводы могут занять несколько рабочих дней, поэтому начинайте финансовые вопросы заранее.',
        sections: [
          { heading: 'Одна поездка — один план', body: 'Из-за длительности перелёта цель — по возможности завершить обследование и лечение за одну поездку, если это оправдано с медицинской точки зрения. Для этого пришлите документы заранее, чтобы нужные исследования были записаны на день прилёта, а не выяснялись уже на месте. Если состояние действительно требует поэтапного лечения, мы скажем об этом до покупки билета.' },
          { heading: 'Перелёт — часть медицинского плана', body: 'Длительный перелёт имеет медицинское значение. После ряда операций слишком ранний полёт повышает риск тромбоза вен ног. Поэтому разрешение на перелёт даётся как дата, а для дальних маршрутов мы осторожнее, чем указано на страницах о лечении. Билет с возможностью изменения здесь особенно полезен.' },
          { heading: 'Наблюдение после возвращения', body: 'Наблюдение ведётся дистанционно. Заключения пишутся так, чтобы врач в Казахстане мог продолжить ведение: что выполнено, что контролировать и в какие сроки, какие признаки требуют немедленного обращения на месте.' }
        ],
        faqs: [
          { q: 'Нужна ли виза?', a: 'Правила зависят от типа паспорта и меняются, поэтому мы их здесь не приводим. Проверьте свою ситуацию в официальном турецком источнике до бронирования.' },
          { q: 'Сколько планировать пребывание?', a: 'Это зависит от вмешательства: несколько дней при эндоскопическом лечении камней, дольше при радикальной операции на простате из-за катетера. Срок определяют после разбора документов.' },
          { q: 'Можно ли сначала получить заключение дистанционно?', a: 'Да, и при дальнем перелёте это разумно. Разбор снимков и заключений показывает, оправдана ли поездка вообще.' }
        ]
      },
      en: {
        title: 'Patients from Kazakhstan: urological surgery in Istanbul',
        summary: 'Direct flights from Almaty and Astana, with the consultation held in Russian. This page covers the practical side.',
        metaTitle: 'Urological Surgery in Turkey for Patients from Kazakhstan',
        metaDescription: 'Flights from Kazakhstan to Istanbul, the language of the consultation, payment, length of stay, what to bring and follow-up after you return.',
        flightTime: 'About 5.5–6.5 hours on a direct flight',
        routes: 'Direct flights to Istanbul operate from Almaty, Astana and several other cities, though less frequently than on short-haul routes. When planning around an operation date, allow a day of margin either side.',
        language: 'The consultation is held in Russian, with an interpreter arranged before the appointment. The international patient coordinator works in English.',
        payment: 'Settlement is usually in euros or US dollars. International transfers can take several working days, so start the financial arrangements early.',
        sections: [
          { heading: 'One trip, one plan', body: 'Because of the length of the flight, the aim is to complete assessment and treatment in a single trip wherever that is medically sound. Send your file in advance so that the necessary investigations can be booked for the day you land, rather than discovered after you arrive. If your condition genuinely requires staged treatment, we will say so before you buy a ticket.' },
          { heading: 'The flight is part of the medical plan', body: 'A long flight has medical significance. After a number of operations, flying too soon raises the risk of clots in the leg veins. Flight clearance is therefore given as a date, and for long routes we are more cautious than the figures stated on the treatment pages. A changeable ticket is especially useful here.' },
          { heading: 'Follow-up after you return', body: 'Follow-up is carried out remotely. Reports are written so that a doctor in Kazakhstan can continue your care: what was done, what to monitor and at what intervals, and which signs call for immediate local attention.' }
        ],
        faqs: [
          { q: 'Do I need a visa?', a: 'Rules depend on the type of passport and change, so we do not state them here. Check your position with the official Turkish source before booking.' },
          { q: 'How long should I plan to stay?', a: 'It depends on the procedure: a few days for endoscopic stone treatment, longer for radical prostate surgery because of the catheter. The length is set after your file is reviewed.' },
          { q: 'Can I get an opinion remotely first?', a: 'Yes, and with a long flight that is sensible. Reviewing your images and reports establishes whether the trip is worthwhile at all.' }
        ]
      }
    }
  }
];

/** Belirli bir dilde yayımlanacak ülkeler. tr için her zaman boş. */
export function countriesForLocale(locale: Locale): Country[] {
  if (locale === 'tr') return [];
  return countries.filter((c) => c.locales.includes(locale as Exclude<Locale, 'tr'>) && c.i18n[locale]);
}

/** Slug ve dile göre tek ülke; o dilde yayımlanmıyorsa undefined. */
export function getCountry(slug: string, locale: Locale): Country | undefined {
  if (locale === 'tr') return undefined;
  const c = countries.find((x) => x.slug === slug);
  if (!c) return undefined;
  if (!c.locales.includes(locale as Exclude<Locale, 'tr'>) || !c.i18n[locale]) return undefined;
  return c;
}
