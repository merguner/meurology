/**
 * Merkezi site yapılandırması.
 * Marka, telefon, WhatsApp, sosyal medya, adres ve e-posta GERÇEK verilerle dolduruldu.
 * Hâlâ PLACEHOLDER olanlar (ayrı turda gelecek): domain, ushasLicenseNo.
 */
export const siteConfig = {
  name: 'ME Urology Clinic', // Marka adı — tüm dillerde sabit (çevrilmez)
  domain: 'https://www.meurology.com', // Canlı alan adı (kanonik: www). apex → www 301 yönlendirmesi hosting/DNS'te yapılmalı.
  // wa.me linkleri için uluslararası formatta, sadece rakam.
  whatsappNumber: '905320630969',
  phone: '0532 063 09 69', // yurt içi görünüm
  phoneIntl: '+905320630969', // tel: linki için
  // Mevcut siteden alınan gerçek e-posta (doğrulanmadı; yanlışsa güncellenecek).
  email: 'muslumergun@gmail.com',
  // PLACEHOLDER: USHAŞ (Uluslararası Sağlık Hizmetleri A.Ş.) yetki belge no
  ushasLicenseNo: 'USHAŞ-XXXX-XXXX',
  /**
   * Klinik/ameliyat merkezi adresi (GERÇEK). Adres metni özel isim olduğundan
   * TÜM DİLLERDE AYNI kalır; yalnızca "Klinik / Ameliyat Merkezi" gibi etiketler
   * çevrilir (messages/*.json). JSON-LD PostalAddress için parçalara ayrıldı.
   */
  address: {
    // Ameliyat merkezi adı (özel isim, çevrilmez)
    center: 'Medical Park Bahçelievler',
    // Tek satır görüntüleme metni (tüm dillerde aynı)
    full: 'Bahçelievler Mahallesi, E-5 Karayolu / Kültür Sok No:1, 34180 Bahçelievler/İstanbul',
    // JSON-LD PostalAddress parçaları
    streetAddress: 'Bahçelievler Mahallesi, E-5 Karayolu / Kültür Sok No:1',
    addressLocality: 'Bahçelievler/İstanbul',
    postalCode: '34180',
    addressCountry: 'TR',
    // Tıklanabilir kısa Google Maps linki
    mapsLink: 'https://maps.app.goo.gl/bEPyBVaNXj2JARUW7',
    // Anahtarsız iframe gömme için arama sorgusu (embed URL sayfada üretilir)
    mapsQuery: 'Medical Park Bahçelievler, Bahçelievler Mahallesi, E-5 Karayolu Kültür Sok No:1, 34180 Bahçelievler İstanbul'
  },
  // TODO: Öne çıkan tanıtım videosunun YouTube ID'sini girin (ör. 'dQw4w9WgXcQ').
  // Girilince cerrah profilinde video otomatik gömülür; boşken markalı kanal kartı gösterilir.
  youtubeFeaturedId: '',
  social: {
    instagram: 'https://www.instagram.com/meurology.tr',
    youtube: 'https://www.youtube.com/@meurology',
    // LinkedIn kişisel profil (şirket sayfası değil).
    linkedin: 'https://www.linkedin.com/in/meurology',
    // Google işletme profili paylaşım linki (yorumlar/inceleme)
    google: 'https://share.google/MkOj9FDuX6fTRFj7J'
  },
  /**
   * ÖZEL ONLINE DANIŞMANLIK (ücretli, randevulu, birebir WhatsApp görüntülü görüşme).
   * Ödeme sağlayıcı YOK — havale/IBAN modeli. Dekont WhatsApp'tan iletilir.
   * Görüşme WhatsApp görüntülü arama ile yapılır (ayrı video platformu yok).
   */
  consultation: {
    // Görüşme süresi (dakika) — sabit
    durationMinutes: 20,
    // Cal.com entegrasyonu (opsiyonel). Boşsa site içi hafif planlayıcı kullanılır.
    // PLACEHOLDER: Cal.com hesabı açılınca 'kullanıcı/etkinlik' formatında girin.
    calcomLink: '',
    // Klinik yerel saati (slotlar bu saate göre; Türkiye kalıcı UTC+3, DST yok).
    clinicTimeZone: 'Europe/Istanbul',
    // Müsaitlik günleri (0=Paz ... 6=Cmt). Yalnızca hafta içi (Pzt–Cuma).
    availableWeekdays: [1, 2, 3, 4, 5],
    // Randevu slotları — TR saati, 16:00–20:00 arası 20 dakikalık (son slot 19:40).
    slots: [
      '16:00', '16:20', '16:40', '17:00', '17:20', '17:40',
      '18:00', '18:20', '18:40', '19:00', '19:20', '19:40'
    ],
    // Havale/IBAN bilgileri (gerçek).
    bank: {
      accountHolder: 'Müslüm Ergün',
      bankName: 'Türkiye Finans',
      iban: 'TR45 0020 6001 2700 9285 8300 02'
    },
    // Ücret (gerçek). "KDV dahil" ifadesi dile göre consultation.ts'te (vatIncluded).
    price: {
      amount: '8.000 TL',
      amountTRY: 8000 // yaklaşık döviz karşılığı için sayısal değer
    },
    // Kartlı ödeme (iyzico/Stripe) entegrasyonu tamamlanınca true yapın.
    // false iken "Kartla öde" butonu görünür ama "yakında" mesajı gösterir.
    cardPaymentEnabled: false
  },
  /**
   * Yaklaşık döviz karşılıkları için MANUEL kur (1 birim = kaç TL).
   * Canlı API yok; kur değiştikçe elle güncelleyin.
   */
  exchangeRates: {
    tryPerUsd: 34,
    tryPerEur: 37
  }
} as const;

