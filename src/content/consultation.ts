import type { Locale } from '@/i18n/routing';

/**
 * ÖZEL ONLINE DANIŞMANLIK — metin içeriği (tr/en dolu; ar/de/ru en'e düşer).
 * Tüm UI kopyası burada tutulur (mesaj anahtarı dağılmasın); IBAN/fiyat site.ts'te.
 *
 * TODO (HUKUK): Aşağıdaki hukuki/onay metinleri taslaktır; yayına almadan önce
 * bir hukuk danışmanına onaylatın.
 */
export interface ConsultationStep {
  title: string;
  body: string;
}

export interface ConsultationSection {
  heading: string;
  paragraphs: string[];
}

export interface ConsultationCopy {
  navLabel: string;
  badge: string;
  eyebrow: string;
  title: string;
  summary: string;
  heroDescription: string[];
  forWhom: string;
  howTitle: string;
  how: ConsultationStep[];
  /** Ucret ayar dosyasinda 0 ise tutar yerine bu metin gosterilir. */
  priceOnRequest: string;
  /** Sayfanin genisletilmis bolumleri (ne konusulur, belgeler, mahremiyet, iptal). */
  sections: ConsultationSection[];
  priceLabel: string;
  priceNote: string; // {duration} ile
  vatIncluded: string; // "KDV dahil" karşılığı
  /** Türkçe sayfada tutar yerine gösterilen ifade (yönetmelik: fiyat yazılmaz). */
  priceDomesticNotice: string;
  fxNote: string; // yabancı hasta için döviz/kur notu (tr'de boş olabilir)
  internationalNote: string;
  ctaBook: string;
  // Rezervasyon akışı
  step1Title: string;
  timezoneLabel: string;
  clinicTimeNote: string;
  yourTimeLabel: string;
  selectDate: string;
  selectTime: string;
  step2Title: string;
  nameLabel: string;
  namePlaceholder: string;
  countryLabel: string;
  countryPlaceholder: string;
  noteLabel: string;
  notePlaceholder: string;
  legalTitle: string;
  legalText: string[];
  consentLabel: string;
  consentRequired: string;
  validationName: string;
  validationSlot: string;
  back: string;
  next: string;
  create: string;
  step3Title: string;
  codeLabel: string;
  dateTimeLabel: string;
  amountLabel: string;
  referenceLabel: string;
  bankTitle: string;
  accountHolderLabel: string;
  bankNameLabel: string;
  ibanLabel: string;
  instructions: string;
  whatsappReceiptCta: string;
  whatsappMessage: string; // {code} {amount} ile
  waitingTitle: string;
  waitingBody: string;
}

