import type { Locale } from '@/i18n/routing';

/**
 * Ön değerlendirme formuna ilişkin aydınlatma ve ayrı açık rıza metinleri.
 */
export interface LegalSection {
  heading: string;
  paragraphs: string[];
}

export interface LegalDoc {
  lastUpdated: string; // ISO
  /**
   * Hukukçu incelemesi durumu. SİTEDE GÖSTERİLMEZ; yalnızca içerik
   * dosyasında taslak metinleri işaretlemek içindir. 'pending' ise metin
   * avukat onayından geçmemiştir.
   */
  legalReview?: 'pending' | 'reviewed';
  i18n: Partial<Record<Locale, { intro: string; sections: LegalSection[] }>>;
}

/**
 * AYDINLATMA METNİ (KVKK) — Görev 13 taslağı.
 *
 * HUKUKÇU İNCELEMESİNDEN GEÇTİ — onay 6 Ekim 2026 (Dr. Ergün bildirdi).
 * Taslak; sağlık verisi, WhatsApp, yapay zekâ asistanı, yurt dışına aktarım,
 * saklama süreleri ve başvuru hakları başlıklarını kapsar.
 *
 * Onay kapsamında kapanan noktalar (kayıt için) —
 *  1. Tedavi ilişkisine dönüşmeyen başvurular için 24 aylık saklama süresi.
 *  2. Yapay zekâ asistanı görüşme kayıtlarının saklama süresi ve hizmet
 *     sağlayıcının ticari unvanının metinde açıkça anılıp anılmayacağı.
 *  3. Yurt dışına aktarımın KVKK m.9 kapsamında hangi mekanizmaya
 *     (taahhütname / standart sözleşme / açık rıza) dayandırılacağı.
 *  4. WhatsApp üzerinden paylaşılan sağlık verisinde rızanın nasıl
 *     belgeleneceği.
 *  5. Hasta kayıtlarının asgari saklama süresinin, kayıtları tutan sağlık
 *     kuruluşunun mevzuatı uyarınca sayıyla yazılıp yazılmayacağı.
 *
 * legalReview alanı SİTEDE GÖSTERİLMEZ; yalnızca içerik dosyasında durur.
 */
