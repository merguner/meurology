# Başvuruları Google E-Tablolar'a kaydetme

Form başvuruları şu an yalnızca e-posta olarak geliyor. Bu kurulum, her
başvurunun aynı anda bir Google E-Tablo'ya satır olarak düşmesini sağlar;
böylece "bu kişiye dönüş yapıldı mı" sorusu gelen kutusunda kaybolmaz.

**Neden Apps Script, neden Zapier değil:** Zapier/Make gibi bir aracı,
hasta başvurusu verisi için yeni bir veri işleyen demektir ve KVKK açısından
ayrıca kayıt altına alınması gerekir. Apps Script veriyi doğrudan sizin kendi
Google hesabınızdaki tabloya yazar — Google zaten Gmail üzerinden aynı veriyi
alıyor, yani yeni bir taraf eklenmiyor. Ücretsizdir ve dışarıya bağımlılık
oluşturmaz.

**Başvuru akışı bozulmaz:** CRM çağrısı e-posta gönderildikten *sonra* yapılır
ve başarısız olursa yalnızca günlüğe yazılır. Tablo çalışmazsa bile başvuru
geçerli sayılır ve e-posta yine ulaşır.

---

## 1. Tabloyu oluşturun

[sheets.new](https://sheets.new) adresine gidin. Yeni bir tablo açılır.
Adını `ME Urology — Başvurular` yapın.

Başlık satırını yazmanıza gerek yok; betik ilk çalıştığında kendisi oluşturur.

## 2. Betiği yapıştırın

Aynı tabloda: **Uzantılar → Apps Script**.

Açılan düzenleyicide içeriği tamamen silip aşağıdaki kodu yapıştırın.

`GIZLI_JETON` satırındaki değeri kendi uydurduğunuz uzun bir metinle
değiştirin (ör. rastgele 32 karakter). Aynı değeri 5. adımda Vercel'e de
gireceksiniz.

```javascript
/**
 * ME Urology — form başvurularını bu tabloya yazar.
 * Kaynak: /api/on-degerlendirme (Vercel), CRM_WEBHOOK_URL ile tetiklenir.
 */

// Vercel'deki CRM_WEBHOOK_TOKEN ile BİREBİR aynı olmalı.
const GIZLI_JETON = 'buraya-kendi-uzun-gizli-metninizi-yazin';

const BASLIKLAR = [
  'Tarih', 'Ad Soyad', 'Ülke', 'E-posta', 'Telefon',
  'Tedavi', 'Mesaj', 'Dil', 'Onay metni sürümü', 'Durum', 'Not'
];

function doPost(e) {
  try {
    const veri = JSON.parse(e.postData.contents);

    // Apps Script web uygulamasının adresi herkese açıktır; jeton olmadan
    // adresi ele geçiren biri tabloya sahte satır yazabilirdi.
    if (veri.token !== GIZLI_JETON) {
      return yanit({ ok: false, error: 'yetkisiz' });
    }

    const sayfa = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];

    // Başlık satırı yoksa bir kez oluştur.
    if (sayfa.getLastRow() === 0) {
      sayfa.appendRow(BASLIKLAR);
      sayfa.getRange(1, 1, 1, BASLIKLAR.length).setFontWeight('bold');
      sayfa.setFrozenRows(1);
    }

    // Tarih sütunu okunabilir görünsün. Her çağrıda uygulanır; maliyeti yok
    // ve tablo elle değiştirilse bile biçim geri gelir.
    sayfa.getRange('A2:A').setNumberFormat('dd.MM.yyyy HH:mm');

    sayfa.appendRow([
      // METİN DEĞİL, GERÇEK TARİH yazılır. Böylece sütun sıralanabilir ve
      // tarihe göre filtrelenebilir olur; metin olsaydı ikisi de çalışmazdı.
      veri.at ? new Date(veri.at) : new Date(),
      veri.name || '',
      veri.country || '',
      veri.email || '',
      veri.phone || '',
      veri.treatment || '',
      veri.message || '',
      veri.locale || '',
      veri.consentTextVersion || '',
      'Yeni',   // Durum — elle güncellersiniz: Yeni / Arandı / Randevu / Kapandı
      ''        // Not
    ]);

    return yanit({ ok: true });
  } catch (hata) {
    console.error(hata);
    return yanit({ ok: false, error: String(hata) });
  }
}

function yanit(nesne) {
  return ContentService
    .createTextOutput(JSON.stringify(nesne))
    .setMimeType(ContentService.MimeType.JSON);
}
```

Kaydedin (disket simgesi).

## 3. Web uygulaması olarak yayımlayın

Sağ üstte **Dağıt → Yeni dağıtım**.

- Dişli simgesine tıklayıp tür olarak **Web uygulaması** seçin
- **Yürüten:** Ben (kendi hesabınız)
- **Erişimi olan:** **Herkes**

> "Herkes" ürkütücü görünebilir ama gereklidir: isteği gönderen Vercel
> sunucusu Google hesabınızla oturum açmış değildir. Tablonun kendisi herkese
> açık olmaz — yalnızca bu betik adresi açıktır ve jeton olmadan hiçbir şey
> yazamaz.

**Dağıt** deyin. Google ilk seferde izin isteyecek: hesabınızı seçin →
"Gelişmiş" → "... projesine git" → **İzin ver**.

Sonunda size şuna benzer bir adres verir:

```
https://script.google.com/macros/s/AKfycb.../exec
```

Bu adresi kopyalayın.

## 4. Test edin (isteğe bağlı ama önerilir)

Adresin çalıştığını hemen görmek için, `JETON` ve `ADRES` yerine kendi
değerlerinizi koyup bunu çalıştırın:

```bash
curl -X POST "ADRES" -H "Content-Type: application/json" -d "{\"token\":\"JETON\",\"at\":\"test\",\"name\":\"Deneme Satiri\",\"locale\":\"tr\"}"
```

`{"ok":true}` dönerse ve tabloda satır belirirse kurulum doğrudur.

## 5. Vercel'e iki değişken ekleyin

[Environment Variables](https://vercel.com/ergun3/meurology/settings/environment-variables)
sayfasında, **Add New** ile (mevcut satırları düzenlemeyin), ortam **Production**:

| Key | Value |
|---|---|
| `CRM_WEBHOOK_URL` | 3. adımdaki `https://script.google.com/.../exec` adresi |
| `CRM_WEBHOOK_TOKEN` | Betikteki `GIZLI_JETON` ile birebir aynı metin |

Sonra haber verin: dağıtımı yapıp gerçek bir başvurunun hem e-posta olarak
geldiğini hem de tabloya düştüğünü doğrularım.

---

## Sonrasında

`Durum` sütunu sizin için: `Yeni` → `Arandı` → `Randevu` → `Kapandı`. Tabloda
filtre açarsanız (Veri → Filtre görünümü) yalnızca `Yeni` olanları görüp
takip edebilirsiniz.

## Betiği sonradan değiştirirseniz

Yalnızca kaydetmek yayındaki sürümü güncellemez — yeniden dağıtmanız gerekir.
Ama **"Yeni dağıtım" DEMEYİN:** o, size yeni bir adres verir ve Vercel'deki
`CRM_WEBHOOK_URL` eskide kalır; CRM sessizce durur, hiçbir hata görmezsiniz.

Doğrusu, var olan dağıtımı güncellemektir:

1. **Dağıt** → **Dağıtımları yönet**
2. Listedeki dağıtımın sağındaki **kalem (düzenle) simgesine** tıklayın
3. **Sürüm** açılır menüsünden **"Yeni sürüm"** seçin
4. **Dağıt** deyin

Adres aynı kalır, Vercel'de hiçbir şey değiştirmeniz gerekmez.
