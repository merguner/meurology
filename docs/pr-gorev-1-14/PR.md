# ME Urology web sitesi — 14 görevlik geliştirme paketi

14 görevin tamamı ayrı birer commit olarak yapıldı. Her commit tek başına
derlenip çalışır durumda; mesaj gövdelerinde ne yapıldığı ve **neden öyle
yapıldığı** yazılı.

| # | Commit | Konu |
|---|--------|------|
| 1 | `21a951b` | Ana sayfadaki hasta yorumları şeridi kaldırıldı |
| 2 | `07dddc7` | ThuLEP öncelikli konumlandırma |
| 3 | `a375b2e` | Ana sayfa — hekim kimliği ve öne çıkan altı tedavi |
| 4 | `5d7d73e` | Dile göre paylaşım görseli (OG) ve logo alt metinleri |
| 5 | `7e80a33` | Form akışı raporlandı + belge ekleme eklendi |
| 6 | `efcff84` | Hastane sayfası genişletildi, akreditasyon ayar dosyasına taşındı |
| 7 | `717dde9` | Dokuz yeni sayfa (8 tedavi + çocuk ürolojisi kategorisi), 6 dilde |
| 8 | `b02ee61` | Yapılandırılmış veri tamamlandı |
| 9 | `8303a1b` | Rızaya bağlı ölçümleme (GA4 + Meta Pixel) ve olaylar |
| 10 | `2e6b008` | Online danışmanlık — ücret ayar dosyasından, kartla ödeme |
| 11 | `db8a5c0` | Uluslararası hasta — vaatler ayar dosyasına bağlı, paket yapısı hazır |
| 12 | `59f9253` | İki zayıf blog yazısı 6 dilde genişletildi + dil kapsama raporu |
| 13 | `1ed3176` | KVKK aydınlatma ve açık rıza metinleri taslağı |
| 14 | `9fd603a` | Yapay zekâ hasta asistanı |

---

## 1. Kısa özet

**Yönetmelik uyumu.** Ana sayfalardaki hasta yorumu şeridi 5 dilde
kaldırıldı; bileşen kullanımdan çıktı. İçerik taramasında "ağrısız
ameliyat", "lider", "altın standart" sıfır; 145 "garanti" geçişinin
tamamı olumsuzlama ("garanti edilemez"); 4 "en iyi" geçişi meşru
kullanım ("en iyi şans"). Yeni yazılan tüm içerikte yüzde, başarı oranı
ve vaka sayısı yok.

**ThuLEP konumlandırması.** BPH sayfası 6 dilde "BPH / İyi Huylu Prostat
Büyümesi (ThuLEP, Rezūm, TUMT)" oldu; yöntem karşılaştırmasında ThuLEP
ilk sırada ve tabloya TUMT sütunu eklendi. HoLEP kısaca benzer
enükleasyon yöntemi olarak anılıyor ve sayfasının başında ThuLEP'e
bağlantılı not var. ThuLEP sayfasına hekimin yayını **yalnızca atıf
olarak** eklendi — yayından hiçbir yüzde veya başarı oranı çıkarılmadı.

**Ana sayfa.** Hero'ya "Doç. Dr. Müslüm Ergün · Üroloji" satırı eklendi
(6 dilde). `public/photos/dr-ergun-hero.jpg` yoksa görsel alanı hiç
render edilmez. "Tedavi alanları" artık ayar dosyasındaki altı karttan
ibaret (sıra: BPH/ThuLEP → robotik prostatektomi → böbrek taşı → penil
protez → rekonstrüktif üroloji → prostat kanseri), altında "Tüm
tedaviler →".

**İçerik.** 8 yeni tedavi sayfası + çocuk ürolojisi kategori sayfası,
6 dilde (Türkçe 1.510–1.756 kelime); hepsi `reviewStatus: 'draft'`.
İki zayıf blog yazısı 102 → 992 ve 140 → 940 kelimeye çıkarıldı, altı
dilde de 900 kelimenin üzerinde.

**Altyapı.** Dile göre 1200×630 PNG paylaşım görselleri; dosya ekli ön
değerlendirme formu; rızaya bağlı ölçümleme; `Physician`,
`MedicalProcedure`, `MedicalCondition` ve her sayfada `BreadcrumbList`;
yapay zekâ hasta asistanı.

### Ekran görüntüleri

