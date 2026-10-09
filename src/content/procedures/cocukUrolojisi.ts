import type { Treatment } from '../types';

/**
 * ÇOCUK ÜROLOJİSİ — kategori (hub) sayfası (Görev 7).
 *
 * reviewStatus: 'reviewed' — hekim onayı alındı (Dr. Ergün, 6 Ekim 2026);
 * `lastReviewed` o tarihle dolduruldu (bkz. content/types.ts).
 *
 * Alt sayfalar: hipospadias-onarimi, vur-cerrahisi.
 * Kaynak: EAU/ESPU Paediatric Urology kılavuzu.
 */
export const cocukUrolojisi: Treatment = {
  slug: 'cocuk-urolojisi',
  icon: 'urethra',
  reviewStatus: 'reviewed',

  lastReviewed: '2026-10-06',
  offersConsultation: false,
  i18n: {
    tr: {
      title: 'Çocuk Ürolojisi',
      summary:
        'Çocuğun idrar yolları ve genital organlarıyla ilgili durumlar erişkinin küçültülmüş hâli değildir. Çoğu bulgu gelişimle ilgilidir ve bir kısmı kendiliğinden düzelir; bu yüzden ilk soru "ameliyat ne zaman" değil, "ameliyat gerçekten gerekli mi" sorusudur.',
      metaTitle: 'Çocuk Ürolojisi: Hangi Durumda Ameliyat Gerekir',
      metaDescription:
        'Çocuklarda hipospadias, vezikoüreteral reflü, inmemiş testis, sünnet derisi sorunları ve idrar yolu enfeksiyonu: hangi bulgu izlenir, hangisi ameliyat gerektirir ve karar nasıl verilir.',
      quickFacts: {
        duration: 'İşleme göre değişir',
        anesthesia: 'Genel anestezi (çocuğa göre planlanır)',
        hospitalStay: 'Günübirlik – 2 gece',
        stayInTurkey: '7–14 gün',
        returnToWork: 'Kreş/okula dönüş 1–3 hafta',
        flightClearance: 'Kontrol muayenesinden sonra'
      },
      definition: [
        'Çocuk ürolojisi; böbrekler, idrar yolları, mesane ve dış genital organları ilgilendiren doğuştan gelen veya çocuklukta ortaya çıkan durumlarla ilgilenir. Erişkin ürolojisinden ayrılmasının nedeni yalnızca boyut değildir: çocuk büyümeye devam eden bir organizmadır ve bugün sorun gibi görünen bir bulgu birkaç yıl içinde kendiliğinden düzelebilir.',
        'Bu yüzden çocuk ürolojisinde ilk karar genellikle "hangi ameliyat" değil, "ameliyat gerçekten gerekli mi" sorusudur. Gereksiz bir girişim, düzelecek bir durumu kalıcı bir yara izine ve gereksiz bir anestezi deneyimine çevirir. Aynı şekilde gerekli bir girişimi ertelemek de böbreği kalıcı olarak etkileyebilir. Doğru yol, bu iki uçtan hangisinde olduğunuzu objektif ölçütlerle belirlemektir.',
        'En sık başvuru nedenleri şunlardır: idrar deliğinin yerinde olmaması (hipospadias), idrarın mesaneden böbreğe geri kaçması (vezikoüreteral reflü), tekrarlayan idrar yolu enfeksiyonu, inmemiş testis, sünnet derisinin açılmaması, gündüz veya gece idrar kaçırma, kasıkta şişlik (fıtık veya hidrosel) ve doğum öncesi ultrasonda saptanan böbrek genişlemesi.',
        'ANNE KARNINDA SAPTANAN BÖBREK GENİŞLEMESİ ÇOĞU ZAMAN BİR HASTALIK DEĞİLDİR. Gebelik ultrasonunda "böbrekte genişleme" denen bebeklerin büyük bölümünde doğumdan sonra tablo kendiliğinden düzelir. Yine de kontrol gerekir, çünkü küçük bir grupta altta gerçek bir tıkanıklık veya reflü vardır. Burada amaç aileyi korkutmak değil, hangi grupta olduğunu zamanında anlamaktır.',
        'ATEŞLİ İDRAR YOLU ENFEKSİYONU BİR UYARIDIR. Özellikle küçük çocukta ateşle seyreden idrar yolu enfeksiyonu, böbreği etkileyebilecek bir sorunun ilk işareti olabilir. Bu nedenle "antibiyotik verildi, geçti" ile yetinilmez; tekrarlayan ataklarda görüntüleme ile reflü veya tıkanıklık araştırılır. Böbrekte iz (skar) oluşması geri dönüşü olmayan bir süreçtir ve asıl önlenmeye çalışılan budur.',
        'SÜNNET KONUSUNDA ÖNEMLİ BİR UYARI: İdrar deliğinin yeri olağan dışı görünen bir çocuğa, bir ürolog değerlendirmeden sünnet yapılmamalıdır. Sünnet derisi hipospadias onarımında kullanılabilecek en değerli dokudur ve kesilip atıldığında onarım zorlaşır. Türkiye’de geleneksel sünnet uygulaması nedeniyle bu durum sık yaşanır.',
        'Çocukta cerrahi karar verilirken yaş, organ gelişimi, anestezi güvenliği ve çocuğun olayı hatırlayıp hatırlamayacağı birlikte değerlendirilir. Bazı ameliyatlar için en uygun dönem bebeklik, bazıları için okul öncesi, bazıları içinse ergenlik sonrasıdır. "Bir an önce yapalım" yaklaşımı her durumda doğru değildir.',
        'GÖRÜNTÜLEMEDE DE AZ OLAN İYİDİR. Çocuk, radyasyona erişkinden daha duyarlıdır ve önündeki yıllar daha uzundur. Bu nedenle ilk basamak hemen her zaman ultrasondur; tomografi ancak sonucu gerçekten değiştirecekse istenir. Aynı mantık sonda gerektiren filmler için de geçerlidir: işeme sistoüretrografisi değerli bir tetkiktir ama rutin olarak tekrarlanmaz. Size "her kontrolde film çekelim" denirse, bunun kararı nasıl değiştireceğini sormakta haklısınız.',
      ],
      eligibility: {
        suitable: [
          'İdrar deliğinin ucunda olmadığı (hipospadias) saptanan çocuklar',
          'Ateşli ve tekrarlayan idrar yolu enfeksiyonu geçiren çocuklar',
          'Görüntülemede vezikoüreteral reflü saptanan çocuklar',
          'Doğum öncesi veya sonrası ultrasonda böbrek genişlemesi görülen bebekler',
          'Testisi torbaya inmemiş çocuklar',
          'Gündüz idrar kaçırma, sıkışma veya idrar yapma güçlüğü olan çocuklar',
          'Daha önce başka bir merkezde ameliyat edilmiş ve sorun devam eden çocuklar'
        ],
        notSuitable: [
          'Bulgusu hafif olan ve izlemle düzelmesi beklenen çocuklar — bu durumda ameliyat önerilmez',
          'Aktif idrar yolu enfeksiyonu olan çocuklar: önce enfeksiyon tedavi edilir',
          'Tanısı henüz netleşmemiş çocuklar — önce görüntüleme ve değerlendirme tamamlanır',
          'Eşlik eden hastalıkları nedeniyle önce çocuk hekimi tarafından değerlendirilmesi gereken çocuklar'
        ]
      },
      technology: [
        'Çocuğa uygun çaplı sistoskopi ve endoskopik girişim seti',
        'Ameliyat mikroskobu veya büyüteçli gözlükle büyütmeli cerrahi',
        'Ultrason ve işeme sistoüretrografisi (VCUG) ile tanısal değerlendirme',
        'Böbrek işlevini ayrı ayrı gösteren sintigrafi (DMSA / MAG-3)',
        'Pediatrik anestezi ekibi ve çocuğa özel ağrı yönetimi',
        'Endoskopik enjeksiyon için dolgu (bulking) materyali'
      ],
      surgeonExperience: {
        caseVolume: '',
        note: 'Çocuk ürolojisinde sonucu belirleyen, kullanılan cihazdan çok kararın doğruluğudur: izlenmesi gereken bir çocuğu ameliyat etmemek, ameliyat gerekeni de geciktirmemek. Doç. Dr. Müslüm Ergün’ün rekonstrüktif üroloji ve üretra cerrahisindeki deneyimi, özellikle hipospadias onarımı ve tekrar girişim gereken olgularda yaklaşımın temelini oluşturur.'
      },
      timeline: [
        { when: 'Uzaktan', title: 'Belgelerin incelenmesi', body: 'Çocuğun doğum bilgileri, daha önce çekilmiş ultrason ve sintigrafi raporları, idrar tahlil ve kültür sonuçları, varsa ameliyat notları incelenir. Bu aşamada çoğu olguda ameliyat gerekip gerekmediği hakkında ilk görüş verilebilir.' },
        { when: '1. Gün', title: 'Muayene ve tetkikler', body: 'Yüz yüze muayene, ultrason ve gerekli görülen tetkikler yapılır. İdrar kültüründe üreme varsa planlanan girişim ertelenir.' },
        { when: '2. Gün', title: 'Girişim', body: 'Uygulanacak işleme göre endoskopik veya açık cerrahi yapılır. Çoğu çocuk aynı gün ya da ertesi gün taburcu olur.' },
        { when: '3.–10. Gün', title: 'Takip ve varsa sonda alımı', body: 'Sonda konulan işlemlerde sonda burada alınır ve çocuğun ilk idrarı gözlenir. Bu nedenle dönüş uçuşu sonda alımının ertesi gününe planlanmaz.' },
        { when: '1.–3. ay', title: 'Kontrol', body: 'İdrar tahlili, ultrason ve gerekirse ek görüntüleme ile sonuç değerlendirilir. Uzaktan takip için belgeler istenebilir.' }
      ],
      risks: [
        'Her cerrahi girişimde olduğu gibi kanama, enfeksiyon ve yara iyileşme sorunları görülebilir',
        'Genel anesteziye bağlı riskler — çocuğa özel doz ve izlemle azaltılır, ancak sıfırlanmaz',
        'Yapılan işleme göre idrar kaçağı (fistül) veya darlık gelişmesi',
        'Girişimin beklenen faydayı tam vermemesi ve ikinci bir işlem gerekmesi',
        'İzlem kararı verilen çocuklarda tablonun beklenenden yavaş düzelmesi ve sonradan girişim gerekmesi',
        'Tekrarlayan ateşli enfeksiyonlarda böbrekte kalıcı iz (skar) gelişmesi — asıl önlenmeye çalışılan sonuç budur',
        'Çocuğun büyümesiyle birlikte tablonun değişmesi ve ergenlikte yeniden değerlendirme gerekmesi'
      ],
      alternatives: [
        'İzlem — birçok çocukta ilk ve en doğru seçenektir; düzenli ultrason ve idrar takibiyle yürütülür',
        'Koruyucu (profilaktik) antibiyotik — seçilmiş reflü olgularında enfeksiyonu önlemek için',
        'Mesane ve bağırsak alışkanlıklarının düzenlenmesi — kabızlığın giderilmesi ve işeme eğitimi; çoğu çocukta ilaçtan önce gelir',
        'Endoskopik enjeksiyon — reflüde kesi yapılmadan uygulanabilen seçenek',
        'Açık veya laparoskopik cerrahi — izlem ve daha az girişimsel seçenekler yeterli olmadığında'
      ],
      recovery: [
        { period: 'İlk 48 saat', body: 'Ağrı genellikle basit ağrı kesicilerle kontrol edilir. Bol sıvı verilir. Ateş, idrar yapamama veya yara yerinden akıntı durumunda derhal başvurulmalıdır.' },
        { period: '1. hafta', body: 'Çocuk evde dinlenir. Bölgeye baskı yapan hareketlerden (bisiklet, kucakta bacak ayırarak taşıma) kaçınılır.' },
        { period: '2.–4. hafta', body: 'Kreş veya okula dönüş genellikle bu dönemdedir. Aktif oyun ve spor biraz daha ertelenir.' },
        { period: '1.–3. ay', body: 'Kontrol ultrasonu ve idrar tahlili ile sonuç değerlendirilir. Yara izleri bu dönemde soluklaşmaya başlar.' },
        { period: 'Uzun dönem', body: 'Reflü veya böbrek etkilenmesi olan çocuklarda tansiyon ve böbrek işlevi yıllar boyunca aralıklı izlenir. Bu bir sorun işareti değil, olağan bir takip planıdır.' }
      ],
      price: {
        from: 0,
        to: 0,
        currency: 'EUR',
        disclaimer:
          'Tutar; uygulanacak işleme, anestezi süresine ve hastanede kalış süresine göre değişir. Kalem kalem ayrılmış yazılı teklif, çocuğunuzun belgeleri incelendikten sonra verilir.'
      },
      packageIncludes: [
        'Muayene ve çocuk ürolojisi değerlendirmesi',
        'Ultrason ve gerekli görülen görüntüleme',
        'Kan ve idrar tetkikleri, idrar kültürü',
        'Pediatrik anestezi değerlendirmesi',
        'Ameliyathane, anestezi ve sarf malzemeleri',
        'Hastane yatışı (çocuk + 1 refakatçi)',
        'Pansuman ve varsa sonda alımı',
        'Havalimanı–hastane–otel transferleri',
        'Konaklama (çocuk + refakatçi)',
        'Tıbbi tercüman ve hasta koordinatörü',
        'Dönüşten sonra uzaktan takip'
      ],
      faqs: [
        { q: 'Çocuğumun ameliyat olması şart mı?', a: 'Çoğu durumda ilk seçenek izlemdir. Ameliyat kararı; bulgunun kendiliğinden düzelme ihtimaline, böbreğin etkilenip etkilenmediğine ve çocuğun şikâyetine bakılarak verilir. Belgeleriniz incelendiğinde size bu ayrım açıkça anlatılır.' },
        { q: 'Gebelikte böbrek genişlemesi dendi, endişelenmeli miyim?', a: 'Bu bulgu sık görülür ve bebeklerin büyük bölümünde doğumdan sonra kendiliğinden düzelir. Yine de kontrol gerekir, çünkü küçük bir grupta altta gerçek bir tıkanıklık veya reflü vardır. Amaç korkutmak değil, hangi grupta olduğunu zamanında anlamaktır.' },
        { q: 'Çocuğum sık idrar yolu enfeksiyonu geçiriyor, bu normal mi?', a: 'Hayır. Özellikle ateşli ve tekrarlayan enfeksiyonlar araştırılmalıdır. "Antibiyotik verildi, geçti" ile yetinilmez; görüntüleme ile reflü veya tıkanıklık olup olmadığına bakılır. Amaç böbrekte kalıcı iz oluşmasını önlemektir.' },
        { q: 'Sünnet ettirebilir miyim?', a: 'İdrar deliğinin yeri olağan dışı görünüyorsa, bir ürolog değerlendirmeden HAYIR. Sünnet derisi hipospadias onarımında kullanılacak en değerli dokudur; kesilirse onarım zorlaşır ve gerekirse ağız içinden greft almak gerekebilir.' },
        { q: 'Testisi inmemiş, beklesek düzelir mi?', a: 'İlk aylarda kendiliğinden inme ihtimali vardır, ancak bu süre sınırsız değildir. Belirli bir yaştan sonra beklemek testis gelişimi açısından yararlı değildir. Bu nedenle inmemiş testis izlemsiz bırakılmaz, belirli aralıklarla kontrol edilir.' },
        { q: 'Çocuğum gündüz idrar kaçırıyor, ameliyat gerekir mi?', a: 'Çoğu zaman hayır. Gündüz kaçırmanın en sık nedenleri kabızlık, idrarı geciktirme alışkanlığı ve mesane-bağırsak işlev bozukluğudur. Bunlar düzeltilmeden yapılacak bir girişim beklenen faydayı vermez.' },
        { q: 'Anestezi çocuğuma zarar verir mi?', a: 'Pediatrik anestezi, çocuğa özel ilaç dozları ve izlemle yapılır; bu nedenle ameliyat öncesi anestezi değerlendirmesi ayrı bir basamaktır. Risk sıfır değildir; ancak gerekli bir girişimi ertelemenin riski de ayrıca değerlendirilir.' },
        { q: 'Türkiye’de ne kadar kalmamız gerekir?', a: 'Uygulanacak işleme göre genellikle 7–14 gün. Sonda konulan işlemlerde sonda burada alınır ve ilk idrar gözlenir; bu nedenle dönüş uçuşunu sonda alımının ertesi gününe planlamayın.' },
        { q: 'Hangi belgeleri göndermeliyiz?', a: 'Varsa gebelik ve doğum sonrası ultrason raporları, sintigrafi ve işeme sistoüretrografisi sonuçları, idrar tahlil ve kültürleri, geçirilmiş enfeksiyonların kayıtları ve daha önce yapılmış ameliyatların notları. Bunlarla çoğu olguda ilk görüş siz yola çıkmadan verilebilir.' },
        { q: 'Çocuğum büyüdüğünde tekrar kontrol gerekir mi?', a: 'Bazı durumlarda evet. Özellikle hipospadias onarımı yapılan çocuklarda ergenlikte penis büyüdükçe yeniden değerlendirme olağandır. Reflü veya böbrek etkilenmesi olan çocuklarda tansiyon ve böbrek işlevi uzun süre aralıklı izlenir.' },
        { q: 'Çocuğuma tomografi çekilmeli mi?', a: 'Çoğu durumda hayır. Çocukta ilk basamak ultrasondur; radyasyon içeren tetkikler ancak sonucu gerçekten değiştirecekse istenir. Çocuk radyasyona erişkinden daha duyarlıdır ve önündeki yıllar daha uzundur. Bir tetkik önerildiğinde "bu sonuç planı değiştirecek mi" diye sormak hakkınızdır.' },
        { q: 'Ameliyat sırasında çocuğumun yanında kalabilir miyim?', a: 'Ameliyathanenin içinde kalınamaz; ancak çocuğunuzun uyutulduğu ana kadar yanında olmanız ve uyandığında ilk gördüğü kişinin siz olmanız mümkün olabilir. Bu düzenleme hastaneye ve çocuğun yaşına göre değişir ve anestezi değerlendirmesinde konuşulur. Bir ebeveynin hastanede gece kalması ise rutindir.' }
      ],
      sources: [
        {
          label: 'EAU/ESPU Guidelines on Paediatric Urology — Avrupa Üroloji Derneği',
          url: 'https://uroweb.org/guidelines/paediatric-urology'
        }
      ]
    },
    en: {
      title: 'Paediatric Urology',
      summary:
        'Urinary and genital conditions in children are not a smaller version of adult urology. Most findings relate to development and some resolve on their own, so the first question is not "when do we operate" but "is an operation actually needed".',
      metaTitle: 'Paediatric Urology: When Surgery Is Actually Needed',
      metaDescription:
        'Hypospadias, vesicoureteral reflux, undescended testis, foreskin problems and urinary infections in children: which findings are watched, which need surgery, and how the decision is made.',
      quickFacts: {
        duration: 'Varies with the procedure',
        anesthesia: 'General anaesthesia, planned for the child',
        hospitalStay: 'Day case – 2 nights',
        stayInTurkey: '7–14 days',
        returnToWork: 'Back to nursery or school in 1–3 weeks',
        flightClearance: 'After the review appointment'
      },
      definition: [
        'Paediatric urology deals with congenital conditions, and conditions arising in childhood, that affect the kidneys, urinary tract, bladder and external genitalia. What separates it from adult urology is not only size: a child is still growing, and a finding that looks like a problem today may resolve on its own within a few years.',
        'The first decision is therefore usually not "which operation" but "is an operation really needed". An unnecessary procedure turns a self-limiting condition into a permanent scar and an avoidable anaesthetic. Equally, delaying a necessary one can affect the kidney permanently. The right path is to establish, using objective criteria, which of those two situations you are in.',
        'The commonest reasons for referral are: a urinary opening not at the tip of the penis (hypospadias), urine flowing backwards from the bladder to the kidney (vesicoureteral reflux), recurrent urinary infection, an undescended testis, a foreskin that will not retract, daytime or night-time wetting, a groin swelling (hernia or hydrocele), and kidney dilatation seen on an antenatal scan.',
        'KIDNEY DILATATION SEEN BEFORE BIRTH IS USUALLY NOT A DISEASE. In most babies described as having "dilated kidneys" on a pregnancy scan, the picture settles by itself after birth. Follow-up is still needed, because a small group do have genuine obstruction or reflux underneath. The aim is not to alarm families but to identify in good time which group the child belongs to.',
        'A FEBRILE URINARY INFECTION IS A WARNING. In a young child in particular, a urinary infection with fever can be the first sign of something that may affect the kidney. "Antibiotics were given and it settled" is therefore not the end of the matter; with recurrent episodes, imaging is used to look for reflux or obstruction. Scarring of the kidney is irreversible, and preventing it is the real objective.',
        'AN IMPORTANT POINT ABOUT CIRCUMCISION: a boy whose urinary opening looks unusual should not be circumcised before a urologist has seen him. The foreskin is the most valuable tissue available for hypospadias repair, and once removed the repair becomes harder.',
        'When a surgical decision is made in a child, age, organ development, anaesthetic safety and whether the child will remember the event are weighed together. For some operations infancy is the best window, for others the pre-school years, for others after puberty. "Let us get it done as soon as possible" is not always the right approach.',
        'LESS IS ALSO BETTER IN IMAGING. A child is more sensitive to radiation than an adult and has more years ahead. The first step is therefore almost always ultrasound; a CT scan is requested only where it will genuinely change the outcome. The same reasoning applies to studies needing a catheter: voiding cystourethrography is a valuable test but is not repeated routinely. If you are told "let us take a film at every visit", you are entitled to ask how it will change the decision.',
      ],
      eligibility: {
        suitable: [
          'Boys found to have the urinary opening away from the tip (hypospadias)',
          'Children with recurrent febrile urinary infections',
          'Children in whom imaging shows vesicoureteral reflux',
          'Babies with kidney dilatation on antenatal or postnatal ultrasound',
          'Boys with an undescended testis',
          'Children with daytime wetting, urgency or difficulty voiding',
          'Children operated elsewhere whose problem persists'
        ],
        notSuitable: [
          'Children with mild findings expected to settle on observation — surgery is not advised',
          'Children with an active urinary infection: the infection is treated first',
          'Children whose diagnosis is not yet clear — imaging and assessment are completed first',
          'Children with other conditions who need paediatric assessment beforehand'
        ]
      },
      technology: [
        'Child-calibre cystoscopy and endoscopic instrument sets',
        'Magnified surgery with an operating microscope or loupes',
        'Ultrasound and voiding cystourethrography (VCUG) for diagnosis',
        'Scintigraphy showing each kidney’s function separately (DMSA / MAG-3)',
        'Paediatric anaesthetic team and child-specific pain management',
        'Bulking material for endoscopic injection'
      ],
      surgeonExperience: {
        caseVolume: '',
        note: 'In paediatric urology the outcome is determined less by the device used than by the soundness of the decision: not operating on a child who should be watched, and not delaying a child who should be operated on. Assoc. Prof. Dr. Müslüm Ergün’s experience in reconstructive urology and urethral surgery underpins the approach, particularly in hypospadias repair and in cases needing a further procedure.'
      },
      timeline: [
        { when: 'Remotely', title: 'Review of documents', body: 'Birth details, previous ultrasound and scintigraphy reports, urinalysis and culture results and any operation notes are reviewed. In most cases a first opinion on whether surgery is needed can be given at this stage.' },
        { when: 'Day 1', title: 'Examination and tests', body: 'Examination, ultrasound and any further tests are carried out. If the urine culture grows an organism, the planned procedure is postponed.' },
        { when: 'Day 2', title: 'Procedure', body: 'Endoscopic or open surgery according to the plan. Most children are discharged the same or the following day.' },
        { when: 'Days 3–10', title: 'Follow-up and catheter removal where relevant', body: 'Where a catheter has been placed it is removed here and the first void is observed. For that reason the return flight is not planned for the day after removal.' },
        { when: 'Months 1–3', title: 'Review', body: 'Urinalysis, ultrasound and, where needed, further imaging assess the result. Documents may be requested for remote follow-up.' }
      ],
      risks: [
        'As with any operation, bleeding, infection and problems with wound healing can occur',
        'Risks of general anaesthesia — reduced by child-specific dosing and monitoring, but never eliminated',
        'Depending on the procedure, a urine leak (fistula) or a stricture may develop',
        'The procedure may not deliver the full expected benefit and a second one may be needed',
        'In children managed by observation, the picture may settle more slowly than expected and surgery may later be required',
        'Permanent kidney scarring after recurrent febrile infections — this is precisely the outcome being guarded against',
        'As the child grows the picture may change, and reassessment at puberty may be needed'
      ],
      alternatives: [
        'Observation — in many children the first and most appropriate option, with regular ultrasound and urine checks',
        'Preventive (prophylactic) antibiotics — in selected cases of reflux, to prevent infection',
        'Managing bladder and bowel habits — treating constipation and voiding retraining; in most children this comes before medication',
        'Endoscopic injection — an option in reflux that avoids an incision',
        'Open or laparoscopic surgery — when observation and less invasive options are not enough'
      ],
      recovery: [
        { period: 'First 48 hours', body: 'Pain is usually controlled with simple analgesics. Plenty of fluids are given. Fever, inability to pass urine, or discharge from the wound require immediate contact.' },
        { period: 'Week 1', body: 'The child rests at home. Activities that press on the area (bicycles, carrying the child astride the hip) are avoided.' },
        { period: 'Weeks 2–4', body: 'Return to nursery or school usually falls in this period. Active play and sport wait a little longer.' },
        { period: 'Months 1–3', body: 'A review ultrasound and urinalysis assess the result. Scars begin to fade in this period.' },
        { period: 'Long term', body: 'In children with reflux or affected kidneys, blood pressure and kidney function are checked intermittently over the years. That is a routine follow-up plan, not a sign of trouble.' }
      ],
      price: {
        from: 0,
        to: 0,
        currency: 'EUR',
        disclaimer:
          'The amount depends on the procedure, the anaesthetic time and the length of hospital stay. An itemised written quotation is given once your child’s documents have been reviewed.'
      },
      packageIncludes: [
        'Examination and paediatric urology assessment',
        'Ultrasound and any imaging required',
        'Blood and urine tests, urine culture',
        'Paediatric anaesthetic assessment',
        'Operating theatre, anaesthesia and consumables',
        'Hospital stay (child plus one parent)',
        'Dressings and catheter removal where relevant',
        'Airport–hospital–hotel transfers',
        'Accommodation (child and accompanying parent)',
        'Medical interpreter and patient coordinator',
        'Remote follow-up after you return home'
      ],
      faqs: [
        { q: 'Does my child definitely need an operation?', a: 'In most situations observation is the first option. The decision rests on the chance of spontaneous resolution, whether the kidney is affected, and the child’s symptoms. Once your documents are reviewed this distinction is explained to you plainly.' },
        { q: 'The pregnancy scan showed kidney dilatation — should I worry?', a: 'This finding is common and settles by itself in most babies after birth. Follow-up is still needed, because a small group do have genuine obstruction or reflux. The aim is not to alarm you but to identify in good time which group your child is in.' },
        { q: 'My child keeps getting urinary infections — is that normal?', a: 'No. Recurrent infections with fever in particular should be investigated. "Antibiotics were given and it settled" is not enough; imaging is used to look for reflux or obstruction. The aim is to prevent permanent kidney scarring.' },
        { q: 'Can he be circumcised?', a: 'If the urinary opening looks unusual, not before a urologist has seen him. The foreskin is the most valuable tissue for hypospadias repair; once removed the repair becomes harder and a graft from inside the mouth may be needed.' },
        { q: 'His testis has not descended — will waiting help?', a: 'Spontaneous descent is possible in the early months, but that window is not open indefinitely. Beyond a certain age, waiting does not help testicular development. An undescended testis is therefore not simply left; it is checked at set intervals.' },
        { q: 'My child wets during the day — is surgery needed?', a: 'Usually not. The commonest causes of daytime wetting are constipation, the habit of postponing urination, and bladder–bowel dysfunction. A procedure carried out before these are addressed will not deliver the expected benefit.' },
        { q: 'Is anaesthesia harmful to my child?', a: 'Paediatric anaesthesia uses child-specific doses and monitoring, which is why the pre-operative assessment is a separate step. The risk is not zero; but the risk of delaying a necessary procedure is also weighed.' },
        { q: 'How long should we stay in Türkiye?', a: 'Usually 7–14 days depending on the procedure. Where a catheter is placed it is removed here and the first void observed, so do not plan the return flight for the day after removal.' },
        { q: 'What documents should we send?', a: 'Antenatal and postnatal ultrasound reports, scintigraphy and voiding cystourethrography results, urinalyses and cultures, records of previous infections, and notes of any previous surgery. With these, a first opinion can usually be given before you travel.' },
        { q: 'Will he need checking again when he is older?', a: 'In some conditions, yes. After hypospadias repair in particular, reassessment at puberty as the penis grows is routine. In children with reflux or affected kidneys, blood pressure and kidney function are followed intermittently for years.' },
        { q: 'Should my child have a CT scan?', a: 'In most situations, no. Ultrasound is the first step in a child; tests involving radiation are requested only where they will genuinely change the outcome. A child is more sensitive to radiation than an adult and has more years ahead. When a test is proposed, you are entitled to ask whether the result will change the plan.' },
        { q: 'Can I stay with my child during the operation?', a: 'You cannot remain inside the operating theatre; but it may be possible for you to be with your child until he or she is asleep, and to be the first person seen on waking. That arrangement varies with the hospital and the child’s age and is discussed at the anaesthetic assessment. One parent staying overnight in hospital is routine.' }
      ],
      sources: [
        {
          label: 'EAU/ESPU Guidelines on Paediatric Urology — European Association of Urology',
          url: 'https://uroweb.org/guidelines/paediatric-urology'
        }
      ]
    },
    ar: {
      title: 'مسالك الأطفال',
      summary:
        'ليست حالات المسالك البولية والأعضاء التناسلية عند الأطفال نسخة مصغّرة من مسالك البالغين. فأكثرها يتعلق بالنمو وبعضها يزول من تلقاء نفسه؛ ولذلك فالسؤال الأول ليس «متى نجري العملية» بل «هل العملية لازمة فعلًا».',
      metaTitle: 'مسالك الأطفال: متى تكون الجراحة لازمة فعلًا',
      metaDescription:
        'الإحليل التحتي والجزر المثاني الحالبي والخصية غير النازلة ومشكلات القلفة والتهابات المسالك عند الأطفال: ما الذي يُراقَب وما الذي يُجرى له جراحة وكيف يُتخذ القرار.',
      quickFacts: {
        duration: 'يختلف بحسب الإجراء',
        anesthesia: 'تخدير عام مخطَّط بحسب الطفل',
        hospitalStay: 'من دون مبيت – ليلتان',
        stayInTurkey: '7 إلى 14 يومًا',
        returnToWork: 'العودة إلى الحضانة أو المدرسة خلال أسبوع إلى ثلاثة',
        flightClearance: 'بعد مراجعة المتابعة'
      },
      definition: [
        'تُعنى مسالك الأطفال بالحالات الخِلقية وتلك التي تظهر في الطفولة وتصيب الكليتين والمسالك البولية والمثانة والأعضاء التناسلية الخارجية. وما يميّزها عن مسالك البالغين ليس الحجم وحده: فالطفل ما زال ينمو، وقد تزول من تلقاء نفسها خلال سنوات قليلة علامة تبدو اليوم مشكلة.',
        'ولهذا فالقرار الأول ليس عادة «أي عملية» بل «هل العملية لازمة فعلًا». فالتدخل غير الضروري يحوّل حالة تزول وحدها إلى ندبة دائمة وإلى تخدير كان يمكن تجنّبه. وفي المقابل قد يُلحق تأجيل تدخل لازم ضررًا دائمًا بالكلية. والطريق الصحيح هو تحديد أي الوضعين لديك بمعايير موضوعية.',
        'وأكثر أسباب المراجعة شيوعًا: فتحة بول ليست في طرف القضيب (الإحليل التحتي)، ورجوع البول من المثانة إلى الكلية (الجزر المثاني الحالبي)، والتهابات بولية متكررة، وخصية غير نازلة، وقلفة لا تنكشف، وتبوّل لا إرادي نهارًا أو ليلًا، وانتفاخ في المغبن (فتق أو قيلة مائية)، واتساع في الكلية يُرى في تصوير الحمل بالموجات.',
        'واتساع الكلية المُكتشَف قبل الولادة ليس مرضًا في الغالب. فعند معظم الأطفال الذين وُصفت كليتاهما بأنها «متسعة» في تصوير الحمل تستقر الصورة من تلقاء نفسها بعد الولادة. ومع ذلك تلزم المتابعة، لأن لدى فئة قليلة انسدادًا حقيقيًا أو جزرًا. والهدف ليس إخافة الأسرة بل معرفة الفئة التي ينتمي إليها الطفل في وقتها.',
        'والتهاب المسالك المصحوب بحرارة إنذار. فعند الطفل الصغير خصوصًا قد يكون أول علامة على أمر قد يصيب الكلية. ولهذا لا يكفي القول «أُعطي مضاد حيوي وزال»؛ فعند تكرار النوبات يُبحَث بالتصوير عن جزر أو انسداد. وتندّب الكلية لا رجعة فيه، وهو ما يُسعى إلى منعه.',
        'وثمة نقطة مهمة في الختان: الطفل الذي يبدو موضع فتحة البول لديه غير معتاد ينبغي ألّا يُختَن قبل أن يفحصه طبيب مسالك. فالقلفة أثمن نسيج لإصلاح الإحليل التحتي، وبإزالتها يصير الإصلاح أصعب.',
        'وعند اتخاذ قرار جراحي عند الطفل يُوزَن معًا: العمر، ونمو العضو، وسلامة التخدير، وهل سيتذكر الطفل ما جرى. فبعض العمليات أفضل وقت لها الرضاعة، وبعضها ما قبل المدرسة، وبعضها ما بعد البلوغ. وليس «لنُنجزها بسرعة» صوابًا في كل حال.',
        'والأقل أفضل في التصوير أيضًا. فالطفل أكثر حساسية للإشعاع من البالغ وأمامه سنوات أطول. ولذلك تكون الخطوة الأولى في الغالب الموجات فوق الصوتية؛ ولا يُطلَب التصوير المقطعي إلا إذا كان سيغيّر التدبير فعلًا. والمنطق نفسه ينطبق على الفحوص التي تحتاج قسطرة: فتصوير المثانة أثناء التبول فحص قيّم لكنه لا يُكرَّر روتينيًا. فإن قيل لك «لنُجرِ صورة في كل مراجعة» فمن حقك أن تسأل كيف ستغيّر القرار.',
      ],
      eligibility: {
        suitable: [
          'الأطفال الذين تبيّن أن فتحة البول لديهم ليست في الطرف (الإحليل التحتي)',
          'الأطفال الذين يعانون التهابات بولية متكررة مصحوبة بحرارة',
          'الأطفال الذين يُظهر التصوير لديهم جزرًا مثانيًا حالبيًا',
          'الرضّع الذين يُرى لديهم اتساع في الكلية في التصوير قبل الولادة أو بعدها',
          'الأطفال الذين لم تنزل خصيتهم إلى الكيس',
          'الأطفال الذين يعانون تبوّلًا لا إراديًا نهارًا أو إلحاحًا أو صعوبة في التبول',
          'الأطفال الذين أُجريت لهم عملية في مركز آخر ولا تزال المشكلة قائمة'
        ],
        notSuitable: [
          'الأطفال ذوو العلامات الخفيفة التي يُنتظَر زوالها بالمراقبة — ولا تُقترح الجراحة',
          'الأطفال المصابون بالتهاب بولي نشط: يُعالَج الالتهاب أولًا',
          'الأطفال الذين لم يتضح تشخيصهم بعد — يُستكمَل التصوير والتقييم أولًا',
          'الأطفال ذوو أمراض مرافقة ممن ينبغي أن يقيّمهم طبيب الأطفال أولًا'
        ]
      },
      technology: [
        'تنظير مثانة وأدوات تنظيرية بقياسات الأطفال',
        'جراحة بالتكبير عبر المجهر الجراحي أو النظارات المكبّرة',
        'الموجات فوق الصوتية وتصوير المثانة والإحليل أثناء التبول للتشخيص',
        'التصوير النظائري لوظيفة كل كلية على حدة (DMSA / MAG-3)',
        'فريق تخدير أطفال وتدبير ألم مخصص للطفل',
        'مادة حاقنة للحقن التنظيري'
      ],
      surgeonExperience: {
        caseVolume: '',
        note: 'في مسالك الأطفال تتحدد النتيجة بصواب القرار أكثر مما تتحدد بالجهاز المستعمل: ألّا يُجرى عمل جراحي لطفل ينبغي مراقبته، وألّا يتأخر من ينبغي إجراء العملية له. وخبرة الأستاذ المشارك د. مسلم إرغن في المسالك الترميمية وجراحة الإحليل أساس هذا المنهج، ولا سيما في إصلاح الإحليل التحتي وفي الحالات التي تحتاج تدخلًا إضافيًا.'
      },
      timeline: [
        { when: 'عن بُعد', title: 'مراجعة الوثائق', body: 'تُراجَع معطيات الولادة، وتقارير الموجات والتصوير النظائري السابقة، ونتائج تحليل البول وزرعه، وتقارير أي عمليات. ويمكن في معظم الحالات إعطاء رأي أولي في هذه المرحلة عمّا إذا كانت الجراحة لازمة.' },
        { when: 'اليوم الأول', title: 'الفحص والتحاليل', body: 'الفحص والموجات فوق الصوتية وما يلزم من فحوص. وإن نما في زرع البول جرثوم أُجّل الإجراء المخطَّط.' },
        { when: 'اليوم الثاني', title: 'الإجراء', body: 'جراحة تنظيرية أو مفتوحة بحسب الخطة. ويخرج معظم الأطفال في اليوم نفسه أو في اليوم التالي.' },
        { when: 'اليوم الثالث إلى العاشر', title: 'المتابعة ونزع القسطرة عند وجودها', body: 'حين تُوضَع قسطرة تُنزَع هنا ويُراقَب أول تبول. ولهذا لا تُحجَز رحلة العودة في اليوم التالي للنزع.' },
        { when: 'الشهر الأول إلى الثالث', title: 'المراجعة', body: 'يُقيَّم الناتج بتحليل البول والموجات وبتصوير إضافي عند الحاجة. وقد تُطلَب وثائق للمتابعة عن بُعد.' }
      ],
      risks: [
        'كما في أي عملية: نزف والتهاب ومشكلات في التئام الجرح',
        'مخاطر التخدير العام — تقل بالجرعات والمراقبة المخصّصة للطفل ولا تنعدم',
        'بحسب الإجراء قد ينشأ تسرّب بول (ناسور) أو تضيّق',
        'قد لا يعطي الإجراء كامل الفائدة المرجوّة وقد يلزم إجراء ثانٍ',
        'عند الأطفال الذين تُختار لهم المراقبة قد تزول الصورة أبطأ من المتوقع وقد تلزم جراحة لاحقًا',
        'تندّب دائم في الكلية بعد التهابات متكررة مصحوبة بحرارة — وهذا تحديدًا ما يُسعى إلى منعه',
        'قد تتغير الصورة مع نمو الطفل وقد تلزم إعادة تقييم عند البلوغ'
      ],
      alternatives: [
        'المراقبة — وهي عند كثير من الأطفال الخيار الأول والأصوب، بموجات دورية ومتابعة للبول',
        'المضاد الحيوي الوقائي — في حالات مختارة من الجزر لمنع الالتهاب',
        'تنظيم عادات المثانة والأمعاء — معالجة الإمساك وإعادة تدريب التبول؛ وهذا يسبق الدواء عند معظم الأطفال',
        'الحقن التنظيري — خيار في الجزر من دون شق',
        'الجراحة المفتوحة أو بالمنظار — حين لا تكفي المراقبة والخيارات الأقل تدخلًا'
      ],
      recovery: [
        { period: 'أول 48 ساعة', body: 'يُضبَط الألم عادة بمسكنات بسيطة. وتُعطى سوائل وافرة. أما الحمى أو تعذّر التبول أو إفراز من الجرح فتستدعي تواصلًا فوريًا.' },
        { period: 'الأسبوع الأول', body: 'يرتاح الطفل في البيت. ويُتجنَّب كل ما يضغط على المنطقة (الدراجة والحمل على الورك بتفريج الساقين).' },
        { period: 'الأسبوع الثاني إلى الرابع', body: 'تقع العودة إلى الحضانة أو المدرسة عادة في هذه المدة. أما اللعب النشط والرياضة فينتظران أكثر قليلًا.' },
        { period: 'الشهر الأول إلى الثالث', body: 'تُقيَّم النتيجة بموجات المراجعة وتحليل البول. وتبدأ الندبات بالبهتان.' },
        { period: 'على المدى البعيد', body: 'عند الأطفال ذوي الجزر أو تأثر الكلية يُتابَع ضغط الدم ووظيفة الكلية على فترات متباعدة لسنوات. وهذه خطة متابعة معتادة وليست إشارة خطر.' }
      ],
      price: {
        from: 0,
        to: 0,
        currency: 'EUR',
        disclaimer:
          'يتوقف المبلغ على الإجراء ومدة التخدير ومدة الإقامة في المستشفى. ويُقدَّم عرض مكتوب مفصّل بعد مراجعة وثائق طفلك.'
      },
      packageIncludes: [
        'الفحص والتقييم في مسالك الأطفال',
        'الموجات فوق الصوتية وما يلزم من تصوير',
        'تحاليل الدم والبول وزرع البول',
        'تقييم تخدير الأطفال',
        'غرفة العمليات والتخدير والمستلزمات',
        'الإقامة في المستشفى (الطفل وأحد الوالدين)',
        'الضمادات ونزع القسطرة عند وجودها',
        'التنقلات بين المطار والمستشفى والفندق',
        'الإقامة (الطفل والمرافق)',
        'مترجم طبي ومنسّق للمرضى',
        'متابعة عن بُعد بعد العودة'
      ],
      faqs: [
        { q: 'هل لا بد من عملية لطفلي؟', a: 'في معظم الحالات الخيار الأول هو المراقبة. ويتوقف القرار على احتمال الزوال التلقائي وعلى تأثر الكلية وعلى شكوى الطفل. وبعد مراجعة وثائقك يُشرَح لك هذا التمييز بوضوح.' },
        { q: 'قيل في تصوير الحمل إن هناك اتساعًا في الكلية، هل أقلق؟', a: 'هذه علامة شائعة تزول وحدها عند معظم الأطفال بعد الولادة. ومع ذلك تلزم المتابعة لأن لدى فئة قليلة انسدادًا حقيقيًا أو جزرًا. والهدف ليس الإخافة بل معرفة فئة طفلك في وقتها.' },
        { q: 'طفلي يصاب كثيرًا بالتهاب المسالك، هل هذا طبيعي؟', a: 'لا. وينبغي تقصّي الالتهابات المتكررة المصحوبة بحرارة خصوصًا. فلا يكفي «أُعطي مضاد حيوي وزال»؛ إذ يُبحَث بالتصوير عن جزر أو انسداد. والهدف منع تندّب دائم في الكلية.' },
        { q: 'هل أختنه؟', a: 'إن بدا موضع فتحة البول غير معتاد فلا، قبل أن يفحصه طبيب مسالك. فالقلفة أثمن نسيج لإصلاح الإحليل التحتي؛ وبإزالتها يصير الإصلاح أصعب وقد يلزم طُعم من مخاطية الفم.' },
        { q: 'خصيته لم تنزل، هل ينفع الانتظار؟', a: 'النزول التلقائي ممكن في الأشهر الأولى، لكن هذه النافذة ليست مفتوحة إلى ما لا نهاية. وبعد سن معينة لا يفيد الانتظار نمو الخصية. ولذلك لا تُترك الخصية غير النازلة من دون متابعة، بل تُراقَب على فترات محددة.' },
        { q: 'طفلي يتبوّل نهارًا من دون إرادة، هل يحتاج جراحة؟', a: 'غالبًا لا. فأكثر الأسباب شيوعًا الإمساك وعادة تأجيل التبول واضطراب وظيفة المثانة والأمعاء. والتدخل قبل معالجتها لا يعطي الفائدة المرجوّة.' },
        { q: 'هل يضر التخدير بطفلي؟', a: 'يعتمد تخدير الأطفال على جرعات ومراقبة مخصّصة؛ ولهذا يُعد التقييم قبل العملية خطوة مستقلة. والخطر ليس صفرًا، لكن يُوزَن أيضًا خطر تأجيل تدخل لازم.' },
        { q: 'كم نبقى في تركيا؟', a: 'عادة من 7 إلى 14 يومًا بحسب الإجراء. وحين تُوضَع قسطرة تُنزَع هنا ويُراقَب أول تبول؛ فلا تحجز رحلة العودة في اليوم التالي للنزع.' },
        { q: 'ما الوثائق التي نرسلها؟', a: 'تقارير الموجات قبل الولادة وبعدها، ونتائج التصوير النظائري وتصوير المثانة أثناء التبول، وتحاليل البول وزرعه، وسجل الالتهابات السابقة، وتقارير أي عمليات سابقة. وبها يمكن غالبًا إعطاء رأي أولي قبل سفركم.' },
        { q: 'هل يحتاج مراجعة حين يكبر؟', a: 'في بعض الحالات نعم. وبعد إصلاح الإحليل التحتي خصوصًا تكون إعادة التقييم عند البلوغ معتادة مع النمو. وعند الأطفال ذوي الجزر أو تأثر الكلية يُتابَع ضغط الدم ووظيفة الكلية على فترات لسنوات.' },
        { q: 'هل يحتاج طفلي تصويرًا مقطعيًا؟', a: 'في معظم الحالات لا. فالخطوة الأولى عند الطفل الموجات فوق الصوتية؛ ولا تُطلَب الفحوص المُشعّة إلا إذا كانت ستغيّر التدبير فعلًا. والطفل أكثر حساسية للإشعاع من البالغ وأمامه سنوات أطول. وحين يُقترَح فحص فمن حقك أن تسأل هل ستغيّر نتيجته الخطة.' },
        { q: 'هل أستطيع البقاء مع طفلي أثناء العملية؟', a: 'لا يمكن البقاء داخل غرفة العمليات؛ لكن قد يتسنّى لك البقاء مع طفلك حتى ينام وأن تكون أول من يراه عند الاستيقاظ. ويختلف هذا الترتيب بحسب المستشفى وعمر الطفل ويُناقَش في تقييم التخدير. أما مبيت أحد الوالدين في المستشفى فأمر معتاد.' }
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
