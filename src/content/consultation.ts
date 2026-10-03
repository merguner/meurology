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
  }
};

export function resolveConsultation(locale: Locale): ConsultationCopy {
  return content[locale] ?? content.en ?? content.tr!;
}
