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
 * DİKKAT: legalReview: 'pending'. Bu metin HUKUKÇU İNCELEMESİNDEN GEÇMEDİ.
 * Taslak; sağlık verisi, WhatsApp, yapay zekâ asistanı, yurt dışına aktarım,
 * saklama süreleri ve başvuru hakları başlıklarını kapsar.
 *
 * TODO(Dr. Ergün / hukuk müşaviri): aşağıdaki noktalar teyit edilmeli —
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
  legalReview: 'pending',
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
    de: {
      intro:
        'Dieser Hinweis betrifft Angaben, die Sie über die Website mitteilen: das Vorabbewertungsformular, die dort angehängten Dokumente, den Kontakt über WhatsApp und, sofern angeboten, den KI-gestützten Patientenassistenten. Es gilt das türkische Gesetz Nr. 6698 (KVKK); DSGVO-Rechte gelten zusätzlich, soweit die Verarbeitung in ihren Anwendungsbereich fällt.',
      sections: [
        {
          heading: 'Verantwortlicher',
          paragraphs: [
            'Verantwortlicher ist Doç. Dr. Müslüm Ergün (ME Urology Clinic), Bahçelievler Mahallesi, E-5 Karayolu / Kültür Sok No:1, 34180 Bahçelievler/İstanbul. Kontakt: info@meurology.com / 0532 063 09 69.'
          ]
        },
        {
          heading: 'Verarbeitete personenbezogene Daten',
          paragraphs: [
            'Über das Vorabbewertungsformular erheben wir direkt von Ihnen Name, Land, E-Mail-Adresse oder Telefonnummer, ausgewählten Behandlungsbereich und eine freiwillige Nachricht.',
            'Sie können dem Formular bis zu drei Dateien beifügen (PDF, JPG oder PNG; je höchstens 10 MB). Beigefügte Dokumente können Gesundheitsdaten enthalten, etwa Laborbefunde, Bildgebungsberichte oder einen Arztbrief. Ein Upload ist nicht erforderlich; fügen Sie nur die Unterlagen bei, die Sie für die Vorabbewertung als nötig ansehen, und Sie können Angaben wie Ausweisnummern darauf abdecken, wenn Sie diese nicht mitteilen möchten.',
            'Die Anfrage wird auf dem Server der Website verarbeitet und an das E-Mail-Postfach der Klinik gesendet; Ihre Anhänge gehen ausschließlich an diese Benachrichtigungs-E-Mail. Der automatischen Eingangsbestätigung an Sie wird keine Datei beigefügt.',
            'Zur Verhinderung von Missbrauch des Formulars wird außerdem Ihre IP-Adresse kurzzeitig verarbeitet.'
          ]
        },
        {
          heading: 'Zwecke der Verarbeitung',
          paragraphs: [
            'Beantwortung Ihrer Anfrage und Durchführung einer Vorabbewertung entsprechend Ihrem Anliegen. Behandlungs- und Reisekoordination erfolgt nur, wenn Sie auf dieser Grundlage fortfahren möchten.',
            'Sicherheit von Formular und Kontaktwegen sowie Abwehr automatisierter und missbräuchlicher Übermittlungen.'
          ]
        },
        {
          heading: 'Rechtsgrundlage',
          paragraphs: [
            'Kontaktdaten werden nach Art. 5/2-c KVKK für Schritte auf Ihre Anfrage hin zur Anbahnung eines möglichen Behandlungsverhältnisses verarbeitet; Gesundheitsdaten nach Art. 6/3-a KVKK auf Grundlage Ihrer gesonderten ausdrücklichen Einwilligung. Technische Sicherheitsprotokolle beruhen auf berechtigtem Interesse. Anwendbare gesetzliche Pflichten können die Verarbeitung weiterer Aufzeichnungen erfordern.'
          ]
        },
        {
          heading: 'Verarbeitung von Gesundheitsdaten',
          paragraphs: [
            'Ihre Behandlungsauswahl, Ihre Nachricht und die beigefügten Dokumente können Gesundheitsdaten enthalten. Gesundheitsdaten sind besondere Kategorien personenbezogener Daten im Sinne von Art. 6 KVKK und werden ausschließlich auf Grundlage Ihrer gesonderten ausdrücklichen Einwilligung zum Zweck der Vorabbewertung verarbeitet.',
            'Sie sind nicht verpflichtet, Gesundheitsdaten mitzuteilen. Das Formular kann auch ohne sie abgesendet werden; in diesem Fall können wir nur allgemeine Informationen geben und keine individuelle Einschätzung vornehmen.',
            'Eine Vorabbewertung über die Website ist keine Diagnose und ersetzt weder die ärztliche Untersuchung noch erforderliche Abklärungen.',
            'Gesundheitsdaten werden NICHT an Messwerkzeuge übermittelt. Beschwerden, Behandlungsauswahl und Dokumente werden niemals als Analyse-Ereignisparameter weitergegeben; an die Messung gelangen nur technische Angaben wie Seitenpfad und Quellkennzeichen.'
          ]
        },
        {
          heading: 'Kontakt über WhatsApp',
          paragraphs: [
            'Wenn Sie auf der Website einen WhatsApp-Link anklicken, findet das Gespräch über WhatsApp statt, betrieben von Meta Platforms Ireland Limited. Dieses Gespräch ist vom Vorabbewertungsformular getrennt; das Formular wird nicht über WhatsApp übermittelt.',
            'Die Inhalte von WhatsApp-Nachrichten sind Ende-zu-Ende verschlüsselt. Daten wie Ihre Rufnummer, Zeitpunkte des Nachrichtenaustauschs und Nutzungsinformationen verarbeitet WhatsApp jedoch nach eigenen Bedingungen; sie können auf Servern außerhalb der Türkei liegen. Für die eigene Verarbeitung durch WhatsApp ist Doç. Dr. Müslüm Ergün nicht Verantwortlicher.',
            'Sie sind nicht verpflichtet, über diesen Kanal Gesundheitsdaten mitzuteilen. Möchten Sie Unterlagen auf einem geschützteren Weg senden, nutzen Sie bitte das Vorabbewertungsformular oder info@meurology.com.',
            'WhatsApp-Korrespondenz bleibt auf dem Klinik-Telefon gespeichert, solange sie zur Bearbeitung Ihres Anliegens erforderlich ist.'
          ]
        },
        {
          heading: 'KI-gestützter Patientenassistent',
          paragraphs: [
            'Die Website kann einen KI-gestützten Patientenassistenten für häufige Fragen anbieten. Der Assistent dient ausschließlich der Information: Er stellt keine Diagnose, empfiehlt keine Medikamente oder Behandlungen, ersetzt keine ärztliche Beurteilung und darf im Notfall nicht verwendet werden.',
            'Ihre Nachrichten an den Assistenten werden zur Erzeugung einer Antwort auf Servern eines im Ausland ansässigen KI-Dienstleisters verarbeitet. Wir empfehlen deshalb, dort keine Angaben wie Ausweisnummern, vollständige Anschrift, Befunddokumente oder eine ausführliche Krankengeschichte einzugeben.',
            'Gespräche mit dem Assistenten können zur Sicherheit und Qualität des Dienstes für begrenzte Zeit protokolliert werden. Die Nutzung ist vollständig freiwillig; dieselben Fragen können Sie auch über das Formular, telefonisch oder per E-Mail stellen.',
            'Über Sie wird keine Entscheidung allein durch automatisierte Analyse getroffen; die Vorabbewertung nimmt in jedem Fall ein Arzt vor.'
          ]
        },
        {
          heading: 'Weitergabe und Übermittlung ins Ausland',
          paragraphs: [
            'Ihre Anfragen können von Dienstleistern verarbeitet werden, die Hosting, E-Mail-Versand, Bot-Schutz und, soweit genutzt, den KI-Assistenten bereitstellen. Ein Teil dieser Anbieter ist außerhalb der Türkei ansässig, insbesondere in der Europäischen Union und den Vereinigten Staaten; Ihre Daten können daher ins Ausland übermittelt werden.',
            'Übermittlungen ins Ausland erfolgen im Rahmen von Art. 9 KVKK, entweder unter Einhaltung der gesetzlich vorgesehenen Voraussetzungen oder auf Grundlage Ihrer gesonderten ausdrücklichen Einwilligung. Soweit die DSGVO gilt, werden geeignete Garantien wie Standardvertragsklauseln zugrunde gelegt.',
            'Wenn Sie Behandlungs- oder Reisekoordination wünschen, können die erforderlichen Angaben an die betreffende Gesundheitseinrichtung oder den Dienstleister weitergegeben werden — nur entsprechend Ihrem Wunsch und nur im erforderlichen Umfang.',
            'Rechtmäßige Auskunftsersuchen zuständiger Behörden bleiben vorbehalten.'
          ]
        },
        {
          heading: 'Speicherfristen',
          paragraphs: [
            'Anfragen zur Vorabbewertung und die beigefügten Dokumente werden so lange gespeichert, wie es zur Erledigung Ihres Anliegens erforderlich ist. Führt Ihre Anfrage zu keinem Behandlungsverhältnis, beträgt diese Frist höchstens 24 Monate; danach werden die Aufzeichnungen gelöscht oder anonymisiert.',
            'Kommt ein Behandlungsverhältnis zustande, werden Patientenunterlagen im Dokumentationssystem der jeweiligen Gesundheitseinrichtung für die gesetzlich vorgeschriebene Mindestdauer aufbewahrt.',
            'Zu Sicherheitszwecken verarbeitete technische Aufzeichnungen wie die IP-Adresse werden nur kurz gespeichert. Cookies und Messdaten werden bei erteilter Einwilligung für die in der Cookie-Richtlinie genannten Fristen gespeichert.',
            'Wird der KI-Assistent genutzt, werden Gesprächsprotokolle aus Sicherheitsgründen für begrenzte Zeit aufbewahrt und danach gelöscht.'
          ]
        },
        {
          heading: 'Ihre Rechte und der Weg zur Antragstellung',
          paragraphs: [
            'Nach Art. 11 KVKK haben Sie das Recht zu erfahren, ob Ihre personenbezogenen Daten verarbeitet werden; Auskunft darüber zu verlangen; den Zweck der Verarbeitung und die zweckgemäße Verwendung zu erfahren; die Empfänger im In- und Ausland zu kennen; Berichtigung unvollständiger oder unrichtiger Daten zu verlangen; unter den gesetzlichen Voraussetzungen Löschung oder Vernichtung zu verlangen; die Mitteilung von Berichtigung und Löschung an die Empfänger zu verlangen; einem Sie benachteiligenden Ergebnis ausschließlich automatisierter Analyse zu widersprechen; und bei rechtswidriger Verarbeitung Schadensersatz zu verlangen.',
            'Ihren Antrag können Sie an info@meurology.com oder schriftlich an die oben genannte Klinikanschrift richten. Der Antrag muss Ihr Anliegen klar benennen und Angaben zur Feststellung Ihrer Identität enthalten. Anträge werden spätestens innerhalb von dreißig Tagen beantwortet; verursacht die Bearbeitung gesonderte Kosten, kann die von der Behörde festgelegte Gebühr erhoben werden.',
            'Wird Ihr Antrag abgelehnt, finden Sie die Antwort unzureichend oder bleibt eine fristgerechte Antwort aus, können Sie sich bei der türkischen Datenschutzbehörde (KVKK-Behörde) beschweren.',
            'Ihre ausdrückliche Einwilligung können Sie jederzeit über dieselben Kontaktwege widerrufen; der Widerruf berührt die bis dahin rechtmäßige Verarbeitung nicht. Soweit die DSGVO gilt, können zusätzlich die Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch sowie das Beschwerderecht bei der zuständigen Aufsichtsbehörde bestehen.'
          ]
        }
      ]
    },
    ru: {
      intro:
        'Это уведомление касается сведений, которые вы передаёте через сайт: форма предварительной оценки, приложенные к ней документы, обращение через WhatsApp и, если он предлагается, помощник для пациентов на основе искусственного интеллекта. Применяется закон Турции № 6698 (KVKK); права по GDPR действуют дополнительно в той мере, в какой обработка подпадает под его действие.',
      sections: [
        {
          heading: 'Оператор данных',
          paragraphs: [
            'Оператор данных — Doç. Dr. Müslüm Ergün (ME Urology Clinic), Bahçelievler Mahallesi, E-5 Karayolu / Kültür Sok No:1, 34180 Bahçelievler/İstanbul. Контакты: info@meurology.com / 0532 063 09 69.'
          ]
        },
        {
          heading: 'Обрабатываемые персональные данные',
          paragraphs: [
            'Через форму предварительной оценки мы получаем непосредственно от вас имя, страну, адрес электронной почты или телефон, выбранное направление лечения и необязательное сообщение.',
            'К форме можно приложить до трёх файлов (PDF, JPG или PNG; не более 10 МБ каждый). Приложенные документы могут содержать сведения о здоровье — результаты анализов, заключения по снимкам или выписной эпикриз. Прикладывать файлы необязательно; добавляйте только те документы, которые считаете нужными для предварительной оценки, и вы можете закрыть на них такие сведения, как номер удостоверения личности, если не хотите их передавать.',
            'Заявка обрабатывается на сервере сайта и направляется на почту клиники; ваши вложения попадают только в это уведомительное письмо. К автоматическому подтверждению, которое приходит вам, файлы не прикладываются.',
            'Кроме того, для предотвращения злоупотреблений формой кратковременно обрабатывается ваш IP-адрес.'
          ]
        },
        {
          heading: 'Цели обработки',
          paragraphs: [
            'Ответ на ваше обращение и проведение предварительной оценки в соответствии с вашим запросом. Координация лечения и поездки осуществляется только если вы хотите продолжить на этой основе.',
            'Обеспечение безопасности формы и каналов связи, предотвращение автоматических и злонамеренных отправок.'
          ]
        },
        {
          heading: 'Правовое основание',
          paragraphs: [
            'Контактные данные обрабатываются на основании ст. 5/2-c KVKK — для шагов, предпринимаемых по вашему запросу в связи с возможными отношениями по оказанию медицинской помощи; сведения о здоровье — на основании ст. 6/3-a KVKK, по вашему отдельному явному согласию. Технические записи, ведущиеся в целях безопасности, опираются на законный интерес. Применимые правовые обязанности могут дополнительно требовать обработки соответствующих записей.'
          ]
        },
        {
          heading: 'Обработка сведений о здоровье',
          paragraphs: [
            'Выбранное направление лечения, ваше сообщение и приложенные документы могут содержать сведения о здоровье. Такие сведения относятся к особым категориям персональных данных по ст. 6 KVKK и обрабатываются для предварительной оценки только на основании вашего отдельного явного согласия.',
            'Вы не обязаны сообщать сведения о здоровье. Форму можно отправить и без них; в этом случае мы сможем дать только общую информацию и не сможем сделать индивидуальную оценку.',
            'Предварительная оценка через сайт не является диагнозом и не заменяет осмотра врачом и необходимых обследований.',
            'Сведения о здоровье НЕ передаются в средства измерения. Ваши жалобы, выбранное направление лечения и ваши документы никогда не отправляются как параметры аналитических событий; в аналитику попадают только технические данные, такие как путь страницы и метка источника.'
          ]
        },
        {
          heading: 'Общение через WhatsApp',
          paragraphs: [
            'Когда вы нажимаете ссылку WhatsApp на сайте, переписка идёт через WhatsApp, которым управляет Meta Platforms Ireland Limited. Эта переписка отделена от формы предварительной оценки; форма не отправляется через WhatsApp.',
            'Содержимое сообщений WhatsApp защищено сквозным шифрованием. Однако такие данные, как ваш номер телефона, время переписки и сведения об использовании, обрабатываются самим WhatsApp на его собственных условиях и могут храниться на серверах за пределами Турции. В отношении собственной обработки WhatsApp оператором данных Doç. Dr. Müslüm Ergün не является.',
            'Вы не обязаны передавать сведения о здоровье по этому каналу. Если вы предпочитаете более защищённый путь для документов, воспользуйтесь формой предварительной оценки или адресом info@meurology.com.',
            'Переписка в WhatsApp хранится на телефоне клиники столько, сколько необходимо для работы по вашему обращению.'
          ]
        },
        {
          heading: 'Помощник для пациентов на основе ИИ',
          paragraphs: [
            'На сайте может предлагаться помощник для пациентов на основе искусственного интеллекта по часто задаваемым темам. Помощник носит исключительно информационный характер: он не ставит диагноз, не рекомендует лекарства или лечение, не заменяет врачебную оценку и не предназначен для неотложных ситуаций.',
            'Сообщения, которые вы пишете помощнику, обрабатываются для формирования ответа на серверах поставщика услуг ИИ, расположенного за рубежом. Поэтому мы советуем не вводить в помощник такие данные, как номер удостоверения личности, полный адрес, документы обследований или подробный медицинский анамнез.',
            'Переписка с помощником может сохраняться ограниченное время в целях безопасности и качества сервиса. Использование помощника полностью добровольно; те же вопросы можно задать через форму, по телефону или по электронной почте.',
            'Решение в отношении вас не принимается исключительно автоматизированным анализом; предварительную оценку в любом случае делает врач.'
          ]
        },
        {
          heading: 'Передача данных, в том числе за рубеж',
          paragraphs: [
            'Ваши обращения могут обрабатываться поставщиками услуг хостинга сайта, доставки электронной почты, защиты от ботов и, при использовании, сервиса ИИ-помощника. Часть этих поставщиков расположена за пределами Турции, в частности в Европейском союзе и Соединённых Штатах; соответственно ваши данные могут передаваться за рубеж.',
            'Передача за рубеж осуществляется в рамках ст. 9 KVKK — либо при соблюдении условий, предусмотренных законодательством, либо на основании вашего отдельного явного согласия на такую передачу. Там, где применяется GDPR, используются надлежащие гарантии, например стандартные договорные положения.',
            'Если вы просите о координации лечения или поездки, необходимые сведения могут быть переданы соответствующему медицинскому учреждению или поставщику услуг — только в соответствии с вашим запросом и в необходимом объёме.',
            'Правомерные запросы уполномоченных государственных органов сохраняются.'
          ]
        },
        {
          heading: 'Сроки хранения',
          paragraphs: [
            'Обращения по предварительной оценке и приложенные документы хранятся столько, сколько необходимо для завершения работы по вашему запросу. Если обращение не приводит к отношениям по лечению, этот срок составляет не более 24 месяцев; по его истечении записи удаляются или обезличиваются.',
            'Если отношения по лечению установлены, медицинская документация хранится в системе учёта соответствующего медицинского учреждения в течение минимального срока, предусмотренного законодательством о здравоохранении.',
            'Технические записи, обрабатываемые в целях безопасности, например IP-адрес, хранятся недолго. Файлы cookie и записи измерений при наличии вашего согласия хранятся в течение сроков, указанных в политике использования файлов cookie.',
            'При использовании ИИ-помощника журналы переписки хранятся ограниченное время в целях безопасности сервиса и затем удаляются.'
          ]
        },
        {
          heading: 'Ваши права и порядок обращения',
          paragraphs: [
            'В соответствии со ст. 11 KVKK вы вправе узнать, обрабатываются ли ваши персональные данные; запросить сведения о такой обработке; узнать цель обработки и используются ли данные в соответствии с ней; знать третьих лиц в стране и за рубежом, которым данные переданы; требовать исправления неполных или неточных данных; требовать удаления или уничтожения при наличии оснований; требовать уведомления получателей об исправлении и удалении; возражать против неблагоприятного для вас результата, полученного исключительно автоматизированным анализом; и требовать возмещения вреда, причинённого незаконной обработкой.',
            'Обращение можно направить на info@meurology.com или письменно по указанному выше адресу клиники. В обращении должны быть ясно изложены ваше требование и сведения, подтверждающие вашу личность. Обращения рассматриваются не позднее тридцати дней; если обработка запроса влечёт отдельные расходы, может взиматься плата по тарифу, установленному уполномоченным органом.',
            'Если в удовлетворении обращения отказано, ответ представляется вам недостаточным или ответ не дан в срок, вы можете подать жалобу в турецкий орган по защите персональных данных.',
            'Вы можете в любой момент отозвать явное согласие по тем же каналам связи; отзыв не влияет на законность предыдущей обработки. Там, где применяется GDPR, могут действовать также права на доступ, исправление, удаление, ограничение обработки, переносимость данных и возражение, а также право подать жалобу в компетентный надзорный орган.'
          ]
        }
      ]
    },
    fr: {
      intro:
        'Cet avis concerne les informations que vous partagez via le site : le formulaire de pré-évaluation, les documents que vous y joignez, les échanges par WhatsApp et, lorsqu’il est proposé, l’assistant patient assisté par IA. La loi turque n° 6698 (KVKK) s’applique ; les droits issus du RGPD s’appliquent également lorsque le traitement entre dans son champ.',
      sections: [
        {
          heading: 'Responsable du traitement',
          paragraphs: [
            'Le responsable du traitement est le Doç. Dr. Müslüm Ergün (ME Urology Clinic), Bahçelievler Mahallesi, E-5 Karayolu / Kültür Sok No:1, 34180 Bahçelievler/İstanbul. Contact : info@meurology.com / 0532 063 09 69.'
          ]
        },
        {
          heading: 'Données personnelles traitées',
          paragraphs: [
            'Via le formulaire de pré-évaluation, nous recueillons directement auprès de vous vos nom et prénom, votre pays, votre adresse e-mail ou votre numéro de téléphone, le traitement sélectionné et un message facultatif.',
            'Vous pouvez joindre au formulaire jusqu’à trois fichiers (PDF, JPG ou PNG ; 10 Mo au maximum chacun). Les documents joints peuvent contenir des données de santé : résultats d’analyses, comptes rendus d’imagerie ou compte rendu d’hospitalisation. Joindre des fichiers n’est pas obligatoire ; n’ajoutez que les documents que vous jugez nécessaires à une pré-évaluation, et vous pouvez masquer les mentions telles qu’un numéro d’identité si vous préférez ne pas les communiquer.',
            'La demande est traitée sur le serveur du site puis transmise à la boîte e-mail de la clinique ; vos pièces jointes ne figurent que dans cet e-mail de notification. Aucun fichier n’est joint à l’accusé de réception automatique qui vous est adressé.',
            'Votre adresse IP est par ailleurs traitée brièvement afin de prévenir les usages abusifs du formulaire.'
          ]
        },
        {
          heading: 'Finalités du traitement',
          paragraphs: [
            'Répondre à votre demande et réaliser une pré-évaluation conforme à votre sollicitation. La coordination des soins et du voyage n’est engagée que si vous souhaitez poursuivre sur cette base.',
            'Assurer la sécurité du formulaire et des canaux de contact et empêcher les envois automatisés ou malveillants.'
          ]
        },
        {
          heading: 'Base légale',
          paragraphs: [
            'Les coordonnées sont traitées au titre de l’art. 5/2-c de la KVKK pour les démarches entreprises à votre demande en vue d’une éventuelle relation de soins ; les données de santé le sont au titre de l’art. 6/3-a de la KVKK, sur le fondement de votre consentement explicite distinct. Les journaux techniques conservés pour la sécurité reposent sur l’intérêt légitime. Des obligations légales applicables peuvent en outre imposer le traitement de certains enregistrements.'
          ]
        },
        {
          heading: 'Traitement des données de santé',
          paragraphs: [
            'Le traitement sélectionné, votre message et les documents joints peuvent contenir des données de santé. Ces données relèvent des catégories particulières au sens de l’art. 6 de la KVKK et ne sont traitées à des fins de pré-évaluation que sur le fondement de votre consentement explicite distinct.',
            'Vous n’êtes pas tenu de communiquer des données de santé. Le formulaire peut être envoyé sans elles ; dans ce cas, nous ne pouvons donner que des informations générales et non une appréciation individuelle.',
            'Une pré-évaluation réalisée via le site ne constitue pas un diagnostic et ne remplace ni l’examen par un médecin ni les explorations nécessaires.',
            'Les données de santé NE SONT PAS transmises aux outils de mesure. Vos symptômes, le traitement sélectionné et vos documents ne sont jamais envoyés comme paramètres d’événement analytique ; seules des informations techniques telles que le chemin de la page et une étiquette de source parviennent à la mesure.'
          ]
        },
        {
          heading: 'Échanges par WhatsApp',
          paragraphs: [
            'Lorsque vous cliquez sur un lien WhatsApp du site, la conversation se déroule sur WhatsApp, exploité par Meta Platforms Ireland Limited. Cette conversation est distincte du formulaire de pré-évaluation ; le formulaire n’est pas transmis via WhatsApp.',
            'Le contenu des messages WhatsApp est chiffré de bout en bout. En revanche, des données telles que votre numéro, l’horodatage des messages et des informations d’usage sont traitées par WhatsApp selon ses propres conditions et peuvent être hébergées sur des serveurs hors de Türkiye. Le Doç. Dr. Müslüm Ergün n’est pas responsable du traitement propre à WhatsApp.',
            'Vous n’êtes pas tenu de partager des données de santé par ce canal. Si vous préférez une voie plus protégée pour vos documents, utilisez le formulaire de pré-évaluation ou info@meurology.com.',
            'Les échanges WhatsApp sont conservés sur le téléphone de la clinique aussi longtemps qu’ils sont nécessaires au suivi de votre demande.'
          ]
        },
        {
          heading: 'Assistant patient assisté par IA',
          paragraphs: [
            'Le site peut proposer un assistant patient assisté par IA pour les questions fréquentes. Cet assistant est purement informatif : il ne pose pas de diagnostic, ne recommande ni médicament ni traitement, ne remplace pas l’appréciation d’un médecin et ne doit pas être utilisé en urgence.',
            'Les messages que vous lui adressez sont traités, pour produire une réponse, sur les serveurs d’un prestataire d’IA établi à l’étranger. Nous vous conseillons donc de ne pas y saisir de numéro d’identité, d’adresse complète, de compte rendu d’examen ou d’antécédents médicaux détaillés.',
            'Les conversations avec l’assistant peuvent être journalisées pendant une durée limitée pour la sécurité et la qualité du service. Son usage est entièrement facultatif ; vous pouvez poser les mêmes questions via le formulaire, par téléphone ou par e-mail.',
            'Aucune décision vous concernant n’est prise sur le seul fondement d’une analyse automatisée ; la pré-évaluation est dans tous les cas réalisée par un médecin.'
          ]
        },
        {
          heading: 'Communication et transferts hors de Türkiye',
          paragraphs: [
            'Vos demandes peuvent être traitées par des prestataires assurant l’hébergement du site, l’acheminement des e-mails, la protection contre les robots et, le cas échéant, le service d’assistant IA. Certains de ces prestataires sont établis hors de Türkiye, notamment dans l’Union européenne et aux États-Unis ; vos données peuvent donc être transférées à l’étranger.',
            'Les transferts hors de Türkiye s’effectuent dans le cadre de l’art. 9 de la KVKK, soit en respectant les conditions prévues par la réglementation, soit sur le fondement de votre consentement explicite distinct à ce transfert. Lorsque le RGPD s’applique, des garanties appropriées telles que les clauses contractuelles types sont mises en œuvre.',
            'Si vous demandez une coordination des soins ou du voyage, les informations nécessaires peuvent être partagées avec l’établissement de santé ou le prestataire concerné, uniquement conformément à votre demande et dans la limite du nécessaire.',
            'Les demandes licites des autorités publiques compétentes sont réservées.'
          ]
        },
        {
          heading: 'Durées de conservation',
          paragraphs: [
            'Les demandes de pré-évaluation et les documents joints sont conservés le temps nécessaire au traitement de votre demande. Si votre demande ne débouche pas sur une relation de soins, cette durée est de 24 mois au maximum ; à son terme, les enregistrements sont supprimés ou anonymisés.',
            'Si une relation de soins est établie, les dossiers patients sont conservés dans le système documentaire de l’établissement de santé concerné pendant la durée minimale imposée par la réglementation sanitaire.',
            'Les journaux techniques traités à des fins de sécurité, comme l’adresse IP, sont conservés brièvement. Les cookies et les données de mesure sont conservés, en cas de consentement, pendant les durées indiquées dans la politique de cookies.',
            'Si l’assistant IA est utilisé, les journaux de conversation sont conservés pendant une durée limitée pour la sécurité du service, puis supprimés.'
          ]
        },
        {
          heading: 'Vos droits et les modalités de demande',
          paragraphs: [
            'En vertu de l’art. 11 de la KVKK, vous avez le droit de savoir si vos données personnelles font l’objet d’un traitement ; d’en demander communication ; de connaître la finalité du traitement et si les données sont utilisées conformément à celle-ci ; de connaître les tiers destinataires en Türkiye ou à l’étranger ; de demander la rectification de données incomplètes ou inexactes ; d’en demander l’effacement ou la destruction lorsque les conditions sont réunies ; de demander que rectification et effacement soient notifiés aux destinataires ; de vous opposer à un résultat qui vous serait défavorable issu d’une analyse exclusivement automatisée ; et de demander réparation du préjudice causé par un traitement illicite.',
            'Vous pouvez adresser votre demande à info@meurology.com ou par écrit à l’adresse de la clinique indiquée ci-dessus. La demande doit exposer clairement son objet et comporter les éléments permettant d’établir votre identité. Les demandes reçoivent une réponse dans un délai maximal de trente jours ; si le traitement de la demande entraîne un coût distinct, la redevance fixée par l’autorité peut être appliquée.',
            'En cas de rejet de votre demande, de réponse que vous jugez insuffisante ou d’absence de réponse dans le délai, vous pouvez saisir l’autorité turque de protection des données personnelles.',
            'Vous pouvez retirer votre consentement explicite à tout moment par les mêmes canaux ; ce retrait n’affecte pas la licéité du traitement antérieur. Lorsque le RGPD s’applique, les droits d’accès, de rectification, d’effacement, de limitation du traitement, de portabilité et d’opposition, ainsi que le droit de réclamation auprès de l’autorité de contrôle compétente, peuvent également s’appliquer.'
          ]
        }
      ]
    }
  }
};

