# İçerik Planı — Faz 3 (ONAYINIZI BEKLİYOR)

*Son güncelleme: 4 Ekim 2026*

Bu dosya, prompt'un **4. Aşama (İçerik Mimarisi)** hedefine ulaşmak için yazılacak
içeriğin tam listesidir. Altyapı hazır; **yazmaya başlamadan önce bu planı onaylamanız
gerekiyor**, çünkü tıbbi metinler sizin adınıza yayımlanacak (prompt m.8.3).

---

## ⚠️ Önce karar vermeniz gereken 3 şey

**1. Hacim gerçekçi mi?**
Prompt her tedavi sayfası için **dil başına ≥1.500 kelime** istiyor. Hedef yapı
35 tedavi sayfası × 6 dil. Bu **~315.000 kelime** demek — tek seferde üretilemez
ve üretilse bile sizin tıbben okuyup onaylamanız haftalar alır.

**Önerim:** Kelime hedefini sayfa başına **800–1.200 kelime** yapalım ve
**öncelikli 8 sayfaya** odaklanalım. Hasta getiren sayfa sayısı azdır; 35 zayıf
sayfa yerine 8 güçlü sayfa daha iyi sonuç verir.

**2. Hangi sırayla?**
Aşağıda öncelik sırası var. Katılmıyorsanız sırayı değiştirin.

**3. Onay akışı nasıl olsun?**
- **(a)** Her sayfayı tek tek yazayım, siz okuyup onaylayın, sonra yayına alayım *(en güvenli, en yavaş)*
- **(b)** Önce Türkçe yazayım, siz onaylayın, sonra 5 dile çevireyim *(önerilen)*
- **(c)** Hepsini taslak olarak yazayım, toplu okuyun *(en hızlı, onay yükü size biner)*

---

## A. Yeni tedavi sayfaları

Yapı: **hub** (üst kategori) + altında alt sayfalar. Hub sayfaları karşılaştırma
tablosu ve yönlendirme içerir; alt sayfalar tek bir işlemi derinlemesine anlatır.

### Öncelik 1 — Para sayfaları (önce bunlar)

| # | Sayfa | Üst kategori | Neden öncelikli |
|---|---|---|---|
| 1 | **HoLEP** | BPH | Cerrahın yayın yaptığı alan; Avrupa'da yüksek arama hacmi |
| 2 | **ThuLEP** | BPH | Cerrahın 2025 yayını var — özgün otorite |
| 3 | **Penil protez** | Androloji | En yüksek hasta değeri; Körfez pazarında güçlü |
| 4 | **Sinir koruyucu cerrahi** | Prostat kanseri | Robotik prostatektomiyi destekleyen karar sayfası |

### Öncelik 2 — Hub sayfaları ve yaygın işlemler

| # | Sayfa | Üst kategori |
|---|---|---|
| 5 | Prostat kanseri (hub) | — |
| 6 | PSA yüksekliği ve biyopsi | Prostat kanseri |
| 7 | Rezüm | BPH |
| 8 | TURP | BPH |
| 9 | RIRS | Böbrek taşı |
| 10 | PCNL | Böbrek taşı |
| 11 | Erektil disfonksiyon | Androloji |
| 12 | Varikosel | Androloji |

### Öncelik 3 — Tamamlayıcılar

| # | Sayfa | Üst kategori |
|---|---|---|
| 13 | TUMT | BPH |
| 14 | ESWL | Böbrek taşı |
| 15 | Penis büyütme | Androloji |
| 16 | Mikro-TESE / erkek infertilitesi | Androloji |
| 17 | Peyronie | Androloji |
| 18 | Böbrek tümörü (parsiyel/radikal nefrektomi) | Üroonkoloji |
| 19 | Mesane tümörü (TUR-M / radikal sistektomi) | Üroonkoloji |
| 20 | Testis tümörü | Üroonkoloji |
| 21 | İdrar kaçırma (TOT/mini-sling) | Kadın ürolojisi |
| 22 | Sakral nöromodülasyon | Kadın ürolojisi |
| 23 | Pelvik taban cerrahisi | Kadın ürolojisi |

> **Not:** Üretroplasti, piyeloplasti, fistül onarımı ve üreter rekonstrüksiyonu
> zaten var; bunlar "Rekonstrüktif Üroloji" hub'ının altına taşınacak.

### Her sayfada ne olacak (prompt m.4.2)
H1 + son gözden geçirme tarihi · hızlı bilgi kutusu · durum nedir · kimlere uygundur ·
cerrah deneyimi · kullanılan teknoloji · adım adım süreç · alternatifler (karşılaştırma
tablosu) · riskler · hafta hafta iyileşme · fiyat (yalnızca yabancı dillerde) ·
SSS (≥8 soru) · bilimsel kaynaklar · CTA · ilgili sayfalar.

**Altyapı hazır:** bu alanların hepsi şablonda mevcut; robotik prostatektomide
örneği canlıda görebilirsiniz.

---

## B. Ülke sayfaları (yalnızca yabancı dillerde, `/tr`'de YOK)

Hedef pazarlarınız: **Avrupa → Afrika → Körfez → Orta Doğu**

