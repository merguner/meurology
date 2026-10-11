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
 * Logo: public/brand/me-urology.svg (scripts/build-logo.js) olduğu gibi gömülür.
 *
 * 11 Eki 2026'ya kadar burada koyu zeminde ayrışsın diye beyaz kutulu,
 * altın çerçeveli ayrı bir "ters logo" çiziliyordu. Yeni logonun ince mavi
 * iç çizgisi lacivert zeminde de kutuyu belli ettiği için artık sitedeki
 * logoyla birebir aynı görsel kullanılıyor.
 */
const LOGO = fs.readFileSync(path.join('public', 'brand', 'me-urology.svg'), 'utf8');
const LOGO_IC = LOGO.slice(LOGO.indexOf('>') + 1, LOGO.lastIndexOf('</svg>'));
const LOGO_VB = LOGO.match(/viewBox="([^"]+)"/)[1];
function emblem(x, y, size) {
  return `<svg x="${x}" y="${y}" width="${size}" height="${size}" viewBox="${LOGO_VB}">${LOGO_IC}</svg>`;
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