export const kvkkDoc: LegalDoc = {
  lastUpdated: '2026-10-05',
  legalReview: 'reviewed',
  i18n: {
    tr: {
      intro:
        'Bu metin, web sitesi üzerinden paylaştığınız bilgiler içindir: ön değerlendirme formu, forma eklediğiniz belgeler, WhatsApp üzerinden kurduğunuz iletişim ve sitede sunulması hâlinde yapay zekâ destekli hasta asistanı. 6698 sayılı KVKK uygulanır; GDPR hakları, işleme faaliyetine uygulanabildiği ölçüde ayrıca geçerlidir.',
      sections: [
        {
          heading: 'Veri Sorumlusu',
          paragraphs: [
            'Veri sorumlusu Doç. Dr. Müslüm Ergün (ME Urology Clinic), Bahçelievler Mahallesi, E-5 Karayolu / Kültür Sok No:1, 34180 Bahçelievler/İstanbul. İletişim: info@meurology.com / 0532 063 09 69.'
          ]
        },
        {
          heading: 'İşlenen Kişisel Veriler',
          paragraphs: [
            'Ön değerlendirme formu aracılığıyla adınızı, ülkenizi, e-posta adresinizi veya telefon numaranızı, tedavi seçiminizi ve isteğe bağlı mesajınızı doğrudan sizden toplarız.',
            'Dilerseniz forma en fazla üç dosya (PDF, JPG veya PNG; dosya başına en çok 10 MB) ekleyebilirsiniz. Eklediğiniz belgeler tahlil sonucu, görüntüleme raporu veya epikriz gibi sağlık verisi içerebilir. Dosya yüklemek zorunlu değildir; yalnızca ön değerlendirme için gerekli gördüğünüz belgeleri ekleyin ve belgelerin üzerindeki kimlik numarası gibi bilgileri paylaşmak istemiyorsanız kapatabilirsiniz.',
            'Başvuru site sunucusunda işlenir ve kliniğin e-posta adresine iletilir; eklediğiniz dosyalar yalnızca bu bildirim e-postasına eklenir. Size gönderilen otomatik yanıt e-postasına dosya eklenmez.',
            'Ayrıca form kötüye kullanımını önlemek amacıyla IP adresiniz kısa süreliğine işlenir.'
          ]
        },
        {
          heading: 'İşleme Amaçları',
          paragraphs: [
            'Başvurunuza yanıt verilmesi ve talebiniz doğrultusunda ön değerlendirme yapılması. Tedavi ve seyahat koordinasyonu, ancak bu yönde devam etmek istediğinizde yürütülür.',
            'Form ve iletişim kanallarının güvenliğinin sağlanması, otomatik ve kötü niyetli gönderimlerin engellenmesi.'
          ]
        },
        {
          heading: 'Hukuki Sebep',
          paragraphs: [
            'İletişim verileri, talebiniz üzerine olası sağlık hizmeti ilişkisini kurmaya yönelik adımlar için KVKK m.5/2-c kapsamında; sağlık verileri ayrı açık rızanızla KVKK m.6/3-a kapsamında işlenir. Güvenlik amacıyla işlenen teknik kayıtlar meşru menfaat kapsamındadır. Uygulanabilir yasal yükümlülükler ayrıca ilgili kayıtların işlenmesini gerektirebilir.'
          ]
        },
        {
          heading: 'Sağlık Verilerinin İşlenmesi',
          paragraphs: [
            'Tedavi seçiminiz, mesajınız ve forma eklediğiniz belgeler sağlık verisi içerebilir. Sağlık verisi KVKK m.6 anlamında özel nitelikli kişisel veridir ve yalnızca ayrı açık rızanıza dayanılarak, ön değerlendirme amacıyla işlenir.',
            'Sağlık verinizi paylaşmak zorunda değilsiniz. Form, sağlık verisi olmadan da gönderilebilir; bu durumda yalnızca genel bilgi verilebileceğini, kişiye özel bir değerlendirme yapılamayacağını belirtmek isteriz.',
            'Web sitesi üzerinden yapılan ön değerlendirme tanı yerine geçmez; hekim muayenesinin ve gerekli tetkiklerin yerini tutmaz.',
            'Sağlık verisi ölçümleme araçlarına GÖNDERİLMEZ. Şikâyetiniz, tedavi seçiminiz veya belgeleriniz analitik olay parametresi olarak aktarılmaz; ölçümlemeye yalnızca sayfa yolu ve kaynak etiketi gibi teknik bilgiler iletilir.'
          ]
        },
        {
          heading: 'WhatsApp Üzerinden İletişim',
          paragraphs: [
            'Sitedeki WhatsApp bağlantılarına tıkladığınızda görüşme, Meta Platforms Ireland Limited tarafından işletilen WhatsApp üzerinden yürütülür. Bu görüşme ön değerlendirme formundan ayrıdır; form WhatsApp ile gönderilmez.',
            'WhatsApp mesajlarının içeriği uçtan uca şifrelenir. Buna karşılık telefon numaranız, mesajlaşma zamanı ve kullanım bilgileri gibi veriler WhatsApp tarafından kendi koşulları kapsamında işlenir ve yurt dışındaki sunucularda tutulabilir. WhatsApp’ın kendi işleme faaliyetleri bakımından veri sorumlusu Doç. Dr. Müslüm Ergün değildir.',
            'Bu kanal üzerinden sağlık verisi paylaşmak zorunda değilsiniz. Belgelerinizi daha korunaklı bir yolla iletmek isterseniz ön değerlendirme formunu veya info@meurology.com adresini kullanabilirsiniz.',
            'WhatsApp yazışmaları, talebinizin takibi için gerekli olduğu sürece klinik telefonunda saklanır.'
          ]
        },
        {
          heading: 'Yapay Zekâ Destekli Hasta Asistanı',
          paragraphs: [
            'Sitede, sık sorulan konularda yol göstermek için yapay zekâ destekli bir hasta asistanı sunulabilir. Asistan yalnızca bilgilendirme amaçlıdır: tanı koymaz, ilaç veya tedavi önermez, hekim değerlendirmesinin yerine geçmez ve acil durumlarda kullanılmamalıdır.',
            'Asistana yazdığınız mesajlar, yanıtın üretilebilmesi için yurt dışında yerleşik bir yapay zekâ hizmet sağlayıcısının sunucularında işlenir. Bu nedenle asistana kimlik numarası, tam adres, tahlil belgesi veya ayrıntılı sağlık geçmişi gibi bilgileri yazmamanızı öneririz.',
            'Asistanla yapılan görüşmeler, hizmetin güvenliği ve kalitesi için sınırlı bir süre kayıt altında tutulabilir. Asistanın kullanımı tamamen isteğe bağlıdır; aynı soruları ön değerlendirme formu, telefon veya e-posta yoluyla da iletebilirsiniz.',
            'Hakkınızda yalnızca otomatik sistemlerle analiz yapılarak bir karar verilmez; ön değerlendirme her hâlde hekim tarafından yapılır.'
          ]
        },
        {
          heading: 'Aktarım ve Yurt Dışına Aktarım',
          paragraphs: [
            'Başvurularınız; site barındırma, e-posta iletimi, bot koruması ve kullanılması hâlinde yapay zekâ asistanı hizmetlerini sağlayan tedarikçiler tarafından işlenebilir. Bu sağlayıcıların bir bölümü Türkiye dışında, özellikle Avrupa Birliği ve Amerika Birleşik Devletleri’nde yerleşiktir; verileriniz bu kapsamda yurt dışına aktarılabilir.',
            'Yurt dışına aktarım, KVKK m.9 çerçevesinde mevzuatın öngördüğü şartlar sağlanarak ya da bu aktarıma ilişkin ayrı açık rızanıza dayanılarak yapılır. GDPR’ın uygulandığı hâllerde standart sözleşme hükümleri gibi uygun güvenceler esas alınır.',
            'Tedavi veya seyahat koordinasyonu talep ederseniz gerekli bilgiler ilgili sağlık kuruluşu veya hizmet sağlayıcısıyla paylaşılabilir. Bu paylaşım yalnızca talebiniz doğrultusunda ve gereken kadarıyla yapılır.',
            'Yetkili kamu kurum ve kuruluşlarının hukuka uygun talepleri saklıdır.'
          ]
        },
        {
          heading: 'Saklama Süreleri',
          paragraphs: [
            'Ön değerlendirme başvuruları ve forma eklediğiniz belgeler, talebinizi sonuçlandırmak için gerekli süre boyunca saklanır. Başvurunuz bir tedavi ilişkisine dönüşmezse bu süre en çok 24 aydır; süre sonunda kayıtlar silinir veya anonim hâle getirilir.',
            'Tedavi ilişkisi kurulursa hasta kayıtları, sağlık mevzuatının öngördüğü asgari saklama süresi boyunca ilgili sağlık kuruluşunun kayıt düzeni içinde saklanır.',
            'Güvenlik amacıyla işlenen IP adresi gibi teknik kayıtlar kısa süreli tutulur. Çerezler ve ölçümleme kayıtları, rıza vermeniz hâlinde çerez politikasında belirtilen süreler boyunca saklanır.',
            'Yapay zekâ asistanı kullanılması hâlinde görüşme kayıtları, hizmetin güvenliği için sınırlı bir süre tutulur ve bu sürenin sonunda silinir.'
          ]
        },
        {
          heading: 'Haklarınız ve Başvuru Yolu',
          paragraphs: [
            'KVKK m.11 uyarınca; kişisel verinizin işlenip işlenmediğini öğrenme, işlenmişse buna ilişkin bilgi talep etme, işlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme, yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme, eksik veya yanlış işlenmişse düzeltilmesini isteme, şartları oluştuğunda silinmesini veya yok edilmesini isteme, düzeltme ve silme işlemlerinin aktarım yapılan üçüncü kişilere bildirilmesini isteme, münhasıran otomatik sistemlerle analiz edilmesi sonucu aleyhinize bir sonucun ortaya çıkmasına itiraz etme ve kanuna aykırı işleme nedeniyle zarara uğramanız hâlinde zararın giderilmesini talep etme haklarına sahipsiniz.',
            'Başvurunuzu info@meurology.com adresinden veya yukarıdaki klinik adresine yazılı olarak iletebilirsiniz. Başvuruda kimliğinizi tevsik edici bilgilerin ve talebinizin açıkça yer alması gerekir. Başvurular en geç otuz gün içinde sonuçlandırılır; işlemin ayrıca bir maliyet gerektirmesi hâlinde Kurulca belirlenen tarifedeki ücret alınabilir.',
            'Başvurunuzun reddedilmesi, verilen yanıtı yetersiz bulmanız veya süresinde yanıt verilmemesi hâlinde Kişisel Verileri Koruma Kurulu’na şikâyette bulunabilirsiniz.',
            'Açık rızanızı dilediğiniz zaman aynı iletişim kanallarından geri çekebilirsiniz; geri çekme, önceki hukuka uygun işlemeyi etkilemez. GDPR’ın uygulandığı hâllerde erişim, düzeltme, silme, işlemenin kısıtlanması, veri taşınabilirliği ve itiraz haklarınız ile ilgili denetim makamına şikâyet hakkınız da geçerli olabilir.'
          ]
        }
      ]
    },
    en: {
      intro:
        'This notice covers information you share through the website: the pre-assessment form, any documents you attach to it, contact made over WhatsApp, and the AI-assisted patient assistant where it is offered. Turkish Law No. 6698 (KVKK) applies; GDPR rights also apply where the processing falls within its scope.',
      sections: [
        {
          heading: 'Data Controller',
          paragraphs: [
            'The data controller is Doç. Dr. Müslüm Ergün (ME Urology Clinic), Bahçelievler Mahallesi, E-5 Karayolu / Kültür Sok No:1, 34180 Bahçelievler/İstanbul. Contact: info@meurology.com / 0532 063 09 69.'
          ]
        },
        {
          heading: 'Personal Data Processed',
          paragraphs: [
            'Through the pre-assessment form we collect directly from you your name, country, email address or phone number, treatment selection and optional message.',
            'You may attach up to three files to the form (PDF, JPG or PNG; at most 10 MB each). Documents you attach may contain health data such as laboratory results, imaging reports or a discharge summary. Attaching files is not required; attach only the documents you consider necessary for a pre-assessment, and you may cover details such as identity numbers printed on them if you prefer not to share those.',
            'The submission is processed on the site server and sent to the clinic email inbox; your attachments are included only in that notification email. No attachment is added to the automatic acknowledgement sent to you.',
            'Your IP address is also processed briefly in order to prevent misuse of the form.'
          ]
        },
        {
          heading: 'Purposes of Processing',
          paragraphs: [
            'Responding to your enquiry and carrying out a pre-assessment in line with your request. Treatment and travel coordination is carried out only if you wish to proceed on that basis.',
            'Keeping the form and contact channels secure and preventing automated or malicious submissions.'
          ]
        },
        {
          heading: 'Legal Basis',
          paragraphs: [
            'Contact details are processed under KVKK art. 5/2-c for steps taken at your request towards a possible healthcare relationship; health data is processed under KVKK art. 6/3-a on the basis of your separate explicit consent. Technical records kept for security rest on legitimate interest. Applicable legal obligations may additionally require relevant records to be processed.'
          ]
        },
        {
          heading: 'Processing of Health Data',
          paragraphs: [
            'Your treatment selection, your message and the documents you attach may contain health data. Health data is special-category personal data under KVKK art. 6 and is processed for pre-assessment only on the basis of your separate explicit consent.',
            'You are not obliged to share health data. The form can be sent without it; in that case we can give general information only and cannot make an individual assessment.',
            'A pre-assessment made through the website is not a diagnosis and does not replace an examination by a doctor or the investigations that may be needed.',
            'Health data is NOT sent to measurement tools. Your complaint, your treatment selection and your documents are never passed on as analytics event parameters; only technical information such as the page path and a source tag reaches measurement.'
          ]
        },
        {
          heading: 'Contact over WhatsApp',
          paragraphs: [
            'When you click a WhatsApp link on the site, the conversation takes place over WhatsApp, operated by Meta Platforms Ireland Limited. That conversation is separate from the pre-assessment form; the form is not submitted through WhatsApp.',
            'The content of WhatsApp messages is end-to-end encrypted. However, data such as your phone number, message timing and usage information is processed by WhatsApp under its own terms and may be held on servers outside Türkiye. Doç. Dr. Müslüm Ergün is not the data controller for WhatsApp’s own processing.',
            'You are not obliged to share health data through this channel. If you would rather send documents by a more protected route, please use the pre-assessment form or info@meurology.com.',
            'WhatsApp correspondence is kept on the clinic phone for as long as it is needed to follow up your request.'
          ]
        },
        {
          heading: 'AI-Assisted Patient Assistant',
          paragraphs: [
            'The site may offer an AI-assisted patient assistant to help with frequently asked topics. The assistant is for information only: it does not diagnose, does not recommend medication or treatment, does not replace assessment by a doctor, and must not be used in an emergency.',
            'Messages you write to the assistant are processed on the servers of an AI service provider established abroad in order to generate a reply. For that reason we advise you not to write information such as identity numbers, full address, test documents or a detailed medical history into the assistant.',
            'Conversations with the assistant may be logged for a limited period for the security and quality of the service. Using the assistant is entirely optional; you can put the same questions through the pre-assessment form, by phone or by email.',
            'No decision about you is taken solely by automated analysis; the pre-assessment is in every case made by a doctor.'
          ]
        },
        {
          heading: 'Transfers, Including Transfers Abroad',
          paragraphs: [
            'Your submissions may be processed by suppliers providing site hosting, email delivery, bot protection and, where used, the AI assistant service. Some of these providers are established outside Türkiye, in particular in the European Union and the United States; your data may therefore be transferred abroad.',
            'Transfers abroad are made within the framework of KVKK art. 9, either by meeting the conditions the legislation sets out or on the basis of your separate explicit consent to that transfer. Where GDPR applies, appropriate safeguards such as standard contractual clauses are relied on.',
            'If you request treatment or travel coordination, the necessary information may be shared with the relevant healthcare institution or service provider. Such sharing takes place only in line with your request and only to the extent needed.',
            'Lawful requests from competent public authorities are reserved.'
          ]
        },
        {
          heading: 'Retention Periods',
          paragraphs: [
            'Pre-assessment submissions and the documents you attach are kept for as long as is needed to conclude your request. If your enquiry does not lead to a treatment relationship, that period is at most 24 months; at the end of it the records are deleted or anonymised.',
            'If a treatment relationship is established, patient records are kept within the record-keeping system of the relevant healthcare institution for the minimum retention period required by health legislation.',
            'Technical records processed for security, such as the IP address, are kept briefly. Cookies and measurement records are kept, where you have consented, for the periods set out in the cookie policy.',
            'Where the AI assistant is used, conversation logs are kept for a limited period for the security of the service and deleted at the end of it.'
          ]
        },
        {
          heading: 'Your Rights and How to Apply',
          paragraphs: [
            'Under KVKK art. 11 you have the right to learn whether your personal data is being processed; to request information if it is; to learn the purpose of processing and whether the data is used in line with that purpose; to know the third parties to whom it is transferred in Türkiye or abroad; to request correction if it is incomplete or inaccurate; to request erasure or destruction where the conditions are met; to request that correction and erasure be notified to the third parties the data was transferred to; to object to a result adverse to you arising from analysis solely by automated systems; and to claim compensation for damage caused by unlawful processing.',
            'You can apply by writing to info@meurology.com or in writing to the clinic address above. Your application must clearly set out your request and include information establishing your identity. Applications are concluded within thirty days at the latest; where the process entails a separate cost, the fee in the tariff set by the Board may be charged.',
            'If your application is refused, if you find the response inadequate, or if no response is given in time, you may complain to the Turkish Personal Data Protection Board.',
            'You may withdraw your explicit consent at any time through the same contact channels; withdrawal does not affect earlier lawful processing. Where GDPR applies, your rights of access, rectification, erasure, restriction of processing, data portability and objection, together with the right to complain to the relevant supervisory authority, may also apply.'
          ]
        }
      ]
    },
    ar: {
      intro:
        'يتناول هذا الإشعار المعلومات التي تشاركها عبر الموقع: نموذج التقييم الأولي، والمستندات التي ترفقها به، والتواصل عبر واتساب، ومساعد المرضى المدعوم بالذكاء الاصطناعي حيثما كان متاحًا. يُطبَّق القانون التركي رقم 6698 (KVKK)؛ كما تُطبَّق حقوق اللائحة الأوروبية (GDPR) بقدر ما تدخل المعالجة في نطاقها.',
      sections: [
        {
          heading: 'المسؤول عن البيانات',
          paragraphs: [
            'المسؤول عن البيانات هو Doç. Dr. Müslüm Ergün (ME Urology Clinic)، Bahçelievler Mahallesi, E-5 Karayolu / Kültür Sok No:1, 34180 Bahçelievler/İstanbul. للتواصل: info@meurology.com / 0532 063 09 69.'
          ]
        },
        {
          heading: 'البيانات الشخصية المعالَجة',
          paragraphs: [
            'نجمع منك مباشرة عبر نموذج التقييم الأولي الاسم والبلد والبريد الإلكتروني أو رقم الهاتف ومجال العلاج المختار والرسالة الاختيارية.',
            'ويمكنك إرفاق ثلاثة ملفات على الأكثر بالنموذج (PDF أو JPG أو PNG؛ بحد أقصى 10 ميغابايت للملف). وقد تتضمن المستندات المرفقة بيانات صحية كنتائج التحاليل أو تقارير التصوير أو التقرير الطبي عند الخروج. والإرفاق غير إلزامي؛ أرفِق فقط ما تراه لازمًا للتقييم الأولي، ولك أن تُخفي ما على المستندات من بيانات كرقم الهوية إن لم ترغب في مشاركتها.',
            'يُعالَج الطلب على خادم الموقع ويُرسَل إلى بريد العيادة؛ ولا تُرفَق ملفاتك إلا بهذه الرسالة الإشعارية. ولا يُرفَق أي ملف برسالة الإقرار التلقائي المرسَلة إليك.',
            'كما يُعالَج عنوان IP الخاص بك لمدة وجيزة لمنع إساءة استعمال النموذج.'
          ]
        },
        {
          heading: 'أغراض المعالجة',
          paragraphs: [
            'الرد على طلبك وإجراء تقييم أولي بما يوافق ما طلبته. ولا تُجرى تنسيقات العلاج والسفر إلا إذا رغبت في المضي على هذا الأساس.',
            'تأمين النموذج وقنوات التواصل ومنع الإرسالات الآلية أو المسيئة.'
          ]
        },
        {
          heading: 'الأساس القانوني',
          paragraphs: [
            'تُعالَج بيانات التواصل استنادًا إلى المادة 5/2-ج من KVKK للخطوات المتخذة بناءً على طلبك تمهيدًا لعلاقة رعاية صحية محتملة؛ وتُعالَج البيانات الصحية استنادًا إلى المادة 6/3-أ من KVKK بناءً على موافقتك الصريحة المنفصلة. وتستند السجلات التقنية المحفوظة لأغراض الأمن إلى المصلحة المشروعة. وقد تقتضي التزامات قانونية سارية معالجة سجلات أخرى ذات صلة.'
          ]
        },
        {
          heading: 'معالجة البيانات الصحية',
          paragraphs: [
            'قد يتضمن مجال العلاج المختار ورسالتك والمستندات المرفقة بيانات صحية. والبيانات الصحية من الفئات الخاصة بمفهوم المادة 6 من KVKK، ولا تُعالَج لغرض التقييم الأولي إلا بناءً على موافقتك الصريحة المنفصلة.',
            'ولست ملزمًا بمشاركة بياناتك الصحية. ويمكن إرسال النموذج من دونها؛ وفي هذه الحالة لا يمكننا تقديم سوى معلومات عامة من دون تقييم فردي.',
            'والتقييم الأولي عبر الموقع ليس تشخيصًا، ولا يُغني عن فحص الطبيب ولا عن الفحوص اللازمة.',
            'ولا تُرسَل البيانات الصحية إلى أدوات القياس. فلا تُمرَّر شكواك ولا اختيارك العلاجي ولا مستنداتك كمعاملات لأحداث التحليلات؛ ولا يصل إلى القياس سوى معلومات تقنية كمسار الصفحة ووسم المصدر.'
          ]
        },
        {
          heading: 'التواصل عبر واتساب',
          paragraphs: [
            'عند الضغط على رابط واتساب في الموقع تجري المحادثة عبر واتساب الذي تديره شركة Meta Platforms Ireland Limited. وهذه المحادثة منفصلة عن نموذج التقييم الأولي؛ فالنموذج لا يُرسَل عبر واتساب.',
            'ومحتوى رسائل واتساب مشفَّر طرفًا إلى طرف. غير أن بيانات مثل رقم هاتفك وأوقات المراسلة ومعلومات الاستخدام يعالجها واتساب وفق شروطه الخاصة، وقد تُحفَظ على خوادم خارج تركيا. وليس Doç. Dr. Müslüm Ergün مسؤولًا عن المعالجة الخاصة بواتساب نفسه.',
            'ولست ملزمًا بمشاركة بيانات صحية عبر هذه القناة. وإن فضّلت طريقًا أكثر حماية لإرسال مستنداتك فاستخدم نموذج التقييم الأولي أو العنوان info@meurology.com.',
            'وتُحفَظ مراسلات واتساب على هاتف العيادة ما دامت لازمة لمتابعة طلبك.'
          ]
        },
        {
          heading: 'مساعد المرضى المدعوم بالذكاء الاصطناعي',
          paragraphs: [
            'قد يُتاح في الموقع مساعد للمرضى مدعوم بالذكاء الاصطناعي للإرشاد في المواضيع الشائعة. وهذا المساعد للمعلومة فحسب: لا يشخّص، ولا يوصي بدواء أو علاج، ولا يحل محل تقييم الطبيب، ولا يجوز استعماله في الحالات الإسعافية.',
            'وتُعالَج الرسائل التي تكتبها للمساعد على خوادم مزوّد خدمة ذكاء اصطناعي مقرّه خارج تركيا من أجل توليد الرد. ولذلك ننصحك بألا تكتب فيه بيانات كرقم الهوية أو العنوان الكامل أو مستندات الفحوص أو تاريخًا مرضيًا مفصّلًا.',
            'وقد تُحفَظ المحادثات مع المساعد مدة محدودة لأمن الخدمة وجودتها. واستعماله اختياري تمامًا؛ ويمكنك طرح الأسئلة نفسها عبر النموذج أو الهاتف أو البريد الإلكتروني.',
            'ولا يُتخذ بشأنك أي قرار بالاعتماد على التحليل الآلي وحده؛ فالتقييم الأولي يجريه طبيب في كل الأحوال.'
          ]
        },
        {
          heading: 'النقل والنقل إلى خارج تركيا',
          paragraphs: [
            'قد يعالج طلباتِك مزوّدون يقدمون استضافة الموقع وإرسال البريد الإلكتروني والحماية من الروبوتات، وخدمة المساعد الذكي عند استعمالها. وبعض هؤلاء المزوّدين مقرّهم خارج تركيا، ولا سيما في الاتحاد الأوروبي والولايات المتحدة؛ ومن ثَمّ قد تُنقَل بياناتك إلى الخارج.',
            'ويجري النقل إلى الخارج في إطار المادة 9 من KVKK، إما باستيفاء الشروط التي تنص عليها التشريعات، وإما استنادًا إلى موافقتك الصريحة المنفصلة على هذا النقل. وحيثما تُطبَّق GDPR تُعتمد ضمانات ملائمة كالبنود التعاقدية النموذجية.',
            'وإذا طلبت تنسيق العلاج أو السفر فقد تُشارَك المعلومات اللازمة مع المؤسسة الصحية أو مزوّد الخدمة المعني، وذلك وفق طلبك وبالقدر اللازم فقط.',
            'وتبقى الطلبات المشروعة الصادرة عن الجهات العامة المختصة محفوظة.'
          ]
        },
        {
          heading: 'مدد الحفظ',
          paragraphs: [
            'تُحفَظ طلبات التقييم الأولي والمستندات المرفقة بها المدة اللازمة لإنهاء طلبك. وإذا لم يفضِ طلبك إلى علاقة علاجية فهذه المدة 24 شهرًا على الأكثر؛ وتُحذَف السجلات أو تُجهَّل في نهايتها.',
            'وإذا قامت علاقة علاجية فتُحفَظ سجلات المريض ضمن نظام التوثيق لدى المؤسسة الصحية المعنية طوال المدة الدنيا التي تفرضها التشريعات الصحية.',
            'وتُحفَظ السجلات التقنية المعالَجة لأغراض الأمن، كعنوان IP، مدة وجيزة. أما ملفات تعريف الارتباط وسجلات القياس فتُحفَظ، عند موافقتك، طوال المدد المبينة في سياسة ملفات تعريف الارتباط.',
            'وعند استعمال المساعد الذكي تُحفَظ سجلات المحادثة مدة محدودة لأمن الخدمة ثم تُحذَف.'
          ]
        },
        {
          heading: 'حقوقك وطريقة التقدّم بطلب',
          paragraphs: [
            'بموجب المادة 11 من KVKK لك الحق في معرفة ما إذا كانت بياناتك الشخصية تُعالَج؛ وطلب معلومات عن ذلك؛ ومعرفة غرض المعالجة وما إذا كانت البيانات تُستعمَل وفقه؛ ومعرفة الأطراف الثالثة التي نُقِلت إليها داخل تركيا أو خارجها؛ وطلب تصحيحها إن كانت ناقصة أو غير صحيحة؛ وطلب محوها أو إتلافها عند تحقق الشروط؛ وطلب إبلاغ الأطراف المنقول إليها بالتصحيح والمحو؛ والاعتراض على نتيجة في غير مصلحتك ناشئة عن تحليل آلي محض؛ والمطالبة بالتعويض عن ضرر ناجم عن معالجة غير مشروعة.',
            'ويمكنك تقديم طلبك إلى info@meurology.com أو كتابةً إلى عنوان العيادة المذكور أعلاه. وينبغي أن يبيّن الطلب مطلبك بوضوح وأن يتضمن ما يثبت هويتك. وتُنجَز الطلبات خلال ثلاثين يومًا على الأكثر؛ وإذا اقتضى الإجراء كلفة مستقلة فقد يُستوفى الرسم المقرر في التعرفة التي تحددها الهيئة.',
            'وإذا رُفض طلبك أو رأيت الرد غير كافٍ أو لم يصلك رد في المدة المقررة فلك التظلّم أمام الهيئة التركية لحماية البيانات الشخصية.',
            'ولك سحب موافقتك الصريحة في أي وقت عبر القنوات نفسها؛ ولا يؤثر السحب في مشروعية المعالجة السابقة. وحيثما تُطبَّق GDPR قد تَسري أيضًا حقوق الوصول والتصحيح والمحو وتقييد المعالجة وقابلية النقل والاعتراض، وكذلك حق التظلّم أمام سلطة الرقابة المختصة.'
          ]
        }
      ]
    },
  }
};

