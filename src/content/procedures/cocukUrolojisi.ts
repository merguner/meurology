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
    de: {
      title: 'Kinderurologie',
      summary:
        'Erkrankungen der Harnwege und der Geschlechtsorgane bei Kindern sind keine verkleinerte Erwachsenenurologie. Vieles hängt mit der Entwicklung zusammen und bildet sich von selbst zurück. Die erste Frage lautet deshalb nicht „wann operieren", sondern „ist eine Operation überhaupt nötig".',
      metaTitle: 'Kinderurologie: Wann eine Operation wirklich nötig ist',
      metaDescription:
        'Hypospadie, vesikoureteraler Reflux, Hodenhochstand, Vorhautprobleme und Harnwegsinfekte bei Kindern: welche Befunde beobachtet werden, welche operiert werden und wie entschieden wird.',
      quickFacts: {
        duration: 'Je nach Eingriff unterschiedlich',
        anesthesia: 'Vollnarkose, kindgerecht geplant',
        hospitalStay: 'Ambulant – 2 Nächte',
        stayInTurkey: '7–14 Tage',
        returnToWork: 'Rückkehr in Kita oder Schule nach 1–3 Wochen',
        flightClearance: 'Nach der Kontrolluntersuchung'
      },
      definition: [
        'Die Kinderurologie befasst sich mit angeborenen und im Kindesalter auftretenden Erkrankungen von Nieren, Harnwegen, Blase und äußerem Genitale. Von der Erwachsenenurologie unterscheidet sie nicht nur die Größe: Ein Kind wächst weiter, und ein Befund, der heute wie ein Problem aussieht, kann sich binnen weniger Jahre von selbst zurückbilden.',
        'Die erste Entscheidung lautet deshalb meist nicht „welche Operation", sondern „ist eine Operation wirklich nötig". Ein unnötiger Eingriff macht aus einem selbstlimitierenden Befund eine bleibende Narbe und eine vermeidbare Narkose. Umgekehrt kann das Hinauszögern eines nötigen Eingriffs die Niere dauerhaft schädigen. Richtig ist, anhand objektiver Kriterien zu klären, in welcher der beiden Lagen man sich befindet.',
        'Die häufigsten Vorstellungsgründe sind: eine Harnröhrenöffnung nicht an der Penisspitze (Hypospadie), Rückfluss von Urin aus der Blase zur Niere (vesikoureteraler Reflux), wiederkehrende Harnwegsinfekte, ein nicht deszendierter Hoden, eine nicht zurückstreifbare Vorhaut, Einnässen tags oder nachts, eine Schwellung in der Leiste (Bruch oder Hydrozele) sowie eine im Schwangerschaftsultraschall festgestellte Nierenerweiterung.',
        'EINE VOR DER GEBURT FESTGESTELLTE NIERENERWEITERUNG IST MEIST KEINE KRANKHEIT. Bei den meisten Kindern, bei denen im Schwangerschaftsultraschall „erweiterte Nieren" beschrieben wurden, normalisiert sich der Befund nach der Geburt von selbst. Eine Kontrolle bleibt dennoch nötig, denn bei einer kleinen Gruppe liegt tatsächlich eine Abflussstörung oder ein Reflux zugrunde. Ziel ist nicht, Eltern zu beunruhigen, sondern rechtzeitig zu erkennen, zu welcher Gruppe das Kind gehört.',
        'EIN FIEBERHAFTER HARNWEGSINFEKT IST EIN WARNZEICHEN. Gerade beim kleinen Kind kann ein Harnwegsinfekt mit Fieber das erste Zeichen für etwas sein, das die Niere betreffen kann. „Antibiotikum gegeben, ist weg" genügt deshalb nicht; bei wiederholten Episoden wird mit Bildgebung nach Reflux oder Abflussstörung gesucht. Eine Narbenbildung an der Niere ist nicht rückgängig zu machen — genau das soll verhindert werden.',
        'EIN WICHTIGER PUNKT ZUR BESCHNEIDUNG: Ein Junge, dessen Harnröhrenöffnung ungewöhnlich wirkt, sollte vor einer urologischen Untersuchung nicht beschnitten werden. Die Vorhaut ist das wertvollste Gewebe für eine Hypospadie-Korrektur; ist sie entfernt, wird die Korrektur schwieriger.',
        'Bei einer Operationsentscheidung im Kindesalter werden Alter, Organentwicklung, Narkosesicherheit und die Frage, ob das Kind sich später erinnern wird, gemeinsam abgewogen. Für manche Eingriffe ist das Säuglingsalter das beste Fenster, für andere das Vorschulalter, für wieder andere die Zeit nach der Pubertät. „Je früher, desto besser" trifft nicht immer zu.',
        'AUCH IN DER BILDGEBUNG IST WENIGER BESSER. Ein Kind ist strahlenempfindlicher als ein Erwachsener und hat mehr Jahre vor sich. Der erste Schritt ist deshalb fast immer der Ultraschall; eine Computertomographie wird nur angefordert, wenn sie das Vorgehen wirklich ändert. Dasselbe gilt für Untersuchungen mit Katheter: Die Miktionszystourethrographie ist wertvoll, wird aber nicht routinemäßig wiederholt. Heißt es „machen wir bei jeder Kontrolle eine Aufnahme", dürfen Sie fragen, wie sie die Entscheidung verändert.',
      ],
      eligibility: {
        suitable: [
          'Jungen mit einer Harnröhrenöffnung abseits der Spitze (Hypospadie)',
          'Kinder mit wiederkehrenden fieberhaften Harnwegsinfekten',
          'Kinder mit in der Bildgebung nachgewiesenem vesikoureteralem Reflux',
          'Säuglinge mit Nierenerweiterung im prä- oder postnatalen Ultraschall',
          'Jungen mit Hodenhochstand',
          'Kinder mit Einnässen am Tag, Drangsymptomen oder Miktionsproblemen',
          'Andernorts operierte Kinder mit fortbestehendem Problem'
        ],
        notSuitable: [
          'Kinder mit milden Befunden, bei denen unter Beobachtung eine Rückbildung zu erwarten ist — eine Operation wird nicht empfohlen',
          'Kinder mit aktivem Harnwegsinfekt: Der Infekt wird zuerst behandelt',
          'Kinder ohne geklärte Diagnose — Bildgebung und Beurteilung werden zuerst abgeschlossen',
          'Kinder mit Begleiterkrankungen, die zunächst kinderärztlich beurteilt werden müssen'
        ]
      },
      technology: [
        'Zystoskopie und endoskopisches Instrumentarium in Kindergröße',
        'Vergrößerte Operation mit Operationsmikroskop oder Lupenbrille',
        'Ultraschall und Miktionszystourethrographie (MCU) zur Diagnostik',
        'Szintigraphie zur seitengetrennten Nierenfunktion (DMSA / MAG-3)',
        'Kinderanästhesieteam und kindgerechte Schmerztherapie',
        'Bulking-Material für die endoskopische Injektion'
      ],
      surgeonExperience: {
        caseVolume: '',
        note: 'In der Kinderurologie entscheidet weniger das verwendete Gerät als die Richtigkeit der Entscheidung: ein Kind, das beobachtet werden sollte, nicht zu operieren — und ein Kind, das operiert werden sollte, nicht zu verzögern. Die Erfahrung von Doz. Dr. Müslüm Ergün in rekonstruktiver Urologie und Harnröhrenchirurgie trägt den Ansatz, besonders bei Hypospadie-Korrekturen und bei Fällen, die einen weiteren Eingriff benötigen.'
      },
      timeline: [
        { when: 'Aus der Ferne', title: 'Sichtung der Unterlagen', body: 'Geburtsangaben, frühere Ultraschall- und Szintigraphiebefunde, Urinbefunde und Kulturen sowie etwaige Operationsberichte werden gesichtet. In den meisten Fällen lässt sich hier bereits eine erste Einschätzung geben, ob eine Operation nötig ist.' },
        { when: 'Tag 1', title: 'Untersuchung und Diagnostik', body: 'Untersuchung, Ultraschall und weitere erforderliche Tests. Wächst in der Urinkultur ein Erreger, wird der geplante Eingriff verschoben.' },
        { when: 'Tag 2', title: 'Eingriff', body: 'Endoskopisch oder offen, je nach Planung. Die meisten Kinder werden am selben oder am Folgetag entlassen.' },
        { when: 'Tag 3–10', title: 'Nachsorge und ggf. Katheterentfernung', body: 'Wurde ein Katheter gelegt, wird er hier entfernt und das erste Wasserlassen beobachtet. Deshalb wird der Rückflug nicht auf den Folgetag gelegt.' },
        { when: 'Monat 1–3', title: 'Kontrolle', body: 'Urinbefund, Ultraschall und bei Bedarf weitere Bildgebung beurteilen das Ergebnis. Für die Fernnachsorge können Unterlagen angefordert werden.' }
      ],
      risks: [
        'Wie bei jedem Eingriff sind Blutung, Infektion und Wundheilungsstörungen möglich',
        'Risiken der Vollnarkose — durch kindgerechte Dosierung und Überwachung verringert, aber nie ausgeschlossen',
        'Je nach Eingriff kann sich ein Urinleck (Fistel) oder eine Enge bilden',
        'Der Eingriff bringt möglicherweise nicht den vollen erwarteten Nutzen; ein zweiter kann nötig werden',
        'Bei beobachteten Kindern kann sich der Befund langsamer zurückbilden als erwartet und später doch eine Operation nötig werden',
        'Bleibende Nierennarben nach wiederholten fieberhaften Infekten — genau das soll verhindert werden',
        'Mit dem Wachstum kann sich das Bild ändern; eine Neubeurteilung in der Pubertät kann erforderlich sein'
      ],
      alternatives: [
        'Beobachtung — bei vielen Kindern die erste und richtigste Option, mit regelmäßigem Ultraschall und Urinkontrollen',
        'Vorbeugende (prophylaktische) Antibiotika — bei ausgewählten Refluxformen zur Infektvermeidung',
        'Regulierung von Blasen- und Darmgewohnheiten — Behandlung der Verstopfung und Miktionstraining; bei den meisten Kindern vor jeder Medikation',
        'Endoskopische Injektion — beim Reflux eine Option ohne Hautschnitt',
        'Offene oder laparoskopische Operation — wenn Beobachtung und weniger eingreifende Optionen nicht ausreichen'
      ],
      recovery: [
        { period: 'Erste 48 Stunden', body: 'Schmerzen lassen sich meist mit einfachen Mitteln kontrollieren. Es wird viel getrunken. Fieber, fehlendes Wasserlassen oder Sekretion aus der Wunde erfordern sofortigen Kontakt.' },
        { period: 'Woche 1', body: 'Das Kind ruht zu Hause. Alles, was auf die Region drückt (Fahrrad, Tragen rittlings auf der Hüfte), wird vermieden.' },
        { period: 'Woche 2–4', body: 'Die Rückkehr in Kita oder Schule fällt meist in diese Zeit. Toben und Sport warten etwas länger.' },
        { period: 'Monat 1–3', body: 'Kontrollultraschall und Urinbefund beurteilen das Ergebnis. Narben beginnen in dieser Zeit zu verblassen.' },
        { period: 'Langfristig', body: 'Bei Kindern mit Reflux oder betroffenen Nieren werden Blutdruck und Nierenfunktion über Jahre in Abständen kontrolliert. Das ist ein üblicher Nachsorgeplan und kein Alarmzeichen.' }
      ],
      price: {
        from: 0,
        to: 0,
        currency: 'EUR',
        disclaimer:
          'Der Betrag hängt vom Eingriff, von der Narkosedauer und von der Aufenthaltsdauer ab. Ein detailliertes schriftliches Angebot folgt, sobald die Unterlagen Ihres Kindes gesichtet sind.'
      },
      packageIncludes: [
        'Untersuchung und kinderurologische Beurteilung',
        'Ultraschall und erforderliche Bildgebung',
        'Blut- und Urinuntersuchungen, Urinkultur',
        'Kinderanästhesiologische Beurteilung',
        'Operationssaal, Narkose und Verbrauchsbedarf',
        'Klinikaufenthalt (Kind und ein Elternteil)',
        'Verbände und gegebenenfalls Katheterentfernung',
        'Transfers Flughafen–Klinik–Hotel',
        'Unterkunft (Kind und Begleitperson)',
        'Medizinischer Dolmetscher und Patientenkoordination',
        'Fernnachsorge nach der Rückkehr'
      ],
      faqs: [
        { q: 'Muss mein Kind wirklich operiert werden?', a: 'In den meisten Situationen ist Beobachtung die erste Option. Die Entscheidung richtet sich nach der Aussicht auf spontane Rückbildung, danach ob die Niere betroffen ist, und nach den Beschwerden des Kindes. Nach Sichtung Ihrer Unterlagen wird Ihnen diese Unterscheidung klar erläutert.' },
        { q: 'Im Schwangerschaftsultraschall hieß es Nierenerweiterung — muss ich mir Sorgen machen?', a: 'Dieser Befund ist häufig und bildet sich bei den meisten Kindern nach der Geburt von selbst zurück. Eine Kontrolle bleibt nötig, denn bei einer kleinen Gruppe liegt tatsächlich eine Abflussstörung oder ein Reflux vor. Ziel ist nicht zu beunruhigen, sondern rechtzeitig zu klären, zu welcher Gruppe Ihr Kind gehört.' },
        { q: 'Mein Kind hat ständig Harnwegsinfekte — ist das normal?', a: 'Nein. Besonders wiederkehrende Infekte mit Fieber gehören abgeklärt. „Antibiotikum gegeben, ist weg" genügt nicht; mit Bildgebung wird nach Reflux oder Abflussstörung gesucht. Ziel ist, bleibende Nierennarben zu verhindern.' },
        { q: 'Darf er beschnitten werden?', a: 'Wirkt die Harnröhrenöffnung ungewöhnlich: nicht, bevor ein Urologe ihn gesehen hat. Die Vorhaut ist das wertvollste Gewebe für die Hypospadie-Korrektur; ist sie entfernt, wird die Korrektur schwieriger und ein Mundschleimhauttransplantat kann nötig werden.' },
        { q: 'Sein Hoden ist nicht abgestiegen — hilft Abwarten?', a: 'In den ersten Monaten ist ein spontaner Abstieg möglich, aber dieses Fenster ist nicht unbegrenzt. Ab einem bestimmten Alter nützt Abwarten der Hodenentwicklung nicht mehr. Ein Hodenhochstand wird deshalb nicht einfach belassen, sondern in festen Abständen kontrolliert.' },
        { q: 'Mein Kind nässt tagsüber ein — ist eine Operation nötig?', a: 'Meist nicht. Die häufigsten Ursachen sind Verstopfung, das Aufschieben des Wasserlassens und eine Blasen-Darm-Funktionsstörung. Ein Eingriff vor deren Behandlung bringt nicht den erwarteten Nutzen.' },
        { q: 'Schadet die Narkose meinem Kind?', a: 'Die Kinderanästhesie arbeitet mit kindgerechten Dosierungen und Überwachung; deshalb ist die präoperative Beurteilung ein eigener Schritt. Das Risiko ist nicht null; abgewogen wird aber auch das Risiko, einen notwendigen Eingriff zu verzögern.' },
        { q: 'Wie lange müssen wir in der Türkei bleiben?', a: 'Je nach Eingriff meist 7–14 Tage. Wird ein Katheter gelegt, wird er hier entfernt und das erste Wasserlassen beobachtet; planen Sie den Rückflug daher nicht für den Folgetag.' },
        { q: 'Welche Unterlagen sollen wir senden?', a: 'Prä- und postnatale Ultraschallbefunde, Szintigraphie- und MCU-Ergebnisse, Urinbefunde und Kulturen, Dokumentation früherer Infekte sowie Berichte früherer Operationen. Damit lässt sich meist schon vor der Anreise eine erste Einschätzung geben.' },
        { q: 'Muss er später erneut kontrolliert werden?', a: 'Bei manchen Befunden ja. Besonders nach einer Hypospadie-Korrektur ist eine Neubeurteilung in der Pubertät mit dem Wachstum üblich. Bei Reflux oder betroffenen Nieren werden Blutdruck und Nierenfunktion über Jahre in Abständen verfolgt.' },
        { q: 'Soll mein Kind eine Computertomographie bekommen?', a: 'In den meisten Fällen nein. Beim Kind ist der Ultraschall der erste Schritt; strahlenbelastende Untersuchungen werden nur angefordert, wenn sie das Vorgehen wirklich ändern. Ein Kind ist strahlenempfindlicher als ein Erwachsener und hat mehr Jahre vor sich. Wird eine Untersuchung vorgeschlagen, dürfen Sie fragen, ob das Ergebnis den Plan ändert.' },
        { q: 'Darf ich während der Operation bei meinem Kind bleiben?', a: 'Im Operationssaal selbst ist das nicht möglich; es kann aber sein, dass Sie bis zum Einschlafen bei Ihrem Kind bleiben und beim Aufwachen die erste Person sind, die es sieht. Diese Regelung hängt vom Krankenhaus und vom Alter des Kindes ab und wird bei der Narkoseaufklärung besprochen. Dass ein Elternteil über Nacht in der Klinik bleibt, ist üblich.' }
      ],
      sources: [
        {
          label: 'EAU/ESPU-Leitlinie Kinderurologie — Europäische Gesellschaft für Urologie',
          url: 'https://uroweb.org/guidelines/paediatric-urology'
        }
      ]
    },
    fr: {
      title: 'Urologie pédiatrique',
      summary:
        'Les affections urinaires et génitales de l’enfant ne sont pas une urologie d’adulte en réduction. La plupart des constatations relèvent du développement et certaines régressent seules : la première question n’est donc pas « quand opérer » mais « faut-il vraiment opérer ».',
      metaTitle: 'Urologie pédiatrique : quand une intervention est réellement nécessaire',
      metaDescription:
        'Hypospadias, reflux vésico-urétéral, testicule non descendu, problèmes de prépuce et infections urinaires chez l’enfant : ce que l’on surveille, ce que l’on opère, et comment la décision est prise.',
      quickFacts: {
        duration: 'Variable selon le geste',
        anesthesia: 'Anesthésie générale, adaptée à l’enfant',
        hospitalStay: 'Ambulatoire – 2 nuits',
        stayInTurkey: '7 à 14 jours',
        returnToWork: 'Retour à la crèche ou à l’école en 1 à 3 semaines',
        flightClearance: 'Après la consultation de contrôle'
      },
      definition: [
        'L’urologie pédiatrique prend en charge les affections congénitales, et celles apparaissant dans l’enfance, qui touchent les reins, les voies urinaires, la vessie et les organes génitaux externes. Ce qui la distingue de l’urologie adulte n’est pas seulement la taille : l’enfant grandit, et une constatation qui ressemble aujourd’hui à un problème peut disparaître d’elle-même en quelques années.',
        'La première décision n’est donc généralement pas « quelle intervention » mais « faut-il vraiment intervenir ». Un geste inutile transforme une situation spontanément résolutive en cicatrice définitive et en anesthésie évitable. À l’inverse, retarder un geste nécessaire peut altérer durablement le rein. La bonne démarche consiste à déterminer, sur des critères objectifs, dans laquelle de ces deux situations on se trouve.',
        'Les motifs les plus fréquents sont : un méat urinaire non situé à l’extrémité de la verge (hypospadias), un reflux d’urine de la vessie vers le rein (reflux vésico-urétéral), des infections urinaires récidivantes, un testicule non descendu, un prépuce non rétractable, des fuites diurnes ou nocturnes, une tuméfaction inguinale (hernie ou hydrocèle) et une dilatation rénale vue à l’échographie anténatale.',
        'UNE DILATATION RÉNALE VUE AVANT LA NAISSANCE N’EST LE PLUS SOUVENT PAS UNE MALADIE. Chez la majorité des bébés décrits comme ayant des « reins dilatés » à l’échographie de grossesse, la situation se normalise seule après la naissance. Un suivi reste nécessaire, car un petit nombre présente une véritable obstruction ou un reflux. L’objectif n’est pas d’inquiéter mais d’identifier à temps le groupe auquel appartient l’enfant.',
        'UNE INFECTION URINAIRE FÉBRILE EST UN SIGNAL. Chez le jeune enfant surtout, une infection urinaire avec fièvre peut être le premier signe d’une anomalie pouvant toucher le rein. « On a donné un antibiotique, c’est passé » ne suffit donc pas ; en cas de récidives, l’imagerie recherche un reflux ou une obstruction. La cicatrice rénale est irréversible, et c’est précisément ce que l’on cherche à éviter.',
        'UN POINT IMPORTANT SUR LA CIRCONCISION : un garçon dont le méat paraît inhabituel ne doit pas être circoncis avant d’avoir été vu par un urologue. Le prépuce est le tissu le plus précieux pour la cure d’hypospadias ; une fois retiré, la réparation devient plus difficile.',
        'Lorsqu’une décision chirurgicale est prise chez l’enfant, l’âge, le développement de l’organe, la sécurité anesthésique et le fait que l’enfant s’en souvienne ou non sont pesés ensemble. Pour certains gestes, la période idéale est la première année ; pour d’autres l’âge préscolaire ; pour d’autres encore après la puberté. « Faisons-le au plus vite » n’est pas toujours la bonne attitude.',
        'EN IMAGERIE AUSSI, MOINS VAUT MIEUX. L’enfant est plus sensible aux rayonnements que l’adulte et a davantage d’années devant lui. La première étape est donc presque toujours l’échographie ; un scanner n’est demandé que s’il change réellement la conduite à tenir. Le même raisonnement vaut pour les examens nécessitant une sonde : la cystographie mictionnelle est utile mais n’est pas répétée en routine. Si l’on vous dit « faisons un cliché à chaque contrôle », vous êtes en droit de demander en quoi il modifiera la décision.',
      ],
      eligibility: {
        suitable: [
          'Garçons dont le méat n’est pas à l’extrémité (hypospadias)',
          'Enfants présentant des infections urinaires fébriles récidivantes',
          'Enfants chez qui l’imagerie met en évidence un reflux vésico-urétéral',
          'Nourrissons avec dilatation rénale à l’échographie anténatale ou postnatale',
          'Garçons présentant un testicule non descendu',
          'Enfants souffrant de fuites diurnes, d’urgences mictionnelles ou de difficultés à uriner',
          'Enfants opérés ailleurs dont le problème persiste'
        ],
        notSuitable: [
          'Enfants dont les constatations sont modérées et dont on attend la régression sous surveillance — la chirurgie n’est pas proposée',
          'Enfants présentant une infection urinaire active : l’infection est traitée d’abord',
          'Enfants dont le diagnostic n’est pas encore établi — imagerie et bilan sont complétés au préalable',
          'Enfants porteurs d’autres affections nécessitant une évaluation pédiatrique préalable'
        ]
      },
      technology: [
        'Cystoscopie et matériel endoscopique de calibre pédiatrique',
        'Chirurgie sous grossissement (microscope opératoire ou loupes)',
        'Échographie et cystographie rétrograde mictionnelle pour le diagnostic',
        'Scintigraphie évaluant séparément la fonction de chaque rein (DMSA / MAG-3)',
        'Équipe d’anesthésie pédiatrique et prise en charge de la douleur adaptée à l’enfant',
        'Produit de comblement pour injection endoscopique'
      ],
      surgeonExperience: {
        caseVolume: '',
        note: 'En urologie pédiatrique, le résultat tient moins au matériel qu’à la justesse de la décision : ne pas opérer un enfant qu’il faut surveiller, et ne pas retarder celui qu’il faut opérer. L’expérience du Dr Müslüm Ergün en urologie reconstructrice et en chirurgie urétrale fonde cette approche, en particulier pour les cures d’hypospadias et les cas nécessitant une reprise.'
      },
      timeline: [
        { when: 'À distance', title: 'Étude des documents', body: 'Données de naissance, comptes rendus d’échographie et de scintigraphie, résultats d’ECBU et comptes rendus opératoires éventuels sont étudiés. Dans la plupart des cas, un premier avis sur la nécessité d’une intervention peut être donné dès ce stade.' },
        { when: 'Jour 1', title: 'Examen et bilan', body: 'Examen clinique, échographie et examens complémentaires nécessaires. Si l’ECBU est positif, le geste prévu est reporté.' },
        { when: 'Jour 2', title: 'Intervention', body: 'Geste endoscopique ou chirurgie ouverte selon le plan. La plupart des enfants sortent le jour même ou le lendemain.' },
        { when: 'Jours 3–10', title: 'Suivi et retrait de sonde le cas échéant', body: 'Lorsqu’une sonde a été posée, elle est retirée ici et la première miction est observée. Le vol retour n’est donc pas prévu le lendemain du retrait.' },
        { when: 'Mois 1–3', title: 'Contrôle', body: 'ECBU, échographie et, si besoin, imagerie complémentaire évaluent le résultat. Des documents peuvent être demandés pour le suivi à distance.' }
      ],
      risks: [
        'Comme pour toute intervention : saignement, infection et troubles de cicatrisation',
        'Risques de l’anesthésie générale — réduits par des doses et une surveillance adaptées à l’enfant, jamais nuls',
        'Selon le geste, une fuite urinaire (fistule) ou une sténose peut apparaître',
        'Le geste peut ne pas apporter tout le bénéfice attendu et une seconde intervention peut être nécessaire',
        'Chez les enfants surveillés, la régression peut être plus lente que prévu et une chirurgie devenir nécessaire plus tard',
        'Cicatrices rénales définitives après des infections fébriles répétées — c’est précisément ce que l’on cherche à éviter',
        'Avec la croissance, la situation peut évoluer et une réévaluation à la puberté être nécessaire'
      ],
      alternatives: [
        'Surveillance — chez beaucoup d’enfants, la première et la plus juste option, avec échographies et contrôles urinaires réguliers',
        'Antibioprophylaxie — dans certaines formes de reflux, pour prévenir l’infection',
        'Rééducation des habitudes vésicales et intestinales — traitement de la constipation et réapprentissage mictionnel ; chez la plupart des enfants, avant tout médicament',
        'Injection endoscopique — option dans le reflux, sans incision',
        'Chirurgie ouverte ou cœlioscopique — lorsque la surveillance et les options moins invasives ne suffisent pas'
      ],
      recovery: [
        { period: '48 premières heures', body: 'La douleur est généralement contrôlée par des antalgiques simples. On fait boire abondamment. Fièvre, impossibilité d’uriner ou écoulement de la plaie imposent un contact immédiat.' },
        { period: 'Semaine 1', body: 'L’enfant se repose à la maison. Tout ce qui appuie sur la région (vélo, portage à califourchon) est évité.' },
        { period: 'Semaines 2–4', body: 'Le retour à la crèche ou à l’école se situe généralement là. Les jeux actifs et le sport attendent un peu plus.' },
        { period: 'Mois 1–3', body: 'Échographie de contrôle et ECBU évaluent le résultat. Les cicatrices commencent à pâlir.' },
        { period: 'Long terme', body: 'Chez les enfants avec reflux ou atteinte rénale, tension artérielle et fonction rénale sont contrôlées par intermittence pendant des années. C’est un suivi habituel, non un signe d’alerte.' }
      ],
      price: {
        from: 0,
        to: 0,
        currency: 'EUR',
        disclaimer:
          'Le montant dépend du geste réalisé, de la durée d’anesthésie et de la durée d’hospitalisation. Un devis écrit détaillé est remis après examen des documents de votre enfant.'
      },
      packageIncludes: [
        'Consultation et évaluation en urologie pédiatrique',
        'Échographie et imagerie nécessaire',
        'Bilans sanguins et urinaires, ECBU',
        'Consultation d’anesthésie pédiatrique',
        'Bloc opératoire, anesthésie et consommables',
        'Hospitalisation (enfant et un parent)',
        'Pansements et retrait de sonde le cas échéant',
        'Transferts aéroport–hôpital–hôtel',
        'Hébergement (enfant et accompagnant)',
        'Interprète médical et coordinateur patient',
        'Suivi à distance après le retour'
      ],
      faqs: [
        { q: 'Mon enfant doit-il vraiment être opéré ?', a: 'Dans la plupart des situations, la surveillance est la première option. La décision repose sur la probabilité de régression spontanée, sur l’atteinte éventuelle du rein et sur les symptômes de l’enfant. Après étude de vos documents, cette distinction vous est expliquée clairement.' },
        { q: 'L’échographie de grossesse a montré une dilatation rénale : faut-il s’inquiéter ?', a: 'Cette constatation est fréquente et se normalise seule chez la plupart des bébés après la naissance. Un suivi reste nécessaire, car un petit nombre présente une véritable obstruction ou un reflux. L’objectif n’est pas d’inquiéter mais d’identifier à temps le groupe de votre enfant.' },
        { q: 'Mon enfant fait souvent des infections urinaires, est-ce normal ?', a: 'Non. Les infections fébriles récidivantes en particulier doivent être explorées. « On a donné un antibiotique, c’est passé » ne suffit pas ; l’imagerie recherche un reflux ou une obstruction. L’objectif est d’éviter une cicatrice rénale définitive.' },
        { q: 'Peut-on le circoncire ?', a: 'Si le méat paraît inhabituel : pas avant l’avis d’un urologue. Le prépuce est le tissu le plus précieux pour la cure d’hypospadias ; une fois retiré, la réparation devient plus difficile et une greffe de muqueuse buccale peut s’imposer.' },
        { q: 'Son testicule n’est pas descendu, faut-il attendre ?', a: 'Une descente spontanée reste possible les premiers mois, mais cette fenêtre n’est pas illimitée. Au-delà d’un certain âge, attendre n’aide plus le développement testiculaire. Un testicule non descendu n’est donc pas simplement laissé en l’état : il est contrôlé à intervalles définis.' },
        { q: 'Mon enfant a des fuites le jour, faut-il opérer ?', a: 'Le plus souvent non. Les causes les plus fréquentes sont la constipation, l’habitude de retenir ses urines et un trouble fonctionnel vésico-intestinal. Un geste réalisé avant leur correction n’apportera pas le bénéfice attendu.' },
        { q: 'L’anesthésie est-elle dangereuse pour mon enfant ?', a: 'L’anesthésie pédiatrique repose sur des doses et une surveillance adaptées ; c’est pourquoi la consultation préanesthésique est une étape distincte. Le risque n’est pas nul, mais celui de retarder un geste nécessaire est aussi pris en compte.' },
        { q: 'Combien de temps rester en Türkiye ?', a: 'Généralement 7 à 14 jours selon le geste. Lorsqu’une sonde est posée, elle est retirée ici et la première miction observée : ne prévoyez pas le vol retour le lendemain du retrait.' },
        { q: 'Quels documents envoyer ?', a: 'Comptes rendus d’échographie anténatale et postnatale, résultats de scintigraphie et de cystographie, ECBU, documentation des infections antérieures et comptes rendus opératoires éventuels. Avec cela, un premier avis peut généralement être donné avant votre départ.' },
        { q: 'Faudra-t-il le recontrôler plus tard ?', a: 'Pour certaines affections, oui. Après une cure d’hypospadias en particulier, une réévaluation à la puberté est habituelle. En cas de reflux ou d’atteinte rénale, tension et fonction rénale sont suivies par intermittence pendant des années.' },
        { q: 'Faut-il faire un scanner à mon enfant ?', a: 'Dans la plupart des situations, non. Chez l’enfant, l’échographie est la première étape ; les examens irradiants ne sont demandés que s’ils changent réellement la conduite à tenir. L’enfant est plus sensible aux rayonnements que l’adulte et a davantage d’années devant lui. Lorsqu’un examen est proposé, vous êtes en droit de demander si son résultat modifiera le plan.' },
        { q: 'Puis-je rester auprès de mon enfant pendant l’intervention ?', a: 'Vous ne pouvez pas rester au bloc opératoire ; mais il est parfois possible d’accompagner votre enfant jusqu’à l’endormissement et d’être la première personne qu’il voit au réveil. Cette organisation dépend de l’hôpital et de l’âge de l’enfant et se discute lors de la consultation d’anesthésie. Qu’un parent reste la nuit à l’hôpital est habituel.' }
      ],
      sources: [
        {
          label: 'Recommandations EAU/ESPU en urologie pédiatrique — Association européenne d’urologie',
          url: 'https://uroweb.org/guidelines/paediatric-urology'
        }
      ]
    },
    ru: {
      title: 'Детская урология',
      summary:
        'Состояния мочевых путей и половых органов у детей — это не уменьшенная взрослая урология. Многое связано с развитием, и часть находок проходит сама. Поэтому первый вопрос не «когда оперировать», а «нужна ли операция вообще».',
      metaTitle: 'Детская урология: когда операция действительно нужна',
      metaDescription:
        'Гипоспадия, пузырно-мочеточниковый рефлюкс, неопущение яичка, проблемы с крайней плотью и инфекции мочевых путей у детей: что наблюдают, что оперируют и как принимается решение.',
      quickFacts: {
        duration: 'Зависит от вмешательства',
        anesthesia: 'Общая анестезия, подобранная для ребёнка',
        hospitalStay: 'Амбулаторно – 2 ночи',
        stayInTurkey: '7–14 дней',
        returnToWork: 'Возвращение в сад или школу через 1–3 недели',
        flightClearance: 'После контрольного осмотра'
      },
      definition: [
        'Детская урология занимается врождёнными и возникающими в детстве состояниями почек, мочевых путей, мочевого пузыря и наружных половых органов. От взрослой урологии её отличает не только размер: ребёнок продолжает расти, и находка, которая сегодня выглядит проблемой, за несколько лет может пройти сама.',
        'Поэтому первое решение обычно не «какая операция», а «нужна ли операция вообще». Ненужное вмешательство превращает самопроходящее состояние в постоянный рубец и в анестезию, которой можно было избежать. И наоборот, отсрочка нужного вмешательства способна необратимо повредить почку. Правильный путь — по объективным критериям определить, в какой из этих двух ситуаций вы находитесь.',
        'Самые частые причины обращения: отверстие мочеиспускательного канала не на кончике полового члена (гипоспадия), обратный ток мочи из пузыря в почку (пузырно-мочеточниковый рефлюкс), повторяющиеся инфекции мочевых путей, неопущение яичка, не открывающаяся крайняя плоть, дневное или ночное недержание, припухлость в паху (грыжа или гидроцеле) и расширение почки, выявленное на УЗИ при беременности.',
        'РАСШИРЕНИЕ ПОЧКИ, ВЫЯВЛЕННОЕ ДО РОЖДЕНИЯ, ЧАЩЕ ВСЕГО НЕ БОЛЕЗНЬ. У большинства детей, у которых на УЗИ при беременности описали «расширение почек», после рождения картина нормализуется сама. Контроль всё же нужен, поскольку у небольшой части есть настоящая обструкция или рефлюкс. Цель — не напугать родителей, а вовремя понять, к какой группе относится ребёнок.',
        'ИНФЕКЦИЯ МОЧЕВЫХ ПУТЕЙ С ЛИХОРАДКОЙ — ЭТО ПРЕДУПРЕЖДЕНИЕ. Особенно у маленького ребёнка она может быть первым признаком состояния, способного повредить почку. «Дали антибиотик, прошло» здесь недостаточно: при повторных эпизодах с помощью визуализации ищут рефлюкс или обструкцию. Рубцевание почки необратимо, и именно его стараются предотвратить.',
        'ВАЖНОЕ ЗАМЕЧАНИЕ ОБ ОБРЕЗАНИИ: мальчику, у которого расположение отверстия выглядит необычно, не следует делать обрезание до осмотра уролога. Крайняя плоть — самая ценная ткань для коррекции гипоспадии, и после её удаления операция усложняется.',
        'Принимая решение об операции у ребёнка, вместе взвешивают возраст, развитие органа, безопасность анестезии и то, запомнит ли ребёнок происходящее. Для одних вмешательств лучший период — младенчество, для других — дошкольный возраст, для третьих — время после полового созревания. Подход «сделаем поскорее» верен не всегда.',
        'В ВИЗУАЛИЗАЦИИ МЕНЬШЕ — ТОЖЕ ЛУЧШЕ. Ребёнок чувствительнее взрослого к излучению, и впереди у него больше лет. Поэтому первым шагом почти всегда служит УЗИ; компьютерную томографию назначают лишь тогда, когда она действительно изменит тактику. То же относится к исследованиям, требующим катетера: микционная цистоуретрография ценна, но рутинно не повторяется. Если вам говорят «будем делать снимок на каждом приёме», вы вправе спросить, как он изменит решение.',
      ],
      eligibility: {
        suitable: [
          'Мальчики, у которых отверстие расположено не на кончике (гипоспадия)',
          'Дети с повторяющимися инфекциями мочевых путей с лихорадкой',
          'Дети, у которых при визуализации выявлен пузырно-мочеточниковый рефлюкс',
          'Младенцы с расширением почки по данным пренатального или постнатального УЗИ',
          'Мальчики с неопущением яичка',
          'Дети с дневным недержанием, императивными позывами или затруднением мочеиспускания',
          'Дети, оперированные в другом центре, у которых проблема сохраняется'
        ],
        notSuitable: [
          'Дети с лёгкими находками, у которых ожидается разрешение при наблюдении, — операция не предлагается',
          'Дети с активной инфекцией мочевых путей: сначала лечат инфекцию',
          'Дети, у которых диагноз ещё не установлен, — сначала завершают визуализацию и обследование',
          'Дети с сопутствующими заболеваниями, которых сначала должен оценить педиатр'
        ]
      },
      technology: [
        'Цистоскопия и эндоскопический инструментарий детского калибра',
        'Операция с увеличением — микроскоп или бинокулярные лупы',
        'УЗИ и микционная цистоуретрография для диагностики',
        'Сцинтиграфия с раздельной оценкой функции почек (DMSA / MAG-3)',
        'Детская анестезиологическая бригада и обезболивание, рассчитанное на ребёнка',
        'Объёмообразующий материал для эндоскопической инъекции'
      ],
      surgeonExperience: {
        caseVolume: '',
        note: 'В детской урологии результат определяется не столько аппаратом, сколько верностью решения: не оперировать ребёнка, которого следует наблюдать, и не откладывать того, кого следует оперировать. Опыт доцента, д-ра Мюслюма Эргюна в реконструктивной урологии и хирургии уретры лежит в основе подхода, особенно при коррекции гипоспадии и в случаях, требующих повторного вмешательства.'
      },
      timeline: [
        { when: 'Дистанционно', title: 'Изучение документов', body: 'Изучаются данные о рождении, прежние заключения УЗИ и сцинтиграфии, анализы и посевы мочи, протоколы операций, если они были. В большинстве случаев уже на этом этапе можно дать первое мнение о необходимости операции.' },
        { when: '1-й день', title: 'Осмотр и обследование', body: 'Осмотр, УЗИ и необходимые дополнительные исследования. При росте флоры в посеве мочи запланированное вмешательство откладывается.' },
        { when: '2-й день', title: 'Вмешательство', body: 'Эндоскопическая или открытая операция по плану. Большинство детей выписывают в тот же или на следующий день.' },
        { when: '3–10-й день', title: 'Наблюдение и удаление катетера при необходимости', body: 'Если катетер был установлен, его удаляют здесь и наблюдают первое мочеиспускание. Поэтому обратный рейс не планируют на следующий день.' },
        { when: '1–3-й месяц', title: 'Контроль', body: 'Анализ мочи, УЗИ и при необходимости дополнительная визуализация оценивают результат. Для дистанционного наблюдения могут запросить документы.' }
      ],
      risks: [
        'Как при любой операции, возможны кровотечение, инфекция и нарушения заживления раны',
        'Риски общей анестезии — снижаются детскими дозами и мониторингом, но не исчезают полностью',
        'В зависимости от вмешательства может возникнуть подтекание мочи (свищ) или сужение',
        'Вмешательство может не дать всей ожидаемой пользы, и может понадобиться второе',
        'У детей под наблюдением картина может разрешаться медленнее ожидаемого, и операция может потребоваться позже',
        'Стойкое рубцевание почки после повторных лихорадочных инфекций — именно этого стараются избежать',
        'По мере роста ребёнка картина может измениться, и в период полового созревания потребуется повторная оценка'
      ],
      alternatives: [
        'Наблюдение — у многих детей первый и наиболее правильный вариант, с регулярным УЗИ и контролем мочи',
        'Профилактические антибиотики — при отдельных формах рефлюкса для предупреждения инфекции',
        'Нормализация работы мочевого пузыря и кишечника — устранение запоров и обучение мочеиспусканию; у большинства детей это предшествует лекарствам',
        'Эндоскопическая инъекция — вариант при рефлюксе без разреза',
        'Открытая или лапароскопическая операция — когда наблюдения и менее инвазивных вариантов недостаточно'
      ],
      recovery: [
        { period: 'Первые 48 часов', body: 'Боль обычно снимается простыми обезболивающими. Дают много жидкости. Лихорадка, невозможность помочиться или отделяемое из раны требуют немедленного обращения.' },
        { period: '1-я неделя', body: 'Ребёнок отдыхает дома. Исключают всё, что давит на область (велосипед, ношение верхом на бедре).' },
        { period: '2–4-я неделя', body: 'Возвращение в сад или школу обычно приходится на этот период. Активные игры и спорт откладывают чуть дольше.' },
        { period: '1–3-й месяц', body: 'Контрольное УЗИ и анализ мочи оценивают результат. Рубцы начинают бледнеть.' },
        { period: 'Долгосрочно', body: 'У детей с рефлюксом или поражением почек артериальное давление и функцию почек проверяют с перерывами в течение лет. Это обычный план наблюдения, а не тревожный признак.' }
      ],
      price: {
        from: 0,
        to: 0,
        currency: 'EUR',
        disclaimer:
          'Сумма зависит от вмешательства, продолжительности анестезии и срока пребывания в стационаре. Постатейное письменное предложение даётся после изучения документов вашего ребёнка.'
      },
      packageIncludes: [
        'Осмотр и детская урологическая оценка',
        'УЗИ и необходимая визуализация',
        'Анализы крови и мочи, посев мочи',
        'Консультация детского анестезиолога',
        'Операционная, анестезия и расходные материалы',
        'Пребывание в стационаре (ребёнок и один родитель)',
        'Перевязки и удаление катетера при необходимости',
        'Трансферы аэропорт — больница — отель',
        'Проживание (ребёнок и сопровождающий)',
        'Медицинский переводчик и координатор пациента',
        'Дистанционное наблюдение после возвращения'
      ],
      faqs: [
        { q: 'Ребёнку обязательно нужна операция?', a: 'В большинстве ситуаций первый вариант — наблюдение. Решение зависит от вероятности самостоятельного разрешения, от того, затронута ли почка, и от жалоб ребёнка. После изучения ваших документов это различие объясняют вам прямо.' },
        { q: 'На УЗИ при беременности сказали о расширении почки — стоит ли волноваться?', a: 'Эта находка встречается часто и у большинства детей проходит сама после рождения. Контроль всё же нужен, так как у небольшой части есть настоящая обструкция или рефлюкс. Цель — не напугать, а вовремя понять, к какой группе относится ваш ребёнок.' },
        { q: 'У ребёнка часто инфекции мочевых путей, это нормально?', a: 'Нет. Особенно повторяющиеся инфекции с лихорадкой нужно обследовать. «Дали антибиотик, прошло» недостаточно; с помощью визуализации ищут рефлюкс или обструкцию. Цель — предотвратить стойкое рубцевание почки.' },
        { q: 'Можно ли сделать обрезание?', a: 'Если расположение отверстия выглядит необычно — не раньше осмотра уролога. Крайняя плоть — самая ценная ткань для коррекции гипоспадии; после её удаления операция усложняется и может потребоваться трансплантат слизистой щеки.' },
        { q: 'Яичко не опустилось — поможет ли ожидание?', a: 'В первые месяцы самостоятельное опущение возможно, но это окно не бесконечно. После определённого возраста ожидание уже не помогает развитию яичка. Поэтому неопущенное яичко не оставляют без внимания, а контролируют через определённые промежутки.' },
        { q: 'Ребёнок днём мочится в штаны, нужна ли операция?', a: 'Чаще всего нет. Самые частые причины дневного недержания — запоры, привычка откладывать мочеиспускание и дисфункция мочевого пузыря и кишечника. Вмешательство до их устранения не даст ожидаемой пользы.' },
        { q: 'Не вредна ли анестезия ребёнку?', a: 'Детская анестезия использует дозы и мониторинг, рассчитанные на ребёнка; поэтому предоперационная оценка — отдельный этап. Риск не нулевой, но учитывается и риск отсрочки необходимого вмешательства.' },
        { q: 'Сколько нужно пробыть в Турции?', a: 'Обычно 7–14 дней в зависимости от вмешательства. Если установлен катетер, его удаляют здесь и наблюдают первое мочеиспускание, поэтому не планируйте обратный рейс на следующий день.' },
        { q: 'Какие документы прислать?', a: 'Заключения пренатального и постнатального УЗИ, результаты сцинтиграфии и цистоуретрографии, анализы и посевы мочи, записи о перенесённых инфекциях и протоколы прежних операций. По ним обычно можно дать первое мнение до вашего приезда.' },
        { q: 'Понадобится ли повторный осмотр, когда он подрастёт?', a: 'При некоторых состояниях — да. Особенно после коррекции гипоспадии повторная оценка в период полового созревания обычна. При рефлюксе или поражении почек давление и функцию почек наблюдают с перерывами годами.' },
        { q: 'Нужна ли ребёнку компьютерная томография?', a: 'В большинстве случаев нет. У ребёнка первый шаг — УЗИ; исследования с облучением назначают лишь тогда, когда они действительно изменят тактику. Ребёнок чувствительнее взрослого к излучению, и впереди у него больше лет. Когда предлагают исследование, вы вправе спросить, изменит ли его результат план.' },
        { q: 'Могу ли я быть рядом с ребёнком во время операции?', a: 'Находиться в самой операционной нельзя; но нередко возможно быть рядом с ребёнком до момента засыпания и стать первым, кого он увидит при пробуждении. Такой порядок зависит от больницы и возраста ребёнка и обсуждается на осмотре анестезиолога. Ночное пребывание одного из родителей в больнице — обычная практика.' }
      ],
      sources: [
        {
          label: 'Рекомендации EAU/ESPU по детской урологии — Европейская ассоциация урологии',
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
