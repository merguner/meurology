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
