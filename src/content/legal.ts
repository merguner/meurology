import type { Locale } from '@/i18n/routing';

/**
 * Ön değerlendirme formuna ilişkin aydınlatma ve ayrı açık rıza metinleri.
 */
export interface LegalSection {
  heading: string;
  paragraphs: string[];
}

export interface LegalDoc {
  lastUpdated: string; // ISO
  i18n: Partial<Record<Locale, { intro: string; sections: LegalSection[] }>>;
}

export const kvkkDoc: LegalDoc = {
  lastUpdated: '2026-09-21',
  i18n: {
    tr: {
      intro:
        'Bu metin, web sitesindeki ön değerlendirme formuyla paylaştığınız bilgiler içindir. 6698 sayılı KVKK uygulanır; GDPR hakları, işleme faaliyetine uygulanabildiği ölçüde ayrıca geçerlidir.',
      sections: [
        {
          heading: 'Veri Sorumlusu',
          paragraphs: [
            'Veri sorumlusu Doç. Dr. Müslüm Ergün (ME Urology Clinic), Bahçelievler Mahallesi, E-5 Karayolu / Kültür Sok No:1, 34180 Bahçelievler/İstanbul. İletişim: info@meurology.com / 0532 063 09 69.'
          ]
        },
        {
          heading: 'İşlenen Kişisel Veriler',
          paragraphs: [
            'Form aracılığıyla adınızı, ülkenizi, e-posta adresinizi veya telefon numaranızı, tedavi seçiminizi ve isteğe bağlı mesajınızı doğrudan sizden toplarız. Mesajınıza sağlık bilgisi yazabilirsiniz; form dosya yüklemez. Başvuru site sunucusunda işlenir ve kliniğin e-posta adresine iletilir.',
            'Tedavi seçimi ve mesajınız sağlık bilgisi içeriyorsa bu özel nitelikli veriler ayrı açık rızanıza dayanarak ön değerlendirme için işlenir.'
          ]
        },
        {
          heading: 'İşleme Amaçları',
          paragraphs: [
            'Başvurunuza yanıt verilmesi ve talebiniz doğrultusunda ön değerlendirme yapılması. Tedavi ve seyahat koordinasyonu, ancak bu yönde devam etmek istediğinizde yürütülür.'
          ]
        },
        {
          heading: 'Hukuki Sebep',
          paragraphs: [
            'İletişim verileri, talebiniz üzerine olası sağlık hizmeti ilişkisini kurmaya yönelik adımlar için KVKK m.5/2-c kapsamında; sağlık bilgileri ayrı açık rızanızla KVKK m.6/3-a kapsamında işlenir. Uygulanabilir yasal yükümlülükler ayrıca ilgili kayıtların işlenmesini gerektirebilir.'
          ]
        },
        {
          heading: 'Aktarım',
          paragraphs: [
            'Başvurular, teknik barındırma ve e-posta iletim hizmeti sağlayıcıları tarafından işlenebilir. Tedavi veya seyahat koordinasyonu talep ederseniz gerekli bilgiler ilgili sağlık kuruluşu veya hizmet sağlayıcısıyla paylaşılabilir. WhatsApp bağlantısını seçerseniz orada paylaştığınız bilgiler ayrı bir hizmet üzerinden iletilir; form WhatsApp ile gönderilmez.'
          ]
        },
        {
          heading: 'Saklama Süresi',
          paragraphs: [
            'Başvuru e-postaları talebinizi sonuçlandırmak ve varsa ilgili yasal yükümlülükleri karşılamak için gerekli olduğu sürece saklanır. Bu amaçlar sona erdiğinde silme veya anonimleştirme değerlendirilir.'
          ]
        },
        {
          heading: 'Haklarınız (KVKK m.11 / GDPR)',
          paragraphs: [
            'KVKK m.11 kapsamındaki haklarınız için info@meurology.com adresine başvurabilirsiniz. GDPR uygulanıyorsa ilgili erişim, düzeltme, silme, kısıtlama ve itiraz hakları da geçerli olabilir. Açık rızanızı aynı adrese yazarak geri çekebilirsiniz; bu, önceki hukuka uygun işlemleri etkilemez.'
          ]
        }
      ]
    },
    en: {
      intro:
        'This notice covers information submitted through the website pre-assessment form. Turkish Law No. 6698 (KVKK) applies; GDPR rights also apply where the processing falls within its scope.',
      sections: [
        {
          heading: 'Data Controller',
          paragraphs: [
            'The data controller is Doç. Dr. Müslüm Ergün (ME Urology Clinic), Bahçelievler Mahallesi, E-5 Karayolu / Kültür Sok No:1, 34180 Bahçelievler/İstanbul. Contact: info@meurology.com / 0532 063 09 69.'
          ]
        },
        {
          heading: 'Personal Data Processed',
          paragraphs: [
            'We collect directly from you through the form your name, country, email address or phone number, treatment selection and optional message. You may include health information in the message; the form does not upload files. The site server processes the submission and sends it to the clinic email inbox.',
            'If your selection or message contains health data, this special-category data is used for pre-assessment on the basis of your separate explicit consent.'
          ]
        },
        {
          heading: 'Purposes of Processing',
          paragraphs: [
            'Responding to your enquiry and carrying out a pre-assessment at your request. Treatment and travel coordination take place only if you choose to proceed.'
          ]
        },
        {
          heading: 'Legal Basis',
          paragraphs: [
            'Contact details are processed to take steps toward a possible healthcare service relationship at your request (KVKK Art. 5(2)(c)); health data is processed on your separate explicit consent (KVKK Art. 6(3)(a)). Applicable legal obligations may also require processing of relevant records.'
          ]
        },
        {
          heading: 'Transfers',
          paragraphs: [
            'Technical hosting and email delivery providers may process submissions. If you request treatment or travel coordination, necessary information may be shared with the relevant healthcare institution or service provider. If you choose a WhatsApp link, information you send there is handled by that separate service; the form is not submitted through WhatsApp.'
          ]
        },
        {
          heading: 'Retention Period',
          paragraphs: [
            'Enquiry emails are kept for as long as needed to conclude your request and meet any applicable legal obligations. When those purposes end, deletion or anonymisation is assessed.'
          ]
        },
        {
          heading: 'Your Rights (KVKK Art.11 / GDPR)',
          paragraphs: [
            'Contact info@meurology.com to exercise rights under KVKK Art. 11. If GDPR applies, relevant access, rectification, erasure, restriction and objection rights may also apply. You may withdraw explicit consent by writing to the same address; this does not affect earlier lawful processing.'
          ]
        }
      ]
    },
    ar: {
      intro:
        'يتعلق هذا الإشعار بالمعلومات التي ترسلها عبر نموذج التقييم الأولي. ينطبق القانون التركي رقم 6698 (KVKK)، وتنطبق حقوق GDPR أيضاً إذا كانت المعالجة ضمن نطاقه.',
      sections: [
        {
          heading: 'المتحكم في البيانات',
          paragraphs: [
            'المتحكم في البيانات هو Doç. Dr. Müslüm Ergün (ME Urology Clinic)، Bahçelievler Mahallesi, E-5 Karayolu / Kültür Sok No:1, 34180 Bahçelievler/İstanbul. للتواصل: info@meurology.com / 0532 063 09 69.'
          ]
        },
        {
          heading: 'البيانات الشخصية المعالَجة',
          paragraphs: [
            'نجمع منك مباشرة عبر النموذج الاسم والبلد والبريد الإلكتروني أو الهاتف ومجال العلاج المختار والرسالة الاختيارية. قد تتضمن الرسالة بيانات صحية؛ ولا يتيح النموذج رفع ملفات. يعالج خادم الموقع الطلب ويرسله إلى بريد العيادة.',
            'إذا احتوى اختيار العلاج أو الرسالة على بيانات صحية، تُستخدم هذه البيانات الخاصة للتقييم الأولي بناءً على موافقتك الصريحة المنفصلة.'
          ]
        },
        {
          heading: 'أغراض المعالجة',
          paragraphs: [
            'الرد على طلبك وإجراء تقييم أولي بناءً عليه. لا يبدأ تنسيق العلاج أو السفر إلا إذا اخترت متابعة الإجراءات.'
          ]
        },
        {
          heading: 'الأساس القانوني',
          paragraphs: [
            'تُعالج بيانات التواصل لاتخاذ خطوات نحو علاقة علاجية محتملة بناءً على طلبك (المادة 5/2-c من KVKK)، وتُعالج البيانات الصحية بناءً على موافقتك الصريحة المنفصلة (المادة 6/3-a). وقد تستلزم الالتزامات القانونية معالجة سجلات ذات صلة.'
          ]
        },
        {
          heading: 'نقل البيانات',
          paragraphs: [
            'قد يعالج مزودو الاستضافة والبريد الإلكتروني الطلبات لأغراض تقنية. وإذا طلبت تنسيق العلاج أو السفر، فقد تُشارك المعلومات اللازمة مع المؤسسة الصحية أو مقدم الخدمة المعني. وتخضع المعلومات التي ترسلها عبر رابط WhatsApp لذلك التطبيق المنفصل؛ ولا يُرسل النموذج عبر WhatsApp.'
          ]
        },
        {
          heading: 'مدة الاحتفاظ',
          paragraphs: [
            'تُحتفظ رسائل الطلبات للمدة اللازمة لإنهاء طلبك والوفاء بأي التزامات قانونية واجبة التطبيق. وبعد انتهاء هذه الأغراض، يُنظر في حذفها أو إخفاء هويتها.'
          ]
        },
        {
          heading: 'حقوقك (المادة 11 من KVKK / GDPR)',
          paragraphs: [
            'يمكنك التواصل عبر info@meurology.com لممارسة حقوقك بموجب المادة 11 من KVKK. وإذا انطبق GDPR، فقد تنطبق أيضاً حقوق الوصول والتصحيح والمحو وتقييد المعالجة والاعتراض. ويمكنك سحب موافقتك الصريحة عبر العنوان نفسه دون التأثير في مشروعية المعالجة السابقة.'
          ]
        }
      ]
    },
    de: {
      intro:
        'Diese Information betrifft Angaben im Vorabbewertungsformular der Website. Es gilt das türkische Datenschutzgesetz Nr. 6698 (KVKK); Rechte nach der DSGVO gelten zusätzlich, soweit deren Anwendungsbereich eröffnet ist.',
      sections: [
        {
          heading: 'Verantwortlicher',
          paragraphs: [
            'Verantwortlicher ist Doç. Dr. Müslüm Ergün (ME Urology Clinic), Bahçelievler Mahallesi, E-5 Karayolu / Kültür Sok No:1, 34180 Bahçelievler/İstanbul. Kontakt: info@meurology.com / 0532 063 09 69.'
          ]
        },
        {
          heading: 'Verarbeitete personenbezogene Daten',
          paragraphs: [
            'Über das Formular erheben wir direkt von Ihnen Name, Land, E-Mail-Adresse oder Telefonnummer, ausgewählten Behandlungsbereich und eine freiwillige Nachricht. Die Nachricht kann Gesundheitsangaben enthalten; ein Datei-Upload ist nicht möglich. Der Server sendet die Anfrage an das E-Mail-Postfach der Klinik.',
            'Gesundheitsangaben in Behandlungsauswahl oder Nachricht werden nur zur Vorabbewertung auf Grundlage Ihrer gesonderten ausdrücklichen Einwilligung verarbeitet.'
          ]
        },
        {
          heading: 'Verarbeitungszwecke',
          paragraphs: [
            'Beantwortung Ihrer Anfrage und Vorabbewertung auf Ihren Wunsch. Eine Behandlungs- oder Reisekoordination erfolgt erst, wenn Sie das Verfahren fortsetzen möchten.'
          ]
        },
        {
          heading: 'Rechtsgrundlage',
          paragraphs: [
            'Kontaktdaten werden zur Vorbereitung eines möglichen Behandlungsverhältnisses auf Ihre Anfrage verarbeitet (KVKK Art. 5 Abs. 2 lit. c); Gesundheitsangaben auf Grundlage Ihrer gesonderten ausdrücklichen Einwilligung (KVKK Art. 6 Abs. 3 lit. a). Gesetzliche Pflichten können die Verarbeitung relevanter Aufzeichnungen erfordern.'
          ]
        },
        {
          heading: 'Übermittlung',
          paragraphs: [
            'Technische Hosting- und E-Mail-Dienstleister können Anfragen verarbeiten. Wenn Sie eine Behandlungs- oder Reisekoordination wünschen, können dafür erforderliche Angaben an die betreffende Gesundheitseinrichtung oder Dienstleister weitergegeben werden. Angaben, die Sie über einen WhatsApp-Link senden, betreffen diesen separaten Dienst; das Formular wird nicht über WhatsApp versandt.'
          ]
        },
        {
          heading: 'Speicherdauer',
          paragraphs: [
            'Anfrage-E-Mails werden aufbewahrt, solange dies zur Bearbeitung der Anfrage und zur Erfüllung etwaiger gesetzlicher Pflichten erforderlich ist. Danach wird ihre Löschung oder Anonymisierung geprüft.'
          ]
        },
        {
          heading: 'Ihre Rechte (KVKK Art. 11 / DSGVO)',
          paragraphs: [
            'Für Rechte nach KVKK Art. 11 wenden Sie sich an info@meurology.com. Soweit die DSGVO gilt, können auch Auskunfts-, Berichtigungs-, Löschungs-, Einschränkungs- und Widerspruchsrechte bestehen. Ihre Einwilligung können Sie an dieselbe Adresse widerrufen; frühere rechtmäßige Verarbeitungen bleiben davon unberührt.'
          ]
        }
      ]
    },
    ru: {
      intro:
        'Это уведомление касается данных, отправленных через форму предварительной оценки на сайте. Применяется турецкий закон № 6698 (KVKK); права по GDPR также действуют, если обработка входит в сферу его применения.',
      sections: [
        {
          heading: 'Оператор данных',
          paragraphs: [
            'Оператор данных — Doç. Dr. Müslüm Ergün (ME Urology Clinic), Bahçelievler Mahallesi, E-5 Karayolu / Kültür Sok No:1, 34180 Bahçelievler/İstanbul. Контакт: info@meurology.com / 0532 063 09 69.'
          ]
        },
        {
          heading: 'Обрабатываемые персональные данные',
          paragraphs: [
            'Через форму мы получаем непосредственно от вас имя, страну, адрес электронной почты или телефон, выбранное направление лечения и необязательное сообщение. Сообщение может содержать сведения о здоровье; загрузка файлов недоступна. Сервер отправляет заявку на почту клиники.',
            'Сведения о здоровье в выбранном направлении или сообщении используются для предварительной оценки на основании вашего отдельного явного согласия.'
          ]
        },
        {
          heading: 'Цели обработки',
          paragraphs: [
            'Ответ на ваш запрос и проведение предварительной оценки по вашему желанию. Координация лечения или поездки начинается только если вы решите продолжить.'
          ]
        },
        {
          heading: 'Правовое основание',
          paragraphs: [
            'Контактные данные обрабатываются для подготовки возможного оказания медицинских услуг по вашему запросу (KVKK, ст. 5/2-c); сведения о здоровье — на основании отдельного явного согласия (KVKK, ст. 6/3-a). Применимые юридические обязанности могут требовать обработки соответствующих записей.'
          ]
        },
        {
          heading: 'Передача данных',
          paragraphs: [
            'Технические поставщики хостинга и электронной почты могут обрабатывать заявки. При запросе координации лечения или поездки необходимые сведения могут передаваться соответствующей клинике или поставщику услуг. Информация, отправленная вами через ссылку WhatsApp, обрабатывается этим отдельным сервисом; форма через WhatsApp не отправляется.'
          ]
        },
        {
          heading: 'Срок хранения',
          paragraphs: [
            'Письма с заявками хранятся столько, сколько нужно для завершения запроса и выполнения применимых юридических обязанностей. Затем рассматривается удаление или обезличивание.'
          ]
        },
        {
          heading: 'Ваши права (ст. 11 KVKK / GDPR)',
          paragraphs: [
            'Для реализации прав по ст. 11 KVKK пишите на info@meurology.com. Если применяется GDPR, могут действовать права доступа, исправления, удаления, ограничения обработки и возражения. Явное согласие можно отозвать по тому же адресу; это не влияет на законность предыдущей обработки.'
          ]
        }
      ]
    }
  }
};

