# Fotoğraf yer tutucuları

Bu klasördeki dosyalar **isteğe bağlıdır**. Bir dosya yoksa, ilgili bölüm
sitede hiç render edilmez — kırık görsel kutusu çıkmaz. Dosyayı buraya
eklemek yeterlidir; kod değişikliği gerekmez.

| Dosya | Nerede kullanılır | Önerilen boyut |
|---|---|---|
| `dr-ergun-hero.jpg` | Ana sayfa hero'sundaki hekim kimlik satırı | en az 200×200 px, kare, yüz ortalanmış |

Yolların tanımlandığı yer: `src/config/homepage.ts`.
Varlık denetimi: `src/lib/publicImage.ts`.

Not: Cerrah sayfasında kullanılan portre hâlihazırda `public/dr-muslum-ergun.jpg`
altındadır; istenirse bu dosya `dr-ergun-hero.jpg` adıyla buraya kopyalanabilir.
