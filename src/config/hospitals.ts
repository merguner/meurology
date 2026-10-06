/**
 * HASTANE AKREDİTASYON AYARLARI
 * ------------------------------------------------------------------
 * Akreditasyon ve belge bilgisi artık metnin içine gömülü değil; her
 * hastane için AYRI AYRI buradan açılıp kapanır. Bir rozet yalnızca
 * karşılığındaki alan `true` ise gösterilir.
 *
 * TEYİT EDİLDİ — Doç. Dr. Müslüm Ergün, 6 Ekim 2026.
 * Aşağıdaki akreditasyon değerleri hekim tarafından doğrulanmıştır;
 * mevcut durumun taşınmış hâli değil, teyit edilmiş beyandır.
 * Durum değişirse ilgili alanı `false` yapın — rozet kendiliğinden
 * kaybolur. Belge numarası `tourismLicenseNo` alanına yazılır.
 *
 * Belge numarası BOŞKEN sayfada numara satırı HİÇ render edilmez;
 * doğrulanmamış bir numara yayımlamaktansa alanı hiç basmamak doğrudur.
 */

export interface HospitalAccreditation {
  /** Joint Commission International. Teyit: Dr. Ergün, 6 Eki 2026. */
  jci: boolean;
  /** ISO 9001 kalite yönetim sistemi. Teyit: Dr. Ergün, 6 Eki 2026. */
  iso9001: boolean;
  /**
   * T.C. Sağlık Bakanlığı Uluslararası Sağlık Turizmi Yetki Belgesi
   * bu hastanede var mı. false iken belge satırı HİÇ gösterilmez.
   * Teyit: Dr. Ergün, 6 Eki 2026.
   */
  tourismLicense: boolean;
  /**
   * T.C. Sağlık Bakanlığı Uluslararası Sağlık Turizmi Yetki Belgesi no.
   * Belge VAR (teyit: Dr. Ergün, 6 Eki 2026); NUMARA bekleniyor.
   * Boşken satır gösterilmez.
   */
  tourismLicenseNo: string;
}

export interface HospitalEntry {
  id: string;
  /** Kurum adı özel isimdir — çevrilmez. */
  name: string;
  /**
   * Fotoğraf yolu. Dosya /public altında YOKSA görsel alanı hiç render
   * edilmez (bkz. lib/publicImage). Dosya eklenince kendiliğinden görünür.
   */
  photo: string;
  /** Harita bağlantısı — boşken bağlantı gösterilmez. */
  mapsLink: string;
  accreditation: HospitalAccreditation;
}

export const hospitals: HospitalEntry[] = [
  {
    id: 'medical-park-bahcelievler',
    name: 'Medical Park Bahçelievler Hastanesi',
    photo: '/photos/hastane-medical-park-bahcelievler.jpg',
    mapsLink: '',
    accreditation: {
      jci: true, // teyit: Dr. Ergün, 6 Eki 2026
      iso9001: true, // teyit: Dr. Ergün, 6 Eki 2026
      // config/contact.ts bugün belge sahibi olarak YALNIZCA bu hastaneyi
      // belirtiyor; mevcut beyan korundu.
      tourismLicense: true, // teyit: Dr. Ergün, 6 Eki 2026
      tourismLicenseNo: '' // TODO: belge numarası alınacak
    }
  },
  {
    id: 'liv-topkapi',
    name: 'LİV Hospital Topkapı',
    photo: '/photos/hastane-liv-topkapi.jpg',
    mapsLink: '',
    accreditation: {
      jci: true, // teyit: Dr. Ergün, 6 Eki 2026
      iso9001: true, // teyit: Dr. Ergün, 6 Eki 2026
      // BİLEREK false: sitenin bugünkü beyanında belge sahibi olarak
      // yalnızca Medical Park Bahçelievler geçiyor. Doğrulanmamış bir
      // belge iddiası eklemek yerine satır hiç gösterilmiyor.
      tourismLicense: false, // TODO: LİV Topkapı için teyit bekleniyor
      tourismLicenseNo: '' // TODO: belge numarası alınacak
    }
  }
];

/** Site genelindeki rozet şeridi için: en az bir hastanede var mı? */
export function anyHospitalHas(key: keyof Omit<HospitalAccreditation, 'tourismLicenseNo'>): boolean {
  return hospitals.some((h) => h.accreditation[key]);
}