/**
 * AÇIK RIZA METNİ — Görev 13 taslağı. legalReview: 'pending'.
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
  legalReview: 'pending',
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
    de: {
      intro:
        'Diese Einwilligung betrifft die Gesundheitsdaten, die Sie über die Website mitteilen möchten, und die Art ihrer Verarbeitung; sie ist von der Datenschutzerklärung getrennt. Sie können Ihre Einwilligung für jede der folgenden Rubriken gesondert widerrufen.',
      sections: [
        {
          heading: 'Verarbeitung von Gesundheitsdaten',
          paragraphs: [
            'Ich willige ausdrücklich ein, dass Doç. Dr. Müslüm Ergün die Gesundheitsdaten in meiner Behandlungsauswahl, meiner freiwilligen Nachricht und den dem Formular beigefügten Dokumenten zum Zweck der Vorabbewertung verarbeitet.',
            'Mir ist bekannt, dass ich diese Daten nicht mitteilen muss und dass ich ohne sie nur allgemeine Informationen erhalten kann.'
          ]
        },
        {
          heading: 'Übermittlung ins Ausland',
          paragraphs: [
            'Ich willige ausdrücklich ein, dass meine personenbezogenen Daten und die mitgeteilten Gesundheitsdaten, soweit zur Erbringung der Leistung erforderlich, an im Ausland ansässige Anbieter für Hosting, E-Mail-Versand und Sicherheit übermittelt werden.'
          ]
        },
        {
          heading: 'Kontakt über WhatsApp',
          paragraphs: [
            'Falls ich den Kontakt über WhatsApp wähle, willige ich ausdrücklich ein, dass die über diesen Kanal mitgeteilten Angaben zur Vorabbewertung und Terminkoordination verarbeitet werden.',
            'Mir ist bekannt, dass dieser Kanal von Meta Platforms Ireland Limited betrieben wird und die betreffenden Daten im Ausland verarbeitet werden können.'
          ]
        },
        {
          heading: 'KI-gestützter Patientenassistent',
          paragraphs: [
            'Falls ich den auf der Website angebotenen KI-gestützten Patientenassistenten nutze, willige ich ausdrücklich ein, dass meine Nachrichten an ihn zur Erzeugung einer Antwort von einem im Ausland ansässigen KI-Dienstleister verarbeitet werden.',
            'Mir ist bekannt, dass der Assistent nur der Information dient, keine Diagnose stellt, keine Behandlung empfiehlt und keine ärztliche Beurteilung ersetzt.'
          ]
        },
        {
          heading: 'Widerruf der Einwilligung',
          paragraphs: [
            'Mir ist bekannt, dass ich meine Einwilligung jederzeit insgesamt oder für eine der oben genannten Rubriken durch eine Nachricht an info@meurology.com widerrufen kann. Der Widerruf berührt die bis dahin rechtmäßige Verarbeitung nicht.'
          ]
        }
      ]
    },
    ru: {
      intro:
        'Это согласие касается сведений о здоровье, которые вы решите передать через сайт, и способов их обработки; оно отдельно от уведомления о конфиденциальности. Согласие по каждому из приведённых ниже пунктов можно отозвать отдельно.',
      sections: [
        {
          heading: 'Обработка сведений о здоровье',
          paragraphs: [
            'Я явно соглашаюсь на обработку Doç. Dr. Müslüm Ergün сведений о здоровье, содержащихся в выбранном мною направлении лечения, в необязательном сообщении и в документах, приложенных к форме предварительной оценки, для целей предварительной оценки.',
            'Я понимаю, что не обязан сообщать эти сведения и что без них смогу получить только общую информацию.'
          ]
        },
        {
          heading: 'Передача за рубеж',
          paragraphs: [
            'Я явно соглашаюсь на передачу моих персональных данных и передаваемых мной сведений о здоровье — в объёме, необходимом для оказания услуги, — поставщикам услуг хостинга, доставки электронной почты и безопасности, расположенным за рубежом.'
          ]
        },
        {
          heading: 'Общение через WhatsApp',
          paragraphs: [
            'Если я выберу общение через WhatsApp, я явно соглашаюсь на обработку переданных по этому каналу сведений для целей предварительной оценки и координации приёма.',
            'Я понимаю, что этим каналом управляет Meta Platforms Ireland Limited и что соответствующие данные могут обрабатываться за рубежом.'
          ]
        },
        {
          heading: 'Помощник для пациентов на основе ИИ',
          paragraphs: [
            'Если я воспользуюсь предлагаемым на сайте помощником на основе искусственного интеллекта, я явно соглашаюсь на обработку написанных ему сообщений поставщиком услуг ИИ, расположенным за рубежом, для формирования ответа.',
            'Я понимаю, что помощник носит только информационный характер, не ставит диагноз, не рекомендует лечение и не заменяет врачебную оценку.'
          ]
        },
        {
          heading: 'Отзыв согласия',
          paragraphs: [
            'Я понимаю, что могу в любой момент отозвать согласие полностью или по любому из приведённых выше пунктов, написав на info@meurology.com. Отзыв не влияет на законность обработки до этой даты.'
          ]
        }
      ]
    },
    fr: {
      intro:
        'Ce consentement porte sur les données de santé que vous choisissez de partager via le site et sur la manière dont elles sont traitées ; il est distinct de l’avis de confidentialité. Vous pouvez retirer votre consentement séparément pour chacune des rubriques ci-dessous.',
      sections: [
        {
          heading: 'Traitement des données de santé',
          paragraphs: [
            'Je consens expressément à ce que le Doç. Dr. Müslüm Ergün traite, à des fins de pré-évaluation, les données de santé figurant dans le traitement que j’ai sélectionné, dans mon message facultatif et dans les documents que je joins au formulaire.',
            'Je comprends que je ne suis pas tenu de communiquer ces données et que, à défaut, je ne peux recevoir que des informations générales.'
          ]
        },
        {
          heading: 'Transfert hors de Türkiye',
          paragraphs: [
            'Je consens expressément à ce que mes données personnelles et les données de santé que je partage soient transférées, dans la mesure nécessaire à la fourniture du service, à des prestataires d’hébergement, d’acheminement d’e-mails et de sécurité établis à l’étranger.'
          ]
        },
        {
          heading: 'Échanges par WhatsApp',
          paragraphs: [
            'Si je choisis d’être contacté par WhatsApp, je consens expressément à ce que les informations partagées par ce canal soient traitées à des fins de pré-évaluation et de coordination des rendez-vous.',
            'Je comprends que ce canal est exploité par Meta Platforms Ireland Limited et que les données concernées peuvent être traitées à l’étranger.'
          ]
        },
        {
          heading: 'Assistant patient assisté par IA',
          paragraphs: [
            'Si j’utilise l’assistant patient assisté par IA proposé sur le site, je consens expressément à ce que les messages que je lui adresse soient traités par un prestataire d’IA établi à l’étranger afin de produire une réponse.',
            'Je comprends que cet assistant est purement informatif, qu’il ne pose pas de diagnostic, ne recommande pas de traitement et ne remplace pas l’appréciation d’un médecin.'
          ]
        },
        {
          heading: 'Retrait du consentement',
          paragraphs: [
            'Je comprends que je peux retirer mon consentement à tout moment, en totalité ou pour l’une des rubriques ci-dessus, en écrivant à info@meurology.com. Ce retrait n’affecte pas le traitement licite antérieur.'
          ]
        }
      ]
    }
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
    de: {
      intro:
        'Dieser Hinweis erläutert, welche Cookies und ähnlichen Technologien auf dieser Website eingesetzt werden, zu welchem Zweck und wie Sie sie verwalten können.',
      sections: [
        {
          heading: 'Was ist ein Cookie?',
          paragraphs: [
            'Ein Cookie ist eine kleine Textdatei, die beim Besuch einer Website in Ihrem Browser gespeichert wird. Auch der lokale Speicher Ihres Browsers und ähnliche Technologien fallen unter diesen Hinweis.'
          ]
        },
        {
          heading: 'Auf dieser Website eingesetzte Cookies',
          paragraphs: [
            'Unbedingt erforderliche Cookies: Sie sind für den Betrieb der Website nötig und werden ohne Einwilligung gesetzt. Dazu gehört das Cookie, das Ihre Sprachwahl speichert. Ihre Einstellung für helles oder dunkles Design wird im lokalen Speicher Ihres Browsers gehalten und nicht an den Server gesendet.',
            'Analyse-Cookies: Sie dienen dazu nachzuvollziehen, welche Seiten wie oft aufgerufen werden. Sie laufen ausschließlich, nachdem Sie eingewilligt haben. Lehnen Sie ab oder treffen Sie keine Wahl, wird keinerlei Analyseanfrage gesendet.',
            'Marketing-Cookies: derzeit nicht im Einsatz. Sollten sie eingeführt werden, wird dieser Hinweis aktualisiert und Ihre Einwilligung gesondert eingeholt.'
          ]
        },
        {
          heading: 'Inhalte Dritter',
          paragraphs: [
            'Auf der Kontaktseite ist eine Google-Karte eingebunden. Sie wird erst geladen, wenn Sie das Laden durch Anklicken veranlassen; danach kann Google bestimmte Daten einschließlich Ihrer IP-Adresse erhalten.',
            'Links zu sozialen Medien und Quellen sind reine Verweise; ohne Ihren Klick gelangen keine Daten an die jeweilige Plattform.'
          ]
        },
        {
          heading: 'So verwalten Sie Ihre Auswahl',
          paragraphs: [
            'Beim ersten Besuch werden Sie um eine Auswahl gebeten. Diese können Sie jederzeit über den Link zu den Cookie-Einstellungen am Seitenende ändern.',
            'Sie können Cookies auch in Ihren Browsereinstellungen löschen oder blockieren. Werden unbedingt erforderliche Cookies blockiert, funktionieren Teile der Website möglicherweise nicht richtig.'
          ]
        },
        {
          heading: 'Speicherdauer',
          paragraphs: [
            'Das Cookie für die Sprachwahl wird höchstens ein Jahr gespeichert. Ihre Cookie-Auswahl wird in Ihrem Browser abgelegt, damit Sie nicht erneut gefragt werden. Analyse-Cookies werden nur bei erteilter Einwilligung und für die vom Anbieter festgelegte Dauer gespeichert (in der Regel höchstens 24 Monate).'
          ]
        },
        {
          heading: 'Ihre Rechte und Kontakt',
          paragraphs: [
            'Ihre Rechte bezüglich personenbezogener Daten und den Weg zur Ausübung finden Sie in der KVKK / DSGVO-Datenschutzerklärung. Fragen: info@meurology.com'
          ]
        }
      ]
    },
    fr: {
      intro:
        'Cet avis explique quels cookies et technologies similaires sont utilisés sur ce site, à quelles fins et comment vous pouvez les gérer.',
      sections: [
        {
          heading: 'Qu’est-ce qu’un cookie ?',
          paragraphs: [
            'Un cookie est un petit fichier texte enregistré dans votre navigateur lorsque vous visitez un site. Le stockage local de votre navigateur et les technologies similaires relèvent également de cet avis.'
          ]
        },
        {
          heading: 'Cookies utilisés sur ce site',
          paragraphs: [
            'Cookies strictement nécessaires : indispensables au fonctionnement du site et déposés sans consentement. Le cookie qui mémorise votre choix de langue en fait partie. Votre préférence de thème clair ou sombre est conservée dans le stockage local de votre navigateur et n’est pas transmise au serveur.',
            'Cookies de mesure d’audience : ils servent à comprendre quelles pages sont consultées et à quelle fréquence. Ils ne se déclenchent qu’après votre consentement. Si vous refusez ou ne faites aucun choix, aucune requête de mesure n’est envoyée.',
            'Cookies publicitaires : aucun n’est utilisé actuellement. S’ils venaient à l’être, cet avis serait mis à jour et votre consentement recueilli séparément.'
          ]
        },
        {
          heading: 'Contenus tiers',
          paragraphs: [
            'Une carte Google est intégrée à la page de contact. Elle n’est pas chargée tant que vous ne cliquez pas pour la charger ; une fois chargée, Google peut recevoir certaines données, dont votre adresse IP.',
            'Les liens vers les réseaux sociaux et les sources sont de simples liens ; aucune donnée ne parvient à ces plateformes sans que vous cliquiez.'
          ]
        },
        {
          heading: 'Gérer votre choix',
          paragraphs: [
            'Il vous est demandé de choisir lors de votre première visite. Vous pouvez modifier ce choix à tout moment depuis le lien « préférences cookies » en bas de page.',
            'Vous pouvez également supprimer ou bloquer les cookies dans les réglages de votre navigateur. Si vous bloquez les cookies strictement nécessaires, certaines parties du site risquent de ne pas fonctionner correctement.'
          ]
        },
        {
          heading: 'Durées de conservation',
          paragraphs: [
            'Le cookie de préférence linguistique est conservé un an au maximum. Votre choix en matière de cookies est enregistré dans votre navigateur afin de ne pas vous le redemander. Les cookies de mesure d’audience ne sont conservés qu’en cas de consentement, pour la durée fixée par le fournisseur (généralement 24 mois au plus).'
          ]
        },
        {
          heading: 'Vos droits et contact',
          paragraphs: [
            'Pour vos droits relatifs aux données personnelles et la manière de les exercer, veuillez consulter l’avis de confidentialité KVKK / RGPD. Questions : info@meurology.com'
          ]
        }
      ]
    },
    ru: {
      intro:
        'В этом документе объясняется, какие файлы cookie и схожие технологии используются на сайте, с какой целью и как вы можете ими управлять.',
      sections: [
        {
          heading: 'Что такое cookie?',
          paragraphs: [
            'Cookie — это небольшой текстовый файл, который сохраняется в вашем браузере при посещении сайта. Локальное хранилище браузера и схожие технологии также подпадают под этот документ.'
          ]
        },
        {
          heading: 'Какие cookie используются на сайте',
          paragraphs: [
            'Строго необходимые cookie: нужны для работы сайта и устанавливаются без согласия. К ним относится файл, запоминающий выбранный язык. Выбор светлой или тёмной темы хранится в локальном хранилище браузера и на сервер не передаётся.',
            'Аналитические cookie: служат для понимания того, какие страницы и как часто просматривают. Они включаются только после вашего согласия. Если вы откажетесь или не сделаете выбор, ни один аналитический запрос отправлен не будет.',
            'Рекламные cookie: сейчас не используются. Если они появятся, этот документ будет обновлён, а ваше согласие запрошено отдельно.'
          ]
        },
        {
          heading: 'Содержимое третьих сторон',
          paragraphs: [
            'На странице контактов встроена карта Google. Она не загружается, пока вы сами не нажмёте на загрузку; после загрузки Google может получить некоторые данные, включая ваш IP-адрес.',
            'Ссылки на социальные сети и источники — это только ссылки; без вашего нажатия никакие данные на эти площадки не уходят.'
          ]
        },
        {
          heading: 'Как управлять своим выбором',
          paragraphs: [
            'При первом посещении вам будет предложено сделать выбор. Изменить его можно в любое время по ссылке настроек cookie внизу страницы.',
            'Удалить или заблокировать cookie можно и в настройках браузера. Если заблокировать строго необходимые cookie, отдельные разделы сайта могут работать неправильно.'
          ]
        },
        {
          heading: 'Сроки хранения',
          paragraphs: [
            'Файл с выбором языка хранится не более одного года. Ваш выбор в отношении cookie сохраняется в браузере, чтобы вопрос не повторялся. Аналитические cookie хранятся только при наличии согласия и в течение срока, установленного поставщиком (обычно не более 24 месяцев).'
          ]
        },
        {
          heading: 'Ваши права и связь с нами',
          paragraphs: [
            'О ваших правах в отношении персональных данных и порядке обращения см. Уведомление о конфиденциальности KVKK / GDPR. Вопросы: info@meurology.com'
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
    de: {
      intro:
        'Diese Bedingungen regeln die Nutzung dieser Website. Mit der Nutzung erkennen Sie das Folgende an. Wenn Sie nicht einverstanden sind, nutzen Sie die Website bitte nicht.',
      sections: [
        {
          heading: 'Zweck der Website',
          paragraphs: [
            'Die Website bietet allgemeine Informationen zu den urologisch-chirurgischen Arbeitsgebieten von Doz. Dr. Müslüm Ergün. Es werden keine Leistungen verkauft, und die Inhalte stellen weder eine Diagnose noch eine Behandlungsempfehlung dar.',
            'Das Lesen der Website, das Ausfüllen eines Formulars oder das Senden einer Nachricht begründet kein Arzt-Patienten-Verhältnis. Dieses entsteht erst mit Untersuchung und Annahme.'
          ]
        },
        {
          heading: 'Geistiges Eigentum',
          paragraphs: [
            'Texte, Bilder, Grafiken und Code dieser Website gehören dem Websitebetreiber. Kurze Zitate mit Quellenangabe sind zulässig; die Vervielfältigung, Veröffentlichung oder gewerbliche Nutzung der Inhalte ganz oder in wesentlichen Teilen ohne Erlaubnis ist nicht gestattet.'
          ]
        },
        {
          heading: 'Pflichten der Nutzerinnen und Nutzer',
          paragraphs: [
            'Nutzen Sie Formulare und Kontaktwege ausschließlich für Anfragen zu Ihrer eigenen Gesundheit. Es wird erwartet, dass Sie keine irreführenden Angaben machen, keine Daten anderer Personen ohne deren Einwilligung weitergeben und nicht versuchen, den Betrieb der Website zu stören.'
          ]
        },
        {
          heading: 'Hinweis zu den Kontaktwegen',
          paragraphs: [
            'Nachrichten, die Sie über WhatsApp senden, unterliegen den Bedingungen dieser Plattform und liegen außerhalb unseres Einflussbereichs. Bedenken Sie dies, bevor Sie sensible Unterlagen wie Laborwerte, Bildgebung oder Pathologiebefunde übermitteln; für eine förmliche Anfrage nutzen Sie bitte E-Mail oder das Formular der Website.'
          ]
        },
        {
          heading: 'Externe Links',
          paragraphs: [
            'Die Website enthält Links zu Leitlinien und Quellen. Für Inhalte und Datenschutzpraktiken der verlinkten Seiten sind wir nicht verantwortlich.'
          ]
        },
        {
          heading: 'Haftungsbeschränkung',
          paragraphs: [
            'Es wird Sorgfalt darauf verwendet, die Inhalte richtig und aktuell zu halten; eine ununterbrochene Verfügbarkeit, Fehlerfreiheit oder ein bestimmtes Ergebnis wird jedoch nicht zugesagt. Für Folgen von Entscheidungen, die Sie auf Grundlage der Informationen dieser Website treffen, haftet der Websitebetreiber nicht.',
            'Diese Beschränkung berührt weder zwingende gesetzliche Vorschriften noch die berufliche Verantwortung des Arztes.'
          ]
        },
        {
          heading: 'Änderungen',
          paragraphs: [
            'Diese Bedingungen können aktualisiert werden. Das Datum der geltenden Fassung steht am Seitenanfang.'
          ]
        },
        {
          heading: 'Anwendbares Recht',
          paragraphs: [
            'Auf diese Bedingungen findet türkisches Recht Anwendung. Für Streitigkeiten sind die Gerichte und Vollstreckungsbehörden in Istanbul zuständig. Ihre Rechte nach dem Verbraucherrecht bleiben unberührt.'
          ]
        }
      ]
    },
    fr: {
      intro:
        'Les présentes conditions régissent l’utilisation de ce site. En l’utilisant, vous acceptez ce qui suit. Si vous ne les acceptez pas, veuillez ne pas utiliser le site.',
      sections: [
        {
          heading: 'Objet du site',
          paragraphs: [
            'Le site fournit des informations générales sur les domaines de chirurgie urologique dans lesquels exerce le Dr Müslüm Ergün, maître de conférences. Aucun service n’y est vendu et le contenu ne constitue ni un diagnostic ni une recommandation de traitement.',
            'Lire le site, remplir un formulaire ou envoyer un message ne crée pas de relation médecin-patient. Celle-ci ne naît qu’après examen et acceptation.'
          ]
        },
        {
          heading: 'Propriété intellectuelle',
          paragraphs: [
            'Les textes, images, schémas et le code de ce site appartiennent à son propriétaire. De courtes citations avec mention de la source sont possibles ; la reproduction, la publication ou l’usage commercial de tout ou d’une partie substantielle du contenu sans autorisation ne sont pas permis.'
          ]
        },
        {
          heading: 'Obligations de l’utilisateur',
          paragraphs: [
            'N’utilisez les formulaires et les canaux de contact que pour une demande concernant votre propre santé. Il vous est demandé de ne pas fournir d’informations trompeuses, de ne pas communiquer les données d’un tiers sans son accord et de ne pas tenter de perturber le fonctionnement du site.'
          ]
        },
        {
          heading: 'Avertissement sur les canaux de contact',
          paragraphs: [
            'Les messages que vous envoyez via WhatsApp relèvent des conditions propres à cette plateforme et échappent à notre contrôle. Tenez-en compte avant d’envoyer des documents sensibles tels que résultats d’analyses, imagerie ou comptes rendus d’anatomopathologie ; pour une demande formelle, privilégiez l’e-mail ou le formulaire du site.'
          ]
        },
        {
          heading: 'Liens externes',
          paragraphs: [
            'Le site comporte des liens vers des recommandations et des sources. Nous ne sommes pas responsables du contenu ni des pratiques de confidentialité des sites liés.'
          ]
        },
        {
          heading: 'Limitation de responsabilité',
          paragraphs: [
            'Le plus grand soin est apporté à l’exactitude et à l’actualité du contenu ; aucune garantie n’est toutefois donnée quant à la continuité du service, à l’absence d’erreur ou à un résultat déterminé. Le propriétaire du site ne saurait être tenu responsable des conséquences des décisions que vous prenez sur la base des informations qui y figurent.',
            'Cette limitation n’écarte ni les dispositions impératives de la loi ni la responsabilité professionnelle du médecin.'
          ]
        },
        {
          heading: 'Modifications',
          paragraphs: [
            'Les présentes conditions peuvent être mises à jour. La date de la version en vigueur figure en haut de la page.'
          ]
        },
        {
          heading: 'Droit applicable',
          paragraphs: [
            'Le droit turc s’applique aux présentes conditions. Les tribunaux et services d’exécution d’Istanbul sont compétents en cas de litige. Vos droits issus du droit de la consommation demeurent réservés.'
          ]
        }
      ]
    },
    ru: {
      intro:
        'Настоящие условия регулируют использование этого сайта. Пользуясь им, вы принимаете изложенное ниже. Если вы не согласны, пожалуйста, не пользуйтесь сайтом.',
      sections: [
        {
          heading: 'Назначение сайта',
          paragraphs: [
            'Сайт содержит общие сведения о направлениях урологической хирургии, которыми занимается доц. д-р Мюслюм Эргюн. Услуги на сайте не продаются, а содержание не является диагнозом или рекомендацией по лечению.',
            'Чтение сайта, заполнение формы или отправка сообщения не создают отношений между врачом и пациентом. Такие отношения возникают только после осмотра и принятия пациента.'
          ]
        },
        {
          heading: 'Интеллектуальная собственность',
          paragraphs: [
            'Тексты, изображения, схемы и код сайта принадлежат его владельцу. Допускается краткое цитирование со ссылкой на источник; воспроизведение, публикация или коммерческое использование содержания целиком либо в существенной части без разрешения не допускаются.'
          ]
        },
        {
          heading: 'Обязанности пользователя',
          paragraphs: [
            'Используйте формы и каналы связи только для обращения по поводу собственного здоровья. Ожидается, что вы не будете сообщать недостоверные сведения, передавать данные других людей без их согласия и пытаться нарушить работу сайта.'
          ]
        },
        {
          heading: 'Предупреждение о каналах связи',
          paragraphs: [
            'Сообщения, отправленные через WhatsApp, подчиняются условиям самой этой платформы и находятся вне нашего контроля. Учитывайте это, прежде чем отправлять такие чувствительные документы, как результаты анализов, снимки или заключения патоморфолога; для официального обращения используйте электронную почту или форму на сайте.'
          ]
        },
        {
          heading: 'Внешние ссылки',
          paragraphs: [
            'На сайте есть ссылки на клинические рекомендации и источники. Мы не отвечаем за содержание и политику конфиденциальности сайтов, на которые ведут эти ссылки.'
          ]
        },
        {
          heading: 'Ограничение ответственности',
          paragraphs: [
            'Мы прилагаем усилия, чтобы содержание было точным и актуальным; однако бесперебойность работы, отсутствие ошибок или какой-либо определённый результат не гарантируются. Владелец сайта не может нести ответственность за последствия решений, принятых вами на основании размещённых здесь сведений.',
            'Это ограничение не отменяет императивных норм законодательства и профессиональной ответственности врача.'
          ]
        },
        {
          heading: 'Изменения',
          paragraphs: [
            'Настоящие условия могут обновляться. Дата действующей редакции указана в начале страницы.'
          ]
        },
        {
          heading: 'Применимое право',
          paragraphs: [
            'К настоящим условиям применяется право Турции. Споры рассматриваются судами и органами принудительного исполнения Стамбула. Ваши права, вытекающие из законодательства о защите прав потребителей, сохраняются.'
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
    de: {
      intro:
        'Diese Seite erläutert Art und Grenzen der medizinischen Inhalte dieser Website. Bitte berücksichtigen Sie dies, bevor Sie die Behandlungsseiten lesen.',
      sections: [
        {
          heading: 'Was hier steht, ist keine medizinische Beratung',
          paragraphs: [
            'Die Inhalte sind zur allgemeinen Information verfasst. Sie ersetzen weder Diagnose noch Behandlung oder Verordnung für Ihre persönliche Situation. Kein Text ersetzt Untersuchung, Bildgebung und Laborbefundung.'
          ]
        },
        {
          heading: 'Es entsteht kein Arzt-Patienten-Verhältnis',
          paragraphs: [
            'Das Lesen dieser Seiten, das Ausfüllen eines Formulars oder das Senden einer Nachricht begründet kein Arzt-Patienten-Verhältnis. Eine auf Sie bezogene Beurteilung ist erst nach einer Untersuchung möglich.'
          ]
        },
        {
          heading: 'Notfälle',
          paragraphs: [
            'Verlassen Sie sich bei plötzlichen starken Schmerzen, vollständigem Unvermögen Wasser zu lassen, Fieber mit Schüttelfrost, starker Blutung oder plötzlichen heftigen Hodenschmerzen nicht auf diese Website. Rufen Sie den Notruf oder suchen Sie die nächste Notaufnahme auf.'
          ]
        },
        {
          heading: 'Keine Erfolgsgarantie',
          paragraphs: [
            'Für keinen chirurgischen oder medizinischen Eingriff wird eine Erfolgsgarantie gegeben. Die auf diesen Seiten genannten Zeiträume, Heilungsverläufe und Erwartungen beschreiben den typischen Verlauf und sind von Mensch zu Mensch verschieden.',
            'Risiken und Komplikationen sind real; sie sind auf jeder Behandlungsseite gesondert und deutlich aufgeführt. Wir empfehlen, diesen Abschnitt nicht zu überspringen.'
          ]
        },
        {
          heading: 'Quelle und Aktualität der Inhalte',
          paragraphs: [
            'Die medizinischen Inhalte werden auf Grundlage der aktuellen Leitlinien der Europäischen Gesellschaft für Urologie (EAU) erstellt. Auf jeder Behandlungsseite ist das Datum der letzten medizinischen Durchsicht angegeben.',
            'Raten und Prozentangaben ohne belegbare Quelle wurden bewusst nicht geschrieben. Die Inhalte werden mit den Leitlinien fortgeschrieben; fragen Sie dennoch Ihre Ärztin oder Ihren Arzt nach dem aktuellsten Stand.'
          ]
        },
        {
          heading: 'Zu den Übersetzungen',
          paragraphs: [
            'Die Sprachen außer Türkisch sind aus dem Ausgangstext übersetzt und bisher nicht von einer medizinischen Fachübersetzerin oder einem Fachübersetzer mit entsprechender Muttersprache geprüft worden. Erscheint Ihnen eine Formulierung unklar, halten Sie sich an die türkische oder englische Fassung und fragen Sie uns.'
          ]
        },
        {
          heading: 'Angaben Dritter',
          paragraphs: [
            'Angaben zu Krankenhaus, Geräten und Akkreditierungen beruhen auf den Mitteilungen der betreffenden Einrichtungen. Zur Überprüfung können Sie deren offizielle Seiten heranziehen.'
          ]
        }
      ]
    },
    fr: {
      intro:
        'Cette page expose la nature et les limites du contenu médical de ce site. Merci d’en tenir compte avant de lire les pages de traitement.',
      sections: [
        {
          heading: 'Ce qui figure ici n’est pas un avis médical',
          paragraphs: [
            'Le contenu est rédigé à titre d’information générale. Il ne remplace ni un diagnostic, ni un traitement, ni une prescription adaptés à votre situation. Aucun texte ne se substitue à un examen clinique, à l’imagerie et au bilan biologique.'
          ]
        },
        {
          heading: 'Aucune relation médecin-patient n’est créée',
          paragraphs: [
            'Lire ces pages, remplir un formulaire ou envoyer un message n’engage pas de relation médecin-patient. Une évaluation qui vous est propre ne peut être faite qu’après un examen.'
          ]
        },
        {
          heading: 'Urgences',
          paragraphs: [
            'Ne vous fiez pas à ce site en cas de douleur brutale et intense, d’impossibilité totale d’uriner, de fièvre avec frissons, de saignement abondant ou de douleur testiculaire brutale et intense. Appelez le numéro d’urgence ou rendez-vous au service d’urgence le plus proche.'
          ]
        },
        {
          heading: 'Aucune garantie de résultat',
          paragraphs: [
            'Aucune garantie de réussite n’est donnée pour un geste chirurgical ou médical, quel qu’il soit. Les durées, périodes de convalescence et attentes indiquées décrivent l’évolution habituelle et varient d’une personne à l’autre.',
            'Les risques et complications sont réels ; ils sont exposés séparément et clairement sur chaque page de traitement. Nous vous invitons à lire cette partie plutôt qu’à la passer.'
          ]
        },
        {
          heading: 'Source et actualité du contenu',
          paragraphs: [
            'Le contenu médical est établi à partir des recommandations en vigueur de l’Association européenne d’urologie (EAU). Chaque page de traitement indique la date de sa dernière relecture médicale.',
            'Les taux et pourcentages non sourçables n’ont délibérément pas été écrits. Le contenu est mis à jour à mesure que les recommandations évoluent ; demandez néanmoins à votre médecin l’information la plus récente.'
          ]
        },
        {
          heading: 'À propos des traductions',
          paragraphs: [
            'Les langues autres que le turc sont traduites du texte source et n’ont pas encore été validées par un traducteur médical de langue maternelle. Si une formulation vous paraît ambiguë, référez-vous à la version turque ou anglaise et interrogez-nous.'
          ]
        },
        {
          heading: 'Informations de tiers',
          paragraphs: [
            'Les informations relatives à l’hôpital, aux équipements et aux accréditations reposent sur les déclarations de ces établissements. Vous pouvez consulter leurs pages officielles pour les vérifier.'
          ]
        }
      ]
    },
    ru: {
      intro:
        'На этой странице объясняются характер и границы медицинского содержания сайта. Пожалуйста, учтите это, прежде чем читать страницы о лечении.',
      sections: [
        {
          heading: 'То, что здесь написано, не является медицинской консультацией',
          paragraphs: [
            'Содержание подготовлено для общего информирования. Оно не заменяет диагноз, лечение или назначение, подходящие именно вам. Никакой текст не заменяет осмотр, визуализацию и лабораторную оценку.'
          ]
        },
        {
          heading: 'Отношения врача и пациента не возникают',
          paragraphs: [
            'Чтение этих страниц, заполнение формы или отправка сообщения не начинают отношений между врачом и пациентом. Оценка, относящаяся именно к вам, возможна только после осмотра.'
          ]
        },
        {
          heading: 'Неотложные состояния',
          paragraphs: [
            'Не полагайтесь на этот сайт при внезапной сильной боли, полной невозможности помочиться, лихорадке с ознобом, обильном кровотечении или внезапной сильной боли в яичке. Позвоните в службу неотложной помощи или обратитесь в ближайшее приёмное отделение.'
          ]
        },
        {
          heading: 'Гарантии результата не даётся',
          paragraphs: [
            'Ни для одного хирургического или медицинского вмешательства гарантия успеха не даётся. Указанные на страницах сроки, периоды восстановления и ожидания описывают типичное течение и различаются у разных людей.',
            'Риски и осложнения реальны; они изложены отдельно и прямо на каждой странице о лечении. Советуем прочитать этот раздел, а не пропускать его.'
          ]
        },
        {
          heading: 'Источник и актуальность содержания',
          paragraphs: [
            'Медицинское содержание готовится на основе действующих рекомендаций Европейской ассоциации урологии (EAU). На каждой странице о лечении указана дата последнего медицинского пересмотра.',
            'Доли и проценты, которые невозможно подтвердить источником, намеренно не приводятся. Содержание обновляется по мере изменения рекомендаций; и всё же за самой свежей информацией обращайтесь к своему врачу.'
          ]
        },
        {
          heading: 'О переводах',
          paragraphs: [
            'Языки, кроме турецкого, переведены с исходного текста и пока не проверены медицинским переводчиком — носителем соответствующего языка. Если какая-то формулировка кажется вам неясной, опирайтесь на турецкую или английскую версию и спросите нас.'
          ]
        },
        {
          heading: 'Сведения третьих сторон',
          paragraphs: [
            'Сведения о больнице, оборудовании и аккредитациях основаны на заявлениях самих этих учреждений. Для проверки вы можете обратиться к их официальным страницам.'
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
