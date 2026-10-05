import type { Treatment } from '../types';

/**
 * HİPOSPADİAS ONARIMI — yeni sayfa (Görev 7).
 *
 * reviewStatus: 'draft' — metin hazırdır ancak HEKİM ONAYI BEKLİYOR.
 * Bu nedenle `lastReviewed` BİLEREK boş bırakıldı: onaylanmamış bir metnin
 * altına "Son tıbbi gözden geçirme — Doç. Dr. Müslüm Ergün" yazmak
 * yanıltıcı olurdu. Onaydan sonra reviewStatus 'reviewed' yapılıp tarih girilir.
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
  reviewStatus: 'draft',
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
    de: {
      title: 'Hypospadie-Korrektur',
      summary:
        'Operative Korrektur einer angeborenen Fehlbildung, bei der die Harnröhrenöffnung nicht an der Penisspitze, sondern an der Unterseite liegt. Zuerst zählt die Funktion — ein gerader Strahl und ein gerader Penis — danach das Aussehen.',
      metaTitle: 'Hypospadie-Korrektur: Operationsalter, Techniken und Heilung',
      metaDescription:
        'Hypospadie-Korrektur bei Kindern: wann operiert wird, warum vorher nicht beschnitten werden darf, ein- und zweizeitige Korrektur, Fistel- und Strikturrisiko, Heilungsverlauf und ehrliche Erwartungen.',
      quickFacts: {
        duration: '1–3 Stunden je nach Form',
        anesthesia: 'Vollnarkose, häufig mit Kaudalblock',
        hospitalStay: 'Ambulant – 1 Nacht',
        stayInTurkey: '10–14 Tage',
        catheter: '5–10 Tage',
        returnToWork: 'Rückkehr in Kita oder Schule nach 2–3 Wochen',
        flightClearance: 'Nach Katheterentfernung und Kontrolle'
      },
      definition: [
        'Die Hypospadie ist eine angeborene Fehlbildung, bei der der Harnkanal (die Harnröhre) nicht bis zur Penisspitze reicht, sondern irgendwo an der Unterseite mündet. Sie kommt bei Jungen häufig vor und ist weder eine Krankheit noch die Folge eines Fehlverhaltens. Die Frage, die Eltern am häufigsten stellen — „Haben wir etwas falsch gemacht?" — hat eine klare Antwort: nein.',
        'Drei Befunde werden gemeinsam beurteilt: wo die Öffnung liegt, ob der Penis nach unten gekrümmt ist (Chordee), und das Fehlen der Vorhaut auf der Oberseite. Sie sind nicht bei jedem Kind gleich stark ausgeprägt. Liegt die Öffnung nahe der Spitze (distal), ist das Bild meist milder; liegt sie an der Peniswurzel oder im Skrotum (proximal), ist eine aufwendigere Korrektur erforderlich.',
        'Die Entscheidung zur Operation richtet sich nicht allein nach dem Aussehen. Die eigentlichen Fragen lauten: Kann das Kind im Stehen nach vorne urinieren, spritzt der Strahl oder zeigt er nach unten, und ist der Penis beim Wasserlassen oder später bei der Erektion sichtbar gekrümmt. In sehr milden Fällen — Öffnung nahe der Spitze, keine Krümmung — kann eine Operation entbehrlich sein; auch das ist ein gültiges Ergebnis und wird den Eltern offen gesagt.',
        'EIN WICHTIGER HINWEIS: Ein Junge mit Hypospadie DARF VOR DER KORREKTUR NICHT BESCHNITTEN WERDEN. Die Vorhaut ist das wertvollste Gewebe für den Wiederaufbau; ist sie entfernt, fehlt dem Operateur das beste Material und die Korrektur wird schwieriger. Wirkt die Lage der Harnröhrenöffnung Ihres Kindes ungewöhnlich, sollte vor jeder Beschneidung ein Urologe untersuchen.',
        'Bevorzugt wird meist das erste Lebensjahr; Leitlinien nennen häufig 6–18 Monate. Dieser Zeitraum wird gewählt, weil das Kind sich später nicht erinnert und die Heilung rasch verläuft. Stellt sich das Kind später vor, ist die Korrektur weiterhin möglich; „zu spät" gibt es nicht, nur eine andere Planung.',
        'Bei manchen Jungen tritt die Hypospadie nicht allein auf: Ein Hodenhochstand oder ein Leistenbruch kann hinzukommen. Liegt die Öffnung sehr proximal und sind die Hoden nicht tastbar, kann eine Abklärung der Geschlechtsentwicklung veranlasst werden. Das soll nicht beunruhigen, sondern verhindern, dass die richtige Diagnose übersehen wird.',
        'Die Ziele der Korrektur lauten der Reihe nach: Urin, der als ein Strahl nach vorne austritt; ein gerader Penis; eine Öffnung nahe der Spitze und mit ausreichender Weite; ein Aussehen wie bei anderen Jungen. Das Aussehen steht zuletzt, weil es ohne gute Funktion wenig bedeutet.'
      ],
      eligibility: {
        suitable: [
          'Jungen, deren Strahl spritzt, nach unten zeigt oder das Urinieren im Stehen erschwert',
          'Jungen mit sichtbarer Krümmung des Penisschafts (Chordee)',
          'Jungen, deren Öffnung mittschaftig, an der Wurzel oder nahe dem Skrotum liegt',
          'Andernorts operierte Jungen mit Fistel oder Striktur',
          'Erwachsene ohne Korrektur im Kindesalter mit Beschwerden beim Wasserlassen oder der Sexualfunktion'
        ],
        notSuitable: [
          'Jungen mit Öffnung sehr nahe der Spitze, ohne Krümmung und ohne funktionelle Beschwerden — eine Operation wird dann unter Umständen nicht empfohlen',
          'Jungen mit aktivem Harnwegsinfekt: Der Infekt wird zuerst behandelt',
          'Ausgewählte Jungen mit kleinem Penis, bei denen vor der Operation eine Hormonvorbereitung nötig sein kann; die Planung wird dann verschoben',
          'Jungen mit zusätzlichem Narkoserisiko, die zuvor kinderärztlich beurteilt werden müssen'
        ]
      },
      technology: [
        'Vergrößerte Operation mit Operationsmikroskop oder Lupenbrille',
        'Feines Kinderinstrumentarium und feines resorbierbares Nahtmaterial',
        'Aus der Vorhaut gebildete, gefäßgestielte Gewebedeckung',
        'Mundschleimhauttransplantat, falls erforderlich',
        'Kinderanästhesieteam und Kaudalblock zur Schmerzbehandlung',
        'Weicher, dünnlumiger Harnröhrenkatheter bzw. Tropfstent'
      ],
      surgeonExperience: {
        caseVolume: '',
        note: 'Die Hypospadie-Korrektur gehört zur rekonstruktiven Urologie, und am stärksten beeinflusst das Ergebnis, wie das Gewebe bei der ersten Operation verwendet wird. Die Erfahrung von Doz. Dr. Müslüm Ergün in der Harnröhrenchirurgie und bei rekonstruktiven Eingriffen bildet die Grundlage des hier gewählten Vorgehens. Die erste Korrektur ist immer die Operation mit der besten Chance.'
      },
      timeline: [
        { when: 'Aus der Ferne', title: 'Erstbeurteilung', body: 'Geburtsangaben, Berichte früherer Operationen, ein kurzes Video oder Foto beim Wasserlassen sowie eine Urinuntersuchung werden gesichtet. Wir fragen stets, ob bereits beschnitten wurde, denn das ändert die Planung unmittelbar.' },
        { when: 'Tag 1', title: 'Untersuchung und Narkoseaufklärung', body: 'Die Untersuchung klärt Lage der Öffnung, Ausmaß der Krümmung und Gewebequalität. Blutwerte und Urinkultur werden abgenommen. Wächst in der Kultur ein Erreger, wird die Operation verschoben.' },
        { when: 'Tag 2', title: 'Operation', body: 'In Vollnarkose wird die Krümmung korrigiert, ein neuer Harnkanal gebildet und mit einer gefäßgestielten Gewebeschicht gedeckt. Diese Deckschicht wird gezielt eingebracht, um die spätere Fistelwahrscheinlichkeit zu senken. Am Ende verbleibt ein feiner Katheter.' },
        { when: 'Tag 2–3', title: 'Entlassung', body: 'Die meisten Kinder gehen am selben oder am Folgetag nach Hause. Wie der Verband geschützt wird, wie der Katheter abläuft und wann sofort Kontakt aufzunehmen ist, wird schriftlich erklärt.' },
        { when: 'Tag 5–10', title: 'Katheterentfernung', body: 'Der Katheter wird hier entfernt. Das erste Wasserlassen danach wird beobachtet, um einen einzelnen nach vorne gerichteten Strahl zu bestätigen. Deshalb wird der Rückflug nicht auf den Folgetag gelegt.' },
        { when: 'Woche 3–6', title: 'Kontrolle', body: 'Heilung und Harnstrahl werden beurteilt. Für die Fernnachsorge können Fotos und ein Video des Strahls erbeten werden.' }
      ],
      risks: [
        'FISTEL (URINLECK): die häufigste Komplikation. Zwischen neuem Kanal und Haut entsteht eine kleine Öffnung, durch die ein Teil des Urins austritt. Kleine Fisteln verschließen sich manchmal von selbst; sonst erfolgt nach einigen Monaten ein kleiner Zweiteingriff. Das bedeutet nicht, dass die erste Operation gescheitert ist',
        'STRIKTUR: An der neuen Öffnung oder im Kanal kann sich eine Enge bilden. Sie zeigt sich als dünner Strahl, Pressen oder Nachtröpfeln und kann einen weiteren Eingriff erfordern',
        'Aufgehen eines Teils des neuen Kanals (Dehiszenz) — besonders bei proximalen und komplexen Formen',
        'Wundinfektion mit vorübergehender Schwellung und Blutergüssen',
        'Unvollständige Korrektur der Krümmung oder erneutes Auftreten im Wachstum; eine Neubeurteilung in der Pubertät kann nötig werden',
        'Aussackung des Kanals (Divertikel) mit Nachtröpfeln',
        'Ein kosmetisches Ergebnis, das die Familie oder später das Kind nicht zufriedenstellt',
        'MÖGLICHKEIT EINER WEITEREN OPERATION: Besonders bei proximalen Formen kann ein zweiter Eingriff nötig werden; das wird vorab besprochen. Kein Operateur kann ein endgültiges Ergebnis aus einer einzigen Operation garantieren'
      ],
      alternatives: [
        'Beobachtung ohne Operation — eine legitime Option, wenn die Öffnung nahe der Spitze liegt, keine Krümmung besteht und der Strahl normal ist',
        'Einzeitige Korrektur — das übliche Vorgehen bei distalen und mittschaftigen Formen',
        'Zweizeitige Korrektur — bei ausgeprägt proximalen Formen oder unzureichendem Gewebe: zuerst Begradigung und Gewebevorbereitung, in der zweiten Sitzung die Kanalbildung',
        'Korrektur mit Transplantat — Mundschleimhaut, wenn die Vorhaut bereits entfernt wurde',
        'Hormonvorbereitung vor der Operation — bei ausgewählten Jungen mit kleinem Penis, um das Gewebe zu verbessern',
        'Redo-Korrektur bei andernorts operierten Jungen mit unbefriedigendem Ergebnis'
      ],
      comparison: {
        title: 'Distale und proximale Korrektur: die Erwartungen sind nicht gleich',
        columns: ['Kriterium', 'Distal (nahe der Spitze)', 'Proximal (an der Wurzel)'],
        rows: [
          { label: 'Operationsdauer', values: ['Kürzer', 'Länger'] },
          { label: 'Anzahl der Sitzungen', values: ['Meist einzeitig', 'Häufig zweizeitig geplant'] },
          { label: 'Begradigung', values: ['Ein begrenzter Schritt genügt meist', 'Aufwendigere Korrektur nötig'] },
          { label: 'Zusätzliches Gewebe', values: ['Meist nicht nötig', 'Transplantat oder zusätzliche Deckung möglich'] },
          { label: 'Fistelwahrscheinlichkeit', values: ['Geringer', 'Höher'] },
          { label: 'Katheterdauer', values: ['Kürzer', 'Länger'] },
          { label: 'Aufenthalt in der Türkei', values: ['Kürzer', 'Länger geplant'] }
        ],
        note: 'Diese Tabelle ist keine Rangfolge, sondern eine Erwartungsanpassung. Eine höhere Wahrscheinlichkeit eines Zweiteingriffs bei proximaler Form ist kein Versagen, sondern liegt in der Natur des Befundes. Wer aus dem Ausland anreist, sollte diese Möglichkeit von Anfang an einplanen.'
      },
      recovery: [
        { period: 'Erste 48 Stunden', body: 'Schwellung und Blutergüsse sind zu erwarten. Schmerzen lassen sich meist mit einfachen Mitteln kontrollieren. Es wird viel getrunken. Fieber, ein durchnässter Verband oder fehlender Urinabfluss über den Katheter erfordern sofortigen Kontakt.' },
        { period: 'Woche 1', body: 'Das Kind ruht zu Hause. Bei Windelkindern darf die Windel nicht auf den Verband drücken. Fahrrad, Rutschauto und das Tragen rittlings auf der Hüfte werden vermieden.' },
        { period: 'Nach Katheterentfernung', body: 'Die ersten Male kann es brennen. Der Strahl sollte ein einzelner, nach vorne gerichteter Strahl sein. Spritzen oder Tröpfeln ist zu melden.' },
        { period: 'Woche 2–4', body: 'Die Rückkehr in Kita oder Schule fällt meist in diese Zeit. Toben und Sport warten etwas länger. Narben wirken jetzt rot und verblassen über Monate.' },
        { period: 'Monat 3–6', body: 'Das Aussehen setzt sich. Vorher wird kein abschließendes Urteil über das kosmetische Ergebnis gefällt.' },
        { period: 'Pubertät', body: 'Mit dem Wachstum werden Krümmung und Weite erneut beurteilt. Eine Kontrolle in der Pubertät ist Routine und kein schlechtes Zeichen.' }
      ],
      price: {
        from: 0,
        to: 0,
        currency: 'EUR',
        disclaimer:
          'Der Betrag hängt von der Form der Hypospadie, von ein- oder zweizeitigem Vorgehen, von einem etwaigen Transplantat und von der Aufenthaltsdauer ab. Ein detailliertes schriftliches Angebot folgt, sobald die Unterlagen Ihres Kindes gesichtet sind.'
      },
      packageIncludes: [
        'Untersuchung und kinderurologische Beurteilung',
        'Blut- und Urinuntersuchungen, Urinkultur',
        'Kinderanästhesiologische Beurteilung',
        'Operationssaal und Narkose',
        'Chirurgischer Verbrauchsbedarf und Nahtmaterial',
        'Klinikaufenthalt (Kind und ein Elternteil)',
        'Verbände und Katheterentfernung',
        'Transfers Flughafen–Klinik–Hotel',
        'Unterkunft (Kind und Begleitperson)',
        'Medizinischer Dolmetscher und Patientenkoordination',
        'Fernnachsorge nach der Rückkehr'
      ],
      faqs: [
        { q: 'Mein Sohn hat eine Hypospadie — darf er beschnitten werden?', a: 'Vor der Korrektur nicht. Die Vorhaut ist das geeignetste Gewebe für den Wiederaufbau; ist sie entfernt, entfällt diese Möglichkeit und ein Transplantat aus der Mundschleimhaut kann nötig werden. Die Beschneidung wird üblicherweise während oder nach der Korrektur geplant.' },
        { q: 'In welchem Alter sollte operiert werden?', a: 'Leitlinien nennen meist 6–18 Monate, weil das Kind sich nicht erinnert und rasch heilt. Auch bei älteren Jungen und Erwachsenen ist die Korrektur möglich; „zu spät" gibt es nicht, nur eine andere Planung.' },
        { q: 'Reicht eine Operation?', a: 'Bei den meisten distalen Formen genügt eine Sitzung. Bei proximalen Formen werden häufig zwei geplant. Kein Operateur kann ein endgültiges Ergebnis in einem Eingriff garantieren; wählen Sie ein Zentrum, das die Möglichkeit eines zweiten vorher mit Ihnen bespricht.' },
        { q: 'Was passiert, wenn eine Fistel entsteht?', a: 'Kleine Fisteln verschließen sich manchmal von selbst. Sonst lässt man das Gewebe einige Monate weich werden und verschließt sie in einem kleinen Eingriff. Sofort zu operieren verschlechtert in entzündetem, geschwollenem Gewebe meist das Ergebnis.' },
        { q: 'Wird er danach im Stehen urinieren können?', a: 'Das ist das erste Ziel der Korrektur: Urin, der als ein Strahl nach vorne austritt. Ob es erreicht ist, wird nach der Katheterentfernung durch Beobachtung beurteilt.' },
        { q: 'Wird später die Sexualfunktion beeinträchtigt sein?', a: 'Ein Ziel der Korrektur ist ein gerader Penis, was die spätere Sexualfunktion unmittelbar betrifft. Mit dem Wachstum in der Pubertät kann eine erneute Beurteilung der Krümmung nötig werden. Das jetzt zu wissen ist besser, als später überrascht zu werden.' },
        { q: 'Stört der Katheter?', a: 'Kinder kommen damit besser zurecht, als Eltern erwarten. Der Katheter läuft meist frei in die Windel ab; ein Beutel ist in den meisten Fällen nicht nötig. Gegen Schmerzen und Blasenkrämpfe gibt es Medikamente.' },
        { q: 'Er wurde andernorts operiert — kann erneut operiert werden?', a: 'Ja. Redo-Eingriffe sind schwieriger, weil das Gewebe vernarbt ist und die Vorhaut meist verbraucht wurde; dann kommt ein Mundschleimhauttransplantat infrage. Bringen Sie bitte frühere Operationsberichte und Fotos mit.' },
        { q: 'Wie lange müssen wir in der Türkei bleiben?', a: 'Da Katheterentfernung und erste Kontrolle hier erfolgen, werden meist 10–14 Tage geplant. Proximale Formen können länger dauern. Planen Sie den Rückflug nicht für den Tag nach der Katheterentfernung.' },
        { q: 'Bleibt eine Narbe?', a: 'Jeder Schnitt hinterlässt eine Narbe. Ziel ist, dass sie den natürlichen Linien der Penishaut folgt und verblasst. Rötung in den ersten Monaten ist normal; die abschließende Beurteilung wartet 3–6 Monate.' },
        { q: 'Schadet die Narkose meinem Kind?', a: 'Die Kinderanästhesie arbeitet mit kindgerechten Dosierungen und Überwachung; deshalb ist die Narkoseaufklärung ein eigener Schritt. Teilen Sie frühere Erkrankungen, Allergien und aktuelle Medikamente vollständig mit.' },
        { q: 'Welche Unterlagen sollen wir senden?', a: 'Frühere Operationsberichte und Arztbriefe, eine aktuelle Urinuntersuchung, ein kurzes Video beim Wasserlassen und ein Foto der Region. Damit lassen sich Form und voraussichtliche Zahl der Sitzungen vor der Anreise beurteilen.' }
      ],
      sources: [
        {
          label: 'EAU/ESPU-Leitlinie Kinderurologie — Europäische Gesellschaft für Urologie',
          url: 'https://uroweb.org/guidelines/paediatric-urology'
        }
      ]
    },
    fr: {
      title: 'Cure d’hypospadias',
      summary:
        'Correction chirurgicale d’une malformation congénitale où le méat urinaire s’ouvre sur la face inférieure de la verge et non à son extrémité. La fonction d’abord — un jet droit et une verge droite — l’aspect ensuite.',
      metaTitle: 'Cure d’hypospadias : âge opératoire, techniques et convalescence',
      metaDescription:
        'Cure d’hypospadias chez l’enfant : à quel âge opérer, pourquoi ne pas circoncire avant, réparation en un ou deux temps, risque de fistule et de sténose, convalescence et attentes réalistes.',
      quickFacts: {
        duration: '1 à 3 heures selon la forme',
        anesthesia: 'Anesthésie générale, souvent avec bloc caudal',
        hospitalStay: 'Ambulatoire – 1 nuit',
        stayInTurkey: '10 à 14 jours',
        catheter: '5 à 10 jours',
        returnToWork: 'Retour à la crèche ou à l’école en 2 à 3 semaines',
        flightClearance: 'Après le retrait de la sonde et le contrôle'
      },
      definition: [
        'L’hypospadias est une malformation congénitale dans laquelle le canal urinaire (l’urètre) n’atteint pas l’extrémité de la verge mais s’ouvre quelque part sur sa face inférieure. C’est fréquent chez le garçon ; ce n’est ni une maladie ni la conséquence d’une faute. À la question que les parents posent le plus souvent — « est-ce que nous y sommes pour quelque chose ? » — la réponse est non.',
        'Trois éléments sont évalués ensemble : la position du méat, l’existence d’une courbure vers le bas (coudure) et le déficit de prépuce sur la face dorsale. Ils ne sont pas également marqués chez tous les enfants. Si le méat est proche de l’extrémité (distal), le tableau est généralement plus simple ; s’il s’ouvre à la base de la verge ou dans le scrotum (proximal), la réparation est plus étendue.',
        'La décision opératoire ne se fonde pas sur le seul aspect. Les vraies questions sont : l’enfant peut-il uriner debout vers l’avant, le jet se disperse-t-il ou se dirige-t-il vers le bas, la verge est-elle nettement coudée à la miction ou plus tard en érection. Dans certaines formes très modérées — méat proche de l’extrémité, pas de courbure — l’intervention peut ne pas être nécessaire ; c’est une conclusion valable, dite clairement aux familles.',
        'UN AVERTISSEMENT IMPORTANT : un garçon porteur d’un hypospadias NE DOIT PAS ÊTRE CIRCONCIS AVANT LA RÉPARATION. Le prépuce est le tissu le plus précieux pour la reconstruction ; une fois retiré, le chirurgien perd son meilleur matériau et la cure devient plus difficile. Si la position du méat de votre enfant paraît inhabituelle, un urologue doit l’examiner avant toute circoncision.',
        'La période préférée se situe le plus souvent dans la première année ; les recommandations citent souvent 6 à 18 mois. On la choisit parce que l’enfant n’en gardera pas le souvenir et que la cicatrisation est rapide. En cas de consultation plus tardive, la réparation reste possible : il n’y a pas de « trop tard », seulement un autre plan.',
        'Chez certains garçons, l’hypospadias n’est pas isolé : une cryptorchidie ou une hernie inguinale peuvent s’y associer. Lorsque le méat est très proximal et que les testicules ne sont pas palpés, un bilan du développement sexuel peut être demandé. Cette demande n’a pas pour but d’inquiéter mais d’éviter de passer à côté du bon diagnostic.',
        'Les objectifs de la cure sont, dans l’ordre : une urine sortant vers l’avant en un seul jet ; une verge droite ; un méat proche de l’extrémité et de calibre suffisant ; un aspect comparable à celui des autres garçons. L’aspect vient en dernier, car il compte peu tant que la fonction n’est pas correcte.'
      ],
      eligibility: {
        suitable: [
          'Garçons dont le jet se disperse, se dirige vers le bas ou rend la miction debout difficile',
          'Garçons présentant une courbure visible du corps de la verge',
          'Garçons dont le méat s’ouvre à mi-verge, à la base ou près du scrotum',
          'Garçons déjà opérés ailleurs, avec fistule ou sténose',
          'Adultes non opérés dans l’enfance, gênés à la miction ou sur le plan sexuel'
        ],
        notSuitable: [
          'Garçons dont le méat est très proche de l’extrémité, sans courbure ni gêne fonctionnelle — l’intervention peut alors ne pas être proposée',
          'Garçons présentant une infection urinaire active : l’infection est traitée d’abord',
          'Certains garçons à verge de petite taille, chez qui une préparation hormonale peut être nécessaire ; la planification est alors reportée',
          'Garçons à risque anesthésique particulier, devant être évalués au préalable par un pédiatre'
        ]
      },
      technology: [
        'Chirurgie sous grossissement (microscope opératoire ou loupes)',
        'Instruments pédiatriques fins et fils résorbables fins',
        'Couverture tissulaire vascularisée préparée à partir du prépuce',
        'Greffe de muqueuse buccale si nécessaire',
        'Équipe d’anesthésie pédiatrique et bloc caudal pour la douleur',
        'Sonde urétrale souple de petit calibre ou drain goutte-à-goutte'
      ],
      surgeonExperience: {
        caseVolume: '',
        note: 'La cure d’hypospadias relève de l’urologie reconstructrice, et ce qui pèse le plus sur le résultat est la manière dont le tissu est utilisé lors de la première intervention. L’expérience du Dr Müslüm Ergün en chirurgie urétrale et en reconstruction fonde l’approche retenue ici. La première réparation est toujours celle qui offre la meilleure chance.'
      },
      timeline: [
        { when: 'À distance', title: 'Évaluation initiale', body: 'Les données de naissance, les comptes rendus d’éventuelles interventions, une courte vidéo ou une photographie de la miction et un examen des urines sont étudiés. Nous demandons systématiquement si une circoncision a déjà été réalisée, car cela modifie directement le plan.' },
        { when: 'Jour 1', title: 'Examen et consultation d’anesthésie', body: 'L’examen précise la position du méat, le degré de courbure et la qualité des tissus. Bilan sanguin et ECBU sont réalisés. Si la culture est positive, l’intervention est reportée.' },
        { when: 'Jour 2', title: 'Intervention', body: 'Sous anesthésie générale, la courbure est corrigée, un nouveau canal urinaire est constitué puis recouvert d’une couche de tissu vascularisé. Cette couche est mise en place précisément pour réduire le risque de fistule ultérieure. Une sonde fine est laissée en fin d’intervention.' },
        { when: 'Jours 2–3', title: 'Sortie', body: 'La plupart des enfants rentrent le jour même ou le lendemain. La protection du pansement, l’écoulement de la sonde et les situations imposant un contact immédiat sont expliqués par écrit.' },
        { when: 'Jours 5–10', title: 'Retrait de la sonde', body: 'La sonde est retirée ici. La première miction est observée pour confirmer un jet unique dirigé vers l’avant. C’est pourquoi le vol retour n’est pas prévu le lendemain du retrait.' },
        { when: 'Semaines 3–6', title: 'Contrôle', body: 'La cicatrisation et le jet urinaire sont évalués. Des photographies et une vidéo du jet peuvent être demandées pour le suivi à distance.' }
      ],
      risks: [
        'FISTULE (FUITE D’URINE) : la complication la plus fréquente. Un petit orifice se forme entre le nouveau canal et la peau et une partie de l’urine passe par là. Les petites fistules se ferment parfois seules ; sinon, la réparation se fait après quelques mois par une petite intervention. Cela ne signifie pas que la première opération a échoué',
        'STÉNOSE : un rétrécissement peut apparaître au niveau du nouveau méat ou du canal. Il se manifeste par un jet fin, des efforts de poussée ou un égouttement, et peut imposer un geste complémentaire',
        'Désunion d’une partie du nouveau canal — surtout dans les formes proximales et complexes',
        'Infection de la plaie, avec œdème et ecchymoses transitoires',
        'Correction incomplète de la courbure, ou récidive avec la croissance ; une réévaluation à la puberté peut être nécessaire',
        'Dilatation du canal (diverticule) avec égouttement après la miction',
        'Un résultat esthétique ne satisfaisant pas la famille, ou plus tard l’enfant',
        'POSSIBILITÉ D’UNE NOUVELLE INTERVENTION : dans les formes proximales surtout, un second geste peut être nécessaire ; cela se discute à l’avance. Aucun chirurgien ne peut garantir un résultat définitif en une seule opération'
      ],
      alternatives: [
        'Surveillance sans chirurgie — option légitime lorsque le méat est proche de l’extrémité, sans courbure et avec un jet normal',
        'Réparation en un temps — démarche habituelle dans les formes distales et moyennes',
        'Réparation en deux temps — dans les formes proximales étendues ou si le tissu est insuffisant : redressement et préparation d’abord, constitution du canal au second temps',
        'Réparation avec greffe — muqueuse buccale lorsque le prépuce a déjà été retiré',
        'Préparation hormonale préopératoire — chez certains garçons à verge de petite taille, pour améliorer le tissu',
        'Reprise (redo) chez les garçons opérés ailleurs avec un résultat insuffisant'
      ],
      comparison: {
        title: 'Formes distales et proximales : les attentes ne sont pas les mêmes',
        columns: ['Critère', 'Distale (près de l’extrémité)', 'Proximale (à la base)'],
        rows: [
          { label: 'Durée opératoire', values: ['Plus courte', 'Plus longue'] },
          { label: 'Nombre de temps', values: ['Généralement un seul', 'Deux temps souvent prévus'] },
          { label: 'Correction de la courbure', values: ['Un geste limité suffit le plus souvent', 'Correction plus étendue nécessaire'] },
          { label: 'Tissu supplémentaire', values: ['Généralement inutile', 'Greffe ou couverture additionnelle possible'] },
          { label: 'Risque de fistule', values: ['Plus faible', 'Plus élevé'] },
          { label: 'Durée de sondage', values: ['Plus courte', 'Plus longue'] },
          { label: 'Séjour en Türkiye', values: ['Plus court', 'Prévu plus long'] }
        ],
        note: 'Ce tableau n’est pas un classement mais un ajustement des attentes. Un risque plus élevé de seconde intervention dans une forme proximale n’est pas un échec : c’est la nature du problème. Si vous venez de l’étranger, intégrez cette éventualité dès le départ.'
      },
      recovery: [
        { period: '48 premières heures', body: 'Œdème et ecchymoses sont attendus. La douleur est habituellement contrôlée par des antalgiques simples. On fait boire abondamment. Fièvre, pansement détrempé ou absence d’écoulement par la sonde imposent un contact immédiat.' },
        { period: 'Semaine 1', body: 'L’enfant se repose à la maison. Chez le nourrisson, la couche ne doit pas comprimer le pansement. Vélo, porteurs et portage à califourchon sur la hanche sont évités.' },
        { period: 'Après le retrait de la sonde', body: 'Les premières mictions peuvent brûler. Le jet doit être unique et dirigé vers l’avant. Toute dispersion ou tout égouttement doit être signalé.' },
        { period: 'Semaines 2–4', body: 'Le retour à la crèche ou à l’école se situe généralement là. Les jeux actifs et le sport attendent un peu plus. Les cicatrices paraissent rouges à ce stade et pâlissent en quelques mois.' },
        { period: 'Mois 3–6', body: 'L’aspect se stabilise. Aucun jugement définitif sur le résultat esthétique n’est porté avant ce délai.' },
        { period: 'Puberté', body: 'Avec la croissance, courbure et calibre sont réévalués. Un contrôle à la puberté chez un garçon opéré dans l’enfance est habituel et non un mauvais signe.' }
      ],
      price: {
        from: 0,
        to: 0,
        currency: 'EUR',
        disclaimer:
          'Le montant dépend de la forme de l’hypospadias, du nombre de temps opératoires prévus, du recours ou non à une greffe et de la durée d’hospitalisation. Un devis écrit détaillé est remis après examen des documents de votre enfant.'
      },
      packageIncludes: [
        'Consultation et évaluation en urologie pédiatrique',
        'Bilans sanguins et urinaires, ECBU',
        'Consultation d’anesthésie pédiatrique',
        'Bloc opératoire et anesthésie',
        'Consommables chirurgicaux et fils de suture',
        'Hospitalisation (enfant et un parent)',
        'Pansements et retrait de la sonde',
        'Transferts aéroport–hôpital–hôtel',
        'Hébergement (enfant et accompagnant)',
        'Interprète médical et coordinateur patient',
        'Suivi à distance après le retour'
      ],
      faqs: [
        { q: 'Mon fils a un hypospadias : peut-il être circoncis ?', a: 'Pas avant la réparation. Le prépuce est le tissu le plus adapté à la reconstruction ; une fois retiré, cette possibilité disparaît et une greffe de muqueuse buccale peut devenir nécessaire. La circoncision est généralement prévue pendant ou après la cure.' },
        { q: 'À quel âge opérer ?', a: 'Les recommandations citent le plus souvent 6 à 18 mois, parce que l’enfant n’en gardera pas le souvenir et que la cicatrisation est rapide. La réparation reste possible chez le garçon plus grand et chez l’adulte : il n’y a pas de « trop tard », seulement un autre plan.' },
        { q: 'Une seule intervention suffira-t-elle ?', a: 'Dans la plupart des formes distales, oui. Dans les formes proximales, deux temps sont souvent prévus. Aucun chirurgien ne peut garantir un résultat définitif en une opération ; choisissez un centre qui discute d’emblée avec vous la possibilité d’un second temps.' },
        { q: 'Que faire en cas de fistule ?', a: 'Les petites fistules se ferment parfois spontanément. Sinon, on laisse les tissus s’assouplir quelques mois puis on les ferme par une petite intervention. Réopérer immédiatement, sur un tissu inflammatoire et œdémateux, dégrade en général le résultat.' },
        { q: 'Pourra-t-il uriner debout ensuite ?', a: 'C’est le premier objectif de la cure : une urine sortant vers l’avant en un seul jet. Son obtention est évaluée en l’observant après le retrait de la sonde.' },
        { q: 'Sa fonction sexuelle sera-t-elle affectée plus tard ?', a: 'Un des objectifs est une verge droite, ce qui concerne directement la fonction sexuelle ultérieure. Avec la croissance pubertaire, la courbure peut devoir être réévaluée. Le savoir aujourd’hui vaut mieux qu’une surprise plus tard.' },
        { q: 'La sonde est-elle gênante ?', a: 'Les enfants la supportent mieux que les parents ne le craignent. Elle s’écoule le plus souvent librement dans la couche ; une poche n’est pas nécessaire dans la majorité des cas. Des médicaments sont prescrits contre la douleur et les spasmes vésicaux.' },
        { q: 'Il a été opéré ailleurs : peut-on reprendre ?', a: 'Oui. Les reprises sont plus difficiles car le tissu est cicatriciel et le prépuce a généralement été utilisé ; la greffe de muqueuse buccale entre alors en jeu. Apportez les comptes rendus opératoires et les photographies éventuelles.' },
        { q: 'Combien de temps rester en Türkiye ?', a: 'Comme le retrait de la sonde et le premier contrôle se font ici, on prévoit généralement 10 à 14 jours. Les formes proximales peuvent demander davantage. Ne prévoyez pas le vol retour le lendemain du retrait.' },
        { q: 'Restera-t-il une cicatrice ?', a: 'Toute incision laisse une cicatrice. L’objectif est qu’elle suive les lignes naturelles de la peau de la verge et qu’elle pâlisse. Une rougeur les premiers mois est normale ; l’évaluation définitive attend 3 à 6 mois.' },
        { q: 'L’anesthésie est-elle dangereuse pour mon enfant ?', a: 'L’anesthésie pédiatrique repose sur des doses et une surveillance adaptées à l’enfant ; c’est pourquoi la consultation préanesthésique est une étape distincte. Signalez intégralement antécédents, allergies et traitements en cours.' },
        { q: 'Quels documents envoyer ?', a: 'Les comptes rendus opératoires et d’hospitalisation antérieurs, un examen des urines récent, une courte vidéo de la miction et une photographie de la région. Avec cela, la forme et le nombre probable de temps opératoires peuvent être évalués avant votre départ.' }
      ],
      sources: [
        {
          label: 'Recommandations EAU/ESPU en urologie pédiatrique — Association européenne d’urologie',
          url: 'https://uroweb.org/guidelines/paediatric-urology'
        }
      ]
    },
    ru: {
      title: 'Коррекция гипоспадии',
      summary:
        'Хирургическая коррекция врождённого состояния, при котором отверстие мочеиспускательного канала расположено не на кончике полового члена, а на его нижней поверхности. Сначала функция — прямая струя и прямой половой член, — и только затем внешний вид.',
      metaTitle: 'Коррекция гипоспадии: возраст операции, методики и восстановление',
      metaDescription:
        'Коррекция гипоспадии у детей: в каком возрасте оперируют, почему нельзя делать обрезание заранее, одноэтапная и двухэтапная операция, риск свища и стриктуры, восстановление и честные ожидания.',
      quickFacts: {
        duration: '1–3 часа в зависимости от формы',
        anesthesia: 'Общая анестезия, нередко с каудальным блоком',
        hospitalStay: 'Амбулаторно – 1 ночь',
        stayInTurkey: '10–14 дней',
        catheter: '5–10 дней',
        returnToWork: 'Возвращение в сад или школу через 2–3 недели',
        flightClearance: 'После удаления катетера и контрольного осмотра'
      },
      definition: [
        'Гипоспадия — врождённое состояние, при котором мочеиспускательный канал (уретра) не доходит до кончика полового члена, а открывается где-то на его нижней поверхности. У мальчиков она встречается часто и не является ни болезнью, ни следствием чьей-либо ошибки. На самый частый вопрос родителей — «это из-за нас?» — ответ однозначный: нет.',
        'Вместе оценивают три признака: где расположено отверстие, есть ли искривление полового члена книзу (хорда) и насколько недостаёт крайней плоти сверху. Выражены они у разных детей по-разному. Если отверстие близко к кончику (дистальная форма), картина обычно легче; если оно у основания полового члена или в мошонке (проксимальная форма), требуется более объёмная операция.',
        'Решение об операции принимается не только по внешнему виду. Главные вопросы такие: может ли ребёнок мочиться стоя и вперёд, разбрызгивается ли струя или направлена вниз, заметно ли искривление при мочеиспускании и в дальнейшем при эрекции. При очень лёгких формах — отверстие близко к кончику, искривления нет — операция может и не потребоваться; это правомерный вывод, и его прямо сообщают семье.',
        'ВАЖНОЕ ПРЕДУПРЕЖДЕНИЕ: мальчику с гипоспадией НЕЛЬЗЯ ДЕЛАТЬ ОБРЕЗАНИЕ ДО КОРРЕКЦИИ. Крайняя плоть — самая ценная ткань для реконструкции; если её удалить, хирург лишается лучшего материала и операция усложняется. Если расположение отверстия у вашего ребёнка выглядит необычно, до любого обрезания его должен осмотреть уролог.',
        'Предпочтительный период обычно приходится на первый год жизни; в руководствах чаще всего называют 6–18 месяцев. Этот срок выбран потому, что ребёнок не запомнит происходящее, а заживление идёт быстро. При более позднем обращении коррекция по-прежнему возможна: «поздно» не бывает, бывает другой план.',
        'У части мальчиков гипоспадия не единственная находка: ей могут сопутствовать неопущение яичка или паховая грыжа. Если отверстие расположено очень проксимально, а яички не прощупываются, может быть назначено обследование по поводу развития пола. Это назначение не для того, чтобы напугать, а чтобы не пропустить верный диагноз.',
        'Цели коррекции по порядку: моча выходит вперёд одной струёй; половой член прямой; отверстие расположено близко к кончику и достаточно широкое; внешний вид сопоставим с другими мальчиками. Внешний вид стоит последним, потому что без правильной функции он мало что значит.'
      ],
      eligibility: {
        suitable: [
          'Мальчики, у которых струя разбрызгивается, направлена вниз или мешает мочиться стоя',
          'Мальчики с заметным искривлением ствола полового члена',
          'Мальчики, у которых отверстие открывается в средней части ствола, у основания или около мошонки',
          'Мальчики, оперированные в другом центре, у которых возник свищ или стриктура',
          'Взрослые, не оперированные в детстве, с нарушением мочеиспускания или сексуальной функции'
        ],
        notSuitable: [
          'Мальчики, у которых отверстие очень близко к кончику, искривления нет и жалоб нет — операция может не предлагаться',
          'Мальчики с активной инфекцией мочевых путей: сначала лечат инфекцию',
          'Отдельные мальчики с малым размером полового члена, которым перед операцией может потребоваться гормональная подготовка; планирование откладывается',
          'Мальчики с дополнительным анестезиологическим риском, которых сначала должен оценить педиатр'
        ]
      },
      technology: [
        'Операция с увеличением — операционный микроскоп или бинокулярные лупы',
        'Тонкий детский инструментарий и тонкий рассасывающийся шовный материал',
        'Кровоснабжаемое тканевое покрытие, сформированное из крайней плоти',
        'Трансплантат слизистой щеки при необходимости',
        'Детская анестезиологическая бригада и каудальный блок для обезболивания',
        'Мягкий катетер малого диаметра или капельный стент'
      ],
      surgeonExperience: {
        caseVolume: '',
        note: 'Коррекция гипоспадии относится к реконструктивной урологии, и на результат сильнее всего влияет то, как использована ткань при первой операции. Опыт доцента, д-ра Мюслюма Эргюна в хирургии уретры и реконструктивных вмешательствах лежит в основе принятого здесь подхода. Первая операция всегда даёт наилучший шанс.'
      },
      timeline: [
        { when: 'Дистанционно', title: 'Предварительная оценка', body: 'Изучаются данные о рождении, протоколы прежних операций, короткое видео или фотография мочеиспускания и анализ мочи. Мы обязательно спрашиваем, было ли уже выполнено обрезание, — это прямо меняет план.' },
        { when: '1-й день', title: 'Осмотр и консультация анестезиолога', body: 'На осмотре определяют положение отверстия, степень искривления и качество тканей. Берут анализы крови и посев мочи. При росте флоры операция откладывается.' },
        { when: '2-й день', title: 'Операция', body: 'Под общей анестезией устраняют искривление, формируют новый мочевой канал и укрывают его кровоснабжаемым слоем ткани. Этот слой кладут именно для того, чтобы снизить вероятность свища в дальнейшем. В конце оставляют тонкий катетер.' },
        { when: '2–3-й день', title: 'Выписка', body: 'Большинство детей уходят домой в тот же или на следующий день. Как защищать повязку, как оттекает катетер и когда нужно немедленно обратиться — объясняют письменно.' },
        { when: '5–10-й день', title: 'Удаление катетера', body: 'Катетер удаляют здесь. Первое мочеиспускание после этого наблюдают, чтобы убедиться в единой струе, направленной вперёд. Поэтому обратный рейс не планируют на следующий день.' },
        { when: '3–6-я неделя', title: 'Контроль', body: 'Оценивают заживление и струю мочи. Для дистанционного наблюдения могут попросить фотографии и видео струи.' }
      ],
      risks: [
        'СВИЩ (ПОДТЕКАНИЕ МОЧИ): самое частое осложнение. Между новым каналом и кожей образуется небольшое отверстие, через которое проходит часть мочи. Маленькие свищи иногда закрываются сами; если нет, через несколько месяцев выполняют небольшую повторную операцию. Это не означает, что первая операция оказалась неудачной',
        'СТРИКТУРА: сужение может возникнуть у нового отверстия или по ходу канала. Проявляется тонкой струёй, натуживанием или подтеканием и может потребовать дополнительного вмешательства',
        'Расхождение части нового канала — особенно при проксимальных и сложных формах',
        'Инфекция раны с временным отёком и кровоподтёками',
        'Неполное устранение искривления или его возврат по мере роста; может потребоваться повторная оценка в период полового созревания',
        'Расширение канала (дивертикул) с подтеканием после мочеиспускания',
        'Косметический результат, не устраивающий семью или впоследствии самого ребёнка',
        'ВОЗМОЖНОСТЬ ПОВТОРНОЙ ОПЕРАЦИИ: особенно при проксимальных формах может потребоваться второе вмешательство, и это обсуждается заранее. Ни один хирург не может гарантировать окончательный результат одной операцией'
      ],
      alternatives: [
        'Наблюдение без операции — правомерный вариант, когда отверстие близко к кончику, искривления нет и струя нормальная',
        'Одноэтапная коррекция — обычный подход при дистальных и среднестволовых формах',
        'Двухэтапная коррекция — при выраженных проксимальных формах или нехватке ткани: сначала выпрямление и подготовка ткани, на втором этапе формирование канала',
        'Коррекция с трансплантатом — слизистая щеки, если крайняя плоть уже удалена',
        'Гормональная подготовка перед операцией — у отдельных мальчиков с малым размером полового члена, чтобы улучшить ткань',
        'Повторная (redo) коррекция у мальчиков, оперированных в другом центре с неудовлетворительным результатом'
      ],
      comparison: {
        title: 'Дистальная и проксимальная формы: ожидания различаются',
        columns: ['Критерий', 'Дистальная (у кончика)', 'Проксимальная (у основания)'],
        rows: [
          { label: 'Длительность операции', values: ['Короче', 'Дольше'] },
          { label: 'Число этапов', values: ['Обычно один', 'Часто планируют два'] },
          { label: 'Устранение искривления', values: ['Обычно достаточно ограниченного приёма', 'Требуется более объёмная коррекция'] },
          { label: 'Потребность в дополнительной ткани', values: ['Обычно нет', 'Возможен трансплантат или дополнительное укрытие'] },
          { label: 'Вероятность свища', values: ['Ниже', 'Выше'] },
          { label: 'Срок катетера', values: ['Короче', 'Дольше'] },
          { label: 'Пребывание в Турции', values: ['Короче', 'Планируется дольше'] }
        ],
        note: 'Эта таблица не рейтинг, а настройка ожиданий. Более высокая вероятность второй операции при проксимальной форме — не неудача, а особенность самой проблемы. Если вы приезжаете из-за рубежа, закладывайте такую возможность в планы заранее.'
      },
      recovery: [
        { period: 'Первые 48 часов', body: 'Ожидаются отёк и кровоподтёки. Боль обычно снимается простыми обезболивающими. Дают много жидкости. Повышение температуры, промокшая повязка или отсутствие оттока по катетеру требуют немедленного обращения.' },
        { period: '1-я неделя', body: 'Ребёнок отдыхает дома. У детей в подгузниках подгузник не должен давить на повязку. Исключают велосипед, каталки и ношение верхом на бедре.' },
        { period: 'После удаления катетера', body: 'Первые мочеиспускания могут сопровождаться жжением. Струя должна быть единой и направленной вперёд. О разбрызгивании или подтекании нужно сообщить.' },
        { period: '2–4-я неделя', body: 'Возвращение в сад или школу обычно приходится на этот период. Активные игры и спорт откладывают чуть дольше. Рубцы сейчас выглядят красными и бледнеют за месяцы.' },
        { period: '3–6-й месяц', body: 'Внешний вид окончательно формируется. До этого срока окончательных выводов о косметическом результате не делают.' },
        { period: 'Половое созревание', body: 'По мере роста повторно оценивают искривление и ширину канала. Контроль в этот период у мальчика, оперированного в детстве, — обычная практика, а не плохой знак.' }
      ],
      price: {
        from: 0,
        to: 0,
        currency: 'EUR',
        disclaimer:
          'Сумма зависит от формы гипоспадии, от того, планируется один или два этапа, от необходимости трансплантата и от длительности пребывания в стационаре. Постатейное письменное предложение даётся после изучения документов вашего ребёнка.'
      },
      packageIncludes: [
        'Осмотр и детская урологическая оценка',
        'Анализы крови и мочи, посев мочи',
        'Консультация детского анестезиолога',
        'Операционная и анестезия',
        'Хирургические расходные материалы и шовный материал',
        'Пребывание в стационаре (ребёнок и один родитель)',
        'Перевязки и удаление катетера',
        'Трансферы аэропорт — больница — отель',
        'Проживание (ребёнок и сопровождающий)',
        'Медицинский переводчик и координатор пациента',
        'Дистанционное наблюдение после возвращения'
      ],
      faqs: [
        { q: 'У сына гипоспадия — можно ли сделать обрезание?', a: 'До коррекции нельзя. Крайняя плоть — самая подходящая ткань для реконструкции; после её удаления эта возможность теряется и может потребоваться трансплантат слизистой щеки. Обрезание обычно планируют во время коррекции или после неё.' },
        { q: 'В каком возрасте оперировать?', a: 'В руководствах чаще всего называют 6–18 месяцев: ребёнок не запомнит операцию, а заживление идёт быстро. Коррекция возможна и у мальчиков постарше, и у взрослых: «поздно» не бывает, бывает другой план.' },
        { q: 'Хватит ли одной операции?', a: 'При большинстве дистальных форм — да. При проксимальных чаще планируют два этапа. Ни один хирург не может гарантировать окончательный результат за одну операцию; выбирайте центр, который заранее обсуждает с вами возможность второй.' },
        { q: 'Что делать, если образуется свищ?', a: 'Небольшие свищи иногда закрываются сами. Если нет, несколько месяцев дают тканям стать мягче и закрывают свищ небольшой операцией. Оперировать сразу, по воспалённой и отёчной ткани, обычно ухудшает результат.' },
        { q: 'Сможет ли он мочиться стоя?', a: 'Это первая цель операции: моча выходит вперёд единой струёй. Достигнута ли она, оценивают наблюдением после удаления катетера.' },
        { q: 'Пострадает ли в будущем сексуальная функция?', a: 'Одна из целей операции — прямой половой член, и это прямо связано с будущей сексуальной функцией. По мере роста в период полового созревания искривление может потребовать повторной оценки. Знать об этом сейчас лучше, чем столкнуться неожиданно.' },
        { q: 'Беспокоит ли катетер?', a: 'Дети переносят его легче, чем ожидают родители. Катетер обычно свободно оттекает в подгузник; мочеприёмник в большинстве случаев не нужен. Назначают препараты от боли и спазмов мочевого пузыря.' },
        { q: 'Его оперировали в другом месте — можно ли переделать?', a: 'Да. Повторные операции сложнее: ткань рубцовая, а крайняя плоть обычно уже использована, поэтому в ход идёт трансплантат слизистой щеки. Привезите протоколы прежних операций и фотографии, если они есть.' },
        { q: 'Сколько нужно пробыть в Турции?', a: 'Поскольку удаление катетера и первый контроль проводятся здесь, обычно планируют 10–14 дней. При проксимальных формах срок может быть больше. Не планируйте обратный рейс на следующий день после удаления катетера.' },
        { q: 'Останется ли рубец?', a: 'Любой разрез оставляет рубец. Задача — чтобы он шёл по естественным линиям кожи и побледнел. Краснота в первые месяцы нормальна; окончательная оценка — через 3–6 месяцев.' },
        { q: 'Не вредна ли анестезия ребёнку?', a: 'Детская анестезия использует дозы и мониторинг, рассчитанные на ребёнка; поэтому предоперационная консультация анестезиолога — отдельный этап. Полностью сообщите о перенесённых болезнях, аллергиях и принимаемых препаратах.' },
        { q: 'Какие документы прислать?', a: 'Протоколы прежних операций и выписки, свежий анализ мочи, короткое видео мочеиспускания и фотографию области. По ним форму и вероятное число этапов можно оценить до вашего приезда.' }
      ],
      sources: [
        {
          label: 'Рекомендации EAU/ESPU по детской урологии — Европейская ассоциация урологии',
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
