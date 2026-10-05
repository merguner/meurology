# Eski WordPress sitesinin URL envanteri

6 Ekim 2026'da, alan adı Vercel'e taşınmadan ÖNCE WordPress REST API'sinden
çekildi (`/wp-json/wp/v2/pages|posts?lang=...`). Amaç: 301 yönlendirme
haritasını kurmak. DNS taşındıktan sonra eski site erişilemez olacağı için
bu liste tek kayıttır.

Toplam 104 benzersiz yol (en/tr/ar).

301 haritası kuruldu: **98 kural** `src/config/legacy-redirects.mjs` içinde,
`next.config.mjs` → `redirects()` ile bağlandı. Kalan 6 adres kural gerektirmiyor:
3 ana sayfa (otomatik) ve 3 adres eski/yeni sitede aynı.

| Dil | Tür | Eski yol | Başlık | Yeni hedef |
|---|---|---|---|---|
| ar | sayfa | `/ar/` | ME Urology | `/ar` |
| ar | sayfa | `/ar/about-us/` | About Us | `/ar/surgeon` |
| ar | sayfa | `/ar/andrology-aesthetic-surgery/` | Andrology Aesthetic Surgery | `/ar/treatments/andrology` |
| ar | sayfa | `/ar/combined-penis-lengthening-and-thickening/` | Combined Penis Lengthening and Thickening | `/ar/treatments/penile-enlargement` |
| ar | sayfa | `/ar/contact/` | Contact | aynı adres — kural yok |
| ar | sayfa | `/ar/curvature-correction-operations/` | Curvature Correction Operations | `/ar/treatments/peyronies-disease` |
| ar | sayfa | `/ar/endourological-surgeries/` | Endourological Surgeries | `/ar/treatments` |
| ar | sayfa | `/ar/erectile-dysfunction/` | Erectile Dysfunction | `/ar/treatments/erectile-dysfunction` |
| ar | sayfa | `/ar/free-consultation-reservation/` | Free Consultation Reservation | `/ar/online-consultation` |
| ar | sayfa | `/ar/functional-and-reconstructive-urology/` | Functional and Reconstructive Urology | `/ar/reconstructive-urology` |
| ar | sayfa | `/ar/graft-surgery/` | Graft Surgery | `/ar/treatments/peyronies-disease` |
| ar | sayfa | `/ar/hydrocele-and-spermatocele-surgerie/` | Hydrocele and Spermatocele Surgerie | `/ar/treatments/andrology` |
| ar | sayfa | `/ar/laser-systems-surgery/` | Laser Systems Surgery | `/ar/treatments/thulep` |
| ar | sayfa | `/ar/microscopic-epididymal-surgery/` | Microscopic Epididymal Surgery | `/ar/treatments/male-infertility-micro-tese` |
| ar | sayfa | `/ar/microscopic-surgical-systems/` | Microscopic Surgical Systems | `/ar/treatments/microsurgical-varicocelectomy` |
| ar | sayfa | `/ar/microscopic-varicocele-surgery/` | Microscopic Varicocele Surgery | `/ar/treatments/microsurgical-varicocelectomy` |
| ar | sayfa | `/ar/mikro-tese/` | Mikro TESE | `/ar/treatments/male-infertility-micro-tese` |
| ar | sayfa | `/ar/penile-prosthesis-happiness-rod-implantation/` | Penile Prosthesis (Happiness Rod) Implantation | `/ar/treatments/penile-implant` |
| ar | sayfa | `/ar/penile-prosthesis-surgery/` | Penile Prosthesis Surgery | `/ar/treatments/penile-implant` |
| ar | sayfa | `/ar/penis-lengthening-surgery/` | Penis Lengthening Surgery | `/ar/treatments/penile-enlargement` |
| ar | sayfa | `/ar/penis-thickening-surgeries/` | Penis Thickening Surgeries | `/ar/treatments/penile-enlargement` |
| ar | sayfa | `/ar/peyronies-disease-penis-curvature/` | Peyronie’s Disease (Penis Curvature) | `/ar/treatments/peyronies-disease` |
| ar | sayfa | `/ar/plication-surgery/` | Plication Surgery | `/ar/treatments/peyronies-disease` |
| ar | sayfa | `/ar/robotic-and-laparoscopic-surgery/` | Robotic and Laparoscopic Surgery | `/ar/treatments/robotic-prostatectomy` |
| ar | sayfa | `/ar/testicular-prosthesis-placement-surgery/` | Testicular Prosthesis Placement Surgery | `/ar/treatments/andrology` |
| ar | sayfa | `/ar/testis-and-scrotum-surgeries/` | Testis and Scrotum Surgeries | `/ar/treatments/andrology` |
| ar | sayfa | `/ar/torsion-surgery/` | Torsion Surgery | `/ar/treatments/andrology` |
| ar | sayfa | `/ar/undescended-testis/` | Undescended Testis | `/ar/treatments/paediatric-urology` |
| ar | sayfa | `/ar/upload-the-reports/` | Upload the reports | `/ar/contact` |
| ar | yazi | `/ar/urology-and-mens-health-common-issues-and-treatment-options/` | الصحة البولية عند الرجال: المشكلات الشائعة وخيارات العلاج | `/ar/blog` |
| ar | sayfa | `/ar/vascular-revascularization-surgeries/` | Vascular (Revascularization) Surgeries | `/ar/treatments/erectile-dysfunction` |
| ar | sayfa | `/ar/venous-leak-surgery/` | Venous Leak Surgery | `/ar/treatments/erectile-dysfunction` |
| ar | yazi | `/ar/what-is-varicocele-treatment-options-and-what-you-need-to-know/` | ما هو دوالي الخصية؟ خيارات العلاج وكل ما تحتاج إلى معرفته | `/ar/treatments/varicocele` |
| en | sayfa | `/` | ME Urology | `/` zaten dile yönleniyor |
| en | sayfa | `/about-us/` | About Us | `/en/surgeon` |
| en | sayfa | `/andrology-aesthetic-surgery/` | Andrology Aesthetic Surgery | `/en/treatments/andrology` |
| en | sayfa | `/blog/` | Blog | `/en/blog` |
| en | sayfa | `/combined-penis-lengthening-and-thickening/` | Combined Penis Lengthening and Thickening | `/en/treatments/penile-enlargement` |
| en | sayfa | `/contact/` | Contact | `/en/contact` |
| en | sayfa | `/curvature-correction-operations/` | Curvature Correction Operations | `/en/treatments/peyronies-disease` |
| en | sayfa | `/endourological-surgeries/` | Endourological Surgeries | `/en/treatments` |
| en | sayfa | `/erectile-dysfunction/` | Erectile Dysfunction | `/en/treatments/erectile-dysfunction` |
| en | sayfa | `/free-consultation-reservation/` | Free Consultation Reservation | `/en/online-consultation` |
| en | sayfa | `/functional-and-reconstructive-urology/` | Functional and Reconstructive Urology | `/en/reconstructive-urology` |
| en | sayfa | `/graft-surgery/` | Graft Surgery | `/en/treatments/peyronies-disease` |
| en | sayfa | `/hydrocele-and-spermatocele-surgeries/` | Hydrocele and Spermatocele Surgeries | `/en/treatments/andrology` |
| en | sayfa | `/laser-systems-surgery/` | Laser Systems Surgery | `/en/treatments/thulep` |
| en | sayfa | `/metromas-medical/` | Metromas Medical | `/en` |
| en | sayfa | `/microscopic-epididymal-surgery/` | Microscopic Epididymal Surgery | `/en/treatments/male-infertility-micro-tese` |
| en | sayfa | `/microscopic-surgical-systems/` | Microscopic Surgical Systems | `/en/treatments/microsurgical-varicocelectomy` |
| en | sayfa | `/microscopic-varicocele-surgery/` | Microscopic Varicocele Surgery | `/en/treatments/microsurgical-varicocelectomy` |
| en | sayfa | `/mikro-tese/` | Mikro TESE | `/en/treatments/male-infertility-micro-tese` |
| en | yazi | `/one-of-the-most-important-yet-most-neglected-areas-of-mens-health-prostate-health/` | One of the Most Important Yet Most Neglected Areas of Men’s Health: Prostate Health | `/en/treatments/bph-enlarged-prostate` |
| en | sayfa | `/penile-prosthesis-surgery/` | Penile Prosthesis Surgery | `/en/treatments/penile-prosthesis` |
| en | sayfa | `/penile-prosthesis/` | Penile Prosthesis | `/en/treatments/penile-prosthesis` |
| en | sayfa | `/penis-curvature/` | Penis Curvature | `/en/treatments/peyronies-disease` |
| en | sayfa | `/penis-lengthening-surgery/` | Penis Lengthening Surgery | `/en/treatments/penile-enlargement` |
| en | sayfa | `/penis-thickening-surgeries/` | Penis Thickening Surgeries | `/en/treatments/penile-enlargement` |
| en | sayfa | `/plication-surgery/` | Plication Surgery | `/en/treatments/peyronies-disease` |
| en | sayfa | `/robotic-and-laparoscopic-surgery/` | Robotic and Laparoscopic Surgery | `/en/treatments/robotic-prostatectomy` |
| en | sayfa | `/testicular-prosthesis-placement-surgery/` | Testicular Prosthesis Placement Surgery | `/en/treatments/andrology` |
| en | sayfa | `/testis-and-scrotum-surgeries/` | Testis and Scrotum Surgeries | `/en/treatments/andrology` |
| en | sayfa | `/torsion-surgery/` | Torsion Surgery | `/en/treatments/andrology` |
| en | sayfa | `/undescended-testis/` | Undescended Testis | `/en/treatments/paediatric-urology` |
| en | sayfa | `/upload-the-reports/` | Upload the reports | `/en/contact` |
| en | yazi | `/urology-and-mens-health-common-issues-and-treatment-options/` | Urology and Men's Health: Common Issues and Treatment Options | `/en/blog` |
| en | sayfa | `/vascular-revascularization-surgeries/` | Vascular (Revascularization) Surgeries | `/en/treatments/erectile-dysfunction` |
| en | sayfa | `/venous-leak-surgery/` | Venous Leak Surgery | `/en/treatments/erectile-dysfunction` |
| en | yazi | `/what-is-varicocele-treatment-options-and-what-you-need-to-know/` | What is Varicocele? Treatment Options and What You Need to Know | `/en/treatments/varicocele` |
| tr | sayfa | `/tr/` | ME Urology | `/tr` |
| tr | sayfa | `/tr/androloji-estetik-cerrahi/` | Androloji Estetik Cerrahi | `/tr/tedaviler/androloji` |
| tr | sayfa | `/tr/blog/` | Blog | aynı adres — kural yok |
| tr | sayfa | `/tr/damar-revaskularizasyon-ameliyatlari/` | Damar (Revaskülarizasyon) Ameliyatları | `/tr/tedaviler/erektil-disfonksiyon` |
| tr | sayfa | `/tr/egrilik-duzeltme-operasyonlari/` | Eğrilik Düzeltme Operasyonları | `/tr/tedaviler/peyronie-hastaligi` |
| tr | sayfa | `/tr/endourolojik-cerrahiler/` | Endoürolojik Cerrahiler | `/tr/tedaviler` |
| tr | sayfa | `/tr/erektil-disfonksiyon-sertlesme-sorunu/` | Erektil Disfonksiyon (Sertleşme Sorunu) | `/tr/tedaviler/erektil-disfonksiyon` |
| tr | yazi | `/tr/erkeklerde-prostat-sagligi-bph-prostatit-ve-prostat-kanseri-hakkinda-bilmeniz-gerekenler/` | Erkeklerde Prostat Sağlığı: BPH, Prostatit ve Prostat Kanseri Hakkında Bilmeniz Gerekenler | `/tr/tedaviler/bph-prostat-buyumesi` |
| tr | sayfa | `/tr/fonksiyonel-ve-rekonstruktif-uroloji/` | Fonksiyonel ve Rekonstrüktif Üroloji | `/tr/rekonstruktif-uroloji` |
| tr | sayfa | `/tr/greft-yama-ile-duzeltme/` | Greft (yama) ile düzeltme | `/tr/tedaviler/peyronie-hastaligi` |
| tr | sayfa | `/tr/hakkimizda/` | Hakkımızda | `/tr/cerrah` |
| tr | sayfa | `/tr/hidrosel-ve-spermatosel-cerrahisi/` | Hidrosel ve Spermatosel Cerrahisi | `/tr/tedaviler/androloji` |
| tr | sayfa | `/tr/iletisim/` | İletişim | aynı adres — kural yok |
| tr | sayfa | `/tr/inmemis-testis-orsiopeksi/` | İnmemiş Testis (Orşiopeksi) | `/tr/tedaviler/cocuk-urolojisi` |
| tr | sayfa | `/tr/kombine-penis-uzatma-ve-kalinlastirma/` | Kombine Penis Uzatma ve Kalınlaştırma | `/tr/tedaviler/penis-buyutme` |
| tr | sayfa | `/tr/lazer-sistemleri-cerrahisi/` | Lazer Sistemleri Cerrahisi | `/tr/tedaviler/thulep` |
| tr | sayfa | `/tr/mikro-tese/` | Mikro TESE | `/tr/tedaviler/erkek-infertilitesi-mikro-tese` |
| tr | sayfa | `/tr/mikroskopik-cerrahi-sistemleri/` | Mikroskopik Cerrahi Sistemler | `/tr/tedaviler/mikroskopik-varikoselektomi` |
| tr | sayfa | `/tr/mikroskopik-epididim-cerrahisi/` | Mikroskopik Epididim Cerrahisi | `/tr/tedaviler/erkek-infertilitesi-mikro-tese` |
| tr | sayfa | `/tr/mikroskopik-varikosel-ameliyati/` | Mikroskopik Varikosel Ameliyatı | `/tr/tedaviler/mikroskopik-varikoselektomi` |
| tr | sayfa | `/tr/penil-protez-ile-kombine-egrilik-duzeltme-ameliyati/` | Penil Protez ile Kombine Eğrilik Düzeltme Ameliyatı | `/tr/tedaviler/peyronie-hastaligi` |
| tr | sayfa | `/tr/penil-protez-mutluluk-cubugu-implantasyonu/` | Penil protez (mutluluk çubuğu) implantasyonu | `/tr/tedaviler/penil-protez` |
| tr | sayfa | `/tr/penis-kalinlastirma-ameliyatlari/` | Penis Kalınlaştırma Ameliyatları | `/tr/tedaviler/penis-buyutme` |
| tr | sayfa | `/tr/penis-uzatma-ameliyati-ligamentolizis/` | Penis Uzatma Ameliyatı (Ligamentolizis) | `/tr/tedaviler/penis-buyutme` |
| tr | sayfa | `/tr/peyronie-hastaligi-penis-egriligi/` | Peyronie Hastalığı (Penis Eğriliği) | `/tr/tedaviler/peyronie-hastaligi` |
| tr | sayfa | `/tr/plikasyon-cerrahisi/` | Plikasyon cerrahisi | `/tr/tedaviler/peyronie-hastaligi` |
| tr | sayfa | `/tr/raporlari-yukle/` | Raporları Yükle | `/tr/iletisim` |
| tr | sayfa | `/tr/robotik-ve-laparoskopik-cerrahi/` | Robotik ve Laparoskopik Cerrahi | `/tr/tedaviler/robotik-prostatektomi` |
| tr | sayfa | `/tr/testis-protezi-yerlestirme/` | Testis protezi yerleştirme | `/tr/tedaviler/androloji` |
| tr | sayfa | `/tr/testis-ve-skrotum-cerrahileri/` | Testis ve Skrotum Cerrahileri | `/tr/tedaviler/androloji` |
| tr | sayfa | `/tr/torsiyon-cerrahisi-testis-donmesi/` | Torsiyon Cerrahisi (Testis Dönmesi) | `/tr/tedaviler/androloji` |
| tr | sayfa | `/tr/ucretsiz-danismanlik-rezervasyonu-yapin/` | Ücretsiz Danışmanlık Rezervasyonu Yapın | `/tr/ozel-danismanlik` |
| tr | yazi | `/tr/uroloji-ve-erkek-sagligi-sik-gorulen-sorunlar-ve-tedavi-yontemleri/` | Üroloji ve Erkek Sağlığı: Sık Görülen Sorunlar ve Tedavi Yöntemleri | `/tr/blog` |
| tr | yazi | `/tr/varikosel-nedir-tedavi-yontemleri-ve-bilmeniz-gerekenler/` | Varikosel Nedir? Tedavi Yöntemleri ve Bilmeniz Gerekenler | `/tr/tedaviler/varikosel` |
| tr | sayfa | `/tr/venoz-kacak-cerrahisi/` | Venöz Kaçak Cerrahisi | `/tr/tedaviler/erektil-disfonksiyon` |
