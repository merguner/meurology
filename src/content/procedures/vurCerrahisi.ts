import type { Treatment } from '../types';

/**
 * ÇOCUKLARDA VEZİKOÜRETERAL REFLÜ (VUR) CERRAHİSİ — yeni sayfa (Görev 7).
 *
 * reviewStatus: 'reviewed' — hekim onayı alındı (Dr. Ergün, 6 Ekim 2026).
 * Kaynak: EAU/ESPU Paediatric Urology kılavuzu.
 * Derece bazlı yüzde/başarı oranı YAZILMAMIŞTIR.
 */
export const vurCerrahisi: Treatment = {
  slug: 'vur-cerrahisi',
  procedure: { type: 'SurgicalProcedure', bodyLocation: 'Ureter' },
  parent: 'cocuk-urolojisi',
  icon: 'kidney',
  reviewStatus: 'reviewed',

  lastReviewed: '2026-10-06',
  offersConsultation: false,
  i18n: {
    tr: {
      title: 'Çocuklarda Vezikoüreteral Reflü (VUR) Cerrahisi',
      summary:
        'İdrarın mesaneden böbreğe geri kaçması olan reflüde asıl amaç reflüyü "kapatmak" değil, böbreği korumaktır. Çocukların önemli bir bölümünde reflü büyümeyle kendiliğinden düzelir; cerrahi, bunu bekleyemeyeceğimiz durumlar içindir.',
      metaTitle: 'Vezikoüreteral Reflü Cerrahisi: Ne Zaman Gerekir',
      metaDescription:
        'Çocuklarda vezikoüreteral reflü: hangi derecede izlenir, hangi durumda ameliyat gerekir, endoskopik enjeksiyon ile açık reimplantasyon farkı, riskler ve iyileşme süreci.',
      quickFacts: {
        duration: '20–40 dakika (endoskopik) / 60–120 dakika (açık)',
        anesthesia: 'Genel anestezi',
        hospitalStay: 'Günübirlik (endoskopik) – 2 gece (açık)',
        stayInTurkey: '7–12 gün',
        catheter: 'Yok (endoskopik) – 1–3 gün (açık)',
        returnToWork: 'Kreş/okula dönüş 1–3 hafta',
        flightClearance: 'Kontrol muayenesinden sonra'
      },
      definition: [
        'Vezikoüreteral reflü (VUR), idrarın mesaneden yukarı doğru, üreter ve böbreğe geri kaçmasıdır. Normalde üreterin mesane duvarındaki seyri bir kapak gibi çalışır ve geri kaçışı engeller. Bu mekanizma yeterince gelişmemişse veya mesane içi basınç yüksekse reflü ortaya çıkar.',
        'REFLÜNÜN KENDİSİ ACI VERMEZ. Çoğu çocukta reflü, ateşli bir idrar yolu enfeksiyonu araştırılırken bulunur. Asıl tehlike reflü değil, reflü ile birlikte yukarı taşınan enfeksiyondur: böbrek dokusunda iz (skar) bırakabilir ve bu iz geri dönmez. Tedavi hedefi bu nedenle "reflüyü kapatmak" değil, BÖBREĞİ KORUMAKTIR.',
        'Reflü derecelendirilir: hafif derecelerde idrar yalnızca üretere kaçar; ileri derecelerde böbrek toplayıcı sistemine kadar ulaşır ve üreteri genişletir. Derece ne kadar düşükse çocuk büyüdükçe kendiliğinden düzelme ihtimali o kadar yüksektir. Bu yüzden birçok çocukta ilk yaklaşım ameliyat değil izlemdir.',
        'İZLEM "HİÇBİR ŞEY YAPMAMAK" DEĞİLDİR. İzlem; düzenli idrar takibi, ateşli enfeksiyonların zaman kaybetmeden tedavi edilmesi, kabızlığın giderilmesi, işeme alışkanlıklarının düzeltilmesi ve gerekli görülen çocuklarda koruyucu antibiyotik kullanımını içerir. Bu basamaklar atlanırsa cerrahi de beklenen faydayı vermez.',
        'MESANE VE BAĞIRSAK İŞLEV BOZUKLUĞU GÖZDEN KAÇAN NEDENDİR. Kabızlık, idrarı tutma alışkanlığı ve mesanenin aşırı aktif çalışması, mesane içi basıncı yükselterek hem reflüyü sürdürür hem de enfeksiyonu kolaylaştırır. Tuvalet alışkanlıkları düzeltilmeden yapılan bir ameliyatın sonucu daha kötüdür. Bu, ailelere açıkça anlatılması gereken bir noktadır.',
        'Cerrahi; ateşli enfeksiyonlar koruyucu tedaviye rağmen tekrarlıyorsa, böbrekte yeni iz gelişiyorsa, reflü ileri derecedeyse ve yaşla düzelme beklentisi düşükse ya da aile için izlem sürdürülebilir değilse gündeme gelir. İki ana yöntem vardır: idrar yolundan girilerek yapılan endoskopik enjeksiyon ve üreterin mesaneye yeniden ağızlaştırıldığı reimplantasyon ameliyatı.',
        'Hangi yöntemin seçileceği reflünün derecesine, üreterin genişliğine, daha önce girişim yapılıp yapılmadığına ve mesanenin durumuna göre belirlenir. Endoskopik yöntem daha az girişimseldir ve kesi gerektirmez; reimplantasyon daha kesin sonuç verme eğilimindedir ama daha büyük bir ameliyattır. Doğru soru "hangisi daha iyi" değil, "bu çocuk için hangisi uygun" sorusudur.'
      ],
      eligibility: {
        suitable: [
          'Koruyucu tedaviye rağmen ateşli idrar yolu enfeksiyonu tekrarlayan çocuklar',
          'Sintigrafide böbrekte yeni iz (skar) gelişimi gösterilen çocuklar',
          'İleri dereceli reflüsü olan ve kendiliğinden düzelme beklentisi düşük çocuklar',
          'Büyüme çağı ilerlediği hâlde reflüsü devam eden çocuklar',
          'Koruyucu antibiyotik kullanımı sürdürülemeyen veya uyum sağlanamayan aileler',
          'Daha önce endoskopik enjeksiyon yapılmış ancak reflüsü devam eden çocuklar'
        ],
        notSuitable: [
          'Düşük dereceli, enfeksiyon geçirmeyen ve böbreği etkilenmemiş çocuklar — izlem doğru seçenektir',
          'Mesane ve bağırsak işlev bozukluğu (kabızlık, işeme bozukluğu) henüz düzeltilmemiş çocuklar: önce bu düzeltilir',
          'Aktif idrar yolu enfeksiyonu olan çocuklar: önce enfeksiyon tedavi edilir',
          'Nörolojik nedenli mesane bozukluğu olan ve önce bu tablonun yönetilmesi gereken çocuklar'
        ]
      },
      technology: [
        'Çocuğa uygun çaplı sistoskopi seti',
        'Endoskopik enjeksiyon için dolgu (bulking) materyali',
        'İşeme sistoüretrografisi (VCUG) ile reflünün gösterilmesi ve derecelendirilmesi',
        'DMSA sintigrafisi ile böbrek izinin ve işlevinin değerlendirilmesi',
        'Ultrason ile böbrek ve üreter genişliğinin ölçümü',
        'Pediatrik anestezi ekibi ve çocuğa özel ağrı yönetimi'
      ],
      surgeonExperience: {
        caseVolume: '',
        note: 'Reflü cerrahisinde doğru kararın ağırlığı tekniğinkinden fazladır: izlenmesi gereken bir çocuğu ameliyat etmek de, böbreği etkilenen bir çocuğu beklemek de yanlıştır. Doç. Dr. Müslüm Ergün’ün üreter ve rekonstrüktif cerrahideki deneyimi, özellikle daha önce girişim yapılmış ve reflüsü devam eden olgularda yaklaşımın temelini oluşturur.'
      },
      timeline: [
        { when: 'Uzaktan', title: 'Belgelerin incelenmesi', body: 'İşeme sistoüretrografisi (VCUG) raporu ve mümkünse görüntüleri, DMSA sintigrafisi, böbrek ultrasonu, geçirilmiş ateşli enfeksiyonların kayıtları, idrar kültürleri ve kullanılan antibiyotikler incelenir. Bu belgeler olmadan derece ve böbrek durumu bilinemez; plan da yapılamaz.' },
        { when: '1. Gün', title: 'Muayene ve değerlendirme', body: 'Yüz yüze muayene, ultrason, idrar tahlili ve kültürü. Kabızlık ve işeme alışkanlıkları ayrıntılı sorgulanır — bu, ameliyat sonucunu doğrudan etkiler. Kültürde üreme varsa girişim ertelenir.' },
        { when: '2. Gün', title: 'Girişim', body: 'Endoskopik enjeksiyonda idrar yolundan girilir, üreterin mesaneye açıldığı noktanın altına dolgu materyali verilir ve kapak etkisi güçlendirilir; kesi yapılmaz. Reimplantasyonda üreter mesane duvarında yeni bir tünel içine yerleştirilir.' },
        { when: '2.–4. Gün', title: 'Taburculuk', body: 'Endoskopik girişimde çoğu çocuk aynı gün evine gider. Açık ameliyatta 1–2 gece kalınır; sonda konulduysa çıkarılma zamanı önceden anlatılır.' },
        { when: '4.–10. Gün', title: 'Kontrol', body: 'Yara iyileşmesi, idrar tahlili ve ultrason değerlendirilir. Dönüş uçuşu bu kontrolden sonraya planlanır.' },
        { when: '3.–6. ay', title: 'Sonuç değerlendirmesi', body: 'Reflünün kapanıp kapanmadığı, hekimin uygun gördüğü durumlarda tekrar görüntüleme ile değerlendirilir. Ateşli enfeksiyon olmaması da başlı başına önemli bir sonuç ölçütüdür.' }
      ],
      risks: [
        'GİRİŞİMİN REFLÜYÜ TAM KAPATMAMASI: Özellikle endoskopik enjeksiyonda reflü devam edebilir veya bir süre sonra geri dönebilir. Bu durumda ikinci bir enjeksiyon veya reimplantasyon gündeme gelir. Bu ihtimal baştan konuşulur',
        'ÜRETERDE GEÇİCİ TIKANIKLIK: Enjeksiyon veya reimplantasyon sonrası üreterin ağız kısmında ödem ya da daralma gelişebilir; böbrekte genişleme ve yan ağrısı yapabilir. Çoğu geçicidir, az sayıda çocukta ek girişim gerekir',
        'Ameliyat sonrası idrar yolu enfeksiyonu',
        'İdrarda kan ve işerken yanma — ilk günlerde beklenen bulgulardır',
        'Açık ameliyatta mesane spazmları ve buna bağlı huzursuzluk; ilaçla kontrol edilir',
        'Yara yeri enfeksiyonu ve açık ameliyatta kalıcı kesi izi',
        'REFLÜ KAPANSA BİLE BÖBREKTEKİ ESKİ İZİN GERİ DÖNMEMESİ: Ameliyat yeni hasarı önler, var olan izi düzeltmez. Bu, en sık yanlış anlaşılan noktadır',
        'Genel anesteziye bağlı riskler'
      ],
      alternatives: [
        'İzlem — düşük dereceli ve enfeksiyon geçirmeyen çocuklarda ilk ve çoğu zaman en doğru seçenek; düzenli idrar ve ultrason takibiyle yürütülür',
        'Koruyucu (profilaktik) antibiyotik — seçilmiş çocuklarda ateşli enfeksiyonu önlemek için',
        'Mesane ve bağırsak işlev bozukluğunun tedavisi — kabızlığın giderilmesi, işeme eğitimi, düzenli tuvalet saatleri; cerrahiden önce gelir',
        'Endoskopik enjeksiyon — kesi yapılmadan uygulanan, günübirlik yöntem',
        'Üreteroneosistostomi (reimplantasyon) — açık veya laparoskopik; daha kesin sonuç eğilimi, daha büyük ameliyat',
        'Sünnet — tekrarlayan enfeksiyon geçiren seçilmiş erkek bebeklerde enfeksiyon riskini azaltmak amacıyla değerlendirilebilir'
      ],
      comparison: {
        title: 'Endoskopik enjeksiyon ve reimplantasyon: dengeyi birlikte seçelim',
        columns: ['Ölçüt', 'Endoskopik enjeksiyon', 'Reimplantasyon (açık)'],
        rows: [
          { label: 'Kesi', values: ['Yok — idrar yolundan', 'Var — alt karın bölgesinde'] },
          { label: 'İşlem süresi', values: ['Kısa', 'Daha uzun'] },
          { label: 'Hastanede kalış', values: ['Genellikle günübirlik', '1–2 gece'] },
          { label: 'Sonda', values: ['Genellikle gerekmez', 'Kısa süre gerekebilir'] },
          { label: 'Reflünün kapanma eğilimi', values: ['Daha düşük; tekrar gerekebilir', 'Daha yüksek'] },
          { label: 'Tekrar girişim ihtimali', values: ['Daha yüksek', 'Daha düşük'] },
          { label: 'İyileşme süresi', values: ['Birkaç gün', '2–3 hafta'] },
          { label: 'İleri derecede uygunluk', values: ['Sınırlı', 'Daha uygun'] }
        ],
        note: 'Bu tablo bir sıralama değildir. Endoskopik yöntem çocuğa daha az yük bindirir ama tekrar gerekme ihtimali daha yüksektir; reimplantasyon daha kesin sonuca yönelir ama daha büyük bir ameliyattır. Yurt dışından geliyorsanız, ikinci bir seyahat ihtimalini bu kararda ayrıca tartın.'
      },
      recovery: [
        { period: 'İlk 24–48 saat', body: 'İdrarda kan ve işerken yanma olağandır. Bol sıvı verilir. Ateş, idrar yapamama veya şiddetli yan ağrısı durumunda derhal başvurulmalıdır.' },
        { period: '1. hafta', body: 'Endoskopik girişimden sonra çocuk hızla normal yaşamına döner. Açık ameliyatta mesane spazmları görülebilir ve ilaçla kontrol edilir; ağır aktiviteden kaçınılır.' },
        { period: '2.–3. hafta', body: 'Açık ameliyat sonrası kreş veya okula dönüş genellikle bu dönemdedir. Bisiklet ve temaslı oyunlar biraz daha ertelenir.' },
        { period: '1.–3. ay', body: 'İdrar tahlili ve ultrason ile kontrol yapılır. Ateşli enfeksiyon olmaması olumlu bir göstergedir.' },
        { period: 'Uzun dönem', body: 'Böbrekte iz olan çocuklarda tansiyon ve böbrek işlevi yıllar boyunca aralıklı izlenir. Kız çocuklarında ileride gebelik döneminde idrar yolu enfeksiyonu açısından dikkatli olunması gerektiği hatırlatılır.' }
      ],
      price: {
        from: 0,
        to: 0,
        currency: 'EUR',
        disclaimer:
          'Tutar; seçilen yönteme (endoskopik veya açık), tek mi iki taraflı mı olduğuna ve hastanede kalış süresine göre değişir. Kalem kalem ayrılmış yazılı teklif, çocuğunuzun belgeleri incelendikten sonra verilir.'
      },
      packageIncludes: [
        'Muayene ve çocuk ürolojisi değerlendirmesi',
        'Ultrason ve gerekli görülen görüntüleme',
        'Kan ve idrar tetkikleri, idrar kültürü',
        'Pediatrik anestezi değerlendirmesi',
        'Ameliyathane, anestezi ve sarf malzemeleri',
        'Endoskopik yöntemde dolgu materyali',
        'Hastane yatışı (çocuk + 1 refakatçi)',
        'Taburculuk sonrası kontrol muayenesi',
        'Havalimanı–hastane–otel transferleri',
        'Konaklama (çocuk + refakatçi)',
        'Tıbbi tercüman ve hasta koordinatörü',
        'Dönüşten sonra uzaktan takip'
      ],
      faqs: [
        { q: 'Reflü kendiliğinden düzelir mi?', a: 'Çocukların önemli bir bölümünde, özellikle düşük derecelerde, büyümeyle birlikte düzelir. Bu yüzden ilk yaklaşım çoğu zaman izlemdir. Derece yükseldikçe ve yaş ilerledikçe kendiliğinden düzelme ihtimali azalır.' },
        { q: 'Ameliyat olmazsak böbreği zarar görür mü?', a: 'Reflünün kendisi değil, reflü ile birlikte yukarı taşınan ATEŞLİ enfeksiyon böbrekte iz bırakabilir. Enfeksiyon geçirmeyen bir çocukta risk belirgin olarak düşüktür. Bu nedenle izlem planında asıl iş enfeksiyonu önlemektir.' },
        { q: 'Neden önce kabızlığı tedavi ediyorsunuz?', a: 'Çünkü kabızlık ve işeme bozukluğu mesane içi basıncı yükselterek hem reflüyü sürdürür hem de enfeksiyonu kolaylaştırır. Bunlar düzeltilmeden yapılan ameliyatın sonucu daha kötüdür. Bu, sık atlanan ama sonucu doğrudan belirleyen bir basamaktır.' },
        { q: 'Endoskopik enjeksiyon tek seferde yeterli olur mu?', a: 'Her zaman değil. Reflü devam edebilir veya bir süre sonra geri dönebilir; bu durumda ikinci bir enjeksiyon ya da reimplantasyon gündeme gelir. Bu ihtimali baştan konuşmayan bir plan eksiktir.' },
        { q: 'Ameliyattan sonra antibiyotik kullanmaya devam edecek mi?', a: 'Genellikle bir süre daha devam edilir, sonra kontrol sonuçlarına göre kesilir. Kararı tek başına siz vermeyin; ateşli enfeksiyon öyküsü olan çocuklarda bu geçiş planlı yapılır.' },
        { q: 'Böbreğindeki iz düzelir mi?', a: 'Hayır. Ameliyat yeni hasarı önler, var olan izi geri döndürmez. En sık yanlış anlaşılan nokta budur ve bu yüzden kararı zamanında vermek önemlidir.' },
        { q: 'Tekrar film (VCUG) çekilecek mi?', a: 'Her çocukta rutin olarak değil. Girişim sonrası kontrol görüntülemesi; reflünün derecesine, yapılan işleme ve çocuğun seyrine göre hekim tarafından kararlaştırılır. Gereksiz radyasyon ve sonda takılmasından kaçınılır.' },
        { q: 'Kardeşlerinde de olabilir mi?', a: 'Reflünün ailesel yatkınlık gösterebildiği bilinmektedir. Kardeşlerde idrar yolu enfeksiyonu öyküsü varsa bunu hekiminize söyleyin; her kardeşe rutin tarama yapılması ise gerekli değildir.' },
        { q: 'Türkiye’de ne kadar kalmalıyız?', a: 'Endoskopik girişimde genellikle 7 gün, açık ameliyatta 10–12 gün planlanır. Kontrol muayenesi burada yapıldığı için dönüş uçuşunu bu muayeneden sonraya planlayın.' },
        { q: 'Hangi belgeleri göndermeliyiz?', a: 'İşeme sistoüretrografisi (VCUG) raporu ve mümkünse görüntüleri, DMSA sintigrafisi sonucu, böbrek ultrasonu, geçirilmiş ateşli enfeksiyonların tarihleri, idrar kültürleri ve kullanılan antibiyotikler. Bunlar olmadan derece ve böbrek durumu bilinemez.' },
        { q: 'Çocuğum sünnetli değil, bunun etkisi var mı?', a: 'Tekrarlayan idrar yolu enfeksiyonu geçiren seçilmiş erkek bebeklerde sünnetin enfeksiyon riskini azaltmaya katkısı değerlendirilebilir. Bu, her çocuk için verilen genel bir öneri değildir; kararı kendi tablonuza göre hekiminizle konuşun.' }
      ],
      sources: [
        {
          label: 'EAU/ESPU Guidelines on Paediatric Urology — Avrupa Üroloji Derneği',
          url: 'https://uroweb.org/guidelines/paediatric-urology'
        }
      ]
    },
    en: {
      title: 'Vesicoureteral Reflux (VUR) Surgery in Children',
      summary:
        'In reflux — urine flowing backwards from the bladder to the kidney — the real aim is not to "close the reflux" but to protect the kidney. In a large proportion of children reflux resolves as they grow; surgery is for the situations in which we cannot wait for that.',
      metaTitle: 'Vesicoureteral Reflux Surgery: When It Is Needed',
      metaDescription:
        'Vesicoureteral reflux in children: which grades are observed, when surgery is needed, endoscopic injection versus open reimplantation, risks and recovery.',
      quickFacts: {
        duration: '20–40 minutes (endoscopic) / 60–120 minutes (open)',
        anesthesia: 'General anaesthesia',
        hospitalStay: 'Day case (endoscopic) – 2 nights (open)',
        stayInTurkey: '7–12 days',
        catheter: 'None (endoscopic) – 1–3 days (open)',
        returnToWork: 'Back to nursery or school in 1–3 weeks',
        flightClearance: 'After the review appointment'
      },
      definition: [
        'Vesicoureteral reflux (VUR) is the backward flow of urine from the bladder up the ureter towards the kidney. Normally the way the ureter runs through the bladder wall acts as a valve and prevents this. Where that mechanism has not developed sufficiently, or where pressure inside the bladder is high, reflux occurs.',
        'REFLUX ITSELF DOES NOT HURT. In most children it is found while investigating a urinary infection with fever. The danger is not the reflux but the infection carried upwards with it: it can leave a scar in the kidney, and that scar does not reverse. The aim of treatment is therefore not to "close the reflux" but to PROTECT THE KIDNEY.',
        'Reflux is graded: in mild grades urine passes only into the ureter; in higher grades it reaches the collecting system of the kidney and dilates the ureter. The lower the grade, the greater the chance of spontaneous resolution as the child grows. That is why the first approach in many children is observation rather than surgery.',
        'OBSERVATION IS NOT "DOING NOTHING". It means regular urine checks, treating febrile infections without delay, relieving constipation, correcting voiding habits, and — in selected children — preventive antibiotics. If these steps are skipped, surgery will not deliver the expected benefit either.',
        'BLADDER AND BOWEL DYSFUNCTION IS THE CAUSE MOST OFTEN MISSED. Constipation, the habit of holding urine, and an overactive bladder raise the pressure inside the bladder, which both sustains the reflux and makes infection easier. An operation carried out before toilet habits are corrected produces a worse result. This must be said plainly to families.',
        'Surgery comes into consideration when febrile infections recur despite preventive measures, when a new scar develops in the kidney, when the reflux is high grade with little prospect of resolving with age, or when observation is not sustainable for the family. There are two main approaches: endoscopic injection through the urinary passage, and reimplantation, in which the ureter is re-joined to the bladder.',
        'Which is chosen depends on the grade, the width of the ureter, whether a procedure has already been performed, and the state of the bladder. The endoscopic route is less invasive and requires no incision; reimplantation tends towards a more definitive result but is a larger operation. The right question is not "which is better" but "which suits this child".'
      ],
      eligibility: {
        suitable: [
          'Children with recurrent febrile urinary infections despite preventive treatment',
          'Children in whom scintigraphy shows a new kidney scar',
          'Children with high-grade reflux and little prospect of spontaneous resolution',
          'Children whose reflux persists despite advancing age',
          'Families for whom preventive antibiotics are not sustainable or adherence is poor',
          'Children who have already had endoscopic injection but whose reflux persists'
        ],
        notSuitable: [
          'Children with low-grade reflux, no infections and an unaffected kidney — observation is the right option',
          'Children whose bladder and bowel dysfunction (constipation, voiding disorder) has not yet been corrected: that comes first',
          'Children with an active urinary infection: the infection is treated first',
          'Children with neurogenic bladder dysfunction, in whom that picture must be managed first'
        ]
      },
      technology: [
        'Child-calibre cystoscopy set',
        'Bulking material for endoscopic injection',
        'Voiding cystourethrography (VCUG) to demonstrate and grade the reflux',
        'DMSA scintigraphy to assess kidney scarring and function',
        'Ultrasound measurement of kidney and ureteric dilatation',
        'Paediatric anaesthetic team and child-specific pain management'
      ],
      surgeonExperience: {
        caseVolume: '',
        note: 'In reflux surgery the soundness of the decision weighs more than the technique: operating on a child who should be observed is as wrong as waiting with a child whose kidney is being affected. Assoc. Prof. Dr. Müslüm Ergün’s experience in ureteric and reconstructive surgery underpins the approach, particularly where a procedure has already been performed and reflux persists.'
      },
      timeline: [
        { when: 'Remotely', title: 'Review of documents', body: 'The VCUG report and, where possible, its images, DMSA scintigraphy, kidney ultrasound, records of past febrile infections, urine cultures and the antibiotics used are reviewed. Without these the grade and the state of the kidney cannot be known, and no plan can be made.' },
        { when: 'Day 1', title: 'Examination and assessment', body: 'Examination, ultrasound, urinalysis and culture. Constipation and voiding habits are asked about in detail, because they directly affect the result. If the culture grows an organism, the procedure is postponed.' },
        { when: 'Day 2', title: 'Procedure', body: 'In endoscopic injection the bladder is entered through the urinary passage and bulking material is placed beneath the point where the ureter opens, strengthening the valve effect; no incision is made. In reimplantation the ureter is placed within a new tunnel in the bladder wall.' },
        { when: 'Days 2–4', title: 'Discharge', body: 'After an endoscopic procedure most children go home the same day. After open surgery the stay is 1–2 nights; if a catheter is placed, the timing of removal is explained in advance.' },
        { when: 'Days 4–10', title: 'Review', body: 'Wound healing, urinalysis and ultrasound are assessed. The return flight is planned for after this review.' },
        { when: 'Months 3–6', title: 'Assessment of the result', body: 'Whether the reflux has resolved is assessed with repeat imaging where the surgeon judges it necessary. The absence of febrile infection is itself an important measure of success.' }
      ],
      risks: [
        'THE PROCEDURE MAY NOT FULLY RESOLVE THE REFLUX: particularly after endoscopic injection, reflux may persist or return after a time. A second injection or reimplantation then comes into consideration. This possibility is discussed from the outset',
        'TEMPORARY URETERIC OBSTRUCTION: swelling or narrowing can develop at the ureteric opening after injection or reimplantation, causing dilatation of the kidney and flank pain. Most settle; a small number of children need a further procedure',
        'Urinary infection after the procedure',
        'Blood in the urine and stinging on voiding — expected in the first days',
        'Bladder spasms and the distress they cause after open surgery; controlled with medication',
        'Wound infection and, after open surgery, a permanent scar',
        'EVEN IF THE REFLUX RESOLVES, EXISTING KIDNEY SCARRING DOES NOT REVERSE: surgery prevents new damage, it does not repair old scars. This is the most commonly misunderstood point',
        'Risks of general anaesthesia'
      ],
      alternatives: [
        'Observation — the first and often the most appropriate option in low-grade reflux without infection, with regular urine and ultrasound checks',
        'Preventive (prophylactic) antibiotics — in selected children, to prevent febrile infection',
        'Treatment of bladder and bowel dysfunction — relieving constipation, voiding retraining, regular toilet times; this comes before surgery',
        'Endoscopic injection — a day-case method with no incision',
        'Ureteroneocystostomy (reimplantation) — open or laparoscopic; tends towards a more definitive result but is a larger operation',
        'Circumcision — may be considered in selected boys with recurrent infection as a means of reducing infection risk'
      ],
      comparison: {
        title: 'Endoscopic injection and reimplantation: choosing the trade-off together',
        columns: ['Criterion', 'Endoscopic injection', 'Reimplantation (open)'],
        rows: [
          { label: 'Incision', values: ['None — via the urinary passage', 'Yes — in the lower abdomen'] },
          { label: 'Procedure time', values: ['Short', 'Longer'] },
          { label: 'Hospital stay', values: ['Usually day case', '1–2 nights'] },
          { label: 'Catheter', values: ['Usually not needed', 'May be needed briefly'] },
          { label: 'Tendency to resolve the reflux', values: ['Lower; repetition may be needed', 'Higher'] },
          { label: 'Chance of a further procedure', values: ['Higher', 'Lower'] },
          { label: 'Recovery', values: ['A few days', '2–3 weeks'] },
          { label: 'Suitability for high grades', values: ['Limited', 'More suitable'] }
        ],
        note: 'This table is not a ranking. The endoscopic route places less burden on the child but is more likely to need repeating; reimplantation aims at a more definitive result but is a larger operation. If you are travelling from abroad, weigh the possibility of a second journey in that decision.'
      },
      recovery: [
        { period: 'First 24–48 hours', body: 'Blood in the urine and stinging on voiding are usual. Plenty of fluids are given. Fever, inability to pass urine or severe flank pain require immediate contact.' },
        { period: 'Week 1', body: 'After an endoscopic procedure the child returns to normal life quickly. After open surgery bladder spasms may occur and are controlled with medication; strenuous activity is avoided.' },
        { period: 'Weeks 2–3', body: 'Return to nursery or school after open surgery usually falls in this period. Cycling and contact play wait a little longer.' },
        { period: 'Months 1–3', body: 'Urinalysis and ultrasound are reviewed. The absence of febrile infection is a favourable sign.' },
        { period: 'Long term', body: 'In children with kidney scarring, blood pressure and kidney function are followed intermittently for years. Girls are reminded that particular care is needed regarding urinary infection during a future pregnancy.' }
      ],
      price: {
        from: 0,
        to: 0,
        currency: 'EUR',
        disclaimer:
          'The amount depends on the method chosen (endoscopic or open), on whether one or both sides are treated, and on the length of hospital stay. An itemised written quotation is given once your child’s documents have been reviewed.'
      },
      packageIncludes: [
        'Examination and paediatric urology assessment',
        'Ultrasound and any imaging required',
        'Blood and urine tests, urine culture',
        'Paediatric anaesthetic assessment',
        'Operating theatre, anaesthesia and consumables',
        'Bulking material in the endoscopic method',
        'Hospital stay (child plus one parent)',
        'Review appointment after discharge',
        'Airport–hospital–hotel transfers',
        'Accommodation (child and accompanying parent)',
        'Medical interpreter and patient coordinator',
        'Remote follow-up after you return home'
      ],
      faqs: [
        { q: 'Does reflux resolve on its own?', a: 'In a large proportion of children, particularly at low grades, it resolves with growth. That is why observation is often the first approach. As the grade rises and the child gets older, the chance of spontaneous resolution falls.' },
        { q: 'Will the kidney be harmed if we do not operate?', a: 'It is not the reflux itself but the FEBRILE infection carried upwards with it that can scar the kidney. In a child who does not get infections the risk is markedly lower. The real work of an observation plan is therefore preventing infection.' },
        { q: 'Why do you treat the constipation first?', a: 'Because constipation and voiding disorder raise pressure inside the bladder, which both sustains the reflux and makes infection easier. An operation performed before they are corrected gives a worse result. This step is often skipped yet it directly determines the outcome.' },
        { q: 'Will one endoscopic injection be enough?', a: 'Not always. Reflux may persist or return after a time, in which case a second injection or reimplantation comes into consideration. A plan that does not discuss this possibility from the outset is incomplete.' },
        { q: 'Will he keep taking antibiotics after surgery?', a: 'Usually for a further period, then stopped according to the review results. Do not make that decision alone; in children with a history of febrile infection the transition is planned.' },
        { q: 'Will the scar on the kidney heal?', a: 'No. Surgery prevents new damage; it does not reverse existing scarring. This is the most commonly misunderstood point, and it is why making the decision in good time matters.' },
        { q: 'Will another VCUG be done?', a: 'Not routinely in every child. Whether imaging is repeated after the procedure is decided by the surgeon according to the grade, the procedure performed and the child’s course. Unnecessary radiation and catheterisation are avoided.' },
        { q: 'Could his siblings have it too?', a: 'Reflux is known to show a familial tendency. If a sibling has a history of urinary infection, tell your doctor; routine screening of every sibling, however, is not required.' },
        { q: 'How long should we stay in Türkiye?', a: 'Usually 7 days for an endoscopic procedure and 10–12 days for open surgery. Because the review is carried out here, plan the return flight for after that appointment.' },
        { q: 'What documents should we send?', a: 'The VCUG report and, where possible, its images, the DMSA result, kidney ultrasound, the dates of past febrile infections, urine cultures and the antibiotics used. Without these the grade and the state of the kidney cannot be known.' },
        { q: 'My son is not circumcised — does that matter?', a: 'In selected boys with recurrent urinary infection, circumcision may be considered as a way of reducing infection risk. It is not a general recommendation for every child; discuss it with your doctor in the light of your own situation.' }
      ],
      sources: [
        {
          label: 'EAU/ESPU Guidelines on Paediatric Urology — European Association of Urology',
          url: 'https://uroweb.org/guidelines/paediatric-urology'
        }
      ]
    },
    de: {
      title: 'Operation bei vesikoureteralem Reflux (VUR) im Kindesalter',
      summary:
        'Beim Reflux — dem Rückfluss von Urin aus der Blase zur Niere — geht es nicht darum, den Reflux zu „schließen", sondern die Niere zu schützen. Bei einem großen Teil der Kinder bildet sich der Reflux mit dem Wachstum zurück; operiert wird dort, wo man das nicht abwarten kann.',
      metaTitle: 'Reflux-Operation bei Kindern: wann sie nötig ist',
      metaDescription:
        'Vesikoureteraler Reflux bei Kindern: welche Grade beobachtet werden, wann operiert wird, endoskopische Injektion gegenüber offener Reimplantation, Risiken und Heilungsverlauf.',
      quickFacts: {
        duration: '20–40 Minuten (endoskopisch) / 60–120 Minuten (offen)',
        anesthesia: 'Vollnarkose',
        hospitalStay: 'Ambulant (endoskopisch) – 2 Nächte (offen)',
        stayInTurkey: '7–12 Tage',
        catheter: 'Keiner (endoskopisch) – 1–3 Tage (offen)',
        returnToWork: 'Rückkehr in Kita oder Schule nach 1–3 Wochen',
        flightClearance: 'Nach der Kontrolluntersuchung'
      },
      definition: [
        'Vesikoureteraler Reflux (VUR) ist der Rückfluss von Urin aus der Blase über den Harnleiter in Richtung Niere. Normalerweise wirkt der Verlauf des Harnleiters in der Blasenwand wie ein Ventil und verhindert das. Ist dieser Mechanismus nicht ausreichend ausgebildet oder ist der Druck in der Blase hoch, entsteht ein Reflux.',
        'DER REFLUX SELBST TUT NICHT WEH. Bei den meisten Kindern wird er bei der Abklärung eines fieberhaften Harnwegsinfekts gefunden. Die Gefahr geht nicht vom Reflux aus, sondern von der mit ihm nach oben getragenen Infektion: Sie kann eine Narbe in der Niere hinterlassen, und diese Narbe bildet sich nicht zurück. Ziel der Behandlung ist deshalb nicht, den Reflux zu „schließen", sondern DIE NIERE ZU SCHÜTZEN.',
        'Der Reflux wird eingeteilt: In niedrigen Graden gelangt Urin nur in den Harnleiter; in höheren erreicht er das Nierenbecken und weitet den Harnleiter. Je niedriger der Grad, desto größer die Chance auf spontane Rückbildung mit dem Wachstum. Deshalb steht bei vielen Kindern zunächst Beobachtung statt Operation.',
        'BEOBACHTUNG HEISST NICHT „NICHTS TUN". Sie umfasst regelmäßige Urinkontrollen, die unverzügliche Behandlung fieberhafter Infekte, die Behebung von Verstopfung, die Korrektur der Miktionsgewohnheiten und bei ausgewählten Kindern eine antibiotische Prophylaxe. Werden diese Schritte übersprungen, bringt auch eine Operation nicht den erwarteten Nutzen.',
        'DIE AM HÄUFIGSTEN ÜBERSEHENE URSACHE IST DIE BLASEN-DARM-FUNKTIONSSTÖRUNG. Verstopfung, das Zurückhalten des Urins und eine überaktive Blase erhöhen den Druck in der Blase; das unterhält den Reflux und erleichtert Infekte. Eine Operation vor Korrektur der Toilettengewohnheiten führt zu einem schlechteren Ergebnis. Das muss Familien deutlich gesagt werden.',
        'Eine Operation kommt in Betracht, wenn fieberhafte Infekte trotz Prophylaxe wiederkehren, wenn eine neue Nierennarbe entsteht, wenn ein hoher Reflux-Grad mit geringer Rückbildungsaussicht besteht oder wenn die Beobachtung für die Familie nicht durchzuhalten ist. Zwei Wege stehen im Vordergrund: die endoskopische Injektion über die Harnröhre und die Reimplantation, bei der der Harnleiter neu in die Blase eingepflanzt wird.',
        'Die Wahl richtet sich nach dem Grad, der Weite des Harnleiters, früheren Eingriffen und dem Zustand der Blase. Der endoskopische Weg ist weniger eingreifend und benötigt keinen Schnitt; die Reimplantation zielt auf ein endgültigeres Ergebnis, ist aber die größere Operation. Die richtige Frage lautet nicht „was ist besser", sondern „was passt zu diesem Kind".'
      ],
      eligibility: {
        suitable: [
          'Kinder mit wiederkehrenden fieberhaften Harnwegsinfekten trotz vorbeugender Behandlung',
          'Kinder, bei denen die Szintigraphie eine neue Nierennarbe zeigt',
          'Kinder mit hohem Reflux-Grad und geringer Aussicht auf spontane Rückbildung',
          'Kinder, deren Reflux trotz zunehmenden Alters fortbesteht',
          'Familien, für die eine antibiotische Prophylaxe nicht durchzuhalten ist',
          'Kinder nach endoskopischer Injektion mit fortbestehendem Reflux'
        ],
        notSuitable: [
          'Kinder mit niedrigem Grad, ohne Infekte und mit unauffälliger Niere — Beobachtung ist richtig',
          'Kinder, deren Blasen-Darm-Funktionsstörung noch nicht behandelt ist: das kommt zuerst',
          'Kinder mit aktivem Harnwegsinfekt: Der Infekt wird zuerst behandelt',
          'Kinder mit neurogener Blasenstörung, bei denen dieses Bild zuerst zu führen ist'
        ]
      },
      technology: [
        'Zystoskopie-Set in Kindergröße',
        'Bulking-Material für die endoskopische Injektion',
        'Miktionszystourethrographie (MCU) zum Nachweis und zur Gradeinteilung',
        'DMSA-Szintigraphie zur Beurteilung von Nierennarben und Funktion',
        'Ultraschall zur Messung der Nieren- und Harnleiterweite',
        'Kinderanästhesieteam und kindgerechte Schmerztherapie'
      ],
      surgeonExperience: {
        caseVolume: '',
        note: 'In der Refluxchirurgie wiegt die Richtigkeit der Entscheidung schwerer als die Technik: ein Kind zu operieren, das beobachtet gehört, ist ebenso falsch wie abzuwarten, während die Niere eines Kindes Schaden nimmt. Die Erfahrung von Doz. Dr. Müslüm Ergün in Harnleiter- und rekonstruktiver Chirurgie trägt den Ansatz, besonders bei bereits voroperierten Kindern mit fortbestehendem Reflux.'
      },
      timeline: [
        { when: 'Aus der Ferne', title: 'Sichtung der Unterlagen', body: 'MCU-Befund und möglichst die Bilder, DMSA-Szintigraphie, Nierenultraschall, Dokumentation früherer fieberhafter Infekte, Urinkulturen und verwendete Antibiotika werden gesichtet. Ohne diese sind Grad und Nierenzustand unbekannt und keine Planung möglich.' },
        { when: 'Tag 1', title: 'Untersuchung und Beurteilung', body: 'Untersuchung, Ultraschall, Urinbefund und Kultur. Verstopfung und Miktionsgewohnheiten werden eingehend erfragt, weil sie das Ergebnis unmittelbar beeinflussen. Wächst in der Kultur ein Erreger, wird verschoben.' },
        { when: 'Tag 2', title: 'Eingriff', body: 'Bei der endoskopischen Injektion wird über die Harnröhre eingegangen und unterhalb der Harnleitermündung Bulking-Material eingebracht, um die Ventilwirkung zu verstärken; ein Schnitt entfällt. Bei der Reimplantation wird der Harnleiter in einen neuen Tunnel in der Blasenwand gelegt.' },
        { when: 'Tag 2–4', title: 'Entlassung', body: 'Nach endoskopischem Eingriff gehen die meisten Kinder am selben Tag nach Hause. Nach offener Operation bleibt man 1–2 Nächte; wurde ein Katheter gelegt, wird der Zeitpunkt der Entfernung vorab erklärt.' },
        { when: 'Tag 4–10', title: 'Kontrolle', body: 'Wundheilung, Urinbefund und Ultraschall werden beurteilt. Der Rückflug wird nach diese Kontrolle gelegt.' },
        { when: 'Monat 3–6', title: 'Beurteilung des Ergebnisses', body: 'Ob der Reflux behoben ist, wird mit erneuter Bildgebung beurteilt, wenn der Operateur dies für nötig hält. Das Ausbleiben fieberhafter Infekte ist für sich genommen ein wichtiger Erfolgsmaßstab.' }
      ],
      risks: [
        'DER EINGRIFF BEHEBT DEN REFLUX MÖGLICHERWEISE NICHT VOLLSTÄNDIG: Besonders nach endoskopischer Injektion kann der Reflux fortbestehen oder nach einiger Zeit zurückkehren. Dann kommen eine zweite Injektion oder eine Reimplantation in Betracht. Diese Möglichkeit wird von Anfang an besprochen',
        'VORÜBERGEHENDE HARNLEITERENGE: Nach Injektion oder Reimplantation kann an der Mündung ein Ödem oder eine Enge entstehen, mit Erweiterung der Niere und Flankenschmerz. Meist vorübergehend; wenige Kinder brauchen einen weiteren Eingriff',
        'Harnwegsinfekt nach dem Eingriff',
        'Blut im Urin und Brennen beim Wasserlassen — in den ersten Tagen zu erwarten',
        'Blasenkrämpfe nach offener Operation und dadurch Unruhe; medikamentös beherrschbar',
        'Wundinfektion und nach offener Operation eine bleibende Narbe',
        'AUCH WENN DER REFLUX BEHOBEN IST, BILDET SICH EINE BESTEHENDE NIERENNARBE NICHT ZURÜCK: Die Operation verhindert neuen Schaden, sie repariert alte Narben nicht. Das ist der am häufigsten missverstandene Punkt',
        'Risiken der Vollnarkose'
      ],
      alternatives: [
        'Beobachtung — bei niedrigem Grad ohne Infekte die erste und oft richtigste Option, mit regelmäßigen Urin- und Ultraschallkontrollen',
        'Antibiotische Prophylaxe — bei ausgewählten Kindern zur Vermeidung fieberhafter Infekte',
        'Behandlung der Blasen-Darm-Funktionsstörung — Verstopfung beheben, Miktionstraining, feste Toilettenzeiten; das kommt vor der Chirurgie',
        'Endoskopische Injektion — ambulant und ohne Schnitt',
        'Ureteroneozystostomie (Reimplantation) — offen oder laparoskopisch; endgültigeres Ergebnis, größerer Eingriff',
        'Beschneidung — bei ausgewählten Jungen mit wiederkehrenden Infekten als Mittel zur Senkung des Infektrisikos erwägbar'
      ],
      comparison: {
        title: 'Endoskopische Injektion und Reimplantation: die Abwägung gemeinsam treffen',
        columns: ['Kriterium', 'Endoskopische Injektion', 'Reimplantation (offen)'],
        rows: [
          { label: 'Schnitt', values: ['Keiner — über die Harnröhre', 'Ja — im Unterbauch'] },
          { label: 'Eingriffsdauer', values: ['Kurz', 'Länger'] },
          { label: 'Klinikaufenthalt', values: ['Meist ambulant', '1–2 Nächte'] },
          { label: 'Katheter', values: ['Meist nicht nötig', 'Kurzzeitig möglich'] },
          { label: 'Aussicht auf Behebung', values: ['Geringer; Wiederholung möglich', 'Höher'] },
          { label: 'Wahrscheinlichkeit eines weiteren Eingriffs', values: ['Höher', 'Geringer'] },
          { label: 'Erholung', values: ['Wenige Tage', '2–3 Wochen'] },
          { label: 'Eignung bei hohem Grad', values: ['Begrenzt', 'Besser geeignet'] }
        ],
        note: 'Diese Tabelle ist keine Rangfolge. Der endoskopische Weg belastet das Kind weniger, muss aber häufiger wiederholt werden; die Reimplantation zielt auf ein endgültigeres Ergebnis, ist jedoch die größere Operation. Wer aus dem Ausland anreist, sollte die Möglichkeit einer zweiten Reise mit einbeziehen.'
      },
      recovery: [
        { period: 'Erste 24–48 Stunden', body: 'Blut im Urin und Brennen beim Wasserlassen sind üblich. Es wird viel getrunken. Fieber, fehlendes Wasserlassen oder starker Flankenschmerz erfordern sofortigen Kontakt.' },
        { period: 'Woche 1', body: 'Nach endoskopischem Eingriff kehrt das Kind rasch in den Alltag zurück. Nach offener Operation können Blasenkrämpfe auftreten und werden medikamentös behandelt; Anstrengung wird vermieden.' },
        { period: 'Woche 2–3', body: 'Die Rückkehr in Kita oder Schule nach offener Operation fällt meist in diese Zeit. Radfahren und Kontaktspiele warten etwas länger.' },
        { period: 'Monat 1–3', body: 'Urinbefund und Ultraschall werden kontrolliert. Das Ausbleiben fieberhafter Infekte ist ein günstiges Zeichen.' },
        { period: 'Langfristig', body: 'Bei Kindern mit Nierennarben werden Blutdruck und Nierenfunktion über Jahre in Abständen kontrolliert. Mädchen wird gesagt, dass in einer späteren Schwangerschaft besondere Aufmerksamkeit für Harnwegsinfekte nötig ist.' }
      ],
      price: {
        from: 0,
        to: 0,
        currency: 'EUR',
        disclaimer:
          'Der Betrag hängt vom gewählten Verfahren (endoskopisch oder offen), von ein- oder beidseitiger Behandlung und von der Aufenthaltsdauer ab. Ein detailliertes schriftliches Angebot folgt, sobald die Unterlagen Ihres Kindes gesichtet sind.'
      },
      packageIncludes: [
        'Untersuchung und kinderurologische Beurteilung',
        'Ultraschall und erforderliche Bildgebung',
        'Blut- und Urinuntersuchungen, Urinkultur',
        'Kinderanästhesiologische Beurteilung',
        'Operationssaal, Narkose und Verbrauchsbedarf',
        'Bulking-Material beim endoskopischen Verfahren',
        'Klinikaufenthalt (Kind und ein Elternteil)',
        'Kontrolluntersuchung nach der Entlassung',
        'Transfers Flughafen–Klinik–Hotel',
        'Unterkunft (Kind und Begleitperson)',
        'Medizinischer Dolmetscher und Patientenkoordination',
        'Fernnachsorge nach der Rückkehr'
      ],
      faqs: [
        { q: 'Bildet sich der Reflux von selbst zurück?', a: 'Bei einem großen Teil der Kinder, besonders in niedrigen Graden, bildet er sich mit dem Wachstum zurück. Deshalb steht oft Beobachtung am Anfang. Mit steigendem Grad und zunehmendem Alter sinkt die Aussicht auf spontane Rückbildung.' },
        { q: 'Nimmt die Niere Schaden, wenn wir nicht operieren?', a: 'Nicht der Reflux selbst, sondern der mit ihm nach oben getragene FIEBERHAFTE Infekt kann die Niere vernarben. Bei einem Kind ohne Infekte ist das Risiko deutlich geringer. Die eigentliche Arbeit eines Beobachtungsplans ist deshalb die Infektvermeidung.' },
        { q: 'Warum behandeln Sie zuerst die Verstopfung?', a: 'Weil Verstopfung und Miktionsstörung den Druck in der Blase erhöhen; das unterhält den Reflux und erleichtert Infekte. Eine Operation davor führt zu einem schlechteren Ergebnis. Dieser Schritt wird oft übersprungen und bestimmt doch unmittelbar das Ergebnis.' },
        { q: 'Reicht eine endoskopische Injektion?', a: 'Nicht immer. Der Reflux kann fortbestehen oder nach einiger Zeit zurückkehren; dann kommen eine zweite Injektion oder eine Reimplantation in Betracht. Ein Plan, der diese Möglichkeit nicht von Anfang an anspricht, ist unvollständig.' },
        { q: 'Nimmt er nach der Operation weiter Antibiotika?', a: 'Meist noch eine Zeit lang, danach wird nach den Kontrollergebnissen abgesetzt. Entscheiden Sie das nicht allein; bei Kindern mit fieberhaften Infekten in der Vorgeschichte wird dieser Übergang geplant.' },
        { q: 'Heilt die Narbe an der Niere?', a: 'Nein. Die Operation verhindert neuen Schaden; sie macht bestehende Narben nicht rückgängig. Das ist der am häufigsten missverstandene Punkt und der Grund, rechtzeitig zu entscheiden.' },
        { q: 'Wird erneut eine MCU gemacht?', a: 'Nicht routinemäßig bei jedem Kind. Ob nach dem Eingriff erneut Bildgebung erfolgt, entscheidet der Operateur nach Grad, durchgeführtem Eingriff und Verlauf. Unnötige Strahlenbelastung und Katheterisierung werden vermieden.' },
        { q: 'Können Geschwister ihn auch haben?', a: 'Eine familiäre Häufung ist bekannt. Hat ein Geschwisterkind Harnwegsinfekte gehabt, sagen Sie es Ihrer Ärztin oder Ihrem Arzt; ein routinemäßiges Screening aller Geschwister ist jedoch nicht erforderlich.' },
        { q: 'Wie lange müssen wir in der Türkei bleiben?', a: 'Meist 7 Tage beim endoskopischen Eingriff und 10–12 Tage bei offener Operation. Da die Kontrolle hier erfolgt, legen Sie den Rückflug auf die Zeit danach.' },
        { q: 'Welche Unterlagen sollen wir senden?', a: 'MCU-Befund und möglichst die Bilder, DMSA-Ergebnis, Nierenultraschall, Daten früherer fieberhafter Infekte, Urinkulturen und verwendete Antibiotika. Ohne diese sind Grad und Nierenzustand nicht bekannt.' },
        { q: 'Mein Sohn ist nicht beschnitten — spielt das eine Rolle?', a: 'Bei ausgewählten Jungen mit wiederkehrenden Harnwegsinfekten kann die Beschneidung als Mittel zur Senkung des Infektrisikos erwogen werden. Es ist keine allgemeine Empfehlung für jedes Kind; besprechen Sie es im Licht Ihrer Situation.' }
      ],
      sources: [
        {
          label: 'EAU/ESPU-Leitlinie Kinderurologie — Europäische Gesellschaft für Urologie',
          url: 'https://uroweb.org/guidelines/paediatric-urology'
        }
      ]
    },
    fr: {
      title: 'Chirurgie du reflux vésico-urétéral (RVU) chez l’enfant',
      summary:
        'Dans le reflux — remontée de l’urine de la vessie vers le rein — le but n’est pas de « fermer le reflux » mais de protéger le rein. Chez une grande partie des enfants, le reflux disparaît avec la croissance ; la chirurgie s’adresse aux situations où l’on ne peut pas attendre.',
      metaTitle: 'Chirurgie du reflux vésico-urétéral : quand est-elle nécessaire',
      metaDescription:
        'Reflux vésico-urétéral chez l’enfant : quels grades sont surveillés, quand opérer, injection endoscopique ou réimplantation ouverte, risques et convalescence.',
      quickFacts: {
        duration: '20 à 40 minutes (endoscopique) / 60 à 120 minutes (ouvert)',
        anesthesia: 'Anesthésie générale',
        hospitalStay: 'Ambulatoire (endoscopique) – 2 nuits (ouvert)',
        stayInTurkey: '7 à 12 jours',
        catheter: 'Aucune (endoscopique) – 1 à 3 jours (ouvert)',
        returnToWork: 'Retour à la crèche ou à l’école en 1 à 3 semaines',
        flightClearance: 'Après la consultation de contrôle'
      },
      definition: [
        'Le reflux vésico-urétéral (RVU) est la remontée d’urine de la vessie vers l’uretère et le rein. Normalement, le trajet de l’uretère dans la paroi vésicale agit comme une valve et l’empêche. Si ce mécanisme n’est pas suffisamment développé, ou si la pression dans la vessie est élevée, le reflux apparaît.',
        'LE REFLUX EN LUI-MÊME N’EST PAS DOULOUREUX. Chez la plupart des enfants, il est découvert lors du bilan d’une infection urinaire fébrile. Le danger ne vient pas du reflux mais de l’infection qu’il transporte vers le haut : elle peut laisser une cicatrice rénale, et cette cicatrice ne régresse pas. L’objectif du traitement n’est donc pas de « fermer le reflux » mais de PROTÉGER LE REIN.',
        'Le reflux est gradé : aux bas grades, l’urine ne remonte que dans l’uretère ; aux grades élevés, elle atteint les cavités rénales et dilate l’uretère. Plus le grade est bas, plus la régression spontanée avec la croissance est probable. C’est pourquoi, chez beaucoup d’enfants, la première attitude est la surveillance et non la chirurgie.',
        'SURVEILLER NE VEUT PAS DIRE « NE RIEN FAIRE ». Cela comprend des contrôles urinaires réguliers, le traitement sans délai des infections fébriles, la correction de la constipation et des habitudes mictionnelles, et chez certains enfants une antibioprophylaxie. Si ces étapes sont sautées, la chirurgie non plus n’apportera pas le bénéfice attendu.',
        'LE TROUBLE VÉSICO-INTESTINAL EST LA CAUSE LA PLUS SOUVENT NÉGLIGÉE. Constipation, habitude de se retenir et vessie hyperactive augmentent la pression intravésicale : elles entretiennent le reflux et facilitent l’infection. Une intervention réalisée avant la correction des habitudes donne un moins bon résultat. Cela doit être dit clairement aux familles.',
        'La chirurgie se discute lorsque les infections fébriles récidivent malgré la prévention, lorsqu’une nouvelle cicatrice rénale apparaît, lorsque le grade est élevé avec peu de chances de régression, ou lorsque la surveillance n’est pas tenable pour la famille. Deux voies principales : l’injection endoscopique par les voies naturelles et la réimplantation, où l’uretère est réimplanté dans la vessie.',
        'Le choix dépend du grade, du calibre de l’uretère, d’un éventuel geste antérieur et de l’état de la vessie. La voie endoscopique est moins invasive et sans incision ; la réimplantation tend vers un résultat plus définitif mais constitue une intervention plus lourde. La bonne question n’est pas « laquelle est meilleure » mais « laquelle convient à cet enfant ».'
      ],
      eligibility: {
        suitable: [
          'Enfants présentant des infections urinaires fébriles récidivantes malgré la prévention',
          'Enfants chez qui la scintigraphie montre une nouvelle cicatrice rénale',
          'Enfants avec reflux de haut grade et faible probabilité de régression',
          'Enfants dont le reflux persiste malgré l’âge',
          'Familles pour qui l’antibioprophylaxie n’est pas tenable ou mal suivie',
          'Enfants déjà traités par injection endoscopique dont le reflux persiste'
        ],
        notSuitable: [
          'Enfants à bas grade, sans infection et dont le rein n’est pas atteint — la surveillance est la bonne option',
          'Enfants dont le trouble vésico-intestinal n’est pas encore corrigé : cela vient d’abord',
          'Enfants présentant une infection urinaire active : l’infection est traitée d’abord',
          'Enfants porteurs d’une vessie neurologique, chez qui ce tableau doit être pris en charge en premier'
        ]
      },
      technology: [
        'Matériel de cystoscopie de calibre pédiatrique',
        'Produit de comblement pour injection endoscopique',
        'Cystographie rétrograde mictionnelle pour objectiver et grader le reflux',
        'Scintigraphie DMSA pour évaluer les cicatrices et la fonction rénale',
        'Échographie pour mesurer la dilatation rénale et urétérale',
        'Équipe d’anesthésie pédiatrique et prise en charge de la douleur adaptée'
      ],
      surgeonExperience: {
        caseVolume: '',
        note: 'En chirurgie du reflux, la justesse de la décision pèse plus que la technique : opérer un enfant qu’il faudrait surveiller est aussi fautif qu’attendre alors que le rein d’un enfant s’altère. L’expérience du Dr Müslüm Ergün en chirurgie urétérale et reconstructrice fonde cette approche, en particulier chez les enfants déjà opérés dont le reflux persiste.'
      },
      timeline: [
        { when: 'À distance', title: 'Étude des documents', body: 'Compte rendu de cystographie et, si possible, les images, scintigraphie DMSA, échographie rénale, historique des infections fébriles, ECBU et antibiotiques utilisés sont étudiés. Sans cela, ni le grade ni l’état du rein ne sont connus et aucun plan n’est possible.' },
        { when: 'Jour 1', title: 'Examen et évaluation', body: 'Examen clinique, échographie, ECBU. La constipation et les habitudes mictionnelles sont explorées en détail, car elles influencent directement le résultat. Si l’ECBU est positif, le geste est reporté.' },
        { when: 'Jour 2', title: 'Intervention', body: 'Dans l’injection endoscopique, on passe par les voies naturelles et on dépose un produit de comblement sous l’abouchement de l’uretère pour renforcer l’effet de valve ; il n’y a pas d’incision. Dans la réimplantation, l’uretère est placé dans un nouveau tunnel de la paroi vésicale.' },
        { when: 'Jours 2–4', title: 'Sortie', body: 'Après un geste endoscopique, la plupart des enfants rentrent le jour même. Après chirurgie ouverte, le séjour est de 1 à 2 nuits ; si une sonde est posée, le moment du retrait est expliqué à l’avance.' },
        { when: 'Jours 4–10', title: 'Contrôle', body: 'Cicatrisation, ECBU et échographie sont évalués. Le vol retour est prévu après ce contrôle.' },
        { when: 'Mois 3–6', title: 'Évaluation du résultat', body: 'La disparition du reflux est évaluée par une nouvelle imagerie lorsque le chirurgien le juge nécessaire. L’absence d’infection fébrile constitue en soi un critère important.' }
      ],
      risks: [
        'LE GESTE PEUT NE PAS SUPPRIMER TOTALEMENT LE REFLUX : après injection endoscopique en particulier, le reflux peut persister ou réapparaître. Une seconde injection ou une réimplantation se discute alors. Cette éventualité est évoquée dès le départ',
        'OBSTRUCTION URÉTÉRALE TRANSITOIRE : un œdème ou un rétrécissement peut apparaître à l’abouchement après injection ou réimplantation, avec dilatation rénale et douleur lombaire. La plupart régressent ; un petit nombre d’enfants nécessite un geste complémentaire',
        'Infection urinaire après le geste',
        'Sang dans les urines et brûlures mictionnelles — attendus les premiers jours',
        'Spasmes vésicaux après chirurgie ouverte et inconfort associé ; contrôlés par traitement',
        'Infection de la plaie et, après chirurgie ouverte, cicatrice définitive',
        'MÊME SI LE REFLUX DISPARAÎT, LA CICATRICE RÉNALE EXISTANTE NE RÉGRESSE PAS : la chirurgie prévient de nouvelles lésions, elle ne répare pas les anciennes. C’est le point le plus souvent mal compris',
        'Risques de l’anesthésie générale'
      ],
      alternatives: [
        'Surveillance — première et souvent meilleure option dans les bas grades sans infection, avec contrôles urinaires et échographiques réguliers',
        'Antibioprophylaxie — chez certains enfants, pour prévenir les infections fébriles',
        'Traitement du trouble vésico-intestinal — lutte contre la constipation, réapprentissage mictionnel, horaires réguliers ; cela précède la chirurgie',
        'Injection endoscopique — méthode ambulatoire sans incision',
        'Urétéro-néocystostomie (réimplantation) — ouverte ou cœlioscopique ; résultat plus définitif, intervention plus lourde',
        'Circoncision — envisageable chez certains garçons à infections récidivantes pour réduire le risque infectieux'
      ],
      comparison: {
        title: 'Injection endoscopique et réimplantation : choisir le compromis ensemble',
        columns: ['Critère', 'Injection endoscopique', 'Réimplantation (ouverte)'],
        rows: [
          { label: 'Incision', values: ['Aucune — par les voies naturelles', 'Oui — en bas de l’abdomen'] },
          { label: 'Durée du geste', values: ['Courte', 'Plus longue'] },
          { label: 'Hospitalisation', values: ['Généralement ambulatoire', '1 à 2 nuits'] },
          { label: 'Sonde', values: ['Généralement inutile', 'Parfois brièvement'] },
          { label: 'Probabilité de supprimer le reflux', values: ['Plus faible ; répétition possible', 'Plus élevée'] },
          { label: 'Risque de nouveau geste', values: ['Plus élevé', 'Plus faible'] },
          { label: 'Convalescence', values: ['Quelques jours', '2 à 3 semaines'] },
          { label: 'Adaptation aux hauts grades', values: ['Limitée', 'Mieux adaptée'] }
        ],
        note: 'Ce tableau n’est pas un classement. La voie endoscopique pèse moins sur l’enfant mais doit plus souvent être répétée ; la réimplantation vise un résultat plus définitif mais reste une intervention plus lourde. Si vous venez de l’étranger, intégrez la possibilité d’un second voyage.'
      },
      recovery: [
        { period: '24 à 48 premières heures', body: 'Sang dans les urines et brûlures sont habituels. On fait boire abondamment. Fièvre, impossibilité d’uriner ou douleur lombaire intense imposent un contact immédiat.' },
        { period: 'Semaine 1', body: 'Après un geste endoscopique, l’enfant reprend vite sa vie normale. Après chirurgie ouverte, des spasmes vésicaux peuvent survenir et sont traités ; les efforts sont évités.' },
        { period: 'Semaines 2–3', body: 'Le retour à la crèche ou à l’école après chirurgie ouverte se situe généralement là. Vélo et jeux de contact attendent un peu plus.' },
        { period: 'Mois 1–3', body: 'ECBU et échographie de contrôle. L’absence d’infection fébrile est un signe favorable.' },
        { period: 'Long terme', body: 'Chez les enfants avec cicatrice rénale, tension artérielle et fonction rénale sont suivies par intermittence pendant des années. Il est rappelé aux filles qu’une attention particulière aux infections urinaires sera nécessaire lors d’une future grossesse.' }
      ],
      price: {
        from: 0,
        to: 0,
        currency: 'EUR',
        disclaimer:
          'Le montant dépend de la méthode retenue (endoscopique ou ouverte), du caractère uni- ou bilatéral et de la durée d’hospitalisation. Un devis écrit détaillé est remis après examen des documents de votre enfant.'
      },
      packageIncludes: [
        'Consultation et évaluation en urologie pédiatrique',
        'Échographie et imagerie nécessaire',
        'Bilans sanguins et urinaires, ECBU',
        'Consultation d’anesthésie pédiatrique',
        'Bloc opératoire, anesthésie et consommables',
        'Produit de comblement pour la méthode endoscopique',
        'Hospitalisation (enfant et un parent)',
        'Consultation de contrôle après la sortie',
        'Transferts aéroport–hôpital–hôtel',
        'Hébergement (enfant et accompagnant)',
        'Interprète médical et coordinateur patient',
        'Suivi à distance après le retour'
      ],
      faqs: [
        { q: 'Le reflux disparaît-il tout seul ?', a: 'Chez une grande partie des enfants, surtout aux bas grades, il régresse avec la croissance. C’est pourquoi la surveillance est souvent la première attitude. Plus le grade est élevé et plus l’enfant grandit, moins la régression spontanée est probable.' },
        { q: 'Le rein sera-t-il abîmé si nous n’opérons pas ?', a: 'Ce n’est pas le reflux lui-même mais l’infection FÉBRILE qu’il transporte qui peut cicatriser le rein. Chez un enfant qui ne fait pas d’infection, le risque est nettement plus faible. Le vrai travail d’un plan de surveillance est donc la prévention de l’infection.' },
        { q: 'Pourquoi traiter d’abord la constipation ?', a: 'Parce que constipation et trouble mictionnel augmentent la pression intravésicale : ils entretiennent le reflux et facilitent l’infection. Une intervention réalisée avant leur correction donne un moins bon résultat. Cette étape est souvent sautée et pourtant déterminante.' },
        { q: 'Une seule injection endoscopique suffit-elle ?', a: 'Pas toujours. Le reflux peut persister ou réapparaître ; une seconde injection ou une réimplantation se discute alors. Un plan qui n’évoque pas cette éventualité dès le départ est incomplet.' },
        { q: 'Continuera-t-il les antibiotiques après l’opération ?', a: 'Généralement encore quelque temps, puis arrêt selon les contrôles. Ne décidez pas seul ; chez les enfants ayant fait des infections fébriles, cette transition est planifiée.' },
        { q: 'La cicatrice du rein va-t-elle guérir ?', a: 'Non. La chirurgie prévient de nouvelles lésions ; elle ne fait pas disparaître les cicatrices existantes. C’est le point le plus souvent mal compris, et la raison pour laquelle décider à temps importe.' },
        { q: 'Refera-t-on une cystographie ?', a: 'Pas de façon systématique chez tous les enfants. La répétition de l’imagerie après le geste est décidée par le chirurgien selon le grade, le geste réalisé et l’évolution. On évite irradiation et sondage inutiles.' },
        { q: 'Ses frères et sœurs peuvent-ils en avoir ?', a: 'Une prédisposition familiale est connue. Si un frère ou une sœur a eu des infections urinaires, signalez-le ; un dépistage systématique de toute la fratrie n’est toutefois pas nécessaire.' },
        { q: 'Combien de temps rester en Türkiye ?', a: 'Généralement 7 jours pour un geste endoscopique et 10 à 12 jours pour une chirurgie ouverte. Le contrôle étant réalisé ici, prévoyez le vol retour après cette consultation.' },
        { q: 'Quels documents envoyer ?', a: 'Compte rendu de cystographie et, si possible, les images, résultat de la scintigraphie DMSA, échographie rénale, dates des infections fébriles, ECBU et antibiotiques utilisés. Sans cela, ni le grade ni l’état du rein ne sont connus.' },
        { q: 'Mon fils n’est pas circoncis, cela compte-t-il ?', a: 'Chez certains garçons à infections urinaires récidivantes, la circoncision peut être envisagée pour réduire le risque infectieux. Ce n’est pas une recommandation générale ; discutez-en au regard de votre situation.' }
      ],
      sources: [
        {
          label: 'Recommandations EAU/ESPU en urologie pédiatrique — Association européenne d’urologie',
          url: 'https://uroweb.org/guidelines/paediatric-urology'
        }
      ]
    },
    ru: {
      title: 'Операция при пузырно-мочеточниковом рефлюксе (ПМР) у детей',
      summary:
        'При рефлюксе — обратном токе мочи из пузыря в почку — цель не «закрыть рефлюкс», а защитить почку. У значительной части детей рефлюкс проходит с ростом; операция нужна там, где ждать нельзя.',
      metaTitle: 'Операция при пузырно-мочеточниковом рефлюксе: когда она нужна',
      metaDescription:
        'Пузырно-мочеточниковый рефлюкс у детей: какие степени наблюдают, когда нужна операция, эндоскопическая инъекция против открытой реимплантации, риски и восстановление.',
      quickFacts: {
        duration: '20–40 минут (эндоскопически) / 60–120 минут (открыто)',
        anesthesia: 'Общая анестезия',
        hospitalStay: 'Амбулаторно (эндоскопически) – 2 ночи (открыто)',
        stayInTurkey: '7–12 дней',
        catheter: 'Не нужен (эндоскопически) – 1–3 дня (открыто)',
        returnToWork: 'Возвращение в сад или школу через 1–3 недели',
        flightClearance: 'После контрольного осмотра'
      },
      definition: [
        'Пузырно-мочеточниковый рефлюкс (ПМР) — обратный ток мочи из мочевого пузыря по мочеточнику к почке. В норме ход мочеточника в стенке пузыря работает как клапан и этому препятствует. Если механизм развит недостаточно или давление в пузыре повышено, возникает рефлюкс.',
        'САМ РЕФЛЮКС НЕ БОЛИТ. У большинства детей его находят при обследовании по поводу инфекции мочевых путей с лихорадкой. Опасен не рефлюкс, а переносимая вместе с ним инфекция: она может оставить рубец в почке, и этот рубец не исчезает. Поэтому цель лечения — не «закрыть рефлюкс», а ЗАЩИТИТЬ ПОЧКУ.',
        'Рефлюкс разделяют по степеням: при лёгких моча попадает только в мочеточник; при высоких достигает чашечно-лоханочной системы и расширяет мочеточник. Чем ниже степень, тем выше вероятность самостоятельного разрешения по мере роста. Поэтому у многих детей первым подходом становится наблюдение, а не операция.',
        'НАБЛЮДЕНИЕ — ЭТО НЕ «НИЧЕГО НЕ ДЕЛАТЬ». Оно включает регулярный контроль мочи, безотлагательное лечение лихорадочных инфекций, устранение запоров, коррекцию привычек мочеиспускания и у отдельных детей профилактические антибиотики. Если эти шаги пропустить, операция тоже не даст ожидаемой пользы.',
        'ЧАЩЕ ВСЕГО ПРОПУСКАЮТ ДИСФУНКЦИЮ МОЧЕВОГО ПУЗЫРЯ И КИШЕЧНИКА. Запоры, привычка терпеть и гиперактивный пузырь повышают давление внутри пузыря: это и поддерживает рефлюкс, и облегчает инфекцию. Операция, выполненная до коррекции туалетных привычек, даёт худший результат. Об этом нужно говорить семьям прямо.',
        'Операция рассматривается, когда лихорадочные инфекции повторяются несмотря на профилактику, когда в почке появляется новый рубец, когда степень высокая и надежды на разрешение с возрастом мало, или когда наблюдение для семьи неосуществимо. Два основных пути: эндоскопическая инъекция через мочевые пути и реимплантация, при которой мочеточник заново вшивают в пузырь.',
        'Выбор зависит от степени, ширины мочеточника, предыдущих вмешательств и состояния пузыря. Эндоскопический путь менее травматичен и не требует разреза; реимплантация даёт более окончательный результат, но это более крупная операция. Правильный вопрос не «что лучше», а «что подходит именно этому ребёнку».'
      ],
      eligibility: {
        suitable: [
          'Дети с повторяющимися лихорадочными инфекциями мочевых путей несмотря на профилактику',
          'Дети, у которых сцинтиграфия показывает новый рубец почки',
          'Дети с высокой степенью рефлюкса и малой надеждой на самостоятельное разрешение',
          'Дети, у которых рефлюкс сохраняется несмотря на возраст',
          'Семьи, для которых профилактические антибиотики неосуществимы или соблюдаются плохо',
          'Дети после эндоскопической инъекции, у которых рефлюкс сохраняется'
        ],
        notSuitable: [
          'Дети с низкой степенью, без инфекций и с незатронутой почкой — правильный вариант наблюдение',
          'Дети, у которых не скорректирована дисфункция мочевого пузыря и кишечника: это идёт первым',
          'Дети с активной инфекцией мочевых путей: сначала лечат инфекцию',
          'Дети с нейрогенной дисфункцией пузыря, у которых сначала нужно вести эту картину'
        ]
      },
      technology: [
        'Цистоскопический набор детского калибра',
        'Объёмообразующий материал для эндоскопической инъекции',
        'Микционная цистоуретрография для выявления и определения степени рефлюкса',
        'Сцинтиграфия DMSA для оценки рубцов и функции почки',
        'УЗИ для измерения расширения почки и мочеточника',
        'Детская анестезиологическая бригада и обезболивание, рассчитанное на ребёнка'
      ],
      surgeonExperience: {
        caseVolume: '',
        note: 'В хирургии рефлюкса верность решения весит больше техники: оперировать ребёнка, которого следует наблюдать, так же неверно, как выжидать, пока страдает почка. Опыт доцента, д-ра Мюслюма Эргюна в хирургии мочеточника и реконструктивных операциях лежит в основе подхода, особенно у детей, уже оперированных, у которых рефлюкс сохраняется.'
      },
      timeline: [
        { when: 'Дистанционно', title: 'Изучение документов', body: 'Изучают заключение цистоуретрографии и по возможности снимки, сцинтиграфию DMSA, УЗИ почек, записи о перенесённых лихорадочных инфекциях, посевы мочи и применявшиеся антибиотики. Без них степень и состояние почки неизвестны, и план составить нельзя.' },
        { when: '1-й день', title: 'Осмотр и оценка', body: 'Осмотр, УЗИ, анализ и посев мочи. Подробно расспрашивают о запорах и привычках мочеиспускания: они прямо влияют на результат. При росте флоры вмешательство откладывается.' },
        { when: '2-й день', title: 'Вмешательство', body: 'При эндоскопической инъекции входят через мочевые пути и вводят объёмообразующий материал под устье мочеточника, усиливая клапанный эффект; разреза нет. При реимплантации мочеточник помещают в новый тоннель в стенке пузыря.' },
        { when: '2–4-й день', title: 'Выписка', body: 'После эндоскопического вмешательства большинство детей уходят домой в тот же день. После открытой операции остаются на 1–2 ночи; если установлен катетер, срок удаления объясняют заранее.' },
        { when: '4–10-й день', title: 'Контроль', body: 'Оценивают заживление, анализ мочи и УЗИ. Обратный рейс планируют после этого контроля.' },
        { when: '3–6-й месяц', title: 'Оценка результата', body: 'Закрылся ли рефлюкс, оценивают повторной визуализацией, когда хирург сочтёт это нужным. Отсутствие лихорадочных инфекций само по себе важный критерий.' }
      ],
      risks: [
        'ВМЕШАТЕЛЬСТВО МОЖЕТ НЕ УСТРАНИТЬ РЕФЛЮКС ПОЛНОСТЬЮ: особенно после эндоскопической инъекции рефлюкс может сохраниться или вернуться через время. Тогда рассматривают вторую инъекцию или реимплантацию. Эта возможность обсуждается с самого начала',
        'ВРЕМЕННАЯ ОБСТРУКЦИЯ МОЧЕТОЧНИКА: после инъекции или реимплантации в области устья может возникнуть отёк или сужение с расширением почки и болью в боку. Чаще всего проходит; небольшому числу детей нужно дополнительное вмешательство',
        'Инфекция мочевых путей после вмешательства',
        'Кровь в моче и жжение при мочеиспускании — ожидаемы в первые дни',
        'Спазмы мочевого пузыря после открытой операции и связанное с ними беспокойство; снимаются препаратами',
        'Инфекция раны и после открытой операции стойкий рубец',
        'ДАЖЕ ЕСЛИ РЕФЛЮКС УСТРАНЁН, ИМЕЮЩИЙСЯ РУБЕЦ ПОЧКИ НЕ ИСЧЕЗАЕТ: операция предотвращает новое повреждение, а не исправляет старое. Это самый частый повод для недопонимания',
        'Риски общей анестезии'
      ],
      alternatives: [
        'Наблюдение — первый и часто самый правильный вариант при низкой степени без инфекций, с регулярным контролем мочи и УЗИ',
        'Профилактические антибиотики — у отдельных детей для предупреждения лихорадочных инфекций',
        'Лечение дисфункции мочевого пузыря и кишечника — устранение запоров, обучение мочеиспусканию, режим туалета; это предшествует операции',
        'Эндоскопическая инъекция — амбулаторный метод без разреза',
        'Уретероцистонеостомия (реимплантация) — открытая или лапароскопическая; более окончательный результат, более крупная операция',
        'Обрезание — может рассматриваться у отдельных мальчиков с повторяющимися инфекциями как способ снизить риск инфекции'
      ],
      comparison: {
        title: 'Эндоскопическая инъекция и реимплантация: выбираем компромисс вместе',
        columns: ['Критерий', 'Эндоскопическая инъекция', 'Реимплантация (открытая)'],
        rows: [
          { label: 'Разрез', values: ['Нет — через мочевые пути', 'Есть — внизу живота'] },
          { label: 'Длительность', values: ['Короткая', 'Дольше'] },
          { label: 'Пребывание в стационаре', values: ['Обычно амбулаторно', '1–2 ночи'] },
          { label: 'Катетер', values: ['Обычно не нужен', 'Может понадобиться ненадолго'] },
          { label: 'Вероятность устранения рефлюкса', values: ['Ниже; может потребоваться повтор', 'Выше'] },
          { label: 'Вероятность повторного вмешательства', values: ['Выше', 'Ниже'] },
          { label: 'Восстановление', values: ['Несколько дней', '2–3 недели'] },
          { label: 'Пригодность при высоких степенях', values: ['Ограничена', 'Более пригодна'] }
        ],
        note: 'Эта таблица не рейтинг. Эндоскопический путь меньше нагружает ребёнка, но чаще требует повтора; реимплантация нацелена на более окончательный результат, но это более крупная операция. Если вы приезжаете из-за рубежа, учтите возможность второй поездки.'
      },
      recovery: [
        { period: 'Первые 24–48 часов', body: 'Кровь в моче и жжение при мочеиспускании обычны. Дают много жидкости. Лихорадка, невозможность помочиться или сильная боль в боку требуют немедленного обращения.' },
        { period: '1-я неделя', body: 'После эндоскопического вмешательства ребёнок быстро возвращается к обычной жизни. После открытой операции возможны спазмы пузыря, их снимают препаратами; нагрузок избегают.' },
        { period: '2–3-я неделя', body: 'Возвращение в сад или школу после открытой операции обычно приходится на этот период. Велосипед и контактные игры откладывают дольше.' },
        { period: '1–3-й месяц', body: 'Контроль по анализу мочи и УЗИ. Отсутствие лихорадочных инфекций — благоприятный признак.' },
        { period: 'Долгосрочно', body: 'У детей с рубцами почки давление и функцию почек наблюдают с перерывами годами. Девочкам напоминают, что при будущей беременности потребуется особое внимание к инфекциям мочевых путей.' }
      ],
      price: {
        from: 0,
        to: 0,
        currency: 'EUR',
        disclaimer:
          'Сумма зависит от выбранного метода (эндоскопический или открытый), от одно- или двусторонней операции и от срока пребывания в стационаре. Постатейное письменное предложение даётся после изучения документов вашего ребёнка.'
      },
      packageIncludes: [
        'Осмотр и детская урологическая оценка',
        'УЗИ и необходимая визуализация',
        'Анализы крови и мочи, посев мочи',
        'Консультация детского анестезиолога',
        'Операционная, анестезия и расходные материалы',
        'Объёмообразующий материал при эндоскопическом методе',
        'Пребывание в стационаре (ребёнок и один родитель)',
        'Контрольный осмотр после выписки',
        'Трансферы аэропорт — больница — отель',
        'Проживание (ребёнок и сопровождающий)',
        'Медицинский переводчик и координатор пациента',
        'Дистанционное наблюдение после возвращения'
      ],
      faqs: [
        { q: 'Проходит ли рефлюкс сам?', a: 'У значительной части детей, особенно при низких степенях, он проходит с ростом. Поэтому наблюдение часто становится первым подходом. С повышением степени и возраста вероятность самостоятельного разрешения снижается.' },
        { q: 'Пострадает ли почка, если не оперировать?', a: 'Повредить почку может не сам рефлюкс, а переносимая с ним ЛИХОРАДОЧНАЯ инфекция. У ребёнка без инфекций риск заметно ниже. Поэтому основная работа плана наблюдения — предупреждение инфекции.' },
        { q: 'Почему сначала лечат запор?', a: 'Потому что запор и нарушение мочеиспускания повышают давление в пузыре: это поддерживает рефлюкс и облегчает инфекцию. Операция до их устранения даёт худший результат. Этот шаг часто пропускают, а он прямо определяет исход.' },
        { q: 'Хватит ли одной эндоскопической инъекции?', a: 'Не всегда. Рефлюкс может сохраниться или вернуться; тогда рассматривают вторую инъекцию или реимплантацию. План, в котором эта возможность не обсуждена заранее, неполон.' },
        { q: 'Будет ли он принимать антибиотики после операции?', a: 'Обычно ещё какое-то время, затем отменяют по результатам контроля. Не решайте это сами; у детей с лихорадочными инфекциями в анамнезе переход планируется.' },
        { q: 'Заживёт ли рубец на почке?', a: 'Нет. Операция предотвращает новое повреждение; она не устраняет имеющиеся рубцы. Это самый частый повод для недопонимания и причина, по которой важно решать вовремя.' },
        { q: 'Будут ли повторять цистоуретрографию?', a: 'Не у всех детей рутинно. Повторять ли визуализацию после вмешательства, решает хирург по степени, выполненному вмешательству и течению. Лишнего облучения и катетеризации избегают.' },
        { q: 'Может ли это быть у братьев и сестёр?', a: 'Известна семейная предрасположенность. Если у брата или сестры были инфекции мочевых путей, сообщите об этом врачу; рутинный скрининг всех детей в семье при этом не нужен.' },
        { q: 'Сколько нужно пробыть в Турции?', a: 'Обычно 7 дней при эндоскопическом вмешательстве и 10–12 дней при открытой операции. Поскольку контроль проводится здесь, планируйте обратный рейс после него.' },
        { q: 'Какие документы прислать?', a: 'Заключение цистоуретрографии и по возможности снимки, результат DMSA, УЗИ почек, даты перенесённых лихорадочных инфекций, посевы мочи и применявшиеся антибиотики. Без них степень и состояние почки неизвестны.' },
        { q: 'Сын не обрезан — имеет ли это значение?', a: 'У отдельных мальчиков с повторяющимися инфекциями обрезание может рассматриваться как способ снизить риск инфекции. Это не общая рекомендация для каждого ребёнка; обсудите это применительно к вашей ситуации.' }
      ],
      sources: [
        {
          label: 'Рекомендации EAU/ESPU по детской урологии — Европейская ассоциация урологии',
          url: 'https://uroweb.org/guidelines/paediatric-urology'
        }
      ]
    },
    ar: {
      title: 'جراحة الجزر المثاني الحالبي عند الأطفال',
      summary:
        'في الجزر — رجوع البول من المثانة إلى الكلية — الهدف ليس «إغلاق الجزر» بل حماية الكلية. فعند جزء كبير من الأطفال يزول الجزر مع النمو؛ والجراحة لمن لا يمكن انتظار ذلك عنده.',
      metaTitle: 'جراحة الجزر المثاني الحالبي: متى تلزم',
      metaDescription:
        'الجزر المثاني الحالبي عند الأطفال: أي الدرجات تُراقَب، ومتى تلزم الجراحة، والحقن التنظيري مقابل إعادة الزرع المفتوحة، والمخاطر والتعافي.',
      quickFacts: {
        duration: '20 إلى 40 دقيقة (تنظيري) / 60 إلى 120 دقيقة (مفتوح)',
        anesthesia: 'تخدير عام',
        hospitalStay: 'من دون مبيت (تنظيري) – ليلتان (مفتوح)',
        stayInTurkey: '7 إلى 12 يومًا',
        catheter: 'لا تلزم (تنظيري) – من يوم إلى ثلاثة (مفتوح)',
        returnToWork: 'العودة إلى الحضانة أو المدرسة خلال أسبوع إلى ثلاثة',
        flightClearance: 'بعد مراجعة المتابعة'
      },
      definition: [
        'الجزر المثاني الحالبي هو رجوع البول من المثانة صعودًا في الحالب نحو الكلية. وفي الحالة الطبيعية يعمل مسار الحالب داخل جدار المثانة كصمام يمنع ذلك. فإن لم تنضج هذه الآلية بما يكفي أو ارتفع الضغط داخل المثانة نشأ الجزر.',
        'والجزر نفسه لا يؤلم. فهو يُكتشَف عند معظم الأطفال أثناء تقصّي التهاب بولي مصحوب بحرارة. والخطر ليس من الجزر بل من الالتهاب الذي يُحمَل معه إلى الأعلى: إذ قد يترك ندبة في الكلية، وهذه الندبة لا تزول. ولذلك فهدف العلاج ليس «إغلاق الجزر» بل حماية الكلية.',
        'ويُدرَّج الجزر: ففي الدرجات الخفيفة يصعد البول إلى الحالب فقط؛ وفي الدرجات العالية يبلغ الجهاز الجامع في الكلية ويوسّع الحالب. وكلما انخفضت الدرجة ارتفع احتمال الزوال التلقائي مع نمو الطفل. ولهذا يكون المنهج الأول عند كثير من الأطفال المراقبة لا الجراحة.',
        'والمراقبة ليست «عدم فعل شيء». فهي تشمل متابعة منتظمة للبول، ومعالجة الالتهابات المصحوبة بحرارة من دون تأخير، ومعالجة الإمساك، وتصحيح عادات التبول، وعند أطفال مختارين مضادًا حيويًا وقائيًا. وإن تُخُطِّيت هذه الخطوات فلن تعطي الجراحة بدورها الفائدة المرجوّة.',
        'وأكثر الأسباب التي تفوت هو اضطراب وظيفة المثانة والأمعاء. فالإمساك وعادة حبس البول وفرط نشاط المثانة ترفع الضغط داخل المثانة؛ وهذا يُبقي الجزر ويُسهّل الالتهاب. والعملية التي تُجرى قبل تصحيح عادات الحمّام تعطي نتيجة أسوأ. وهذه نقطة ينبغي أن تُقال للأسر بوضوح.',
        'وتُطرَح الجراحة حين تتكرر الالتهابات المصحوبة بحرارة رغم الوقاية، أو حين تظهر ندبة جديدة في الكلية، أو حين تكون الدرجة عالية مع ضعف أمل الزوال مع العمر، أو حين تتعذّر المراقبة على الأسرة. وثمة طريقان رئيسان: الحقن التنظيري عبر المسالك، وإعادة الزرع حيث يُعاد توصيل الحالب بالمثانة.',
        'ويتحدد الاختيار بالدرجة وسعة الحالب ووجود تدخل سابق وحالة المثانة. فالطريق التنظيري أقل تدخلًا ولا يحتاج شقًا؛ وإعادة الزرع تميل إلى نتيجة أكثر حسمًا لكنها عملية أكبر. والسؤال الصحيح ليس «أيهما أفضل» بل «أيهما يناسب هذا الطفل».'
      ],
      eligibility: {
        suitable: [
          'الأطفال الذين تتكرر عندهم الالتهابات البولية المصحوبة بحرارة رغم العلاج الوقائي',
          'الأطفال الذين يُظهر التصوير النظائري عندهم ندبة كلوية جديدة',
          'الأطفال ذوو الدرجة العالية وضعف أمل الزوال التلقائي',
          'الأطفال الذين يستمر الجزر عندهم رغم تقدّم العمر',
          'الأسر التي يتعذّر عليها الالتزام بالمضاد الحيوي الوقائي',
          'الأطفال الذين أُجري لهم حقن تنظيري ولا يزال الجزر قائمًا'
        ],
        notSuitable: [
          'الأطفال ذوو الدرجة المنخفضة من دون التهابات ومن دون تأثر الكلية — المراقبة هي الخيار الصحيح',
          'الأطفال الذين لم يُصحَّح عندهم اضطراب وظيفة المثانة والأمعاء: وهذا يأتي أولًا',
          'الأطفال المصابون بالتهاب بولي نشط: يُعالَج الالتهاب أولًا',
          'الأطفال ذوو المثانة العصبية ممن ينبغي تدبير هذه الحالة عندهم أولًا'
        ]
      },
      technology: [
        'طقم تنظير مثانة بقياس الأطفال',
        'مادة حاقنة للحقن التنظيري',
        'تصوير المثانة والإحليل أثناء التبول لإظهار الجزر وتدريجه',
        'التصوير النظائري DMSA لتقييم ندبات الكلية ووظيفتها',
        'الموجات فوق الصوتية لقياس اتساع الكلية والحالب',
        'فريق تخدير أطفال وتدبير ألم مخصص للطفل'
      ],
      surgeonExperience: {
        caseVolume: '',
        note: 'في جراحة الجزر يزن صواب القرار أكثر من التقنية: فإجراء عملية لطفل ينبغي مراقبته خطأ، كما أن الانتظار بينما تتأثر كلية طفل خطأ. وخبرة الأستاذ المشارك د. مسلم إرغن في جراحة الحالب والجراحة الترميمية أساس هذا المنهج، ولا سيما عند الأطفال الذين سبق تدخل لهم ولا يزال الجزر قائمًا.'
      },
      timeline: [
        { when: 'عن بُعد', title: 'مراجعة الوثائق', body: 'يُراجَع تقرير تصوير المثانة أثناء التبول وصوره إن أمكن، والتصوير النظائري DMSA، وموجات الكلية، وسجل الالتهابات المصحوبة بحرارة، وزروع البول والمضادات المستعملة. ومن دونها لا تُعرَف الدرجة ولا حالة الكلية ولا يمكن وضع خطة.' },
        { when: 'اليوم الأول', title: 'الفحص والتقييم', body: 'فحص وموجات وتحليل بول وزرع. ويُسأل بالتفصيل عن الإمساك وعادات التبول لأنهما يؤثران مباشرة في النتيجة. وإن نما في الزرع جرثوم أُجّل الإجراء.' },
        { when: 'اليوم الثاني', title: 'الإجراء', body: 'في الحقن التنظيري يُدخَل عبر المسالك وتُوضَع مادة حاقنة تحت موضع انفتاح الحالب لتقوية أثر الصمام؛ ولا يُجرى شق. وفي إعادة الزرع يُوضَع الحالب داخل نفق جديد في جدار المثانة.' },
        { when: 'اليوم الثاني إلى الرابع', title: 'الخروج', body: 'بعد الإجراء التنظيري يعود معظم الأطفال في اليوم نفسه. وبعد الجراحة المفتوحة تكون الإقامة ليلة إلى ليلتين؛ وإن وُضعت قسطرة يُشرَح موعد نزعها مسبقًا.' },
        { when: 'اليوم الرابع إلى العاشر', title: 'المراجعة', body: 'يُقيَّم الالتئام وتحليل البول والموجات. وتُخطَّط رحلة العودة بعد هذه المراجعة.' },
        { when: 'الشهر الثالث إلى السادس', title: 'تقييم النتيجة', body: 'يُقيَّم زوال الجزر بإعادة التصوير حين يرى الجرّاح ذلك لازمًا. وغياب الالتهابات المصحوبة بحرارة معيار مهم بحد ذاته.'}
      ],
      risks: [
        'قد لا يزيل الإجراء الجزر تمامًا: فبعد الحقن التنظيري خصوصًا قد يستمر الجزر أو يعود بعد مدة. وعندها يُطرَح حقن ثانٍ أو إعادة زرع. ويُناقَش هذا الاحتمال منذ البداية',
        'انسداد مؤقت في الحالب: قد تنشأ وذمة أو ضيق عند موضع الانفتاح بعد الحقن أو إعادة الزرع، مع اتساع في الكلية وألم في الخاصرة. وأكثرها مؤقت، ويحتاج عدد قليل من الأطفال تدخلًا إضافيًا',
        'التهاب بولي بعد الإجراء',
        'دم في البول وحرقة عند التبول — وهي متوقعة في الأيام الأولى',
        'تشنّجات مثانية بعد الجراحة المفتوحة وما يرافقها من انزعاج؛ وتُضبَط بالأدوية',
        'التهاب الجرح وندبة دائمة بعد الجراحة المفتوحة',
        'حتى لو زال الجزر فإن ندبة الكلية الموجودة لا تزول: العملية تمنع ضررًا جديدًا ولا تُصلِح القديم. وهذه أكثر النقاط التي يُساء فهمها',
        'مخاطر التخدير العام'
      ],
      alternatives: [
        'المراقبة — الخيار الأول وغالبًا الأصوب في الدرجات المنخفضة من دون التهابات، بمتابعة منتظمة للبول وبالموجات',
        'المضاد الحيوي الوقائي — عند أطفال مختارين لمنع الالتهابات المصحوبة بحرارة',
        'معالجة اضطراب وظيفة المثانة والأمعاء — إزالة الإمساك وإعادة تدريب التبول ومواعيد حمّام منتظمة؛ وهذا يسبق الجراحة',
        'الحقن التنظيري — طريقة من دون مبيت ومن دون شق',
        'إعادة زرع الحالب في المثانة — مفتوحة أو بالمنظار؛ نتيجة أكثر حسمًا وعملية أكبر',
        'الختان — يمكن النظر فيه عند أولاد مختارين ذوي التهابات متكررة لتقليل خطر الالتهاب'
      ],
      comparison: {
        title: 'الحقن التنظيري وإعادة الزرع: نختار الموازنة معًا',
        columns: ['المعيار', 'الحقن التنظيري', 'إعادة الزرع (مفتوحة)'],
        rows: [
          { label: 'الشق', values: ['لا يوجد — عبر المسالك', 'يوجد — في أسفل البطن'] },
          { label: 'مدة الإجراء', values: ['قصيرة', 'أطول'] },
          { label: 'الإقامة', values: ['من دون مبيت غالبًا', 'ليلة إلى ليلتين'] },
          { label: 'القسطرة', values: ['لا تلزم غالبًا', 'قد تلزم لمدة قصيرة'] },
          { label: 'احتمال زوال الجزر', values: ['أقل؛ وقد يلزم التكرار', 'أعلى'] },
          { label: 'احتمال تدخل جديد', values: ['أعلى', 'أقل'] },
          { label: 'مدة التعافي', values: ['أيام قليلة', 'أسبوعان إلى ثلاثة'] },
          { label: 'الملاءمة للدرجات العالية', values: ['محدودة', 'أكثر ملاءمة'] }
        ],
        note: 'هذا الجدول ليس ترتيبًا. فالطريق التنظيري أخف على الطفل لكنه أكثر حاجة إلى التكرار؛ وإعادة الزرع تستهدف نتيجة أكثر حسمًا لكنها عملية أكبر. وإن كنت قادمًا من الخارج فاحسب احتمال سفرة ثانية.'
      },
      recovery: [
        { period: 'أول 24 إلى 48 ساعة', body: 'الدم في البول والحرقة عند التبول أمران معتادان. وتُعطى سوائل وافرة. أما الحمى أو تعذّر التبول أو ألم شديد في الخاصرة فتستدعي تواصلًا فوريًا.' },
        { period: 'الأسبوع الأول', body: 'بعد الإجراء التنظيري يعود الطفل سريعًا إلى حياته المعتادة. وبعد الجراحة المفتوحة قد تظهر تشنّجات مثانية تُعالَج بالأدوية؛ ويُتجنَّب الجهد.' },
        { period: 'الأسبوع الثاني إلى الثالث', body: 'تقع العودة إلى الحضانة أو المدرسة بعد الجراحة المفتوحة عادة في هذه المدة. أما الدراجة والألعاب الاحتكاكية فتنتظر أكثر.' },
        { period: 'الشهر الأول إلى الثالث', body: 'مراجعة بتحليل البول والموجات. وغياب الالتهابات المصحوبة بحرارة علامة مواتية.' },
        { period: 'على المدى البعيد', body: 'عند الأطفال ذوي ندبات الكلية يُتابَع ضغط الدم ووظيفة الكلية على فترات لسنوات. ويُذكَّر لدى البنات أن الحمل مستقبلًا يستدعي انتباهًا خاصًا لالتهابات المسالك.' }
      ],
      price: {
        from: 0,
        to: 0,
        currency: 'EUR',
        disclaimer:
          'يتوقف المبلغ على الطريقة المختارة (تنظيرية أو مفتوحة)، وعلى كون العلاج من جهة واحدة أو من جهتين، وعلى مدة الإقامة. ويُقدَّم عرض مكتوب مفصّل بعد مراجعة وثائق طفلك.'
      },
      packageIncludes: [
        'الفحص والتقييم في مسالك الأطفال',
        'الموجات فوق الصوتية وما يلزم من تصوير',
        'تحاليل الدم والبول وزرع البول',
        'تقييم تخدير الأطفال',
        'غرفة العمليات والتخدير والمستلزمات',
        'المادة الحاقنة في الطريقة التنظيرية',
        'الإقامة في المستشفى (الطفل وأحد الوالدين)',
        'مراجعة بعد الخروج',
        'التنقلات بين المطار والمستشفى والفندق',
        'الإقامة (الطفل والمرافق)',
        'مترجم طبي ومنسّق للمرضى',
        'متابعة عن بُعد بعد العودة'
      ],
      faqs: [
        { q: 'هل يزول الجزر وحده؟', a: 'عند جزء كبير من الأطفال، ولا سيما في الدرجات المنخفضة، يزول مع النمو. ولهذا تكون المراقبة غالبًا المنهج الأول. وكلما ارتفعت الدرجة وتقدّم العمر قلّ احتمال الزوال التلقائي.' },
        { q: 'هل تتضرر الكلية إن لم نُجرِ العملية؟', a: 'ليس الجزر نفسه بل الالتهاب المصحوب بحرارة الذي يُحمَل معه هو ما قد يُندِّب الكلية. وعند طفل لا يصاب بالالتهابات يكون الخطر أقل بوضوح. ولهذا فالعمل الحقيقي في خطة المراقبة هو منع الالتهاب.' },
        { q: 'لماذا تعالجون الإمساك أولًا؟', a: 'لأن الإمساك واضطراب التبول يرفعان الضغط داخل المثانة؛ وهذا يُبقي الجزر ويُسهّل الالتهاب. والعملية قبل تصحيحهما تعطي نتيجة أسوأ. وهذه خطوة كثيرًا ما تُتخطّى مع أنها تحدد النتيجة مباشرة.' },
        { q: 'هل يكفي حقن تنظيري واحد؟', a: 'ليس دائمًا. فقد يستمر الجزر أو يعود بعد مدة؛ وعندها يُطرَح حقن ثانٍ أو إعادة زرع. والخطة التي لا تناقش هذا الاحتمال منذ البداية ناقصة.' },
        { q: 'هل يستمر على المضاد الحيوي بعد العملية؟', a: 'غالبًا لمدة إضافية، ثم يُوقَف بحسب نتائج المراجعة. ولا تتخذ القرار وحدك؛ فعند الأطفال ذوي سوابق التهاب مصحوب بحرارة يُخطَّط هذا الانتقال.' },
        { q: 'هل تُشفى ندبة الكلية؟', a: 'لا. فالعملية تمنع ضررًا جديدًا ولا تعيد الندبات القائمة. وهذه أكثر النقاط التي يُساء فهمها، ولذلك يهم اتخاذ القرار في وقته.' },
        { q: 'هل سيُعاد تصوير المثانة؟', a: 'ليس بصفة روتينية عند كل طفل. فقرار إعادة التصوير بعد الإجراء يتخذه الجرّاح بحسب الدرجة والإجراء المنفَّذ وسير الحالة. ويُتجنَّب التعرّض للإشعاع والقسطرة من دون داعٍ.' },
        { q: 'هل يمكن أن يكون عند إخوته؟', a: 'من المعروف وجود استعداد عائلي. فإن كان لأحد الإخوة سوابق التهاب بولي فأخبر طبيبك؛ أما الفحص الروتيني لكل الإخوة فغير لازم.' },
        { q: 'كم نبقى في تركيا؟', a: 'عادة 7 أيام في الإجراء التنظيري و10 إلى 12 يومًا في الجراحة المفتوحة. ولأن المراجعة تتم هنا فخطّط رحلة العودة بعدها.' },
        { q: 'ما الوثائق التي نرسلها؟', a: 'تقرير تصوير المثانة أثناء التبول وصوره إن أمكن، ونتيجة DMSA، وموجات الكلية، وتواريخ الالتهابات المصحوبة بحرارة، وزروع البول والمضادات المستعملة. ومن دونها لا تُعرَف الدرجة ولا حالة الكلية.' },
        { q: 'ابني غير مختون، هل لهذا أثر؟', a: 'عند أولاد مختارين ذوي التهابات بولية متكررة يمكن النظر في الختان وسيلةً لتقليل خطر الالتهاب. وليست توصية عامة لكل طفل؛ فناقشها في ضوء حالتك.' }
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
