import type { Treatment } from '../types';

/**
 * PEKTOPEKSİ (PELVİK ORGAN SARKMASI ONARIMI) — yeni sayfa (Görev 7).
 *
 * reviewStatus: 'draft' — hekim onayı bekliyor; `lastReviewed` bilerek boş.
 * Kaynak: EAU Non-neurogenic Female LUTS kılavuzu (pelvik organ prolapsusu bölümü).
 * Başarı oranı/yüzde YAZILMAMIŞTIR.
 */
export const pektopeksi: Treatment = {
  slug: 'pektopeksi',
  procedure: { type: 'SurgicalProcedure', bodyLocation: 'Uterus' },
  parent: 'kadin-urolojisi',
  icon: 'female',
  category: 'reconstructive',
  reviewStatus: 'draft',
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
    de: {
      title: 'Pektopexie (Operation bei Beckenorgansenkung)',
      summary:
        'Laparoskopische Korrektur bei absinkender Gebärmutter oder abgesunkenem Scheidenstumpf, bei der die Aufhängung am kräftigen Band der seitlichen Beckenwand (Ligamentum iliopectineum) verankert wird.',
      metaTitle: 'Pektopexie: Alternative zur Sakrokolpopexie bei Senkungen',
      metaDescription:
        'Senkungskorrektur mittels Pektopexie: für wen geeignet, Unterschied zur Sakrokolpopexie, Vorteil hinsichtlich Darm und großer Gefäße, Risiken und Heilungsverlauf.',
      quickFacts: {
        duration: '60–120 Minuten',
        anesthesia: 'Vollnarkose',
        hospitalStay: '1–2 Nächte',
        stayInTurkey: '7–10 Tage',
        catheter: '1 Tag',
        returnToWork: '2–4 Wochen (Bürotätigkeit), 6 Wochen (schwere Arbeit)',
        flightClearance: 'Nach der Kontrolluntersuchung'
      },
      definition: [
        'Eine Beckenorgansenkung ist das Absinken von Gebärmutter, Blase, Darm oder — bei entfernter Gebärmutter — des Scheidenstumpfs infolge geschwächter Haltestrukturen. Frauen beschreiben es meist als „eine Vorwölbung nach unten", „als säße ich auf einem Ball" oder „ich muss es zurückschieben, um mich zu entleeren".',
        'DAS VORHANDENSEIN EINER SENKUNG IST FÜR SICH GENOMMEN KEIN OPERATIONSGRUND. Es gibt Frauen mit einem gewissen Senkungsgrad in der Untersuchung und ganz ohne Beschwerden; sie werden nicht operiert. Die Entscheidung richtet sich danach, wie sehr die Beschwerden den Alltag einschränken, ob Blasen- und Darmentleerung betroffen sind, und nach der Erwartung der Frau.',
        'Die Pektopexie ist ein laparoskopisches Verfahren, bei dem die abgesunkene Gebärmutter oder der Scheidenstumpf mit einem Band an DAS KRÄFTIGE BAND DER SEITLICHEN BECKENWAND (Ligamentum iliopectineum, Cooper-Band) angehoben wird. Bei der klassischen Sakrokolpopexie erfolgt die Verankerung an der Knochenhaut vor der Wirbelsäule (Promontorium).',
        'DIE PRAKTISCHE BEDEUTUNG DIESES UNTERSCHIEDS: Der Bereich vor der Wirbelsäule ist ein enger Raum, in dem große Gefäße (präsakrale Gefäße), der Harnleiter und der letzte Abschnitt des Dickdarms benachbart liegen. Da die Pektopexie diesen Bereich nicht betritt, umgeht sie die daraus erwachsenden Probleme. Zudem verengt sie den Raum, durch den der Darm zieht, nicht, sodass eine Zunahme der Verstopfung nach der Operation nicht zu erwarten ist. Bei übergewichtigen Frauen und wenn der Zugang zum Bereich vor der Wirbelsäule schwierig ist, wird sie zur bevorzugten Option.',
        'EINE EHRLICHE GRENZE: Die Pektopexie ist jünger als die Sakrokolpopexie, und der Fundus an vergleichenden Langzeitdaten ist nicht so groß. Das sollte man bei der Entscheidung wissen. Wird Ihnen nur ein Verfahren angeboten, dürfen Sie fragen, warum die anderen für Sie nicht infrage kommen.',
        'SENKUNG UND INKONTINENZ SIND NICHT DASSELBE. Bei manchen Frauen knickt die Senkung die Harnröhre ab und verdeckt einen Harnverlust; nach der Korrektur tritt er zutage. Die Abklärung vor der Operation umfasst deshalb das Zurückschieben der Senkung und die Prüfung auf verdeckte Inkontinenz, damit eine Schlinge in derselben Sitzung oder später geplant werden kann. Wird dieser Schritt übersprungen, sagt die Patientin hinterher: „Seit der Operation verliere ich Urin."',
        'DIE OPERATION IST NICHT DER ERSTE SCHRITT. Bei leichter und mittlerer Senkung werden Beckenbodenphysiotherapie, Gewichtsabnahme, Behandlung der Verstopfung und ein Pessar versucht. Ein Pessar kann auch als dauerhafte Lösung dienen, wenn eine Operation nicht gewünscht oder zu riskant ist.'
      ],
      eligibility: {
        suitable: [
          'Frauen, bei denen eine Gebärmutter- oder Stumpfsenkung deutliche Beschwerden verursacht',
          'Frauen mit Stumpfsenkung nach Gebärmutterentfernung',
          'Frauen, die kein Pessar möchten oder davon nicht profitieren',
          'Frauen, bei denen der Zugang zum Promontorium schwierig ist',
          'Frauen mit ausgeprägter Verstopfung, die diesbezüglich keine zusätzliche Belastung wünschen',
          'Ausgewählte Fälle, in denen der Erhalt der Gebärmutter bevorzugt und geeignet ist'
        ],
        notSuitable: [
          'Frauen mit Senkung in der Untersuchung, aber ohne Beschwerden — eine Operation wird nicht empfohlen',
          'Frauen mit Kinderwunsch: Eine Geburt kann die Haltbarkeit der Korrektur zunichtemachen',
          'Frauen mit unbehandelter Harnwegs- oder Scheideninfektion',
          'Ausgewählte Frauen, die nach mehreren Bauchoperationen für eine Laparoskopie ungeeignet sind',
          'Frauen mit hohem Narkoserisiko, bei denen zuerst Pessar und Physiotherapie geprüft werden',
          'Leichte Fälle ohne jeden Versuch einer Beckenbodenphysiotherapie'
        ]
      },
      technology: [
        'Laparoskopisches Instrumentarium und hochauflösende Kamera',
        'Synthetisches oder biologisches Material für die Aufhängung',
        'Objektive Messung der Senkung mit dem POP-Q-System',
        'Uroflowmetrie und Restharnmessung',
        'Prüfung auf verdeckte Inkontinenz bei zurückgeschobener Senkung',
        'Urodynamik und Zystoskopie bei Bedarf'
      ],
      surgeonExperience: {
        caseVolume: '',
        note: 'In der Senkungschirurgie entscheidet nicht allein das Anheben des Organs, sondern die richtige Feststellung, welches Kompartiment (vorne, hinten, apikal) wie weit abgesunken ist, und die vorausschauende Planung einer begleitenden Inkontinenz. Die Erfahrung von Doz. Dr. Müslüm Ergün in der rekonstruktiven Beckenchirurgie trägt diesen Gesamtplan.'
      },
      timeline: [
        { when: 'Aus der Ferne', title: 'Erstbeurteilung', body: 'Beschwerden, Geburten, Voroperationen (insbesondere Gebärmutterentfernung), Blasen- und Darmbeschwerden sowie vorhandene gynäkologische Befunde und Urodynamik werden gesichtet.' },
        { when: 'Tag 1', title: 'Untersuchung und Tests', body: 'Die gynäkologische Untersuchung bestimmt Grad und betroffenes Kompartiment. Die Senkung wird zurückgeschoben und auf verdeckte Inkontinenz geprüft. Uroflowmetrie, Restharn, Urinbefund und Kultur werden erhoben.' },
        { when: 'Tag 2', title: 'Operation', body: 'Laparoskopischer Zugang; die abgesunkene Gebärmutter oder der Stumpf wird mit dem Aufhängematerial am kräftigen Band der seitlichen Beckenwand befestigt. Bei Bedarf werden in derselben Sitzung ein Inkontinenzeingriff oder eine vordere bzw. hintere Plastik ergänzt.' },
        { when: 'Tag 3–4', title: 'Entlassung', body: 'Der Katheter wird meist am Folgetag entfernt und die Blasenentleerung geprüft. Die meisten Patientinnen gehen nach 1–2 Nächten nach Hause.' },
        { when: 'Tag 5–8', title: 'Kontrolle', body: 'Die Wunden und der Harnstrahl werden beurteilt. Der Rückflug wird nach diese Kontrolle gelegt.' },
        { when: 'Woche 6', title: 'Beurteilung des Ergebnisses', body: 'Rückkehr zu Sexualität und stärkerer Belastung wird besprochen. Die Aufhängung wird klinisch beurteilt.' }
      ],
      risks: [
        'ERNEUTE SENKUNG: Keine Korrektur garantiert ein dauerhaftes Ergebnis. Eine Senkung kann über die Jahre im selben oder in einem anderen Kompartiment (z. B. hinten) erneut auftreten',
        'NACH DER OPERATION AUFTRETENDER HARNVERLUST: Knickte die Senkung die Harnröhre ab und verdeckte einen Harnverlust, kann dieser nach der Korrektur sichtbar werden. Deshalb wird vorher auf verdeckte Inkontinenz geprüft',
        'PROBLEME DURCH DAS AUFHÄNGEMATERIAL: Schmerzen, Freiliegen durch die Scheidenwand (Erosion) oder selten die Notwendigkeit einer Entfernung. Das Material ist ein dauerhaftes Implantat; ohne dieses Gespräch sollte keine Operation geplant werden',
        'Risiken der Laparoskopie: Verletzung benachbarter Organe (Blase, Darm, Harnleiter), Blutung, selten Umstieg auf ein offenes Verfahren',
        'Harnwegsinfekt',
        'Schmerzen beim Geschlechtsverkehr (Dyspareunie)',
        'Verwachsungen im Bauchraum',
        'Risiken der Vollnarkose und Thromboembolierisiko — durch frühe Mobilisierung und gegebenenfalls Medikamente verringert'
      ],
      alternatives: [
        'Beobachtung — erste Option bei Frauen ohne oder mit nur leichten Beschwerden',
        'Beckenbodenphysiotherapie — kann Beschwerden bei leichter und mittlerer Senkung lindern',
        'Pessar — kann auch als dauerhafte Option dienen, wenn eine Operation nicht gewünscht oder ungeeignet ist',
        'Allgemeine Maßnahmen — Gewichtsabnahme, Verstopfung behandeln, weniger heben, chronischen Husten behandeln',
        'Laparoskopische Sakrokolpopexie — Aufhängung vor der Wirbelsäule, mit größerem Langzeitdatenbestand',
        'Vaginale Verfahren — sakrospinale Fixation und Eigengewebsplastiken',
        'Kolpokleisis — Verschluss der Scheide bei älteren Patientinnen ohne Wunsch nach Geschlechtsverkehr und mit Narkoserisiko'
      ],
      comparison: {
        title: 'Pektopexie und Sakrokolpopexie: was sich ändert',
        columns: ['Kriterium', 'Pektopexie', 'Sakrokolpopexie'],
        rows: [
          { label: 'Ort der Verankerung', values: ['Band der seitlichen Beckenwand', 'Knochenhaut vor der Wirbelsäule'] },
          { label: 'Nähe zu großen Gefäßen', values: ['Dieser Bereich wird nicht betreten', 'Benachbart zu den präsakralen Gefäßen'] },
          { label: 'Nähe zum Harnleiter', values: ['Weiter entfernt', 'Näher'] },
          { label: 'Verengung des Darmraums', values: ['Nicht zu erwarten', 'Möglich'] },
          { label: 'Zunahme der Verstopfung', values: ['Nicht zu erwarten', 'Berichtet'] },
          { label: 'Zugang bei Übergewicht', values: ['Relativ leichter', 'Kann schwierig sein'] },
          { label: 'Langzeitdatenbestand', values: ['Jünger; Daten begrenzter', 'Größer und etabliert'] },
          { label: 'Klinikaufenthalt', values: ['1–2 Nächte', '1–2 Nächte'] }
        ],
        note: 'Diese Tabelle ist keine Rangfolge. Die Pektopexie hat anatomische Vorteile; die Sakrokolpopexie hat eine längere und breitere Datengeschichte. Sagen Sie, welche Abwägung Ihnen wichtiger ist — darauf baut die Entscheidung auf.'
      },
      recovery: [
        { period: 'Erste 48 Stunden', body: 'Ein Gasgefühl im Bauch und in die Schulter ausstrahlende Schmerzen sind nach Laparoskopie üblich. Frühes Gehen wird empfohlen; es hilft beim Abbau des Gases und senkt das Thromboserisiko.' },
        { period: 'Woche 1', body: 'Alltägliche Tätigkeiten sind möglich. Heben, Pressen und langes Stehen werden vermieden. Verstopfung wird verhindert — Pressen ist in den ersten Wochen nach einer Korrektur das Schädlichste.' },
        { period: 'Woche 2–4', body: 'Die Rückkehr zur Büroarbeit fällt meist hierher. Spaziergänge sind frei; Laufen, Gewichte und Bauchmuskeltraining warten.' },
        { period: 'Woche 6', body: 'Die Rückkehr zur Sexualität wird meist nach diesem Zeitpunkt und nach der Kontrolle besprochen.' },
        { period: 'Monat 3', body: 'Die Veränderung des Vorwölbungs- und Druckgefühls lässt sich klar beurteilen.' },
        { period: 'Langfristig', body: 'Gewichtskontrolle, Vermeidung von Verstopfung und Beckenbodentraining helfen, das Ergebnis zu erhalten. Über die Jahre kann in einem anderen Kompartiment eine neue Senkung entstehen; regelmäßige Kontrollen sind ratsam.' }
      ],
      price: {
        from: 0,
        to: 0,
        currency: 'EUR',
        disclaimer:
          'Der Betrag hängt davon ab, ob Begleiteingriffe (Inkontinenzschlinge, vordere bzw. hintere Plastik) erfolgen, vom verwendeten Material und von der Aufenthaltsdauer. Ein detailliertes schriftliches Angebot folgt nach Sichtung Ihrer Befunde.'
      },
      packageIncludes: [
        'Untersuchung und urogynäkologische Beurteilung',
        'POP-Q-Messung und Prüfung auf verdeckte Inkontinenz',
        'Uroflowmetrie und Restharnmessung',
        'Blut- und Urinuntersuchungen, Urinkultur',
        'Narkose und Operationssaal',
        'Laparoskopischer Verbrauchsbedarf und Aufhängematerial',
        'Klinikaufenthalt',
        'Katheterentfernung und Kontrolle der Blasenentleerung',
        'Kontrolluntersuchung vor der Rückreise',
        'Transfers Flughafen–Klinik–Hotel',
        'Unterkunft (Patientin und eine Begleitperson)',
        'Medizinischer Dolmetscher und Patientenkoordination',
        'Fernnachsorge nach der Rückkehr'
      ],
      faqs: [
        { q: 'Ich habe eine Senkung, aber keine Beschwerden — soll ich operiert werden?', a: 'Nein. Frauen mit Senkungsbefund ohne Leidensdruck werden nicht operiert. Die Entscheidung richtet sich danach, wie sehr Ihre Beschwerden den Alltag einschränken.' },
        { q: 'Wird meine Gebärmutter entfernt?', a: 'In geeigneten Fällen kann die Pektopexie unter Erhalt der Gebärmutter erfolgen. Ob sie entfernt wird, entscheiden wir gemeinsam nach Art der Senkung, einem etwaigen gynäkologischen Zusatzbefund und Ihrer Präferenz.' },
        { q: 'Was ist besser, Pektopexie oder Sakrokolpopexie?', a: 'Die Frage lautet nicht „was ist besser", sondern „welche Abwägung passt zu Ihnen". Die Pektopexie meidet Gefäße und Darm vor der Wirbelsäule und verschlechtert die Verstopfung voraussichtlich nicht; die Sakrokolpopexie hat eine längere und breitere Datengeschichte. Eine Beratung, die nicht beide Seiten nennt, ist unvollständig.' },
        { q: 'Werde ich nach der Operation Urin verlieren?', a: 'Das ist möglich, wenn die Senkung die Harnröhre abknickte und den Harnverlust verdeckte. Deshalb wird vorher bei zurückgeschobener Senkung auf verdeckte Inkontinenz geprüft; bei Bedarf wird eine Schlinge in derselben Sitzung oder später geplant. Ein Plan ohne diesen Schritt ist unvollständig.' },
        { q: 'Ist das verwendete Material sicher?', a: 'Das Aufhängematerial ist ein dauerhaftes Implantat. Es kann selten Schmerzen, ein Freiliegen durch die Scheidenwand (Erosion) oder die Notwendigkeit einer Entfernung verursachen. Wird darüber nicht gesprochen, holen Sie eine Zweitmeinung ein.' },
        { q: 'Kann die Senkung wiederkommen?', a: 'Ein Rezidiv ist möglich; kein Verfahren garantiert ein dauerhaftes Ergebnis. Gewichtszunahme, Verstopfung, chronischer Husten und Heben erhöhen diese Wahrscheinlichkeit. Diese Faktoren nach der Korrektur zu steuern, beeinflusst die Haltbarkeit unmittelbar.' },
        { q: 'Beeinflusst es mein Sexualleben?', a: 'Bei den meisten Frauen positiv, weil das Vorwölbungsgefühl verschwindet. Die Rückkehr wird in der Regel nach sechs Wochen und nach der Kontrolle besprochen. Melden Sie Schmerzen beim Verkehr unverzüglich.' },
        { q: 'Soll ich ein Pessar versuchen?', a: 'Bei leichter und mittlerer Senkung sowie bei Frauen ohne Operationswunsch oder mit Narkoserisiko ist ein Pessar eine legitime Option und auch dauerhaft nutzbar. Es erfordert regelmäßige Kontrolle und Reinigung.' },
        { q: 'Wann kann ich wieder arbeiten?', a: 'Bei Bürotätigkeit meist nach 2–4 Wochen. Bei schwerer körperlicher Arbeit 6 Wochen. Frühes Pressen und Heben belasten die Korrektur unmittelbar.' },
        { q: 'Wie lange muss ich in der Türkei bleiben?', a: 'Meist 7–10 Tage. Da die Kontrolle hier erfolgt, legen Sie den Rückflug auf die Zeit danach.' },
        { q: 'Welche Unterlagen soll ich senden?', a: 'Gynäkologische Untersuchungsbefunde und eine etwaige POP-Q-Messung, Urodynamik, Uroflowmetrie und Restharn, Berichte früherer Operationen (besonders Gebärmutterentfernung), einen Urinbefund und Ihre Medikamentenliste.' }
      ],
      sources: [
        {
          label: 'EAU-Leitlinie zu nicht-neurogenen LUTS der Frau — Europäische Gesellschaft für Urologie',
          url: 'https://uroweb.org/guidelines/non-neurogenic-female-luts'
        }
      ]
    },
    fr: {
      title: 'Pectopexie (chirurgie du prolapsus pelvien)',
      summary:
        'Réparation cœlioscopique d’une descente de l’utérus ou du fond vaginal dans laquelle la suspension est fixée au ligament solide de la paroi latérale du pelvis (ligament ilio-pectiné).',
      metaTitle: 'Pectopexie : une alternative à la sacrocolpopexie dans le prolapsus',
      metaDescription:
        'Cure de prolapsus par pectopexie : à qui elle convient, différence avec la sacrocolpopexie, intérêt vis-à-vis de l’intestin et des gros vaisseaux, risques et convalescence.',
      quickFacts: {
        duration: '60 à 120 minutes',
        anesthesia: 'Anesthésie générale',
        hospitalStay: '1 à 2 nuits',
        stayInTurkey: '7 à 10 jours',
        catheter: '1 jour',
        returnToWork: '2 à 4 semaines (bureau), 6 semaines (travail lourd)',
        flightClearance: 'Après la consultation de contrôle'
      },
      definition: [
        'Le prolapsus pelvien est la descente de l’utérus, de la vessie, de l’intestin ou — chez les femmes hystérectomisées — du fond vaginal, en raison de l’affaiblissement des tissus de soutien. Les patientes le décrivent souvent comme « une boule en bas », « comme si j’étais assise sur une balle », ou le besoin de « repousser pour pouvoir me vider ».',
        'LA PRÉSENCE D’UN PROLAPSUS N’EST PAS À ELLE SEULE UNE INDICATION OPÉRATOIRE. Certaines femmes présentent un degré de prolapsus à l’examen sans aucun symptôme, et elles ne sont pas opérées. La décision dépend de la gêne dans la vie quotidienne, du retentissement sur la vidange vésicale et intestinale, et des attentes de la patiente.',
        'La pectopexie est une technique cœlioscopique dans laquelle l’utérus ou le fond vaginal descendu est suspendu au LIGAMENT SOLIDE DE LA PAROI LATÉRALE DU PELVIS (ligament ilio-pectiné, ou de Cooper). Dans la sacrocolpopexie classique, la suspension est fixée au périoste situé devant le rachis (promontoire).',
        'LA PORTÉE PRATIQUE DE CETTE DIFFÉRENCE : la région située devant le rachis est un espace étroit bordé par de gros vaisseaux (vaisseaux présacrés), l’uretère et la dernière portion du côlon. La pectopexie n’y pénètre pas et évite donc les problèmes liés à ces rapports. Elle ne rétrécit pas non plus l’espace de passage intestinal : une aggravation de la constipation après l’intervention n’est pas attendue. Chez les femmes en surpoids et lorsque l’accès au promontoire est difficile, elle devient une option privilégiée.',
        'UNE LIMITE HONNÊTE : la pectopexie est plus récente que la sacrocolpopexie et le corpus de données comparatives à long terme est moins fourni. Il faut le savoir pour décider. Si une seule technique vous est proposée, vous êtes en droit de demander pourquoi les autres ne vous conviennent pas.',
        'PROLAPSUS ET INCONTINENCE NE SONT PAS LA MÊME CHOSE. Chez certaines femmes, le prolapsus plicature l’urètre et masque des fuites ; une fois corrigé, les fuites apparaissent. Le bilan préopératoire comprend donc la réduction du prolapsus et la recherche d’une incontinence masquée, afin de prévoir une bandelette dans le même temps ou plus tard. Sauter cette étape, c’est s’exposer au « depuis l’opération, je fuis ».',
        'LA CHIRURGIE N’EST PAS LA PREMIÈRE ÉTAPE. Dans les prolapsus légers et modérés, on essaie la kinésithérapie périnéale, la perte de poids, le traitement de la constipation et le pessaire. Le pessaire peut aussi constituer une solution durable chez les femmes qui refusent la chirurgie ou présentent un risque anesthésique.'
      ],
      eligibility: {
        suitable: [
          'Femmes dont le prolapsus utérin ou du fond vaginal entraîne une gêne nette',
          'Femmes ayant développé un prolapsus du fond vaginal après hystérectomie',
          'Femmes ne souhaitant pas de pessaire ou n’en tirant pas bénéfice',
          'Femmes chez qui l’accès au promontoire est difficile',
          'Femmes présentant une constipation marquée et ne souhaitant pas l’aggraver',
          'Cas sélectionnés où la conservation de l’utérus est préférée et possible'
        ],
        notSuitable: [
          'Femmes avec prolapsus à l’examen mais sans symptôme — la chirurgie n’est pas proposée',
          'Femmes avec projet de grossesse : un accouchement peut compromettre la durabilité',
          'Femmes présentant une infection urinaire ou vaginale non traitée',
          'Certaines femmes non candidates à la cœlioscopie après de multiples chirurgies abdominales',
          'Femmes à haut risque anesthésique, chez qui pessaire et kinésithérapie sont évalués d’abord',
          'Formes légères sans aucun essai de kinésithérapie périnéale'
        ]
      },
      technology: [
        'Matériel de cœlioscopie et caméra haute définition',
        'Matériel synthétique ou biologique pour la suspension',
        'Mesure objective du prolapsus selon le système POP-Q',
        'Débitmétrie et mesure du résidu post-mictionnel',
        'Recherche d’incontinence masquée après réduction du prolapsus',
        'Bilan urodynamique et cystoscopie si nécessaire'
      ],
      surgeonExperience: {
        caseVolume: '',
        note: 'En chirurgie du prolapsus, le résultat ne tient pas seulement à la suspension de l’organe, mais à l’identification correcte du compartiment atteint (antérieur, postérieur, apical) et à l’anticipation d’une incontinence associée. L’expérience du Dr Müslüm Ergün en chirurgie pelvienne reconstructrice fonde ce plan d’ensemble.'
      },
      timeline: [
        { when: 'À distance', title: 'Évaluation initiale', body: 'Vos symptômes, vos accouchements, vos interventions antérieures (en particulier une hystérectomie), vos troubles urinaires et intestinaux, les comptes rendus gynécologiques et un éventuel bilan urodynamique sont étudiés.' },
        { when: 'Jour 1', title: 'Examen et bilan', body: 'L’examen gynécologique précise le degré du prolapsus et le compartiment concerné. Le prolapsus est réduit et l’on recherche une incontinence masquée. Débitmétrie, résidu, ECBU sont réalisés.' },
        { when: 'Jour 2', title: 'Intervention', body: 'Abord cœlioscopique ; l’utérus ou le fond vaginal descendu est fixé, à l’aide du matériel de suspension, au ligament solide de la paroi latérale du pelvis. Si nécessaire, une bandelette ou une réparation antérieure/postérieure est ajoutée dans le même temps.' },
        { when: 'Jours 3–4', title: 'Sortie', body: 'La sonde est généralement retirée le lendemain et la miction vérifiée. La plupart des patientes rentrent après 1 à 2 nuits.' },
        { when: 'Jours 5–8', title: 'Contrôle', body: 'Les cicatrices et le jet urinaire sont évalués. Le vol retour est prévu après ce contrôle.' },
        { when: 'Semaine 6', title: 'Évaluation du résultat', body: 'La reprise de la vie sexuelle et des efforts est discutée. La suspension est évaluée à l’examen.' }
      ],
      risks: [
        'RÉCIDIVE DU PROLAPSUS : aucune réparation ne garantit un résultat définitif. Un prolapsus peut réapparaître avec les années dans le même compartiment ou dans un autre (paroi postérieure par exemple)',
        'INCONTINENCE APPARAISSANT APRÈS L’INTERVENTION : si le prolapsus plicaturait l’urètre et masquait des fuites, celles-ci peuvent devenir évidentes après correction. D’où la recherche préalable d’une incontinence masquée',
        'PROBLÈMES LIÉS AU MATÉRIEL DE SUSPENSION : douleurs, exposition à travers la paroi vaginale (érosion) ou, rarement, nécessité de retrait. Ce matériel est un implant définitif et aucune intervention ne doit être programmée sans en parler',
        'Risques de la cœlioscopie : plaie d’un organe voisin (vessie, intestin, uretère), saignement, rarement conversion en chirurgie ouverte',
        'Infection urinaire',
        'Douleurs lors des rapports (dyspareunie)',
        'Formation d’adhérences intra-abdominales',
        'Risques de l’anesthésie générale et risque thromboembolique — réduits par la mobilisation précoce et, si besoin, un traitement'
      ],
      alternatives: [
        'Surveillance — première option chez les femmes sans symptôme ou peu gênées',
        'Kinésithérapie périnéale — peut réduire la gêne dans les prolapsus légers et modérés',
        'Pessaire — peut aussi constituer une option durable chez les femmes qui refusent ou ne peuvent pas être opérées',
        'Mesures hygiéno-diététiques — perte de poids, traitement de la constipation, limitation du port de charges, traitement d’une toux chronique',
        'Sacrocolpopexie cœlioscopique — suspension devant le rachis, avec davantage de données à long terme',
        'Réparations par voie vaginale — fixation sacro-épineuse et plasties par tissus autologues',
        'Colpocléisis — fermeture du vagin chez les patientes âgées sans projet de rapports et à risque anesthésique'
      ],
      comparison: {
        title: 'Pectopexie et sacrocolpopexie : ce qui change',
        columns: ['Critère', 'Pectopexie', 'Sacrocolpopexie'],
        rows: [
          { label: 'Point de fixation', values: ['Ligament de la paroi latérale du pelvis', 'Périoste devant le rachis'] },
          { label: 'Proximité des gros vaisseaux', values: ['Cette région n’est pas abordée', 'Au contact des vaisseaux présacrés'] },
          { label: 'Proximité de l’uretère', values: ['Plus éloignée', 'Plus proche'] },
          { label: 'Rétrécissement de l’espace intestinal', values: ['Non attendu', 'Possible'] },
          { label: 'Aggravation de la constipation', values: ['Non attendue', 'Rapportée'] },
          { label: 'Accès chez la patiente en surpoids', values: ['Relativement plus simple', 'Peut être difficile'] },
          { label: 'Données à long terme', values: ['Plus récente ; données plus limitées', 'Plus larges et établies'] },
          { label: 'Hospitalisation', values: ['1 à 2 nuits', '1 à 2 nuits'] }
        ],
        note: 'Ce tableau n’est pas un classement. La pectopexie présente des avantages anatomiques ; la sacrocolpopexie dispose d’un historique de données plus long et plus large. Dites-nous quel compromis compte le plus pour vous — la décision se construit là-dessus.'
      },
      recovery: [
        { period: '48 premières heures', body: 'Une sensation de gaz dans l’abdomen et des douleurs projetées à l’épaule sont habituelles après cœlioscopie. La marche précoce est encouragée : elle aide à évacuer le gaz et réduit le risque de caillots.' },
        { period: 'Semaine 1', body: 'Les activités quotidiennes sont possibles. Port de charges, efforts de poussée et station debout prolongée sont évités. On prévient la constipation — pousser est ce qui nuit le plus aux premières semaines d’une réparation.' },
        { period: 'Semaines 2–4', body: 'La reprise du travail de bureau se situe généralement là. La marche est libre ; course, charges et abdominaux attendent.' },
        { period: 'Semaine 6', body: 'La reprise de la vie sexuelle se discute généralement après ce délai et après la consultation de contrôle.' },
        { period: 'Mois 3', body: 'L’évolution de la sensation de boule et de pesanteur peut être jugée clairement.' },
        { period: 'Long terme', body: 'Contrôle du poids, prévention de la constipation et rééducation périnéale aident à préserver le résultat. Un nouveau prolapsus peut apparaître dans un autre compartiment avec les années ; un suivi régulier est conseillé.' }
      ],
      price: {
        from: 0,
        to: 0,
        currency: 'EUR',
        disclaimer:
          'Le montant dépend des gestes associés éventuels (bandelette d’incontinence, réparation antérieure ou postérieure), du matériel utilisé et de la durée d’hospitalisation. Un devis écrit détaillé est remis après examen de vos documents.'
      },
      packageIncludes: [
        'Consultation et évaluation en urologie féminine',
        'Mesure POP-Q du prolapsus et recherche d’incontinence masquée',
        'Débitmétrie et mesure du résidu post-mictionnel',
        'Bilans sanguins et urinaires, ECBU',
        'Anesthésie et bloc opératoire',
        'Consommables de cœlioscopie et matériel de suspension',
        'Hospitalisation',
        'Retrait de la sonde et vérification de la vidange vésicale',
        'Consultation de contrôle avant le retour',
        'Transferts aéroport–hôpital–hôtel',
        'Hébergement (patiente et un accompagnant)',
        'Interprète médical et coordinateur patient',
        'Suivi à distance après le retour'
      ],
      faqs: [
        { q: 'J’ai un prolapsus mais pas de symptôme : faut-il m’opérer ?', a: 'Non. Les femmes chez qui un prolapsus est constaté sans gêne ne sont pas opérées. La décision dépend du retentissement de vos symptômes sur votre vie quotidienne.' },
        { q: 'Mon utérus sera-t-il retiré ?', a: 'Dans les cas adaptés, la pectopexie peut être réalisée en conservant l’utérus. Le retirer ou non se décide ensemble, selon le type de prolapsus, un éventuel problème gynécologique associé et votre préférence.' },
        { q: 'Pectopexie ou sacrocolpopexie, laquelle est meilleure ?', a: 'La question n’est pas « laquelle est meilleure » mais « quel compromis vous convient ». La pectopexie évite les vaisseaux et l’intestin devant le rachis et ne devrait pas aggraver la constipation ; la sacrocolpopexie dispose d’un historique de données plus long. Une information qui n’expose pas les deux côtés est incomplète.' },
        { q: 'Vais-je commencer à fuir après l’intervention ?', a: 'C’est possible si le prolapsus plicaturait l’urètre et masquait des fuites. C’est pourquoi, avant l’intervention, le prolapsus est réduit et l’on recherche une incontinence masquée ; une bandelette est alors prévue dans le même temps ou plus tard. Un plan qui saute cette étape est incomplet.' },
        { q: 'Le matériel utilisé est-il sûr ?', a: 'Le matériel de suspension est un implant définitif. Il peut rarement provoquer douleurs, exposition à travers la paroi vaginale (érosion) ou nécessité de retrait. Si un chirurgien n’aborde pas ces risques, demandez un second avis.' },
        { q: 'Le prolapsus peut-il récidiver ?', a: 'La récidive est possible et aucune technique ne garantit un résultat définitif. Prise de poids, constipation, toux chronique et port de charges augmentent ce risque. Maîtriser ces facteurs après la réparation influence directement sa durabilité.' },
        { q: 'Cela affectera-t-il ma vie sexuelle ?', a: 'Chez la plupart des femmes, l’effet est positif car la sensation de boule disparaît. La reprise se discute généralement après six semaines et après le contrôle. Signalez sans délai toute douleur lors des rapports.' },
        { q: 'Dois-je essayer un pessaire ?', a: 'Dans les prolapsus légers et modérés, et chez les femmes qui refusent la chirurgie ou présentent un risque anesthésique, le pessaire est une option légitime, utilisable au long cours. Il demande un suivi et un entretien réguliers.' },
        { q: 'Quand puis-je reprendre le travail ?', a: 'Généralement 2 à 4 semaines pour un travail de bureau. Pour un travail avec port de charges, 6 semaines. Pousser et porter tôt sollicite directement la réparation.' },
        { q: 'Combien de temps rester en Türkiye ?', a: 'Généralement 7 à 10 jours. Le contrôle étant réalisé ici, prévoyez le vol retour après cette consultation.' },
        { q: 'Quels documents envoyer ?', a: 'Les comptes rendus d’examen gynécologique et une éventuelle mesure POP-Q, le bilan urodynamique, la débitmétrie et le résidu, les comptes rendus d’interventions antérieures (surtout une hystérectomie), un ECBU et la liste de vos traitements.' }
      ],
      sources: [
        {
          label: 'Recommandations EAU sur les troubles mictionnels non neurogènes de la femme — Association européenne d’urologie',
          url: 'https://uroweb.org/guidelines/non-neurogenic-female-luts'
        }
      ]
    },
    ru: {
      title: 'Пектопексия (операция при опущении тазовых органов)',
      summary:
        'Лапароскопическая коррекция опущения матки или купола влагалища, при которой подвешивание фиксируют к прочной связке боковой стенки таза (подвздошно-гребенчатой связке).',
      metaTitle: 'Пектопексия: альтернатива сакрокольпопексии при опущении',
      metaDescription:
        'Коррекция опущения методом пектопексии: кому подходит, чем отличается от сакрокольпопексии, преимущество в отношении кишечника и крупных сосудов, риски и восстановление.',
      quickFacts: {
        duration: '60–120 минут',
        anesthesia: 'Общая анестезия',
        hospitalStay: '1–2 ночи',
        stayInTurkey: '7–10 дней',
        catheter: '1 день',
        returnToWork: '2–4 недели (сидячая работа), 6 недель (тяжёлая)',
        flightClearance: 'После контрольного осмотра'
      },
      definition: [
        'Опущение тазовых органов — это смещение вниз матки, мочевого пузыря, кишки или, у женщин с удалённой маткой, купола влагалища из-за ослабления поддерживающих тканей. Пациентки обычно описывают это как «выпячивание внизу», «будто сижу на мяче» или необходимость «вправить рукой, чтобы опорожниться».',
        'САМО НАЛИЧИЕ ОПУЩЕНИЯ ЕЩЁ НЕ ПОВОД ОПЕРИРОВАТЬ. Есть женщины, у которых при осмотре выявляется некоторое опущение, но жалоб нет; их не оперируют. Решение зависит от того, насколько жалобы ограничивают повседневную жизнь, влияют ли они на опорожнение мочевого пузыря и кишечника, и от ожиданий самой женщины.',
        'Пектопексия — лапароскопический метод, при котором опустившуюся матку или купол влагалища подвешивают, фиксируя материал к ПРОЧНОЙ СВЯЗКЕ БОКОВОЙ СТЕНКИ ТАЗА (подвздошно-гребенчатой связке, связке Купера). При классической сакрокольпопексии фиксация идёт к надкостнице перед позвоночником (мысу крестца).',
        'ПРАКТИЧЕСКИЙ СМЫСЛ ЭТОГО РАЗЛИЧИЯ ТАКОВ: область перед позвоночником — узкое пространство, рядом с которым проходят крупные сосуды (пресакральные), мочеточник и конечный отдел толстой кишки. Пектопексия в эту зону не входит и потому избегает связанных с ней проблем. Кроме того, она не сужает пространство, через которое проходит кишка, поэтому усиления запоров после операции не ожидается. У женщин с избыточным весом и при трудном доступе к предпозвоночной области она становится предпочтительным вариантом.',
        'ЧЕСТНОЕ ОГРАНИЧЕНИЕ: пектопексия моложе сакрокольпопексии, и массив сравнительных отдалённых данных не так велик. Это нужно знать, принимая решение. Если вам предлагают только один метод, вы вправе спросить, почему остальные вам не подходят.',
        'ОПУЩЕНИЕ И НЕДЕРЖАНИЕ — НЕ ОДНО И ТО ЖЕ. У части женщин опущение перегибает уретру и маскирует подтекание; после коррекции подтекание проявляется. Поэтому предоперационная оценка включает вправление опущения и пробу на скрытое недержание, чтобы при необходимости запланировать петлю в ту же операцию или позже. Пропуск этого шага приводит к словам «после операции я начала подтекать».',
        'ОПЕРАЦИЯ — НЕ ПЕРВЫЙ ШАГ. При лёгком и умеренном опущении пробуют физиотерапию тазового дна, снижение веса, устранение запоров и пессарий. Пессарий может служить и долговременным решением для женщин, не желающих операции или имеющих анестезиологический риск.'
      ],
      eligibility: {
        suitable: [
          'Женщины, у которых опущение матки или купола влагалища вызывает явные жалобы',
          'Женщины с опущением купола после удаления матки',
          'Женщины, не желающие использовать пессарий или не получающие от него пользы',
          'Женщины, у которых доступ к предпозвоночной области затруднён',
          'Женщины с выраженными запорами, не желающие дополнительной нагрузки в этом отношении',
          'Отдельные случаи, когда сохранение матки предпочтительно и возможно'
        ],
        notSuitable: [
          'Женщины с опущением при осмотре, но без жалоб — операция не предлагается',
          'Женщины, планирующие беременность: роды могут свести на нет прочность коррекции',
          'Женщины с нелеченой инфекцией мочевых путей или влагалища',
          'Отдельные женщины, которым лапароскопия не подходит после множества операций на животе',
          'Женщины с высоким анестезиологическим риском — сначала рассматривают пессарий и физиотерапию',
          'Лёгкие случаи, в которых физиотерапия тазового дна вообще не пробовалась'
        ]
      },
      technology: [
        'Лапароскопический набор и камера высокого разрешения',
        'Синтетический или биологический материал для подвешивания',
        'Объективное измерение опущения по системе POP-Q',
        'Урофлоуметрия и измерение остаточной мочи',
        'Проба на скрытое недержание при вправленном опущении',
        'Уродинамика и цистоскопия при необходимости'
      ],
      surgeonExperience: {
        caseVolume: '',
        note: 'В хирургии опущения результат определяется не просто подвешиванием органа, а правильным определением того, какой компартмент (передний, задний, апикальный) и насколько опустился, и заблаговременным планированием сопутствующего недержания. Опыт доцента, д-ра Мюслюма Эргюна в реконструктивной тазовой хирургии лежит в основе такого целостного плана.'
      },
      timeline: [
        { when: 'Дистанционно', title: 'Предварительная оценка', body: 'Изучают жалобы, акушерский анамнез, перенесённые операции (особенно удаление матки), мочевые и кишечные симптомы, записи гинекологического осмотра и результаты уродинамики, если они есть.' },
        { when: '1-й день', title: 'Осмотр и обследование', body: 'Гинекологический осмотр определяет степень опущения и затронутый компартмент. Опущение вправляют и проверяют на скрытое недержание. Выполняют урофлоуметрию, измерение остаточной мочи, анализ и посев мочи.' },
        { when: '2-й день', title: 'Операция', body: 'Лапароскопический доступ; опустившуюся матку или купол влагалища фиксируют материалом к прочной связке боковой стенки таза. При необходимости в ту же операцию добавляют вмешательство по поводу недержания или пластику передней/задней стенки.' },
        { when: '3–4-й день', title: 'Выписка', body: 'Катетер обычно удаляют на следующий день и проверяют мочеиспускание. Большинство пациенток уходят домой через 1–2 ночи.' },
        { when: '5–8-й день', title: 'Контроль', body: 'Оценивают раны и струю мочи. Обратный рейс планируют после этого контроля.' },
        { when: '6-я неделя', title: 'Оценка результата', body: 'Обсуждают возвращение к половой жизни и к нагрузкам. Состояние подвешивания оценивают при осмотре.' }
      ],
      risks: [
        'РЕЦИДИВ ОПУЩЕНИЯ: ни одна коррекция не гарантирует стойкого результата. Опущение может вернуться через годы в том же или другом компартменте (например, в задней стенке)',
        'НЕДЕРЖАНИЕ, ПОЯВИВШЕЕСЯ ПОСЛЕ ОПЕРАЦИИ: если опущение перегибало уретру и маскировало подтекание, после коррекции оно может стать явным. Поэтому заранее проверяют скрытое недержание',
        'ПРОБЛЕМЫ, СВЯЗАННЫЕ С МАТЕРИАЛОМ: боль, обнажение через стенку влагалища (эрозия) или редко потребность в удалении. Материал — постоянный имплант, и операцию нельзя планировать без обсуждения этого',
        'Риски лапароскопии: повреждение соседних органов (пузыря, кишки, мочеточника), кровотечение, редко переход на открытую операцию',
        'Инфекция мочевых путей',
        'Боль при половом акте (диспареуния)',
        'Образование спаек в брюшной полости',
        'Риски общей анестезии и тромбоэмболии — снижаются ранней активизацией и, при показаниях, препаратами'
      ],
      alternatives: [
        'Наблюдение — первый вариант у женщин без жалоб или с лёгкими жалобами',
        'Физиотерапия тазового дна — может уменьшить жалобы при лёгком и умеренном опущении',
        'Пессарий — может служить и долговременным вариантом для женщин, не желающих или не подходящих для операции',
        'Коррекция образа жизни — снижение веса, устранение запоров, уменьшение подъёма тяжестей, лечение хронического кашля',
        'Лапароскопическая сакрокольпопексия — подвешивание к области перед позвоночником, с большим массивом отдалённых данных',
        'Влагалищные операции — сакроспинальная фиксация и пластика собственными тканями',
        'Кольпоклейзис — закрытие влагалища у пожилых пациенток, не планирующих половую жизнь и имеющих анестезиологический риск'
      ],
      comparison: {
        title: 'Пектопексия и сакрокольпопексия: что меняется',
        columns: ['Критерий', 'Пектопексия', 'Сакрокольпопексия'],
        rows: [
          { label: 'Точка фиксации', values: ['Связка боковой стенки таза', 'Надкостница перед позвоночником'] },
          { label: 'Близость крупных сосудов', values: ['В эту зону не входят', 'Соседство с пресакральными сосудами'] },
          { label: 'Близость мочеточника', values: ['Дальше', 'Ближе'] },
          { label: 'Сужение пространства для кишки', values: ['Не ожидается', 'Возможно'] },
          { label: 'Усиление запоров', values: ['Не ожидается', 'Сообщалось'] },
          { label: 'Доступ при избыточном весе', values: ['Относительно легче', 'Может быть трудным'] },
          { label: 'Массив отдалённых данных', values: ['Метод новее; данных меньше', 'Больше и устоявшийся'] },
          { label: 'Пребывание в стационаре', values: ['1–2 ночи', '1–2 ночи'] }
        ],
        note: 'Эта таблица не рейтинг. У пектопексии есть анатомические преимущества; у сакрокольпопексии — более длительная и широкая история данных. Скажите, какой компромисс для вас важнее, — на этом и строится решение.'
      },
      recovery: [
        { period: 'Первые 48 часов', body: 'Ощущение газа в животе и отдающая в плечо боль обычны после лапароскопии. Поощряется ранняя ходьба: она помогает газу рассосаться и снижает риск тромбов.' },
        { period: '1-я неделя', body: 'Обычные бытовые дела возможны. Подъём тяжестей, натуживание и долгое стояние исключают. Запоры предупреждают — натуживание в первые недели после коррекции вредит больше всего.' },
        { period: '2–4-я неделя', body: 'Возвращение к сидячей работе обычно приходится сюда. Ходьба свободна; бег, веса и упражнения на пресс откладывают.' },
        { period: '6-я неделя', body: 'Возвращение к половой жизни обычно обсуждают после этого срока и после контрольного осмотра.' },
        { period: '3-й месяц', body: 'Изменение ощущения выпячивания и давления можно оценить отчётливо.' },
        { period: 'Долгосрочно', body: 'Контроль веса, предупреждение запоров и упражнения для тазового дна помогают сохранить результат. С годами в другом компартменте может появиться новое опущение; рекомендуется регулярный контроль.' }
      ],
      price: {
        from: 0,
        to: 0,
        currency: 'EUR',
        disclaimer:
          'Сумма зависит от того, выполняются ли сопутствующие вмешательства (петля при недержании, пластика передней или задней стенки), от используемого материала и от срока пребывания в стационаре. Постатейное письменное предложение даётся после изучения ваших документов.'
      },
      packageIncludes: [
        'Осмотр и оценка в женской урологии',
        'Измерение опущения по POP-Q и проба на скрытое недержание',
        'Урофлоуметрия и измерение остаточной мочи',
        'Анализы крови и мочи, посев мочи',
        'Анестезия и операционная',
        'Расходные материалы для лапароскопии и материал для подвешивания',
        'Пребывание в стационаре',
        'Удаление катетера и проверка опорожнения пузыря',
        'Контрольный осмотр перед возвращением домой',
        'Трансферы аэропорт — больница — отель',
        'Проживание (пациентка и один сопровождающий)',
        'Медицинский переводчик и координатор пациента',
        'Дистанционное наблюдение после возвращения'
      ],
      faqs: [
        { q: 'У меня опущение, но жалоб нет — нужно ли оперироваться?', a: 'Нет. Женщин, у которых опущение выявлено при осмотре, но которых оно не беспокоит, не оперируют. Решение зависит от того, насколько жалобы ограничивают вашу повседневную жизнь.' },
        { q: 'Матку удалят?', a: 'В подходящих случаях пектопексию можно выполнить с сохранением матки. Удалять ли её, решают вместе — по типу опущения, по наличию сопутствующей гинекологической проблемы и по вашему предпочтению.' },
        { q: 'Что лучше — пектопексия или сакрокольпопексия?', a: 'Вопрос не «что лучше», а «какой компромисс вам подходит». Пектопексия избегает сосудов и кишки перед позвоночником и не должна усиливать запоры; у сакрокольпопексии более длительная и широкая история данных. Консультация, не называющая обе стороны, неполна.' },
        { q: 'Начну ли я подтекать после операции?', a: 'Это возможно, если опущение перегибало уретру и маскировало подтекание. Поэтому до операции опущение вправляют и проверяют скрытое недержание; при необходимости петлю планируют в ту же операцию или позже. План без этого шага неполон.' },
        { q: 'Безопасен ли используемый материал?', a: 'Материал для подвешивания — постоянный имплант. Он редко может вызвать боль, обнажение через стенку влагалища (эрозию) или потребность в удалении. Если врач не обсуждает эти риски, запросите второе мнение.' },
        { q: 'Может ли опущение вернуться?', a: 'Рецидив возможен, и ни один метод не гарантирует стойкого результата. Набор веса, запоры, хронический кашель и подъём тяжестей повышают эту вероятность. Управление этими факторами после коррекции прямо влияет на её долговечность.' },
        { q: 'Повлияет ли это на половую жизнь?', a: 'У большинства женщин эффект положительный, поскольку ощущение выпячивания уходит. Возвращение обычно обсуждают после шести недель и после контроля. О боли при близости сообщайте сразу.' },
        { q: 'Стоит ли попробовать пессарий?', a: 'При лёгком и умеренном опущении, а также у женщин, не желающих операции или имеющих анестезиологический риск, пессарий — правомерный вариант, пригодный и для длительного использования. Он требует регулярного контроля и ухода.' },
        { q: 'Когда можно вернуться к работе?', a: 'Обычно через 2–4 недели при сидячей работе. При работе с подъёмом тяжестей — 6 недель. Раннее натуживание и подъём тяжестей напрямую нагружают коррекцию.' },
        { q: 'Сколько нужно пробыть в Турции?', a: 'Обычно 7–10 дней. Поскольку контроль проводится здесь, планируйте обратный рейс после этого приёма.' },
        { q: 'Какие документы прислать?', a: 'Записи гинекологического осмотра и измерение POP-Q, если оно есть, уродинамику, урофлоуметрию и остаточную мочу, протоколы прежних операций (особенно удаления матки), анализ мочи и список принимаемых препаратов.' }
      ],
      sources: [
        {
          label: 'Рекомендации EAU по ненейрогенным расстройствам мочеиспускания у женщин — Европейская ассоциация урологии',
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
