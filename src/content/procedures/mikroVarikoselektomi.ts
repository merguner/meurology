import type { Treatment } from '../types';

/**
 * MİKROSKOPİK VARİKOSELEKTOMİ — yeni sayfa (Görev 7).
 *
 * reviewStatus: 'reviewed' — hekim onayı alındı (Dr. Ergün, 6 Ekim 2026).
 * Mevcut 'varikosel' sayfasıyla ÇAPRAZ BAĞLANTILIDIR: bu sayfa yöntemi,
 * diğeri hastalığı anlatır. topNote ile varikosel sayfasına yönlendirilir.
 * Kaynak: EAU Sexual and Reproductive Health kılavuzu.
 * Gebelik/başarı oranı YAZILMAMIŞTIR.
 */
export const mikroVarikoselektomi: Treatment = {
  slug: 'mikroskopik-varikoselektomi',
  procedure: { type: 'SurgicalProcedure', bodyLocation: 'Spermatic cord' },
  parent: 'androloji',
  icon: 'andrology',
  reviewStatus: 'reviewed',

  lastReviewed: '2026-10-06',
  offersConsultation: true,
  i18n: {
    tr: {
      title: 'Mikroskopik Varikoselektomi',
      summary:
        'Varikosel ameliyatının ameliyat mikroskobu altında yapılan biçimi: genişlemiş toplardamarlar tek tek ayrılır; atardamar ve lenf damarları korunur.',
      metaTitle: 'Mikroskopik Varikoselektomi: Subinguinal Mikrocerrahi Yöntem',
      metaDescription:
        'Mikroskopik varikoselektomi: kimlere uygun, laparoskopik ve klasik yöntemden farkı, nüks ve hidrosel riski, iyileşme süreci ve dürüst beklentiler.',
      topNote: {
        body: 'Bu sayfa AMELİYAT YÖNTEMİNİ anlatır. Varikoselin kendisi, kimde tedavi gerektiği ve ameliyatsız seçenekler ayrı sayfada ele alınmıştır.',
        linkSlug: 'varikosel',
        linkLabel: 'Varikosel sayfasına gidin'
      },
      quickFacts: {
        duration: '45–90 dakika (tek taraf)',
        anesthesia: 'Lokal + sedasyon, spinal veya genel',
        hospitalStay: 'Günübirlik',
        stayInTurkey: '5–7 gün',
        catheter: 'Gerekmez',
        returnToWork: '3–7 gün (masa başı), 2–3 hafta (ağır iş)',
        flightClearance: 'Kontrol muayenesinden sonra'
      },
      definition: [
        'Varikosel, testisten dönen toplardamarların genişlemesidir. Çoğunlukla sol tarafta görülür ve birçok erkekte hiçbir şikâyet yaratmaz. Şikâyet yaratan veya sperm değerlerini etkileyen olgularda cerrahi gündeme gelir.',
        'MİKROSKOPİK VARİKOSELEKTOMİ, ameliyat mikroskobu altında yapılan varikosel ameliyatıdır. Kasık kıvrımının hemen altından (subinguinal) yaklaşık 2–3 cm’lik bir kesi yapılır; spermatik kordon mikroskop altında açılır ve içindeki yapılar tek tek ayırt edilir. Genişlemiş toplardamarlar bağlanırken TESTİS ATARDAMARI ve LENF DAMARLARI korunur.',
        'BU KORUMANIN PRATİK ANLAMI ŞUDUR: testis atardamarının korunması testisin beslenmesini güvence altına alır; lenf damarlarının korunması ise ameliyat sonrası skrotumda sıvı birikmesi (hidrosel) olasılığını azaltır. Mikroskop kullanılmayan yöntemlerde bu yapılar çıplak gözle her zaman ayırt edilemez.',
        'AMELİYAT KARARI GÖRÜNTÜDEN DEĞİL, TABLODAN VERİLİR. Ultrasonda varikosel görülen ama ağrısı olmayan, sperm değerleri ve testis hacmi normal olan bir erkekte ameliyat önerilmez. Karar; elle muayenede varikoselin ele gelmesi, ağrı, sperm parametrelerinde bozulma, testis hacminde küçülme veya ergenlerde büyüme geriliği gibi somut bulgulara dayanır.',
        'DÜRÜST BİR BEKLENTİ CÜMLESİ: Ameliyatın amacı sperm parametrelerinde iyileşme şansı yaratmaktır; GEBELİK GARANTİSİ VERİLEMEZ. Kısırlık değerlendirmesi bir çiftin değerlendirmesidir — eşin durumu bilinmeden tek başına erkeğin ameliyat edilmesi doğru bir plan değildir. Bu nedenle eşin yaşı ve varsa jinekolojik değerlendirmesi de sorulur.',
        'SPERM DEĞERLERİNDEKİ DEĞİŞİM ZAMAN ALIR. Sperm üretimi yaklaşık üç aylık bir döngüdür; bu nedenle ameliyattan sonraki ilk kontrol spermiyogramı genellikle 3. ayda, ikincisi 6. ayda istenir. Bir ay sonra yapılan tahlil anlamlı değildir ve gereksiz hayal kırıklığı yaratır.',
        'AĞRI ŞİKÂYETİNDE BEKLENTİ FARKLIDIR. Varikosele bağlı olduğu düşünülen künt, gün sonunda artan ağrıda ameliyat fayda sağlayabilir; ancak her kasık ağrısı varikoselden değildir. Ağrının başka bir nedeni varsa (kasık fıtığı, kas-iskelet kaynaklı ağrı, kronik pelvik ağrı) ameliyat sonrası ağrı devam eder. Bu ayrım ameliyattan önce yapılır.'
      ],
      eligibility: {
        suitable: [
          'Elle muayenede ele gelen varikoseli olan ve sperm parametreleri bozuk olan erkekler',
          'Varikosele bağlı, gün içinde artan künt ağrısı olan ve ilaç/destek tedavisinden fayda görmeyen erkekler',
          'Ergenlerde varikosele eşlik eden testis hacim geriliği saptananlar',
          'Daha önce başka yöntemle ameliyat olmuş ve varikoseli tekrarlamış (nüks) erkekler',
          'Yardımcı üreme tedavisi öncesi sperm parametrelerinin iyileştirilmesi planlanan seçilmiş çiftler'
        ],
        notSuitable: [
          'Yalnızca ultrasonda görülen, elle muayenede ele gelmeyen ve şikâyet yaratmayan varikoseli olan erkekler',
          'Sperm değerleri ve testis hacmi normal, ağrısı olmayan erkekler — ameliyat önerilmez',
          'Ağrısının kaynağının varikosel olmadığı gösterilmiş erkekler',
          'Aktif skrotum veya idrar yolu enfeksiyonu olanlar: önce enfeksiyon tedavi edilir',
          'Eşin durumu hiç değerlendirilmemiş çiftler — plan çift üzerinden kurulur'
        ]
      },
      technology: [
        'Ameliyat mikroskobu — damar, atardamar ve lenf yapılarının ayırt edilmesi için',
        'Mikrocerrahi aletler ve ince dikiş materyali',
        'Ameliyat sırasında damar ayrımı için mikro-Doppler kullanımı (seçilmiş olgularda)',
        'Skrotal renkli Doppler ultrason ile varikoselin gösterilmesi ve testis hacminin ölçümü',
        'Spermiyogram (en az iki ayrı ölçüm) ve gerekli görülen olgularda hormon testleri',
        'Yüksek büyütmeli loop gözlük — kapanış aşaması için'
      ],
      surgeonExperience: {
        caseVolume: '',
        note: 'Mikroskopik varikoselektomi, mikrocerrahi beceri gerektiren bir ameliyattır: sonucu belirleyen, mikroskop altında atardamarın ve lenf damarlarının doğru ayırt edilmesidir. Doç. Dr. Müslüm Ergün’ün androloji ve mikrocerrahi alanındaki deneyimi bu yaklaşımın temelini oluşturur. Nüks eden olgularda ilk ameliyatın raporu planın en önemli parçasıdır.'
      },
      timeline: [
        { when: 'Uzaktan', title: 'Dosya değerlendirmesi', body: 'EN AZ İKİ spermiyogram sonucu, skrotal Doppler ultrason raporu, hormon tetkikleri (FSH, LH, total testosteron), varsa daha önceki ameliyat raporları ve eşinizin yaşı ile varsa jinekolojik değerlendirmesi incelenir. Tek spermiyogramla karar verilmez.' },
        { when: '1. Gün', title: 'Muayene ve testler', body: 'Ayakta ve yatarak yapılan muayene ile varikoselin ele gelip gelmediği ve derecesi belirlenir. Testis hacimleri ölçülür. Gerekirse tetkikler tekrarlanır.' },
        { when: '2. Gün', title: 'Ameliyat', body: 'Kasık kıvrımının hemen altından küçük bir kesiyle girilir; spermatik kordon mikroskop altında açılır. Genişlemiş toplardamarlar tek tek bağlanır; testis atardamarı ve lenf damarları korunur. Aynı gün evinize dönersiniz.' },
        { when: '3.–5. Gün', title: 'Kontrol', body: 'Yara yeri ve skrotum değerlendirilir. Dönüş uçuşu bu kontrolden sonraya planlanır.' },
        { when: '3. ay', title: 'İlk kontrol spermiyogramı', body: 'Sperm üretimi yaklaşık üç aylık bir döngü olduğu için ilk anlamlı tahlil bu tarihte yapılır. Daha erken yapılan tahlil yanıltıcıdır.' },
        { when: '6. ay', title: 'İkinci kontrol', body: 'Spermiyogram tekrarlanır ve eğilim değerlendirilir. Tek bir ölçüme değil, iki ölçümün yönüne bakılır.' }
      ],
      risks: [
        'HİDROSEL (SKROTUMDA SIVI BİRİKMESİ): Lenf damarlarının zedelenmesine bağlıdır. Mikroskopla çalışmanın başlıca gerekçesi bu riski azaltmaktır; yine de tamamen ortadan kalkmaz',
        'NÜKS (VARİKOSELİN TEKRARLAMASI): Gözden kaçan ince bir damar nedeniyle varikosel geri dönebilir ve ikinci bir işlem gerekebilir',
        'TESTİS ATARDAMARININ ZEDELENMESİ: Nadirdir ve mikroskop kullanımıyla olasılığı azalır; gerçekleşirse testis beslenmesi etkilenebilir',
        'Yara yeri enfeksiyonu, skrotumda şişlik ve morarma',
        'Kasıkta geçici uyuşukluk veya his değişikliği',
        'SPERM DEĞERLERİNDE İYİLEŞME OLMAMASI: Ameliyat bir şans yaratır, sonuç garanti etmez. Bazı erkeklerde parametreler değişmez',
        'GEBELİK OLUŞMAMASI: Sperm değerleri düzelse bile gebelik birçok etkene bağlıdır; bu, ameliyatın başarısızlığı anlamına gelmez',
        'Ağrının devam etmesi — ağrının kaynağı varikosel değilse'
      ],
      alternatives: [
        'İzlem — ele gelmeyen, şikâyet yaratmayan ve sperm değerleri normal olan erkeklerde doğru seçenektir',
        'Ağrı için destekleyici önlemler — destekli iç çamaşırı, uzun süre ayakta kalmaktan kaçınma, basit ağrı kesiciler',
        'Yaşam tarzı düzenlemesi — sigaranın bırakılması, kilo yönetimi, aşırı ısıdan kaçınma; sperm sağlığını etkileyen etkenler',
        'Laparoskopik varikoselektomi — karından girilerek damarların yukarıdan bağlanması',
        'Açık (inguinal veya retroperitoneal) varikoselektomi — mikroskop kullanılmayan klasik yöntemler',
        'Perkütan embolizasyon — girişimsel radyoloji yöntemiyle damarların kapatılması; kesi yapılmaz',
        'Doğrudan yardımcı üreme tedavisine geçiş — eşin yaşı ve diğer etkenler nedeniyle zaman öncelikliyse'
      ],
      comparison: {
        title: 'Mikroskopik, laparoskopik ve embolizasyon: ne değişiyor',
        columns: ['Ölçüt', 'Mikroskopik (subinguinal)', 'Laparoskopik', 'Embolizasyon'],
        rows: [
          { label: 'Büyütme kullanımı', values: ['Ameliyat mikroskobu', 'Kamera büyütmesi', 'Görüntüleme eşliğinde'] },
          { label: 'Atardamarın korunması', values: ['Hedeflenir ve ayırt edilir', 'Daha zordur', 'Doğrudan hedef değil'] },
          { label: 'Lenf damarlarının korunması', values: ['Hedeflenir', 'Daha zordur', 'İlgili değil'] },
          { label: 'Hidrosel olasılığı', values: ['Daha düşük', 'Görece daha yüksek', 'Beklenmez'] },
          { label: 'Kesi', values: ['Kasık altında 2–3 cm', 'Karında üç küçük delik', 'Kesi yok'] },
          { label: 'Anestezi', values: ['Lokal+sedasyon, spinal veya genel', 'Genel', 'Lokal'] },
          { label: 'İki taraflı uygulama', values: ['İki ayrı kesi gerekir', 'Tek seansta kolaydır', 'Tek seansta mümkündür'] },
          { label: 'Nüks olasılığı', values: ['Daha düşük', 'Orta', 'Teknik ve anatomiye bağlı'] }
        ],
        note: 'Bu tablo bir üstünlük sıralaması değil, bir denge tablosudur. İki taraflı varikoselde laparoskopik yöntem pratik bir avantaj sunabilir; hidrosel ve nüksten kaçınmak öncelikliyse mikroskobik yöntem öne çıkar; kesi istemeyen bir hasta için embolizasyon gündeme gelir. Önceliğinizi söyleyin.'
      },
      recovery: [
        { period: 'İlk 48 saat', body: 'Skrotumda şişlik ve kasıkta gerginlik olağandır. Destekli iç çamaşırı ve soğuk uygulama rahatlatır. Ateş, yara yerinden akıntı veya belirgin şişlik artışı durumunda derhal başvurulmalıdır.' },
        { period: '1. hafta', body: 'Yürüyüş serbesttir. Ağır kaldırmaktan, ıkınmaktan ve uzun süre ayakta kalmaktan kaçınılır. Masa başı işe dönüş genellikle birkaç gün içindedir.' },
        { period: '2.–3. hafta', body: 'Cinsel yaşama ve hafif spora dönüş genellikle bu dönemde konuşulur. Ağır kaldırma gerektiren işlerde bekleme süresi daha uzundur.' },
        { period: '3. ay', body: 'İlk anlamlı kontrol spermiyogramı yapılır. Bundan önce yapılan tahlil, sperm üretim döngüsü nedeniyle yanıltıcıdır.' },
        { period: '6. ay', body: 'İkinci spermiyogram ile eğilim değerlendirilir. Gerekirse çift olarak bir sonraki adım (yardımcı üreme tedavisi) planlanır.' },
        { period: 'Uzun dönem', body: 'Ağrı şikâyeti için ameliyat olduysanız, ağrının seyri ayrıca takip edilir. Nüks şüphesinde muayene ve Doppler ultrason tekrarlanır.' }
      ],
      price: {
        from: 0,
        to: 0,
        currency: 'EUR',
        disclaimer:
          'Tutar; tek taraflı mı iki taraflı mı yapıldığına, anestezi tipine ve ek tetkiklere göre değişir. Kontrol spermiyogramları ayrı değerlendirilir. Kalem kalem ayrılmış yazılı teklif, dosyanız incelendikten sonra verilir.'
      },
      packageIncludes: [
        'Muayene ve androloji değerlendirmesi',
        'Skrotal Doppler ultrason ve testis hacim ölçümü',
        'Spermiyogram ve gerekli görülen hormon tetkikleri',
        'Kan ve idrar tetkikleri',
        'Anestezi ve ameliyathane',
        'Mikrocerrahi sarf malzemeleri',
        'Günübirlik takip',
        'Dönüş öncesi kontrol muayenesi',
        'Havalimanı–hastane–otel transferleri',
        'Konaklama (hasta + 1 refakatçi)',
        'Tıbbi tercüman ve hasta koordinatörü',
        'Dönüşten sonra uzaktan takip ve kontrol spermiyogramlarının yorumlanması'
      ],
      faqs: [
        { q: 'Ameliyat olursam çocuğum olur mu?', a: 'Ameliyatın amacı sperm parametrelerinde iyileşme şansı yaratmaktır; gebelik garanti edilemez. Kısırlık bir çiftin değerlendirmesidir: eşinizin durumu bilinmeden tek başına sizin ameliyat edilmeniz doğru bir plan değildir. Size bunu söylemeyen bir yerden ikinci görüş isteyin.' },
        { q: 'Neden mikroskop kullanılıyor?', a: 'Spermatik kordon içinde toplardamarlar, testis atardamarı ve lenf damarları iç içedir. Mikroskop altında bunlar ayırt edilebilir; atardamarın korunması testisin beslenmesini, lenf damarlarının korunması ise ameliyat sonrası hidrosel olasılığının azalmasını sağlar.' },
        { q: 'Ultrasonda varikosel görüldü ama hiçbir şikâyetim yok, ameliyat olmalı mıyım?', a: 'Hayır. Yalnızca ultrasonda görülen, elle muayenede ele gelmeyen ve şikâyet yaratmayan varikoselde ameliyat önerilmez. Karar görüntüye değil, somut bulgulara dayanır.' },
        { q: 'Sperm değerlerim ne zaman düzelir?', a: 'Sperm üretimi yaklaşık üç aylık bir döngüdür. İlk anlamlı kontrol tahlili 3. ayda, ikincisi 6. ayda yapılır. Bir ay sonra yapılan tahlil anlamlı değildir ve gereksiz hayal kırıklığı yaratır.' },
        { q: 'Ağrım geçecek mi?', a: 'Varikosele bağlı olduğu düşünülen künt, gün sonunda artan ağrıda fayda beklenir. Ancak her kasık ağrısı varikoselden değildir; başka bir neden varsa ağrı ameliyattan sonra devam eder. Bu ayrım ameliyattan önce yapılır.' },
        { q: 'İki taraflı varikoselim var, tek seansta yapılabilir mi?', a: 'Evet, iki taraf aynı seansta yapılabilir; mikroskopik yöntemde her iki taraf için ayrı birer küçük kesi kullanılır. İyileşme süresi biraz uzayabilir.' },
        { q: 'Nüks eder mi?', a: 'Gözden kaçan ince bir damar nedeniyle varikosel geri dönebilir. Mikroskopla çalışmanın bir amacı da bu olasılığı azaltmaktır. Nüks şüphesinde muayene ve Doppler ultrason tekrarlanır.' },
        { q: 'Daha önce ameliyat oldum, tekrar yapılabilir mi?', a: 'Evet. Nüks olgularında mikroskopik yöntem özellikle tercih edilir, çünkü önceki ameliyata bağlı yapışıklıkların arasında damarları ayırt etmek çıplak gözle zordur. ÖNCEKİ AMELİYAT RAPORUNUZU mutlaka gönderin.' },
        { q: 'Ne zaman cinsel yaşama dönebilirim?', a: 'Genellikle 2–3 hafta sonra ve kontrol muayenesinden sonra konuşulur. Erken dönemde ağrı ve şişlik rahatsızlık verebilir.' },
        { q: 'Türkiye’de ne kadar kalmalıyım?', a: 'Genellikle 5–7 gün. Kontrol muayenesi burada yapıldığı için dönüş uçuşunu bu muayeneden sonraya planlayın. Kontrol spermiyogramları ülkenizde yapılıp bize iletilebilir.' },
        { q: 'Hangi belgeleri göndermeliyim?', a: 'EN AZ İKİ spermiyogram sonucu (tarihleriyle), skrotal Doppler ultrason raporu, hormon tetkikleri (FSH, LH, total testosteron), varsa önceki ameliyat raporları, eşinizin yaşı ve varsa jinekolojik değerlendirmesi. Tek spermiyogramla sağlıklı bir plan yapılamaz.' }
      ],
      sources: [
        {
          label: 'EAU Guidelines on Sexual and Reproductive Health — Avrupa Üroloji Derneği',
          url: 'https://uroweb.org/guidelines/sexual-and-reproductive-health'
        }
      ]
    },
    en: {
      title: 'Microsurgical Varicocelectomy',
      summary:
        'Varicocele surgery performed under the operating microscope: the dilated veins are separated one by one, while the testicular artery and the lymphatic vessels are preserved.',
      metaTitle: 'Microsurgical Varicocelectomy: The Subinguinal Microsurgical Technique',
      metaDescription:
        'Microsurgical varicocelectomy: who it suits, how it differs from laparoscopic and conventional surgery, the risk of recurrence and hydrocele, recovery and honest expectations.',
      topNote: {
        body: 'This page describes the OPERATION. Varicocele itself, who needs treatment and the non-surgical options are covered on a separate page.',
        linkSlug: 'varikosel',
        linkLabel: 'Go to the varicocele page'
      },
      quickFacts: {
        duration: '45–90 minutes (one side)',
        anesthesia: 'Local with sedation, spinal or general',
        hospitalStay: 'Day case',
        stayInTurkey: '5–7 days',
        catheter: 'Not needed',
        returnToWork: '3–7 days (desk work), 2–3 weeks (heavy work)',
        flightClearance: 'After the review appointment'
      },
      definition: [
        'A varicocele is dilatation of the veins draining the testis. It is most often on the left and causes no symptoms at all in many men. Surgery comes into consideration where it causes symptoms or affects semen parameters.',
        'MICROSURGICAL VARICOCELECTOMY is varicocele surgery carried out under the operating microscope. An incision of about 2–3 cm is made just below the groin crease (subinguinal); the spermatic cord is opened under magnification and the structures within it identified one by one. The dilated veins are ligated while the TESTICULAR ARTERY and the LYMPHATIC VESSELS are preserved.',
        'THE PRACTICAL MEANING OF THAT PRESERVATION: keeping the testicular artery safeguards the blood supply to the testis; keeping the lymphatics reduces the chance of fluid collecting in the scrotum afterwards (a hydrocele). Without a microscope these structures cannot always be told apart with the naked eye.',
        'THE DECISION TO OPERATE COMES FROM THE CLINICAL PICTURE, NOT THE SCAN. In a man whose varicocele is seen on ultrasound but who has no pain and whose semen parameters and testicular volume are normal, surgery is not advised. The decision rests on concrete findings: a varicocele palpable on examination, pain, impaired semen parameters, reduced testicular volume, or growth delay of the testis in an adolescent.',
        'AN HONEST STATEMENT OF EXPECTATION: the aim of surgery is to create a chance of improvement in semen parameters; PREGNANCY CANNOT BE GUARANTEED. Assessment of infertility is the assessment of a couple — operating on the man alone, without knowing the partner’s situation, is not a sound plan. We therefore also ask about your partner’s age and any gynaecological assessment.',
        'CHANGES IN SEMEN PARAMETERS TAKE TIME. Sperm production runs on a cycle of about three months, so the first follow-up semen analysis is usually requested at three months and the second at six. An analysis done a month later means nothing and causes needless disappointment.',
        'WHERE PAIN IS THE PROBLEM, EXPECTATIONS DIFFER. Surgery can help a dull ache attributed to the varicocele that worsens through the day; but not every groin pain comes from a varicocele. If the pain has another cause (an inguinal hernia, musculoskeletal pain, chronic pelvic pain) it will continue after surgery. That distinction is made beforehand.'
      ],
      eligibility: {
        suitable: [
          'Men with a varicocele palpable on examination and impaired semen parameters',
          'Men with a dull ache attributed to the varicocele that worsens through the day and does not respond to supportive measures',
          'Adolescents with a varicocele and reduced testicular volume on the affected side',
          'Men whose varicocele has recurred after surgery by another technique',
          'Selected couples in whom improving semen parameters before assisted reproduction is planned'
        ],
        notSuitable: [
          'Men whose varicocele is seen only on ultrasound, is not palpable and causes no symptoms',
          'Men with normal semen parameters and testicular volume and no pain — surgery is not advised',
          'Men in whom the pain has been shown not to arise from the varicocele',
          'Men with active scrotal or urinary infection: the infection is treated first',
          'Couples in whom the partner has not been assessed at all — the plan is built around the couple'
        ]
      },
      technology: [
        'Operating microscope — to distinguish veins, artery and lymphatic vessels',
        'Microsurgical instruments and fine suture material',
        'Intraoperative micro-Doppler to identify the artery (in selected cases)',
        'Scrotal colour Doppler ultrasound to demonstrate the varicocele and measure testicular volume',
        'Semen analysis (at least two separate samples) and hormone tests where indicated',
        'High-magnification loupes for the closure'
      ],
      surgeonExperience: {
        caseVolume: '',
        note: 'Microsurgical varicocelectomy is an operation requiring microsurgical skill: the result is determined by correctly identifying the artery and the lymphatics under magnification. Assoc. Prof. Dr. Müslüm Ergün’s experience in andrology and microsurgery underpins this approach. In recurrent cases, the note from the first operation is the most important part of the plan.'
      },
      timeline: [
        { when: 'Remotely', title: 'Review of your file', body: 'AT LEAST TWO semen analyses, the scrotal Doppler report, hormone tests (FSH, LH, total testosterone), any previous operation notes, and your partner’s age and any gynaecological assessment are reviewed. A decision is not made on a single semen analysis.' },
        { when: 'Day 1', title: 'Examination and tests', body: 'Examination standing and lying establishes whether the varicocele is palpable and its grade. Testicular volumes are measured. Tests are repeated where needed.' },
        { when: 'Day 2', title: 'Surgery', body: 'A small incision is made just below the groin crease and the spermatic cord opened under the microscope. The dilated veins are ligated one by one while the testicular artery and lymphatics are preserved. You go home the same day.' },
        { when: 'Days 3–5', title: 'Review', body: 'The wound and the scrotum are assessed. The return flight is planned for after this review.' },
        { when: 'Month 3', title: 'First follow-up semen analysis', body: 'Because sperm production runs on a cycle of about three months, the first meaningful analysis is done at this point. An earlier one is misleading.' },
        { when: 'Month 6', title: 'Second review', body: 'The semen analysis is repeated and the trend assessed. We look at the direction of two measurements, not at a single value.' }
      ],
      risks: [
        'HYDROCELE (FLUID COLLECTING IN THE SCROTUM): caused by damage to the lymphatics. Reducing this risk is the main reason for working under the microscope; it is not eliminated entirely',
        'RECURRENCE: the varicocele can return because a small vein was missed, and a second procedure may be needed',
        'INJURY TO THE TESTICULAR ARTERY: uncommon, and less likely with the microscope; if it occurs the blood supply to the testis can be affected',
        'Wound infection, scrotal swelling and bruising',
        'Temporary numbness or altered sensation in the groin',
        'NO IMPROVEMENT IN SEMEN PARAMETERS: surgery creates a chance, it does not guarantee a result. In some men the parameters do not change',
        'PREGNANCY NOT OCCURRING: even where semen parameters improve, pregnancy depends on many factors; that does not mean the operation failed',
        'Persisting pain — where the pain did not arise from the varicocele'
      ],
      alternatives: [
        'Observation — the right option in men whose varicocele is not palpable, causes no symptoms and whose semen parameters are normal',
        'Supportive measures for pain — supportive underwear, avoiding long periods standing, simple analgesics',
        'Lifestyle measures — stopping smoking, weight management, avoiding excessive heat; factors affecting sperm health',
        'Laparoscopic varicocelectomy — ligating the veins higher up through the abdomen',
        'Open (inguinal or retroperitoneal) varicocelectomy — conventional techniques without the microscope',
        'Percutaneous embolisation — closing the veins by interventional radiology, with no incision',
        'Proceeding directly to assisted reproduction — where time is the priority because of the partner’s age or other factors'
      ],
      comparison: {
        title: 'Microsurgical, laparoscopic and embolisation: what changes',
        columns: ['Criterion', 'Microsurgical (subinguinal)', 'Laparoscopic', 'Embolisation'],
        rows: [
          { label: 'Magnification used', values: ['Operating microscope', 'Camera magnification', 'Imaging guidance'] },
          { label: 'Preserving the artery', values: ['Aimed for and identified', 'Harder', 'Not a direct aim'] },
          { label: 'Preserving the lymphatics', values: ['Aimed for', 'Harder', 'Not relevant'] },
          { label: 'Chance of hydrocele', values: ['Lower', 'Relatively higher', 'Not expected'] },
          { label: 'Incision', values: ['2–3 cm below the groin', 'Three small abdominal ports', 'None'] },
          { label: 'Anaesthesia', values: ['Local with sedation, spinal or general', 'General', 'Local'] },
          { label: 'Treating both sides', values: ['Two separate incisions', 'Easy in one sitting', 'Possible in one sitting'] },
          { label: 'Chance of recurrence', values: ['Lower', 'Intermediate', 'Depends on technique and anatomy'] }
        ],
        note: 'This table is not a ranking but a balance sheet. In bilateral varicocele the laparoscopic route can offer a practical advantage; where avoiding hydrocele and recurrence is the priority, the microsurgical route comes to the fore; for a man who does not want an incision, embolisation enters the picture. Tell us your priority.'
      },
      recovery: [
        { period: 'First 48 hours', body: 'Scrotal swelling and tightness in the groin are usual. Supportive underwear and cold packs help. Fever, discharge from the wound or marked increase in swelling require immediate contact.' },
        { period: 'Week 1', body: 'Walking is free. Lifting, straining and long periods standing are avoided. Return to desk work is usually within a few days.' },
        { period: 'Weeks 2–3', body: 'Return to sexual activity and light sport is usually discussed in this period. For jobs involving heavy lifting the wait is longer.' },
        { period: 'Month 3', body: 'The first meaningful follow-up semen analysis is performed. An earlier one is misleading because of the cycle of sperm production.' },
        { period: 'Month 6', body: 'A second semen analysis establishes the trend. If needed, the next step is planned with you as a couple.' },
        { period: 'Long term', body: 'If you were operated on for pain, the course of the pain is followed separately. Where recurrence is suspected, examination and Doppler ultrasound are repeated.' }
      ],
      price: {
        from: 0,
        to: 0,
        currency: 'EUR',
        disclaimer:
          'The amount depends on whether one or both sides are treated, the type of anaesthesia and any additional tests. Follow-up semen analyses are assessed separately. An itemised written quotation is given once your file has been reviewed.'
      },
      packageIncludes: [
        'Examination and andrology assessment',
        'Scrotal Doppler ultrasound and measurement of testicular volume',
        'Semen analysis and hormone tests where indicated',
        'Blood and urine tests',
        'Anaesthesia and operating theatre',
        'Microsurgical consumables',
        'Day-case follow-up',
        'Review appointment before you travel home',
        'Airport–hospital–hotel transfers',
        'Accommodation (patient plus one companion)',
        'Medical interpreter and patient coordinator',
        'Remote follow-up and interpretation of your follow-up semen analyses'
      ],
      faqs: [
        { q: 'If I have the operation, will we have a child?', a: 'The aim of surgery is to create a chance of improvement in semen parameters; pregnancy cannot be guaranteed. Infertility is assessed as a couple: operating on you alone, without knowing your partner’s situation, is not a sound plan. If a centre does not tell you this, seek a second opinion.' },
        { q: 'Why is a microscope used?', a: 'Within the spermatic cord the veins, the testicular artery and the lymphatics lie intertwined. Under magnification they can be told apart; preserving the artery safeguards the blood supply to the testis, and preserving the lymphatics lowers the chance of a hydrocele afterwards.' },
        { q: 'A varicocele was seen on ultrasound but I have no symptoms — should I be operated on?', a: 'No. Surgery is not advised for a varicocele seen only on ultrasound, not palpable, and causing no symptoms. The decision rests on concrete findings, not on the scan.' },
        { q: 'When will my semen parameters improve?', a: 'Sperm production runs on a cycle of about three months. The first meaningful analysis is at three months and the second at six. An analysis done a month later means nothing and causes needless disappointment.' },
        { q: 'Will my pain go?', a: 'Benefit is expected for a dull ache attributed to the varicocele that worsens through the day. But not every groin pain comes from a varicocele; if there is another cause, the pain will continue after surgery. That distinction is made beforehand.' },
        { q: 'I have a varicocele on both sides — can it be done in one sitting?', a: 'Yes, both sides can be treated in the same sitting; in the microsurgical technique a separate small incision is used for each side. Recovery may take a little longer.' },
        { q: 'Can it come back?', a: 'The varicocele can return because a small vein was missed. Reducing that chance is one of the purposes of working under the microscope. Where recurrence is suspected, examination and Doppler ultrasound are repeated.' },
        { q: 'I have been operated on before — can it be done again?', a: 'Yes. The microsurgical route is particularly favoured in recurrent cases, because identifying vessels among adhesions from a previous operation is hard with the naked eye. Please send YOUR PREVIOUS OPERATION NOTE.' },
        { q: 'When can I resume sexual activity?', a: 'Usually discussed after 2–3 weeks and after the review appointment. Pain and swelling can be uncomfortable earlier on.' },
        { q: 'How long should I stay in Türkiye?', a: 'Usually 5–7 days. Because the review is carried out here, plan your return flight for after that appointment. Follow-up semen analyses can be done at home and sent to us.' },
        { q: 'What documents should I send?', a: 'AT LEAST TWO semen analyses with their dates, the scrotal Doppler report, hormone tests (FSH, LH, total testosterone), any previous operation notes, and your partner’s age and any gynaecological assessment. A sound plan cannot be made on a single semen analysis.' }
      ],
      sources: [
        {
          label: 'EAU Guidelines on Sexual and Reproductive Health — European Association of Urology',
          url: 'https://uroweb.org/guidelines/sexual-and-reproductive-health'
        }
      ]
    },
    ar: {
      title: 'استئصال دوالي الخصية بالجراحة المجهرية',
      summary:
        'عملية دوالي الخصية تحت المجهر الجراحي: تُفصَل الأوردة المتوسعة واحدًا واحدًا مع الحفاظ على شريان الخصية والأوعية اللمفية.',
      metaTitle: 'استئصال الدوالي بالجراحة المجهرية: التقنية تحت المغبن',
      metaDescription:
        'استئصال دوالي الخصية بالجراحة المجهرية: لمن يصلح، وما الفرق عن المنظار والجراحة التقليدية، وخطر النكس والقيلة المائية، والتعافي وتوقعات صادقة.',
      topNote: {
        body: 'تشرح هذه الصفحة طريقة العملية. أما الدوالي نفسها ومن يحتاج العلاج والخيارات غير الجراحية فتُعالَج في صفحة مستقلة.',
        linkSlug: 'varikosel',
        linkLabel: 'انتقل إلى صفحة دوالي الخصية'
      },
      quickFacts: {
        duration: '45 إلى 90 دقيقة (جهة واحدة)',
        anesthesia: 'موضعي مع تركين أو نصفي أو عام',
        hospitalStay: 'من دون مبيت',
        stayInTurkey: '5 إلى 7 أيام',
        catheter: 'لا تلزم',
        returnToWork: 'من 3 إلى 7 أيام (عمل مكتبي)، أسبوعان إلى ثلاثة (عمل شاق)',
        flightClearance: 'بعد مراجعة المتابعة'
      },
      definition: [
        'دوالي الخصية توسّع في الأوردة التي تصرّف الدم من الخصية. وتكون في الجهة اليسرى غالبًا ولا تسبب عند كثير من الرجال أي شكوى. وتُطرَح الجراحة حين تسبب شكوى أو تؤثر في مؤشرات السائل المنوي.',
        'واستئصال الدوالي بالجراحة المجهرية هو العملية نفسها تحت المجهر الجراحي. يُجرى شق نحو 2 إلى 3 سم تحت ثنية المغبن مباشرة؛ ويُفتَح الحبل المنوي تحت التكبير وتُميَّز البُنى داخله واحدة واحدة. وتُربَط الأوردة المتوسعة مع الحفاظ على شريان الخصية والأوعية اللمفية.',
        'ومعنى هذا الحفاظ عمليًا: الحفاظ على شريان الخصية يؤمّن تروية الخصية؛ والحفاظ على الأوعية اللمفية يقلل احتمال تجمّع سائل في كيس الصفن بعد العملية (القيلة المائية). ومن دون مجهر لا يمكن دائمًا تمييز هذه البُنى بالعين المجردة.',
        'وقرار الجراحة يأتي من الصورة السريرية لا من التصوير. فالرجل الذي تُرى دواليه بالموجات من دون ألم ومع مؤشرات منوية وحجم خصية طبيعيين لا تُقترَح له الجراحة. ويستند القرار إلى معطيات ملموسة: دوالي مجسوسة، أو ألم، أو تدهور في مؤشرات السائل المنوي، أو نقص حجم الخصية، أو تأخر نمو الخصية عند المراهقين.',
        'وعبارة توقع صادقة: هدف العملية إتاحة فرصة لتحسن مؤشرات السائل المنوي؛ ولا يمكن ضمان حدوث حمل. فالعقم يُقيَّم بوصفه مسألة زوجين — وإجراء العملية للرجل وحده من دون معرفة حالة الزوجة ليس خطة سليمة. ولهذا نسأل أيضًا عن عمر الزوجة وعن تقييمها النسائي إن وُجد.',
        'وتغيّر مؤشرات السائل المنوي يحتاج وقتًا. فإنتاج الحيوانات المنوية دورة نحو ثلاثة أشهر؛ ولذلك يُطلَب أول تحليل مراجعة بعد ثلاثة أشهر والثاني بعد ستة. أما التحليل بعد شهر فلا معنى له ولا يصنع إلا خيبة لا داعي لها.',
        'وفي شكوى الألم تختلف التوقعات. فالألم الكليل الذي يُنسَب إلى الدوالي ويزداد مع آخر النهار قد يستفيد من العملية؛ لكن ليس كل ألم في المغبن من الدوالي. فإن كان للألم سبب آخر (فتق إربي أو ألم عضلي هيكلي أو ألم حوضي مزمن) بقي بعد العملية. ويُجرى هذا التمييز مسبقًا.'
      ],
      eligibility: {
        suitable: [
          'الرجال ذوو الدوالي المجسوسة ومؤشرات السائل المنوي المتدهورة',
          'الرجال ذوو ألم كليل يُنسَب إلى الدوالي يزداد خلال النهار ولا يستجيب للتدابير الداعمة',
          'المراهقون ذوو دوالي ونقص في حجم الخصية في الجهة المصابة',
          'الرجال الذين نكست دواليهم بعد عملية بطريقة أخرى',
          'الأزواج المختارون الذين يُخطَّط لتحسين مؤشرات السائل المنوي قبل الإخصاب المساعد'
        ],
        notSuitable: [
          'الرجال الذين تُرى دواليهم بالموجات فقط ولا تُجَس ولا تسبب شكوى',
          'الرجال ذوو مؤشرات منوية وحجم خصية طبيعيين من دون ألم — لا تُقترَح الجراحة',
          'الرجال الذين ثبت أن ألمهم لا ينشأ من الدوالي',
          'المصابون بالتهاب نشط في الصفن أو المسالك: يُعالَج الالتهاب أولًا',
          'الأزواج الذين لم تُقيَّم الزوجة عندهم إطلاقًا — فالخطة تُبنى للزوجين معًا'
        ]
      },
      technology: [
        'المجهر الجراحي — لتمييز الأوردة والشريان والأوعية اللمفية',
        'أدوات الجراحة المجهرية وخيوط رفيعة',
        'جهاز دوبلر مجهري أثناء العملية لتحديد الشريان (في حالات مختارة)',
        'دوبلر ملوّن للصفن لإظهار الدوالي وقياس حجم الخصية',
        'تحليل السائل المنوي (عيّنتان منفصلتان على الأقل) وفحوص هرمونية عند الحاجة',
        'نظارات مكبّرة عالية التكبير لمرحلة الإغلاق'
      ],
      surgeonExperience: {
        caseVolume: '',
        note: 'يحتاج استئصال الدوالي بالجراحة المجهرية مهارة في الجراحة المجهرية: فالنتيجة تتحدد بصحة تمييز الشريان والأوعية اللمفية تحت التكبير. وخبرة الأستاذ المشارك د. مسلم إرغن في الذكورة والجراحة المجهرية أساس هذا المنهج. وفي حالات النكس يكون تقرير العملية الأولى أهم جزء في الخطة.'
      },
      timeline: [
        { when: 'عن بُعد', title: 'تقييم الملف', body: 'يُراجَع تحليلان للسائل المنوي على الأقل، وتقرير دوبلر الصفن، والفحوص الهرمونية (FSH وLH والتستوستيرون الكلي)، وتقارير أي عمليات سابقة، وعمر زوجتك وتقييمها النسائي إن وُجد. ولا يُتخذ القرار بتحليل واحد.' },
        { when: 'اليوم الأول', title: 'الفحص والاختبارات', body: 'يحدد الفحص وقوفًا واستلقاءً هل الدوالي مجسوسة ودرجتها. وتُقاس أحجام الخصيتين. وتُعاد الفحوص عند الحاجة.' },
        { when: 'اليوم الثاني', title: 'العملية', body: 'يُفتَح الحبل المنوي تحت المجهر عبر شق صغير تحت ثنية المغبن مباشرة. وتُربَط الأوردة المتوسعة واحدًا واحدًا مع الحفاظ على شريان الخصية والأوعية اللمفية. وتعود إلى بيتك في اليوم نفسه.' },
        { when: 'اليوم الثالث إلى الخامس', title: 'المراجعة', body: 'يُقيَّم الجرح وكيس الصفن. وتُخطَّط رحلة العودة بعد هذه المراجعة.' },
        { when: 'الشهر الثالث', title: 'أول تحليل مراجعة للسائل المنوي', body: 'لأن إنتاج الحيوانات المنوية دورة نحو ثلاثة أشهر يُجرى أول تحليل ذي معنى في هذا الموعد. وما قبله مُضلِّل.' },
        { when: 'الشهر السادس', title: 'المراجعة الثانية', body: 'يُعاد التحليل ويُقيَّم الاتجاه. ويُنظَر إلى اتجاه قياسين لا إلى قيمة مفردة.' }
      ],
      risks: [
        'القيلة المائية (تجمّع سائل في كيس الصفن): سببها أذيّة الأوعية اللمفية. وتقليل هذا الخطر هو السبب الرئيس للعمل تحت المجهر؛ لكنه لا ينعدم',
        'النكس: قد تعود الدوالي بسبب وريد دقيق فات، وقد يلزم إجراء ثانٍ',
        'أذيّة شريان الخصية: غير شائعة وأقل احتمالًا مع المجهر؛ وإن حدثت فقد تتأثر تروية الخصية',
        'التهاب الجرح وتورّم وكدمات في كيس الصفن',
        'خدر مؤقت أو تغيّر في الإحساس في المغبن',
        'عدم تحسن مؤشرات السائل المنوي: العملية تتيح فرصة ولا تضمن نتيجة. وعند بعض الرجال لا تتغير المؤشرات',
        'عدم حدوث حمل: حتى مع تحسن المؤشرات يعتمد الحمل على عوامل كثيرة؛ وهذا لا يعني فشل العملية',
        'استمرار الألم — إن لم يكن مصدره الدوالي'
      ],
      alternatives: [
        'المراقبة — الخيار الصحيح عند من دواليه غير مجسوسة ولا تسبب شكوى ومؤشراته المنوية طبيعية',
        'تدابير داعمة للألم — ملابس داخلية داعمة وتجنّب الوقوف الطويل ومسكنات بسيطة',
        'تعديل نمط الحياة — الإقلاع عن التدخين وضبط الوزن وتجنّب الحرارة الزائدة؛ وهي عوامل تؤثر في صحة الحيوانات المنوية',
        'استئصال الدوالي بالمنظار — ربط الأوردة من الأعلى عبر البطن',
        'الاستئصال المفتوح (إربي أو خلف الصفاق) — الطرق التقليدية من دون مجهر',
        'الإصمام عبر الجلد — إغلاق الأوردة بالأشعة التداخلية من دون شق',
        'الانتقال المباشر إلى الإخصاب المساعد — حين يكون الوقت أولوية بسبب عمر الزوجة أو عوامل أخرى'
      ],
      comparison: {
        title: 'المجهرية والمنظارية والإصمام: ما الذي يتغير',
        columns: ['المعيار', 'المجهرية (تحت المغبن)', 'بالمنظار', 'الإصمام'],
        rows: [
          { label: 'التكبير المستعمل', values: ['المجهر الجراحي', 'تكبير الكاميرا', 'بتوجيه التصوير'] },
          { label: 'الحفاظ على الشريان', values: ['هدف ويُميَّز', 'أصعب', 'ليس هدفًا مباشرًا'] },
          { label: 'الحفاظ على الأوعية اللمفية', values: ['هدف', 'أصعب', 'غير ذي صلة'] },
          { label: 'احتمال القيلة المائية', values: ['أقل', 'أعلى نسبيًا', 'غير متوقع'] },
          { label: 'الشق', values: ['2 إلى 3 سم تحت المغبن', 'ثلاثة منافذ صغيرة في البطن', 'لا يوجد'] },
          { label: 'التخدير', values: ['موضعي مع تركين أو نصفي أو عام', 'عام', 'موضعي'] },
          { label: 'المعالجة من الجهتين', values: ['يلزم شقان منفصلان', 'سهلة في جلسة واحدة', 'ممكنة في جلسة واحدة'] },
          { label: 'احتمال النكس', values: ['أقل', 'بينهما', 'بحسب التقنية والتشريح'] }
        ],
        note: 'هذا الجدول ليس ترتيبًا بل موازنة. ففي الدوالي من الجهتين قد يقدّم المنظار ميزة عملية؛ وإن كانت الأولوية تجنّب القيلة المائية والنكس تقدّمت الجراحة المجهرية؛ ومن لا يريد شقًا يُطرَح له الإصمام. فقل لنا أولويتك.'
      },
      recovery: [
        { period: 'أول 48 ساعة', body: 'تورّم كيس الصفن وشدّ في المغبن أمران معتادان. وتفيد الملابس الداخلية الداعمة والتبريد. أما الحمى أو إفراز من الجرح أو ازدياد واضح في التورّم فتستدعي تواصلًا فوريًا.' },
        { period: 'الأسبوع الأول', body: 'المشي حر. ويُتجنَّب الحمل والحزق والوقوف الطويل. والعودة إلى العمل المكتبي تكون غالبًا خلال أيام قليلة.' },
        { period: 'الأسبوع الثاني إلى الثالث', body: 'يُناقَش عادة في هذه المدة العود إلى الحياة الجنسية والرياضة الخفيفة. أما الأعمال الشاقة فانتظارها أطول.' },
        { period: 'الشهر الثالث', body: 'يُجرى أول تحليل مراجعة ذي معنى. وما قبله مُضلِّل بسبب دورة إنتاج الحيوانات المنوية.' },
        { period: 'الشهر السادس', body: 'يبيّن التحليل الثاني الاتجاه. وعند اللزوم تُخطَّط الخطوة التالية معكما بوصفكما زوجين.' },
        { period: 'على المدى البعيد', body: 'إن أُجريت العملية بسبب الألم فيُتابَع مسار الألم على حدة. وعند الاشتباه بالنكس يُعاد الفحص والدوبلر.' }
      ],
      price: {
        from: 0,
        to: 0,
        currency: 'EUR',
        disclaimer:
          'يتوقف المبلغ على كون العملية من جهة واحدة أو من جهتين، وعلى نوع التخدير، وعلى الفحوص الإضافية. وتُقيَّم تحاليل المراجعة على حدة. ويُقدَّم عرض مكتوب مفصّل بعد مراجعة ملفك.'
      },
      packageIncludes: [
        'الفحص والتقييم في طب الذكورة',
        'دوبلر الصفن وقياس حجم الخصيتين',
        'تحليل السائل المنوي والفحوص الهرمونية عند الحاجة',
        'تحاليل الدم والبول',
        'التخدير وغرفة العمليات',
        'مستلزمات الجراحة المجهرية',
        'متابعة من دون مبيت',
        'مراجعة قبل العودة',
        'التنقلات بين المطار والمستشفى والفندق',
        'الإقامة (المريض ومرافق واحد)',
        'مترجم طبي ومنسّق للمرضى',
        'متابعة عن بُعد وقراءة تحاليل المراجعة'
      ],
      faqs: [
        { q: 'إن أجريت العملية، هل نُرزَق بطفل؟', a: 'هدف العملية إتاحة فرصة لتحسن مؤشرات السائل المنوي؛ ولا يمكن ضمان الحمل. والعقم يُقيَّم بوصفه مسألة زوجين: وإجراء العملية لك وحدك من دون معرفة حالة زوجتك ليس خطة سليمة. فإن لم يقل لك المركز ذلك فاطلب رأيًا ثانيًا.' },
        { q: 'لماذا يُستعمَل المجهر؟', a: 'تتشابك داخل الحبل المنوي الأوردة وشريان الخصية والأوعية اللمفية. وتحت التكبير يمكن تمييزها؛ فالحفاظ على الشريان يؤمّن تروية الخصية، والحفاظ على الأوعية اللمفية يقلل احتمال القيلة المائية.' },
        { q: 'رأى التصوير دوالي لكن لا شكوى عندي، هل أُجري العملية؟', a: 'لا. فالدوالي التي تُرى بالموجات فقط ولا تُجَس ولا تسبب شكوى لا تُقترَح لها الجراحة. ويستند القرار إلى معطيات ملموسة لا إلى الصورة.' },
        { q: 'متى تتحسن مؤشراتي؟', a: 'إنتاج الحيوانات المنوية دورة نحو ثلاثة أشهر. فأول مراجعة ذات معنى بعد ثلاثة أشهر والثانية بعد ستة. أما التحليل بعد شهر فلا معنى له ولا يصنع إلا خيبة.' },
        { q: 'هل يزول ألمي؟', a: 'تُتوقَّع فائدة في الألم الكليل الذي يُنسَب إلى الدوالي ويزداد خلال النهار. لكن ليس كل ألم في المغبن من الدوالي؛ فإن كان له سبب آخر استمر بعد العملية. ويُجرى هذا التمييز مسبقًا.' },
        { q: 'لديّ دوالي في الجهتين، هل تُجرى في جلسة واحدة؟', a: 'نعم، يمكن معالجة الجهتين في الجلسة نفسها؛ وفي الطريقة المجهرية يُستعمَل شق صغير مستقل لكل جهة. وقد يطول التعافي قليلًا.' },
        { q: 'هل تعود الدوالي؟', a: 'قد تعود بسبب وريد دقيق فات. وتقليل هذا الاحتمال أحد أغراض العمل تحت المجهر. وعند الاشتباه يُعاد الفحص والدوبلر.' },
        { q: 'أُجريت لي عملية سابقًا، هل يمكن إعادتها؟', a: 'نعم. وتُفضَّل الطريقة المجهرية خصوصًا في النكس، لأن تمييز الأوعية بين الالتصاقات الناتجة عن العملية السابقة صعب بالعين المجردة. وأرسل بالتأكيد تقرير عمليتك السابقة.' },
        { q: 'متى أعود إلى الحياة الجنسية؟', a: 'يُناقَش ذلك عادة بعد أسبوعين إلى ثلاثة وبعد مراجعة المتابعة. وقد يزعج الألم والتورّم في وقت أبكر.' },
        { q: 'كم أبقى في تركيا؟', a: 'عادة من 5 إلى 7 أيام. ولأن المراجعة تتم هنا فخطّط رحلة العودة بعدها. ويمكن إجراء تحاليل المراجعة في بلدك وإرسالها إلينا.' },
        { q: 'ما الوثائق التي أرسلها؟', a: 'تحليلان للسائل المنوي على الأقل بتاريخيهما، وتقرير دوبلر الصفن، والفحوص الهرمونية (FSH وLH والتستوستيرون الكلي)، وتقارير العمليات السابقة، وعمر زوجتك وتقييمها النسائي إن وُجد. ولا تُبنى خطة سليمة على تحليل واحد.' }
      ],
      sources: [
        {
          label: 'إرشادات EAU حول الصحة الجنسية والإنجابية — الجمعية الأوروبية للمسالك البولية',
          url: 'https://uroweb.org/guidelines/sexual-and-reproductive-health'
        }
      ]
    }
  }
};
