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
      de: {
        title: 'Prostatakrebs: Symptome und Behandlungsoptionen',
        excerpt: 'Ein Überblick über die Bedeutung der Früherkennung, den PSA-Test und Behandlungsoptionen einschließlich robotischer Chirurgie.',
        metaTitle: 'Prostatakrebs – Symptome und Behandlungsoptionen',
        metaDescription: 'Ein informativer Leitfaden zu Symptomen von Prostatakrebs, dem PSA-Test, dem Diagnoseprozess und Behandlungsoptionen einschließlich robotischer Prostatektomie.',
        sections: [
          {
            heading: 'Warum verursacht Prostatakrebs früh keine Beschwerden?',
            paragraphs: [
              'Die Prostata liegt unmittelbar unter der Blase und umschließt den Harnkanal. Krebs entsteht meist im ÄUSSEREN Teil der Drüse, fern von diesem Kanal. Deshalb engt er den Harnweg früh nicht ein und verursacht überhaupt keine Beschwerden.',
              'Praktisch heißt das zweierlei: Ein Mann ohne Beschwerden kann Prostatakrebs haben, und bei einem Mann mit Harnbeschwerden ist die Ursache meist NICHT Krebs, sondern eine gutartige Vergrößerung. Harnbeschwerden als Krebswarnung zu deuten ist ebenso falsch wie sich durch ihr Fehlen beruhigen zu lassen.',
              'Früherkennung ist eine Entscheidung über Screening, und diese Entscheidung ist persönlich: Alter, familiäre Belastung, allgemeiner Gesundheitszustand und Lebenserwartung werden gemeinsam abgewogen. Besprechen Sie offen mit Ihrer Ärztin oder Ihrem Arzt, ob Screening für Sie sinnvoll ist.'
            ]
          },
          {
            heading: 'Welche Beschwerden gehören abgeklärt?',
            paragraphs: [
              'Schwächerer Strahl, Startverzögerung, häufiges Wasserlassen und nächtliches Aufstehen sind die häufigsten Harnbeschwerden. Sie sind nicht krebsspezifisch; dieselben Beschwerden treten bei gutartiger Vergrößerung auf.',
              'FOLGENDE BEFUNDE GEHÖREN JEDOCH OHNE VERZÖGERUNG ABGEKLÄRT: Blut im Urin oder im Sperma, neu aufgetretene und anhaltende Knochenschmerzen (besonders Rücken und Hüfte), ungeklärter Gewichtsverlust, Schwäche oder Gefühlsstörungen in den Beinen.',
              'Blut im Urin kann SCHMERZLOS sein; das Fehlen von Schmerzen macht es nicht harmlos. Schmerzlose Hämaturie wird in jedem Alter abgeklärt.'
            ]
          },
          {
            heading: 'Was der PSA-Wert ist — und was nicht',
            paragraphs: [
              'PSA (prostataspezifisches Antigen) ist ein Eiweiß, das Prostatagewebe bildet. Es wird im Blut gemessen und sagt etwas über die Prostata aus — ist aber KEIN KREBSTEST.',
              'PSA kann bei gutartiger Vergrößerung, bei Harnwegsinfekt, bei Prostataentzündung, nach Katheterisierung und manchmal nach Radfahren oder Geschlechtsverkehr steigen. Ein hoher Wert bedeutet nicht „es liegt Krebs vor", ein normaler Wert schließt Krebs nicht vollständig aus.',
              'EIN SEHR OFT ÜBERSEHENER PUNKT: Medikamente, die die Prostata verkleinern (5-Alpha-Reduktase-Hemmer), HALBIEREN den PSA-Wert etwa. Sagen Sie nicht, dass Sie ein solches Präparat nehmen, kann ein eigentlich auffälliger Wert als normal gelesen werden. Geben Sie diese Information bei jeder Messung an.',
              'Ein einzelner PSA-Wert genügt meist nicht. Sein Verlauf über die Zeit, sein Verhältnis zum Prostatavolumen und der Tastbefund werden gemeinsam beurteilt.'
            ]
          },
          {
            heading: 'Diagnostik: erst Bildgebung, dann Biopsie',
            paragraphs: [
              'Bei erhöhtem PSA oder auffälligem Tastbefund ist der erste Schritt heute meist keine Biopsie, sondern eine multiparametrische MRT der Prostata. Sie zeigt, ob ein auffälliges Areal besteht, und wohin die Biopsie gezielt werden soll.',
              'Diese Reihenfolge hat zwei Vorteile: Eine unnötige Biopsie lässt sich vermeiden, und wenn biopsiert wird, dann an der richtigen Stelle. „Erst MRT" schützt den Patienten vor zufälligem Stechen.',
              'Ist eine Biopsie nötig, muss die Urinkultur vorher unauffällig sein. Blut im Urin und im Sperma für eine Weile danach ist zu erwarten; Fieber und Schüttelfrost sind es nicht und erfordern sofortigen Kontakt.'
            ]
          },
          {
            heading: 'Was die Zahl im Pathologiebefund bedeutet',
            paragraphs: [
              'Wird Krebs gefunden, gibt die Pathologie an, wie stark sich die Zellen verändert haben — als Grad (Gleason-Score und die zugehörige ISUP-Gradgruppe). Dieser Grad zeigt, wie aktiv sich die Erkrankung zu verhalten neigt.',
              'Niedriggradige Erkrankung in wenigen Stanzen bei niedrigem PSA ist nicht dasselbe Bild wie eine hochgradige Erkrankung und wird nicht gleich behandelt. „Prostatakrebs" sollte deshalb nicht wie eine einzige Krankheit besprochen werden.',
              'Verstehen Sie Ihren Befund nicht, lassen Sie ihn sich erklären. Ohne zu wissen, in welchem Grad Sie sind, können Sie die Optionen nicht vergleichen.'
            ]
          },
          {
            heading: 'Behandlungsoptionen',
            paragraphs: [
              'DIE AKTIVE ÜBERWACHUNG ist bei Niedrigrisiko-Erkrankung eine legitime Option und bedeutet nicht, „die Behandlung abzulehnen". Die Erkrankung wird mit regelmäßigem PSA, Untersuchung, MRT und bei Bedarf erneuter Biopsie eng verfolgt; bei Zeichen eines Fortschreitens wird behandelt. Ziel ist, die Nebenwirkungen von Operation oder Bestrahlung nicht ohne Not zu erleben.',
              'DIE OPERATION (radikale Prostatektomie) entfernt die gesamte Prostata und erfolgt heute häufig robotisch assistiert. Das entfernte Gewebe geht in die Pathologie; so wird die tatsächliche Ausdehnung sichtbar.',
              'DIE STRAHLENTHERAPIE verfolgt bei ausgewählten Patienten ein ähnliches Ziel wie die Operation und kann mit einer Hormontherapie kombiniert werden.',
              'DIE HORMONTHERAPIE ist für sich genommen kein heilendes Verfahren; sie wird im fortgeschrittenen Stadium oder ergänzend zur Bestrahlung eingesetzt.',
              'Welches Vorgehen gewählt wird, hängt von Grad und Ausdehnung, Ihrem Alter, Ihren Begleiterkrankungen und Ihren eigenen Prioritäten ab. Kein Verfahren ist für alle „das beste".'
            ]
          },
          {
            heading: 'Ehrliche Erwartungen',
            paragraphs: [
              'Nach einer Prostataoperation tritt kein Sperma mehr nach außen; ein Kind auf natürlichem Weg zu zeugen ist nicht möglich. Besteht Kinderwunsch, sagen Sie es VOR der Operation.',
              'Die Erektionsfähigkeit kehrt auch bei Nervenerhalt nicht sicher zurück; die Erholung kann Monate dauern und hängt von Ihrem Zustand vor der Operation ab.',
              'Harnverlust ist in den ersten Wochen häufig und nimmt bei den meisten Männern über Monate deutlich ab. Das Beckenbodentraining VOR der Operation zu erlernen erleichtert diese Zeit.',
              'DER PATHOLOGIEBEFUND KANN SCHLECHTER AUSFALLEN ALS ERWARTET. Dass nach der Operation eine weitere Behandlung (Bestrahlung oder Hormone) nötig wird, bedeutet kein Versagen; es folgt daraus, dass die wahre Ausdehnung erst im entfernten Gewebe sichtbar wird.'
            ]
          },
          {
            heading: 'Fragen, die Sie stellen können',
            paragraphs: [
              'Welchen Grad und welche Risikogruppe hat meine Erkrankung? Ist die aktive Überwachung für mich eine Option, und wenn nicht, warum nicht?',
              'Worin liegt der konkrete Vorteil des vorgeschlagenen Verfahrens für mich, und warum treten die anderen Optionen zurück?',
              'Wenn ich operiert werde: Welche individuelle Erwartung besteht für Kontinenz und Erektion, und worauf stützt sie sich?',
              'Wie wahrscheinlich ist bei mir eine weitere Behandlung nach der Operation, und wie wird das überwacht?',
              'Wie sieht mein Nachsorgeplan aus: welche Untersuchung, wie oft, und wer befundet sie?'
            ]
          },
          {
            heading: 'Häufige Irrtümer',
            paragraphs: [
              '„Mein PSA ist normal, also habe ich keinen Krebs." Nicht richtig. Ein normaler Wert schließt Krebs nicht vollständig aus; Tastbefund und Risikofaktoren zählen ebenfalls.',
              '„Mein PSA ist hoch, also habe ich Krebs." Auch nicht richtig. Infekt, gutartige Vergrößerung und Entzündung erhöhen den Wert. Der erste Schritt ist meist eine erneute Messung und Beurteilung.',
              '„Eine Biopsie streut den Krebs." Diese Sorge wird oft geäußert, doch es gibt keinen Beleg dafür. Das eigentliche Risiko ist, die notwendige Biopsie nicht zu machen.',
              '„Nach der Operation ist alles vorbei." Beim Prostatakrebs geht die Nachsorge nach der Operation weiter. PSA wird regelmäßig gemessen; das ist kein Misstrauen, sondern sachgerechte Betreuung.',
              '„Aktive Überwachung heißt nichts tun." Nein. Sie ist ein Programm: PSA in festen Abständen, Untersuchung, Bildgebung und bei Bedarf Biopsie. Wer nicht zur Nachsorge kommt, für den ist sie nicht geeignet.'
            ]
          },
          {
            heading: 'Wichtiger Hinweis',
            paragraphs: [
              'Dieser Beitrag dient der allgemeinen Information und ersetzt keine ärztliche Beratung. Prostatakrebs ist keine einheitliche Erkrankung; Entscheidungen sind individuell und erfordern eine ärztliche Untersuchung.',
              'Fieber mit Flankenschmerz, Unvermögen zu urinieren oder Schwäche beziehungsweise Gefühlsverlust in den Beinen erfordern eine DRINGENDE Abklärung.'
            ]
          }
        ]
      },
      ru: {
        title: 'Рак простаты: симптомы и варианты лечения',
        excerpt: 'Обзор важности раннего выявления, теста PSA и вариантов лечения, включая роботическую хирургию.',
        metaTitle: 'Симптомы рака простаты и варианты лечения',
        metaDescription: 'Информативное руководство по симптомам рака простаты, тесту PSA, процессу диагностики и вариантам лечения, включая роботическую простатэктомию.',
        sections: [
          {
            heading: 'Почему рак простаты на ранней стадии не даёт симптомов?',
            paragraphs: [
              'Простата расположена сразу под мочевым пузырём и охватывает мочеиспускательный канал. Рак чаще всего начинается в НАРУЖНОЙ части железы, вдали от этого канала. Поэтому на ранней стадии он не сдавливает мочевые пути и вовсе не вызывает жалоб.',
              'На практике это означает два вывода: у мужчины без жалоб может быть рак простаты, а у мужчины с мочевыми жалобами причина обычно НЕ рак, а доброкачественное увеличение. Считать мочевые жалобы предвестником рака так же неверно, как успокаиваться из-за их отсутствия.',
              'Раннее выявление — это решение о скрининге, и решение это личное: вместе взвешивают возраст, семейный анамнез, общее состояние здоровья и ожидаемую продолжительность жизни. Прямо обсудите с врачом, показан ли скрининг именно вам.'
            ]
          },
          {
            heading: 'Какие симптомы требуют обследования?',
            paragraphs: [
              'Ослабление струи, затруднённое начало, учащённое мочеиспускание и ночные подъёмы — самые частые мочевые жалобы. Они не специфичны для рака; те же жалобы бывают при доброкачественном увеличении.',
              'ОДНАКО СЛЕДУЮЩИЕ ПРИЗНАКИ НУЖНО ОБСЛЕДОВАТЬ БЕЗ ОТЛАГАТЕЛЬСТВ: кровь в моче или сперме, впервые возникшая и не проходящая боль в костях (особенно в пояснице и бёдрах), необъяснимая потеря веса, слабость или нарушение чувствительности в ногах.',
              'Кровь в моче может быть БЕЗБОЛЕЗНЕННОЙ; отсутствие боли не делает её незначимой. Безболезненная гематурия обследуется в любом возрасте.'
            ]
          },
          {
            heading: 'Что такое ПСА и чем он не является',
            paragraphs: [
              'ПСА (простатспецифический антиген) — белок, вырабатываемый тканью простаты. Его измеряют в крови, и он сообщает нечто о простате, — но ЭТО НЕ АНАЛИЗ НА РАК.',
              'ПСА может повышаться при доброкачественном увеличении, при инфекции мочевых путей, при воспалении простаты, после катетеризации, а иногда после езды на велосипеде или полового акта. Высокий ПСА не значит «рак есть», а нормальный не исключает его полностью.',
              'ОЧЕНЬ ЧАСТО УПУСКАЕМЫЙ МОМЕНТ: препараты, уменьшающие простату (ингибиторы 5-альфа-редуктазы), снижают ПСА примерно ВДВОЕ. Если вы не скажете, что принимаете такой препарат, значение, требующее внимания, могут прочесть как нормальное. Сообщайте об этом при каждом измерении.',
              'Одного значения ПСА обычно недостаточно. Вместе оценивают его динамику во времени, отношение к объёму железы и данные осмотра.'
            ]
          },
          {
            heading: 'Диагностика: сначала визуализация, потом биопсия',
            paragraphs: [
              'При повышенном ПСА или подозрительных данных осмотра первым шагом теперь обычно служит не биопсия, а мультипараметрическая МРТ простаты. Она показывает, есть ли подозрительная зона, и если да — куда направить биопсию.',
              'У такого порядка два преимущества: можно избежать ненужной биопсии, а при её необходимости взять материал из нужного места. Подход «сначала МРТ» ограждает пациента от случайных вколов.',
              'Если биопсия нужна, посев мочи перед ней должен быть чистым. Кровь в моче и сперме какое-то время после — ожидаемое явление; лихорадка и озноб — нет, и требуют немедленного обращения.'
            ]
          },
          {
            heading: 'Что означает число в гистологическом заключении?',
            paragraphs: [
              'Если рак найден, патолог указывает степень изменения клеток в виде градации (сумма Глисона и соответствующая группа ISUP). Эта степень показывает, насколько активно болезнь склонна себя вести.',
              'Низкая степень в нескольких столбиках при низком ПСА — не та же картина, что высокая степень, и лечится она иначе. Поэтому о «раке простаты» не следует говорить как об одной болезни.',
              'Если вы не понимаете своё заключение, попросите объяснить. Не зная своей степени, вы не сможете сравнивать варианты лечения.'
            ]
          },
          {
            heading: 'Варианты лечения',
            paragraphs: [
              'АКТИВНОЕ НАБЛЮДЕНИЕ — правомерный вариант при болезни низкого риска, и это не «отказ от лечения». Болезнь ведут вплотную: регулярный ПСА, осмотр, МРТ и при необходимости повторная биопсия; при признаках прогрессирования переходят к лечению. Цель — не переносить побочные эффекты операции или облучения без нужды.',
              'ОПЕРАЦИЯ (радикальная простатэктомия) удаляет всю простату и сегодня нередко выполняется с роботической ассистенцией. Удалённая ткань направляется на гистологию, и так становится видна истинная распространённость болезни.',
              'ЛУЧЕВАЯ ТЕРАПИЯ у отобранных пациентов преследует сходную с операцией цель и может сочетаться с гормональной терапией.',
              'ГОРМОНАЛЬНАЯ ТЕРАПИЯ сама по себе не является излечивающим методом; её применяют на поздних стадиях или в дополнение к облучению.',
              'Выбор зависит от степени и распространённости болезни, вашего возраста, сопутствующих заболеваний и ваших собственных приоритетов. Ни один метод не является «лучшим» для всех.'
            ]
          },
          {
            heading: 'Честные ожидания',
            paragraphs: [
              'После операции на простате сперма наружу не выходит; зачать ребёнка естественным путём невозможно. Если вы хотите детей, скажите об этом ДО операции.',
              'Эректильная функция может не вернуться наверняка даже при сохранении нервов; восстановление занимает месяцы и зависит от вашего состояния до операции.',
              'Подтекание мочи часто в первые недели и у большинства мужчин заметно уменьшается за месяцы. Освоить упражнения для тазового дна ДО операции облегчает этот период.',
              'РЕЗУЛЬТАТ ГИСТОЛОГИИ МОЖЕТ ОКАЗАТЬСЯ ХУЖЕ ОЖИДАЕМОГО. Необходимость дополнительного лечения (облучения или гормонов) после операции не означает её неудачи; она вытекает из того, что истинная распространённость видна только в удалённой ткани.'
            ]
          },
          {
            heading: 'Вопросы, которые стоит задать врачу',
            paragraphs: [
              'Какова степень и группа риска моей болезни? Является ли активное наблюдение вариантом для меня, а если нет — почему?',
              'В чём конкретное преимущество предлагаемого метода именно для меня и почему другие варианты отходят на второй план?',
              'Если меня прооперируют, каково моё индивидуальное ожидание по удержанию мочи и эрекции и на чём оно основано?',
              'Какова вероятность, что мне понадобится дополнительное лечение после операции, и как это будет отслеживаться?',
              'Каков мой план наблюдения: какое исследование, как часто и кто его интерпретирует?'
            ]
          },
          {
            heading: 'Частые заблуждения',
            paragraphs: [
              '«ПСА нормальный — значит, рака нет.» Неверно. Нормальный ПСА не исключает рак полностью; учитываются также данные осмотра и факторы риска.',
              '«ПСА высокий — значит, у меня рак.» Тоже неверно. Инфекция, доброкачественное увеличение и воспаление простаты повышают ПСА. Первый шаг — обычно повторное измерение и переоценка.',
              '«Биопсия разносит рак.» Это опасение высказывают часто, но доказательств этому нет. Настоящий риск — не сделать нужную биопсию.',
              '«После операции всё закончится.» При раке простаты наблюдение продолжается и после операции. ПСА измеряют регулярно; это не недоверие, а правильное ведение болезни.',
              '«Активное наблюдение — это ничего не делать.» Нет. Это программа: ПСА через определённые промежутки, осмотр, визуализация и при необходимости биопсия. Если вы не будете приходить на контроль, такой подход вам не подходит.'
            ]
          },
          {
            heading: 'Важное замечание',
            paragraphs: [
              'Эта статья носит общий информационный характер и не заменяет врачебной консультации. Рак простаты — не одна болезнь; решения индивидуальны и требуют осмотра врача.',
              'Лихорадка с болью в боку, невозможность помочиться, слабость или потеря чувствительности в ногах требуют СРОЧНОЙ оценки.'
            ]
          }
        ]
      },
      fr: {
        title: 'Cancer de la prostate : symptômes et options thérapeutiques',
        excerpt:
          'Un aperçu de l’importance du dépistage précoce, du dosage du PSA et des options de traitement, dont la chirurgie robotique.',
        metaTitle: 'Cancer de la prostate : symptômes et options de traitement',
        metaDescription:
          'Un guide informatif sur les symptômes du cancer de la prostate, le dosage du PSA, la démarche diagnostique et les options thérapeutiques dont la prostatectomie robotique.',
        sections: [
          {
            heading: 'Pourquoi le cancer de la prostate ne donne-t-il pas de symptômes au début ?',
            paragraphs: [
              'La prostate se situe juste sous la vessie et entoure le canal urinaire. Le cancer naît le plus souvent dans la partie EXTERNE de la glande, loin de ce canal. C’est pourquoi, au début, il ne comprime pas les voies urinaires et ne provoque aucune gêne.',
              'En pratique, cela signifie deux choses : un homme sans symptôme peut avoir un cancer de la prostate, et chez un homme qui a des troubles urinaires, la cause n’est généralement PAS un cancer mais une hypertrophie bénigne. Voir dans les troubles urinaires un signe d’alerte du cancer est aussi faux que se rassurer de leur absence.',
              'Le dépistage précoce est une décision, et cette décision est personnelle : âge, antécédents familiaux, état de santé général et espérance de vie sont pesés ensemble. Demandez clairement à votre médecin si un dépistage est indiqué pour vous.'
            ]
          },
          {
            heading: 'Quels symptômes doivent être explorés ?',
            paragraphs: [
              'Jet affaibli, retard au démarrage, pollakiurie et réveils nocturnes sont les troubles urinaires les plus fréquents. Ils ne sont pas spécifiques du cancer ; on les retrouve dans l’hypertrophie bénigne.',
              'EN REVANCHE, CES SIGNES DOIVENT ÊTRE EXPLORÉS SANS DÉLAI : sang dans les urines ou le sperme, douleurs osseuses récentes et persistantes (surtout du dos et des hanches), amaigrissement inexpliqué, faiblesse ou troubles de la sensibilité des jambes.',
              'Le sang dans les urines peut être INDOLORE ; l’absence de douleur ne le rend pas anodin. Une hématurie indolore s’explore à tout âge.'
            ]
          },
          {
            heading: 'Ce qu’est le PSA — et ce qu’il n’est pas',
            paragraphs: [
              'Le PSA (antigène prostatique spécifique) est une protéine produite par le tissu prostatique. Il se dose dans le sang et renseigne sur la prostate — mais CE N’EST PAS UN TEST DE CANCER.',
              'Le PSA peut s’élever en cas d’hypertrophie bénigne, d’infection urinaire, de prostatite, après un sondage et parfois après du vélo ou un rapport sexuel. Un PSA élevé ne signifie pas « il y a un cancer », et un PSA normal ne l’exclut pas totalement.',
              'UN POINT TRÈS SOUVENT OUBLIÉ : les médicaments qui réduisent le volume prostatique (inhibiteurs de la 5-alpha-réductase) abaissent le PSA d’environ LA MOITIÉ. Si vous ne signalez pas en prendre, une valeur qui mérite attention peut être lue comme normale. Donnez cette information à chaque dosage.',
              'Un PSA isolé ne suffit généralement pas. Son évolution dans le temps, son rapport au volume prostatique et le toucher rectal sont évalués ensemble.'
            ]
          },
          {
            heading: 'Diagnostic : imagerie d’abord, biopsie ensuite',
            paragraphs: [
              'Devant un PSA élevé ou un toucher suspect, la première étape n’est aujourd’hui plus la biopsie mais une IRM multiparamétrique de la prostate. Elle montre s’il existe une zone suspecte et, le cas échéant, où diriger la biopsie.',
              'Cet ordre a deux avantages : éviter une biopsie inutile et, lorsqu’elle est nécessaire, la réaliser au bon endroit. « IRM d’abord » protège le patient de ponctions au hasard.',
              'Si une biopsie est nécessaire, l’ECBU doit être négatif au préalable. Du sang dans les urines et le sperme pendant quelque temps est attendu ; fièvre et frissons ne le sont pas et imposent un contact immédiat.'
            ]
          },
          {
            heading: 'Que signifie le chiffre du compte rendu anatomopathologique ?',
            paragraphs: [
              'Si un cancer est trouvé, le pathologiste indique le degré de transformation des cellules sous forme d’un grade (score de Gleason et groupe ISUP correspondant). Ce grade traduit le caractère plus ou moins actif de la maladie.',
              'Une maladie de bas grade, sur quelques carottes, avec un PSA bas, n’est pas le même tableau qu’une maladie de haut grade et ne se traite pas de la même façon. « Cancer de la prostate » ne devrait donc pas se dire comme s’il s’agissait d’une seule maladie.',
              'Si vous ne comprenez pas votre compte rendu, demandez qu’on vous l’explique. Sans connaître votre grade, vous ne pouvez pas comparer les options.'
            ]
          },
          {
            heading: 'Les options thérapeutiques',
            paragraphs: [
              'LA SURVEILLANCE ACTIVE est une option légitime dans les formes à bas risque et ne signifie pas « refuser le traitement ». La maladie est suivie de près par PSA réguliers, examen, IRM et, si besoin, nouvelle biopsie ; le traitement commence en cas de signes de progression. Le but est de ne pas subir les effets indésirables de la chirurgie ou de la radiothérapie sans nécessité.',
              'LA CHIRURGIE (prostatectomie radicale) retire la totalité de la prostate et se fait aujourd’hui souvent avec assistance robotique. Le tissu retiré part en anatomopathologie, ce qui révèle l’étendue réelle de la maladie.',
              'LA RADIOTHÉRAPIE vise un objectif comparable chez des patients sélectionnés et peut être associée à une hormonothérapie.',
              'L’HORMONOTHÉRAPIE n’est pas curative à elle seule ; elle s’emploie aux stades avancés ou en complément de la radiothérapie.',
              'Le choix dépend du grade et de l’étendue, de votre âge, de vos autres maladies et de vos propres priorités. Aucune méthode n’est « la meilleure » pour tout le monde.'
            ]
          },
          {
            heading: 'Attentes réalistes',
            paragraphs: [
              'Après une prostatectomie, le sperme ne sort plus ; concevoir naturellement n’est plus possible. Si vous souhaitez des enfants, dites-le AVANT l’intervention.',
              'La fonction érectile ne revient pas de façon certaine, même en cas de préservation nerveuse ; la récupération peut prendre des mois et dépend de votre état préopératoire.',
              'Les fuites urinaires sont fréquentes les premières semaines et diminuent nettement en quelques mois chez la plupart des hommes. Apprendre la rééducation périnéale AVANT l’intervention facilite cette période.',
              'LE RÉSULTAT ANATOMOPATHOLOGIQUE PEUT ÊTRE MOINS BON QUE PRÉVU. Devoir ajouter un traitement (radiothérapie ou hormones) après l’opération ne signifie pas qu’elle a échoué : l’étendue réelle ne se voit que sur le tissu retiré.'
            ]
          },
          {
            heading: 'Questions à poser à votre médecin',
            paragraphs: [
              'Quel est le grade et le groupe de risque de ma maladie ? La surveillance active est-elle une option pour moi, et sinon pourquoi ?',
              'Quel est l’avantage concret, pour moi, de l’option que vous proposez, et pourquoi les autres passent-elles au second plan ?',
              'Si je suis opéré, quelle est mon attente individuelle pour la continence et l’érection, et sur quoi repose-t-elle ?',
              'Quelle est la probabilité que j’aie besoin d’un traitement complémentaire après l’opération, et comment sera-t-il surveillé ?',
              'Quel est mon plan de suivi : quel examen, à quelle fréquence, et qui l’interprète ?'
            ]
          },
          {
            heading: 'Idées reçues fréquentes',
            paragraphs: [
              '« Mon PSA est normal, donc je n’ai pas de cancer. » Faux. Un PSA normal n’exclut pas totalement un cancer ; le toucher rectal et les facteurs de risque comptent aussi.',
              '« Mon PSA est élevé, donc j’ai un cancer. » Faux également. Infection, hypertrophie bénigne et prostatite élèvent le PSA. La première étape est souvent un nouveau dosage et une réévaluation.',
              '« La biopsie dissémine le cancer. » Cette crainte revient souvent, mais rien ne l’étaye. Le vrai risque est de ne pas faire la biopsie nécessaire.',
              '« Une fois opéré, c’est terminé. » Dans le cancer de la prostate, le suivi se poursuit après l’opération. Le PSA est dosé régulièrement ; ce n’est pas de la méfiance, c’est une prise en charge correcte.',
              '« La surveillance active, c’est ne rien faire. » Non. C’est un programme : PSA à intervalles définis, examen, imagerie et biopsie si nécessaire. Si vous ne venez pas au suivi, elle ne vous convient pas.'
            ]
          },
          {
            heading: 'Note importante',
            paragraphs: [
              'Cet article est à visée d’information générale et ne remplace pas un avis médical. Le cancer de la prostate n’est pas une maladie unique ; les décisions sont individuelles et nécessitent un examen médical.',
              'Fièvre avec douleur lombaire, impossibilité d’uriner, faiblesse ou perte de sensibilité des jambes imposent une évaluation URGENTE.'
            ]
          }
        ]
      }
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
      de: {
        title: 'Wie Nierensteine entstehen und wie man ihnen vorbeugt',
        excerpt: 'Ursachen der Nierensteinbildung, Risikofaktoren und alltägliche Vorbeugemaßnahmen.',
        metaTitle: 'Wie entstehen Nierensteine? Tipps zur Vorbeugung',
        metaDescription: 'Ein informativer Leitfaden dazu, warum Nierensteine entstehen, zu Risikofaktoren, Ernährungstipps und Behandlungsmethoden.',
        sections: [
          {
            heading: 'Wie entsteht ein Nierenstein?',
            paragraphs: [
              'Der Urin transportiert die auszuscheidenden Mineralien in Wasser gelöst. Solange er ausreichend verdünnt ist, bleiben sie gelöst. Konzentriert sich der Urin, wird die Löslichkeitsgrenze überschritten: Die Mineralien fallen zunächst als mikroskopische Kristalle aus, und diese Kristalle verkleben zu einem Stein.',
              'Deshalb gibt es beim Steinleiden selten einen einzigen Schuldigen. Zu wenig trinken, Flüssigkeitsverlust durch Schwitzen, zu viel Salz, zu viel tierisches Eiweiß, bestimmte Medikamente, chronischer Durchfall und einige Stoffwechselerkrankungen tragen auf verschiedenen Wegen zum selben Ergebnis bei.',
              'Ein Stein entsteht nicht plötzlich, sondern über Monate. Praktisch heißt das: Ändert sich nach dem Abgang eines Steins nichts, produzieren dieselben Bedingungen weiter neue.'
            ]
          },
          {
            heading: 'Warum ist die Steinart wichtig?',
            paragraphs: [
              'Die häufigste Art ist der Calciumoxalatstein. Harnsäuresteine, infektbedingte (Struvit-)Steine, Cystinsteine und arzneimittelbedingte Steine sind seltener.',
              'Die Art ist wichtig, weil DIE VORBEUGUNG DAVON ABHÄNGT. Bei Harnsäuresteinen kann eine Anhebung des Urin-pH zur Auflösung beitragen, bei Calciumoxalatsteinen ist das Vorgehen ein anderes. Ein Infektstein wächst weiter, solange er nicht vollständig entfernt ist.',
              'WERFEN SIE den abgegangenen oder entfernten Stein deshalb NICHT WEG. Die Steinanalyse ist die günstigste Untersuchung, die den Plan für Jahre bestimmt.'
            ]
          },
          {
            heading: 'Beschwerden — und der Notfall',
            paragraphs: [
              'Typisch ist ein wellenförmiger, heftiger Schmerz von der Flanke in die Leiste (Nierenkolik). Übelkeit, Erbrechen, Blut im Urin und häufiges Wasserlassen können hinzukommen.',
              'DIES IST EIN NOTFALL: Flankenschmerz ZUSAMMEN MIT Fieber oder Schüttelfrost. Das kann eine Infektion in einer gestauten Niere bedeuten und binnen Stunden bedrohlich werden. Abzuwarten, ob es sich legt, ist falsch; suchen Sie sofort ein Krankenhaus auf.',
              'EIN WICHTIGER IRRTUM: Schmerzfreiheit bedeutet nicht Sicherheit. Eine langsam entstehende Stauung kann die Nierenfunktion ohne Schmerzen still vermindern. Eine Kontrolle wird deshalb nicht ausgelassen, weil „der Schmerz weg ist".',
              'Unvermögen zu urinieren, eine Kolik bei Einzelniere und nicht beherrschbares Erbrechen gehören ebenfalls unverzüglich abgeklärt.'
            ]
          },
          {
            heading: 'Wie wird die Diagnose gestellt?',
            paragraphs: [
              'Am Anfang stehen Urinuntersuchung, Blutwerte einschließlich Nierenfunktion und Bildgebung. Der Ultraschall kommt ohne Strahlung aus und ist besonders in der Schwangerschaft und bei Kindern die erste Wahl.',
              'Die native Computertomographie zeigt Lage, Größe und Dichte des Steins am klarsten; der Behandlungsplan stützt sich oft darauf. Eine CT ist jedoch nicht bei jeder Kontrolle nötig — die Strahlenbelastung wird nicht ohne Grund erhöht.',
              'Vor der Behandlungsplanung muss die Urinkultur unauffällig sein. Ein Eingriff am Stein bei bestehender Infektion erhöht die Risiken deutlich.'
            ]
          },
          {
            heading: 'Grundlage der Vorbeugung: Flüssigkeit',
            paragraphs: [
              'Die wirksamste Einzelmaßnahme beim Steinleiden ist, so viel zu trinken, dass die Urinmenge steigt. Ziel ist ein deutlich höheres Tagesvolumen; praktisches Zeichen dafür ist heller Urin.',
              'Wer in heißem Klima lebt, körperlich arbeitet oder stark schwitzt, braucht mehr. An jedem Tag, an dem der Verlust nicht ersetzt wird, konzentriert sich der Urin.',
              'Auch die Nacht zählt: Im Schlaf konzentriert sich der Urin. Manchen Patienten wird geraten, nachts einmal aufzustehen und zu trinken.',
              'Wasser durch gezuckerte Getränke zu ersetzen schützt nicht; zucker- und fruktosehaltige Getränke können das Risiko erhöhen.'
            ]
          },
          {
            heading: 'Was man in der Ernährung ändern sollte — und was nicht',
            paragraphs: [
              'SALZ: Zu viel Salz erhöht die mit dem Urin ausgeschiedene Calciummenge und erleichtert die Steinbildung. Salz zu reduzieren ist weit sinnvoller, als Calcium zu streichen.',
              'TIERISCHES EIWEISS: Übermäßiger Fleischkonsum erhöht die Säurelast des Urins und das Risiko für Harnsäure- und Calciumsteine. Ziel ist nicht der Verzicht, sondern das Maß.',
              'OXALAT: Spinat, Rote Bete, Nüsse, Schokolade und Tee sind oxalatreich. Ein vollständiges Verbot ist nicht nötig; sinnvoller sind maßvolle Mengen und der Verzehr zusammen mit einer CALCIUMHALTIGEN Mahlzeit.',
              'CALCIUM — DER HÄUFIGSTE FEHLER: Viele Steinpatienten streichen Calcium. Das ist FALSCH und kann das Risiko ERHÖHEN. Mit der Nahrung aufgenommenes Calcium bindet Oxalat im Darm und vermindert dessen Aufnahme. Calcium sollte in normalen Mengen über die Nahrung kommen; Calciumpräparate nicht ohne ärztlichen Rat.',
              'CITRAT: Zitronen und Zitrusfrüchte erhöhen das Citrat im Urin, und Citrat erschwert die Kristallbildung. Zitrone ins Wasser zu geben ist eine einfache und unschädliche Unterstützung.'
            ]
          },
          {
            heading: 'Steinanalyse und Stoffwechselabklärung',
            paragraphs: [
              'Eine ausführlichere Abklärung ist nötig bei wiederkehrenden Steinen, Einzelniere, Steinen im Kindesalter, familiärer Häufung oder ungewöhnlicher Steinart.',
              'Dazu wird 24-Stunden-Urin gesammelt und auf Volumen, Calcium, Oxalat, Citrat, Harnsäure und weitere Parameter untersucht. Ziel ist herauszufinden, WARUM der Stein entstand, und die Vorbeugung individuell einzustellen.',
              'Bei manchen Patienten kommt eine medikamentöse Therapie hinzu — etwa Mittel, die den Urin-pH anheben oder die Calciumausscheidung senken. Sie werden ärztlich begonnen und mit Blutwerten überwacht.'
            ]
          },
          {
            heading: 'Behandlungsoptionen bei vorhandenem Stein',
            paragraphs: [
              'Ein Teil der kleinen, günstig gelegenen Steine geht von selbst ab; in dieser Zeit kommen Schmerzbehandlung und bei manchen Patienten den Abgang erleichternde Medikamente zum Einsatz.',
              'Bei Steinen, die nicht abgehen oder stauen, bestehen die Optionen Stoßwellenlithotripsie (ESWL), flexible Ureteroskopie über die Harnwege (RIRS) und der perkutane Zugang durch die Haut zur Niere (PCNL). Welche passt, hängt von Größe, Lage und Härte des Steins sowie von der Nierenanatomie ab.',
              'Nach dem Eingriff kann vorübergehend eine Schiene (JJ) liegen. Mit liegender Schiene sind häufiges Wasserlassen, Drang und leichte Blutung üblich. WER die Schiene WO und WANN entfernt, muss vor dem Eingriff geplant sein — für Patienten aus dem Ausland besonders wichtig.'
            ]
          },
          {
            heading: 'Rückfälle verhindern',
            paragraphs: [
              'Das Steinleiden ist kein einmaliges Ereignis, sondern neigt zum Wiederauftreten. Wer einmal einen Stein abgegangen hat, bildet über die Jahre mit beachtlicher Wahrscheinlichkeit einen weiteren.',
              'Die Behandlung endet deshalb nicht mit der Steinentfernung. Sie geht weiter mit Trinkmenge, Salz- und Eiweißmaß, Steinanalyse und bei Bedarf Stoffwechselabklärung.',
              'Regelmäßige Kontrollen lassen einen stummen Stein erkennen, bevor er wächst und staut. Der Ultraschall genügt dafür meist und kommt ohne Strahlung aus.'
            ]
          },
          {
            heading: 'Häufige Irrtümer',
            paragraphs: [
              '„Kräutertees lösen Steine auf." Wirklich auflösbar ist nur die Gruppe der Harnsäuresteine, und zwar durch Anheben des Urin-pH unter ärztlicher Kontrolle. Ein Calciumoxalatstein löst sich durch keinen Tee; die Behandlung aufgrund dieser Behauptung hinauszuzögern kann die Niere schädigen.',
              '„Der Stein ist abgegangen, damit ist es erledigt." Der Abgang beendet die Episode, nicht die Erkrankung. Ändern sich die Bedingungen nicht, entsteht ein neuer.',
              '„Ich muss Calcium meiden." Nein. Nahrungscalcium zu streichen kann das Risiko erhöhen; zu reduzieren sind Salz und zu viel tierisches Eiweiß.',
              '„Ohne Schmerzen habe ich keinen Stein." Es gibt stumme Steine, und eine langsam entstehende Stauung kann schmerzlos sein. Die Nierenfunktion kann unbemerkt abnehmen.',
              '„Viel Wasser spült den Stein hinaus." Flüssigkeit ist die wirksamste Maßnahme gegen neue Steine; einen bereits eingeklemmten Stein kann Wasser jedoch nicht hinausdrücken, und bei bestehender Stauung kann viel Trinken die Schmerzen verstärken.'
            ]
          },
          {
            heading: 'Wichtiger Hinweis',
            paragraphs: [
              'Dieser Beitrag dient der allgemeinen Information und ersetzt keine ärztliche Beratung. Die Behandlung des Steinleidens ist individuell.',
              'FLANKENSCHMERZ ZUSAMMEN MIT FIEBER ODER SCHÜTTELFROST IST EIN NOTFALL; suchen Sie unverzüglich ein Krankenhaus auf.'
            ]
          }
        ]
      },
      ru: {
        title: 'Как образуются камни в почках и как их предотвратить',
        excerpt: 'Причины образования камней в почках, факторы риска и повседневные меры профилактики.',
        metaTitle: 'Как образуются камни в почках? Советы по профилактике',
        metaDescription: 'Информативное руководство о том, почему образуются камни в почках, о факторах риска, советах по питанию и методах лечения.',
        sections: [
          {
            heading: 'Как образуется камень в почке?',
            paragraphs: [
              'Моча переносит минералы, которые организму нужно вывести, в растворённом виде. Пока моча достаточно разведена, они остаются растворёнными. Когда она концентрируется, предел растворимости превышается: минералы сначала выпадают микроскопическими кристаллами, а затем эти кристаллы слипаются в камень.',
              'Поэтому у мочекаменной болезни редко бывает один виновник. Недостаточное питьё, потеря жидкости с потом, избыток соли, избыток животного белка, некоторые лекарства, хроническая диарея и ряд обменных заболеваний разными путями ведут к одному результату.',
              'Камень образуется не вдруг, а месяцами. Практический смысл прост: если после отхождения камня ничего не изменить, те же условия продолжат производить новые.'
            ]
          },
          {
            heading: 'Почему важен тип камня?',
            paragraphs: [
              'Самый частый тип — оксалат кальция. Уратные камни, камни, связанные с инфекцией (струвитные), цистиновые и камни, вызванные некоторыми препаратами, встречаются реже.',
              'Тип важен, потому что ОТ НЕГО ЗАВИСИТ ПРОФИЛАКТИКА. При уратных камнях ощелачивание мочи может способствовать растворению, при оксалатно-кальциевых подход иной. Инфекционный камень продолжает расти, пока не удалён полностью.',
              'Поэтому НЕ ВЫБРАСЫВАЙТЕ отошедший или удалённый камень. Анализ камня — самое дешёвое исследование, определяющее план на годы вперёд.'
            ]
          },
          {
            heading: 'Симптомы — и ситуация, которая является неотложной',
            paragraphs: [
              'Типична сильная волнообразная боль из поясницы в пах (почечная колика). Могут присоединяться тошнота, рвота, кровь в моче и учащённое мочеиспускание.',
              'ЭТО НЕОТЛОЖНО: боль в боку ВМЕСТЕ с лихорадкой или ознобом. Это может означать инфекцию в заблокированной почке, и за часы ситуация может стать тяжёлой. Ждать, пройдёт ли, неправильно: немедленно обращайтесь в больницу.',
              'ВАЖНОЕ ЗАБЛУЖДЕНИЕ: отсутствие боли не означает безопасности. Медленно развивающаяся обструкция может тихо снижать функцию почки без боли. Поэтому контроль не пропускают из-за того, что «боль прошла».',
              'Невозможность помочиться, колика у человека с единственной почкой и неукротимая рвота также требуют безотлагательной оценки.'
            ]
          },
          {
            heading: 'Как ставят диагноз?',
            paragraphs: [
              'На первом этапе — анализ мочи, анализы крови, включая функцию почек, и визуализация. УЗИ не несёт облучения и является первым выбором, особенно при беременности и у детей.',
              'Компьютерная томография без контраста наиболее отчётливо показывает расположение, размер и плотность камня; план лечения чаще всего строится на ней. Однако КТ не нужна при каждом контроле — лучевую нагрузку не повышают без причины.',
              'Перед планированием лечения посев мочи должен быть чистым. Вмешательство на камне при имеющейся инфекции заметно повышает риски.'
            ]
          },
          {
            heading: 'Основа профилактики — жидкость',
            paragraphs: [
              'Самая эффективная отдельная мера при мочекаменной болезни — пить столько, чтобы увеличился объём мочи. Цель — заметно больший суточный диурез; практический признак этого — светлая моча.',
              'Если вы живёте в жарком климате, занимаетесь физическим трудом или сильно потеете, потребность выше. В каждый день, когда потери не восполнены, моча концентрируется.',
              'Ночь тоже важна: во сне моча концентрируется. Некоторым пациентам советуют один раз встать ночью и выпить воды.',
              'Замена воды сладкими напитками не защищает; напитки с сахаром и фруктозой могут повышать риск.'
            ]
          },
          {
            heading: 'Что менять в питании — и что не менять',
            paragraphs: [
              'СОЛЬ: избыток соли увеличивает выведение кальция с мочой и облегчает образование камней. Снизить соль куда правильнее, чем исключать кальций.',
              'ЖИВОТНЫЙ БЕЛОК: избыток мяса повышает кислотность мочи и риск как уратных, так и кальциевых камней. Цель — не исключить белок, а не перебирать.',
              'ОКСАЛАТЫ: шпинат, свёкла, орехи, шоколад и чай богаты оксалатами. Полный запрет не нужен; эффективнее умерить количество и принимать такие продукты вместе с едой, СОДЕРЖАЩЕЙ КАЛЬЦИЙ.',
              'КАЛЬЦИЙ — САМАЯ ЧАСТАЯ ОШИБКА: многие с камнями исключают кальций. Это НЕВЕРНО и может ПОВЫСИТЬ риск. Кальций, поступающий с пищей, связывает оксалат в кишечнике и уменьшает его всасывание. Кальций следует получать с пищей в обычном количестве; добавки — только по совету врача.',
              'ЦИТРАТ: лимон и цитрусовые повышают цитрат в моче, а цитрат затрудняет кристаллизацию. Выжать лимон в воду — простая и безвредная поддержка.'
            ]
          },
          {
            heading: 'Анализ камня и метаболическое обследование',
            paragraphs: [
              'Более подробное обследование нужно при повторных камнях, единственной почке, камнях с детства, семейном анамнезе или необычном типе камня.',
              'Оно включает сбор суточной мочи с измерением объёма, кальция, оксалата, цитрата, мочевой кислоты и других показателей. Цель — выяснить, ПОЧЕМУ образовался камень, и подобрать профилактику индивидуально.',
              'У части пациентов добавляют лекарственную терапию — например препараты, ощелачивающие мочу или снижающие выведение кальция. Их начинают под наблюдением врача и контролируют по анализам крови.'
            ]
          },
          {
            heading: 'Варианты лечения при наличии камня',
            paragraphs: [
              'Часть небольших и удачно расположенных камней отходит сама; в это время применяют обезболивание, а у части пациентов — препараты, облегчающие отхождение.',
              'При камнях, которые не отходят или вызывают обструкцию, варианты таковы: дистанционная литотрипсия (ДЛТ), гибкая уретероскопия через мочевые пути (RIRS) и перкутанный доступ через кожу в почку (ПНЛ). Выбор зависит от размера, положения и плотности камня и от анатомии почки.',
              'После вмешательства может временно остаться стент (JJ). При установленном стенте учащённое мочеиспускание, позывы и лёгкое кровотечение обычны. КТО удалит стент, ГДЕ и КОГДА, нужно спланировать до вмешательства — это особенно важно для пациентов, приезжающих из-за рубежа.'
            ]
          },
          {
            heading: 'Как предотвратить повторение',
            paragraphs: [
              'Мочекаменная болезнь — не одноразовое событие, а состояние со склонностью к повторению. У человека, однажды отошедшего камня, вероятность образовать новый за годы далеко не мала.',
              'Поэтому лечение не заканчивается удалением камня. Оно продолжается питьевым режимом, балансом соли и белка, анализом камня и при необходимости метаболическим обследованием.',
              'Регулярный контроль позволяет заметить молчаливый камень, прежде чем он вырастет и вызовет обструкцию. Для такого наблюдения чаще всего достаточно УЗИ, и оно не несёт облучения.'
            ]
          },
          {
            heading: 'Частые заблуждения',
            paragraphs: [
              '«Травяные чаи растворяют камни.» По-настоящему растворимы только уратные камни, и это делается ощелачиванием мочи под контролем врача. Оксалатно-кальциевый камень не растворяется никаким чаем; откладывать лечение, полагаясь на такое утверждение, может повредить почку.',
              '«Камень отошёл — всё закончилось.» Отхождение завершает эпизод, а не болезнь. Если условия не изменятся, образуется новый.',
              '«Мне нужно избегать кальция.» Нет. Исключение пищевого кальция может повысить риск; снижать нужно соль и избыток животного белка.',
              '«Если нет боли, нет и камня.» Молчаливые камни существуют, а медленно развивающаяся обструкция может быть безболезненной. Функция почки может снижаться незаметно.',
              '«Если много пить, камень выйдет.» Жидкость — самая действенная мера против новых камней, но вытолкнуть водой уже вклинившийся камень невозможно, а при обструкции обильное питьё может усилить боль.'
            ]
          },
          {
            heading: 'Важное замечание',
            paragraphs: [
              'Эта статья носит общий информационный характер и не заменяет врачебной консультации. Ведение мочекаменной болезни индивидуально.',
              'БОЛЬ В БОКУ ВМЕСТЕ С ЛИХОРАДКОЙ ИЛИ ОЗНОБОМ — НЕОТЛОЖНОЕ СОСТОЯНИЕ; обращайтесь в больницу без промедления.'
            ]
          }
        ]
      },
      fr: {
        title: 'Comment se forment les calculs rénaux et comment les prévenir',
        excerpt: 'Causes de formation des calculs rénaux, facteurs de risque et mesures préventives au quotidien.',
        metaTitle: 'Comment se forment les calculs rénaux ? Conseils de prévention',
        metaDescription:
          'Un guide informatif sur les causes de formation des calculs rénaux, les facteurs de risque, les conseils alimentaires et les méthodes de traitement.',
        sections: [
          {
            heading: 'Comment se forme un calcul rénal ?',
            paragraphs: [
              'L’urine transporte, dissous dans l’eau, les minéraux que le corps doit éliminer. Tant qu’elle reste assez diluée, ils demeurent dissous. Lorsqu’elle se concentre, la limite de solubilité est franchie : les minéraux précipitent d’abord en cristaux microscopiques, qui s’agrègent ensuite pour former un calcul.',
              'C’est pourquoi la maladie lithiasique a rarement un seul coupable. Boire trop peu, perdre de l’eau par la transpiration, trop de sel, un excès de protéines animales, certains médicaments, une diarrhée chronique et quelques maladies métaboliques concourent au même résultat par des voies différentes.',
              'Un calcul ne se forme pas d’un coup ; il se constitue en quelques mois. En pratique : si rien ne change après l’expulsion d’un calcul, les mêmes conditions continuent d’en produire.'
            ]
          },
          {
            heading: 'Pourquoi le type de calcul compte-t-il ?',
            paragraphs: [
              'Le type le plus fréquent est l’oxalate de calcium. Les calculs d’acide urique, les calculs liés à l’infection (struvite), les calculs de cystine et ceux dus à certains médicaments sont plus rares.',
              'Le type importe parce que LA PRÉVENTION EN DÉPEND. Pour les calculs d’acide urique, alcaliniser les urines peut contribuer à les dissoudre ; pour l’oxalate de calcium, la démarche est différente. Un calcul d’infection continue de croître tant qu’il n’est pas entièrement éliminé.',
              'NE JETEZ donc PAS le calcul expulsé ou retiré. L’analyse du calcul est l’examen le moins coûteux qui oriente le plan pour des années.'
            ]
          },
          {
            heading: 'Les symptômes — et la situation d’urgence',
            paragraphs: [
              'La plainte typique est une douleur intense, par vagues, de la fosse lombaire vers l’aine (colique néphrétique). Nausées, vomissements, sang dans les urines et pollakiurie peuvent s’y associer.',
              'VOICI UNE URGENCE : une douleur lombaire ASSOCIÉE à de la fièvre ou des frissons. Cela peut signifier une infection sur un rein obstrué, qui peut devenir grave en quelques heures. Attendre de voir si cela passe est une erreur : rendez-vous immédiatement à l’hôpital.',
              'UNE IDÉE FAUSSE IMPORTANTE : l’absence de douleur ne signifie pas que tout va bien. Une obstruction d’installation lente peut réduire silencieusement la fonction rénale. On ne saute donc pas un contrôle parce que « la douleur est passée ».',
              'L’impossibilité d’uriner, une colique chez un patient à rein unique et des vomissements incontrôlables doivent également être évalués sans délai.'
            ]
          },
          {
            heading: 'Comment pose-t-on le diagnostic ?',
            paragraphs: [
              'En première intention : examen des urines, bilan sanguin avec la fonction rénale, et imagerie. L’échographie n’irradie pas et constitue le premier choix, notamment pendant la grossesse et chez l’enfant.',
              'Le scanner sans injection montre le plus clairement la position, la taille et la densité du calcul ; le plan de traitement s’appuie souvent dessus. Un scanner n’est toutefois pas nécessaire à chaque contrôle : on n’augmente pas l’irradiation sans raison.',
              'Avant de planifier un traitement, l’ECBU doit être négatif. Intervenir sur un calcul en présence d’une infection augmente nettement les risques.'
            ]
          },
          {
            heading: 'Le socle de la prévention : les liquides',
            paragraphs: [
              'La mesure isolée la plus efficace est de boire assez pour augmenter le volume d’urine. L’objectif est une diurèse nettement plus abondante ; le signe pratique en est une urine claire.',
              'Si vous vivez sous un climat chaud, effectuez un travail physique ou transpirez beaucoup, vos besoins sont plus élevés. Chaque jour où vous ne compensez pas vos pertes, vos urines se concentrent.',
              'La nuit compte aussi : l’urine se concentre pendant le sommeil. Chez certains patients, il est conseillé de se lever une fois la nuit pour boire.',
              'Remplacer l’eau par des boissons sucrées ne protège pas ; les boissons sucrées et riches en fructose peuvent augmenter le risque.'
            ]
          },
          {
            heading: 'Ce qu’il faut changer dans l’alimentation — et ce qu’il ne faut pas',
            paragraphs: [
              'LE SEL : un excès de sel augmente le calcium éliminé dans les urines et facilite la formation des calculs. Réduire le sel est bien plus pertinent que supprimer le calcium.',
              'LES PROTÉINES ANIMALES : un excès de viande acidifie les urines et augmente le risque de calculs d’acide urique comme de calcium. Le but n’est pas de supprimer les protéines mais d’éviter l’excès.',
              'L’OXALATE : épinards, betterave, fruits à coque, chocolat et thé en sont riches. Les interdire totalement n’est pas nécessaire ; il est plus efficace d’en modérer la quantité et de les consommer au cours d’un repas CONTENANT DU CALCIUM.',
              'LE CALCIUM — L’ERREUR LA PLUS FRÉQUENTE : beaucoup de patients lithiasiques suppriment le calcium. C’est FAUX et cela peut AUGMENTER le risque. Le calcium alimentaire se lie à l’oxalate dans l’intestin et en réduit l’absorption. Le calcium doit être apporté en quantité normale par l’alimentation ; les suppléments ne se prennent pas sans avis médical.',
              'LE CITRATE : citrons et agrumes augmentent le citrate urinaire, et le citrate gêne la cristallisation. Presser un citron dans l’eau est un appoint simple et inoffensif.'
            ]
          },
          {
            heading: 'Analyse du calcul et bilan métabolique',
            paragraphs: [
              'Un bilan plus approfondi s’impose en cas de calculs récidivants, de rein unique, de calculs apparus dans l’enfance, d’antécédents familiaux ou de type inhabituel.',
              'Ce bilan comporte un recueil des urines de 24 heures mesurant volume, calcium, oxalate, citrate, acide urique et d’autres paramètres. L’objectif est de comprendre POURQUOI le calcul s’est formé et d’adapter la prévention à la personne.',
              'Chez certains patients, un traitement médicamenteux s’ajoute — par exemple des produits alcalinisant les urines ou réduisant l’excrétion de calcium. Ils sont instaurés sous contrôle médical et suivis par des bilans sanguins.'
            ]
          },
          {
            heading: 'Options thérapeutiques en présence d’un calcul',
            paragraphs: [
              'Une partie des petits calculs bien situés s’expulse spontanément ; on utilise alors des antalgiques et, chez certains patients, un traitement facilitant l’expulsion.',
              'Pour les calculs qui ne s’expulsent pas ou qui obstruent, les options sont la lithotritie extracorporelle (LEOC), l’urétéroscopie souple par les voies naturelles (RIRS) et la voie percutanée à travers la peau jusqu’au rein (NLPC). Le choix dépend de la taille, du siège et de la dureté du calcul ainsi que de l’anatomie rénale.',
              'Une sonde JJ peut être laissée temporairement après le geste. Avec une sonde en place, pollakiurie, urgences et saignement léger sont habituels. QUI retire la sonde, OÙ et QUAND doit être planifié avant l’intervention — point particulièrement important pour les patients venant de l’étranger.'
            ]
          },
          {
            heading: 'Prévenir la récidive',
            paragraphs: [
              'La lithiase n’est pas un événement isolé mais une affection qui tend à récidiver. Celui qui a expulsé un calcul a une probabilité non négligeable d’en former un autre au fil des ans.',
              'Le traitement ne s’arrête donc pas au retrait du calcul. Il se poursuit par les apports hydriques, l’équilibre du sel et des protéines, l’analyse du calcul et, si nécessaire, un bilan métabolique.',
              'Un suivi régulier permet de repérer un calcul silencieux avant qu’il ne grossisse et n’obstrue. L’échographie suffit le plus souvent et n’irradie pas.'
            ]
          },
          {
            heading: 'Idées reçues fréquentes',
            paragraphs: [
              '« Les tisanes dissolvent les calculs. » Le seul groupe réellement dissoluble est celui des calculs d’acide urique, par alcalinisation des urines sous contrôle médical. Un calcul d’oxalate de calcium ne se dissout avec aucune tisane ; retarder le traitement sur la foi de cette affirmation peut léser le rein.',
              '« J’ai expulsé mon calcul, c’est terminé. » L’expulsion met fin à l’épisode, pas à la maladie. Si les conditions ne changent pas, un autre se formera.',
              '« Je dois éviter le calcium. » Non. Supprimer le calcium alimentaire peut augmenter le risque ; ce qu’il faut réduire, c’est le sel et l’excès de protéines animales.',
              '« Sans douleur, pas de calcul. » Il existe des calculs silencieux, et une obstruction d’installation lente peut être indolore. La fonction rénale peut décliner sans que l’on s’en aperçoive.',
              '« Boire beaucoup d’eau fait sortir le calcul. » Les liquides sont la mesure la plus efficace contre les nouveaux calculs, mais l’eau ne peut pas chasser un calcul déjà enclavé, et en cas d’obstruction, boire beaucoup peut accroître la douleur.'
            ]
          },
          {
            heading: 'Note importante',
            paragraphs: [
              'Cet article est à visée d’information générale et ne remplace pas un avis médical. La prise en charge de la lithiase est individuelle.',
              'UNE DOULEUR LOMBAIRE ASSOCIÉE À DE LA FIÈVRE OU À DES FRISSONS EST UNE URGENCE ; rendez-vous à l’hôpital sans délai.'
            ]
          }
        ]
      }
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
    category: 'bph',
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
    category: 'healthTourism',
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
    slug: 'holep-in-der-tuerkei-ablauf-kosten-und-nachsorge',
    date: '2026-10-04',
    category: 'bph',
    languages: ['de'],
    treatmentSlug: 'holep',
    sources: [
      { label: 'EAU Guidelines on Management of Non-Neurogenic Male LUTS — European Association of Urology', url: 'https://uroweb.org/guidelines/management-of-non-neurogenic-male-luts' }
    ],
    i18n: {
      de: {
        title: 'HoLEP in der Türkei: Ablauf, Kosten und Nachsorge',
        excerpt:
          'HoLEP entfernt das verengende Prostatagewebe vollständig statt es abzutragen. Für Patientinnen und Patienten aus dem Ausland verändert dieser Unterschied sowohl das Ergebnis als auch die Reiseplanung.',
        metaTitle: 'HoLEP in der Türkei: Ablauf, Kosten, Aufenthalt und Nachsorge',
        metaDescription:
          'Wie HoLEP abläuft, warum die Prostatagröße entscheidend ist, die vorübergehende Inkontinenz, was ein seriöses Angebot enthält und wie die Nachsorge in Deutschland organisiert wird.',
        sections: [
          {
            heading: 'Was bei HoLEP tatsächlich geschieht',
            paragraphs: [
              'Die Prostata lässt sich mit einer Orange vergleichen: außen die Schale, innen das Fruchtfleisch. Bei der gutartigen Vergrößerung wächst das Innere und drückt die Harnröhre zusammen.',
              'Die klassische TURP trägt von innen Gewebe ab. HoLEP löst stattdessen das gesamte Innengewebe mit einem Holmium-Laser von der Kapsel, schiebt es in die Blase und zerkleinert es dort zur Entfernung. Die äußere Kapsel bleibt erhalten.',
              'Weil das verengende Gewebe vollständig und nicht nur teilweise entfernt wird, ist das Ergebnis in der Regel dauerhafter und ein erneuter Eingriff nach Jahren seltener nötig. Wer für die Operation reist, sollte genau diesen Punkt gewichten.'
            ]
          },
          {
            heading: 'Warum die Prostatagröße den Ausschlag gibt',
            paragraphs: [
              'Bei der TURP steigen mit der Drüsengröße die Operationsdauer und die Menge der aufgenommenen Spülflüssigkeit. Daraus ergibt sich eine praktische Obergrenze, jenseits derer früher offen operiert wurde.',
              'Für die Enukleation gilt diese Grenze so nicht. Auch sehr große Drüsen lassen sich mit derselben Technik behandeln. Deshalb werden heute viele Männer endoskopisch operiert, denen früher eine offene Operation angeboten worden wäre.',
              'Ist Ihre Prostata groß, lautet die eigentliche Frage also nicht "welcher Laser", sondern "Enukleation oder offene Operation".'
            ]
          },
          {
            heading: 'Blutung und Blutverdünner',
            paragraphs: [
              'Bei der Enukleation werden die Gefäße beim Lösen der Gewebeschicht verschlossen, sodass die Blutung meist gut kontrollierbar ist. Das ist für Männer mit gerinnungshemmender Medikation relevant und ebenso für die Rückreise.',
              'Gerinnungshemmer müssen dennoch individuell geplant werden. Setzen Sie kein Medikament eigenmächtig ab, sondern senden Sie Ihre vollständige Medikamentenliste bereits bei der Anfrage mit, damit die Planung vor der Reise steht.'
            ]
          },
          {
            heading: 'Der Punkt, der oft verschwiegen wird',
            paragraphs: [
              'Nach Entfernung des Innengewebes hängt die Kontinenz allein vom äußeren Schließmuskel ab, der zuvor Unterstützung hatte. Dieser Muskel braucht Zeit, und in der Zwischenzeit ist unwillkürlicher Harnabgang häufig.',
              'Bei den meisten Männern bessert sich das über Wochen. Beckenbodentraining hilft — und es lässt sich vor der Operation deutlich leichter erlernen als danach.',
              'Hinzu kommt die retrograde Ejakulation: Der Samen gelangt häufig in die Blase statt nach außen. Das ist unschädlich und beeinträchtigt weder Erektion noch Lust, betrifft aber die Zeugungsfähigkeit. Wer noch Kinder möchte, sollte das ausdrücklich ansprechen.'
            ]
          },
          {
            heading: 'Was ein seriöses Angebot enthalten muss',
            paragraphs: [
              'Eine einzelne Zahl sagt wenig. Entscheidend ist, was enthalten ist und was nicht.',
              'Enthalten sein sollten: Voruntersuchungen, der Eingriff mit Operateur, Anästhesie und Verbrauchsmaterial, der Klinikaufenthalt mit konkret genannter Nächtezahl, die feingewebliche Untersuchung des entfernten Gewebes, die Kontrolle vor dem Rückflug sowie die Regelung der weiteren Nachsorge.',
              'Nicht enthalten sind üblicherweise: die Behandlung von Komplikationen, eine verlängerte Unterkunft und die Flüge. Fragen Sie ausdrücklich und schriftlich nach: Wer trägt die Kosten, wenn eine Komplikation einen längeren Aufenthalt oder einen zweiten Eingriff erfordert?',
              'Dass eine Behandlung in der Türkei weniger kostet, liegt an der Kostenstruktur vor Ort, nicht an günstigerer Technik. Lasergeräte und Verbrauchsmaterial kosten überall gleich. Ein auffällig niedriges Angebot spart deshalb an etwas anderem.'
            ]
          },
          {
            heading: 'Kostenübernahme: klären Sie das vorher',
            paragraphs: [
              'Eine geplante Behandlung im Ausland wird von der gesetzlichen Krankenversicherung nicht selbstverständlich erstattet. Eine Erstattung setzt in der Regel eine vorherige Klärung mit der Krankenkasse voraus.',
              'Klären Sie das, bevor Sie buchen, und holen Sie die Auskunft schriftlich ein. Eine Klinik im Ausland kann Ihnen keine Zusage Ihrer Kasse geben — und sollte das auch nicht andeuten.',
              'Fragen Sie außerdem, ob Sie Operationsbericht, Histologiebefund und Entlassungsbrief in deutscher Sprache erhalten. Ihre weiterbehandelnden Ärztinnen und Ärzte werden diese Unterlagen benötigen.'
            ]
          },
          {
            heading: 'Aufenthaltsdauer und Nachsorge',
            paragraphs: [
              'Planen Sie Anreise und Voruntersuchungen, den Eingriff mit kurzem Klinikaufenthalt, die Katheterphase, die Katheterentfernung und eine Kontrolle vor dem Rückflug.',
              'Buchen Sie den Rückflug nicht auf den Tag nach der Katheterentfernung. Manche Patienten können danach zunächst nicht spontan Wasser lassen — in Kliniknähe ein lösbares Problem, am Flughafen nicht.',
              'Vereinbaren Sie vor der Abreise, wer die Nachsorge in Deutschland übernimmt. Sprechen Sie mit Ihrer Urologin oder Ihrem Urologen vor der Reise, nicht erst danach.',
              'Dieser Beitrag dient der allgemeinen Information und ersetzt keine ärztliche Beratung.'
            ]
          }
        ]
      }
    }
  },
  {
    slug: 'roboterprostatektomie-im-ausland-worauf-achten',
    date: '2026-10-04',
    category: 'oncology',
    languages: ['de'],
    treatmentSlug: 'robotik-prostatektomi',
    sources: [
      { label: 'EAU Guidelines on Prostate Cancer — European Association of Urology', url: 'https://uroweb.org/guidelines/prostate-cancer' }
    ],
    i18n: {
      de: {
        title: 'Roboterprostatektomie im Ausland — worauf achten',
        excerpt:
          'Der Roboter operiert nicht. Entscheidend sind die Person am Steuerpult, die Struktur um den Eingriff herum und die Frage, wer zuständig ist, wenn Sie längst wieder zu Hause sind.',
        metaTitle: 'Roboterprostatektomie im Ausland: Worauf Sie achten sollten',
        metaDescription:
          'Was bei einer Roboterprostatektomie im Ausland zu prüfen ist: Operateur, Klinik, Nervenschonung, Kontinenz, Histologiebefund, Nachsorge in Deutschland und Warnsignale.',
        sections: [
          {
            heading: 'Der Roboter ist ein Instrument, kein Operateur',
            paragraphs: [
              'Die Formulierung "Operation durch den Roboter" ist irreführend. Jede Bewegung führt die Chirurgin oder der Chirurg aus; das System überträgt die Handbewegungen auf feine Instrumente und liefert eine vergrößerte dreidimensionale Sicht.',
              'Der Nutzen ist real: mehr Präzision auf engem Raum, meist weniger Blutverlust, kleine Zugänge. Das Ergebnis hängt jedoch von der Person am Steuerpult ab, nicht vom Gerät.',
              'Die Frage "Haben Sie einen Roboter?" ist deshalb weit weniger aussagekräftig als "Wer operiert mich, und wie viele dieser Eingriffe führt diese Person durch?"'
            ]
          },
          {
            heading: 'Was Sie über den Operateur prüfen sollten',
            paragraphs: [
              'Name und Facharztqualifikation, nachprüfbar beim zuständigen nationalen Register.',
              'Die ausdrückliche Zusage, dass diese Person selbst operiert und keine Teile des Eingriffs delegiert werden. Diese Frage ist legitim und gehört klar beantwortet.',
              'Die Zahl der durchgeführten Eingriffe mit Zeitraum. Große runde Zahlen ohne Zeitangabe sind leicht behauptet und nicht überprüfbar.',
              'Skepsis gegenüber Superlativen: "führend" oder "weltbekannt" sind Werbebegriffe, keine Qualifikationen.'
            ]
          },
          {
            heading: 'Nervenschonung ehrlich besprochen',
            paragraphs: [
              'Beidseits der Prostata verlaufen Nerven-Gefäß-Bündel, die für die Erektion eine Rolle spielen. Können sie erhalten werden, steigt die Wahrscheinlichkeit, dass die Funktion zurückkehrt.',
              'Die Reihenfolge ist jedoch unverrückbar: zuerst die vollständige Tumorentfernung, dann — wenn möglich — der Nervenerhalt. Reicht der Tumor nahe an das Bündel, erhöht nervnahes Arbeiten das Risiko, Tumorgewebe zurückzulassen.',
              'Die Entscheidung ist kein Entweder-oder. Je nach Befund kann einseitig geschont werden, und der Abstand lässt sich abstufen. Wer Ihnen diesen Abwägungsprozess erklärt, ist glaubwürdiger als wer pauschal sagt, die Nerven würden selbstverständlich erhalten.',
              'Auch bei erhaltenen Nerven braucht die Funktion Monate. Alter, Diabetes, Gefäßerkrankungen, Rauchen und die Funktion vor der Operation beeinflussen das Ergebnis.'
            ]
          },
          {
            heading: 'Kontinenz: der realistische Verlauf',
            paragraphs: [
              'Mit der Prostata entfällt ein Teil des Kontinenzmechanismus; der äußere Schließmuskel übernimmt allein. Harnverlust nach dem Entfernen des Katheters ist daher ein erwarteter Übergang, keine Komplikation.',
              'Typischerweise kehrt zuerst die nächtliche Trockenheit zurück, dann die Kontrolle in Ruhe; am längsten dauert es bei Belastung — Husten, Niesen, Heben. Die Besserung kann bis zu einem Jahr anhalten.',
              'Beckenbodentraining hilft, wenn der richtige Muskel angesteuert wird. Lernen Sie die Technik vor der Operation.'
            ]
          },
          {
            heading: 'Der Histologiebefund kommt nach Ihrer Abreise',
            paragraphs: [
              'Die entfernte Prostata wird feingeweblich untersucht. Dieser Befund entscheidet darüber, ob eine weitere Behandlung nötig ist — und er liegt meist erst vor, wenn Sie bereits zu Hause sind.',
              'Vereinbaren Sie vor der Abreise schriftlich, wie der Befund Sie erreicht, wer ihn erläutert und in welcher Sprache. Ein unübersetztes Dokument ohne Erklärung ist ein schlechter Abschluss einer gut geführten Operation.',
              'Bestehen Sie auf Operationsbericht, Histologiebefund und Entlassungsbrief in deutscher Sprache. Ohne diese Unterlagen ist eine sichere Weiterbehandlung in Deutschland schwierig.'
            ]
          },
          {
            heading: 'Nachsorge und Kostenfragen',
            paragraphs: [
              'Nach der Operation wird der PSA-Wert in Abständen kontrolliert; er ist der entscheidende Verlaufsparameter. Klären Sie, wer diese Werte beurteilt, wie Sie sie übermitteln und über welchen Zeitraum diese Zusage gilt.',
              'Sprechen Sie vor der Reise mit Ihrer Urologin oder Ihrem Urologen in Deutschland. Sie brauchen diese Anbindung danach.',
              'Eine geplante Auslandsbehandlung wird von der gesetzlichen Krankenversicherung nicht automatisch erstattet; klären Sie das vorab schriftlich mit Ihrer Kasse. Prüfen Sie außerdem, ob Ihre Reiseversicherung geplante Eingriffe überhaupt einschließt — meist ist das nicht der Fall.'
            ]
          },
          {
            heading: 'Warnsignale',
            paragraphs: [
              'Zeitdruck oder befristete Preisnachlässe. Eine Operation ist kein Angebot mit Ablaufdatum.',
              'Ein Preis, bevor jemand Ihre Befunde gesehen hat.',
              'Zugesicherte Ergebnisse. Seriöse Operateure garantieren keine Resultate.',
              'Unklarheit darüber, in welcher Klinik Sie behandelt werden, oder Zurückhaltung, den Operateur schriftlich zu benennen.',
              'Keine klare Auskunft darüber, wer zuständig ist, sobald Sie das Land verlassen haben.',
              'Beim Prostatakarzinom ist Eile klinisch selten begründet. Entsteht Druck, ist er meist kaufmännischer Natur.',
              'Dieser Beitrag dient der allgemeinen Information und ersetzt keine ärztliche Beratung.'
            ]
          }
        ]
      }
    }
  },
  {
    slug: 'penisprothese-ablauf-und-realistische-erwartungen',
    date: '2026-10-04',
    category: 'andrology',
    languages: ['de'],
    treatmentSlug: 'penil-protez',
    sources: [
      { label: 'EAU Guidelines on Sexual and Reproductive Health — European Association of Urology', url: 'https://uroweb.org/guidelines/sexual-and-reproductive-health' }
    ],
    i18n: {
      de: {
        title: 'Penisprothese: Ablauf und realistische Erwartungen',
        excerpt:
          'Der Eingriff ist nicht rückgängig zu machen, und die Infektion ist die Komplikation, auf die es ankommt. Beides sollte die Entscheidung stärker bestimmen als Preis oder Werbung.',
        metaTitle: 'Penisprothese: Ablauf, Prothesentypen und realistische Erwartungen',
        metaDescription:
          'Wann eine Penisprothese infrage kommt, Unterschiede zwischen biegsamer und hydraulischer Prothese, Infektionsrisiko, Diabetes, realistische Erwartungen und Nachsorge.',
        sections: [
          {
            heading: 'Zwei Tatsachen vorweg',
            paragraphs: [
              'Erstens: Der Eingriff ist irreversibel. Für das Einbringen der Prothese muss das Schwellkörpergewebe aufgedehnt werden; natürliche Erektionen kehren danach nicht zurück. Müsste die Prothese ohne Ersatz entfernt werden, wäre die Situation schlechter als vorher.',
              'Zweitens: Die Infektion ist die gefürchtetste Komplikation, weil ein infiziertes Implantat häufig entfernt werden muss. Patientenauswahl, Blutzuckereinstellung, Vorbereitung und Technik sind sämtlich darauf ausgerichtet, dieses Risiko zu senken.',
              'Beides spricht dagegen, diese Entscheidung schnell und preisgetrieben zu treffen.'
            ]
          },
          {
            heading: 'Die Prothese steht am Ende, nicht am Anfang',
            paragraphs: [
              'Bei Erektionsstörungen kommen zuerst Tabletten, dann die Injektionstherapie, dann Vakuumsysteme. Viele Männer kommen damit gut zurecht.',
              'Wird Ihnen eine Prothese angeboten, ohne dass jemand erfragt, was Sie bereits versucht haben und warum es nicht geholfen hat, ist das ein Warnsignal. Wer Ihnen sagt, Sie seien noch kein Kandidat, zeigt Urteilsvermögen.',
              'Ebenso wichtig: Erektionsstörungen sind häufig ein frühes Zeichen einer Gefäßerkrankung oder eines Diabetes. Eine Prothese behandelt keines von beidem.'
            ]
          },
          {
            heading: 'Diabetes und Infektionsrisiko',
            paragraphs: [
              'Eine schlecht eingestellte Blutzuckerlage erhöht das Infektionsrisiko deutlich. Ist Ihr Langzeitwert hoch, lautet die richtige Empfehlung, die Einstellung vor dem Eingriff zu verbessern — auch wenn das eine Verschiebung bedeutet.',
              'Eine Klinik, die aus diesem Grund verschiebt, schützt Sie. Eine, die trotzdem operiert, schützt ihren Operationsplan.',
              'Fragen Sie konkret, welchen Grenzwert der Operateur voraussetzt und ob Ihr aktueller Wert ihn erfüllt.'
            ]
          },
          {
            heading: 'Die beiden Prothesentypen',
            paragraphs: [
              'Die biegsame Prothese besteht aus zwei halbstarren Stäben. Der Penis wird bei Bedarf nach oben gebogen und danach wieder abgelegt. Vorteil: einfache Handhabung, keine Mechanik, weniger technische Defekte. Nachteil: Der Penis bleibt dauerhaft in einem festen Zustand, was beim Ankleiden stören kann.',
              'Die hydraulische Prothese besteht aus Zylindern, einer Pumpe im Hodensack und einem Flüssigkeitsreservoir. Sie liefert das natürlichste Ergebnis, weil der Penis im Ruhezustand weich bleibt. Dafür ist sie ein mechanisches System, das bedient werden muss und ausfallen kann.',
              'Keiner der Typen ist grundsätzlich überlegen. Handkraft und Feinmotorik, Arthrose, vorbestehende Vernarbungen im Schwellkörper und persönliche Prioritäten bestimmen die Wahl. Wer allen Patienten denselben Typ empfiehlt, individualisiert nicht.'
            ]
          },
          {
            heading: 'Erwartungen, die vorher ausgesprochen gehören',
            paragraphs: [
              'Die Prothese stellt die Steifigkeit her. Sie stellt weder Empfindung noch Lust noch Ejakulation wieder her. Was vorher eingeschränkt war, bleibt eingeschränkt.',
              'Viele Männer empfinden den Penis nach dem Eingriff als kürzer als zuvor. Das ist einer der häufigsten Gründe für Unzufriedenheit und gehört ausdrücklich vor die Operation, nicht danach.',
              'Die Prothese ist langlebig, aber nicht unbegrenzt haltbar. Nach Jahren kann ein mechanischer Defekt einen Wechsel erforderlich machen — für jüngere Patienten ein realer Punkt.'
            ]
          },
          {
            heading: 'Was vor einer Behandlung im Ausland zu klären ist',
            paragraphs: [
              'Dass die namentlich genannte Person selbst operiert.',
              'Dass der Eingriff in einer Klinik mit regulärem Operationssaal und stationärer Versorgung stattfindet, nicht in einer Praxis.',
              'Welches Fabrikat und Modell verwendet wird — schriftlich, vor der Operation.',
              'Was geschieht, wenn nach Ihrer Rückkehr eine Infektion auftritt: wen Sie erreichen und was die Klinik dann tut.',
              'Ob eine Herstellergarantie besteht und wie ein Garantiefall aus Deutschland abgewickelt wird.',
              'Planen Sie genügend Tage ein, um die Bedienung der Prothese vor Ort persönlich zu lernen. Die Prothese wird erst nach abgeschlossener Heilung in Gebrauch genommen; den Zeitpunkt legt der Operateur fest, eine zu frühe Nutzung kann schaden.',
              'Dieser Beitrag dient der allgemeinen Information und ersetzt keine ärztliche Beratung.'
            ]
          }
        ]
      }
    }
  },
  {
    slug: 'zweitmeinung-bei-prostatakrebs-aus-deutschland',
    date: '2026-10-04',
    category: 'oncology',
    languages: ['de'],
    treatmentSlug: 'prostat-kanseri',
    sources: [
      { label: 'EAU Guidelines on Prostate Cancer — European Association of Urology', url: 'https://uroweb.org/guidelines/prostate-cancer' }
    ],
    i18n: {
      de: {
        title: 'Zweitmeinung bei Prostatakrebs aus Deutschland',
        excerpt:
          'Eine Zweitmeinung ist nur so gut wie die Unterlagen, auf denen sie beruht. Entscheidend ist, die richtigen Dokumente im richtigen Format zu senden — insbesondere die MRT als DICOM.',
        metaTitle: 'Zweitmeinung Prostatakrebs: Welche Unterlagen Sie senden sollten',
        metaDescription:
          'Welche Befunde für eine Zweitmeinung beim Prostatakarzinom nötig sind, warum die MRT als DICOM gesendet werden muss, was eine gute Zweitmeinung leistet und wie Sie sie nutzen.',
        sections: [
          {
            heading: 'Warum überhaupt eine Zweitmeinung',
            paragraphs: [
              'Beim Prostatakarzinom gibt es häufig mehr als einen vertretbaren Weg. Aktive Überwachung, Operation und Strahlentherapie können bei derselben Konstellation jeweils begründbar sein — mit unterschiedlichen Nebenwirkungsprofilen und unterschiedlicher Nachsorge.',
              'Eine Zweitmeinung ist deshalb kein Misstrauensvotum gegenüber Ihrer behandelnden Ärztin oder Ihrem Arzt, sondern ein Weg zu verstehen, welcher dieser Wege zu Ihren Prioritäten passt.',
              'Hinzu kommt ein fachlicher Grund: Die Graduierung einer Prostatabiopsie beruht auf Beurteilung. Eine Referenzbegutachtung durch eine zweite Pathologie kann die Einstufung verändern — und mit ihr die Empfehlung.'
            ]
          },
          {
            heading: 'Welche Unterlagen wirklich gebraucht werden',
            paragraphs: [
              'Der PSA-Verlauf, nicht nur der letzte Wert. Die Entwicklung über die Zeit enthält Information, die eine Einzelmessung nicht hat.',
              'Der vollständige Biopsiebefund: Zahl der entnommenen und der befallenen Stanzen, Lokalisation, Gleason-Score beziehungsweise ISUP-Gruppe je Stanze und der prozentuale Befall.',
              'Der MRT-Befund einschließlich PI-RADS — und vor allem die Bilddaten selbst.',
              'Vorliegende Staging-Untersuchungen.',
              'Der Tastbefund.',
              'Begleiterkrankungen, Medikamentenliste und Alter. Das ist kein Beiwerk, sondern beeinflusst unmittelbar, welche Behandlung sinnvoll ist.'
            ]
          },
          {
            heading: 'Die MRT als DICOM senden, nicht als Foto',
            paragraphs: [
              'Dies ist der häufigste Grund dafür, dass eine Zweitmeinung wenig wert ist. Ein Bildschirmfoto oder ein PDF mit einzelnen ausgedruckten Schichten erlaubt keine echte Beurteilung.',
              'Bitten Sie Ihre Radiologie um die Untersuchung auf CD oder als DICOM-Datensatz. Nach dem Patientenrechtegesetz haben Sie Anspruch auf Kopien Ihrer Unterlagen; viele Einrichtungen stellen inzwischen auch einen Download bereit. Dass die Datenmenge groß ist, ist normal.',
              'Ohne die Bilddaten kann eine Zweitmeinung nur den fremden schriftlichen Befund wiedergeben. Das ist keine unabhängige Beurteilung, sondern eine Umformulierung.'
            ]
          },
          {
            heading: 'Histologische Präparate',
            paragraphs: [
              'Soll die Graduierung selbst überprüft und nicht nur übernommen werden, müssen die Schnitte oder Blöcke zur Verfügung stehen. Ihr Institut kann sie herausgeben oder digitalisierte Scans versenden.',
              'Dieser Schritt dauert länger als das Versenden von Berichten; beginnen Sie früh damit. Besonders sinnvoll ist er, wenn die Einstufung an einer Entscheidungsgrenze liegt, an der eine Änderung die Empfehlung kippen würde.'
            ]
          },
          {
            heading: 'Was eine gute Zweitmeinung leisten muss',
            paragraphs: [
              'Die Zuordnung zu einer Risikogruppe — mit Begründung.',
              'Die vertretbaren Optionen, ausdrücklich einschließlich aktiver Überwachung, wo diese infrage kommt.',
              'Was jede Option konkret für Kontinenz und Sexualfunktion bedeutet, benannt statt beschwichtigt.',
              'Welche Nachsorge jede Option erfordert und über welchen Zeitraum.',
              'Bei empfohlener Operation: ob Nervenschonung voraussichtlich möglich ist, ein- oder beidseitig, und was diesen Plan intraoperativ ändern würde.',
              'Eine Antwort, die eine einzige Behandlung empfiehlt, ohne Alternativen zu erörtern, ist keine Zweitmeinung, sondern ein Verkaufsgespräch.'
            ]
          },
          {
            heading: 'Zeitdruck und wie Sie die Antwort nutzen',
            paragraphs: [
              'Fragen Sie ruhig: Was passiert, wenn ich drei Monate lang nichts entscheide? Beim Prostatakarzinom lautet die ehrliche Antwort meist, dass sich nichts Wesentliches ändert.',
              'Entsteht nach Ihrer Anfrage Druck, schnell zu buchen, ist dieser Druck kaufmännisch und nicht medizinisch begründet.',
              'Deckt sich die Zweitmeinung mit Ihrem bisherigen Plan, war sie nicht umsonst — Sie gehen den Weg dann mit Sicherheit statt mit Zweifel. Weichen die Einschätzungen ab, legen Sie die Abweichung Ihrer behandelnden Ärztin oder Ihrem Arzt vor und bitten um Stellungnahme.',
              'Eine Zweitmeinung verpflichtet Sie zu nichts. Sie können sie einholen und sich anschließend in Deutschland behandeln lassen; jede seriöse Stellungnahme wird auf dieser Grundlage verfasst.',
              'Dieser Beitrag dient der allgemeinen Information und ersetzt keine ärztliche Beratung.'
            ]
          }
        ]
      }
    }
  },
  {
    slug: 'prostatectomie-robotique-en-turquie-deroulement-et-couts',
    date: '2026-10-04',
    category: 'oncology',
    languages: ['fr'],
    treatmentSlug: 'robotik-prostatektomi',
    sources: [
      { label: 'EAU Guidelines on Prostate Cancer — European Association of Urology', url: 'https://uroweb.org/guidelines/prostate-cancer' }
    ],
    i18n: {
      fr: {
        title: 'Prostatectomie robotique en Turquie : déroulement et coûts',
        excerpt:
          'Le robot n\'opère pas. Ce qui compte, c\'est la personne à la console, ce que contient réellement le devis, et qui répond de vous une fois rentré chez vous.',
        metaTitle: 'Prostatectomie robotique en Turquie : déroulement, coûts, suivi',
        metaDescription:
          'Comment se déroule une prostatectomie robotique, préservation nerveuse, continence, ce que doit contenir un devis, durée du séjour et organisation du suivi au retour.',
        sections: [
          {
            heading: 'Le robot est un instrument, pas un opérateur',
            paragraphs: [
              'L\'expression « opération par robot » laisse croire que la machine agit seule. Ce n\'est pas le cas : chaque geste est effectué par le chirurgien, le système transmettant les mouvements de ses mains à des instruments fins, avec une vision agrandie et en relief.',
              'Le bénéfice est réel : précision dans un espace étroit, saignement généralement moindre, incisions de petite taille. Mais le résultat dépend de la personne à la console, pas de l\'appareil.',
              'La question « avez-vous un robot ? » est donc bien moins utile que « qui m\'opérera, et combien d\'interventions de ce type cette personne réalise-t-elle ? ».'
            ]
          },
          {
            heading: 'Ce qui est retiré, et ce que cela implique',
            paragraphs: [
              'La prostate est retirée en totalité avec les vésicules séminales, puis la vessie est raccordée à l\'urètre. Un curage ganglionnaire pelvien est réalisé lorsque le risque le justifie.',
              'La prostate étant retirée, il n\'y a plus d\'éjaculation après l\'intervention. La procréation naturelle n\'est donc plus possible, et ce point doit être énoncé clairement avant l\'opération.',
              'L\'orgasme reste possible sans éjaculation chez beaucoup d\'hommes, mais la sensation est différente.'
            ]
          },
          {
            heading: 'Continence : le déroulement réel',
            paragraphs: [
              'Avec la prostate disparaît une partie du mécanisme de continence ; le sphincter externe assure seul cette fonction et doit s\'y adapter. Les fuites après le retrait de la sonde constituent donc une phase de transition attendue, non une complication.',
              'L\'ordre habituel de récupération est le suivant : d\'abord les nuits sèches, puis le contrôle au repos, et en dernier les efforts — toux, éternuement, port de charges. L\'amélioration peut se poursuivre jusqu\'à un an.',
              'La rééducation périnéale est efficace à condition de solliciter le bon muscle. Apprenez la technique avant l\'intervention : c\'est nettement plus simple qu\'après.'
            ]
          },
          {
            heading: 'Préservation nerveuse : ce qu\'il faut comprendre',
            paragraphs: [
              'De part et d\'autre de la prostate cheminent des bandelettes vasculo-nerveuses qui interviennent dans le mécanisme de l\'érection. Leur préservation augmente la probabilité d\'une récupération.',
              'L\'ordre des priorités est toutefois invariable : exérèse complète de la tumeur d\'abord, préservation nerveuse ensuite si elle est possible. Si la tumeur s\'approche de la bandelette, travailler au plus près augmente le risque de laisser du tissu tumoral.',
              'Ce n\'est pas un choix binaire : la préservation peut être unilatérale, et le degré de proximité acceptable se module selon le bilan. Un chirurgien qui vous explique cet arbitrage est plus fiable que celui qui affirme d\'emblée que les nerfs seront préservés.',
              'Même préservés, les nerfs mettent des mois à récupérer, et l\'âge, le diabète, les maladies vasculaires, le tabac et la fonction antérieure pèsent sur le résultat.'
            ]
          },
          {
            heading: 'Ce que doit contenir un devis',
            paragraphs: [
              'Un chiffre isolé ne renseigne sur rien. Ce qui compte est le contenu.',
              'Doivent y figurer : le bilan préopératoire, l\'intervention avec chirurgien, anesthésie, instruments robotiques et consommables, le séjour hospitalier avec un nombre de nuits précisé, l\'examen anatomopathologique de la pièce opératoire, la consultation avant le départ, et les modalités du suivi après le retour.',
              'Ne sont généralement pas inclus : la prise en charge des complications, l\'hébergement prolongé et les vols. Posez la question explicitement et par écrit : en cas de complication nécessitant un séjour prolongé ou une seconde intervention, qui paie ?',
              'Si les coûts sont moindres en Turquie, c\'est en raison de la structure locale des coûts, non d\'un matériel moins cher : un robot et ses instruments à usage limité coûtent le même prix partout. Un devis anormalement bas omet donc quelque chose.'
            ]
          },
          {
            heading: 'Durée du séjour',
            paragraphs: [
              'C\'est la sonde qui fixe le calendrier. L\'anastomose entre vessie et urètre doit cicatriser, et la sonde reste en place pendant une durée définie.',
              'Elle est retirée sur place, avant votre départ, afin qu\'une éventuelle difficulté à uriner soit prise en charge près de l\'hôpital et non à l\'aéroport. Ne réservez pas votre vol au lendemain du retrait.',
              'Le voyage aérien après une chirurgie pelvienne expose à un risque thromboembolique ; l\'autorisation de vol est donnée au cas par cas. Respectez les consignes de marche, d\'hydratation et de contention, et consultez immédiatement en cas de douleur ou gonflement du mollet, de douleur thoracique ou d\'essoufflement.'
            ]
          },
          {
            heading: 'Compte rendu anatomopathologique et suivi',
            paragraphs: [
              'La pièce opératoire est analysée, et ce compte rendu détermine la nécessité éventuelle d\'un traitement complémentaire. Il est rarement disponible avant votre départ.',
              'Convenez avant de partir de la manière dont il vous parviendra, de qui vous l\'expliquera et dans quelle langue. Exigez le compte rendu opératoire, le résultat anatomopathologique et le compte rendu d\'hospitalisation en français : votre urologue en aura besoin.',
              'Le PSA est contrôlé à intervalles réguliers après l\'intervention. Déterminez qui interprète ces résultats, comment vous les transmettez et pour quelle durée cet engagement vaut.',
              'Vérifiez enfin les conditions de prise en charge d\'une intervention programmée à l\'étranger auprès de votre organisme d\'assurance maladie, avant de réserver et par écrit.',
              'Cet article est une information générale et ne remplace pas un avis médical.'
            ]
          }
        ]
      }
    }
  },
  {
    slug: 'calculs-renaux-rirs-ou-nlpc-comment-choisir',
    date: '2026-10-04',
    category: 'stones',
    languages: ['fr'],
    treatmentSlug: 'rirs',
    sources: [
      { label: 'EAU Guidelines on Urolithiasis — European Association of Urology', url: 'https://uroweb.org/guidelines/urolithiasis' }
    ],
    i18n: {
      fr: {
        title: 'Calculs rénaux : RIRS ou NLPC, comment choisir',
        excerpt:
          'Les deux techniques sont mini-invasives et toutes deux donnent de bons résultats. La question est de savoir laquelle convient à votre calcul — et si une seule séance suffira.',
        metaTitle: 'Calculs rénaux : RIRS ou NLPC, critères de choix',
        metaDescription:
          'Différences entre RIRS et NLPC, rôle de la taille, de la densité et de la localisation du calcul, risques, sonde JJ, et organisation du traitement à l\'étranger.',
        sections: [
          {
            heading: 'Deux voies d\'accès au même rein',
            paragraphs: [
              'La RIRS ne comporte aucune incision. Un instrument souple est monté par les voies naturelles — urètre, vessie, uretère — jusqu\'au rein, et le calcul est pulvérisé au laser jusqu\'à devenir assez fin pour être éliminé dans les urines.',
              'La NLPC passe par un trajet de petit calibre créé à travers la peau du dos, directement dans le rein. Ce trajet admet des instruments plus larges, ce qui permet de fragmenter et d\'extraire de gros calculs en une seule séance.',
              'Aucune des deux n\'est une chirurgie ouverte. La différence tient à la voie d\'abord et au calibre des instruments qu\'elle autorise.'
            ]
          },
          {
            heading: 'La taille du calcul : le critère principal',
            paragraphs: [
              'Les petits calculs relèvent plutôt de la RIRS : le calcul est réduit en poussière, les fragments s\'éliminent, et il ne reste aucune cicatrice.',
              'Au-delà d\'une certaine taille, le calcul change. Pulvériser un gros calcul prend du temps, et tous les fragments ne s\'évacuent pas : une deuxième séance, voire une troisième, peut être nécessaire. La NLPC, qui traite le calcul en une fois, devient alors plus logique.',
              'Pour un patient venu de l\'étranger, ce point est déterminant. Une seconde séance signifie un séjour prolongé ou un second voyage. Demandez explicitement quelle est la probabilité qu\'une séance ne suffise pas.'
            ]
          },
          {
            heading: 'Densité et localisation',
            paragraphs: [
              'Tous les calculs n\'ont pas la même dureté. La densité mesurée au scanner indique la résistance au laser ; un calcul très dense allonge l\'intervention et augmente la pression dans le rein.',
              'La localisation compte également, en particulier pour les calculs du calice inférieur : il s\'agit d\'une cavité déclive dont les fragments se drainent mal. Même bien pulvérisé, un calcul peut y laisser des résidus. Ces calculs orientent donc vers la NLPC pour une taille plus faible qu\'ailleurs.'
            ]
          },
          {
            heading: 'Quand la RIRS est préférée',
            paragraphs: [
              'Chez les patients sous anticoagulants, puisqu\'aucun trajet n\'est créé à travers le parenchyme rénal.',
              'Lorsque la morphologie ou l\'anatomie du rachis rend l\'abord percutané difficile.',
              'Chez les patients en rein unique fonctionnel, où la préservation du parenchyme prend un poids supplémentaire.',
              'Lorsqu\'un calcul urétéral peut être traité dans la même séance.'
            ]
          },
          {
            heading: 'Quand la NLPC est préférée',
            paragraphs: [
              'Pour les calculs volumineux, et en particulier les calculs coralliformes occupant les cavités rénales.',
              'En cas de calculs multiples, lorsque l\'objectif est l\'absence de résidu en une séance.',
              'Après échec d\'une RIRS n\'ayant pas permis d\'obtenir un rein sans calcul.'
            ]
          },
          {
            heading: 'Risques énoncés clairement',
            paragraphs: [
              'La NLPC comporte un risque hémorragique supérieur, le trajet traversant le parenchyme rénal. Une transfusion ou un geste complémentaire est parfois nécessaire ; l\'atteinte d\'organes voisins, rare, est documentée.',
              'Les risques de la RIRS concernent surtout l\'uretère : traumatisme lié au passage des instruments, et sténose urétérale secondaire. L\'élévation de la pression intrarénale pendant l\'intervention intervient aussi dans le risque infectieux.',
              'Dans les deux cas, l\'infection fébrile est la complication à prendre le plus au sérieux. D\'où l\'importance d\'un ECBU stérile avant l\'intervention : on ne programme pas une chirurgie du calcul sur des urines infectées, et un centre qui traite ce point comme une formalité prend un raccourci qui compte.'
            ]
          },
          {
            heading: 'La sonde JJ, et l\'après',
            paragraphs: [
              'Une sonde JJ temporaire est fréquemment mise en place entre le rein et la vessie. Elle sécurise le drainage mais provoque ses propres symptômes : pollakiurie, douleur lombaire à la miction, hématurie. Ces symptômes disparaissent à son retrait.',
              'La question pratique pour un patient étranger est de savoir qui la retire et où. Convenez-en avant de partir : soit le retrait a lieu en Turquie avant votre vol, soit il est organisé avec votre urologue, avec son accord préalable.',
              'Enfin, retirer le calcul ne représente que la moitié du traitement. Sans modification des apports hydriques et, selon le cas, de l\'alimentation, les calculs récidivent. Demandez l\'analyse de la composition du calcul et, en cas de récidives, un bilan métabolique.',
              'Cet article est une information générale et ne remplace pas un avis médical.'
            ]
          }
        ]
      }
    }
  },
  {
    slug: 'roboticheskaya-prostatektomiya-v-turcii',
    date: '2026-10-04',
    category: 'oncology',
    languages: ['ru'],
    treatmentSlug: 'robotik-prostatektomi',
    sources: [
      { label: 'EAU Guidelines on Prostate Cancer — European Association of Urology', url: 'https://uroweb.org/guidelines/prostate-cancer' }
    ],
    i18n: {
      ru: {
        title: 'Роботическая простатэктомия в Турции: как проходит лечение',
        excerpt:
          'Робот не оперирует сам. Значение имеют хирург за консолью, то, что на самом деле включено в смету, и то, кто отвечает за вас после возвращения домой.',
        metaTitle: 'Роботическая простатэктомия в Турции: ход лечения и стоимость',
        metaDescription:
          'Как проходит роботическая простатэктомия, сохранение нервов, восстановление удержания мочи, что должно входить в смету, срок пребывания и наблюдение после возвращения.',
        sections: [
          {
            heading: 'Робот — это инструмент, а не хирург',
            paragraphs: [
              'Формулировка «операцию выполняет робот» вводит в заблуждение. Каждое движение совершает хирург; система передаёт движения его рук тонким инструментам и даёт увеличенное объёмное изображение.',
              'Польза при этом реальная: точность в узком пространстве, как правило меньшая кровопотеря, небольшие разрезы. Но результат зависит от того, кто сидит за консолью, а не от аппарата.',
              'Поэтому вопрос «есть ли у вас робот» гораздо менее важен, чем вопрос «кто будет меня оперировать и сколько таких операций этот хирург выполняет».'
            ]
          },
          {
            heading: 'Что удаляют и что это означает',
            paragraphs: [
              'Предстательную железу удаляют целиком вместе с семенными пузырьками, после чего мочевой пузырь соединяют с мочеиспускательным каналом. При соответствующем риске удаляют и тазовые лимфатические узлы.',
              'Поскольку железу удаляют полностью, семяизвержения после операции не будет. Это означает утрату способности к естественному зачатию, и об этом нужно сказать прямо до операции, а не после.',
              'Оргазм без семяизвержения у многих мужчин сохраняется, но ощущение становится иным.'
            ]
          },
          {
            heading: 'Удержание мочи: как это происходит на самом деле',
            paragraphs: [
              'Вместе с железой утрачивается часть механизма удержания, и наружный сфинктер начинает работать один. Поэтому подтекание мочи после удаления катетера — это ожидаемый переходный период, а не осложнение.',
              'Обычный порядок восстановления такой: сначала появляются сухие ночи, затем контроль в покое, и в последнюю очередь — при нагрузке: кашле, чихании, подъёме тяжестей. Улучшение может продолжаться до года.',
              'Упражнения для мышц тазового дна действительно помогают, но при условии, что работает нужная мышца. Освойте технику до операции — после этого сделать это заметно труднее.'
            ]
          },
          {
            heading: 'Сохранение нервов: возможно, но не всегда',
            paragraphs: [
              'По обеим сторонам железы проходят сосудисто-нервные пучки, участвующие в механизме эрекции. Если их удаётся сохранить, вероятность возвращения функции выше.',
              'Однако порядок приоритетов неизменен: сначала полное удаление опухоли, затем, если это возможно, сохранение нервов. Если опухоль подходит близко к пучку, работа вплотную к нему повышает риск оставить опухолевую ткань.',
              'Это не выбор по принципу «всё или ничего»: сохранение может быть односторонним, а степень близости — разной. Хирург, который объясняет вам этот баланс, заслуживает большего доверия, чем тот, кто сразу обещает сохранить нервы.',
              'Даже при сохранённых нервах восстановление занимает месяцы и зависит от возраста, диабета, состояния сосудов, курения и функции до операции.'
            ]
          },
          {
            heading: 'Что должно входить в смету',
            paragraphs: [
              'Отдельно взятая цифра ничего не говорит. Значение имеет состав.',
              'Должны входить: дооперационное обследование; сама операция с оплатой хирурга, анестезии, роботических инструментов и расходных материалов; пребывание в стационаре с указанием числа ночей; гистологическое исследование удалённой железы; осмотр перед вылетом; порядок наблюдения после возвращения.',
              'Обычно не входят: лечение осложнений, продление проживания и авиабилеты. Спросите прямо и письменно: кто оплачивает лечение, если осложнение потребует более длительного пребывания или повторного вмешательства.',
              'Более низкая стоимость в Турции объясняется местной структурой затрат, а не дешёвым оборудованием: робот и его инструменты стоят одинаково везде. Поэтому необычно низкое предложение означает, что что-то из расчёта исключено.'
            ]
          },
          {
            heading: 'Срок пребывания определяет катетер',
            paragraphs: [
              'Место соединения мочевого пузыря с мочеиспускательным каналом должно зажить, и на это время устанавливают катетер.',
              'Катетер удаляют здесь, до вашего отъезда, чтобы возможное затруднение мочеиспускания решалось рядом с больницей, а не в аэропорту. Не покупайте билет на следующий день после удаления катетера.',
              'Перелёт после операции на органах таза связан с риском тромбоза, поэтому разрешение на полёт даётся индивидуально. Соблюдайте рекомендации о ходьбе в салоне, питье и компрессионном трикотаже, а при боли или отёке голени, боли в груди или одышке немедленно обращайтесь за помощью.'
            ]
          },
          {
            heading: 'Гистологический результат и наблюдение',
            paragraphs: [
              'Удалённую железу исследуют под микроскопом, и именно это заключение определяет, нужно ли дополнительное лечение. Как правило, оно готово уже после вашего отъезда.',
              'Договоритесь заранее, как вы получите заключение, кто его объяснит и на каком языке. Попросите протокол операции, гистологическое заключение и выписку — они понадобятся вашему врачу.',
              'После операции ПСА контролируют через определённые промежутки времени. Выясните, кто оценивает эти результаты, как вы их передаёте и на какой срок рассчитана эта договорённость.',
              'Эта статья носит общий информационный характер и не заменяет консультацию врача.'
            ]
          }
        ],
      }
    }
  },
  {
    slug: 'holep-pri-adenome-prostaty-v-turcii',
    date: '2026-10-08',
    category: 'bph',
    languages: ['ru'],
    treatmentSlug: 'holep',
    sources: [
      { label: 'EAU Guidelines on Management of Non-Neurogenic Male LUTS — European Association of Urology', url: 'https://uroweb.org/guidelines/management-of-non-neurogenic-male-luts' }
    ],
    i18n: {
      ru: {
        title: 'HoLEP при аденоме простаты в Турции: как проходит и что учесть',
        excerpt:
          'HoLEP удаляет разрастание целиком, а не срезает его частями. Для того, кто едет на операцию в другую страну, эта разница меняет и результат, и планирование поездки.',
        metaTitle: 'HoLEP при аденоме простаты в Турции: ход операции и восстановление',
        metaDescription:
          'Как проходит HoLEP, почему размер простаты определяет выбор метода, временное недержание, ретроградная эякуляция, что должно входить в смету и как организовать наблюдение дома.',
        sections: [
          {
            heading: 'Что именно происходит при HoLEP',
            paragraphs: [
              'Простату удобно сравнить с апельсином: снаружи кожура, внутри мякоть. При доброкачественном разрастании увеличивается внутренняя часть и сдавливает мочеиспускательный канал.',
              'Классическая ТУР срезает ткань изнутри слоями. HoLEP вместо этого отделяет всю внутреннюю ткань от капсулы гольмиевым лазером, перемещает её в мочевой пузырь и там измельчает для удаления. Наружная капсула сохраняется.',
              'Поскольку сужающая ткань удаляется полностью, а не частично, результат обычно более стойкий, и повторное вмешательство через несколько лет требуется реже. Тому, кто едет оперироваться за границу, взвешивать стоит именно это.'
            ]
          },
          {
            heading: 'Почему размер простаты определяет выбор',
            paragraphs: [
              'При ТУР с увеличением железы растут и длительность операции, и объём всасываемой промывной жидкости. Отсюда практический предел, за которым раньше переходили к открытой операции.',
              'Для энуклеации такого предела нет: той же техникой оперируют и очень крупные железы. Поэтому сегодня эндоскопически оперируют многих мужчин, которым прежде предложили бы открытое вмешательство.',
              'Если простата крупная, вопрос звучит не «какой лазер», а «энуклеация или открытая операция».'
            ]
          },
          {
            heading: 'Кровотечение и препараты, разжижающие кровь',
            paragraphs: [
              'При энуклеации сосуды закрываются по ходу отделения слоя, поэтому кровотечение обычно хорошо управляемо. Это важно для мужчин, принимающих антикоагулянты, и в равной мере — для обратной дороги.',
              'Тем не менее приём таких препаратов планируется индивидуально. Не отменяйте ничего самостоятельно: пришлите полный список лекарств уже при первом обращении, чтобы план был готов до поездки, а не в день операции.'
            ]
          },
          {
            heading: 'О чём часто умалчивают',
            paragraphs: [
              'После удаления внутренней ткани удержание мочи зависит только от наружного сфинктера, у которого раньше была поддержка. Этой мышце нужно время, и в этот период непроизвольное подтекание встречается часто.',
              'У большинства мужчин это проходит за недели. Упражнения для мышц тазового дна действительно помогают — и освоить их заметно легче до операции, чем после неё.',
              'Добавляется ретроградная эякуляция: семя чаще попадает в мочевой пузырь, а не наружу. Это безвредно и не влияет ни на эрекцию, ни на влечение, но касается способности к зачатию. Если вы планируете детей, скажите об этом прямо до операции.'
            ]
          },
          {
            heading: 'Что должна включать смета',
            paragraphs: [
              'Одна цифра говорит мало. Значение имеет то, что входит и что не входит.',
              'Входить должны: обследование перед операцией, само вмешательство с указанием оперирующего хирурга, анестезия и расходные материалы, пребывание в клинике с прямо названным числом ночей, гистологическое исследование удалённой ткани, контроль перед обратным вылетом и порядок дальнейшего наблюдения.',
              'Обычно не входят: лечение осложнений, продление проживания и перелёты. Спросите прямо и письменно: кто оплачивает, если осложнение потребует более долгого пребывания или второго вмешательства.',
              'Лечение в Турции стоит меньше из-за местной структуры расходов, а не из-за более дешёвой техники. Лазерные установки и расходные материалы стоят одинаково везде. Поэтому заметно низкая цена экономит на чём-то другом — чаще всего на времени хирурга или на том, что в смету не вошло.'
            ]
          },
          {
            heading: 'Оплата и документы: решите заранее',
            paragraphs: [
              'Плановое лечение за рубежом по ОМС не покрывается. Расходы несёте вы сами либо, если он есть, полис добровольного страхования. Уточните это в своей страховой до поездки и получите ответ письменно.',
              'Клиника за границей не может дать вам гарантий вашей страховой — и не должна на это намекать.',
              'Отдельно попросите подтвердить, получите ли вы протокол операции, результат гистологии и выписку с переводом. Врачу, который будет наблюдать вас дома, эти документы понадобятся.'
            ]
          },
          {
            heading: 'Срок пребывания и наблюдение дома',
            paragraphs: [
              'Планируйте приезд и обследование, операцию с коротким пребыванием в клинике, период с катетером, удаление катетера и контроль перед вылетом.',
              'Не берите обратный билет на день после удаления катетера. У части пациентов самостоятельное мочеиспускание восстанавливается не сразу — рядом с клиникой это решаемая задача, в аэропорту нет.',
              'До отъезда договоритесь, кто будет наблюдать вас дома, и поговорите со своим урологом до поездки, а не после неё.',
              'Этот материал носит общий информационный характер и не заменяет консультацию врача.'
            ]
          }
        ]
      }
    }
  },
  {
    slug: 'implant-penien-deroulement-et-attentes-realistes',
    date: '2026-10-08',
    category: 'andrology',
    languages: ['fr'],
    treatmentSlug: 'penil-protez',
    sources: [
      { label: 'EAU Guidelines on Sexual and Reproductive Health — European Association of Urology', url: 'https://uroweb.org/guidelines/sexual-and-reproductive-health' }
    ],
    i18n: {
      fr: {
        title: 'Implant pénien : déroulement et attentes réalistes',
        excerpt:
          'L’intervention est irréversible et l’infection est la complication qui compte vraiment. Ces deux faits devraient peser plus lourd dans la décision que le prix ou la publicité.',
        metaTitle: 'Implant pénien : déroulement, types de prothèse et attentes réalistes',
        metaDescription:
          'Quand l’implant pénien se justifie, différences entre prothèse malléable et hydraulique, risque infectieux, diabète, attentes réalistes, devis et suivi au retour.',
        sections: [
          {
            heading: 'Deux faits à poser d’emblée',
            paragraphs: [
              'Premièrement, l’intervention est irréversible. Pour mettre la prothèse en place, il faut dilater le tissu érectile ; les érections naturelles ne reviennent pas ensuite. S’il fallait retirer la prothèse sans la remplacer, la situation serait moins bonne qu’avant.',
              'Deuxièmement, l’infection est la complication la plus redoutée, car un implant infecté doit souvent être retiré. La sélection des patients, l’équilibre du diabète, la préparation et la technique visent toutes à réduire ce risque.',
              'Ces deux points plaident contre une décision rapide et guidée par le prix.'
            ]
          },
          {
            heading: 'La prothèse vient en dernier, pas en premier',
            paragraphs: [
              'Devant des troubles de l’érection, on commence par les comprimés, puis les injections intracaverneuses, puis les systèmes à dépression. Beaucoup d’hommes s’en accommodent durablement.',
              'Si l’on vous propose une prothèse sans vous demander ce que vous avez déjà essayé et pourquoi cela n’a pas suffi, c’est un signal d’alerte. Un chirurgien qui vous dit que vous n’êtes pas encore candidat fait preuve de jugement.',
              'Autre point important : les troubles de l’érection sont souvent un signe précoce de maladie vasculaire ou de diabète. Une prothèse ne traite ni l’un ni l’autre, et ces maladies, elles, continuent d’évoluer.'
            ]
          },
          {
            heading: 'Diabète et risque d’infection',
            paragraphs: [
              'Un diabète mal équilibré augmente nettement le risque infectieux. Si votre hémoglobine glyquée est élevée, la bonne recommandation est d’améliorer l’équilibre avant l’intervention, même si cela impose de la reporter.',
              'Une équipe qui reporte pour cette raison vous protège. Une équipe qui opère quand même protège son planning.',
              'Demandez concrètement quel seuil le chirurgien exige et si votre valeur actuelle le respecte.'
            ]
          },
          {
            heading: 'Les deux types de prothèse',
            paragraphs: [
              'La prothèse malléable est composée de deux tiges semi-rigides. Le pénis est relevé au besoin puis rabattu. Avantage : maniement simple, aucune mécanique, moins de pannes. Inconvénient : le pénis reste en permanence ferme, ce qui peut gêner pour s’habiller.',
              'La prothèse hydraulique (gonflable) comprend des cylindres, une pompe placée dans le scrotum et un réservoir de liquide. Elle donne le résultat le plus naturel, car le pénis reste souple au repos. En contrepartie, c’est un système mécanique qu’il faut savoir manipuler et qui peut tomber en panne.',
              'Aucun des deux types n’est supérieur en soi. La force et la dextérité des mains, l’arthrose, une fibrose préexistante des corps caverneux et vos propres priorités orientent le choix. Qui propose le même modèle à tous ses patients ne personnalise pas.'
            ]
          },
          {
            heading: 'Les attentes à énoncer avant, pas après',
            paragraphs: [
              'La prothèse restaure la rigidité. Elle ne restaure ni la sensibilité, ni le désir, ni l’éjaculation. Ce qui était diminué avant le reste après.',
              'Beaucoup d’hommes trouvent le pénis plus court qu’avant l’intervention. C’est l’une des causes les plus fréquentes d’insatisfaction, et cela doit être dit avant l’opération, pas après.',
              'La prothèse est durable mais pas éternelle. Après plusieurs années, une panne mécanique peut imposer un remplacement — un point bien réel pour un patient jeune.'
            ]
          },
          {
            heading: 'Ce que doit contenir un devis sérieux',
            paragraphs: [
              'Un chiffre isolé ne veut rien dire. Ce qui compte, c’est ce qui est inclus et ce qui ne l’est pas.',
              'Devraient être inclus : le bilan préopératoire, l’intervention avec le nom du chirurgien qui opère, l’anesthésie, le modèle et la marque exacte de la prothèse, le séjour hospitalier avec un nombre de nuits explicite, le contrôle avant le vol retour et l’organisation du suivi.',
              'Ne sont habituellement pas inclus : la prise en charge des complications, la prolongation de l’hébergement et les vols. Posez la question par écrit : qui paie si une infection impose le retrait de la prothèse et une seconde intervention ?',
              'Demandez aussi la marque et la référence du dispositif implanté, et conservez la carte d’implant. Si une révision est nécessaire des années plus tard, cette information fait gagner du temps à l’équipe qui vous reprendra.'
            ]
          },
          {
            heading: 'Prise en charge, séjour et suivi en France',
            paragraphs: [
              'Une intervention programmée à l’étranger n’est pas remboursée d’office. Une prise en charge suppose en règle générale un accord préalable de votre caisse d’assurance maladie, demandé avant le départ. Faites-vous répondre par écrit ; une clinique étrangère ne peut pas engager votre caisse.',
              'Prévoyez l’arrivée et le bilan, l’intervention, puis un contrôle avant le vol retour. La prothèse hydraulique n’est pas activée immédiatement : on attend la cicatrisation, et l’apprentissage de la pompe se fait lors d’une consultation dédiée.',
              'Avant de partir, convenez de qui assurera le suivi en France et faites-vous remettre le compte rendu opératoire, la carte d’implant et le compte rendu de sortie, traduits. Parlez-en à votre urologue avant le voyage, pas après.',
              'Cet article a une visée d’information générale et ne remplace pas une consultation médicale.'
            ]
          }
        ]
      }
    }
  },
  {
    slug: 'penilnyy-protez-kak-prohodit-i-chego-ozhidat',
    date: '2026-10-08',
    category: 'andrology',
    languages: ['ru'],
    treatmentSlug: 'penil-protez',
    sources: [
      { label: 'EAU Guidelines on Sexual and Reproductive Health — European Association of Urology', url: 'https://uroweb.org/guidelines/sexual-and-reproductive-health' }
    ],
    i18n: {
      ru: {
        title: 'Пенильный протез: как проходит операция и чего ожидать',
        excerpt:
          'Операция необратима, а инфекция — то осложнение, которое действительно решает исход. Эти два факта должны весить в решении больше, чем цена или реклама.',
        metaTitle: 'Пенильный протез: ход операции, типы протезов и реальные ожидания',
        metaDescription:
          'Когда показан пенильный протез, разница между пластичным и гидравлическим, риск инфекции, диабет, реальные ожидания, что входит в смету и наблюдение после возвращения.',
        sections: [
          {
            heading: 'Два факта, которые нужно назвать сразу',
            paragraphs: [
              'Первое: операция необратима. Чтобы установить протез, кавернозную ткань приходится расширить; естественные эрекции после этого не возвращаются. Если бы протез пришлось удалить без замены, положение стало бы хуже, чем до операции.',
              'Второе: инфекция — самое серьёзное осложнение, потому что инфицированный имплант чаще всего приходится удалять. Отбор пациентов, компенсация диабета, подготовка и техника — всё это направлено на снижение именно этого риска.',
              'Оба факта говорят против быстрого решения, принятого по цене.'
            ]
          },
          {
            heading: 'Протез — это последний шаг, а не первый',
            paragraphs: [
              'При нарушении эрекции сначала применяют таблетки, затем инъекции в кавернозные тела, затем вакуумные системы. Многим мужчинам этого хватает надолго.',
              'Если протез предлагают, не спросив, что вы уже пробовали и почему это не помогло, — это тревожный признак. Хирург, который говорит, что вы пока не кандидат, проявляет здравый смысл.',
              'И ещё одно: нарушение эрекции часто бывает ранним признаком сосудистого заболевания или диабета. Протез не лечит ни то, ни другое, а эти болезни продолжают развиваться.'
            ]
          },
          {
            heading: 'Диабет и риск инфекции',
            paragraphs: [
              'Плохо компенсированный диабет заметно повышает риск инфекции. Если гликированный гемоглобин высокий, правильная рекомендация — сначала улучшить компенсацию, даже если это означает отсрочку.',
              'Клиника, которая переносит операцию по этой причине, защищает вас. Клиника, которая оперирует несмотря ни на что, защищает своё расписание.',
              'Спросите прямо, какой порог требует хирург и соответствует ли ему ваш текущий показатель.'
            ]
          },
          {
            heading: 'Два типа протезов',
            paragraphs: [
              'Пластичный протез состоит из двух полужёстких стержней. Половой член при необходимости поднимают, затем опускают. Плюсы: простое обращение, нет механики, меньше поломок. Минус: член постоянно остаётся плотным, что может мешать при одевании.',
              'Гидравлический (надувной) протез состоит из цилиндров, помпы в мошонке и резервуара с жидкостью. Он даёт самый естественный результат, потому что в покое член остаётся мягким. Взамен это механическая система, которой нужно уметь пользоваться и которая может выйти из строя.',
              'Ни один тип не лучше другого сам по себе. Выбор определяют сила и точность движений рук, артроз, уже имеющийся рубцовый процесс в кавернозных телах и ваши собственные приоритеты. Тот, кто предлагает всем один и тот же тип, не подбирает индивидуально.'
            ]
          },
          {
            heading: 'Ожидания, которые нужно проговорить до операции',
            paragraphs: [
              'Протез восстанавливает только твёрдость. Он не восстанавливает ни чувствительность, ни влечение, ни семяизвержение. Что было снижено до операции, останется сниженным и после.',
              'Многие мужчины после операции ощущают половой член более коротким, чем прежде. Это одна из самых частых причин неудовлетворённости, и говорить об этом нужно до вмешательства, а не после.',
              'Протез служит долго, но не бесконечно. Через годы механическая поломка может потребовать замены — для молодого пациента это вполне реальный пункт.'
            ]
          },
          {
            heading: 'Что должна включать смета',
            paragraphs: [
              'Отдельная цифра ничего не значит. Значение имеет то, что входит и что не входит.',
              'Входить должны: обследование перед операцией, само вмешательство с указанием оперирующего хирурга, анестезия, точная марка и модель протеза, пребывание в клинике с названным числом ночей, контроль перед обратным вылетом и порядок наблюдения.',
              'Обычно не входят: лечение осложнений, продление проживания и перелёты. Задайте вопрос письменно: кто оплачивает, если инфекция потребует удаления протеза и повторной операции.',
              'Отдельно попросите марку и номер установленного устройства и сохраните карту импланта. Если через годы понадобится ревизия, эта информация сэкономит время тем, кто будет вас оперировать.'
            ]
          },
          {
            heading: 'Оплата, срок пребывания и наблюдение дома',
            paragraphs: [
              'Плановое лечение за рубежом по ОМС не покрывается: расходы несёте вы сами либо полис добровольного страхования, если он у вас есть. Уточните это в своей страховой до поездки и получите ответ письменно.',
              'Планируйте приезд и обследование, операцию, затем контроль перед вылетом. Гидравлический протез не активируют сразу: ждут заживления, а обращению с помпой учат на отдельном приёме.',
              'До отъезда договоритесь, кто будет наблюдать вас дома, и возьмите с собой протокол операции, карту импланта и выписку с переводом.',
              'Этот материал носит общий информационный характер и не заменяет консультацию врача.'
            ]
          }
        ]
      }
    }
  },
  {
    slug: 'kamni-v-pochkah-rirs-ili-pnl-kak-vybirayut',
    date: '2026-10-08',
    category: 'stones',
    languages: ['ru'],
    treatmentSlug: 'rirs',
    sources: [
      { label: 'EAU Guidelines on Urolithiasis — European Association of Urology', url: 'https://uroweb.org/guidelines/urolithiasis' }
    ],
    i18n: {
      ru: {
        title: 'Камни в почках: РИРХ или ПНЛ — как делают выбор',
        excerpt:
          'Обе операции малоинвазивны, и обе хороши. Вопрос в том, какая подходит именно вашему камню — и реально ли закончить лечение за одну поездку.',
        metaTitle: 'Камни в почках: РИРХ или ПНЛ, как выбирают метод',
        metaDescription:
          'Чем различаются РИРХ и ПНЛ, как размер, плотность и расположение камня определяют выбор, стент и его симптомы, риск второго сеанса и планирование лечения за рубежом.',
        sections: [
          {
            heading: 'Два пути в одну и ту же почку',
            paragraphs: [
              'РИРХ (ретроградная внутрипочечная хирургия) не требует разреза вообще. Гибкий инструмент проводят через мочеиспускательный канал, мочевой пузырь и мочеточник в почку, а камень дробят лазером до состояния пыли, которая выходит естественным путём.',
              'ПНЛ (перкутанная нефролитотрипсия) использует небольшой канал через кожу поясницы прямо в почку. Через него проходят более крупные инструменты, поэтому большой камень можно раздробить и извлечь за один сеанс.',
              'Ни то, ни другое не является открытой операцией. Разница — в пути доступа и в том, инструменты какого размера этот путь пропускает.'
            ]
          },
          {
            heading: 'Размер камня — главный фактор',
            paragraphs: [
              'Маленькие камни — довод в пользу РИРХ. Камень превращают в пыль, фрагменты выходят сами, раны нет.',
              'С увеличением размера арифметика меняется. Раздробить крупный камень в пыль долго, и не каждый фрагмент выйдет, поэтому может понадобиться второй, а иногда и третий сеанс. В этот момент ПНЛ, которая очищает почку за один раз, становится разумнее.',
              'Для пациента, который приехал издалека, это важнее, чем для местного. Второй сеанс означает либо более долгое пребывание, либо вторую поездку. Спросите прямо: какова реальная вероятность, что одного сеанса не хватит.'
            ]
          },
          {
            heading: 'Плотность и расположение',
            paragraphs: [
              'Камни различаются по твёрдости. Показатель плотности, измеренный на КТ, говорит о том, насколько камень будет сопротивляться лазеру. Очень плотный камень дробится дольше, а это удлиняет операцию и повышает давление внутри почки.',
              'Расположение тоже имеет значение, особенно для камней нижней чашечки. Это нижний карман, из которого фрагменты выходят плохо, поэтому даже хорошо раздробленный камень может оставить остаток. Поэтому при камнях нижней чашечки к ПНЛ склоняются при меньшем размере, чем в других отделах.'
            ]
          },
          {
            heading: 'Когда предпочитают РИРХ',
            paragraphs: [
              'У пациентов, принимающих препараты, разжижающие кровь, — потому что канал через ткань почки не создаётся.',
              'У пациентов, которым телосложение или анатомия позвоночника затрудняют чрескожный доступ.',
              'У пациентов с единственной функционирующей почкой, где сохранение почечной ткани весит особенно много.',
              'Когда есть и камень мочеточника, который можно убрать в тот же сеанс.'
            ]
          },
          {
            heading: 'Когда предпочитают ПНЛ',
            paragraphs: [
              'При крупных камнях и особенно при коралловидных, заполняющих чашечно-лоханочную систему.',
              'При множественных камнях, когда цель — очистить почку за один сеанс.',
              'Когда предыдущая РИРХ не привела к полному освобождению почки от камня.'
            ]
          },
          {
            heading: 'Риски, названные прямо',
            paragraphs: [
              'ПНЛ сопряжена с более высоким риском кровотечения, чем РИРХ, потому что создаётся канал через ткань почки. Изредка требуется переливание или дополнительное вмешательство; повреждение соседних структур встречается нечасто, но известно.',
              'Риски РИРХ связаны в основном с мочеточником: травма при проведении инструмента и стриктура, которая может развиться позже. Повышенное давление внутри почки во время вмешательства также имеет значение для риска инфекции.',
              'Для обоих методов самое серьёзное осложнение — лихорадочная инфекция. Именно поэтому чистый посев мочи перед операцией не формальность. Операцию по поводу камня не планируют на инфицированной моче, и клиника, которая считает это необязательным, срезает угол там, где этого делать нельзя.'
            ]
          },
          {
            heading: 'Стент, о котором обычно не предупреждают',
            paragraphs: [
              'После любого из вмешательств часто устанавливают временный стент между почкой и мочевым пузырём. Он защищает отток, но даёт собственные симптомы: учащённое мочеиспускание, дискомфорт в боку при мочеиспускании, кровь в моче.',
              'Эти симптомы прекращаются после удаления стента. Практический вопрос для пациента из другой страны — кто и где его удалит. Удаление требует короткой процедуры, поэтому до поездки выясните: уберут ли стент в Турции до вылета или это организуют дома — и если дома, то согласен ли ваш уролог.',
              'Пациентов часто удивляет, насколько ощутим дискомфорт от стента. Знание о том, что это ожидаемо и временно, заметно облегчает ситуацию.'
            ]
          },
          {
            heading: 'Что прислать и что сделать потом',
            paragraphs: [
              'Ключевое исследование — КТ без контраста: она показывает размер, расположение и плотность. Пришлите также свежие показатели функции почек, посев мочи, список лекарств и сведения о предыдущем лечении камней.',
              'И то, о чём обычно забывают: удалить камень — это половина лечения. Без изменения питьевого режима и, где это уместно, питания камни склонны образовываться снова. Попросите исследовать состав камня, а при повторном камнеобразовании — пройти метаболическое обследование.',
              'Этот материал носит общий информационный характер и не заменяет консультацию врача.'
            ]
          }
        ]
      }
    }
  },
  {
    slug: 'vtoroe-mnenie-pri-rake-prostaty-kakie-dokumenty-nuzhny',
    date: '2026-10-08',
    category: 'oncology',
    languages: ['ru'],
    treatmentSlug: 'prostat-kanseri',
    sources: [
      { label: 'EAU Guidelines on Prostate Cancer — European Association of Urology', url: 'https://uroweb.org/guidelines/prostate-cancer' }
    ],
    i18n: {
      ru: {
        title: 'Второе мнение при раке простаты: какие документы нужны',
        excerpt:
          'Второе мнение стоит ровно столько, сколько стоят документы, на которых оно основано. Решает то, что вы пришлёте и в каком виде — особенно МРТ в формате DICOM.',
        metaTitle: 'Второе мнение при раке простаты: какие документы прислать',
        metaDescription:
          'Какие заключения нужны для второго мнения при раке простаты, почему МРТ нужно присылать в DICOM, что даёт пересмотр гистологии и как использовать полученное заключение.',
        sections: [
          {
            heading: 'Зачем вообще второе мнение',
            paragraphs: [
              'При раке простаты нередко существует больше одного обоснованного пути. Активное наблюдение, операция и лучевая терапия в одной и той же ситуации могут быть одинаково оправданы — но с разным профилем побочных эффектов и разным порядком наблюдения.',
              'Поэтому второе мнение — это не выражение недоверия лечащему врачу, а способ понять, какой из этих путей отвечает вашим приоритетам.',
              'Есть и профессиональная причина. Градация биопсии простаты основана на оценке специалиста. Пересмотр препаратов второй патоморфологической лабораторией может изменить группу — а вместе с ней и рекомендацию.'
            ]
          },
          {
            heading: 'Какие документы действительно нужны',
            paragraphs: [
              'Динамика ПСА, а не только последнее значение. Изменение во времени несёт информацию, которой нет в одном измерении.',
              'Полное заключение биопсии: число взятых и число поражённых столбиков, их локализация, сумма Глисона или группа ISUP по каждому столбику и процент поражения.',
              'Заключение МРТ с указанием PI-RADS — и, что важнее всего, сами изображения.',
              'Выполненные исследования по стадированию.',
              'Данные пальцевого ректального исследования.',
              'Сопутствующие заболевания, список лекарств и возраст. Это не дополнение: от этого прямо зависит, какое лечение разумно.'
            ]
          },
          {
            heading: 'МРТ присылайте в DICOM, а не фотографией',
            paragraphs: [
              'Это самая частая причина, по которой второе мнение оказывается бесполезным. Снимок экрана или PDF с несколькими распечатанными срезами не позволяют дать настоящую оценку.',
              'Попросите в отделении лучевой диагностики запись исследования на диск или набор данных DICOM. По закону вы имеете право получить копии своих медицинских документов; многие учреждения сегодня дают и ссылку для скачивания. Большой объём данных — это нормально.',
              'Без самих изображений второе мнение может лишь пересказать чужое письменное заключение. Это не независимая оценка, а переформулировка.'
            ]
          },
          {
            heading: 'Гистологические препараты',
            paragraphs: [
              'Если речь идёт о пересмотре гистологии, нужны сами стёкла или парафиновые блоки — одного заключения недостаточно.',
              'Лаборатория, выполнявшая исследование, обязана выдать их вам или направить по запросу в другое учреждение. Это обычная процедура, а не исключение; попросите об этом письменно и уточните срок.',
              'Пересмотр имеет смысл не всегда. Он особенно оправдан, когда от группы ISUP зависит выбор между активным наблюдением и радикальным лечением.'
            ]
          },
          {
            heading: 'Чего второе мнение не делает',
            paragraphs: [
              'Оно не ставит новый диагноз по переписке и не обещает исход. Оно оценивает имеющиеся данные и объясняет, какие варианты обоснованы и чем они различаются.',
              'Оно не заменяет осмотр. Некоторые решения требуют личного обследования, и честное заключение так и скажет.',
              'И оно не должно превращаться в предложение операции. Если ответ на запрос второго мнения — сразу смета и дата, вы получили не мнение, а коммерческое предложение.'
            ]
          },
          {
            heading: 'Как этим пользоваться',
            paragraphs: [
              'Запишите свои вопросы заранее и по порядку: что означает моя группа риска, какие варианты обоснованы, чем они различаются по удержанию мочи и половой функции, как выглядит наблюдение в каждом случае.',
              'Покажите полученное заключение своему лечащему врачу. Цель — не противопоставить двух специалистов, а собрать общую картину, на основе которой вы примете решение.',
              'Если вы рассматриваете лечение за рубежом, помните: ОМС плановое лечение за границей не покрывает, и наблюдение после возвращения нужно организовать заранее, а не после приезда.',
              'Этот материал носит общий информационный характер и не заменяет консультацию врача.'
            ]
          }
        ]
      }
    }
  },
  {
    slug: 'holep-en-turquie-deroulement-sejour-et-suivi',
    date: '2026-10-08',
    category: 'bph',
    languages: ['fr'],
    treatmentSlug: 'holep',
    sources: [
      { label: 'EAU Guidelines on Management of Non-Neurogenic Male LUTS — European Association of Urology', url: 'https://uroweb.org/guidelines/management-of-non-neurogenic-male-luts' }
    ],
    i18n: {
      fr: {
        title: 'HoLEP en Turquie : déroulement, séjour et suivi',
        excerpt:
          'La HoLEP retire la totalité du tissu obstructif au lieu de le raboter. Pour qui se déplace à l’étranger pour être opéré, cette différence change à la fois le résultat et l’organisation du voyage.',
        metaTitle: 'HoLEP en Turquie : déroulement, durée de séjour, devis et suivi',
        metaDescription:
          'Comment se déroule la HoLEP, pourquoi le volume prostatique oriente le choix, l’incontinence transitoire, l’éjaculation rétrograde, ce que doit contenir un devis et le suivi en France.',
        sections: [
          {
            heading: 'Ce qui se passe réellement pendant une HoLEP',
            paragraphs: [
              'On peut comparer la prostate à une orange : la peau à l’extérieur, la pulpe à l’intérieur. Dans l’hypertrophie bénigne, c’est la partie interne qui grossit et comprime l’urètre.',
              'La RTUP classique rabote le tissu de l’intérieur, par copeaux. La HoLEP décolle au contraire la totalité du tissu interne de la capsule au laser holmium, le repousse dans la vessie et l’y fragmente pour l’évacuer. La capsule externe est conservée.',
              'Parce que le tissu obstructif est retiré en totalité et non partiellement, le résultat est en règle générale plus durable et une réintervention à distance est plus rare. C’est précisément ce point qu’il faut peser quand on voyage pour se faire opérer.'
            ]
          },
          {
            heading: 'Pourquoi le volume de la prostate oriente le choix',
            paragraphs: [
              'Avec la RTUP, plus la glande est volumineuse, plus l’intervention dure et plus le volume de liquide d’irrigation absorbé augmente. Il en découle une limite pratique au-delà de laquelle on passait autrefois à la chirurgie ouverte.',
              'Pour l’énucléation, cette limite ne s’applique pas de la même façon : la même technique permet de traiter des glandes très volumineuses. C’est pourquoi beaucoup d’hommes sont aujourd’hui opérés par voie endoscopique alors qu’on leur aurait proposé une chirurgie ouverte il y a quelques années.',
              'Si votre prostate est volumineuse, la vraie question n’est donc pas « quel laser » mais « énucléation ou chirurgie ouverte ».'
            ]
          },
          {
            heading: 'Saignement et anticoagulants',
            paragraphs: [
              'Lors de l’énucléation, les vaisseaux sont coagulés au fur et à mesure du décollement du plan, si bien que le saignement est en général bien maîtrisé. Cela compte pour les hommes sous anticoagulant ou antiagrégant, et tout autant pour le vol retour.',
              'Ces traitements doivent néanmoins être gérés au cas par cas. N’arrêtez jamais un médicament de votre propre initiative : envoyez la liste complète de vos traitements dès la première demande, pour que la conduite à tenir soit arrêtée avant le départ et non la veille de l’intervention.'
            ]
          },
          {
            heading: 'Ce que l’on passe souvent sous silence',
            paragraphs: [
              'Une fois le tissu interne retiré, la continence ne repose plus que sur le sphincter externe, qui bénéficiait auparavant d’un appui. Ce muscle a besoin de temps, et dans l’intervalle les fuites urinaires sont fréquentes.',
              'Chez la plupart des hommes, cela s’améliore en quelques semaines. La rééducation périnéale aide réellement — et elle s’apprend beaucoup plus facilement avant l’opération qu’après.',
              'S’y ajoute l’éjaculation rétrograde : le sperme part le plus souvent dans la vessie au lieu d’être émis. C’est sans danger et cela n’altère ni l’érection ni le désir, mais cela concerne la fertilité. Si vous avez encore un projet de paternité, dites-le explicitement avant l’intervention.'
            ]
          },
          {
            heading: 'Ce que doit contenir un devis sérieux',
            paragraphs: [
              'Un chiffre isolé ne veut rien dire. Ce qui compte, c’est ce qui est inclus et ce qui ne l’est pas.',
              'Devraient être inclus : le bilan préopératoire, l’intervention avec le nom du chirurgien qui opère, l’anesthésie et les consommables, le séjour hospitalier avec un nombre de nuits explicite, l’analyse anatomopathologique du tissu retiré, le contrôle avant le vol retour et l’organisation du suivi.',
              'Ne sont habituellement pas inclus : la prise en charge des complications, la prolongation de l’hébergement et les vols. Demandez par écrit qui paie si une complication impose un séjour prolongé ou une seconde intervention.',
              'Si le traitement coûte moins cher en Turquie, c’est en raison de la structure locale des coûts, pas d’une technique moins chère. Les lasers et les consommables coûtent le même prix partout. Un devis nettement plus bas économise donc sur autre chose.'
            ]
          },
          {
            heading: 'Prise en charge : réglez-le avant de réserver',
            paragraphs: [
              'Une intervention programmée à l’étranger n’est pas remboursée d’office. Hors situations particulières, une prise en charge suppose un accord préalable de votre caisse d’assurance maladie, demandé avant le départ.',
              'Faites cette démarche avant de réserver et faites-vous répondre par écrit. Une clinique étrangère ne peut pas engager votre caisse — et ne devrait pas le laisser entendre.',
              'Demandez également si vous recevrez le compte rendu opératoire, le résultat anatomopathologique et le compte rendu de sortie traduits. Les médecins qui vous suivront en auront besoin.'
            ]
          },
          {
            heading: 'Durée de séjour et suivi en France',
            paragraphs: [
              'Prévoyez l’arrivée et le bilan, l’intervention avec un court séjour hospitalier, la période avec sonde, le retrait de la sonde puis un contrôle avant le vol retour.',
              'Ne réservez pas le vol retour pour le lendemain du retrait de la sonde. Certains patients ne peuvent pas uriner spontanément tout de suite — à proximité de la clinique c’est un problème qui se règle, à l’aéroport non.',
              'Avant de partir, convenez de qui assurera le suivi en France. Parlez-en à votre urologue avant le voyage, pas après.',
              'Cet article a une visée d’information générale et ne remplace pas une consultation médicale.'
            ]
          }
        ]
      }
    }
  },
  {
    slug: 'deuxieme-avis-cancer-de-la-prostate-quels-documents-envoyer',
    date: '2026-10-08',
    category: 'oncology',
    languages: ['fr'],
    treatmentSlug: 'prostat-kanseri',
    sources: [
      { label: 'EAU Guidelines on Prostate Cancer — European Association of Urology', url: 'https://uroweb.org/guidelines/prostate-cancer' }
    ],
    i18n: {
      fr: {
        title: 'Deuxième avis sur un cancer de la prostate : quels documents envoyer',
        excerpt:
          'Un deuxième avis ne vaut que ce que valent les documents sur lesquels il repose. L’essentiel est d’envoyer les bonnes pièces au bon format — en particulier l’IRM en DICOM.',
        metaTitle: 'Deuxième avis cancer de la prostate : quels documents envoyer',
        metaDescription:
          'Quels comptes rendus sont nécessaires pour un deuxième avis sur un cancer de la prostate, pourquoi envoyer l’IRM en DICOM, ce qu’apporte une relecture anatomopathologique.',
        sections: [
          {
            heading: 'Pourquoi demander un deuxième avis',
            paragraphs: [
              'Dans le cancer de la prostate, il existe souvent plus d’une stratégie défendable. Surveillance active, chirurgie et radiothérapie peuvent se justifier dans une même situation — avec des profils d’effets secondaires et des modalités de suivi différents.',
              'Un deuxième avis n’est donc pas une marque de défiance envers votre médecin, mais un moyen de comprendre laquelle de ces voies correspond à vos priorités.',
              'S’y ajoute une raison technique : la gradation d’une biopsie prostatique repose sur une appréciation. Une relecture par un second anatomopathologiste peut modifier le groupe ISUP — et avec lui la recommandation.'
            ]
          },
          {
            heading: 'Les documents réellement nécessaires',
            paragraphs: [
              'L’évolution du PSA, et pas seulement la dernière valeur. La cinétique contient une information qu’un dosage isolé n’a pas.',
              'Le compte rendu complet de la biopsie : nombre de carottes prélevées et envahies, leur localisation, le score de Gleason ou groupe ISUP par carotte et le pourcentage d’envahissement.',
              'Le compte rendu d’IRM avec le score PI-RADS — et surtout les images elles-mêmes.',
              'Les examens de bilan d’extension déjà réalisés.',
              'Le résultat du toucher rectal.',
              'Les maladies associées, la liste des traitements et l’âge. Ce ne sont pas des détails : ils déterminent directement ce qui est raisonnable.'
            ]
          },
          {
            heading: 'Envoyez l’IRM en DICOM, pas en photo',
            paragraphs: [
              'C’est la raison la plus fréquente pour laquelle un deuxième avis n’apporte rien. Une photo d’écran ou un PDF contenant quelques coupes imprimées ne permettent aucune relecture sérieuse.',
              'Demandez au service de radiologie l’examen sur CD ou sous forme de fichiers DICOM. La loi vous donne accès à votre dossier médical et à la copie des pièces qui le composent ; beaucoup d’établissements proposent aujourd’hui un téléchargement. Le volume de données est important, c’est normal.',
              'Sans les images, un deuxième avis ne peut que reformuler le compte rendu d’un confrère. Ce n’est pas une évaluation indépendante.'
            ]
          },
          {
            heading: 'Les lames et les blocs',
            paragraphs: [
              'Pour une relecture anatomopathologique, ce sont les lames ou les blocs de paraffine qui sont nécessaires — le compte rendu seul ne suffit pas.',
              'Le laboratoire qui a réalisé l’examen doit vous les remettre ou les adresser sur demande à un autre établissement. C’est une démarche courante : formulez-la par écrit et demandez le délai.',
              'La relecture ne s’impose pas dans tous les cas. Elle se justifie surtout quand le groupe ISUP décide entre surveillance active et traitement radical.'
            ]
          },
          {
            heading: 'Ce qu’un deuxième avis ne fait pas',
            paragraphs: [
              'Il n’établit pas un nouveau diagnostic à distance et ne promet pas de résultat. Il évalue les données disponibles et explique quelles options sont défendables et en quoi elles diffèrent.',
              'Il ne remplace pas un examen clinique. Certaines décisions imposent une consultation en personne, et un avis honnête le dira.',
              'Et il ne devrait pas se transformer en proposition opératoire. Si la réponse à votre demande est immédiatement un devis et une date, vous n’avez pas reçu un avis mais une offre commerciale.'
            ]
          },
          {
            heading: 'Comment vous en servir',
            paragraphs: [
              'Préparez vos questions à l’avance et dans l’ordre : que signifie mon groupe de risque, quelles options sont défendables, en quoi diffèrent-elles pour la continence et la sexualité, à quoi ressemble le suivi dans chaque cas.',
              'Montrez l’avis obtenu à votre médecin traitant ou à votre urologue. L’objectif n’est pas d’opposer deux spécialistes, mais de réunir une image complète sur laquelle fonder votre décision.',
              'Si vous envisagez un traitement à l’étranger, sachez qu’une intervention programmée hors de France suppose en règle générale un accord préalable de votre caisse, et que le suivi au retour doit être organisé avant le départ.',
              'Cet article a une visée d’information générale et ne remplace pas une consultation médicale.'
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
