import { locales, type Locale } from '@/i18n/routing';

/**
 * BLOG / BİLGİ MERKEZİ
 * SEO odaklı uzun içerik. Şu an yapılandırılmış veri olarak tutuluyor
 * (CMS-ready). İleride MDX'e taşımak için: her post'un `body` alanını bir
 * .mdx dosyasına çıkarıp burada sadece meta veriyi bırakabilirsiniz.
 * Örnek içerik eğiticidir; genişletilebilir.
 */
export interface BlogSection {
  heading: string;
  paragraphs: string[];
}

/** Blog kategorileri (prompt m.4.7). Etiketler messages Blog.categories.* altında. */
export type BlogCategory =
  | 'prostate'
  | 'bph'
  | 'andrology'
  | 'stones'
  | 'oncology'
  | 'femaleUrology'
  | 'reconstructive'
  | 'healthTourism';

/** Kaynakça maddesi. */
export interface BlogSource {
  label: string;
  url?: string;
}

export interface BlogPost {
  slug: string;
  /** İlk yayın tarihi (ISO). */
  date: string;
  /** Son güncelleme tarihi (ISO). Yoksa date kullanılır. */
  updated?: string;
  /** Kategori — liste filtreleme ve iç linkleme için. */
  category: BlogCategory;
  treatmentSlug?: string; // ilgili tedavi (opsiyonel)
  /**
   * TASLAK. true iken yazı yayında görünmez (liste, sitemap, statik üretim).
   * Tıbbi metinler cerrah onayına kadar true kalır (prompt m.8.3).
   */
  draft?: boolean;
  /** Kaynakça — tüm dillerde aynı (başlıklar çoğunlukla İngilizce). */
  sources?: BlogSource[];
  /**
   * YAZININ YAYINLANDIĞI DİLLER.
   *
   * Blog yazıları ÇEVİRİ DEĞİLDİR — her pazarın kendi arama davranışına göre
   * yazılır (içerik planı böl. C). "HoLEP mi ThuLEP mi" sorusu Türkiye'de
   * aranır; "cost of robotic prostatectomy in Turkey" sorusu Türkiye'de
   * aranmaz. Bir yazıyı ilgisiz pazarda yayımlamak hem faydasız hem de
   * hreflang açısından yanlıştır.
   *
   * Bu alan boş bırakılırsa yazı TÜM dillerde yayınlanır (i18n'de karşılığı
   * olmayan dilde en/tr'ye düşer). Yalnızca gerçekten her dile çevrilmiş
   * yazılarda boş bırakın.
   *
   * ÖNEMLİ: Türkiye yönetmeliği gereği fiyat/karşılaştırma içeren yazılar
   * 'tr' listesine ALINMAZ (src/config/features.ts ile aynı mantık).
   */
  languages?: Locale[];
  i18n: Partial<
    Record<
      Locale,
      {
        title: string;
        excerpt: string;
        metaTitle: string;
        metaDescription: string;
        sections: BlogSection[];
      }
    >
  >;
}

/**
 * Okuma süresini (dakika) içerikten hesaplar — elle girilmez.
 * Dakikada ~200 kelime varsayımı; en az 1 dakika.
 */
