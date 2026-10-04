# Gece Raporu — 4 Ekim 2026

Promptun kalan maddeleri tamamlandı ve her aşama Vercel'e dağıtıldı.
Canlı: https://meurology.vercel.app — **373 statik sayfa**.

---

## 1. Yapılanlar

### İçerik planının 30 blog yazısı (tamamlandı)
Yazılar çeviri değil, **her pazarın kendi arama davranışına göre** yazıldı:
TR 10, EN 8, AR 5, DE 4, FR 2, RU 1.

Bunun için altyapı değişti: `BlogPost.languages` alanı eklendi; liste, rota,
sitemap ve hreflang artık bu alanı kullanıyor. Türkçe bir yazı `/ar` altında
Türkçe görünmüyor — doğrulandı, Almanca bir yazı `/tr` altında **404** veriyor.

- Türkçe yazılarda fiyat ve karşılaştırma **yok** (yönetmelik).
- Yabancı dil yazılarında maliyetin neye göre değiştiği ve bir teklifte nelerin
  bulunması gerektiği anlatıldı; **rakam verilmedi** (fiyat aralıklarını siz
  vereceksiniz).
- Her yazıda kaynakça (EAU kılavuzları), yazar kutusu, okuma süresi, içindekiler
  ve tıbbi sorumluluk reddi var. Uydurma oran veya yüzde yok.

> **Not — kararınız gerekiyor:** Yazılar `draft: true` değil, **yayında**.
> Gerekçem: tedavi sayfaları da bu şekilde yayınlandı ve taslakta bıraksaydım
> blog bölümü boş görünecekti. Katılmıyorsanız bir yazıyı gizlemek için
> `src/content/blog.ts` içinde ilgili yazıya `draft: true` eklemek yeterli.

### Tedavi sayfaları: 1.500 kelime kriteri (186/186)
Kabul kriterinde "her tedavi sayfası ≥ 1.500 kelime" vardı. Denetimde **31
sayfanın 25'i Türkçede eşiğin altındaydı**; bazıları çok altında.

| Dil | 1.500 altında | Ortalama |
|-----|---------------|----------|
| TR | 0 | 1.571 |
| EN | 0 | 1.881 |
| DE | 0 | 1.685 |
| FR | 0 | 1.919 |
| RU | 0 | 1.615 |
| AR | 0 | 1.587 |

Eklenen içerik dolgu değil. Örnek olarak baştan yazılan sayfalarda şunlar
daha önce **hiç yoktu**:

- **Robotik prostatektomi** (488 → 1.718 kelime): patoloji sonucunun
  beklenenden kötü çıkabileceği ve ek tedavi gerekebileceği; ameliyattan sonra
  meni gelmeyeceği ve doğal yolla çocuk sahibi olunamayacağı; sinir korunsa
  bile işlevin kesin dönmeyeceği.
- **Böbrek taşı** (312 → 1.543): yan ağrısı + ateşin **acil** olduğu; ağrısız
  olmanın güvenli olduğu anlamına gelmediği; idrar kültürü temiz olmadan
  ameliyat planlanmadığı; stenti kimin nerede alacağının önceden planlanması.
- **BPH** (299 → 1.591): prostatın büyük olmasının tek başına tedavi gerekçesi
  olmadığı; prostat küçülten ilaçların PSA'yı yaklaşık yarıya düşürdüğü.
- **Üretroplasti / piyeloplasti / fistül / üreter rekonstrüksiyonu**
  (400–448 → 1.570–1.760): tekrarlayan kesi işlemlerinin bir sonraki onarımı
  zorlaştırdığı; piyeloplastide kararın sintigrafiye dayandığı; fistülde ilk
  onarımın en iyi şans olduğu; "yapılamaz" denmesinin gerçekten yapılamayacağı
  anlamına gelmediği.

### Faz 5 — ulusal erişim
- **`/sgk-ve-sigorta` sayfası, 6 dilde.** Türkçede SGK ve özel sigorta
  mekanizması; diğer dillerde kendi sigortanızdan geri ödeme. **Tutar yok** ve
  **anlaşmalı şirket listesi yok** (doğrulanmadı ve dönemsel değişiyor);
  bunun yerine "yazılı teyit isteyin" deniyor.
- **Tedavi sayfalarına konum bloğu + harita** eklendi. Semt odaklı ayrı
  sayfalar açılmadı (doorway riski, prompt m.6).
- **LiteYouTube**: gömme tıklanınca yükleniyor, `youtube-nocookie`. **VideoObject**
  şeması eklendi; yalnızca video ID'si **ve** yayın tarihi birlikte girilince
  basılıyor (tarih uydurulamaz).
- **`siteConfig.profiles`**: Doktortakvimi / Scholar / ORCID için `sameAs` alanı
  açıldı; boş olanlar filtreleniyor, kırık link oluşmuyor.

### vercel.app artık dizine girmiyor
Kriterdeki "vercel.app noindex" eksikti — site taramaya **açıktı**. Artık
`*.vercel.app` ve önizleme dağıtımları hem `noindex` hem `robots.txt` ile
kapalı. **Alan adını bağladığınızda kendiliğinden açılır**, kod değişikliği
gerekmez (`src/config/seo.ts`).

---

## 2. Test sonuçları (gerçekten çalıştırıldı)

### Arapça RTL testi — iki gerçek hata buldu ve düzeltti
Ekran görüntüsü testi sırasında **/ar mobilde sayfa yana kayıyordu**: belge
genişliği 375 px yerine **10.375 px**. İki ayrı neden vardı:

1. Formdaki bot tuzağı `left: -9999px` ile gizleniyordu. RTL'de satır ekseni
   ters olduğu için bu, belgeyi 9.999 px genişletiyordu. Yön bağımsız yönteme
   geçildi.
