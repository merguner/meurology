import type { Treatment, TreatmentCategory } from './types';
import { treatmentCategory } from './types';
import { assertTreatmentsValid } from './validate';

/**
 * TEDAVİ İÇERİKLERİ
 * ------------------------------------------------------------------
 * - Metinler genel/eğitici bilgilendirme amaçlıdır; tıbbi tavsiye değildir.
 * - Fiyat (priceRangeEUR) ve video (videoEmbedUrl) alanları doğrulanmış veri
 *   gelene kadar BOŞ bırakılır; boşken ilgili bölüm hiç render edilmez.
 * - Vaka sayıları burada tutulmaz; tek kaynak content/caseStats.ts.
 * - Yeni dil eklerken ilgili tedavinin i18n.<locale> alanını doldurun.
 */

export const treatments: Treatment[] = [
  {
    /**
     * TASLAK — cerrah onayına sunuldu, onaylanana kadar yayında görünmez.
     * ThuLEP sayfasıyla YİNELENEN İÇERİK OLMAMASI için vurgu bilinçli olarak
     * farklı: burada kılavuz konumu, uzun dönem veriler ve hacimden bağımsızlık
     * öne çıkar; karşılaştırma tablosu da farklıdır (HoLEP / TURP / açık cerrahi).
     * Kaynak: EAU non-neurogenic male LUTS kılavuzu. Kaynaksız oran YAZILMAMIŞTIR.
     */
    draft: true,
    slug: 'holep',
    parent: 'bph-prostat-buyumesi',
    lastReviewed: '2026-10-04',
    icon: 'prostate',
    offersConsultation: false,
    i18n: {
      tr: {
        title: 'HoLEP (Holmiyum Lazerle Prostat Enükleasyonu)',
        summary:
          'Tıkayıcı prostat dokusunun holmiyum lazerle bütün olarak çıkarıldığı; enükleasyon yöntemleri içinde uzun dönem sonuçları en çok çalışılmış olan ameliyat.',
        metaTitle: 'HoLEP Nedir? Holmiyum Lazerle Prostat Enükleasyonu',
        metaDescription:
          'HoLEP ile iyi huylu prostat büyümesi cerrahisi: kimlere uygun, nasıl yapılır, riskler, iyileşme ve TURP ile açık cerrahiye göre farkları.',
        quickFacts: {
          duration: '60–150 dakika',
          anesthesia: 'Genel veya spinal anestezi',
          hospitalStay: '1 gece',
          stayInTurkey: '5–7 gün',
          catheter: '1–2 gün',
          returnToWork: '2–3 hafta',
          flightClearance: '7. günden sonra'
        },
        definition: [
          'Prostat, mesanenin hemen altında idrar kanalını çepeçevre saran bir bezdir. Yaşla birlikte büyüdüğünde kanalı dıştan sıkıştırır ve mesane, idrarı dışarı atabilmek için giderek daha fazla zorlanır. Şikâyetler çoğu zaman yavaş ilerler: önce akımda incelme ve gece kalkmalar, sonra tam boşaltamama hissi, ileri aşamada ise idrar yapamama veya sondaya bağımlılık.',
          'HoLEP, bu tıkayıcı dokunun holmiyum lazer yardımıyla kapsülünden ayrılıp bütün hâlinde çıkarıldığı kapalı bir ameliyattır. Holmiyum lazer darbeli (pulsed) çalışır; dokuyu çok kısa aralıklarla gönderilen enerji darbeleriyla keser ve aynı anda kanamayı kontrol eder. İşlem tamamen idrar kanalından yapılır, vücutta kesi açılmaz.',
          'HoLEP’i diğer yöntemlerden ayıran en önemli özellik, PROSTAT HACMİNDEN BAĞIMSIZ uygulanabilmesidir. Avrupa Üroloji Derneği kılavuzlarında, küçük prostatlarda TURP’a ve büyük prostatlarda açık (basit) prostatektomiye alternatif olarak yer alır. Enükleasyon teknikleri arasında uzun dönem takip verisi en geniş olan yöntem de HoLEP’tir.',
          'Çıkarılan doku mesane içinde morselatörle küçültülerek alınır ve tamamı patolojiye gönderilir. Dokuyu buharlaştıran yöntemlerde bu inceleme mümkün olmaz; HoLEP’te ise beklenmedik bir kanser odağı varsa tanı konulabilir.',
          'HoLEP’in bilinen bir özelliği, cerrah açısından öğrenme eğrisinin dik olmasıdır. Yöntemin sonuçları, uygulayan ekibin deneyimiyle doğrudan ilişkilidir; bu nedenle merkez seçimi, yöntem seçimi kadar önemlidir.'
        ],
        eligibility: {
          suitable: [
            'Her hacimdeki prostat — özellikle 80 ml üzerindeki, TURP için uygun olmayan büyük bezler',
            'İlaç tedavisinden fayda görmeyen veya yan etkiler nedeniyle ilacı bırakan hastalar',
            'Sondaya bağımlı hâle gelmiş veya tekrarlayan idrar retansiyonu yaşayan hastalar',
            'Prostat büyümesine bağlı mesane taşı ya da tekrarlayan enfeksiyon gelişen hastalar',
            'Açık prostatektomi önerilmiş ancak kapalı bir seçenek arayan hastalar'
          ],
          notSuitable: [
            'Aktif idrar yolu enfeksiyonu olanlar — önce enfeksiyon tedavi edilir',
            'Prostat kanseri tanısı doğrulanmış hastalar — tedavi planı farklıdır, HoLEP tıkanıklık amaçlı sınırlı durumlarda değerlendirilir',
            'Mesane kası kasılma gücünü büyük ölçüde kaybetmiş hastalarda tıkanıklık giderilse bile şikâyetler tam düzelmeyebilir',
            'Anestezi riski yüksek, eşlik eden ağır hastalığı olan hastalar',
            'Çocuk sahibi olmayı planlayanlar — retrograd ejakülasyon olasılığı ameliyat öncesi konuşulmalıdır'
          ]
        },
        technology: [
          'Holmiyum lazer sistemi (darbeli enerji)',
          'Prostat hacminden bağımsız uygulanabilen enükleasyon tekniği',
          'Morselatör ile dokunun mesaneden çıkarılması',
          'Çıkarılan dokunun tamamının patolojik incelemesi'
        ],
        surgeonExperience: {
          caseVolume: '',
          note:
            'Doç. Dr. Müslüm Ergün lazer enükleasyon teknikleriyle çalışmakta ve bu alanda hakemli yayını bulunmaktadır. Yöntem seçimi, prostat hacmi ve eşlik eden durumlar değerlendirilerek yapılır.'
        },
        timeline: [
          {
            when: 'Uzaktan',
            title: 'Dosya değerlendirmesi',
            body: 'Prostat hacmi (ultrason veya MR), üroflowmetri, IPSS skoru, PSA ve işeme sonrası kalan idrar incelenir. Hacim büyükse HoLEP’in sağladığı avantaj ayrıca değerlendirilir.'
          },
          {
            when: '1. gün',
            title: 'Varış ve hazırlık',
            body: 'Muayene, eksik tetkiklerin tamamlanması ve anestezi değerlendirmesi yapılır. Kan sulandırıcı kullanıyorsanız yönetimi bu aşamada planlanır.'
          },
          {
            when: '2. gün',
            title: 'Ameliyat',
            body: 'HoLEP genel veya spinal anestezi altında uygulanır. Süre prostat hacmiyle doğru orantılıdır; büyük bezlerde işlem daha uzun sürebilir.'
          },
          {
            when: '3. gün',
            title: 'Sonda alımı ve taburculuk',
            body: 'İdrar berraklaştığında sonda alınır. Kendiliğinden idrar yapıldığı görüldükten sonra taburcu olursunuz.'
          },
          {
            when: '7–10. gün',
            title: 'Kontrol ve patoloji',
            body: 'Kontrol muayenesi, patoloji sonucunun değerlendirilmesi ve dönüş uçuşu için onay.'
          }
        ],
        risks: [
          'Ameliyat sonrası ilk dönemde idrar yaparken yanma ve ani sıkışma hissi',
          'Geçici stres tipi idrar kaçırma — enükleasyon yöntemlerinde ilk haftalarda görülebilir, çoğu hastada geriler',
          'Retrograd ejakülasyon: sık görülür, zararsızdır ancak doğurganlığı etkiler',
          'İdrar yolu enfeksiyonu',
          'Üretra darlığı veya mesane boynu darlığı — seyrek; gerekirse ek işlemle giderilir',
          'Kanama; morselasyon sırasında mesane yaralanması (nadir)',
          'Anesteziye bağlı genel riskler'
        ],
        alternatives: [
          'ThuLEP — tulyum lazerle enükleasyon (aynı mantık, farklı lazer)',
          'TURP — klasik endoskopik rezeksiyon (küçük ve orta hacimlerde)',
          'Rezūm — su buharıyla hacim küçültme (küçük prostatlarda, daha az invaziv)',
          'İlaç tedavisi (alfa blokerler, 5-alfa redüktaz inhibitörleri)',
          'Açık (basit) prostatektomi — HoLEP’in giderek yerini aldığı klasik seçenek'
        ],
        comparison: {
          title: 'HoLEP, TURP ve açık prostatektomi karşılaştırması',
          columns: ['Ölçüt', 'HoLEP', 'TURP', 'Açık prostatektomi'],
          rows: [
            {
              label: 'Prostat hacmi sınırı',
              values: ['Hacimden bağımsız', 'Genellikle 80 ml altı', 'Büyük hacimler']
            },
            { label: 'Kesi', values: ['Yok (idrar kanalından)', 'Yok (idrar kanalından)', 'Karın alt kesisi'] },
            { label: 'Ortalama sonda süresi', values: ['1–2 gün', '2–3 gün', '4–7 gün'] },
            { label: 'Hastanede kalış', values: ['1 gece', '1–2 gece', '3–5 gece'] },
            { label: 'Doku patolojiye gönderilir', values: ['Evet', 'Evet', 'Evet'] },
            {
              label: 'Cerrahın öğrenme eğrisi',
              values: ['Dik — deneyim belirleyici', 'Yerleşik, yaygın', 'Yerleşik']
            }
          ],
          note:
            'Tablo genel bilgilendirme içindir. Yöntem; prostat hacmi, eşlik eden hastalıklar, pıhtılaşma durumu ve hastanın öncelikleri değerlendirilerek kişiye özel seçilir.'
        },
        recovery: [
          {
            period: 'İlk 48 saat',
            body: 'Sonda takılıdır ve mesane yıkaması uygulanabilir. İdrarda pembe renk beklenen bir bulgudur; bol sıvı alımı önerilir.'
          },
          {
            period: '1. hafta',
            body: 'Sonda alınmıştır. İdrar akımı belirgin biçimde rahatlar, buna karşılık yanma ve sıkışma hissi bir süre devam edebilir. Ağır kaldırma ve zorlanma önerilmez.'
          },
          {
            period: '2–3. hafta',
            body: 'Masa başı işe dönüş genellikle mümkündür. Pelvik taban egzersizleri, varsa kaçırmanın düzelmesini destekler.'
          },
          {
            period: '4–6. hafta',
            body: 'İdrar kontrolü büyük ölçüde oturur. Ağır fiziksel aktivite ve cinsel ilişki için hekim onayı beklenir.'
          },
          {
            period: '3. ay ve sonrası',
            body: 'IPSS skoru ve üroflowmetri tekrarlanarak düzelme nesnel olarak ölçülür. Uzun dönem takip, yöntemin kalıcılığını izlemek için önerilir.'
          }
        ],
        price: {
          from: 0,
          to: 0,
          currency: 'EUR',
          disclaimer:
            'Fiyat; prostat hacmi, işlem süresi, eşlik eden girişimler ve kalış süresine göre değişir. Kesin teklif dosya değerlendirmesi sonrasında verilir.'
        },
        packageIncludes: [
          'Ameliyat ve hastane yatışı',
          'Anestezi ve ameliyathane',
          'Ameliyat öncesi tetkikler',
          'Patolojik inceleme',
          'Havalimanı–hastane–otel transferleri',
          'Konaklama (hasta + 1 refakatçi)',
          'Tıbbi tercüman ve hasta koordinatörü',
          'Taburculuk sonrası online kontroller'
        ],
        faqs: [
          {
            q: 'HoLEP neden TURP’a ve açık ameliyata alternatif olarak anılıyor?',
            a: 'Çünkü prostat hacminden bağımsız uygulanabilir. TURP büyük bezlerde süre ve güvenlik açısından sınırlanırken, açık ameliyat kesi gerektirir ve iyileşme uzar. HoLEP her iki sınırlamayı da aşarak tıkayıcı dokunun bütün hâlinde çıkarılmasını sağlar. Avrupa Üroloji Derneği kılavuzları da yöntemi bu konumda değerlendirir.'
          },
          {
            q: 'HoLEP ile ThuLEP arasında nasıl seçim yapılıyor?',
            a: 'İkisi de aynı enükleasyon mantığını izler; fark lazerdedir. Holmiyum darbeli, tulyum sürekli dalga üretir. Hasta açısından süreç ve beklenen sonuçlar büyük ölçüde benzerdir. Seçim; prostat hacmi, pıhtılaşma durumu, cihaz uygunluğu ve cerrahın deneyimi birlikte değerlendirilerek yapılır.'
          },
          {
            q: 'Prostatım 100 ml’nin üzerinde, açık ameliyat şart mı?',
            a: 'Hayır. Bu hacimler HoLEP’in en belirgin avantaj sağladığı aralıktır; kesi yapılmadan tedavi edilebilir. Dosyanız değerlendirildikten sonra size özel öneri iletilir.'
          },
          {
            q: 'HoLEP’in öğrenme eğrisi zor deniyor; bu beni nasıl etkiler?',
            a: 'Bu, yöntemin sonuçlarının uygulayan ekibin deneyimine duyarlı olduğu anlamına gelir. Hasta açısından pratik sonucu şudur: HoLEP’te merkez ve cerrah seçimi, yöntemin kendisi kadar belirleyicidir. Ameliyat öncesi görüşmede bu konuyu açıkça sorabilirsiniz.'
          },
          {
            q: 'Uzun dönemde tekrar ameliyat gerekir mi?',
            a: 'Enükleasyon tıkayıcı dokuyu bütün hâlinde çıkardığı için kalıcı sonuç hedefler ve HoLEP bu açıdan en uzun takip verisine sahip yöntemdir. Yine de hiçbir yöntem tekrar gerekmeyeceğini garanti etmez; düzenli kontrol önerilir.'
          },
          {
            q: 'Sonda ne kadar kalır, ne zaman taburcu olurum?',
            a: 'Sonda genellikle 1–2 gün kalır; idrar berraklaştığında alınır. Kendiliğinden idrar yapabildiğiniz görüldükten sonra, çoğunlukla 1 gecelik yatışın ardından taburcu olursunuz.'
          },
          {
            q: 'Cinsel işlevim nasıl etkilenir?',
            a: 'Ereksiyon işlevi genellikle korunur. Retrograd ejakülasyon — menin mesaneye gitmesi — ise sık görülen bir değişikliktir ve doğurganlığı etkiler. Çocuk sahibi olma planınız varsa ameliyat öncesi mutlaka konuşulmalıdır.'
          },
          {
            q: 'İdrar kaçırma olur mu, kalıcı mıdır?',
            a: 'Enükleasyon sonrası ilk haftalarda stres tipi kaçırma görülebilir. Çoğu hastada kademeli olarak düzelir ve pelvik taban egzersizleri bu süreci hızlandırır. Kalıcı kaçırma seyrektir; riskiniz ameliyat öncesi değerlendirmede ayrıca konuşulur.'
          },
          {
            q: 'Kan sulandırıcı kullanıyorum, HoLEP uygun mu?',
            a: 'Lazer enükleasyonun kanama kontrolü, bu hastalarda yöntemi değerlendirilebilir kılar. Ancak ilacın kesilip kesilmeyeceğine sizi takip eden hekimle birlikte karar verilir; kendi başınıza bırakmayın.'
          }
        ],
        sources: [
          {
            label:
              'EAU Guidelines on Management of Non-Neurogenic Male LUTS — Avrupa Üroloji Derneği',
            url: 'https://uroweb.org/guidelines/management-of-non-neurogenic-male-luts'
          }
        ]
      }
    }
  },
  {
    /**
     * Cerrah tarafından 4 Ekim 2026 tarihinde onaylandı ve yayına alındı.
     * Kaynaklar: EAU non-neurogenic male LUTS kılavuzu + cerrahın 2025 ThuLEP yayını.
     */
    slug: 'thulep',
    parent: 'bph-prostat-buyumesi',
    lastReviewed: '2026-10-04',
    icon: 'prostate',
    offersConsultation: false,
    i18n: {
      tr: {
        title: 'ThuLEP (Tulyum Lazerle Prostat Enükleasyonu)',
        summary:
          'İyi huylu prostat büyümesinde tıkayıcı dokunun tulyum lazerle bütün olarak çıkarıldığı kapalı (endoskopik) yöntem.',
        metaTitle: 'ThuLEP Nedir? Tulyum Lazerle Prostat Enükleasyonu',
        metaDescription:
          'ThuLEP ile iyi huylu prostat büyümesi tedavisi: kimlere uygun, nasıl yapılır, riskler, iyileşme süreci ve HoLEP/TURP ile karşılaştırma.',
        quickFacts: {
          duration: '60–120 dakika',
          anesthesia: 'Genel veya spinal anestezi',
          hospitalStay: '1 gece',
          stayInTurkey: '5–7 gün',
          catheter: '1–2 gün',
          returnToWork: '2–3 hafta',
          flightClearance: '7. günden sonra'
        },
        definition: [
          'İyi huylu prostat büyümesi (BPH), yaşla birlikte prostat dokusunun büyüyerek idrar kanalını dıştan sıkıştırmasıdır. Zayıf idrar akımı, idrara başlamakta zorlanma, gece birkaç kez kalkma ve mesanenin tam boşalmadığı hissi en sık görülen şikâyetlerdir. İlerleyen durumlarda idrar yapamama (retansiyon), tekrarlayan idrar yolu enfeksiyonu veya mesane taşı gelişebilir.',
          'ThuLEP, tıkanıklığa yol açan prostat dokusunun tulyum lazer yardımıyla kapsülünden ayrılarak BÜTÜN HÂLİNDE çıkarıldığı endoskopik bir ameliyattır. Vücutta kesi yapılmaz; tüm işlem idrar kanalından girilerek gerçekleştirilir. Klasik TURP’ta doku küçük parçalar hâlinde kazınırken, enükleasyonda tıkayıcı doku bir bütün olarak soyulur; bu yaklaşım açık prostat ameliyatındaki mantığın kapalı yöntemle uygulanmasıdır.',
          'Tulyum lazer sürekli dalga üretir; dokuyu keserken aynı anda küçük damarları da kapatır. Bu özellik kanama kontrolünü kolaylaştırdığı için, büyük hacimli prostatlarda ve kan sulandırıcı kullanımı nedeniyle dikkat gerektiren seçilmiş hastalarda tercih edilebilir hâle gelir.',
          'Enükleasyonla çıkarılan doku, morselatör adı verilen bir cihazla mesane içinde küçültülerek dışarı alınır ve PATOLOJİK İNCELEMEYE gönderilir. Bu, dokunun buharlaştırıldığı yöntemlere göre önemli bir farktır: beklenmedik bir kanser odağı varsa tanı atlanmaz.'
        ],
        eligibility: {
          suitable: [
            'Orta ve büyük hacimli prostatı olan, ilaç tedavisinden yeterli fayda görmeyen hastalar',
            'İlaç yan etkileri nedeniyle tedaviyi sürdüremeyen hastalar',
            'Tekrarlayan idrar retansiyonu yaşayan veya sondaya bağımlı hâle gelmiş hastalar',
            'Prostat büyümesine bağlı tekrarlayan idrar yolu enfeksiyonu veya mesane taşı gelişenler',
            'Kanama kontrolü nedeniyle dikkat gerektiren, hekim değerlendirmesiyle uygun bulunan seçilmiş hastalar'
          ],
          notSuitable: [
            'Aktif idrar yolu enfeksiyonu olanlar — önce enfeksiyon tedavi edilir, ameliyat ertelenir',
            'Prostat kanseri şüphesi henüz netleşmemiş hastalar — önce tanısal değerlendirme tamamlanır',
            'Şikâyetleri tıkanıklıktan değil, mesane kasının işlev kaybından kaynaklanan hastalarda beklenen fayda sınırlı olabilir',
            'Eşlik eden hastalıkları nedeniyle anestezi riski yüksek olan hastalar',
            'Çocuk sahibi olma planı olanlar — retrograd ejakülasyon olasılığı nedeniyle ameliyat öncesi mutlaka konuşulmalıdır'
          ]
        },
        technology: [
          'Quanta tulyum lazer platformu',
          'Sürekli dalga tulyum: kesme ve kanama kontrolünü aynı anda sağlar',
          'Morselatör ile dokunun mesaneden güvenle çıkarılması',
          'Çıkarılan dokunun tamamının patolojik incelemeye gönderilmesi'
        ],
        surgeonExperience: {
          caseVolume: '',
          note:
            'Doç. Dr. Müslüm Ergün’ün ThuLEP tekniğine ilişkin, ameliyat sırası ve sonrası komplikasyonları değerlendiren hakemli bir yayını bulunmaktadır (Journal of Surgery and Medicine, 2025).'
        },
        timeline: [
          {
            when: 'Uzaktan',
            title: 'Ön değerlendirme',
            body: 'İdrar akım testi (üroflowmetri), IPSS semptom skoru, PSA değeri, prostat hacmi ve işeme sonrası kalan idrar miktarı incelenir; yöntemin size uygunluğu değerlendirilir.'
          },
          {
            when: '1. gün',
            title: 'Varış ve tetkikler',
            body: 'Yüz yüze muayene, eksik tetkiklerin tamamlanması ve anestezi değerlendirmesi yapılır.'
          },
          {
            when: '2. gün',
            title: 'İşlem',
            body: 'ThuLEP genel veya spinal anestezi altında uygulanır; işlem genellikle 60–120 dakika sürer ve kesi gerektirmez.'
          },
          {
            when: '3. gün',
            title: 'Sonda alımı ve taburculuk',
            body: 'İdrar berraklaştığında sonda alınır; kendiliğinden idrar yapıldığı görüldükten sonra taburculuk planlanır.'
          },
          {
            when: '7–10. gün',
            title: 'Kontrol ve patoloji',
            body: 'Kontrol muayenesi yapılır, patoloji sonucu değerlendirilir ve dönüş uçuşu için onay verilir.'
          }
        ],
        risks: [
          'İdrar yaparken geçici yanma ve ani sıkışma hissi',
          'Geçici stres tipi idrar kaçırma — çoğu hastada haftalar içinde geriler, pelvik taban egzersizleri bu süreci destekler',
          'Retrograd ejakülasyon: menin dışarı değil mesaneye gitmesi; sık görülür ve doğurganlığı etkiler',
          'İdrar yolu enfeksiyonu',
          'Üretra darlığı veya mesane boynu darlığı (daha seyrek; gerekirse ek işlem gerektirebilir)',
          'Kanama ve anesteziye bağlı genel cerrahi riskler'
        ],
        alternatives: [
          'İlaç tedavisi (alfa blokerler, 5-alfa redüktaz inhibitörleri)',
          'HoLEP — holmiyum lazerle enükleasyon',
          'TURP — klasik endoskopik rezeksiyon',
          'Rezūm — su buharı ile hacim küçültme (daha küçük prostatlarda)',
          'Açık (basit) prostatektomi — çok büyük prostatlarda, giderek daha seyrek'
        ],
        comparison: {
          title: 'ThuLEP, HoLEP, TURP ve Rezūm karşılaştırması',
          columns: ['Ölçüt', 'ThuLEP', 'HoLEP', 'TURP', 'Rezūm'],
          rows: [
            {
              label: 'Uygun prostat hacmi',
              values: ['Her hacim, özellikle büyük', 'Her hacim, özellikle büyük', 'Küçük–orta', 'Küçük–orta']
            },
            {
              label: 'Doku patolojiye gönderilir',
              values: ['Evet', 'Evet', 'Evet', 'Hayır']
            },
            {
              label: 'Ortalama sonda süresi',
              values: ['1–2 gün', '1–2 gün', '2–3 gün', 'Değişken']
            },
            {
              label: 'Hastanede kalış',
              values: ['1 gece', '1 gece', '1–2 gece', 'Günübirlik olabilir']
            },
            {
              label: 'Cinsel işleve etkisi',
              values: [
                'Retrograd ejakülasyon sık',
                'Retrograd ejakülasyon sık',
                'Retrograd ejakülasyon sık',
                'Ejakülasyon daha az etkilenir'
              ]
            }
          ],
          note:
            'Bu tablo genel bilgilendirme amaçlıdır. Yöntem; prostat hacmi, eşlik eden hastalıklar ve hastanın öncelikleri değerlendirilerek kişiye özel belirlenir.'
        },
        recovery: [
          {
            period: 'İlk 48 saat',
            body: 'Sonda takılıdır. Bol sıvı alımı önerilir; idrarda hafif pembe renk ve çökelti görülebilir, bu beklenen bir durumdur.'
          },
          {
            period: '1. hafta',
            body: 'Sonda alınmıştır. İdrar yaparken yanma ve sıkışma hissi kademeli olarak azalır. Kısa yürüyüşler önerilir; ağır kaldırmaktan ve uzun araç yolculuğundan kaçınılır.'
          },
          {
            period: '2–3. hafta',
            body: 'İdrar akımındaki düzelme belirginleşir. Masa başı işe dönüş genellikle bu dönemde mümkün olur. Pelvik taban (Kegel) egzersizlerine devam edilir.'
          },
          {
            period: '4–6. hafta',
            body: 'Varsa idrar kaçırma büyük ölçüde geriler. Ağır fiziksel aktivite ve cinsel ilişki için hekiminizin onayı beklenir.'
          },
          {
            period: '3. ay',
            body: 'Sonuçlar oturur. Kontrolde IPSS semptom skoru ve üroflowmetri tekrarlanarak düzelme nesnel olarak ölçülür.'
          }
        ],
        price: {
          from: 0,
          to: 0,
          currency: 'EUR',
          disclaimer:
            'Fiyat; prostat hacmi, eşlik eden işlemler ve kalış süresine göre değişir. Kesin teklif ön değerlendirme sonrasında verilir.'
        },
        packageIncludes: [
          'Ameliyat ve hastane yatışı',
          'Anestezi ve ameliyathane',
          'Ameliyat öncesi tetkikler',
          'Patolojik inceleme',
          'Havalimanı–hastane–otel transferleri',
          'Konaklama (hasta + 1 refakatçi)',
          'Tıbbi tercüman ve hasta koordinatörü',
          'Taburculuk sonrası online kontroller'
        ],
        faqs: [
          {
            q: 'ThuLEP ile HoLEP arasındaki fark nedir?',
            a: 'Her ikisi de tıkayıcı prostat dokusunu bütün hâlinde çıkaran enükleasyon yöntemidir; fark kullanılan lazerdedir. HoLEP holmiyum, ThuLEP ise tulyum lazer kullanır. Tulyum sürekli dalga ürettiği için kesme sırasında kanama kontrolü kolaylaşır. Hasta açısından süreç, iyileşme ve beklenen sonuçlar birbirine büyük ölçüde benzer; seçim cerrahın deneyimi ve mevcut donanıma göre yapılır.'
          },
          {
            q: 'Prostatım çok büyük, yine de kapalı yöntem uygulanabilir mi?',
            a: 'Evet. Enükleasyon yöntemlerinin en önemli avantajı, büyük hacimli prostatlarda da kapalı olarak uygulanabilmesidir. Daha önce yalnızca açık ameliyatla çözülebilen boyutlardaki prostatlar ThuLEP ile kesi yapılmadan tedavi edilebilir.'
          },
          {
            q: 'Cinsel işlevim etkilenir mi?',
            a: 'Ereksiyon işlevi genellikle korunur. Buna karşılık retrograd ejakülasyon — menin dışarı değil mesaneye gitmesi — sık görülen bir değişikliktir. Sağlık açısından zararlı değildir, ancak doğurganlığı etkiler. Çocuk sahibi olma planınız varsa bunu ameliyat öncesinde mutlaka konuşmalıyız.'
          },
          {
            q: 'Sonda ne kadar kalır?',
            a: 'Genellikle 1–2 gün. İdrar berraklaştığında sonda alınır ve kendiliğinden idrar yapabildiğiniz görüldükten sonra taburcu olursunuz. Nadiren bu süre uzayabilir.'
          },
          {
            q: 'Kan sulandırıcı kullanıyorum, ameliyat olabilir miyim?',
            a: 'Tulyum lazerin kanama kontrolünü kolaylaştırması, bu hastalarda ThuLEP’i değerlendirilebilir kılar. Ancak ilacınızın kesilip kesilmeyeceğine veya nasıl yönetileceğine, sizi takip eden hekimle birlikte karar verilir. Kendi başınıza ilacınızı bırakmayın.'
          },
          {
            q: 'Çıkarılan doku inceleniyor mu, kanser çıkarsa ne olur?',
            a: 'Evet. Enükleasyonda çıkarılan dokunun tamamı patolojiye gönderilir. Beklenmedik bir kanser odağı saptanırsa, evresine göre ek tedavi veya izlem planı hazırlanır ve size ayrıntılı olarak anlatılır.'
          },
          {
            q: 'İşlemin tekrarlanması gerekir mi?',
            a: 'Enükleasyon, tıkayıcı dokuyu bütün hâlinde çıkardığı için uzun süreli sonuç hedefler. Yine de hiçbir yöntem tekrar gerekmeyeceğini garanti etmez; düzenli kontrol önerilir.'
          },
          {
            q: 'İdrar kaçırma kalıcı olur mu?',
            a: 'Ameliyattan sonraki ilk haftalarda görülebilen idrar kaçırma çoğu hastada geçicidir ve kademeli olarak düzelir. Pelvik taban egzersizleri bu süreci destekler. Kalıcı kaçırma seyrek bir durumdur; risk, ameliyat öncesi değerlendirmede sizinle ayrıca konuşulur.'
          },
          {
            q: 'Ameliyattan sonra ne zaman uçabilirim?',
            a: 'Kontrol muayenesi yapıldıktan sonra, genellikle işlemden 7 gün sonra uçuş onayı verilir. Uzun uçuşlarda pıhtı riskini azaltmak için hareket ve sıvı alımı önerilir.'
          }
        ],
        sources: [
          {
            label:
              'EAU Guidelines on Management of Non-Neurogenic Male LUTS — Avrupa Üroloji Derneği',
            url: 'https://uroweb.org/guidelines/management-of-non-neurogenic-male-luts'
          },
          {
            label:
              'Ergün M, Sağır S, Hacibey İ. ThuLEP technique for managing benign prostatic hyperplasia: intraoperative and postoperative complications in a series of 42 consecutive cases. Journal of Surgery and Medicine, 2025.'
          }
        ]
      },
      en: {
        title: 'ThuLEP (Thulium Laser Enucleation of the Prostate)',
        summary:
          'An endoscopic method in which the obstructing tissue of an enlarged prostate is enucleated whole with a thulium laser.',
        metaTitle: 'ThuLEP: Thulium Laser Enucleation of the Prostate',
        metaDescription:
          'ThuLEP for benign prostatic enlargement: who it suits, how it is performed, risks, recovery and how it compares with HoLEP and TURP.',
        quickFacts: {
          duration: '60–120 minutes',
          anesthesia: 'General or spinal anesthesia',
          hospitalStay: '1 night',
          stayInTurkey: '5–7 days',
          catheter: '1–2 days',
          returnToWork: '2–3 weeks',
          flightClearance: 'From day 7'
        },
        definition: [
          'Benign prostatic enlargement (BPH) is the age-related growth of prostate tissue that compresses the urinary channel from outside. The most common complaints are a weak stream, difficulty starting, waking several times at night and a feeling that the bladder does not empty fully. In advanced cases, inability to pass urine (retention), recurrent urinary tract infection or bladder stones may develop.',
          'ThuLEP is an endoscopic operation in which the obstructing prostate tissue is separated from its capsule with a thulium laser and removed AS A WHOLE. No incision is made in the body; the entire procedure is performed through the urinary channel. Whereas classic TURP shaves the tissue away in small chips, enucleation peels the obstructing tissue off in one piece — applying the logic of open prostate surgery through a closed approach.',
          'The thulium laser emits a continuous wave; it cuts tissue while sealing small vessels at the same time. Because this makes bleeding easier to control, the method can be preferred in large-volume prostates and in selected patients who require caution because of blood-thinning medication.',
          'The enucleated tissue is reduced inside the bladder with a device called a morcellator, removed, and sent for PATHOLOGICAL EXAMINATION. This is an important difference from methods that vaporise the tissue: if an unexpected focus of cancer is present, the diagnosis is not missed.'
        ],
        eligibility: {
          suitable: [
            'Patients with a medium or large prostate who do not benefit sufficiently from medication',
            'Patients who cannot continue medication because of side effects',
            'Patients with recurrent urinary retention or who have become catheter-dependent',
            'Patients who develop recurrent urinary tract infection or bladder stones due to prostate enlargement',
            'Selected patients requiring caution over bleeding control, where the surgeon judges the method suitable'
          ],
          notSuitable: [
            'Patients with an active urinary tract infection — the infection is treated first and surgery is postponed',
            'Patients in whom suspicion of prostate cancer has not yet been resolved — diagnostic work-up is completed first',
            'Patients whose symptoms arise from loss of bladder muscle function rather than obstruction may gain limited benefit',
            'Patients at high anesthetic risk because of comorbidities',
            'Patients planning to father children — retrograde ejaculation is possible and must be discussed before surgery'
          ]
        },
        technology: [
          'Quanta thulium laser platform',
          'Continuous-wave thulium: cutting and bleeding control at the same time',
          'Safe removal of tissue from the bladder with a morcellator',
          'All removed tissue sent for pathological examination'
        ],
        surgeonExperience: {
          caseVolume: '',
          note:
            'Assoc. Prof. Dr. Müslüm Ergün has a peer-reviewed publication on the ThuLEP technique evaluating intraoperative and postoperative complications (Journal of Surgery and Medicine, 2025).'
        },
        timeline: [
          {
            when: 'Remote',
            title: 'Pre-assessment',
            body: 'Your urinary flow test (uroflowmetry), IPSS symptom score, PSA value, prostate volume and post-void residual volume are reviewed, and the suitability of the method is assessed.'
          },
          {
            when: 'Day 1',
            title: 'Arrival and tests',
            body: 'In-person examination, completion of any missing tests and anesthesia assessment.'
          },
          {
            when: 'Day 2',
            title: 'Procedure',
            body: 'ThuLEP is performed under general or spinal anesthesia; it usually takes 60–120 minutes and requires no incision.'
          },
          {
            when: 'Day 3',
            title: 'Catheter removal and discharge',
            body: 'The catheter is removed once the urine is clear; discharge is planned after you are seen to pass urine on your own.'
          },
          {
            when: 'Day 7–10',
            title: 'Review and pathology',
            body: 'A follow-up examination is carried out, the pathology result is reviewed and clearance is given for the return flight.'
          }
        ],
        risks: [
          'Temporary burning and sudden urgency when passing urine',
          'Temporary stress-type urinary leakage — in most patients it settles within weeks, and pelvic floor exercises support this',
          'Retrograde ejaculation: semen passing into the bladder rather than outward; it is common and affects fertility',
          'Urinary tract infection',
          'Urethral stricture or bladder neck contracture (less common; may require an additional procedure)',
          'Bleeding and general surgical risks related to anesthesia'
        ],
        alternatives: [
          'Medication (alpha blockers, 5-alpha reductase inhibitors)',
          'HoLEP — enucleation with a holmium laser',
          'TURP — classic endoscopic resection',
          'Rezūm — volume reduction with water vapour (in smaller prostates)',
          'Open (simple) prostatectomy — in very large prostates, increasingly rare'
        ],
        comparison: {
          title: 'ThuLEP, HoLEP, TURP and Rezūm compared',
          columns: ['Criterion', 'ThuLEP', 'HoLEP', 'TURP', 'Rezūm'],
          rows: [
            {
              label: 'Suitable prostate volume',
              values: ['Any volume, especially large', 'Any volume, especially large', 'Small–medium', 'Small–medium']
            },
            { label: 'Tissue sent for pathology', values: ['Yes', 'Yes', 'Yes', 'No'] },
            { label: 'Average catheter time', values: ['1–2 days', '1–2 days', '2–3 days', 'Variable'] },
            { label: 'Hospital stay', values: ['1 night', '1 night', '1–2 nights', 'May be day-case'] },
            {
              label: 'Effect on sexual function',
              values: [
                'Retrograde ejaculation common',
                'Retrograde ejaculation common',
                'Retrograde ejaculation common',
                'Ejaculation less affected'
              ]
            }
          ],
          note:
            'This table is for general information. The method is chosen individually after assessing prostate volume, comorbidities and the patient’s priorities.'
        },
        recovery: [
          {
            period: 'First 48 hours',
            body: 'The catheter is in place. Plenty of fluids are advised; a slight pink tinge and sediment in the urine may be seen and is expected.'
          },
          {
            period: 'Week 1',
            body: 'The catheter has been removed. Burning and urgency on passing urine gradually decrease. Short walks are advised; heavy lifting and long car journeys are avoided.'
          },
          {
            period: 'Weeks 2–3',
            body: 'Improvement in urinary flow becomes clear. Returning to desk work is usually possible in this period. Pelvic floor (Kegel) exercises are continued.'
          },
          {
            period: 'Weeks 4–6',
            body: 'Any urinary leakage largely settles. Heavy physical activity and sexual intercourse await your surgeon’s approval.'
          },
          {
            period: 'Month 3',
            body: 'Results stabilise. At follow-up the IPSS score and uroflowmetry are repeated so the improvement is measured objectively.'
          }
        ],
        price: {
          from: 0,
          to: 0,
          currency: 'EUR',
          disclaimer:
            'The price varies with prostate volume, any additional procedures and length of stay. A firm quote follows pre-assessment.'
        },
        packageIncludes: [
          'Surgery and hospital stay',
          'Anesthesia and operating room',
          'Pre-operative tests',
          'Pathological examination',
          'Airport–hospital–hotel transfers',
          'Accommodation (patient + 1 companion)',
          'Medical interpreter and patient coordinator',
          'Post-discharge online follow-ups'
        ],
        faqs: [
          {
            q: 'What is the difference between ThuLEP and HoLEP?',
            a: 'Both are enucleation methods that remove the obstructing prostate tissue as a whole; the difference is the laser used. HoLEP uses a holmium laser, ThuLEP a thulium laser. Because thulium emits a continuous wave, bleeding control during cutting is easier. From the patient’s point of view the process, recovery and expected outcomes are largely similar; the choice depends on the surgeon’s experience and the available equipment.'
          },
          {
            q: 'My prostate is very large — can a closed method still be used?',
            a: 'Yes. The main advantage of enucleation methods is that they can be used in large-volume prostates as well. Prostates of a size that once required open surgery can be treated with ThuLEP without an incision.'
          },
          {
            q: 'Will my sexual function be affected?',
            a: 'Erectile function is usually preserved. Retrograde ejaculation — semen passing into the bladder rather than outward — is, however, a common change. It is not harmful to health but it does affect fertility. If you plan to have children, we must discuss this before surgery.'
          },
          {
            q: 'How long does the catheter stay in?',
            a: 'Usually 1–2 days. The catheter is removed once the urine is clear, and you are discharged after you are seen to pass urine on your own. This period is occasionally longer.'
          },
          {
            q: 'I take blood thinners — can I have this operation?',
            a: 'Because the thulium laser makes bleeding control easier, ThuLEP can be considered in these patients. However, whether and how your medication is adjusted is decided together with the physician who follows you. Do not stop your medication on your own.'
          },
          {
            q: 'Is the removed tissue examined, and what if cancer is found?',
            a: 'Yes. In enucleation all removed tissue is sent for pathology. If an unexpected focus of cancer is found, a plan for further treatment or surveillance is prepared according to its stage and explained to you in detail.'
          },
          {
            q: 'Will the procedure need to be repeated?',
            a: 'Because enucleation removes the obstructing tissue as a whole, it aims for a durable result. Even so, no method can guarantee that repeat treatment will never be needed; regular follow-up is advised.'
          },
          {
            q: 'Will urinary leakage be permanent?',
            a: 'Leakage that may occur in the first weeks after surgery is temporary in most patients and improves gradually. Pelvic floor exercises support this. Permanent leakage is uncommon; the risk is discussed with you separately during pre-operative assessment.'
          },
          {
            q: 'When can I fly after the operation?',
            a: 'Clearance to fly is usually given after the follow-up examination, generally 7 days after the procedure. On long flights, movement and fluid intake are advised to reduce the risk of clots.'
          }
        ],
        sources: [
          {
            label:
              'EAU Guidelines on Management of Non-Neurogenic Male LUTS — European Association of Urology',
            url: 'https://uroweb.org/guidelines/management-of-non-neurogenic-male-luts'
          },
          {
            label:
              'Ergün M, Sağır S, Hacibey İ. ThuLEP technique for managing benign prostatic hyperplasia: intraoperative and postoperative complications in a series of 42 consecutive cases. Journal of Surgery and Medicine, 2025.'
          }
        ]
      },
      de: {
        title: 'ThuLEP (Thulium-Laser-Enukleation der Prostata)',
        summary:
          'Endoskopisches Verfahren, bei dem das obstruierende Gewebe der vergrößerten Prostata mit dem Thuliumlaser im Ganzen ausgeschält wird.',
        metaTitle: 'ThuLEP: Thulium-Laser-Enukleation der Prostata',
        metaDescription:
          'ThuLEP bei gutartiger Prostatavergrößerung: für wen geeignet, Ablauf, Risiken, Genesung und Vergleich mit HoLEP und TURP.',
        quickFacts: {
          duration: '60–120 Minuten',
          anesthesia: 'Vollnarkose oder Spinalanästhesie',
          hospitalStay: '1 Nacht',
          stayInTurkey: '5–7 Tage',
          catheter: '1–2 Tage',
          returnToWork: '2–3 Wochen',
          flightClearance: 'Ab Tag 7'
        },
        definition: [
          'Die gutartige Prostatavergrößerung (BPH) ist das altersbedingte Wachstum des Prostatagewebes, das die Harnröhre von außen einengt. Die häufigsten Beschwerden sind ein schwacher Strahl, erschwertes Wasserlassen, mehrfaches nächtliches Aufstehen und das Gefühl der unvollständigen Blasenentleerung. In fortgeschrittenen Fällen können Harnverhalt, wiederkehrende Harnwegsinfekte oder Blasensteine auftreten.',
          'ThuLEP ist eine endoskopische Operation, bei der das obstruierende Prostatagewebe mit dem Thuliumlaser von seiner Kapsel gelöst und IM GANZEN entfernt wird. Es wird kein Hautschnitt gesetzt; der gesamte Eingriff erfolgt über die Harnröhre. Während bei der klassischen TURP das Gewebe in kleinen Spänen abgetragen wird, wird es bei der Enukleation in einem Stück ausgeschält — die Logik der offenen Prostataoperation, umgesetzt über einen geschlossenen Zugang.',
          'Der Thuliumlaser arbeitet mit Dauerstrich; er schneidet das Gewebe und verschließt gleichzeitig kleine Gefäße. Da sich die Blutungskontrolle dadurch erleichtert, kann das Verfahren bei großvolumigen Prostatae und bei ausgewählten Patienten bevorzugt werden, die wegen blutverdünnender Medikamente besondere Vorsicht erfordern.',
          'Das ausgeschälte Gewebe wird mit einem Morcellator in der Blase zerkleinert, entfernt und zur PATHOLOGISCHEN UNTERSUCHUNG eingeschickt. Das ist ein wichtiger Unterschied zu Verfahren, die das Gewebe verdampfen: Ein unerwarteter Krebsherd wird so nicht übersehen.'
        ],
        eligibility: {
          suitable: [
            'Patienten mit mittlerer oder großer Prostata, die von Medikamenten nicht ausreichend profitieren',
            'Patienten, die die Medikation wegen Nebenwirkungen nicht fortsetzen können',
            'Patienten mit wiederholtem Harnverhalt oder bestehender Katheterabhängigkeit',
            'Patienten mit wiederkehrenden Harnwegsinfekten oder Blasensteinen infolge der Prostatavergrößerung',
            'Ausgewählte Patienten, bei denen die Blutungskontrolle besondere Vorsicht erfordert und der Chirurg das Verfahren für geeignet hält'
          ],
          notSuitable: [
            'Patienten mit aktivem Harnwegsinfekt — der Infekt wird zuerst behandelt, die Operation verschoben',
            'Patienten, bei denen ein Prostatakrebsverdacht noch nicht geklärt ist — zuerst wird die Diagnostik abgeschlossen',
            'Patienten, deren Beschwerden nicht von der Obstruktion, sondern von einer Funktionsschwäche des Blasenmuskels herrühren, profitieren möglicherweise nur begrenzt',
            'Patienten mit hohem Narkoserisiko aufgrund von Begleiterkrankungen',
            'Patienten mit Kinderwunsch — eine retrograde Ejakulation ist möglich und muss vor der Operation besprochen werden'
          ]
        },
        technology: [
          'Quanta Thulium-Laserplattform',
          'Dauerstrich-Thulium: Schneiden und Blutungskontrolle zugleich',
          'Sichere Entfernung des Gewebes aus der Blase mit dem Morcellator',
          'Das gesamte entfernte Gewebe wird pathologisch untersucht'
        ],
        surgeonExperience: {
          caseVolume: '',
          note:
            'Doz. Dr. Müslüm Ergün hat eine begutachtete Publikation zur ThuLEP-Technik, die intra- und postoperative Komplikationen auswertet (Journal of Surgery and Medicine, 2025).'
        },
        timeline: [
          {
            when: 'Aus der Ferne',
            title: 'Vorabbeurteilung',
            body: 'Uroflowmetrie, IPSS-Symptomscore, PSA-Wert, Prostatavolumen und Restharnmenge werden geprüft und die Eignung des Verfahrens beurteilt.'
          },
          {
            when: 'Tag 1',
            title: 'Ankunft und Untersuchungen',
            body: 'Persönliche Untersuchung, Nachholen fehlender Befunde und Narkosevorbereitung.'
          },
          {
            when: 'Tag 2',
            title: 'Eingriff',
            body: 'ThuLEP wird in Vollnarkose oder Spinalanästhesie durchgeführt; der Eingriff dauert meist 60–120 Minuten und erfordert keinen Schnitt.'
          },
          {
            when: 'Tag 3',
            title: 'Katheterentfernung und Entlassung',
            body: 'Der Katheter wird entfernt, sobald der Urin klar ist; die Entlassung erfolgt, nachdem Sie selbstständig Wasser gelassen haben.'
          },
          {
            when: 'Tag 7–10',
            title: 'Kontrolle und Pathologie',
            body: 'Es erfolgt eine Kontrolluntersuchung, der Pathologiebefund wird besprochen und die Freigabe für den Rückflug erteilt.'
          }
        ],
        risks: [
          'Vorübergehendes Brennen und plötzlicher Harndrang beim Wasserlassen',
          'Vorübergehender Belastungsharnverlust — bei den meisten Patienten bessert er sich binnen Wochen; Beckenbodenübungen unterstützen dies',
          'Retrograde Ejakulation: Der Samen gelangt in die Blase statt nach außen; sie ist häufig und beeinflusst die Fruchtbarkeit',
          'Harnwegsinfekt',
          'Harnröhrenstriktur oder Blasenhalsenge (seltener; kann einen weiteren Eingriff erfordern)',
          'Blutung und allgemeine chirurgische Risiken der Narkose'
        ],
        alternatives: [
          'Medikamentöse Therapie (Alphablocker, 5-Alpha-Reduktase-Hemmer)',
          'HoLEP — Enukleation mit dem Holmiumlaser',
          'TURP — klassische endoskopische Resektion',
          'Rezūm — Volumenreduktion mit Wasserdampf (bei kleineren Prostatae)',
          'Offene (einfache) Prostatektomie — bei sehr großen Prostatae, zunehmend selten'
        ],
        comparison: {
          title: 'ThuLEP, HoLEP, TURP und Rezūm im Vergleich',
          columns: ['Kriterium', 'ThuLEP', 'HoLEP', 'TURP', 'Rezūm'],
          rows: [
            {
              label: 'Geeignetes Prostatavolumen',
              values: ['Jedes Volumen, besonders groß', 'Jedes Volumen, besonders groß', 'Klein–mittel', 'Klein–mittel']
            },
            { label: 'Gewebe zur Pathologie', values: ['Ja', 'Ja', 'Ja', 'Nein'] },
            { label: 'Durchschnittliche Katheterdauer', values: ['1–2 Tage', '1–2 Tage', '2–3 Tage', 'Variabel'] },
            { label: 'Krankenhausaufenthalt', values: ['1 Nacht', '1 Nacht', '1–2 Nächte', 'Ambulant möglich'] },
            {
              label: 'Einfluss auf die Sexualfunktion',
              values: [
                'Retrograde Ejakulation häufig',
                'Retrograde Ejakulation häufig',
                'Retrograde Ejakulation häufig',
                'Ejakulation weniger betroffen'
              ]
            }
          ],
          note:
            'Diese Tabelle dient der allgemeinen Information. Das Verfahren wird individuell nach Prostatavolumen, Begleiterkrankungen und den Prioritäten des Patienten gewählt.'
        },
        recovery: [
          {
            period: 'Erste 48 Stunden',
            body: 'Der Katheter liegt. Reichlich Trinken wird empfohlen; eine leichte rosa Färbung und Sediment im Urin können auftreten und sind zu erwarten.'
          },
          {
            period: 'Woche 1',
            body: 'Der Katheter ist entfernt. Brennen und Harndrang nehmen allmählich ab. Kurze Spaziergänge werden empfohlen; schweres Heben und lange Autofahrten werden vermieden.'
          },
          {
            period: 'Woche 2–3',
            body: 'Die Verbesserung des Harnstrahls wird deutlich. Die Rückkehr zur Bürotätigkeit ist in diesem Zeitraum meist möglich. Beckenbodenübungen werden fortgesetzt.'
          },
          {
            period: 'Woche 4–6',
            body: 'Ein etwaiger Harnverlust bessert sich weitgehend. Für schwere körperliche Aktivität und Geschlechtsverkehr wird die Freigabe Ihres Arztes abgewartet.'
          },
          {
            period: 'Monat 3',
            body: 'Die Ergebnisse stabilisieren sich. Bei der Kontrolle werden IPSS-Score und Uroflowmetrie wiederholt, um die Besserung objektiv zu messen.'
          }
        ],
        price: {
          from: 0,
          to: 0,
          currency: 'EUR',
          disclaimer:
            'Der Preis richtet sich nach Prostatavolumen, zusätzlichen Eingriffen und Aufenthaltsdauer. Ein verbindliches Angebot folgt nach der Vorabbeurteilung.'
        },
        packageIncludes: [
          'Operation und Krankenhausaufenthalt',
          'Anästhesie und Operationssaal',
          'Präoperative Untersuchungen',
          'Pathologische Untersuchung',
          'Transfers Flughafen–Krankenhaus–Hotel',
          'Unterkunft (Patient + 1 Begleitperson)',
          'Medizinischer Dolmetscher und Patientenkoordinator',
          'Online-Nachsorge nach der Entlassung'
        ],
        faqs: [
          {
            q: 'Worin unterscheiden sich ThuLEP und HoLEP?',
            a: 'Beide sind Enukleationsverfahren, die das obstruierende Prostatagewebe im Ganzen entfernen; der Unterschied liegt im verwendeten Laser. HoLEP nutzt einen Holmium-, ThuLEP einen Thuliumlaser. Da Thulium im Dauerstrich arbeitet, ist die Blutungskontrolle beim Schneiden einfacher. Aus Patientensicht sind Ablauf, Genesung und zu erwartende Ergebnisse weitgehend vergleichbar; die Wahl richtet sich nach Erfahrung des Chirurgen und vorhandener Ausstattung.'
          },
          {
            q: 'Meine Prostata ist sehr groß — ist ein geschlossenes Verfahren dennoch möglich?',
            a: 'Ja. Der wesentliche Vorteil der Enukleationsverfahren ist, dass sie auch bei großvolumigen Prostatae anwendbar sind. Größen, die früher eine offene Operation erforderten, lassen sich mit ThuLEP ohne Schnitt behandeln.'
          },
          {
            q: 'Wird meine Sexualfunktion beeinträchtigt?',
            a: 'Die Erektionsfähigkeit bleibt in der Regel erhalten. Die retrograde Ejakulation — der Samen gelangt in die Blase statt nach außen — ist jedoch eine häufige Veränderung. Sie ist gesundheitlich unbedenklich, beeinflusst aber die Fruchtbarkeit. Bei Kinderwunsch müssen wir dies vor der Operation besprechen.'
          },
          {
            q: 'Wie lange bleibt der Katheter?',
            a: 'Meist 1–2 Tage. Der Katheter wird entfernt, sobald der Urin klar ist, und Sie werden entlassen, nachdem Sie selbstständig Wasser gelassen haben. Selten dauert dies länger.'
          },
          {
            q: 'Ich nehme Blutverdünner — kann ich operiert werden?',
            a: 'Da der Thuliumlaser die Blutungskontrolle erleichtert, kommt ThuLEP bei diesen Patienten in Betracht. Ob und wie Ihre Medikation angepasst wird, entscheidet jedoch der behandelnde Arzt gemeinsam mit Ihnen. Setzen Sie Ihre Medikamente nicht eigenmächtig ab.'
          },
          {
            q: 'Wird das entfernte Gewebe untersucht, und was ist, wenn Krebs gefunden wird?',
            a: 'Ja. Bei der Enukleation wird das gesamte entfernte Gewebe zur Pathologie geschickt. Wird ein unerwarteter Krebsherd gefunden, wird je nach Stadium ein Plan für weitere Behandlung oder Überwachung erstellt und Ihnen ausführlich erläutert.'
          },
          {
            q: 'Muss der Eingriff wiederholt werden?',
            a: 'Da die Enukleation das obstruierende Gewebe im Ganzen entfernt, zielt sie auf ein dauerhaftes Ergebnis. Dennoch kann kein Verfahren garantieren, dass nie eine erneute Behandlung nötig wird; regelmäßige Kontrollen werden empfohlen.'
          },
          {
            q: 'Bleibt der Harnverlust dauerhaft?',
            a: 'Ein Harnverlust in den ersten Wochen nach der Operation ist bei den meisten Patienten vorübergehend und bessert sich allmählich. Beckenbodenübungen unterstützen dies. Dauerhafter Harnverlust ist selten; das Risiko wird im Vorgespräch gesondert mit Ihnen besprochen.'
          },
          {
            q: 'Wann darf ich nach der Operation fliegen?',
            a: 'Die Flugfreigabe wird meist nach der Kontrolluntersuchung erteilt, in der Regel 7 Tage nach dem Eingriff. Auf Langstreckenflügen werden Bewegung und ausreichend Flüssigkeit empfohlen, um das Thromboserisiko zu senken.'
          }
        ],
        sources: [
          {
            label:
              'EAU-Leitlinie zum Management nicht-neurogener männlicher LUTS — Europäische Gesellschaft für Urologie',
            url: 'https://uroweb.org/guidelines/management-of-non-neurogenic-male-luts'
          },
          {
            label:
              'Ergün M, Sağır S, Hacibey İ. ThuLEP technique for managing benign prostatic hyperplasia: intraoperative and postoperative complications in a series of 42 consecutive cases. Journal of Surgery and Medicine, 2025.'
          }
        ]
      },
      fr: {
        title: 'ThuLEP (énucléation de la prostate au laser thulium)',
        summary:
          'Méthode endoscopique dans laquelle le tissu obstructif de la prostate hypertrophiée est énucléé en bloc au laser thulium.',
        metaTitle: 'ThuLEP : énucléation de la prostate au laser thulium',
        metaDescription:
          'ThuLEP pour l’hypertrophie bénigne de la prostate : indications, déroulement, risques, récupération et comparaison avec la HoLEP et la RTUP.',
        quickFacts: {
          duration: '60 à 120 minutes',
          anesthesia: 'Anesthésie générale ou rachidienne',
          hospitalStay: '1 nuit',
          stayInTurkey: '5 à 7 jours',
          catheter: '1 à 2 jours',
          returnToWork: '2 à 3 semaines',
          flightClearance: 'À partir du 7e jour'
        },
        definition: [
          'L’hypertrophie bénigne de la prostate (HBP) est la croissance, liée à l’âge, du tissu prostatique qui comprime l’urètre de l’extérieur. Les plaintes les plus fréquentes sont un jet faible, une difficulté à initier la miction, plusieurs levers nocturnes et la sensation que la vessie ne se vide pas complètement. À un stade avancé peuvent survenir une rétention urinaire, des infections urinaires à répétition ou des calculs vésicaux.',
          'La ThuLEP est une intervention endoscopique au cours de laquelle le tissu prostatique obstructif est séparé de sa capsule au laser thulium et retiré EN BLOC. Aucune incision cutanée n’est pratiquée ; toute l’intervention se fait par les voies urinaires. Alors que la RTUP classique retire le tissu en petits copeaux, l’énucléation le décolle d’un seul tenant : c’est la logique de la chirurgie ouverte appliquée par voie endoscopique.',
          'Le laser thulium émet une onde continue ; il coupe le tissu tout en obturant simultanément les petits vaisseaux. Comme cela facilite le contrôle du saignement, la méthode peut être privilégiée pour les prostates volumineuses et chez certains patients nécessitant une vigilance particulière en raison d’un traitement anticoagulant.',
          'Le tissu énucléé est fragmenté dans la vessie à l’aide d’un morcellateur, retiré, puis adressé à l’EXAMEN ANATOMOPATHOLOGIQUE. C’est une différence importante par rapport aux techniques de vaporisation : si un foyer cancéreux inattendu est présent, le diagnostic n’est pas manqué.'
        ],
        eligibility: {
          suitable: [
            'Patients porteurs d’une prostate de volume moyen ou important ne tirant pas un bénéfice suffisant du traitement médical',
            'Patients ne pouvant poursuivre le traitement en raison des effets indésirables',
            'Patients présentant des rétentions urinaires répétées ou devenus dépendants d’une sonde',
            'Patients développant des infections urinaires récidivantes ou des calculs vésicaux liés à l’hypertrophie',
            'Patients sélectionnés nécessitant une vigilance quant au saignement, lorsque le chirurgien juge la méthode adaptée'
          ],
          notSuitable: [
            'Patients présentant une infection urinaire active — l’infection est traitée d’abord et l’intervention reportée',
            'Patients chez qui une suspicion de cancer de la prostate n’est pas encore levée — le bilan diagnostique est complété au préalable',
            'Patients dont les troubles proviennent d’une défaillance du muscle vésical plutôt que de l’obstruction : le bénéfice attendu peut être limité',
            'Patients à risque anesthésique élevé en raison de comorbidités',
            'Patients ayant un projet de paternité — une éjaculation rétrograde est possible et doit être abordée avant l’intervention'
          ]
        },
        technology: [
          'Plateforme laser thulium Quanta',
          'Thulium à onde continue : découpe et contrôle du saignement simultanés',
          'Retrait sûr du tissu depuis la vessie à l’aide d’un morcellateur',
          'Totalité du tissu retiré adressée à l’examen anatomopathologique'
        ],
        surgeonExperience: {
          caseVolume: '',
          note:
            'Le Dr Müslüm Ergün est auteur d’une publication évaluée par les pairs portant sur la technique ThuLEP et analysant les complications per- et postopératoires (Journal of Surgery and Medicine, 2025).'
        },
        timeline: [
          {
            when: 'À distance',
            title: 'Pré-évaluation',
            body: 'Votre débitmétrie urinaire, votre score de symptômes IPSS, votre PSA, le volume prostatique et le résidu post-mictionnel sont examinés, et l’indication de la méthode est évaluée.'
          },
          {
            when: 'Jour 1',
            title: 'Arrivée et examens',
            body: 'Examen clinique, complément du bilan manquant et consultation d’anesthésie.'
          },
          {
            when: 'Jour 2',
            title: 'Intervention',
            body: 'La ThuLEP est réalisée sous anesthésie générale ou rachidienne ; elle dure généralement 60 à 120 minutes et ne nécessite aucune incision.'
          },
          {
            when: 'Jour 3',
            title: 'Retrait de la sonde et sortie',
            body: 'La sonde est retirée dès que les urines sont claires ; la sortie est organisée après vérification que vous urinez spontanément.'
          },
          {
            when: 'Jours 7–10',
            title: 'Contrôle et anatomopathologie',
            body: 'Une consultation de contrôle est réalisée, le résultat anatomopathologique est examiné et l’autorisation de prendre le vol retour est délivrée.'
          }
        ],
        risks: [
          'Brûlures et urgences mictionnelles transitoires',
          'Fuites urinaires d’effort transitoires — elles régressent en quelques semaines chez la plupart des patients, la rééducation périnéale y contribue',
          'Éjaculation rétrograde : le sperme reflue vers la vessie au lieu d’être émis ; fréquente, elle affecte la fertilité',
          'Infection urinaire',
          'Sténose urétrale ou sclérose du col vésical (plus rares ; peuvent nécessiter un geste complémentaire)',
          'Saignement et risques chirurgicaux généraux liés à l’anesthésie'
        ],
        alternatives: [
          'Traitement médicamenteux (alphabloquants, inhibiteurs de la 5-alpha-réductase)',
          'HoLEP — énucléation au laser holmium',
          'RTUP — résection endoscopique classique',
          'Rezūm — réduction de volume par vapeur d’eau (prostates plus petites)',
          'Adénomectomie par voie ouverte — pour les très grosses prostates, de plus en plus rare'
        ],
        comparison: {
          title: 'Comparaison ThuLEP, HoLEP, RTUP et Rezūm',
          columns: ['Critère', 'ThuLEP', 'HoLEP', 'RTUP', 'Rezūm'],
          rows: [
            {
              label: 'Volume prostatique adapté',
              values: ['Tous volumes, surtout les gros', 'Tous volumes, surtout les gros', 'Petit à moyen', 'Petit à moyen']
            },
            { label: 'Tissu adressé en anatomopathologie', values: ['Oui', 'Oui', 'Oui', 'Non'] },
            { label: 'Durée moyenne de sondage', values: ['1 à 2 jours', '1 à 2 jours', '2 à 3 jours', 'Variable'] },
            { label: 'Séjour hospitalier', values: ['1 nuit', '1 nuit', '1 à 2 nuits', 'Possible en ambulatoire'] },
            {
              label: 'Effet sur la fonction sexuelle',
              values: [
                'Éjaculation rétrograde fréquente',
                'Éjaculation rétrograde fréquente',
                'Éjaculation rétrograde fréquente',
                'Éjaculation moins affectée'
              ]
            }
          ],
          note:
            'Ce tableau est fourni à titre d’information générale. La méthode est choisie au cas par cas, selon le volume prostatique, les comorbidités et les priorités du patient.'
        },
        recovery: [
          {
            period: '48 premières heures',
            body: 'La sonde est en place. Une hydratation abondante est conseillée ; une légère coloration rosée et des dépôts dans les urines peuvent apparaître et sont attendus.'
          },
          {
            period: 'Semaine 1',
            body: 'La sonde est retirée. Les brûlures et les urgences mictionnelles diminuent progressivement. De courtes marches sont conseillées ; le port de charges et les longs trajets en voiture sont évités.'
          },
          {
            period: 'Semaines 2–3',
            body: 'L’amélioration du jet urinaire devient nette. La reprise d’un travail de bureau est généralement possible à cette période. La rééducation périnéale (Kegel) est poursuivie.'
          },
          {
            period: 'Semaines 4–6',
            body: 'Les éventuelles fuites urinaires régressent largement. L’activité physique intense et les rapports sexuels attendent l’accord de votre chirurgien.'
          },
          {
            period: 'Mois 3',
            body: 'Les résultats se stabilisent. Au contrôle, le score IPSS et la débitmétrie sont répétés afin de mesurer objectivement l’amélioration.'
          }
        ],
        price: {
          from: 0,
          to: 0,
          currency: 'EUR',
          disclaimer:
            'Le prix varie selon le volume prostatique, les gestes associés et la durée du séjour. Un devis ferme est établi après la pré-évaluation.'
        },
        packageIncludes: [
          'Intervention et séjour hospitalier',
          'Anesthésie et bloc opératoire',
          'Bilan préopératoire',
          'Examen anatomopathologique',
          'Transferts aéroport–hôpital–hôtel',
          'Hébergement (patient + 1 accompagnant)',
          'Interprète médical et coordinateur patient',
          'Contrôles en ligne après la sortie'
        ],
        faqs: [
          {
            q: 'Quelle est la différence entre la ThuLEP et la HoLEP ?',
            a: 'Ce sont deux techniques d’énucléation qui retirent en bloc le tissu prostatique obstructif ; la différence tient au laser employé. La HoLEP utilise un laser holmium, la ThuLEP un laser thulium. Le thulium émettant une onde continue, le contrôle du saignement pendant la découpe est facilité. Du point de vue du patient, le déroulement, la récupération et les résultats attendus sont très proches ; le choix dépend de l’expérience du chirurgien et du matériel disponible.'
          },
          {
            q: 'Ma prostate est très volumineuse : une méthode endoscopique est-elle possible ?',
            a: 'Oui. Le principal avantage des techniques d’énucléation est de rester applicables aux prostates volumineuses. Des volumes qui imposaient autrefois une chirurgie ouverte peuvent être traités par ThuLEP sans incision.'
          },
          {
            q: 'Ma fonction sexuelle sera-t-elle affectée ?',
            a: 'La fonction érectile est généralement préservée. En revanche, l’éjaculation rétrograde — le sperme reflue vers la vessie au lieu d’être émis — est un changement fréquent. Elle n’est pas dangereuse pour la santé mais affecte la fertilité. Si vous avez un projet de paternité, nous devons en parler avant l’intervention.'
          },
          {
            q: 'Combien de temps la sonde reste-t-elle en place ?',
            a: 'Généralement 1 à 2 jours. La sonde est retirée dès que les urines sont claires, et vous sortez après avoir uriné spontanément. Cette durée est rarement plus longue.'
          },
          {
            q: 'Je prends des anticoagulants : puis-je être opéré ?',
            a: 'Le laser thulium facilitant le contrôle du saignement, la ThuLEP peut être envisagée chez ces patients. La décision d’interrompre ou d’adapter votre traitement revient toutefois au médecin qui vous suit. N’arrêtez jamais vos médicaments de votre propre initiative.'
          },
          {
            q: 'Le tissu retiré est-il analysé, et que se passe-t-il si un cancer est découvert ?',
            a: 'Oui. Dans l’énucléation, la totalité du tissu retiré est adressée en anatomopathologie. Si un foyer cancéreux inattendu est découvert, un plan de traitement complémentaire ou de surveillance est établi selon le stade et vous est expliqué en détail.'
          },
          {
            q: 'L’intervention devra-t-elle être répétée ?',
            a: 'Parce que l’énucléation retire le tissu obstructif en bloc, elle vise un résultat durable. Aucune méthode ne peut toutefois garantir qu’un nouveau traitement ne sera jamais nécessaire ; un suivi régulier est recommandé.'
          },
          {
            q: 'Les fuites urinaires seront-elles définitives ?',
            a: 'Les fuites pouvant survenir dans les premières semaines sont transitoires chez la plupart des patients et s’améliorent progressivement. La rééducation périnéale y contribue. Les fuites définitives sont rares ; ce risque est abordé spécifiquement lors de l’évaluation préopératoire.'
          },
          {
            q: 'Quand puis-je prendre l’avion après l’intervention ?',
            a: 'L’autorisation de vol est généralement donnée après la consultation de contrôle, le plus souvent 7 jours après l’intervention. Sur les vols longs, il est conseillé de bouger et de bien s’hydrater afin de réduire le risque de caillots.'
          }
        ],
        sources: [
          {
            label:
              'Recommandations EAU sur la prise en charge des TUBA masculins non neurogènes — Association européenne d’urologie',
            url: 'https://uroweb.org/guidelines/management-of-non-neurogenic-male-luts'
          },
          {
            label:
              'Ergün M, Sağır S, Hacibey İ. ThuLEP technique for managing benign prostatic hyperplasia: intraoperative and postoperative complications in a series of 42 consecutive cases. Journal of Surgery and Medicine, 2025.'
          }
        ]
      },
      ru: {
        title: 'ThuLEP (энуклеация простаты тулиевым лазером)',
        summary:
          'Эндоскопический метод, при котором обтурирующая ткань увеличенной простаты целиком энуклеируется тулиевым лазером.',
        metaTitle: 'ThuLEP: энуклеация простаты тулиевым лазером',
        metaDescription:
          'ThuLEP при доброкачественной гиперплазии простаты: кому подходит, как проводится, риски, восстановление и сравнение с HoLEP и ТУРП.',
        quickFacts: {
          duration: '60–120 минут',
          anesthesia: 'Общая или спинальная анестезия',
          hospitalStay: '1 ночь',
          stayInTurkey: '5–7 дней',
          catheter: '1–2 дня',
          returnToWork: '2–3 недели',
          flightClearance: 'С 7-го дня'
        },
        definition: [
          'Доброкачественная гиперплазия простаты (ДГПЖ) — это возрастное разрастание ткани простаты, сдавливающее мочеиспускательный канал снаружи. Чаще всего беспокоят слабая струя, затруднённое начало мочеиспускания, несколько ночных подъёмов и ощущение неполного опорожнения мочевого пузыря. В запущенных случаях возможны острая задержка мочи, повторные инфекции мочевых путей или камни мочевого пузыря.',
          'ThuLEP — эндоскопическая операция, при которой обтурирующая ткань простаты отделяется от капсулы тулиевым лазером и удаляется ЦЕЛИКОМ. Разрезов на теле не делают; всё вмешательство выполняется через мочеиспускательный канал. Если при классической ТУРП ткань срезается мелкими фрагментами, то при энуклеации она отслаивается единым блоком — это логика открытой операции, реализованная закрытым доступом.',
          'Тулиевый лазер работает в непрерывном режиме: он рассекает ткань и одновременно запаивает мелкие сосуды. Это облегчает контроль кровотечения, поэтому метод может быть предпочтителен при больших объёмах простаты и у отдельных пациентов, требующих осторожности из-за приёма антикоагулянтов.',
          'Энуклеированная ткань измельчается в мочевом пузыре морцеллятором, извлекается и направляется на ГИСТОЛОГИЧЕСКОЕ ИССЛЕДОВАНИЕ. Это важное отличие от методов с испарением ткани: при случайном очаге рака диагноз не будет пропущен.'
        ],
        eligibility: {
          suitable: [
            'Пациенты со средним или большим объёмом простаты, у которых лекарственная терапия недостаточно эффективна',
            'Пациенты, не способные продолжать приём препаратов из-за побочных эффектов',
            'Пациенты с повторной задержкой мочи или ставшие зависимыми от катетера',
            'Пациенты с рецидивирующими инфекциями мочевых путей или камнями мочевого пузыря на фоне гиперплазии',
            'Отдельные пациенты, требующие осторожности в отношении кровотечения, если хирург считает метод подходящим'
          ],
          notSuitable: [
            'Пациенты с активной инфекцией мочевых путей — сначала лечат инфекцию, операцию откладывают',
            'Пациенты, у которых подозрение на рак простаты ещё не снято — сначала завершают диагностику',
            'Пациенты, у которых жалобы обусловлены не обструкцией, а слабостью мышцы мочевого пузыря: ожидаемая польза может быть ограниченной',
            'Пациенты с высоким анестезиологическим риском из-за сопутствующих заболеваний',
            'Пациенты, планирующие зачатие, — возможна ретроградная эякуляция, это необходимо обсудить до операции'
          ]
        },
        technology: [
          'Тулиевая лазерная платформа Quanta',
          'Непрерывный режим тулия: рассечение и гемостаз одновременно',
          'Безопасное извлечение ткани из мочевого пузыря морцеллятором',
          'Вся удалённая ткань направляется на гистологическое исследование'
        ],
        surgeonExperience: {
          caseVolume: '',
          note:
            'У доцента, д-ра Мюслюма Эргюна есть рецензируемая публикация по технике ThuLEP с анализом интра- и послеоперационных осложнений (Journal of Surgery and Medicine, 2025).'
        },
        timeline: [
          {
            when: 'Дистанционно',
            title: 'Предварительная оценка',
            body: 'Оцениваются урофлоуметрия, балл симптомов IPSS, уровень ПСА, объём простаты и остаточная моча; определяется, подходит ли вам метод.'
          },
          {
            when: '1-й день',
            title: 'Приезд и обследование',
            body: 'Очный осмотр, дообследование при необходимости и консультация анестезиолога.'
          },
          {
            when: '2-й день',
            title: 'Вмешательство',
            body: 'ThuLEP выполняется под общей или спинальной анестезией; обычно занимает 60–120 минут и не требует разрезов.'
          },
          {
            when: '3-й день',
            title: 'Удаление катетера и выписка',
            body: 'Катетер удаляют, когда моча становится прозрачной; выписка планируется после того, как вы начнёте мочиться самостоятельно.'
          },
          {
            when: '7–10-й день',
            title: 'Контроль и гистология',
            body: 'Проводится контрольный осмотр, разбирается результат гистологии и даётся разрешение на обратный перелёт.'
          }
        ],
        risks: [
          'Временное жжение и внезапные позывы при мочеиспускании',
          'Временное стрессовое подтекание мочи — у большинства пациентов проходит за несколько недель, упражнения для тазового дна этому способствуют',
          'Ретроградная эякуляция: семя попадает в мочевой пузырь, а не наружу; встречается часто и влияет на фертильность',
          'Инфекция мочевых путей',
          'Стриктура уретры или склероз шейки мочевого пузыря (реже; может потребоваться дополнительное вмешательство)',
          'Кровотечение и общие хирургические риски, связанные с анестезией'
        ],
        alternatives: [
          'Лекарственная терапия (альфа-блокаторы, ингибиторы 5-альфа-редуктазы)',
          'HoLEP — энуклеация гольмиевым лазером',
          'ТУРП — классическая эндоскопическая резекция',
          'Rezūm — уменьшение объёма водяным паром (при небольших простатах)',
          'Открытая (простая) аденомэктомия — при очень больших объёмах, всё реже'
        ],
        comparison: {
          title: 'Сравнение ThuLEP, HoLEP, ТУРП и Rezūm',
          columns: ['Критерий', 'ThuLEP', 'HoLEP', 'ТУРП', 'Rezūm'],
          rows: [
            {
              label: 'Подходящий объём простаты',
              values: ['Любой, особенно большой', 'Любой, особенно большой', 'Малый–средний', 'Малый–средний']
            },
            { label: 'Ткань направляется на гистологию', values: ['Да', 'Да', 'Да', 'Нет'] },
            { label: 'Средний срок катетера', values: ['1–2 дня', '1–2 дня', '2–3 дня', 'Переменный'] },
            { label: 'Пребывание в больнице', values: ['1 ночь', '1 ночь', '1–2 ночи', 'Возможно амбулаторно'] },
            {
              label: 'Влияние на половую функцию',
              values: [
                'Ретроградная эякуляция часто',
                'Ретроградная эякуляция часто',
                'Ретроградная эякуляция часто',
                'Эякуляция страдает меньше'
              ]
            }
          ],
          note:
            'Таблица носит общий информационный характер. Метод подбирается индивидуально с учётом объёма простаты, сопутствующих заболеваний и приоритетов пациента.'
        },
        recovery: [
          {
            period: 'Первые 48 часов',
            body: 'Катетер установлен. Рекомендуется обильное питьё; лёгкое розовое окрашивание мочи и осадок возможны и считаются ожидаемыми.'
          },
          {
            period: '1-я неделя',
            body: 'Катетер удалён. Жжение и позывы при мочеиспускании постепенно уменьшаются. Рекомендуются короткие прогулки; подъём тяжестей и долгие поездки исключаются.'
          },
          {
            period: '2–3-я неделя',
            body: 'Улучшение струи становится отчётливым. Возвращение к офисной работе обычно возможно в этот период. Упражнения для тазового дна продолжают.'
          },
          {
            period: '4–6-я неделя',
            body: 'Подтекание мочи, если оно было, в основном проходит. Для тяжёлых нагрузок и половой жизни дожидаются разрешения врача.'
          },
          {
            period: '3-й месяц',
            body: 'Результат стабилизируется. На контроле повторяют балл IPSS и урофлоуметрию, чтобы объективно измерить улучшение.'
          }
        ],
        price: {
          from: 0,
          to: 0,
          currency: 'EUR',
          disclaimer:
            'Стоимость зависит от объёма простаты, сопутствующих вмешательств и длительности пребывания. Точное предложение даётся после предварительной оценки.'
        },
        packageIncludes: [
          'Операция и пребывание в больнице',
          'Анестезия и операционная',
          'Предоперационное обследование',
          'Гистологическое исследование',
          'Трансферы аэропорт–больница–отель',
          'Проживание (пациент + 1 сопровождающий)',
          'Медицинский переводчик и координатор пациента',
          'Онлайн-наблюдение после выписки'
        ],
        faqs: [
          {
            q: 'Чем ThuLEP отличается от HoLEP?',
            a: 'Оба метода — энуклеация, при которой обтурирующая ткань простаты удаляется целиком; различие в лазере. HoLEP использует гольмиевый лазер, ThuLEP — тулиевый. Поскольку тулий работает в непрерывном режиме, контроль кровотечения при рассечении проще. С точки зрения пациента ход операции, восстановление и ожидаемые результаты во многом схожи; выбор определяется опытом хирурга и имеющимся оборудованием.'
          },
          {
            q: 'У меня очень большая простата — возможен ли закрытый метод?',
            a: 'Да. Главное преимущество энуклеации в том, что она применима и при больших объёмах. Размеры, которые раньше требовали открытой операции, сегодня лечатся с помощью ThuLEP без разрезов.'
          },
          {
            q: 'Пострадает ли половая функция?',
            a: 'Эрекция, как правило, сохраняется. При этом ретроградная эякуляция — попадание семени в мочевой пузырь вместо выхода наружу — встречается часто. Для здоровья она не опасна, но влияет на фертильность. Если вы планируете детей, это нужно обсудить до операции.'
          },
          {
            q: 'Сколько времени стоит катетер?',
            a: 'Обычно 1–2 дня. Катетер удаляют, когда моча становится прозрачной, и выписывают после того, как вы начнёте мочиться самостоятельно. Изредка этот срок длиннее.'
          },
          {
            q: 'Я принимаю антикоагулянты — можно ли мне оперироваться?',
            a: 'Поскольку тулиевый лазер облегчает контроль кровотечения, ThuLEP может рассматриваться у таких пациентов. Однако вопрос отмены или коррекции препарата решает наблюдающий вас врач. Не прекращайте приём самостоятельно.'
          },
          {
            q: 'Исследуют ли удалённую ткань и что будет, если найдут рак?',
            a: 'Да. При энуклеации вся удалённая ткань направляется на гистологию. Если обнаружен неожиданный очаг рака, в зависимости от стадии составляется план дополнительного лечения или наблюдения, и он подробно вам разъясняется.'
          },
          {
            q: 'Потребуется ли повторная операция?',
            a: 'Поскольку энуклеация удаляет обтурирующую ткань целиком, она нацелена на длительный результат. Тем не менее ни один метод не гарантирует, что повторное лечение никогда не понадобится; рекомендуется регулярное наблюдение.'
          },
          {
            q: 'Останется ли недержание навсегда?',
            a: 'Подтекание мочи в первые недели после операции у большинства пациентов временное и постепенно проходит. Упражнения для тазового дна этому способствуют. Стойкое недержание встречается редко; этот риск обсуждается с вами отдельно при предоперационной оценке.'
          },
          {
            q: 'Когда можно лететь после операции?',
            a: 'Разрешение на перелёт обычно даётся после контрольного осмотра, как правило через 7 дней после вмешательства. В длительных перелётах рекомендуются движение и достаточное питьё для снижения риска тромбов.'
          }
        ],
        sources: [
          {
            label:
              'Рекомендации EAU по ведению ненейрогенных СНМП у мужчин — Европейская ассоциация урологии',
            url: 'https://uroweb.org/guidelines/management-of-non-neurogenic-male-luts'
          },
          {
            label:
              'Ergün M, Sağır S, Hacibey İ. ThuLEP technique for managing benign prostatic hyperplasia: intraoperative and postoperative complications in a series of 42 consecutive cases. Journal of Surgery and Medicine, 2025.'
          }
        ]
      },
      ar: {
        title: 'ThuLEP (استئصال البروستاتا بليزر الثوليوم)',
        summary:
          'طريقة تنظيرية يُستأصل فيها النسيج المسبّب للانسداد في البروستاتا المتضخّمة كاملًا بليزر الثوليوم.',
        metaTitle: 'ThuLEP: استئصال البروستاتا بليزر الثوليوم',
        metaDescription:
          'ThuLEP لتضخم البروستاتا الحميد: لمن تناسب، وكيف تُجرى، والمخاطر، والتعافي، ومقارنتها بـ HoLEP وTURP.',
        quickFacts: {
          duration: '60–120 دقيقة',
          anesthesia: 'تخدير عام أو نصفي',
          hospitalStay: 'ليلة واحدة',
          stayInTurkey: '5–7 أيام',
          catheter: '1–2 يوم',
          returnToWork: '2–3 أسابيع',
          flightClearance: 'بدءًا من اليوم السابع'
        },
        definition: [
          'تضخم البروستاتا الحميد هو نمو نسيج البروستاتا مع التقدّم في العمر بما يضغط على مجرى البول من الخارج. وأكثر الشكاوى شيوعًا ضعف تدفق البول، وصعوبة بدء التبول، والاستيقاظ عدة مرات ليلًا، والإحساس بعدم إفراغ المثانة تمامًا. وفي الحالات المتقدّمة قد يحدث احتباس بولي أو التهابات بولية متكرّرة أو حصوات في المثانة.',
          'ThuLEP عملية تنظيرية يُفصَل فيها النسيج المسبّب للانسداد عن محفظة البروستاتا بليزر الثوليوم ويُزال كاملًا ككتلة واحدة. ولا يُجرى أي شق في الجسم؛ إذ تتم العملية بالكامل عبر مجرى البول. وبينما يُكشَط النسيج في عملية TURP التقليدية على شكل شرائح صغيرة، يُقشَّر في الاستئصال كقطعة واحدة — وهو منطق الجراحة المفتوحة مطبّقًا بأسلوب مغلق.',
          'يعمل ليزر الثوليوم بموجة مستمرة؛ فيقطع النسيج ويُغلق الأوعية الصغيرة في الوقت نفسه. ولأن ذلك يسهّل السيطرة على النزف، قد تُفضَّل هذه الطريقة في البروستاتا كبيرة الحجم ولدى مرضى مختارين يحتاجون إلى حذر بسبب أدوية سيولة الدم.',
          'يُفتَّت النسيج المستأصل داخل المثانة بجهاز يُسمّى المفتّت (morcellator)، ثم يُخرَج ويُرسَل إلى الفحص النسيجي. وهذا فرق مهم عن الطرق التي تبخّر النسيج: فإن وُجد بؤرة سرطانية غير متوقّعة، لا يفوت التشخيص.'
        ],
        eligibility: {
          suitable: [
            'المرضى ذوو البروستاتا متوسطة أو كبيرة الحجم الذين لا يستفيدون كفايةً من العلاج الدوائي',
            'المرضى غير القادرين على مواصلة الدواء بسبب آثاره الجانبية',
            'المرضى الذين يعانون احتباسًا بوليًا متكرّرًا أو أصبحوا معتمدين على القسطرة',
            'المرضى الذين تتكرّر لديهم التهابات المسالك أو تتكوّن حصوات المثانة بسبب التضخم',
            'مرضى مختارون يحتاجون إلى حذر في السيطرة على النزف، متى رأى الجرّاح أن الطريقة مناسبة'
          ],
          notSuitable: [
            'المصابون بالتهاب بولي نشط — يُعالَج الالتهاب أولًا وتُؤجَّل العملية',
            'من لم يُستبعد لديهم بعد الاشتباه بسرطان البروستاتا — يُستكمل التقييم التشخيصي أولًا',
            'من تنجم أعراضهم عن ضعف عضلة المثانة لا عن الانسداد؛ فقد تكون الفائدة المتوقّعة محدودة',
            'المرضى ذوو الخطورة التخديرية العالية بسبب أمراض مصاحبة',
            'من لديهم رغبة في الإنجاب — فاحتمال القذف الرجوعي قائم ويجب مناقشته قبل العملية'
          ]
        },
        technology: [
          'منصّة ليزر الثوليوم Quanta',
          'ثوليوم بموجة مستمرة: قطع وسيطرة على النزف في آن واحد',
          'إخراج النسيج من المثانة بأمان باستخدام المفتّت',
          'إرسال كامل النسيج المستأصل إلى الفحص النسيجي'
        ],
        surgeonExperience: {
          caseVolume: '',
          note:
            'للأستاذ المشارك د. مسلم إرغن بحث محكّم حول تقنية ThuLEP يقيّم المضاعفات أثناء العملية وبعدها (Journal of Surgery and Medicine, 2025).'
        },
        timeline: [
          {
            when: 'عن بُعد',
            title: 'التقييم المبدئي',
            body: 'تُراجَع نتائج قياس تدفق البول ومؤشر الأعراض IPSS وقيمة PSA وحجم البروستاتا والبول المتبقي بعد التبول، ثم تُقيَّم ملاءمة الطريقة لحالتكم.'
          },
          {
            when: 'اليوم الأول',
            title: 'الوصول والفحوص',
            body: 'فحص سريري مباشر واستكمال ما ينقص من فحوص وتقييم التخدير.'
          },
          {
            when: 'اليوم الثاني',
            title: 'العملية',
            body: 'تُجرى ThuLEP تحت تخدير عام أو نصفي؛ وتستغرق عادةً 60–120 دقيقة ولا تتطلّب أي شق.'
          },
          {
            when: 'اليوم الثالث',
            title: 'إزالة القسطرة والخروج',
            body: 'تُزال القسطرة عندما يصفو البول؛ ويُخطَّط للخروج بعد التأكد من قدرتكم على التبول تلقائيًا.'
          },
          {
            when: 'اليوم 7–10',
            title: 'المتابعة والنتيجة النسيجية',
            body: 'يُجرى فحص المتابعة وتُراجَع نتيجة الفحص النسيجي ويُمنَح الإذن برحلة العودة.'
          }
        ],
        risks: [
          'حرقة وإلحاح مفاجئ عند التبول بشكل مؤقّت',
          'تسرّب بولي جهدي مؤقّت — يتحسّن لدى معظم المرضى خلال أسابيع، وتمارين قاع الحوض تدعم ذلك',
          'القذف الرجوعي: انتقال السائل المنوي إلى المثانة بدل خروجه؛ شائع ويؤثر في الخصوبة',
          'التهاب المسالك البولية',
          'تضيّق الإحليل أو تصلّب عنق المثانة (أقل شيوعًا؛ وقد يتطلّب إجراءً إضافيًا)',
          'النزف والمخاطر الجراحية العامة المرتبطة بالتخدير'
        ],
        alternatives: [
          'العلاج الدوائي (حاصرات ألفا، مثبطات 5-ألفا ريدكتاز)',
          'HoLEP — الاستئصال بليزر الهولميوم',
          'TURP — الاستئصال التنظيري التقليدي',
          'Rezūm — تقليل الحجم ببخار الماء (للبروستاتا الأصغر)',
          'الاستئصال المفتوح (البسيط) — للبروستاتا كبيرة الحجم جدًا، ويقلّ استخدامه تدريجيًا'
        ],
        comparison: {
          title: 'مقارنة ThuLEP وHoLEP وTURP وRezūm',
          columns: ['المعيار', 'ThuLEP', 'HoLEP', 'TURP', 'Rezūm'],
          rows: [
            {
              label: 'حجم البروستاتا المناسب',
              values: ['كل الأحجام، خاصة الكبيرة', 'كل الأحجام، خاصة الكبيرة', 'صغير–متوسط', 'صغير–متوسط']
            },
            { label: 'إرسال النسيج للفحص النسيجي', values: ['نعم', 'نعم', 'نعم', 'لا'] },
            { label: 'متوسط مدة القسطرة', values: ['1–2 يوم', '1–2 يوم', '2–3 أيام', 'متغيّرة'] },
            { label: 'الإقامة في المستشفى', values: ['ليلة واحدة', 'ليلة واحدة', 'ليلة إلى ليلتين', 'قد تكون ليوم واحد'] },
            {
              label: 'الأثر في الوظيفة الجنسية',
              values: [
                'القذف الرجوعي شائع',
                'القذف الرجوعي شائع',
                'القذف الرجوعي شائع',
                'القذف أقل تأثرًا'
              ]
            }
          ],
          note:
            'هذا الجدول لأغراض التوعية العامة. وتُحدَّد الطريقة لكل حالة على حدة بحسب حجم البروستاتا والأمراض المصاحبة وأولويات المريض.'
        },
        recovery: [
          {
            period: 'أول 48 ساعة',
            body: 'القسطرة موضوعة. ويُنصح بشرب كميات وافرة من السوائل؛ وقد يُلاحَظ لون وردي خفيف ورواسب في البول، وهذا أمر متوقّع.'
          },
          {
            period: 'الأسبوع الأول',
            body: 'أُزيلت القسطرة. وتقلّ الحرقة والإلحاح عند التبول تدريجيًا. ويُنصح بالمشي القصير، مع تجنّب رفع الأثقال والسفر الطويل بالسيارة.'
          },
          {
            period: 'الأسبوع 2–3',
            body: 'يصبح تحسّن تدفق البول واضحًا. وعادةً ما تمكن العودة إلى العمل المكتبي في هذه الفترة. وتستمر تمارين قاع الحوض (كيجل).'
          },
          {
            period: 'الأسبوع 4–6',
            body: 'يتراجع التسرّب البولي إن وُجد إلى حدٍّ كبير. ويُنتظر إذن الجرّاح لممارسة النشاط البدني الشاق والعلاقة الزوجية.'
          },
          {
            period: 'الشهر الثالث',
            body: 'تستقرّ النتائج. وفي المتابعة يُعاد قياس مؤشر IPSS وتدفق البول لقياس التحسّن موضوعيًا.'
          }
        ],
        price: {
          from: 0,
          to: 0,
          currency: 'EUR',
          disclaimer:
            'تختلف التكلفة بحسب حجم البروستاتا والإجراءات المرافقة ومدة الإقامة. ويُقدَّم عرض نهائي بعد التقييم المبدئي.'
        },
        packageIncludes: [
          'العملية والإقامة في المستشفى',
          'التخدير وغرفة العمليات',
          'الفحوص قبل العملية',
          'الفحص النسيجي',
          'تنقّلات المطار–المستشفى–الفندق',
          'الإقامة (المريض + مرافق واحد)',
          'مترجم طبي ومنسّق للمرضى',
          'متابعة عبر الإنترنت بعد الخروج'
        ],
        faqs: [
          {
            q: 'ما الفرق بين ThuLEP وHoLEP؟',
            a: 'كلتاهما طريقة استئصال تُزيل النسيج المسبّب للانسداد كاملًا؛ والفرق في نوع الليزر. فـ HoLEP تستخدم ليزر الهولميوم، وThuLEP ليزر الثوليوم. ولأن الثوليوم يعمل بموجة مستمرة، تصبح السيطرة على النزف أثناء القطع أيسر. ومن وجهة نظر المريض فإن سير العملية والتعافي والنتائج المتوقّعة متقاربة إلى حدّ كبير؛ ويعتمد الاختيار على خبرة الجرّاح والأجهزة المتاحة.'
          },
          {
            q: 'بروستاتي كبيرة جدًا، فهل يمكن إجراء طريقة مغلقة؟',
            a: 'نعم. أهم ميزة في طرق الاستئصال أنها قابلة للتطبيق في البروستاتا كبيرة الحجم أيضًا. فالأحجام التي كانت تستلزم سابقًا جراحة مفتوحة يمكن علاجها بـ ThuLEP دون أي شق.'
          },
          {
            q: 'هل تتأثر وظيفتي الجنسية؟',
            a: 'عادةً ما يُحافَظ على الانتصاب. غير أن القذف الرجوعي — انتقال السائل المنوي إلى المثانة بدل خروجه — تغيّر شائع. وهو غير ضار بالصحة لكنه يؤثر في الخصوبة. فإن كانت لديكم رغبة في الإنجاب، يجب أن نناقش ذلك قبل العملية.'
          },
          {
            q: 'كم تبقى القسطرة؟',
            a: 'عادةً يومًا إلى يومين. تُزال القسطرة عندما يصفو البول، وتخرجون بعد التأكد من قدرتكم على التبول تلقائيًا. ونادرًا ما تطول هذه المدة.'
          },
          {
            q: 'أتناول أدوية سيولة الدم، فهل يمكنني إجراء العملية؟',
            a: 'لأن ليزر الثوليوم يسهّل السيطرة على النزف، يمكن النظر في ThuLEP لدى هؤلاء المرضى. لكن قرار إيقاف الدواء أو تعديله يُتَّخذ مع الطبيب المتابع لحالتكم. لا توقفوا الدواء من تلقاء أنفسكم.'
          },
          {
            q: 'هل يُفحَص النسيج المستأصل، وماذا لو ظهر سرطان؟',
            a: 'نعم. في الاستئصال يُرسَل كامل النسيج إلى الفحص النسيجي. وإذا وُجدت بؤرة سرطانية غير متوقّعة، تُعدّ خطة علاج إضافي أو متابعة بحسب المرحلة وتُشرَح لكم بالتفصيل.'
          },
          {
            q: 'هل تحتاج العملية إلى تكرار؟',
            a: 'لأن الاستئصال يزيل النسيج المسبّب للانسداد كاملًا، فهو يستهدف نتيجة طويلة الأمد. ومع ذلك لا تضمن أي طريقة عدم الحاجة إلى علاج لاحق؛ ويُنصَح بالمتابعة المنتظمة.'
          },
          {
            q: 'هل يصبح تسرّب البول دائمًا؟',
            a: 'التسرّب الذي قد يظهر في الأسابيع الأولى بعد العملية مؤقّت لدى معظم المرضى ويتحسّن تدريجيًا. وتمارين قاع الحوض تدعم ذلك. أما التسرّب الدائم فنادر؛ وتُناقَش هذه المخاطرة معكم على حدة أثناء التقييم قبل العملية.'
          },
          {
            q: 'متى يمكنني السفر جوًا بعد العملية؟',
            a: 'يُمنَح إذن السفر عادةً بعد فحص المتابعة، وغالبًا بعد 7 أيام من العملية. وفي الرحلات الطويلة يُنصح بالحركة وشرب السوائل لتقليل خطر الجلطات.'
          }
        ],
        sources: [
          {
            label:
              'إرشادات EAU حول التعامل مع أعراض الجهاز البولي السفلي غير العصبية لدى الرجال — الجمعية الأوروبية للمسالك البولية',
            url: 'https://uroweb.org/guidelines/management-of-non-neurogenic-male-luts'
          },
          {
            label:
              'Ergün M, Sağır S, Hacibey İ. ThuLEP technique for managing benign prostatic hyperplasia: intraoperative and postoperative complications in a series of 42 consecutive cases. Journal of Surgery and Medicine, 2025.'
          }
        ]
      }
    }
  },
  {
    slug: 'robotik-prostatektomi',
    lastReviewed: '2026-10-03',
    // TODO-DOGRULA: robotik prostatektomi EUR fiyat aralığı girilecek (priceRangeEUR).
    icon: 'robot',
    i18n: {
      tr: {
        title: 'Robotik / Laparoskopik Radikal Prostatektomi',
        summary:
          'Prostat kanserinde prostat bezinin robot destekli, minimal invaziv yöntemle alınması.',
        metaTitle: 'Robotik Prostatektomi | Prostat Kanseri Cerrahisi',
        metaDescription:
          'Robot destekli radikal prostatektomi ile prostat kanseri tedavisi: süreç, riskler, alternatifler, fiyat aralığı ve sık sorulan sorular.',
        quickFacts: {
          duration: '2–4 saat',
          anesthesia: 'Genel anestezi',
          hospitalStay: '2–3 gece',
          stayInTurkey: '7–10 gün',
          catheter: '7–10 gün',
          returnToWork: '3–4 hafta',
          flightClearance: '10. günden sonra'
        },
        definition: [
          'Radikal prostatektomi, prostat kanserinin bez içinde sınırlı olduğu durumlarda prostat bezinin ve çevresindeki bir miktar dokunun tamamen alınması işlemidir.',
          'Robot destekli yöntemde cerrah, konsol başından yönettiği robotik kollar aracılığıyla milimetrik hassasiyetle çalışır. Küçük kesiler sayesinde kan kaybı, ağrı ve iyileşme süresi genellikle açık cerrahiye göre daha azdır.',
          'Amaç kanserin kontrol altına alınmasının yanında, mümkün olduğunda idrar tutma ve cinsel işlevi koruyan sinir koruyucu tekniğin uygulanmasıdır.'
        ],
        eligibility: {
          suitable: [
            'Kanserin prostat bezi içinde sınırlı olduğu (lokalize) hastalar',
            'Genel sağlık durumu ameliyat ve genel anesteziye uygun olanlar',
            'Beklenen yaşam süresi uzun, aktif tedavi tercih eden hastalar'
          ],
          notSuitable: [
            'Yaygın metastaz varlığında (öncelik sistemik tedavi)',
            'Ağır kalp/akciğer hastalığı nedeniyle anestezi riski yüksek olanlar',
            'Çok düşük riskli, aktif izlem için uygun seçilmiş hastalar'
          ]
        },
        technology: [
          'da Vinci robotik cerrahi sistemi',
          'Sinir koruyucu (nerve-sparing) teknik',
          'Yüksek çözünürlüklü 3B görüntüleme ile milimetrik diseksiyon'
        ],
        recovery: [
          { period: '1. hafta', body: 'Sonda ile taburculuk; kısa yürüyüşler önerilir, ağır kaldırmaktan kaçınılır.' },
          { period: '2. hafta', body: 'Sonda alınır. İdrar kaçırma bu dönemde beklenebilir; pelvik taban egzersizlerine başlanır.' },
          { period: '3–4. hafta', body: 'Günlük yaşama ve masa başı işe dönüş. Kontinans kademeli olarak düzelir.' },
          { period: '2–3. ay', body: 'İdrar kontrolü hastaların çoğunda belirgin düzelir; ilk PSA kontrolü yapılır.' },
          { period: '6–12. ay', body: 'Cinsel işlevin toparlanması bu döneme yayılır; sinir koruyucu cerrahide şans daha yüksektir.' }
        ],
        sources: [
          { label: 'EAU Guidelines on Prostate Cancer — Avrupa Üroloji Derneği', url: 'https://uroweb.org/guidelines/prostate-cancer' }
        ],
        surgeonExperience: {
          caseVolume: '' /* TODO-DOGRULA: caseStats.ts */,
          note: 'Vaka sayısı, Doç. Dr. Müslüm Ergün’ün bu alandaki toplam cerrahi deneyimini yansıtır.'
        },
        timeline: [
          {
            when: 'Uzaktan',
            title: 'Ön değerlendirme',
            body: 'PSA, biyopsi ve görüntüleme sonuçlarınızı çevrimiçi paylaşırsınız; ekip uygunluğu değerlendirir.'
          },
          {
            when: '1–2. Gün',
            title: 'Varış ve muayene',
            body: 'İstanbul’a varış, yüz yüze muayene, anestezi ve gerekli ameliyat öncesi tetkikler.'
          },
          {
            when: '3. Gün',
            title: 'Ameliyat',
            body: 'Robot destekli prostatektomi; işlem genellikle 2–4 saat sürer, aynı gün yoğun bakım gerektirmez.'
          },
          {
            when: '4–5. Gün',
            title: 'Taburculuk',
            body: 'Sonda ile taburculuk; yürüyüş ve hafif aktiviteye başlanır.'
          },
          {
            when: '7–10. Gün',
            title: 'Kontrol ve sonda alımı',
            body: 'Kontrol muayenesi, sonda alımı ve patoloji sonucunun değerlendirilmesi; ardından dönüş uçuşu onayı.'
          }
        ],
        risks: [
          'Geçici veya kalıcı idrar kaçırma (inkontinans)',
          'Ereksiyon işlevinde değişiklik (sinir koruyucu teknikle risk azalır)',
          'Kanama, enfeksiyon ve anesteziye bağlı genel cerrahi riskler',
          'Nadiren komşu organ yaralanması'
        ],
        alternatives: [
          'Aktif izlem (düşük riskli, seçili hastalarda)',
          'Radyoterapi (dış ışın veya brakiterapi)',
          'Fokal tedaviler (seçili vakalarda)',
          'Hormon tedavisi (ileri evrede tamamlayıcı)'
        ],
        price: {
          from: 0,
          to: 0,
          currency: 'EUR',
          disclaimer:
            'Fiyat aralığı evre, ek işlem ve konaklama süresine göre değişir. Kesin teklif ön değerlendirme sonrası verilir.'
        },
        packageIncludes: [
          'Cerrahi ve hastane yatışı',
          'Anestezi ve ameliyathane',
          'Ameliyat öncesi tetkikler',
          'Havalimanı–hastane–otel transferleri',
          'Konaklama (hasta + 1 refakatçi)',
          'Tıbbi tercüman ve hasta koordinatörü',
          'Taburculuk sonrası online kontroller'
        ],
        faqs: [
          {
            q: 'Türkiye’de ne kadar kalmam gerekir?',
            a: 'Genellikle 7–10 gün önerilir; kesin süre iyileşme hızınıza ve sonda alım zamanına göre belirlenir.'
          },
          {
            q: 'Sinir koruyucu cerrahi bana uygun mu?',
            a: 'Kanserin yerleşimi ve evresine bağlıdır; ameliyat öncesi görüntüleme ve muayene sonrası netleşir.'
          },
          {
            q: 'Ameliyat sonrası ne zaman uçabilirim?',
            a: 'Çoğu hasta kontrol ve sonda alımından sonra, genellikle 10. günden itibaren uçuş için onay alır.'
          }
        ]
      },
      en: {
        title: 'Robotic / Laparoscopic Radical Prostatectomy',
        summary:
          'Robot-assisted, minimally invasive removal of the prostate gland for prostate cancer.',
        metaTitle: 'Robotic Prostatectomy | Prostate Cancer Surgery',
        metaDescription:
          'Robot-assisted radical prostatectomy for prostate cancer: process, risks, alternatives, price range and frequently asked questions.',
        quickFacts: {
          duration: '2–4 hours',
          anesthesia: 'General anesthesia',
          hospitalStay: '2–3 nights',
          stayInTurkey: '7–10 days',
          catheter: '7–10 days',
          returnToWork: '3–4 weeks',
          flightClearance: 'From day 10'
        },
        definition: [
          'Radical prostatectomy is the complete removal of the prostate gland and some surrounding tissue when cancer is confined to the gland.',
          'In the robot-assisted approach the surgeon operates robotic arms from a console with millimetric precision. Small incisions typically mean less blood loss, less pain and faster recovery than open surgery.',
          'The goal is cancer control while, where feasible, preserving urinary continence and sexual function through nerve-sparing technique.'
        ],
        eligibility: {
          suitable: [
            'Patients whose cancer is confined to the prostate gland (localized)',
            'Those whose general health is suitable for surgery and general anesthesia',
            'Patients with a long life expectancy who prefer active treatment'
          ],
          notSuitable: [
            'Presence of widespread metastasis (systemic therapy takes priority)',
            'High anesthetic risk due to severe heart or lung disease',
            'Selected very-low-risk patients suitable for active surveillance'
          ]
        },
        technology: [
          'da Vinci robotic surgery system',
          'Nerve-sparing technique',
          'Millimetric dissection with high-definition 3D vision'
        ],
        recovery: [
          { period: 'Week 1', body: 'Discharge with catheter; short walks are encouraged, heavy lifting is avoided.' },
          { period: 'Week 2', body: 'The catheter is removed. Some urinary leakage is expected; pelvic floor exercises begin.' },
          { period: 'Weeks 3–4', body: 'Return to daily life and desk work. Continence improves gradually.' },
          { period: 'Months 2–3', body: 'Urinary control improves markedly in most patients; the first PSA check is done.' },
          { period: 'Months 6–12', body: 'Recovery of sexual function occurs over this period; chances are higher after nerve-sparing surgery.' }
        ],
        sources: [
          { label: 'EAU Guidelines on Prostate Cancer — European Association of Urology', url: 'https://uroweb.org/guidelines/prostate-cancer' }
        ],
        surgeonExperience: {
          caseVolume: '' /* TODO-DOGRULA: caseStats.ts */,
          note: 'The case volume reflects Assoc. Prof. Dr. Müslüm Ergün’s total surgical experience in this area.'
        },
        timeline: [
          {
            when: 'Remote',
            title: 'Pre-assessment',
            body: 'You share PSA, biopsy and imaging results online; the team assesses suitability.'
          },
          {
            when: 'Day 1–2',
            title: 'Arrival & exam',
            body: 'Arrival in Istanbul, in-person exam, anesthesia and required pre-operative tests.'
          },
          {
            when: 'Day 3',
            title: 'Surgery',
            body: 'Robot-assisted prostatectomy; usually 2–4 hours, no routine ICU stay.'
          },
          {
            when: 'Day 4–5',
            title: 'Discharge',
            body: 'Discharge with catheter; walking and light activity begin.'
          },
          {
            when: 'Day 7–10',
            title: 'Review & catheter removal',
            body: 'Follow-up exam, catheter removal and pathology review; then clearance to fly home.'
          }
        ],
        risks: [
          'Temporary or permanent urinary incontinence',
          'Changes in erectile function (reduced with nerve-sparing technique)',
          'Bleeding, infection and general surgical/anesthetic risks',
          'Rarely, injury to adjacent organs'
        ],
        alternatives: [
          'Active surveillance (in selected low-risk patients)',
          'Radiotherapy (external beam or brachytherapy)',
          'Focal therapies (in selected cases)',
          'Hormone therapy (adjunct in advanced disease)'
        ],
        price: {
          from: 0,
          to: 0,
          currency: 'EUR',
          disclaimer:
            'The price range varies with stage, additional procedures and length of stay. A firm quote follows pre-assessment.'
        },
        packageIncludes: [
          'Surgery and hospital stay',
          'Anesthesia and operating room',
          'Pre-operative tests',
          'Airport–hospital–hotel transfers',
          'Accommodation (patient + 1 companion)',
          'Medical interpreter and patient coordinator',
          'Post-discharge online follow-ups'
        ],
        faqs: [
          {
            q: 'How long do I need to stay in Türkiye?',
            a: 'Usually 7–10 days; the exact duration depends on your recovery and catheter removal timing.'
          },
          {
            q: 'Am I a candidate for nerve-sparing surgery?',
            a: 'It depends on tumor location and stage, confirmed after pre-operative imaging and examination.'
          },
          {
            q: 'When can I fly after surgery?',
            a: 'Most patients are cleared to fly after review and catheter removal, typically from day 10.'
          }
        ]
      },
      ar: {
        title: 'استئصال البروستاتا الجذري بالروبوت / بالمنظار',
        summary: 'إزالة غدة البروستاتا بأسلوب دقيق قليل التوغل بمساعدة الروبوت لعلاج سرطان البروستاتا.',
        metaTitle: 'استئصال البروستاتا بالروبوت | جراحة سرطان البروستاتا',
        metaDescription: 'علاج سرطان البروستاتا باستئصال جذري بمساعدة الروبوت: مسار العلاج، المخاطر، البدائل، نطاق السعر والأسئلة الشائعة.',
        quickFacts: {
          duration: '2–4 ساعات',
          anesthesia: 'تخدير عام',
          hospitalStay: '2–3 ليالٍ',
          stayInTurkey: '7–10 أيام',
          catheter: '7–10 أيام',
          returnToWork: '3–4 أسابيع',
          flightClearance: 'بدءًا من اليوم العاشر'
        },
        definition: [
          'استئصال البروستاتا الجذري هو إزالة غدة البروستاتا بالكامل مع جزء من الأنسجة المحيطة عندما يكون السرطان محصورًا داخل الغدة.',
          'في الأسلوب المعتمد على الروبوت يتحكم الجرّاح بأذرع روبوتية من وحدة تحكم بدقة تصل إلى المليمتر. وبفضل الشقوق الصغيرة يكون فقدان الدم والألم ومدة التعافي عادةً أقل مقارنةً بالجراحة المفتوحة.',
          'الهدف هو السيطرة على السرطان مع الحفاظ قدر الإمكان على التحكم في التبول والوظيفة الجنسية من خلال تقنية الحفاظ على الأعصاب.'
        ],
        eligibility: {
          suitable: [
            'المرضى الذين ينحصر لديهم السرطان داخل غدة البروستاتا (موضعي)',
            'من تسمح حالتهم الصحية العامة بالجراحة والتخدير العام',
            'المرضى ذوو العمر المتوقع الطويل الذين يفضّلون العلاج الفعّال'
          ],
          notSuitable: [
            'وجود نقائل منتشرة (الأولوية للعلاج الجهازي)',
            'ارتفاع خطر التخدير بسبب أمراض قلبية أو رئوية شديدة',
            'مرضى مختارون منخفضو الخطورة جدًا ومناسبون للمراقبة النشطة'
          ]
        },
        technology: [
          'نظام الجراحة الروبوتية da Vinci',
          'تقنية الحفاظ على الأعصاب',
          'تشريح بدقة ميليمترية مع رؤية ثلاثية الأبعاد عالية الوضوح'
        ],
        recovery: [
          { period: 'الأسبوع الأول', body: 'الخروج مع القسطرة؛ يُنصح بالمشي القصير وتجنّب رفع الأثقال.' },
          { period: 'الأسبوع الثاني', body: 'تُزال القسطرة. قد يحدث تسرّب بولي؛ تبدأ تمارين قاع الحوض.' },
          { period: 'الأسبوع 3–4', body: 'العودة إلى الحياة اليومية والعمل المكتبي. يتحسّن التحكّم بالبول تدريجيًا.' },
          { period: 'الشهر 2–3', body: 'يتحسّن التحكّم بالبول بوضوح لدى معظم المرضى؛ ويُجرى أول فحص PSA.' },
          { period: 'الشهر 6–12', body: 'يمتد تعافي الوظيفة الجنسية على هذه الفترة؛ وتكون الفرص أعلى بعد جراحة الحفاظ على الأعصاب.' }
        ],
        sources: [
          { label: 'إرشادات EAU حول سرطان البروستاتا — الجمعية الأوروبية للمسالك البولية', url: 'https://uroweb.org/guidelines/prostate-cancer' }
        ],
        surgeonExperience: {
          caseVolume: '' /* TODO-DOGRULA: caseStats.ts */,
          note: 'يعكس عدد الحالات إجمالي الخبرة الجراحية للأستاذ المشارك د. مسلم إرغن في هذا المجال.'
        },
        timeline: [
          { when: 'عن بُعد', title: 'التقييم الأولي', body: 'تشاركون نتائج PSA والخزعة والتصوير عبر الإنترنت، ويقيّم الفريق مدى الملاءمة.' },
          { when: 'اليوم 1–2', title: 'الوصول والفحص', body: 'الوصول إلى إسطنبول، فحص شخصي، وتقييم التخدير والفحوصات اللازمة قبل العملية.' },
          { when: 'اليوم 3', title: 'العملية', body: 'استئصال البروستاتا بمساعدة الروبوت؛ يستغرق عادةً 2–4 ساعات دون حاجة روتينية للعناية المركزة.' },
          { when: 'اليوم 4–5', title: 'الخروج', body: 'الخروج مع قسطرة؛ والبدء بالمشي والنشاط الخفيف.' },
          { when: 'اليوم 7–10', title: 'المراجعة وإزالة القسطرة', body: 'فحص المتابعة، إزالة القسطرة ومراجعة نتيجة علم الأمراض، ثم الإذن بالسفر للعودة.' }
        ],
        risks: [
          'سلس بولي مؤقت أو دائم',
          'تغيّرات في الوظيفة الانتصابية (تقل مع تقنية الحفاظ على الأعصاب)',
          'نزيف وعدوى ومخاطر جراحية وتخديرية عامة',
          'نادرًا، إصابة الأعضاء المجاورة'
        ],
        alternatives: [
          'المراقبة النشطة (لدى مرضى مختارين منخفضي الخطورة)',
          'العلاج الإشعاعي (إشعاع خارجي أو معالجة كثبية)',
          'العلاجات الموضعية (في حالات مختارة)',
          'العلاج الهرموني (مكمّل في المراحل المتقدمة)'
        ],
        price: {
          from: 0,
          to: 0,
          currency: 'EUR',
          disclaimer: 'يختلف نطاق السعر حسب المرحلة والإجراءات الإضافية ومدة الإقامة. يُقدَّم عرض سعر نهائي بعد التقييم الأولي.'
        },
        packageIncludes: [
          'العملية والإقامة في المستشفى',
          'التخدير وغرفة العمليات',
          'الفحوصات قبل العملية',
          'التنقلات بين المطار والمستشفى والفندق',
          'الإقامة (المريض + مرافق واحد)',
          'مترجم طبي ومنسّق مرضى',
          'متابعات إلكترونية بعد الخروج'
        ],
        faqs: [
          { q: 'كم يجب أن أبقى في تركيا؟', a: 'يُوصى عادةً بـ 7–10 أيام؛ وتُحدَّد المدة الدقيقة حسب سرعة تعافيك وموعد إزالة القسطرة.' },
          { q: 'هل أنا مرشّح لجراحة الحفاظ على الأعصاب؟', a: 'يعتمد ذلك على موقع الورم ومرحلته، ويتأكد بعد التصوير والفحص قبل العملية.' },
          { q: 'متى يمكنني السفر جوًّا بعد العملية؟', a: 'يُسمح لمعظم المرضى بالسفر بعد المراجعة وإزالة القسطرة، عادةً اعتبارًا من اليوم العاشر.' }
        ]
      },
      de: {
        title: 'Robotische / laparoskopische radikale Prostatektomie',
        summary: 'Robotergestützte, minimalinvasive Entfernung der Prostata bei Prostatakrebs.',
        metaTitle: 'Robotische Prostatektomie | Prostatakrebs-Chirurgie',
        metaDescription: 'Robotergestützte radikale Prostatektomie bei Prostatakrebs: Ablauf, Risiken, Alternativen, Preisspanne und häufige Fragen.',
        quickFacts: {
          duration: '2–4 Stunden',
          anesthesia: 'Vollnarkose',
          hospitalStay: '2–3 Nächte',
          stayInTurkey: '7–10 Tage',
          catheter: '7–10 Tage',
          returnToWork: '3–4 Wochen',
          flightClearance: 'Ab Tag 10'
        },
        definition: [
          'Die radikale Prostatektomie ist die vollständige Entfernung der Prostata samt etwas umliegendem Gewebe, wenn der Krebs auf die Drüse begrenzt ist.',
          'Beim robotergestützten Verfahren steuert der Chirurg von einer Konsole aus Roboterarme mit millimetergenauer Präzision. Durch kleine Schnitte sind Blutverlust, Schmerzen und Erholungszeit in der Regel geringer als bei offener Chirurgie.',
          'Ziel ist die Tumorkontrolle bei möglichst weitgehendem Erhalt von Harnkontinenz und Sexualfunktion durch die nervenschonende Technik.'
        ],
        eligibility: {
          suitable: [
            'Patienten, deren Krebs auf die Prostata begrenzt ist (lokalisiert)',
            'Patienten, deren Allgemeinzustand Operation und Vollnarkose zulässt',
            'Patienten mit langer Lebenserwartung, die eine aktive Therapie bevorzugen'
          ],
          notSuitable: [
            'Bei ausgedehnter Metastasierung (systemische Therapie hat Vorrang)',
            'Hohes Narkoserisiko bei schwerer Herz- oder Lungenerkrankung',
            'Ausgewählte Patienten mit sehr niedrigem Risiko, geeignet für aktive Überwachung'
          ]
        },
        technology: [
          'da Vinci Robotik-Chirurgiesystem',
          'Nervenschonende Technik',
          'Millimetergenaue Präparation mit hochauflösender 3D-Sicht'
        ],
        recovery: [
          { period: 'Woche 1', body: 'Entlassung mit Katheter; kurze Spaziergänge werden empfohlen, schweres Heben vermieden.' },
          { period: 'Woche 2', body: 'Der Katheter wird entfernt. Etwas Harnverlust ist zu erwarten; Beckenbodenübungen beginnen.' },
          { period: 'Woche 3–4', body: 'Rückkehr in den Alltag und zur Bürotätigkeit. Die Kontinenz bessert sich schrittweise.' },
          { period: 'Monat 2–3', body: 'Die Harnkontrolle bessert sich bei den meisten Patienten deutlich; die erste PSA-Kontrolle erfolgt.' },
          { period: 'Monat 6–12', body: 'Die Erholung der Sexualfunktion erstreckt sich über diesen Zeitraum; nach nervenschonender Operation sind die Chancen höher.' }
        ],
        sources: [
          { label: 'EAU-Leitlinie Prostatakarzinom — Europäische Gesellschaft für Urologie', url: 'https://uroweb.org/guidelines/prostate-cancer' }
        ],
        surgeonExperience: {
          caseVolume: '' /* TODO-DOGRULA: caseStats.ts */,
          note: 'Die Fallzahl spiegelt die gesamte chirurgische Erfahrung von Doz. Dr. Müslüm Ergün in diesem Bereich wider.'
        },
        timeline: [
          { when: 'Aus der Ferne', title: 'Vorabbewertung', body: 'Sie teilen PSA-, Biopsie- und Bildgebungsbefunde online; das Team prüft die Eignung.' },
          { when: 'Tag 1–2', title: 'Ankunft & Untersuchung', body: 'Ankunft in Istanbul, persönliche Untersuchung, Anästhesie und erforderliche präoperative Tests.' },
          { when: 'Tag 3', title: 'Operation', body: 'Robotergestützte Prostatektomie; meist 2–4 Stunden, kein routinemäßiger Intensivaufenthalt.' },
          { when: 'Tag 4–5', title: 'Entlassung', body: 'Entlassung mit Katheter; Gehen und leichte Aktivität beginnen.' },
          { when: 'Tag 7–10', title: 'Kontrolle & Katheterentfernung', body: 'Nachuntersuchung, Katheterentfernung und Befundung der Pathologie; danach Reisefreigabe.' }
        ],
        risks: [
          'Vorübergehende oder dauerhafte Harninkontinenz',
          'Veränderungen der Erektionsfunktion (durch nervenschonende Technik reduziert)',
          'Blutung, Infektion sowie allgemeine chirurgische/anästhesiologische Risiken',
          'Selten Verletzung benachbarter Organe'
        ],
        alternatives: [
          'Aktive Überwachung (bei ausgewählten Niedrigrisikopatienten)',
          'Strahlentherapie (perkutan oder Brachytherapie)',
          'Fokale Therapien (in ausgewählten Fällen)',
          'Hormontherapie (ergänzend bei fortgeschrittener Erkrankung)'
        ],
        price: {
          from: 0,
          to: 0,
          currency: 'EUR',
          disclaimer: 'Die Preisspanne hängt von Stadium, Zusatzeingriffen und Aufenthaltsdauer ab. Ein verbindliches Angebot folgt nach der Vorabbewertung.'
        },
        packageIncludes: [
          'Operation und Krankenhausaufenthalt',
          'Anästhesie und Operationssaal',
          'Präoperative Untersuchungen',
          'Transfers Flughafen–Klinik–Hotel',
          'Unterkunft (Patient + 1 Begleitperson)',
          'Medizinischer Dolmetscher und Patientenkoordinator',
          'Online-Nachsorge nach der Entlassung'
        ],
        faqs: [
          { q: 'Wie lange muss ich in der Türkei bleiben?', a: 'Meist werden 7–10 Tage empfohlen; die genaue Dauer richtet sich nach Ihrer Genesung und dem Zeitpunkt der Katheterentfernung.' },
          { q: 'Bin ich für eine nervenschonende Operation geeignet?', a: 'Das hängt von Lage und Stadium des Tumors ab und wird nach präoperativer Bildgebung und Untersuchung bestätigt.' },
          { q: 'Wann darf ich nach der Operation fliegen?', a: 'Die meisten Patienten erhalten nach Kontrolle und Katheterentfernung die Reisefreigabe, in der Regel ab Tag 10.' }
        ]
      },
      ru: {
        title: 'Роботическая / лапароскопическая радикальная простатэктомия',
        summary: 'Роботизированное малоинвазивное удаление предстательной железы при раке простаты.',
        metaTitle: 'Роботическая простатэктомия | Хирургия рака простаты',
        metaDescription: 'Радикальная простатэктомия с помощью робота при раке простаты: процесс, риски, альтернативы, диапазон цен и часто задаваемые вопросы.',
        quickFacts: {
          duration: '2–4 часа',
          anesthesia: 'Общая анестезия',
          hospitalStay: '2–3 ночи',
          stayInTurkey: '7–10 дней',
          catheter: '7–10 дней',
          returnToWork: '3–4 недели',
          flightClearance: 'С 10-го дня'
        },
        definition: [
          'Радикальная простатэктомия — это полное удаление предстательной железы и части окружающих тканей, когда рак ограничен пределами железы.',
          'При роботизированном подходе хирург управляет роботическими манипуляторами с консоли с точностью до миллиметра. Благодаря небольшим разрезам кровопотеря, боль и время восстановления обычно меньше, чем при открытой операции.',
          'Цель — контроль над опухолью при максимально возможном сохранении удержания мочи и половой функции с помощью нервосберегающей техники.'
        ],
        eligibility: {
          suitable: [
            'Пациенты, у которых опухоль ограничена предстательной железой (локализованная)',
            'Пациенты, чьё общее состояние допускает операцию и общую анестезию',
            'Пациенты с длительной ожидаемой продолжительностью жизни, выбирающие активное лечение'
          ],
          notSuitable: [
            'Наличие распространённых метастазов (приоритет — системная терапия)',
            'Высокий анестезиологический риск при тяжёлых заболеваниях сердца или лёгких',
            'Отдельные пациенты очень низкого риска, подходящие для активного наблюдения'
          ]
        },
        technology: [
          'Роботическая хирургическая система da Vinci',
          'Нервосберегающая техника',
          'Миллиметровая диссекция с 3D-визуализацией высокого разрешения'
        ],
        recovery: [
          { period: '1-я неделя', body: 'Выписка с катетером; рекомендуются короткие прогулки, подъём тяжестей исключён.' },
          { period: '2-я неделя', body: 'Катетер удаляют. Возможно подтекание мочи; начинают упражнения для мышц тазового дна.' },
          { period: '3–4-я неделя', body: 'Возвращение к повседневной жизни и офисной работе. Удержание мочи постепенно улучшается.' },
          { period: '2–3-й месяц', body: 'У большинства пациентов контроль мочеиспускания заметно улучшается; выполняется первый контроль PSA.' },
          { period: '6–12-й месяц', body: 'Восстановление половой функции занимает этот период; после нервосберегающей операции шансы выше.' }
        ],
        sources: [
          { label: 'Рекомендации EAU по раку предстательной железы — Европейская ассоциация урологии', url: 'https://uroweb.org/guidelines/prostate-cancer' }
        ],
        surgeonExperience: {
          caseVolume: '' /* TODO-DOGRULA: caseStats.ts */,
          note: 'Число операций отражает общий хирургический опыт доцента д-ра Мюслюма Эргюна в этой области.'
        },
        timeline: [
          { when: 'Удалённо', title: 'Предварительная оценка', body: 'Вы делитесь результатами PSA, биопсии и снимков онлайн; команда оценивает пригодность.' },
          { when: 'День 1–2', title: 'Прибытие и осмотр', body: 'Прибытие в Стамбул, очный осмотр, анестезиологическая оценка и необходимые предоперационные анализы.' },
          { when: 'День 3', title: 'Операция', body: 'Роботизированная простатэктомия; обычно 2–4 часа, без рутинного пребывания в реанимации.' },
          { when: 'День 4–5', title: 'Выписка', body: 'Выписка с катетером; начинаются ходьба и лёгкая активность.' },
          { when: 'День 7–10', title: 'Контроль и удаление катетера', body: 'Контрольный осмотр, удаление катетера и оценка результатов гистологии; затем разрешение на перелёт.' }
        ],
        risks: [
          'Временное или стойкое недержание мочи',
          'Изменения эректильной функции (снижаются при нервосберегающей технике)',
          'Кровотечение, инфекция и общие хирургические/анестезиологические риски',
          'Редко — повреждение соседних органов'
        ],
        alternatives: [
          'Активное наблюдение (у отдельных пациентов низкого риска)',
          'Лучевая терапия (дистанционная или брахитерапия)',
          'Очаговые методы лечения (в отдельных случаях)',
          'Гормональная терапия (дополнительно при распространённой болезни)'
        ],
        price: {
          from: 0,
          to: 0,
          currency: 'EUR',
          disclaimer: 'Диапазон цен зависит от стадии, дополнительных процедур и длительности пребывания. Точное предложение предоставляется после предварительной оценки.'
        },
        packageIncludes: [
          'Операция и пребывание в стационаре',
          'Анестезия и операционная',
          'Предоперационные анализы',
          'Трансферы аэропорт–клиника–отель',
          'Проживание (пациент + 1 сопровождающий)',
          'Медицинский переводчик и координатор пациента',
          'Онлайн-наблюдение после выписки'
        ],
        faqs: [
          { q: 'Сколько нужно оставаться в Турции?', a: 'Обычно рекомендуется 7–10 дней; точный срок зависит от скорости восстановления и времени удаления катетера.' },
          { q: 'Подхожу ли я для нервосберегающей операции?', a: 'Это зависит от расположения и стадии опухоли и уточняется после предоперационного обследования.' },
          { q: 'Когда можно лететь после операции?', a: 'Большинству пациентов разрешают перелёт после контроля и удаления катетера, обычно с 10-го дня.' }
        ]
      },
      fr: {
        title: 'Prostatectomie radicale robotique / laparoscopique',
        summary:
          'Ablation de la prostate assistée par robot, par voie mini-invasive, dans le cancer de la prostate.',
        metaTitle: 'Prostatectomie robotique | Chirurgie du cancer de la prostate',
        metaDescription:
          'Prostatectomie radicale assistée par robot pour le cancer de la prostate : déroulement, risques, alternatives, fourchette de prix et questions fréquentes.',
        quickFacts: {
          duration: '2 à 4 heures',
          anesthesia: 'Anesthésie générale',
          hospitalStay: '2 à 3 nuits',
          stayInTurkey: '7 à 10 jours',
          catheter: '7 à 10 jours',
          returnToWork: '3 à 4 semaines',
          flightClearance: 'À partir du 10e jour'
        },
        definition: [
          'La prostatectomie radicale consiste à retirer complètement la glande prostatique et une partie des tissus environnants lorsque le cancer est limité à la glande.',
          'Dans l’approche assistée par robot, le chirurgien pilote des bras robotisés depuis une console avec une précision millimétrique. De petites incisions entraînent généralement moins de saignement, moins de douleur et une récupération plus rapide qu’en chirurgie ouverte.',
          'L’objectif est le contrôle du cancer tout en préservant, lorsque c’est possible, la continence urinaire et la fonction sexuelle grâce à la technique de préservation nerveuse.'
        ],
        eligibility: {
          suitable: [
            'Patients dont le cancer est limité à la prostate (localisé)',
            'Patients dont l’état général permet la chirurgie et l’anesthésie générale',
            'Patients avec une longue espérance de vie qui privilégient un traitement actif'
          ],
          notSuitable: [
            'Présence de métastases étendues (priorité au traitement systémique)',
            'Risque anesthésique élevé en cas de cardiopathie ou pneumopathie sévère',
            'Patients sélectionnés à très faible risque, éligibles à la surveillance active'
          ]
        },
        technology: [
          'Système de chirurgie robotique da Vinci',
          'Technique de préservation nerveuse',
          'Dissection millimétrique avec vision 3D haute définition'
        ],
        recovery: [
          { period: 'Semaine 1', body: 'Sortie avec sonde ; de courtes marches sont recommandées, le port de charges est évité.' },
          { period: 'Semaine 2', body: 'La sonde est retirée. Des fuites urinaires sont attendues ; la rééducation périnéale débute.' },
          { period: 'Semaines 3–4', body: 'Reprise de la vie quotidienne et du travail de bureau. La continence s’améliore progressivement.' },
          { period: 'Mois 2–3', body: 'Le contrôle urinaire s’améliore nettement chez la plupart des patients ; le premier PSA de contrôle est réalisé.' },
          { period: 'Mois 6–12', body: 'La récupération de la fonction sexuelle s’étale sur cette période ; les chances sont meilleures après une chirurgie avec préservation nerveuse.' }
        ],
        sources: [
          { label: 'Recommandations EAU sur le cancer de la prostate — Association européenne d’urologie', url: 'https://uroweb.org/guidelines/prostate-cancer' }
        ],
        surgeonExperience: {
          caseVolume: '' /* TODO-DOGRULA: caseStats.ts */,
          note: 'Le nombre d’interventions reflète l’expérience chirurgicale totale du Dr Müslüm Ergün dans ce domaine.'
        },
        timeline: [
          {
            when: 'À distance',
            title: 'Pré-évaluation',
            body: 'Vous transmettez en ligne vos résultats de PSA, de biopsie et d’imagerie ; l’équipe évalue l’indication.'
          },
          {
            when: 'Jours 1–2',
            title: 'Arrivée et examen',
            body: 'Arrivée à Istanbul, examen clinique, consultation d’anesthésie et bilan préopératoire.'
          },
          {
            when: 'Jour 3',
            title: 'Intervention',
            body: 'Prostatectomie assistée par robot ; généralement 2 à 4 heures, sans séjour systématique en soins intensifs.'
          },
          {
            when: 'Jours 4–5',
            title: 'Sortie',
            body: 'Sortie avec sonde ; reprise de la marche et d’une activité légère.'
          },
          {
            when: 'Jours 7–10',
            title: 'Contrôle et retrait de la sonde',
            body: 'Consultation de contrôle, retrait de la sonde et analyse anatomopathologique ; puis autorisation de prendre l’avion.'
          }
        ],
        risks: [
          'Incontinence urinaire transitoire ou définitive',
          'Modification de la fonction érectile (risque réduit par la technique de préservation nerveuse)',
          'Saignement, infection et risques généraux liés à la chirurgie et à l’anesthésie',
          'Rarement, lésion d’un organe voisin'
        ],
        alternatives: [
          'Surveillance active (chez des patients sélectionnés à faible risque)',
          'Radiothérapie (externe ou curiethérapie)',
          'Traitements focaux (dans des cas sélectionnés)',
          'Hormonothérapie (en complément aux stades avancés)'
        ],
        price: {
          from: 0,
          to: 0,
          currency: 'EUR',
          disclaimer:
            'La fourchette de prix varie selon le stade, les gestes associés et la durée du séjour. Un devis ferme est établi après la pré-évaluation.'
        },
        packageIncludes: [
          'Intervention et séjour hospitalier',
          'Anesthésie et bloc opératoire',
          'Bilan préopératoire',
          'Transferts aéroport–hôpital–hôtel',
          'Hébergement (patient + 1 accompagnant)',
          'Interprète médical et coordinateur patient',
          'Contrôles en ligne après la sortie'
        ],
        faqs: [
          {
            q: 'Combien de temps dois-je rester en Türkiye ?',
            a: 'Généralement 7 à 10 jours ; la durée exacte dépend de votre récupération et du moment du retrait de la sonde.'
          },
          {
            q: 'Suis-je candidat à une chirurgie avec préservation nerveuse ?',
            a: 'Cela dépend de la localisation et du stade de la tumeur ; la décision est confirmée après l’imagerie et l’examen préopératoires.'
          },
          {
            q: 'Quand puis-je prendre l’avion après l’intervention ?',
            a: 'La plupart des patients sont autorisés à voyager après le contrôle et le retrait de la sonde, généralement à partir du 10e jour.'
          }
        ]
      }
    }
  },
  {
    slug: 'bobrek-tasi',
    // TODO-DOGRULA: böbrek taşı EUR fiyat aralığı girilecek (priceRangeEUR).
    icon: 'stone',
    i18n: {
      tr: {
        title: 'Böbrek Taşı Tedavisi (RIRS, PCNL, ESWL)',
        summary:
          'Taşın boyutu ve yerine göre kişiye özel yöntem: lazerle kırma, perkütan cerrahi veya ses dalgası.',
        metaTitle: 'Böbrek Taşı Tedavisi | RIRS, PCNL, ESWL Karşılaştırması',
        metaDescription:
          'Böbrek taşında RIRS (lazer), PCNL (perkütan) ve ESWL (ses dalgası) yöntemlerinin karşılaştırması, süreç, riskler ve fiyat aralığı.',
        definition: [
          'Böbrek taşları idrardaki minerallerin kristalleşerek birikmesiyle oluşur ve şiddetli yan ağrısı, kanlı idrar veya enfeksiyona yol açabilir.',
          'Tedavi yöntemi taşın boyutu, sertliği ve konumuna göre seçilir. Küçük taşlarda ses dalgası, orta boy taşlarda esnek üreteroskopi ile lazer, büyük taşlarda perkütan (deriden) cerrahi öne çıkar.'
        ],
        surgeonExperience: {
          caseVolume: '' /* TODO-DOGRULA: caseStats.ts */,
          note: 'Vaka sayısı, Doç. Dr. Müslüm Ergün’ün bu alandaki toplam cerrahi deneyimini yansıtır.'
        },
        timeline: [
          { when: 'Uzaktan', title: 'Ön değerlendirme', body: 'BT/ultrason ve kan-idrar sonuçlarınız incelenir, uygun yöntem planlanır.' },
          { when: '1. Gün', title: 'Varış ve tetkik', body: 'Muayene, gerekli görüntüleme ve anestezi değerlendirmesi.' },
          { when: '2. Gün', title: 'İşlem', body: 'Seçilen yönteme göre işlem; çoğu vaka günübirlik veya 1 gece yatış.' },
          { when: '3–4. Gün', title: 'Kontrol', body: 'Taşsızlık kontrolü, gerekirse stent değerlendirmesi ve dönüş onayı.' }
        ],
        risks: [
          'Kanama ve idrar yolu enfeksiyonu',
          'Geçici idrarda yanma veya kanama',
          'Stent gerektiren durumlar',
          'Taşın tam temizlenememesi ve tekrar işlem ihtiyacı'
        ],
        alternatives: [
          'İlaçla taş düşürme (küçük taşlarda)',
          'Bekle-gör yaklaşımı (belirtisiz küçük taşlar)',
          'Açık/laparoskopik cerrahi (nadiren, kompleks vakalarda)'
        ],
        comparison: {
          title: 'RIRS vs PCNL vs ESWL',
          columns: ['Kriter', 'RIRS (Lazer)', 'PCNL (Perkütan)', 'ESWL (Ses dalgası)'],
          rows: [
            { label: 'Uygun taş boyutu', values: ['~2 cm’e kadar', '2 cm ve üzeri', '~1 cm’e kadar'] },
            { label: 'Kesi', values: ['Yok (idrar yolundan)', 'Küçük deri kesisi', 'Yok (dıştan)'] },
            { label: 'Anestezi', values: ['Genel/spinal', 'Genel', 'Genelde sedasyon'] },
            { label: 'Yatış', values: ['Günübirlik–1 gece', '1–2 gece', 'Günübirlik'] },
            { label: 'Taşsızlık oranı', values: ['Yüksek', 'Çok yüksek', 'Orta'] }
          ],
          note: 'Tablo genel bilgilendirmedir; nihai yöntem kişiye göre belirlenir.'
        },
        price: {
          from: 0,
          to: 0,
          currency: 'EUR',
          disclaimer: 'Yöntem ve taş yüküne göre değişir; kesin teklif değerlendirme sonrası verilir.'
        },
        packageIncludes: [
          'İşlem ve hastane yatışı',
          'Anestezi ve gerekli tetkikler',
          'Transferler ve konaklama',
          'Tıbbi tercüman ve koordinatör',
          'Kontrol ve online takip'
        ],
        faqs: [
          { q: 'Hangi yöntem bana uygun?', a: 'Taşın boyutu, sertliği ve yerine bağlıdır; görüntüleme sonrası netleşir.' },
          { q: 'İşlem ağrılı mı?', a: 'İşlemler anestezi altında yapılır; sonrasında hafif rahatsızlık olabilir.' },
          { q: 'Stent takılır mı?', a: 'Bazı vakalarda geçici stent gerekir; genellikle kısa süre sonra alınır.' }
        ]
      },
      en: {
        title: 'Kidney Stone Treatment (RIRS, PCNL, ESWL)',
        summary: 'A method tailored to stone size and location: laser fragmentation, percutaneous surgery or shock waves.',
        metaTitle: 'Kidney Stone Treatment | RIRS, PCNL, ESWL Comparison',
        metaDescription: 'Comparison of RIRS (laser), PCNL (percutaneous) and ESWL (shock wave) for kidney stones: process, risks and price range.',
        definition: [
          'Kidney stones form when minerals in the urine crystallize and build up, and can cause severe flank pain, blood in the urine or infection.',
          'The treatment method is chosen according to the size, hardness and location of the stone. Shock waves are used for small stones, flexible ureteroscopy with laser for medium stones, and percutaneous (through the skin) surgery for large stones.'
        ],
        surgeonExperience: {
          caseVolume: '' /* TODO-DOGRULA: caseStats.ts */,
          note: 'The case volume reflects Assoc. Prof. Dr. Müslüm Ergün’s total surgical experience in this area.'
        },
        timeline: [
          { when: 'Remote', title: 'Pre-assessment', body: 'Your CT/ultrasound and blood-urine results are reviewed and the suitable method is planned.' },
          { when: 'Day 1', title: 'Arrival & tests', body: 'Examination, required imaging and anesthesia assessment.' },
          { when: 'Day 2', title: 'Procedure', body: 'Procedure according to the chosen method; most cases are day-case or a 1-night stay.' },
          { when: 'Day 3–4', title: 'Review', body: 'Stone-free check, stent assessment if needed and clearance to return.' }
        ],
        risks: [
          'Bleeding and urinary tract infection',
          'Temporary burning or blood on urination',
          'Situations requiring a stent',
          'Incomplete stone clearance and need for a repeat procedure'
        ],
        alternatives: [
          'Medical stone passage (for small stones)',
          'Watch-and-wait approach (asymptomatic small stones)',
          'Open/laparoscopic surgery (rarely, in complex cases)'
        ],
        comparison: {
          title: 'RIRS vs PCNL vs ESWL',
          columns: ['Criterion', 'RIRS (Laser)', 'PCNL (Percutaneous)', 'ESWL (Shock wave)'],
          rows: [
            { label: 'Suitable stone size', values: ['Up to ~2 cm', '2 cm and above', 'Up to ~1 cm'] },
            { label: 'Incision', values: ['None (via urinary tract)', 'Small skin incision', 'None (external)'] },
            { label: 'Anesthesia', values: ['General/spinal', 'General', 'Usually sedation'] },
            { label: 'Stay', values: ['Day-case–1 night', '1–2 nights', 'Day-case'] },
            { label: 'Stone-free rate', values: ['High', 'Very high', 'Moderate'] }
          ],
          note: 'This table is general information; the final method is determined individually.'
        },
        price: {
          from: 0,
          to: 0,
          currency: 'EUR',
          disclaimer: 'Varies by method and stone burden; a firm quote is given after assessment.'
        },
        packageIncludes: [
          'Procedure and hospital stay',
          'Anesthesia and required tests',
          'Transfers and accommodation',
          'Medical interpreter and coordinator',
          'Follow-up and online monitoring'
        ],
        faqs: [
          { q: 'Which method is right for me?', a: 'It depends on the size, hardness and location of the stone; it becomes clear after imaging.' },
          { q: 'Is the procedure painful?', a: 'Procedures are performed under anesthesia; mild discomfort may follow.' },
          { q: 'Will a stent be placed?', a: 'Some cases need a temporary stent; it is usually removed a short time later.' }
        ]
      },
      ar: {
        title: 'علاج حصوات الكلى (RIRS، PCNL، ESWL)',
        summary: 'أسلوب مُخصَّص حسب حجم الحصاة وموقعها: تفتيت بالليزر، جراحة عبر الجلد، أو موجات صادمة.',
        metaTitle: 'علاج حصوات الكلى | مقارنة RIRS وPCNL وESWL',
        metaDescription: 'مقارنة بين RIRS (ليزر) وPCNL (عبر الجلد) وESWL (موجات صادمة) لحصوات الكلى: المسار، المخاطر، ونطاق السعر.',
        definition: [
          'تتكوّن حصوات الكلى عند تبلور المعادن في البول وتراكمها، وقد تسبب ألمًا شديدًا في الخاصرة أو دمًا في البول أو التهابًا.',
          'يُختار أسلوب العلاج حسب حجم الحصاة وصلابتها وموقعها. تُستخدَم الموجات الصادمة للحصوات الصغيرة، وتنظير الحالب المرن بالليزر للحصوات المتوسطة، والجراحة عبر الجلد للحصوات الكبيرة.'
        ],
        surgeonExperience: {
          caseVolume: '' /* TODO-DOGRULA: caseStats.ts */,
          note: 'يعكس عدد الحالات إجمالي الخبرة الجراحية للأستاذ المشارك د. مسلم إرغن في هذا المجال.'
        },
        timeline: [
          { when: 'عن بُعد', title: 'التقييم الأولي', body: 'تُراجَع نتائج الأشعة المقطعية/الموجات فوق الصوتية وفحوص الدم والبول، ويُخطَّط للأسلوب المناسب.' },
          { when: 'اليوم 1', title: 'الوصول والفحوصات', body: 'الفحص، التصوير اللازم، وتقييم التخدير.' },
          { when: 'اليوم 2', title: 'الإجراء', body: 'يتم الإجراء حسب الأسلوب المختار؛ معظم الحالات في اليوم نفسه أو بمبيت ليلة واحدة.' },
          { when: 'اليوم 3–4', title: 'المراجعة', body: 'التأكد من خلو الكلية من الحصوات، تقييم الدعامة عند الحاجة، والإذن بالعودة.' }
        ],
        risks: [
          'نزيف والتهاب المسالك البولية',
          'حرقان أو دم مؤقت عند التبول',
          'حالات تستلزم وضع دعامة',
          'عدم إزالة الحصاة بالكامل والحاجة لإجراء إضافي'
        ],
        alternatives: [
          'إسقاط الحصاة بالأدوية (للحصوات الصغيرة)',
          'نهج الانتظار والمراقبة (حصوات صغيرة دون أعراض)',
          'الجراحة المفتوحة/بالمنظار (نادرًا، في الحالات المعقّدة)'
        ],
        comparison: {
          title: 'RIRS مقابل PCNL مقابل ESWL',
          columns: ['المعيار', 'RIRS (ليزر)', 'PCNL (عبر الجلد)', 'ESWL (موجات صادمة)'],
          rows: [
            { label: 'حجم الحصاة المناسب', values: ['حتى نحو 2 سم', '2 سم فأكثر', 'حتى نحو 1 سم'] },
            { label: 'الشق', values: ['لا يوجد (عبر المسالك)', 'شق جلدي صغير', 'لا يوجد (خارجي)'] },
            { label: 'التخدير', values: ['عام/نصفي', 'عام', 'تخدير خفيف عادةً'] },
            { label: 'المبيت', values: ['نفس اليوم–ليلة واحدة', 'ليلة–ليلتان', 'نفس اليوم'] },
            { label: 'نسبة الخلو من الحصى', values: ['مرتفعة', 'مرتفعة جدًا', 'متوسطة'] }
          ],
          note: 'هذا الجدول للمعلومات العامة؛ ويُحدَّد الأسلوب النهائي بحسب كل حالة.'
        },
        price: {
          from: 0,
          to: 0,
          currency: 'EUR',
          disclaimer: 'يختلف حسب الأسلوب وكمية الحصى؛ يُقدَّم عرض نهائي بعد التقييم.'
        },
        packageIncludes: [
          'الإجراء والإقامة في المستشفى',
          'التخدير والفحوصات اللازمة',
          'التنقلات والإقامة',
          'مترجم طبي ومنسّق',
          'المراجعة والمتابعة الإلكترونية'
        ],
        faqs: [
          { q: 'أي أسلوب يناسبني؟', a: 'يعتمد على حجم الحصاة وصلابتها وموقعها؛ ويتّضح بعد التصوير.' },
          { q: 'هل الإجراء مؤلم؟', a: 'تُجرى الإجراءات تحت التخدير؛ وقد يعقبها انزعاج خفيف.' },
          { q: 'هل تُوضَع دعامة؟', a: 'تحتاج بعض الحالات دعامة مؤقتة؛ وتُزال عادةً بعد فترة قصيرة.' }
        ]
      },
      de: {
        title: 'Nierensteinbehandlung (RIRS, PCNL, ESWL)',
        summary: 'Ein auf Größe und Lage des Steins abgestimmtes Verfahren: Laserzertrümmerung, perkutane Chirurgie oder Stoßwellen.',
        metaTitle: 'Nierensteinbehandlung | Vergleich RIRS, PCNL, ESWL',
        metaDescription: 'Vergleich von RIRS (Laser), PCNL (perkutan) und ESWL (Stoßwelle) bei Nierensteinen: Ablauf, Risiken und Preisspanne.',
        definition: [
          'Nierensteine entstehen, wenn Mineralien im Urin auskristallisieren und sich ablagern; sie können starke Flankenschmerzen, Blut im Urin oder eine Infektion verursachen.',
          'Das Verfahren richtet sich nach Größe, Härte und Lage des Steins. Bei kleinen Steinen kommen Stoßwellen zum Einsatz, bei mittleren die flexible Ureteroskopie mit Laser, bei großen die perkutane (durch die Haut) Chirurgie.'
        ],
        surgeonExperience: {
          caseVolume: '' /* TODO-DOGRULA: caseStats.ts */,
          note: 'Die Fallzahl spiegelt die gesamte chirurgische Erfahrung von Doz. Dr. Müslüm Ergün in diesem Bereich wider.'
        },
        timeline: [
          { when: 'Aus der Ferne', title: 'Vorabbewertung', body: 'Ihre CT-/Ultraschall- sowie Blut- und Urinbefunde werden geprüft und das passende Verfahren geplant.' },
          { when: 'Tag 1', title: 'Ankunft & Untersuchungen', body: 'Untersuchung, erforderliche Bildgebung und Anästhesiebewertung.' },
          { when: 'Tag 2', title: 'Eingriff', body: 'Eingriff je nach gewähltem Verfahren; die meisten Fälle ambulant oder mit 1 Nacht Aufenthalt.' },
          { when: 'Tag 3–4', title: 'Kontrolle', body: 'Steinfreiheitskontrolle, ggf. Stentbewertung und Reisefreigabe.' }
        ],
        risks: [
          'Blutung und Harnwegsinfektion',
          'Vorübergehendes Brennen oder Blut beim Wasserlassen',
          'Situationen, die einen Stent erfordern',
          'Unvollständige Steinentfernung und Bedarf an einem erneuten Eingriff'
        ],
        alternatives: [
          'Medikamentöser Steinabgang (bei kleinen Steinen)',
          'Abwartendes Vorgehen (asymptomatische kleine Steine)',
          'Offene/laparoskopische Chirurgie (selten, in komplexen Fällen)'
        ],
        comparison: {
          title: 'RIRS vs. PCNL vs. ESWL',
          columns: ['Kriterium', 'RIRS (Laser)', 'PCNL (perkutan)', 'ESWL (Stoßwelle)'],
          rows: [
            { label: 'Geeignete Steingröße', values: ['bis ca. 2 cm', '2 cm und mehr', 'bis ca. 1 cm'] },
            { label: 'Schnitt', values: ['Keiner (über die Harnwege)', 'Kleiner Hautschnitt', 'Keiner (extern)'] },
            { label: 'Anästhesie', values: ['Vollnarkose/Spinal', 'Vollnarkose', 'Meist Sedierung'] },
            { label: 'Aufenthalt', values: ['Ambulant–1 Nacht', '1–2 Nächte', 'Ambulant'] },
            { label: 'Steinfreiheitsrate', values: ['Hoch', 'Sehr hoch', 'Mittel'] }
          ],
          note: 'Diese Tabelle dient der allgemeinen Information; das endgültige Verfahren wird individuell festgelegt.'
        },
        price: {
          from: 0,
          to: 0,
          currency: 'EUR',
          disclaimer: 'Variiert je nach Verfahren und Steinlast; ein verbindliches Angebot folgt nach der Bewertung.'
        },
        packageIncludes: [
          'Eingriff und Krankenhausaufenthalt',
          'Anästhesie und erforderliche Untersuchungen',
          'Transfers und Unterkunft',
          'Medizinischer Dolmetscher und Koordinator',
          'Kontrolle und Online-Nachsorge'
        ],
        faqs: [
          { q: 'Welches Verfahren ist für mich geeignet?', a: 'Das hängt von Größe, Härte und Lage des Steins ab und wird nach der Bildgebung klar.' },
          { q: 'Ist der Eingriff schmerzhaft?', a: 'Die Eingriffe erfolgen unter Anästhesie; danach können leichte Beschwerden auftreten.' },
          { q: 'Wird ein Stent gelegt?', a: 'Manche Fälle benötigen einen vorübergehenden Stent; er wird meist kurz darauf entfernt.' }
        ]
      },
      ru: {
        title: 'Лечение камней в почках (RIRS, PCNL, ESWL)',
        summary: 'Метод, подобранный по размеру и расположению камня: лазерное дробление, чрескожная операция или ударные волны.',
        metaTitle: 'Лечение камней в почках | Сравнение RIRS, PCNL, ESWL',
        metaDescription: 'Сравнение RIRS (лазер), PCNL (чрескожно) и ESWL (ударная волна) при камнях в почках: процесс, риски и диапазон цен.',
        definition: [
          'Камни в почках образуются при кристаллизации и накоплении минералов в моче и могут вызывать сильную боль в боку, кровь в моче или инфекцию.',
          'Метод лечения выбирают по размеру, плотности и расположению камня. При мелких камнях применяют ударные волны, при средних — гибкую уретероскопию с лазером, при крупных — чрескожную (через кожу) операцию.'
        ],
        surgeonExperience: {
          caseVolume: '' /* TODO-DOGRULA: caseStats.ts */,
          note: 'Число операций отражает общий хирургический опыт доцента д-ра Мюслюма Эргюна в этой области.'
        },
        timeline: [
          { when: 'Удалённо', title: 'Предварительная оценка', body: 'Изучаются результаты КТ/УЗИ и анализов крови и мочи, планируется подходящий метод.' },
          { when: 'День 1', title: 'Прибытие и обследование', body: 'Осмотр, необходимая визуализация и анестезиологическая оценка.' },
          { when: 'День 2', title: 'Процедура', body: 'Процедура по выбранному методу; большинство случаев — в тот же день или с 1 ночью пребывания.' },
          { when: 'День 3–4', title: 'Контроль', body: 'Проверка отсутствия камней, при необходимости оценка стента и разрешение на возвращение.' }
        ],
        risks: [
          'Кровотечение и инфекция мочевыводящих путей',
          'Временное жжение или кровь при мочеиспускании',
          'Ситуации, требующие стента',
          'Неполное удаление камня и необходимость повторной процедуры'
        ],
        alternatives: [
          'Медикаментозное отхождение камня (при мелких камнях)',
          'Выжидательная тактика (бессимптомные мелкие камни)',
          'Открытая/лапароскопическая операция (редко, в сложных случаях)'
        ],
        comparison: {
          title: 'RIRS против PCNL против ESWL',
          columns: ['Критерий', 'RIRS (лазер)', 'PCNL (чрескожно)', 'ESWL (ударная волна)'],
          rows: [
            { label: 'Подходящий размер камня', values: ['до ~2 см', '2 см и более', 'до ~1 см'] },
            { label: 'Разрез', values: ['Нет (через мочевые пути)', 'Небольшой разрез кожи', 'Нет (снаружи)'] },
            { label: 'Анестезия', values: ['Общая/спинальная', 'Общая', 'Обычно седация'] },
            { label: 'Пребывание', values: ['В тот же день–1 ночь', '1–2 ночи', 'В тот же день'] },
            { label: 'Частота полного удаления', values: ['Высокая', 'Очень высокая', 'Средняя'] }
          ],
          note: 'Таблица носит общий характер; окончательный метод определяется индивидуально.'
        },
        price: {
          from: 0,
          to: 0,
          currency: 'EUR',
          disclaimer: 'Зависит от метода и объёма камней; точное предложение — после оценки.'
        },
        packageIncludes: [
          'Процедура и пребывание в стационаре',
          'Анестезия и необходимые анализы',
          'Трансферы и проживание',
          'Медицинский переводчик и координатор',
          'Контроль и онлайн-наблюдение'
        ],
        faqs: [
          { q: 'Какой метод мне подходит?', a: 'Зависит от размера, плотности и расположения камня; становится ясно после визуализации.' },
          { q: 'Процедура болезненна?', a: 'Процедуры проводятся под анестезией; после возможен лёгкий дискомфорт.' },
          { q: 'Будет ли установлен стент?', a: 'В некоторых случаях нужен временный стент; обычно его удаляют вскоре.' }
        ]
      },
      fr: {
        title: 'Traitement des calculs rénaux (RIRS, NLPC, LEC)',
        summary:
          'Une méthode adaptée à la taille et à la localisation du calcul : fragmentation laser, chirurgie percutanée ou ondes de choc.',
        metaTitle: 'Traitement des calculs rénaux | Comparatif RIRS, NLPC, LEC',
        metaDescription:
          'Comparaison du RIRS (laser), de la NLPC (percutanée) et de la LEC (ondes de choc) pour les calculs rénaux : déroulement, risques et fourchette de prix.',
        definition: [
          'Les calculs rénaux se forment lorsque des minéraux présents dans l’urine cristallisent et s’agglomèrent ; ils peuvent provoquer de fortes douleurs lombaires, du sang dans les urines ou une infection.',
          'La méthode de traitement est choisie en fonction de la taille, de la dureté et de la localisation du calcul. Les ondes de choc sont utilisées pour les petits calculs, l’urétéroscopie souple avec laser pour les calculs de taille moyenne, et la chirurgie percutanée (à travers la peau) pour les calculs volumineux.'
        ],
        surgeonExperience: {
          caseVolume: '' /* TODO-DOGRULA: caseStats.ts */,
          note: 'Le nombre d’interventions reflète l’expérience chirurgicale totale du Dr Müslüm Ergün dans ce domaine.'
        },
        timeline: [
          { when: 'À distance', title: 'Pré-évaluation', body: 'Votre scanner ou échographie et vos analyses de sang et d’urine sont examinés, puis la méthode adaptée est planifiée.' },
          { when: 'Jour 1', title: 'Arrivée et examens', body: 'Examen clinique, imagerie nécessaire et consultation d’anesthésie.' },
          { when: 'Jour 2', title: 'Intervention', body: 'Intervention selon la méthode retenue ; le plus souvent en ambulatoire ou avec une nuit d’hospitalisation.' },
          { when: 'Jours 3–4', title: 'Contrôle', body: 'Vérification de l’absence de calcul résiduel, évaluation de la sonde JJ si nécessaire et autorisation de retour.' }
        ],
        risks: [
          'Saignement et infection urinaire',
          'Brûlures mictionnelles ou sang dans les urines, transitoires',
          'Situations nécessitant la pose d’une sonde JJ',
          'Élimination incomplète du calcul et nécessité d’une seconde intervention'
        ],
        alternatives: [
          'Expulsion du calcul sous traitement médical (petits calculs)',
          'Surveillance simple (petits calculs asymptomatiques)',
          'Chirurgie ouverte ou laparoscopique (rarement, dans les cas complexes)'
        ],
        comparison: {
          title: 'RIRS vs NLPC vs LEC',
          columns: ['Critère', 'RIRS (laser)', 'NLPC (percutanée)', 'LEC (ondes de choc)'],
          rows: [
            { label: 'Taille de calcul adaptée', values: ['Jusqu’à ~2 cm', '2 cm et plus', 'Jusqu’à ~1 cm'] },
            { label: 'Incision', values: ['Aucune (voies urinaires)', 'Petite incision cutanée', 'Aucune (externe)'] },
            { label: 'Anesthésie', values: ['Générale / rachidienne', 'Générale', 'Sédation le plus souvent'] },
            { label: 'Séjour', values: ['Ambulatoire – 1 nuit', '1 à 2 nuits', 'Ambulatoire'] },
            { label: 'Taux sans calcul résiduel', values: ['Élevé', 'Très élevé', 'Modéré'] }
          ],
          note: 'Ce tableau est fourni à titre d’information générale ; la méthode définitive est déterminée au cas par cas.'
        },
        price: {
          from: 0,
          to: 0,
          currency: 'EUR',
          disclaimer: 'Varie selon la méthode et la charge lithiasique ; un devis ferme est établi après évaluation.'
        },
        packageIncludes: [
          'Intervention et séjour hospitalier',
          'Anesthésie et examens nécessaires',
          'Transferts et hébergement',
          'Interprète médical et coordinateur',
          'Contrôle et suivi en ligne'
        ],
        faqs: [
          { q: 'Quelle méthode me convient ?', a: 'Cela dépend de la taille, de la dureté et de la localisation du calcul ; le choix se précise après l’imagerie.' },
          { q: 'L’intervention est-elle douloureuse ?', a: 'Les interventions sont réalisées sous anesthésie ; une gêne légère peut suivre.' },
          { q: 'Une sonde JJ sera-t-elle posée ?', a: 'Certains cas nécessitent une sonde temporaire ; elle est généralement retirée peu de temps après.' }
        ]
      }
    }
  },
  {
    slug: 'bph-prostat-buyumesi',
    // TODO-DOGRULA: BPH EUR fiyat aralığı girilecek (priceRangeEUR).
    icon: 'prostate',
    i18n: {
      tr: {
        title: 'BPH / İyi Huylu Prostat Büyümesi (HoLEP, Rezūm, TURP)',
        summary:
          'İdrar şikâyetlerine yol açan iyi huylu prostat büyümesinde modern, dokuyu koruyan yöntemler.',
        metaTitle: 'BPH Tedavisi | HoLEP, Rezūm ve TURP Karşılaştırması',
        metaDescription:
          'İyi huylu prostat büyümesi (BPH) tedavisinde HoLEP, Rezūm ve TURP yöntemleri; süreç, riskler, alternatifler ve fiyat aralığı.',
        definition: [
          'İyi huylu prostat büyümesi (BPH), yaşla birlikte prostatın büyüyerek idrar akışını zorlaştırmasıdır. Zayıf idrar akışı, sık ve gece idrara çıkma gibi şikâyetlere yol açar.',
          'Modern yöntemler, prostat dokusunu lazerle çıkarma (HoLEP), buhar enerjisiyle küçültme (Rezūm) veya klasik endoskopik rezeksiyon (TURP) seçeneklerini içerir. Seçim prostat boyutuna ve hasta önceliğine göre yapılır.'
        ],
        surgeonExperience: {
          caseVolume: '' /* TODO-DOGRULA: caseStats.ts */,
          note: 'Vaka sayısı, Doç. Dr. Müslüm Ergün’ün bu alandaki toplam cerrahi deneyimini yansıtır.'
        },
        timeline: [
          { when: 'Uzaktan', title: 'Ön değerlendirme', body: 'İdrar akım testi, PSA ve prostat hacmi değerleriniz incelenir.' },
          { when: '1. Gün', title: 'Varış ve muayene', body: 'Muayene, üroflowmetri ve gerekli tetkikler.' },
          { when: '2. Gün', title: 'İşlem', body: 'Seçilen yönteme göre işlem; genellikle 1 gece yatış.' },
          { when: '3–4. Gün', title: 'Kontrol', body: 'Sonda değerlendirmesi, taburculuk ve dönüş onayı.' }
        ],
        risks: [
          'Geçici idrarda yanma veya kanama',
          'Retrograd ejakülasyon (menide azalma)',
          'İdrar yolu enfeksiyonu',
          'Nadiren tekrar işlem ihtiyacı'
        ],
        alternatives: [
          'İlaç tedavisi (alfa blokerler, 5-ARI)',
          'Yaşam tarzı değişiklikleri (hafif şikâyetlerde)',
          'Prostatik stent veya UroLift (seçili vakalarda)'
        ],
        comparison: {
          title: 'HoLEP vs Rezūm vs TURP',
          columns: ['Kriter', 'HoLEP (Lazer)', 'Rezūm (Buhar)', 'TURP (Endoskopik)'],
          rows: [
            { label: 'Uygun prostat boyutu', values: ['Her boyut, özellikle büyük', 'Küçük–orta', 'Küçük–orta'] },
            { label: 'Anestezi', values: ['Genel/spinal', 'Sedasyon/lokal', 'Genel/spinal'] },
            { label: 'Cinsel işlev koruma', values: ['İyi', 'Yüksek', 'Orta'] },
            { label: 'Yatış', values: ['1 gece', 'Günübirlik', '1–2 gece'] },
            { label: 'Kalıcılık', values: ['Yüksek', 'Orta', 'Yüksek'] }
          ],
          note: 'Tablo genel bilgilendirmedir; nihai yöntem kişiye göre belirlenir.'
        },
        price: {
          from: 0,
          to: 0,
          currency: 'EUR',
          disclaimer: 'Yöntem ve prostat boyutuna göre değişir.'
        },
        packageIncludes: [
          'İşlem ve hastane yatışı',
          'Anestezi ve tetkikler',
          'Transferler ve konaklama',
          'Tıbbi tercüman ve koordinatör',
          'Kontrol ve online takip'
        ],
        faqs: [
          { q: 'Cinsel işlevim etkilenir mi?', a: 'Yöntemler cinsel işlevi korumayı hedefler; en sık görülen değişiklik retrograd ejakülasyondur.' },
          { q: 'Hangi yöntem daha kalıcı?', a: 'HoLEP büyük prostatlarda kalıcı sonuç verir; Rezūm daha az invazivdir. Seçim size göre yapılır.' },
          { q: 'Sonda ne kadar kalır?', a: 'Genellikle 1–3 gün; yönteme göre değişir.' }
        ]
      },
      en: {
        title: 'BPH / Benign Prostatic Enlargement (HoLEP, Rezūm, TURP)',
        summary: 'Modern, tissue-preserving methods for benign prostate enlargement causing urinary symptoms.',
        metaTitle: 'BPH Treatment | HoLEP, Rezūm and TURP Comparison',
        metaDescription: 'HoLEP, Rezūm and TURP methods for benign prostatic hyperplasia (BPH): process, risks, alternatives and price range.',
        definition: [
          'Benign prostatic enlargement (BPH) is the age-related growth of the prostate that obstructs urine flow. It causes complaints such as a weak stream, frequent and nighttime urination.',
          'Modern methods include laser enucleation of prostate tissue (HoLEP), steam-energy shrinking (Rezūm) or classic endoscopic resection (TURP). The choice is made according to prostate size and patient priorities.'
        ],
        surgeonExperience: {
          caseVolume: '' /* TODO-DOGRULA: caseStats.ts */,
          note: 'The case volume reflects Assoc. Prof. Dr. Müslüm Ergün’s total surgical experience in this area.'
        },
        timeline: [
          { when: 'Remote', title: 'Pre-assessment', body: 'Your urinary flow test, PSA and prostate volume values are reviewed.' },
          { when: 'Day 1', title: 'Arrival & exam', body: 'Examination, uroflowmetry and required tests.' },
          { when: 'Day 2', title: 'Procedure', body: 'Procedure according to the chosen method; usually a 1-night stay.' },
          { when: 'Day 3–4', title: 'Review', body: 'Catheter assessment, discharge and clearance to return.' }
        ],
        risks: [
          'Temporary burning or blood on urination',
          'Retrograde ejaculation (reduced semen release)',
          'Urinary tract infection',
          'Rarely, need for a repeat procedure'
        ],
        alternatives: [
          'Medication (alpha blockers, 5-ARI)',
          'Lifestyle changes (for mild complaints)',
          'Prostatic stent or UroLift (in selected cases)'
        ],
        comparison: {
          title: 'HoLEP vs Rezūm vs TURP',
          columns: ['Criterion', 'HoLEP (Laser)', 'Rezūm (Steam)', 'TURP (Endoscopic)'],
          rows: [
            { label: 'Suitable prostate size', values: ['Any size, especially large', 'Small–medium', 'Small–medium'] },
            { label: 'Anesthesia', values: ['General/spinal', 'Sedation/local', 'General/spinal'] },
            { label: 'Sexual function preservation', values: ['Good', 'High', 'Moderate'] },
            { label: 'Stay', values: ['1 night', 'Day-case', '1–2 nights'] },
            { label: 'Durability', values: ['High', 'Moderate', 'High'] }
          ],
          note: 'This table is general information; the final method is determined individually.'
        },
        price: {
          from: 0,
          to: 0,
          currency: 'EUR',
          disclaimer: 'Varies by method and prostate size.'
        },
        packageIncludes: [
          'Procedure and hospital stay',
          'Anesthesia and tests',
          'Transfers and accommodation',
          'Medical interpreter and coordinator',
          'Follow-up and online monitoring'
        ],
        faqs: [
          { q: 'Will my sexual function be affected?', a: 'The methods aim to preserve sexual function; the most common change is retrograde ejaculation.' },
          { q: 'Which method is more durable?', a: 'HoLEP gives durable results in large prostates; Rezūm is less invasive. The choice is made for you.' },
          { q: 'How long does the catheter stay?', a: 'Usually 1–3 days; it varies by method.' }
        ]
      },
      ar: {
        title: 'تضخم البروستاتا الحميد (HoLEP، Rezūm، TURP)',
        summary: 'طرق حديثة تحافظ على الأنسجة لعلاج تضخم البروستاتا الحميد المسبِّب لأعراض بولية.',
        metaTitle: 'علاج تضخم البروستاتا | مقارنة HoLEP وRezūm وTURP',
        metaDescription: 'طرق HoLEP وRezūm وTURP لعلاج تضخم البروستاتا الحميد (BPH): المسار، المخاطر، البدائل ونطاق السعر.',
        definition: [
          'تضخم البروستاتا الحميد (BPH) هو تضخم البروستاتا مع التقدم في العمر بما يعيق تدفق البول. ويسبّب أعراضًا مثل ضعف التدفق وكثرة التبول والتبول الليلي.',
          'تشمل الطرق الحديثة استئصال نسيج البروستاتا بالليزر (HoLEP)، أو تقليصه بطاقة البخار (Rezūm)، أو الاستئصال بالمنظار التقليدي (TURP). ويُحدَّد الاختيار حسب حجم البروستاتا وأولويات المريض.'
        ],
        surgeonExperience: {
          caseVolume: '' /* TODO-DOGRULA: caseStats.ts */,
          note: 'يعكس عدد الحالات إجمالي الخبرة الجراحية للأستاذ المشارك د. مسلم إرغن في هذا المجال.'
        },
        timeline: [
          { when: 'عن بُعد', title: 'التقييم الأولي', body: 'تُراجَع نتائج اختبار تدفق البول وPSA وحجم البروستاتا.' },
          { when: 'اليوم 1', title: 'الوصول والفحص', body: 'الفحص وقياس التدفق البولي والفحوصات اللازمة.' },
          { when: 'اليوم 2', title: 'الإجراء', body: 'يتم الإجراء حسب الأسلوب المختار؛ عادةً بمبيت ليلة واحدة.' },
          { when: 'اليوم 3–4', title: 'المراجعة', body: 'تقييم القسطرة، الخروج، والإذن بالعودة.' }
        ],
        risks: [
          'حرقان أو دم مؤقت عند التبول',
          'القذف الراجع (قلة كمية السائل المنوي)',
          'التهاب المسالك البولية',
          'نادرًا، الحاجة لإجراء إضافي'
        ],
        alternatives: [
          'العلاج الدوائي (حاصرات ألفا، مثبطات 5-ألفا ريدكتاز)',
          'تغييرات نمط الحياة (للأعراض الخفيفة)',
          'دعامة بروستاتية أو UroLift (في حالات مختارة)'
        ],
        comparison: {
          title: 'HoLEP مقابل Rezūm مقابل TURP',
          columns: ['المعيار', 'HoLEP (ليزر)', 'Rezūm (بخار)', 'TURP (بالمنظار)'],
          rows: [
            { label: 'حجم البروستاتا المناسب', values: ['كل الأحجام، خصوصًا الكبيرة', 'صغير–متوسط', 'صغير–متوسط'] },
            { label: 'التخدير', values: ['عام/نصفي', 'تخدير خفيف/موضعي', 'عام/نصفي'] },
            { label: 'الحفاظ على الوظيفة الجنسية', values: ['جيد', 'مرتفع', 'متوسط'] },
            { label: 'المبيت', values: ['ليلة واحدة', 'نفس اليوم', 'ليلة–ليلتان'] },
            { label: 'الديمومة', values: ['مرتفعة', 'متوسطة', 'مرتفعة'] }
          ],
          note: 'هذا الجدول للمعلومات العامة؛ ويُحدَّد الأسلوب النهائي بحسب كل حالة.'
        },
        price: {
          from: 0,
          to: 0,
          currency: 'EUR',
          disclaimer: 'يختلف حسب الأسلوب وحجم البروستاتا.'
        },
        packageIncludes: [
          'الإجراء والإقامة في المستشفى',
          'التخدير والفحوصات',
          'التنقلات والإقامة',
          'مترجم طبي ومنسّق',
          'المراجعة والمتابعة الإلكترونية'
        ],
        faqs: [
          { q: 'هل ستتأثر وظيفتي الجنسية؟', a: 'تهدف الطرق إلى الحفاظ على الوظيفة الجنسية؛ وأكثر تغيّر شيوعًا هو القذف الراجع.' },
          { q: 'أي أسلوب أكثر ديمومة؟', a: 'يمنح HoLEP نتائج دائمة في البروستاتا الكبيرة؛ وRezūm أقل توغلًا. ويُتَّخذ الاختيار وفقًا لحالتك.' },
          { q: 'كم تبقى القسطرة؟', a: 'عادةً 1–3 أيام؛ وتختلف حسب الأسلوب.' }
        ]
      },
      de: {
        title: 'BPH / gutartige Prostatavergrößerung (HoLEP, Rezūm, TURP)',
        summary: 'Moderne, gewebeschonende Verfahren bei gutartiger Prostatavergrößerung mit Harnbeschwerden.',
        metaTitle: 'BPH-Behandlung | Vergleich HoLEP, Rezūm und TURP',
        metaDescription: 'HoLEP-, Rezūm- und TURP-Verfahren bei gutartiger Prostatavergrößerung (BPH): Ablauf, Risiken, Alternativen und Preisspanne.',
        definition: [
          'Die gutartige Prostatavergrößerung (BPH) ist das altersbedingte Wachstum der Prostata, das den Harnfluss behindert. Sie verursacht Beschwerden wie einen schwachen Strahl sowie häufiges und nächtliches Wasserlassen.',
          'Moderne Verfahren umfassen die Laser-Enukleation des Prostatagewebes (HoLEP), die Verkleinerung mit Dampfenergie (Rezūm) oder die klassische endoskopische Resektion (TURP). Die Wahl richtet sich nach Prostatagröße und Patientenpräferenz.'
        ],
        surgeonExperience: {
          caseVolume: '' /* TODO-DOGRULA: caseStats.ts */,
          note: 'Die Fallzahl spiegelt die gesamte chirurgische Erfahrung von Doz. Dr. Müslüm Ergün in diesem Bereich wider.'
        },
        timeline: [
          { when: 'Aus der Ferne', title: 'Vorabbewertung', body: 'Ihre Harnflussmessung, PSA- und Prostatavolumenwerte werden geprüft.' },
          { when: 'Tag 1', title: 'Ankunft & Untersuchung', body: 'Untersuchung, Uroflowmetrie und erforderliche Tests.' },
          { when: 'Tag 2', title: 'Eingriff', body: 'Eingriff je nach gewähltem Verfahren; meist 1 Nacht Aufenthalt.' },
          { when: 'Tag 3–4', title: 'Kontrolle', body: 'Katheterbewertung, Entlassung und Reisefreigabe.' }
        ],
        risks: [
          'Vorübergehendes Brennen oder Blut beim Wasserlassen',
          'Retrograde Ejakulation (verminderter Samenerguss)',
          'Harnwegsinfektion',
          'Selten Bedarf an einem erneuten Eingriff'
        ],
        alternatives: [
          'Medikamentöse Therapie (Alphablocker, 5-ARI)',
          'Lebensstiländerungen (bei leichten Beschwerden)',
          'Prostatastent oder UroLift (in ausgewählten Fällen)'
        ],
        comparison: {
          title: 'HoLEP vs. Rezūm vs. TURP',
          columns: ['Kriterium', 'HoLEP (Laser)', 'Rezūm (Dampf)', 'TURP (endoskopisch)'],
          rows: [
            { label: 'Geeignete Prostatagröße', values: ['Jede Größe, besonders groß', 'Klein–mittel', 'Klein–mittel'] },
            { label: 'Anästhesie', values: ['Vollnarkose/Spinal', 'Sedierung/lokal', 'Vollnarkose/Spinal'] },
            { label: 'Erhalt der Sexualfunktion', values: ['Gut', 'Hoch', 'Mittel'] },
            { label: 'Aufenthalt', values: ['1 Nacht', 'Ambulant', '1–2 Nächte'] },
            { label: 'Dauerhaftigkeit', values: ['Hoch', 'Mittel', 'Hoch'] }
          ],
          note: 'Diese Tabelle dient der allgemeinen Information; das endgültige Verfahren wird individuell festgelegt.'
        },
        price: {
          from: 0,
          to: 0,
          currency: 'EUR',
          disclaimer: 'Variiert je nach Verfahren und Prostatagröße.'
        },
        packageIncludes: [
          'Eingriff und Krankenhausaufenthalt',
          'Anästhesie und Untersuchungen',
          'Transfers und Unterkunft',
          'Medizinischer Dolmetscher und Koordinator',
          'Kontrolle und Online-Nachsorge'
        ],
        faqs: [
          { q: 'Wird meine Sexualfunktion beeinträchtigt?', a: 'Die Verfahren zielen auf den Erhalt der Sexualfunktion; die häufigste Veränderung ist die retrograde Ejakulation.' },
          { q: 'Welches Verfahren ist dauerhafter?', a: 'HoLEP liefert bei großen Prostatae dauerhafte Ergebnisse; Rezūm ist weniger invasiv. Die Wahl wird für Sie getroffen.' },
          { q: 'Wie lange bleibt der Katheter?', a: 'Meist 1–3 Tage; je nach Verfahren unterschiedlich.' }
        ]
      },
      ru: {
        title: 'ДГПЖ / доброкачественное увеличение простаты (HoLEP, Rezūm, TURP)',
        summary: 'Современные, щадящие ткань методы при доброкачественном увеличении простаты с мочевыми симптомами.',
        metaTitle: 'Лечение ДГПЖ | Сравнение HoLEP, Rezūm и TURP',
        metaDescription: 'Методы HoLEP, Rezūm и TURP при доброкачественной гиперплазии простаты (ДГПЖ): процесс, риски, альтернативы и диапазон цен.',
        definition: [
          'Доброкачественное увеличение простаты (ДГПЖ) — возрастной рост простаты, затрудняющий отток мочи. Оно вызывает жалобы: слабую струю, учащённое и ночное мочеиспускание.',
          'Современные методы включают лазерную энуклеацию ткани простаты (HoLEP), уменьшение паровой энергией (Rezūm) или классическую эндоскопическую резекцию (TURP). Выбор зависит от размера простаты и приоритетов пациента.'
        ],
        surgeonExperience: {
          caseVolume: '' /* TODO-DOGRULA: caseStats.ts */,
          note: 'Число операций отражает общий хирургический опыт доцента д-ра Мюслюма Эргюна в этой области.'
        },
        timeline: [
          { when: 'Удалённо', title: 'Предварительная оценка', body: 'Изучаются показатели урофлоуметрии, PSA и объёма простаты.' },
          { when: 'День 1', title: 'Прибытие и осмотр', body: 'Осмотр, урофлоуметрия и необходимые анализы.' },
          { when: 'День 2', title: 'Процедура', body: 'Процедура по выбранному методу; обычно 1 ночь пребывания.' },
          { when: 'День 3–4', title: 'Контроль', body: 'Оценка катетера, выписка и разрешение на возвращение.' }
        ],
        risks: [
          'Временное жжение или кровь при мочеиспускании',
          'Ретроградная эякуляция (уменьшение выделения семени)',
          'Инфекция мочевыводящих путей',
          'Редко — необходимость повторной процедуры'
        ],
        alternatives: [
          'Медикаментозная терапия (альфа-блокаторы, 5-ARI)',
          'Изменения образа жизни (при лёгких жалобах)',
          'Простатический стент или UroLift (в отдельных случаях)'
        ],
        comparison: {
          title: 'HoLEP против Rezūm против TURP',
          columns: ['Критерий', 'HoLEP (лазер)', 'Rezūm (пар)', 'TURP (эндоскопически)'],
          rows: [
            { label: 'Подходящий размер простаты', values: ['Любой, особенно крупная', 'Малый–средний', 'Малый–средний'] },
            { label: 'Анестезия', values: ['Общая/спинальная', 'Седация/местная', 'Общая/спинальная'] },
            { label: 'Сохранение половой функции', values: ['Хорошее', 'Высокое', 'Среднее'] },
            { label: 'Пребывание', values: ['1 ночь', 'В тот же день', '1–2 ночи'] },
            { label: 'Долговечность', values: ['Высокая', 'Средняя', 'Высокая'] }
          ],
          note: 'Таблица носит общий характер; окончательный метод определяется индивидуально.'
        },
        price: {
          from: 0,
          to: 0,
          currency: 'EUR',
          disclaimer: 'Зависит от метода и размера простаты.'
        },
        packageIncludes: [
          'Процедура и пребывание в стационаре',
          'Анестезия и анализы',
          'Трансферы и проживание',
          'Медицинский переводчик и координатор',
          'Контроль и онлайн-наблюдение'
        ],
        faqs: [
          { q: 'Повлияет ли это на половую функцию?', a: 'Методы направлены на сохранение половой функции; самое частое изменение — ретроградная эякуляция.' },
          { q: 'Какой метод долговечнее?', a: 'HoLEP даёт стойкий результат при крупной простате; Rezūm менее инвазивен. Выбор делается индивидуально.' },
          { q: 'Сколько времени стоит катетер?', a: 'Обычно 1–3 дня; зависит от метода.' }
        ]
      },
      fr: {
        title: 'HBP / Hypertrophie bénigne de la prostate (HoLEP, Rezūm, RTUP)',
        summary: 'Des méthodes modernes et préservant les tissus pour l’hypertrophie bénigne de la prostate à l’origine de troubles urinaires.',
        metaTitle: 'Traitement de l’HBP | Comparatif HoLEP, Rezūm et RTUP',
        metaDescription: 'Méthodes HoLEP, Rezūm et RTUP pour l’hypertrophie bénigne de la prostate (HBP) : déroulement, risques, alternatives et fourchette de prix.',
        definition: [
          'L’hypertrophie bénigne de la prostate (HBP) est l’augmentation de volume de la prostate liée à l’âge, qui gêne l’écoulement des urines. Elle provoque un jet faible, des mictions fréquentes et des levers nocturnes.',
          'Les méthodes modernes comprennent l’énucléation du tissu prostatique au laser (HoLEP), la réduction par vapeur d’eau (Rezūm) ou la résection endoscopique classique (RTUP). Le choix dépend du volume prostatique et des priorités du patient.'
        ],
        surgeonExperience: {
          caseVolume: '' /* TODO-DOGRULA: caseStats.ts */,
          note: 'Le nombre d’interventions reflète l’expérience chirurgicale totale du Dr Müslüm Ergün dans ce domaine.'
        },
        timeline: [
          { when: 'À distance', title: 'Pré-évaluation', body: 'Votre débitmétrie urinaire, votre PSA et votre volume prostatique sont examinés.' },
          { when: 'Jour 1', title: 'Arrivée et examen', body: 'Examen clinique, débitmétrie et bilan nécessaire.' },
          { when: 'Jour 2', title: 'Intervention', body: 'Intervention selon la méthode retenue ; généralement une nuit d’hospitalisation.' },
          { when: 'Jours 3–4', title: 'Contrôle', body: 'Évaluation de la sonde, sortie et autorisation de retour.' }
        ],
        risks: [
          'Brûlures mictionnelles ou sang dans les urines, transitoires',
          'Éjaculation rétrograde (diminution du sperme émis)',
          'Infection urinaire',
          'Rarement, nécessité d’une seconde intervention'
        ],
        alternatives: [
          'Traitement médicamenteux (alphabloquants, inhibiteurs de la 5-alpha-réductase)',
          'Modifications du mode de vie (troubles légers)',
          'Endoprothèse prostatique ou UroLift (dans des cas sélectionnés)'
        ],
        comparison: {
          title: 'HoLEP vs Rezūm vs RTUP',
          columns: ['Critère', 'HoLEP (laser)', 'Rezūm (vapeur)', 'RTUP (endoscopique)'],
          rows: [
            { label: 'Volume prostatique adapté', values: ['Tous volumes, surtout les gros', 'Petit à moyen', 'Petit à moyen'] },
            { label: 'Anesthésie', values: ['Générale / rachidienne', 'Sédation / locale', 'Générale / rachidienne'] },
            { label: 'Préservation de la fonction sexuelle', values: ['Bonne', 'Élevée', 'Modérée'] },
            { label: 'Séjour', values: ['1 nuit', 'Ambulatoire', '1 à 2 nuits'] },
            { label: 'Durabilité', values: ['Élevée', 'Modérée', 'Élevée'] }
          ],
          note: 'Ce tableau est fourni à titre d’information générale ; la méthode définitive est déterminée au cas par cas.'
        },
        price: {
          from: 0,
          to: 0,
          currency: 'EUR',
          disclaimer: 'Varie selon la méthode et le volume prostatique.'
        },
        packageIncludes: [
          'Intervention et séjour hospitalier',
          'Anesthésie et examens',
          'Transferts et hébergement',
          'Interprète médical et coordinateur',
          'Contrôle et suivi en ligne'
        ],
        faqs: [
          { q: 'Ma fonction sexuelle sera-t-elle affectée ?', a: 'Les méthodes visent à préserver la fonction sexuelle ; la modification la plus fréquente est l’éjaculation rétrograde.' },
          { q: 'Quelle méthode est la plus durable ?', a: 'La HoLEP donne des résultats durables sur les grosses prostates ; le Rezūm est moins invasif. Le choix est adapté à votre situation.' },
          { q: 'Combien de temps la sonde reste-t-elle en place ?', a: 'Généralement 1 à 3 jours ; cela varie selon la méthode.' }
        ]
      }
    }
  },
  {
    slug: 'androloji',
    icon: 'andrology',
    offersConsultation: true, // mahremiyet öncelikli hastalar için ücretli özel görüşme
    i18n: {
      tr: {
        title: 'Androloji (Penil Protez, Varikosel, Erektil Disfonksiyon)',
        summary:
          'Erkek cinsel sağlığı ve üreme cerrahisi: penil protez, varikosel, erektil disfonksiyon ve estetik prosedürler.',
        metaTitle: 'Androloji | Penil Protez, Varikosel, ED Cerrahisi',
        metaDescription:
          'Androloji cerrahisi: penil protez, penil uzatma ve kalınlaştırma, varikosel ve erektil disfonksiyon tedavisi; süreç, riskler ve fiyat aralığı.',
        definition: [
          'Androloji, erkek cinsel ve üreme sağlığıyla ilgilenen ürolojik alt daldır. İlaçla düzelmeyen erektil disfonksiyon, varikosele bağlı kısırlık veya cinsel işlev sorunlarında cerrahi seçenekler sunar.',
          'Uygulamalar arasında şişirilebilir penil protez, mikrocerrahi varikoselektomi, penil uzatma/kalınlaştırma ve seçili erektil disfonksiyon cerrahileri yer alır. Doğru prosedür ayrıntılı değerlendirme sonrası belirlenir.'
        ],
        surgeonExperience: {
          caseVolume: '' /* TODO-DOGRULA: caseStats.ts */,
          note: 'Vaka sayısı, Doç. Dr. Müslüm Ergün’ün bu alandaki toplam cerrahi deneyimini yansıtır.'
        },
        timeline: [
          { when: 'Uzaktan', title: 'Gizli ön görüşme', body: 'Hormonal ve damarsal değerlendirme sonuçlarınız gizlilikle incelenir.' },
          { when: '1. Gün', title: 'Varış ve muayene', body: 'Muayene, gerekli testler ve prosedür planlaması.' },
          { when: '2. Gün', title: 'Ameliyat', body: 'Seçilen prosedür; çoğu vakada 1 gece yatış.' },
          { when: '3–5. Gün', title: 'Kontrol', body: 'Pansuman, bilgilendirme ve dönüş onayı; protezde kullanım eğitimi.' }
        ],
        risks: [
          'Enfeksiyon (özellikle protez cerrahisinde)',
          'Şişlik, morarma ve geçici his değişikliği',
          'Protezde mekanik sorun ihtimali (uzun vadede)',
          'Beklentilerin gerçekçi tutulması gerekliliği'
        ],
        alternatives: [
          'Oral ilaçlar (PDE5 inhibitörleri)',
          'Penil enjeksiyon veya vakum cihazı',
          'Şok dalga tedavisi (seçili vakalarda)',
          'Yaşam tarzı ve hormonal düzenleme'
        ],
        price: {
          from: 0,
          to: 0,
          currency: 'EUR',
          disclaimer: 'Protez markası ve prosedüre göre değişir.'
        },
        packageIncludes: [
          'Ameliyat ve hastane yatışı',
          'Anestezi ve tetkikler',
          '(Varsa) protez cihazı',
          'Transferler ve konaklama',
          'Tıbbi tercüman ve gizli koordinasyon',
          'Kontrol ve online takip'
        ],
        faqs: [
          { q: 'Süreç gizli tutulur mu?', a: 'Evet; tüm görüşmeler ve koordinasyon gizlilik ilkesiyle yürütülür.' },
          { q: 'Penil protez sonrası cinsel işlev nasıl olur?', a: 'Protez, ilaçla düzelmeyen sertleşme sorununda kalıcı çözüm sunar; kullanım eğitimi verilir.' },
          { q: 'Varikosel kısırlığı düzeltir mi?', a: 'Mikrocerrahi varikoselektomi seçili hastalarda sperm parametrelerini iyileştirebilir.' }
        ]
      },
      en: {
        title: 'Andrology (Penile Implant, Varicocele, Erectile Dysfunction)',
        summary: 'Male sexual health and reproductive surgery: penile implant, varicocele, erectile dysfunction and aesthetic procedures.',
        metaTitle: 'Andrology | Penile Implant, Varicocele, ED Surgery',
        metaDescription: 'Andrology surgery: penile implant, penile lengthening and girth enhancement, varicocele and erectile dysfunction treatment; process, risks and price range.',
        definition: [
          'Andrology is the urological subspecialty dealing with male sexual and reproductive health. It offers surgical options for medication-resistant erectile dysfunction, varicocele-related infertility or sexual function problems.',
          'Procedures include the inflatable penile implant, microsurgical varicocelectomy, penile lengthening/girth enhancement and selected erectile dysfunction surgeries. The right procedure is determined after a detailed assessment.'
        ],
        surgeonExperience: {
          caseVolume: '' /* TODO-DOGRULA: caseStats.ts */,
          note: 'The case volume reflects Assoc. Prof. Dr. Müslüm Ergün’s total surgical experience in this area.'
        },
        timeline: [
          { when: 'Remote', title: 'Confidential pre-consultation', body: 'Your hormonal and vascular assessment results are reviewed with confidentiality.' },
          { when: 'Day 1', title: 'Arrival & exam', body: 'Examination, required tests and procedure planning.' },
          { when: 'Day 2', title: 'Surgery', body: 'The chosen procedure; most cases with a 1-night stay.' },
          { when: 'Day 3–5', title: 'Review', body: 'Dressing, information and clearance to return; usage training for implants.' }
        ],
        risks: [
          'Infection (especially in implant surgery)',
          'Swelling, bruising and temporary sensory change',
          'Possibility of a mechanical implant issue (long term)',
          'The need to keep expectations realistic'
        ],
        alternatives: [
          'Oral medication (PDE5 inhibitors)',
          'Penile injection or vacuum device',
          'Shockwave therapy (in selected cases)',
          'Lifestyle and hormonal adjustment'
        ],
        price: {
          from: 0,
          to: 0,
          currency: 'EUR',
          disclaimer: 'Varies by implant brand and procedure.'
        },
        packageIncludes: [
          'Surgery and hospital stay',
          'Anesthesia and tests',
          '(If applicable) implant device',
          'Transfers and accommodation',
          'Medical interpreter and confidential coordination',
          'Follow-up and online monitoring'
        ],
        faqs: [
          { q: 'Is the process kept confidential?', a: 'Yes; all consultations and coordination are conducted with the principle of confidentiality.' },
          { q: 'What is sexual function like after a penile implant?', a: 'The implant offers a permanent solution for erection problems that do not respond to medication; usage training is provided.' },
          { q: 'Does varicocele surgery correct infertility?', a: 'Microsurgical varicocelectomy can improve sperm parameters in selected patients.' }
        ]
      },
      ar: {
        title: 'طب الذكورة (الدعامة الذكرية، دوالي الخصية، ضعف الانتصاب)',
        summary: 'جراحة الصحة الجنسية والإنجابية للرجل: الدعامة الذكرية، دوالي الخصية، ضعف الانتصاب والإجراءات التجميلية، بسرية تامة.',
        metaTitle: 'طب الذكورة | الدعامة الذكرية، دوالي الخصية، جراحة ضعف الانتصاب',
        metaDescription: 'جراحة طب الذكورة: الدعامة الذكرية، إطالة وتكبير القضيب، دوالي الخصية وعلاج ضعف الانتصاب؛ المسار، المخاطر ونطاق السعر — بخصوصية كاملة.',
        definition: [
          'طب الذكورة هو أحد فروع المسالك البولية المعنيّ بالصحة الجنسية والإنجابية للرجل. ويوفّر خيارات جراحية لضعف الانتصاب غير المستجيب للأدوية، والعقم المرتبط بدوالي الخصية، أو مشكلات الوظيفة الجنسية.',
          'تشمل الإجراءات الدعامة الذكرية القابلة للنفخ، واستئصال دوالي الخصية بالجراحة الدقيقة، وإطالة/تكبير القضيب، وجراحات مختارة لضعف الانتصاب. ويُحدَّد الإجراء المناسب بعد تقييم مفصّل.'
        ],
        surgeonExperience: {
          caseVolume: '' /* TODO-DOGRULA: caseStats.ts */,
          note: 'يعكس عدد الحالات إجمالي الخبرة الجراحية للأستاذ المشارك د. مسلم إرغن في هذا المجال.'
        },
        timeline: [
          { when: 'عن بُعد', title: 'استشارة أولية سرّية', body: 'تُراجَع نتائج تقييمك الهرموني والوعائي بسرية تامة.' },
          { when: 'اليوم 1', title: 'الوصول والفحص', body: 'الفحص، الفحوصات اللازمة، وتخطيط الإجراء.' },
          { when: 'اليوم 2', title: 'العملية', body: 'الإجراء المختار؛ ومبيت ليلة واحدة في معظم الحالات.' },
          { when: 'اليوم 3–5', title: 'المراجعة', body: 'تغيير الضمادات، التوعية، والإذن بالعودة؛ وتدريب على استخدام الدعامة.' }
        ],
        risks: [
          'العدوى (خصوصًا في جراحة الدعامات)',
          'تورّم وكدمات وتغيّر مؤقت في الإحساس',
          'احتمال خلل ميكانيكي في الدعامة (على المدى الطويل)',
          'ضرورة إبقاء التوقعات واقعية'
        ],
        alternatives: [
          'الأدوية الفموية (مثبطات PDE5)',
          'الحقن الموضعي أو جهاز التفريغ الهوائي',
          'العلاج بالموجات التصادمية (في حالات مختارة)',
          'تعديل نمط الحياة والتوازن الهرموني'
        ],
        price: {
          from: 0,
          to: 0,
          currency: 'EUR',
          disclaimer: 'يختلف حسب نوع الدعامة والإجراء.'
        },
        packageIncludes: [
          'العملية والإقامة في المستشفى',
          'التخدير والفحوصات',
          '(عند الحاجة) جهاز الدعامة',
          'التنقلات والإقامة',
          'مترجم طبي وتنسيق سرّي',
          'المراجعة والمتابعة الإلكترونية'
        ],
        faqs: [
          { q: 'هل تُحفظ الخصوصية أثناء العملية؟', a: 'نعم؛ تُدار جميع الاستشارات والتنسيق وفق مبدأ السرية التامة.' },
          { q: 'كيف تكون الوظيفة الجنسية بعد الدعامة الذكرية؟', a: 'توفّر الدعامة حلًّا دائمًا لمشكلة الانتصاب غير المستجيبة للأدوية؛ ويُقدَّم تدريب على الاستخدام.' },
          { q: 'هل تصحّح جراحة الدوالي العقم؟', a: 'قد تحسّن جراحة دوالي الخصية الدقيقة مؤشرات الحيوانات المنوية لدى مرضى مختارين.' }
        ]
      },
      de: {
        title: 'Andrologie (Penisimplantat, Varikozele, erektile Dysfunktion)',
        summary: 'Chirurgie der männlichen Sexual- und Fortpflanzungsgesundheit: Penisimplantat, Varikozele, erektile Dysfunktion und ästhetische Eingriffe.',
        metaTitle: 'Andrologie | Penisimplantat, Varikozele, ED-Chirurgie',
        metaDescription: 'Andrologische Chirurgie: Penisimplantat, Penisverlängerung und -verdickung, Varikozele und Behandlung der erektilen Dysfunktion; Ablauf, Risiken und Preisspanne.',
        definition: [
          'Die Andrologie ist das urologische Teilgebiet für die männliche Sexual- und Fortpflanzungsgesundheit. Sie bietet chirurgische Optionen bei medikamentenresistenter erektiler Dysfunktion, varikozelenbedingter Unfruchtbarkeit oder Sexualfunktionsstörungen.',
          'Zu den Eingriffen zählen das aufblasbare Penisimplantat, die mikrochirurgische Varikozelektomie, Penisverlängerung/-verdickung sowie ausgewählte Operationen bei erektiler Dysfunktion. Der passende Eingriff wird nach einer ausführlichen Bewertung festgelegt.'
        ],
        surgeonExperience: {
          caseVolume: '' /* TODO-DOGRULA: caseStats.ts */,
          note: 'Die Fallzahl spiegelt die gesamte chirurgische Erfahrung von Doz. Dr. Müslüm Ergün in diesem Bereich wider.'
        },
        timeline: [
          { when: 'Aus der Ferne', title: 'Vertrauliche Erstberatung', body: 'Ihre hormonellen und vaskulären Befunde werden vertraulich geprüft.' },
          { when: 'Tag 1', title: 'Ankunft & Untersuchung', body: 'Untersuchung, erforderliche Tests und Eingriffsplanung.' },
          { when: 'Tag 2', title: 'Operation', body: 'Der gewählte Eingriff; meist mit 1 Nacht Aufenthalt.' },
          { when: 'Tag 3–5', title: 'Kontrolle', body: 'Verbandswechsel, Aufklärung und Reisefreigabe; bei Implantaten Anwendungsschulung.' }
        ],
        risks: [
          'Infektion (besonders bei der Implantatchirurgie)',
          'Schwellung, Blutergüsse und vorübergehende Empfindungsänderung',
          'Möglichkeit eines mechanischen Implantatproblems (langfristig)',
          'Notwendigkeit, die Erwartungen realistisch zu halten'
        ],
        alternatives: [
          'Orale Medikamente (PDE5-Hemmer)',
          'Penisinjektion oder Vakuumpumpe',
          'Stoßwellentherapie (in ausgewählten Fällen)',
          'Lebensstil und hormonelle Anpassung'
        ],
        price: {
          from: 0,
          to: 0,
          currency: 'EUR',
          disclaimer: 'Variiert je nach Implantatmarke und Eingriff.'
        },
        packageIncludes: [
          'Operation und Krankenhausaufenthalt',
          'Anästhesie und Untersuchungen',
          '(Falls zutreffend) Implantat',
          'Transfers und Unterkunft',
          'Medizinischer Dolmetscher und vertrauliche Koordination',
          'Kontrolle und Online-Nachsorge'
        ],
        faqs: [
          { q: 'Wird der Prozess vertraulich behandelt?', a: 'Ja; alle Beratungen und die Koordination erfolgen nach dem Grundsatz der Vertraulichkeit.' },
          { q: 'Wie ist die Sexualfunktion nach einem Penisimplantat?', a: 'Das Implantat bietet eine dauerhafte Lösung bei Erektionsproblemen, die nicht auf Medikamente ansprechen; eine Anwendungsschulung wird angeboten.' },
          { q: 'Behebt eine Varikozelen-Operation die Unfruchtbarkeit?', a: 'Die mikrochirurgische Varikozelektomie kann bei ausgewählten Patienten die Spermienparameter verbessern.' }
        ]
      },
      ru: {
        title: 'Андрология (пенильный имплант, варикоцеле, эректильная дисфункция)',
        summary: 'Хирургия мужского сексуального и репродуктивного здоровья: пенильный имплант, варикоцеле, эректильная дисфункция и эстетические процедуры.',
        metaTitle: 'Андрология | Пенильный имплант, варикоцеле, хирургия ЭД',
        metaDescription: 'Андрологическая хирургия: пенильный имплант, удлинение и утолщение полового члена, варикоцеле и лечение эректильной дисфункции; процесс, риски и диапазон цен.',
        definition: [
          'Андрология — урологическая специализация, занимающаяся мужским сексуальным и репродуктивным здоровьем. Она предлагает хирургические решения при устойчивой к лекарствам эректильной дисфункции, бесплодии на фоне варикоцеле или нарушениях половой функции.',
          'Процедуры включают надувной пенильный имплант, микрохирургическую варикоцелэктомию, удлинение/утолщение полового члена и отдельные операции при эректильной дисфункции. Подходящая процедура определяется после подробной оценки.'
        ],
        surgeonExperience: {
          caseVolume: '' /* TODO-DOGRULA: caseStats.ts */,
          note: 'Число операций отражает общий хирургический опыт доцента д-ра Мюслюма Эргюна в этой области.'
        },
        timeline: [
          { when: 'Удалённо', title: 'Конфиденциальная предварительная консультация', body: 'Результаты гормональной и сосудистой оценки изучаются конфиденциально.' },
          { when: 'День 1', title: 'Прибытие и осмотр', body: 'Осмотр, необходимые анализы и планирование процедуры.' },
          { when: 'День 2', title: 'Операция', body: 'Выбранная процедура; в большинстве случаев 1 ночь пребывания.' },
          { when: 'День 3–5', title: 'Контроль', body: 'Перевязка, информирование и разрешение на возвращение; обучение пользованию имплантом.' }
        ],
        risks: [
          'Инфекция (особенно при имплантации)',
          'Отёк, синяки и временное изменение чувствительности',
          'Возможность механической неисправности импланта (в долгосрочной перспективе)',
          'Необходимость сохранять реалистичные ожидания'
        ],
        alternatives: [
          'Пероральные препараты (ингибиторы ФДЭ-5)',
          'Инъекции в половой член или вакуумное устройство',
          'Ударно-волновая терапия (в отдельных случаях)',
          'Коррекция образа жизни и гормонального фона'
        ],
        price: {
          from: 0,
          to: 0,
          currency: 'EUR',
          disclaimer: 'Зависит от марки импланта и процедуры.'
        },
        packageIncludes: [
          'Операция и пребывание в стационаре',
          'Анестезия и анализы',
          '(При необходимости) имплант',
          'Трансферы и проживание',
          'Медицинский переводчик и конфиденциальная координация',
          'Контроль и онлайн-наблюдение'
        ],
        faqs: [
          { q: 'Сохраняется ли конфиденциальность?', a: 'Да; все консультации и координация ведутся по принципу конфиденциальности.' },
          { q: 'Какова половая функция после пенильного импланта?', a: 'Имплант даёт постоянное решение при проблемах эрекции, не поддающихся лекарствам; проводится обучение пользованию.' },
          { q: 'Исправляет ли операция при варикоцеле бесплодие?', a: 'Микрохирургическая варикоцелэктомия может улучшить показатели спермы у отдельных пациентов.' }
        ]
      },
      fr: {
        title: 'Andrologie (prothèse pénienne, varicocèle, dysfonction érectile)',
        summary: 'Santé sexuelle masculine et chirurgie de la reproduction : prothèse pénienne, varicocèle, dysfonction érectile et interventions esthétiques.',
        metaTitle: 'Andrologie | Prothèse pénienne, varicocèle, chirurgie de la DE',
        metaDescription: 'Chirurgie andrologique : prothèse pénienne, allongement et augmentation de circonférence du pénis, varicocèle et traitement de la dysfonction érectile ; déroulement, risques et fourchette de prix.',
        definition: [
          'L’andrologie est la surspécialité urologique consacrée à la santé sexuelle et reproductive masculine. Elle propose des options chirurgicales en cas de dysfonction érectile résistante aux médicaments, d’infertilité liée à une varicocèle ou de troubles de la fonction sexuelle.',
          'Les interventions comprennent la prothèse pénienne gonflable, la varicocélectomie microchirurgicale, l’allongement ou l’augmentation de circonférence du pénis et certaines chirurgies de la dysfonction érectile. L’intervention adaptée est déterminée après une évaluation détaillée.'
        ],
        surgeonExperience: {
          caseVolume: '' /* TODO-DOGRULA: caseStats.ts */,
          note: 'Le nombre d’interventions reflète l’expérience chirurgicale totale du Dr Müslüm Ergün dans ce domaine.'
        },
        timeline: [
          { when: 'À distance', title: 'Pré-consultation confidentielle', body: 'Vos résultats hormonaux et vasculaires sont examinés en toute confidentialité.' },
          { when: 'Jour 1', title: 'Arrivée et examen', body: 'Examen clinique, bilan nécessaire et planification de l’intervention.' },
          { when: 'Jour 2', title: 'Intervention', body: 'L’intervention retenue ; le plus souvent avec une nuit d’hospitalisation.' },
          { when: 'Jours 3–5', title: 'Contrôle', body: 'Pansement, informations et autorisation de retour ; apprentissage de l’utilisation en cas de prothèse.' }
        ],
        risks: [
          'Infection (en particulier en chirurgie prothétique)',
          'Œdème, ecchymoses et modification transitoire de la sensibilité',
          'Possibilité de dysfonctionnement mécanique de la prothèse (à long terme)',
          'Nécessité de garder des attentes réalistes'
        ],
        alternatives: [
          'Traitement oral (inhibiteurs de la PDE5)',
          'Injection intracaverneuse ou pompe à vide',
          'Ondes de choc (dans des cas sélectionnés)',
          'Adaptation du mode de vie et correction hormonale'
        ],
        price: {
          from: 0,
          to: 0,
          currency: 'EUR',
          disclaimer: 'Varie selon la marque de la prothèse et l’intervention.'
        },
        packageIncludes: [
          'Intervention et séjour hospitalier',
          'Anesthésie et examens',
          '(Le cas échéant) dispositif de prothèse',
          'Transferts et hébergement',
          'Interprète médical et coordination confidentielle',
          'Contrôle et suivi en ligne'
        ],
        faqs: [
          { q: 'Le parcours reste-t-il confidentiel ?', a: 'Oui ; toutes les consultations et la coordination sont menées selon le principe de confidentialité.' },
          { q: 'Comment est la fonction sexuelle après une prothèse pénienne ?', a: 'La prothèse apporte une solution durable aux troubles de l’érection ne répondant pas aux médicaments ; une formation à son utilisation est dispensée.' },
          { q: 'La chirurgie de la varicocèle corrige-t-elle l’infertilité ?', a: 'La varicocélectomie microchirurgicale peut améliorer les paramètres spermatiques chez des patients sélectionnés.' }
        ]
      }
    }
  },
  {
    slug: 'uroonkoloji',
    icon: 'oncology',
    i18n: {
      tr: {
        title: 'Üroonkoloji (Mesane, Böbrek, Testis Tümörü Cerrahisi)',
        summary:
          'Üriner sistem ve erkek üreme organları kanserlerinde minimal invaziv ve organ koruyucu cerrahi.',
        metaTitle: 'Üroonkoloji | Mesane, Böbrek, Testis Kanseri Cerrahisi',
        metaDescription:
          'Üroonkolojik cerrahi: mesane, böbrek ve testis tümörlerinde robotik/laparoskopik ve organ koruyucu yöntemler; süreç, riskler ve fiyat aralığı.',
        definition: [
          'Üroonkoloji; böbrek, mesane, prostat ve testis gibi üriner ve erkek üreme sistemi kanserlerinin cerrahi tedavisiyle ilgilenir.',
          'Uygun vakalarda organ koruyucu (ör. kısmi nefrektomi) ve minimal invaziv robotik/laparoskopik teknikler tercih edilir. Tedavi, multidisipliner tümör konseyi kararıyla planlanır.'
        ],
        surgeonExperience: {
          caseVolume: '' /* TODO-DOGRULA: caseStats.ts */,
          note: 'Vaka sayısı, Doç. Dr. Müslüm Ergün’ün bu alandaki toplam cerrahi deneyimini yansıtır.'
        },
        timeline: [
          { when: 'Uzaktan', title: 'Konsey değerlendirmesi', body: 'Patoloji ve görüntüleme sonuçlarınız tümör konseyinde değerlendirilir.' },
          { when: '1–2. Gün', title: 'Varış ve tetkik', body: 'Muayene, evreleme tetkikleri ve anestezi değerlendirmesi.' },
          { when: '3. Gün', title: 'Ameliyat', body: 'Robotik/laparoskopik veya açık cerrahi; kapsama göre yatış süresi değişir.' },
          { when: '5–7. Gün', title: 'Kontrol ve patoloji', body: 'Patoloji sonucu, sonraki adımların planı ve dönüş onayı.' }
        ],
        risks: [
          'Kanama, enfeksiyon ve genel cerrahi riskler',
          'Organ işlevinde değişiklik (kapsama göre)',
          'Ek tedavi (kemoterapi/immünoterapi) gerekebilmesi',
          'Nüks takibi gerekliliği'
        ],
        alternatives: [
          'Aktif izlem (seçili küçük tümörlerde)',
          'Ablasyon teknikleri (seçili böbrek tümörlerinde)',
          'Radyoterapi/sistemik tedavi (evreye göre)',
          'Mesane koruyucu protokoller (seçili vakalarda)'
        ],
        price: {
          from: 0,
          to: 0,
          currency: 'EUR',
          disclaimer: 'Tümör tipi, evre ve cerrahi kapsama göre değişir.'
        },
        packageIncludes: [
          'Cerrahi ve hastane yatışı',
          'Anestezi ve evreleme tetkikleri',
          'Patoloji incelemesi',
          'Transferler ve konaklama',
          'Tıbbi tercüman ve koordinatör',
          'Kontrol ve online takip'
        ],
        faqs: [
          { q: 'Böbreğimin tamamı alınacak mı?', a: 'Uygun vakalarda sadece tümörlü kısım alınır (kısmi nefrektomi); karar görüntüleme sonrası verilir.' },
          { q: 'Ameliyat sonrası ek tedavi gerekir mi?', a: 'Patoloji ve evreye göre değişir; konsey kararıyla planlanır.' },
          { q: 'Takip nasıl yapılır?', a: 'Düzenli görüntüleme ve kan testleriyle; uzaktan takip desteği sağlanır.' }
        ]
      },
      en: {
        title: 'Uro-Oncology (Bladder, Kidney, Testicular Tumor Surgery)',
        summary: 'Minimally invasive and organ-preserving surgery for cancers of the urinary system and male reproductive organs.',
        metaTitle: 'Uro-Oncology | Bladder, Kidney, Testicular Cancer Surgery',
        metaDescription: 'Uro-oncological surgery: robotic/laparoscopic and organ-preserving methods for bladder, kidney and testicular tumors; process, risks and price range.',
        definition: [
          'Uro-oncology deals with the surgical treatment of urinary and male reproductive system cancers such as kidney, bladder, prostate and testicular cancer.',
          'In suitable cases, organ-preserving (e.g., partial nephrectomy) and minimally invasive robotic/laparoscopic techniques are preferred. Treatment is planned by a multidisciplinary tumor board.'
        ],
        surgeonExperience: {
          caseVolume: '' /* TODO-DOGRULA: caseStats.ts */,
          note: 'The case volume reflects Assoc. Prof. Dr. Müslüm Ergün’s total surgical experience in this area.'
        },
        timeline: [
          { when: 'Remote', title: 'Board review', body: 'Your pathology and imaging results are reviewed by the tumor board.' },
          { when: 'Day 1–2', title: 'Arrival & tests', body: 'Examination, staging tests and anesthesia assessment.' },
          { when: 'Day 3', title: 'Surgery', body: 'Robotic/laparoscopic or open surgery; the length of stay varies with the scope.' },
          { when: 'Day 5–7', title: 'Review & pathology', body: 'Pathology result, plan for next steps and clearance to return.' }
        ],
        risks: [
          'Bleeding, infection and general surgical risks',
          'Changes in organ function (depending on scope)',
          'Possible need for additional treatment (chemotherapy/immunotherapy)',
          'The need for recurrence follow-up'
        ],
        alternatives: [
          'Active surveillance (in selected small tumors)',
          'Ablation techniques (in selected kidney tumors)',
          'Radiotherapy/systemic therapy (depending on stage)',
          'Bladder-preserving protocols (in selected cases)'
        ],
        price: {
          from: 0,
          to: 0,
          currency: 'EUR',
          disclaimer: 'Varies by tumor type, stage and surgical scope.'
        },
        packageIncludes: [
          'Surgery and hospital stay',
          'Anesthesia and staging tests',
          'Pathology examination',
          'Transfers and accommodation',
          'Medical interpreter and coordinator',
          'Follow-up and online monitoring'
        ],
        faqs: [
          { q: 'Will my entire kidney be removed?', a: 'In suitable cases only the tumor portion is removed (partial nephrectomy); the decision is made after imaging.' },
          { q: 'Will I need additional treatment after surgery?', a: 'It depends on pathology and stage; it is planned by the tumor board.' },
          { q: 'How is follow-up done?', a: 'With regular imaging and blood tests; remote follow-up support is provided.' }
        ]
      },
      ar: {
        title: 'أورام المسالك البولية (جراحة أورام المثانة والكلى والخصية)',
        summary: 'جراحة قليلة التوغل ومحافِظة على الأعضاء لعلاج سرطانات الجهاز البولي والأعضاء التناسلية الذكرية.',
        metaTitle: 'أورام المسالك البولية | جراحة سرطان المثانة والكلى والخصية',
        metaDescription: 'جراحة أورام المسالك البولية: أساليب روبوتية/بالمنظار ومحافِظة على الأعضاء لأورام المثانة والكلى والخصية؛ المسار، المخاطر ونطاق السعر.',
        definition: [
          'تُعنى أورام المسالك البولية بالعلاج الجراحي لسرطانات الجهاز البولي والتناسلي الذكري، مثل سرطان الكلى والمثانة والبروستاتا والخصية.',
          'في الحالات المناسبة تُفضَّل التقنيات المحافِظة على العضو (مثل الاستئصال الجزئي للكلية) والأساليب الروبوتية/بالمنظار قليلة التوغل. ويُخطَّط للعلاج بقرار من مجلس أورام متعدد التخصصات.'
        ],
        surgeonExperience: {
          caseVolume: '' /* TODO-DOGRULA: caseStats.ts */,
          note: 'يعكس عدد الحالات إجمالي الخبرة الجراحية للأستاذ المشارك د. مسلم إرغن في هذا المجال.'
        },
        timeline: [
          { when: 'عن بُعد', title: 'مراجعة المجلس', body: 'تُراجَع نتائج علم الأمراض والتصوير من قِبل مجلس الأورام.' },
          { when: 'اليوم 1–2', title: 'الوصول والفحوصات', body: 'الفحص، فحوصات تحديد المرحلة، وتقييم التخدير.' },
          { when: 'اليوم 3', title: 'العملية', body: 'جراحة روبوتية/بالمنظار أو مفتوحة؛ وتختلف مدة المبيت حسب نطاق العملية.' },
          { when: 'اليوم 5–7', title: 'المراجعة وعلم الأمراض', body: 'نتيجة علم الأمراض، خطة الخطوات التالية، والإذن بالعودة.' }
        ],
        risks: [
          'نزيف وعدوى ومخاطر جراحية عامة',
          'تغيّر في وظيفة العضو (حسب نطاق الجراحة)',
          'احتمال الحاجة لعلاج إضافي (علاج كيميائي/مناعي)',
          'ضرورة متابعة الانتكاس'
        ],
        alternatives: [
          'المراقبة النشطة (في أورام صغيرة مختارة)',
          'تقنيات الكيّ/الاستئصال بالحرارة (في أورام كلى مختارة)',
          'العلاج الإشعاعي/الجهازي (حسب المرحلة)',
          'بروتوكولات الحفاظ على المثانة (في حالات مختارة)'
        ],
        price: {
          from: 0,
          to: 0,
          currency: 'EUR',
          disclaimer: 'يختلف حسب نوع الورم ومرحلته ونطاق الجراحة.'
        },
        packageIncludes: [
          'العملية والإقامة في المستشفى',
          'التخدير وفحوصات تحديد المرحلة',
          'فحص علم الأمراض',
          'التنقلات والإقامة',
          'مترجم طبي ومنسّق',
          'المراجعة والمتابعة الإلكترونية'
        ],
        faqs: [
          { q: 'هل ستُستأصل الكلية بالكامل؟', a: 'في الحالات المناسبة يُستأصل الجزء المصاب بالورم فقط (استئصال جزئي)؛ ويُتَّخذ القرار بعد التصوير.' },
          { q: 'هل سأحتاج علاجًا إضافيًا بعد العملية؟', a: 'يعتمد على علم الأمراض والمرحلة؛ ويُخطَّط له بقرار المجلس.' },
          { q: 'كيف تتم المتابعة؟', a: 'عبر التصوير المنتظم وفحوص الدم؛ ويُقدَّم دعم متابعة عن بُعد.' }
        ]
      },
      de: {
        title: 'Uroonkologie (Blasen-, Nieren-, Hodentumor-Chirurgie)',
        summary: 'Minimalinvasive und organerhaltende Chirurgie bei Krebserkrankungen des Harnsystems und der männlichen Geschlechtsorgane.',
        metaTitle: 'Uroonkologie | Blasen-, Nieren-, Hodenkrebs-Chirurgie',
        metaDescription: 'Uroonkologische Chirurgie: robotische/laparoskopische und organerhaltende Verfahren bei Blasen-, Nieren- und Hodentumoren; Ablauf, Risiken und Preisspanne.',
        definition: [
          'Die Uroonkologie befasst sich mit der chirurgischen Behandlung von Krebserkrankungen des Harn- und männlichen Geschlechtssystems wie Nieren-, Blasen-, Prostata- und Hodenkrebs.',
          'In geeigneten Fällen werden organerhaltende (z. B. partielle Nephrektomie) und minimalinvasive robotische/laparoskopische Techniken bevorzugt. Die Behandlung wird von einem interdisziplinären Tumorboard geplant.'
        ],
        surgeonExperience: {
          caseVolume: '' /* TODO-DOGRULA: caseStats.ts */,
          note: 'Die Fallzahl spiegelt die gesamte chirurgische Erfahrung von Doz. Dr. Müslüm Ergün in diesem Bereich wider.'
        },
        timeline: [
          { when: 'Aus der Ferne', title: 'Tumorboard-Bewertung', body: 'Ihre Pathologie- und Bildgebungsbefunde werden im Tumorboard bewertet.' },
          { when: 'Tag 1–2', title: 'Ankunft & Untersuchungen', body: 'Untersuchung, Staging-Untersuchungen und Anästhesiebewertung.' },
          { when: 'Tag 3', title: 'Operation', body: 'Robotische/laparoskopische oder offene Operation; die Aufenthaltsdauer richtet sich nach dem Umfang.' },
          { when: 'Tag 5–7', title: 'Kontrolle & Pathologie', body: 'Pathologiebefund, Plan der nächsten Schritte und Reisefreigabe.' }
        ],
        risks: [
          'Blutung, Infektion und allgemeine chirurgische Risiken',
          'Veränderungen der Organfunktion (je nach Umfang)',
          'Möglicher Bedarf an Zusatztherapie (Chemo-/Immuntherapie)',
          'Notwendigkeit der Rezidiv-Nachsorge'
        ],
        alternatives: [
          'Aktive Überwachung (bei ausgewählten kleinen Tumoren)',
          'Ablationsverfahren (bei ausgewählten Nierentumoren)',
          'Strahlen-/systemische Therapie (je nach Stadium)',
          'Blasenerhaltende Protokolle (in ausgewählten Fällen)'
        ],
        price: {
          from: 0,
          to: 0,
          currency: 'EUR',
          disclaimer: 'Variiert je nach Tumorart, Stadium und OP-Umfang.'
        },
        packageIncludes: [
          'Operation und Krankenhausaufenthalt',
          'Anästhesie und Staging-Untersuchungen',
          'Pathologische Untersuchung',
          'Transfers und Unterkunft',
          'Medizinischer Dolmetscher und Koordinator',
          'Kontrolle und Online-Nachsorge'
        ],
        faqs: [
          { q: 'Wird meine gesamte Niere entfernt?', a: 'In geeigneten Fällen wird nur der Tumoranteil entfernt (partielle Nephrektomie); die Entscheidung fällt nach der Bildgebung.' },
          { q: 'Benötige ich nach der Operation eine Zusatztherapie?', a: 'Das hängt von Pathologie und Stadium ab und wird vom Tumorboard geplant.' },
          { q: 'Wie erfolgt die Nachsorge?', a: 'Mit regelmäßiger Bildgebung und Blutuntersuchungen; eine Fernnachsorge wird angeboten.' }
        ]
      },
      ru: {
        title: 'Уроонкология (хирургия опухолей мочевого пузыря, почки, яичка)',
        summary: 'Малоинвазивная и органосохраняющая хирургия при раке мочевой системы и мужских половых органов.',
        metaTitle: 'Уроонкология | Хирургия рака мочевого пузыря, почки, яичка',
        metaDescription: 'Уроонкологическая хирургия: роботические/лапароскопические и органосохраняющие методы при опухолях мочевого пузыря, почки и яичка; процесс, риски и диапазон цен.',
        definition: [
          'Уроонкология занимается хирургическим лечением рака мочевой и мужской половой системы — почки, мочевого пузыря, простаты и яичка.',
          'В подходящих случаях предпочтительны органосохраняющие (например, частичная нефрэктомия) и малоинвазивные роботические/лапароскопические методики. Лечение планирует мультидисциплинарный онкологический консилиум.'
        ],
        surgeonExperience: {
          caseVolume: '' /* TODO-DOGRULA: caseStats.ts */,
          note: 'Число операций отражает общий хирургический опыт доцента д-ра Мюслюма Эргюна в этой области.'
        },
        timeline: [
          { when: 'Удалённо', title: 'Оценка консилиума', body: 'Ваши результаты гистологии и снимков оценивает онкологический консилиум.' },
          { when: 'День 1–2', title: 'Прибытие и обследование', body: 'Осмотр, обследования для стадирования и анестезиологическая оценка.' },
          { when: 'День 3', title: 'Операция', body: 'Роботическая/лапароскопическая или открытая операция; длительность пребывания зависит от объёма.' },
          { when: 'День 5–7', title: 'Контроль и гистология', body: 'Результат гистологии, план дальнейших шагов и разрешение на возвращение.' }
        ],
        risks: [
          'Кровотечение, инфекция и общие хирургические риски',
          'Изменения функции органа (в зависимости от объёма)',
          'Возможная необходимость дополнительного лечения (химио-/иммунотерапия)',
          'Необходимость наблюдения за рецидивом'
        ],
        alternatives: [
          'Активное наблюдение (при отдельных мелких опухолях)',
          'Методы аблации (при отдельных опухолях почки)',
          'Лучевая/системная терапия (в зависимости от стадии)',
          'Органосохраняющие протоколы для мочевого пузыря (в отдельных случаях)'
        ],
        price: {
          from: 0,
          to: 0,
          currency: 'EUR',
          disclaimer: 'Зависит от типа опухоли, стадии и объёма операции.'
        },
        packageIncludes: [
          'Операция и пребывание в стационаре',
          'Анестезия и обследования для стадирования',
          'Гистологическое исследование',
          'Трансферы и проживание',
          'Медицинский переводчик и координатор',
          'Контроль и онлайн-наблюдение'
        ],
        faqs: [
          { q: 'Удалят ли всю почку целиком?', a: 'В подходящих случаях удаляют только часть с опухолью (частичная нефрэктомия); решение принимается после визуализации.' },
          { q: 'Понадобится ли дополнительное лечение после операции?', a: 'Зависит от гистологии и стадии; планируется консилиумом.' },
          { q: 'Как проводится наблюдение?', a: 'С помощью регулярной визуализации и анализов крови; предоставляется дистанционная поддержка наблюдения.' }
        ]
      },
      fr: {
        title: 'Uro-oncologie (chirurgie des tumeurs de la vessie, du rein et du testicule)',
        summary: 'Chirurgie mini-invasive et préservant les organes pour les cancers de l’appareil urinaire et des organes reproducteurs masculins.',
        metaTitle: 'Uro-oncologie | Chirurgie des cancers de la vessie, du rein et du testicule',
        metaDescription: 'Chirurgie uro-oncologique : techniques robotiques/laparoscopiques et préservant les organes pour les tumeurs de la vessie, du rein et du testicule ; déroulement, risques et fourchette de prix.',
        definition: [
          'L’uro-oncologie traite chirurgicalement les cancers de l’appareil urinaire et de l’appareil reproducteur masculin : rein, vessie, prostate et testicule.',
          'Lorsque cela est possible, les techniques préservant l’organe (par exemple la néphrectomie partielle) et les approches mini-invasives robotiques ou laparoscopiques sont privilégiées. Le traitement est planifié en réunion de concertation pluridisciplinaire.'
        ],
        surgeonExperience: {
          caseVolume: '' /* TODO-DOGRULA: caseStats.ts */,
          note: 'Le nombre d’interventions reflète l’expérience chirurgicale totale du Dr Müslüm Ergün dans ce domaine.'
        },
        timeline: [
          { when: 'À distance', title: 'Concertation pluridisciplinaire', body: 'Vos résultats anatomopathologiques et votre imagerie sont examinés en réunion de concertation.' },
          { when: 'Jours 1–2', title: 'Arrivée et examens', body: 'Examen clinique, bilan d’extension et consultation d’anesthésie.' },
          { when: 'Jour 3', title: 'Intervention', body: 'Chirurgie robotique, laparoscopique ou ouverte ; la durée du séjour dépend de l’étendue du geste.' },
          { when: 'Jours 5–7', title: 'Contrôle et anatomopathologie', body: 'Résultat anatomopathologique, plan de suite et autorisation de retour.' }
        ],
        risks: [
          'Saignement, infection et risques chirurgicaux généraux',
          'Modification de la fonction de l’organe (selon l’étendue du geste)',
          'Nécessité éventuelle d’un traitement complémentaire (chimiothérapie, immunothérapie)',
          'Nécessité d’une surveillance de la récidive'
        ],
        alternatives: [
          'Surveillance active (petites tumeurs sélectionnées)',
          'Techniques d’ablation (tumeurs rénales sélectionnées)',
          'Radiothérapie ou traitement systémique (selon le stade)',
          'Protocoles de préservation vésicale (dans des cas sélectionnés)'
        ],
        price: {
          from: 0,
          to: 0,
          currency: 'EUR',
          disclaimer: 'Varie selon le type de tumeur, le stade et l’étendue du geste chirurgical.'
        },
        packageIncludes: [
          'Intervention et séjour hospitalier',
          'Anesthésie et bilan d’extension',
          'Examen anatomopathologique',
          'Transferts et hébergement',
          'Interprète médical et coordinateur',
          'Contrôle et suivi en ligne'
        ],
        faqs: [
          { q: 'Mon rein sera-t-il retiré en totalité ?', a: 'Dans les cas favorables, seule la partie tumorale est retirée (néphrectomie partielle) ; la décision est prise après l’imagerie.' },
          { q: 'Aurai-je besoin d’un traitement complémentaire après la chirurgie ?', a: 'Cela dépend de l’anatomopathologie et du stade ; la décision est prise en concertation pluridisciplinaire.' },
          { q: 'Comment se déroule le suivi ?', a: 'Par imagerie et analyses sanguines régulières ; un accompagnement à distance est assuré.' }
        ]
      }
    }
  },
  {
    slug: 'kadin-urolojisi',
    icon: 'female',
    i18n: {
      tr: {
        title: 'Kadın Ürolojisi (İnkontinans, Pelvik Taban Cerrahisi)',
        summary:
          'İdrar kaçırma ve pelvik taban sorunlarında modern, günlük yaşama hızlı dönüş sağlayan çözümler.',
        metaTitle: 'Kadın Ürolojisi | İnkontinans ve Pelvik Taban Cerrahisi',
        metaDescription:
          'Kadın ürolojisi: idrar kaçırma (inkontinans) ve pelvik organ sarkması tedavisinde sling ve pelvik taban cerrahisi; süreç, riskler ve fiyat aralığı.',
        definition: [
          'Kadın ürolojisi; stres tipi idrar kaçırma, aşırı aktif mesane ve pelvik organ sarkması gibi durumların tanı ve tedavisiyle ilgilenir.',
          'Tedavi; pelvik taban egzersizlerinden minimal invaziv sling ameliyatlarına ve pelvik taban onarımına kadar uzanır. Yöntem, şikâyetin tipine ve şiddetine göre seçilir.'
        ],
        surgeonExperience: {
          caseVolume: '' /* TODO-DOGRULA: caseStats.ts */,
          note: 'Vaka sayısı, Doç. Dr. Müslüm Ergün’ün bu alandaki toplam cerrahi deneyimini yansıtır.'
        },
        timeline: [
          { when: 'Uzaktan', title: 'Ön değerlendirme', body: 'Şikâyet öykünüz ve varsa ürodinami sonuçları değerlendirilir.' },
          { when: '1. Gün', title: 'Varış ve muayene', body: 'Muayene, gerekli testler ve planlama.' },
          { when: '2. Gün', title: 'İşlem', body: 'Minimal invaziv sling veya onarım; çoğu vaka günübirlik–1 gece.' },
          { when: '3–4. Gün', title: 'Kontrol', body: 'Kontrol, bilgilendirme ve dönüş onayı.' }
        ],
        risks: [
          'Geçici idrar yapma zorluğu',
          'İdrar yolu enfeksiyonu',
          'Ağrı veya şişlik (geçici)',
          'Nadiren tekrar işlem ihtiyacı'
        ],
        alternatives: [
          'Pelvik taban (Kegel) egzersizleri',
          'Mesane eğitimi ve yaşam tarzı değişiklikleri',
          'İlaç tedavisi (aşırı aktif mesanede)',
          'Pesari (sarkma vakalarında)'
        ],
        price: {
          from: 0,
          to: 0,
          currency: 'EUR',
          disclaimer: 'İşlem tipine göre değişir.'
        },
        packageIncludes: [
          'İşlem ve hastane yatışı',
          'Anestezi ve tetkikler',
          'Transferler ve konaklama',
          'Kadın tıbbi tercüman (talebe göre)',
          'Kontrol ve online takip'
        ],
        faqs: [
          { q: 'Sling ameliyatı kalıcı mı?', a: 'Çoğu hastada uzun süreli iyileşme sağlar; sonuç şikâyet tipine göre değişir.' },
          { q: 'İyileşme ne kadar sürer?', a: 'Günlük hafif aktiviteye birkaç gün içinde dönülür; ağır aktivite birkaç hafta ertelenir.' },
          { q: 'Kadın sağlık personeli talep edebilir miyim?', a: 'Evet; talebe göre kadın tercüman ve koordinasyon desteği sağlanır.' }
        ]
      },
      en: {
        title: 'Female Urology (Incontinence, Pelvic Floor Surgery)',
        summary: 'Modern solutions for urinary incontinence and pelvic floor problems that enable a quick return to daily life.',
        metaTitle: 'Female Urology | Incontinence and Pelvic Floor Surgery',
        metaDescription: 'Female urology: sling and pelvic floor surgery for urinary incontinence and pelvic organ prolapse; process, risks and price range.',
        definition: [
          'Female urology deals with the diagnosis and treatment of conditions such as stress urinary incontinence, overactive bladder and pelvic organ prolapse.',
          'Treatment ranges from pelvic floor exercises to minimally invasive sling operations and pelvic floor repair. The method is chosen according to the type and severity of the complaint.'
        ],
        surgeonExperience: {
          caseVolume: '' /* TODO-DOGRULA: caseStats.ts */,
          note: 'The case volume reflects Assoc. Prof. Dr. Müslüm Ergün’s total surgical experience in this area.'
        },
        timeline: [
          { when: 'Remote', title: 'Pre-assessment', body: 'Your symptom history and, if available, urodynamics results are evaluated.' },
          { when: 'Day 1', title: 'Arrival & exam', body: 'Examination, required tests and planning.' },
          { when: 'Day 2', title: 'Procedure', body: 'Minimally invasive sling or repair; most cases day-case–1 night.' },
          { when: 'Day 3–4', title: 'Review', body: 'Review, information and clearance to return.' }
        ],
        risks: [
          'Temporary difficulty urinating',
          'Urinary tract infection',
          'Pain or swelling (temporary)',
          'Rarely, need for a repeat procedure'
        ],
        alternatives: [
          'Pelvic floor (Kegel) exercises',
          'Bladder training and lifestyle changes',
          'Medication (for overactive bladder)',
          'Pessary (in prolapse cases)'
        ],
        price: {
          from: 0,
          to: 0,
          currency: 'EUR',
          disclaimer: 'Varies by procedure type.'
        },
        packageIncludes: [
          'Procedure and hospital stay',
          'Anesthesia and tests',
          'Transfers and accommodation',
          'Female medical interpreter (on request)',
          'Follow-up and online monitoring'
        ],
        faqs: [
          { q: 'Is sling surgery permanent?', a: 'It provides long-lasting improvement in most patients; the outcome varies by complaint type.' },
          { q: 'How long does recovery take?', a: 'You return to light daily activity within a few days; heavy activity is postponed for a few weeks.' },
          { q: 'Can I request female medical staff?', a: 'Yes; on request, a female interpreter and coordination support are provided.' }
        ]
      },
      ar: {
        title: 'مسالك النساء (سلس البول، جراحة قاع الحوض)',
        summary: 'حلول حديثة لسلس البول ومشكلات قاع الحوض تتيح عودة سريعة إلى الحياة اليومية.',
        metaTitle: 'مسالك النساء | سلس البول وجراحة قاع الحوض',
        metaDescription: 'مسالك النساء: جراحة الشريط (السلينج) وقاع الحوض لعلاج سلس البول وهبوط أعضاء الحوض؛ المسار، المخاطر ونطاق السعر.',
        definition: [
          'تُعنى مسالك النساء بتشخيص وعلاج حالات مثل سلس البول الإجهادي، والمثانة مفرطة النشاط، وهبوط أعضاء الحوض.',
          'يمتد العلاج من تمارين قاع الحوض إلى عمليات الشريط (السلينج) قليلة التوغل وترميم قاع الحوض. ويُختار الأسلوب حسب نوع الشكوى وشدّتها.'
        ],
        surgeonExperience: {
          caseVolume: '' /* TODO-DOGRULA: caseStats.ts */,
          note: 'يعكس عدد الحالات إجمالي الخبرة الجراحية للأستاذ المشارك د. مسلم إرغن في هذا المجال.'
        },
        timeline: [
          { when: 'عن بُعد', title: 'التقييم الأولي', body: 'يُقيَّم تاريخ الأعراض، ونتائج ديناميكا البول إن وُجدت.' },
          { when: 'اليوم 1', title: 'الوصول والفحص', body: 'الفحص، الفحوصات اللازمة، والتخطيط.' },
          { when: 'اليوم 2', title: 'الإجراء', body: 'شريط (سلينج) قليل التوغل أو ترميم؛ معظم الحالات في اليوم نفسه–ليلة واحدة.' },
          { when: 'اليوم 3–4', title: 'المراجعة', body: 'المراجعة، التوعية، والإذن بالعودة.' }
        ],
        risks: [
          'صعوبة مؤقتة في التبول',
          'التهاب المسالك البولية',
          'ألم أو تورّم (مؤقت)',
          'نادرًا، الحاجة لإجراء إضافي'
        ],
        alternatives: [
          'تمارين قاع الحوض (كيجل)',
          'تدريب المثانة وتغييرات نمط الحياة',
          'العلاج الدوائي (للمثانة مفرطة النشاط)',
          'الفرزجة (في حالات الهبوط)'
        ],
        price: {
          from: 0,
          to: 0,
          currency: 'EUR',
          disclaimer: 'يختلف حسب نوع الإجراء.'
        },
        packageIncludes: [
          'الإجراء والإقامة في المستشفى',
          'التخدير والفحوصات',
          'التنقلات والإقامة',
          'مترجمة طبية (عند الطلب)',
          'المراجعة والمتابعة الإلكترونية'
        ],
        faqs: [
          { q: 'هل جراحة الشريط دائمة؟', a: 'تحقّق تحسّنًا طويل الأمد لدى معظم المريضات؛ وتختلف النتيجة حسب نوع الشكوى.' },
          { q: 'كم يستغرق التعافي؟', a: 'تعودين إلى النشاط اليومي الخفيف خلال أيام قليلة؛ ويُؤجَّل النشاط الشاق بضعة أسابيع.' },
          { q: 'هل يمكنني طلب طاقم طبي نسائي؟', a: 'نعم؛ عند الطلب تُوفَّر مترجمة ودعم تنسيق نسائي.' }
        ]
      },
      de: {
        title: 'Frauenurologie (Inkontinenz, Beckenboden-Chirurgie)',
        summary: 'Moderne Lösungen bei Harninkontinenz und Beckenbodenproblemen mit rascher Rückkehr in den Alltag.',
        metaTitle: 'Frauenurologie | Inkontinenz und Beckenboden-Chirurgie',
        metaDescription: 'Frauenurologie: Schlingen- und Beckenbodenchirurgie bei Harninkontinenz und Beckenorganprolaps; Ablauf, Risiken und Preisspanne.',
        definition: [
          'Die Frauenurologie befasst sich mit Diagnose und Behandlung von Erkrankungen wie Belastungsinkontinenz, überaktiver Blase und Beckenorganprolaps.',
          'Die Behandlung reicht von Beckenbodenübungen über minimalinvasive Schlingenoperationen bis zur Beckenbodenrekonstruktion. Das Verfahren wird nach Art und Schweregrad der Beschwerden gewählt.'
        ],
        surgeonExperience: {
          caseVolume: '' /* TODO-DOGRULA: caseStats.ts */,
          note: 'Die Fallzahl spiegelt die gesamte chirurgische Erfahrung von Doz. Dr. Müslüm Ergün in diesem Bereich wider.'
        },
        timeline: [
          { when: 'Aus der Ferne', title: 'Vorabbewertung', body: 'Ihre Symptomvorgeschichte und – falls vorhanden – Urodynamik-Befunde werden ausgewertet.' },
          { when: 'Tag 1', title: 'Ankunft & Untersuchung', body: 'Untersuchung, erforderliche Tests und Planung.' },
          { when: 'Tag 2', title: 'Eingriff', body: 'Minimalinvasive Schlinge oder Rekonstruktion; die meisten Fälle ambulant–1 Nacht.' },
          { when: 'Tag 3–4', title: 'Kontrolle', body: 'Kontrolle, Aufklärung und Reisefreigabe.' }
        ],
        risks: [
          'Vorübergehende Schwierigkeiten beim Wasserlassen',
          'Harnwegsinfektion',
          'Schmerzen oder Schwellung (vorübergehend)',
          'Selten Bedarf an einem erneuten Eingriff'
        ],
        alternatives: [
          'Beckenboden- (Kegel-)Übungen',
          'Blasentraining und Lebensstiländerungen',
          'Medikamente (bei überaktiver Blase)',
          'Pessar (bei Prolaps)'
        ],
        price: {
          from: 0,
          to: 0,
          currency: 'EUR',
          disclaimer: 'Variiert je nach Art des Eingriffs.'
        },
        packageIncludes: [
          'Eingriff und Krankenhausaufenthalt',
          'Anästhesie und Untersuchungen',
          'Transfers und Unterkunft',
          'Weibliche medizinische Dolmetscherin (auf Wunsch)',
          'Kontrolle und Online-Nachsorge'
        ],
        faqs: [
          { q: 'Ist die Schlingenoperation dauerhaft?', a: 'Sie bietet bei den meisten Patientinnen eine langanhaltende Besserung; das Ergebnis hängt von der Art der Beschwerden ab.' },
          { q: 'Wie lange dauert die Genesung?', a: 'Zu leichter Alltagsaktivität kehren Sie innerhalb weniger Tage zurück; schwere Aktivität wird einige Wochen aufgeschoben.' },
          { q: 'Kann ich weibliches medizinisches Personal anfragen?', a: 'Ja; auf Wunsch werden eine Dolmetscherin und weibliche Koordinationsunterstützung bereitgestellt.' }
        ]
      },
      ru: {
        title: 'Женская урология (недержание мочи, хирургия тазового дна)',
        summary: 'Современные решения при недержании мочи и проблемах тазового дна с быстрым возвращением к повседневной жизни.',
        metaTitle: 'Женская урология | Недержание и хирургия тазового дна',
        metaDescription: 'Женская урология: слинговая и тазовая хирургия при недержании мочи и опущении органов таза; процесс, риски и диапазон цен.',
        definition: [
          'Женская урология занимается диагностикой и лечением таких состояний, как стрессовое недержание мочи, гиперактивный мочевой пузырь и опущение органов малого таза.',
          'Лечение варьируется от упражнений для тазового дна до малоинвазивных слинговых операций и реконструкции тазового дна. Метод выбирают по типу и тяжести жалоб.'
        ],
        surgeonExperience: {
          caseVolume: '' /* TODO-DOGRULA: caseStats.ts */,
          note: 'Число операций отражает общий хирургический опыт доцента д-ра Мюслюма Эргюна в этой области.'
        },
        timeline: [
          { when: 'Удалённо', title: 'Предварительная оценка', body: 'Оцениваются история симптомов и, при наличии, результаты уродинамики.' },
          { when: 'День 1', title: 'Прибытие и осмотр', body: 'Осмотр, необходимые анализы и планирование.' },
          { when: 'День 2', title: 'Процедура', body: 'Малоинвазивный слинг или реконструкция; большинство случаев — в тот же день–1 ночь.' },
          { when: 'День 3–4', title: 'Контроль', body: 'Контроль, информирование и разрешение на возвращение.' }
        ],
        risks: [
          'Временное затруднение мочеиспускания',
          'Инфекция мочевыводящих путей',
          'Боль или отёк (временные)',
          'Редко — необходимость повторной процедуры'
        ],
        alternatives: [
          'Упражнения для тазового дна (Кегеля)',
          'Тренировка мочевого пузыря и изменения образа жизни',
          'Медикаменты (при гиперактивном мочевом пузыре)',
          'Пессарий (при опущении)'
        ],
        price: {
          from: 0,
          to: 0,
          currency: 'EUR',
          disclaimer: 'Зависит от типа процедуры.'
        },
        packageIncludes: [
          'Процедура и пребывание в стационаре',
          'Анестезия и анализы',
          'Трансферы и проживание',
          'Переводчица-женщина (по запросу)',
          'Контроль и онлайн-наблюдение'
        ],
        faqs: [
          { q: 'Слинговая операция постоянна?', a: 'У большинства пациенток она даёт длительное улучшение; результат зависит от типа жалоб.' },
          { q: 'Сколько длится восстановление?', a: 'К лёгкой повседневной активности вы возвращаетесь за несколько дней; тяжёлые нагрузки откладываются на несколько недель.' },
          { q: 'Могу ли я запросить женский медицинский персонал?', a: 'Да; по запросу предоставляются переводчица и женская координационная поддержка.' }
        ]
      },
      fr: {
        title: 'Urologie féminine (incontinence, chirurgie du plancher pelvien)',
        summary: 'Des solutions modernes pour l’incontinence urinaire et les troubles du plancher pelvien, permettant un retour rapide à la vie quotidienne.',
        metaTitle: 'Urologie féminine | Incontinence et chirurgie du plancher pelvien',
        metaDescription: 'Urologie féminine : bandelette sous-urétrale et chirurgie du plancher pelvien pour l’incontinence urinaire et le prolapsus ; déroulement, risques et fourchette de prix.',
        definition: [
          'L’urologie féminine prend en charge le diagnostic et le traitement de l’incontinence urinaire d’effort, de l’hyperactivité vésicale et du prolapsus des organes pelviens.',
          'Le traitement va de la rééducation périnéale aux bandelettes sous-urétrales mini-invasives et à la réparation du plancher pelvien. La méthode est choisie selon le type et la sévérité des troubles.'
        ],
        surgeonExperience: {
          caseVolume: '' /* TODO-DOGRULA: caseStats.ts */,
          note: 'Le nombre d’interventions reflète l’expérience chirurgicale totale du Dr Müslüm Ergün dans ce domaine.'
        },
        timeline: [
          { when: 'À distance', title: 'Pré-évaluation', body: 'Votre historique de symptômes et, le cas échéant, votre bilan urodynamique sont évalués.' },
          { when: 'Jour 1', title: 'Arrivée et examen', body: 'Examen clinique, bilan nécessaire et planification.' },
          { when: 'Jour 2', title: 'Intervention', body: 'Bandelette mini-invasive ou réparation ; le plus souvent en ambulatoire ou avec une nuit.' },
          { when: 'Jours 3–4', title: 'Contrôle', body: 'Contrôle, informations et autorisation de retour.' }
        ],
        risks: [
          'Difficulté transitoire à uriner',
          'Infection urinaire',
          'Douleur ou œdème (transitoires)',
          'Rarement, nécessité d’une seconde intervention'
        ],
        alternatives: [
          'Rééducation périnéale (exercices de Kegel)',
          'Rééducation vésicale et modifications du mode de vie',
          'Traitement médicamenteux (hyperactivité vésicale)',
          'Pessaire (en cas de prolapsus)'
        ],
        price: {
          from: 0,
          to: 0,
          currency: 'EUR',
          disclaimer: 'Varie selon le type d’intervention.'
        },
        packageIncludes: [
          'Intervention et séjour hospitalier',
          'Anesthésie et examens',
          'Transferts et hébergement',
          'Interprète médicale (sur demande)',
          'Contrôle et suivi en ligne'
        ],
        faqs: [
          { q: 'La chirurgie par bandelette est-elle définitive ?', a: 'Elle apporte une amélioration durable chez la plupart des patientes ; le résultat varie selon le type de trouble.' },
          { q: 'Combien de temps dure la récupération ?', a: 'Vous reprenez une activité quotidienne légère en quelques jours ; les efforts importants sont différés de quelques semaines.' },
          { q: 'Puis-je demander un personnel médical féminin ?', a: 'Oui ; sur demande, une interprète et un accompagnement féminins sont proposés.' }
        ]
      }
    }
  },
  {
    slug: 'uretroplasti',
    icon: 'urethra',
    category: 'reconstructive',
    i18n: {
      tr: {
        title: 'Üretroplasti (Üretral Darlık Cerrahisi)',
        summary: 'Üretral darlıkta kalıcı çözüm sağlayan rekonstrüktif cerrahi; bulber, penil, uzun segment ve redo (tekrar) vakalar dahil.',
        metaTitle: 'Üretroplasti | Üretral Darlık Cerrahisi (Bulber, Penil, Redo)',
        metaDescription: 'Üretral darlıkta üretroplasti: bulber ve penil darlık, uzun segment/kompleks darlık ve başarısız girişim sonrası redo üretroplasti. Karmaşık ve nadir vaka deneyimi.',
        definition: [
          'Üretral darlık, idrar kanalının (üretra) skar dokusuyla daralmasıdır; zayıf idrar akışı, zorlanma ve tekrarlayan enfeksiyonlara yol açar. Basit girişimler (dilatasyon, iç üretrotomi) kısa vadeli rahatlama sağlasa da darlık çoğu zaman tekrarlar.',
          'Üretroplasti, darlığın kalıcı olarak onarıldığı rekonstrüktif ameliyattır. Darlığın yeri (bulber/penil), uzunluğu ve daha önce geçirilmiş girişimler cerrahiyi belirler. Uzun segment ve tekrarlayan (redo) vakalar özel deneyim gerektirir ve genellikle bu cerrahiyi güvenle yapabilen az sayıda merkeze yönlendirilir.'
        ],
        surgeonExperience: {
          caseVolume: '' /* TODO-DOGRULA: caseStats.ts */,
          note: 'Vaka sayısı, Doç. Dr. Müslüm Ergün’ün bu alandaki toplam cerrahi deneyimini yansıtır.'
        },
        expertise: {
          redoRate: 'Vakaların önemli bir bölümü, başka merkezdeki başarısız girişim veya iatrojenik hasar sonrası başvuran redo (yeniden onarım) olgularıdır.',
          complexCase: 'Uzun segment darlık, pan-üretral darlık, lichen sclerosus’a bağlı darlık ve tekrarlayan başarısızlık kompleks vaka kapsamındadır.',
          advancedTechnique: 'Buccal (yanak) mukoza grefti ile augmentasyon üretroplasti; gerektiğinde çok aşamalı rekonstrüksiyon.'
        },
        timeline: [
          { when: 'Uzaktan', title: 'Dosya değerlendirmesi', body: 'Üretrografi (RUG/VCUG), akım testi ve önceki ameliyat notlarınız cerrah tarafından incelenir. Bu vakalarda ayrıntılı ön değerlendirme şarttır.' },
          { when: '1–2. Gün', title: 'Varış ve ileri tetkik', body: 'Muayene, gerekirse üretroskopi ve görüntüleme; darlığın uzunluğu ve yeri netleştirilir.' },
          { when: '2–3. Gün', title: 'Ameliyat', body: 'Darlığın tipine göre eksizyon-anastomoz veya greft ile augmentasyon üretroplasti.' },
          { when: 'Sonrası', title: 'Kateter süreci', body: 'Genellikle 2–3 hafta üretral kateter kalır; kateter çekilmeden önce kontrol görüntülemesi yapılır.' },
          { when: 'Takip', title: 'Uzun dönem takip', body: 'Akım testi ve semptom takibi ile ilk yıl daha sık, sonrasında düzenli kontrol; başarı uzun dönem açıklıkla değerlendirilir.' }
        ],
        risks: [
          'Darlığın tekrarlaması (nüks) — özellikle uzun/kompleks vakalarda',
          'Greft alım yerinde (yanak içi) geçici his değişikliği',
          'Enfeksiyon, kanama ve idrar kaçağı',
          'Redo vakalarda doku kalitesinin sonucu etkilemesi'
        ],
        alternatives: [
          'Dilatasyon veya iç üretrotomi (kısa vadeli; nüks oranı yüksek)',
          'Aralıklı kendi kendine kateterizasyon (geçici idame)',
          'Çok aşamalı rekonstrüksiyon (çok kompleks vakalarda)'
        ],
        price: {
          from: 0,
          to: 0,
          currency: 'EUR',
          disclaimer: 'Bu kategoride sabit fiyat aralığı verilmez; fiyat, vaka karmaşıklığına ve gereken tekniğe göre dosya değerlendirmesi sonrası bildirilir.'
        },
        packageIncludes: [
          'Cerrahi ve hastane yatışı',
          'Anestezi ve ameliyat öncesi ileri tetkikler',
          'Greft gerektiren vakalarda greft alımı dahil',
          'Transferler ve konaklama',
          'Tıbbi tercüman ve hasta koordinatörü',
          'Kateter çekimi ve uzun dönem online takip'
        ],
        faqs: [
          { q: 'Daha önce başka bir merkezde ameliyat oldum ve başarısız oldu; tekrar (redo) ameliyat mümkün mü?', a: 'Evet. Redo üretroplasti bu merkezin özellikle deneyimli olduğu alandır. Önceki ameliyat notlarınız ve güncel görüntüleme ile değerlendirme yapılır; doku durumuna göre greft veya çok aşamalı yaklaşım planlanır.' },
          { q: 'İç üretrotomi/dilatasyon yerine neden üretroplasti?', a: 'Dilatasyon ve iç üretrotomi çoğu darlıkta kısa süre sonra tekrarlar. Üretroplasti, uygun vakalarda kalıcı çözüm sunan tek yöntemdir.' },
          { q: 'Kateter ne kadar kalır ve iyileşme ne kadar sürer?', a: 'Genellikle 2–3 hafta kateter kalır. Günlük hafif aktiviteye kısa sürede dönülür; ağır aktivite ve uzun dönem başarı değerlendirmesi birkaç haftayı bulur.' }
        ]
      },
      en: {
        title: 'Urethroplasty (Urethral Stricture Surgery)',
        summary: 'Reconstructive surgery offering a durable solution for urethral stricture; bulbar, penile, long-segment and redo (repeat) cases included.',
        metaTitle: 'Urethroplasty | Urethral Stricture Surgery (Bulbar, Penile, Redo)',
        metaDescription: 'Urethroplasty for urethral stricture: bulbar and penile stricture, long-segment/complex stricture and redo urethroplasty after failed attempts. Experience with complex and rare cases.',
        definition: [
          'A urethral stricture is a narrowing of the urinary channel (urethra) by scar tissue, causing a weak stream, straining and recurrent infections. Simple procedures (dilation, internal urethrotomy) give short-term relief but the stricture usually recurs.',
          'Urethroplasty is the reconstructive operation that repairs the stricture durably. The location (bulbar/penile), length and any previous attempts determine the surgery. Long-segment and recurrent (redo) cases require special experience and are typically referred to the few centers that can perform them safely.'
        ],
        surgeonExperience: {
          caseVolume: '' /* TODO-DOGRULA: caseStats.ts */,
          note: 'The case volume reflects Assoc. Prof. Dr. Müslüm Ergün’s total surgical experience in this area.'
        },
        expertise: {
          redoRate: 'A significant share of cases are redo referrals after a failed attempt or iatrogenic injury at another center.',
          complexCase: 'Long-segment stricture, pan-urethral stricture, lichen sclerosus–related stricture and repeated failure fall within complex cases.',
          advancedTechnique: 'Augmentation urethroplasty with buccal (cheek) mucosa graft; staged reconstruction when needed.'
        },
        timeline: [
          { when: 'Remote', title: 'File assessment', body: 'Your urethrogram (RUG/VCUG), flow test and previous operative notes are reviewed by the surgeon. Detailed pre-assessment is essential in these cases.' },
          { when: 'Day 1–2', title: 'Arrival & advanced tests', body: 'Examination, urethroscopy and imaging if needed; the length and site of the stricture are clarified.' },
          { when: 'Day 2–3', title: 'Surgery', body: 'Excision-anastomosis or graft augmentation urethroplasty depending on the stricture type.' },
          { when: 'After', title: 'Catheter period', body: 'A urethral catheter usually stays 2–3 weeks; check imaging is done before removal.' },
          { when: 'Follow-up', title: 'Long-term follow-up', body: 'Flow test and symptom tracking, more frequent in the first year; success is judged by long-term patency.' }
        ],
        risks: [
          'Stricture recurrence — especially in long/complex cases',
          'Temporary sensory change at the graft (inner cheek) site',
          'Infection, bleeding and urine leak',
          'In redo cases, tissue quality affecting the outcome'
        ],
        alternatives: [
          'Dilation or internal urethrotomy (short-term; high recurrence)',
          'Intermittent self-catheterization (temporary maintenance)',
          'Staged reconstruction (in very complex cases)'
        ],
        price: {
          from: 0,
          to: 0,
          currency: 'EUR',
          disclaimer: 'No fixed price range is given in this category; the price is shared after a file assessment, according to case complexity and the technique required.'
        },
        packageIncludes: [
          'Surgery and hospital stay',
          'Anesthesia and advanced pre-operative tests',
          'Graft harvesting included where required',
          'Transfers and accommodation',
          'Medical interpreter and patient coordinator',
          'Catheter removal and long-term online follow-up'
        ],
        faqs: [
          { q: 'I had surgery at another center and it failed; is a redo possible?', a: 'Yes. Redo urethroplasty is an area this center is especially experienced in. Your previous operative notes and current imaging are reviewed; depending on tissue condition, a graft or staged approach is planned.' },
          { q: 'Why urethroplasty instead of internal urethrotomy/dilation?', a: 'Dilation and internal urethrotomy recur soon in most strictures. Urethroplasty is the only method offering a durable solution in suitable cases.' },
          { q: 'How long does the catheter stay and recovery take?', a: 'Usually 2–3 weeks with a catheter. Light daily activity resumes quickly; heavy activity and long-term success assessment take a few weeks.' }
        ]
      },
      ar: {
        title: 'رأب الإحليل (جراحة تضيّق الإحليل)',
        summary: 'جراحة ترميمية تقدّم حلًّا دائمًا لتضيّق الإحليل؛ تشمل الحالات البصلية والقضيبية والطويلة وحالات إعادة الجراحة (redo).',
        metaTitle: 'رأب الإحليل | جراحة تضيّق الإحليل (بصلي، قضيبي، إعادة جراحة)',
        metaDescription: 'رأب الإحليل لتضيّق الإحليل: التضيّق البصلي والقضيبي، التضيّق الطويل/المعقّد، وإعادة رأب الإحليل بعد محاولات فاشلة. خبرة في الحالات المعقّدة والنادرة.',
        definition: [
          'تضيّق الإحليل هو ضيق في مجرى البول (الإحليل) بسبب النسيج الندبي، ويسبّب ضعف التدفق والإجهاد والالتهابات المتكررة. الإجراءات البسيطة (التوسيع، شق الإحليل الداخلي) تمنح راحة قصيرة الأمد لكن التضيّق يعود غالبًا.',
          'رأب الإحليل هو الجراحة الترميمية التي تُصلح التضيّق بشكل دائم. يحدّد موقع التضيّق (بصلي/قضيبي) وطوله والمحاولات السابقة نوع الجراحة. تتطلب الحالات الطويلة والمتكررة (redo) خبرة خاصة، وعادةً ما تُحال إلى عدد قليل من المراكز القادرة على إجرائها بأمان.'
        ],
        surgeonExperience: {
          caseVolume: '' /* TODO-DOGRULA: caseStats.ts */,
          note: 'يعكس عدد الحالات إجمالي الخبرة الجراحية للأستاذ المشارك د. مسلم إرغن في هذا المجال.'
        },
        expertise: {
          redoRate: 'نسبة كبيرة من الحالات هي حالات إعادة جراحة (redo) بعد محاولة فاشلة أو إصابة علاجية المنشأ في مركز آخر.',
          complexCase: 'يشمل نطاق الحالات المعقّدة: التضيّق الطويل، والتضيّق الشامل للإحليل، والتضيّق المرتبط بالحزاز المتصلّب (lichen sclerosus)، والفشل المتكرر.',
          advancedTechnique: 'رأب الإحليل التعزيزي بطُعم الغشاء المخاطي للخد (buccal)؛ وترميم متعدّد المراحل عند الحاجة.'
        },
        timeline: [
          { when: 'عن بُعد', title: 'تقييم الملف', body: 'يراجع الجرّاح صور الإحليل (RUG/VCUG) واختبار التدفق وملاحظات العمليات السابقة. التقييم الأولي المفصّل ضروري في هذه الحالات.' },
          { when: 'اليوم 1–2', title: 'الوصول والفحوصات المتقدمة', body: 'الفحص، وتنظير الإحليل والتصوير عند الحاجة؛ ويتحدّد طول التضيّق وموقعه.' },
          { when: 'اليوم 2–3', title: 'العملية', body: 'استئصال ومفاغرة، أو رأب إحليل تعزيزي بالطُعم، حسب نوع التضيّق.' },
          { when: 'بعد ذلك', title: 'فترة القسطرة', body: 'تبقى قسطرة إحليلية عادةً 2–3 أسابيع؛ ويُجرى تصوير تحقّق قبل إزالتها.' },
          { when: 'المتابعة', title: 'متابعة طويلة الأمد', body: 'متابعة باختبار التدفق والأعراض، أكثر تواترًا في السنة الأولى؛ ويُقاس النجاح بالانفتاح على المدى الطويل.' }
        ],
        risks: [
          'عودة التضيّق (النكس) — خصوصًا في الحالات الطويلة/المعقّدة',
          'تغيّر مؤقت في الإحساس بموضع أخذ الطُعم (داخل الخد)',
          'العدوى والنزيف وتسرّب البول',
          'في حالات إعادة الجراحة، تأثير جودة الأنسجة على النتيجة'
        ],
        alternatives: [
          'التوسيع أو شق الإحليل الداخلي (قصير الأمد؛ نسبة نكس مرتفعة)',
          'القسطرة الذاتية المتقطّعة (إدامة مؤقتة)',
          'الترميم متعدّد المراحل (في الحالات المعقّدة جدًّا)'
        ],
        price: {
          from: 0,
          to: 0,
          currency: 'EUR',
          disclaimer: 'لا يُقدَّم نطاق سعر ثابت في هذه الفئة؛ يُبلَّغ السعر بعد تقييم الملف، وفق تعقيد الحالة والتقنية المطلوبة.'
        },
        packageIncludes: [
          'العملية والإقامة في المستشفى',
          'التخدير والفحوصات المتقدمة قبل العملية',
          'أخذ الطُعم مشمول عند الحاجة',
          'التنقلات والإقامة',
          'مترجم طبي ومنسّق مرضى',
          'إزالة القسطرة والمتابعة الإلكترونية طويلة الأمد'
        ],
        faqs: [
          { q: 'خضعتُ لعملية في مركز آخر وفشلت؛ هل إعادة الجراحة (redo) ممكنة؟', a: 'نعم. إعادة رأب الإحليل مجال يتمتّع فيه هذا المركز بخبرة خاصة. تُراجَع ملاحظات عملياتك السابقة والتصوير الحديث؛ ويُخطَّط لطُعم أو نهج متعدّد المراحل حسب حالة الأنسجة.' },
          { q: 'لماذا رأب الإحليل بدلًا من شق الإحليل الداخلي/التوسيع؟', a: 'يعود التوسيع وشق الإحليل الداخلي سريعًا في معظم التضيّقات. رأب الإحليل هو الأسلوب الوحيد الذي يقدّم حلًّا دائمًا في الحالات المناسبة.' },
          { q: 'كم تبقى القسطرة وكم يستغرق التعافي؟', a: 'عادةً 2–3 أسابيع مع قسطرة. تعود الأنشطة اليومية الخفيفة بسرعة؛ ويستغرق النشاط الشاق وتقييم النجاح طويل الأمد بضعة أسابيع.' }
        ]
      },
      de: {
        title: 'Urethroplastik (Harnröhrenstriktur-Chirurgie)',
        summary: 'Rekonstruktive Chirurgie mit dauerhafter Lösung bei Harnröhrenstriktur; bulbäre, penile, langstreckige und Redo-Fälle (Wiederholungseingriff) inbegriffen.',
        metaTitle: 'Urethroplastik | Harnröhrenstriktur-Chirurgie (bulbär, penil, Redo)',
        metaDescription: 'Urethroplastik bei Harnröhrenstriktur: bulbäre und penile Striktur, langstreckige/komplexe Striktur und Redo-Urethroplastik nach fehlgeschlagenen Versuchen. Erfahrung mit komplexen und seltenen Fällen.',
        definition: [
          'Eine Harnröhrenstriktur ist eine narbige Verengung des Harnkanals (Harnröhre), die einen schwachen Strahl, Pressen und wiederkehrende Infektionen verursacht. Einfache Eingriffe (Bougierung, innere Urethrotomie) bringen kurzfristige Linderung, doch die Striktur kehrt meist zurück.',
          'Die Urethroplastik ist die rekonstruktive Operation, die die Striktur dauerhaft repariert. Lage (bulbär/penil), Länge und frühere Versuche bestimmen den Eingriff. Langstreckige und wiederkehrende (Redo-)Fälle erfordern besondere Erfahrung und werden meist an die wenigen Zentren überwiesen, die sie sicher durchführen können.'
        ],
        surgeonExperience: {
          caseVolume: '' /* TODO-DOGRULA: caseStats.ts */,
          note: 'Die Fallzahl spiegelt die gesamte chirurgische Erfahrung von Doz. Dr. Müslüm Ergün in diesem Bereich wider.'
        },
        expertise: {
          redoRate: 'Ein erheblicher Teil der Fälle sind Redo-Zuweisungen nach einem fehlgeschlagenen Versuch oder einer iatrogenen Verletzung in einem anderen Zentrum.',
          complexCase: 'Zu den komplexen Fällen zählen langstreckige Striktur, panurethrale Striktur, Lichen-sclerosus-bedingte Striktur und wiederholtes Versagen.',
          advancedTechnique: 'Augmentations-Urethroplastik mit Mundschleimhaut-(buccal-)Transplantat; bei Bedarf mehrzeitige Rekonstruktion.'
        },
        timeline: [
          { when: 'Aus der Ferne', title: 'Aktenprüfung', body: 'Der Chirurg prüft Urethrogramm (RUG/VCUG), Flussmessung und frühere OP-Berichte. Eine detaillierte Vorabbewertung ist in diesen Fällen unerlässlich.' },
          { when: 'Tag 1–2', title: 'Ankunft & erweiterte Tests', body: 'Untersuchung, bei Bedarf Urethroskopie und Bildgebung; Länge und Lage der Striktur werden geklärt.' },
          { when: 'Tag 2–3', title: 'Operation', body: 'Exzision-Anastomose oder Augmentations-Urethroplastik mit Transplantat, je nach Strikturtyp.' },
          { when: 'Danach', title: 'Katheterphase', body: 'Ein Harnröhrenkatheter bleibt meist 2–3 Wochen; vor der Entfernung erfolgt eine Kontrollbildgebung.' },
          { when: 'Nachsorge', title: 'Langfristige Nachsorge', body: 'Fluss- und Symptomkontrolle, im ersten Jahr häufiger; der Erfolg bemisst sich an der langfristigen Durchgängigkeit.' }
        ],
        risks: [
          'Wiederauftreten der Striktur (Rezidiv) — besonders in langen/komplexen Fällen',
          'Vorübergehende Empfindungsänderung an der Entnahmestelle (Wangeninnenseite)',
          'Infektion, Blutung und Urinleck',
          'In Redo-Fällen beeinflusst die Gewebequalität das Ergebnis'
        ],
        alternatives: [
          'Bougierung oder innere Urethrotomie (kurzfristig; hohe Rezidivrate)',
          'Intermittierender Selbstkatheterismus (vorübergehende Erhaltung)',
          'Mehrzeitige Rekonstruktion (in sehr komplexen Fällen)'
        ],
        price: {
          from: 0,
          to: 0,
          currency: 'EUR',
          disclaimer: 'In dieser Kategorie wird keine feste Preisspanne genannt; der Preis wird nach einer Aktenprüfung entsprechend Fallkomplexität und erforderlicher Technik mitgeteilt.'
        },
        packageIncludes: [
          'Operation und Krankenhausaufenthalt',
          'Anästhesie und erweiterte präoperative Untersuchungen',
          'Transplantatentnahme bei Bedarf inbegriffen',
          'Transfers und Unterkunft',
          'Medizinischer Dolmetscher und Patientenkoordinator',
          'Katheterentfernung und langfristige Online-Nachsorge'
        ],
        faqs: [
          { q: 'Ich wurde in einem anderen Zentrum operiert und es ist fehlgeschlagen; ist ein Redo möglich?', a: 'Ja. Die Redo-Urethroplastik ist ein Bereich, in dem dieses Zentrum besonders erfahren ist. Ihre früheren OP-Berichte und aktuelle Bildgebung werden geprüft; je nach Gewebezustand wird ein Transplantat oder ein mehrzeitiges Vorgehen geplant.' },
          { q: 'Warum Urethroplastik statt innerer Urethrotomie/Bougierung?', a: 'Bougierung und innere Urethrotomie kehren bei den meisten Strikturen bald zurück. Die Urethroplastik ist in geeigneten Fällen die einzige Methode mit dauerhafter Lösung.' },
          { q: 'Wie lange bleibt der Katheter und dauert die Genesung?', a: 'Meist 2–3 Wochen mit Katheter. Leichte Alltagsaktivität ist rasch möglich; schwere Aktivität und die Bewertung des langfristigen Erfolgs dauern einige Wochen.' }
        ]
      },
      ru: {
        title: 'Уретропластика (хирургия стриктуры уретры)',
        summary: 'Реконструктивная операция, дающая стойкое решение при стриктуре уретры; включая бульбарные, пенильные, протяжённые и повторные (redo) случаи.',
        metaTitle: 'Уретропластика | Хирургия стриктуры уретры (бульбарная, пенильная, redo)',
        metaDescription: 'Уретропластика при стриктуре уретры: бульбарная и пенильная стриктура, протяжённая/сложная стриктура и повторная уретропластика после неудачных попыток. Опыт в сложных и редких случаях.',
        definition: [
          'Стриктура уретры — сужение мочеиспускательного канала (уретры) рубцовой тканью, вызывающее слабую струю, натуживание и повторные инфекции. Простые вмешательства (бужирование, внутренняя уретротомия) дают кратковременное облегчение, но стриктура обычно возвращается.',
          'Уретропластика — реконструктивная операция, которая стойко устраняет стриктуру. Локализация (бульбарная/пенильная), длина и предыдущие попытки определяют операцию. Протяжённые и повторные (redo) случаи требуют особого опыта и обычно направляются в немногие центры, способные выполнить их безопасно.'
        ],
        surgeonExperience: {
          caseVolume: '' /* TODO-DOGRULA: caseStats.ts */,
          note: 'Число операций отражает общий хирургический опыт доцента д-ра Мюслюма Эргюна в этой области.'
        },
        expertise: {
          redoRate: 'Значительная часть случаев — повторные (redo) обращения после неудачной попытки или ятрогенного повреждения в другом центре.',
          complexCase: 'К сложным случаям относятся протяжённая стриктура, пануретральная стриктура, стриктура на фоне склерозирующего лихена (lichen sclerosus) и повторные неудачи.',
          advancedTechnique: 'Аугментационная уретропластика трансплантатом слизистой щеки (buccal); при необходимости — многоэтапная реконструкция.'
        },
        timeline: [
          { when: 'Удалённо', title: 'Оценка документов', body: 'Хирург изучает уретрограмму (RUG/VCUG), урофлоуметрию и записи предыдущих операций. Подробная предварительная оценка в этих случаях обязательна.' },
          { when: 'День 1–2', title: 'Прибытие и расширенное обследование', body: 'Осмотр, при необходимости уретроскопия и визуализация; уточняются длина и локализация стриктуры.' },
          { when: 'День 2–3', title: 'Операция', body: 'Иссечение с анастомозом или аугментационная уретропластика трансплантатом — в зависимости от типа стриктуры.' },
          { when: 'После', title: 'Период катетера', body: 'Уретральный катетер обычно остаётся 2–3 недели; перед удалением выполняется контрольная визуализация.' },
          { when: 'Наблюдение', title: 'Долгосрочное наблюдение', body: 'Контроль потока и симптомов, чаще в первый год; успех оценивается по долгосрочной проходимости.' }
        ],
        risks: [
          'Рецидив стриктуры — особенно в протяжённых/сложных случаях',
          'Временное изменение чувствительности в месте забора трансплантата (внутренняя поверхность щеки)',
          'Инфекция, кровотечение и подтекание мочи',
          'В повторных случаях качество тканей влияет на результат'
        ],
        alternatives: [
          'Бужирование или внутренняя уретротомия (кратковременно; высокая частота рецидивов)',
          'Периодическая самокатетеризация (временное поддержание)',
          'Многоэтапная реконструкция (в очень сложных случаях)'
        ],
        price: {
          from: 0,
          to: 0,
          currency: 'EUR',
          disclaimer: 'В этой категории фиксированный диапазон цен не указывается; цена сообщается после оценки документов, в зависимости от сложности случая и необходимой методики.'
        },
        packageIncludes: [
          'Операция и пребывание в стационаре',
          'Анестезия и расширенное предоперационное обследование',
          'Забор трансплантата включён при необходимости',
          'Трансферы и проживание',
          'Медицинский переводчик и координатор пациента',
          'Удаление катетера и долгосрочное онлайн-наблюдение'
        ],
        faqs: [
          { q: 'Мне делали операцию в другом центре, и она оказалась неудачной; возможна ли повторная (redo)?', a: 'Да. Повторная уретропластика — область, в которой этот центр особенно опытен. Изучаются записи ваших предыдущих операций и актуальная визуализация; в зависимости от состояния тканей планируется трансплантат или многоэтапный подход.' },
          { q: 'Почему уретропластика, а не внутренняя уретротомия/бужирование?', a: 'Бужирование и внутренняя уретротомия при большинстве стриктур вскоре дают рецидив. Уретропластика — единственный метод, дающий стойкое решение в подходящих случаях.' },
          { q: 'Как долго стоит катетер и сколько длится восстановление?', a: 'Обычно 2–3 недели с катетером. К лёгкой повседневной активности возвращаются быстро; тяжёлая активность и оценка долгосрочного успеха занимают несколько недель.' }
        ]
      },
      fr: {
        title: 'Urétroplastie (chirurgie du rétrécissement de l’urètre)',
        summary: 'Chirurgie reconstructrice offrant une solution durable au rétrécissement urétral ; cas bulbaires, péniens, étendus et reprises (redo) inclus.',
        metaTitle: 'Urétroplastie | Chirurgie du rétrécissement de l’urètre (bulbaire, pénien, redo)',
        metaDescription: 'Urétroplastie pour rétrécissement urétral : sténose bulbaire et pénienne, sténose étendue ou complexe et urétroplastie de reprise après échec. Expérience des cas complexes et rares.',
        definition: [
          'Le rétrécissement urétral est un resserrement du canal urinaire (urètre) par du tissu cicatriciel, responsable d’un jet faible, d’efforts de poussée et d’infections à répétition. Les gestes simples (dilatation, urétrotomie interne) soulagent à court terme, mais la sténose récidive le plus souvent.',
          'L’urétroplastie est l’intervention reconstructrice qui répare durablement la sténose. La localisation (bulbaire ou pénienne), la longueur et les tentatives antérieures déterminent le geste. Les sténoses étendues et récidivantes (redo) exigent une expérience particulière et sont généralement adressées aux rares centres capables de les traiter en toute sécurité.'
        ],
        surgeonExperience: {
          caseVolume: '' /* TODO-DOGRULA: caseStats.ts */,
          note: 'Le nombre d’interventions reflète l’expérience chirurgicale totale du Dr Müslüm Ergün dans ce domaine.'
        },
        expertise: {
          redoRate: 'Une part importante des cas sont des reprises adressées après un échec ou une lésion iatrogène survenus dans un autre centre.',
          complexCase: 'Les sténoses étendues, pan-urétrales, liées au lichen scléreux et les échecs répétés relèvent des cas complexes.',
          advancedTechnique: 'Urétroplastie d’élargissement par greffe de muqueuse buccale (jugale) ; reconstruction en deux temps si nécessaire.'
        },
        timeline: [
          { when: 'À distance', title: 'Évaluation du dossier', body: 'Votre urétrographie (rétrograde et mictionnelle), votre débitmétrie et vos comptes rendus opératoires antérieurs sont examinés par le chirurgien. Une pré-évaluation détaillée est indispensable dans ces cas.' },
          { when: 'Jours 1–2', title: 'Arrivée et examens avancés', body: 'Examen clinique, urétroscopie et imagerie si nécessaire ; la longueur et le siège de la sténose sont précisés.' },
          { when: 'Jours 2–3', title: 'Intervention', body: 'Urétroplastie par excision-anastomose ou par greffe d’élargissement, selon le type de sténose.' },
          { when: 'Ensuite', title: 'Période de sondage', body: 'Une sonde urétrale reste en place 2 à 3 semaines ; une imagerie de contrôle est réalisée avant son retrait.' },
          { when: 'Suivi', title: 'Suivi à long terme', body: 'Débitmétrie et suivi des symptômes, plus fréquents la première année ; le succès se juge sur la perméabilité à long terme.' }
        ],
        risks: [
          'Récidive de la sténose — surtout dans les cas étendus ou complexes',
          'Modification transitoire de la sensibilité au site de prélèvement du greffon (face interne de la joue)',
          'Infection, saignement et fuite urinaire',
          'Dans les reprises, qualité tissulaire pouvant influencer le résultat'
        ],
        alternatives: [
          'Dilatation ou urétrotomie interne (court terme ; récidive fréquente)',
          'Auto-sondage intermittent (entretien temporaire)',
          'Reconstruction en deux temps (cas très complexes)'
        ],
        price: {
          from: 0,
          to: 0,
          currency: 'EUR',
          disclaimer: 'Aucune fourchette de prix fixe n’est indiquée dans cette catégorie ; le prix est communiqué après évaluation du dossier, selon la complexité du cas et la technique requise.'
        },
        packageIncludes: [
          'Intervention et séjour hospitalier',
          'Anesthésie et bilan préopératoire avancé',
          'Prélèvement du greffon inclus si nécessaire',
          'Transferts et hébergement',
          'Interprète médical et coordinateur patient',
          'Retrait de la sonde et suivi en ligne à long terme'
        ],
        faqs: [
          { q: 'J’ai été opéré dans un autre centre et cela a échoué ; une reprise est-elle possible ?', a: 'Oui. L’urétroplastie de reprise est un domaine dans lequel ce centre est particulièrement expérimenté. Vos comptes rendus opératoires et votre imagerie actuelle sont examinés ; selon l’état des tissus, une greffe ou une approche en deux temps est planifiée.' },
          { q: 'Pourquoi une urétroplastie plutôt qu’une urétrotomie interne ou une dilatation ?', a: 'La dilatation et l’urétrotomie interne récidivent rapidement dans la plupart des sténoses. L’urétroplastie est la seule méthode offrant une solution durable dans les cas qui s’y prêtent.' },
          { q: 'Combien de temps la sonde reste-t-elle et combien dure la récupération ?', a: 'Généralement 2 à 3 semaines de sondage. L’activité quotidienne légère reprend rapidement ; les efforts importants et l’évaluation du résultat à long terme demandent quelques semaines.' }
        ]
      }
    }
  },
  {
    slug: 'piyeloplasti',
    icon: 'kidney',
    category: 'reconstructive',
    i18n: {
      tr: {
        title: 'Piyeloplasti (UPJ Darlığı Cerrahisi)',
        summary: 'Böbrek-üreter bileşkesi (UPJ) darlığında böbreği koruyan rekonstrüktif cerrahi; açık, laparoskopik ve robotik seçenekler.',
        metaTitle: 'Piyeloplasti | UPJ (Üreteropelvik Bileşke) Darlığı Cerrahisi',
        metaDescription: 'UPJ darlığında piyeloplasti: açık, laparoskopik ve robotik yöntemlerin karşılaştırması, süreç, riskler ve uzun dönem başarı. Redo ve kompleks vaka deneyimi.',
        definition: [
          'Üreteropelvik bileşke (UPJ) darlığı, böbrekten idrarı taşıyan kanalın çıkışındaki tıkanıklıktır; böbrekte şişme (hidronefroz), ağrı ve zamanla böbrek fonksiyon kaybına yol açabilir.',
          'Piyeloplasti, darlığın çıkarılıp bileşkenin yeniden şekillendirildiği böbrek koruyucu rekonstrüktif ameliyattır. Robotik ve laparoskopik yaklaşımlar minimal invazivdir; daha önce başarısız girişim geçirmiş (redo) veya çapraz damar/taş eşlik eden kompleks vakalar özel deneyim gerektirir.'
        ],
        surgeonExperience: {
          caseVolume: '' /* TODO-DOGRULA: caseStats.ts */,
          note: 'Vaka sayısı, Doç. Dr. Müslüm Ergün’ün bu alandaki toplam cerrahi deneyimini yansıtır.'
        },
        expertise: {
          redoRate: 'Vakaların önemli bir bölümü, başka merkezdeki başarısız girişim veya iatrojenik hasar sonrası başvuran redo (yeniden onarım) olgularıdır.',
          complexCase: 'Çapraz damar basısı, eşlik eden böbrek taşı, atnalı böbrek gibi anatomik varyasyonlar ve redo vakalar kompleks kapsamdadır.',
          advancedTechnique: 'Robot destekli dismembered piyeloplasti; redo vakalarda yoğun skar dokusunda rekonstrüksiyon.'
        },
        timeline: [
          { when: 'Uzaktan', title: 'Dosya değerlendirmesi', body: 'BT ürografi ve böbrek sintigrafisi (MAG3) sonuçlarınız incelenir; darlık ve böbrek fonksiyonu değerlendirilir.' },
          { when: '1–2. Gün', title: 'Varış ve tetkik', body: 'Muayene ve gerekli görüntülemenin tamamlanması, anestezi değerlendirmesi.' },
          { when: '3. Gün', title: 'Ameliyat', body: 'Robotik/laparoskopik veya açık dismembered piyeloplasti; genellikle 2–3 gece yatış.' },
          { when: 'Sonrası', title: 'Stent (JJ) süreci', body: 'İçeride 4–6 hafta kalan bir JJ stent yerleştirilir; sonra kısa bir işlemle alınır.' },
          { when: 'Takip', title: 'Fonksiyon takibi', body: 'Kontrol sintigrafisi/ultrason ile drenaj ve böbrek fonksiyonu izlenir; başarı uzun dönem drenajla değerlendirilir.' }
        ],
        risks: [
          'Stent’e bağlı geçici şikâyetler',
          'İdrar kaçağı',
          'Darlığın tekrarlaması (redo vakalarda daha yüksek)',
          'Enfeksiyon ve kanama'
        ],
        alternatives: [
          'Endopyelotomi (seçili vakalarda; başarı oranı daha düşük)',
          'İzlem (fonksiyon korunmuş, belirtisiz seçili vakalar)',
          'Nefrektomi (yalnızca fonksiyonsuz böbrekte, son seçenek)'
        ],
        comparison: {
          title: 'Açık vs Laparoskopik vs Robotik Piyeloplasti',
          columns: ['Kriter', 'Açık', 'Laparoskopik', 'Robotik'],
          rows: [
            { label: 'İnvazivlik', values: ['Büyük kesi', 'Küçük kesiler', 'Küçük kesiler'] },
            { label: 'Dikiş hassasiyeti', values: ['İyi', 'Teknik olarak zor', 'Çok yüksek'] },
            { label: 'İyileşme', values: ['Daha uzun', 'Kısa', 'Kısa'] },
            { label: 'Redo/kompleks uygunluk', values: ['Seçili', 'Sınırlı', 'Yüksek'] },
            { label: 'Yatış', values: ['3–5 gece', '2–3 gece', '2–3 gece'] }
          ],
          note: 'Yöntem; darlık tipi, önceki cerrahi ve anatomiye göre kişiye özel seçilir.'
        },
        price: {
          from: 0,
          to: 0,
          currency: 'EUR',
          disclaimer: 'Bu kategoride sabit fiyat aralığı verilmez; fiyat, vaka karmaşıklığına ve gereken tekniğe göre dosya değerlendirmesi sonrası bildirilir.'
        },
        packageIncludes: [
          'Cerrahi ve hastane yatışı',
          'Anestezi ve tetkikler',
          'JJ stent ve alımı',
          'Transferler ve konaklama',
          'Tıbbi tercüman ve koordinatör',
          'Uzun dönem fonksiyon takibi'
        ],
        faqs: [
          { q: 'Daha önce endopyelotomi/piyeloplasti oldum ama darlık tekrarladı; ne yapılabilir?', a: 'Redo piyeloplasti mümkündür ve bu merkezin deneyimli olduğu bir alandır. Skar dokusuna rağmen böbreği koruyan rekonstrüksiyon planlanır; nadiren çok aşamalı yaklaşım gerekir.' },
          { q: 'Robotik mi yoksa açık mı daha iyi?', a: 'Robotik yöntem çoğu vakada dikiş hassasiyeti ve hızlı iyileşme sağlar; ancak yöntem darlık tipi, önceki cerrahi ve anatomiye göre belirlenir.' },
          { q: 'Böbreğim kurtarılabilir mi?', a: 'Amaç böbreği korumaktır. Fonksiyonun ne kadar korunabileceği sintigrafi ile değerlendirilir; nefrektomi yalnızca fonksiyonsuz böbrekte son seçenektir.' }
        ]
      },
      en: {
        title: 'Pyeloplasty (UPJ Obstruction Surgery)',
        summary: 'Kidney-preserving reconstructive surgery for ureteropelvic junction (UPJ) obstruction; open, laparoscopic and robotic options.',
        metaTitle: 'Pyeloplasty | UPJ (Ureteropelvic Junction) Obstruction Surgery',
        metaDescription: 'Pyeloplasty for UPJ obstruction: comparison of open, laparoscopic and robotic methods, process, risks and long-term success. Redo and complex case experience.',
        definition: [
          'Ureteropelvic junction (UPJ) obstruction is a blockage at the outlet of the channel that carries urine from the kidney, causing swelling (hydronephrosis), pain and, over time, loss of kidney function.',
          'Pyeloplasty is the kidney-preserving reconstructive operation that removes the narrowing and reshapes the junction. Robotic and laparoscopic approaches are minimally invasive; cases with prior failed attempts (redo) or a crossing vessel/stone require special experience.'
        ],
        surgeonExperience: {
          caseVolume: '' /* TODO-DOGRULA: caseStats.ts */,
          note: 'The case volume reflects Assoc. Prof. Dr. Müslüm Ergün’s total surgical experience in this area.'
        },
        expertise: {
          redoRate: 'A significant share of cases are redo referrals after a failed attempt or iatrogenic injury at another center.',
          complexCase: 'Crossing-vessel compression, concurrent kidney stone, anatomical variants such as horseshoe kidney and redo cases fall within complex.',
          advancedTechnique: 'Robot-assisted dismembered pyeloplasty; reconstruction in dense scar tissue in redo cases.'
        },
        timeline: [
          { when: 'Remote', title: 'File assessment', body: 'Your CT urography and renal scan (MAG3) are reviewed; the obstruction and kidney function are assessed.' },
          { when: 'Day 1–2', title: 'Arrival & tests', body: 'Examination and completion of required imaging, anesthesia assessment.' },
          { when: 'Day 3', title: 'Surgery', body: 'Robotic/laparoscopic or open dismembered pyeloplasty; usually a 2–3 night stay.' },
          { when: 'After', title: 'Stent (JJ) period', body: 'A JJ stent stays inside for 4–6 weeks, then is removed in a short procedure.' },
          { when: 'Follow-up', title: 'Function follow-up', body: 'Drainage and kidney function are monitored with follow-up scan/ultrasound; success is judged by long-term drainage.' }
        ],
        risks: [
          'Temporary stent-related symptoms',
          'Urine leak',
          'Stricture recurrence (higher in redo cases)',
          'Infection and bleeding'
        ],
        alternatives: [
          'Endopyelotomy (in selected cases; lower success)',
          'Surveillance (selected, function-preserved, asymptomatic cases)',
          'Nephrectomy (only for a non-functioning kidney, last resort)'
        ],
        comparison: {
          title: 'Open vs Laparoscopic vs Robotic Pyeloplasty',
          columns: ['Criterion', 'Open', 'Laparoscopic', 'Robotic'],
          rows: [
            { label: 'Invasiveness', values: ['Large incision', 'Small incisions', 'Small incisions'] },
            { label: 'Suturing precision', values: ['Good', 'Technically hard', 'Very high'] },
            { label: 'Recovery', values: ['Longer', 'Short', 'Short'] },
            { label: 'Redo/complex suitability', values: ['Selected', 'Limited', 'High'] },
            { label: 'Stay', values: ['3–5 nights', '2–3 nights', '2–3 nights'] }
          ],
          note: 'The method is chosen individually by stricture type, previous surgery and anatomy.'
        },
        price: {
          from: 0,
          to: 0,
          currency: 'EUR',
          disclaimer: 'No fixed price range is given in this category; the price is shared after a file assessment, according to case complexity and the technique required.'
        },
        packageIncludes: [
          'Surgery and hospital stay',
          'Anesthesia and tests',
          'JJ stent and its removal',
          'Transfers and accommodation',
          'Medical interpreter and coordinator',
          'Long-term function follow-up'
        ],
        faqs: [
          { q: 'I had endopyelotomy/pyeloplasty but the obstruction recurred; what can be done?', a: 'Redo pyeloplasty is possible and an area this center is experienced in. Despite scar tissue, kidney-preserving reconstruction is planned; rarely a staged approach is needed.' },
          { q: 'Is robotic or open better?', a: 'The robotic method gives suturing precision and fast recovery in most cases; but the method is determined by stricture type, previous surgery and anatomy.' },
          { q: 'Can my kidney be saved?', a: 'The goal is to preserve the kidney. How much function can be preserved is assessed by scan; nephrectomy is a last resort only for a non-functioning kidney.' }
        ]
      },
      ar: {
        title: 'رأب حوض الكلية (جراحة تضيّق الوصل الحويضي الحالبي UPJ)',
        summary: 'جراحة ترميمية محافِظة على الكلية في تضيّق الوصل الحويضي الحالبي (UPJ)؛ خيارات مفتوحة وبالمنظار وروبوتية.',
        metaTitle: 'رأب حوض الكلية | جراحة تضيّق الوصل الحويضي الحالبي (UPJ)',
        metaDescription: 'رأب حوض الكلية لتضيّق UPJ: مقارنة الطرق المفتوحة وبالمنظار والروبوتية، المسار، المخاطر والنجاح طويل الأمد. خبرة في حالات إعادة الجراحة والحالات المعقّدة.',
        definition: [
          'تضيّق الوصل الحويضي الحالبي (UPJ) هو انسداد عند مخرج القناة التي تنقل البول من الكلية، ويسبّب تورّم الكلية (موه الكلية)، وألمًا، ومع الوقت فقدان وظيفة الكلية.',
          'رأب حوض الكلية هو الجراحة الترميمية المحافِظة على الكلية التي تزيل التضيّق وتعيد تشكيل الوصل. الأساليب الروبوتية وبالمنظار قليلة التوغل؛ وتتطلب الحالات التي سبق لها محاولة فاشلة (redo) أو المصحوبة بوعاء دموي متصالب/حصاة خبرة خاصة.'
        ],
        surgeonExperience: {
          caseVolume: '' /* TODO-DOGRULA: caseStats.ts */,
          note: 'يعكس عدد الحالات إجمالي الخبرة الجراحية للأستاذ المشارك د. مسلم إرغن في هذا المجال.'
        },
        expertise: {
          redoRate: 'نسبة كبيرة من الحالات هي حالات إعادة جراحة (redo) بعد محاولة فاشلة أو إصابة علاجية المنشأ في مركز آخر.',
          complexCase: 'يشمل نطاق الحالات المعقّدة: انضغاط بوعاء متصالب، وحصاة كلوية مصاحبة، وتنوّعات تشريحية مثل الكلية حدوة الفرس، وحالات إعادة الجراحة.',
          advancedTechnique: 'رأب حوض الكلية بالفصل بمساعدة الروبوت (dismembered)؛ والترميم في النسيج الندبي الكثيف في حالات إعادة الجراحة.'
        },
        timeline: [
          { when: 'عن بُعد', title: 'تقييم الملف', body: 'تُراجَع نتائج التصوير المقطعي بالصبغة وتصوير الكلية النووي (MAG3)؛ ويُقيَّم الانسداد ووظيفة الكلية.' },
          { when: 'اليوم 1–2', title: 'الوصول والفحوصات', body: 'الفحص واستكمال التصوير اللازم، وتقييم التخدير.' },
          { when: 'اليوم 3', title: 'العملية', body: 'رأب حوض كلية بالفصل روبوتي/بالمنظار أو مفتوح؛ عادةً بمبيت 2–3 ليالٍ.' },
          { when: 'بعد ذلك', title: 'فترة الدعامة (JJ)', body: 'تُوضَع دعامة JJ تبقى بالداخل 4–6 أسابيع، ثم تُزال بإجراء قصير.' },
          { when: 'المتابعة', title: 'متابعة الوظيفة', body: 'يُراقَب التصريف ووظيفة الكلية بتصوير/موجات فوق صوتية للمتابعة؛ ويُقاس النجاح بالتصريف طويل الأمد.' }
        ],
        risks: [
          'أعراض مؤقتة مرتبطة بالدعامة',
          'تسرّب البول',
          'عودة التضيّق (أعلى في حالات إعادة الجراحة)',
          'العدوى والنزيف'
        ],
        alternatives: [
          'بضع الحويضة بالمنظار (في حالات مختارة؛ نجاح أقل)',
          'المراقبة (حالات مختارة محفوظة الوظيفة وبدون أعراض)',
          'استئصال الكلية (فقط لكلية غير عاملة، كملاذ أخير)'
        ],
        comparison: {
          title: 'مفتوح مقابل بالمنظار مقابل روبوتي لرأب حوض الكلية',
          columns: ['المعيار', 'مفتوح', 'بالمنظار', 'روبوتي'],
          rows: [
            { label: 'درجة التوغل', values: ['شق كبير', 'شقوق صغيرة', 'شقوق صغيرة'] },
            { label: 'دقّة الخياطة', values: ['جيدة', 'صعبة تقنيًا', 'عالية جدًّا'] },
            { label: 'التعافي', values: ['أطول', 'قصير', 'قصير'] },
            { label: 'الملاءمة لإعادة الجراحة/المعقّدة', values: ['مختارة', 'محدودة', 'عالية'] },
            { label: 'المبيت', values: ['3–5 ليالٍ', '2–3 ليالٍ', '2–3 ليالٍ'] }
          ],
          note: 'يُختار الأسلوب فرديًّا حسب نوع التضيّق والجراحة السابقة والتشريح.'
        },
        price: {
          from: 0,
          to: 0,
          currency: 'EUR',
          disclaimer: 'لا يُقدَّم نطاق سعر ثابت في هذه الفئة؛ يُبلَّغ السعر بعد تقييم الملف، وفق تعقيد الحالة والتقنية المطلوبة.'
        },
        packageIncludes: [
          'العملية والإقامة في المستشفى',
          'التخدير والفحوصات',
          'دعامة JJ وإزالتها',
          'التنقلات والإقامة',
          'مترجم طبي ومنسّق',
          'متابعة الوظيفة طويلة الأمد'
        ],
        faqs: [
          { q: 'خضعتُ لبضع الحويضة/رأب حوض الكلية لكن التضيّق عاد؛ ما الذي يمكن عمله؟', a: 'إعادة رأب حوض الكلية ممكنة ومجال يتمتّع فيه هذا المركز بالخبرة. يُخطَّط لترميم محافِظ على الكلية رغم النسيج الندبي؛ ونادرًا ما يلزم نهج متعدّد المراحل.' },
          { q: 'أيّهما أفضل: الروبوتي أم المفتوح؟', a: 'يمنح الأسلوب الروبوتي دقّة خياطة وتعافيًا سريعًا في معظم الحالات؛ لكن الأسلوب يُحدَّد حسب نوع التضيّق والجراحة السابقة والتشريح.' },
          { q: 'هل يمكن إنقاذ كليتي؟', a: 'الهدف هو الحفاظ على الكلية. يُقيَّم مقدار الوظيفة القابل للحفاظ عليه بالتصوير النووي؛ واستئصال الكلية ملاذ أخير فقط لكلية غير عاملة.' }
        ]
      },
      de: {
        title: 'Nierenbeckenplastik (UPJ-Obstruktions-Chirurgie)',
        summary: 'Nierenerhaltende rekonstruktive Chirurgie bei Obstruktion des pyeloureteralen Übergangs (UPJ); offene, laparoskopische und robotische Optionen.',
        metaTitle: 'Nierenbeckenplastik | UPJ- (pyeloureteraler Übergang) Obstruktions-Chirurgie',
        metaDescription: 'Nierenbeckenplastik bei UPJ-Obstruktion: Vergleich offener, laparoskopischer und robotischer Methoden, Ablauf, Risiken und langfristiger Erfolg. Erfahrung mit Redo- und komplexen Fällen.',
        definition: [
          'Die Obstruktion des pyeloureteralen Übergangs (UPJ) ist eine Blockade am Ausgang des Kanals, der Urin aus der Niere leitet; sie verursacht Schwellung (Hydronephrose), Schmerzen und mit der Zeit Verlust der Nierenfunktion.',
          'Die Nierenbeckenplastik ist die nierenerhaltende rekonstruktive Operation, die die Verengung entfernt und den Übergang neu formt. Robotische und laparoskopische Zugänge sind minimalinvasiv; Fälle mit früheren fehlgeschlagenen Versuchen (Redo) oder einem kreuzenden Gefäß/Stein erfordern besondere Erfahrung.'
        ],
        surgeonExperience: {
          caseVolume: '' /* TODO-DOGRULA: caseStats.ts */,
          note: 'Die Fallzahl spiegelt die gesamte chirurgische Erfahrung von Doz. Dr. Müslüm Ergün in diesem Bereich wider.'
        },
        expertise: {
          redoRate: 'Ein erheblicher Teil der Fälle sind Redo-Zuweisungen nach einem fehlgeschlagenen Versuch oder einer iatrogenen Verletzung in einem anderen Zentrum.',
          complexCase: 'Zu den komplexen Fällen zählen Kompression durch ein kreuzendes Gefäß, begleitender Nierenstein, anatomische Varianten wie die Hufeisenniere und Redo-Fälle.',
          advancedTechnique: 'Robotergestützte dismembered Nierenbeckenplastik; Rekonstruktion in dichtem Narbengewebe bei Redo-Fällen.'
        },
        timeline: [
          { when: 'Aus der Ferne', title: 'Aktenprüfung', body: 'Ihre CT-Urographie und Nierenszintigraphie (MAG3) werden geprüft; Obstruktion und Nierenfunktion werden bewertet.' },
          { when: 'Tag 1–2', title: 'Ankunft & Tests', body: 'Untersuchung und Vervollständigung der erforderlichen Bildgebung, Anästhesiebewertung.' },
          { when: 'Tag 3', title: 'Operation', body: 'Robotische/laparoskopische oder offene dismembered Nierenbeckenplastik; meist 2–3 Nächte Aufenthalt.' },
          { when: 'Danach', title: 'Stent-(JJ-)Phase', body: 'Ein JJ-Stent bleibt 4–6 Wochen im Körper und wird dann in einem kurzen Eingriff entfernt.' },
          { when: 'Nachsorge', title: 'Funktionsnachsorge', body: 'Drainage und Nierenfunktion werden mit Kontrollszintigraphie/Ultraschall überwacht; der Erfolg bemisst sich an der langfristigen Drainage.' }
        ],
        risks: [
          'Vorübergehende stentbedingte Beschwerden',
          'Urinleck',
          'Rezidiv der Striktur (höher in Redo-Fällen)',
          'Infektion und Blutung'
        ],
        alternatives: [
          'Endopyelotomie (in ausgewählten Fällen; geringerer Erfolg)',
          'Überwachung (ausgewählte, funktionserhaltene, asymptomatische Fälle)',
          'Nephrektomie (nur bei nicht funktionierender Niere, letztes Mittel)'
        ],
        comparison: {
          title: 'Offen vs. laparoskopisch vs. robotisch – Nierenbeckenplastik',
          columns: ['Kriterium', 'Offen', 'Laparoskopisch', 'Robotisch'],
          rows: [
            { label: 'Invasivität', values: ['Großer Schnitt', 'Kleine Schnitte', 'Kleine Schnitte'] },
            { label: 'Nahtpräzision', values: ['Gut', 'Technisch schwierig', 'Sehr hoch'] },
            { label: 'Erholung', values: ['Länger', 'Kurz', 'Kurz'] },
            { label: 'Eignung für Redo/komplex', values: ['Ausgewählt', 'Begrenzt', 'Hoch'] },
            { label: 'Aufenthalt', values: ['3–5 Nächte', '2–3 Nächte', '2–3 Nächte'] }
          ],
          note: 'Die Methode wird individuell nach Strikturtyp, Voroperation und Anatomie gewählt.'
        },
        price: {
          from: 0,
          to: 0,
          currency: 'EUR',
          disclaimer: 'In dieser Kategorie wird keine feste Preisspanne genannt; der Preis wird nach einer Aktenprüfung entsprechend Fallkomplexität und erforderlicher Technik mitgeteilt.'
        },
        packageIncludes: [
          'Operation und Krankenhausaufenthalt',
          'Anästhesie und Untersuchungen',
          'JJ-Stent und dessen Entfernung',
          'Transfers und Unterkunft',
          'Medizinischer Dolmetscher und Koordinator',
          'Langfristige Funktionsnachsorge'
        ],
        faqs: [
          { q: 'Ich hatte eine Endopyelotomie/Nierenbeckenplastik, aber die Obstruktion kehrte zurück; was ist möglich?', a: 'Eine Redo-Nierenbeckenplastik ist möglich und ein Bereich, in dem dieses Zentrum erfahren ist. Trotz Narbengewebe wird eine nierenerhaltende Rekonstruktion geplant; selten ist ein mehrzeitiges Vorgehen nötig.' },
          { q: 'Ist robotisch oder offen besser?', a: 'Die robotische Methode bietet in den meisten Fällen Nahtpräzision und schnelle Erholung; die Methode richtet sich jedoch nach Strikturtyp, Voroperation und Anatomie.' },
          { q: 'Kann meine Niere gerettet werden?', a: 'Ziel ist der Nierenerhalt. Wie viel Funktion erhalten werden kann, wird per Szintigraphie beurteilt; die Nephrektomie ist nur bei einer nicht funktionierenden Niere das letzte Mittel.' }
        ]
      },
      ru: {
        title: 'Пиелопластика (хирургия обструкции ЛМС/UPJ)',
        summary: 'Почкосохраняющая реконструктивная операция при обструкции лоханочно-мочеточникового сегмента (ЛМС/UPJ); открытый, лапароскопический и роботический варианты.',
        metaTitle: 'Пиелопластика | Хирургия обструкции лоханочно-мочеточникового сегмента (UPJ)',
        metaDescription: 'Пиелопластика при обструкции ЛМС/UPJ: сравнение открытого, лапароскопического и роботического методов, процесс, риски и долгосрочный успех. Опыт в повторных и сложных случаях.',
        definition: [
          'Обструкция лоханочно-мочеточникового сегмента (ЛМС/UPJ) — препятствие на выходе канала, отводящего мочу из почки; вызывает расширение (гидронефроз), боль и со временем потерю функции почки.',
          'Пиелопластика — почкосохраняющая реконструктивная операция, устраняющая сужение и заново формирующая сегмент. Роботические и лапароскопические доступы малоинвазивны; случаи с прежними неудачными попытками (redo) или добавочным сосудом/камнем требуют особого опыта.'
        ],
        surgeonExperience: {
          caseVolume: '' /* TODO-DOGRULA: caseStats.ts */,
          note: 'Число операций отражает общий хирургический опыт доцента д-ра Мюслюма Эргюна в этой области.'
        },
        expertise: {
          redoRate: 'Значительная часть случаев — повторные (redo) обращения после неудачной попытки или ятрогенного повреждения в другом центре.',
          complexCase: 'К сложным случаям относятся сдавление добавочным сосудом, сопутствующий камень почки, анатомические варианты (например, подковообразная почка) и повторные случаи.',
          advancedTechnique: 'Роботическая расчленяющая (dismembered) пиелопластика; реконструкция в плотной рубцовой ткани при повторных случаях.'
        },
        timeline: [
          { when: 'Удалённо', title: 'Оценка документов', body: 'Изучаются КТ-урография и радиоизотопное исследование почки (MAG3); оцениваются обструкция и функция почки.' },
          { when: 'День 1–2', title: 'Прибытие и обследование', body: 'Осмотр и завершение необходимой визуализации, анестезиологическая оценка.' },
          { when: 'День 3', title: 'Операция', body: 'Роботическая/лапароскопическая или открытая расчленяющая пиелопластика; обычно 2–3 ночи пребывания.' },
          { when: 'После', title: 'Период стента (JJ)', body: 'Стент JJ остаётся внутри 4–6 недель, затем удаляется коротким вмешательством.' },
          { when: 'Наблюдение', title: 'Наблюдение функции', body: 'Дренаж и функция почки контролируются повторной сцинтиграфией/УЗИ; успех оценивается по долгосрочному дренажу.' }
        ],
        risks: [
          'Временные симптомы, связанные со стентом',
          'Подтекание мочи',
          'Рецидив стриктуры (выше при повторных случаях)',
          'Инфекция и кровотечение'
        ],
        alternatives: [
          'Эндопиелотомия (в отдельных случаях; ниже успех)',
          'Наблюдение (отдельные бессимптомные случаи с сохранной функцией)',
          'Нефрэктомия (только при нефункционирующей почке, крайняя мера)'
        ],
        comparison: {
          title: 'Открытая против лапароскопической против роботической пиелопластики',
          columns: ['Критерий', 'Открытая', 'Лапароскопическая', 'Роботическая'],
          rows: [
            { label: 'Инвазивность', values: ['Большой разрез', 'Малые разрезы', 'Малые разрезы'] },
            { label: 'Точность шва', values: ['Хорошая', 'Технически сложно', 'Очень высокая'] },
            { label: 'Восстановление', values: ['Дольше', 'Короткое', 'Короткое'] },
            { label: 'Пригодность для redo/сложных', values: ['Отдельные', 'Ограниченная', 'Высокая'] },
            { label: 'Пребывание', values: ['3–5 ночей', '2–3 ночи', '2–3 ночи'] }
          ],
          note: 'Метод выбирается индивидуально по типу стриктуры, предыдущей операции и анатомии.'
        },
        price: {
          from: 0,
          to: 0,
          currency: 'EUR',
          disclaimer: 'В этой категории фиксированный диапазон цен не указывается; цена сообщается после оценки документов, в зависимости от сложности случая и необходимой методики.'
        },
        packageIncludes: [
          'Операция и пребывание в стационаре',
          'Анестезия и обследование',
          'Стент JJ и его удаление',
          'Трансферы и проживание',
          'Медицинский переводчик и координатор',
          'Долгосрочное наблюдение функции'
        ],
        faqs: [
          { q: 'Мне делали эндопиелотомию/пиелопластику, но обструкция вернулась; что можно сделать?', a: 'Повторная пиелопластика возможна и является областью опыта этого центра. Несмотря на рубцовую ткань, планируется почкосохраняющая реконструкция; редко требуется многоэтапный подход.' },
          { q: 'Что лучше — роботическая или открытая?', a: 'Роботический метод в большинстве случаев даёт точность шва и быстрое восстановление; но метод определяется типом стриктуры, предыдущей операцией и анатомией.' },
          { q: 'Можно ли сохранить мою почку?', a: 'Цель — сохранить почку. Сколько функции удастся сохранить, оценивается по сцинтиграфии; нефрэктомия — крайняя мера только при нефункционирующей почке.' }
        ]
      },
      fr: {
        title: 'Pyéloplastie (chirurgie du syndrome de la jonction pyélo-urétérale)',
        summary: 'Chirurgie reconstructrice préservant le rein pour l’obstruction de la jonction pyélo-urétérale (JPU) ; options ouverte, laparoscopique et robotique.',
        metaTitle: 'Pyéloplastie | Chirurgie de la jonction pyélo-urétérale (JPU)',
        metaDescription: 'Pyéloplastie pour syndrome de la jonction pyélo-urétérale : comparaison des méthodes ouverte, laparoscopique et robotique, déroulement, risques et résultats à long terme. Expérience des reprises et des cas complexes.',
        definition: [
          'L’obstruction de la jonction pyélo-urétérale (JPU) est un obstacle à la sortie du conduit qui évacue l’urine du rein ; elle entraîne une dilatation (hydronéphrose), des douleurs et, avec le temps, une perte de fonction rénale.',
          'La pyéloplastie est l’intervention reconstructrice préservant le rein qui supprime le rétrécissement et remodèle la jonction. Les voies robotique et laparoscopique sont mini-invasives ; les cas avec échec antérieur (redo), vaisseau polaire croisant ou calcul associé exigent une expérience particulière.'
        ],
        surgeonExperience: {
          caseVolume: '' /* TODO-DOGRULA: caseStats.ts */,
          note: 'Le nombre d’interventions reflète l’expérience chirurgicale totale du Dr Müslüm Ergün dans ce domaine.'
        },
        expertise: {
          redoRate: 'Une part importante des cas sont des reprises adressées après un échec ou une lésion iatrogène survenus dans un autre centre.',
          complexCase: 'Compression par vaisseau croisant, calcul rénal associé, variantes anatomiques telles que le rein en fer à cheval et reprises relèvent des cas complexes.',
          advancedTechnique: 'Pyéloplastie démembrée assistée par robot ; reconstruction en tissu cicatriciel dense dans les reprises.'
        },
        timeline: [
          { when: 'À distance', title: 'Évaluation du dossier', body: 'Votre uro-scanner et votre scintigraphie rénale (MAG3) sont examinés ; l’obstruction et la fonction rénale sont évaluées.' },
          { when: 'Jours 1–2', title: 'Arrivée et examens', body: 'Examen clinique, complément d’imagerie si nécessaire et consultation d’anesthésie.' },
          { when: 'Jour 3', title: 'Intervention', body: 'Pyéloplastie démembrée robotique, laparoscopique ou ouverte ; généralement 2 à 3 nuits d’hospitalisation.' },
          { when: 'Ensuite', title: 'Période de sonde JJ', body: 'Une sonde JJ reste en place 4 à 6 semaines, puis est retirée lors d’un geste court.' },
          { when: 'Suivi', title: 'Suivi fonctionnel', body: 'Le drainage et la fonction rénale sont surveillés par scintigraphie et échographie ; le succès se juge sur le drainage à long terme.' }
        ],
        risks: [
          'Symptômes transitoires liés à la sonde JJ',
          'Fuite urinaire',
          'Récidive du rétrécissement (plus fréquente dans les reprises)',
          'Infection et saignement'
        ],
        alternatives: [
          'Endopyélotomie (cas sélectionnés ; taux de succès plus faible)',
          'Surveillance (cas sélectionnés, asymptomatiques, à fonction conservée)',
          'Néphrectomie (uniquement pour un rein non fonctionnel, en dernier recours)'
        ],
        comparison: {
          title: 'Pyéloplastie ouverte vs laparoscopique vs robotique',
          columns: ['Critère', 'Ouverte', 'Laparoscopique', 'Robotique'],
          rows: [
            { label: 'Caractère invasif', values: ['Grande incision', 'Petites incisions', 'Petites incisions'] },
            { label: 'Précision des sutures', values: ['Bonne', 'Techniquement difficile', 'Très élevée'] },
            { label: 'Récupération', values: ['Plus longue', 'Courte', 'Courte'] },
            { label: 'Adaptation aux reprises / cas complexes', values: ['Sélective', 'Limitée', 'Élevée'] },
            { label: 'Séjour', values: ['3 à 5 nuits', '2 à 3 nuits', '2 à 3 nuits'] }
          ],
          note: 'La méthode est choisie au cas par cas selon le type de rétrécissement, les interventions antérieures et l’anatomie.'
        },
        price: {
          from: 0,
          to: 0,
          currency: 'EUR',
          disclaimer: 'Aucune fourchette de prix fixe n’est indiquée dans cette catégorie ; le prix est communiqué après évaluation du dossier, selon la complexité du cas et la technique requise.'
        },
        packageIncludes: [
          'Intervention et séjour hospitalier',
          'Anesthésie et examens',
          'Sonde JJ et son retrait',
          'Transferts et hébergement',
          'Interprète médical et coordinateur',
          'Suivi fonctionnel à long terme'
        ],
        faqs: [
          { q: 'J’ai eu une endopyélotomie ou une pyéloplastie et l’obstruction est revenue ; que peut-on faire ?', a: 'Une pyéloplastie de reprise est possible et constitue un domaine d’expérience de ce centre. Malgré le tissu cicatriciel, une reconstruction préservant le rein est planifiée ; rarement, une approche en deux temps est nécessaire.' },
          { q: 'Robotique ou ouverte, que choisir ?', a: 'La voie robotique offre une précision de suture et une récupération rapide dans la plupart des cas ; le choix dépend toutefois du type de rétrécissement, des interventions antérieures et de l’anatomie.' },
          { q: 'Mon rein peut-il être préservé ?', a: 'L’objectif est de préserver le rein. La part de fonction récupérable est évaluée par scintigraphie ; la néphrectomie n’est envisagée qu’en dernier recours, pour un rein non fonctionnel.' }
        ]
      }
    }
  },
  {
    slug: 'fistul-onarimi',
    icon: 'repair',
    category: 'reconstructive',
    i18n: {
      tr: {
        title: 'Vezikovaginal ve Üreterovaginal Fistül Onarımı',
        summary: 'İdrar kaçağına yol açan fistüllerin onarımı — doğum ya da pelvik/jinekolojik cerrahi sonrası gelişen durumlar dahil. Saygılı ve gizli bir süreç.',
        metaTitle: 'Fistül Onarımı | Vezikovaginal ve Üreterovaginal Fistül Cerrahisi',
        metaDescription: 'Vezikovaginal ve üreterovaginal fistül onarımı: sürekli idrar kaçağına yol açan fistüllerin rekonstrüktif cerrahi ile onarımı. Uluslararası sevk hastalarına saygılı, gizli yaklaşım.',
        definition: [
          'Fistül, mesane veya üreter ile vajina arasında oluşan anormal bir bağlantıdır ve sürekli, kontrol edilemeyen idrar kaçağına yol açar. Çoğunlukla zorlu doğum, pelvik/jinekolojik cerrahi veya radyoterapi sonrası gelişir.',
          'Bu durum tıbbi olarak tamamen onarılabilir bir sorundur ve yaşanan sıkıntı bir utanç kaynağı değildir. Rekonstrüktif cerrahi, fistülün kapatılıp normal idrar tutmanın yeniden sağlanmasını hedefler. Uygun zamanlama, doku kalitesi ve fistülün yeri sonucu belirler; tekrarlayan (başarısız onarım sonrası) vakalar özel deneyim gerektirir.'
        ],
        surgeonExperience: {
          caseVolume: '' /* TODO-DOGRULA: caseStats.ts */,
          note: 'Vaka sayısı, Doç. Dr. Müslüm Ergün’ün bu alandaki toplam cerrahi deneyimini yansıtır.'
        },
        expertise: {
          redoRate: 'Vakaların önemli bir bölümü, başka merkezdeki başarısız girişim veya iatrojenik hasar sonrası başvuran redo (yeniden onarım) olgularıdır.',
          complexCase: 'Radyoterapi sonrası fistül, büyük/çok odaklı fistül ve tekrarlayan başarısız onarım kompleks kapsamdadır.',
          advancedTechnique: 'Doku araya yerleştirme (ör. Martius flebi) ile desteklenen transvajinal/abdominal onarım; üreter reimplantasyonu.'
        },
        timeline: [
          { when: 'Uzaktan', title: 'Gizli dosya değerlendirmesi', body: 'Öykünüz, önceki cerrahi notları ve görüntüleme gizlilikle incelenir; onarım için uygun zamanlama belirlenir.' },
          { when: '1–2. Gün', title: 'Varış ve muayene', body: 'Muayene, sistoskopi ve gerekli görüntüleme ile fistülün yeri ve boyutu netleştirilir.' },
          { when: '2–3. Gün', title: 'Ameliyat', body: 'Fistülün yerine göre transvajinal veya abdominal onarım; gerekli vakalarda doku desteği (flep).' },
          { when: 'Sonrası', title: 'Kateter süreci', body: 'Onarımın iyileşmesi için genellikle 2–3 hafta idrar sondası kalır; erken dönemde ağır aktivite ve cinsel ilişkiden kaçınılır.' },
          { when: 'Takip', title: 'Kontrol', body: 'Sonda çekilmeden önce kontrol; kaçağın tamamen düzeldiği doğrulanır ve takip planlanır.' }
        ],
        risks: [
          'Onarımın tekrar açılması (nüks) — özellikle radyoterapi/kompleks vakalarda',
          'Enfeksiyon ve kanama',
          'Geçici idrar yapma güçlüğü',
          'Nadiren ek onarım gereksinimi'
        ],
        alternatives: [
          'Küçük ve yeni fistüllerde uzun süreli sonda ile spontan kapanma denemesi (seçili)',
          'Onarım öncesi doku iyileşmesi için bekleme (uygun zamanlama)',
          'Kompleks vakalarda üriner diversiyon (son seçenek)'
        ],
        price: {
          from: 0,
          to: 0,
          currency: 'EUR',
          disclaimer: 'Bu kategoride sabit fiyat aralığı verilmez; fiyat, vaka karmaşıklığına ve gereken tekniğe göre dosya değerlendirmesi sonrası bildirilir.'
        },
        packageIncludes: [
          'Cerrahi ve hastane yatışı',
          'Anestezi ve tetkikler',
          'Gerekli vakalarda doku desteği (flep) dahil',
          'Kadın tıbbi tercüman ve gizli koordinasyon (talebe göre)',
          'Transferler ve konaklama',
          'Sonda çekimi ve online takip'
        ],
        faqs: [
          { q: 'Başka bir ülkede/merkezde onarım denendi ama başarısız oldu; yeniden onarılabilir mi?', a: 'Evet. Başarısız onarım sonrası tekrarlayan vakalar bu merkezin deneyimli olduğu alandır. Doku durumuna göre uygun zamanlama ve gerekirse doku destekli (flep) teknik planlanır.' },
          { q: 'Bu durum kalıcı mı, utanmam gereken bir şey mi?', a: 'Hayır. Fistül tıbbi bir komplikasyondur, kişisel bir kusur değildir ve çoğu vakada tamamen onarılabilir. Tüm süreç mahremiyetinize saygıyla, gizlilik içinde yürütülür.' },
          { q: 'Süreç gizli tutulur mu ve kadın personel talep edebilir miyim?', a: 'Evet. Görüşmeler ve koordinasyon gizlilik ilkesiyle yürütülür; talebe göre kadın tercüman ve destek sağlanır.' }
        ]
      },
      en: {
        title: 'Vesicovaginal & Ureterovaginal Fistula Repair',
        summary: 'Repair of fistulas causing urine leakage — including those developing after childbirth or pelvic/gynecological surgery. A respectful, confidential process.',
        metaTitle: 'Fistula Repair | Vesicovaginal & Ureterovaginal Fistula Surgery',
        metaDescription: 'Vesicovaginal and ureterovaginal fistula repair: reconstructive surgery for fistulas causing continuous urine leakage. A respectful, confidential approach for international referral patients.',
        definition: [
          'A fistula is an abnormal connection between the bladder or ureter and the vagina, causing continuous, uncontrollable urine leakage. It most often develops after difficult childbirth, pelvic/gynecological surgery or radiotherapy.',
          'This is a medically repairable condition and the distress it causes is not a source of shame. Reconstructive surgery aims to close the fistula and restore normal continence. Timing, tissue quality and the fistula’s location determine the outcome; recurrent cases (after a failed repair) require special experience.'
        ],
        surgeonExperience: {
          caseVolume: '' /* TODO-DOGRULA: caseStats.ts */,
          note: 'The case volume reflects Assoc. Prof. Dr. Müslüm Ergün’s total surgical experience in this area.'
        },
        expertise: {
          redoRate: 'A significant share of cases are redo referrals after a failed attempt or iatrogenic injury at another center.',
          complexCase: 'Post-radiotherapy fistula, large/multifocal fistula and recurrent failed repair fall within complex.',
          advancedTechnique: 'Transvaginal/abdominal repair supported by tissue interposition (e.g., Martius flap); ureteric reimplantation.'
        },
        timeline: [
          { when: 'Remote', title: 'Confidential file assessment', body: 'Your history, previous operative notes and imaging are reviewed confidentially; the right timing for repair is determined.' },
          { when: 'Day 1–2', title: 'Arrival & examination', body: 'Examination, cystoscopy and imaging clarify the fistula’s location and size.' },
          { when: 'Day 2–3', title: 'Surgery', body: 'Transvaginal or abdominal repair depending on location; tissue support (flap) where required.' },
          { when: 'After', title: 'Catheter period', body: 'A catheter usually stays 2–3 weeks for the repair to heal; heavy activity and intercourse are avoided early on.' },
          { when: 'Follow-up', title: 'Review', body: 'A check before catheter removal confirms the leakage has fully resolved, and follow-up is planned.' }
        ],
        risks: [
          'Re-opening of the repair (recurrence) — especially in radiotherapy/complex cases',
          'Infection and bleeding',
          'Temporary difficulty urinating',
          'Rarely, need for additional repair'
        ],
        alternatives: [
          'A trial of spontaneous closure with a prolonged catheter in small, recent fistulas (selected)',
          'Waiting for tissue healing before repair (right timing)',
          'Urinary diversion in complex cases (last resort)'
        ],
        price: {
          from: 0,
          to: 0,
          currency: 'EUR',
          disclaimer: 'No fixed price range is given in this category; the price is shared after a file assessment, according to case complexity and the technique required.'
        },
        packageIncludes: [
          'Surgery and hospital stay',
          'Anesthesia and tests',
          'Tissue support (flap) included where required',
          'Female medical interpreter and confidential coordination (on request)',
          'Transfers and accommodation',
          'Catheter removal and online follow-up'
        ],
        faqs: [
          { q: 'A repair was attempted in another country/center but failed; can it be repaired again?', a: 'Yes. Recurrent cases after a failed repair are an area this center is experienced in. Depending on tissue condition, the right timing and, if needed, a tissue-supported (flap) technique are planned.' },
          { q: 'Is this permanent, something to be ashamed of?', a: 'No. A fistula is a medical complication, not a personal fault, and is fully repairable in most cases. The entire process is handled with respect for your privacy, in confidence.' },
          { q: 'Is the process kept confidential and can I request female staff?', a: 'Yes. Consultations and coordination follow the principle of confidentiality; on request, a female interpreter and support are provided.' }
        ]
      },
      ar: {
        title: 'إصلاح الناسور المثاني المهبلي والحالبي المهبلي',
        summary: 'إصلاح النواسير المسبِّبة لتسرّب البول — بما فيها ما ينشأ بعد الولادة أو جراحة الحوض/النسائية. عملية تُدار باحترام وسرّية تامة.',
        metaTitle: 'إصلاح الناسور | جراحة الناسور المثاني المهبلي والحالبي المهبلي',
        metaDescription: 'إصلاح الناسور المثاني المهبلي والحالبي المهبلي: جراحة ترميمية للنواسير المسبِّبة لتسرّب بولي مستمر. نهج محترم وسرّي لمريضات الإحالة الدوليات.',
        definition: [
          'الناسور هو اتصال غير طبيعي بين المثانة أو الحالب والمهبل، يؤدي إلى تسرّب بولي مستمر لا يمكن التحكم فيه. وينشأ غالبًا بعد ولادة متعسّرة أو جراحة في الحوض/نسائية أو علاج إشعاعي.',
          'هذه حالة قابلة للإصلاح طبيًا تمامًا، وما تعانينه ليس مدعاة للخجل. تهدف الجراحة الترميمية إلى إغلاق الناسور واستعادة التحكم الطبيعي في البول. يحدّد التوقيت المناسب وجودة الأنسجة وموقع الناسور النتيجة؛ وتتطلب الحالات المتكررة (بعد إصلاح فاشل) خبرة خاصة. ونحرص على أن تُدار رعايتك بكامل الاحترام والخصوصية.'
        ],
        surgeonExperience: {
          caseVolume: '' /* TODO-DOGRULA: caseStats.ts */,
          note: 'يعكس عدد الحالات إجمالي الخبرة الجراحية للأستاذ المشارك د. مسلم إرغن في هذا المجال.'
        },
        expertise: {
          redoRate: 'نسبة كبيرة من الحالات هي حالات إعادة جراحة (redo) بعد محاولة فاشلة أو إصابة علاجية المنشأ في مركز آخر.',
          complexCase: 'يشمل نطاق الحالات المعقّدة: الناسور بعد العلاج الإشعاعي، والناسور الكبير/متعدّد البؤر، والإصلاح الفاشل المتكرر.',
          advancedTechnique: 'إصلاح عبر المهبل/عبر البطن مدعوم بإقحام نسيجي (مثل سديلة Martius)؛ وإعادة زرع الحالب.'
        },
        timeline: [
          { when: 'عن بُعد', title: 'تقييم سرّي للملف', body: 'تُراجَع قصتك المرضية وملاحظات الجراحة السابقة والتصوير بسرّية تامة؛ ويُحدَّد التوقيت المناسب للإصلاح.' },
          { when: 'اليوم 1–2', title: 'الوصول والفحص', body: 'الفحص وتنظير المثانة والتصوير لتوضيح موقع الناسور وحجمه.' },
          { when: 'اليوم 2–3', title: 'العملية', body: 'إصلاح عبر المهبل أو عبر البطن حسب الموقع؛ ودعم نسيجي (سديلة) عند الحاجة.' },
          { when: 'بعد ذلك', title: 'فترة القسطرة', body: 'تبقى قسطرة عادةً 2–3 أسابيع ليلتئم الإصلاح؛ ويُتجنّب النشاط الشاق والعلاقة الزوجية في الفترة المبكرة.' },
          { when: 'المتابعة', title: 'المراجعة', body: 'مراجعة قبل إزالة القسطرة للتأكد من زوال التسرّب تمامًا، ثم تُخطَّط المتابعة.' }
        ],
        risks: [
          'إعادة انفتاح الإصلاح (النكس) — خصوصًا في حالات العلاج الإشعاعي/المعقّدة',
          'العدوى والنزيف',
          'صعوبة مؤقتة في التبول',
          'نادرًا، الحاجة إلى إصلاح إضافي'
        ],
        alternatives: [
          'محاولة الإغلاق التلقائي بقسطرة طويلة في النواسير الصغيرة والحديثة (حالات مختارة)',
          'الانتظار حتى التئام الأنسجة قبل الإصلاح (التوقيت المناسب)',
          'تحويل المسار البولي في الحالات المعقّدة (كملاذ أخير)'
        ],
        price: {
          from: 0,
          to: 0,
          currency: 'EUR',
          disclaimer: 'لا يُقدَّم نطاق سعر ثابت في هذه الفئة؛ يُبلَّغ السعر بعد تقييم الملف، وفق تعقيد الحالة والتقنية المطلوبة.'
        },
        packageIncludes: [
          'العملية والإقامة في المستشفى',
          'التخدير والفحوصات',
          'دعم نسيجي (سديلة) مشمول عند الحاجة',
          'مترجمة طبية وتنسيق سرّي (عند الطلب)',
          'التنقلات والإقامة',
          'إزالة القسطرة والمتابعة الإلكترونية'
        ],
        faqs: [
          { q: 'جرت محاولة إصلاح في بلد/مركز آخر لكنها فشلت؛ هل يمكن إصلاحه من جديد؟', a: 'نعم. الحالات المتكررة بعد إصلاح فاشل مجال يتمتّع فيه هذا المركز بالخبرة. يُخطَّط للتوقيت المناسب، وعند الحاجة لتقنية مدعومة بالنسيج (سديلة)، حسب حالة الأنسجة.' },
          { q: 'هل هذه الحالة دائمة، أو أمر ينبغي أن أخجل منه؟', a: 'لا. الناسور مضاعفة طبية وليس عيبًا شخصيًا، وهو قابل للإصلاح تمامًا في معظم الحالات. وتُدار العملية بأكملها باحترام لخصوصيتك وبسرّية تامة.' },
          { q: 'هل تُحفظ الخصوصية وهل يمكنني طلب طاقم نسائي؟', a: 'نعم. تُدار الاستشارات والتنسيق وفق مبدأ السرّية؛ وعند الطلب تُوفَّر مترجمة ودعم نسائي.' }
        ]
      },
      de: {
        title: 'Vesikovaginaler & ureterovaginaler Fistelverschluss',
        summary: 'Verschluss von Fisteln, die Urinverlust verursachen — auch solche nach Geburt oder Becken-/gynäkologischer Operation. Ein respektvoller, vertraulicher Prozess.',
        metaTitle: 'Fistelverschluss | Vesikovaginale & ureterovaginale Fistelchirurgie',
        metaDescription: 'Verschluss vesikovaginaler und ureterovaginaler Fisteln: rekonstruktive Chirurgie bei Fisteln mit kontinuierlichem Urinverlust. Ein respektvoller, vertraulicher Ansatz für internationale Zuweisungspatientinnen.',
        definition: [
          'Eine Fistel ist eine krankhafte Verbindung zwischen Blase oder Harnleiter und Scheide, die zu kontinuierlichem, unkontrollierbarem Urinverlust führt. Sie entsteht meist nach schwerer Geburt, Becken-/gynäkologischer Operation oder Strahlentherapie.',
          'Dies ist ein medizinisch vollständig reparabler Zustand, und die damit verbundene Belastung ist kein Grund zur Scham. Die rekonstruktive Chirurgie zielt darauf ab, die Fistel zu verschließen und die normale Kontinenz wiederherzustellen. Zeitpunkt, Gewebequalität und Lage der Fistel bestimmen das Ergebnis; wiederkehrende Fälle (nach fehlgeschlagenem Verschluss) erfordern besondere Erfahrung. Ihre Behandlung erfolgt mit vollem Respekt und in Vertraulichkeit.'
        ],
        surgeonExperience: {
          caseVolume: '' /* TODO-DOGRULA: caseStats.ts */,
          note: 'Die Fallzahl spiegelt die gesamte chirurgische Erfahrung von Doz. Dr. Müslüm Ergün in diesem Bereich wider.'
        },
        expertise: {
          redoRate: 'Ein erheblicher Teil der Fälle sind Redo-Zuweisungen nach einem fehlgeschlagenen Versuch oder einer iatrogenen Verletzung in einem anderen Zentrum.',
          complexCase: 'Zu den komplexen Fällen zählen Fisteln nach Strahlentherapie, große/multifokale Fisteln und wiederholt fehlgeschlagene Verschlüsse.',
          advancedTechnique: 'Transvaginaler/abdomineller Verschluss mit Gewebeinterposition (z. B. Martius-Lappen); Harnleiter-Reimplantation.'
        },
        timeline: [
          { when: 'Aus der Ferne', title: 'Vertrauliche Aktenprüfung', body: 'Ihre Vorgeschichte, frühere OP-Berichte und Bildgebung werden vertraulich geprüft; der richtige Zeitpunkt für den Verschluss wird bestimmt.' },
          { when: 'Tag 1–2', title: 'Ankunft & Untersuchung', body: 'Untersuchung, Zystoskopie und Bildgebung klären Lage und Größe der Fistel.' },
          { when: 'Tag 2–3', title: 'Operation', body: 'Transvaginaler oder abdomineller Verschluss je nach Lage; bei Bedarf Gewebestütze (Lappen).' },
          { when: 'Danach', title: 'Katheterphase', body: 'Ein Katheter bleibt meist 2–3 Wochen, damit der Verschluss heilt; schwere Aktivität und Geschlechtsverkehr werden anfangs vermieden.' },
          { when: 'Nachsorge', title: 'Kontrolle', body: 'Eine Kontrolle vor der Katheterentfernung bestätigt, dass der Urinverlust vollständig behoben ist, und die Nachsorge wird geplant.' }
        ],
        risks: [
          'Wiederöffnung des Verschlusses (Rezidiv) — besonders bei Strahlentherapie/komplexen Fällen',
          'Infektion und Blutung',
          'Vorübergehende Schwierigkeiten beim Wasserlassen',
          'Selten Bedarf an einem zusätzlichen Verschluss'
        ],
        alternatives: [
          'Versuch eines spontanen Verschlusses mit längerem Katheter bei kleinen, frischen Fisteln (ausgewählt)',
          'Abwarten der Gewebeheilung vor dem Verschluss (richtiger Zeitpunkt)',
          'Harnableitung in komplexen Fällen (letztes Mittel)'
        ],
        price: {
          from: 0,
          to: 0,
          currency: 'EUR',
          disclaimer: 'In dieser Kategorie wird keine feste Preisspanne genannt; der Preis wird nach einer Aktenprüfung entsprechend Fallkomplexität und erforderlicher Technik mitgeteilt.'
        },
        packageIncludes: [
          'Operation und Krankenhausaufenthalt',
          'Anästhesie und Untersuchungen',
          'Gewebestütze (Lappen) bei Bedarf inbegriffen',
          'Weibliche medizinische Dolmetscherin und vertrauliche Koordination (auf Wunsch)',
          'Transfers und Unterkunft',
          'Katheterentfernung und Online-Nachsorge'
        ],
        faqs: [
          { q: 'In einem anderen Land/Zentrum wurde ein Verschluss versucht, der fehlschlug; kann er erneut verschlossen werden?', a: 'Ja. Wiederkehrende Fälle nach einem fehlgeschlagenen Verschluss sind ein Bereich, in dem dieses Zentrum erfahren ist. Je nach Gewebezustand werden der richtige Zeitpunkt und bei Bedarf eine gewebegestützte (Lappen-)Technik geplant.' },
          { q: 'Ist das dauerhaft, etwas, wofür ich mich schämen müsste?', a: 'Nein. Eine Fistel ist eine medizinische Komplikation, kein persönliches Versagen, und in den meisten Fällen vollständig reparabel. Der gesamte Prozess erfolgt mit Respekt vor Ihrer Privatsphäre, in Vertraulichkeit.' },
          { q: 'Wird der Prozess vertraulich behandelt und kann ich weibliches Personal anfragen?', a: 'Ja. Beratungen und Koordination folgen dem Grundsatz der Vertraulichkeit; auf Wunsch werden eine Dolmetscherin und Unterstützung bereitgestellt.' }
        ]
      },
      ru: {
        title: 'Пластика везиковагинального и уретеровагинального свища',
        summary: 'Пластика свищей, вызывающих подтекание мочи — в том числе возникших после родов или тазовой/гинекологической операции. Уважительный и конфиденциальный процесс.',
        metaTitle: 'Пластика свища | Хирургия везиковагинального и уретеровагинального свища',
        metaDescription: 'Пластика везиковагинального и уретеровагинального свища: реконструктивная операция при свищах с постоянным подтеканием мочи. Уважительный, конфиденциальный подход для международных направленных пациенток.',
        definition: [
          'Свищ — патологическое сообщение между мочевым пузырём или мочеточником и влагалищем, вызывающее постоянное, неконтролируемое подтекание мочи. Чаще всего он возникает после тяжёлых родов, тазовой/гинекологической операции или лучевой терапии.',
          'Это состояние полностью поддаётся хирургическому исправлению, и связанные с ним переживания — не повод для стыда. Реконструктивная операция направлена на закрытие свища и восстановление нормального удержания мочи. Правильное время, качество тканей и расположение свища определяют результат; повторные случаи (после неудачной пластики) требуют особого опыта. Ваше лечение ведётся с полным уважением и в условиях конфиденциальности.'
        ],
        surgeonExperience: {
          caseVolume: '' /* TODO-DOGRULA: caseStats.ts */,
          note: 'Число операций отражает общий хирургический опыт доцента д-ра Мюслюма Эргюна в этой области.'
        },
        expertise: {
          redoRate: 'Значительная часть случаев — повторные (redo) обращения после неудачной попытки или ятрогенного повреждения в другом центре.',
          complexCase: 'К сложным случаям относятся свищ после лучевой терапии, крупный/многоочаговый свищ и повторно неудачная пластика.',
          advancedTechnique: 'Трансвагинальная/абдоминальная пластика с тканевой интерпозицией (например, лоскут Мартиуса); реимплантация мочеточника.'
        },
        timeline: [
          { when: 'Удалённо', title: 'Конфиденциальная оценка документов', body: 'Ваш анамнез, записи предыдущих операций и снимки изучаются конфиденциально; определяется подходящее время для пластики.' },
          { when: 'День 1–2', title: 'Прибытие и осмотр', body: 'Осмотр, цистоскопия и визуализация уточняют расположение и размер свища.' },
          { when: 'День 2–3', title: 'Операция', body: 'Трансвагинальная или абдоминальная пластика в зависимости от расположения; при необходимости — тканевая поддержка (лоскут).' },
          { when: 'После', title: 'Период катетера', body: 'Катетер обычно остаётся 2–3 недели для заживления пластики; в раннем периоде избегают тяжёлых нагрузок и половой жизни.' },
          { when: 'Наблюдение', title: 'Контроль', body: 'Контроль перед удалением катетера подтверждает полное устранение подтекания, затем планируется наблюдение.' }
        ],
        risks: [
          'Повторное раскрытие пластики (рецидив) — особенно при лучевой терапии/сложных случаях',
          'Инфекция и кровотечение',
          'Временное затруднение мочеиспускания',
          'Редко — необходимость дополнительной пластики'
        ],
        alternatives: [
          'Попытка самостоятельного закрытия с длительным катетером при небольших свежих свищах (отдельные случаи)',
          'Ожидание заживления тканей перед пластикой (правильное время)',
          'Отведение мочи в сложных случаях (крайняя мера)'
        ],
        price: {
          from: 0,
          to: 0,
          currency: 'EUR',
          disclaimer: 'В этой категории фиксированный диапазон цен не указывается; цена сообщается после оценки документов, в зависимости от сложности случая и необходимой методики.'
        },
        packageIncludes: [
          'Операция и пребывание в стационаре',
          'Анестезия и обследование',
          'Тканевая поддержка (лоскут) включена при необходимости',
          'Переводчица-женщина и конфиденциальная координация (по запросу)',
          'Трансферы и проживание',
          'Удаление катетера и онлайн-наблюдение'
        ],
        faqs: [
          { q: 'В другой стране/центре пытались выполнить пластику, но она не удалась; можно ли исправить снова?', a: 'Да. Повторные случаи после неудачной пластики — область опыта этого центра. В зависимости от состояния тканей планируются подходящее время и при необходимости методика с тканевой поддержкой (лоскут).' },
          { q: 'Это навсегда, это то, чего нужно стыдиться?', a: 'Нет. Свищ — медицинское осложнение, а не личный недостаток, и в большинстве случаев полностью устраним. Весь процесс ведётся с уважением к вашей частной жизни и конфиденциально.' },
          { q: 'Сохраняется ли конфиденциальность и могу ли я запросить женский персонал?', a: 'Да. Консультации и координация следуют принципу конфиденциальности; по запросу предоставляются переводчица и поддержка.' }
        ]
      },
      fr: {
        title: 'Réparation des fistules vésico-vaginales et urétéro-vaginales',
        summary: 'Réparation des fistules responsables de fuites d’urine — y compris celles survenues après un accouchement ou une chirurgie pelvienne ou gynécologique. Une prise en charge respectueuse et confidentielle.',
        metaTitle: 'Réparation de fistule | Chirurgie des fistules vésico-vaginales et urétéro-vaginales',
        metaDescription: 'Réparation des fistules vésico-vaginales et urétéro-vaginales : chirurgie reconstructrice des fistules entraînant des fuites d’urine permanentes. Une approche respectueuse et confidentielle pour les patientes adressées de l’étranger.',
        definition: [
          'Une fistule est une communication anormale entre la vessie ou l’uretère et le vagin, provoquant une fuite d’urine continue et incontrôlable. Elle survient le plus souvent après un accouchement difficile, une chirurgie pelvienne ou gynécologique, ou une radiothérapie.',
          'Il s’agit d’une affection médicalement réparable, et la gêne qu’elle occasionne n’a rien de honteux. La chirurgie reconstructrice vise à fermer la fistule et à rétablir une continence normale. Le moment de l’intervention, la qualité des tissus et la localisation de la fistule déterminent le résultat ; les cas récidivants, après une réparation ayant échoué, exigent une expérience particulière.'
        ],
        surgeonExperience: {
          caseVolume: '' /* TODO-DOGRULA: caseStats.ts */,
          note: 'Le nombre d’interventions reflète l’expérience chirurgicale totale du Dr Müslüm Ergün dans ce domaine.'
        },
        expertise: {
          redoRate: 'Une part importante des cas sont des reprises adressées après un échec ou une lésion iatrogène survenus dans un autre centre.',
          complexCase: 'Les fistules post-radiques, les fistules étendues ou multifocales et les réparations ayant échoué à plusieurs reprises relèvent des cas complexes.',
          advancedTechnique: 'Réparation par voie vaginale ou abdominale avec interposition tissulaire (par exemple lambeau de Martius) ; réimplantation urétérale.'
        },
        timeline: [
          { when: 'À distance', title: 'Évaluation confidentielle du dossier', body: 'Vos antécédents, vos comptes rendus opératoires et votre imagerie sont examinés en toute confidentialité ; le moment opportun de la réparation est déterminé.' },
          { when: 'Jours 1–2', title: 'Arrivée et examen', body: 'Examen clinique, cystoscopie et imagerie précisent la localisation et la taille de la fistule.' },
          { when: 'Jours 2–3', title: 'Intervention', body: 'Réparation par voie vaginale ou abdominale selon la localisation ; interposition tissulaire (lambeau) si nécessaire.' },
          { when: 'Ensuite', title: 'Période de sondage', body: 'Une sonde reste en place 2 à 3 semaines pour permettre la cicatrisation ; les efforts importants et les rapports sexuels sont évités au début.' },
          { when: 'Suivi', title: 'Contrôle', body: 'Un contrôle avant le retrait de la sonde confirme la disparition complète de la fuite, et le suivi est planifié.' }
        ],
        risks: [
          'Réouverture de la réparation (récidive) — surtout dans les cas post-radiques ou complexes',
          'Infection et saignement',
          'Difficulté transitoire à uriner',
          'Rarement, nécessité d’une réparation complémentaire'
        ],
        alternatives: [
          'Tentative de fermeture spontanée sous sondage prolongé pour les petites fistules récentes (cas sélectionnés)',
          'Attente de la cicatrisation tissulaire avant la réparation (choix du bon moment)',
          'Dérivation urinaire dans les cas complexes (en dernier recours)'
        ],
        price: {
          from: 0,
          to: 0,
          currency: 'EUR',
          disclaimer: 'Aucune fourchette de prix fixe n’est indiquée dans cette catégorie ; le prix est communiqué après évaluation du dossier, selon la complexité du cas et la technique requise.'
        },
        packageIncludes: [
          'Intervention et séjour hospitalier',
          'Anesthésie et examens',
          'Interposition tissulaire (lambeau) incluse si nécessaire',
          'Interprète médicale et coordination confidentielle (sur demande)',
          'Transferts et hébergement',
          'Retrait de la sonde et suivi en ligne'
        ],
        faqs: [
          { q: 'Une réparation a été tentée dans un autre pays ou centre sans succès ; peut-elle être refaite ?', a: 'Oui. Les cas récidivants après une réparation ayant échoué constituent un domaine d’expérience de ce centre. Selon l’état des tissus, le moment opportun et, si nécessaire, une technique avec soutien tissulaire (lambeau) sont planifiés.' },
          { q: 'Est-ce définitif, est-ce honteux ?', a: 'Non. Une fistule est une complication médicale, non une faute personnelle, et elle est réparable dans la grande majorité des cas. L’ensemble du parcours est mené dans le respect de votre intimité et en toute confidentialité.' },
          { q: 'Le parcours reste-t-il confidentiel et puis-je demander un personnel féminin ?', a: 'Oui. Les consultations et la coordination suivent le principe de confidentialité ; sur demande, une interprète et un accompagnement féminins sont proposés.' }
        ]
      }
    }
  },
  {
    slug: 'ureter-rekonstruksiyonu',
    icon: 'graft',
    category: 'reconstructive',
    i18n: {
      tr: {
        title: 'Üreter Rekonstrüksiyonu (Uzun Segment Darlık/Hasar)',
        summary: 'Uzun segment üreter darlığı veya hasarında ileri rekonstrüksiyon: buccal mukoza grefti, ileal interpozisyon gibi teknikler.',
        metaTitle: 'Üreter Rekonstrüksiyonu | Uzun Segment Üreter Darlığı Cerrahisi',
        metaDescription: 'Uzun segment üreter darlığı/hasarında ileri rekonstrüksiyon: buccal mukoza grefti, ileal interpozisyon, üreter reimplantasyonu. Kompleks ve redo vaka deneyimi.',
        definition: [
          'Üreter, böbreği mesaneye bağlayan kanaldır. Uzun segment darlık veya hasar; taş cerrahisi, pelvik/jinekolojik ameliyat, radyoterapi ya da travma sonrası gelişebilir ve böbreği tehdit eder.',
          'Kısa darlıklar basit tekniklerle onarılabilirken, uzun segment darlıklar ileri rekonstrüksiyon gerektirir. Buccal mukoza grefti, ileal interpozisyon (barsak segmenti ile köprüleme) veya böbreğin aşağı indirilmesi gibi teknikler, böbreği korumak için deneyimli merkezlerde uygulanır.'
        ],
        surgeonExperience: {
          caseVolume: '' /* TODO-DOGRULA: caseStats.ts */,
          note: 'Vaka sayısı, Doç. Dr. Müslüm Ergün’ün bu alandaki toplam cerrahi deneyimini yansıtır.'
        },
        expertise: {
          redoRate: 'Vakaların önemli bir bölümü, başka merkezdeki başarısız girişim veya iatrojenik hasar sonrası başvuran redo (yeniden onarım) olgularıdır.',
          complexCase: 'Uzun segment/pan-üreteral darlık, radyoterapi sonrası ve tek böbrekli hastalar kompleks kapsamdadır.',
          advancedTechnique: 'Buccal mukoza grefti ile üreteroplasti, ileal interpozisyon ve robot destekli rekonstrüksiyon.'
        },
        timeline: [
          { when: 'Uzaktan', title: 'Dosya değerlendirmesi', body: 'BT ürografi, sintigrafi ve önceki ameliyat notlarınız detaylı incelenir; darlığın uzunluğu ve böbrek fonksiyonu belirlenir.' },
          { when: '1–2. Gün', title: 'Varış ve ileri tetkik', body: 'Muayene, gerekirse üreteroskopi/görüntüleme; rekonstrüksiyon planı netleştirilir.' },
          { when: '3. Gün', title: 'Ameliyat', body: 'Segmentin uzunluğuna göre greft, interpozisyon veya reimplantasyon; genellikle çok günlük yatış.' },
          { when: 'Sonrası', title: 'Stent/kateter süreci', body: 'JJ stent ve/veya kateter bir süre kalır; kontrol görüntülemesiyle drenaj doğrulanır.' },
          { when: 'Takip', title: 'Uzun dönem takip', body: 'Fonksiyon ve drenaj sintigrafi/ultrason ile izlenir; bu vakalarda takip özellikle kritiktir.' }
        ],
        risks: [
          'Darlığın tekrarlaması ve ek girişim ihtiyacı',
          'İleal interpozisyonda barsağa bağlı metabolik/mukus etkileri',
          'İdrar kaçağı, enfeksiyon ve kanama',
          'Böbrek fonksiyonunda değişiklik'
        ],
        alternatives: [
          'Kalıcı JJ stent veya nefrostomi ile idame (cerrahiye uygun olmayanlarda)',
          'Kısa darlıkta uç-uca onarım/reimplantasyon',
          'Ototransplantasyon (seçili kompleks vakalarda)',
          'Nefrektomi (yalnızca fonksiyonsuz böbrekte, son seçenek)'
        ],
        price: {
          from: 0,
          to: 0,
          currency: 'EUR',
          disclaimer: 'Bu kategoride sabit fiyat aralığı verilmez; fiyat, vaka karmaşıklığına ve gereken tekniğe göre dosya değerlendirmesi sonrası bildirilir.'
        },
        packageIncludes: [
          'Cerrahi ve hastane yatışı',
          'Anestezi ve ileri tetkikler',
          'Greft/interpozisyon gerektiren vakalarda dahil',
          'Stent ve alımı',
          'Transferler ve konaklama',
          'Tıbbi tercüman ve koordinatör',
          'Uzun dönem fonksiyon takibi'
        ],
        faqs: [
          { q: 'Uzun bir üreter darlığım var ve “yapılamaz” dendi; seçenek var mı?', a: 'Uzun segment darlıklar buccal mukoza grefti veya ileal interpozisyon gibi ileri tekniklerle çoğu vakada onarılabilir. Dosyanız değerlendirilip böbreği koruyan bir plan çıkarılır.' },
          { q: 'Başarısız bir girişim sonrası tekrar denenebilir mi?', a: 'Evet; iatrojenik hasar veya başarısız onarım sonrası redo rekonstrüksiyon bu merkezin deneyim alanıdır. Skar dokusuna rağmen böbrek koruyucu teknikler planlanır.' },
          { q: 'İyileşme ve takip ne kadar sürer?', a: 'Yatış ve stent süreci diğer tedavilere göre daha uzundur; uzun dönem başarı, düzenli fonksiyon takibiyle değerlendirilir. Takip bu vakalarda kritiktir.' }
        ]
      },
      en: {
        title: 'Ureteral Reconstruction (Long-Segment Stricture/Injury)',
        summary: 'Advanced reconstruction for long-segment ureteral stricture or injury: techniques such as buccal mucosa graft and ileal interposition.',
        metaTitle: 'Ureteral Reconstruction | Long-Segment Ureteral Stricture Surgery',
        metaDescription: 'Advanced reconstruction for long-segment ureteral stricture/injury: buccal mucosa graft, ileal interposition, ureteric reimplantation. Complex and redo case experience.',
        definition: [
          'The ureter is the channel connecting the kidney to the bladder. Long-segment stricture or injury can develop after stone surgery, pelvic/gynecological surgery, radiotherapy or trauma and threatens the kidney.',
          'While short strictures can be repaired with simple techniques, long-segment strictures require advanced reconstruction. Techniques such as buccal mucosa graft, ileal interposition (bridging with a bowel segment) or bringing the kidney down are performed in experienced centers to preserve the kidney.'
        ],
        surgeonExperience: {
          caseVolume: '' /* TODO-DOGRULA: caseStats.ts */,
          note: 'The case volume reflects Assoc. Prof. Dr. Müslüm Ergün’s total surgical experience in this area.'
        },
        expertise: {
          redoRate: 'A significant share of cases are redo referrals after a failed attempt or iatrogenic injury at another center.',
          complexCase: 'Long-segment/pan-ureteral stricture, post-radiotherapy and single-kidney patients fall within complex.',
          advancedTechnique: 'Ureteroplasty with buccal mucosa graft, ileal interposition and robot-assisted reconstruction.'
        },
        timeline: [
          { when: 'Remote', title: 'File assessment', body: 'Your CT urography, renal scan and previous operative notes are reviewed in detail; the stricture length and kidney function are determined.' },
          { when: 'Day 1–2', title: 'Arrival & advanced tests', body: 'Examination, ureteroscopy/imaging if needed; the reconstruction plan is finalized.' },
          { when: 'Day 3', title: 'Surgery', body: 'Graft, interposition or reimplantation depending on segment length; usually a multi-day stay.' },
          { when: 'After', title: 'Stent/catheter period', body: 'A JJ stent and/or catheter stays for a while; drainage is confirmed by check imaging.' },
          { when: 'Follow-up', title: 'Long-term follow-up', body: 'Function and drainage are monitored with scan/ultrasound; follow-up is especially critical in these cases.' }
        ],
        risks: [
          'Stricture recurrence and need for additional intervention',
          'Bowel-related metabolic/mucus effects in ileal interposition',
          'Urine leak, infection and bleeding',
          'Change in kidney function'
        ],
        alternatives: [
          'Maintenance with a long-term JJ stent or nephrostomy (for those unfit for surgery)',
          'End-to-end repair/reimplantation in short strictures',
          'Autotransplantation (in selected complex cases)',
          'Nephrectomy (only for a non-functioning kidney, last resort)'
        ],
        price: {
          from: 0,
          to: 0,
          currency: 'EUR',
          disclaimer: 'No fixed price range is given in this category; the price is shared after a file assessment, according to case complexity and the technique required.'
        },
        packageIncludes: [
          'Surgery and hospital stay',
          'Anesthesia and advanced tests',
          'Included where graft/interposition is required',
          'Stent and its removal',
          'Transfers and accommodation',
          'Medical interpreter and coordinator',
          'Long-term function follow-up'
        ],
        faqs: [
          { q: 'I have a long ureteral stricture and was told it "can’t be done"; are there options?', a: 'Long-segment strictures can be repaired in most cases with advanced techniques such as buccal mucosa graft or ileal interposition. Your file is assessed and a kidney-preserving plan is produced.' },
          { q: 'Can it be attempted again after a failed procedure?', a: 'Yes; redo reconstruction after iatrogenic injury or a failed repair is an area of this center’s experience. Kidney-preserving techniques are planned despite scar tissue.' },
          { q: 'How long do recovery and follow-up take?', a: 'The stay and stent period are longer than other treatments; long-term success is judged with regular function follow-up. Follow-up is critical in these cases.' }
        ]
      },
      ar: {
        title: 'إعادة بناء الحالب (تضيّق/إصابة طويلة المقطع)',
        summary: 'إعادة بناء متقدّمة في تضيّق أو إصابة الحالب طويلة المقطع: تقنيات مثل طُعم الغشاء المخاطي للخد والإحلال اللفائفي.',
        metaTitle: 'إعادة بناء الحالب | جراحة تضيّق الحالب طويل المقطع',
        metaDescription: 'إعادة بناء متقدّمة في تضيّق/إصابة الحالب طويلة المقطع: طُعم الغشاء المخاطي للخد، الإحلال اللفائفي، إعادة زرع الحالب. خبرة في الحالات المعقّدة وإعادة الجراحة.',
        definition: [
          'الحالب هو القناة التي تصل الكلية بالمثانة. قد ينشأ التضيّق أو الإصابة طويلة المقطع بعد جراحة الحصى أو جراحة الحوض/النسائية أو العلاج الإشعاعي أو الرضّ، ويهدّد الكلية.',
          'بينما تُصلَح التضيّقات القصيرة بتقنيات بسيطة، تتطلب التضيّقات طويلة المقطع إعادة بناء متقدّمة. وتُطبَّق تقنيات مثل طُعم الغشاء المخاطي للخد، والإحلال اللفائفي (الجسر بمقطع معوي)، أو إنزال الكلية، للحفاظ على الكلية في مراكز ذات خبرة.'
        ],
        surgeonExperience: {
          caseVolume: '' /* TODO-DOGRULA: caseStats.ts */,
          note: 'يعكس عدد الحالات إجمالي الخبرة الجراحية للأستاذ المشارك د. مسلم إرغن في هذا المجال.'
        },
        expertise: {
          redoRate: 'نسبة كبيرة من الحالات هي حالات إعادة جراحة (redo) بعد محاولة فاشلة أو إصابة علاجية المنشأ في مركز آخر.',
          complexCase: 'يشمل نطاق الحالات المعقّدة: التضيّق طويل المقطع/الشامل للحالب، وما بعد العلاج الإشعاعي، والمرضى ذوو الكلية الوحيدة.',
          advancedTechnique: 'رأب الحالب بطُعم الغشاء المخاطي للخد، والإحلال اللفائفي، وإعادة البناء بمساعدة الروبوت.'
        },
        timeline: [
          { when: 'عن بُعد', title: 'تقييم الملف', body: 'تُراجَع بالتفصيل صور التصوير المقطعي بالصبغة والتصوير النووي وملاحظات العمليات السابقة؛ ويُحدَّد طول التضيّق ووظيفة الكلية.' },
          { when: 'اليوم 1–2', title: 'الوصول والفحوصات المتقدمة', body: 'الفحص، وتنظير الحالب/التصوير عند الحاجة؛ وتُحدَّد خطة إعادة البناء.' },
          { when: 'اليوم 3', title: 'العملية', body: 'طُعم أو إحلال أو إعادة زرع حسب طول المقطع؛ وعادةً مبيت عدة أيام.' },
          { when: 'بعد ذلك', title: 'فترة الدعامة/القسطرة', body: 'تبقى دعامة JJ و/أو قسطرة لفترة؛ ويُؤكَّد التصريف بتصوير تحقّق.' },
          { when: 'المتابعة', title: 'متابعة طويلة الأمد', body: 'تُراقَب الوظيفة والتصريف بتصوير نووي/موجات فوق صوتية؛ والمتابعة حاسمة بشكل خاص في هذه الحالات.' }
        ],
        risks: [
          'عودة التضيّق والحاجة إلى تدخّل إضافي',
          'تأثيرات أيضية/مخاطية مرتبطة بالأمعاء في الإحلال اللفائفي',
          'تسرّب البول والعدوى والنزيف',
          'تغيّر في وظيفة الكلية'
        ],
        alternatives: [
          'الإدامة بدعامة JJ طويلة الأمد أو فغر الكلية (لغير المرشّحين للجراحة)',
          'الإصلاح طرف-لطرف/إعادة الزرع في التضيّق القصير',
          'الزرع الذاتي (في حالات معقّدة مختارة)',
          'استئصال الكلية (فقط لكلية غير عاملة، كملاذ أخير)'
        ],
        price: {
          from: 0,
          to: 0,
          currency: 'EUR',
          disclaimer: 'لا يُقدَّم نطاق سعر ثابت في هذه الفئة؛ يُبلَّغ السعر بعد تقييم الملف، وفق تعقيد الحالة والتقنية المطلوبة.'
        },
        packageIncludes: [
          'العملية والإقامة في المستشفى',
          'التخدير والفحوصات المتقدمة',
          'مشمول عند الحاجة إلى طُعم/إحلال',
          'الدعامة وإزالتها',
          'التنقلات والإقامة',
          'مترجم طبي ومنسّق',
          'متابعة الوظيفة طويلة الأمد'
        ],
        faqs: [
          { q: 'لديّ تضيّق حالبي طويل وقيل لي "لا يمكن إجراؤه"؛ هل توجد خيارات؟', a: 'يمكن إصلاح التضيّقات طويلة المقطع في معظم الحالات بتقنيات متقدّمة مثل طُعم الغشاء المخاطي للخد أو الإحلال اللفائفي. يُقيَّم ملفك وتُوضَع خطة تحافظ على الكلية.' },
          { q: 'هل يمكن إعادة المحاولة بعد إجراء فاشل؟', a: 'نعم؛ إعادة البناء (redo) بعد إصابة علاجية المنشأ أو إصلاح فاشل من مجالات خبرة هذا المركز. وتُخطَّط تقنيات محافِظة على الكلية رغم النسيج الندبي.' },
          { q: 'كم يستغرق التعافي والمتابعة؟', a: 'فترة المبيت والدعامة أطول من العلاجات الأخرى؛ ويُقيَّم النجاح طويل الأمد بمتابعة منتظمة للوظيفة. والمتابعة حاسمة في هذه الحالات.' }
        ]
      },
      de: {
        title: 'Harnleiter-Rekonstruktion (langstreckige Striktur/Verletzung)',
        summary: 'Fortgeschrittene Rekonstruktion bei langstreckiger Harnleiterstriktur oder -verletzung: Techniken wie Mundschleimhaut-Transplantat und Ileuminterposition.',
        metaTitle: 'Harnleiter-Rekonstruktion | Chirurgie langstreckiger Harnleiterstriktur',
        metaDescription: 'Fortgeschrittene Rekonstruktion bei langstreckiger Harnleiterstriktur/-verletzung: Mundschleimhaut-Transplantat, Ileuminterposition, Harnleiter-Reimplantation. Erfahrung mit komplexen und Redo-Fällen.',
        definition: [
          'Der Harnleiter ist der Kanal, der Niere und Blase verbindet. Eine langstreckige Striktur oder Verletzung kann nach Steinchirurgie, Becken-/gynäkologischer Operation, Strahlentherapie oder Trauma entstehen und die Niere gefährden.',
          'Während kurze Strikturen mit einfachen Techniken repariert werden, erfordern langstreckige Strikturen eine fortgeschrittene Rekonstruktion. Techniken wie Mundschleimhaut-Transplantat, Ileuminterposition (Überbrückung mit einem Darmsegment) oder das Herabholen der Niere werden in erfahrenen Zentren durchgeführt, um die Niere zu erhalten.'
        ],
        surgeonExperience: {
          caseVolume: '' /* TODO-DOGRULA: caseStats.ts */,
          note: 'Die Fallzahl spiegelt die gesamte chirurgische Erfahrung von Doz. Dr. Müslüm Ergün in diesem Bereich wider.'
        },
        expertise: {
          redoRate: 'Ein erheblicher Teil der Fälle sind Redo-Zuweisungen nach einem fehlgeschlagenen Versuch oder einer iatrogenen Verletzung in einem anderen Zentrum.',
          complexCase: 'Zu den komplexen Fällen zählen langstreckige/panureterale Striktur, Zustand nach Strahlentherapie und Patienten mit Einzelniere.',
          advancedTechnique: 'Ureteroplastik mit Mundschleimhaut-Transplantat, Ileuminterposition und robotergestützte Rekonstruktion.'
        },
        timeline: [
          { when: 'Aus der Ferne', title: 'Aktenprüfung', body: 'Ihre CT-Urographie, Szintigraphie und früheren OP-Berichte werden detailliert geprüft; Strikturlänge und Nierenfunktion werden bestimmt.' },
          { when: 'Tag 1–2', title: 'Ankunft & erweiterte Tests', body: 'Untersuchung, bei Bedarf Ureteroskopie/Bildgebung; der Rekonstruktionsplan wird finalisiert.' },
          { when: 'Tag 3', title: 'Operation', body: 'Transplantat, Interposition oder Reimplantation je nach Segmentlänge; meist mehrtägiger Aufenthalt.' },
          { when: 'Danach', title: 'Stent-/Katheterphase', body: 'Ein JJ-Stent und/oder Katheter bleibt eine Weile; die Drainage wird per Kontrollbildgebung bestätigt.' },
          { when: 'Nachsorge', title: 'Langfristige Nachsorge', body: 'Funktion und Drainage werden mit Szintigraphie/Ultraschall überwacht; die Nachsorge ist in diesen Fällen besonders entscheidend.' }
        ],
        risks: [
          'Rezidiv der Striktur und Bedarf an zusätzlichem Eingriff',
          'Darmbedingte metabolische/Schleim-Effekte bei der Ileuminterposition',
          'Urinleck, Infektion und Blutung',
          'Veränderung der Nierenfunktion'
        ],
        alternatives: [
          'Erhaltung mit langfristigem JJ-Stent oder Nephrostomie (für nicht operationsfähige Patienten)',
          'End-zu-End-Reparatur/Reimplantation bei kurzen Strikturen',
          'Autotransplantation (in ausgewählten komplexen Fällen)',
          'Nephrektomie (nur bei nicht funktionierender Niere, letztes Mittel)'
        ],
        price: {
          from: 0,
          to: 0,
          currency: 'EUR',
          disclaimer: 'In dieser Kategorie wird keine feste Preisspanne genannt; der Preis wird nach einer Aktenprüfung entsprechend Fallkomplexität und erforderlicher Technik mitgeteilt.'
        },
        packageIncludes: [
          'Operation und Krankenhausaufenthalt',
          'Anästhesie und erweiterte Untersuchungen',
          'Inbegriffen, wenn Transplantat/Interposition erforderlich ist',
          'Stent und dessen Entfernung',
          'Transfers und Unterkunft',
          'Medizinischer Dolmetscher und Koordinator',
          'Langfristige Funktionsnachsorge'
        ],
        faqs: [
          { q: 'Ich habe eine lange Harnleiterstriktur und mir wurde gesagt, es „geht nicht“; gibt es Optionen?', a: 'Langstreckige Strikturen lassen sich in den meisten Fällen mit fortgeschrittenen Techniken wie Mundschleimhaut-Transplantat oder Ileuminterposition reparieren. Ihre Akte wird bewertet und ein nierenerhaltender Plan erstellt.' },
          { q: 'Kann es nach einem fehlgeschlagenen Eingriff erneut versucht werden?', a: 'Ja; eine Redo-Rekonstruktion nach iatrogener Verletzung oder fehlgeschlagenem Verschluss ist ein Erfahrungsbereich dieses Zentrums. Trotz Narbengewebe werden nierenerhaltende Techniken geplant.' },
          { q: 'Wie lange dauern Genesung und Nachsorge?', a: 'Aufenthalt und Stentphase sind länger als bei anderen Behandlungen; der langfristige Erfolg wird mit regelmäßiger Funktionsnachsorge beurteilt. Die Nachsorge ist in diesen Fällen entscheidend.' }
        ]
      },
      ru: {
        title: 'Реконструкция мочеточника (протяжённая стриктура/повреждение)',
        summary: 'Продвинутая реконструкция при протяжённой стриктуре или повреждении мочеточника: методики, такие как трансплантат слизистой щеки и кишечная интерпозиция.',
        metaTitle: 'Реконструкция мочеточника | Хирургия протяжённой стриктуры мочеточника',
        metaDescription: 'Продвинутая реконструкция при протяжённой стриктуре/повреждении мочеточника: трансплантат слизистой щеки, кишечная интерпозиция, реимплантация мочеточника. Опыт в сложных и повторных случаях.',
        definition: [
          'Мочеточник — канал, соединяющий почку с мочевым пузырём. Протяжённая стриктура или повреждение могут возникнуть после операции по поводу камней, тазовой/гинекологической операции, лучевой терапии или травмы и угрожают почке.',
          'Короткие стриктуры устраняются простыми методами, а протяжённые требуют продвинутой реконструкции. Такие методики, как трансплантат слизистой щеки, кишечная интерпозиция (замещение сегментом кишки) или низведение почки, выполняются в опытных центрах для сохранения почки.'
        ],
        surgeonExperience: {
          caseVolume: '' /* TODO-DOGRULA: caseStats.ts */,
          note: 'Число операций отражает общий хирургический опыт доцента д-ра Мюслюма Эргюна в этой области.'
        },
        expertise: {
          redoRate: 'Значительная часть случаев — повторные (redo) обращения после неудачной попытки или ятрогенного повреждения в другом центре.',
          complexCase: 'К сложным случаям относятся протяжённая/тотальная стриктура мочеточника, состояние после лучевой терапии и пациенты с единственной почкой.',
          advancedTechnique: 'Уретеропластика трансплантатом слизистой щеки, кишечная интерпозиция и роботическая реконструкция.'
        },
        timeline: [
          { when: 'Удалённо', title: 'Оценка документов', body: 'Подробно изучаются КТ-урография, сцинтиграфия и записи предыдущих операций; определяются длина стриктуры и функция почки.' },
          { when: 'День 1–2', title: 'Прибытие и расширенное обследование', body: 'Осмотр, при необходимости уретероскопия/визуализация; финализируется план реконструкции.' },
          { when: 'День 3', title: 'Операция', body: 'Трансплантат, интерпозиция или реимплантация в зависимости от длины сегмента; обычно пребывание несколько дней.' },
          { when: 'После', title: 'Период стента/катетера', body: 'Стент JJ и/или катетер остаются на время; дренаж подтверждается контрольной визуализацией.' },
          { when: 'Наблюдение', title: 'Долгосрочное наблюдение', body: 'Функция и дренаж контролируются сцинтиграфией/УЗИ; наблюдение особенно критично в этих случаях.' }
        ],
        risks: [
          'Рецидив стриктуры и необходимость дополнительного вмешательства',
          'Связанные с кишкой метаболические/слизистые эффекты при кишечной интерпозиции',
          'Подтекание мочи, инфекция и кровотечение',
          'Изменение функции почки'
        ],
        alternatives: [
          'Поддержание длительным стентом JJ или нефростомой (для неоперабельных пациентов)',
          'Реконструкция конец-в-конец/реимплантация при коротких стриктурах',
          'Аутотрансплантация (в отдельных сложных случаях)',
          'Нефрэктомия (только при нефункционирующей почке, крайняя мера)'
        ],
        price: {
          from: 0,
          to: 0,
          currency: 'EUR',
          disclaimer: 'В этой категории фиксированный диапазон цен не указывается; цена сообщается после оценки документов, в зависимости от сложности случая и необходимой методики.'
        },
        packageIncludes: [
          'Операция и пребывание в стационаре',
          'Анестезия и расширенное обследование',
          'Включено при необходимости трансплантата/интерпозиции',
          'Стент и его удаление',
          'Трансферы и проживание',
          'Медицинский переводчик и координатор',
          'Долгосрочное наблюдение функции'
        ],
        faqs: [
          { q: 'У меня длинная стриктура мочеточника, и мне сказали, что «это невозможно»; есть ли варианты?', a: 'Протяжённые стриктуры в большинстве случаев можно устранить продвинутыми методиками, такими как трансплантат слизистой щеки или кишечная интерпозиция. Ваши документы оцениваются, и составляется почкосохраняющий план.' },
          { q: 'Можно ли повторить попытку после неудачной операции?', a: 'Да; повторная (redo) реконструкция после ятрогенного повреждения или неудачной пластики — область опыта этого центра. Несмотря на рубцовую ткань, планируются почкосохраняющие методики.' },
          { q: 'Сколько длятся восстановление и наблюдение?', a: 'Пребывание и период стента дольше, чем при других видах лечения; долгосрочный успех оценивается регулярным наблюдением функции. Наблюдение критично в этих случаях.' }
        ]
      },
      fr: {
        title: 'Reconstruction urétérale (sténose ou lésion étendue)',
        summary: 'Reconstruction avancée pour une sténose ou une lésion urétérale étendue : techniques telles que la greffe de muqueuse buccale et l’interposition iléale.',
        metaTitle: 'Reconstruction urétérale | Chirurgie des sténoses urétérales étendues',
        metaDescription: 'Reconstruction avancée pour sténose ou lésion urétérale étendue : greffe de muqueuse buccale, interposition iléale, réimplantation urétérale. Expérience des cas complexes et des reprises.',
        definition: [
          'L’uretère est le conduit qui relie le rein à la vessie. Une sténose ou une lésion étendue peut survenir après une chirurgie de calcul, une chirurgie pelvienne ou gynécologique, une radiothérapie ou un traumatisme, et met le rein en danger.',
          'Si les sténoses courtes se réparent par des techniques simples, les sténoses étendues nécessitent une reconstruction avancée. Des techniques telles que la greffe de muqueuse buccale, l’interposition iléale (pontage par un segment intestinal) ou l’abaissement rénal sont réalisées dans des centres expérimentés afin de préserver le rein.'
        ],
        surgeonExperience: {
          caseVolume: '' /* TODO-DOGRULA: caseStats.ts */,
          note: 'Le nombre d’interventions reflète l’expérience chirurgicale totale du Dr Müslüm Ergün dans ce domaine.'
        },
        expertise: {
          redoRate: 'Une part importante des cas sont des reprises adressées après un échec ou une lésion iatrogène survenus dans un autre centre.',
          complexCase: 'Les sténoses étendues ou pan-urétérales, les situations post-radiques et les patients à rein unique relèvent des cas complexes.',
          advancedTechnique: 'Urétéroplastie par greffe de muqueuse buccale, interposition iléale et reconstruction assistée par robot.'
        },
        timeline: [
          { when: 'À distance', title: 'Évaluation du dossier', body: 'Votre uro-scanner, votre scintigraphie rénale et vos comptes rendus opératoires antérieurs sont examinés en détail ; la longueur de la sténose et la fonction rénale sont déterminées.' },
          { when: 'Jours 1–2', title: 'Arrivée et examens avancés', body: 'Examen clinique, urétéroscopie ou imagerie si nécessaire ; le plan de reconstruction est arrêté.' },
          { when: 'Jour 3', title: 'Intervention', body: 'Greffe, interposition ou réimplantation selon la longueur du segment ; séjour généralement de plusieurs jours.' },
          { when: 'Ensuite', title: 'Période de sonde', body: 'Une sonde JJ et/ou une sonde vésicale restent en place un certain temps ; le drainage est confirmé par imagerie de contrôle.' },
          { when: 'Suivi', title: 'Suivi à long terme', body: 'La fonction et le drainage sont surveillés par scintigraphie et échographie ; le suivi est particulièrement déterminant dans ces cas.' }
        ],
        risks: [
          'Récidive de la sténose et nécessité d’un geste complémentaire',
          'Effets métaboliques et production de mucus liés au segment intestinal en cas d’interposition iléale',
          'Fuite urinaire, infection et saignement',
          'Modification de la fonction rénale'
        ],
        alternatives: [
          'Entretien par sonde JJ au long cours ou néphrostomie (patients non opérables)',
          'Réparation bout à bout ou réimplantation pour les sténoses courtes',
          'Autotransplantation (dans des cas complexes sélectionnés)',
          'Néphrectomie (uniquement pour un rein non fonctionnel, en dernier recours)'
        ],
        price: {
          from: 0,
          to: 0,
          currency: 'EUR',
          disclaimer: 'Aucune fourchette de prix fixe n’est indiquée dans cette catégorie ; le prix est communiqué après évaluation du dossier, selon la complexité du cas et la technique requise.'
        },
        packageIncludes: [
          'Intervention et séjour hospitalier',
          'Anesthésie et examens avancés',
          'Inclus lorsqu’une greffe ou une interposition est nécessaire',
          'Sonde et son retrait',
          'Transferts et hébergement',
          'Interprète médical et coordinateur',
          'Suivi fonctionnel à long terme'
        ],
        faqs: [
          { q: 'J’ai une sténose urétérale étendue et on m’a dit que « ce n’était pas opérable » ; existe-t-il des solutions ?', a: 'Les sténoses étendues peuvent être réparées dans la plupart des cas grâce à des techniques avancées telles que la greffe de muqueuse buccale ou l’interposition iléale. Votre dossier est évalué et un plan préservant le rein est établi.' },
          { q: 'Une nouvelle tentative est-elle possible après un échec ?', a: 'Oui ; la reconstruction de reprise après une lésion iatrogène ou une réparation ayant échoué fait partie des domaines d’expérience de ce centre. Des techniques préservant le rein sont planifiées malgré le tissu cicatriciel.' },
          { q: 'Combien de temps durent la récupération et le suivi ?', a: 'Le séjour et la durée de sondage sont plus longs que pour les autres traitements ; le succès à long terme se juge par un suivi fonctionnel régulier, déterminant dans ces cas.' }
        ]
      }
    }
  }
];

// Derleme/başlangıç sırasında içerik bütünlüğünü zorunlu kıl: eksik veya boş
// bir alan varsa build burada net bir mesajla kırılır (sessizce boş geçmez).
assertTreatmentsValid(treatments);

/**
 * YAYINDAKİ tedaviler — taslaklar (draft: true) hariç.
 * Liste, menü, sitemap ve statik üretim DAİMA bunu kullanır;
 * ham "treatments" dizisi yalnızca içerik yönetimi içindir.
 */
export const publishedTreatments = treatments.filter((t) => !t.draft);

/** Slug ile tedavi getirir. Taslaklar yalnızca includeDrafts ile döner. */
export function getTreatment(
  slug: string,
  includeDrafts = false
): Treatment | undefined {
  const t = treatments.find((x) => x.slug === slug);
  if (!t) return undefined;
  if (t.draft && !includeDrafts) return undefined;
  return t;
}

/** Yayındaki tedavi slug'ları (statik üretim ve sitemap için). */
export const treatmentSlugs = publishedTreatments.map((t) => t.slug);

/** Belirli kategorideki YAYINDAKİ tedaviler. */
export function treatmentsByCategory(category: TreatmentCategory): Treatment[] {
  return publishedTreatments.filter((t) => treatmentCategory(t) === category);
}

/** Bir hub'ın yayındaki alt sayfaları. */
export function childTreatments(parentSlug: string): Treatment[] {
  return publishedTreatments.filter((t) => t.parent === parentSlug);
}

/** Genel (fiyat/hacim odaklı) tedaviler — ana sayfa/menü kart gridleri için. */
export const generalTreatments = treatmentsByCategory('general');

/** Rekonstrüktif (uzmanlık odaklı) tedaviler. */
export const reconstructiveTreatments = treatmentsByCategory('reconstructive');
