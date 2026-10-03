import type { Locale } from '@/i18n/routing';
import type { Faq } from './types';

/**
 * ULUSLARARASI HASTA SSS (prompt m.4.5 — en az 15 soru).
 *
 * KAPSAM: süreç, ödeme, seyahat, komplikasyon, takip ve hukuki güvence.
 * TIBBİ PROTOKOL İÇERMEZ — sorular lojistik ve süreçle ilgilidir; tedaviye özgü
 * tıbbi sorular ilgili tedavi sayfasının SSS bölümündedir.
 *
 * FİYAT KURALI: Türkçe sürümde tutar yazılmaz (yönetmelik). Para birimi geçen
 * cevaplar yalnızca yabancı dillerde tutar ifade eder; tr sürümü "değerlendirme
 * sonrası" der. Bkz. config/features.ts.
 */
export const internationalFaq: Partial<Record<Locale, Faq[]>> = {
  tr: [
    {
      q: 'Tedavi süreci nasıl başlıyor?',
      a: 'WhatsApp veya ön değerlendirme formuyla bize ulaşırsınız. Tahlil ve görüntüleme sonuçlarınızı paylaşırsınız; ekip dosyanızı inceler ve size uygun yol haritasını iletir.'
    },
    {
      q: 'Ne kadar sürede dönüş yapılıyor?',
      a: 'Mesai saatleri içinde genellikle birkaç saat içinde, mesai dışında ise en geç ertesi iş günü dönüş yapılır.'
    },
    {
      q: 'Türkiye’de ne kadar kalmam gerekir?',
      a: 'Tedaviye göre değişir; çoğu işlemde 5–10 gün yeterlidir. Kesin süre, dosya değerlendirmesi sonrasında size bildirilir.'
    },
    {
      q: 'Yanımda refakatçi getirebilir miyim?',
      a: 'Evet. Paketlerimiz hasta ve bir refakatçinin konaklamasını kapsayacak şekilde planlanır.'
    },
    {
      q: 'Tercüman desteği var mı?',
      a: 'Uluslararası hasta koordinatörümüz İngilizce hizmet vermektedir. Diğer diller için görüşme öncesinde tercüman ayarlanır.'
    },
    {
      q: 'Havalimanı transferi ve konaklama dahil mi?',
      a: 'Evet. Havalimanı–hastane–otel transferleri ve konaklama paket kapsamındadır; ayrıntılar teklifinizde açıkça belirtilir.'
    },
    {
      q: 'Vize gerekiyor mu?',
      a: 'Birçok ülke vatandaşı Türkiye’ye vizesiz veya e-vize ile giriş yapabilir. Randevunuz onaylandığında, gerekirse davet mektubu desteği sağlarız. Güncel vize bilgisi için ülkenizin resmî kaynaklarını kontrol edin.'
    },
    {
      q: 'Ödeme nasıl yapılıyor?',
      a: 'Ödeme banka havalesi ile yapılır. Uluslararası hastalar için ödeme yöntemi görüşme sırasında birlikte belirlenir.'
    },
    {
      q: 'Ücret bilgisini nasıl öğrenebilirim?',
      a: 'Dosyanız değerlendirildikten sonra size özel teklif iletilir. Teklif, pakete dahil olan ve olmayan kalemleri açıkça gösterir.'
    },
    {
      q: 'İptal ve iade politikası nedir?',
      a: 'Planlanan tarihten makul bir süre önce yapılan iptallerde ödenen tutar iade edilir. Koşullar teklifinizde yazılı olarak paylaşılır.'
    },
    {
      q: 'Ameliyat sonrası ne zaman uçabilirim?',
      a: 'Çoğu işlemde kontrol muayenesi sonrasında uçuş izni verilir; bu genellikle işlemden 7–10 gün sonradır. Tedaviye özel süre sayfasında belirtilir.'
    },
    {
      q: 'Komplikasyon gelişirse ne olur?',
      a: 'Türkiye’deyken tüm kontrol ve müdahaleler ekibimiz tarafından yürütülür. Ülkenize döndükten sonra bir sorun olursa, online takip kanallarımızdan bize ulaşır, gerekirse yerel hekiminizle yazışırız.'
    },
    {
      q: 'Takip nasıl yapılıyor?',
      a: 'Taburculuk sonrası planlı online kontroller yapılır. Tahlil ve görüntüleme sonuçlarınızı paylaşarak değerlendirme alabilirsiniz.'
    },
    {
      q: 'Tıbbi raporlarım hangi dilde veriliyor?',
      a: 'Epikriz ve patoloji raporları İngilizce olarak düzenlenebilir; böylece ülkenizdeki hekiminiz süreci takip edebilir.'
    },
    {
      q: 'Sigortam bu tedaviyi karşılar mı?',
      a: 'Sağlık turizmi kapsamındaki işlemler SGK kapsamı dışındadır. Özel/uluslararası sigortanızın kapsamı poliçenize bağlıdır; size yazılı belge sağlayarak başvurunuzda yardımcı oluruz.'
    },
    {
      q: 'İkinci görüş alabilir miyim?',
      a: 'Elbette. Dosyanızı yalnızca ikinci görüş için de paylaşabilirsiniz; bu sizi tedavi almaya mecbur bırakmaz.'
    },
    {
      q: 'Hangi hastanede ameliyat oluyorum?',
      a: 'Ameliyatlar İstanbul’da Medical Park Bahçelievler ve LİV Hospital Topkapı’da gerçekleştirilir. Hangi merkezde olacağı tedavinize göre belirlenir.'
    },
    {
      q: 'Mahremiyetim korunuyor mu?',
      a: 'Evet. Paylaştığınız tüm bilgiler yalnızca değerlendirme amacıyla işlenir. Androloji gibi mahremiyet önceliği olan konularda süreç tamamen gizli yürütülür ve talep üzerine kadın koordinatör desteği sağlanır.'
    }
  ],
  en: [
    {
      q: 'How does the treatment process start?',
      a: 'You reach us on WhatsApp or through the pre-assessment form and share your test and imaging results. The team reviews your file and sends you a suitable pathway.'
    },
    {
      q: 'How quickly do you reply?',
      a: 'Usually within a few hours during working hours, and by the next business day at the latest outside them.'
    },
    {
      q: 'How long do I need to stay in Türkiye?',
      a: 'It depends on the treatment; 5–10 days is enough for most procedures. The exact duration is confirmed after your file assessment.'
    },
    {
      q: 'Can I bring a companion?',
      a: 'Yes. Our packages are planned to cover accommodation for the patient and one companion.'
    },
    {
      q: 'Is interpreter support available?',
      a: 'Our international patient coordinator works in English. For other languages an interpreter is arranged before your consultation.'
    },
    {
      q: 'Are airport transfers and accommodation included?',
      a: 'Yes. Airport–hospital–hotel transfers and accommodation are part of the package; the details are stated clearly in your offer.'
    },
    {
      q: 'Do I need a visa?',
      a: 'Citizens of many countries can enter Türkiye visa-free or with an e-visa. Once your appointment is confirmed we can provide an invitation letter if needed. Please check your country’s official sources for current visa rules.'
    },
    {
      q: 'How is payment made?',
      a: 'Payment is made by bank transfer. For international patients the payment method is agreed together during your consultation.'
    },
    {
      q: 'How do I find out the price?',
      a: 'A tailored offer is sent after your file is assessed. The offer clearly lists what is and is not included in the package.'
    },
    {
      q: 'What is the cancellation and refund policy?',
      a: 'For cancellations made a reasonable time before the scheduled date, the amount paid is refunded. The conditions are set out in writing in your offer.'
    },
    {
      q: 'When can I fly after surgery?',
      a: 'For most procedures, clearance to fly is given after the follow-up examination, typically 7–10 days after the procedure. Treatment-specific timing is stated on each treatment page.'
    },
    {
      q: 'What happens if a complication develops?',
      a: 'While you are in Türkiye, all checks and interventions are handled by our team. If a problem arises after you return home, you reach us through our online follow-up channels and, if needed, we correspond with your local physician.'
    },
    {
      q: 'How is follow-up carried out?',
      a: 'Scheduled online check-ups take place after discharge. You can share your test and imaging results for assessment.'
    },
    {
      q: 'In which language are my medical reports issued?',
      a: 'Discharge summaries and pathology reports can be issued in English so your physician at home can follow the process.'
    },
    {
      q: 'Will my insurance cover this treatment?',
      a: 'Procedures provided under health tourism fall outside the Turkish social security (SGK). Coverage by private or international insurance depends on your policy; we support your claim by providing written documentation.'
    },
    {
      q: 'Can I get a second opinion?',
      a: 'Of course. You may share your file for a second opinion only; this does not oblige you to receive treatment.'
    },
    {
      q: 'Which hospital will I be operated in?',
      a: 'Procedures take place at Medical Park Bahçelievler and LİV Hospital Topkapı in Istanbul. The centre is decided according to your treatment.'
    },
    {
      q: 'Is my privacy protected?',
      a: 'Yes. Everything you share is processed only for assessment. For privacy-sensitive areas such as andrology the process is handled confidentially, and a female coordinator is available on request.'
    }
  ],
  de: [
    {
      q: 'Wie beginnt der Behandlungsprozess?',
      a: 'Sie erreichen uns über WhatsApp oder das Vorab-Formular und teilen Ihre Befunde und Bildgebung mit. Das Team prüft Ihre Unterlagen und sendet Ihnen einen passenden Behandlungsweg.'
    },
    {
      q: 'Wie schnell antworten Sie?',
      a: 'In der Regel innerhalb weniger Stunden während der Geschäftszeiten, außerhalb davon spätestens am nächsten Werktag.'
    },
    {
      q: 'Wie lange muss ich in der Türkei bleiben?',
      a: 'Das hängt von der Behandlung ab; für die meisten Eingriffe genügen 5–10 Tage. Die genaue Dauer wird nach der Unterlagenprüfung bestätigt.'
    },
    {
      q: 'Kann ich eine Begleitperson mitbringen?',
      a: 'Ja. Unsere Pakete sind so geplant, dass die Unterbringung für Patient und eine Begleitperson enthalten ist.'
    },
    {
      q: 'Gibt es Dolmetscherunterstützung?',
      a: 'Unsere Koordinatorin für internationale Patienten arbeitet auf Englisch. Für andere Sprachen wird vor Ihrem Termin ein Dolmetscher organisiert.'
    },
    {
      q: 'Sind Flughafentransfer und Unterkunft inbegriffen?',
      a: 'Ja. Transfers Flughafen–Krankenhaus–Hotel und die Unterkunft gehören zum Paket; die Einzelheiten stehen klar in Ihrem Angebot.'
    },
    {
      q: 'Brauche ich ein Visum?',
      a: 'Staatsangehörige vieler Länder können visumfrei oder mit e-Visum in die Türkei einreisen. Nach Bestätigung Ihres Termins stellen wir bei Bedarf ein Einladungsschreiben aus. Bitte prüfen Sie die aktuellen Regeln bei den offiziellen Stellen Ihres Landes.'
    },
    {
      q: 'Wie erfolgt die Bezahlung?',
      a: 'Die Zahlung erfolgt per Banküberweisung. Für internationale Patienten wird die Zahlungsweise im Gespräch gemeinsam festgelegt.'
    },
    {
      q: 'Wie erfahre ich den Preis?',
      a: 'Nach Prüfung Ihrer Unterlagen erhalten Sie ein individuelles Angebot. Es führt klar auf, was im Paket enthalten ist und was nicht.'
    },
    {
      q: 'Wie sind Stornierung und Rückerstattung geregelt?',
      a: 'Bei Stornierungen, die angemessen vor dem geplanten Termin erfolgen, wird der gezahlte Betrag erstattet. Die Bedingungen sind in Ihrem Angebot schriftlich festgehalten.'
    },
    {
      q: 'Wann darf ich nach der Operation fliegen?',
      a: 'Bei den meisten Eingriffen wird die Flugfreigabe nach der Kontrolluntersuchung erteilt, typischerweise 7–10 Tage nach dem Eingriff. Die behandlungsspezifische Angabe steht auf der jeweiligen Behandlungsseite.'
    },
    {
      q: 'Was passiert bei einer Komplikation?',
      a: 'Solange Sie in der Türkei sind, übernimmt unser Team alle Kontrollen und Eingriffe. Tritt nach Ihrer Rückkehr ein Problem auf, erreichen Sie uns über unsere Online-Nachsorge; bei Bedarf stimmen wir uns mit Ihrem Arzt vor Ort ab.'
    },
    {
      q: 'Wie läuft die Nachsorge ab?',
      a: 'Nach der Entlassung finden geplante Online-Kontrollen statt. Sie können Ihre Befunde und Bildgebung zur Beurteilung teilen.'
    },
    {
      q: 'In welcher Sprache erhalte ich meine Befunde?',
      a: 'Entlassungsbriefe und Pathologiebefunde können auf Englisch ausgestellt werden, damit Ihr Arzt zu Hause den Verlauf verfolgen kann.'
    },
    {
      q: 'Übernimmt meine Versicherung die Behandlung?',
      a: 'Leistungen im Rahmen des Gesundheitstourismus fallen nicht unter die türkische Sozialversicherung (SGK). Ob Ihre private oder internationale Versicherung zahlt, hängt von Ihrer Police ab; wir unterstützen Ihren Antrag mit schriftlichen Unterlagen.'
    },
    {
      q: 'Kann ich eine Zweitmeinung einholen?',
      a: 'Selbstverständlich. Sie können Ihre Unterlagen auch nur für eine Zweitmeinung teilen; das verpflichtet Sie zu keiner Behandlung.'
    },
    {
      q: 'In welchem Krankenhaus werde ich operiert?',
      a: 'Die Eingriffe finden im Medical Park Bahçelievler und im LİV Hospital Topkapı in Istanbul statt. Das Zentrum richtet sich nach Ihrer Behandlung.'
    },
    {
      q: 'Wird meine Privatsphäre geschützt?',
      a: 'Ja. Alles, was Sie teilen, wird ausschließlich zur Beurteilung verarbeitet. In sensiblen Bereichen wie der Andrologie läuft der Prozess vertraulich ab; auf Wunsch steht eine weibliche Koordinatorin zur Verfügung.'
    }
  ],
  ru: [
    {
      q: 'Как начинается процесс лечения?',
      a: 'Вы пишете нам в WhatsApp или заполняете форму предварительной оценки и присылаете результаты анализов и снимки. Команда изучает ваши документы и предлагает подходящий маршрут лечения.'
    },
    {
      q: 'Как быстро вы отвечаете?',
      a: 'Обычно в течение нескольких часов в рабочее время, в нерабочее — не позднее следующего рабочего дня.'
    },
    {
      q: 'Сколько времени нужно пробыть в Турции?',
      a: 'Зависит от лечения; для большинства вмешательств достаточно 5–10 дней. Точный срок подтверждается после оценки документов.'
    },
    {
      q: 'Можно ли приехать с сопровождающим?',
      a: 'Да. Наши пакеты рассчитаны на проживание пациента и одного сопровождающего.'
    },
    {
      q: 'Есть ли поддержка переводчика?',
      a: 'Наш координатор по работе с иностранными пациентами говорит по-английски. Для других языков переводчик организуется до консультации.'
    },
    {
      q: 'Включены ли трансфер из аэропорта и проживание?',
      a: 'Да. Трансферы аэропорт–больница–отель и проживание входят в пакет; детали чётко указаны в вашем предложении.'
    },
    {
      q: 'Нужна ли виза?',
      a: 'Граждане многих стран могут въехать в Турцию без визы или по электронной визе. После подтверждения записи мы при необходимости предоставим приглашение. Актуальные правила уточняйте в официальных источниках вашей страны.'
    },
    {
      q: 'Как производится оплата?',
      a: 'Оплата осуществляется банковским переводом. Для иностранных пациентов способ оплаты согласовывается во время консультации.'
    },
    {
      q: 'Как узнать стоимость?',
      a: 'После оценки ваших документов вам направляется индивидуальное предложение. В нём чётко указано, что входит и что не входит в пакет.'
    },
    {
      q: 'Каковы условия отмены и возврата?',
      a: 'При отмене в разумный срок до запланированной даты уплаченная сумма возвращается. Условия изложены письменно в вашем предложении.'
    },
    {
      q: 'Когда можно лететь после операции?',
      a: 'При большинстве вмешательств разрешение на перелёт даётся после контрольного осмотра, обычно через 7–10 дней. Срок для конкретного лечения указан на его странице.'
    },
    {
      q: 'Что будет, если возникнет осложнение?',
      a: 'Пока вы в Турции, все осмотры и вмешательства выполняет наша команда. Если проблема возникнет после возвращения домой, вы связываетесь с нами по каналам онлайн-наблюдения, при необходимости мы взаимодействуем с вашим местным врачом.'
    },
    {
      q: 'Как проводится наблюдение?',
      a: 'После выписки проводятся плановые онлайн-осмотры. Вы можете присылать результаты анализов и снимков для оценки.'
    },
    {
      q: 'На каком языке выдаются медицинские документы?',
      a: 'Выписки и результаты гистологии могут быть оформлены на английском языке, чтобы ваш врач дома мог следить за процессом.'
    },
    {
      q: 'Покроет ли страховка это лечение?',
      a: 'Процедуры в рамках медицинского туризма не покрываются турецкой системой SGK. Покрытие частной или международной страховкой зависит от вашего полиса; мы поможем с заявлением, предоставив письменные документы.'
    },
    {
      q: 'Можно ли получить второе мнение?',
      a: 'Конечно. Вы можете прислать документы только ради второго мнения; это не обязывает вас проходить лечение.'
    },
    {
      q: 'В какой больнице будет операция?',
      a: 'Операции проводятся в Medical Park Bahçelievler и LİV Hospital Topkapı в Стамбуле. Центр определяется в зависимости от вашего лечения.'
    },
    {
      q: 'Защищена ли моя конфиденциальность?',
      a: 'Да. Всё, чем вы делитесь, обрабатывается только для оценки. В деликатных областях, таких как андрология, процесс ведётся конфиденциально; по запросу доступна координатор-женщина.'
    }
  ],
  ar: [
    {
      q: 'كيف تبدأ رحلة العلاج؟',
      a: 'تتواصلون معنا عبر واتساب أو نموذج التقييم المبدئي وترسلون نتائج التحاليل والصور. يراجع الفريق ملفكم ويرسل لكم خطة مناسبة.'
    },
    {
      q: 'كم يستغرق الرد؟',
      a: 'عادةً خلال ساعات قليلة في أوقات العمل، وخارجها بحدّ أقصى في يوم العمل التالي.'
    },
    {
      q: 'كم يجب أن أبقى في تركيا؟',
      a: 'يعتمد على نوع العلاج؛ وتكفي 5–10 أيام لمعظم العمليات. تُحدَّد المدة الدقيقة بعد تقييم الملف.'
    },
    {
      q: 'هل يمكنني اصطحاب مرافق؟',
      a: 'نعم. تُخطَّط باقاتنا لتشمل إقامة المريض ومرافق واحد.'
    },
    {
      q: 'هل تتوفّر خدمة الترجمة؟',
      a: 'منسّقة المرضى الدوليين لدينا تعمل باللغة الإنجليزية. ولغات أخرى يُرتَّب لها مترجم قبل الموعد.'
    },
    {
      q: 'هل التنقّل من المطار والإقامة مشمولان؟',
      a: 'نعم. تنقّلات المطار–المستشفى–الفندق والإقامة ضمن الباقة؛ وتُذكر التفاصيل بوضوح في عرضكم.'
    },
    {
      q: 'هل أحتاج إلى تأشيرة؟',
      a: 'يستطيع مواطنو دول كثيرة دخول تركيا بدون تأشيرة أو بتأشيرة إلكترونية. وبعد تأكيد الموعد نوفّر خطاب دعوة عند الحاجة. يُرجى مراجعة المصادر الرسمية في بلدكم للاطّلاع على القواعد الحالية.'
    },
    {
      q: 'كيف تتم عملية الدفع؟',
      a: 'يتم الدفع عبر الحوالة البنكية. وبالنسبة للمرضى الدوليين تُحدَّد طريقة الدفع معًا أثناء الاستشارة.'
    },
    {
      q: 'كيف أعرف التكلفة؟',
      a: 'يُرسَل إليكم عرض مخصّص بعد تقييم الملف، ويبيّن بوضوح ما يشمله العرض وما لا يشمله.'
    },
    {
      q: 'ما سياسة الإلغاء والاسترداد؟',
      a: 'في حال الإلغاء قبل الموعد بمدة معقولة يُعاد المبلغ المدفوع. وتُذكر الشروط كتابةً في عرضكم.'
    },
    {
      q: 'متى يمكنني السفر جوًا بعد العملية؟',
      a: 'في معظم العمليات يُمنح الإذن بالسفر بعد فحص المتابعة، وعادةً بعد 7–10 أيام. وتُذكر المدة الخاصة بكل علاج في صفحته.'
    },
    {
      q: 'ماذا يحدث إذا ظهرت مضاعفات؟',
      a: 'أثناء وجودكم في تركيا يتولّى فريقنا جميع الفحوصات والتدخّلات. وإذا ظهرت مشكلة بعد العودة، تتواصلون معنا عبر قنوات المتابعة عبر الإنترنت، ونتواصل عند الحاجة مع طبيبكم المحلي.'
    },
    {
      q: 'كيف تتم المتابعة؟',
      a: 'تُجرى مواعيد متابعة مجدولة عبر الإنترنت بعد الخروج. ويمكنكم إرسال نتائج التحاليل والصور للتقييم.'
    },
    {
      q: 'بأي لغة تصدر تقاريري الطبية؟',
      a: 'يمكن إصدار تقرير الخروج ونتائج علم الأمراض باللغة الإنجليزية حتى يتمكّن طبيبكم في بلدكم من متابعة الحالة.'
    },
    {
      q: 'هل يغطّي تأميني هذا العلاج؟',
      a: 'العمليات ضمن السياحة الصحية خارج نطاق الضمان الاجتماعي التركي (SGK). أما تغطية التأمين الخاص أو الدولي فتعتمد على وثيقتكم؛ ونساعدكم في المطالبة بتوفير مستندات مكتوبة.'
    },
    {
      q: 'هل يمكنني الحصول على رأي ثانٍ؟',
      a: 'بالتأكيد. يمكنكم إرسال ملفكم للحصول على رأي ثانٍ فقط؛ وهذا لا يلزمكم بتلقّي العلاج.'
    },
    {
      q: 'في أي مستشفى ستُجرى العملية؟',
      a: 'تُجرى العمليات في Medical Park Bahçelievler وLİV Hospital Topkapı بإسطنبول. ويُحدَّد المركز بحسب نوع علاجكم.'
    },
    {
      q: 'هل تُحفظ خصوصيتي؟',
      a: 'نعم. تُعالَج كل المعلومات التي تشاركونها لغرض التقييم فقط. وفي المجالات الحسّاسة مثل طب الذكورة تُدار العملية بسرّية تامة، وتتوفّر منسّقة سيدة عند الطلب.'
    }
  ],
  fr: [
    {
      q: 'Comment le parcours de soins commence-t-il ?',
      a: 'Vous nous contactez sur WhatsApp ou via le formulaire de pré-évaluation et partagez vos analyses et votre imagerie. L’équipe examine votre dossier et vous propose un parcours adapté.'
    },
    {
      q: 'Sous quel délai répondez-vous ?',
      a: 'Généralement en quelques heures pendant les heures ouvrables, et au plus tard le jour ouvré suivant en dehors de celles-ci.'
    },
    {
      q: 'Combien de temps dois-je rester en Türkiye ?',
      a: 'Cela dépend du traitement ; 5 à 10 jours suffisent pour la plupart des interventions. La durée exacte est confirmée après l’évaluation du dossier.'
    },
    {
      q: 'Puis-je venir accompagné ?',
      a: 'Oui. Nos forfaits sont conçus pour couvrir l’hébergement du patient et d’un accompagnant.'
    },
    {
      q: 'Un interprète est-il disponible ?',
      a: 'Notre coordinatrice des patients internationaux travaille en anglais. Pour les autres langues, un interprète est organisé avant la consultation.'
    },
    {
      q: 'Les transferts aéroport et l’hébergement sont-ils inclus ?',
      a: 'Oui. Les transferts aéroport–hôpital–hôtel et l’hébergement font partie du forfait ; les détails figurent clairement dans votre offre.'
    },
    {
      q: 'Ai-je besoin d’un visa ?',
      a: 'Les ressortissants de nombreux pays peuvent entrer en Türkiye sans visa ou avec un e-visa. Une fois votre rendez-vous confirmé, nous fournissons si nécessaire une lettre d’invitation. Vérifiez les règles en vigueur auprès des sources officielles de votre pays.'
    },
    {
      q: 'Comment s’effectue le paiement ?',
      a: 'Le paiement se fait par virement bancaire. Pour les patients internationaux, le moyen de paiement est convenu ensemble lors de la consultation.'
    },
    {
      q: 'Comment connaître le prix ?',
      a: 'Une offre personnalisée vous est envoyée après l’évaluation de votre dossier. Elle indique clairement ce qui est inclus et ce qui ne l’est pas.'
    },
    {
      q: 'Quelle est la politique d’annulation et de remboursement ?',
      a: 'En cas d’annulation effectuée dans un délai raisonnable avant la date prévue, le montant versé est remboursé. Les conditions sont précisées par écrit dans votre offre.'
    },
    {
      q: 'Quand puis-je prendre l’avion après l’intervention ?',
      a: 'Pour la plupart des interventions, l’autorisation de vol est donnée après la consultation de contrôle, généralement 7 à 10 jours après. Le délai propre à chaque traitement figure sur sa page.'
    },
    {
      q: 'Que se passe-t-il en cas de complication ?',
      a: 'Tant que vous êtes en Türkiye, tous les contrôles et gestes sont assurés par notre équipe. Si un problème survient après votre retour, vous nous joignez via nos canaux de suivi en ligne et, si nécessaire, nous échangeons avec votre médecin local.'
    },
    {
      q: 'Comment se déroule le suivi ?',
      a: 'Des contrôles en ligne programmés ont lieu après la sortie. Vous pouvez transmettre vos analyses et votre imagerie pour évaluation.'
    },
    {
      q: 'Dans quelle langue mes comptes rendus sont-ils rédigés ?',
      a: 'Le compte rendu de sortie et les résultats anatomopathologiques peuvent être établis en anglais afin que votre médecin dans votre pays puisse suivre l’évolution.'
    },
    {
      q: 'Mon assurance couvre-t-elle ce traitement ?',
      a: 'Les actes relevant du tourisme médical sont hors du champ de la sécurité sociale turque (SGK). La prise en charge par une assurance privée ou internationale dépend de votre contrat ; nous appuyons votre demande en fournissant des documents écrits.'
    },
    {
      q: 'Puis-je demander un deuxième avis ?',
      a: 'Bien sûr. Vous pouvez transmettre votre dossier uniquement pour un deuxième avis ; cela ne vous engage à aucun traitement.'
    },
    {
      q: 'Dans quel hôpital serai-je opéré ?',
      a: 'Les interventions ont lieu au Medical Park Bahçelievler et au LİV Hospital Topkapı, à Istanbul. Le centre est choisi en fonction de votre traitement.'
    },
    {
      q: 'Ma confidentialité est-elle protégée ?',
      a: 'Oui. Tout ce que vous partagez est traité uniquement à des fins d’évaluation. Dans les domaines sensibles comme l’andrologie, le parcours est mené en toute confidentialité et une coordinatrice est disponible sur demande.'
    }
  ]
};

/** Dile göre SSS listesi; eksik dilde İngilizce'ye düşer. */
export function resolveInternationalFaq(locale: Locale): Faq[] {
  return internationalFaq[locale] ?? internationalFaq.en ?? [];
}
