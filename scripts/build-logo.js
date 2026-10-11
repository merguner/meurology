/*
 * ME UROLOGY LOGOSU — tek kaynaktan üç dosya üretir (11 Eki 2026, Dr. Ergün'ün tarifi):
 *   public/brand/me-urology.svg  tam logo (ME + çizgi + UROLOGY) — başlık, alt bilgi, OG
 *   public/brand/me-urology.png  aynısı 1024x1024 PNG — Canva sosyal medya şablonları
 *   public/brand/emblem.svg      yalnız ME — küçük boyutlar için
 *   src/app/icon.svg             tarayıcı sekmesi simgesi (= emblem.svg)
 *   src/app/apple-icon.png       telefon ana ekran simgesi, 180x180 (tam logo, köşesiz)
 *
 * Tasarım: siyah yuvarlak kare (köşe yarıçapı kenarın %14'ü), ince elektrik
 * mavisi iç çizgi (#2868E0, kenarın %1,5'i), büyük mavi "ME", altında harfler
 * genişliğinde ince mavi çizgi, onun altında beyaz (#F8F8F8) "UROLOGY"
 * (yüksekliği ME'nin %25'i, geniş harf aralığı). Gölge, degrade, parlama yok.
 *
 * Harfler sitenin marka fontu Poppins'ten YOLA çevrilir: SVG <img> olarak
 * kullanıldığında web fontu yüklenemez, <text> her cihazda farklı görünürdü.
 *
 * Çalıştırma (iki paket yalnızca bu betik için, projeye eklenmez):
 *   npm i --no-save opentype.js@1.3.4 @fontsource/poppins@5.1.0
 *   node scripts/build-logo.js
 *   node scripts/build-og-images.js   (OG görselleri yeni logoyu buradan alır)
 */
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const opentype = require('opentype.js');

const fontDosyasi = (w) =>
  path.join(path.dirname(require.resolve('@fontsource/poppins/package.json')), `files/poppins-latin-${w}-normal.woff`);
const BOLD = opentype.loadSync(fontDosyasi(700));
const SEMI = opentype.loadSync(fontDosyasi(600));

const S = 512;
const MAVI = '#2868E0';
const BEYAZ = '#F8F8F8';

/** Metni yola çevirir (kerning + harf aralığı, em cinsinden); mürekkep sınırlarını da döndürür. */
function metinYolu(font, text, size, tracking) {
  const scale = size / font.unitsPerEm;
  const glifler = font.stringToGlyphs(text);
  let x = 0;
  let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
  const d = [];
  glifler.forEach((g, i) => {
    const p = g.getPath(x, 0, size);
    const bb = p.getBoundingBox();
    minX = Math.min(minX, bb.x1); maxX = Math.max(maxX, bb.x2);
    minY = Math.min(minY, bb.y1); maxY = Math.max(maxY, bb.y2);
    d.push(p.toPathData(2));
    x += g.advanceWidth * scale;
    if (i < glifler.length - 1) x += font.getKerningValue(g, glifler[i + 1]) * scale + tracking * size;
  });
  return { d: d.join(''), minX, minY, w: maxX - minX, h: maxY - minY };
}

/** Mürekkebi yatayda cx'e ortalayıp üst kenarını ustY'ye koyan path öğesi. */
function yerlestir(o, cx, ustY, fill) {
  const tx = (cx - (o.minX + o.w / 2)).toFixed(2);
  const ty = (ustY - o.minY).toFixed(2);
  return `<path fill="${fill}" transform="translate(${tx} ${ty})" d="${o.d}"/>`;
}

/**
 * @param {object} o
 * @param {boolean} o.tam        UROLOGY satırı dahil mi
 * @param {number}  o.kose       dış köşe yarıçapı (kenara oran; 0 = köşesiz)
 * @param {number}  o.icPay      iç çizginin kenardan uzaklığı (oran)
 * @param {number}  o.cizgi      iç çizgi kalınlığı (oran)
 * @param {number}  o.icKose     iç çizgi köşe yarıçapı (oran)
 * @param {number}  o.meGenislik ME'nin kenara oranla genişliği
 */
