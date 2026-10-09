import type { Locale } from '@/i18n/routing';

/**
 * ÜROLOJİ SÖZLÜĞÜ (prompt m.4.8).
 *
 * Amaç: Hastanın raporunda/doktor konuşmasında karşılaştığı terimi sade dille
 * açıklamak + uzun kuyruk arama trafiği (her terim ayrı anchor, DefinedTerm schema).
 *
 * KURALLAR
 *  - Tanımlar BİLGİLENDİRİCİDİR; tedavi önerisi, doz veya kişiye özel tavsiye içermez.
 *  - Abartı ve üstünlük ifadesi kullanılmaz (yönetmelik).
 *  - Her terim TEK CÜMLE ile açıklanır; ayrıntı ilgili tedavi sayfasındadır.
 *  - `related` ile ilgili tedavi slug'ına iç link verilir (SEO + gezinme).
 *
 * Hedef 100+ terim KARŞILANDI (4 Eki 2026). Yeni terim eklerken üç dilin
 * (tr/en/ar) HEPSİNİ doldurun; eksik dil İngilizce'ye düşer.
 */

export type GlossaryCategory =
  | 'prostate'
  | 'bph'
  | 'stones'
  | 'andrology'
  | 'femaleUrology'
  | 'reconstructive'
  | 'general';

export interface GlossaryTerm {
  /** URL anchor'ı — sabit, çevrilmez (ör. "psa"). */
  id: string;
  category: GlossaryCategory;
  /** İlgili tedavi slug'ı (iç link). */
  related?: string;
  i18n: Partial<Record<Locale, { term: string; definition: string }>>;
}

