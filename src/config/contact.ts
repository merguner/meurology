/**
 * İLETİŞİM VE KİMLİK BİLGİLERİ — TEK KAYNAK.
 * Sitede görünen her e-posta, telefon, belge numarası buradan okunur.
 * (Gmail adresi kullanımdan kaldırıldı; kurumsal e-posta esastır.)
 */
export const contactConfig = {
  /** Kurumsal e-posta — sitede görünen ve form bildirimlerinin gittiği adres. */
  email: 'info@meurology.com',

  /** WhatsApp Business — wa.me için uluslararası format, yalnızca rakam. */
  whatsappNumber: '905320630969',
  phone: '0532 063 09 69',
  phoneIntl: '+905320630969',

  /** Uluslararası hasta koordinatörü. */
  coordinator: {
    name: 'İpek İlhan',
    /** Koordinatörün hizmet verebildiği diller (ISO 639-1). */
    languages: ['en'] as const
  },

  /** Cerrahın konuştuğu diller (JSON-LD knowsLanguage). */
  surgeonLanguages: ['tr', 'en'] as const,

  /** Ameliyat yapılan hastaneler. */
  hospitals: [
    {
      name: 'Medical Park Bahçelievler',
      city: 'İstanbul',
      /** TODO-DOGRULA: JCI akreditasyon doğrulama linki. */
      accreditationUrl: ''
    },
    {
      name: 'LİV Hospital Topkapı',
      city: 'İstanbul',
      accreditationUrl: ''
    }
  ],

  /**
   * T.C. SAĞLIK BAKANLIĞI ULUSLARARASI SAĞLIK TURİZMİ YETKİ BELGESİ.
   * Belgeyi Sağlık Bakanlığı verir; USHAŞ bir tanıtım/koordinasyon şirketidir
   * ve belge düzenlemez. Belge sahibi hastanedir, hekim değildir.
   * TODO-DOGRULA: belge numarası alınacak. Boşken numara satırı render EDİLMEZ.
   */
  healthTourism: {
    /** Belge sahibi kurum. */
    licenseHolder: 'Medical Park Bahçelievler',
    /** TODO-DOGRULA: Yetki belgesi numarası. */
    licenseNo: ''
  },

  /** Diploma / uzmanlık belge tescil numarası. */
  diplomaRegistryNo: '121270',

  /**
   * VERBİS (KVKK Veri Sorumluları Sicili) kayıt numarası.
   * Bildirilen durum: kayıt yok. TODO-DOGRULA: Kayıt yükümlülüğü kriterlerinin
   * (yıllık çalışan sayısı / mali bilanço / özel nitelikli veri işleme) karşılanıp
   * karşılanmadığı hukuk danışmanına sorulmalı. Boşken satır render EDİLMEZ.
   */
  verbisNo: ''
} as const;
