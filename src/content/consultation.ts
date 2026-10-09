import type { Locale } from '@/i18n/routing';
import { siteConfig } from '@/config/site';

/**
 * ÖZEL ONLINE DANIŞMANLIK — metin içeriği (tr/en/ar üçü de dolu).
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
  /**
   * ÜCRET PASİFKEN (siteConfig.consultation.feeActive === false) yukarıdaki
   * alanların yerine geçen metinler. Ücret, havale ve dekont geçmez.
   * resolveConsultation() bunları otomatik uygular; bileşenler ayrıca
   * bakmak zorunda değil (yalnızca tutar/havale kutularını gizlerler).
   */
  withoutFee: {
    badge: string;
    heroDescription: string[];
    how: ConsultationStep[];
    step3Title: string;
    whatsappReceiptCta: string;
    whatsappMessage: string; // {code} ile
    waitingBody: string;
  };
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
      'Randevunuz alındı. Ödemenizi yaptıktan sonra dekontu WhatsApp’tan gönderin. Ekibimiz dekontu onayladıktan sonra, randevu saatinizde sizi WhatsApp’tan görüntülü olarak arayacaktır.',
    withoutFee: {
      badge: 'Randevulu özel görüşme',
      heroDescription: [
        'Özel Online Danışmanlık; kliniğe gelmeden, önceden randevu alarak cerrahla birebir yapılan bir video görüşmesidir. WhatsApp ve ön değerlendirme formu akışından ayrı ve bağımsızdır.',
        'Görüşme WhatsApp görüntülü arama ile yapılır; ayrı bir video platformu (Zoom/Meet vb.) gerekmez. Randevu saatinizde WhatsApp’a erişiminizin olması yeterlidir.'
      ],
      how: [
        { title: '1. Randevu alın', body: 'Uygun gün ve saati seçin (saatler İstanbul saatiyle gösterilir).' },
        { title: '2. Kısa bilgi', body: 'Ad, ülke ve kısa bir not — yalnızca gerekli minimum bilgi.' },
        { title: '3. Kodunuzu WhatsApp’tan gönderin', body: 'Randevu kodunuz oluşur; tek dokunuşla, kodunuz önceden yazılmış olarak WhatsApp açılır.' },
        { title: '4. Randevu onayı', body: 'Ekibimiz uygunluğu kontrol eder ve randevunuzu WhatsApp’tan yazılı olarak onaylar.' },
        { title: '5. Görüntülü görüşme', body: 'Randevu saatinizde sizi WhatsApp’tan görüntülü ararız.' }
      ],
      step3Title: 'Randevu talebiniz oluşturuldu',
      whatsappReceiptCta: 'Talebi WhatsApp’tan gönder',
      whatsappMessage: 'Merhaba, {code} kodlu özel online danışmanlık randevu talebimi onaylatmak istiyorum.',
      waitingBody:
        'Randevu talebiniz oluşturuldu. Kodunuzu WhatsApp’tan gönderin; ekibimiz talebinizi yazılı olarak onaylar ve randevu saatinizde sizi WhatsApp’tan görüntülü arar.'
    }
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
      'Your appointment is booked. After making your payment, send the receipt on WhatsApp. Once our team confirms the receipt, we will call you on WhatsApp video at your appointment time.',
    withoutFee: {
      badge: 'Private session by appointment',
      heroDescription: [
        'The Private Online Consultation is a one-to-one video consultation with the surgeon, booked in advance, without visiting the clinic. It is separate and independent from the WhatsApp and pre-assessment form flow.',
        'The consultation takes place over a WhatsApp video call; no separate video platform (Zoom/Meet, etc.) is needed. You only need access to WhatsApp at your appointment time.'
      ],
      how: [
        { title: '1. Book an appointment', body: 'Choose a suitable day and time (times are shown in Istanbul time).' },
        { title: '2. Brief details', body: 'Name, country and a short note — only the minimum needed.' },
        { title: '3. Send your code on WhatsApp', body: 'Your appointment code is created; one tap opens WhatsApp with the code pre-filled.' },
        { title: '4. Confirmation', body: 'Our team checks availability and confirms your appointment in writing on WhatsApp.' },
        { title: '5. Video consultation', body: 'We call you on WhatsApp video at your appointment time.' }
      ],
      step3Title: 'Your appointment request has been created',
      whatsappReceiptCta: 'Send the request on WhatsApp',
      whatsappMessage: 'Hello, I would like to confirm my private online consultation request, code {code}.',
      waitingBody:
        'Your appointment request has been created. Send your code on WhatsApp; our team will confirm your request in writing and call you on WhatsApp video at your appointment time.'
    }
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
      'تم حجز موعدك. بعد إتمام الدفع، أرسل الإيصال عبر WhatsApp. وبعد أن يؤكّد فريقنا الإيصال، سنتصل بك عبر فيديو WhatsApp في وقت موعدك.',
    withoutFee: {
      badge: 'جلسة خاصة بموعد مسبق',
      heroDescription: [
        'الاستشارة الأونلاين الخاصة هي استشارة فيديو فردية مع الجرّاح، تُحجَز مسبقًا، دون الحضور إلى العيادة. وهي منفصلة ومستقلة عن مسار WhatsApp ونموذج التقييم الأولي.',
        'تُجرى الاستشارة عبر مكالمة فيديو على WhatsApp؛ ولا حاجة إلى منصّة فيديو منفصلة (Zoom/Meet وغيرها). يكفي أن يكون لديك وصول إلى WhatsApp في وقت موعدك.'
      ],
      how: [
        { title: '1. احجز موعدًا', body: 'اختر اليوم والوقت المناسبين (تُعرض الأوقات بتوقيت إسطنبول).' },
        { title: '2. معلومات موجزة', body: 'الاسم والدولة وملاحظة قصيرة — الحدّ الأدنى اللازم فقط.' },
        { title: '3. أرسل رمزك عبر WhatsApp', body: 'يُنشأ رمز موعدك؛ وبضغطة واحدة يُفتح WhatsApp والرمز مكتوب مسبقًا.' },
        { title: '4. تأكيد الموعد', body: 'يتحقّق فريقنا من التوفّر ويؤكّد موعدك كتابةً عبر WhatsApp.' },
        { title: '5. مكالمة الفيديو', body: 'نتصل بك عبر فيديو WhatsApp في وقت موعدك.' }
      ],
      step3Title: 'تم إنشاء طلب موعدك',
      whatsappReceiptCta: 'أرسل الطلب عبر WhatsApp',
      whatsappMessage: 'مرحبًا، أودّ تأكيد طلب الاستشارة الأونلاين الخاصة برمز {code}.',
      waitingBody:
        'تم إنشاء طلب موعدك. أرسل رمزك عبر WhatsApp؛ وسيؤكّد فريقنا طلبك كتابةً ويتصل بك عبر فيديو WhatsApp في وقت موعدك.'
    }
  },
};

export function resolveConsultation(locale: Locale): ConsultationCopy {
  const copy = content[locale] ?? content.en ?? content.tr!;
  // Ücret pasifken etiket, anlatım, adımlar ve son adım metinleri ücretsiz
  // karşılıklarıyla değişir. Ana sayfa, tedavi sayfası ve alt bilgi aynı
  // fonksiyonu kullandığı için "ücretli" etiketi hiçbir yerde kalmaz.
  if (siteConfig.consultation.feeActive) return copy;
  return { ...copy, ...copy.withoutFee };
}