| Öncelik | Ülkeler | Dil |
|---|---|---|
| 1 | Almanya, Hollanda, İngiltere | de, en |
| 2 | Irak, Suudi Arabistan, BAE, Kuveyt | ar |
| 3 | Nijerya, Gana | en |
| 4 | Senegal, Fildişi Sahili, Cezayir, Fas | fr |
| 5 | Rusya, Azerbaycan, Kazakistan | ru |

Her sayfa ≥400 kelime **benzersiz** içerik (doorway page cezası almamak için):
o ülkeden uçuş süresi, vize durumu (resmî kaynak linkiyle), o dilde koordinatör
durumu, ödeme/döviz, o pazara özgü sık sorular.

> ⚠️ **Dürüst olmam gereken bir nokta:** Şu an koordinatörünüz **yalnızca İngilizce**
> konuşuyor (İpek İlhan). Arapça, Fransızca ve Rusça ülke sayfalarında "kendi
> dilinizde koordinatör" vaadi veremeyiz — bu yanıltıcı olur. Ya o dillerde
> tercüman/koordinatör ayarlanacak, ya da sayfalarda "görüşme öncesi tercüman
> ayarlanır" demeye devam edeceğiz. **Kararınız?**

---

## C. İlk 30 blog yazısı

Çeviri değil — her pazarın kendi arama davranışına göre. Kategoriler mevcut altyapıda hazır.

### Türkçe (yurt içi — fiyat/karşılaştırma sorgusu YOK, yönetmelik)
1. HoLEP mi ThuLEP mi? Prostat büyüklüğüne göre seçim
2. Robotik prostatektomi sonrası idrar kaçırma: hafta hafta ne beklenmeli
3. Sinir koruyucu cerrahi kimlere yapılabilir
4. PSA yüksekliği: biyopsiden önce MR neden önemli
5. Böbrek taşı: RIRS mi PCNL mi
6. Rezüm sonrası cinsel fonksiyon
7. Penil protez çeşitleri: şişirilebilir mi bükülebilir mi
8. Varikosel ameliyatı kısırlığı düzeltir mi
9. İdrar kaçırma: hangi tip, hangi tedavi
10. Üretra darlığında neden urethrotomi yetmez

### İngilizce (uluslararası — fiyat/karşılaştırma serbest)
11. Cost of robotic prostatectomy in Turkey vs. UK and Germany
12. HoLEP in Turkey: what international patients should know
13. Penile implant surgery abroad: choosing a surgeon safely
14. How long to stay in Turkey after prostate surgery
15. Redo urethroplasty after a failed repair: is it possible?
16. Kidney stone treatment abroad: RIRS vs PCNL explained
17. Second opinion for prostate cancer: how to send your file
18. Is medical tourism for urology safe? What to check

### Arapça (Körfez)
19. العلاج في تركيا لتضخم البروستاتا — الطرق والتكلفة
20. دعامة القضيب في تركيا: ما الذي يجب معرفته
21. جراحة سرطان البروستاتا بالروبوت في إسطنبول
22. حصوات الكلى: متى تحتاج إلى جراحة
23. الخصوصية في علاج طب الذكورة

### Almanca (diaspora + Avrupa)
24. HoLEP in der Türkei: Ablauf, Kosten und Nachsorge
25. Roboterprostatektomie im Ausland — worauf achten
26. Penisprothese: Ablauf und realistische Erwartungen
27. Zweitmeinung bei Prostatakrebs aus Deutschland

### Fransızca (Batı/Kuzey Afrika)
28. Prostatectomie robotique en Turquie : déroulement et coûts
29. Calculs rénaux : RIRS ou NLPC, comment choisir

### Rusça (BDT)
30. Роботическая простатэктомия в Турции: как проходит лечение

Her yazıda: yazar kutusu, yayın+güncelleme tarihi, okuma süresi, içindekiler,
kaynakça. **Altyapı hazır** — canlıda mevcut iki yazıda görebilirsiniz.

---

## D. Bunları yazarken uyacağım kurallar

- **Uydurma yok.** Rakam, oran veya başarı yüzdesi yalnızca kaynak gösterilerek
  (EAU kılavuzu, cerrahın yayını) yazılır. Kaynağı olmayan rakam yazılmaz.
- **Vaka sayısı yok** — doğrulanana kadar (`caseStats.ts` boş).
- **Üstünlük ifadesi yok** — "en iyi", "lider", "%100", "garanti" yasak.
- **Fiyat yalnızca yabancı dillerde**, € cinsinden, siz aralıkları verdikten sonra.
- **Taslak olarak** yazılır (`draft: true`); siz onaylamadan yayında görünmez.

---

## 👉 Sizden beklediğim

1. **Hacim kararı**: 1.500 kelime mi, 800–1.200 mü?
2. **Onay akışı**: (a) tek tek · (b) önce Türkçe sonra çeviri *(önerilen)* · (c) toplu taslak
3. **Öncelik 1 listesi doğru mu?** (HoLEP, ThuLEP, penil protez, sinir koruyucu cerrahi)
4. **Koordinatör dili**: Arapça/Fransızca/Rusça koordinatör olacak mı, yoksa
   "tercüman ayarlanır" mı diyelim?

Bu dördüne cevap verdiğinizde yazmaya başlarım.