export const glossary: GlossaryTerm[] = [
  // ---------------------------------------------------------------- PROSTAT
  {
    id: 'psa',
    category: 'prostate',
    related: 'robotik-prostatektomi',
    i18n: {
      tr: { term: 'PSA (Prostat Spesifik Antijen)', definition: 'Prostat dokusunun ürettiği, kanda ölçülen bir protein; yüksekliği kanser dışında iltihap ve iyi huylu büyümeye de bağlı olabilir.' },
      en: { term: 'PSA (Prostate-Specific Antigen)', definition: 'A protein produced by prostate tissue and measured in blood; a raised level may be due to inflammation or benign enlargement as well as cancer.' },
      ar: { term: 'PSA (المستضد البروستاتي النوعي)', definition: 'بروتين تنتجه أنسجة البروستاتا ويُقاس في الدم؛ وقد يرتفع بسبب الالتهاب أو التضخم الحميد وليس السرطان فقط.' },
    }
  },
  {
    id: 'gleason',
    category: 'prostate',
    related: 'robotik-prostatektomi',
    i18n: {
      tr: { term: 'Gleason skoru', definition: 'Prostat biyopsisindeki kanser hücrelerinin mikroskopta ne kadar saldırgan göründüğünü 6–10 arasında puanlayan sistem.' },
      en: { term: 'Gleason score', definition: 'A system scoring how aggressive prostate cancer cells look under the microscope, from 6 to 10.' },
      ar: { term: 'درجة غليسون', definition: 'نظام يمنح درجة من 6 إلى 10 بحسب مدى عدوانية خلايا سرطان البروستاتا تحت المجهر.' },
    }
  },
  {
    id: 'isup',
    category: 'prostate',
    related: 'robotik-prostatektomi',
    i18n: {
      tr: { term: 'ISUP derecesi', definition: 'Gleason skorunu 1–5 arası beş gruba sadeleştiren, tedavi planlamasında kullanılan derecelendirme.' },
      en: { term: 'ISUP grade group', definition: 'A grading that simplifies the Gleason score into five groups (1–5) and is used in treatment planning.' },
      ar: { term: 'مجموعة درجات ISUP', definition: 'تصنيف يبسّط درجة غليسون إلى خمس مجموعات (1–5) ويُستخدم في تخطيط العلاج.' },
    }
  },
  {
    id: 'mr-fuzyon-biyopsi',
    category: 'prostate',
    related: 'robotik-prostatektomi',
    i18n: {
      tr: { term: 'MR füzyon biyopsi', definition: 'Prostat MR görüntüsünün ultrason ile birleştirilerek şüpheli bölgeden hedefli örnek alınmasını sağlayan biyopsi yöntemi.' },
      en: { term: 'MRI fusion biopsy', definition: 'A biopsy that merges the prostate MRI image with ultrasound so samples are taken from the suspicious area in a targeted way.' },
      ar: { term: 'خزعة الدمج بالرنين المغناطيسي', definition: 'خزعة تدمج صورة الرنين المغناطيسي للبروستاتا مع الموجات فوق الصوتية لأخذ عيّنات موجّهة من المنطقة المشبوهة.' },
    }
  },
  {
    id: 'sinir-koruyucu-cerrahi',
    category: 'prostate',
    related: 'robotik-prostatektomi',
    i18n: {
      tr: { term: 'Sinir koruyucu cerrahi', definition: 'Prostat alınırken ereksiyondan sorumlu sinir demetlerinin korunmaya çalışıldığı teknik; her hastada uygulanamaz.' },
      en: { term: 'Nerve-sparing surgery', definition: 'A technique that aims to preserve the nerve bundles responsible for erection while the prostate is removed; it is not feasible in every patient.' },
      ar: { term: 'جراحة الحفاظ على الأعصاب', definition: 'تقنية تسعى للحفاظ على الحزم العصبية المسؤولة عن الانتصاب أثناء استئصال البروستاتا، ولا تصلح لكل المرضى.' },
    }
  },
  {
    id: 'aktif-izlem',
    category: 'prostate',
    related: 'robotik-prostatektomi',
    i18n: {
      tr: { term: 'Aktif izlem', definition: 'Düşük riskli prostat kanserinde hemen tedavi etmek yerine düzenli PSA, MR ve biyopsi ile yakın takip stratejisi.' },
      en: { term: 'Active surveillance', definition: 'A strategy of close monitoring with regular PSA, MRI and biopsy instead of immediate treatment in low-risk prostate cancer.' },
      ar: { term: 'المراقبة النشطة', definition: 'استراتيجية متابعة دقيقة بفحوص PSA والرنين المغناطيسي والخزعة بانتظام بدل العلاج الفوري في سرطان البروستاتا منخفض الخطورة.' },
    }
  },
  {
    id: 'biyokimyasal-nuks',
    category: 'prostate',
    related: 'robotik-prostatektomi',
    i18n: {
      tr: { term: 'Biyokimyasal nüks', definition: 'Tedaviden sonra düşen PSA değerinin yeniden yükselmesi; görüntülemede hastalık görülmeden önce ortaya çıkabilir.' },
      en: { term: 'Biochemical recurrence', definition: 'A renewed rise in PSA after it fell following treatment; it can appear before disease is visible on imaging.' },
      ar: { term: 'الانتكاس البيوكيميائي', definition: 'ارتفاع جديد في PSA بعد انخفاضه عقب العلاج، وقد يسبق ظهور المرض في الفحوص التصويرية.' },
    }
  },

  // -------------------------------------------------------------------- BPH
  {
    id: 'ipss',
    category: 'bph',
    related: 'bph-prostat-buyumesi',
    i18n: {
      tr: { term: 'IPSS (Uluslararası Prostat Semptom Skoru)', definition: 'İdrar şikâyetlerinin şiddetini 0–35 arasında puanlayan, tedavi kararında kullanılan anket.' },
      en: { term: 'IPSS (International Prostate Symptom Score)', definition: 'A questionnaire scoring the severity of urinary symptoms from 0 to 35, used when deciding on treatment.' },
      ar: { term: 'IPSS (المؤشر الدولي لأعراض البروستاتا)', definition: 'استبيان يقيس شدة الأعراض البولية من 0 إلى 35 ويُستخدم في اتخاذ قرار العلاج.' },
    }
  },
  {
    id: 'uroflowmetri',
    category: 'bph',
    related: 'bph-prostat-buyumesi',
    i18n: {
      tr: { term: 'Üroflowmetri', definition: 'İdrar akış hızını ölçen basit, ağrısız test; tıkanıklık olup olmadığını değerlendirmeye yardımcı olur.' },
      en: { term: 'Uroflowmetry', definition: 'A simple, painless test measuring urine flow rate that helps assess whether there is obstruction.' },
      ar: { term: 'قياس تدفق البول', definition: 'فحص بسيط وغير مؤلم يقيس سرعة تدفق البول ويساعد على تقييم وجود انسداد.' },
    }
  },
  {
    id: 'rezidu-idrar',
    category: 'bph',
    related: 'bph-prostat-buyumesi',
    i18n: {
      tr: { term: 'Rezidü idrar (PVR)', definition: 'İdrar yaptıktan sonra mesanede kalan idrar miktarı; yüksek olması boşaltım sorununa işaret eder.' },
      en: { term: 'Post-void residual (PVR)', definition: 'The amount of urine left in the bladder after voiding; a high value points to a problem with emptying.' },
      ar: { term: 'البول المتبقي بعد التبول (PVR)', definition: 'كمية البول الباقية في المثانة بعد التبول؛ وارتفاعها يشير إلى مشكلة في التفريغ.' },
    }
  },
  {
    id: 'holep',
    category: 'bph',
    related: 'holep',
    i18n: {
      tr: { term: 'HoLEP', definition: 'Holmiyum lazerle büyümüş prostat dokusunun bütün olarak çıkarıldığı, büyük prostatlarda da uygulanabilen endoskopik yöntem.' },
      en: { term: 'HoLEP', definition: 'An endoscopic method in which enlarged prostate tissue is enucleated whole with a holmium laser; it is also applicable to large prostates.' },
      ar: { term: 'HoLEP', definition: 'طريقة تنظيرية يُستأصل فيها نسيج البروستاتا المتضخم كاملًا بليزر الهولميوم، وتصلح أيضًا للبروستاتا كبيرة الحجم.' },
    }
  },
  {
    id: 'thulep',
    category: 'bph',
    related: 'thulep',
    i18n: {
      tr: { term: 'ThuLEP', definition: 'Tulyum lazer kullanılarak prostat dokusunun çıkarıldığı, HoLEP’e benzer endoskopik enükleasyon yöntemi.' },
      en: { term: 'ThuLEP', definition: 'An endoscopic enucleation method similar to HoLEP in which prostate tissue is removed using a thulium laser.' },
      ar: { term: 'ThuLEP', definition: 'طريقة استئصال تنظيرية مشابهة لـ HoLEP يُزال فيها نسيج البروستاتا بليزر الثوليوم.' },
    }
  },
  {
    id: 'rezum',
    category: 'bph',
    related: 'bph-prostat-buyumesi',
    i18n: {
      tr: { term: 'Rezūm', definition: 'Prostat dokusuna su buharı enerjisi verilerek hacmin küçültüldüğü, genellikle sedasyonla yapılan minimal invaziv yöntem.' },
      en: { term: 'Rezūm', definition: 'A minimally invasive method, usually under sedation, in which water-vapour energy is delivered into prostate tissue to shrink its volume.' },
      ar: { term: 'Rezūm', definition: 'طريقة قليلة التوغل تُجرى عادةً تحت التخدير الواعي، تُضخّ فيها طاقة بخار الماء داخل نسيج البروستاتا لتقليل حجمها.' },
    }
  },
  {
    id: 'turp',
    category: 'bph',
    related: 'bph-prostat-buyumesi',
    i18n: {
      tr: { term: 'TURP', definition: 'İdrar yolundan girilerek prostat dokusunun elektrik enerjisiyle kesilip çıkarıldığı klasik endoskopik ameliyat.' },
      en: { term: 'TURP', definition: 'The classic endoscopic operation in which prostate tissue is cut away with electrical energy through the urinary channel.' },
      ar: { term: 'TURP', definition: 'العملية التنظيرية الكلاسيكية التي يُستأصل فيها نسيج البروستاتا بالطاقة الكهربائية عبر مجرى البول.' },
    }
  },
  {
    id: 'retrograd-ejakulasyon',
    category: 'bph',
    related: 'bph-prostat-buyumesi',
    i18n: {
      tr: { term: 'Retrograd ejakülasyon', definition: 'Menin dışarı değil mesaneye doğru gitmesi; prostat ameliyatlarından sonra görülebilen, zararsız ama doğurganlığı etkileyen bir değişiklik.' },
      en: { term: 'Retrograde ejaculation', definition: 'Semen passing into the bladder instead of outward; a harmless change seen after prostate surgery that nonetheless affects fertility.' },
      ar: { term: 'القذف الرجوعي', definition: 'انتقال السائل المنوي إلى المثانة بدل خروجه؛ تغيّر غير ضار قد يحدث بعد جراحات البروستاتا لكنه يؤثر في الخصوبة.' },
    }
  },

  // ------------------------------------------------------------------- TAŞ
  {
    id: 'rirs',
    category: 'stones',
    related: 'bobrek-tasi',
    i18n: {
      tr: { term: 'RIRS (Retrograd intrarenal cerrahi)', definition: 'İdrar yolundan girilen bükülebilir endoskopla böbrek taşının lazerle kırıldığı, kesi gerektirmeyen yöntem.' },
      en: { term: 'RIRS (retrograde intrarenal surgery)', definition: 'An incision-free method in which a kidney stone is broken with a laser through a flexible endoscope passed via the urinary tract.' },
      ar: { term: 'RIRS (الجراحة داخل الكلية بالطريق الراجع)', definition: 'طريقة بلا شقوق يُفتَّت فيها حصى الكلية بالليزر عبر منظار مرن يُدخَل من المسالك البولية.' },
    }
  },
  {
    id: 'pcnl',
    category: 'stones',
    related: 'bobrek-tasi',
    i18n: {
      tr: { term: 'PCNL (Perkütan nefrolitotomi)', definition: 'Sırttan açılan küçük bir delikten böbreğe girilerek büyük taşların çıkarıldığı yöntem.' },
      en: { term: 'PCNL (percutaneous nephrolithotomy)', definition: 'A method in which large stones are removed through a small opening made in the back into the kidney.' },
      ar: { term: 'PCNL (تفتيت الحصى عبر الجلد)', definition: 'طريقة تُزال بها الحصوات الكبيرة عبر فتحة صغيرة في الظهر تصل إلى الكلية مباشرة.' },
    }
  },
  {
    id: 'eswl',
    category: 'stones',
    related: 'bobrek-tasi',
    i18n: {
      tr: { term: 'ESWL (Ses dalgasıyla taş kırma)', definition: 'Vücut dışından gönderilen ses dalgalarıyla taşın kırılıp idrarla düşürülmesini sağlayan, kesi gerektirmeyen yöntem.' },
      en: { term: 'ESWL (shock wave lithotripsy)', definition: 'An incision-free method using shock waves delivered from outside the body to break the stone so it passes in the urine.' },
      ar: { term: 'ESWL (تفتيت الحصى بالموجات التصادمية)', definition: 'طريقة بلا شقوق تُرسَل فيها موجات تصادمية من خارج الجسم لتفتيت الحصاة فتخرج مع البول.' },
    }
  },
  {
    id: 'jj-stent',
    category: 'stones',
    related: 'bobrek-tasi',
    i18n: {
      tr: { term: 'JJ (DJ) stent', definition: 'Böbrekle mesane arasına yerleştirilen, idrar akışını geçici olarak güvence altına alan ince silikon boru.' },
      en: { term: 'JJ (double-J) stent', definition: 'A thin silicone tube placed between the kidney and bladder that temporarily secures urine drainage.' },
      ar: { term: 'دعامة JJ (مزدوجة J)', definition: 'أنبوب سيليكون رفيع يُوضع بين الكلية والمثانة ليؤمّن تصريف البول مؤقتًا.' },
    }
  },
  {
    id: 'hidronefroz',
    category: 'stones',
    related: 'bobrek-tasi',
    i18n: {
      tr: { term: 'Hidronefroz', definition: 'İdrar akışının engellenmesi sonucu böbreğin şişmesi; tedavi edilmezse böbrek işlevi azalabilir.' },
      en: { term: 'Hydronephrosis', definition: 'Swelling of the kidney caused by blocked urine flow; if untreated, kidney function can decline.' },
      ar: { term: 'موه الكلية (استسقاء الكلية)', definition: 'تورّم الكلية نتيجة إعاقة تدفق البول؛ وقد تتراجع وظيفة الكلية إن لم يُعالَج.' },
    }
  },
  {
    id: 'renal-kolik',
    category: 'stones',
    related: 'bobrek-tasi',
    i18n: {
      tr: { term: 'Renal kolik', definition: 'Taşın idrar yolunu tıkamasıyla ortaya çıkan, dalgalar hâlinde gelen şiddetli yan ağrısı.' },
      en: { term: 'Renal colic', definition: 'Severe flank pain coming in waves, caused by a stone obstructing the urinary tract.' },
      ar: { term: 'المغص الكلوي', definition: 'ألم شديد في الخاصرة يأتي على شكل موجات بسبب انسداد المسالك البولية بحصاة.' },
    }
  },
  {
    id: 'tassizlik-orani',
    category: 'stones',
    related: 'bobrek-tasi',
    i18n: {
      tr: { term: 'Taşsızlık oranı', definition: 'İşlem sonrası böbrekte klinik olarak anlamlı taş kalmama oranı; yöntem seçiminde kullanılan başarı ölçütü.' },
      en: { term: 'Stone-free rate', definition: 'The proportion of cases with no clinically significant stone left after the procedure; a success measure used when choosing a method.' },
      ar: { term: 'معدّل الخلو من الحصى', definition: 'نسبة الحالات التي لا تبقى فيها حصاة ذات أهمية سريرية بعد العملية؛ وهو مؤشر نجاح يُستخدم في اختيار الطريقة.' },
    }
  },

  // -------------------------------------------------------------- ANDROLOJİ
  {
    id: 'erektil-disfonksiyon',
    category: 'andrology',
    related: 'androloji',
    i18n: {
      tr: { term: 'Erektil disfonksiyon', definition: 'Cinsel ilişki için yeterli sertleşmenin sağlanamaması veya sürdürülememesi durumu; damarsal, hormonal veya psikolojik nedenleri olabilir.' },
      en: { term: 'Erectile dysfunction', definition: 'Inability to achieve or maintain an erection sufficient for intercourse; causes may be vascular, hormonal or psychological.' },
      ar: { term: 'ضعف الانتصاب', definition: 'عدم القدرة على تحقيق انتصاب كافٍ للجماع أو الحفاظ عليه؛ وقد تكون الأسباب وعائية أو هرمونية أو نفسية.' },
    }
  },
  {
    id: 'penil-protez',
    category: 'andrology',
    related: 'androloji',
    i18n: {
      tr: { term: 'Penil protez', definition: 'İlaçlara yanıt vermeyen sertleşme sorununda penis içine yerleştirilen, şişirilebilir veya bükülebilir cihaz.' },
      en: { term: 'Penile implant', definition: 'An inflatable or malleable device placed inside the penis for erection problems that do not respond to medication.' },
      ar: { term: 'دعامة القضيب', definition: 'جهاز قابل للنفخ أو للثني يُزرع داخل القضيب في حالات ضعف الانتصاب التي لا تستجيب للأدوية.' },
    }
  },
  {
    id: 'varikosel',
    category: 'andrology',
    related: 'androloji',
    i18n: {
      tr: { term: 'Varikosel', definition: 'Testis damarlarının genişlemesi; sperm kalitesini etkileyebilir ve kısırlık araştırmasında sık karşılaşılır.' },
      en: { term: 'Varicocele', definition: 'Enlargement of the veins around the testicle; it can affect sperm quality and is commonly found in infertility work-up.' },
      ar: { term: 'دوالي الخصية', definition: 'توسّع أوردة الخصية؛ قد يؤثر في جودة الحيوانات المنوية ويُكتشف كثيرًا أثناء تقييم العقم.' },
    }
  },
  {
    id: 'mikro-tese',
    category: 'andrology',
    related: 'androloji',
    i18n: {
      tr: { term: 'Mikro-TESE', definition: 'Menide sperm bulunmayan erkeklerde mikroskop altında testisten sperm aranması işlemi.' },
      en: { term: 'Micro-TESE', definition: 'A procedure that searches for sperm within the testicle under a microscope in men with no sperm in the semen.' },
      ar: { term: 'Micro-TESE', definition: 'إجراء يُبحث فيه عن الحيوانات المنوية داخل الخصية تحت المجهر لدى الرجال الذين لا توجد لديهم حيوانات منوية في السائل المنوي.' },
    }
  },
  {
    id: 'azospermi',
    category: 'andrology',
    related: 'androloji',
    i18n: {
      tr: { term: 'Azospermi', definition: 'Meni örneğinde hiç sperm bulunmaması; tıkanıklığa veya üretim sorununa bağlı olabilir.' },
      en: { term: 'Azoospermia', definition: 'Complete absence of sperm in the semen sample; it may be due to obstruction or to a production problem.' },
      ar: { term: 'انعدام الحيوانات المنوية', definition: 'غياب الحيوانات المنوية تمامًا في عيّنة السائل المنوي؛ وقد يعود إلى انسداد أو إلى خلل في الإنتاج.' },
    }
  },
  {
    id: 'peyronie',
    category: 'andrology',
    related: 'androloji',
    i18n: {
      tr: { term: 'Peyronie hastalığı', definition: 'Penis içinde sert doku (plak) oluşmasıyla eğrilik ve ağrıya yol açan durum.' },
      en: { term: 'Peyronie’s disease', definition: 'A condition in which firm tissue (plaque) forms inside the penis, causing curvature and pain.' },
      ar: { term: 'مرض بيروني', definition: 'حالة يتكوّن فيها نسيج صلب (لويحة) داخل القضيب يسبّب انحناءً وألمًا.' },
    }
  },
  {
    id: 'spermiyogram',
    category: 'andrology',
    related: 'androloji',
    i18n: {
      tr: { term: 'Spermiyogram', definition: 'Meni örneğinde sperm sayısı, hareketliliği ve şeklinin değerlendirildiği temel kısırlık testi.' },
      en: { term: 'Semen analysis', definition: 'The basic fertility test assessing sperm count, motility and shape in a semen sample.' },
      ar: { term: 'تحليل السائل المنوي', definition: 'الفحص الأساسي للخصوبة الذي يقيّم عدد الحيوانات المنوية وحركتها وشكلها في العيّنة.' },
    }
  },

  // -------------------------------------------------------- KADIN ÜROLOJİSİ
  {
    id: 'stres-inkontinans',
    category: 'femaleUrology',
    related: 'kadin-urolojisi',
    i18n: {
      tr: { term: 'Stres inkontinans', definition: 'Öksürme, hapşırma veya efor sırasında istemsiz idrar kaçırma.' },
      en: { term: 'Stress incontinence', definition: 'Involuntary urine leakage during coughing, sneezing or exertion.' },
      ar: { term: 'سلس البول الجهدي', definition: 'تسرّب لا إرادي للبول عند السعال أو العطس أو بذل مجهود.' },
    }
  },
  {
    id: 'asiri-aktif-mesane',
    category: 'femaleUrology',
    related: 'kadin-urolojisi',
    i18n: {
      tr: { term: 'Aşırı aktif mesane', definition: 'Ani ve zor bastırılan idrar yapma hissi; sık idrara çıkma ve gece kalkma eşlik edebilir.' },
      en: { term: 'Overactive bladder', definition: 'A sudden, hard-to-defer urge to urinate, often with frequency and waking at night.' },
      ar: { term: 'المثانة مفرطة النشاط', definition: 'إلحاح مفاجئ يصعب تأجيله للتبول، وغالبًا مع تكرار التبول والاستيقاظ ليلًا.' },
    }
  },
  {
    id: 'sling',
    category: 'femaleUrology',
    related: 'kadin-urolojisi',
    i18n: {
      tr: { term: 'Sling (TOT/TVT)', definition: 'İdrar kanalını destekleyerek stres tipi kaçırmayı azaltan, ince bir bant yerleştirme ameliyatı.' },
      en: { term: 'Sling (TOT/TVT)', definition: 'An operation placing a narrow tape to support the urinary channel and reduce stress-type leakage.' },
      ar: { term: 'الشريط الداعم (TOT/TVT)', definition: 'عملية توضع فيها شريحة رفيعة لدعم مجرى البول وتقليل السلس الجهدي.' },
    }
  },
  {
    id: 'pelvik-organ-prolapsusu',
    category: 'femaleUrology',
    related: 'kadin-urolojisi',
    i18n: {
      tr: { term: 'Pelvik organ prolapsusu', definition: 'Mesane, rahim veya bağırsağın pelvik taban desteğinin zayıflamasıyla aşağı doğru sarkması.' },
      en: { term: 'Pelvic organ prolapse', definition: 'Downward descent of the bladder, uterus or bowel when pelvic floor support weakens.' },
      ar: { term: 'هبوط أعضاء الحوض', definition: 'نزول المثانة أو الرحم أو الأمعاء نتيجة ضعف دعم قاع الحوض.' },
    }
  },
  {
    id: 'urodinami',
    category: 'femaleUrology',
    related: 'kadin-urolojisi',
    i18n: {
      tr: { term: 'Ürodinami', definition: 'Mesane basıncı ve idrar akışının ölçülerek kaçırma tipinin belirlendiği ayrıntılı test.' },
      en: { term: 'Urodynamics', definition: 'A detailed test measuring bladder pressure and urine flow to determine the type of incontinence.' },
      ar: { term: 'ديناميكا البول', definition: 'فحص تفصيلي يقيس ضغط المثانة وتدفق البول لتحديد نوع السلس.' },
    }
  },

  // ------------------------------------------------------------ REKONSTRÜKTİF
  {
    id: 'uretra-darligi',
    category: 'reconstructive',
    related: 'uretroplasti',
    i18n: {
      tr: { term: 'Üretra darlığı', definition: 'İdrar kanalının yara dokusuyla daralması; zayıf akım, zorlanma ve tekrarlayan enfeksiyona yol açar.' },
      en: { term: 'Urethral stricture', definition: 'Narrowing of the urinary channel by scar tissue, causing a weak stream, straining and recurrent infection.' },
      ar: { term: 'تضيّق الإحليل', definition: 'تضيّق مجرى البول بنسيج ندبي، ما يسبّب ضعف التدفق والإجهاد وتكرار الالتهابات.' },
    }
  },
  {
    id: 'bukkal-mukoza-grefti',
    category: 'reconstructive',
    related: 'uretroplasti',
    i18n: {
      tr: { term: 'Bukkal mukoza grefti', definition: 'Yanak içinden alınan ince doku; daralan idrar kanalını genişletmek için yama olarak kullanılır.' },
      en: { term: 'Buccal mucosa graft', definition: 'Thin tissue taken from the inner cheek and used as a patch to widen a narrowed urinary channel.' },
      ar: { term: 'طُعم الغشاء المخاطي للخد', definition: 'نسيج رقيق يُؤخذ من باطن الخد ويُستخدم رقعةً لتوسيع مجرى البول المتضيّق.' },
    }
  },
  {
    id: 'upj-darligi',
    category: 'reconstructive',
    related: 'piyeloplasti',
    i18n: {
      tr: { term: 'UPJ darlığı', definition: 'Böbrekten çıkan idrar kanalının başlangıcındaki tıkanıklık; böbrekte şişme ve zamanla işlev kaybı yapabilir.' },
      en: { term: 'UPJ obstruction', definition: 'A blockage at the start of the channel leaving the kidney, which can cause swelling and, over time, loss of function.' },
      ar: { term: 'انسداد الوصل الحويضي الحالبي', definition: 'انسداد في بداية القناة الخارجة من الكلية، قد يسبّب احتقانًا وفقدانًا تدريجيًا للوظيفة.' },
    }
  },
  {
    id: 'fistul',
    category: 'reconstructive',
    related: 'fistul-onarimi',
    i18n: {
      tr: { term: 'Fistül', definition: 'İki organ arasında olmaması gereken anormal bağlantı; üriner fistülde sürekli idrar kaçağı olur.' },
      en: { term: 'Fistula', definition: 'An abnormal connection between two organs; in a urinary fistula there is continuous urine leakage.' },
      ar: { term: 'الناسور', definition: 'اتصال غير طبيعي بين عضوين؛ وفي الناسور البولي يحدث تسرّب مستمر للبول.' },
    }
  },
  {
    id: 'redo-cerrahi',
    category: 'reconstructive',
    related: 'uretroplasti',
    i18n: {
      tr: { term: 'Redo (tekrar) cerrahi', definition: 'Daha önce başka bir merkezde yapılmış ve başarısız olmuş ameliyatın yeniden ele alınması; yara dokusu nedeniyle daha zordur.' },
      en: { term: 'Redo (revision) surgery', definition: 'Re-operating on a procedure that previously failed elsewhere; scar tissue makes it more demanding.' },
      ar: { term: 'جراحة الإعادة (المراجعة)', definition: 'إعادة إجراء عملية سبق أن فشلت في مركز آخر؛ ويزيد النسيج الندبي من صعوبتها.' },
    }
  },

  // ----------------------------------------------------------------- GENEL
  {
    id: 'sistoskopi',
    category: 'general',
    i18n: {
      tr: { term: 'Sistoskopi', definition: 'İdrar kanalından ince bir kamerayla girilerek mesane içinin doğrudan görüntülenmesi.' },
      en: { term: 'Cystoscopy', definition: 'Direct inspection of the inside of the bladder with a thin camera passed through the urinary channel.' },
      ar: { term: 'تنظير المثانة', definition: 'معاينة مباشرة لداخل المثانة بكاميرا رفيعة تُدخَل عبر مجرى البول.' },
    }
  },
  {
    id: 'parsiyel-nefrektomi',
    category: 'general',
    related: 'uroonkoloji',
    i18n: {
      tr: { term: 'Parsiyel nefrektomi', definition: 'Böbreğin tamamı yerine yalnızca tümörlü kısmının alınarak organın korunduğu ameliyat.' },
      en: { term: 'Partial nephrectomy', definition: 'An operation removing only the tumour-bearing part of the kidney so the organ is preserved.' },
      ar: { term: 'استئصال جزئي للكلية', definition: 'عملية يُزال فيها الجزء الحامل للورم فقط من الكلية مع الحفاظ على العضو.' },
    }
  },
  {
    id: 'sistektomi',
    category: 'general',
    related: 'uroonkoloji',
    i18n: {
      tr: { term: 'Radikal sistektomi', definition: 'Kas tabakasına ilerlemiş mesane kanserinde mesanenin alınması ve idrar için yeni bir yol oluşturulması.' },
      en: { term: 'Radical cystectomy', definition: 'Removal of the bladder in muscle-invasive bladder cancer, with a new route created for urine.' },
      ar: { term: 'الاستئصال الجذري للمثانة', definition: 'إزالة المثانة في سرطان المثانة الغازي للعضلة مع إنشاء مسار جديد للبول.' },
    }
  },
  {
    id: 'hematuri',
    category: 'general',
    i18n: {
      tr: { term: 'Hematüri', definition: 'İdrarda kan bulunması; gözle görülebilir veya yalnızca tahlilde saptanabilir, mutlaka araştırılmalıdır.' },
      en: { term: 'Haematuria', definition: 'Blood in the urine, either visible or detected only on testing; it should always be investigated.' },
      ar: { term: 'البيلة الدموية', definition: 'وجود دم في البول، سواء كان مرئيًا أو يُكتشف بالتحليل فقط؛ ويجب دائمًا استقصاؤه.' },
    }
  },
  {
    id: 'robotik-cerrahi',
    category: 'general',
    related: 'robotik-prostatektomi',
    i18n: {
      tr: { term: 'Robotik cerrahi', definition: 'Cerrahın konsoldan yönettiği robotik kollarla, küçük kesilerden yapılan minimal invaziv ameliyat yöntemi.' },
      en: { term: 'Robotic surgery', definition: 'A minimally invasive approach through small incisions, using robotic arms the surgeon controls from a console.' },
      ar: { term: 'الجراحة الروبوتية', definition: 'أسلوب قليل التوغل عبر شقوق صغيرة بأذرع روبوتية يتحكّم بها الجرّاح من وحدة تحكّم.' },
    }
  },
  {
    id: 'sonda',
    category: 'general',
    i18n: {
      tr: { term: 'Sonda (üriner kateter)', definition: 'İdrarı mesaneden dışarı almak için geçici olarak yerleştirilen ince, esnek boru.' },
      en: { term: 'Urinary catheter', definition: 'A thin, flexible tube placed temporarily to drain urine from the bladder.' },
      ar: { term: 'القسطرة البولية', definition: 'أنبوب رفيع مرن يُوضع مؤقتًا لتصريف البول من المثانة.' },
    }
  },
  {
    id: 'pi-rads',
    category: 'prostate',
    related: 'psa-yuksekligi-ve-biyopsi',
    i18n: {
      tr: { term: 'PI-RADS', definition: 'Prostat MR’ında bulunan şüpheli alanın 1–5 arası puanlanması; yüksek puan şüphenin belirgin olduğunu gösterir.' },
      en: { term: 'PI-RADS', definition: 'A 1–5 score given to a suspicious area on prostate MRI; a higher score means clearer suspicion.' },
      ar: { term: 'PI-RADS', definition: 'تصنيف المنطقة المشبوهة في رنين البروستاتا على مقياس من 1 إلى 5؛ والدرجة الأعلى تعني شبهة أوضح.' }
    }
  },
  {
    id: 'multiparametrik-mr',
    category: 'prostate',
    related: 'psa-yuksekligi-ve-biyopsi',
    i18n: {
      tr: { term: 'Multiparametrik MR', definition: 'Prostatı birden çok görüntü dizisiyle inceleyen, biyopsi öncesi şüpheli alanı gösteren MR incelemesi.' },
      en: { term: 'Multiparametric MRI', definition: 'An MRI examination that studies the prostate with several image sequences and shows the suspicious area before biopsy.' },
      ar: { term: 'الرنين متعدد المعاملات', definition: 'فحص بالرنين المغناطيسي يدرس البروستاتا بعدة تسلسلات صورية ويُظهر المنطقة المشبوهة قبل الخزعة.' }
    }
  },
  {
    id: 'transperineal-biyopsi',
    category: 'prostate',
    related: 'psa-yuksekligi-ve-biyopsi',
    i18n: {
      tr: { term: 'Transperineal biyopsi', definition: 'Prostat biyopsisinin makat yerine testislerle makat arasındaki ciltten alınması; bağırsak florasıyla temas olmadığı için enfeksiyon riski daha düşüktür.' },
      en: { term: 'Transperineal biopsy', definition: 'Taking the prostate biopsy through the skin between the testicles and the anus rather than the rectum; infection risk is lower as there is no contact with bowel flora.' },
      ar: { term: 'الخزعة عبر العجان', definition: 'أخذ خزعة البروستاتا عبر الجلد بين كيس الصفن والشرج بدل المستقيم؛ وخطر العدوى أقل لعدم التماس مع الجراثيم المعوية.' }
    }
  },
  {
    id: 'psa-yogunlugu',
    category: 'prostate',
    related: 'psa-yuksekligi-ve-biyopsi',
    i18n: {
      tr: { term: 'PSA yoğunluğu', definition: 'PSA değerinin prostat hacmine oranı; büyük bir prostatın doğal olarak daha fazla PSA üretmesini hesaba katar.' },
      en: { term: 'PSA density', definition: 'The PSA value relative to prostate volume; it takes account of the fact that a large prostate naturally produces more PSA.' },
      ar: { term: 'كثافة الـ PSA', definition: 'نسبة قيمة الـ PSA إلى حجم البروستاتا؛ وتراعي أن البروستاتا الكبيرة تنتج بطبيعتها كمية أكبر من الـ PSA.' }
    }
  },
  {
    id: 'serbest-total-psa',
    category: 'prostate',
    related: 'psa-yuksekligi-ve-biyopsi',
    i18n: {
      tr: { term: 'Serbest/total PSA oranı', definition: 'Kandaki serbest PSA’nın toplam PSA’ya oranı; biyopsi kararında yardımcı ölçütlerden biridir.' },
      en: { term: 'Free-to-total PSA ratio', definition: 'The ratio of free PSA to total PSA in the blood; one of the measures that helps in deciding about biopsy.' },
      ar: { term: 'نسبة الـ PSA الحر إلى الكلي', definition: 'نسبة الـ PSA الحر إلى الـ PSA الكلي في الدم؛ وهي من المؤشرات التي تساعد في قرار الخزعة.' }
    }
  },
  {
    id: 'radikal-prostatektomi',
    category: 'prostate',
    related: 'robotik-prostatektomi',
    i18n: {
      tr: { term: 'Radikal prostatektomi', definition: 'Prostat kanserinde prostatın tamamının ve seminal veziküllerin çıkarılması ameliyatı.' },
      en: { term: 'Radical prostatectomy', definition: 'The operation to remove the whole prostate and the seminal vesicles in prostate cancer.' },
      ar: { term: 'استئصال البروستاتا الجذري', definition: 'عملية إزالة البروستاتا كاملة والحويصلتين المنويتين في سرطان البروستاتا.' }
    }
  },
  {
    id: 'cerrahi-sinir',
    category: 'prostate',
    related: 'robotik-prostatektomi',
    i18n: {
      tr: { term: 'Cerrahi sınır (pozitif/negatif)', definition: 'Çıkarılan dokunun kenarında tümör hücresi bulunup bulunmadığı; pozitifse ek tedavi gündeme gelebilir.' },
      en: { term: 'Surgical margin (positive/negative)', definition: 'Whether tumour cells are present at the edge of the removed tissue; if positive, further treatment may come into consideration.' },
      ar: { term: 'الحافة الجراحية (إيجابية/سلبية)', definition: 'وجود خلايا ورمية عند حافة النسيج المستأصل من عدمه؛ وعند إيجابيتها قد يُطرح علاج إضافي.' }
    }
  },
  {
    id: 'adt-hormon-tedavisi',
    category: 'prostate',
    related: 'prostat-kanseri',
    i18n: {
      tr: { term: 'Androjen baskılama (hormon tedavisi)', definition: 'Prostat kanserinin beslendiği erkeklik hormonunun etkisini azaltan tedavi yaklaşımı.' },
      en: { term: 'Androgen deprivation (hormone therapy)', definition: 'A treatment approach that reduces the effect of the male hormone on which prostate cancer feeds.' },
      ar: { term: 'الحرمان الأندروجيني (العلاج الهرموني)', definition: 'نهج علاجي يقلل أثر الهرمون الذكري الذي يتغذى عليه سرطان البروستاتا.' }
    }
  },
  {
    id: 'tnm-evreleme',
    category: 'prostate',
    related: 'prostat-kanseri',
    i18n: {
      tr: { term: 'TNM evrelemesi', definition: 'Tümörün yaygınlığını (T), lenf bezi tutulumunu (N) ve uzak yayılımı (M) tanımlayan uluslararası sistem.' },
      en: { term: 'TNM staging', definition: 'The international system describing the extent of the tumour (T), lymph node involvement (N) and distant spread (M).' },
      ar: { term: 'تصنيف TNM', definition: 'النظام الدولي الذي يصف امتداد الورم (T) وإصابة العقد اللمفية (N) والانتشار البعيد (M).' }
    }
  },
  {
    id: 'prostatit',
    category: 'prostate',
    i18n: {
      tr: { term: 'Prostatit', definition: 'Prostat bezinin iltihaplanması; ağrı, idrar yakınmaları ve PSA yüksekliğine yol açabilir.' },
      en: { term: 'Prostatitis', definition: 'Inflammation of the prostate gland; it can cause pain, urinary symptoms and a raised PSA.' },
      ar: { term: 'التهاب البروستاتا', definition: 'التهاب في غدة البروستاتا؛ وقد يسبب ألمًا وشكاوى بولية وارتفاعًا في الـ PSA.' }
    }
  },
  {
    id: 'prostat-hacmi',
    category: 'bph',
    related: 'bph-prostat-buyumesi',
    i18n: {
      tr: { term: 'Prostat hacmi', definition: 'Prostatın ultrasonla ölçülen büyüklüğü; hangi cerrahi yöntemin uygun olduğunu belirleyen başlıca ölçütlerden biridir.' },
      en: { term: 'Prostate volume', definition: 'The size of the prostate measured by ultrasound; one of the main criteria determining which surgical method is suitable.' },
      ar: { term: 'حجم البروستاتا', definition: 'حجم البروستاتا المقاس بالموجات فوق الصوتية؛ وهو من أهم المعايير في تحديد الأسلوب الجراحي المناسب.' }
    }
  },
  {
    id: 'orta-lob',
    category: 'bph',
    related: 'bph-prostat-buyumesi',
    i18n: {
      tr: { term: 'Orta lob', definition: 'Prostatın mesane içine doğru büyüyen bölümü; varlığı yöntem seçimini etkiler.' },
      en: { term: 'Middle lobe', definition: 'The part of the prostate that grows into the bladder; its presence affects the choice of method.' },
      ar: { term: 'الفص الأوسط', definition: 'جزء البروستاتا الذي ينمو داخل المثانة؛ ووجوده يؤثر في اختيار الأسلوب.' }
    }
  },
  {
    id: 'alfa-bloker',
    category: 'bph',
    related: 'bph-prostat-buyumesi',
    i18n: {
      tr: { term: 'Alfa bloker', definition: 'Prostat ve mesane boynundaki kasları gevşeterek idrar akımını kolaylaştıran ilaç grubu.' },
      en: { term: 'Alpha blocker', definition: 'A group of medicines that relaxes the muscle in the prostate and bladder neck to ease urine flow.' },
      ar: { term: 'حاصر ألفا', definition: 'مجموعة أدوية ترخي العضلات في البروستاتا وعنق المثانة فتُسهّل تدفق البول.' }
    }
  },
  {
    id: '5-alfa-reduktaz',
    category: 'bph',
    related: 'bph-prostat-buyumesi',
    i18n: {
      tr: { term: '5-alfa redüktaz inhibitörü', definition: 'Zamanla prostatı küçülten, PSA değerini de düşüren ilaç grubu.' },
      en: { term: '5-alpha reductase inhibitor', definition: 'A group of medicines that shrinks the prostate over time and also lowers the PSA value.' },
      ar: { term: 'مثبط اختزال ألفا-5', definition: 'مجموعة أدوية تُصغّر البروستاتا مع الوقت وتخفض قيمة الـ PSA أيضًا.' }
    }
  },
  {
    id: 'akut-retansiyon',
    category: 'bph',
    related: 'bph-prostat-buyumesi',
    i18n: {
      tr: { term: 'Akut idrar retansiyonu', definition: 'Mesane dolu olmasına rağmen hiç idrar yapılamaması; acil sonda takılmasını gerektirir.' },
      en: { term: 'Acute urinary retention', definition: 'Being completely unable to pass urine although the bladder is full; it requires urgent catheterisation.' },
      ar: { term: 'احتباس البول الحاد', definition: 'العجز التام عن التبول رغم امتلاء المثانة؛ ويستلزم وضع قسطرة عاجلة.' }
    }
  },
  {
    id: 'tur-sendromu',
    category: 'bph',
    related: 'turp',
    i18n: {
      tr: { term: 'TUR sendromu', definition: 'Monopolar TURP’ta yıkama sıvısının dolaşıma geçmesiyle kandaki sodyumun düşmesi; bipolar sistemde bu risk yoktur.' },
      en: { term: 'TUR syndrome', definition: 'A fall in blood sodium caused by irrigation fluid entering the circulation during monopolar TURP; this risk does not exist with the bipolar system.' },
      ar: { term: 'متلازمة TUR', definition: 'انخفاض الصوديوم في الدم بسبب انتقال سائل الغسيل إلى الدورة الدموية في TURP أحادي القطب؛ ولا وجود لهذا الخطر في النظام ثنائي القطب.' }
    }
  },
  {
    id: 'adenomektomi',
    category: 'bph',
    related: 'bph-prostat-buyumesi',
    i18n: {
      tr: { term: 'Açık adenomektomi', definition: 'Çok büyük prostatlarda, büyümüş iç dokunun açık cerrahiyle çıkarılması.' },
      en: { term: 'Open adenomectomy', definition: 'Removal of the enlarged inner prostate tissue by open surgery in very large glands.' },
      ar: { term: 'استئصال الورم الغدي المفتوح', definition: 'إزالة نسيج البروستاتا الداخلي المتضخم بالجراحة المفتوحة في الغدد الكبيرة جدًا.' }
    }
  },
  {
    id: 'nokturi',
    category: 'bph',
    related: 'bph-prostat-buyumesi',
    i18n: {
      tr: { term: 'Noktüri', definition: 'Gece idrara çıkmak için uykudan uyanma; prostat büyümesinin sık görülen yakınmalarından biridir.' },
      en: { term: 'Nocturia', definition: 'Waking from sleep at night to pass urine; one of the common complaints of prostate enlargement.' },
      ar: { term: 'التبول الليلي', definition: 'الاستيقاظ ليلًا للتبول؛ وهو من الشكاوى الشائعة في تضخم البروستاتا.' }
    }
  },
  {
    id: 'enukleasyon',
    category: 'bph',
    related: 'holep',
    i18n: {
      tr: { term: 'Enükleasyon', definition: 'Büyümüş prostat dokusunun parça parça tıraşlanmak yerine bütün hâlinde kapsülden ayrılması.' },
      en: { term: 'Enucleation', definition: 'Separating the enlarged prostate tissue from the capsule as a whole rather than shaving it away piece by piece.' },
      ar: { term: 'الاستئصال الكامل', definition: 'فصل نسيج البروستاتا المتضخم عن المحفظة كاملًا بدل حلقه قطعة قطعة.' }
    }
  },
  {
    id: 'tas-analizi',
    category: 'stones',
    related: 'bobrek-tasi',
    i18n: {
      tr: { term: 'Taş analizi', definition: 'Çıkarılan taşın kimyasal yapısının incelenmesi; tekrarı önleyici planın temelini oluşturur.' },
      en: { term: 'Stone analysis', definition: 'Examining the chemical make-up of the retrieved stone; it forms the basis of the plan to prevent recurrence.' },
      ar: { term: 'تحليل الحصاة', definition: 'فحص التركيب الكيميائي للحصاة المستخرجة؛ وهو أساس خطة الوقاية من التكرار.' }
    }
  },
  {
    id: 'geyik-boynuzu-tas',
    category: 'stones',
    related: 'pcnl',
    i18n: {
      tr: { term: 'Geyik boynuzu taşı', definition: 'Böbreğin toplayıcı sistemini dolduran, dallanmış büyük taş; bırakıldığında böbrek işlevini kalıcı olarak bozabilir.' },
      en: { term: 'Staghorn stone', definition: 'A large branched stone filling the collecting system of the kidney; left in place it can permanently impair kidney function.' },
      ar: { term: 'الحصاة المرجانية', definition: 'حصاة كبيرة متفرعة تملأ الجهاز المجمِّع في الكلية؛ وتركها قد يُفسد وظيفة الكلية بشكل دائم.' }
    }
  },
  {
    id: 'nefrostomi',
    category: 'stones',
    related: 'pcnl',
    i18n: {
      tr: { term: 'Nefrostomi', definition: 'Böbrekle cilt arasına yerleştirilen, idrarı dışarı alan dren; perkütan taş cerrahisi sonrası geçici olarak konabilir.' },
      en: { term: 'Nephrostomy', definition: 'A drain placed between the kidney and the skin to carry urine out; it may be left temporarily after percutaneous stone surgery.' },
      ar: { term: 'فغر الكلية', definition: 'نزح يُوضَع بين الكلية والجلد لتصريف البول؛ وقد يُترك مؤقتًا بعد جراحة الحصى عبر الجلد.' }
    }
  },
  {
    id: 'erisim-kilifi',
    category: 'stones',
    related: 'rirs',
    i18n: {
      tr: { term: 'Üreteral erişim kılıfı', definition: 'RIRS sırasında üretere yerleştirilen ince kılıf; üreteri korur ve böbrek içi basıncı düşürmeye yardımcı olur.' },
      en: { term: 'Ureteral access sheath', definition: 'A thin sheath placed in the ureter during RIRS; it protects the ureter and helps keep pressure inside the kidney down.' },
      ar: { term: 'غلافة الدخول الحالبية', definition: 'غلافة رفيعة تُوضَع في الحالب أثناء RIRS؛ تحمي الحالب وتساعد على خفض الضغط داخل الكلية.' }
    }
  },
  {
    id: 'medikal-ekspulsif',
    category: 'stones',
    related: 'bobrek-tasi',
    i18n: {
      tr: { term: 'Medikal ekspulsif tedavi', definition: 'Aşağı inmiş küçük taşın ilaçla düşürülmesini kolaylaştırmaya yönelik yaklaşım.' },
      en: { term: 'Medical expulsive therapy', definition: 'An approach that uses medication to help a small stone that has moved down to pass on its own.' },
      ar: { term: 'العلاج الدوائي الطارد', definition: 'نهج يُسهّل بالأدوية نزول حصاة صغيرة هبطت بالفعل.' }
    }
  },
  {
    id: 'urosepsis',
    category: 'stones',
    related: 'rirs',
    i18n: {
      tr: { term: 'Ürosepsis', definition: 'İdrar yolu enfeksiyonunun kana karışması; ateş ve titreme ile seyreder ve acil tedavi gerektirir.' },
      en: { term: 'Urosepsis', definition: 'A urinary tract infection passing into the blood; it runs with fever and shivering and needs urgent treatment.' },
      ar: { term: 'الإنتان البولي', definition: 'انتقال التهاب المسالك البولية إلى الدم؛ يسير مع حمى وقشعريرة ويستلزم علاجًا عاجلًا.' }
    }
  },
  {
    id: 'kalsiyum-oksalat',
    category: 'stones',
    related: 'bobrek-tasi',
    i18n: {
      tr: { term: 'Kalsiyum oksalat taşı', definition: 'En sık görülen böbrek taşı türü; sıvı alımı ve beslenme düzeni ile tekrarı azaltılabilir.' },
      en: { term: 'Calcium oxalate stone', definition: 'The most common type of kidney stone; recurrence can be reduced through fluid intake and diet.' },
      ar: { term: 'حصاة أكسالات الكالسيوم', definition: 'أكثر أنواع حصى الكلى شيوعًا؛ ويمكن تقليل تكرارها بشرب السوائل وتنظيم التغذية.' }
    }
  },
  {
    id: 'urik-asit-tasi',
    category: 'stones',
    related: 'bobrek-tasi',
    i18n: {
      tr: { term: 'Ürik asit taşı', definition: 'İdrarın fazla asitli olmasıyla ilişkili taş türü; bir kısmı ilaçla eritilebilir.' },
      en: { term: 'Uric acid stone', definition: 'A stone type linked to urine that is too acidic; some can be dissolved with medication.' },
      ar: { term: 'حصاة حمض البول', definition: 'نوع من الحصى يرتبط بزيادة حموضة البول؛ وبعضها يمكن إذابته بالأدوية.' }
    }
  },
  {
    id: 'testosteron',
    category: 'andrology',
    related: 'erektil-disfonksiyon',
    i18n: {
      tr: { term: 'Testosteron', definition: 'Başlıca erkeklik hormonu; sabah ölçülür ve düşüklüğü belirti varsa anlam taşır.' },
      en: { term: 'Testosterone', definition: 'The main male hormone; it is measured in the morning and a low level is meaningful only if there are symptoms.' },
      ar: { term: 'التستوستيرون', definition: 'الهرمون الذكري الرئيس؛ يُقاس صباحًا ولا يكون انخفاضه ذا دلالة إلا مع وجود أعراض.' }
    }
  },
  {
    id: 'hipogonadizm',
    category: 'andrology',
    related: 'erektil-disfonksiyon',
    i18n: {
      tr: { term: 'Hipogonadizm', definition: 'Testislerin yeterli testosteron üretememesi; halsizlik, istek azalması ve kas kaybı ile seyredebilir.' },
      en: { term: 'Hypogonadism', definition: 'The testicles not producing enough testosterone; it can run with tiredness, reduced desire and loss of muscle.' },
      ar: { term: 'قصور الغدد التناسلية', definition: 'عدم إنتاج الخصيتين تستوستيرون كافيًا؛ وقد يصحبه تعب وقلة رغبة وفقدان كتلة عضلية.' }
    }
  },
  {
    id: 'pde5-inhibitoru',
    category: 'andrology',
    related: 'erektil-disfonksiyon',
    i18n: {
      tr: { term: 'PDE5 inhibitörü', definition: 'Sertleşme sorununda ilk basamak ilaç grubu; cinsel uyarı olmadan etki etmez ve nitrat kullananlarda kullanılamaz.' },
      en: { term: 'PDE5 inhibitor', definition: 'The first-line group of medicines for erectile difficulty; it does not work without sexual stimulation and cannot be used by men taking nitrates.' },
      ar: { term: 'مثبط الفوسفوديستراز-5', definition: 'مجموعة أدوية الخط الأول في ضعف الانتصاب؛ لا تعمل من دون إثارة جنسية ولا تُستعمل عند متناولي النترات.' }
    }
  },
  {
    id: 'priapizm',
    category: 'andrology',
    related: 'erektil-disfonksiyon',
    i18n: {
      tr: { term: 'Priapizm', definition: 'Uzun süren ve ağrılı ereksiyon; acil değerlendirme gerektirir, geciktirilirse kalıcı hasar bırakabilir.' },
      en: { term: 'Priapism', definition: 'A prolonged and painful erection; it needs urgent assessment and can cause lasting damage if delayed.' },
      ar: { term: 'القساح', definition: 'انتصاب مطوّل ومؤلم؛ يستدعي تقييمًا عاجلًا وقد يترك ضررًا دائمًا إن تأخر.' }
    }
  },
  {
    id: 'intrakavernozal-enjeksiyon',
    category: 'andrology',
    related: 'erektil-disfonksiyon',
    i18n: {
      tr: { term: 'İntrakavernozal enjeksiyon', definition: 'Hap tedavisine yanıt alınamadığında penis içine ince iğneyle ilaç uygulanması.' },
      en: { term: 'Intracavernosal injection', definition: 'Giving medication into the penis with a fine needle when tablets do not work.' },
      ar: { term: 'الحقن داخل الجسم الكهفي', definition: 'إعطاء الدواء داخل القضيب بإبرة رفيعة عند عدم استجابة الحبوب.' }
    }
  },
  {
    id: 'hidrosel',
    category: 'andrology',
    related: 'varikosel',
    i18n: {
      tr: { term: 'Hidrosel', definition: 'Testis çevresinde sıvı birikmesi; varikosel ameliyatının bilinen komplikasyonlarından biridir.' },
      en: { term: 'Hydrocele', definition: 'A collection of fluid around the testicle; one of the known complications of varicocele surgery.' },
      ar: { term: 'القيلة المائية', definition: 'تجمّع سائل حول الخصية؛ وهي من المضاعفات المعروفة لعملية دوالي الخصية.' }
    }
  },
  {
    id: 'testis-torsiyonu',
    category: 'andrology',
    i18n: {
      tr: { term: 'Testis torsiyonu', definition: 'Testisin kendi etrafında dönerek kan akımının kesilmesi; saatler içinde müdahale gerektiren acil durumdur.' },
      en: { term: 'Testicular torsion', definition: 'The testicle twisting on itself and cutting off its blood supply; an emergency requiring intervention within hours.' },
      ar: { term: 'التواء الخصية', definition: 'دوران الخصية حول نفسها وانقطاع تروية الدم عنها؛ حالة طارئة تستلزم تدخلًا خلال ساعات.' }
    }
  },
  {
    id: 'prematur-ejakulasyon',
    category: 'andrology',
    related: 'androloji',
    i18n: {
      tr: { term: 'Erken boşalma', definition: 'Boşalmanın istenenden çok daha kısa sürede gerçekleşmesi; davranışsal ve ilaç tedavileri vardır.' },
      en: { term: 'Premature ejaculation', definition: 'Ejaculation occurring much sooner than wished; behavioural and medical treatments exist.' },
      ar: { term: 'سرعة القذف', definition: 'حدوث القذف قبل الوقت المرغوب بكثير؛ وله علاجات سلوكية ودوائية.' }
    }
  },
  {
    id: 'vazektomi',
    category: 'andrology',
    related: 'androloji',
    i18n: {
      tr: { term: 'Vazektomi', definition: 'Sperm kanallarının bağlanmasıyla yapılan kalıcı erkek doğum kontrolü yöntemi.' },
      en: { term: 'Vasectomy', definition: 'A permanent method of male contraception in which the sperm ducts are tied.' },
      ar: { term: 'قطع القناة المنوية', definition: 'وسيلة دائمة لمنع الحمل عند الرجل بربط القنوات المنوية.' }
    }
  },
  {
    id: 'aquadisseksiyon',
    category: 'andrology',
    related: 'penil-protez',
    i18n: {
      tr: { term: 'Aquadisseksiyon', definition: 'Penil protez cerrahisinde dokuların sıvı basıncıyla nazikçe ayrılması; seçilmiş olgularda uygulanan bir tekniktir.' },
      en: { term: 'Aquadissection', definition: 'Gently separating the tissues with fluid pressure during penile prosthesis surgery; a technique used in selected cases.' },
      ar: { term: 'التسليخ المائي', definition: 'فصل الأنسجة برفق بضغط السائل أثناء جراحة دعامة القضيب؛ تقنية تُطبَّق في حالات مختارة.' }
    }
  },
  {
    id: 'tese',
    category: 'andrology',
    related: 'androloji',
    i18n: {
      tr: { term: 'TESE', definition: 'Menide sperm bulunmadığında testis dokusundan sperm aranması işlemi.' },
      en: { term: 'TESE', definition: 'A procedure to look for sperm in testicular tissue when none is found in the semen.' },
      ar: { term: 'TESE', definition: 'إجراء للبحث عن الحيوانات المنوية في نسيج الخصية عند عدم وجودها في السائل المنوي.' }
    }
  },
  {
    id: 'sakral-noromodulasyon',
    category: 'femaleUrology',
    related: 'kadin-urolojisi',
    i18n: {
      tr: { term: 'Sakral nöromodülasyon', definition: 'Mesaneyi kontrol eden sinirlerin hafif elektrik uyarısıyla düzenlenmesi; ilaçla geçmeyen aşırı aktif mesanede gündeme gelir.' },
      en: { term: 'Sacral neuromodulation', definition: 'Regulating the nerves that control the bladder with a mild electrical signal; it comes into consideration in overactive bladder that does not settle with medication.' },
      ar: { term: 'التنظيم العصبي العجزي', definition: 'ضبط الأعصاب المتحكمة في المثانة بتنبيه كهربائي خفيف؛ ويُطرح في فرط نشاط المثانة الذي لا يستجيب للأدوية.' }
    }
  },
  {
    id: 'pelvik-taban-egzersizi',
    category: 'femaleUrology',
    related: 'kadin-urolojisi',
    i18n: {
      tr: { term: 'Pelvik taban egzersizi', definition: 'İdrar tutmaya yardımcı kasların düzenli çalıştırılması; stres tipi kaçırmada ilk basamak yaklaşımdır.' },
      en: { term: 'Pelvic floor exercise', definition: 'Working the muscles that help hold urine on a regular basis; the first-step approach in stress leakage.' },
      ar: { term: 'تمارين قاع الحوض', definition: 'تمرين العضلات التي تساعد على حبس البول بانتظام؛ وهي الخطوة الأولى في سلس الجهد.' }
    }
  },
  {
    id: 'mesane-egitimi',
    category: 'femaleUrology',
    related: 'kadin-urolojisi',
    i18n: {
      tr: { term: 'Mesane eğitimi', definition: 'İdrara çıkma aralıklarının kademeli olarak uzatılması; aşırı aktif mesanede davranışsal tedavinin parçasıdır.' },
      en: { term: 'Bladder training', definition: 'Gradually lengthening the intervals between visits to the toilet; part of behavioural treatment in overactive bladder.' },
      ar: { term: 'تدريب المثانة', definition: 'إطالة الفواصل بين مرات التبول تدريجيًا؛ وهو جزء من العلاج السلوكي في فرط نشاط المثانة.' }
    }
  },
  {
    id: 'mesane-botoks',
    category: 'femaleUrology',
    related: 'kadin-urolojisi',
    i18n: {
      tr: { term: 'Mesaneye botulinum toksini', definition: 'İlaca yanıt vermeyen aşırı aktif mesanede mesane kasına uygulanan, etkisi geçici olan tedavi.' },
      en: { term: 'Botulinum toxin into the bladder', definition: 'A treatment applied to the bladder muscle in overactive bladder that does not respond to medication; its effect is temporary.' },
      ar: { term: 'توكسين البوتولينوم في المثانة', definition: 'علاج يُطبَّق على عضلة المثانة في فرط النشاط غير المستجيب للأدوية؛ وأثره مؤقت.' }
    }
  },
  {
    id: 'interstisyel-sistit',
    category: 'femaleUrology',
    i18n: {
      tr: { term: 'İnterstisyel sistit', definition: 'Enfeksiyon olmadan mesanede ağrı ve sık idrara çıkma ile seyreden kronik durum.' },
      en: { term: 'Interstitial cystitis', definition: 'A chronic condition with bladder pain and frequency in the absence of infection.' },
      ar: { term: 'التهاب المثانة الخلالي', definition: 'حالة مزمنة فيها ألم في المثانة وتبول متكرر من دون عدوى.' }
    }
  },
  {
    id: 'idrar-yolu-enfeksiyonu',
    category: 'general',
    i18n: {
      tr: { term: 'İdrar yolu enfeksiyonu', definition: 'İdrar yollarında bakteri üremesi; yanma, sık idrara çıkma ve bazen ateşle seyreder.' },
      en: { term: 'Urinary tract infection', definition: 'Bacterial growth in the urinary tract; it runs with burning, frequency and sometimes fever.' },
      ar: { term: 'التهاب المسالك البولية', definition: 'نمو جراثيم في المسالك البولية؛ يسير مع حرقة وتبول متكرر وأحيانًا حمى.' }
    }
  },
  {
    id: 'idrar-kulturu',
    category: 'general',
    i18n: {
      tr: { term: 'İdrar kültürü', definition: 'İdrarda bakteri olup olmadığını ve hangi antibiyotiğe duyarlı olduğunu gösteren test; taş cerrahisi öncesi zorunludur.' },
      en: { term: 'Urine culture', definition: 'A test showing whether bacteria are present in the urine and which antibiotic they respond to; it is compulsory before stone surgery.' },
      ar: { term: 'زراعة البول', definition: 'فحص يبيّن وجود جراثيم في البول وأي مضاد حيوي تستجيب له؛ وهو إلزامي قبل جراحة الحصى.' }
    }
  },
  {
    id: 'piyeloplasti-terim',
    category: 'reconstructive',
    related: 'piyeloplasti',
    i18n: {
      tr: { term: 'Piyeloplasti', definition: 'Böbrek ile idrar borusu birleşim yerindeki darlığın cerrahi olarak genişletilmesi.' },
      en: { term: 'Pyeloplasty', definition: 'Surgical widening of the narrowing where the kidney joins the ureter.' },
      ar: { term: 'رأب الحويضة', definition: 'توسيع جراحي للتضيّق في موضع اتصال الكلية بالحالب.' }
    }
  },
  {
    id: 'ureteroneosistostomi',
    category: 'reconstructive',
    related: 'ureter-rekonstruksiyonu',
    i18n: {
      tr: { term: 'Üreteroneosistostomi', definition: 'İdrar borusunun mesaneye yeniden ağızlaştırılması; alt uç darlık ve yaralanmalarında uygulanır.' },
      en: { term: 'Ureteroneocystostomy', definition: 'Reimplanting the ureter into the bladder; used for narrowing and injury at the lower end.' },
      ar: { term: 'مفاغرة الحالب بالمثانة', definition: 'إعادة زرع الحالب في المثانة؛ وتُطبَّق في تضيّق الطرف السفلي وإصاباته.' }
    }
  },
  {
    id: 'psoas-hitch',
    category: 'reconstructive',
    related: 'ureter-rekonstruksiyonu',
    i18n: {
      tr: { term: 'Psoas hitch', definition: 'Mesanenin yukarı doğru askıya alınarak kısalan üretere ulaştırılması tekniği.' },
      en: { term: 'Psoas hitch', definition: 'A technique in which the bladder is hitched upwards to reach a shortened ureter.' },
      ar: { term: 'تثبيت المثانة إلى العضلة القطنية', definition: 'تقنية تُرفَع فيها المثانة إلى الأعلى للوصول إلى حالب قصير.' }
    }
  },
  {
    id: 'ileal-interpozisyon',
    category: 'reconstructive',
    related: 'ureter-rekonstruksiyonu',
    i18n: {
      tr: { term: 'İleal interpozisyon', definition: 'Uzun üreter kayıplarında ince bağırsaktan bir segmentin idrar yolu olarak araya yerleştirilmesi.' },
      en: { term: 'Ileal interposition', definition: 'Placing a segment of small bowel into the urinary tract to bridge a long loss of ureter.' },
      ar: { term: 'الإقحام اللفائفي', definition: 'وضع قطعة من الأمعاء الدقيقة كمجرى بولي لسدّ فقد طويل في الحالب.' }
    }
  },
  {
    id: 'anastomoz',
    category: 'reconstructive',
    i18n: {
      tr: { term: 'Anastomoz', definition: 'İki boru şeklindeki yapının cerrahi olarak birbirine ağızlaştırılması.' },
      en: { term: 'Anastomosis', definition: 'Surgically joining two tube-shaped structures to each other.' },
      ar: { term: 'المفاغرة', definition: 'وصل بنيتين أنبوبيتين جراحيًا إحداهما بالأخرى.' }
    }
  },
  {
    id: 'radikal-nefrektomi',
    category: 'general',
    related: 'uroonkoloji',
    i18n: {
      tr: { term: 'Radikal nefrektomi', definition: 'Böbrek tümörlerinde böbreğin tamamının çıkarılması; tümör büyükse veya yerleşimi uygun değilse tercih edilir.' },
      en: { term: 'Radical nephrectomy', definition: 'Removal of the whole kidney in kidney tumours; preferred when the tumour is large or unsuitably placed.' },
      ar: { term: 'استئصال الكلية الجذري', definition: 'إزالة الكلية كاملة في أورام الكلية؛ ويُفضَّل عندما يكون الورم كبيرًا أو موضعه غير مناسب.' }
    }
  },
  {
    id: 'tur-mesane',
    category: 'general',
    related: 'uroonkoloji',
    i18n: {
      tr: { term: 'TUR-M (mesane tümörü rezeksiyonu)', definition: 'Mesane tümörünün idrar yolundan girilerek alınması; hem tedavi hem evreleme amacı taşır.' },
      en: { term: 'TURBT (bladder tumour resection)', definition: 'Removing a bladder tumour through the urinary passage; it serves both treatment and staging.' },
      ar: { term: 'استئصال ورم المثانة عبر الإحليل', definition: 'إزالة ورم المثانة بالدخول عبر المجرى البولي؛ ويخدم العلاج وتحديد المرحلة معًا.' }
    }
  },
  {
    id: 'bcg-tedavisi',
    category: 'general',
    related: 'uroonkoloji',
    i18n: {
      tr: { term: 'Mesane içi BCG', definition: 'Yüzeyel mesane tümörlerinde tekrarı azaltmak için mesane içine uygulanan bağışıklık tedavisi.' },
      en: { term: 'Intravesical BCG', definition: 'An immune treatment instilled into the bladder to reduce recurrence in superficial bladder tumours.' },
      ar: { term: 'BCG داخل المثانة', definition: 'علاج مناعي يُقطَّر داخل المثانة لتقليل تكرار الأورام السطحية.' }
    }
  },
  {
    id: 'kreatinin',
    category: 'general',
    i18n: {
      tr: { term: 'Kreatinin', definition: 'Böbrek işlevi hakkında fikir veren kan değeri; yükselmesi böbrek işlevinin azaldığına işaret edebilir.' },
      en: { term: 'Creatinine', definition: 'A blood value giving an idea of kidney function; a rise can indicate reduced kidney function.' },
      ar: { term: 'الكرياتينين', definition: 'قيمة دموية تعطي فكرة عن وظيفة الكلى؛ وارتفاعها قد يدل على تراجعها.' }
    }
  },
  {
    id: 'spinal-anestezi',
    category: 'general',
    i18n: {
      tr: { term: 'Spinal anestezi', definition: 'Belden yapılan iğneyle vücudun alt yarısının uyuşturulması; hasta uyanıktır.' },
      en: { term: 'Spinal anaesthesia', definition: 'Numbing the lower half of the body with an injection in the back; the patient stays awake.' },
      ar: { term: 'التخدير النصفي', definition: 'تخدير النصف السفلي من الجسم بحقنة في الظهر؛ ويبقى المريض مستيقظًا.' }
    }
  },
  {
    id: 'antibiyotik-profilaksisi',
    category: 'general',
    i18n: {
      tr: { term: 'Antibiyotik profilaksisi', definition: 'İşlem öncesi enfeksiyonu önlemek amacıyla tek doz veya kısa süreli antibiyotik verilmesi.' },
      en: { term: 'Antibiotic prophylaxis', definition: 'Giving a single dose or short course of antibiotic before a procedure to prevent infection.' },
      ar: { term: 'الوقاية بالمضادات الحيوية', definition: 'إعطاء جرعة واحدة أو دورة قصيرة من المضاد الحيوي قبل الإجراء لمنع العدوى.' }
    }
  },
  {
    id: 'komplikasyon',
    category: 'general',
    i18n: {
      tr: { term: 'Komplikasyon', definition: 'Bir işlemin planlanan seyri dışında gelişen istenmeyen durum; her girişimde belirli bir olasılıkla vardır.' },
      en: { term: 'Complication', definition: 'An unwanted event outside the planned course of a procedure; every intervention carries a certain probability of one.' },
      ar: { term: 'المضاعفة', definition: 'حدث غير مرغوب خارج المسار المخطط للإجراء؛ وهو وارد باحتمال معيّن في كل تدخل.' }
    }
  }
];

/** Dile göre terim; eksik dilde İngilizce'ye düşer. */
export function resolveTerm(t: GlossaryTerm, locale: Locale) {
  return t.i18n[locale] ?? t.i18n.en ?? t.i18n.tr!;
}

/** Terimleri kategoriye göre gruplar; her grup alfabetik sıralanır. */
export function glossaryByCategory(locale: Locale) {
  const groups = new Map<GlossaryCategory, GlossaryTerm[]>();
  for (const t of glossary) {
    const list = groups.get(t.category) ?? [];
    list.push(t);
    groups.set(t.category, list);
  }
  const collator = (() => {
    try {
      return new Intl.Collator(locale);
    } catch {
      return new Intl.Collator('en');
    }
  })();
  for (const [, list] of groups) {
    list.sort((a, b) => collator.compare(resolveTerm(a, locale).term, resolveTerm(b, locale).term));
  }
  return groups;
}