/**
 * AÇIK RIZA METNİ — legalReview: 'reviewed' (hukukçu onayı 6 Ekim 2026).
 *
 * Aydınlatma metninden ayrıdır. Başlıklar ayrı ayrı geri çekilebilecek
 * şekilde kurgulanmıştır: sağlık verisi / yurt dışına aktarım / WhatsApp /
 * yapay zekâ asistanı.
 *
 * TODO(Dr. Ergün / hukuk müşaviri): formdaki tek onay kutusunun bu dört
 * başlığı birlikte karşılayıp karşılamadığı, yoksa ayrı onay kutularına
 * geçilip geçilmeyeceği değerlendirilmeli.
 */
export const consentDoc: LegalDoc = {
  lastUpdated: '2026-10-05',
  legalReview: 'reviewed',
  i18n: {
    tr: {
      intro:
        'Bu açık rıza, web sitesi üzerinden paylaşmayı seçtiğiniz sağlık verileri ve bu verilerin işlenme biçimleri içindir; aydınlatma metninden ayrıdır. Aşağıdaki başlıkların her biri için rızanızı ayrı ayrı geri çekebilirsiniz.',
      sections: [
        {
          heading: 'Sağlık Verilerinin İşlenmesi',
          paragraphs: [
            'Ön değerlendirme formundaki tedavi seçimi, isteğe bağlı mesajım ve forma eklediğim belgelerde yer alan sağlık verilerinin, Doç. Dr. Müslüm Ergün tarafından ön değerlendirme amacıyla işlenmesine açık rıza veriyorum.',
            'Bu verileri paylaşmak zorunda olmadığımı; paylaşmadığım takdirde yalnızca genel bilgi alabileceğimi biliyorum.'
          ]
        },
        {
          heading: 'Yurt Dışına Aktarım',
          paragraphs: [
            'Kişisel verilerimin ve paylaştığım sağlık verilerinin, hizmetin sağlanması için gerekli olduğu ölçüde, yurt dışında yerleşik barındırma, e-posta iletimi ve güvenlik hizmeti sağlayıcılarına aktarılmasına açık rıza veriyorum.'
          ]
        },
        {
          heading: 'WhatsApp Üzerinden İletişim',
          paragraphs: [
            'Benimle WhatsApp üzerinden iletişime geçilmesini tercih etmem hâlinde, bu kanal üzerinden paylaştığım bilgilerin ön değerlendirme ve randevu koordinasyonu amacıyla işlenmesine açık rıza veriyorum.',
            'Bu kanalın Meta Platforms Ireland Limited tarafından işletildiğini ve ilgili verilerin yurt dışında işlenebileceğini biliyorum.'
          ]
        },
        {
          heading: 'Yapay Zekâ Destekli Hasta Asistanı',
          paragraphs: [
            'Sitede sunulan yapay zekâ destekli hasta asistanını kullanmam hâlinde, asistana yazdığım mesajların yanıt üretilmesi amacıyla yurt dışında yerleşik bir yapay zekâ hizmet sağlayıcısı tarafından işlenmesine açık rıza veriyorum.',
            'Asistanın yalnızca bilgilendirme amaçlı olduğunu; tanı koymadığını, tedavi önermediğini ve hekim değerlendirmesinin yerine geçmediğini biliyorum.'
          ]
        },
        {
          heading: 'Rızanın Geri Çekilmesi',
          paragraphs: [
            'Rızamı info@meurology.com adresine yazarak dilediğim zaman, tümüyle veya yukarıdaki başlıklardan biri bakımından geri çekebileceğimi biliyorum. Geri çekme, o tarihe kadarki hukuka uygun işlemeyi etkilemez.'
          ]
        }
      ]
    },
    en: {
      intro:
        'This consent concerns the health data you choose to share through the website and the ways that data is processed; it is separate from the privacy notice. You can withdraw your consent separately for each of the headings below.',
      sections: [
        {
          heading: 'Processing of Health Data',
          paragraphs: [
            'I explicitly consent to Doç. Dr. Müslüm Ergün processing, for the purpose of pre-assessment, the health data contained in my treatment selection, my optional message and the documents I attach to the pre-assessment form.',
            'I understand that I am not obliged to share this data and that, if I do not, I can receive general information only.'
          ]
        },
        {
          heading: 'Transfer Abroad',
          paragraphs: [
            'I explicitly consent to my personal data and the health data I share being transferred, to the extent necessary to provide the service, to hosting, email delivery and security service providers established abroad.'
          ]
        },
        {
          heading: 'Contact over WhatsApp',
          paragraphs: [
            'If I choose to be contacted over WhatsApp, I explicitly consent to the information I share through that channel being processed for pre-assessment and appointment coordination.',
            'I understand that this channel is operated by Meta Platforms Ireland Limited and that the relevant data may be processed abroad.'
          ]
        },
        {
          heading: 'AI-Assisted Patient Assistant',
          paragraphs: [
            'If I use the AI-assisted patient assistant offered on the site, I explicitly consent to the messages I write to it being processed by an AI service provider established abroad in order to generate a reply.',
            'I understand that the assistant is for information only, that it does not diagnose, does not recommend treatment and does not replace assessment by a doctor.'
          ]
        },
        {
          heading: 'Withdrawing Consent',
          paragraphs: [
            'I understand that I may withdraw my consent at any time, in whole or for any one of the headings above, by writing to info@meurology.com. Withdrawal does not affect processing that was lawful up to that date.'
          ]
        }
      ]
    },
    ar: {
      intro:
        'تتعلق هذه الموافقة بالبيانات الصحية التي تختار مشاركتها عبر الموقع وبطرائق معالجتها، وهي منفصلة عن إشعار الخصوصية. ويمكنك سحب موافقتك على نحو مستقل عن كل بند من البنود الآتية.',
      sections: [
        {
          heading: 'معالجة البيانات الصحية',
          paragraphs: [
            'أوافق صراحةً على أن يعالج Doç. Dr. Müslüm Ergün، لغرض التقييم الأولي، البيانات الصحية الواردة في اختياري العلاجي ورسالتي الاختيارية والمستندات التي أرفقها بنموذج التقييم الأولي.',
            'وأعلم أنني غير ملزم بمشاركة هذه البيانات، وأنني من دونها لا أتلقى سوى معلومات عامة.'
          ]
        },
        {
          heading: 'النقل إلى خارج تركيا',
          paragraphs: [
            'أوافق صراحةً على نقل بياناتي الشخصية والبيانات الصحية التي أشاركها، بالقدر اللازم لتقديم الخدمة، إلى مزوّدي خدمات الاستضافة وإرسال البريد الإلكتروني والأمن المقيمين خارج تركيا.'
          ]
        },
        {
          heading: 'التواصل عبر واتساب',
          paragraphs: [
            'إذا اخترت التواصل عبر واتساب فإنني أوافق صراحةً على معالجة ما أشاركه عبر هذه القناة لغرض التقييم الأولي وتنسيق المواعيد.',
            'وأعلم أن هذه القناة تديرها شركة Meta Platforms Ireland Limited وأن البيانات المعنية قد تُعالَج خارج تركيا.'
          ]
        },
        {
          heading: 'مساعد المرضى المدعوم بالذكاء الاصطناعي',
          paragraphs: [
            'إذا استعملت مساعد المرضى المدعوم بالذكاء الاصطناعي المتاح في الموقع فإنني أوافق صراحةً على أن يعالج مزوّد خدمة ذكاء اصطناعي مقرّه خارج تركيا الرسائل التي أكتبها إليه من أجل توليد الرد.',
            'وأعلم أن المساعد للمعلومة فحسب، وأنه لا يشخّص ولا يوصي بعلاج ولا يحل محل تقييم الطبيب.'
          ]
        },
        {
          heading: 'سحب الموافقة',
          paragraphs: [
            'أعلم أنه يمكنني سحب موافقتي في أي وقت، كليًا أو بشأن أي بند من البنود أعلاه، بالكتابة إلى info@meurology.com. ولا يؤثر السحب في مشروعية المعالجة حتى ذلك التاريخ.'
          ]
        }
      ]
    },
  }
};