export function readingMinutes(post: BlogPost, locale: Locale): number {
  const c = post.i18n[locale] ?? post.i18n.en ?? post.i18n.tr;
  if (!c) return 1;
  const words = c.sections
    .flatMap((s) => [s.heading, ...s.paragraphs])
    .join(' ')
    .trim()
    .split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'prostat-kanseri-belirtileri-ve-tedavi-secenekleri',
    date: '2026-01-15',
    updated: '2026-10-03',
    category: 'prostate',
    sources: [
      {
        label: 'EAU Guidelines on Prostate Cancer — European Association of Urology',
        url: 'https://uroweb.org/guidelines/prostate-cancer'
      }
    ],
    treatmentSlug: 'robotik-prostatektomi',
    i18n: {
      tr: {
        title: 'Prostat Kanseri: Belirtiler ve Tedavi Seçenekleri',
        excerpt:
          'Prostat kanserinde erken tanının önemi, PSA testi ve robotik cerrahi dahil tedavi seçeneklerine genel bir bakış.',
        metaTitle: 'Prostat Kanseri Belirtileri ve Tedavi Seçenekleri',
        metaDescription:
          'Prostat kanseri belirtileri, PSA testi, tanı süreci ve robotik prostatektomi dahil tedavi seçenekleri hakkında bilgilendirici rehber.',
        sections: [
          {
            heading: 'Prostat kanseri erken evrede neden belirti vermez?',
            paragraphs: [
              'Prostat, mesanenin hemen altında idrar kanalını çepeçevre saran bir bezdir. Kanser çoğunlukla bezin DIŞ kısmında, idrar kanalından uzakta başlar. Bu yüzden erken evrede idrar yolunu sıkıştırmaz ve hiçbir şikâyet yaratmaz.',
              'Pratikte bunun anlamı şudur: şikâyeti olmayan bir erkekte prostat kanseri olabilir, şikâyeti olan bir erkekte ise şikâyetin nedeni çoğu zaman kanser DEĞİL, iyi huylu prostat büyümesidir. İdrar şikâyetini kanserin habercisi saymak da, şikâyet yok diye rahatlamak da yanlıştır.',
              'Erken tanı, taramayla ilgili bir karardır ve bu karar kişiseldir: yaşınız, ailenizde prostat kanseri olup olmadığı, genel sağlık durumunuz ve beklenen yaşam süreniz birlikte değerlendirilir. Hekiminizle "bana tarama yapılmalı mı" sorusunu açıkça konuşun.'
            ]
          },
          {
            heading: 'Hangi belirtiler değerlendirilmelidir?',
            paragraphs: [
              'İdrar akımında zayıflama, idrara başlamakta zorlanma, sık idrara çıkma ve gece uyanma en sık görülen idrar şikâyetleridir. Bunlar kansere özgü değildir; aynı şikâyetler iyi huylu büyümede de görülür.',
              'ANCAK ŞU BULGULAR GECİKTİRİLMEDEN DEĞERLENDİRİLMELİDİR: idrarda veya menide kan, yeni başlayan ve geçmeyen kemik ağrısı (özellikle bel ve kalça), açıklanamayan kilo kaybı, bacaklarda güçsüzlük veya his kaybı.',
              'İdrarda kan AĞRISIZ da olabilir; ağrı yokluğu bunu önemsiz yapmaz. Ağrısız idrarda kan her yaşta araştırılır.'
            ]
          },
          {
            heading: 'PSA nedir, ne değildir?',
            paragraphs: [
              'PSA (prostat spesifik antijen) prostat dokusunun ürettiği bir proteindir. Kanda ölçülür ve prostatla ilgili bir bilgi verir — ama KANSER TESTİ DEĞİLDİR.',
              'PSA; iyi huylu prostat büyümesinde, idrar yolu enfeksiyonunda, prostat iltihabında, sonda takılmasından sonra ve bazen bisiklet veya cinsel ilişkinin ardından da yükselebilir. Yüksek bir PSA "kanser var" demek değildir; normal bir PSA da kanseri tamamen dışlamaz.',
              'ÇOK SIK ATLANAN BİR NOKTA: Prostat küçülten ilaçlar (5-alfa redüktaz inhibitörleri) PSA değerini yaklaşık YARIYA düşürür. Bu ilacı kullandığınızı söylemezseniz, aslında dikkat gerektiren bir değer normal gibi yorumlanabilir. Her PSA ölçümünde bu bilgiyi verin.',
              'Tek bir PSA değeri genellikle yeterli değildir. Değerin zaman içindeki eğilimi, prostat hacmine oranı ve muayene bulgusu birlikte değerlendirilir.'
            ]
          },
          {
            heading: 'Tanı süreci: önce görüntüleme, sonra biyopsi',
            paragraphs: [
              'PSA yüksekliği veya şüpheli bir muayene bulgusunda ilk adım artık çoğu zaman doğrudan biyopsi değil, çok parametreli prostat MR’ıdır. MR, şüpheli bir alan olup olmadığını gösterir ve varsa biyopsinin nereye yapılacağını belirler.',
              'Bu sıralamanın iki faydası vardır: gereksiz biyopsiden kaçınılabilir ve biyopsi yapılacaksa doğru yerden alınır. "Önce MR" yaklaşımı, hastayı rastgele iğne almaktan korur.',
              'Biyopsi gerekiyorsa işlem öncesi idrar kültürü temiz olmalıdır. Biyopsi sonrası idrarda ve menide bir süre kan görülmesi beklenen bir durumdur; ateş ve titreme ise beklenen değildir ve derhal başvurmayı gerektirir.'
            ]
          },
          {
            heading: 'Patoloji raporundaki sayı ne anlama gelir?',
            paragraphs: [
              'Biyopsi sonucunda kanser saptanırsa, patolog hücrelerin ne kadar farklılaştığını bir derece ile bildirir (Gleason skoru ve ona karşılık gelen ISUP derece grubu). Bu derece, hastalığın ne kadar hareketli davranma eğiliminde olduğunu gösterir.',
              'Düşük dereceli, az sayıda odakta ve PSA’sı düşük bir hastalık ile yüksek dereceli bir hastalık aynı tablo değildir ve aynı şekilde tedavi edilmez. Bu nedenle "prostat kanseri" tek bir hastalık gibi konuşulmamalıdır.',
              'Raporunuzu anlamıyorsanız açıklanmasını isteyin. Hangi derecede olduğunuzu bilmeden tedavi seçeneklerini karşılaştıramazsınız.'
            ]
          },
          {
            heading: 'Tedavi seçenekleri',
            paragraphs: [
              'AKTİF İZLEM, düşük riskli hastalıkta geçerli bir seçenektir ve "tedaviyi reddetmek" değildir. Düzenli PSA, muayene, MR ve gerektiğinde tekrar biyopsi ile hastalık yakından izlenir; ilerleme belirtisi görülürse tedaviye geçilir. Amaç, gerekmediği hâlde ameliyat veya ışın tedavisinin yan etkilerini yaşamamaktır.',
              'CERRAHİ (radikal prostatektomi), prostatın tamamının çıkarılmasıdır; günümüzde sıklıkla robotik yardımla yapılır. Çıkarılan doku patolojiye gider ve hastalığın gerçek yaygınlığı böylece görülür.',
              'RADYOTERAPİ, ışın tedavisidir ve seçilmiş hastalarda cerrahiye benzer bir hedefe yönelir. Hormon tedavisiyle birlikte uygulanabilir.',
              'HORMON TEDAVİSİ, tek başına küratif bir yöntem değildir; ileri evrede veya radyoterapiye eklenerek kullanılır.',
              'Hangi yöntemin seçileceği; hastalığın derecesi ve yaygınlığı, yaşınız, diğer hastalıklarınız ve sizin önceliklerinizle belirlenir. Hiçbir yöntem herkes için "en iyi" değildir.'
            ]
          },
          {
            heading: 'Dürüst beklentiler',
            paragraphs: [
              'Prostat ameliyatından sonra meni dışarı gelmez; doğal yolla çocuk sahibi olmak mümkün olmaz. Çocuk isteğiniz varsa bunu ameliyattan ÖNCE söyleyin.',
              'Sertleşme işlevi, sinirler korunsa bile kesin olarak geri dönmeyebilir; dönüş aylar sürebilir ve ameliyat öncesi durumunuza bağlıdır.',
              'İdrar kaçırma ilk haftalarda sık görülür ve çoğu hastada aylar içinde belirgin olarak azalır. Pelvik taban egzersizlerini ameliyattan ÖNCE öğrenmek bu süreci kolaylaştırır.',
              'PATOLOJİ SONUCU BEKLENENDEN KÖTÜ ÇIKABİLİR. Ameliyattan sonra ek tedavi (radyoterapi veya hormon) gerekmesi, ameliyatın başarısız olduğu anlamına gelmez; hastalığın gerçek yaygınlığının ancak çıkarılan dokuda görülebilmesinden kaynaklanır.'
            ]
          },
          {
            heading: 'Hekiminize sorabileceğiniz sorular',
            paragraphs: [
              'Hastalığımın derecesi ve risk grubu nedir? Aktif izlem benim için bir seçenek mi, değilse neden?',
              'Önerdiğiniz yöntemin bana özgü avantajı nedir; diğer seçenekler neden geride kalıyor?',
              'Ameliyat olursam idrar kaçırma ve sertleşme açısından bana özel beklenti nedir; bu beklentiyi neye dayandırıyorsunuz?',
              'Ameliyat sonrası ek tedavi gerekme ihtimalim nedir ve bu nasıl takip edilecek?',
              'Takip planım nedir: hangi tetkik, hangi sıklıkta, kim yorumlayacak?'
            ]
          },
          {
            heading: 'Sık karşılaşılan yanlış bilgiler',
            paragraphs: [
              '"PSA’m normal, o hâlde kanser yok." Doğru değil. Normal bir PSA kanseri tamamen dışlamaz; muayene bulgusu ve risk etkenleri de değerlendirilir.',
              '"PSA’m yüksek çıktı, demek ki kanserim var." Bu da doğru değil. Enfeksiyon, iyi huylu büyüme ve prostat iltihabı PSA’yı yükseltir. İlk adım genellikle tekrar ölçüm ve değerlendirmedir.',
              '"Biyopsi kanseri yayar." Bu endişe sık dile getirilir ancak biyopsinin kanseri yaydığına dair bir kanıt yoktur. Asıl risk, gereken biyopsinin yapılmamasıdır.',
              '"Ameliyat olursam her şey biter." Prostat kanserinde takip ameliyattan sonra da sürer. PSA düzenli ölçülür; bu bir güvensizlik değil, hastalığın doğru yönetilmesidir.',
              '"Aktif izlem hiçbir şey yapmamaktır." Hayır. Aktif izlem bir programdır: belirli aralıklarla PSA, muayene, görüntüleme ve gerektiğinde biyopsi içerir. Takibe gelmeyecekseniz aktif izlem sizin için uygun değildir.'
            ]
          },
          {
            heading: 'Önemli not',
            paragraphs: [
              'Bu yazı genel bilgilendirme amaçlıdır ve tıbbi tavsiye yerine geçmez. Prostat kanseri tek bir hastalık değildir; kararlar kişiye özeldir ve hekim muayenesi gerektirir.',
              'Yan ağrısıyla birlikte ateş, idrar yapamama, bacaklarda güçsüzlük veya his kaybı gibi bulgular ACİL değerlendirme gerektirir.'
            ]
          }
        ]
      },
      en: {
        title: 'Prostate Cancer: Symptoms and Treatment Options',
        excerpt:
          'An overview of the importance of early detection, the PSA test and treatment options including robotic surgery.',
        metaTitle: 'Prostate Cancer Symptoms and Treatment Options',
        metaDescription:
          'An informative guide to prostate cancer symptoms, the PSA test, the diagnostic process and treatment options including robotic prostatectomy.',
        sections: [
          {
            heading: 'Why does prostate cancer cause no symptoms early on?',
            paragraphs: [
              'The prostate is a gland sitting just below the bladder and surrounding the urinary channel. Cancer most often begins in the OUTER part of the gland, away from that channel. That is why, early on, it does not compress the urinary passage and causes no complaints at all.',
              'In practice this means two things: a man with no symptoms can have prostate cancer, and in a man who does have urinary symptoms the cause is usually NOT cancer but benign enlargement. Treating urinary symptoms as a warning sign of cancer is as wrong as being reassured by their absence.',
              'Early detection is a decision about screening, and that decision is personal: your age, a family history of prostate cancer, your general health and your life expectancy are weighed together. Discuss plainly with your doctor whether screening is right for you.'
            ]
          },
          {
            heading: 'Which symptoms should be assessed?',
            paragraphs: [
              'A weakening stream, hesitancy, frequency and waking at night are the commonest urinary symptoms. They are not specific to cancer; the same symptoms occur with benign enlargement.',
              'THESE FINDINGS, HOWEVER, SHOULD BE ASSESSED WITHOUT DELAY: blood in the urine or semen, new bone pain that does not settle (particularly in the back or hips), unexplained weight loss, weakness or loss of sensation in the legs.',
              'Blood in the urine can be PAINLESS; the absence of pain does not make it unimportant. Painless blood in the urine is investigated at any age.'
            ]
          },
          {
            heading: 'What PSA is — and what it is not',
            paragraphs: [
              'PSA (prostate-specific antigen) is a protein produced by prostate tissue. It is measured in the blood and tells you something about the prostate — but it IS NOT A CANCER TEST.',
              'PSA can rise with benign enlargement, with urinary infection, with inflammation of the prostate, after catheterisation and sometimes after cycling or intercourse. A high PSA does not mean "there is cancer", and a normal PSA does not entirely exclude it.',
              'A POINT VERY OFTEN MISSED: drugs that shrink the prostate (5-alpha reductase inhibitors) roughly HALVE the PSA value. If you do not say that you take one, a value that actually warrants attention can be read as normal. Give this information at every PSA measurement.',
              'A single PSA value is usually not enough. Its trend over time, its ratio to the prostate volume and the examination finding are considered together.'
            ]
          },
          {
            heading: 'Diagnosis: imaging first, biopsy afterwards',
            paragraphs: [
              'Where the PSA is raised or the examination is suspicious, the first step is now usually not a biopsy but a multiparametric MRI of the prostate. The scan shows whether there is a suspicious area and, if so, where the biopsy should be directed.',
              'That order has two benefits: an unnecessary biopsy can be avoided, and where a biopsy is needed it is taken from the right place. "MRI first" protects the patient from random needling.',
              'If a biopsy is needed, the urine culture must be clear beforehand. Blood in the urine and semen for a while afterwards is expected; fever and shivering are not, and require immediate contact.'
            ]
          },
          {
            heading: 'What the number in the pathology report means',
            paragraphs: [
              'If cancer is found, the pathologist reports how far the cells have changed, as a grade (the Gleason score and the corresponding ISUP grade group). That grade indicates how actively the disease tends to behave.',
              'Low-grade disease in a few cores with a low PSA is not the same picture as high-grade disease, and it is not treated the same way. "Prostate cancer" should therefore not be spoken of as a single illness.',
              'If you do not understand your report, ask for it to be explained. You cannot compare treatment options without knowing which grade you are in.'
            ]
          },
          {
            heading: 'Treatment options',
            paragraphs: [
              'ACTIVE SURVEILLANCE is a legitimate option in low-risk disease and is not "refusing treatment". The disease is followed closely with regular PSA, examination, MRI and, where needed, repeat biopsy; treatment begins if there are signs of progression. The aim is to avoid the side effects of surgery or radiotherapy where they are not needed.',
              'SURGERY (radical prostatectomy) removes the whole prostate and is today often performed with robotic assistance. The removed tissue goes to pathology, which is how the true extent of the disease becomes visible.',
              'RADIOTHERAPY aims at a similar goal to surgery in selected patients and may be combined with hormone therapy.',
              'HORMONE THERAPY is not a curative method on its own; it is used in advanced disease or added to radiotherapy.',
              'Which approach is chosen depends on the grade and extent of the disease, your age, your other conditions and your own priorities. No method is "best" for everyone.'
            ]
          },
          {
            heading: 'Honest expectations',
            paragraphs: [
              'After prostate surgery semen no longer passes outwards, and fathering a child naturally is not possible. If you wish to have children, say so BEFORE surgery.',
              'Erectile function may not return reliably even where the nerves are preserved; recovery can take months and depends on your function before surgery.',
              'Leakage of urine is common in the first weeks and lessens markedly over months in most men. Learning pelvic floor exercises BEFORE surgery makes that period easier.',
              'THE PATHOLOGY RESULT CAN BE WORSE THAN EXPECTED. Needing further treatment (radiotherapy or hormones) after surgery does not mean the operation failed; it follows from the fact that the true extent of the disease can only be seen in the removed tissue.'
            ]
          },
          {
            heading: 'Questions you can ask your doctor',
            paragraphs: [
              'What is the grade and risk group of my disease? Is active surveillance an option for me, and if not, why not?',
              'What is the specific advantage of the approach you propose for me, and why do the other options fall behind?',
              'If I have surgery, what is my individual expectation regarding continence and erections, and on what is that expectation based?',
              'What is the chance that I will need further treatment after surgery, and how will that be monitored?',
              'What is my follow-up plan: which test, how often, and who interprets it?'
            ]
          },
          {
            heading: 'Common misconceptions',
            paragraphs: [
              '"My PSA is normal, so I do not have cancer." Not true. A normal PSA does not entirely exclude cancer; the examination finding and your risk factors are assessed as well.',
              '"My PSA is high, so I must have cancer." Also not true. Infection, benign enlargement and inflammation of the prostate all raise PSA. The first step is usually to repeat the measurement and reassess.',
              '"A biopsy spreads cancer." This worry is often voiced, but there is no evidence that biopsy spreads the disease. The real risk is not having the biopsy that was needed.',
              '"Once I have surgery it is all over." In prostate cancer follow-up continues after surgery. PSA is measured regularly; that is not mistrust but proper management of the disease.',
              '"Active surveillance means doing nothing." No. Active surveillance is a programme: PSA at set intervals, examination, imaging and, where needed, biopsy. If you will not attend follow-up, active surveillance is not right for you.'
            ]
          },
          {
            heading: 'Important note',
            paragraphs: [
              'This article is for general information and does not replace medical advice. Prostate cancer is not a single disease; decisions are individual and require examination by a doctor.',
              'Fever with flank pain, inability to pass urine, or weakness or loss of sensation in the legs require URGENT assessment.'
            ]
          }
        ]
      },
      ar: {
        title: 'سرطان البروستاتا: الأعراض وخيارات العلاج',
        excerpt: 'نظرة عامة على أهمية الكشف المبكر واختبار PSA وخيارات العلاج بما فيها الجراحة الروبوتية.',
        metaTitle: 'أعراض سرطان البروستاتا وخيارات العلاج',
        metaDescription: 'دليل تعريفي حول أعراض سرطان البروستاتا واختبار PSA ومسار التشخيص وخيارات العلاج بما فيها استئصال البروستاتا بالروبوت.',
        sections: [
          {
            heading: 'لماذا لا يُحدِث سرطان البروستاتا أعراضًا في مرحلته المبكرة؟',
            paragraphs: [
              'تقع البروستاتا تحت المثانة مباشرة وتُحيط بقناة البول. ويبدأ السرطان غالبًا في الجزء الخارجي من الغدة بعيدًا عن هذه القناة. ولذلك فهو لا يضغط المسلك البولي في المرحلة المبكرة ولا يُحدِث أي شكوى.',
              'ومعنى ذلك عمليًا أمران: قد يكون لدى رجل بلا شكوى سرطان بروستاتا، وأما الرجل الذي يشكو من البول فسبب شكواه غالبًا ليس السرطان بل التضخم الحميد. فعدّ الشكوى البولية نذيرًا للسرطان خطأ، والاطمئنان لغيابها خطأ أيضًا.',
              'والكشف المبكر قرار يتعلق بالمسح، وهو قرار شخصي: يُوزَن فيه عمرك ووجود سوابق عائلية وحالتك الصحية العامة وتوقع العمر معًا. فناقش طبيبك بصراحة: هل المسح مناسب لي؟'
            ]
          },
          {
            heading: 'أي الأعراض ينبغي تقييمها؟',
            paragraphs: [
              'ضعف تيار البول وصعوبة البدء وتكرار التبول والاستيقاظ ليلًا أكثر الشكاوى البولية شيوعًا. وهي ليست خاصة بالسرطان؛ فالشكاوى نفسها تظهر في التضخم الحميد.',
              'لكن هذه العلامات ينبغي تقييمها من دون تأخير: دم في البول أو في المني، وألم عظمي حديث لا يزول (ولا سيما في الظهر والورك)، ونقص وزن غير مفسَّر، وضعف أو فقدان إحساس في الساقين.',
              'وقد يكون الدم في البول غير مؤلم؛ وغياب الألم لا يجعله غير مهم. فالبيلة الدموية غير المؤلمة تُقصّى في كل عمر.'
            ]
          },
          {
            heading: 'ما هو PSA وما ليس هو',
            paragraphs: [
              'PSA (المستضد النوعي للبروستاتا) بروتين تُنتجه أنسجة البروستاتا. ويُقاس في الدم ويعطي معلومة عن البروستاتا — لكنه ليس تحليلًا للسرطان.',
              'وقد يرتفع PSA في التضخم الحميد وفي التهاب المسالك وفي التهاب البروستاتا وبعد وضع القسطرة وأحيانًا بعد ركوب الدراجة أو الجماع. فارتفاعه لا يعني «يوجد سرطان»، وقيمته الطبيعية لا تنفي السرطان نفيًا تامًا.',
              'ونقطة كثيرًا ما تُغفَل: الأدوية التي تُصغّر البروستاتا (مثبطات اختزال ألفا-5) تخفض قيمة PSA إلى نحو النصف. فإن لم تُخبر أنك تستعملها فقد تُقرَأ قيمة تستحق الانتباه على أنها طبيعية. فأعطِ هذه المعلومة عند كل قياس.',
              'وقيمة واحدة من PSA لا تكفي عادة. إذ يُقيَّم معًا اتجاهها عبر الزمن ونسبتها إلى حجم البروستاتا ونتيجة الفحص.'
            ]
          },
          {
            heading: 'التشخيص: التصوير أولًا ثم الخزعة',
            paragraphs: [
              'عند ارتفاع PSA أو وجود فحص مريب لم تعد الخطوة الأولى اليوم الخزعة في الغالب، بل الرنين المغناطيسي متعدد المعاملات للبروستاتا. فهو يُظهر وجود منطقة مريبة من عدمه، ويحدد أين تُوجَّه الخزعة.',
              'ولهذا الترتيب فائدتان: يمكن تجنّب خزعة غير ضرورية، وإن لزمت الخزعة أُخذت من الموضع الصحيح. ومنهج «الرنين أولًا» يحمي المريض من وخز عشوائي.',
              'وإن لزمت الخزعة فينبغي أن يكون زرع البول نظيفًا قبلها. ووجود دم في البول والمني مدة بعدها أمر متوقَّع؛ أما الحمى والقشعريرة فغير متوقعة وتستدعي تواصلًا فوريًا.'
            ]
          },
          {
            heading: 'ماذا يعني الرقم في تقرير علم الأمراض؟',
            paragraphs: [
              'إن وُجد سرطان فإن اختصاصي علم الأمراض يذكر مقدار تغيّر الخلايا بدرجة (مجموع غليسون ومجموعة الدرجة ISUP المقابلة). وتدل هذه الدرجة على مقدار ميل المرض إلى السلوك النشط.',
              'والمرض منخفض الدرجة في عدد قليل من العينات مع PSA منخفض ليس الصورة نفسها للمرض عالي الدرجة، ولا يُعالَج بالطريقة نفسها. ولذلك لا ينبغي الحديث عن «سرطان البروستاتا» وكأنه مرض واحد.',
              'وإن لم تفهم تقريرك فاطلب شرحه. فمن دون معرفة درجتك لا تستطيع مقارنة خيارات العلاج.'
            ]
          },
          {
            heading: 'خيارات العلاج',
            paragraphs: [
              'المراقبة النشطة خيار مشروع في المرض منخفض الخطورة وليست «رفضًا للعلاج». إذ يُتابَع المرض عن كثب بـ PSA منتظم وفحص وتصوير بالرنين وخزعة عند الحاجة؛ ويُبدَأ العلاج عند ظهور علامات تقدّم. والهدف ألّا يعيش المريض آثار الجراحة أو الإشعاع من دون لزوم.',
              'والجراحة (الاستئصال الجذري للبروستاتا) تُزيل الغدة كاملة، وتُجرى اليوم كثيرًا بمساعدة الروبوت. ويُرسَل النسيج المُزال إلى علم الأمراض، وبذلك يتبيّن الامتداد الحقيقي للمرض.',
              'والعلاج الإشعاعي يستهدف عند مرضى مختارين غاية قريبة من غاية الجراحة، وقد يُجمَع مع العلاج الهرموني.',
              'والعلاج الهرموني ليس وحده أسلوبًا شافيًا؛ بل يُستعمَل في المراحل المتقدمة أو مضافًا إلى الإشعاع.',
              'ويتحدد الاختيار بدرجة المرض وامتداده وعمرك وأمراضك الأخرى وأولوياتك أنت. وما من أسلوب هو «الأفضل» للجميع.'
            ]
          },
          {
            heading: 'توقعات صادقة',
            paragraphs: [
              'بعد جراحة البروستاتا لا يخرج المني إلى الخارج؛ ولا يمكن الإنجاب بالطريق الطبيعي. فإن كنت ترغب في الإنجاب فقل ذلك قبل العملية.',
              'وقد لا تعود وظيفة الانتصاب عودة مؤكدة حتى مع الحفاظ على الأعصاب؛ وقد يستغرق التعافي أشهرًا ويتوقف على حالتك قبل العملية.',
              'وتسرّب البول شائع في الأسابيع الأولى ويخفّ خفضًا واضحًا خلال أشهر عند معظم الرجال. وتعلّم تمارين قاع الحوض قبل العملية يسهّل هذه المدة.',
              'وقد تأتي نتيجة الفحص المرضي أسوأ من المتوقع. والحاجة إلى علاج إضافي (إشعاع أو هرمونات) بعد العملية لا تعني فشلها؛ بل تنبع من أن الامتداد الحقيقي لا يُرى إلا في النسيج المُزال.'
            ]
          },
          {
            heading: 'أسئلة يمكنك طرحها على طبيبك',
            paragraphs: [
              'ما درجة مرضي ومجموعة خطورته؟ وهل المراقبة النشطة خيار لي، وإن لم تكن فلماذا؟',
              'ما الميزة المحددة للأسلوب الذي تقترحه عليّ، ولماذا تتراجع الخيارات الأخرى؟',
              'إن أُجريت لي العملية فما توقعي الشخصي في التحكم بالبول وفي الانتصاب، وعلى أي أساس؟',
              'ما احتمال احتياجي إلى علاج إضافي بعد العملية، وكيف ستتم متابعة ذلك؟',
              'ما خطة متابعتي: أي فحص، وبأي تواتر، ومن يقرأ النتيجة؟'
            ]
          },
          {
            heading: 'أخطاء شائعة',
            paragraphs: [
              '«PSA عندي طبيعي، إذن لا سرطان.» غير صحيح. فالقيمة الطبيعية لا تنفي السرطان نفيًا تامًا؛ ويُؤخَذ الفحص وعوامل الخطورة بالحسبان أيضًا.',
              '«PSA عندي مرتفع، إذن لديّ سرطان.» غير صحيح أيضًا. فالالتهاب والتضخم الحميد والتهاب البروستاتا ترفع القيمة. والخطوة الأولى عادة إعادة القياس والتقييم.',
              '«الخزعة تنشر السرطان.» يتردد هذا القلق كثيرًا، ولا دليل عليه. والخطر الحقيقي هو عدم إجراء الخزعة اللازمة.',
              '«إذا أُجريت العملية انتهى كل شيء.» في سرطان البروستاتا تستمر المتابعة بعد العملية. ويُقاس PSA بانتظام؛ وهذا ليس انعدام ثقة بل تدبير سليم للمرض.',
              '«المراقبة النشطة تعني عدم فعل شيء.» لا. بل هي برنامج: PSA على فترات محددة وفحص وتصوير وخزعة عند الحاجة. ومن لا يأتي إلى المتابعة فهي لا تناسبه.'
            ]
          },
          {
            heading: 'ملاحظة مهمة',
            paragraphs: [
              'هذه المقالة للمعلومة العامة ولا تغني عن المشورة الطبية. وسرطان البروستاتا ليس مرضًا واحدًا؛ والقرارات فردية وتستلزم فحصًا طبيًا.',
              'والحمى مع ألم الخاصرة، أو تعذّر التبول، أو الضعف وفقدان الإحساس في الساقين، كلها تستدعي تقييمًا عاجلًا.'
            ]
          }
        ]
      },
    }
  },
  {
    slug: 'bobrek-tasi-nasil-olusur-ve-korunma-yollari',
    date: '2026-02-10',
    updated: '2026-10-03',
    category: 'stones',
    sources: [
      {
        label: 'EAU Guidelines on Urolithiasis — European Association of Urology',
        url: 'https://uroweb.org/guidelines/urolithiasis'
      }
    ],
    treatmentSlug: 'bobrek-tasi',
    i18n: {
      tr: {
        title: 'Böbrek Taşı Nasıl Oluşur ve Nasıl Korunulur?',
        excerpt: 'Böbrek taşı oluşum nedenleri, risk faktörleri ve günlük hayatta alınabilecek önlemler.',
        metaTitle: 'Böbrek Taşı Nasıl Oluşur? Korunma Yolları',
        metaDescription:
          'Böbrek taşı oluşum nedenleri, risk faktörleri, beslenme önerileri ve tedavi yöntemleri hakkında bilgilendirici rehber.',
        sections: [
          {
            heading: 'Böbrek taşı nasıl oluşur?',
            paragraphs: [
              'İdrar, vücudun atması gereken mineralleri suda çözünmüş hâlde taşır. İdrar yeterince seyreltik olduğunda bu mineraller çözünmüş kalır. İdrar yoğunlaştığında ise çözünürlük sınırı aşılır, mineraller önce mikroskobik kristaller hâlinde çöker, sonra bu kristaller birbirine yapışarak taşı oluşturur.',
              'Bu yüzden taş hastalığının temelinde çoğu zaman tek bir "suçlu" yoktur: az su içmek, terleyerek sıvı kaybetmek, aşırı tuz, hayvansal proteinin fazlası, bazı ilaçlar, kronik ishal ve bazı metabolik hastalıklar aynı sonuca farklı yollardan katkı verir.',
              'Taş oluşumu bir anda olmaz; aylar içinde gelişir. Bunun pratik anlamı şudur: taşı düşürdükten sonra hiçbir şey değiştirmezseniz, aynı koşullar yeni bir taş üretmeye devam eder.'
            ]
          },
          {
            heading: 'Taş türleri neden önemli?',
            paragraphs: [
              'En sık görülen tür kalsiyum oksalat taşıdır. Ürik asit taşları, enfeksiyonla ilişkili (struvit) taşlar, sistin taşları ve bazı ilaçlara bağlı taşlar daha az görülür.',
              'Tür bilgisi önemlidir çünkü KORUNMA TÜRE GÖRE DEĞİŞİR. Ürik asit taşında idrarı alkalileştirmek taşın erimesine katkıda bulunabilirken, kalsiyum oksalat taşında yaklaşım farklıdır. Enfeksiyon taşı ise tamamen temizlenmedikçe büyümeye devam eder.',
              'Bu yüzden düşürdüğünüz veya çıkarılan taşı ATMAYIN. Taş analizi, sonraki yılların planını belirleyen en ucuz tetkiktir.'
            ]
          },
          {
            heading: 'Belirtiler ve ACİL olan durum',
            paragraphs: [
              'Tipik şikâyet, belden yan tarafa ve kasığa vuran, dalgalar hâlinde gelen şiddetli ağrıdır (renal kolik). Bulantı, kusma, idrarda kan ve sık idrara çıkma eşlik edebilir.',
              'ŞU DURUM ACİLDİR: yan ağrısıyla BİRLİKTE ateş veya titreme. Bu, tıkanmış bir böbrekte enfeksiyon gelişmiş olabileceği anlamına gelir ve saatler içinde ciddi bir tabloya dönüşebilir. Bekleyip "geçer mi" diye izlemek doğru değildir; derhal hastaneye başvurun.',
              'ÖNEMLİ BİR YANILGI: Ağrının olmaması güvenli olunduğu anlamına gelmez. Yavaş gelişen bir tıkanıklık ağrı yapmadan böbrek işlevini sessizce azaltabilir. Bu yüzden "ağrım geçti" denilerek kontrol atlanmaz.',
              'İdrar yapamama, tek böbrekli bir kişide kolik ağrı veya kontrol altına alınamayan kusma da gecikmeden değerlendirilmelidir.'
            ]
          },
          {
            heading: 'Tanı nasıl konur?',
            paragraphs: [
              'İlk basamakta idrar tahlili, kan tetkikleri (böbrek işlevi dâhil) ve görüntüleme yapılır. Ultrason radyasyon içermez ve özellikle gebelerde ve çocuklarda ilk tercihtir.',
              'Kontrastsız bilgisayarlı tomografi, taşın yerini, boyutunu ve yoğunluğunu en net gösteren yöntemdir; tedavi planı çoğu zaman buna göre yapılır. Ancak her kontrolde tomografi çekilmesi gerekmez — radyasyon yükü gereksiz yere artırılmaz.',
              'Tedavi planlanmadan önce idrar kültürünün temiz olması gerekir. Enfeksiyon varken taşa girişim yapmak riskleri belirgin biçimde artırır.'
            ]
          },
          {
            heading: 'Korunmanın temeli: sıvı',
            paragraphs: [
              'Taş hastalığında en etkili tek önlem, idrar miktarını artıracak kadar sıvı almaktır. Hedef, günlük idrar hacmini belirgin biçimde artırmaktır; bunun pratik göstergesi idrarın açık renkli olmasıdır.',
              'Sıcak iklimde yaşıyorsanız, fiziksel iş yapıyorsanız veya çok terliyorsanız ihtiyacınız daha yüksektir. Kaybettiğiniz sıvıyı geri koymadığınız her gün, idrarınız yoğunlaşır.',
              'Gece de önemlidir: uyku boyunca idrar yoğunlaşır. Gece bir kez kalkıp su içmek bazı hastalarda önerilir.',
              'Suyun yerine şekerli içecek koymak koruyucu değildir; şekerli ve fruktozlu içecekler taş riskini artırabilir.'
            ]
          },
          {
            heading: 'Beslenmede neyi değiştirmeli, neyi değiştirmemeli',
            paragraphs: [
              'TUZ: Fazla tuz, idrarla atılan kalsiyumu artırır ve taş oluşumunu kolaylaştırır. Tuzu azaltmak, kalsiyumu kesmekten çok daha doğru bir adımdır.',
              'HAYVANSAL PROTEİN: Aşırı et tüketimi idrar asitliğini artırır ve hem ürik asit hem kalsiyum taşı riskini yükseltir. Amaç proteini tamamen kesmek değil, aşırıya kaçmamaktır.',
              'OKSALAT: Ispanak, pancar, kuruyemiş, çikolata ve çay gibi yiyecekler oksalattan zengindir. Tamamen yasaklamak gerekmez; miktarı dengelemek ve bu yiyecekleri KALSİYUM İÇEREN bir öğünle birlikte almak daha etkilidir.',
              'KALSİYUM — EN SIK YAPILAN HATA: Taşı olan birçok kişi kalsiyumu keser. Bu YANLIŞTIR ve riski ARTIRABİLİR. Besinle alınan kalsiyum, bağırsakta oksalata bağlanarak emilimini azaltır. Kalsiyum besinlerden normal miktarda alınmalıdır; kalsiyum takviyesi ise hekime danışmadan kullanılmamalıdır.',
              'SİTRAT: Limon ve turunçgiller idrardaki sitratı artırır; sitrat kristalleşmeyi güçleştirir. Suya limon sıkmak basit ve zararsız bir destektir.'
            ]
          },
          {
            heading: 'Taş analizi ve metabolik değerlendirme',
            paragraphs: [
              'Tekrarlayan taş, tek böbrek, çocukluk çağında taş, aile öyküsü veya alışılmadık taş türü varsa daha ayrıntılı bir değerlendirme gerekir.',
              'Bu değerlendirmede 24 saatlik idrar toplanır ve hacim, kalsiyum, oksalat, sitrat, ürik asit ve diğer parametreler ölçülür. Amaç, taşın NEDEN oluştuğunu bulmak ve korunmayı kişiye göre ayarlamaktır.',
              'Bazı hastalarda ilaç tedavisi (örneğin idrarı alkalileştiren veya idrarla kalsiyum atılımını azaltan ilaçlar) eklenir. Bu ilaçlar hekim kontrolünde başlanır ve kan değerleriyle izlenir.'
            ]
          },
          {
            heading: 'Taş varsa tedavi seçenekleri',
            paragraphs: [
              'Küçük ve uygun konumdaki taşların bir bölümü kendiliğinden düşebilir; bu süreçte ağrı kontrolü ve bazı hastalarda taşın düşmesini kolaylaştıran ilaç kullanılır.',
              'Düşmeyen veya tıkanıklık yapan taşlarda seçenekler; ses dalgasıyla kırma (ESWL), idrar yolundan girilerek yapılan fleksibl üreteroskopi (RIRS) ve ciltten böbreğe girilerek yapılan perkütan yöntemdir (PCNL). Hangisinin uygun olduğu taşın boyutuna, yerine, sertliğine ve böbreğin anatomisine göre belirlenir.',
              'İşlem sonrası geçici olarak bir stent (JJ) takılabilir. Stent varken sık idrara çıkma, sıkışma ve hafif kanama olağandır. Stentin KİMİN, NEREDE ve NE ZAMAN alacağı işlemden önce planlanmalıdır — bu, yurt dışından gelen hastalar için özellikle önemlidir.'
            ]
          },
          {
            heading: 'Tekrarı önlemek',
            paragraphs: [
              'Taş hastalığı tek seferlik bir olay değil, tekrarlama eğilimi olan bir durumdur. Bir kez taş düşüren kişinin yıllar içinde yeniden taş oluşturma ihtimali azımsanmayacak düzeydedir.',
              'Bu nedenle tedavi, taşın çıkarılmasıyla bitmez. Sıvı alımı, tuz ve protein dengesi, taş analizi ve gerekiyorsa metabolik değerlendirme ile sürdürülür.',
              'Düzenli kontrol, sessiz bir taşın büyüyüp tıkanıklık yapmadan fark edilmesini sağlar. Ultrason bu takip için çoğu zaman yeterlidir ve radyasyon içermez.'
            ]
          },
          {
            heading: 'Önemli not',
            paragraphs: [
              'Bu yazı genel bilgilendirme amaçlıdır ve tıbbi tavsiye yerine geçmez. Taş hastalığının yönetimi kişiye özeldir.',
              'YAN AĞRISI İLE BİRLİKTE ATEŞ VEYA TİTREME ACİL BİR DURUMDUR; vakit kaybetmeden hastaneye başvurun.'
            ]
          },
          {
            heading: 'Sık duyulan yanlış bilgiler',
            paragraphs: [
              '"Bitkisel çaylar taşı eritir." Gerçekten eritilebilen tek grup ürik asit taşlarıdır ve bu, idrarın alkalileştirilmesiyle hekim kontrolünde yapılır. Kalsiyum oksalat taşı hiçbir çayla erimez; bu iddiaya dayanarak tedaviyi ertelemek böbreğe zarar verebilir.',
              '"Taşım düştü, iş bitti." Düşen taş o atağı bitirir, hastalığı bitirmez. Koşullar değişmezse yenisi oluşur.',
              '"Kalsiyumdan uzak durmalıyım." Hayır. Besinle alınan kalsiyumu kesmek taş riskini artırabilir; asıl azaltılması gereken tuz ve aşırı hayvansal proteindir.',
              '"Ağrım yoksa taşım yoktur." Sessiz taşlar vardır ve yavaş gelişen tıkanıklık ağrısız olabilir. Böbrek işlevi fark edilmeden azalabilir.',
              '"Çok su içince taş düşer." Sıvı almak yeni taş oluşumunu önlemede en etkili önlemdir; ancak sıkışmış bir taşı suyla itmek mümkün değildir ve tıkanıklık varsa fazla su ağrıyı artırabilir.'
            ]
          }
        ]
      },
      en: {
        title: 'How Kidney Stones Form and How to Prevent Them',
        excerpt: 'Causes of kidney stone formation, risk factors and everyday preventive measures.',
        metaTitle: 'How Do Kidney Stones Form? Prevention Tips',
        metaDescription:
          'An informative guide to why kidney stones form, risk factors, dietary tips and treatment methods.',
        sections: [
          {
            heading: 'How does a kidney stone form?',
            paragraphs: [
              'Urine carries the minerals the body needs to excrete, dissolved in water. While the urine is dilute enough, those minerals stay dissolved. When it becomes concentrated the limit of solubility is passed: the minerals first precipitate as microscopic crystals, and those crystals then stick together to form a stone.',
              'That is why stone disease rarely has a single culprit. Drinking too little, losing fluid through sweat, too much salt, excess animal protein, certain medicines, chronic diarrhoea and some metabolic conditions all contribute to the same result by different routes.',
              'A stone does not form suddenly; it develops over months. The practical meaning of that is simple: if nothing changes after you pass a stone, the same conditions carry on producing new ones.'
            ]
          },
          {
            heading: 'Why does the type of stone matter?',
            paragraphs: [
              'The commonest type is calcium oxalate. Uric acid stones, infection-related (struvite) stones, cystine stones and stones caused by certain drugs are less common.',
              'The type matters because PREVENTION DEPENDS ON IT. In uric acid stones, making the urine less acidic can contribute to dissolving the stone, whereas the approach in calcium oxalate stones is different. An infection stone will keep growing unless it is cleared completely.',
              'So DO NOT THROW AWAY the stone you pass or that is removed. Stone analysis is the cheapest test that shapes the plan for years to come.'
            ]
          },
          {
            heading: 'Symptoms — and the situation that is an emergency',
            paragraphs: [
              'The typical complaint is severe pain coming in waves from the loin to the groin (renal colic). Nausea, vomiting, blood in the urine and frequency can accompany it.',
              'THIS IS AN EMERGENCY: flank pain TOGETHER WITH fever or shivering. It can mean infection in an obstructed kidney, and that can become a serious situation within hours. Waiting to see whether it settles is not right; go to hospital immediately.',
              'AN IMPORTANT MISCONCEPTION: the absence of pain does not mean you are safe. A slowly developing obstruction can quietly reduce kidney function without causing pain. A follow-up appointment is therefore not skipped because "the pain has gone".',
              'Inability to pass urine, colic in someone with a single kidney, and vomiting that cannot be controlled also require assessment without delay.'
            ]
          },
          {
            heading: 'How is it diagnosed?',
            paragraphs: [
              'The first step is urinalysis, blood tests including kidney function, and imaging. Ultrasound involves no radiation and is the first choice particularly in pregnancy and in children.',
              'A non-contrast CT scan shows the position, size and density of the stone most clearly, and the treatment plan is often based on it. A CT is not needed at every review, however; the radiation burden is not increased without reason.',
              'The urine culture must be clear before treatment is planned. Intervening on a stone while an infection is present raises the risks markedly.'
            ]
          },
          {
            heading: 'The foundation of prevention: fluid',
            paragraphs: [
              'The single most effective measure in stone disease is drinking enough to increase the volume of urine. The aim is a markedly higher daily urine output, and the practical sign of that is pale urine.',
              'If you live in a hot climate, do physical work or sweat a great deal, your requirement is higher. Every day you fail to replace what you lose, your urine becomes more concentrated.',
              'The night matters too: urine concentrates during sleep. Getting up once at night to drink is advised for some patients.',
              'Replacing water with sugary drinks is not protective; sugar- and fructose-sweetened drinks can increase the risk.'
            ]
          },
          {
            heading: 'What to change in your diet — and what not to',
            paragraphs: [
              'SALT: excess salt increases the calcium excreted in the urine and makes stone formation easier. Reducing salt is a far sounder step than cutting out calcium.',
              'ANIMAL PROTEIN: excessive meat raises the acidity of the urine and increases the risk of both uric acid and calcium stones. The aim is not to cut protein out but to avoid excess.',
              'OXALATE: spinach, beetroot, nuts, chocolate and tea are rich in oxalate. A complete ban is not required; balancing the quantity and taking these foods together with a meal CONTAINING CALCIUM is more effective.',
              'CALCIUM — THE COMMONEST MISTAKE: many people with stones cut out calcium. That is WRONG and can INCREASE the risk. Calcium taken in food binds oxalate in the bowel and reduces its absorption. Calcium should be taken in normal amounts from food; calcium supplements should not be used without medical advice.',
              'CITRATE: lemons and citrus fruit raise citrate in the urine, and citrate makes crystallisation harder. Squeezing lemon into water is a simple and harmless support.'
            ]
          },
          {
            heading: 'Stone analysis and metabolic assessment',
            paragraphs: [
              'A more detailed assessment is needed where stones recur, where there is a single kidney, where stones began in childhood, where there is a family history, or where the stone type is unusual.',
              'That assessment involves a 24-hour urine collection measuring volume, calcium, oxalate, citrate, uric acid and other parameters. The aim is to find out WHY the stone formed and to tailor prevention to the individual.',
              'In some patients medication is added — for example drugs that make the urine less acidic or reduce calcium excretion. These are started under medical supervision and monitored with blood tests.'
            ]
          },
          {
            heading: 'Treatment options when a stone is present',
            paragraphs: [
              'Some small, favourably placed stones pass on their own; pain control and, in some patients, medication that helps the stone pass are used during that time.',
              'For stones that do not pass or that cause obstruction, the options are shock wave lithotripsy (ESWL), flexible ureteroscopy through the urinary passage (RIRS) and the percutaneous route through the skin into the kidney (PCNL). Which suits you depends on the size, position and hardness of the stone and on the anatomy of your kidney.',
              'A stent (JJ) may be placed temporarily after the procedure. With a stent in place, frequency, urgency and slight bleeding are usual. WHO removes the stent, WHERE and WHEN must be planned before the procedure — this matters particularly for patients travelling from abroad.'
            ]
          },
          {
            heading: 'Preventing recurrence',
            paragraphs: [
              'Stone disease is not a one-off event but a condition with a tendency to recur. Someone who has passed one stone has a far from negligible chance of forming another over the years.',
              'Treatment therefore does not end when the stone is removed. It continues with fluid intake, the balance of salt and protein, stone analysis and, where needed, metabolic assessment.',
              'Regular review allows a silent stone to be noticed before it grows and obstructs. Ultrasound is usually sufficient for that follow-up and involves no radiation.'
            ]
          },
          {
            heading: 'Important note',
            paragraphs: [
              'This article is for general information and does not replace medical advice. The management of stone disease is individual.',
              'FLANK PAIN TOGETHER WITH FEVER OR SHIVERING IS AN EMERGENCY; go to hospital without delay.'
            ]
          },
          {
            heading: 'Common myths',
            paragraphs: [
              '"Herbal teas dissolve stones." The only group that can genuinely be dissolved is uric acid stones, and that is done by making the urine less acidic, under medical supervision. A calcium oxalate stone dissolves with no tea at all; delaying treatment on the strength of that claim can damage the kidney.',
              '"I passed my stone, so that is the end of it." Passing a stone ends that episode, not the disease. If the conditions do not change, another will form.',
              '"I should avoid calcium." No. Cutting dietary calcium can increase the risk; what should be reduced is salt and excess animal protein.',
              '"If I have no pain, I have no stone." Silent stones exist, and slowly developing obstruction can be painless. Kidney function can decline without being noticed.',
              '"Drinking a lot of water will flush the stone out." Fluid is the most effective measure for preventing new stones, but water cannot push out a stone that is already impacted, and where there is obstruction, drinking a great deal can increase the pain.'
            ]
          }
        ]
      },
      ar: {
        title: 'كيف تتكوّن حصوات الكلى وكيف نتجنّبها؟',
        excerpt: 'أسباب تكوّن حصوات الكلى وعوامل الخطر والتدابير الوقائية في الحياة اليومية.',
        metaTitle: 'كيف تتكوّن حصوات الكلى؟ طرق الوقاية',
        metaDescription: 'دليل تعريفي حول أسباب تكوّن حصوات الكلى وعوامل الخطر ونصائح التغذية وطرق العلاج.',
        sections: [
          {
            heading: 'كيف تتكوّن حصاة الكلية؟',
            paragraphs: [
              'ينقل البول المعادن التي يحتاج الجسم إلى طرحها وهي ذائبة في الماء. وما دام البول مخفَّفًا بما يكفي تبقى هذه المعادن ذائبة. فإذا تركّز البول تُجووِز حد الذوبان: تترسب المعادن أولًا بلورات مجهرية، ثم تلتصق هذه البلورات ببعضها فتتكوّن الحصاة.',
              'ولذلك نادرًا ما يكون لداء الحصى سبب واحد. فقلة الشرب وفقدان السوائل بالتعرّق وكثرة الملح والإفراط في البروتين الحيواني وبعض الأدوية والإسهال المزمن وبعض أمراض الاستقلاب تسهم كلها في النتيجة نفسها بطرق مختلفة.',
              'ولا تتكوّن الحصاة فجأة بل خلال أشهر. ومعنى ذلك عمليًا بسيط: إن لم يتغيّر شيء بعد نزول الحصاة فإن الظروف نفسها تستمر في إنتاج حصى جديدة.'
            ]
          },
          {
            heading: 'لماذا يهمّ نوع الحصاة؟',
            paragraphs: [
              'أكثر الأنواع شيوعًا حصاة أكسالات الكالسيوم. أما حصى حمض البول وحصى الالتهاب (الستروفيت) وحصى السيستين والحصى الناجمة عن بعض الأدوية فأقل شيوعًا.',
              'والنوع مهم لأن الوقاية تتوقف عليه. ففي حصى حمض البول قد يسهم قلونة البول في إذابتها، أما في حصى أكسالات الكالسيوم فالمنهج مختلف. وحصاة الالتهاب تستمر في النمو ما لم تُزَل كاملة.',
              'فلا تَرمِ الحصاة التي نزلت أو أُزيلت. فتحليل الحصاة أرخص فحص يرسم خطة السنوات القادمة.'
            ]
          },
          {
            heading: 'الأعراض — والحالة الإسعافية',
            paragraphs: [
              'الشكوى النموذجية ألم شديد يأتي موجات من الخاصرة إلى المغبن (المغص الكلوي). وقد يرافقه غثيان وقيء ودم في البول وتكرار في التبول.',
              'وهذه حالة إسعافية: ألم الخاصرة مع حمى أو قشعريرة. فقد يعني ذلك التهابًا في كلية محتبسة، وقد يصير خطيرًا خلال ساعات. والانتظار لمعرفة هل يزول خطأ؛ فتوجّه إلى المستشفى فورًا.',
              'ومن الأخطاء المهمة أن غياب الألم يعني الأمان. فالانسداد البطيء قد يُنقِص وظيفة الكلية بصمت من دون ألم. ولذلك لا تُلغى المراجعة بحجة «زال الألم».',
              'كما أن تعذّر التبول، والمغص عند صاحب كلية وحيدة، والقيء الذي لا يُضبَط، كلها تستلزم تقييمًا من دون تأخير.'
            ]
          },
          {
            heading: 'كيف يُوضَع التشخيص؟',
            paragraphs: [
              'في الخطوة الأولى: تحليل البول وتحاليل الدم بما فيها وظيفة الكلية والتصوير. والموجات فوق الصوتية خالية من الإشعاع وهي الخيار الأول خصوصًا عند الحوامل والأطفال.',
              'والتصوير المقطعي من دون حقن أوضح ما يبيّن موضع الحصاة وحجمها وكثافتها؛ وغالبًا ما تُبنى خطة العلاج عليه. لكن لا يلزم تصوير مقطعي في كل مراجعة — فلا يُزاد الحمل الإشعاعي من دون داعٍ.',
              'ويجب أن يكون زرع البول نظيفًا قبل تخطيط العلاج. فالتدخل على الحصاة مع وجود التهاب يرفع المخاطر رفعًا واضحًا.'
            ]
          },
          {
            heading: 'أساس الوقاية: السوائل',
            paragraphs: [
              'أنجع إجراء مفرد في داء الحصى شرب ما يكفي لزيادة كمية البول. والهدف زيادة واضحة في حجم البول اليومي، وعلامته العملية أن يكون البول فاتح اللون.',
              'ومن يعيش في مناخ حار أو يعمل عملًا بدنيًا أو يتعرّق كثيرًا فحاجته أكبر. وفي كل يوم لا تُعوَّض فيه الخسارة يتركّز البول.',
              'والليل مهم أيضًا: إذ يتركّز البول أثناء النوم. ويُنصَح بعض المرضى بالنهوض مرة ليلًا لشرب الماء.',
              'واستبدال الماء بالمشروبات المحلاة لا يقي؛ بل قد ترفع المشروبات السكرية والغنية بالفركتوز الخطر.'
            ]
          },
          {
            heading: 'ما الذي يُغيَّر في الغذاء وما الذي لا يُغيَّر',
            paragraphs: [
              'الملح: كثرة الملح تزيد الكالسيوم المطروح في البول وتُسهّل تكوّن الحصى. وتقليل الملح أصوب بكثير من قطع الكالسيوم.',
              'البروتين الحيواني: الإفراط في اللحم يرفع حموضة البول ويزيد خطر حصى حمض البول وحصى الكالسيوم معًا. والهدف ليس قطع البروتين بل تجنّب الإفراط.',
              'الأكسالات: السبانخ والشمندر والمكسرات والشوكولاتة والشاي غنية بالأكسالات. ولا يلزم منعها كليًا؛ بل الأجدى ضبط الكمية وتناولها مع وجبة تحتوي كالسيوم.',
              'الكالسيوم — أكثر الأخطاء شيوعًا: يقطع كثير من أصحاب الحصى الكالسيوم. وهذا خطأ وقد يزيد الخطر. فالكالسيوم المتناوَل مع الطعام يرتبط بالأكسالات في الأمعاء فيقلّل امتصاصها. فينبغي أخذ الكالسيوم بكمية معتادة من الطعام؛ أما المكمّلات فلا تُستعمَل من دون استشارة الطبيب.',
              'السترات: الليمون والحمضيات ترفع السترات في البول، والسترات تُعسّر التبلور. وعصر الليمون في الماء دعم بسيط وغير ضار.'
            ]
          },
          {
            heading: 'تحليل الحصاة والتقييم الاستقلابي',
            paragraphs: [
              'يلزم تقييم أوسع عند تكرار الحصى، أو وجود كلية وحيدة، أو حصى منذ الطفولة، أو سوابق عائلية، أو نوع غير معتاد من الحصى.',
              'ويتضمن هذا التقييم جمع بول 24 ساعة وقياس الحجم والكالسيوم والأكسالات والسترات وحمض البول ومؤشرات أخرى. والهدف معرفة سبب تكوّن الحصاة وضبط الوقاية بحسب الشخص.',
              'وعند بعض المرضى يُضاف علاج دوائي — كأدوية تُقلون البول أو تُقلّل طرح الكالسيوم. وتُبدَأ تحت إشراف طبي وتُتابَع بتحاليل الدم.'
            ]
          },
          {
            heading: 'خيارات العلاج عند وجود حصاة',
            paragraphs: [
              'ينزل جزء من الحصى الصغيرة الحسنة الموضع من تلقاء نفسه؛ ويُستعمَل في هذه المدة ضبط الألم، وعند بعض المرضى دواء يُسهّل النزول.',
              'أما الحصى التي لا تنزل أو تُحدِث انسدادًا فخياراتها: التفتيت بالموجات الصادمة، وتنظير الحالب المرن عبر المسالك، والدخول عبر الجلد إلى الكلية. ويتحدد الأنسب بحجم الحصاة وموضعها وصلابتها وبتشريح الكلية.',
              'وقد تُوضَع دعامة (JJ) مؤقتًا بعد الإجراء. ومع وجود الدعامة يكون تكرار التبول والإلحاح والنزف الخفيف أمورًا معتادة. ويجب التخطيط قبل الإجراء لمن ينزع الدعامة وأين ومتى — وهذا مهم خصوصًا للمرضى القادمين من الخارج.'
            ]
          },
          {
            heading: 'منع التكرار',
            paragraphs: [
              'داء الحصى ليس حدثًا مفردًا بل حالة تميل إلى التكرار. ومن نزلت عنده حصاة مرة فاحتمال تكوّن حصاة جديدة عنده خلال السنين ليس بالقليل.',
              'ولذلك لا ينتهي العلاج بإزالة الحصاة. بل يستمر بكمية السوائل وضبط الملح والبروتين وتحليل الحصاة والتقييم الاستقلابي عند الحاجة.',
              'والمراجعة المنتظمة تتيح اكتشاف حصاة صامتة قبل أن تكبر وتُحدِث انسدادًا. والموجات فوق الصوتية تكفي غالبًا لهذه المتابعة ولا تحمل إشعاعًا.'
            ]
          },
          {
            heading: 'أخطاء شائعة',
            paragraphs: [
              '«الأعشاب تُذيب الحصى.» المجموعة الوحيدة القابلة للإذابة حقًا هي حصى حمض البول، وذلك بقلونة البول تحت إشراف طبي. أما حصاة أكسالات الكالسيوم فلا يُذيبها أي شاي؛ وتأجيل العلاج بناءً على هذا الادعاء قد يضر الكلية.',
              '«نزلت حصاتي، انتهى الأمر.» النزول ينهي النوبة لا المرض. وإن لم تتغير الظروف تكوّنت حصاة جديدة.',
              '«عليّ تجنّب الكالسيوم.» لا. فقطع كالسيوم الطعام قد يزيد الخطر؛ والذي ينبغي تقليله هو الملح والإفراط في البروتين الحيواني.',
              '«ما دام لا ألم فلا حصاة.» هناك حصى صامتة، والانسداد البطيء قد يكون غير مؤلم. وقد تتراجع وظيفة الكلية من دون أن يُلاحَظ.',
              '«شرب الكثير من الماء يُنزِل الحصاة.» السوائل أنجع إجراء لمنع حصى جديدة، لكن الماء لا يدفع حصاة منحشرة أصلًا، ومع وجود انسداد قد يزيد الشرب الكثير الألم.'
            ]
          },
          {
            heading: 'ملاحظة مهمة',
            paragraphs: [
              'هذه المقالة للمعلومة العامة ولا تغني عن المشورة الطبية. وتدبير داء الحصى فردي.',
              'ألم الخاصرة مع الحمى أو القشعريرة حالة إسعافية؛ فتوجّه إلى المستشفى من دون تأخير.'
            ]
          }
        ]
      },
    }
  },
  {
    slug: 'holep-mi-thulep-mi-prostat-buyuklugune-gore-secim',
    date: '2026-10-04',
    category: 'bph',
    languages: ['tr'],
    treatmentSlug: 'holep',
    sources: [
      { label: 'EAU Guidelines on Management of Non-Neurogenic Male LUTS — European Association of Urology', url: 'https://uroweb.org/guidelines/management-of-non-neurogenic-male-luts' }
    ],
    i18n: {
      tr: {
        title: 'HoLEP mi ThuLEP mi? Prostat Büyüklüğüne Göre Seçim',
        excerpt:
          'İki yöntem de prostatın büyümüş kısmını çıkarır ve sonuçları birbirine yakındır. Asıl belirleyici lazerin markası değil, prostatın büyüklüğü, idrar yolunun durumu ve cerrahın hangi sistemle çalıştığıdır.',
        metaTitle: 'HoLEP mi ThuLEP mi? Hangi Prostatta Hangisi Seçilir',
        metaDescription:
          'HoLEP ve ThuLEP arasındaki gerçek farklar, prostat büyüklüğünün seçime etkisi, kanama riski, geçici idrar kaçırma ve hangi durumda hangi yöntemin öne çıktığı.',
        sections: [
          {
            heading: 'İki yöntem aslında aynı ameliyatın iki farklı enerjisidir',
            paragraphs: [
              'HoLEP ve ThuLEP ayrı ameliyatlar değildir. İkisi de "enükleasyon" dediğimiz aynı işi yapar: prostatın idrar yolunu sıkıştıran iç kısmını, dış kapsülünden bir bütün hâlinde ayırıp mesaneye iter, sonra orada küçük parçalara bölüp dışarı alır. Fark, bu ayırma işleminde kullanılan lazerin cinsindedir — HoLEP holmiyum, ThuLEP tulyum lazer kullanır.',
              'Bu ayrımı bilmek önemli, çünkü iki ismin pazarlandığı kadar büyük bir fark yoktur. Hastaya "size şu lazer yapılacak" denildiğinde sorulması gereken soru markanın ne olduğu değil, prostatın tamamının çıkarılıp çıkarılmayacağıdır. Enükleasyon yapılıyorsa iki yöntemin de uzun vadeli sonucu birbirine yakındır.'
            ]
          },
          {
            heading: 'Prostat büyüklüğü kararın neresinde duruyor',
            paragraphs: [
              'Enükleasyon yöntemlerinin asıl üstünlüğü büyük prostatlarda ortaya çıkar. Klasik TURP ameliyatında prostat büyüdükçe işlem süresi uzar, emilen sıvı miktarı artar ve bir noktadan sonra açık cerrahi gündeme gelir. Enükleasyonda ise prostatın büyüklüğü bu anlamda bir tavan oluşturmaz; bezin tamamı çıkarılabildiği için çok büyük prostatlarda da aynı mantıkla çalışılır.',
              'Bu nedenle prostatınız büyükse esas soru "HoLEP mi ThuLEP mi" değil, "enükleasyon mu, TURP mu" sorusudur. İki lazer arasındaki tercih, bu asıl karardan sonra gelir.',
              'Küçük prostatlarda ise durum tersine döner: orada enükleasyonun sağladığı ek fayda azalır ve TURP ya da uygun hastalarda Rezüm gibi daha az girişimsel seçenekler masaya gelir.'
            ]
          },
          {
            heading: 'Dokunun kesilme biçimindeki fark neye yarar',
            paragraphs: [
              'Tulyum lazerin kesme özelliği holmiyumdan biraz farklıdır; daha düzgün bir kesi yüzeyi bırakma eğilimindedir. Holmiyum lazerin ise darbeli yapısı nedeniyle dokuyu ayırırken mekanik bir etkisi de vardır.',
              'Pratikte bu farkın hastaya yansıması sınırlıdır. Ameliyat sonrası sonda süresi, hastanede kalış ve idrar akım hızındaki düzelme iki yöntemde de benzer seyreder. Bir cerrahın hangi sistemle daha çok çalıştığı, lazerin cinsinden daha belirleyicidir.'
            ]
          },
          {
            heading: 'Kanama ve kan sulandırıcı kullanan hastalar',
            paragraphs: [
              'Enükleasyon yöntemlerinin öne çıktığı alanlardan biri kanama kontrolüdür. Prostat dokusu kapsülden ayrılırken kanayan damarlar işlem sırasında kapatılır ve TURP ile kıyaslandığında kanama daha sınırlı kalma eğilimindedir.',
              'Bu nedenle kalp hastalığı olan, kan sulandırıcı kullanan veya kanama açısından riskli hastalarda enükleasyon mantıklı bir seçenek olarak değerlendirilir. Ancak kan sulandırıcıların ameliyat öncesi yönetimi her hastada ayrı planlanır; ilacınızı kendi kararınızla kesmeyin.'
            ]
          },
          {
            heading: 'Dürüst olunması gereken konu: geçici idrar kaçırma',
            paragraphs: [
              'Enükleasyondan sonra bir süre idrar kaçırma görülebilir. Bunun nedeni prostat çıkarıldığında idrar tutmanın tek sorumlusunun dış büzücü kas hâline gelmesi ve bu kasın yeni duruma alışmasının zaman almasıdır. Çoğu hastada haftalar içinde düzelir.',
              'Bu konu ameliyat öncesinde açıkça konuşulmalıdır. "Hiç olmaz" demek doğru değildir; olabileceğini, genellikle geçici olduğunu ve pelvik taban egzersizlerinin bu süreci kısaltmaya yardımcı olduğunu bilerek ameliyata girmek, beklenmedik bir durumla karşılaşmaktan daha iyidir.'
            ]
          },
          {
            heading: 'Retrograd boşalma: ameliyat sonrası en sık karşılaşılan değişiklik',
            paragraphs: [
              'Prostat ameliyatlarından sonra meninin dışarı çıkmak yerine mesaneye geri kaçması sık görülür. Cinsel isteği ya da sertleşmeyi bozmaz, zararlı değildir, ama çocuk sahibi olma planı varsa bu durum önceden konuşulmalıdır.',
              'Hâlâ çocuk isteyen bir hastada enükleasyon ilk tercih olmayabilir; bu durumda başka seçenekler değerlendirilir.'
            ]
          },
          {
            heading: 'Peki nasıl karar veriliyor',
            paragraphs: [
              'Karar tek bir ölçüye değil, birkaç başlığa birlikte bakılarak verilir: prostatın hacmi, idrar akım hızı ve işedikten sonra mesanede kalan idrar miktarı, şikâyetlerin günlük yaşamı ne kadar kısıtladığı, kullanılan ilaçlar, kanama riski, cinsel işlev beklentileri ve çocuk isteği.',
              'Bu başlıkların hepsi muayene ve birkaç basit tetkikle değerlendirilir. Hangi lazerin kullanılacağı bu değerlendirmenin sonunda belirlenen bir ayrıntıdır — başında sorulan bir soru değil.',
              'Bu içerik genel bilgilendirme amaçlıdır ve tıbbi tavsiye yerine geçmez. Size uygun yöntemin belirlenmesi için ürologla görüşmeniz gerekir.'
            ]
          }
        ]
      }
    }
  },
  {
    slug: 'robotik-prostatektomi-sonrasi-idrar-kacirma-hafta-hafta',
    date: '2026-10-04',
    category: 'prostate',
    languages: ['tr'],
    treatmentSlug: 'robotik-prostatektomi',
    sources: [
      { label: 'EAU Guidelines on Prostate Cancer — European Association of Urology', url: 'https://uroweb.org/guidelines/prostate-cancer' }
    ],
    i18n: {
      tr: {
        title: 'Robotik Prostatektomi Sonrası İdrar Kaçırma: Hafta Hafta Ne Beklenmeli',
        excerpt:
          'Sonda çekildikten sonraki ilk günlerde idrar kaçırmak beklenen bir durumdur. Asıl mesele bunun ne kadar süreceği ve hangi noktada ek bir değerlendirme gerektiğidir.',
        metaTitle: 'Robotik Prostatektomi Sonrası İdrar Kaçırma Süreci',
        metaDescription:
          'Prostat kanseri ameliyatından sonra idrar kontrolünün dönüşü, hafta hafta beklentiler, pelvik taban egzersizleri ve hangi durumda ek değerlendirme gerektiği.',
        sections: [
          {
            heading: 'Neden oluyor',
            paragraphs: [
              'İdrarı tutmamızı sağlayan iki yapı vardır: prostatın içinden geçen iç büzücü mekanizma ve prostatın hemen altındaki dış büzücü kas. Prostat kanseri ameliyatında prostat tamamen çıkarıldığı için iç mekanizma da onunla birlikte gider. Geriye kalan dış kas, daha önce yardımcı rolde olduğu işi tek başına üstlenmek zorunda kalır.',
              'Bu nedenle ameliyattan sonra idrar kaçırmak bir komplikasyon değil, beklenen bir geçiş dönemidir. Kasın yeni görevine uyum sağlaması zaman alır.'
            ]
          },
          {
            heading: 'Sonda çekildikten sonraki ilk günler',
            paragraphs: [
              'Sonda çekildiğinde idrarın hiç kontrol edilemediği birkaç gün yaşanabilir. Ayağa kalkarken, öksürürken, hatta durup dururken kaçırma olabilir. Bu dönemde ped kullanmak gerekir ve bu durum utanılacak değil, planlanması gereken bir şeydir.',
              'İlk günlerde kaçırmanın fazla olması, iyileşmenin kötü gideceği anlamına gelmez. Bu ikisi arasında doğrudan bir ilişki yoktur.'
            ]
          },
          {
            heading: 'İlk 4–6 hafta',
            paragraphs: [
              'Bu dönemde çoğu hastada belirgin bir düzelme başlar. Önce gece kuruluk gelir — yatarken karın içi basıncı düşük olduğu için kaçırma azalır. Ardından gündüz, hareketsiz dururken kontrol gelişir.',
              'En son düzelen şey genellikle "zorlanma anlarıdır": öksürme, hapşırma, ağır kaldırma, merdiven çıkma. Bu sırayı bilmek önemlidir; gece kuru kalmaya başladığınızda süreç doğru gidiyor demektir, gündüz hâlâ ped kullanıyor olsanız bile.'
            ]
          },
          {
            heading: '3. aydan 12. aya',
            paragraphs: [
              'İyileşme bu dönemde yavaşlayarak devam eder. Pek çok hasta üçüncü ay civarında günlük yaşamını kısıtlamayan bir noktaya ulaşır, ancak süreç burada bitmez; kontrol bir yıla kadar düzelmeye devam edebilir.',
              'Bu nedenle üçüncü ayda tam kuruluk sağlanmamış olması bir başarısızlık işareti değildir. Aceleci bir karar vermeden, egzersizi sürdürerek beklemek doğru yaklaşımdır.'
            ]
          },
          {
            heading: 'Pelvik taban egzersizleri gerçekten işe yarıyor mu',
            paragraphs: [
              'Evet, ancak doğru kası çalıştırmak şartıyla. En sık yapılan hata karın, kalça veya bacak kaslarının sıkılmasıdır; bu egzersiz olmaz. Doğru kas, idrarı tutmaya çalışırken kasılan kastır.',
              'Egzersizin ameliyat öncesinde öğrenilmesi, sonrasında öğrenmeye çalışmaktan daha kolaydır. Mümkünse ameliyattan önce doğru tekniği öğrenin.',
              'Egzersizi günde birkaç kez, kısa setler hâlinde yapmak, uzun ve seyrek seanslardan daha etkilidir. Abartmak da yanlıştır: aşırı çalıştırma kası yorar.'
            ]
          },
          {
            heading: 'Günlük yaşamda işe yarayan birkaç basit şey',
            paragraphs: [
              'Kabızlıktan kaçınmak gerekir; ıkınma pelvik taban üzerindeki baskıyı artırır. Lifli beslenme ve yeterli su bu açıdan önemlidir.',
              'Kilo fazlası karın içi basıncını artırarak kaçırmayı kötüleştirir. Kilo vermek bu dönemde ölçülebilir bir fark yaratır.',
              'Sıvıyı kısmak yanlıştır. Az su içmek idrarı yoğunlaştırır, mesaneyi tahriş eder ve şikâyeti artırır. Kafein ve gazlı içecekleri azaltmak ise yardımcı olabilir.'
            ]
          },
          {
            heading: 'Hangi noktada ek değerlendirme gerekir',
            paragraphs: [
              'Bir yılın sonunda hâlâ günlük yaşamı kısıtlayan düzeyde kaçırma varsa durum ayrıca değerlendirilir. Bu değerlendirmede kaçırmanın tipi, miktarı ve mesanenin davranışı incelenir.',
              'Bu aşamada devreye giren seçenekler vardır ve bunlar istisnai durumlar için ayrılmıştır. Bu nedenle erken dönemde "düzelmezse ne olacak" kaygısıyla karar almaya çalışmak gereksizdir.',
              'Ayrıca şu belirtiler beklenen sürecin parçası değildir ve hekime bildirilmelidir: ateş, idrar yaparken yanma, idrarın hiç gelmemesi, karında şişkinlik ve giderek artan ağrı.'
            ]
          },
          {
            heading: 'Beklentiyi doğru kurmak',
            paragraphs: [
              'İdrar kontrolünün dönüş hızı kişiden kişiye değişir; yaş, ameliyat öncesi idrar durumu, mesanenin yapısı ve ek hastalıklar bu süreci etkiler. Bu nedenle başka bir hastanın takvimiyle kendinizi kıyaslamak yanıltıcıdır.',
              'Size kesin bir süre veya kesin bir sonuç vaat eden bir yaklaşıma temkinli yaklaşın. Doğru olan, beklenen seyri bilmek ve süreci takip etmektir.',
              'Bu içerik genel bilgilendirme amaçlıdır ve tıbbi tavsiye yerine geçmez. Kendi durumunuz için ameliyatınızı yapan ekiple görüşün.'
            ]
          }
        ]
      }
    }
  },
  {
    slug: 'sinir-koruyucu-cerrahi-kimlere-yapilabilir',
    date: '2026-10-04',
    category: 'prostate',
    languages: ['tr'],
    treatmentSlug: 'sinir-koruyucu-cerrahi',
    sources: [
      { label: 'EAU Guidelines on Prostate Cancer — European Association of Urology', url: 'https://uroweb.org/guidelines/prostate-cancer' }
    ],
    i18n: {
      tr: {
        title: 'Sinir Koruyucu Cerrahi Kimlere Yapılabilir?',
        excerpt:
          'Sinir koruyucu teknik her hastaya uygulanabilen bir tercih değildir. Kanserin yerleşimi, yaygınlığı ve ameliyat öncesi cinsel işlev bu kararı birlikte belirler.',
        metaTitle: 'Sinir Koruyucu Prostat Cerrahisi Kimlere Uygundur',
        metaDescription:
          'Prostat kanseri ameliyatında sinir koruyucu tekniğin kimlere uygulanabildiği, kararı etkileyen faktörler, kısmi koruma kavramı ve gerçekçi beklentiler.',
        sections: [
          {
            heading: 'Korunan sinirler ne işe yarıyor',
            paragraphs: [
              'Prostatın her iki yanından, bezle neredeyse temas hâlinde geçen ince sinir-damar demetleri vardır. Bu yapılar sertleşme mekanizmasının çalışmasında rol oynar. Prostat çıkarılırken bu demetler korunabilirse, ameliyat sonrası cinsel işlevin geri dönme ihtimali artar.',
              'Burada iki noktayı netleştirmek gerekir. Birincisi, bu sinirler idrar tutmanın asıl sorumlusu değildir; sinir koruması idrar kaçırma sorununu ortadan kaldırmaz. İkincisi, sinirler korunsa bile işlevin dönmesi aylar alır ve her hastada aynı ölçüde olmaz.'
            ]
          },
          {
            heading: 'Birinci ve değişmez kural: önce kanser',
            paragraphs: [
              'Sinir koruyucu cerrahi, prostat kapsülüne çok yakın çalışmayı gerektirir. Kanser o bölgeye uzanmışsa, sinirleri korumak için yakın çalışmak ameliyat sınırında tümör bırakma riskini artırır.',
              'Bu nedenle karar her zaman aynı sırayla verilir: önce kanserin tam olarak çıkarılması, sonra mümkünse sinirin korunması. Bu sıra tersine çevrilmez. Cinsel işlev önemlidir, ama onkolojik sonucun önüne geçmez.',
              'Bir hekimin size bu dengeyi açıkça anlatması, "merak etmeyin sinirler korunur" demesinden daha değerlidir.'
            ]
          },
          {
            heading: 'Kararı etkileyen başlıca faktörler',
            paragraphs: [
              'Biyopsi sonucu: Tümörün hangi bölgelerden alınan örneklerde çıktığı ve derecesi, kanserin sinir demetine yakın olup olmadığı konusunda fikir verir.',
              'Multiparametrik MR: Tümörün prostat içindeki yerleşimini ve kapsülün dışına taşma şüphesi olup olmadığını gösterir. Sinir koruma kararında en çok başvurulan incelemedir.',
              'Parmakla muayene bulgusu: Prostatta sertlik hissedilen taraf, karar sırasında dikkate alınır.',
              'PSA seviyesi ve seyri: Genel risk değerlendirmesinin parçasıdır.',
              'Ameliyat öncesi cinsel işlev: Belki de en çok göz ardı edilen başlık. Ameliyattan önce sertleşme sorunu belirgin olan bir hastada, sinirlerin korunması beklenen faydayı sağlamayabilir. Bu durum ameliyat öncesinde dürüstçe konuşulmalıdır.'
            ]
          },
          {
            heading: '"Her şey ya da hiç" değil: kısmi koruma',
            paragraphs: [
              'Sinir koruma ikili bir seçim değildir. Kanser prostatın yalnızca bir tarafındaysa, o taraf gereken genişlikte çıkarılıp diğer tarafta sinir korunabilir. Buna tek taraflı koruma denir.',
              'Ayrıca koruma derecesi de değişebilir: sinir demetine ne kadar yakın çalışılacağı, tümörün o bölgedeki durumuna göre ayarlanır. Yani "korundu" ve "korunmadı" arasında ara basamaklar vardır.',
              'Bu esneklik, kararın ameliyat öncesinde kesin olarak verilememesinin de nedenidir. Cerrah ameliyat sırasındaki görüntüye göre planı güncelleyebilir.'
            ]
          },
          {
            heading: 'Gerçekçi beklenti nasıl kurulur',
            paragraphs: [
              'Sinirler korunduğunda bile cinsel işlev ameliyattan hemen sonra geri gelmez. Sinir dokusu cerrahi sırasında gerilme ve ısı etkisine maruz kalır; toparlanması aylar sürer. Bu dönemde beklenti kurmak değil, sabırlı olmak gerekir.',
              'İyileşmeyi etkileyen başka etkenler de vardır: yaş, şeker hastalığı, kalp-damar hastalığı, sigara ve ameliyat öncesi işlevin düzeyi. Aynı ameliyat iki hastada farklı sonuç verebilir.',
              'Bu süreçte penil rehabilitasyon adı verilen bir yaklaşım uygulanabilir. Amacı, işlev dönene kadar dokunun kan akımını desteklemektir. Bu konuyu ameliyat sonrası kontrollerinizde gündeme getirin.'
            ]
          },
          {
            heading: 'Hastanın sorması gereken sorular',
            paragraphs: [
              'Benim biyopsi ve MR sonucuma göre sinir koruması tek taraflı mı, iki taraflı mı planlanıyor?',
              'Ameliyat sırasında plan değişirse hangi durumda korumadan vazgeçilir?',
              'Ameliyat öncesi cinsel işlev durumum bu kararı nasıl etkiliyor?',
              'Sonrasında işlevin dönmesi için ne yapılacak ve ne zaman değerlendirme yapılacak?',
              'Bu sorulara net cevap alabildiğiniz bir süreç, size kesin sonuç vaat eden bir süreçten daha güvenilirdir.',
              'Bu içerik genel bilgilendirme amaçlıdır ve tıbbi tavsiye yerine geçmez. Kendi durumunuzun değerlendirilmesi için ürologla görüşün.'
            ]
          }
        ]
      }
    }
  },
  {
    slug: 'psa-yuksekligi-biyopsiden-once-mr-neden-onemli',
    date: '2026-10-04',
    category: 'prostate',
    languages: ['tr'],
    treatmentSlug: 'psa-yuksekligi-ve-biyopsi',
    sources: [
      { label: 'EAU Guidelines on Prostate Cancer — European Association of Urology', url: 'https://uroweb.org/guidelines/prostate-cancer' }
    ],
    i18n: {
      tr: {
        title: 'PSA Yüksekliği: Biyopsiden Önce MR Neden Önemli',
        excerpt:
          'PSA yüksekliği tek başına kanser demek değildir. Biyopsiden önce multiparametrik MR çekilmesi, hem gereksiz biyopsiyi hem de atlanan tümörü azaltan bir adımdır.',
        metaTitle: 'PSA Yüksekliğinde Biyopsi Öncesi MR Neden Gerekir',
        metaDescription:
          'PSA neden yükselir, biyopsiden önce multiparametrik MR ne sağlar, PI-RADS ne anlama gelir ve füzyon biyopsi ile klasik biyopsi arasındaki fark.',
        sections: [
          {
            heading: 'PSA yüksekliği kanser demek değildir',
            paragraphs: [
              'PSA prostat dokusunun ürettiği bir maddedir ve kana geçer. Kanser PSA\'yı yükseltebilir, ama yükselten tek şey kanser değildir. Prostatın iyi huylu büyümesi, iltihabı, idrar yolu enfeksiyonu, sonda takılması, bisiklet sürmek ve cinsel ilişki de PSA\'yı geçici olarak yükseltebilir.',
              'Bu nedenle tek bir yüksek PSA sonucuyla doğrudan biyopsiye gitmek çoğu zaman doğru değildir. Önce tekrarlanması, enfeksiyon şüphesi varsa tedavi sonrası yeniden bakılması ve diğer bulgularla birlikte değerlendirilmesi gerekir.',
              'Tersi de doğrudur: PSA normal sınırlarda olan bir erkekte kanser olmayacağı anlamına gelmez. Bu yüzden parmakla muayene bulgusu da değerlendirmenin parçasıdır.'
            ]
          },
          {
            heading: 'Eskiden nasıl yapılıyordu, sorun neydi',
            paragraphs: [
              'Geçmişte PSA yüksekse doğrudan biyopsi yapılırdı ve bu biyopsi prostattan belirli bir haritaya göre, rastgele denebilecek şekilde örnek alınarak gerçekleştirilirdi. Tümörün nerede olduğu bilinmediği için iğneler "her yere bakalım" mantığıyla atılırdı.',
              'Bu yaklaşımın iki ayrı sorunu vardı. Bir yandan tedavi gerektirmeyecek kadar sessiz tümörler bulunuyor ve hastalar gereksiz tedavilere yönlendirilebiliyordu. Öte yandan prostatın ön kısmında yerleşmiş, iğnelerin ulaşmadığı önemli tümörler atlanabiliyordu.',
              'Yani sorun yalnızca "fazla biyopsi" değildi; aynı anda hem fazlası hem eksiği yapılıyordu.'
            ]
          },
          {
            heading: 'Multiparametrik MR ne değiştiriyor',
            paragraphs: [
              'Multiparametrik MR, prostatı farklı görüntüleme parametrelerini birleştirerek inceler ve şüpheli alanları gösterebilir. Biyopsiden önce çekildiğinde iki şey sağlar: şüpheli bir odak varsa iğnenin nereye atılacağı bilinir; hiç şüpheli odak yoksa biyopsi kararı yeniden değerlendirilebilir.',
              'Bu, "MR temizse biyopsi hiç yapılmaz" anlamına gelmez. Karar PSA seviyesi, PSA\'nın zaman içindeki seyri, muayene bulgusu, aile öyküsü ve yaş ile birlikte verilir. Ancak MR, bu kararı tahmine değil görüntüye dayandırır.',
              'MR\'ın biyopsiden ÖNCE çekilmesi önemlidir. Biyopsiden sonra oluşan kanama ve ödem, görüntüyü haftalarca yorumlanamaz hâle getirebilir.'
            ]
          },
          {
            heading: 'PI-RADS ne anlama geliyor',
            paragraphs: [
              'MR raporunda göreceğiniz PI-RADS, radyoloğun gördüğü alanın ne kadar şüpheli olduğunu 1\'den 5\'e kadar derecelendiren bir ölçektir. Düşük puanlar klinik olarak önemli kanser olasılığının düşük olduğunu, yüksek puanlar bu olasılığın arttığını anlatır.',
              'PI-RADS bir tanı değildir. 5 puan "kanser var" demek olmadığı gibi, 2 puan "kesinlikle yok" demek de değildir. Bu ölçek, biyopsi kararını ve iğnelerin nereye atılacağını yönlendirmek için vardır.'
            ]
          },
          {
            heading: 'Füzyon biyopsi: MR ile ultrasonun birleştirilmesi',
            paragraphs: [
              'MR\'da şüpheli bir alan görüldüğünde bu görüntü, biyopsi sırasında kullanılan ultrason görüntüsüyle yazılım aracılığıyla üst üste bindirilir. Böylece iğne, MR\'da işaretlenen alana yönlendirilebilir.',
              'Genellikle hedefe yönelik örneklerin yanında, prostatın geri kalanından da sistematik örnekler alınır. Çünkü MR her tümörü göstermez; ikisi birlikte yapıldığında sonuç daha güvenilir olur.'
            ]
          },
          {
            heading: 'Biyopsi yolu: transrektal ve transperineal',
            paragraphs: [
              'Biyopsi iğnesi makat yoluyla (transrektal) veya makat ile torbalar arasındaki ciltten (transperineal) girilerek alınabilir. İkinci yolun bağırsak florasıyla temas etmemesi nedeniyle enfeksiyon açısından avantajı olduğu bildirilmektedir.',
              'Bu tercih hastanenin imkânlarına, hastanın durumuna ve prostatın hangi bölgesine ulaşılması gerektiğine göre belirlenir. Hangi yolun planlandığını ve nedenini sormakta fayda vardır.'
            ]
          },
          {
            heading: 'Biyopsi sonrası beklenenler',
            paragraphs: [
              'İdrarda, menide ve dışkıda bir süre kan görülmesi beklenen bir durumdur. Menideki kahverengi renk haftalarca sürebilir ve bu normaldir.',
              'Ancak şu durumlar acil değerlendirme gerektirir: ateş ve titreme, idrar yapamama, giderek artan ağrı, durmayan kanama. Bu belirtileri önceden bilmek, geceyi kaygıyla geçirmeyi önler.',
              'Bu içerik genel bilgilendirme amaçlıdır ve tıbbi tavsiye yerine geçmez. PSA sonucunuzun değerlendirilmesi için ürologla görüşün.'
            ]
          }
        ]
      }
    }
  },
  {
    slug: 'bobrek-tasi-rirs-mi-pcnl-mi',
    date: '2026-10-04',
    category: 'stones',
    languages: ['tr'],
    treatmentSlug: 'rirs',
    sources: [
      { label: 'EAU Guidelines on Urolithiasis — European Association of Urology', url: 'https://uroweb.org/guidelines/urolithiasis' }
    ],
    i18n: {
      tr: {
        title: 'Böbrek Taşı: RIRS mi PCNL mi?',
        excerpt:
          'Taşın boyutu, sertliği, yerleşimi ve böbreğin anatomisi hangi yöntemin seçileceğini belirler. İkisi de iyi yöntemdir; yanlış olan, uygun olmayan taşa uygun olmayan yöntemi uygulamaktır.',
        metaTitle: 'RIRS mi PCNL mi? Böbrek Taşında Yöntem Seçimi',
        metaDescription:
          'Böbrek taşı tedavisinde RIRS ve PCNL arasındaki farklar, taş boyutunun ve sertliğinin rolü, alt kaliks taşları, riskler ve taşsızlık beklentisi.',
        sections: [
          {
            heading: 'İki yöntem böbreğe iki farklı kapıdan girer',
            paragraphs: [
              'RIRS\'te vücuda hiçbir kesi yapılmaz. Bükülebilen ince bir alet idrar yolundan girilerek mesane ve üreter üzerinden böbreğe ulaştırılır; taş lazerle toz hâline getirilir.',
              'PCNL\'de ise sırttan yaklaşık bir santimetrelik bir delikle doğrudan böbreğe girilir. Oluşturulan bu tünelden daha kalın aletler geçirilebilir, böylece büyük taşlar parçalanıp tek seansta dışarı alınabilir.',
              'Yani fark "açık ameliyat ve kapalı ameliyat" değildir; ikisi de kapalıdır. Fark, böbreğe hangi yoldan ulaşıldığı ve bu yolun ne kadar alet geçirmeye izin verdiğidir.'
            ]
          },
          {
            heading: 'Taşın boyutu: en belirleyici başlık',
            paragraphs: [
              'Küçük taşlarda RIRS öne çıkar. Taş toz hâline getirilir, parçalar idrarla düşer ve vücutta kesi izi kalmaz.',
              'Taş büyüdükçe denklem değişir. Büyük bir taşı RIRS ile tozlaştırmak hem çok uzun sürer hem de bütün parçaların dışarı atılması beklenemeyeceği için ikinci, hatta üçüncü seans gerekebilir. Bu noktada tek seansta sonuç veren PCNL mantıklı hâle gelir.',
              'Arada kalan boyutlarda karar tek başına ölçüye göre verilmez; aşağıdaki başlıklar devreye girer.'
            ]
          },
          {
            heading: 'Taşın sertliği',
            paragraphs: [
              'Taşlar aynı sertlikte değildir. Bilgisayarlı tomografide ölçülen yoğunluk değeri, taşın lazere ne kadar direnç göstereceği konusunda fikir verir.',
              'Çok sert bir taşın RIRS ile tozlaştırılması uzun sürer; bu da ameliyat süresini ve böbrek içi basıncı artırır. Sertlik, boyutla birlikte değerlendirilir.'
            ]
          },
          {
            heading: 'Yerleşim: özellikle alt kaliks taşları',
            paragraphs: [
              'Böbreğin alt bölümündeki (alt kaliks) taşlar özel bir durumdur. Burası yerçekimi nedeniyle parçaların zor boşaldığı bir cepte bulunur. Taş tozlaştırılsa bile parçalar orada kalabilir.',
              'Bu nedenle alt kaliks taşlarında, benzer boyuttaki bir başka taşa göre PCNL daha erken gündeme gelebilir. Böbreğin bu bölgedeki açısı ve kaliks boynunun genişliği de kararı etkiler.'
            ]
          },
          {
            heading: 'Hangi durumlarda RIRS tercih edilir',
            paragraphs: [
              'Kan sulandırıcı kullanan hastalarda RIRS, böbreğe delik açılmadığı için daha uygun bir seçenek olarak değerlendirilir.',
              'Şişmanlık, iskelet deformiteleri gibi sırttan girişi zorlaştıran durumlarda da RIRS öne çıkabilir.',
              'Tek böbreği olan hastalarda böbrek dokusunu koruma kaygısı RIRS lehine bir etkendir.',
              'Ayrıca aynı seansta üreterdeki bir taşa da müdahale edilebilmesi RIRS\'in pratik bir üstünlüğüdür.'
            ]
          },
          {
            heading: 'Hangi durumlarda PCNL tercih edilir',
            paragraphs: [
              'Büyük ve böbrek havuzunu dolduran taşlarda, özellikle geyik boynuzu dediğimiz dallanmış taşlarda PCNL temel yöntemdir.',
              'Çok sayıda taşın bir arada bulunduğu böbreklerde tek seansta temizlik şansı daha yüksektir.',
              'Daha önce RIRS denenip taşsızlık sağlanamamış hastalarda da PCNL gündeme gelir.'
            ]
          },
          {
            heading: 'Riskler dürüstçe nasıl anlatılır',
            paragraphs: [
              'PCNL\'in en bilinen riski kanamadır; böbreğe bir tünel açıldığı için bu risk RIRS\'ten yüksektir. Nadiren kan verilmesi veya ek girişim gerekebilir. Komşu organ yaralanması nadir ama bilinen bir risktir.',
              'RIRS\'in riskleri daha çok üreterle ilgilidir: alet geçişine bağlı zedelenme ve daha sonra darlık gelişmesi bildirilmiştir. Ayrıca işlem sırasında böbrek içi basıncın artması enfeksiyon açısından önemlidir.',
              'Her iki yöntemde de ateşli enfeksiyon ciddiye alınması gereken bir durumdur. İdrar kültürünün ameliyat öncesi temiz olması bu nedenle önemlidir — enfeksiyonlu idrarla taş ameliyatı planlanmaz.'
            ]
          },
          {
            heading: 'Stent (JJ kateter) konusu',
            paragraphs: [
              'Her iki yöntemden sonra da böbrekle mesane arasına geçici bir stent konulabilir. Stent böbreğin boşalmasını güvence altına alır, ancak kendisi de şikâyet yaratır: sık idrara çıkma, kasıkta ağrı, idrarda kan.',
              'Bu şikâyetler stent çıkarıldığında geçer. Stentin ne kadar süre kalacağını önceden sormak, bu dönemi psikolojik olarak kolaylaştırır.'
            ]
          },
          {
            heading: 'Asıl soru: taş neden oluştu',
            paragraphs: [
              'Taşın temizlenmesi tedavinin yarısıdır. Hiçbir şey yapılmazsa taş tekrarlama eğilimindedir. Bu nedenle düşen veya çıkarılan taşın cinsinin belirlenmesi, idrar incelemesi ve beslenme-sıvı düzeninin gözden geçirilmesi gerekir.',
              'Günlük sıvı alımını artırmak, en basit ve en çok ihmal edilen önlemdir. Taş cinsine göre beslenme önerileri değişir; herkese aynı liste verilmez.',
              'Bu içerik genel bilgilendirme amaçlıdır ve tıbbi tavsiye yerine geçmez. Taşınız için uygun yöntem, tomografi ve tetkikleriniz değerlendirilerek belirlenir.'
            ]
          }
        ]
      }
    }
  },
  {
    slug: 'rezum-sonrasi-cinsel-fonksiyon',
    date: '2026-10-04',
    category: 'bph',
    languages: ['tr'],
    treatmentSlug: 'rezum',
    sources: [
      { label: 'EAU Guidelines on Management of Non-Neurogenic Male LUTS — European Association of Urology', url: 'https://uroweb.org/guidelines/management-of-non-neurogenic-male-luts' }
    ],
    i18n: {
      tr: {
        title: 'Rezüm Sonrası Cinsel Fonksiyon',
        excerpt:
          'Rezüm\'ün öne çıktığı nokta, cinsel işlev üzerindeki etkisinin klasik prostat ameliyatlarına göre daha sınırlı olmasıdır. Ancak bu "hiçbir şey değişmez" anlamına gelmez.',
        metaTitle: 'Rezüm Sonrası Cinsel İşlev: Ne Değişir, Ne Değişmez',
        metaDescription:
          'Rezüm buhar tedavisinden sonra sertleşme ve boşalma işlevinin nasıl etkilendiği, iyileşme süreci, kimlere uygun olduğu ve gerçekçi beklentiler.',
        sections: [
          {
            heading: 'Rezüm nasıl çalışıyor',
            paragraphs: [
              'Rezüm, prostatın büyümüş dokusuna su buharı verilmesi esasına dayanır. Buhar doku içinde yayılır ve hedeflenen bölgedeki hücrelerin zamanla vücut tarafından emilmesini sağlar. Prostat haftalar içinde küçülür ve idrar yolu üzerindeki baskı azalır.',
              'Bu nedenle sonuç hemen alınmaz. İşlemden sonraki ilk haftalarda şikâyetler geçici olarak artabilir; asıl düzelme birkaç hafta içinde ortaya çıkar. Hızlı sonuç bekleyen bir hasta için bu durum hayal kırıklığı yaratabilir, o yüzden önceden bilinmelidir.'
            ]
          },
          {
            heading: 'Prostat ameliyatlarında cinsel işlevle ilgili iki ayrı konu vardır',
            paragraphs: [
              'Birincisi sertleşme işlevidir. İkincisi boşalmanın yönüdür — meninin dışarı mı çıktığı, yoksa mesaneye mi geri kaçtığı (retrograd boşalma).',
              'Bu ikisi sık karıştırılır. Retrograd boşalma sertleşmeyi bozmaz, cinsel isteği etkilemez ve zararlı değildir; ancak hasta için rahatsız edici olabilir ve çocuk sahibi olmayı zorlaştırır.',
              'Klasik prostat ameliyatlarından sonra retrograd boşalma sık görülür. Rezüm\'ün tercih edilme nedenlerinden biri, bu konudaki etkisinin daha sınırlı olmasıdır.'
            ]
          },
          {
            heading: 'Rezüm sertleşmeyi etkiler mi',
            paragraphs: [
              'Rezüm, sertleşmeden sorumlu sinir-damar yapılarının geçtiği bölgeye doğrudan bir kesi veya rezeksiyon uygulamaz. Bu nedenle sertleşme işlevi üzerindeki etkisinin sınırlı olduğu kabul edilir ve yöntemin öne çıkan özelliklerinden biri budur.',
              'Bununla birlikte "hiçbir etki olmaz" demek doğru olmaz. İşlemden sonraki ilk dönemde ödem ve rahatsızlık nedeniyle cinsel yaşamda geçici bir duraklama olabilir. Ayrıca prostat büyümesi olan yaş grubunda sertleşme sorunu zaten sık görülür; işlemden bağımsız olarak var olan bir sorun, işleme bağlanabilir.',
              'Bu nedenle işlem öncesi cinsel işlevin kayıt altına alınması, sonrasında neyin değişip neyin değişmediğini anlamak açısından değerlidir.'
            ]
          },
          {
            heading: 'Boşalma nasıl etkilenir',
            paragraphs: [
              'Rezüm sonrasında boşalmanın korunma ihtimalinin, prostat dokusunun çıkarıldığı yöntemlere göre daha yüksek olduğu bildirilmektedir. Yöntemin genç ve cinsel aktif hastalarda tercih edilmesinin başlıca nedeni budur.',
              'Yine de bu kesin bir sonuç değildir. Boşalmada azalma veya değişiklik olabileceği önceden konuşulmalıdır. Kesin vaat veren bir anlatıma temkinli yaklaşın.'
            ]
          },
          {
            heading: 'İlk haftalarda ne bekleniyor',
            paragraphs: [
              'İşlemden sonra kısa süreli sonda kullanılabilir. Sonda çekildikten sonra idrar yaparken yanma, sık idrara çıkma ve idrarda kan görülmesi beklenen bulgulardır.',
              'Cinsel yaşama dönüş zamanı hastaya göre belirlenir. Bu dönemde acele etmemek, ödemin ve tahrişin geçmesini beklemek mantıklıdır.',
              'İşlemin asıl faydası birkaç hafta içinde belirginleştiği için, cinsel işlev hakkındaki değerlendirmeyi de erken yapmamak gerekir.'
            ]
          },
          {
            heading: 'Rezüm kimler için uygun bir seçenek',
            paragraphs: [
              'Prostatı aşırı büyük olmayan, cinsel işlevini ve boşalmasını korumayı öncelikli tutan, ameliyat ve anestezi yükünü azaltmak isteyen hastalarda değerlendirilir.',
              'Buna karşılık çok büyük prostatlarda, mesanede taş gelişmiş olanlarda, idrarını hiç yapamayıp sondaya bağlı kalmış hastalarda ve tekrarlayan ciddi kanaması olanlarda Rezüm yeterli olmayabilir. Bu durumlarda dokunun çıkarıldığı yöntemler öne çıkar.',
              'Ayrıca Rezüm\'ün zaman içinde yeniden girişim gerekme ihtimalinin, dokunun tamamen çıkarıldığı yöntemlere göre daha yüksek olabileceği akılda tutulmalıdır. Bu, kararı verirken tartılması gereken bir denge noktasıdır.'
            ]
          },
          {
            heading: 'Nasıl karar verilmeli',
            paragraphs: [
              'Doğru soru "hangi yöntem daha gelişmiş" değil, "benim için hangi denge daha uygun" sorusudur. Cinsel işlevi korumaya öncelik veriyorsanız bu açıkça söylenmeli; idrar şikâyetlerinin kesin biçimde çözülmesi önceliğinizse bu da söylenmelidir.',
              'Prostat hacmi, idrar akım hızı, kalan idrar miktarı, cinsel işlev durumu ve çocuk isteği birlikte değerlendirilerek karar verilir.',
              'Bu içerik genel bilgilendirme amaçlıdır ve tıbbi tavsiye yerine geçmez. Size uygun yöntem için ürologla görüşün.'
            ]
          }
        ]
      }
    }
  },
  {
    slug: 'penil-protez-cesitleri-sisirilebilir-mi-bukulebilir-mi',
    date: '2026-10-04',
    category: 'andrology',
    languages: ['tr'],
    treatmentSlug: 'penil-protez',
    sources: [
      { label: 'EAU Guidelines on Sexual and Reproductive Health — European Association of Urology', url: 'https://uroweb.org/guidelines/sexual-and-reproductive-health' }
    ],
    i18n: {
      tr: {
        title: 'Penil Protez Çeşitleri: Şişirilebilir mi, Bükülebilir mi?',
        excerpt:
          'İki protez tipi arasındaki seçim, doğal görünüm beklentisi ile cihazı kullanabilme becerisi arasındaki dengeye dayanır. Her hasta için doğru cevap aynı değildir.',
        metaTitle: 'Penil Protez Tipleri: Şişirilebilir ve Bükülebilir Karşılaştırması',
        metaDescription:
          'Şişirilebilir ve bükülebilir penil protez arasındaki farklar, hangi hastada hangisinin öne çıktığı, gerçekçi beklentiler, enfeksiyon riski ve cihaz ömrü.',
        sections: [
          {
            heading: 'Protez ne zaman gündeme gelir',
            paragraphs: [
              'Penil protez, sertleşme sorununda ilk basamak değildir. İlaç tedavileri, gerekiyorsa enjeksiyon tedavisi ve vakum cihazı gibi seçenekler denendikten sonra, bunlardan yeterli fayda görmeyen hastalarda gündeme gelir.',
              'Bu sıralamayı bilmek önemlidir. "Hemen protez yapalım" yaklaşımı doğru değildir; geri dönüşü olmayan bir karardır, çünkü protez takıldıktan sonra doğal sertleşme mekanizması geri gelmez.'
            ]
          },
          {
            heading: 'Bükülebilir (malleabl) protez',
            paragraphs: [
              'İki adet yarı sert çubuktan oluşur. Penis istenildiğinde yukarı doğru bükülür, kullanılmadığında aşağı indirilir. İçinde pompa, hazne veya sıvı yoktur.',
              'Üstünlüğü basitliğidir: öğrenilecek bir mekanizma yoktur, el becerisi gerektirmez, mekanik arıza ihtimali daha düşüktür. Ameliyatı daha kısa sürer.',
              'Dezavantajı, penisin her zaman belirli bir sertlikte kalmasıdır. Giyinirken dikkat gerektirebilir ve bazı hastalar için bu durum rahatsız edicidir. Ayrıca sertlik hissi, şişirilebilir modele göre daha az doğal bulunabilir.'
            ]
          },
          {
            heading: 'Şişirilebilir protez',
            paragraphs: [
              'Penis içine yerleştirilen iki silindir, torbaya yerleştirilen küçük bir pompa ve karın bölgesine konulan bir sıvı haznesinden oluşur. Pompaya basıldığında sıvı silindirlere geçer ve sertleşme oluşur; bırakıldığında sıvı hazneye geri döner.',
              'Üstünlüğü doğala en yakın sonucu vermesidir. Kullanılmadığında penis yumuşak kalır, bu nedenle günlük yaşamda fark edilmez.',
              'Buna karşılık sistem daha karmaşıktır: hastanın pompayı kullanmayı öğrenmesi gerekir ve mekanik arıza ihtimali vardır. Ameliyatı daha uzundur.'
            ]
          },
          {
            heading: 'Hangi hastada hangisi öne çıkıyor',
            paragraphs: [
              'El becerisi ve kavrama gücü yeterli olmayan, ileri yaşta veya romatizmal hastalığı olan hastalarda bükülebilir protez daha uygun olabilir — çünkü kullanılamayan bir pompa, hiçbir işe yaramaz.',
              'Doğal görünümü öncelikli tutan ve cihazı kullanmakta zorlanmayacak hastalarda şişirilebilir protez öne çıkar.',
              'Penisin içinde yoğun sertleşme (fibrozis) gelişmiş hastalarda, örneğin daha önce priapizm geçirmiş olanlarda, teknik nedenlerle bükülebilir protez tercih edilebilir.',
              'Peyronie hastalığında eğriliğin düzeltilmesi de gerekebileceğinden plan farklılaşır.'
            ]
          },
          {
            heading: 'Dürüstçe konuşulması gereken beklentiler',
            paragraphs: [
              'Protez, sertleşmeyi sağlar; cinsel isteği, duyuyu veya boşalmayı yeniden kazandırmaz. Daha önce boşalma sorunu olan bir hastada bu sorun protezle çözülmez.',
              'Penis boyunun ameliyat öncesine göre bir miktar kısa hissedilmesi yaygın bir geri bildirimdir. Bu, hastaların memnuniyetsizlik bildirdiği başlıca konulardan biridir ve ameliyattan önce açıkça konuşulmalıdır.',
              'Protez doğal sertleşmenin yerini alır; geri dönüşü yoktur. Bu nedenle karar acele verilmemelidir.'
            ]
          },
          {
            heading: 'Enfeksiyon: en ciddi risk',
            paragraphs: [
              'Protez cerrahisinde en çok korkulan komplikasyon enfeksiyondur, çünkü enfekte olan bir cihazın çıkarılması gerekebilir.',
              'Şeker hastalığının kontrol altında olması bu riski azaltmak açısından önemlidir. Ameliyat öncesi kan şekeri düzeninin sağlanması, ertelemeye değer bir adımdır.',
              'Enfeksiyon riskini azaltmak için antibiyotik kaplı cihazlar, titiz hazırlık ve cerrahi teknik kullanılır. Yine de risk sıfırlanmaz ve bu bilinerek karar verilmelidir.'
            ]
          },
          {
            heading: 'Cihazın ömrü ve sonrasında ne olur',
            paragraphs: [
              'Protezler kalıcı cihazlardır, ancak sonsuza kadar sorunsuz çalışacakları söylenemez. Yıllar içinde mekanik arıza gelişebilir ve değişim gerekebilir. Bu ihtimal, özellikle genç hastalarda hesaba katılmalıdır.',
              'Ameliyattan sonra cihazın kullanılmaya başlanması için iyileşmenin tamamlanması beklenir. Bu süre hekiminiz tarafından belirlenir; erken kullanım zarar verebilir.',
              'Bu içerik genel bilgilendirme amaçlıdır ve tıbbi tavsiye yerine geçmez. Karar öncesinde ürologla ayrıntılı görüşülmelidir.'
            ]
          }
        ]
      }
    }
  },
  {
    slug: 'varikosel-ameliyati-kisirligi-duzeltir-mi',
    date: '2026-10-04',
    category: 'andrology',
    languages: ['tr'],
    treatmentSlug: 'varikosel',
    sources: [
      { label: 'EAU Guidelines on Sexual and Reproductive Health — European Association of Urology', url: 'https://uroweb.org/guidelines/sexual-and-reproductive-health' }
    ],
    i18n: {
      tr: {
        title: 'Varikosel Ameliyatı Kısırlığı Düzeltir mi?',
        excerpt:
          'Varikosel bulunan her erkeğin ameliyat olması gerekmez ve ameliyat olan her erkek baba olamaz. Doğru soru, ameliyatın hangi çiftte anlamlı bir fark yaratabileceğidir.',
        metaTitle: 'Varikosel Ameliyatı ve Kısırlık: Gerçekçi Beklentiler',
        metaDescription:
          'Varikoselin sperm üzerindeki etkisi, kimlerde ameliyat düşünülür, mikrocerrahi yöntemin yeri, sonuçların ne zaman görüldüğü ve dürüst beklenti yönetimi.',
        sections: [
          {
            heading: 'Varikosel nedir, neden önemli',
            paragraphs: [
              'Varikosel, testisten dönen toplardamarların genişlemesidir — bacaklardaki varise benzer bir durumdur. Erkeklerin önemli bir bölümünde bulunabilir ve çoğu zaman hiçbir şikâyet yaratmaz.',
              'Sperm üretimi ısıya duyarlıdır; testislerin vücut dışında bulunmasının nedeni budur. Varikoselde kan akımının yavaşlaması bölgedeki ısıyı artırarak sperm üretimini olumsuz etkileyebilir.',
              'Ancak kritik nokta şudur: varikosel bulunması tek başına ameliyat gerekçesi değildir. Hiçbir şikâyeti olmayan, spermi normal olan ve çocuk sorunu yaşamayan bir erkekte varikoselin bulunması müdahale gerektirmez.'
            ]
          },
          {
            heading: 'Kimlerde ameliyat gündeme gelir',
            paragraphs: [
              'Muayenede elle hissedilebilen bir varikoselin bulunması, sperm değerlerinde bozulma olması ve çiftin çocuk sahibi olamaması bir araya geldiğinde ameliyat değerlendirilir.',
              'Yalnızca ultrasonda görülen, muayenede hissedilmeyen varikoselin ameliyat edilmesi genellikle önerilmez. Bu ayrımı bilmek, gereksiz ameliyattan korur.',
              'Ağrı da bir gerekçe olabilir: günlük yaşamı etkileyen, ayakta durmakla artan ve başka nedenle açıklanamayan testis ağrısında ameliyat düşünülebilir.',
              'Ergenlik dönemindeki gençlerde, varikosel bulunan taraftaki testisin diğerine göre belirgin küçük kalması ayrı bir değerlendirme nedenidir.'
            ]
          },
          {
            heading: 'Eşin değerlendirilmesi atlanmamalı',
            paragraphs: [
              'Çocuk sahibi olamama bir çift sorunudur. Erkekte varikosel bulunduğunda bazen incelemenin burada durduğu görülür; bu yanlıştır.',
              'Kadının yumurtlama düzeni, tüplerin durumu ve yaşı sonucu doğrudan etkiler. Varikosel ameliyatından beklenen faydanın olup olmayacağı, eşin durumu bilinmeden sağlıklı biçimde değerlendirilemez.',
              'Örneğin kadın yaşı ilerlemişse zaman önemli bir değişkendir ve varikosel ameliyatının sonucunu beklemek yerine doğrudan yardımcı üreme tekniklerine geçmek daha doğru olabilir. Bu karar kadın doğum hekimiyle birlikte verilir.'
            ]
          },
          {
            heading: 'Ameliyat yöntemleri arasındaki fark',
            paragraphs: [
              'Varikosel ameliyatında amaç, genişlemiş toplardamarların bağlanmasıdır. Bunu yaparken atardamarın ve lenf damarlarının korunması önemlidir.',
              'Mikrocerrahi yöntemde mikroskop kullanılır; damarlar büyütülerek ayırt edilir. Bu yaklaşımın tekrarlama ve su toplanması (hidrosel) açısından daha düşük oran bildirildiği için yaygın olarak tercih edildiği belirtilmektedir.',
              'Laparoskopik ve klasik açık yöntemler de kullanılmaktadır. Hangi yöntemin uygulanacağı, varikoselin durumuna ve cerrahın deneyimine göre belirlenir.'
            ]
          },
          {
            heading: 'Sonuç ne zaman görülür',
            paragraphs: [
              'Sperm üretimi bir döngüdür ve yeni spermin oluşması yaklaşık üç ay sürer. Bu nedenle ameliyattan hemen sonra yapılan sperm testi anlamlı değildir.',
              'Genellikle üçüncü ayda ve sonrasında tekrarlanan sperm analizleriyle değişim izlenir. Bu bekleme süresi çiftler için zorlayıcıdır ama kaçınılmazdır.',
              'Sperm değerlerindeki düzelme ile gebelik elde edilmesi aynı şey değildir. Sperm sayısı veya hareketliliği artsa bile gebelik olmayabilir; tersi de mümkündür.'
            ]
          },
          {
            heading: 'Dürüst cevap: ameliyat kesin sonuç vermez',
            paragraphs: [
              'Varikosel ameliyatı, uygun seçilmiş hastalarda sperm parametrelerinde düzelme sağlayabilen bir girişimdir. Ancak her hastada düzelme olmaz ve düzelme olan her çiftte gebelik gerçekleşmez.',
              'Bu nedenle size kesin sonuç vaat eden bir anlatıma temkinli yaklaşın. Ameliyat öncesinde "ne olursa başarılı sayacağız" sorusunun cevabının netleştirilmesi önemlidir.',
              'Varikosel ameliyatı ile yardımcı üreme teknikleri birbirinin alternatifi olmak zorunda değildir; bazı çiftlerde ameliyat, tedavi şansını artırmak amacıyla planlanır.'
            ]
          },
          {
            heading: 'Ameliyat sonrası bilinmesi gerekenler',
            paragraphs: [
              'İşlemden sonra bölgede şişlik ve rahatsızlık birkaç gün sürebilir. Ağır kaldırmaktan ve zorlayıcı aktiviteden bir süre kaçınmak gerekir.',
              'Bilinen riskler arasında testiste su toplanması, varikoselin tekrarlaması ve nadiren testis atardamarının zedelenmesi yer alır. Bu riskler ameliyat öncesinde konuşulmalıdır.',
              'Bu içerik genel bilgilendirme amaçlıdır ve tıbbi tavsiye yerine geçmez. Değerlendirme için ürologla görüşün.'
            ]
          }
        ]
      }
    }
  },
  {
    slug: 'idrar-kacirma-hangi-tip-hangi-tedavi',
    date: '2026-10-04',
    category: 'femaleUrology',
    languages: ['tr'],
    treatmentSlug: 'stres-inkontinans',
    sources: [
      { label: 'EAU Guidelines on Non-neurogenic Female LUTS — European Association of Urology', url: 'https://uroweb.org/guidelines/non-neurogenic-female-luts' }
    ],
    i18n: {
      tr: {
        title: 'İdrar Kaçırma: Hangi Tip, Hangi Tedavi?',
        excerpt:
          'İdrar kaçırmanın tek bir tedavisi yoktur, çünkü tek bir türü yoktur. Yanlış tipe uygulanan doğru tedavi işe yaramaz — bu yüzden ilk adım tipin belirlenmesidir.',
        metaTitle: 'İdrar Kaçırma Tipleri ve Her Birine Uygun Tedavi',
        metaDescription:
          'Stres, sıkışma, karışık ve taşma tipi idrar kaçırma arasındaki farklar, her tipte uygulanan tedaviler ve ayrımın neden bu kadar önemli olduğu.',
        sections: [
          {
            heading: 'Önce şunu söyleyelim: bu yaşlılığın doğal sonucu değildir',
            paragraphs: [
              'İdrar kaçırma çok yaygındır, ancak yaygın olması normal olduğu anlamına gelmez. Pek çok kişi yıllarca bu durumu kimseye söylemeden, ped kullanarak ve sosyal yaşamını kısıtlayarak yaşar.',
              'Tedavi edilebilir bir durumdur ve çoğu hastada ameliyat gerekmeden belirgin iyileşme sağlanabilir. Bu nedenle gecikmeden değerlendirme yaptırmak anlamlıdır.'
            ]
          },
          {
            heading: 'Stres tipi: öksürünce, gülünce, ağır kaldırınca',
            paragraphs: [
              'Burada kaçırma karın içi basıncın arttığı anlarda olur: öksürme, hapşırma, gülme, ağır kaldırma, merdiven çıkma, spor. Öncesinde idrar hissi yoktur; idrar aniden gelir.',
              'Nedeni idrar yolunu kapatan destek mekanizmasının zayıflamasıdır. Doğumlar, menopoz, kronik kabızlık, sürekli öksürük ve kilo fazlası bu zayıflamada rol oynar.',
              'Tedavide ilk basamak pelvik taban kas egzersizleridir; doğru yapıldığında etkili bir yöntemdir. Kilo verme ve kabızlığın giderilmesi fark yaratır. Bunlar yetersiz kaldığında idrar yoluna destek sağlayan cerrahi seçenekler değerlendirilir.',
              'Burada önemli bir not: mesaneyi gevşeten ilaçlar bu tipte işe yaramaz. Yanlış tipe verilen ilaç, hastanın "benim sorunum çözülmez" sonucuna varmasına yol açar.'
            ]
          },
          {
            heading: 'Sıkışma tipi: tuvalete yetişememe',
            paragraphs: [
              'Burada önce ani ve ertelenemeyen bir sıkışma hissi gelir; kişi tuvalete yetişemeden idrar kaçırır. Yanında sık idrara çıkma ve gece uyanma da bulunur.',
              'Nedeni mesane kasının dolum sırasında istemsiz kasılmasıdır. Buna aşırı aktif mesane denir.',
              'Tedavide ilk adım yine ilaç değildir: mesane eğitimi, sıvı ve kafein düzeninin ayarlanması, kabızlığın giderilmesi. Bunlar yetersiz kalırsa mesane kasını gevşeten ilaçlar başlanır. İlaç da yeterli olmazsa mesane içine botulinum toksini uygulaması ve sakral nöromodülasyon gündeme gelir.',
              'Bu tipte sarkma ameliyatı yapmak fayda sağlamaz; tip ayrımının neden önemli olduğunun en net örneği budur.'
            ]
          },
          {
            heading: 'Karışık tip: ikisi bir arada',
            paragraphs: [
              'Hastaların önemli bir bölümünde her iki tip birlikte bulunur. Bu durumda hangisinin günlük yaşamı daha çok kısıtladığı belirlenir ve tedavi ona göre planlanır.',
              'Genellikle önce sıkışma bileşeni ele alınır, çünkü bu bileşen ilaç ve davranış tedavisine yanıt verebilir ve cerrahi gereksinimini değiştirebilir.',
              'Karışık tipte, yalnızca bir bileşene yönelik tedavi sonrasında şikâyetin tamamen geçmeyebileceği önceden konuşulmalıdır.'
            ]
          },
          {
            heading: 'Taşma tipi: mesane boşalamıyor',
            paragraphs: [
              'Burada mesane dolar, boşalamaz ve dolup taşarak sızdırır. Hasta sık sık az miktarda idrar yaptığını, tam boşalamadığını, idrarın damla damla geldiğini söyler.',
              'Erkeklerde en sık nedeni prostat büyümesidir. Kadınlarda ve erkeklerde şeker hastalığına bağlı sinir hasarı, bazı ilaçlar ve ileri derecede sarkma neden olabilir.',
              'Bu tipte mesaneyi gevşeten ilaç vermek durumu kötüleştirir — işte bu yüzden işedikten sonra mesanede kalan idrar miktarının ölçülmesi, tedaviye başlamadan önce yapılması gereken bir adımdır.'
            ]
          },
          {
            heading: 'Değerlendirmede neler yapılır',
            paragraphs: [
              'İdrar tahlili ve kültürü ile enfeksiyon dışlanır; tedavi edilmemiş bir enfeksiyon bu şikâyetlerin tamamını taklit edebilir.',
              'Birkaç günlük işeme günlüğü, ne sıklıkta ve ne miktarda idrar yapıldığını gösterir. Basit görünen bu kayıt, pahalı tetkiklerden daha çok bilgi verir.',
              'İşedikten sonra mesanede kalan idrar ölçülür. Gerektiğinde ürodinami ve görüntüleme yapılır.',
              'İdrarda kan görülmesi ayrı bir durumdur ve mutlaka araştırılmalıdır; basit bir kaçırma şikâyeti olarak geçiştirilmemelidir.'
            ]
          },
          {
            heading: 'Her tipte işe yarayan ortak adımlar',
            paragraphs: [
              'Kilo fazlasının azaltılması karın içi basıncı düşürür ve ölçülebilir fayda sağlar.',
              'Kabızlığın giderilmesi, pelvik taban üzerindeki sürekli baskıyı kaldırır.',
              'Sigaranın bırakılması, kronik öksürüğü azaltarak dolaylı fayda sağlar.',
              'Sıvıyı aşırı kısmak ise yanlıştır: idrar yoğunlaşır, mesaneyi tahriş eder ve şikâyet artar. Doğru olan sıvının gün içine yayılması ve akşam saatlerinde azaltılmasıdır.',
              'Bu içerik genel bilgilendirme amaçlıdır ve tıbbi tavsiye yerine geçmez. Tipin belirlenmesi için ürologla görüşün.'
            ]
          }
        ]
      }
    }
  },
  {
    slug: 'uretra-darliginda-neden-urethrotomi-yetmez',
    date: '2026-10-04',
    category: 'reconstructive',
    languages: ['tr'],
    treatmentSlug: 'uretroplasti',
    sources: [
      { label: 'EAU Guidelines on Urethral Strictures — European Association of Urology', url: 'https://uroweb.org/guidelines/urethral-strictures' }
    ],
    i18n: {
      tr: {
        title: 'Üretra Darlığında Neden Üretrotomi Yetmez?',
        excerpt:
          'Darlığın içeriden kesilmesi kısa sürede rahatlama sağlar, ancak tekrarlama eğilimi yüksektir. Tekrarlayan kesi işlemleri sorunu çözmek yerine zorlaştırabilir.',
        metaTitle: 'Üretra Darlığı: Üretrotomi mi Üretroplasti mi',
        metaDescription:
          'Üretra darlığında içeriden kesme işleminin neden sık tekrarladığı, tekrarlayan girişimlerin zararı, üretroplastinin yeri ve doğru zamanlama.',
        sections: [
          {
            heading: 'Üretra darlığı nedir',
            paragraphs: [
              'Üretra, mesaneden idrarın dışarı taşındığı kanaldır. Bu kanalın bir bölümünde yara dokusu gelişip daralmasına üretra darlığı denir.',
              'Belirtiler yavaş başlar ve çoğu hasta uzun süre fark etmez: idrar akımının zayıflaması, dallanması, idrarı başlatmakta zorlanma, tam boşaltamama hissi, sık idrara çıkma ve tekrarlayan idrar yolu enfeksiyonları.',
              'Nedeni çoğu zaman geçmişteki bir sonda uygulaması, idrar yolundan yapılmış bir işlem, bir travma veya iltihaptır. Bazen belirgin bir neden bulunamaz.'
            ]
          },
          {
            heading: 'Üretrotomi ne yapar',
            paragraphs: [
              'Üretrotomi, idrar yolundan girilerek dar bölgenin içeriden bıçakla veya lazerle kesilmesidir. İşlem kısa sürer, kesi yoktur ve hasta genellikle hızla rahatlar.',
              'Bu hızlı rahatlama yöntemi cazip gösterir. Ancak burada önemli bir ayrım vardır: üretrotomi darlığı ortadan kaldırmaz, yalnızca açar. Dar bölgedeki yara dokusu yerinde kalır.'
            ]
          },
          {
            heading: 'Neden sık tekrarlıyor',
            paragraphs: [
              'Darlığın nedeni yara dokusudur ve yara dokusu kesildiğinde vücut orayı yine yara dokusuyla onarır. Yani iyileşme süreci, darlığı yeniden oluşturan süreçtir.',
              'Bu nedenle üretrotomiden sonra darlığın tekrarlaması beklenmedik bir durum değildir. Özellikle uzun darlıklarda, yara dokusunun çevre dokulara yayıldığı durumlarda ve daha önce girişim yapılmış hastalarda tekrarlama eğilimi daha belirgindir.',
              'İlk üretrotomi, kısa ve uygun yerleşimli bir darlıkta makul bir seçenektir. Sorun, aynı işlemin tekrar tekrar yapılmasıdır.'
            ]
          },
          {
            heading: 'Tekrarlayan kesi işlemlerinin asıl zararı',
            paragraphs: [
              'Her kesi işlemi yeni bir yara dokusu oluşturur. Darlık zamanla kısalmak yerine uzar ve çevre dokular sertleşir.',
              'Bunun pratik sonucu şudur: ileride kalıcı onarım gerektiğinde, cerrahın çalışacağı doku daha kötü durumda olur. Yani tekrarlanan üretrotomiler yalnızca işe yaramamakla kalmaz, asıl tedaviyi de zorlaştırabilir.',
              'Bu nedenle "bir kez daha açalım, belki bu sefer olur" yaklaşımı belirli bir noktadan sonra hastanın lehine değildir.'
            ]
          },
          {
            heading: 'Kendi kendine sonda uygulaması',
            paragraphs: [
              'Üretrotomi sonrası darlığın tekrar kapanmasını geciktirmek amacıyla hastaya düzenli aralıklarla kendi kendine sonda takması önerilebilir.',
              'Bu uygulama darlığın açık kalmasına yardımcı olabilir, ancak kalıcı bir çözüm değildir ve hasta için yük oluşturur. Uzun yıllar sürdürülmesi beklenen bir yöntem olarak sunulmamalıdır.'
            ]
          },
          {
            heading: 'Üretroplasti nedir, neden farklı',
            paragraphs: [
              'Üretroplasti, darlığın açılması değil onarılmasıdır. Dar segment ya çıkarılıp sağlam uçlar birleştirilir, ya da kanal bir doku yaması kullanılarak genişletilir.',
              'Yama olarak en sık ağız içinden alınan doku kullanılır. Bu doku nemli ortama alışkın olduğu ve alındığı yer kısa sürede iyileştiği için tercih edilir.',
              'Üretroplasti daha büyük bir ameliyattır ve iyileşmesi daha uzundur; ameliyat sonrası bir süre sonda kalır. Buna karşılık kalıcı sonuç verme açısından üretrotomiye göre öne çıkan yöntemdir.'
            ]
          },
          {
            heading: 'Hangi hastada hangisi',
            paragraphs: [
              'Kısa, ilk kez görülen ve uygun yerleşimli bir darlıkta üretrotomi denenebilir.',
              'Uzun darlıklarda, birden fazla bölgede darlık olanlarda ve daha önce girişim yapılıp tekrarlamış hastalarda üretroplasti öne çıkar.',
              'Burada en önemli nokta zamanlamadır: tekrarlayan girişimlerle yıllar geçirmek yerine, uygun hastada kalıcı onarımın erken gündeme gelmesi doku açısından avantajlıdır.',
              'Hekiminize şu soruyu sormakta tereddüt etmeyin: "Benim darlığım kaç santim, nerede ve bu işlem tekrarlarsa sıradaki adım ne olacak?" Bu sorunun cevabını bilmek, süreci yönetmenizi kolaylaştırır.',
              'Bu içerik genel bilgilendirme amaçlıdır ve tıbbi tavsiye yerine geçmez. Darlığınızın değerlendirilmesi için ürologla görüşün.'
            ]
          }
        ]
      }
    }
  },
  {
    slug: 'cost-of-robotic-prostatectomy-in-turkey-what-determines-the-price',
    date: '2026-10-04',
    category: 'healthTourism',
    languages: ['en'],
    treatmentSlug: 'robotik-prostatektomi',
    sources: [
      { label: 'EAU Guidelines on Prostate Cancer — European Association of Urology', url: 'https://uroweb.org/guidelines/prostate-cancer' }
    ],
    i18n: {
      en: {
        title: 'The Cost of Robotic Prostatectomy in Turkey: What Actually Determines the Price',
        excerpt:
          'A headline figure tells you very little. What matters is what the figure includes, what it excludes, and which of the excluded items are likely to apply to you.',
        metaTitle: 'Robotic Prostatectomy Cost in Turkey: What Is Included',
        metaDescription:
          'How robotic prostatectomy pricing works for international patients in Turkey, what a quote should include, the costs that are commonly left out, and the questions to ask before you commit.',
        sections: [
          {
            heading: 'Why a single number is not an answer',
            paragraphs: [
              'If you search for the cost of robotic prostatectomy abroad, you will find figures that differ by a wide margin. This is not because some hospitals are generous and others are not. It is because the figures are not describing the same thing.',
              'One quote may cover the operation and two nights in hospital. Another may cover the operation, the pathology report, the follow-up appointments and the hotel. A third may cover everything except the one thing you are most likely to need. Comparing the numbers without comparing the contents is meaningless.',
              'The useful question is therefore not "how much is it" but "what is in it, and what is not".'
            ]
          },
          {
            heading: 'What a complete quote should cover',
            paragraphs: [
              'Pre-operative work-up: blood tests, anaesthetic assessment, and any imaging that has to be repeated locally because the outside study is not in a readable format.',
              'The operation itself: surgeon, anaesthetist, theatre, the robotic instruments and the consumables. Robotic instruments have a limited number of uses and are a real cost item, so they should be named explicitly rather than hidden inside a general figure.',
              'Hospital stay: the number of nights should be stated, along with what happens if you need an extra night.',
              'Pathology: the removed prostate is examined, and that report determines whether further treatment is needed. It is a core part of the operation, not an extra.',
              'Post-operative care in Turkey: catheter removal, wound checks and the consultation before you fly home.',
              'Follow-up after you return: how PSA results will be reviewed, by whom, and for how long.'
            ]
          },
          {
            heading: 'The items that are usually excluded',
            paragraphs: [
              'Treatment of complications. This is the single most important exclusion. Ask directly: if there is a complication requiring a longer stay or a second procedure, who pays? A clinic that answers this clearly is telling you something about how it operates.',
              'Additional treatment revealed by the pathology report. If the final pathology shows that the cancer extends beyond the prostate, radiotherapy or hormone treatment may be recommended. That is a separate course of treatment, usually arranged at home.',
              'Flights, and usually the visa.',
              'Extended accommodation if your recovery takes longer than planned.',
              'Treatment of conditions unrelated to the surgery that are discovered during the work-up.'
            ]
          },
          {
            heading: 'Why treatment in Turkey costs less, and why that is not suspicious',
            paragraphs: [
              'The difference is largely structural. Staff salaries, facility costs and general price levels are lower in Turkey than in the United Kingdom, Germany or the Gulf. A hospital with the same equipment and comparable staffing has a lower cost base, and the price reflects that.',
              'The equipment itself is not cheaper. A surgical robot costs the same in Istanbul as it does in London, and so do the single-use instruments. This is a useful sanity check: a quote that is dramatically lower than every other quote is not benefiting from local cost structure. Something else is being left out.',
              'Be equally careful with the opposite error. A higher price does not demonstrate higher quality. It may simply reflect a larger marketing budget or an agency commission built into the figure.'
            ]
          },
          {
            heading: 'Agency commission: ask who you are actually talking to',
            paragraphs: [
              'Many enquiries from abroad are handled by intermediary agencies rather than by the hospital. An agency may add its commission to the hospital\'s price, and that commission is not always visible to you.',
              'This is not automatically wrong — some agencies provide genuine coordination. But you are entitled to know whether the person quoting you works for the hospital or for a broker, and whether the surgeon named in the correspondence is the surgeon who will operate.',
              'That second point deserves emphasis. Ask for the operating surgeon by name, and ask whether anyone else will perform parts of the procedure.'
            ]
          },
          {
            heading: 'Questions worth asking before you commit',
            paragraphs: [
              'Who will perform the operation, and will any part of it be delegated?',
              'How many of these procedures does that surgeon perform, and over what period?',
              'What exactly does the quoted figure include, in writing?',
              'What happens, financially and practically, if there is a complication?',
              'How long should I plan to stay in Turkey, and what is the earliest realistic flight date?',
              'Who reviews my PSA results after I return home, and for how long?',
              'If a clinic is reluctant to answer any of these in writing, treat that reluctance as information.'
            ]
          },
          {
            heading: 'A note on our own pricing',
            paragraphs: [
              'We do not publish a single headline figure for robotic prostatectomy, because the honest figure depends on your work-up, your hospital stay and whether nerve-sparing is planned. We would rather give you an itemised quote after reviewing your reports than an attractive number that changes later.',
              'Send your PSA history, biopsy report and MRI report, and you will receive a written breakdown showing what is included and what is not.',
              'This article is general information and does not replace medical advice. Treatment decisions are made after individual assessment.'
            ]
          }
        ]
      }
    }
  },
  {
    slug: 'holep-in-turkey-what-international-patients-should-know',
    date: '2026-10-04',
    category: 'bph',
    languages: ['en'],
    treatmentSlug: 'holep',
    sources: [
      { label: 'EAU Guidelines on Management of Non-Neurogenic Male LUTS — European Association of Urology', url: 'https://uroweb.org/guidelines/management-of-non-neurogenic-male-luts' }
    ],
    i18n: {
      en: {
        title: 'HoLEP in Turkey: What International Patients Should Know',
        excerpt:
          'HoLEP removes the obstructing prostate tissue completely rather than trimming it. For a patient travelling from abroad, that difference changes both the expected result and the recovery timetable.',
        metaTitle: 'HoLEP in Turkey: Procedure, Recovery and Travel Planning',
        metaDescription:
          'What HoLEP involves, how it differs from TURP, why prostate size matters, the temporary incontinence nobody warns you about, and how long to stay in Turkey.',
        sections: [
          {
            heading: 'What HoLEP actually does',
            paragraphs: [
              'The prostate can be pictured as an orange: an outer peel and an inner pulp. In benign enlargement it is the pulp that grows and compresses the urinary channel.',
              'A traditional TURP shaves tissue away from the inside of that pulp. HoLEP instead separates the whole pulp from the peel using a holmium laser, pushes it into the bladder, and then breaks it up there for removal. The outer capsule stays in place.',
              'Because the obstructing tissue is removed completely rather than partially, the improvement in urinary flow tends to be more durable and the likelihood of needing a repeat procedure years later is lower. For a patient who has travelled a long distance, that durability is a significant part of the argument.'
            ]
          },
          {
            heading: 'Prostate size is the main reason patients are referred for HoLEP',
            paragraphs: [
              'With TURP, the larger the prostate, the longer the operation and the more fluid is absorbed, which eventually sets a practical ceiling. Beyond that ceiling, open surgery used to be the only option.',
              'HoLEP does not have the same ceiling. A very large prostate can be treated with the same technique as a moderate one. This is why men with large glands, who in the past would have been offered an open operation, are now frequently treated endoscopically.',
              'If your prostate is large, the real decision is between enucleation and open surgery — not between brands of laser.'
            ]
          },
          {
            heading: 'Bleeding, and why it matters for travel',
            paragraphs: [
              'Bleeding tends to be well controlled during enucleation because vessels are sealed as the tissue plane is developed. This is relevant for men taking anticoagulants, and it is relevant for anyone planning a flight home.',
              'Blood thinners still need to be managed individually before surgery. Do not stop any medication on your own; send your full medication list when you make your enquiry so that the plan can be made before you travel.'
            ]
          },
          {
            heading: 'The part that is often left out: temporary incontinence',
            paragraphs: [
              'After the obstructing tissue is removed, continence depends entirely on the external sphincter, which previously had help from the prostatic mechanism. That muscle needs time to adapt, and in the meantime some leakage is common.',
              'In most men this settles over weeks. Pelvic floor exercises help, and they are easier to learn before the operation than after it.',
              'This should be discussed openly before you book a flight. It is manageable and usually temporary, but discovering it on the plane home is a poor way to find out.'
            ]
          },
          {
            heading: 'Retrograde ejaculation',
            paragraphs: [
              'After the prostate tissue is removed, semen commonly passes backwards into the bladder instead of outwards. It is harmless and does not affect erections or sexual desire, but it does affect fertility and some men find it unwelcome.',
              'If you still wish to father children, say so clearly at the consultation stage. It changes which options should be considered.'
            ]
          },
          {
            heading: 'How long to stay in Turkey',
            paragraphs: [
              'A realistic plan allows for arrival and pre-operative tests, the procedure, a short hospital stay, a period with the catheter, catheter removal, and a review appointment before flying.',
              'The catheter is usually removed before you leave, so that any problem passing urine is dealt with here rather than at home. Do not plan a flight for the day after catheter removal; leave room for a check.',
              'Build in a margin. A plan with no spare days turns a minor delay into a crisis, and pushes patients towards flying before they should.'
            ]
          },
          {
            heading: 'What to send before you travel',
            paragraphs: [
              'A recent PSA result, an ultrasound or other imaging giving prostate volume, a uroflowmetry result and post-void residual measurement if available, your full medication list including anticoagulants, and a summary of other medical conditions.',
              'With these, you can be told before you buy a ticket whether HoLEP is the appropriate procedure for you — or whether something else fits your situation better. An honest answer at that stage is worth more than a quick booking.',
              'This article is general information and does not replace medical advice.'
            ]
          }
        ]
      }
    }
  },
  {
    slug: 'penile-implant-surgery-abroad-choosing-a-surgeon-safely',
    date: '2026-10-04',
    category: 'andrology',
    languages: ['en'],
    treatmentSlug: 'penil-protez',
    sources: [
      { label: 'EAU Guidelines on Sexual and Reproductive Health — European Association of Urology', url: 'https://uroweb.org/guidelines/sexual-and-reproductive-health' }
    ],
    i18n: {
      en: {
        title: 'Penile Implant Surgery Abroad: Choosing a Surgeon Safely',
        excerpt:
          'An implant is irreversible and carries a real infection risk. Those two facts should shape how you choose where to have it done, far more than price or marketing.',
        metaTitle: 'Penile Implant Abroad: How to Choose a Surgeon Safely',
        metaDescription:
          'What to verify before having penile implant surgery abroad: infection risk, device types, the irreversibility of the decision, realistic expectations and follow-up.',
        sections: [
          {
            heading: 'Two facts that should govern the decision',
            paragraphs: [
              'First, a penile implant is irreversible. Placing the device requires the erectile tissue to be dilated, and natural erections do not return afterwards. If the device is ever removed without replacement, the situation is worse than before surgery.',
              'Second, infection is the complication that matters most. An infected implant often has to be removed, and salvage is a demanding procedure. Everything in the planning of this operation — patient selection, diabetic control, preparation, technique — is organised around reducing that risk.',
              'These two facts are why implant surgery is a poor candidate for a decision made quickly on price.'
            ]
          },
          {
            heading: 'Make sure the earlier steps have genuinely been tried',
            paragraphs: [
              'An implant is not the first treatment for erectile dysfunction. Oral medication, injection therapy and vacuum devices come first, and many men do well with them.',
              'If a clinic proposes an implant without establishing what has already been tried and why it failed, that is a warning sign. A surgeon who is willing to tell you that you are not yet a candidate is demonstrating judgement, not reluctance.',
              'It is also worth establishing whether the erectile dysfunction has an untreated underlying cause. Cardiovascular disease and diabetes frequently present this way, and an implant does not treat either.'
            ]
          },
          {
            heading: 'Diabetes and infection risk',
            paragraphs: [
              'Poorly controlled diabetes increases the risk of implant infection. If your blood glucose control is poor, the right advice is to improve it before surgery, even if that means postponing.',
              'A clinic that is willing to postpone your operation for this reason is protecting you. One that is willing to proceed regardless is protecting its schedule.',
              'Ask what glycaemic threshold the surgeon uses, and whether your current results meet it.'
            ]
          },
          {
            heading: 'Device types, briefly',
            paragraphs: [
              'A malleable implant consists of two semi-rigid rods. It is simple, requires no dexterity to use, and has fewer mechanical parts to fail. The penis remains in a fixed state, which some men find inconvenient.',
              'An inflatable implant uses cylinders, a pump in the scrotum and a fluid reservoir. It gives the most natural result because the penis is flaccid when not in use, but it is a mechanical system that the patient must be able to operate, and mechanical failure is possible.',
              'Neither is universally better. Manual dexterity, hand strength, arthritis, previous scarring inside the penis and personal priorities all affect the choice. A surgeon who offers only one type, or who recommends the same type to everyone, is not individualising the decision.'
            ]
          },
          {
            heading: 'Expectations that must be stated before surgery',
            paragraphs: [
              'An implant produces rigidity. It does not restore sensation, desire or ejaculation. If any of those are already impaired, they will remain so.',
              'Many men perceive the penis as shorter after implant surgery than before. This is one of the most common sources of dissatisfaction, and it should be discussed explicitly beforehand rather than discovered afterwards.',
              'The device is durable but not permanent in the sense of never failing. Mechanical revision may be needed years later. For a younger patient, that is a real consideration.'
            ]
          },
          {
            heading: 'What to verify about the surgeon and the hospital',
            paragraphs: [
              'That the named surgeon will perform the operation personally.',
              'That the procedure takes place in a hospital with a proper operating theatre and inpatient facilities, not in an office setting.',
              'Which device brand and model is being used, and that this is stated in writing before surgery.',
              'What happens if infection occurs after you return home: who you contact, and what the clinic will do.',
              'Whether the device carries a manufacturer warranty, and how a claim would be handled from your country.'
            ]
          },
          {
            heading: 'Follow-up is not optional',
            paragraphs: [
              'The implant is not used immediately. Healing must be complete first, and the surgeon decides when activation is appropriate; early use can cause damage.',
              'You will also need instruction in operating the device, which is normally given in person. Plan your stay so that this happens before you fly, rather than being attempted by video call afterwards.',
              'Agree in advance how follow-up will work once you are home, including who answers questions and how quickly.',
              'This article is general information and does not replace medical advice. Implant surgery should follow a full assessment and an unhurried discussion.'
            ]
          }
        ]
      }
    }
  },
  {
    slug: 'how-long-to-stay-in-turkey-after-prostate-surgery',
    date: '2026-10-04',
    category: 'healthTourism',
    languages: ['en'],
    treatmentSlug: 'robotik-prostatektomi',
    sources: [
      { label: 'EAU Guidelines on Prostate Cancer — European Association of Urology', url: 'https://uroweb.org/guidelines/prostate-cancer' }
    ],
    i18n: {
      en: {
        title: 'How Long to Stay in Turkey After Prostate Surgery',
        excerpt:
          'The honest answer is longer than most patients expect, and the reason is the catheter. Booking a return flight too early is the most common planning mistake.',
        metaTitle: 'How Long to Stay in Turkey After Prostate Surgery',
        metaDescription:
          'Planning your stay after prostate surgery in Turkey: the catheter period, when flying is safe, clot risk, what to do if plans change, and how follow-up works at home.',
        sections: [
          {
            heading: 'Why the catheter sets the timetable',
            paragraphs: [
              'After the prostate is removed, the bladder is reconnected to the urethra. That join needs time to heal, and a catheter keeps the bladder drained while it does.',
              'The catheter is therefore not an inconvenience that can be shortened to suit a flight. It stays in for a defined period, and it is removed here so that any difficulty passing urine afterwards is managed by the team that operated on you.',
              'This single factor determines most of the length of your stay. Everything else fits around it.'
            ]
          },
          {
            heading: 'Do not fly the day after the catheter comes out',
            paragraphs: [
              'A small number of patients cannot pass urine once the catheter is removed and need it replaced temporarily. This is manageable when you are a short drive from the hospital and a serious problem when you are at an airport.',
              'Allow at least a short review period after removal. The purpose of those days is not comfort; it is to keep a solvable problem solvable.'
            ]
          },
          {
            heading: 'Clot risk and air travel',
            paragraphs: [
              'Pelvic surgery and long periods of immobility both increase the risk of blood clots in the legs, which can travel to the lungs. A long-haul flight combines the two.',
              'For this reason, flying clearance is given individually rather than by a fixed rule. It depends on the operation, your mobility, your weight, your other medical conditions and any history of clots.',
              'When you do fly, follow the advice you are given about walking in the aisle, leg exercises, hydration and compression stockings. If any medication to reduce clot risk is prescribed, take it as directed — including after you get home.',
              'Seek medical help immediately for calf pain or swelling, chest pain, or breathlessness, whether you are still in Turkey or already home.'
            ]
          },
          {
            heading: 'A realistic week-by-week picture',
            paragraphs: [
              'Arrival and assessment: blood tests, anaesthetic review, and any imaging that needs repeating. Allow a day or two before surgery rather than landing the night before.',
              'Surgery and hospital stay: robotic surgery usually involves a short admission.',
              'The catheter period: mostly spent at the hotel. You will be mobile and able to walk, but not to do very much more.',
              'Catheter removal and review: including a check that you are passing urine adequately.',
              'Then the flight home — not before.'
            ]
          },
          {
            heading: 'Plan for the possibility of staying longer',
            paragraphs: [
              'Book a flexible or changeable return ticket. The cost of flexibility is small compared with the cost of a last-minute rebooking, and far smaller than the cost of flying too early.',
              'Check whether your accommodation can be extended. Ask the clinic what happens if it cannot.',
              'Make sure your visa or permitted stay covers more days than you plan to use.',
              'Bring a companion if you can. Practical help during the catheter period makes a real difference, and someone else can hear the discharge instructions.'
            ]
          },
          {
            heading: 'The pathology report arrives after you leave',
            paragraphs: [
              'The removed prostate is examined under the microscope, and that report is what determines whether any further treatment is advised. It is usually not ready before you fly.',
              'Agree before you leave how the report will reach you, who will explain it, and in what language. A pathology report delivered as an untranslated document with no explanation is a poor end to a well-run operation.'
            ]
          },
          {
            heading: 'Follow-up after you return',
            paragraphs: [
              'PSA is measured at intervals after surgery, and the result is the main measure of whether the cancer has been controlled. You will usually have these tests done locally.',
              'Establish before you leave who reviews those results, how you send them, and for how long this arrangement lasts. A named contact matters more than a general promise of support.',
              'Also agree what to do if something goes wrong at home, and which symptoms justify going straight to a local emergency department rather than waiting for a reply.',
              'This article is general information and does not replace medical advice. Your own timetable is set by your surgeon.'
            ]
          }
        ]
      }
    }
  },
  {
    slug: 'redo-urethroplasty-after-a-failed-repair',
    date: '2026-10-04',
    category: 'reconstructive',
    languages: ['en'],
    treatmentSlug: 'uretroplasti',
    sources: [
      { label: 'EAU Guidelines on Urethral Strictures — European Association of Urology', url: 'https://uroweb.org/guidelines/urethral-strictures' }
    ],
    i18n: {
      en: {
        title: 'Redo Urethroplasty After a Failed Repair: Is It Possible?',
        excerpt:
          'Yes, in most cases — but a second repair is a different operation from the first, and it should be planned differently. What was done before determines what can be done now.',
        metaTitle: 'Redo Urethroplasty After Failed Repair: What Is Possible',
        metaDescription:
          'Why urethroplasty fails, how a redo repair is planned, graft options when buccal mucosa has already been used, staged repair, and what to send for assessment.',
        sections: [
          {
            heading: 'First, what "failure" usually means',
            paragraphs: [
              'A urethroplasty is considered to have failed when the stricture recurs to the point of causing symptoms again: a weakening stream, straining, incomplete emptying, recurrent infections.',
              'Recurrence often appears within the first couple of years, though it can present later. The important point is that recurrence is not necessarily a sign that the original operation was done badly. Some strictures are simply difficult, and tissue healing is not fully predictable.',
              'What matters now is not blame but information: exactly what was done, where, and with what tissue.'
            ]
          },
          {
            heading: 'Why a redo is a different operation',
            paragraphs: [
              'Previous surgery leaves scar tissue, altered blood supply and distorted anatomy. The planes a surgeon would normally work in may no longer be clean.',
              'Equally important, graft material may already have been used. Buccal mucosa — tissue taken from the inside of the cheek — is the usual choice for urethral reconstruction. If one or both cheeks have already been harvested, the available options change.',
              'This is why a redo should be planned on the basis of the previous operative notes rather than assumptions. "Repeat what was done before" is not a plan.'
            ]
          },
          {
            heading: 'The information that genuinely changes the plan',
            paragraphs: [
              'The operative note from the previous repair: the technique used, the length of the segment treated, and the graft source.',
              'Whether buccal mucosa was taken, and from one side or both.',
              'How many endoscopic procedures (urethrotomy or dilatation) have been performed, and when. Repeated endoscopic treatment extends scarring and makes reconstruction harder — this is the single most common reason a straightforward case becomes a complex one.',
              'Current imaging of the urethra, showing the location and length of the recurrent stricture.',
              'Flow rate and post-void residual measurements.',
              'Whether you currently self-catheterise, and how often.'
            ]
          },
          {
            heading: 'Options when buccal mucosa is no longer available',
            paragraphs: [
              'If cheek tissue has already been used on both sides, other graft sources can be considered, including tissue from the inner lip or the tongue, and in some situations skin flaps raised from nearby tissue.',
              'Each option has trade-offs in terms of donor-site discomfort, graft take and suitability for the particular segment involved. The choice depends on where the stricture is and how long it is.',
              'A surgeon who can explain which option applies to you and why has looked at your case. One who names a single technique before seeing your notes has not.'
            ]
          },
          {
            heading: 'Staged repair: when one operation is not enough',
            paragraphs: [
              'In difficult redo cases, reconstruction may be planned in two stages separated by several months. In the first stage the urethra is opened and the graft is laid down to mature; in the second it is closed into a tube.',
              'A staged plan is not a sign that something has gone wrong. In heavily scarred tissue it is often the approach most likely to give a durable result.',
              'For an international patient this has an obvious practical consequence: two journeys, months apart. It must be discussed before any booking is made, because a staged repair cannot be compressed into one trip.'
            ]
          },
          {
            heading: 'Realistic expectations',
            paragraphs: [
              'Redo urethroplasty generally has a lower success rate than a first repair, and the more previous procedures there have been, the more that holds. This should be stated plainly before surgery.',
              'Recovery is longer than after a first repair, and a catheter stays in for a period afterwards.',
              'Possible effects on ejaculation and, depending on the location of the repair, on erections should be discussed specifically rather than mentioned in passing.'
            ]
          },
          {
            heading: 'One thing to stop doing while you decide',
            paragraphs: [
              'If you are being offered repeated urethrotomy or dilatation for a stricture that keeps coming back, it is worth asking what the plan is beyond the next procedure.',
              'Each endoscopic treatment creates fresh scar tissue. A cycle of repeated dilatation does not stand still — it makes the eventual reconstruction harder. Raising this question with your current team is reasonable and is not a criticism of them.',
              'Send your operative notes, imaging and flow studies for review, and you can be told whether a redo is feasible, whether it would be single-stage or staged, and what the realistic expectation is — before you travel anywhere.',
              'This article is general information and does not replace medical advice.'
            ]
          }
        ]
      }
    }
  },
  {
    slug: 'kidney-stone-treatment-abroad-rirs-vs-pcnl-explained',
    date: '2026-10-04',
    category: 'stones',
    languages: ['en'],
    treatmentSlug: 'rirs',
    sources: [
      { label: 'EAU Guidelines on Urolithiasis — European Association of Urology', url: 'https://uroweb.org/guidelines/urolithiasis' }
    ],
    i18n: {
      en: {
        title: 'Kidney Stone Treatment Abroad: RIRS vs PCNL Explained',
        excerpt:
          'Both are keyhole procedures and both are good operations. The question is which one suits your stone — and whether you can realistically complete treatment in a single trip.',
        metaTitle: 'RIRS vs PCNL: Choosing Kidney Stone Treatment Abroad',
        metaDescription:
          'How RIRS and PCNL differ, how stone size, density and position decide the choice, stent discomfort, the risk of needing a second session, and planning treatment abroad.',
        sections: [
          {
            heading: 'Two routes into the same kidney',
            paragraphs: [
              'RIRS involves no incision at all. A flexible instrument is passed up through the urethra, bladder and ureter into the kidney, and the stone is fragmented with a laser until it is fine enough to pass naturally.',
              'PCNL uses a small track made through the skin of the back directly into the kidney. Because the track admits larger instruments, big stones can be broken up and physically removed in one session.',
              'Neither is open surgery. The distinction is the route, and how much instrumentation that route allows.'
            ]
          },
          {
            heading: 'Stone size: the primary factor',
            paragraphs: [
              'Small stones favour RIRS. The stone is turned to dust, the fragments pass, and there is no wound.',
              'As stones get larger the arithmetic changes. Dusting a large stone takes a long time, and not every fragment will pass, so a second or even third session may be needed. At that point PCNL, which clears the stone in one sitting, becomes the more sensible option.',
              'For a patient travelling from abroad this matters more than it does for a local patient. A second session means either a longer stay or a second journey. Ask explicitly: what is the realistic chance that one session will not be enough?'
            ]
          },
          {
            heading: 'Density and position',
            paragraphs: [
              'Stones differ in hardness. The density value measured on CT indicates how much the stone will resist the laser. A very hard stone takes longer to dust, which lengthens the operation and raises pressure inside the kidney.',
              'Position matters too, particularly for stones in the lower pole of the kidney. That is a dependent pocket from which fragments drain poorly, so even a well-dusted stone may leave residue behind. Lower pole stones therefore tip the balance towards PCNL at a smaller size than stones elsewhere.'
            ]
          },
          {
            heading: 'When RIRS is specifically preferred',
            paragraphs: [
              'In patients taking anticoagulants, because no track is made through kidney tissue.',
              'In patients whose body habitus or spinal anatomy makes percutaneous access difficult.',
              'In patients with a single functioning kidney, where preserving renal tissue carries extra weight.',
              'When there is also a stone in the ureter that can be dealt with in the same session.'
            ]
          },
          {
            heading: 'When PCNL is specifically preferred',
            paragraphs: [
              'For large stones, and particularly for branched staghorn stones filling the collecting system.',
              'When there are multiple stones and single-session clearance is the goal.',
              'After a previous RIRS has failed to render the kidney stone-free.'
            ]
          },
          {
            heading: 'Risks, stated plainly',
            paragraphs: [
              'PCNL carries a higher bleeding risk than RIRS because a track is created through the kidney. Transfusion or an additional procedure is occasionally needed, and injury to neighbouring structures, while uncommon, is recognised.',
              'RIRS risks relate mainly to the ureter: injury from instrument passage, and ureteric stricture developing later. Raised pressure within the kidney during the procedure is also relevant to infection risk.',
              'For both, febrile infection is the complication to take most seriously. This is why a clean urine culture before surgery is not a formality. Stone surgery should not be scheduled on infected urine, and a clinic that treats this as optional is cutting a corner that matters.'
            ]
          },
          {
            heading: 'The stent nobody warns you about',
            paragraphs: [
              'A temporary stent between kidney and bladder is often placed after either procedure. It protects drainage, but it causes its own symptoms: urinary frequency, flank discomfort when passing urine, and blood in the urine.',
              'These symptoms stop when the stent is removed. The practical question for an international patient is who removes it and where. Removal requires a short procedure, so establish before you travel whether it will be done in Turkey before you fly or arranged at home — and if at home, that your local urologist has agreed.',
              'Patients are often surprised by how uncomfortable a stent can be. Knowing in advance that the discomfort is expected and temporary makes a considerable difference.'
            ]
          },
          {
            heading: 'What to send, and what to do afterwards',
            paragraphs: [
              'A non-contrast CT is the key study: it shows size, position and density. Also send recent kidney function tests, a urine culture, your medication list and any record of previous stone treatment.',
              'And then the part that is routinely neglected: clearing the stone is only half the treatment. Without a change in fluid intake and, where relevant, diet, stones tend to recur. Ask for the stone composition to be analysed, and for metabolic assessment if you form stones repeatedly.',
              'This article is general information and does not replace medical advice.'
            ]
          }
        ]
      }
    }
  },
  {
    slug: 'second-opinion-for-prostate-cancer-how-to-send-your-file',
    date: '2026-10-04',
    category: 'oncology',
    languages: ['en'],
    treatmentSlug: 'prostat-kanseri',
    sources: [
      { label: 'EAU Guidelines on Prostate Cancer — European Association of Urology', url: 'https://uroweb.org/guidelines/prostate-cancer' }
    ],
    i18n: {
      en: {
        title: 'Second Opinion for Prostate Cancer: How to Send Your File',
        excerpt:
          'A second opinion is only as good as the information it is based on. Sending the right documents in the right format is what separates a useful review from a generic reply.',
        metaTitle: 'Prostate Cancer Second Opinion: What to Send and How',
        metaDescription:
          'Which documents are needed for a prostate cancer second opinion, why MRI must be sent as DICOM, what a proper review should tell you, and how to use the answer.',
        sections: [
          {
            heading: 'Why ask for one at all',
            paragraphs: [
              'Prostate cancer frequently has more than one reasonable management option. Active surveillance, surgery and radiotherapy can all be defensible for the same patient, with different trade-offs in side effects and follow-up.',
              'Because of that, a second opinion is not a vote of no confidence in your current doctor. It is a way of understanding which of several reasonable paths fits your priorities.',
              'There is also a specific technical reason. Grading a prostate biopsy involves interpretation, and review by a second pathologist sometimes changes the grade. A change in grade can change the recommendation.'
            ]
          },
          {
            heading: 'The documents that actually matter',
            paragraphs: [
              'Your PSA history, not just the latest value. The trend over time carries information that a single number does not.',
              'The full biopsy pathology report: how many cores were taken, how many were positive, which sites, the Gleason score or ISUP grade group for each, and the percentage involvement of each core.',
              'The MRI report including the PI-RADS assessment — and, importantly, the images themselves.',
              'Any staging scans that have been performed.',
              'The digital rectal examination findings.',
              'Your other medical conditions, your medication list, and your age. These are not background detail; they directly affect which treatment is appropriate.'
            ]
          },
          {
            heading: 'Send the MRI as DICOM, not as a photograph',
            paragraphs: [
              'This is the most common reason a second opinion turns out to be of limited value. A screenshot, a phone photograph of a screen, or a PDF containing a handful of printed slices does not allow the images to be reviewed properly.',
              'Ask your hospital for the study on a CD or as a DICOM file set. Most radiology departments provide this on request, and many now offer a download link. The file set is large, which is normal.',
              'Without the images, a reviewer can only comment on someone else\'s written report. That is not an independent opinion; it is a paraphrase.'
            ]
          },
          {
            heading: 'Pathology slides',
            paragraphs: [
              'If you want the grading itself reviewed rather than accepted as read, the slides or blocks need to be available for a pathologist to examine. Your hospital can usually release them or send digital scans.',
              'This step takes longer than sending reports, so start it early if you want it included. It is worth considering particularly when the grading sits at a decision boundary, where a shift in grade would change the recommendation.'
            ]
          },
          {
            heading: 'What a proper second opinion should tell you',
            paragraphs: [
              'Which risk category your disease falls into, and why.',
              'Which management options are reasonable for you — including active surveillance where that applies.',
              'What each option would mean for continence and sexual function, stated specifically rather than as reassurance.',
              'What follow-up each option requires, and for how long.',
              'If it recommends surgery: whether nerve-sparing is likely to be possible, on one side or both, and what would cause that plan to change during the operation.',
              'A reply that recommends a single treatment without discussing alternatives is not a second opinion. It is a sales response.'
            ]
          },
          {
            heading: 'Questions to ask in your own words',
            paragraphs: [
              'What happens if I do nothing for three months while I decide? For most prostate cancers the honest answer is "nothing changes materially", and a doctor who says so is being straight with you.',
              'What would you advise if I were your relative?',
              'What are the chances I will need additional treatment after surgery?',
              'Urgency is rarely clinically justified in prostate cancer. If a clinic responds to your enquiry with pressure to book quickly, that pressure is commercial rather than medical.'
            ]
          },
          {
            heading: 'How to use the answer',
            paragraphs: [
              'A second opinion that agrees with your current plan is not wasted. It lets you proceed with confidence instead of doubt.',
              'If the opinions differ, take the difference back to your own doctor and ask them to respond to it. The point is to understand the reasoning, not to collect opinions until one matches what you hoped to hear.',
              'You are also entitled to have treatment where you choose. Getting a second opinion here does not commit you to being treated here, and any review you receive should be written on that basis.',
              'This article is general information and does not replace medical advice.'
            ]
          }
        ]
      }
    }
  },
  {
    slug: 'is-medical-tourism-for-urology-safe-what-to-check',
    date: '2026-10-04',
    category: 'healthTourism',
    languages: ['en'],
    sources: [
      { label: 'EAU Guidelines on Prostate Cancer — European Association of Urology', url: 'https://uroweb.org/guidelines/prostate-cancer' }
    ],
    i18n: {
      en: {
        title: 'Is Medical Tourism for Urology Safe? What to Check',
        excerpt:
          'Travelling for surgery can be entirely reasonable or genuinely risky, and the difference is mostly in how the care is organised rather than where it happens.',
        metaTitle: 'Is Urological Surgery Abroad Safe? A Practical Checklist',
        metaDescription:
          'How to assess a clinic abroad: verifying the surgeon, hospital facilities, who handles complications, follow-up arrangements, consent, data protection and warning signs.',
        sections: [
          {
            heading: 'What actually makes it risky',
            paragraphs: [
              'The risk in treatment abroad is rarely the operation itself. Surgical standards in a well-equipped hospital with an experienced surgeon do not change at a national border.',
              'The risk lies in the structure around the operation: whether you were assessed properly beforehand, whether anyone is accountable if a complication occurs after you fly home, and whether follow-up is real or merely promised.',
              'Judged that way, the questions to ask become concrete rather than a matter of general reassurance.'
            ]
          },
          {
            heading: 'Verify the surgeon, not the brand',
            paragraphs: [
              'Ask for the surgeon\'s name and specialist qualification, and check it against the register of the relevant national authority.',
              'Ask whether that surgeon will perform your operation personally, and whether any part of it will be delegated. This is a reasonable question and should receive a direct answer.',
              'Ask how many of your specific procedure they perform and over what period. Be sceptical of large round numbers presented without a timeframe — claims like that are easy to make and impossible to check.',
              'Be sceptical, equally, of superlatives. "Leading", "best in the region" and "world-renowned" are marketing terms, not credentials.'
            ]
          },
          {
            heading: 'Check the hospital, not the website photographs',
            paragraphs: [
              'Which hospital will you actually be in? Named, with an address you can look up.',
              'Does it have an intensive care unit on site? For major urological surgery this is not a luxury.',
              'Is there a blood bank, and are there other specialties — cardiology, general surgery — available if something unexpected happens?',
              'Marketing photographs show reception areas. The questions above are about what exists behind them.'
            ]
          },
          {
            heading: 'The complication question',
            paragraphs: [
              'This is the one that separates serious providers from the rest. Ask, in writing: if there is a complication requiring a longer stay or a further procedure, what happens clinically, and who pays?',
              'Ask what happens if a complication appears after you get home. Who do you contact, how quickly do they respond, and can they communicate with your local doctor?',
              'A clinic that answers these questions in writing is one that has thought about them. A clinic that deflects with reassurance has told you something important.'
            ]
          },
          {
            heading: 'Consent and language',
            paragraphs: [
              'You should receive written information about the procedure, its alternatives and its risks, in a language you genuinely understand, with enough time to read it before you are asked to sign.',
              'Consent obtained on the morning of surgery, in a language you read with difficulty, is not meaningful consent.',
              'If an interpreter is needed, establish whether a medical interpreter is provided, rather than relying on a family member or a translation application for a discussion about surgical risk.'
            ]
          },
          {
            heading: 'Your records and your data',
            paragraphs: [
              'You are entitled to copies of your operation note, your pathology report and your discharge summary. Ask whether these will be provided in English as well as the local language.',
              'Your local doctor will need them. A patient who returns home with no documentation is difficult to look after safely.',
              'Ask also how your medical records and images are stored and who has access. Sending scans and reports to a clinic abroad is a transfer of sensitive personal data, and you are entitled to know how it is handled.'
            ]
          },
          {
            heading: 'Warning signs',
            paragraphs: [
              'Pressure to decide quickly, or a discount that expires. Surgery is not a product with a sale period.',
              'A quote given before anyone has seen your reports.',
              'Guaranteed outcomes. No honest surgeon guarantees a result.',
              'Patient photographs and testimonials used as proof of skill, particularly where their use is restricted by local regulation.',
              'Reluctance to name the hospital, or to confirm the operating surgeon in writing.',
              'An inability to say clearly who is responsible for your care once you have left the country.'
            ]
          },
          {
            heading: 'Before you book the flight',
            paragraphs: [
              'Tell your doctor at home what you are planning. You will need them afterwards, and they can flag problems with the plan while there is still time to change it.',
              'Check whether your travel insurance covers planned surgery abroad. Most policies do not, and this surprises people at the worst possible moment.',
              'Arrange follow-up at home before you leave, not after you return.',
              'Travelling for treatment is a legitimate choice made by many people every year. Making it safely is mostly a matter of asking unglamorous questions and insisting on written answers.',
              'This article is general information and does not replace medical advice.'
            ]
          }
        ]
      }
    }
  },
  {
    slug: 'alaj-tadakhkhum-al-brustata-fi-turkiya',
    date: '2026-10-04',
    category: 'bph',
    languages: ['ar'],
    treatmentSlug: 'bph-prostat-buyumesi',
    sources: [
      { label: 'EAU Guidelines on Management of Non-Neurogenic Male LUTS — European Association of Urology', url: 'https://uroweb.org/guidelines/management-of-non-neurogenic-male-luts' }
    ],
    i18n: {
      ar: {
        title: 'علاج تضخم البروستاتا في تركيا: الطرق وما الذي يحدد التكلفة',
        excerpt:
          'ليست كل طرق علاج تضخم البروستاتا متكافئة، والاختيار بينها يقوم على حجم الغدة وأولوياتك لا على اسم الجهاز. وهذا المقال يشرح الفروق وما ينبغي سؤاله قبل السفر.',
        metaTitle: 'علاج تضخم البروستاتا في تركيا: الطرق والتكلفة',
        metaDescription:
          'طرق علاج تضخم البروستاتا الحميد، الفرق بين الاستئصال بالمنظار والاستئصال الكامل بالليزر والبخار، ما يحدد التكلفة، ومدة الإقامة اللازمة في تركيا.',
        sections: [
          {
            heading: 'متى يحتاج التضخم إلى علاج أصلًا',
            paragraphs: [
              'تضخم البروستاتا الحميد شائع مع التقدم في العمر، لكن وجوده لا يعني بالضرورة الحاجة إلى تدخل. فكثير من الرجال يعيشون بتضخم من دون شكوى تُذكر، والعلاج يُطرح حين تبدأ الشكوى في تقييد الحياة اليومية.',
              'ومع ذلك هناك حالات لا ينبغي فيها الانتظار: احتباس البول المتكرر، تكوّن حصاة في المثانة، التهابات بولية متكررة، تأثر وظيفة الكلى، ونزف متكرر من البروستاتا. فهذه ليست مسائل راحة بل مؤشرات على ضرر قائم.',
              'والسؤال الذي يستحق أن يُطرح على الطبيب هو: هل حالتي تستدعي تدخلًا الآن، أم أن الأدوية والمتابعة كافية؟ الطبيب الذي يجيب بصراحة أن الانتظار ممكن هو طبيب يستحق الثقة.'
            ]
          },
          {
            heading: 'الأدوية أولًا، وحدودها',
            paragraphs: [
              'تُستعمل مجموعتان رئيستان: أدوية ترخي عضلات عنق المثانة فتحسّن التدفق سريعًا، وأدوية تُقلّص حجم الغدة ببطء على مدى أشهر.',
              'وللأدوية آثار جانبية ينبغي معرفتها: دوار وهبوط في الضغط عند الوقوف، وتغيّر في القذف، وعند المجموعة الثانية احتمال تأثير على الرغبة الجنسية.',
              'وهناك نقطة عملية مهمة: أدوية تقليص الحجم تخفض قيمة تحليل PSA تقريبًا إلى النصف. فإن كنت تستعملها فأخبر طبيبك، لأن قراءة التحليل من دون هذه المعلومة قد تُطمئن زورًا.'
            ]
          },
          {
            heading: 'الفرق الجوهري بين الطرق الجراحية',
            paragraphs: [
              'الاستئصال بالمنظار (TURP) يُزيل جزءًا من النسيج المسدّ عن طريق الكشط من الداخل. وهو إجراء راسخ ومعروف.',
              'الاستئصال الكامل بالليزر (HoLEP وThuLEP) يفصل النسيج المتضخم كله عن محفظة البروستاتا ويُخرجه. وبما أن النسيج يُزال بالكامل لا جزئيًا، فإن الحاجة إلى إعادة التدخل بعد سنوات أقل، وهذه نقطة مهمة لمن يسافر من بلد آخر.',
              'العلاج بالبخار (Rezūm) لا يزيل النسيج بل يجعل الجسم يمتصه تدريجيًا خلال أسابيع. وهو أقل تدخلًا وأكثر حفاظًا على القذف، لكن أثره يظهر متأخرًا واحتمال الحاجة إلى تدخل لاحق أعلى.',
              'لا توجد طريقة أفضل من الأخرى على الإطلاق. السؤال الصحيح: أيّ توازن يناسبني أنا؟'
            ]
          },
          {
            heading: 'حجم البروستاتا هو العامل الأول في الاختيار',
            paragraphs: [
              'كلما كبرت الغدة، طال وقت الكشط في الطريقة التقليدية وزادت كمية السائل الممتص، وهذا يضع سقفًا عمليًا للطريقة.',
              'أما طرق الاستئصال الكامل فلا تواجه هذا السقف نفسه، ولذلك تُطرح للغدد الكبيرة التي كانت تحتاج سابقًا إلى جراحة مفتوحة.',
              'فإن كانت غدتك كبيرة، فالقرار الحقيقي ليس بين ماركات الليزر بل بين الاستئصال الكامل والطرق الأخرى.'
            ]
          },
          {
            heading: 'ما يجب قوله بصراحة: القذف الرجوعي',
            paragraphs: [
              'بعد إزالة نسيج البروستاتا، كثيرًا ما يرجع السائل المنوي إلى المثانة بدل خروجه. وهذا لا يضر الصحة ولا يُفسد الانتصاب ولا الرغبة، لكنه يؤثر في الإنجاب وقد يكون مزعجًا نفسيًا.',
              'وهذه نقطة تُغفَل كثيرًا في العروض التسويقية. إن كنت لا تزال ترغب في الإنجاب فقُل ذلك صراحة في الاستشارة، لأنه يغيّر الخيارات المطروحة.',
              'وقد يحدث أيضًا تسرّب بولي مؤقت بعد الاستئصال الكامل، ويتحسن عند معظم الرجال خلال أسابيع مع تمارين قاع الحوض. ومعرفة ذلك مسبقًا خير من اكتشافه في الطائرة.'
            ]
          },
          {
            heading: 'ما الذي يحدد التكلفة فعلًا',
            paragraphs: [
              'الرقم وحده لا يعني شيئًا. المهم ما يشمله العرض وما لا يشمله.',
              'ينبغي أن يشمل العرض: الفحوص قبل العملية، العملية نفسها بأتعاب الجراح والتخدير والمستهلكات، الإقامة في المستشفى بعدد ليالٍ محدد، فحص النسيج المُزال، المتابعة قبل السفر، ثم ترتيب المتابعة بعد العودة.',
              'وغالبًا لا يشمل: علاج المضاعفات إن حدثت، والإقامة الإضافية إن طال التعافي، وتذاكر الطيران. واسأل صراحةً ومكتوبًا: إن حدثت مضاعفة تستدعي إقامة أطول أو تدخلًا ثانيًا، من يتحمل التكلفة؟',
              'واعلم أن انخفاض التكلفة في تركيا سببه بنية التكاليف المحلية لا رخص الأجهزة؛ فالليزر والمستهلكات أسعارها عالمية. ولذلك فالعرض المنخفض بصورة غير معقولة يعني غالبًا أن شيئًا ما حُذف من الحساب.'
            ]
          },
          {
            heading: 'مدة الإقامة والترتيبات العملية',
            paragraphs: [
              'خطّط لوصول قبل العملية بيوم أو يومين للفحوص، ثم العملية والإقامة القصيرة في المستشفى، ثم فترة القسطرة، ثم إزالتها ومراجعة قبل السفر.',
              'لا تحجز طيرانك في اليوم التالي مباشرةً لإزالة القسطرة. فبعض المرضى يحتاج إلى إعادتها مؤقتًا، وهذا أمر بسيط قرب المستشفى وصعب في المطار.',
              'واحجز تذكرة قابلة للتغيير، وتأكد أن تأشيرتك تغطي أيامًا أكثر مما خططت له.'
            ]
          },
          {
            heading: 'ما ينبغي إرساله قبل السفر',
            paragraphs: [
              'نتيجة PSA حديثة، تصوير يبيّن حجم البروستاتا، قياس تدفق البول والبول المتبقي إن توفرا، قائمة أدويتك كاملة وخصوصًا مميعات الدم، وملخص أمراضك الأخرى.',
              'بهذه المعلومات يمكن أن يُقال لك قبل شراء التذكرة أيّ طريقة تناسبك — أو أن حالتك لا تحتاج جراحة أصلًا. والإجابة الصادقة في هذه المرحلة أثمن من حجز سريع.',
              'هذا المقال للتوعية العامة ولا يُغني عن الاستشارة الطبية.'
            ]
          }
        ]
      }
    }
  },
  {
    slug: 'daamat-al-qadib-fi-turkiya',
    date: '2026-10-04',
    category: 'andrology',
    languages: ['ar'],
    treatmentSlug: 'penil-protez',
    sources: [
      { label: 'EAU Guidelines on Sexual and Reproductive Health — European Association of Urology', url: 'https://uroweb.org/guidelines/sexual-and-reproductive-health' }
    ],
    i18n: {
      ar: {
        title: 'دعامة القضيب في تركيا: ما الذي يجب معرفته قبل القرار',
        excerpt:
          'الدعامة قرار لا رجعة فيه، وأخطر مضاعفاتها العدوى. وهاتان الحقيقتان ينبغي أن تحكما اختيارك للجراح والمكان أكثر من السعر أو الإعلان.',
        metaTitle: 'دعامة القضيب في تركيا: الأنواع والمخاطر والتوقعات',
        metaDescription:
          'أنواع دعامات القضيب، متى تُطرح الدعامة، خطر العدوى ودور السكري، التوقعات الواقعية بعد العملية، وما ينبغي التحقق منه قبل السفر.',
        sections: [
          {
            heading: 'حقيقتان تحكمان القرار',
            paragraphs: [
              'الأولى: الدعامة لا رجعة فيها. فزرعها يتطلب توسيع الأنسجة الانتصابية، والانتصاب الطبيعي لا يعود بعدها. وإن اضطر الأمر إلى إزالة الجهاز من دون استبدال، تكون الحال أسوأ مما كانت قبل العملية.',
              'الثانية: العدوى هي المضاعفة الأهم. فالجهاز المصاب بالعدوى كثيرًا ما يلزم إخراجه، وإنقاذ الحالة بعد ذلك إجراء صعب. وكل تفاصيل التحضير والتقنية في هذه الجراحة مُنظَّمة حول تقليل هذا الخطر.',
              'ولهذا فإن هذه الجراحة تحديدًا ليست مما يُقرَّر بسرعة على أساس السعر.'
            ]
          },
          {
            heading: 'الدعامة ليست العلاج الأول',
            paragraphs: [
              'ضعف الانتصاب يُعالَج أولًا بالأدوية الفموية، ثم بالحقن الموضعي، ثم بجهاز الشفط. وكثير من الرجال يستفيدون من هذه المراحل.',
              'فإذا عُرضت عليك الدعامة من دون أن يُسأل عمّا جرّبته ولماذا لم ينجح، فهذه علامة تستحق التوقف. والجراح الذي يقول لك «لست مرشحًا للدعامة بعد» يُظهر حُسن تقدير لا ترددًا.',
              'ومن المهم أيضًا البحث عن سبب كامن غير معالَج. فضعف الانتصاب كثيرًا ما يكون أول علامة على مرض في شرايين القلب أو على السكري، والدعامة لا تعالج أيًّا منهما.'
            ]
          },
          {
            heading: 'السكري وخطر العدوى',
            paragraphs: [
              'ضعف ضبط السكر يرفع خطر عدوى الدعامة. وإن كان تحليل السكر التراكمي لديك مرتفعًا، فالنصيحة الصحيحة هي ضبطه قبل العملية ولو تطلّب ذلك تأجيلها.',
              'والعيادة التي تقبل تأجيل عمليتك لهذا السبب تحميك. والتي تمضي رغم ذلك تحمي جدولها.',
              'اسأل: ما الحد الذي يشترطه الجراح في تحليل السكر التراكمي، وهل نتيجتي الحالية تحققه؟'
            ]
          },
          {
            heading: 'نوعا الدعامة',
            paragraphs: [
              'الدعامة المرنة (القابلة للثني) قضيبان نصف صلبين يُثنى القضيب بهما للأعلى عند الحاجة وللأسفل بعدها. وميزتها البساطة: لا آلية تُتعلَّم ولا مهارة يدوية مطلوبة واحتمال العطل الميكانيكي أقل. وعيبها أن القضيب يبقى بدرجة ثبات دائمة قد تكون مزعجة عند اللبس.',
              'الدعامة الهيدروليكية (القابلة للنفخ) تتكون من أسطوانتين ومضخة في كيس الصفن وخزان سائل. وتعطي النتيجة الأقرب إلى الطبيعي لأن القضيب يبقى رخوًا حين لا تُستعمل. لكنها نظام ميكانيكي يحتاج إلى مهارة في الاستعمال، والعطل وارد.',
              'ولا يوجد نوع أفضل للجميع. فمهارة اليد وقوة القبضة والتهاب المفاصل والتليف السابق داخل القضيب وأولوياتك الشخصية كلها تدخل في الاختيار. والجراح الذي يعرض نوعًا واحدًا على كل المرضى لا يُفرِّد القرار.'
            ]
          },
          {
            heading: 'توقعات يجب قولها قبل العملية لا بعدها',
            paragraphs: [
              'الدعامة توفر الانتصاب فقط. وهي لا تُعيد الإحساس ولا الرغبة ولا القذف. فإن كان أيٌّ منها متأثرًا قبل العملية فسيبقى كذلك.',
              'كثير من الرجال يشعرون أن القضيب أقصر مما كان قبل العملية. وهذا من أكثر أسباب عدم الرضا، ويجب أن يُقال صراحةً قبل الجراحة لا أن يُكتشف بعدها.',
              'والجهاز متين لكنه ليس أبديًا؛ فقد يحتاج إلى استبدال بعد سنوات بسبب عطل ميكانيكي. وهذا اعتبار حقيقي للمريض الأصغر سنًا.'
            ]
          },
          {
            heading: 'الخصوصية: سؤال مشروع ويجب أن يُجاب',
            paragraphs: [
              'كثير من المرضى يسافرون لهذه العملية تحديدًا حرصًا على الخصوصية، وهذا حق مشروع.',
              'اسأل كيف تُحفظ ملفاتك ومن يطّلع عليها، وبأيّ اسم تُحجز الإقامة، وهل تُرسَل رسائل أو مواد تسويقية إلى هاتفك بعد العلاج، وهل يُطلب منك تصوير أو شهادة. من حقك رفض ذلك كله، ولا يجوز ربط العلاج بالموافقة عليه.',
              'واحذر من العيادات التي تعرض صور مرضى أو شهاداتهم دليلًا على المهارة؛ فما يفعلونه بصور غيرك قد يفعلونه بصورك.'
            ]
          },
          {
            heading: 'ما ينبغي التحقق منه قبل السفر',
            paragraphs: [
              'أن الجراح المذكور باسمه هو من سيُجري العملية بنفسه.',
              'أن العملية في مستشفى بغرفة عمليات نظامية وإقامة داخلية، لا في عيادة.',
              'ماركة الجهاز وطرازه مكتوبين قبل العملية.',
              'ماذا يحدث إن ظهرت عدوى بعد عودتك إلى بلدك: بمن تتصل وماذا ستفعل العيادة.',
              'وأن تُخصَّص أيام كافية في تركيا لتعلّم استعمال الجهاز شخصيًا قبل السفر، لا عبر مكالمة فيديو لاحقًا.',
              'هذا المقال للتوعية العامة ولا يُغني عن الاستشارة الطبية. والقرار يُتخذ بعد تقييم كامل ونقاش غير متعجل.'
            ]
          }
        ]
      }
    }
  },
  {
    slug: 'jirahat-sartan-al-brustata-bil-robot-fi-istanbul',
    date: '2026-10-04',
    category: 'oncology',
    languages: ['ar'],
    treatmentSlug: 'robotik-prostatektomi',
    sources: [
      { label: 'EAU Guidelines on Prostate Cancer — European Association of Urology', url: 'https://uroweb.org/guidelines/prostate-cancer' }
    ],
    i18n: {
      ar: {
        title: 'جراحة سرطان البروستاتا بالروبوت في إسطنبول: ما الذي يجب أن تعرفه',
        excerpt:
          'الروبوت أداة بيد الجراح لا بديل عنه. والأسئلة التي تستحق الطرح تتعلق بالجراح وبما يحدث بعد العملية، لا باسم الجهاز.',
        metaTitle: 'استئصال البروستاتا بالروبوت في إسطنبول: الإجراء والتعافي',
        metaDescription:
          'كيف تجري جراحة سرطان البروستاتا بالروبوت، ما الذي يتغير بعدها في التحكم بالبول والوظيفة الجنسية، الحفاظ على الأعصاب، مدة الإقامة والمتابعة بعد العودة.',
        sections: [
          {
            heading: 'الروبوت لا يُجري العملية',
            paragraphs: [
              'العبارة التسويقية «عملية بالروبوت» توحي بأن الجهاز يعمل وحده، وهذا غير صحيح. الجراح هو من يُجري كل حركة، والروبوت يُترجم حركة يديه إلى أدوات دقيقة داخل الجسم مع رؤية مكبّرة ومجسّمة.',
              'وفائدة ذلك حقيقية: دقة أعلى في مساحة ضيقة، ونزف أقل عادةً، وجروح صغيرة. لكن النتيجة النهائية تعتمد على من يجلس خلف الجهاز لا على الجهاز نفسه.',
              'ولذلك فالسؤال «هل عندكم روبوت؟» أقل أهمية بكثير من السؤال «من سيُجري عمليتي، وكم عملية من هذا النوع يُجري؟»'
            ]
          },
          {
            heading: 'ما الذي يُزال في العملية',
            paragraphs: [
              'تُزال البروستاتا كاملة مع الحويصلتين المنويتين، ثم تُوصَل المثانة بالإحليل من جديد. وقد تُزال العقد اللمفية في الحوض إذا كان خطر الانتشار يستدعي ذلك.',
              'ولأن البروستاتا تُزال بكاملها، فإن السائل المنوي لا يعود يُقذف بعد العملية. وهذا يعني انتهاء القدرة على الإنجاب بالطريقة الطبيعية، وهو أمر ينبغي قوله صراحةً قبل العملية لا بعدها.',
              'والنشوة الجنسية تبقى ممكنة من دون قذف عند كثير من الرجال، لكن الإحساس يختلف.'
            ]
          },
          {
            heading: 'التحكم بالبول: الحقيقة التي تُقال ناقصة',
            paragraphs: [
              'آلية التحكم بالبول عندك جزءان: آلية داخل البروستاتا وعضلة عاصرة خارجية تحتها. وبإزالة البروستاتا تذهب الآلية الداخلية، فتتحمل العضلة الخارجية العمل وحدها.',
              'ولذلك فتسرّب البول بعد سحب القسطرة ليس مضاعفة بل مرحلة انتقالية متوقعة. ويتحسن عند معظم الرجال خلال أسابيع إلى أشهر، وقد يستمر التحسن حتى سنة.',
              'والترتيب المعتاد للتحسن: الجفاف ليلًا أولًا، ثم التحكم أثناء الجلوس والوقوف، وآخر ما يتحسن هو لحظات الجهد — السعال والعطاس وحمل الثقيل. ومعرفة هذا الترتيب تمنع القلق في غير موضعه.',
              'وتمارين قاع الحوض مفيدة فعلًا بشرط تحريك العضلة الصحيحة. وتعلّمها قبل العملية أسهل بكثير من تعلّمها بعدها.'
            ]
          },
          {
            heading: 'الحفاظ على الأعصاب: ممكن لكن ليس دائمًا',
            paragraphs: [
              'على جانبي البروستاتا حزمتان من الأعصاب والأوعية لهما دور في آلية الانتصاب. وإن أمكن الحفاظ عليهما ارتفع احتمال عودة الوظيفة الجنسية.',
              'لكن القاعدة الثابتة هي: استئصال الورم كاملًا أولًا، ثم الحفاظ على العصب إن أمكن. فإن امتد الورم قرب الحزمة، كان العمل قريبًا منها مخاطرةً بترك خلايا ورمية، ولا يصح ذلك.',
              'والقرار ليس «كل شيء أو لا شيء»؛ فقد يُحافَظ على جانب واحد إن كان الورم في الجانب الآخر، وقد تختلف درجة القرب المقبولة. والجراح الذي يشرح لك هذا التوازن أصدق ممن يقول «لا تقلق، سنحافظ على الأعصاب».',
              'وحتى مع الحفاظ عليها، عودة الوظيفة تحتاج أشهرًا وتتأثر بالعمر والسكري وأمراض الشرايين والتدخين والحالة قبل العملية.'
            ]
          },
          {
            heading: 'مدة الإقامة في تركيا تحددها القسطرة',
            paragraphs: [
              'بعد وصل المثانة بالإحليل تحتاج المنطقة إلى وقت للالتئام، وتبقى القسطرة مدة محددة لتصريف البول خلالها.',
              'وتُسحب القسطرة هنا قبل سفرك، ليُعالَج أيّ تعذّر في التبول قرب المستشفى لا في المطار. ولا تحجز رحلتك في اليوم التالي مباشرةً للسحب.',
              'والسفر الجوي بعد جراحة الحوض يتطلب إذنًا طبيًا فرديًا بسبب خطر الجلطات. التزم بالتعليمات عن المشي في الممر وشرب الماء والجوارب الضاغطة، واطلب المساعدة فورًا عند ألم أو تورم في الساق أو ضيق في النفس.'
            ]
          },
          {
            heading: 'تقرير علم الأنسجة يصل بعد سفرك',
            paragraphs: [
              'البروستاتا المُزالة تُفحَص مجهريًا، وهذا التقرير هو ما يحدد إن كان يلزم علاج إضافي. وهو غالبًا لا يكون جاهزًا قبل سفرك.',
              'فاتفق قبل المغادرة: كيف يصلك التقرير، ومن يشرحه لك، وبأيّ لغة. فتقرير مرضي يصل بلا شرح نهاية سيئة لعملية جيدة.',
              'واتفق كذلك على من يراجع نتائج PSA بعد عودتك ولأيّ مدة. فاسم شخص مسؤول أثمن من وعد عام بالدعم.',
              'هذا المقال للتوعية العامة ولا يُغني عن الاستشارة الطبية.'
            ]
          }
        ]
      }
    }
  },
  {
    slug: 'hasawat-al-kula-mata-tahtaj-ila-jiraha',
    date: '2026-10-04',
    category: 'stones',
    languages: ['ar'],
    treatmentSlug: 'bobrek-tasi',
    sources: [
      { label: 'EAU Guidelines on Urolithiasis — European Association of Urology', url: 'https://uroweb.org/guidelines/urolithiasis' }
    ],
    i18n: {
      ar: {
        title: 'حصوات الكلى: متى تحتاج إلى جراحة ومتى تنتظر',
        excerpt:
          'ليست كل حصاة تحتاج إلى تدخل، وليس كل انتظار آمنًا. والفرق بينهما يقوم على حجم الحصاة وموضعها وعلى علامات محددة لا يجوز تجاهلها.',
        metaTitle: 'حصوات الكلى: متى تلزم الجراحة ومتى يكفي الانتظار',
        metaDescription:
          'متى تحتاج حصوات الكلى إلى تدخل، العلامات الخطرة التي تستدعي المراجعة الفورية، الفرق بين تفتيت الحصى والتنظير والجراحة عبر الجلد، والوقاية من التكرار.',
        sections: [
          {
            heading: 'العلامة التي لا تحتمل الانتظار',
            paragraphs: [
              'قبل أيّ تفصيل آخر: إذا اجتمع ألم المغص الكلوي مع الحمى والرعشة، فهذه حالة إسعافية. فاجتماع انسداد المجرى البولي مع عدوى قد يتطور بسرعة ويستدعي تصريفًا عاجلًا، ولا يصح تأجيله إلى موعد العيادة.',
              'وكذلك انقطاع البول تمامًا، أو ألم لا يسكن بالمسكنات، أو قيء يمنع شرب السوائل — كلها أسباب للمراجعة الفورية.',
              'أما المغص من دون حمى فمؤلم لكنه ليس بالضرورة إسعافيًا بالدرجة نفسها.'
            ]
          },
          {
            heading: 'متى يمكن الانتظار',
            paragraphs: [
              'الحصوات الصغيرة في الحالب كثيرًا ما تنزل وحدها خلال أسابيع، وقد تُعطى أدوية تساعد على نزولها مع المسكنات وشرب السوائل.',
              'والحصوات الصغيرة الساكنة داخل الكلى من دون أعراض يمكن متابعتها بالتصوير من دون تدخل، بشرط أن تكون المتابعة منتظمة لا منسية.',
              'لكن الانتظار له حدود: إذا لم تنزل الحصاة خلال المدة المعقولة، أو تكرر المغص، أو ظهر تأثير على الكلية، فالتدخل أولى.'
            ]
          },
          {
            heading: 'الصمت أخطر من الألم أحيانًا',
            paragraphs: [
              'نقطة يجهلها كثيرون: الانسداد المزمن قد لا يؤلم. فالكلية تتوسع ببطء وتفقد وظيفتها تدريجيًا من دون أن يشعر صاحبها.',
              'ولهذا فغياب الألم ليس دليل سلامة إذا كانت هناك حصاة معروفة. والحصاة التي تُترك سنوات من دون متابعة قد تُكلّف وظيفة الكلية.',
              'وهذا أيضًا سبب أهمية التصوير في المتابعة، لا الاكتفاء بغياب الشكوى.'
            ]
          },
          {
            heading: 'الطرق المتاحة باختصار',
            paragraphs: [
              'التفتيت بالموجات الصادمة (ESWL) يُجرى من خارج الجسم من دون إدخال أدوات. مناسب لحصوات مختارة في الحجم والموضع والكثافة، ويحتاج أحيانًا إلى أكثر من جلسة، وقد تسبب الشظايا النازلة مغصًا.',
              'تنظير الحالب والكلية المرن (RIRS) يدخل عبر المجرى البولي من دون أيّ شق، ويُفتِّت الحصاة بالليزر حتى تصير غبارًا ينزل مع البول.',
              'الجراحة عبر الجلد (PCNL) تدخل إلى الكلية عبر نفق صغير في الظهر، وهي الطريقة الأساسية للحصوات الكبيرة والمتشعبة لأنها تُنظّفها في جلسة واحدة.',
              'واختيار الطريقة يقوم على حجم الحصاة وكثافتها على التصوير المقطعي وموضعها داخل الكلية، وعلى أدويتك وبنيتك الجسمية. وحصوات القطب السفلي للكلية حالة خاصة لأن الشظايا تتصرف منها بصعوبة.'
            ]
          },
          {
            heading: 'الدعامة (الستنت) وما ينبغي توقعه منها',
            paragraphs: [
              'كثيرًا ما تُوضع دعامة مؤقتة بين الكلية والمثانة بعد التدخل لضمان التصريف.',
              'والدعامة نفسها تُسبب أعراضًا: كثرة التبول، وألمًا في الخاصرة عند التبول، ودمًا في البول. وهذه الأعراض تزول بإزالتها.',
              'والسؤال العملي للمريض القادم من الخارج: من يُزيلها وأين؟ فاتفق على ذلك قبل السفر، سواء بإزالتها في تركيا قبل عودتك أو بترتيب ذلك مع طبيبك في بلدك بموافقته.'
            ]
          },
          {
            heading: 'إزالة الحصاة نصف العلاج فقط',
            paragraphs: [
              'إن لم يتغير شيء في نمط حياتك، فالحصوات تميل إلى التكرار. ولهذا فتحليل تركيب الحصاة النازلة أو المُستخرَجة خطوة مهمة تُهمَل كثيرًا.',
              'زيادة كمية السوائل اليومية هي أبسط إجراء وقائي وأكثرها إهمالًا. أما التوصيات الغذائية فتختلف باختلاف نوع الحصاة، ولا تُعطى قائمة واحدة للجميع.',
              'وفي منطقة الخليج تحديدًا، الحرارة والتعرق يرفعان تركيز البول، ولذلك فكمية السوائل التي تكفي في مناخ بارد قد لا تكفي هنا.',
              'هذا المقال للتوعية العامة ولا يُغني عن الاستشارة الطبية.'
            ]
          }
        ]
      }
    }
  },
  {
    slug: 'al-khususiya-fi-ilaj-tibb-al-dhukura',
    date: '2026-10-04',
    category: 'andrology',
    languages: ['ar'],
    treatmentSlug: 'androloji',
    sources: [
      { label: 'EAU Guidelines on Sexual and Reproductive Health — European Association of Urology', url: 'https://uroweb.org/guidelines/sexual-and-reproductive-health' }
    ],
    i18n: {
      ar: {
        title: 'الخصوصية في علاج طب الذكورة: حقك وكيف تتحقق منه',
        excerpt:
          'الخصوصية ليست خدمة إضافية تُمنح، بل حق يُمارَس. وهذا المقال يشرح ما يمكنك طلبه صراحةً، وما ينبغي أن ترفضه من دون تردد.',
        metaTitle: 'الخصوصية في علاج طب الذكورة: ما حقك وكيف تتحقق منه',
        metaDescription:
          'كيف تُحفظ خصوصيتك في علاج أمراض الذكورة: سرية الملفات، التصوير والشهادات، الترجمة، الحجز والإقامة، والتواصل بعد العلاج.',
        sections: [
          {
            heading: 'لماذا هذا الموضوع يستحق مقالًا مستقلًا',
            paragraphs: [
              'مشكلات الانتصاب والعقم ومشكلات القذف من أكثر ما يتردد المريض في طرحه، وكثيرون يؤجلون العلاج سنوات لهذا السبب وحده.',
              'والتأجيل ليس بلا ثمن. فضعف الانتصاب قد يكون أول علامة على مرض في شرايين القلب أو على السكري، ومشكلات العقم يحدّها الزمن. أي أن الحرج قد يؤخر تشخيص مرض آخر أهم.',
              'ولذلك فمعرفة ما يحق لك طلبه من خصوصية ليست ترفًا، بل وسيلة تجعل طلب العلاج ممكنًا.'
            ]
          },
          {
            heading: 'سرية الملف الطبي',
            paragraphs: [
              'ملفك الطبي سري بحكم مهنة الطب، ولا يجوز إطلاع أحد عليه من دون إذنك — ولا حتى أقرب الناس إليك.',
              'ومن حقك أن تسأل: من يطّلع على ملفي داخل المستشفى؟ وأين تُحفظ الصور والتقارير؟ وكم مدة الاحتفاظ بها؟',
              'وإن كنت ترسل تقاريرك من بلدك قبل السفر، فأنت تنقل بيانات صحية حساسة. من حقك معرفة إلى أين تصل ومن يقرؤها.'
            ]
          },
          {
            heading: 'التصوير والشهادات: ارفض من دون حرج',
            paragraphs: [
              'لا يجوز تصويرك أو تسجيلك أو استعمال شهادتك في أيّ مادة تعريفية إلا بموافقة مكتوبة منفصلة منك.',
              'وموافقتك على العلاج شيء، وموافقتك على استعمال صورتك شيء آخر تمامًا. ولا يجوز أبدًا ربط العلاج أو سعره بقبولك التصوير أو كتابة شهادة.',
              'ومن حقك سحب موافقتك لاحقًا. وإن طُلب منك التصوير بإلحاح، فهذا في ذاته معلومة عن طريقة عمل المكان.',
              'والعيادة التي تعرض صور مرضى آخرين وشهاداتهم على موقعها تخبرك ضمنًا بما قد تفعله بصورك.'
            ]
          },
          {
            heading: 'الترجمة: من يسمع ما تقول',
            paragraphs: [
              'في استشارات طب الذكورة تحديدًا، وجود مترجم يعني وجود شخص ثالث يسمع تفاصيل خاصة جدًا.',
              'من حقك أن تطلب مترجمًا طبيًا ملتزمًا بالسرية المهنية، لا أن يُستعان بمرافق أو بأحد العاملين عرضًا. ومن حقك أن تطلب مترجمًا من جنس معين إن كان ذلك يريحك.',
              'والاعتماد على تطبيقات الترجمة في نقاش عن مخاطر جراحية ليس كافيًا، لا من حيث الدقة ولا من حيث الخصوصية.'
            ]
          },
          {
            heading: 'الحجز والإقامة والفواتير',
            paragraphs: [
              'اسأل بأيّ اسم ستُحجز الإقامة، وهل يظهر اسم العيادة أو نوع العلاج في الحجز.',
              'واسأل ماذا يُكتب في الفاتورة والإيصالات، وهل يظهر فيها اسم الإجراء. فهذه مسألة عملية لمن يسافر مع أسرته.',
              'واسأل كيف تصلك الرسائل والنتائج: هل تُرسَل رسائل نصية باسم العيادة إلى هاتفك؟ ومن حقك طلب قناة تواصل محددة ومنع غيرها.'
            ]
          },
          {
            heading: 'بعد العلاج: التسويق ليس جزءًا من الرعاية',
            paragraphs: [
              'من حقك رفض استعمال بياناتك في أيّ تواصل تسويقي، وأن يُحترم هذا الرفض.',
              'وإن وصلتك بعد العلاج رسائل ترويجية أو عروض لم تطلبها، فهذا تجاوز وليس خدمة.',
              'ومن حقك أيضًا الحصول على نسخة من تقاريرك الطبية بصيغة تستطيع تسليمها لطبيبك في بلدك، لأنك ستحتاجها.'
            ]
          },
          {
            heading: 'أسئلة اطرحها قبل أن تحجز',
            paragraphs: [
              'من سيطّلع على ملفي، وأين يُحفظ، ولأيّ مدة؟',
              'هل سيُطلب مني التصوير أو كتابة شهادة، وهل أستطيع الرفض من دون أن يتأثر علاجي؟',
              'هل المترجم ملتزم بالسرية المهنية؟',
              'بأيّ اسم تُحجز الإقامة وماذا يظهر في الفاتورة؟',
              'هل تُستعمل بياناتي في تواصل تسويقي، وكيف أرفض ذلك؟',
              'الإجابة الواضحة عن هذه الأسئلة أهم من أيّ وعد عام بالخصوصية.',
              'هذا المقال للتوعية العامة ولا يُغني عن الاستشارة الطبية.'
            ]
          }
        ]
      }
    }
  },
  {
    slug: 'dawali-al-khisya-wa-al-uqm-hal-tufid-al-jiraha',
    date: '2026-10-09',
    category: 'andrology',
    languages: ['ar'],
    treatmentSlug: 'varikosel',
    sources: [
      { label: 'EAU Guidelines on Sexual and Reproductive Health — European Association of Urology', url: 'https://uroweb.org/guidelines/sexual-and-reproductive-health' }
    ],
    i18n: {
      ar: {
        title: 'دوالي الخصية والعقم: هل تفيد الجراحة؟',
        excerpt:
          'ليس كل رجل لديه دوالي في الخصية يحتاج إلى جراحة، وليس كل من أُجريت له الجراحة سيُرزق بطفل. السؤال الصحيح هو: لدى أيّ زوجين يمكن للجراحة أن تُحدث فرقًا حقيقيًا؟',
        metaTitle: 'دوالي الخصية والعقم: متى تفيد الجراحة ومتى لا تفيد',
        metaDescription:
          'ما هي دوالي الخصية، ومن يحتاج إلى الجراحة، ولماذا يجب تقييم الزوجين معًا، والفرق بين الطرق الجراحية، ومتى تظهر النتيجة، وما الذي لا تستطيع الجراحة ضمانه.',
        sections: [
          {
            heading: 'ما هي دوالي الخصية ولماذا تهم',
            paragraphs: [
              'دوالي الخصية هي توسّع الأوردة التي تُعيد الدم من الخصية، وهي تشبه دوالي الساقين. توجد لدى نسبة كبيرة من الرجال، وفي أغلب الأحيان لا تسبب أي شكوى.',
              'إنتاج الحيوانات المنوية حساس للحرارة، ولهذا تقع الخصيتان خارج الجسم. وفي الدوالي يتباطأ جريان الدم فترتفع حرارة المنطقة، وهذا قد يؤثر سلبًا في إنتاج الحيوانات المنوية.',
              'لكن النقطة الحاسمة أن وجود الدوالي وحده ليس سببًا للجراحة. فالرجل الذي لا يشكو من شيء، وتحليل السائل المنوي لديه طبيعي، ولا يواجه مشكلة في الإنجاب، لا يحتاج إلى أي تدخل.'
            ]
          },
          {
            heading: 'من يحتاج إلى الجراحة',
            paragraphs: [
              'تُطرح الجراحة عندما تجتمع ثلاثة أمور: دوالي يمكن تحسّسها باليد عند الفحص، وخلل في تحليل السائل المنوي، وتأخر الزوجين في الإنجاب.',
              'أما الدوالي التي تظهر في الأشعة الصوتية فقط ولا تُحَسّ عند الفحص، فلا يُنصح بجراحتها في العادة. ومعرفة هذا الفرق تحميك من جراحة لا حاجة إليها.',
              'وقد يكون الألم سببًا كذلك: ألم الخصية الذي يؤثر في الحياة اليومية، ويزداد مع الوقوف الطويل، ولا يوجد له تفسير آخر.',
              'وفي المراهقين، إذا كانت الخصية في جهة الدوالي أصغر بوضوح من الأخرى، فهذا سبب مستقل للتقييم.'
            ]
          },
          {
            heading: 'العقم مسألة زوجين لا مسألة طرف واحد',
            paragraphs: [
              'من الشائع أن يبدأ البحث بالزوجة وحدها، وأن تمرّ سنوات من علاجها قبل أن يُطلب تحليل للزوج. وهذا تأخير لا مبرر له: فتقييم الزوج بتحليل السائل المنوي والفحص السريري بسيط، وينبغي أن يُجرى مبكرًا، بالتوازي مع تقييم الزوجة لا بعده.',
              'وفي المقابل، إذا وُجدت دوالي لدى الزوج فلا يصح أن يتوقف البحث عندها. فانتظام الإباضة لدى الزوجة، وحالة قناتي فالوب، وعمرها، كلها تؤثر مباشرة في النتيجة، ولا يمكن تقدير فائدة جراحة الدوالي من دون معرفتها.',
              'فإذا كان عمر الزوجة متقدمًا مثلًا، يصبح الوقت عاملًا مهمًا، وقد يكون الانتقال مباشرة إلى تقنيات الإنجاب المساعد أصوب من انتظار نتيجة جراحة الدوالي. وهذا القرار يُتخذ بالاشتراك مع طبيب النساء.'
            ]
          },
          {
            heading: 'الفرق بين طرق الجراحة',
            paragraphs: [
              'الهدف من جراحة الدوالي هو ربط الأوردة المتوسعة، مع الحفاظ على الشريان والأوعية اللمفاوية.',
              'في الطريقة المجهرية يُستخدم المجهر لتكبير الأوعية والتمييز بينها. ويُفضَّل هذا الأسلوب على نطاق واسع لأن معدلات عودة الدوالي وتجمّع الماء حول الخصية (القيلة المائية) المذكورة معه أقل.',
              'وتُستخدم أيضًا الطريقة بالمنظار والطريقة المفتوحة التقليدية. ويتحدد الأسلوب بحسب حالة الدوالي وخبرة الجراح.'
            ]
          },
          {
            heading: 'متى تظهر النتيجة',
            paragraphs: [
              'إنتاج الحيوانات المنوية دورة يستغرق تكوين الجديد منها نحو ثلاثة أشهر. ولهذا فتحليل السائل المنوي بعد الجراحة مباشرة لا معنى له.',
              'يُتابَع التغيّر عادةً بتحاليل تُكرَّر من الشهر الثالث فما بعده. وهذا الانتظار صعب على الزوجين، لكنه لا مفرّ منه.',
              'وتحسّن أرقام التحليل ليس هو الحمل. فقد يزداد عدد الحيوانات المنوية أو حركتها من دون أن يحدث حمل، والعكس ممكن أيضًا.'
            ]
          },
          {
            heading: 'الجواب الصادق: الجراحة لا تضمن النتيجة',
            paragraphs: [
              'جراحة الدوالي إجراء قد يُحسّن مؤشرات السائل المنوي لدى المرضى المختارين بعناية. لكن التحسن لا يحدث لدى الجميع، والتحسن لا يعني الحمل في كل الأحوال.',
              'فكن حذرًا من أي كلام يعدك بنتيجة مؤكدة. ومن المهم أن يُتفق قبل الجراحة على الجواب عن سؤال: ما الذي سنعدّه نجاحًا؟',
              'وجراحة الدوالي وتقنيات الإنجاب المساعد ليستا بالضرورة بديلتين؛ ففي بعض الأزواج تُخطَّط الجراحة لرفع فرص نجاح العلاج.'
            ]
          },
          {
            heading: 'بعد الجراحة',
            paragraphs: [
              'قد يستمر تورم المنطقة وبعض الانزعاج بضعة أيام، ويجب تجنّب حمل الأثقال والجهد الشديد لفترة.',
              'ومن المخاطر المعروفة تجمّع الماء حول الخصية، وعودة الدوالي، ونادرًا إصابة شريان الخصية. وهذه المخاطر يجب أن تُناقَش قبل الجراحة لا بعدها.',
              'وبما أن النتيجة لا تُقيَّم قبل ثلاثة أشهر، فاتفق قبل سفرك على من سيتابع تحاليلك اللاحقة وكيف ترسلها إليه.',
              'هذا المقال للتوعية العامة ولا يُغني عن الاستشارة الطبية.'
            ]
          }
        ]
      }
    }
  },
  {
    slug: 'ray-thani-li-sartan-al-brustata-kayfa-tursil-malaffak',
    date: '2026-10-09',
    category: 'oncology',
    languages: ['ar'],
    treatmentSlug: 'prostat-kanseri',
    sources: [
      { label: 'EAU Guidelines on Prostate Cancer — European Association of Urology', url: 'https://uroweb.org/guidelines/prostate-cancer' }
    ],
    i18n: {
      ar: {
        title: 'الرأي الثاني في سرطان البروستاتا: كيف ترسل ملفك',
        excerpt:
          'قيمة الرأي الثاني لا تتجاوز قيمة المعلومات التي بُني عليها. والفرق بين مراجعة مفيدة وردٍّ عام هو إرسال الوثائق الصحيحة بالصيغة الصحيحة.',
        metaTitle: 'الرأي الثاني في سرطان البروستاتا: ما الوثائق التي ترسلها',
        metaDescription:
          'لماذا يفيد الرأي الثاني في سرطان البروستاتا، وما الوثائق المطلوبة فعلًا، ولماذا يجب إرسال صور الرنين المغناطيسي بصيغة DICOM، وما الذي ينبغي أن يقدمه رأي ثانٍ جاد.',
        sections: [
          {
            heading: 'لماذا تطلب رأيًا ثانيًا أصلًا',
            paragraphs: [
              'لسرطان البروستاتا في كثير من الأحيان أكثر من طريق علاجي معقول. فالمراقبة النشطة والجراحة والعلاج الإشعاعي قد تكون كلها مبرَّرة للمريض نفسه، مع اختلاف في الآثار الجانبية وفي طريقة المتابعة.',
              'ولهذا فالرأي الثاني ليس تعبيرًا عن عدم الثقة بطبيبك الحالي، بل وسيلة لفهم أيّ هذه الطرق يناسب أولوياتك أنت.',
              'وهناك سبب فني محدد أيضًا: تصنيف خزعة البروستاتا يقوم على تقدير الطبيب، ومراجعتها من قِبل طبيب أنسجة ثانٍ قد تغيّر الدرجة أحيانًا. وتغيّر الدرجة قد يغيّر التوصية.'
            ]
          },
          {
            heading: 'الوثائق التي تهم فعلًا',
            paragraphs: [
              'سجل تحاليل PSA على مدى الزمن، لا القيمة الأخيرة فقط. فاتجاه التغير يحمل معلومات لا تحملها قراءة واحدة.',
              'تقرير الخزعة كاملًا: عدد العينات المأخوذة، وعدد المصاب منها، ومواضعها، ودرجة غليسون أو مجموعة ISUP لكل عينة، ونسبة الإصابة في كل منها.',
              'تقرير الرنين المغناطيسي مع تقييم PI-RADS — والأهم من ذلك الصور نفسها.',
              'أيّ فحوص أُجريت لتحديد مرحلة المرض.',
              'نتيجة الفحص الشرجي بالإصبع.',
              'أمراضك الأخرى وقائمة أدويتك وعمرك. وهذه ليست تفاصيل ثانوية، بل تؤثر مباشرة في اختيار العلاج المناسب.'
            ]
          },
          {
            heading: 'أرسل الرنين المغناطيسي بصيغة DICOM لا بصورة',
            paragraphs: [
              'هذا أكثر سبب شائع يجعل الرأي الثاني محدود الفائدة. فلقطة الشاشة، أو صورة الهاتف لشاشة، أو ملف PDF فيه بضع مقاطع مطبوعة، لا تسمح بمراجعة الصور مراجعة صحيحة.',
              'اطلب من المستشفى نسخة من الفحص على قرص مدمج أو ملفات بصيغة DICOM. ومعظم أقسام الأشعة توفر ذلك عند الطلب، وكثير منها يعطي رابطًا للتنزيل. وحجم الملفات كبير، وهذا طبيعي.',
              'ومن دون الصور لا يستطيع المراجع إلا التعليق على تقرير كتبه غيره. وهذا ليس رأيًا مستقلًا، بل إعادة صياغة.'
            ]
          },
          {
            heading: 'شرائح الفحص النسيجي',
            paragraphs: [
              'إذا أردت أن تُراجَع الدرجة نفسها بدل أن تُقبل كما كُتبت، فيجب أن تكون الشرائح أو القوالب النسيجية متاحة لطبيب الأنسجة. وعادةً يستطيع المستشفى تسليمها أو إرسال صور رقمية لها.',
              'وهذه الخطوة تستغرق وقتًا أطول من إرسال التقارير، فابدأ بها مبكرًا إن أردت إدراجها. وهي تستحق النظر خصوصًا عندما تقع الدرجة على حدٍّ فاصل، حيث يغيّر تعديلُها التوصيةَ.'
            ]
          },
          {
            heading: 'ما الذي ينبغي أن يقوله لك رأي ثانٍ جاد',
            paragraphs: [
              'في أيّ فئة خطورة يقع مرضك، ولماذا.',
              'أيّ الخيارات العلاجية معقولة في حالتك — بما في ذلك المراقبة النشطة حين تنطبق.',
              'ماذا يعني كل خيار بالنسبة للتحكم في البول وللوظيفة الجنسية، بكلام محدد لا بعبارات طمأنة عامة.',
              'ما المتابعة التي يتطلبها كل خيار، ولأيّ مدة.',
              'وإذا أوصى بالجراحة: هل يُرجَّح أن يكون الحفاظ على الأعصاب ممكنًا، في جهة واحدة أم في الجهتين، وما الذي قد يغيّر هذه الخطة أثناء العملية.',
              'والرد الذي يوصي بعلاج واحد من دون مناقشة البدائل ليس رأيًا ثانيًا، بل ردٌّ تسويقي.'
            ]
          },
          {
            heading: 'أسئلة تطرحها بكلماتك',
            paragraphs: [
              'ماذا يحدث لو لم أفعل شيئًا ثلاثة أشهر ريثما أقرر؟ في معظم حالات سرطان البروستاتا يكون الجواب الصادق: لا يتغير شيء جوهري. والطبيب الذي يقول ذلك صريح معك.',
              'بماذا تنصح لو كنتُ أحد أقاربك؟',
              'ما احتمال أن أحتاج إلى علاج إضافي بعد الجراحة؟',
              'ونادرًا ما تكون العجلة مبرَّرة طبيًا في سرطان البروستاتا. فإذا ردّت عيادة على استفسارك بالضغط عليك للحجز سريعًا، فذلك ضغط تجاري لا طبي.'
            ]
          },
          {
            heading: 'كيف تستفيد من الجواب',
            paragraphs: [
              'الرأي الثاني الذي يوافق خطتك الحالية ليس جهدًا ضائعًا؛ فهو يتيح لك المضي بثقة بدل الشك.',
              'وإذا اختلفت الآراء، فاعرض الاختلاف على طبيبك واطلب منه أن يردّ عليه. فالمقصود أن تفهم المنطق وراء كل رأي، لا أن تجمع الآراء حتى تجد ما كنت تأمل سماعه.',
              'ومن حقك أن تتلقى العلاج حيث تختار. والحصول على رأي ثانٍ هنا لا يُلزمك بالعلاج هنا، وأيّ مراجعة تتلقاها يجب أن تُكتب على هذا الأساس.',
              'هذا المقال للتوعية العامة ولا يُغني عن الاستشارة الطبية.'
            ]
          }
        ]
      }
    }
  },
  {
    slug: 'tadayuq-al-ihlil-limatha-la-yakfi-al-shaqq-al-dakhili',
    date: '2026-10-09',
    category: 'reconstructive',
    languages: ['ar'],
    treatmentSlug: 'uretroplasti',
    sources: [
      { label: 'EAU Guidelines on Urethral Strictures — European Association of Urology', url: 'https://uroweb.org/guidelines/urethral-strictures' }
    ],
    i18n: {
      ar: {
        title: 'تضيّق الإحليل: لماذا لا يكفي الشقّ الداخلي؟',
        excerpt:
          'شقّ التضيّق من الداخل يريح بسرعة، لكن ميله إلى العودة كبير. وتكرار هذا الإجراء قد يُصعّب العلاج الحقيقي بدل أن يحلّ المشكلة.',
        metaTitle: 'تضيّق الإحليل: لماذا يعود بعد الشق الداخلي وما هو الإصلاح الدائم',
        metaDescription:
          'ما هو تضيّق الإحليل، وماذا يفعل الشق الداخلي، ولماذا يتكرر، وضرر تكرار الإجراءات، وما هي عملية رأب الإحليل، ومتى يُفضَّل كلٌّ منهما، وما الذي ترسله قبل السفر.',
        sections: [
          {
            heading: 'ما هو تضيّق الإحليل',
            paragraphs: [
              'الإحليل هو القناة التي تنقل البول من المثانة إلى الخارج. وعندما يتكوّن نسيج ندبي في جزء منها فيضيّقها، يُسمّى ذلك تضيّق الإحليل.',
              'تبدأ الأعراض ببطء ولا ينتبه إليها كثير من المرضى مدة طويلة: ضعف تدفق البول أو تشتته، وصعوبة بدء التبول، والإحساس بعدم إفراغ المثانة كاملًا، وكثرة التبول، والتهابات المسالك البولية المتكررة.',
              'وسببه في الغالب قسطرة سابقة، أو إجراء أُجري عبر المجرى البولي، أو إصابة، أو التهاب. وأحيانًا لا يُعرف له سبب واضح.'
            ]
          },
          {
            heading: 'ماذا يفعل الشق الداخلي',
            paragraphs: [
              'الشق الداخلي للإحليل يعني الدخول عبر المجرى البولي وقطع المنطقة الضيقة من الداخل بشفرة أو بالليزر. الإجراء قصير، ومن دون جرح خارجي، ويشعر المريض غالبًا براحة سريعة.',
              'وهذه الراحة السريعة هي ما يجعل الطريقة مغرية. لكن هنا فرقًا جوهريًا: الشق الداخلي لا يُزيل التضيّق، بل يفتحه فقط. والنسيج الندبي يبقى في مكانه.'
            ]
          },
          {
            heading: 'لماذا يتكرر',
            paragraphs: [
              'سبب التضيّق هو النسيج الندبي، وعندما يُقطع هذا النسيج يرمّم الجسم المكان بنسيج ندبي جديد. أي أن عملية الالتئام نفسها هي التي تُعيد تكوين التضيّق.',
              'ولهذا فعودة التضيّق بعد الشق الداخلي ليست أمرًا مفاجئًا. ويكون الميل إلى العودة أوضح في التضيّقات الطويلة، وحين يمتد النسيج الندبي إلى الأنسجة المحيطة، ولدى من خضعوا لإجراءات سابقة.',
              'والشق الداخلي الأول خيار معقول في تضيّق قصير وموضعه مناسب. المشكلة هي تكرار الإجراء نفسه مرة بعد مرة.'
            ]
          },
          {
            heading: 'الضرر الحقيقي لتكرار الإجراءات',
            paragraphs: [
              'كل إجراء شق أو توسيع يُكوّن نسيجًا ندبيًا جديدًا. فبدل أن يقصر التضيّق مع الوقت يطول، وتتصلّب الأنسجة المحيطة به.',
              'والنتيجة العملية أنه حين يحتاج المريض لاحقًا إلى إصلاح دائم، يعمل الجراح في أنسجة أسوأ حالًا. أي أن تكرار الشق الداخلي لا يفشل فقط، بل قد يُصعّب العلاج الحقيقي نفسه.',
              'ولذلك فإن منطق «نفتحه مرة أخرى، لعلّه ينجح هذه المرة» لا يكون في مصلحة المريض بعد حدٍّ معين.'
            ]
          },
          {
            heading: 'القسطرة الذاتية',
            paragraphs: [
              'قد يُنصح المريض بعد الشق الداخلي بإدخال قسطرة لنفسه على فترات منتظمة لتأخير عودة التضيّق.',
              'وقد يساعد ذلك على بقاء القناة مفتوحة، لكنه ليس حلًّا دائمًا، ويمثّل عبئًا على المريض. ولا ينبغي أن يُقدَّم على أنه طريقة يُتوقع الاستمرار عليها سنوات طويلة.'
            ]
          },
          {
            heading: 'رأب الإحليل: ما هو ولماذا يختلف',
            paragraphs: [
              'رأب الإحليل هو إصلاح التضيّق لا فتحه. فإما أن يُستأصل الجزء الضيق ويُوصَل الطرفان السليمان، وإما أن تُوسَّع القناة باستخدام رقعة من نسيج آخر.',
              'وأكثر ما يُستخدم رقعةً نسيجٌ من باطن الفم، لأنه معتاد على البيئة الرطبة، ولأن مكان أخذه يلتئم بسرعة.',
              'ورأب الإحليل عملية أكبر وتعافيها أطول، وتبقى القسطرة بعدها فترة. لكنه في المقابل الطريقة الأبرز من حيث الحصول على نتيجة دائمة مقارنة بالشق الداخلي.'
            ]
          },
          {
            heading: 'أيّ إجراء لأيّ مريض',
            paragraphs: [
              'في التضيّق القصير الذي يظهر لأول مرة وموضعه مناسب، يمكن تجربة الشق الداخلي.',
              'أما في التضيّقات الطويلة، أو المتعددة المواضع، أو التي عادت بعد إجراءات سابقة، فيكون رأب الإحليل هو الخيار الأبرز.',
              'والنقطة الأهم هي التوقيت: فبدل قضاء سنوات في إجراءات متكررة، يكون طرح الإصلاح الدائم مبكرًا لدى المريض المناسب أفضل للأنسجة.',
              'ولا تتردد في أن تسأل طبيبك: «كم طول التضيّق لديّ، وأين موضعه، وإذا عاد بعد هذا الإجراء فما الخطوة التالية؟» فمعرفة الجواب تساعدك على إدارة علاجك.'
            ]
          },
          {
            heading: 'إذا تكرر التضيّق لديك: ما الذي ترسله قبل السفر',
            paragraphs: [
              'إذا كنت قد خضعت لعدة إجراءات شق أو توسيع في بلدك، فالمعلومات التالية هي التي تحدد الخطة فعلًا، ويمكن تقييمها قبل أن تسافر إلى أيّ مكان.',
              'تقارير العمليات السابقة: نوع الإجراء، وطول الجزء المعالَج، وإن كان قد أُجري رأب سابق فمصدر الرقعة المستخدمة.',
              'عدد الإجراءات الداخلية من شق أو توسيع، وتواريخها. فهذا أكثر ما يحوّل حالة بسيطة إلى حالة معقدة.',
              'تصوير حديث للإحليل يُظهر موضع التضيّق وطوله، وقياسات تدفق البول والبول المتبقي بعد التبول، وهل تستخدم القسطرة الذاتية وكم مرة.',
              'وكن واقعيًا: إذا سبق أن أُجري لك رأب ثم عاد التضيّق، فنسبة نجاح الإصلاح الثاني أقل عمومًا من الأول، وكلما زادت الإجراءات السابقة كان ذلك أوضح. وينبغي أن يُناقَش معك قبل العملية أيّ أثر محتمل على القذف أو الانتصاب بحسب موضع الإصلاح.',
              'هذا المقال للتوعية العامة ولا يُغني عن الاستشارة الطبية.'
            ]
          }
        ]
      }
    }
  },
  {
    slug: 'al-siyaha-al-ilajiya-fi-al-masalik-al-bawliya-ma-yajib-fahsuh',
    date: '2026-10-09',
    category: 'healthTourism',
    languages: ['ar'],
    sources: [
      { label: 'EAU Guidelines on Prostate Cancer — European Association of Urology', url: 'https://uroweb.org/guidelines/prostate-cancer' }
    ],
    i18n: {
      ar: {
        title: 'السياحة العلاجية في جراحة المسالك البولية: ما الذي يجب أن تتحقق منه',
        excerpt:
          'السفر للجراحة قد يكون قرارًا معقولًا تمامًا وقد يكون مخاطرة حقيقية، والفرق في الغالب في طريقة تنظيم الرعاية لا في المكان الذي تُجرى فيه.',
        metaTitle: 'هل السياحة العلاجية في المسالك البولية آمنة؟ ما الذي تتحقق منه',
        metaDescription:
          'أين يكمن الخطر الحقيقي في العلاج بالخارج، وكيف تتحقق من الجراح والمستشفى، وسؤال المضاعفات، والموافقة واللغة، وسجلاتك الطبية، وعلامات التحذير قبل الحجز.',
        sections: [
          {
            heading: 'ما الذي يجعلها خطرة فعلًا',
            paragraphs: [
              'نادرًا ما يكون الخطر في العلاج بالخارج هو العملية نفسها. فمعايير الجراحة في مستشفى مجهّز جيدًا ومع جراح متمرّس لا تتغير عند حدود دولة.',
              'الخطر يكمن في البنية المحيطة بالعملية: هل قُيِّمت حالتك تقييمًا صحيحًا قبلها؟ هل هناك جهة مسؤولة إذا ظهرت مضاعفة بعد عودتك؟ وهل المتابعة حقيقية أم مجرد وعد؟',
              'وعند النظر إليها بهذه الطريقة، تصبح الأسئلة التي ينبغي طرحها محددة، لا مجرد طمأنة عامة.'
            ]
          },
          {
            heading: 'تحقق من الجراح لا من العلامة التجارية',
            paragraphs: [
              'اسأل عن اسم الجراح وتخصصه، وتحقق منه في سجلّ الجهة الرسمية المختصة في بلده.',
              'واسأل هل سيُجري هذا الجراح عمليتك بنفسه، وهل سيُوكَل أيّ جزء منها إلى غيره. وهذا سؤال معقول يجب أن يتلقى جوابًا مباشرًا.',
              'واسأل كم عملية من نوع عمليتك تحديدًا يُجري، وخلال أيّ فترة. وكن متشككًا في الأرقام الكبيرة المستديرة التي لا تُذكر معها مدة زمنية — فادعاءات كهذه سهلة القول ومستحيلة التحقق.',
              'وكن متشككًا كذلك في صيغ التفضيل. فعبارات مثل «الرائد» و«الأفضل في المنطقة» و«المشهور عالميًا» مصطلحات تسويقية لا مؤهلات.'
            ]
          },
          {
            heading: 'تحقق من المستشفى لا من صور الموقع',
            paragraphs: [
              'في أيّ مستشفى ستكون فعلًا؟ باسمه وعنوانه الذي يمكنك البحث عنه.',
              'هل فيه وحدة عناية مركزة في المبنى نفسه؟ ففي جراحات المسالك البولية الكبيرة ليس هذا من الكماليات.',
              'هل فيه بنك دم، وتخصصات أخرى — كأمراض القلب والجراحة العامة — متاحة إذا حدث أمر غير متوقع؟',
              'الصور التسويقية تُظهر صالات الاستقبال. والأسئلة أعلاه تتعلق بما يوجد خلفها.'
            ]
          },
          {
            heading: 'سؤال المضاعفات',
            paragraphs: [
              'هذا هو السؤال الذي يميّز الجهات الجادة عن غيرها. اسأل كتابةً: إذا حدثت مضاعفة تتطلب إقامة أطول أو إجراءً إضافيًا، فماذا يحدث طبيًا، ومن يتحمّل التكلفة؟',
              'واسأل ماذا يحدث إذا ظهرت مضاعفة بعد عودتك إلى بلدك. بمن تتصل، وما سرعة الرد، وهل يمكنهم التواصل مع طبيبك المحلي؟',
              'العيادة التي تجيب عن هذه الأسئلة كتابةً عيادة فكّرت فيها. والعيادة التي تتهرّب منها بعبارات الطمأنة أخبرتك بشيء مهم.'
            ]
          },
          {
            heading: 'الموافقة واللغة',
            paragraphs: [
              'يجب أن تتلقى معلومات مكتوبة عن العملية وبدائلها ومخاطرها، بلغة تفهمها فعلًا — بالعربية أو بلغة تجيدها — مع وقت كافٍ لقراءتها قبل أن يُطلب منك التوقيع.',
              'والموافقة التي تُؤخذ صباح يوم العملية، بلغة تقرؤها بصعوبة، ليست موافقة حقيقية.',
              'وإذا احتجت إلى مترجم، فتأكد هل يُوفَّر مترجم طبي، بدل الاعتماد على أحد أفراد العائلة أو على تطبيق ترجمة في نقاش يتعلق بمخاطر جراحية. فالقريب الحريص قد يُخفّف دون قصد ما يقوله الطبيب، والمخاطر يجب أن تصلك كما قيلت.'
            ]
          },
          {
            heading: 'سجلاتك وبياناتك',
            paragraphs: [
              'من حقك الحصول على نسخ من تقرير العملية وتقرير الأنسجة وملخص الخروج من المستشفى. واسأل هل ستُعطى لك بالإنجليزية إلى جانب اللغة المحلية.',
              'فطبيبك في بلدك سيحتاج إليها. والمريض الذي يعود من دون وثائق يصعب الاعتناء به بأمان.',
              'واسأل أيضًا كيف تُحفظ سجلاتك الطبية وصورك ومن يطّلع عليها. فإرسال الفحوص والتقارير إلى عيادة في الخارج نقلٌ لبيانات شخصية حساسة، ومن حقك أن تعرف كيف تُعامَل.'
            ]
          },
          {
            heading: 'علامات تحذيرية',
            paragraphs: [
              'الضغط عليك لتقرر بسرعة، أو خصم ينتهي في موعد محدد. فالجراحة ليست سلعة لها موسم تخفيضات.',
              'سعر يُعطى قبل أن يطّلع أحد على تقاريرك.',
              'نتائج مضمونة. فلا جراح صادق يضمن نتيجة.',
              'صور المرضى وشهاداتهم المستخدمة دليلًا على المهارة، خصوصًا حيث تقيّد الأنظمة المحلية استخدامها.',
              'التردد في تسمية المستشفى، أو في تأكيد اسم الجراح الذي سيُجري العملية كتابةً.',
              'العجز عن تحديد من المسؤول عن رعايتك بوضوح بعد مغادرتك البلد.'
            ]
          },
          {
            heading: 'قبل أن تحجز الطيران',
            paragraphs: [
              'أخبر طبيبك في بلدك بما تخطط له. فستحتاج إليه بعد العودة، ويمكنه أن ينبّه إلى مشكلات في الخطة ما دام هناك وقت لتغييرها.',
              'وإذا كان علاجك على نفقة جهة حكومية أو جهة عمل، فلها عادةً إجراءات موافقة ووثائق خاصة بها. أنجزها أولًا، ولا تحجز قبل أن تتسلّم الموافقة مكتوبة.',
              'وتحقق هل يغطي تأمين السفر الجراحة المخطط لها في الخارج. فمعظم الوثائق لا تغطيها، وهذا يفاجئ الناس في أسوأ وقت ممكن.',
              'ورتّب المتابعة في بلدك قبل أن تغادر، لا بعد أن تعود.',
              'السفر للعلاج خيار مشروع يتخذه كثيرون كل عام. وجعله آمنًا يعتمد في الغالب على طرح أسئلة غير لامعة والإصرار على أجوبة مكتوبة.',
              'هذا المقال للتوعية العامة ولا يُغني عن الاستشارة الطبية.'
            ]
          }
        ]
      }
    }
  },
  {
    slug: 'kam-tabqa-fi-turkiya-baad-jirahat-al-brustata',
    date: '2026-10-09',
    category: 'healthTourism',
    languages: ['ar'],
    treatmentSlug: 'robotik-prostatektomi',
    sources: [
      { label: 'EAU Guidelines on Prostate Cancer — European Association of Urology', url: 'https://uroweb.org/guidelines/prostate-cancer' }
    ],
    i18n: {
      ar: {
        title: 'كم تبقى في تركيا بعد جراحة البروستاتا؟',
        excerpt:
          'الجواب الصادق: مدة أطول مما يتوقع معظم المرضى، والسبب هو القسطرة. وحجز رحلة العودة مبكرًا هو أكثر أخطاء التخطيط شيوعًا.',
        metaTitle: 'كم تبقى في تركيا بعد جراحة البروستاتا: خطة واقعية',
        metaDescription:
          'لماذا تحدد القسطرة مدة إقامتك، ولماذا لا تسافر في اليوم التالي لإزالتها، وخطر الجلطات والسفر جوًا، وجدول واقعي، وتقرير الأنسجة، والمتابعة بعد العودة.',
        sections: [
          {
            heading: 'لماذا تحدد القسطرة الجدول الزمني',
            paragraphs: [
              'بعد استئصال البروستاتا تُوصَل المثانة بالإحليل من جديد. وهذا الوصل يحتاج إلى وقت ليلتئم، والقسطرة تُبقي المثانة مُفرَغة خلال ذلك.',
              'فالقسطرة ليست إزعاجًا يمكن تقصيره ليوافق موعد الطائرة. بل تبقى مدة محددة، وتُزال هنا حتى يتولى الفريق الذي أجرى العملية أيَّ صعوبة في التبول بعدها.',
              'وهذا العامل وحده يحدد معظم مدة إقامتك، وكل شيء آخر يُرتَّب حوله.'
            ]
          },
          {
            heading: 'لا تسافر في اليوم التالي لإزالة القسطرة',
            paragraphs: [
              'عدد قليل من المرضى لا يستطيعون التبول بعد إزالة القسطرة، ويحتاجون إلى إعادة وضعها مؤقتًا. وهذا أمر يُدار بسهولة حين تكون على مسافة قصيرة من المستشفى، ومشكلة حقيقية حين تكون في المطار.',
              'فاترك فترة مراجعة قصيرة على الأقل بعد الإزالة. والغاية من هذه الأيام ليست الراحة، بل أن تبقى المشكلة القابلة للحل قابلةً للحل.'
            ]
          },
          {
            heading: 'خطر الجلطات والسفر جوًا',
            paragraphs: [
              'جراحة الحوض والجلوس الطويل من دون حركة يزيد كلٌّ منهما خطر تكوّن الجلطات في الساقين، وقد تنتقل إلى الرئتين. والرحلة الجوية، ولو كانت بضع ساعات فقط، تجمع بين الأمرين.',
              'ولهذا يُعطى الإذن بالسفر جوًا لكل مريض على حدة لا بقاعدة ثابتة. فهو يعتمد على نوع العملية، وقدرتك على الحركة، ووزنك، وأمراضك الأخرى، وأيّ تاريخ سابق للجلطات.',
              'وحين تسافر، اتبع التعليمات التي تُعطى لك بشأن المشي في الممر، وتمارين الساقين، وشرب السوائل، والجوارب الضاغطة. وإذا وُصف لك دواء لتقليل خطر الجلطات فتناوله كما وُصف — بما في ذلك بعد عودتك.',
              'واطلب المساعدة الطبية فورًا عند ألم الربلة أو تورمها، أو ألم الصدر، أو ضيق النفس، سواء كنت لا تزال في تركيا أو عدت إلى بلدك.'
            ]
          },
          {
            heading: 'صورة واقعية للأيام',
            paragraphs: [
              'الوصول والتقييم: تحاليل الدم، ومراجعة طبيب التخدير، وأيّ تصوير يحتاج إلى إعادة. واترك يومًا أو يومين قبل العملية بدل الوصول في الليلة السابقة لها.',
              'العملية والإقامة في المستشفى: الجراحة الروبوتية تتطلب في العادة إقامة قصيرة.',
              'فترة القسطرة: تقضي معظمها في الفندق. تستطيع الحركة والمشي، لكن لا أكثر من ذلك بكثير.',
              'إزالة القسطرة والمراجعة: بما في ذلك التأكد من أنك تتبول بشكل كافٍ.',
              'ثم رحلة العودة — وليس قبل ذلك.'
            ]
          },
          {
            heading: 'خطّط لاحتمال البقاء مدة أطول',
            paragraphs: [
              'احجز تذكرة عودة مرنة أو قابلة للتغيير. فتكلفة المرونة صغيرة مقارنة بتكلفة تغيير الحجز في اللحظة الأخيرة، وأصغر بكثير من تكلفة السفر قبل الأوان.',
              'وتحقق هل يمكن تمديد إقامتك في السكن، واسأل العيادة ماذا يحدث إن لم يكن ذلك ممكنًا.',
              'وتأكد أن تأشيرتك أو مدة الإقامة المسموح بها تغطي أيامًا أكثر مما تخطط لاستخدامه.',
              'واصطحب مرافقًا إن استطعت. فالمساعدة العملية خلال فترة القسطرة تُحدث فرقًا حقيقيًا، ووجود شخص آخر يسمع تعليمات الخروج مفيد.'
            ]
          },
          {
            heading: 'تقرير الأنسجة يصل بعد مغادرتك',
            paragraphs: [
              'تُفحص البروستاتا المستأصلة تحت المجهر، وهذا التقرير هو الذي يحدد هل يُنصح بأيّ علاج إضافي. وفي العادة لا يكون جاهزًا قبل سفرك.',
              'فاتفق قبل مغادرتك على كيفية وصول التقرير إليك، ومن سيشرحه لك، وبأيّ لغة. فتقرير أنسجة يصلك وثيقةً غير مترجمة بلا شرح خاتمة سيئة لعملية أُديرت جيدًا.'
            ]
          },
          {
            heading: 'المتابعة بعد العودة',
            paragraphs: [
              'يُقاس PSA على فترات بعد الجراحة، ونتيجته هي المقياس الأساسي لمعرفة هل سُيطر على السرطان. وفي العادة تُجري هذه التحاليل في بلدك.',
              'فحدّد قبل مغادرتك من يراجع هذه النتائج، وكيف ترسلها، وإلى متى يستمر هذا الترتيب. فوجود شخص مسمّى للتواصل أهم من وعد عام بالدعم.',
              'واتفق كذلك على ما تفعله إذا حدث خطب في بلدك، وأيّ الأعراض تستدعي الذهاب مباشرة إلى قسم الطوارئ المحلي بدل انتظار الرد.',
              'هذا المقال للتوعية العامة ولا يُغني عن الاستشارة الطبية. والجدول الخاص بك يحدده جراحك.'
            ]
          }
        ]
      }
    }
  },
  {
    slug: 'varicocele-and-male-infertility-when-surgery-helps',
    date: '2026-10-09',
    category: 'andrology',
    languages: ['en'],
    treatmentSlug: 'varikosel',
    draft: true,
    sources: [
      { label: 'EAU Guidelines on Sexual and Reproductive Health — European Association of Urology', url: 'https://uroweb.org/guidelines/sexual-and-reproductive-health' }
    ],
    i18n: {
      en: {
        title: 'Varicocele and Male Infertility: When Does Surgery Actually Help?',
        excerpt:
          'Not every man with a varicocele needs an operation, and not every man who has one will become a father. The useful question is which couples surgery can genuinely make a difference for.',
        metaTitle: 'Varicocele and Male Infertility: When Surgery Helps and When It Does Not',
        metaDescription:
          'What a varicocele is, who needs surgery, why both partners must be assessed, microsurgical versus other techniques, when results appear, and what surgery cannot guarantee.',
        sections: [
          {
            heading: 'What a varicocele is, and why it matters',
            paragraphs: [
              'A varicocele is a widening of the veins that drain blood from the testicle — the same process as varicose veins in the legs. It is found in a substantial proportion of men, and most of the time it causes no symptoms at all.',
              'Sperm production is sensitive to heat, which is why the testicles sit outside the body. In a varicocele, blood flow slows and the temperature of the area rises, which can impair sperm production.',
              'The critical point, though, is that a varicocele on its own is not a reason for surgery. A man with no symptoms, a normal semen analysis and no difficulty conceiving does not need any intervention.'
            ]
          },
          {
            heading: 'Who actually needs surgery',
            paragraphs: [
              'Surgery is considered when three things come together: a varicocele that can be felt on examination, abnormal semen parameters, and a couple who have not been able to conceive.',
              'A varicocele that is visible only on ultrasound and cannot be felt on examination is generally not recommended for surgery. Knowing this distinction protects you from an operation you do not need.',
              'Pain can also be a reason: testicular pain that affects daily life, gets worse with standing, and has no other explanation.',
              'In adolescents, a testicle on the side of the varicocele that is clearly smaller than the other is a separate reason for assessment.'
            ]
          },
          {
            heading: 'Infertility is a couple\'s problem',
            paragraphs: [
              'In many countries the investigation starts with the woman alone, and years of her treatment can pass before anyone asks for the man\'s semen analysis. That delay is hard to justify. Assessing the man — a semen analysis and a clinical examination — is simple, and it should happen early, alongside the woman\'s assessment rather than after it.',
              'The reverse applies too. Finding a varicocele should not be where the investigation stops. The regularity of the woman\'s ovulation, the state of her fallopian tubes and her age all directly affect the outcome, and the likely benefit of varicocele surgery cannot be judged without them.',
              'If the woman\'s age is advanced, for example, time becomes an important factor, and moving straight to assisted reproduction may be wiser than waiting for the result of varicocele surgery. That decision is made together with a gynaecologist.'
            ]
          },
          {
            heading: 'The difference between techniques',
            paragraphs: [
              'The aim of varicocele surgery is to tie off the dilated veins while preserving the artery and the lymphatic vessels.',
              'In the microsurgical approach, a microscope is used to magnify the vessels and tell them apart. It is widely preferred because lower rates of recurrence and of fluid collection around the testicle (hydrocele) are reported with it.',
              'Laparoscopic and conventional open techniques are also used. Which one is chosen depends on the varicocele and on the surgeon\'s experience.'
            ]
          },
          {
            heading: 'When results appear',
            paragraphs: [
              'Sperm production runs in a cycle, and new sperm take about three months to form. A semen analysis done immediately after surgery is therefore meaningless.',
              'Change is usually followed with repeat semen analyses from the third month onwards. The wait is hard on couples, but it cannot be avoided.',
              'An improvement in the numbers is not the same as a pregnancy. Sperm count or motility can rise without a pregnancy following, and the reverse is also possible.'
            ]
          },
          {
            heading: 'The honest answer: surgery does not guarantee a pregnancy',
            paragraphs: [
              'Varicocele surgery can improve semen parameters in carefully selected men. Not every man improves, and not every couple whose numbers improve goes on to conceive.',
              'Be cautious of anyone who promises you a definite outcome. Before surgery, it is worth agreeing on the answer to a simple question: what will we count as success?',
              'Varicocele surgery and assisted reproduction are not necessarily alternatives. For some couples, surgery is planned to improve the chances of fertility treatment that follows.'
            ]
          },
          {
            heading: 'After surgery — and if you are travelling for it',
            paragraphs: [
              'Swelling and discomfort in the area can last a few days, and heavy lifting and strenuous activity should be avoided for a period.',
              'Recognised risks include fluid collection around the testicle, recurrence of the varicocele and, rarely, injury to the testicular artery. These should be discussed before surgery, not after it.',
              'If you are travelling for the operation, send a recent semen analysis and your partner\'s fertility assessment before you book, so that whether surgery is worthwhile is decided first. And because the result is judged at three months, agree before you leave who will review your follow-up semen analyses at home, and how you will send them.',
              'This article is general information and does not replace medical advice.'
            ]
          }
        ]
      }
    }
  },
  {
    slug: 'incontinence-after-robotic-prostatectomy-week-by-week',
    date: '2026-10-09',
    category: 'prostate',
    languages: ['en'],
    treatmentSlug: 'robotik-prostatektomi',
    draft: true,
    sources: [
      { label: 'EAU Guidelines on Prostate Cancer — European Association of Urology', url: 'https://uroweb.org/guidelines/prostate-cancer' }
    ],
    i18n: {
      en: {
        title: 'Incontinence After Robotic Prostatectomy: What to Expect, Week by Week',
        excerpt:
          'Leaking urine in the first days after the catheter comes out is expected. The real questions are how long it lasts, what helps it recover, and at what point it needs a further look.',
        metaTitle: 'Incontinence After Robotic Prostatectomy: A Week-by-Week Guide',
        metaDescription:
          'Why leakage happens after prostate removal, what the first days and weeks look like, recovery from three to twelve months, pelvic floor exercises, recovering at home, and when to seek further assessment.',
        sections: [
          {
            heading: 'Why it happens',
            paragraphs: [
              'Two structures keep you continent: an internal sphincter mechanism that runs through the prostate, and an external sphincter muscle just below it. When the prostate is removed for cancer, the internal mechanism goes with it. The external muscle, which used to play a supporting role, now has to do the job on its own.',
              'Leakage after surgery is therefore not a complication. It is an expected transition period while that muscle adapts to its new role, and adaptation takes time.'
            ]
          },
          {
            heading: 'The first days after the catheter comes out',
            paragraphs: [
              'For a few days after the catheter is removed, there may be very little control. Leakage can happen when you stand up, when you cough, or for no obvious reason at all. Pads are needed during this period — something to plan for, not something to be embarrassed about.',
              'Heavy leakage in the first days does not mean that recovery will go badly. There is no direct link between the two.'
            ]
          },
          {
            heading: 'The first four to six weeks',
            paragraphs: [
              'Most men see clear improvement during this period. Dryness at night usually comes first, because pressure inside the abdomen is low when you are lying down. Control during the day, while you are still, comes next.',
              'What recovers last is usually control during effort: coughing, sneezing, lifting and climbing stairs. Knowing this order matters. Once you are dry at night, recovery is on the right track — even if you are still using pads during the day.'
            ]
          },
          {
            heading: 'From three to twelve months',
            paragraphs: [
              'Recovery continues, more slowly, through this period. Many men reach a point around three months where leakage no longer limits daily life, but the process does not stop there; control can keep improving for up to a year.',
              'Not being completely dry at three months is therefore not a sign of failure. The right approach is to keep up the exercises and wait, rather than make a hasty decision.'
            ]
          },
          {
            heading: 'Do pelvic floor exercises actually work?',
            paragraphs: [
              'Yes — provided you are working the right muscle. The most common mistake is to squeeze the abdominal, buttock or thigh muscles, which does nothing useful. The right muscle is the one you tighten when you try to stop the flow of urine.',
              'The exercises are much easier to learn before surgery than after it. If you are travelling for your operation, learn the technique before you travel, while there is time to get it right.',
              'Several short sets spread through the day work better than long, infrequent sessions. Overdoing it is also a mistake: an exhausted muscle does not hold well.'
            ]
          },
          {
            heading: 'Simple things that help day to day',
            paragraphs: [
              'Avoid constipation. Straining increases pressure on the pelvic floor, so fibre and adequate fluids matter.',
              'Excess weight raises pressure inside the abdomen and makes leakage worse. Losing weight during this period makes a measurable difference.',
              'Restricting fluids is a mistake. Drinking too little concentrates the urine, irritates the bladder and makes symptoms worse. Cutting down on caffeine and fizzy drinks, on the other hand, can help.'
            ]
          },
          {
            heading: 'Most of your recovery happens after you get home',
            paragraphs: [
              'The catheter is removed here, but the weeks and months in which continence returns are spent at home. The plan for that period matters as much as the operation.',
              'Pack enough pads for the journey home, and more than you think you will need. A flight or a long transfer is not the moment to run short.',
              'If you can, arrange to see a pelvic floor physiotherapist near home. A specialist can check that you are contracting the right muscle — the single thing that most often goes wrong — and adjust your programme as you improve.',
              'Agree before you leave how your progress will be reviewed, and by whom. A named contact who knows your case is worth more than a general promise of support.'
            ]
          },
          {
            heading: 'When further assessment is needed',
            paragraphs: [
              'If leakage still limits daily life at the end of a year, it is assessed separately. That assessment looks at the type and amount of leakage and at how the bladder behaves.',
              'There are options at that stage, and they are reserved for the exceptions. Trying to decide early, out of worry about what will happen if things do not improve, is unnecessary.',
              'Some symptoms are not part of normal recovery and should be reported straight away: fever, burning when passing urine, being unable to pass urine at all, abdominal swelling, and pain that keeps getting worse. If you are already home, do not wait for a reply to an email — seek care locally.'
            ]
          },
          {
            heading: 'Setting expectations honestly',
            paragraphs: [
              'How quickly control returns varies from man to man. Age, bladder function before surgery, the bladder itself and other medical conditions all play a part. Comparing yourself with another patient\'s timetable is misleading.',
              'Be cautious of any approach that promises you a definite timescale or a definite outcome. What helps is knowing the expected course and following your own progress against it.',
              'This article is general information and does not replace medical advice. For your own situation, speak to the team that performed your operation.'
            ]
          }
        ]
      }
    }
  },
];

