/**
 * ESKİ WORDPRESS SİTESİNDEN 301 YÖNLENDİRMELERİ
 * ------------------------------------------------------------------
 * 6 Ekim 2026'da alan adı Vercel'e taşındı. Eski site (WordPress + WPML)
 * en/tr/ar dillerinde 104 adres yayınlıyordu; bu adresler Google'da ve dış
 * bağlantılarda hâlâ duruyor. Yönlendirilmezlerse 404'e düşer ve o
 * sayfaların birikmiş arama değeri kaybolur.
 *
 * Kaynak envanter: docs/eski-site-url-envanteri.md (DNS taşınmadan ÖNCE
 * WordPress REST API'sinden çekildi — eski site artık erişilemez).
 *
 * EŞLEME İLKESİ:
 *  - Konu birebir karşılanıyorsa ilgili tedavi sayfasına,
 *  - Eski sayfa bir kategori ise en yakın üst sayfaya (hub),
 *  - Yeni sitede karşılığı hiç yoksa yine konuya en yakın hub'a.
 *    Karşılıksızları toptan ana sayfaya atmak Google tarafından "yumuşak
 *    404" sayılır; bu yüzden her biri için en yakın konu sayfası seçildi.
 *
 * YÖNLENDİRİLMEYENLER: /tr/iletisim, /tr/blog ve /ar/contact adresleri
 * eski ve yeni sitede AYNI. Bunlara kural yazılırsa sonsuz döngü olur.
 *
 * Bu dosyayı next.config.mjs içindeki redirects() okur. next.config
 * redirects'i middleware'den ÖNCE çalışır, dolayısıyla bu kurallar
 * next-intl'in dil yönlendirmesine takılmaz.
 */