| | TR | AR (RTL) |
|---|---|---|
| Masaüstü | ![TR masaüstü](https://raw.githubusercontent.com/merguner/meurology/gorev-paketi-1-14/docs/pr-gorev-1-14/01-anasayfa-tr-masaustu.jpg) | ![AR masaüstü](https://raw.githubusercontent.com/merguner/meurology/gorev-paketi-1-14/docs/pr-gorev-1-14/02-anasayfa-ar-masaustu.jpg) |
| Mobil (375 px) | ![TR mobil](https://raw.githubusercontent.com/merguner/meurology/gorev-paketi-1-14/docs/pr-gorev-1-14/03-anasayfa-tr-mobil.jpg) | ![AR mobil](https://raw.githubusercontent.com/merguner/meurology/gorev-paketi-1-14/docs/pr-gorev-1-14/04-anasayfa-ar-mobil.jpg) |

Yapay zekâ asistanı (anahtar tanımlıyken):

| TR | AR (RTL) | DE (koyu tema) |
|---|---|---|
| ![asistan TR](https://raw.githubusercontent.com/merguner/meurology/gorev-paketi-1-14/docs/pr-gorev-1-14/05-asistan-tr.jpg) | ![asistan AR](https://raw.githubusercontent.com/merguner/meurology/gorev-paketi-1-14/docs/pr-gorev-1-14/06-asistan-ar-rtl.jpg) | ![asistan DE](https://raw.githubusercontent.com/merguner/meurology/gorev-paketi-1-14/docs/pr-gorev-1-14/07-asistan-de-koyu-tema.jpg) |

---

## 2. HEKİM TEYİDİ GEREKEN MADDELER

Hiçbiri uydurulmadı; hepsi ya mevcut sitedeki beyanın taşınmış hâli ya
da boş bırakılmış bir alan. Teyit edilene kadar ayar dosyalarındaki
`TODO(Dr. Ergün)` işaretleri duruyor.

### 2.1 Akreditasyon ve belge — `src/config/hospitals.ts`

| Hastane | JCI | ISO 9001 | Sağlık Turizmi Yetki Belgesi |
|---|---|---|---|
| Medical Park Bahçelievler | `true` | `true` | `true`, numara **boş** |
| LİV Hospital Topkapı | `true` | `true` | **`false`** |

- JCI ve ISO 9001 değerleri sitenin **bugünkü** beyanıyla aynı
  bırakıldı; hangi belgenin hangi hastaneye ait olduğu doğrulanmadı.
- LİV Topkapı'da sağlık turizmi belgesi bilerek `false`:
  `config/contact.ts` belge sahibi olarak yalnızca Medical Park
  Bahçelievler'i anıyor. Olmayan bir belgeyi iddia etmektense alanı
  kapalı bırakmak doğruydu.
- Belge numarası boşken satır **hiç** render edilmez.
- Rozet `false` yapıldığı anda sayfadan kendiliğinden kalkar.

### 2.2 Ücretler

| Alan | Dosya | Durum |
|---|---|---|
| `consultationFeeEUR` | `config/site.ts` | **200** — teyit bekliyor |
| `consultationFeeTRY` | `config/site.ts` | 0 (boş). Dolsa bile Türkçe sayfalarda asla gösterilmez |
| `assistantPrices` (14 işlem) | `config/assistant.ts` | **Tümü boş** |
| `treatmentPackages` | `config/packages.ts` | **Boş dizi** — bölüm gizli |

Asistan için önemli not: kaynak depodaki bilgi dosyasında iki tutar
vardı ("Muayene 3.000 TL", "ThuLEP yaklaşık 120.000 TL). Bunlar
**bilerek taşınmadı** (gerekçe §5.2). Alanlar boşken asistan
"muayene sonrası netleşir" der ve rakam uydurmaz.

### 2.3 Hizmet vaatleri — `src/config/promises.ts`

Altı vaat de şu an `true` (metinler değiştirilmedi, yalnızca açılıp
kapanabilir hâle getirildi). Her biri hekim teyidi gerektirir:

1. Uluslararası hasta koordinatörü
2. Tercüman desteği
3. Konaklama + transfer dahil paket
4. Refakatçi konaklaması
5. Kadın hastalar için kadın koordinatör
6. İngilizce epikriz

Bir vaat karşılanamıyorsa ilgili alanı `false` yapmak yeterli; cümle
sayfadan kendiliğinden kalkar.

### 2.4 Yeni içerik — tıbbi onay bekleyen 9 sayfa

Hepsi `reviewStatus: 'draft'` ve bilerek `lastReviewed` **yok**:

`cocuk-urolojisi` · `hipospadias` · `vur-cerrahisi` ·
`tot-aski-ameliyati` · `pektopeksi` · `mesane-botoksu` ·
`yapay-idrar-sfinkteri` · `tumt` · `mikroskopik-varikoselektomi`

### 2.5 Diğer

- `public/photos/dr-ergun-hero.jpg` ve `public/photos/hastane-*.jpg`
  henüz yok; dosya eklenince kendiliğinden görünürler.
- Online danışmanlık **iptal koşulları** metni yer tutucu.
- Asistanın söylediği hastane adları `config/hospitals.ts`'ten geliyor;
  liste doğru mu?

---

## 3. AVUKAT İNCELEMESİ GEREKEN MADDELER (Görev 13)

`LegalDoc` arayüzüne `legalReview?: 'pending' | 'reviewed'` eklendi.
`kvkkDoc` ve `consentDoc` **`'pending'`** olarak işaretli. Alan sitede
gösterilmez; yalnızca içerik dosyasında durur.

**Metinler taslaktır ve hukukçu onayından geçmemiştir.**

Aydınlatma metni 7 bölümden 10 bölüme çıktı; yeni/değişen başlıklar:
sağlık verilerinin işlenmesi, WhatsApp üzerinden iletişim, yapay zekâ
destekli hasta asistanı, yurt dışına aktarım, saklama süreleri,
haklarınız ve başvuru yolu. Açık rıza metni tek paragraftan ayrı ayrı
geri çekilebilen beş başlığa dönüştürüldü.

Teyit edilmesi gerekenler:

1. **24 aylık saklama süresi** — tedavi ilişkisine dönüşmeyen başvurular
   için yazıldı. Mevzuata ve kliniğin uygulamasına uygun mu?
2. **Asistan kayıtlarının saklama süresi** ve hizmet sağlayıcının ticari
   unvanının metinde açıkça anılıp anılmayacağı.
3. **Yurt dışına aktarım** hangi KVKK m.9 mekanizmasına dayanacak:
   taahhütname mi, standart sözleşme mi, açık rıza mı?
4. **WhatsApp üzerinden paylaşılan sağlık verisinde rızanın
   belgelenmesi.** Metin şu an "bu kanaldan paylaşırsanız ön
   değerlendirme amacıyla işlenmesine rıza göstermiş olursunuz" diyor;
   zımni rıza hukuken zayıf olabilir.
5. **Hasta kayıtlarının asgari saklama süresi** sayıyla yazılmalı mı?
   Şu an "sağlık mevzuatının öngördüğü süre" deniyor, rakam verilmiyor.
6. **Formdaki tek onay kutusu** dört başlığı (sağlık verisi / yurt
   dışına aktarım / WhatsApp / asistan) birlikte karşılıyor mu, yoksa
   ayrı onay kutularına mı geçilmeli?
7. **Asistan bölümleri Görev 14'teki asistanı önceden tanımlıyor.**
   Asistan yayına alınmazsa bu bölümler de metinden çıkarılmalı.

Ayrıca düzeltilen bir **yanlış beyan**: metin 6 dilde "form dosya
yüklemez" diyordu. Görev 5 ile dosya yükleme eklendiği için bu ifade
artık doğru değildi; 6 dilde de güncellendi. Form onay kutusu metni de
eklenen belgeleri ve yurt dışına aktarımı kapsayacak şekilde genişletildi.

---

## 4. ORTAM DEĞİŞKENLERİ

Hiçbiri zorunlu değil; tanımlı olmayan her özellik **hiç render
edilmez**, yer tutucu bırakmaz.

### Ölçümleme (Görev 9) — ikisi de rızaya bağlı

| Değişken | Etkisi |
|---|---|
| `NEXT_PUBLIC_GA_ID` | GA4. Yoksa çerez bandı da görünmez |
| `NEXT_PUBLIC_META_PIXEL_ID` | Meta Pixel |

Onay verilmeden **tek bir ağ çağrısı** yapılmaz; betikler DOM'a onaydan
sonra eklenir. **Sağlık verisi olay parametresi olarak gönderilmez** —
yalnızca sayfa yolu ve kısa kaynak etiketi (`src/lib/analytics.ts`
imzası bunu tip düzeyinde zorlar).

### Ödeme (Görev 10)

| Değişken | Etkisi |
|---|---|
| `NEXT_PUBLIC_CARD_PAYMENT_URL` | Tanımlıysa havale akışının yanına "Kartla öde" düğmesi çıkar; yoksa düğme hiç görünmez |

### Yapay zekâ asistanı (Görev 14)

| Değişken | Zorunlu mu | Etkisi |
|---|---|---|
| `ANTHROPIC_API_KEY` | Asistan için **evet** | Yoksa balon **hiç görünmez**, dört uç nokta 404 |
| `ANTHROPIC_MODEL` | hayır | Varsayılan `claude-sonnet-5-5` |
| `ASISTAN_FAKE` | hayır | `1` iken Claude API'ye hiç istek gitmez (test) |
| `UPSTASH_REDIS_REST_URL` / `_TOKEN` | hayır | Yoksa asistan hafızasız çalışır |
| `BILDIRIM_URL` / `BILDIRIM_GIZLI` | hayır | Doktora e-posta bildirimi |
| `WEBHOOK_ANAHTARI`, `YCLOUD_API_KEY`, `WHATSAPP_NUMARA` | hayır | WhatsApp webhook |
| `META_VERIFY_TOKEN`, `META_APP_SECRET`, `META_APP_ID`, `META_PAGE_ID`, `META_IG_ID`, `META_PAGE_TOKEN`, `META_GRAPH_VERSION` | hayır | Instagram + Facebook webhook |

`ANTHROPIC_API_KEY` **`NEXT_PUBLIC_` değildir**: tarayıcıya hiçbir
koşulda gitmez. Ama `[locale]` düzeni statik üretildiği için balonun
gösterilip gösterilmeyeceğine **derleme anında** karar verilir —
anahtar sonradan eklenirse yeniden dağıtım gerekir.

### Kullanılmayanlar

`RESEND_API_KEY` ve `FORM_TO_EMAIL` **eklenmedi**. Form akışı bozuk
değildi (§5.1); üçüncü parti bir e-posta servisi eklemek hasta verisini
yurt dışındaki ek bir işleyiciye göndermek anlamına gelirdi.
`FORM_TO_EMAIL`'in karşılığı mevcut `LEAD_NOTIFICATION_EMAIL`.

---

## 5. VARSAYIMLAR VE SAPMALAR

### 5.1 Form akışı bozuk değildi (Görev 5)

İnceleme sonucu: `PreAssessmentForm` → `POST /api/on-degerlendirme` →
kliniğin kendi SMTP hesabı üzerinden nodemailer → bildirim + otomatik
yanıt + isteğe bağlı CRM webhook. Honeypot, Turnstile, IP hız sınırı ve
libphonenumber doğrulaması zaten vardı. Resend'e **bilerek geçilmedi**.

Eklenen: en fazla 3 dosya, PDF/JPG/PNG, dosya başına 10 MB. Dosyalar
sunucuda saklanmaz; yalnızca kliniğe giden bildirim e-postasına
iliştirilir — otomatik yanıta ve CRM webhook'una **gitmez**. Günlüğe
yalnızca dosya sayısı yazılır, dosya adı yazılmaz. Yükleme alanının
yanında KVKK uyarısı var.

Test gerçek veriyle yapılmadı: `MAIL_FAKE=1` sahte taşıyıcısı ve
`src/lib/formAttachments.ts` için birim testleri yazıldı.

### 5.2 Asistan fiyatları taşınmadı (Görev 14)

Kaynak depodaki `lib/asistan/bilgi.ts` iki tutar içeriyordu. Taşınmama
gerekçesi iki katmanlı:

1. Görev tanımı doğrulanması gereken fiyat bilgisi eklemeyi yasaklıyor.
2. Tanıtım yönetmeliği yurt içine yönelik tanıtımda fiyatı yasaklıyor
   (sitenin kendi `config/features.ts` → `prices` bayrağı Türkçede zaten
   kapalı).

Sistem promptuna ayrıca **"Türkçe konuşan hastaya fiyat söyleme"**
kuralı eklendi; bu durumda asistan `doktora_ilet` aracını çağırıyor.

Asistanda yapılan diğer sapmalar: hastane adları ve telefon artık site
ayarlarından okunuyor (sabit kurum adı kaldırıldı); bileşen yalnızca
tr/en/ar biliyordu, de/ru/fr eklendi; sabit renkler yerine sitenin
tasarım değişkenleri (koyu tema çalışıyor); konum mantıksal verildi
(RTL'de WhatsApp düğmesiyle aynı tarafta, üstünde); hata yolunda hata
gövdesi loglanmıyor (hastanın yazdığı metin sağlık verisi olabilir).

Kaynak depodaki `gmail/Kod.gs` **alınmadı**: görev listesinde yok ve
siteye dahil değil, Apps Script tarafında çalışıyor.

### 5.3 MedicalProcedure yerine yer yer MedicalCondition (Görev 8)

Her tedavi sayfasını `MedicalProcedure` olarak işaretlemek yanlış veri
olurdu: bir kısmı hastalık/çatı sayfası. `Treatment.procedure` isteğe
bağlı alan yapıldı; hastalık sayfaları `MedicalCondition` basıyor.
Hastalığı "işlem" diye işaretlemek zengin sonuç doğrulamasından da geçmezdi.

### 5.4 Dil kapsama farkı eksik çeviri değil (Görev 12)

Denetim: 31/31 tedavi ve 9/9 yeni işlem sayfası 6 dilde tam; mesaj
anahtarı pariteleri her dil için 0 eksik / 0 fazla.

Sitemap'teki fark (tr 68, en 80, ar 68, de 64, ru 63, fr 62) tamamen
**ülke sayfaları** (en 13, ar 4, ru 3, tr 0 — yönetmelik gereği) ve
**pazara özel blog yazıları**. Bunlar bilinçli tasarım kararı; her dilde
yayınlanmamalı. **Değişiklik yapılmadı, rapor edildi.**

### 5.5 Açık kalan nokta

`/deneyimler` sayfası Türkçe dışındaki dillerde hâlâ hasta hikâyeleri ve
`GoogleReviews` bileşenini gösteriyor. Görev 1 yalnızca **ana
sayfaları** saydığı için bu sayfaya dokunulmadı. Kaldırılması isteniyorsa
ayrıca söylenmeli.

### 5.6 Çalışma sırasında bulunan hata (düzeltildi)

`bg-surface-1` sınıfı hiçbir yerde tanımlı değil (`tailwind.config.ts`'te
yalnızca `surface` ve `surface-2` var; `globals.css`'te de böyle bir
yardımcı sınıf yok). Tanımsız sınıf hiçbir kurala karşılık gelmediği için
onu kullanan üç öğe **arka plansız**, yani saydam kalıyordu:

| Dosya | Etkisi |
|---|---|
| `CookieConsent.tsx` | **Çerez onay bandı** saydam — arkasındaki sayfa içeriği metnin içinden görünüyordu |
| `FloatingWhatsApp.tsx` | Mobil alt çubuğun "Ara" yarısı saydam (3. ve 4. ekran görüntüsünde fark ediliyor) |
| `MapEmbed.tsx` | "Haritayı yükle" düğmesi saydam |

Üçü de `bg-surface` ile değiştirildi. Hata bu paketten önce de vardı;
başlangıçta kapsam dışı bırakılmıştı, sonra bu dalda düzeltildi.

Doğrulama: 375 px mobil, TR ve AR, açık ve koyu tema. Açık temada her iki
sabit öğe de `rgb(255,255,255)`, koyu temada `rgb(17,28,43)` — ikisi de
opak. Arapçada `dir="rtl"` korunuyor, yatay taşma yok, çerez bandındaki
"Reddet" ve "Kabul et" düğmelerinin eşit görünürlüğü bozulmadı.

---

## 6. DOKUNULMAYANLAR

- Cerrah sayfasındaki eğitim ve kariyer satırları (Atlas Üniversitesi
  dahil) — hekimin kararı.
- `noindex` ve `robots.txt` engeli — site taşıma ayrı bir aşama.
- Mevcut WhatsApp kaynak etiketleri (`[TR-GENEL]`, `[TR-ANASAYFA]` vb.)
  korundu; yeni düğmelere aynı mantıkla etiket eklendi.
- Sitenin temkinli, "garanti verilemez" diyen dili korundu.

---

## 7. DOĞRULAMA

- `npx tsc --noEmit` temiz.
- `npx next build` başarılı — **418 sayfa**.
- 6 dil masaüstü + 375 px mobil kontrol edildi; Arapçada `dir="rtl"`
  korunuyor ve yatay taşma yok (belge genişliği 375 px = pencere).
- Ölçümleme canlı doğrulandı: onay öncesi `gtag`/`fbq` tanımsız ve
  googletagmanager / connect.facebook'a **0 ağ çağrısı**; onay sonrası
  ikisi de yükleniyor, yakalanan olaylarda yalnızca `page_path`,
  `source` ve `to_locale` var.
- Asistan: anahtarsız balon yok ve `/api/asistan` 404; anahtarla balon
  görünüyor, mesaj gidip cevap dönüyor, webhook uçları yetkisiz isteği
  reddediyor (whatsapp 401, meta POST 401, meta GET 403, uret 401).
- Yasaklı ifade taraması yapıldı (§1).

`next lint` çalıştırılamadı: projede ESLint yapılandırılmamış ve komut
etkileşimli kurulum istiyor.
