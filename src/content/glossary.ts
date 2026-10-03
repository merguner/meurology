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
 * TODO-DOGRULA: Hedef 100+ terim. Mevcut set çekirdek terimleri kapsar;
 * yeni terim eklerken 6 dilin HEPSİNİ doldurun (eksik dil İngilizce'ye düşer).
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
