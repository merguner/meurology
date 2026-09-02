import type { Locale } from '@/i18n/routing';

/**
 * YASAL METİN ŞABLONLARI — KVKK/GDPR aydınlatma ve açık rıza.
 * ÖNEMLİ: Bunlar ŞABLONDUR, hukuki tavsiye değildir. Yayına almadan önce
 * veri sorumlusu bilgileri (unvan, adres, VERBİS no, DPO iletişimi) doldurulmalı
 * ve bir hukuk danışmanınca onaylanmalıdır. PLACEHOLDER alanları değiştirin.
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
  lastUpdated: '2026-01-01',
  i18n: {
    tr: {
      intro:
        'ME Urology Clinic (Doç. Dr. Müslüm Ergün) olarak, 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) ve AB Genel Veri Koruma Tüzüğü (GDPR) kapsamında kişisel verilerinizi aşağıda açıklanan çerçevede işliyoruz.',
      sections: [
        {
          heading: 'Veri Sorumlusu',
          paragraphs: [
            'Veri sorumlusu ME Urology Clinic (Doç. Dr. Müslüm Ergün), Bahçelievler Mahallesi, E-5 Karayolu / Kültür Sok No:1, 34180 Bahçelievler/İstanbul, VERBİS No: —, İletişim: info@meurology.com / 0532 063 09 69.'
          ]
        },
        {
          heading: 'İşlenen Kişisel Veriler',
          paragraphs: [
            'Kimlik ve iletişim bilgileri (ad, ülke, e-posta, telefon), sağlık verileri (tahlil/görüntüleme, tıbbi öykü) ve form üzerinden ilettiğiniz diğer bilgiler.',
            'Sağlık verileri özel nitelikli kişisel veri olup yalnızca açık rızanıza dayanarak işlenir.'
          ]
        },
        {
          heading: 'İşleme Amaçları',
          paragraphs: [
            'Ön değerlendirme yapılması, tedavi planı ve fiyat teklifi sunulması, randevu ve seyahat koordinasyonu, yasal yükümlülüklerin yerine getirilmesi.'
          ]
        },
        {
          heading: 'Hukuki Sebep',
          paragraphs: [
            'Açık rıza, sözleşmenin kurulması/ifası ve ilgili mevzuattan doğan hukuki yükümlülükler.'
          ]
        },
        {
          heading: 'Aktarım',
          paragraphs: [
            'Verileriniz, hizmetin ifası için ilgili sağlık kuruluşu, tercüman ve seyahat hizmet sağlayıcılarıyla; yalnızca gerekli ölçüde ve gizlilik yükümlülüğü altında paylaşılabilir.'
          ]
        },
        {
          heading: 'Saklama Süresi',
          paragraphs: [
            'Kişisel verileriniz ilgili mevzuatta öngörülen süreler ve işleme amacının gerektirdiği süre boyunca saklanır.'
          ]
        },
        {
          heading: 'Haklarınız (KVKK m.11 / GDPR)',
          paragraphs: [
            'Verilerinize erişme, düzeltme, silme, işlemeye itiraz ve veri taşınabilirliği gibi haklara sahipsiniz. Talepleriniz için info@meurology.com üzerinden bize ulaşabilirsiniz.'
          ]
        }
      ]
    },
    en: {
      intro:
        'As ME Urology Clinic (Doç. Dr. Müslüm Ergün), we process your personal data under the Turkish Personal Data Protection Law (KVKK No. 6698) and the EU General Data Protection Regulation (GDPR) as described below.',
      sections: [
        {
          heading: 'Data Controller',
          paragraphs: [
            'The data controller is ME Urology Clinic (Doç. Dr. Müslüm Ergün), Bahçelievler Mahallesi, E-5 Karayolu / Kültür Sok No:1, 34180 Bahçelievler/İstanbul, registry no: —, contact: info@meurology.com / 0532 063 09 69.'
          ]
        },
        {
          heading: 'Personal Data Processed',
          paragraphs: [
            'Identity and contact data (name, country, email, phone), health data (test results/imaging, medical history) and other information you provide via the form.',
            'Health data is special-category personal data and is processed only on the basis of your explicit consent.'
          ]
        },
        {
          heading: 'Purposes of Processing',
          paragraphs: [
            'Performing a pre-assessment, providing a treatment plan and quote, coordinating appointments and travel, and fulfilling legal obligations.'
          ]
        },
        {
          heading: 'Legal Basis',
          paragraphs: [
            'Explicit consent, establishment/performance of a contract, and legal obligations arising from applicable legislation.'
          ]
        },
        {
          heading: 'Transfers',
          paragraphs: [
            'Your data may be shared, only to the extent necessary and under confidentiality obligations, with the relevant healthcare institution, interpreters and travel service providers for the provision of the service.'
          ]
        },
        {
          heading: 'Retention Period',
          paragraphs: [
            'Your personal data is retained for the periods prescribed by applicable legislation and as required by the purpose of processing.'
          ]
        },
        {
          heading: 'Your Rights (KVKK Art.11 / GDPR)',
          paragraphs: [
            'You have rights including access, rectification, erasure, objection to processing and data portability. To exercise them, contact us via info@meurology.com.'
          ]
        }
      ]
    },
    ar: {
      intro:
        'هذه الترجمة لأغراض التوعية فقط؛ ويجب أن يعتمد محامٍ النصّ الساري وفقًا للقانون التركي/اللائحة العامة لحماية البيانات (GDPR). بصفتنا ME Urology Clinic (Doç. Dr. Müslüm Ergün)، نعالج بياناتك الشخصية وفق قانون حماية البيانات الشخصية التركي (KVKK رقم 6698) واللائحة العامة لحماية البيانات في الاتحاد الأوروبي (GDPR) على النحو الموضّح أدناه.',
      sections: [
        {
          heading: 'المتحكم في البيانات',
          paragraphs: [
            'المتحكم في البيانات هو ME Urology Clinic (Doç. Dr. Müslüm Ergün)، Bahçelievler Mahallesi, E-5 Karayolu / Kültür Sok No:1, 34180 Bahçelievler/İstanbul، رقم السجل: —، للتواصل: info@meurology.com / 0532 063 09 69.'
          ]
        },
        {
          heading: 'البيانات الشخصية المعالَجة',
          paragraphs: [
            'بيانات الهوية والتواصل (الاسم، الدولة، البريد الإلكتروني، الهاتف)، والبيانات الصحية (التحاليل/الصور، التاريخ الطبي)، وأي معلومات أخرى تقدّمها عبر النموذج.',
            'البيانات الصحية بيانات شخصية ذات طبيعة خاصة وتُعالَج فقط استنادًا إلى موافقتك الصريحة.'
          ]
        },
        {
          heading: 'أغراض المعالجة',
          paragraphs: [
            'إجراء تقييم أولي، وتقديم خطة علاج وعرض سعر، وتنسيق المواعيد والسفر، والوفاء بالالتزامات القانونية.'
          ]
        },
        {
          heading: 'الأساس القانوني',
          paragraphs: [
            'الموافقة الصريحة، وإنشاء/تنفيذ العقد، والالتزامات القانونية الناشئة عن التشريعات المعمول بها.'
          ]
        },
        {
          heading: 'نقل البيانات',
          paragraphs: [
            'قد تُشارَك بياناتك، بالقدر اللازم فقط وتحت التزامات السرية، مع المؤسسة الصحية المعنية والمترجمين ومزوّدي خدمات السفر لأجل تقديم الخدمة.'
          ]
        },
        {
          heading: 'مدة الاحتفاظ',
          paragraphs: [
            'يُحتفَظ ببياناتك الشخصية للمدد المنصوص عليها في التشريعات المعمول بها وبقدر ما يتطلّبه غرض المعالجة.'
          ]
        },
        {
          heading: 'حقوقك (المادة 11 من KVKK / GDPR)',
          paragraphs: [
            'لك حقوق تشمل الوصول والتصحيح والمحو والاعتراض على المعالجة وقابلية نقل البيانات. لممارستها، تواصل معنا عبر info@meurology.com.'
          ]
        }
      ]
    },
    de: {
      intro:
        'Diese Übersetzung dient nur zu Informationszwecken; der verbindliche Text muss von einem Anwalt nach geltendem türkischem Recht/der DSGVO bestätigt werden. Als ME Urology Clinic (Doç. Dr. Müslüm Ergün) verarbeiten wir Ihre personenbezogenen Daten gemäß dem türkischen Datenschutzgesetz (KVKK Nr. 6698) und der EU-Datenschutz-Grundverordnung (DSGVO) wie nachfolgend beschrieben.',
      sections: [
        {
          heading: 'Verantwortlicher',
          paragraphs: [
            'Verantwortlicher ist ME Urology Clinic (Doç. Dr. Müslüm Ergün), Bahçelievler Mahallesi, E-5 Karayolu / Kültür Sok No:1, 34180 Bahçelievler/İstanbul, Registernr.: —, Kontakt: info@meurology.com / 0532 063 09 69.'
          ]
        },
        {
          heading: 'Verarbeitete personenbezogene Daten',
          paragraphs: [
            'Identitäts- und Kontaktdaten (Name, Land, E-Mail, Telefon), Gesundheitsdaten (Befunde/Bildgebung, Krankengeschichte) und weitere über das Formular übermittelte Angaben.',
            'Gesundheitsdaten sind besondere Kategorien personenbezogener Daten und werden nur auf Grundlage Ihrer ausdrücklichen Einwilligung verarbeitet.'
          ]
        },
        {
          heading: 'Verarbeitungszwecke',
          paragraphs: [
            'Durchführung einer Vorabbewertung, Erstellung eines Behandlungsplans und Angebots, Koordination von Terminen und Reise sowie Erfüllung gesetzlicher Pflichten.'
          ]
        },
        {
          heading: 'Rechtsgrundlage',
          paragraphs: [
            'Ausdrückliche Einwilligung, Anbahnung/Erfüllung eines Vertrags sowie gesetzliche Pflichten aus den geltenden Vorschriften.'
          ]
        },
        {
          heading: 'Übermittlung',
          paragraphs: [
            'Ihre Daten können, nur im erforderlichen Umfang und unter Vertraulichkeitspflichten, zur Leistungserbringung an die betreffende Gesundheitseinrichtung, Dolmetscher und Reisedienstleister weitergegeben werden.'
          ]
        },
        {
          heading: 'Speicherdauer',
          paragraphs: [
            'Ihre personenbezogenen Daten werden für die gesetzlich vorgeschriebenen Zeiträume und solange, wie es der Verarbeitungszweck erfordert, gespeichert.'
          ]
        },
        {
          heading: 'Ihre Rechte (KVKK Art. 11 / DSGVO)',
          paragraphs: [
            'Sie haben Rechte wie Auskunft, Berichtigung, Löschung, Widerspruch gegen die Verarbeitung und Datenübertragbarkeit. Zur Ausübung kontaktieren Sie uns über info@meurology.com.'
          ]
        }
      ]
    },
    ru: {
      intro:
        'Этот перевод носит информационный характер; обязательный к применению текст должен быть утверждён юристом в соответствии с действующим турецким законодательством/GDPR. Как ME Urology Clinic (Doç. Dr. Müslüm Ergün), мы обрабатываем ваши персональные данные в соответствии с турецким Законом о защите персональных данных (KVKK № 6698) и Общим регламентом ЕС по защите данных (GDPR), как описано ниже.',
      sections: [
        {
          heading: 'Оператор данных',
          paragraphs: [
            'Оператор данных — ME Urology Clinic (Doç. Dr. Müslüm Ergün), Bahçelievler Mahallesi, E-5 Karayolu / Kültür Sok No:1, 34180 Bahçelievler/İstanbul, рег. №: —, контакт: info@meurology.com / 0532 063 09 69.'
          ]
        },
        {
          heading: 'Обрабатываемые персональные данные',
          paragraphs: [
            'Идентификационные и контактные данные (имя, страна, эл. почта, телефон), данные о здоровье (анализы/снимки, история болезни) и иные сведения, предоставленные через форму.',
            'Данные о здоровье относятся к особой категории персональных данных и обрабатываются только на основании вашего явного согласия.'
          ]
        },
        {
          heading: 'Цели обработки',
          paragraphs: [
            'Проведение предварительной оценки, предоставление плана лечения и предложения по цене, координация приёмов и поездки, выполнение юридических обязанностей.'
          ]
        },
        {
          heading: 'Правовое основание',
          paragraphs: [
            'Явное согласие, заключение/исполнение договора и юридические обязанности, вытекающие из применимого законодательства.'
          ]
        },
        {
          heading: 'Передача данных',
          paragraphs: [
            'Ваши данные могут передаваться только в необходимом объёме и с обязательствами конфиденциальности соответствующему медицинскому учреждению, переводчикам и поставщикам туристических услуг для оказания услуги.'
          ]
        },
        {
          heading: 'Срок хранения',
          paragraphs: [
            'Ваши персональные данные хранятся в течение сроков, предусмотренных применимым законодательством, и столько, сколько требует цель обработки.'
          ]
        },
        {
          heading: 'Ваши права (ст. 11 KVKK / GDPR)',
          paragraphs: [
            'Вы имеете права на доступ, исправление, удаление, возражение против обработки и переносимость данных. Для их реализации свяжитесь с нами через info@meurology.com.'
          ]
        }
      ]
    }
  }
};

export const consentDoc: LegalDoc = {
  lastUpdated: '2026-01-01',
  i18n: {
    tr: {
      intro:
        'Aşağıdaki açık rıza metni, ön değerlendirme formu aracılığıyla paylaştığınız sağlık verilerinin işlenmesine ilişkindir.',
      sections: [
        {
          heading: 'Açık Rıza Beyanı',
          paragraphs: [
            'KVKK/GDPR aydınlatma metnini okudum ve anladım. Ad, iletişim ve sağlık verilerimin (tahlil, görüntüleme, tıbbi öykü dâhil); ön değerlendirme, tedavi planlaması ve seyahat koordinasyonu amaçlarıyla, gerekli ölçüde ilgili sağlık ve hizmet sağlayıcılarıyla paylaşılmak üzere işlenmesine açık rıza veriyorum.',
            'Bu rızayı dilediğim zaman info@meurology.com üzerinden geri çekebileceğimi biliyorum.'
          ]
        }
      ]
    },
    en: {
      intro:
        'The explicit consent text below concerns the processing of the health data you share via the pre-assessment form.',
      sections: [
        {
          heading: 'Explicit Consent Statement',
          paragraphs: [
            'I have read and understood the KVKK/GDPR privacy notice. I give my explicit consent to the processing of my name, contact and health data (including test results, imaging and medical history) for the purposes of pre-assessment, treatment planning and travel coordination, to be shared to the necessary extent with the relevant healthcare and service providers.',
            'I understand that I may withdraw this consent at any time via info@meurology.com.'
          ]
        }
      ]
    },
    ar: {
      intro:
        'هذه الترجمة لأغراض التوعية فقط؛ ويجب أن يعتمد محامٍ النصّ الساري وفقًا للقانون التركي/اللائحة العامة لحماية البيانات (GDPR). يتعلّق نص الموافقة الصريحة أدناه بمعالجة البيانات الصحية التي تشاركها عبر نموذج التقييم الأولي.',
      sections: [
        {
          heading: 'إقرار الموافقة الصريحة',
          paragraphs: [
            'قرأت إشعار الخصوصية KVKK/GDPR وفهمته. وأمنح موافقتي الصريحة على معالجة اسمي وبيانات تواصلي وبياناتي الصحية (بما فيها التحاليل والصور والتاريخ الطبي) لأغراض التقييم الأولي وتخطيط العلاج وتنسيق السفر، على أن تُشارَك بالقدر اللازم مع مقدّمي الرعاية والخدمات المعنيين.',
            'وأعلم أنه يمكنني سحب هذه الموافقة في أي وقت عبر info@meurology.com.'
          ]
        }
      ]
    },
    de: {
      intro:
        'Diese Übersetzung dient nur zu Informationszwecken; der verbindliche Text muss von einem Anwalt nach geltendem türkischem Recht/der DSGVO bestätigt werden. Der nachstehende Einwilligungstext betrifft die Verarbeitung der Gesundheitsdaten, die Sie über das Vorabbewertungsformular teilen.',
      sections: [
        {
          heading: 'Erklärung der ausdrücklichen Einwilligung',
          paragraphs: [
            'Ich habe die KVKK/DSGVO-Datenschutzerklärung gelesen und verstanden. Ich willige ausdrücklich in die Verarbeitung meines Namens, meiner Kontakt- und Gesundheitsdaten (einschließlich Befunde, Bildgebung und Krankengeschichte) zu den Zwecken der Vorabbewertung, Behandlungsplanung und Reisekoordination ein, wobei diese im erforderlichen Umfang an die betreffenden Gesundheits- und Dienstleister weitergegeben werden.',
            'Mir ist bewusst, dass ich diese Einwilligung jederzeit über info@meurology.com widerrufen kann.'
          ]
        }
      ]
    },
    ru: {
      intro:
        'Этот перевод носит информационный характер; обязательный к применению текст должен быть утверждён юристом в соответствии с действующим турецким законодательством/GDPR. Приведённый ниже текст согласия касается обработки данных о здоровье, которые вы передаёте через форму предварительной оценки.',
      sections: [
        {
          heading: 'Заявление о явном согласии',
          paragraphs: [
            'Я прочитал(а) и понял(а) уведомление о конфиденциальности KVKK/GDPR. Я даю явное согласие на обработку моих имени, контактных данных и данных о здоровье (включая анализы, снимки и историю болезни) в целях предварительной оценки, планирования лечения и координации поездки, с передачей в необходимом объёме соответствующим медицинским и сервисным поставщикам.',
            'Я понимаю, что могу отозвать это согласие в любое время через info@meurology.com.'
          ]
        }
      ]
    }
  }
};
