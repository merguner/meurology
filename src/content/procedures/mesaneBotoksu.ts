import type { Treatment } from '../types';

/**
 * MESANE BOTOKSU (İNTRADETRUSÖR BOTULİNUM TOKSİNİ) — yeni sayfa (Görev 7).
 *
 * reviewStatus: 'draft' — hekim onayı bekliyor; `lastReviewed` bilerek boş.
 * Kaynak: EAU Non-neurogenic Female LUTS + Neuro-urology kılavuzları.
 * Başarı oranı/yüzde YAZILMAMIŞTIR. Kendi kendine sonda takma ihtimali
 * BİLEREK öne çıkarılmıştır: hastanın buna istekli olması şarttır.
 */
export const mesaneBotoksu: Treatment = {
  slug: 'mesane-botoksu',
  procedure: { type: 'TherapeuticProcedure', bodyLocation: 'Urinary bladder' },
  parent: 'kadin-urolojisi',
  icon: 'female',
  reviewStatus: 'draft',
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
    de: {
      title: 'Blasen-Botox (Botulinumtoxin in den Blasenmuskel)',
      summary:
        'Reicht bei überaktiver Blase die medikamentöse Therapie nicht aus, wird Botulinumtoxin über ein Zystoskop in den Blasenmuskel gespritzt, um die unwillkürlichen Kontraktionen zu vermindern.',
      metaTitle: 'Blasen-Botox: wann es bei überaktiver Blase eingesetzt wird',
      metaDescription:
        'Botulinumtoxin in die Blase: für wen geeignet, wie es verabreicht wird, wie lange es wirkt, die Möglichkeit des Selbstkatheterisierens, Risiken und ehrliche Erwartungen.',
      quickFacts: {
        duration: '10–20 Minuten',
        anesthesia: 'Lokal, Sedierung oder Vollnarkose — je nach Patientin',
        hospitalStay: 'Ambulant',
        stayInTurkey: '4–6 Tage',
        catheter: 'Meist nicht nötig',
        returnToWork: '1–2 Tage',
        flightClearance: 'Nach der Kontrolluntersuchung'
      },
      definition: [
        'Die überaktive Blase äußert sich in plötzlichem, kaum unterdrückbarem Harndrang, häufigem Wasserlassen, nächtlichem Aufwachen und bei manchen Betroffenen im Harnverlust, bevor die Toilette erreicht ist. Das Problem liegt nicht in der Harnröhre, sondern im BLASENMUSKEL, der sich von selbst zusammenzieht. Deshalb löst eine Schlinge — die Operation bei Belastungsinkontinenz — diese Beschwerden nicht.',
        'Beim Blasen-Botox wird Botulinumtoxin unter zystoskopischer Sicht an vielen kleinen Stellen in den Blasenmuskel gespritzt. Das Toxin schwächt vorübergehend die Nervenerregung des Muskels; die Blase kontrahiert seltener unwillkürlich und kann mehr Urin speichern. Der Eingriff erfolgt über die Harnröhre, ein Schnitt entfällt.',
        'DIES IST KEINE ERSTLINIENTHERAPIE. Zuerst kommen Trink- und Koffeinanpassung, Blasentraining (schrittweises Verlängern der Intervalle), Behandlung der Verstopfung, Gewichtsmanagement und Beckenbodenübungen. Danach wird eine medikamentöse Therapie versucht. Botox kommt ins Spiel, wenn diese Schritte zu wenig bringen oder die Nebenwirkungen nicht tolerabel sind.',
        'DER WICHTIGSTE PUNKT: DIE MÖGLICHKEIT DES SELBSTKATHETERISIERENS. Weil das Toxin den Blasenmuskel schwächt, können manche Patientinnen die Blase nicht vollständig entleeren; ein Teil von ihnen muss sich für eine Zeit mehrmals täglich selbst katheterisieren. Diese Möglichkeit wird VOR dem Eingriff besprochen, und die Bereitschaft dazu ist Voraussetzung. Wer dazu nicht bereit ist, bekommt diesen Eingriff nicht angeboten. Einem Zentrum, das das nicht sagt, sollten Sie nicht vertrauen.',
        'DIE WIRKUNG IST NICHT DAUERHAFT. Sie lässt über Monate nach; kehren die Beschwerden zurück, wird der Eingriff wiederholt. Das Intervall ist individuell. Blasen-Botox ist deshalb keine „einmal erledigte Operation", sondern eine FORTLAUFENDE Behandlung. Wer aus dem Ausland anreist, sollte von Anfang an planen, wo die Wiederholungen erfolgen.',
        'DIE WIRKUNG SETZT NICHT SOFORT EIN. Eine deutliche Besserung stellt sich meist in den ersten ein bis zwei Wochen ein. Unveränderte Beschwerden unmittelbar nach dem Eingriff bedeuten kein Versagen.',
        'DRANG PLUS BLUT IM URIN IST KEINE EINFACHE ÜBERAKTIVE BLASE. Bei Blut im Urin, therapieresistenten Beschwerden oder Raucheranamnese muss vor einem Botox ein Problem in der Blase (Stein, Tumor, Infekt) zystoskopisch ausgeschlossen werden. Das ist ein Sicherheitsschritt und wird nicht übersprungen.'
      ],
      eligibility: {
        suitable: [
          'Patientinnen, die von Blasentraining und Allgemeinmaßnahmen nicht genug profitieren',
          'Patientinnen ohne Nutzen von Medikamenten oder mit nicht tolerablen Nebenwirkungen wie Mundtrockenheit, Verstopfung, Sehstörungen',
          'Ältere Patientinnen, bei denen Anticholinergika wegen Sorge um kognitive Effekte vermieden werden sollten',
          'Ausgewählte Patientinnen mit neurologisch bedingter Blasenüberaktivität',
          'Patientinnen, die BEREIT sind, sich bei Bedarf selbst zu katheterisieren'
        ],
        notSuitable: [
          'Patientinnen, die ein Selbstkatheterisieren nicht akzeptieren — das ist eine Sicherheitsbedingung, keine Präferenz',
          'Patientinnen mit aktivem Harnwegsinfekt: Der Infekt wird zuerst behandelt',
          'Patientinnen, die die Blase bereits nicht entleeren und hohen Restharn haben',
          'Patientinnen mit Allergie gegen Botulinumtoxin oder mit einer Erkrankung der neuromuskulären Endplatte (z. B. Myasthenia gravis)',
          'Patientinnen, deren eigentliches Problem eine Belastungsinkontinenz ist — dort hilft Botox nicht',
          'Schwangere und Stillende'
        ]
      },
      technology: [
        'Flexibles oder starres Zystoskopie-Set',
        'Injektionsnadel für die Blase (Applikation an mehreren Stellen)',
        'Botulinumtoxin — die Dosis richtet sich danach, ob die Überaktivität neurologisch bedingt ist',
        'Miktionstagebuch und Vorlagentest zur objektiven Messung',
        'Uroflowmetrie und Restharnmessung — vor und nach dem Eingriff',
        'Urodynamik bei ausgewählten Patientinnen'
      ],
      surgeonExperience: {
        caseVolume: '',
        note: 'Beim Blasen-Botox entscheidet die Patientinnenauswahl ebenso stark wie die Injektion selbst: Überwiegt Drang oder Belastung, entleert sich die Blase vollständig, ist die Patientin bereit, bei Bedarf zu katheterisieren. Die Erfahrung von Doz. Dr. Müslüm Ergün in der Urogynäkologie und bei Miktionsstörungen trägt diese Beurteilung.'
      },
      timeline: [
        { when: 'Aus der Ferne', title: 'Erstbeurteilung', body: 'Art der Beschwerden, bereits versuchte Therapien und Ihre Medikation, eine etwaige Urodynamik, Urinbefunde und Kulturen werden gesichtet. Sie werden gebeten, einige Tage ein Miktionstagebuch zu führen — das beste Dokument darüber, wie schwer die Beschwerden wirklich sind.' },
        { when: 'Tag 1', title: 'Untersuchung und Tests', body: 'Untersuchung, Uroflowmetrie, Restharn, Urinbefund und Kultur. Wächst in der Kultur ein Erreger, wird verschoben. Eine Zystoskopie erfolgt, wenn das Blaseninnere beurteilt werden muss.' },
        { when: 'Tag 2', title: 'Eingriff', body: 'Die Blase wird zystoskopisch dargestellt und das Toxin an vielen kleinen Stellen in den Muskel eingebracht. Der Eingriff ist kurz; für die meisten genügt Lokalanästhesie oder leichte Sedierung. Sie gehen am selben Tag nach Hause.' },
        { when: 'Tag 1–3', title: 'Die ersten Tage', body: 'Etwas Blut im Urin und Brennen sind üblich. Viel trinken. Die Wirkung braucht Tage; unveränderte Beschwerden am ersten Tag sind zu erwarten.' },
        { when: 'Tag 4–7', title: 'Restharnkontrolle', body: 'Per Ultraschall wird gemessen, ob sich die Blase vollständig entleert. Diese Kontrolle wird NICHT übersprungen, denn sie zeigt, ob Selbstkatheterisieren nötig ist. Der Rückflug wird danach gelegt.' },
        { when: 'Woche 2–6', title: 'Beurteilung des Ergebnisses', body: 'Das Miktionstagebuch wird erneut geführt und die Veränderung von Drangepisoden, nächtlichem Aufstehen und Harnverlust verglichen.' }
      ],
      risks: [
        'UNVOLLSTÄNDIGE BLASENENTLEERUNG UND NOTWENDIGKEIT DES SELBSTKATHETERISIERENS: das wichtigste und offen zu besprechende Risiko. Vorübergehend, kann aber anhalten, bis das Toxin nachlässt. Die Bereitschaft dazu ist Voraussetzung',
        'HARNWEGSINFEKT: eine der häufigsten Nebenwirkungen nach Botox, wahrscheinlicher bei unvollständiger Entleerung',
        'Blut im Urin und Brennen beim Wasserlassen — in den ersten Tagen zu erwarten',
        'UNZUREICHENDE WIRKUNG: Bei manchen bleibt die erwartete Besserung aus. Dosis und Technik werden überprüft, ein Nutzen lässt sich jedoch nicht bei jeder Patientin garantieren',
        'DIE WIRKUNG IST VORÜBERGEHEND: Die Beschwerden kehren über Monate zurück und der Eingriff muss wiederholt werden. Das ist keine Komplikation, sondern die Natur des Verfahrens',
        'Sehr selten verursacht das Toxin vorübergehende Schwäche in entfernten Muskelgruppen (allgemeine Schwäche, Schluckstörung). Bei solchen Zeichen sofort Kontakt aufnehmen',
        'Das seltene Verletzungsrisiko im Rahmen der Zystoskopie'
      ],
      alternatives: [
        'Blasentraining und schrittweises Verlängern der Miktionsintervalle — der erste Schritt mit messbarem Nutzen bei den meisten',
        'Anpassung von Trinkmenge und Koffein, Behandlung der Verstopfung, Gewichtsmanagement, Rauchstopp',
        'Beckenbodenübungen und Physiotherapie',
        'Antimuskarinika — bei Älteren wegen möglicher kognitiver Effekte mit Vorsicht',
        'Beta-3-Agonisten — anderer Wirkmechanismus, für Unverträglichkeit von Antimuskarinika',
        'Tibialisnervstimulation — sitzungsbasiertes Verfahren mit Nadel oder Oberflächenelektrode',
        'Sakrale Neuromodulation — zuerst eine TESTPHASE; niemand ist von Anfang an auf ein dauerhaftes Gerät festgelegt',
        'Blasenaugmentation — nur in sehr ausgewählten Fällen, wenn andere Optionen erschöpft sind'
      ],
      comparison: {
        title: 'Botox, Medikament und Neuromodulation: welche Abwägung passt zu Ihnen',
        columns: ['Kriterium', 'Blasen-Botox', 'Medikament', 'Sakrale Neuromodulation'],
        rows: [
          { label: 'Art der Anwendung', values: ['Eine Sitzung per Zystoskopie', 'Tägliche Einnahme', 'Testphase, dann dauerhaftes Gerät'] },
          { label: 'Wirkungseintritt', values: ['Innerhalb von Tagen', 'Innerhalb von Wochen', 'In der Testphase sichtbar'] },
          { label: 'Dauerhaftigkeit', values: ['Vorübergehend; Wiederholung nötig', 'Solange eingenommen wird', 'Solange das Gerät liegt'] },
          { label: 'Mögliche Katheterpflicht', values: ['Ja — vorher besprochen', 'Nicht zu erwarten', 'Nicht zu erwarten'] },
          { label: 'Systemische Nebenwirkungen', values: ['Sehr selten', 'Mundtrockenheit, Verstopfung, kognitive Sorge', 'Nicht zu erwarten'] },
          { label: 'Dauerhaftes Implantat', values: ['Nein', 'Nein', 'Ja'] },
          { label: 'Vorheriges Ausprobieren', values: ['Nein', 'Ja — absetzbar', 'Ja — Testphase'] },
          { label: 'Praktikabilität für Auslandspatientinnen', values: ['Wiederholungen planen', 'Per Rezept fortführbar', 'Gerätenachsorge nötig'] }
        ],
        note: 'Diese Tabelle ist keine Rangfolge. Wer Nebenwirkungen nicht verträgt, für den rückt Botox nach vorn; wer kein dauerhaftes Gerät möchte, für den tritt die Neuromodulation zurück; und wer für Wiederholungen nicht reisen kann, dem fällt die Daueraufgabe des Botox schwer. Sagen Sie klar, was Ihnen am wichtigsten ist.'
      },
      recovery: [
        { period: 'Erste 24 Stunden', body: 'Etwas Blut im Urin und Brennen sind üblich. Viel trinken. Fieber, Unvermögen zu urinieren oder ein Völlegefühl im Bauch erfordern sofortigen Kontakt.' },
        { period: 'Tag 2–7', body: 'Der Alltag wird sofort wieder aufgenommen. In dieser Zeit beginnt die Wirkung; das Nachlassen des Drangs ist meist die erste bemerkte Veränderung.' },
        { period: 'Restharnkontrolle', body: 'Es wird gemessen, ob sich die Blase vollständig entleert. Bei Bedarf wird das Selbstkatheterisieren beigebracht; das ist eine vorübergehende Phase und bereitet nach dem Erlernen wenig Mühe.' },
        { period: 'Woche 2–6', body: 'Das Ergebnis wird am Miktionstagebuch beurteilt. Nächtliches Aufstehen und Vorlagenverbrauch sind die verständlichsten Maßstäbe.' },
        { period: 'Monate', body: 'Die Wirkung lässt allmählich nach. Kehren die Beschwerden zurück, wird wiederholt. Der Zeitpunkt ist individuell und richtet sich nach den Beschwerden, nicht nach dem Kalender.' }
      ],
      price: {
        from: 0,
        to: 0,
        currency: 'EUR',
        disclaimer:
          'Der Betrag hängt von der Toxindosis, der Narkoseform und etwaigen Zusatzuntersuchungen ab. Da eine WIEDERHOLUNG NÖTIG SEIN WIRD, beurteilen Sie die Gesamtkosten nicht je Sitzung, sondern auf das Jahr gerechnet. Ein detailliertes schriftliches Angebot folgt nach Sichtung Ihrer Befunde.'
      },
      packageIncludes: [
        'Untersuchung und Beurteilung der Miktionsstörung',
        'Uroflowmetrie und Restharnmessung',
        'Blut- und Urinuntersuchungen, Urinkultur',
        'Zystoskopie und Injektion',
        'Botulinumtoxin und Verbrauchsbedarf',
        'Narkose (lokal, Sedierung oder Vollnarkose)',
        'Restharnkontrolle nach dem Eingriff',
        'Anleitung zum Selbstkatheterisieren bei Bedarf',
        'Transfers Flughafen–Klinik–Hotel',
        'Unterkunft (Patientin und eine Begleitperson)',
        'Medizinischer Dolmetscher und Patientenkoordination',
        'Fernnachsorge nach der Rückkehr'
      ],
      faqs: [
        { q: 'Muss ich mich selbst katheterisieren?', a: 'Manche Patientinnen entleeren die Blase nicht vollständig und müssen sich eine Zeit lang mehrmals täglich selbst katheterisieren. Das wird vorher besprochen, und die Bereitschaft dazu ist Voraussetzung. Sind Sie nicht bereit, wird Ihnen dieser Eingriff nicht angeboten; das ist eine Sicherheitsbedingung, keine Präferenz.' },
        { q: 'Wie lange hält die Wirkung?', a: 'Sie lässt über Monate nach und die Beschwerden kehren zurück; der Eingriff muss wiederholt werden. Das Intervall ist individuell. Das ist kein Versagen, sondern die Natur des Verfahrens — und bei Anreise aus dem Ausland Teil Ihrer Planung.' },
        { q: 'Geht es mir direkt nach dem Eingriff besser?', a: 'Nein. Eine deutliche Besserung stellt sich meist in den ersten ein bis zwei Wochen ein. Unveränderte Beschwerden am ersten Tag sind zu erwarten.' },
        { q: 'Ist das dasselbe wie Botox im Gesicht?', a: 'Die Substanz gehört zur selben Familie, Ort, Dosis und Zweck sind aber völlig verschieden. Blasen-Botox ist kein kosmetischer Eingriff, sondern eine urologische Behandlung über ein Zystoskop.' },
        { q: 'Muss ich zuerst Medikamente versuchen?', a: 'Meist ja. Blasentraining und Medikamente sind die ersten Schritte. Botox kommt, wenn sie nicht helfen oder nicht vertragen werden. Bei älteren Patientinnen kann die Reihenfolge wegen der kognitiven Sorge bei Anticholinergika anders ausfallen.' },
        { q: 'Ich verliere auch beim Husten Urin — hilft Botox dagegen?', a: 'Nein. Botox wirkt nur auf drangbedingte Beschwerden. Für Harnverlust beim Husten oder Niesen (Belastungsform) braucht es ein anderes Vorgehen, etwa eine Schlinge. Bei Mischformen wird vorher bestimmt, welche Komponente überwiegt.' },
        { q: 'Ist der Eingriff schmerzhaft?', a: 'Für die meisten genügt Lokalanästhesie oder leichte Sedierung, und der Eingriff ist kurz. Brennen beim Wasserlassen ist in den ersten Tagen üblich und bessert sich mit viel Trinken.' },
        { q: 'Besteht Infektionsgefahr?', a: 'Ja, es gehört zu den häufigsten Nebenwirkungen nach Botox, und das Risiko steigt bei unvollständiger Entleerung. Bei Fieber, Schüttelfrost oder trübem, riechendem Urin sofort Hilfe suchen.' },
        { q: 'Wie lange muss ich in der Türkei bleiben?', a: 'Meist 4–6 Tage. Da die Restharnkontrolle hier erfolgt, legen Sie den Rückflug danach; diese Kontrolle zeigt, ob ein Katheter nötig wird.' },
        { q: 'Kann die Wiederholung in meinem Heimatland erfolgen?', a: 'In den meisten Ländern ist dieser Eingriff verfügbar. Vor der Abreise erhalten Sie eine schriftliche Zusammenfassung: verwendete Dosis, Zahl der Injektionsstellen und Datum. Dieses Dokument ist nötig, wenn die Wiederholung anderswo erfolgt.' },
        { q: 'Welche Unterlagen soll ich senden?', a: 'Ein über einige Tage geführtes Miktionstagebuch, eine etwaige Urodynamik, Uroflowmetrie und Restharn, eine Liste der versuchten Medikamente und der Einnahmedauer, Urinbefunde und Kulturen sowie einen etwaigen Zystoskopiebericht.' }
      ],
      sources: [
        {
          label: 'EAU-Leitlinie zu nicht-neurogenen LUTS der Frau — Europäische Gesellschaft für Urologie',
          url: 'https://uroweb.org/guidelines/non-neurogenic-female-luts'
        },
        {
          label: 'EAU-Leitlinie Neuro-Urologie — Europäische Gesellschaft für Urologie',
          url: 'https://uroweb.org/guidelines/neuro-urology'
        }
      ]
    },
    fr: {
      title: 'Botox vésical (toxine botulique intradétrusorienne)',
      summary:
        'Lorsque les médicaments ne suffisent pas dans la vessie hyperactive, de la toxine botulique est injectée dans le muscle vésical sous cystoscopie afin de réduire les contractions involontaires.',
      metaTitle: 'Botox vésical : quand y recourir dans la vessie hyperactive',
      metaDescription:
        'Toxine botulique intravésicale : à qui elle convient, comment elle est administrée, combien de temps elle agit, l’éventualité de l’autosondage, les risques et des attentes réalistes.',
      quickFacts: {
        duration: '10 à 20 minutes',
        anesthesia: 'Locale, sédation ou générale — selon la patiente',
        hospitalStay: 'Ambulatoire',
        stayInTurkey: '4 à 6 jours',
        catheter: 'Généralement inutile',
        returnToWork: '1 à 2 jours',
        flightClearance: 'Après la consultation de contrôle'
      },
      definition: [
        'La vessie hyperactive associe des urgences mictionnelles soudaines et difficiles à contenir, une pollakiurie, des réveils nocturnes et, chez certaines, des fuites avant d’atteindre les toilettes. Le problème n’est pas dans l’urètre mais dans le MUSCLE VÉSICAL qui se contracte de lui-même. C’est pourquoi une bandelette — l’opération de l’incontinence d’effort — ne résout pas ces symptômes.',
        'Le botox vésical consiste à injecter de la toxine botulique en de nombreux points du muscle vésical, sous contrôle cystoscopique. La toxine affaiblit temporairement le signal nerveux parvenant au muscle ; la vessie se contracte moins souvent de façon involontaire et peut stocker davantage. Le geste se fait par les voies naturelles, sans incision.',
        'CE N’EST PAS UN TRAITEMENT DE PREMIÈRE INTENTION. On commence par l’adaptation des boissons et de la caféine, la rééducation vésicale (allongement progressif des intervalles), le traitement de la constipation, la gestion du poids et la rééducation périnéale. Puis on essaie les médicaments. Le botox intervient lorsque ces étapes sont insuffisantes ou que les effets indésirables ne sont pas supportés.',
        'LE POINT LE PLUS IMPORTANT : L’ÉVENTUALITÉ DE L’AUTOSONDAGE. Parce que la toxine affaiblit le muscle vésical, certaines patientes ne vident pas complètement leur vessie, et une partie d’entre elles doit se sonder elle-même plusieurs fois par jour pendant un temps. Cette éventualité est discutée AVANT le geste, et y consentir est une condition. Une patiente qui n’y consent pas ne se voit pas proposer ce traitement. Ne faites pas confiance à un centre qui ne vous le dit pas.',
        'L’EFFET N’EST PAS DÉFINITIF. L’action de la toxine s’estompe en quelques mois ; lorsque les symptômes reviennent, le geste est répété. L’intervalle varie d’une patiente à l’autre. Le botox vésical n’est donc pas « une opération réglée une fois pour toutes » mais un traitement SUIVI. Si vous venez de l’étranger, prévoyez dès le départ où se feront les répétitions.',
        'L’EFFET N’EST PAS IMMÉDIAT. L’amélioration nette s’installe généralement dans les une à deux premières semaines. Des symptômes inchangés juste après le geste ne signifient pas un échec.',
        'URGENCES ET SANG DANS LES URINES NE SONT PAS UNE SIMPLE VESSIE HYPERACTIVE. En cas d’hématurie, de symptômes résistants ou d’antécédent tabagique, un problème intravésical (calcul, tumeur, infection) doit être écarté par cystoscopie avant d’envisager le botox. C’est une étape de sécurité et elle ne se saute pas.'
      ],
      eligibility: {
        suitable: [
          'Patientes insuffisamment améliorées par la rééducation vésicale et les mesures hygiéno-diététiques',
          'Patientes sans bénéfice des médicaments ou ne supportant pas la sécheresse buccale, la constipation ou la vision trouble',
          'Patientes âgées chez qui les anticholinergiques doivent être évités en raison du risque cognitif',
          'Patientes sélectionnées avec hyperactivité vésicale d’origine neurologique',
          'Patientes DISPOSÉES à s’autosonder si cela devient nécessaire'
        ],
        notSuitable: [
          'Patientes refusant l’autosondage si besoin — c’est une condition de sécurité, non une préférence',
          'Patientes présentant une infection urinaire active : l’infection est traitée d’abord',
          'Patientes ne vidant déjà pas leur vessie et ayant un résidu élevé',
          'Patientes allergiques à la toxine botulique ou atteintes d’une maladie de la jonction neuromusculaire (myasthénie par exemple)',
          'Patientes dont le vrai problème est une incontinence d’effort — le botox n’y aide pas',
          'Femmes enceintes ou allaitantes'
        ]
      },
      technology: [
        'Matériel de cystoscopie souple ou rigide',
        'Aiguille d’injection intravésicale (administration multipoints)',
        'Toxine botulique — la dose dépend de l’origine neurologique ou non de l’hyperactivité',
        'Calendrier mictionnel et pad-test pour mesurer objectivement',
        'Débitmétrie et résidu post-mictionnel — avant et après',
        'Bilan urodynamique chez certaines patientes'
      ],
      surgeonExperience: {
        caseVolume: '',
        note: 'Dans le botox vésical, le résultat tient autant à la sélection de la patiente qu’à l’injection : urgences ou effort prédominants, vidange vésicale complète ou non, disposition à se sonder si besoin. L’expérience du Dr Müslüm Ergün en urologie féminine et dans les troubles mictionnels fonde cette évaluation.'
      },
      timeline: [
        { when: 'À distance', title: 'Évaluation initiale', body: 'Le type de symptômes, les traitements déjà essayés et vos médicaments, un éventuel bilan urodynamique, les ECBU sont étudiés. Il vous est demandé de tenir un calendrier mictionnel quelques jours — le meilleur document pour apprécier la réalité de la gêne.' },
        { when: 'Jour 1', title: 'Examen et bilan', body: 'Examen, débitmétrie, résidu post-mictionnel, ECBU. Si la culture est positive, le geste est reporté. Une cystoscopie est réalisée si l’intérieur de la vessie doit être évalué.' },
        { when: 'Jour 2', title: 'Geste', body: 'La vessie est abordée par cystoscopie et la toxine est déposée dans le muscle en de nombreux points. Le geste est court ; une anesthésie locale ou une sédation légère suffit le plus souvent. Vous rentrez le jour même.' },
        { when: 'Jours 1–3', title: 'Les premiers jours', body: 'Un peu de sang dans les urines et des brûlures sont habituels. Buvez abondamment. L’effet met quelques jours à s’installer ; des symptômes inchangés le premier jour sont attendus.' },
        { when: 'Jours 4–7', title: 'Contrôle du résidu', body: 'On mesure par échographie si la vessie se vide complètement. Ce contrôle N’EST PAS sauté, car il indique si un autosondage est nécessaire. Le vol retour est prévu après.' },
        { when: 'Semaines 2–6', title: 'Évaluation du résultat', body: 'Le calendrier mictionnel est repris et l’on compare l’évolution des urgences, des réveils nocturnes et des fuites.' }
      ],
      risks: [
        'VIDANGE VÉSICALE INCOMPLÈTE ET NÉCESSITÉ D’UN AUTOSONDAGE : le risque le plus important et celui qu’il faut discuter le plus ouvertement. Transitoire, mais il peut durer jusqu’à la disparition de l’effet. Y consentir est une condition préalable',
        'INFECTION URINAIRE : parmi les effets indésirables les plus fréquents après botox, plus probable si la vessie ne se vide pas complètement',
        'Sang dans les urines et brûlures mictionnelles — attendus les premiers jours',
        'EFFET INSUFFISANT : chez certaines, la réduction attendue n’a pas lieu. La dose et la technique sont revues, mais le bénéfice ne peut être garanti chez toutes',
        'L’EFFET EST TRANSITOIRE : les symptômes reviennent en quelques mois et le geste doit être répété. Ce n’est pas une complication mais la nature de la méthode',
        'Très rarement, la toxine provoque une faiblesse transitoire de groupes musculaires à distance (faiblesse générale, troubles de la déglutition). Tout signe de ce type impose un contact immédiat',
        'Le risque rare de lésion lié à la cystoscopie'
      ],
      alternatives: [
        'Rééducation vésicale et allongement progressif des intervalles — première étape, avec bénéfice mesurable chez la plupart',
        'Adaptation des boissons et de la caféine, traitement de la constipation, gestion du poids, arrêt du tabac',
        'Rééducation périnéale et kinésithérapie',
        'Antimuscariniques — à utiliser avec prudence chez la personne âgée en raison du risque cognitif',
        'Agonistes bêta-3 — mécanisme différent, pour celles qui ne supportent pas les antimuscariniques',
        'Neurostimulation tibiale — méthode par séances, à l’aiguille ou par électrode de surface',
        'Neuromodulation sacrée — précédée d’une PÉRIODE DE TEST ; on n’est pas engagé d’emblée sur un dispositif définitif',
        'Agrandissement vésical — dans des cas très sélectionnés où les autres options sont épuisées'
      ],
      comparison: {
        title: 'Botox, médicament et neuromodulation : quel compromis vous convient',
        columns: ['Critère', 'Botox vésical', 'Médicament', 'Neuromodulation sacrée'],
        rows: [
          { label: 'Mode d’administration', values: ['Une séance par cystoscopie', 'Prise quotidienne', 'Période de test puis dispositif définitif'] },
          { label: 'Délai d’action', values: ['Quelques jours', 'Quelques semaines', 'Visible pendant le test'] },
          { label: 'Continuité', values: ['Transitoire ; répétition nécessaire', 'Tant que le traitement est pris', 'Tant que le dispositif est en place'] },
          { label: 'Éventualité d’un sondage', values: ['Oui — discutée au préalable', 'Non attendue', 'Non attendue'] },
          { label: 'Effets systémiques', values: ['Très rares', 'Sécheresse buccale, constipation, risque cognitif', 'Non attendus'] },
          { label: 'Dispositif permanent', values: ['Non', 'Non', 'Oui'] },
          { label: 'Possibilité d’essai préalable', values: ['Non', 'Oui — arrêt possible', 'Oui — période de test'] },
          { label: 'Praticité pour une patiente étrangère', values: ['Répétitions à planifier', 'Poursuite sur ordonnance', 'Suivi du dispositif nécessaire'] }
        ],
        note: 'Ce tableau n’est pas un classement. Pour qui ne supporte pas les effets des médicaments, le botox passe devant ; pour qui refuse un dispositif permanent, la neuromodulation recule ; et pour qui ne peut pas voyager pour les répétitions, la contrainte durable du botox peut peser. Dites clairement ce qui compte le plus pour vous.'
      },
      recovery: [
        { period: '24 premières heures', body: 'Un peu de sang dans les urines et des brûlures sont habituels. Buvez abondamment. Fièvre, impossibilité d’uriner ou sensation de plénitude abdominale imposent un contact immédiat.' },
        { period: 'Jours 2–7', body: 'La vie normale reprend aussitôt. L’effet commence à s’installer ; la diminution des urgences est le premier changement perçu.' },
        { period: 'Contrôle du résidu', body: 'On mesure si la vessie se vide complètement. Si nécessaire, l’autosondage est enseigné ; c’est une phase transitoire, peu difficile une fois apprise.' },
        { period: 'Semaines 2–6', body: 'Le résultat s’évalue avec le calendrier mictionnel. Le nombre de réveils nocturnes et l’usage des protections en sont les mesures les plus parlantes.' },
        { period: 'Mois', body: 'L’effet s’estompe progressivement. Quand les symptômes reviennent, on répète. Le moment varie selon les patientes et se décide sur les symptômes, non sur le calendrier.' }
      ],
      price: {
        from: 0,
        to: 0,
        currency: 'EUR',
        disclaimer:
          'Le montant dépend de la dose de toxine, du type d’anesthésie et des examens complémentaires. Comme une RÉPÉTITION SERA NÉCESSAIRE, évaluez le coût total sur l’année plutôt que par séance. Un devis écrit détaillé est remis après examen de vos documents.'
      },
      packageIncludes: [
        'Consultation et évaluation du trouble mictionnel',
        'Débitmétrie et mesure du résidu post-mictionnel',
        'Bilans sanguins et urinaires, ECBU',
        'Cystoscopie et injection',
        'Toxine botulique et consommables',
        'Anesthésie (locale, sédation ou générale)',
        'Contrôle du résidu après le geste',
        'Apprentissage de l’autosondage si nécessaire',
        'Transferts aéroport–hôpital–hôtel',
        'Hébergement (patiente et un accompagnant)',
        'Interprète médical et coordinateur patient',
        'Suivi à distance après le retour'
      ],
      faqs: [
        { q: 'Devrai-je me sonder moi-même ?', a: 'Certaines patientes ne vident pas complètement leur vessie et doivent se sonder plusieurs fois par jour pendant un temps. Cela se discute avant le geste et y consentir est une condition. Si vous n’y consentez pas, ce traitement ne vous est pas proposé ; c’est une condition de sécurité, non une préférence.' },
        { q: 'Combien de temps dure l’effet ?', a: 'Il s’estompe en quelques mois et les symptômes reviennent ; il faut répéter le geste. L’intervalle varie. Ce n’est pas un échec mais la nature de la méthode — et, si vous venez de l’étranger, cela doit faire partie de votre plan.' },
        { q: 'Irai-je mieux juste après ?', a: 'Non. L’amélioration nette s’installe généralement dans les une à deux premières semaines. Des symptômes inchangés le premier jour sont attendus.' },
        { q: 'Est-ce la même chose que le botox du visage ?', a: 'La substance appartient à la même famille, mais le site, la dose et l’objectif sont tout autres. Le botox vésical n’est pas un geste esthétique mais un traitement urologique réalisé sous cystoscopie.' },
        { q: 'Dois-je d’abord essayer les médicaments ?', a: 'Généralement oui. Rééducation vésicale et médicaments sont les premières étapes. Le botox intervient en cas d’inefficacité ou d’intolérance. Chez la personne âgée, l’ordre peut changer en raison du risque cognitif des anticholinergiques.' },
        { q: 'J’ai aussi des fuites à la toux : le botox les traitera-t-il ?', a: 'Non. Le botox n’agit que sur les symptômes liés aux urgences. Les fuites à la toux ou à l’éternuement (type effort) relèvent d’une autre approche, comme une bandelette. Dans les formes mixtes, la composante dominante est établie au préalable.' },
        { q: 'Le geste est-il douloureux ?', a: 'Une anesthésie locale ou une sédation légère suffit le plus souvent, et le geste est court. Les brûlures mictionnelles sont habituelles les premiers jours et s’atténuent en buvant beaucoup.' },
        { q: 'Y a-t-il un risque infectieux ?', a: 'Oui, c’est l’un des effets indésirables les plus fréquents après botox, et le risque augmente si la vessie ne se vide pas complètement. Consultez immédiatement en cas de fièvre, de frissons ou d’urines troubles et malodorantes.' },
        { q: 'Combien de temps rester en Türkiye ?', a: 'Généralement 4 à 6 jours. Le contrôle du résidu étant réalisé ici, prévoyez le vol retour après : ce contrôle indique si un sondage sera nécessaire.' },
        { q: 'Puis-je faire la répétition dans mon pays ?', a: 'Ce geste est disponible dans la plupart des pays. Avant votre départ, nous vous remettons un résumé écrit : dose utilisée, nombre de points d’injection et date. Ce document est nécessaire si la répétition se fait ailleurs.' },
        { q: 'Quels documents envoyer ?', a: 'Un calendrier mictionnel tenu quelques jours, un éventuel bilan urodynamique, la débitmétrie et le résidu, la liste des médicaments essayés et leur durée, les ECBU, et un éventuel compte rendu de cystoscopie.' }
      ],
      sources: [
        {
          label: 'Recommandations EAU sur les troubles mictionnels non neurogènes de la femme — Association européenne d’urologie',
          url: 'https://uroweb.org/guidelines/non-neurogenic-female-luts'
        },
        {
          label: 'Recommandations EAU en neuro-urologie — Association européenne d’urologie',
          url: 'https://uroweb.org/guidelines/neuro-urology'
        }
      ]
    },
    ru: {
      title: 'Ботокс мочевого пузыря (ботулотоксин в детрузор)',
      summary:
        'Когда при гиперактивном мочевом пузыре лекарств недостаточно, ботулотоксин вводят в мышцу пузыря через цистоскоп, чтобы уменьшить непроизвольные сокращения.',
      metaTitle: 'Ботокс мочевого пузыря: когда его применяют',
      metaDescription:
        'Внутрипузырный ботулотоксин: кому подходит, как вводится, сколько действует, вероятность самокатетеризации, риски и честные ожидания.',
      quickFacts: {
        duration: '10–20 минут',
        anesthesia: 'Местная, седация или общая — по пациенту',
        hospitalStay: 'Амбулаторно',
        stayInTurkey: '4–6 дней',
        catheter: 'Обычно не нужен',
        returnToWork: '1–2 дня',
        flightClearance: 'После контрольного осмотра'
      },
      definition: [
        'Гиперактивный мочевой пузырь — это внезапные, трудно сдерживаемые позывы, учащённое мочеиспускание, ночные пробуждения, а у части пациентов — подтекание до того, как удаётся дойти до туалета. Проблема не в уретре, а в МЫШЦЕ ПУЗЫРЯ, которая сокращается сама по себе. Поэтому петля — операция при стрессовом недержании — эту жалобу не решает.',
        'Ботокс мочевого пузыря — это введение ботулотоксина во множество точек мышцы пузыря под контролем цистоскопа. Токсин временно ослабляет нервный сигнал к мышце; пузырь реже сокращается непроизвольно и может удерживать больше мочи. Вмешательство выполняется через мочевые пути, разреза нет.',
        'ЭТО НЕ ЛЕЧЕНИЕ ПЕРВОЙ ЛИНИИ. Сначала — коррекция питья и кофеина, тренировка пузыря (постепенное увеличение интервалов), устранение запоров, контроль веса и упражнения для тазового дна. Затем пробуют лекарства. Ботокс выходит на сцену, когда эти шаги дают недостаточную пользу или побочные эффекты препаратов непереносимы.',
        'САМОЕ ВАЖНОЕ: ВЕРОЯТНОСТЬ САМОКАТЕТЕРИЗАЦИИ. Поскольку токсин ослабляет мышцу пузыря, часть пациентов не может опорожниться полностью, и некоторым из них какое-то время нужно самостоятельно вводить катетер несколько раз в день. Эту вероятность обсуждают ДО процедуры, и готовность это делать — условие лечения. Пациенту, который не готов, эту процедуру не предлагают. Не доверяйте центру, который об этом не говорит.',
        'ЭФФЕКТ НЕ ПОСТОЯННЫЙ. Действие токсина ослабевает за месяцы; когда жалобы возвращаются, процедуру повторяют. Интервал у всех разный. Поэтому ботокс пузыря — не «операция, которая закончилась», а ПРОДОЛЖАЮЩЕЕСЯ лечение. Если вы приезжаете из-за рубежа, заранее спланируйте, где будут делаться повторы.',
        'ЭФФЕКТ НАСТУПАЕТ НЕ СРАЗУ. Заметное улучшение обычно устанавливается в первые одну-две недели. Если сразу после процедуры жалобы прежние, это не значит, что она не удалась.',
        'ПОЗЫВЫ ПЛЮС КРОВЬ В МОЧЕ — ЭТО НЕ ПРОСТО ГИПЕРАКТИВНЫЙ ПУЗЫРЬ. При крови в моче, жалобах, не поддающихся лечению, или курении в анамнезе перед ботоксом нужно исключить цистоскопией проблему внутри пузыря (камень, опухоль, инфекцию). Это шаг безопасности, и его не пропускают.'
      ],
      eligibility: {
        suitable: [
          'Пациенты, которым недостаточно тренировки пузыря и коррекции образа жизни',
          'Пациенты без пользы от препаратов или не переносящие сухость во рту, запоры, нечёткость зрения',
          'Пожилые пациенты, у которых антихолинергических препаратов следует избегать из-за опасений когнитивного влияния',
          'Отдельные пациенты с гиперактивностью пузыря на фоне неврологического заболевания',
          'Пациенты, ГОТОВЫЕ при необходимости самостоятельно вводить катетер'
        ],
        notSuitable: [
          'Пациенты, не согласные на самокатетеризацию при необходимости — это условие безопасности, а не предпочтение',
          'Пациенты с активной инфекцией мочевых путей: сначала лечат инфекцию',
          'Пациенты, которые уже не опорожняют пузырь и имеют большой остаточный объём',
          'Пациенты с аллергией на ботулотоксин или с заболеванием нервно-мышечного синапса (например, миастенией)',
          'Пациенты, у которых истинная проблема — стрессовое недержание; ботокс при нём не помогает',
          'Беременные и кормящие'
        ]
      },
      technology: [
        'Гибкий или жёсткий цистоскопический набор',
        'Игла для внутрипузырной инъекции (введение во множество точек)',
        'Ботулотоксин — доза зависит от того, неврологического ли происхождения гиперактивность',
        'Дневник мочеиспускания и прокладочный тест для объективной оценки',
        'Урофлоуметрия и измерение остаточной мочи — до и после',
        'Уродинамика у отдельных пациентов'
      ],
      surgeonExperience: {
        caseVolume: '',
        note: 'При ботоксе мочевого пузыря результат определяется выбором пациента не меньше, чем самой инъекцией: что преобладает — позывы или стрессовый компонент, полностью ли опорожняется пузырь, готов ли пациент при необходимости катетеризироваться. Опыт доцента, д-ра Мюслюма Эргюна в женской урологии и расстройствах мочеиспускания лежит в основе такой оценки.'
      },
      timeline: [
        { when: 'Дистанционно', title: 'Предварительная оценка', body: 'Изучают характер жалоб, уже испробованные методы и препараты, результаты уродинамики, анализы и посевы мочи. Вас просят несколько дней вести дневник мочеиспускания — это лучший документ о реальной тяжести жалоб.' },
        { when: '1-й день', title: 'Осмотр и обследование', body: 'Осмотр, урофлоуметрия, остаточная моча, анализ и посев мочи. При росте флоры процедуру откладывают. Цистоскопию выполняют, если нужно оценить внутреннюю поверхность пузыря.' },
        { when: '2-й день', title: 'Процедура', body: 'В пузырь входят цистоскопом и вводят токсин в мышцу во множество точек. Процедура короткая; большинству достаточно местной анестезии или лёгкой седации. Домой вы уходите в тот же день.' },
        { when: '1–3-й день', title: 'Первые дни', body: 'Небольшая примесь крови в моче и жжение обычны. Пейте много. Эффекту нужно несколько дней; неизменные жалобы в первый день — ожидаемое явление.' },
        { when: '4–7-й день', title: 'Контроль остаточной мочи', body: 'УЗИ показывает, полностью ли опорожняется пузырь. Этот контроль НЕ пропускают, потому что он показывает, нужна ли самокатетеризация. Обратный рейс планируют после него.' },
        { when: '2–6-я неделя', title: 'Оценка результата', body: 'Дневник ведут снова и сравнивают изменение числа позывов, ночных подъёмов и эпизодов подтекания.' }
      ],
      risks: [
        'НЕПОЛНОЕ ОПОРОЖНЕНИЕ ПУЗЫРЯ И НЕОБХОДИМОСТЬ САМОКАТЕТЕРИЗАЦИИ: самый важный риск, который нужно обсуждать открытее всего. Он временный, но может сохраняться, пока действует токсин. Готовность к этому — условие до процедуры',
        'ИНФЕКЦИЯ МОЧЕВЫХ ПУТЕЙ: один из самых частых побочных эффектов после ботокса, вероятнее при неполном опорожнении',
        'Кровь в моче и жжение при мочеиспускании — ожидаемы в первые дни',
        'НЕДОСТАТОЧНЫЙ ЭФФЕКТ: у части пациентов ожидаемого уменьшения жалоб не происходит. Дозу и технику пересматривают, но польза не гарантирована каждому',
        'ЭФФЕКТ ВРЕМЕННЫЙ: жалобы возвращаются за месяцы, и процедуру нужно повторять. Это не осложнение, а природа метода',
        'Очень редко токсин вызывает временную слабость в отдалённых группах мышц (общая слабость, затруднение глотания). При таких признаках нужно немедленно обратиться',
        'Редкий риск повреждения, связанный с цистоскопией'
      ],
      alternatives: [
        'Тренировка пузыря и постепенное увеличение интервалов — первый шаг с измеримой пользой у большинства',
        'Коррекция питья и кофеина, устранение запоров, контроль веса, отказ от курения',
        'Упражнения для тазового дна и физиотерапия',
        'Антимускариновые препараты — у пожилых применяются с осторожностью из-за когнитивных опасений',
        'Агонисты бета-3 — другой механизм, для тех, кто не переносит антимускариновые',
        'Стимуляция тибиального нерва — метод из сеансов, иглой или поверхностным электродом',
        'Сакральная нейромодуляция — сначала ТЕСТОВЫЙ период; пациент не обязан сразу соглашаться на постоянное устройство',
        'Аугментация мочевого пузыря — в тщательно отобранных случаях, когда другие варианты исчерпаны'
      ],
      comparison: {
        title: 'Ботокс, препараты и нейромодуляция: какой компромисс вам подходит',
        columns: ['Критерий', 'Ботокс пузыря', 'Препараты', 'Сакральная нейромодуляция'],
        rows: [
          { label: 'Способ применения', values: ['Один сеанс через цистоскоп', 'Ежедневный приём', 'Тестовый период, затем постоянное устройство'] },
          { label: 'Начало действия', values: ['В течение дней', 'В течение недель', 'Видно в тестовом периоде'] },
          { label: 'Длительность', values: ['Временно; нужен повтор', 'Пока принимается препарат', 'Пока установлено устройство'] },
          { label: 'Возможная потребность в катетере', values: ['Есть — обсуждается заранее', 'Не ожидается', 'Не ожидается'] },
          { label: 'Системные побочные эффекты', values: ['Очень редки', 'Сухость во рту, запоры, когнитивные опасения', 'Не ожидаются'] },
          { label: 'Постоянное устройство в теле', values: ['Нет', 'Нет', 'Да'] },
          { label: 'Возможность пробы заранее', values: ['Нет', 'Да — препарат можно отменить', 'Да — тестовый период'] },
          { label: 'Удобство для зарубежного пациента', values: ['Повторы нужно планировать', 'Можно продолжать по рецепту', 'Нужно наблюдение за устройством'] }
        ],
        note: 'Эта таблица не рейтинг. Тому, кто не переносит побочные эффекты препаратов, ботокс выходит вперёд; тому, кто не хочет постоянного устройства, нейромодуляция отходит назад; а тому, кто не может ездить ради повторов, постоянная нагрузка ботокса может оказаться тяжёлой. Прямо скажите, что для вас важнее.'
      },
      recovery: [
        { period: 'Первые 24 часа', body: 'Небольшая примесь крови в моче и жжение обычны. Пейте много. Лихорадка, невозможность помочиться или чувство переполнения в животе требуют немедленного обращения.' },
        { period: '2–7-й день', body: 'К обычной жизни возвращаются сразу. В этот период эффект начинает устанавливаться; уменьшение позывов — первое, что замечают.' },
        { period: 'Контроль остаточной мочи', body: 'Измеряют, полностью ли опорожняется пузырь. При необходимости обучают самокатетеризации; это временный период, и после обучения он не создаёт трудностей.' },
        { period: '2–6-я неделя', body: 'Результат оценивают по дневнику. Число ночных подъёмов и использование прокладок — самые понятные меры.' },
        { period: 'Месяцы', body: 'Эффект постепенно ослабевает. Когда жалобы возвращаются, процедуру повторяют. Срок индивидуален и определяется жалобами, а не календарём.' }
      ],
      price: {
        from: 0,
        to: 0,
        currency: 'EUR',
        disclaimer:
          'Сумма зависит от дозы токсина, вида анестезии и дополнительных исследований. Поскольку ПОВТОР ПОНАДОБИТСЯ, оценивайте общую стоимость не за один сеанс, а в расчёте на год. Постатейное письменное предложение даётся после изучения ваших документов.'
      },
      packageIncludes: [
        'Осмотр и оценка расстройства мочеиспускания',
        'Урофлоуметрия и измерение остаточной мочи',
        'Анализы крови и мочи, посев мочи',
        'Цистоскопия и процедура инъекции',
        'Ботулотоксин и расходные материалы',
        'Анестезия (местная, седация или общая)',
        'Контроль остаточной мочи после процедуры',
        'Обучение самокатетеризации при необходимости',
        'Трансферы аэропорт — больница — отель',
        'Проживание (пациент и один сопровождающий)',
        'Медицинский переводчик и координатор пациента',
        'Дистанционное наблюдение после возвращения'
      ],
      faqs: [
        { q: 'Придётся ли мне катетеризироваться самому?', a: 'У части пациентов пузырь не опорожняется полностью, и какое-то время нужно вводить катетер несколько раз в день. Это обсуждается до процедуры, и готовность — условие. Если вы не готовы, процедуру вам не предложат; это условие безопасности, а не предпочтение.' },
        { q: 'Сколько длится эффект?', a: 'Он ослабевает за месяцы, и жалобы возвращаются; процедуру нужно повторять. Интервал индивидуален. Это не неудача, а природа метода — и при приезде из-за рубежа это должно быть частью плана.' },
        { q: 'Станет ли лучше сразу после процедуры?', a: 'Нет. Заметное улучшение обычно устанавливается в первые одну-две недели. Неизменные жалобы в первый день ожидаемы.' },
        { q: 'Это то же самое, что ботокс для лица?', a: 'Вещество из того же семейства, но место, доза и цель совершенно иные. Ботокс мочевого пузыря — не косметическая процедура, а урологическое лечение через цистоскоп.' },
        { q: 'Обязательно ли сначала пробовать лекарства?', a: 'Обычно да. Тренировка пузыря и препараты — первые шаги. Ботокс применяют, когда от них нет пользы или их побочные эффекты непереносимы. У пожилых порядок может меняться из-за опасений когнитивного влияния антихолинергических средств.' },
        { q: 'У меня есть и подтекание при кашле — решит ли это ботокс?', a: 'Нет. Ботокс действует только на жалобы, связанные с позывами. При подтекании во время кашля или чихания (стрессовый тип) нужен другой подход, например петля. При смешанном типе преобладающий компонент определяют заранее.' },
        { q: 'Процедура болезненна?', a: 'Большинству достаточно местной анестезии или лёгкой седации, и процедура короткая. Жжение при мочеиспускании обычно в первые дни и уменьшается при обильном питье.' },
        { q: 'Есть ли риск инфекции?', a: 'Да, это один из самых частых побочных эффектов после ботокса, и риск выше при неполном опорожнении. При лихорадке, ознобе или мутной моче с запахом обращайтесь немедленно.' },
        { q: 'Сколько нужно пробыть в Турции?', a: 'Обычно 4–6 дней. Поскольку контроль остаточной мочи проводится здесь, планируйте обратный рейс после него: он показывает, понадобится ли катетер.' },
        { q: 'Можно ли сделать повтор у себя в стране?', a: 'В большинстве стран эта процедура доступна. Перед отъездом мы даём письменное резюме: применённая доза, число точек инъекции и дата. Этот документ нужен, если повтор будет сделан в другом центре.' },
        { q: 'Какие документы прислать?', a: 'Дневник мочеиспускания за несколько дней, результат уродинамики, если он есть, урофлоуметрию и остаточную мочу, список испробованных препаратов и длительность приёма, анализы и посевы мочи, заключение цистоскопии, если оно было.' }
      ],
      sources: [
        {
          label: 'Рекомендации EAU по ненейрогенным расстройствам мочеиспускания у женщин — Европейская ассоциация урологии',
          url: 'https://uroweb.org/guidelines/non-neurogenic-female-luts'
        },
        {
          label: 'Рекомендации EAU по нейроурологии — Европейская ассоциация урологии',
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
