/**
 * YAPAY ZEKÂ HASTA ASİSTANI — AYAR DOSYASI
 * ------------------------------------------------------------------
 * Asistanın "bildiği" doğrulanması gereken bilgiler burada durur.
 * lib/asistan/bilgi.ts bu dosyayı okur; metnin içine gömülü sabit
 * YOKTUR.
 *
 * !!! FİYATLAR HAKKINDA !!!
 * Kaynak depodaki (merguner/andrology, ai-asistan dalı) bilgi dosyası
 * iki fiyat içeriyordu: "Muayene 3.000 TL" ve "ThuLEP yaklaşık
 * 120.000 TL". Bu tutarlar BİLEREK TAŞINMADI:
 *   1. Görev tanımı doğrulanması gereken fiyat bilgisi eklemeyi
 *      yasaklıyor; yerine TODO(Dr. Ergün) yer tutucusu isteniyor.
 *   2. Sağlık Bakanlığı tanıtım yönetmeliği yurt içine yönelik
 *      tanıtımda fiyat yazılmasını yasaklıyor (bkz. config/features.ts
 *      → prices, Türkçede kapalı).
 * Tutarlar BOŞ bırakıldığında asistan "muayene/değerlendirme sonrası
 * netleşir" der ve rakam uydurmaz (bkz. bilgi.ts → fiyatMetni).
 *
 * TODO(Dr. Ergün): Hangi işlemin fiyatının hangi dilde söylenebileceği
 * teyit edilince aşağıdaki alanlar doldurulabilir. TÜRKÇE konuşan
 * hastaya fiyat SÖYLENMEMELİDİR; bu kısıt sistem promptunda da yazılı.
 */
import { siteConfig } from './site';
import { hospitals } from './hospitals';

/**
 * Asistan yayında mı?
 *
 * ANTHROPIC_API_KEY tanımlı DEĞİLSE sohbet balonu HİÇ render edilmez ve
 * uç noktalar 404 döner. Sunucu tarafı bir değişkendir (NEXT_PUBLIC_
 * değildir): anahtar tarayıcıya hiçbir koşulda gitmez.
 *
 * UYARI: locale layout statik üretildiği için bu değer DERLEME ANINDA
 * okunur. Anahtarı sonradan eklerseniz yeniden derleme gerekir.
 */
export function assistantEnabled(): boolean {
  return Boolean(process.env.ANTHROPIC_API_KEY?.trim());
}

export interface AssistantPrice {
  /** İşlem adı — sistem promptunda bu adla geçer. */
  islem: string;
  /** Türk lirası tutarı. BOŞ bırakılırsa asistan tutar söylemez. */
  tl: string;
  /** Euro tutarı. BOŞ bırakılırsa asistan tutar söylemez. */
  eur: string;
}

/**
 * TODO(Dr. Ergün): tümü bilerek boş. Doldurulan satır asistan tarafından
 * "yaklaşık" ve "muayene sonrası kesinleşir" notuyla söylenir.
 */
export const assistantPrices: AssistantPrice[] = [
  { islem: 'Muayene', tl: '', eur: '' },
  { islem: 'Online ön değerlendirme', tl: '', eur: '' },
  { islem: 'ThuLEP (lazerle prostat ameliyatı)', tl: '', eur: '' },
  { islem: 'Rezūm', tl: '', eur: '' },
  { islem: 'TUMT', tl: '', eur: '' },
  { islem: 'Robotik radikal prostatektomi', tl: '', eur: '' },
  { islem: 'Penil protez', tl: '', eur: '' },
  { islem: 'Mikroskopik varikoselektomi', tl: '', eur: '' },
  { islem: 'Üretroplasti', tl: '', eur: '' },
  { islem: 'Fleksibl URS (RIRS)', tl: '', eur: '' },
  { islem: 'PCNL', tl: '', eur: '' },
  { islem: 'TOT', tl: '', eur: '' },
  { islem: 'Mesane botoksu', tl: '', eur: '' },
  { islem: 'Yapay idrar sfinkteri', tl: '', eur: '' }
];

/**
 * Online danışmanlık ücreti — ayrı tutulur çünkü site zaten bu tutarı
 * yabancı dillerde gösteriyor (Görev 10). Asistan da aynı kaynaktan
 * okur ki iki yerde farklı rakam çıkmasın. 0 ise söylenmez.
 */
export const assistantConsultationFeeEUR = siteConfig.consultation.consultationFeeEUR;

/**
 * Hastane adları site ayarından gelir; asistanın ağzında sitede
 * yazmayan bir kurum adı geçmesin.
 */
export const assistantHospitals = hospitals.map((h) => h.name);

/**
 * Asistanın paylaşabileceği bağlantılar — hepsi kendi sitemiz.
 * Yollar i18n/routing.ts'teki Türkçe karşılıklarıyla birebir aynıdır;
 * asistan hangi dilde konuşursa konuşsun çalışan tek bir adres verir.
 */
export const assistantLinks = {
  web: 'www.meurology.com',
  onlineConsultation: `${siteConfig.domain}/tr/ozel-danismanlik`,
  preAssessment: `${siteConfig.domain}/tr/iletisim`,
  privacy: `${siteConfig.domain}/tr/yasal/kvkk`
};