/** TL tutarını yaklaşık USD/EUR karşılığıyla "≈ $X / €Y" olarak biçimler. */
export function approxForeign(amountTRY: number): string {
  const { tryPerUsd, tryPerEur } = siteConfig.exchangeRates;
  const round10 = (n: number) => Math.round(n / 10) * 10;
  const usd = round10(amountTRY / tryPerUsd);
  const eur = round10(amountTRY / tryPerEur);
  return `≈ $${usd} / €${eur}`;
}

/**
 * TL aralığını locale'e göre "X–Y TL" + yaklaşık "$a–b / €c–d" olarak biçimler.
 * Döner: { try: "45.000–70.000 TL", approx: "≈ $1.320–2.060 / €1.220–1.890" }
 */
export function formatPriceRangeTRY(
  range: { from: number; to: number },
  locale: string
): { try: string; approx: string } {
  const { tryPerUsd, tryPerEur } = siteConfig.exchangeRates;
  const nf = (() => {
    try {
      return new Intl.NumberFormat(locale);
    } catch {
      return new Intl.NumberFormat('en');
    }
  })();
  const round100 = (n: number) => Math.round(n / 100) * 100;
  const usdFrom = nf.format(round100(range.from / tryPerUsd));
  const usdTo = nf.format(round100(range.to / tryPerUsd));
  const eurFrom = nf.format(round100(range.from / tryPerEur));
  const eurTo = nf.format(round100(range.to / tryPerEur));
  return {
    try: `${nf.format(range.from)}–${nf.format(range.to)} TL`,
    approx: `≈ $${usdFrom}–${usdTo} / €${eurFrom}–${eurTo}`
  };
}

/** Belirli bir mesajla WhatsApp deep-link üretir. */
export function whatsappLink(prefilledMessage?: string): string {
  const base = `https://wa.me/${siteConfig.whatsappNumber}`;
  if (!prefilledMessage) return base;
  return `${base}?text=${encodeURIComponent(prefilledMessage)}`;
}
