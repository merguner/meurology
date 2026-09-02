/**
 * HASTA DENEYİMLERİ — gerçek Google yorumları (herkese açık).
 * İsimler mahremiyet için soyad kısaltmalı ("İrfan K."). Metinler yorumdan
 * BİREBİR alınmıştır; yalnızca çok hafif noktalama/yazım düzeltmesi yapılmıştır.
 *
 * HUKUK NOTU: İrfan K. yorumunda geçen üçüncü taraf hastane adı (iftira/karalama
 * riskini önlemek için) "başka bir hastanede" olarak nötrlendi. Tam adıyla
 * yayınlamak isterseniz belirtin — ama hukuk danışmanınıza sormanızı öneririz.
 *
 * KVKK: Hasta yorumlarının yayını için açık rıza gerekir; bunlar zaten Google
 * Haritalar'da hastalar tarafından herkese açık paylaşılmıştır.
 */
export interface PatientStory {
  id: string;
  country: string; // ISO 3166-1 alpha-2 (filtre)
  /** İlgili tedavi (opsiyonel). Belirsizse boş bırakılır. */
  treatmentSlug?: string;
  name: string; // soyad kısaltmalı
  date: string; // YYYY-MM
  rating?: number; // Google yıldız (1–5)
  quote: string; // özgün (Türkçe) yorum metni
}

export const patientStories: PatientStory[] = [
  {
    id: 'behzat-b',
    country: 'TR',
    name: 'Behzat B.',
    date: '2025-08',
    rating: 5,
    quote:
      'Değerli ve kıymetli doktorum Müslüm hocam, Adıyaman’dan size çok ama çok selamlarımızı gönderiyorum. İlk başta oğlumun ameliyatı başarılı geçip sağlığına kavuştu, çok şükür — sizin sayenizde. Ve en son İstanbul’a gelip kendim için ameliyat gerçekleştirdiniz, şu an çok iyiyim. Allah yar ve yardımcınız olsun. Adıyaman halkı sizden razı.'
  },
  {
    id: 'irfan-k',
    country: 'TR',
    treatmentSlug: 'ureter-rekonstruksiyonu',
    name: 'İrfan K.',
    date: '2023-10',
    rating: 5,
    quote:
      'Öncelikle Allah hocamdan bin kere razı olsun, kendisine canı gönülden teşekkür ediyorum. 2016 yılında başka bir hastanede böbreğimdeki taşı almak için ameliyata girdim ve bu ameliyat sırasında maalesef doktor hatası ile sağ böbrek kanalım yırtıldı ve hikayem başladı. Onlarca kez operasyon geçirdim, en sonunda sağ böbreğimi kaybettiğimi aktardılar. Bu süreçte 5 profesör, 3 doçent ile tedaviye devam ettik; onların da tabii ki pozitif etkisi oldu ama neticede hiçbiri Müslüm hocanın yapabildiğini yapamadı. Tavsiye üzerine Müslüm hocam ile tanışma fırsatı yakaladım. İlk görüşmemizde MR görüntülerine bakar bakmaz böbreğin gayet iyi olduğunu ve yanlış bir tedavi süreci uygulandığını aktardı ve tedavi planını yeniledik. Yaklaşık 7 saat süren çok önemli bir ameliyat ile böbrek kanalımı tabir yerindeyse yeniden inşa etti, hem de büyük bir sabır ve titizlikle. Dün de stent çekimimi gerçekleştirdi ve 8 yıldır arzu ettiğim o güzel haberi paylaştı: artık stentsiz devam edebileceğimi ve böbreğimin %30 üzerinde çalıştığını aktardı. Üroloji denince kesinlikle tek geçeceğim isim Müslüm Ergün. İyi ki varsınız hocam.'
  },
  {
    id: 'ahmet-s',
    country: 'TR',
    name: 'Ahmet S.',
    date: '2023-07',
    rating: 5,
    quote:
      'Değerli hocam, dostluğunuz sayesinde en ufak bir ağrım dahi olmadan ameliyatımı yaptık, çok şükür. Engin tecrübeniz ve bilginiz sayesinde ameliyattan sonra 3 saatte ayağa kalktım. Ellerinize, emeğinize ve ekibinize çok teşekkür ederim.'
  },
  {
    id: 'baki-k',
    country: 'TR',
    treatmentSlug: 'androloji',
    name: 'Baki K.',
    date: '2023-07',
    rating: 5,
    quote:
      '16 yaşındaki oğlum varikosel ameliyatı oldu. Müslüm Bey gayet güzel cerrahi operasyon yaptı. İlgi alaka çok güzeldi. Teşekkür ediyorum.'
  },
  {
    id: 'ziver-d',
    country: 'TR',
    treatmentSlug: 'bobrek-tasi',
    name: 'Ziver D.',
    date: '2023-03',
    rating: 5,
    quote:
      'Yıllardır böbreklerimden rahatsızlık yaşıyordum, çok sayıda doktora gittim ama hiçbirinden net bir sonuç alamadım — ta ki Müslüm hocayı bulana kadar. Allah ondan razı olsun. İlgisine, bilgisine, tecrübesine tebrik ediyorum. İyi ki varsınız Müslüm hocam. Yanınızdaki Şefkan Bey’e de teşekkürü borç bilirim, her şey için sağ olun.'
  },
  {
    id: 'mehmet-d',
    country: 'TR',
    name: 'Mehmet D.',
    date: '2023-03',
    rating: 5,
    quote:
      'Allah bin kez razı olsun hocamdan. 3 doktorun yapamadığını yaptın hocam. Allah sizin gibi hocaları başımızdan eksik etmesin. Çok sağ olun hocam.'
  }
];

/** Deneyimlerde geçen benzersiz ülke kodları (filtre için). */
export const experienceCountries = Array.from(
  new Set(patientStories.map((s) => s.country))
);

/** Belirli bir tedaviyle eşleşen yorumlar (tedavi sayfasında göstermek için). */
export function storiesForTreatment(slug: string): PatientStory[] {
  return patientStories.filter((s) => s.treatmentSlug === slug);
}
