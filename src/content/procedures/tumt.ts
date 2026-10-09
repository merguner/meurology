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
