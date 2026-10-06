import type { Treatment } from '../types';

/**
 * TUMT (TRANSÜRETRAL MİKRODALGA TERMOTERAPİSİ) — yeni sayfa (Görev 7).
 *
 * reviewStatus: 'reviewed' — hekim onayı alındı (Dr. Ergün, 6 Ekim 2026).
 * Kaynak: EAU non-neurogenic male LUTS kılavuzu.
 * Başarı oranı/yüzde YAZILMAMIŞTIR. Yöntemin sınırları (gecikmeli etki,
 * yeniden girişim olasılığı, patoloji incelemesinin olmaması) açıkça yazılıdır.
 */
export const tumt: Treatment = {
  slug: 'tumt',
  procedure: { type: 'TherapeuticProcedure', bodyLocation: 'Prostate' },
  parent: 'bph-prostat-buyumesi',
  icon: 'prostate',
  reviewStatus: 'reviewed',

  lastReviewed: '2026-10-06',
  offersConsultation: false,
  i18n: {
    tr: {
      title: 'TUMT (Transüretral Mikrodalga Termoterapisi)',
      summary:
        'İyi huylu prostat büyümesinde, idrar kanalından verilen mikrodalga enerjisiyle prostat dokusunun ısıtılarak küçültüldüğü, ameliyathane ve genel anestezi gerektirmeyen seçenek.',
      metaTitle: 'TUMT Nedir? Prostatta Mikrodalga ile Isı Tedavisi',
      metaDescription:
        'TUMT ile prostat tedavisi: kimlere uygun, nasıl yapılır, etkisi ne zaman başlar, TURP ve ThuLEP ile farkı, riskler ve dürüst beklentiler.',
      quickFacts: {
        duration: '30–60 dakika',
        anesthesia: 'Lokal anestezi ± hafif sedasyon',
        hospitalStay: 'Günübirlik',
        stayInTurkey: '5–8 gün',
        catheter: '3–7 gün',
        returnToWork: '2–5 gün',
        flightClearance: 'Sonda alındıktan ve kontrol yapıldıktan sonra'
      },
      definition: [
        'İyi huylu prostat büyümesi (BPH), prostatın yaşla birlikte büyüyerek idrar kanalını dıştan sıkıştırmasıdır. İdrar akımının zayıflaması, idrara başlamakta zorlanma, sık idrara çıkma ve gece uyanma en sık şikâyetlerdir.',
        'TUMT, idrar kanalından yerleştirilen özel bir sonda aracılığıyla prostat dokusuna mikrodalga enerjisi verilerek dokunun ısıtılmasıdır. Isı, tıkanıklığa yol açan dokuda kontrollü bir hasar oluşturur; doku haftalar içinde küçülür ve idrar kanalı üzerindeki baskı azalır. İşlem sırasında idrar kanalını ve çevre dokuyu korumak için soğutma sistemi kullanılır.',
        'BU YÖNTEMİN ASIL AYIRT EDİCİ ÖZELLİĞİ: ameliyathane ve genel anestezi gerektirmemesidir. Lokal anestezi ve gerekirse hafif sedasyonla, günübirlik olarak uygulanabilir. Bu nedenle kalp-akciğer hastalığı gibi nedenlerle genel anestezi riski yüksek olan hastalarda bir seçenek olarak öne çıkar.',
        'ETKİSİ HEMEN BAŞLAMAZ. Doku ısıyla küçüldüğü için asıl düzelme haftalar içinde yerleşir; ilk haftalarda şikâyetlerin geçici olarak ARTMASI olağandır. Bu, işlemin başarısız olduğu anlamına gelmez. Hemen rahatlama bekleyen bir hasta için TUMT doğru seçenek değildir — bu, ameliyattan önce açıkça konuşulur.',
        'DOKU ÇIKARILMAZ, DOLAYISIYLA PATOLOJİ İNCELEMESİ OLMAZ. TURP ve enükleasyon yöntemlerinde çıkarılan doku patolojiye gönderilir ve beklenmedik bir kanser odağı yakalanabilir. TUMT’ta böyle bir inceleme mümkün değildir. Bu nedenle işlem öncesi PSA ve muayene ile kanser değerlendirmesi ayrıca ve dikkatle yapılır.',
        'YENİDEN GİRİŞİM İHTİMALİ DAHA YÜKSEKTİR. Doku tamamen çıkarılmadığı için yıllar içinde şikâyetlerin geri dönmesi ve ikinci bir işlem (TURP, enükleasyon veya ilaç) gerekmesi, doku çıkaran yöntemlere göre daha olasıdır. Yurt dışından geliyorsanız bu ihtimali ikinci bir seyahat olarak planınıza katın.',
        'BOŞALMANIN KORUNMASI AÇISINDAN ÖNE ÇIKAR. Doku çıkaran yöntemlerden sonra sık görülen retrograd boşalma (meninin mesaneye geri kaçması), TUMT sonrası daha az beklenir. Cinsel işlev ve boşalma önceliğinizse bunu açıkça söyleyin; seçenekler buna göre sıralanır.'
      ],
      eligibility: {
        suitable: [
          'Küçük–orta hacimli prostatı olan ve ilaç tedavisinden yeterli fayda görmeyen erkekler',
          'Genel anestezi riski yüksek olan ve ameliyathane koşullarından kaçınılması gereken hastalar',
          'Boşalmanın korunmasını öncelik olarak belirten hastalar',
          'Hemen değil, haftalar içinde gelecek bir düzelmeyi kabul eden hastalar',
          'Kan sulandırıcı kullanımı nedeniyle kanamalı girişimden kaçınılmak istenen seçilmiş hastalar — ilaç yönetimi yine de ayrı planlanır'
        ],
        notSuitable: [
          'Çok büyük hacimli prostatı olan hastalar',
          'İdrar yapamama (retansiyon) nedeniyle sonda takılmış ve hızlı sonuç gereken hastalar',
          'Mesanede taş gelişmiş veya tekrarlayan ciddi kanaması olan hastalar — doku çıkaran yöntem gerekir',
          'Prostat kanseri şüphesi netleşmemiş hastalar: önce tanısal değerlendirme tamamlanır',
          'Tedavi edilmemiş idrar yolu enfeksiyonu olanlar',
          'Prostatta belirgin orta lob büyümesi olan seçilmiş hastalarda beklenen fayda sınırlı olabilir',
          'Kalça protezi veya pelvik bölgede metal implantı olan hastalarda uygunluk ayrıca değerlendirilir'
        ]
      },
      technology: [
        'Transüretral mikrodalga uygulama sondası ve soğutma sistemi',
        'Ultrason ile prostat hacminin belirlenmesi',
        'Üroflowmetri ve işeme sonrası kalan idrar ölçümü',
        'PSA ölçümü ve parmakla muayene — kanserin ayrıca değerlendirilmesi için',
        'Gerekli olgularda sistoskopi — orta lob ve mesane içi değerlendirme',
        'İşlem sonrası geçici sonda'
      ],
      surgeonExperience: {
        caseVolume: '',
        note: 'TUMT’ta sonucu belirleyen, hastanın beklentisiyle yöntemin doğasının örtüşmesidir: hızlı sonuç isteyen bir hastaya TUMT önerilmemelidir. Doç. Dr. Müslüm Ergün’ün prostat cerrahisindeki yaklaşımında yöntem seçimi; prostat hacmi, idrar akım hızı, kalan idrar miktarı, kullanılan ilaçlar, cinsel işlev beklentileri ve anestezi riski birlikte değerlendirilerek yapılır.'
      },
      timeline: [
        { when: 'Uzaktan', title: 'Ön değerlendirme', body: 'Prostat hacmini gösteren görüntüleme, üroflowmetri ve kalan idrar ölçümü, PSA değeri, kullandığınız ilaçlar (özellikle kan sulandırıcılar), kalp-akciğer hastalıklarınız ve pelvik bölgedeki metal implantlarınız incelenir.' },
        { when: '1. Gün', title: 'Muayene ve tetkikler', body: 'Muayene, üroflowmetri, kalan idrar ölçümü, idrar tahlili ve kültürü. Kültürde üreme varsa işlem ertelenir. Gerekirse sistoskopi ile orta lob değerlendirilir.' },
        { when: '2. Gün', title: 'İşlem', body: 'Lokal anestezi ve gerekirse hafif sedasyonla, idrar kanalından uygulama sondası yerleştirilir ve mikrodalga enerjisi verilir. İşlem sonunda geçici bir sonda takılır. Aynı gün evinize dönersiniz.' },
        { when: '3.–7. Gün', title: 'Sonda alımı', body: 'Sonda burada alınır ve ilk idrar gözlenir. İdrar yapmakta zorluk olursa hastane yakınındayken çözülür. Dönüş uçuşu sonda alımının ertesi gününe planlanmaz.' },
        { when: '2.–6. hafta', title: 'Etkinin yerleşmesi', body: 'Asıl düzelme bu dönemde belirginleşir. İlk haftalarda sık idrara çıkma ve yanma olağandır; bu geçici bir dönemdir.' },
        { when: '3. ay', title: 'Sonuç değerlendirmesi', body: 'Kontrol üroflowmetri ve kalan idrar ölçümü ile sonuç değerlendirilir. Bu ölçümler, şikâyetin ne kadar düzeldiğinin nesnel karşılığıdır.' }
      ],
      risks: [
        'ETKİNİN GECİKMELİ BAŞLAMASI VE İLK HAFTALARDA ŞİKÂYETLERİN ARTMASI: Beklenen bir seyirdir, ancak hemen rahatlama bekleyen hasta için ciddi bir hayal kırıklığıdır. Bu yüzden baştan konuşulur',
        'SONDA SÜRESİNİN UZAMASI: Isının yarattığı ödem nedeniyle sonda birkaç gün kalır; bazı hastalarda bu süre uzayabilir veya sonda alındıktan sonra geçici olarak yeniden takılması gerekebilir',
        'İdrar yolu enfeksiyonu',
        'İşerken yanma, sık idrara çıkma ve sıkışma hissi — ilk haftalarda beklenen bulgulardır',
        'İdrarda kan — genellikle hafif ve geçicidir',
        'YENİDEN GİRİŞİM GEREKMESİ: Doku tamamen çıkarılmadığı için yıllar içinde ikinci bir işlem gerekme ihtimali doku çıkaran yöntemlere göre daha yüksektir',
        'PATOLOJİK İNCELEME YAPILAMAMASI: Doku çıkarılmadığı için beklenmedik bir kanser odağı bu yolla yakalanamaz',
        'Nadiren idrar kanalında darlık gelişmesi'
      ],
      alternatives: [
        'İzlem ve yaşam tarzı düzenlemesi — hafif şikâyette; akşam sıvı alımının azaltılması, kafein ve alkolün kısıtlanması, kabızlığın giderilmesi',
        'Alfa bloker ilaçlar — akımı görece hızlı iyileştirir; baş dönmesi ve boşalmada değişiklik yapabilir',
        '5-alfa redüktaz inhibitörleri — prostatı aylar içinde küçültür; PSA değerini yaklaşık yarıya düşürdüğü unutulmamalıdır',
        'Rezūm (su buharı) — TUMT gibi ısı temelli, az girişimsel; faydası yine gecikmeli başlar',
        'Prostatik üretral askı (UroLift) — doku çıkarılmayan, seçilmiş anatomilerde uygulanabilen yöntem',
        'TURP — yerleşik endoskopik rezeksiyon; doku çıkarılır ve patolojik inceleme mümkün olur',
        'ThuLEP / HoLEP — enükleasyon; prostat hacminde pratik bir tavan yoktur ve yeniden girişim ihtimali daha düşüktür',
        'Prostat arter embolizasyonu — seçilmiş hastalarda girişimsel radyoloji seçeneği'
      ],
      comparison: {
        title: 'TUMT, TURP ve ThuLEP: hangi denge size uyuyor',
        columns: ['Ölçüt', 'TUMT (mikrodalga)', 'TURP', 'ThuLEP (enükleasyon)'],
        rows: [
          { label: 'Doku ne olur', values: ['Yerinde kalır, ısıyla küçülür', 'Kısmen traşlanır', 'Tamamen çıkarılır'] },
          { label: 'Anestezi', values: ['Lokal ± sedasyon', 'Genel veya spinal', 'Genel veya spinal'] },
          { label: 'Ameliyathane gerekir mi', values: ['Gerekmez', 'Gerekir', 'Gerekir'] },
          { label: 'Etki ne zaman başlar', values: ['Haftalar içinde', 'Hemen', 'Hemen'] },
          { label: 'Prostat boyutu sınırı', values: ['Küçük–orta', 'Küçük–orta', 'Pratik bir tavan yoktur'] },
          { label: 'Boşalmanın korunması', values: ['Daha çok korunur', 'Daha az olasıdır', 'Daha az olasıdır'] },
          { label: 'Yeniden girişim ihtimali', values: ['Daha yüksek', 'Orta', 'Daha düşük'] },
          { label: 'Patoloji incelemesi', values: ['Doku çıkmaz, inceleme olmaz', 'Çıkarılan doku incelenir', 'Çıkarılan doku incelenir'] },
          { label: 'Hastanede kalış', values: ['Günübirlik', '1–2 gece', '1 gece'] }
        ],
        note: 'Doğru soru "hangisi daha gelişmiş" değil, "benim önceliğim ne" sorusudur. Anestezi riskinden kaçınmak ve boşalmayı korumak öncelikliyse TUMT öne çıkar; idrar şikâyetinin kesin ve kalıcı biçimde çözülmesi öncelikliyse enükleasyon öne çıkar. Yurt dışından geliyorsanız ikinci bir seyahat ihtimalini bu kararda ayrıca tartın.'
      },
      recovery: [
        { period: 'İlk 48 saat', body: 'Sonda takılıdır. İdrarda hafif kan olağandır. Bol sıvı alınır. Ateş veya sondadan idrar gelmemesi durumunda derhal başvurulmalıdır.' },
        { period: 'Sonda alındıktan sonra', body: 'Sık idrara çıkma, sıkışma ve yanma olağandır. Az sayıda hastada sonda geçici olarak yeniden takılabilir; bu nedenle sonda alımının ertesi günü uçuş planlanmaz.' },
        { period: '2.–4. hafta', body: 'Şikâyetlerin geçici olarak artması bu dönemde görülebilir ve başarısızlık anlamına gelmez. Günlük yaşama dönüş genellikle birkaç gün içindedir.' },
        { period: '1.–3. ay', body: 'Asıl düzelme bu dönemde yerleşir. İdrar akımı ve gece uyanmalarda belirgin değişim beklenir.' },
        { period: 'Uzun dönem', body: 'Şikâyetlerin yeniden başlaması hâlinde neden araştırılır; her tekrar prostat kaynaklı olmayabilir. Gerekirse doku çıkaran bir yönteme geçilir.' }
      ],
      price: {
        from: 0,
        to: 0,
        currency: 'EUR',
        disclaimer:
          'Tutar; kullanılan uygulama sondasına, anestezi tipine ve ek tetkiklere göre değişir. Doku çıkarılmadığı için patoloji kalemi bulunmaz. Kalem kalem ayrılmış yazılı teklif, tetkikleriniz incelendikten sonra verilir.'
      },
      packageIncludes: [
        'Muayene, üroflowmetri ve kalan idrar ölçümü',
        'Kan ve idrar tetkikleri, idrar kültürü',
        'PSA ölçümü',
        'Prostat hacminin ultrasonla belirlenmesi',
        'Lokal anestezi ve gerekirse hafif sedasyon',
        'Uygulama sondası ve sarf malzemeleri',
        'İşlem sonrası geçici sonda',
        'Sonda alımı ve dönüş öncesi kontrol',
        'Havalimanı–hastane–otel transferleri',
        'Konaklama (hasta + 1 refakatçi)',
        'Tıbbi tercüman ve hasta koordinatörü',
        'Dönüşten sonra uzaktan takip'
      ],
      faqs: [
        { q: 'İşlemden sonra hemen rahatlar mıyım?', a: 'Hayır. Doku ısıyla küçüldüğü için asıl düzelme haftalar içinde yerleşir ve ilk haftalarda şikâyetlerin geçici olarak artması olağandır. Hemen rahatlama bekliyorsanız TUMT sizin için doğru seçenek değildir; bunu baştan konuşalım.' },
        { q: 'Genel anestezi almayacak mıyım?', a: 'TUMT genellikle lokal anestezi ve gerekirse hafif sedasyonla uygulanır; ameliyathane koşulları gerekmez. Bu, yöntemin en belirgin pratik üstünlüğüdür ve özellikle anestezi riski yüksek hastalarda önemlidir.' },
        { q: 'Boşalmam etkilenir mi?', a: 'Doku çıkaran yöntemlerden sonra sık görülen retrograd boşalma TUMT sonrası daha az beklenir. Cinsel işlev ve boşalma sizin için öncelikliyse bunu açıkça söyleyin; seçenekler buna göre sıralanır.' },
        { q: 'Sonda ne kadar kalır?', a: 'Genellikle birkaç gün; ısıya bağlı ödem nedeniyle bu süre bazen uzayabilir. Sonda burada alınır ki idrar yapmakta zorluk olursa hastane yakınında çözülsün. Uçuşunuzu sonda alımının ertesi gününe planlamayın.' },
        { q: 'İleride tekrar ameliyat gerekir mi?', a: 'Doku tamamen çıkarılmadığı için yıllar içinde ikinci bir işlem gerekme ihtimali, doku çıkaran yöntemlere göre daha yüksektir. Yurt dışından geliyorsanız bunu ikinci bir seyahat olarak planınıza katın.' },
        { q: 'Çıkan doku patolojiye gider mi?', a: 'Hayır. TUMT’ta doku çıkarılmaz, bu yüzden patolojik inceleme yapılamaz. Bu nedenle işlem öncesi PSA ve muayene ile kanser değerlendirmesi ayrıca ve dikkatle yapılır. Şüpheli bir durum varsa önce tanısal değerlendirme tamamlanır.' },
        { q: 'Prostatım büyük, bana uygun mu?', a: 'TUMT küçük ve orta hacimli prostatlarda öne çıkar. Çok büyük prostatlarda beklenen fayda sınırlıdır; bu durumda enükleasyon (ThuLEP) daha uygun olur. Hacim ölçümü bu kararın temelidir.' },
        { q: 'Kan sulandırıcı kullanıyorum, yapılabilir mi?', a: 'TUMT kanamalı bir işlem değildir ve bu hastalarda değerlendirilebilir. Yine de ilaç yönetimi her hastada ayrı planlanır; ilacınızı kendi kararınızla kesmeyin ve tam listenizi önceden gönderin.' },
        { q: 'Kalça protezim var, sorun olur mu?', a: 'Pelvik bölgedeki metal implantlar uygunluk açısından ayrıca değerlendirilir. Protezinizin yerini ve türünü başvuru sırasında bildirin.' },
        { q: 'Türkiye’de ne kadar kalmalıyım?', a: 'Genellikle 5–8 gün. Sonda alımı ve ilk kontrol burada yapıldığı için dönüş uçuşunu sonda alımının ertesi gününe planlamayın.' },
        { q: 'Hangi belgeleri göndermeliyim?', a: 'Prostat hacmini gösteren ultrason veya görüntüleme, varsa üroflowmetri ve işeme sonrası kalan idrar ölçümü, güncel PSA, idrar tahlili, kullandığınız tüm ilaçların listesi, kalp-akciğer hastalıklarınız ve varsa pelvik bölgedeki metal implant bilgisi.' }
      ],
      sources: [
        {
          label: 'EAU Guidelines on Management of Non-Neurogenic Male LUTS — Avrupa Üroloji Derneği',
          url: 'https://uroweb.org/guidelines/management-of-non-neurogenic-male-luts'
        }
      ]
    },
    en: {
      title: 'TUMT (Transurethral Microwave Thermotherapy)',
      summary:
        'An option for benign prostate enlargement in which microwave energy delivered through the urinary passage heats and shrinks prostate tissue, without an operating theatre or general anaesthesia.',
      metaTitle: 'TUMT: Microwave Heat Treatment for the Prostate',
      metaDescription:
        'Prostate treatment with TUMT: who it suits, how it is done, when the effect begins, how it differs from TURP and ThuLEP, the risks and honest expectations.',
      quickFacts: {
        duration: '30–60 minutes',
        anesthesia: 'Local anaesthesia, with light sedation if needed',
        hospitalStay: 'Day case',
        stayInTurkey: '5–8 days',
        catheter: '3–7 days',
        returnToWork: '2–5 days',
        flightClearance: 'After catheter removal and review'
      },
      definition: [
        'Benign prostatic hyperplasia (BPH) is enlargement of the prostate with age, compressing the urinary channel from outside. A weak stream, hesitancy, frequency and waking at night are the commonest symptoms.',
        'In TUMT, microwave energy is delivered to the prostate through a special catheter placed along the urinary passage, heating the tissue. The heat creates controlled damage in the obstructing tissue; it shrinks over weeks and the pressure on the channel falls. A cooling system protects the urethra and surrounding tissue during the procedure.',
        'THE DEFINING FEATURE OF THIS METHOD is that it needs neither an operating theatre nor general anaesthesia. It can be carried out as a day case under local anaesthesia with light sedation if required. It therefore stands out as an option for men at high anaesthetic risk because of heart or lung disease.',
        'THE EFFECT DOES NOT BEGIN IMMEDIATELY. Because the tissue shrinks with heat, real improvement settles over weeks, and a temporary WORSENING of symptoms in the first weeks is usual. That does not mean the procedure has failed. For a man expecting immediate relief, TUMT is not the right option — and that is said plainly beforehand.',
        'NO TISSUE IS REMOVED, SO THERE IS NO PATHOLOGY. In TURP and enucleation the tissue removed goes to pathology and an unexpected focus of cancer can be caught. With TUMT no such examination is possible. Assessment for cancer with PSA and examination is therefore carried out separately and carefully beforehand.',
        'THE CHANCE OF A FURTHER PROCEDURE IS HIGHER. Because the tissue is not fully removed, symptoms returning over the years and a second procedure (TURP, enucleation or medication) becoming necessary are more likely than with tissue-removing methods. If you are travelling from abroad, build that possibility into your plans as a second journey.',
        'IT STANDS OUT FOR PRESERVING EJACULATION. Retrograde ejaculation (semen passing into the bladder), common after tissue-removing methods, is less expected after TUMT. If sexual function and ejaculation are your priority, say so plainly; the options are ordered accordingly.'
      ],
      eligibility: {
        suitable: [
          'Men with a small to moderate prostate who gain insufficient benefit from medication',
          'Men at high anaesthetic risk, in whom theatre conditions should be avoided',
          'Men who state preserving ejaculation as a priority',
          'Men who accept improvement arriving over weeks rather than at once',
          'Selected men on anticoagulants in whom a bleeding procedure is to be avoided — medication is still managed individually'
        ],
        notSuitable: [
          'Men with a very large prostate',
          'Men catheterised because of retention who need a rapid result',
          'Men with bladder stones or recurrent significant bleeding — a tissue-removing method is needed',
          'Men in whom suspicion of prostate cancer is unresolved: diagnostic assessment is completed first',
          'Men with untreated urinary infection',
          'Selected men with a prominent middle lobe, in whom the expected benefit may be limited',
          'Men with a hip prosthesis or pelvic metal implant, in whom suitability is assessed separately'
        ]
      },
      technology: [
        'Transurethral microwave catheter with a cooling system',
        'Ultrasound determination of prostate volume',
        'Uroflowmetry and post-void residual measurement',
        'PSA and digital rectal examination — to assess cancer separately',
        'Cystoscopy where needed — to assess the middle lobe and the bladder',
        'Temporary catheter after the procedure'
      ],
      surgeonExperience: {
        caseVolume: '',
        note: 'What determines the result with TUMT is whether the patient’s expectation matches the nature of the method: TUMT should not be offered to a man who wants a rapid result. In Assoc. Prof. Dr. Müslüm Ergün’s approach to prostate surgery, the method is selected from prostate volume, flow rate, residual urine, current medication, expectations regarding sexual function and anaesthetic risk, considered together.'
      },
      timeline: [
        { when: 'Remotely', title: 'Initial assessment', body: 'Imaging showing prostate volume, uroflowmetry and residual urine, your PSA, your medication (particularly anticoagulants), your heart and lung conditions and any pelvic metal implants are reviewed.' },
        { when: 'Day 1', title: 'Examination and tests', body: 'Examination, uroflowmetry, residual volume, urinalysis and culture. If the culture grows an organism the procedure is postponed. Cystoscopy assesses the middle lobe where needed.' },
        { when: 'Day 2', title: 'Procedure', body: 'Under local anaesthesia, with light sedation if required, the treatment catheter is placed along the urinary passage and microwave energy is delivered. A temporary catheter is left at the end. You go home the same day.' },
        { when: 'Days 3–7', title: 'Catheter removal', body: 'The catheter is removed here and the first void observed, so that difficulty passing urine is dealt with close to the hospital. The return flight is not planned for the day after removal.' },
        { when: 'Weeks 2–6', title: 'The effect settles', body: 'Real improvement becomes apparent in this period. Frequency and stinging are usual in the first weeks; this is a temporary phase.' },
        { when: 'Month 3', title: 'Assessment of the result', body: 'Repeat uroflowmetry and residual volume measure the result. Those measurements are the objective counterpart of how far the symptoms have improved.' }
      ],
      risks: [
        'DELAYED ONSET AND WORSENING OF SYMPTOMS IN THE FIRST WEEKS: an expected course, but a serious disappointment for a man expecting immediate relief. That is why it is discussed from the outset',
        'A LONGER PERIOD WITH A CATHETER: swelling caused by the heat means the catheter stays for several days; in some men that lasts longer, or the catheter has to be replaced temporarily after removal',
        'Urinary tract infection',
        'Stinging, frequency and urgency — expected in the first weeks',
        'Blood in the urine — usually slight and temporary',
        'THE NEED FOR A FURTHER PROCEDURE: because the tissue is not fully removed, a second procedure over the years is more likely than after tissue-removing methods',
        'NO PATHOLOGY IS POSSIBLE: because no tissue is removed, an unexpected focus of cancer cannot be caught this way',
        'Rarely, narrowing of the urinary channel'
      ],
      alternatives: [
        'Observation and lifestyle measures — for mild symptoms: reducing evening fluids, limiting caffeine and alcohol, treating constipation',
        'Alpha blockers — improve the stream relatively quickly; can cause dizziness and changes in ejaculation',
        '5-alpha reductase inhibitors — shrink the prostate over months; remember they roughly halve the PSA value',
        'Rezūm (water vapour) — like TUMT, heat-based and minimally invasive; the benefit is again delayed',
        'Prostatic urethral lift (UroLift) — no tissue removed, suitable for selected anatomy',
        'TURP — established endoscopic resection; tissue is removed and pathology is possible',
        'ThuLEP / HoLEP — enucleation; no practical ceiling on prostate size and a lower chance of a further procedure',
        'Prostatic artery embolisation — an interventional radiology option in selected patients'
      ],
      comparison: {
        title: 'TUMT, TURP and ThuLEP: which trade-off suits you',
        columns: ['Criterion', 'TUMT (microwave)', 'TURP', 'ThuLEP (enucleation)'],
        rows: [
          { label: 'What happens to the tissue', values: ['Left in place, shrinks with heat', 'Partially shaved away', 'Removed completely'] },
          { label: 'Anaesthesia', values: ['Local, with sedation if needed', 'General or spinal', 'General or spinal'] },
          { label: 'Operating theatre needed', values: ['No', 'Yes', 'Yes'] },
          { label: 'When the benefit starts', values: ['Over weeks', 'Immediately', 'Immediately'] },
          { label: 'Prostate size limit', values: ['Small to moderate', 'Small to moderate', 'No practical ceiling'] },
          { label: 'Ejaculation preserved', values: ['More often preserved', 'Less likely', 'Less likely'] },
          { label: 'Chance of a further procedure', values: ['Higher', 'Intermediate', 'Lower'] },
          { label: 'Tissue available for pathology', values: ['No tissue is removed', 'Yes, it is examined', 'Yes, it is examined'] },
          { label: 'Hospital stay', values: ['Day case', '1–2 nights', '1 night'] }
        ],
        note: 'The right question is not "which is more advanced" but "what is my priority". If avoiding anaesthetic risk and preserving ejaculation come first, TUMT stands out; if a definitive and lasting solution to the urinary symptoms comes first, enucleation does. If you are travelling from abroad, weigh the possibility of a second journey in that decision.'
      },
      recovery: [
        { period: 'First 48 hours', body: 'The catheter is in place. Slight blood in the urine is usual. Drink plenty. Fever, or no urine draining from the catheter, requires immediate contact.' },
        { period: 'After catheter removal', body: 'Frequency, urgency and stinging are usual. A small number of men need the catheter replaced temporarily; for that reason no flight is planned for the day after removal.' },
        { period: 'Weeks 2–4', body: 'A temporary worsening of symptoms can occur in this period and does not mean failure. Return to normal activity is usually within a few days.' },
        { period: 'Months 1–3', body: 'Real improvement settles in this period. A clear change in the stream and in waking at night is expected.' },
        { period: 'Long term', body: 'If symptoms return, the cause is investigated; not every recurrence comes from the prostate. A tissue-removing method is used where needed.' }
      ],
      price: {
        from: 0,
        to: 0,
        currency: 'EUR',
        disclaimer:
          'The amount depends on the treatment catheter used, the type of anaesthesia and any additional tests. There is no pathology item because no tissue is removed. An itemised written quotation is given once your tests have been reviewed.'
      },
      packageIncludes: [
        'Examination, uroflowmetry and residual volume measurement',
        'Blood and urine tests, urine culture',
        'PSA measurement',
        'Ultrasound determination of prostate volume',
        'Local anaesthesia and light sedation if required',
        'Treatment catheter and consumables',
        'Temporary catheter after the procedure',
        'Catheter removal and review before you travel home',
        'Airport–hospital–hotel transfers',
        'Accommodation (patient plus one companion)',
        'Medical interpreter and patient coordinator',
        'Remote follow-up after you return home'
      ],
      faqs: [
        { q: 'Will I feel better straight after the procedure?', a: 'No. Because the tissue shrinks with heat, real improvement settles over weeks, and a temporary worsening in the first weeks is usual. If you are expecting immediate relief, TUMT is not the right option for you — let us discuss that from the start.' },
        { q: 'So I will not have a general anaesthetic?', a: 'TUMT is usually carried out under local anaesthesia with light sedation if required, and theatre conditions are not needed. That is the method’s clearest practical advantage, and it matters particularly in men at high anaesthetic risk.' },
        { q: 'Will my ejaculation be affected?', a: 'Retrograde ejaculation, common after tissue-removing methods, is less expected after TUMT. If sexual function and ejaculation are a priority for you, say so plainly; the options are ordered accordingly.' },
        { q: 'How long does the catheter stay?', a: 'Usually a few days; swelling caused by the heat can extend that. The catheter is removed here, so that any difficulty passing urine is dealt with close to the hospital. Do not plan your flight for the day after removal.' },
        { q: 'Will I need surgery again later?', a: 'Because the tissue is not fully removed, a second procedure over the years is more likely than after tissue-removing methods. If you are travelling from abroad, build that into your plans as a second journey.' },
        { q: 'Does the removed tissue go to pathology?', a: 'No. No tissue is removed in TUMT, so pathological examination is not possible. Assessment for cancer with PSA and examination is therefore carried out separately and carefully beforehand. Where there is a suspicion, diagnostic assessment is completed first.' },
        { q: 'My prostate is large — is this suitable for me?', a: 'TUMT comes to the fore in small and moderate prostates. In a very large prostate the expected benefit is limited and enucleation (ThuLEP) is more appropriate. Measuring the volume is the basis of that decision.' },
        { q: 'I take blood thinners — can it still be done?', a: 'TUMT is not a bleeding procedure and can be considered in such patients. Medication is nonetheless managed individually; do not stop your drug on your own initiative, and send the full list in advance.' },
        { q: 'I have a hip prosthesis — is that a problem?', a: 'Metal implants in the pelvis are assessed separately for suitability. Tell us the position and type of your prosthesis when you make contact.' },
        { q: 'How long should I stay in Türkiye?', a: 'Usually 5–8 days. Because catheter removal and the first review are done here, do not plan your return flight for the day after removal.' },
        { q: 'What documents should I send?', a: 'Imaging showing prostate volume, any uroflowmetry and post-void residual, a current PSA, a urinalysis, the full list of your medications, your heart and lung conditions, and details of any pelvic metal implant.' }
      ],
      sources: [
        {
          label: 'EAU Guidelines on Management of Non-Neurogenic Male LUTS — European Association of Urology',
          url: 'https://uroweb.org/guidelines/management-of-non-neurogenic-male-luts'
        }
      ]
    },
    de: {
      title: 'TUMT (transurethrale Mikrowellenthermotherapie)',
      summary:
        'Eine Option bei gutartiger Prostatavergrößerung, bei der über die Harnröhre eingebrachte Mikrowellenenergie Prostatagewebe erwärmt und verkleinert — ohne Operationssaal und ohne Vollnarkose.',
      metaTitle: 'TUMT: Wärmebehandlung der Prostata mit Mikrowellen',
      metaDescription:
        'Prostatabehandlung mit TUMT: für wen geeignet, wie sie abläuft, wann die Wirkung einsetzt, Unterschied zu TURP und ThuLEP, Risiken und ehrliche Erwartungen.',
      quickFacts: {
        duration: '30–60 Minuten',
        anesthesia: 'Lokalanästhesie, bei Bedarf leichte Sedierung',
        hospitalStay: 'Ambulant',
        stayInTurkey: '5–8 Tage',
        catheter: '3–7 Tage',
        returnToWork: '2–5 Tage',
        flightClearance: 'Nach Katheterentfernung und Kontrolle'
      },
      definition: [
        'Die gutartige Prostatavergrößerung (BPH) ist die altersbedingte Vergrößerung der Prostata, die den Harnkanal von außen einengt. Schwacher Strahl, Startverzögerung, häufiges Wasserlassen und nächtliches Aufstehen sind die häufigsten Beschwerden.',
        'Bei der TUMT wird über einen speziellen, in der Harnröhre platzierten Katheter Mikrowellenenergie in das Prostatagewebe eingebracht und dieses erwärmt. Die Wärme setzt im einengenden Gewebe einen kontrollierten Schaden; es schrumpft über Wochen und der Druck auf den Kanal lässt nach. Ein Kühlsystem schützt während des Eingriffs die Harnröhre und das umliegende Gewebe.',
        'DAS ENTSCHEIDENDE MERKMAL dieses Verfahrens ist, dass es weder Operationssaal noch Vollnarkose benötigt. Es kann ambulant in Lokalanästhesie, bei Bedarf mit leichter Sedierung, erfolgen. Deshalb kommt es besonders für Männer infrage, deren Narkoserisiko wegen Herz- oder Lungenerkrankungen erhöht ist.',
        'DIE WIRKUNG SETZT NICHT SOFORT EIN. Da das Gewebe durch Wärme schrumpft, stellt sich die eigentliche Besserung über Wochen ein, und eine vorübergehende VERSCHLECHTERUNG in den ersten Wochen ist üblich. Das bedeutet kein Versagen. Für einen Mann, der sofortige Erleichterung erwartet, ist die TUMT nicht die richtige Option — und das wird vorab deutlich gesagt.',
        'ES WIRD KEIN GEWEBE ENTNOMMEN, ALSO GIBT ES KEINE HISTOLOGIE. Bei TURP und Enukleation geht das entnommene Gewebe in die Pathologie, und ein unerwarteter Krebsherd kann entdeckt werden. Bei der TUMT ist das nicht möglich. Deshalb wird vorab mit PSA und Tastuntersuchung gesondert und sorgfältig auf Krebs geprüft.',
        'DIE WAHRSCHEINLICHKEIT EINES WEITEREN EINGRIFFS IST HÖHER. Da das Gewebe nicht vollständig entfernt wird, sind ein Wiederauftreten der Beschwerden über die Jahre und ein zweiter Eingriff (TURP, Enukleation oder Medikament) wahrscheinlicher als bei gewebeentfernenden Verfahren. Wer aus dem Ausland anreist, sollte das als zweite Reise einplanen.',
        'BEIM ERHALT DER EJAKULATION STEHT ES IM VORDERGRUND. Die nach gewebeentfernenden Verfahren häufige retrograde Ejakulation ist nach TUMT seltener zu erwarten. Wenn Sexualfunktion und Ejakulation Ihre Priorität sind, sagen Sie es offen; die Optionen werden entsprechend geordnet.'
      ],
      eligibility: {
        suitable: [
          'Männer mit kleiner bis mittlerer Prostata ohne ausreichenden Nutzen aus der Medikation',
          'Männer mit hohem Narkoserisiko, bei denen OP-Bedingungen vermieden werden sollen',
          'Männer, die den Erhalt der Ejakulation als Priorität nennen',
          'Männer, die eine erst über Wochen eintretende Besserung akzeptieren',
          'Ausgewählte Männer unter Gerinnungshemmern, bei denen ein blutender Eingriff vermieden werden soll — die Medikation wird dennoch individuell geplant'
        ],
        notSuitable: [
          'Männer mit sehr großer Prostata',
          'Männer mit Harnverhalt und Katheter, die ein rasches Ergebnis brauchen',
          'Männer mit Blasensteinen oder wiederholter stärkerer Blutung — hier ist ein gewebeentfernendes Verfahren nötig',
          'Männer mit ungeklärtem Prostatakrebsverdacht: Die Diagnostik wird zuerst abgeschlossen',
          'Männer mit unbehandeltem Harnwegsinfekt',
          'Ausgewählte Männer mit ausgeprägtem Mittellappen, bei denen der erwartete Nutzen begrenzt sein kann',
          'Männer mit Hüftprothese oder Metallimplantat im Becken; die Eignung wird gesondert geprüft'
        ]
      },
      technology: [
        'Transurethraler Mikrowellenkatheter mit Kühlsystem',
        'Bestimmung des Prostatavolumens im Ultraschall',
        'Uroflowmetrie und Restharnmessung',
        'PSA-Wert und Tastuntersuchung — zur gesonderten Abklärung eines Karzinoms',
        'Zystoskopie bei Bedarf — zur Beurteilung von Mittellappen und Blase',
        'Vorübergehender Katheter nach dem Eingriff'
      ],
      surgeonExperience: {
        caseVolume: '',
        note: 'Über das Ergebnis der TUMT entscheidet, ob die Erwartung des Patienten zur Natur des Verfahrens passt: Wer ein rasches Ergebnis will, dem sollte TUMT nicht angeboten werden. Im Vorgehen von Doz. Dr. Müslüm Ergün wird das Verfahren aus Prostatavolumen, Flussrate, Restharn, Medikation, Erwartungen an die Sexualfunktion und Narkoserisiko gemeinsam ausgewählt.'
      },
      timeline: [
        { when: 'Aus der Ferne', title: 'Erstbeurteilung', body: 'Bildgebung zum Prostatavolumen, Uroflowmetrie und Restharn, Ihr PSA, Ihre Medikation (besonders Gerinnungshemmer), Herz- und Lungenerkrankungen sowie etwaige Metallimplantate im Becken werden gesichtet.' },
        { when: 'Tag 1', title: 'Untersuchung und Tests', body: 'Untersuchung, Uroflowmetrie, Restharn, Urinbefund und Kultur. Wächst in der Kultur ein Erreger, wird verschoben. Bei Bedarf beurteilt eine Zystoskopie den Mittellappen.' },
        { when: 'Tag 2', title: 'Eingriff', body: 'In Lokalanästhesie, bei Bedarf mit leichter Sedierung, wird der Behandlungskatheter in der Harnröhre platziert und Mikrowellenenergie abgegeben. Am Ende verbleibt ein vorübergehender Katheter. Sie gehen am selben Tag nach Hause.' },
        { when: 'Tag 3–7', title: 'Katheterentfernung', body: 'Der Katheter wird hier entfernt und das erste Wasserlassen beobachtet, damit Schwierigkeiten in Kliniknähe behoben werden können. Der Rückflug wird nicht auf den Folgetag gelegt.' },
        { when: 'Woche 2–6', title: 'Die Wirkung stellt sich ein', body: 'Die eigentliche Besserung wird in dieser Zeit deutlich. Häufiges Wasserlassen und Brennen sind in den ersten Wochen üblich; das ist eine vorübergehende Phase.' },
        { when: 'Monat 3', title: 'Beurteilung des Ergebnisses', body: 'Kontroll-Uroflowmetrie und Restharn messen das Ergebnis. Diese Messungen sind die objektive Entsprechung der Beschwerdebesserung.' }
      ],
      risks: [
        'VERZÖGERTER WIRKUNGSEINTRITT UND VERSCHLECHTERUNG IN DEN ERSTEN WOCHEN: ein erwarteter Verlauf, für wer sofortige Erleichterung erwartet jedoch eine erhebliche Enttäuschung. Deshalb wird es von Anfang an besprochen',
        'LÄNGERE KATHETERZEIT: Durch die wärmebedingte Schwellung bleibt der Katheter einige Tage; bei manchen länger, oder er muss nach Entfernung vorübergehend erneut gelegt werden',
        'Harnwegsinfekt',
        'Brennen, häufiges Wasserlassen und Drang — in den ersten Wochen zu erwarten',
        'Blut im Urin — meist gering und vorübergehend',
        'NOTWENDIGKEIT EINES WEITEREN EINGRIFFS: Da das Gewebe nicht vollständig entfernt wird, ist ein zweiter Eingriff über die Jahre wahrscheinlicher als nach gewebeentfernenden Verfahren',
        'KEINE HISTOLOGIE MÖGLICH: Da kein Gewebe anfällt, kann ein unerwarteter Krebsherd auf diesem Weg nicht entdeckt werden',
        'Selten eine Enge des Harnkanals'
      ],
      alternatives: [
        'Beobachtung und Allgemeinmaßnahmen — bei leichten Beschwerden: abends weniger trinken, Koffein und Alkohol begrenzen, Verstopfung behandeln',
        'Alphablocker — verbessern den Strahl relativ rasch; möglich sind Schwindel und Veränderungen der Ejakulation',
        '5-Alpha-Reduktase-Hemmer — verkleinern die Prostata über Monate; sie halbieren den PSA-Wert etwa',
        'Rezūm (Wasserdampf) — wie TUMT wärmebasiert und wenig eingreifend; der Nutzen setzt ebenfalls verzögert ein',
        'Prostatisches Harnröhrenimplantat (UroLift) — ohne Gewebeentfernung, bei geeigneter Anatomie',
        'TURP — etablierte endoskopische Resektion; Gewebe fällt an und eine Histologie ist möglich',
        'ThuLEP / HoLEP — Enukleation; praktisch keine Obergrenze beim Volumen und geringere Wahrscheinlichkeit eines weiteren Eingriffs',
        'Prostataarterienembolisation — eine interventionell-radiologische Option bei ausgewählten Patienten'
      ],
      comparison: {
        title: 'TUMT, TURP und ThuLEP: welche Abwägung passt zu Ihnen',
        columns: ['Kriterium', 'TUMT (Mikrowelle)', 'TURP', 'ThuLEP (Enukleation)'],
        rows: [
          { label: 'Was geschieht mit dem Gewebe', values: ['Bleibt und schrumpft durch Wärme', 'Teilweise abgetragen', 'Vollständig entfernt'] },
          { label: 'Narkose', values: ['Lokal, ggf. Sedierung', 'Vollnarkose oder spinal', 'Vollnarkose oder spinal'] },
          { label: 'Operationssaal nötig', values: ['Nein', 'Ja', 'Ja'] },
          { label: 'Wann die Wirkung einsetzt', values: ['Über Wochen', 'Sofort', 'Sofort'] },
          { label: 'Grenze der Prostatagröße', values: ['Klein bis mittel', 'Klein bis mittel', 'Praktisch keine Obergrenze'] },
          { label: 'Ejakulation erhalten', values: ['Häufiger erhalten', 'Seltener', 'Seltener'] },
          { label: 'Wahrscheinlichkeit eines weiteren Eingriffs', values: ['Höher', 'Dazwischen', 'Geringer'] },
          { label: 'Gewebe für die Histologie', values: ['Es fällt kein Gewebe an', 'Ja, es wird untersucht', 'Ja, es wird untersucht'] },
          { label: 'Klinikaufenthalt', values: ['Ambulant', '1–2 Nächte', '1 Nacht'] }
        ],
        note: 'Die richtige Frage lautet nicht „was ist moderner", sondern „was ist meine Priorität". Stehen die Vermeidung des Narkoserisikos und der Erhalt der Ejakulation im Vordergrund, rückt die TUMT nach vorn; steht die endgültige und dauerhafte Lösung der Beschwerden im Vordergrund, die Enukleation. Wer aus dem Ausland anreist, sollte die Möglichkeit einer zweiten Reise mit abwägen.'
      },
      recovery: [
        { period: 'Erste 48 Stunden', body: 'Der Katheter liegt. Etwas Blut im Urin ist üblich. Viel trinken. Fieber oder fehlender Urinabfluss über den Katheter erfordern sofortigen Kontakt.' },
        { period: 'Nach der Katheterentfernung', body: 'Häufiges Wasserlassen, Drang und Brennen sind üblich. Bei wenigen Männern muss der Katheter vorübergehend erneut gelegt werden; deshalb wird kein Flug auf den Folgetag gelegt.' },
        { period: 'Woche 2–4', body: 'Eine vorübergehende Verschlechterung ist in dieser Zeit möglich und bedeutet kein Versagen. Die Rückkehr zum Alltag erfolgt meist binnen weniger Tage.' },
        { period: 'Monat 1–3', body: 'Die eigentliche Besserung stellt sich in dieser Zeit ein. Eine deutliche Veränderung von Strahl und nächtlichem Aufstehen ist zu erwarten.' },
        { period: 'Langfristig', body: 'Kehren die Beschwerden zurück, wird die Ursache abgeklärt; nicht jedes Wiederauftreten kommt von der Prostata. Bei Bedarf wird auf ein gewebeentfernendes Verfahren gewechselt.' }
      ],
      price: {
        from: 0,
        to: 0,
        currency: 'EUR',
        disclaimer:
          'Der Betrag hängt vom verwendeten Behandlungskatheter, der Narkoseform und etwaigen Zusatzuntersuchungen ab. Eine Position für die Histologie entfällt, da kein Gewebe anfällt. Ein detailliertes schriftliches Angebot folgt nach Sichtung Ihrer Befunde.'
      },
      packageIncludes: [
        'Untersuchung, Uroflowmetrie und Restharnmessung',
        'Blut- und Urinuntersuchungen, Urinkultur',
        'PSA-Bestimmung',
        'Bestimmung des Prostatavolumens im Ultraschall',
        'Lokalanästhesie und bei Bedarf leichte Sedierung',
        'Behandlungskatheter und Verbrauchsbedarf',
        'Vorübergehender Katheter nach dem Eingriff',
        'Katheterentfernung und Kontrolle vor der Rückreise',
        'Transfers Flughafen–Klinik–Hotel',
        'Unterkunft (Patient und eine Begleitperson)',
        'Medizinischer Dolmetscher und Patientenkoordination',
        'Fernnachsorge nach der Rückkehr'
      ],
      faqs: [
        { q: 'Geht es mir direkt nach dem Eingriff besser?', a: 'Nein. Da das Gewebe durch Wärme schrumpft, stellt sich die Besserung über Wochen ein, und eine vorübergehende Verschlechterung in den ersten Wochen ist üblich. Wenn Sie sofortige Erleichterung erwarten, ist die TUMT nicht die richtige Option — besprechen wir das von Anfang an.' },
        { q: 'Ich bekomme also keine Vollnarkose?', a: 'Die TUMT erfolgt meist in Lokalanästhesie, bei Bedarf mit leichter Sedierung, ohne OP-Bedingungen. Das ist der klarste praktische Vorteil und besonders bei hohem Narkoserisiko bedeutsam.' },
        { q: 'Wird meine Ejakulation beeinträchtigt?', a: 'Die nach gewebeentfernenden Verfahren häufige retrograde Ejakulation ist nach TUMT seltener zu erwarten. Sind Ihnen Sexualfunktion und Ejakulation wichtig, sagen Sie es offen; die Optionen werden entsprechend geordnet.' },
        { q: 'Wie lange bleibt der Katheter?', a: 'Meist einige Tage; die wärmebedingte Schwellung kann das verlängern. Der Katheter wird hier entfernt, damit Schwierigkeiten in Kliniknähe behoben werden können. Planen Sie Ihren Flug nicht für den Folgetag.' },
        { q: 'Werde ich später erneut operiert werden müssen?', a: 'Da das Gewebe nicht vollständig entfernt wird, ist ein zweiter Eingriff über die Jahre wahrscheinlicher als nach gewebeentfernenden Verfahren. Wer aus dem Ausland anreist, sollte das als zweite Reise einplanen.' },
        { q: 'Geht entnommenes Gewebe in die Pathologie?', a: 'Nein. Bei der TUMT fällt kein Gewebe an, deshalb ist keine Histologie möglich. Daher wird vorab mit PSA und Tastuntersuchung gesondert und sorgfältig auf Krebs geprüft. Bei Verdacht wird die Diagnostik zuerst abgeschlossen.' },
        { q: 'Meine Prostata ist groß — ist das geeignet?', a: 'Die TUMT steht bei kleiner und mittlerer Prostata im Vordergrund. Bei sehr großer Prostata ist der erwartete Nutzen begrenzt und die Enukleation (ThuLEP) angemessener. Die Volumenmessung ist die Grundlage dieser Entscheidung.' },
        { q: 'Ich nehme Gerinnungshemmer — geht das trotzdem?', a: 'Die TUMT ist kein blutender Eingriff und kommt bei solchen Patienten in Betracht. Die Medikation wird dennoch individuell geplant; setzen Sie Ihr Präparat nicht eigenmächtig ab und senden Sie die vollständige Liste vorab.' },
        { q: 'Ich habe eine Hüftprothese — ist das ein Problem?', a: 'Metallimplantate im Becken werden gesondert auf Eignung geprüft. Nennen Sie bei der Kontaktaufnahme Lage und Art Ihrer Prothese.' },
        { q: 'Wie lange muss ich in der Türkei bleiben?', a: 'Meist 5–8 Tage. Da Katheterentfernung und erste Kontrolle hier erfolgen, planen Sie den Rückflug nicht für den Tag nach der Entfernung.' },
        { q: 'Welche Unterlagen soll ich senden?', a: 'Bildgebung zum Prostatavolumen, etwaige Uroflowmetrie und Restharn, einen aktuellen PSA, einen Urinbefund, die vollständige Medikamentenliste, Ihre Herz- und Lungenerkrankungen sowie Angaben zu Metallimplantaten im Becken.' }
      ],
      sources: [
        {
          label: 'EAU-Leitlinie zum Management nicht-neurogener LUTS des Mannes — Europäische Gesellschaft für Urologie',
          url: 'https://uroweb.org/guidelines/management-of-non-neurogenic-male-luts'
        }
      ]
    },
    fr: {
      title: 'TUMT (thermothérapie transurétrale par micro-ondes)',
      summary:
        'Une option dans l’hypertrophie bénigne de la prostate où une énergie micro-ondes délivrée par les voies naturelles chauffe et réduit le tissu prostatique, sans bloc opératoire ni anesthésie générale.',
      metaTitle: 'TUMT : traitement de la prostate par la chaleur micro-ondes',
      metaDescription:
        'Traitement prostatique par TUMT : à qui il convient, comment il se déroule, quand l’effet survient, différence avec la RTUP et la ThuLEP, risques et attentes réalistes.',
      quickFacts: {
        duration: '30 à 60 minutes',
        anesthesia: 'Anesthésie locale ± sédation légère',
        hospitalStay: 'Ambulatoire',
        stayInTurkey: '5 à 8 jours',
        catheter: '3 à 7 jours',
        returnToWork: '2 à 5 jours',
        flightClearance: 'Après le retrait de la sonde et le contrôle'
      },
      definition: [
        'L’hypertrophie bénigne de la prostate (HBP) est l’augmentation de volume liée à l’âge qui comprime le canal urinaire de l’extérieur. Jet faible, retard au démarrage, pollakiurie et réveils nocturnes en sont les symptômes les plus fréquents.',
        'Dans la TUMT, une énergie micro-ondes est délivrée au tissu prostatique par une sonde spécifique placée dans l’urètre, ce qui le chauffe. La chaleur crée une lésion contrôlée du tissu obstructif ; celui-ci se rétracte en quelques semaines et la pression sur le canal diminue. Un système de refroidissement protège l’urètre et les tissus voisins pendant le geste.',
        'LA CARACTÉRISTIQUE DÉTERMINANTE de cette méthode est qu’elle ne nécessite ni bloc opératoire ni anesthésie générale. Elle peut se faire en ambulatoire sous anesthésie locale, avec une sédation légère si besoin. Elle se distingue donc comme option chez les hommes à risque anesthésique élevé du fait d’une maladie cardiaque ou pulmonaire.',
        'L’EFFET N’EST PAS IMMÉDIAT. Le tissu se rétractant sous l’effet de la chaleur, l’amélioration réelle s’installe en quelques semaines, et une AGGRAVATION transitoire des symptômes les premières semaines est habituelle. Cela ne signifie pas un échec. Pour un homme qui attend un soulagement immédiat, la TUMT n’est pas la bonne option — et cela se dit clairement à l’avance.',
        'AUCUN TISSU N’EST RETIRÉ, DONC PAS D’ANALYSE ANATOMOPATHOLOGIQUE. Dans la RTUP et l’énucléation, le tissu retiré part en anatomopathologie et un foyer tumoral inattendu peut être découvert. Avec la TUMT, cet examen est impossible. L’évaluation du risque de cancer par PSA et toucher rectal est donc faite à part et avec soin avant le geste.',
        'LE RISQUE DE RÉINTERVENTION EST PLUS ÉLEVÉ. Le tissu n’étant pas entièrement retiré, la réapparition des symptômes avec les années et la nécessité d’un second geste (RTUP, énucléation ou médicament) sont plus probables qu’avec les méthodes qui retirent du tissu. Si vous venez de l’étranger, intégrez cette éventualité comme un second voyage.',
        'ELLE SE DISTINGUE POUR LA PRÉSERVATION DE L’ÉJACULATION. L’éjaculation rétrograde, fréquente après les méthodes qui retirent du tissu, est moins attendue après TUMT. Si la fonction sexuelle et l’éjaculation sont votre priorité, dites-le clairement : les options se classent en conséquence.'
      ],
      eligibility: {
        suitable: [
          'Hommes à prostate petite ou moyenne insuffisamment améliorés par les médicaments',
          'Hommes à risque anesthésique élevé chez qui il faut éviter les conditions de bloc',
          'Hommes énonçant la préservation de l’éjaculation comme priorité',
          'Hommes acceptant une amélioration survenant en semaines plutôt qu’immédiatement',
          'Hommes sélectionnés sous anticoagulants chez qui on souhaite éviter un geste hémorragique — la gestion du traitement reste individuelle'
        ],
        notSuitable: [
          'Hommes à prostate de très grand volume',
          'Hommes sondés pour rétention et nécessitant un résultat rapide',
          'Hommes avec calculs vésicaux ou saignements importants récidivants — une méthode retirant du tissu est nécessaire',
          'Hommes chez qui une suspicion de cancer prostatique n’est pas levée : le bilan diagnostique est complété d’abord',
          'Hommes présentant une infection urinaire non traitée',
          'Hommes sélectionnés avec lobe médian marqué, chez qui le bénéfice attendu peut être limité',
          'Hommes porteurs d’une prothèse de hanche ou d’un implant métallique pelvien : l’indication est évaluée à part'
        ]
      },
      technology: [
        'Sonde micro-ondes transurétrale avec système de refroidissement',
        'Détermination du volume prostatique par échographie',
        'Débitmétrie et mesure du résidu post-mictionnel',
        'PSA et toucher rectal — pour évaluer séparément un cancer',
        'Cystoscopie si nécessaire — évaluation du lobe médian et de la vessie',
        'Sonde temporaire après le geste'
      ],
      surgeonExperience: {
        caseVolume: '',
        note: 'Ce qui détermine le résultat avec la TUMT est l’adéquation entre l’attente du patient et la nature de la méthode : il ne faut pas la proposer à quelqu’un qui veut un résultat rapide. Dans l’approche du Dr Müslüm Ergün, le choix se fait à partir du volume prostatique, du débit, du résidu, des traitements en cours, des attentes sur la fonction sexuelle et du risque anesthésique, considérés ensemble.'
      },
      timeline: [
        { when: 'À distance', title: 'Évaluation initiale', body: 'L’imagerie montrant le volume prostatique, la débitmétrie et le résidu, votre PSA, vos traitements (surtout anticoagulants), vos maladies cardiaques et pulmonaires et vos éventuels implants métalliques pelviens sont étudiés.' },
        { when: 'Jour 1', title: 'Examen et bilan', body: 'Examen, débitmétrie, résidu, ECBU. Si la culture est positive, le geste est reporté. Une cystoscopie évalue le lobe médian si nécessaire.' },
        { when: 'Jour 2', title: 'Geste', body: 'Sous anesthésie locale, avec sédation légère si besoin, la sonde de traitement est placée dans l’urètre et l’énergie micro-ondes délivrée. Une sonde temporaire est laissée en fin de geste. Vous rentrez le jour même.' },
        { when: 'Jours 3–7', title: 'Retrait de la sonde', body: 'La sonde est retirée ici et la première miction observée, afin qu’une difficulté soit réglée près de l’hôpital. Le vol retour n’est pas prévu le lendemain du retrait.' },
        { when: 'Semaines 2–6', title: 'Installation de l’effet', body: 'L’amélioration réelle devient perceptible durant cette période. Pollakiurie et brûlures sont habituelles les premières semaines ; c’est transitoire.' },
        { when: 'Mois 3', title: 'Évaluation du résultat', body: 'Débitmétrie de contrôle et résidu mesurent le résultat. Ces mesures sont la traduction objective de l’amélioration des symptômes.' }
      ],
      risks: [
        'DÉLAI D’ACTION ET AGGRAVATION LES PREMIÈRES SEMAINES : évolution attendue, mais déception sérieuse pour qui espérait un soulagement immédiat. D’où la discussion dès le départ',
        'SONDAGE PROLONGÉ : l’œdème lié à la chaleur fait que la sonde reste plusieurs jours ; chez certains cela dure davantage, ou la sonde doit être reposée temporairement après son retrait',
        'Infection urinaire',
        'Brûlures, pollakiurie et urgences — attendues les premières semaines',
        'Sang dans les urines — généralement léger et transitoire',
        'NÉCESSITÉ D’UN NOUVEAU GESTE : le tissu n’étant pas entièrement retiré, un second geste avec les années est plus probable qu’après les méthodes qui retirent du tissu',
        'PAS D’ANALYSE ANATOMOPATHOLOGIQUE : aucun tissu n’étant retiré, un foyer tumoral inattendu ne peut être découvert par cette voie',
        'Rarement, un rétrécissement du canal urinaire'
      ],
      alternatives: [
        'Surveillance et mesures hygiéno-diététiques — pour les symptômes légers : réduire les boissons le soir, limiter caféine et alcool, traiter la constipation',
        'Alpha-bloquants — améliorent le jet assez vite ; possibles vertiges et modifications de l’éjaculation',
        'Inhibiteurs de la 5-alpha-réductase — réduisent le volume en quelques mois ; ils abaissent le PSA d’environ la moitié',
        'Rezūm (vapeur d’eau) — comme la TUMT, fondé sur la chaleur et peu invasif ; le bénéfice est également différé',
        'Implant urétral prostatique (UroLift) — sans résection de tissu, pour certaines anatomies',
        'RTUP — résection endoscopique de référence ; du tissu est retiré et l’analyse est possible',
        'ThuLEP / HoLEP — énucléation ; pas de plafond pratique de volume et moindre risque de réintervention',
        'Embolisation des artères prostatiques — option de radiologie interventionnelle chez des patients sélectionnés'
      ],
      comparison: {
        title: 'TUMT, RTUP et ThuLEP : quel compromis vous convient',
        columns: ['Critère', 'TUMT (micro-ondes)', 'RTUP', 'ThuLEP (énucléation)'],
        rows: [
          { label: 'Devenir du tissu', values: ['Laissé en place, se rétracte sous la chaleur', 'Partiellement réséqué', 'Retiré en totalité'] },
          { label: 'Anesthésie', values: ['Locale ± sédation', 'Générale ou rachidienne', 'Générale ou rachidienne'] },
          { label: 'Bloc opératoire nécessaire', values: ['Non', 'Oui', 'Oui'] },
          { label: 'Délai d’action', values: ['Quelques semaines', 'Immédiat', 'Immédiat'] },
          { label: 'Limite de volume prostatique', values: ['Petit à moyen', 'Petit à moyen', 'Pas de plafond pratique'] },
          { label: 'Éjaculation préservée', values: ['Plus souvent préservée', 'Moins souvent', 'Moins souvent'] },
          { label: 'Risque de réintervention', values: ['Plus élevé', 'Intermédiaire', 'Plus faible'] },
          { label: 'Tissu analysable', values: ['Aucun tissu retiré', 'Oui, il est analysé', 'Oui, il est analysé'] },
          { label: 'Hospitalisation', values: ['Ambulatoire', '1 à 2 nuits', '1 nuit'] }
        ],
        note: 'La bonne question n’est pas « laquelle est la plus moderne » mais « quelle est ma priorité ». Si éviter le risque anesthésique et préserver l’éjaculation priment, la TUMT passe devant ; si la résolution définitive et durable des symptômes prime, c’est l’énucléation. Si vous venez de l’étranger, pesez aussi l’éventualité d’un second voyage.'
      },
      recovery: [
        { period: '48 premières heures', body: 'La sonde est en place. Un peu de sang dans les urines est habituel. Buvez abondamment. Fièvre ou absence d’écoulement par la sonde imposent un contact immédiat.' },
        { period: 'Après le retrait de la sonde', body: 'Pollakiurie, urgences et brûlures sont habituelles. Chez quelques patients la sonde doit être reposée temporairement ; aucun vol n’est donc prévu le lendemain du retrait.' },
        { period: 'Semaines 2–4', body: 'Une aggravation transitoire est possible durant cette période et ne signifie pas un échec. Le retour aux activités se fait généralement en quelques jours.' },
        { period: 'Mois 1–3', body: 'L’amélioration réelle s’installe. Un changement net du jet et des réveils nocturnes est attendu.' },
        { period: 'Long terme', body: 'Si les symptômes reviennent, la cause est recherchée ; toute récidive ne vient pas de la prostate. Une méthode retirant du tissu est utilisée si nécessaire.' }
      ],
      price: {
        from: 0,
        to: 0,
        currency: 'EUR',
        disclaimer:
          'Le montant dépend de la sonde de traitement utilisée, du type d’anesthésie et des examens complémentaires. Il n’y a pas de poste d’anatomopathologie puisque aucun tissu n’est retiré. Un devis écrit détaillé est remis après examen de vos documents.'
      },
      packageIncludes: [
        'Consultation, débitmétrie et mesure du résidu',
        'Bilans sanguins et urinaires, ECBU',
        'Dosage du PSA',
        'Détermination échographique du volume prostatique',
        'Anesthésie locale et sédation légère si nécessaire',
        'Sonde de traitement et consommables',
        'Sonde temporaire après le geste',
        'Retrait de la sonde et contrôle avant le retour',
        'Transferts aéroport–hôpital–hôtel',
        'Hébergement (patient et un accompagnant)',
        'Interprète médical et coordinateur patient',
        'Suivi à distance après le retour'
      ],
      faqs: [
        { q: 'Serai-je soulagé juste après le geste ?', a: 'Non. Le tissu se rétractant sous l’effet de la chaleur, l’amélioration s’installe en quelques semaines, et une aggravation transitoire les premières semaines est habituelle. Si vous attendez un soulagement immédiat, la TUMT n’est pas la bonne option — parlons-en dès le départ.' },
        { q: 'Je n’aurai donc pas d’anesthésie générale ?', a: 'La TUMT se fait généralement sous anesthésie locale, avec sédation légère si besoin, sans conditions de bloc. C’est son avantage pratique le plus net, particulièrement important en cas de risque anesthésique élevé.' },
        { q: 'Mon éjaculation sera-t-elle affectée ?', a: 'L’éjaculation rétrograde, fréquente après les méthodes qui retirent du tissu, est moins attendue après TUMT. Si la fonction sexuelle et l’éjaculation comptent pour vous, dites-le clairement : les options se classent en conséquence.' },
        { q: 'Combien de temps la sonde reste-t-elle ?', a: 'Généralement quelques jours ; l’œdème lié à la chaleur peut prolonger ce délai. La sonde est retirée ici afin qu’une difficulté soit réglée près de l’hôpital. Ne prévoyez pas votre vol le lendemain du retrait.' },
        { q: 'Faudra-t-il réopérer plus tard ?', a: 'Le tissu n’étant pas entièrement retiré, un second geste avec les années est plus probable qu’après les méthodes qui en retirent. Si vous venez de l’étranger, intégrez-le comme un second voyage.' },
        { q: 'Le tissu part-il en anatomopathologie ?', a: 'Non. Aucun tissu n’est retiré dans la TUMT, l’analyse est donc impossible. L’évaluation du risque de cancer par PSA et toucher rectal est faite à part et avec soin avant le geste. En cas de suspicion, le bilan est complété d’abord.' },
        { q: 'Ma prostate est volumineuse : est-ce adapté ?', a: 'La TUMT se situe au premier plan pour les prostates petites et moyennes. Pour un très gros volume, le bénéfice attendu est limité et l’énucléation (ThuLEP) est plus appropriée. La mesure du volume fonde cette décision.' },
        { q: 'Je prends des anticoagulants : est-ce possible ?', a: 'La TUMT n’est pas un geste hémorragique et peut être envisagée. La gestion du traitement reste toutefois individuelle ; n’arrêtez pas vos médicaments de votre propre initiative et envoyez la liste complète à l’avance.' },
        { q: 'J’ai une prothèse de hanche : est-ce un problème ?', a: 'Les implants métalliques pelviens font l’objet d’une évaluation spécifique. Indiquez la localisation et le type de votre prothèse lors de la prise de contact.' },
        { q: 'Combien de temps rester en Türkiye ?', a: 'Généralement 5 à 8 jours. Le retrait de la sonde et le premier contrôle étant réalisés ici, ne prévoyez pas le vol retour le lendemain du retrait.' },
        { q: 'Quels documents envoyer ?', a: 'L’imagerie montrant le volume prostatique, une éventuelle débitmétrie et le résidu, un PSA récent, un ECBU, la liste complète de vos traitements, vos maladies cardiaques et pulmonaires, et les informations sur un éventuel implant métallique pelvien.' }
      ],
      sources: [
        {
          label: 'Recommandations EAU sur les troubles mictionnels non neurogènes de l’homme — Association européenne d’urologie',
          url: 'https://uroweb.org/guidelines/management-of-non-neurogenic-male-luts'
        }
      ]
    },
    ru: {
      title: 'ТУМТ (трансуретральная микроволновая термотерапия)',
      summary:
        'Вариант лечения доброкачественного увеличения простаты, при котором микроволновая энергия, подаваемая через мочевые пути, нагревает и уменьшает ткань простаты — без операционной и общей анестезии.',
      metaTitle: 'ТУМТ: лечение простаты теплом микроволн',
      metaDescription:
        'Лечение простаты методом ТУМТ: кому подходит, как проводится, когда наступает эффект, чем отличается от ТУР и ThuLEP, риски и честные ожидания.',
      quickFacts: {
        duration: '30–60 минут',
        anesthesia: 'Местная анестезия ± лёгкая седация',
        hospitalStay: 'Амбулаторно',
        stayInTurkey: '5–8 дней',
        catheter: '3–7 дней',
        returnToWork: '2–5 дней',
        flightClearance: 'После удаления катетера и контроля'
      },
      definition: [
        'Доброкачественная гиперплазия простаты (ДГПЖ) — возрастное увеличение железы, сдавливающее мочеиспускательный канал снаружи. Слабая струя, затруднённое начало, учащённое мочеиспускание и ночные подъёмы — самые частые жалобы.',
        'При ТУМТ через специальный катетер, установленный в уретре, в ткань простаты подаётся микроволновая энергия, и ткань нагревается. Тепло создаёт контролируемое повреждение в препятствующей ткани; за недели она уменьшается, и давление на канал снижается. Во время процедуры система охлаждения защищает уретру и окружающие ткани.',
        'ГЛАВНАЯ ОТЛИЧИТЕЛЬНАЯ ЧЕРТА метода в том, что он не требует ни операционной, ни общей анестезии. Его можно выполнить амбулаторно под местной анестезией с лёгкой седацией при необходимости. Поэтому он выходит на первый план у мужчин с высоким анестезиологическим риском из-за болезней сердца или лёгких.',
        'ЭФФЕКТ НАСТУПАЕТ НЕ СРАЗУ. Поскольку ткань уменьшается под действием тепла, настоящее улучшение устанавливается за недели, а временное УСИЛЕНИЕ жалоб в первые недели — обычное явление. Это не означает неудачи. Мужчине, который ждёт немедленного облегчения, ТУМТ не подходит — и об этом прямо говорят заранее.',
        'ТКАНЬ НЕ УДАЛЯЕТСЯ, ПОЭТОМУ ГИСТОЛОГИИ НЕТ. При ТУР и энуклеации удалённая ткань направляется на гистологию, и неожиданный очаг рака может быть обнаружен. При ТУМТ такое исследование невозможно. Поэтому перед процедурой отдельно и тщательно оценивают риск рака по ПСА и пальцевому исследованию.',
        'ВЕРОЯТНОСТЬ ПОВТОРНОГО ВМЕШАТЕЛЬСТВА ВЫШЕ. Поскольку ткань удаляется не полностью, возврат жалоб с годами и необходимость второго вмешательства (ТУР, энуклеации или лекарств) более вероятны, чем при методах с удалением ткани. Если вы приезжаете из-за рубежа, заложите это в план как вторую поездку.',
        'МЕТОД ВЫДЕЛЯЕТСЯ СОХРАНЕНИЕМ СЕМЯИЗВЕРЖЕНИЯ. Ретроградное семяизвержение, частое после методов с удалением ткани, после ТУМТ ожидается реже. Если половая функция и семяизвержение для вас в приоритете, скажите об этом прямо: варианты выстраиваются соответственно.'
      ],
      eligibility: {
        suitable: [
          'Мужчины с малой и средней простатой, которым недостаточно помогают лекарства',
          'Мужчины с высоким анестезиологическим риском, которым следует избегать условий операционной',
          'Мужчины, называющие приоритетом сохранение семяизвержения',
          'Мужчины, принимающие, что улучшение придёт за недели, а не сразу',
          'Отдельные мужчины, принимающие препараты, разжижающие кровь, у которых желательно избежать кровоточащего вмешательства — схема приёма всё равно планируется индивидуально'
        ],
        notSuitable: [
          'Мужчины с очень большой простатой',
          'Мужчины с катетером из-за задержки мочи, которым нужен быстрый результат',
          'Мужчины с камнями пузыря или повторными значимыми кровотечениями — нужен метод с удалением ткани',
          'Мужчины с неразрешённым подозрением на рак простаты: сначала завершают диагностику',
          'Мужчины с нелеченой инфекцией мочевых путей',
          'Отдельные мужчины с выраженной средней долей, у которых ожидаемая польза может быть ограничена',
          'Мужчины с протезом тазобедренного сустава или металлическим имплантом в тазу — пригодность оценивается отдельно'
        ]
      },
      technology: [
        'Трансуретральный микроволновый катетер с системой охлаждения',
        'Определение объёма простаты по УЗИ',
        'Урофлоуметрия и измерение остаточной мочи',
        'ПСА и пальцевое исследование — для отдельной оценки рака',
        'Цистоскопия при необходимости — оценка средней доли и пузыря',
        'Временный катетер после процедуры'
      ],
      surgeonExperience: {
        caseVolume: '',
        note: 'Результат ТУМТ определяется совпадением ожиданий пациента с природой метода: мужчине, которому нужен быстрый результат, ТУМТ предлагать не следует. В подходе доцента, д-ра Мюслюма Эргюна метод выбирают по объёму простаты, скорости потока, остаточной моче, принимаемым препаратам, ожиданиям в отношении половой функции и анестезиологическому риску — в совокупности.'
      },
      timeline: [
        { when: 'Дистанционно', title: 'Предварительная оценка', body: 'Изучают визуализацию с объёмом простаты, урофлоуметрию и остаточную мочу, ПСА, принимаемые препараты (особенно разжижающие кровь), болезни сердца и лёгких и наличие металлических имплантов в тазу.' },
        { when: '1-й день', title: 'Осмотр и обследование', body: 'Осмотр, урофлоуметрия, остаточная моча, анализ и посев мочи. При росте флоры процедуру откладывают. При необходимости цистоскопия оценивает среднюю долю.' },
        { when: '2-й день', title: 'Процедура', body: 'Под местной анестезией, при необходимости с лёгкой седацией, в уретру устанавливают лечебный катетер и подают микроволновую энергию. В конце оставляют временный катетер. Домой вы уходите в тот же день.' },
        { when: '3–7-й день', title: 'Удаление катетера', body: 'Катетер удаляют здесь и наблюдают первое мочеиспускание, чтобы при затруднении помощь была рядом с больницей. Обратный рейс не планируют на следующий день после удаления.' },
        { when: '2–6-я неделя', title: 'Установление эффекта', body: 'Настоящее улучшение становится заметным в этот период. Учащённое мочеиспускание и жжение в первые недели обычны; это временная фаза.' },
        { when: '3-й месяц', title: 'Оценка результата', body: 'Контрольная урофлоуметрия и остаточная моча измеряют результат. Эти измерения — объективное отражение того, насколько уменьшились жалобы.' }
      ],
      risks: [
        'ОТСРОЧЕННОЕ НАЧАЛО И УСИЛЕНИЕ ЖАЛОБ В ПЕРВЫЕ НЕДЕЛИ: ожидаемое течение, но серьёзное разочарование для того, кто рассчитывал на немедленное облегчение. Поэтому об этом говорят с самого начала',
        'БОЛЕЕ ДЛИТЕЛЬНЫЙ ПЕРИОД С КАТЕТЕРОМ: из-за отёка от тепла катетер остаётся несколько дней; у части пациентов дольше, либо после удаления его приходится устанавливать временно заново',
        'Инфекция мочевых путей',
        'Жжение, учащённое мочеиспускание и позывы — ожидаемы в первые недели',
        'Кровь в моче — обычно незначительная и временная',
        'НЕОБХОДИМОСТЬ ПОВТОРНОГО ВМЕШАТЕЛЬСТВА: поскольку ткань удаляется не полностью, второе вмешательство с годами вероятнее, чем после методов с удалением ткани',
        'ГИСТОЛОГИЯ НЕВОЗМОЖНА: ткань не удаляется, поэтому неожиданный очаг рака этим путём выявить нельзя',
        'Редко — сужение мочеиспускательного канала'
      ],
      alternatives: [
        'Наблюдение и коррекция образа жизни — при лёгких жалобах: меньше пить вечером, ограничить кофеин и алкоголь, устранить запоры',
        'Альфа-адреноблокаторы — сравнительно быстро улучшают поток; возможны головокружение и изменения семяизвержения',
        'Ингибиторы 5-альфа-редуктазы — уменьшают железу за месяцы; помните, что они примерно вдвое снижают ПСА',
        'Rezūm (водяной пар) — как и ТУМТ, основан на тепле и малотравматичен; эффект также отсроченный',
        'Простатический уретральный имплант (UroLift) — без удаления ткани, при подходящей анатомии',
        'ТУР — устоявшаяся эндоскопическая резекция; ткань удаляется и возможна гистология',
        'ThuLEP / HoLEP — энуклеация; практического потолка по объёму нет и вероятность повторного вмешательства ниже',
        'Эмболизация артерий простаты — вариант интервенционной радиологии у отобранных пациентов'
      ],
      comparison: {
        title: 'ТУМТ, ТУР и ThuLEP: какой компромисс вам подходит',
        columns: ['Критерий', 'ТУМТ (микроволны)', 'ТУР', 'ThuLEP (энуклеация)'],
        rows: [
          { label: 'Что происходит с тканью', values: ['Остаётся, уменьшается под действием тепла', 'Удаляется частично', 'Удаляется полностью'] },
          { label: 'Анестезия', values: ['Местная ± седация', 'Общая или спинальная', 'Общая или спинальная'] },
          { label: 'Нужна ли операционная', values: ['Нет', 'Да', 'Да'] },
          { label: 'Когда наступает эффект', values: ['В течение недель', 'Сразу', 'Сразу'] },
          { label: 'Ограничение по объёму', values: ['Малый и средний', 'Малый и средний', 'Практического потолка нет'] },
          { label: 'Сохранение семяизвержения', values: ['Чаще сохраняется', 'Реже', 'Реже'] },
          { label: 'Вероятность повторного вмешательства', values: ['Выше', 'Промежуточная', 'Ниже'] },
          { label: 'Ткань для гистологии', values: ['Ткань не удаляется', 'Да, исследуется', 'Да, исследуется'] },
          { label: 'Пребывание в стационаре', values: ['Амбулаторно', '1–2 ночи', '1 ночь'] }
        ],
        note: 'Правильный вопрос не «что современнее», а «каков мой приоритет». Если на первом месте избежать анестезиологического риска и сохранить семяизвержение — вперёд выходит ТУМТ; если окончательно и надолго решить мочевые жалобы — энуклеация. Если вы приезжаете из-за рубежа, взвесьте и вероятность второй поездки.'
      },
      recovery: [
        { period: 'Первые 48 часов', body: 'Катетер установлен. Небольшая примесь крови в моче обычна. Пейте много. Лихорадка или отсутствие оттока по катетеру требуют немедленного обращения.' },
        { period: 'После удаления катетера', body: 'Учащение, позывы и жжение обычны. Небольшому числу мужчин катетер приходится устанавливать временно заново; поэтому рейс на следующий день после удаления не планируют.' },
        { period: '2–4-я неделя', body: 'Временное усиление жалоб в этот период возможно и не означает неудачи. Возвращение к обычной активности обычно за несколько дней.' },
        { period: '1–3-й месяц', body: 'Настоящее улучшение устанавливается в этот период. Ожидается заметное изменение струи и числа ночных подъёмов.' },
        { period: 'Долгосрочно', body: 'Если жалобы возвращаются, выясняют причину; не всякий возврат исходит от простаты. При необходимости переходят к методу с удалением ткани.' }
      ],
      price: {
        from: 0,
        to: 0,
        currency: 'EUR',
        disclaimer:
          'Сумма зависит от используемого лечебного катетера, вида анестезии и дополнительных исследований. Статьи на гистологию нет, поскольку ткань не удаляется. Постатейное письменное предложение даётся после изучения ваших документов.'
      },
      packageIncludes: [
        'Осмотр, урофлоуметрия и измерение остаточной мочи',
        'Анализы крови и мочи, посев мочи',
        'Определение ПСА',
        'Определение объёма простаты по УЗИ',
        'Местная анестезия и лёгкая седация при необходимости',
        'Лечебный катетер и расходные материалы',
        'Временный катетер после процедуры',
        'Удаление катетера и контроль перед возвращением домой',
        'Трансферы аэропорт — больница — отель',
        'Проживание (пациент и один сопровождающий)',
        'Медицинский переводчик и координатор пациента',
        'Дистанционное наблюдение после возвращения'
      ],
      faqs: [
        { q: 'Станет ли легче сразу после процедуры?', a: 'Нет. Поскольку ткань уменьшается под действием тепла, улучшение устанавливается за недели, а временное усиление жалоб в первые недели обычно. Если вы ждёте немедленного облегчения, ТУМТ вам не подходит — обсудим это с самого начала.' },
        { q: 'Значит, общей анестезии не будет?', a: 'ТУМТ обычно выполняется под местной анестезией с лёгкой седацией при необходимости, условий операционной не требуется. Это самое явное практическое преимущество метода, особенно важное при высоком анестезиологическом риске.' },
        { q: 'Пострадает ли семяизвержение?', a: 'Ретроградное семяизвержение, частое после методов с удалением ткани, после ТУМТ ожидается реже. Если половая функция и семяизвержение для вас важны, скажите об этом прямо: варианты выстраиваются соответственно.' },
        { q: 'Сколько стоит катетер?', a: 'Обычно несколько дней; отёк от тепла может удлинить этот срок. Катетер удаляют здесь, чтобы при затруднении помощь была рядом с больницей. Не планируйте рейс на следующий день после удаления.' },
        { q: 'Понадобится ли операция позже?', a: 'Поскольку ткань удаляется не полностью, второе вмешательство с годами вероятнее, чем после методов с удалением ткани. Если вы приезжаете из-за рубежа, заложите это как вторую поездку.' },
        { q: 'Идёт ли удалённая ткань на гистологию?', a: 'Нет. При ТУМТ ткань не удаляется, поэтому гистологическое исследование невозможно. Поэтому перед процедурой отдельно и тщательно оценивают риск рака по ПСА и осмотру. При подозрении сначала завершают диагностику.' },
        { q: 'У меня большая простата — подходит ли мне это?', a: 'ТУМТ выходит на первый план при малой и средней простате. При очень большом объёме ожидаемая польза ограничена, и уместнее энуклеация (ThuLEP). Измерение объёма — основа этого решения.' },
        { q: 'Я принимаю препараты, разжижающие кровь, — можно ли?', a: 'ТУМТ не является кровоточащим вмешательством и может рассматриваться у таких пациентов. Тем не менее схема приёма планируется индивидуально; не отменяйте препарат сами и пришлите полный список заранее.' },
        { q: 'У меня протез тазобедренного сустава — это проблема?', a: 'Металлические импланты в тазу оцениваются на пригодность отдельно. При обращении сообщите расположение и тип протеза.' },
        { q: 'Сколько нужно пробыть в Турции?', a: 'Обычно 5–8 дней. Поскольку удаление катетера и первый контроль проводятся здесь, не планируйте обратный рейс на следующий день после удаления.' },
        { q: 'Какие документы прислать?', a: 'Визуализацию с объёмом простаты, урофлоуметрию и остаточную мочу, если они есть, свежий ПСА, анализ мочи, полный список принимаемых препаратов, сведения о болезнях сердца и лёгких и о металлических имплантах в тазу.' }
      ],
      sources: [
        {
          label: 'Рекомендации EAU по ведению ненейрогенных расстройств мочеиспускания у мужчин — Европейская ассоциация урологии',
          url: 'https://uroweb.org/guidelines/management-of-non-neurogenic-male-luts'
        }
      ]
    },
    ar: {
      title: 'المعالجة الحرارية بالموجات الدقيقة عبر الإحليل (TUMT)',
      summary:
        'خيار في تضخم البروستاتا الحميد تُستعمَل فيه طاقة الموجات الدقيقة عبر المسالك لتسخين نسيج البروستاتا وتصغيره، من دون غرفة عمليات ومن دون تخدير عام.',
      metaTitle: 'TUMT: معالجة البروستاتا بحرارة الموجات الدقيقة',
      metaDescription:
        'معالجة البروستاتا بـ TUMT: لمن تصلح، وكيف تُجرى، ومتى يبدأ أثرها، وما الفرق عن TURP وThuLEP، والمخاطر وتوقعات صادقة.',
      quickFacts: {
        duration: '30 إلى 60 دقيقة',
        anesthesia: 'تخدير موضعي مع تركين خفيف عند الحاجة',
        hospitalStay: 'من دون مبيت',
        stayInTurkey: '5 إلى 8 أيام',
        catheter: '3 إلى 7 أيام',
        returnToWork: 'يومان إلى خمسة',
        flightClearance: 'بعد نزع القسطرة والمراجعة'
      },
      definition: [
        'تضخم البروستاتا الحميد هو كِبر الغدة مع العمر فتضغط قناة البول من الخارج. وأكثر الشكاوى شيوعًا ضعف التيار وصعوبة البدء وتكرار التبول والاستيقاظ ليلًا.',
        'وفي TUMT تُعطى طاقة الموجات الدقيقة إلى نسيج البروستاتا عبر قسطرة خاصة تُوضَع في الإحليل فيسخن النسيج. وتُحدِث الحرارة أذيّة مضبوطة في النسيج المسدّ؛ فيتقلّص خلال أسابيع ويقلّ الضغط على القناة. ويحمي نظام تبريد الإحليل والأنسجة المجاورة أثناء الإجراء.',
        'والسمة الفاصلة لهذه الطريقة أنها لا تحتاج غرفة عمليات ولا تخديرًا عامًّا. ويمكن إجراؤها من دون مبيت بتخدير موضعي مع تركين خفيف عند اللزوم. ولذلك تتقدم خيارًا عند الرجال ذوي الخطورة التخديرية العالية بسبب أمراض القلب أو الرئة.',
        'ولا يبدأ الأثر فورًا. فلأن النسيج يتقلّص بالحرارة يستقر التحسن الحقيقي خلال أسابيع، ومن المعتاد أن تزداد الشكوى زيادة مؤقتة في الأسابيع الأولى. وهذا لا يعني الفشل. ومن ينتظر ارتياحًا فوريًا فـ TUMT ليست الخيار الصحيح له — ويُقال ذلك بوضوح مسبقًا.',
        'ولا يُزال نسيج، ومن ثم لا فحص مرضي. ففي TURP والاستئصال يُرسَل النسيج المُزال إلى علم الأمراض وقد يُكتشَف بؤرة سرطان غير متوقعة. أما في TUMT فهذا الفحص غير ممكن. ولذلك يُقيَّم خطر السرطان مسبقًا وبعناية بـ PSA والفحص بالإصبع.',
        'واحتمال الحاجة إلى تدخل جديد أعلى. فلأن النسيج لا يُزال كاملًا تكون عودة الشكوى مع السنين والحاجة إلى إجراء ثانٍ (TURP أو استئصال أو دواء) أكثر احتمالًا من الطرق التي تزيل النسيج. وإن كنت قادمًا من الخارج فاحسب ذلك سفرة ثانية في خطتك.',
        'وتتقدم هذه الطريقة في الحفاظ على القذف. فالقذف الراجع الشائع بعد الطرق التي تزيل النسيج أقل توقعًا بعد TUMT. فإن كانت الوظيفة الجنسية والقذف أولويتك فقل ذلك صراحة؛ وتُرتَّب الخيارات تبعًا لذلك.'
      ],
      eligibility: {
        suitable: [
          'الرجال ذوو البروستاتا الصغيرة إلى المتوسطة ممن لا تكفيهم الأدوية',
          'الرجال ذوو الخطورة التخديرية العالية ممن ينبغي تجنّب ظروف غرفة العمليات عندهم',
          'الرجال الذين يذكرون الحفاظ على القذف أولويةً',
          'الرجال الذين يقبلون تحسنًا يأتي خلال أسابيع لا فورًا',
          'الرجال المختارون ممن يستعملون مميعات الدم ويُرغَب في تجنّب إجراء نازف — وتبقى إدارة الأدوية فردية'
        ],
        notSuitable: [
          'الرجال ذوو البروستاتا الكبيرة جدًا',
          'الرجال الذين وُضعت لهم قسطرة بسبب احتباس ويحتاجون نتيجة سريعة',
          'الرجال ذوو حصى المثانة أو النزف المتكرر الشديد — فتلزم طريقة تزيل النسيج',
          'الرجال الذين لم يُستبعَد عندهم الاشتباه بسرطان البروستاتا: يُستكمَل التقييم التشخيصي أولًا',
          'الرجال المصابون بالتهاب بولي غير معالَج',
          'الرجال المختارون ذوو فص أوسط بارز، وقد تكون الفائدة المرجوّة محدودة',
          'الرجال ذوو مفصل ورك صناعي أو غرسة معدنية في الحوض؛ وتُقيَّم الملاءمة على حدة'
        ]
      },
      technology: [
        'قسطرة موجات دقيقة عبر الإحليل مع نظام تبريد',
        'تحديد حجم البروستاتا بالموجات فوق الصوتية',
        'قياس تدفق البول وقياس البول المتبقي',
        'تحليل PSA والفحص بالإصبع — لتقييم السرطان على حدة',
        'تنظير المثانة عند الحاجة — لتقييم الفص الأوسط والمثانة',
        'قسطرة مؤقتة بعد الإجراء'
      ],
      surgeonExperience: {
        caseVolume: '',
        note: 'ما يحدد نتيجة TUMT هو توافق توقع المريض مع طبيعة الطريقة: فمن يريد نتيجة سريعة لا ينبغي أن تُعرَض عليه. وفي منهج الأستاذ المشارك د. مسلم إرغن يُختار الأسلوب بالنظر معًا إلى حجم البروستاتا وسرعة التدفق والبول المتبقي والأدوية المستعملة وتوقعات الوظيفة الجنسية وخطورة التخدير.'
      },
      timeline: [
        { when: 'عن بُعد', title: 'التقييم الأولي', body: 'يُراجَع التصوير الذي يبيّن حجم البروستاتا، وقياس التدفق والبول المتبقي، وقيمة PSA، وأدويتك (ولا سيما مميعات الدم)، وأمراض القلب والرئة لديك، وأي غرسات معدنية في الحوض.' },
        { when: 'اليوم الأول', title: 'الفحص والتحاليل', body: 'فحص وقياس تدفق وبول متبقٍّ وتحليل بول وزرع. وإن نما في الزرع جرثوم أُجّل الإجراء. ويقيّم التنظير الفص الأوسط عند الحاجة.' },
        { when: 'اليوم الثاني', title: 'الإجراء', body: 'بتخدير موضعي ومع تركين خفيف عند اللزوم تُوضَع قسطرة المعالجة في الإحليل وتُعطى طاقة الموجات الدقيقة. وتُترَك في النهاية قسطرة مؤقتة. وتعود إلى بيتك في اليوم نفسه.' },
        { when: 'اليوم الثالث إلى السابع', title: 'نزع القسطرة', body: 'تُنزَع القسطرة هنا ويُراقَب أول تبول، كي تُحَل أي صعوبة قرب المستشفى. ولا تُحجَز رحلة العودة في اليوم التالي للنزع.' },
        { when: 'الأسبوع الثاني إلى السادس', title: 'استقرار الأثر', body: 'يتضح التحسن الحقيقي في هذه المدة. وتكرار التبول والحرقة معتادان في الأسابيع الأولى؛ وهي مرحلة مؤقتة.' },
        { when: 'الشهر الثالث', title: 'تقييم النتيجة', body: 'يُقاس الناتج بقياس التدفق والبول المتبقي في المراجعة. وهذان القياسان هما المقابل الموضوعي لمقدار تحسن الشكوى.' }
      ],
      risks: [
        'تأخر بدء الأثر وازدياد الشكوى في الأسابيع الأولى: مسار متوقَّع، لكنه خيبة كبيرة لمن انتظر ارتياحًا فوريًا. ولذلك يُناقَش منذ البداية',
        'طول مدة القسطرة: بسبب الوذمة الناتجة عن الحرارة تبقى القسطرة أيامًا؛ وقد تطول عند بعضهم أو تلزم إعادتها مؤقتًا بعد نزعها',
        'التهاب المسالك البولية',
        'حرقة وتكرار تبول وإلحاح — متوقعة في الأسابيع الأولى',
        'دم في البول — خفيف ومؤقت عادة',
        'الحاجة إلى تدخل جديد: لأن النسيج لا يُزال كاملًا يكون الإجراء الثاني مع السنين أكثر احتمالًا من الطرق التي تزيل النسيج',
        'تعذّر الفحص المرضي: لأن النسيج لا يُزال فلا يمكن اكتشاف بؤرة سرطان غير متوقعة بهذه الطريقة',
        'نادرًا تضيّق في قناة البول'
      ],
      alternatives: [
        'المراقبة وتعديل نمط الحياة — في الشكوى الخفيفة: تقليل الشرب مساءً والحد من الكافيين والكحول ومعالجة الإمساك',
        'حاصرات ألفا — تُحسّن التيار سريعًا نسبيًا؛ وقد تُحدث دوارًا وتغيّرًا في القذف',
        'مثبطات اختزال ألفا-5 — تُصغّر الغدة خلال أشهر؛ وتخفض PSA إلى نحو النصف',
        'Rezūm (بخار الماء) — كـ TUMT يعتمد الحرارة وأقل تدخلًا؛ وفائدته متأخرة أيضًا',
        'الدعامة الإحليلية البروستاتية (UroLift) — من دون إزالة نسيج، لتشريح معيّن',
        'TURP — الاستئصال المنظاري الراسخ؛ ويُزال نسيج ويمكن فحصه مرضيًا',
        'ThuLEP / HoLEP — استئصال؛ ولا سقف عمليًا للحجم واحتمال التدخل الجديد أقل',
        'إصمام شرايين البروستاتا — خيار في الأشعة التداخلية عند مرضى مختارين'
      ],
      comparison: {
        title: 'TUMT وTURP وThuLEP: أيّ موازنة تناسبك',
        columns: ['المعيار', 'TUMT (موجات دقيقة)', 'TURP', 'ThuLEP (استئصال)'],
        rows: [
          { label: 'ماذا يحدث للنسيج', values: ['يبقى ويتقلّص بالحرارة', 'يُكشَط جزئيًا', 'يُزال كاملًا'] },
          { label: 'التخدير', values: ['موضعي مع تركين عند اللزوم', 'عام أو نصفي', 'عام أو نصفي'] },
          { label: 'هل تلزم غرفة عمليات', values: ['لا', 'نعم', 'نعم'] },
          { label: 'متى تبدأ الفائدة', values: ['خلال أسابيع', 'فورًا', 'فورًا'] },
          { label: 'حدّ حجم البروستاتا', values: ['صغيرة إلى متوسطة', 'صغيرة إلى متوسطة', 'لا سقف عمليًا'] },
          { label: 'الحفاظ على القذف', values: ['يُحفَظ أكثر', 'أقل احتمالًا', 'أقل احتمالًا'] },
          { label: 'احتمال تدخل جديد', values: ['أعلى', 'بينهما', 'أقل'] },
          { label: 'نسيج للفحص المرضي', values: ['لا يُزال نسيج', 'نعم ويُفحَص', 'نعم ويُفحَص'] },
          { label: 'الإقامة', values: ['من دون مبيت', 'ليلة إلى ليلتين', 'ليلة واحدة'] }
        ],
        note: 'السؤال الصحيح ليس «أيهما أحدث» بل «ما أولويتي». فإن كان تجنّب خطورة التخدير والحفاظ على القذف أولًا تقدّمت TUMT؛ وإن كان حلّ الشكوى البولية حلًّا حاسمًا ودائمًا أولًا تقدّم الاستئصال. وإن كنت قادمًا من الخارج فوازن أيضًا احتمال سفرة ثانية.'
      },
      recovery: [
        { period: 'أول 48 ساعة', body: 'القسطرة موضوعة. وقليل من الدم في البول معتاد. اشرب كثيرًا. أما الحمى أو انقطاع تصريف القسطرة فتستدعي تواصلًا فوريًا.' },
        { period: 'بعد نزع القسطرة', body: 'تكرار التبول والإلحاح والحرقة أمور معتادة. ويحتاج عدد قليل إلى إعادة القسطرة مؤقتًا؛ ولهذا لا تُحجَز رحلة في اليوم التالي للنزع.' },
        { period: 'الأسبوع الثاني إلى الرابع', body: 'قد تزداد الشكوى زيادة مؤقتة في هذه المدة وهذا لا يعني الفشل. والعودة إلى النشاط المعتاد تكون غالبًا خلال أيام قليلة.' },
        { period: 'الشهر الأول إلى الثالث', body: 'يستقر التحسن الحقيقي في هذه المدة. ويُتوقَّع تغيّر واضح في التيار وفي الاستيقاظ ليلًا.' },
        { period: 'على المدى البعيد', body: 'إن عادت الشكوى بُحث عن السبب؛ وليست كل عودة من البروستاتا. ويُنتقَل عند اللزوم إلى طريقة تزيل النسيج.' }
      ],
      price: {
        from: 0,
        to: 0,
        currency: 'EUR',
        disclaimer:
          'يتوقف المبلغ على قسطرة المعالجة المستعملة ونوع التخدير والفحوص الإضافية. ولا يوجد بند للفحص المرضي لأن النسيج لا يُزال. ويُقدَّم عرض مكتوب مفصّل بعد مراجعة فحوصك.'
      },
      packageIncludes: [
        'الفحص وقياس التدفق والبول المتبقي',
        'تحاليل الدم والبول وزرع البول',
        'قياس PSA',
        'تحديد حجم البروستاتا بالموجات فوق الصوتية',
        'التخدير الموضعي والتركين الخفيف عند اللزوم',
        'قسطرة المعالجة والمستلزمات',
        'قسطرة مؤقتة بعد الإجراء',
        'نزع القسطرة ومراجعة قبل العودة',
        'التنقلات بين المطار والمستشفى والفندق',
        'الإقامة (المريض ومرافق واحد)',
        'مترجم طبي ومنسّق للمرضى',
        'متابعة عن بُعد بعد العودة'
      ],
      faqs: [
        { q: 'هل أرتاح مباشرة بعد الإجراء؟', a: 'لا. فلأن النسيج يتقلّص بالحرارة يستقر التحسن خلال أسابيع، ومن المعتاد ازدياد الشكوى ازديادًا مؤقتًا في الأسابيع الأولى. فإن كنت تنتظر ارتياحًا فوريًا فـ TUMT ليست خيارك الصحيح — ولنناقش ذلك منذ البداية.' },
        { q: 'إذن لن أتلقّى تخديرًا عامًّا؟', a: 'تُجرى TUMT عادة بتخدير موضعي مع تركين خفيف عند اللزوم ومن دون ظروف غرفة العمليات. وهذه أوضح ميزة عملية للطريقة، وهي مهمة خصوصًا عند ارتفاع خطورة التخدير.' },
        { q: 'هل يتأثر قذفي؟', a: 'القذف الراجع الشائع بعد الطرق التي تزيل النسيج أقل توقعًا بعد TUMT. فإن كانت الوظيفة الجنسية والقذف مهمّين لك فقل ذلك صراحة؛ وتُرتَّب الخيارات تبعًا لذلك.' },
        { q: 'كم تبقى القسطرة؟', a: 'أيامًا قليلة عادة؛ وقد تطول بسبب الوذمة الحرارية. وتُنزَع هنا كي تُحَل أي صعوبة قرب المستشفى. ولا تخطّط رحلتك في اليوم التالي للنزع.' },
        { q: 'هل سأحتاج عملية لاحقًا؟', a: 'لأن النسيج لا يُزال كاملًا يكون الإجراء الثاني مع السنين أكثر احتمالًا من الطرق التي تزيله. وإن كنت قادمًا من الخارج فاحسب ذلك سفرة ثانية.' },
        { q: 'هل يُرسَل النسيج إلى الفحص المرضي؟', a: 'لا. فلا يُزال نسيج في TUMT، ومن ثم يتعذّر الفحص المرضي. ولذلك يُقيَّم خطر السرطان مسبقًا وبعناية بـ PSA والفحص. وعند الاشتباه يُستكمَل التقييم التشخيصي أولًا.' },
        { q: 'بروستاتي كبيرة، هل تناسبني؟', a: 'تتقدم TUMT في البروستاتا الصغيرة والمتوسطة. وفي الحجم الكبير جدًا تكون الفائدة المرجوّة محدودة ويكون الاستئصال (ThuLEP) أنسب. وقياس الحجم أساس هذا القرار.' },
        { q: 'أستعمل مميعات الدم، هل يمكن؟', a: 'TUMT ليست إجراءً نازفًا ويمكن النظر فيها عند هؤلاء المرضى. ومع ذلك تُخطَّط إدارة الأدوية لكل مريض على حدة؛ فلا توقف دواءك من تلقاء نفسك وأرسل القائمة الكاملة مسبقًا.' },
        { q: 'لديّ مفصل ورك صناعي، هل هذا مشكلة؟', a: 'تُقيَّم الغرسات المعدنية في الحوض على حدة من حيث الملاءمة. فأخبرنا بموضع غرستك ونوعها عند التواصل.' },
        { q: 'كم أبقى في تركيا؟', a: 'عادة من 5 إلى 8 أيام. ولأن نزع القسطرة والمراجعة الأولى يتمان هنا فلا تخطّط رحلة العودة في اليوم التالي للنزع.' },
        { q: 'ما الوثائق التي أرسلها؟', a: 'التصوير الذي يبيّن حجم البروستاتا، وقياس التدفق والبول المتبقي إن وُجدا، وPSA حديث، وتحليل بول، وقائمة كاملة بأدويتك، وأمراض القلب والرئة لديك، ومعلومات عن أي غرسة معدنية في الحوض.' }
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
