import type { Treatment } from '../types';

/**
 * PEKTOPEKSİ (PELVİK ORGAN SARKMASI ONARIMI) — yeni sayfa (Görev 7).
 *
 * reviewStatus: 'reviewed' — hekim onayı alındı (Dr. Ergün, 6 Ekim 2026).
 * Kaynak: EAU Non-neurogenic Female LUTS kılavuzu (pelvik organ prolapsusu bölümü).
 * Başarı oranı/yüzde YAZILMAMIŞTIR.
 */
export const pektopeksi: Treatment = {
  slug: 'pektopeksi',
  procedure: { type: 'SurgicalProcedure', bodyLocation: 'Uterus' },
  parent: 'kadin-urolojisi',
  icon: 'female',
  category: 'reconstructive',
  reviewStatus: 'reviewed',

  lastReviewed: '2026-10-06',
  offersConsultation: false,
  i18n: {
    tr: {
      title: 'Pektopeksi (Pelvik Organ Sarkması Ameliyatı)',
      summary:
        'Rahim veya vajen kubbesinin aşağı doğru sarkmasında, askının leğen kemiğinin yan duvarındaki güçlü bağa (iliopektineal bağ) yapıldığı laparoskopik onarım yöntemi.',
      metaTitle: 'Pektopeksi Nedir? Sarkma Ameliyatında Sakrokolpopeksiye Alternatif',
      metaDescription:
        'Pektopeksi ile pelvik organ sarkması onarımı: kimlere uygun, sakrokolpopeksiden farkı, bağırsak ve damar komşuluğu açısından avantajı, riskler ve iyileşme süreci.',
      quickFacts: {
        duration: '60–120 dakika',
        anesthesia: 'Genel anestezi',
        hospitalStay: '1–2 gece',
        stayInTurkey: '7–10 gün',
        catheter: '1 gün',
        returnToWork: '2–4 hafta (masa başı), 6 hafta (ağır iş)',
        flightClearance: 'Kontrol muayenesinden sonra'
      },
      definition: [
        'Pelvik organ sarkması (prolapsus), rahmin, mesanenin, bağırsağın veya rahim alınmış kadınlarda vajen kubbesinin destek dokularının zayıflaması sonucu aşağı doğru inmesidir. Hastalar bunu çoğunlukla "aşağıda bir şişlik hissi", "oturunca bir top varmış gibi", "tuvalete gidince elle itmek zorunda kalma" olarak anlatır.',
        'SARKMANIN VARLIĞI TEK BAŞINA AMELİYAT GEREKÇESİ DEĞİLDİR. Muayenede bir miktar sarkma saptanan ama şikâyeti olmayan kadınlar vardır ve bu kadınlar ameliyat edilmez. Karar; şikâyetin günlük yaşamı ne kadar kısıtladığına, idrar ve bağırsak boşaltımını etkileyip etkilemediğine ve kadının beklentisine göre verilir.',
        'Pektopeksi, sarkan rahmi veya vajen kubbesini yukarı asarken, askı materyalini LEĞEN KEMİĞİNİN YAN DUVARINDAKİ GÜÇLÜ BAĞA (iliopektineal bağ, Cooper bağı) tutturan laparoskopik bir yöntemdir. Klasik sakrokolpopekside askı omurganın önündeki kemik zarına (promontoryum) yapılır.',
        'BU FARKIN PRATİK ANLAMI ŞUDUR: Omurganın önündeki bölge, büyük damarların (presakral damarlar), üreterin ve kalın bağırsağın son kısmının komşu olduğu dar bir alandır. Pektopeksi bu bölgeye hiç girmediği için bu komşuluklardan kaynaklanan sorunlardan kaçınır. Ayrıca bağırsağın geçtiği boşluğu daraltmadığı için ameliyat sonrası kabızlığın artması beklenmez. Kilolu kadınlarda ve omurga önü bölgesine ulaşımın zor olduğu olgularda tercih edilebilir hâle gelir.',
        'DÜRÜST BİR SINIR: Pektopeksi sakrokolpopeksiye göre daha yeni bir yöntemdir ve uzun dönem karşılaştırmalı veri havuzu sakrokolpopeksi kadar geniş değildir. Bunu bilerek karar vermek gerekir. Size tek bir yöntem öneriliyorsa, diğerlerinin neden uygun olmadığını sorma hakkınız vardır.',
        'SARKMA VE İDRAR KAÇIRMA AYNI ŞEY DEĞİLDİR. Bazı kadınlarda sarkma, idrar kanalını büktüğü için idrar kaçırmayı gizler; sarkma düzeltildiğinde kaçırma ortaya çıkabilir. Bu nedenle ameliyat öncesi değerlendirmede sarkma geri itilerek idrar kaçırma testi yapılır ve gerekiyorsa askı işlemi aynı seansta veya sonraya planlanır. Bu adım atlanırsa hasta "ameliyattan sonra idrar kaçırmaya başladım" der.',
        'AMELİYAT İLK BASAMAK DEĞİLDİR. Hafif ve orta sarkmada pelvik taban fizyoterapisi, kilo verme, kabızlığın giderilmesi ve pesser (destek halkası) denenir. Pesser, ameliyat istemeyen veya anestezi açısından riskli kadınlar için kalıcı bir çözüm olarak da kullanılabilir.'
      ],
      eligibility: {
        suitable: [
          'Rahim veya vajen kubbesi sarkması belirgin şikâyet yaratan kadınlar',
          'Rahmi alınmış ve sonrasında kubbe sarkması gelişen kadınlar',
          'Pesser kullanmak istemeyen veya pesserden fayda görmeyen kadınlar',
          'Omurga önü (promontoryum) bölgesine ulaşımın zor olduğu kadınlar',
          'Kabızlık şikâyeti belirgin olan ve bu konuda ek yük istemeyen kadınlar',
          'Rahmin korunmasının tercih edildiği, uygun bulunan olgular'
        ],
        notSuitable: [
          'Muayenede sarkma saptanan ama şikâyeti olmayan kadınlar — ameliyat önerilmez',
          'Gebelik planı olan kadınlar: onarımın kalıcılığı doğumla bozulabilir',
          'Tedavi edilmemiş idrar yolu veya vajinal enfeksiyonu olanlar',
          'Laparoskopiye uygun olmayan, çok sayıda karın ameliyatı geçirmiş seçilmiş hastalar',
          'Anestezi açısından yüksek riskli hastalarda önce pesser ve fizyoterapi değerlendirilir',
          'Pelvik taban fizyoterapisi hiç denenmemiş hafif olgular'
        ]
      },
      technology: [
        'Laparoskopik cerrahi seti ve yüksek çözünürlüklü kamera',
        'Askı için sentetik veya biyolojik materyal',
        'POP-Q sistemiyle sarkmanın objektif ölçülmesi',
        'Üroflowmetri ve işeme sonrası kalan idrar ölçümü',
        'Sarkma geri itilerek yapılan gizli idrar kaçırma testi',
        'Gerekli görülen olgularda ürodinami ve sistoskopi'
      ],
      surgeonExperience: {
        caseVolume: '',
        note: 'Sarkma cerrahisinde sonucu belirleyen, yalnızca organı yukarı asmak değil; hangi bölmenin (ön, arka, apikal) ne kadar sarktığını doğru belirlemek ve eşlik eden idrar kaçırmayı önceden planlamaktır. Doç. Dr. Müslüm Ergün’ün rekonstrüktif pelvik cerrahideki deneyimi bu bütüncül planın temelini oluşturur.'
      },
      timeline: [
        { when: 'Uzaktan', title: 'Ön değerlendirme', body: 'Şikâyetleriniz, doğum öyküsü, geçirilmiş ameliyatlar (özellikle rahim alınması), idrar ve bağırsak şikâyetleri, varsa jinekolojik muayene notları ve ürodinami sonucu incelenir.' },
        { when: '1. Gün', title: 'Muayene ve testler', body: 'Jinekolojik muayene ile sarkmanın derecesi ve hangi bölmeyi ilgilendirdiği belirlenir. Sarkma geri itilerek gizli idrar kaçırma araştırılır. Üroflowmetri, kalan idrar, idrar tahlili ve kültürü yapılır.' },
        { when: '2. Gün', title: 'Ameliyat', body: 'Laparoskopik olarak karın içine girilir; sarkan rahim veya vajen kubbesi askı materyaliyle leğen kemiğinin yan duvarındaki güçlü bağa tutturulur. Gerekiyorsa aynı seansta idrar kaçırma veya ön/arka duvar onarımı eklenir.' },
        { when: '3.–4. Gün', title: 'Taburculuk', body: 'Sonda genellikle ertesi gün alınır ve idrarın rahat yapılıp yapılmadığı kontrol edilir. Çoğu hasta 1–2 gece sonra taburcu olur.' },
        { when: '5.–8. Gün', title: 'Kontrol', body: 'Yara yerleri ve idrar akımı değerlendirilir. Dönüş uçuşu bu kontrolden sonraya planlanır.' },
        { when: '6. hafta', title: 'Sonuç değerlendirmesi', body: 'Cinsel yaşama ve ağır aktiviteye dönüş bu dönemde konuşulur. Muayene ile askının durumu değerlendirilir.' }
      ],
      risks: [
        'SARKMANIN TEKRARLAMASI: Hiçbir onarım kalıcı sonuç garanti etmez. Aynı bölmede veya başka bir bölmede (ör. arka duvarda) sarkma yıllar içinde yeniden gelişebilir',
        'AMELİYATTAN SONRA ORTAYA ÇIKAN İDRAR KAÇIRMA: Sarkma idrar kanalını büküp kaçırmayı gizliyorsa, düzeltme sonrası kaçırma görünür hâle gelebilir. Bu nedenle ameliyat öncesi gizli kaçırma testi yapılır',
        'ASKI MATERYALİNE BAĞLI SORUNLAR: Ağrı, materyalin vajen duvarından açığa çıkması (erozyon) veya nadiren çıkarılma gerekliliği. Materyal kalıcı bir implanttır ve bu konuşulmadan ameliyat planlanmamalıdır',
        'Laparoskopiye bağlı riskler: komşu organ yaralanması (mesane, bağırsak, üreter), kanama, nadiren açık ameliyata geçiş',
        'İdrar yolu enfeksiyonu',
        'Cinsel ilişkide ağrı (disparoni)',
        'Karın içi yapışıklık gelişmesi',
        'Genel anesteziye bağlı riskler ve tromboemboli riski — erken hareket ve gerekli durumlarda ilaçla azaltılır'
      ],
      alternatives: [
        'İzlem — şikâyeti olmayan veya hafif olan kadınlarda ilk seçenek',
        'Pelvik taban fizyoterapisi — hafif ve orta sarkmada şikâyeti azaltabilir',
        'Pesser (vajinal destek halkası) — ameliyat istemeyen veya uygun olmayan kadınlarda kalıcı bir seçenek olarak da kullanılabilir',
        'Yaşam tarzı düzenlemesi — kilo verme, kabızlığın giderilmesi, ağır kaldırmanın azaltılması, kronik öksürüğün tedavisi',
        'Laparoskopik sakrokolpopeksi — askının omurga önündeki bölgeye yapıldığı, uzun dönem verisi daha geniş yöntem',
        'Vajinal yoldan yapılan onarımlar — sakrospinöz fiksasyon ve yerli doku onarımları',
        'Kolpokleizis — cinsel ilişki planlamayan ve anestezi açısından riskli yaşlı hastalarda vajen kanalının kapatılması'
      ],
      comparison: {
        title: 'Pektopeksi ve sakrokolpopeksi: ne değişiyor',
        columns: ['Ölçüt', 'Pektopeksi', 'Sakrokolpopeksi'],
        rows: [
          { label: 'Askının yapıldığı yer', values: ['Leğen kemiğinin yan duvarındaki bağ', 'Omurga önündeki kemik zarı'] },
          { label: 'Büyük damar komşuluğu', values: ['Bu bölgeye girilmez', 'Presakral damarlara komşudur'] },
          { label: 'Üreter komşuluğu', values: ['Daha uzak', 'Daha yakın'] },
          { label: 'Bağırsak boşluğunun daralması', values: ['Beklenmez', 'Olabilir'] },
          { label: 'Kabızlıkta artış', values: ['Beklenmez', 'Bildirilmiştir'] },
          { label: 'Kilolu hastada ulaşım', values: ['Görece kolay', 'Zor olabilir'] },
          { label: 'Uzun dönem veri havuzu', values: ['Daha yeni; veri daha sınırlı', 'Daha geniş ve yerleşik'] },
          { label: 'Hastanede kalış', values: ['1–2 gece', '1–2 gece'] }
        ],
        note: 'Bu tablo bir üstünlük sıralaması değildir. Pektopeksinin anatomik avantajları vardır; sakrokolpopeksinin ise daha uzun ve geniş bir veri geçmişi vardır. Hangi dengeye öncelik verdiğinizi söyleyin — karar bunun üzerine kurulur.'
      },
      recovery: [
        { period: 'İlk 48 saat', body: 'Karın içinde gaz hissi ve omuza vuran ağrı laparoskopiden sonra olağandır. Erken yürüyüş teşvik edilir; bu hem gazın atılmasını hem de pıhtı riskinin azalmasını sağlar.' },
        { period: '1. hafta', body: 'Günlük işler yapılabilir. Ağır kaldırmak, ıkınmak ve uzun süre ayakta kalmaktan kaçınılır. Kabızlık önlenir — ıkınmak onarımın ilk haftalarında en zararlı şeydir.' },
        { period: '2.–4. hafta', body: 'Masa başı işe dönüş genellikle bu dönemdedir. Yürüyüş serbesttir; koşu, ağırlık ve karın kası çalışması ertelenir.' },
        { period: '6. hafta', body: 'Cinsel yaşama dönüş genellikle bu süreden ve kontrol muayenesinden sonra konuşulur.' },
        { period: '3. ay', body: 'Şişlik hissi ve baskı şikâyetindeki değişim net olarak değerlendirilir.' },
        { period: 'Uzun dönem', body: 'Kilo kontrolü, kabızlığın önlenmesi ve pelvik taban egzersizleri sonucun korunmasına katkıda bulunur. Yıllar içinde başka bir bölmede yeni sarkma gelişebilir; düzenli kontrol önerilir.' }
      ],
      price: {
        from: 0,
        to: 0,
        currency: 'EUR',
        disclaimer:
          'Tutar; eşlik eden işlemlerin (idrar kaçırma askısı, ön/arka duvar onarımı) yapılıp yapılmadığına, kullanılan materyale ve hastanede kalış süresine göre değişir. Kalem kalem ayrılmış yazılı teklif, tetkikleriniz incelendikten sonra verilir.'
      },
      packageIncludes: [
        'Muayene ve kadın ürolojisi değerlendirmesi',
        'POP-Q ile sarkmanın ölçülmesi ve gizli idrar kaçırma testi',
        'Üroflowmetri ve işeme sonrası kalan idrar ölçümü',
        'Kan ve idrar tetkikleri, idrar kültürü',
        'Anestezi ve ameliyathane',
        'Laparoskopi sarf malzemeleri ve askı materyali',
        'Hastane yatışı',
        'Sonda alımı ve idrar boşaltma kontrolü',
        'Dönüş öncesi kontrol muayenesi',
        'Havalimanı–hastane–otel transferleri',
        'Konaklama (hasta + 1 refakatçi)',
        'Tıbbi tercüman ve hasta koordinatörü',
        'Dönüşten sonra uzaktan takip'
      ],
      faqs: [
        { q: 'Sarkmam var ama şikâyetim yok, ameliyat olmalı mıyım?', a: 'Hayır. Muayenede sarkma saptanan ama rahatsızlık duymayan kadınlar ameliyat edilmez. Karar, şikâyetinizin günlük yaşamınızı ne kadar kısıtladığına göre verilir.' },
        { q: 'Rahmim alınacak mı?', a: 'Pektopeksi, uygun bulunan olgularda rahim korunarak da yapılabilir. Rahmin alınıp alınmayacağı; sarkmanın türüne, eşlik eden jinekolojik bir soruna ve sizin tercihinize göre birlikte kararlaştırılır.' },
        { q: 'Pektopeksi mi sakrokolpopeksi mi daha iyi?', a: 'Bu soru "hangisi daha iyi" değil, "hangi denge size uygun" sorusudur. Pektopeksi omurga önündeki damar ve bağırsak komşuluğundan kaçınır ve kabızlığı artırması beklenmez; sakrokolpopeksinin ise daha uzun ve geniş bir veri geçmişi vardır. Her iki tarafı da söylemeyen bir danışmanlık eksiktir.' },
        { q: 'Ameliyattan sonra idrar kaçırmaya başlar mıyım?', a: 'Sarkma idrar kanalını büküp kaçırmayı gizliyorsa bu mümkündür. Bu yüzden ameliyat öncesi sarkma geri itilerek gizli kaçırma testi yapılır; gerekiyorsa askı işlemi aynı seansta veya sonraya planlanır. Bu adımı atlayan bir plan eksiktir.' },
        { q: 'Kullanılan materyal güvenli mi?', a: 'Askı materyali kalıcı bir implanttır. Nadiren ağrı, vajen duvarından açığa çıkma (erozyon) veya çıkarılma gerekliliği doğurabilir. Bu riskleri konuşmadan sizi ameliyata alan bir hekimden ikinci görüş isteyin.' },
        { q: 'Sarkma tekrarlar mı?', a: 'Tekrarlama ihtimali vardır ve hiçbir yöntem kalıcı sonuç garanti edemez. Kilo artışı, kabızlık, kronik öksürük ve ağır kaldırma bu ihtimali yükseltir. Onarım sonrası bu etkenleri yönetmek sonucun kalıcılığını doğrudan etkiler.' },
        { q: 'Cinsel yaşamımı etkiler mi?', a: 'Çoğu kadında sarkma hissinin geçmesiyle birlikte olumlu etkilenir. Cinsel yaşama dönüş genellikle altıncı haftadan ve kontrol muayenesinden sonra konuşulur. İlişkide ağrı olursa bunu mutlaka bildirin.' },
        { q: 'Pesser denemeli miyim?', a: 'Hafif ve orta sarkmada, ameliyat istemeyen veya anestezi açısından riskli kadınlarda pesser geçerli bir seçenektir ve kalıcı olarak da kullanılabilir. Düzenli kontrol ve temizlik gerektirir.' },
        { q: 'Ne zaman işe dönebilirim?', a: 'Masa başı bir işte genellikle 2–4 hafta. Ağır kaldırma gerektiren işlerde 6 hafta beklenir. Erken dönemde ıkınmak ve ağır kaldırmak onarımı doğrudan zorlar.' },
        { q: 'Türkiye’de ne kadar kalmalıyım?', a: 'Genellikle 7–10 gün. Kontrol muayenesi burada yapıldığı için dönüş uçuşunu bu muayeneden sonraya planlayın.' },
        { q: 'Hangi belgeleri göndermeliyim?', a: 'Jinekolojik muayene notları ve varsa POP-Q ölçümü, ürodinami sonucu, üroflowmetri ve kalan idrar ölçümü, geçirilmiş ameliyatların raporları (özellikle rahim alınması), idrar tahlili ve kullandığınız ilaçların listesi.' }
      ],
      sources: [
        {
          label: 'EAU Guidelines on Non-neurogenic Female LUTS — Avrupa Üroloji Derneği',
          url: 'https://uroweb.org/guidelines/non-neurogenic-female-luts'
        }
      ]
    },
    en: {
      title: 'Pectopexy (Pelvic Organ Prolapse Surgery)',
      summary:
        'A laparoscopic repair for a descending uterus or vaginal vault in which the suspension is attached to the strong ligament on the side wall of the pelvis (the iliopectineal ligament).',
      metaTitle: 'Pectopexy: An Alternative to Sacrocolpopexy in Prolapse Surgery',
      metaDescription:
        'Prolapse repair by pectopexy: who it suits, how it differs from sacrocolpopexy, its advantage regarding the bowel and major vessels, the risks and recovery.',
      quickFacts: {
        duration: '60–120 minutes',
        anesthesia: 'General anaesthesia',
        hospitalStay: '1–2 nights',
        stayInTurkey: '7–10 days',
        catheter: '1 day',
        returnToWork: '2–4 weeks (desk work), 6 weeks (heavy work)',
        flightClearance: 'After the review appointment'
      },
      definition: [
        'Pelvic organ prolapse is the descent of the uterus, bladder, bowel or — in women whose uterus has been removed — the vaginal vault, because the supporting tissues have weakened. Women usually describe it as "a bulge down below", "as if I am sitting on a ball", or having "to push it back to empty".',
        'THE PRESENCE OF PROLAPSE IS NOT IN ITSELF A REASON TO OPERATE. Some women have a degree of prolapse on examination and no symptoms at all, and those women are not operated on. The decision rests on how much the symptoms restrict daily life, whether they affect bladder and bowel emptying, and on what the woman expects.',
        'Pectopexy is a laparoscopic method in which the descending uterus or vaginal vault is suspended upwards with a mesh attached to THE STRONG LIGAMENT ON THE SIDE WALL OF THE PELVIS (the iliopectineal, or Cooper, ligament). In classical sacrocolpopexy the suspension is attached to the covering of the bone in front of the spine (the promontory).',
        'THE PRACTICAL MEANING OF THAT DIFFERENCE IS THIS: the area in front of the spine is a confined space bordered by major vessels (the presacral vessels), the ureter and the last part of the large bowel. Because pectopexy never enters that area, it avoids the problems arising from those relations. It also does not narrow the space through which the bowel passes, so an increase in constipation after surgery is not expected. In women who are overweight, and where access to the pre-spinal area is difficult, it becomes a preferred option.',
        'AN HONEST LIMIT: pectopexy is a newer method than sacrocolpopexy, and the pool of long-term comparative data is not as large. That should be known when deciding. If only one method is being offered to you, you are entitled to ask why the others do not suit you.',
        'PROLAPSE AND INCONTINENCE ARE NOT THE SAME THING. In some women the prolapse kinks the urethra and masks leakage; once the prolapse is corrected, the leakage appears. Assessment before surgery therefore includes reducing the prolapse and testing for hidden incontinence, so that a sling can be planned either at the same operation or later. Skipping that step is what leads a woman to say "I started leaking after the operation".',
        'SURGERY IS NOT THE FIRST STEP. In mild and moderate prolapse, pelvic floor physiotherapy, weight loss, treating constipation and a pessary are tried. A pessary can also serve as a lasting solution for women who do not want surgery or who are an anaesthetic risk.'
      ],
      eligibility: {
        suitable: [
          'Women in whom uterine or vault prolapse causes definite symptoms',
          'Women who have developed vault prolapse after hysterectomy',
          'Women who do not wish to use a pessary, or gain no benefit from one',
          'Women in whom access to the pre-spinal (promontory) area is difficult',
          'Women with marked constipation who do not want additional burden in that respect',
          'Selected women in whom preserving the uterus is preferred and suitable'
        ],
        notSuitable: [
          'Women with prolapse on examination but no symptoms — surgery is not advised',
          'Women planning a pregnancy: delivery can undo the durability of the repair',
          'Women with untreated urinary or vaginal infection',
          'Selected women unsuitable for laparoscopy after multiple abdominal operations',
          'Women at high anaesthetic risk, in whom a pessary and physiotherapy are considered first',
          'Mild cases in which pelvic floor physiotherapy has not been tried at all'
        ]
      },
      technology: [
        'Laparoscopic instrument set and high-definition camera',
        'Synthetic or biological material for the suspension',
        'Objective measurement of prolapse using the POP-Q system',
        'Uroflowmetry and post-void residual measurement',
        'Testing for occult incontinence with the prolapse reduced',
        'Urodynamics and cystoscopy where required'
      ],
      surgeonExperience: {
        caseVolume: '',
        note: 'In prolapse surgery the result is determined not simply by suspending the organ, but by identifying correctly which compartment (anterior, posterior, apical) has descended and by how much, and by planning for any accompanying incontinence in advance. Assoc. Prof. Dr. Müslüm Ergün’s experience in reconstructive pelvic surgery underpins that whole-picture plan.'
      },
      timeline: [
        { when: 'Remotely', title: 'Initial assessment', body: 'Your symptoms, obstetric history, previous surgery (particularly hysterectomy), bladder and bowel symptoms, any gynaecological examination notes and urodynamics are reviewed.' },
        { when: 'Day 1', title: 'Examination and tests', body: 'Gynaecological examination establishes the degree of prolapse and which compartment is involved. The prolapse is reduced and occult incontinence looked for. Uroflowmetry, residual volume, urinalysis and culture are carried out.' },
        { when: 'Day 2', title: 'Surgery', body: 'The abdomen is entered laparoscopically and the descending uterus or vault is attached, with the suspension material, to the strong ligament on the side wall of the pelvis. Where needed, an incontinence procedure or anterior/posterior wall repair is added in the same sitting.' },
        { when: 'Days 3–4', title: 'Discharge', body: 'The catheter is usually removed the following day and voiding is checked. Most patients go home after 1–2 nights.' },
        { when: 'Days 5–8', title: 'Review', body: 'The wounds and the urinary stream are assessed. The return flight is planned for after this review.' },
        { when: 'Week 6', title: 'Assessment of the result', body: 'Return to sexual activity and heavy exertion is discussed. The suspension is assessed on examination.' }
      ],
      risks: [
        'RECURRENCE OF PROLAPSE: no repair guarantees a permanent result. Prolapse can recur over the years in the same compartment or in another (for example the posterior wall)',
        'INCONTINENCE APPEARING AFTER SURGERY: if the prolapse was kinking the urethra and masking leakage, the leakage may become evident after correction. That is why occult incontinence is tested for beforehand',
        'PROBLEMS RELATED TO THE SUSPENSION MATERIAL: pain, exposure through the vaginal wall (erosion), or rarely the need for removal. The material is a permanent implant and surgery should not be planned without discussing this',
        'Risks of laparoscopy: injury to adjacent organs (bladder, bowel, ureter), bleeding, rarely conversion to open surgery',
        'Urinary tract infection',
        'Pain during intercourse (dyspareunia)',
        'Formation of adhesions inside the abdomen',
        'Risks of general anaesthesia and of thromboembolism — reduced by early mobilisation and, where indicated, medication'
      ],
      alternatives: [
        'Observation — the first option in women with no symptoms or only mild ones',
        'Pelvic floor physiotherapy — can reduce symptoms in mild and moderate prolapse',
        'Pessary (vaginal support ring) — can also serve as a lasting option for women who do not want, or are not suitable for, surgery',
        'Lifestyle measures — weight loss, treating constipation, reducing heavy lifting, treating a chronic cough',
        'Laparoscopic sacrocolpopexy — suspension to the area in front of the spine, with a larger pool of long-term data',
        'Vaginal repairs — sacrospinous fixation and native tissue repair',
        'Colpocleisis — closure of the vaginal canal in older patients not planning intercourse and at anaesthetic risk'
      ],
      comparison: {
        title: 'Pectopexy and sacrocolpopexy: what changes',
        columns: ['Criterion', 'Pectopexy', 'Sacrocolpopexy'],
        rows: [
          { label: 'Point of attachment', values: ['Ligament on the pelvic side wall', 'Covering of the bone in front of the spine'] },
          { label: 'Proximity to major vessels', values: ['That area is not entered', 'Adjacent to the presacral vessels'] },
          { label: 'Proximity to the ureter', values: ['Further away', 'Closer'] },
          { label: 'Narrowing of the bowel space', values: ['Not expected', 'Possible'] },
          { label: 'Increase in constipation', values: ['Not expected', 'Has been reported'] },
          { label: 'Access in overweight patients', values: ['Relatively easier', 'Can be difficult'] },
          { label: 'Pool of long-term data', values: ['Newer; data more limited', 'Larger and established'] },
          { label: 'Hospital stay', values: ['1–2 nights', '1–2 nights'] }
        ],
        note: 'This table is not a ranking. Pectopexy has anatomical advantages; sacrocolpopexy has a longer and broader data history. Tell us which trade-off matters most to you — the decision is built on that.'
      },
      recovery: [
        { period: 'First 48 hours', body: 'A sensation of gas in the abdomen and pain referred to the shoulder are usual after laparoscopy. Early walking is encouraged; it both helps the gas disperse and lowers the risk of clots.' },
        { period: 'Week 1', body: 'Ordinary daily activities are possible. Lifting, straining and long periods standing are avoided. Constipation is prevented — straining is the most damaging thing in the first weeks of a repair.' },
        { period: 'Weeks 2–4', body: 'Return to desk work usually falls here. Walking is free; running, weights and abdominal exercise wait.' },
        { period: 'Week 6', body: 'Return to sexual activity is usually discussed after this point and after the review appointment.' },
        { period: 'Month 3', body: 'The change in the sense of bulging and pressure can be judged clearly.' },
        { period: 'Long term', body: 'Weight control, preventing constipation and pelvic floor exercise all help preserve the result. A new prolapse can develop in another compartment over the years; regular review is advised.' }
      ],
      price: {
        from: 0,
        to: 0,
        currency: 'EUR',
        disclaimer:
          'The amount depends on whether accompanying procedures (an incontinence sling, anterior or posterior repair) are performed, on the material used and on the length of hospital stay. An itemised written quotation is given once your tests have been reviewed.'
      },
      packageIncludes: [
        'Examination and female urology assessment',
        'POP-Q measurement of prolapse and testing for occult incontinence',
        'Uroflowmetry and post-void residual measurement',
        'Blood and urine tests, urine culture',
        'Anaesthesia and operating theatre',
        'Laparoscopic consumables and suspension material',
        'Hospital stay',
        'Catheter removal and check of bladder emptying',
        'Review appointment before you travel home',
        'Airport–hospital–hotel transfers',
        'Accommodation (patient plus one companion)',
        'Medical interpreter and patient coordinator',
        'Remote follow-up after you return home'
      ],
      faqs: [
        { q: 'I have prolapse but no symptoms — should I be operated on?', a: 'No. Women found to have prolapse on examination but who are not troubled by it are not operated on. The decision rests on how much your symptoms restrict your daily life.' },
        { q: 'Will my uterus be removed?', a: 'In suitable cases pectopexy can be performed with the uterus preserved. Whether it is removed is decided together, according to the type of prolapse, any accompanying gynaecological problem, and your own preference.' },
        { q: 'Which is better, pectopexy or sacrocolpopexy?', a: 'The question is not "which is better" but "which trade-off suits you". Pectopexy avoids the vessels and bowel in front of the spine and is not expected to worsen constipation; sacrocolpopexy has a longer and broader data history. Advice that does not state both sides is incomplete.' },
        { q: 'Will I start leaking after the operation?', a: 'It is possible if the prolapse was kinking the urethra and masking leakage. That is why the prolapse is reduced and occult incontinence tested for before surgery; if needed, a sling is planned at the same operation or later. A plan that skips this step is incomplete.' },
        { q: 'Is the material used safe?', a: 'The suspension material is a permanent implant. It can rarely cause pain, exposure through the vaginal wall (erosion) or the need for removal. If a surgeon takes you to theatre without discussing these risks, seek a second opinion.' },
        { q: 'Can the prolapse come back?', a: 'Recurrence is possible, and no method can guarantee a permanent result. Weight gain, constipation, chronic cough and heavy lifting raise that chance. Managing those factors after the repair directly affects how long it lasts.' },
        { q: 'Will it affect my sex life?', a: 'In most women the effect is positive, because the sensation of bulging goes. Return to sexual activity is usually discussed after six weeks and after the review. Report any pain during intercourse without delay.' },
        { q: 'Should I try a pessary?', a: 'In mild and moderate prolapse, and in women who do not want surgery or are at anaesthetic risk, a pessary is a legitimate option and can be used long term. It requires regular review and cleaning.' },
        { q: 'When can I go back to work?', a: 'Usually 2–4 weeks for desk work. For jobs involving heavy lifting, 6 weeks. Straining and lifting early on put the repair under direct strain.' },
        { q: 'How long should I stay in Türkiye?', a: 'Usually 7–10 days. Because the review is carried out here, plan your return flight for after that appointment.' },
        { q: 'What documents should I send?', a: 'Gynaecological examination notes and any POP-Q measurement, urodynamics, uroflowmetry and residual volume, reports of previous surgery (especially hysterectomy), a urinalysis and your medication list.' }
      ],
      sources: [
        {
          label: 'EAU Guidelines on Non-neurogenic Female LUTS — European Association of Urology',
          url: 'https://uroweb.org/guidelines/non-neurogenic-female-luts'
        }
      ]
    },
    ar: {
      title: 'التثبيت العاني (Pectopexy) لهبوط أعضاء الحوض',
      summary:
        'إصلاح بالمنظار لهبوط الرحم أو قبة المهبل، يُثبَّت فيه التعليق على الرباط القوي في الجدار الجانبي للحوض (الرباط الحرقفي العاني).',
      metaTitle: 'التثبيت العاني: بديل لتثبيت القبة على العجز في جراحة الهبوط',
      metaDescription:
        'إصلاح هبوط أعضاء الحوض بالتثبيت العاني: لمن يصلح، وما الفرق عن التثبيت على العجز، وميزته تجاه الأمعاء والأوعية الكبيرة، والمخاطر والتعافي.',
      quickFacts: {
        duration: '60 إلى 120 دقيقة',
        anesthesia: 'تخدير عام',
        hospitalStay: 'ليلة إلى ليلتين',
        stayInTurkey: '7 إلى 10 أيام',
        catheter: 'يوم واحد',
        returnToWork: 'أسبوعان إلى أربعة (عمل مكتبي)، ستة أسابيع (عمل شاق)',
        flightClearance: 'بعد مراجعة المتابعة'
      },
      definition: [
        'هبوط أعضاء الحوض نزول الرحم أو المثانة أو الأمعاء أو — عند من أُزيل رحمها — قبة المهبل بسبب ضعف الأنسجة الداعمة. وتصفه المريضات غالبًا بأنه «انتفاخ في الأسفل» أو «كأنني أجلس على كرة» أو الحاجة إلى «دفعه للداخل كي أتمكن من الإفراغ».',
        'ووجود الهبوط وحده ليس سببًا للجراحة. فهناك نساء يُكتشَف لديهن قدر من الهبوط في الفحص من دون أي شكوى، وهؤلاء لا يُجرى لهن عمل جراحي. ويتوقف القرار على مقدار ما تحدّ به الشكوى من الحياة اليومية، وعلى تأثيرها في إفراغ المثانة والأمعاء، وعلى توقعات المرأة.',
        'والتثبيت العاني طريقة بالمنظار يُرفَع فيها الرحم الهابط أو قبة المهبل ويُثبَّت بمادة التعليق على الرباط القوي في الجدار الجانبي للحوض (الرباط الحرقفي العاني، رباط كوبر). أما في التثبيت الكلاسيكي على العجز فيُربَط التعليق بسمحاق العظم أمام العمود الفقري.',
        'ومعنى هذا الفرق عمليًا: المنطقة أمام العمود الفقري حيّز ضيّق تجاوره أوعية كبيرة والحالب والجزء الأخير من القولون. ولأن التثبيت العاني لا يدخل هذه المنطقة فهو يتجنّب المشكلات الناشئة عن تلك المجاورات. كما أنه لا يضيّق المسار الذي تمر فيه الأمعاء، فلا يُتوقَّع ازدياد الإمساك بعد العملية. وعند زائدات الوزن وحين يصعب الوصول إلى المنطقة أمام العمود الفقري يصير خيارًا مفضّلًا.',
        'وحدّ صادق: التثبيت العاني أحدث من التثبيت على العجز، ورصيد البيانات المقارِنة بعيدة المدى ليس بالسعة نفسها. وينبغي معرفة ذلك عند القرار. وإن عُرضت عليك طريقة واحدة فمن حقك أن تسألي لماذا لا تناسبك الأخريات.',
        'والهبوط والسلس ليسا شيئًا واحدًا. فعند بعض النساء يثني الهبوط الإحليل فيخفي تسرّب البول؛ وبعد التصحيح يظهر التسرّب. ولذلك يتضمن التقييم قبل العملية إرجاع الهبوط واختبار السلس الخفي، كي يُخطَّط لشريط في الجلسة نفسها أو لاحقًا. وتخطّي هذه الخطوة هو ما يجعل المريضة تقول: «بدأت أتسرّب بعد العملية».',
        'والجراحة ليست الخطوة الأولى. ففي الهبوط الخفيف والمتوسط يُجرَّب العلاج الطبيعي لقاع الحوض وإنقاص الوزن ومعالجة الإمساك والفرزجة. ويمكن أن تكون الفرزجة حلًّا دائمًا لمن لا ترغب في الجراحة أو لمن لديها خطورة تخديرية.'
      ],
      eligibility: {
        suitable: [
          'النساء اللواتي يسبب هبوط الرحم أو القبة لديهن شكوى واضحة',
          'النساء اللواتي ظهر لديهن هبوط القبة بعد استئصال الرحم',
          'النساء اللواتي لا يرغبن في الفرزجة أو لا يستفدن منها',
          'النساء اللواتي يصعب الوصول عندهن إلى المنطقة أمام العمود الفقري',
          'النساء ذوات الإمساك الواضح ممن لا يرغبن في عبء إضافي في هذا الجانب',
          'الحالات المختارة التي يُفضَّل فيها الحفاظ على الرحم ويكون ذلك ممكنًا'
        ],
        notSuitable: [
          'النساء اللواتي يُكتشَف لديهن هبوط في الفحص من دون شكوى — لا تُقترح الجراحة',
          'النساء اللواتي يخططن للحمل: فالولادة قد تُفسد دوام الإصلاح',
          'النساء المصابات بالتهاب بولي أو مهبلي غير معالَج',
          'بعض النساء غير المؤهلات للمنظار بعد عمليات بطنية متعددة',
          'النساء ذوات الخطورة التخديرية العالية — تُقيَّم عندهن الفرزجة والعلاج الطبيعي أولًا',
          'الحالات الخفيفة التي لم يُجرَّب فيها العلاج الطبيعي لقاع الحوض'
        ]
      },
      technology: [
        'طقم جراحة بالمنظار وكاميرا عالية الدقة',
        'مادة صناعية أو حيوية للتعليق',
        'قياس الهبوط موضوعيًا بنظام POP-Q',
        'قياس تدفق البول وقياس البول المتبقي',
        'اختبار السلس الخفي بعد إرجاع الهبوط',
        'الدراسة الديناميكية وتنظير المثانة عند الحاجة'
      ],
      surgeonExperience: {
        caseVolume: '',
        note: 'في جراحة الهبوط لا تتحدد النتيجة برفع العضو وحده، بل بتحديد أي حيّز (أمامي أو خلفي أو قمي) هبط وبأي قدر، وبالتخطيط المسبق للسلس المرافق. وخبرة الأستاذ المشارك د. مسلم إرغن في جراحة الحوض الترميمية أساس هذه الخطة الشاملة.'
      },
      timeline: [
        { when: 'عن بُعد', title: 'التقييم الأولي', body: 'تُراجَع شكواك وسوابق الولادة والعمليات السابقة (ولا سيما استئصال الرحم) والشكاوى البولية والمعوية وملاحظات الفحص النسائي ونتيجة الدراسة الديناميكية إن وُجدت.' },
        { when: 'اليوم الأول', title: 'الفحص والاختبارات', body: 'يحدد الفحص النسائي درجة الهبوط والحيّز المصاب. ويُرجَع الهبوط ويُبحَث عن سلس خفي. وتُجرى قياسات التدفق والبول المتبقي وتحليل البول وزرعه.' },
        { when: 'اليوم الثاني', title: 'العملية', body: 'يُدخَل إلى البطن بالمنظار؛ ويُثبَّت الرحم الهابط أو القبة بمادة التعليق على الرباط القوي في الجدار الجانبي للحوض. وعند اللزوم يُضاف في الجلسة نفسها إجراء للسلس أو إصلاح للجدار الأمامي أو الخلفي.' },
        { when: 'اليوم الثالث إلى الرابع', title: 'الخروج', body: 'تُنزَع القسطرة عادة في اليوم التالي ويُتحقَّق من التبول. وتعود معظم المريضات بعد ليلة أو ليلتين.' },
        { when: 'اليوم الخامس إلى الثامن', title: 'المراجعة', body: 'تُقيَّم الجروح وتيار البول. وتُخطَّط رحلة العودة بعد هذه المراجعة.' },
        { when: 'الأسبوع السادس', title: 'تقييم النتيجة', body: 'يُناقَش العود إلى الحياة الجنسية وإلى الجهد. ويُقيَّم التعليق بالفحص.' }
      ],
      risks: [
        'عودة الهبوط: لا يضمن أي إصلاح نتيجة دائمة. وقد يعود الهبوط عبر السنين في الحيّز نفسه أو في حيّز آخر (كالجدار الخلفي)',
        'ظهور تسرّب بول بعد العملية: فإن كان الهبوط يثني الإحليل ويخفي التسرّب فقد يظهر بعد التصحيح. ولهذا يُختبَر السلس الخفي مسبقًا',
        'مشكلات متعلقة بمادة التعليق: ألم أو انكشاف عبر جدار المهبل (تآكل) أو نادرًا حاجة إلى إزالة. والمادة غرسة دائمة ولا ينبغي التخطيط للعملية من دون هذا الحديث',
        'مخاطر المنظار: إصابة عضو مجاور (مثانة أو أمعاء أو حالب)، ونزف، ونادرًا التحول إلى جراحة مفتوحة',
        'التهاب المسالك البولية',
        'ألم أثناء الجماع',
        'تكوّن التصاقات داخل البطن',
        'مخاطر التخدير العام وخطر الجلطات — ويقلّان بالحركة المبكرة وبالأدوية عند اللزوم'
      ],
      alternatives: [
        'المراقبة — الخيار الأول عند من لا شكوى لديها أو شكواها خفيفة',
        'العلاج الطبيعي لقاع الحوض — قد يقلل الشكوى في الهبوط الخفيف والمتوسط',
        'الفرزجة — ويمكن أن تكون خيارًا دائمًا لمن لا ترغب في الجراحة أو لا تصلح لها',
        'تعديل نمط الحياة — إنقاص الوزن ومعالجة الإمساك وتقليل حمل الأثقال وعلاج السعال المزمن',
        'تثبيت القبة على العجز بالمنظار — تعليق أمام العمود الفقري برصيد بيانات بعيدة المدى أوسع',
        'الإصلاحات عبر المهبل — التثبيت على الرباط العجزي الشوكي والإصلاح بالأنسجة الذاتية',
        'إغلاق المهبل — عند المسنّات اللواتي لا يخططن للجماع ولديهن خطورة تخديرية'
      ],
      comparison: {
        title: 'التثبيت العاني والتثبيت على العجز: ما الذي يتغير',
        columns: ['المعيار', 'التثبيت العاني', 'التثبيت على العجز'],
        rows: [
          { label: 'موضع التثبيت', values: ['رباط الجدار الجانبي للحوض', 'سمحاق العظم أمام العمود الفقري'] },
          { label: 'القرب من الأوعية الكبيرة', values: ['لا تُدخَل هذه المنطقة', 'مجاور للأوعية أمام العجز'] },
          { label: 'القرب من الحالب', values: ['أبعد', 'أقرب'] },
          { label: 'تضييق مسار الأمعاء', values: ['غير متوقع', 'ممكن'] },
          { label: 'ازدياد الإمساك', values: ['غير متوقع', 'أُبلِغ عنه'] },
          { label: 'الوصول عند زيادة الوزن', values: ['أسهل نسبيًا', 'قد يكون صعبًا'] },
          { label: 'رصيد البيانات بعيدة المدى', values: ['أحدث؛ والبيانات أقل', 'أوسع وراسخ'] },
          { label: 'الإقامة', values: ['ليلة إلى ليلتين', 'ليلة إلى ليلتين'] }
        ],
        note: 'هذا الجدول ليس ترتيبًا. فللتثبيت العاني مزايا تشريحية؛ وللتثبيت على العجز تاريخ بيانات أطول وأوسع. فقولي أي موازنة تهمّك أكثر — وعلى ذلك يُبنى القرار.'
      },
      recovery: [
        { period: 'أول 48 ساعة', body: 'الإحساس بالغاز في البطن والألم المنعكس إلى الكتف أمران معتادان بعد المنظار. ويُشجَّع المشي المبكر؛ فهو يساعد على تصريف الغاز ويقلل خطر الجلطات.' },
        { period: 'الأسبوع الأول', body: 'الأعمال اليومية ممكنة. ويُتجنَّب الحمل والحزق والوقوف الطويل. ويُمنَع الإمساك — فالحزق أكثر ما يضر في الأسابيع الأولى بعد الإصلاح.' },
        { period: 'الأسبوع الثاني إلى الرابع', body: 'تقع العودة إلى العمل المكتبي عادة هنا. والمشي حر؛ أما الجري والأوزان وتمارين البطن فتنتظر.' },
        { period: 'الأسبوع السادس', body: 'يُناقَش عادة العود إلى الحياة الجنسية بعد هذه المدة وبعد مراجعة المتابعة.' },
        { period: 'الشهر الثالث', body: 'يمكن تقييم التغيّر في الإحساس بالانتفاخ والضغط تقييمًا واضحًا.' },
        { period: 'على المدى البعيد', body: 'ضبط الوزن ومنع الإمساك وتمارين قاع الحوض تساعد على حفظ النتيجة. وقد يظهر مع السنين هبوط جديد في حيّز آخر؛ ويُنصَح بمراجعة منتظمة.' }
      ],
      price: {
        from: 0,
        to: 0,
        currency: 'EUR',
        disclaimer:
          'يتوقف المبلغ على إجراء عمليات مرافقة من عدمه (شريط للسلس أو إصلاح للجدار الأمامي أو الخلفي)، وعلى المادة المستعملة، وعلى مدة الإقامة. ويُقدَّم عرض مكتوب مفصّل بعد مراجعة فحوصك.'
      },
      packageIncludes: [
        'الفحص والتقييم في مسالك النساء',
        'قياس الهبوط بنظام POP-Q واختبار السلس الخفي',
        'قياس تدفق البول وقياس البول المتبقي',
        'تحاليل الدم والبول وزرع البول',
        'التخدير وغرفة العمليات',
        'مستلزمات المنظار ومادة التعليق',
        'الإقامة في المستشفى',
        'نزع القسطرة والتحقق من إفراغ المثانة',
        'مراجعة قبل العودة',
        'التنقلات بين المطار والمستشفى والفندق',
        'الإقامة (المريضة ومرافق واحد)',
        'مترجم طبي ومنسّق للمرضى',
        'متابعة عن بُعد بعد العودة'
      ],
      faqs: [
        { q: 'لديّ هبوط من دون شكوى، هل أُجري العملية؟', a: 'لا. فالنساء اللواتي يُكتشَف لديهن هبوط من دون انزعاج لا يُجرى لهن عمل جراحي. ويتوقف القرار على مقدار ما تحدّ به شكواك من حياتك اليومية.' },
        { q: 'هل سيُزال رحمي؟', a: 'في الحالات المناسبة يمكن إجراء التثبيت العاني مع الحفاظ على الرحم. وإزالته من عدمها يُقرَّر معًا بحسب نوع الهبوط ووجود مشكلة نسائية مرافقة وتفضيلك.' },
        { q: 'أيهما أفضل: التثبيت العاني أم التثبيت على العجز؟', a: 'السؤال ليس «أيهما أفضل» بل «أي موازنة تناسبك». فالتثبيت العاني يتجنّب الأوعية والأمعاء أمام العمود الفقري ولا يُتوقَّع أن يزيد الإمساك؛ وللتثبيت على العجز تاريخ بيانات أطول وأوسع. والاستشارة التي لا تذكر الجانبين ناقصة.' },
        { q: 'هل أبدأ بالتسرّب بعد العملية؟', a: 'ممكن إن كان الهبوط يثني الإحليل ويخفي التسرّب. ولهذا يُرجَع الهبوط قبل العملية ويُختبَر السلس الخفي؛ وعند اللزوم يُخطَّط لشريط في الجلسة نفسها أو لاحقًا. والخطة التي تتخطّى هذه الخطوة ناقصة.' },
        { q: 'هل المادة المستعملة آمنة؟', a: 'مادة التعليق غرسة دائمة. وقد تسبب نادرًا ألمًا أو انكشافًا عبر جدار المهبل (تآكلًا) أو حاجة إلى إزالة. فإن لم يناقش الجرّاح هذه المخاطر فاطلبي رأيًا ثانيًا.' },
        { q: 'هل يعود الهبوط؟', a: 'العودة محتملة، ولا تضمن أي طريقة نتيجة دائمة. وزيادة الوزن والإمساك والسعال المزمن وحمل الأثقال ترفع هذا الاحتمال. وضبط هذه العوامل بعد الإصلاح يؤثر مباشرة في دوامه.' },
        { q: 'هل يؤثر في حياتي الجنسية؟', a: 'الأثر إيجابي عند معظم النساء لزوال الإحساس بالانتفاخ. ويُناقَش العود عادة بعد الأسبوع السادس وبعد المراجعة. وأبلغي فورًا عن أي ألم أثناء الجماع.' },
        { q: 'هل أجرّب الفرزجة؟', a: 'في الهبوط الخفيف والمتوسط، ولدى من لا ترغب في الجراحة أو لديها خطورة تخديرية، الفرزجة خيار مشروع ويمكن استعماله طويلًا. وهي تحتاج مراجعة وتنظيفًا منتظمين.' },
        { q: 'متى أعود إلى العمل؟', a: 'عادة من أسبوعين إلى أربعة في العمل المكتبي. وفي الأعمال التي تتطلب حمل أثقال ستة أسابيع. فالحزق والحمل مبكرًا يُجهدان الإصلاح مباشرة.' },
        { q: 'كم أبقى في تركيا؟', a: 'عادة من 7 إلى 10 أيام. ولأن المراجعة تتم هنا فخطّطي رحلة العودة بعدها.' },
        { q: 'ما الوثائق التي أرسلها؟', a: 'ملاحظات الفحص النسائي وقياس POP-Q إن وُجد، ونتيجة الدراسة الديناميكية، وقياس التدفق والبول المتبقي، وتقارير العمليات السابقة (ولا سيما استئصال الرحم)، وتحليل البول، وقائمة أدويتك.' }
      ],
      sources: [
        {
          label: 'إرشادات EAU حول أعراض الجهاز البولي السفلي غير العصبية لدى النساء — الجمعية الأوروبية للمسالك البولية',
          url: 'https://uroweb.org/guidelines/non-neurogenic-female-luts'
        }
      ]
    }
  }
};
