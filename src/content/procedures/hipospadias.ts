import type { Treatment } from '../types';

/**
 * HİPOSPADİAS ONARIMI — yeni sayfa (Görev 7).
 *
 * reviewStatus: 'reviewed' — hekim onayı alındı (Dr. Ergün, 6 Ekim 2026).
 * `lastReviewed` o tarihle dolduruldu; sayfada "Son tıbbi gözden geçirme"
 * satırı ve JSON-LD'de reviewedBy artık basılır.
 *
 * Kaynak: EAU/ESPU Paediatric Urology kılavuzu.
 * Kaynaksız oran, yüzde veya başarı iddiası YAZILMAMIŞTIR.
 */
export const hipospadias: Treatment = {
  slug: 'hipospadias-onarimi',
  procedure: { type: 'SurgicalProcedure', bodyLocation: 'Urethra' },
  parent: 'cocuk-urolojisi',
  icon: 'urethra',
  category: 'reconstructive',
  reviewStatus: 'reviewed',

  lastReviewed: '2026-10-06',
  offersConsultation: false,
  i18n: {
    tr: {
      title: 'Hipospadias Onarımı',
      summary:
        'İdrar deliğinin penisin ucunda değil, alt yüzünde açıldığı doğuştan gelen durumun cerrahi onarımı. Amaç önce işlev — düzgün bir idrar akımı ve düz bir penis — sonra görünümdür.',
      metaTitle: 'Hipospadias Onarımı: Ameliyat Yaşı, Teknikler ve İyileşme',
      metaDescription:
        'Çocuklarda hipospadias onarımı: hangi yaşta yapılır, neden sünnet önceden yapılmamalıdır, tek seans ve iki seans onarım, fistül ve darlık riski, iyileşme süreci ve dürüst beklentiler.',
      quickFacts: {
        duration: '1–3 saat (tipe göre)',
        anesthesia: 'Genel anestezi (çocukta kaudal blok eklenebilir)',
        hospitalStay: 'Günübirlik – 1 gece',
        stayInTurkey: '10–14 gün',
        catheter: '5–10 gün',
        returnToWork: 'Kreş/okula dönüş 2–3 hafta',
        flightClearance: 'Sonda alındıktan ve kontrol yapıldıktan sonra'
      },
      definition: [
        'Hipospadias, idrar kanalının (üretranın) penisin ucuna kadar tamamlanmadan, alt yüzünde bir yerde dışarı açıldığı doğuştan gelen bir durumdur. Erkek bebeklerde sık görülür ve bir hastalık ya da yanlış bir şeyin sonucu değildir; gelişimin tamamlanmamasıdır. Ailelerin en çok sorduğu soru olan "bizim yaptığımız bir hata mı" sorusunun cevabı hayırdır.',
        'Üç bulgu bir arada değerlendirilir: idrar deliğinin nerede açıldığı, penisin öne doğru eğriliğinin (kordi) olup olmadığı ve sünnet derisinin öndeki eksikliği. Bu üçü her çocukta aynı derecede bulunmaz. Delik uca yakınsa (distal) tablo genellikle daha hafiftir; deliğin penis kökünde veya skrotumda açıldığı durumlar (proksimal) daha ileri bir onarım gerektirir.',
        'Onarım kararı yalnızca görünüme göre verilmez. Asıl ölçütler şunlardır: çocuk ayakta ve ileri doğru idrar yapabiliyor mu, idrar akımı dağılıyor veya aşağı doğru mu gidiyor, penis idrar yaparken veya ileride ereksiyonda belirgin biçimde eğri mi. Çok hafif, uca çok yakın ve eğriliğin olmadığı bazı olgularda ameliyat gerekmeyebilir — bu da geçerli bir sonuçtur ve ailelere açıkça söylenir.',
        'ÇOK ÖNEMLİ BİR UYARI: Hipospadiası olan bir çocuğa ONARIMDAN ÖNCE SÜNNET YAPILMAMALIDIR. Sünnet derisi, onarımda kullanılabilecek en değerli dokudur; kesilip atıldığında cerrah elindeki en uygun malzemeyi kaybeder ve onarım zorlaşır. Türkiye’de bu, geleneksel sünnet uygulaması nedeniyle sık yaşanan bir sorundur. Çocuğunuzda idrar deliğinin yeri olağan dışı görünüyorsa, sünnetten önce bir ürolog değerlendirmelidir.',
        'Ameliyat için tercih edilen dönem genellikle bebeğin ilk yılı içindedir; kılavuzlarda çoğunlukla 6–18 ay arası öne çıkar. Bu dönemin seçilmesinin nedeni çocuğun olayı hatırlamaması ve iyileşmenin hızlı olmasıdır. Daha geç başvurulduğunda onarım yine yapılabilir; "yaş geçti" diye bir durum yoktur, yalnızca planlama değişir.',
        'Bazı çocuklarda hipospadias tek başına değildir: inmemiş testis veya kasık fıtığı eşlik edebilir. Deliğin çok geride olduğu ve testislerin ele gelmediği durumlarda, cinsiyet gelişimiyle ilgili bir değerlendirme istenebilir. Bu istem bir korkutma değil, doğru tanıyı atlamamak içindir.',
        'Onarımın amacı sırasıyla şudur: idrarın ileriye, tek bir huzme hâlinde çıkması; penisin düz olması; idrar deliğinin uca yakın ve yeterli genişlikte olması; görünümün yaşıtlarına benzemesi. Görünüm listenin sonundadır çünkü işlev düzelmeden görünümün bir anlamı yoktur.'
      ],
      eligibility: {
        suitable: [
          'İdrar akımı dağılan, aşağı doğru giden veya ayakta idrar yapmayı zorlaştıran çocuklar',
          'Penis gövdesinde belirgin eğriliği (kordi) olan çocuklar',
          'İdrar deliği penis gövdesinin ortasında, kökünde veya skrotuma yakın açılan çocuklar',
          'Daha önce başka bir merkezde onarılmış ancak fistül veya darlık gelişmiş çocuklar',
          'Erişkin yaşa kadar onarılmamış, idrar yaparken veya cinsel işlevde sorun yaşayan hastalar'
        ],
        notSuitable: [
          'İdrar deliği uca çok yakın, eğriliği olmayan ve işlevsel şikâyeti bulunmayan çocuklar — bu durumda ameliyat önerilmeyebilir',
          'Aktif idrar yolu enfeksiyonu olan çocuklar: önce enfeksiyon tedavi edilir',
          'Penis boyutunun küçük olduğu seçilmiş olgularda ameliyat öncesi hormon desteği gerekebileceği için planlama ertelenebilir',
          'Genel anestezi açısından ek risk taşıyan, önce çocuk hekimi tarafından değerlendirilmesi gereken çocuklar'
        ]
      },
      technology: [
        'Ameliyat mikroskobu veya büyüteçli gözlük (loupe) ile büyütmeli cerrahi',
        'Çocuk cerrahisine uygun ince cerrahi aletler ve emilebilen ince dikiş materyali',
        'Sünnet derisinden hazırlanan damarlı (vaskülarize) doku örtüsü',
        'Gerekli olgularda ağız içi (bukkal) mukoza grefti',
        'Pediatrik anestezi ekibi ve ameliyat sonrası ağrı için kaudal blok imkânı',
        'Yumuşak, ince çaplı üretral sonda / damla (dripping) stent'
      ],
      surgeonExperience: {
        caseVolume: '',
        note: 'Hipospadias onarımı rekonstrüktif ürolojinin bir alanıdır ve sonucu en çok etkileyen etken, dokunun ilk ameliyatta nasıl kullanıldığıdır. Doç. Dr. Müslüm Ergün’ün üretra cerrahisi ve rekonstrüktif onarımlardaki deneyimi bu alandaki yaklaşımın temelini oluşturur. İlk onarım, her zaman en iyi şansın bulunduğu ameliyattır.'
      },
      timeline: [
        {
          when: 'Uzaktan',
          title: 'Ön değerlendirme',
          body: 'Çocuğun doğum bilgileri, varsa daha önce yapılmış ameliyatların notları, idrar yaparken çekilmiş bir video veya fotoğraf ve idrar tahlili incelenir. Daha önce sünnet yapılıp yapılmadığı mutlaka sorulur, çünkü bu planı doğrudan değiştirir.'
        },
        {
          when: '1. Gün',
          title: 'Muayene ve anestezi değerlendirmesi',
          body: 'Yüz yüze muayenede deliğin yeri, eğriliğin derecesi ve dokunun niteliği değerlendirilir. Kan tahlilleri ve idrar kültürü yapılır. Kültürde üreme varsa ameliyat ertelenir.'
        },
        {
          when: '2. Gün',
          title: 'Ameliyat',
          body: 'Genel anestezi altında eğrilik düzeltilir, yeni idrar kanalı oluşturulur ve üzeri damarlı bir doku katmanıyla örtülür. Bu örtü katmanı, sonradan fistül gelişme olasılığını azaltmak için konulur. İşlem sonunda ince bir sonda bırakılır.'
        },
        {
          when: '2.–3. Gün',
          title: 'Taburculuk',
          body: 'Çoğu çocuk aynı gün ya da ertesi gün evine gider. Pansumanın nasıl korunacağı, sondanın nasıl boşalacağı ve hangi durumda hemen başvurulması gerektiği yazılı olarak anlatılır.'
        },
        {
          when: '5.–10. Gün',
          title: 'Sonda alımı',
          body: 'Sonda burada alınır. Alındıktan sonra çocuğun ilk idrarı gözlenir; akımın tek huzme hâlinde ve ileriye doğru olduğu görülür. Bu yüzden dönüş uçuşu sonda alımının ertesi gününe planlanmaz.'
        },
        {
          when: '3.–6. hafta',
          title: 'Kontrol',
          body: 'Yara iyileşmesi ve idrar akımı değerlendirilir. Uzaktan takip için fotoğraf ve idrar akımı videosu istenebilir.'
        }
      ],
      risks: [
        'FİSTÜL (İDRAR KAÇAĞI): En sık görülen komplikasyondur. Yeni oluşturulan kanalın bir noktasından cilde küçük bir delik açılır ve idrarın bir kısmı oradan gelir. Küçük fistüller bazen kendiliğinden kapanır; kapanmazsa genellikle birkaç ay beklenip ikinci bir küçük ameliyatla onarılır. Bu, ilk ameliyatın başarısız olduğu anlamına gelmez',
        'DARLIK: Yeni idrar deliğinde veya kanalın bir bölümünde daralma gelişebilir. İdrar akımının incelmesi, zorlanma veya damlama şeklinde fark edilir ve ek bir işlem gerektirebilir',
        'Yeni kanalın bir bölümünün açılması (dehisens) — özellikle proksimal ve ileri olgularda',
        'Yara yerinde enfeksiyon ve geçici şişlik, morarma',
        'Eğriliğin tam düzelmemesi veya ileride yeniden belirginleşmesi; ergenlikte yeniden değerlendirme gerekebilir',
        'İdrar kanalında balonlaşma (divertikül) ve buna bağlı idrar sonrası damlama',
        'Kozmetik sonucun aileyi veya ileride çocuğu tatmin etmemesi',
        'EK AMELİYAT İHTİMALİ: Özellikle proksimal olgularda ikinci bir girişim gerekebilir ve bu önceden konuşulur. Hiçbir cerrah tek ameliyatta kesin sonuç garanti edemez'
      ],
      alternatives: [
        'Ameliyatsız izlem — delik uca çok yakınsa, eğrilik yoksa ve idrar akımı normalse geçerli bir seçenektir',
        'Tek seanslı onarım — distal ve orta hat olgularda yaygın yaklaşımdır',
        'İki seanslı onarım — ileri proksimal olgularda veya doku yetersizse; önce eğrilik düzeltilip doku hazırlanır, ikinci seansta kanal oluşturulur',
        'Greft kullanılan onarım — sünnet derisi daha önce alınmışsa ağız içi mukoza grefti gündeme gelir',
        'Ameliyat öncesi hormon desteği — penis boyutu küçük olan seçilmiş olgularda dokuyu büyütmek için',
        'Daha önce ameliyat edilmiş ve sorun yaşanmış olgularda redo (tekrar) onarım'
      ],
      comparison: {
        title: 'Distal ve proksimal onarım: beklentiler aynı değildir',
        columns: ['Ölçüt', 'Distal (uca yakın)', 'Proksimal (kökte)'],
        rows: [
          { label: 'Ameliyat süresi', values: ['Daha kısa', 'Daha uzun'] },
          { label: 'Seans sayısı', values: ['Genellikle tek seans', 'Sıklıkla iki seans planlanır'] },
          { label: 'Eğriliğin düzeltilmesi', values: ['Çoğunlukla sınırlı bir işlem yeterlidir', 'Daha kapsamlı düzeltme gerekir'] },
          { label: 'Ek doku ihtiyacı', values: ['Genellikle yok', 'Greft veya ek örtü gerekebilir'] },
          { label: 'Fistül olasılığı', values: ['Daha düşük', 'Daha yüksek'] },
          { label: 'Sonda süresi', values: ['Daha kısa', 'Daha uzun'] },
          { label: 'Türkiye’de kalış', values: ['Daha kısa', 'Daha uzun planlanır'] }
        ],
        note: 'Bu tablo bir sıralama değil, beklenti ayarıdır. Proksimal bir olguda ikinci ameliyat ihtimalinin yüksek olması bir başarısızlık değil, işin doğasıdır. Yurt dışından geliyorsanız bu ihtimali seyahat planınıza baştan katın.'
      },
      recovery: [
        { period: 'İlk 48 saat', body: 'Şişlik ve morarma beklenir. Ağrı genellikle basit ağrı kesicilerle kontrol edilir. Bol sıvı verilir. Ateş, pansumanın ıslanıp kurumaması veya sondadan idrar gelmemesi durumunda derhal başvurulmalıdır.' },
        { period: '1. hafta', body: 'Çocuk evde dinlenir. Bez kullanan bebeklerde bezin pansumanı sıkıştırmaması önemlidir. Bisiklet, oyuncak at, kucakta bacak ayırarak taşıma gibi bölgeye baskı yapan hareketlerden kaçınılır.' },
        { period: 'Sonda alındıktan sonra', body: 'İlk idrarlar yanmalı olabilir. Akımın tek huzme hâlinde ve ileriye doğru olması beklenir. Dağılma veya damlama varsa hekime bildirilir.' },
        { period: '2.–4. hafta', body: 'Kreş veya okula dönüş genellikle bu dönemde olur. Aktif oyun ve spor biraz daha ertelenir. Yara izleri bu dönemde kızarık görünür; aylar içinde soluklaşır.' },
        { period: '3.–6. ay', body: 'Görünüm oturur. Bu süre dolmadan kozmetik sonuç hakkında kesin yargıya varılmaz.' },
        { period: 'Ergenlik', body: 'Penis büyüdükçe eğrilik veya darlık yeniden değerlendirilir. Çocukken onarılmış bir hastanın ergenlikte bir kez daha kontrol edilmesi olağandır ve kötü bir işaret değildir.' }
      ],
      price: {
        from: 0,
        to: 0,
        currency: 'EUR',
        disclaimer:
          'Tutar; hipospadiasın tipine, tek mi iki seans mı planlandığına, greft gerekip gerekmediğine ve hastanede kalış süresine göre değişir. Kalem kalem ayrılmış yazılı teklif, çocuğunuzun belgeleri incelendikten sonra verilir.'
      },
      packageIncludes: [
        'Muayene ve çocuk ürolojisi değerlendirmesi',
        'Kan ve idrar tetkikleri, idrar kültürü',
        'Pediatrik anestezi değerlendirmesi',
        'Ameliyathane ve anestezi',
        'Cerrahi sarf malzemeleri ve dikiş materyali',
        'Hastane yatışı (çocuk + 1 refakatçi)',
        'Pansuman ve sonda alımı',
        'Havalimanı–hastane–otel transferleri',
        'Konaklama (çocuk + refakatçi)',
        'Tıbbi tercüman ve hasta koordinatörü',
        'Dönüşten sonra uzaktan takip'
      ],
      faqs: [
        { q: 'Çocuğumun hipospadiası var, sünnet ettirebilir miyim?', a: 'Onarımdan önce HAYIR. Sünnet derisi onarımda kullanılabilecek en uygun dokudur; alınırsa cerrah bu imkânı kaybeder ve gerekirse ağız içinden greft almak gerekebilir. Sünnet genellikle onarım sırasında veya sonrasında planlanır.' },
        { q: 'Hangi yaşta ameliyat olmalı?', a: 'Kılavuzlarda çoğunlukla 6–18 ay arası öne çıkar; bu dönemde çocuk olayı hatırlamaz ve iyileşme hızlıdır. Daha büyük çocuklarda ve erişkinlerde de onarım yapılabilir; "yaş geçti" diye bir durum yoktur, yalnızca plan değişir.' },
        { q: 'Tek ameliyatla bitecek mi?', a: 'Distal olguların çoğunda tek seans yeterlidir. Proksimal olgularda iki seans planlanması olağandır. Hiçbir cerrah tek ameliyatta kesin sonuç garanti edemez; bunu söyleyen bir yere değil, ikinci ameliyat ihtimalini baştan konuşan bir yere gidin.' },
        { q: 'Fistül olursa ne yapılır?', a: 'Küçük fistüller bazen kendiliğinden kapanır. Kapanmazsa dokunun yumuşaması için genellikle birkaç ay beklenir ve küçük bir ameliyatla onarılır. Hemen tekrar girişmek, iltihaplı ve ödemli dokuda sonucu kötüleştirebilir.' },
        { q: 'Çocuğum ameliyattan sonra ayakta idrar yapabilecek mi?', a: 'Onarımın birinci amacı budur: idrarın ileriye, tek huzme hâlinde çıkması. Bunun gerçekleşip gerçekleşmediği sonda alındıktan sonra gözlenerek değerlendirilir.' },
        { q: 'İleride cinsel işlevi etkilenir mi?', a: 'Onarımın bir hedefi de penisin düz olmasıdır; bu doğrudan ileriki cinsel işlevle ilgilidir. Ergenlikte penis büyüdükçe eğriliğin yeniden değerlendirilmesi gerekebilir. Bunu şimdiden bilmek, sonradan sürpriz yaşamaktan iyidir.' },
        { q: 'Sonda rahatsız eder mi?', a: 'Çocuklar sondaya beklenenden kolay uyum sağlar. Sonda genellikle beze doğru serbest akacak şekilde bırakılır; torba takmak çoğu olguda gerekmez. Ağrı ve mesane spazmı için ilaç verilir.' },
        { q: 'Daha önce başka bir merkezde ameliyat oldu, tekrar yapılabilir mi?', a: 'Evet. Tekrar (redo) onarımlar daha zordur çünkü doku nedbelidir ve sünnet derisi genellikle kullanılmıştır; bu durumda ağız içi mukoza grefti gündeme gelir. Önceki ameliyat notlarını ve varsa fotoğrafları mutlaka getirin.' },
        { q: 'Türkiye’de ne kadar kalmalıyız?', a: 'Sonda alımı ve ilk kontrol burada yapıldığı için genellikle 10–14 gün planlanır. Proksimal olgularda bu süre uzayabilir. Dönüş uçuşunu sonda alımının ertesi gününe planlamayın.' },
        { q: 'Ameliyat izi kalır mı?', a: 'Her cerrahi kesi iz bırakır. Hedef, izin penis cildinin doğal çizgileriyle örtüşmesi ve zamanla soluklaşmasıdır. İlk aylarda kızarık görünmesi olağandır; kesin değerlendirme için 3–6 ay beklenir.' },
        { q: 'Anestezi çocuğuma zarar verir mi?', a: 'Pediatrik anestezi, çocuğa özel ilaç dozları ve izlemle yapılır. Ameliyat öncesi anestezi değerlendirmesi bu nedenle ayrı bir basamaktır. Çocuğunuzun geçirdiği hastalıkları, alerjilerini ve kullandığı ilaçları eksiksiz bildirin.' },
        { q: 'Hangi belgeleri göndermeliyiz?', a: 'Varsa önceki ameliyat notları ve epikrizler, güncel idrar tahlili, çocuğun idrar yaparken çekilmiş kısa bir videosu ve bölgenin fotoğrafı. Bu belgelerle tipin ne olduğu ve kaç seans gerekebileceği siz yola çıkmadan değerlendirilebilir.' }
      ],
      sources: [
        {
          label: 'EAU/ESPU Guidelines on Paediatric Urology — Avrupa Üroloji Derneği',
          url: 'https://uroweb.org/guidelines/paediatric-urology'
        }
      ]
    },
    en: {
      title: 'Hypospadias Repair',
      summary:
        'Surgical repair of a congenital condition in which the urinary opening lies on the underside of the penis rather than at the tip. Function comes first — a straight stream and a straight penis — and appearance after that.',
      metaTitle: 'Hypospadias Repair: Age at Surgery, Techniques and Recovery',
      metaDescription:
        'Hypospadias repair in children: when it is done, why circumcision must not be performed beforehand, single-stage and two-stage repair, the risk of fistula and stricture, recovery and honest expectations.',
      quickFacts: {
        duration: '1–3 hours depending on the type',
        anesthesia: 'General anaesthesia, often with a caudal block',
        hospitalStay: 'Day case – 1 night',
        stayInTurkey: '10–14 days',
        catheter: '5–10 days',
        returnToWork: 'Back to nursery or school in 2–3 weeks',
        flightClearance: 'After catheter removal and review'
      },
      definition: [
        'Hypospadias is a congenital condition in which the urinary channel (the urethra) does not reach the tip of the penis but opens somewhere along its underside. It is common in boys, and it is not a disease or the result of anything done wrong. The question parents ask most often — "was this something we caused?" — has a clear answer: no.',
        'Three findings are assessed together: where the opening lies, whether the penis curves downwards (chordee), and the deficiency of foreskin on the upper side. These are not present to the same degree in every child. When the opening is near the tip (distal) the picture is usually milder; when it lies at the base of the penis or in the scrotum (proximal) a more extensive repair is needed.',
        'The decision to operate is not based on appearance alone. The real questions are: can the child pass urine forwards while standing, does the stream spray or point downwards, and is the penis visibly curved on voiding or later on erection. In some very mild cases — opening close to the tip, no curvature — surgery may not be needed, and that is a legitimate conclusion which is stated plainly to families.',
        'AN IMPORTANT WARNING: a boy with hypospadias MUST NOT BE CIRCUMCISED BEFORE THE REPAIR. The foreskin is the most valuable tissue available for reconstruction; once it has been removed the surgeon has lost the best material and the repair becomes harder. If the position of your child’s urinary opening looks unusual, a urologist should see him before any circumcision.',
        'The preferred window for surgery is usually within the first year, and guidelines most often point to 6–18 months. That period is chosen because the child will not remember the event and healing is rapid. If the child presents later, repair is still possible; there is no such thing as "too late" — only a different plan.',
        'In some boys hypospadias does not occur alone: an undescended testis or an inguinal hernia may accompany it. Where the opening is very proximal and the testes cannot be felt, an assessment of sex development may be requested. That request is not meant to alarm; it is there so that the right diagnosis is not missed.',
        'The aims of repair, in order, are: urine leaving forwards as a single stream; a straight penis; an opening near the tip and of adequate calibre; and an appearance similar to that of other boys. Appearance comes last on that list, because appearance means little until function is right.'
      ],
      eligibility: {
        suitable: [
          'Boys whose stream sprays, points downwards, or makes standing to urinate difficult',
          'Boys with visible curvature of the penile shaft (chordee)',
          'Boys whose opening lies mid-shaft, at the base, or near the scrotum',
          'Boys already repaired elsewhere who have developed a fistula or a stricture',
          'Adults never repaired in childhood who have difficulty voiding or with sexual function'
        ],
        notSuitable: [
          'Boys whose opening is very close to the tip, with no curvature and no functional complaint — surgery may not be advised',
          'Boys with an active urinary infection: the infection is treated first',
          'Selected boys with a small penis who may need hormonal preparation before surgery, so planning is deferred',
          'Boys with additional anaesthetic risk who need paediatric assessment first'
        ]
      },
      technology: [
        'Magnified surgery using an operating microscope or loupes',
        'Fine paediatric instruments and fine absorbable suture material',
        'A vascularised tissue cover prepared from the foreskin',
        'Buccal mucosa graft where required',
        'Paediatric anaesthetic team and caudal block for postoperative pain',
        'Soft, fine-calibre urethral catheter or dripping stent'
      ],
      surgeonExperience: {
        caseVolume: '',
        note: 'Hypospadias repair belongs to reconstructive urology, and what most influences the outcome is how the tissue is used at the first operation. Assoc. Prof. Dr. Müslüm Ergün’s experience in urethral surgery and reconstructive repair underpins the approach taken here. The first repair is always the operation with the best chance.'
      },
      timeline: [
        { when: 'Remotely', title: 'Initial assessment', body: 'Birth details, notes of any previous surgery, a short video or photograph of the child voiding, and a urinalysis are reviewed. We always ask whether circumcision has already been performed, because that changes the plan directly.' },
        { when: 'Day 1', title: 'Examination and anaesthetic assessment', body: 'Examination establishes the position of the opening, the degree of curvature and the quality of the tissue. Blood tests and a urine culture are taken. If the culture grows an organism, surgery is postponed.' },
        { when: 'Day 2', title: 'Surgery', body: 'Under general anaesthesia the curvature is corrected, a new urinary channel is formed and covered with a vascularised layer of tissue. That covering layer is placed specifically to reduce the chance of a later fistula. A fine catheter is left at the end of the procedure.' },
        { when: 'Days 2–3', title: 'Discharge', body: 'Most children go home the same or the following day. How to protect the dressing, how the catheter drains, and when to seek help immediately are all explained in writing.' },
        { when: 'Days 5–10', title: 'Catheter removal', body: 'The catheter is removed here. The first void afterwards is observed to confirm a single forward stream. For that reason the return flight is not planned for the day after removal.' },
        { when: 'Weeks 3–6', title: 'Review', body: 'Healing and the urinary stream are assessed. Photographs and a video of the stream may be requested for remote follow-up.' }
      ],
      risks: [
        'FISTULA (URINE LEAK): the most common complication. A small opening forms between the new channel and the skin and some urine passes through it. Small fistulas sometimes close on their own; if not, repair is usually carried out after a few months through a second small operation. This does not mean the first operation failed',
        'STRICTURE: narrowing can develop at the new opening or along the channel. It shows as a thinner stream, straining or dribbling and may require a further procedure',
        'Breakdown of part of the new channel (dehiscence) — particularly in proximal and complex cases',
        'Wound infection, with temporary swelling and bruising',
        'Incomplete correction of curvature, or recurrence as the penis grows; reassessment at puberty may be needed',
        'Ballooning of the channel (diverticulum) with post-void dribbling',
        'A cosmetic result that does not satisfy the family, or later the child',
        'THE POSSIBILITY OF FURTHER SURGERY: particularly in proximal cases a second procedure may be needed, and this is discussed in advance. No surgeon can guarantee a definitive result from a single operation'
      ],
      alternatives: [
        'Observation without surgery — a legitimate option where the opening is close to the tip, there is no curvature and the stream is normal',
        'Single-stage repair — the common approach in distal and mid-shaft cases',
        'Two-stage repair — in advanced proximal cases or where tissue is insufficient: curvature is corrected and tissue prepared first, the channel formed at the second stage',
        'Graft repair — buccal mucosa is used where the foreskin has already been removed',
        'Hormonal preparation before surgery — in selected boys with a small penis, to improve tissue',
        'Redo repair in boys operated elsewhere with an unsatisfactory result'
      ],
      comparison: {
        title: 'Distal and proximal repair: the expectations are not the same',
        columns: ['Criterion', 'Distal (near the tip)', 'Proximal (at the base)'],
        rows: [
          { label: 'Operating time', values: ['Shorter', 'Longer'] },
          { label: 'Number of stages', values: ['Usually single stage', 'Two stages are often planned'] },
          { label: 'Correction of curvature', values: ['A limited manoeuvre usually suffices', 'More extensive correction needed'] },
          { label: 'Need for additional tissue', values: ['Usually none', 'Graft or extra cover may be needed'] },
          { label: 'Likelihood of fistula', values: ['Lower', 'Higher'] },
          { label: 'Duration of catheter', values: ['Shorter', 'Longer'] },
          { label: 'Stay in Türkiye', values: ['Shorter', 'Planned longer'] }
        ],
        note: 'This table is not a ranking; it is an adjustment of expectations. A higher chance of a second operation in a proximal case is not a failure but the nature of the problem. If you are travelling from abroad, build that possibility into your plans from the outset.'
      },
      recovery: [
        { period: 'First 48 hours', body: 'Swelling and bruising are expected. Pain is usually controlled with simple analgesics. Plenty of fluids are given. Fever, a dressing that becomes soaked, or no urine draining from the catheter all require immediate contact.' },
        { period: 'Week 1', body: 'The child rests at home. In babies still in nappies, the nappy must not press on the dressing. Bicycles, ride-on toys and carrying the child astride the hip are avoided.' },
        { period: 'After catheter removal', body: 'The first few voids may sting. The stream should be a single jet directed forwards. Spraying or dribbling should be reported.' },
        { period: 'Weeks 2–4', body: 'Return to nursery or school usually falls in this period. Active play and sport wait a little longer. Scars look red at this stage and fade over months.' },
        { period: 'Months 3–6', body: 'The appearance settles. No firm judgement about the cosmetic result is made before this.' },
        { period: 'Puberty', body: 'As the penis grows, curvature and calibre are reassessed. A review at puberty for a boy repaired in childhood is routine, not a bad sign.' }
      ],
      price: {
        from: 0,
        to: 0,
        currency: 'EUR',
        disclaimer:
          'The amount depends on the type of hypospadias, whether one or two stages are planned, whether a graft is needed and the length of hospital stay. An itemised written quotation is given once your child’s documents have been reviewed.'
      },
      packageIncludes: [
        'Examination and paediatric urology assessment',
        'Blood and urine tests, urine culture',
        'Paediatric anaesthetic assessment',
        'Operating theatre and anaesthesia',
        'Surgical consumables and suture material',
        'Hospital stay (child plus one parent)',
        'Dressings and catheter removal',
        'Airport–hospital–hotel transfers',
        'Accommodation (child and accompanying parent)',
        'Medical interpreter and patient coordinator',
        'Remote follow-up after you return home'
      ],
      faqs: [
        { q: 'My son has hypospadias — can he be circumcised?', a: 'Not before the repair. The foreskin is the most suitable tissue for reconstruction; once removed, that option is lost and a graft from inside the mouth may become necessary. Circumcision is usually arranged during or after the repair.' },
        { q: 'At what age should surgery be done?', a: 'Guidelines most often point to 6–18 months, because the child will not remember it and healing is rapid. Repair is also possible in older boys and in adults; there is no "too late", only a different plan.' },
        { q: 'Will one operation be enough?', a: 'In most distal cases a single stage is sufficient. In proximal cases two stages are commonly planned. No surgeon can guarantee a definitive result in one operation; choose a centre that discusses the possibility of a second one with you beforehand.' },
        { q: 'What happens if a fistula develops?', a: 'Small fistulas sometimes close spontaneously. If not, a few months are usually allowed for the tissue to soften and a small operation closes it. Operating immediately, on inflamed and swollen tissue, tends to make the result worse.' },
        { q: 'Will he be able to urinate standing up afterwards?', a: 'That is the first aim of the repair: urine leaving forwards as a single stream. Whether it has been achieved is assessed by observing him after the catheter is removed.' },
        { q: 'Will his sexual function be affected later?', a: 'One aim of the repair is a straight penis, which bears directly on later sexual function. As the penis grows at puberty, curvature may need reassessing. Knowing this now is better than being surprised by it later.' },
        { q: 'Is the catheter uncomfortable?', a: 'Children tolerate it better than parents expect. The catheter is usually left to drain freely into the nappy; a bag is not needed in most cases. Medication is given for pain and bladder spasm.' },
        { q: 'He was operated on elsewhere — can it be done again?', a: 'Yes. Redo repairs are harder because the tissue is scarred and the foreskin has usually been used; buccal mucosa grafting then comes into play. Please bring the previous operation notes and any photographs.' },
        { q: 'How long should we stay in Türkiye?', a: 'Because catheter removal and the first review are done here, 10–14 days is usually planned. Proximal cases may take longer. Do not plan the return flight for the day after catheter removal.' },
        { q: 'Will there be a scar?', a: 'Every surgical incision leaves a scar. The aim is for it to follow the natural lines of the penile skin and to fade. Redness in the first months is normal; firm assessment waits 3–6 months.' },
        { q: 'Is anaesthesia harmful to my child?', a: 'Paediatric anaesthesia uses child-specific doses and monitoring, which is why the pre-operative anaesthetic assessment is a separate step. Tell us in full about past illnesses, allergies and current medication.' },
        { q: 'What documents should we send?', a: 'Any previous operation notes and discharge summaries, a current urinalysis, a short video of your child voiding, and a photograph of the area. With these, the type and the likely number of stages can be assessed before you travel.' }
      ],
      sources: [
        {
          label: 'EAU/ESPU Guidelines on Paediatric Urology — European Association of Urology',
          url: 'https://uroweb.org/guidelines/paediatric-urology'
        }
      ]
    },
    ar: {
      title: 'إصلاح الإحليل التحتي (الهيبوسبادياس)',
      summary:
        'إصلاح جراحي لحالة خِلقية تكون فيها فتحة البول على الوجه السفلي للقضيب لا في طرفه. الوظيفة أولًا — تيار مستقيم وقضيب مستقيم — ثم المظهر بعد ذلك.',
      metaTitle: 'إصلاح الإحليل التحتي: سن العملية والتقنيات والتعافي',
      metaDescription:
        'إصلاح الإحليل التحتي عند الأطفال: متى يُجرى، ولماذا يجب عدم الختان قبله، والإصلاح بجلسة واحدة أو بجلستين، وخطر الناسور والتضيّق، والتعافي وتوقعات صادقة.',
      quickFacts: {
        duration: 'من ساعة إلى ثلاث ساعات بحسب النوع',
        anesthesia: 'تخدير عام، وغالبًا مع حصار ذنبي',
        hospitalStay: 'من دون مبيت – ليلة واحدة',
        stayInTurkey: '10 إلى 14 يومًا',
        catheter: '5 إلى 10 أيام',
        returnToWork: 'العودة إلى الحضانة أو المدرسة بعد أسبوعين إلى ثلاثة',
        flightClearance: 'بعد نزع القسطرة والمراجعة'
      },
      definition: [
        'الإحليل التحتي حالة خِلقية لا تصل فيها قناة البول (الإحليل) إلى طرف القضيب، بل تنفتح في موضع ما على وجهه السفلي. وهي شائعة عند الذكور، وليست مرضًا ولا نتيجة خطأ ارتُكب. والسؤال الذي يطرحه الأهل أكثر من غيره — «هل نحن السبب؟» — جوابه واضح: لا.',
        'تُقيَّم ثلاثة أمور معًا: موضع الفتحة، ووجود انحناء للقضيب إلى الأسفل، ونقص القلفة في الوجه العلوي. وهي ليست بالدرجة نفسها عند كل طفل. فإن كانت الفتحة قريبة من الطرف (بعيدة) كانت الصورة أخف عادة؛ وإن انفتحت عند جذر القضيب أو في الصفن (قريبة) لزم إصلاح أوسع.',
        'ولا يُتخذ قرار الجراحة بالاستناد إلى المظهر وحده. والأسئلة الحقيقية هي: هل يستطيع الطفل التبول واقفًا وإلى الأمام، وهل يتبعثر التيار أو يتجه إلى الأسفل، وهل القضيب منحنٍ بوضوح عند التبول أو لاحقًا عند الانتصاب. وفي بعض الحالات الخفيفة جدًا — فتحة قريبة من الطرف من دون انحناء — قد لا تلزم الجراحة؛ وهذه نتيجة مشروعة تُقال للأهل بوضوح.',
        'تنبيه مهم: الطفل المصاب بالإحليل التحتي يجب ألّا يُختَن قبل الإصلاح. فالقلفة أثمن نسيج متاح لإعادة البناء؛ وإذا أُزيلت فقد الجرّاح أفضل مادة لديه وصار الإصلاح أصعب. فإن بدا موضع فتحة البول عند طفلك غير معتاد فينبغي أن يفحصه طبيب مسالك بولية قبل أي ختان.',
        'والمرحلة المفضّلة تقع عادة في السنة الأولى؛ وتشير الإرشادات غالبًا إلى ما بين الشهر السادس والشهر الثامن عشر. ويُختار هذا المدى لأن الطفل لن يتذكر الحدث ولأن الشفاء سريع. وإن جاء الطفل لاحقًا بقي الإصلاح ممكنًا؛ فليس هناك «فات الأوان»، بل خطة مختلفة فحسب.',
        'وعند بعض الأطفال لا تكون الحالة وحدها: فقد ترافقها خصية غير نازلة أو فتق إربي. وحين تكون الفتحة قريبة جدًا من الجذر ولا تُجَس الخصيتان قد يُطلَب تقييم لتطور الجنس. وهذا الطلب ليس للتخويف، بل لئلا يفوت التشخيص الصحيح.',
        'وأهداف الإصلاح بالترتيب هي: خروج البول إلى الأمام بتيار واحد؛ وقضيب مستقيم؛ وفتحة قريبة من الطرف وبسعة كافية؛ ومظهر مشابه لأقرانه. ويأتي المظهر أخيرًا لأنه قليل المعنى ما لم تستقم الوظيفة.'
      ],
      eligibility: {
        suitable: [
          'الأطفال الذين يتبعثر تيارهم أو يتجه إلى الأسفل أو يصعّب التبول واقفًا',
          'الأطفال الذين لديهم انحناء واضح في جسم القضيب',
          'الأطفال الذين تنفتح فتحتهم في منتصف الجسم أو عند الجذر أو قرب الصفن',
          'الأطفال الذين سبق أن أُجريت لهم عملية في مركز آخر وتكوّن لديهم ناسور أو تضيّق',
          'البالغون الذين لم تُجرَ لهم العملية في الطفولة ويعانون في التبول أو في الوظيفة الجنسية'
        ],
        notSuitable: [
          'الأطفال الذين فتحتهم قريبة جدًا من الطرف من دون انحناء ومن دون شكوى وظيفية — وقد لا تُقترح الجراحة حينئذ',
          'الأطفال المصابون بالتهاب بولي نشط: يُعالَج الالتهاب أولًا',
          'بعض الأطفال ذوي القضيب الصغير الذين قد يحتاجون تحضيرًا هرمونيًا قبل العملية، فيُؤجَّل التخطيط',
          'الأطفال ذوو خطورة تخديرية إضافية ممن ينبغي أن يقيّمهم طبيب الأطفال أولًا'
        ]
      },
      technology: [
        'جراحة بالتكبير عبر المجهر الجراحي أو النظارات المكبّرة',
        'أدوات دقيقة خاصة بالأطفال وخيوط قابلة للامتصاص رفيعة',
        'غطاء نسيجي مُروّى دمويًا يُحضَّر من القلفة',
        'طُعم من مخاطية الفم عند الحاجة',
        'فريق تخدير أطفال وحصار ذنبي لتسكين ما بعد العملية',
        'قسطرة إحليلية طرية رفيعة القطر أو دعامة تنقيط'
      ],
      surgeonExperience: {
        caseVolume: '',
        note: 'إصلاح الإحليل التحتي من مجالات المسالك البولية الترميمية، وأكثر ما يؤثر في النتيجة هو كيفية استعمال النسيج في العملية الأولى. وخبرة الأستاذ المشارك د. مسلم إرغن في جراحة الإحليل والإصلاحات الترميمية هي أساس المنهج المتّبع هنا. والعملية الأولى هي دائمًا العملية التي تتيح أفضل فرصة.'
      },
      timeline: [
        { when: 'عن بُعد', title: 'التقييم الأولي', body: 'تُراجَع معطيات الولادة، وتقارير أي عمليات سابقة، ومقطع مصوّر قصير أو صورة أثناء التبول، وتحليل البول. ونسأل دائمًا إن كان الختان قد أُجري، لأن ذلك يغيّر الخطة مباشرة.' },
        { when: 'اليوم الأول', title: 'الفحص وتقييم التخدير', body: 'يحدد الفحص موضع الفتحة ودرجة الانحناء ونوعية النسيج. وتُجرى تحاليل الدم وزرع البول. وإن نما في الزرع جرثوم أُجّلت العملية.' },
        { when: 'اليوم الثاني', title: 'العملية', body: 'تحت التخدير العام يُصحَّح الانحناء وتُشكَّل قناة بول جديدة تُغطّى بطبقة نسيج مُروّاة دمويًا. وتُوضَع هذه الطبقة تحديدًا لتقليل احتمال الناسور لاحقًا. وتُترك في النهاية قسطرة رفيعة.' },
        { when: 'اليوم الثاني إلى الثالث', title: 'الخروج', body: 'يعود معظم الأطفال إلى البيت في اليوم نفسه أو في اليوم التالي. ويُشرَح كتابةً كيف تُحمى الضمادة وكيف تصرّف القسطرة ومتى يجب التواصل فورًا.' },
        { when: 'اليوم الخامس إلى العاشر', title: 'نزع القسطرة', body: 'تُنزَع القسطرة هنا. ويُراقَب أول تبول بعدها للتأكد من تيار واحد متجه إلى الأمام. ولهذا لا تُحجَز رحلة العودة في اليوم التالي للنزع.' },
        { when: 'الأسبوع الثالث إلى السادس', title: 'المراجعة', body: 'يُقيَّم الالتئام وتيار البول. وقد تُطلَب صور ومقطع مصوّر للتيار من أجل المتابعة عن بُعد.' }
      ],
      risks: [
        'الناسور (تسرّب البول): أكثر المضاعفات شيوعًا. تتكوّن فتحة صغيرة بين القناة الجديدة والجلد يخرج منها بعض البول. وتُغلَق النواسير الصغيرة أحيانًا من تلقاء نفسها؛ وإن لم تُغلَق فالإصلاح يتم عادة بعد بضعة أشهر بعملية صغيرة. وهذا لا يعني أن العملية الأولى فشلت',
        'التضيّق: قد ينشأ ضيق عند الفتحة الجديدة أو في مجرى القناة. ويظهر بتيار رفيع أو بالحزق أو بالتنقيط، وقد يستدعي تدخلًا إضافيًا',
        'انفتاح جزء من القناة الجديدة — خصوصًا في الأشكال القريبة والمعقدة',
        'التهاب الجرح مع تورّم وكدمات مؤقتة',
        'تصحيح غير كامل للانحناء أو عودته مع النمو؛ وقد تلزم إعادة تقييم عند البلوغ',
        'توسّع القناة (ردب) مع تنقيط بعد التبول',
        'نتيجة تجميلية لا تُرضي الأسرة أو لا تُرضي الطفل لاحقًا',
        'احتمال عملية أخرى: في الأشكال القريبة خصوصًا قد يلزم تدخل ثانٍ، ويُناقَش ذلك مسبقًا. ولا يستطيع أي جرّاح ضمان نتيجة نهائية من عملية واحدة'
      ],
      alternatives: [
        'المراقبة من دون جراحة — خيار مشروع حين تكون الفتحة قريبة من الطرف ولا انحناء والتيار طبيعي',
        'إصلاح بجلسة واحدة — المنهج المعتاد في الأشكال البعيدة ومتوسطة الجسم',
        'إصلاح بجلستين — في الأشكال القريبة الواسعة أو عند نقص النسيج: يُصحَّح الانحناء ويُهيَّأ النسيج أولًا، ثم تُشكَّل القناة في الجلسة الثانية',
        'إصلاح بالطُّعم — مخاطية الفم حين تكون القلفة قد أُزيلت سابقًا',
        'تحضير هرموني قبل العملية — عند بعض الأطفال ذوي القضيب الصغير لتحسين النسيج',
        'إعادة الإصلاح عند الأطفال الذين أُجريت لهم العملية في مكان آخر بنتيجة غير مُرضية'
      ],
      comparison: {
        title: 'الشكل البعيد والشكل القريب: التوقعات ليست واحدة',
        columns: ['المعيار', 'بعيد (قرب الطرف)', 'قريب (عند الجذر)'],
        rows: [
          { label: 'مدة العملية', values: ['أقصر', 'أطول'] },
          { label: 'عدد الجلسات', values: ['جلسة واحدة غالبًا', 'تُخطَّط جلستان في كثير من الأحيان'] },
          { label: 'تصحيح الانحناء', values: ['يكفي عادة إجراء محدود', 'يلزم تصحيح أوسع'] },
          { label: 'الحاجة إلى نسيج إضافي', values: ['لا حاجة عادة', 'قد يلزم طُعم أو غطاء إضافي'] },
          { label: 'احتمال الناسور', values: ['أقل', 'أعلى'] },
          { label: 'مدة القسطرة', values: ['أقصر', 'أطول'] },
          { label: 'الإقامة في تركيا', values: ['أقصر', 'تُخطَّط أطول'] }
        ],
        note: 'هذا الجدول ليس ترتيبًا بل ضبطًا للتوقعات. وارتفاع احتمال عملية ثانية في الشكل القريب ليس فشلًا، بل هو طبيعة المشكلة. وإن كنت قادمًا من الخارج فاحسب هذا الاحتمال في خطتك منذ البداية.'
      },
      recovery: [
        { period: 'أول 48 ساعة', body: 'يُتوقَّع تورّم وكدمات. وتُضبَط الألم عادة بمسكنات بسيطة. ويُعطى الطفل سوائل وافرة. أما الحمى أو تبلّل الضمادة أو انقطاع تصريف القسطرة فتستدعي تواصلًا فوريًا.' },
        { period: 'الأسبوع الأول', body: 'يرتاح الطفل في البيت. وعند الرضّع يجب ألّا تضغط الحفاضة على الضمادة. ويُتجنَّب ركوب الدراجة والألعاب التي تُركَب والحمل على الورك بتفريج الساقين.' },
        { period: 'بعد نزع القسطرة', body: 'قد تكون أولى مرات التبول حارقة. ويُنتظر تيار واحد متجه إلى الأمام. ويجب الإبلاغ عن أي تبعثر أو تنقيط.' },
        { period: 'الأسبوع الثاني إلى الرابع', body: 'تقع العودة إلى الحضانة أو المدرسة عادة في هذه المدة. أما اللعب النشط والرياضة فينتظران أكثر قليلًا. وتبدو الندبات حمراء في هذه المرحلة ثم تبهت خلال أشهر.' },
        { period: 'الشهر الثالث إلى السادس', body: 'يستقر المظهر. ولا يُحكَم حكمًا نهائيًا على النتيجة التجميلية قبل ذلك.' },
        { period: 'البلوغ', body: 'مع النمو يُعاد تقييم الانحناء والسعة. ومراجعة عند البلوغ لطفل أُجريت له العملية في الصغر أمر معتاد وليس إشارة سيئة.' }
      ],
      price: {
        from: 0,
        to: 0,
        currency: 'EUR',
        disclaimer:
          'يتوقف المبلغ على نوع الإحليل التحتي، وعلى التخطيط لجلسة واحدة أو جلستين، وعلى الحاجة إلى طُعم، وعلى مدة الإقامة في المستشفى. ويُقدَّم عرض مكتوب مفصّل بعد مراجعة وثائق طفلك.'
      },
      packageIncludes: [
        'الفحص والتقييم في مسالك الأطفال',
        'تحاليل الدم والبول وزرع البول',
        'تقييم تخدير الأطفال',
        'غرفة العمليات والتخدير',
        'المستلزمات الجراحية وخيوط الخياطة',
        'الإقامة في المستشفى (الطفل وأحد الوالدين)',
        'الضمادات ونزع القسطرة',
        'التنقلات بين المطار والمستشفى والفندق',
        'الإقامة (الطفل والمرافق)',
        'مترجم طبي ومنسّق للمرضى',
        'متابعة عن بُعد بعد العودة'
      ],
      faqs: [
        { q: 'ابني مصاب بالإحليل التحتي، هل أختنه؟', a: 'ليس قبل الإصلاح. فالقلفة أنسب نسيج لإعادة البناء؛ وبإزالتها يضيع هذا الخيار وقد يلزم طُعم من مخاطية الفم. ويُخطَّط الختان عادة أثناء الإصلاح أو بعده.' },
        { q: 'في أي سن تُجرى العملية؟', a: 'تشير الإرشادات غالبًا إلى ما بين الشهر السادس والثامن عشر، لأن الطفل لا يتذكر والشفاء سريع. والإصلاح ممكن أيضًا عند الأكبر سنًا وعند البالغين؛ فليس هناك «فات الأوان» بل خطة مختلفة.' },
        { q: 'هل تكفي عملية واحدة؟', a: 'في معظم الأشكال البعيدة نعم. أما في الأشكال القريبة فتُخطَّط جلستان في الغالب. ولا يستطيع أي جرّاح ضمان نتيجة نهائية بعملية واحدة؛ فاختر مركزًا يناقش معك احتمال العملية الثانية مسبقًا.' },
        { q: 'ماذا لو تكوّن ناسور؟', a: 'تُغلَق النواسير الصغيرة أحيانًا من تلقاء نفسها. وإن لم تُغلَق يُنتظر عادة بضعة أشهر ليلين النسيج ثم يُغلَق بعملية صغيرة. أما التدخل الفوري في نسيج ملتهب ومتورّم فيُسيء النتيجة غالبًا.' },
        { q: 'هل سيتبول واقفًا بعد العملية؟', a: 'هذا هو الهدف الأول للإصلاح: خروج البول إلى الأمام بتيار واحد. ويُقيَّم تحقّقه بمراقبته بعد نزع القسطرة.' },
        { q: 'هل تتأثر وظيفته الجنسية لاحقًا؟', a: 'من أهداف الإصلاح أن يكون القضيب مستقيمًا، وهذا يتعلق مباشرة بالوظيفة الجنسية لاحقًا. ومع نمو القضيب في البلوغ قد يلزم إعادة تقييم الانحناء. ومعرفة ذلك الآن خير من مفاجأة لاحقة.' },
        { q: 'هل تزعجه القسطرة؟', a: 'يتحمّلها الأطفال أكثر مما يتوقع الأهل. وتُترك عادة لتصرّف بحرية في الحفاضة؛ ولا يلزم كيس في معظم الحالات. وتُعطى أدوية للألم ولتشنّج المثانة.' },
        { q: 'أُجريت له عملية في مكان آخر، هل يمكن إعادتها؟', a: 'نعم. وإعادة الإصلاح أصعب لأن النسيج متليّف والقلفة استُعمِلت غالبًا؛ وعندها يُطرَح طُعم مخاطية الفم. أحضر معك تقارير العمليات السابقة والصور إن وُجدت.' },
        { q: 'كم نبقى في تركيا؟', a: 'لأن نزع القسطرة والمراجعة الأولى يتمان هنا، تُخطَّط عادة مدة 10 إلى 14 يومًا. وقد تطول في الأشكال القريبة. ولا تحجز رحلة العودة في اليوم التالي للنزع.' },
        { q: 'هل تبقى ندبة؟', a: 'كل شق جراحي يترك ندبة. والهدف أن تتبع الخطوط الطبيعية لجلد القضيب وأن تبهت. والاحمرار في الأشهر الأولى معتاد؛ والتقييم النهائي ينتظر من ثلاثة إلى ستة أشهر.' },
        { q: 'هل يضر التخدير بطفلي؟', a: 'يعتمد تخدير الأطفال على جرعات ومراقبة مخصّصة للطفل؛ ولهذا يُعد تقييم التخدير خطوة مستقلة. أخبرنا بالتفصيل عن الأمراض السابقة والحساسية والأدوية الحالية.' },
        { q: 'ما الوثائق التي نرسلها؟', a: 'تقارير العمليات السابقة والخلاصات الطبية، وتحليل بول حديث، ومقطع قصير لطفلك أثناء التبول، وصورة للمنطقة. وبهذه الوثائق يمكن تقييم النوع وعدد الجلسات المحتمل قبل سفركم.' }
      ],
      sources: [
        {
          label: 'إرشادات EAU/ESPU في مسالك الأطفال — الجمعية الأوروبية للمسالك البولية',
          url: 'https://uroweb.org/guidelines/paediatric-urology'
        }
      ]
    }
  }
};
