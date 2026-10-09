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
