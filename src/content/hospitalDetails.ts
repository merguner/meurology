import type { Locale } from '@/i18n/routing';

/**
 * HASTANE SAYFASI — GENİŞLETİLMİŞ İÇERİK
 * ------------------------------------------------------------------
 * Sayfa daha önce 113 kelimeydi ve hastanın asıl merak ettiklerine
 * (ameliyathane altyapısı, hangi teknoloji, uluslararası hasta birimi,
 * ulaşım) cevap vermiyordu.
 *
 * Bu dosyada DOĞRULANMAMIŞ hiçbir sayı yoktur: mesafe, süre, yatak
 * sayısı, ameliyathane sayısı gibi veriler bilinçli olarak yazılmadı.
 * Cihaz adları (da Vinci, Quanta) content/trust.ts'te doğrulanmış
 * bilgiden gelir.
 *
 * TODO(Dr. Ergün): hangi cihazın hangi merkezde bulunduğu ayrı ayrı
 * teyit edilirse bu metin merkez bazına ayrılabilir.
 */

export interface HospitalSection {
  title: string;
  body: string[];
}

export interface HospitalDetailContent {
  sections: HospitalSection[];
  /** Hangi merkezde ameliyat olunacağına dair dürüst not. */
  choiceNote: string;
}

export const hospitalDetails: Partial<Record<Locale, HospitalDetailContent>> = {
  tr: {
    sections: [
      {
        title: 'Ameliyathane ve yoğun bakım altyapısı',
        body: [
          'Her iki merkez de tam teşekküllü özel hastanedir: ameliyathaneler, anestezi ekibi, görüntüleme, laboratuvar ve yoğun bakım aynı bina içindedir. Ürolojik cerrahide bu bütünlük, ameliyat günü ortaya çıkabilecek bir ihtiyacın — ek görüntüleme, kan ürünü, yoğun bakım yatışı — hastayı başka bir kuruma taşımadan karşılanabilmesi anlamına gelir.',
          'Ameliyat sonrası hastaların büyük bölümü doğrudan servis katına alınır. Yoğun bakım yatışı rutin değildir; yalnızca eşlik eden hastalıklar veya ameliyatın seyri gerektirdiğinde planlanır. Böyle bir ihtiyaç doğarsa transfer hastane içinde yapılır.',
          'Anestezi değerlendirmesi ameliyattan önce hastanede yüz yüze yapılır. Kullandığınız ilaçların tam listesini — özellikle kan sulandırıcıları — bu görüşmeye getirin. İlaç yönetimi her hastada ayrı planlanır; hiçbir ilacı kendi kararınızla kesmeyin.'
        ]
      },
      {
        title: 'Cerrahi teknoloji',
        body: [
          'Robotik ameliyatlarda da Vinci platformu, prostat enükleasyonunda (ThuLEP ve HoLEP) Quanta lazer platformu kullanılır. Taş cerrahisinde kullanılan fleksibl üreteroskopi ve perkütan girişim ekipmanı da aynı ameliyathane altyapısının parçasıdır.',
          'Teknoloji tek başına sonuç üretmez. Hangi sistemin kullanılacağı hastalığın türüne, organın durumuna ve hastanın anatomisine göre belirlenir; aynı tanıda iki hastaya farklı yöntem önerilmesi olağandır. Cihaz adı bir üstünlük iddiası değil, yöntemin nasıl uygulandığını açıklayan bir bilgidir.',
          'Doku çıkarılan ameliyatlarda çıkan materyal patoloji bölümüne gönderilir. Bu, beklenmedik bir bulgunun atlanmamasını sağlar; dokunun buharlaştırıldığı yöntemlerde bu inceleme mümkün olmaz.'
        ]
      },
      {
        title: 'Uluslararası hasta birimi',
        body: [
          'Her iki hastanede de uluslararası hasta birimi bulunur. Bu birim kabul işlemleri, hastane içi yönlendirme, tercüman desteği ve taburculuk belgelerinin hazırlanmasıyla ilgilenir. Kliniğimizin koordinatörü süreci bu birimle birlikte yürütür.',
          'Görüşme öncesinde ihtiyacınız olan dilde tercüman ayarlanır. Tıbbi kararların konuşulduğu bir görüşmede tercümanın hazır bulunması, anlaşıldığı sanılan ama aslında anlaşılmayan noktaların önüne geçer.',
          'Taburculukta epikriz, doku çıkarıldıysa patoloji sonucu ve ilaç reçeteniz birlikte teslim edilir. Ülkenize döndükten sonra sizi takip edecek hekime iletmek üzere bu belgeleri saklayın.'
        ]
      },
      {
        title: 'Ulaşım ve konaklama',
        body: [
          'Her iki hastane de İstanbul’un Avrupa yakasındadır. Havalimanı–hastane–otel transferleri klinik tarafından düzenlenir. Yol süresi günün saatine ve trafiğe göre değişir; randevu saatleri bu pay hesaba katılarak verilir.',
          'Yurt dışından gelen hastalarda konaklama, hastaneye yürüme veya kısa araç mesafesindeki otellerde planlanır. Bir refakatçinin konaklaması da aynı planın parçasıdır.',
          'Dönüş uçuşunuzu sonda alımının ve kontrol muayenesinin ERTESİ gününe planlamayın. Az sayıda hastada sondanın geçici olarak yeniden takılması gerekir; bu, hastane yakınındayken kolayca çözülen, uçakta veya başka bir ülkede ise sorun olan bir durumdur.'
        ]
      }
    ],
    choiceNote:
      'Hangi merkezde ameliyat olacağınız; uygulanacak işleme, ameliyathane programına ve varsa eşlik eden hastalıklarınıza göre belirlenir. Bu karar planlama aşamasında size yazılı olarak bildirilir.'
  },
  en: {
    sections: [
      {
        title: 'Operating theatres and intensive care',
        body: [
          'Both are full-service private hospitals: operating theatres, the anaesthetic team, imaging, laboratory and intensive care are all under one roof. In urological surgery that matters, because anything that may be needed on the day — further imaging, blood products, an intensive care bed — can be arranged without moving the patient to another institution.',
          'Most patients go straight to a ward bed after surgery. An intensive care stay is not routine; it is planned only where co-existing illness or the course of the operation calls for it. If that need arises, the transfer happens within the hospital.',
          'The anaesthetic assessment is carried out face to face in the hospital before surgery. Bring the complete list of your medication to that appointment, particularly blood thinners. Medication is managed individually for each patient; never stop a drug on your own initiative.'
        ]
      },
      {
        title: 'Surgical technology',
        body: [
          'Robotic operations use the da Vinci platform; prostate enucleation (ThuLEP and HoLEP) uses the Quanta laser platform. The flexible ureteroscopy and percutaneous equipment used in stone surgery is part of the same theatre infrastructure.',
          'Technology alone does not produce outcomes. Which system is used depends on the condition, the state of the organ and the patient’s anatomy; it is entirely normal for two patients with the same diagnosis to be offered different methods. The name of a device is not a claim of superiority — it simply explains how the procedure is carried out.',
          'Where tissue is removed, it is sent for pathology. That is what keeps an unexpected finding from being missed; with methods that vaporise tissue, no such examination is possible.'
        ]
      },
      {
        title: 'International patient unit',
        body: [
          'Both hospitals have an international patient unit. It handles admission, directions within the hospital, interpreting support and the preparation of discharge documents. Our clinic’s coordinator works alongside that unit.',
          'An interpreter is arranged in the language you need before your consultation. Where medical decisions are being discussed, having an interpreter present prevents the points that seem understood but are not.',
          'At discharge you receive your discharge summary, the pathology report if tissue was removed, and your prescriptions together. Keep these documents to pass to the doctor who will follow you up at home.'
        ]
      },
      {
        title: 'Getting there and accommodation',
        body: [
          'Both hospitals are on the European side of Istanbul. Airport–hospital–hotel transfers are arranged by the clinic. Journey times vary with the hour and the traffic, and appointment times are set with that margin in mind.',
          'For patients travelling from abroad, accommodation is arranged in hotels within walking or a short drive of the hospital. Accommodation for one companion is part of the same arrangement.',
          'Do not book your return flight for the day after catheter removal and review. A small number of patients need the catheter replaced temporarily; that is easily dealt with near the hospital, and a genuine problem on an aircraft or in another country.'
        ]
      }
    ],
    choiceNote:
      'Which hospital your operation takes place in depends on the procedure, the theatre schedule and any co-existing conditions. You are told this in writing during planning.'
  },
  ar: {
    sections: [
      {
        title: 'غرف العمليات والعناية المركزة',
        body: [
          'كلا المركزين مستشفى خاص متكامل الخدمات: غرف العمليات وفريق التخدير والتصوير والمختبر والعناية المركزة في المبنى نفسه. ولهذا أثره في جراحة المسالك البولية، إذ يمكن تأمين ما قد يلزم يوم العملية — تصوير إضافي أو مشتقات دم أو سرير عناية مركزة — من دون نقل المريض إلى مؤسسة أخرى.',
          'ينتقل معظم المرضى بعد العملية إلى غرفة القسم مباشرة. والإقامة في العناية المركزة ليست إجراءً معتادًا؛ فهي تُخطَّط فقط عند وجود أمراض مرافقة أو إذا اقتضى سير العملية ذلك. وإن لزم الأمر فالنقل يتم داخل المستشفى نفسه.',
          'يُجرى تقييم التخدير وجهًا لوجه في المستشفى قبل العملية. أحضر معك قائمة كاملة بأدويتك، ولا سيما مميعات الدم. وتُخطَّط الأدوية لكل مريض على حدة؛ ولا توقف أي دواء من تلقاء نفسك.'
        ]
      },
      {
        title: 'التقنيات الجراحية',
        body: [
          'تُجرى العمليات الروبوتية بمنصّة da Vinci، ويُجرى استئصال البروستاتا (ThuLEP وHoLEP) بمنصّة الليزر Quanta. كما أن أدوات تنظير الحالب المرن والتدخل عبر الجلد المستخدمة في جراحة الحصى جزء من البنية ذاتها.',
          'التقنية وحدها لا تصنع النتيجة. فاختيار النظام يتحدد بنوع المرض وحالة العضو وتشريح المريض؛ ومن المعتاد أن يُقترح على مريضين بالتشخيص نفسه أسلوبان مختلفان. واسم الجهاز ليس ادعاء تفوّق، بل بيان لكيفية إجراء العملية.',
          'وحين يُزال نسيج يُرسَل إلى قسم علم الأمراض. وهذا ما يمنع تفويت نتيجة غير متوقعة؛ أما في الطرق التي تبخّر النسيج فهذا الفحص غير ممكن.'
        ]
      },
      {
        title: 'وحدة المرضى الدوليين',
        body: [
          'في كلا المستشفيين وحدة للمرضى الدوليين تتولى إجراءات القبول والتوجيه داخل المستشفى ودعم الترجمة وإعداد وثائق الخروج. ويعمل منسّق عيادتنا مع هذه الوحدة.',
          'يُرتَّب مترجم باللغة التي تحتاجها قبل المقابلة. وحين تُناقَش قرارات طبية فإن وجود المترجم يحول دون النقاط التي يُظَن أنها فُهمت وهي لم تُفهَم.',
          'وعند الخروج تُسلَّم إليك معًا: الخلاصة الطبية، ونتيجة الفحص المرضي إن أُزيل نسيج، ووصفاتك الدوائية. احتفظ بهذه الوثائق لتسليمها إلى الطبيب الذي سيتابعك في بلدك.'
        ]
      },
      {
        title: 'الوصول والإقامة',
        body: [
          'يقع المستشفيان في الجانب الأوروبي من إسطنبول. وتتولى العيادة ترتيب التنقلات بين المطار والمستشفى والفندق. ويتغير زمن الطريق بحسب الساعة وحركة المرور، ولذلك تُحدَّد مواعيد المراجعة مع احتساب هذا الهامش.',
          'وللمرضى القادمين من الخارج تُخطَّط الإقامة في فنادق على مسافة مشي أو مسافة قصيرة بالسيارة من المستشفى. وإقامة مرافق واحد جزء من الترتيب نفسه.',
          'لا تحجز رحلة العودة في اليوم التالي لنزع القسطرة والمراجعة. فقلة من المرضى تحتاج إعادة القسطرة مؤقتًا؛ وهذا يُحَل بسهولة قرب المستشفى، لكنه مشكلة حقيقية في الطائرة أو في بلد آخر.'
        ]
      }
    ],
    choiceNote:
      'يتحدد المستشفى الذي ستُجرى فيه عمليتك بحسب الإجراء وبرنامج غرفة العمليات والأمراض المرافقة إن وُجدت. ويُبلَّغ إليك هذا القرار كتابةً في مرحلة التخطيط.'
  }
};

export function resolveHospitalDetails(locale: Locale): HospitalDetailContent {
  return hospitalDetails[locale] ?? hospitalDetails.en!;
}
