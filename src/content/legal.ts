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
    },
    fr: {
      intro:
        'Le présent avis couvre les informations transmises via le formulaire de pré-évaluation du site. La loi turque n° 6698 (KVKK) s’applique ; les droits issus du RGPD s’appliquent également lorsque le traitement entre dans son champ.',
      sections: [
        {
          heading: 'Responsable du traitement',
          paragraphs: [
            'Le responsable du traitement est le Doç. Dr. Müslüm Ergün (ME Urology Clinic), Bahçelievler Mahallesi, E-5 Karayolu / Kültür Sok No:1, 34180 Bahçelievler/İstanbul. Contact : info@meurology.com / 0532 063 09 69.'
          ]
        },
        {
          heading: 'Données personnelles traitées',
          paragraphs: [
            'Nous recueillons directement auprès de vous, via le formulaire, vos nom et prénom, pays, adresse e-mail ou numéro de téléphone, le traitement sélectionné et un message facultatif. Vous pouvez mentionner des informations de santé dans ce message ; le formulaire ne permet pas d’envoyer de fichiers. Le serveur du site traite l’envoi et le transmet à la boîte e-mail de la clinique.',
            'Si votre sélection ou votre message contient des données de santé, ces données sensibles sont utilisées à des fins de pré-évaluation sur le fondement de votre consentement explicite distinct.'
          ]
        },
        {
          heading: 'Finalités du traitement',
          paragraphs: [
            'Répondre à votre demande et réaliser une pré-évaluation à votre demande. La coordination du traitement et du voyage n’intervient que si vous décidez de poursuivre.'
          ]
        },
        {
          heading: 'Base légale',
          paragraphs: [
            'Les coordonnées sont traitées pour prendre, à votre demande, des mesures préalables à une éventuelle relation de soins (art. 5(2)(c) KVKK) ; les données de santé sont traitées sur la base de votre consentement explicite distinct (art. 6(3)(a) KVKK). Des obligations légales applicables peuvent également imposer le traitement de certains enregistrements.'
          ]
        },
        {
          heading: 'Transferts',
          paragraphs: [
            'Les prestataires d’hébergement technique et d’acheminement des e-mails peuvent traiter les envois. Si vous demandez une coordination du traitement ou du voyage, les informations nécessaires peuvent être communiquées à l’établissement de santé ou au prestataire concerné. Si vous utilisez un lien WhatsApp, les informations que vous y envoyez relèvent de ce service distinct ; le formulaire n’est pas transmis via WhatsApp.'
          ]
        },
        {
          heading: 'Durée de conservation',
          paragraphs: [
            'Les e-mails de demande sont conservés aussi longtemps que nécessaire pour traiter votre demande et satisfaire aux obligations légales applicables. Lorsque ces finalités prennent fin, la suppression ou l’anonymisation est évaluée.'
          ]
        },
        {
          heading: 'Vos droits (art. 11 KVKK / RGPD)',
          paragraphs: [
            'Écrivez à info@meurology.com pour exercer vos droits au titre de l’article 11 de la KVKK. Si le RGPD s’applique, les droits d’accès, de rectification, d’effacement, de limitation et d’opposition peuvent également s’appliquer. Vous pouvez retirer votre consentement explicite à la même adresse ; ce retrait n’affecte pas la licéité du traitement antérieur.'
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
    },
    fr: {
      intro:
        'Ce consentement porte sur les informations de santé que vous choisissez de partager dans le formulaire de pré-évaluation ; il est distinct de l’avis de confidentialité.',
      sections: [
        {
          heading: 'Déclaration de consentement explicite',
          paragraphs: [
            'Je consens expressément à ce que le Doç. Dr. Müslüm Ergün traite, à des fins de pré-évaluation, les informations de santé figurant dans le traitement que j’ai sélectionné et dans mon message facultatif.',
            'Je peux retirer ce consentement en écrivant à info@meurology.com. Ce retrait n’affecte pas la licéité du traitement antérieur.'
          ]
        }
      ]
    }
  }
};

/**
 * ÇEREZ POLİTİKASI (prompt m.4.1 — yasal/cerez-politikasi).
 * Metin SİTENİN GERÇEK DAVRANIŞINI anlatır: analitik yalnızca onaydan sonra
 * çalışır, Google Haritalar tıklanana kadar yüklenmez. Davranış değişirse
 * bu metin de güncellenmelidir.
 */
export const cookiesDoc: LegalDoc = {
  lastUpdated: '2026-10-04',
  i18n: {
    tr: {
      intro:
        'Bu metin, bu sitede hangi çerezlerin ve benzeri teknolojilerin kullanıldığını, ne amaçla kullanıldığını ve bunları nasıl yönetebileceğinizi açıklar.',
      sections: [
        {
          heading: 'Çerez nedir?',
          paragraphs: [
            'Çerez, bir siteyi ziyaret ettiğinizde tarayıcınıza kaydedilen küçük bir metin dosyasıdır. Tarayıcınızın yerel depolaması ve benzeri teknolojiler de bu metnin kapsamındadır.'
          ]
        },
        {
          heading: 'Bu sitede kullanılan çerezler',
          paragraphs: [
            'Zorunlu çerezler: Sitenin çalışması için gereklidir ve onay gerektirmez. Dil tercihinizi hatırlayan çerez bu gruptadır. Koyu/açık tema tercihiniz ise tarayıcınızın yerel depolamasında tutulur ve sunucuya gönderilmez.',
            'Analitik çerezler: Hangi sayfaların ne kadar görüntülendiğini anlamak için kullanılır. Bu çerezler yalnızca siz onay verdikten sonra çalışır. Onay vermez ya da reddederseniz hiçbir analitik çağrısı yapılmaz.',
            'Pazarlama çerezleri: Şu anda kullanılmamaktadır. İleride kullanılması hâlinde bu metin güncellenir ve ayrıca onayınız istenir.'
          ]
        },
        {
          heading: 'Üçüncü taraf içerikler',
          paragraphs: [
            'İletişim sayfasında Google Haritalar gömülüdür. Harita, siz tıklayıp yüklenmesini istemediğiniz sürece çalıştırılmaz; yüklendiğinde Google, IP adresiniz dâhil bazı verileri alabilir.',
            'Sosyal medya ve kaynak bağlantıları yalnızca bağlantıdır; tıklamadığınız sürece ilgili platforma veri gitmez.'
          ]
        },
        {
          heading: 'Seçiminizi nasıl yönetirsiniz?',
          paragraphs: [
            'Siteye ilk girişinizde seçim yapmanız istenir. Seçiminizi daha sonra sayfanın altındaki çerez tercihleri bağlantısından değiştirebilirsiniz.',
            'Çerezleri tarayıcı ayarlarınızdan da silebilir veya engelleyebilirsiniz. Zorunlu çerezleri engellerseniz sitenin bazı bölümleri düzgün çalışmayabilir.'
          ]
        },
        {
          heading: 'Saklama süreleri',
          paragraphs: [
            'Dil tercihi çerezi en çok bir yıl saklanır. Çerez tercihiniz, yeniden sorulmaması için tarayıcınızda tutulur. Analitik çerezler, yalnızca onay verdiyseniz ve sağlayıcının belirlediği süre boyunca (genellikle en çok 24 ay) saklanır.'
          ]
        },
        {
          heading: 'Haklarınız ve iletişim',
          paragraphs: [
            'Kişisel verilerinize ilişkin haklarınız ve başvuru yolu için KVKK / GDPR Aydınlatma Metni’ne bakabilirsiniz. Sorularınız için: info@meurology.com'
          ]
        }
      ]
    },
    en: {
      intro:
        'This notice explains which cookies and similar technologies are used on this site, why they are used and how you can manage them.',
      sections: [
        {
          heading: 'What is a cookie?',
          paragraphs: [
            'A cookie is a small text file saved to your browser when you visit a site. Your browser’s local storage and similar technologies are also covered by this notice.'
          ]
        },
        {
          heading: 'Cookies used on this site',
          paragraphs: [
            'Strictly necessary cookies: required for the site to work and set without consent. The cookie that remembers your language choice belongs to this group. Your light/dark theme preference is held in your browser’s local storage and is not sent to the server.',
            'Analytics cookies: used to understand which pages are viewed and how often. These run only after you have given consent. If you decline or make no choice, no analytics request is sent at all.',
            'Marketing cookies: none are currently in use. If they are introduced, this notice will be updated and your consent will be sought separately.'
          ]
        },
        {
          heading: 'Third-party content',
          paragraphs: [
            'A Google Map is embedded on the contact page. It is not loaded unless you click to load it; once loaded, Google may receive certain data including your IP address.',
            'Social media and source links are links only; no data reaches those platforms unless you click them.'
          ]
        },
        {
          heading: 'Managing your choice',
          paragraphs: [
            'You are asked to choose on your first visit. You can change that choice at any time from the cookie preferences link at the bottom of the page.',
            'You can also delete or block cookies in your browser settings. If you block strictly necessary cookies, parts of the site may not work properly.'
          ]
        },
        {
          heading: 'Retention periods',
          paragraphs: [
            'The language preference cookie is kept for at most one year. Your cookie choice is stored in your browser so that you are not asked again. Analytics cookies are kept only if you have consented, for the period set by the provider (usually no more than 24 months).'
          ]
        },
        {
          heading: 'Your rights and contact',
          paragraphs: [
            'For your rights regarding personal data and how to exercise them, please see the KVKK / GDPR Privacy Notice. Questions: info@meurology.com'
          ]
        }
      ]
    },
    de: {
      intro:
        'Dieser Hinweis erläutert, welche Cookies und ähnlichen Technologien auf dieser Website eingesetzt werden, zu welchem Zweck und wie Sie sie verwalten können.',
      sections: [
        {
          heading: 'Was ist ein Cookie?',
          paragraphs: [
            'Ein Cookie ist eine kleine Textdatei, die beim Besuch einer Website in Ihrem Browser gespeichert wird. Auch der lokale Speicher Ihres Browsers und ähnliche Technologien fallen unter diesen Hinweis.'
          ]
        },
        {
          heading: 'Auf dieser Website eingesetzte Cookies',
          paragraphs: [
            'Unbedingt erforderliche Cookies: Sie sind für den Betrieb der Website nötig und werden ohne Einwilligung gesetzt. Dazu gehört das Cookie, das Ihre Sprachwahl speichert. Ihre Einstellung für helles oder dunkles Design wird im lokalen Speicher Ihres Browsers gehalten und nicht an den Server gesendet.',
            'Analyse-Cookies: Sie dienen dazu nachzuvollziehen, welche Seiten wie oft aufgerufen werden. Sie laufen ausschließlich, nachdem Sie eingewilligt haben. Lehnen Sie ab oder treffen Sie keine Wahl, wird keinerlei Analyseanfrage gesendet.',
            'Marketing-Cookies: derzeit nicht im Einsatz. Sollten sie eingeführt werden, wird dieser Hinweis aktualisiert und Ihre Einwilligung gesondert eingeholt.'
          ]
        },
        {
          heading: 'Inhalte Dritter',
          paragraphs: [
            'Auf der Kontaktseite ist eine Google-Karte eingebunden. Sie wird erst geladen, wenn Sie das Laden durch Anklicken veranlassen; danach kann Google bestimmte Daten einschließlich Ihrer IP-Adresse erhalten.',
            'Links zu sozialen Medien und Quellen sind reine Verweise; ohne Ihren Klick gelangen keine Daten an die jeweilige Plattform.'
          ]
        },
        {
          heading: 'So verwalten Sie Ihre Auswahl',
          paragraphs: [
            'Beim ersten Besuch werden Sie um eine Auswahl gebeten. Diese können Sie jederzeit über den Link zu den Cookie-Einstellungen am Seitenende ändern.',
            'Sie können Cookies auch in Ihren Browsereinstellungen löschen oder blockieren. Werden unbedingt erforderliche Cookies blockiert, funktionieren Teile der Website möglicherweise nicht richtig.'
          ]
        },
        {
          heading: 'Speicherdauer',
          paragraphs: [
            'Das Cookie für die Sprachwahl wird höchstens ein Jahr gespeichert. Ihre Cookie-Auswahl wird in Ihrem Browser abgelegt, damit Sie nicht erneut gefragt werden. Analyse-Cookies werden nur bei erteilter Einwilligung und für die vom Anbieter festgelegte Dauer gespeichert (in der Regel höchstens 24 Monate).'
          ]
        },
        {
          heading: 'Ihre Rechte und Kontakt',
          paragraphs: [
            'Ihre Rechte bezüglich personenbezogener Daten und den Weg zur Ausübung finden Sie in der KVKK / DSGVO-Datenschutzerklärung. Fragen: info@meurology.com'
          ]
        }
      ]
    },
    fr: {
      intro:
        'Cet avis explique quels cookies et technologies similaires sont utilisés sur ce site, à quelles fins et comment vous pouvez les gérer.',
      sections: [
        {
          heading: 'Qu’est-ce qu’un cookie ?',
          paragraphs: [
            'Un cookie est un petit fichier texte enregistré dans votre navigateur lorsque vous visitez un site. Le stockage local de votre navigateur et les technologies similaires relèvent également de cet avis.'
          ]
        },
        {
          heading: 'Cookies utilisés sur ce site',
          paragraphs: [
            'Cookies strictement nécessaires : indispensables au fonctionnement du site et déposés sans consentement. Le cookie qui mémorise votre choix de langue en fait partie. Votre préférence de thème clair ou sombre est conservée dans le stockage local de votre navigateur et n’est pas transmise au serveur.',
            'Cookies de mesure d’audience : ils servent à comprendre quelles pages sont consultées et à quelle fréquence. Ils ne se déclenchent qu’après votre consentement. Si vous refusez ou ne faites aucun choix, aucune requête de mesure n’est envoyée.',
            'Cookies publicitaires : aucun n’est utilisé actuellement. S’ils venaient à l’être, cet avis serait mis à jour et votre consentement recueilli séparément.'
          ]
        },
        {
          heading: 'Contenus tiers',
          paragraphs: [
            'Une carte Google est intégrée à la page de contact. Elle n’est pas chargée tant que vous ne cliquez pas pour la charger ; une fois chargée, Google peut recevoir certaines données, dont votre adresse IP.',
            'Les liens vers les réseaux sociaux et les sources sont de simples liens ; aucune donnée ne parvient à ces plateformes sans que vous cliquiez.'
          ]
        },
        {
          heading: 'Gérer votre choix',
          paragraphs: [
            'Il vous est demandé de choisir lors de votre première visite. Vous pouvez modifier ce choix à tout moment depuis le lien « préférences cookies » en bas de page.',
            'Vous pouvez également supprimer ou bloquer les cookies dans les réglages de votre navigateur. Si vous bloquez les cookies strictement nécessaires, certaines parties du site risquent de ne pas fonctionner correctement.'
          ]
        },
        {
          heading: 'Durées de conservation',
          paragraphs: [
            'Le cookie de préférence linguistique est conservé un an au maximum. Votre choix en matière de cookies est enregistré dans votre navigateur afin de ne pas vous le redemander. Les cookies de mesure d’audience ne sont conservés qu’en cas de consentement, pour la durée fixée par le fournisseur (généralement 24 mois au plus).'
          ]
        },
        {
          heading: 'Vos droits et contact',
          paragraphs: [
            'Pour vos droits relatifs aux données personnelles et la manière de les exercer, veuillez consulter l’avis de confidentialité KVKK / RGPD. Questions : info@meurology.com'
          ]
        }
      ]
    },
    ru: {
      intro:
        'В этом документе объясняется, какие файлы cookie и схожие технологии используются на сайте, с какой целью и как вы можете ими управлять.',
      sections: [
        {
          heading: 'Что такое cookie?',
          paragraphs: [
            'Cookie — это небольшой текстовый файл, который сохраняется в вашем браузере при посещении сайта. Локальное хранилище браузера и схожие технологии также подпадают под этот документ.'
          ]
        },
        {
          heading: 'Какие cookie используются на сайте',
          paragraphs: [
            'Строго необходимые cookie: нужны для работы сайта и устанавливаются без согласия. К ним относится файл, запоминающий выбранный язык. Выбор светлой или тёмной темы хранится в локальном хранилище браузера и на сервер не передаётся.',
            'Аналитические cookie: служат для понимания того, какие страницы и как часто просматривают. Они включаются только после вашего согласия. Если вы откажетесь или не сделаете выбор, ни один аналитический запрос отправлен не будет.',
            'Рекламные cookie: сейчас не используются. Если они появятся, этот документ будет обновлён, а ваше согласие запрошено отдельно.'
          ]
        },
        {
          heading: 'Содержимое третьих сторон',
          paragraphs: [
            'На странице контактов встроена карта Google. Она не загружается, пока вы сами не нажмёте на загрузку; после загрузки Google может получить некоторые данные, включая ваш IP-адрес.',
            'Ссылки на социальные сети и источники — это только ссылки; без вашего нажатия никакие данные на эти площадки не уходят.'
          ]
        },
        {
          heading: 'Как управлять своим выбором',
          paragraphs: [
            'При первом посещении вам будет предложено сделать выбор. Изменить его можно в любое время по ссылке настроек cookie внизу страницы.',
            'Удалить или заблокировать cookie можно и в настройках браузера. Если заблокировать строго необходимые cookie, отдельные разделы сайта могут работать неправильно.'
          ]
        },
        {
          heading: 'Сроки хранения',
          paragraphs: [
            'Файл с выбором языка хранится не более одного года. Ваш выбор в отношении cookie сохраняется в браузере, чтобы вопрос не повторялся. Аналитические cookie хранятся только при наличии согласия и в течение срока, установленного поставщиком (обычно не более 24 месяцев).'
          ]
        },
        {
          heading: 'Ваши права и связь с нами',
          paragraphs: [
            'О ваших правах в отношении персональных данных и порядке обращения см. Уведомление о конфиденциальности KVKK / GDPR. Вопросы: info@meurology.com'
          ]
        }
      ]
    },
    ar: {
      intro:
        'يوضّح هذا النص أي ملفات تعريف الارتباط والتقنيات المشابهة تُستخدم في هذا الموقع، ولأي غرض، وكيف يمكنك إدارتها.',
      sections: [
        {
          heading: 'ما هو ملف تعريف الارتباط؟',
          paragraphs: [
            'ملف تعريف الارتباط ملف نصي صغير يُحفَظ في متصفحك عند زيارة موقع ما. ويشمل هذا النص أيضًا التخزين المحلي في متصفحك والتقنيات المشابهة.'
          ]
        },
        {
          heading: 'الملفات المستخدمة في هذا الموقع',
          paragraphs: [
            'الملفات الضرورية: لازمة لعمل الموقع وتُوضَع من دون موافقة. ومنها الملف الذي يتذكر لغتك المختارة. أما تفضيلك للمظهر الفاتح أو الداكن فيُحفَظ في التخزين المحلي للمتصفح ولا يُرسَل إلى الخادم.',
            'ملفات التحليلات: تُستخدم لمعرفة الصفحات التي تُشاهَد وعدد مشاهداتها. ولا تعمل إلا بعد موافقتك. فإن رفضت أو لم تختر شيئًا فلن يُرسَل أي طلب تحليلي على الإطلاق.',
            'ملفات التسويق: غير مستخدمة حاليًا. وإن استُخدمت مستقبلًا فسيُحدَّث هذا النص وتُطلَب موافقتك على نحو منفصل.'
          ]
        },
        {
          heading: 'محتوى الأطراف الثالثة',
          paragraphs: [
            'في صفحة التواصل خريطة Google مضمّنة. ولا تُحمَّل ما لم تنقر أنت لتحميلها؛ وبعد تحميلها قد تتلقى Google بعض البيانات ومنها عنوان IP الخاص بك.',
            'أما روابط وسائل التواصل والمصادر فهي روابط فقط؛ ولا تصل أي بيانات إلى تلك المنصات ما لم تنقر عليها.'
          ]
        },
        {
          heading: 'كيف تدير اختيارك',
          paragraphs: [
            'يُطلَب منك الاختيار عند أول زيارة. ويمكنك تغييره في أي وقت من رابط تفضيلات ملفات تعريف الارتباط أسفل الصفحة.',
            'كما يمكنك حذف الملفات أو حظرها من إعدادات متصفحك. وإذا حظرت الملفات الضرورية فقد لا تعمل بعض أجزاء الموقع على نحو سليم.'
          ]
        },
        {
          heading: 'مدد الحفظ',
          paragraphs: [
            'يُحفَظ ملف تفضيل اللغة سنة واحدة على الأكثر. ويُحفَظ اختيارك بشأن ملفات تعريف الارتباط في متصفحك حتى لا يتكرر السؤال. أما ملفات التحليلات فتُحفَظ فقط عند وجود موافقة وللمدة التي يحددها المزوّد (24 شهرًا على الأكثر عادةً).'
          ]
        },
        {
          heading: 'حقوقك والتواصل',
          paragraphs: [
            'لمعرفة حقوقك المتعلقة بالبيانات الشخصية وطريقة ممارستها، يُرجى مراجعة إشعار الخصوصية KVKK / GDPR. للاستفسار: info@meurology.com'
          ]
        }
      ]
    }
  }
};

/**
 * KULLANIM KOŞULLARI (prompt m.4.1 — yasal/kullanim-kosullari).
 * Hekim-hasta ilişkisinin siteyle KURULMADIĞI açıkça yazılıdır.
 * WhatsApp'ın üçüncü taraf platform olduğu uyarısı dâhildir.
 */
export const termsDoc: LegalDoc = {
  lastUpdated: '2026-10-04',
  i18n: {
    tr: {
      intro:
        'Bu koşullar, bu sitenin kullanımını düzenler. Siteyi kullanarak aşağıdakileri kabul etmiş olursunuz. Kabul etmiyorsanız lütfen siteyi kullanmayın.',
      sections: [
        {
          heading: 'Sitenin amacı',
          paragraphs: [
            'Site, Doç. Dr. Müslüm Ergün’ün ürolojik cerrahi alanındaki çalışma konuları hakkında genel bilgi sunar. Sitede hizmet satışı yapılmaz ve içerik tanı ya da tedavi önerisi değildir.',
            'Siteyi okumanız, form doldurmanız veya mesaj göndermeniz hekim-hasta ilişkisi kurmaz. Bu ilişki ancak muayene ve kabul üzerine doğar.'
          ]
        },
        {
          heading: 'Fikrî mülkiyet',
          paragraphs: [
            'Sitedeki metinler, görseller, şemalar ve kod site sahibine aittir. Kaynak göstererek kısa alıntı yapabilirsiniz; içeriğin tamamının veya önemli bir bölümünün izinsiz çoğaltılması, yayımlanması ya da ticari amaçla kullanılması serbest değildir.'
          ]
        },
        {
          heading: 'Kullanıcının yükümlülükleri',
          paragraphs: [
            'Form ve iletişim kanallarını yalnızca kendi sağlık durumunuza ilişkin başvuru için kullanın. Yanıltıcı bilgi vermemeniz, başkasının verilerini onayı olmadan paylaşmamanız ve sitenin işleyişini engellemeye yönelik girişimlerde bulunmamanız beklenir.'
          ]
        },
        {
          heading: 'İletişim kanalları hakkında uyarı',
          paragraphs: [
            'WhatsApp üzerinden gönderdiğiniz mesajlar, ilgili platformun kendi koşullarına tabidir ve bizim denetimimizde değildir. Tahlil, görüntüleme veya patoloji gibi hassas belgeleri göndermeden önce bunu göz önünde bulundurun; resmî başvuru için e-posta ya da site formunu tercih edin.'
          ]
        },
        {
          heading: 'Dış bağlantılar',
          paragraphs: [
            'Site, kılavuz ve kaynak bağlantıları içerir. Bağlantı verilen sitelerin içeriğinden ve gizlilik uygulamalarından sorumlu değiliz.'
          ]
        },
        {
          heading: 'Sorumluluğun sınırı',
          paragraphs: [
            'İçeriğin doğru ve güncel olması için özen gösterilir; ancak kesintisizlik, hatasızlık veya belirli bir sonuç taahhüt edilmez. Sitedeki bilgilere dayanarak aldığınız kararların sonuçlarından site sahibi sorumlu tutulamaz.',
            'Bu sınırlama, mevzuatın emredici hükümlerini ve hekimin mesleki sorumluluğunu ortadan kaldırmaz.'
          ]
        },
        {
          heading: 'Değişiklikler',
          paragraphs: [
            'Bu koşullar güncellenebilir. Yürürlükteki sürümün tarihi sayfanın başında belirtilir.'
          ]
        },
        {
          heading: 'Uygulanacak hukuk',
          paragraphs: [
            'Bu koşullara Türk hukuku uygulanır. Uyuşmazlıklarda İstanbul mahkemeleri ve icra daireleri yetkilidir. Tüketici mevzuatından doğan haklarınız saklıdır.'
          ]
        }
      ]
    },
    en: {
      intro:
        'These terms govern your use of this site. By using it you accept what follows. If you do not accept them, please do not use the site.',
      sections: [
        {
          heading: 'Purpose of the site',
          paragraphs: [
            'The site provides general information about the areas of urological surgery in which Assoc. Prof. Müslüm Ergün works. No service is sold on the site and the content is not a diagnosis or a treatment recommendation.',
            'Reading the site, completing a form or sending a message does not create a doctor–patient relationship. That relationship arises only upon examination and acceptance.'
          ]
        },
        {
          heading: 'Intellectual property',
          paragraphs: [
            'The texts, images, diagrams and code on this site belong to the site owner. You may quote briefly with attribution; reproducing, publishing or commercially using the whole or a substantial part of the content without permission is not permitted.'
          ]
        },
        {
          heading: 'Your obligations',
          paragraphs: [
            'Use the forms and contact channels only to enquire about your own health. You are expected not to provide misleading information, not to share another person’s data without their consent, and not to attempt to disrupt the operation of the site.'
          ]
        },
        {
          heading: 'A note about contact channels',
          paragraphs: [
            'Messages you send through WhatsApp are subject to that platform’s own terms and are outside our control. Bear this in mind before sending sensitive documents such as test results, imaging or pathology reports; for a formal enquiry, please use email or the site form.'
          ]
        },
        {
          heading: 'External links',
          paragraphs: [
            'The site contains links to guidelines and sources. We are not responsible for the content or the privacy practices of the sites linked to.'
          ]
        },
        {
          heading: 'Limitation of liability',
          paragraphs: [
            'Care is taken to keep the content accurate and up to date; however, no undertaking is given as to uninterrupted availability, freedom from error or any particular outcome. The site owner cannot be held liable for the consequences of decisions you take on the basis of information on this site.',
            'This limitation does not set aside mandatory provisions of the law or the physician’s professional responsibility.'
          ]
        },
        {
          heading: 'Changes',
          paragraphs: [
            'These terms may be updated. The date of the version in force is shown at the top of the page.'
          ]
        },
        {
          heading: 'Governing law',
          paragraphs: [
            'Turkish law applies to these terms. The courts and enforcement offices of Istanbul have jurisdiction over disputes. Your rights under consumer legislation are reserved.'
          ]
        }
      ]
    },
    de: {
      intro:
        'Diese Bedingungen regeln die Nutzung dieser Website. Mit der Nutzung erkennen Sie das Folgende an. Wenn Sie nicht einverstanden sind, nutzen Sie die Website bitte nicht.',
      sections: [
        {
          heading: 'Zweck der Website',
          paragraphs: [
            'Die Website bietet allgemeine Informationen zu den urologisch-chirurgischen Arbeitsgebieten von Doz. Dr. Müslüm Ergün. Es werden keine Leistungen verkauft, und die Inhalte stellen weder eine Diagnose noch eine Behandlungsempfehlung dar.',
            'Das Lesen der Website, das Ausfüllen eines Formulars oder das Senden einer Nachricht begründet kein Arzt-Patienten-Verhältnis. Dieses entsteht erst mit Untersuchung und Annahme.'
          ]
        },
        {
          heading: 'Geistiges Eigentum',
          paragraphs: [
            'Texte, Bilder, Grafiken und Code dieser Website gehören dem Websitebetreiber. Kurze Zitate mit Quellenangabe sind zulässig; die Vervielfältigung, Veröffentlichung oder gewerbliche Nutzung der Inhalte ganz oder in wesentlichen Teilen ohne Erlaubnis ist nicht gestattet.'
          ]
        },
        {
          heading: 'Pflichten der Nutzerinnen und Nutzer',
          paragraphs: [
            'Nutzen Sie Formulare und Kontaktwege ausschließlich für Anfragen zu Ihrer eigenen Gesundheit. Es wird erwartet, dass Sie keine irreführenden Angaben machen, keine Daten anderer Personen ohne deren Einwilligung weitergeben und nicht versuchen, den Betrieb der Website zu stören.'
          ]
        },
        {
          heading: 'Hinweis zu den Kontaktwegen',
          paragraphs: [
            'Nachrichten, die Sie über WhatsApp senden, unterliegen den Bedingungen dieser Plattform und liegen außerhalb unseres Einflussbereichs. Bedenken Sie dies, bevor Sie sensible Unterlagen wie Laborwerte, Bildgebung oder Pathologiebefunde übermitteln; für eine förmliche Anfrage nutzen Sie bitte E-Mail oder das Formular der Website.'
          ]
        },
        {
          heading: 'Externe Links',
          paragraphs: [
            'Die Website enthält Links zu Leitlinien und Quellen. Für Inhalte und Datenschutzpraktiken der verlinkten Seiten sind wir nicht verantwortlich.'
          ]
        },
        {
          heading: 'Haftungsbeschränkung',
          paragraphs: [
            'Es wird Sorgfalt darauf verwendet, die Inhalte richtig und aktuell zu halten; eine ununterbrochene Verfügbarkeit, Fehlerfreiheit oder ein bestimmtes Ergebnis wird jedoch nicht zugesagt. Für Folgen von Entscheidungen, die Sie auf Grundlage der Informationen dieser Website treffen, haftet der Websitebetreiber nicht.',
            'Diese Beschränkung berührt weder zwingende gesetzliche Vorschriften noch die berufliche Verantwortung des Arztes.'
          ]
        },
        {
          heading: 'Änderungen',
          paragraphs: [
            'Diese Bedingungen können aktualisiert werden. Das Datum der geltenden Fassung steht am Seitenanfang.'
          ]
        },
        {
          heading: 'Anwendbares Recht',
          paragraphs: [
            'Auf diese Bedingungen findet türkisches Recht Anwendung. Für Streitigkeiten sind die Gerichte und Vollstreckungsbehörden in Istanbul zuständig. Ihre Rechte nach dem Verbraucherrecht bleiben unberührt.'
          ]
        }
      ]
    },
    fr: {
      intro:
        'Les présentes conditions régissent l’utilisation de ce site. En l’utilisant, vous acceptez ce qui suit. Si vous ne les acceptez pas, veuillez ne pas utiliser le site.',
      sections: [
        {
          heading: 'Objet du site',
          paragraphs: [
            'Le site fournit des informations générales sur les domaines de chirurgie urologique dans lesquels exerce le Dr Müslüm Ergün, maître de conférences. Aucun service n’y est vendu et le contenu ne constitue ni un diagnostic ni une recommandation de traitement.',
            'Lire le site, remplir un formulaire ou envoyer un message ne crée pas de relation médecin-patient. Celle-ci ne naît qu’après examen et acceptation.'
          ]
        },
        {
          heading: 'Propriété intellectuelle',
          paragraphs: [
            'Les textes, images, schémas et le code de ce site appartiennent à son propriétaire. De courtes citations avec mention de la source sont possibles ; la reproduction, la publication ou l’usage commercial de tout ou d’une partie substantielle du contenu sans autorisation ne sont pas permis.'
          ]
        },
        {
          heading: 'Obligations de l’utilisateur',
          paragraphs: [
            'N’utilisez les formulaires et les canaux de contact que pour une demande concernant votre propre santé. Il vous est demandé de ne pas fournir d’informations trompeuses, de ne pas communiquer les données d’un tiers sans son accord et de ne pas tenter de perturber le fonctionnement du site.'
          ]
        },
        {
          heading: 'Avertissement sur les canaux de contact',
          paragraphs: [
            'Les messages que vous envoyez via WhatsApp relèvent des conditions propres à cette plateforme et échappent à notre contrôle. Tenez-en compte avant d’envoyer des documents sensibles tels que résultats d’analyses, imagerie ou comptes rendus d’anatomopathologie ; pour une demande formelle, privilégiez l’e-mail ou le formulaire du site.'
          ]
        },
        {
          heading: 'Liens externes',
          paragraphs: [
            'Le site comporte des liens vers des recommandations et des sources. Nous ne sommes pas responsables du contenu ni des pratiques de confidentialité des sites liés.'
          ]
        },
        {
          heading: 'Limitation de responsabilité',
          paragraphs: [
            'Le plus grand soin est apporté à l’exactitude et à l’actualité du contenu ; aucune garantie n’est toutefois donnée quant à la continuité du service, à l’absence d’erreur ou à un résultat déterminé. Le propriétaire du site ne saurait être tenu responsable des conséquences des décisions que vous prenez sur la base des informations qui y figurent.',
            'Cette limitation n’écarte ni les dispositions impératives de la loi ni la responsabilité professionnelle du médecin.'
          ]
        },
        {
          heading: 'Modifications',
          paragraphs: [
            'Les présentes conditions peuvent être mises à jour. La date de la version en vigueur figure en haut de la page.'
          ]
        },
        {
          heading: 'Droit applicable',
          paragraphs: [
            'Le droit turc s’applique aux présentes conditions. Les tribunaux et services d’exécution d’Istanbul sont compétents en cas de litige. Vos droits issus du droit de la consommation demeurent réservés.'
          ]
        }
      ]
    },
    ru: {
      intro:
        'Настоящие условия регулируют использование этого сайта. Пользуясь им, вы принимаете изложенное ниже. Если вы не согласны, пожалуйста, не пользуйтесь сайтом.',
      sections: [
        {
          heading: 'Назначение сайта',
          paragraphs: [
            'Сайт содержит общие сведения о направлениях урологической хирургии, которыми занимается доц. д-р Мюслюм Эргюн. Услуги на сайте не продаются, а содержание не является диагнозом или рекомендацией по лечению.',
            'Чтение сайта, заполнение формы или отправка сообщения не создают отношений между врачом и пациентом. Такие отношения возникают только после осмотра и принятия пациента.'
          ]
        },
        {
          heading: 'Интеллектуальная собственность',
          paragraphs: [
            'Тексты, изображения, схемы и код сайта принадлежат его владельцу. Допускается краткое цитирование со ссылкой на источник; воспроизведение, публикация или коммерческое использование содержания целиком либо в существенной части без разрешения не допускаются.'
          ]
        },
        {
          heading: 'Обязанности пользователя',
          paragraphs: [
            'Используйте формы и каналы связи только для обращения по поводу собственного здоровья. Ожидается, что вы не будете сообщать недостоверные сведения, передавать данные других людей без их согласия и пытаться нарушить работу сайта.'
          ]
        },
        {
          heading: 'Предупреждение о каналах связи',
          paragraphs: [
            'Сообщения, отправленные через WhatsApp, подчиняются условиям самой этой платформы и находятся вне нашего контроля. Учитывайте это, прежде чем отправлять такие чувствительные документы, как результаты анализов, снимки или заключения патоморфолога; для официального обращения используйте электронную почту или форму на сайте.'
          ]
        },
        {
          heading: 'Внешние ссылки',
          paragraphs: [
            'На сайте есть ссылки на клинические рекомендации и источники. Мы не отвечаем за содержание и политику конфиденциальности сайтов, на которые ведут эти ссылки.'
          ]
        },
        {
          heading: 'Ограничение ответственности',
          paragraphs: [
            'Мы прилагаем усилия, чтобы содержание было точным и актуальным; однако бесперебойность работы, отсутствие ошибок или какой-либо определённый результат не гарантируются. Владелец сайта не может нести ответственность за последствия решений, принятых вами на основании размещённых здесь сведений.',
            'Это ограничение не отменяет императивных норм законодательства и профессиональной ответственности врача.'
          ]
        },
        {
          heading: 'Изменения',
          paragraphs: [
            'Настоящие условия могут обновляться. Дата действующей редакции указана в начале страницы.'
          ]
        },
        {
          heading: 'Применимое право',
          paragraphs: [
            'К настоящим условиям применяется право Турции. Споры рассматриваются судами и органами принудительного исполнения Стамбула. Ваши права, вытекающие из законодательства о защите прав потребителей, сохраняются.'
          ]
        }
      ]
    },
    ar: {
      intro:
        'تنظّم هذه الشروط استخدامك لهذا الموقع. وباستخدامه تكون قد قبلت ما يلي. فإن لم تقبلها فالرجاء عدم استخدام الموقع.',
      sections: [
        {
          heading: 'الغرض من الموقع',
          paragraphs: [
            'يقدّم الموقع معلومات عامة عن مجالات جراحة المسالك البولية التي يعمل فيها الأستاذ المشارك الدكتور مسلم إرغون. ولا تُباع في الموقع خدمات، كما أن المحتوى ليس تشخيصًا ولا توصية علاجية.',
            'وقراءتك للموقع أو تعبئتك نموذجًا أو إرسالك رسالة لا تنشئ علاقة بين الطبيب والمريض. فهذه العلاقة لا تنشأ إلا بعد الفحص والقبول.'
          ]
        },
        {
          heading: 'الملكية الفكرية',
          paragraphs: [
            'النصوص والصور والرسوم والشيفرة في هذا الموقع مملوكة لصاحبه. ويجوز الاقتباس القصير مع ذكر المصدر؛ أما نسخ المحتوى كاملًا أو جزءًا جوهريًا منه أو نشره أو استعماله تجاريًا من دون إذن فغير مسموح.'
          ]
        },
        {
          heading: 'التزامات المستخدم',
          paragraphs: [
            'استعمل النماذج وقنوات التواصل للاستفسار عن حالتك الصحية أنت فقط. ويُتوقع منك ألّا تقدّم معلومات مضللة، وألّا تشارك بيانات شخص آخر من دون موافقته، وألّا تحاول تعطيل عمل الموقع.'
          ]
        },
        {
          heading: 'تنبيه بشأن قنوات التواصل',
          paragraphs: [
            'تخضع الرسائل التي ترسلها عبر WhatsApp لشروط تلك المنصة نفسها وهي خارج سيطرتنا. فضع ذلك في حسبانك قبل إرسال مستندات حساسة مثل نتائج التحاليل أو التصوير أو تقارير علم الأمراض؛ وللاستفسار الرسمي فضّل البريد الإلكتروني أو نموذج الموقع.'
          ]
        },
        {
          heading: 'الروابط الخارجية',
          paragraphs: [
            'يتضمّن الموقع روابط إلى أدلة إرشادية ومصادر. ولسنا مسؤولين عن محتوى تلك المواقع ولا عن ممارساتها في الخصوصية.'
          ]
        },
        {
          heading: 'حدود المسؤولية',
          paragraphs: [
            'نحرص على أن يكون المحتوى صحيحًا ومحدَّثًا؛ غير أننا لا نتعهد باستمرار الخدمة من دون انقطاع ولا بخلوّها من الخطأ ولا بنتيجة بعينها. ولا يُسأل صاحب الموقع عن نتائج القرارات التي تتخذها بناءً على المعلومات الواردة فيه.',
            'ولا يُسقط هذا الحدّ الأحكامَ الآمرة في التشريع ولا المسؤوليةَ المهنية للطبيب.'
          ]
        },
        {
          heading: 'التعديلات',
          paragraphs: [
            'قد تُحدَّث هذه الشروط. ويُذكر تاريخ النسخة السارية في أعلى الصفحة.'
          ]
        },
        {
          heading: 'القانون الواجب التطبيق',
          paragraphs: [
            'يُطبَّق القانون التركي على هذه الشروط. وتختص محاكم إسطنبول ودوائر التنفيذ فيها بالنزاعات. وتبقى حقوقك الناشئة عن تشريعات حماية المستهلك محفوظة.'
          ]
        }
      ]
    }
  }
};

/**
 * TIBBİ SORUMLULUK REDDİ (prompt m.4.1 — yasal/tibbi-sorumluluk-reddi).
 * ÇEVİRİ UYARISI bilinçli olarak buradadır: translation-status.ts'te tr dışı
 * tüm diller reviewed:false. Anadil tıbbi çevirmen kontrolü tamamlanınca
 * ilgili bölüm güncellenmelidir.
 */
export const disclaimerDoc: LegalDoc = {
  lastUpdated: '2026-10-04',
  i18n: {
    tr: {
      intro:
        'Bu sayfa, sitedeki tıbbi içeriğin niteliğini ve sınırlarını açıklar. Tedavi sayfalarını okumadan önce lütfen dikkate alın.',
      sections: [
        {
          heading: 'Buradaki bilgiler tıbbi tavsiye değildir',
          paragraphs: [
            'İçerik genel bilgilendirme amacıyla hazırlanmıştır. Sizin durumunuza özgü tanı, tedavi veya ilaç önerisinin yerine geçmez. Hiçbir metin muayenenin, görüntülemenin ve laboratuvar değerlendirmesinin yerini tutmaz.'
          ]
        },
        {
          heading: 'Hekim-hasta ilişkisi kurulmaz',
          paragraphs: [
            'Sayfaları okumanız, form doldurmanız veya mesaj göndermeniz hekim-hasta ilişkisi başlatmaz. Kişiye özel değerlendirme ancak muayene sonrasında yapılabilir.'
          ]
        },
        {
          heading: 'Acil durumlar',
          paragraphs: [
            'Ani ve şiddetli ağrı, hiç idrar yapamama, ateşle birlikte titreme, yoğun kanama veya testiste ani şiddetli ağrı gibi durumlarda bu siteyi kaynak almayın. 112’yi arayın ya da en yakın acil servise başvurun.'
          ]
        },
        {
          heading: 'Sonuç garantisi verilmez',
          paragraphs: [
            'Hiçbir cerrahi veya tıbbi işlem için başarı garantisi verilmez. Sayfalarda belirtilen süreler, iyileşme dönemleri ve beklentiler tipik seyri tanımlar ve kişiden kişiye değişir.',
            'Riskler ve komplikasyonlar gerçektir; her tedavi sayfasında ayrıca ve açıkça yazılmıştır. Bir bölümü atlamadan okumanızı öneririz.'
          ]
        },
        {
          heading: 'İçeriğin kaynağı ve güncelliği',
          paragraphs: [
            'Tıbbi içerik, Avrupa Üroloji Derneği (EAU) güncel kılavuzları esas alınarak hazırlanır. Her tedavi sayfasında son tıbbi gözden geçirme tarihi belirtilir.',
            'Kaynağı gösterilemeyen oran ve yüzdeler bilinçli olarak yazılmamıştır. Kılavuzlar değiştikçe içerik güncellenir; buna rağmen en güncel bilgi için hekiminize danışın.'
          ]
        },
        {
          heading: 'Çeviriler hakkında',
          paragraphs: [
            'Türkçe dışındaki diller kaynak metinden çevrilmiştir ve henüz anadili o dil olan bir tıbbi çevirmen tarafından onaylanmamıştır. Bir ifade size belirsiz görünüyorsa Türkçe veya İngilizce sürümü esas alın ve bize sorun.'
          ]
        },
        {
          heading: 'Üçüncü taraf bilgileri',
          paragraphs: [
            'Hastane, cihaz ve akreditasyon bilgileri ilgili kurumların kendi açıklamalarına dayanır. Doğrulamak için kurumların resmî sayfalarına başvurabilirsiniz.'
          ]
        }
      ]
    },
    en: {
      intro:
        'This page explains the nature and the limits of the medical content on this site. Please take it into account before reading the treatment pages.',
      sections: [
        {
          heading: 'What you read here is not medical advice',
          paragraphs: [
            'The content is written for general information. It does not replace a diagnosis, treatment or prescription for your particular situation. No text takes the place of an examination, imaging and laboratory assessment.'
          ]
        },
        {
          heading: 'No doctor–patient relationship is created',
          paragraphs: [
            'Reading these pages, completing a form or sending a message does not begin a doctor–patient relationship. An assessment specific to you can only be made after an examination.'
          ]
        },
        {
          heading: 'Emergencies',
          paragraphs: [
            'Do not rely on this site in situations such as sudden severe pain, complete inability to pass urine, fever with shivering, heavy bleeding or sudden severe pain in a testicle. Call your local emergency number or go to the nearest emergency department.'
          ]
        },
        {
          heading: 'No guarantee of outcome',
          paragraphs: [
            'No guarantee of success is given for any surgical or medical procedure. The durations, recovery periods and expectations stated on these pages describe the typical course and vary from person to person.',
            'Risks and complications are real; they are set out separately and plainly on every treatment page. We would encourage you to read that section rather than skip it.'
          ]
        },
        {
          heading: 'Source and currency of the content',
          paragraphs: [
            'The medical content is prepared on the basis of the current guidelines of the European Association of Urology (EAU). Each treatment page states the date of its last medical review.',
            'Rates and percentages that cannot be sourced have deliberately not been written. The content is updated as the guidelines change; even so, ask your own doctor for the most current information.'
          ]
        },
        {
          heading: 'About the translations',
          paragraphs: [
            'Languages other than Turkish are translated from the source text and have not yet been approved by a medical translator who is a native speaker. If any wording seems unclear to you, rely on the Turkish or English version and ask us.'
          ]
        },
        {
          heading: 'Third-party information',
          paragraphs: [
            'Information about the hospital, the equipment and accreditations rests on the statements of those institutions themselves. You can consult their official pages to verify it.'
          ]
        }
      ]
    },
    de: {
      intro:
        'Diese Seite erläutert Art und Grenzen der medizinischen Inhalte dieser Website. Bitte berücksichtigen Sie dies, bevor Sie die Behandlungsseiten lesen.',
      sections: [
        {
          heading: 'Was hier steht, ist keine medizinische Beratung',
          paragraphs: [
            'Die Inhalte sind zur allgemeinen Information verfasst. Sie ersetzen weder Diagnose noch Behandlung oder Verordnung für Ihre persönliche Situation. Kein Text ersetzt Untersuchung, Bildgebung und Laborbefundung.'
          ]
        },
        {
          heading: 'Es entsteht kein Arzt-Patienten-Verhältnis',
          paragraphs: [
            'Das Lesen dieser Seiten, das Ausfüllen eines Formulars oder das Senden einer Nachricht begründet kein Arzt-Patienten-Verhältnis. Eine auf Sie bezogene Beurteilung ist erst nach einer Untersuchung möglich.'
          ]
        },
        {
          heading: 'Notfälle',
          paragraphs: [
            'Verlassen Sie sich bei plötzlichen starken Schmerzen, vollständigem Unvermögen Wasser zu lassen, Fieber mit Schüttelfrost, starker Blutung oder plötzlichen heftigen Hodenschmerzen nicht auf diese Website. Rufen Sie den Notruf oder suchen Sie die nächste Notaufnahme auf.'
          ]
        },
        {
          heading: 'Keine Erfolgsgarantie',
          paragraphs: [
            'Für keinen chirurgischen oder medizinischen Eingriff wird eine Erfolgsgarantie gegeben. Die auf diesen Seiten genannten Zeiträume, Heilungsverläufe und Erwartungen beschreiben den typischen Verlauf und sind von Mensch zu Mensch verschieden.',
            'Risiken und Komplikationen sind real; sie sind auf jeder Behandlungsseite gesondert und deutlich aufgeführt. Wir empfehlen, diesen Abschnitt nicht zu überspringen.'
          ]
        },
        {
          heading: 'Quelle und Aktualität der Inhalte',
          paragraphs: [
            'Die medizinischen Inhalte werden auf Grundlage der aktuellen Leitlinien der Europäischen Gesellschaft für Urologie (EAU) erstellt. Auf jeder Behandlungsseite ist das Datum der letzten medizinischen Durchsicht angegeben.',
            'Raten und Prozentangaben ohne belegbare Quelle wurden bewusst nicht geschrieben. Die Inhalte werden mit den Leitlinien fortgeschrieben; fragen Sie dennoch Ihre Ärztin oder Ihren Arzt nach dem aktuellsten Stand.'
          ]
        },
        {
          heading: 'Zu den Übersetzungen',
          paragraphs: [
            'Die Sprachen außer Türkisch sind aus dem Ausgangstext übersetzt und bisher nicht von einer medizinischen Fachübersetzerin oder einem Fachübersetzer mit entsprechender Muttersprache geprüft worden. Erscheint Ihnen eine Formulierung unklar, halten Sie sich an die türkische oder englische Fassung und fragen Sie uns.'
          ]
        },
        {
          heading: 'Angaben Dritter',
          paragraphs: [
            'Angaben zu Krankenhaus, Geräten und Akkreditierungen beruhen auf den Mitteilungen der betreffenden Einrichtungen. Zur Überprüfung können Sie deren offizielle Seiten heranziehen.'
          ]
        }
      ]
    },
    fr: {
      intro:
        'Cette page expose la nature et les limites du contenu médical de ce site. Merci d’en tenir compte avant de lire les pages de traitement.',
      sections: [
        {
          heading: 'Ce qui figure ici n’est pas un avis médical',
          paragraphs: [
            'Le contenu est rédigé à titre d’information générale. Il ne remplace ni un diagnostic, ni un traitement, ni une prescription adaptés à votre situation. Aucun texte ne se substitue à un examen clinique, à l’imagerie et au bilan biologique.'
          ]
        },
        {
          heading: 'Aucune relation médecin-patient n’est créée',
          paragraphs: [
            'Lire ces pages, remplir un formulaire ou envoyer un message n’engage pas de relation médecin-patient. Une évaluation qui vous est propre ne peut être faite qu’après un examen.'
          ]
        },
        {
          heading: 'Urgences',
          paragraphs: [
            'Ne vous fiez pas à ce site en cas de douleur brutale et intense, d’impossibilité totale d’uriner, de fièvre avec frissons, de saignement abondant ou de douleur testiculaire brutale et intense. Appelez le numéro d’urgence ou rendez-vous au service d’urgence le plus proche.'
          ]
        },
        {
          heading: 'Aucune garantie de résultat',
          paragraphs: [
            'Aucune garantie de réussite n’est donnée pour un geste chirurgical ou médical, quel qu’il soit. Les durées, périodes de convalescence et attentes indiquées décrivent l’évolution habituelle et varient d’une personne à l’autre.',
            'Les risques et complications sont réels ; ils sont exposés séparément et clairement sur chaque page de traitement. Nous vous invitons à lire cette partie plutôt qu’à la passer.'
          ]
        },
        {
          heading: 'Source et actualité du contenu',
          paragraphs: [
            'Le contenu médical est établi à partir des recommandations en vigueur de l’Association européenne d’urologie (EAU). Chaque page de traitement indique la date de sa dernière relecture médicale.',
            'Les taux et pourcentages non sourçables n’ont délibérément pas été écrits. Le contenu est mis à jour à mesure que les recommandations évoluent ; demandez néanmoins à votre médecin l’information la plus récente.'
          ]
        },
        {
          heading: 'À propos des traductions',
          paragraphs: [
            'Les langues autres que le turc sont traduites du texte source et n’ont pas encore été validées par un traducteur médical de langue maternelle. Si une formulation vous paraît ambiguë, référez-vous à la version turque ou anglaise et interrogez-nous.'
          ]
        },
        {
          heading: 'Informations de tiers',
          paragraphs: [
            'Les informations relatives à l’hôpital, aux équipements et aux accréditations reposent sur les déclarations de ces établissements. Vous pouvez consulter leurs pages officielles pour les vérifier.'
          ]
        }
      ]
    },
    ru: {
      intro:
        'На этой странице объясняются характер и границы медицинского содержания сайта. Пожалуйста, учтите это, прежде чем читать страницы о лечении.',
      sections: [
        {
          heading: 'То, что здесь написано, не является медицинской консультацией',
          paragraphs: [
            'Содержание подготовлено для общего информирования. Оно не заменяет диагноз, лечение или назначение, подходящие именно вам. Никакой текст не заменяет осмотр, визуализацию и лабораторную оценку.'
          ]
        },
        {
          heading: 'Отношения врача и пациента не возникают',
          paragraphs: [
            'Чтение этих страниц, заполнение формы или отправка сообщения не начинают отношений между врачом и пациентом. Оценка, относящаяся именно к вам, возможна только после осмотра.'
          ]
        },
        {
          heading: 'Неотложные состояния',
          paragraphs: [
            'Не полагайтесь на этот сайт при внезапной сильной боли, полной невозможности помочиться, лихорадке с ознобом, обильном кровотечении или внезапной сильной боли в яичке. Позвоните в службу неотложной помощи или обратитесь в ближайшее приёмное отделение.'
          ]
        },
        {
          heading: 'Гарантии результата не даётся',
          paragraphs: [
            'Ни для одного хирургического или медицинского вмешательства гарантия успеха не даётся. Указанные на страницах сроки, периоды восстановления и ожидания описывают типичное течение и различаются у разных людей.',
            'Риски и осложнения реальны; они изложены отдельно и прямо на каждой странице о лечении. Советуем прочитать этот раздел, а не пропускать его.'
          ]
        },
        {
          heading: 'Источник и актуальность содержания',
          paragraphs: [
            'Медицинское содержание готовится на основе действующих рекомендаций Европейской ассоциации урологии (EAU). На каждой странице о лечении указана дата последнего медицинского пересмотра.',
            'Доли и проценты, которые невозможно подтвердить источником, намеренно не приводятся. Содержание обновляется по мере изменения рекомендаций; и всё же за самой свежей информацией обращайтесь к своему врачу.'
          ]
        },
        {
          heading: 'О переводах',
          paragraphs: [
            'Языки, кроме турецкого, переведены с исходного текста и пока не проверены медицинским переводчиком — носителем соответствующего языка. Если какая-то формулировка кажется вам неясной, опирайтесь на турецкую или английскую версию и спросите нас.'
          ]
        },
        {
          heading: 'Сведения третьих сторон',
          paragraphs: [
            'Сведения о больнице, оборудовании и аккредитациях основаны на заявлениях самих этих учреждений. Для проверки вы можете обратиться к их официальным страницам.'
          ]
        }
      ]
    },
    ar: {
      intro:
        'توضّح هذه الصفحة طبيعة المحتوى الطبي في الموقع وحدوده. فيُرجى أخذها في الحسبان قبل قراءة صفحات العلاج.',
      sections: [
        {
          heading: 'ما هنا ليس استشارة طبية',
          paragraphs: [
            'أُعدّ المحتوى للتعريف العام. وهو لا يحلّ محلّ تشخيص أو علاج أو وصفة تخص حالتك أنت. ولا يغني أي نصّ عن الفحص والتصوير والتقييم المخبري.'
          ]
        },
        {
          heading: 'لا تنشأ علاقة بين الطبيب والمريض',
          paragraphs: [
            'قراءتك هذه الصفحات أو تعبئتك نموذجًا أو إرسالك رسالة لا تبدأ علاقة بين الطبيب والمريض. ولا يمكن إجراء تقييم خاص بك إلا بعد الفحص.'
          ]
        },
        {
          heading: 'الحالات الطارئة',
          paragraphs: [
            'لا تعتمد على هذا الموقع في حالات مثل الألم المفاجئ الشديد، أو العجز التام عن التبول، أو الحمى مع القشعريرة، أو النزف الغزير، أو الألم المفاجئ الشديد في الخصية. اتصل برقم الطوارئ أو توجّه إلى أقرب قسم طوارئ.'
          ]
        },
        {
          heading: 'لا ضمان للنتيجة',
          paragraphs: [
            'لا يُقدَّم ضمان للنجاح في أي إجراء جراحي أو طبي. والمدد وفترات التعافي والتوقعات المذكورة في الصفحات تصف المسار المعتاد وتختلف من شخص إلى آخر.',
            'والمخاطر والمضاعفات حقيقية؛ وهي مكتوبة على حدة وبوضوح في كل صفحة علاج. وننصحك بقراءة ذلك القسم لا بتخطّيه.'
          ]
        },
        {
          heading: 'مصدر المحتوى وحداثته',
          paragraphs: [
            'يُعدّ المحتوى الطبي استنادًا إلى الأدلة الإرشادية السارية للجمعية الأوروبية للمسالك البولية (EAU). ويُذكر في كل صفحة علاج تاريخ آخر مراجعة طبية لها.',
            'ولم تُكتب عمدًا أي نسب أو مئويات يتعذّر إسنادها إلى مصدر. ويُحدَّث المحتوى كلما تغيّرت الأدلة الإرشادية؛ ومع ذلك اسأل طبيبك عن أحدث المعلومات.'
          ]
        },
        {
          heading: 'بشأن الترجمات',
          paragraphs: [
            'اللغات غير التركية مترجَمة عن النص الأصلي ولم يعتمدها بعدُ مترجم طبي ناطق بها لغةً أمًّا. فإن بدت لك عبارة غامضة فاعتمد النسخة التركية أو الإنجليزية واسألنا.'
          ]
        },
        {
          heading: 'معلومات الأطراف الثالثة',
          paragraphs: [
            'تستند المعلومات عن المستشفى والأجهزة والاعتمادات إلى تصريحات تلك المؤسسات نفسها. ويمكنك الرجوع إلى صفحاتها الرسمية للتحقق منها.'
          ]
        }
      ]
    }
  }
};
