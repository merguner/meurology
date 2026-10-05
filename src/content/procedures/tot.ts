import type { Treatment } from '../types';

/**
 * TOT (TRANSOBTURATOR ASKI) AMELİYATI — yeni sayfa (Görev 7).
 *
 * reviewStatus: 'reviewed' — hekim onayı alındı (Dr. Ergün, 6 Ekim 2026).
 * Kaynak: EAU Non-neurogenic Female LUTS kılavuzu + cerrahın TOT yayını.
 * Başarı oranı/yüzde YAZILMAMIŞTIR.
 */
export const tot: Treatment = {
  slug: 'tot',
  procedure: { type: 'SurgicalProcedure', bodyLocation: 'Urethra' },
  parent: 'kadin-urolojisi',
  icon: 'female',
  reviewStatus: 'reviewed',

  lastReviewed: '2026-10-06',
  offersConsultation: false,
  i18n: {
    tr: {
      title: 'TOT (Transobturator Askı) Ameliyatı',
      summary:
        'Öksürme, hapşırma veya ağırlık kaldırma sırasında idrar kaçırmanın (stres inkontinans) cerrahi tedavisinde kullanılan, idrar kanalının altına ince bir şerit yerleştirilerek destek sağlanan ameliyat.',
      metaTitle: 'TOT Ameliyatı Nedir? Kadınlarda İdrar Kaçırma Cerrahisi',
      metaDescription:
        'TOT askı ameliyatı: kimlere uygun, nasıl yapılır, TVT ile farkı, mesh (ağ) konusunda bilinmesi gerekenler, riskler, iyileşme süreci ve dürüst beklentiler.',
      quickFacts: {
        duration: '20–40 dakika',
        anesthesia: 'Spinal veya genel anestezi',
        hospitalStay: 'Günübirlik – 1 gece',
        stayInTurkey: '5–7 gün',
        catheter: 'Genellikle birkaç saat – 1 gün',
        returnToWork: '1–2 hafta (masa başı), 4–6 hafta (ağır iş)',
        flightClearance: 'Kontrol muayenesinden sonra'
      },
      definition: [
        'Stres inkontinans, karın içi basıncın arttığı anlarda — öksürme, hapşırma, gülme, ağırlık kaldırma, merdiven çıkma — istem dışı idrar kaçırmadır. Nedeni mesane değil, idrar kanalını (üretrayı) destekleyen yapıların zayıflamasıdır. Doğum, menopoz, kronik öksürük, kabızlık ve kilo bu zayıflamaya katkıda bulunur.',
        'TOT (transobturator tape), üretranın orta bölümünün altına ince, yumuşak bir şerit yerleştirilerek bu desteğin yeniden sağlandığı ameliyattır. Şerit üretrayı sıkmaz; yalnızca basınç arttığı anda altında bir yatak gibi durur ve kanalın aşağı doğru hareketini engeller. Vajen ön duvarında küçük bir kesi ve her iki kasıkta birer küçük çıkış noktası kullanılır.',
        'DOĞRU TANI OLMADAN DOĞRU AMELİYAT OLMAZ. İdrar kaçırmanın üç ana tipi vardır: stres (basınçla), sıkışma (tuvalete yetişememe) ve karışık tip. TOT yalnızca STRES tipine yöneliktir. Şikâyetin asıl kaynağı sıkışma ise askı ameliyatı beklenen faydayı vermez, hatta sıkışma şikâyetini artırabilir. Bu nedenle ameliyattan önce şikâyetin tipi ayrıntılı olarak belirlenir.',
        'MESH (AĞ) KONUSUNU AÇIKÇA KONUŞMAK GEREKİR. Askı şeridi sentetik bir malzemedir. Bazı ülkelerde vajinal mesh kullanımıyla ilgili kısıtlamalar ve tartışmalar olmuştur; bu tartışmanın büyük bölümü ORGAN SARKMASI için kullanılan geniş yüzeyli meshlerle ilgilidir, idrar kaçırma için kullanılan dar orta üretral şeritle değil. Yine de şeridin kalıcı bir implant olduğu, nadiren ağrı, erozyon veya çıkarılma gerekliliği doğurabileceği hastaya ameliyattan önce söylenmelidir. Bu konuyu konuşmayan bir hekimden ikinci görüş isteyin.',
        'AMELİYAT İLK SEÇENEK DEĞİLDİR. Önce pelvik taban kas egzersizleri (Kegel), kilo verme, kabızlığın giderilmesi, sigaranın bırakılması ve kronik öksürüğün tedavisi denenir. Düzgün yapılan pelvik taban egzersizi birçok kadında ölçülebilir fayda sağlar. Bu basamak atlanmamalıdır; atlanırsa ameliyat sonrası beklenti de gerçekçi olmaz.',
        'ÇOCUK İSTEĞİ OLAN KADINLARDA PLAN DEĞİŞİR. Doğumdan sonra şikâyetin yeniden ortaya çıkma ihtimali olduğu için, gebelik planı olan kadınlarda ameliyat genellikle ertelenir. Bu bir ret değil, sonucun kalıcı olmasını sağlama çabasıdır.',
        'TOT ve TVT, aynı mantıkla çalışan iki askı yöntemidir; fark, şeridin vücuttan geçtiği yoldur. TOT kasıktan (obturator delikten), TVT ise karın arkasından (retropubik) geçer. İkisinin de yerleşik kullanımı vardır ve seçim; hastanın anatomisine, daha önce geçirdiği ameliyatlara ve idrar kanalının kendi kapanma gücüne göre yapılır.'
      ],
      eligibility: {
        suitable: [
          'Basınç artışıyla (öksürme, hapşırma, ağırlık kaldırma) idrar kaçıran kadınlar',
          'Pelvik taban egzersizlerinden yeterli fayda görmeyen kadınlar',
          'Şikâyeti günlük yaşamını, sosyal hayatını veya egzersiz alışkanlığını kısıtlayan kadınlar',
          'Muayene ve testlerle stres tipi kaçırma doğrulanmış kadınlar',
          'Doğum planı tamamlanmış kadınlar'
        ],
        notSuitable: [
          'Şikâyetinin asıl kaynağı sıkışma (aşırı aktif mesane) olan kadınlar — askı beklenen faydayı vermez',
          'Gebelik planı olan kadınlar: ameliyat doğum sonrasına ertelenir',
          'Tedavi edilmemiş idrar yolu enfeksiyonu olanlar: önce enfeksiyon tedavi edilir',
          'Mesanesini tam boşaltamayan ve işeme sonrası kalan idrarı yüksek olan kadınlar — önce bu değerlendirilir',
          'Belirgin organ sarkması olan kadınlarda askı tek başına yeterli olmayabilir; plan birlikte yapılır',
          'Pelvik taban egzersizi henüz hiç denenmemiş, hafif şikâyeti olan kadınlar'
        ]
      },
      technology: [
        'Orta üretral askı şeridi (transobturator yol)',
        'Ped testi ve işeme günlüğü ile şikâyetin nesnel olarak ölçülmesi',
        'Üroflowmetri ve işeme sonrası kalan idrar ölçümü',
        'Seçilmiş hastalarda ürodinami — şikâyetin stres mi sıkışma mı olduğunun ayrımı',
        'Gerekli olgularda sistoskopi',
        'Pelvik taban kaslarının muayene ile değerlendirilmesi'
      ],
      surgeonExperience: {
        caseVolume: '',
        note: 'İdrar kaçırma cerrahisinde sonucu belirleyen, ameliyatın kendisinden çok doğru hastanın seçilmesidir: stres tipi doğru tanınmazsa en iyi uygulanmış askı bile hastayı memnun etmez. Doç. Dr. Müslüm Ergün’ün ekibinin stres inkontinansta askı yöntemlerini karşılaştıran hakemli bir yayını bulunmaktadır; burada yalnızca atıf yapılmaktadır, sonuç veya başarı oranı tanıtım unsuru olarak kullanılmamaktadır.'
      },
      timeline: [
        { when: 'Uzaktan', title: 'Ön değerlendirme', body: 'Şikâyetinizin tipi (basınçla mı, sıkışmayla mı), doğum öyküsü, geçirilmiş ameliyatlar, kullandığınız ilaçlar ve varsa önceki jinekolojik/ürolojik raporlar incelenir. Birkaç günlük işeme günlüğü tutmanız istenebilir.' },
        { when: '1. Gün', title: 'Muayene ve testler', body: 'Jinekolojik muayene, öksürük testi, üroflowmetri, işeme sonrası kalan idrar ölçümü, idrar tahlili ve kültürü. Gerekirse ürodinami yapılır. Kültürde üreme varsa ameliyat ertelenir.' },
        { when: '2. Gün', title: 'Ameliyat', body: 'Spinal veya genel anestezi altında vajen ön duvarından küçük bir kesi yapılır, şerit üretranın orta bölümünün altına yerleştirilir ve her iki kasıktan dışarı alınarak gerginliği ayarlanır. Gerginlik ayarı bu ameliyatın en kritik adımıdır: fazla gergin bırakmak idrar yapmayı zorlaştırır.' },
        { when: '2.–3. Gün', title: 'Taburculuk', body: 'Çoğu hasta aynı gün veya ertesi gün taburcu olur. Taburculuktan önce idrarı rahat yapıp yapmadığınız ve mesanede idrar kalıp kalmadığı kontrol edilir.' },
        { when: '4.–7. Gün', title: 'Kontrol', body: 'Yara yeri, idrar akımı ve kalan idrar değerlendirilir. Dönüş uçuşu bu kontrolden sonraya planlanır.' },
        { when: '6. hafta', title: 'Sonuç değerlendirmesi', body: 'Cinsel yaşama ve ağır aktiviteye dönüş bu dönemde konuşulur. Şikâyetin ne ölçüde düzeldiği ped kullanımı üzerinden değerlendirilir.' }
      ],
      risks: [
        'İDRAR YAPMAKTA ZORLANMA: Şerit fazla gergin kaldığında akım zayıflar, mesane tam boşalmaz ve geçici olarak sonda gerekebilir. Az sayıda hastada şeridin gevşetilmesi veya kesilmesi gerekir',
        'YENİ ORTAYA ÇIKAN SIKIŞMA HİSSİ: Ameliyattan sonra bazı kadınlarda sık idrara çıkma ve ani sıkışma başlayabilir. Çoğu zaman geçicidir, bir kısmında ilaç tedavisi gerekir',
        'ŞERİDE BAĞLI AĞRI: Kasık veya uyluk iç yüzünde ağrı görülebilir. Genellikle haftalar içinde geriler; az sayıda hastada kalıcı olabilir',
        'EROZYON: Şeridin vajen duvarından veya nadiren idrar kanalından açığa çıkması. Akıntı, kanama veya cinsel ilişkide eşin rahatsızlık hissetmesiyle fark edilir; ek bir işlem gerektirir',
        'İdrar yolu enfeksiyonu',
        'Ameliyat sırasında mesanenin veya idrar kanalının yaralanması — seyrek, fark edildiğinde aynı seansta onarılır',
        'Kanama ve hematom',
        'ŞİKÂYETİN TAM GEÇMEMESİ VEYA ZAMANLA GERİ DÖNMESİ: Askı, idrar kaçırmayı azaltmayı hedefler; hiçbir yöntem kalıcı ve tam kuruluk garanti edemez',
        'Şeridin kalıcı bir implant olduğu ve gerekirse çıkarılmasının ilk ameliyattan daha zor olduğu'
      ],
      alternatives: [
        'Pelvik taban kas egzersizleri (Kegel) — düzgün öğretildiğinde birçok kadında ölçülebilir fayda sağlar; ilk basamaktır',
        'Pelvik taban fizyoterapisi ve biofeedback — egzersizi doğru yapmakta zorlananlarda',
        'Yaşam tarzı düzenlemesi — kilo verme, kabızlığın giderilmesi, sigaranın bırakılması, kronik öksürüğün tedavisi',
        'Vajinal pesser (destek halkası) — ameliyat istemeyen veya uygun olmayan kadınlarda',
        'Üretral dolgu maddesi enjeksiyonu — daha az girişimsel; etkisi genellikle daha kısa sürelidir ve tekrarlanabilir',
        'TVT (retropubik askı) — aynı mantıkta çalışan, şeridin farklı bir yoldan geçtiği yöntem',
        'Otolog fasya askısı — hastanın kendi dokusundan hazırlanan askı; sentetik materyal istemeyen veya mesh sorunu yaşamış hastalarda',
        'Sıkışma tipi baskınsa mesane tedavisi — davranış tedavisi, ilaç veya mesane botoksu; askı değil'
      ],
      comparison: {
        title: 'TOT, TVT ve dolgu maddesi: hangi denge size uyuyor',
        columns: ['Ölçüt', 'TOT (transobturator)', 'TVT (retropubik)', 'Dolgu maddesi'],
        rows: [
          { label: 'Şeridin yolu', values: ['Kasıktan', 'Karın arkasından', 'Şerit yok'] },
          { label: 'Mesane yaralanma riski', values: ['Daha düşük', 'Görece daha yüksek', 'Çok düşük'] },
          { label: 'Kasık/uyluk ağrısı', values: ['Daha sık bildirilir', 'Daha seyrek', 'Beklenmez'] },
          { label: 'İdrar yapmada zorlanma', values: ['Daha seyrek', 'Daha sık bildirilir', 'Seyrek'] },
          { label: 'Girişimsellik', values: ['Orta', 'Orta', 'Düşük'] },
          { label: 'Etkinin süresi', values: ['Uzun dönem veri mevcut', 'Uzun dönem veri mevcut', 'Genellikle daha kısa; tekrar gerekebilir'] },
          { label: 'Kalıcı implant', values: ['Var', 'Var', 'Yok'] },
          { label: 'Hastanede kalış', values: ['Günübirlik – 1 gece', 'Günübirlik – 1 gece', 'Günübirlik'] }
        ],
        note: 'Doğru soru "hangisi daha güçlü" değil, "benim için hangi denge uygun" sorusudur. Kalıcı bir implant istemiyorsanız bunu açıkça söyleyin; seçenekler buna göre değişir. İdrar kanalının kendi kapanma gücü zayıfsa yöntem seçimi de farklılaşır.'
      },
      recovery: [
        { period: 'İlk 48 saat', body: 'Kasıkta gerginlik ve hafif ağrı olağandır. Bol sıvı alınır. İdrar yapamama, ateş veya yoğun kanama durumunda derhal başvurulmalıdır.' },
        { period: '1. hafta', body: 'Günlük işler yapılabilir; ağır kaldırmaktan ve ıkınmaktan kaçınılır. Kabızlık önlenir — ıkınmak ameliyatın ilk haftalarında en çok zarar veren şeydir.' },
        { period: '2.–4. hafta', body: 'Masa başı işe dönüş genellikle bu dönemdedir. Yürüyüş serbesttir; koşu, ağırlık ve karın kası çalışması ertelenir.' },
        { period: '6. hafta', body: 'Cinsel yaşama dönüş genellikle bu süreden sonra ve kontrol muayenesinden sonra konuşulur.' },
        { period: '3. ay', body: 'Sonuç bu dönemde netleşir. Ped kullanımındaki değişiklik, en anlaşılır sonuç ölçütüdür.' },
        { period: 'Uzun dönem', body: 'Kilo artışı, kronik öksürük ve kabızlık şikâyetin geri dönmesine katkıda bulunur. Pelvik taban egzersizlerini ameliyattan sonra da sürdürmek sonucu korumaya yardımcı olur.' }
      ],
      price: {
        from: 0,
        to: 0,
        currency: 'EUR',
        disclaimer:
          'Tutar; kullanılan askı materyaline, eşlik eden bir işlem (örneğin sarkma onarımı) yapılıp yapılmadığına ve hastanede kalış süresine göre değişir. Kalem kalem ayrılmış yazılı teklif, tetkikleriniz incelendikten sonra verilir.'
      },
      packageIncludes: [
        'Muayene ve kadın ürolojisi değerlendirmesi',
        'Üroflowmetri ve işeme sonrası kalan idrar ölçümü',
        'Kan ve idrar tetkikleri, idrar kültürü',
        'Gerekli görülen olgularda ürodinami',
        'Anestezi ve ameliyathane',
        'Askı materyali ve sarf malzemeleri',
        'Hastane yatışı',
        'Taburculuk öncesi idrar boşaltma kontrolü',
        'Dönüş öncesi kontrol muayenesi',
        'Havalimanı–hastane–otel transferleri',
        'Konaklama (hasta + 1 refakatçi)',
        'Tıbbi tercüman ve hasta koordinatörü',
        'Dönüşten sonra uzaktan takip'
      ],
      faqs: [
        { q: 'İdrar kaçırmam tamamen geçer mi?', a: 'Amaç kaçırmayı belirgin biçimde azaltmak ve ped ihtiyacını ortadan kaldırmaya yaklaşmaktır. Hiçbir yöntem kalıcı ve tam kuruluk garanti edemez; bunu söyleyen bir yere değil, sonucu ped kullanımıyla ölçen bir yere gidin.' },
        { q: 'Mesh (ağ) güvenli mi?', a: 'İdrar kaçırma için kullanılan orta üretral şerit, organ sarkması için kullanılan geniş yüzeyli meshten farklıdır ve yerleşik bir kullanımı vardır. Yine de kalıcı bir implanttır; nadiren ağrı, erozyon veya çıkarılma gerekliliği doğurabilir. Bu riskleri konuşmadan sizi ameliyata alan bir hekimden ikinci görüş isteyin.' },
        { q: 'Sentetik materyal istemiyorum, alternatif var mı?', a: 'Evet. Kendi dokunuzdan hazırlanan otolog fasya askısı, üretral dolgu maddesi, pesser ve pelvik taban fizyoterapisi seçenekleri vardır. Tercihinizi baştan söyleyin; plan buna göre yapılır.' },
        { q: 'Ameliyattan sonra idrar yapmakta zorlanır mıyım?', a: 'Şeridin gerginliği doğru ayarlandığında genellikle hayır. Fazla gergin kalırsa akım zayıflar ve mesane tam boşalmaz; bu nedenle taburculuktan önce kalan idrar ölçülür. Az sayıda hastada şeridin gevşetilmesi gerekir.' },
        { q: 'Sıkışma şikâyetim de var, bu ameliyat onu da çözer mi?', a: 'Hayır. TOT yalnızca basınçla kaçırmaya yöneliktir. Sıkışma baskınsa askı yarar sağlamaz, hatta sıkışmayı artırabilir. Karışık tipte hangi şikâyetin baskın olduğu ameliyattan önce belirlenir ve plan buna göre yapılır.' },
        { q: 'Doğum yapmayı planlıyorum, şimdi ameliyat olabilir miyim?', a: 'Genellikle önerilmez. Doğumdan sonra şikâyetin yeniden ortaya çıkma ihtimali vardır ve ameliyatın faydası kaybolabilir. Plan, doğum sonrasına ertelenir.' },
        { q: 'Ne zaman işe dönebilirim?', a: 'Masa başı bir işte genellikle 1–2 hafta. Ağır kaldırma gerektiren işlerde 4–6 hafta beklenir. Erken dönemde ıkınmak ve ağır kaldırmak sonucu doğrudan bozabilir.' },
        { q: 'Cinsel yaşamımı etkiler mi?', a: 'Genellikle olumsuz etkilemez; idrar kaçırma korkusu ortadan kalktığı için birçok kadında tersi olur. Cinsel yaşama dönüş genellikle altıncı haftadan ve kontrol muayenesinden sonra konuşulur. Ağrı veya eşin bir şey hissetmesi durumunda mutlaka bildirin.' },
        { q: 'Şerit ileride çıkarılabilir mi?', a: 'Gerektiğinde çıkarılabilir, ancak bu ilk ameliyattan daha zordur ve her zaman tamamı çıkarılamayabilir. Bu nedenle kalıcı bir implant kararı, baştan bilinçli verilmelidir.' },
        { q: 'Önce egzersiz denemem şart mı?', a: 'Hafif ve orta şikâyette evet. Düzgün öğretilmiş pelvik taban egzersizi birçok kadında ölçülebilir fayda sağlar ve ameliyat gerekmeyebilir. Bu basamağı atlayan bir plan eksiktir.' },
        { q: 'Türkiye’de ne kadar kalmalıyım?', a: 'Genellikle 5–7 gün. Kontrol muayenesi burada yapıldığı için dönüş uçuşunu bu muayeneden sonraya planlayın.' },
        { q: 'Hangi belgeleri göndermeliyim?', a: 'Varsa ürodinami sonucu, üroflowmetri ve işeme sonrası kalan idrar ölçümü, jinekolojik muayene notları, geçirilmiş ameliyatların raporları, idrar tahlili ve kullandığınız ilaçların listesi. Ayrıca birkaç günlük işeme günlüğü çok işe yarar.' }
      ],
      sources: [
        {
          label: 'EAU Guidelines on Non-neurogenic Female LUTS — Avrupa Üroloji Derneği',
          url: 'https://uroweb.org/guidelines/non-neurogenic-female-luts'
        },
        {
          label:
            'Sağır S, Başgut Ö, Tunçekin A, Ergün M, Turğut Ö. Comparison of the Transobturator Tape and Minisling Methods in the Treatment of Stress Urinary Incontinence. Archivos Españoles de Urología, 2025.'
        }
      ]
    },
    en: {
      title: 'TOT (Transobturator Tape) Surgery',
      summary:
        'Surgery for stress urinary incontinence — leaking when you cough, sneeze or lift — in which a narrow tape is placed beneath the urethra to restore its support.',
      metaTitle: 'TOT Surgery: Incontinence Surgery for Women Explained',
      metaDescription:
        'TOT sling surgery: who it suits, how it is done, how it differs from TVT, what you should know about mesh, the risks, recovery and honest expectations.',
      quickFacts: {
        duration: '20–40 minutes',
        anesthesia: 'Spinal or general anaesthesia',
        hospitalStay: 'Day case – 1 night',
        stayInTurkey: '5–7 days',
        catheter: 'Usually a few hours – 1 day',
        returnToWork: '1–2 weeks (desk work), 4–6 weeks (heavy work)',
        flightClearance: 'After the review appointment'
      },
      definition: [
        'Stress incontinence is involuntary leakage at moments when pressure inside the abdomen rises — coughing, sneezing, laughing, lifting, climbing stairs. The cause is not the bladder but weakening of the structures that support the urethra. Childbirth, the menopause, chronic cough, constipation and weight all contribute.',
        'TOT (transobturator tape) restores that support by placing a narrow, soft tape beneath the mid-portion of the urethra. The tape does not squeeze the urethra; it simply lies beneath it like a hammock at the moment pressure rises and prevents the channel from moving downwards. A small incision in the anterior vaginal wall and one small exit point in each groin are used.',
        'THERE IS NO RIGHT OPERATION WITHOUT THE RIGHT DIAGNOSIS. There are three main types of leakage: stress (with pressure), urgency (not reaching the toilet in time) and mixed. TOT addresses only the STRESS type. If urgency is the real source, a sling will not deliver the expected benefit and may even worsen the urgency. The type of symptom is therefore established in detail before surgery.',
        'THE QUESTION OF MESH MUST BE DISCUSSED OPENLY. The tape is a synthetic material. Some countries have introduced restrictions and there has been public debate about vaginal mesh; most of that debate concerns the large-surface meshes used for PROLAPSE, not the narrow mid-urethral tape used for incontinence. Even so, the patient must be told before surgery that the tape is a permanent implant and can rarely cause pain, erosion or the need for removal. If a surgeon will not discuss this, seek a second opinion.',
        'SURGERY IS NOT THE FIRST OPTION. Pelvic floor exercises, weight loss, treating constipation, stopping smoking and treating a chronic cough come first. Properly taught pelvic floor exercise gives measurable benefit in many women. This step should not be skipped; skipping it also makes post-operative expectations unrealistic.',
        'THE PLAN CHANGES IN WOMEN WHO WANT CHILDREN. Because symptoms may return after delivery, surgery is usually deferred in women planning a pregnancy. That is not a refusal; it is an attempt to make the result last.',
        'TOT and TVT are two sling methods working on the same principle; the difference is the route the tape takes through the body. TOT passes through the groin (the obturator foramen), TVT behind the pubic bone (retropubic). Both are established, and the choice depends on anatomy, previous surgery and the intrinsic closing strength of the urethra.'
      ],
      eligibility: {
        suitable: [
          'Women who leak when pressure rises — coughing, sneezing, lifting',
          'Women who gain insufficient benefit from pelvic floor exercises',
          'Women whose symptoms restrict daily life, social life or exercise',
          'Women in whom stress-type leakage has been confirmed by examination and testing',
          'Women who have completed their family'
        ],
        notSuitable: [
          'Women whose real problem is urgency (overactive bladder) — a sling will not deliver the expected benefit',
          'Women planning a pregnancy: surgery is deferred until after delivery',
          'Women with untreated urinary infection: the infection is treated first',
          'Women who do not empty the bladder fully and have a high residual volume — this is assessed first',
          'Women with significant prolapse, in whom a sling alone may not be enough; the plan is made together',
          'Women with mild symptoms who have not yet tried pelvic floor exercise'
        ]
      },
      technology: [
        'Mid-urethral sling tape (transobturator route)',
        'Pad test and bladder diary to measure symptoms objectively',
        'Uroflowmetry and post-void residual measurement',
        'Urodynamics in selected patients — to distinguish stress from urgency',
        'Cystoscopy where required',
        'Clinical assessment of the pelvic floor muscles'
      ],
      surgeonExperience: {
        caseVolume: '',
        note: 'In incontinence surgery the result is determined less by the operation than by choosing the right patient: if the stress type is not correctly identified, even a perfectly placed sling will not satisfy her. Assoc. Prof. Dr. Müslüm Ergün’s team has a peer-reviewed publication comparing sling methods in stress incontinence; it is cited here for reference only, and no outcome or success rate is presented as a promotional claim.'
      },
      timeline: [
        { when: 'Remotely', title: 'Initial assessment', body: 'The type of your symptoms (with pressure or with urgency), obstetric history, previous surgery, your medication and any gynaecological or urological reports are reviewed. You may be asked to keep a bladder diary for a few days.' },
        { when: 'Day 1', title: 'Examination and tests', body: 'Gynaecological examination, cough test, uroflowmetry, post-void residual, urinalysis and culture. Urodynamics if required. If the culture grows an organism, surgery is postponed.' },
        { when: 'Day 2', title: 'Surgery', body: 'Under spinal or general anaesthesia a small incision is made in the anterior vaginal wall, the tape is placed beneath the mid-urethra and brought out through each groin, where its tension is set. Setting that tension is the most critical step: leaving it too tight makes voiding difficult.' },
        { when: 'Days 2–3', title: 'Discharge', body: 'Most patients go home the same or the following day. Before discharge we check that you are voiding comfortably and that no significant urine remains in the bladder.' },
        { when: 'Days 4–7', title: 'Review', body: 'The wound, the stream and the residual volume are assessed. The return flight is planned for after this review.' },
        { when: 'Week 6', title: 'Assessment of the result', body: 'Return to sexual activity and to heavy exertion is discussed at this point. How far the symptoms have improved is judged by pad use.' }
      ],
      risks: [
        'DIFFICULTY VOIDING: if the tape is left too tight the stream weakens, the bladder does not empty fully and a catheter may be needed temporarily. A small number of women need the tape loosened or divided',
        'NEW URGENCY: some women develop frequency and sudden urgency after surgery. It is usually temporary; some need medication',
        'PAIN RELATED TO THE TAPE: pain in the groin or inner thigh can occur. It usually settles within weeks; in a small number it persists',
        'EROSION: the tape becoming exposed through the vaginal wall or, rarely, into the urinary channel. It shows as discharge, bleeding or a partner feeling something during intercourse, and requires a further procedure',
        'Urinary tract infection',
        'Injury to the bladder or urethra during surgery — uncommon, and repaired in the same sitting when recognised',
        'Bleeding and haematoma',
        'SYMPTOMS NOT FULLY RESOLVING, OR RETURNING OVER TIME: a sling aims to reduce leakage; no method can guarantee permanent and complete dryness',
        'The tape is a permanent implant, and removing it later is harder than the original operation'
      ],
      alternatives: [
        'Pelvic floor exercises — properly taught, they give measurable benefit in many women; this is the first step',
        'Pelvic floor physiotherapy and biofeedback — for women who struggle to perform the exercises correctly',
        'Lifestyle measures — weight loss, treating constipation, stopping smoking, treating a chronic cough',
        'Vaginal pessary — for women who do not want, or are not suitable for, surgery',
        'Urethral bulking injection — less invasive; the effect is usually shorter-lived and can be repeated',
        'TVT (retropubic sling) — the same principle with the tape taking a different route',
        'Autologous fascial sling — made from the woman’s own tissue, for those who do not want synthetic material or who have had a mesh problem',
        'Treatment of the bladder where urgency predominates — behavioural therapy, medication or bladder Botox, rather than a sling'
      ],
      comparison: {
        title: 'TOT, TVT and bulking agent: which trade-off suits you',
        columns: ['Criterion', 'TOT (transobturator)', 'TVT (retropubic)', 'Bulking agent'],
        rows: [
          { label: 'Route of the tape', values: ['Through the groin', 'Behind the pubic bone', 'No tape'] },
          { label: 'Risk of bladder injury', values: ['Lower', 'Relatively higher', 'Very low'] },
          { label: 'Groin or thigh pain', values: ['Reported more often', 'Less often', 'Not expected'] },
          { label: 'Difficulty voiding', values: ['Less often', 'Reported more often', 'Uncommon'] },
          { label: 'Invasiveness', values: ['Moderate', 'Moderate', 'Low'] },
          { label: 'Durability of the effect', values: ['Long-term data available', 'Long-term data available', 'Usually shorter; may need repeating'] },
          { label: 'Permanent implant', values: ['Yes', 'Yes', 'No'] },
          { label: 'Hospital stay', values: ['Day case – 1 night', 'Day case – 1 night', 'Day case'] }
        ],
        note: 'The right question is not "which is stronger" but "which trade-off suits me". If you do not want a permanent implant, say so plainly; the options change accordingly. Where the urethra’s own closing strength is weak, the choice of method also differs.'
      },
      recovery: [
        { period: 'First 48 hours', body: 'Tightness and mild pain in the groin are usual. Drink plenty. Inability to pass urine, fever or heavy bleeding require immediate contact.' },
        { period: 'Week 1', body: 'Ordinary daily activities are fine; lifting and straining are avoided. Constipation is prevented — straining is the single most damaging thing in the first weeks.' },
        { period: 'Weeks 2–4', body: 'Return to desk work usually falls here. Walking is free; running, weights and abdominal exercise wait.' },
        { period: 'Week 6', body: 'Return to sexual activity is usually discussed after this point and after the review appointment.' },
        { period: 'Month 3', body: 'The result becomes clear. The change in pad use is the most intelligible measure of it.' },
        { period: 'Long term', body: 'Weight gain, chronic cough and constipation all contribute to symptoms returning. Continuing pelvic floor exercises after surgery helps protect the result.' }
      ],
      price: {
        from: 0,
        to: 0,
        currency: 'EUR',
        disclaimer:
          'The amount depends on the sling material used, on whether an additional procedure (such as prolapse repair) is performed, and on the length of hospital stay. An itemised written quotation is given once your tests have been reviewed.'
      },
      packageIncludes: [
        'Examination and female urology assessment',
        'Uroflowmetry and post-void residual measurement',
        'Blood and urine tests, urine culture',
        'Urodynamics where required',
        'Anaesthesia and operating theatre',
        'Sling material and consumables',
        'Hospital stay',
        'Check of bladder emptying before discharge',
        'Review appointment before you travel home',
        'Airport–hospital–hotel transfers',
        'Accommodation (patient plus one companion)',
        'Medical interpreter and patient coordinator',
        'Remote follow-up after you return home'
      ],
      faqs: [
        { q: 'Will my leaking stop completely?', a: 'The aim is to reduce leakage markedly and to come close to removing the need for pads. No method can guarantee permanent and complete dryness; choose a centre that measures the result by pad use rather than one that promises dryness.' },
        { q: 'Is mesh safe?', a: 'The mid-urethral tape used for incontinence differs from the large-surface mesh used for prolapse and has established use. It is nonetheless a permanent implant and can rarely cause pain, erosion or the need for removal. If a surgeon takes you to theatre without discussing these risks, seek a second opinion.' },
        { q: 'I do not want synthetic material — are there alternatives?', a: 'Yes. An autologous fascial sling made from your own tissue, urethral bulking agents, a pessary and pelvic floor physiotherapy are all options. Say what you prefer at the outset and the plan is built around it.' },
        { q: 'Will I have difficulty passing urine afterwards?', a: 'Usually not, when the tension of the tape is set correctly. If it is left too tight the stream weakens and the bladder does not empty fully, which is why the residual volume is measured before discharge. A small number of women need the tape loosened.' },
        { q: 'I also have urgency — will this operation fix that?', a: 'No. TOT addresses leakage with pressure only. Where urgency predominates a sling does not help and may make it worse. In mixed symptoms, which component predominates is established before surgery and the plan follows from that.' },
        { q: 'I am planning to have children — can I have surgery now?', a: 'Usually it is not advised. Symptoms may return after delivery and the benefit of the operation can be lost. The plan is deferred until after you have completed your family.' },
        { q: 'When can I go back to work?', a: 'Usually 1–2 weeks for desk work. For jobs involving heavy lifting, 4–6 weeks. Straining and lifting early on can directly undo the result.' },
        { q: 'Will it affect my sex life?', a: 'Usually not adversely; for many women the opposite, because the fear of leaking is gone. Return to sexual activity is generally discussed after six weeks and after the review. Report any pain, or anything your partner feels, without delay.' },
        { q: 'Can the tape be removed later?', a: 'It can be removed if necessary, but that is harder than the original operation and complete removal is not always possible. A permanent implant is therefore a decision to take knowingly from the start.' },
        { q: 'Do I really have to try exercises first?', a: 'With mild and moderate symptoms, yes. Properly taught pelvic floor exercise gives measurable benefit in many women and surgery may not be needed. A plan that skips this step is incomplete.' },
        { q: 'How long should I stay in Türkiye?', a: 'Usually 5–7 days. Because the review is carried out here, plan your return flight for after that appointment.' },
        { q: 'What documents should I send?', a: 'Any urodynamics result, uroflowmetry and post-void residual, gynaecological examination notes, reports of previous surgery, a urinalysis and your medication list. A bladder diary kept over a few days is also very useful.' }
      ],
      sources: [
        {
          label: 'EAU Guidelines on Non-neurogenic Female LUTS — European Association of Urology',
          url: 'https://uroweb.org/guidelines/non-neurogenic-female-luts'
        },
        {
          label:
            'Sağır S, Başgut Ö, Tunçekin A, Ergün M, Turğut Ö. Comparison of the Transobturator Tape and Minisling Methods in the Treatment of Stress Urinary Incontinence. Archivos Españoles de Urología, 2025.'
        }
      ]
    },
    de: {
      title: 'TOT-Schlingenoperation (transobturatorisches Band)',
      summary:
        'Operation bei Belastungsinkontinenz — Harnverlust beim Husten, Niesen oder Heben —, bei der ein schmales Band unter die Harnröhre gelegt wird, um deren Unterstützung wiederherzustellen.',
      metaTitle: 'TOT-Operation: Inkontinenzchirurgie bei Frauen erklärt',
      metaDescription:
        'TOT-Schlingenoperation: für wen sie geeignet ist, wie sie abläuft, der Unterschied zur TVT, was man über Netze wissen sollte, Risiken, Heilung und ehrliche Erwartungen.',
      quickFacts: {
        duration: '20–40 Minuten',
        anesthesia: 'Spinal- oder Vollnarkose',
        hospitalStay: 'Ambulant – 1 Nacht',
        stayInTurkey: '5–7 Tage',
        catheter: 'Meist wenige Stunden – 1 Tag',
        returnToWork: '1–2 Wochen (Bürotätigkeit), 4–6 Wochen (schwere Arbeit)',
        flightClearance: 'Nach der Kontrolluntersuchung'
      },
      definition: [
        'Belastungsinkontinenz ist unwillkürlicher Harnverlust in Momenten, in denen der Druck im Bauchraum steigt — Husten, Niesen, Lachen, Heben, Treppensteigen. Die Ursache liegt nicht in der Blase, sondern in der Schwächung der Strukturen, die die Harnröhre stützen. Geburten, Wechseljahre, chronischer Husten, Verstopfung und Gewicht tragen dazu bei.',
        'Die TOT-Operation stellt diese Unterstützung wieder her, indem ein schmales, weiches Band unter den mittleren Abschnitt der Harnröhre gelegt wird. Das Band schnürt nicht ein; es liegt im Moment der Druckerhöhung wie eine Hängematte darunter und verhindert das Absinken des Kanals. Verwendet werden ein kleiner Schnitt in der vorderen Scheidenwand und je eine kleine Austrittsstelle in beiden Leisten.',
        'OHNE RICHTIGE DIAGNOSE GIBT ES KEINE RICHTIGE OPERATION. Es gibt drei Hauptformen des Harnverlusts: Belastung (bei Druck), Drang (nicht rechtzeitig zur Toilette) und Mischform. Die TOT richtet sich ausschließlich gegen die BELASTUNGSFORM. Liegt die eigentliche Ursache im Drang, bringt eine Schlinge nicht den erwarteten Nutzen und kann den Drang sogar verstärken. Deshalb wird die Form der Beschwerden vor der Operation genau bestimmt.',
        'ÜBER DAS THEMA NETZ MUSS OFFEN GESPROCHEN WERDEN. Das Band ist ein synthetisches Material. In einigen Ländern gab es Einschränkungen und eine öffentliche Debatte über vaginale Netze; diese Debatte betrifft überwiegend die großflächigen Netze für SENKUNGEN, nicht das schmale mittelurethrale Band gegen Inkontinenz. Dennoch muss der Patientin vor der Operation gesagt werden, dass das Band ein dauerhaftes Implantat ist und selten Schmerzen, eine Erosion oder die Notwendigkeit einer Entfernung verursachen kann. Wer darüber nicht spricht, sollte eine Zweitmeinung veranlassen.',
        'DIE OPERATION IST NICHT DIE ERSTE OPTION. Zuerst kommen Beckenbodenübungen, Gewichtsabnahme, Behandlung der Verstopfung, Rauchstopp und Therapie eines chronischen Hustens. Richtig angeleitetes Beckenbodentraining bringt vielen Frauen messbaren Nutzen. Dieser Schritt darf nicht übersprungen werden; sonst bleiben auch die Erwartungen nach der Operation unrealistisch.',
        'BEI KINDERWUNSCH ÄNDERT SICH DER PLAN. Da die Beschwerden nach einer Geburt wiederkehren können, wird bei geplanter Schwangerschaft meist abgewartet. Das ist keine Ablehnung, sondern der Versuch, das Ergebnis dauerhaft zu machen.',
        'TOT und TVT sind zwei nach demselben Prinzip arbeitende Schlingenverfahren; der Unterschied liegt im Weg, den das Band im Körper nimmt. Die TOT verläuft durch die Leiste (das Foramen obturatorium), die TVT hinter dem Schambein (retropubisch). Beide sind etabliert; die Wahl richtet sich nach Anatomie, Voroperationen und der Eigenverschlusskraft der Harnröhre.'
      ],
      eligibility: {
        suitable: [
          'Frauen, die bei Druckanstieg (Husten, Niesen, Heben) Urin verlieren',
          'Frauen, die von Beckenbodenübungen nicht genug profitieren',
          'Frauen, deren Beschwerden Alltag, soziales Leben oder Sport einschränken',
          'Frauen, bei denen die Belastungsform durch Untersuchung und Tests bestätigt ist',
          'Frauen mit abgeschlossener Familienplanung'
        ],
        notSuitable: [
          'Frauen, deren eigentliches Problem der Drang (überaktive Blase) ist — eine Schlinge bringt nicht den erwarteten Nutzen',
          'Frauen mit Kinderwunsch: Die Operation wird auf die Zeit nach der Geburt verschoben',
          'Frauen mit unbehandeltem Harnwegsinfekt: Der Infekt wird zuerst behandelt',
          'Frauen, die die Blase nicht vollständig entleeren und hohe Restharnmengen haben — das wird zuerst abgeklärt',
          'Frauen mit ausgeprägter Senkung, bei denen eine Schlinge allein nicht genügt; der Plan wird gemeinsam erstellt',
          'Frauen mit leichten Beschwerden, die noch kein Beckenbodentraining versucht haben'
        ]
      },
      technology: [
        'Mittelurethrales Schlingenband (transobturatorischer Weg)',
        'Vorlagentest und Miktionstagebuch zur objektiven Messung der Beschwerden',
        'Uroflowmetrie und Restharnmessung',
        'Urodynamik bei ausgewählten Patientinnen — zur Unterscheidung von Belastung und Drang',
        'Zystoskopie bei Bedarf',
        'Klinische Beurteilung der Beckenbodenmuskulatur'
      ],
      surgeonExperience: {
        caseVolume: '',
        note: 'In der Inkontinenzchirurgie bestimmt weniger die Operation als die richtige Patientinnenauswahl das Ergebnis: Wird die Belastungsform nicht korrekt erkannt, stellt auch eine perfekt platzierte Schlinge nicht zufrieden. Das Team von Doz. Dr. Müslüm Ergün hat eine begutachtete Arbeit zum Vergleich von Schlingenverfahren bei Belastungsinkontinenz; sie wird hier ausschließlich als Beleg zitiert, Ergebnisse oder Erfolgsquoten werden nicht als Werbeaussage verwendet.'
      },
      timeline: [
        { when: 'Aus der Ferne', title: 'Erstbeurteilung', body: 'Die Art Ihrer Beschwerden (bei Druck oder bei Drang), Geburten, Voroperationen, Ihre Medikation und vorhandene gynäkologische oder urologische Befunde werden gesichtet. Sie werden möglicherweise gebeten, einige Tage ein Miktionstagebuch zu führen.' },
        { when: 'Tag 1', title: 'Untersuchung und Tests', body: 'Gynäkologische Untersuchung, Hustentest, Uroflowmetrie, Restharn, Urinbefund und Kultur. Bei Bedarf Urodynamik. Wächst in der Kultur ein Erreger, wird die Operation verschoben.' },
        { when: 'Tag 2', title: 'Operation', body: 'In Spinal- oder Vollnarkose wird ein kleiner Schnitt in der vorderen Scheidenwand angelegt, das Band unter die mittlere Harnröhre gelegt und über beide Leisten ausgeleitet, wo die Spannung eingestellt wird. Diese Einstellung ist der kritischste Schritt: Ein zu straffes Band erschwert das Wasserlassen.' },
        { when: 'Tag 2–3', title: 'Entlassung', body: 'Die meisten Patientinnen gehen am selben oder am Folgetag nach Hause. Vor der Entlassung wird geprüft, ob Sie beschwerdefrei Wasser lassen und ob Restharn verbleibt.' },
        { when: 'Tag 4–7', title: 'Kontrolle', body: 'Wunde, Harnstrahl und Restharn werden beurteilt. Der Rückflug wird nach diese Kontrolle gelegt.' },
        { when: 'Woche 6', title: 'Beurteilung des Ergebnisses', body: 'Rückkehr zu Sexualität und stärkerer Belastung wird jetzt besprochen. Wie weit die Beschwerden gebessert sind, wird am Vorlagenverbrauch gemessen.' }
      ],
      risks: [
        'ERSCHWERTES WASSERLASSEN: Ist das Band zu straff, wird der Strahl schwächer, die Blase entleert sich nicht vollständig und vorübergehend kann ein Katheter nötig werden. Bei wenigen Frauen muss das Band gelockert oder durchtrennt werden',
        'NEU AUFTRETENDER DRANG: Manche Frauen entwickeln nach der Operation häufigen und plötzlichen Harndrang. Meist vorübergehend; ein Teil benötigt Medikamente',
        'BANDBEZOGENE SCHMERZEN: Schmerzen in Leiste oder Oberschenkelinnenseite sind möglich. Sie klingen meist innerhalb von Wochen ab; bei wenigen bleiben sie bestehen',
        'EROSION: Das Band wird durch die Scheidenwand oder selten in den Harnkanal frei. Es zeigt sich durch Ausfluss, Blutung oder dadurch, dass der Partner beim Verkehr etwas spürt, und erfordert einen weiteren Eingriff',
        'Harnwegsinfekt',
        'Verletzung von Blase oder Harnröhre während der Operation — selten, bei Erkennung in derselben Sitzung versorgt',
        'Blutung und Hämatom',
        'DIE BESCHWERDEN BESSERN SICH NICHT VOLLSTÄNDIG ODER KEHREN MIT DER ZEIT ZURÜCK: Die Schlinge soll den Harnverlust vermindern; kein Verfahren kann dauerhafte und vollständige Trockenheit garantieren',
        'Das Band ist ein dauerhaftes Implantat; eine spätere Entfernung ist schwieriger als die Ersteingriff'
      ],
      alternatives: [
        'Beckenbodentraining — richtig angeleitet bringt es vielen Frauen messbaren Nutzen; das ist der erste Schritt',
        'Beckenbodenphysiotherapie und Biofeedback — wenn die Übungen schwerfallen',
        'Allgemeine Maßnahmen — Gewichtsabnahme, Verstopfung behandeln, Rauchstopp, chronischen Husten behandeln',
        'Vaginalpessar — für Frauen, die keine Operation wünschen oder dafür nicht geeignet sind',
        'Unterspritzung der Harnröhre (Bulking) — weniger eingreifend; die Wirkung hält meist kürzer und kann wiederholt werden',
        'TVT (retropubische Schlinge) — dasselbe Prinzip, anderer Weg des Bandes',
        'Autologe Faszienschlinge — aus körpereigenem Gewebe, für Frauen ohne Wunsch nach synthetischem Material oder nach Netzproblemen',
        'Bei überwiegendem Drang Behandlung der Blase — Verhaltenstherapie, Medikament oder Blasen-Botox statt Schlinge'
      ],
      comparison: {
        title: 'TOT, TVT und Bulking: welche Abwägung passt zu Ihnen',
        columns: ['Kriterium', 'TOT (transobturatorisch)', 'TVT (retropubisch)', 'Bulking'],
        rows: [
          { label: 'Weg des Bandes', values: ['Durch die Leiste', 'Hinter dem Schambein', 'Kein Band'] },
          { label: 'Risiko einer Blasenverletzung', values: ['Geringer', 'Relativ höher', 'Sehr gering'] },
          { label: 'Leisten- oder Oberschenkelschmerz', values: ['Häufiger berichtet', 'Seltener', 'Nicht zu erwarten'] },
          { label: 'Erschwertes Wasserlassen', values: ['Seltener', 'Häufiger berichtet', 'Selten'] },
          { label: 'Eingriffstiefe', values: ['Mittel', 'Mittel', 'Gering'] },
          { label: 'Dauerhaftigkeit der Wirkung', values: ['Langzeitdaten vorhanden', 'Langzeitdaten vorhanden', 'Meist kürzer; Wiederholung möglich'] },
          { label: 'Dauerhaftes Implantat', values: ['Ja', 'Ja', 'Nein'] },
          { label: 'Klinikaufenthalt', values: ['Ambulant – 1 Nacht', 'Ambulant – 1 Nacht', 'Ambulant'] }
        ],
        note: 'Die richtige Frage lautet nicht „was ist stärker", sondern „welche Abwägung passt zu mir". Wenn Sie kein dauerhaftes Implantat möchten, sagen Sie es offen; die Optionen ändern sich entsprechend. Ist die Eigenverschlusskraft der Harnröhre schwach, fällt auch die Verfahrenswahl anders aus.'
      },
      recovery: [
        { period: 'Erste 48 Stunden', body: 'Spannungsgefühl und leichte Schmerzen in der Leiste sind üblich. Viel trinken. Unvermögen zu urinieren, Fieber oder starke Blutung erfordern sofortigen Kontakt.' },
        { period: 'Woche 1', body: 'Alltägliche Tätigkeiten sind möglich; Heben und Pressen werden vermieden. Verstopfung wird verhindert — Pressen ist in den ersten Wochen das Schädlichste.' },
        { period: 'Woche 2–4', body: 'Die Rückkehr zur Büroarbeit fällt meist hierher. Spaziergänge sind frei; Laufen, Gewichte und Bauchmuskeltraining warten.' },
        { period: 'Woche 6', body: 'Die Rückkehr zur Sexualität wird meist nach diesem Zeitpunkt und nach der Kontrolle besprochen.' },
        { period: 'Monat 3', body: 'Das Ergebnis wird deutlich. Die Veränderung des Vorlagenverbrauchs ist der verständlichste Maßstab.' },
        { period: 'Langfristig', body: 'Gewichtszunahme, chronischer Husten und Verstopfung begünstigen ein Wiederauftreten. Das Beckenbodentraining auch nach der Operation fortzusetzen hilft, das Ergebnis zu bewahren.' }
      ],
      price: {
        from: 0,
        to: 0,
        currency: 'EUR',
        disclaimer:
          'Der Betrag hängt vom verwendeten Schlingenmaterial, von einem etwaigen Zusatzeingriff (etwa einer Senkungskorrektur) und von der Aufenthaltsdauer ab. Ein detailliertes schriftliches Angebot folgt nach Sichtung Ihrer Befunde.'
      },
      packageIncludes: [
        'Untersuchung und urogynäkologische Beurteilung',
        'Uroflowmetrie und Restharnmessung',
        'Blut- und Urinuntersuchungen, Urinkultur',
        'Urodynamik bei Bedarf',
        'Narkose und Operationssaal',
        'Schlingenmaterial und Verbrauchsbedarf',
        'Klinikaufenthalt',
        'Kontrolle der Blasenentleerung vor der Entlassung',
        'Kontrolluntersuchung vor der Rückreise',
        'Transfers Flughafen–Klinik–Hotel',
        'Unterkunft (Patientin und eine Begleitperson)',
        'Medizinischer Dolmetscher und Patientenkoordination',
        'Fernnachsorge nach der Rückkehr'
      ],
      faqs: [
        { q: 'Hört der Harnverlust ganz auf?', a: 'Ziel ist eine deutliche Verminderung und das weitgehende Wegfallen von Vorlagen. Kein Verfahren kann dauerhafte und vollständige Trockenheit garantieren; wählen Sie ein Zentrum, das das Ergebnis am Vorlagenverbrauch misst, statt eines, das Trockenheit verspricht.' },
        { q: 'Ist ein Netz sicher?', a: 'Das mittelurethrale Band gegen Inkontinenz unterscheidet sich vom großflächigen Netz bei Senkungen und ist etabliert. Dennoch ist es ein dauerhaftes Implantat und kann selten Schmerzen, Erosionen oder die Notwendigkeit einer Entfernung verursachen. Wird darüber nicht gesprochen, holen Sie eine Zweitmeinung ein.' },
        { q: 'Ich möchte kein synthetisches Material — gibt es Alternativen?', a: 'Ja. Eine autologe Faszienschlinge aus körpereigenem Gewebe, Unterspritzung, ein Pessar und Beckenbodenphysiotherapie sind Optionen. Sagen Sie Ihre Präferenz von Anfang an; der Plan wird darum herum gebaut.' },
        { q: 'Werde ich danach schwer Wasser lassen können?', a: 'Bei richtig eingestellter Spannung meist nicht. Ist das Band zu straff, wird der Strahl schwächer und die Blase entleert sich nicht vollständig; deshalb wird vor der Entlassung der Restharn gemessen. Bei wenigen Frauen muss gelockert werden.' },
        { q: 'Ich habe auch Drangbeschwerden — behebt die Operation die auch?', a: 'Nein. Die TOT richtet sich nur gegen Harnverlust bei Druck. Überwiegt der Drang, hilft eine Schlinge nicht und kann ihn verschlechtern. Bei Mischformen wird vorher bestimmt, welche Komponente überwiegt, und der Plan folgt daraus.' },
        { q: 'Ich möchte noch Kinder — kann ich jetzt operiert werden?', a: 'Meist wird davon abgeraten. Nach einer Geburt können die Beschwerden zurückkehren und der Nutzen verloren gehen. Der Plan wird auf die Zeit nach abgeschlossener Familienplanung verschoben.' },
        { q: 'Wann kann ich wieder arbeiten?', a: 'Bei Bürotätigkeit meist nach 1–2 Wochen. Bei schwerer körperlicher Arbeit 4–6 Wochen. Frühes Pressen und Heben kann das Ergebnis unmittelbar zunichtemachen.' },
        { q: 'Beeinflusst es mein Sexualleben?', a: 'Meist nicht negativ; für viele Frauen im Gegenteil, weil die Angst vor Harnverlust wegfällt. Die Rückkehr wird in der Regel nach sechs Wochen und nach der Kontrolle besprochen. Melden Sie Schmerzen oder etwas, das Ihr Partner spürt, unverzüglich.' },
        { q: 'Kann das Band später entfernt werden?', a: 'Es kann bei Bedarf entfernt werden, doch das ist schwieriger als der Ersteingriff und eine vollständige Entfernung ist nicht immer möglich. Ein dauerhaftes Implantat sollte man deshalb bewusst wählen.' },
        { q: 'Muss ich wirklich zuerst Übungen versuchen?', a: 'Bei leichten und mittleren Beschwerden ja. Richtig angeleitetes Beckenbodentraining bringt vielen Frauen messbaren Nutzen, und eine Operation kann entbehrlich sein. Ein Plan, der diesen Schritt überspringt, ist unvollständig.' },
        { q: 'Wie lange muss ich in der Türkei bleiben?', a: 'Meist 5–7 Tage. Da die Kontrolle hier erfolgt, legen Sie den Rückflug auf die Zeit danach.' },
        { q: 'Welche Unterlagen soll ich senden?', a: 'Ein etwaiges Urodynamik-Ergebnis, Uroflowmetrie und Restharn, gynäkologische Untersuchungsbefunde, Berichte früherer Operationen, einen Urinbefund und Ihre Medikamentenliste. Ein über einige Tage geführtes Miktionstagebuch ist ebenfalls sehr nützlich.' }
      ],
      sources: [
        {
          label: 'EAU-Leitlinie zu nicht-neurogenen LUTS der Frau — Europäische Gesellschaft für Urologie',
          url: 'https://uroweb.org/guidelines/non-neurogenic-female-luts'
        },
        {
          label:
            'Sağır S, Başgut Ö, Tunçekin A, Ergün M, Turğut Ö. Comparison of the Transobturator Tape and Minisling Methods in the Treatment of Stress Urinary Incontinence. Archivos Españoles de Urología, 2025.'
        }
      ]
    },
    fr: {
      title: 'Bandelette TOT (voie transobturatrice)',
      summary:
        'Intervention pour l’incontinence urinaire d’effort — fuites à la toux, à l’éternuement ou au port de charges — au cours de laquelle une bandelette étroite est placée sous l’urètre pour lui rendre son soutien.',
      metaTitle: 'Bandelette TOT : la chirurgie de l’incontinence chez la femme',
      metaDescription:
        'Bandelette TOT : à qui elle convient, comment elle se déroule, différence avec la TVT, ce qu’il faut savoir sur les bandelettes synthétiques, risques, convalescence et attentes réalistes.',
      quickFacts: {
        duration: '20 à 40 minutes',
        anesthesia: 'Rachianesthésie ou anesthésie générale',
        hospitalStay: 'Ambulatoire – 1 nuit',
        stayInTurkey: '5 à 7 jours',
        catheter: 'Généralement quelques heures – 1 jour',
        returnToWork: '1 à 2 semaines (travail de bureau), 4 à 6 semaines (travail lourd)',
        flightClearance: 'Après la consultation de contrôle'
      },
      definition: [
        'L’incontinence d’effort est une fuite involontaire aux moments où la pression abdominale augmente : toux, éternuement, rire, port de charges, montée d’escaliers. La cause n’est pas la vessie mais l’affaiblissement des structures qui soutiennent l’urètre. Accouchements, ménopause, toux chronique, constipation et poids y contribuent.',
        'La TOT rétablit ce soutien en plaçant une bandelette étroite et souple sous la partie moyenne de l’urètre. La bandelette ne serre pas l’urètre ; elle se place dessous comme un hamac au moment où la pression monte et empêche le canal de descendre. On utilise une petite incision de la paroi vaginale antérieure et un petit point de sortie dans chaque aine.',
        'PAS DE BONNE OPÉRATION SANS BON DIAGNOSTIC. Il existe trois grands types de fuites : à l’effort (sous pression), par urgenturie (ne pas atteindre les toilettes à temps) et mixte. La TOT ne s’adresse qu’au type D’EFFORT. Si l’urgenturie est la vraie cause, la bandelette n’apportera pas le bénéfice attendu et peut même l’aggraver. Le type est donc déterminé en détail avant l’intervention.',
        'IL FAUT PARLER OUVERTEMENT DES BANDELETTES SYNTHÉTIQUES. La bandelette est un matériau synthétique. Certains pays ont instauré des restrictions et un débat public a eu lieu ; il porte surtout sur les prothèses de grande surface utilisées pour les PROLAPSUS, non sur la bandelette sous-urétrale étroite utilisée pour l’incontinence. Il n’en reste pas moins qu’il s’agit d’un implant définitif pouvant rarement provoquer douleurs, érosion ou nécessité de retrait, et cela doit être dit avant l’intervention. Si un chirurgien n’en parle pas, demandez un second avis.',
        'LA CHIRURGIE N’EST PAS LE PREMIER CHOIX. On commence par la rééducation périnéale, la perte de poids, le traitement de la constipation, l’arrêt du tabac et la prise en charge d’une toux chronique. Une rééducation périnéale bien conduite apporte un bénéfice mesurable chez beaucoup de femmes. Cette étape ne doit pas être sautée ; sinon, les attentes postopératoires ne seront pas réalistes.',
        'LE PROJET DE GROSSESSE CHANGE LE PLAN. Les symptômes pouvant réapparaître après un accouchement, l’intervention est généralement différée chez les femmes qui envisagent une grossesse. Ce n’est pas un refus, mais la volonté que le résultat dure.',
        'TOT et TVT reposent sur le même principe ; la différence est le trajet de la bandelette. La TOT passe par l’aine (le foramen obturateur), la TVT derrière le pubis (rétropubien). Les deux sont établies, et le choix dépend de l’anatomie, des interventions antérieures et de la force de fermeture propre à l’urètre.'
      ],
      eligibility: {
        suitable: [
          'Femmes présentant des fuites à l’augmentation de pression (toux, éternuement, port de charges)',
          'Femmes insuffisamment améliorées par la rééducation périnéale',
          'Femmes dont les symptômes limitent la vie quotidienne, sociale ou sportive',
          'Femmes chez qui le type d’effort est confirmé par l’examen et les tests',
          'Femmes dont le projet de grossesse est terminé'
        ],
        notSuitable: [
          'Femmes dont le vrai problème est l’urgenturie (vessie hyperactive) — la bandelette n’apportera pas le bénéfice attendu',
          'Femmes avec projet de grossesse : l’intervention est différée après l’accouchement',
          'Femmes présentant une infection urinaire non traitée : l’infection est traitée d’abord',
          'Femmes ne vidant pas complètement leur vessie, avec un résidu élevé — cela est évalué d’abord',
          'Femmes présentant un prolapsus important, chez qui la bandelette seule peut ne pas suffire ; le plan est établi ensemble',
          'Femmes avec symptômes légers n’ayant pas encore essayé la rééducation'
        ]
      },
      technology: [
        'Bandelette sous-urétrale moyenne (voie transobturatrice)',
        'Pad-test et calendrier mictionnel pour mesurer objectivement les symptômes',
        'Débitmétrie et mesure du résidu post-mictionnel',
        'Bilan urodynamique chez certaines patientes — pour distinguer effort et urgenturie',
        'Cystoscopie si nécessaire',
        'Évaluation clinique des muscles du plancher pelvien'
      ],
      surgeonExperience: {
        caseVolume: '',
        note: 'En chirurgie de l’incontinence, le résultat dépend moins de l’intervention que du choix de la bonne patiente : si le type d’effort n’est pas correctement identifié, même une bandelette parfaitement posée ne satisfera pas. L’équipe du Dr Müslüm Ergün est auteur d’un article évalué par les pairs comparant des techniques de bandelette dans l’incontinence d’effort ; il est cité ici à titre de référence uniquement, sans présenter de résultat ni de taux de réussite comme argument promotionnel.'
      },
      timeline: [
        { when: 'À distance', title: 'Évaluation initiale', body: 'Le type de vos symptômes (à la pression ou à l’urgenturie), vos accouchements, vos interventions antérieures, vos traitements et vos comptes rendus gynécologiques ou urologiques sont étudiés. Il peut vous être demandé de tenir un calendrier mictionnel quelques jours.' },
        { when: 'Jour 1', title: 'Examen et bilan', body: 'Examen gynécologique, test à la toux, débitmétrie, résidu post-mictionnel, ECBU. Bilan urodynamique si nécessaire. Si l’ECBU est positif, l’intervention est reportée.' },
        { when: 'Jour 2', title: 'Intervention', body: 'Sous rachianesthésie ou anesthésie générale, une petite incision est faite dans la paroi vaginale antérieure, la bandelette est placée sous l’urètre moyen puis extériorisée dans chaque aine où sa tension est réglée. Ce réglage est l’étape la plus délicate : trop tendue, elle gêne la miction.' },
        { when: 'Jours 2–3', title: 'Sortie', body: 'La plupart des patientes rentrent le jour même ou le lendemain. Avant la sortie, on vérifie que vous urinez confortablement et qu’il ne reste pas d’urine dans la vessie.' },
        { when: 'Jours 4–7', title: 'Contrôle', body: 'Cicatrice, jet urinaire et résidu sont évalués. Le vol retour est prévu après ce contrôle.' },
        { when: 'Semaine 6', title: 'Évaluation du résultat', body: 'La reprise de la vie sexuelle et des efforts est discutée à ce moment. L’amélioration se juge sur l’usage de protections.' }
      ],
      risks: [
        'DIFFICULTÉS À URINER : si la bandelette reste trop tendue, le jet faiblit, la vessie ne se vide pas complètement et un sondage temporaire peut être nécessaire. Un petit nombre de patientes nécessite un relâchement ou une section de la bandelette',
        'APPARITION D’URGENTURIES : certaines femmes développent après l’intervention une pollakiurie et des urgences. C’est le plus souvent transitoire ; certaines ont besoin d’un traitement',
        'DOULEURS LIÉES À LA BANDELETTE : des douleurs de l’aine ou de la face interne de cuisse sont possibles. Elles régressent généralement en quelques semaines ; elles persistent chez un petit nombre',
        'ÉROSION : exposition de la bandelette à travers la paroi vaginale ou, rarement, dans l’urètre. Elle se manifeste par des pertes, un saignement ou une gêne ressentie par le partenaire, et impose un geste complémentaire',
        'Infection urinaire',
        'Plaie de la vessie ou de l’urètre pendant l’intervention — peu fréquente, réparée dans le même temps si reconnue',
        'Saignement et hématome',
        'AMÉLIORATION INCOMPLÈTE OU RÉAPPARITION AVEC LE TEMPS : la bandelette vise à réduire les fuites ; aucune technique ne peut garantir une continence définitive et totale',
        'La bandelette est un implant définitif, et son retrait ultérieur est plus difficile que la pose initiale'
      ],
      alternatives: [
        'Rééducation périnéale — bien enseignée, elle apporte un bénéfice mesurable chez beaucoup de femmes ; c’est la première étape',
        'Kinésithérapie périnéale et biofeedback — pour celles qui peinent à réaliser correctement les exercices',
        'Mesures hygiéno-diététiques — perte de poids, traitement de la constipation, arrêt du tabac, traitement d’une toux chronique',
        'Pessaire vaginal — pour les femmes ne souhaitant pas ou ne pouvant pas être opérées',
        'Injection de produit de comblement urétral — moins invasive ; effet généralement plus court et renouvelable',
        'TVT (bandelette rétropubienne) — même principe, trajet différent',
        'Bandelette autologue de fascia — tissu de la patiente, pour celles qui refusent le synthétique ou ont eu un problème de bandelette',
        'Traitement de la vessie si l’urgenturie prédomine — thérapie comportementale, médicament ou botox vésical plutôt qu’une bandelette'
      ],
      comparison: {
        title: 'TOT, TVT et produit de comblement : quel compromis vous convient',
        columns: ['Critère', 'TOT (transobturatrice)', 'TVT (rétropubienne)', 'Comblement'],
        rows: [
          { label: 'Trajet de la bandelette', values: ['Par l’aine', 'Derrière le pubis', 'Pas de bandelette'] },
          { label: 'Risque de plaie vésicale', values: ['Plus faible', 'Relativement plus élevé', 'Très faible'] },
          { label: 'Douleurs d’aine ou de cuisse', values: ['Plus souvent rapportées', 'Moins souvent', 'Non attendues'] },
          { label: 'Difficultés mictionnelles', values: ['Moins fréquentes', 'Plus souvent rapportées', 'Rares'] },
          { label: 'Caractère invasif', values: ['Moyen', 'Moyen', 'Faible'] },
          { label: 'Durabilité de l’effet', values: ['Données à long terme disponibles', 'Données à long terme disponibles', 'Généralement plus court ; renouvelable'] },
          { label: 'Implant définitif', values: ['Oui', 'Oui', 'Non'] },
          { label: 'Hospitalisation', values: ['Ambulatoire – 1 nuit', 'Ambulatoire – 1 nuit', 'Ambulatoire'] }
        ],
        note: 'La bonne question n’est pas « laquelle est la plus forte » mais « quel compromis me convient ». Si vous ne voulez pas d’implant définitif, dites-le clairement : les options changent. Lorsque la force de fermeture propre de l’urètre est faible, le choix diffère également.'
      },
      recovery: [
        { period: '48 premières heures', body: 'Une tension et de légères douleurs de l’aine sont habituelles. Buvez abondamment. Impossibilité d’uriner, fièvre ou saignement important imposent un contact immédiat.' },
        { period: 'Semaine 1', body: 'Les activités quotidiennes sont possibles ; port de charges et efforts de poussée sont évités. On prévient la constipation — pousser est ce qui nuit le plus les premières semaines.' },
        { period: 'Semaines 2–4', body: 'La reprise du travail de bureau se situe généralement là. La marche est libre ; course, charges et abdominaux attendent.' },
        { period: 'Semaine 6', body: 'La reprise de la vie sexuelle se discute généralement après ce délai et après la consultation de contrôle.' },
        { period: 'Mois 3', body: 'Le résultat se précise. Le changement d’usage des protections en est la mesure la plus parlante.' },
        { period: 'Long terme', body: 'Prise de poids, toux chronique et constipation favorisent la récidive. Poursuivre la rééducation périnéale après l’intervention aide à préserver le résultat.' }
      ],
      price: {
        from: 0,
        to: 0,
        currency: 'EUR',
        disclaimer:
          'Le montant dépend du matériel de bandelette utilisé, d’un éventuel geste associé (cure de prolapsus par exemple) et de la durée d’hospitalisation. Un devis écrit détaillé est remis après examen de vos documents.'
      },
      packageIncludes: [
        'Consultation et évaluation en urologie féminine',
        'Débitmétrie et mesure du résidu post-mictionnel',
        'Bilans sanguins et urinaires, ECBU',
        'Bilan urodynamique si nécessaire',
        'Anesthésie et bloc opératoire',
        'Matériel de bandelette et consommables',
        'Hospitalisation',
        'Vérification de la vidange vésicale avant la sortie',
        'Consultation de contrôle avant le retour',
        'Transferts aéroport–hôpital–hôtel',
        'Hébergement (patiente et un accompagnant)',
        'Interprète médical et coordinateur patient',
        'Suivi à distance après le retour'
      ],
      faqs: [
        { q: 'Mes fuites vont-elles disparaître complètement ?', a: 'L’objectif est de les réduire nettement et de se rapprocher de l’arrêt des protections. Aucune technique ne garantit une continence définitive et totale ; choisissez un centre qui mesure le résultat sur l’usage des protections plutôt qu’un qui promet la sécheresse.' },
        { q: 'La bandelette synthétique est-elle sûre ?', a: 'La bandelette sous-urétrale utilisée pour l’incontinence diffère des prothèses de grande surface employées dans les prolapsus et son usage est établi. Elle reste un implant définitif pouvant rarement provoquer douleurs, érosion ou nécessité de retrait. Si un chirurgien n’aborde pas ces risques, demandez un second avis.' },
        { q: 'Je ne veux pas de matériel synthétique : y a-t-il des alternatives ?', a: 'Oui. Bandelette autologue de fascia, produit de comblement urétral, pessaire et kinésithérapie périnéale sont des options. Exprimez votre préférence d’emblée ; le plan se construit autour.' },
        { q: 'Aurai-je du mal à uriner ensuite ?', a: 'Généralement non si la tension est bien réglée. Trop tendue, la bandelette affaiblit le jet et empêche la vidange complète ; c’est pourquoi le résidu est mesuré avant la sortie. Un petit nombre de patientes nécessite un relâchement.' },
        { q: 'J’ai aussi des urgenturies : l’opération les traitera-t-elle ?', a: 'Non. La TOT ne s’adresse qu’aux fuites à la pression. Si l’urgenturie prédomine, la bandelette n’aide pas et peut aggraver. Dans les formes mixtes, la composante dominante est établie avant l’intervention et le plan en découle.' },
        { q: 'Je souhaite encore avoir des enfants : puis-je être opérée ?', a: 'Ce n’est généralement pas conseillé. Les symptômes peuvent réapparaître après un accouchement et le bénéfice se perdre. Le plan est reporté après la fin du projet parental.' },
        { q: 'Quand puis-je reprendre le travail ?', a: 'Généralement 1 à 2 semaines pour un travail de bureau. Pour un travail avec port de charges, 4 à 6 semaines. Pousser et porter tôt peut défaire directement le résultat.' },
        { q: 'Cela affectera-t-il ma vie sexuelle ?', a: 'Généralement pas défavorablement ; pour beaucoup de femmes, c’est l’inverse, la crainte des fuites disparaissant. La reprise se discute généralement après six semaines et après le contrôle. Signalez sans délai toute douleur ou toute gêne ressentie par votre partenaire.' },
        { q: 'La bandelette peut-elle être retirée plus tard ?', a: 'Elle peut l’être si nécessaire, mais c’est plus difficile que la pose et le retrait complet n’est pas toujours possible. Le choix d’un implant définitif doit donc être fait en connaissance de cause.' },
        { q: 'Dois-je vraiment essayer la rééducation d’abord ?', a: 'Dans les formes légères et modérées, oui. Une rééducation bien enseignée apporte un bénéfice mesurable chez beaucoup de femmes et peut éviter l’intervention. Un plan qui saute cette étape est incomplet.' },
        { q: 'Combien de temps rester en Türkiye ?', a: 'Généralement 5 à 7 jours. Le contrôle étant réalisé ici, prévoyez le vol retour après cette consultation.' },
        { q: 'Quels documents envoyer ?', a: 'Un éventuel bilan urodynamique, la débitmétrie et le résidu post-mictionnel, les comptes rendus d’examen gynécologique, les comptes rendus d’interventions antérieures, un ECBU et la liste de vos traitements. Un calendrier mictionnel tenu quelques jours est également très utile.' }
      ],
      sources: [
        {
          label: 'Recommandations EAU sur les troubles mictionnels non neurogènes de la femme — Association européenne d’urologie',
          url: 'https://uroweb.org/guidelines/non-neurogenic-female-luts'
        },
        {
          label:
            'Sağır S, Başgut Ö, Tunçekin A, Ergün M, Turğut Ö. Comparison of the Transobturator Tape and Minisling Methods in the Treatment of Stress Urinary Incontinence. Archivos Españoles de Urología, 2025.'
        }
      ]
    },
    ru: {
      title: 'Операция TOT (трансобтураторная петля)',
      summary:
        'Операция при стрессовом недержании мочи — подтекании при кашле, чихании или подъёме тяжестей, — при которой под уретру помещают узкую ленту, восстанавливающую её поддержку.',
      metaTitle: 'Операция TOT: хирургия недержания мочи у женщин',
      metaDescription:
        'Петлевая операция TOT: кому подходит, как проводится, чем отличается от TVT, что нужно знать о сетчатом импланте, риски, восстановление и честные ожидания.',
      quickFacts: {
        duration: '20–40 минут',
        anesthesia: 'Спинальная или общая анестезия',
        hospitalStay: 'Амбулаторно – 1 ночь',
        stayInTurkey: '5–7 дней',
        catheter: 'Обычно несколько часов – 1 день',
        returnToWork: '1–2 недели (сидячая работа), 4–6 недель (тяжёлая)',
        flightClearance: 'После контрольного осмотра'
      },
      definition: [
        'Стрессовое недержание — непроизвольное подтекание в моменты повышения внутрибрюшного давления: кашель, чихание, смех, подъём тяжестей, подъём по лестнице. Причина не в мочевом пузыре, а в ослаблении структур, поддерживающих уретру. Роды, менопауза, хронический кашель, запоры и вес вносят свой вклад.',
        'Операция TOT восстанавливает эту поддержку: под среднюю часть уретры помещают узкую мягкую ленту. Лента не сдавливает уретру; в момент повышения давления она просто лежит под ней как гамак и не даёт каналу смещаться вниз. Используют небольшой разрез передней стенки влагалища и по одной маленькой точке выхода в каждой паховой области.',
        'БЕЗ ПРАВИЛЬНОГО ДИАГНОЗА НЕТ ПРАВИЛЬНОЙ ОПЕРАЦИИ. Есть три основных типа подтекания: стрессовое (при давлении), ургентное (не успеть до туалета) и смешанное. TOT направлена только на СТРЕССОВЫЙ тип. Если истинная причина — ургентность, петля не даст ожидаемой пользы и может даже усилить позывы. Поэтому тип жалоб подробно определяют до операции.',
        'О СЕТЧАТОМ ИМПЛАНТЕ НУЖНО ГОВОРИТЬ ОТКРЫТО. Лента — синтетический материал. В ряде стран вводились ограничения и велась общественная дискуссия о вагинальных сетках; большая её часть касается широких сеток, применяемых при ОПУЩЕНИИ органов, а не узкой среднеуретральной ленты при недержании. Тем не менее пациентке до операции нужно сказать, что лента — постоянный имплант и редко может вызывать боль, эрозию или потребность в удалении. Если врач об этом не говорит, запросите второе мнение.',
        'ОПЕРАЦИЯ — НЕ ПЕРВЫЙ ВАРИАНТ. Сначала — упражнения для мышц тазового дна, снижение веса, устранение запоров, отказ от курения и лечение хронического кашля. Правильно обученная гимнастика даёт измеримую пользу у многих женщин. Этот шаг нельзя пропускать; иначе и ожидания после операции будут нереалистичными.',
        'ПРИ ПЛАНИРОВАНИИ БЕРЕМЕННОСТИ ПЛАН МЕНЯЕТСЯ. Поскольку после родов жалобы могут вернуться, у женщин, планирующих беременность, операцию обычно откладывают. Это не отказ, а стремление сделать результат долговечным.',
        'TOT и TVT — два петлевых метода, работающих по одному принципу; различие в пути ленты через тело. TOT проходит через пах (запирательное отверстие), TVT — позади лобковой кости (позадилонно). Оба применяются давно, и выбор зависит от анатомии, перенесённых операций и собственной замыкательной силы уретры.'
      ],
      eligibility: {
        suitable: [
          'Женщины, у которых моча подтекает при повышении давления (кашель, чихание, подъём тяжестей)',
          'Женщины, которым недостаточно помогают упражнения для тазового дна',
          'Женщины, у которых жалобы ограничивают повседневную, социальную жизнь или занятия спортом',
          'Женщины, у которых стрессовый тип подтверждён осмотром и обследованием',
          'Женщины, завершившие планирование семьи'
        ],
        notSuitable: [
          'Женщины, у которых истинная проблема — ургентность (гиперактивный пузырь); петля не даст ожидаемой пользы',
          'Женщины, планирующие беременность: операцию откладывают до после родов',
          'Женщины с нелеченой инфекцией мочевых путей: сначала лечат инфекцию',
          'Женщины, которые не опорожняют пузырь полностью и у которых высокий остаточный объём — это оценивают в первую очередь',
          'Женщины с выраженным опущением, у которых одной петли может быть недостаточно; план составляют совместно',
          'Женщины с лёгкими жалобами, ещё не пробовавшие упражнения'
        ]
      },
      technology: [
        'Среднеуретральная петля (трансобтураторный доступ)',
        'Прокладочный тест и дневник мочеиспускания для объективной оценки',
        'Урофлоуметрия и измерение остаточной мочи',
        'Уродинамика у отдельных пациенток — чтобы отличить стрессовый тип от ургентного',
        'Цистоскопия при необходимости',
        'Клиническая оценка мышц тазового дна'
      ],
      surgeonExperience: {
        caseVolume: '',
        note: 'В хирургии недержания результат определяется не столько самой операцией, сколько выбором подходящей пациентки: если стрессовый тип распознан неверно, даже безупречно установленная петля не принесёт удовлетворения. У команды доцента, д-ра Мюслюма Эргюна есть рецензируемая публикация, сравнивающая петлевые методы при стрессовом недержании; она приводится только как ссылка, результаты или показатели успеха не используются как рекламное утверждение.'
      },
      timeline: [
        { when: 'Дистанционно', title: 'Предварительная оценка', body: 'Изучают характер жалоб (при давлении или при позыве), акушерский анамнез, перенесённые операции, принимаемые препараты и имеющиеся гинекологические или урологические заключения. Вас могут попросить несколько дней вести дневник мочеиспускания.' },
        { when: '1-й день', title: 'Осмотр и обследование', body: 'Гинекологический осмотр, кашлевая проба, урофлоуметрия, остаточная моча, анализ и посев мочи. При необходимости уродинамика. При росте флоры операция откладывается.' },
        { when: '2-й день', title: 'Операция', body: 'Под спинальной или общей анестезией делают небольшой разрез передней стенки влагалища, помещают ленту под среднюю уретру и выводят через обе паховые области, где регулируют её натяжение. Эта настройка — самый ответственный этап: излишнее натяжение затрудняет мочеиспускание.' },
        { when: '2–3-й день', title: 'Выписка', body: 'Большинство пациенток уходят домой в тот же или на следующий день. Перед выпиской проверяют, свободно ли вы мочитесь и не остаётся ли моча в пузыре.' },
        { when: '4–7-й день', title: 'Контроль', body: 'Оценивают рану, струю и остаточный объём. Обратный рейс планируют после этого контроля.' },
        { when: '6-я неделя', title: 'Оценка результата', body: 'Обсуждают возвращение к половой жизни и к нагрузкам. Степень улучшения оценивают по использованию прокладок.' }
      ],
      risks: [
        'ЗАТРУДНЁННОЕ МОЧЕИСПУСКАНИЕ: при излишнем натяжении струя слабеет, пузырь не опорожняется полностью и временно может потребоваться катетер. Небольшому числу женщин нужно ослабить или рассечь ленту',
        'ПОЯВЛЕНИЕ УРГЕНТНОСТИ: у части женщин после операции возникают учащение и внезапные позывы. Чаще это временно; некоторым нужны препараты',
        'БОЛЬ, СВЯЗАННАЯ С ЛЕНТОЙ: возможна боль в паху или по внутренней поверхности бедра. Обычно проходит за недели; у немногих сохраняется',
        'ЭРОЗИЯ: обнажение ленты через стенку влагалища или, редко, в мочевой канал. Проявляется выделениями, кровянистыми выделениями или тем, что партнёр что-то ощущает; требует дополнительного вмешательства',
        'Инфекция мочевых путей',
        'Повреждение пузыря или уретры во время операции — нечасто, при распознавании устраняется в том же вмешательстве',
        'Кровотечение и гематома',
        'НЕПОЛНОЕ ИСЧЕЗНОВЕНИЕ ИЛИ ВОЗВРАТ ЖАЛОБ СО ВРЕМЕНЕМ: петля призвана уменьшить подтекание; ни один метод не может гарантировать стойкую и полную сухость',
        'Лента — постоянный имплант, и её последующее удаление сложнее первой операции'
      ],
      alternatives: [
        'Упражнения для мышц тазового дна — при правильном обучении дают измеримую пользу у многих женщин; это первый шаг',
        'Физиотерапия тазового дна и биологическая обратная связь — тем, кому трудно выполнять упражнения правильно',
        'Коррекция образа жизни — снижение веса, устранение запоров, отказ от курения, лечение хронического кашля',
        'Вагинальный пессарий — для женщин, не желающих или не подходящих для операции',
        'Инъекция объёмообразующего вещества в уретру — менее травматично; эффект обычно короче и может повторяться',
        'TVT (позадилонная петля) — тот же принцип при другом пути ленты',
        'Аутологичная фасциальная петля — из собственной ткани, для тех, кто не хочет синтетики или имел проблему с сеткой',
        'При преобладании ургентности — лечение мочевого пузыря: поведенческая терапия, препараты или ботокс пузыря, а не петля'
      ],
      comparison: {
        title: 'TOT, TVT и объёмообразующее вещество: какой компромисс вам подходит',
        columns: ['Критерий', 'TOT (трансобтураторная)', 'TVT (позадилонная)', 'Объёмообразующее'],
        rows: [
          { label: 'Путь ленты', values: ['Через пах', 'Позади лобковой кости', 'Ленты нет'] },
          { label: 'Риск повреждения пузыря', values: ['Ниже', 'Относительно выше', 'Очень низкий'] },
          { label: 'Боль в паху или бедре', values: ['Сообщают чаще', 'Реже', 'Не ожидается'] },
          { label: 'Затруднение мочеиспускания', values: ['Реже', 'Сообщают чаще', 'Редко'] },
          { label: 'Травматичность', values: ['Средняя', 'Средняя', 'Низкая'] },
          { label: 'Длительность эффекта', values: ['Есть отдалённые данные', 'Есть отдалённые данные', 'Обычно короче; может требовать повтора'] },
          { label: 'Постоянный имплант', values: ['Да', 'Да', 'Нет'] },
          { label: 'Пребывание в стационаре', values: ['Амбулаторно – 1 ночь', 'Амбулаторно – 1 ночь', 'Амбулаторно'] }
        ],
        note: 'Правильный вопрос не «что сильнее», а «какой компромисс подходит мне». Если вы не хотите постоянный имплант, скажите об этом прямо: варианты изменятся. При слабой собственной замыкательной силе уретры выбор метода тоже другой.'
      },
      recovery: [
        { period: 'Первые 48 часов', body: 'Чувство натяжения и лёгкая боль в паху обычны. Пейте много жидкости. Невозможность помочиться, лихорадка или обильное кровотечение требуют немедленного обращения.' },
        { period: '1-я неделя', body: 'Обычные бытовые дела возможны; подъём тяжестей и натуживание исключают. Запоры предупреждают — натуживание в первые недели вредит больше всего.' },
        { period: '2–4-я неделя', body: 'Возвращение к сидячей работе обычно приходится сюда. Ходьба свободна; бег, веса и упражнения на пресс откладывают.' },
        { period: '6-я неделя', body: 'Возвращение к половой жизни обычно обсуждают после этого срока и после контрольного осмотра.' },
        { period: '3-й месяц', body: 'Результат проясняется. Самая понятная его мера — изменение в использовании прокладок.' },
        { period: 'Долгосрочно', body: 'Набор веса, хронический кашель и запоры способствуют возврату жалоб. Продолжение упражнений для тазового дна после операции помогает сохранить результат.' }
      ],
      price: {
        from: 0,
        to: 0,
        currency: 'EUR',
        disclaimer:
          'Сумма зависит от используемого материала петли, от наличия сопутствующего вмешательства (например, коррекции опущения) и от срока пребывания в стационаре. Постатейное письменное предложение даётся после изучения ваших документов.'
      },
      packageIncludes: [
        'Осмотр и оценка в женской урологии',
        'Урофлоуметрия и измерение остаточной мочи',
        'Анализы крови и мочи, посев мочи',
        'Уродинамика при необходимости',
        'Анестезия и операционная',
        'Материал петли и расходные материалы',
        'Пребывание в стационаре',
        'Проверка опорожнения пузыря перед выпиской',
        'Контрольный осмотр перед возвращением домой',
        'Трансферы аэропорт — больница — отель',
        'Проживание (пациентка и один сопровождающий)',
        'Медицинский переводчик и координатор пациента',
        'Дистанционное наблюдение после возвращения'
      ],
      faqs: [
        { q: 'Подтекание исчезнет полностью?', a: 'Цель — заметно уменьшить подтекание и приблизиться к отказу от прокладок. Ни один метод не гарантирует стойкую и полную сухость; выбирайте центр, который измеряет результат по использованию прокладок, а не тот, который обещает сухость.' },
        { q: 'Безопасна ли сетка?', a: 'Среднеуретральная лента для недержания отличается от широкой сетки, применяемой при опущении, и имеет устоявшееся применение. Тем не менее это постоянный имплант, который редко может вызвать боль, эрозию или потребность в удалении. Если врач не обсуждает эти риски, запросите второе мнение.' },
        { q: 'Я не хочу синтетику — есть альтернативы?', a: 'Да. Аутологичная фасциальная петля из собственной ткани, объёмообразующие инъекции, пессарий и физиотерапия тазового дна. Скажите о своём предпочтении сразу — план будет построен вокруг него.' },
        { q: 'Будет ли трудно мочиться после операции?', a: 'Обычно нет, если натяжение ленты выставлено верно. При излишнем натяжении струя слабеет, а пузырь не опорожняется полностью; поэтому перед выпиской измеряют остаточную мочу. Небольшому числу женщин ленту приходится ослаблять.' },
        { q: 'У меня ещё и ургентность — решит ли это операция?', a: 'Нет. TOT направлена только на подтекание при давлении. Если преобладает ургентность, петля не помогает и может ухудшить состояние. При смешанном типе до операции определяют преобладающий компонент, и план строится исходя из этого.' },
        { q: 'Я планирую беременность — можно ли оперироваться сейчас?', a: 'Обычно это не рекомендуется. После родов жалобы могут вернуться, и польза операции может быть утрачена. План откладывают до завершения планирования семьи.' },
        { q: 'Когда можно вернуться к работе?', a: 'Обычно через 1–2 недели при сидячей работе. При работе с подъёмом тяжестей — 4–6 недель. Раннее натуживание и подъём тяжестей могут напрямую свести результат на нет.' },
        { q: 'Повлияет ли это на половую жизнь?', a: 'Обычно не отрицательно; у многих женщин наоборот, потому что исчезает страх подтекания. Возвращение обычно обсуждают после шести недель и после контроля. О любой боли или о том, что ощущает партнёр, сообщайте сразу.' },
        { q: 'Можно ли удалить ленту позже?', a: 'При необходимости можно, но это сложнее первой операции, и полное удаление возможно не всегда. Поэтому решение о постоянном импланте нужно принимать осознанно с самого начала.' },
        { q: 'Обязательно ли сначала пробовать упражнения?', a: 'При лёгких и умеренных жалобах — да. Правильно обученная гимнастика тазового дна даёт измеримую пользу у многих женщин, и операция может не понадобиться. План, пропускающий этот шаг, неполон.' },
        { q: 'Сколько нужно пробыть в Турции?', a: 'Обычно 5–7 дней. Поскольку контроль проводится здесь, планируйте обратный рейс после этого приёма.' },
        { q: 'Какие документы прислать?', a: 'Результат уродинамики, если он есть, урофлоуметрию и остаточную мочу, записи гинекологического осмотра, протоколы прежних операций, анализ мочи и список принимаемых препаратов. Дневник мочеиспускания за несколько дней тоже очень полезен.' }
      ],
      sources: [
        {
          label: 'Рекомендации EAU по ненейрогенным расстройствам мочеиспускания у женщин — Европейская ассоциация урологии',
          url: 'https://uroweb.org/guidelines/non-neurogenic-female-luts'
        },
        {
          label:
            'Sağır S, Başgut Ö, Tunçekin A, Ergün M, Turğut Ö. Comparison of the Transobturator Tape and Minisling Methods in the Treatment of Stress Urinary Incontinence. Archivos Españoles de Urología, 2025.'
        }
      ]
    },
    ar: {
      title: 'عملية الشريط عبر السدادة (TOT)',
      summary:
        'عملية لسلس البول الجهدي — تسرّب البول عند السعال أو العطاس أو حمل الأثقال — يُوضَع فيها شريط رفيع تحت الإحليل لإعادة الدعم إليه.',
      metaTitle: 'عملية TOT: جراحة سلس البول عند النساء',
      metaDescription:
        'عملية الشريط TOT: لمن تصلح، وكيف تُجرى، وما الفرق عن TVT، وما ينبغي معرفته عن الشبكة، والمخاطر والتعافي وتوقعات صادقة.',
      quickFacts: {
        duration: '20 إلى 40 دقيقة',
        anesthesia: 'تخدير نصفي أو عام',
        hospitalStay: 'من دون مبيت – ليلة واحدة',
        stayInTurkey: '5 إلى 7 أيام',
        catheter: 'ساعات قليلة عادة – يوم واحد',
        returnToWork: 'أسبوع إلى أسبوعين (عمل مكتبي)، 4 إلى 6 أسابيع (عمل شاق)',
        flightClearance: 'بعد مراجعة المتابعة'
      },
      definition: [
        'سلس البول الجهدي تسرّب لا إرادي في اللحظات التي يرتفع فيها الضغط داخل البطن: السعال والعطاس والضحك وحمل الأثقال وصعود الدرج. والسبب ليس المثانة بل ضعف البُنى التي تدعم الإحليل. وتسهم الولادات وسن اليأس والسعال المزمن والإمساك والوزن في هذا الضعف.',
        'وتعيد عملية TOT هذا الدعم بوضع شريط رفيع طري تحت الجزء الأوسط من الإحليل. والشريط لا يضغط على الإحليل؛ بل يستقر تحته كالأرجوحة عند ارتفاع الضغط فيمنع هبوط القناة. ويُستعمَل شق صغير في الجدار الأمامي للمهبل ونقطة خروج صغيرة في كل مغبن.',
        'ولا عملية صحيحة من دون تشخيص صحيح. فللتسرّب ثلاثة أنواع رئيسة: جهدي (مع الضغط)، وإلحاحي (عدم بلوغ الحمّام في الوقت)، ومختلط. وتستهدف TOT النوع الجهدي وحده. فإن كان المصدر الحقيقي هو الإلحاح فلن يعطي الشريط الفائدة المرجوّة وقد يزيد الإلحاح. ولذلك يُحدَّد نوع الشكوى بالتفصيل قبل العملية.',
        'ولا بد من الحديث الصريح عن الشبكة. فالشريط مادة صناعية. وقد وضعت بعض الدول قيودًا ودار نقاش عام حول الشبكات المهبلية؛ ومعظم ذلك النقاش يخص الشبكات واسعة السطح المستعملة في هبوط الأعضاء لا الشريط الضيّق تحت منتصف الإحليل المستعمل للسلس. ومع ذلك يجب أن يُقال للمريضة قبل العملية إن الشريط غرسة دائمة وقد يسبب نادرًا ألمًا أو تآكلًا أو حاجة إلى إزالته. ومن لا يتحدث في هذا فاطلب رأيًا ثانيًا.',
        'والجراحة ليست الخيار الأول. فتُجرَّب أولًا تمارين قاع الحوض وإنقاص الوزن ومعالجة الإمساك والإقلاع عن التدخين وعلاج السعال المزمن. وتمارين قاع الحوض إذا عُلِّمت جيدًا تعطي فائدة ملموسة عند كثير من النساء. ولا ينبغي تخطّي هذه الخطوة؛ وإلا صارت التوقعات بعد العملية غير واقعية.',
        'وتتغير الخطة عند الرغبة في الإنجاب. فلأن الشكوى قد تعود بعد الولادة تُؤجَّل العملية عادة عند من تخطط للحمل. وهذا ليس رفضًا بل سعيًا إلى أن تدوم النتيجة.',
        'وتعمل TOT وTVT بالمبدأ نفسه؛ والفرق في المسار الذي يسلكه الشريط في الجسم. فـ TOT تمر عبر المغبن (الثقبة السدادية)، وTVT خلف عظم العانة. وكلتاهما راسخة، ويعتمد الاختيار على التشريح والعمليات السابقة وقوة إغلاق الإحليل نفسه.'
      ],
      eligibility: {
        suitable: [
          'النساء اللواتي يتسرّب البول لديهن عند ارتفاع الضغط (السعال والعطاس وحمل الأثقال)',
          'النساء اللواتي لا يكفيهن ما تعطيه تمارين قاع الحوض',
          'النساء اللواتي تحدّ الشكوى من حياتهن اليومية أو الاجتماعية أو الرياضية',
          'النساء اللواتي تأكد لديهن النوع الجهدي بالفحص والاختبارات',
          'النساء اللواتي أكملن تخطيط الإنجاب'
        ],
        notSuitable: [
          'النساء اللواتي مشكلتهن الحقيقية الإلحاح (فرط نشاط المثانة) — فالشريط لا يعطي الفائدة المرجوّة',
          'النساء اللواتي يخططن للحمل: تُؤجَّل العملية إلى ما بعد الولادة',
          'النساء المصابات بالتهاب بولي غير معالَج: يُعالَج الالتهاب أولًا',
          'النساء اللواتي لا تفرغ مثانتهن تمامًا ولديهن بول متبقٍّ كثير — ويُقيَّم ذلك أولًا',
          'النساء ذوات الهبوط الواضح، فقد لا يكفي الشريط وحده؛ وتُوضَع الخطة معًا',
          'النساء ذوات الشكوى الخفيفة ممن لم يجرّبن تمارين قاع الحوض بعد'
        ]
      },
      technology: [
        'شريط تحت منتصف الإحليل (المسار عبر السدادة)',
        'اختبار الفوطة ومفكرة التبول لقياس الشكوى موضوعيًا',
        'قياس تدفق البول وقياس البول المتبقي',
        'الدراسة الديناميكية البولية عند مريضات مختارات — للتمييز بين الجهدي والإلحاحي',
        'تنظير المثانة عند الحاجة',
        'تقييم سريري لعضلات قاع الحوض'
      ],
      surgeonExperience: {
        caseVolume: '',
        note: 'في جراحة السلس تتحدد النتيجة باختيار المريضة المناسبة أكثر مما تتحدد بالعملية نفسها: فإن لم يُشخَّص النوع الجهدي تشخيصًا صحيحًا فلن يُرضي حتى الشريط الموضوع بإتقان. ولفريق الأستاذ المشارك د. مسلم إرغن بحث محكّم يقارن طرق الشريط في السلس الجهدي؛ ويُذكَر هنا على سبيل التوثيق فقط، ولا تُعرَض نتائج أو نسب نجاح بوصفها ادعاءً دعائيًا.'
      },
      timeline: [
        { when: 'عن بُعد', title: 'التقييم الأولي', body: 'يُراجَع نوع شكواك (مع الضغط أم مع الإلحاح)، وسوابق الولادة، والعمليات السابقة، والأدوية، وأي تقارير نسائية أو بولية. وقد يُطلَب منك تدوين مفكرة تبوّل لبضعة أيام.' },
        { when: 'اليوم الأول', title: 'الفحص والاختبارات', body: 'فحص نسائي واختبار السعال وقياس التدفق والبول المتبقي وتحليل البول وزرعه. ودراسة ديناميكية عند الحاجة. وإن نما في الزرع جرثوم أُجّلت العملية.' },
        { when: 'اليوم الثاني', title: 'العملية', body: 'تحت تخدير نصفي أو عام يُجرى شق صغير في الجدار الأمامي للمهبل، ويُوضَع الشريط تحت منتصف الإحليل ويُخرَج من كل مغبن حيث يُضبَط شدّه. وضبط الشدّ أدقّ خطوة: فتركه مشدودًا أكثر من اللازم يعسّر التبول.' },
        { when: 'اليوم الثاني إلى الثالث', title: 'الخروج', body: 'تعود معظم المريضات في اليوم نفسه أو في اليوم التالي. ويُتحقَّق قبل الخروج من أنك تتبوّلين بارتياح وأنه لا يبقى بول في المثانة.' },
        { when: 'اليوم الرابع إلى السابع', title: 'المراجعة', body: 'يُقيَّم الجرح وتيار البول والبول المتبقي. وتُخطَّط رحلة العودة بعد هذه المراجعة.' },
        { when: 'الأسبوع السادس', title: 'تقييم النتيجة', body: 'يُناقَش حينها العودة إلى الحياة الجنسية وإلى الجهد. ويُقاس مقدار التحسن باستعمال الفوط.' }
      ],
      risks: [
        'تعسّر التبول: إذا بقي الشريط مشدودًا ضعف التيار ولم تفرغ المثانة تمامًا وقد تلزم قسطرة مؤقتة. ويحتاج عدد قليل من المريضات إلى إرخاء الشريط أو قطعه',
        'ظهور إلحاح جديد: تظهر عند بعض النساء بعد العملية زيادة في عدد مرات التبول وإلحاح مفاجئ. وهو مؤقت غالبًا؛ ويحتاج بعضهن دواء',
        'ألم متعلق بالشريط: قد يظهر ألم في المغبن أو في باطن الفخذ. ويخفّ عادة خلال أسابيع؛ ويستمر عند قلّة',
        'التآكل: انكشاف الشريط عبر جدار المهبل أو نادرًا داخل قناة البول. ويُلاحَظ بإفراز أو نزف أو إحساس الشريك بشيء أثناء الجماع، ويستلزم إجراءً إضافيًا',
        'التهاب المسالك البولية',
        'إصابة المثانة أو الإحليل أثناء العملية — غير شائعة، وتُصلَح في الجلسة نفسها عند اكتشافها',
        'نزف وتجمّع دموي',
        'عدم زوال الشكوى تمامًا أو عودتها مع الوقت: فالشريط يهدف إلى تقليل التسرّب؛ ولا تستطيع أي طريقة ضمان جفاف دائم وكامل',
        'الشريط غرسة دائمة، وإزالته لاحقًا أصعب من العملية الأولى'
      ],
      alternatives: [
        'تمارين قاع الحوض — إذا عُلِّمت جيدًا أعطت فائدة ملموسة عند كثير من النساء؛ وهي الخطوة الأولى',
        'العلاج الطبيعي لقاع الحوض والتغذية الراجعة — لمن تصعب عليها التمارين',
        'تعديل نمط الحياة — إنقاص الوزن ومعالجة الإمساك والإقلاع عن التدخين وعلاج السعال المزمن',
        'الفرزجة المهبلية — لمن لا ترغب في الجراحة أو لا تصلح لها',
        'حقن مادة مالئة في الإحليل — أقل تدخلًا؛ وأثرها أقصر عادة ويمكن تكراره',
        'TVT (الشريط خلف العانة) — المبدأ نفسه بمسار مختلف للشريط',
        'شريط من لفافة المريضة نفسها — لمن لا تريد مادة صناعية أو واجهت مشكلة مع الشبكة',
        'علاج المثانة عند غلبة الإلحاح — علاج سلوكي أو دواء أو بوتوكس المثانة بدل الشريط'
      ],
      comparison: {
        title: 'TOT وTVT والمادة المالئة: أيّ موازنة تناسبك',
        columns: ['المعيار', 'TOT (عبر السدادة)', 'TVT (خلف العانة)', 'المادة المالئة'],
        rows: [
          { label: 'مسار الشريط', values: ['عبر المغبن', 'خلف عظم العانة', 'لا شريط'] },
          { label: 'خطر إصابة المثانة', values: ['أقل', 'أعلى نسبيًا', 'منخفض جدًا'] },
          { label: 'ألم المغبن أو الفخذ', values: ['يُبلَّغ عنه أكثر', 'أقل', 'غير متوقع'] },
          { label: 'تعسّر التبول', values: ['أقل', 'يُبلَّغ عنه أكثر', 'نادر'] },
          { label: 'درجة التدخل', values: ['متوسطة', 'متوسطة', 'منخفضة'] },
          { label: 'دوام الأثر', values: ['تتوافر بيانات بعيدة المدى', 'تتوافر بيانات بعيدة المدى', 'أقصر عادة؛ وقد يلزم التكرار'] },
          { label: 'غرسة دائمة', values: ['نعم', 'نعم', 'لا'] },
          { label: 'الإقامة', values: ['من دون مبيت – ليلة', 'من دون مبيت – ليلة', 'من دون مبيت'] }
        ],
        note: 'السؤال الصحيح ليس «أيهما أقوى» بل «أي موازنة تناسبني». فإن كنت لا ترغبين في غرسة دائمة فقولي ذلك صراحة؛ تتغير الخيارات تبعًا لذلك. وإذا كانت قوة إغلاق الإحليل نفسها ضعيفة اختلف اختيار الطريقة أيضًا.'
      },
      recovery: [
        { period: 'أول 48 ساعة', body: 'الشدّ والألم الخفيف في المغبن أمران معتادان. اشربي كثيرًا. أما تعذّر التبول أو الحمى أو النزف الغزير فتستدعي تواصلًا فوريًا.' },
        { period: 'الأسبوع الأول', body: 'الأعمال اليومية ممكنة؛ ويُتجنَّب حمل الأثقال والحزق. ويُمنَع الإمساك — فالحزق أكثر ما يضر في الأسابيع الأولى.' },
        { period: 'الأسبوع الثاني إلى الرابع', body: 'تقع العودة إلى العمل المكتبي عادة هنا. والمشي حر؛ أما الجري والأوزان وتمارين البطن فتنتظر.' },
        { period: 'الأسبوع السادس', body: 'يُناقَش عادة العودة إلى الحياة الجنسية بعد هذه المدة وبعد مراجعة المتابعة.' },
        { period: 'الشهر الثالث', body: 'تتضح النتيجة. والتغيّر في استعمال الفوط أوضح مقياس لها.' },
        { period: 'على المدى البعيد', body: 'زيادة الوزن والسعال المزمن والإمساك تسهم في عودة الشكوى. والاستمرار على تمارين قاع الحوض بعد العملية يساعد على حفظ النتيجة.' }
      ],
      price: {
        from: 0,
        to: 0,
        currency: 'EUR',
        disclaimer:
          'يتوقف المبلغ على مادة الشريط المستعملة، وعلى إجراء مرافق من عدمه (كإصلاح هبوط)، وعلى مدة الإقامة. ويُقدَّم عرض مكتوب مفصّل بعد مراجعة فحوصك.'
      },
      packageIncludes: [
        'الفحص والتقييم في مسالك النساء',
        'قياس تدفق البول وقياس البول المتبقي',
        'تحاليل الدم والبول وزرع البول',
        'الدراسة الديناميكية عند الحاجة',
        'التخدير وغرفة العمليات',
        'مادة الشريط والمستلزمات',
        'الإقامة في المستشفى',
        'التحقق من إفراغ المثانة قبل الخروج',
        'مراجعة قبل العودة',
        'التنقلات بين المطار والمستشفى والفندق',
        'الإقامة (المريضة ومرافق واحد)',
        'مترجم طبي ومنسّق للمرضى',
        'متابعة عن بُعد بعد العودة'
      ],
      faqs: [
        { q: 'هل يزول التسرّب تمامًا؟', a: 'الهدف تقليله تقليلًا واضحًا والاقتراب من الاستغناء عن الفوط. ولا تستطيع أي طريقة ضمان جفاف دائم وكامل؛ فاختاري مركزًا يقيس النتيجة باستعمال الفوط لا مركزًا يَعِد بالجفاف.' },
        { q: 'هل الشبكة آمنة؟', a: 'الشريط تحت منتصف الإحليل المستعمل للسلس يختلف عن الشبكة واسعة السطح المستعملة في الهبوط، واستعماله راسخ. ومع ذلك فهو غرسة دائمة قد تسبب نادرًا ألمًا أو تآكلًا أو حاجة إلى إزالة. فإن لم يناقش الجرّاح هذه المخاطر فاطلبي رأيًا ثانيًا.' },
        { q: 'لا أريد مادة صناعية، هل من بديل؟', a: 'نعم. شريط من لفافتك أنت، وحقن مادة مالئة في الإحليل، والفرزجة، والعلاج الطبيعي لقاع الحوض. قولي تفضيلك منذ البداية وتُبنى الخطة حوله.' },
        { q: 'هل أتعسّر في التبول بعدها؟', a: 'غالبًا لا إذا ضُبط شدّ الشريط ضبطًا صحيحًا. فإن بقي مشدودًا ضعف التيار ولم تفرغ المثانة تمامًا؛ ولهذا يُقاس البول المتبقي قبل الخروج. ويحتاج عدد قليل إلى إرخاء الشريط.' },
        { q: 'لديّ إلحاح أيضًا، هل تحله العملية؟', a: 'لا. فـ TOT تستهدف التسرّب مع الضغط فقط. وإن غلب الإلحاح فالشريط لا يفيد وقد يزيده سوءًا. وفي النوع المختلط يُحدَّد المكوّن الغالب قبل العملية وتُبنى الخطة عليه.' },
        { q: 'أخطط للإنجاب، هل أُجري العملية الآن؟', a: 'لا يُنصَح بذلك عادة. فقد تعود الشكوى بعد الولادة وتضيع فائدة العملية. وتُؤجَّل الخطة إلى ما بعد اكتمال الإنجاب.' },
        { q: 'متى أعود إلى العمل؟', a: 'عادة أسبوع إلى أسبوعين في العمل المكتبي. وفي الأعمال التي تتطلب حمل أثقال من 4 إلى 6 أسابيع. فالحزق والحمل مبكرًا قد يُفسدان النتيجة مباشرة.' },
        { q: 'هل تؤثر في حياتي الجنسية؟', a: 'لا تؤثر سلبًا عادة؛ بل العكس عند كثيرات لزوال الخوف من التسرّب. ويُناقَش العود عادة بعد الأسبوع السادس وبعد المراجعة. وأبلغي فورًا عن أي ألم أو عن شيء يشعر به الشريك.' },
        { q: 'هل يمكن إزالة الشريط لاحقًا؟', a: 'يمكن عند الحاجة، لكنه أصعب من العملية الأولى وقد لا تُمكن إزالته كاملًا. ولذلك ينبغي أن يكون قرار الغرسة الدائمة واعيًا منذ البداية.' },
        { q: 'هل لا بد أن أجرّب التمارين أولًا؟', a: 'في الشكوى الخفيفة والمتوسطة نعم. فتمارين قاع الحوض المعلَّمة جيدًا تعطي فائدة ملموسة عند كثير من النساء وقد تغني عن العملية. والخطة التي تتخطّى هذه الخطوة ناقصة.' },
        { q: 'كم أبقى في تركيا؟', a: 'عادة من 5 إلى 7 أيام. ولأن المراجعة تتم هنا فخطّطي رحلة العودة بعدها.' },
        { q: 'ما الوثائق التي أرسلها؟', a: 'نتيجة الدراسة الديناميكية إن وُجدت، وقياس التدفق والبول المتبقي، وملاحظات الفحص النسائي، وتقارير العمليات السابقة، وتحليل البول، وقائمة أدويتك. ومفكرة تبوّل لبضعة أيام مفيدة جدًا أيضًا.' }
      ],
      sources: [
        {
          label: 'إرشادات EAU حول أعراض الجهاز البولي السفلي غير العصبية لدى النساء — الجمعية الأوروبية للمسالك البولية',
          url: 'https://uroweb.org/guidelines/non-neurogenic-female-luts'
        },
        {
          label:
            'Sağır S, Başgut Ö, Tunçekin A, Ergün M, Turğut Ö. Comparison of the Transobturator Tape and Minisling Methods in the Treatment of Stress Urinary Incontinence. Archivos Españoles de Urología, 2025.'
        }
      ]
    }
  }
};
