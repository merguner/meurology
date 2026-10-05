/**
 * HASTANE AKREDİTASYON AYARLARI
 * ------------------------------------------------------------------
 * Akreditasyon ve belge bilgisi artık metnin içine gömülü değil; her
 * hastane için AYRI AYRI buradan açılıp kapanır. Bir rozet yalnızca
 * karşılığındaki alan `true` ise gösterilir.
 *
 * !!! TODO(Dr. Ergün): TEYİT EDİLECEK !!!
 * Aşağıdaki değerler sitenin BUGÜNKÜ beyanıyla aynı bırakıldı (site
 * genelinde JCI ve ISO 9001 rozetleri zaten gösteriliyordu). Hangi
 * belgenin hangi hastaneye ait olduğu DOĞRULANMADI. Teyit edilene kadar
 * bu dosyadaki değerler bir iddia değil, yalnızca mevcut durumun
 * taşınmış hâlidir. Doğrulama sonrası:
 *   - geçerli olmayanı `false` yapın (rozet kendiliğinden kaybolur),
 *   - belge numarasını `tourismLicenseNo` alanına yazın.
 *
 * Belge numarası BOŞKEN sayfada numara satırı HİÇ render edilmez;
 * doğrulanmamış bir numara yayımlamaktansa alanı hiç basmamak doğrudur.
 */

export interface HospitalAccreditation {
  /** Joint Commission International. TODO(Dr. Ergün): teyit edilecek. */
  jci: boolean;
  /** ISO 9001 kalite yönetim sistemi. TODO(Dr. Ergün): teyit edilecek. */
  iso9001: boolean;
  /**
   * T.C. Sağlık Bakanlığı Uluslararası Sağlık Turizmi Yetki Belgesi
   * bu hastanede var mı. false iken belge satırı HİÇ gösterilmez.
   * TODO(Dr. Ergün): teyit edilecek.
   */
  tourismLicense: boolean;
  /**
   * T.C. Sağlık Bakanlığı Uluslararası Sağlık Turizmi Yetki Belgesi no.
   * TODO(Dr. Ergün): teyit edilecek. Boşken satır gösterilmez.
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
      jci: true, // TODO(Dr. Ergün): teyit edilecek
      iso9001: true, // TODO(Dr. Ergün): teyit edilecek
      // config/contact.ts bugün belge sahibi olarak YALNIZCA bu hastaneyi
      // belirtiyor; mevcut beyan korundu.
      tourismLicense: true, // TODO(Dr. Ergün): teyit edilecek
      tourismLicenseNo: '' // TODO(Dr. Ergün): teyit edilecek
    }
  },
  {
    id: 'liv-topkapi',
    name: 'LİV Hospital Topkapı',
    photo: '/photos/hastane-liv-topkapi.jpg',
    mapsLink: '',
    accreditation: {
      jci: true, // TODO(Dr. Ergün): teyit edilecek
      iso9001: true, // TODO(Dr. Ergün): teyit edilecek
      // BİLEREK false: sitenin bugünkü beyanında belge sahibi olarak
      // yalnızca Medical Park Bahçelievler geçiyor. Doğrulanmamış bir
      // belge iddiası eklemek yerine satır hiç gösterilmiyor.
      tourismLicense: false, // TODO(Dr. Ergün): teyit edilecek
      tourismLicenseNo: '' // TODO(Dr. Ergün): teyit edilecek
    }
  }
];

/** Site genelindeki rozet şeridi için: en az bir hastanede var mı? */
export function anyHospitalHas(key: keyof Omit<HospitalAccreditation, 'tourismLicenseNo'>): boolean {
  return hospitals.some((h) => h.accreditation[key]);
}
