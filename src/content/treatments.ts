import type { Treatment, TreatmentCategory } from './types';
import { treatmentCategory } from './types';
import { assertTreatmentsValid } from './validate';

/**
 * TEDAVİ İÇERİKLERİ
 * ------------------------------------------------------------------
 * - Metinler genel/eğitici bilgilendirme amaçlıdır; tıbbi tavsiye değildir.
 * - Fiyatlar, vaka sayıları ve videolar PLACEHOLDER'dır'a i18n.<locale> ekleyin.
 */

export const treatments: Treatment[] = [
  {
    slug: 'robotik-prostatektomi',
    priceRangeTRY: { from: 200000, to: 320000 }, // TODO: gerçek fiyatla güncelleyin (tahmini)
    icon: 'robot',
    videoPlaceholderNote:
      'PLACEHOLDER: Hasta deneyimi video embed URL’i (YouTube/Vimeo) buraya eklenecek.',
    i18n: {
      tr: {
        title: 'Robotik / Laparoskopik Radikal Prostatektomi',
        summary:
          'Prostat kanserinde prostat bezinin robot destekli, minimal invaziv yöntemle alınması.',
        metaTitle: 'Robotik Prostatektomi | Prostat Kanseri Cerrahisi',
        metaDescription:
          'Robot destekli radikal prostatektomi ile prostat kanseri tedavisi: süreç, riskler, alternatifler, fiyat aralığı ve sık sorulan sorular.',
        definition: [
          'Radikal prostatektomi, prostat kanserinin bez içinde sınırlı olduğu durumlarda prostat bezinin ve çevresindeki bir miktar dokunun tamamen alınması işlemidir.',
          'Robot destekli yöntemde cerrah, konsol başından yönettiği robotik kollar aracılığıyla milimetrik hassasiyetle çalışır. Küçük kesiler sayesinde kan kaybı, ağrı ve iyileşme süresi genellikle açık cerrahiye göre daha azdır.',
          'Amaç kanserin kontrol altına alınmasının yanında, mümkün olduğunda idrar tutma ve cinsel işlevi koruyan sinir koruyucu tekniğin uygulanmasıdır.'
        ],
        surgeonExperience: {
          caseVolume: '145+ robotik prostatektomi vakası',
          note: 'Vaka sayısı, Doç. Dr. Müslüm Ergün’ün bu alandaki toplam cerrahi deneyimini yansıtır.'
        },
        timeline: [
          {
            when: 'Uzaktan',
            title: 'Ön değerlendirme',
            body: 'PSA, biyopsi ve görüntüleme sonuçlarınızı çevrimiçi paylaşırsınız; ekip uygunluğu değerlendirir.'
          },
          {
            when: '1–2. Gün',
            title: 'Varış ve muayene',
            body: 'İstanbul’a varış, yüz yüze muayene, anestezi ve gerekli ameliyat öncesi tetkikler.'
          },
          {
            when: '3. Gün',
            title: 'Ameliyat',
            body: 'Robot destekli prostatektomi; işlem genellikle 2–4 saat sürer, aynı gün yoğun bakım gerektirmez.'
          },
          {
            when: '4–5. Gün',
            title: 'Taburculuk',
            body: 'Sonda ile taburculuk; yürüyüş ve hafif aktiviteye başlanır.'
          },
          {
            when: '7–10. Gün',
            title: 'Kontrol ve sonda alımı',
            body: 'Kontrol muayenesi, sonda alımı ve patoloji sonucunun değerlendirilmesi; ardından dönüş uçuşu onayı.'
          }
        ],
        risks: [
          'Geçici veya kalıcı idrar kaçırma (inkontinans)',
          'Ereksiyon işlevinde değişiklik (sinir koruyucu teknikle risk azalır)',
          'Kanama, enfeksiyon ve anesteziye bağlı genel cerrahi riskler',
          'Nadiren komşu organ yaralanması'
        ],
        alternatives: [
          'Aktif izlem (düşük riskli, seçili hastalarda)',
          'Radyoterapi (dış ışın veya brakiterapi)',
          'Fokal tedaviler (seçili vakalarda)',
          'Hormon tedavisi (ileri evrede tamamlayıcı)'
        ],
        price: {
          from: 0,
          to: 0,
          currency: 'EUR',
          disclaimer:
            'Fiyat aralığı evre, ek işlem ve konaklama süresine göre değişir. Kesin teklif ön değerlendirme sonrası verilir.'
        },
        packageIncludes: [
          'Cerrahi ve hastane yatışı',
          'Anestezi ve ameliyathane',
          'Ameliyat öncesi tetkikler',
          'Havalimanı–hastane–otel transferleri',
          'Konaklama (hasta + 1 refakatçi)',
          'Tıbbi tercüman ve hasta koordinatörü',
          'Taburculuk sonrası online kontroller'
        ],
        faqs: [
          {
            q: 'Türkiye’de ne kadar kalmam gerekir?',
            a: 'Genellikle 7–10 gün önerilir; kesin süre iyileşme hızınıza ve sonda alım zamanına göre belirlenir.'
          },
          {
            q: 'Sinir koruyucu cerrahi bana uygun mu?',
            a: 'Kanserin yerleşimi ve evresine bağlıdır; ameliyat öncesi görüntüleme ve muayene sonrası netleşir.'
          },
          {
            q: 'Ameliyat sonrası ne zaman uçabilirim?',
            a: 'Çoğu hasta kontrol ve sonda alımından sonra, genellikle 10. günden itibaren uçuş için onay alır.'
          }
        ]
      },
      en: {
        title: 'Robotic / Laparoscopic Radical Prostatectomy',
        summary:
          'Robot-assisted, minimally invasive removal of the prostate gland for prostate cancer.',
        metaTitle: 'Robotic Prostatectomy | Prostate Cancer Surgery',
        metaDescription:
          'Robot-assisted radical prostatectomy for prostate cancer: process, risks, alternatives, price range and frequently asked questions.',
        definition: [
          'Radical prostatectomy is the complete removal of the prostate gland and some surrounding tissue when cancer is confined to the gland.',
          'In the robot-assisted approach the surgeon operates robotic arms from a console with millimetric precision. Small incisions typically mean less blood loss, less pain and faster recovery than open surgery.',
          'The goal is cancer control while, where feasible, preserving urinary continence and sexual function through nerve-sparing technique.'
        ],
        surgeonExperience: {
          caseVolume: '145+ robotic prostatectomy cases',
          note: 'The case volume reflects Assoc. Prof. Dr. Müslüm Ergün’s total surgical experience in this area.'
        },
        timeline: [
          {
            when: 'Remote',
            title: 'Pre-assessment',
            body: 'You share PSA, biopsy and imaging results online; the team assesses suitability.'
          },
          {
            when: 'Day 1–2',
            title: 'Arrival & exam',
            body: 'Arrival in Istanbul, in-person exam, anesthesia and required pre-operative tests.'
          },
          {
            when: 'Day 3',
            title: 'Surgery',
            body: 'Robot-assisted prostatectomy; usually 2–4 hours, no routine ICU stay.'
          },
          {
            when: 'Day 4–5',
            title: 'Discharge',
            body: 'Discharge with catheter; walking and light activity begin.'
          },
          {
            when: 'Day 7–10',
            title: 'Review & catheter removal',
            body: 'Follow-up exam, catheter removal and pathology review; then clearance to fly home.'
          }
        ],
        risks: [
          'Temporary or permanent urinary incontinence',
          'Changes in erectile function (reduced with nerve-sparing technique)',
          'Bleeding, infection and general surgical/anesthetic risks',
          'Rarely, injury to adjacent organs'
        ],
        alternatives: [
          'Active surveillance (in selected low-risk patients)',
          'Radiotherapy (external beam or brachytherapy)',
          'Focal therapies (in selected cases)',
          'Hormone therapy (adjunct in advanced disease)'
        ],
        price: {
          from: 0,
          to: 0,
          currency: 'EUR',
          disclaimer:
            'The price range varies with stage, additional procedures and length of stay. A firm quote follows pre-assessment.'
        },
        packageIncludes: [
          'Surgery and hospital stay',
          'Anesthesia and operating room',
          'Pre-operative tests',
          'Airport–hospital–hotel transfers',
          'Accommodation (patient + 1 companion)',
          'Medical interpreter and patient coordinator',
          'Post-discharge online follow-ups'
        ],
        faqs: [
          {
            q: 'How long do I need to stay in Türkiye?',
            a: 'Usually 7–10 days; the exact duration depends on your recovery and catheter removal timing.'
          },
          {
            q: 'Am I a candidate for nerve-sparing surgery?',
            a: 'It depends on tumor location and stage, confirmed after pre-operative imaging and examination.'
          },
          {
            q: 'When can I fly after surgery?',
            a: 'Most patients are cleared to fly after review and catheter removal, typically from day 10.'
          }
        ]
      },
      ar: {
        title: 'استئصال البروستاتا الجذري بالروبوت / بالمنظار',
        summary: 'إزالة غدة البروستاتا بأسلوب دقيق قليل التوغل بمساعدة الروبوت لعلاج سرطان البروستاتا.',
        metaTitle: 'استئصال البروستاتا بالروبوت | جراحة سرطان البروستاتا',
        metaDescription: 'علاج سرطان البروستاتا باستئصال جذري بمساعدة الروبوت: مسار العلاج، المخاطر، البدائل، نطاق السعر والأسئلة الشائعة.',
        definition: [
          'استئصال البروستاتا الجذري هو إزالة غدة البروستاتا بالكامل مع جزء من الأنسجة المحيطة عندما يكون السرطان محصورًا داخل الغدة.',
          'في الأسلوب المعتمد على الروبوت يتحكم الجرّاح بأذرع روبوتية من وحدة تحكم بدقة تصل إلى المليمتر. وبفضل الشقوق الصغيرة يكون فقدان الدم والألم ومدة التعافي عادةً أقل مقارنةً بالجراحة المفتوحة.',
          'الهدف هو السيطرة على السرطان مع الحفاظ قدر الإمكان على التحكم في التبول والوظيفة الجنسية من خلال تقنية الحفاظ على الأعصاب.'
        ],
        surgeonExperience: {
          caseVolume: 'أكثر من 145 عملية استئصال بروستاتا بالروبوت',
          note: 'يعكس عدد الحالات إجمالي الخبرة الجراحية للأستاذ المشارك د. مسلم إرغن في هذا المجال.'
        },
        timeline: [
          { when: 'عن بُعد', title: 'التقييم الأولي', body: 'تشاركون نتائج PSA والخزعة والتصوير عبر الإنترنت، ويقيّم الفريق مدى الملاءمة.' },
          { when: 'اليوم 1–2', title: 'الوصول والفحص', body: 'الوصول إلى إسطنبول، فحص شخصي، وتقييم التخدير والفحوصات اللازمة قبل العملية.' },
          { when: 'اليوم 3', title: 'العملية', body: 'استئصال البروستاتا بمساعدة الروبوت؛ يستغرق عادةً 2–4 ساعات دون حاجة روتينية للعناية المركزة.' },
          { when: 'اليوم 4–5', title: 'الخروج', body: 'الخروج مع قسطرة؛ والبدء بالمشي والنشاط الخفيف.' },
          { when: 'اليوم 7–10', title: 'المراجعة وإزالة القسطرة', body: 'فحص المتابعة، إزالة القسطرة ومراجعة نتيجة علم الأمراض، ثم الإذن بالسفر للعودة.' }
        ],
        risks: [
          'سلس بولي مؤقت أو دائم',
          'تغيّرات في الوظيفة الانتصابية (تقل مع تقنية الحفاظ على الأعصاب)',
          'نزيف وعدوى ومخاطر جراحية وتخديرية عامة',
          'نادرًا، إصابة الأعضاء المجاورة'
        ],
        alternatives: [
          'المراقبة النشطة (لدى مرضى مختارين منخفضي الخطورة)',
          'العلاج الإشعاعي (إشعاع خارجي أو معالجة كثبية)',
          'العلاجات الموضعية (في حالات مختارة)',
          'العلاج الهرموني (مكمّل في المراحل المتقدمة)'
        ],
        price: {
          from: 0,
          to: 0,
          currency: 'EUR',
          disclaimer: 'يختلف نطاق السعر حسب المرحلة والإجراءات الإضافية ومدة الإقامة. يُقدَّم عرض سعر نهائي بعد التقييم الأولي.'
        },
        packageIncludes: [
          'العملية والإقامة في المستشفى',
          'التخدير وغرفة العمليات',
          'الفحوصات قبل العملية',
          'التنقلات بين المطار والمستشفى والفندق',
          'الإقامة (المريض + مرافق واحد)',
          'مترجم طبي ومنسّق مرضى',
          'متابعات إلكترونية بعد الخروج'
        ],
        faqs: [
          { q: 'كم يجب أن أبقى في تركيا؟', a: 'يُوصى عادةً بـ 7–10 أيام؛ وتُحدَّد المدة الدقيقة حسب سرعة تعافيك وموعد إزالة القسطرة.' },
          { q: 'هل أنا مرشّح لجراحة الحفاظ على الأعصاب؟', a: 'يعتمد ذلك على موقع الورم ومرحلته، ويتأكد بعد التصوير والفحص قبل العملية.' },
          { q: 'متى يمكنني السفر جوًّا بعد العملية؟', a: 'يُسمح لمعظم المرضى بالسفر بعد المراجعة وإزالة القسطرة، عادةً اعتبارًا من اليوم العاشر.' }
        ]
      },
      de: {
        title: 'Robotische / laparoskopische radikale Prostatektomie',
        summary: 'Robotergestützte, minimalinvasive Entfernung der Prostata bei Prostatakrebs.',
        metaTitle: 'Robotische Prostatektomie | Prostatakrebs-Chirurgie',
        metaDescription: 'Robotergestützte radikale Prostatektomie bei Prostatakrebs: Ablauf, Risiken, Alternativen, Preisspanne und häufige Fragen.',
        definition: [
          'Die radikale Prostatektomie ist die vollständige Entfernung der Prostata samt etwas umliegendem Gewebe, wenn der Krebs auf die Drüse begrenzt ist.',
          'Beim robotergestützten Verfahren steuert der Chirurg von einer Konsole aus Roboterarme mit millimetergenauer Präzision. Durch kleine Schnitte sind Blutverlust, Schmerzen und Erholungszeit in der Regel geringer als bei offener Chirurgie.',
          'Ziel ist die Tumorkontrolle bei möglichst weitgehendem Erhalt von Harnkontinenz und Sexualfunktion durch die nervenschonende Technik.'
        ],
        surgeonExperience: {
          caseVolume: 'über 145 robotische Prostatektomien',
          note: 'Die Fallzahl spiegelt die gesamte chirurgische Erfahrung von Doz. Dr. Müslüm Ergün in diesem Bereich wider.'
        },
        timeline: [
          { when: 'Aus der Ferne', title: 'Vorabbewertung', body: 'Sie teilen PSA-, Biopsie- und Bildgebungsbefunde online; das Team prüft die Eignung.' },
          { when: 'Tag 1–2', title: 'Ankunft & Untersuchung', body: 'Ankunft in Istanbul, persönliche Untersuchung, Anästhesie und erforderliche präoperative Tests.' },
          { when: 'Tag 3', title: 'Operation', body: 'Robotergestützte Prostatektomie; meist 2–4 Stunden, kein routinemäßiger Intensivaufenthalt.' },
          { when: 'Tag 4–5', title: 'Entlassung', body: 'Entlassung mit Katheter; Gehen und leichte Aktivität beginnen.' },
          { when: 'Tag 7–10', title: 'Kontrolle & Katheterentfernung', body: 'Nachuntersuchung, Katheterentfernung und Befundung der Pathologie; danach Reisefreigabe.' }
        ],
        risks: [
          'Vorübergehende oder dauerhafte Harninkontinenz',
          'Veränderungen der Erektionsfunktion (durch nervenschonende Technik reduziert)',
          'Blutung, Infektion sowie allgemeine chirurgische/anästhesiologische Risiken',
          'Selten Verletzung benachbarter Organe'
        ],
        alternatives: [
          'Aktive Überwachung (bei ausgewählten Niedrigrisikopatienten)',
          'Strahlentherapie (perkutan oder Brachytherapie)',
          'Fokale Therapien (in ausgewählten Fällen)',
          'Hormontherapie (ergänzend bei fortgeschrittener Erkrankung)'
        ],
        price: {
          from: 0,
          to: 0,
          currency: 'EUR',
          disclaimer: 'Die Preisspanne hängt von Stadium, Zusatzeingriffen und Aufenthaltsdauer ab. Ein verbindliches Angebot folgt nach der Vorabbewertung.'
        },
        packageIncludes: [
          'Operation und Krankenhausaufenthalt',
          'Anästhesie und Operationssaal',
          'Präoperative Untersuchungen',
          'Transfers Flughafen–Klinik–Hotel',
          'Unterkunft (Patient + 1 Begleitperson)',
          'Medizinischer Dolmetscher und Patientenkoordinator',
          'Online-Nachsorge nach der Entlassung'
        ],
        faqs: [
          { q: 'Wie lange muss ich in der Türkei bleiben?', a: 'Meist werden 7–10 Tage empfohlen; die genaue Dauer richtet sich nach Ihrer Genesung und dem Zeitpunkt der Katheterentfernung.' },
          { q: 'Bin ich für eine nervenschonende Operation geeignet?', a: 'Das hängt von Lage und Stadium des Tumors ab und wird nach präoperativer Bildgebung und Untersuchung bestätigt.' },
          { q: 'Wann darf ich nach der Operation fliegen?', a: 'Die meisten Patienten erhalten nach Kontrolle und Katheterentfernung die Reisefreigabe, in der Regel ab Tag 10.' }
        ]
      },
      ru: {
        title: 'Роботическая / лапароскопическая радикальная простатэктомия',
        summary: 'Роботизированное малоинвазивное удаление предстательной железы при раке простаты.',
        metaTitle: 'Роботическая простатэктомия | Хирургия рака простаты',
        metaDescription: 'Радикальная простатэктомия с помощью робота при раке простаты: процесс, риски, альтернативы, диапазон цен и часто задаваемые вопросы.',
        definition: [
          'Радикальная простатэктомия — это полное удаление предстательной железы и части окружающих тканей, когда рак ограничен пределами железы.',
          'При роботизированном подходе хирург управляет роботическими манипуляторами с консоли с точностью до миллиметра. Благодаря небольшим разрезам кровопотеря, боль и время восстановления обычно меньше, чем при открытой операции.',
          'Цель — контроль над опухолью при максимально возможном сохранении удержания мочи и половой функции с помощью нервосберегающей техники.'
        ],
        surgeonExperience: {
          caseVolume: 'более 145 роботических простатэктомий',
          note: 'Число операций отражает общий хирургический опыт доцента д-ра Мюслюма Эргюна в этой области.'
        },
        timeline: [
          { when: 'Удалённо', title: 'Предварительная оценка', body: 'Вы делитесь результатами PSA, биопсии и снимков онлайн; команда оценивает пригодность.' },
          { when: 'День 1–2', title: 'Прибытие и осмотр', body: 'Прибытие в Стамбул, очный осмотр, анестезиологическая оценка и необходимые предоперационные анализы.' },
          { when: 'День 3', title: 'Операция', body: 'Роботизированная простатэктомия; обычно 2–4 часа, без рутинного пребывания в реанимации.' },
          { when: 'День 4–5', title: 'Выписка', body: 'Выписка с катетером; начинаются ходьба и лёгкая активность.' },
          { when: 'День 7–10', title: 'Контроль и удаление катетера', body: 'Контрольный осмотр, удаление катетера и оценка результатов гистологии; затем разрешение на перелёт.' }
        ],
        risks: [
          'Временное или стойкое недержание мочи',
          'Изменения эректильной функции (снижаются при нервосберегающей технике)',
          'Кровотечение, инфекция и общие хирургические/анестезиологические риски',
          'Редко — повреждение соседних органов'
        ],
        alternatives: [
          'Активное наблюдение (у отдельных пациентов низкого риска)',
          'Лучевая терапия (дистанционная или брахитерапия)',
          'Очаговые методы лечения (в отдельных случаях)',
          'Гормональная терапия (дополнительно при распространённой болезни)'
        ],
        price: {
          from: 0,
          to: 0,
          currency: 'EUR',
          disclaimer: 'Диапазон цен зависит от стадии, дополнительных процедур и длительности пребывания. Точное предложение предоставляется после предварительной оценки.'
        },
        packageIncludes: [
          'Операция и пребывание в стационаре',
          'Анестезия и операционная',
          'Предоперационные анализы',
          'Трансферы аэропорт–клиника–отель',
          'Проживание (пациент + 1 сопровождающий)',
          'Медицинский переводчик и координатор пациента',
          'Онлайн-наблюдение после выписки'
        ],
        faqs: [
          { q: 'Сколько нужно оставаться в Турции?', a: 'Обычно рекомендуется 7–10 дней; точный срок зависит от скорости восстановления и времени удаления катетера.' },
          { q: 'Подхожу ли я для нервосберегающей операции?', a: 'Это зависит от расположения и стадии опухоли и уточняется после предоперационного обследования.' },
          { q: 'Когда можно лететь после операции?', a: 'Большинству пациентов разрешают перелёт после контроля и удаления катетера, обычно с 10-го дня.' }
        ]
      }
    }
  },
  {
    slug: 'bobrek-tasi',
    priceRangeTRY: { from: 60000, to: 140000 }, // TODO: gerçek fiyatla güncelleyin (tahmini)
    icon: 'stone',
    videoPlaceholderNote:
      'PLACEHOLDER: Böbrek taşı hasta deneyimi video embed URL’i buraya eklenecek.',
    i18n: {
      tr: {
        title: 'Böbrek Taşı Tedavisi (RIRS, PCNL, ESWL)',
        summary:
          'Taşın boyutu ve yerine göre kişiye özel yöntem: lazerle kırma, perkütan cerrahi veya ses dalgası.',
        metaTitle: 'Böbrek Taşı Tedavisi | RIRS, PCNL, ESWL Karşılaştırması',
        metaDescription:
          'Böbrek taşında RIRS (lazer), PCNL (perkütan) ve ESWL (ses dalgası) yöntemlerinin karşılaştırması, süreç, riskler ve fiyat aralığı.',
        definition: [
          'Böbrek taşları idrardaki minerallerin kristalleşerek birikmesiyle oluşur ve şiddetli yan ağrısı, kanlı idrar veya enfeksiyona yol açabilir.',
          'Tedavi yöntemi taşın boyutu, sertliği ve konumuna göre seçilir. Küçük taşlarda ses dalgası, orta boy taşlarda esnek üreteroskopi ile lazer, büyük taşlarda perkütan (deriden) cerrahi öne çıkar.'
        ],
        surgeonExperience: {
          caseVolume: '1.350+ endoürolojik vaka',
          note: 'Vaka sayısı, Doç. Dr. Müslüm Ergün’ün bu alandaki toplam cerrahi deneyimini yansıtır.'
        },
        timeline: [
          { when: 'Uzaktan', title: 'Ön değerlendirme', body: 'BT/ultrason ve kan-idrar sonuçlarınız incelenir, uygun yöntem planlanır.' },
          { when: '1. Gün', title: 'Varış ve tetkik', body: 'Muayene, gerekli görüntüleme ve anestezi değerlendirmesi.' },
          { when: '2. Gün', title: 'İşlem', body: 'Seçilen yönteme göre işlem; çoğu vaka günübirlik veya 1 gece yatış.' },
          { when: '3–4. Gün', title: 'Kontrol', body: 'Taşsızlık kontrolü, gerekirse stent değerlendirmesi ve dönüş onayı.' }
        ],
        risks: [
          'Kanama ve idrar yolu enfeksiyonu',
          'Geçici idrarda yanma veya kanama',
          'Stent gerektiren durumlar',
          'Taşın tam temizlenememesi ve tekrar işlem ihtiyacı'
        ],
        alternatives: [
          'İlaçla taş düşürme (küçük taşlarda)',
          'Bekle-gör yaklaşımı (belirtisiz küçük taşlar)',
          'Açık/laparoskopik cerrahi (nadiren, kompleks vakalarda)'
        ],
        comparison: {
          title: 'RIRS vs PCNL vs ESWL',
          columns: ['Kriter', 'RIRS (Lazer)', 'PCNL (Perkütan)', 'ESWL (Ses dalgası)'],
          rows: [
            { label: 'Uygun taş boyutu', values: ['~2 cm’e kadar', '2 cm ve üzeri', '~1 cm’e kadar'] },
            { label: 'Kesi', values: ['Yok (idrar yolundan)', 'Küçük deri kesisi', 'Yok (dıştan)'] },
            { label: 'Anestezi', values: ['Genel/spinal', 'Genel', 'Genelde sedasyon'] },
            { label: 'Yatış', values: ['Günübirlik–1 gece', '1–2 gece', 'Günübirlik'] },
            { label: 'Taşsızlık oranı', values: ['Yüksek', 'Çok yüksek', 'Orta'] }
          ],
          note: 'Tablo genel bilgilendirmedir; nihai yöntem kişiye göre belirlenir.'
        },
        price: {
          from: 0,
          to: 0,
          currency: 'EUR',
          disclaimer: 'Yöntem ve taş yüküne göre değişir; kesin teklif değerlendirme sonrası verilir.'
        },
        packageIncludes: [
          'İşlem ve hastane yatışı',
          'Anestezi ve gerekli tetkikler',
          'Transferler ve konaklama',
          'Tıbbi tercüman ve koordinatör',
          'Kontrol ve online takip'
        ],
        faqs: [
          { q: 'Hangi yöntem bana uygun?', a: 'Taşın boyutu, sertliği ve yerine bağlıdır; görüntüleme sonrası netleşir.' },
          { q: 'İşlem ağrılı mı?', a: 'İşlemler anestezi altında yapılır; sonrasında hafif rahatsızlık olabilir.' },
          { q: 'Stent takılır mı?', a: 'Bazı vakalarda geçici stent gerekir; genellikle kısa süre sonra alınır.' }
        ]
      },
      en: {
        title: 'Kidney Stone Treatment (RIRS, PCNL, ESWL)',
        summary: 'A method tailored to stone size and location: laser fragmentation, percutaneous surgery or shock waves.',
        metaTitle: 'Kidney Stone Treatment | RIRS, PCNL, ESWL Comparison',
        metaDescription: 'Comparison of RIRS (laser), PCNL (percutaneous) and ESWL (shock wave) for kidney stones: process, risks and price range.',
        definition: [
          'Kidney stones form when minerals in the urine crystallize and build up, and can cause severe flank pain, blood in the urine or infection.',
          'The treatment method is chosen according to the size, hardness and location of the stone. Shock waves are used for small stones, flexible ureteroscopy with laser for medium stones, and percutaneous (through the skin) surgery for large stones.'
        ],
        surgeonExperience: {
          caseVolume: '1,350+ endourological cases',
          note: 'The case volume reflects Assoc. Prof. Dr. Müslüm Ergün’s total surgical experience in this area.'
        },
        timeline: [
          { when: 'Remote', title: 'Pre-assessment', body: 'Your CT/ultrasound and blood-urine results are reviewed and the suitable method is planned.' },
          { when: 'Day 1', title: 'Arrival & tests', body: 'Examination, required imaging and anesthesia assessment.' },
          { when: 'Day 2', title: 'Procedure', body: 'Procedure according to the chosen method; most cases are day-case or a 1-night stay.' },
          { when: 'Day 3–4', title: 'Review', body: 'Stone-free check, stent assessment if needed and clearance to return.' }
        ],
        risks: [
          'Bleeding and urinary tract infection',
          'Temporary burning or blood on urination',
          'Situations requiring a stent',
          'Incomplete stone clearance and need for a repeat procedure'
        ],
        alternatives: [
          'Medical stone passage (for small stones)',
          'Watch-and-wait approach (asymptomatic small stones)',
          'Open/laparoscopic surgery (rarely, in complex cases)'
        ],
        comparison: {
          title: 'RIRS vs PCNL vs ESWL',
          columns: ['Criterion', 'RIRS (Laser)', 'PCNL (Percutaneous)', 'ESWL (Shock wave)'],
          rows: [
            { label: 'Suitable stone size', values: ['Up to ~2 cm', '2 cm and above', 'Up to ~1 cm'] },
            { label: 'Incision', values: ['None (via urinary tract)', 'Small skin incision', 'None (external)'] },
            { label: 'Anesthesia', values: ['General/spinal', 'General', 'Usually sedation'] },
            { label: 'Stay', values: ['Day-case–1 night', '1–2 nights', 'Day-case'] },
            { label: 'Stone-free rate', values: ['High', 'Very high', 'Moderate'] }
          ],
          note: 'This table is general information; the final method is determined individually.'
        },
        price: {
          from: 0,
          to: 0,
          currency: 'EUR',
          disclaimer: 'Varies by method and stone burden; a firm quote is given after assessment.'
        },
        packageIncludes: [
          'Procedure and hospital stay',
          'Anesthesia and required tests',
          'Transfers and accommodation',
          'Medical interpreter and coordinator',
          'Follow-up and online monitoring'
        ],
        faqs: [
          { q: 'Which method is right for me?', a: 'It depends on the size, hardness and location of the stone; it becomes clear after imaging.' },
          { q: 'Is the procedure painful?', a: 'Procedures are performed under anesthesia; mild discomfort may follow.' },
          { q: 'Will a stent be placed?', a: 'Some cases need a temporary stent; it is usually removed a short time later.' }
        ]
      },
      ar: {
        title: 'علاج حصوات الكلى (RIRS، PCNL، ESWL)',
        summary: 'أسلوب مُخصَّص حسب حجم الحصاة وموقعها: تفتيت بالليزر، جراحة عبر الجلد، أو موجات صادمة.',
        metaTitle: 'علاج حصوات الكلى | مقارنة RIRS وPCNL وESWL',
        metaDescription: 'مقارنة بين RIRS (ليزر) وPCNL (عبر الجلد) وESWL (موجات صادمة) لحصوات الكلى: المسار، المخاطر، ونطاق السعر.',
        definition: [
          'تتكوّن حصوات الكلى عند تبلور المعادن في البول وتراكمها، وقد تسبب ألمًا شديدًا في الخاصرة أو دمًا في البول أو التهابًا.',
          'يُختار أسلوب العلاج حسب حجم الحصاة وصلابتها وموقعها. تُستخدَم الموجات الصادمة للحصوات الصغيرة، وتنظير الحالب المرن بالليزر للحصوات المتوسطة، والجراحة عبر الجلد للحصوات الكبيرة.'
        ],
        surgeonExperience: {
          caseVolume: 'أكثر من 1,350 حالة بالمنظار الداخلي',
          note: 'يعكس عدد الحالات إجمالي الخبرة الجراحية للأستاذ المشارك د. مسلم إرغن في هذا المجال.'
        },
        timeline: [
          { when: 'عن بُعد', title: 'التقييم الأولي', body: 'تُراجَع نتائج الأشعة المقطعية/الموجات فوق الصوتية وفحوص الدم والبول، ويُخطَّط للأسلوب المناسب.' },
          { when: 'اليوم 1', title: 'الوصول والفحوصات', body: 'الفحص، التصوير اللازم، وتقييم التخدير.' },
          { when: 'اليوم 2', title: 'الإجراء', body: 'يتم الإجراء حسب الأسلوب المختار؛ معظم الحالات في اليوم نفسه أو بمبيت ليلة واحدة.' },
          { when: 'اليوم 3–4', title: 'المراجعة', body: 'التأكد من خلو الكلية من الحصوات، تقييم الدعامة عند الحاجة، والإذن بالعودة.' }
        ],
        risks: [
          'نزيف والتهاب المسالك البولية',
          'حرقان أو دم مؤقت عند التبول',
          'حالات تستلزم وضع دعامة',
          'عدم إزالة الحصاة بالكامل والحاجة لإجراء إضافي'
        ],
        alternatives: [
          'إسقاط الحصاة بالأدوية (للحصوات الصغيرة)',
          'نهج الانتظار والمراقبة (حصوات صغيرة دون أعراض)',
          'الجراحة المفتوحة/بالمنظار (نادرًا، في الحالات المعقّدة)'
        ],
        comparison: {
          title: 'RIRS مقابل PCNL مقابل ESWL',
          columns: ['المعيار', 'RIRS (ليزر)', 'PCNL (عبر الجلد)', 'ESWL (موجات صادمة)'],
          rows: [
            { label: 'حجم الحصاة المناسب', values: ['حتى نحو 2 سم', '2 سم فأكثر', 'حتى نحو 1 سم'] },
            { label: 'الشق', values: ['لا يوجد (عبر المسالك)', 'شق جلدي صغير', 'لا يوجد (خارجي)'] },
            { label: 'التخدير', values: ['عام/نصفي', 'عام', 'تخدير خفيف عادةً'] },
            { label: 'المبيت', values: ['نفس اليوم–ليلة واحدة', 'ليلة–ليلتان', 'نفس اليوم'] },
            { label: 'نسبة الخلو من الحصى', values: ['مرتفعة', 'مرتفعة جدًا', 'متوسطة'] }
          ],
          note: 'هذا الجدول للمعلومات العامة؛ ويُحدَّد الأسلوب النهائي بحسب كل حالة.'
        },
        price: {
          from: 0,
          to: 0,
          currency: 'EUR',
          disclaimer: 'يختلف حسب الأسلوب وكمية الحصى؛ يُقدَّم عرض نهائي بعد التقييم.'
        },
        packageIncludes: [
          'الإجراء والإقامة في المستشفى',
          'التخدير والفحوصات اللازمة',
          'التنقلات والإقامة',
          'مترجم طبي ومنسّق',
          'المراجعة والمتابعة الإلكترونية'
        ],
        faqs: [
          { q: 'أي أسلوب يناسبني؟', a: 'يعتمد على حجم الحصاة وصلابتها وموقعها؛ ويتّضح بعد التصوير.' },
          { q: 'هل الإجراء مؤلم؟', a: 'تُجرى الإجراءات تحت التخدير؛ وقد يعقبها انزعاج خفيف.' },
          { q: 'هل تُوضَع دعامة؟', a: 'تحتاج بعض الحالات دعامة مؤقتة؛ وتُزال عادةً بعد فترة قصيرة.' }
        ]
      },
      de: {
        title: 'Nierensteinbehandlung (RIRS, PCNL, ESWL)',
        summary: 'Ein auf Größe und Lage des Steins abgestimmtes Verfahren: Laserzertrümmerung, perkutane Chirurgie oder Stoßwellen.',
        metaTitle: 'Nierensteinbehandlung | Vergleich RIRS, PCNL, ESWL',
        metaDescription: 'Vergleich von RIRS (Laser), PCNL (perkutan) und ESWL (Stoßwelle) bei Nierensteinen: Ablauf, Risiken und Preisspanne.',
        definition: [
          'Nierensteine entstehen, wenn Mineralien im Urin auskristallisieren und sich ablagern; sie können starke Flankenschmerzen, Blut im Urin oder eine Infektion verursachen.',
          'Das Verfahren richtet sich nach Größe, Härte und Lage des Steins. Bei kleinen Steinen kommen Stoßwellen zum Einsatz, bei mittleren die flexible Ureteroskopie mit Laser, bei großen die perkutane (durch die Haut) Chirurgie.'
        ],
        surgeonExperience: {
          caseVolume: 'über 1.350 endourologische Fälle',
          note: 'Die Fallzahl spiegelt die gesamte chirurgische Erfahrung von Doz. Dr. Müslüm Ergün in diesem Bereich wider.'
        },
        timeline: [
          { when: 'Aus der Ferne', title: 'Vorabbewertung', body: 'Ihre CT-/Ultraschall- sowie Blut- und Urinbefunde werden geprüft und das passende Verfahren geplant.' },
          { when: 'Tag 1', title: 'Ankunft & Untersuchungen', body: 'Untersuchung, erforderliche Bildgebung und Anästhesiebewertung.' },
          { when: 'Tag 2', title: 'Eingriff', body: 'Eingriff je nach gewähltem Verfahren; die meisten Fälle ambulant oder mit 1 Nacht Aufenthalt.' },
          { when: 'Tag 3–4', title: 'Kontrolle', body: 'Steinfreiheitskontrolle, ggf. Stentbewertung und Reisefreigabe.' }
        ],
        risks: [
          'Blutung und Harnwegsinfektion',
          'Vorübergehendes Brennen oder Blut beim Wasserlassen',
          'Situationen, die einen Stent erfordern',
          'Unvollständige Steinentfernung und Bedarf an einem erneuten Eingriff'
        ],
        alternatives: [
          'Medikamentöser Steinabgang (bei kleinen Steinen)',
          'Abwartendes Vorgehen (asymptomatische kleine Steine)',
          'Offene/laparoskopische Chirurgie (selten, in komplexen Fällen)'
        ],
        comparison: {
          title: 'RIRS vs. PCNL vs. ESWL',
          columns: ['Kriterium', 'RIRS (Laser)', 'PCNL (perkutan)', 'ESWL (Stoßwelle)'],
          rows: [
            { label: 'Geeignete Steingröße', values: ['bis ca. 2 cm', '2 cm und mehr', 'bis ca. 1 cm'] },
            { label: 'Schnitt', values: ['Keiner (über die Harnwege)', 'Kleiner Hautschnitt', 'Keiner (extern)'] },
            { label: 'Anästhesie', values: ['Vollnarkose/Spinal', 'Vollnarkose', 'Meist Sedierung'] },
            { label: 'Aufenthalt', values: ['Ambulant–1 Nacht', '1–2 Nächte', 'Ambulant'] },
            { label: 'Steinfreiheitsrate', values: ['Hoch', 'Sehr hoch', 'Mittel'] }
          ],
          note: 'Diese Tabelle dient der allgemeinen Information; das endgültige Verfahren wird individuell festgelegt.'
        },
        price: {
          from: 0,
          to: 0,
          currency: 'EUR',
          disclaimer: 'Variiert je nach Verfahren und Steinlast; ein verbindliches Angebot folgt nach der Bewertung.'
        },
        packageIncludes: [
          'Eingriff und Krankenhausaufenthalt',
          'Anästhesie und erforderliche Untersuchungen',
          'Transfers und Unterkunft',
          'Medizinischer Dolmetscher und Koordinator',
          'Kontrolle und Online-Nachsorge'
        ],
        faqs: [
          { q: 'Welches Verfahren ist für mich geeignet?', a: 'Das hängt von Größe, Härte und Lage des Steins ab und wird nach der Bildgebung klar.' },
          { q: 'Ist der Eingriff schmerzhaft?', a: 'Die Eingriffe erfolgen unter Anästhesie; danach können leichte Beschwerden auftreten.' },
          { q: 'Wird ein Stent gelegt?', a: 'Manche Fälle benötigen einen vorübergehenden Stent; er wird meist kurz darauf entfernt.' }
        ]
      },
      ru: {
        title: 'Лечение камней в почках (RIRS, PCNL, ESWL)',
        summary: 'Метод, подобранный по размеру и расположению камня: лазерное дробление, чрескожная операция или ударные волны.',
        metaTitle: 'Лечение камней в почках | Сравнение RIRS, PCNL, ESWL',
        metaDescription: 'Сравнение RIRS (лазер), PCNL (чрескожно) и ESWL (ударная волна) при камнях в почках: процесс, риски и диапазон цен.',
        definition: [
          'Камни в почках образуются при кристаллизации и накоплении минералов в моче и могут вызывать сильную боль в боку, кровь в моче или инфекцию.',
          'Метод лечения выбирают по размеру, плотности и расположению камня. При мелких камнях применяют ударные волны, при средних — гибкую уретероскопию с лазером, при крупных — чрескожную (через кожу) операцию.'
        ],
        surgeonExperience: {
          caseVolume: 'более 1 350 эндоурологических случаев',
          note: 'Число операций отражает общий хирургический опыт доцента д-ра Мюслюма Эргюна в этой области.'
        },
        timeline: [
          { when: 'Удалённо', title: 'Предварительная оценка', body: 'Изучаются результаты КТ/УЗИ и анализов крови и мочи, планируется подходящий метод.' },
          { when: 'День 1', title: 'Прибытие и обследование', body: 'Осмотр, необходимая визуализация и анестезиологическая оценка.' },
          { when: 'День 2', title: 'Процедура', body: 'Процедура по выбранному методу; большинство случаев — в тот же день или с 1 ночью пребывания.' },
          { when: 'День 3–4', title: 'Контроль', body: 'Проверка отсутствия камней, при необходимости оценка стента и разрешение на возвращение.' }
        ],
        risks: [
          'Кровотечение и инфекция мочевыводящих путей',
          'Временное жжение или кровь при мочеиспускании',
          'Ситуации, требующие стента',
          'Неполное удаление камня и необходимость повторной процедуры'
        ],
        alternatives: [
          'Медикаментозное отхождение камня (при мелких камнях)',
          'Выжидательная тактика (бессимптомные мелкие камни)',
          'Открытая/лапароскопическая операция (редко, в сложных случаях)'
        ],
        comparison: {
          title: 'RIRS против PCNL против ESWL',
          columns: ['Критерий', 'RIRS (лазер)', 'PCNL (чрескожно)', 'ESWL (ударная волна)'],
          rows: [
            { label: 'Подходящий размер камня', values: ['до ~2 см', '2 см и более', 'до ~1 см'] },
            { label: 'Разрез', values: ['Нет (через мочевые пути)', 'Небольшой разрез кожи', 'Нет (снаружи)'] },
            { label: 'Анестезия', values: ['Общая/спинальная', 'Общая', 'Обычно седация'] },
            { label: 'Пребывание', values: ['В тот же день–1 ночь', '1–2 ночи', 'В тот же день'] },
            { label: 'Частота полного удаления', values: ['Высокая', 'Очень высокая', 'Средняя'] }
          ],
          note: 'Таблица носит общий характер; окончательный метод определяется индивидуально.'
        },
        price: {
          from: 0,
          to: 0,
          currency: 'EUR',
          disclaimer: 'Зависит от метода и объёма камней; точное предложение — после оценки.'
        },
        packageIncludes: [
          'Процедура и пребывание в стационаре',
          'Анестезия и необходимые анализы',
          'Трансферы и проживание',
          'Медицинский переводчик и координатор',
          'Контроль и онлайн-наблюдение'
        ],
        faqs: [
          { q: 'Какой метод мне подходит?', a: 'Зависит от размера, плотности и расположения камня; становится ясно после визуализации.' },
          { q: 'Процедура болезненна?', a: 'Процедуры проводятся под анестезией; после возможен лёгкий дискомфорт.' },
          { q: 'Будет ли установлен стент?', a: 'В некоторых случаях нужен временный стент; обычно его удаляют вскоре.' }
        ]
      }
    }
  },
  {
    slug: 'bph-prostat-buyumesi',
    priceRangeTRY: { from: 90000, to: 190000 }, // TODO: gerçek fiyatla güncelleyin (tahmini)
    icon: 'prostate',
    videoPlaceholderNote: 'PLACEHOLDER: BPH hasta deneyimi video embed URL’i buraya eklenecek.',
    i18n: {
      tr: {
        title: 'BPH / İyi Huylu Prostat Büyümesi (HoLEP, Rezūm, TURP)',
        summary:
          'İdrar şikâyetlerine yol açan iyi huylu prostat büyümesinde modern, dokuyu koruyan yöntemler.',
        metaTitle: 'BPH Tedavisi | HoLEP, Rezūm ve TURP Karşılaştırması',
        metaDescription:
          'İyi huylu prostat büyümesi (BPH) tedavisinde HoLEP, Rezūm ve TURP yöntemleri; süreç, riskler, alternatifler ve fiyat aralığı.',
        definition: [
          'İyi huylu prostat büyümesi (BPH), yaşla birlikte prostatın büyüyerek idrar akışını zorlaştırmasıdır. Zayıf idrar akışı, sık ve gece idrara çıkma gibi şikâyetlere yol açar.',
          'Modern yöntemler, prostat dokusunu lazerle çıkarma (HoLEP), buhar enerjisiyle küçültme (Rezūm) veya klasik endoskopik rezeksiyon (TURP) seçeneklerini içerir. Seçim prostat boyutuna ve hasta önceliğine göre yapılır.'
        ],
        surgeonExperience: {
          caseVolume: '489+ BPH cerrahisi vakası',
          note: 'Vaka sayısı, Doç. Dr. Müslüm Ergün’ün bu alandaki toplam cerrahi deneyimini yansıtır.'
        },
        timeline: [
          { when: 'Uzaktan', title: 'Ön değerlendirme', body: 'İdrar akım testi, PSA ve prostat hacmi değerleriniz incelenir.' },
          { when: '1. Gün', title: 'Varış ve muayene', body: 'Muayene, üroflowmetri ve gerekli tetkikler.' },
          { when: '2. Gün', title: 'İşlem', body: 'Seçilen yönteme göre işlem; genellikle 1 gece yatış.' },
          { when: '3–4. Gün', title: 'Kontrol', body: 'Sonda değerlendirmesi, taburculuk ve dönüş onayı.' }
        ],
        risks: [
          'Geçici idrarda yanma veya kanama',
          'Retrograd ejakülasyon (menide azalma)',
          'İdrar yolu enfeksiyonu',
          'Nadiren tekrar işlem ihtiyacı'
        ],
        alternatives: [
          'İlaç tedavisi (alfa blokerler, 5-ARI)',
          'Yaşam tarzı değişiklikleri (hafif şikâyetlerde)',
          'Prostatik stent veya UroLift (seçili vakalarda)'
        ],
        comparison: {
          title: 'HoLEP vs Rezūm vs TURP',
          columns: ['Kriter', 'HoLEP (Lazer)', 'Rezūm (Buhar)', 'TURP (Endoskopik)'],
          rows: [
            { label: 'Uygun prostat boyutu', values: ['Her boyut, özellikle büyük', 'Küçük–orta', 'Küçük–orta'] },
            { label: 'Anestezi', values: ['Genel/spinal', 'Sedasyon/lokal', 'Genel/spinal'] },
            { label: 'Cinsel işlev koruma', values: ['İyi', 'Yüksek', 'Orta'] },
            { label: 'Yatış', values: ['1 gece', 'Günübirlik', '1–2 gece'] },
            { label: 'Kalıcılık', values: ['Yüksek', 'Orta', 'Yüksek'] }
          ],
          note: 'Tablo genel bilgilendirmedir; nihai yöntem kişiye göre belirlenir.'
        },
        price: {
          from: 0,
          to: 0,
          currency: 'EUR',
          disclaimer: 'Yöntem ve prostat boyutuna göre değişir.'
        },
        packageIncludes: [
          'İşlem ve hastane yatışı',
          'Anestezi ve tetkikler',
          'Transferler ve konaklama',
          'Tıbbi tercüman ve koordinatör',
          'Kontrol ve online takip'
        ],
        faqs: [
          { q: 'Cinsel işlevim etkilenir mi?', a: 'Yöntemler cinsel işlevi korumayı hedefler; en sık görülen değişiklik retrograd ejakülasyondur.' },
          { q: 'Hangi yöntem daha kalıcı?', a: 'HoLEP büyük prostatlarda kalıcı sonuç verir; Rezūm daha az invazivdir. Seçim size göre yapılır.' },
          { q: 'Sonda ne kadar kalır?', a: 'Genellikle 1–3 gün; yönteme göre değişir.' }
        ]
      },
      en: {
        title: 'BPH / Benign Prostatic Enlargement (HoLEP, Rezūm, TURP)',
        summary: 'Modern, tissue-preserving methods for benign prostate enlargement causing urinary symptoms.',
        metaTitle: 'BPH Treatment | HoLEP, Rezūm and TURP Comparison',
        metaDescription: 'HoLEP, Rezūm and TURP methods for benign prostatic hyperplasia (BPH): process, risks, alternatives and price range.',
        definition: [
          'Benign prostatic enlargement (BPH) is the age-related growth of the prostate that obstructs urine flow. It causes complaints such as a weak stream, frequent and nighttime urination.',
          'Modern methods include laser enucleation of prostate tissue (HoLEP), steam-energy shrinking (Rezūm) or classic endoscopic resection (TURP). The choice is made according to prostate size and patient priorities.'
        ],
        surgeonExperience: {
          caseVolume: '489+ BPH surgery cases',
          note: 'The case volume reflects Assoc. Prof. Dr. Müslüm Ergün’s total surgical experience in this area.'
        },
        timeline: [
          { when: 'Remote', title: 'Pre-assessment', body: 'Your urinary flow test, PSA and prostate volume values are reviewed.' },
          { when: 'Day 1', title: 'Arrival & exam', body: 'Examination, uroflowmetry and required tests.' },
          { when: 'Day 2', title: 'Procedure', body: 'Procedure according to the chosen method; usually a 1-night stay.' },
          { when: 'Day 3–4', title: 'Review', body: 'Catheter assessment, discharge and clearance to return.' }
        ],
        risks: [
          'Temporary burning or blood on urination',
          'Retrograde ejaculation (reduced semen release)',
          'Urinary tract infection',
          'Rarely, need for a repeat procedure'
        ],
        alternatives: [
          'Medication (alpha blockers, 5-ARI)',
          'Lifestyle changes (for mild complaints)',
          'Prostatic stent or UroLift (in selected cases)'
        ],
        comparison: {
          title: 'HoLEP vs Rezūm vs TURP',
          columns: ['Criterion', 'HoLEP (Laser)', 'Rezūm (Steam)', 'TURP (Endoscopic)'],
          rows: [
            { label: 'Suitable prostate size', values: ['Any size, especially large', 'Small–medium', 'Small–medium'] },
            { label: 'Anesthesia', values: ['General/spinal', 'Sedation/local', 'General/spinal'] },
            { label: 'Sexual function preservation', values: ['Good', 'High', 'Moderate'] },
            { label: 'Stay', values: ['1 night', 'Day-case', '1–2 nights'] },
            { label: 'Durability', values: ['High', 'Moderate', 'High'] }
          ],
          note: 'This table is general information; the final method is determined individually.'
        },
        price: {
          from: 0,
          to: 0,
          currency: 'EUR',
          disclaimer: 'Varies by method and prostate size.'
        },
        packageIncludes: [
          'Procedure and hospital stay',
          'Anesthesia and tests',
          'Transfers and accommodation',
          'Medical interpreter and coordinator',
          'Follow-up and online monitoring'
        ],
        faqs: [
          { q: 'Will my sexual function be affected?', a: 'The methods aim to preserve sexual function; the most common change is retrograde ejaculation.' },
          { q: 'Which method is more durable?', a: 'HoLEP gives durable results in large prostates; Rezūm is less invasive. The choice is made for you.' },
          { q: 'How long does the catheter stay?', a: 'Usually 1–3 days; it varies by method.' }
        ]
      },
      ar: {
        title: 'تضخم البروستاتا الحميد (HoLEP، Rezūm، TURP)',
        summary: 'طرق حديثة تحافظ على الأنسجة لعلاج تضخم البروستاتا الحميد المسبِّب لأعراض بولية.',
        metaTitle: 'علاج تضخم البروستاتا | مقارنة HoLEP وRezūm وTURP',
        metaDescription: 'طرق HoLEP وRezūm وTURP لعلاج تضخم البروستاتا الحميد (BPH): المسار، المخاطر، البدائل ونطاق السعر.',
        definition: [
          'تضخم البروستاتا الحميد (BPH) هو تضخم البروستاتا مع التقدم في العمر بما يعيق تدفق البول. ويسبّب أعراضًا مثل ضعف التدفق وكثرة التبول والتبول الليلي.',
          'تشمل الطرق الحديثة استئصال نسيج البروستاتا بالليزر (HoLEP)، أو تقليصه بطاقة البخار (Rezūm)، أو الاستئصال بالمنظار التقليدي (TURP). ويُحدَّد الاختيار حسب حجم البروستاتا وأولويات المريض.'
        ],
        surgeonExperience: {
          caseVolume: 'أكثر من 489 عملية لتضخم البروستاتا الحميد',
          note: 'يعكس عدد الحالات إجمالي الخبرة الجراحية للأستاذ المشارك د. مسلم إرغن في هذا المجال.'
        },
        timeline: [
          { when: 'عن بُعد', title: 'التقييم الأولي', body: 'تُراجَع نتائج اختبار تدفق البول وPSA وحجم البروستاتا.' },
          { when: 'اليوم 1', title: 'الوصول والفحص', body: 'الفحص وقياس التدفق البولي والفحوصات اللازمة.' },
          { when: 'اليوم 2', title: 'الإجراء', body: 'يتم الإجراء حسب الأسلوب المختار؛ عادةً بمبيت ليلة واحدة.' },
          { when: 'اليوم 3–4', title: 'المراجعة', body: 'تقييم القسطرة، الخروج، والإذن بالعودة.' }
        ],
        risks: [
          'حرقان أو دم مؤقت عند التبول',
          'القذف الراجع (قلة كمية السائل المنوي)',
          'التهاب المسالك البولية',
          'نادرًا، الحاجة لإجراء إضافي'
        ],
        alternatives: [
          'العلاج الدوائي (حاصرات ألفا، مثبطات 5-ألفا ريدكتاز)',
          'تغييرات نمط الحياة (للأعراض الخفيفة)',
          'دعامة بروستاتية أو UroLift (في حالات مختارة)'
        ],
        comparison: {
          title: 'HoLEP مقابل Rezūm مقابل TURP',
          columns: ['المعيار', 'HoLEP (ليزر)', 'Rezūm (بخار)', 'TURP (بالمنظار)'],
          rows: [
            { label: 'حجم البروستاتا المناسب', values: ['كل الأحجام، خصوصًا الكبيرة', 'صغير–متوسط', 'صغير–متوسط'] },
            { label: 'التخدير', values: ['عام/نصفي', 'تخدير خفيف/موضعي', 'عام/نصفي'] },
            { label: 'الحفاظ على الوظيفة الجنسية', values: ['جيد', 'مرتفع', 'متوسط'] },
            { label: 'المبيت', values: ['ليلة واحدة', 'نفس اليوم', 'ليلة–ليلتان'] },
            { label: 'الديمومة', values: ['مرتفعة', 'متوسطة', 'مرتفعة'] }
          ],
          note: 'هذا الجدول للمعلومات العامة؛ ويُحدَّد الأسلوب النهائي بحسب كل حالة.'
        },
        price: {
          from: 0,
          to: 0,
          currency: 'EUR',
          disclaimer: 'يختلف حسب الأسلوب وحجم البروستاتا.'
        },
        packageIncludes: [
          'الإجراء والإقامة في المستشفى',
          'التخدير والفحوصات',
          'التنقلات والإقامة',
          'مترجم طبي ومنسّق',
          'المراجعة والمتابعة الإلكترونية'
        ],
        faqs: [
          { q: 'هل ستتأثر وظيفتي الجنسية؟', a: 'تهدف الطرق إلى الحفاظ على الوظيفة الجنسية؛ وأكثر تغيّر شيوعًا هو القذف الراجع.' },
          { q: 'أي أسلوب أكثر ديمومة؟', a: 'يمنح HoLEP نتائج دائمة في البروستاتا الكبيرة؛ وRezūm أقل توغلًا. ويُتَّخذ الاختيار وفقًا لحالتك.' },
          { q: 'كم تبقى القسطرة؟', a: 'عادةً 1–3 أيام؛ وتختلف حسب الأسلوب.' }
        ]
      },
      de: {
        title: 'BPH / gutartige Prostatavergrößerung (HoLEP, Rezūm, TURP)',
        summary: 'Moderne, gewebeschonende Verfahren bei gutartiger Prostatavergrößerung mit Harnbeschwerden.',
        metaTitle: 'BPH-Behandlung | Vergleich HoLEP, Rezūm und TURP',
        metaDescription: 'HoLEP-, Rezūm- und TURP-Verfahren bei gutartiger Prostatavergrößerung (BPH): Ablauf, Risiken, Alternativen und Preisspanne.',
        definition: [
          'Die gutartige Prostatavergrößerung (BPH) ist das altersbedingte Wachstum der Prostata, das den Harnfluss behindert. Sie verursacht Beschwerden wie einen schwachen Strahl sowie häufiges und nächtliches Wasserlassen.',
          'Moderne Verfahren umfassen die Laser-Enukleation des Prostatagewebes (HoLEP), die Verkleinerung mit Dampfenergie (Rezūm) oder die klassische endoskopische Resektion (TURP). Die Wahl richtet sich nach Prostatagröße und Patientenpräferenz.'
        ],
        surgeonExperience: {
          caseVolume: 'über 489 BPH-Eingriffe',
          note: 'Die Fallzahl spiegelt die gesamte chirurgische Erfahrung von Doz. Dr. Müslüm Ergün in diesem Bereich wider.'
        },
        timeline: [
          { when: 'Aus der Ferne', title: 'Vorabbewertung', body: 'Ihre Harnflussmessung, PSA- und Prostatavolumenwerte werden geprüft.' },
          { when: 'Tag 1', title: 'Ankunft & Untersuchung', body: 'Untersuchung, Uroflowmetrie und erforderliche Tests.' },
          { when: 'Tag 2', title: 'Eingriff', body: 'Eingriff je nach gewähltem Verfahren; meist 1 Nacht Aufenthalt.' },
          { when: 'Tag 3–4', title: 'Kontrolle', body: 'Katheterbewertung, Entlassung und Reisefreigabe.' }
        ],
        risks: [
          'Vorübergehendes Brennen oder Blut beim Wasserlassen',
          'Retrograde Ejakulation (verminderter Samenerguss)',
          'Harnwegsinfektion',
          'Selten Bedarf an einem erneuten Eingriff'
        ],
        alternatives: [
          'Medikamentöse Therapie (Alphablocker, 5-ARI)',
          'Lebensstiländerungen (bei leichten Beschwerden)',
          'Prostatastent oder UroLift (in ausgewählten Fällen)'
        ],
        comparison: {
          title: 'HoLEP vs. Rezūm vs. TURP',
          columns: ['Kriterium', 'HoLEP (Laser)', 'Rezūm (Dampf)', 'TURP (endoskopisch)'],
          rows: [
            { label: 'Geeignete Prostatagröße', values: ['Jede Größe, besonders groß', 'Klein–mittel', 'Klein–mittel'] },
            { label: 'Anästhesie', values: ['Vollnarkose/Spinal', 'Sedierung/lokal', 'Vollnarkose/Spinal'] },
            { label: 'Erhalt der Sexualfunktion', values: ['Gut', 'Hoch', 'Mittel'] },
            { label: 'Aufenthalt', values: ['1 Nacht', 'Ambulant', '1–2 Nächte'] },
            { label: 'Dauerhaftigkeit', values: ['Hoch', 'Mittel', 'Hoch'] }
          ],
          note: 'Diese Tabelle dient der allgemeinen Information; das endgültige Verfahren wird individuell festgelegt.'
        },
        price: {
          from: 0,
          to: 0,
          currency: 'EUR',
          disclaimer: 'Variiert je nach Verfahren und Prostatagröße.'
        },
        packageIncludes: [
          'Eingriff und Krankenhausaufenthalt',
          'Anästhesie und Untersuchungen',
          'Transfers und Unterkunft',
          'Medizinischer Dolmetscher und Koordinator',
          'Kontrolle und Online-Nachsorge'
        ],
        faqs: [
          { q: 'Wird meine Sexualfunktion beeinträchtigt?', a: 'Die Verfahren zielen auf den Erhalt der Sexualfunktion; die häufigste Veränderung ist die retrograde Ejakulation.' },
          { q: 'Welches Verfahren ist dauerhafter?', a: 'HoLEP liefert bei großen Prostatae dauerhafte Ergebnisse; Rezūm ist weniger invasiv. Die Wahl wird für Sie getroffen.' },
          { q: 'Wie lange bleibt der Katheter?', a: 'Meist 1–3 Tage; je nach Verfahren unterschiedlich.' }
        ]
      },
      ru: {
        title: 'ДГПЖ / доброкачественное увеличение простаты (HoLEP, Rezūm, TURP)',
        summary: 'Современные, щадящие ткань методы при доброкачественном увеличении простаты с мочевыми симптомами.',
        metaTitle: 'Лечение ДГПЖ | Сравнение HoLEP, Rezūm и TURP',
        metaDescription: 'Методы HoLEP, Rezūm и TURP при доброкачественной гиперплазии простаты (ДГПЖ): процесс, риски, альтернативы и диапазон цен.',
        definition: [
          'Доброкачественное увеличение простаты (ДГПЖ) — возрастной рост простаты, затрудняющий отток мочи. Оно вызывает жалобы: слабую струю, учащённое и ночное мочеиспускание.',
          'Современные методы включают лазерную энуклеацию ткани простаты (HoLEP), уменьшение паровой энергией (Rezūm) или классическую эндоскопическую резекцию (TURP). Выбор зависит от размера простаты и приоритетов пациента.'
        ],
        surgeonExperience: {
          caseVolume: 'более 489 операций при ДГПЖ',
          note: 'Число операций отражает общий хирургический опыт доцента д-ра Мюслюма Эргюна в этой области.'
        },
        timeline: [
          { when: 'Удалённо', title: 'Предварительная оценка', body: 'Изучаются показатели урофлоуметрии, PSA и объёма простаты.' },
          { when: 'День 1', title: 'Прибытие и осмотр', body: 'Осмотр, урофлоуметрия и необходимые анализы.' },
          { when: 'День 2', title: 'Процедура', body: 'Процедура по выбранному методу; обычно 1 ночь пребывания.' },
          { when: 'День 3–4', title: 'Контроль', body: 'Оценка катетера, выписка и разрешение на возвращение.' }
        ],
        risks: [
          'Временное жжение или кровь при мочеиспускании',
          'Ретроградная эякуляция (уменьшение выделения семени)',
          'Инфекция мочевыводящих путей',
          'Редко — необходимость повторной процедуры'
        ],
        alternatives: [
          'Медикаментозная терапия (альфа-блокаторы, 5-ARI)',
          'Изменения образа жизни (при лёгких жалобах)',
          'Простатический стент или UroLift (в отдельных случаях)'
        ],
        comparison: {
          title: 'HoLEP против Rezūm против TURP',
          columns: ['Критерий', 'HoLEP (лазер)', 'Rezūm (пар)', 'TURP (эндоскопически)'],
          rows: [
            { label: 'Подходящий размер простаты', values: ['Любой, особенно крупная', 'Малый–средний', 'Малый–средний'] },
            { label: 'Анестезия', values: ['Общая/спинальная', 'Седация/местная', 'Общая/спинальная'] },
            { label: 'Сохранение половой функции', values: ['Хорошее', 'Высокое', 'Среднее'] },
            { label: 'Пребывание', values: ['1 ночь', 'В тот же день', '1–2 ночи'] },
            { label: 'Долговечность', values: ['Высокая', 'Средняя', 'Высокая'] }
          ],
          note: 'Таблица носит общий характер; окончательный метод определяется индивидуально.'
        },
        price: {
          from: 0,
          to: 0,
          currency: 'EUR',
          disclaimer: 'Зависит от метода и размера простаты.'
        },
        packageIncludes: [
          'Процедура и пребывание в стационаре',
          'Анестезия и анализы',
          'Трансферы и проживание',
          'Медицинский переводчик и координатор',
          'Контроль и онлайн-наблюдение'
        ],
        faqs: [
          { q: 'Повлияет ли это на половую функцию?', a: 'Методы направлены на сохранение половой функции; самое частое изменение — ретроградная эякуляция.' },
          { q: 'Какой метод долговечнее?', a: 'HoLEP даёт стойкий результат при крупной простате; Rezūm менее инвазивен. Выбор делается индивидуально.' },
          { q: 'Сколько времени стоит катетер?', a: 'Обычно 1–3 дня; зависит от метода.' }
        ]
      }
    }
  },
  {
    slug: 'androloji',
    icon: 'andrology',
    offersConsultation: true, // mahremiyet öncelikli hastalar için ücretli özel görüşme
    videoPlaceholderNote: 'PLACEHOLDER: Androloji hasta deneyimi video embed URL’i buraya eklenecek.',
    i18n: {
      tr: {
        title: 'Androloji (Penil Protez, Varikosel, Erektil Disfonksiyon)',
        summary:
          'Erkek cinsel sağlığı ve üreme cerrahisi: penil protez, varikosel, erektil disfonksiyon ve estetik prosedürler.',
        metaTitle: 'Androloji | Penil Protez, Varikosel, ED Cerrahisi',
        metaDescription:
          'Androloji cerrahisi: penil protez, penil uzatma ve kalınlaştırma, varikosel ve erektil disfonksiyon tedavisi; süreç, riskler ve fiyat aralığı.',
        definition: [
          'Androloji, erkek cinsel ve üreme sağlığıyla ilgilenen ürolojik alt daldır. İlaçla düzelmeyen erektil disfonksiyon, varikosele bağlı kısırlık veya cinsel işlev sorunlarında cerrahi seçenekler sunar.',
          'Uygulamalar arasında şişirilebilir penil protez, mikrocerrahi varikoselektomi, penil uzatma/kalınlaştırma ve seçili erektil disfonksiyon cerrahileri yer alır. Doğru prosedür ayrıntılı değerlendirme sonrası belirlenir.'
        ],
        surgeonExperience: {
          caseVolume: '583+ androloji vakası',
          note: 'Vaka sayısı, Doç. Dr. Müslüm Ergün’ün bu alandaki toplam cerrahi deneyimini yansıtır.'
        },
        timeline: [
          { when: 'Uzaktan', title: 'Gizli ön görüşme', body: 'Hormonal ve damarsal değerlendirme sonuçlarınız gizlilikle incelenir.' },
          { when: '1. Gün', title: 'Varış ve muayene', body: 'Muayene, gerekli testler ve prosedür planlaması.' },
          { when: '2. Gün', title: 'Ameliyat', body: 'Seçilen prosedür; çoğu vakada 1 gece yatış.' },
          { when: '3–5. Gün', title: 'Kontrol', body: 'Pansuman, bilgilendirme ve dönüş onayı; protezde kullanım eğitimi.' }
        ],
        risks: [
          'Enfeksiyon (özellikle protez cerrahisinde)',
          'Şişlik, morarma ve geçici his değişikliği',
          'Protezde mekanik sorun ihtimali (uzun vadede)',
          'Beklentilerin gerçekçi tutulması gerekliliği'
        ],
        alternatives: [
          'Oral ilaçlar (PDE5 inhibitörleri)',
          'Penil enjeksiyon veya vakum cihazı',
          'Şok dalga tedavisi (seçili vakalarda)',
          'Yaşam tarzı ve hormonal düzenleme'
        ],
        price: {
          from: 0,
          to: 0,
          currency: 'EUR',
          disclaimer: 'Protez markası ve prosedüre göre değişir.'
        },
        packageIncludes: [
          'Ameliyat ve hastane yatışı',
          'Anestezi ve tetkikler',
          '(Varsa) protez cihazı',
          'Transferler ve konaklama',
          'Tıbbi tercüman ve gizli koordinasyon',
          'Kontrol ve online takip'
        ],
        faqs: [
          { q: 'Süreç gizli tutulur mu?', a: 'Evet; tüm görüşmeler ve koordinasyon gizlilik ilkesiyle yürütülür.' },
          { q: 'Penil protez sonrası cinsel işlev nasıl olur?', a: 'Protez, ilaçla düzelmeyen sertleşme sorununda kalıcı çözüm sunar; kullanım eğitimi verilir.' },
          { q: 'Varikosel kısırlığı düzeltir mi?', a: 'Mikrocerrahi varikoselektomi seçili hastalarda sperm parametrelerini iyileştirebilir.' }
        ]
      },
      en: {
        title: 'Andrology (Penile Implant, Varicocele, Erectile Dysfunction)',
        summary: 'Male sexual health and reproductive surgery: penile implant, varicocele, erectile dysfunction and aesthetic procedures.',
        metaTitle: 'Andrology | Penile Implant, Varicocele, ED Surgery',
        metaDescription: 'Andrology surgery: penile implant, penile lengthening and girth enhancement, varicocele and erectile dysfunction treatment; process, risks and price range.',
        definition: [
          'Andrology is the urological subspecialty dealing with male sexual and reproductive health. It offers surgical options for medication-resistant erectile dysfunction, varicocele-related infertility or sexual function problems.',
          'Procedures include the inflatable penile implant, microsurgical varicocelectomy, penile lengthening/girth enhancement and selected erectile dysfunction surgeries. The right procedure is determined after a detailed assessment.'
        ],
        surgeonExperience: {
          caseVolume: '583+ andrology cases',
          note: 'The case volume reflects Assoc. Prof. Dr. Müslüm Ergün’s total surgical experience in this area.'
        },
        timeline: [
          { when: 'Remote', title: 'Confidential pre-consultation', body: 'Your hormonal and vascular assessment results are reviewed with confidentiality.' },
          { when: 'Day 1', title: 'Arrival & exam', body: 'Examination, required tests and procedure planning.' },
          { when: 'Day 2', title: 'Surgery', body: 'The chosen procedure; most cases with a 1-night stay.' },
          { when: 'Day 3–5', title: 'Review', body: 'Dressing, information and clearance to return; usage training for implants.' }
        ],
        risks: [
          'Infection (especially in implant surgery)',
          'Swelling, bruising and temporary sensory change',
          'Possibility of a mechanical implant issue (long term)',
          'The need to keep expectations realistic'
        ],
        alternatives: [
          'Oral medication (PDE5 inhibitors)',
          'Penile injection or vacuum device',
          'Shockwave therapy (in selected cases)',
          'Lifestyle and hormonal adjustment'
        ],
        price: {
          from: 0,
          to: 0,
          currency: 'EUR',
          disclaimer: 'Varies by implant brand and procedure.'
        },
        packageIncludes: [
          'Surgery and hospital stay',
          'Anesthesia and tests',
          '(If applicable) implant device',
          'Transfers and accommodation',
          'Medical interpreter and confidential coordination',
          'Follow-up and online monitoring'
        ],
        faqs: [
          { q: 'Is the process kept confidential?', a: 'Yes; all consultations and coordination are conducted with the principle of confidentiality.' },
          { q: 'What is sexual function like after a penile implant?', a: 'The implant offers a permanent solution for erection problems that do not respond to medication; usage training is provided.' },
          { q: 'Does varicocele surgery correct infertility?', a: 'Microsurgical varicocelectomy can improve sperm parameters in selected patients.' }
        ]
      },
      ar: {
        title: 'طب الذكورة (الدعامة الذكرية، دوالي الخصية، ضعف الانتصاب)',
        summary: 'جراحة الصحة الجنسية والإنجابية للرجل: الدعامة الذكرية، دوالي الخصية، ضعف الانتصاب والإجراءات التجميلية، بسرية تامة.',
        metaTitle: 'طب الذكورة | الدعامة الذكرية، دوالي الخصية، جراحة ضعف الانتصاب',
        metaDescription: 'جراحة طب الذكورة: الدعامة الذكرية، إطالة وتكبير القضيب، دوالي الخصية وعلاج ضعف الانتصاب؛ المسار، المخاطر ونطاق السعر — بخصوصية كاملة.',
        definition: [
          'طب الذكورة هو أحد فروع المسالك البولية المعنيّ بالصحة الجنسية والإنجابية للرجل. ويوفّر خيارات جراحية لضعف الانتصاب غير المستجيب للأدوية، والعقم المرتبط بدوالي الخصية، أو مشكلات الوظيفة الجنسية.',
          'تشمل الإجراءات الدعامة الذكرية القابلة للنفخ، واستئصال دوالي الخصية بالجراحة الدقيقة، وإطالة/تكبير القضيب، وجراحات مختارة لضعف الانتصاب. ويُحدَّد الإجراء المناسب بعد تقييم مفصّل.'
        ],
        surgeonExperience: {
          caseVolume: 'أكثر من 583 عملية في طب الذكورة',
          note: 'يعكس عدد الحالات إجمالي الخبرة الجراحية للأستاذ المشارك د. مسلم إرغن في هذا المجال.'
        },
        timeline: [
          { when: 'عن بُعد', title: 'استشارة أولية سرّية', body: 'تُراجَع نتائج تقييمك الهرموني والوعائي بسرية تامة.' },
          { when: 'اليوم 1', title: 'الوصول والفحص', body: 'الفحص، الفحوصات اللازمة، وتخطيط الإجراء.' },
          { when: 'اليوم 2', title: 'العملية', body: 'الإجراء المختار؛ ومبيت ليلة واحدة في معظم الحالات.' },
          { when: 'اليوم 3–5', title: 'المراجعة', body: 'تغيير الضمادات، التوعية، والإذن بالعودة؛ وتدريب على استخدام الدعامة.' }
        ],
        risks: [
          'العدوى (خصوصًا في جراحة الدعامات)',
          'تورّم وكدمات وتغيّر مؤقت في الإحساس',
          'احتمال خلل ميكانيكي في الدعامة (على المدى الطويل)',
          'ضرورة إبقاء التوقعات واقعية'
        ],
        alternatives: [
          'الأدوية الفموية (مثبطات PDE5)',
          'الحقن الموضعي أو جهاز التفريغ الهوائي',
          'العلاج بالموجات التصادمية (في حالات مختارة)',
          'تعديل نمط الحياة والتوازن الهرموني'
        ],
        price: {
          from: 0,
          to: 0,
          currency: 'EUR',
          disclaimer: 'يختلف حسب نوع الدعامة والإجراء.'
        },
        packageIncludes: [
          'العملية والإقامة في المستشفى',
          'التخدير والفحوصات',
          '(عند الحاجة) جهاز الدعامة',
          'التنقلات والإقامة',
          'مترجم طبي وتنسيق سرّي',
          'المراجعة والمتابعة الإلكترونية'
        ],
        faqs: [
          { q: 'هل تُحفظ الخصوصية أثناء العملية؟', a: 'نعم؛ تُدار جميع الاستشارات والتنسيق وفق مبدأ السرية التامة.' },
          { q: 'كيف تكون الوظيفة الجنسية بعد الدعامة الذكرية؟', a: 'توفّر الدعامة حلًّا دائمًا لمشكلة الانتصاب غير المستجيبة للأدوية؛ ويُقدَّم تدريب على الاستخدام.' },
          { q: 'هل تصحّح جراحة الدوالي العقم؟', a: 'قد تحسّن جراحة دوالي الخصية الدقيقة مؤشرات الحيوانات المنوية لدى مرضى مختارين.' }
        ]
      },
      de: {
        title: 'Andrologie (Penisimplantat, Varikozele, erektile Dysfunktion)',
        summary: 'Chirurgie der männlichen Sexual- und Fortpflanzungsgesundheit: Penisimplantat, Varikozele, erektile Dysfunktion und ästhetische Eingriffe.',
        metaTitle: 'Andrologie | Penisimplantat, Varikozele, ED-Chirurgie',
        metaDescription: 'Andrologische Chirurgie: Penisimplantat, Penisverlängerung und -verdickung, Varikozele und Behandlung der erektilen Dysfunktion; Ablauf, Risiken und Preisspanne.',
        definition: [
          'Die Andrologie ist das urologische Teilgebiet für die männliche Sexual- und Fortpflanzungsgesundheit. Sie bietet chirurgische Optionen bei medikamentenresistenter erektiler Dysfunktion, varikozelenbedingter Unfruchtbarkeit oder Sexualfunktionsstörungen.',
          'Zu den Eingriffen zählen das aufblasbare Penisimplantat, die mikrochirurgische Varikozelektomie, Penisverlängerung/-verdickung sowie ausgewählte Operationen bei erektiler Dysfunktion. Der passende Eingriff wird nach einer ausführlichen Bewertung festgelegt.'
        ],
        surgeonExperience: {
          caseVolume: 'über 583 andrologische Eingriffe',
          note: 'Die Fallzahl spiegelt die gesamte chirurgische Erfahrung von Doz. Dr. Müslüm Ergün in diesem Bereich wider.'
        },
        timeline: [
          { when: 'Aus der Ferne', title: 'Vertrauliche Erstberatung', body: 'Ihre hormonellen und vaskulären Befunde werden vertraulich geprüft.' },
          { when: 'Tag 1', title: 'Ankunft & Untersuchung', body: 'Untersuchung, erforderliche Tests und Eingriffsplanung.' },
          { when: 'Tag 2', title: 'Operation', body: 'Der gewählte Eingriff; meist mit 1 Nacht Aufenthalt.' },
          { when: 'Tag 3–5', title: 'Kontrolle', body: 'Verbandswechsel, Aufklärung und Reisefreigabe; bei Implantaten Anwendungsschulung.' }
        ],
        risks: [
          'Infektion (besonders bei der Implantatchirurgie)',
          'Schwellung, Blutergüsse und vorübergehende Empfindungsänderung',
          'Möglichkeit eines mechanischen Implantatproblems (langfristig)',
          'Notwendigkeit, die Erwartungen realistisch zu halten'
        ],
        alternatives: [
          'Orale Medikamente (PDE5-Hemmer)',
          'Penisinjektion oder Vakuumpumpe',
          'Stoßwellentherapie (in ausgewählten Fällen)',
          'Lebensstil und hormonelle Anpassung'
        ],
        price: {
          from: 0,
          to: 0,
          currency: 'EUR',
          disclaimer: 'Variiert je nach Implantatmarke und Eingriff.'
        },
        packageIncludes: [
          'Operation und Krankenhausaufenthalt',
          'Anästhesie und Untersuchungen',
          '(Falls zutreffend) Implantat',
          'Transfers und Unterkunft',
          'Medizinischer Dolmetscher und vertrauliche Koordination',
          'Kontrolle und Online-Nachsorge'
        ],
        faqs: [
          { q: 'Wird der Prozess vertraulich behandelt?', a: 'Ja; alle Beratungen und die Koordination erfolgen nach dem Grundsatz der Vertraulichkeit.' },
          { q: 'Wie ist die Sexualfunktion nach einem Penisimplantat?', a: 'Das Implantat bietet eine dauerhafte Lösung bei Erektionsproblemen, die nicht auf Medikamente ansprechen; eine Anwendungsschulung wird angeboten.' },
          { q: 'Behebt eine Varikozelen-Operation die Unfruchtbarkeit?', a: 'Die mikrochirurgische Varikozelektomie kann bei ausgewählten Patienten die Spermienparameter verbessern.' }
        ]
      },
      ru: {
        title: 'Андрология (пенильный имплант, варикоцеле, эректильная дисфункция)',
        summary: 'Хирургия мужского сексуального и репродуктивного здоровья: пенильный имплант, варикоцеле, эректильная дисфункция и эстетические процедуры.',
        metaTitle: 'Андрология | Пенильный имплант, варикоцеле, хирургия ЭД',
        metaDescription: 'Андрологическая хирургия: пенильный имплант, удлинение и утолщение полового члена, варикоцеле и лечение эректильной дисфункции; процесс, риски и диапазон цен.',
        definition: [
          'Андрология — урологическая специализация, занимающаяся мужским сексуальным и репродуктивным здоровьем. Она предлагает хирургические решения при устойчивой к лекарствам эректильной дисфункции, бесплодии на фоне варикоцеле или нарушениях половой функции.',
          'Процедуры включают надувной пенильный имплант, микрохирургическую варикоцелэктомию, удлинение/утолщение полового члена и отдельные операции при эректильной дисфункции. Подходящая процедура определяется после подробной оценки.'
        ],
        surgeonExperience: {
          caseVolume: 'более 583 андрологических операций',
          note: 'Число операций отражает общий хирургический опыт доцента д-ра Мюслюма Эргюна в этой области.'
        },
        timeline: [
          { when: 'Удалённо', title: 'Конфиденциальная предварительная консультация', body: 'Результаты гормональной и сосудистой оценки изучаются конфиденциально.' },
          { when: 'День 1', title: 'Прибытие и осмотр', body: 'Осмотр, необходимые анализы и планирование процедуры.' },
          { when: 'День 2', title: 'Операция', body: 'Выбранная процедура; в большинстве случаев 1 ночь пребывания.' },
          { when: 'День 3–5', title: 'Контроль', body: 'Перевязка, информирование и разрешение на возвращение; обучение пользованию имплантом.' }
        ],
        risks: [
          'Инфекция (особенно при имплантации)',
          'Отёк, синяки и временное изменение чувствительности',
          'Возможность механической неисправности импланта (в долгосрочной перспективе)',
          'Необходимость сохранять реалистичные ожидания'
        ],
        alternatives: [
          'Пероральные препараты (ингибиторы ФДЭ-5)',
          'Инъекции в половой член или вакуумное устройство',
          'Ударно-волновая терапия (в отдельных случаях)',
          'Коррекция образа жизни и гормонального фона'
        ],
        price: {
          from: 0,
          to: 0,
          currency: 'EUR',
          disclaimer: 'Зависит от марки импланта и процедуры.'
        },
        packageIncludes: [
          'Операция и пребывание в стационаре',
          'Анестезия и анализы',
          '(При необходимости) имплант',
          'Трансферы и проживание',
          'Медицинский переводчик и конфиденциальная координация',
          'Контроль и онлайн-наблюдение'
        ],
        faqs: [
          { q: 'Сохраняется ли конфиденциальность?', a: 'Да; все консультации и координация ведутся по принципу конфиденциальности.' },
          { q: 'Какова половая функция после пенильного импланта?', a: 'Имплант даёт постоянное решение при проблемах эрекции, не поддающихся лекарствам; проводится обучение пользованию.' },
          { q: 'Исправляет ли операция при варикоцеле бесплодие?', a: 'Микрохирургическая варикоцелэктомия может улучшить показатели спермы у отдельных пациентов.' }
        ]
      }
    }
  },
  {
    slug: 'uroonkoloji',
    icon: 'oncology',
    videoPlaceholderNote: 'PLACEHOLDER: Üroonkoloji hasta deneyimi video embed URL’i buraya eklenecek.',
    i18n: {
      tr: {
        title: 'Üroonkoloji (Mesane, Böbrek, Testis Tümörü Cerrahisi)',
        summary:
          'Üriner sistem ve erkek üreme organları kanserlerinde minimal invaziv ve organ koruyucu cerrahi.',
        metaTitle: 'Üroonkoloji | Mesane, Böbrek, Testis Kanseri Cerrahisi',
        metaDescription:
          'Üroonkolojik cerrahi: mesane, böbrek ve testis tümörlerinde robotik/laparoskopik ve organ koruyucu yöntemler; süreç, riskler ve fiyat aralığı.',
        definition: [
          'Üroonkoloji; böbrek, mesane, prostat ve testis gibi üriner ve erkek üreme sistemi kanserlerinin cerrahi tedavisiyle ilgilenir.',
          'Uygun vakalarda organ koruyucu (ör. kısmi nefrektomi) ve minimal invaziv robotik/laparoskopik teknikler tercih edilir. Tedavi, multidisipliner tümör konseyi kararıyla planlanır.'
        ],
        surgeonExperience: {
          caseVolume: '653+ üroonkoloji vakası',
          note: 'Vaka sayısı, Doç. Dr. Müslüm Ergün’ün bu alandaki toplam cerrahi deneyimini yansıtır.'
        },
        timeline: [
          { when: 'Uzaktan', title: 'Konsey değerlendirmesi', body: 'Patoloji ve görüntüleme sonuçlarınız tümör konseyinde değerlendirilir.' },
          { when: '1–2. Gün', title: 'Varış ve tetkik', body: 'Muayene, evreleme tetkikleri ve anestezi değerlendirmesi.' },
          { when: '3. Gün', title: 'Ameliyat', body: 'Robotik/laparoskopik veya açık cerrahi; kapsama göre yatış süresi değişir.' },
          { when: '5–7. Gün', title: 'Kontrol ve patoloji', body: 'Patoloji sonucu, sonraki adımların planı ve dönüş onayı.' }
        ],
        risks: [
          'Kanama, enfeksiyon ve genel cerrahi riskler',
          'Organ işlevinde değişiklik (kapsama göre)',
          'Ek tedavi (kemoterapi/immünoterapi) gerekebilmesi',
          'Nüks takibi gerekliliği'
        ],
        alternatives: [
          'Aktif izlem (seçili küçük tümörlerde)',
          'Ablasyon teknikleri (seçili böbrek tümörlerinde)',
          'Radyoterapi/sistemik tedavi (evreye göre)',
          'Mesane koruyucu protokoller (seçili vakalarda)'
        ],
        price: {
          from: 0,
          to: 0,
          currency: 'EUR',
          disclaimer: 'Tümör tipi, evre ve cerrahi kapsama göre değişir.'
        },
        packageIncludes: [
          'Cerrahi ve hastane yatışı',
          'Anestezi ve evreleme tetkikleri',
          'Patoloji incelemesi',
          'Transferler ve konaklama',
          'Tıbbi tercüman ve koordinatör',
          'Kontrol ve online takip'
        ],
        faqs: [
          { q: 'Böbreğimin tamamı alınacak mı?', a: 'Uygun vakalarda sadece tümörlü kısım alınır (kısmi nefrektomi); karar görüntüleme sonrası verilir.' },
          { q: 'Ameliyat sonrası ek tedavi gerekir mi?', a: 'Patoloji ve evreye göre değişir; konsey kararıyla planlanır.' },
          { q: 'Takip nasıl yapılır?', a: 'Düzenli görüntüleme ve kan testleriyle; uzaktan takip desteği sağlanır.' }
        ]
      },
      en: {
        title: 'Uro-Oncology (Bladder, Kidney, Testicular Tumor Surgery)',
        summary: 'Minimally invasive and organ-preserving surgery for cancers of the urinary system and male reproductive organs.',
        metaTitle: 'Uro-Oncology | Bladder, Kidney, Testicular Cancer Surgery',
        metaDescription: 'Uro-oncological surgery: robotic/laparoscopic and organ-preserving methods for bladder, kidney and testicular tumors; process, risks and price range.',
        definition: [
          'Uro-oncology deals with the surgical treatment of urinary and male reproductive system cancers such as kidney, bladder, prostate and testicular cancer.',
          'In suitable cases, organ-preserving (e.g., partial nephrectomy) and minimally invasive robotic/laparoscopic techniques are preferred. Treatment is planned by a multidisciplinary tumor board.'
        ],
        surgeonExperience: {
          caseVolume: '653+ uro-oncology cases',
          note: 'The case volume reflects Assoc. Prof. Dr. Müslüm Ergün’s total surgical experience in this area.'
        },
        timeline: [
          { when: 'Remote', title: 'Board review', body: 'Your pathology and imaging results are reviewed by the tumor board.' },
          { when: 'Day 1–2', title: 'Arrival & tests', body: 'Examination, staging tests and anesthesia assessment.' },
          { when: 'Day 3', title: 'Surgery', body: 'Robotic/laparoscopic or open surgery; the length of stay varies with the scope.' },
          { when: 'Day 5–7', title: 'Review & pathology', body: 'Pathology result, plan for next steps and clearance to return.' }
        ],
        risks: [
          'Bleeding, infection and general surgical risks',
          'Changes in organ function (depending on scope)',
          'Possible need for additional treatment (chemotherapy/immunotherapy)',
          'The need for recurrence follow-up'
        ],
        alternatives: [
          'Active surveillance (in selected small tumors)',
          'Ablation techniques (in selected kidney tumors)',
          'Radiotherapy/systemic therapy (depending on stage)',
          'Bladder-preserving protocols (in selected cases)'
        ],
        price: {
          from: 0,
          to: 0,
          currency: 'EUR',
          disclaimer: 'Varies by tumor type, stage and surgical scope.'
        },
        packageIncludes: [
          'Surgery and hospital stay',
          'Anesthesia and staging tests',
          'Pathology examination',
          'Transfers and accommodation',
          'Medical interpreter and coordinator',
          'Follow-up and online monitoring'
        ],
        faqs: [
          { q: 'Will my entire kidney be removed?', a: 'In suitable cases only the tumor portion is removed (partial nephrectomy); the decision is made after imaging.' },
          { q: 'Will I need additional treatment after surgery?', a: 'It depends on pathology and stage; it is planned by the tumor board.' },
          { q: 'How is follow-up done?', a: 'With regular imaging and blood tests; remote follow-up support is provided.' }
        ]
      },
      ar: {
        title: 'أورام المسالك البولية (جراحة أورام المثانة والكلى والخصية)',
        summary: 'جراحة قليلة التوغل ومحافِظة على الأعضاء لعلاج سرطانات الجهاز البولي والأعضاء التناسلية الذكرية.',
        metaTitle: 'أورام المسالك البولية | جراحة سرطان المثانة والكلى والخصية',
        metaDescription: 'جراحة أورام المسالك البولية: أساليب روبوتية/بالمنظار ومحافِظة على الأعضاء لأورام المثانة والكلى والخصية؛ المسار، المخاطر ونطاق السعر.',
        definition: [
          'تُعنى أورام المسالك البولية بالعلاج الجراحي لسرطانات الجهاز البولي والتناسلي الذكري، مثل سرطان الكلى والمثانة والبروستاتا والخصية.',
          'في الحالات المناسبة تُفضَّل التقنيات المحافِظة على العضو (مثل الاستئصال الجزئي للكلية) والأساليب الروبوتية/بالمنظار قليلة التوغل. ويُخطَّط للعلاج بقرار من مجلس أورام متعدد التخصصات.'
        ],
        surgeonExperience: {
          caseVolume: 'أكثر من 653 حالة في أورام المسالك البولية',
          note: 'يعكس عدد الحالات إجمالي الخبرة الجراحية للأستاذ المشارك د. مسلم إرغن في هذا المجال.'
        },
        timeline: [
          { when: 'عن بُعد', title: 'مراجعة المجلس', body: 'تُراجَع نتائج علم الأمراض والتصوير من قِبل مجلس الأورام.' },
          { when: 'اليوم 1–2', title: 'الوصول والفحوصات', body: 'الفحص، فحوصات تحديد المرحلة، وتقييم التخدير.' },
          { when: 'اليوم 3', title: 'العملية', body: 'جراحة روبوتية/بالمنظار أو مفتوحة؛ وتختلف مدة المبيت حسب نطاق العملية.' },
          { when: 'اليوم 5–7', title: 'المراجعة وعلم الأمراض', body: 'نتيجة علم الأمراض، خطة الخطوات التالية، والإذن بالعودة.' }
        ],
        risks: [
          'نزيف وعدوى ومخاطر جراحية عامة',
          'تغيّر في وظيفة العضو (حسب نطاق الجراحة)',
          'احتمال الحاجة لعلاج إضافي (علاج كيميائي/مناعي)',
          'ضرورة متابعة الانتكاس'
        ],
        alternatives: [
          'المراقبة النشطة (في أورام صغيرة مختارة)',
          'تقنيات الكيّ/الاستئصال بالحرارة (في أورام كلى مختارة)',
          'العلاج الإشعاعي/الجهازي (حسب المرحلة)',
          'بروتوكولات الحفاظ على المثانة (في حالات مختارة)'
        ],
        price: {
          from: 0,
          to: 0,
          currency: 'EUR',
          disclaimer: 'يختلف حسب نوع الورم ومرحلته ونطاق الجراحة.'
        },
        packageIncludes: [
          'العملية والإقامة في المستشفى',
          'التخدير وفحوصات تحديد المرحلة',
          'فحص علم الأمراض',
          'التنقلات والإقامة',
          'مترجم طبي ومنسّق',
          'المراجعة والمتابعة الإلكترونية'
        ],
        faqs: [
          { q: 'هل ستُستأصل الكلية بالكامل؟', a: 'في الحالات المناسبة يُستأصل الجزء المصاب بالورم فقط (استئصال جزئي)؛ ويُتَّخذ القرار بعد التصوير.' },
          { q: 'هل سأحتاج علاجًا إضافيًا بعد العملية؟', a: 'يعتمد على علم الأمراض والمرحلة؛ ويُخطَّط له بقرار المجلس.' },
          { q: 'كيف تتم المتابعة؟', a: 'عبر التصوير المنتظم وفحوص الدم؛ ويُقدَّم دعم متابعة عن بُعد.' }
        ]
      },
      de: {
        title: 'Uroonkologie (Blasen-, Nieren-, Hodentumor-Chirurgie)',
        summary: 'Minimalinvasive und organerhaltende Chirurgie bei Krebserkrankungen des Harnsystems und der männlichen Geschlechtsorgane.',
        metaTitle: 'Uroonkologie | Blasen-, Nieren-, Hodenkrebs-Chirurgie',
        metaDescription: 'Uroonkologische Chirurgie: robotische/laparoskopische und organerhaltende Verfahren bei Blasen-, Nieren- und Hodentumoren; Ablauf, Risiken und Preisspanne.',
        definition: [
          'Die Uroonkologie befasst sich mit der chirurgischen Behandlung von Krebserkrankungen des Harn- und männlichen Geschlechtssystems wie Nieren-, Blasen-, Prostata- und Hodenkrebs.',
          'In geeigneten Fällen werden organerhaltende (z. B. partielle Nephrektomie) und minimalinvasive robotische/laparoskopische Techniken bevorzugt. Die Behandlung wird von einem interdisziplinären Tumorboard geplant.'
        ],
        surgeonExperience: {
          caseVolume: 'über 653 uroonkologische Fälle',
          note: 'Die Fallzahl spiegelt die gesamte chirurgische Erfahrung von Doz. Dr. Müslüm Ergün in diesem Bereich wider.'
        },
        timeline: [
          { when: 'Aus der Ferne', title: 'Tumorboard-Bewertung', body: 'Ihre Pathologie- und Bildgebungsbefunde werden im Tumorboard bewertet.' },
          { when: 'Tag 1–2', title: 'Ankunft & Untersuchungen', body: 'Untersuchung, Staging-Untersuchungen und Anästhesiebewertung.' },
          { when: 'Tag 3', title: 'Operation', body: 'Robotische/laparoskopische oder offene Operation; die Aufenthaltsdauer richtet sich nach dem Umfang.' },
          { when: 'Tag 5–7', title: 'Kontrolle & Pathologie', body: 'Pathologiebefund, Plan der nächsten Schritte und Reisefreigabe.' }
        ],
        risks: [
          'Blutung, Infektion und allgemeine chirurgische Risiken',
          'Veränderungen der Organfunktion (je nach Umfang)',
          'Möglicher Bedarf an Zusatztherapie (Chemo-/Immuntherapie)',
          'Notwendigkeit der Rezidiv-Nachsorge'
        ],
        alternatives: [
          'Aktive Überwachung (bei ausgewählten kleinen Tumoren)',
          'Ablationsverfahren (bei ausgewählten Nierentumoren)',
          'Strahlen-/systemische Therapie (je nach Stadium)',
          'Blasenerhaltende Protokolle (in ausgewählten Fällen)'
        ],
        price: {
          from: 0,
          to: 0,
          currency: 'EUR',
          disclaimer: 'Variiert je nach Tumorart, Stadium und OP-Umfang.'
        },
        packageIncludes: [
          'Operation und Krankenhausaufenthalt',
          'Anästhesie und Staging-Untersuchungen',
          'Pathologische Untersuchung',
          'Transfers und Unterkunft',
          'Medizinischer Dolmetscher und Koordinator',
          'Kontrolle und Online-Nachsorge'
        ],
        faqs: [
          { q: 'Wird meine gesamte Niere entfernt?', a: 'In geeigneten Fällen wird nur der Tumoranteil entfernt (partielle Nephrektomie); die Entscheidung fällt nach der Bildgebung.' },
          { q: 'Benötige ich nach der Operation eine Zusatztherapie?', a: 'Das hängt von Pathologie und Stadium ab und wird vom Tumorboard geplant.' },
          { q: 'Wie erfolgt die Nachsorge?', a: 'Mit regelmäßiger Bildgebung und Blutuntersuchungen; eine Fernnachsorge wird angeboten.' }
        ]
      },
      ru: {
        title: 'Уроонкология (хирургия опухолей мочевого пузыря, почки, яичка)',
        summary: 'Малоинвазивная и органосохраняющая хирургия при раке мочевой системы и мужских половых органов.',
        metaTitle: 'Уроонкология | Хирургия рака мочевого пузыря, почки, яичка',
        metaDescription: 'Уроонкологическая хирургия: роботические/лапароскопические и органосохраняющие методы при опухолях мочевого пузыря, почки и яичка; процесс, риски и диапазон цен.',
        definition: [
          'Уроонкология занимается хирургическим лечением рака мочевой и мужской половой системы — почки, мочевого пузыря, простаты и яичка.',
          'В подходящих случаях предпочтительны органосохраняющие (например, частичная нефрэктомия) и малоинвазивные роботические/лапароскопические методики. Лечение планирует мультидисциплинарный онкологический консилиум.'
        ],
        surgeonExperience: {
          caseVolume: 'более 653 онкоурологических случаев',
          note: 'Число операций отражает общий хирургический опыт доцента д-ра Мюслюма Эргюна в этой области.'
        },
        timeline: [
          { when: 'Удалённо', title: 'Оценка консилиума', body: 'Ваши результаты гистологии и снимков оценивает онкологический консилиум.' },
          { when: 'День 1–2', title: 'Прибытие и обследование', body: 'Осмотр, обследования для стадирования и анестезиологическая оценка.' },
          { when: 'День 3', title: 'Операция', body: 'Роботическая/лапароскопическая или открытая операция; длительность пребывания зависит от объёма.' },
          { when: 'День 5–7', title: 'Контроль и гистология', body: 'Результат гистологии, план дальнейших шагов и разрешение на возвращение.' }
        ],
        risks: [
          'Кровотечение, инфекция и общие хирургические риски',
          'Изменения функции органа (в зависимости от объёма)',
          'Возможная необходимость дополнительного лечения (химио-/иммунотерапия)',
          'Необходимость наблюдения за рецидивом'
        ],
        alternatives: [
          'Активное наблюдение (при отдельных мелких опухолях)',
          'Методы аблации (при отдельных опухолях почки)',
          'Лучевая/системная терапия (в зависимости от стадии)',
          'Органосохраняющие протоколы для мочевого пузыря (в отдельных случаях)'
        ],
        price: {
          from: 0,
          to: 0,
          currency: 'EUR',
          disclaimer: 'Зависит от типа опухоли, стадии и объёма операции.'
        },
        packageIncludes: [
          'Операция и пребывание в стационаре',
          'Анестезия и обследования для стадирования',
          'Гистологическое исследование',
          'Трансферы и проживание',
          'Медицинский переводчик и координатор',
          'Контроль и онлайн-наблюдение'
        ],
        faqs: [
          { q: 'Удалят ли всю почку целиком?', a: 'В подходящих случаях удаляют только часть с опухолью (частичная нефрэктомия); решение принимается после визуализации.' },
          { q: 'Понадобится ли дополнительное лечение после операции?', a: 'Зависит от гистологии и стадии; планируется консилиумом.' },
          { q: 'Как проводится наблюдение?', a: 'С помощью регулярной визуализации и анализов крови; предоставляется дистанционная поддержка наблюдения.' }
        ]
      }
    }
  },
  {
    slug: 'kadin-urolojisi',
    icon: 'female',
    videoPlaceholderNote: 'PLACEHOLDER: Kadın ürolojisi hasta deneyimi video embed URL’i buraya eklenecek.',
    i18n: {
      tr: {
        title: 'Kadın Ürolojisi (İnkontinans, Pelvik Taban Cerrahisi)',
        summary:
          'İdrar kaçırma ve pelvik taban sorunlarında modern, günlük yaşama hızlı dönüş sağlayan çözümler.',
        metaTitle: 'Kadın Ürolojisi | İnkontinans ve Pelvik Taban Cerrahisi',
        metaDescription:
          'Kadın ürolojisi: idrar kaçırma (inkontinans) ve pelvik organ sarkması tedavisinde sling ve pelvik taban cerrahisi; süreç, riskler ve fiyat aralığı.',
        definition: [
          'Kadın ürolojisi; stres tipi idrar kaçırma, aşırı aktif mesane ve pelvik organ sarkması gibi durumların tanı ve tedavisiyle ilgilenir.',
          'Tedavi; pelvik taban egzersizlerinden minimal invaziv sling ameliyatlarına ve pelvik taban onarımına kadar uzanır. Yöntem, şikâyetin tipine ve şiddetine göre seçilir.'
        ],
        surgeonExperience: {
          caseVolume: '311+ kadın ürolojisi vakası',
          note: 'Vaka sayısı, Doç. Dr. Müslüm Ergün’ün bu alandaki toplam cerrahi deneyimini yansıtır.'
        },
        timeline: [
          { when: 'Uzaktan', title: 'Ön değerlendirme', body: 'Şikâyet öykünüz ve varsa ürodinami sonuçları değerlendirilir.' },
          { when: '1. Gün', title: 'Varış ve muayene', body: 'Muayene, gerekli testler ve planlama.' },
          { when: '2. Gün', title: 'İşlem', body: 'Minimal invaziv sling veya onarım; çoğu vaka günübirlik–1 gece.' },
          { when: '3–4. Gün', title: 'Kontrol', body: 'Kontrol, bilgilendirme ve dönüş onayı.' }
        ],
        risks: [
          'Geçici idrar yapma zorluğu',
          'İdrar yolu enfeksiyonu',
          'Ağrı veya şişlik (geçici)',
          'Nadiren tekrar işlem ihtiyacı'
        ],
        alternatives: [
          'Pelvik taban (Kegel) egzersizleri',
          'Mesane eğitimi ve yaşam tarzı değişiklikleri',
          'İlaç tedavisi (aşırı aktif mesanede)',
          'Pesari (sarkma vakalarında)'
        ],
        price: {
          from: 0,
          to: 0,
          currency: 'EUR',
          disclaimer: 'İşlem tipine göre değişir.'
        },
        packageIncludes: [
          'İşlem ve hastane yatışı',
          'Anestezi ve tetkikler',
          'Transferler ve konaklama',
          'Kadın tıbbi tercüman (talebe göre)',
          'Kontrol ve online takip'
        ],
        faqs: [
          { q: 'Sling ameliyatı kalıcı mı?', a: 'Çoğu hastada uzun süreli iyileşme sağlar; sonuç şikâyet tipine göre değişir.' },
          { q: 'İyileşme ne kadar sürer?', a: 'Günlük hafif aktiviteye birkaç gün içinde dönülür; ağır aktivite birkaç hafta ertelenir.' },
          { q: 'Kadın sağlık personeli talep edebilir miyim?', a: 'Evet; talebe göre kadın tercüman ve koordinasyon desteği sağlanır.' }
        ]
      },
      en: {
        title: 'Female Urology (Incontinence, Pelvic Floor Surgery)',
        summary: 'Modern solutions for urinary incontinence and pelvic floor problems that enable a quick return to daily life.',
        metaTitle: 'Female Urology | Incontinence and Pelvic Floor Surgery',
        metaDescription: 'Female urology: sling and pelvic floor surgery for urinary incontinence and pelvic organ prolapse; process, risks and price range.',
        definition: [
          'Female urology deals with the diagnosis and treatment of conditions such as stress urinary incontinence, overactive bladder and pelvic organ prolapse.',
          'Treatment ranges from pelvic floor exercises to minimally invasive sling operations and pelvic floor repair. The method is chosen according to the type and severity of the complaint.'
        ],
        surgeonExperience: {
          caseVolume: '311+ female urology cases',
          note: 'The case volume reflects Assoc. Prof. Dr. Müslüm Ergün’s total surgical experience in this area.'
        },
        timeline: [
          { when: 'Remote', title: 'Pre-assessment', body: 'Your symptom history and, if available, urodynamics results are evaluated.' },
          { when: 'Day 1', title: 'Arrival & exam', body: 'Examination, required tests and planning.' },
          { when: 'Day 2', title: 'Procedure', body: 'Minimally invasive sling or repair; most cases day-case–1 night.' },
          { when: 'Day 3–4', title: 'Review', body: 'Review, information and clearance to return.' }
        ],
        risks: [
          'Temporary difficulty urinating',
          'Urinary tract infection',
          'Pain or swelling (temporary)',
          'Rarely, need for a repeat procedure'
        ],
        alternatives: [
          'Pelvic floor (Kegel) exercises',
          'Bladder training and lifestyle changes',
          'Medication (for overactive bladder)',
          'Pessary (in prolapse cases)'
        ],
        price: {
          from: 0,
          to: 0,
          currency: 'EUR',
          disclaimer: 'Varies by procedure type.'
        },
        packageIncludes: [
          'Procedure and hospital stay',
          'Anesthesia and tests',
          'Transfers and accommodation',
          'Female medical interpreter (on request)',
          'Follow-up and online monitoring'
        ],
        faqs: [
          { q: 'Is sling surgery permanent?', a: 'It provides long-lasting improvement in most patients; the outcome varies by complaint type.' },
          { q: 'How long does recovery take?', a: 'You return to light daily activity within a few days; heavy activity is postponed for a few weeks.' },
          { q: 'Can I request female medical staff?', a: 'Yes; on request, a female interpreter and coordination support are provided.' }
        ]
      },
      ar: {
        title: 'مسالك النساء (سلس البول، جراحة قاع الحوض)',
        summary: 'حلول حديثة لسلس البول ومشكلات قاع الحوض تتيح عودة سريعة إلى الحياة اليومية.',
        metaTitle: 'مسالك النساء | سلس البول وجراحة قاع الحوض',
        metaDescription: 'مسالك النساء: جراحة الشريط (السلينج) وقاع الحوض لعلاج سلس البول وهبوط أعضاء الحوض؛ المسار، المخاطر ونطاق السعر.',
        definition: [
          'تُعنى مسالك النساء بتشخيص وعلاج حالات مثل سلس البول الإجهادي، والمثانة مفرطة النشاط، وهبوط أعضاء الحوض.',
          'يمتد العلاج من تمارين قاع الحوض إلى عمليات الشريط (السلينج) قليلة التوغل وترميم قاع الحوض. ويُختار الأسلوب حسب نوع الشكوى وشدّتها.'
        ],
        surgeonExperience: {
          caseVolume: 'أكثر من 311 حالة في مسالك النساء',
          note: 'يعكس عدد الحالات إجمالي الخبرة الجراحية للأستاذ المشارك د. مسلم إرغن في هذا المجال.'
        },
        timeline: [
          { when: 'عن بُعد', title: 'التقييم الأولي', body: 'يُقيَّم تاريخ الأعراض، ونتائج ديناميكا البول إن وُجدت.' },
          { when: 'اليوم 1', title: 'الوصول والفحص', body: 'الفحص، الفحوصات اللازمة، والتخطيط.' },
          { when: 'اليوم 2', title: 'الإجراء', body: 'شريط (سلينج) قليل التوغل أو ترميم؛ معظم الحالات في اليوم نفسه–ليلة واحدة.' },
          { when: 'اليوم 3–4', title: 'المراجعة', body: 'المراجعة، التوعية، والإذن بالعودة.' }
        ],
        risks: [
          'صعوبة مؤقتة في التبول',
          'التهاب المسالك البولية',
          'ألم أو تورّم (مؤقت)',
          'نادرًا، الحاجة لإجراء إضافي'
        ],
        alternatives: [
          'تمارين قاع الحوض (كيجل)',
          'تدريب المثانة وتغييرات نمط الحياة',
          'العلاج الدوائي (للمثانة مفرطة النشاط)',
          'الفرزجة (في حالات الهبوط)'
        ],
        price: {
          from: 0,
          to: 0,
          currency: 'EUR',
          disclaimer: 'يختلف حسب نوع الإجراء.'
        },
        packageIncludes: [
          'الإجراء والإقامة في المستشفى',
          'التخدير والفحوصات',
          'التنقلات والإقامة',
          'مترجمة طبية (عند الطلب)',
          'المراجعة والمتابعة الإلكترونية'
        ],
        faqs: [
          { q: 'هل جراحة الشريط دائمة؟', a: 'تحقّق تحسّنًا طويل الأمد لدى معظم المريضات؛ وتختلف النتيجة حسب نوع الشكوى.' },
          { q: 'كم يستغرق التعافي؟', a: 'تعودين إلى النشاط اليومي الخفيف خلال أيام قليلة؛ ويُؤجَّل النشاط الشاق بضعة أسابيع.' },
          { q: 'هل يمكنني طلب طاقم طبي نسائي؟', a: 'نعم؛ عند الطلب تُوفَّر مترجمة ودعم تنسيق نسائي.' }
        ]
      },
      de: {
        title: 'Frauenurologie (Inkontinenz, Beckenboden-Chirurgie)',
        summary: 'Moderne Lösungen bei Harninkontinenz und Beckenbodenproblemen mit rascher Rückkehr in den Alltag.',
        metaTitle: 'Frauenurologie | Inkontinenz und Beckenboden-Chirurgie',
        metaDescription: 'Frauenurologie: Schlingen- und Beckenbodenchirurgie bei Harninkontinenz und Beckenorganprolaps; Ablauf, Risiken und Preisspanne.',
        definition: [
          'Die Frauenurologie befasst sich mit Diagnose und Behandlung von Erkrankungen wie Belastungsinkontinenz, überaktiver Blase und Beckenorganprolaps.',
          'Die Behandlung reicht von Beckenbodenübungen über minimalinvasive Schlingenoperationen bis zur Beckenbodenrekonstruktion. Das Verfahren wird nach Art und Schweregrad der Beschwerden gewählt.'
        ],
        surgeonExperience: {
          caseVolume: 'über 311 frauenurologische Fälle',
          note: 'Die Fallzahl spiegelt die gesamte chirurgische Erfahrung von Doz. Dr. Müslüm Ergün in diesem Bereich wider.'
        },
        timeline: [
          { when: 'Aus der Ferne', title: 'Vorabbewertung', body: 'Ihre Symptomvorgeschichte und – falls vorhanden – Urodynamik-Befunde werden ausgewertet.' },
          { when: 'Tag 1', title: 'Ankunft & Untersuchung', body: 'Untersuchung, erforderliche Tests und Planung.' },
          { when: 'Tag 2', title: 'Eingriff', body: 'Minimalinvasive Schlinge oder Rekonstruktion; die meisten Fälle ambulant–1 Nacht.' },
          { when: 'Tag 3–4', title: 'Kontrolle', body: 'Kontrolle, Aufklärung und Reisefreigabe.' }
        ],
        risks: [
          'Vorübergehende Schwierigkeiten beim Wasserlassen',
          'Harnwegsinfektion',
          'Schmerzen oder Schwellung (vorübergehend)',
          'Selten Bedarf an einem erneuten Eingriff'
        ],
        alternatives: [
          'Beckenboden- (Kegel-)Übungen',
          'Blasentraining und Lebensstiländerungen',
          'Medikamente (bei überaktiver Blase)',
          'Pessar (bei Prolaps)'
        ],
        price: {
          from: 0,
          to: 0,
          currency: 'EUR',
          disclaimer: 'Variiert je nach Art des Eingriffs.'
        },
        packageIncludes: [
          'Eingriff und Krankenhausaufenthalt',
          'Anästhesie und Untersuchungen',
          'Transfers und Unterkunft',
          'Weibliche medizinische Dolmetscherin (auf Wunsch)',
          'Kontrolle und Online-Nachsorge'
        ],
        faqs: [
          { q: 'Ist die Schlingenoperation dauerhaft?', a: 'Sie bietet bei den meisten Patientinnen eine langanhaltende Besserung; das Ergebnis hängt von der Art der Beschwerden ab.' },
          { q: 'Wie lange dauert die Genesung?', a: 'Zu leichter Alltagsaktivität kehren Sie innerhalb weniger Tage zurück; schwere Aktivität wird einige Wochen aufgeschoben.' },
          { q: 'Kann ich weibliches medizinisches Personal anfragen?', a: 'Ja; auf Wunsch werden eine Dolmetscherin und weibliche Koordinationsunterstützung bereitgestellt.' }
        ]
      },
      ru: {
        title: 'Женская урология (недержание мочи, хирургия тазового дна)',
        summary: 'Современные решения при недержании мочи и проблемах тазового дна с быстрым возвращением к повседневной жизни.',
        metaTitle: 'Женская урология | Недержание и хирургия тазового дна',
        metaDescription: 'Женская урология: слинговая и тазовая хирургия при недержании мочи и опущении органов таза; процесс, риски и диапазон цен.',
        definition: [
          'Женская урология занимается диагностикой и лечением таких состояний, как стрессовое недержание мочи, гиперактивный мочевой пузырь и опущение органов малого таза.',
          'Лечение варьируется от упражнений для тазового дна до малоинвазивных слинговых операций и реконструкции тазового дна. Метод выбирают по типу и тяжести жалоб.'
        ],
        surgeonExperience: {
          caseVolume: 'более 311 операций в женской урологии',
          note: 'Число операций отражает общий хирургический опыт доцента д-ра Мюслюма Эргюна в этой области.'
        },
        timeline: [
          { when: 'Удалённо', title: 'Предварительная оценка', body: 'Оцениваются история симптомов и, при наличии, результаты уродинамики.' },
          { when: 'День 1', title: 'Прибытие и осмотр', body: 'Осмотр, необходимые анализы и планирование.' },
          { when: 'День 2', title: 'Процедура', body: 'Малоинвазивный слинг или реконструкция; большинство случаев — в тот же день–1 ночь.' },
          { when: 'День 3–4', title: 'Контроль', body: 'Контроль, информирование и разрешение на возвращение.' }
        ],
        risks: [
          'Временное затруднение мочеиспускания',
          'Инфекция мочевыводящих путей',
          'Боль или отёк (временные)',
          'Редко — необходимость повторной процедуры'
        ],
        alternatives: [
          'Упражнения для тазового дна (Кегеля)',
          'Тренировка мочевого пузыря и изменения образа жизни',
          'Медикаменты (при гиперактивном мочевом пузыре)',
          'Пессарий (при опущении)'
        ],
        price: {
          from: 0,
          to: 0,
          currency: 'EUR',
          disclaimer: 'Зависит от типа процедуры.'
        },
        packageIncludes: [
          'Процедура и пребывание в стационаре',
          'Анестезия и анализы',
          'Трансферы и проживание',
          'Переводчица-женщина (по запросу)',
          'Контроль и онлайн-наблюдение'
        ],
        faqs: [
          { q: 'Слинговая операция постоянна?', a: 'У большинства пациенток она даёт длительное улучшение; результат зависит от типа жалоб.' },
          { q: 'Сколько длится восстановление?', a: 'К лёгкой повседневной активности вы возвращаетесь за несколько дней; тяжёлые нагрузки откладываются на несколько недель.' },
          { q: 'Могу ли я запросить женский медицинский персонал?', a: 'Да; по запросу предоставляются переводчица и женская координационная поддержка.' }
        ]
      }
    }
  },
  {
    slug: 'uretroplasti',
    icon: 'urethra',
    category: 'reconstructive',
    videoPlaceholderNote: 'PLACEHOLDER: Üretroplasti hasta deneyimi video embed URL’i buraya eklenecek.',
    i18n: {
      tr: {
        title: 'Üretroplasti (Üretral Darlık Cerrahisi)',
        summary: 'Üretral darlıkta kalıcı çözüm sağlayan rekonstrüktif cerrahi; bulber, penil, uzun segment ve redo (tekrar) vakalar dahil.',
        metaTitle: 'Üretroplasti | Üretral Darlık Cerrahisi (Bulber, Penil, Redo)',
        metaDescription: 'Üretral darlıkta üretroplasti: bulber ve penil darlık, uzun segment/kompleks darlık ve başarısız girişim sonrası redo üretroplasti. Karmaşık ve nadir vaka deneyimi.',
        definition: [
          'Üretral darlık, idrar kanalının (üretra) skar dokusuyla daralmasıdır; zayıf idrar akışı, zorlanma ve tekrarlayan enfeksiyonlara yol açar. Basit girişimler (dilatasyon, iç üretrotomi) kısa vadeli rahatlama sağlasa da darlık çoğu zaman tekrarlar.',
          'Üretroplasti, darlığın kalıcı olarak onarıldığı rekonstrüktif ameliyattır. Darlığın yeri (bulber/penil), uzunluğu ve daha önce geçirilmiş girişimler cerrahiyi belirler. Uzun segment ve tekrarlayan (redo) vakalar özel deneyim gerektirir ve genellikle bu cerrahiyi güvenle yapabilen az sayıda merkeze yönlendirilir.'
        ],
        surgeonExperience: {
          caseVolume: '347+ rekonstrüktif vaka (kompleks ve redo vakalar dâhil)',
          note: 'Vaka sayısı, Doç. Dr. Müslüm Ergün’ün bu alandaki toplam cerrahi deneyimini yansıtır.'
        },
        expertise: {
          redoRate: 'Vakaların önemli bir bölümü, başka merkezdeki başarısız girişim veya iatrojenik hasar sonrası başvuran redo (yeniden onarım) olgularıdır.',
          complexCase: 'Uzun segment darlık, pan-üretral darlık, lichen sclerosus’a bağlı darlık ve tekrarlayan başarısızlık kompleks vaka kapsamındadır.',
          advancedTechnique: 'Buccal (yanak) mukoza grefti ile augmentasyon üretroplasti; gerektiğinde çok aşamalı rekonstrüksiyon.'
        },
        timeline: [
          { when: 'Uzaktan', title: 'Dosya değerlendirmesi', body: 'Üretrografi (RUG/VCUG), akım testi ve önceki ameliyat notlarınız cerrah tarafından incelenir. Bu vakalarda ayrıntılı ön değerlendirme şarttır.' },
          { when: '1–2. Gün', title: 'Varış ve ileri tetkik', body: 'Muayene, gerekirse üretroskopi ve görüntüleme; darlığın uzunluğu ve yeri netleştirilir.' },
          { when: '2–3. Gün', title: 'Ameliyat', body: 'Darlığın tipine göre eksizyon-anastomoz veya greft ile augmentasyon üretroplasti.' },
          { when: 'Sonrası', title: 'Kateter süreci', body: 'Genellikle 2–3 hafta üretral kateter kalır; kateter çekilmeden önce kontrol görüntülemesi yapılır.' },
          { when: 'Takip', title: 'Uzun dönem takip', body: 'Akım testi ve semptom takibi ile ilk yıl daha sık, sonrasında düzenli kontrol; başarı uzun dönem açıklıkla değerlendirilir.' }
        ],
        risks: [
          'Darlığın tekrarlaması (nüks) — özellikle uzun/kompleks vakalarda',
          'Greft alım yerinde (yanak içi) geçici his değişikliği',
          'Enfeksiyon, kanama ve idrar kaçağı',
          'Redo vakalarda doku kalitesinin sonucu etkilemesi'
        ],
        alternatives: [
          'Dilatasyon veya iç üretrotomi (kısa vadeli; nüks oranı yüksek)',
          'Aralıklı kendi kendine kateterizasyon (geçici idame)',
          'Çok aşamalı rekonstrüksiyon (çok kompleks vakalarda)'
        ],
        price: {
          from: 0,
          to: 0,
          currency: 'EUR',
          disclaimer: 'Bu kategoride sabit fiyat aralığı verilmez; fiyat, vaka karmaşıklığına ve gereken tekniğe göre dosya değerlendirmesi sonrası bildirilir.'
        },
        packageIncludes: [
          'Cerrahi ve hastane yatışı',
          'Anestezi ve ameliyat öncesi ileri tetkikler',
          'Greft gerektiren vakalarda greft alımı dahil',
          'Transferler ve konaklama',
          'Tıbbi tercüman ve hasta koordinatörü',
          'Kateter çekimi ve uzun dönem online takip'
        ],
        faqs: [
          { q: 'Daha önce başka bir merkezde ameliyat oldum ve başarısız oldu; tekrar (redo) ameliyat mümkün mü?', a: 'Evet. Redo üretroplasti bu merkezin özellikle deneyimli olduğu alandır. Önceki ameliyat notlarınız ve güncel görüntüleme ile değerlendirme yapılır; doku durumuna göre greft veya çok aşamalı yaklaşım planlanır.' },
          { q: 'İç üretrotomi/dilatasyon yerine neden üretroplasti?', a: 'Dilatasyon ve iç üretrotomi çoğu darlıkta kısa süre sonra tekrarlar. Üretroplasti, uygun vakalarda kalıcı çözüm sunan tek yöntemdir.' },
          { q: 'Kateter ne kadar kalır ve iyileşme ne kadar sürer?', a: 'Genellikle 2–3 hafta kateter kalır. Günlük hafif aktiviteye kısa sürede dönülür; ağır aktivite ve uzun dönem başarı değerlendirmesi birkaç haftayı bulur.' }
        ]
      },
      en: {
        title: 'Urethroplasty (Urethral Stricture Surgery)',
        summary: 'Reconstructive surgery offering a durable solution for urethral stricture; bulbar, penile, long-segment and redo (repeat) cases included.',
        metaTitle: 'Urethroplasty | Urethral Stricture Surgery (Bulbar, Penile, Redo)',
        metaDescription: 'Urethroplasty for urethral stricture: bulbar and penile stricture, long-segment/complex stricture and redo urethroplasty after failed attempts. Experience with complex and rare cases.',
        definition: [
          'A urethral stricture is a narrowing of the urinary channel (urethra) by scar tissue, causing a weak stream, straining and recurrent infections. Simple procedures (dilation, internal urethrotomy) give short-term relief but the stricture usually recurs.',
          'Urethroplasty is the reconstructive operation that repairs the stricture durably. The location (bulbar/penile), length and any previous attempts determine the surgery. Long-segment and recurrent (redo) cases require special experience and are typically referred to the few centers that can perform them safely.'
        ],
        surgeonExperience: {
          caseVolume: '347+ reconstructive cases (including complex and redo cases)',
          note: 'The case volume reflects Assoc. Prof. Dr. Müslüm Ergün’s total surgical experience in this area.'
        },
        expertise: {
          redoRate: 'A significant share of cases are redo referrals after a failed attempt or iatrogenic injury at another center.',
          complexCase: 'Long-segment stricture, pan-urethral stricture, lichen sclerosus–related stricture and repeated failure fall within complex cases.',
          advancedTechnique: 'Augmentation urethroplasty with buccal (cheek) mucosa graft; staged reconstruction when needed.'
        },
        timeline: [
          { when: 'Remote', title: 'File assessment', body: 'Your urethrogram (RUG/VCUG), flow test and previous operative notes are reviewed by the surgeon. Detailed pre-assessment is essential in these cases.' },
          { when: 'Day 1–2', title: 'Arrival & advanced tests', body: 'Examination, urethroscopy and imaging if needed; the length and site of the stricture are clarified.' },
          { when: 'Day 2–3', title: 'Surgery', body: 'Excision-anastomosis or graft augmentation urethroplasty depending on the stricture type.' },
          { when: 'After', title: 'Catheter period', body: 'A urethral catheter usually stays 2–3 weeks; check imaging is done before removal.' },
          { when: 'Follow-up', title: 'Long-term follow-up', body: 'Flow test and symptom tracking, more frequent in the first year; success is judged by long-term patency.' }
        ],
        risks: [
          'Stricture recurrence — especially in long/complex cases',
          'Temporary sensory change at the graft (inner cheek) site',
          'Infection, bleeding and urine leak',
          'In redo cases, tissue quality affecting the outcome'
        ],
        alternatives: [
          'Dilation or internal urethrotomy (short-term; high recurrence)',
          'Intermittent self-catheterization (temporary maintenance)',
          'Staged reconstruction (in very complex cases)'
        ],
        price: {
          from: 0,
          to: 0,
          currency: 'EUR',
          disclaimer: 'No fixed price range is given in this category; the price is shared after a file assessment, according to case complexity and the technique required.'
        },
        packageIncludes: [
          'Surgery and hospital stay',
          'Anesthesia and advanced pre-operative tests',
          'Graft harvesting included where required',
          'Transfers and accommodation',
          'Medical interpreter and patient coordinator',
          'Catheter removal and long-term online follow-up'
        ],
        faqs: [
          { q: 'I had surgery at another center and it failed; is a redo possible?', a: 'Yes. Redo urethroplasty is an area this center is especially experienced in. Your previous operative notes and current imaging are reviewed; depending on tissue condition, a graft or staged approach is planned.' },
          { q: 'Why urethroplasty instead of internal urethrotomy/dilation?', a: 'Dilation and internal urethrotomy recur soon in most strictures. Urethroplasty is the only method offering a durable solution in suitable cases.' },
          { q: 'How long does the catheter stay and recovery take?', a: 'Usually 2–3 weeks with a catheter. Light daily activity resumes quickly; heavy activity and long-term success assessment take a few weeks.' }
        ]
      },
      ar: {
        title: 'رأب الإحليل (جراحة تضيّق الإحليل)',
        summary: 'جراحة ترميمية تقدّم حلًّا دائمًا لتضيّق الإحليل؛ تشمل الحالات البصلية والقضيبية والطويلة وحالات إعادة الجراحة (redo).',
        metaTitle: 'رأب الإحليل | جراحة تضيّق الإحليل (بصلي، قضيبي، إعادة جراحة)',
        metaDescription: 'رأب الإحليل لتضيّق الإحليل: التضيّق البصلي والقضيبي، التضيّق الطويل/المعقّد، وإعادة رأب الإحليل بعد محاولات فاشلة. خبرة في الحالات المعقّدة والنادرة.',
        definition: [
          'تضيّق الإحليل هو ضيق في مجرى البول (الإحليل) بسبب النسيج الندبي، ويسبّب ضعف التدفق والإجهاد والالتهابات المتكررة. الإجراءات البسيطة (التوسيع، شق الإحليل الداخلي) تمنح راحة قصيرة الأمد لكن التضيّق يعود غالبًا.',
          'رأب الإحليل هو الجراحة الترميمية التي تُصلح التضيّق بشكل دائم. يحدّد موقع التضيّق (بصلي/قضيبي) وطوله والمحاولات السابقة نوع الجراحة. تتطلب الحالات الطويلة والمتكررة (redo) خبرة خاصة، وعادةً ما تُحال إلى عدد قليل من المراكز القادرة على إجرائها بأمان.'
        ],
        surgeonExperience: {
          caseVolume: 'أكثر من 347 حالة ترميمية (بما في ذلك الحالات المعقدة والمُعادة)',
          note: 'يعكس عدد الحالات إجمالي الخبرة الجراحية للأستاذ المشارك د. مسلم إرغن في هذا المجال.'
        },
        expertise: {
          redoRate: 'نسبة كبيرة من الحالات هي حالات إعادة جراحة (redo) بعد محاولة فاشلة أو إصابة علاجية المنشأ في مركز آخر.',
          complexCase: 'يشمل نطاق الحالات المعقّدة: التضيّق الطويل، والتضيّق الشامل للإحليل، والتضيّق المرتبط بالحزاز المتصلّب (lichen sclerosus)، والفشل المتكرر.',
          advancedTechnique: 'رأب الإحليل التعزيزي بطُعم الغشاء المخاطي للخد (buccal)؛ وترميم متعدّد المراحل عند الحاجة.'
        },
        timeline: [
          { when: 'عن بُعد', title: 'تقييم الملف', body: 'يراجع الجرّاح صور الإحليل (RUG/VCUG) واختبار التدفق وملاحظات العمليات السابقة. التقييم الأولي المفصّل ضروري في هذه الحالات.' },
          { when: 'اليوم 1–2', title: 'الوصول والفحوصات المتقدمة', body: 'الفحص، وتنظير الإحليل والتصوير عند الحاجة؛ ويتحدّد طول التضيّق وموقعه.' },
          { when: 'اليوم 2–3', title: 'العملية', body: 'استئصال ومفاغرة، أو رأب إحليل تعزيزي بالطُعم، حسب نوع التضيّق.' },
          { when: 'بعد ذلك', title: 'فترة القسطرة', body: 'تبقى قسطرة إحليلية عادةً 2–3 أسابيع؛ ويُجرى تصوير تحقّق قبل إزالتها.' },
          { when: 'المتابعة', title: 'متابعة طويلة الأمد', body: 'متابعة باختبار التدفق والأعراض، أكثر تواترًا في السنة الأولى؛ ويُقاس النجاح بالانفتاح على المدى الطويل.' }
        ],
        risks: [
          'عودة التضيّق (النكس) — خصوصًا في الحالات الطويلة/المعقّدة',
          'تغيّر مؤقت في الإحساس بموضع أخذ الطُعم (داخل الخد)',
          'العدوى والنزيف وتسرّب البول',
          'في حالات إعادة الجراحة، تأثير جودة الأنسجة على النتيجة'
        ],
        alternatives: [
          'التوسيع أو شق الإحليل الداخلي (قصير الأمد؛ نسبة نكس مرتفعة)',
          'القسطرة الذاتية المتقطّعة (إدامة مؤقتة)',
          'الترميم متعدّد المراحل (في الحالات المعقّدة جدًّا)'
        ],
        price: {
          from: 0,
          to: 0,
          currency: 'EUR',
          disclaimer: 'لا يُقدَّم نطاق سعر ثابت في هذه الفئة؛ يُبلَّغ السعر بعد تقييم الملف، وفق تعقيد الحالة والتقنية المطلوبة.'
        },
        packageIncludes: [
          'العملية والإقامة في المستشفى',
          'التخدير والفحوصات المتقدمة قبل العملية',
          'أخذ الطُعم مشمول عند الحاجة',
          'التنقلات والإقامة',
          'مترجم طبي ومنسّق مرضى',
          'إزالة القسطرة والمتابعة الإلكترونية طويلة الأمد'
        ],
        faqs: [
          { q: 'خضعتُ لعملية في مركز آخر وفشلت؛ هل إعادة الجراحة (redo) ممكنة؟', a: 'نعم. إعادة رأب الإحليل مجال يتمتّع فيه هذا المركز بخبرة خاصة. تُراجَع ملاحظات عملياتك السابقة والتصوير الحديث؛ ويُخطَّط لطُعم أو نهج متعدّد المراحل حسب حالة الأنسجة.' },
          { q: 'لماذا رأب الإحليل بدلًا من شق الإحليل الداخلي/التوسيع؟', a: 'يعود التوسيع وشق الإحليل الداخلي سريعًا في معظم التضيّقات. رأب الإحليل هو الأسلوب الوحيد الذي يقدّم حلًّا دائمًا في الحالات المناسبة.' },
          { q: 'كم تبقى القسطرة وكم يستغرق التعافي؟', a: 'عادةً 2–3 أسابيع مع قسطرة. تعود الأنشطة اليومية الخفيفة بسرعة؛ ويستغرق النشاط الشاق وتقييم النجاح طويل الأمد بضعة أسابيع.' }
        ]
      },
      de: {
        title: 'Urethroplastik (Harnröhrenstriktur-Chirurgie)',
        summary: 'Rekonstruktive Chirurgie mit dauerhafter Lösung bei Harnröhrenstriktur; bulbäre, penile, langstreckige und Redo-Fälle (Wiederholungseingriff) inbegriffen.',
        metaTitle: 'Urethroplastik | Harnröhrenstriktur-Chirurgie (bulbär, penil, Redo)',
        metaDescription: 'Urethroplastik bei Harnröhrenstriktur: bulbäre und penile Striktur, langstreckige/komplexe Striktur und Redo-Urethroplastik nach fehlgeschlagenen Versuchen. Erfahrung mit komplexen und seltenen Fällen.',
        definition: [
          'Eine Harnröhrenstriktur ist eine narbige Verengung des Harnkanals (Harnröhre), die einen schwachen Strahl, Pressen und wiederkehrende Infektionen verursacht. Einfache Eingriffe (Bougierung, innere Urethrotomie) bringen kurzfristige Linderung, doch die Striktur kehrt meist zurück.',
          'Die Urethroplastik ist die rekonstruktive Operation, die die Striktur dauerhaft repariert. Lage (bulbär/penil), Länge und frühere Versuche bestimmen den Eingriff. Langstreckige und wiederkehrende (Redo-)Fälle erfordern besondere Erfahrung und werden meist an die wenigen Zentren überwiesen, die sie sicher durchführen können.'
        ],
        surgeonExperience: {
          caseVolume: 'über 347 rekonstruktive Fälle (komplexe und Redo-Fälle inbegriffen)',
          note: 'Die Fallzahl spiegelt die gesamte chirurgische Erfahrung von Doz. Dr. Müslüm Ergün in diesem Bereich wider.'
        },
        expertise: {
          redoRate: 'Ein erheblicher Teil der Fälle sind Redo-Zuweisungen nach einem fehlgeschlagenen Versuch oder einer iatrogenen Verletzung in einem anderen Zentrum.',
          complexCase: 'Zu den komplexen Fällen zählen langstreckige Striktur, panurethrale Striktur, Lichen-sclerosus-bedingte Striktur und wiederholtes Versagen.',
          advancedTechnique: 'Augmentations-Urethroplastik mit Mundschleimhaut-(buccal-)Transplantat; bei Bedarf mehrzeitige Rekonstruktion.'
        },
        timeline: [
          { when: 'Aus der Ferne', title: 'Aktenprüfung', body: 'Der Chirurg prüft Urethrogramm (RUG/VCUG), Flussmessung und frühere OP-Berichte. Eine detaillierte Vorabbewertung ist in diesen Fällen unerlässlich.' },
          { when: 'Tag 1–2', title: 'Ankunft & erweiterte Tests', body: 'Untersuchung, bei Bedarf Urethroskopie und Bildgebung; Länge und Lage der Striktur werden geklärt.' },
          { when: 'Tag 2–3', title: 'Operation', body: 'Exzision-Anastomose oder Augmentations-Urethroplastik mit Transplantat, je nach Strikturtyp.' },
          { when: 'Danach', title: 'Katheterphase', body: 'Ein Harnröhrenkatheter bleibt meist 2–3 Wochen; vor der Entfernung erfolgt eine Kontrollbildgebung.' },
          { when: 'Nachsorge', title: 'Langfristige Nachsorge', body: 'Fluss- und Symptomkontrolle, im ersten Jahr häufiger; der Erfolg bemisst sich an der langfristigen Durchgängigkeit.' }
        ],
        risks: [
          'Wiederauftreten der Striktur (Rezidiv) — besonders in langen/komplexen Fällen',
          'Vorübergehende Empfindungsänderung an der Entnahmestelle (Wangeninnenseite)',
          'Infektion, Blutung und Urinleck',
          'In Redo-Fällen beeinflusst die Gewebequalität das Ergebnis'
        ],
        alternatives: [
          'Bougierung oder innere Urethrotomie (kurzfristig; hohe Rezidivrate)',
          'Intermittierender Selbstkatheterismus (vorübergehende Erhaltung)',
          'Mehrzeitige Rekonstruktion (in sehr komplexen Fällen)'
        ],
        price: {
          from: 0,
          to: 0,
          currency: 'EUR',
          disclaimer: 'In dieser Kategorie wird keine feste Preisspanne genannt; der Preis wird nach einer Aktenprüfung entsprechend Fallkomplexität und erforderlicher Technik mitgeteilt.'
        },
        packageIncludes: [
          'Operation und Krankenhausaufenthalt',
          'Anästhesie und erweiterte präoperative Untersuchungen',
          'Transplantatentnahme bei Bedarf inbegriffen',
          'Transfers und Unterkunft',
          'Medizinischer Dolmetscher und Patientenkoordinator',
          'Katheterentfernung und langfristige Online-Nachsorge'
        ],
        faqs: [
          { q: 'Ich wurde in einem anderen Zentrum operiert und es ist fehlgeschlagen; ist ein Redo möglich?', a: 'Ja. Die Redo-Urethroplastik ist ein Bereich, in dem dieses Zentrum besonders erfahren ist. Ihre früheren OP-Berichte und aktuelle Bildgebung werden geprüft; je nach Gewebezustand wird ein Transplantat oder ein mehrzeitiges Vorgehen geplant.' },
          { q: 'Warum Urethroplastik statt innerer Urethrotomie/Bougierung?', a: 'Bougierung und innere Urethrotomie kehren bei den meisten Strikturen bald zurück. Die Urethroplastik ist in geeigneten Fällen die einzige Methode mit dauerhafter Lösung.' },
          { q: 'Wie lange bleibt der Katheter und dauert die Genesung?', a: 'Meist 2–3 Wochen mit Katheter. Leichte Alltagsaktivität ist rasch möglich; schwere Aktivität und die Bewertung des langfristigen Erfolgs dauern einige Wochen.' }
        ]
      },
      ru: {
        title: 'Уретропластика (хирургия стриктуры уретры)',
        summary: 'Реконструктивная операция, дающая стойкое решение при стриктуре уретры; включая бульбарные, пенильные, протяжённые и повторные (redo) случаи.',
        metaTitle: 'Уретропластика | Хирургия стриктуры уретры (бульбарная, пенильная, redo)',
        metaDescription: 'Уретропластика при стриктуре уретры: бульбарная и пенильная стриктура, протяжённая/сложная стриктура и повторная уретропластика после неудачных попыток. Опыт в сложных и редких случаях.',
        definition: [
          'Стриктура уретры — сужение мочеиспускательного канала (уретры) рубцовой тканью, вызывающее слабую струю, натуживание и повторные инфекции. Простые вмешательства (бужирование, внутренняя уретротомия) дают кратковременное облегчение, но стриктура обычно возвращается.',
          'Уретропластика — реконструктивная операция, которая стойко устраняет стриктуру. Локализация (бульбарная/пенильная), длина и предыдущие попытки определяют операцию. Протяжённые и повторные (redo) случаи требуют особого опыта и обычно направляются в немногие центры, способные выполнить их безопасно.'
        ],
        surgeonExperience: {
          caseVolume: 'более 347 реконструктивных случаев (включая сложные и повторные)',
          note: 'Число операций отражает общий хирургический опыт доцента д-ра Мюслюма Эргюна в этой области.'
        },
        expertise: {
          redoRate: 'Значительная часть случаев — повторные (redo) обращения после неудачной попытки или ятрогенного повреждения в другом центре.',
          complexCase: 'К сложным случаям относятся протяжённая стриктура, пануретральная стриктура, стриктура на фоне склерозирующего лихена (lichen sclerosus) и повторные неудачи.',
          advancedTechnique: 'Аугментационная уретропластика трансплантатом слизистой щеки (buccal); при необходимости — многоэтапная реконструкция.'
        },
        timeline: [
          { when: 'Удалённо', title: 'Оценка документов', body: 'Хирург изучает уретрограмму (RUG/VCUG), урофлоуметрию и записи предыдущих операций. Подробная предварительная оценка в этих случаях обязательна.' },
          { when: 'День 1–2', title: 'Прибытие и расширенное обследование', body: 'Осмотр, при необходимости уретроскопия и визуализация; уточняются длина и локализация стриктуры.' },
          { when: 'День 2–3', title: 'Операция', body: 'Иссечение с анастомозом или аугментационная уретропластика трансплантатом — в зависимости от типа стриктуры.' },
          { when: 'После', title: 'Период катетера', body: 'Уретральный катетер обычно остаётся 2–3 недели; перед удалением выполняется контрольная визуализация.' },
          { when: 'Наблюдение', title: 'Долгосрочное наблюдение', body: 'Контроль потока и симптомов, чаще в первый год; успех оценивается по долгосрочной проходимости.' }
        ],
        risks: [
          'Рецидив стриктуры — особенно в протяжённых/сложных случаях',
          'Временное изменение чувствительности в месте забора трансплантата (внутренняя поверхность щеки)',
          'Инфекция, кровотечение и подтекание мочи',
          'В повторных случаях качество тканей влияет на результат'
        ],
        alternatives: [
          'Бужирование или внутренняя уретротомия (кратковременно; высокая частота рецидивов)',
          'Периодическая самокатетеризация (временное поддержание)',
          'Многоэтапная реконструкция (в очень сложных случаях)'
        ],
        price: {
          from: 0,
          to: 0,
          currency: 'EUR',
          disclaimer: 'В этой категории фиксированный диапазон цен не указывается; цена сообщается после оценки документов, в зависимости от сложности случая и необходимой методики.'
        },
        packageIncludes: [
          'Операция и пребывание в стационаре',
          'Анестезия и расширенное предоперационное обследование',
          'Забор трансплантата включён при необходимости',
          'Трансферы и проживание',
          'Медицинский переводчик и координатор пациента',
          'Удаление катетера и долгосрочное онлайн-наблюдение'
        ],
        faqs: [
          { q: 'Мне делали операцию в другом центре, и она оказалась неудачной; возможна ли повторная (redo)?', a: 'Да. Повторная уретропластика — область, в которой этот центр особенно опытен. Изучаются записи ваших предыдущих операций и актуальная визуализация; в зависимости от состояния тканей планируется трансплантат или многоэтапный подход.' },
          { q: 'Почему уретропластика, а не внутренняя уретротомия/бужирование?', a: 'Бужирование и внутренняя уретротомия при большинстве стриктур вскоре дают рецидив. Уретропластика — единственный метод, дающий стойкое решение в подходящих случаях.' },
          { q: 'Как долго стоит катетер и сколько длится восстановление?', a: 'Обычно 2–3 недели с катетером. К лёгкой повседневной активности возвращаются быстро; тяжёлая активность и оценка долгосрочного успеха занимают несколько недель.' }
        ]
      }
    }
  },
  {
    slug: 'piyeloplasti',
    icon: 'kidney',
    category: 'reconstructive',
    videoPlaceholderNote: 'PLACEHOLDER: Piyeloplasti hasta deneyimi video embed URL’i buraya eklenecek.',
    i18n: {
      tr: {
        title: 'Piyeloplasti (UPJ Darlığı Cerrahisi)',
        summary: 'Böbrek-üreter bileşkesi (UPJ) darlığında böbreği koruyan rekonstrüktif cerrahi; açık, laparoskopik ve robotik seçenekler.',
        metaTitle: 'Piyeloplasti | UPJ (Üreteropelvik Bileşke) Darlığı Cerrahisi',
        metaDescription: 'UPJ darlığında piyeloplasti: açık, laparoskopik ve robotik yöntemlerin karşılaştırması, süreç, riskler ve uzun dönem başarı. Redo ve kompleks vaka deneyimi.',
        definition: [
          'Üreteropelvik bileşke (UPJ) darlığı, böbrekten idrarı taşıyan kanalın çıkışındaki tıkanıklıktır; böbrekte şişme (hidronefroz), ağrı ve zamanla böbrek fonksiyon kaybına yol açabilir.',
          'Piyeloplasti, darlığın çıkarılıp bileşkenin yeniden şekillendirildiği böbrek koruyucu rekonstrüktif ameliyattır. Robotik ve laparoskopik yaklaşımlar minimal invazivdir; daha önce başarısız girişim geçirmiş (redo) veya çapraz damar/taş eşlik eden kompleks vakalar özel deneyim gerektirir.'
        ],
        surgeonExperience: {
          caseVolume: '347+ rekonstrüktif vaka (kompleks ve redo vakalar dâhil)',
          note: 'Vaka sayısı, Doç. Dr. Müslüm Ergün’ün bu alandaki toplam cerrahi deneyimini yansıtır.'
        },
        expertise: {
          redoRate: 'Vakaların önemli bir bölümü, başka merkezdeki başarısız girişim veya iatrojenik hasar sonrası başvuran redo (yeniden onarım) olgularıdır.',
          complexCase: 'Çapraz damar basısı, eşlik eden böbrek taşı, atnalı böbrek gibi anatomik varyasyonlar ve redo vakalar kompleks kapsamdadır.',
          advancedTechnique: 'Robot destekli dismembered piyeloplasti; redo vakalarda yoğun skar dokusunda rekonstrüksiyon.'
        },
        timeline: [
          { when: 'Uzaktan', title: 'Dosya değerlendirmesi', body: 'BT ürografi ve böbrek sintigrafisi (MAG3) sonuçlarınız incelenir; darlık ve böbrek fonksiyonu değerlendirilir.' },
          { when: '1–2. Gün', title: 'Varış ve tetkik', body: 'Muayene ve gerekli görüntülemenin tamamlanması, anestezi değerlendirmesi.' },
          { when: '3. Gün', title: 'Ameliyat', body: 'Robotik/laparoskopik veya açık dismembered piyeloplasti; genellikle 2–3 gece yatış.' },
          { when: 'Sonrası', title: 'Stent (JJ) süreci', body: 'İçeride 4–6 hafta kalan bir JJ stent yerleştirilir; sonra kısa bir işlemle alınır.' },
          { when: 'Takip', title: 'Fonksiyon takibi', body: 'Kontrol sintigrafisi/ultrason ile drenaj ve böbrek fonksiyonu izlenir; başarı uzun dönem drenajla değerlendirilir.' }
        ],
        risks: [
          'Stent’e bağlı geçici şikâyetler',
          'İdrar kaçağı',
          'Darlığın tekrarlaması (redo vakalarda daha yüksek)',
          'Enfeksiyon ve kanama'
        ],
        alternatives: [
          'Endopyelotomi (seçili vakalarda; başarı oranı daha düşük)',
          'İzlem (fonksiyon korunmuş, belirtisiz seçili vakalar)',
          'Nefrektomi (yalnızca fonksiyonsuz böbrekte, son seçenek)'
        ],
        comparison: {
          title: 'Açık vs Laparoskopik vs Robotik Piyeloplasti',
          columns: ['Kriter', 'Açık', 'Laparoskopik', 'Robotik'],
          rows: [
            { label: 'İnvazivlik', values: ['Büyük kesi', 'Küçük kesiler', 'Küçük kesiler'] },
            { label: 'Dikiş hassasiyeti', values: ['İyi', 'Teknik olarak zor', 'Çok yüksek'] },
            { label: 'İyileşme', values: ['Daha uzun', 'Kısa', 'Kısa'] },
            { label: 'Redo/kompleks uygunluk', values: ['Seçili', 'Sınırlı', 'Yüksek'] },
            { label: 'Yatış', values: ['3–5 gece', '2–3 gece', '2–3 gece'] }
          ],
          note: 'Yöntem; darlık tipi, önceki cerrahi ve anatomiye göre kişiye özel seçilir.'
        },
        price: {
          from: 0,
          to: 0,
          currency: 'EUR',
          disclaimer: 'Bu kategoride sabit fiyat aralığı verilmez; fiyat, vaka karmaşıklığına ve gereken tekniğe göre dosya değerlendirmesi sonrası bildirilir.'
        },
        packageIncludes: [
          'Cerrahi ve hastane yatışı',
          'Anestezi ve tetkikler',
          'JJ stent ve alımı',
          'Transferler ve konaklama',
          'Tıbbi tercüman ve koordinatör',
          'Uzun dönem fonksiyon takibi'
        ],
        faqs: [
          { q: 'Daha önce endopyelotomi/piyeloplasti oldum ama darlık tekrarladı; ne yapılabilir?', a: 'Redo piyeloplasti mümkündür ve bu merkezin deneyimli olduğu bir alandır. Skar dokusuna rağmen böbreği koruyan rekonstrüksiyon planlanır; nadiren çok aşamalı yaklaşım gerekir.' },
          { q: 'Robotik mi yoksa açık mı daha iyi?', a: 'Robotik yöntem çoğu vakada dikiş hassasiyeti ve hızlı iyileşme sağlar; ancak yöntem darlık tipi, önceki cerrahi ve anatomiye göre belirlenir.' },
          { q: 'Böbreğim kurtarılabilir mi?', a: 'Amaç böbreği korumaktır. Fonksiyonun ne kadar korunabileceği sintigrafi ile değerlendirilir; nefrektomi yalnızca fonksiyonsuz böbrekte son seçenektir.' }
        ]
      },
      en: {
        title: 'Pyeloplasty (UPJ Obstruction Surgery)',
        summary: 'Kidney-preserving reconstructive surgery for ureteropelvic junction (UPJ) obstruction; open, laparoscopic and robotic options.',
        metaTitle: 'Pyeloplasty | UPJ (Ureteropelvic Junction) Obstruction Surgery',
        metaDescription: 'Pyeloplasty for UPJ obstruction: comparison of open, laparoscopic and robotic methods, process, risks and long-term success. Redo and complex case experience.',
        definition: [
          'Ureteropelvic junction (UPJ) obstruction is a blockage at the outlet of the channel that carries urine from the kidney, causing swelling (hydronephrosis), pain and, over time, loss of kidney function.',
          'Pyeloplasty is the kidney-preserving reconstructive operation that removes the narrowing and reshapes the junction. Robotic and laparoscopic approaches are minimally invasive; cases with prior failed attempts (redo) or a crossing vessel/stone require special experience.'
        ],
        surgeonExperience: {
          caseVolume: '347+ reconstructive cases (including complex and redo cases)',
          note: 'The case volume reflects Assoc. Prof. Dr. Müslüm Ergün’s total surgical experience in this area.'
        },
        expertise: {
          redoRate: 'A significant share of cases are redo referrals after a failed attempt or iatrogenic injury at another center.',
          complexCase: 'Crossing-vessel compression, concurrent kidney stone, anatomical variants such as horseshoe kidney and redo cases fall within complex.',
          advancedTechnique: 'Robot-assisted dismembered pyeloplasty; reconstruction in dense scar tissue in redo cases.'
        },
        timeline: [
          { when: 'Remote', title: 'File assessment', body: 'Your CT urography and renal scan (MAG3) are reviewed; the obstruction and kidney function are assessed.' },
          { when: 'Day 1–2', title: 'Arrival & tests', body: 'Examination and completion of required imaging, anesthesia assessment.' },
          { when: 'Day 3', title: 'Surgery', body: 'Robotic/laparoscopic or open dismembered pyeloplasty; usually a 2–3 night stay.' },
          { when: 'After', title: 'Stent (JJ) period', body: 'A JJ stent stays inside for 4–6 weeks, then is removed in a short procedure.' },
          { when: 'Follow-up', title: 'Function follow-up', body: 'Drainage and kidney function are monitored with follow-up scan/ultrasound; success is judged by long-term drainage.' }
        ],
        risks: [
          'Temporary stent-related symptoms',
          'Urine leak',
          'Stricture recurrence (higher in redo cases)',
          'Infection and bleeding'
        ],
        alternatives: [
          'Endopyelotomy (in selected cases; lower success)',
          'Surveillance (selected, function-preserved, asymptomatic cases)',
          'Nephrectomy (only for a non-functioning kidney, last resort)'
        ],
        comparison: {
          title: 'Open vs Laparoscopic vs Robotic Pyeloplasty',
          columns: ['Criterion', 'Open', 'Laparoscopic', 'Robotic'],
          rows: [
            { label: 'Invasiveness', values: ['Large incision', 'Small incisions', 'Small incisions'] },
            { label: 'Suturing precision', values: ['Good', 'Technically hard', 'Very high'] },
            { label: 'Recovery', values: ['Longer', 'Short', 'Short'] },
            { label: 'Redo/complex suitability', values: ['Selected', 'Limited', 'High'] },
            { label: 'Stay', values: ['3–5 nights', '2–3 nights', '2–3 nights'] }
          ],
          note: 'The method is chosen individually by stricture type, previous surgery and anatomy.'
        },
        price: {
          from: 0,
          to: 0,
          currency: 'EUR',
          disclaimer: 'No fixed price range is given in this category; the price is shared after a file assessment, according to case complexity and the technique required.'
        },
        packageIncludes: [
          'Surgery and hospital stay',
          'Anesthesia and tests',
          'JJ stent and its removal',
          'Transfers and accommodation',
          'Medical interpreter and coordinator',
          'Long-term function follow-up'
        ],
        faqs: [
          { q: 'I had endopyelotomy/pyeloplasty but the obstruction recurred; what can be done?', a: 'Redo pyeloplasty is possible and an area this center is experienced in. Despite scar tissue, kidney-preserving reconstruction is planned; rarely a staged approach is needed.' },
          { q: 'Is robotic or open better?', a: 'The robotic method gives suturing precision and fast recovery in most cases; but the method is determined by stricture type, previous surgery and anatomy.' },
          { q: 'Can my kidney be saved?', a: 'The goal is to preserve the kidney. How much function can be preserved is assessed by scan; nephrectomy is a last resort only for a non-functioning kidney.' }
        ]
      },
      ar: {
        title: 'رأب حوض الكلية (جراحة تضيّق الوصل الحويضي الحالبي UPJ)',
        summary: 'جراحة ترميمية محافِظة على الكلية في تضيّق الوصل الحويضي الحالبي (UPJ)؛ خيارات مفتوحة وبالمنظار وروبوتية.',
        metaTitle: 'رأب حوض الكلية | جراحة تضيّق الوصل الحويضي الحالبي (UPJ)',
        metaDescription: 'رأب حوض الكلية لتضيّق UPJ: مقارنة الطرق المفتوحة وبالمنظار والروبوتية، المسار، المخاطر والنجاح طويل الأمد. خبرة في حالات إعادة الجراحة والحالات المعقّدة.',
        definition: [
          'تضيّق الوصل الحويضي الحالبي (UPJ) هو انسداد عند مخرج القناة التي تنقل البول من الكلية، ويسبّب تورّم الكلية (موه الكلية)، وألمًا، ومع الوقت فقدان وظيفة الكلية.',
          'رأب حوض الكلية هو الجراحة الترميمية المحافِظة على الكلية التي تزيل التضيّق وتعيد تشكيل الوصل. الأساليب الروبوتية وبالمنظار قليلة التوغل؛ وتتطلب الحالات التي سبق لها محاولة فاشلة (redo) أو المصحوبة بوعاء دموي متصالب/حصاة خبرة خاصة.'
        ],
        surgeonExperience: {
          caseVolume: 'أكثر من 347 حالة ترميمية (بما في ذلك الحالات المعقدة والمُعادة)',
          note: 'يعكس عدد الحالات إجمالي الخبرة الجراحية للأستاذ المشارك د. مسلم إرغن في هذا المجال.'
        },
        expertise: {
          redoRate: 'نسبة كبيرة من الحالات هي حالات إعادة جراحة (redo) بعد محاولة فاشلة أو إصابة علاجية المنشأ في مركز آخر.',
          complexCase: 'يشمل نطاق الحالات المعقّدة: انضغاط بوعاء متصالب، وحصاة كلوية مصاحبة، وتنوّعات تشريحية مثل الكلية حدوة الفرس، وحالات إعادة الجراحة.',
          advancedTechnique: 'رأب حوض الكلية بالفصل بمساعدة الروبوت (dismembered)؛ والترميم في النسيج الندبي الكثيف في حالات إعادة الجراحة.'
        },
        timeline: [
          { when: 'عن بُعد', title: 'تقييم الملف', body: 'تُراجَع نتائج التصوير المقطعي بالصبغة وتصوير الكلية النووي (MAG3)؛ ويُقيَّم الانسداد ووظيفة الكلية.' },
          { when: 'اليوم 1–2', title: 'الوصول والفحوصات', body: 'الفحص واستكمال التصوير اللازم، وتقييم التخدير.' },
          { when: 'اليوم 3', title: 'العملية', body: 'رأب حوض كلية بالفصل روبوتي/بالمنظار أو مفتوح؛ عادةً بمبيت 2–3 ليالٍ.' },
          { when: 'بعد ذلك', title: 'فترة الدعامة (JJ)', body: 'تُوضَع دعامة JJ تبقى بالداخل 4–6 أسابيع، ثم تُزال بإجراء قصير.' },
          { when: 'المتابعة', title: 'متابعة الوظيفة', body: 'يُراقَب التصريف ووظيفة الكلية بتصوير/موجات فوق صوتية للمتابعة؛ ويُقاس النجاح بالتصريف طويل الأمد.' }
        ],
        risks: [
          'أعراض مؤقتة مرتبطة بالدعامة',
          'تسرّب البول',
          'عودة التضيّق (أعلى في حالات إعادة الجراحة)',
          'العدوى والنزيف'
        ],
        alternatives: [
          'بضع الحويضة بالمنظار (في حالات مختارة؛ نجاح أقل)',
          'المراقبة (حالات مختارة محفوظة الوظيفة وبدون أعراض)',
          'استئصال الكلية (فقط لكلية غير عاملة، كملاذ أخير)'
        ],
        comparison: {
          title: 'مفتوح مقابل بالمنظار مقابل روبوتي لرأب حوض الكلية',
          columns: ['المعيار', 'مفتوح', 'بالمنظار', 'روبوتي'],
          rows: [
            { label: 'درجة التوغل', values: ['شق كبير', 'شقوق صغيرة', 'شقوق صغيرة'] },
            { label: 'دقّة الخياطة', values: ['جيدة', 'صعبة تقنيًا', 'عالية جدًّا'] },
            { label: 'التعافي', values: ['أطول', 'قصير', 'قصير'] },
            { label: 'الملاءمة لإعادة الجراحة/المعقّدة', values: ['مختارة', 'محدودة', 'عالية'] },
            { label: 'المبيت', values: ['3–5 ليالٍ', '2–3 ليالٍ', '2–3 ليالٍ'] }
          ],
          note: 'يُختار الأسلوب فرديًّا حسب نوع التضيّق والجراحة السابقة والتشريح.'
        },
        price: {
          from: 0,
          to: 0,
          currency: 'EUR',
          disclaimer: 'لا يُقدَّم نطاق سعر ثابت في هذه الفئة؛ يُبلَّغ السعر بعد تقييم الملف، وفق تعقيد الحالة والتقنية المطلوبة.'
        },
        packageIncludes: [
          'العملية والإقامة في المستشفى',
          'التخدير والفحوصات',
          'دعامة JJ وإزالتها',
          'التنقلات والإقامة',
          'مترجم طبي ومنسّق',
          'متابعة الوظيفة طويلة الأمد'
        ],
        faqs: [
          { q: 'خضعتُ لبضع الحويضة/رأب حوض الكلية لكن التضيّق عاد؛ ما الذي يمكن عمله؟', a: 'إعادة رأب حوض الكلية ممكنة ومجال يتمتّع فيه هذا المركز بالخبرة. يُخطَّط لترميم محافِظ على الكلية رغم النسيج الندبي؛ ونادرًا ما يلزم نهج متعدّد المراحل.' },
          { q: 'أيّهما أفضل: الروبوتي أم المفتوح؟', a: 'يمنح الأسلوب الروبوتي دقّة خياطة وتعافيًا سريعًا في معظم الحالات؛ لكن الأسلوب يُحدَّد حسب نوع التضيّق والجراحة السابقة والتشريح.' },
          { q: 'هل يمكن إنقاذ كليتي؟', a: 'الهدف هو الحفاظ على الكلية. يُقيَّم مقدار الوظيفة القابل للحفاظ عليه بالتصوير النووي؛ واستئصال الكلية ملاذ أخير فقط لكلية غير عاملة.' }
        ]
      },
      de: {
        title: 'Nierenbeckenplastik (UPJ-Obstruktions-Chirurgie)',
        summary: 'Nierenerhaltende rekonstruktive Chirurgie bei Obstruktion des pyeloureteralen Übergangs (UPJ); offene, laparoskopische und robotische Optionen.',
        metaTitle: 'Nierenbeckenplastik | UPJ- (pyeloureteraler Übergang) Obstruktions-Chirurgie',
        metaDescription: 'Nierenbeckenplastik bei UPJ-Obstruktion: Vergleich offener, laparoskopischer und robotischer Methoden, Ablauf, Risiken und langfristiger Erfolg. Erfahrung mit Redo- und komplexen Fällen.',
        definition: [
          'Die Obstruktion des pyeloureteralen Übergangs (UPJ) ist eine Blockade am Ausgang des Kanals, der Urin aus der Niere leitet; sie verursacht Schwellung (Hydronephrose), Schmerzen und mit der Zeit Verlust der Nierenfunktion.',
          'Die Nierenbeckenplastik ist die nierenerhaltende rekonstruktive Operation, die die Verengung entfernt und den Übergang neu formt. Robotische und laparoskopische Zugänge sind minimalinvasiv; Fälle mit früheren fehlgeschlagenen Versuchen (Redo) oder einem kreuzenden Gefäß/Stein erfordern besondere Erfahrung.'
        ],
        surgeonExperience: {
          caseVolume: 'über 347 rekonstruktive Fälle (komplexe und Redo-Fälle inbegriffen)',
          note: 'Die Fallzahl spiegelt die gesamte chirurgische Erfahrung von Doz. Dr. Müslüm Ergün in diesem Bereich wider.'
        },
        expertise: {
          redoRate: 'Ein erheblicher Teil der Fälle sind Redo-Zuweisungen nach einem fehlgeschlagenen Versuch oder einer iatrogenen Verletzung in einem anderen Zentrum.',
          complexCase: 'Zu den komplexen Fällen zählen Kompression durch ein kreuzendes Gefäß, begleitender Nierenstein, anatomische Varianten wie die Hufeisenniere und Redo-Fälle.',
          advancedTechnique: 'Robotergestützte dismembered Nierenbeckenplastik; Rekonstruktion in dichtem Narbengewebe bei Redo-Fällen.'
        },
        timeline: [
          { when: 'Aus der Ferne', title: 'Aktenprüfung', body: 'Ihre CT-Urographie und Nierenszintigraphie (MAG3) werden geprüft; Obstruktion und Nierenfunktion werden bewertet.' },
          { when: 'Tag 1–2', title: 'Ankunft & Tests', body: 'Untersuchung und Vervollständigung der erforderlichen Bildgebung, Anästhesiebewertung.' },
          { when: 'Tag 3', title: 'Operation', body: 'Robotische/laparoskopische oder offene dismembered Nierenbeckenplastik; meist 2–3 Nächte Aufenthalt.' },
          { when: 'Danach', title: 'Stent-(JJ-)Phase', body: 'Ein JJ-Stent bleibt 4–6 Wochen im Körper und wird dann in einem kurzen Eingriff entfernt.' },
          { when: 'Nachsorge', title: 'Funktionsnachsorge', body: 'Drainage und Nierenfunktion werden mit Kontrollszintigraphie/Ultraschall überwacht; der Erfolg bemisst sich an der langfristigen Drainage.' }
        ],
        risks: [
          'Vorübergehende stentbedingte Beschwerden',
          'Urinleck',
          'Rezidiv der Striktur (höher in Redo-Fällen)',
          'Infektion und Blutung'
        ],
        alternatives: [
          'Endopyelotomie (in ausgewählten Fällen; geringerer Erfolg)',
          'Überwachung (ausgewählte, funktionserhaltene, asymptomatische Fälle)',
          'Nephrektomie (nur bei nicht funktionierender Niere, letztes Mittel)'
        ],
        comparison: {
          title: 'Offen vs. laparoskopisch vs. robotisch – Nierenbeckenplastik',
          columns: ['Kriterium', 'Offen', 'Laparoskopisch', 'Robotisch'],
          rows: [
            { label: 'Invasivität', values: ['Großer Schnitt', 'Kleine Schnitte', 'Kleine Schnitte'] },
            { label: 'Nahtpräzision', values: ['Gut', 'Technisch schwierig', 'Sehr hoch'] },
            { label: 'Erholung', values: ['Länger', 'Kurz', 'Kurz'] },
            { label: 'Eignung für Redo/komplex', values: ['Ausgewählt', 'Begrenzt', 'Hoch'] },
            { label: 'Aufenthalt', values: ['3–5 Nächte', '2–3 Nächte', '2–3 Nächte'] }
          ],
          note: 'Die Methode wird individuell nach Strikturtyp, Voroperation und Anatomie gewählt.'
        },
        price: {
          from: 0,
          to: 0,
          currency: 'EUR',
          disclaimer: 'In dieser Kategorie wird keine feste Preisspanne genannt; der Preis wird nach einer Aktenprüfung entsprechend Fallkomplexität und erforderlicher Technik mitgeteilt.'
        },
        packageIncludes: [
          'Operation und Krankenhausaufenthalt',
          'Anästhesie und Untersuchungen',
          'JJ-Stent und dessen Entfernung',
          'Transfers und Unterkunft',
          'Medizinischer Dolmetscher und Koordinator',
          'Langfristige Funktionsnachsorge'
        ],
        faqs: [
          { q: 'Ich hatte eine Endopyelotomie/Nierenbeckenplastik, aber die Obstruktion kehrte zurück; was ist möglich?', a: 'Eine Redo-Nierenbeckenplastik ist möglich und ein Bereich, in dem dieses Zentrum erfahren ist. Trotz Narbengewebe wird eine nierenerhaltende Rekonstruktion geplant; selten ist ein mehrzeitiges Vorgehen nötig.' },
          { q: 'Ist robotisch oder offen besser?', a: 'Die robotische Methode bietet in den meisten Fällen Nahtpräzision und schnelle Erholung; die Methode richtet sich jedoch nach Strikturtyp, Voroperation und Anatomie.' },
          { q: 'Kann meine Niere gerettet werden?', a: 'Ziel ist der Nierenerhalt. Wie viel Funktion erhalten werden kann, wird per Szintigraphie beurteilt; die Nephrektomie ist nur bei einer nicht funktionierenden Niere das letzte Mittel.' }
        ]
      },
      ru: {
        title: 'Пиелопластика (хирургия обструкции ЛМС/UPJ)',
        summary: 'Почкосохраняющая реконструктивная операция при обструкции лоханочно-мочеточникового сегмента (ЛМС/UPJ); открытый, лапароскопический и роботический варианты.',
        metaTitle: 'Пиелопластика | Хирургия обструкции лоханочно-мочеточникового сегмента (UPJ)',
        metaDescription: 'Пиелопластика при обструкции ЛМС/UPJ: сравнение открытого, лапароскопического и роботического методов, процесс, риски и долгосрочный успех. Опыт в повторных и сложных случаях.',
        definition: [
          'Обструкция лоханочно-мочеточникового сегмента (ЛМС/UPJ) — препятствие на выходе канала, отводящего мочу из почки; вызывает расширение (гидронефроз), боль и со временем потерю функции почки.',
          'Пиелопластика — почкосохраняющая реконструктивная операция, устраняющая сужение и заново формирующая сегмент. Роботические и лапароскопические доступы малоинвазивны; случаи с прежними неудачными попытками (redo) или добавочным сосудом/камнем требуют особого опыта.'
        ],
        surgeonExperience: {
          caseVolume: 'более 347 реконструктивных случаев (включая сложные и повторные)',
          note: 'Число операций отражает общий хирургический опыт доцента д-ра Мюслюма Эргюна в этой области.'
        },
        expertise: {
          redoRate: 'Значительная часть случаев — повторные (redo) обращения после неудачной попытки или ятрогенного повреждения в другом центре.',
          complexCase: 'К сложным случаям относятся сдавление добавочным сосудом, сопутствующий камень почки, анатомические варианты (например, подковообразная почка) и повторные случаи.',
          advancedTechnique: 'Роботическая расчленяющая (dismembered) пиелопластика; реконструкция в плотной рубцовой ткани при повторных случаях.'
        },
        timeline: [
          { when: 'Удалённо', title: 'Оценка документов', body: 'Изучаются КТ-урография и радиоизотопное исследование почки (MAG3); оцениваются обструкция и функция почки.' },
          { when: 'День 1–2', title: 'Прибытие и обследование', body: 'Осмотр и завершение необходимой визуализации, анестезиологическая оценка.' },
          { when: 'День 3', title: 'Операция', body: 'Роботическая/лапароскопическая или открытая расчленяющая пиелопластика; обычно 2–3 ночи пребывания.' },
          { when: 'После', title: 'Период стента (JJ)', body: 'Стент JJ остаётся внутри 4–6 недель, затем удаляется коротким вмешательством.' },
          { when: 'Наблюдение', title: 'Наблюдение функции', body: 'Дренаж и функция почки контролируются повторной сцинтиграфией/УЗИ; успех оценивается по долгосрочному дренажу.' }
        ],
        risks: [
          'Временные симптомы, связанные со стентом',
          'Подтекание мочи',
          'Рецидив стриктуры (выше при повторных случаях)',
          'Инфекция и кровотечение'
        ],
        alternatives: [
          'Эндопиелотомия (в отдельных случаях; ниже успех)',
          'Наблюдение (отдельные бессимптомные случаи с сохранной функцией)',
          'Нефрэктомия (только при нефункционирующей почке, крайняя мера)'
        ],
        comparison: {
          title: 'Открытая против лапароскопической против роботической пиелопластики',
          columns: ['Критерий', 'Открытая', 'Лапароскопическая', 'Роботическая'],
          rows: [
            { label: 'Инвазивность', values: ['Большой разрез', 'Малые разрезы', 'Малые разрезы'] },
            { label: 'Точность шва', values: ['Хорошая', 'Технически сложно', 'Очень высокая'] },
            { label: 'Восстановление', values: ['Дольше', 'Короткое', 'Короткое'] },
            { label: 'Пригодность для redo/сложных', values: ['Отдельные', 'Ограниченная', 'Высокая'] },
            { label: 'Пребывание', values: ['3–5 ночей', '2–3 ночи', '2–3 ночи'] }
          ],
          note: 'Метод выбирается индивидуально по типу стриктуры, предыдущей операции и анатомии.'
        },
        price: {
          from: 0,
          to: 0,
          currency: 'EUR',
          disclaimer: 'В этой категории фиксированный диапазон цен не указывается; цена сообщается после оценки документов, в зависимости от сложности случая и необходимой методики.'
        },
        packageIncludes: [
          'Операция и пребывание в стационаре',
          'Анестезия и обследование',
          'Стент JJ и его удаление',
          'Трансферы и проживание',
          'Медицинский переводчик и координатор',
          'Долгосрочное наблюдение функции'
        ],
        faqs: [
          { q: 'Мне делали эндопиелотомию/пиелопластику, но обструкция вернулась; что можно сделать?', a: 'Повторная пиелопластика возможна и является областью опыта этого центра. Несмотря на рубцовую ткань, планируется почкосохраняющая реконструкция; редко требуется многоэтапный подход.' },
          { q: 'Что лучше — роботическая или открытая?', a: 'Роботический метод в большинстве случаев даёт точность шва и быстрое восстановление; но метод определяется типом стриктуры, предыдущей операцией и анатомией.' },
          { q: 'Можно ли сохранить мою почку?', a: 'Цель — сохранить почку. Сколько функции удастся сохранить, оценивается по сцинтиграфии; нефрэктомия — крайняя мера только при нефункционирующей почке.' }
        ]
      }
    }
  },
  {
    slug: 'fistul-onarimi',
    icon: 'repair',
    category: 'reconstructive',
    videoPlaceholderNote: 'PLACEHOLDER: Fistül onarımı hasta deneyimi video embed URL’i buraya eklenecek.',
    i18n: {
      tr: {
        title: 'Vezikovaginal ve Üreterovaginal Fistül Onarımı',
        summary: 'İdrar kaçağına yol açan fistüllerin onarımı — doğum ya da pelvik/jinekolojik cerrahi sonrası gelişen durumlar dahil. Saygılı ve gizli bir süreç.',
        metaTitle: 'Fistül Onarımı | Vezikovaginal ve Üreterovaginal Fistül Cerrahisi',
        metaDescription: 'Vezikovaginal ve üreterovaginal fistül onarımı: sürekli idrar kaçağına yol açan fistüllerin rekonstrüktif cerrahi ile onarımı. Uluslararası sevk hastalarına saygılı, gizli yaklaşım.',
        definition: [
          'Fistül, mesane veya üreter ile vajina arasında oluşan anormal bir bağlantıdır ve sürekli, kontrol edilemeyen idrar kaçağına yol açar. Çoğunlukla zorlu doğum, pelvik/jinekolojik cerrahi veya radyoterapi sonrası gelişir.',
          'Bu durum tıbbi olarak tamamen onarılabilir bir sorundur ve yaşanan sıkıntı bir utanç kaynağı değildir. Rekonstrüktif cerrahi, fistülün kapatılıp normal idrar tutmanın yeniden sağlanmasını hedefler. Uygun zamanlama, doku kalitesi ve fistülün yeri sonucu belirler; tekrarlayan (başarısız onarım sonrası) vakalar özel deneyim gerektirir.'
        ],
        surgeonExperience: {
          caseVolume: '347+ rekonstrüktif vaka (kompleks ve redo vakalar dâhil)',
          note: 'Vaka sayısı, Doç. Dr. Müslüm Ergün’ün bu alandaki toplam cerrahi deneyimini yansıtır.'
        },
        expertise: {
          redoRate: 'Vakaların önemli bir bölümü, başka merkezdeki başarısız girişim veya iatrojenik hasar sonrası başvuran redo (yeniden onarım) olgularıdır.',
          complexCase: 'Radyoterapi sonrası fistül, büyük/çok odaklı fistül ve tekrarlayan başarısız onarım kompleks kapsamdadır.',
          advancedTechnique: 'Doku araya yerleştirme (ör. Martius flebi) ile desteklenen transvajinal/abdominal onarım; üreter reimplantasyonu.'
        },
        timeline: [
          { when: 'Uzaktan', title: 'Gizli dosya değerlendirmesi', body: 'Öykünüz, önceki cerrahi notları ve görüntüleme gizlilikle incelenir; onarım için uygun zamanlama belirlenir.' },
          { when: '1–2. Gün', title: 'Varış ve muayene', body: 'Muayene, sistoskopi ve gerekli görüntüleme ile fistülün yeri ve boyutu netleştirilir.' },
          { when: '2–3. Gün', title: 'Ameliyat', body: 'Fistülün yerine göre transvajinal veya abdominal onarım; gerekli vakalarda doku desteği (flep).' },
          { when: 'Sonrası', title: 'Kateter süreci', body: 'Onarımın iyileşmesi için genellikle 2–3 hafta idrar sondası kalır; erken dönemde ağır aktivite ve cinsel ilişkiden kaçınılır.' },
          { when: 'Takip', title: 'Kontrol', body: 'Sonda çekilmeden önce kontrol; kaçağın tamamen düzeldiği doğrulanır ve takip planlanır.' }
        ],
        risks: [
          'Onarımın tekrar açılması (nüks) — özellikle radyoterapi/kompleks vakalarda',
          'Enfeksiyon ve kanama',
          'Geçici idrar yapma güçlüğü',
          'Nadiren ek onarım gereksinimi'
        ],
        alternatives: [
          'Küçük ve yeni fistüllerde uzun süreli sonda ile spontan kapanma denemesi (seçili)',
          'Onarım öncesi doku iyileşmesi için bekleme (uygun zamanlama)',
          'Kompleks vakalarda üriner diversiyon (son seçenek)'
        ],
        price: {
          from: 0,
          to: 0,
          currency: 'EUR',
          disclaimer: 'Bu kategoride sabit fiyat aralığı verilmez; fiyat, vaka karmaşıklığına ve gereken tekniğe göre dosya değerlendirmesi sonrası bildirilir.'
        },
        packageIncludes: [
          'Cerrahi ve hastane yatışı',
          'Anestezi ve tetkikler',
          'Gerekli vakalarda doku desteği (flep) dahil',
          'Kadın tıbbi tercüman ve gizli koordinasyon (talebe göre)',
          'Transferler ve konaklama',
          'Sonda çekimi ve online takip'
        ],
        faqs: [
          { q: 'Başka bir ülkede/merkezde onarım denendi ama başarısız oldu; yeniden onarılabilir mi?', a: 'Evet. Başarısız onarım sonrası tekrarlayan vakalar bu merkezin deneyimli olduğu alandır. Doku durumuna göre uygun zamanlama ve gerekirse doku destekli (flep) teknik planlanır.' },
          { q: 'Bu durum kalıcı mı, utanmam gereken bir şey mi?', a: 'Hayır. Fistül tıbbi bir komplikasyondur, kişisel bir kusur değildir ve çoğu vakada tamamen onarılabilir. Tüm süreç mahremiyetinize saygıyla, gizlilik içinde yürütülür.' },
          { q: 'Süreç gizli tutulur mu ve kadın personel talep edebilir miyim?', a: 'Evet. Görüşmeler ve koordinasyon gizlilik ilkesiyle yürütülür; talebe göre kadın tercüman ve destek sağlanır.' }
        ]
      },
      en: {
        title: 'Vesicovaginal & Ureterovaginal Fistula Repair',
        summary: 'Repair of fistulas causing urine leakage — including those developing after childbirth or pelvic/gynecological surgery. A respectful, confidential process.',
        metaTitle: 'Fistula Repair | Vesicovaginal & Ureterovaginal Fistula Surgery',
        metaDescription: 'Vesicovaginal and ureterovaginal fistula repair: reconstructive surgery for fistulas causing continuous urine leakage. A respectful, confidential approach for international referral patients.',
        definition: [
          'A fistula is an abnormal connection between the bladder or ureter and the vagina, causing continuous, uncontrollable urine leakage. It most often develops after difficult childbirth, pelvic/gynecological surgery or radiotherapy.',
          'This is a medically repairable condition and the distress it causes is not a source of shame. Reconstructive surgery aims to close the fistula and restore normal continence. Timing, tissue quality and the fistula’s location determine the outcome; recurrent cases (after a failed repair) require special experience.'
        ],
        surgeonExperience: {
          caseVolume: '347+ reconstructive cases (including complex and redo cases)',
          note: 'The case volume reflects Assoc. Prof. Dr. Müslüm Ergün’s total surgical experience in this area.'
        },
        expertise: {
          redoRate: 'A significant share of cases are redo referrals after a failed attempt or iatrogenic injury at another center.',
          complexCase: 'Post-radiotherapy fistula, large/multifocal fistula and recurrent failed repair fall within complex.',
          advancedTechnique: 'Transvaginal/abdominal repair supported by tissue interposition (e.g., Martius flap); ureteric reimplantation.'
        },
        timeline: [
          { when: 'Remote', title: 'Confidential file assessment', body: 'Your history, previous operative notes and imaging are reviewed confidentially; the right timing for repair is determined.' },
          { when: 'Day 1–2', title: 'Arrival & examination', body: 'Examination, cystoscopy and imaging clarify the fistula’s location and size.' },
          { when: 'Day 2–3', title: 'Surgery', body: 'Transvaginal or abdominal repair depending on location; tissue support (flap) where required.' },
          { when: 'After', title: 'Catheter period', body: 'A catheter usually stays 2–3 weeks for the repair to heal; heavy activity and intercourse are avoided early on.' },
          { when: 'Follow-up', title: 'Review', body: 'A check before catheter removal confirms the leakage has fully resolved, and follow-up is planned.' }
        ],
        risks: [
          'Re-opening of the repair (recurrence) — especially in radiotherapy/complex cases',
          'Infection and bleeding',
          'Temporary difficulty urinating',
          'Rarely, need for additional repair'
        ],
        alternatives: [
          'A trial of spontaneous closure with a prolonged catheter in small, recent fistulas (selected)',
          'Waiting for tissue healing before repair (right timing)',
          'Urinary diversion in complex cases (last resort)'
        ],
        price: {
          from: 0,
          to: 0,
          currency: 'EUR',
          disclaimer: 'No fixed price range is given in this category; the price is shared after a file assessment, according to case complexity and the technique required.'
        },
        packageIncludes: [
          'Surgery and hospital stay',
          'Anesthesia and tests',
          'Tissue support (flap) included where required',
          'Female medical interpreter and confidential coordination (on request)',
          'Transfers and accommodation',
          'Catheter removal and online follow-up'
        ],
        faqs: [
          { q: 'A repair was attempted in another country/center but failed; can it be repaired again?', a: 'Yes. Recurrent cases after a failed repair are an area this center is experienced in. Depending on tissue condition, the right timing and, if needed, a tissue-supported (flap) technique are planned.' },
          { q: 'Is this permanent, something to be ashamed of?', a: 'No. A fistula is a medical complication, not a personal fault, and is fully repairable in most cases. The entire process is handled with respect for your privacy, in confidence.' },
          { q: 'Is the process kept confidential and can I request female staff?', a: 'Yes. Consultations and coordination follow the principle of confidentiality; on request, a female interpreter and support are provided.' }
        ]
      },
      ar: {
        title: 'إصلاح الناسور المثاني المهبلي والحالبي المهبلي',
        summary: 'إصلاح النواسير المسبِّبة لتسرّب البول — بما فيها ما ينشأ بعد الولادة أو جراحة الحوض/النسائية. عملية تُدار باحترام وسرّية تامة.',
        metaTitle: 'إصلاح الناسور | جراحة الناسور المثاني المهبلي والحالبي المهبلي',
        metaDescription: 'إصلاح الناسور المثاني المهبلي والحالبي المهبلي: جراحة ترميمية للنواسير المسبِّبة لتسرّب بولي مستمر. نهج محترم وسرّي لمريضات الإحالة الدوليات.',
        definition: [
          'الناسور هو اتصال غير طبيعي بين المثانة أو الحالب والمهبل، يؤدي إلى تسرّب بولي مستمر لا يمكن التحكم فيه. وينشأ غالبًا بعد ولادة متعسّرة أو جراحة في الحوض/نسائية أو علاج إشعاعي.',
          'هذه حالة قابلة للإصلاح طبيًا تمامًا، وما تعانينه ليس مدعاة للخجل. تهدف الجراحة الترميمية إلى إغلاق الناسور واستعادة التحكم الطبيعي في البول. يحدّد التوقيت المناسب وجودة الأنسجة وموقع الناسور النتيجة؛ وتتطلب الحالات المتكررة (بعد إصلاح فاشل) خبرة خاصة. ونحرص على أن تُدار رعايتك بكامل الاحترام والخصوصية.'
        ],
        surgeonExperience: {
          caseVolume: 'أكثر من 347 حالة ترميمية (بما في ذلك الحالات المعقدة والمُعادة)',
          note: 'يعكس عدد الحالات إجمالي الخبرة الجراحية للأستاذ المشارك د. مسلم إرغن في هذا المجال.'
        },
        expertise: {
          redoRate: 'نسبة كبيرة من الحالات هي حالات إعادة جراحة (redo) بعد محاولة فاشلة أو إصابة علاجية المنشأ في مركز آخر.',
          complexCase: 'يشمل نطاق الحالات المعقّدة: الناسور بعد العلاج الإشعاعي، والناسور الكبير/متعدّد البؤر، والإصلاح الفاشل المتكرر.',
          advancedTechnique: 'إصلاح عبر المهبل/عبر البطن مدعوم بإقحام نسيجي (مثل سديلة Martius)؛ وإعادة زرع الحالب.'
        },
        timeline: [
          { when: 'عن بُعد', title: 'تقييم سرّي للملف', body: 'تُراجَع قصتك المرضية وملاحظات الجراحة السابقة والتصوير بسرّية تامة؛ ويُحدَّد التوقيت المناسب للإصلاح.' },
          { when: 'اليوم 1–2', title: 'الوصول والفحص', body: 'الفحص وتنظير المثانة والتصوير لتوضيح موقع الناسور وحجمه.' },
          { when: 'اليوم 2–3', title: 'العملية', body: 'إصلاح عبر المهبل أو عبر البطن حسب الموقع؛ ودعم نسيجي (سديلة) عند الحاجة.' },
          { when: 'بعد ذلك', title: 'فترة القسطرة', body: 'تبقى قسطرة عادةً 2–3 أسابيع ليلتئم الإصلاح؛ ويُتجنّب النشاط الشاق والعلاقة الزوجية في الفترة المبكرة.' },
          { when: 'المتابعة', title: 'المراجعة', body: 'مراجعة قبل إزالة القسطرة للتأكد من زوال التسرّب تمامًا، ثم تُخطَّط المتابعة.' }
        ],
        risks: [
          'إعادة انفتاح الإصلاح (النكس) — خصوصًا في حالات العلاج الإشعاعي/المعقّدة',
          'العدوى والنزيف',
          'صعوبة مؤقتة في التبول',
          'نادرًا، الحاجة إلى إصلاح إضافي'
        ],
        alternatives: [
          'محاولة الإغلاق التلقائي بقسطرة طويلة في النواسير الصغيرة والحديثة (حالات مختارة)',
          'الانتظار حتى التئام الأنسجة قبل الإصلاح (التوقيت المناسب)',
          'تحويل المسار البولي في الحالات المعقّدة (كملاذ أخير)'
        ],
        price: {
          from: 0,
          to: 0,
          currency: 'EUR',
          disclaimer: 'لا يُقدَّم نطاق سعر ثابت في هذه الفئة؛ يُبلَّغ السعر بعد تقييم الملف، وفق تعقيد الحالة والتقنية المطلوبة.'
        },
        packageIncludes: [
          'العملية والإقامة في المستشفى',
          'التخدير والفحوصات',
          'دعم نسيجي (سديلة) مشمول عند الحاجة',
          'مترجمة طبية وتنسيق سرّي (عند الطلب)',
          'التنقلات والإقامة',
          'إزالة القسطرة والمتابعة الإلكترونية'
        ],
        faqs: [
          { q: 'جرت محاولة إصلاح في بلد/مركز آخر لكنها فشلت؛ هل يمكن إصلاحه من جديد؟', a: 'نعم. الحالات المتكررة بعد إصلاح فاشل مجال يتمتّع فيه هذا المركز بالخبرة. يُخطَّط للتوقيت المناسب، وعند الحاجة لتقنية مدعومة بالنسيج (سديلة)، حسب حالة الأنسجة.' },
          { q: 'هل هذه الحالة دائمة، أو أمر ينبغي أن أخجل منه؟', a: 'لا. الناسور مضاعفة طبية وليس عيبًا شخصيًا، وهو قابل للإصلاح تمامًا في معظم الحالات. وتُدار العملية بأكملها باحترام لخصوصيتك وبسرّية تامة.' },
          { q: 'هل تُحفظ الخصوصية وهل يمكنني طلب طاقم نسائي؟', a: 'نعم. تُدار الاستشارات والتنسيق وفق مبدأ السرّية؛ وعند الطلب تُوفَّر مترجمة ودعم نسائي.' }
        ]
      },
      de: {
        title: 'Vesikovaginaler & ureterovaginaler Fistelverschluss',
        summary: 'Verschluss von Fisteln, die Urinverlust verursachen — auch solche nach Geburt oder Becken-/gynäkologischer Operation. Ein respektvoller, vertraulicher Prozess.',
        metaTitle: 'Fistelverschluss | Vesikovaginale & ureterovaginale Fistelchirurgie',
        metaDescription: 'Verschluss vesikovaginaler und ureterovaginaler Fisteln: rekonstruktive Chirurgie bei Fisteln mit kontinuierlichem Urinverlust. Ein respektvoller, vertraulicher Ansatz für internationale Zuweisungspatientinnen.',
        definition: [
          'Eine Fistel ist eine krankhafte Verbindung zwischen Blase oder Harnleiter und Scheide, die zu kontinuierlichem, unkontrollierbarem Urinverlust führt. Sie entsteht meist nach schwerer Geburt, Becken-/gynäkologischer Operation oder Strahlentherapie.',
          'Dies ist ein medizinisch vollständig reparabler Zustand, und die damit verbundene Belastung ist kein Grund zur Scham. Die rekonstruktive Chirurgie zielt darauf ab, die Fistel zu verschließen und die normale Kontinenz wiederherzustellen. Zeitpunkt, Gewebequalität und Lage der Fistel bestimmen das Ergebnis; wiederkehrende Fälle (nach fehlgeschlagenem Verschluss) erfordern besondere Erfahrung. Ihre Behandlung erfolgt mit vollem Respekt und in Vertraulichkeit.'
        ],
        surgeonExperience: {
          caseVolume: 'über 347 rekonstruktive Fälle (komplexe und Redo-Fälle inbegriffen)',
          note: 'Die Fallzahl spiegelt die gesamte chirurgische Erfahrung von Doz. Dr. Müslüm Ergün in diesem Bereich wider.'
        },
        expertise: {
          redoRate: 'Ein erheblicher Teil der Fälle sind Redo-Zuweisungen nach einem fehlgeschlagenen Versuch oder einer iatrogenen Verletzung in einem anderen Zentrum.',
          complexCase: 'Zu den komplexen Fällen zählen Fisteln nach Strahlentherapie, große/multifokale Fisteln und wiederholt fehlgeschlagene Verschlüsse.',
          advancedTechnique: 'Transvaginaler/abdomineller Verschluss mit Gewebeinterposition (z. B. Martius-Lappen); Harnleiter-Reimplantation.'
        },
        timeline: [
          { when: 'Aus der Ferne', title: 'Vertrauliche Aktenprüfung', body: 'Ihre Vorgeschichte, frühere OP-Berichte und Bildgebung werden vertraulich geprüft; der richtige Zeitpunkt für den Verschluss wird bestimmt.' },
          { when: 'Tag 1–2', title: 'Ankunft & Untersuchung', body: 'Untersuchung, Zystoskopie und Bildgebung klären Lage und Größe der Fistel.' },
          { when: 'Tag 2–3', title: 'Operation', body: 'Transvaginaler oder abdomineller Verschluss je nach Lage; bei Bedarf Gewebestütze (Lappen).' },
          { when: 'Danach', title: 'Katheterphase', body: 'Ein Katheter bleibt meist 2–3 Wochen, damit der Verschluss heilt; schwere Aktivität und Geschlechtsverkehr werden anfangs vermieden.' },
          { when: 'Nachsorge', title: 'Kontrolle', body: 'Eine Kontrolle vor der Katheterentfernung bestätigt, dass der Urinverlust vollständig behoben ist, und die Nachsorge wird geplant.' }
        ],
        risks: [
          'Wiederöffnung des Verschlusses (Rezidiv) — besonders bei Strahlentherapie/komplexen Fällen',
          'Infektion und Blutung',
          'Vorübergehende Schwierigkeiten beim Wasserlassen',
          'Selten Bedarf an einem zusätzlichen Verschluss'
        ],
        alternatives: [
          'Versuch eines spontanen Verschlusses mit längerem Katheter bei kleinen, frischen Fisteln (ausgewählt)',
          'Abwarten der Gewebeheilung vor dem Verschluss (richtiger Zeitpunkt)',
          'Harnableitung in komplexen Fällen (letztes Mittel)'
        ],
        price: {
          from: 0,
          to: 0,
          currency: 'EUR',
          disclaimer: 'In dieser Kategorie wird keine feste Preisspanne genannt; der Preis wird nach einer Aktenprüfung entsprechend Fallkomplexität und erforderlicher Technik mitgeteilt.'
        },
        packageIncludes: [
          'Operation und Krankenhausaufenthalt',
          'Anästhesie und Untersuchungen',
          'Gewebestütze (Lappen) bei Bedarf inbegriffen',
          'Weibliche medizinische Dolmetscherin und vertrauliche Koordination (auf Wunsch)',
          'Transfers und Unterkunft',
          'Katheterentfernung und Online-Nachsorge'
        ],
        faqs: [
          { q: 'In einem anderen Land/Zentrum wurde ein Verschluss versucht, der fehlschlug; kann er erneut verschlossen werden?', a: 'Ja. Wiederkehrende Fälle nach einem fehlgeschlagenen Verschluss sind ein Bereich, in dem dieses Zentrum erfahren ist. Je nach Gewebezustand werden der richtige Zeitpunkt und bei Bedarf eine gewebegestützte (Lappen-)Technik geplant.' },
          { q: 'Ist das dauerhaft, etwas, wofür ich mich schämen müsste?', a: 'Nein. Eine Fistel ist eine medizinische Komplikation, kein persönliches Versagen, und in den meisten Fällen vollständig reparabel. Der gesamte Prozess erfolgt mit Respekt vor Ihrer Privatsphäre, in Vertraulichkeit.' },
          { q: 'Wird der Prozess vertraulich behandelt und kann ich weibliches Personal anfragen?', a: 'Ja. Beratungen und Koordination folgen dem Grundsatz der Vertraulichkeit; auf Wunsch werden eine Dolmetscherin und Unterstützung bereitgestellt.' }
        ]
      },
      ru: {
        title: 'Пластика везиковагинального и уретеровагинального свища',
        summary: 'Пластика свищей, вызывающих подтекание мочи — в том числе возникших после родов или тазовой/гинекологической операции. Уважительный и конфиденциальный процесс.',
        metaTitle: 'Пластика свища | Хирургия везиковагинального и уретеровагинального свища',
        metaDescription: 'Пластика везиковагинального и уретеровагинального свища: реконструктивная операция при свищах с постоянным подтеканием мочи. Уважительный, конфиденциальный подход для международных направленных пациенток.',
        definition: [
          'Свищ — патологическое сообщение между мочевым пузырём или мочеточником и влагалищем, вызывающее постоянное, неконтролируемое подтекание мочи. Чаще всего он возникает после тяжёлых родов, тазовой/гинекологической операции или лучевой терапии.',
          'Это состояние полностью поддаётся хирургическому исправлению, и связанные с ним переживания — не повод для стыда. Реконструктивная операция направлена на закрытие свища и восстановление нормального удержания мочи. Правильное время, качество тканей и расположение свища определяют результат; повторные случаи (после неудачной пластики) требуют особого опыта. Ваше лечение ведётся с полным уважением и в условиях конфиденциальности.'
        ],
        surgeonExperience: {
          caseVolume: 'более 347 реконструктивных случаев (включая сложные и повторные)',
          note: 'Число операций отражает общий хирургический опыт доцента д-ра Мюслюма Эргюна в этой области.'
        },
        expertise: {
          redoRate: 'Значительная часть случаев — повторные (redo) обращения после неудачной попытки или ятрогенного повреждения в другом центре.',
          complexCase: 'К сложным случаям относятся свищ после лучевой терапии, крупный/многоочаговый свищ и повторно неудачная пластика.',
          advancedTechnique: 'Трансвагинальная/абдоминальная пластика с тканевой интерпозицией (например, лоскут Мартиуса); реимплантация мочеточника.'
        },
        timeline: [
          { when: 'Удалённо', title: 'Конфиденциальная оценка документов', body: 'Ваш анамнез, записи предыдущих операций и снимки изучаются конфиденциально; определяется подходящее время для пластики.' },
          { when: 'День 1–2', title: 'Прибытие и осмотр', body: 'Осмотр, цистоскопия и визуализация уточняют расположение и размер свища.' },
          { when: 'День 2–3', title: 'Операция', body: 'Трансвагинальная или абдоминальная пластика в зависимости от расположения; при необходимости — тканевая поддержка (лоскут).' },
          { when: 'После', title: 'Период катетера', body: 'Катетер обычно остаётся 2–3 недели для заживления пластики; в раннем периоде избегают тяжёлых нагрузок и половой жизни.' },
          { when: 'Наблюдение', title: 'Контроль', body: 'Контроль перед удалением катетера подтверждает полное устранение подтекания, затем планируется наблюдение.' }
        ],
        risks: [
          'Повторное раскрытие пластики (рецидив) — особенно при лучевой терапии/сложных случаях',
          'Инфекция и кровотечение',
          'Временное затруднение мочеиспускания',
          'Редко — необходимость дополнительной пластики'
        ],
        alternatives: [
          'Попытка самостоятельного закрытия с длительным катетером при небольших свежих свищах (отдельные случаи)',
          'Ожидание заживления тканей перед пластикой (правильное время)',
          'Отведение мочи в сложных случаях (крайняя мера)'
        ],
        price: {
          from: 0,
          to: 0,
          currency: 'EUR',
          disclaimer: 'В этой категории фиксированный диапазон цен не указывается; цена сообщается после оценки документов, в зависимости от сложности случая и необходимой методики.'
        },
        packageIncludes: [
          'Операция и пребывание в стационаре',
          'Анестезия и обследование',
          'Тканевая поддержка (лоскут) включена при необходимости',
          'Переводчица-женщина и конфиденциальная координация (по запросу)',
          'Трансферы и проживание',
          'Удаление катетера и онлайн-наблюдение'
        ],
        faqs: [
          { q: 'В другой стране/центре пытались выполнить пластику, но она не удалась; можно ли исправить снова?', a: 'Да. Повторные случаи после неудачной пластики — область опыта этого центра. В зависимости от состояния тканей планируются подходящее время и при необходимости методика с тканевой поддержкой (лоскут).' },
          { q: 'Это навсегда, это то, чего нужно стыдиться?', a: 'Нет. Свищ — медицинское осложнение, а не личный недостаток, и в большинстве случаев полностью устраним. Весь процесс ведётся с уважением к вашей частной жизни и конфиденциально.' },
          { q: 'Сохраняется ли конфиденциальность и могу ли я запросить женский персонал?', a: 'Да. Консультации и координация следуют принципу конфиденциальности; по запросу предоставляются переводчица и поддержка.' }
        ]
      }
    }
  },
  {
    slug: 'ureter-rekonstruksiyonu',
    icon: 'graft',
    category: 'reconstructive',
    videoPlaceholderNote: 'PLACEHOLDER: Üreter rekonstrüksiyonu hasta deneyimi video embed URL’i buraya eklenecek.',
    i18n: {
      tr: {
        title: 'Üreter Rekonstrüksiyonu (Uzun Segment Darlık/Hasar)',
        summary: 'Uzun segment üreter darlığı veya hasarında ileri rekonstrüksiyon: buccal mukoza grefti, ileal interpozisyon gibi teknikler.',
        metaTitle: 'Üreter Rekonstrüksiyonu | Uzun Segment Üreter Darlığı Cerrahisi',
        metaDescription: 'Uzun segment üreter darlığı/hasarında ileri rekonstrüksiyon: buccal mukoza grefti, ileal interpozisyon, üreter reimplantasyonu. Kompleks ve redo vaka deneyimi.',
        definition: [
          'Üreter, böbreği mesaneye bağlayan kanaldır. Uzun segment darlık veya hasar; taş cerrahisi, pelvik/jinekolojik ameliyat, radyoterapi ya da travma sonrası gelişebilir ve böbreği tehdit eder.',
          'Kısa darlıklar basit tekniklerle onarılabilirken, uzun segment darlıklar ileri rekonstrüksiyon gerektirir. Buccal mukoza grefti, ileal interpozisyon (barsak segmenti ile köprüleme) veya böbreğin aşağı indirilmesi gibi teknikler, böbreği korumak için deneyimli merkezlerde uygulanır.'
        ],
        surgeonExperience: {
          caseVolume: '347+ rekonstrüktif vaka (kompleks ve redo vakalar dâhil)',
          note: 'Vaka sayısı, Doç. Dr. Müslüm Ergün’ün bu alandaki toplam cerrahi deneyimini yansıtır.'
        },
        expertise: {
          redoRate: 'Vakaların önemli bir bölümü, başka merkezdeki başarısız girişim veya iatrojenik hasar sonrası başvuran redo (yeniden onarım) olgularıdır.',
          complexCase: 'Uzun segment/pan-üreteral darlık, radyoterapi sonrası ve tek böbrekli hastalar kompleks kapsamdadır.',
          advancedTechnique: 'Buccal mukoza grefti ile üreteroplasti, ileal interpozisyon ve robot destekli rekonstrüksiyon.'
        },
        timeline: [
          { when: 'Uzaktan', title: 'Dosya değerlendirmesi', body: 'BT ürografi, sintigrafi ve önceki ameliyat notlarınız detaylı incelenir; darlığın uzunluğu ve böbrek fonksiyonu belirlenir.' },
          { when: '1–2. Gün', title: 'Varış ve ileri tetkik', body: 'Muayene, gerekirse üreteroskopi/görüntüleme; rekonstrüksiyon planı netleştirilir.' },
          { when: '3. Gün', title: 'Ameliyat', body: 'Segmentin uzunluğuna göre greft, interpozisyon veya reimplantasyon; genellikle çok günlük yatış.' },
          { when: 'Sonrası', title: 'Stent/kateter süreci', body: 'JJ stent ve/veya kateter bir süre kalır; kontrol görüntülemesiyle drenaj doğrulanır.' },
          { when: 'Takip', title: 'Uzun dönem takip', body: 'Fonksiyon ve drenaj sintigrafi/ultrason ile izlenir; bu vakalarda takip özellikle kritiktir.' }
        ],
        risks: [
          'Darlığın tekrarlaması ve ek girişim ihtiyacı',
          'İleal interpozisyonda barsağa bağlı metabolik/mukus etkileri',
          'İdrar kaçağı, enfeksiyon ve kanama',
          'Böbrek fonksiyonunda değişiklik'
        ],
        alternatives: [
          'Kalıcı JJ stent veya nefrostomi ile idame (cerrahiye uygun olmayanlarda)',
          'Kısa darlıkta uç-uca onarım/reimplantasyon',
          'Ototransplantasyon (seçili kompleks vakalarda)',
          'Nefrektomi (yalnızca fonksiyonsuz böbrekte, son seçenek)'
        ],
        price: {
          from: 0,
          to: 0,
          currency: 'EUR',
          disclaimer: 'Bu kategoride sabit fiyat aralığı verilmez; fiyat, vaka karmaşıklığına ve gereken tekniğe göre dosya değerlendirmesi sonrası bildirilir.'
        },
        packageIncludes: [
          'Cerrahi ve hastane yatışı',
          'Anestezi ve ileri tetkikler',
          'Greft/interpozisyon gerektiren vakalarda dahil',
          'Stent ve alımı',
          'Transferler ve konaklama',
          'Tıbbi tercüman ve koordinatör',
          'Uzun dönem fonksiyon takibi'
        ],
        faqs: [
          { q: 'Uzun bir üreter darlığım var ve “yapılamaz” dendi; seçenek var mı?', a: 'Uzun segment darlıklar buccal mukoza grefti veya ileal interpozisyon gibi ileri tekniklerle çoğu vakada onarılabilir. Dosyanız değerlendirilip böbreği koruyan bir plan çıkarılır.' },
          { q: 'Başarısız bir girişim sonrası tekrar denenebilir mi?', a: 'Evet; iatrojenik hasar veya başarısız onarım sonrası redo rekonstrüksiyon bu merkezin deneyim alanıdır. Skar dokusuna rağmen böbrek koruyucu teknikler planlanır.' },
          { q: 'İyileşme ve takip ne kadar sürer?', a: 'Yatış ve stent süreci diğer tedavilere göre daha uzundur; uzun dönem başarı, düzenli fonksiyon takibiyle değerlendirilir. Takip bu vakalarda kritiktir.' }
        ]
      },
      en: {
        title: 'Ureteral Reconstruction (Long-Segment Stricture/Injury)',
        summary: 'Advanced reconstruction for long-segment ureteral stricture or injury: techniques such as buccal mucosa graft and ileal interposition.',
        metaTitle: 'Ureteral Reconstruction | Long-Segment Ureteral Stricture Surgery',
        metaDescription: 'Advanced reconstruction for long-segment ureteral stricture/injury: buccal mucosa graft, ileal interposition, ureteric reimplantation. Complex and redo case experience.',
        definition: [
          'The ureter is the channel connecting the kidney to the bladder. Long-segment stricture or injury can develop after stone surgery, pelvic/gynecological surgery, radiotherapy or trauma and threatens the kidney.',
          'While short strictures can be repaired with simple techniques, long-segment strictures require advanced reconstruction. Techniques such as buccal mucosa graft, ileal interposition (bridging with a bowel segment) or bringing the kidney down are performed in experienced centers to preserve the kidney.'
        ],
        surgeonExperience: {
          caseVolume: '347+ reconstructive cases (including complex and redo cases)',
          note: 'The case volume reflects Assoc. Prof. Dr. Müslüm Ergün’s total surgical experience in this area.'
        },
        expertise: {
          redoRate: 'A significant share of cases are redo referrals after a failed attempt or iatrogenic injury at another center.',
          complexCase: 'Long-segment/pan-ureteral stricture, post-radiotherapy and single-kidney patients fall within complex.',
          advancedTechnique: 'Ureteroplasty with buccal mucosa graft, ileal interposition and robot-assisted reconstruction.'
        },
        timeline: [
          { when: 'Remote', title: 'File assessment', body: 'Your CT urography, renal scan and previous operative notes are reviewed in detail; the stricture length and kidney function are determined.' },
          { when: 'Day 1–2', title: 'Arrival & advanced tests', body: 'Examination, ureteroscopy/imaging if needed; the reconstruction plan is finalized.' },
          { when: 'Day 3', title: 'Surgery', body: 'Graft, interposition or reimplantation depending on segment length; usually a multi-day stay.' },
          { when: 'After', title: 'Stent/catheter period', body: 'A JJ stent and/or catheter stays for a while; drainage is confirmed by check imaging.' },
          { when: 'Follow-up', title: 'Long-term follow-up', body: 'Function and drainage are monitored with scan/ultrasound; follow-up is especially critical in these cases.' }
        ],
        risks: [
          'Stricture recurrence and need for additional intervention',
          'Bowel-related metabolic/mucus effects in ileal interposition',
          'Urine leak, infection and bleeding',
          'Change in kidney function'
        ],
        alternatives: [
          'Maintenance with a long-term JJ stent or nephrostomy (for those unfit for surgery)',
          'End-to-end repair/reimplantation in short strictures',
          'Autotransplantation (in selected complex cases)',
          'Nephrectomy (only for a non-functioning kidney, last resort)'
        ],
        price: {
          from: 0,
          to: 0,
          currency: 'EUR',
          disclaimer: 'No fixed price range is given in this category; the price is shared after a file assessment, according to case complexity and the technique required.'
        },
        packageIncludes: [
          'Surgery and hospital stay',
          'Anesthesia and advanced tests',
          'Included where graft/interposition is required',
          'Stent and its removal',
          'Transfers and accommodation',
          'Medical interpreter and coordinator',
          'Long-term function follow-up'
        ],
        faqs: [
          { q: 'I have a long ureteral stricture and was told it "can’t be done"; are there options?', a: 'Long-segment strictures can be repaired in most cases with advanced techniques such as buccal mucosa graft or ileal interposition. Your file is assessed and a kidney-preserving plan is produced.' },
          { q: 'Can it be attempted again after a failed procedure?', a: 'Yes; redo reconstruction after iatrogenic injury or a failed repair is an area of this center’s experience. Kidney-preserving techniques are planned despite scar tissue.' },
          { q: 'How long do recovery and follow-up take?', a: 'The stay and stent period are longer than other treatments; long-term success is judged with regular function follow-up. Follow-up is critical in these cases.' }
        ]
      },
      ar: {
        title: 'إعادة بناء الحالب (تضيّق/إصابة طويلة المقطع)',
        summary: 'إعادة بناء متقدّمة في تضيّق أو إصابة الحالب طويلة المقطع: تقنيات مثل طُعم الغشاء المخاطي للخد والإحلال اللفائفي.',
        metaTitle: 'إعادة بناء الحالب | جراحة تضيّق الحالب طويل المقطع',
        metaDescription: 'إعادة بناء متقدّمة في تضيّق/إصابة الحالب طويلة المقطع: طُعم الغشاء المخاطي للخد، الإحلال اللفائفي، إعادة زرع الحالب. خبرة في الحالات المعقّدة وإعادة الجراحة.',
        definition: [
          'الحالب هو القناة التي تصل الكلية بالمثانة. قد ينشأ التضيّق أو الإصابة طويلة المقطع بعد جراحة الحصى أو جراحة الحوض/النسائية أو العلاج الإشعاعي أو الرضّ، ويهدّد الكلية.',
          'بينما تُصلَح التضيّقات القصيرة بتقنيات بسيطة، تتطلب التضيّقات طويلة المقطع إعادة بناء متقدّمة. وتُطبَّق تقنيات مثل طُعم الغشاء المخاطي للخد، والإحلال اللفائفي (الجسر بمقطع معوي)، أو إنزال الكلية، للحفاظ على الكلية في مراكز ذات خبرة.'
        ],
        surgeonExperience: {
          caseVolume: 'أكثر من 347 حالة ترميمية (بما في ذلك الحالات المعقدة والمُعادة)',
          note: 'يعكس عدد الحالات إجمالي الخبرة الجراحية للأستاذ المشارك د. مسلم إرغن في هذا المجال.'
        },
        expertise: {
          redoRate: 'نسبة كبيرة من الحالات هي حالات إعادة جراحة (redo) بعد محاولة فاشلة أو إصابة علاجية المنشأ في مركز آخر.',
          complexCase: 'يشمل نطاق الحالات المعقّدة: التضيّق طويل المقطع/الشامل للحالب، وما بعد العلاج الإشعاعي، والمرضى ذوو الكلية الوحيدة.',
          advancedTechnique: 'رأب الحالب بطُعم الغشاء المخاطي للخد، والإحلال اللفائفي، وإعادة البناء بمساعدة الروبوت.'
        },
        timeline: [
          { when: 'عن بُعد', title: 'تقييم الملف', body: 'تُراجَع بالتفصيل صور التصوير المقطعي بالصبغة والتصوير النووي وملاحظات العمليات السابقة؛ ويُحدَّد طول التضيّق ووظيفة الكلية.' },
          { when: 'اليوم 1–2', title: 'الوصول والفحوصات المتقدمة', body: 'الفحص، وتنظير الحالب/التصوير عند الحاجة؛ وتُحدَّد خطة إعادة البناء.' },
          { when: 'اليوم 3', title: 'العملية', body: 'طُعم أو إحلال أو إعادة زرع حسب طول المقطع؛ وعادةً مبيت عدة أيام.' },
          { when: 'بعد ذلك', title: 'فترة الدعامة/القسطرة', body: 'تبقى دعامة JJ و/أو قسطرة لفترة؛ ويُؤكَّد التصريف بتصوير تحقّق.' },
          { when: 'المتابعة', title: 'متابعة طويلة الأمد', body: 'تُراقَب الوظيفة والتصريف بتصوير نووي/موجات فوق صوتية؛ والمتابعة حاسمة بشكل خاص في هذه الحالات.' }
        ],
        risks: [
          'عودة التضيّق والحاجة إلى تدخّل إضافي',
          'تأثيرات أيضية/مخاطية مرتبطة بالأمعاء في الإحلال اللفائفي',
          'تسرّب البول والعدوى والنزيف',
          'تغيّر في وظيفة الكلية'
        ],
        alternatives: [
          'الإدامة بدعامة JJ طويلة الأمد أو فغر الكلية (لغير المرشّحين للجراحة)',
          'الإصلاح طرف-لطرف/إعادة الزرع في التضيّق القصير',
          'الزرع الذاتي (في حالات معقّدة مختارة)',
          'استئصال الكلية (فقط لكلية غير عاملة، كملاذ أخير)'
        ],
        price: {
          from: 0,
          to: 0,
          currency: 'EUR',
          disclaimer: 'لا يُقدَّم نطاق سعر ثابت في هذه الفئة؛ يُبلَّغ السعر بعد تقييم الملف، وفق تعقيد الحالة والتقنية المطلوبة.'
        },
        packageIncludes: [
          'العملية والإقامة في المستشفى',
          'التخدير والفحوصات المتقدمة',
          'مشمول عند الحاجة إلى طُعم/إحلال',
          'الدعامة وإزالتها',
          'التنقلات والإقامة',
          'مترجم طبي ومنسّق',
          'متابعة الوظيفة طويلة الأمد'
        ],
        faqs: [
          { q: 'لديّ تضيّق حالبي طويل وقيل لي "لا يمكن إجراؤه"؛ هل توجد خيارات؟', a: 'يمكن إصلاح التضيّقات طويلة المقطع في معظم الحالات بتقنيات متقدّمة مثل طُعم الغشاء المخاطي للخد أو الإحلال اللفائفي. يُقيَّم ملفك وتُوضَع خطة تحافظ على الكلية.' },
          { q: 'هل يمكن إعادة المحاولة بعد إجراء فاشل؟', a: 'نعم؛ إعادة البناء (redo) بعد إصابة علاجية المنشأ أو إصلاح فاشل من مجالات خبرة هذا المركز. وتُخطَّط تقنيات محافِظة على الكلية رغم النسيج الندبي.' },
          { q: 'كم يستغرق التعافي والمتابعة؟', a: 'فترة المبيت والدعامة أطول من العلاجات الأخرى؛ ويُقيَّم النجاح طويل الأمد بمتابعة منتظمة للوظيفة. والمتابعة حاسمة في هذه الحالات.' }
        ]
      },
      de: {
        title: 'Harnleiter-Rekonstruktion (langstreckige Striktur/Verletzung)',
        summary: 'Fortgeschrittene Rekonstruktion bei langstreckiger Harnleiterstriktur oder -verletzung: Techniken wie Mundschleimhaut-Transplantat und Ileuminterposition.',
        metaTitle: 'Harnleiter-Rekonstruktion | Chirurgie langstreckiger Harnleiterstriktur',
        metaDescription: 'Fortgeschrittene Rekonstruktion bei langstreckiger Harnleiterstriktur/-verletzung: Mundschleimhaut-Transplantat, Ileuminterposition, Harnleiter-Reimplantation. Erfahrung mit komplexen und Redo-Fällen.',
        definition: [
          'Der Harnleiter ist der Kanal, der Niere und Blase verbindet. Eine langstreckige Striktur oder Verletzung kann nach Steinchirurgie, Becken-/gynäkologischer Operation, Strahlentherapie oder Trauma entstehen und die Niere gefährden.',
          'Während kurze Strikturen mit einfachen Techniken repariert werden, erfordern langstreckige Strikturen eine fortgeschrittene Rekonstruktion. Techniken wie Mundschleimhaut-Transplantat, Ileuminterposition (Überbrückung mit einem Darmsegment) oder das Herabholen der Niere werden in erfahrenen Zentren durchgeführt, um die Niere zu erhalten.'
        ],
        surgeonExperience: {
          caseVolume: 'über 347 rekonstruktive Fälle (komplexe und Redo-Fälle inbegriffen)',
          note: 'Die Fallzahl spiegelt die gesamte chirurgische Erfahrung von Doz. Dr. Müslüm Ergün in diesem Bereich wider.'
        },
        expertise: {
          redoRate: 'Ein erheblicher Teil der Fälle sind Redo-Zuweisungen nach einem fehlgeschlagenen Versuch oder einer iatrogenen Verletzung in einem anderen Zentrum.',
          complexCase: 'Zu den komplexen Fällen zählen langstreckige/panureterale Striktur, Zustand nach Strahlentherapie und Patienten mit Einzelniere.',
          advancedTechnique: 'Ureteroplastik mit Mundschleimhaut-Transplantat, Ileuminterposition und robotergestützte Rekonstruktion.'
        },
        timeline: [
          { when: 'Aus der Ferne', title: 'Aktenprüfung', body: 'Ihre CT-Urographie, Szintigraphie und früheren OP-Berichte werden detailliert geprüft; Strikturlänge und Nierenfunktion werden bestimmt.' },
          { when: 'Tag 1–2', title: 'Ankunft & erweiterte Tests', body: 'Untersuchung, bei Bedarf Ureteroskopie/Bildgebung; der Rekonstruktionsplan wird finalisiert.' },
          { when: 'Tag 3', title: 'Operation', body: 'Transplantat, Interposition oder Reimplantation je nach Segmentlänge; meist mehrtägiger Aufenthalt.' },
          { when: 'Danach', title: 'Stent-/Katheterphase', body: 'Ein JJ-Stent und/oder Katheter bleibt eine Weile; die Drainage wird per Kontrollbildgebung bestätigt.' },
          { when: 'Nachsorge', title: 'Langfristige Nachsorge', body: 'Funktion und Drainage werden mit Szintigraphie/Ultraschall überwacht; die Nachsorge ist in diesen Fällen besonders entscheidend.' }
        ],
        risks: [
          'Rezidiv der Striktur und Bedarf an zusätzlichem Eingriff',
          'Darmbedingte metabolische/Schleim-Effekte bei der Ileuminterposition',
          'Urinleck, Infektion und Blutung',
          'Veränderung der Nierenfunktion'
        ],
        alternatives: [
          'Erhaltung mit langfristigem JJ-Stent oder Nephrostomie (für nicht operationsfähige Patienten)',
          'End-zu-End-Reparatur/Reimplantation bei kurzen Strikturen',
          'Autotransplantation (in ausgewählten komplexen Fällen)',
          'Nephrektomie (nur bei nicht funktionierender Niere, letztes Mittel)'
        ],
        price: {
          from: 0,
          to: 0,
          currency: 'EUR',
          disclaimer: 'In dieser Kategorie wird keine feste Preisspanne genannt; der Preis wird nach einer Aktenprüfung entsprechend Fallkomplexität und erforderlicher Technik mitgeteilt.'
        },
        packageIncludes: [
          'Operation und Krankenhausaufenthalt',
          'Anästhesie und erweiterte Untersuchungen',
          'Inbegriffen, wenn Transplantat/Interposition erforderlich ist',
          'Stent und dessen Entfernung',
          'Transfers und Unterkunft',
          'Medizinischer Dolmetscher und Koordinator',
          'Langfristige Funktionsnachsorge'
        ],
        faqs: [
          { q: 'Ich habe eine lange Harnleiterstriktur und mir wurde gesagt, es „geht nicht“; gibt es Optionen?', a: 'Langstreckige Strikturen lassen sich in den meisten Fällen mit fortgeschrittenen Techniken wie Mundschleimhaut-Transplantat oder Ileuminterposition reparieren. Ihre Akte wird bewertet und ein nierenerhaltender Plan erstellt.' },
          { q: 'Kann es nach einem fehlgeschlagenen Eingriff erneut versucht werden?', a: 'Ja; eine Redo-Rekonstruktion nach iatrogener Verletzung oder fehlgeschlagenem Verschluss ist ein Erfahrungsbereich dieses Zentrums. Trotz Narbengewebe werden nierenerhaltende Techniken geplant.' },
          { q: 'Wie lange dauern Genesung und Nachsorge?', a: 'Aufenthalt und Stentphase sind länger als bei anderen Behandlungen; der langfristige Erfolg wird mit regelmäßiger Funktionsnachsorge beurteilt. Die Nachsorge ist in diesen Fällen entscheidend.' }
        ]
      },
      ru: {
        title: 'Реконструкция мочеточника (протяжённая стриктура/повреждение)',
        summary: 'Продвинутая реконструкция при протяжённой стриктуре или повреждении мочеточника: методики, такие как трансплантат слизистой щеки и кишечная интерпозиция.',
        metaTitle: 'Реконструкция мочеточника | Хирургия протяжённой стриктуры мочеточника',
        metaDescription: 'Продвинутая реконструкция при протяжённой стриктуре/повреждении мочеточника: трансплантат слизистой щеки, кишечная интерпозиция, реимплантация мочеточника. Опыт в сложных и повторных случаях.',
        definition: [
          'Мочеточник — канал, соединяющий почку с мочевым пузырём. Протяжённая стриктура или повреждение могут возникнуть после операции по поводу камней, тазовой/гинекологической операции, лучевой терапии или травмы и угрожают почке.',
          'Короткие стриктуры устраняются простыми методами, а протяжённые требуют продвинутой реконструкции. Такие методики, как трансплантат слизистой щеки, кишечная интерпозиция (замещение сегментом кишки) или низведение почки, выполняются в опытных центрах для сохранения почки.'
        ],
        surgeonExperience: {
          caseVolume: 'более 347 реконструктивных случаев (включая сложные и повторные)',
          note: 'Число операций отражает общий хирургический опыт доцента д-ра Мюслюма Эргюна в этой области.'
        },
        expertise: {
          redoRate: 'Значительная часть случаев — повторные (redo) обращения после неудачной попытки или ятрогенного повреждения в другом центре.',
          complexCase: 'К сложным случаям относятся протяжённая/тотальная стриктура мочеточника, состояние после лучевой терапии и пациенты с единственной почкой.',
          advancedTechnique: 'Уретеропластика трансплантатом слизистой щеки, кишечная интерпозиция и роботическая реконструкция.'
        },
        timeline: [
          { when: 'Удалённо', title: 'Оценка документов', body: 'Подробно изучаются КТ-урография, сцинтиграфия и записи предыдущих операций; определяются длина стриктуры и функция почки.' },
          { when: 'День 1–2', title: 'Прибытие и расширенное обследование', body: 'Осмотр, при необходимости уретероскопия/визуализация; финализируется план реконструкции.' },
          { when: 'День 3', title: 'Операция', body: 'Трансплантат, интерпозиция или реимплантация в зависимости от длины сегмента; обычно пребывание несколько дней.' },
          { when: 'После', title: 'Период стента/катетера', body: 'Стент JJ и/или катетер остаются на время; дренаж подтверждается контрольной визуализацией.' },
          { when: 'Наблюдение', title: 'Долгосрочное наблюдение', body: 'Функция и дренаж контролируются сцинтиграфией/УЗИ; наблюдение особенно критично в этих случаях.' }
        ],
        risks: [
          'Рецидив стриктуры и необходимость дополнительного вмешательства',
          'Связанные с кишкой метаболические/слизистые эффекты при кишечной интерпозиции',
          'Подтекание мочи, инфекция и кровотечение',
          'Изменение функции почки'
        ],
        alternatives: [
          'Поддержание длительным стентом JJ или нефростомой (для неоперабельных пациентов)',
          'Реконструкция конец-в-конец/реимплантация при коротких стриктурах',
          'Аутотрансплантация (в отдельных сложных случаях)',
          'Нефрэктомия (только при нефункционирующей почке, крайняя мера)'
        ],
        price: {
          from: 0,
          to: 0,
          currency: 'EUR',
          disclaimer: 'В этой категории фиксированный диапазон цен не указывается; цена сообщается после оценки документов, в зависимости от сложности случая и необходимой методики.'
        },
        packageIncludes: [
          'Операция и пребывание в стационаре',
          'Анестезия и расширенное обследование',
          'Включено при необходимости трансплантата/интерпозиции',
          'Стент и его удаление',
          'Трансферы и проживание',
          'Медицинский переводчик и координатор',
          'Долгосрочное наблюдение функции'
        ],
        faqs: [
          { q: 'У меня длинная стриктура мочеточника, и мне сказали, что «это невозможно»; есть ли варианты?', a: 'Протяжённые стриктуры в большинстве случаев можно устранить продвинутыми методиками, такими как трансплантат слизистой щеки или кишечная интерпозиция. Ваши документы оцениваются, и составляется почкосохраняющий план.' },
          { q: 'Можно ли повторить попытку после неудачной операции?', a: 'Да; повторная (redo) реконструкция после ятрогенного повреждения или неудачной пластики — область опыта этого центра. Несмотря на рубцовую ткань, планируются почкосохраняющие методики.' },
          { q: 'Сколько длятся восстановление и наблюдение?', a: 'Пребывание и период стента дольше, чем при других видах лечения; долгосрочный успех оценивается регулярным наблюдением функции. Наблюдение критично в этих случаях.' }
        ]
      }
    }
  }
];

// Derleme/başlangıç sırasında içerik bütünlüğünü zorunlu kıl: eksik veya boş
// bir alan varsa build burada net bir mesajla kırılır (sessizce boş geçmez).
assertTreatmentsValid(treatments);

export function getTreatment(slug: string): Treatment | undefined {
  return treatments.find((t) => t.slug === slug);
}

export const treatmentSlugs = treatments.map((t) => t.slug);

/** Belirli kategorideki tedaviler. */
export function treatmentsByCategory(category: TreatmentCategory): Treatment[] {
  return treatments.filter((t) => treatmentCategory(t) === category);
}

/** Genel (fiyat/hacim odaklı) tedaviler — ana sayfa/menü kart gridleri için. */
export const generalTreatments = treatmentsByCategory('general');

/** Rekonstrüktif (uzmanlık odaklı) tedaviler. */
export const reconstructiveTreatments = treatmentsByCategory('reconstructive');
