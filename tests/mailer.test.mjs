import test from 'node:test';
import assert from 'node:assert/strict';

/**
 * SAHTE E-POSTA SERVİSİ TESTİ.
 * MAIL_FAKE=1 iken hiçbir ağ bağlantısı kurulmamalı ve hiçbir gerçek
 * e-posta gönderilmemelidir. Testlerde gerçek hasta verisi KULLANILMAZ.
 */
process.env.MAIL_FAKE = '1';

const { createMailTransport, fakeOutbox, clearFakeOutbox, isFakeMail } = await import(
  '../src/lib/mailer.ts'
);

test('MAIL_FAKE=1 iken sahte taşıyıcı kullanılır', () => {
  assert.equal(isFakeMail(), true);
  const { transport, from } = createMailTransport();
  assert.equal(from, 'fake@localhost');
  assert.equal(typeof transport.sendMail, 'function');
});

test('sahte taşıyıcı mesajı gönderilmiş gibi kaydeder, ağa çıkmaz', async () => {
  clearFakeOutbox();
  const { transport } = createMailTransport();
  const res = await transport.sendMail({
    to: 'ornek@example.invalid',
    subject: 'Test başvurusu',
    text: 'gövde',
    attachments: [
      { filename: 'tahlil.pdf', content: new Uint8Array([0x25, 0x50, 0x44, 0x46]), contentType: 'application/pdf' }
    ]
  });
  assert.match(res.messageId, /^fake-/);
  const sent = fakeOutbox();
  assert.equal(sent.length, 1);
  assert.equal(sent[0].to, 'ornek@example.invalid');
  assert.equal(sent[0].attachments?.length, 1);
  assert.equal(sent[0].attachments?.[0].filename, 'tahlil.pdf');
});

test('SMTP ayarları eksikse gerçek mod net bir hata verir', () => {
  process.env.MAIL_FAKE = '0';
  const saved = {
    host: process.env.SMTP_HOST,
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  };
  delete process.env.SMTP_HOST;
  delete process.env.SMTP_USER;
  delete process.env.SMTP_PASS;
  assert.throws(() => createMailTransport(), /SMTP_HOST.*SMTP_USER.*SMTP_PASS/s);
  if (saved.host) process.env.SMTP_HOST = saved.host;
  if (saved.user) process.env.SMTP_USER = saved.user;
  if (saved.pass) process.env.SMTP_PASS = saved.pass;
  process.env.MAIL_FAKE = '1';
});