const content: Partial<Record<Locale, ConsultationCopy>> = {
  tr: {
    navLabel: 'Özel Online Danışmanlık',
    badge: 'Ücretli özel görüşme',
    eyebrow: 'Mahremiyet öncelikli, randevulu hizmet',
    title: 'Özel Online Danışmanlık',
    summary:
      'Kliniğe gelmeden, randevulu ve birebir video görüşmesi. Özellikle mahremiyet önceliği olan hastalar için.',
    heroDescription: [
      'Özel Online Danışmanlık; kliniğe gelmeden, önceden randevu alarak cerrahla birebir yapılan ücretli bir video görüşmesidir. Ücretsiz WhatsApp/form akışından ayrı ve bağımsızdır.',
      'Görüşme WhatsApp görüntülü arama ile yapılır; ayrı bir video platformu (Zoom/Meet vb.) gerekmez. Randevu saatinizde WhatsApp’a erişiminizin olması yeterlidir.'
    ],
    forWhom:
      'Özellikle androloji ve cinsel sağlık gibi mahremiyet önceliği olan konularda, kendinizi daha güvende hissedeceğiniz, randevulu ve birebir bir görüşme ortamı sunar.',
    howTitle: 'Nasıl işliyor?',
    how: [
      { title: '1. Randevu alın', body: 'Uygun gün ve saati seçin (saatler İstanbul saatiyle gösterilir).' },
      { title: '2. Kısa bilgi', body: 'Ad, ülke ve kısa bir not — yalnızca gerekli minimum bilgi.' },
      { title: '3. Havale ile ödeme', body: 'Randevu kodunuzu alın; IBAN’a havale yapın, açıklamaya kodu yazın.' },
      { title: '4. Dekontu WhatsApp’tan gönderin', body: 'Tek dokunuşla, kodunuz önceden yazılmış olarak WhatsApp açılır.' },
      { title: '5. Görüntülü görüşme', body: 'Dekont onaylanınca, randevu saatinizde sizi WhatsApp’tan görüntülü ararız.' }
    ],
    priceOnRequest:
      'Görüşme ücreti randevu onayıyla birlikte size yazılı olarak bildirilir.',
    sections: [
      {
        heading: 'Görüşmede neler konuşulur?',
        paragraphs: [
          'Görüşme, mevcut şikâyetinizin ve elinizdeki tetkiklerin birlikte değerlendirilmesi üzerine kuruludur. Hangi bulgunun ne anlama geldiği, hangi tetkikin eksik olduğu, önünüzdeki seçeneklerin neler olduğu ve bu seçeneklerin birbirinden hangi noktada ayrıldığı konuşulur.',
          'Bir yöntem önerildiğinde, o yöntemin hangi durumda beklenen faydayı VERMEYECEĞİ de söylenir. Hiçbir görüşmede sonuç garantisi verilmez; verilen şey, kararınızı bilerek vermenizi sağlayacak bilgidir.',
          'Görüşme bir muayene yerine geçmez. Elle muayene, görüntüleme ve bazı tetkikler yüz yüze yapılmak zorundadır. Bu nedenle görüşmenin sonunda çoğu zaman "şu tetkik yapılsın" ya da "yüz yüze değerlendirme gerekir" denir — bu bir eksiklik değil, doğru sıralamadır.',
          'İkinci görüş almak için de kullanılabilir. Başka bir merkezde size önerilen bir planı, elinizdeki belgelerle birlikte değerlendirip farklı bir seçenek olup olmadığını konuşabilirsiniz.'
        ]
      },
      {
        heading: 'Görüşmeden önce hangi belgeleri hazırlayın?',
        paragraphs: [
          'Görüşmenin verimli geçmesi, elinizdeki belgelere bağlıdır. Belgesiz bir görüşmede ancak genel konuşulabilir.',
          'Hazırlayın: son kan tahlilleriniz (varsa PSA, kreatinin, tam kan sayımı), idrar tahlili ve kültür sonucu, görüntüleme raporları ve mümkünse GÖRÜNTÜLERİN KENDİSİ (yalnızca rapor çoğu zaman yetmez), varsa patoloji sonucu, daha önce geçirdiğiniz ameliyatların notları ve kullandığınız TÜM ilaçların listesi.',
          'Kan sulandırıcı kullanıyorsanız bunu ayrıca belirtin; pek çok planı doğrudan değiştirir. Prostatı küçülten bir ilaç kullanıyorsanız bu da PSA değerinizin yorumunu değiştirir.',
          'Belgelerinizi görüşmeden ÖNCE iletin. Görüşme sırasında ilk kez açılan bir dosya için 20 dakika yetmez.'
        ]
      },
      {
        heading: 'Mahremiyet',
        paragraphs: [
          'Görüşme birebirdir; odada başka kimse bulunmaz. Kayıt alınmaz ve görüşme üçüncü kişilerle paylaşılmaz.',
          'Paylaştığınız belgeler yalnızca değerlendirme amacıyla kullanılır. Görüşme öncesi gönderdiğiniz dosyalar, değerlendirme tamamlandıktan sonra saklama süreleri çerçevesinde işlenir; ayrıntılar KVKK aydınlatma metnindedir.',
          'Bazı hastalar için bu hizmetin asıl değeri, kliniğe gelmeden ve çevresine görünmeden sorusunu sorabilmektir. Bu önceliği anlıyoruz ve hizmet buna göre kurgulanmıştır.'
        ]
      },
      {
        heading: 'İptal ve değişiklik koşulları',
        paragraphs: [
          'Randevunuzu değiştirmek veya iptal etmek isterseniz, randevu saatinden önce bize bildirin. İptal ve değişiklik koşulları randevu onayıyla birlikte size YAZILI olarak iletilir.',
          'Teknik bir sorun nedeniyle görüşme yapılamazsa yeni bir randevu planlanır. Bağlantı sorunlarını azaltmak için görüşmeden birkaç dakika önce sessiz ve kapsama alanı iyi bir yerde hazır olun.',
          'Görüşmeye katılamayacağınızı önceden bildirmezseniz randevu kullanılmış sayılabilir; bu nedenle planınız değişirse bize haber vermeniz önemlidir.'
        ]
      }
    ],
    priceLabel: 'Ücret',
    priceNote: '{duration} dakikalık birebir değerlendirme görüşmesi',
    vatIncluded: 'KDV dahil',
    priceDomesticNotice: 'Ücretlidir; tutar randevu sırasında bildirilir.',
    fxNote: '',
    internationalNote:
      'Uluslararası hastaysanız: havale yalnızca Türkiye’deki banka hesabına yapıldığından, ödeme yöntemini birlikte belirlemek için lütfen WhatsApp’tan bize ulaşın.',
    ctaBook: 'Randevu Al',
    step1Title: 'Gün ve saat seçin',
    timezoneLabel: 'Saat diliminiz',
    clinicTimeNote: 'Saatler Türkiye saati (İstanbul) ile gösterilir.',
    yourTimeLabel: 'sizin saatinizle',
    selectDate: 'Tarih',
    selectTime: 'Saat (İstanbul)',
    step2Title: 'Bilgileriniz',
    nameLabel: 'Ad Soyad',
    namePlaceholder: 'Adınız ve soyadınız',
    countryLabel: 'Ülke',
    countryPlaceholder: 'Yaşadığınız ülke',
    noteLabel: 'Kısa açıklama (opsiyonel)',
    notePlaceholder: 'Görüşmek istediğiniz konu — kısa bir not yeterli',
    legalTitle: 'Görüşme öncesi bilgilendirme',
    legalText: [
      'Bu görüşme bir uzaktan ÖN DANIŞMANLIKTIR; yüz yüze muayene, kesin teşhis, tedavi veya reçete yerine geçmez. Gerektiğinde yüz yüze muayene önerilebilir.',
      'Görüşme WhatsApp görüntülü arama ile yapılır; randevu saatinizde WhatsApp’a erişiminizin olması gerekir.',
      'KVKK/GDPR: Paylaştığınız bilgiler yalnızca bu danışmanlık amacıyla işlenir. Görüşme KAYDEDİLMEZ.'
    ],
    consentLabel: 'Yukarıdaki bilgilendirmeyi okudum ve kabul ediyorum.',
    consentRequired: 'Devam etmek için bilgilendirmeyi onaylayın.',
    validationName: 'Lütfen adınızı girin.',
    validationSlot: 'Lütfen bir gün ve saat seçin.',
    back: 'Geri',
    next: 'Devam',
    create: 'Randevuyu oluştur',
    step3Title: 'Randevunuz alındı',
    codeLabel: 'Randevu kodu',
    dateTimeLabel: 'Gün ve saat',
    amountLabel: 'Tutar',
    referenceLabel: 'Açıklama / referans',
    bankTitle: 'Havale bilgileri',
    accountHolderLabel: 'Hesap sahibi',
    bankNameLabel: 'Banka',
    ibanLabel: 'IBAN',
    instructions:
      'Havaleyi yaparken açıklama alanına randevu kodunuzu yazın. Ödemeyi yaptıktan sonra dekontu WhatsApp’tan gönderin.',
    whatsappReceiptCta: 'WhatsApp’tan dekont gönder',
    whatsappMessage:
      'Merhaba, randevu kodum {code} için ödeme dekontumu gönderiyorum. Tutar: {amount}.',
    waitingTitle: 'Sıradaki adım',
    waitingBody:
      'Randevunuz alındı. Ödemenizi yaptıktan sonra dekontu WhatsApp’tan gönderin. Ekibimiz dekontu onayladıktan sonra, randevu saatinizde sizi WhatsApp’tan görüntülü olarak arayacaktır.'
  },
  en: {
    navLabel: 'Private Online Consultation',
    badge: 'Paid private session',
    eyebrow: 'Privacy-first, by appointment',
    title: 'Private Online Consultation',
    summary:
      'A private, one-to-one video consultation by appointment, without visiting the clinic. Especially for patients who value privacy.',
    heroDescription: [
      'The Private Online Consultation is a paid, one-to-one video consultation with the surgeon, booked in advance, without visiting the clinic. It is separate and independent from the free WhatsApp/form flow.',
      'The consultation takes place over a WhatsApp video call; no separate video platform (Zoom/Meet, etc.) is needed. You only need access to WhatsApp at your appointment time.'
    ],
    forWhom:
      'Especially for privacy-sensitive topics such as andrology and sexual health, it offers a private, one-to-one setting by appointment where you can feel more secure.',
    howTitle: 'How it works',
    how: [
      { title: '1. Book an appointment', body: 'Choose a suitable day and time (times are shown in Istanbul time).' },
      { title: '2. Brief details', body: 'Name, country and a short note — only the minimum needed.' },
      { title: '3. Pay by bank transfer', body: 'Get your appointment code; transfer to the IBAN and write the code in the description.' },
      { title: '4. Send the receipt on WhatsApp', body: 'One tap opens WhatsApp with your code pre-filled.' },
      { title: '5. Video consultation', body: 'Once the receipt is confirmed, we call you on WhatsApp video at your appointment time.' }
    ],
    priceOnRequest:
      'The consultation fee is confirmed to you in writing together with your appointment.',
    sections: [
      {
        heading: 'What is discussed in the consultation?',
        paragraphs: [
          'The consultation is built around reviewing your current symptoms together with the documents you already have. What each finding means, which test is missing, what the options are, and the point at which those options differ from one another — these are what is discussed.',
          'When a method is suggested, you are also told in which situations it will NOT deliver the expected benefit. No consultation gives a guarantee of outcome; what it gives is the information you need to decide knowingly.',
          'A consultation is not a substitute for an examination. Physical examination, imaging and some tests must be done in person. That is why a consultation often ends with "this test should be done" or "an in-person assessment is needed" — that is not a shortfall but the right order of things.',
          'It can also be used for a second opinion. You can review a plan proposed at another centre, with your documents to hand, and discuss whether a different option exists.'
        ]
      },
      {
        heading: 'Which documents should you prepare?',
        paragraphs: [
          'How useful the consultation is depends on the documents you have. Without them, only general matters can be discussed.',
          'Please prepare: your recent blood tests (PSA, creatinine, full blood count where relevant), urinalysis and culture, imaging reports and, if possible, THE IMAGES THEMSELVES (a report alone is often not enough), any pathology result, notes of previous operations, and a list of ALL your medications.',
          'If you take blood thinners, say so separately; it changes many plans directly. If you take a drug that shrinks the prostate, that changes how your PSA is interpreted.',
          'Send your documents BEFORE the consultation. Twenty minutes is not enough for a file opened for the first time during the call.'
        ]
      },
      {
        heading: 'Privacy',
        paragraphs: [
          'The consultation is one to one; no one else is in the room. It is not recorded and is not shared with third parties.',
          'The documents you share are used only for assessment. Files sent before the consultation are processed within the stated retention periods once the assessment is complete; the details are in the privacy notice.',
          'For some patients the real value of this service is being able to ask their question without coming to the clinic and without being seen doing so. We understand that priority, and the service is built around it.'
        ]
      },
      {
        heading: 'Cancellation and changes',
        paragraphs: [
          'If you want to change or cancel your appointment, tell us before the appointment time. The cancellation and change terms are sent to you IN WRITING together with your appointment confirmation.',
          'If the consultation cannot take place because of a technical problem, a new appointment is arranged. To reduce connection problems, be ready a few minutes beforehand somewhere quiet with good coverage.',
          'If you do not tell us in advance that you cannot attend, the appointment may be counted as used; so it matters that you let us know if your plans change.'
        ]
      }
    ],
    priceLabel: 'Fee',
    priceNote: '{duration}-minute one-to-one assessment consultation',
    vatIncluded: 'incl. VAT',
    priceDomesticNotice: 'A fee applies; the amount is confirmed when booking.',
    fxNote: '',
    internationalNote:
      'If you are an international patient: since the transfer is only to a bank account in Türkiye, please contact us on WhatsApp so we can arrange the payment method together.',
    ctaBook: 'Book an appointment',
    step1Title: 'Choose a day and time',
    timezoneLabel: 'Your time zone',
    clinicTimeNote: 'Times are shown in Türkiye time (Istanbul).',
    yourTimeLabel: 'your local time',
    selectDate: 'Date',
    selectTime: 'Time (Istanbul)',
    step2Title: 'Your details',
    nameLabel: 'Full name',
    namePlaceholder: 'Your first and last name',
    countryLabel: 'Country',
    countryPlaceholder: 'Country you live in',
    noteLabel: 'Short note (optional)',
    notePlaceholder: 'What you would like to discuss — a short note is enough',
    legalTitle: 'Before the consultation',
    legalText: [
      'This consultation is a remote PRE-CONSULTATION; it is not a substitute for an in-person examination, definitive diagnosis, treatment or prescription. An in-person examination may be recommended if needed.',
      'The consultation takes place over a WhatsApp video call; you must have access to WhatsApp at your appointment time.',
      'KVKK/GDPR: The information you share is processed only for this consultation. The session is NOT recorded.'
    ],
    consentLabel: 'I have read and accept the information above.',
    consentRequired: 'Please accept the information to continue.',
    validationName: 'Please enter your name.',
    validationSlot: 'Please choose a day and time.',
    back: 'Back',
    next: 'Continue',
    create: 'Create appointment',
    step3Title: 'Your appointment is booked',
    codeLabel: 'Appointment code',
    dateTimeLabel: 'Day and time',
    amountLabel: 'Amount',
    referenceLabel: 'Description / reference',
    bankTitle: 'Bank transfer details',
    accountHolderLabel: 'Account holder',
    bankNameLabel: 'Bank',
    ibanLabel: 'IBAN',
    instructions:
      'When making the transfer, write your appointment code in the description field. After paying, send the receipt on WhatsApp.',
    whatsappReceiptCta: 'Send receipt on WhatsApp',
    whatsappMessage:
      'Hello, I am sending my payment receipt for appointment code {code}. Amount: {amount}.',
    waitingTitle: 'Next step',
    waitingBody:
      'Your appointment is booked. After making your payment, send the receipt on WhatsApp. Once our team confirms the receipt, we will call you on WhatsApp video at your appointment time.'
  },
  ar: {
    navLabel: 'استشارة أونلاين خاصة',
    badge: 'جلسة خاصة مدفوعة',
    eyebrow: 'خدمة بموعد مسبق، الخصوصية أولاً',
    title: 'استشارة أونلاين خاصة',
    summary:
      'استشارة فيديو فردية بموعد مسبق، دون الحضور إلى العيادة. مخصّصة خصوصًا للمرضى الذين تهمّهم الخصوصية.',
    heroDescription: [
      'الاستشارة الأونلاين الخاصة هي استشارة فيديو فردية مدفوعة مع الجرّاح، تُحجَز مسبقًا، دون الحضور إلى العيادة. وهي منفصلة ومستقلة عن مسار WhatsApp/النموذج المجاني.',
      'تُجرى الاستشارة عبر مكالمة فيديو على WhatsApp؛ ولا حاجة إلى منصّة فيديو منفصلة (Zoom/Meet وغيرها). يكفي أن يكون لديك وصول إلى WhatsApp في وقت موعدك.'
    ],
    forWhom:
      'في المواضيع الحسّاسة للخصوصية مثل طب الذكورة والصحة الجنسية، توفّر بيئة فردية بموعد مسبق تشعر فيها بمزيد من الأمان والاطمئنان.',
    howTitle: 'كيف تسير العملية؟',
    how: [
      { title: '1. احجز موعدًا', body: 'اختر اليوم والوقت المناسبين (تُعرض الأوقات بتوقيت إسطنبول).' },
      { title: '2. معلومات موجزة', body: 'الاسم والدولة وملاحظة قصيرة — الحدّ الأدنى اللازم فقط.' },
      { title: '3. الدفع عبر التحويل البنكي', body: 'احصل على رمز موعدك؛ حوّل إلى الـIBAN واكتب الرمز في خانة الوصف.' },
      { title: '4. أرسل الإيصال عبر WhatsApp', body: 'بضغطة واحدة يُفتح WhatsApp ورمزك مكتوب مسبقًا.' },
      { title: '5. مكالمة الفيديو', body: 'بعد تأكيد الإيصال، نتصل بك عبر فيديو WhatsApp في وقت موعدك.' }
    ],
    priceOnRequest:
      'يُبلَّغ إليك مبلغ المقابلة كتابةً مع تأكيد الموعد.',
    sections: [
      {
        heading: 'ما الذي يُناقَش في المقابلة؟',
        paragraphs: [
          'تقوم المقابلة على تقييم شكواك الحالية مع ما لديك من وثائق معًا. ما معنى كل نتيجة، وأي فحص ناقص، وما الخيارات المتاحة، وعند أي نقطة تفترق هذه الخيارات — هذا ما يُناقَش.',
          'وحين تُقترَح طريقة يُقال لك أيضًا في أي الحالات لن تعطي الفائدة المرجوّة. ولا تمنح أي مقابلة ضمانًا للنتيجة؛ بل تمنحك المعلومة التي تقرر بها عن بيّنة.',
          'والمقابلة لا تغني عن الفحص. فالفحص السريري والتصوير وبعض الاختبارات يجب أن تتم وجهًا لوجه. ولهذا تنتهي المقابلة كثيرًا بعبارة «ينبغي إجراء هذا الفحص» أو «يلزم تقييم وجهًا لوجه» — وهذا ليس نقصًا بل هو الترتيب الصحيح.',
          'ويمكن استعمالها لرأي ثانٍ أيضًا. فيمكنك مراجعة خطة اقتُرحت عليك في مركز آخر، ووثائقك بين يديك، ومناقشة وجود خيار مختلف.'
        ]
      },
      {
        heading: 'ما الوثائق التي تُجهّزها قبل المقابلة؟',
        paragraphs: [
          'تتوقف فائدة المقابلة على ما لديك من وثائق. فمن دونها لا يمكن الحديث إلا في العموميات.',
          'جهّز: تحاليل دمك الأخيرة (PSA والكرياتينين وتعداد الدم بحسب الحالة)، وتحليل البول وزرعه، وتقارير التصوير وإن أمكن الصور نفسها (فالتقرير وحده لا يكفي غالبًا)، ونتيجة الفحص المرضي إن وُجدت، وتقارير عملياتك السابقة، وقائمة بكل أدويتك.',
          'وإن كنت تستعمل مميعات الدم فاذكر ذلك على حدة؛ فهو يغيّر خططًا كثيرة مباشرة. وإن كنت تستعمل دواءً يُصغّر البروستاتا فهذا يغيّر قراءة قيمة PSA لديك.',
          'أرسل وثائقك قبل المقابلة. فعشرون دقيقة لا تكفي لملف يُفتَح أول مرة أثناء المكالمة.'
        ]
      },
      {
        heading: 'الخصوصية',
        paragraphs: [
          'المقابلة فردية؛ ولا يوجد أحد آخر في الغرفة. ولا تُسجَّل ولا تُشارَك مع أطراف ثالثة.',
          'وتُستعمَل الوثائق التي تشاركها للتقييم فقط. والملفات المرسَلة قبل المقابلة تُعالَج بعد انتهاء التقييم ضمن مدد الحفظ المعلنة؛ والتفاصيل في إشعار الخصوصية.',
          'وقيمة هذه الخدمة الحقيقية عند بعض المرضى أن يطرحوا سؤالهم من دون المجيء إلى العيادة ومن دون أن يراهم أحد. ونحن نفهم هذه الأولوية، والخدمة مبنية عليها.'
        ]
      },
      {
        heading: 'الإلغاء وتغيير الموعد',
        paragraphs: [
          'إن أردت تغيير موعدك أو إلغاءه فأخبرنا قبل وقت الموعد. وتُرسَل إليك شروط الإلغاء والتغيير كتابةً مع تأكيد الموعد.',
          'وإن تعذّرت المقابلة بسبب مشكلة تقنية فيُحدَّد موعد جديد. ولتقليل مشكلات الاتصال كن مستعدًا قبل دقائق في مكان هادئ وبتغطية جيدة.',
          'وإن لم تُخبرنا مسبقًا بعدم قدرتك على الحضور فقد يُحتسَب الموعد مستعمَلًا؛ ولذلك يهم أن تُعلمنا إذا تغيّرت خطتك.'
        ]
      }
    ],
    priceLabel: 'الرسوم',
    priceNote: 'جلسة تقييم فردية مدّتها {duration} دقيقة',
    vatIncluded: 'شامل ضريبة القيمة المضافة',
    priceDomesticNotice: 'الخدمة مدفوعة؛ يُبلَّغ بالمبلغ عند الحجز.',
    fxNote: '',
    internationalNote:
      'إذا كنت مريضًا دوليًا: بما أن التحويل يتم فقط إلى حساب بنكي في تركيا، فيُرجى التواصل معنا عبر WhatsApp لنحدّد طريقة الدفع معًا.',
    ctaBook: 'احجز موعدًا',
    step1Title: 'اختر اليوم والوقت',
    timezoneLabel: 'نطاقك الزمني',
    clinicTimeNote: 'تُعرَض الأوقات بتوقيت تركيا (إسطنبول).',
    yourTimeLabel: 'بتوقيتك المحلي',
    selectDate: 'التاريخ',
    selectTime: 'الوقت (إسطنبول)',
    step2Title: 'معلوماتك',
    nameLabel: 'الاسم الكامل',
    namePlaceholder: 'اسمك الأول واسم العائلة',
    countryLabel: 'الدولة',
    countryPlaceholder: 'الدولة التي تقيم فيها',
    noteLabel: 'ملاحظة قصيرة (اختياري)',
    notePlaceholder: 'ما ترغب في مناقشته — تكفي ملاحظة قصيرة',
    legalTitle: 'قبل الاستشارة',
    legalText: [
      'هذه الترجمة لأغراض التوعية فقط؛ ويجب أن يعتمد محامٍ النصّ الساري وفقًا للقانون التركي/اللائحة العامة لحماية البيانات (GDPR).',
      'هذه الاستشارة استشارة أولية عن بُعد؛ ولا تُغني عن الفحص الحضوري أو التشخيص النهائي أو العلاج أو وصف الدواء. وقد يُوصى بفحص حضوري عند الحاجة.',
      'تُجرى الاستشارة عبر مكالمة فيديو على WhatsApp؛ ويجب أن يكون لديك وصول إلى WhatsApp في وقت موعدك.',
      'KVKK/GDPR: تُعالَج المعلومات التي تشاركها لغرض هذه الاستشارة فقط. ولا تُسجَّل الجلسة.'
    ],
    consentLabel: 'قرأت المعلومات أعلاه وأوافق عليها.',
    consentRequired: 'يرجى الموافقة على المعلومات للمتابعة.',
    validationName: 'يرجى إدخال اسمك.',
    validationSlot: 'يرجى اختيار يوم ووقت.',
    back: 'رجوع',
    next: 'متابعة',
    create: 'إنشاء الموعد',
    step3Title: 'تم حجز موعدك',
    codeLabel: 'رمز الموعد',
    dateTimeLabel: 'اليوم والوقت',
    amountLabel: 'المبلغ',
    referenceLabel: 'الوصف / المرجع',
    bankTitle: 'معلومات التحويل البنكي',
    accountHolderLabel: 'صاحب الحساب',
    bankNameLabel: 'البنك',
    ibanLabel: 'IBAN',
    instructions:
      'عند إجراء التحويل، اكتب رمز موعدك في خانة الوصف. وبعد الدفع، أرسل الإيصال عبر WhatsApp.',
    whatsappReceiptCta: 'أرسل الإيصال عبر WhatsApp',
    whatsappMessage: 'مرحبًا، أرسل إيصال الدفع الخاص برمز الموعد {code}. المبلغ: {amount}.',
    waitingTitle: 'الخطوة التالية',
    waitingBody:
      'تم حجز موعدك. بعد إتمام الدفع، أرسل الإيصال عبر WhatsApp. وبعد أن يؤكّد فريقنا الإيصال، سنتصل بك عبر فيديو WhatsApp في وقت موعدك.'
  },
  de: {
    navLabel: 'Private Online-Beratung',
    badge: 'Kostenpflichtige Privatsitzung',
    eyebrow: 'Datenschutz zuerst, nach Termin',
    title: 'Private Online-Beratung',
    summary:
      'Eine private Eins-zu-eins-Videoberatung nach Termin, ohne Klinikbesuch. Besonders für Patienten, denen Privatsphäre wichtig ist.',
    heroDescription: [
      'Die private Online-Beratung ist eine kostenpflichtige Eins-zu-eins-Videoberatung mit dem Chirurgen, im Voraus gebucht, ohne Klinikbesuch. Sie ist getrennt und unabhängig vom kostenlosen WhatsApp-/Formular-Ablauf.',
      'Die Beratung findet über einen WhatsApp-Videoanruf statt; eine separate Videoplattform (Zoom/Meet usw.) ist nicht nötig. Sie brauchen zum Termin nur Zugang zu WhatsApp.'
    ],
    forWhom:
      'Besonders bei datenschutzsensiblen Themen wie Andrologie und sexueller Gesundheit bietet sie einen privaten Eins-zu-eins-Rahmen nach Termin, in dem Sie sich sicherer fühlen.',
    howTitle: 'So funktioniert es',
    how: [
      { title: '1. Termin buchen', body: 'Wählen Sie einen passenden Tag und eine Uhrzeit (Zeiten werden in Istanbuler Zeit angezeigt).' },
      { title: '2. Kurze Angaben', body: 'Name, Land und eine kurze Notiz — nur das Nötigste.' },
      { title: '3. Zahlung per Überweisung', body: 'Erhalten Sie Ihren Termincode; überweisen Sie auf die IBAN und tragen Sie den Code im Verwendungszweck ein.' },
      { title: '4. Beleg über WhatsApp senden', body: 'Ein Tippen öffnet WhatsApp mit vorausgefülltem Code.' },
      { title: '5. Videoberatung', body: 'Nach Bestätigung des Belegs rufen wir Sie zum Termin per WhatsApp-Video an.' }
    ],
    priceOnRequest:
      'Das Honorar für das Gespräch wird Ihnen zusammen mit der Terminbestätigung schriftlich mitgeteilt.',
    sections: [
      {
        heading: 'Worüber wird im Gespräch gesprochen?',
        paragraphs: [
          'Das Gespräch beruht darauf, Ihre aktuellen Beschwerden gemeinsam mit den vorhandenen Unterlagen zu beurteilen. Was welcher Befund bedeutet, welche Untersuchung fehlt, welche Optionen bestehen und an welcher Stelle sich diese Optionen voneinander unterscheiden — darum geht es.',
          'Wird ein Verfahren vorgeschlagen, wird auch gesagt, in welchen Fällen es den erwarteten Nutzen NICHT bringt. Kein Gespräch gibt eine Ergebnisgarantie; es gibt Ihnen die Information, um bewusst zu entscheiden.',
          'Ein Gespräch ersetzt keine Untersuchung. Tastuntersuchung, Bildgebung und manche Tests müssen persönlich erfolgen. Deshalb endet ein Gespräch häufig mit „diese Untersuchung sollte gemacht werden" oder „eine persönliche Beurteilung ist nötig" — das ist kein Mangel, sondern die richtige Reihenfolge.',
          'Es eignet sich auch für eine Zweitmeinung. Einen andernorts vorgeschlagenen Plan können Sie mit Ihren Unterlagen durchgehen und besprechen, ob es eine andere Option gibt.'
        ]
      },
      {
        heading: 'Welche Unterlagen sollten Sie vorbereiten?',
        paragraphs: [
          'Wie nützlich das Gespräch wird, hängt von Ihren Unterlagen ab. Ohne sie lässt sich nur Allgemeines besprechen.',
          'Bitte bereiten Sie vor: aktuelle Blutwerte (gegebenenfalls PSA, Kreatinin, Blutbild), Urinbefund und Kultur, Bildgebungsbefunde und möglichst DIE BILDER SELBST (ein Bericht allein genügt oft nicht), einen etwaigen Pathologiebefund, Berichte früherer Operationen und eine Liste ALLER Medikamente.',
          'Nehmen Sie Gerinnungshemmer, sagen Sie es gesondert; das ändert viele Pläne unmittelbar. Nehmen Sie ein Medikament, das die Prostata verkleinert, ändert das die Bewertung Ihres PSA-Werts.',
          'Senden Sie die Unterlagen VOR dem Gespräch. Für eine erst im Gespräch geöffnete Akte reichen zwanzig Minuten nicht.'
        ]
      },
      {
        heading: 'Vertraulichkeit',
        paragraphs: [
          'Das Gespräch findet unter vier Augen statt; niemand sonst ist im Raum. Es wird nicht aufgezeichnet und nicht an Dritte weitergegeben.',
          'Die von Ihnen geteilten Unterlagen werden ausschließlich zur Beurteilung verwendet. Vor dem Gespräch gesendete Dateien werden nach Abschluss der Beurteilung im Rahmen der angegebenen Aufbewahrungsfristen verarbeitet; Einzelheiten stehen in der Datenschutzerklärung.',
          'Für manche Patienten liegt der eigentliche Wert dieses Angebots darin, ihre Frage stellen zu können, ohne in die Klinik zu kommen und ohne dabei gesehen zu werden. Wir verstehen diese Priorität; der Dienst ist darauf ausgelegt.'
        ]
      },
      {
        heading: 'Absage und Terminänderung',
        paragraphs: [
          'Möchten Sie Ihren Termin ändern oder absagen, teilen Sie es uns vor dem Termin mit. Die Bedingungen für Absage und Änderung erhalten Sie SCHRIFTLICH mit der Terminbestätigung.',
          'Kann das Gespräch wegen eines technischen Problems nicht stattfinden, wird ein neuer Termin vereinbart. Um Verbindungsprobleme zu verringern, seien Sie einige Minuten vorher an einem ruhigen Ort mit gutem Empfang bereit.',
          'Teilen Sie nicht vorher mit, dass Sie nicht teilnehmen können, kann der Termin als genutzt gelten; deshalb ist es wichtig, uns bei geänderten Plänen zu informieren.'
        ]
      }
    ],
    priceLabel: 'Gebühr',
    priceNote: 'Eins-zu-eins-Beratungsgespräch von {duration} Minuten',
    vatIncluded: 'inkl. MwSt.',
    priceDomesticNotice: 'Kostenpflichtig; der Betrag wird bei der Buchung mitgeteilt.',
    fxNote: '',
    internationalNote:
      'Wenn Sie internationale Patientin/internationaler Patient sind: Da die Überweisung nur auf ein Bankkonto in der Türkei erfolgt, kontaktieren Sie uns bitte über WhatsApp, damit wir die Zahlungsart gemeinsam festlegen.',
    ctaBook: 'Termin buchen',
    step1Title: 'Tag und Uhrzeit wählen',
    timezoneLabel: 'Ihre Zeitzone',
    clinicTimeNote: 'Die Zeiten werden in türkischer Zeit (Istanbul) angezeigt.',
    yourTimeLabel: 'Ihre Ortszeit',
    selectDate: 'Datum',
    selectTime: 'Uhrzeit (Istanbul)',
    step2Title: 'Ihre Angaben',
    nameLabel: 'Vollständiger Name',
    namePlaceholder: 'Ihr Vor- und Nachname',
    countryLabel: 'Land',
    countryPlaceholder: 'Land, in dem Sie leben',
    noteLabel: 'Kurze Notiz (optional)',
    notePlaceholder: 'Was Sie besprechen möchten — eine kurze Notiz genügt',
    legalTitle: 'Vor der Beratung',
    legalText: [
      'Diese Übersetzung dient nur zu Informationszwecken; der verbindliche Text muss von einem Anwalt nach geltendem türkischem Recht/der DSGVO bestätigt werden.',
      'Diese Beratung ist eine ferngestützte VORBERATUNG; sie ersetzt keine persönliche Untersuchung, keine endgültige Diagnose, Behandlung oder Verschreibung. Bei Bedarf kann eine persönliche Untersuchung empfohlen werden.',
      'Die Beratung findet über einen WhatsApp-Videoanruf statt; Sie müssen zum Termin Zugang zu WhatsApp haben.',
      'KVKK/DSGVO: Die von Ihnen geteilten Informationen werden nur für diese Beratung verarbeitet. Die Sitzung wird NICHT aufgezeichnet.'
    ],
    consentLabel: 'Ich habe die obigen Informationen gelesen und akzeptiere sie.',
    consentRequired: 'Bitte akzeptieren Sie die Informationen, um fortzufahren.',
    validationName: 'Bitte geben Sie Ihren Namen ein.',
    validationSlot: 'Bitte wählen Sie einen Tag und eine Uhrzeit.',
    back: 'Zurück',
    next: 'Weiter',
    create: 'Termin erstellen',
    step3Title: 'Ihr Termin ist gebucht',
    codeLabel: 'Termincode',
    dateTimeLabel: 'Tag und Uhrzeit',
    amountLabel: 'Betrag',
    referenceLabel: 'Verwendungszweck / Referenz',
    bankTitle: 'Überweisungsdaten',
    accountHolderLabel: 'Kontoinhaber',
    bankNameLabel: 'Bank',
    ibanLabel: 'IBAN',
    instructions:
      'Tragen Sie bei der Überweisung Ihren Termincode im Verwendungszweck ein. Senden Sie nach der Zahlung den Beleg über WhatsApp.',
    whatsappReceiptCta: 'Beleg über WhatsApp senden',
    whatsappMessage: 'Hallo, ich sende meinen Zahlungsbeleg für den Termincode {code}. Betrag: {amount}.',
    waitingTitle: 'Nächster Schritt',
    waitingBody:
      'Ihr Termin ist gebucht. Senden Sie nach Ihrer Zahlung den Beleg über WhatsApp. Sobald unser Team den Beleg bestätigt hat, rufen wir Sie zum Termin per WhatsApp-Video an.'
  },
  ru: {
    navLabel: 'Частная онлайн-консультация',
    badge: 'Платная частная сессия',
    eyebrow: 'Приоритет конфиденциальности, по записи',
    title: 'Частная онлайн-консультация',
    summary:
      'Частная индивидуальная видеоконсультация по записи, без визита в клинику. Особенно для пациентов, которым важна конфиденциальность.',
    heroDescription: [
      'Частная онлайн-консультация — это платная индивидуальная видеоконсультация с хирургом, забронированная заранее, без визита в клинику. Она отдельна и независима от бесплатного потока WhatsApp/формы.',
      'Консультация проходит по видеозвонку WhatsApp; отдельная видеоплатформа (Zoom/Meet и т. п.) не нужна. Достаточно иметь доступ к WhatsApp во время записи.'
    ],
    forWhom:
      'Особенно при деликатных темах — андрология и сексуальное здоровье — это индивидуальный формат по записи, в котором вы можете чувствовать себя безопаснее.',
    howTitle: 'Как это работает',
    how: [
      { title: '1. Запишитесь на приём', body: 'Выберите удобный день и время (время отображается по Стамбулу).' },
      { title: '2. Краткие данные', body: 'Имя, страна и короткая заметка — только необходимый минимум.' },
      { title: '3. Оплата банковским переводом', body: 'Получите код записи; переведите на IBAN и укажите код в назначении платежа.' },
      { title: '4. Отправьте чек в WhatsApp', body: 'Одно нажатие открывает WhatsApp с заранее заполненным кодом.' },
      { title: '5. Видеоконсультация', body: 'После подтверждения чека мы звоним вам по видео WhatsApp во время записи.' }
    ],
    priceOnRequest:
      'Стоимость консультации сообщается вам письменно вместе с подтверждением записи.',
    sections: [
      {
        heading: 'Что обсуждается на консультации?',
        paragraphs: [
          'Консультация строится на совместном разборе ваших текущих жалоб и имеющихся документов. Что означает каждая находка, какого исследования не хватает, какие есть варианты и в чём именно эти варианты расходятся — об этом и идёт речь.',
          'Когда предлагается метод, вам также говорят, в каких случаях он НЕ даст ожидаемой пользы. Никакая консультация не даёт гарантии результата; она даёт сведения, нужные, чтобы решить осознанно.',
          'Консультация не заменяет осмотр. Физикальный осмотр, визуализация и часть исследований должны проводиться очно. Поэтому консультация нередко заканчивается словами «нужно сделать это исследование» или «необходима очная оценка» — это не недостаток, а правильный порядок.',
          'Её можно использовать и для второго мнения. Вы можете разобрать план, предложенный в другом центре, имея документы под рукой, и обсудить, существует ли другой вариант.'
        ]
      },
      {
        heading: 'Какие документы подготовить?',
        paragraphs: [
          'Насколько полезной окажется консультация, зависит от ваших документов. Без них можно обсуждать только общее.',
          'Подготовьте: свежие анализы крови (ПСА, креатинин, общий анализ — по ситуации), анализ и посев мочи, заключения визуализации и по возможности САМИ СНИМКИ (одного заключения часто мало), результат гистологии, если он есть, протоколы перенесённых операций и список ВСЕХ принимаемых препаратов.',
          'Если вы принимаете препараты, разжижающие кровь, скажите об этом отдельно: это напрямую меняет многие планы. Если вы принимаете препарат, уменьшающий простату, это меняет трактовку вашего ПСА.',
          'Пришлите документы ДО консультации. Двадцати минут не хватит на дело, открытое впервые во время разговора.'
        ]
      },
      {
        heading: 'Конфиденциальность',
        paragraphs: [
          'Консультация проходит один на один; в кабинете никого больше нет. Она не записывается и не передаётся третьим лицам.',
          'Переданные вами документы используются только для оценки. Файлы, присланные до консультации, после завершения оценки обрабатываются в рамках указанных сроков хранения; подробности — в уведомлении о конфиденциальности.',
          'Для части пациентов настоящая ценность этой услуги в том, чтобы задать свой вопрос, не приходя в клинику и не будучи при этом замеченным. Мы понимаем этот приоритет; услуга построена именно так.'
        ]
      },
      {
        heading: 'Отмена и перенос',
        paragraphs: [
          'Если вы хотите перенести или отменить запись, сообщите нам до времени приёма. Условия отмены и переноса направляются вам ПИСЬМЕННО вместе с подтверждением записи.',
          'Если консультация не состоится из-за технической проблемы, назначается новое время. Чтобы снизить вероятность проблем со связью, будьте готовы за несколько минут в тихом месте с хорошим покрытием.',
          'Если вы заранее не сообщите, что не сможете участвовать, запись может быть сочтена использованной; поэтому важно предупредить нас при изменении планов.'
        ]
      }
    ],
    priceLabel: 'Стоимость',
    priceNote: 'Индивидуальная оценочная консультация {duration} минут',
    vatIncluded: 'включая НДС',
    priceDomesticNotice: 'Услуга платная; сумма сообщается при записи.',
    fxNote: '',
    internationalNote:
      'Если вы иностранный пациент: поскольку перевод осуществляется только на банковский счёт в Турции, пожалуйста, свяжитесь с нами в WhatsApp, чтобы вместе определить способ оплаты.',
    ctaBook: 'Записаться',
    step1Title: 'Выберите день и время',
    timezoneLabel: 'Ваш часовой пояс',
    clinicTimeNote: 'Время указано по турецкому времени (Стамбул).',
    yourTimeLabel: 'по вашему времени',
    selectDate: 'Дата',
    selectTime: 'Время (Стамбул)',
    step2Title: 'Ваши данные',
    nameLabel: 'Имя и фамилия',
    namePlaceholder: 'Ваши имя и фамилия',
    countryLabel: 'Страна',
    countryPlaceholder: 'Страна проживания',
    noteLabel: 'Короткая заметка (необязательно)',
    notePlaceholder: 'Что вы хотели бы обсудить — достаточно короткой заметки',
    legalTitle: 'Перед консультацией',
    legalText: [
      'Этот перевод носит информационный характер; обязательный к применению текст должен быть утверждён юристом в соответствии с действующим турецким законодательством/GDPR.',
      'Эта консультация является дистанционной ПРЕДВАРИТЕЛЬНОЙ КОНСУЛЬТАЦИЕЙ; она не заменяет очный осмотр, окончательный диагноз, лечение или назначение препаратов. При необходимости может быть рекомендован очный осмотр.',
      'Консультация проходит по видеозвонку WhatsApp; во время записи у вас должен быть доступ к WhatsApp.',
      'KVKK/GDPR: Предоставленная вами информация обрабатывается только для этой консультации. Сессия НЕ записывается.'
    ],
    consentLabel: 'Я прочитал(а) приведённую выше информацию и принимаю её.',
    consentRequired: 'Пожалуйста, примите информацию, чтобы продолжить.',
    validationName: 'Пожалуйста, введите ваше имя.',
    validationSlot: 'Пожалуйста, выберите день и время.',
    back: 'Назад',
    next: 'Продолжить',
    create: 'Создать запись',
    step3Title: 'Ваша запись оформлена',
    codeLabel: 'Код записи',
    dateTimeLabel: 'День и время',
    amountLabel: 'Сумма',
    referenceLabel: 'Назначение / референс',
    bankTitle: 'Реквизиты для перевода',
    accountHolderLabel: 'Владелец счёта',
    bankNameLabel: 'Банк',
    ibanLabel: 'IBAN',
    instructions:
      'При переводе укажите код записи в назначении платежа. После оплаты отправьте чек в WhatsApp.',
    whatsappReceiptCta: 'Отправить чек в WhatsApp',
    whatsappMessage: 'Здравствуйте, отправляю чек об оплате по коду записи {code}. Сумма: {amount}.',
    waitingTitle: 'Следующий шаг',
    waitingBody:
      'Ваша запись оформлена. После оплаты отправьте чек в WhatsApp. Как только наша команда подтвердит чек, мы позвоним вам по видео WhatsApp во время записи.'
  },
  fr: {
    navLabel: 'Consultation privée en ligne',
    badge: 'Séance privée payante',
    eyebrow: 'Confidentialité avant tout, sur rendez-vous',
    title: 'Consultation privée en ligne',
    summary:
      'Une consultation vidéo individuelle et privée, sur rendez-vous, sans vous déplacer à la clinique. Particulièrement adaptée aux patients attachés à leur intimité.',
    heroDescription: [
      'La consultation privée en ligne est un entretien vidéo payant, individuel, réservé à l’avance avec le chirurgien, sans déplacement à la clinique. Elle est distincte et indépendante du parcours gratuit par WhatsApp ou formulaire.',
      'La consultation se déroule par appel vidéo WhatsApp ; aucune autre plateforme (Zoom, Meet, etc.) n’est nécessaire. Il vous suffit d’avoir accès à WhatsApp à l’heure du rendez-vous.'
    ],
    forWhom:
      'Pour les sujets sensibles comme l’andrologie et la santé sexuelle, elle offre un cadre privé et individuel, sur rendez-vous, où vous pouvez vous exprimer en confiance.',
    howTitle: 'Comment ça se passe',
    how: [
      { title: '1. Réservez un créneau', body: 'Choisissez un jour et une heure (les horaires sont affichés en heure d’Istanbul).' },
      { title: '2. Quelques informations', body: 'Nom, pays et une courte note — le strict nécessaire.' },
      { title: '3. Réglez par virement', body: 'Recevez votre code de rendez-vous ; virez le montant sur l’IBAN en indiquant le code en référence.' },
      { title: '4. Envoyez le reçu sur WhatsApp', body: 'Un seul clic ouvre WhatsApp avec votre code déjà renseigné.' },
      { title: '5. Consultation vidéo', body: 'Une fois le reçu confirmé, nous vous appelons en vidéo WhatsApp à l’heure convenue.' }
    ],
    priceOnRequest:
      'Le montant de la consultation vous est confirmé par écrit en même temps que votre rendez-vous.',
    sections: [
      {
        heading: 'De quoi parle-t-on pendant la consultation ?',
        paragraphs: [
          'La consultation repose sur l’examen conjoint de vos symptômes actuels et des documents dont vous disposez. Ce que signifie chaque constatation, quel examen manque, quelles sont les options et sur quel point elles diffèrent : voilà ce qui est abordé.',
          'Lorsqu’une méthode est proposée, on vous dit aussi dans quelles situations elle n’apportera PAS le bénéfice attendu. Aucune consultation ne donne de garantie de résultat ; elle donne l’information nécessaire pour décider en connaissance de cause.',
          'Une consultation ne remplace pas un examen. L’examen clinique, l’imagerie et certains tests doivent être faits en présentiel. C’est pourquoi elle se termine souvent par « cet examen doit être fait » ou « une évaluation en présentiel est nécessaire » : ce n’est pas une insuffisance, c’est le bon ordre des choses.',
          'Elle peut aussi servir à un second avis. Vous pouvez reprendre un plan proposé ailleurs, documents en main, et discuter de l’existence d’une autre option.'
        ]
      },
      {
        heading: 'Quels documents préparer ?',
        paragraphs: [
          'L’utilité de la consultation dépend des documents dont vous disposez. Sans eux, seules des généralités peuvent être abordées.',
          'Préparez : vos analyses sanguines récentes (PSA, créatinine, numération si pertinent), un ECBU, les comptes rendus d’imagerie et si possible LES IMAGES ELLES-MÊMES (le compte rendu seul ne suffit souvent pas), un éventuel résultat anatomopathologique, les comptes rendus de vos interventions antérieures et la liste de TOUS vos traitements.',
          'Si vous prenez des anticoagulants, signalez-le à part : cela modifie directement de nombreux plans. Si vous prenez un médicament réduisant le volume prostatique, cela change l’interprétation de votre PSA.',
          'Envoyez vos documents AVANT la consultation. Vingt minutes ne suffisent pas pour un dossier ouvert pour la première fois pendant l’appel.'
        ]
      },
      {
        heading: 'Confidentialité',
        paragraphs: [
          'La consultation est individuelle ; personne d’autre n’est présent. Elle n’est pas enregistrée et n’est pas partagée avec des tiers.',
          'Les documents que vous transmettez ne servent qu’à l’évaluation. Les fichiers envoyés avant la consultation sont traités, une fois l’évaluation terminée, dans le cadre des durées de conservation indiquées ; le détail figure dans la notice de confidentialité.',
          'Pour certains patients, la véritable valeur de ce service est de pouvoir poser leur question sans venir à la clinique et sans être vus. Nous comprenons cette priorité ; le service est pensé pour cela.'
        ]
      },
      {
        heading: 'Annulation et modification',
        paragraphs: [
          'Si vous souhaitez modifier ou annuler votre rendez-vous, prévenez-nous avant l’heure prévue. Les conditions d’annulation et de modification vous sont transmises PAR ÉCRIT avec la confirmation du rendez-vous.',
          'Si la consultation ne peut avoir lieu en raison d’un problème technique, un nouveau rendez-vous est fixé. Pour limiter les problèmes de connexion, soyez prêt quelques minutes avant, dans un endroit calme et bien couvert.',
          'Si vous ne prévenez pas à l’avance de votre absence, le rendez-vous peut être considéré comme utilisé ; il importe donc de nous informer si vos projets changent.'
        ]
      }
    ],
    priceLabel: 'Tarif',
    priceNote: 'Entretien d’évaluation individuel de {duration} minutes',
    vatIncluded: 'TVA incluse',
    priceDomesticNotice: 'Prestation payante ; le montant est communiqué lors de la prise de rendez-vous.',
    fxNote: '',
    internationalNote:
      'Si vous êtes un patient international : le virement ne pouvant se faire que vers un compte bancaire en Türkiye, contactez-nous sur WhatsApp afin de convenir ensemble du moyen de paiement.',
    ctaBook: 'Prendre rendez-vous',
    step1Title: 'Choisissez un jour et une heure',
    timezoneLabel: 'Votre fuseau horaire',
    clinicTimeNote: 'Les horaires sont affichés en heure de Türkiye (Istanbul).',
    yourTimeLabel: 'heure locale',
    selectDate: 'Date',
    selectTime: 'Heure (Istanbul)',
    step2Title: 'Vos informations',
    nameLabel: 'Nom et prénom',
    namePlaceholder: 'Votre nom et prénom',
    countryLabel: 'Pays',
    countryPlaceholder: 'Pays de résidence',
    noteLabel: 'Note courte (facultatif)',
    notePlaceholder: 'Ce dont vous souhaitez parler — quelques mots suffisent',
    legalTitle: 'Avant la consultation',
    legalText: [
      'Cette consultation est une PRÉ-CONSULTATION à distance ; elle ne remplace pas un examen en présentiel, un diagnostic définitif, un traitement ou une prescription. Un examen en personne pourra être recommandé si nécessaire.',
      'La consultation se déroule par appel vidéo WhatsApp ; vous devez avoir accès à WhatsApp à l’heure du rendez-vous.',
      'KVKK/RGPD : les informations que vous partagez sont traitées uniquement pour cette consultation. La séance n’est PAS enregistrée.'
    ],
    consentLabel: 'J’ai lu et j’accepte les informations ci-dessus.',
    consentRequired: 'Veuillez accepter les informations pour continuer.',
    validationName: 'Veuillez saisir votre nom.',
    validationSlot: 'Veuillez choisir un jour et une heure.',
    back: 'Retour',
    next: 'Continuer',
    create: 'Créer le rendez-vous',
    step3Title: 'Votre rendez-vous est confirmé',
    codeLabel: 'Code de rendez-vous',
    dateTimeLabel: 'Jour et heure',
    amountLabel: 'Montant',
    referenceLabel: 'Référence / motif',
    bankTitle: 'Coordonnées bancaires',
    accountHolderLabel: 'Titulaire du compte',
    bankNameLabel: 'Banque',
    ibanLabel: 'IBAN',
    instructions:
      'Lors du virement, indiquez votre code de rendez-vous dans le champ référence. Après le paiement, envoyez le reçu sur WhatsApp.',
    whatsappReceiptCta: 'Envoyer le reçu sur WhatsApp',
    whatsappMessage:
      'Bonjour, je vous envoie le reçu de paiement pour le code de rendez-vous {code}. Montant : {amount}.',
    waitingTitle: 'Prochaine étape',
    waitingBody:
      'Votre rendez-vous est enregistré. Après avoir effectué le paiement, envoyez le reçu sur WhatsApp. Dès que notre équipe l’aura confirmé, nous vous appellerons en vidéo WhatsApp à l’heure convenue.'
  }
};

export function resolveConsultation(locale: Locale): ConsultationCopy {
  return content[locale] ?? content.en ?? content.tr!;
}