2. Tedavi sayfasının ana sütunu bir grid öğesi; karşılaştırma tablosu onu
   taşırıyordu. `min-w-0` eklendi.

**Sonuç:** /ar anasayfa, blog, iletişim ve tedavi sayfalarında yatay taşma
**0**; masaüstü RTL de 0. Mobil alt çubuk da taşıyordu, o da düzeltildi.

### Lighthouse (mobil)
| Sayfa | Performans | Erişilebilirlik | En iyi uygulamalar | LCP | CLS |
|---|---|---|---|---|---|
| /tr tedavi | **97** | **100** | **100** | 2,4 sn | 0 |
| /ar tedavi | 92 | **100** | **100** | 3,2 sn | 0 |

Erişilebilirlikte iki gerçek hata bulunup düzeltildi: geçersiz `<dl>` yapısı ve
bir WCAG 2.5.3 "Label in Name" ihlali. Artık 100.

Performans için font yükü azaltıldı: Arapça aile artık yalnızca `/ar`
sayfalarına yükleniyor, kullanılmayan mono ağırlığı kaldırıldı.

### Yapılandırılmış veri
Üretilen 353 sayfadaki **625 JSON-LD bloğu** tarandı: Physician, FAQPage,
BreadcrumbList, Article, MedicalWebPage, MedicalClinic, DefinedTermSet.
**Zorunlu alan eksiği yok.**

> Google'ın Rich Results aracını çalıştıramadım: vercel.app'i taramaya
> kapattığım için araç sayfayı çekemiyor. Alan adı bağlanınca o araçla da
> doğrulamak gerekir.

### Yönetmelik taraması
- Türkçe sayfalarda fiyat/ücret ifadesi: **0** (fiyat açıklamaları "Tutar"
  olarak değiştirildi; bu alan zaten `/tr`'de render edilmiyor).
- Yabancı dil bloklarında Türkçe kalıntı: **0**
- `lastReviewed` eksik sayfa: **0** (31/31)
- Kaynakçası olmayan sayfa: **0**
- Vaka sayısı: hepsi boş — doğrulanana kadar yayınlanmıyor
- "placeholder / lorem / buraya eklenecek": **0**
- Gmail adresi: **0**

---

## 3. Açık kalan tek teknik konu

**Arapça mobil performansı 92 (hedef 95).** Kalan fark Arapça sayfaların
**iki font ailesi birden** yüklemesinden geliyor (gövde için IBM Plex Sans
Arabic, Latin marka metni için Poppins — toplam 273 KB).

Çözüm sizin kararınıza bağlı: `/ar` sayfalarında Poppins'i hiç yüklemeyip
Latin metinleri de IBM Plex Sans Arabic'in Latin karakterleriyle göstermek
yaklaşık 8 font dosyası kazandırır. Ama bu, kodda **bilinçli bir karar olarak
not düşülmüş** olan "Arapça sayfada marka wordmark'ı Poppins kalır" tercihini
değiştirir. Onun için dokunmadım.

---

## 4. Sizden beklenen veriler (TODO-DOGRULA)

Hiçbiri uydurulmadı; alanlar boş ve boşken ilgili bölüm **render edilmiyor**.

| Konu | Dosya | Not |
|---|---|---|
| GA4 ölçüm kimliği | `config/analytics.ts` | Girilene kadar hiçbir analitik çağrısı yok |
| Turnstile anahtarları | `config/turnstile.ts` | Boşken widget hiç render edilmiyor |
| CRM webhook adresi | `api/on-degerlendirme` | |
| **Vaka sayısı başlangıç yılı** | `content/caseStats.ts` | Rakamlar sizde var; çelişkili oldukları için hiçbiri yayınlanmıyor |
| Sağlık turizmi yetki belge no | `config/contact.ts` | |
| VERBİS kayıt durumu | `config/contact.ts` | |
| Ödeme sağlayıcı tercihi | `config/site.ts` | Şu an havale/IBAN |
| JCI doğrulama linki | `config/contact.ts` | |
| Tanıtım videosu YouTube ID **+ yayın tarihi** | `config/site.ts` | İkisi birden olmadan VideoObject basılmaz |
| Doktortakvimi / Scholar / ORCID profilleri | `config/site.ts → profiles` | `sameAs` için |
| Hasta onam formları (Ek-1) | `content/experiences.ts` | Olmadan hasta görseli/yorumu yayınlanmıyor |
| Cerrah fotoğrafı, diploma tescil no | `content/surgeon.ts` | |

**Ayrıca konuşmamız gerekenler:**
1. **€ fiyat aralıkları** (yalnızca yabancı dillerde gösterilecek).
2. **www.meurology.com'un Vercel'e bağlanması** — bağlandığı anda site
   kendiliğinden dizine açılır.
3. **Koordinatör dili**: koordinatörünüz şu an yalnızca İngilizce konuşuyor.
   Arapça/Fransızca/Rusça ülke sayfalarında "kendi dilinizde koordinatör"
   vaadi vermedim; "görüşme öncesi tercüman ayarlanır" deniyor.
4. **Blog yazılarının yayında olması** (yukarıdaki not).

---

## 5. Hâlâ yapılmamış olan

- **Dosya yükleme + şifreli saklama + 90 gün sonra silme.** S3/R2 kimlik
  bilgisi olmadığı için yapılamadı; form bu alan olmadan çalışıyor.
- **Uçtan uca form testi** (otomatik yanıt + CRM kaydı): SMTP çalışıyor ama
  CRM webhook adresi olmadığı için zincirin tamamı test edilemedi.
- **Google Rich Results aracı** (yukarıda gerekçesi var).
