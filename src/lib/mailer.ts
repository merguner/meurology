import nodemailer from 'nodemailer';

/**
 * E-POSTA TAŞIYICISI
 * ------------------------------------------------------------------
 * Gönderim kliniğin KENDİ SMTP hesabı üzerinden yapılır (info@meurology.com).
 * Üçüncü parti bir e-posta servisi (Resend, SendGrid vb.) kullanılmaz:
 * hasta verisi yurt dışındaki ek bir işleyiciye gitmediği için KVKK
 * açısından bu yol daha az yük getirir.
 *
 * SAHTE MOD — MAIL_FAKE=1
 * Bu değişken açıkken HİÇBİR e-posta gönderilmez; mesajlar yalnızca
 * bellekte biriktirilir. Testler ve yerel denemeler bunu kullanır, böylece
 * gerçek veriyle gönderim yapılmaz.
 */

export interface MailMessage {
  from?: string;
  to: string;
  subject: string;
  html?: string;
  text?: string;
  replyTo?: string;
  attachments?: { filename: string; content: Uint8Array; contentType: string }[];
}

export interface MailTransport {
  sendMail(message: MailMessage): Promise<{ messageId: string }>;
}

/** Sahte modda gönderilmiş sayılan mesajlar — yalnızca test/denetim içindir. */
const outbox: MailMessage[] = [];

export function fakeOutbox(): readonly MailMessage[] {
  return outbox;
}

export function clearFakeOutbox(): void {
  outbox.length = 0;
}

export function isFakeMail(): boolean {
  return process.env.MAIL_FAKE === '1';
}

/** SMTP ayarları eksikse neyin eksik olduğunu söyleyen hata fırlatır. */
export function createMailTransport(): { transport: MailTransport; from: string } {
  if (isFakeMail()) {
    return {
      from: 'fake@localhost',
      transport: {
        async sendMail(message) {
          outbox.push(message);
          return { messageId: `fake-${outbox.length}` };
        }
      }
    };
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_PASS } = process.env;
  const missing = [
    !SMTP_HOST && 'SMTP_HOST',
    !SMTP_USER && 'SMTP_USER',
    !SMTP_PASS && 'SMTP_PASS'
  ].filter(Boolean);
  if (missing.length) {
    throw new Error(`SMTP ortam değişkenleri tanımlı değil: ${missing.join(', ')}`);
  }

  const port = Number(SMTP_PORT) || 465;
  // SMTP_SECURE açıkça 'false' değilse SSL (465) varsayılır.
  const secure = SMTP_SECURE ? SMTP_SECURE === 'true' : port === 465;

  return {
    from: SMTP_USER as string,
    transport: nodemailer.createTransport({
      host: SMTP_HOST,
      port,
      secure,
      auth: { user: SMTP_USER as string, pass: SMTP_PASS as string }
    }) as unknown as MailTransport
  };
}
