import test from 'node:test';
import assert from 'node:assert/strict';

import {
  MAX_ATTACHMENTS,
  MAX_ATTACHMENT_BYTES,
  safeFilename,
  sniffType,
  validateAttachments
} from '../src/lib/formAttachments.ts';

/** Gerçek dosya kullanılmaz; yalnızca tür imzasını taşıyan sahte baytlar. */
const pdf = (n = 64) => {
  const b = new Uint8Array(n);
  b.set([0x25, 0x50, 0x44, 0x46, 0x2d, 0x31, 0x2e, 0x37]); // %PDF-1.7
  return b;
};
const jpeg = (n = 64) => {
  const b = new Uint8Array(n);
  b.set([0xff, 0xd8, 0xff, 0xe0, 0x00, 0x10, 0x4a, 0x46]);
  return b;
};
const png = (n = 64) => {
  const b = new Uint8Array(n);
  b.set([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
  return b;
};
const file = (name, type, bytes) => ({ name, type, bytes });

test('tür içerikten belirlenir', () => {
  assert.equal(sniffType(pdf()), 'application/pdf');
  assert.equal(sniffType(jpeg()), 'image/jpeg');
  assert.equal(sniffType(png()), 'image/png');
  assert.equal(sniffType(new Uint8Array([0x4d, 0x5a, 0x90, 0, 0, 0, 0, 0])), null); // .exe
  assert.equal(sniffType(new Uint8Array(4)), null); // çok kısa
});

test('izin verilen üç tür kabul edilir', () => {
  const r = validateAttachments([
    file('tahlil.pdf', 'application/pdf', pdf()),
    file('rapor.jpg', 'image/jpeg', jpeg()),
    file('film.png', 'image/png', png())
  ]);
  assert.equal(r.ok, true);
  assert.equal(r.attachments.length, 3);
  assert.deepEqual(
    r.attachments.map((a) => a.contentType),
    ['application/pdf', 'image/jpeg', 'image/png']
  );
});

test('dosya sayısı sınırı uygulanır', () => {
  const many = Array.from({ length: MAX_ATTACHMENTS + 1 }, (_, i) =>
    file(`d${i}.pdf`, 'application/pdf', pdf())
  );
  const r = validateAttachments(many);
  assert.equal(r.ok, false);
  assert.equal(r.error, 'too_many_files');
});

test('10 MB üstü dosya reddedilir', () => {
  const big = pdf(MAX_ATTACHMENT_BYTES + 1);
  const r = validateAttachments([file('buyuk.pdf', 'application/pdf', big)]);
  assert.equal(r.ok, false);
  assert.equal(r.error, 'file_too_large');
});

test('tam 10 MB kabul edilir (sınır dahil)', () => {
  const r = validateAttachments([
    file('sinir.pdf', 'application/pdf', pdf(MAX_ATTACHMENT_BYTES))
  ]);
  assert.equal(r.ok, true);
});

test('adı .pdf olan ama içeriği farklı olan dosya reddedilir', () => {
  const exe = new Uint8Array(64);
  exe.set([0x4d, 0x5a, 0x90, 0x00]); // MZ (Windows yürütülebilir)
  const r = validateAttachments([file('rapor.pdf', 'application/pdf', exe)]);
  assert.equal(r.ok, false);
  assert.equal(r.error, 'file_type_not_allowed');
});

test('boş dosya reddedilir', () => {
  const r = validateAttachments([file('bos.pdf', 'application/pdf', new Uint8Array(0))]);
  assert.equal(r.ok, false);
  assert.equal(r.error, 'file_empty');
});

test('dosya adındaki dizin ve denetim karakterleri temizlenir', () => {
  assert.equal(safeFilename('../../etc/passwd', 'application/pdf'), 'passwd');
  assert.equal(safeFilename('C:\\Users\\x\\rapor.pdf', 'application/pdf'), 'rapor.pdf');
  assert.equal(safeFilename('', 'image/png'), 'belge.png');
  assert.equal(safeFilename('..', 'image/jpeg'), 'belge.jpg');
  assert.equal(safeFilename('a\u0000b.pdf', 'application/pdf'), 'ab.pdf');
});

test('ek yoksa sonuç boş listedir', () => {
  const r = validateAttachments([]);
  assert.equal(r.ok, true);
  assert.equal(r.attachments.length, 0);
});