function logo({ tam, kose, icPay, cizgi, icKose, meGenislik }) {
  const ilk = metinYolu(BOLD, 'ME', 100, 0.02);
  const me = metinYolu(BOLD, 'ME', (100 * S * meGenislik) / ilk.w, 0.02);
  const cx = S / 2;
  let icerik;
  if (tam) {
    const deneme = metinYolu(SEMI, 'UROLOGY', 100, 0.14);
    const uro = metinYolu(SEMI, 'UROLOGY', (100 * me.h * 0.25) / deneme.h, 0.14);
    const kural = Math.max(4, Math.round(S * 0.011));
    const bosluk = S * 0.05;
    const grup = me.h + bosluk + kural + bosluk + uro.h;
    const ust = (S - grup) / 2 - S * 0.01; // optik olarak hafif yukarı
    const kuralY = ust + me.h + bosluk;
    icerik = [
      yerlestir(me, cx, ust, MAVI),
      `<rect x="${(cx - me.w / 2).toFixed(2)}" y="${kuralY.toFixed(2)}" width="${me.w.toFixed(2)}" height="${kural}" fill="${MAVI}"/>`,
      yerlestir(uro, cx, kuralY + kural + bosluk, BEYAZ)
    ].join('\n  ');
  } else {
    icerik = yerlestir(me, cx, (S - me.h) / 2, MAVI);
  }
  const sw = +(S * cizgi).toFixed(2);
  const ic = S * icPay + sw / 2;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${S} ${S}" role="img" aria-label="ME Urology">
  <!-- scripts/build-logo.js ile üretildi; elle düzenlemeyin. -->
  <rect width="${S}" height="${S}" rx="${+(S * kose).toFixed(1)}" fill="#000000"/>
  <rect x="${ic}" y="${ic}" width="${S - 2 * ic}" height="${S - 2 * ic}" rx="${+(S * icKose).toFixed(1)}" fill="none" stroke="${MAVI}" stroke-width="${sw}"/>
  ${icerik}
</svg>
`;
}

const TAM = logo({ tam: true, kose: 0.14, icPay: 0.035, cizgi: 0.015, icKose: 0.105, meGenislik: 0.64 });
// 16–32 px'te UROLOGY okunmaz; iç çizgi de %1,5'te kaybolur, bu yüzden kalın.
const AMBLEM = logo({ tam: false, kose: 0.14, icPay: 0.04, cizgi: 0.045, icKose: 0.1, meGenislik: 0.7 });
// iOS simgeyi kendi maskesiyle (~%22 köşe) keser: köşesiz zemin, iç çizgi maskenin içinde kalsın.
const APPLE = logo({ tam: true, kose: 0, icPay: 0.07, cizgi: 0.018, icKose: 0.15, meGenislik: 0.6 });

(async () => {
  const yaz = (p, s) => { fs.writeFileSync(p, s); console.log(`${p}  ${(s.length / 1024).toFixed(1)} KB`); };
  yaz('public/brand/me-urology.svg', TAM);
  yaz('public/brand/emblem.svg', AMBLEM);
  yaz('src/app/icon.svg', AMBLEM);
  // PNG kopya: Canva görsel değiştirmede yalnızca raster kabul ediyor (sosyal medya şablonları).
  await sharp(Buffer.from(TAM), { density: 300 }).resize(1024, 1024).png({ compressionLevel: 9 }).toFile('public/brand/me-urology.png');
  console.log('public/brand/me-urology.png  1024x1024');
  await sharp(Buffer.from(APPLE), { density: 144 }).resize(180, 180).png({ compressionLevel: 9 }).toFile('src/app/apple-icon.png');
  console.log('src/app/apple-icon.png  180x180');
})();
