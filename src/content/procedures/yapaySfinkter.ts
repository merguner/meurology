import type { Treatment } from '../types';

/**
 * YAPAY İDRAR SFİNKTERİ (AUS) — yeni sayfa (Görev 7).
 *
 * reviewStatus: 'draft' — hekim onayı bekliyor; `lastReviewed` bilerek boş.
 * Kategori: rekonstrüktif (fiyat/hacim değil, karmaşıklık odaklı sayfa).
 * Kaynak: EAU Non-neurogenic Male LUTS (inkontinans bölümü).
 * Başarı oranı/yüzde YAZILMAMIŞTIR.
 */
export const yapaySfinkter: Treatment = {
  slug: 'yapay-idrar-sfinkteri',
  procedure: { type: 'SurgicalProcedure', bodyLocation: 'Urethra' },
  icon: 'repair',
  category: 'reconstructive',
  reviewStatus: 'draft',
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
    de: {
      title: 'Künstlicher Harnröhrenschließmuskel',
      summary:
        'Bei erheblichem Harnverlust, der nach einer Prostataoperation bestehen bleibt, stellt ein Implantat aus einer Manschette um die Harnröhre und einer Pumpe im Hodensack die Kontrolle wieder her.',
      metaTitle: 'Künstlicher Schließmuskel: Lösung bei Harnverlust nach Prostataoperation',
      metaDescription:
        'Der künstliche Harnröhrenschließmuskel (AUS): für wen geeignet, wie er funktioniert, Unterschied zur männlichen Schlinge, Lebensdauer und Revisionswahrscheinlichkeit, Risiken und ehrliche Erwartungen.',
      quickFacts: {
        duration: '60–120 Minuten',
        anesthesia: 'Vollnarkose oder Spinalanästhesie',
        hospitalStay: '1–2 Nächte',
        stayInTurkey: '10–14 Tage',
        catheter: '1 Tag',
        returnToWork: '2–4 Wochen (Bürotätigkeit), 6 Wochen (schwere Arbeit)',
        flightClearance: 'Nach der Kontrolluntersuchung'
      },
      definition: [
        'Nach einer Operation wegen Prostatakrebs (radikale Prostatektomie) verlieren manche Männer Urin. Bei den meisten bessert sich das über Monate deutlich. Bei einem Teil bleibt der Harnverlust jedoch trotz Beckenbodentraining und Zeit bestehen und schränkt den Alltag erheblich ein. Für diese Gruppe wurde der künstliche Schließmuskel entwickelt.',
        'Das System besteht aus drei Teilen: einer MANSCHETTE um die Harnröhre, einem FLÜSSIGKEITSRESERVOIR im Bauchraum und einer PUMPE unter der Haut des Hodensacks. Im Ruhezustand ist die Manschette gefüllt und hält die Harnröhre verschlossen. Zum Wasserlassen drücken Sie die Pumpe mehrmals; die Flüssigkeit fließt aus der Manschette ins Reservoir, der Kanal öffnet sich und Sie können urinieren. Nach wenigen Minuten kehrt die Flüssigkeit von selbst zurück und der Kanal schließt wieder.',
        'DIESE BEHANDLUNG SETZT VORAUS, DASS DER PATIENT DAS GERÄT BEDIENT. Sie müssen die Pumpe bei jedem Wasserlassen benutzen. Geschicklichkeit, Sehvermögen und Kognition werden deshalb geprüft. Einem Patienten, der das Gerät nicht bedienen kann, sollte es nicht implantiert werden — das wird vor der Operation offen besprochen.',
        'DIE WICHTIGSTE SICHERHEITSREGEL: Bei einem Patienten mit Schließmuskel MUSS DIE MANSCHETTE VOR JEDER KATHETERISIERUNG GEÖFFNET WERDEN. Ein Katheter durch eine geschlossene Manschette kann die Harnröhre dauerhaft schädigen. Der Patient erhält deshalb einen Geräteausweis und soll ihn in jeder Notaufnahme vorzeigen. Ein Zentrum, das das nicht sagt, arbeitet unvollständig.',
        'DER RICHTIGE ZEITPUNKT IST WICHTIGER ALS EIN FRÜHER. In der Regel werden nach der Prostataoperation mindestens 12 Monate abgewartet, weil sich der Harnverlust noch von selbst bessern kann. Besteht eine Enge am Blasenhals, wird diese zuerst behandelt. Eine zu frühe Implantation kann bedeuten, für ein Problem, das sich gelegt hätte, ein dauerhaftes Gerät einzusetzen.',
        'EINE BESTRAHLUNG IN DER VORGESCHICHTE ÄNDERT DIE ENTSCHEIDUNG. Nach Bestrahlung des Beckens ist die Durchblutung des Gewebes beeinträchtigt, und geräteabhängige Probleme (Erosion, Infektion) werden wahrscheinlicher. Operieren lässt sich dennoch, die Risiken werden aber anders besprochen. Teilen Sie eine Bestrahlung unbedingt von Anfang an mit.',
        'DAS GERÄT HAT EINE LEBENSDAUER. Der künstliche Schließmuskel ist ein mechanisches System; über die Jahre kann wegen mechanischen Versagens, Ausdünnung des Gewebes unter der Manschette (Atrophie) oder Erosion eine Revision nötig werden. Das ist kein Versagen, sondern die Natur der Implantatchirurgie, und es muss von Anfang an gesagt werden. Wer aus dem Ausland anreist, sollte planen, wo eine mögliche Revision erfolgt.'
      ],
      eligibility: {
        suitable: [
          'Männer mindestens 12 Monate nach Prostataoperation mit fortbestehendem erheblichem Harnverlust',
          'Männer, die mehr als eine Vorlage am Tag brauchen und dadurch eingeschränkt sind',
          'Männer, die von Beckenbodentraining nicht genug profitieren',
          'Patienten mit männlicher Schlinge ohne ausreichendes Ergebnis',
          'Patienten mit ausreichender Geschicklichkeit, Sehkraft und Kognition zur Gerätebedienung',
          'Patienten, die zur Nachsorge kommen und den Geräteausweis tragen können'
        ],
        notSuitable: [
          'Männer, bei denen die Prostataoperation weniger als 12 Monate zurückliegt — der Harnverlust kann sich noch bessern',
          'Patienten, deren Geschicklichkeit, Sehkraft oder Kognition die Bedienung nicht zulässt',
          'Patienten mit unbehandelter Harnwegs- oder Hautinfektion',
          'Patienten mit unbehandelter Enge am Blasenhals oder in der Harnröhre: diese wird zuerst behandelt',
          'Patienten mit überaktiver Blase, deren Hauptproblem der Drang ist — dagegen hilft das Gerät nicht',
          'Patienten mit unkontrolliertem Blasendruck, der den oberen Harntrakt gefährdet'
        ]
      },
      technology: [
        'Dreiteiliges System des künstlichen Schließmuskels (Manschette, Reservoir, Skrotalpumpe)',
        'Zystoskopische Beurteilung von Harnröhre und Blasenhals',
        'Vorlagentest zur objektiven Messung des Harnverlusts',
        'Uroflowmetrie und Restharnmessung',
        'Urodynamik — zur Darstellung von Speicher- und Entleerungsfunktion',
        'Geräteausweis für den Patienten (vor jeder Katheterisierung im Notfall vorzuzeigen)'
      ],
      surgeonExperience: {
        caseVolume: '',
        note: 'Der künstliche Schließmuskel gehört zur Implantatchirurgie der rekonstruktiven Urologie. Über das Ergebnis entscheiden die richtige Patientenauswahl, die korrekte Lage und Größe der Manschette und die Geräteschulung des Patienten. Die Erfahrung von Doz. Dr. Müslüm Ergün in der Harnröhren- und rekonstruktiven Chirurgie trägt diesen Ansatz, besonders nach Bestrahlung und nach früheren Eingriffen.'
      },
      expertise: {
        redoRate: 'Männer mit bereits eingesetzter Schlinge oder mit Revisionsbedarf machen einen erheblichen Teil dieser Arbeit aus.',
        complexCase: 'Patienten nach Bestrahlung, mit begleitender Blasenhalsenge oder mit entferntem Vorimplantat gelten als komplexe Fälle.',
        advancedTechnique: 'Transskrotaler und perinealer Zugang, bei Bedarf transkorporale Manschettenplatzierung.'
      },
      timeline: [
        { when: 'Aus der Ferne', title: 'Aktenbeurteilung', body: 'Datum und Bericht Ihrer Prostataoperation, der Pathologiebefund, Datum und Dosis einer etwaigen Bestrahlung, Ihr täglicher Vorlagenverbrauch sowie vorhandene Urodynamik- und Zystoskopiebefunde werden gesichtet. Ohne Vorlagenzahl lässt sich die Schwere nicht beurteilen.' },
        { when: 'Tag 1', title: 'Untersuchung und Tests', body: 'Untersuchung, Vorlagentest, Uroflowmetrie, Restharn, Urinbefund und Kultur. Die Zystoskopie beurteilt Harnröhre und Blasenhals; besteht eine Enge, wird die Implantation verschoben und zuerst die Enge behandelt.' },
        { when: 'Tag 2', title: 'Operation', body: 'Die Manschette wird um die Harnröhre, das Reservoir im Bauchraum und die Pumpe unter der Skrotalhaut platziert. Das System wird mit Flüssigkeit gefüllt, aber DEAKTIVIERT gelassen, damit das Gewebe heilen kann.' },
        { when: 'Tag 3–4', title: 'Entlassung', body: 'Der Katheter wird meist am Folgetag entfernt. Da das Gerät in dieser Zeit deaktiviert ist, besteht der Harnverlust fort — das ist zu erwarten und kein Versagen.' },
        { when: 'Tag 4–8', title: 'Kontrolle', body: 'Wunde und Hodensack werden beurteilt. Der Rückflug wird danach gelegt; Ihren Geräteausweis erhalten Sie hier.' },
        { when: 'Woche 4–6', title: 'Aktivierung des Geräts', body: 'Nach Abheilung wird das Gerät aktiviert und Ihnen die Bedienung praktisch beigebracht. DAS EIGENTLICHE ERGEBNIS WIRD ERST AB DIESEM ZEITPUNKT BEURTEILT. Für diesen Termin müssen Sie entweder erneut anreisen oder ihn vorab mit einem Urologen in Ihrem Land vereinbaren.' }
      ],
      risks: [
        'INFEKTION: Das Gerät ist ein Implantat; bei Infektion muss meist das gesamte System entfernt und Monate später neu eingesetzt werden. Das ist die schwerwiegendste Komplikation',
        'EROSION: Die Manschette drückt auf die Harnröhrenwand und öffnet sich in sie hinein. Nach Bestrahlung ist das Risiko höher; die Entfernung des Geräts wird nötig',
        'MECHANISCHES VERSAGEN: Das System kann Flüssigkeit verlieren oder die Pumpe nicht mehr arbeiten. Das Gerät hat eine Lebensdauer; über die Jahre kann eine Revision nötig werden',
        'GEWEBEATROPHIE: Das Gewebe unter der Manschette dünnt mit der Zeit aus und der Harnverlust kehrt zurück. Eine Revision mit kleinerer Manschette kann nötig werden',
        'DER HARNVERLUST HÖRT NICHT VOLLSTÄNDIG AUF: Ziel ist eine deutliche Verringerung des Vorlagenbedarfs. Kein Gerät kann dauerhafte und vollständige Trockenheit garantieren',
        'Harnwegsinfekt und erschwertes Wasserlassen',
        'Schmerzen oder Schwellung im Hodensack oder ein unangenehm spürbares Pumpenteil',
        'NOTFALLRISIKO: Eine Katheterisierung ohne Öffnen der Manschette kann die Harnröhre dauerhaft schädigen. Tragen Sie Ihren Geräteausweis stets bei sich'
      ],
      alternatives: [
        'Beckenbodentraining und Physiotherapie — der erste Schritt, immer vor einer Operation versucht',
        'Abwarten und Beobachten — in den ersten 12 Monaten nach der Prostataoperation kann der Harnverlust nachlassen',
        'Männliche Schlinge — bei leichtem bis mittlerem Harnverlust; keine Gerätebedienung nötig, bei schwerem Verlust jedoch unzureichend',
        'Unterspritzung der Harnröhre — die Wirkung ist meist begrenzt und kurz',
        'Penisklemme oder Kondomurinal — für Männer, die keine Operation wünschen oder dafür nicht geeignet sind',
        'Versorgung mit aufsaugenden Hilfsmitteln — keine Behandlung, sondern eine Bewältigungsform; ihre Auswirkung auf die Lebensqualität sollte nicht unterschätzt werden'
      ],
      comparison: {
        title: 'Künstlicher Schließmuskel und männliche Schlinge: was wofür',
        columns: ['Kriterium', 'Künstlicher Schließmuskel', 'Männliche Schlinge'],
        rows: [
          { label: 'Schweregrad des Harnverlusts', values: ['Mittel bis schwer', 'Leicht bis mittel'] },
          { label: 'Patient muss ein Gerät bedienen', values: ['Ja — die Pumpe, jedes Mal', 'Nein'] },
          { label: 'Bestrahlung in der Vorgeschichte', values: ['Möglich, mit erhöhtem Risiko', 'Ergebnis weniger vorhersehbar'] },
          { label: 'Warten auf Aktivierung', values: ['Wirkt ab Woche 4–6', 'Sofort wirksam'] },
          { label: 'Mechanisches Versagen möglich', values: ['Ja — Revision möglich', 'Keine mechanischen Teile'] },
          { label: 'Warnung bei Notfallkatheter', values: ['Zwingend — Manschette zuerst öffnen', 'Nicht erforderlich'] },
          { label: 'Umfang der Operation', values: ['Umfangreicher', 'Kleiner'] },
          { label: 'Wenn es nicht reicht', values: ['Revision', 'Wechsel zum künstlichen Schließmuskel möglich'] }
        ],
        note: 'Die richtige Frage lautet nicht „was ist stärker", sondern „wie schwer ist mein Harnverlust und kann ich ein Gerät bedienen". Ihre Vorlagenzahl ist dafür die wichtigste Angabe; notieren Sie daher vor der Kontaktaufnahme eine Woche lang den täglichen Verbrauch.'
      },
      recovery: [
        { period: 'Erste 48 Stunden', body: 'Schwellung und Blutergüsse am Hodensack sind üblich. Stützende Unterwäsche wird empfohlen. Fieber, Unvermögen zu urinieren oder Sekretion aus der Wunde erfordern sofortigen Kontakt.' },
        { period: 'Woche 1–2', body: 'Das Gerät ist DEAKTIVIERT; der Harnverlust besteht fort und Vorlagen werden weiter benutzt. Das ist zu erwarten. Radfahren, Reiten und Tätigkeiten mit Druck auf die Region werden vermieden.' },
        { period: 'Woche 2–4', body: 'Die Rückkehr zur Büroarbeit fällt meist hierher. Heben und Pressen werden vermieden.' },
        { period: 'Woche 4–6', body: 'Das Gerät wird aktiviert und die Bedienung beigebracht. Erst ab hier beginnt die Beurteilung des Ergebnisses.' },
        { period: 'Monat 3', body: 'Die Veränderung des täglichen Vorlagenverbrauchs ist der verständlichste Maßstab. Die Bedienung der Pumpe wird in dieser Zeit zur Gewohnheit.' },
        { period: 'Langfristig', body: 'Eine jährliche Kontrolle wird empfohlen. Kehrt der Harnverlust zurück, wird nach Gewebeatrophie oder mechanischem Versagen gesucht; beides ist durch Revision behebbar. Tragen Sie Ihren Geräteausweis stets bei sich.' }
      ],
      price: {
        from: 0,
        to: 0,
        currency: 'EUR',
        disclaimer:
          'Der Betrag hängt von den Gerätekosten, vom Umfang der Operation (frühere Eingriffe, Bestrahlung in der Vorgeschichte) und von der Aufenthaltsdauer ab. Eine mögliche Revision wird gesondert beurteilt. Ein detailliertes schriftliches Angebot folgt nach Sichtung Ihrer Unterlagen.'
      },
      packageIncludes: [
        'Untersuchung und Inkontinenzbeurteilung',
        'Vorlagentest, Uroflowmetrie und Restharnmessung',
        'Zystoskopische Beurteilung von Harnröhre und Blasenhals',
        'Blut- und Urinuntersuchungen, Urinkultur',
        'Narkose und Operationssaal',
        'Künstlicher Schließmuskel und Verbrauchsbedarf',
        'Klinikaufenthalt',
        'Katheterentfernung und Entlassungskontrolle',
        'Geräteausweis und schriftliche Bedienungsanleitung',
        'Transfers Flughafen–Klinik–Hotel',
        'Unterkunft (Patient und eine Begleitperson)',
        'Medizinischer Dolmetscher und Patientenkoordination',
        'Fernnachsorge nach der Rückkehr'
      ],
      faqs: [
        { q: 'Hört mein Harnverlust ganz auf?', a: 'Ziel ist eine deutliche Verringerung des Vorlagenbedarfs. Kein Gerät kann dauerhafte und vollständige Trockenheit garantieren. Der klarste Maßstab ist die Veränderung Ihrer täglichen Vorlagenzahl.' },
        { q: 'Bediene ich das Gerät selbst?', a: 'Ja. Bei jedem Wasserlassen müssen Sie die Pumpe im Hodensack mehrmals drücken. Deshalb werden Geschicklichkeit, Sehkraft und Kognition vorab geprüft. Wer das Gerät nicht bedienen kann, sollte es nicht erhalten.' },
        { q: 'Bin ich direkt nach der Operation trocken?', a: 'Nein. Das Gerät bleibt 4–6 Wochen DEAKTIVIERT, damit das Gewebe heilt. In dieser Zeit verlieren Sie weiter Urin und benutzen Vorlagen. Das ist zu erwarten und kein Versagen.' },
        { q: 'Meine Prostataoperation ist sechs Monate her — geht es jetzt?', a: 'In der Regel werden mindestens 12 Monate abgewartet, weil der Harnverlust in dieser Zeit noch nachlassen kann. Eine zu frühe Operation kann ein dauerhaftes Implantat für ein Problem bedeuten, das sich gelegt hätte.' },
        { q: 'Ich wurde bestrahlt — ist eine Operation möglich?', a: 'Ja, doch weil die Bestrahlung die Durchblutung beeinträchtigt, werden Erosion und Infektion wahrscheinlicher. Das heißt nicht, dass nicht operiert werden kann; es heißt, dass die Risiken anders besprochen werden. Nennen Sie Datum und Dosis.' },
        { q: 'Hält das Gerät lebenslang?', a: 'Nein. Es ist ein mechanisches System; über die Jahre kann wegen Versagens, Gewebeausdünnung oder Erosion eine Revision nötig werden. Das ist die Natur der Implantatchirurgie und sollte von Anfang an bekannt sein.' },
        { q: 'Was tue ich in der Notaufnahme?', a: 'Zeigen Sie Ihren Geräteausweis und sagen Sie, dass DIE MANSCHETTE VOR JEDER KATHETERISIERUNG GEÖFFNET WERDEN MUSS. Ein Katheter durch die geschlossene Manschette kann die Harnröhre dauerhaft schädigen. Tragen Sie den Ausweis immer bei sich.' },
        { q: 'Kann ich ein MRT bekommen, und löse ich Flughafendetektoren aus?', a: 'Das Gerät steht Bildgebung und Sicherheitskontrollen meist nicht entgegen, doch sagen Sie, dass Sie es tragen, und zeigen Sie den Ausweis. Vor einer geplanten Untersuchung teilen Sie der Radiologie Ihr Gerätemodell mit.' },
        { q: 'Beeinflusst es mein Sexualleben?', a: 'Das Gerät beeinflusst die Erektion nicht unmittelbar. Eine Erektionsstörung nach Prostataoperation ist ein eigenes Thema und kann gemeinsam geplant werden; bei manchen Patienten wird eine Penisprothese in derselben Sitzung erwogen.' },
        { q: 'Wie lange muss ich in der Türkei bleiben?', a: 'Für Operation und erste Kontrolle meist 10–14 Tage. Die AKTIVIERUNG erfolgt jedoch erst nach 4–6 Wochen: dafür müssen Sie entweder erneut anreisen oder den Termin vorab mit einem Urologen zu Hause vereinbaren. Planen Sie das von Anfang an.' },
        { q: 'Welche Unterlagen soll ich senden?', a: 'Operationsbericht und Datum Ihrer Prostataoperation, den Pathologiebefund, Datum und Dosis einer Bestrahlung, IHREN TÄGLICHEN VORLAGENVERBRAUCH ÜBER EINE WOCHE, vorhandene Urodynamik- und Zystoskopiebefunde, einen Urinbefund und Ihre Medikamentenliste.' }
      ],
      sources: [
        {
          label: 'EAU-Leitlinie zum Management nicht-neurogener LUTS des Mannes — Europäische Gesellschaft für Urologie',
          url: 'https://uroweb.org/guidelines/management-of-non-neurogenic-male-luts'
        }
      ]
    },
    fr: {
      title: 'Sphincter urinaire artificiel',
      summary:
        'En cas d’incontinence importante persistant après une chirurgie de la prostate, un dispositif composé d’une manchette autour de l’urètre et d’une pompe scrotale rétablit le contrôle.',
      metaTitle: 'Sphincter urinaire artificiel : solution des fuites après prostatectomie',
      metaDescription:
        'Le sphincter urinaire artificiel : à qui il convient, comment il fonctionne, différence avec la bandelette masculine, durée de vie du dispositif et risque de révision, risques et attentes réalistes.',
      quickFacts: {
        duration: '60 à 120 minutes',
        anesthesia: 'Anesthésie générale ou rachianesthésie',
        hospitalStay: '1 à 2 nuits',
        stayInTurkey: '10 à 14 jours',
        catheter: '1 jour',
        returnToWork: '2 à 4 semaines (bureau), 6 semaines (travail lourd)',
        flightClearance: 'Après la consultation de contrôle'
      },
      definition: [
        'Après une chirurgie pour cancer de la prostate (prostatectomie radicale), certains hommes présentent des fuites urinaires. Chez la plupart, cela s’atténue nettement en quelques mois. Chez un groupe de patients, cependant, les fuites persistent malgré la rééducation périnéale et le temps, et limitent fortement la vie quotidienne. Le sphincter urinaire artificiel a été conçu pour ce groupe.',
        'Le dispositif comporte trois éléments : une MANCHETTE placée autour de l’urètre, un RÉSERVOIR de liquide placé dans l’abdomen et une POMPE située sous la peau du scrotum. Au repos, la manchette est gonflée et maintient l’urètre fermé. Pour uriner, vous pressez la pompe plusieurs fois ; le liquide passe de la manchette au réservoir, le canal s’ouvre et vous urinez. En quelques minutes, le liquide revient de lui-même et le canal se referme.',
        'CE TRAITEMENT SUPPOSE QUE LE PATIENT MANIPULE LE DISPOSITIF. Vous devez utiliser la pompe à chaque miction. Dextérité, vision et fonctions cognitives sont donc évaluées. Implanter le dispositif chez quelqu’un qui ne peut pas l’utiliser n’est pas correct — cela se discute ouvertement avant l’intervention.',
        'LA RÈGLE DE SÉCURITÉ LA PLUS IMPORTANTE : chez un patient porteur d’un sphincter, LA MANCHETTE DOIT ÊTRE DÉSACTIVÉE AVANT TOUT SONDAGE. Passer une sonde à travers une manchette fermée peut léser définitivement l’urètre. Le patient reçoit donc une carte de dispositif et doit la présenter dans tout service d’urgence. Un centre qui ne le dit pas fait un travail incomplet.',
        'LE BON MOMENT COMPTE PLUS QU’UN MOMENT PRÉCOCE. On attend en général au moins 12 mois après la chirurgie prostatique, car les fuites peuvent encore s’amender spontanément. S’il existe un rétrécissement du col vésical, il est traité d’abord. Une intervention trop précoce peut revenir à poser un implant définitif pour un problème qui se serait résolu.',
        'UN ANTÉCÉDENT DE RADIOTHÉRAPIE CHANGE LA DÉCISION. Après irradiation pelvienne, la vascularisation tissulaire est altérée et les complications liées au dispositif (érosion, infection) deviennent plus probables. L’intervention reste possible, mais les risques se discutent différemment. Si vous avez été irradié, dites-le d’emblée.',
        'LE DISPOSITIF A UNE DURÉE DE VIE. Le sphincter artificiel est un système mécanique ; au fil des ans, une révision peut être nécessaire pour panne mécanique, amincissement du tissu sous la manchette (atrophie) ou érosion. Ce n’est pas un échec mais la nature de la chirurgie implantaire, et cela doit être dit dès le départ. Si vous venez de l’étranger, prévoyez où une éventuelle révision serait réalisée.'
      ],
      eligibility: {
        suitable: [
          'Hommes à au moins 12 mois d’une chirurgie prostatique avec fuites importantes persistantes',
          'Hommes contraints d’utiliser plus d’une protection par jour et limités par cette situation',
          'Hommes insuffisamment améliorés par la rééducation périnéale',
          'Patients porteurs d’une bandelette masculine au résultat insuffisant',
          'Patients ayant la dextérité, la vision et les capacités cognitives pour manipuler le dispositif',
          'Patients capables de venir en suivi et de porter la carte du dispositif'
        ],
        notSuitable: [
          'Hommes à moins de 12 mois de la chirurgie prostatique — les fuites peuvent encore s’amender',
          'Patients dont la dextérité, la vision ou la cognition ne permettent pas d’utiliser la pompe',
          'Patients présentant une infection urinaire ou cutanée non traitée',
          'Patients porteurs d’un rétrécissement non traité du col vésical ou de l’urètre : il est traité d’abord',
          'Patients à vessie hyperactive dont le problème principal est l’urgenturie — le dispositif n’y aide pas',
          'Patients à pression vésicale non contrôlée menaçant le haut appareil urinaire'
        ]
      },
      technology: [
        'Système de sphincter artificiel à trois composants (manchette, réservoir, pompe scrotale)',
        'Évaluation cystoscopique de l’urètre et du col vésical',
        'Pad-test pour mesurer objectivement les fuites',
        'Débitmétrie et mesure du résidu post-mictionnel',
        'Bilan urodynamique — pour objectiver les fonctions de stockage et de vidange',
        'Carte d’identification du dispositif remise au patient (à présenter avant tout sondage en urgence)'
      ],
      surgeonExperience: {
        caseVolume: '',
        note: 'Le sphincter artificiel relève de la chirurgie implantaire de l’urologie reconstructrice. Le résultat dépend de la sélection du patient, du positionnement et du calibre corrects de la manchette, et de la formation du patient à l’usage du dispositif. L’expérience du Dr Müslüm Ergün en chirurgie urétrale et reconstructrice fonde cette approche, en particulier après radiothérapie ou geste antérieur.'
      },
      expertise: {
        redoRate: 'Les hommes déjà porteurs d’une bandelette ou nécessitant une révision du dispositif représentent une part importante de cette activité.',
        complexCase: 'Les patients irradiés, avec sténose du col vésical associée, ou dont l’implant précédent a été retiré sont considérés comme des cas complexes.',
        advancedTechnique: 'Abords transscrotal et périnéal, avec pose transcorporelle de la manchette lorsque nécessaire.'
      },
      timeline: [
        { when: 'À distance', title: 'Étude du dossier', body: 'Date et compte rendu de votre chirurgie prostatique, résultat anatomopathologique, date et dose d’une éventuelle radiothérapie, nombre quotidien de protections, et comptes rendus d’urodynamique et de cystoscopie sont étudiés. Sans le nombre de protections, la sévérité ne peut être appréciée.' },
        { when: 'Jour 1', title: 'Examen et bilan', body: 'Examen, pad-test, débitmétrie, résidu, ECBU. La cystoscopie évalue l’urètre et le col vésical ; en cas de rétrécissement, l’implantation est reportée et le rétrécissement traité d’abord.' },
        { when: 'Jour 2', title: 'Intervention', body: 'La manchette est placée autour de l’urètre, le réservoir dans l’abdomen et la pompe sous la peau du scrotum. Le système est rempli mais laissé DÉSACTIVÉ pour permettre la cicatrisation.' },
        { when: 'Jours 3–4', title: 'Sortie', body: 'La sonde est généralement retirée le lendemain. Le dispositif étant désactivé, les fuites continuent — c’est attendu et ce n’est pas un échec.' },
        { when: 'Jours 4–8', title: 'Contrôle', body: 'La plaie et le scrotum sont évalués. Le vol retour est prévu après ce contrôle, et votre carte de dispositif vous est remise ici.' },
        { when: 'Semaines 4–6', title: 'Activation du dispositif', body: 'Après cicatrisation, le dispositif est activé et son maniement vous est enseigné en pratique. LE VÉRITABLE RÉSULTAT NE S’APPRÉCIE QU’À PARTIR DE CE MOMENT. Pour ce rendez-vous, vous devez soit revenir, soit l’organiser à l’avance avec un urologue de votre pays.' }
      ],
      risks: [
        'INFECTION : le dispositif est un implant ; en cas d’infection, l’ensemble doit généralement être retiré et réimplanté plusieurs mois plus tard. C’est la complication la plus grave',
        'ÉROSION : la manchette appuie sur la paroi urétrale et s’ouvre dans l’urètre. Le risque est plus élevé après radiothérapie ; cela impose le retrait du dispositif',
        'PANNE MÉCANIQUE : le système peut fuir ou la pompe cesser de fonctionner. Le dispositif a une durée de vie et une révision peut être nécessaire avec les années',
        'ATROPHIE TISSULAIRE : le tissu sous la manchette s’amincit avec le temps et les fuites reviennent. Une révision avec une manchette plus petite peut être nécessaire',
        'LES FUITES NE DISPARAISSENT PAS TOTALEMENT : l’objectif est de réduire nettement le besoin de protections. Aucun dispositif ne garantit une continence définitive et totale',
        'Infection urinaire et difficultés mictionnelles',
        'Douleur ou gonflement du scrotum, ou pompe perçue de façon gênante',
        'RISQUE EN URGENCE : un sondage sans désactivation de la manchette peut léser définitivement l’urètre. Portez toujours votre carte de dispositif'
      ],
      alternatives: [
        'Rééducation périnéale et kinésithérapie — première étape, toujours essayée avant la chirurgie',
        'Attente et surveillance — les fuites peuvent diminuer d’elles-mêmes dans les 12 mois suivant la chirurgie prostatique',
        'Bandelette masculine — pour des fuites légères à modérées ; sans dispositif à manipuler mais insuffisante en cas de fuites sévères',
        'Injection de produit de comblement urétral — effet généralement limité et bref',
        'Pince pénienne ou étui pénien — pour les hommes qui refusent ou ne peuvent pas être opérés',
        'Prise en charge par protections absorbantes — non un traitement mais une façon de composer ; son effet sur la qualité de vie ne doit pas être sous-estimé'
      ],
      comparison: {
        title: 'Sphincter artificiel et bandelette masculine : quoi pour quelle situation',
        columns: ['Critère', 'Sphincter artificiel', 'Bandelette masculine'],
        rows: [
          { label: 'Sévérité des fuites', values: ['Modérées à sévères', 'Légères à modérées'] },
          { label: 'Le patient manipule un dispositif', values: ['Oui — la pompe, à chaque fois', 'Non'] },
          { label: 'Antécédent de radiothérapie', values: ['Possible, risque accru', 'Résultat moins prévisible'] },
          { label: 'Attente avant activation', values: ['Fonctionne à partir de 4 à 6 semaines', 'Efficace d’emblée'] },
          { label: 'Panne mécanique possible', values: ['Oui — révision possible', 'Pas de pièce mécanique'] },
          { label: 'Avertissement sondage en urgence', values: ['Indispensable — ouvrir d’abord la manchette', 'Non nécessaire'] },
          { label: 'Ampleur de l’intervention', values: ['Plus étendue', 'Plus limitée'] },
          { label: 'Si cela ne suffit pas', values: ['Révision', 'Conversion possible en sphincter artificiel'] }
        ],
        note: 'La bonne question n’est pas « lequel est le plus efficace » mais « quelle est la sévérité de mes fuites et puis-je manipuler un dispositif ». Votre nombre de protections est la donnée la plus importante : notez-le chaque jour pendant une semaine avant de nous contacter.'
      },
      recovery: [
        { period: '48 premières heures', body: 'Gonflement et ecchymoses du scrotum sont habituels. Un sous-vêtement de soutien est conseillé. Fièvre, impossibilité d’uriner ou écoulement de la plaie imposent un contact immédiat.' },
        { period: 'Semaines 1–2', body: 'Le dispositif est DÉSACTIVÉ ; les fuites continuent et les protections restent nécessaires. C’est attendu. Vélo, équitation et activités comprimant la région sont évités.' },
        { period: 'Semaines 2–4', body: 'La reprise du travail de bureau se situe généralement là. Port de charges et efforts de poussée sont évités.' },
        { period: 'Semaines 4–6', body: 'Le dispositif est activé et son usage enseigné. L’évaluation du résultat ne commence qu’à partir de là.' },
        { period: 'Mois 3', body: 'Le changement du nombre quotidien de protections est la mesure la plus parlante. L’usage de la pompe devient une habitude.' },
        { period: 'Long terme', body: 'Un contrôle annuel est conseillé. Si les fuites reviennent, on recherche une atrophie tissulaire ou une panne mécanique ; les deux se corrigent par révision. Portez toujours votre carte.' }
      ],
      price: {
        from: 0,
        to: 0,
        currency: 'EUR',
        disclaimer:
          'Le montant dépend du coût du dispositif, de l’ampleur de l’intervention (geste antérieur, antécédent de radiothérapie) et de la durée d’hospitalisation. Une révision éventuelle est évaluée séparément. Un devis écrit détaillé est remis après étude de votre dossier.'
      },
      packageIncludes: [
        'Consultation et évaluation de l’incontinence',
        'Pad-test, débitmétrie et mesure du résidu',
        'Évaluation cystoscopique de l’urètre et du col vésical',
        'Bilans sanguins et urinaires, ECBU',
        'Anesthésie et bloc opératoire',
        'Dispositif de sphincter artificiel et consommables',
        'Hospitalisation',
        'Retrait de la sonde et contrôle de sortie',
        'Carte d’identification du dispositif et notice écrite',
        'Transferts aéroport–hôpital–hôtel',
        'Hébergement (patient et un accompagnant)',
        'Interprète médical et coordinateur patient',
        'Suivi à distance après le retour'
      ],
      faqs: [
        { q: 'Mes fuites vont-elles cesser complètement ?', a: 'L’objectif est de réduire nettement le besoin de protections. Aucun dispositif ne garantit une continence définitive et totale. La mesure la plus claire est l’évolution de votre nombre quotidien de protections.' },
        { q: 'Dois-je manipuler le dispositif moi-même ?', a: 'Oui. Vous devez presser la pompe scrotale plusieurs fois à chaque miction. C’est pourquoi dextérité, vision et cognition sont évaluées avant l’intervention. Implanter le dispositif chez quelqu’un qui ne peut l’utiliser n’est pas correct.' },
        { q: 'Serai-je sec juste après l’intervention ?', a: 'Non. Le dispositif reste DÉSACTIVÉ 4 à 6 semaines, le temps de la cicatrisation. Vous continuerez à fuir et à utiliser des protections durant cette période. C’est attendu, pas un échec.' },
        { q: 'Ma prostatectomie date de six mois : puis-je être opéré maintenant ?', a: 'On attend généralement au moins 12 mois, car les fuites peuvent encore diminuer. Une intervention trop précoce peut revenir à poser un implant définitif pour un problème qui se serait résolu.' },
        { q: 'J’ai eu une radiothérapie : puis-je être opéré ?', a: 'Oui, mais comme la radiothérapie altère la vascularisation, érosion et infection deviennent plus probables. Cela ne veut pas dire que l’intervention est impossible, mais que les risques se discutent différemment. Indiquez la date et la dose.' },
        { q: 'Le dispositif dure-t-il toute la vie ?', a: 'Non. C’est un système mécanique ; au fil des ans, une révision peut être nécessaire pour panne, amincissement tissulaire ou érosion. C’est la nature de la chirurgie implantaire et cela doit être su dès le départ.' },
        { q: 'Que faire si je vais aux urgences ?', a: 'Montrez votre carte et dites que LA MANCHETTE DOIT ÊTRE DÉSACTIVÉE AVANT TOUT SONDAGE. Passer une sonde à travers une manchette fermée peut léser définitivement l’urètre. Portez toujours la carte sur vous.' },
        { q: 'Puis-je passer une IRM, et les portiques d’aéroport ?', a: 'Le dispositif n’empêche généralement ni l’imagerie ni les contrôles de sécurité, mais signalez-le et montrez votre carte. Avant un examen programmé, communiquez le modèle à l’équipe de radiologie.' },
        { q: 'Cela affectera-t-il ma vie sexuelle ?', a: 'Le dispositif n’affecte pas directement l’érection. Des troubles de l’érection après chirurgie prostatique constituent un sujet distinct, qui peut être planifié conjointement ; chez certains patients, une prothèse pénienne est évaluée dans le même temps.' },
        { q: 'Combien de temps rester en Türkiye ?', a: 'Généralement 10 à 14 jours pour l’intervention et le premier contrôle. Mais l’ACTIVATION a lieu 4 à 6 semaines plus tard : pour ce rendez-vous, il faut soit revenir, soit l’organiser à l’avance avec un urologue chez vous. Prévoyez-le dès le départ.' },
        { q: 'Quels documents envoyer ?', a: 'Le compte rendu et la date de votre chirurgie prostatique, le résultat anatomopathologique, la date et la dose d’une éventuelle radiothérapie, VOTRE NOMBRE QUOTIDIEN DE PROTECTIONS SUR UNE SEMAINE, les comptes rendus d’urodynamique et de cystoscopie, un ECBU et la liste de vos traitements.' }
      ],
      sources: [
        {
          label: 'Recommandations EAU sur les troubles mictionnels non neurogènes de l’homme — Association européenne d’urologie',
          url: 'https://uroweb.org/guidelines/management-of-non-neurogenic-male-luts'
        }
      ]
    },
    ru: {
      title: 'Искусственный сфинктер мочевого пузыря',
      summary:
        'При выраженном недержании, сохраняющемся после операции на простате, устройство из манжеты вокруг уретры и помпы в мошонке возвращает контроль над мочеиспусканием.',
      metaTitle: 'Искусственный сфинктер: решение при подтекании после простатэктомии',
      metaDescription:
        'Искусственный сфинктер мочевого пузыря: кому подходит, как работает, чем отличается от мужской петли, срок службы устройства и вероятность ревизии, риски и честные ожидания.',
      quickFacts: {
        duration: '60–120 минут',
        anesthesia: 'Общая или спинальная анестезия',
        hospitalStay: '1–2 ночи',
        stayInTurkey: '10–14 дней',
        catheter: '1 день',
        returnToWork: '2–4 недели (сидячая работа), 6 недель (тяжёлая)',
        flightClearance: 'После контрольного осмотра'
      },
      definition: [
        'После операции по поводу рака простаты (радикальной простатэктомии) часть мужчин теряет мочу. У большинства это заметно уменьшается за месяцы. Но у части пациентов подтекание сохраняется несмотря на упражнения для тазового дна и время и серьёзно ограничивает повседневную жизнь. Искусственный сфинктер создан именно для этой группы.',
        'Устройство состоит из трёх частей: МАНЖЕТЫ вокруг уретры, РЕЗЕРВУАРА с жидкостью в брюшной полости и ПОМПЫ под кожей мошонки. В покое манжета наполнена и держит уретру закрытой. Когда вы хотите помочиться, вы несколько раз сжимаете помпу; жидкость переходит из манжеты в резервуар, канал открывается и вы мочитесь. Через несколько минут жидкость возвращается сама и канал снова закрывается.',
        'ЭТО ЛЕЧЕНИЕ ТРЕБУЕТ, ЧТОБЫ ПАЦИЕНТ САМ УПРАВЛЯЛ УСТРОЙСТВОМ. Помпой нужно пользоваться каждый раз. Поэтому оценивают ловкость рук, зрение и когнитивные функции. Имплантировать устройство тому, кто не сможет им пользоваться, неправильно, и это открыто обсуждается до операции.',
        'САМОЕ ВАЖНОЕ ПРАВИЛО БЕЗОПАСНОСТИ: пациенту со сфинктером МАНЖЕТУ НУЖНО ОТКРЫТЬ ДО УСТАНОВКИ КАТЕТЕРА. Проведение катетера через закрытую манжету может необратимо повредить уретру. Поэтому пациенту выдают карту устройства и просят показывать её в приёмном отделении. Центр, который об этом не говорит, работает неполно.',
        'ВАЖЕН НЕ РАННИЙ, А ПРАВИЛЬНЫЙ СРОК. Обычно после операции на простате выжидают не менее 12 месяцев, потому что подтекание ещё может уменьшиться само. Если есть сужение шейки пузыря, сначала лечат его. Слишком ранняя операция может означать установку постоянного импланта из-за проблемы, которая разрешилась бы сама.',
        'ЛУЧЕВАЯ ТЕРАПИЯ В АНАМНЕЗЕ МЕНЯЕТ РЕШЕНИЕ. После облучения таза кровоснабжение тканей нарушено, и связанные с устройством проблемы (эрозия, инфекция) становятся вероятнее. Операция всё же возможна, но риски обсуждаются иначе. Если вы получали лучевую терапию, скажите об этом сразу.',
        'У УСТРОЙСТВА ЕСТЬ СРОК СЛУЖБЫ. Искусственный сфинктер — механическая система; с годами может потребоваться ревизия из-за механической поломки, истончения ткани под манжетой (атрофии) или эрозии. Это не неудача, а природа имплантационной хирургии, и об этом говорят с самого начала. Если вы приезжаете из-за рубежа, заранее продумайте, где будет выполнена возможная ревизия.'
      ],
      eligibility: {
        suitable: [
          'Мужчины минимум через 12 месяцев после операции на простате со стойким выраженным подтеканием',
          'Мужчины, вынужденные использовать более одной прокладки в день, чья жизнь этим ограничена',
          'Мужчины, которым недостаточно помогают упражнения для тазового дна',
          'Пациенты, у которых мужская петля не дала достаточного результата',
          'Пациенты с ловкостью рук, зрением и когнитивными возможностями для управления устройством',
          'Пациенты, способные приходить на наблюдение и носить карту устройства'
        ],
        notSuitable: [
          'Мужчины, у которых с операции на простате прошло менее 12 месяцев — подтекание ещё может уменьшиться',
          'Пациенты, чья ловкость, зрение или когнитивные функции не позволят пользоваться помпой',
          'Пациенты с нелеченой инфекцией мочевых путей или кожи',
          'Пациенты с неустранённым сужением шейки пузыря или уретры: сначала лечат его',
          'Пациенты с гиперактивным пузырём, у которых главная проблема — позывы; устройство здесь не помогает',
          'Пациенты с неконтролируемым давлением в пузыре, угрожающим верхним мочевым путям'
        ]
      },
      technology: [
        'Трёхкомпонентная система искусственного сфинктера (манжета, резервуар, мошоночная помпа)',
        'Цистоскопическая оценка уретры и шейки мочевого пузыря',
        'Прокладочный тест для объективной оценки подтекания',
        'Урофлоуметрия и измерение остаточной мочи',
        'Уродинамика — для оценки накопительной и эвакуаторной функции пузыря',
        'Карта устройства, выдаваемая пациенту (показывается до любой катетеризации в экстренной ситуации)'
      ],
      surgeonExperience: {
        caseVolume: '',
        note: 'Искусственный сфинктер относится к имплантационной хирургии в реконструктивной урологии. Результат определяют правильный отбор пациента, верное положение и размер манжеты и обучение пациента работе с устройством. Опыт доцента, д-ра Мюслюма Эргюна в хирургии уретры и реконструктивных операциях лежит в основе подхода, особенно после лучевой терапии и предшествующих вмешательств.'
      },
      expertise: {
        redoRate: 'Мужчины с уже установленной петлёй или нуждающиеся в ревизии устройства составляют значительную часть этой работы.',
        complexCase: 'Пациенты после лучевой терапии, с сопутствующей стриктурой шейки пузыря или с удалённым прежним имплантом считаются сложными случаями.',
        advancedTechnique: 'Трансскротальный и промежностный доступы, при необходимости транскорпоральная установка манжеты.'
      },
      timeline: [
        { when: 'Дистанционно', title: 'Оценка документов', body: 'Изучают дату и протокол операции на простате, результат гистологии, дату и дозу лучевой терапии, если она была, ежедневное число прокладок и имеющиеся заключения уродинамики и цистоскопии. Без числа прокладок тяжесть проблемы оценить нельзя.' },
        { when: '1-й день', title: 'Осмотр и обследование', body: 'Осмотр, прокладочный тест, урофлоуметрия, остаточная моча, анализ и посев мочи. Цистоскопия оценивает уретру и шейку пузыря; при сужении операцию откладывают и сначала лечат сужение.' },
        { when: '2-й день', title: 'Операция', body: 'Манжету размещают вокруг уретры, резервуар — в брюшной полости, помпу — под кожей мошонки. Систему заполняют жидкостью, но оставляют ВЫКЛЮЧЕННОЙ, чтобы ткань зажила.' },
        { when: '3–4-й день', title: 'Выписка', body: 'Катетер обычно удаляют на следующий день. Поскольку устройство в этот период выключено, подтекание сохраняется — это ожидаемо и не является неудачей.' },
        { when: '4–8-й день', title: 'Контроль', body: 'Оценивают рану и мошонку. Обратный рейс планируют после этого контроля, здесь же вам выдают карту устройства.' },
        { when: '4–6-я неделя', title: 'Активация устройства', body: 'После заживления устройство включают и практически обучают вас пользоваться помпой. НАСТОЯЩИЙ РЕЗУЛЬТАТ ОЦЕНИВАЮТ ТОЛЬКО С ЭТОГО МОМЕНТА. Для этого приёма вам нужно либо приехать снова, либо заранее договориться с урологом в своей стране.' }
      ],
      risks: [
        'ИНФЕКЦИЯ: устройство — имплант; при инфицировании обычно приходится удалять всю систему и устанавливать заново через месяцы. Это самое тяжёлое осложнение',
        'ЭРОЗИЯ: манжета давит на стенку уретры и прорезывается в неё. Риск выше после лучевой терапии; требуется удаление устройства',
        'МЕХАНИЧЕСКАЯ ПОЛОМКА: система может терять жидкость, а помпа — перестать работать. У устройства есть срок службы, и с годами может понадобиться ревизия',
        'АТРОФИЯ ТКАНИ: ткань под манжетой со временем истончается и подтекание возвращается. Может потребоваться ревизия с манжетой меньшего размера',
        'ПОДТЕКАНИЕ ИСЧЕЗАЕТ НЕ ПОЛНОСТЬЮ: цель — заметно снизить потребность в прокладках. Ни одно устройство не гарантирует стойкую и полную сухость',
        'Инфекция мочевых путей и затруднение мочеиспускания',
        'Боль или отёк мошонки либо неприятно ощутимая помпа',
        'РИСК В ЭКСТРЕННОЙ СИТУАЦИИ: катетеризация без открытия манжеты может необратимо повредить уретру. Всегда носите карту устройства'
      ],
      alternatives: [
        'Упражнения для тазового дна и физиотерапия — первый шаг, всегда пробуется до операции',
        'Выжидание и наблюдение — в первые 12 месяцев после операции на простате подтекание может уменьшиться',
        'Мужская петля — при лёгком и умеренном подтекании; не требует управления устройством, но при выраженном подтекании недостаточна',
        'Инъекция объёмообразующего вещества в уретру — эффект обычно ограничен и краток',
        'Пенильный зажим или кондомный мочеприёмник — для мужчин, не желающих или не подходящих для операции',
        'Ведение с помощью впитывающих средств — не лечение, а способ справляться; влияние на качество жизни недооценивать нельзя'
      ],
      comparison: {
        title: 'Искусственный сфинктер и мужская петля: что для какой ситуации',
        columns: ['Критерий', 'Искусственный сфинктер', 'Мужская петля'],
        rows: [
          { label: 'Степень подтекания', values: ['Умеренная и выраженная', 'Лёгкая и умеренная'] },
          { label: 'Пациент управляет устройством', values: ['Да — помпа при каждом мочеиспускании', 'Нет'] },
          { label: 'Лучевая терапия в анамнезе', values: ['Возможна, риск выше', 'Результат менее предсказуем'] },
          { label: 'Ожидание активации', values: ['Работает с 4–6-й недели', 'Эффективна сразу'] },
          { label: 'Возможность механической поломки', values: ['Есть — может понадобиться ревизия', 'Механических частей нет'] },
          { label: 'Предупреждение об экстренном катетере', values: ['Обязательно — сначала открыть манжету', 'Не требуется'] },
          { label: 'Объём операции', values: ['Больше', 'Меньше'] },
          { label: 'Если результата не хватит', values: ['Ревизия', 'Можно перейти к искусственному сфинктеру'] }
        ],
        note: 'Правильный вопрос не «что сильнее», а «насколько выражено моё подтекание и смогу ли я управлять устройством». Число прокладок — самая важная для этого решения информация, поэтому неделю до обращения записывайте их ежедневное количество.'
      },
      recovery: [
        { period: 'Первые 48 часов', body: 'Отёк и кровоподтёки мошонки обычны. Рекомендуется поддерживающее бельё. Лихорадка, невозможность помочиться или отделяемое из раны требуют немедленного обращения.' },
        { period: '1–2-я неделя', body: 'Устройство ВЫКЛЮЧЕНО; подтекание сохраняется и прокладки по-прежнему нужны. Это ожидаемо. Велосипед, верховая езда и нагрузки на область исключаются.' },
        { period: '2–4-я неделя', body: 'Возвращение к сидячей работе обычно приходится сюда. Подъём тяжестей и натуживание исключают.' },
        { period: '4–6-я неделя', body: 'Устройство активируют и обучают пользованию. Оценка результата начинается только с этого момента.' },
        { period: '3-й месяц', body: 'Изменение ежедневного числа прокладок — самая понятная мера результата. Пользование помпой в этот период входит в привычку.' },
        { period: 'Долгосрочно', body: 'Рекомендуется ежегодный контроль. Если подтекание возвращается, ищут атрофию ткани или механическую поломку; и то и другое решается ревизией. Всегда носите карту устройства.' }
      ],
      price: {
        from: 0,
        to: 0,
        currency: 'EUR',
        disclaimer:
          'Сумма зависит от стоимости устройства, объёма операции (были ли прежние вмешательства, была ли лучевая терапия) и срока пребывания в стационаре. Возможная ревизия оценивается отдельно. Постатейное письменное предложение даётся после изучения ваших документов.'
      },
      packageIncludes: [
        'Осмотр и оценка недержания',
        'Прокладочный тест, урофлоуметрия и измерение остаточной мочи',
        'Цистоскопическая оценка уретры и шейки пузыря',
        'Анализы крови и мочи, посев мочи',
        'Анестезия и операционная',
        'Устройство искусственного сфинктера и расходные материалы',
        'Пребывание в стационаре',
        'Удаление катетера и контроль при выписке',
        'Карта устройства и письменная инструкция по применению',
        'Трансферы аэропорт — больница — отель',
        'Проживание (пациент и один сопровождающий)',
        'Медицинский переводчик и координатор пациента',
        'Дистанционное наблюдение после возвращения'
      ],
      faqs: [
        { q: 'Полностью ли прекратится подтекание?', a: 'Цель — заметно снизить потребность в прокладках. Ни одно устройство не гарантирует стойкую и полную сухость. Самая понятная мера результата — изменение ежедневного числа прокладок.' },
        { q: 'Я сам буду управлять устройством?', a: 'Да. При каждом мочеиспускании нужно несколько раз сжать помпу в мошонке. Поэтому до операции оценивают ловкость, зрение и когнитивные функции. Имплантировать устройство тому, кто не сможет им пользоваться, неправильно.' },
        { q: 'Буду ли я сухим сразу после операции?', a: 'Нет. Устройство оставляют ВЫКЛЮЧЕННЫМ на 4–6 недель, чтобы ткань зажила. В этот период подтекание сохраняется и прокладки нужны. Это ожидаемо, а не неудача.' },
        { q: 'С моей операции на простате прошло шесть месяцев — можно сейчас?', a: 'Обычно выжидают не менее 12 месяцев, потому что подтекание за это время ещё может уменьшиться. Слишком ранняя операция может означать постоянный имплант из-за проблемы, которая разрешилась бы сама.' },
        { q: 'Я получал лучевую терапию — можно ли оперироваться?', a: 'Можно, но поскольку облучение нарушает кровоснабжение тканей, эрозия и инфекция становятся вероятнее. Это не значит, что операция невозможна; это значит, что риски обсуждаются иначе. Обязательно сообщите дату и дозу.' },
        { q: 'Прослужит ли устройство всю жизнь?', a: 'Нет. Это механическая система; с годами может потребоваться ревизия из-за поломки, истончения ткани или эрозии. Такова природа имплантационной хирургии, и знать об этом нужно с самого начала.' },
        { q: 'Что делать, если я попаду в приёмное отделение?', a: 'Покажите карту устройства и скажите, что МАНЖЕТУ НУЖНО ОТКРЫТЬ ДО УСТАНОВКИ КАТЕТЕРА. Катетер через закрытую манжету может необратимо повредить уретру. Всегда носите карту с собой.' },
        { q: 'Можно ли делать МРТ и пройду ли я рамку в аэропорту?', a: 'Обычно устройство не препятствует ни визуализации, ни досмотру, но сообщите о нём и покажите карту. Перед плановым исследованием передайте модель устройства в отделение лучевой диагностики.' },
        { q: 'Повлияет ли это на половую жизнь?', a: 'Устройство напрямую не влияет на эрекцию. Нарушение эрекции после операции на простате — отдельная тема, которую можно планировать совместно; у части пациентов в ту же операцию рассматривают пенильный протез.' },
        { q: 'Сколько нужно пробыть в Турции?', a: 'Обычно 10–14 дней для операции и первого контроля. Но АКТИВАЦИЯ устройства — через 4–6 недель: для этого приёма нужно либо приехать снова, либо заранее договориться с урологом дома. Планируйте это с самого начала.' },
        { q: 'Какие документы прислать?', a: 'Протокол и дату операции на простате, результат гистологии, дату и дозу лучевой терапии, ЕЖЕДНЕВНОЕ ЧИСЛО ПРОКЛАДОК ЗА НЕДЕЛЮ, заключения уродинамики и цистоскопии, анализ мочи и список принимаемых препаратов.' }
      ],
      sources: [
        {
          label: 'Рекомендации EAU по ведению ненейрогенных расстройств мочеиспускания у мужчин — Европейская ассоциация урологии',
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
