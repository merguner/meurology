import type { Locale } from '@/i18n/routing';
import type { Faq } from './types';
import { promiseEnabled, type ServicePromiseKey } from '@/config/promises';

/**
 * SSS maddesi + (varsa) bagli oldugu HIZMET VAADI.
 * Vaat config/promises.ts'te kapatilirsa bu madde sayfadan ve
 * FAQPage yapilandirilmis verisinden tamamen cikar.
 */
export interface InternationalFaqItem extends Faq {
  promise?: ServicePromiseKey;
}

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
export const internationalFaq: Partial<Record<Locale, InternationalFaqItem[]>> = {
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
      a: 'Evet. Paketlerimiz hasta ve bir refakatçinin konaklamasını kapsayacak şekilde planlanır.',
      promise: 'companionAccommodation'
    },
    {
      q: 'Tercüman desteği var mı?',
      a: 'Uluslararası hasta koordinatörümüz İngilizce hizmet vermektedir. Diğer diller için görüşme öncesinde tercüman ayarlanır.',
      promise: 'interpreter'
    },
    {
      q: 'Havalimanı transferi ve konaklama dahil mi?',
      a: 'Evet. Havalimanı–hastane–otel transferleri ve konaklama paket kapsamındadır; ayrıntılar teklifinizde açıkça belirtilir.',
      promise: 'packageIncludesStayAndTransfer'
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
      a: 'Epikriz ve patoloji raporları İngilizce olarak düzenlenebilir; böylece ülkenizdeki hekiminiz süreci takip edebilir.',
      promise: 'englishEpicrisis'
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
      a: 'Evet. Paylaştığınız tüm bilgiler yalnızca değerlendirme amacıyla işlenir. Androloji gibi mahremiyet önceliği olan konularda süreç tamamen gizli yürütülür ve talep üzerine kadın koordinatör desteği sağlanır.',
      promise: 'femaleCoordinator'
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
      a: 'Yes. Our packages are planned to cover accommodation for the patient and one companion.',
      promise: 'companionAccommodation'
    },
    {
      q: 'Is interpreter support available?',
      a: 'Our international patient coordinator works in English. For other languages an interpreter is arranged before your consultation.',
      promise: 'interpreter'
    },
    {
      q: 'Are airport transfers and accommodation included?',
      a: 'Yes. Airport–hospital–hotel transfers and accommodation are part of the package; the details are stated clearly in your offer.',
      promise: 'packageIncludesStayAndTransfer'
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
      a: 'Discharge summaries and pathology reports can be issued in English so your physician at home can follow the process.',
      promise: 'englishEpicrisis'
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
      a: 'Yes. Everything you share is processed only for assessment. For privacy-sensitive areas such as andrology the process is handled confidentially, and a female coordinator is available on request.',
      promise: 'femaleCoordinator'
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
      a: 'نعم. تُخطَّط باقاتنا لتشمل إقامة المريض ومرافق واحد.',
      promise: 'companionAccommodation'
    },
    {
      q: 'هل تتوفّر خدمة الترجمة؟',
      a: 'منسّقة المرضى الدوليين لدينا تعمل باللغة الإنجليزية. ولغات أخرى يُرتَّب لها مترجم قبل الموعد.',
      promise: 'interpreter'
    },
    {
      q: 'هل التنقّل من المطار والإقامة مشمولان؟',
      a: 'نعم. تنقّلات المطار–المستشفى–الفندق والإقامة ضمن الباقة؛ وتُذكر التفاصيل بوضوح في عرضكم.',
      promise: 'packageIncludesStayAndTransfer'
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
      a: 'يمكن إصدار تقرير الخروج ونتائج علم الأمراض باللغة الإنجليزية حتى يتمكّن طبيبكم في بلدكم من متابعة الحالة.',
      promise: 'englishEpicrisis'
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
      a: 'نعم. تُعالَج كل المعلومات التي تشاركونها لغرض التقييم فقط. وفي المجالات الحسّاسة مثل طب الذكورة تُدار العملية بسرّية تامة، وتتوفّر منسّقة سيدة عند الطلب.',
      promise: 'femaleCoordinator'
    }
  ],
};

/** Dile göre SSS listesi; eksik dilde İngilizce'ye düşer. */
export function resolveInternationalFaq(locale: Locale): InternationalFaqItem[] {
  const list = internationalFaq[locale] ?? internationalFaq.en ?? internationalFaq.tr!;
  // Kapatilmis bir vaadin cevabi hic gosterilmez.
  return list.filter((f) => promiseEnabled(f.promise));
}
