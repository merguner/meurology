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
 * Hedef 100+ terim KARŞILANDI (4 Eki 2026). Yeni terim eklerken 6 dilin
 * HEPSİNİ doldurun (eksik dil İngilizce'ye düşer) ve Rusça metinde
 * CJK/Kiril-Latin taramasını çalıştırın.
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
      de: { term: 'PSA (Prostataspezifisches Antigen)', definition: 'Ein vom Prostatagewebe gebildetes, im Blut messbares Eiweiß; erhöhte Werte können außer Krebs auch von Entzündung oder gutartiger Vergrößerung stammen.' },
      ru: { term: 'ПСА (простатспецифический антиген)', definition: 'Белок, вырабатываемый тканью простаты и измеряемый в крови; повышение возможно не только при раке, но и при воспалении или доброкачественном увеличении.' },
      ar: { term: 'PSA (المستضد البروستاتي النوعي)', definition: 'بروتين تنتجه أنسجة البروستاتا ويُقاس في الدم؛ وقد يرتفع بسبب الالتهاب أو التضخم الحميد وليس السرطان فقط.' },
      fr: { term: 'PSA (antigène prostatique spécifique)', definition: 'Protéine produite par le tissu prostatique et dosée dans le sang ; son élévation peut être due à une inflammation ou à une hypertrophie bénigne, pas seulement à un cancer.' }
    }
  },
  {
    id: 'gleason',
    category: 'prostate',
    related: 'robotik-prostatektomi',
    i18n: {
      tr: { term: 'Gleason skoru', definition: 'Prostat biyopsisindeki kanser hücrelerinin mikroskopta ne kadar saldırgan göründüğünü 6–10 arasında puanlayan sistem.' },
      en: { term: 'Gleason score', definition: 'A system scoring how aggressive prostate cancer cells look under the microscope, from 6 to 10.' },
      de: { term: 'Gleason-Score', definition: 'Ein System, das von 6 bis 10 bewertet, wie aggressiv Prostatakrebszellen unter dem Mikroskop erscheinen.' },
      ru: { term: 'Шкала Глисона', definition: 'Система оценки от 6 до 10, показывающая, насколько агрессивно выглядят клетки рака простаты под микроскопом.' },
      ar: { term: 'درجة غليسون', definition: 'نظام يمنح درجة من 6 إلى 10 بحسب مدى عدوانية خلايا سرطان البروستاتا تحت المجهر.' },
      fr: { term: 'Score de Gleason', definition: 'Système notant de 6 à 10 le caractère agressif des cellules du cancer de la prostate au microscope.' }
    }
  },
  {
    id: 'isup',
    category: 'prostate',
    related: 'robotik-prostatektomi',
    i18n: {
      tr: { term: 'ISUP derecesi', definition: 'Gleason skorunu 1–5 arası beş gruba sadeleştiren, tedavi planlamasında kullanılan derecelendirme.' },
      en: { term: 'ISUP grade group', definition: 'A grading that simplifies the Gleason score into five groups (1–5) and is used in treatment planning.' },
      de: { term: 'ISUP-Gradgruppe', definition: 'Eine Einteilung, die den Gleason-Score in fünf Gruppen (1–5) vereinfacht und der Therapieplanung dient.' },
      ru: { term: 'Группа градации ISUP', definition: 'Классификация, упрощающая шкалу Глисона до пяти групп (1–5) и используемая при планировании лечения.' },
      ar: { term: 'مجموعة درجات ISUP', definition: 'تصنيف يبسّط درجة غليسون إلى خمس مجموعات (1–5) ويُستخدم في تخطيط العلاج.' },
      fr: { term: 'Groupe ISUP', definition: 'Classification simplifiant le score de Gleason en cinq groupes (1 à 5), utilisée pour planifier le traitement.' }
    }
  },
  {
    id: 'mr-fuzyon-biyopsi',
    category: 'prostate',
    related: 'robotik-prostatektomi',
    i18n: {
      tr: { term: 'MR füzyon biyopsi', definition: 'Prostat MR görüntüsünün ultrason ile birleştirilerek şüpheli bölgeden hedefli örnek alınmasını sağlayan biyopsi yöntemi.' },
      en: { term: 'MRI fusion biopsy', definition: 'A biopsy that merges the prostate MRI image with ultrasound so samples are taken from the suspicious area in a targeted way.' },
      de: { term: 'MRT-Fusionsbiopsie', definition: 'Eine Biopsie, die das Prostata-MRT mit dem Ultraschall überlagert, um gezielt aus dem verdächtigen Areal Proben zu entnehmen.' },
      ru: { term: 'Фьюжн-биопсия под МРТ', definition: 'Биопсия, при которой изображение МРТ простаты совмещается с УЗИ, что позволяет прицельно взять материал из подозрительного участка.' },
      ar: { term: 'خزعة الدمج بالرنين المغناطيسي', definition: 'خزعة تدمج صورة الرنين المغناطيسي للبروستاتا مع الموجات فوق الصوتية لأخذ عيّنات موجّهة من المنطقة المشبوهة.' },
      fr: { term: 'Biopsie de fusion IRM', definition: 'Biopsie associant l’image IRM de la prostate à l’échographie afin de prélever de façon ciblée dans la zone suspecte.' }
    }
  },
  {
    id: 'sinir-koruyucu-cerrahi',
    category: 'prostate',
    related: 'robotik-prostatektomi',
    i18n: {
      tr: { term: 'Sinir koruyucu cerrahi', definition: 'Prostat alınırken ereksiyondan sorumlu sinir demetlerinin korunmaya çalışıldığı teknik; her hastada uygulanamaz.' },
      en: { term: 'Nerve-sparing surgery', definition: 'A technique that aims to preserve the nerve bundles responsible for erection while the prostate is removed; it is not feasible in every patient.' },
      de: { term: 'Nervenschonende Operation', definition: 'Technik, die bei der Prostataentfernung die für die Erektion zuständigen Nervenbündel zu erhalten versucht; sie ist nicht bei jedem Patienten möglich.' },
      ru: { term: 'Нервосберегающая операция', definition: 'Техника, при которой во время удаления простаты стараются сохранить нервные пучки, отвечающие за эрекцию; возможна не у всех пациентов.' },
      ar: { term: 'جراحة الحفاظ على الأعصاب', definition: 'تقنية تسعى للحفاظ على الحزم العصبية المسؤولة عن الانتصاب أثناء استئصال البروستاتا، ولا تصلح لكل المرضى.' },
      fr: { term: 'Chirurgie avec préservation nerveuse', definition: 'Technique visant à préserver les bandelettes nerveuses de l’érection lors de l’ablation de la prostate ; elle n’est pas réalisable chez tous les patients.' }
    }
  },
  {
    id: 'aktif-izlem',
    category: 'prostate',
    related: 'robotik-prostatektomi',
    i18n: {
      tr: { term: 'Aktif izlem', definition: 'Düşük riskli prostat kanserinde hemen tedavi etmek yerine düzenli PSA, MR ve biyopsi ile yakın takip stratejisi.' },
      en: { term: 'Active surveillance', definition: 'A strategy of close monitoring with regular PSA, MRI and biopsy instead of immediate treatment in low-risk prostate cancer.' },
      de: { term: 'Aktive Überwachung', definition: 'Strategie der engmaschigen Kontrolle mit regelmäßigem PSA, MRT und Biopsie statt sofortiger Therapie bei Niedrigrisiko-Prostatakrebs.' },
      ru: { term: 'Активное наблюдение', definition: 'Стратегия тщательного контроля с регулярным ПСА, МРТ и биопсией вместо немедленного лечения при раке простаты низкого риска.' },
      ar: { term: 'المراقبة النشطة', definition: 'استراتيجية متابعة دقيقة بفحوص PSA والرنين المغناطيسي والخزعة بانتظام بدل العلاج الفوري في سرطان البروستاتا منخفض الخطورة.' },
      fr: { term: 'Surveillance active', definition: 'Stratégie de suivi rapproché par PSA, IRM et biopsies régulières plutôt qu’un traitement immédiat dans les cancers de prostate à faible risque.' }
    }
  },
  {
    id: 'biyokimyasal-nuks',
    category: 'prostate',
    related: 'robotik-prostatektomi',
    i18n: {
      tr: { term: 'Biyokimyasal nüks', definition: 'Tedaviden sonra düşen PSA değerinin yeniden yükselmesi; görüntülemede hastalık görülmeden önce ortaya çıkabilir.' },
      en: { term: 'Biochemical recurrence', definition: 'A renewed rise in PSA after it fell following treatment; it can appear before disease is visible on imaging.' },
      de: { term: 'Biochemisches Rezidiv', definition: 'Erneuter PSA-Anstieg, nachdem der Wert nach der Therapie gefallen war; er kann auftreten, bevor die Erkrankung in der Bildgebung sichtbar ist.' },
      ru: { term: 'Биохимический рецидив', definition: 'Повторный рост ПСА после его снижения на фоне лечения; может возникнуть до того, как болезнь станет видна при визуализации.' },
      ar: { term: 'الانتكاس البيوكيميائي', definition: 'ارتفاع جديد في PSA بعد انخفاضه عقب العلاج، وقد يسبق ظهور المرض في الفحوص التصويرية.' },
      fr: { term: 'Récidive biochimique', definition: 'Nouvelle hausse du PSA après sa baisse post-traitement ; elle peut survenir avant que la maladie ne soit visible en imagerie.' }
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
      de: { term: 'IPSS (Internationaler Prostata-Symptom-Score)', definition: 'Fragebogen, der die Schwere der Harnbeschwerden von 0 bis 35 bewertet und in die Therapieentscheidung einfließt.' },
      ru: { term: 'IPSS (Международная шкала симптомов простаты)', definition: 'Опросник, оценивающий выраженность мочевых симптомов от 0 до 35 и используемый при выборе лечения.' },
      ar: { term: 'IPSS (المؤشر الدولي لأعراض البروستاتا)', definition: 'استبيان يقيس شدة الأعراض البولية من 0 إلى 35 ويُستخدم في اتخاذ قرار العلاج.' },
      fr: { term: 'IPSS (score international des symptômes prostatiques)', definition: 'Questionnaire cotant de 0 à 35 la sévérité des troubles urinaires, utilisé pour décider du traitement.' }
    }
  },
  {
    id: 'uroflowmetri',
    category: 'bph',
    related: 'bph-prostat-buyumesi',
    i18n: {
      tr: { term: 'Üroflowmetri', definition: 'İdrar akış hızını ölçen basit, ağrısız test; tıkanıklık olup olmadığını değerlendirmeye yardımcı olur.' },
      en: { term: 'Uroflowmetry', definition: 'A simple, painless test measuring urine flow rate that helps assess whether there is obstruction.' },
      de: { term: 'Uroflowmetrie', definition: 'Einfacher, schmerzloser Test zur Messung der Harnflussrate, der hilft, eine Obstruktion zu beurteilen.' },
      ru: { term: 'Урофлоуметрия', definition: 'Простое безболезненное исследование скорости потока мочи, помогающее оценить наличие обструкции.' },
      ar: { term: 'قياس تدفق البول', definition: 'فحص بسيط وغير مؤلم يقيس سرعة تدفق البول ويساعد على تقييم وجود انسداد.' },
      fr: { term: 'Débitmétrie urinaire', definition: 'Examen simple et indolore mesurant le débit urinaire, utile pour évaluer une obstruction.' }
    }
  },
  {
    id: 'rezidu-idrar',
    category: 'bph',
    related: 'bph-prostat-buyumesi',
    i18n: {
      tr: { term: 'Rezidü idrar (PVR)', definition: 'İdrar yaptıktan sonra mesanede kalan idrar miktarı; yüksek olması boşaltım sorununa işaret eder.' },
      en: { term: 'Post-void residual (PVR)', definition: 'The amount of urine left in the bladder after voiding; a high value points to a problem with emptying.' },
      de: { term: 'Restharn (PVR)', definition: 'Die nach dem Wasserlassen in der Blase verbleibende Urinmenge; ein hoher Wert weist auf eine Entleerungsstörung hin.' },
      ru: { term: 'Остаточная моча (PVR)', definition: 'Объём мочи, остающийся в мочевом пузыре после мочеиспускания; высокое значение указывает на нарушение опорожнения.' },
      ar: { term: 'البول المتبقي بعد التبول (PVR)', definition: 'كمية البول الباقية في المثانة بعد التبول؛ وارتفاعها يشير إلى مشكلة في التفريغ.' },
      fr: { term: 'Résidu post-mictionnel (RPM)', definition: 'Quantité d’urine restant dans la vessie après la miction ; une valeur élevée traduit un trouble de la vidange.' }
    }
  },
  {
    id: 'holep',
    category: 'bph',
    related: 'holep',
    i18n: {
      tr: { term: 'HoLEP', definition: 'Holmiyum lazerle büyümüş prostat dokusunun bütün olarak çıkarıldığı, büyük prostatlarda da uygulanabilen endoskopik yöntem.' },
      en: { term: 'HoLEP', definition: 'An endoscopic method in which enlarged prostate tissue is enucleated whole with a holmium laser; it is also applicable to large prostates.' },
      de: { term: 'HoLEP', definition: 'Endoskopisches Verfahren, bei dem vergrößertes Prostatagewebe mit dem Holmiumlaser im Ganzen ausgeschält wird; auch für große Prostatae geeignet.' },
      ru: { term: 'HoLEP', definition: 'Эндоскопический метод, при котором увеличенная ткань простаты целиком энуклеируется гольмиевым лазером; применим и при больших объёмах.' },
      ar: { term: 'HoLEP', definition: 'طريقة تنظيرية يُستأصل فيها نسيج البروستاتا المتضخم كاملًا بليزر الهولميوم، وتصلح أيضًا للبروستاتا كبيرة الحجم.' },
      fr: { term: 'HoLEP', definition: 'Méthode endoscopique d’énucléation en bloc du tissu prostatique au laser holmium, applicable aussi aux grosses prostates.' }
    }
  },
  {
    id: 'thulep',
    category: 'bph',
    related: 'thulep',
    i18n: {
      tr: { term: 'ThuLEP', definition: 'Tulyum lazer kullanılarak prostat dokusunun çıkarıldığı, HoLEP’e benzer endoskopik enükleasyon yöntemi.' },
      en: { term: 'ThuLEP', definition: 'An endoscopic enucleation method similar to HoLEP in which prostate tissue is removed using a thulium laser.' },
      de: { term: 'ThuLEP', definition: 'Der HoLEP ähnliche endoskopische Enukleationsmethode, bei der Prostatagewebe mit dem Thuliumlaser entfernt wird.' },
      ru: { term: 'ThuLEP', definition: 'Эндоскопический метод энуклеации, схожий с HoLEP, при котором ткань простаты удаляют тулиевым лазером.' },
      ar: { term: 'ThuLEP', definition: 'طريقة استئصال تنظيرية مشابهة لـ HoLEP يُزال فيها نسيج البروستاتا بليزر الثوليوم.' },
      fr: { term: 'ThuLEP', definition: 'Méthode d’énucléation endoscopique proche de la HoLEP, le tissu prostatique étant retiré au laser thulium.' }
    }
  },
  {
    id: 'rezum',
    category: 'bph',
    related: 'bph-prostat-buyumesi',
    i18n: {
      tr: { term: 'Rezūm', definition: 'Prostat dokusuna su buharı enerjisi verilerek hacmin küçültüldüğü, genellikle sedasyonla yapılan minimal invaziv yöntem.' },
      en: { term: 'Rezūm', definition: 'A minimally invasive method, usually under sedation, in which water-vapour energy is delivered into prostate tissue to shrink its volume.' },
      de: { term: 'Rezūm', definition: 'Minimalinvasives Verfahren, meist in Sedierung, bei dem Wasserdampfenergie in das Prostatagewebe abgegeben wird, um das Volumen zu verkleinern.' },
      ru: { term: 'Rezūm', definition: 'Малоинвазивный метод, обычно под седацией, при котором в ткань простаты подаётся энергия водяного пара для уменьшения объёма.' },
      ar: { term: 'Rezūm', definition: 'طريقة قليلة التوغل تُجرى عادةً تحت التخدير الواعي، تُضخّ فيها طاقة بخار الماء داخل نسيج البروستاتا لتقليل حجمها.' },
      fr: { term: 'Rezūm', definition: 'Méthode mini-invasive, le plus souvent sous sédation, délivrant de la vapeur d’eau dans le tissu prostatique pour en réduire le volume.' }
    }
  },
  {
    id: 'turp',
    category: 'bph',
    related: 'bph-prostat-buyumesi',
    i18n: {
      tr: { term: 'TURP', definition: 'İdrar yolundan girilerek prostat dokusunun elektrik enerjisiyle kesilip çıkarıldığı klasik endoskopik ameliyat.' },
      en: { term: 'TURP', definition: 'The classic endoscopic operation in which prostate tissue is cut away with electrical energy through the urinary channel.' },
      de: { term: 'TURP', definition: 'Die klassische endoskopische Operation, bei der Prostatagewebe über die Harnröhre mit elektrischer Energie abgetragen wird.' },
      ru: { term: 'ТУРП', definition: 'Классическая эндоскопическая операция, при которой ткань простаты удаляют электрической энергией через мочеиспускательный канал.' },
      ar: { term: 'TURP', definition: 'العملية التنظيرية الكلاسيكية التي يُستأصل فيها نسيج البروستاتا بالطاقة الكهربائية عبر مجرى البول.' },
      fr: { term: 'RTUP', definition: 'Intervention endoscopique classique retirant le tissu prostatique à l’énergie électrique par les voies urinaires.' }
    }
  },
  {
    id: 'retrograd-ejakulasyon',
    category: 'bph',
    related: 'bph-prostat-buyumesi',
    i18n: {
      tr: { term: 'Retrograd ejakülasyon', definition: 'Menin dışarı değil mesaneye doğru gitmesi; prostat ameliyatlarından sonra görülebilen, zararsız ama doğurganlığı etkileyen bir değişiklik.' },
      en: { term: 'Retrograde ejaculation', definition: 'Semen passing into the bladder instead of outward; a harmless change seen after prostate surgery that nonetheless affects fertility.' },
      de: { term: 'Retrograde Ejakulation', definition: 'Der Samen gelangt in die Blase statt nach außen; eine nach Prostataoperationen mögliche, harmlose Veränderung, die jedoch die Fruchtbarkeit beeinflusst.' },
      ru: { term: 'Ретроградная эякуляция', definition: 'Семя попадает в мочевой пузырь, а не наружу; безвредное изменение после операций на простате, которое, однако, влияет на фертильность.' },
      ar: { term: 'القذف الرجوعي', definition: 'انتقال السائل المنوي إلى المثانة بدل خروجه؛ تغيّر غير ضار قد يحدث بعد جراحات البروستاتا لكنه يؤثر في الخصوبة.' },
      fr: { term: 'Éjaculation rétrograde', definition: 'Le sperme reflue vers la vessie au lieu d’être émis ; changement sans danger après chirurgie prostatique, mais qui affecte la fertilité.' }
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
      de: { term: 'RIRS (retrograde intrarenale Chirurgie)', definition: 'Schnittfreies Verfahren, bei dem ein Nierenstein über ein flexibles Endoskop durch die Harnwege mit dem Laser zertrümmert wird.' },
      ru: { term: 'РИРХ (ретроградная интраренальная хирургия)', definition: 'Безразрезный метод, при котором камень почки дробят лазером через гибкий эндоскоп, введённый по мочевым путям.' },
      ar: { term: 'RIRS (الجراحة داخل الكلية بالطريق الراجع)', definition: 'طريقة بلا شقوق يُفتَّت فيها حصى الكلية بالليزر عبر منظار مرن يُدخَل من المسالك البولية.' },
      fr: { term: 'RIRS (chirurgie rétrograde intrarénale)', definition: 'Méthode sans incision fragmentant le calcul rénal au laser via un endoscope souple introduit par les voies urinaires.' }
    }
  },
  {
    id: 'pcnl',
    category: 'stones',
    related: 'bobrek-tasi',
    i18n: {
      tr: { term: 'PCNL (Perkütan nefrolitotomi)', definition: 'Sırttan açılan küçük bir delikten böbreğe girilerek büyük taşların çıkarıldığı yöntem.' },
      en: { term: 'PCNL (percutaneous nephrolithotomy)', definition: 'A method in which large stones are removed through a small opening made in the back into the kidney.' },
      de: { term: 'PCNL (perkutane Nephrolitholapaxie)', definition: 'Verfahren, bei dem große Steine über eine kleine Öffnung im Rücken direkt aus der Niere entfernt werden.' },
      ru: { term: 'ПНЛ (перкутанная нефролитотомия)', definition: 'Метод удаления крупных камней через небольшой прокол в области спины непосредственно из почки.' },
      ar: { term: 'PCNL (تفتيت الحصى عبر الجلد)', definition: 'طريقة تُزال بها الحصوات الكبيرة عبر فتحة صغيرة في الظهر تصل إلى الكلية مباشرة.' },
      fr: { term: 'NLPC (néphrolithotomie percutanée)', definition: 'Méthode retirant les calculs volumineux par une petite ouverture pratiquée dans le dos jusqu’au rein.' }
    }
  },
  {
    id: 'eswl',
    category: 'stones',
    related: 'bobrek-tasi',
    i18n: {
      tr: { term: 'ESWL (Ses dalgasıyla taş kırma)', definition: 'Vücut dışından gönderilen ses dalgalarıyla taşın kırılıp idrarla düşürülmesini sağlayan, kesi gerektirmeyen yöntem.' },
      en: { term: 'ESWL (shock wave lithotripsy)', definition: 'An incision-free method using shock waves delivered from outside the body to break the stone so it passes in the urine.' },
      de: { term: 'ESWL (Stoßwellenlithotripsie)', definition: 'Schnittfreies Verfahren, bei dem von außen eingebrachte Stoßwellen den Stein zertrümmern, sodass er mit dem Urin abgeht.' },
      ru: { term: 'ДУВЛ (дистанционная ударно-волновая литотрипсия)', definition: 'Безразрезный метод, при котором ударные волны снаружи дробят камень, и он выходит с мочой.' },
      ar: { term: 'ESWL (تفتيت الحصى بالموجات التصادمية)', definition: 'طريقة بلا شقوق تُرسَل فيها موجات تصادمية من خارج الجسم لتفتيت الحصاة فتخرج مع البول.' },
      fr: { term: 'LEC (lithotritie extracorporelle)', definition: 'Méthode sans incision utilisant des ondes de choc externes pour fragmenter le calcul, évacué ensuite dans les urines.' }
    }
  },
  {
    id: 'jj-stent',
    category: 'stones',
    related: 'bobrek-tasi',
    i18n: {
      tr: { term: 'JJ (DJ) stent', definition: 'Böbrekle mesane arasına yerleştirilen, idrar akışını geçici olarak güvence altına alan ince silikon boru.' },
      en: { term: 'JJ (double-J) stent', definition: 'A thin silicone tube placed between the kidney and bladder that temporarily secures urine drainage.' },
      de: { term: 'DJ-Schiene (Doppel-J-Stent)', definition: 'Dünner Silikonschlauch zwischen Niere und Blase, der den Harnabfluss vorübergehend sichert.' },
      ru: { term: 'Стент JJ (двойной J)', definition: 'Тонкая силиконовая трубка между почкой и мочевым пузырём, временно обеспечивающая отток мочи.' },
      ar: { term: 'دعامة JJ (مزدوجة J)', definition: 'أنبوب سيليكون رفيع يُوضع بين الكلية والمثانة ليؤمّن تصريف البول مؤقتًا.' },
      fr: { term: 'Sonde JJ (double J)', definition: 'Fin tube en silicone placé entre le rein et la vessie pour assurer temporairement l’écoulement de l’urine.' }
    }
  },
  {
    id: 'hidronefroz',
    category: 'stones',
    related: 'bobrek-tasi',
    i18n: {
      tr: { term: 'Hidronefroz', definition: 'İdrar akışının engellenmesi sonucu böbreğin şişmesi; tedavi edilmezse böbrek işlevi azalabilir.' },
      en: { term: 'Hydronephrosis', definition: 'Swelling of the kidney caused by blocked urine flow; if untreated, kidney function can decline.' },
      de: { term: 'Hydronephrose', definition: 'Anschwellen der Niere durch behinderten Harnabfluss; unbehandelt kann die Nierenfunktion abnehmen.' },
      ru: { term: 'Гидронефроз', definition: 'Расширение почки из-за нарушения оттока мочи; без лечения функция почки может снижаться.' },
      ar: { term: 'موه الكلية (استسقاء الكلية)', definition: 'تورّم الكلية نتيجة إعاقة تدفق البول؛ وقد تتراجع وظيفة الكلية إن لم يُعالَج.' },
      fr: { term: 'Hydronéphrose', definition: 'Dilatation du rein due à un obstacle à l’écoulement de l’urine ; non traitée, elle peut altérer la fonction rénale.' }
    }
  },
  {
    id: 'renal-kolik',
    category: 'stones',
    related: 'bobrek-tasi',
    i18n: {
      tr: { term: 'Renal kolik', definition: 'Taşın idrar yolunu tıkamasıyla ortaya çıkan, dalgalar hâlinde gelen şiddetli yan ağrısı.' },
      en: { term: 'Renal colic', definition: 'Severe flank pain coming in waves, caused by a stone obstructing the urinary tract.' },
      de: { term: 'Nierenkolik', definition: 'Starke, wellenförmige Flankenschmerzen, verursacht durch einen die Harnwege blockierenden Stein.' },
      ru: { term: 'Почечная колика', definition: 'Сильная волнообразная боль в боку, вызванная камнем, перекрывающим мочевые пути.' },
      ar: { term: 'المغص الكلوي', definition: 'ألم شديد في الخاصرة يأتي على شكل موجات بسبب انسداد المسالك البولية بحصاة.' },
      fr: { term: 'Colique néphrétique', definition: 'Douleur lombaire intense et par vagues, provoquée par un calcul obstruant les voies urinaires.' }
    }
  },
  {
    id: 'tassizlik-orani',
    category: 'stones',
    related: 'bobrek-tasi',
    i18n: {
      tr: { term: 'Taşsızlık oranı', definition: 'İşlem sonrası böbrekte klinik olarak anlamlı taş kalmama oranı; yöntem seçiminde kullanılan başarı ölçütü.' },
      en: { term: 'Stone-free rate', definition: 'The proportion of cases with no clinically significant stone left after the procedure; a success measure used when choosing a method.' },
      de: { term: 'Steinfreiheitsrate', definition: 'Anteil der Fälle ohne klinisch relevanten Reststein nach dem Eingriff; ein Erfolgsmaß bei der Methodenwahl.' },
      ru: { term: 'Доля полного избавления от камней', definition: 'Доля случаев без клинически значимых остаточных камней после вмешательства; показатель успеха при выборе метода.' },
      ar: { term: 'معدّل الخلو من الحصى', definition: 'نسبة الحالات التي لا تبقى فيها حصاة ذات أهمية سريرية بعد العملية؛ وهو مؤشر نجاح يُستخدم في اختيار الطريقة.' },
      fr: { term: 'Taux sans calcul résiduel', definition: 'Proportion de cas sans calcul cliniquement significatif après l’intervention ; critère de succès utilisé pour choisir la méthode.' }
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
      de: { term: 'Erektile Dysfunktion', definition: 'Unfähigkeit, eine für den Geschlechtsverkehr ausreichende Erektion zu erreichen oder zu halten; Ursachen können vaskulär, hormonell oder psychisch sein.' },
      ru: { term: 'Эректильная дисфункция', definition: 'Невозможность достичь или удержать эрекцию, достаточную для полового акта; причины бывают сосудистыми, гормональными или психологическими.' },
      ar: { term: 'ضعف الانتصاب', definition: 'عدم القدرة على تحقيق انتصاب كافٍ للجماع أو الحفاظ عليه؛ وقد تكون الأسباب وعائية أو هرمونية أو نفسية.' },
      fr: { term: 'Dysfonction érectile', definition: 'Incapacité à obtenir ou maintenir une érection suffisante pour un rapport ; les causes peuvent être vasculaires, hormonales ou psychologiques.' }
    }
  },
  {
    id: 'penil-protez',
    category: 'andrology',
    related: 'androloji',
    i18n: {
      tr: { term: 'Penil protez', definition: 'İlaçlara yanıt vermeyen sertleşme sorununda penis içine yerleştirilen, şişirilebilir veya bükülebilir cihaz.' },
      en: { term: 'Penile implant', definition: 'An inflatable or malleable device placed inside the penis for erection problems that do not respond to medication.' },
      de: { term: 'Penisprothese', definition: 'Ein aufblasbares oder biegsames Implantat im Penis bei Erektionsstörungen, die auf Medikamente nicht ansprechen.' },
      ru: { term: 'Фаллопротез', definition: 'Надувное или пластичное устройство, имплантируемое в половой член при нарушениях эрекции, не отвечающих на лекарства.' },
      ar: { term: 'دعامة القضيب', definition: 'جهاز قابل للنفخ أو للثني يُزرع داخل القضيب في حالات ضعف الانتصاب التي لا تستجيب للأدوية.' },
      fr: { term: 'Prothèse pénienne', definition: 'Dispositif gonflable ou malléable implanté dans la verge en cas de troubles de l’érection résistants aux médicaments.' }
    }
  },
  {
    id: 'varikosel',
    category: 'andrology',
    related: 'androloji',
    i18n: {
      tr: { term: 'Varikosel', definition: 'Testis damarlarının genişlemesi; sperm kalitesini etkileyebilir ve kısırlık araştırmasında sık karşılaşılır.' },
      en: { term: 'Varicocele', definition: 'Enlargement of the veins around the testicle; it can affect sperm quality and is commonly found in infertility work-up.' },
      de: { term: 'Varikozele', definition: 'Erweiterung der Hodenvenen; sie kann die Spermienqualität beeinflussen und wird in der Fertilitätsabklärung häufig gefunden.' },
      ru: { term: 'Варикоцеле', definition: 'Расширение вен яичка; может влиять на качество спермы и часто выявляется при обследовании по поводу бесплодия.' },
      ar: { term: 'دوالي الخصية', definition: 'توسّع أوردة الخصية؛ قد يؤثر في جودة الحيوانات المنوية ويُكتشف كثيرًا أثناء تقييم العقم.' },
      fr: { term: 'Varicocèle', definition: 'Dilatation des veines du testicule ; elle peut altérer la qualité du sperme et est fréquemment trouvée lors du bilan d’infertilité.' }
    }
  },
  {
    id: 'mikro-tese',
    category: 'andrology',
    related: 'androloji',
    i18n: {
      tr: { term: 'Mikro-TESE', definition: 'Menide sperm bulunmayan erkeklerde mikroskop altında testisten sperm aranması işlemi.' },
      en: { term: 'Micro-TESE', definition: 'A procedure that searches for sperm within the testicle under a microscope in men with no sperm in the semen.' },
      de: { term: 'Mikro-TESE', definition: 'Eingriff, bei dem bei Männern ohne Spermien im Ejakulat unter dem Mikroskop im Hoden nach Spermien gesucht wird.' },
      ru: { term: 'Микро-ТЕЗЕ', definition: 'Процедура поиска сперматозоидов в ткани яичка под микроскопом у мужчин, у которых их нет в эякуляте.' },
      ar: { term: 'Micro-TESE', definition: 'إجراء يُبحث فيه عن الحيوانات المنوية داخل الخصية تحت المجهر لدى الرجال الذين لا توجد لديهم حيوانات منوية في السائل المنوي.' },
      fr: { term: 'Micro-TESE', definition: 'Intervention recherchant des spermatozoïdes dans le testicule sous microscope chez les hommes sans spermatozoïdes dans le sperme.' }
    }
  },
  {
    id: 'azospermi',
    category: 'andrology',
    related: 'androloji',
    i18n: {
      tr: { term: 'Azospermi', definition: 'Meni örneğinde hiç sperm bulunmaması; tıkanıklığa veya üretim sorununa bağlı olabilir.' },
      en: { term: 'Azoospermia', definition: 'Complete absence of sperm in the semen sample; it may be due to obstruction or to a production problem.' },
      de: { term: 'Azoospermie', definition: 'Vollständiges Fehlen von Spermien im Ejakulat; Ursache kann eine Verlegung oder eine Bildungsstörung sein.' },
      ru: { term: 'Азооспермия', definition: 'Полное отсутствие сперматозоидов в эякуляте; может быть связано с обструкцией или с нарушением выработки.' },
      ar: { term: 'انعدام الحيوانات المنوية', definition: 'غياب الحيوانات المنوية تمامًا في عيّنة السائل المنوي؛ وقد يعود إلى انسداد أو إلى خلل في الإنتاج.' },
      fr: { term: 'Azoospermie', definition: 'Absence totale de spermatozoïdes dans le sperme ; elle peut être obstructive ou liée à un défaut de production.' }
    }
  },
  {
    id: 'peyronie',
    category: 'andrology',
    related: 'androloji',
    i18n: {
      tr: { term: 'Peyronie hastalığı', definition: 'Penis içinde sert doku (plak) oluşmasıyla eğrilik ve ağrıya yol açan durum.' },
      en: { term: 'Peyronie’s disease', definition: 'A condition in which firm tissue (plaque) forms inside the penis, causing curvature and pain.' },
      de: { term: 'Induratio penis plastica (Peyronie)', definition: 'Erkrankung, bei der sich im Penis derbes Gewebe (Plaque) bildet und zu Verkrümmung und Schmerzen führt.' },
      ru: { term: 'Болезнь Пейрони', definition: 'Состояние, при котором в половом члене образуется плотная ткань (бляшка), вызывая искривление и боль.' },
      ar: { term: 'مرض بيروني', definition: 'حالة يتكوّن فيها نسيج صلب (لويحة) داخل القضيب يسبّب انحناءً وألمًا.' },
      fr: { term: 'Maladie de La Peyronie', definition: 'Affection où un tissu induré (plaque) se forme dans la verge, entraînant courbure et douleur.' }
    }
  },
  {
    id: 'spermiyogram',
    category: 'andrology',
    related: 'androloji',
    i18n: {
      tr: { term: 'Spermiyogram', definition: 'Meni örneğinde sperm sayısı, hareketliliği ve şeklinin değerlendirildiği temel kısırlık testi.' },
      en: { term: 'Semen analysis', definition: 'The basic fertility test assessing sperm count, motility and shape in a semen sample.' },
      de: { term: 'Spermiogramm', definition: 'Basistest der Fruchtbarkeit, der Spermienzahl, -beweglichkeit und -form im Ejakulat beurteilt.' },
      ru: { term: 'Спермограмма', definition: 'Базовый тест фертильности, оценивающий количество, подвижность и форму сперматозоидов в эякуляте.' },
      ar: { term: 'تحليل السائل المنوي', definition: 'الفحص الأساسي للخصوبة الذي يقيّم عدد الحيوانات المنوية وحركتها وشكلها في العيّنة.' },
      fr: { term: 'Spermogramme', definition: 'Examen de base de la fertilité évaluant le nombre, la mobilité et la forme des spermatozoïdes.' }
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
      de: { term: 'Belastungsinkontinenz', definition: 'Unwillkürlicher Urinverlust beim Husten, Niesen oder bei Anstrengung.' },
      ru: { term: 'Стрессовое недержание', definition: 'Непроизвольное подтекание мочи при кашле, чихании или физической нагрузке.' },
      ar: { term: 'سلس البول الجهدي', definition: 'تسرّب لا إرادي للبول عند السعال أو العطس أو بذل مجهود.' },
      fr: { term: 'Incontinence d’effort', definition: 'Fuite urinaire involontaire lors de la toux, de l’éternuement ou d’un effort.' }
    }
  },
  {
    id: 'asiri-aktif-mesane',
    category: 'femaleUrology',
    related: 'kadin-urolojisi',
    i18n: {
      tr: { term: 'Aşırı aktif mesane', definition: 'Ani ve zor bastırılan idrar yapma hissi; sık idrara çıkma ve gece kalkma eşlik edebilir.' },
      en: { term: 'Overactive bladder', definition: 'A sudden, hard-to-defer urge to urinate, often with frequency and waking at night.' },
      de: { term: 'Überaktive Blase', definition: 'Plötzlicher, schwer aufschiebbarer Harndrang, oft mit häufigem Wasserlassen und nächtlichem Aufwachen.' },
      ru: { term: 'Гиперактивный мочевой пузырь', definition: 'Внезапный, трудно сдерживаемый позыв к мочеиспусканию, часто с учащением и ночными подъёмами.' },
      ar: { term: 'المثانة مفرطة النشاط', definition: 'إلحاح مفاجئ يصعب تأجيله للتبول، وغالبًا مع تكرار التبول والاستيقاظ ليلًا.' },
      fr: { term: 'Vessie hyperactive', definition: 'Besoin d’uriner soudain et difficile à différer, souvent avec pollakiurie et réveils nocturnes.' }
    }
  },
  {
    id: 'sling',
    category: 'femaleUrology',
    related: 'kadin-urolojisi',
    i18n: {
      tr: { term: 'Sling (TOT/TVT)', definition: 'İdrar kanalını destekleyerek stres tipi kaçırmayı azaltan, ince bir bant yerleştirme ameliyatı.' },
      en: { term: 'Sling (TOT/TVT)', definition: 'An operation placing a narrow tape to support the urinary channel and reduce stress-type leakage.' },
      de: { term: 'Schlinge (TOT/TVT)', definition: 'Operation, bei der ein schmales Band zur Unterstützung der Harnröhre eingelegt wird, um Belastungsinkontinenz zu verringern.' },
      ru: { term: 'Слинг (TOT/TVT)', definition: 'Операция установки узкой ленты, поддерживающей мочеиспускательный канал и уменьшающей стрессовое недержание.' },
      ar: { term: 'الشريط الداعم (TOT/TVT)', definition: 'عملية توضع فيها شريحة رفيعة لدعم مجرى البول وتقليل السلس الجهدي.' },
      fr: { term: 'Bandelette (TOT/TVT)', definition: 'Intervention posant une fine bandelette pour soutenir l’urètre et réduire l’incontinence d’effort.' }
    }
  },
  {
    id: 'pelvik-organ-prolapsusu',
    category: 'femaleUrology',
    related: 'kadin-urolojisi',
    i18n: {
      tr: { term: 'Pelvik organ prolapsusu', definition: 'Mesane, rahim veya bağırsağın pelvik taban desteğinin zayıflamasıyla aşağı doğru sarkması.' },
      en: { term: 'Pelvic organ prolapse', definition: 'Downward descent of the bladder, uterus or bowel when pelvic floor support weakens.' },
      de: { term: 'Beckenorganprolaps', definition: 'Absenkung von Blase, Gebärmutter oder Darm bei nachlassender Beckenbodenstütze.' },
      ru: { term: 'Пролапс тазовых органов', definition: 'Опущение мочевого пузыря, матки или кишки при ослаблении поддержки тазового дна.' },
      ar: { term: 'هبوط أعضاء الحوض', definition: 'نزول المثانة أو الرحم أو الأمعاء نتيجة ضعف دعم قاع الحوض.' },
      fr: { term: 'Prolapsus des organes pelviens', definition: 'Descente de la vessie, de l’utérus ou de l’intestin lorsque le soutien du plancher pelvien faiblit.' }
    }
  },
  {
    id: 'urodinami',
    category: 'femaleUrology',
    related: 'kadin-urolojisi',
    i18n: {
      tr: { term: 'Ürodinami', definition: 'Mesane basıncı ve idrar akışının ölçülerek kaçırma tipinin belirlendiği ayrıntılı test.' },
      en: { term: 'Urodynamics', definition: 'A detailed test measuring bladder pressure and urine flow to determine the type of incontinence.' },
      de: { term: 'Urodynamik', definition: 'Detaillierte Untersuchung von Blasendruck und Harnfluss zur Bestimmung des Inkontinenztyps.' },
      ru: { term: 'Уродинамика', definition: 'Подробное исследование давления в мочевом пузыре и потока мочи для определения типа недержания.' },
      ar: { term: 'ديناميكا البول', definition: 'فحص تفصيلي يقيس ضغط المثانة وتدفق البول لتحديد نوع السلس.' },
      fr: { term: 'Bilan urodynamique', definition: 'Examen détaillé mesurant la pression vésicale et le débit urinaire afin de préciser le type d’incontinence.' }
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
      de: { term: 'Harnröhrenstriktur', definition: 'Verengung der Harnröhre durch Narbengewebe mit schwachem Strahl, Pressen und wiederkehrenden Infekten.' },
      ru: { term: 'Стриктура уретры', definition: 'Сужение мочеиспускательного канала рубцовой тканью: слабая струя, натуживание и повторные инфекции.' },
      ar: { term: 'تضيّق الإحليل', definition: 'تضيّق مجرى البول بنسيج ندبي، ما يسبّب ضعف التدفق والإجهاد وتكرار الالتهابات.' },
      fr: { term: 'Sténose urétrale', definition: 'Rétrécissement de l’urètre par du tissu cicatriciel, responsable d’un jet faible, d’efforts et d’infections répétées.' }
    }
  },
  {
    id: 'bukkal-mukoza-grefti',
    category: 'reconstructive',
    related: 'uretroplasti',
    i18n: {
      tr: { term: 'Bukkal mukoza grefti', definition: 'Yanak içinden alınan ince doku; daralan idrar kanalını genişletmek için yama olarak kullanılır.' },
      en: { term: 'Buccal mucosa graft', definition: 'Thin tissue taken from the inner cheek and used as a patch to widen a narrowed urinary channel.' },
      de: { term: 'Mundschleimhaut-Transplantat', definition: 'Dünnes Gewebe aus der Wangeninnenseite, das als Patch zur Erweiterung der verengten Harnröhre dient.' },
      ru: { term: 'Трансплантат слизистой щеки', definition: 'Тонкая ткань с внутренней поверхности щеки, используемая как заплата для расширения суженной уретры.' },
      ar: { term: 'طُعم الغشاء المخاطي للخد', definition: 'نسيج رقيق يُؤخذ من باطن الخد ويُستخدم رقعةً لتوسيع مجرى البول المتضيّق.' },
      fr: { term: 'Greffe de muqueuse buccale', definition: 'Tissu fin prélevé à la face interne de la joue, utilisé comme patch pour élargir un urètre rétréci.' }
    }
  },
  {
    id: 'upj-darligi',
    category: 'reconstructive',
    related: 'piyeloplasti',
    i18n: {
      tr: { term: 'UPJ darlığı', definition: 'Böbrekten çıkan idrar kanalının başlangıcındaki tıkanıklık; böbrekte şişme ve zamanla işlev kaybı yapabilir.' },
      en: { term: 'UPJ obstruction', definition: 'A blockage at the start of the channel leaving the kidney, which can cause swelling and, over time, loss of function.' },
      de: { term: 'Nierenbeckenabgangsenge (UPJ)', definition: 'Verschluss am Beginn des abführenden Harnleiters, der zu Nierenstau und mit der Zeit zu Funktionsverlust führen kann.' },
      ru: { term: 'Стриктура лоханочно-мочеточникового сегмента', definition: 'Препятствие в начале мочеточника, вызывающее расширение почки и со временем потерю её функции.' },
      ar: { term: 'انسداد الوصل الحويضي الحالبي', definition: 'انسداد في بداية القناة الخارجة من الكلية، قد يسبّب احتقانًا وفقدانًا تدريجيًا للوظيفة.' },
      fr: { term: 'Syndrome de la jonction pyélo-urétérale', definition: 'Obstacle au départ du conduit quittant le rein, pouvant provoquer une dilatation puis une perte de fonction.' }
    }
  },
  {
    id: 'fistul',
    category: 'reconstructive',
    related: 'fistul-onarimi',
    i18n: {
      tr: { term: 'Fistül', definition: 'İki organ arasında olmaması gereken anormal bağlantı; üriner fistülde sürekli idrar kaçağı olur.' },
      en: { term: 'Fistula', definition: 'An abnormal connection between two organs; in a urinary fistula there is continuous urine leakage.' },
      de: { term: 'Fistel', definition: 'Eine abnorme Verbindung zwischen zwei Organen; bei einer Harnfistel kommt es zu ständigem Urinverlust.' },
      ru: { term: 'Свищ (фистула)', definition: 'Патологическое соустье между двумя органами; при мочевом свище происходит постоянное подтекание мочи.' },
      ar: { term: 'الناسور', definition: 'اتصال غير طبيعي بين عضوين؛ وفي الناسور البولي يحدث تسرّب مستمر للبول.' },
      fr: { term: 'Fistule', definition: 'Communication anormale entre deux organes ; dans une fistule urinaire, la fuite d’urine est continue.' }
    }
  },
  {
    id: 'redo-cerrahi',
    category: 'reconstructive',
    related: 'uretroplasti',
    i18n: {
      tr: { term: 'Redo (tekrar) cerrahi', definition: 'Daha önce başka bir merkezde yapılmış ve başarısız olmuş ameliyatın yeniden ele alınması; yara dokusu nedeniyle daha zordur.' },
      en: { term: 'Redo (revision) surgery', definition: 'Re-operating on a procedure that previously failed elsewhere; scar tissue makes it more demanding.' },
      de: { term: 'Redo-Eingriff (Revision)', definition: 'Erneute Operation nach einem andernorts gescheiterten Eingriff; Narbengewebe macht sie anspruchsvoller.' },
      ru: { term: 'Повторная (ревизионная) операция', definition: 'Повторное вмешательство после неудачной операции в другом центре; рубцовая ткань усложняет задачу.' },
      ar: { term: 'جراحة الإعادة (المراجعة)', definition: 'إعادة إجراء عملية سبق أن فشلت في مركز آخر؛ ويزيد النسيج الندبي من صعوبتها.' },
      fr: { term: 'Chirurgie de reprise (redo)', definition: 'Nouvelle intervention après un échec survenu ailleurs ; le tissu cicatriciel la rend plus exigeante.' }
    }
  },

  // ----------------------------------------------------------------- GENEL
  {
    id: 'sistoskopi',
    category: 'general',
    i18n: {
      tr: { term: 'Sistoskopi', definition: 'İdrar kanalından ince bir kamerayla girilerek mesane içinin doğrudan görüntülenmesi.' },
      en: { term: 'Cystoscopy', definition: 'Direct inspection of the inside of the bladder with a thin camera passed through the urinary channel.' },
      de: { term: 'Zystoskopie', definition: 'Direkte Betrachtung des Blaseninneren mit einer dünnen Kamera über die Harnröhre.' },
      ru: { term: 'Цистоскопия', definition: 'Прямой осмотр внутренней поверхности мочевого пузыря тонкой камерой через мочеиспускательный канал.' },
      ar: { term: 'تنظير المثانة', definition: 'معاينة مباشرة لداخل المثانة بكاميرا رفيعة تُدخَل عبر مجرى البول.' },
      fr: { term: 'Cystoscopie', definition: 'Examen direct de l’intérieur de la vessie à l’aide d’une fine caméra introduite par l’urètre.' }
    }
  },
  {
    id: 'parsiyel-nefrektomi',
    category: 'general',
    related: 'uroonkoloji',
    i18n: {
      tr: { term: 'Parsiyel nefrektomi', definition: 'Böbreğin tamamı yerine yalnızca tümörlü kısmının alınarak organın korunduğu ameliyat.' },
      en: { term: 'Partial nephrectomy', definition: 'An operation removing only the tumour-bearing part of the kidney so the organ is preserved.' },
      de: { term: 'Partielle Nephrektomie', definition: 'Operation, bei der nur der tumortragende Teil der Niere entfernt und das Organ erhalten wird.' },
      ru: { term: 'Резекция почки', definition: 'Операция, при которой удаляют только поражённую опухолью часть почки, сохраняя орган.' },
      ar: { term: 'استئصال جزئي للكلية', definition: 'عملية يُزال فيها الجزء الحامل للورم فقط من الكلية مع الحفاظ على العضو.' },
      fr: { term: 'Néphrectomie partielle', definition: 'Intervention retirant uniquement la partie tumorale du rein afin de préserver l’organe.' }
    }
  },
  {
    id: 'sistektomi',
    category: 'general',
    related: 'uroonkoloji',
    i18n: {
      tr: { term: 'Radikal sistektomi', definition: 'Kas tabakasına ilerlemiş mesane kanserinde mesanenin alınması ve idrar için yeni bir yol oluşturulması.' },
      en: { term: 'Radical cystectomy', definition: 'Removal of the bladder in muscle-invasive bladder cancer, with a new route created for urine.' },
      de: { term: 'Radikale Zystektomie', definition: 'Entfernung der Blase bei muskelinvasivem Blasenkrebs, mit Anlage einer neuen Harnableitung.' },
      ru: { term: 'Радикальная цистэктомия', definition: 'Удаление мочевого пузыря при мышечно-инвазивном раке с созданием нового пути отведения мочи.' },
      ar: { term: 'الاستئصال الجذري للمثانة', definition: 'إزالة المثانة في سرطان المثانة الغازي للعضلة مع إنشاء مسار جديد للبول.' },
      fr: { term: 'Cystectomie radicale', definition: 'Ablation de la vessie dans le cancer infiltrant le muscle, avec création d’une nouvelle voie pour les urines.' }
    }
  },
  {
    id: 'hematuri',
    category: 'general',
    i18n: {
      tr: { term: 'Hematüri', definition: 'İdrarda kan bulunması; gözle görülebilir veya yalnızca tahlilde saptanabilir, mutlaka araştırılmalıdır.' },
      en: { term: 'Haematuria', definition: 'Blood in the urine, either visible or detected only on testing; it should always be investigated.' },
      de: { term: 'Hämaturie', definition: 'Blut im Urin, sichtbar oder nur im Labor nachweisbar; es sollte stets abgeklärt werden.' },
      ru: { term: 'Гематурия', definition: 'Кровь в моче — видимая или выявляемая только при анализе; всегда требует обследования.' },
      ar: { term: 'البيلة الدموية', definition: 'وجود دم في البول، سواء كان مرئيًا أو يُكتشف بالتحليل فقط؛ ويجب دائمًا استقصاؤه.' },
      fr: { term: 'Hématurie', definition: 'Présence de sang dans les urines, visible ou décelée seulement au laboratoire ; elle doit toujours être explorée.' }
    }
  },
  {
    id: 'robotik-cerrahi',
    category: 'general',
    related: 'robotik-prostatektomi',
    i18n: {
      tr: { term: 'Robotik cerrahi', definition: 'Cerrahın konsoldan yönettiği robotik kollarla, küçük kesilerden yapılan minimal invaziv ameliyat yöntemi.' },
      en: { term: 'Robotic surgery', definition: 'A minimally invasive approach through small incisions, using robotic arms the surgeon controls from a console.' },
      de: { term: 'Robotische Chirurgie', definition: 'Minimalinvasives Vorgehen über kleine Schnitte mit Roboterarmen, die der Chirurg von einer Konsole steuert.' },
      ru: { term: 'Роботическая хирургия', definition: 'Малоинвазивный доступ через небольшие разрезы с помощью роботических манипуляторов, управляемых хирургом с консоли.' },
      ar: { term: 'الجراحة الروبوتية', definition: 'أسلوب قليل التوغل عبر شقوق صغيرة بأذرع روبوتية يتحكّم بها الجرّاح من وحدة تحكّم.' },
      fr: { term: 'Chirurgie robotique', definition: 'Approche mini-invasive par petites incisions, avec des bras robotisés pilotés par le chirurgien depuis une console.' }
    }
  },
  {
    id: 'sonda',
    category: 'general',
    i18n: {
      tr: { term: 'Sonda (üriner kateter)', definition: 'İdrarı mesaneden dışarı almak için geçici olarak yerleştirilen ince, esnek boru.' },
      en: { term: 'Urinary catheter', definition: 'A thin, flexible tube placed temporarily to drain urine from the bladder.' },
      de: { term: 'Blasenkatheter', definition: 'Dünner, flexibler Schlauch, der vorübergehend zur Harnableitung aus der Blase eingelegt wird.' },
      ru: { term: 'Мочевой катетер', definition: 'Тонкая гибкая трубка, временно устанавливаемая для отведения мочи из мочевого пузыря.' },
      ar: { term: 'القسطرة البولية', definition: 'أنبوب رفيع مرن يُوضع مؤقتًا لتصريف البول من المثانة.' },
      fr: { term: 'Sonde urinaire', definition: 'Tube fin et souple placé temporairement pour drainer l’urine de la vessie.' }
    }
  },
  {
    id: 'pi-rads',
    category: 'prostate',
    related: 'psa-yuksekligi-ve-biyopsi',
    i18n: {
      tr: { term: 'PI-RADS', definition: 'Prostat MR’ında bulunan şüpheli alanın 1–5 arası puanlanması; yüksek puan şüphenin belirgin olduğunu gösterir.' },
      en: { term: 'PI-RADS', definition: 'A 1–5 score given to a suspicious area on prostate MRI; a higher score means clearer suspicion.' },
      de: { term: 'PI-RADS', definition: 'Bewertung eines verdächtigen Areals im Prostata-MRT auf einer Skala von 1 bis 5; ein höherer Wert bedeutet deutlicheren Verdacht.' },
      fr: { term: 'PI-RADS', definition: 'Cotation de 1 à 5 d’une zone suspecte à l’IRM prostatique ; un score élevé traduit une suspicion nette.' },
      ru: { term: 'PI-RADS', definition: 'Оценка подозрительного участка на МРТ простаты по шкале от 1 до 5; более высокий балл означает более явное подозрение.' },
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
      de: { term: 'Multiparametrisches MRT', definition: 'Eine MRT-Untersuchung, die die Prostata mit mehreren Bildfolgen darstellt und das verdächtige Areal vor der Biopsie zeigt.' },
      fr: { term: 'IRM multiparamétrique', definition: 'Examen IRM qui étudie la prostate avec plusieurs séquences et montre la zone suspecte avant la biopsie.' },
      ru: { term: 'Мультипараметрическая МРТ', definition: 'Исследование МРТ, изучающее простату несколькими последовательностями и показывающее подозрительный участок до биопсии.' },
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
      de: { term: 'Transperineale Biopsie', definition: 'Entnahme der Prostatabiopsie über die Haut zwischen Hodensack und After statt über den Enddarm; das Infektionsrisiko ist geringer, da kein Kontakt zur Darmflora besteht.' },
      fr: { term: 'Biopsie transpérinéale', definition: 'Prélèvement de la biopsie prostatique par la peau entre les bourses et l’anus plutôt que par le rectum ; le risque infectieux est moindre, faute de contact avec la flore intestinale.' },
      ru: { term: 'Трансперинеальная биопсия', definition: 'Взятие биопсии простаты через кожу между мошонкой и задним проходом, а не через прямую кишку; риск инфекции ниже, так как нет контакта с кишечной флорой.' },
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
      de: { term: 'PSA-Dichte', definition: 'Der PSA-Wert im Verhältnis zum Prostatavolumen; er berücksichtigt, dass eine große Prostata naturgemäß mehr PSA bildet.' },
      fr: { term: 'Densité du PSA', definition: 'Rapport entre la valeur du PSA et le volume de la prostate ; il tient compte du fait qu’une grosse prostate produit naturellement plus de PSA.' },
      ru: { term: 'Плотность ПСА', definition: 'Отношение значения ПСА к объёму простаты; учитывает, что крупная простата естественным образом вырабатывает больше ПСА.' },
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
      de: { term: 'Quotient aus freiem und Gesamt-PSA', definition: 'Das Verhältnis von freiem zu Gesamt-PSA im Blut; eine der Größen, die bei der Biopsieentscheidung helfen.' },
      fr: { term: 'Rapport PSA libre/total', definition: 'Rapport du PSA libre au PSA total dans le sang ; l’un des paramètres aidant à décider d’une biopsie.' },
      ru: { term: 'Соотношение свободного и общего ПСА', definition: 'Отношение свободного ПСА к общему ПСА в крови; один из показателей, помогающих решить вопрос о биопсии.' },
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
      de: { term: 'Radikale Prostatektomie', definition: 'Die Operation, bei der bei Prostatakrebs die gesamte Prostata und die Samenblasen entfernt werden.' },
      fr: { term: 'Prostatectomie radicale', definition: 'Intervention consistant à retirer la totalité de la prostate et les vésicules séminales en cas de cancer de la prostate.' },
      ru: { term: 'Радикальная простатэктомия', definition: 'Операция удаления всей простаты и семенных пузырьков при раке простаты.' },
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
      de: { term: 'Resektionsrand (positiv/negativ)', definition: 'Ob am Rand des entfernten Gewebes Tumorzellen vorhanden sind; bei positivem Rand kann eine weitere Behandlung infrage kommen.' },
      fr: { term: 'Marge chirurgicale (positive/négative)', definition: 'Présence ou non de cellules tumorales au bord du tissu retiré ; si elle est positive, un traitement complémentaire peut se discuter.' },
      ru: { term: 'Хирургический край (положительный/отрицательный)', definition: 'Есть ли опухолевые клетки по краю удалённой ткани; при положительном крае может обсуждаться дополнительное лечение.' },
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
      de: { term: 'Androgenentzug (Hormontherapie)', definition: 'Ein Behandlungsansatz, der die Wirkung des männlichen Hormons verringert, von dem der Prostatakrebs zehrt.' },
      fr: { term: 'Suppression androgénique (hormonothérapie)', definition: 'Approche thérapeutique qui réduit l’effet de l’hormone masculine dont se nourrit le cancer de la prostate.' },
      ru: { term: 'Андрогенная депривация (гормональная терапия)', definition: 'Подход к лечению, снижающий действие мужского гормона, которым питается рак простаты.' },
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
      de: { term: 'TNM-Stadieneinteilung', definition: 'Das internationale System, das Ausdehnung des Tumors (T), Lymphknotenbefall (N) und Fernabsiedlungen (M) beschreibt.' },
      fr: { term: 'Classification TNM', definition: 'Système international décrivant l’étendue de la tumeur (T), l’atteinte ganglionnaire (N) et la dissémination à distance (M).' },
      ru: { term: 'Стадирование по TNM', definition: 'Международная система, описывающая распространённость опухоли (T), поражение лимфоузлов (N) и отдалённое распространение (M).' },
      ar: { term: 'تصنيف TNM', definition: 'النظام الدولي الذي يصف امتداد الورم (T) وإصابة العقد اللمفية (N) والانتشار البعيد (M).' }
    }
  },
  {
    id: 'prostatit',
    category: 'prostate',
    i18n: {
      tr: { term: 'Prostatit', definition: 'Prostat bezinin iltihaplanması; ağrı, idrar yakınmaları ve PSA yüksekliğine yol açabilir.' },
      en: { term: 'Prostatitis', definition: 'Inflammation of the prostate gland; it can cause pain, urinary symptoms and a raised PSA.' },
      de: { term: 'Prostatitis', definition: 'Entzündung der Prostata; sie kann Schmerzen, Harnbeschwerden und einen erhöhten PSA-Wert verursachen.' },
      fr: { term: 'Prostatite', definition: 'Inflammation de la prostate ; elle peut provoquer douleurs, troubles urinaires et élévation du PSA.' },
      ru: { term: 'Простатит', definition: 'Воспаление предстательной железы; может вызывать боль, мочевые жалобы и повышение ПСА.' },
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
      de: { term: 'Prostatavolumen', definition: 'Die per Ultraschall gemessene Größe der Prostata; eines der Hauptkriterien dafür, welches Operationsverfahren geeignet ist.' },
      fr: { term: 'Volume prostatique', definition: 'Taille de la prostate mesurée par échographie ; l’un des principaux critères déterminant la technique chirurgicale adaptée.' },
      ru: { term: 'Объём простаты', definition: 'Размер простаты, измеренный с помощью УЗИ; один из основных критериев выбора подходящего хирургического метода.' },
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
      de: { term: 'Mittellappen', definition: 'Der Anteil der Prostata, der in die Blase hineinwächst; sein Vorhandensein beeinflusst die Verfahrenswahl.' },
      fr: { term: 'Lobe médian', definition: 'Partie de la prostate qui se développe dans la vessie ; sa présence influence le choix de la technique.' },
      ru: { term: 'Средняя доля', definition: 'Часть простаты, растущая внутрь мочевого пузыря; её наличие влияет на выбор метода.' },
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
      de: { term: 'Alphablocker', definition: 'Eine Gruppe von Medikamenten, die die Muskulatur in Prostata und Blasenhals entspannt und so den Harnfluss erleichtert.' },
      fr: { term: 'Alphabloquant', definition: 'Groupe de médicaments qui relâche le muscle de la prostate et du col vésical afin de faciliter l’écoulement des urines.' },
      ru: { term: 'Альфа-блокатор', definition: 'Группа препаратов, расслабляющих мышцы простаты и шейки мочевого пузыря и облегчающих отток мочи.' },
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
      de: { term: '5-Alpha-Reduktase-Hemmer', definition: 'Eine Gruppe von Medikamenten, die die Prostata mit der Zeit verkleinert und auch den PSA-Wert senkt.' },
      fr: { term: 'Inhibiteur de la 5-alpha-réductase', definition: 'Groupe de médicaments qui réduit la prostate avec le temps et abaisse aussi la valeur du PSA.' },
      ru: { term: 'Ингибитор 5-альфа-редуктазы', definition: 'Группа препаратов, со временем уменьшающих простату и одновременно снижающих значение ПСА.' },
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
      de: { term: 'Akuter Harnverhalt', definition: 'Trotz voller Blase überhaupt kein Wasser lassen zu können; erfordert eine dringliche Katheteranlage.' },
      fr: { term: 'Rétention aiguë d’urine', definition: 'Impossibilité totale d’uriner alors que la vessie est pleine ; impose un sondage en urgence.' },
      ru: { term: 'Острая задержка мочи', definition: 'Полная невозможность помочиться при наполненном мочевом пузыре; требует срочной катетеризации.' },
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
      de: { term: 'TUR-Syndrom', definition: 'Abfall des Natriumspiegels im Blut, weil bei monopolarer TURP Spülflüssigkeit in den Kreislauf gelangt; beim bipolaren System besteht dieses Risiko nicht.' },
      fr: { term: 'Syndrome de résection', definition: 'Baisse du sodium sanguin due au passage du liquide de lavage dans la circulation lors d’une RTUP monopolaire ; ce risque n’existe pas en bipolaire.' },
      ru: { term: 'ТУР-синдром', definition: 'Снижение уровня натрия в крови из-за попадания промывной жидкости в кровоток при монополярной ТУРП; при биполярной системе такого риска нет.' },
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
      de: { term: 'Offene Adenomektomie', definition: 'Entfernung des vergrößerten inneren Prostatagewebes durch offene Operation bei sehr großen Drüsen.' },
      fr: { term: 'Adénomectomie par voie ouverte', definition: 'Ablation par chirurgie ouverte du tissu prostatique interne hypertrophié dans les très grosses prostates.' },
      ru: { term: 'Открытая аденомэктомия', definition: 'Удаление увеличенной внутренней ткани простаты открытой операцией при очень крупной железе.' },
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
      de: { term: 'Nykturie', definition: 'Nächtliches Aufwachen zum Wasserlassen; eine der häufigen Beschwerden bei Prostatavergrößerung.' },
      fr: { term: 'Nycturie', definition: 'Se réveiller la nuit pour uriner ; l’une des plaintes fréquentes de l’hypertrophie prostatique.' },
      ru: { term: 'Никтурия', definition: 'Пробуждение ночью для мочеиспускания; одна из частых жалоб при увеличении простаты.' },
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
      de: { term: 'Enukleation', definition: 'Ablösen des vergrößerten Prostatagewebes im Ganzen von der Kapsel, statt es stückweise abzutragen.' },
      fr: { term: 'Énucléation', definition: 'Détachement en un bloc du tissu prostatique hypertrophié de la capsule, au lieu de le raboter fragment par fragment.' },
      ru: { term: 'Энуклеация', definition: 'Отделение увеличенной ткани простаты от капсулы целиком, а не срезание по частям.' },
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
      de: { term: 'Steinanalyse', definition: 'Untersuchung der chemischen Zusammensetzung des geborgenen Steins; sie bildet die Grundlage des Vorbeugeplans.' },
      fr: { term: 'Analyse du calcul', definition: 'Étude de la composition chimique du calcul retiré ; elle fonde le plan de prévention des récidives.' },
      ru: { term: 'Анализ камня', definition: 'Исследование химического состава извлечённого камня; на нём строится план профилактики рецидива.' },
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
      de: { term: 'Ausgussstein', definition: 'Ein großer verzweigter Stein, der das Hohlsystem der Niere ausfüllt; belässt man ihn, kann er die Nierenfunktion dauerhaft schädigen.' },
      fr: { term: 'Calcul coralliforme', definition: 'Gros calcul ramifié remplissant les cavités du rein ; laissé en place, il peut altérer définitivement la fonction rénale.' },
      ru: { term: 'Коралловидный камень', definition: 'Крупный разветвлённый камень, заполняющий чашечно-лоханочную систему почки; оставленный, он может стойко нарушить функцию почки.' },
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
      de: { term: 'Nephrostomie', definition: 'Eine zwischen Niere und Haut eingelegte Drainage zur Harnableitung; sie kann nach perkutaner Steinchirurgie vorübergehend verbleiben.' },
      fr: { term: 'Néphrostomie', definition: 'Drain placé entre le rein et la peau pour évacuer les urines ; il peut être laissé temporairement après une chirurgie percutanée du calcul.' },
      ru: { term: 'Нефростома', definition: 'Дренаж между почкой и кожей для отведения мочи; может временно оставаться после чрескожной операции по поводу камня.' },
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
      de: { term: 'Harnleiter-Zugangsschleuse', definition: 'Eine dünne Schleuse, die bei der RIRS in den Harnleiter eingelegt wird; sie schützt ihn und hilft, den Druck in der Niere niedrig zu halten.' },
      fr: { term: 'Gaine d’accès urétérale', definition: 'Gaine fine placée dans l’uretère pendant une RIRS ; elle le protège et aide à maintenir une pression basse dans le rein.' },
      ru: { term: 'Мочеточниковый кожух доступа', definition: 'Тонкий кожух, устанавливаемый в мочеточник при RIRS; защищает его и помогает удерживать низкое давление в почке.' },
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
      de: { term: 'Medikamentöse Steinaustreibung', definition: 'Ein Vorgehen, bei dem der Abgang eines kleinen, bereits abgewanderten Steins medikamentös erleichtert wird.' },
      fr: { term: 'Traitement médical expulsif', definition: 'Approche visant à faciliter, par un médicament, l’expulsion d’un petit calcul déjà descendu.' },
      ru: { term: 'Медикаментозная изгоняющая терапия', definition: 'Подход, при котором лекарство помогает самостоятельному отхождению небольшого спустившегося камня.' },
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
      de: { term: 'Urosepsis', definition: 'Übertritt eines Harnwegsinfekts ins Blut; verläuft mit Fieber und Schüttelfrost und erfordert dringliche Behandlung.' },
      fr: { term: 'Urosepsis', definition: 'Passage d’une infection urinaire dans le sang ; elle évolue avec fièvre et frissons et impose un traitement urgent.' },
      ru: { term: 'Уросепсис', definition: 'Переход инфекции мочевых путей в кровь; протекает с лихорадкой и ознобом и требует срочного лечения.' },
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
      de: { term: 'Kalziumoxalatstein', definition: 'Die häufigste Nierensteinart; das Wiederauftreten lässt sich über Trinkmenge und Ernährung verringern.' },
      fr: { term: 'Calcul d’oxalate de calcium', definition: 'Type de calcul rénal le plus fréquent ; la récidive peut être réduite par l’hydratation et l’alimentation.' },
      ru: { term: 'Оксалатно-кальциевый камень', definition: 'Самый частый вид камней почки; рецидив можно снизить питьевым режимом и питанием.' },
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
      de: { term: 'Harnsäurestein', definition: 'Eine Steinart, die mit zu saurem Urin zusammenhängt; manche lassen sich medikamentös auflösen.' },
      fr: { term: 'Calcul d’acide urique', definition: 'Type de calcul lié à des urines trop acides ; certains peuvent être dissous par un traitement.' },
      ru: { term: 'Мочекислый камень', definition: 'Вид камней, связанный со слишком кислой мочой; часть из них можно растворить лекарствами.' },
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
      de: { term: 'Testosteron', definition: 'Das wichtigste männliche Hormon; es wird morgens bestimmt, und ein niedriger Wert ist nur bei Beschwerden bedeutsam.' },
      fr: { term: 'Testostérone', definition: 'Principale hormone masculine ; elle se dose le matin et un taux bas n’a de sens qu’en présence de symptômes.' },
      ru: { term: 'Тестостерон', definition: 'Основной мужской гормон; измеряется утром, и низкий уровень значим только при наличии симптомов.' },
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
      de: { term: 'Hypogonadismus', definition: 'Die Hoden bilden nicht genug Testosteron; es kann mit Müdigkeit, nachlassendem Verlangen und Muskelabbau einhergehen.' },
      fr: { term: 'Hypogonadisme', definition: 'Production insuffisante de testostérone par les testicules ; peut s’accompagner de fatigue, de baisse du désir et de fonte musculaire.' },
      ru: { term: 'Гипогонадизм', definition: 'Недостаточная выработка тестостерона яичками; может сопровождаться утомляемостью, снижением влечения и потерей мышечной массы.' },
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
      de: { term: 'PDE5-Hemmer', definition: 'Die Medikamentengruppe der ersten Wahl bei Erektionsstörungen; sie wirkt nicht ohne sexuelle Stimulation und darf bei Nitrateinnahme nicht angewendet werden.' },
      fr: { term: 'Inhibiteur de la PDE5', definition: 'Groupe de médicaments de première intention dans les troubles de l’érection ; sans stimulation sexuelle il est inefficace et il est contre-indiqué sous dérivés nitrés.' },
      ru: { term: 'Ингибитор ФДЭ-5', definition: 'Группа препаратов первой линии при нарушении эрекции; без полового возбуждения не действует и противопоказана при приёме нитратов.' },
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
      de: { term: 'Priapismus', definition: 'Eine anhaltende, schmerzhafte Erektion; sie erfordert eine dringliche Abklärung und kann bei Verzögerung bleibende Schäden hinterlassen.' },
      fr: { term: 'Priapisme', definition: 'Érection prolongée et douloureuse ; elle impose une évaluation urgente et peut laisser des séquelles définitives en cas de retard.' },
      ru: { term: 'Приапизм', definition: 'Длительная болезненная эрекция; требует срочной оценки и при промедлении может оставить стойкие повреждения.' },
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
      de: { term: 'Schwellkörperinjektion', definition: 'Gabe eines Medikaments mit einer feinen Nadel in den Penis, wenn Tabletten nicht wirken.' },
      fr: { term: 'Injection intracaverneuse', definition: 'Administration d’un médicament dans la verge au moyen d’une aiguille fine lorsque les comprimés sont inefficaces.' },
      ru: { term: 'Интракавернозная инъекция', definition: 'Введение препарата в половой член тонкой иглой, когда таблетки не помогают.' },
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
      de: { term: 'Hydrozele', definition: 'Flüssigkeitsansammlung um den Hoden; eine der bekannten Komplikationen der Varikozelenoperation.' },
      fr: { term: 'Hydrocèle', definition: 'Accumulation de liquide autour du testicule ; l’une des complications connues de la chirurgie de la varicocèle.' },
      ru: { term: 'Гидроцеле', definition: 'Скопление жидкости вокруг яичка; одно из известных осложнений операции по поводу варикоцеле.' },
      ar: { term: 'القيلة المائية', definition: 'تجمّع سائل حول الخصية؛ وهي من المضاعفات المعروفة لعملية دوالي الخصية.' }
    }
  },
  {
    id: 'testis-torsiyonu',
    category: 'andrology',
    i18n: {
      tr: { term: 'Testis torsiyonu', definition: 'Testisin kendi etrafında dönerek kan akımının kesilmesi; saatler içinde müdahale gerektiren acil durumdur.' },
      en: { term: 'Testicular torsion', definition: 'The testicle twisting on itself and cutting off its blood supply; an emergency requiring intervention within hours.' },
      de: { term: 'Hodentorsion', definition: 'Der Hoden dreht sich um sich selbst und die Blutzufuhr wird unterbrochen; ein Notfall, der binnen Stunden behandelt werden muss.' },
      fr: { term: 'Torsion testiculaire', definition: 'Le testicule tourne sur lui-même et son apport sanguin est interrompu ; urgence nécessitant une intervention en quelques heures.' },
      ru: { term: 'Перекрут яичка', definition: 'Яичко перекручивается вокруг своей оси, и кровоснабжение прекращается; неотложное состояние, требующее вмешательства в течение часов.' },
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
      de: { term: 'Vorzeitiger Samenerguss', definition: 'Der Samenerguss tritt deutlich früher ein als gewünscht; es gibt verhaltensbezogene und medikamentöse Behandlungen.' },
      fr: { term: 'Éjaculation précoce', definition: 'Éjaculation survenant bien plus tôt que souhaité ; des traitements comportementaux et médicamenteux existent.' },
      ru: { term: 'Преждевременная эякуляция', definition: 'Семяизвержение наступает значительно раньше желаемого; существуют поведенческие и лекарственные методы лечения.' },
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
      de: { term: 'Vasektomie', definition: 'Eine dauerhafte Methode der männlichen Empfängnisverhütung, bei der die Samenleiter unterbunden werden.' },
      fr: { term: 'Vasectomie', definition: 'Méthode définitive de contraception masculine consistant à lier les canaux déférents.' },
      ru: { term: 'Вазэктомия', definition: 'Постоянный метод мужской контрацепции, при котором перевязывают семявыносящие протоки.' },
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
      de: { term: 'Aquadissektion', definition: 'Schonendes Trennen der Gewebe mit Flüssigkeitsdruck bei der Penisprothesenoperation; eine in ausgewählten Fällen eingesetzte Technik.' },
      fr: { term: 'Aquadissection', definition: 'Séparation douce des tissus par pression de liquide lors de la pose d’une prothèse pénienne ; technique employée dans des cas sélectionnés.' },
      ru: { term: 'Аквадиссекция', definition: 'Бережное разделение тканей давлением жидкости при операции фаллопротезирования; методика, применяемая в отобранных случаях.' },
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
      de: { term: 'TESE', definition: 'Ein Eingriff, bei dem im Hodengewebe nach Spermien gesucht wird, wenn im Ejakulat keine gefunden werden.' },
      fr: { term: 'TESE', definition: 'Geste consistant à rechercher des spermatozoïdes dans le tissu testiculaire lorsqu’il n’y en a pas dans le sperme.' },
      ru: { term: 'TESE', definition: 'Процедура поиска сперматозоидов в ткани яичка, когда в сперме их нет.' },
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
      de: { term: 'Sakrale Neuromodulation', definition: 'Regulierung der blasensteuernden Nerven durch einen schwachen elektrischen Reiz; kommt bei überaktiver Blase infrage, die auf Medikamente nicht anspricht.' },
      fr: { term: 'Neuromodulation sacrée', definition: 'Régulation des nerfs qui contrôlent la vessie par une faible stimulation électrique ; envisagée dans la vessie hyperactive résistante aux médicaments.' },
      ru: { term: 'Сакральная нейромодуляция', definition: 'Регулирование нервов, управляющих мочевым пузырём, слабым электрическим сигналом; рассматривается при гиперактивном мочевом пузыре, не поддающемся лекарствам.' },
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
      de: { term: 'Beckenbodentraining', definition: 'Regelmäßiges Training der Muskeln, die das Halten des Urins unterstützen; der erste Schritt bei Belastungsinkontinenz.' },
      fr: { term: 'Rééducation périnéale', definition: 'Travail régulier des muscles qui aident à retenir les urines ; première étape dans les fuites d’effort.' },
      ru: { term: 'Упражнения для мышц тазового дна', definition: 'Регулярная тренировка мышц, помогающих удерживать мочу; первый шаг при стрессовом недержании.' },
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
      de: { term: 'Blasentraining', definition: 'Schrittweises Verlängern der Abstände zwischen den Toilettengängen; Teil der Verhaltenstherapie bei überaktiver Blase.' },
      fr: { term: 'Rééducation vésicale', definition: 'Allongement progressif des intervalles entre les mictions ; élément du traitement comportemental de la vessie hyperactive.' },
      ru: { term: 'Тренировка мочевого пузыря', definition: 'Постепенное увеличение промежутков между мочеиспусканиями; часть поведенческого лечения гиперактивного мочевого пузыря.' },
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
      de: { term: 'Botulinumtoxin in die Blase', definition: 'Eine Behandlung des Blasenmuskels bei überaktiver Blase ohne Ansprechen auf Medikamente; die Wirkung ist vorübergehend.' },
      fr: { term: 'Toxine botulique intravésicale', definition: 'Traitement appliqué au muscle vésical dans la vessie hyperactive résistante aux médicaments ; son effet est temporaire.' },
      ru: { term: 'Ботулинический токсин в мочевой пузырь', definition: 'Лечение, вводимое в мышцу мочевого пузыря при гиперактивном пузыре без ответа на лекарства; эффект временный.' },
      ar: { term: 'توكسين البوتولينوم في المثانة', definition: 'علاج يُطبَّق على عضلة المثانة في فرط النشاط غير المستجيب للأدوية؛ وأثره مؤقت.' }
    }
  },
  {
    id: 'interstisyel-sistit',
    category: 'femaleUrology',
    i18n: {
      tr: { term: 'İnterstisyel sistit', definition: 'Enfeksiyon olmadan mesanede ağrı ve sık idrara çıkma ile seyreden kronik durum.' },
      en: { term: 'Interstitial cystitis', definition: 'A chronic condition with bladder pain and frequency in the absence of infection.' },
      de: { term: 'Interstitielle Zystitis', definition: 'Ein chronischer Zustand mit Blasenschmerz und häufigem Harndrang ohne Infektion.' },
      fr: { term: 'Cystite interstitielle', definition: 'Affection chronique associant douleur vésicale et pollakiurie en l’absence d’infection.' },
      ru: { term: 'Интерстициальный цистит', definition: 'Хроническое состояние с болью в мочевом пузыре и учащённым мочеиспусканием при отсутствии инфекции.' },
      ar: { term: 'التهاب المثانة الخلالي', definition: 'حالة مزمنة فيها ألم في المثانة وتبول متكرر من دون عدوى.' }
    }
  },
  {
    id: 'idrar-yolu-enfeksiyonu',
    category: 'general',
    i18n: {
      tr: { term: 'İdrar yolu enfeksiyonu', definition: 'İdrar yollarında bakteri üremesi; yanma, sık idrara çıkma ve bazen ateşle seyreder.' },
      en: { term: 'Urinary tract infection', definition: 'Bacterial growth in the urinary tract; it runs with burning, frequency and sometimes fever.' },
      de: { term: 'Harnwegsinfekt', definition: 'Bakterienwachstum in den Harnwegen; verläuft mit Brennen, häufigem Harndrang und mitunter Fieber.' },
      fr: { term: 'Infection urinaire', definition: 'Prolifération bactérienne dans les voies urinaires ; elle évolue avec brûlures, pollakiurie et parfois fièvre.' },
      ru: { term: 'Инфекция мочевых путей', definition: 'Рост бактерий в мочевых путях; сопровождается жжением, учащённым мочеиспусканием и иногда лихорадкой.' },
      ar: { term: 'التهاب المسالك البولية', definition: 'نمو جراثيم في المسالك البولية؛ يسير مع حرقة وتبول متكرر وأحيانًا حمى.' }
    }
  },
  {
    id: 'idrar-kulturu',
    category: 'general',
    i18n: {
      tr: { term: 'İdrar kültürü', definition: 'İdrarda bakteri olup olmadığını ve hangi antibiyotiğe duyarlı olduğunu gösteren test; taş cerrahisi öncesi zorunludur.' },
      en: { term: 'Urine culture', definition: 'A test showing whether bacteria are present in the urine and which antibiotic they respond to; it is compulsory before stone surgery.' },
      de: { term: 'Urinkultur', definition: 'Ein Test, der zeigt, ob Bakterien im Urin sind und auf welches Antibiotikum sie ansprechen; vor Steinchirurgie zwingend.' },
      fr: { term: 'ECBU (culture d’urine)', definition: 'Examen montrant la présence de bactéries dans les urines et l’antibiotique auquel elles répondent ; obligatoire avant une chirurgie du calcul.' },
      ru: { term: 'Посев мочи', definition: 'Анализ, показывающий наличие бактерий в моче и их чувствительность к антибиотикам; обязателен перед операцией по поводу камня.' },
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
      de: { term: 'Nierenbeckenplastik', definition: 'Operative Erweiterung der Enge am Übergang von Niere zu Harnleiter.' },
      fr: { term: 'Pyéloplastie', definition: 'Élargissement chirurgical du rétrécissement à la jonction entre le rein et l’uretère.' },
      ru: { term: 'Пиелопластика', definition: 'Хирургическое расширение сужения в месте перехода почки в мочеточник.' },
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
      de: { term: 'Ureterneozystostomie', definition: 'Neueinpflanzung des Harnleiters in die Blase; bei Engen und Verletzungen am unteren Ende.' },
      fr: { term: 'Urétéro-néocystostomie', definition: 'Réimplantation de l’uretère dans la vessie ; utilisée en cas de sténose ou de lésion de l’extrémité inférieure.' },
      ru: { term: 'Уретеронеоцистостомия', definition: 'Повторная имплантация мочеточника в мочевой пузырь; применяется при сужении и повреждении нижнего отдела.' },
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
      de: { term: 'Psoas-Hitch', definition: 'Eine Technik, bei der die Blase nach oben fixiert wird, um einen verkürzten Harnleiter zu erreichen.' },
      fr: { term: 'Psoas hitch', definition: 'Technique consistant à amarrer la vessie vers le haut pour rejoindre un uretère raccourci.' },
      ru: { term: 'Psoas hitch', definition: 'Методика подшивания мочевого пузыря кверху, чтобы достичь укороченного мочеточника.' },
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
      de: { term: 'Ileuminterposition', definition: 'Einsetzen eines Dünndarmsegments als Harnweg zur Überbrückung eines langen Harnleiterverlusts.' },
      fr: { term: 'Interposition iléale', definition: 'Interposition d’un segment d’intestin grêle comme voie urinaire pour combler une perte urétérale étendue.' },
      ru: { term: 'Илеальная интерпозиция', definition: 'Вставка сегмента тонкой кишки в мочевые пути для замещения протяжённого дефекта мочеточника.' },
      ar: { term: 'الإقحام اللفائفي', definition: 'وضع قطعة من الأمعاء الدقيقة كمجرى بولي لسدّ فقد طويل في الحالب.' }
    }
  },
  {
    id: 'anastomoz',
    category: 'reconstructive',
    i18n: {
      tr: { term: 'Anastomoz', definition: 'İki boru şeklindeki yapının cerrahi olarak birbirine ağızlaştırılması.' },
      en: { term: 'Anastomosis', definition: 'Surgically joining two tube-shaped structures to each other.' },
      de: { term: 'Anastomose', definition: 'Operatives Verbinden zweier röhrenförmiger Strukturen miteinander.' },
      fr: { term: 'Anastomose', definition: 'Raccordement chirurgical de deux structures tubulaires.' },
      ru: { term: 'Анастомоз', definition: 'Хирургическое соединение двух трубчатых структур между собой.' },
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
      de: { term: 'Radikale Nephrektomie', definition: 'Entfernung der ganzen Niere bei Nierentumoren; bevorzugt, wenn der Tumor groß oder ungünstig gelegen ist.' },
      fr: { term: 'Néphrectomie radicale', definition: 'Ablation du rein entier en cas de tumeur rénale ; préférée lorsque la tumeur est volumineuse ou mal située.' },
      ru: { term: 'Радикальная нефрэктомия', definition: 'Удаление всей почки при опухолях почки; предпочтительна при крупной или неудобно расположенной опухоли.' },
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
      de: { term: 'TUR-B (Blasentumorresektion)', definition: 'Entfernung eines Blasentumors über die Harnröhre; dient sowohl der Behandlung als auch der Stadienbestimmung.' },
      fr: { term: 'RTUV (résection de tumeur de vessie)', definition: 'Ablation d’une tumeur de vessie par les voies naturelles ; elle sert à la fois au traitement et à la stadification.' },
      ru: { term: 'ТУР мочевого пузыря', definition: 'Удаление опухоли мочевого пузыря через мочеиспускательный канал; служит и лечению, и стадированию.' },
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
      de: { term: 'Intravesikales BCG', definition: 'Eine in die Blase eingebrachte Immuntherapie zur Verringerung von Rückfällen bei oberflächlichen Blasentumoren.' },
      fr: { term: 'BCG intravésical', definition: 'Immunothérapie instillée dans la vessie pour réduire les récidives des tumeurs superficielles.' },
      ru: { term: 'Внутрипузырная БЦЖ', definition: 'Иммунотерапия, вводимая в мочевой пузырь для снижения рецидивов поверхностных опухолей.' },
      ar: { term: 'BCG داخل المثانة', definition: 'علاج مناعي يُقطَّر داخل المثانة لتقليل تكرار الأورام السطحية.' }
    }
  },
  {
    id: 'kreatinin',
    category: 'general',
    i18n: {
      tr: { term: 'Kreatinin', definition: 'Böbrek işlevi hakkında fikir veren kan değeri; yükselmesi böbrek işlevinin azaldığına işaret edebilir.' },
      en: { term: 'Creatinine', definition: 'A blood value giving an idea of kidney function; a rise can indicate reduced kidney function.' },
      de: { term: 'Kreatinin', definition: 'Ein Blutwert, der Aufschluss über die Nierenfunktion gibt; ein Anstieg kann auf eine verminderte Nierenfunktion hinweisen.' },
      fr: { term: 'Créatinine', definition: 'Valeur sanguine renseignant sur la fonction rénale ; son élévation peut indiquer une baisse de cette fonction.' },
      ru: { term: 'Креатинин', definition: 'Показатель крови, дающий представление о функции почек; его повышение может указывать на её снижение.' },
      ar: { term: 'الكرياتينين', definition: 'قيمة دموية تعطي فكرة عن وظيفة الكلى؛ وارتفاعها قد يدل على تراجعها.' }
    }
  },
  {
    id: 'spinal-anestezi',
    category: 'general',
    i18n: {
      tr: { term: 'Spinal anestezi', definition: 'Belden yapılan iğneyle vücudun alt yarısının uyuşturulması; hasta uyanıktır.' },
      en: { term: 'Spinal anaesthesia', definition: 'Numbing the lower half of the body with an injection in the back; the patient stays awake.' },
      de: { term: 'Spinalanästhesie', definition: 'Betäubung der unteren Körperhälfte durch eine Injektion im Rücken; der Patient bleibt wach.' },
      fr: { term: 'Rachianesthésie', definition: 'Anesthésie de la moitié inférieure du corps par une injection dans le dos ; le patient reste éveillé.' },
      ru: { term: 'Спинальная анестезия', definition: 'Обезболивание нижней половины тела инъекцией в поясницу; пациент остаётся в сознании.' },
      ar: { term: 'التخدير النصفي', definition: 'تخدير النصف السفلي من الجسم بحقنة في الظهر؛ ويبقى المريض مستيقظًا.' }
    }
  },
  {
    id: 'antibiyotik-profilaksisi',
    category: 'general',
    i18n: {
      tr: { term: 'Antibiyotik profilaksisi', definition: 'İşlem öncesi enfeksiyonu önlemek amacıyla tek doz veya kısa süreli antibiyotik verilmesi.' },
      en: { term: 'Antibiotic prophylaxis', definition: 'Giving a single dose or short course of antibiotic before a procedure to prevent infection.' },
      de: { term: 'Antibiotikaprophylaxe', definition: 'Gabe einer Einzeldosis oder kurzen Antibiotikagabe vor einem Eingriff zur Infektionsvermeidung.' },
      fr: { term: 'Antibioprophylaxie', definition: 'Administration d’une dose unique ou d’une courte cure d’antibiotique avant un geste afin de prévenir l’infection.' },
      ru: { term: 'Антибиотикопрофилактика', definition: 'Назначение однократной дозы или короткого курса антибиотика перед вмешательством для предотвращения инфекции.' },
      ar: { term: 'الوقاية بالمضادات الحيوية', definition: 'إعطاء جرعة واحدة أو دورة قصيرة من المضاد الحيوي قبل الإجراء لمنع العدوى.' }
    }
  },
  {
    id: 'komplikasyon',
    category: 'general',
    i18n: {
      tr: { term: 'Komplikasyon', definition: 'Bir işlemin planlanan seyri dışında gelişen istenmeyen durum; her girişimde belirli bir olasılıkla vardır.' },
      en: { term: 'Complication', definition: 'An unwanted event outside the planned course of a procedure; every intervention carries a certain probability of one.' },
      de: { term: 'Komplikation', definition: 'Ein unerwünschtes Ereignis außerhalb des geplanten Verlaufs eines Eingriffs; bei jedem Eingriff mit einer gewissen Wahrscheinlichkeit möglich.' },
      fr: { term: 'Complication', definition: 'Événement indésirable survenant en dehors du déroulement prévu d’un geste ; toute intervention en comporte une certaine probabilité.' },
      ru: { term: 'Осложнение', definition: 'Нежелательное событие вне запланированного течения вмешательства; оно возможно с определённой вероятностью при любом вмешательстве.' },
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