/** Yayındaki yazılar — taslaklar hariç. Liste, sitemap ve statik üretim bunu kullanır. */
export const publishedPosts = blogPosts
  .filter((p) => !p.draft)
  .sort((a, b) => (a.date < b.date ? 1 : -1));

/** Slug ile yazı getirir; taslaklar yalnızca includeDrafts ile döner. */
export function getBlogPost(slug: string, includeDrafts = false): BlogPost | undefined {
  const p = blogPosts.find((x) => x.slug === slug);
  if (!p) return undefined;
  if (p.draft && !includeDrafts) return undefined;
  return p;
}

/** Belirli kategorideki yayındaki yazılar. */
export function postsByCategory(category: BlogCategory): BlogPost[] {
  return publishedPosts.filter((p) => p.category === category);
}

/**
 * Yazının yayında olduğu diller. `languages` yoksa tüm diller.
 * `languages` varsa yalnızca o dillerde içerik gerçekten mevcut olanlar —
 * böylece listede görünüp sayfası boş çıkan yazı olmaz.
 */
export function postLocales(post: BlogPost): Locale[] {
  if (!post.languages) return [...locales];
  return post.languages.filter((l) => post.i18n[l]);
}

/** Yazı bu dilde yayında mı? Rota ve liste bunu kullanır. */
export function isPostInLocale(post: BlogPost, locale: Locale): boolean {
  return postLocales(post).includes(locale);
}

/**
 * Bir dilde gösterilecek yazılar. Blog listesi, sitemap ve
 * generateStaticParams bunu kullanır — başka dilin yazısı sızmaz.
 */
export function postsForLocale(locale: Locale): BlogPost[] {
  return publishedPosts.filter((p) => isPostInLocale(p, locale));
}