export const consentDoc: LegalDoc = {
  lastUpdated: '2026-09-21',
  i18n: {
    tr: {
      intro:
        'Bu açık rıza, ön değerlendirme formunda paylaşmayı seçtiğiniz sağlık bilgileri içindir; aydınlatma metninden ayrıdır.',
      sections: [
        {
          heading: 'Açık Rıza Beyanı',
          paragraphs: [
            'Formdaki tedavi seçimi ve isteğe bağlı mesajımda yer alan sağlık bilgilerinin, Doç. Dr. Müslüm Ergün tarafından ön değerlendirme amacıyla işlenmesine açık rıza veriyorum.',
            'Bu rızayı info@meurology.com adresine yazarak geri çekebileceğimi biliyorum. Geri çekme, önceki hukuka uygun işlemleri etkilemez.'
          ]
        }
      ]
    },
    en: {
      intro:
        'This consent concerns health information you choose to share in the pre-assessment form; it is separate from the privacy notice.',
      sections: [
        {
          heading: 'Explicit Consent Statement',
          paragraphs: [
            'I explicitly consent to Doç. Dr. Müslüm Ergün processing health information in my treatment selection and optional message for pre-assessment.',
            'I can withdraw this consent by writing to info@meurology.com. Withdrawal does not affect earlier lawful processing.'
          ]
        }
      ]
    },
    ar: {
      intro:
        'تتعلق هذه الموافقة بالمعلومات الصحية التي تختار مشاركتها في نموذج التقييم الأولي، وهي منفصلة عن إشعار الخصوصية.',
      sections: [
        {
          heading: 'إقرار الموافقة الصريحة',
          paragraphs: [
            'أوافق صراحةً على معالجة المعلومات الصحية الواردة في اختيار العلاج والرسالة الاختيارية بواسطة Doç. Dr. Müslüm Ergün لغرض التقييم الأولي.',
            'يمكنني سحب هذه الموافقة بالكتابة إلى info@meurology.com، ولا يؤثر السحب في مشروعية المعالجة السابقة.'
          ]
        }
      ]
    },
    de: {
      intro:
        'Diese Einwilligung betrifft Gesundheitsangaben, die Sie im Vorabbewertungsformular mitteilen; sie ist von der Datenschutzerklärung getrennt.',
      sections: [
        {
          heading: 'Erklärung der ausdrücklichen Einwilligung',
          paragraphs: [
            'Ich willige ausdrücklich ein, dass Doç. Dr. Müslüm Ergün Gesundheitsangaben in meiner Behandlungsauswahl und freiwilligen Nachricht zur Vorabbewertung verarbeitet.',
            'Ich kann diese Einwilligung über info@meurology.com widerrufen. Der Widerruf berührt eine frühere rechtmäßige Verarbeitung nicht.'
          ]
        }
      ]
    },
    ru: {
      intro:
        'Это согласие касается сведений о здоровье, которые вы решите указать в форме предварительной оценки; оно отдельно от уведомления о конфиденциальности.',
      sections: [
        {
          heading: 'Заявление о явном согласии',
          paragraphs: [
            'Я явно соглашаюсь на обработку Doç. Dr. Müslüm Ergün сведений о здоровье в выбранном направлении лечения и необязательном сообщении для предварительной оценки.',
            'Я могу отозвать согласие, написав на info@meurology.com. Отзыв не влияет на законность предыдущей обработки.'
          ]
        }
      ]
    }
  }
};
