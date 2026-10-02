# Uro Klinik — Uluslararası Ürolojik Cerrahi / Sağlık Turizmi Web Sitesi

Ulusal ve uluslararası ürolojik cerrahi hastalarına yönelik çok dilli sağlık
turizmi web sitesi. **Next.js (App Router) + TypeScript + Tailwind CSS + next-intl**.

## Teknik yığın

- **Next.js 15** (App Router, RSC) + **TypeScript**
- **Tailwind CSS** — tüm renkler CSS custom property token'ları üzerinden (açık/koyu tema)
- **next-intl** — route bazlı çok dillilik: `/tr`, `/en`, `/ar`, `/de`, `/ru`
- **Arapça için RTL** desteği (`dir="rtl"`)
- **Google Fonts** (`next/font`): Source Serif 4 (başlık), IBM Plex Sans (gövde), IBM Plex Mono (veri)
- **next/image** ile görsel optimizasyonu (AVIF/WebP), lazy loading
- SEO: sayfa bazlı meta + **JSON-LD** (MedicalWebPage / Physician / FAQPage), otomatik `sitemap.xml` ve `robots.txt`
- Vercel'e hazır (ek yapılandırma gerektirmez)

## Kurulum

```bash
npm install
npm run dev      # http://localhost:3000 (→ /tr'ye yönlenir)
npm run build    # production derleme
npm start        # production sunucu
```

## Klasör yapısı

```
src/
  app/
    [locale]/            # dil kök layout'u (<html dir> burada) + tüm sayfalar
      page.tsx           # Ana sayfa
      tedaviler/         # Tedaviler indeksi + [slug] şablonu
      cerrah/            # Cerrah profili
      hastane/           # Hastane & teknoloji
      uluslararasi-hasta/# Uluslararası hasta süreci
      deneyimler/        # Hasta deneyimleri (ülkeye göre filtre)
      blog/              # Bilgi merkezi + [slug]
      iletisim/          # İletişim + ön değerlendirme formu
      yasal/             # KVKK/GDPR + açık rıza (şablon)
    api/on-degerlendirme/# Form POST stub (ileride CRM'e bağlanacak)
    sitemap.ts, robots.ts
  components/            # UI bileşenleri (server + client)
  content/              # İÇERİK VERİSİ (CMS-ready) — treatments, surgeon, trust, blog, legal, experiences
  config/               # site.ts (marka/WhatsApp), nav.ts
  i18n/                 # next-intl yapılandırması (routing, request, navigation)
  messages/             # tr/en/ar/de/ru.json — arayüz çevirileri
```

## İçerik ve çeviri

- **Uzun içerik** (tedaviler, cerrah, blog, yasal) `src/content/*.ts` içinde, **dil bazlı** tutulur.
  Şu an **TR ve EN dolu**; `ar/de/ru` render sırasında otomatik olarak `en`'e düşer
  (`resolveContent`). Yeni dil için ilgili kayda `i18n.<locale>` ekleyin.
- **Arayüz metinleri** `src/messages/*.json` içinde; **beş dilin tamamı** doldurulmuştur.
- İleride **headless CMS** (ör. Sanity) için: `content/*.ts` alanları düz tutuldu, birebir taşınabilir.

## ⚠️ Doldurmanız gereken PLACEHOLDER alanlar

Gerçek/hassas veri üretilmedi. Yayına almadan önce doldurun (kod içinde `PLACEHOLDER` ile aranabilir):

| Nerede | Ne |
|---|---|
| `src/config/site.ts` | Marka adı, **WhatsApp numarası**, telefon, e-posta, adres, **USHAŞ belge no**, alan adı |
| `src/content/surgeon.ts` | Cerrah adı/unvanı, **diploma tescil no**, dernek üyelik no'ları, eğitim, yayınlar, foto (`/public`), tanıtım videosu |
| `src/content/treatments.ts` | **Fiyat aralıkları** (`price.from/to`), **vaka sayıları**, paket gece sayıları, hasta videosu embed URL'leri |
| `src/content/trust.ts` | Akreditasyon belge no'ları/logoları, hastane adı/teknoloji bilgisi |
| `src/content/experiences.ts` | **Gerçek, KVKK açık rızalı hasta yorumları/videoları** (mevcut kayıtlar yapı örneğidir) |
| `src/content/legal.ts` | Ön değerlendirme formuna özel KVKK/GDPR aydınlatması ve ayrı sağlık verisi rızası güncellendi; canlı veri akışı, saklama uygulaması ve sınır ötesi hizmet sağlayıcılar için hukuk uzmanı kontrolü gerekir |

## Fiyat davranışı

Bir tedavinin `price.from`/`price.to` değeri `0` olduğunda sayfa otomatik olarak
"fiyat değerlendirme sonrası paylaşılır" gösterir. Gerçek aralığı girdiğinizde
biçimlendirilmiş fiyat görünür.

## Form (ön değerlendirme)

`components/PreAssessmentForm.tsx` → `POST /api/on-degerlendirme`. Şu an sadece
doğrulama yapıp başarı döner (sunucuya loglar). CRM/e-posta entegrasyonu için
`src/app/api/on-degerlendirme/route.ts` içindeki `TODO`'lara bakın. Dosya yükleme
alanı bilinçli olarak **devre dışı placeholder**'dır (depolama eklenince aktifleşir).

## Tasarım / erişilebilirlik

- Palet: derin çam yeşili/teal (ana) + sıcak pirinç/altın (vurgu) + soğuk beyaz-gri zemin.
- Açık/koyu tema: `prefers-color-scheme` + manuel toggle (localStorage, FOUC yok).
- WCAG AA hedefli kontrast, klavye ile gezilebilir, görünür odak halkaları, `prefers-reduced-motion`.
