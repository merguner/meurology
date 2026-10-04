import type { Locale } from '@/i18n/routing';

/**
 * ÖN DEĞERLENDİRME — HASTAYA OTOMATİK YANIT (prompt m.5.1).
 *
 * Hasta e-posta bıraktıysa, başvurusunun alındığını KENDİ DİLİNDE bildiren
 * bir e-posta gönderilir. Metinler burada tutulur ki API route'u temiz kalsın.
 *
 * DİKKAT — bu metinlerde:
 *  - tıbbi tavsiye veya değerlendirme YOKTUR,
 *  - süre taahhüdü "en geç" biçiminde ve gerçekçi verilir,
 *  - acil durum uyarısı her dilde bulunur (hasta e-postayı acil kanal sanmasın),
 *  - fiyat bilgisi YOKTUR (Türkçe dâhil hiçbir dilde).
 */
export interface AutoReplyCopy {
  subject: string;
  greeting: (name: string) => string;
  received: string;
  timing: string;
  whatNext: string;
  emergency: string;
  disclaimer: string;
  signature: string;
}

const COPY: Record<Locale, AutoReplyCopy> = {
  tr: {
    subject: 'Başvurunuz alındı — ME Urology Clinic',
    greeting: (n) => `Sayın ${n},`,
    received: 'Ön değerlendirme başvurunuz tarafımıza ulaştı. Bu e-posta, başvurunuzun alındığını teyit etmek için otomatik olarak gönderilmiştir.',
    timing: 'Başvurunuz en geç 24 saat içinde incelenerek size dönüş yapılacaktır. Hafta sonu ve resmî tatillerde bu süre uzayabilir.',
    whatNext: 'Elinizde tahlil, görüntüleme veya patoloji raporu varsa, dönüş yaptığımızda bunları paylaşmanızı isteyebiliriz. Şimdiden hazırlamanız süreci hızlandırır.',
    emergency: 'ÖNEMLİ: Bu e-posta adresi acil durumlar için uygun değildir. Ani ve şiddetli ağrı, hiç idrar yapamama, ateşle birlikte titreme veya yoğun kanama gibi durumlarda 112’yi arayın ya da en yakın acil servise başvurun.',
    disclaimer: 'Bu yazışma tıbbi tavsiye yerine geçmez ve hekim-hasta ilişkisi kurmaz. Tanı ve tedavi için hekim muayenesi gerekir.',
    signature: 'ME Urology Clinic'
  },
  en: {
    subject: 'We have received your enquiry — ME Urology Clinic',
    greeting: (n) => `Dear ${n},`,
    received: 'Your pre-assessment enquiry has reached us. This email is sent automatically to confirm that we have received it.',
    timing: 'Your enquiry will be reviewed and answered within 24 hours at the latest. At weekends and on public holidays this may take a little longer.',
    whatNext: 'If you have test results, imaging or a pathology report, we may ask you to share them when we reply. Having them ready will speed things up.',
    emergency: 'IMPORTANT: this email address is not suitable for emergencies. In situations such as sudden severe pain, complete inability to pass urine, fever with shivering or heavy bleeding, call your local emergency number or go to the nearest emergency department.',
    disclaimer: 'This correspondence does not replace medical advice and does not create a doctor–patient relationship. An examination is required for diagnosis and treatment.',
    signature: 'ME Urology Clinic'
  },
  de: {
    subject: 'Ihre Anfrage ist eingegangen — ME Urology Clinic',
    greeting: (n) => `Sehr geehrte/r ${n},`,
    received: 'Ihre Anfrage zur Voreinschätzung ist bei uns eingegangen. Diese E-Mail wird automatisch versandt, um den Eingang zu bestätigen.',
    timing: 'Ihre Anfrage wird spätestens innerhalb von 24 Stunden geprüft und beantwortet. An Wochenenden und Feiertagen kann es etwas länger dauern.',
    whatNext: 'Falls Sie Laborwerte, Bildgebung oder einen Pathologiebefund haben, bitten wir Sie bei unserer Antwort möglicherweise darum. Wenn Sie diese bereithalten, geht es schneller.',
    emergency: 'WICHTIG: Diese E-Mail-Adresse ist für Notfälle nicht geeignet. Bei plötzlichen starken Schmerzen, vollständigem Unvermögen Wasser zu lassen, Fieber mit Schüttelfrost oder starker Blutung rufen Sie den Notruf oder suchen Sie die nächste Notaufnahme auf.',
    disclaimer: 'Dieser Schriftwechsel ersetzt keine medizinische Beratung und begründet kein Arzt-Patienten-Verhältnis. Für Diagnose und Behandlung ist eine Untersuchung erforderlich.',
    signature: 'ME Urology Clinic'
  },
  fr: {
    subject: 'Nous avons bien reçu votre demande — ME Urology Clinic',
    greeting: (n) => `Bonjour ${n},`,
    received: 'Votre demande d’évaluation préalable nous est parvenue. Cet e-mail est envoyé automatiquement pour en confirmer la réception.',
    timing: 'Votre demande sera examinée et une réponse vous sera adressée sous 24 heures au plus tard. Les week-ends et jours fériés, ce délai peut être un peu plus long.',
    whatNext: 'Si vous disposez de résultats d’analyses, d’imagerie ou d’un compte rendu d’anatomopathologie, nous pourrons vous demander de les transmettre lors de notre réponse. Les préparer dès maintenant accélérera les choses.',
    emergency: 'IMPORTANT : cette adresse e-mail ne convient pas aux urgences. En cas de douleur brutale et intense, d’impossibilité totale d’uriner, de fièvre avec frissons ou de saignement abondant, appelez le numéro d’urgence ou rendez-vous au service d’urgence le plus proche.',
    disclaimer: 'Cet échange ne remplace pas un avis médical et ne crée pas de relation médecin-patient. Un examen est nécessaire pour le diagnostic et le traitement.',
    signature: 'ME Urology Clinic'
  },
  ru: {
    subject: 'Мы получили вашу заявку — ME Urology Clinic',
    greeting: (n) => `Уважаемый(ая) ${n},`,
    received: 'Ваша заявка на предварительную оценку поступила к нам. Это письмо отправлено автоматически, чтобы подтвердить получение.',
    timing: 'Заявку рассмотрят и ответят вам не позднее чем в течение 24 часов. В выходные и праздничные дни это может занять немного больше времени.',
    whatNext: 'Если у вас есть результаты анализов, снимки или заключение патоморфолога, при ответе мы можем попросить их прислать. Если подготовите заранее, дело пойдёт быстрее.',
    emergency: 'ВАЖНО: этот адрес электронной почты не подходит для неотложных случаев. При внезапной сильной боли, полной невозможности помочиться, лихорадке с ознобом или обильном кровотечении позвоните в службу неотложной помощи или обратитесь в ближайшее приёмное отделение.',
    disclaimer: 'Эта переписка не заменяет медицинскую консультацию и не создаёт отношений между врачом и пациентом. Для диагноза и лечения необходим осмотр.',
    signature: 'ME Urology Clinic'
  },
  ar: {
    subject: 'تم استلام طلبك — ME Urology Clinic',
    greeting: (n) => `السيد/السيدة ${n}،`,
    received: 'وصلنا طلبك للتقييم المبدئي. وقد أُرسلت هذه الرسالة تلقائيًا لتأكيد الاستلام.',
    timing: 'ستُراجَع رسالتك ويُردّ عليك خلال 24 ساعة على الأكثر. وقد تطول هذه المدة قليلًا في عطلة نهاية الأسبوع والعطل الرسمية.',
    whatNext: 'إن كانت لديك نتائج تحاليل أو صور أو تقرير علم أمراض، فقد نطلب منك مشاركتها عند الرد. وتحضيرها من الآن يسرّع الأمر.',
    emergency: 'مهم: هذا البريد الإلكتروني لا يصلح للحالات الطارئة. فعند الألم المفاجئ الشديد أو العجز التام عن التبول أو الحمى مع القشعريرة أو النزف الغزير، اتصل برقم الطوارئ أو توجّه إلى أقرب قسم طوارئ.',
    disclaimer: 'هذه المراسلة لا تحلّ محلّ الاستشارة الطبية ولا تنشئ علاقة بين الطبيب والمريض. ويلزم الفحص للتشخيص والعلاج.',
    signature: 'ME Urology Clinic'
  }
};

export function autoReplyCopy(locale: string): AutoReplyCopy {
  return COPY[locale as Locale] ?? COPY.tr;
}

/** Arapça için e-postanın sağdan sola hizalanması gerekir. */
export function isRtlLocale(locale: string): boolean {
  return locale === 'ar';
}
