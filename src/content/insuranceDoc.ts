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
