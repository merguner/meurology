import type { LegalDoc } from './legal';

/**
 * SGK VE ÖZEL SİGORTA SAYFASI (prompt m.6 — Aşama 5, ulusal erişim).
 *
 * NEDEN BU SAYFA VAR
 * Türkiye'de sağlık hizmeti tanıtımı kısıtlı olduğundan ulusal erişim
 * bilgilendirici içerikle sağlanır. "SGK karşılıyor mu" Türkiye'de en çok
 * aranan sorulardan biridir ve dürüst bir cevabı yoktur çünkü cevap kuruma,
 * işleme ve kişinin sigorta durumuna göre değişir. Bu sayfa mekanizmayı
 * anlatır; kişiye özel sonucu VAAT ETMEZ.
 *
 * YAZARKEN UYULAN KURALLAR
 *  - FİYAT VE TUTAR YOK. Fark ücretinin VAR OLABİLECEĞİ söylenir, miktarı
 *    söylenmez. Yönetmelik yurt içinde fiyat tanıtımını yasaklar; ayrıca
 *    mevzuattaki üst sınır oranı zamanla değişir, yazmak yanıltıcı olur.
 *  - ANLAŞMALI SİGORTA ŞİRKETİ LİSTESİ YOK. Doğrulanmadı (TODO-DOGRULA) ve
 *    anlaşmalar dönemsel olarak değişir. Yanlış liste, hastayı boş yere
 *    yola çıkarır. Bunun yerine "yazılı teyit isteyin" denir.
 *  - "SGK şu ameliyatı karşılar" denmez. Kapsam SUT'a, hastanenin sözleşme
 *    durumuna ve tıbbi endikasyona bağlıdır; genel geçer cümle kurmak
 *    yanıltıcıdır.
 *
 * YABANCI DİLLER: SGK Türkiye'ye özgüdür ve yurt dışından gelen hasta
 * kapsamında değildir. O dillerde sayfa, kendi sigortanızdan geri ödeme
 * almanın nasıl işlediğini ve önceden neyin yazılı alınması gerektiğini
 * anlatır — bu, planlı yurt dışı tedavide en sık yapılan hatadır.
 */