/** @type {Record<string, string>} eski yol -> yeni yol */
const MAP = {
  // ---------- İngilizce (eski sitede dil ön eki yoktu) ----------
  '/about-us': '/en/surgeon',
  '/andrology-aesthetic-surgery': '/en/treatments/andrology',
  '/blog': '/en/blog',
  '/combined-penis-lengthening-and-thickening': '/en/treatments/penile-enlargement',
  '/contact': '/en/contact',
  '/curvature-correction-operations': '/en/treatments/peyronies-disease',
  '/endourological-surgeries': '/en/treatments',
  '/erectile-dysfunction': '/en/treatments/erectile-dysfunction',
  '/free-consultation-reservation': '/en/online-consultation',
  '/functional-and-reconstructive-urology': '/en/reconstructive-urology',
  '/graft-surgery': '/en/treatments/peyronies-disease',
  '/hydrocele-and-spermatocele-surgeries': '/en/treatments/andrology',
  '/laser-systems-surgery': '/en/treatments/thulep',
  '/metromas-medical': '/en',
  '/microscopic-epididymal-surgery': '/en/treatments/male-infertility-micro-tese',
  '/microscopic-surgical-systems': '/en/treatments/microsurgical-varicocelectomy',
  '/microscopic-varicocele-surgery': '/en/treatments/microsurgical-varicocelectomy',
  '/mikro-tese': '/en/treatments/male-infertility-micro-tese',
  '/one-of-the-most-important-yet-most-neglected-areas-of-mens-health-prostate-health':
    '/en/treatments/bph-enlarged-prostate',
  '/penile-prosthesis': '/en/treatments/penile-prosthesis',
  '/penile-prosthesis-surgery': '/en/treatments/penile-prosthesis',
  '/penis-curvature': '/en/treatments/peyronies-disease',
  '/penis-lengthening-surgery': '/en/treatments/penile-enlargement',
  '/penis-thickening-surgeries': '/en/treatments/penile-enlargement',
  '/plication-surgery': '/en/treatments/peyronies-disease',
  '/robotic-and-laparoscopic-surgery': '/en/treatments/robotic-prostatectomy',
  '/testicular-prosthesis-placement-surgery': '/en/treatments/andrology',
  '/testis-and-scrotum-surgeries': '/en/treatments/andrology',
  '/torsion-surgery': '/en/treatments/andrology',
  '/undescended-testis': '/en/treatments/paediatric-urology',
  '/upload-the-reports': '/en/contact',
  '/urology-and-mens-health-common-issues-and-treatment-options': '/en/blog',
  '/vascular-revascularization-surgeries': '/en/treatments/erectile-dysfunction',
  '/venous-leak-surgery': '/en/treatments/erectile-dysfunction',
  '/what-is-varicocele-treatment-options-and-what-you-need-to-know': '/en/treatments/varicocele',

  // ---------- Türkçe ----------
  '/tr/androloji-estetik-cerrahi': '/tr/tedaviler/androloji',
  '/tr/damar-revaskularizasyon-ameliyatlari': '/tr/tedaviler/erektil-disfonksiyon',
  '/tr/egrilik-duzeltme-operasyonlari': '/tr/tedaviler/peyronie-hastaligi',
  '/tr/endourolojik-cerrahiler': '/tr/tedaviler',
  '/tr/erektil-disfonksiyon-sertlesme-sorunu': '/tr/tedaviler/erektil-disfonksiyon',
  '/tr/erkeklerde-prostat-sagligi-bph-prostatit-ve-prostat-kanseri-hakkinda-bilmeniz-gerekenler':
    '/tr/tedaviler/bph-prostat-buyumesi',
  '/tr/fonksiyonel-ve-rekonstruktif-uroloji': '/tr/rekonstruktif-uroloji',
  '/tr/greft-yama-ile-duzeltme': '/tr/tedaviler/peyronie-hastaligi',
  '/tr/hakkimizda': '/tr/cerrah',
  '/tr/hidrosel-ve-spermatosel-cerrahisi': '/tr/tedaviler/androloji',
  '/tr/inmemis-testis-orsiopeksi': '/tr/tedaviler/cocuk-urolojisi',
  '/tr/kombine-penis-uzatma-ve-kalinlastirma': '/tr/tedaviler/penis-buyutme',
  '/tr/lazer-sistemleri-cerrahisi': '/tr/tedaviler/thulep',
  '/tr/mikro-tese': '/tr/tedaviler/erkek-infertilitesi-mikro-tese',
  '/tr/mikroskopik-cerrahi-sistemleri': '/tr/tedaviler/mikroskopik-varikoselektomi',
  '/tr/mikroskopik-epididim-cerrahisi': '/tr/tedaviler/erkek-infertilitesi-mikro-tese',
  '/tr/mikroskopik-varikosel-ameliyati': '/tr/tedaviler/mikroskopik-varikoselektomi',
  '/tr/penil-protez-ile-kombine-egrilik-duzeltme-ameliyati': '/tr/tedaviler/peyronie-hastaligi',
  '/tr/penil-protez-mutluluk-cubugu-implantasyonu': '/tr/tedaviler/penil-protez',
  '/tr/penis-kalinlastirma-ameliyatlari': '/tr/tedaviler/penis-buyutme',
  '/tr/penis-uzatma-ameliyati-ligamentolizis': '/tr/tedaviler/penis-buyutme',
  '/tr/peyronie-hastaligi-penis-egriligi': '/tr/tedaviler/peyronie-hastaligi',
  '/tr/plikasyon-cerrahisi': '/tr/tedaviler/peyronie-hastaligi',
  '/tr/raporlari-yukle': '/tr/iletisim',
  '/tr/robotik-ve-laparoskopik-cerrahi': '/tr/tedaviler/robotik-prostatektomi',
  '/tr/testis-protezi-yerlestirme': '/tr/tedaviler/androloji',
  '/tr/testis-ve-skrotum-cerrahileri': '/tr/tedaviler/androloji',
  '/tr/torsiyon-cerrahisi-testis-donmesi': '/tr/tedaviler/androloji',
  '/tr/ucretsiz-danismanlik-rezervasyonu-yapin': '/tr/ozel-danismanlik',
  '/tr/uroloji-ve-erkek-sagligi-sik-gorulen-sorunlar-ve-tedavi-yontemleri': '/tr/blog',
  '/tr/varikosel-nedir-tedavi-yontemleri-ve-bilmeniz-gerekenler': '/tr/tedaviler/varikosel',
  '/tr/venoz-kacak-cerrahisi': '/tr/tedaviler/erektil-disfonksiyon',

  // ---------- Arapça ----------
  // Arapça slug'lar İngilizce yazılır ama bazıları /en'dekinden FARKLIDIR:
  // penil protez = penile-implant (en'de penile-prosthesis).
  '/ar/about-us': '/ar/surgeon',
  '/ar/andrology-aesthetic-surgery': '/ar/treatments/andrology',
  '/ar/combined-penis-lengthening-and-thickening': '/ar/treatments/penile-enlargement',
  '/ar/curvature-correction-operations': '/ar/treatments/peyronies-disease',
  '/ar/endourological-surgeries': '/ar/treatments',
  '/ar/erectile-dysfunction': '/ar/treatments/erectile-dysfunction',
  '/ar/free-consultation-reservation': '/ar/online-consultation',
  '/ar/functional-and-reconstructive-urology': '/ar/reconstructive-urology',
  '/ar/graft-surgery': '/ar/treatments/peyronies-disease',
  '/ar/hydrocele-and-spermatocele-surgerie': '/ar/treatments/andrology',
  '/ar/laser-systems-surgery': '/ar/treatments/thulep',
  '/ar/microscopic-epididymal-surgery': '/ar/treatments/male-infertility-micro-tese',
  '/ar/microscopic-surgical-systems': '/ar/treatments/microsurgical-varicocelectomy',
  '/ar/microscopic-varicocele-surgery': '/ar/treatments/microsurgical-varicocelectomy',
  '/ar/mikro-tese': '/ar/treatments/male-infertility-micro-tese',
  '/ar/penile-prosthesis-happiness-rod-implantation': '/ar/treatments/penile-implant',
  '/ar/penile-prosthesis-surgery': '/ar/treatments/penile-implant',
  '/ar/penis-lengthening-surgery': '/ar/treatments/penile-enlargement',
  '/ar/penis-thickening-surgeries': '/ar/treatments/penile-enlargement',
  '/ar/peyronies-disease-penis-curvature': '/ar/treatments/peyronies-disease',
  '/ar/plication-surgery': '/ar/treatments/peyronies-disease',
  '/ar/robotic-and-laparoscopic-surgery': '/ar/treatments/robotic-prostatectomy',
  '/ar/testicular-prosthesis-placement-surgery': '/ar/treatments/andrology',
  '/ar/testis-and-scrotum-surgeries': '/ar/treatments/andrology',
  '/ar/torsion-surgery': '/ar/treatments/andrology',
  '/ar/undescended-testis': '/ar/treatments/paediatric-urology',
  '/ar/upload-the-reports': '/ar/contact',
  '/ar/urology-and-mens-health-common-issues-and-treatment-options': '/ar/blog',
  '/ar/vascular-revascularization-surgeries': '/ar/treatments/erectile-dysfunction',
  '/ar/venous-leak-surgery': '/ar/treatments/erectile-dysfunction',
  '/ar/what-is-varicocele-treatment-options-and-what-you-need-to-know': '/ar/treatments/varicocele'
};

/**
 * next.config.mjs redirects() için kural dizisi.
 * Hepsi permanent: true — yani 308 (kalıcı). Google 308'i 301 gibi okur
 * ve bağlantı değerini hedefe taşır.
 *
 * Eski adreslerin tamamı sonunda eğik çizgi taşıyordu (/about-us/).
 * Next.js eğik çizgiyi kural eşlemesinden ÖNCE normalize ettiği için
 * kaynakları çizgisiz yazmak her iki biçimi de yakalar.
 */
export const legacyRedirects = Object.entries(MAP).map(([source, destination]) => ({
  source,
  destination,
  permanent: true
}));

export default legacyRedirects;
