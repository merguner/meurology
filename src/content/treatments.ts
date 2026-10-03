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
     * TASLAK — cerrah onayına sunuldu.
     * HASSAS SAYFA. Prompt m.1: uydurma yok, başarı garantisi yasak.
     * Prompt m.4.2/9: oran verilirken literatür kaynağı şart.
     * Yönetmelik: "talep yaratma" riski nedeniyle metin bilinçli olarak
     * TANITIM DEĞİL BİLGİLENDİRME tonunda; kılavuzların kozmetik amaçlı
     * büyütmeyi önermediği AÇIKÇA yazıldı ve psikolojik değerlendirme
     * öne çıkarıldı. Bu, hastayı yanlış beklentiden koruyan tek dürüst yoldur.
     * Kaynak: EAU Sexual and Reproductive Health kılavuzu.
     */
    draft: true,
    slug: 'penis-buyutme',
    parent: 'androloji',
    lastReviewed: '2026-10-04',
    icon: 'andrology',
    offersConsultation: true,
    i18n: {
      tr: {
        title: 'Penis Büyütme İşlemleri: Ne Mümkün, Ne Değil',
        summary:
          'Boy ve çevre artırma yöntemleri, kanıt düzeyleri, gerçek tıbbi endikasyonlar ve riskler üzerine dürüst bir bilgilendirme.',
        metaTitle: 'Penis Büyütme: Yöntemler, Kanıt Düzeyi ve Riskler',
        metaDescription:
          'Penis büyütme işlemleri hakkında kanıta dayalı bilgilendirme: hangi yöntemler var, kılavuzlar ne diyor, kimler için tıbbi endikasyon vardır ve riskler nelerdir.',
        quickFacts: {
          duration: 'Yönteme göre 45–120 dakika',
          anesthesia: 'Yönteme göre lokal, sedasyon veya genel',
          hospitalStay: 'Günübirlik veya 1 gece',
          stayInTurkey: '7–10 gün',
          returnToWork: '1–2 hafta',
          flightClearance: '7–10. gün'
        },
        definition: [
          'Bu sayfa, penis büyütme işlemleri hakkında bir tanıtım değil, karar vermenize yardımcı olacak dürüst bir bilgilendirmedir. Çünkü bu alan, beklentilerin gerçeklerden en çok uzaklaştığı ve hastaların en çok yanlış yönlendirildiği alanlardan biridir.',
          'ÖNCE EN ÖNEMLİ BİLGİ: Avrupa Üroloji Derneği dâhil başlıca ürolojik kılavuzlar, penis boyu NORMAL SINIRLAR İÇİNDE olan erkeklerde kozmetik amaçlı büyütme işlemlerini rutin olarak ÖNERMEMEKTEDİR. Bu işlemlerin etkinliğine ve uzun dönem güvenliğine ilişkin kanıt düzeyi sınırlıdır. Bu, işlemlerin hiçbir koşulda yapılmadığı anlamına gelmez; seçilmiş ve doğru değerlendirilmiş durumlarla sınırlı olduğu anlamına gelir.',
          'Başvuran erkeklerin önemli bir bölümünde ölçüm normal aralıktadır. Buna rağmen kişi boyunu yetersiz algılıyorsa, bu durum "penil dismorfofobi" olarak adlandırılır ve cerrahi değil, psikoseksüel değerlendirme gerektirir. Ameliyat, algıya dayalı bir rahatsızlığı çözmez; çoğu zaman memnuniyetsizliği sürdürür.',
          'Gerçek tıbbi endikasyonlar ayrıdır ve bunlar cerrahi değerlendirmeyi hak eder: mikropenis, gömük penis (buried penis), travma veya önceki cerrahi sonrası oluşan boy kaybı, Peyronie hastalığına bağlı kısalma ve eğrilik.',
          'Uygulanan başlıca yaklaşımlar şunlardır. BOY İÇİN: askı bağının (suspansuar ligament) gevşetilmesi — penisin gövde içinde kalan kısmını dışarı çıkararak sarkık hâldeki görünür boyu artırmayı hedefler; ereksiyon hâlindeki boyu artırmaz. ÇEVRE İÇİN: yağ enjeksiyonu, dermal greft veya dolgu maddeleri — kalınlık artışı hedeflenir, ancak emilim, asimetri ve nodül oluşumu görülebilir.'
        ],
        eligibility: {
          suitable: [
            'Mikropenis tanısı konmuş, ölçümle doğrulanmış hastalar',
            'Gömük penis (buried penis) nedeniyle işlevsel ve hijyenik sorun yaşayanlar',
            'Travma veya geçirilmiş cerrahi sonrası boy kaybı gelişen hastalar',
            'Peyronie hastalığına bağlı kısalma ve eğriliği olan, bu nedenle rekonstrüktif cerrahi planlanan hastalar',
            'Beklentileri gerçekçi olan ve psikoseksüel değerlendirmeden geçmiş, seçilmiş hastalar'
          ],
          notSuitable: [
            'Ölçümü normal aralıkta olan ve yalnızca kozmetik kaygıyla başvuran erkekler — öncelik psikoseksüel danışmanlıktır',
            'Penil dismorfofobi düşündüren, algı kaynaklı memnuniyetsizliği olan hastalar',
            'Belirgin boy artışı veya cinsel performans artışı bekleyen hastalar — bu işlemler bunu vaat etmez',
            'Aktif enfeksiyonu veya yara iyileşmesini bozacak kontrolsüz hastalığı olanlar',
            'Tedavi edilmemiş erektil disfonksiyonu olan hastalar — önce sertleşme sorunu ele alınır'
          ]
        },
        technology: [
          'Askı bağı gevşetme (suspansuar ligament) — sarkık boyda görünür artış hedefi',
          'Otolog yağ enjeksiyonu — kendi yağ dokusuyla çevre artışı',
          'Dermal greft uygulaması',
          'Peyronie veya gömük penis olgularında rekonstrüktif teknikler'
        ],
        surgeonExperience: {
          caseVolume: '',
          note:
            'Doç. Dr. Müslüm Ergün androloji ve rekonstrüktif üroloji alanlarında çalışmaktadır. Bu başlıkta yaklaşım, öncelikle doğru endikasyonun belirlenmesi; cerrahi yalnızca gerçekten uygun olgularda gündeme gelir.'
        },
        timeline: [
          {
            when: 'Uzaktan',
            title: 'Gizli ön değerlendirme',
            body: 'Şikâyetiniz, beklentiniz ve varsa önceki işlemler gizlilik içinde değerlendirilir. Bu aşamada çoğu zaman en yararlı çıktı, cerrahinin size uygun olup olmadığının netleşmesidir.'
          },
          {
            when: '1. gün',
            title: 'Muayene, ölçüm ve beklenti görüşmesi',
            body: 'Standart ölçüm yapılır, sertleşme işlevi değerlendirilir ve beklentiler açıkça konuşulur. Gerekirse psikoseksüel danışmanlık önerilir.'
          },
          {
            when: '2. gün',
            title: 'İşlem (uygun bulunursa)',
            body: 'Seçilen yönteme göre lokal, sedasyon veya genel anestezi altında uygulanır. Günübirlik veya bir gecelik yatış gerekebilir.'
          },
          {
            when: '7–10. gün',
            title: 'Kontrol ve dönüş',
            body: 'Yara kontrolü, ödem değerlendirmesi ve dönüş onayı. Sonucun oturması haftalar alır; erken dönem görünüm nihai sonuç değildir.'
          },
          {
            when: '3. ay',
            title: 'Sonuç değerlendirmesi',
            body: 'Özellikle yağ enjeksiyonunda emilim nedeniyle sonuç bu dönemde netleşir; gerekirse ek seans değerlendirilir.'
          }
        ],
        risks: [
          'Beklentinin karşılanmaması — bu alanda en sık bildirilen sorun memnuniyetsizliktir',
          'Yara izi ve ciltte sertlik',
          'Yağ enjeksiyonunda emilim, asimetri ve nodül oluşumu; ek seans gerekebilir',
          'Duyu değişikliği veya azalması',
          'Enfeksiyon ve yara iyileşme sorunları',
          'Askı bağı gevşetmede ereksiyon açısının aşağı kayması ve stabilitede azalma',
          'Dolgu maddelerinde göç (migrasyon) ve granülom; kalıcı dolgular ek risk taşır',
          'Nadiren erektil işlevin olumsuz etkilenmesi'
        ],
        alternatives: [
          'Psikoseksüel danışmanlık — ölçümü normal olan hastalarda ilk seçenek',
          'Kilo verme ve pubik yağ dokusunun azaltılması — gömük görünümde belirgin fayda sağlayabilir',
          'Erektil disfonksiyon varsa önce onun tedavisi — sertlik arttığında algılanan boy da artar',
          'Peyronie hastalığında eğrilik düzeltici cerrahi',
          'Hiçbir işlem yapmamak — normal ölçümlerde bu, çoğu zaman en doğru seçenektir'
        ],
        comparison: {
          title: 'Yöntemlere göre hedef, kanıt düzeyi ve başlıca risk',
          columns: ['Yöntem', 'Hedef', 'Kanıt düzeyi', 'Başlıca risk'],
          rows: [
            {
              label: 'Askı bağı gevşetme',
              values: ['Sarkık hâldeki görünür boy', 'Sınırlı; ereksiyon boyunu artırmaz', 'Ereksiyon açısının düşmesi']
            },
            {
              label: 'Yağ enjeksiyonu',
              values: ['Çevre (kalınlık)', 'Sınırlı; emilim değişken', 'Asimetri, nodül, ek seans ihtiyacı']
            },
            {
              label: 'Dermal greft',
              values: ['Çevre (kalınlık)', 'Sınırlı; seçilmiş olgular', 'Greft büzüşmesi, iz']
            },
            {
              label: 'Dolgu maddeleri',
              values: ['Çevre (kalınlık)', 'Sınırlı; kalıcı dolgularda risk artar', 'Migrasyon, granülom']
            },
            {
              label: 'Rekonstrüktif cerrahi',
              values: ['Gömük penis, Peyronie, travma', 'Tıbbi endikasyon varsa yerleşik', 'Genel cerrahi riskleri']
            }
          ],
          note:
            'Kozmetik amaçlı yöntemlerin kanıt düzeyi sınırlıdır ve kılavuzlar bunları normal ölçümlü erkeklerde rutin olarak önermez. Tıbbi endikasyon bulunan rekonstrüktif girişimler bu tablodan ayrı değerlendirilir.'
        },
        recovery: [
          {
            period: '1. hafta',
            body: 'Ödem ve morluk beklenen bulgulardır. Ağır aktivite ve cinsel ilişkiden kaçınılır; yara bakımı düzenli yapılır.'
          },
          {
            period: '2–3. hafta',
            body: 'Ödem azalır, masa başı işe dönüş genellikle mümkündür. Görünüm bu dönemde henüz nihai değildir.'
          },
          {
            period: '4–6. hafta',
            body: 'Hekim onayıyla cinsel aktiviteye kademeli dönüş değerlendirilir.'
          },
          {
            period: '3. ay',
            body: 'Özellikle yağ enjeksiyonunda emilim tamamlanır ve sonuç netleşir. Gerekirse ek seans bu aşamada konuşulur.'
          }
        ],
        price: {
          from: 0,
          to: 0,
          currency: 'EUR',
          disclaimer:
            'Fiyat seçilen yönteme ve kullanılan malzemeye göre değişir. Teklif, ancak cerrahi uygunluk doğrulandıktan sonra verilir.'
        },
        packageIncludes: [
          'Değerlendirme, ölçüm ve beklenti görüşmesi',
          'İşlem ve anestezi',
          'Gerekliyse yatış',
          'Havalimanı–hastane–otel transferleri',
          'Konaklama (hasta + 1 refakatçi)',
          'Gizlilik esaslı koordinasyon ve tıbbi tercüman',
          'Kontrol ve online takip'
        ],
        faqs: [
          {
            q: 'Penis boyum normal mi, nasıl anlarım?',
            a: 'Ölçüm standart koşullarda, gergin (streç) hâlde ve kemikten uca yapılır. Literatürde normal kabul edilen geniş bir aralık vardır ve başvuran erkeklerin önemli bir bölümünde ölçüm bu aralığın içindedir. Doğru ölçüm, çoğu zaman gereksiz bir ameliyattan koruyan ilk adımdır.'
          },
          {
            q: 'Kılavuzlar bu işlemleri neden önermiyor?',
            a: 'Çünkü kozmetik amaçlı büyütme işlemlerinin etkinliğine ve uzun dönem güvenliğine dair kanıt düzeyi sınırlıdır; buna karşılık memnuniyetsizlik ve komplikasyon bildirimleri azımsanmayacak düzeydedir. Bu nedenle normal ölçümlü erkeklerde rutin olarak önerilmez.'
          },
          {
            q: 'Askı bağı gevşetme ereksiyon hâlindeki boyu artırır mı?',
            a: 'Hayır. Bu işlem sarkık hâldeki görünür boyu artırmayı hedefler; ereksiyon hâlindeki boyu uzatmaz. Ayrıca bağın gevşetilmesi ereksiyon açısının aşağı kaymasına yol açabilir.'
          },
          {
            q: 'Yağ enjeksiyonunun sonucu kalıcı mı?',
            a: 'Enjekte edilen yağın bir kısmı zamanla emilir ve emilim oranı kişiden kişiye değişir. Sonuç genellikle üçüncü ayda netleşir; bazı hastalarda ek seans gerekebilir. Asimetri ve nodül oluşumu bildirilen sorunlardandır.'
          },
          {
            q: 'Cinsel performansım artar mı?',
            a: 'Hayır. Bu işlemler sertleşme kalitesini, cinsel isteği veya performansı artırmaz. Sertleşme sorununuz varsa çözüm bu işlemler değil, erektil disfonksiyon tedavisidir.'
          },
          {
            q: 'Eşim veya partnerim açısından fark eder mi?',
            a: 'Literatürde partner memnuniyetinin boyla doğrudan ilişkili olmadığı; iletişim, cinsel işlev ve ilişki niteliğinin daha belirleyici olduğu bildirilmektedir. Beklentilerinizi bu çerçevede konuşmanızı öneririz.'
          },
          {
            q: 'Psikolojik değerlendirme neden isteniyor?',
            a: 'Çünkü başvuruların bir bölümünde sorun ölçümde değil, algıdadır. Bu durumda cerrahi memnuniyetsizliği çözmez, çoğu zaman sürdürür. Psikoseksüel değerlendirme, sizi gereksiz ve geri dönüşü zor bir işlemden korumayı amaçlar.'
          },
          {
            q: 'Hiçbir şey yaptırmamak bir seçenek mi?',
            a: 'Evet ve ölçümü normal olan erkeklerde çoğu zaman en doğru seçenektir. Bunu açıkça söylememizin nedeni, bu alanda hastaların en çok yanlış yönlendirildiği konunun bu olmasıdır.'
          },
          {
            q: 'Başvurum gizli kalır mı?',
            a: 'Evet. Androloji başvurularında tüm görüşme ve koordinasyon gizlilik esasıyla yürütülür. Kliniğe gelmeden önce ücretli online danışmanlık ile birebir görüşebilirsiniz.'
          }
        ],
        sources: [
          {
            label:
              'EAU Guidelines on Sexual and Reproductive Health — Avrupa Üroloji Derneği',
            url: 'https://uroweb.org/guidelines/sexual-and-reproductive-health'
          }
        ]
      }
    }
  },
  {
    /**
     * Cerrah tarafından 4 Ekim 2026 tarihinde onaylandı ve yayına alındı.
     * Kaynaklar: EAU Sexual and Reproductive Health kılavuzu +
     * J Sex Med 2026;23(2):qdag006 (doku koruyucu teknikler meta-analizi;
     * cerrahın kendi yayını DEĞİL, destekleyici literatür).
     * Aquadisseksiyon: rutin değil, seçilmiş ve uygun olgularda uygulanıyor.
     */
    slug: 'penil-protez',
    parent: 'androloji',
    lastReviewed: '2026-10-04',
    icon: 'andrology',
    offersConsultation: true,
    i18n: {
      tr: {
        title: 'Penil Protez (Mutluluk Çubuğu) Ameliyatı',
        summary:
          'İlaç ve diğer tedavilere yanıt vermeyen sertleşme sorununda, penis içine yerleştirilen cihazla kalıcı çözüm.',
        metaTitle: 'Penil Protez Ameliyatı | Şişirilebilir ve Bükülebilir Protez',
        metaDescription:
          'Penil protez ameliyatı: kimlere uygun, protez tipleri, riskler, iyileşme süreci ve sık sorulan sorular. Mahremiyet önceliğiyle yürütülen süreç.',
        quickFacts: {
          duration: '60–90 dakika',
          anesthesia: 'Genel veya spinal anestezi',
          hospitalStay: '1 gece',
          stayInTurkey: '7–10 gün',
          catheter: '1 gün',
          returnToWork: '1–2 hafta (masa başı)',
          flightClearance: '7–10. gün'
        },
        definition: [
          'Erektil disfonksiyon, cinsel ilişki için yeterli sertleşmenin sağlanamaması veya sürdürülememesidir. Tedavide basamaklı bir yaklaşım izlenir: önce yaşam tarzı ve varsa hormonal düzenleme, ardından ağızdan alınan ilaçlar (PDE5 inhibitörleri), sonra penis içi enjeksiyon veya vakum cihazı denenir.',
          'Penil protez, bu basamakların yeterli sonuç vermediği durumlarda gündeme gelen cerrahi çözümdür. Penisin sertleşmeden sorumlu süngerimsi dokularının (korpus kavernozum) içine, sertliği sağlayan silindirler yerleştirilir. Cihaz, hastanın kendi kontrolünde ve istediği zaman kullanabileceği bir sertlik sağlar.',
          'ÖNEMLİ VE KALICI BİR KARAR: Protez yerleştirilmesi geri alınabilir bir işlem değildir. Klasik yöntemde korpus kavernozum metal dilatatörlerle seri biçimde genişletilir; bu sırada sertleşmeden sorumlu doku önemli ölçüde zarar görür ve ameliyattan sonra doğal (kendiliğinden) ereksiyon beklenmez. Protez çıkarılsa bile önceki duruma dönülemez.',
          'Son yıllarda bu noktada bir ayrım oluşmuştur. Kavernöz dokuyu koruyan (cavernous-sparing) yaklaşımlar, genişletme sırasında kavernöz dokuyu ve arteri olabildiğince korumayı hedefler. 2026 tarihli bir sistematik derleme ve meta-analiz, doku koruyucu teknikle ameliyat edilen hastalarda kavernöz arter korunmasının ve ameliyat sonrası kısmi dolgunluğun (rezidüel tümesans) klasik seri genişletmeye göre belirgin biçimde daha sık görüldüğünü, komplikasyon oranlarının ise iki teknik arasında istatistiksel olarak benzer olduğunu bildirmiştir. Bu kanıt 4 randomize çalışma ve toplam 193 hastaya dayanmaktadır; yani umut verici olmakla birlikte hasta sayısı henüz sınırlıdır.',
          'Bu bulgu şu anlama GELMEZ: protez takıldıktan sonra cihazsız, ilişkiye yetecek bir ereksiyonunuz olacağı. Korunan şey kısmi dolgunluk ve damar işlevidir; sertliği yine protez sağlar. Karar yine kalıcıdır. Bu nedenle penil protez, diğer tedavi seçenekleri gerçekten denendikten sonra ve beklentiler ayrıntılı konuşulduktan sonra önerilir.',
          'İki temel protez tipi vardır. Üç parçalı şişirilebilir protezde silindirler, skrotuma yerleştirilen küçük bir pompa ve karın içine konan bir sıvı rezervuarı bulunur; pompa sıkılarak sertlik sağlanır, işlem bitince sıvı geri boşaltılır ve penis yumuşak hâle döner. Bükülebilir (malleable) protezde ise penis sürekli yarı sert kalır ve elle istenen konuma getirilir.',
          'Avrupa Üroloji Derneği kılavuzları, uygun şekilde seçilmiş hastalarda penil protez cerrahisinin hasta ve eş memnuniyetinin yüksek bildirildiği bir tedavi olduğunu belirtir. Bu memnuniyetin en güçlü belirleyicisi, ameliyat öncesinde beklentilerin doğru konuşulmuş olmasıdır.',
          'AQUADİSSEKSİYON (SIVI YARDIMLI DİSEKSİYON): Yukarıda anlatılan doku koruyucu yaklaşımın bir uygulama biçimidir. Korpus kavernozumun içi metal dilatatörlerle mekanik olarak zorlanmak yerine, doku planları basınçlı sıvı verilerek ayrılır. Amaç, genişletme sırasında kavernöz dokuya, tünikaya ve üretraya binen mekanik zorlamayı azaltmaktır. Kliniğimizde bu teknik, değerlendirme sonrasında uygun bulunan seçilmiş olgularda kullanılmaktadır; her hastada rutin olarak uygulanmaz.',
          'Aquadisseksiyonun özellikle anlamlı olabildiği durumlar, korpus dokusunun sertleşip daraldığı (fibrotik) olgulardır: uzamış priapizm sonrası, daha önce yerleştirilmiş bir protezin enfeksiyon nedeniyle çıkarılmasının ardından veya ileri Peyronie hastalığında. Bu olgularda mekanik genişletme teknik olarak zordur ve yaralanma riski artar.'
        ],
        eligibility: {
          suitable: [
            'İlaç, enjeksiyon ve vakum cihazı denenmiş ancak yeterli sonuç alınamamış kalıcı sertleşme sorunu',
            'Radikal prostatektomi veya pelvik cerrahi sonrası gelişen, tedaviye dirençli erektil disfonksiyon',
            'Diyabete bağlı ileri damarsal erektil disfonksiyon',
            'Peyronie hastalığına erektil disfonksiyonun eşlik ettiği durumlar',
            'Şişirilebilir protez için: pompayı kullanabilecek el becerisine sahip olmak'
          ],
          notSuitable: [
            'Aktif enfeksiyon (idrar yolu, cilt veya sistemik) — enfeksiyon tedavi edilmeden ameliyat yapılmaz',
            'Kontrolsüz diyabet — enfeksiyon riskini artırır; önce kan şekeri düzenlenir',
            'Daha basit tedavi basamakları henüz denenmemiş hastalar',
            'Beklentileri gerçekçi olmayan hastalar — protez boy veya his artışı sağlamaz',
            'Nedeni ağırlıklı olarak psikolojik olan sertleşme sorunları — öncelik danışmanlık ve medikal tedavidir'
          ]
        },
        technology: [
          'Aquadisseksiyon (sıvı yardımlı diseksiyon) ile korpus genişletme',
          'Üç parçalı şişirilebilir protez (silindirler + skrotal pompa + rezervuar)',
          'Bükülebilir (malleable) protez',
          'Enfeksiyon riskini azaltmaya yönelik antibiyotik kaplı/emdirilmiş cihazlar',
          'Sıkı sterilite protokolü ve dokunmasız (no-touch) yerleştirme tekniği'
        ],
        surgeonExperience: {
          caseVolume: '',
          note:
            'Androloji ve penil protez cerrahisi, Doç. Dr. Müslüm Ergün’ün çalışma alanları arasındadır. Protez tipi, hastanın el becerisi, eşlik eden hastalıkları ve beklentileri değerlendirilerek birlikte seçilir.'
        },
        timeline: [
          {
            when: 'Uzaktan',
            title: 'Gizli ön değerlendirme',
            body: 'Şikâyetin süresi, daha önce denenmiş tedaviler, diyabet ve kalp-damar durumu, geçirilmiş ameliyatlar ve kullandığınız ilaçlar gizlilik içinde değerlendirilir.'
          },
          {
            when: '1. gün',
            title: 'Muayene ve beklenti görüşmesi',
            body: 'Yüz yüze muayene, gerekli tetkikler ve protez tipinin seçimi. Bu görüşmede cihazın ne sağladığı ve neyi sağlamadığı ayrıntılı konuşulur.'
          },
          {
            when: '2. gün',
            title: 'Ameliyat',
            body: 'İşlem genel veya spinal anestezi altında, genellikle 60–90 dakikada tamamlanır. Kesi skrotum veya penis kökü bölgesinden yapılır. Korpusların genişletilmesinde, seçilmiş ve uygun bulunan olgularda aquadisseksiyon tekniği kullanılır.'
          },
          {
            when: '3. gün',
            title: 'Sonda alımı ve taburculuk',
            body: 'Sonda genellikle ertesi gün alınır. Pansuman ve ilaç düzeni anlatılarak taburculuk planlanır.'
          },
          {
            when: '7–10. gün',
            title: 'Kontrol ve dönüş',
            body: 'Yara kontrolü yapılır, dikişler değerlendirilir ve dönüş uçuşu için onay verilir. Cihaz bu aşamada HENÜZ KULLANILMAZ.'
          },
          {
            when: '4–6. hafta',
            title: 'Cihazın aktivasyonu ve kullanım eğitimi',
            body: 'Ödem geçtikten sonra cihaz aktive edilir ve kullanımı adım adım öğretilir. Bu eğitim gerekirse online olarak da yapılabilir.'
          }
        ],
        risks: [
          'Enfeksiyon — protez cerrahisinin en önemli komplikasyonudur; geliştiğinde cihazın çıkarılması gerekebilir. Diyabet ve sigara riski artırır.',
          'Mekanik arıza — özellikle çok parçalı cihazlarda uzun dönemde görülebilir ve revizyon ameliyatı gerektirebilir',
          'Cihazın cilde baskısı veya erozyonu (seyrek)',
          'Glans (penis başı) duyusunda azalma',
          'Penis boyunun kısaldığı HİSSİ — protez boy uzatmaz; ameliyat öncesi beklenti bu nedenle önemlidir',
          'Kanama, hematom ve yara iyileşme sorunları',
          'Anesteziye bağlı genel cerrahi riskler'
        ],
        alternatives: [
          'PDE5 inhibitörleri (ağızdan ilaç tedavisi)',
          'Penis içi (intrakavernozal) enjeksiyon tedavisi',
          'Vakum ereksiyon cihazı',
          'Düşük yoğunluklu şok dalga tedavisi (Li-ESWT) — kanıt düzeyi henüz sınırlıdır, seçilmiş hastalarda değerlendirilir',
          'Psikoseksüel danışmanlık — özellikle psikojenik bileşen varsa'
        ],
        comparison: {
          title: 'Üç parçalı şişirilebilir protez ile bükülebilir protez karşılaştırması',
          columns: ['Ölçüt', 'Üç parçalı şişirilebilir', 'Bükülebilir (malleable)'],
          rows: [
            { label: 'Doğallık', values: ['Şişip inebildiği için daha doğal', 'Penis sürekli yarı sert kalır'] },
            { label: 'Kullanım', values: ['Skrotumdaki pompa ile; el becerisi gerekir', 'Elle bükülerek konumlandırılır'] },
            { label: 'Giysi altında gizlenebilirlik', values: ['Yüksek', 'Daha düşük'] },
            { label: 'Parça sayısı ve mekanik arıza', values: ['Daha fazla parça; uzun dönemde revizyon olasılığı', 'Daha az parça; mekanik olarak daha dayanıklı'] },
            { label: 'Ameliyatın karmaşıklığı', values: ['Daha karmaşık', 'Daha basit'] },
            { label: 'Kimler için uygun', values: ['Doğallık önceliği olan, el becerisi yeterli hastalar', 'El becerisi kısıtlı veya basitlik isteyen hastalar'] }
          ],
          note:
            'İki cihaz da kalıcı çözüm sağlar. Seçim; el becerisi, beklenti, eşlik eden hastalıklar ve maliyet birlikte değerlendirilerek yapılır.'
        },
        recovery: [
          {
            period: '1. hafta',
            body: 'Ödem, morluk ve ağrı beklenen bulgulardır; ağrı kesici ve antibiyotik düzeni uygulanır. Cihaz bu dönemde kullanılmaz. Uzun yürüyüş ve ağır kaldırmadan kaçınılır.'
          },
          {
            period: '2–3. hafta',
            body: 'Ödem belirgin biçimde azalır. Masa başı işe dönüş genellikle mümkündür. Yara bakımı sürdürülür.'
          },
          {
            period: '4–6. hafta',
            body: 'Cihaz aktive edilir ve kullanım eğitimi verilir. İlk kullanımlar hekim yönlendirmesiyle yapılır.'
          },
          {
            period: '6. haftadan sonra',
            body: 'Hekim onayıyla cinsel aktiviteye başlanır. İlk haftalarda cihazın kullanımına alışmak zaman alabilir; bu normaldir.'
          },
          {
            period: '3. ay',
            body: 'Kontrol muayenesi yapılır; cihazın çalışması ve memnuniyet değerlendirilir. Sonrasında yıllık takip önerilir.'
          }
        ],
        price: {
          from: 0,
          to: 0,
          currency: 'EUR',
          disclaimer:
            'Fiyat, seçilen protez tipine ve markasına göre belirgin biçimde değişir. Kesin teklif, protez tipi kararlaştırıldıktan sonra verilir.'
        },
        packageIncludes: [
          'Ameliyat ve hastane yatışı',
          'Anestezi ve ameliyathane',
          'Protez cihazı (seçilen tipe göre)',
          'Ameliyat öncesi tetkikler',
          'Havalimanı–hastane–otel transferleri',
          'Konaklama (hasta + 1 refakatçi)',
          'Tıbbi tercüman ve gizlilik esaslı koordinasyon',
          'Cihaz kullanım eğitimi ve taburculuk sonrası online kontroller'
        ],
        faqs: [
          {
            q: 'Protezden sonra doğal ereksiyon mümkün olur mu?',
            a: 'Sertliği her durumda protez sağlar; cihazsız, ilişkiye yetecek bir ereksiyon beklenmemelidir. Klasik seri genişletme yönteminde sertleşme dokusu önemli ölçüde zarar gördüğü için kendiliğinden dolgunluk da büyük oranda kaybolur. Doku koruyucu yaklaşımlarda ise kavernöz doku ve arter olabildiğince korunur; 2026 tarihli bir meta-analiz bu hastalarda kısmi dolgunluğun (rezidüel tümesans) klasik yönteme kıyasla belirgin biçimde daha sık korunduğunu bildirmiştir. Yine de kararın kalıcı olduğu değişmez: protez takıldıktan sonra geri dönüş yoktur.'
          },
          {
            q: 'Aquadisseksiyon nedir, benim için farkı ne olur?',
            a: 'Protez yerleştirilmeden önce penisin süngerimsi dokusunun içi genişletilir. Klasik yöntemde bu metal dilatatörlerle mekanik olarak yapılır; aquadisseksiyonda ise doku planları basınçlı sıvı verilerek ayrılır. Bu, kavernöz dokuyu koruma amacı güden yaklaşımların bir uygulamasıdır. 2026 tarihli bir sistematik derleme ve meta-analiz, doku koruyucu tekniklerle kavernöz arter korunmasının ve ameliyat sonrası kısmi dolgunluğun klasik genişletmeye göre daha sık görüldüğünü, komplikasyon oranlarının ise benzer olduğunu bildirmiştir; bu kanıt 4 randomize çalışma ve 193 hastaya dayanır. Tekniğin özellikle anlamlı olabildiği durumlar, dokunun sertleşip daraldığı (fibrotik) olgulardır. Sizin olgunuzda uygun olup olmadığı muayene ve görüntüleme sonrasında değerlendirilir.'
          },
          {
            q: 'Boşalma ve orgazm etkilenir mi?',
            a: 'Hayır. Protez yalnızca sertliği sağlar; boşalma ve orgazm farklı mekanizmalarla gerçekleşir ve genellikle korunur. Daha önce prostat ameliyatı geçirdiyseniz boşalmayla ilgili durum o ameliyata bağlıdır, protezden kaynaklanmaz.'
          },
          {
            q: 'Dışarıdan belli olur mu?',
            a: 'Üç parçalı şişirilebilir protez, kullanılmadığında penis yumuşak kaldığı için giysi altında fark edilmez. Bükülebilir protezde penis sürekli yarı sert olduğundan gizlenmesi biraz daha zordur; bu, tip seçiminde konuşulan konulardan biridir.'
          },
          {
            q: 'Enfeksiyon riski nedir, nasıl azaltılır?',
            a: 'Enfeksiyon, protez cerrahisinin en önemli komplikasyonudur ve geliştiğinde çoğu zaman cihazın çıkarılmasını gerektirir. Riski azaltmak için antibiyotik kaplı cihazlar, sıkı sterilite protokolü ve dokunmasız yerleştirme tekniği kullanılır. Kan şekerinin ameliyat öncesi düzenlenmesi ve sigaranın bırakılması riski azaltan en önemli iki etkendir.'
          },
          {
            q: 'Protez ne kadar dayanır?',
            a: 'Protezler uzun yıllar kullanılmak üzere tasarlanır; ancak mekanik bir cihaz olduğu için zamanla arıza ihtimali vardır ve bu durumda revizyon ameliyatı gerekebilir. Üretici garantisi ve takip koşulları ameliyat öncesinde size açıklanır.'
          },
          {
            q: 'Penisim kısalır mı?',
            a: 'Protez penisi uzatmaz. Bazı hastalar ameliyat sonrasında boyun kısaldığı hissine kapılır; bunun nedeni genellikle doğal ereksiyondaki tam uzamanın yerini cihazın sağladığı sertliğin almasıdır. Bu beklenti ameliyat öncesinde mutlaka konuşulur.'
          },
          {
            q: 'Ne zaman cinsel ilişkiye girebilirim?',
            a: 'Genellikle 4–6 hafta sonra cihaz aktive edilir ve kullanım eğitimi verilir; cinsel aktiviteye hekim onayıyla bu dönemden sonra başlanır. Erken kullanım yara iyileşmesini olumsuz etkileyebilir.'
          },
          {
            q: 'Süreç gizli yürütülüyor mu?',
            a: 'Evet. Androloji başvurularında tüm görüşme ve koordinasyon gizlilik esasıyla yürütülür. Paylaştığınız bilgiler yalnızca değerlendirme amacıyla işlenir. Dilerseniz ücretli online danışmanlık ile kliniğe gelmeden birebir görüşebilirsiniz.'
          },
          {
            q: 'Önce daha basit tedavileri denemem şart mı?',
            a: 'Evet, kural olarak öyledir. Protez, basamaklı tedavinin son aşamasıdır. İlaç, enjeksiyon veya vakum cihazı denenmeden protez önerilmez; çünkü bu seçenekler geri dönüşlüdür, protez ise değildir.'
          }
        ],
        sources: [
          {
            label:
              'EAU Guidelines on Sexual and Reproductive Health — Avrupa Üroloji Derneği',
            url: 'https://uroweb.org/guidelines/sexual-and-reproductive-health'
          },
          {
            label:
              'Mohamed H, Abdelshafi A, Ahmed A, Deameh MG, Mohamed T, Ramez M, Raheem O. Impact of cavernous tissue-sparing techniques on postoperative outcomes in penile prosthesis surgery: a systematic review and meta-analysis. The Journal of Sexual Medicine, 2026;23(2):qdag006.',
            url: 'https://doi.org/10.1093/jsxmed/qdag006'
          }
        ]
      },
      en: {
        title: 'Penile Prosthesis (Penile Implant) Surgery',
        summary:
          'A lasting solution for erection problems that do not respond to medication and other treatments, using a device placed inside the penis.',
        metaTitle: 'Penile Prosthesis Surgery | Inflatable and Malleable Implants',
        metaDescription:
          'Penile prosthesis surgery: who it suits, implant types, risks, recovery and frequently asked questions. A process run with privacy as the priority.',
        quickFacts: {
          duration: '60–90 minutes',
          anesthesia: 'General or spinal anesthesia',
          hospitalStay: '1 night',
          stayInTurkey: '7–10 days',
          catheter: '1 day',
          returnToWork: '1–2 weeks (desk work)',
          flightClearance: 'Day 7–10'
        },
        definition: [
          'Erectile dysfunction is the inability to achieve or maintain an erection sufficient for intercourse. Treatment follows a stepwise approach: first lifestyle and, where relevant, hormonal adjustment, then oral medication (PDE5 inhibitors), and after that intracavernosal injection or a vacuum device.',
          'A penile prosthesis is the surgical solution considered when these steps do not give a sufficient result. Cylinders that provide rigidity are placed inside the spongy tissue of the penis responsible for erection (corpus cavernosum). The device gives a rigidity the patient controls and can use whenever he wishes.',
          'AN IMPORTANT AND PERMANENT DECISION: Implanting a prosthesis is not a reversible procedure. In the classic method the corpus cavernosum is dilated serially with metal dilators; during this the tissue responsible for erection is substantially damaged and a natural, spontaneous erection is not expected afterwards. Even if the prosthesis is removed, the previous state cannot be restored.',
          'In recent years a distinction has emerged at this point. Cavernous-sparing approaches aim to preserve the cavernosal tissue and artery as far as possible during dilation. A 2026 systematic review and meta-analysis reported that, in patients operated on with a tissue-sparing technique, preservation of the cavernosal artery and post-operative partial tumescence (residual tumescence) were markedly more frequent than with classic serial dilation, while complication rates were statistically similar between the two techniques. This evidence rests on 4 randomised studies and a total of 193 patients; it is therefore promising, but the number of patients is still limited.',
          'This finding does NOT mean that you will have an erection sufficient for intercourse without the device after a prosthesis is implanted. What is preserved is partial tumescence and vascular function; rigidity is still provided by the prosthesis. The decision remains permanent. For this reason a penile prosthesis is recommended only after the other treatment options have genuinely been tried and expectations have been discussed in detail.',
          'There are two basic implant types. In the three-piece inflatable prosthesis the cylinders are accompanied by a small pump placed in the scrotum and a fluid reservoir placed in the abdomen; squeezing the pump produces rigidity, and afterwards the fluid returns so the penis becomes soft again. In the malleable implant the penis stays semi-rigid at all times and is positioned by hand.',
          'The guidelines of the European Association of Urology state that, in appropriately selected patients, penile prosthesis surgery is a treatment with high reported patient and partner satisfaction. The strongest determinant of that satisfaction is having discussed expectations properly before surgery.',
          'AQUADISSECTION (FLUID-ASSISTED DISSECTION): This is one way of applying the tissue-sparing approach described above. Instead of forcing the inside of the corpus cavernosum mechanically with metal dilators, the tissue planes are separated by delivering fluid under pressure. The aim is to reduce the mechanical stress placed on the cavernosal tissue, the tunica and the urethra during dilation. In our clinic this technique is used in selected cases found suitable after assessment; it is not applied routinely in every patient.',
          'Aquadissection can be particularly meaningful where the corporal tissue has become firm and narrowed (fibrotic): after prolonged priapism, after a previously implanted prosthesis has been removed because of infection, or in advanced Peyronie’s disease. In such cases mechanical dilation is technically difficult and the risk of injury increases.'
        ],
        eligibility: {
          suitable: [
            'Persistent erection problems where medication, injection and a vacuum device have been tried without sufficient result',
            'Treatment-resistant erectile dysfunction after radical prostatectomy or pelvic surgery',
            'Advanced vascular erectile dysfunction related to diabetes',
            'Peyronie’s disease accompanied by erectile dysfunction',
            'For an inflatable implant: having the manual dexterity to operate the pump'
          ],
          notSuitable: [
            'Active infection (urinary, skin or systemic) — surgery is not performed until the infection is treated',
            'Uncontrolled diabetes — it increases the risk of infection; blood sugar is regulated first',
            'Patients who have not yet tried the simpler treatment steps',
            'Patients with unrealistic expectations — an implant does not add length or sensation',
            'Erection problems that are mainly psychological in origin — counselling and medical treatment come first'
          ]
        },
        technology: [
          'Corporal dilation with aquadissection (fluid-assisted dissection)',
          'Three-piece inflatable prosthesis (cylinders + scrotal pump + reservoir)',
          'Malleable implant',
          'Antibiotic-coated or impregnated devices to reduce the risk of infection',
          'Strict sterility protocol and no-touch implantation technique'
        ],
        surgeonExperience: {
          caseVolume: '',
          note:
            'Andrology and penile prosthesis surgery are among Assoc. Prof. Dr. Müslüm Ergün’s fields of work. The implant type is chosen together with you after assessing your manual dexterity, accompanying conditions and expectations.'
        },
        timeline: [
          {
            when: 'Remote',
            title: 'Confidential pre-assessment',
            body: 'The duration of your complaint, treatments already tried, your diabetes and cardiovascular status, previous operations and current medication are assessed in confidence.'
          },
          {
            when: 'Day 1',
            title: 'Examination and expectations consultation',
            body: 'In-person examination, necessary tests and selection of the implant type. In this consultation what the device does — and what it does not do — is discussed in detail.'
          },
          {
            when: 'Day 2',
            title: 'Surgery',
            body: 'The procedure is performed under general or spinal anesthesia and usually takes 60–90 minutes. The incision is made in the scrotal area or at the base of the penis. For dilating the corpora, the aquadissection technique is used in selected and suitable cases.'
          },
          {
            when: 'Day 3',
            title: 'Catheter removal and discharge',
            body: 'The catheter is usually removed the next day. Dressing care and the medication schedule are explained and discharge is planned.'
          },
          {
            when: 'Day 7–10',
            title: 'Review and return',
            body: 'The wound is checked, sutures are assessed and clearance is given for the return flight. The device is NOT YET USED at this stage.'
          },
          {
            when: 'Week 4–6',
            title: 'Device activation and training',
            body: 'Once the swelling has settled the device is activated and its use is taught step by step. This training can also be given online if needed.'
          }
        ],
        risks: [
          'Infection — the most important complication of implant surgery; if it develops the device may have to be removed. Diabetes and smoking increase the risk.',
          'Mechanical failure — may occur in the long term, particularly with multi-part devices, and can require revision surgery',
          'Pressure on the skin or erosion of the device (uncommon)',
          'Reduced sensation in the glans',
          'A FEELING that the penis has become shorter — an implant does not add length, which is why pre-operative expectations matter',
          'Bleeding, haematoma and wound healing problems',
          'General surgical risks related to anesthesia'
        ],
        alternatives: [
          'PDE5 inhibitors (oral medication)',
          'Intracavernosal injection therapy',
          'Vacuum erection device',
          'Low-intensity shockwave therapy (Li-ESWT) — the level of evidence is still limited; considered in selected patients',
          'Psychosexual counselling — especially where there is a psychological component'
        ],
        comparison: {
          title: 'Three-piece inflatable versus malleable implant',
          columns: ['Criterion', 'Three-piece inflatable', 'Malleable'],
          rows: [
            { label: 'Naturalness', values: ['More natural, as it inflates and deflates', 'The penis stays semi-rigid at all times'] },
            { label: 'Use', values: ['Via the scrotal pump; manual dexterity needed', 'Positioned by bending it by hand'] },
            { label: 'Concealment under clothing', values: ['High', 'Lower'] },
            { label: 'Number of parts and mechanical failure', values: ['More parts; possibility of revision in the long term', 'Fewer parts; mechanically more durable'] },
            { label: 'Complexity of the operation', values: ['More complex', 'Simpler'] },
            { label: 'Who it suits', values: ['Patients who prioritise naturalness and have sufficient dexterity', 'Patients with limited dexterity or who prefer simplicity'] }
          ],
          note:
            'Both devices provide a lasting solution. The choice is made by weighing dexterity, expectations, accompanying conditions and cost together.'
        },
        recovery: [
          {
            period: 'Week 1',
            body: 'Swelling, bruising and pain are expected findings; a painkiller and antibiotic schedule is followed. The device is not used in this period. Long walks and heavy lifting are avoided.'
          },
          {
            period: 'Weeks 2–3',
            body: 'Swelling decreases markedly. Returning to desk work is usually possible. Wound care continues.'
          },
          {
            period: 'Weeks 4–6',
            body: 'The device is activated and training in its use is given. The first uses are guided by your physician.'
          },
          {
            period: 'After week 6',
            body: 'Sexual activity begins with your physician’s approval. Getting used to the device may take time in the first weeks; this is normal.'
          },
          {
            period: 'Month 3',
            body: 'A follow-up examination is carried out; the functioning of the device and your satisfaction are assessed. Annual follow-up is advised thereafter.'
          }
        ],
        price: {
          from: 0,
          to: 0,
          currency: 'EUR',
          disclaimer:
            'The price varies significantly with the type and brand of implant chosen. A firm quote is given once the implant type has been decided.'
        },
        packageIncludes: [
          'Surgery and hospital stay',
          'Anesthesia and operating room',
          'The implant device (according to the type chosen)',
          'Pre-operative tests',
          'Airport–hospital–hotel transfers',
          'Accommodation (patient + 1 companion)',
          'Medical interpreter and confidentiality-based coordination',
          'Device training and post-discharge online follow-ups'
        ],
        faqs: [
          {
            q: 'Is a natural erection possible after an implant?',
            a: 'Rigidity is provided by the prosthesis in every case; you should not expect an erection sufficient for intercourse without the device. With classic serial dilation the erectile tissue is substantially damaged, so spontaneous tumescence is also largely lost. With tissue-sparing approaches the cavernosal tissue and artery are preserved as far as possible; a 2026 meta-analysis reported that partial tumescence (residual tumescence) is markedly more often preserved in these patients than with the classic method. Even so, the decision remains permanent: once an implant is in place there is no going back.'
          },
          {
            q: 'What is aquadissection, and what difference does it make for me?',
            a: 'Before the implant is placed, the inside of the spongy tissue of the penis is dilated. In the classic method this is done mechanically with metal dilators; in aquadissection the tissue planes are separated by delivering fluid under pressure. This is one application of approaches that aim to preserve cavernosal tissue. A 2026 systematic review and meta-analysis reported that with tissue-sparing techniques, preservation of the cavernosal artery and post-operative partial tumescence were more frequent than with classic dilation, while complication rates were similar; this evidence rests on 4 randomised studies and 193 patients. The technique can be particularly meaningful where the tissue has become firm and narrowed (fibrotic). Whether it is suitable in your case is assessed after examination and imaging.'
          },
          {
            q: 'Are ejaculation and orgasm affected?',
            a: 'No. The implant only provides rigidity; ejaculation and orgasm occur through different mechanisms and are generally preserved. If you have had prostate surgery before, the situation regarding ejaculation depends on that operation, not on the implant.'
          },
          {
            q: 'Is it noticeable from the outside?',
            a: 'A three-piece inflatable implant is not noticeable under clothing, because the penis stays soft when it is not in use. With a malleable implant the penis is permanently semi-rigid, so it is a little harder to conceal; this is one of the points discussed when choosing the type.'
          },
          {
            q: 'What is the risk of infection and how is it reduced?',
            a: 'Infection is the most important complication of implant surgery and, when it develops, usually requires removal of the device. To reduce the risk, antibiotic-coated devices, a strict sterility protocol and a no-touch implantation technique are used. Regulating blood sugar before surgery and stopping smoking are the two most important factors that lower the risk.'
          },
          {
            q: 'How long does an implant last?',
            a: 'Implants are designed to be used for many years; however, as it is a mechanical device there is a possibility of failure over time, and revision surgery may then be needed. The manufacturer’s warranty and follow-up conditions are explained to you before surgery.'
          },
          {
            q: 'Will my penis become shorter?',
            a: 'An implant does not lengthen the penis. Some patients feel after surgery that it has become shorter; this is usually because the full lengthening of a natural erection is replaced by the rigidity the device provides. This expectation is always discussed before surgery.'
          },
          {
            q: 'When can I have sexual intercourse?',
            a: 'The device is usually activated after 4–6 weeks and training in its use is given; sexual activity begins after that period with your physician’s approval. Using it too early can affect wound healing adversely.'
          },
          {
            q: 'Is the process kept confidential?',
            a: 'Yes. For andrology enquiries all consultation and coordination are conducted on the principle of confidentiality. The information you share is processed only for assessment. If you wish, you can speak one to one through the paid online consultation without visiting the clinic.'
          },
          {
            q: 'Must I try the simpler treatments first?',
            a: 'Yes, as a rule. An implant is the final step of stepwise treatment. A prosthesis is not recommended before medication, injection or a vacuum device has been tried, because those options are reversible and an implant is not.'
          }
        ],
        sources: [
          {
            label:
              'EAU Guidelines on Sexual and Reproductive Health — European Association of Urology',
            url: 'https://uroweb.org/guidelines/sexual-and-reproductive-health'
          },
          {
            label:
              'Mohamed H, Abdelshafi A, Ahmed A, Deameh MG, Mohamed T, Ramez M, Raheem O. Impact of cavernous tissue-sparing techniques on postoperative outcomes in penile prosthesis surgery: a systematic review and meta-analysis. The Journal of Sexual Medicine, 2026;23(2):qdag006.',
            url: 'https://doi.org/10.1093/jsxmed/qdag006'
          }
        ]
      },
      de: {
        title: 'Penisprothese (Penisimplantat) — Operation',
        summary:
          'Eine dauerhafte Lösung bei Erektionsproblemen, die auf Medikamente und andere Behandlungen nicht ansprechen, mit einem im Penis platzierten Implantat.',
        metaTitle: 'Penisprothese: Operation, aufblasbare und biegsame Implantate',
        metaDescription:
          'Penisprothesen-Operation: für wen geeignet, Implantattypen, Risiken, Genesung und häufige Fragen. Ein Ablauf, bei dem Diskretion Vorrang hat.',
        quickFacts: {
          duration: '60–90 Minuten',
          anesthesia: 'Vollnarkose oder Spinalanästhesie',
          hospitalStay: '1 Nacht',
          stayInTurkey: '7–10 Tage',
          catheter: '1 Tag',
          returnToWork: '1–2 Wochen (Bürotätigkeit)',
          flightClearance: 'Tag 7–10'
        },
        definition: [
          'Erektile Dysfunktion ist die Unfähigkeit, eine für den Geschlechtsverkehr ausreichende Erektion zu erreichen oder zu halten. Die Behandlung folgt einem Stufenschema: zunächst Lebensstil und gegebenenfalls hormonelle Anpassung, dann orale Medikamente (PDE5-Hemmer), anschließend Schwellkörperinjektion oder Vakuumpumpe.',
          'Die Penisprothese ist die chirurgische Lösung, wenn diese Stufen kein ausreichendes Ergebnis bringen. In das für die Erektion zuständige Schwellkörpergewebe (Corpus cavernosum) werden Zylinder eingesetzt, die die Steifigkeit erzeugen. Das Implantat liefert eine Steifigkeit, die der Patient selbst steuert und jederzeit nutzen kann.',
          'EINE WICHTIGE UND DAUERHAFTE ENTSCHEIDUNG: Das Einsetzen einer Prothese ist nicht umkehrbar. Beim klassischen Verfahren wird der Schwellkörper mit Metalldilatatoren seriell aufgedehnt; dabei wird das für die Erektion zuständige Gewebe erheblich geschädigt, und eine natürliche, spontane Erektion ist danach nicht zu erwarten. Auch nach Entfernung der Prothese lässt sich der vorherige Zustand nicht wiederherstellen.',
          'In den letzten Jahren hat sich hier eine Unterscheidung herausgebildet. Gewebeschonende (cavernous-sparing) Verfahren zielen darauf, Schwellkörpergewebe und Arterie bei der Aufdehnung so weit wie möglich zu erhalten. Eine systematische Übersichtsarbeit mit Metaanalyse aus dem Jahr 2026 berichtete, dass bei gewebeschonend operierten Patienten der Erhalt der Schwellkörperarterie und eine postoperative Teiltumeszenz (Resttumeszenz) deutlich häufiger auftraten als nach klassischer serieller Dilatation, während die Komplikationsraten zwischen beiden Techniken statistisch vergleichbar waren. Diese Evidenz stützt sich auf 4 randomisierte Studien mit insgesamt 193 Patienten; sie ist also vielversprechend, die Patientenzahl bleibt jedoch begrenzt.',
          'Dieser Befund bedeutet NICHT, dass Sie nach dem Einsetzen einer Prothese ohne das Implantat eine für den Geschlechtsverkehr ausreichende Erektion haben werden. Erhalten bleiben Teiltumeszenz und Gefäßfunktion; die Steifigkeit liefert weiterhin die Prothese. Die Entscheidung bleibt dauerhaft. Deshalb wird eine Penisprothese erst empfohlen, wenn die übrigen Behandlungsoptionen wirklich ausgeschöpft und die Erwartungen ausführlich besprochen wurden.',
          'Es gibt zwei Grundtypen. Bei der dreiteiligen aufblasbaren Prothese gehören zu den Zylindern eine kleine Pumpe im Hodensack und ein Flüssigkeitsreservoir im Bauchraum; durch Drücken der Pumpe entsteht die Steifigkeit, danach fließt die Flüssigkeit zurück und der Penis wird wieder weich. Beim biegsamen (malleablen) Implantat bleibt der Penis dauerhaft halbsteif und wird von Hand positioniert.',
          'Die Leitlinien der Europäischen Gesellschaft für Urologie halten fest, dass die Penisprothesenchirurgie bei geeignet ausgewählten Patienten eine Behandlung mit hoch berichteter Zufriedenheit von Patient und Partnerin ist. Der stärkste Faktor für diese Zufriedenheit ist ein vorab korrekt geführtes Erwartungsgespräch.',
          'AQUADISSEKTION (FLÜSSIGKEITSGESTÜTZTE DISSEKTION): Dies ist eine Anwendungsform des oben beschriebenen gewebeschonenden Vorgehens. Statt das Innere des Schwellkörpers mechanisch mit Metalldilatatoren aufzuweiten, werden die Gewebeschichten durch unter Druck eingebrachte Flüssigkeit getrennt. Ziel ist es, die mechanische Belastung von Schwellkörpergewebe, Tunica und Harnröhre während der Aufdehnung zu verringern. In unserer Klinik wird diese Technik bei ausgewählten, nach Beurteilung geeigneten Fällen eingesetzt; sie wird nicht routinemäßig bei jedem Patienten angewandt.',
          'Besonders sinnvoll kann die Aquadissektion sein, wenn das Schwellkörpergewebe verhärtet und verengt (fibrotisch) ist: nach langanhaltendem Priapismus, nach Entfernung einer zuvor eingesetzten Prothese wegen Infektion oder bei fortgeschrittener Induratio penis plastica. In diesen Fällen ist die mechanische Aufdehnung technisch schwierig und das Verletzungsrisiko steigt.'
        ],
        eligibility: {
          suitable: [
            'Anhaltende Erektionsprobleme, bei denen Medikamente, Injektion und Vakuumpumpe ohne ausreichendes Ergebnis versucht wurden',
            'Therapieresistente erektile Dysfunktion nach radikaler Prostatektomie oder Beckenchirurgie',
            'Fortgeschrittene vaskuläre erektile Dysfunktion bei Diabetes',
            'Induratio penis plastica mit begleitender erektiler Dysfunktion',
            'Für ein aufblasbares Implantat: ausreichende Handgeschicklichkeit zur Bedienung der Pumpe'
          ],
          notSuitable: [
            'Aktive Infektion (Harnwege, Haut oder systemisch) — bis zur Behandlung der Infektion wird nicht operiert',
            'Unkontrollierter Diabetes — erhöht das Infektionsrisiko; zunächst wird der Blutzucker eingestellt',
            'Patienten, die die einfacheren Behandlungsstufen noch nicht versucht haben',
            'Patienten mit unrealistischen Erwartungen — ein Implantat schafft weder Länge noch mehr Empfindung',
            'Überwiegend psychisch bedingte Erektionsstörungen — Vorrang haben Beratung und medikamentöse Therapie'
          ]
        },
        technology: [
          'Schwellkörperaufdehnung mittels Aquadissektion (flüssigkeitsgestützte Dissektion)',
          'Dreiteilige aufblasbare Prothese (Zylinder + Pumpe im Hodensack + Reservoir)',
          'Biegsames (malleables) Implantat',
          'Antibiotisch beschichtete bzw. imprägnierte Implantate zur Senkung des Infektionsrisikos',
          'Striktes Sterilitätsprotokoll und No-Touch-Implantationstechnik'
        ],
        surgeonExperience: {
          caseVolume: '',
          note:
            'Andrologie und Penisprothesenchirurgie gehören zu den Arbeitsgebieten von Doz. Dr. Müslüm Ergün. Der Implantattyp wird gemeinsam mit Ihnen gewählt, nach Beurteilung von Handgeschicklichkeit, Begleiterkrankungen und Erwartungen.'
        },
        timeline: [
          {
            when: 'Aus der Ferne',
            title: 'Vertrauliche Vorabbeurteilung',
            body: 'Dauer der Beschwerden, bereits versuchte Therapien, Diabetes- und Herz-Kreislauf-Status, frühere Operationen und Ihre Medikation werden vertraulich beurteilt.'
          },
          {
            when: 'Tag 1',
            title: 'Untersuchung und Erwartungsgespräch',
            body: 'Persönliche Untersuchung, erforderliche Befunde und Wahl des Implantattyps. In diesem Gespräch wird ausführlich besprochen, was das Implantat leistet — und was nicht.'
          },
          {
            when: 'Tag 2',
            title: 'Operation',
            body: 'Der Eingriff erfolgt in Vollnarkose oder Spinalanästhesie und dauert meist 60–90 Minuten. Der Schnitt wird am Hodensack oder an der Peniswurzel gesetzt. Zur Aufdehnung der Schwellkörper wird in ausgewählten, geeigneten Fällen die Aquadissektionstechnik verwendet.'
          },
          {
            when: 'Tag 3',
            title: 'Katheterentfernung und Entlassung',
            body: 'Der Katheter wird meist am Folgetag entfernt. Verbandpflege und Medikationsplan werden erklärt, die Entlassung wird geplant.'
          },
          {
            when: 'Tag 7–10',
            title: 'Kontrolle und Rückreise',
            body: 'Wundkontrolle, Beurteilung der Nähte und Freigabe für den Rückflug. Das Implantat wird in dieser Phase NOCH NICHT BENUTZT.'
          },
          {
            when: 'Woche 4–6',
            title: 'Aktivierung des Implantats und Einweisung',
            body: 'Nach Abklingen der Schwellung wird das Implantat aktiviert und seine Bedienung Schritt für Schritt erklärt. Diese Einweisung kann bei Bedarf auch online erfolgen.'
          }
        ],
        risks: [
          'Infektion — die wichtigste Komplikation der Implantatchirurgie; tritt sie auf, muss das Implantat unter Umständen entfernt werden. Diabetes und Rauchen erhöhen das Risiko.',
          'Mechanisches Versagen — vor allem bei mehrteiligen Implantaten langfristig möglich; kann eine Revisionsoperation erfordern',
          'Druck auf die Haut oder Erosion des Implantats (selten)',
          'Verminderte Empfindung an der Eichel',
          'Das GEFÜHL, der Penis sei kürzer geworden — ein Implantat verlängert nicht; deshalb ist das Erwartungsgespräch vorab so wichtig',
          'Blutung, Hämatom und Wundheilungsstörungen',
          'Allgemeine chirurgische Risiken der Narkose'
        ],
        alternatives: [
          'PDE5-Hemmer (orale Medikation)',
          'Schwellkörper-Autoinjektionstherapie',
          'Vakuum-Erektionshilfe',
          'Niedrigintensive Stoßwellentherapie (Li-ESWT) — die Evidenzlage ist noch begrenzt; bei ausgewählten Patienten erwägbar',
          'Psychosexuelle Beratung — insbesondere bei psychischer Komponente'
        ],
        comparison: {
          title: 'Dreiteilige aufblasbare Prothese im Vergleich zum biegsamen Implantat',
          columns: ['Kriterium', 'Dreiteilig aufblasbar', 'Biegsam (malleabel)'],
          rows: [
            { label: 'Natürlichkeit', values: ['Natürlicher, da auf- und entleerbar', 'Der Penis bleibt dauerhaft halbsteif'] },
            { label: 'Bedienung', values: ['Über die Pumpe im Hodensack; Handgeschicklichkeit nötig', 'Wird von Hand in Position gebogen'] },
            { label: 'Verbergen unter der Kleidung', values: ['Hoch', 'Geringer'] },
            { label: 'Teilezahl und mechanisches Versagen', values: ['Mehr Teile; langfristig Revision möglich', 'Weniger Teile; mechanisch robuster'] },
            { label: 'Komplexität der Operation', values: ['Komplexer', 'Einfacher'] },
            { label: 'Für wen geeignet', values: ['Patienten mit Priorität auf Natürlichkeit und ausreichender Geschicklichkeit', 'Patienten mit eingeschränkter Geschicklichkeit oder Wunsch nach Einfachheit'] }
          ],
          note:
            'Beide Implantate bieten eine dauerhafte Lösung. Die Wahl erfolgt nach Abwägung von Geschicklichkeit, Erwartungen, Begleiterkrankungen und Kosten.'
        },
        recovery: [
          {
            period: 'Woche 1',
            body: 'Schwellung, Blutergüsse und Schmerzen sind zu erwarten; Schmerzmittel und Antibiotika werden nach Plan eingenommen. Das Implantat wird in dieser Zeit nicht benutzt. Lange Spaziergänge und schweres Heben werden vermieden.'
          },
          {
            period: 'Woche 2–3',
            body: 'Die Schwellung geht deutlich zurück. Die Rückkehr zur Bürotätigkeit ist meist möglich. Die Wundpflege wird fortgesetzt.'
          },
          {
            period: 'Woche 4–6',
            body: 'Das Implantat wird aktiviert und die Bedienung eingeübt. Die ersten Anwendungen erfolgen unter ärztlicher Anleitung.'
          },
          {
            period: 'Ab Woche 6',
            body: 'Mit ärztlicher Freigabe beginnt die sexuelle Aktivität. Sich in den ersten Wochen an das Implantat zu gewöhnen, kann Zeit brauchen; das ist normal.'
          },
          {
            period: 'Monat 3',
            body: 'Kontrolluntersuchung; Funktion des Implantats und Zufriedenheit werden beurteilt. Danach wird eine jährliche Nachsorge empfohlen.'
          }
        ],
        price: {
          from: 0,
          to: 0,
          currency: 'EUR',
          disclaimer:
            'Der Preis hängt deutlich vom gewählten Implantattyp und Hersteller ab. Ein verbindliches Angebot erfolgt, sobald der Implantattyp feststeht.'
        },
        packageIncludes: [
          'Operation und Krankenhausaufenthalt',
          'Anästhesie und Operationssaal',
          'Das Implantat (je nach gewähltem Typ)',
          'Präoperative Untersuchungen',
          'Transfers Flughafen–Krankenhaus–Hotel',
          'Unterkunft (Patient + 1 Begleitperson)',
          'Medizinischer Dolmetscher und vertrauliche Koordination',
          'Einweisung in das Implantat und Online-Nachsorge nach der Entlassung'
        ],
        faqs: [
          {
            q: 'Ist nach einem Implantat eine natürliche Erektion möglich?',
            a: 'Die Steifigkeit liefert in jedem Fall die Prothese; eine ohne Implantat für den Geschlechtsverkehr ausreichende Erektion sollten Sie nicht erwarten. Bei der klassischen seriellen Dilatation wird das Erektionsgewebe erheblich geschädigt, sodass auch die spontane Tumeszenz weitgehend verloren geht. Bei gewebeschonenden Verfahren werden Gewebe und Arterie so weit wie möglich erhalten; eine Metaanalyse von 2026 berichtete, dass eine Teiltumeszenz (Resttumeszenz) bei diesen Patienten deutlich häufiger erhalten bleibt als beim klassischen Vorgehen. Dennoch bleibt die Entscheidung dauerhaft: Ist das Implantat eingesetzt, gibt es kein Zurück.'
          },
          {
            q: 'Was ist Aquadissektion und welchen Unterschied macht sie für mich?',
            a: 'Vor dem Einsetzen des Implantats wird das Innere des Schwellkörpergewebes aufgedehnt. Klassisch geschieht das mechanisch mit Metalldilatatoren; bei der Aquadissektion werden die Gewebeschichten durch unter Druck eingebrachte Flüssigkeit getrennt. Dies ist eine Anwendung von Verfahren, die auf den Erhalt des Schwellkörpergewebes zielen. Eine systematische Übersichtsarbeit mit Metaanalyse von 2026 berichtete, dass mit gewebeschonenden Techniken der Erhalt der Schwellkörperarterie und eine postoperative Teiltumeszenz häufiger auftraten als bei klassischer Dilatation, bei vergleichbaren Komplikationsraten; diese Evidenz stützt sich auf 4 randomisierte Studien und 193 Patienten. Besonders sinnvoll kann die Technik sein, wenn das Gewebe verhärtet und verengt (fibrotisch) ist. Ob sie in Ihrem Fall geeignet ist, wird nach Untersuchung und Bildgebung beurteilt.'
          },
          {
            q: 'Sind Ejakulation und Orgasmus betroffen?',
            a: 'Nein. Das Implantat erzeugt nur die Steifigkeit; Ejakulation und Orgasmus laufen über andere Mechanismen und bleiben in der Regel erhalten. Wenn Sie zuvor an der Prostata operiert wurden, hängt die Situation der Ejakulation von jener Operation ab, nicht vom Implantat.'
          },
          {
            q: 'Sieht man es von außen?',
            a: 'Eine dreiteilige aufblasbare Prothese fällt unter der Kleidung nicht auf, da der Penis im Ruhezustand weich bleibt. Beim biegsamen Implantat ist der Penis dauerhaft halbsteif und daher etwas schwerer zu verbergen; das gehört zu den Punkten, die bei der Typwahl besprochen werden.'
          },
          {
            q: 'Wie hoch ist das Infektionsrisiko und wie wird es gesenkt?',
            a: 'Die Infektion ist die wichtigste Komplikation der Implantatchirurgie und erfordert im Fall des Falles meist die Entfernung des Implantats. Zur Risikosenkung werden antibiotisch beschichtete Implantate, ein striktes Sterilitätsprotokoll und die No-Touch-Technik eingesetzt. Die Einstellung des Blutzuckers vor der Operation und der Rauchstopp sind die beiden wichtigsten risikosenkenden Faktoren.'
          },
          {
            q: 'Wie lange hält ein Implantat?',
            a: 'Implantate sind für viele Jahre ausgelegt; da es sich jedoch um ein mechanisches Gerät handelt, besteht mit der Zeit die Möglichkeit eines Defekts, der eine Revisionsoperation erforderlich machen kann. Herstellergarantie und Nachsorgebedingungen werden Ihnen vor der Operation erläutert.'
          },
          {
            q: 'Wird mein Penis kürzer?',
            a: 'Ein Implantat verlängert den Penis nicht. Manche Patienten haben nach der Operation das Gefühl, er sei kürzer geworden; meist liegt das daran, dass die volle Längenzunahme einer natürlichen Erektion durch die Steifigkeit des Implantats ersetzt wird. Diese Erwartung wird stets vorab besprochen.'
          },
          {
            q: 'Wann kann ich Geschlechtsverkehr haben?',
            a: 'Das Implantat wird meist nach 4–6 Wochen aktiviert und die Bedienung eingeübt; die sexuelle Aktivität beginnt danach mit ärztlicher Freigabe. Eine zu frühe Nutzung kann die Wundheilung beeinträchtigen.'
          },
          {
            q: 'Wird der Ablauf vertraulich behandelt?',
            a: 'Ja. Bei andrologischen Anfragen werden alle Gespräche und die Koordination nach dem Grundsatz der Vertraulichkeit geführt. Die von Ihnen geteilten Informationen werden ausschließlich zur Beurteilung verarbeitet. Auf Wunsch können Sie über die kostenpflichtige Online-Beratung sprechen, ohne in die Klinik zu kommen.'
          },
          {
            q: 'Muss ich zuerst die einfacheren Behandlungen versuchen?',
            a: 'Ja, in der Regel. Das Implantat ist die letzte Stufe der Stufentherapie. Eine Prothese wird nicht empfohlen, bevor Medikamente, Injektion oder Vakuumpumpe versucht wurden — denn diese Optionen sind umkehrbar, das Implantat ist es nicht.'
          }
        ],
        sources: [
          {
            label:
              'EAU Guidelines on Sexual and Reproductive Health — Europäische Gesellschaft für Urologie',
            url: 'https://uroweb.org/guidelines/sexual-and-reproductive-health'
          },
          {
            label:
              'Mohamed H, Abdelshafi A, Ahmed A, Deameh MG, Mohamed T, Ramez M, Raheem O. Impact of cavernous tissue-sparing techniques on postoperative outcomes in penile prosthesis surgery: a systematic review and meta-analysis. The Journal of Sexual Medicine, 2026;23(2):qdag006.',
            url: 'https://doi.org/10.1093/jsxmed/qdag006'
          }
        ]
      },
      fr: {
        title: 'Prothèse pénienne (implant pénien) : la chirurgie',
        summary:
          'Une solution durable aux troubles de l’érection ne répondant pas aux médicaments et aux autres traitements, grâce à un dispositif implanté dans la verge.',
        metaTitle: 'Prothèse pénienne : implants gonflables et malléables',
        metaDescription:
          'Chirurgie de la prothèse pénienne : indications, types d’implant, risques, récupération et questions fréquentes. Un parcours mené avec la confidentialité comme priorité.',
        quickFacts: {
          duration: '60 à 90 minutes',
          anesthesia: 'Anesthésie générale ou rachidienne',
          hospitalStay: '1 nuit',
          stayInTurkey: '7 à 10 jours',
          catheter: '1 jour',
          returnToWork: '1 à 2 semaines (travail de bureau)',
          flightClearance: 'Jours 7 à 10'
        },
        definition: [
          'La dysfonction érectile est l’incapacité à obtenir ou à maintenir une érection suffisante pour un rapport sexuel. La prise en charge suit une approche par paliers : d’abord le mode de vie et, le cas échéant, une correction hormonale, puis les médicaments par voie orale (inhibiteurs de la PDE5), ensuite l’injection intracaverneuse ou la pompe à vide.',
          'La prothèse pénienne est la solution chirurgicale envisagée lorsque ces étapes ne donnent pas de résultat suffisant. Des cylindres assurant la rigidité sont placés dans les corps caverneux, le tissu spongieux responsable de l’érection. Le dispositif procure une rigidité que le patient contrôle lui-même et peut utiliser quand il le souhaite.',
          'UNE DÉCISION IMPORTANTE ET DÉFINITIVE : la pose d’une prothèse n’est pas une intervention réversible. Dans la méthode classique, les corps caverneux sont dilatés en série avec des dilatateurs métalliques ; ce faisant, le tissu responsable de l’érection est nettement endommagé et aucune érection naturelle, spontanée, n’est attendue ensuite. Même si la prothèse est retirée, l’état antérieur ne peut être rétabli.',
          'Ces dernières années, une distinction est apparue sur ce point. Les approches préservant le tissu caverneux (cavernous-sparing) visent à épargner autant que possible le tissu caverneux et l’artère pendant la dilatation. Une revue systématique avec méta-analyse publiée en 2026 a rapporté que, chez les patients opérés avec une technique préservant les tissus, la préservation de l’artère caverneuse et la tumescence partielle postopératoire (tumescence résiduelle) étaient nettement plus fréquentes qu’après une dilatation sérielle classique, les taux de complications étant statistiquement comparables entre les deux techniques. Cette donnée repose sur 4 études randomisées et 193 patients au total : elle est donc prometteuse, mais l’effectif reste limité.',
          'Ce résultat ne signifie PAS que vous aurez, une fois la prothèse posée, une érection suffisante pour un rapport sans le dispositif. Ce qui est préservé, c’est une tumescence partielle et la fonction vasculaire ; la rigidité reste assurée par la prothèse. La décision demeure définitive. C’est pourquoi la prothèse pénienne n’est proposée qu’après que les autres options thérapeutiques ont réellement été essayées et que les attentes ont été discutées en détail.',
          'Il existe deux grands types d’implant. Dans la prothèse gonflable à trois pièces, les cylindres s’accompagnent d’une petite pompe placée dans le scrotum et d’un réservoir de liquide placé dans l’abdomen ; une pression sur la pompe produit la rigidité, puis le liquide reflue et la verge redevient souple. Dans l’implant malléable, la verge reste en permanence semi-rigide et se positionne à la main.',
          'Les recommandations de l’Association européenne d’urologie indiquent que, chez des patients correctement sélectionnés, la chirurgie de la prothèse pénienne est un traitement pour lequel une satisfaction élevée du patient et de la partenaire est rapportée. Le principal déterminant de cette satisfaction est un entretien d’attentes correctement mené avant l’intervention.',
          'AQUADISSECTION (DISSECTION ASSISTÉE PAR FLUIDE) : il s’agit d’une mise en œuvre de l’approche préservant les tissus décrite plus haut. Plutôt que de forcer mécaniquement l’intérieur du corps caverneux avec des dilatateurs métalliques, les plans tissulaires sont séparés par du liquide délivré sous pression. L’objectif est de réduire la contrainte mécanique exercée sur le tissu caverneux, l’albuginée et l’urètre pendant la dilatation. Dans notre clinique, cette technique est employée pour des cas sélectionnés jugés adaptés après évaluation ; elle n’est pas appliquée en routine chez tous les patients.',
          'L’aquadissection peut être particulièrement utile lorsque le tissu caverneux est induré et rétréci (fibrotique) : après un priapisme prolongé, après le retrait pour infection d’une prothèse précédemment implantée, ou en cas de maladie de La Peyronie évoluée. Dans ces situations, la dilatation mécanique est techniquement difficile et le risque de lésion augmente.'
        ],
        eligibility: {
          suitable: [
            'Troubles de l’érection persistants malgré l’essai des médicaments, des injections et de la pompe à vide',
            'Dysfonction érectile résistante au traitement après prostatectomie radicale ou chirurgie pelvienne',
            'Dysfonction érectile vasculaire évoluée liée au diabète',
            'Maladie de La Peyronie associée à une dysfonction érectile',
            'Pour un implant gonflable : disposer de la dextérité manuelle nécessaire pour actionner la pompe'
          ],
          notSuitable: [
            'Infection active (urinaire, cutanée ou générale) — l’intervention n’est pas réalisée tant que l’infection n’est pas traitée',
            'Diabète non équilibré — il augmente le risque infectieux ; la glycémie est d’abord régulée',
            'Patients n’ayant pas encore essayé les paliers thérapeutiques plus simples',
            'Patients ayant des attentes irréalistes — un implant n’apporte ni longueur ni sensation supplémentaire',
            'Troubles de l’érection d’origine principalement psychologique — la priorité va à l’accompagnement et au traitement médical'
          ]
        },
        technology: [
          'Dilatation des corps caverneux par aquadissection (dissection assistée par fluide)',
          'Prothèse gonflable à trois pièces (cylindres + pompe scrotale + réservoir)',
          'Implant malléable',
          'Dispositifs enduits ou imprégnés d’antibiotique pour réduire le risque infectieux',
          'Protocole de stérilité strict et technique d’implantation « no-touch »'
        ],
        surgeonExperience: {
          caseVolume: '',
          note:
            'L’andrologie et la chirurgie de la prothèse pénienne font partie des domaines d’activité du Dr Müslüm Ergün. Le type d’implant est choisi avec vous après évaluation de votre dextérité, de vos affections associées et de vos attentes.'
        },
        timeline: [
          {
            when: 'À distance',
            title: 'Pré-évaluation confidentielle',
            body: 'L’ancienneté du trouble, les traitements déjà essayés, votre statut diabétique et cardiovasculaire, vos interventions antérieures et vos médicaments sont évalués en toute confidentialité.'
          },
          {
            when: 'Jour 1',
            title: 'Examen et entretien sur les attentes',
            body: 'Examen clinique, bilan nécessaire et choix du type d’implant. Cet entretien précise en détail ce que le dispositif apporte — et ce qu’il n’apporte pas.'
          },
          {
            when: 'Jour 2',
            title: 'Intervention',
            body: 'L’intervention se déroule sous anesthésie générale ou rachidienne et dure généralement 60 à 90 minutes. L’incision est faite au niveau du scrotum ou de la base de la verge. Pour la dilatation des corps caverneux, la technique d’aquadissection est utilisée dans les cas sélectionnés et jugés adaptés.'
          },
          {
            when: 'Jour 3',
            title: 'Retrait de la sonde et sortie',
            body: 'La sonde est généralement retirée le lendemain. Les soins de pansement et le schéma médicamenteux sont expliqués et la sortie est organisée.'
          },
          {
            when: 'Jours 7–10',
            title: 'Contrôle et retour',
            body: 'Contrôle de la cicatrice, évaluation des sutures et autorisation pour le vol retour. Le dispositif n’est PAS ENCORE UTILISÉ à ce stade.'
          },
          {
            when: 'Semaines 4–6',
            title: 'Activation du dispositif et apprentissage',
            body: 'Une fois l’œdème résorbé, le dispositif est activé et son utilisation enseignée pas à pas. Cet apprentissage peut aussi se faire en ligne si nécessaire.'
          }
        ],
        risks: [
          'Infection — complication la plus importante de la chirurgie prothétique ; si elle survient, le dispositif peut devoir être retiré. Le diabète et le tabac augmentent le risque.',
          'Défaillance mécanique — possible à long terme, surtout avec les dispositifs à plusieurs pièces ; peut nécessiter une reprise chirurgicale',
          'Pression sur la peau ou érosion du dispositif (peu fréquent)',
          'Diminution de la sensibilité du gland',
          'SENSATION que la verge est plus courte — un implant n’allonge pas ; d’où l’importance de l’entretien préopératoire sur les attentes',
          'Saignement, hématome et troubles de cicatrisation',
          'Risques chirurgicaux généraux liés à l’anesthésie'
        ],
        alternatives: [
          'Inhibiteurs de la PDE5 (traitement oral)',
          'Injections intracaverneuses',
          'Pompe à vide',
          'Ondes de choc de faible intensité (Li-ESWT) — niveau de preuve encore limité ; à envisager chez des patients sélectionnés',
          'Accompagnement psychosexuel — en particulier en présence d’une composante psychologique'
        ],
        comparison: {
          title: 'Prothèse gonflable à trois pièces et implant malléable',
          columns: ['Critère', 'Gonflable trois pièces', 'Malléable'],
          rows: [
            { label: 'Naturel', values: ['Plus naturel, car il se gonfle et se dégonfle', 'La verge reste semi-rigide en permanence'] },
            { label: 'Utilisation', values: ['Par la pompe scrotale ; dextérité nécessaire', 'Positionné à la main en le pliant'] },
            { label: 'Discrétion sous les vêtements', values: ['Élevée', 'Moindre'] },
            { label: 'Nombre de pièces et défaillance mécanique', values: ['Plus de pièces ; reprise possible à long terme', 'Moins de pièces ; mécaniquement plus robuste'] },
            { label: 'Complexité de l’intervention', values: ['Plus complexe', 'Plus simple'] },
            { label: 'À qui cela convient', values: ['Patients privilégiant le naturel et ayant une dextérité suffisante', 'Patients à dextérité limitée ou recherchant la simplicité'] }
          ],
          note:
            'Les deux dispositifs apportent une solution durable. Le choix se fait en pesant ensemble la dextérité, les attentes, les affections associées et le coût.'
        },
        recovery: [
          {
            period: 'Semaine 1',
            body: 'Œdème, ecchymoses et douleur sont attendus ; un traitement antalgique et antibiotique est suivi. Le dispositif n’est pas utilisé pendant cette période. Les longues marches et le port de charges sont évités.'
          },
          {
            period: 'Semaines 2–3',
            body: 'L’œdème diminue nettement. La reprise d’un travail de bureau est généralement possible. Les soins de cicatrice se poursuivent.'
          },
          {
            period: 'Semaines 4–6',
            body: 'Le dispositif est activé et son utilisation enseignée. Les premières utilisations se font sous la conduite du médecin.'
          },
          {
            period: 'Après la 6e semaine',
            body: 'L’activité sexuelle reprend avec l’accord de votre médecin. S’habituer au dispositif peut demander du temps les premières semaines ; c’est normal.'
          },
          {
            period: 'Mois 3',
            body: 'Consultation de contrôle ; le fonctionnement du dispositif et votre satisfaction sont évalués. Un suivi annuel est ensuite recommandé.'
          }
        ],
        price: {
          from: 0,
          to: 0,
          currency: 'EUR',
          disclaimer:
            'Le prix varie sensiblement selon le type et la marque d’implant retenus. Un devis ferme est établi une fois le type d’implant décidé.'
        },
        packageIncludes: [
          'Intervention et séjour hospitalier',
          'Anesthésie et bloc opératoire',
          'Le dispositif implanté (selon le type retenu)',
          'Bilan préopératoire',
          'Transferts aéroport–hôpital–hôtel',
          'Hébergement (patient + 1 accompagnant)',
          'Interprète médical et coordination confidentielle',
          'Apprentissage du dispositif et contrôles en ligne après la sortie'
        ],
        faqs: [
          {
            q: 'Une érection naturelle est-elle possible après un implant ?',
            a: 'La rigidité est assurée dans tous les cas par la prothèse ; vous ne devez pas attendre une érection suffisante pour un rapport sans le dispositif. Avec la dilatation sérielle classique, le tissu érectile est nettement endommagé et la tumescence spontanée est donc largement perdue. Avec les approches préservant les tissus, le tissu caverneux et l’artère sont épargnés autant que possible ; une méta-analyse de 2026 a rapporté que la tumescence partielle (tumescence résiduelle) est nettement plus souvent conservée chez ces patients qu’avec la méthode classique. La décision reste néanmoins définitive : une fois l’implant posé, il n’y a pas de retour en arrière.'
          },
          {
            q: 'Qu’est-ce que l’aquadissection et qu’est-ce que cela change pour moi ?',
            a: 'Avant la pose de l’implant, l’intérieur du tissu spongieux de la verge est dilaté. Dans la méthode classique, cela se fait mécaniquement avec des dilatateurs métalliques ; en aquadissection, les plans tissulaires sont séparés par du liquide délivré sous pression. C’est une application des approches visant à préserver le tissu caverneux. Une revue systématique avec méta-analyse de 2026 a rapporté qu’avec les techniques préservant les tissus, la préservation de l’artère caverneuse et la tumescence partielle postopératoire étaient plus fréquentes qu’avec la dilatation classique, les taux de complications étant comparables ; cette donnée repose sur 4 études randomisées et 193 patients. La technique peut être particulièrement utile lorsque le tissu est induré et rétréci (fibrotique). Son adéquation à votre cas est évaluée après examen et imagerie.'
          },
          {
            q: 'L’éjaculation et l’orgasme sont-ils affectés ?',
            a: 'Non. L’implant ne fournit que la rigidité ; l’éjaculation et l’orgasme passent par d’autres mécanismes et sont généralement préservés. Si vous avez déjà été opéré de la prostate, la situation concernant l’éjaculation dépend de cette intervention, non de l’implant.'
          },
          {
            q: 'Est-ce visible de l’extérieur ?',
            a: 'Une prothèse gonflable à trois pièces ne se remarque pas sous les vêtements, car la verge reste souple lorsqu’elle n’est pas utilisée. Avec un implant malléable, la verge est en permanence semi-rigide et donc un peu plus difficile à dissimuler ; c’est l’un des points abordés lors du choix du type.'
          },
          {
            q: 'Quel est le risque d’infection et comment est-il réduit ?',
            a: 'L’infection est la complication la plus importante de la chirurgie prothétique et impose le plus souvent, lorsqu’elle survient, le retrait du dispositif. Pour réduire le risque, on utilise des dispositifs enduits d’antibiotique, un protocole de stérilité strict et une technique d’implantation sans contact. L’équilibration de la glycémie avant l’intervention et l’arrêt du tabac sont les deux facteurs qui réduisent le plus le risque.'
          },
          {
            q: 'Combien de temps dure un implant ?',
            a: 'Les implants sont conçus pour durer de nombreuses années ; s’agissant toutefois d’un dispositif mécanique, une défaillance reste possible avec le temps et peut imposer une reprise chirurgicale. La garantie du fabricant et les modalités de suivi vous sont expliquées avant l’intervention.'
          },
          {
            q: 'Ma verge sera-t-elle plus courte ?',
            a: 'Un implant n’allonge pas la verge. Certains patients ont après l’intervention la sensation qu’elle est plus courte ; cela tient généralement au fait que l’allongement complet d’une érection naturelle est remplacé par la rigidité du dispositif. Cette attente est toujours discutée au préalable.'
          },
          {
            q: 'Quand puis-je avoir des rapports sexuels ?',
            a: 'Le dispositif est généralement activé après 4 à 6 semaines et son utilisation enseignée ; l’activité sexuelle commence ensuite avec l’accord de votre médecin. Une utilisation trop précoce peut nuire à la cicatrisation.'
          },
          {
            q: 'Le parcours reste-t-il confidentiel ?',
            a: 'Oui. Pour les demandes relevant de l’andrologie, l’ensemble des échanges et de la coordination est mené selon le principe de confidentialité. Les informations que vous partagez ne sont traitées qu’à des fins d’évaluation. Si vous le souhaitez, vous pouvez échanger en tête-à-tête via la consultation en ligne payante, sans venir à la clinique.'
          },
          {
            q: 'Dois-je d’abord essayer les traitements plus simples ?',
            a: 'Oui, en règle générale. L’implant est la dernière étape du traitement par paliers. Une prothèse n’est pas proposée avant que les médicaments, les injections ou la pompe à vide n’aient été essayés, car ces options sont réversibles alors que l’implant ne l’est pas.'
          }
        ],
        sources: [
          {
            label:
              'EAU Guidelines on Sexual and Reproductive Health — Association européenne d’urologie',
            url: 'https://uroweb.org/guidelines/sexual-and-reproductive-health'
          },
          {
            label:
              'Mohamed H, Abdelshafi A, Ahmed A, Deameh MG, Mohamed T, Ramez M, Raheem O. Impact of cavernous tissue-sparing techniques on postoperative outcomes in penile prosthesis surgery: a systematic review and meta-analysis. The Journal of Sexual Medicine, 2026;23(2):qdag006.',
            url: 'https://doi.org/10.1093/jsxmed/qdag006'
          }
        ]
      },
      ru: {
        title: 'Фаллопротезирование (пенильный имплант): операция',
        summary:
          'Долговременное решение при нарушениях эрекции, не отвечающих на лекарства и другие методы, с помощью устройства, имплантируемого в половой член.',
        metaTitle: 'Фаллопротезирование: надувные и пластичные импланты',
        metaDescription:
          'Операция фаллопротезирования: кому подходит, типы имплантов, риски, восстановление и частые вопросы. Процесс с приоритетом конфиденциальности.',
        quickFacts: {
          duration: '60–90 минут',
          anesthesia: 'Общая или спинальная анестезия',
          hospitalStay: '1 ночь',
          stayInTurkey: '7–10 дней',
          catheter: '1 день',
          returnToWork: '1–2 недели (офисная работа)',
          flightClearance: '7–10-й день'
        },
        definition: [
          'Эректильная дисфункция — это невозможность достичь или удержать эрекцию, достаточную для полового акта. Лечение строится ступенчато: сначала образ жизни и при необходимости гормональная коррекция, затем препараты внутрь (ингибиторы ФДЭ-5), далее интракавернозные инъекции или вакуумное устройство.',
          'Фаллопротез — хирургическое решение, которое рассматривают, когда эти ступени не дают достаточного результата. В пещеристые тела полового члена, отвечающие за эрекцию, помещают цилиндры, обеспечивающие ригидность. Устройство даёт жёсткость, которой пациент управляет сам и может воспользоваться в любой момент.',
          'ВАЖНОЕ И НЕОБРАТИМОЕ РЕШЕНИЕ: установка протеза не является обратимой процедурой. При классическом методе пещеристые тела последовательно бужируют металлическими дилататорами; при этом ткань, отвечающая за эрекцию, существенно повреждается, и естественной, спонтанной эрекции после операции не ожидается. Даже если протез удалить, прежнее состояние восстановить нельзя.',
          'В последние годы здесь появилось различие. Подходы, щадящие кавернозную ткань (cavernous-sparing), направлены на максимальное сохранение кавернозной ткани и артерии во время расширения. Систематический обзор с метаанализом 2026 года показал, что у пациентов, оперированных по тканесберегающей методике, сохранение кавернозной артерии и послеоперационная частичная тумесценция (остаточная тумесценция) встречались заметно чаще, чем при классическом последовательном бужировании, тогда как частота осложнений между двумя методиками статистически не различалась. Эти данные опираются на 4 рандомизированных исследования и в общей сложности 193 пациента: результат обнадёживающий, но число наблюдений пока ограничено.',
          'Эта находка НЕ означает, что после установки протеза у вас будет эрекция, достаточная для полового акта без устройства. Сохраняются частичная тумесценция и сосудистая функция; жёсткость по-прежнему обеспечивает протез. Решение остаётся необратимым. Поэтому фаллопротезирование рекомендуют лишь после того, как другие варианты лечения действительно испробованы, а ожидания подробно обсуждены.',
          'Существуют два основных типа имплантов. В трёхкомпонентном надувном протезе помимо цилиндров есть небольшая помпа в мошонке и резервуар с жидкостью в брюшной полости; при нажатии на помпу возникает ригидность, а затем жидкость возвращается и половой член вновь становится мягким. В пластичном (malleable) импланте половой член постоянно полужёсткий и устанавливается в нужное положение рукой.',
          'Рекомендации Европейской ассоциации урологии отмечают, что у правильно отобранных пациентов фаллопротезирование — метод с высокой сообщаемой удовлетворённостью пациента и партнёрши. Самый сильный фактор этой удовлетворённости — корректно проведённая беседа об ожиданиях до операции.',
          'АКВАДИССЕКЦИЯ (ГИДРОДИССЕКЦИЯ): это один из способов реализации описанного выше тканесберегающего подхода. Вместо механического расширения пещеристого тела металлическими дилататорами тканевые слои разделяют жидкостью, подаваемой под давлением. Цель — уменьшить механическую нагрузку на кавернозную ткань, белочную оболочку и уретру во время расширения. В нашей клинике эта методика применяется у отобранных пациентов, признанных подходящими после оценки; рутинно у всех она не используется.',
          'Аквадиссекция может быть особенно полезна, когда ткань пещеристых тел уплотнена и сужена (фиброз): после затяжного приапизма, после удаления ранее установленного протеза из-за инфекции или при выраженной болезни Пейрони. В этих случаях механическое расширение технически трудно, а риск повреждения возрастает.'
        ],
        eligibility: {
          suitable: [
            'Стойкие нарушения эрекции, при которых препараты, инъекции и вакуумное устройство испробованы без достаточного результата',
            'Резистентная к лечению эректильная дисфункция после радикальной простатэктомии или операций на малом тазу',
            'Выраженная сосудистая эректильная дисфункция при диабете',
            'Болезнь Пейрони в сочетании с эректильной дисфункцией',
            'Для надувного импланта: достаточная ловкость рук для работы с помпой'
          ],
          notSuitable: [
            'Активная инфекция (мочевых путей, кожи или системная) — операцию не выполняют до излечения инфекции',
            'Некомпенсированный диабет — повышает риск инфекции; сначала нормализуют уровень глюкозы',
            'Пациенты, ещё не испробовавшие более простые ступени лечения',
            'Пациенты с нереалистичными ожиданиями — имплант не добавляет ни длины, ни чувствительности',
            'Нарушения эрекции преимущественно психогенного происхождения — в приоритете консультирование и медикаментозное лечение'
          ]
        },
        technology: [
          'Расширение пещеристых тел методом аквадиссекции (гидродиссекции)',
          'Трёхкомпонентный надувной протез (цилиндры + помпа в мошонке + резервуар)',
          'Пластичный имплант',
          'Устройства с антибактериальным покрытием или пропиткой для снижения риска инфекции',
          'Строгий протокол стерильности и методика имплантации без касания (no-touch)'
        ],
        surgeonExperience: {
          caseVolume: '',
          note:
            'Андрология и хирургия фаллопротезирования входят в сферу работы доцента, д-ра Мюслюма Эргюна. Тип импланта подбирается вместе с вами после оценки ловкости рук, сопутствующих заболеваний и ожиданий.'
        },
        timeline: [
          {
            when: 'Дистанционно',
            title: 'Конфиденциальная предварительная оценка',
            body: 'Длительность жалоб, уже испробованные методы, статус по диабету и сердечно-сосудистым заболеваниям, перенесённые операции и принимаемые препараты оцениваются конфиденциально.'
          },
          {
            when: '1-й день',
            title: 'Осмотр и беседа об ожиданиях',
            body: 'Очный осмотр, необходимые исследования и выбор типа импланта. В этой беседе подробно обсуждается, что устройство даёт — и чего оно не даёт.'
          },
          {
            when: '2-й день',
            title: 'Операция',
            body: 'Вмешательство выполняется под общей или спинальной анестезией и обычно занимает 60–90 минут. Разрез выполняется в области мошонки или у основания полового члена. Для расширения пещеристых тел у отобранных и подходящих пациентов используется методика аквадиссекции.'
          },
          {
            when: '3-й день',
            title: 'Удаление катетера и выписка',
            body: 'Катетер обычно удаляют на следующий день. Объясняют уход за повязкой и схему приёма препаратов, после чего планируют выписку.'
          },
          {
            when: '7–10-й день',
            title: 'Контроль и возвращение',
            body: 'Осмотр раны, оценка швов и разрешение на обратный перелёт. На этом этапе устройство ЕЩЁ НЕ ИСПОЛЬЗУЕТСЯ.'
          },
          {
            when: '4–6-я неделя',
            title: 'Активация устройства и обучение',
            body: 'После спадения отёка устройство активируют и пошагово обучают пользованию. При необходимости это обучение можно провести онлайн.'
          }
        ],
        risks: [
          'Инфекция — важнейшее осложнение протезной хирургии; при её развитии устройство может потребоваться удалить. Диабет и курение повышают риск.',
          'Механическая поломка — возможна в отдалённом периоде, особенно у многокомпонентных устройств, и может потребовать повторной операции',
          'Давление на кожу или эрозия устройства (нечасто)',
          'Снижение чувствительности головки',
          'ОЩУЩЕНИЕ укорочения полового члена — имплант не удлиняет; именно поэтому важна предоперационная беседа об ожиданиях',
          'Кровотечение, гематома и нарушения заживления раны',
          'Общие хирургические риски, связанные с анестезией'
        ],
        alternatives: [
          'Ингибиторы ФДЭ-5 (препараты внутрь)',
          'Интракавернозные инъекции',
          'Вакуумное эрекционное устройство',
          'Ударно-волновая терапия низкой интенсивности (Li-ESWT) — уровень доказательности пока ограничен; рассматривается у отдельных пациентов',
          'Психосексуальное консультирование — особенно при наличии психологического компонента'
        ],
        comparison: {
          title: 'Трёхкомпонентный надувной протез и пластичный имплант',
          columns: ['Критерий', 'Трёхкомпонентный надувной', 'Пластичный'],
          rows: [
            { label: 'Естественность', values: ['Более естественный: надувается и сдувается', 'Половой член постоянно полужёсткий'] },
            { label: 'Использование', values: ['Через помпу в мошонке; нужна ловкость рук', 'Устанавливается в положение рукой'] },
            { label: 'Незаметность под одеждой', values: ['Высокая', 'Ниже'] },
            { label: 'Число компонентов и поломки', values: ['Больше компонентов; возможна ревизия в отдалённом периоде', 'Меньше компонентов; механически надёжнее'] },
            { label: 'Сложность операции', values: ['Сложнее', 'Проще'] },
            { label: 'Кому подходит', values: ['Пациентам, ценящим естественность и имеющим достаточную ловкость', 'Пациентам с ограниченной ловкостью или предпочитающим простоту'] }
          ],
          note:
            'Оба устройства дают долговременное решение. Выбор делается с учётом ловкости рук, ожиданий, сопутствующих заболеваний и стоимости.'
        },
        recovery: [
          {
            period: '1-я неделя',
            body: 'Отёк, синяки и боль ожидаемы; применяются обезболивающие и антибиотики по схеме. Устройство в этот период не используется. Длительных прогулок и подъёма тяжестей избегают.'
          },
          {
            period: '2–3-я неделя',
            body: 'Отёк заметно уменьшается. Возвращение к офисной работе обычно возможно. Уход за раной продолжается.'
          },
          {
            period: '4–6-я неделя',
            body: 'Устройство активируют и обучают пользованию. Первые применения проходят под руководством врача.'
          },
          {
            period: 'После 6-й недели',
            body: 'Половая жизнь возобновляется с разрешения врача. Привыкание к устройству в первые недели может занять время; это нормально.'
          },
          {
            period: '3-й месяц',
            body: 'Контрольный осмотр; оценивают работу устройства и вашу удовлетворённость. Далее рекомендуется ежегодное наблюдение.'
          }
        ],
        price: {
          from: 0,
          to: 0,
          currency: 'EUR',
          disclaimer:
            'Стоимость существенно зависит от выбранного типа и марки протеза. Точное предложение даётся после того, как тип импланта определён.'
        },
        packageIncludes: [
          'Операция и пребывание в больнице',
          'Анестезия и операционная',
          'Сам имплант (в зависимости от выбранного типа)',
          'Предоперационное обследование',
          'Трансферы аэропорт–больница–отель',
          'Проживание (пациент + 1 сопровождающий)',
          'Медицинский переводчик и конфиденциальная координация',
          'Обучение пользованию устройством и онлайн-наблюдение после выписки'
        ],
        faqs: [
          {
            q: 'Возможна ли естественная эрекция после импланта?',
            a: 'Жёсткость в любом случае обеспечивает протез; эрекции, достаточной для полового акта без устройства, ожидать не следует. При классическом последовательном бужировании эректильная ткань существенно повреждается, поэтому спонтанная тумесценция в основном утрачивается. При тканесберегающих подходах кавернозная ткань и артерия сохраняются максимально; метаанализ 2026 года показал, что частичная тумесценция у таких пациентов сохраняется заметно чаще, чем при классическом методе. Тем не менее решение остаётся необратимым: после установки импланта пути назад нет.'
          },
          {
            q: 'Что такое аквадиссекция и что она меняет для меня?',
            a: 'Перед установкой импланта внутреннюю часть пещеристой ткани расширяют. При классическом методе это делается механически металлическими дилататорами; при аквадиссекции тканевые слои разделяют жидкостью под давлением. Это одно из применений подходов, направленных на сохранение кавернозной ткани. Систематический обзор с метаанализом 2026 года показал, что при тканесберегающих методиках сохранение кавернозной артерии и послеоперационная частичная тумесценция встречались чаще, чем при классическом расширении, при сопоставимой частоте осложнений; эти данные основаны на 4 рандомизированных исследованиях и 193 пациентах. Методика может быть особенно полезна при уплотнённой и суженной (фиброзной) ткани. Подходит ли она в вашем случае, оценивают после осмотра и визуализации.'
          },
          {
            q: 'Влияет ли это на эякуляцию и оргазм?',
            a: 'Нет. Имплант обеспечивает только жёсткость; эякуляция и оргазм происходят через другие механизмы и обычно сохраняются. Если ранее вы перенесли операцию на простате, ситуация с эякуляцией зависит от той операции, а не от импланта.'
          },
          {
            q: 'Заметно ли это со стороны?',
            a: 'Трёхкомпонентный надувной протез под одеждой незаметен, так как в нерабочем состоянии половой член остаётся мягким. При пластичном импланте половой член постоянно полужёсткий, поэтому скрыть его немного сложнее; это один из вопросов, обсуждаемых при выборе типа.'
          },
          {
            q: 'Каков риск инфекции и как его снизить?',
            a: 'Инфекция — важнейшее осложнение протезной хирургии, и при её развитии обычно требуется удаление устройства. Для снижения риска применяют устройства с антибактериальным покрытием, строгий протокол стерильности и методику имплантации без касания. Нормализация уровня глюкозы до операции и отказ от курения — два важнейших фактора снижения риска.'
          },
          {
            q: 'Сколько служит имплант?',
            a: 'Импланты рассчитаны на многие годы; однако это механическое устройство, поэтому со временем возможна поломка, и тогда может потребоваться ревизионная операция. Гарантия производителя и условия наблюдения разъясняются вам до операции.'
          },
          {
            q: 'Станет ли половой член короче?',
            a: 'Имплант не удлиняет половой член. У некоторых пациентов после операции возникает ощущение укорочения; обычно это связано с тем, что полное удлинение при естественной эрекции заменяется жёсткостью, которую даёт устройство. Это ожидание всегда обсуждается заранее.'
          },
          {
            q: 'Когда можно вести половую жизнь?',
            a: 'Устройство обычно активируют через 4–6 недель и обучают пользованию; половая жизнь начинается после этого периода с разрешения врача. Слишком раннее использование может неблагоприятно повлиять на заживление.'
          },
          {
            q: 'Сохраняется ли конфиденциальность?',
            a: 'Да. При обращениях по андрологии все консультации и координация ведутся по принципу конфиденциальности. Предоставленная вами информация обрабатывается только для оценки. При желании вы можете поговорить один на один через платную онлайн-консультацию, не приезжая в клинику.'
          },
          {
            q: 'Обязательно ли сначала попробовать более простые методы?',
            a: 'Да, как правило. Имплант — последняя ступень ступенчатого лечения. Протез не рекомендуют, пока не испробованы препараты, инъекции или вакуумное устройство, поскольку эти варианты обратимы, а имплант — нет.'
          }
        ],
        sources: [
          {
            label:
              'Рекомендации EAU по сексуальному и репродуктивному здоровью — Европейская ассоциация урологии',
            url: 'https://uroweb.org/guidelines/sexual-and-reproductive-health'
          },
          {
            label:
              'Mohamed H, Abdelshafi A, Ahmed A, Deameh MG, Mohamed T, Ramez M, Raheem O. Impact of cavernous tissue-sparing techniques on postoperative outcomes in penile prosthesis surgery: a systematic review and meta-analysis. The Journal of Sexual Medicine, 2026;23(2):qdag006.',
            url: 'https://doi.org/10.1093/jsxmed/qdag006'
          }
        ]
      },
      ar: {
        title: 'جراحة دعامة القضيب (الدعامة الذكرية)',
        summary:
          'حل دائم لمشكلات الانتصاب التي لا تستجيب للأدوية والعلاجات الأخرى، عبر جهاز يُزرع داخل القضيب.',
        metaTitle: 'جراحة دعامة القضيب | الدعامات القابلة للنفخ والقابلة للثني',
        metaDescription:
          'جراحة دعامة القضيب: لمن تناسب، وأنواع الدعامات، والمخاطر، والتعافي، والأسئلة الشائعة. مسار تُعطى فيه الخصوصية الأولوية.',
        quickFacts: {
          duration: '60–90 دقيقة',
          anesthesia: 'تخدير عام أو نصفي',
          hospitalStay: 'ليلة واحدة',
          stayInTurkey: '7–10 أيام',
          catheter: 'يوم واحد',
          returnToWork: '1–2 أسبوع (عمل مكتبي)',
          flightClearance: 'اليوم 7–10'
        },
        definition: [
          'ضعف الانتصاب هو عدم القدرة على تحقيق انتصاب كافٍ للجماع أو الحفاظ عليه. ويتبع العلاج نهجًا تدريجيًا: أولًا نمط الحياة وتعديل الهرمونات عند اللزوم، ثم الأدوية الفموية (مثبطات PDE5)، ثم الحقن داخل الأجسام الكهفية أو جهاز الشفط.',
          'دعامة القضيب هي الحل الجراحي الذي يُطرح حين لا تعطي هذه المراحل نتيجة كافية. تُوضع داخل النسيج الإسفنجي المسؤول عن الانتصاب (الأجسام الكهفية) أسطوانات توفّر الصلابة. ويمنح الجهاز صلابة يتحكّم بها المريض بنفسه ويستخدمها متى شاء.',
          'قرار مهم ودائم: زراعة الدعامة ليست إجراءً قابلًا للتراجع. في الطريقة التقليدية تُوسَّع الأجسام الكهفية تدريجيًا بموسّعات معدنية؛ وخلال ذلك يتضرّر النسيج المسؤول عن الانتصاب بدرجة كبيرة، ولا يُتوقّع بعد العملية انتصاب طبيعي تلقائي. وحتى لو أُزيلت الدعامة، لا يمكن العودة إلى الحالة السابقة.',
          'في السنوات الأخيرة ظهر تمييز في هذه النقطة. فالمناهج التي تحافظ على النسيج الكهفي (cavernous-sparing) تهدف إلى الحفاظ قدر الإمكان على النسيج الكهفي والشريان أثناء التوسيع. وقد أفادت مراجعة منهجية وتحليل تلوي صدرا عام 2026 بأن الحفاظ على الشريان الكهفي والانتفاخ الجزئي بعد العملية (التورّم المتبقّي) كانا أكثر تكرارًا بوضوح لدى المرضى الذين خضعوا لتقنية حافظة للنسيج مقارنةً بالتوسيع التدريجي التقليدي، في حين كانت معدلات المضاعفات متقاربة إحصائيًا بين التقنيتين. وتستند هذه الأدلة إلى 4 دراسات عشوائية و193 مريضًا إجمالًا؛ أي أنها واعدة لكن عدد المرضى لا يزال محدودًا.',
          'هذه النتيجة لا تعني أنه سيكون لديكم بعد زراعة الدعامة انتصاب كافٍ للجماع من دون الجهاز. فما يُحافَظ عليه هو الانتفاخ الجزئي والوظيفة الوعائية؛ أما الصلابة فتوفّرها الدعامة. والقرار يبقى دائمًا. ولهذا لا يُنصَح بدعامة القضيب إلا بعد تجربة خيارات العلاج الأخرى فعليًا ومناقشة التوقعات بالتفصيل.',
          'هناك نوعان أساسيان. في الدعامة القابلة للنفخ ثلاثية القطع ترافق الأسطوانات مضخة صغيرة تُوضع في كيس الصفن وخزّان سائل يُوضع في البطن؛ وبالضغط على المضخة تتحقّق الصلابة، ثم يعود السائل فيلين القضيب مجددًا. أما في الدعامة القابلة للثني فيبقى القضيب شبه صلب دائمًا ويُوضَع في الاتجاه المطلوب باليد.',
          'تشير إرشادات الجمعية الأوروبية للمسالك البولية إلى أن جراحة دعامة القضيب، لدى المرضى المختارين بعناية، علاج تُسجَّل فيه درجة رضا عالية لدى المريض وشريكته. والعامل الأقوى في هذا الرضا هو إجراء حوار صحيح حول التوقعات قبل العملية.',
          'الأكوادِسِكشن (التسليخ بمساعدة السوائل): هو أحد أشكال تطبيق المنهج الحافظ للنسيج المذكور أعلاه. فبدلًا من توسيع داخل الجسم الكهفي ميكانيكيًا بموسّعات معدنية، تُفصَل طبقات النسيج بسائل يُضَخّ تحت ضغط. والهدف تقليل الإجهاد الميكانيكي الواقع على النسيج الكهفي والغلالة والإحليل أثناء التوسيع. وتُستخدم هذه التقنية في عيادتنا لدى حالات مختارة تُعدّ مناسبة بعد التقييم؛ ولا تُطبَّق روتينيًا على كل مريض.',
          'قد تكون الأكوادِسِكشن مفيدة بوجه خاص حين يصبح نسيج الأجسام الكهفية متصلّبًا وضيّقًا (ليفيًا): بعد قساح مطوّل، أو بعد إزالة دعامة سبق زرعها بسبب التهاب، أو في مرض بيروني المتقدّم. ففي هذه الحالات يكون التوسيع الميكانيكي صعبًا تقنيًا ويزداد خطر الإصابة.'
        ],
        eligibility: {
          suitable: [
            'مشكلات انتصاب مستمرة جُرِّبت فيها الأدوية والحقن وجهاز الشفط دون نتيجة كافية',
            'ضعف انتصاب مقاوم للعلاج بعد الاستئصال الجذري للبروستاتا أو جراحة الحوض',
            'ضعف انتصاب وعائي متقدّم مرتبط بالسكري',
            'مرض بيروني المصحوب بضعف انتصاب',
            'للدعامة القابلة للنفخ: امتلاك المهارة اليدوية اللازمة لتشغيل المضخة'
          ],
          notSuitable: [
            'وجود التهاب نشط (بولي أو جلدي أو جهازي) — لا تُجرى العملية قبل علاج الالتهاب',
            'سكري غير منضبط — يرفع خطر العدوى؛ ويُضبَط سكر الدم أولًا',
            'المرضى الذين لم يجرّبوا بعدُ مراحل العلاج الأبسط',
            'المرضى ذوو التوقعات غير الواقعية — فالدعامة لا تزيد الطول ولا الإحساس',
            'مشكلات الانتصاب ذات المنشأ النفسي الغالب — الأولوية للإرشاد والعلاج الدوائي'
          ]
        },
        technology: [
          'توسيع الأجسام الكهفية بتقنية الأكوادِسِكشن (التسليخ بمساعدة السوائل)',
          'دعامة قابلة للنفخ ثلاثية القطع (أسطوانات + مضخة في كيس الصفن + خزّان)',
          'دعامة قابلة للثني',
          'أجهزة مطلية أو مشبعة بالمضاد الحيوي لتقليل خطر العدوى',
          'بروتوكول تعقيم صارم وتقنية زراعة دون ملامسة (no-touch)'
        ],
        surgeonExperience: {
          caseVolume: '',
          note:
            'طب الذكورة وجراحة دعامة القضيب من مجالات عمل الأستاذ المشارك د. مسلم إرغن. ويُختار نوع الدعامة معكم بعد تقييم المهارة اليدوية والأمراض المصاحبة والتوقعات.'
        },
        timeline: [
          {
            when: 'عن بُعد',
            title: 'تقييم مبدئي سرّي',
            body: 'تُقيَّم بسرّية مدة الشكوى، والعلاجات التي جُرِّبت، وحالة السكري والقلب والأوعية، والعمليات السابقة، والأدوية التي تتناولونها.'
          },
          {
            when: 'اليوم الأول',
            title: 'الفحص وحوار التوقعات',
            body: 'فحص سريري مباشر والفحوص اللازمة واختيار نوع الدعامة. وفي هذا الحوار يُناقَش بالتفصيل ما يقدّمه الجهاز وما لا يقدّمه.'
          },
          {
            when: 'اليوم الثاني',
            title: 'العملية',
            body: 'تُجرى تحت تخدير عام أو نصفي وتستغرق عادةً 60–90 دقيقة. ويكون الشق في منطقة كيس الصفن أو عند جذر القضيب. ولتوسيع الأجسام الكهفية تُستخدم تقنية الأكوادِسِكشن في الحالات المختارة والمناسبة.'
          },
          {
            when: 'اليوم الثالث',
            title: 'إزالة القسطرة والخروج',
            body: 'تُزال القسطرة عادةً في اليوم التالي. ويُشرَح العناية بالضماد ونظام الأدوية، ثم يُخطَّط للخروج.'
          },
          {
            when: 'اليوم 7–10',
            title: 'المتابعة والعودة',
            body: 'فحص الجرح وتقييم الغرز والإذن برحلة العودة. ولا يُستخدَم الجهاز بعد في هذه المرحلة.'
          },
          {
            when: 'الأسبوع 4–6',
            title: 'تفعيل الجهاز والتدريب على استخدامه',
            body: 'بعد زوال التورّم يُفعَّل الجهاز ويُعلَّم استخدامه خطوة بخطوة. ويمكن إجراء هذا التدريب عبر الإنترنت عند الحاجة.'
          }
        ],
        risks: [
          'العدوى — أهم مضاعفات جراحة الدعامات؛ وعند حدوثها قد يلزم إزالة الجهاز. ويزيد السكري والتدخين من الخطر.',
          'العطل الميكانيكي — وارد على المدى الطويل خصوصًا في الأجهزة متعدّدة القطع، وقد يستلزم جراحة مراجعة',
          'ضغط الجهاز على الجلد أو تآكله (غير شائع)',
          'نقص الإحساس في حشفة القضيب',
          'الشعور بأن القضيب أصبح أقصر — فالدعامة لا تُطيل؛ ولهذا تُعدّ مناقشة التوقعات قبل العملية مهمة',
          'النزف والورم الدموي ومشكلات التئام الجرح',
          'المخاطر الجراحية العامة المرتبطة بالتخدير'
        ],
        alternatives: [
          'مثبطات PDE5 (العلاج الفموي)',
          'الحقن داخل الأجسام الكهفية',
          'جهاز الشفط للانتصاب',
          'العلاج بالموجات التصادمية منخفضة الشدة (Li-ESWT) — مستوى الأدلة لا يزال محدودًا؛ ويُنظَر فيه لدى مرضى مختارين',
          'الإرشاد النفسي الجنسي — خصوصًا عند وجود مكوّن نفسي'
        ],
        comparison: {
          title: 'مقارنة الدعامة القابلة للنفخ ثلاثية القطع بالدعامة القابلة للثني',
          columns: ['المعيار', 'قابلة للنفخ ثلاثية القطع', 'قابلة للثني'],
          rows: [
            { label: 'الطبيعية', values: ['أكثر طبيعية لأنها تنتفخ وتفرغ', 'يبقى القضيب شبه صلب دائمًا'] },
            { label: 'طريقة الاستخدام', values: ['عبر المضخة في كيس الصفن؛ تتطلّب مهارة يدوية', 'يُوضَع في الاتجاه المطلوب بالثني باليد'] },
            { label: 'إخفاؤها تحت الملابس', values: ['عالية', 'أقل'] },
            { label: 'عدد القطع والعطل الميكانيكي', values: ['قطع أكثر؛ احتمال مراجعة على المدى الطويل', 'قطع أقل؛ أمتن ميكانيكيًا'] },
            { label: 'تعقيد العملية', values: ['أكثر تعقيدًا', 'أبسط'] },
            { label: 'لمن تناسب', values: ['من يعطون الأولوية للطبيعية ولديهم مهارة يدوية كافية', 'من لديهم مهارة يدوية محدودة أو يفضّلون البساطة'] }
          ],
          note:
            'كلا الجهازين يقدّم حلًا دائمًا. ويُتَّخذ الاختيار بموازنة المهارة اليدوية والتوقعات والأمراض المصاحبة والتكلفة معًا.'
        },
        recovery: [
          {
            period: 'الأسبوع الأول',
            body: 'التورّم والكدمات والألم أمور متوقّعة؛ ويُتَّبع نظام المسكّنات والمضادات الحيوية. ولا يُستخدَم الجهاز في هذه الفترة. ويُتجنَّب المشي الطويل ورفع الأثقال.'
          },
          {
            period: 'الأسبوع 2–3',
            body: 'يقلّ التورّم بوضوح. والعودة إلى العمل المكتبي ممكنة عادةً. وتستمر العناية بالجرح.'
          },
          {
            period: 'الأسبوع 4–6',
            body: 'يُفعَّل الجهاز ويُقدَّم التدريب على استخدامه. وتتم الاستخدامات الأولى بتوجيه من الطبيب.'
          },
          {
            period: 'بعد الأسبوع السادس',
            body: 'تبدأ العلاقة الزوجية بإذن الطبيب. وقد يستغرق التعوّد على الجهاز بعض الوقت في الأسابيع الأولى؛ وهذا طبيعي.'
          },
          {
            period: 'الشهر الثالث',
            body: 'فحص متابعة؛ ويُقيَّم عمل الجهاز ومدى رضاكم. ويُنصَح بعدها بمتابعة سنوية.'
          }
        ],
        price: {
          from: 0,
          to: 0,
          currency: 'EUR',
          disclaimer:
            'تختلف التكلفة بوضوح بحسب نوع الدعامة وعلامتها التجارية. ويُقدَّم عرض نهائي بعد تحديد نوع الدعامة.'
        },
        packageIncludes: [
          'العملية والإقامة في المستشفى',
          'التخدير وغرفة العمليات',
          'جهاز الدعامة (بحسب النوع المختار)',
          'الفحوص قبل العملية',
          'تنقّلات المطار–المستشفى–الفندق',
          'الإقامة (المريض + مرافق واحد)',
          'مترجم طبي وتنسيق قائم على السرّية',
          'التدريب على استخدام الجهاز ومتابعة عبر الإنترنت بعد الخروج'
        ],
        faqs: [
          {
            q: 'هل يمكن حدوث انتصاب طبيعي بعد الدعامة؟',
            a: 'الصلابة توفّرها الدعامة في كل الأحوال؛ ولا ينبغي توقّع انتصاب كافٍ للجماع من دون الجهاز. ففي التوسيع التدريجي التقليدي يتضرّر النسيج الانتصابي بدرجة كبيرة، ومن ثمّ يُفقَد التورّم التلقائي إلى حدّ بعيد. أما في المناهج الحافظة للنسيج فيُحافَظ على النسيج الكهفي والشريان قدر الإمكان؛ وقد أفاد تحليل تلوي صدر عام 2026 بأن الانتفاخ الجزئي يبقى محفوظًا لدى هؤلاء المرضى أكثر بوضوح منه في الطريقة التقليدية. ومع ذلك يبقى القرار دائمًا: فبعد زرع الدعامة لا رجعة.'
          },
          {
            q: 'ما الأكوادِسِكشن وما الفرق الذي تحدثه بالنسبة لي؟',
            a: 'قبل زرع الدعامة يُوسَّع داخل النسيج الإسفنجي للقضيب. وفي الطريقة التقليدية يتم ذلك ميكانيكيًا بموسّعات معدنية؛ أما في الأكوادِسِكشن فتُفصَل طبقات النسيج بسائل يُضَخّ تحت ضغط. وهذا أحد تطبيقات المناهج الهادفة إلى الحفاظ على النسيج الكهفي. وقد أفادت مراجعة منهجية وتحليل تلوي عام 2026 بأن الحفاظ على الشريان الكهفي والانتفاخ الجزئي بعد العملية كانا أكثر تكرارًا مع التقنيات الحافظة للنسيج مقارنةً بالتوسيع التقليدي، مع تقارب معدلات المضاعفات؛ وتستند هذه الأدلة إلى 4 دراسات عشوائية و193 مريضًا. وقد تكون التقنية مفيدة بوجه خاص حين يكون النسيج متصلّبًا وضيّقًا (ليفيًا). ويُقيَّم مدى ملاءمتها لحالتكم بعد الفحص والتصوير.'
          },
          {
            q: 'هل يتأثر القذف والنشوة؟',
            a: 'لا. فالدعامة توفّر الصلابة فقط؛ أما القذف والنشوة فيحدثان بآليات مختلفة ويُحافَظ عليهما عادةً. وإن كنتم قد خضعتم لجراحة بروستاتا سابقًا، فإن وضع القذف يعتمد على تلك العملية لا على الدعامة.'
          },
          {
            q: 'هل تظهر من الخارج؟',
            a: 'الدعامة القابلة للنفخ ثلاثية القطع لا تُلاحَظ تحت الملابس لأن القضيب يبقى ليّنًا حين لا تُستخدَم. أما في الدعامة القابلة للثني فيكون القضيب شبه صلب دائمًا، لذا يصعب إخفاؤها قليلًا؛ وهذا من النقاط التي تُناقَش عند اختيار النوع.'
          },
          {
            q: 'ما خطر العدوى وكيف يُقلَّل؟',
            a: 'العدوى أهم مضاعفات جراحة الدعامات، وعند حدوثها تستلزم في الغالب إزالة الجهاز. ولتقليل الخطر تُستخدَم أجهزة مطلية بالمضاد الحيوي وبروتوكول تعقيم صارم وتقنية زراعة دون ملامسة. ويُعدّ ضبط سكر الدم قبل العملية والإقلاع عن التدخين أهم عاملين يخفّضان الخطر.'
          },
          {
            q: 'كم تدوم الدعامة؟',
            a: 'تُصمَّم الدعامات للاستخدام سنوات طويلة؛ لكنها جهاز ميكانيكي، لذا يبقى احتمال العطل قائمًا مع الوقت وقد يستلزم جراحة مراجعة. ويُشرَح لكم ضمان الشركة المصنّعة وشروط المتابعة قبل العملية.'
          },
          {
            q: 'هل يقصر قضيبي؟',
            a: 'الدعامة لا تُطيل القضيب. ويشعر بعض المرضى بعد العملية بأنه أصبح أقصر؛ ويعود ذلك عادةً إلى أن الاستطالة الكاملة في الانتصاب الطبيعي يحلّ محلّها الصلابة التي يوفّرها الجهاز. وتُناقَش هذه التوقعات دائمًا قبل العملية.'
          },
          {
            q: 'متى يمكنني ممارسة العلاقة الزوجية؟',
            a: 'يُفعَّل الجهاز عادةً بعد 4–6 أسابيع ويُقدَّم التدريب على استخدامه؛ وتبدأ العلاقة الزوجية بعد ذلك بإذن الطبيب. فالاستخدام المبكر قد يؤثر سلبًا في التئام الجرح.'
          },
          {
            q: 'هل يُدار المسار بسرّية؟',
            a: 'نعم. في مراجعات طب الذكورة تُدار جميع المحادثات والتنسيق وفق مبدأ السرّية. والمعلومات التي تشاركونها تُعالَج لغرض التقييم فقط. وإن رغبتم يمكنكم التحدّث وجهًا لوجه عبر الاستشارة المدفوعة عبر الإنترنت دون القدوم إلى العيادة.'
          },
          {
            q: 'هل يجب أن أجرّب العلاجات الأبسط أولًا؟',
            a: 'نعم، كقاعدة. فالدعامة هي المرحلة الأخيرة من العلاج التدريجي. ولا يُنصَح بها قبل تجربة الأدوية أو الحقن أو جهاز الشفط، لأن هذه الخيارات قابلة للتراجع بينما الدعامة ليست كذلك.'
          }
        ],
        sources: [
          {
            label:
              'إرشادات EAU حول الصحة الجنسية والإنجابية — الجمعية الأوروبية للمسالك البولية',
            url: 'https://uroweb.org/guidelines/sexual-and-reproductive-health'
          },
          {
            label:
              'Mohamed H, Abdelshafi A, Ahmed A, Deameh MG, Mohamed T, Ramez M, Raheem O. Impact of cavernous tissue-sparing techniques on postoperative outcomes in penile prosthesis surgery: a systematic review and meta-analysis. The Journal of Sexual Medicine, 2026;23(2):qdag006.',
            url: 'https://doi.org/10.1093/jsxmed/qdag006'
          }
        ]
      }
    }
  },
  {
    /**
     * Cerrah tarafından 4 Ekim 2026 tarihinde onaylandı ve yayına alındı.
     * Kaynak: EAU non-neurogenic male LUTS kılavuzu.
     */
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
      },
      en: {
        title: 'HoLEP (Holmium Laser Enucleation of the Prostate)',
        summary:
          'Enucleation of the obstructing prostate tissue with a holmium laser — the enucleation method with the largest body of long-term follow-up data.',
        metaTitle: 'HoLEP: Holmium Laser Enucleation of the Prostate',
        metaDescription:
          'HoLEP surgery for benign prostatic enlargement: who it suits, how it is performed, risks, recovery and how it differs from TURP and open prostatectomy.',
        quickFacts: {
          duration: '60–150 minutes',
          anesthesia: 'General or spinal anesthesia',
          hospitalStay: '1 night',
          stayInTurkey: '5–7 days',
          catheter: '1–2 days',
          returnToWork: '2–3 weeks',
          flightClearance: 'From day 7'
        },
        definition: [
          'The prostate is a gland that sits just below the bladder and surrounds the urinary channel. As it enlarges with age it compresses that channel from outside, and the bladder has to work progressively harder to push urine out. Symptoms usually build slowly: first a thinner stream and waking at night, then a sense of incomplete emptying, and at an advanced stage inability to pass urine or dependence on a catheter.',
          'HoLEP is a closed operation in which this obstructing tissue is separated from its capsule with a holmium laser and removed as a whole. The holmium laser is pulsed: it cuts tissue with energy delivered in very short bursts while controlling bleeding at the same time. The entire procedure is performed through the urinary channel, with no incision in the body.',
          'What distinguishes HoLEP most is that it can be used INDEPENDENTLY OF PROSTATE SIZE. In the guidelines of the European Association of Urology it appears as an alternative to TURP in small prostates and to open (simple) prostatectomy in large ones. HoLEP is also the enucleation technique with the broadest long-term follow-up data.',
          'The removed tissue is reduced inside the bladder with a morcellator and sent in full for pathology. Methods that vaporise tissue make this examination impossible; with HoLEP, an unexpected focus of cancer can still be diagnosed.',
          'A known feature of HoLEP is that the learning curve is steep for the surgeon. Outcomes are directly related to the experience of the operating team, which makes the choice of centre as important as the choice of method.'
        ],
        eligibility: {
          suitable: [
            'Prostates of any volume — especially glands above 80 ml that are not well suited to TURP',
            'Patients who do not benefit from medication or who stop it because of side effects',
            'Patients who have become catheter-dependent or who experience recurrent urinary retention',
            'Patients with bladder stones or recurrent infection caused by prostate enlargement',
            'Patients who have been offered open prostatectomy but are looking for a closed option'
          ],
          notSuitable: [
            'Patients with an active urinary tract infection — the infection is treated first',
            'Patients with confirmed prostate cancer — the treatment plan differs; HoLEP is considered only in limited situations for obstruction',
            'Patients whose bladder muscle has largely lost its contractile strength may not see full relief even once obstruction is removed',
            'Patients at high anesthetic risk with severe comorbidities',
            'Patients planning to father children — the possibility of retrograde ejaculation must be discussed beforehand'
          ]
        },
        technology: [
          'Holmium laser system (pulsed energy)',
          'Enucleation technique applicable independently of prostate volume',
          'Removal of tissue from the bladder with a morcellator',
          'Full pathological examination of the removed tissue'
        ],
        surgeonExperience: {
          caseVolume: '',
          note:
            'Assoc. Prof. Dr. Müslüm Ergün works with laser enucleation techniques and has peer-reviewed publications in this field. The method is selected after assessing prostate volume and any accompanying conditions.'
        },
        timeline: [
          {
            when: 'Remote',
            title: 'File assessment',
            body: 'Prostate volume (ultrasound or MRI), uroflowmetry, IPSS score, PSA and post-void residual are reviewed. Where the volume is large, the particular advantage HoLEP offers is assessed separately.'
          },
          {
            when: 'Day 1',
            title: 'Arrival and preparation',
            body: 'Examination, completion of any missing tests and anesthesia assessment. If you take blood thinners, their management is planned at this stage.'
          },
          {
            when: 'Day 2',
            title: 'Surgery',
            body: 'HoLEP is performed under general or spinal anesthesia. The duration is proportional to prostate volume; in large glands the procedure can take longer.'
          },
          {
            when: 'Day 3',
            title: 'Catheter removal and discharge',
            body: 'The catheter is removed once the urine is clear. You are discharged after you are seen to pass urine on your own.'
          },
          {
            when: 'Day 7–10',
            title: 'Review and pathology',
            body: 'Follow-up examination, review of the pathology result and clearance for the return flight.'
          }
        ],
        risks: [
          'Burning and sudden urgency when passing urine in the early period after surgery',
          'Temporary stress-type leakage — it can occur in the first weeks after enucleation and settles in most patients',
          'Retrograde ejaculation: common, harmless to health, but it affects fertility',
          'Urinary tract infection',
          'Urethral stricture or bladder neck contracture — uncommon; treated with an additional procedure if needed',
          'Bleeding; bladder injury during morcellation (rare)',
          'General risks related to anesthesia'
        ],
        alternatives: [
          'ThuLEP — enucleation with a thulium laser (same principle, different laser)',
          'TURP — classic endoscopic resection (in small and medium volumes)',
          'Rezūm — volume reduction with water vapour (in small prostates, less invasive)',
          'Medication (alpha blockers, 5-alpha reductase inhibitors)',
          'Open (simple) prostatectomy — the classic option HoLEP is increasingly replacing'
        ],
        comparison: {
          title: 'HoLEP, TURP and open prostatectomy compared',
          columns: ['Criterion', 'HoLEP', 'TURP', 'Open prostatectomy'],
          rows: [
            { label: 'Prostate volume limit', values: ['Independent of volume', 'Usually below 80 ml', 'Large volumes'] },
            { label: 'Incision', values: ['None (via urinary channel)', 'None (via urinary channel)', 'Lower abdominal incision'] },
            { label: 'Average catheter time', values: ['1–2 days', '2–3 days', '4–7 days'] },
            { label: 'Hospital stay', values: ['1 night', '1–2 nights', '3–5 nights'] },
            { label: 'Tissue sent for pathology', values: ['Yes', 'Yes', 'Yes'] },
            { label: 'Surgeon’s learning curve', values: ['Steep — experience is decisive', 'Established, widespread', 'Established'] }
          ],
          note:
            'This table is for general information. The method is chosen individually after assessing prostate volume, comorbidities, clotting status and the patient’s priorities.'
        },
        recovery: [
          {
            period: 'First 48 hours',
            body: 'The catheter is in place and bladder irrigation may be used. A pink tinge in the urine is an expected finding; plenty of fluids are advised.'
          },
          {
            period: 'Week 1',
            body: 'The catheter has been removed. Urinary flow clearly eases, although burning and urgency may persist for a while. Heavy lifting and straining are not advised.'
          },
          {
            period: 'Weeks 2–3',
            body: 'Returning to desk work is usually possible. Pelvic floor exercises support the recovery of any leakage.'
          },
          {
            period: 'Weeks 4–6',
            body: 'Urinary control largely settles. Heavy physical activity and sexual intercourse await your physician’s approval.'
          },
          {
            period: 'Month 3 onwards',
            body: 'The IPSS score and uroflowmetry are repeated so the improvement is measured objectively. Long-term follow-up is advised to monitor durability.'
          }
        ],
        price: {
          from: 0,
          to: 0,
          currency: 'EUR',
          disclaimer:
            'The price varies with prostate volume, procedure time, any accompanying interventions and length of stay. A firm quote follows file assessment.'
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
            q: 'Why is HoLEP described as an alternative to both TURP and open surgery?',
            a: 'Because it can be used independently of prostate volume. TURP is limited in large glands by operating time and safety, while open surgery requires an incision and a longer recovery. HoLEP overcomes both constraints by removing the obstructing tissue as a whole. The European Association of Urology guidelines place the method in exactly this position.'
          },
          {
            q: 'How is the choice made between HoLEP and ThuLEP?',
            a: 'Both follow the same enucleation principle; the difference is the laser. Holmium is pulsed, thulium produces a continuous wave. From the patient’s side the process and expected outcomes are largely similar. The choice is made by weighing prostate volume, clotting status, equipment availability and the surgeon’s experience together.'
          },
          {
            q: 'My prostate is over 100 ml — is open surgery unavoidable?',
            a: 'No. This is precisely the range where HoLEP offers its clearest advantage; it can be treated without an incision. A recommendation specific to you follows the assessment of your file.'
          },
          {
            q: 'HoLEP is said to have a difficult learning curve — how does that affect me?',
            a: 'It means outcomes are sensitive to the experience of the operating team. In practical terms for you: with HoLEP, the choice of centre and surgeon matters as much as the choice of method. You are welcome to ask about this openly in your pre-operative consultation.'
          },
          {
            q: 'Will repeat surgery be needed in the long term?',
            a: 'Because enucleation removes the obstructing tissue as a whole it aims for a durable result, and HoLEP has the longest follow-up data in this respect. Even so, no method guarantees that repeat treatment will never be required; regular follow-up is advised.'
          },
          {
            q: 'How long does the catheter stay and when am I discharged?',
            a: 'The catheter usually stays 1–2 days and is removed once the urine is clear. After you are seen to pass urine on your own, you are generally discharged following a one-night stay.'
          },
          {
            q: 'How will my sexual function be affected?',
            a: 'Erectile function is usually preserved. Retrograde ejaculation — semen passing into the bladder — is a common change and affects fertility. If you plan to have children this must be discussed before surgery.'
          },
          {
            q: 'Will I have urinary leakage, and is it permanent?',
            a: 'Stress-type leakage can occur in the first weeks after enucleation. In most patients it improves gradually, and pelvic floor exercises speed this up. Permanent leakage is uncommon; your individual risk is discussed separately during pre-operative assessment.'
          },
          {
            q: 'I take blood thinners — is HoLEP suitable?',
            a: 'The bleeding control of laser enucleation makes the method worth considering in these patients. However, whether your medication is stopped is decided together with the physician who follows you; do not stop it on your own.'
          }
        ],
        sources: [
          {
            label:
              'EAU Guidelines on Management of Non-Neurogenic Male LUTS — European Association of Urology',
            url: 'https://uroweb.org/guidelines/management-of-non-neurogenic-male-luts'
          }
        ]
      },
      de: {
        title: 'HoLEP (Holmium-Laser-Enukleation der Prostata)',
        summary:
          'Enukleation des obstruierenden Prostatagewebes mit dem Holmiumlaser — das Enukleationsverfahren mit der umfangreichsten Langzeitdatenlage.',
        metaTitle: 'HoLEP: Holmium-Laser-Enukleation der Prostata',
        metaDescription:
          'HoLEP bei gutartiger Prostatavergrößerung: für wen geeignet, Ablauf, Risiken, Genesung und Unterschiede zu TURP und offener Prostatektomie.',
        quickFacts: {
          duration: '60–150 Minuten',
          anesthesia: 'Vollnarkose oder Spinalanästhesie',
          hospitalStay: '1 Nacht',
          stayInTurkey: '5–7 Tage',
          catheter: '1–2 Tage',
          returnToWork: '2–3 Wochen',
          flightClearance: 'Ab Tag 7'
        },
        definition: [
          'Die Prostata liegt direkt unterhalb der Blase und umschließt die Harnröhre. Vergrößert sie sich mit dem Alter, engt sie diesen Kanal von außen ein, und die Blase muss immer mehr Kraft aufwenden, um den Urin auszutreiben. Die Beschwerden entwickeln sich meist langsam: zuerst ein dünnerer Strahl und nächtliches Aufstehen, dann das Gefühl der unvollständigen Entleerung und im fortgeschrittenen Stadium Harnverhalt oder Katheterabhängigkeit.',
          'HoLEP ist eine geschlossene Operation, bei der dieses obstruierende Gewebe mit dem Holmiumlaser von seiner Kapsel gelöst und im Ganzen entfernt wird. Der Holmiumlaser arbeitet gepulst: Er schneidet das Gewebe mit sehr kurzen Energieimpulsen und kontrolliert zugleich die Blutung. Der gesamte Eingriff erfolgt über die Harnröhre, ohne Hautschnitt.',
          'Das wichtigste Unterscheidungsmerkmal von HoLEP ist, dass es UNABHÄNGIG VOM PROSTATAVOLUMEN eingesetzt werden kann. In den Leitlinien der Europäischen Gesellschaft für Urologie erscheint es als Alternative zur TURP bei kleinen und zur offenen (einfachen) Prostatektomie bei großen Prostatae. HoLEP ist zudem die Enukleationstechnik mit der breitesten Langzeitdatenlage.',
          'Das entfernte Gewebe wird in der Blase mit einem Morcellator zerkleinert und vollständig zur Pathologie geschickt. Bei Verfahren, die Gewebe verdampfen, ist diese Untersuchung nicht möglich; bei HoLEP kann ein unerwarteter Krebsherd dennoch diagnostiziert werden.',
          'Ein bekanntes Merkmal von HoLEP ist die steile Lernkurve für den Operateur. Die Ergebnisse hängen unmittelbar von der Erfahrung des Teams ab — damit ist die Wahl des Zentrums ebenso wichtig wie die Wahl der Methode.'
        ],
        eligibility: {
          suitable: [
            'Prostatae jeder Größe — insbesondere Drüsen über 80 ml, die für eine TURP weniger geeignet sind',
            'Patienten, die von Medikamenten nicht profitieren oder diese wegen Nebenwirkungen absetzen',
            'Patienten mit Katheterabhängigkeit oder wiederholtem Harnverhalt',
            'Patienten mit Blasensteinen oder wiederkehrenden Infekten infolge der Prostatavergrößerung',
            'Patienten, denen eine offene Prostatektomie empfohlen wurde, die aber eine geschlossene Option suchen'
          ],
          notSuitable: [
            'Patienten mit aktivem Harnwegsinfekt — der Infekt wird zuerst behandelt',
            'Patienten mit gesichertem Prostatakrebs — der Behandlungsplan unterscheidet sich; HoLEP kommt nur in begrenzten Situationen zur Entlastung infrage',
            'Patienten, deren Blasenmuskel weitgehend an Kontraktionskraft verloren hat, erleben auch nach Beseitigung der Obstruktion möglicherweise keine vollständige Besserung',
            'Patienten mit hohem Narkoserisiko und schweren Begleiterkrankungen',
            'Patienten mit Kinderwunsch — die Möglichkeit einer retrograden Ejakulation muss vorab besprochen werden'
          ]
        },
        technology: [
          'Holmium-Lasersystem (gepulste Energie)',
          'Enukleationstechnik, unabhängig vom Prostatavolumen einsetzbar',
          'Entfernung des Gewebes aus der Blase mit dem Morcellator',
          'Vollständige pathologische Untersuchung des entfernten Gewebes'
        ],
        surgeonExperience: {
          caseVolume: '',
          note:
            'Doz. Dr. Müslüm Ergün arbeitet mit Laser-Enukleationstechniken und hat begutachtete Publikationen auf diesem Gebiet. Die Methode wird nach Beurteilung von Prostatavolumen und Begleiterkrankungen ausgewählt.'
        },
        timeline: [
          {
            when: 'Aus der Ferne',
            title: 'Unterlagenprüfung',
            body: 'Prostatavolumen (Ultraschall oder MRT), Uroflowmetrie, IPSS-Score, PSA und Restharn werden geprüft. Bei großem Volumen wird der besondere Vorteil von HoLEP gesondert beurteilt.'
          },
          {
            when: 'Tag 1',
            title: 'Ankunft und Vorbereitung',
            body: 'Untersuchung, Nachholen fehlender Befunde und Narkosevorbereitung. Wenn Sie Blutverdünner nehmen, wird deren Handhabung jetzt geplant.'
          },
          {
            when: 'Tag 2',
            title: 'Operation',
            body: 'HoLEP erfolgt in Vollnarkose oder Spinalanästhesie. Die Dauer verhält sich proportional zum Prostatavolumen; bei großen Drüsen kann der Eingriff länger dauern.'
          },
          {
            when: 'Tag 3',
            title: 'Katheterentfernung und Entlassung',
            body: 'Der Katheter wird entfernt, sobald der Urin klar ist. Die Entlassung erfolgt, nachdem Sie selbstständig Wasser gelassen haben.'
          },
          {
            when: 'Tag 7–10',
            title: 'Kontrolle und Pathologie',
            body: 'Kontrolluntersuchung, Besprechung des Pathologiebefunds und Freigabe für den Rückflug.'
          }
        ],
        risks: [
          'Brennen und plötzlicher Harndrang in der frühen Phase nach der Operation',
          'Vorübergehender Belastungsharnverlust — in den ersten Wochen nach Enukleation möglich, bessert sich bei den meisten Patienten',
          'Retrograde Ejakulation: häufig, gesundheitlich unbedenklich, beeinflusst aber die Fruchtbarkeit',
          'Harnwegsinfekt',
          'Harnröhrenstriktur oder Blasenhalsenge — selten; bei Bedarf mit einem weiteren Eingriff behandelbar',
          'Blutung; Blasenverletzung während der Morcellation (selten)',
          'Allgemeine Risiken der Narkose'
        ],
        alternatives: [
          'ThuLEP — Enukleation mit dem Thuliumlaser (gleiches Prinzip, anderer Laser)',
          'TURP — klassische endoskopische Resektion (bei kleinen und mittleren Volumina)',
          'Rezūm — Volumenreduktion mit Wasserdampf (bei kleinen Prostatae, weniger invasiv)',
          'Medikamentöse Therapie (Alphablocker, 5-Alpha-Reduktase-Hemmer)',
          'Offene (einfache) Prostatektomie — die klassische Option, die HoLEP zunehmend ersetzt'
        ],
        comparison: {
          title: 'HoLEP, TURP und offene Prostatektomie im Vergleich',
          columns: ['Kriterium', 'HoLEP', 'TURP', 'Offene Prostatektomie'],
          rows: [
            { label: 'Grenze des Prostatavolumens', values: ['Unabhängig vom Volumen', 'Meist unter 80 ml', 'Große Volumina'] },
            { label: 'Schnitt', values: ['Keiner (über die Harnröhre)', 'Keiner (über die Harnröhre)', 'Unterbauchschnitt'] },
            { label: 'Durchschnittliche Katheterdauer', values: ['1–2 Tage', '2–3 Tage', '4–7 Tage'] },
            { label: 'Krankenhausaufenthalt', values: ['1 Nacht', '1–2 Nächte', '3–5 Nächte'] },
            { label: 'Gewebe zur Pathologie', values: ['Ja', 'Ja', 'Ja'] },
            { label: 'Lernkurve des Operateurs', values: ['Steil — Erfahrung entscheidet', 'Etabliert, weit verbreitet', 'Etabliert'] }
          ],
          note:
            'Diese Tabelle dient der allgemeinen Information. Die Methode wird individuell nach Prostatavolumen, Begleiterkrankungen, Gerinnungsstatus und den Prioritäten des Patienten gewählt.'
        },
        recovery: [
          {
            period: 'Erste 48 Stunden',
            body: 'Der Katheter liegt, eine Blasenspülung kann erfolgen. Eine rosa Färbung des Urins ist ein erwarteter Befund; reichlich Trinken wird empfohlen.'
          },
          {
            period: 'Woche 1',
            body: 'Der Katheter ist entfernt. Der Harnstrahl bessert sich deutlich, Brennen und Harndrang können jedoch noch eine Weile anhalten. Schweres Heben und Pressen werden nicht empfohlen.'
          },
          {
            period: 'Woche 2–3',
            body: 'Die Rückkehr zur Bürotätigkeit ist meist möglich. Beckenbodenübungen unterstützen die Rückbildung eines etwaigen Harnverlusts.'
          },
          {
            period: 'Woche 4–6',
            body: 'Die Harnkontrolle stabilisiert sich weitgehend. Für schwere körperliche Aktivität und Geschlechtsverkehr wird die ärztliche Freigabe abgewartet.'
          },
          {
            period: 'Ab Monat 3',
            body: 'IPSS-Score und Uroflowmetrie werden wiederholt, um die Besserung objektiv zu messen. Eine Langzeitnachsorge wird empfohlen, um die Dauerhaftigkeit zu verfolgen.'
          }
        ],
        price: {
          from: 0,
          to: 0,
          currency: 'EUR',
          disclaimer:
            'Der Preis hängt von Prostatavolumen, Eingriffsdauer, begleitenden Maßnahmen und Aufenthaltsdauer ab. Ein verbindliches Angebot folgt nach der Unterlagenprüfung.'
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
            q: 'Warum gilt HoLEP als Alternative sowohl zur TURP als auch zur offenen Operation?',
            a: 'Weil es unabhängig vom Prostatavolumen einsetzbar ist. Die TURP stößt bei großen Drüsen an Grenzen von Operationszeit und Sicherheit, die offene Operation erfordert einen Schnitt und eine längere Genesung. HoLEP überwindet beide Einschränkungen, indem es das obstruierende Gewebe im Ganzen entfernt. Die Leitlinien der Europäischen Gesellschaft für Urologie ordnen das Verfahren genau so ein.'
          },
          {
            q: 'Wie wird zwischen HoLEP und ThuLEP entschieden?',
            a: 'Beide folgen demselben Enukleationsprinzip; der Unterschied liegt im Laser. Holmium ist gepulst, Thulium erzeugt eine Dauerstrichwelle. Aus Patientensicht sind Ablauf und zu erwartende Ergebnisse weitgehend ähnlich. Die Wahl erfolgt nach Abwägung von Prostatavolumen, Gerinnungsstatus, verfügbarer Ausstattung und Erfahrung des Operateurs.'
          },
          {
            q: 'Meine Prostata ist über 100 ml — ist eine offene Operation unvermeidlich?',
            a: 'Nein. Genau in diesem Bereich bietet HoLEP seinen deutlichsten Vorteil; die Behandlung ist ohne Schnitt möglich. Eine auf Sie zugeschnittene Empfehlung folgt nach Prüfung Ihrer Unterlagen.'
          },
          {
            q: 'HoLEP soll eine schwierige Lernkurve haben — was bedeutet das für mich?',
            a: 'Es bedeutet, dass die Ergebnisse von der Erfahrung des Teams abhängen. Praktisch heißt das für Sie: Bei HoLEP ist die Wahl von Zentrum und Operateur ebenso wichtig wie die Wahl der Methode. Sie dürfen dies im Vorgespräch offen ansprechen.'
          },
          {
            q: 'Ist langfristig eine erneute Operation nötig?',
            a: 'Da die Enukleation das obstruierende Gewebe im Ganzen entfernt, zielt sie auf ein dauerhaftes Ergebnis, und HoLEP verfügt hierzu über die längsten Verlaufsdaten. Dennoch garantiert kein Verfahren, dass nie eine erneute Behandlung nötig wird; regelmäßige Kontrollen werden empfohlen.'
          },
          {
            q: 'Wie lange bleibt der Katheter und wann werde ich entlassen?',
            a: 'Der Katheter bleibt meist 1–2 Tage und wird entfernt, sobald der Urin klar ist. Nachdem Sie selbstständig Wasser gelassen haben, werden Sie in der Regel nach einer Nacht entlassen.'
          },
          {
            q: 'Wie wird meine Sexualfunktion beeinflusst?',
            a: 'Die Erektionsfähigkeit bleibt in der Regel erhalten. Die retrograde Ejakulation — der Samen gelangt in die Blase — ist eine häufige Veränderung und beeinflusst die Fruchtbarkeit. Bei Kinderwunsch muss dies vor der Operation besprochen werden.'
          },
          {
            q: 'Kommt es zu Harnverlust, und ist er dauerhaft?',
            a: 'In den ersten Wochen nach der Enukleation kann Belastungsharnverlust auftreten. Bei den meisten Patienten bessert er sich allmählich, Beckenbodenübungen beschleunigen dies. Dauerhafter Harnverlust ist selten; Ihr persönliches Risiko wird im Vorgespräch gesondert besprochen.'
          },
          {
            q: 'Ich nehme Blutverdünner — ist HoLEP geeignet?',
            a: 'Die Blutungskontrolle der Laser-Enukleation macht das Verfahren bei diesen Patienten erwägenswert. Ob Ihre Medikation abgesetzt wird, entscheidet jedoch der behandelnde Arzt gemeinsam mit Ihnen; setzen Sie sie nicht eigenmächtig ab.'
          }
        ],
        sources: [
          {
            label:
              'EAU-Leitlinie zum Management nicht-neurogener männlicher LUTS — Europäische Gesellschaft für Urologie',
            url: 'https://uroweb.org/guidelines/management-of-non-neurogenic-male-luts'
          }
        ]
      },
      fr: {
        title: 'HoLEP (énucléation de la prostate au laser holmium)',
        summary:
          'Énucléation du tissu prostatique obstructif au laser holmium — la technique d’énucléation disposant du plus vaste recul à long terme.',
        metaTitle: 'HoLEP : énucléation de la prostate au laser holmium',
        metaDescription:
          'Chirurgie HoLEP de l’hypertrophie bénigne de la prostate : indications, déroulement, risques, récupération et différences avec la RTUP et l’adénomectomie ouverte.',
        quickFacts: {
          duration: '60 à 150 minutes',
          anesthesia: 'Anesthésie générale ou rachidienne',
          hospitalStay: '1 nuit',
          stayInTurkey: '5 à 7 jours',
          catheter: '1 à 2 jours',
          returnToWork: '2 à 3 semaines',
          flightClearance: 'À partir du 7e jour'
        },
        definition: [
          'La prostate est une glande située juste sous la vessie et qui entoure l’urètre. Lorsqu’elle grossit avec l’âge, elle comprime ce conduit de l’extérieur et la vessie doit fournir un effort croissant pour évacuer l’urine. Les symptômes s’installent le plus souvent lentement : d’abord un jet plus fin et des levers nocturnes, puis une sensation de vidange incomplète et, à un stade avancé, une impossibilité d’uriner ou une dépendance à la sonde.',
          'La HoLEP est une intervention endoscopique au cours de laquelle ce tissu obstructif est séparé de sa capsule au laser holmium et retiré en bloc. Le laser holmium est pulsé : il découpe le tissu par impulsions d’énergie très brèves tout en contrôlant le saignement. Toute l’intervention se fait par les voies urinaires, sans aucune incision cutanée.',
          'Ce qui distingue le plus la HoLEP, c’est qu’elle s’applique INDÉPENDAMMENT DU VOLUME PROSTATIQUE. Dans les recommandations de l’Association européenne d’urologie, elle figure comme alternative à la RTUP pour les petites prostates et à l’adénomectomie ouverte pour les grosses. La HoLEP est aussi la technique d’énucléation bénéficiant du recul à long terme le plus large.',
          'Le tissu retiré est fragmenté dans la vessie à l’aide d’un morcellateur et adressé en totalité à l’anatomopathologie. Les techniques de vaporisation rendent cet examen impossible ; avec la HoLEP, un foyer cancéreux inattendu peut malgré tout être diagnostiqué.',
          'Une caractéristique connue de la HoLEP est sa courbe d’apprentissage abrupte pour le chirurgien. Les résultats dépendent directement de l’expérience de l’équipe, ce qui rend le choix du centre aussi important que celui de la méthode.'
        ],
        eligibility: {
          suitable: [
            'Prostates de tout volume — en particulier les glandes de plus de 80 ml, peu adaptées à la RTUP',
            'Patients ne tirant pas de bénéfice du traitement médical ou l’arrêtant en raison des effets indésirables',
            'Patients devenus dépendants d’une sonde ou présentant des rétentions urinaires répétées',
            'Patients développant des calculs vésicaux ou des infections récidivantes liés à l’hypertrophie',
            'Patients à qui une adénomectomie ouverte a été proposée mais qui cherchent une option endoscopique'
          ],
          notSuitable: [
            'Patients présentant une infection urinaire active — l’infection est traitée d’abord',
            'Patients avec un cancer de la prostate confirmé — la prise en charge diffère ; la HoLEP n’est envisagée que dans des situations limitées, à visée de désobstruction',
            'Patients dont le muscle vésical a largement perdu sa force de contraction : la levée de l’obstacle peut ne pas suffire à faire disparaître les troubles',
            'Patients à risque anesthésique élevé avec comorbidités sévères',
            'Patients ayant un projet de paternité — la possibilité d’une éjaculation rétrograde doit être abordée au préalable'
          ]
        },
        technology: [
          'Système laser holmium (énergie pulsée)',
          'Technique d’énucléation applicable quel que soit le volume prostatique',
          'Retrait du tissu depuis la vessie à l’aide d’un morcellateur',
          'Examen anatomopathologique complet du tissu retiré'
        ],
        surgeonExperience: {
          caseVolume: '',
          note:
            'Le Dr Müslüm Ergün pratique les techniques d’énucléation au laser et a publié dans des revues à comité de lecture sur ce sujet. La méthode est choisie après évaluation du volume prostatique et des affections associées.'
        },
        timeline: [
          {
            when: 'À distance',
            title: 'Évaluation du dossier',
            body: 'Le volume prostatique (échographie ou IRM), la débitmétrie, le score IPSS, le PSA et le résidu post-mictionnel sont examinés. Si le volume est important, l’avantage particulier de la HoLEP est évalué séparément.'
          },
          {
            when: 'Jour 1',
            title: 'Arrivée et préparation',
            body: 'Examen clinique, complément du bilan et consultation d’anesthésie. Si vous prenez des anticoagulants, leur gestion est planifiée à ce stade.'
          },
          {
            when: 'Jour 2',
            title: 'Intervention',
            body: 'La HoLEP est réalisée sous anesthésie générale ou rachidienne. La durée est proportionnelle au volume prostatique ; elle peut être plus longue pour les grosses glandes.'
          },
          {
            when: 'Jour 3',
            title: 'Retrait de la sonde et sortie',
            body: 'La sonde est retirée dès que les urines sont claires. Vous sortez après vérification que vous urinez spontanément.'
          },
          {
            when: 'Jours 7–10',
            title: 'Contrôle et anatomopathologie',
            body: 'Consultation de contrôle, examen du résultat anatomopathologique et autorisation pour le vol retour.'
          }
        ],
        risks: [
          'Brûlures et urgences mictionnelles dans les premiers temps après l’intervention',
          'Fuites d’effort transitoires — possibles dans les premières semaines après énucléation, elles régressent chez la plupart des patients',
          'Éjaculation rétrograde : fréquente, sans danger pour la santé, mais elle affecte la fertilité',
          'Infection urinaire',
          'Sténose urétrale ou sclérose du col vésical — peu fréquentes ; traitées par un geste complémentaire si nécessaire',
          'Saignement ; lésion vésicale pendant la morcellation (rare)',
          'Risques généraux liés à l’anesthésie'
        ],
        alternatives: [
          'ThuLEP — énucléation au laser thulium (même principe, laser différent)',
          'RTUP — résection endoscopique classique (volumes petits et moyens)',
          'Rezūm — réduction de volume par vapeur d’eau (petites prostates, moins invasif)',
          'Traitement médicamenteux (alphabloquants, inhibiteurs de la 5-alpha-réductase)',
          'Adénomectomie ouverte — l’option classique que la HoLEP remplace progressivement'
        ],
        comparison: {
          title: 'Comparaison HoLEP, RTUP et adénomectomie ouverte',
          columns: ['Critère', 'HoLEP', 'RTUP', 'Adénomectomie ouverte'],
          rows: [
            { label: 'Limite de volume prostatique', values: ['Indépendante du volume', 'Généralement sous 80 ml', 'Gros volumes'] },
            { label: 'Incision', values: ['Aucune (voies urinaires)', 'Aucune (voies urinaires)', 'Incision sous-ombilicale'] },
            { label: 'Durée moyenne de sondage', values: ['1 à 2 jours', '2 à 3 jours', '4 à 7 jours'] },
            { label: 'Séjour hospitalier', values: ['1 nuit', '1 à 2 nuits', '3 à 5 nuits'] },
            { label: 'Tissu adressé en anatomopathologie', values: ['Oui', 'Oui', 'Oui'] },
            { label: 'Courbe d’apprentissage du chirurgien', values: ['Abrupte — l’expérience est déterminante', 'Établie, répandue', 'Établie'] }
          ],
          note:
            'Ce tableau est fourni à titre d’information générale. La méthode est choisie au cas par cas selon le volume prostatique, les comorbidités, l’état de la coagulation et les priorités du patient.'
        },
        recovery: [
          {
            period: '48 premières heures',
            body: 'La sonde est en place et un lavage vésical peut être mis en œuvre. Une coloration rosée des urines est attendue ; une hydratation abondante est conseillée.'
          },
          {
            period: 'Semaine 1',
            body: 'La sonde est retirée. Le jet urinaire s’améliore nettement, même si brûlures et urgences peuvent persister un temps. Le port de charges et les efforts de poussée sont déconseillés.'
          },
          {
            period: 'Semaines 2–3',
            body: 'La reprise d’un travail de bureau est généralement possible. La rééducation périnéale favorise la récupération en cas de fuites.'
          },
          {
            period: 'Semaines 4–6',
            body: 'Le contrôle urinaire se stabilise largement. L’activité physique intense et les rapports sexuels attendent l’accord du médecin.'
          },
          {
            period: 'À partir du 3e mois',
            body: 'Le score IPSS et la débitmétrie sont répétés pour mesurer objectivement l’amélioration. Un suivi au long cours est conseillé pour apprécier la durabilité.'
          }
        ],
        price: {
          from: 0,
          to: 0,
          currency: 'EUR',
          disclaimer:
            'Le prix varie selon le volume prostatique, la durée de l’intervention, les gestes associés et la durée du séjour. Un devis ferme est établi après évaluation du dossier.'
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
            q: 'Pourquoi la HoLEP est-elle présentée comme une alternative à la fois à la RTUP et à la chirurgie ouverte ?',
            a: 'Parce qu’elle s’applique indépendamment du volume prostatique. La RTUP est limitée sur les grosses glandes par la durée opératoire et la sécurité, tandis que la chirurgie ouverte impose une incision et une récupération plus longue. La HoLEP lève ces deux contraintes en retirant le tissu obstructif en bloc. Les recommandations de l’Association européenne d’urologie situent la méthode exactement à cette place.'
          },
          {
            q: 'Comment choisit-on entre HoLEP et ThuLEP ?',
            a: 'Les deux suivent le même principe d’énucléation ; la différence tient au laser. L’holmium est pulsé, le thulium délivre une onde continue. Du point de vue du patient, le déroulement et les résultats attendus sont très proches. Le choix résulte de la prise en compte conjointe du volume prostatique, de l’état de la coagulation, du matériel disponible et de l’expérience du chirurgien.'
          },
          {
            q: 'Ma prostate dépasse 100 ml : la chirurgie ouverte est-elle inévitable ?',
            a: 'Non. C’est précisément dans cette fourchette que la HoLEP offre son avantage le plus net ; le traitement est possible sans incision. Une recommandation personnalisée vous est adressée après évaluation de votre dossier.'
          },
          {
            q: 'On dit que la HoLEP a une courbe d’apprentissage difficile : en quoi cela me concerne-t-il ?',
            a: 'Cela signifie que les résultats dépendent de l’expérience de l’équipe opératoire. Concrètement pour vous : avec la HoLEP, le choix du centre et du chirurgien compte autant que celui de la méthode. Vous pouvez aborder ce point ouvertement lors de la consultation préopératoire.'
          },
          {
            q: 'Une nouvelle intervention sera-t-elle nécessaire à long terme ?',
            a: 'Parce que l’énucléation retire le tissu obstructif en bloc, elle vise un résultat durable, et la HoLEP dispose à cet égard du recul le plus long. Aucune méthode ne garantit toutefois qu’un nouveau traitement ne sera jamais nécessaire ; un suivi régulier est recommandé.'
          },
          {
            q: 'Combien de temps la sonde reste-t-elle et quand sortirai-je ?',
            a: 'La sonde reste généralement 1 à 2 jours et est retirée dès que les urines sont claires. Après vérification que vous urinez spontanément, la sortie intervient le plus souvent après une nuit d’hospitalisation.'
          },
          {
            q: 'Comment ma fonction sexuelle sera-t-elle affectée ?',
            a: 'La fonction érectile est généralement préservée. L’éjaculation rétrograde — le sperme reflue vers la vessie — est un changement fréquent qui affecte la fertilité. Si vous avez un projet de paternité, cela doit être discuté avant l’intervention.'
          },
          {
            q: 'Aurai-je des fuites urinaires, et seront-elles définitives ?',
            a: 'Des fuites d’effort peuvent survenir dans les premières semaines après l’énucléation. Chez la plupart des patients elles s’améliorent progressivement, et la rééducation périnéale accélère ce processus. Les fuites définitives sont rares ; votre risque personnel est abordé séparément lors de l’évaluation préopératoire.'
          },
          {
            q: 'Je prends des anticoagulants : la HoLEP est-elle adaptée ?',
            a: 'Le contrôle du saignement propre à l’énucléation au laser rend la méthode envisageable chez ces patients. La décision d’interrompre votre traitement revient toutefois au médecin qui vous suit ; ne l’arrêtez pas de votre propre initiative.'
          }
        ],
        sources: [
          {
            label:
              'Recommandations EAU sur la prise en charge des TUBA masculins non neurogènes — Association européenne d’urologie',
            url: 'https://uroweb.org/guidelines/management-of-non-neurogenic-male-luts'
          }
        ]
      },
      ru: {
        title: 'HoLEP (энуклеация простаты гольмиевым лазером)',
        summary:
          'Энуклеация обтурирующей ткани простаты гольмиевым лазером — методика с наиболее обширными данными длительного наблюдения.',
        metaTitle: 'HoLEP: энуклеация простаты гольмиевым лазером',
        metaDescription:
          'Операция HoLEP при доброкачественной гиперплазии простаты: кому подходит, как проводится, риски, восстановление и отличия от ТУРП и открытой аденомэктомии.',
        quickFacts: {
          duration: '60–150 минут',
          anesthesia: 'Общая или спинальная анестезия',
          hospitalStay: '1 ночь',
          stayInTurkey: '5–7 дней',
          catheter: '1–2 дня',
          returnToWork: '2–3 недели',
          flightClearance: 'С 7-го дня'
        },
        definition: [
          'Простата расположена сразу под мочевым пузырём и окружает мочеиспускательный канал. Увеличиваясь с возрастом, она сдавливает этот канал снаружи, и мочевому пузырю приходится работать со всё большим усилием. Симптомы обычно нарастают медленно: сначала более слабая струя и ночные подъёмы, затем ощущение неполного опорожнения, а на поздней стадии — задержка мочи или зависимость от катетера.',
          'HoLEP — закрытая операция, при которой эта обтурирующая ткань отделяется от капсулы гольмиевым лазером и удаляется целиком. Гольмиевый лазер работает импульсно: он рассекает ткань очень короткими импульсами энергии, одновременно контролируя кровотечение. Всё вмешательство выполняется через мочеиспускательный канал, разрезов на теле нет.',
          'Главная отличительная черта HoLEP — применимость НЕЗАВИСИМО ОТ ОБЪЁМА ПРОСТАТЫ. В рекомендациях Европейской ассоциации урологии метод указан как альтернатива ТУРП при небольших железах и открытой (простой) аденомэктомии при больших. HoLEP также обладает самой широкой базой данных длительного наблюдения среди методик энуклеации.',
          'Удалённая ткань измельчается в мочевом пузыре морцеллятором и полностью направляется на гистологию. При методах с испарением ткани такое исследование невозможно; при HoLEP неожиданный очаг рака всё же может быть выявлен.',
          'Известная особенность HoLEP — крутая кривая обучения для хирурга. Результаты напрямую связаны с опытом оперирующей команды, поэтому выбор центра не менее важен, чем выбор метода.'
        ],
        eligibility: {
          suitable: [
            'Простата любого объёма — особенно железы более 80 мл, мало подходящие для ТУРП',
            'Пациенты, не получающие пользы от лекарств или прекращающие их из-за побочных эффектов',
            'Пациенты, ставшие зависимыми от катетера, или с повторными задержками мочи',
            'Пациенты с камнями мочевого пузыря или рецидивирующими инфекциями на фоне гиперплазии',
            'Пациенты, которым предложена открытая аденомэктомия, но которые ищут закрытый вариант'
          ],
          notSuitable: [
            'Пациенты с активной инфекцией мочевых путей — сначала лечат инфекцию',
            'Пациенты с подтверждённым раком простаты — план лечения иной; HoLEP рассматривается лишь в ограниченных ситуациях для устранения обструкции',
            'Пациенты, у которых мышца мочевого пузыря во многом утратила сократительную силу: даже после устранения обструкции жалобы могут сохраняться',
            'Пациенты с высоким анестезиологическим риском и тяжёлыми сопутствующими заболеваниями',
            'Пациенты, планирующие зачатие, — вероятность ретроградной эякуляции необходимо обсудить заранее'
          ]
        },
        technology: [
          'Гольмиевая лазерная система (импульсная энергия)',
          'Методика энуклеации, применимая независимо от объёма простаты',
          'Извлечение ткани из мочевого пузыря морцеллятором',
          'Полное гистологическое исследование удалённой ткани'
        ],
        surgeonExperience: {
          caseVolume: '',
          note:
            'Доцент, д-р Мюслюм Эргюн работает с методиками лазерной энуклеации и имеет рецензируемые публикации в этой области. Метод выбирается после оценки объёма простаты и сопутствующих состояний.'
        },
        timeline: [
          {
            when: 'Дистанционно',
            title: 'Оценка документов',
            body: 'Оцениваются объём простаты (УЗИ или МРТ), урофлоуметрия, балл IPSS, ПСА и остаточная моча. При большом объёме отдельно рассматривается преимущество, которое даёт HoLEP.'
          },
          {
            when: '1-й день',
            title: 'Приезд и подготовка',
            body: 'Осмотр, дообследование и консультация анестезиолога. Если вы принимаете антикоагулянты, их ведение планируется на этом этапе.'
          },
          {
            when: '2-й день',
            title: 'Операция',
            body: 'HoLEP выполняется под общей или спинальной анестезией. Длительность пропорциональна объёму простаты; при больших железах вмешательство может занять больше времени.'
          },
          {
            when: '3-й день',
            title: 'Удаление катетера и выписка',
            body: 'Катетер удаляют, когда моча становится прозрачной. Выписка — после того как вы начнёте мочиться самостоятельно.'
          },
          {
            when: '7–10-й день',
            title: 'Контроль и гистология',
            body: 'Контрольный осмотр, разбор результата гистологии и разрешение на обратный перелёт.'
          }
        ],
        risks: [
          'Жжение и внезапные позывы при мочеиспускании в раннем периоде после операции',
          'Временное стрессовое подтекание — возможно в первые недели после энуклеации, у большинства пациентов проходит',
          'Ретроградная эякуляция: встречается часто, безвредна для здоровья, но влияет на фертильность',
          'Инфекция мочевых путей',
          'Стриктура уретры или склероз шейки мочевого пузыря — нечасто; при необходимости устраняются дополнительным вмешательством',
          'Кровотечение; травма мочевого пузыря при морцелляции (редко)',
          'Общие риски, связанные с анестезией'
        ],
        alternatives: [
          'ThuLEP — энуклеация тулиевым лазером (тот же принцип, другой лазер)',
          'ТУРП — классическая эндоскопическая резекция (малые и средние объёмы)',
          'Rezūm — уменьшение объёма водяным паром (небольшие простаты, менее инвазивно)',
          'Лекарственная терапия (альфа-блокаторы, ингибиторы 5-альфа-редуктазы)',
          'Открытая (простая) аденомэктомия — классический вариант, который HoLEP постепенно вытесняет'
        ],
        comparison: {
          title: 'Сравнение HoLEP, ТУРП и открытой аденомэктомии',
          columns: ['Критерий', 'HoLEP', 'ТУРП', 'Открытая аденомэктомия'],
          rows: [
            { label: 'Ограничение по объёму простаты', values: ['Не зависит от объёма', 'Обычно менее 80 мл', 'Большие объёмы'] },
            { label: 'Разрез', values: ['Нет (через уретру)', 'Нет (через уретру)', 'Разрез внизу живота'] },
            { label: 'Средний срок катетера', values: ['1–2 дня', '2–3 дня', '4–7 дней'] },
            { label: 'Пребывание в больнице', values: ['1 ночь', '1–2 ночи', '3–5 ночей'] },
            { label: 'Ткань направляется на гистологию', values: ['Да', 'Да', 'Да'] },
            { label: 'Кривая обучения хирурга', values: ['Крутая — опыт решает', 'Устоявшаяся, распространённая', 'Устоявшаяся'] }
          ],
          note:
            'Таблица носит общий информационный характер. Метод подбирается индивидуально с учётом объёма простаты, сопутствующих заболеваний, состояния свёртывания и приоритетов пациента.'
        },
        recovery: [
          {
            period: 'Первые 48 часов',
            body: 'Катетер установлен, может применяться промывание мочевого пузыря. Розоватый оттенок мочи ожидаем; рекомендуется обильное питьё.'
          },
          {
            period: '1-я неделя',
            body: 'Катетер удалён. Струя заметно улучшается, однако жжение и позывы могут сохраняться некоторое время. Подъём тяжестей и натуживание не рекомендуются.'
          },
          {
            period: '2–3-я неделя',
            body: 'Возвращение к офисной работе обычно возможно. Упражнения для тазового дна способствуют восстановлению при подтекании.'
          },
          {
            period: '4–6-я неделя',
            body: 'Контроль мочеиспускания в основном налаживается. Для тяжёлых нагрузок и половой жизни дожидаются разрешения врача.'
          },
          {
            period: 'С 3-го месяца',
            body: 'Повторяют балл IPSS и урофлоуметрию, чтобы объективно измерить улучшение. Рекомендуетсядлительное наблюдение для оценки стойкости результата.'
          }
        ],
        price: {
          from: 0,
          to: 0,
          currency: 'EUR',
          disclaimer:
            'Стоимость зависит от объёма простаты, длительности вмешательства, сопутствующих манипуляций и срока пребывания. Точное предложение даётся после оценки документов.'
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
            q: 'Почему HoLEP называют альтернативой и ТУРП, и открытой операции?',
            a: 'Потому что метод применим независимо от объёма простаты. ТУРП при больших железах ограничена временем операции и соображениями безопасности, а открытая операция требует разреза и более долгого восстановления. HoLEP снимает оба ограничения, удаляя обтурирующую ткань целиком. Рекомендации Европейской ассоциации урологии отводят методу именно такое место.'
          },
          {
            q: 'Как выбирают между HoLEP и ThuLEP?',
            a: 'Оба метода следуют одному принципу энуклеации; различие в лазере. Гольмий работает импульсно, тулий даёт непрерывную волну. С точки зрения пациента ход операции и ожидаемые результаты во многом схожи. Выбор делается с учётом объёма простаты, состояния свёртывания, доступного оборудования и опыта хирурга.'
          },
          {
            q: 'У меня простата более 100 мл — открытая операция неизбежна?',
            a: 'Нет. Именно в этом диапазоне HoLEP даёт наиболее выраженное преимущество; лечение возможно без разреза. Индивидуальная рекомендация направляется вам после оценки документов.'
          },
          {
            q: 'Говорят, у HoLEP сложная кривая обучения — как это касается меня?',
            a: 'Это означает, что результаты зависят от опыта оперирующей команды. Практический вывод для вас: при HoLEP выбор центра и хирурга важен не меньше выбора метода. Этот вопрос можно открыто задать на предоперационной консультации.'
          },
          {
            q: 'Понадобится ли повторная операция в отдалённом периоде?',
            a: 'Поскольку энуклеация удаляет обтурирующую ткань целиком, она нацелена на стойкий результат, и у HoLEP самые длительные данные наблюдения. Тем не менее ни один метод не гарантирует, что повторное лечение никогда не потребуется; рекомендуется регулярное наблюдение.'
          },
          {
            q: 'Сколько времени стоит катетер и когда меня выпишут?',
            a: 'Катетер обычно стоит 1–2 дня и удаляется, когда моча становится прозрачной. После того как вы начнёте мочиться самостоятельно, выписка, как правило, происходит после одной ночи в стационаре.'
          },
          {
            q: 'Как это отразится на половой функции?',
            a: 'Эрекция, как правило, сохраняется. Ретроградная эякуляция — попадание семени в мочевой пузырь — встречается часто и влияет на фертильность. Если вы планируете детей, это необходимо обсудить до операции.'
          },
          {
            q: 'Будет ли недержание и останется ли оно навсегда?',
            a: 'Стрессовое подтекание возможно в первые недели после энуклеации. У большинства пациентов оно постепенно проходит, а упражнения для тазового дна ускоряют этот процесс. Стойкое недержание встречается редко; ваш индивидуальный риск обсуждается отдельно при предоперационной оценке.'
          },
          {
            q: 'Я принимаю антикоагулянты — подходит ли мне HoLEP?',
            a: 'Контроль кровотечения при лазерной энуклеации делает метод заслуживающим рассмотрения у таких пациентов. Однако решение об отмене препарата принимает наблюдающий вас врач; не прекращайте приём самостоятельно.'
          }
        ],
        sources: [
          {
            label:
              'Рекомендации EAU по ведению ненейрогенных СНМП у мужчин — Европейская ассоциация урологии',
            url: 'https://uroweb.org/guidelines/management-of-non-neurogenic-male-luts'
          }
        ]
      },
      ar: {
        title: 'HoLEP (استئصال البروستاتا بليزر الهولميوم)',
        summary:
          'استئصال النسيج المسبّب للانسداد بليزر الهولميوم — وهي تقنية الاستئصال التي تحظى بأوسع بيانات متابعة طويلة الأمد.',
        metaTitle: 'HoLEP: استئصال البروستاتا بليزر الهولميوم',
        metaDescription:
          'جراحة HoLEP لتضخم البروستاتا الحميد: لمن تناسب، وكيف تُجرى، والمخاطر، والتعافي، والفروق عن TURP والجراحة المفتوحة.',
        quickFacts: {
          duration: '60–150 دقيقة',
          anesthesia: 'تخدير عام أو نصفي',
          hospitalStay: 'ليلة واحدة',
          stayInTurkey: '5–7 أيام',
          catheter: '1–2 يوم',
          returnToWork: '2–3 أسابيع',
          flightClearance: 'بدءًا من اليوم السابع'
        },
        definition: [
          'البروستاتا غدة تقع أسفل المثانة مباشرةً وتحيط بمجرى البول. وحين تكبر مع التقدّم في العمر تضغط على هذا المجرى من الخارج، فتضطر المثانة إلى بذل جهد متزايد لدفع البول. وتتطوّر الأعراض عادةً ببطء: أولًا ضعف التدفق والاستيقاظ ليلًا، ثم الإحساس بعدم الإفراغ الكامل، وفي المرحلة المتقدّمة عجز عن التبول أو اعتماد على القسطرة.',
          'HoLEP عملية مغلقة يُفصَل فيها هذا النسيج المسبّب للانسداد عن محفظته بليزر الهولميوم ويُزال ككتلة واحدة. ويعمل ليزر الهولميوم بنبضات: فهو يقطع النسيج بنبضات طاقة قصيرة جدًا ويتحكّم في النزف في الوقت نفسه. وتُجرى العملية بالكامل عبر مجرى البول دون أي شق في الجسم.',
          'وأهم ما يميّز HoLEP أنها قابلة للتطبيق بصرف النظر عن حجم البروستاتا. وتَرِد في إرشادات الجمعية الأوروبية للمسالك البولية بوصفها بديلًا عن TURP في البروستاتا الصغيرة، وعن الاستئصال المفتوح (البسيط) في البروستاتا الكبيرة. كما أنها تقنية الاستئصال ذات أوسع بيانات متابعة طويلة الأمد.',
          'يُفتَّت النسيج المستأصل داخل المثانة بالمفتّت ويُرسَل بكامله إلى الفحص النسيجي. أما الطرق التي تبخّر النسيج فلا تتيح هذا الفحص؛ وفي HoLEP يمكن تشخيص بؤرة سرطانية غير متوقّعة.',
          'ومن الخصائص المعروفة لـ HoLEP أن منحنى التعلّم لدى الجرّاح شديد الانحدار. فالنتائج ترتبط مباشرةً بخبرة الفريق الجراحي، ما يجعل اختيار المركز لا يقلّ أهمية عن اختيار الطريقة.'
        ],
        eligibility: {
          suitable: [
            'البروستاتا بكل الأحجام — خصوصًا ما يزيد على 80 مل وهي غير مناسبة تمامًا لـ TURP',
            'المرضى الذين لا يستفيدون من الدواء أو يتوقفون عنه بسبب آثاره الجانبية',
            'المرضى الذين أصبحوا معتمدين على القسطرة أو يعانون احتباسًا بوليًا متكرّرًا',
            'المرضى الذين تتكوّن لديهم حصوات المثانة أو تتكرّر الالتهابات بسبب التضخم',
            'المرضى الذين عُرض عليهم الاستئصال المفتوح لكنهم يبحثون عن خيار مغلق'
          ],
          notSuitable: [
            'المصابون بالتهاب بولي نشط — يُعالَج الالتهاب أولًا',
            'المرضى المشخّصون بسرطان البروستاتا — خطة العلاج مختلفة، ولا تُعتبر HoLEP إلا في حالات محدودة لرفع الانسداد',
            'من فقدت عضلة المثانة لديهم جزءًا كبيرًا من قوة الانقباض؛ فقد لا تزول الشكاوى تمامًا حتى بعد رفع الانسداد',
            'المرضى ذوو الخطورة التخديرية العالية مع أمراض مصاحبة شديدة',
            'من لديهم رغبة في الإنجاب — يجب مناقشة احتمال القذف الرجوعي مسبقًا'
          ]
        },
        technology: [
          'منظومة ليزر الهولميوم (طاقة نبضية)',
          'تقنية استئصال قابلة للتطبيق بصرف النظر عن حجم البروستاتا',
          'إخراج النسيج من المثانة باستخدام المفتّت',
          'فحص نسيجي كامل للنسيج المستأصل'
        ],
        surgeonExperience: {
          caseVolume: '',
          note:
            'يعمل الأستاذ المشارك د. مسلم إرغن بتقنيات الاستئصال بالليزر وله أبحاث محكّمة في هذا المجال. وتُختار الطريقة بعد تقييم حجم البروستاتا والحالات المصاحبة.'
        },
        timeline: [
          {
            when: 'عن بُعد',
            title: 'تقييم الملف',
            body: 'يُراجَع حجم البروستاتا (بالموجات فوق الصوتية أو الرنين)، وقياس تدفق البول، ومؤشر IPSS، وPSA، والبول المتبقي. وإذا كان الحجم كبيرًا، تُقيَّم ميزة HoLEP على حدة.'
          },
          {
            when: 'اليوم الأول',
            title: 'الوصول والتحضير',
            body: 'فحص سريري واستكمال ما ينقص من فحوص وتقييم التخدير. وإن كنتم تتناولون أدوية سيولة الدم، يُخطَّط للتعامل معها في هذه المرحلة.'
          },
          {
            when: 'اليوم الثاني',
            title: 'العملية',
            body: 'تُجرى HoLEP تحت تخدير عام أو نصفي. وتتناسب المدة مع حجم البروستاتا؛ وقد تطول في الغدد الكبيرة.'
          },
          {
            when: 'اليوم الثالث',
            title: 'إزالة القسطرة والخروج',
            body: 'تُزال القسطرة عندما يصفو البول. وتخرجون بعد التأكد من قدرتكم على التبول تلقائيًا.'
          },
          {
            when: 'اليوم 7–10',
            title: 'المتابعة والنتيجة النسيجية',
            body: 'فحص متابعة ومراجعة نتيجة الفحص النسيجي وإذن برحلة العودة.'
          }
        ],
        risks: [
          'حرقة وإلحاح مفاجئ عند التبول في الفترة المبكرة بعد العملية',
          'تسرّب بولي جهدي مؤقّت — قد يحدث في الأسابيع الأولى بعد الاستئصال ويتحسّن لدى معظم المرضى',
          'القذف الرجوعي: شائع وغير ضار بالصحة لكنه يؤثر في الخصوبة',
          'التهاب المسالك البولية',
          'تضيّق الإحليل أو تصلّب عنق المثانة — غير شائع؛ ويُعالَج بإجراء إضافي عند الحاجة',
          'النزف؛ وإصابة المثانة أثناء التفتيت (نادرة)',
          'المخاطر العامة المرتبطة بالتخدير'
        ],
        alternatives: [
          'ThuLEP — الاستئصال بليزر الثوليوم (المبدأ نفسه بليزر مختلف)',
          'TURP — الاستئصال التنظيري التقليدي (في الأحجام الصغيرة والمتوسطة)',
          'Rezūm — تقليل الحجم ببخار الماء (للبروستاتا الصغيرة، أقل توغلًا)',
          'العلاج الدوائي (حاصرات ألفا، مثبطات 5-ألفا ريدكتاز)',
          'الاستئصال المفتوح (البسيط) — الخيار التقليدي الذي تحلّ HoLEP محلّه تدريجيًا'
        ],
        comparison: {
          title: 'مقارنة HoLEP وTURP والاستئصال المفتوح',
          columns: ['المعيار', 'HoLEP', 'TURP', 'الاستئصال المفتوح'],
          rows: [
            { label: 'حدّ حجم البروستاتا', values: ['مستقل عن الحجم', 'غالبًا أقل من 80 مل', 'الأحجام الكبيرة'] },
            { label: 'الشق الجراحي', values: ['لا يوجد (عبر مجرى البول)', 'لا يوجد (عبر مجرى البول)', 'شق أسفل البطن'] },
            { label: 'متوسط مدة القسطرة', values: ['1–2 يوم', '2–3 أيام', '4–7 أيام'] },
            { label: 'الإقامة في المستشفى', values: ['ليلة واحدة', 'ليلة إلى ليلتين', '3–5 ليالٍ'] },
            { label: 'إرسال النسيج للفحص النسيجي', values: ['نعم', 'نعم', 'نعم'] },
            { label: 'منحنى تعلّم الجرّاح', values: ['شديد الانحدار — الخبرة حاسمة', 'راسخ وواسع الانتشار', 'راسخ'] }
          ],
          note:
            'هذا الجدول لأغراض التوعية العامة. وتُختار الطريقة لكل حالة بحسب حجم البروستاتا والأمراض المصاحبة وحالة التخثر وأولويات المريض.'
        },
        recovery: [
          {
            period: 'أول 48 ساعة',
            body: 'القسطرة موضوعة وقد يُستخدَم غسيل المثانة. واللون الوردي في البول نتيجة متوقّعة؛ ويُنصح بشرب كميات وافرة من السوائل.'
          },
          {
            period: 'الأسبوع الأول',
            body: 'أُزيلت القسطرة. ويتحسّن تدفق البول بوضوح، وإن كانت الحرقة والإلحاح قد تستمر فترة. ولا يُنصح برفع الأثقال أو الإجهاد.'
          },
          {
            period: 'الأسبوع 2–3',
            body: 'العودة إلى العمل المكتبي ممكنة عادةً. وتدعم تمارين قاع الحوض تحسّن التسرّب إن وُجد.'
          },
          {
            period: 'الأسبوع 4–6',
            body: 'يستقرّ التحكّم بالبول إلى حدٍّ كبير. ويُنتظر إذن الطبيب لممارسة النشاط البدني الشاق والعلاقة الزوجية.'
          },
          {
            period: 'من الشهر الثالث',
            body: 'يُعاد قياس مؤشر IPSS وتدفق البول لقياس التحسّن موضوعيًا. ويُنصح بمتابعة طويلة الأمد لرصد ثبات النتيجة.'
          }
        ],
        price: {
          from: 0,
          to: 0,
          currency: 'EUR',
          disclaimer:
            'تختلف التكلفة بحسب حجم البروستاتا ومدة العملية والإجراءات المرافقة ومدة الإقامة. ويُقدَّم عرض نهائي بعد تقييم الملف.'
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
            q: 'لماذا تُوصَف HoLEP بأنها بديل عن TURP والجراحة المفتوحة معًا؟',
            a: 'لأنها قابلة للتطبيق بصرف النظر عن حجم البروستاتا. فـ TURP محدودة في الغدد الكبيرة من حيث مدة العملية والسلامة، بينما تتطلّب الجراحة المفتوحة شقًّا وتعافيًا أطول. وتتجاوز HoLEP كلا القيدين بإزالة النسيج المسبّب للانسداد ككتلة واحدة. وإرشادات الجمعية الأوروبية للمسالك البولية تضع الطريقة في هذا الموضع تحديدًا.'
          },
          {
            q: 'كيف يُختار بين HoLEP وThuLEP؟',
            a: 'كلتاهما تتبع مبدأ الاستئصال نفسه؛ والفرق في الليزر. فالهولميوم نبضي، والثوليوم يعطي موجة مستمرة. ومن وجهة نظر المريض فإن سير العملية والنتائج المتوقّعة متقاربة. ويُتَّخذ القرار بمراعاة حجم البروستاتا وحالة التخثر والأجهزة المتاحة وخبرة الجرّاح معًا.'
          },
          {
            q: 'حجم بروستاتي يتجاوز 100 مل، فهل الجراحة المفتوحة حتمية؟',
            a: 'لا. فهذا تحديدًا هو النطاق الذي تقدّم فيه HoLEP أوضح ميزة؛ ويمكن العلاج دون شق. وتُرسَل إليكم توصية خاصة بحالتكم بعد تقييم الملف.'
          },
          {
            q: 'يُقال إن منحنى التعلّم في HoLEP صعب، فكيف يعنيني ذلك؟',
            a: 'يعني أن النتائج حسّاسة لخبرة الفريق الجراحي. والخلاصة العملية بالنسبة لكم: في HoLEP يكون اختيار المركز والجرّاح بأهمية اختيار الطريقة نفسها. ويمكنكم طرح هذا الأمر بصراحة في استشارة ما قبل العملية.'
          },
          {
            q: 'هل ستلزم عملية أخرى على المدى الطويل؟',
            a: 'لأن الاستئصال يزيل النسيج المسبّب للانسداد كاملًا، فهو يستهدف نتيجة دائمة، ولـ HoLEP أطول بيانات متابعة في هذا الصدد. ومع ذلك لا تضمن أي طريقة عدم الحاجة إلى علاج لاحق؛ ويُنصَح بالمتابعة المنتظمة.'
          },
          {
            q: 'كم تبقى القسطرة ومتى أخرج من المستشفى؟',
            a: 'تبقى القسطرة عادةً يومًا إلى يومين وتُزال عندما يصفو البول. وبعد التأكد من قدرتكم على التبول تلقائيًا، يكون الخروج غالبًا بعد مبيت ليلة واحدة.'
          },
          {
            q: 'كيف تتأثر وظيفتي الجنسية؟',
            a: 'يُحافَظ على الانتصاب عادةً. أما القذف الرجوعي — انتقال السائل المنوي إلى المثانة — فتغيّر شائع يؤثر في الخصوبة. وإن كانت لديكم رغبة في الإنجاب فيجب مناقشة ذلك قبل العملية.'
          },
          {
            q: 'هل يحدث تسرّب بولي وهل يكون دائمًا؟',
            a: 'قد يحدث تسرّب جهدي في الأسابيع الأولى بعد الاستئصال. ويتحسّن تدريجيًا لدى معظم المرضى، وتسرّع تمارين قاع الحوض هذا التحسّن. أما التسرّب الدائم فنادر؛ وتُناقَش مخاطرتكم الشخصية على حدة في التقييم قبل العملية.'
          },
          {
            q: 'أتناول أدوية سيولة الدم، فهل تناسبني HoLEP؟',
            a: 'السيطرة على النزف في الاستئصال بالليزر تجعل الطريقة جديرة بالنظر لدى هؤلاء المرضى. غير أن قرار إيقاف الدواء يعود إلى الطبيب المتابع لحالتكم؛ فلا توقفوه من تلقاء أنفسكم.'
          }
        ],
        sources: [
          {
            label:
              'إرشادات EAU حول التعامل مع أعراض الجهاز البولي السفلي غير العصبية لدى الرجال — الجمعية الأوروبية للمسالك البولية',
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
