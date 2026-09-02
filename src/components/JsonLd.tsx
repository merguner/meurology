/**
 * JSON-LD yapılandırılmış veri enjeksiyonu. schema.org tiplerini
 * (MedicalWebPage, Physician, FAQPage vb.) sayfalara eklemek için kullanılır.
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // İçerik geliştirici tarafından üretilir (kullanıcı girdisi değil).
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
