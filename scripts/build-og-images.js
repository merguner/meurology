/*
 * Dile gore paylasim gorseli (OG) uretir: public/brand/og-<locale>.png
 * 1200x630, lacivert zemin, altin + turkuaz vurgu.
 * SVG kaynak koddan sharp ile rasterize edilir (PNG; SVG YAYINLANMAZ).
 */
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const W = 1200;
const H = 630;
const PAD = 86;

// Meta.defaultTitle'in "—" sonrasi kismiyla ayni tutulur.
const HEADING = {
  tr: 'Uluslararası Ürolojik Cerrahi',
  en: 'International Urological Surgery',
  ar: 'جراحة المسالك البولية الدولية'
};

// content/surgeon.ts fullName + Home.heroSpecialty ile ayni.
const DOCTOR = {
  tr: 'Doç. Dr. Müslüm Ergün · Üroloji',
  en: 'Assoc. Prof. Dr. Müslüm Ergün · Urology',
  ar: 'الأستاذ المشارك د. مسلم إرغن · المسالك البولية'
};

const FONT = "Segoe UI, Noto Sans, DejaVu Sans, Arial, sans-serif";
const esc = (t) => t.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/**
 * Amblem: beyaz yuvarlatilmis kare + altin cerceve + marka mavisi ME.
 *
 * KOYU ZEMINDE BEYAZ KUTU BILEREK KORUNDU ("ters logo"): OG gorselinin
 * zemini koyu lacivert; Canva'daki siyah kutulu mark bu zeminde ayrismiyor.
 * 8 Eki 2026'da yalnizca ME harflerinin rengi sitenin logosuyla ayni tona
 * (#2D6DDC) cekildi; onceden #0A5CA8 idi ve ayni markanin iki farkli
 * mavisi olusuyordu.
 */
function emblem(x, y, size) {
  const s = (size * 0.74) / 132; // amblem viewBox 132x132
  const inner = size * 0.74;
  const ox = x + (size - inner) / 2;
  const oy = y + (size - inner) / 2;
  return `
  <rect x="${x}" y="${y}" width="${size}" height="${size}" rx="${size * 0.22}" fill="#FFFFFF" stroke="#E0A542" stroke-width="4"/>
  <g transform="translate(${ox},${oy}) scale(${s}) translate(15.73,12.423)" fill="#2D6DDC">
    <path transform="translate(6.304958,73.194123)" d="M 4.703125 -39.234375 L 14.015625 -39.234375 L 24.328125 -22.640625 L 34.640625 -39.234375 L 43.9375 -39.234375 L 43.9375 0 L 35.359375 0 L 35.359375 -25.609375 L 24.328125 -8.859375 L 24.09375 -8.859375 L 13.171875 -25.453125 L 13.171875 0 L 4.703125 0 Z"/>
    <path transform="translate(54.953542,73.194123)" d="M 4.703125 -39.234375 L 34.296875 -39.234375 L 34.296875 -31.546875 L 13.28125 -31.546875 L 13.28125 -23.59375 L 31.78125 -23.59375 L 31.78125 -15.921875 L 13.28125 -15.921875 L 13.28125 -7.671875 L 34.578125 -7.671875 L 34.578125 0 L 4.703125 0 Z"/>
  </g>`;
}

function svgFor(loc) {
  const rtl = loc === 'ar';
  const tile = 116;
  const tileX = rtl ? W - PAD - tile : PAD;
  const tileY = 150;
  const anchor = rtl ? 'end' : 'start';
  const textX = rtl ? W - PAD : PAD;
  const brandX = rtl ? tileX - 34 : tileX + tile + 34;

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0B1420"/>
      <stop offset="55%" stop-color="#102A46"/>
      <stop offset="100%" stop-color="#0B1420"/>
    </linearGradient>
    <linearGradient id="bar" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#E0A542"/>
      <stop offset="45%" stop-color="#E0A542"/>
      <stop offset="100%" stop-color="#2FB8AE"/>
    </linearGradient>
    <linearGradient id="hair" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#2FB8AE"/>
      <stop offset="55%" stop-color="#0A5CA8"/>
      <stop offset="100%" stop-color="#0B1420"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect width="${W}" height="5" fill="url(#hair)"/>
  <rect y="${H - 14}" width="${W}" height="14" fill="url(#bar)"/>
  ${emblem(tileX, tileY, tile)}
  <text x="${brandX}" y="236" text-anchor="${rtl ? 'end' : 'start'}" font-family="${FONT}" font-size="64" font-weight="700" fill="#FFFFFF">ME Urology Clinic</text>
  <text x="${textX}" y="376" text-anchor="${anchor}" font-family="${FONT}" font-size="40" font-weight="600" fill="#9CCBF0">${esc(HEADING[loc])}</text>
  <text x="${textX}" y="452" text-anchor="${anchor}" font-family="${FONT}" font-size="32" font-weight="600" fill="#E7B45E">${esc(DOCTOR[loc])}</text>
  <text x="${textX}" y="504" text-anchor="${anchor}" font-family="${FONT}" font-size="27" fill="#AFBECF" direction="ltr">www.meurology.com</text>
</svg>`;
}

(async () => {
  const out = path.join('public', 'brand');
  for (const loc of Object.keys(HEADING)) {
    const file = path.join(out, `og-${loc}.png`);
    await sharp(Buffer.from(svgFor(loc)), { density: 144 })
      .resize(W, H, { fit: 'fill' })
      .png({ compressionLevel: 9, palette: true })
      .toFile(file);
    const st = fs.statSync(file);
    console.log(`${file}  ${(st.size / 1024).toFixed(0)} KB`);
  }
})();
