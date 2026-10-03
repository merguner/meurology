# Yasal İnceleme Notu — ME Urology Clinic web sitesi

**Durum:** Faz 1 (acil düzeltmeler) uygulandı.
**Son güncelleme:** 3 Ekim 2026
**⚠️ Bu belge hukuki görüş değildir.** Aşağıdaki kararlar mevzuat metnine göre
alınmış teknik uygulamalardır; nihai onay bir sağlık hukuku avukatına aittir.

---

## 1. Dayanak mevzuat

| Mevzuat | İlgi |
|---|---|
| **Sağlık Hizmetlerinde Tanıtım ve Bilgilendirme Faaliyetleri Hakkında Yönetmelik** (12 Kasım 2025, RG 33075) | Ana dayanak — fiyat, hasta yorumu, üstünlük ifadesi yasakları |
| Aynı yönetmelik **m.8** | Sağlık turizmi istisnası (yurt dışına yönelik tanıtım) |
| **6698 sayılı KVKK** | Hasta görseli/yorumu = özel nitelikli kişisel veri; açık rıza şartı |
| **Uzaktan Sağlık Hizmetlerinin Sunumu Hakkında Yönetmelik** | Online konsültasyon (aşağıda açık soru) |

---

## 2. Uygulanan kararlar

Tek kaynak: `src/config/features.ts` → `features(locale)`.

| İçerik | tr | en · de · ru · ar | Gerekçe |
|---|---|---|---|
| Fiyat / fiyat aralığı | ❌ | ✅ (yalnızca €) | m.8 sağlık turizmi istisnası; TL hiç kullanılmıyor |
| Hasta yorumu | ❌ | ✅ (yalnızca Google kaynaklı) | Yurt içi tanıtımda yasak |
| Hasta fotoğrafı | ❌ | ❌ | İmzalı Ek-1 açık rıza **yok** → hiçbir dilde yayınlanmıyor |
| Üstünlük ifadesi | ❌ | ❌ | Her dilde kaldırıldı ("Neden bizi tercih ediyorlar" → "Tedavi yaklaşımımız") |
| Vaka sayısı | ❌ | ❌ | Rakamlar çelişkili ve doğrulanmamış (aşağıda) |

**Ek teknik önlemler**

- `/tr/deneyimler` yayından kaldırıldı → **301** `/tr` (`src/middleware.ts`), menüden gizli
  (`src/config/nav.ts`), sitemap'ten çıkarıldı, `noindex` meta verildi.
- Online konsültasyon ücreti `/tr`'de **tutar olarak yazılmıyor**; yerine
  "Ücretlidir; tutar randevu sırasında bildirilir." Yabancı dillerde 200 €.
- Tıbbi sorumluluk reddi her dilde footer'da:
  *"Bu sitedeki bilgiler genel bilgilendirme amaçlıdır, tıbbi tavsiye yerine geçmez.
  Tanı ve tedavi için hekim muayenesi gerekir."*
- `/tr`'de `AggregateRating` / `Review` yapısal verisi üretilmiyor.

---

## 3. ⚠️ AVUKATA SORULACAKLAR

### 3.1 "Yurt dışına yönelik ayrı platform" şartı — EN KRİTİK
m.8 istisnası tanıtımın **yurt dışına yönelik** olmasını arıyor. Şu anki yapıda
`/en`, `/de`, `/ru`, `/ar` sayfaları **aynı alan adı** altında
(`www.meurology.com/en/...`).

**Soru:** Aynı alan adındaki dil klasörleri "ayrı platform" sayılır mı?

**Sayılmazsa:** Yapı ikiye bölünebilecek şekilde kurgulandı —
`meurology.com` (yalnızca TR, fiyatsız/yorumsuz) +
`meurology-international.com` (yabancı diller). İçerik dil klasörlerinde ayrık,
ortak bileşenler paylaşımlı olduğu için ayrışma düşük maliyetli olacaktır.

### 3.2 Google yorumlarının yabancı dil sayfalarında yayını
Yorumlar hastalar tarafından **Google Haritalar'da herkese açık** paylaşılmış
(`source: 'google'`, `src/content/experiences.ts`). Yine de:

**Soru:** Bunları klinik web sitesinde tekrar yayınlamak "reklam niteliğinde hasta
yorumu" sayılır mı? KVKK açısından ayrıca açık rıza gerekir mi?

> Kullanıcı kararı: Google yorumları yabancı dillerde kalacak, hasta fotoğrafları
> tüm dillerden kaldırılacak. Türkçe'de yorum zaten hiç gösterilmiyor.

