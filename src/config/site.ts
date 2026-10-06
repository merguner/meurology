/**
 * Merkezi site yapılandırması.
 * İletişim, e-posta ve belge numaraları için TEK KAYNAK: config/contact.ts.
 * Burada yalnızca marka, alan adı, adres, sosyal medya ve randevu ayarları tutulur.
 */
import { contactConfig } from './contact';

export const siteConfig = {
  name: 'ME Urology Clinic', // Marka adı — tüm dillerde sabit (çevrilmez)
  domain: 'https://www.meurology.com', // Canlı alan adı (kanonik: www). apex → www 301 yönlendirmesi hosting/DNS'te yapılmalı.
  // İletişim bilgileri contact.ts'ten gelir (tek kaynak).
  whatsappNumber: contactConfig.whatsappNumber,
  phone: contactConfig.phone,
  phoneIntl: contactConfig.phoneIntl,
  email: contactConfig.email,
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
  /**
   * ÖNE ÇIKAN TANITIM VİDEOSU (cerrah profili).
   *
   * TODO-DOGRULA: Veri gelmedi, uydurma YAPILMADI.
   *  - youtubeFeaturedId: videonun YouTube ID'si (ör. 'dQw4w9WgXcQ').
   *    Girilince cerrah sayfasında hafif gömme (LiteYouTube) görünür;
   *    boşken markalı kanal kartı gösterilir — eksik görünmez.
   *  - featuredVideoUploadDate: videonun YAYIN TARİHİ (ISO, ör. '2026-03-14').
   *    VideoObject yapılandırılmış verisi için Google'ın zorunlu tuttuğu
   *    alandır. UYDURULAMAZ: yanlış tarih yapılandırılmış veri hatasıdır.
   *
   * VideoObject YALNIZCA bu iki alanın İKİSİ de doluyken yayımlanır
   * (bkz. cerrah/page.tsx). Biri eksikken şema hiç basılmaz.
   */
  youtubeFeaturedId: '',
  featuredVideoUploadDate: '',
  social: {
    instagram: 'https://www.instagram.com/meurology.tr',
    youtube: 'https://www.youtube.com/@meurology',
    // LinkedIn kişisel profil (şirket sayfası değil).
    linkedin: 'https://www.linkedin.com/in/meurology',
    // Google işletme profili paylaşım linki (yorumlar/inceleme)
    google: 'https://share.google/MkOj9FDuX6fTRFj7J'
  },
  /**
   * HEKİM RANDEVU PLATFORMLARI ve AKADEMİK PROFİLLER — `sameAs` için (prompt m.6).
   *
   * Arama motorları aynı hekimin farklı sitelerdeki profillerini `sameAs`
   * üzerinden eşleştirir; bu, ulusal erişimde en çok işe yarayan tek
   * yapılandırılmış veri alanıdır. Reklam değildir, bilgilendirmedir.
   *
   * TODO-DOGRULA: Hiçbiri doğrulanmadı, URL UYDURULMADI. Boş olanlar
   * `sameAs` listesine girmez (filtrelenir), bu yüzden kırık link oluşmaz.
   * Profil adresleri geldikçe buraya yapıştırmanız yeterli.
   */
  profiles: {
    doktortakvimi: '',
    googleScholar: '',
    orcid: '',
    researchGate: ''
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
    // TODO-DOGRULA: Cal.com hesabı açılınca 'kullanıcı/etkinlik' formatında girin.
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
    /**
     * ONLINE DANIŞMANLIK ÜCRETİ — EURO.
     * Teyit edildi: Dr. Ergün, 6 Ekim 2026.
     * 0 BIRAKILIRSA sayfada tutar GÖSTERİLMEZ ve "görüşme randevusu
     * sırasında bildirilir" metni korunur (ConsultationCopy.priceOnRequest).
     */
    consultationFeeEUR: 200,
    /**
     * ONLINE DANIŞMANLIK ÜCRETİ — TÜRK LİRASI.
     * TODO(Dr. Ergün): teyit edilecek.
     *
     * UYARI: Bu alan doldurulsa bile TÜRKÇE sayfalarda HİÇBİR KOŞULDA
     * render edilmez — Sağlık Bakanlığı tanıtım yönetmeliği yurt içine
     * yönelik tanıtımda fiyat yazılmasını yasaklıyor (config/features.ts
     * → prices). Alan, fatura ve iç kullanım için tutulur.
     */
    consultationFeeTRY: 0,
    // Kartlı ödeme (iyzico/Stripe) API akışı tamamlanınca true yapın.
    // TODO-DOGRULA: ödeme altyapısı tercihi bildirilmedi.
    cardPaymentEnabled: false,
    /**
     * HARİCİ KARTLI ÖDEME BAĞLANTISI.
     * Ödeme sağlayıcısının hazır ödeme sayfası (iyzico link, Stripe
     * payment link vb.) NEXT_PUBLIC_CARD_PAYMENT_URL ile verilirse,
     * havale akışının yanına "Kartla öde" düğmesi eklenir.
     * Tanımlı değilse düğme HİÇ render edilmez.
     */
    cardPaymentUrl: process.env.NEXT_PUBLIC_CARD_PAYMENT_URL?.trim() ?? ''
  }
} as const;