export const insuranceDoc: LegalDoc = {
  lastUpdated: '2026-10-04',
  i18n: {
    tr: {
      intro:
        'Bu sayfa, tedavi masrafının Sosyal Güvenlik Kurumu (SGK) veya özel sağlık sigortanız tarafından karşılanıp karşılanmayacağını nasıl öğreneceğinizi anlatır. Burada tutar yazmaz; amaç, doğru soruyu doğru yere sormanızı sağlamaktır.',
      sections: [
        {
          heading: 'Kısa cevap: tek bir cevap yok',
          paragraphs: [
            '"SGK bu ameliyatı karşılıyor mu?" sorusunun herkes için geçerli tek bir cevabı yoktur. Sonuç üç şeye birlikte bağlıdır: işlemin Sağlık Uygulama Tebliği (SUT) kapsamında olup olmadığı, tedavinin yapılacağı kurumun SGK ile sözleşmesinin bulunup bulunmadığı ve sizin sigortalılık durumunuzun aktif olup olmadığı.',
            'Bu üçünden biri eksikse sonuç değişir. Bu nedenle internette okuduğunuz genel bir cümleye değil, kendi durumunuz için alınmış yazılı bilgiye güvenin.'
          ]
        },
        {
          heading: 'Sözleşmeli kurum ne demek',
          paragraphs: [
            'SGK, özel sağlık kuruluşlarıyla sözleşme yapar. Sözleşmeli bir kurumda tedavi olduğunuzda masrafın SUT\'ta tanımlı kısmı SGK tarafından karşılanır.',
            'Sözleşmeli kurumlarda, mevzuatın izin verdiği sınırlar içinde hastadan ilave ücret (fark ücreti) talep edilebilir. Bu sınır mevzuatla belirlenir ve zaman içinde değişir; bu nedenle burada oran veya tutar yazmıyoruz. Doğru olan, işlem öncesinde kurumdan yazılı bilgi istemektir.',
            'Sözleşmesiz bir kurumda tedavi olmanız durumunda masraf SGK tarafından karşılanmaz. Bu ayrım, tedaviye başlamadan önce netleştirilmesi gereken ilk konudur.'
          ]
        },
        {
          heading: 'Acil durumlar farklıdır',
          paragraphs: [
            'Acil hâllerde kurumun sözleşme durumundan bağımsız olarak farklı kurallar uygulanır. Ancak bir başvurunun "acil" sayılıp sayılmayacağı tıbbi bir değerlendirmedir; hastanın kendi beyanıyla belirlenmez.',
            'Bu nedenle planlı bir ameliyatı acil kapsamında değerlendirtmeye çalışmak gerçekçi değildir.'
          ]
        },
        {
          heading: 'Özel sağlık sigortanız varsa',
          paragraphs: [
            'Özel sağlık sigortalarında kapsam poliçeye göre değişir. Aynı şirketin iki farklı poliçesi aynı işlemi farklı kapsayabilir; bu nedenle "şu şirket karşılıyor" bilgisi tek başına yeterli değildir.',
            'Poliçelerde en sık karşılaşılan sınırlamalar şunlardır: poliçe öncesi var olan rahatsızlıkların kapsam dışı bırakılması, belirli bir bekleme süresi uygulanması, ameliyat öncesi ön onay (provizyon) şartı ve yıllık limit.',
            'Ön onay şartı özellikle önemlidir: bazı poliçelerde onay alınmadan yapılan işlem sonradan karşılanmaz. Bu, hasta açısından en sık yaşanan sorundur.',
            'Doğru sıra şudur: önce tanı ve planlanan işlemin adı netleşir, sonra bu bilgiyle sigorta şirketinizden yazılı teyit alınır, sonra tarih verilir.'
          ]
        },
        {
          heading: 'Anlaşmalı sigorta kurumları',
          paragraphs: [
            'Anlaşmalı kurum listeleri dönemsel olarak değişir. Bu sayfada sabit bir liste yayımlamıyoruz, çünkü güncelliğini yitirmiş bir liste sizi boşuna yola çıkarabilir.',
            'Kendi poliçeniz için geçerli durumu öğrenmek üzere bizimle iletişime geçin; poliçe bilgilerinizle birlikte, tedavinin yapılacağı kurumda sigortanızın geçerli olup olmadığı yazılı olarak teyit edilir.'
          ]
        },
        {
          heading: 'Kapsam dışı kalması sık görülen kalemler',
          paragraphs: [
            'Tıbbi gereklilik bulunmayan, yalnızca estetik amaçlı işlemler genellikle kapsam dışındadır.',
            'Refakatçi konaklaması, tek kişilik oda farkı ve otel benzeri hizmetler çoğu poliçede ayrı değerlendirilir.',
            'Rapor, belge ve ulaşım giderleri genellikle karşılanmaz.',
            'Bu kalemlerin hangilerinin sizin poliçenizde yer aldığını önceden sormanız, sonradan sürprizle karşılaşmanızı önler.'
          ]
        },
        {
          heading: 'Önceden sormanız gereken sorular',
          paragraphs: [
            'Planlanan işlemin adı ve kodu nedir?',
            'Tedavinin yapılacağı kurum SGK ile sözleşmeli mi?',
            'Benim durumumda ilave ücret talep edilecek mi, edilecekse bunu yazılı olarak alabilir miyim?',
            'Özel sigortam için ön onay gerekiyor mu ve bu onayı kim alıyor?',
            'Hangi kalemler kapsam dışında kalacak?',
            'Bu soruların cevabını sözlü değil yazılı isteyin. Yazılı cevap vermekten kaçınılan bir süreçte, sonradan anlaşmazlık çıkma ihtimali yüksektir.'
          ]
        },
        {
          heading: 'Bu sayfanın sınırı',
          paragraphs: [
            'Burada anlatılanlar genel bilgilendirmedir ve mevzuat ile poliçe şartları değişebilir. Bağlayıcı bilgi; SGK\'nın, sigorta şirketinizin ve tedavinin yapılacağı kurumun size yazılı olarak verdiği bilgidir.',
            'Bu metin tıbbi tavsiye yerine de geçmez. Hangi işlemin tıbben gerekli olduğu, muayene ve tetkik sonrasında belirlenir.'
          ]
        }
      ]
    },
    en: {
      intro:
        'This page explains how reimbursement works if you are travelling to Turkey for treatment. Turkey\'s state scheme (SGK) does not cover visitors from abroad, so the relevant question is what your own insurer will reimburse — and what you must obtain in writing before you travel.',
      sections: [
        {
          heading: 'The Turkish state scheme does not apply to you',
          paragraphs: [
            'SGK is Turkey\'s social security health scheme. It covers people insured within the Turkish system. If you are travelling here for planned treatment, it does not apply to you, and no clinic can enrol you in it.',
            'Treatment for international patients is therefore self-funded at the point of care, with any reimbursement handled afterwards by your own insurer or national scheme.'
          ]
        },
        {
          heading: 'Planned treatment abroad is rarely covered automatically',
          paragraphs: [
            'Most travel insurance policies cover unexpected illness or injury while abroad. Planned treatment — the reason you are travelling — is usually excluded. This surprises people at the worst possible moment, and it is worth checking before you book anything.',
            'If you hold private medical insurance, check whether treatment outside your home country is covered at all, and whether prior authorisation is required. Many policies will not reimburse a procedure that was not authorised in advance, however valid the clinical indication.'
          ]
        },
        {
          heading: 'If you are covered by a national health scheme',
          paragraphs: [
            'Some national schemes allow reimbursement for planned treatment in another country, usually subject to prior approval and often capped at what the same treatment would have cost at home.',
            'The decisive point is almost always timing: approval must normally be obtained before treatment. Applying afterwards is generally unsuccessful.',
            'Ask your scheme what documentation it needs, and get the answer in writing. This typically includes a diagnosis, the proposed procedure, and an itemised cost estimate.'
          ]
        },
        {
          heading: 'What to request from us',
          paragraphs: [
            'An itemised written estimate naming the planned procedure — not a single figure.',
            'Confirmation of what is included and what is not, particularly what happens in the event of a complication.',
            'After treatment: the operation note, the pathology report where applicable, and the discharge summary. Most insurers will not process a claim without these.',
            'Tell us in advance if your insurer requires documents in a specific format or language, so that they are prepared correctly rather than reissued later.'
          ]
        },
        {
          heading: 'Questions worth asking your insurer before you travel',
          paragraphs: [
            'Is planned treatment outside my home country covered under my policy?',
            'Is prior authorisation required, and how long does it take?',
            'Will reimbursement be capped, and on what basis?',
            'Which costs are excluded — accommodation, travel, companion costs, follow-up?',
            'What happens if a complication requires further treatment abroad?',
            'Obtain the answers in writing. A verbal assurance is not something a claims department is bound by.'
          ]
        },
        {
          heading: 'The limits of this page',
          paragraphs: [
            'The above is general information. Policy terms and national rules vary and change, and only your insurer or scheme can tell you what applies to you.',
            'This page is not medical advice. Which procedure is clinically appropriate is determined after assessment.'
          ]
        }
      ]
    },
    de: {
      intro:
        'Diese Seite erklärt, wie die Kostenfrage geregelt ist, wenn Sie für eine geplante Behandlung in die Türkei reisen. Das türkische Sozialversicherungssystem (SGK) gilt für Sie nicht; entscheidend ist, was Ihre Krankenkasse oder private Versicherung erstattet — und was Sie vorher schriftlich benötigen.',
      sections: [
        {
          heading: 'Das türkische System gilt für Sie nicht',
          paragraphs: [
            'SGK ist die türkische Sozialversicherung und erfasst im türkischen System versicherte Personen. Für eine geplante Anreise aus dem Ausland gilt sie nicht, und keine Klinik kann Sie dort anmelden.',
            'Die Behandlung internationaler Patientinnen und Patienten wird daher vor Ort selbst bezahlt; eine Erstattung erfolgt gegebenenfalls anschließend über Ihre Versicherung.'
          ]
        },
        {
          heading: 'Geplante Auslandsbehandlung: vorher klären, nicht nachher',
          paragraphs: [
            'Eine geplante Behandlung im Ausland wird von der gesetzlichen Krankenversicherung nicht selbstverständlich erstattet. In der Regel ist eine vorherige Klärung mit der Krankenkasse erforderlich.',
            'Der entscheidende Punkt ist der Zeitpunkt: Die Klärung muss vor der Behandlung erfolgen. Ein Antrag im Nachhinein führt meist nicht zum Ziel.',
            'Holen Sie die Auskunft Ihrer Kasse schriftlich ein, bevor Sie buchen. Eine Klinik im Ausland kann Ihnen keine Zusage Ihrer Kasse geben — und sollte das auch nicht andeuten.'
          ]
        },
        {
          heading: 'Private Krankenversicherung und Reiseversicherung',
          paragraphs: [
            'Bei privaten Versicherungen hängt der Umfang vom konkreten Tarif ab. Prüfen Sie, ob Behandlungen außerhalb Deutschlands überhaupt eingeschlossen sind und ob eine vorherige Genehmigung verlangt wird.',
            'Auslandsreisekrankenversicherungen decken in aller Regel akute Erkrankungen während einer Reise ab — nicht die geplante Behandlung, deretwegen Sie reisen. Das ist einer der häufigsten Irrtümer.'
          ]
        },
        {
          heading: 'Was Sie von uns anfordern sollten',
          paragraphs: [
            'Einen schriftlichen, aufgeschlüsselten Kostenvoranschlag mit Benennung des geplanten Eingriffs — keine Pauschalzahl.',
            'Eine klare Aufstellung dessen, was enthalten ist und was nicht, insbesondere im Fall einer Komplikation.',
            'Nach der Behandlung: Operationsbericht, gegebenenfalls Histologiebefund und Entlassungsbrief — möglichst in deutscher Sprache. Ohne diese Unterlagen wird eine Erstattung in der Regel nicht bearbeitet.',
            'Sagen Sie uns vorab, welche Form oder Sprache Ihre Versicherung verlangt, damit die Unterlagen gleich richtig ausgestellt werden.'
          ]
        },
        {
          heading: 'Fragen an Ihre Kasse oder Versicherung',
          paragraphs: [
            'Ist eine geplante Behandlung im Ausland nach meinem Versicherungsverhältnis erstattungsfähig?',
            'Ist eine vorherige Genehmigung erforderlich, und wie lange dauert sie?',
            'Wird die Erstattung begrenzt, und auf welcher Grundlage?',
            'Welche Kosten sind ausgeschlossen — Unterkunft, Reise, Begleitperson, Nachsorge?',
            'Was gilt, wenn eine Komplikation eine weitere Behandlung im Ausland erfordert?',
            'Lassen Sie sich die Antworten schriftlich geben.'
          ]
        },
        {
          heading: 'Grenzen dieser Seite',
          paragraphs: [
            'Die Angaben sind allgemeiner Natur. Versicherungsbedingungen und rechtliche Vorgaben ändern sich; verbindlich ist allein die schriftliche Auskunft Ihrer Versicherung.',
            'Diese Seite ersetzt keine ärztliche Beratung. Welcher Eingriff medizinisch angezeigt ist, ergibt sich erst nach Untersuchung.'
          ]
        }
      ]
    },
    fr: {
      intro:
        'Cette page explique comment se règle la question des coûts lorsque vous venez en Turquie pour une intervention programmée. Le régime public turc (SGK) ne vous concerne pas ; ce qui compte est ce que votre assurance remboursera — et ce que vous devez obtenir par écrit avant de partir.',
      sections: [
        {
          heading: 'Le régime turc ne s\'applique pas à vous',
          paragraphs: [
            'La SGK est la sécurité sociale turque et couvre les personnes affiliées au système turc. Elle ne s\'applique pas à une venue programmée depuis l\'étranger, et aucun établissement ne peut vous y affilier.',
            'Les soins des patients internationaux sont donc réglés sur place, un éventuel remboursement étant traité ensuite par votre assurance.'
          ]
        },
        {
          heading: 'Soins programmés à l\'étranger : l\'accord se demande avant',
          paragraphs: [
            'Les soins programmés à l\'étranger ne sont pas remboursés automatiquement. Une autorisation préalable de votre organisme est généralement nécessaire.',
            'Le point décisif est le calendrier : la demande doit être faite avant l\'intervention. Une démarche engagée après coup aboutit rarement.',
            'Obtenez la réponse par écrit avant de réserver. Un établissement étranger ne peut en aucun cas vous garantir la position de votre organisme.'
          ]
        },
        {
          heading: 'Assurance privée et assurance voyage',
          paragraphs: [
            'Pour les contrats privés, l\'étendue dépend du contrat lui-même. Vérifiez si les soins hors de votre pays sont couverts et si une entente préalable est exigée.',
            'Les assurances voyage couvrent en règle générale les maladies ou accidents survenus pendant le séjour — et non l\'intervention programmée qui motive le voyage. C\'est une confusion fréquente et coûteuse.'
          ]
        },
        {
          heading: 'Ce qu\'il faut nous demander',
          paragraphs: [
            'Un devis écrit et détaillé nommant l\'intervention prévue, et non un montant global.',
            'Le détail de ce qui est inclus et de ce qui ne l\'est pas, en particulier en cas de complication.',
            'Après l\'intervention : le compte rendu opératoire, le résultat anatomopathologique le cas échéant et le compte rendu d\'hospitalisation, de préférence en français. Sans ces pièces, un dossier de remboursement n\'est généralement pas instruit.',
            'Indiquez-nous à l\'avance le format ou la langue exigés par votre organisme, afin que les documents soient établis correctement du premier coup.'
          ]
        },
        {
          heading: 'Questions à poser à votre organisme',
          paragraphs: [
            'Les soins programmés à l\'étranger sont-ils pris en charge dans ma situation ?',
            'Une autorisation préalable est-elle nécessaire, et dans quel délai ?',
            'Le remboursement est-il plafonné, et sur quelle base ?',
            'Quels frais sont exclus — hébergement, transport, accompagnant, suivi ?',
            'Que se passe-t-il si une complication impose des soins supplémentaires à l\'étranger ?',
            'Demandez des réponses écrites.'
          ]
        },
        {
          heading: 'Limites de cette page',
          paragraphs: [
            'Ces informations sont générales. Les conditions contractuelles et les règles nationales évoluent ; seule la réponse écrite de votre organisme fait foi.',
            'Cette page ne remplace pas un avis médical. L\'indication est posée après évaluation.'
          ]
        }
      ]
    },
    ru: {
      intro:
        'На этой странице объясняется, как решается вопрос оплаты, если вы приезжаете в Турцию на плановое лечение. Турецкая государственная система (SGK) на вас не распространяется; значение имеет то, что возместит ваша страховая компания, и что нужно получить в письменном виде заранее.',
      sections: [
        {
          heading: 'Турецкая государственная система на вас не распространяется',
          paragraphs: [
            'SGK — это турецкая система социального страхования, охватывающая застрахованных внутри турецкой системы. На плановый приезд из другой страны она не распространяется, и ни одна клиника не может вас в неё включить.',
            'Поэтому лечение иностранных пациентов оплачивается на месте, а возмещение, если оно возможно, оформляется затем через вашу страховую компанию.'
          ]
        },
        {
          heading: 'Согласование получают до лечения, а не после',
          paragraphs: [
            'Плановое лечение за рубежом возмещается не автоматически. Как правило, требуется предварительное согласование со страховой компанией.',
            'Решающим является срок: обращаться нужно до лечения. Заявление, поданное после, обычно результата не даёт.',
            'Получите ответ в письменном виде до бронирования. Клиника за рубежом не может дать вам гарантию от имени вашей страховой компании и не должна этого обещать.'
          ]
        },
        {
          heading: 'Полис добровольного страхования и страховка путешественника',
          paragraphs: [
            'В добровольном страховании объём покрытия определяется самим договором. Проверьте, покрывается ли лечение за пределами вашей страны и требуется ли предварительное согласование.',
            'Страховка путешественника обычно покрывает внезапное заболевание или травму во время поездки, но не плановое лечение, ради которого поездка совершается. Это одно из самых частых заблуждений.'
          ]
        },
        {
          heading: 'Что следует запросить у нас',
          paragraphs: [
            'Письменную детализированную смету с указанием планируемого вмешательства, а не одну общую сумму.',
            'Перечень того, что входит и что не входит в смету, особенно на случай осложнения.',
            'После лечения: протокол операции, при необходимости гистологическое заключение и выписку. Без этих документов заявление на возмещение обычно не рассматривается.',
            'Заранее сообщите, в каком виде и на каком языке документы нужны вашей страховой компании, чтобы они были оформлены правильно сразу.'
          ]
        },
        {
          heading: 'Вопросы к страховой компании',
          paragraphs: [
            'Покрывается ли плановое лечение за рубежом в моём случае?',
            'Требуется ли предварительное согласование и сколько оно занимает?',
            'Есть ли предел возмещения и как он рассчитывается?',
            'Какие расходы исключены — проживание, дорога, сопровождающий, наблюдение?',
            'Что будет, если осложнение потребует дополнительного лечения за рубежом?',
            'Ответы просите в письменном виде.'
          ]
        },
        {
          heading: 'Границы этой страницы',
          paragraphs: [
            'Изложенное носит общий характер. Условия договоров и правила меняются; обязательную силу имеет только письменный ответ вашей страховой компании.',
            'Эта страница не заменяет консультацию врача. Показания определяются после обследования.'
          ]
        }
      ]
    },
    ar: {
      intro:
        'تشرح هذه الصفحة كيف تُحسم مسألة التكاليف إذا كنت قادمًا إلى تركيا لعلاج مخطَّط له. فنظام الضمان الاجتماعي التركي (SGK) لا يشملك، والمهم هو ما ستعوّضه شركة التأمين لديك، وما ينبغي الحصول عليه كتابةً قبل السفر.',
      sections: [
        {
          heading: 'النظام الحكومي التركي لا يشملك',
          paragraphs: [
            'الضمان الاجتماعي التركي نظام يشمل المؤمَّن عليهم داخل المنظومة التركية. وهو لا ينطبق على القدوم المخطَّط له من بلد آخر، ولا تستطيع أيّ عيادة إدراجك فيه.',
            'ولذلك يُسدَّد علاج المرضى الدوليين في مكانه، ثم يُعالَج التعويض — إن وُجد — عبر شركة التأمين لديك.'
          ]
        },
        {
          heading: 'الموافقة تُطلب قبل العلاج لا بعده',
          paragraphs: [
            'العلاج المخطَّط له في الخارج لا يُعوَّض تلقائيًا. والغالب أن تُشترط موافقة مسبقة من جهة التأمين.',
            'والنقطة الحاسمة هي التوقيت: الطلب يُقدَّم قبل العلاج. أما التقديم بعده فنادرًا ما يُجدي.',
            'احصل على الجواب كتابةً قبل الحجز. فالعيادة في الخارج لا تستطيع أن تضمن لك موقف شركتك، ولا ينبغي لها أن توحي بذلك.'
          ]
        },
        {
          heading: 'التأمين الصحي الخاص وتأمين السفر',
          paragraphs: [
            'في التأمين الخاص يتحدد نطاق التغطية بالوثيقة نفسها. فتحقق هل يشمل العلاج خارج بلدك أصلًا، وهل تُشترط موافقة مسبقة.',
            'أما تأمين السفر فيغطي عادةً المرض الطارئ أو الإصابة أثناء الرحلة، لا العلاج المخطَّط له الذي سافرتَ من أجله. وهذا من أكثر أسباب سوء الفهم.'
          ]
        },
        {
          heading: 'ما ينبغي طلبه منا',
          paragraphs: [
            'عرض سعر مكتوب ومفصَّل يُسمّي الإجراء المخطَّط له، لا رقمًا إجماليًا.',
            'بيان ما يشمله العرض وما لا يشمله، وخصوصًا في حال حدوث مضاعفة.',
            'وبعد العلاج: تقرير العملية، وتقرير علم الأنسجة عند الاقتضاء، وتقرير الخروج. فمن دون هذه الوثائق لا يُدرَس طلب التعويض عادةً.',
            'وأخبرنا مسبقًا بالصيغة أو اللغة التي تشترطها شركتك، لتُحرَّر الوثائق صحيحة من المرة الأولى.'
          ]
        },
        {
          heading: 'أسئلة لشركة التأمين',
          paragraphs: [
            'هل يشمل تأميني العلاج المخطَّط له خارج البلد في حالتي؟',
            'هل تلزم موافقة مسبقة، وكم تستغرق؟',
            'هل للتعويض سقف، وعلى أيّ أساس يُحتسب؟',
            'ما النفقات المستثناة — الإقامة والسفر والمرافق والمتابعة؟',
            'ماذا يحدث إن استدعت مضاعفةٌ علاجًا إضافيًا في الخارج؟',
            'واطلب الأجوبة كتابةً.'
          ]
        },
        {
          heading: 'حدود هذه الصفحة',
          paragraphs: [
            'ما ورد هنا معلومات عامة. وشروط الوثائق والأنظمة تتغير، والمُلزِم وحده هو الجواب الكتابي من شركة التأمين لديك.',
            'وهذه الصفحة لا تُغني عن الاستشارة الطبية. فالاستطباب يُحدَّد بعد الفحص.'
          ]
        }
      ]
    }
  }
};