### 3.3 Hasta hikâyesi ve görseli için Ek-1 onamı
Şu an imzalı onam **yok**. Alınacaksa her hasta için ayrı ayrı, Ek-1 formatında,
kapsamı (hangi dil, hangi mecra, süre) belirtilerek alınmalı.
Kod tarafı hazır: `consentDocumentId` dolmadan hiçbir görsel/doğrudan hikâye render edilmez.

### 3.4 Uzaktan sağlık — WhatsApp görüntülü arama
Online konsültasyon şu an WhatsApp görüntülü arama ile yapılıyor.

**Soru:** *Uzaktan Sağlık Hizmetlerinin Sunumu Hakkında Yönetmelik* kapsamında
WhatsApp uygun bir platform mu? Sağlık Bakanlığı onaylı bir sistem şart mı?

> Kod tarafı: görüşme platformu tek yerden değiştirilebilir (`src/config/site.ts`
> → `consultation`), uygun değilse geçiş maliyeti düşüktür.

### 3.5 VERBİS kayıt yükümlülüğü
Bildirilen durum: kayıt yok. Sağlık verisi (özel nitelikli kişisel veri) işlendiği
için **kayıt yükümlülüğü doğmuş olabilir**.

**Soru:** Çalışan sayısı / mali bilanço eşikleri ve özel nitelikli veri işleme
ölçütleri karşılanıyor mu? Karşılanıyorsa VERBİS kaydı yapılmalı ve numara
`src/config/contact.ts` → `verbisNo` alanına girilmelidir.

### 3.6 Sağlık turizmi yetki belgesi
Belgeyi **T.C. Sağlık Bakanlığı** verir; USHAŞ tanıtım/koordinasyon şirketidir ve
belge düzenlemez. Sitedeki yanlış "USHAŞ yetkisi" ifadesi düzeltildi.
Belge sahibi **hastane** (hekim değil) olarak gösteriliyor.

**Soru:** Hekimin kendi web sitesinde, belge sahibi hastane üzerinden sağlık
turizmi tanıtımı yapması yeterli mi, yoksa hekim/şirket adına ayrı belge gerekir mi?

---

## 4. Doğruluk düzeltmeleri (yanıltıcı bilgi riski)

| Konu | Önceki (yayında) | Şimdi |
|---|---|---|
| Vaka sayısı | "5.230+ işlem", "945 robotik", "145+ robotik prostatektomi" | **Kaldırıldı** — bildirilen işlem bazlı rakamların toplamı 2.385, robotik radikal prostatektomi 93. İki kaynak çelişiyor, ikisi de doğrulanmadı |
| Deneyim yılı | "18 yıl" | **Kaldırıldı** — 2004 mezuniyetine göre 22 yıl eder; uzmanlık başlangıç yılı bildirilmedi |
| EAU üyeliği | Ana sayfada "EAU Üyeliği" rozeti | **Kaldırıldı** — dernek üyeliği yok |
| Tıp fakültesi | "2000–2004" (4 yıl — hatalı) | "2004 mezuniyeti" |
| Güncel kurum | "İstanbul Atlas Üniversitesi ABD Başkanı" ⟷ "2026 Altınbaş" çelişkisi | Güncel: **Altınbaş Üniversitesi Üroloji Kliniği**; Atlas geçmiş kayıt olarak korundu |
| Yetki belgesi | "USHAŞ Yetki Belgesi No" | "T.C. Sağlık Bakanlığı Uluslararası Sağlık Turizmi Yetki Belgesi", sahibi hastane |
| İletişim | muslumergun@gmail.com | **info@meurology.com** (kurumsal) |

---

## 5. Açık TODO-DOGRULA listesi

- [ ] Sağlık Turizmi Yetki Belgesi **numarası** (`config/contact.ts` → `healthTourism.licenseNo`)
- [ ] VERBİS kayıt durumu ve numarası (`config/contact.ts` → `verbisNo`)
- [ ] Doğrulanmış **vaka sayıları** + her birinin kapsamı ve başlangıç yılı (`content/caseStats.ts`)
- [ ] **Uzmanlık başlangıç yılı** (deneyim yılı ifadesi için)
- [ ] İşlem bazlı **€ fiyat aralıkları** (`content/treatments.ts` → `priceRangeEUR`)
- [ ] Ödeme altyapısı tercihi (iyzico / Stripe / PayTR)
- [ ] JCI / ISO akreditasyon **doğrulama linkleri** (`config/contact.ts` → `hospitals[].accreditationUrl`)
- [ ] Hasta onam (Ek-1) formları — alındıkça `content/patientMedia.ts` → `consentedPhotos`
- [ ] Tanıtım videosu YouTube ID (`config/site.ts` → `youtubeFeaturedId`)
- [ ] Google Scholar / ORCID linkleri (JSON-LD `sameAs`)