/**
 * ÇEREZ POLİTİKASI (prompt m.4.1 — yasal/cerez-politikasi).
 * Metin SİTENİN GERÇEK DAVRANIŞINI anlatır: analitik yalnızca onaydan sonra
 * çalışır, Google Haritalar tıklanana kadar yüklenmez. Davranış değişirse
 * bu metin de güncellenmelidir.
 */
export const cookiesDoc: LegalDoc = {
  lastUpdated: '2026-10-04',
  i18n: {
    tr: {
      intro:
        'Bu metin, bu sitede hangi çerezlerin ve benzeri teknolojilerin kullanıldığını, ne amaçla kullanıldığını ve bunları nasıl yönetebileceğinizi açıklar.',
      sections: [
        {
          heading: 'Çerez nedir?',
          paragraphs: [
            'Çerez, bir siteyi ziyaret ettiğinizde tarayıcınıza kaydedilen küçük bir metin dosyasıdır. Tarayıcınızın yerel depolaması ve benzeri teknolojiler de bu metnin kapsamındadır.'
          ]
        },
        {
          heading: 'Bu sitede kullanılan çerezler',
          paragraphs: [
            'Zorunlu çerezler: Sitenin çalışması için gereklidir ve onay gerektirmez. Dil tercihinizi hatırlayan çerez bu gruptadır. Koyu/açık tema tercihiniz ise tarayıcınızın yerel depolamasında tutulur ve sunucuya gönderilmez.',
            'Analitik çerezler: Hangi sayfaların ne kadar görüntülendiğini anlamak için kullanılır. Bu çerezler yalnızca siz onay verdikten sonra çalışır. Onay vermez ya da reddederseniz hiçbir analitik çağrısı yapılmaz.',
            'Pazarlama çerezleri: Şu anda kullanılmamaktadır. İleride kullanılması hâlinde bu metin güncellenir ve ayrıca onayınız istenir.'
          ]
        },
        {
          heading: 'Üçüncü taraf içerikler',
          paragraphs: [
            'İletişim sayfasında Google Haritalar gömülüdür. Harita, siz tıklayıp yüklenmesini istemediğiniz sürece çalıştırılmaz; yüklendiğinde Google, IP adresiniz dâhil bazı verileri alabilir.',
            'Sosyal medya ve kaynak bağlantıları yalnızca bağlantıdır; tıklamadığınız sürece ilgili platforma veri gitmez.'
          ]
        },
        {
          heading: 'Seçiminizi nasıl yönetirsiniz?',
          paragraphs: [
            'Siteye ilk girişinizde seçim yapmanız istenir. Seçiminizi daha sonra sayfanın altındaki çerez tercihleri bağlantısından değiştirebilirsiniz.',
            'Çerezleri tarayıcı ayarlarınızdan da silebilir veya engelleyebilirsiniz. Zorunlu çerezleri engellerseniz sitenin bazı bölümleri düzgün çalışmayabilir.'
          ]
        },
        {
          heading: 'Saklama süreleri',
          paragraphs: [
            'Dil tercihi çerezi en çok bir yıl saklanır. Çerez tercihiniz, yeniden sorulmaması için tarayıcınızda tutulur. Analitik çerezler, yalnızca onay verdiyseniz ve sağlayıcının belirlediği süre boyunca (genellikle en çok 24 ay) saklanır.'
          ]
        },
        {
          heading: 'Haklarınız ve iletişim',
          paragraphs: [
            'Kişisel verilerinize ilişkin haklarınız ve başvuru yolu için KVKK / GDPR Aydınlatma Metni’ne bakabilirsiniz. Sorularınız için: info@meurology.com'
          ]
        }
      ]
    },
    en: {
      intro:
        'This notice explains which cookies and similar technologies are used on this site, why they are used and how you can manage them.',
      sections: [
        {
          heading: 'What is a cookie?',
          paragraphs: [
            'A cookie is a small text file saved to your browser when you visit a site. Your browser’s local storage and similar technologies are also covered by this notice.'
          ]
        },
        {
          heading: 'Cookies used on this site',
          paragraphs: [
            'Strictly necessary cookies: required for the site to work and set without consent. The cookie that remembers your language choice belongs to this group. Your light/dark theme preference is held in your browser’s local storage and is not sent to the server.',
            'Analytics cookies: used to understand which pages are viewed and how often. These run only after you have given consent. If you decline or make no choice, no analytics request is sent at all.',
            'Marketing cookies: none are currently in use. If they are introduced, this notice will be updated and your consent will be sought separately.'
          ]
        },
        {
          heading: 'Third-party content',
          paragraphs: [
            'A Google Map is embedded on the contact page. It is not loaded unless you click to load it; once loaded, Google may receive certain data including your IP address.',
            'Social media and source links are links only; no data reaches those platforms unless you click them.'
          ]
        },
        {
          heading: 'Managing your choice',
          paragraphs: [
            'You are asked to choose on your first visit. You can change that choice at any time from the cookie preferences link at the bottom of the page.',
            'You can also delete or block cookies in your browser settings. If you block strictly necessary cookies, parts of the site may not work properly.'
          ]
        },
        {
          heading: 'Retention periods',
          paragraphs: [
            'The language preference cookie is kept for at most one year. Your cookie choice is stored in your browser so that you are not asked again. Analytics cookies are kept only if you have consented, for the period set by the provider (usually no more than 24 months).'
          ]
        },
        {
          heading: 'Your rights and contact',
          paragraphs: [
            'For your rights regarding personal data and how to exercise them, please see the KVKK / GDPR Privacy Notice. Questions: info@meurology.com'
          ]
        }
      ]
    },
    ar: {
      intro:
        'يوضّح هذا النص أي ملفات تعريف الارتباط والتقنيات المشابهة تُستخدم في هذا الموقع، ولأي غرض، وكيف يمكنك إدارتها.',
      sections: [
        {
          heading: 'ما هو ملف تعريف الارتباط؟',
          paragraphs: [
            'ملف تعريف الارتباط ملف نصي صغير يُحفَظ في متصفحك عند زيارة موقع ما. ويشمل هذا النص أيضًا التخزين المحلي في متصفحك والتقنيات المشابهة.'
          ]
        },
        {
          heading: 'الملفات المستخدمة في هذا الموقع',
          paragraphs: [
            'الملفات الضرورية: لازمة لعمل الموقع وتُوضَع من دون موافقة. ومنها الملف الذي يتذكر لغتك المختارة. أما تفضيلك للمظهر الفاتح أو الداكن فيُحفَظ في التخزين المحلي للمتصفح ولا يُرسَل إلى الخادم.',
            'ملفات التحليلات: تُستخدم لمعرفة الصفحات التي تُشاهَد وعدد مشاهداتها. ولا تعمل إلا بعد موافقتك. فإن رفضت أو لم تختر شيئًا فلن يُرسَل أي طلب تحليلي على الإطلاق.',
            'ملفات التسويق: غير مستخدمة حاليًا. وإن استُخدمت مستقبلًا فسيُحدَّث هذا النص وتُطلَب موافقتك على نحو منفصل.'
          ]
        },
        {
          heading: 'محتوى الأطراف الثالثة',
          paragraphs: [
            'في صفحة التواصل خريطة Google مضمّنة. ولا تُحمَّل ما لم تنقر أنت لتحميلها؛ وبعد تحميلها قد تتلقى Google بعض البيانات ومنها عنوان IP الخاص بك.',
            'أما روابط وسائل التواصل والمصادر فهي روابط فقط؛ ولا تصل أي بيانات إلى تلك المنصات ما لم تنقر عليها.'
          ]
        },
        {
          heading: 'كيف تدير اختيارك',
          paragraphs: [
            'يُطلَب منك الاختيار عند أول زيارة. ويمكنك تغييره في أي وقت من رابط تفضيلات ملفات تعريف الارتباط أسفل الصفحة.',
            'كما يمكنك حذف الملفات أو حظرها من إعدادات متصفحك. وإذا حظرت الملفات الضرورية فقد لا تعمل بعض أجزاء الموقع على نحو سليم.'
          ]
        },
        {
          heading: 'مدد الحفظ',
          paragraphs: [
            'يُحفَظ ملف تفضيل اللغة سنة واحدة على الأكثر. ويُحفَظ اختيارك بشأن ملفات تعريف الارتباط في متصفحك حتى لا يتكرر السؤال. أما ملفات التحليلات فتُحفَظ فقط عند وجود موافقة وللمدة التي يحددها المزوّد (24 شهرًا على الأكثر عادةً).'
          ]
        },
        {
          heading: 'حقوقك والتواصل',
          paragraphs: [
            'لمعرفة حقوقك المتعلقة بالبيانات الشخصية وطريقة ممارستها، يُرجى مراجعة إشعار الخصوصية KVKK / GDPR. للاستفسار: info@meurology.com'
          ]
        }
      ]
    }
  }
};

