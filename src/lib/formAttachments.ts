/**
 * ÖN DEĞERLENDİRME FORMU — DOSYA EKLERİ
 * ------------------------------------------------------------------
 * Hastanın yüklediği belgeler (tahlil, görüntüleme raporu, epikriz)
 * SUNUCUDA SAKLANMAZ. Yalnızca kliniğe giden bildirim e-postasına ek
 * olarak iliştirilir ve istek bittiğinde bellekten düşer. Bu, S3/R2
 * gibi bir depo kurulana kadar KVKK açısından en az veri tutan yoldur.
 *
 * Bu dosya BİLEREK bağımsızdır: next, nodemailer veya '@/...' takma adı
 * içermez; böylece doğrudan `node --test` ile birim testi yazılabilir.
 */

export const MAX_ATTACHMENTS = 3;
export const MAX_ATTACHMENT_BYTES = 10 * 1024 * 1024; // dosya başına 10 MB

/** Form alanındaki `accept` niteliği bu listeden türetilir. */
export const ALLOWED_ATTACHMENT_ACCEPT = '.pdf,.jpg,.jpeg,.png,application/pdf,image/jpeg,image/png';

export type AttachmentErrorCode =
  | 'too_many_files'
  | 'file_too_large'
  | 'file_type_not_allowed'
  | 'file_empty';

export interface IncomingFile {
  name: string;
  /** Tarayıcının bildirdiği MIME — TEK BAŞINA GÜVENİLMEZ. */
  type: string;
  bytes: Uint8Array;
}

export interface MailAttachment {
  filename: string;
  content: Uint8Array;
  contentType: string;
}

export type AttachmentResult =
  | { ok: true; attachments: MailAttachment[] }
  | { ok: false; error: AttachmentErrorCode; filename?: string };

/**
 * TÜRÜ İÇERİĞE BAKARAK BELİRLER.
 * Uzantı ve tarayıcının bildirdiği MIME kolayca değiştirilebilir; bu yüzden
 * ilk baytlara (magic number) bakılır. Tanınmayan içerik reddedilir —
 * ".pdf" adıyla gönderilen çalıştırılabilir bir dosya kliniğin gelen
 * kutusuna ek olarak düşmemelidir.
 */
export function sniffType(bytes: Uint8Array): 'application/pdf' | 'image/jpeg' | 'image/png' | null {
  if (bytes.length < 8) return null;
  // %PDF
  if (bytes[0] === 0x25 && bytes[1] === 0x50 && bytes[2] === 0x44 && bytes[3] === 0x46) {
    return 'application/pdf';
  }
  // JPEG: FF D8 FF
  if (bytes[0] === 0xff && bytes[1] === 0xd8 && bytes[2] === 0xff) {
    return 'image/jpeg';
  }
  // PNG: 89 50 4E 47 0D 0A 1A 0A
  const png = [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a];
  if (png.every((b, i) => bytes[i] === b)) return 'image/png';
  return null;
}

/**
 * Dosya adını e-posta eki için güvenli hâle getirir: dizin bileşenleri,
 * denetim karakterleri ve aşırı uzunluk temizlenir. Ad boşalırsa türe
 * göre genel bir ad verilir.
 */
export function safeFilename(raw: string, contentType: string): string {
  const base = raw.split(/[\\/]/).pop() ?? '';
  const cleaned = base
    // eslint-disable-next-line no-control-regex
    .replace(/[\u0000-\u001f\u007f]/g, '')
    .replace(/[<>:"|?*]/g, '_')
    .trim()
    .slice(0, 120);
  if (cleaned && cleaned !== '.' && cleaned !== '..') return cleaned;
  const ext =
    contentType === 'application/pdf' ? 'pdf' : contentType === 'image/png' ? 'png' : 'jpg';
  return `belge.${ext}`;
}

/**
 * Gelen dosyaları doğrular ve e-posta eklerine dönüştürür.
 * İlk hatada durur: hastaya hangi dosyanın sorun çıkardığı söylenebilsin.
 */
export function validateAttachments(files: IncomingFile[]): AttachmentResult {
  if (files.length > MAX_ATTACHMENTS) {
    return { ok: false, error: 'too_many_files' };
  }
  const attachments: MailAttachment[] = [];
  for (const f of files) {
    if (f.bytes.length === 0) {
      return { ok: false, error: 'file_empty', filename: f.name };
    }
    if (f.bytes.length > MAX_ATTACHMENT_BYTES) {
      return { ok: false, error: 'file_too_large', filename: f.name };
    }
    const sniffed = sniffType(f.bytes);
    if (!sniffed) {
      return { ok: false, error: 'file_type_not_allowed', filename: f.name };
    }
    attachments.push({
      filename: safeFilename(f.name, sniffed),
      content: f.bytes,
      contentType: sniffed
    });
  }
  return { ok: true, attachments };
}
