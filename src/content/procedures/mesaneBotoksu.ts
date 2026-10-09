import type { Treatment } from '../types';

/**
 * MESANE BOTOKSU (İNTRADETRUSÖR BOTULİNUM TOKSİNİ) — yeni sayfa (Görev 7).
 *
 * reviewStatus: 'reviewed' — hekim onayı alındı (Dr. Ergün, 6 Ekim 2026).
 * Kaynak: EAU Non-neurogenic Female LUTS + Neuro-urology kılavuzları.
 * Başarı oranı/yüzde YAZILMAMIŞTIR. Kendi kendine sonda takma ihtimali
 * BİLEREK öne çıkarılmıştır: hastanın buna istekli olması şarttır.
 */
export const mesaneBotoksu: Treatment = {
  slug: 'mesane-botoksu',
  procedure: { type: 'TherapeuticProcedure', bodyLocation: 'Urinary bladder' },
  parent: 'kadin-urolojisi',
  icon: 'female',
  reviewStatus: 'reviewed',

  lastReviewed: '2026-10-06',
  offersConsultation: false,
  i18n: {
    tr: {
      title: 'Mesane Botoksu (Mesane İçi Botulinum Toksini)',
      summary:
        'Aşırı aktif mesanede ilaç tedavisi yetersiz kaldığında, mesane kasının içine sistoskopiyle botulinum toksini verilerek istem dışı kasılmaların azaltıldığı işlem.',
      metaTitle: 'Mesane Botoksu: Aşırı Aktif Mesanede Ne Zaman Uygulanır',
      metaDescription:
        'Mesane içi botulinum toksini: kimlere uygun, nasıl uygulanır, etkisi ne kadar sürer, kendi kendine sonda takma ihtimali, riskler ve dürüst beklentiler.',
      quickFacts: {
        duration: '10–20 dakika',
        anesthesia: 'Lokal, sedasyon veya genel — hastaya göre',
        hospitalStay: 'Günübirlik',
        stayInTurkey: '4–6 gün',
        catheter: 'Genellikle gerekmez',
        returnToWork: '1–2 gün',
        flightClearance: 'Kontrol muayenesinden sonra'
      },
      definition: [
        'Aşırı aktif mesane; ani ve bastırılması güç idrar sıkışması, sık idrara çıkma, geceleri uyanma ve bazı hastalarda tuvalete yetişemeden idrar kaçırma ile seyreden bir tablodur. Sorun idrar kanalında değil, MESANE KASININ kendiliğinden kasılmasındadır. Bu nedenle stres tipi idrar kaçırmanın tedavisi olan askı ameliyatı bu şikâyeti çözmez.',
        'Mesane botoksu, botulinum toksininin sistoskopi eşliğinde mesane kasının içine çok sayıda küçük noktadan enjekte edilmesidir. Toksin, kasa giden sinir uyarısını geçici olarak zayıflatır; mesane daha az istem dışı kasılır ve daha fazla idrar biriktirebilir. İşlem idrar yolundan yapılır, vücutta kesi açılmaz.',
        'BU BİR İLK BASAMAK TEDAVİSİ DEĞİLDİR. Önce sıvı ve kafein düzenlemesi, mesane eğitimi (işeme aralıklarının kademeli uzatılması), kabızlığın giderilmesi, kilo yönetimi ve pelvik taban egzersizleri gelir. Sonra ilaç tedavisi denenir. Botoks, bu basamaklardan yeterli fayda görülmediğinde veya ilacın yan etkileri kaldırılamadığında gündeme gelir.',
        'EN ÖNEMLİ KONU: KENDİ KENDİNE SONDA TAKMA İHTİMALİ. Toksin mesane kasını zayıflattığı için bir kısım hastada mesane tam boşalamaz ve bu hastaların bir bölümünde geçici olarak günde birkaç kez kendi kendine sonda takmak gerekir. Bu ihtimal işlemden ÖNCE konuşulur ve hastanın gerekirse bunu yapmaya istekli olması şart koşulur. İstekli olmayan bir hastaya bu işlem önerilmez. Bunu söylemeyen bir merkeze güvenmeyin.',
        'ETKİ KALICI DEĞİLDİR. Botulinum toksininin etkisi aylar içinde azalır; şikâyetler geri döndüğünde işlem tekrarlanır. Tekrar aralığı hastadan hastaya değişir. Bu yüzden mesane botoksu "bir kerede biten bir ameliyat" değil, SÜRDÜRÜLEN bir tedavidir. Yurt dışından geliyorsanız, tekrarların nerede yapılacağını baştan planlayın.',
        'ETKİ HEMEN BAŞLAMAZ. Belirgin düzelme genellikle ilk 1–2 hafta içinde yerleşir. İşlemden hemen sonra şikâyetlerin aynı olması başarısızlık anlamına gelmez.',
        'SIKIŞMA + İDRARDA KAN BASİT AŞIRI AKTİF MESANE DEĞİLDİR. İdrarda kan, tedaviye yanıtsız şikâyet veya sigara öyküsü varsa, botoks düşünülmeden önce mesane içi bir sorun (taş, tümör, enfeksiyon) sistoskopi ile dışlanmalıdır. Bu bir güvenlik adımıdır ve atlanmaz.'
      ],
      eligibility: {
        suitable: [
          'Mesane eğitimi ve yaşam tarzı düzenlemesinden yeterli fayda görmeyen hastalar',
          'Aşırı aktif mesane ilaçlarından fayda görmeyen veya ağız kuruluğu, kabızlık, bulanık görme gibi yan etkileri kaldıramayan hastalar',
          'Yaşlı hastalarda bilişsel etki endişesi nedeniyle antikolinerjik ilaçtan kaçınılması gereken olgular',
          'Nörolojik hastalığa bağlı mesane aşırı aktivitesi olan seçilmiş hastalar',
          'Gerekirse kendi kendine sonda takmaya İSTEKLİ olan hastalar'
        ],
        notSuitable: [
          'Gerekirse kendi kendine sonda takmayı kabul etmeyen hastalar — bu bir tercih değil, güvenlik şartıdır',
          'Aktif idrar yolu enfeksiyonu olanlar: önce enfeksiyon tedavi edilir',
          'Mesanesini zaten tam boşaltamayan ve kalan idrarı yüksek olan hastalar',
          'Botulinum toksinine alerjisi olanlar veya nöromusküler kavşak hastalığı (ör. myastenia gravis) bulunanlar',
          'Şikâyetinin asıl kaynağı stres tipi idrar kaçırma olan hastalar — botoks bu tipe fayda sağlamaz',
          'Gebeler ve emzirenler'
        ]
      },
      technology: [
        'Esnek veya rijit sistoskopi seti',
        'Mesane içi enjeksiyon iğnesi (çok noktadan uygulama)',
        'Botulinum toksini — doz, tablo nörolojik kaynaklı mı değil mi olduğuna göre belirlenir',
        'İşeme günlüğü ve ped testi ile şikâyetin objektif ölçülmesi',
        'Üroflowmetri ve işeme sonrası kalan idrar ölçümü — işlem öncesi ve sonrası',
        'Gerekli görülen hastalarda ürodinami'
      ],
      surgeonExperience: {
        caseVolume: '',
        note: 'Mesane botoksunda sonucu belirleyen, enjeksiyonun kendisi kadar hasta seçimidir: sıkışma mı stres mi baskın, mesane tam boşalıyor mu, hasta gerekirse sonda takmaya istekli mi. Doç. Dr. Müslüm Ergün’ün kadın ürolojisi ve işeme bozukluklarındaki deneyimi bu değerlendirmenin temelini oluşturur.'
      },
      timeline: [
        { when: 'Uzaktan', title: 'Ön değerlendirme', body: 'Şikâyetlerinizin tipi, denenmiş tedaviler ve kullandığınız ilaçlar, varsa ürodinami sonucu, idrar tahlil ve kültürleri incelenir. Birkaç günlük işeme günlüğü tutmanız istenir — bu, şikâyetin gerçek ağırlığını gösteren en iyi belgedir.' },
        { when: '1. Gün', title: 'Muayene ve testler', body: 'Muayene, üroflowmetri, işeme sonrası kalan idrar ölçümü, idrar tahlili ve kültürü. Kültürde üreme varsa işlem ertelenir. Gerekirse sistoskopi ile mesane içi değerlendirilir.' },
        { when: '2. Gün', title: 'İşlem', body: 'Sistoskopi ile mesane içine girilir ve toksin, mesane kasının içine çok sayıda küçük noktadan verilir. İşlem kısadır; çoğu hastada lokal anestezi veya hafif sedasyon yeterlidir. Aynı gün evinize dönersiniz.' },
        { when: '1.–3. Gün', title: 'İlk günler', body: 'İdrarda hafif kan ve yanma olağandır. Bol sıvı alınır. Etkinin yerleşmesi günler alır; ilk gün şikâyetlerin aynı olması beklenen bir durumdur.' },
        { when: '4.–7. Gün', title: 'Kalan idrar kontrolü', body: 'Mesanenin tam boşalıp boşalmadığı ultrasonla ölçülür. Bu kontrol, kendi kendine sonda gerekip gerekmediğini gösterdiği için ATLANMAZ. Dönüş uçuşu bu kontrolden sonraya planlanır.' },
        { when: '2.–6. hafta', title: 'Sonuç değerlendirmesi', body: 'İşeme günlüğü yeniden tutulur ve sıkışma, gece kalkma ve kaçırma sayılarındaki değişim karşılaştırılır.' }
      ],
      risks: [
        'MESANENİN TAM BOŞALAMAMASI VE KENDİ KENDİNE SONDA GEREKMESİ: En önemli ve en sık konuşulması gereken risktir. Geçicidir, ancak toksinin etkisi geçene kadar sürebilir. Hastanın bunu yapmaya istekli olması işlem öncesi şarttır',
        'İDRAR YOLU ENFEKSİYONU: Botoks sonrası en sık görülen yan etkilerdendir; özellikle mesane tam boşalmıyorsa riski artar',
        'İdrarda kan ve işerken yanma — ilk günlerde beklenen bulgulardır',
        'ETKİNİN YETERSİZ OLMASI: Bazı hastalarda şikâyetlerde beklenen azalma olmaz. Doz ve uygulama gözden geçirilir, ancak her hastada fayda garanti edilemez',
        'ETKİNİN GEÇİCİ OLMASI: Şikâyetler aylar içinde geri döner ve işlemin tekrarlanması gerekir. Bu bir komplikasyon değil, yöntemin doğasıdır',
        'Çok seyrek olarak toksinin uzak kas gruplarında geçici güçsüzlük yapması (genel halsizlik, yutma güçlüğü). Böyle bir belirti olursa derhal başvurulmalıdır',
        'Sistoskopiye bağlı nadir yaralanma riski'
      ],
      alternatives: [
        'Mesane eğitimi ve işeme aralıklarının kademeli uzatılması — ilk basamaktır ve çoğu hastada ölçülebilir fayda sağlar',
        'Sıvı ve kafein düzenlemesi, kabızlığın giderilmesi, kilo yönetimi, sigaranın bırakılması',
        'Pelvik taban kas egzersizleri ve fizyoterapi',
        'Antimuskarinik ilaçlar — yaşlıda bilişsel etki endişesi nedeniyle dikkatle kullanılır',
        'Beta-3 agonisti ilaçlar — farklı etki mekanizması; antimuskariniklerin yan etkisini kaldıramayanlarda',
        'Tibial sinir uyarımı — iğne veya yüzeysel elektrotla yapılan, seanslara dayalı yöntem',
        'Sakral nöromodülasyon — önce TEST dönemi yapılır; hasta kalıcı cihaza baştan mecbur değildir',
        'Mesane büyütme ameliyatı (augmentasyon) — çok seçilmiş, diğer seçeneklerin tükendiği olgularda'
      ],
      comparison: {
        title: 'Botoks, ilaç ve nöromodülasyon: hangi denge size uyuyor',
        columns: ['Ölçüt', 'Mesane botoksu', 'İlaç tedavisi', 'Sakral nöromodülasyon'],
        rows: [
          { label: 'Uygulama', values: ['Sistoskopiyle tek seans', 'Günlük ilaç', 'Test dönemi + kalıcı cihaz'] },
          { label: 'Etkinin başlangıcı', values: ['Günler içinde', 'Haftalar içinde', 'Test döneminde görülür'] },
          { label: 'Süreklilik', values: ['Geçici; tekrar gerekir', 'İlaç sürdükçe', 'Cihaz kaldıkça'] },
          { label: 'Sonda gerekme ihtimali', values: ['Var — işlem öncesi konuşulur', 'Beklenmez', 'Beklenmez'] },
          { label: 'Sistemik yan etki', values: ['Çok seyrek', 'Ağız kuruluğu, kabızlık, bilişsel etki endişesi', 'Beklenmez'] },
          { label: 'Vücutta kalıcı cihaz', values: ['Yok', 'Yok', 'Var'] },
          { label: 'Önce deneme imkânı', values: ['Yok', 'Var — ilaç kesilebilir', 'Var — test dönemi'] },
          { label: 'Yurt dışı hasta için pratiklik', values: ['Tekrarlar planlanmalı', 'Reçete ile sürdürülebilir', 'Cihaz takibi gerekir'] }
        ],
        note: 'Bu tablo bir sıralama değildir. İlaç yan etkilerini kaldıramayan biri için botoks öne çıkar; kalıcı cihaz istemeyen biri için nöromodülasyon geri plana düşer; tekrar için seyahat edemeyecek biri içinse botoksun süreklilik yükü ağır gelebilir. Önceliğinizi açıkça söyleyin.'
      },
      recovery: [
        { period: 'İlk 24 saat', body: 'İdrarda hafif kan ve işerken yanma olağandır. Bol sıvı alınır. Ateş, idrar yapamama veya karında dolgunluk hissinde derhal başvurulmalıdır.' },
        { period: '2.–7. gün', body: 'Günlük yaşama hemen dönülür. Etki bu dönemde yerleşmeye başlar; sıkışma hissinin azaldığı ilk fark edilen değişikliktir.' },
        { period: 'Kalan idrar kontrolü', body: 'Mesanenin tam boşalıp boşalmadığı ölçülür. Gerekirse kendi kendine sonda takma öğretilir; bu geçici bir dönemdir ve yapılması öğrenildiğinde zorluk yaratmaz.' },
        { period: '2.–6. hafta', body: 'Sonuç işeme günlüğü ile değerlendirilir. Gece kalkma sayısı ve ped kullanımı en anlaşılır ölçütlerdir.' },
        { period: 'Aylar', body: 'Etki kademeli olarak azalır. Şikâyetler geri döndüğünde işlem tekrarlanır. Tekrar zamanının hastadan hastaya değiştiğini ve "takvime göre" değil "şikâyete göre" belirlendiğini bilin.' }
      ],
      price: {
        from: 0,
        to: 0,
        currency: 'EUR',
        disclaimer:
          'Tutar; kullanılan toksin dozuna, anestezi tipine ve ek tetkiklere göre değişir. TEKRAR GEREKECEĞİ için toplam maliyeti tek bir seans üzerinden değil, yıllık olarak değerlendirin. Kalem kalem ayrılmış yazılı teklif, tetkikleriniz incelendikten sonra verilir.'
      },
      packageIncludes: [
        'Muayene ve işeme bozukluğu değerlendirmesi',
        'Üroflowmetri ve işeme sonrası kalan idrar ölçümü',
        'Kan ve idrar tetkikleri, idrar kültürü',
        'Sistoskopi ve enjeksiyon işlemi',
        'Botulinum toksini ve sarf malzemeleri',
        'Anestezi (lokal, sedasyon veya genel)',
        'İşlem sonrası kalan idrar kontrolü',
        'Gerekirse kendi kendine sonda takma eğitimi',
        'Havalimanı–hastane–otel transferleri',
        'Konaklama (hasta + 1 refakatçi)',
        'Tıbbi tercüman ve hasta koordinatörü',
        'Dönüşten sonra uzaktan takip'
      ],
      faqs: [
        { q: 'Kendi kendime sonda takmak zorunda kalır mıyım?', a: 'Bir kısım hastada mesane tam boşalamaz ve geçici olarak günde birkaç kez sonda takmak gerekir. Bu ihtimal işlemden önce konuşulur ve bunu yapmaya istekli olmanız şarttır. İstekli değilseniz bu işlem size önerilmez; bu bir tercih değil, güvenlik şartıdır.' },
        { q: 'Etkisi ne kadar sürer?', a: 'Etki aylar içinde azalır ve şikâyetler geri döner; işlemin tekrarlanması gerekir. Süre hastadan hastaya değişir. Bu bir başarısızlık değil, yöntemin doğasıdır — ve yurt dışından geliyorsanız planınızın bir parçası olmalıdır.' },
        { q: 'İşlemden hemen sonra düzelecek miyim?', a: 'Hayır. Belirgin düzelme genellikle ilk 1–2 hafta içinde yerleşir. İlk gün şikâyetlerin aynı olması beklenen bir durumdur.' },
        { q: 'Yüz botoksu ile aynı şey mi?', a: 'Kullanılan madde aynı ailedendir, ancak uygulama yeri, dozu ve amacı tamamen farklıdır. Mesane botoksu bir kozmetik işlem değil, sistoskopi ile yapılan bir ürolojik tedavidir.' },
        { q: 'Önce ilaç denemem şart mı?', a: 'Genellikle evet. Mesane eğitimi ve ilaç tedavisi ilk basamaklardır. Botoks, bunlardan fayda görülmediğinde veya yan etkiler kaldırılamadığında gündeme gelir. Yaşlı hastalarda antikolinerjik ilacın bilişsel etki endişesi nedeniyle bu sıralama değişebilir.' },
        { q: 'Stres tipi idrar kaçırmam da var, botoks onu da çözer mi?', a: 'Hayır. Botoks yalnızca sıkışmaya bağlı şikâyetlere yöneliktir. Öksürürken, hapşırırken kaçırma (stres tipi) için askı ameliyatı gibi farklı bir yaklaşım gerekir. Karışık tipte hangi şikâyetin baskın olduğu önceden belirlenir.' },
        { q: 'İşlem ağrılı mı?', a: 'Çoğu hastada lokal anestezi veya hafif sedasyon yeterlidir. İşlem kısadır. İşerken yanma ilk günlerde olağandır ve bol sıvı ile azalır.' },
        { q: 'Enfeksiyon riski var mı?', a: 'Evet, botoks sonrası en sık görülen yan etkilerdendir ve mesane tam boşalmıyorsa riski artar. Ateş, titreme veya bulanık-kokulu idrar durumunda hemen başvurun.' },
        { q: 'Türkiye’de ne kadar kalmalıyım?', a: 'Genellikle 4–6 gün. Kalan idrar kontrolü burada yapıldığı için dönüş uçuşunu bu kontrolden sonraya planlayın; bu kontrol sonda gerekip gerekmediğini gösterir.' },
        { q: 'Tekrarını ülkemde yaptırabilir miyim?', a: 'Çoğu ülkede bu işlem yapılabilmektedir. Dönmeden önce size yazılı bir özet veririz: uygulanan doz, enjeksiyon noktası sayısı ve işlem tarihi. Bu belge, tekrarı başka bir merkezde yaptıracaksanız gereklidir.' },
        { q: 'Hangi belgeleri göndermeliyim?', a: 'Birkaç günlük işeme günlüğü, varsa ürodinami sonucu, üroflowmetri ve işeme sonrası kalan idrar ölçümü, denediğiniz ilaçların listesi ve ne kadar süre kullandığınız, idrar tahlil ve kültürleri, varsa sistoskopi raporu.' }
      ],
      sources: [
        {
          label: 'EAU Guidelines on Non-neurogenic Female LUTS — Avrupa Üroloji Derneği',
          url: 'https://uroweb.org/guidelines/non-neurogenic-female-luts'
        },
        {
          label: 'EAU Guidelines on Neuro-urology — Avrupa Üroloji Derneği',
          url: 'https://uroweb.org/guidelines/neuro-urology'
        }
      ]
    },
    en: {
      title: 'Bladder Botox (Intradetrusor Botulinum Toxin)',
      summary:
        'Where medication is not enough in overactive bladder, botulinum toxin is injected into the bladder muscle through a cystoscope to reduce the involuntary contractions.',
      metaTitle: 'Bladder Botox: When It Is Used in Overactive Bladder',
      metaDescription:
        'Intravesical botulinum toxin: who it suits, how it is given, how long it lasts, the possibility of self-catheterisation, the risks and honest expectations.',
      quickFacts: {
        duration: '10–20 minutes',
        anesthesia: 'Local, sedation or general — according to the patient',
        hospitalStay: 'Day case',
        stayInTurkey: '4–6 days',
        catheter: 'Usually not needed',
        returnToWork: '1–2 days',
        flightClearance: 'After the review appointment'
      },
      definition: [
        'Overactive bladder is a pattern of sudden, hard-to-suppress urgency, frequency, waking at night, and in some patients leakage before reaching the toilet. The problem lies not in the urethra but in the BLADDER MUSCLE contracting of its own accord. That is why a sling — the operation for stress incontinence — does not solve this complaint.',
        'Bladder Botox is the injection of botulinum toxin into the bladder muscle at many small points, under cystoscopic vision. The toxin temporarily weakens the nerve signal reaching the muscle; the bladder contracts involuntarily less often and can hold more urine. The procedure is carried out through the urinary passage; no incision is made.',
        'THIS IS NOT A FIRST-LINE TREATMENT. Fluid and caffeine adjustment, bladder training (gradually lengthening the intervals between voids), relieving constipation, weight management and pelvic floor exercises come first. Medication is tried next. Botox comes into play when those steps give insufficient benefit, or when the side effects of medication cannot be tolerated.',
        'THE MOST IMPORTANT POINT: THE POSSIBILITY OF SELF-CATHETERISATION. Because the toxin weakens the bladder muscle, some patients cannot empty fully, and a proportion of them need to pass a catheter themselves a few times a day for a period. This possibility is discussed BEFORE the procedure, and being willing to do it if needed is a condition of treatment. A patient unwilling to do so is not offered this procedure. Do not trust a centre that does not tell you this.',
        'THE EFFECT IS NOT PERMANENT. The action of botulinum toxin wanes over months; when symptoms return, the procedure is repeated. The interval varies from patient to patient. Bladder Botox is therefore not "an operation that is over once it is done" but an ONGOING treatment. If you are travelling from abroad, plan from the outset where the repeats will be done.',
        'THE EFFECT DOES NOT BEGIN IMMEDIATELY. Clear improvement usually settles within the first one to two weeks. Symptoms being unchanged immediately after the procedure does not mean it has failed.',
        'URGENCY PLUS BLOOD IN THE URINE IS NOT SIMPLE OVERACTIVE BLADDER. Where there is blood in the urine, symptoms unresponsive to treatment, or a smoking history, a problem inside the bladder (a stone, a tumour, infection) must be excluded by cystoscopy before Botox is considered. That is a safety step and it is not skipped.'
      ],
      eligibility: {
        suitable: [
          'Patients who gain insufficient benefit from bladder training and lifestyle measures',
          'Patients who gain no benefit from overactive bladder medication, or cannot tolerate dry mouth, constipation or blurred vision',
          'Older patients in whom anticholinergic medication should be avoided because of concern about cognitive effects',
          'Selected patients with bladder overactivity due to neurological disease',
          'Patients WILLING to self-catheterise if it becomes necessary'
        ],
        notSuitable: [
          'Patients who will not accept self-catheterisation if needed — this is a safety condition, not a preference',
          'Patients with an active urinary infection: the infection is treated first',
          'Patients who already fail to empty the bladder and have a high residual volume',
          'Patients allergic to botulinum toxin or with a neuromuscular junction disorder (such as myasthenia gravis)',
          'Patients whose real problem is stress incontinence — Botox does not help that type',
          'Women who are pregnant or breastfeeding'
        ]
      },
      technology: [
        'Flexible or rigid cystoscopy set',
        'Intravesical injection needle (multiple-site delivery)',
        'Botulinum toxin — the dose depends on whether the overactivity is neurological in origin',
        'Bladder diary and pad test to measure symptoms objectively',
        'Uroflowmetry and post-void residual measurement — before and after',
        'Urodynamics in selected patients'
      ],
      surgeonExperience: {
        caseVolume: '',
        note: 'In bladder Botox the result is determined as much by patient selection as by the injection itself: whether urgency or stress predominates, whether the bladder empties fully, and whether the patient is willing to catheterise if needed. Assoc. Prof. Dr. Müslüm Ergün’s experience in female urology and voiding dysfunction underpins that assessment.'
      },
      timeline: [
        { when: 'Remotely', title: 'Initial assessment', body: 'The type of your symptoms, treatments already tried and your medication, any urodynamics, urinalyses and cultures are reviewed. You are asked to keep a bladder diary for a few days — it is the single best document of how heavy the symptoms really are.' },
        { when: 'Day 1', title: 'Examination and tests', body: 'Examination, uroflowmetry, post-void residual, urinalysis and culture. If the culture grows an organism, the procedure is postponed. Cystoscopy is performed where the inside of the bladder needs assessing.' },
        { when: 'Day 2', title: 'Procedure', body: 'The bladder is entered with a cystoscope and the toxin delivered into the bladder muscle at many small points. The procedure is short; local anaesthesia or light sedation suffices for most patients. You go home the same day.' },
        { when: 'Days 1–3', title: 'The first days', body: 'Slight blood in the urine and stinging are usual. Drink plenty. The effect takes days to settle; symptoms being unchanged on the first day is expected.' },
        { when: 'Days 4–7', title: 'Residual volume check', body: 'Whether the bladder empties fully is measured by ultrasound. This check is NOT skipped, because it shows whether self-catheterisation is needed. The return flight is planned for after it.' },
        { when: 'Weeks 2–6', title: 'Assessment of the result', body: 'The bladder diary is kept again and the change in urgency episodes, night-time waking and leakage is compared.' }
      ],
      risks: [
        'INCOMPLETE BLADDER EMPTYING AND THE NEED TO SELF-CATHETERISE: the most important risk and the one that must be discussed most openly. It is temporary but can last until the toxin wears off. Willingness to do it is a condition before the procedure',
        'URINARY TRACT INFECTION: among the commonest side effects after Botox, and more likely where the bladder does not empty fully',
        'Blood in the urine and stinging on voiding — expected in the first days',
        'INSUFFICIENT EFFECT: in some patients the expected reduction in symptoms does not occur. The dose and technique are reviewed, but benefit cannot be guaranteed in every patient',
        'THE EFFECT IS TEMPORARY: symptoms return over months and the procedure must be repeated. That is not a complication but the nature of the method',
        'Very rarely the toxin causes temporary weakness in distant muscle groups (general weakness, difficulty swallowing). Any such symptom requires immediate contact',
        'The rare risk of injury related to cystoscopy'
      ],
      alternatives: [
        'Bladder training and gradually lengthening the intervals between voids — the first step, with measurable benefit in most patients',
        'Adjusting fluids and caffeine, relieving constipation, weight management, stopping smoking',
        'Pelvic floor exercises and physiotherapy',
        'Antimuscarinic medication — used with care in older people because of concern about cognitive effects',
        'Beta-3 agonist medication — a different mechanism, for those who cannot tolerate antimuscarinic side effects',
        'Tibial nerve stimulation — a session-based method using a needle or surface electrode',
        'Sacral neuromodulation — a TEST period comes first; the patient is not committed to a permanent device from the outset',
        'Bladder augmentation surgery — in highly selected cases where other options are exhausted'
      ],
      comparison: {
        title: 'Botox, medication and neuromodulation: which trade-off suits you',
        columns: ['Criterion', 'Bladder Botox', 'Medication', 'Sacral neuromodulation'],
        rows: [
          { label: 'How it is given', values: ['One session via cystoscopy', 'Daily medication', 'Test period, then permanent device'] },
          { label: 'Onset of effect', values: ['Within days', 'Within weeks', 'Seen during the test period'] },
          { label: 'Continuity', values: ['Temporary; repetition needed', 'While the drug is taken', 'While the device is in place'] },
          { label: 'Possibility of needing a catheter', values: ['Yes — discussed beforehand', 'Not expected', 'Not expected'] },
          { label: 'Systemic side effects', values: ['Very rare', 'Dry mouth, constipation, cognitive concern', 'Not expected'] },
          { label: 'Permanent device in the body', values: ['No', 'No', 'Yes'] },
          { label: 'Possibility of a trial first', values: ['No', 'Yes — the drug can be stopped', 'Yes — the test period'] },
          { label: 'Practicality for an overseas patient', values: ['Repeats must be planned', 'Can be continued on prescription', 'Device follow-up needed'] }
        ],
        note: 'This table is not a ranking. For someone who cannot tolerate drug side effects, Botox comes to the fore; for someone who does not want a permanent device, neuromodulation recedes; and for someone who cannot travel for repeats, the ongoing commitment of Botox may be too much. Say plainly what matters most to you.'
      },
      recovery: [
        { period: 'First 24 hours', body: 'Slight blood in the urine and stinging are usual. Drink plenty. Fever, inability to pass urine, or a feeling of fullness in the abdomen require immediate contact.' },
        { period: 'Days 2–7', body: 'Normal life resumes at once. The effect begins to settle in this period; a reduction in the sense of urgency is the first change most people notice.' },
        { period: 'Residual volume check', body: 'Whether the bladder empties fully is measured. If needed, self-catheterisation is taught; this is a temporary phase and causes little difficulty once learned.' },
        { period: 'Weeks 2–6', body: 'The result is assessed with the bladder diary. The number of times you wake at night and your pad use are the most intelligible measures.' },
        { period: 'Months', body: 'The effect gradually wanes. When symptoms return, the procedure is repeated. The timing varies between patients and is set by symptoms, not by the calendar.' }
      ],
      price: {
        from: 0,
        to: 0,
        currency: 'EUR',
        disclaimer:
          'The amount depends on the dose of toxin used, the type of anaesthesia and any additional tests. Because REPETITION WILL BE NEEDED, assess the total cost on an annual basis rather than per session. An itemised written quotation is given once your tests have been reviewed.'
      },
      packageIncludes: [
        'Examination and voiding dysfunction assessment',
        'Uroflowmetry and post-void residual measurement',
        'Blood and urine tests, urine culture',
        'Cystoscopy and the injection procedure',
        'Botulinum toxin and consumables',
        'Anaesthesia (local, sedation or general)',
        'Residual volume check after the procedure',
        'Teaching of self-catheterisation if needed',
        'Airport–hospital–hotel transfers',
        'Accommodation (patient plus one companion)',
        'Medical interpreter and patient coordinator',
        'Remote follow-up after you return home'
      ],
      faqs: [
        { q: 'Will I have to catheterise myself?', a: 'Some patients cannot empty fully and need to pass a catheter themselves a few times a day for a period. This is discussed before the procedure, and being willing to do it is a condition. If you are not willing, this procedure is not offered to you; that is a safety condition, not a preference.' },
        { q: 'How long does it last?', a: 'The effect wanes over months and symptoms return; the procedure must be repeated. The interval varies between patients. That is not a failure but the nature of the method — and if you are travelling from abroad it must be part of your plan.' },
        { q: 'Will I be better immediately after the procedure?', a: 'No. Clear improvement usually settles within the first one to two weeks. Symptoms being unchanged on the first day is expected.' },
        { q: 'Is it the same as facial Botox?', a: 'The substance belongs to the same family, but the site, dose and purpose are entirely different. Bladder Botox is not a cosmetic procedure but a urological treatment given through a cystoscope.' },
        { q: 'Do I have to try medication first?', a: 'Usually yes. Bladder training and medication are the first steps. Botox comes into play when they give no benefit or the side effects cannot be tolerated. In older patients the order may change, because of concern about the cognitive effects of anticholinergic drugs.' },
        { q: 'I also leak with coughing — will Botox fix that?', a: 'No. Botox addresses only symptoms due to urgency. Leaking when you cough or sneeze (the stress type) needs a different approach, such as a sling. In mixed symptoms, which component predominates is established beforehand.' },
        { q: 'Is the procedure painful?', a: 'Local anaesthesia or light sedation is enough for most patients, and the procedure is short. Stinging on voiding is usual in the first days and eases with plenty of fluids.' },
        { q: 'Is there a risk of infection?', a: 'Yes, it is among the commonest side effects after Botox, and the risk is higher if the bladder does not empty fully. Seek help immediately if you have fever, shivering or cloudy, offensive urine.' },
        { q: 'How long should I stay in Türkiye?', a: 'Usually 4–6 days. Because the residual volume check is done here, plan your return flight for after it; that check shows whether a catheter will be needed.' },
        { q: 'Can I have the repeat done in my own country?', a: 'This procedure is available in most countries. Before you leave we give you a written summary: the dose used, the number of injection sites and the date. That document is necessary if the repeat is to be done elsewhere.' },
        { q: 'What documents should I send?', a: 'A bladder diary kept over a few days, any urodynamics, uroflowmetry and post-void residual, a list of the medications you have tried and for how long, urinalyses and cultures, and any cystoscopy report.' }
      ],
      sources: [
        {
          label: 'EAU Guidelines on Non-neurogenic Female LUTS — European Association of Urology',
          url: 'https://uroweb.org/guidelines/non-neurogenic-female-luts'
        },
        {
          label: 'EAU Guidelines on Neuro-urology — European Association of Urology',
          url: 'https://uroweb.org/guidelines/neuro-urology'
        }
      ]
    },
    ar: {
      title: 'بوتوكس المثانة (حقن الذيفان الوشيقي في عضلة المثانة)',
      summary:
        'حين لا تكفي الأدوية في فرط نشاط المثانة، يُحقَن الذيفان الوشيقي في عضلة المثانة عبر المنظار لتقليل التقلصات اللاإرادية.',
      metaTitle: 'بوتوكس المثانة: متى يُستعمَل في فرط نشاط المثانة',
      metaDescription:
        'حقن الذيفان الوشيقي في المثانة: لمن يصلح، وكيف يُعطى، وكم يدوم أثره، واحتمال القسطرة الذاتية، والمخاطر وتوقعات صادقة.',
      quickFacts: {
        duration: '10 إلى 20 دقيقة',
        anesthesia: 'موضعي أو تركين أو عام — بحسب المريض',
        hospitalStay: 'من دون مبيت',
        stayInTurkey: '4 إلى 6 أيام',
        catheter: 'لا تلزم عادة',
        returnToWork: 'يوم إلى يومين',
        flightClearance: 'بعد مراجعة المتابعة'
      },
      definition: [
        'فرط نشاط المثانة حالة فيها إلحاح مفاجئ يصعب كبحه، وتكرار في التبول، واستيقاظ ليلي، وعند بعض المرضى تسرّب قبل بلوغ الحمّام. والمشكلة ليست في الإحليل بل في عضلة المثانة التي تنقبض من تلقاء نفسها. ولهذا فعملية الشريط — وهي علاج السلس الجهدي — لا تحل هذه الشكوى.',
        'وبوتوكس المثانة هو حقن الذيفان الوشيقي في عضلة المثانة في نقاط صغيرة كثيرة تحت رؤية المنظار. ويُضعِف الذيفان مؤقتًا الإشارة العصبية الواصلة إلى العضلة؛ فتقلّ تقلصات المثانة اللاإرادية وتستطيع تخزين كمية أكبر. ويُجرى عبر المسالك من دون شق.',
        'وليس هذا علاج الخط الأول. فأولًا تعديل السوائل والكافيين، وتدريب المثانة (إطالة الفواصل تدريجيًا)، ومعالجة الإمساك، وضبط الوزن، وتمارين قاع الحوض. ثم تُجرَّب الأدوية. ويأتي البوتوكس حين لا تكفي هذه الخطوات أو تتعذّر احتمال آثار الأدوية الجانبية.',
        'وأهم نقطة: احتمال القسطرة الذاتية. فلأن الذيفان يُضعِف عضلة المثانة فقد لا تفرغ المثانة تمامًا عند بعض المرضى، ويحتاج جزء منهم إلى إدخال قسطرة بأنفسهم عدة مرات يوميًا لفترة. ويُناقَش هذا الاحتمال قبل الإجراء، والاستعداد له شرط. ومن لا يقبل به لا يُعرَض عليه هذا الإجراء. ولا تثق بمركز لا يقول لك ذلك.',
        'والأثر ليس دائمًا. فيخفّ أثر الذيفان خلال أشهر؛ وعند عودة الشكوى يُعاد الإجراء. والفاصل بين الجلسات يختلف من مريض إلى آخر. ولذلك فبوتوكس المثانة ليس «عملية تنتهي مرة واحدة» بل علاج مستمر. وإن كنت قادمًا من الخارج فخطّط منذ البداية أين ستُجرى الإعادات.',
        'ولا يبدأ الأثر فورًا. فالتحسن الواضح يستقر عادة خلال الأسبوع الأول أو الثاني. وبقاء الشكوى كما هي مباشرة بعد الإجراء لا يعني الفشل.',
        'والإلحاح مع دم في البول ليس فرط نشاط مثانة بسيطًا. فعند وجود دم في البول أو شكوى لا تستجيب للعلاج أو سوابق تدخين يجب استبعاد مشكلة داخل المثانة (حصاة أو ورم أو التهاب) بالتنظير قبل التفكير في البوتوكس. وهذه خطوة أمان لا تُتخطّى.'
      ],
      eligibility: {
        suitable: [
          'المرضى الذين لا يكفيهم تدريب المثانة وتعديل نمط الحياة',
          'المرضى الذين لا يستفيدون من أدوية فرط نشاط المثانة أو لا يحتملون جفاف الفم والإمساك وتشوّش الرؤية',
          'المسنّون الذين ينبغي تجنّب مضادات الكولين عندهم خشية الأثر الإدراكي',
          'المرضى المختارون ذوو فرط نشاط المثانة الناجم عن مرض عصبي',
          'المرضى المستعدون لإدخال القسطرة بأنفسهم عند اللزوم'
        ],
        notSuitable: [
          'من لا يقبل القسطرة الذاتية عند اللزوم — وهذا شرط أمان لا تفضيل',
          'المصابون بالتهاب بولي نشط: يُعالَج الالتهاب أولًا',
          'من لا تفرغ مثانته أصلًا ولديه بول متبقٍّ كثير',
          'من لديه حساسية للذيفان الوشيقي أو مرض في الوصل العصبي العضلي (كالوهن العضلي الوبيل)',
          'من مشكلته الحقيقية سلس جهدي — فالبوتوكس لا يفيد فيه',
          'الحوامل والمرضعات'
        ]
      },
      technology: [
        'طقم تنظير مثانة مرن أو صلب',
        'إبرة حقن داخل المثانة (إعطاء في نقاط متعددة)',
        'الذيفان الوشيقي — وتُحدَّد الجرعة بحسب كون فرط النشاط عصبي المنشأ أم لا',
        'مفكرة التبول واختبار الفوطة لقياس الشكوى موضوعيًا',
        'قياس تدفق البول والبول المتبقي — قبل الإجراء وبعده',
        'الدراسة الديناميكية عند مرضى مختارين'
      ],
      surgeonExperience: {
        caseVolume: '',
        note: 'في بوتوكس المثانة يتحدد الناتج باختيار المريض بقدر ما يتحدد بالحقن نفسه: هل الغالب الإلحاح أم الجهد، وهل تفرغ المثانة تمامًا، وهل المريض مستعد للقسطرة عند اللزوم. وخبرة الأستاذ المشارك د. مسلم إرغن في مسالك النساء واضطرابات التبول أساس هذا التقييم.'
      },
      timeline: [
        { when: 'عن بُعد', title: 'التقييم الأولي', body: 'تُراجَع طبيعة شكواك والعلاجات المجرَّبة وأدويتك ونتيجة الدراسة الديناميكية إن وُجدت وتحاليل البول وزروعه. ويُطلَب منك تدوين مفكرة تبوّل لبضعة أيام — وهي أفضل وثيقة تُظهر ثقل الشكوى حقًا.' },
        { when: 'اليوم الأول', title: 'الفحص والاختبارات', body: 'فحص وقياس تدفق وبول متبقٍّ وتحليل بول وزرع. وإن نما في الزرع جرثوم أُجّل الإجراء. ويُجرى تنظير المثانة إن لزم تقييم داخلها.' },
        { when: 'اليوم الثاني', title: 'الإجراء', body: 'يُدخَل إلى المثانة بالمنظار ويُعطى الذيفان داخل العضلة في نقاط صغيرة كثيرة. والإجراء قصير؛ ويكفي معظم المرضى تخدير موضعي أو تركين خفيف. وتعود إلى بيتك في اليوم نفسه.' },
        { when: 'اليوم الأول إلى الثالث', title: 'الأيام الأولى', body: 'قليل من الدم في البول وحرقة أمران معتادان. اشرب كثيرًا. ويحتاج الأثر أيامًا؛ وبقاء الشكوى في اليوم الأول متوقَّع.' },
        { when: 'اليوم الرابع إلى السابع', title: 'قياس البول المتبقي', body: 'يُقاس بالموجات هل تفرغ المثانة تمامًا. ولا يُتخطّى هذا القياس لأنه يبيّن هل تلزم القسطرة الذاتية. وتُخطَّط رحلة العودة بعده.' },
        { when: 'الأسبوع الثاني إلى السادس', title: 'تقييم النتيجة', body: 'تُدوَّن مفكرة التبول من جديد ويُقارَن التغيّر في نوبات الإلحاح والاستيقاظ الليلي والتسرّب.' }
      ],
      risks: [
        'عدم إفراغ المثانة تمامًا والحاجة إلى القسطرة الذاتية: أهم خطر وأولى ما ينبغي مناقشته بصراحة. وهو مؤقت لكنه قد يستمر إلى أن يزول أثر الذيفان. والاستعداد له شرط قبل الإجراء',
        'التهاب المسالك البولية: من أكثر الآثار الجانبية بعد البوتوكس، ويزيد احتماله إن لم تفرغ المثانة تمامًا',
        'دم في البول وحرقة عند التبول — متوقعان في الأيام الأولى',
        'عدم كفاية الأثر: عند بعض المرضى لا يحدث النقص المتوقع في الشكوى. وتُراجَع الجرعة والتقنية، لكن الفائدة لا تُضمَن لكل مريض',
        'الأثر مؤقت: تعود الشكوى خلال أشهر ويلزم تكرار الإجراء. وهذا ليس مضاعفة بل طبيعة الطريقة',
        'نادرًا جدًا يسبب الذيفان ضعفًا مؤقتًا في مجموعات عضلية بعيدة (وهن عام أو صعوبة بلع). وأي عَرَض كهذا يستدعي تواصلًا فوريًا',
        'خطر إصابة نادر متعلق بالتنظير'
      ],
      alternatives: [
        'تدريب المثانة وإطالة الفواصل تدريجيًا — الخطوة الأولى وفائدتها ملموسة عند معظم المرضى',
        'تعديل السوائل والكافيين ومعالجة الإمساك وضبط الوزن والإقلاع عن التدخين',
        'تمارين قاع الحوض والعلاج الطبيعي',
        'مضادات المسكارين — تُستعمَل بحذر عند المسنّين خشية الأثر الإدراكي',
        'ناهضات بيتا-3 — آلية مختلفة لمن لا يحتمل مضادات المسكارين',
        'تنبيه العصب الظنبوبي — طريقة قائمة على جلسات بإبرة أو قطب سطحي',
        'التعديل العصبي العجزي — تسبقه فترة اختبار؛ فالمريض ليس ملزمًا بجهاز دائم من البداية',
        'توسيع المثانة جراحيًا — في حالات مختارة جدًا حين تُستنفَد الخيارات الأخرى'
      ],
      comparison: {
        title: 'البوتوكس والدواء والتعديل العصبي: أيّ موازنة تناسبك',
        columns: ['المعيار', 'بوتوكس المثانة', 'الدواء', 'التعديل العصبي العجزي'],
        rows: [
          { label: 'طريقة التطبيق', values: ['جلسة واحدة بالمنظار', 'دواء يومي', 'فترة اختبار ثم جهاز دائم'] },
          { label: 'بدء الأثر', values: ['خلال أيام', 'خلال أسابيع', 'يُرى في فترة الاختبار'] },
          { label: 'الاستمرارية', values: ['مؤقت؛ ويلزم التكرار', 'ما دام الدواء مستعمَلًا', 'ما دام الجهاز موضوعًا'] },
          { label: 'احتمال الحاجة إلى قسطرة', values: ['موجود — ويُناقَش مسبقًا', 'غير متوقع', 'غير متوقع'] },
          { label: 'آثار جانبية عامة', values: ['نادرة جدًا', 'جفاف فم وإمساك وقلق إدراكي', 'غير متوقعة'] },
          { label: 'جهاز دائم في الجسم', values: ['لا', 'لا', 'نعم'] },
          { label: 'إمكان التجربة أولًا', values: ['لا', 'نعم — يمكن إيقاف الدواء', 'نعم — فترة الاختبار'] },
          { label: 'العملية للمريض القادم من الخارج', values: ['يجب تخطيط الإعادات', 'يمكن الاستمرار بوصفة', 'تلزم متابعة الجهاز'] }
        ],
        note: 'هذا الجدول ليس ترتيبًا. فمن لا يحتمل آثار الأدوية يتقدم عنده البوتوكس؛ ومن لا يريد جهازًا دائمًا يتراجع عنده التعديل العصبي؛ ومن لا يستطيع السفر للإعادات قد يثقل عليه عبء البوتوكس المستمر. فقل بوضوح ما الأهم عندك.'
      },
      recovery: [
        { period: 'أول 24 ساعة', body: 'قليل من الدم في البول وحرقة أمران معتادان. اشرب كثيرًا. أما الحمى أو تعذّر التبول أو الإحساس بامتلاء البطن فتستدعي تواصلًا فوريًا.' },
        { period: 'اليوم الثاني إلى السابع', body: 'تعود الحياة المعتادة فورًا. ويبدأ الأثر بالاستقرار في هذه المدة؛ ونقصان الإحساس بالإلحاح أول ما يُلاحَظ.' },
        { period: 'قياس البول المتبقي', body: 'يُقاس هل تفرغ المثانة تمامًا. وعند اللزوم يُعلَّم المريض القسطرة الذاتية؛ وهي مرحلة مؤقتة لا تشكّل صعوبة بعد تعلّمها.' },
        { period: 'الأسبوع الثاني إلى السادس', body: 'تُقيَّم النتيجة بمفكرة التبول. وعدد مرات الاستيقاظ ليلًا واستعمال الفوط أوضح المقاييس.' },
        { period: 'أشهر', body: 'يخفّ الأثر تدريجيًا. وعند عودة الشكوى يُعاد الإجراء. ويختلف الموعد من مريض إلى آخر ويُحدَّد بالشكوى لا بالتقويم.' }
      ],
      price: {
        from: 0,
        to: 0,
        currency: 'EUR',
        disclaimer:
          'يتوقف المبلغ على جرعة الذيفان ونوع التخدير والفحوص الإضافية. ولأن التكرار سيكون لازمًا فقدّر التكلفة الإجمالية على أساس السنة لا على أساس الجلسة الواحدة. ويُقدَّم عرض مكتوب مفصّل بعد مراجعة فحوصك.'
      },
      packageIncludes: [
        'الفحص وتقييم اضطراب التبول',
        'قياس تدفق البول وقياس البول المتبقي',
        'تحاليل الدم والبول وزرع البول',
        'تنظير المثانة وإجراء الحقن',
        'الذيفان الوشيقي والمستلزمات',
        'التخدير (موضعي أو تركين أو عام)',
        'قياس البول المتبقي بعد الإجراء',
        'تعليم القسطرة الذاتية عند اللزوم',
        'التنقلات بين المطار والمستشفى والفندق',
        'الإقامة (المريض ومرافق واحد)',
        'مترجم طبي ومنسّق للمرضى',
        'متابعة عن بُعد بعد العودة'
      ],
      faqs: [
        { q: 'هل سأضطر إلى إدخال القسطرة بنفسي؟', a: 'عند بعض المرضى لا تفرغ المثانة تمامًا فيلزم إدخال القسطرة عدة مرات يوميًا لفترة. ويُناقَش ذلك قبل الإجراء، والاستعداد له شرط. وإن لم تكن مستعدًا فلن يُعرَض عليك هذا الإجراء؛ وهذا شرط أمان لا تفضيل.' },
        { q: 'كم يدوم الأثر؟', a: 'يخفّ خلال أشهر وتعود الشكوى؛ ويلزم تكرار الإجراء. والمدة تختلف من مريض إلى آخر. وهذا ليس فشلًا بل طبيعة الطريقة — وإن كنت قادمًا من الخارج فليكن ذلك جزءًا من خطتك.' },
        { q: 'هل أتحسن مباشرة بعد الإجراء؟', a: 'لا. فالتحسن الواضح يستقر عادة خلال الأسبوع الأول أو الثاني. وبقاء الشكوى في اليوم الأول أمر متوقَّع.' },
        { q: 'هل هو نفسه بوتوكس الوجه؟', a: 'المادة من العائلة نفسها، لكن الموضع والجرعة والغرض مختلفة تمامًا. فبوتوكس المثانة ليس إجراءً تجميليًا بل علاج بولي يُجرى بالمنظار.' },
        { q: 'هل لا بد أن أجرّب الدواء أولًا؟', a: 'نعم عادة. فتدريب المثانة والدواء هما الخطوتان الأوليان. ويأتي البوتوكس حين لا يفيدان أو لا تُحتمَل آثارهما. وعند المسنّين قد يتغير الترتيب خشية الأثر الإدراكي لمضادات الكولين.' },
        { q: 'لديّ تسرّب عند السعال أيضًا، هل يحله البوتوكس؟', a: 'لا. فالبوتوكس يعالج الشكوى المرتبطة بالإلحاح فقط. أما التسرّب عند السعال أو العطاس (النوع الجهدي) فيحتاج نهجًا آخر كالشريط. وفي النوع المختلط يُحدَّد المكوّن الغالب مسبقًا.' },
        { q: 'هل الإجراء مؤلم؟', a: 'يكفي معظم المرضى تخدير موضعي أو تركين خفيف، والإجراء قصير. والحرقة عند التبول معتادة في الأيام الأولى وتخفّ بكثرة الشرب.' },
        { q: 'هل هناك خطر التهاب؟', a: 'نعم، فهو من أكثر الآثار الجانبية بعد البوتوكس، ويزيد الخطر إن لم تفرغ المثانة تمامًا. وراجع فورًا عند الحمى أو القشعريرة أو البول العكر كريه الرائحة.' },
        { q: 'كم أبقى في تركيا؟', a: 'عادة من 4 إلى 6 أيام. ولأن قياس البول المتبقي يتم هنا فخطّط رحلة العودة بعده؛ فهذا القياس يبيّن هل ستلزم القسطرة.' },
        { q: 'هل أستطيع إجراء الإعادة في بلدي؟', a: 'هذا الإجراء متاح في معظم البلدان. ونعطيك قبل المغادرة خلاصة مكتوبة: الجرعة المستعملة وعدد نقاط الحقن والتاريخ. وهذه الوثيقة لازمة إن أُجريت الإعادة في مكان آخر.' },
        { q: 'ما الوثائق التي أرسلها؟', a: 'مفكرة تبوّل لبضعة أيام، ونتيجة الدراسة الديناميكية إن وُجدت، وقياس التدفق والبول المتبقي، وقائمة الأدوية التي جرّبتها ومدتها، وتحاليل البول وزروعه، وتقرير تنظير المثانة إن وُجد.' }
      ],
      sources: [
        {
          label: 'إرشادات EAU حول أعراض الجهاز البولي السفلي غير العصبية لدى النساء — الجمعية الأوروبية للمسالك البولية',
          url: 'https://uroweb.org/guidelines/non-neurogenic-female-luts'
        },
        {
          label: 'إرشادات EAU في المسالك البولية العصبية — الجمعية الأوروبية للمسالك البولية',
          url: 'https://uroweb.org/guidelines/neuro-urology'
        }
      ]
    }
  }
};
