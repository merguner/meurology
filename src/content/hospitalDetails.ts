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
  de: {
    sections: [
      {
        title: 'Operationssäle und Intensivmedizin',
        body: [
          'Beide Häuser sind Privatkrankenhäuser der Vollversorgung: Operationssäle, Anästhesieteam, Bildgebung, Labor und Intensivstation befinden sich im selben Gebäude. In der urologischen Chirurgie ist das von Bedeutung, denn was am Operationstag zusätzlich nötig werden kann — weitere Bildgebung, Blutprodukte, ein Intensivbett — lässt sich ohne Verlegung in ein anderes Haus bereitstellen.',
          'Die meisten Patienten kommen nach der Operation direkt auf die Station. Ein Intensivaufenthalt ist nicht die Regel; er wird nur geplant, wenn Begleiterkrankungen oder der Verlauf des Eingriffs es erfordern. Entsteht dieser Bedarf, erfolgt die Verlegung innerhalb des Hauses.',
          'Die Anästhesieaufklärung findet vor dem Eingriff persönlich im Krankenhaus statt. Bringen Sie dazu die vollständige Liste Ihrer Medikamente mit, insbesondere Gerinnungshemmer. Die Medikation wird für jeden Patienten einzeln geplant; setzen Sie kein Präparat eigenmächtig ab.'
        ]
      },
      {
        title: 'Operative Technik',
        body: [
          'Robotisch assistierte Eingriffe erfolgen mit der da-Vinci-Plattform, die Prostataenukleation (ThuLEP und HoLEP) mit der Quanta-Laserplattform. Die in der Steinchirurgie eingesetzten flexiblen Ureteroskopie- und perkutanen Instrumente gehören zur selben OP-Infrastruktur.',
          'Technik allein erzeugt kein Ergebnis. Welches System zum Einsatz kommt, richtet sich nach dem Krankheitsbild, dem Zustand des Organs und der Anatomie; dass zwei Patienten mit derselben Diagnose unterschiedliche Verfahren empfohlen bekommen, ist normal. Der Gerätename ist keine Überlegenheitsaussage, sondern eine Erklärung, wie der Eingriff ausgeführt wird.',
          'Wird Gewebe entfernt, geht es in die Pathologie. So wird ein unerwarteter Befund nicht übersehen; bei Verfahren, die Gewebe verdampfen, ist diese Untersuchung nicht möglich.'
        ]
      },
      {
        title: 'Abteilung für internationale Patienten',
        body: [
          'Beide Krankenhäuser verfügen über eine Abteilung für internationale Patienten. Sie übernimmt Aufnahme, Wegführung im Haus, Dolmetscherunterstützung und die Erstellung der Entlassungsunterlagen. Die Koordinatorin unserer Klinik arbeitet mit dieser Abteilung zusammen.',
          'Vor dem Gespräch wird eine Dolmetscherin oder ein Dolmetscher in der von Ihnen benötigten Sprache organisiert. Wo medizinische Entscheidungen besprochen werden, verhindert das genau jene Punkte, die als verstanden gelten, es aber nicht sind.',
          'Bei der Entlassung erhalten Sie Arztbrief, bei entferntem Gewebe den Pathologiebefund sowie Ihre Verordnungen gemeinsam. Bewahren Sie diese Unterlagen für die weiterbetreuende Ärztin oder den weiterbetreuenden Arzt zu Hause auf.'
        ]
      },
      {
        title: 'Anreise und Unterkunft',
        body: [
          'Beide Häuser liegen auf der europäischen Seite Istanbuls. Die Transfers Flughafen–Klinik–Hotel organisiert die Klinik. Die Fahrzeit hängt von Tageszeit und Verkehr ab; Termine werden mit entsprechendem Spielraum vergeben.',
          'Für Patienten aus dem Ausland wird die Unterkunft in Hotels in Geh- oder kurzer Fahrdistanz zum Krankenhaus geplant. Die Unterbringung einer Begleitperson gehört dazu.',
          'Planen Sie Ihren Rückflug nicht für den Tag nach Katheterentfernung und Kontrolle. Bei wenigen Patienten muss der Katheter vorübergehend erneut gelegt werden — in Kliniknähe unproblematisch, im Flugzeug oder in einem anderen Land ein echtes Problem.'
        ]
      }
    ],
    choiceNote:
      'In welchem Haus Sie operiert werden, richtet sich nach dem Eingriff, dem OP-Programm und etwaigen Begleiterkrankungen. Diese Entscheidung wird Ihnen in der Planungsphase schriftlich mitgeteilt.'
  },
  fr: {
    sections: [
      {
        title: 'Blocs opératoires et soins intensifs',
        body: [
          'Les deux établissements sont des hôpitaux privés à service complet : blocs opératoires, équipe d’anesthésie, imagerie, laboratoire et réanimation se trouvent dans le même bâtiment. En chirurgie urologique, cela compte : ce qui peut devenir nécessaire le jour de l’intervention — imagerie complémentaire, produits sanguins, un lit de réanimation — peut être obtenu sans transférer le patient ailleurs.',
          'La plupart des patients rejoignent directement une chambre après l’intervention. Un séjour en réanimation n’est pas la règle ; il n’est prévu que si des maladies associées ou le déroulement de l’opération l’imposent. Le cas échéant, le transfert se fait au sein de l’hôpital.',
          'La consultation d’anesthésie a lieu en présentiel à l’hôpital avant l’intervention. Apportez-y la liste complète de vos médicaments, en particulier les anticoagulants. La gestion des traitements est individuelle ; n’arrêtez aucun médicament de votre propre initiative.'
        ]
      },
      {
        title: 'Technologie chirurgicale',
        body: [
          'Les interventions robotiques utilisent la plateforme da Vinci ; l’énucléation prostatique (ThuLEP et HoLEP) utilise la plateforme laser Quanta. Le matériel d’urétéroscopie souple et de chirurgie percutanée employé pour les calculs fait partie de la même infrastructure.',
          'La technique seule ne produit pas de résultat. Le choix du système dépend de la maladie, de l’état de l’organe et de l’anatomie ; il est courant que deux patients ayant le même diagnostic se voient proposer des méthodes différentes. Le nom d’un appareil n’est pas une affirmation de supériorité : il explique seulement comment l’intervention est réalisée.',
          'Lorsque du tissu est retiré, il est adressé en anatomopathologie. C’est ce qui évite de passer à côté d’une découverte inattendue ; avec les méthodes qui vaporisent le tissu, cet examen est impossible.'
        ]
      },
      {
        title: 'Unité patients internationaux',
        body: [
          'Les deux hôpitaux disposent d’une unité patients internationaux. Elle prend en charge l’admission, l’orientation dans l’établissement, l’interprétariat et la préparation des documents de sortie. La coordinatrice de notre clinique travaille avec cette unité.',
          'Un interprète est organisé dans la langue dont vous avez besoin avant la consultation. Lorsque des décisions médicales se discutent, sa présence évite précisément les points que l’on croit compris sans l’être.',
          'À la sortie, le compte rendu d’hospitalisation, le résultat anatomopathologique si du tissu a été retiré et vos ordonnances vous sont remis ensemble. Conservez ces documents pour le médecin qui assurera votre suivi.'
        ]
      },
      {
        title: 'Accès et hébergement',
        body: [
          'Les deux hôpitaux se situent sur la rive européenne d’Istanbul. Les transferts aéroport–hôpital–hôtel sont organisés par la clinique. Les durées de trajet varient selon l’heure et la circulation ; les rendez-vous sont fixés en tenant compte de cette marge.',
          'Pour les patients venant de l’étranger, l’hébergement est prévu dans des hôtels à distance de marche ou de courte voiture de l’hôpital. L’hébergement d’un accompagnant fait partie du même dispositif.',
          'Ne réservez pas votre vol retour pour le lendemain du retrait de la sonde et du contrôle. Chez un petit nombre de patients, la sonde doit être reposée temporairement : facile à régler près de l’hôpital, réellement problématique en avion ou dans un autre pays.'
        ]
      }
    ],
    choiceNote:
      'L’établissement où vous serez opéré dépend de l’intervention, du programme opératoire et de vos éventuelles maladies associées. Cette décision vous est communiquée par écrit lors de la planification.'
  },
  ru: {
    sections: [
      {
        title: 'Операционные и интенсивная терапия',
        body: [
          'Обе больницы — частные клиники полного цикла: операционные, бригада анестезиологов, лучевая диагностика, лаборатория и отделение интенсивной терапии находятся в одном здании. В урологической хирургии это важно: всё, что может потребоваться в день операции — дополнительная визуализация, препараты крови, койка интенсивной терапии, — обеспечивается без перевода пациента в другое учреждение.',
          'Большинство пациентов после операции поступают сразу в палату. Пребывание в интенсивной терапии не является рутиной; оно планируется только при сопутствующих заболеваниях или если этого требует ход операции. При такой необходимости перевод происходит внутри больницы.',
          'Осмотр анестезиолога проводится очно в больнице до операции. Возьмите на него полный список принимаемых препаратов, прежде всего разжижающих кровь. Схема приёма планируется индивидуально; не отменяйте ни один препарат самостоятельно.'
        ]
      },
      {
        title: 'Хирургические технологии',
        body: [
          'Роботические операции выполняются на платформе da Vinci, энуклеация простаты (ThuLEP и HoLEP) — на лазерной платформе Quanta. Оборудование для гибкой уретероскопии и перкутанных вмешательств, применяемое в хирургии камней, относится к той же операционной инфраструктуре.',
          'Техника сама по себе результата не даёт. Выбор системы определяется заболеванием, состоянием органа и анатомией пациента; то, что двум пациентам с одним диагнозом предлагают разные методы, — обычное дело. Название аппарата не является заявлением о превосходстве: оно лишь объясняет, как выполняется вмешательство.',
          'Если ткань удаляется, её направляют на гистологическое исследование. Именно это не даёт пропустить неожиданную находку; при методах, выпаривающих ткань, такое исследование невозможно.'
        ]
      },
      {
        title: 'Отделение для иностранных пациентов',
        body: [
          'В обеих больницах есть отделение для иностранных пациентов. Оно занимается оформлением при поступлении, сопровождением внутри больницы, переводом и подготовкой выписных документов. Координатор нашей клиники работает вместе с этим отделением.',
          'Перед консультацией организуется переводчик на нужном вам языке. Когда обсуждаются медицинские решения, присутствие переводчика избавляет от тех моментов, которые кажутся понятыми, но поняты не были.',
          'При выписке вам вместе выдают выписной эпикриз, результат гистологии (если ткань удалялась) и рецепты. Сохраните эти документы для врача, который будет наблюдать вас дома.'
        ]
      },
      {
        title: 'Дорога и проживание',
        body: [
          'Обе больницы расположены на европейской стороне Стамбула. Трансферы аэропорт — больница — отель организует клиника. Время в пути зависит от часа и дорожной обстановки; время приёма назначается с этим запасом.',
          'Для пациентов из-за рубежа проживание планируется в отелях в пешей или короткой автомобильной доступности от больницы. Проживание одного сопровождающего входит в тот же план.',
          'Не планируйте обратный рейс на следующий день после удаления катетера и контрольного осмотра. Небольшому числу пациентов катетер приходится временно устанавливать повторно: рядом с больницей это решается легко, в самолёте или другой стране — нет.'
        ]
      }
    ],
    choiceNote:
      'В какой из больниц будет проведена операция, зависит от вмешательства, графика операционной и сопутствующих заболеваний. Об этом вам сообщают письменно на этапе планирования.'
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