/** Tek bir EUR tutarını locale'e göre biçimler: "200 €". */
export function formatEUR(amount: number, locale: string): string {
  try {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: 'EUR',
      maximumFractionDigits: 0
    }).format(amount);
  } catch {
    return `€${amount}`;
  }
}

/**
 * EUR aralığını locale'e göre biçimler: "5.000–20.000 €".
 * Yalnızca features(locale).prices === true olan dillerde çağrılır.
 */
export function formatPriceRangeEUR(
  range: { from: number; to: number },
  locale: string
): string {
  const nf = (() => {
    try {
      return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: 'EUR',
        maximumFractionDigits: 0
      });
    } catch {
      return null;
    }
  })();
  if (!nf) return `€${range.from}–${range.to}`;
  // Aralıkta para birimi simgesini bir kez göstermek için üst sınırı biçimlendirip
  // alt sınırı sade sayı olarak önüne ekliyoruz.
  const plain = (() => {
    try {
      return new Intl.NumberFormat(locale, { maximumFractionDigits: 0 });
    } catch {
      return new Intl.NumberFormat('en', { maximumFractionDigits: 0 });
    }
  })();
  return `${plain.format(range.from)}–${nf.format(range.to)}`;
}

/**
 * Belirli bir mesajla WhatsApp deep-link üretir.
 * encodeURIComponent, Türkçe/Arapça/Kiril karakterleri güvenle kodlar.
 */
export function whatsappLink(prefilledMessage?: string): string {
  const base = `https://wa.me/${siteConfig.whatsappNumber}`;
  if (!prefilledMessage) return base;
  return `${base}?text=${encodeURIComponent(prefilledMessage)}`;
}

/**
 * SAYFAYA ÖZEL WHATSAPP MESAJI + KAYNAK TAKİP KODU.
 *
 * Örnek çıktı:
 *   "Merhaba, Robotik Prostatektomi hakkında bilgi almak istiyorum. Ülkem:  [TR-ROBOTIK-PROSTATEKTOMI]"
 *
 * Kaynak kodu ([DİL-KONU]) hangi sayfadan gelindiğini WhatsApp kutusunda
 * görünür kılar; kampanya/sayfa performansı elle izlenebilir.
 *
 * @param message   next-intl ile {topic} doldurulmuş hazır mesaj.
 * @param locale    Kaynak kodundaki dil ön eki.
 * @param sourceKey Kaynak kodundaki konu anahtarı (ör. tedavi slug'ı).
 */
export function whatsappMessageFor(
  message: string,
  locale: string,
  sourceKey: string
): string {
  const code = `${locale}-${sourceKey}`
    .toUpperCase()
    .replace(/[^A-Z0-9-]/g, '-')
    .replace(/-+/g, '-');
  return `${message} [${code}]`;
}