/**
 * KULLANIM KOŞULLARI (prompt m.4.1 — yasal/kullanim-kosullari).
 * Hekim-hasta ilişkisinin siteyle KURULMADIĞI açıkça yazılıdır.
 * WhatsApp'ın üçüncü taraf platform olduğu uyarısı dâhildir.
 */
export const termsDoc: LegalDoc = {
  lastUpdated: '2026-10-04',
  i18n: {
    tr: {
      intro:
        'Bu koşullar, bu sitenin kullanımını düzenler. Siteyi kullanarak aşağıdakileri kabul etmiş olursunuz. Kabul etmiyorsanız lütfen siteyi kullanmayın.',
      sections: [
        {
          heading: 'Sitenin amacı',
          paragraphs: [
            'Site, Doç. Dr. Müslüm Ergün’ün ürolojik cerrahi alanındaki çalışma konuları hakkında genel bilgi sunar. Sitede hizmet satışı yapılmaz ve içerik tanı ya da tedavi önerisi değildir.',
            'Siteyi okumanız, form doldurmanız veya mesaj göndermeniz hekim-hasta ilişkisi kurmaz. Bu ilişki ancak muayene ve kabul üzerine doğar.'
          ]
        },
        {
          heading: 'Fikrî mülkiyet',
          paragraphs: [
            'Sitedeki metinler, görseller, şemalar ve kod site sahibine aittir. Kaynak göstererek kısa alıntı yapabilirsiniz; içeriğin tamamının veya önemli bir bölümünün izinsiz çoğaltılması, yayımlanması ya da ticari amaçla kullanılması serbest değildir.'
          ]
        },
        {
          heading: 'Kullanıcının yükümlülükleri',
          paragraphs: [
            'Form ve iletişim kanallarını yalnızca kendi sağlık durumunuza ilişkin başvuru için kullanın. Yanıltıcı bilgi vermemeniz, başkasının verilerini onayı olmadan paylaşmamanız ve sitenin işleyişini engellemeye yönelik girişimlerde bulunmamanız beklenir.'
          ]
        },
        {
          heading: 'İletişim kanalları hakkında uyarı',
          paragraphs: [
            'WhatsApp üzerinden gönderdiğiniz mesajlar, ilgili platformun kendi koşullarına tabidir ve bizim denetimimizde değildir. Tahlil, görüntüleme veya patoloji gibi hassas belgeleri göndermeden önce bunu göz önünde bulundurun; resmî başvuru için e-posta ya da site formunu tercih edin.'
          ]
        },
        {
          heading: 'Dış bağlantılar',
          paragraphs: [
            'Site, kılavuz ve kaynak bağlantıları içerir. Bağlantı verilen sitelerin içeriğinden ve gizlilik uygulamalarından sorumlu değiliz.'
          ]
        },
        {
          heading: 'Sorumluluğun sınırı',
          paragraphs: [
            'İçeriğin doğru ve güncel olması için özen gösterilir; ancak kesintisizlik, hatasızlık veya belirli bir sonuç taahhüt edilmez. Sitedeki bilgilere dayanarak aldığınız kararların sonuçlarından site sahibi sorumlu tutulamaz.',
            'Bu sınırlama, mevzuatın emredici hükümlerini ve hekimin mesleki sorumluluğunu ortadan kaldırmaz.'
          ]
        },
        {
          heading: 'Değişiklikler',
          paragraphs: [
            'Bu koşullar güncellenebilir. Yürürlükteki sürümün tarihi sayfanın başında belirtilir.'
          ]
        },
        {
          heading: 'Uygulanacak hukuk',
          paragraphs: [
            'Bu koşullara Türk hukuku uygulanır. Uyuşmazlıklarda İstanbul mahkemeleri ve icra daireleri yetkilidir. Tüketici mevzuatından doğan haklarınız saklıdır.'
          ]
        }
      ]
    },
    en: {
      intro:
        'These terms govern your use of this site. By using it you accept what follows. If you do not accept them, please do not use the site.',
      sections: [
        {
          heading: 'Purpose of the site',
          paragraphs: [
            'The site provides general information about the areas of urological surgery in which Assoc. Prof. Müslüm Ergün works. No service is sold on the site and the content is not a diagnosis or a treatment recommendation.',
            'Reading the site, completing a form or sending a message does not create a doctor–patient relationship. That relationship arises only upon examination and acceptance.'
          ]
        },
        {
          heading: 'Intellectual property',
          paragraphs: [
            'The texts, images, diagrams and code on this site belong to the site owner. You may quote briefly with attribution; reproducing, publishing or commercially using the whole or a substantial part of the content without permission is not permitted.'
          ]
        },
        {
          heading: 'Your obligations',
          paragraphs: [
            'Use the forms and contact channels only to enquire about your own health. You are expected not to provide misleading information, not to share another person’s data without their consent, and not to attempt to disrupt the operation of the site.'
          ]
        },
        {
          heading: 'A note about contact channels',
          paragraphs: [
            'Messages you send through WhatsApp are subject to that platform’s own terms and are outside our control. Bear this in mind before sending sensitive documents such as test results, imaging or pathology reports; for a formal enquiry, please use email or the site form.'
          ]
        },
        {
          heading: 'External links',
          paragraphs: [
            'The site contains links to guidelines and sources. We are not responsible for the content or the privacy practices of the sites linked to.'
          ]
        },
        {
          heading: 'Limitation of liability',
          paragraphs: [
            'Care is taken to keep the content accurate and up to date; however, no undertaking is given as to uninterrupted availability, freedom from error or any particular outcome. The site owner cannot be held liable for the consequences of decisions you take on the basis of information on this site.',
            'This limitation does not set aside mandatory provisions of the law or the physician’s professional responsibility.'
          ]
        },
        {
          heading: 'Changes',
          paragraphs: [
            'These terms may be updated. The date of the version in force is shown at the top of the page.'
          ]
        },
        {
          heading: 'Governing law',
          paragraphs: [
            'Turkish law applies to these terms. The courts and enforcement offices of Istanbul have jurisdiction over disputes. Your rights under consumer legislation are reserved.'
          ]
        }
      ]
    },
    ar: {
      intro:
        'تنظّم هذه الشروط استخدامك لهذا الموقع. وباستخدامه تكون قد قبلت ما يلي. فإن لم تقبلها فالرجاء عدم استخدام الموقع.',
      sections: [
        {
          heading: 'الغرض من الموقع',
          paragraphs: [
            'يقدّم الموقع معلومات عامة عن مجالات جراحة المسالك البولية التي يعمل فيها الأستاذ المشارك الدكتور مسلم إرغون. ولا تُباع في الموقع خدمات، كما أن المحتوى ليس تشخيصًا ولا توصية علاجية.',
            'وقراءتك للموقع أو تعبئتك نموذجًا أو إرسالك رسالة لا تنشئ علاقة بين الطبيب والمريض. فهذه العلاقة لا تنشأ إلا بعد الفحص والقبول.'
          ]
        },
        {
          heading: 'الملكية الفكرية',
          paragraphs: [
            'النصوص والصور والرسوم والشيفرة في هذا الموقع مملوكة لصاحبه. ويجوز الاقتباس القصير مع ذكر المصدر؛ أما نسخ المحتوى كاملًا أو جزءًا جوهريًا منه أو نشره أو استعماله تجاريًا من دون إذن فغير مسموح.'
          ]
        },
        {
          heading: 'التزامات المستخدم',
          paragraphs: [
            'استعمل النماذج وقنوات التواصل للاستفسار عن حالتك الصحية أنت فقط. ويُتوقع منك ألّا تقدّم معلومات مضللة، وألّا تشارك بيانات شخص آخر من دون موافقته، وألّا تحاول تعطيل عمل الموقع.'
          ]
        },
        {
          heading: 'تنبيه بشأن قنوات التواصل',
          paragraphs: [
            'تخضع الرسائل التي ترسلها عبر WhatsApp لشروط تلك المنصة نفسها وهي خارج سيطرتنا. فضع ذلك في حسبانك قبل إرسال مستندات حساسة مثل نتائج التحاليل أو التصوير أو تقارير علم الأمراض؛ وللاستفسار الرسمي فضّل البريد الإلكتروني أو نموذج الموقع.'
          ]
        },
        {
          heading: 'الروابط الخارجية',
          paragraphs: [
            'يتضمّن الموقع روابط إلى أدلة إرشادية ومصادر. ولسنا مسؤولين عن محتوى تلك المواقع ولا عن ممارساتها في الخصوصية.'
          ]
        },
        {
          heading: 'حدود المسؤولية',
          paragraphs: [
            'نحرص على أن يكون المحتوى صحيحًا ومحدَّثًا؛ غير أننا لا نتعهد باستمرار الخدمة من دون انقطاع ولا بخلوّها من الخطأ ولا بنتيجة بعينها. ولا يُسأل صاحب الموقع عن نتائج القرارات التي تتخذها بناءً على المعلومات الواردة فيه.',
            'ولا يُسقط هذا الحدّ الأحكامَ الآمرة في التشريع ولا المسؤوليةَ المهنية للطبيب.'
          ]
        },
        {
          heading: 'التعديلات',
          paragraphs: [
            'قد تُحدَّث هذه الشروط. ويُذكر تاريخ النسخة السارية في أعلى الصفحة.'
          ]
        },
        {
          heading: 'القانون الواجب التطبيق',
          paragraphs: [
            'يُطبَّق القانون التركي على هذه الشروط. وتختص محاكم إسطنبول ودوائر التنفيذ فيها بالنزاعات. وتبقى حقوقك الناشئة عن تشريعات حماية المستهلك محفوظة.'
          ]
        }
      ]
    }
  }
};

