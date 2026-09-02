import { NextResponse } from 'next/server';
import { siteConfig } from '@/config/site';

export const runtime = 'nodejs';

/**
 * KARTLI ÖDEME — İSKELET (placeholder).
 * ------------------------------------------------------------------
 * Gerçek entegrasyon (iyzico / Stripe) buraya eklenecek. Şu an yalnızca
 * yapılandırma bayrağına bakar; kapalıysa "not_configured" döner ve UI
 * "yakında" mesajı gösterir.
 *
 * Entegrasyon adımları (TODO):
 *  1. Sağlayıcı SDK'sını ekleyin (ör. iyzipay / stripe).
 *  2. Anahtarları .env.local'e girin (ör. IYZICO_API_KEY / STRIPE_SECRET_KEY).
 *  3. Aşağıda bir "checkout session / ödeme formu" oluşturup URL/token döndürün.
 *  4. Sağlayıcı callback/webhook route'u ekleyip ödeme sonucunu doğrulayın.
 *  5. siteConfig.consultation.cardPaymentEnabled = true yapın.
 */
export async function POST(request: Request) {
  let body: { code?: string; amountTRY?: number; name?: string; country?: string } = {};
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'invalid_json' }, { status: 400 });
  }

  if (!siteConfig.consultation.cardPaymentEnabled) {
    // Entegrasyon henüz aktif değil — UI "yakında" mesajına düşer.
    return NextResponse.json({ ok: false, error: 'not_configured' });
  }

  // ---- GERÇEK ENTEGRASYON BURAYA ----
  // const provider = new Iyzipay({ apiKey: process.env.IYZICO_API_KEY, ... });
  // const session = await provider.checkoutForm.create({ price: body.amountTRY, ... });
  // return NextResponse.json({ ok: true, checkoutUrl: session.paymentPageUrl });

  // Bayrak açık ama kod henüz yazılmadıysa güvenli varsayılan:
  return NextResponse.json({ ok: false, error: 'not_implemented' });
}
