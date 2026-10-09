import type { Treatment } from '../types';

/**
 * YAPAY İDRAR SFİNKTERİ (AUS) — yeni sayfa (Görev 7).
 *
 * reviewStatus: 'reviewed' — hekim onayı alındı (Dr. Ergün, 6 Ekim 2026).
 * Kategori: rekonstrüktif (fiyat/hacim değil, karmaşıklık odaklı sayfa).
 * Kaynak: EAU Non-neurogenic Male LUTS (inkontinans bölümü).
 * Başarı oranı/yüzde YAZILMAMIŞTIR.
 */
export const yapaySfinkter: Treatment = {
  slug: 'yapay-idrar-sfinkteri',
  procedure: { type: 'SurgicalProcedure', bodyLocation: 'Urethra' },
  icon: 'repair',
  category: 'reconstructive',
  reviewStatus: 'reviewed',

  lastReviewed: '2026-10-06',
  offersConsultation: false,
  i18n: {
    tr: {
      title: 'Yapay İdrar Sfinkteri',
      summary:
        'Prostat ameliyatından sonra devam eden ciddi idrar kaçırmada, idrar kanalının çevresine yerleştirilen bir manşon ve skrotumdaki bir pompa ile kontrolün yeniden sağlandığı cihaz ameliyatı.',
      metaTitle: 'Yapay İdrar Sfinkteri: Prostat Sonrası İdrar Kaçırmada Çözüm',
      metaDescription:
        'Yapay idrar sfinkteri (AUS): kimlere uygun, nasıl çalışır, erkek askısıyla farkı, cihazın ömrü ve revizyon ihtimali, riskler ve dürüst beklentiler.',
      quickFacts: {
        duration: '60–120 dakika',
        anesthesia: 'Genel veya spinal anestezi',
        hospitalStay: '1–2 gece',
        stayInTurkey: '10–14 gün',
        catheter: '1 gün',
        returnToWork: '2–4 hafta (masa başı), 6 hafta (ağır iş)',
        flightClearance: 'Kontrol muayenesinden sonra'
      },
      definition: [
        'Prostat kanseri ameliyatından (radikal prostatektomi) sonra erkeklerin bir bölümünde idrar kaçırma görülür. Çoğunda bu şikâyet aylar içinde belirgin olarak azalır. Ancak bir grup hastada, pelvik taban egzersizleri ve beklemeye rağmen kaçırma devam eder ve günlük yaşamı ciddi biçimde kısıtlar. Yapay idrar sfinkteri bu grup için geliştirilmiş bir çözümdür.',
        'Cihaz üç parçadan oluşur: idrar kanalının (üretranın) çevresine yerleştirilen bir MANŞON, karın içine yerleştirilen bir SIVI DEPOSU ve skrotumda cilt altında duran bir POMPA. Normalde manşon şişiktir ve idrar kanalını kapalı tutar. İdrar yapmak istediğinizde skrotumdaki pompayı birkaç kez sıkarsınız; manşondaki sıvı depoya geçer, kanal açılır ve idrarınızı yaparsınız. Yaklaşık birkaç dakika içinde sıvı kendiliğinden manşona geri döner ve kanal yeniden kapanır.',
        'BU, HASTANIN CİHAZI KULLANMASINI GEREKTİREN BİR TEDAVİDİR. Her idrara gidişinizde pompayı kullanmanız gerekir. El becerisi, görme ve bilişsel durum bu yüzden değerlendirilir. Cihazı kullanamayacak bir hastaya takmak doğru değildir — bu, ameliyattan önce açıkça konuşulan bir konudur.',
        'EN ÖNEMLİ GÜVENLİK KURALI: Sfinkteri olan bir hastaya SONDA TAKILMADAN ÖNCE MANŞON MUTLAKA AÇILMALIDIR. Kapalı manşonun üzerinden sonda takmak idrar kanalında kalıcı hasara yol açabilir. Bu nedenle hastaya cihaz kartı verilir ve acil servise gitmesi gerektiğinde bu kartı göstermesi söylenir. Bunu söylemeyen bir merkez eksik iş yapıyordur.',
        'AMELİYAT İÇİN ERKEN DEĞİL, DOĞRU ZAMANI BEKLEMEK GEREKİR. Prostat ameliyatından sonra genellikle en az 12 ay beklenir; bu süre içinde kaçırmanın kendiliğinden düzelme ihtimali vardır. Ayrıca mesane boynunda darlık varsa önce o tedavi edilir. Erken yapılan bir cihaz ameliyatı, düzelecek bir şikâyet için kalıcı bir implant takmak anlamına gelebilir.',
        'RADYOTERAPİ ÖYKÜSÜ KARARI DEĞİŞTİRİR. Pelvik bölgeye ışın tedavisi almış hastalarda doku beslenmesi bozulduğu için cihaza bağlı sorunların (erozyon, enfeksiyon) olasılığı artar. Bu hastalarda ameliyat yine yapılabilir ancak riskler farklı konuşulur. Işın tedavisi aldıysanız bunu mutlaka baştan söyleyin.',
        'CİHAZIN BİR ÖMRÜ VARDIR. Yapay sfinkter mekanik bir sistemdir; yıllar içinde mekanik arıza, manşonun altındaki dokunun incelmesi (atrofi) veya erozyon nedeniyle revizyon gerekebilir. Bu bir başarısızlık değil, implant cerrahisinin doğasıdır ve hastaya baştan söylenmelidir. Yurt dışından geliyorsanız, olası bir revizyonun nerede yapılacağını planlayın.'
      ],
      eligibility: {
        suitable: [
          'Prostat ameliyatından sonra en az 12 ay geçmiş ve ciddi idrar kaçırması devam eden erkekler',
          'Günde birden fazla ped kullanmak zorunda kalan ve bu durum yaşamını kısıtlayan erkekler',
          'Pelvik taban egzersizlerinden yeterli fayda görmeyen erkekler',
          'Erkek askısı (sling) uygulanmış ancak yeterli sonuç alınamamış hastalar',
          'Cihazı kullanabilecek el becerisi, görme ve bilişsel yeterliliğe sahip hastalar',
          'Düzenli takibe gelebilecek ve cihaz kartını taşıyacak hastalar'
        ],
        notSuitable: [
          'Prostat ameliyatından bu yana 12 aydan az süre geçmiş hastalar — kaçırma hâlâ kendiliğinden düzelebilir',
          'Pompayı kullanamayacak el becerisi, görme veya bilişsel durumdaki hastalar',
          'Tedavi edilmemiş idrar yolu enfeksiyonu veya cilt enfeksiyonu olanlar',
          'Mesane boynu veya idrar kanalında darlığı giderilmemiş hastalar: önce o tedavi edilir',
          'Mesanesi aşırı aktif olan ve asıl şikâyeti sıkışma olan hastalar — cihaz bu tipe fayda sağlamaz',
          'Üst idrar yollarını tehdit eden, kontrol altına alınmamış mesane basıncı olan hastalar'
        ]
      },
      technology: [
        'Üç parçalı yapay idrar sfinkteri sistemi (manşon, sıvı deposu, skrotal pompa)',
        'Sistoskopi ile idrar kanalı ve mesane boynunun değerlendirilmesi',
        'Ped testi ile kaçırma miktarının objektif ölçülmesi',
        'Üroflowmetri ve işeme sonrası kalan idrar ölçümü',
        'Ürodinami — mesanenin depolama ve boşaltma işlevinin gösterilmesi',
        'Hastaya verilen cihaz kimlik kartı (acil durumda sonda takılmadan önce gösterilir)'
      ],
      surgeonExperience: {
        caseVolume: '',
        note: 'Yapay sfinkter, rekonstrüktif ürolojinin implant cerrahisi alanına girer. Burada sonucu belirleyen; doğru hasta seçimi, manşonun doğru yere ve doğru ölçüde yerleştirilmesi ve hastanın cihaz eğitimidir. Doç. Dr. Müslüm Ergün’ün üretra ve rekonstrüktif cerrahideki deneyimi, özellikle radyoterapi almış ve daha önce girişim yapılmış olgularda yaklaşımın temelini oluşturur.',
      },
      expertise: {
        redoRate: 'Daha önce erkek askısı uygulanmış ya da cihaz revizyonu gereken olgular bu alanın önemli bir bölümünü oluşturur.',
        complexCase: 'Radyoterapi sonrası, mesane boynu darlığı eşlik eden ve önceki implantı çıkarılmış hastalar kompleks olgu sayılır.',
        advancedTechnique: 'Transskrotal ve perineal yaklaşımlar, gerekli olgularda transkorporal manşon yerleştirme.'
      },
      timeline: [
        { when: 'Uzaktan', title: 'Dosya değerlendirmesi', body: 'Prostat ameliyatınızın tarihi ve raporu, patoloji sonucu, radyoterapi aldıysanız tarihi ve dozu, günlük ped sayınız, varsa ürodinami ve sistoskopi raporları incelenir. Ped sayısı olmadan şikâyetin ağırlığı değerlendirilemez.' },
        { when: '1. Gün', title: 'Muayene ve testler', body: 'Muayene, ped testi, üroflowmetri, kalan idrar ölçümü, idrar tahlili ve kültürü. Sistoskopi ile idrar kanalı ve mesane boynu değerlendirilir; darlık varsa cihaz ameliyatı ertelenir ve önce darlık tedavi edilir.' },
        { when: '2. Gün', title: 'Ameliyat', body: 'Manşon idrar kanalının çevresine yerleştirilir, sıvı deposu karın içine, pompa ise skrotumda cilt altına konur. Sistem sıvı ile doldurulur ancak KAPALI (deaktive) bırakılır; dokunun iyileşmesi beklenir.' },
        { when: '3.–4. Gün', title: 'Taburculuk', body: 'Sonda genellikle ertesi gün alınır. Cihaz bu dönemde kapalı olduğu için idrar kaçırma devam eder — bu beklenen bir durumdur ve başarısızlık değildir.' },
        { when: '4.–8. Gün', title: 'Kontrol', body: 'Yara yeri ve skrotum değerlendirilir. Dönüş uçuşu bu kontrolden sonraya planlanır. Cihaz kartınız size burada verilir.' },
        { when: '4.–6. hafta', title: 'Cihazın aktive edilmesi', body: 'Doku iyileştikten sonra cihaz çalışır hâle getirilir ve pompanın nasıl kullanılacağı size uygulamalı olarak öğretilir. ASIL SONUÇ BU TARİHTEN SONRA DEĞERLENDİRİLİR. Bu randevu için ya tekrar gelmeniz ya da ülkenizde bir ürologla önceden anlaşmanız gerekir.' }
      ],
      risks: [
        'ENFEKSİYON: Cihaz bir implanttır; enfekte olursa genellikle tamamının çıkarılması gerekir ve aylar sonra yeniden takılır. Bu, en ciddi komplikasyondur',
        'EROZYON: Manşonun idrar kanalı duvarına baskı yaparak içeri doğru açılması. Özellikle radyoterapi almış hastalarda riski artar; cihazın çıkarılmasını gerektirir',
        'MEKANİK ARIZA: Sistem sıvı kaçırabilir veya pompa çalışmayabilir. Cihazın bir ömrü vardır ve yıllar içinde revizyon gerekebilir',
        'DOKU İNCELMESİ (ATROFİ): Manşonun altındaki doku zamanla incelir ve kaçırma yeniden başlar. Daha küçük manşonla revizyon gerekebilir',
        'KAÇIRMANIN TAMAMEN GEÇMEMESİ: Hedef, ped ihtiyacını belirgin biçimde azaltmaktır. Hiçbir cihaz kalıcı ve tam kuruluk garanti edemez',
        'İdrar yolu enfeksiyonu ve idrar yapmakta zorlanma',
        'Skrotumda ağrı, şişlik veya pompanın rahatsız edici biçimde hissedilmesi',
        'ACİL DURUM RİSKİ: Manşon açılmadan sonda takılması idrar kanalında kalıcı hasar yapabilir. Cihaz kartınızı her zaman yanınızda taşıyın'
      ],
      alternatives: [
        'Pelvik taban kas egzersizleri ve fizyoterapi — ilk basamaktır ve ameliyattan önce mutlaka denenir',
        'Bekleme ve izlem — prostat ameliyatından sonraki ilk 12 ayda kaçırma kendiliğinden azalabilir',
        'Erkek askısı (sling) — hafif ve orta dereceli kaçırmada; cihaz kullanmayı gerektirmez ama ciddi kaçırmada yetersiz kalır',
        'Üretral dolgu maddesi enjeksiyonu — etkisi genellikle sınırlı ve kısa sürelidir',
        'Penil klemp veya idrar toplama aparatı (kondom sonda) — ameliyat istemeyen veya uygun olmayan hastalarda',
        'Emici ürünlerle (ped) yönetim — bir tedavi değil, bir idare yöntemidir; yaşam kalitesi üzerindeki etkisi küçümsenmemelidir'
      ],
      comparison: {
        title: 'Yapay sfinkter ve erkek askısı: hangisi hangi duruma',
        columns: ['Ölçüt', 'Yapay sfinkter', 'Erkek askısı (sling)'],
        rows: [
          { label: 'Kaçırma derecesi', values: ['Orta–ciddi kaçırmada', 'Hafif–orta kaçırmada'] },
          { label: 'Hastanın cihazı kullanması', values: ['Gerekir — her idrar için pompa', 'Gerekmez'] },
          { label: 'Radyoterapi öyküsü', values: ['Yapılabilir, risk artar', 'Sonuç daha az öngörülebilir'] },
          { label: 'Aktivasyon beklemesi', values: ['4–6 hafta sonra çalışır hâle gelir', 'Hemen etkilidir'] },
          { label: 'Mekanik arıza ihtimali', values: ['Var — revizyon gerekebilir', 'Mekanik parça yok'] },
          { label: 'Acil sonda uyarısı', values: ['Zorunlu — manşon önce açılmalı', 'Gerekmez'] },
          { label: 'Ameliyatın büyüklüğü', values: ['Daha kapsamlı', 'Daha küçük'] },
          { label: 'Yetersiz kalırsa sonraki adım', values: ['Revizyon', 'Yapay sfinktere geçilebilir'] }
        ],
        note: 'Doğru soru "hangisi daha güçlü" değil, "benim kaçırmam hangi derecede ve cihazı kullanabilir miyim" sorusudur. Ped sayınız bu kararın en önemli verisidir; bu yüzden başvurudan önce bir hafta boyunca günlük ped sayınızı not edin.'
      },
      recovery: [
        { period: 'İlk 48 saat', body: 'Skrotumda şişlik ve morarma olağandır. Destekleyici iç çamaşırı önerilir. Ateş, idrar yapamama veya yara yerinden akıntı durumunda derhal başvurulmalıdır.' },
        { period: '1.–2. hafta', body: 'Cihaz KAPALIDIR; idrar kaçırma devam eder ve ped kullanımı sürer. Bu beklenen bir durumdur. Bisiklet, at binme ve bölgeye baskı yapan aktivitelerden kaçınılır.' },
        { period: '2.–4. hafta', body: 'Masa başı işe dönüş genellikle bu dönemdedir. Ağır kaldırmaktan ve ıkınmaktan kaçınılır.' },
        { period: '4.–6. hafta', body: 'Cihaz aktive edilir ve kullanımı öğretilir. Sonuç bu tarihten sonra değerlendirilmeye başlar.' },
        { period: '3. ay', body: 'Günlük ped sayısındaki değişim en anlaşılır sonuç ölçütüdür. Pompanın kullanımı bu dönemde alışkanlık hâline gelir.' },
        { period: 'Uzun dönem', body: 'Yıllık kontrol önerilir. Kaçırma yeniden başlarsa doku incelmesi veya mekanik arıza araştırılır; her ikisi de revizyonla çözülebilir. Cihaz kartınızı her zaman taşıyın.' }
      ],
      price: {
        from: 0,
        to: 0,
        currency: 'EUR',
        disclaimer:
          'Tutar; cihaz maliyetine, ameliyatın kapsamına (daha önce girişim yapılmış mı, radyoterapi öyküsü var mı) ve hastanede kalış süresine göre değişir. Olası bir revizyon ayrı değerlendirilir. Kalem kalem ayrılmış yazılı teklif, dosyanız incelendikten sonra verilir.'
      },
      packageIncludes: [
        'Muayene ve inkontinans değerlendirmesi',
        'Ped testi, üroflowmetri ve kalan idrar ölçümü',
        'Sistoskopi ile idrar kanalı ve mesane boynu değerlendirmesi',
        'Kan ve idrar tetkikleri, idrar kültürü',
        'Anestezi ve ameliyathane',
        'Yapay sfinkter cihazı ve sarf malzemeleri',
        'Hastane yatışı',
        'Sonda alımı ve taburculuk kontrolü',
        'Cihaz kimlik kartı ve yazılı kullanım talimatı',
        'Havalimanı–hastane–otel transferleri',
        'Konaklama (hasta + 1 refakatçi)',
        'Tıbbi tercüman ve hasta koordinatörü',
        'Dönüşten sonra uzaktan takip'
      ],
      faqs: [
        { q: 'İdrar kaçırmam tamamen geçer mi?', a: 'Hedef, ped ihtiyacını belirgin biçimde azaltmaktır. Hiçbir cihaz kalıcı ve tam kuruluk garanti edemez. Sonucun en anlaşılır ölçütü günlük ped sayınızdaki değişimdir.' },
        { q: 'Cihazı kendim mi çalıştıracağım?', a: 'Evet. Her idrara gidişinizde skrotumdaki pompayı birkaç kez sıkmanız gerekir. Bu yüzden el becerisi, görme ve bilişsel durum ameliyat öncesi değerlendirilir. Cihazı kullanamayacak bir hastaya takmak doğru değildir.' },
        { q: 'Ameliyattan hemen sonra kuru olur muyum?', a: 'Hayır. Cihaz 4–6 hafta KAPALI bırakılır; bu süre dokunun iyileşmesi içindir. Bu dönemde kaçırma devam eder ve ped kullanırsınız. Bu beklenen bir durumdur, başarısızlık değildir.' },
        { q: 'Prostat ameliyatımın üzerinden 6 ay geçti, şimdi olabilir miyim?', a: 'Genellikle en az 12 ay beklenir, çünkü kaçırma bu süre içinde kendiliğinden azalabilir. Erken yapılan bir cihaz ameliyatı, düzelecek bir şikâyet için kalıcı bir implant takmak olabilir.' },
        { q: 'Radyoterapi aldım, ameliyat olabilir miyim?', a: 'Olabilirsiniz, ancak ışın tedavisi doku beslenmesini bozduğu için erozyon ve enfeksiyon olasılığı artar. Bu, ameliyatın yapılamayacağı anlamına gelmez; risklerin farklı konuşulması gerektiği anlamına gelir. Işın tedavisi tarihini ve dozunu mutlaka bildirin.' },
        { q: 'Cihaz ömür boyu dayanır mı?', a: 'Hayır. Yapay sfinkter mekanik bir sistemdir; yıllar içinde mekanik arıza, doku incelmesi veya erozyon nedeniyle revizyon gerekebilir. Bu implant cerrahisinin doğasıdır ve baştan bilinmelidir.' },
        { q: 'Acil servise gidersem ne yapmalıyım?', a: 'Cihaz kartınızı gösterin ve SONDA TAKILMADAN ÖNCE MANŞONUN AÇILMASI GEREKTİĞİNİ söyleyin. Kapalı manşon üzerinden sonda takmak idrar kanalında kalıcı hasar yapabilir. Kartı her zaman yanınızda taşıyın.' },
        { q: 'MR çektirebilir miyim, havalimanı dedektöründen geçer mi?', a: 'Cihaz genellikle görüntüleme ve güvenlik kontrollerine engel değildir, ancak taşıdığınızı bildirin ve cihaz kartınızı gösterin. Planlı bir görüntülemeden önce cihaz modelinizi radyoloji ekibine iletin.' },
        { q: 'Cinsel yaşamımı etkiler mi?', a: 'Cihaz sertleşme işlevini doğrudan etkilemez. Prostat ameliyatı sonrası sertleşme sorunu varsa bu ayrı bir konudur ve birlikte planlanabilir; bazı hastalarda penil protez ile aynı seansta değerlendirme yapılır.' },
        { q: 'Türkiye’de ne kadar kalmalıyım?', a: 'Ameliyat ve ilk kontrol için genellikle 10–14 gün. Ancak cihazın AKTİVE EDİLMESİ 4–6 hafta sonradır: bu randevu için ya tekrar gelmeniz ya da ülkenizde bir ürologla önceden anlaşmanız gerekir. Bunu baştan planlayın.' },
        { q: 'Hangi belgeleri göndermeliyim?', a: 'Prostat ameliyatınızın raporu ve tarihi, patoloji sonucu, radyoterapi aldıysanız tarihi ve dozu, BİR HAFTALIK GÜNLÜK PED SAYINIZ, varsa ürodinami ve sistoskopi raporları, idrar tahlili ve kullandığınız ilaçlar.' }
      ],
      sources: [
        {
          label: 'EAU Guidelines on Management of Non-Neurogenic Male LUTS — Avrupa Üroloji Derneği',
          url: 'https://uroweb.org/guidelines/management-of-non-neurogenic-male-luts'
        }
      ]
    },
    en: {
      title: 'Artificial Urinary Sphincter',
      summary:
        'For significant incontinence persisting after prostate surgery, a device operation in which a cuff around the urethra and a pump in the scrotum restore control.',
      metaTitle: 'Artificial Urinary Sphincter: A Solution for Post-Prostatectomy Leakage',
      metaDescription:
        'The artificial urinary sphincter (AUS): who it suits, how it works, how it differs from a male sling, the lifespan of the device and the chance of revision, risks and honest expectations.',
      quickFacts: {
        duration: '60–120 minutes',
        anesthesia: 'General or spinal anaesthesia',
        hospitalStay: '1–2 nights',
        stayInTurkey: '10–14 days',
        catheter: '1 day',
        returnToWork: '2–4 weeks (desk work), 6 weeks (heavy work)',
        flightClearance: 'After the review appointment'
      },
      definition: [
        'Some men leak urine after surgery for prostate cancer (radical prostatectomy). In most, the problem lessens markedly over months. In a group of patients, however, leakage persists despite pelvic floor exercises and time, and seriously restricts daily life. The artificial urinary sphincter was developed for that group.',
        'The device has three parts: a CUFF placed around the urethra, a FLUID RESERVOIR placed inside the abdomen, and a PUMP sitting under the skin of the scrotum. Normally the cuff is inflated and keeps the urethra closed. When you want to pass urine you squeeze the pump in the scrotum a few times; fluid moves from the cuff to the reservoir, the channel opens and you void. Within a few minutes the fluid returns to the cuff by itself and the channel closes again.',
        'THIS IS A TREATMENT THAT REQUIRES THE PATIENT TO OPERATE THE DEVICE. You must use the pump every time you pass urine. Manual dexterity, eyesight and cognition are therefore assessed. Implanting the device in someone who cannot use it is not right — this is discussed openly before surgery.',
        'THE MOST IMPORTANT SAFETY RULE: in a patient with a sphincter, THE CUFF MUST BE DEACTIVATED BEFORE A CATHETER IS PASSED. Passing a catheter through a closed cuff can cause permanent damage to the urethra. The patient is therefore given a device card and told to show it at any emergency department. A centre that does not say this is doing an incomplete job.',
        'THE RIGHT TIME MATTERS MORE THAN AN EARLY ONE. Usually at least 12 months are allowed after prostate surgery, because leakage may still settle on its own. If there is a narrowing at the bladder neck, that is treated first. An operation carried out too early can mean implanting a permanent device for a problem that would have resolved.',
        'A HISTORY OF RADIOTHERAPY CHANGES THE DECISION. In men who have had radiotherapy to the pelvis, the blood supply to the tissue is impaired and device-related problems (erosion, infection) become more likely. Surgery can still be performed, but the risks are discussed differently. If you have had radiotherapy, say so from the outset.',
        'THE DEVICE HAS A LIFESPAN. The artificial sphincter is a mechanical system; over the years a revision may be needed for mechanical failure, thinning of the tissue beneath the cuff (atrophy) or erosion. That is not a failure but the nature of implant surgery, and it must be said to the patient at the start. If you are travelling from abroad, plan where a possible revision would be done.'
      ],
      eligibility: {
        suitable: [
          'Men at least 12 months after prostate surgery with persisting significant leakage',
          'Men obliged to use more than one pad a day whose life is restricted by it',
          'Men who gain insufficient benefit from pelvic floor exercises',
          'Patients who have had a male sling without an adequate result',
          'Patients with the dexterity, eyesight and cognition to operate the device',
          'Patients able to attend follow-up and to carry the device card'
        ],
        notSuitable: [
          'Men less than 12 months from prostate surgery — leakage may still settle by itself',
          'Patients whose dexterity, eyesight or cognition will not allow them to use the pump',
          'Patients with untreated urinary or skin infection',
          'Patients with an untreated narrowing of the bladder neck or urethra: that is treated first',
          'Patients with an overactive bladder whose main problem is urgency — the device does not help that type',
          'Patients with uncontrolled bladder pressure threatening the upper urinary tract'
        ]
      },
      technology: [
        'Three-component artificial urinary sphincter system (cuff, reservoir, scrotal pump)',
        'Cystoscopic assessment of the urethra and bladder neck',
        'Pad test for objective measurement of leakage',
        'Uroflowmetry and post-void residual measurement',
        'Urodynamics — to demonstrate bladder storage and emptying function',
        'A device identity card given to the patient (shown before any catheterisation in an emergency)'
      ],
      surgeonExperience: {
        caseVolume: '',
        note: 'The artificial sphincter belongs to the implant surgery field of reconstructive urology. What determines the result is correct patient selection, placing the cuff in the right position and at the right size, and training the patient in the device. Assoc. Prof. Dr. Müslüm Ergün’s experience in urethral and reconstructive surgery underpins the approach, particularly in men who have had radiotherapy or a previous procedure.'
      },
      expertise: {
        redoRate: 'Men who have already had a male sling, or who need a device revision, make up a significant part of this work.',
        complexCase: 'Patients after radiotherapy, with an accompanying bladder neck stricture, or whose previous implant has been removed are regarded as complex cases.',
        advancedTechnique: 'Transscrotal and perineal approaches, with transcorporal cuff placement where required.'
      },
      timeline: [
        { when: 'Remotely', title: 'Review of your file', body: 'The date and operation note of your prostate surgery, the pathology report, the date and dose of any radiotherapy, your daily pad count, and any urodynamics and cystoscopy reports are reviewed. Without the pad count the severity of the problem cannot be assessed.' },
        { when: 'Day 1', title: 'Examination and tests', body: 'Examination, pad test, uroflowmetry, residual volume, urinalysis and culture. Cystoscopy assesses the urethra and bladder neck; if there is a narrowing, the device operation is deferred and the narrowing treated first.' },
        { when: 'Day 2', title: 'Surgery', body: 'The cuff is placed around the urethra, the reservoir inside the abdomen and the pump under the skin of the scrotum. The system is filled with fluid but left DEACTIVATED, so that the tissue can heal.' },
        { when: 'Days 3–4', title: 'Discharge', body: 'The catheter is usually removed the following day. Because the device is deactivated in this period, leakage continues — that is expected and is not a failure.' },
        { when: 'Days 4–8', title: 'Review', body: 'The wound and the scrotum are assessed. The return flight is planned for after this review, and your device card is given to you here.' },
        { when: 'Weeks 4–6', title: 'Activation of the device', body: 'Once the tissue has healed the device is activated and you are taught, hands on, how to use the pump. THE REAL RESULT IS ASSESSED ONLY FROM THIS POINT. For this appointment you must either return, or arrange it in advance with a urologist in your own country.' }
      ],
      risks: [
        'INFECTION: the device is an implant; if it becomes infected the whole system usually has to be removed and re-implanted months later. This is the most serious complication',
        'EROSION: the cuff pressing on the wall of the urethra and opening into it. The risk is higher after radiotherapy; it requires removal of the device',
        'MECHANICAL FAILURE: the system can leak fluid or the pump may stop working. The device has a lifespan and revision may be needed over the years',
        'TISSUE ATROPHY: the tissue beneath the cuff thins with time and leakage returns. Revision with a smaller cuff may be needed',
        'LEAKAGE NOT RESOLVING COMPLETELY: the aim is a marked reduction in the need for pads. No device can guarantee permanent, complete dryness',
        'Urinary infection and difficulty passing urine',
        'Pain or swelling in the scrotum, or the pump being uncomfortably noticeable',
        'EMERGENCY RISK: passing a catheter without deactivating the cuff can permanently damage the urethra. Always carry your device card'
      ],
      alternatives: [
        'Pelvic floor exercises and physiotherapy — the first step, always tried before surgery',
        'Waiting and observation — leakage can lessen on its own in the first 12 months after prostate surgery',
        'Male sling — for mild and moderate leakage; it requires no device operation but is inadequate for severe leakage',
        'Urethral bulking injection — the effect is usually limited and short-lived',
        'A penile clamp or sheath (condom) drainage — for men who do not want, or are not suitable for, surgery',
        'Management with absorbent products — not a treatment but a way of coping; its effect on quality of life should not be underestimated'
      ],
      comparison: {
        title: 'Artificial sphincter and male sling: which for which situation',
        columns: ['Criterion', 'Artificial sphincter', 'Male sling'],
        rows: [
          { label: 'Severity of leakage', values: ['Moderate to severe', 'Mild to moderate'] },
          { label: 'Patient must operate a device', values: ['Yes — the pump, every time', 'No'] },
          { label: 'History of radiotherapy', values: ['Possible, with increased risk', 'Result less predictable'] },
          { label: 'Waiting for activation', values: ['Works from 4–6 weeks', 'Effective at once'] },
          { label: 'Chance of mechanical failure', values: ['Yes — revision may be needed', 'No mechanical parts'] },
          { label: 'Emergency catheter warning', values: ['Essential — the cuff must be opened first', 'Not needed'] },
          { label: 'Size of the operation', values: ['More extensive', 'Smaller'] },
          { label: 'If it is not enough', values: ['Revision', 'Can convert to an artificial sphincter'] }
        ],
        note: 'The right question is not "which is stronger" but "how severe is my leakage and can I operate a device". Your pad count is the single most important piece of information for that decision, so record your daily pad use for a week before you make contact.'
      },
      recovery: [
        { period: 'First 48 hours', body: 'Swelling and bruising of the scrotum are usual. Supportive underwear is advised. Fever, inability to pass urine or discharge from the wound require immediate contact.' },
        { period: 'Weeks 1–2', body: 'The device is DEACTIVATED; leakage continues and you keep using pads. That is expected. Cycling, riding and activities that press on the area are avoided.' },
        { period: 'Weeks 2–4', body: 'Return to desk work usually falls here. Lifting and straining are avoided.' },
        { period: 'Weeks 4–6', body: 'The device is activated and its use taught. Assessment of the result begins only from this point.' },
        { period: 'Month 3', body: 'The change in daily pad use is the most intelligible measure of the result. Using the pump becomes habitual in this period.' },
        { period: 'Long term', body: 'Annual review is advised. If leakage returns, tissue atrophy or mechanical failure is looked for; both can be addressed by revision. Always carry your device card.' }
      ],
      price: {
        from: 0,
        to: 0,
        currency: 'EUR',
        disclaimer:
          'The amount depends on the cost of the device, the scope of the operation (any previous procedure, any history of radiotherapy) and the length of hospital stay. A possible revision is assessed separately. An itemised written quotation is given once your file has been reviewed.'
      },
      packageIncludes: [
        'Examination and incontinence assessment',
        'Pad test, uroflowmetry and residual volume measurement',
        'Cystoscopic assessment of the urethra and bladder neck',
        'Blood and urine tests, urine culture',
        'Anaesthesia and operating theatre',
        'The artificial sphincter device and consumables',
        'Hospital stay',
        'Catheter removal and discharge check',
        'Device identity card and written instructions for use',
        'Airport–hospital–hotel transfers',
        'Accommodation (patient plus one companion)',
        'Medical interpreter and patient coordinator',
        'Remote follow-up after you return home'
      ],
      faqs: [
        { q: 'Will my leaking stop completely?', a: 'The aim is a marked reduction in the need for pads. No device can guarantee permanent and complete dryness. The clearest measure of the result is the change in your daily pad count.' },
        { q: 'Do I operate the device myself?', a: 'Yes. You must squeeze the pump in the scrotum a few times every time you pass urine. That is why dexterity, eyesight and cognition are assessed before surgery. Implanting the device in someone who cannot use it is not right.' },
        { q: 'Will I be dry straight after the operation?', a: 'No. The device is left DEACTIVATED for 4–6 weeks so the tissue can heal. You will continue to leak and to use pads in that period. That is expected, not a failure.' },
        { q: 'It is six months since my prostate surgery — can I have it now?', a: 'Usually at least 12 months are allowed, because leakage may lessen on its own within that time. An operation done too early can mean a permanent implant for a problem that would have resolved.' },
        { q: 'I have had radiotherapy — can I still have surgery?', a: 'You can, but because radiotherapy impairs the blood supply to the tissue, erosion and infection become more likely. That does not mean surgery is impossible; it means the risks are discussed differently. Always tell us the date and dose.' },
        { q: 'Will the device last for life?', a: 'No. The artificial sphincter is a mechanical system; over the years revision may be needed for mechanical failure, tissue thinning or erosion. That is the nature of implant surgery and should be known from the start.' },
        { q: 'What should I do if I go to an emergency department?', a: 'Show your device card and say that THE CUFF MUST BE DEACTIVATED BEFORE A CATHETER IS PASSED. Passing a catheter through a closed cuff can permanently damage the urethra. Always carry the card.' },
        { q: 'Can I have an MRI, and will I set off airport detectors?', a: 'The device does not usually prevent imaging or security screening, but tell staff you have it and show your device card. Before a planned scan, give your device model to the radiology team.' },
        { q: 'Will it affect my sex life?', a: 'The device does not directly affect erectile function. Erectile difficulty after prostate surgery is a separate matter and can be planned alongside; in some patients a penile prosthesis is assessed at the same sitting.' },
        { q: 'How long should I stay in Türkiye?', a: 'Usually 10–14 days for the surgery and first review. But ACTIVATION of the device is 4–6 weeks later: for that appointment you must either return or arrange it in advance with a urologist at home. Plan for this from the start.' },
        { q: 'What documents should I send?', a: 'The operation note and date of your prostate surgery, the pathology report, the date and dose of any radiotherapy, YOUR DAILY PAD COUNT OVER ONE WEEK, any urodynamics and cystoscopy reports, a urinalysis and your medication list.' }
      ],
      sources: [
        {
          label: 'EAU Guidelines on Management of Non-Neurogenic Male LUTS — European Association of Urology',
          url: 'https://uroweb.org/guidelines/management-of-non-neurogenic-male-luts'
        }
      ]
    },
    ar: {
      title: 'المصرّة البولية الاصطناعية',
      summary:
        'عند استمرار سلس بولي شديد بعد جراحة البروستاتا، يعيد جهاز مكوَّن من طوق حول الإحليل ومضخّة في كيس الصفن السيطرة على التبول.',
      metaTitle: 'المصرّة البولية الاصطناعية: حلّ لتسرّب البول بعد جراحة البروستاتا',
      metaDescription:
        'المصرّة البولية الاصطناعية: لمن تصلح، وكيف تعمل، وما الفرق عن الشريط الذكري، وعمر الجهاز واحتمال المراجعة الجراحية، والمخاطر وتوقعات صادقة.',
      quickFacts: {
        duration: '60 إلى 120 دقيقة',
        anesthesia: 'تخدير عام أو نصفي',
        hospitalStay: 'ليلة إلى ليلتين',
        stayInTurkey: '10 إلى 14 يومًا',
        catheter: 'يوم واحد',
        returnToWork: 'أسبوعان إلى أربعة (عمل مكتبي)، ستة أسابيع (عمل شاق)',
        flightClearance: 'بعد مراجعة المتابعة'
      },
      definition: [
        'بعد جراحة سرطان البروستاتا (الاستئصال الجذري) يفقد بعض الرجال البول. ويخفّ ذلك كثيرًا عند معظمهم خلال أشهر. غير أن فئة من المرضى يستمر عندها التسرّب رغم تمارين قاع الحوض ومرور الوقت ويحدّ من حياتهم اليومية حدًّا شديدًا. وقد صُمِّمت المصرّة الاصطناعية لهذه الفئة.',
        'ويتكوّن الجهاز من ثلاثة أجزاء: طوق يُوضَع حول الإحليل، وخزّان سائل يُوضَع داخل البطن، ومضخّة تستقر تحت جلد كيس الصفن. وفي الوضع المعتاد يكون الطوق ممتلئًا فيبقي الإحليل مغلقًا. وحين تريد التبول تضغط المضخّة عدة مرات؛ فينتقل السائل من الطوق إلى الخزّان وتنفتح القناة فتتبوّل. وخلال دقائق يعود السائل من تلقاء نفسه وتُغلَق القناة من جديد.',
        'وهذا علاج يتطلب أن يشغّل المريض الجهاز بنفسه. فعليك استعمال المضخّة في كل مرة تتبوّل فيها. ولذلك تُقيَّم مهارة اليد والإبصار والقدرة الذهنية. ولا يصح زرع الجهاز لمن لا يستطيع استعماله — ويُناقَش ذلك بصراحة قبل العملية.',
        'وأهم قاعدة أمان: لدى المريض الحامل للمصرّة يجب فتح الطوق قبل إدخال أي قسطرة. فإدخال قسطرة عبر طوق مغلق قد يُحدِث ضررًا دائمًا في الإحليل. ولذلك تُسلَّم للمريض بطاقة الجهاز ويُطلَب منه إظهارها في أي قسم طوارئ. والمركز الذي لا يقول ذلك يعمل عملًا ناقصًا.',
        'والوقت الصحيح أهم من الوقت المبكر. فيُنتظَر عادة 12 شهرًا على الأقل بعد جراحة البروستاتا لأن التسرّب قد يخفّ من تلقاء نفسه. وإن وُجد ضيق في عنق المثانة عُولِج أولًا. والعملية المبكرة قد تعني زرع جهاز دائم لمشكلة كانت ستزول.',
        'وسوابق العلاج الإشعاعي تغيّر القرار. فبعد تشعيع الحوض تضعف تروية النسيج ويزداد احتمال مشكلات الجهاز (التآكل والالتهاب). والعملية تبقى ممكنة لكن المخاطر تُناقَش على نحو مختلف. فإن تلقيت علاجًا إشعاعيًا فأخبرنا منذ البداية.',
        'وللجهاز عمر. فالمصرّة الاصطناعية نظام ميكانيكي؛ وقد تلزم مع السنين مراجعة جراحية بسبب عطل ميكانيكي أو ترقّق النسيج تحت الطوق أو تآكل. وهذا ليس فشلًا بل طبيعة جراحة الغرسات، ويجب أن يُقال للمريض منذ البداية. وإن كنت قادمًا من الخارج فخطّط أين ستُجرى المراجعة المحتملة.'
      ],
      eligibility: {
        suitable: [
          'الرجال بعد 12 شهرًا على الأقل من جراحة البروستاتا مع استمرار تسرّب شديد',
          'الرجال المضطرون إلى أكثر من فوطة يوميًا وتتقيّد حياتهم بذلك',
          'الرجال الذين لا تكفيهم تمارين قاع الحوض',
          'المرضى الذين وُضِع لهم شريط ذكري ولم تكن النتيجة كافية',
          'المرضى الذين لديهم مهارة يد وإبصار وقدرة ذهنية تكفي لتشغيل الجهاز',
          'المرضى القادرون على المتابعة وعلى حمل بطاقة الجهاز'
        ],
        notSuitable: [
          'الرجال الذين مضى على جراحة البروستاتا عندهم أقل من 12 شهرًا — فقد يخفّ التسرّب وحده',
          'المرضى الذين لا تسمح مهارتهم أو إبصارهم أو قدرتهم الذهنية باستعمال المضخّة',
          'المرضى المصابون بالتهاب بولي أو جلدي غير معالَج',
          'المرضى ذوو ضيق غير معالَج في عنق المثانة أو الإحليل: يُعالَج أولًا',
          'المرضى ذوو المثانة المفرطة النشاط ممن شكواهم الأساسية الإلحاح — فالجهاز لا يفيد في ذلك',
          'المرضى ذوو ضغط مثاني غير مضبوط يهدد المسالك العلوية'
        ]
      },
      technology: [
        'نظام مصرّة اصطناعية من ثلاثة أجزاء (طوق وخزّان ومضخّة في كيس الصفن)',
        'تقييم الإحليل وعنق المثانة بالتنظير',
        'اختبار الفوطة لقياس مقدار التسرّب موضوعيًا',
        'قياس تدفق البول وقياس البول المتبقي',
        'الدراسة الديناميكية — لإظهار وظيفتي التخزين والإفراغ',
        'بطاقة تعريف بالجهاز تُسلَّم للمريض (تُعرَض قبل أي قسطرة في الطوارئ)'
      ],
      surgeonExperience: {
        caseVolume: '',
        note: 'تندرج المصرّة الاصطناعية ضمن جراحة الغرسات في المسالك الترميمية. وما يحدد النتيجة هو اختيار المريض الصحيح ووضع الطوق في الموضع والقياس الصحيحين وتدريب المريض على الجهاز. وخبرة الأستاذ المشارك د. مسلم إرغن في جراحة الإحليل والجراحة الترميمية أساس هذا المنهج، ولا سيما عند من تلقّوا علاجًا إشعاعيًا أو خضعوا لتدخل سابق.'
      },
      expertise: {
        redoRate: 'يشكّل الرجال الذين وُضِع لهم شريط سابقًا أو يحتاجون مراجعة للجهاز جزءًا مهمًا من هذا العمل.',
        complexCase: 'يُعَد المرضى بعد العلاج الإشعاعي ومن لديهم ضيق مرافق في عنق المثانة ومن أُزيلت غرستهم السابقة حالات معقدة.',
        advancedTechnique: 'المقاربتان عبر الصفن والعجان، ووضع الطوق عبر الجسم الكهفي عند اللزوم.'
      },
      timeline: [
        { when: 'عن بُعد', title: 'تقييم الملف', body: 'يُراجَع تاريخ جراحة البروستاتا وتقريرها، ونتيجة الفحص المرضي، وتاريخ العلاج الإشعاعي وجرعته إن وُجد، وعدد فوطك اليومية، وتقارير الدراسة الديناميكية والتنظير إن وُجدت. ومن دون عدد الفوط لا تُقيَّم شدة الشكوى.' },
        { when: 'اليوم الأول', title: 'الفحص والاختبارات', body: 'فحص واختبار فوطة وقياس تدفق وبول متبقٍّ وتحليل بول وزرع. ويقيّم التنظير الإحليل وعنق المثانة؛ وإن وُجد ضيق أُجّلت عملية الجهاز وعُولِج الضيق أولًا.' },
        { when: 'اليوم الثاني', title: 'العملية', body: 'يُوضَع الطوق حول الإحليل والخزّان داخل البطن والمضخّة تحت جلد الصفن. ويُملأ النظام بالسائل لكنه يُترَك مغلقًا (غير مفعّل) ريثما يلتئم النسيج.' },
        { when: 'اليوم الثالث إلى الرابع', title: 'الخروج', body: 'تُنزَع القسطرة عادة في اليوم التالي. ولأن الجهاز مغلق في هذه المدة يستمر التسرّب — وهذا متوقَّع وليس فشلًا.' },
        { when: 'اليوم الرابع إلى الثامن', title: 'المراجعة', body: 'يُقيَّم الجرح وكيس الصفن. وتُخطَّط رحلة العودة بعد هذه المراجعة، وتُسلَّم إليك بطاقة الجهاز هنا.' },
        { when: 'الأسبوع الرابع إلى السادس', title: 'تفعيل الجهاز', body: 'بعد الالتئام يُفعَّل الجهاز وتُعلَّم عمليًا كيفية استعمال المضخّة. ولا تُقيَّم النتيجة الحقيقية إلا من هذا التاريخ. ولهذا الموعد عليك إما العودة وإما الاتفاق مسبقًا مع طبيب مسالك في بلدك.' }
      ],
      risks: [
        'الالتهاب: الجهاز غرسة؛ وإن التهب لزم عادة إزالة النظام كله وإعادة زرعه بعد أشهر. وهذه أخطر المضاعفات',
        'التآكل: ضغط الطوق على جدار الإحليل وانفتاحه إلى داخله. ويزداد الخطر بعد العلاج الإشعاعي؛ ويستلزم إزالة الجهاز',
        'العطل الميكانيكي: قد يفقد النظام سائله أو تتوقف المضخّة. وللجهاز عمر وقد تلزم مراجعة مع السنين',
        'ترقّق النسيج: يرقّ النسيج تحت الطوق مع الوقت فيعود التسرّب. وقد تلزم مراجعة بطوق أصغر',
        'عدم زوال التسرّب تمامًا: الهدف خفض الحاجة إلى الفوط خفضًا واضحًا. ولا يضمن أي جهاز جفافًا دائمًا وكاملًا',
        'التهاب المسالك البولية وتعسّر التبول',
        'ألم أو تورّم في كيس الصفن أو الإحساس بالمضخّة إحساسًا مزعجًا',
        'خطر الطوارئ: إدخال قسطرة من دون فتح الطوق قد يُحدِث ضررًا دائمًا في الإحليل. احمل بطاقة الجهاز دائمًا'
      ],
      alternatives: [
        'تمارين قاع الحوض والعلاج الطبيعي — الخطوة الأولى وتُجرَّب دائمًا قبل الجراحة',
        'الانتظار والمراقبة — قد يخفّ التسرّب وحده في الاثني عشر شهرًا الأولى بعد جراحة البروستاتا',
        'الشريط الذكري — للتسرّب الخفيف والمتوسط؛ ولا يتطلب تشغيل جهاز لكنه لا يكفي في التسرّب الشديد',
        'حقن مادة مالئة في الإحليل — أثرها محدود وقصير عادة',
        'مشبك القضيب أو كيس جمع البول — لمن لا يرغب في الجراحة أو لا يصلح لها',
        'التدبير بالفوط الماصّة — ليس علاجًا بل طريقة تعايش؛ ولا ينبغي الاستهانة بأثره في جودة الحياة'
      ],
      comparison: {
        title: 'المصرّة الاصطناعية والشريط الذكري: أيّهما لأي حال',
        columns: ['المعيار', 'المصرّة الاصطناعية', 'الشريط الذكري'],
        rows: [
          { label: 'شدة التسرّب', values: ['متوسط إلى شديد', 'خفيف إلى متوسط'] },
          { label: 'هل يشغّل المريض جهازًا', values: ['نعم — المضخّة في كل مرة', 'لا'] },
          { label: 'سوابق العلاج الإشعاعي', values: ['ممكن مع ازدياد الخطر', 'النتيجة أقل قابلية للتنبؤ'] },
          { label: 'انتظار التفعيل', values: ['يعمل بعد 4 إلى 6 أسابيع', 'فعّال فورًا'] },
          { label: 'احتمال العطل الميكانيكي', values: ['موجود — وقد تلزم مراجعة', 'لا أجزاء ميكانيكية'] },
          { label: 'تحذير القسطرة الطارئة', values: ['إلزامي — يُفتَح الطوق أولًا', 'غير لازم'] },
          { label: 'حجم العملية', values: ['أوسع', 'أصغر'] },
          { label: 'إن لم يكفِ', values: ['مراجعة', 'يمكن الانتقال إلى المصرّة الاصطناعية'] }
        ],
        note: 'السؤال الصحيح ليس «أيهما أقوى» بل «ما شدة تسرّبي وهل أستطيع تشغيل جهاز». وعدد فوطك أهم معطى في هذا القرار؛ فدوّن عددها اليومي أسبوعًا قبل التواصل.'
      },
      recovery: [
        { period: 'أول 48 ساعة', body: 'التورّم والكدمات في كيس الصفن أمران معتادان. ويُنصَح بملابس داخلية داعمة. أما الحمى أو تعذّر التبول أو إفراز من الجرح فتستدعي تواصلًا فوريًا.' },
        { period: 'الأسبوع الأول إلى الثاني', body: 'الجهاز مغلق؛ ويستمر التسرّب ويستمر استعمال الفوط. وهذا متوقَّع. ويُتجنَّب ركوب الدراجة والخيل وكل ما يضغط على المنطقة.' },
        { period: 'الأسبوع الثاني إلى الرابع', body: 'تقع العودة إلى العمل المكتبي عادة هنا. ويُتجنَّب الحمل والحزق.' },
        { period: 'الأسبوع الرابع إلى السادس', body: 'يُفعَّل الجهاز ويُعلَّم استعماله. ولا يبدأ تقييم النتيجة إلا من هنا.' },
        { period: 'الشهر الثالث', body: 'التغيّر في عدد الفوط اليومية أوضح مقياس للنتيجة. ويصير استعمال المضخّة عادة في هذه المدة.' },
        { period: 'على المدى البعيد', body: 'يُنصَح بمراجعة سنوية. وإن عاد التسرّب بُحث عن ترقّق النسيج أو عطل ميكانيكي؛ وكلاهما يُحَل بالمراجعة الجراحية. واحمل بطاقة الجهاز دائمًا.' }
      ],
      price: {
        from: 0,
        to: 0,
        currency: 'EUR',
        disclaimer:
          'يتوقف المبلغ على كلفة الجهاز، وعلى سعة العملية (هل سبق تدخل، وهل هناك سوابق علاج إشعاعي)، وعلى مدة الإقامة. وتُقيَّم المراجعة المحتملة على حدة. ويُقدَّم عرض مكتوب مفصّل بعد مراجعة ملفك.'
      },
      packageIncludes: [
        'الفحص وتقييم السلس',
        'اختبار الفوطة وقياس التدفق والبول المتبقي',
        'تقييم الإحليل وعنق المثانة بالتنظير',
        'تحاليل الدم والبول وزرع البول',
        'التخدير وغرفة العمليات',
        'جهاز المصرّة الاصطناعية والمستلزمات',
        'الإقامة في المستشفى',
        'نزع القسطرة ومراجعة الخروج',
        'بطاقة تعريف بالجهاز وتعليمات استعمال مكتوبة',
        'التنقلات بين المطار والمستشفى والفندق',
        'الإقامة (المريض ومرافق واحد)',
        'مترجم طبي ومنسّق للمرضى',
        'متابعة عن بُعد بعد العودة'
      ],
      faqs: [
        { q: 'هل يتوقف تسرّب البول تمامًا؟', a: 'الهدف خفض الحاجة إلى الفوط خفضًا واضحًا. ولا يضمن أي جهاز جفافًا دائمًا وكاملًا. وأوضح مقياس للنتيجة هو التغيّر في عدد فوطك اليومية.' },
        { q: 'هل أشغّل الجهاز بنفسي؟', a: 'نعم. عليك ضغط المضخّة في كيس الصفن عدة مرات في كل مرة تتبوّل فيها. ولهذا تُقيَّم مهارة اليد والإبصار والقدرة الذهنية قبل العملية. ولا يصح زرع الجهاز لمن لا يستطيع استعماله.' },
        { q: 'هل أكون جافًّا مباشرة بعد العملية؟', a: 'لا. فالجهاز يُترَك مغلقًا من 4 إلى 6 أسابيع ريثما يلتئم النسيج. وتستمر في هذه المدة بفقد البول واستعمال الفوط. وهذا متوقَّع وليس فشلًا.' },
        { q: 'مضى على جراحة البروستاتا ستة أشهر، هل أُجريها الآن؟', a: 'يُنتظَر عادة 12 شهرًا على الأقل لأن التسرّب قد يخفّ خلالها. والعملية المبكرة قد تعني غرسة دائمة لمشكلة كانت ستزول.' },
        { q: 'تلقيت علاجًا إشعاعيًا، هل يمكن إجراء العملية؟', a: 'نعم، لكن لأن الإشعاع يضعف تروية النسيج يزداد احتمال التآكل والالتهاب. وهذا لا يعني استحالة العملية بل أن المخاطر تُناقَش على نحو مختلف. وأخبرنا بالتاريخ والجرعة.' },
        { q: 'هل يدوم الجهاز مدى الحياة؟', a: 'لا. فهو نظام ميكانيكي؛ وقد تلزم مع السنين مراجعة بسبب عطل أو ترقّق نسيج أو تآكل. وهذه طبيعة جراحة الغرسات وينبغي معرفتها منذ البداية.' },
        { q: 'ماذا أفعل إن ذهبت إلى الطوارئ؟', a: 'أظهِر بطاقة الجهاز وقل إن الطوق يجب فتحه قبل إدخال أي قسطرة. فإدخال القسطرة عبر طوق مغلق قد يُحدِث ضررًا دائمًا في الإحليل. واحمل البطاقة دائمًا.' },
        { q: 'هل أستطيع إجراء رنين مغناطيسي، وهل أمرّ بأجهزة كشف المطار؟', a: 'لا يمنع الجهاز عادة التصوير ولا التفتيش الأمني، لكن أخبر العاملين بوجوده وأظهِر البطاقة. وقبل أي تصوير مخطَّط أبلغ فريق الأشعة بطراز جهازك.' },
        { q: 'هل يؤثر في حياتي الجنسية؟', a: 'لا يؤثر الجهاز في الانتصاب مباشرة. أما ضعف الانتصاب بعد جراحة البروستاتا فموضوع مستقل يمكن التخطيط له معًا؛ وعند بعض المرضى تُقيَّم دعامة القضيب في الجلسة نفسها.' },
        { q: 'كم أبقى في تركيا؟', a: 'عادة من 10 إلى 14 يومًا للعملية والمراجعة الأولى. غير أن تفعيل الجهاز يكون بعد 4 إلى 6 أسابيع: ولهذا الموعد عليك إما العودة وإما الاتفاق مسبقًا مع طبيب مسالك في بلدك. فخطّط لذلك منذ البداية.' },
        { q: 'ما الوثائق التي أرسلها؟', a: 'تقرير جراحة البروستاتا وتاريخها، ونتيجة الفحص المرضي، وتاريخ العلاج الإشعاعي وجرعته، وعدد فوطك اليومية على مدى أسبوع، وتقارير الدراسة الديناميكية والتنظير، وتحليل البول، وقائمة أدويتك.' }
      ],
      sources: [
        {
          label: 'إرشادات EAU حول التعامل مع أعراض الجهاز البولي السفلي غير العصبية لدى الرجال — الجمعية الأوروبية للمسالك البولية',
          url: 'https://uroweb.org/guidelines/management-of-non-neurogenic-male-luts'
        }
      ]
    }
  }
};