/**
 * TIBBİ SORUMLULUK REDDİ (prompt m.4.1 — yasal/tibbi-sorumluluk-reddi).
 * ÇEVİRİ UYARISI bilinçli olarak buradadır: translation-status.ts'te tr dışı
 * tüm diller reviewed:false. Anadil tıbbi çevirmen kontrolü tamamlanınca
 * ilgili bölüm güncellenmelidir.
 */
export const disclaimerDoc: LegalDoc = {
  lastUpdated: '2026-10-04',
  i18n: {
    tr: {
      intro:
        'Bu sayfa, sitedeki tıbbi içeriğin niteliğini ve sınırlarını açıklar. Tedavi sayfalarını okumadan önce lütfen dikkate alın.',
      sections: [
        {
          heading: 'Buradaki bilgiler tıbbi tavsiye değildir',
          paragraphs: [
            'İçerik genel bilgilendirme amacıyla hazırlanmıştır. Sizin durumunuza özgü tanı, tedavi veya ilaç önerisinin yerine geçmez. Hiçbir metin muayenenin, görüntülemenin ve laboratuvar değerlendirmesinin yerini tutmaz.'
          ]
        },
        {
          heading: 'Hekim-hasta ilişkisi kurulmaz',
          paragraphs: [
            'Sayfaları okumanız, form doldurmanız veya mesaj göndermeniz hekim-hasta ilişkisi başlatmaz. Kişiye özel değerlendirme ancak muayene sonrasında yapılabilir.'
          ]
        },
        {
          heading: 'Acil durumlar',
          paragraphs: [
            'Ani ve şiddetli ağrı, hiç idrar yapamama, ateşle birlikte titreme, yoğun kanama veya testiste ani şiddetli ağrı gibi durumlarda bu siteyi kaynak almayın. 112’yi arayın ya da en yakın acil servise başvurun.'
          ]
        },
        {
          heading: 'Sonuç garantisi verilmez',
          paragraphs: [
            'Hiçbir cerrahi veya tıbbi işlem için başarı garantisi verilmez. Sayfalarda belirtilen süreler, iyileşme dönemleri ve beklentiler tipik seyri tanımlar ve kişiden kişiye değişir.',
            'Riskler ve komplikasyonlar gerçektir; her tedavi sayfasında ayrıca ve açıkça yazılmıştır. Bir bölümü atlamadan okumanızı öneririz.'
          ]
        },
        {
          heading: 'İçeriğin kaynağı ve güncelliği',
          paragraphs: [
            'Tıbbi içerik, Avrupa Üroloji Derneği (EAU) güncel kılavuzları esas alınarak hazırlanır. Her tedavi sayfasında son tıbbi gözden geçirme tarihi belirtilir.',
            'Kaynağı gösterilemeyen oran ve yüzdeler bilinçli olarak yazılmamıştır. Kılavuzlar değiştikçe içerik güncellenir; buna rağmen en güncel bilgi için hekiminize danışın.'
          ]
        },
        {
          heading: 'Çeviriler hakkında',
          paragraphs: [
            'Türkçe dışındaki diller kaynak metinden çevrilmiştir ve henüz anadili o dil olan bir tıbbi çevirmen tarafından onaylanmamıştır. Bir ifade size belirsiz görünüyorsa Türkçe veya İngilizce sürümü esas alın ve bize sorun.'
          ]
        },
        {
          heading: 'Üçüncü taraf bilgileri',
          paragraphs: [
            'Hastane, cihaz ve akreditasyon bilgileri ilgili kurumların kendi açıklamalarına dayanır. Doğrulamak için kurumların resmî sayfalarına başvurabilirsiniz.'
          ]
        }
      ]
    },
    en: {
      intro:
        'This page explains the nature and the limits of the medical content on this site. Please take it into account before reading the treatment pages.',
      sections: [
        {
          heading: 'What you read here is not medical advice',
          paragraphs: [
            'The content is written for general information. It does not replace a diagnosis, treatment or prescription for your particular situation. No text takes the place of an examination, imaging and laboratory assessment.'
          ]
        },
        {
          heading: 'No doctor–patient relationship is created',
          paragraphs: [
            'Reading these pages, completing a form or sending a message does not begin a doctor–patient relationship. An assessment specific to you can only be made after an examination.'
          ]
        },
        {
          heading: 'Emergencies',
          paragraphs: [
            'Do not rely on this site in situations such as sudden severe pain, complete inability to pass urine, fever with shivering, heavy bleeding or sudden severe pain in a testicle. Call your local emergency number or go to the nearest emergency department.'
          ]
        },
        {
          heading: 'No guarantee of outcome',
          paragraphs: [
            'No guarantee of success is given for any surgical or medical procedure. The durations, recovery periods and expectations stated on these pages describe the typical course and vary from person to person.',
            'Risks and complications are real; they are set out separately and plainly on every treatment page. We would encourage you to read that section rather than skip it.'
          ]
        },
        {
          heading: 'Source and currency of the content',
          paragraphs: [
            'The medical content is prepared on the basis of the current guidelines of the European Association of Urology (EAU). Each treatment page states the date of its last medical review.',
            'Rates and percentages that cannot be sourced have deliberately not been written. The content is updated as the guidelines change; even so, ask your own doctor for the most current information.'
          ]
        },
        {
          heading: 'About the translations',
          paragraphs: [
            'Languages other than Turkish are translated from the source text and have not yet been approved by a medical translator who is a native speaker. If any wording seems unclear to you, rely on the Turkish or English version and ask us.'
          ]
        },
        {
          heading: 'Third-party information',
          paragraphs: [
            'Information about the hospital, the equipment and accreditations rests on the statements of those institutions themselves. You can consult their official pages to verify it.'
          ]
        }
      ]
    },
    ar: {
      intro:
        'توضّح هذه الصفحة طبيعة المحتوى الطبي في الموقع وحدوده. فيُرجى أخذها في الحسبان قبل قراءة صفحات العلاج.',
      sections: [
        {
          heading: 'ما هنا ليس استشارة طبية',
          paragraphs: [
            'أُعدّ المحتوى للتعريف العام. وهو لا يحلّ محلّ تشخيص أو علاج أو وصفة تخص حالتك أنت. ولا يغني أي نصّ عن الفحص والتصوير والتقييم المخبري.'
          ]
        },
        {
          heading: 'لا تنشأ علاقة بين الطبيب والمريض',
          paragraphs: [
            'قراءتك هذه الصفحات أو تعبئتك نموذجًا أو إرسالك رسالة لا تبدأ علاقة بين الطبيب والمريض. ولا يمكن إجراء تقييم خاص بك إلا بعد الفحص.'
          ]
        },
        {
          heading: 'الحالات الطارئة',
          paragraphs: [
            'لا تعتمد على هذا الموقع في حالات مثل الألم المفاجئ الشديد، أو العجز التام عن التبول، أو الحمى مع القشعريرة، أو النزف الغزير، أو الألم المفاجئ الشديد في الخصية. اتصل برقم الطوارئ أو توجّه إلى أقرب قسم طوارئ.'
          ]
        },
        {
          heading: 'لا ضمان للنتيجة',
          paragraphs: [
            'لا يُقدَّم ضمان للنجاح في أي إجراء جراحي أو طبي. والمدد وفترات التعافي والتوقعات المذكورة في الصفحات تصف المسار المعتاد وتختلف من شخص إلى آخر.',
            'والمخاطر والمضاعفات حقيقية؛ وهي مكتوبة على حدة وبوضوح في كل صفحة علاج. وننصحك بقراءة ذلك القسم لا بتخطّيه.'
          ]
        },
        {
          heading: 'مصدر المحتوى وحداثته',
          paragraphs: [
            'يُعدّ المحتوى الطبي استنادًا إلى الأدلة الإرشادية السارية للجمعية الأوروبية للمسالك البولية (EAU). ويُذكر في كل صفحة علاج تاريخ آخر مراجعة طبية لها.',
            'ولم تُكتب عمدًا أي نسب أو مئويات يتعذّر إسنادها إلى مصدر. ويُحدَّث المحتوى كلما تغيّرت الأدلة الإرشادية؛ ومع ذلك اسأل طبيبك عن أحدث المعلومات.'
          ]
        },
        {
          heading: 'بشأن الترجمات',
          paragraphs: [
            'اللغات غير التركية مترجَمة عن النص الأصلي ولم يعتمدها بعدُ مترجم طبي ناطق بها لغةً أمًّا. فإن بدت لك عبارة غامضة فاعتمد النسخة التركية أو الإنجليزية واسألنا.'
          ]
        },
        {
          heading: 'معلومات الأطراف الثالثة',
          paragraphs: [
            'تستند المعلومات عن المستشفى والأجهزة والاعتمادات إلى تصريحات تلك المؤسسات نفسها. ويمكنك الرجوع إلى صفحاتها الرسمية للتحقق منها.'
          ]
        }
      ]
    }
  }
};
