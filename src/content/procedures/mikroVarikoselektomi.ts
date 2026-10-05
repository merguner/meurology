import type { Treatment } from '../types';

/**
 * MİKROSKOPİK VARİKOSELEKTOMİ — yeni sayfa (Görev 7).
 *
 * reviewStatus: 'draft' — hekim onayı bekliyor; `lastReviewed` bilerek boş.
 * Mevcut 'varikosel' sayfasıyla ÇAPRAZ BAĞLANTILIDIR: bu sayfa yöntemi,
 * diğeri hastalığı anlatır. topNote ile varikosel sayfasına yönlendirilir.
 * Kaynak: EAU Sexual and Reproductive Health kılavuzu.
 * Gebelik/başarı oranı YAZILMAMIŞTIR.
 */
export const mikroVarikoselektomi: Treatment = {
  slug: 'mikroskopik-varikoselektomi',
  parent: 'androloji',
  icon: 'andrology',
  reviewStatus: 'draft',
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
    de: {
      title: 'Mikrochirurgische Varikozelektomie',
      summary:
        'Die Varikozelenoperation unter dem Operationsmikroskop: Die erweiterten Venen werden einzeln dargestellt, während die Hodenarterie und die Lymphgefäße erhalten bleiben.',
      metaTitle: 'Mikrochirurgische Varikozelektomie: subinguinale Mikrotechnik',
      metaDescription:
        'Mikrochirurgische Varikozelektomie: für wen geeignet, Unterschied zur laparoskopischen und konventionellen Operation, Rezidiv- und Hydrozelenrisiko, Heilung und ehrliche Erwartungen.',
      topNote: {
        body: 'Diese Seite beschreibt das OPERATIONSVERFAHREN. Die Varikozele selbst, wer behandelt werden sollte und die nichtoperativen Optionen werden auf einer eigenen Seite behandelt.',
        linkSlug: 'varikosel',
        linkLabel: 'Zur Varikozelen-Seite'
      },
      quickFacts: {
        duration: '45–90 Minuten (eine Seite)',
        anesthesia: 'Lokal mit Sedierung, spinal oder Vollnarkose',
        hospitalStay: 'Ambulant',
        stayInTurkey: '5–7 Tage',
        catheter: 'Nicht nötig',
        returnToWork: '3–7 Tage (Bürotätigkeit), 2–3 Wochen (schwere Arbeit)',
        flightClearance: 'Nach der Kontrolluntersuchung'
      },
      definition: [
        'Eine Varikozele ist die Erweiterung der Venen, die das Blut aus dem Hoden ableiten. Sie tritt meist links auf und verursacht bei vielen Männern überhaupt keine Beschwerden. Zur Operation kommt es, wenn sie Beschwerden macht oder die Spermienwerte beeinträchtigt.',
        'DIE MIKROCHIRURGISCHE VARIKOZELEKTOMIE ist die Varikozelenoperation unter dem Operationsmikroskop. Direkt unterhalb der Leistenfalte wird ein etwa 2–3 cm langer Schnitt angelegt (subinguinal); der Samenstrang wird unter Vergrößerung eröffnet und die enthaltenen Strukturen einzeln identifiziert. Die erweiterten Venen werden unterbunden, während die HODENARTERIE und die LYMPHGEFÄSSE erhalten bleiben.',
        'DIE PRAKTISCHE BEDEUTUNG DIESES ERHALTS: Die Schonung der Hodenarterie sichert die Durchblutung des Hodens; die Schonung der Lymphgefäße senkt die Wahrscheinlichkeit einer späteren Flüssigkeitsansammlung im Hodensack (Hydrozele). Ohne Mikroskop lassen sich diese Strukturen mit bloßem Auge nicht immer unterscheiden.',
        'DIE OPERATIONSENTSCHEIDUNG ERGIBT SICH AUS DEM BEFUND, NICHT AUS DEM ULTRASCHALL. Bei einem Mann, dessen Varikozele nur im Ultraschall sichtbar ist, der keine Schmerzen hat und dessen Spermienwerte und Hodenvolumen normal sind, wird nicht operiert. Die Entscheidung stützt sich auf konkrete Befunde: tastbare Varikozele, Schmerzen, verschlechterte Spermienparameter, vermindertes Hodenvolumen oder ein Wachstumsrückstand des Hodens bei Jugendlichen.',
        'EINE EHRLICHE ERWARTUNGSAUSSAGE: Ziel der Operation ist es, eine Chance auf Besserung der Spermienwerte zu schaffen; EINE SCHWANGERSCHAFT KANN NICHT GARANTIERT WERDEN. Unfruchtbarkeit wird als Paar beurteilt — den Mann allein zu operieren, ohne die Situation der Partnerin zu kennen, ist kein tragfähiger Plan. Deshalb fragen wir auch nach dem Alter Ihrer Partnerin und einer etwaigen gynäkologischen Abklärung.',
        'VERÄNDERUNGEN DER SPERMIENWERTE BRAUCHEN ZEIT. Die Spermienbildung läuft in einem Zyklus von etwa drei Monaten; die erste Kontroll-Spermienanalyse wird deshalb meist nach drei, die zweite nach sechs Monaten angefordert. Eine Analyse nach einem Monat ist ohne Aussagekraft und führt nur zu unnötiger Enttäuschung.',
        'BEI SCHMERZEN GELTEN ANDERE ERWARTUNGEN. Bei einem dumpfen, im Tagesverlauf zunehmenden Schmerz, der der Varikozele zugeschrieben wird, kann die Operation helfen; doch nicht jeder Leistenschmerz kommt von einer Varikozele. Hat er eine andere Ursache (Leistenbruch, muskuloskelettaler Schmerz, chronischer Beckenschmerz), bleibt er nach der Operation bestehen. Diese Unterscheidung erfolgt vorher.'
      ],
      eligibility: {
        suitable: [
          'Männer mit tastbarer Varikozele und verschlechterten Spermienparametern',
          'Männer mit einem der Varikozele zugeschriebenen, im Tagesverlauf zunehmenden dumpfen Schmerz ohne Besserung durch stützende Maßnahmen',
          'Jugendliche mit Varikozele und vermindertem Hodenvolumen auf der betroffenen Seite',
          'Männer mit Rezidiv nach Operation mit einem anderen Verfahren',
          'Ausgewählte Paare, bei denen vor einer assistierten Reproduktion eine Verbesserung der Spermienwerte geplant ist'
        ],
        notSuitable: [
          'Männer mit nur im Ultraschall sichtbarer, nicht tastbarer und beschwerdefreier Varikozele',
          'Männer mit normalen Spermienwerten und Hodenvolumen und ohne Schmerzen — eine Operation wird nicht empfohlen',
          'Männer, bei denen gezeigt wurde, dass der Schmerz nicht von der Varikozele ausgeht',
          'Männer mit aktiver Skrotal- oder Harnwegsinfektion: Der Infekt wird zuerst behandelt',
          'Paare, bei denen die Partnerin überhaupt nicht abgeklärt wurde — der Plan wird für das Paar erstellt'
        ]
      },
      technology: [
        'Operationsmikroskop — zur Unterscheidung von Venen, Arterie und Lymphgefäßen',
        'Mikrochirurgisches Instrumentarium und feines Nahtmaterial',
        'Intraoperativer Mikro-Doppler zur Identifikation der Arterie (in ausgewählten Fällen)',
        'Skrotaler Farbdoppler zur Darstellung der Varikozele und Messung des Hodenvolumens',
        'Spermiogramm (mindestens zwei getrennte Proben) und Hormonwerte bei Bedarf',
        'Lupenbrille mit hoher Vergrößerung für den Wundverschluss'
      ],
      surgeonExperience: {
        caseVolume: '',
        note: 'Die mikrochirurgische Varikozelektomie verlangt mikrochirurgisches Können: Über das Ergebnis entscheidet, ob Arterie und Lymphgefäße unter Vergrößerung richtig identifiziert werden. Die Erfahrung von Doz. Dr. Müslüm Ergün in Andrologie und Mikrochirurgie trägt diesen Ansatz. Bei Rezidiven ist der Bericht der Erstoperation der wichtigste Teil der Planung.'
      },
      timeline: [
        { when: 'Aus der Ferne', title: 'Aktenbeurteilung', body: 'MINDESTENS ZWEI Spermiogramme, der skrotale Dopplerbefund, Hormonwerte (FSH, LH, Gesamttestosteron), etwaige frühere Operationsberichte sowie Alter und gynäkologische Abklärung Ihrer Partnerin werden gesichtet. Auf Grundlage eines einzigen Spermiogramms wird nicht entschieden.' },
        { when: 'Tag 1', title: 'Untersuchung und Tests', body: 'Die Untersuchung im Stehen und Liegen klärt, ob die Varikozele tastbar ist, und ihren Grad. Die Hodenvolumina werden gemessen. Tests werden bei Bedarf wiederholt.' },
        { when: 'Tag 2', title: 'Operation', body: 'Über einen kleinen Schnitt direkt unterhalb der Leistenfalte wird der Samenstrang unter dem Mikroskop eröffnet. Die erweiterten Venen werden einzeln unterbunden, Hodenarterie und Lymphgefäße bleiben erhalten. Sie gehen am selben Tag nach Hause.' },
        { when: 'Tag 3–5', title: 'Kontrolle', body: 'Wunde und Hodensack werden beurteilt. Der Rückflug wird nach diese Kontrolle gelegt.' },
        { when: 'Monat 3', title: 'Erste Kontroll-Spermienanalyse', body: 'Da die Spermienbildung etwa drei Monate braucht, erfolgt die erste aussagekräftige Analyse zu diesem Zeitpunkt. Eine frühere ist irreführend.' },
        { when: 'Monat 6', title: 'Zweite Kontrolle', body: 'Das Spermiogramm wird wiederholt und der Trend beurteilt. Maßgeblich ist die Richtung zweier Messungen, nicht ein Einzelwert.' }
      ],
      risks: [
        'HYDROZELE (FLÜSSIGKEITSANSAMMLUNG IM HODENSACK): durch Verletzung der Lymphgefäße. Dieses Risiko zu senken ist der Hauptgrund für das Arbeiten unter dem Mikroskop; ausgeschlossen ist es nicht',
        'REZIDIV: Die Varikozele kann wiederkehren, weil eine feine Vene übersehen wurde; ein zweiter Eingriff kann nötig werden',
        'VERLETZUNG DER HODENARTERIE: selten und unter dem Mikroskop unwahrscheinlicher; tritt sie ein, kann die Durchblutung des Hodens leiden',
        'Wundinfektion, Schwellung und Blutergüsse im Hodensack',
        'Vorübergehende Taubheit oder veränderte Empfindung in der Leiste',
        'KEINE BESSERUNG DER SPERMIENWERTE: Die Operation schafft eine Chance, kein garantiertes Ergebnis. Bei manchen Männern ändern sich die Werte nicht',
        'AUSBLEIBEN EINER SCHWANGERSCHAFT: Auch bei besseren Spermienwerten hängt eine Schwangerschaft von vielen Faktoren ab; das bedeutet kein Versagen der Operation',
        'Fortbestehende Schmerzen — wenn der Schmerz nicht von der Varikozele ausging'
      ],
      alternatives: [
        'Beobachtung — richtig bei nicht tastbarer, beschwerdefreier Varikozele mit normalen Spermienwerten',
        'Stützende Maßnahmen gegen Schmerzen — stützende Unterwäsche, langes Stehen meiden, einfache Schmerzmittel',
        'Allgemeine Maßnahmen — Rauchstopp, Gewichtsmanagement, übermäßige Hitze meiden; Faktoren der Spermiengesundheit',
        'Laparoskopische Varikozelektomie — Unterbindung der Venen weiter oben über den Bauchraum',
        'Offene (inguinale oder retroperitoneale) Varikozelektomie — konventionelle Verfahren ohne Mikroskop',
        'Perkutane Embolisation — Verschluss der Venen interventionell-radiologisch, ohne Schnitt',
        'Direkter Übergang zur assistierten Reproduktion — wenn aufgrund des Alters der Partnerin oder anderer Faktoren Zeit Vorrang hat'
      ],
      comparison: {
        title: 'Mikrochirurgisch, laparoskopisch und Embolisation: was sich ändert',
        columns: ['Kriterium', 'Mikrochirurgisch (subinguinal)', 'Laparoskopisch', 'Embolisation'],
        rows: [
          { label: 'Verwendete Vergrößerung', values: ['Operationsmikroskop', 'Kameravergrößerung', 'Bildgebungsgestützt'] },
          { label: 'Erhalt der Arterie', values: ['Angestrebt und identifiziert', 'Schwieriger', 'Kein unmittelbares Ziel'] },
          { label: 'Erhalt der Lymphgefäße', values: ['Angestrebt', 'Schwieriger', 'Nicht relevant'] },
          { label: 'Wahrscheinlichkeit einer Hydrozele', values: ['Geringer', 'Relativ höher', 'Nicht zu erwarten'] },
          { label: 'Schnitt', values: ['2–3 cm unterhalb der Leiste', 'Drei kleine Bauchzugänge', 'Kein Schnitt'] },
          { label: 'Narkose', values: ['Lokal mit Sedierung, spinal oder Vollnarkose', 'Vollnarkose', 'Lokal'] },
          { label: 'Beidseitige Behandlung', values: ['Zwei getrennte Schnitte', 'In einer Sitzung einfach', 'In einer Sitzung möglich'] },
          { label: 'Rezidivwahrscheinlichkeit', values: ['Geringer', 'Dazwischen', 'Abhängig von Technik und Anatomie'] }
        ],
        note: 'Diese Tabelle ist keine Rangfolge, sondern eine Abwägung. Bei beidseitiger Varikozele kann der laparoskopische Weg praktisch im Vorteil sein; steht die Vermeidung von Hydrozele und Rezidiv im Vordergrund, rückt das mikrochirurgische Verfahren vor; wer keinen Schnitt möchte, für den kommt die Embolisation infrage. Nennen Sie Ihre Priorität.'
      },
      recovery: [
        { period: 'Erste 48 Stunden', body: 'Schwellung des Hodensacks und Spannung in der Leiste sind üblich. Stützende Unterwäsche und Kühlung helfen. Fieber, Sekretion aus der Wunde oder deutlich zunehmende Schwellung erfordern sofortigen Kontakt.' },
        { period: 'Woche 1', body: 'Spaziergänge sind frei. Heben, Pressen und langes Stehen werden vermieden. Die Rückkehr zur Büroarbeit erfolgt meist binnen weniger Tage.' },
        { period: 'Woche 2–3', body: 'Die Rückkehr zu Sexualität und leichtem Sport wird meist in dieser Zeit besprochen. Bei schwerer körperlicher Arbeit ist die Wartezeit länger.' },
        { period: 'Monat 3', body: 'Die erste aussagekräftige Kontroll-Spermienanalyse erfolgt. Eine frühere ist wegen des Bildungszyklus irreführend.' },
        { period: 'Monat 6', body: 'Ein zweites Spermiogramm zeigt den Trend. Bei Bedarf wird der nächste Schritt gemeinsam als Paar geplant.' },
        { period: 'Langfristig', body: 'Wurden Sie wegen Schmerzen operiert, wird deren Verlauf gesondert verfolgt. Bei Rezidivverdacht werden Untersuchung und Doppler wiederholt.' }
      ],
      price: {
        from: 0,
        to: 0,
        currency: 'EUR',
        disclaimer:
          'Der Betrag hängt davon ab, ob ein- oder beidseitig operiert wird, von der Narkoseform und von Zusatzuntersuchungen. Kontroll-Spermiogramme werden gesondert beurteilt. Ein detailliertes schriftliches Angebot folgt nach Sichtung Ihrer Unterlagen.'
      },
      packageIncludes: [
        'Untersuchung und andrologische Beurteilung',
        'Skrotaler Doppler und Messung des Hodenvolumens',
        'Spermiogramm und Hormonwerte bei Bedarf',
        'Blut- und Urinuntersuchungen',
        'Narkose und Operationssaal',
        'Mikrochirurgischer Verbrauchsbedarf',
        'Ambulante Nachbetreuung',
        'Kontrolluntersuchung vor der Rückreise',
        'Transfers Flughafen–Klinik–Hotel',
        'Unterkunft (Patient und eine Begleitperson)',
        'Medizinischer Dolmetscher und Patientenkoordination',
        'Fernnachsorge und Befundung Ihrer Kontroll-Spermiogramme'
      ],
      faqs: [
        { q: 'Bekommen wir nach der Operation ein Kind?', a: 'Ziel der Operation ist eine Chance auf Besserung der Spermienwerte; eine Schwangerschaft kann nicht garantiert werden. Unfruchtbarkeit wird als Paar beurteilt: Sie allein zu operieren, ohne die Situation Ihrer Partnerin zu kennen, ist kein tragfähiger Plan. Sagt Ihnen das jemand nicht, holen Sie eine Zweitmeinung ein.' },
        { q: 'Warum wird ein Mikroskop verwendet?', a: 'Im Samenstrang liegen Venen, Hodenarterie und Lymphgefäße ineinander. Unter Vergrößerung lassen sie sich unterscheiden; der Erhalt der Arterie sichert die Durchblutung des Hodens, der Erhalt der Lymphgefäße senkt die Wahrscheinlichkeit einer Hydrozele.' },
        { q: 'Im Ultraschall wurde eine Varikozele gesehen, ich habe aber keine Beschwerden — operieren?', a: 'Nein. Bei einer nur im Ultraschall sichtbaren, nicht tastbaren und beschwerdefreien Varikozele wird nicht operiert. Die Entscheidung stützt sich auf konkrete Befunde, nicht auf das Bild.' },
        { q: 'Wann bessern sich meine Spermienwerte?', a: 'Die Spermienbildung dauert etwa drei Monate. Die erste aussagekräftige Kontrolle erfolgt nach drei, die zweite nach sechs Monaten. Eine Analyse nach einem Monat ist ohne Aussagekraft und führt nur zu Enttäuschung.' },
        { q: 'Gehen meine Schmerzen weg?', a: 'Bei einem der Varikozele zugeschriebenen, im Tagesverlauf zunehmenden dumpfen Schmerz ist Besserung zu erwarten. Doch nicht jeder Leistenschmerz kommt von einer Varikozele; bei anderer Ursache bleibt er bestehen. Diese Unterscheidung erfolgt vorher.' },
        { q: 'Ich habe beidseits eine Varikozele — in einer Sitzung?', a: 'Ja, beide Seiten können in derselben Sitzung behandelt werden; mikrochirurgisch wird je Seite ein eigener kleiner Schnitt verwendet. Die Erholung kann etwas länger dauern.' },
        { q: 'Kann sie wiederkommen?', a: 'Die Varikozele kann zurückkehren, weil eine feine Vene übersehen wurde. Diese Wahrscheinlichkeit zu senken ist einer der Zwecke des Mikroskops. Bei Verdacht werden Untersuchung und Doppler wiederholt.' },
        { q: 'Ich wurde schon operiert — geht es erneut?', a: 'Ja. Bei Rezidiven wird das mikrochirurgische Verfahren besonders bevorzugt, weil das Erkennen der Gefäße zwischen Verwachsungen mit bloßem Auge schwierig ist. Senden Sie bitte IHREN FRÜHEREN OPERATIONSBERICHT.' },
        { q: 'Wann kann ich wieder Geschlechtsverkehr haben?', a: 'Meist nach 2–3 Wochen und nach der Kontrolluntersuchung. Früher können Schmerzen und Schwellung stören.' },
        { q: 'Wie lange muss ich in der Türkei bleiben?', a: 'Meist 5–7 Tage. Da die Kontrolle hier erfolgt, legen Sie den Rückflug auf die Zeit danach. Kontroll-Spermiogramme können zu Hause gemacht und uns zugeschickt werden.' },
        { q: 'Welche Unterlagen soll ich senden?', a: 'MINDESTENS ZWEI Spermiogramme mit Datum, den skrotalen Dopplerbefund, Hormonwerte (FSH, LH, Gesamttestosteron), etwaige frühere Operationsberichte sowie Alter und gynäkologische Abklärung Ihrer Partnerin. Mit einem einzigen Spermiogramm lässt sich kein tragfähiger Plan erstellen.' }
      ],
      sources: [
        {
          label: 'EAU-Leitlinie zu sexueller und reproduktiver Gesundheit — Europäische Gesellschaft für Urologie',
          url: 'https://uroweb.org/guidelines/sexual-and-reproductive-health'
        }
      ]
    },
    fr: {
      title: 'Varicocélectomie microchirurgicale',
      summary:
        'La cure de varicocèle réalisée sous microscope opératoire : les veines dilatées sont disséquées une à une, tandis que l’artère testiculaire et les vaisseaux lymphatiques sont préservés.',
      metaTitle: 'Varicocélectomie microchirurgicale : technique sous-inguinale',
      metaDescription:
        'Varicocélectomie microchirurgicale : à qui elle convient, différence avec la cœlioscopie et la chirurgie classique, risque de récidive et d’hydrocèle, convalescence et attentes réalistes.',
      topNote: {
        body: 'Cette page décrit la TECHNIQUE OPÉRATOIRE. La varicocèle elle-même, qui doit être traité et les options non chirurgicales sont abordés sur une page distincte.',
        linkSlug: 'varikosel',
        linkLabel: 'Aller à la page varicocèle'
      },
      quickFacts: {
        duration: '45 à 90 minutes (un côté)',
        anesthesia: 'Locale avec sédation, rachidienne ou générale',
        hospitalStay: 'Ambulatoire',
        stayInTurkey: '5 à 7 jours',
        catheter: 'Inutile',
        returnToWork: '3 à 7 jours (bureau), 2 à 3 semaines (travail lourd)',
        flightClearance: 'Après la consultation de contrôle'
      },
      definition: [
        'La varicocèle est la dilatation des veines drainant le testicule. Elle siège le plus souvent à gauche et ne provoque aucun symptôme chez beaucoup d’hommes. La chirurgie se discute lorsqu’elle est symptomatique ou qu’elle altère les paramètres du sperme.',
        'LA VARICOCÉLECTOMIE MICROCHIRURGICALE est la cure de varicocèle réalisée sous microscope opératoire. Une incision de 2 à 3 cm est faite juste sous le pli inguinal (voie sous-inguinale) ; le cordon spermatique est ouvert sous grossissement et les structures qu’il contient identifiées une à une. Les veines dilatées sont liées tandis que l’ARTÈRE TESTICULAIRE et les VAISSEAUX LYMPHATIQUES sont préservés.',
        'LA PORTÉE PRATIQUE DE CETTE PRÉSERVATION : préserver l’artère testiculaire garantit la vascularisation du testicule ; préserver les lymphatiques réduit le risque d’accumulation de liquide dans la bourse après l’intervention (hydrocèle). Sans microscope, ces structures ne peuvent pas toujours être distinguées à l’œil nu.',
        'LA DÉCISION OPÉRATOIRE VIENT DU TABLEAU CLINIQUE, PAS DE L’ÉCHOGRAPHIE. Chez un homme dont la varicocèle est vue à l’échographie mais qui n’a pas de douleur et dont les paramètres du sperme et le volume testiculaire sont normaux, l’intervention n’est pas proposée. La décision repose sur des éléments concrets : varicocèle palpable, douleur, altération du spermogramme, réduction du volume testiculaire, ou retard de croissance testiculaire chez l’adolescent.',
        'UNE ATTENTE ÉNONCÉE HONNÊTEMENT : l’objectif est de créer une chance d’amélioration des paramètres du sperme ; UNE GROSSESSE NE PEUT PAS ÊTRE GARANTIE. L’infertilité s’évalue en couple — opérer l’homme seul, sans connaître la situation de la partenaire, n’est pas un plan solide. Nous demandons donc aussi l’âge de votre partenaire et son éventuel bilan gynécologique.',
        'LES PARAMÈTRES DU SPERME ÉVOLUENT LENTEMENT. La spermatogenèse suit un cycle d’environ trois mois ; le premier spermogramme de contrôle est donc demandé à trois mois et le second à six. Un examen réalisé un mois après n’a pas de valeur et ne crée qu’une déception inutile.',
        'EN CAS DE DOULEUR, LES ATTENTES DIFFÈRENT. Une douleur sourde attribuée à la varicocèle et s’aggravant en fin de journée peut bénéficier de l’intervention ; mais toute douleur inguinale ne vient pas d’une varicocèle. Si la douleur a une autre cause (hernie inguinale, douleur musculo-squelettique, douleur pelvienne chronique), elle persistera après l’opération. Cette distinction se fait au préalable.'
      ],
      eligibility: {
        suitable: [
          'Hommes avec varicocèle palpable et paramètres spermatiques altérés',
          'Hommes présentant une douleur sourde attribuée à la varicocèle, s’aggravant dans la journée et résistant aux mesures de soutien',
          'Adolescents avec varicocèle et volume testiculaire diminué du côté atteint',
          'Hommes dont la varicocèle a récidivé après une autre technique',
          'Couples sélectionnés chez qui une amélioration du sperme est prévue avant assistance médicale à la procréation'
        ],
        notSuitable: [
          'Hommes dont la varicocèle n’est vue qu’à l’échographie, non palpable et asymptomatique',
          'Hommes avec spermogramme et volume testiculaire normaux et sans douleur — l’intervention n’est pas proposée',
          'Hommes chez qui il a été montré que la douleur ne vient pas de la varicocèle',
          'Hommes présentant une infection scrotale ou urinaire active : l’infection est traitée d’abord',
          'Couples dont la partenaire n’a pas été évaluée — le plan se construit pour le couple'
        ]
      },
      technology: [
        'Microscope opératoire — pour distinguer veines, artère et lymphatiques',
        'Instruments de microchirurgie et fils fins',
        'Micro-Doppler peropératoire pour repérer l’artère (cas sélectionnés)',
        'Échographie-Doppler scrotale pour objectiver la varicocèle et mesurer le volume testiculaire',
        'Spermogramme (au moins deux prélèvements distincts) et bilan hormonal si indiqué',
        'Loupes à fort grossissement pour la fermeture'
      ],
      surgeonExperience: {
        caseVolume: '',
        note: 'La varicocélectomie microchirurgicale exige une compétence en microchirurgie : le résultat dépend de l’identification correcte de l’artère et des lymphatiques sous grossissement. L’expérience du Dr Müslüm Ergün en andrologie et microchirurgie fonde cette approche. Dans les récidives, le compte rendu de la première intervention est l’élément le plus important du plan.'
      },
      timeline: [
        { when: 'À distance', title: 'Étude du dossier', body: 'AU MOINS DEUX spermogrammes, le compte rendu de l’échographie-Doppler scrotale, le bilan hormonal (FSH, LH, testostérone totale), les comptes rendus opératoires antérieurs, ainsi que l’âge de votre partenaire et son bilan gynécologique éventuel sont étudiés. On ne décide pas sur un seul spermogramme.' },
        { when: 'Jour 1', title: 'Examen et bilan', body: 'L’examen debout et couché établit si la varicocèle est palpable et son grade. Les volumes testiculaires sont mesurés. Les examens sont répétés si nécessaire.' },
        { when: 'Jour 2', title: 'Intervention', body: 'Par une petite incision juste sous le pli inguinal, le cordon spermatique est ouvert sous microscope. Les veines dilatées sont liées une à une, l’artère testiculaire et les lymphatiques étant préservés. Vous rentrez le jour même.' },
        { when: 'Jours 3–5', title: 'Contrôle', body: 'La cicatrice et le scrotum sont évalués. Le vol retour est prévu après ce contrôle.' },
        { when: 'Mois 3', title: 'Premier spermogramme de contrôle', body: 'La spermatogenèse suivant un cycle d’environ trois mois, le premier examen significatif se fait à cette date. Plus tôt, il est trompeur.' },
        { when: 'Mois 6', title: 'Second contrôle', body: 'Le spermogramme est répété et la tendance évaluée. On regarde la direction de deux mesures, non une valeur isolée.' }
      ],
      risks: [
        'HYDROCÈLE (ACCUMULATION DE LIQUIDE DANS LA BOURSE) : liée à une lésion des lymphatiques. Réduire ce risque est la principale raison de travailler sous microscope ; il n’est pas supprimé',
        'RÉCIDIVE : la varicocèle peut revenir si une veine fine a été manquée, et un second geste peut être nécessaire',
        'LÉSION DE L’ARTÈRE TESTICULAIRE : rare et moins probable sous microscope ; si elle survient, la vascularisation du testicule peut être atteinte',
        'Infection de la plaie, gonflement et ecchymoses du scrotum',
        'Engourdissement ou troubles sensitifs transitoires de l’aine',
        'ABSENCE D’AMÉLIORATION DU SPERME : l’intervention crée une chance, elle ne garantit pas un résultat. Chez certains hommes, les paramètres ne changent pas',
        'ABSENCE DE GROSSESSE : même avec une amélioration du sperme, la grossesse dépend de nombreux facteurs ; cela ne signifie pas un échec de l’intervention',
        'Persistance de la douleur — si elle ne venait pas de la varicocèle'
      ],
      alternatives: [
        'Surveillance — option juste chez l’homme dont la varicocèle n’est pas palpable, asymptomatique, avec un spermogramme normal',
        'Mesures de soutien contre la douleur — sous-vêtement de maintien, éviter la station debout prolongée, antalgiques simples',
        'Mesures hygiéno-diététiques — arrêt du tabac, gestion du poids, éviter la chaleur excessive ; facteurs influant sur la santé du sperme',
        'Varicocélectomie cœlioscopique — ligature des veines plus haut, par voie abdominale',
        'Varicocélectomie ouverte (inguinale ou rétropéritonéale) — techniques classiques sans microscope',
        'Embolisation percutanée — occlusion des veines par radiologie interventionnelle, sans incision',
        'Passage direct à l’assistance médicale à la procréation — lorsque le temps prime, du fait de l’âge de la partenaire ou d’autres facteurs'
      ],
      comparison: {
        title: 'Microchirurgie, cœlioscopie et embolisation : ce qui change',
        columns: ['Critère', 'Microchirurgie (sous-inguinale)', 'Cœlioscopie', 'Embolisation'],
        rows: [
          { label: 'Grossissement utilisé', values: ['Microscope opératoire', 'Grossissement caméra', 'Guidage par imagerie'] },
          { label: 'Préservation de l’artère', values: ['Recherchée et identifiée', 'Plus difficile', 'Pas un objectif direct'] },
          { label: 'Préservation des lymphatiques', values: ['Recherchée', 'Plus difficile', 'Sans objet'] },
          { label: 'Risque d’hydrocèle', values: ['Plus faible', 'Relativement plus élevé', 'Non attendu'] },
          { label: 'Incision', values: ['2 à 3 cm sous l’aine', 'Trois petits orifices abdominaux', 'Aucune'] },
          { label: 'Anesthésie', values: ['Locale avec sédation, rachidienne ou générale', 'Générale', 'Locale'] },
          { label: 'Traitement bilatéral', values: ['Deux incisions distinctes', 'Facile en un temps', 'Possible en un temps'] },
          { label: 'Risque de récidive', values: ['Plus faible', 'Intermédiaire', 'Selon technique et anatomie'] }
        ],
        note: 'Ce tableau n’est pas un classement mais une balance. En cas de varicocèle bilatérale, la voie cœlioscopique peut offrir un avantage pratique ; si éviter l’hydrocèle et la récidive prime, la microchirurgie passe devant ; pour qui refuse une incision, l’embolisation entre en jeu. Dites-nous votre priorité.'
      },
      recovery: [
        { period: '48 premières heures', body: 'Gonflement du scrotum et tension inguinale sont habituels. Sous-vêtement de maintien et froid soulagent. Fièvre, écoulement de la plaie ou augmentation nette du gonflement imposent un contact immédiat.' },
        { period: 'Semaine 1', body: 'La marche est libre. Port de charges, efforts de poussée et station debout prolongée sont évités. La reprise du travail de bureau se fait généralement en quelques jours.' },
        { period: 'Semaines 2–3', body: 'La reprise de la vie sexuelle et d’un sport léger se discute généralement à ce moment. Pour un travail lourd, l’attente est plus longue.' },
        { period: 'Mois 3', body: 'Le premier spermogramme de contrôle significatif est réalisé. Plus tôt, il est trompeur du fait du cycle de la spermatogenèse.' },
        { period: 'Mois 6', body: 'Un second spermogramme établit la tendance. Si nécessaire, l’étape suivante est planifiée avec vous en tant que couple.' },
        { period: 'Long terme', body: 'Si vous avez été opéré pour douleur, son évolution est suivie à part. En cas de suspicion de récidive, examen et Doppler sont répétés.' }
      ],
      price: {
        from: 0,
        to: 0,
        currency: 'EUR',
        disclaimer:
          'Le montant dépend du caractère uni- ou bilatéral, du type d’anesthésie et des examens complémentaires. Les spermogrammes de contrôle sont évalués à part. Un devis écrit détaillé est remis après étude de votre dossier.'
      },
      packageIncludes: [
        'Consultation et évaluation andrologique',
        'Échographie-Doppler scrotale et mesure du volume testiculaire',
        'Spermogramme et bilan hormonal si indiqué',
        'Bilans sanguins et urinaires',
        'Anesthésie et bloc opératoire',
        'Consommables de microchirurgie',
        'Suivi en ambulatoire',
        'Consultation de contrôle avant le retour',
        'Transferts aéroport–hôpital–hôtel',
        'Hébergement (patient et un accompagnant)',
        'Interprète médical et coordinateur patient',
        'Suivi à distance et interprétation de vos spermogrammes de contrôle'
      ],
      faqs: [
        { q: 'Si je suis opéré, aurons-nous un enfant ?', a: 'L’objectif est de créer une chance d’amélioration des paramètres du sperme ; la grossesse ne peut être garantie. L’infertilité s’évalue en couple : vous opérer seul, sans connaître la situation de votre partenaire, n’est pas un plan solide. Si un centre ne vous le dit pas, demandez un second avis.' },
        { q: 'Pourquoi utiliser un microscope ?', a: 'Dans le cordon spermatique, veines, artère testiculaire et lymphatiques sont intriqués. Sous grossissement, on peut les distinguer ; préserver l’artère garantit la vascularisation du testicule, préserver les lymphatiques réduit le risque d’hydrocèle.' },
        { q: 'Une varicocèle a été vue à l’échographie mais je n’ai aucun symptôme : faut-il opérer ?', a: 'Non. Pour une varicocèle vue seulement à l’échographie, non palpable et asymptomatique, l’intervention n’est pas proposée. La décision repose sur des éléments concrets, pas sur l’image.' },
        { q: 'Quand mon spermogramme s’améliorera-t-il ?', a: 'La spermatogenèse suit un cycle d’environ trois mois. Le premier contrôle significatif est à trois mois, le second à six. Un examen un mois après n’a pas de valeur et ne crée qu’une déception.' },
        { q: 'Ma douleur va-t-elle disparaître ?', a: 'Un bénéfice est attendu pour une douleur sourde attribuée à la varicocèle et s’aggravant dans la journée. Mais toute douleur inguinale ne vient pas d’une varicocèle ; en cas d’autre cause, elle persistera. Cette distinction se fait au préalable.' },
        { q: 'J’ai une varicocèle des deux côtés : un seul temps opératoire ?', a: 'Oui, les deux côtés peuvent être traités dans le même temps ; en microchirurgie, une petite incision distincte est utilisée pour chaque côté. La convalescence peut être un peu plus longue.' },
        { q: 'Peut-elle récidiver ?', a: 'La varicocèle peut revenir si une veine fine a été manquée. Réduire ce risque est l’un des buts du microscope. En cas de suspicion, examen et Doppler sont répétés.' },
        { q: 'J’ai déjà été opéré : peut-on recommencer ?', a: 'Oui. La voie microchirurgicale est particulièrement privilégiée dans les récidives, car repérer les vaisseaux au milieu des adhérences est difficile à l’œil nu. Envoyez impérativement VOTRE COMPTE RENDU OPÉRATOIRE ANTÉRIEUR.' },
        { q: 'Quand puis-je reprendre les rapports ?', a: 'Généralement après 2 à 3 semaines et après la consultation de contrôle. Plus tôt, douleur et gonflement peuvent gêner.' },
        { q: 'Combien de temps rester en Türkiye ?', a: 'Généralement 5 à 7 jours. Le contrôle étant réalisé ici, prévoyez le vol retour après. Les spermogrammes de contrôle peuvent être faits chez vous et nous être transmis.' },
        { q: 'Quels documents envoyer ?', a: 'AU MOINS DEUX spermogrammes datés, le compte rendu de l’échographie-Doppler scrotale, le bilan hormonal (FSH, LH, testostérone totale), les comptes rendus opératoires antérieurs, l’âge de votre partenaire et son bilan gynécologique éventuel. Un seul spermogramme ne permet pas un plan solide.' }
      ],
      sources: [
        {
          label: 'Recommandations EAU en santé sexuelle et reproductive — Association européenne d’urologie',
          url: 'https://uroweb.org/guidelines/sexual-and-reproductive-health'
        }
      ]
    },
    ru: {
      title: 'Микрохирургическая варикоцелэктомия',
      summary:
        'Операция при варикоцеле, выполняемая под операционным микроскопом: расширенные вены выделяют по одной, сохраняя яичковую артерию и лимфатические сосуды.',
      metaTitle: 'Микрохирургическая варикоцелэктомия: субингвинальная методика',
      metaDescription:
        'Микрохирургическая варикоцелэктомия: кому подходит, чем отличается от лапароскопической и классической операции, риск рецидива и гидроцеле, восстановление и честные ожидания.',
      topNote: {
        body: 'На этой странице описан МЕТОД ОПЕРАЦИИ. Само варикоцеле, кому нужно лечение и нехирургические варианты рассмотрены на отдельной странице.',
        linkSlug: 'varikosel',
        linkLabel: 'Перейти на страницу варикоцеле'
      },
      quickFacts: {
        duration: '45–90 минут (одна сторона)',
        anesthesia: 'Местная с седацией, спинальная или общая',
        hospitalStay: 'Амбулаторно',
        stayInTurkey: '5–7 дней',
        catheter: 'Не нужен',
        returnToWork: '3–7 дней (сидячая работа), 2–3 недели (тяжёлая)',
        flightClearance: 'После контрольного осмотра'
      },
      definition: [
        'Варикоцеле — расширение вен, отводящих кровь от яичка. Чаще бывает слева и у многих мужчин не вызывает никаких жалоб. Операция рассматривается, когда оно вызывает жалобы или влияет на показатели спермы.',
        'МИКРОХИРУРГИЧЕСКАЯ ВАРИКОЦЕЛЭКТОМИЯ — операция при варикоцеле под операционным микроскопом. Непосредственно под паховой складкой делают разрез около 2–3 см (субингвинальный доступ); семенной канатик вскрывают под увеличением и по одной опознают находящиеся в нём структуры. Расширенные вены перевязывают, сохраняя ЯИЧКОВУЮ АРТЕРИЮ и ЛИМФАТИЧЕСКИЕ СОСУДЫ.',
        'ПРАКТИЧЕСКИЙ СМЫСЛ ЭТОГО СОХРАНЕНИЯ: сохранение яичковой артерии обеспечивает кровоснабжение яичка; сохранение лимфатических сосудов снижает вероятность скопления жидкости в мошонке после операции (гидроцеле). Без микроскопа эти структуры не всегда удаётся различить невооружённым глазом.',
        'РЕШЕНИЕ ОБ ОПЕРАЦИИ ПРИНИМАЕТСЯ ПО КЛИНИЧЕСКОЙ КАРТИНЕ, А НЕ ПО СНИМКУ. Мужчине, у которого варикоцеле видно на УЗИ, но нет боли, а показатели спермы и объём яичка нормальны, операцию не предлагают. Решение опирается на конкретные находки: пальпируемое варикоцеле, боль, ухудшение спермограммы, уменьшение объёма яичка или отставание его роста у подростков.',
        'ЧЕСТНАЯ ФОРМУЛИРОВКА ОЖИДАНИЙ: цель операции — создать шанс на улучшение показателей спермы; БЕРЕМЕННОСТЬ ГАРАНТИРОВАТЬ НЕЛЬЗЯ. Бесплодие оценивают как проблему пары — оперировать мужчину в одиночку, не зная ситуации партнёрши, не является обоснованным планом. Поэтому мы спрашиваем и о возрасте партнёрши, и о её гинекологическом обследовании.',
        'ИЗМЕНЕНИЕ ПОКАЗАТЕЛЕЙ СПЕРМЫ ТРЕБУЕТ ВРЕМЕНИ. Сперматогенез идёт циклом около трёх месяцев, поэтому первую контрольную спермограмму обычно назначают через три месяца, вторую — через шесть. Анализ через месяц ничего не значит и вызывает лишь ненужное разочарование.',
        'ПРИ БОЛИ ОЖИДАНИЯ ИНЫЕ. При тупой боли, связываемой с варикоцеле и усиливающейся к концу дня, операция может помочь; но не всякая боль в паху исходит от варикоцеле. Если у боли другая причина (паховая грыжа, мышечно-скелетная боль, хроническая тазовая боль), после операции она сохранится. Это различие проводят заранее.'
      ],
      eligibility: {
        suitable: [
          'Мужчины с пальпируемым варикоцеле и нарушенными показателями спермы',
          'Мужчины с тупой болью, связываемой с варикоцеле, усиливающейся в течение дня и не поддающейся поддерживающим мерам',
          'Подростки с варикоцеле и уменьшенным объёмом яичка на поражённой стороне',
          'Мужчины с рецидивом варикоцеле после операции другим методом',
          'Отобранные пары, у которых перед вспомогательными репродуктивными технологиями планируется улучшение показателей спермы'
        ],
        notSuitable: [
          'Мужчины, у которых варикоцеле видно только на УЗИ, не пальпируется и не вызывает жалоб',
          'Мужчины с нормальной спермограммой и объёмом яичка и без боли — операцию не предлагают',
          'Мужчины, у которых показано, что боль исходит не от варикоцеле',
          'Мужчины с активной инфекцией мошонки или мочевых путей: сначала лечат инфекцию',
          'Пары, в которых партнёрша вообще не обследована — план строится для пары'
        ]
      },
      technology: [
        'Операционный микроскоп — для различения вен, артерии и лимфатических сосудов',
        'Микрохирургический инструментарий и тонкий шовный материал',
        'Интраоперационный микродоплер для поиска артерии (в отдельных случаях)',
        'Цветовое допплеровское УЗИ мошонки для подтверждения варикоцеле и измерения объёма яичка',
        'Спермограмма (минимум два отдельных исследования) и гормональные анализы по показаниям',
        'Лупы высокого увеличения для этапа ушивания'
      ],
      surgeonExperience: {
        caseVolume: '',
        note: 'Микрохирургическая варикоцелэктомия требует микрохирургического навыка: результат определяется правильным распознаванием артерии и лимфатических сосудов под увеличением. Опыт доцента, д-ра Мюслюма Эргюна в андрологии и микрохирургии лежит в основе этого подхода. При рецидивах протокол первой операции — важнейшая часть плана.'
      },
      timeline: [
        { when: 'Дистанционно', title: 'Оценка документов', body: 'Изучают НЕ МЕНЕЕ ДВУХ спермограмм, заключение допплеровского УЗИ мошонки, гормоны (ФСГ, ЛГ, общий тестостерон), протоколы прежних операций, а также возраст партнёрши и её гинекологическое заключение, если оно есть. По одной спермограмме решение не принимают.' },
        { when: '1-й день', title: 'Осмотр и обследование', body: 'Осмотр стоя и лёжа определяет, пальпируется ли варикоцеле, и его степень. Измеряют объёмы яичек. При необходимости анализы повторяют.' },
        { when: '2-й день', title: 'Операция', body: 'Через небольшой разрез под паховой складкой семенной канатик вскрывают под микроскопом. Расширенные вены перевязывают по одной, сохраняя яичковую артерию и лимфатические сосуды. Домой вы уходите в тот же день.' },
        { when: '3–5-й день', title: 'Контроль', body: 'Оценивают рану и мошонку. Обратный рейс планируют после этого контроля.' },
        { when: '3-й месяц', title: 'Первая контрольная спермограмма', body: 'Поскольку сперматогенез идёт циклом около трёх месяцев, первый значимый анализ выполняют в этот срок. Более ранний вводит в заблуждение.' },
        { when: '6-й месяц', title: 'Второй контроль', body: 'Спермограмму повторяют и оценивают тенденцию. Смотрят на направление двух измерений, а не на одно значение.' }
      ],
      risks: [
        'ГИДРОЦЕЛЕ (СКОПЛЕНИЕ ЖИДКОСТИ В МОШОНКЕ): связано с повреждением лимфатических сосудов. Снижение этого риска — главная причина работы под микроскопом; полностью он не исчезает',
        'РЕЦИДИВ: варикоцеле может вернуться из-за пропущенной тонкой вены, и может потребоваться второе вмешательство',
        'ПОВРЕЖДЕНИЕ ЯИЧКОВОЙ АРТЕРИИ: встречается нечасто и менее вероятно под микроскопом; при его возникновении может пострадать кровоснабжение яичка',
        'Инфекция раны, отёк и кровоподтёки мошонки',
        'Временное онемение или изменение чувствительности в паху',
        'ОТСУТСТВИЕ УЛУЧШЕНИЯ СПЕРМОГРАММЫ: операция создаёт шанс, но не гарантирует результат. У части мужчин показатели не меняются',
        'ОТСУТСТВИЕ БЕРЕМЕННОСТИ: даже при улучшении спермограммы беременность зависит от многих факторов; это не означает неудачи операции',
        'Сохранение боли — если она исходила не от варикоцеле'
      ],
      alternatives: [
        'Наблюдение — правильный вариант у мужчин с непальпируемым, бессимптомным варикоцеле и нормальной спермограммой',
        'Поддерживающие меры при боли — поддерживающее бельё, отказ от долгого стояния, простые обезболивающие',
        'Коррекция образа жизни — отказ от курения, контроль веса, избегание перегрева; факторы, влияющие на здоровье спермы',
        'Лапароскопическая варикоцелэктомия — перевязка вен выше, через брюшную полость',
        'Открытая (паховая или забрюшинная) варикоцелэктомия — классические методы без микроскопа',
        'Чрескожная эмболизация — закрытие вен методом интервенционной радиологии, без разреза',
        'Прямой переход к вспомогательным репродуктивным технологиям — когда приоритетом является время из-за возраста партнёрши или других факторов'
      ],
      comparison: {
        title: 'Микрохирургия, лапароскопия и эмболизация: что меняется',
        columns: ['Критерий', 'Микрохирургия (субингвинальная)', 'Лапароскопия', 'Эмболизация'],
        rows: [
          { label: 'Используемое увеличение', values: ['Операционный микроскоп', 'Увеличение камеры', 'Под контролем визуализации'] },
          { label: 'Сохранение артерии', values: ['Цель, артерия опознаётся', 'Сложнее', 'Не является прямой целью'] },
          { label: 'Сохранение лимфатических сосудов', values: ['Цель', 'Сложнее', 'Не относится'] },
          { label: 'Вероятность гидроцеле', values: ['Ниже', 'Относительно выше', 'Не ожидается'] },
          { label: 'Разрез', values: ['2–3 см под паховой складкой', 'Три небольших прокола на животе', 'Нет'] },
          { label: 'Анестезия', values: ['Местная с седацией, спинальная или общая', 'Общая', 'Местная'] },
          { label: 'Двустороннее лечение', values: ['Нужны два отдельных разреза', 'Легко за один сеанс', 'Возможно за один сеанс'] },
          { label: 'Вероятность рецидива', values: ['Ниже', 'Промежуточная', 'Зависит от техники и анатомии'] }
        ],
        note: 'Эта таблица не рейтинг, а баланс. При двустороннем варикоцеле лапароскопический путь может дать практическое преимущество; если приоритет — избежать гидроцеле и рецидива, вперёд выходит микрохирургия; тому, кто не хочет разреза, подходит эмболизация. Скажите, что для вас важнее.'
      },
      recovery: [
        { period: 'Первые 48 часов', body: 'Отёк мошонки и чувство натяжения в паху обычны. Помогают поддерживающее бельё и холод. Лихорадка, отделяемое из раны или заметное нарастание отёка требуют немедленного обращения.' },
        { period: '1-я неделя', body: 'Ходьба свободна. Подъём тяжестей, натуживание и долгое стояние исключают. Возвращение к сидячей работе обычно через несколько дней.' },
        { period: '2–3-я неделя', body: 'Возвращение к половой жизни и лёгкому спорту обычно обсуждают в этот период. При тяжёлой работе ожидание дольше.' },
        { period: '3-й месяц', body: 'Выполняют первую значимую контрольную спермограмму. Более ранняя вводит в заблуждение из-за цикла сперматогенеза.' },
        { period: '6-й месяц', body: 'Вторая спермограмма показывает тенденцию. При необходимости следующий шаг планируют вместе с вами как с парой.' },
        { period: 'Долгосрочно', body: 'Если операция была по поводу боли, её течение отслеживают отдельно. При подозрении на рецидив повторяют осмотр и допплеровское УЗИ.' }
      ],
      price: {
        from: 0,
        to: 0,
        currency: 'EUR',
        disclaimer:
          'Сумма зависит от того, одна или обе стороны оперируются, от вида анестезии и дополнительных исследований. Контрольные спермограммы оцениваются отдельно. Постатейное письменное предложение даётся после изучения ваших документов.'
      },
      packageIncludes: [
        'Осмотр и андрологическая оценка',
        'Допплеровское УЗИ мошонки и измерение объёма яичек',
        'Спермограмма и гормональные анализы по показаниям',
        'Анализы крови и мочи',
        'Анестезия и операционная',
        'Микрохирургические расходные материалы',
        'Амбулаторное наблюдение',
        'Контрольный осмотр перед возвращением домой',
        'Трансферы аэропорт — больница — отель',
        'Проживание (пациент и один сопровождающий)',
        'Медицинский переводчик и координатор пациента',
        'Дистанционное наблюдение и интерпретация контрольных спермограмм'
      ],
      faqs: [
        { q: 'Если я прооперируюсь, будет ли у нас ребёнок?', a: 'Цель операции — создать шанс на улучшение показателей спермы; беременность гарантировать нельзя. Бесплодие оценивают как проблему пары: оперировать вас одного, не зная ситуации партнёрши, — необоснованный план. Если вам этого не говорят, запросите второе мнение.' },
        { q: 'Зачем нужен микроскоп?', a: 'В семенном канатике вены, яичковая артерия и лимфатические сосуды переплетены. Под увеличением их можно различить; сохранение артерии обеспечивает кровоснабжение яичка, а сохранение лимфатических сосудов снижает вероятность гидроцеле.' },
        { q: 'На УЗИ видно варикоцеле, но жалоб нет — оперироваться?', a: 'Нет. При варикоцеле, видимом только на УЗИ, непальпируемом и бессимптомном, операцию не предлагают. Решение опирается на конкретные находки, а не на снимок.' },
        { q: 'Когда улучшатся показатели спермы?', a: 'Сперматогенез идёт циклом около трёх месяцев. Первый значимый контроль — через три месяца, второй — через шесть. Анализ через месяц ничего не значит и вызывает лишь разочарование.' },
        { q: 'Пройдёт ли боль?', a: 'При тупой боли, связываемой с варикоцеле и усиливающейся к концу дня, ожидается польза. Но не всякая боль в паху от варикоцеле; при другой причине она сохранится. Это различие проводят заранее.' },
        { q: 'У меня варикоцеле с обеих сторон — можно за один раз?', a: 'Да, обе стороны можно оперировать в одном сеансе; при микрохирургической методике для каждой стороны используют отдельный небольшой разрез. Восстановление может занять чуть больше времени.' },
        { q: 'Может ли варикоцеле вернуться?', a: 'Да, из-за пропущенной тонкой вены. Снижение этой вероятности — одна из целей работы под микроскопом. При подозрении повторяют осмотр и допплеровское УЗИ.' },
        { q: 'Меня уже оперировали — можно повторно?', a: 'Да. При рецидивах микрохирургический доступ особенно предпочтителен, потому что различить сосуды среди спаек после прежней операции невооружённым глазом трудно. Обязательно пришлите ПРОТОКОЛ ПРЕЖНЕЙ ОПЕРАЦИИ.' },
        { q: 'Когда можно вернуться к половой жизни?', a: 'Обычно через 2–3 недели и после контрольного осмотра. Раньше боль и отёк могут мешать.' },
        { q: 'Сколько нужно пробыть в Турции?', a: 'Обычно 5–7 дней. Поскольку контроль проводится здесь, планируйте обратный рейс после него. Контрольные спермограммы можно сделать дома и прислать нам.' },
        { q: 'Какие документы прислать?', a: 'НЕ МЕНЕЕ ДВУХ спермограмм с датами, заключение допплеровского УЗИ мошонки, гормоны (ФСГ, ЛГ, общий тестостерон), протоколы прежних операций, возраст партнёрши и её гинекологическое заключение. По одной спермограмме обоснованный план составить нельзя.' }
      ],
      sources: [
        {
          label: 'Рекомендации EAU по сексуальному и репродуктивному здоровью — Европейская ассоциация урологии',
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
