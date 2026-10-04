import { NextResponse } from 'next/server';
import { siteConfig } from '@/config/site';

export const runtime = 'nodejs';

/**
 * KARTLI ÖDEME — İSKELET (sağlayıcı seçilmedi, uç nokta pasif).
 * ------------------------------------------------------------------
 * Gerçek entegrasyon (iyzico / Stripe) bu dosyada yapılacak. Şu an yalnızca
 * yapılandırma bayrağına bakar; kapalıysa "not_configured" döner ve UI
 * "kullanılamıyor" mesajı gösterir.
 *
 * Entegrasyon adımları (TODO):
 *  1. Sağlayıcı SDK'sını ekleyin (ör. iyzipay / stripe).
 *  2. Anahtarları .env.local'e girin (ör. IYZICO_API_KEY / STRIPE_SECRET_KEY).
 *  3. Aşağıda bir "checkout session / ödeme formu" oluşturup URL/token döndürün.
 *  4. Sağlayıcı callback/webhook route'u ekleyip ödeme sonucunu doğrulayın.
 *  5. siteConfig.consultation.cardPaymentEnabled = true yapın.
 */
export async function POST(request: Request) {
  let body: { code?: string; amountEUR?: number; name?: string; country?: string } = {};
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'invalid_json' }, { status: 400 });
  }

  if (!siteConfig.consultation.cardPaymentEnabled) {
    // Entegrasyon henüz aktif değil — UI "kullanılamıyor" mesajına düşer.
    return NextResponse.json({ ok: false, error: 'not_configured' });
  }

  // ---- GERÇEK ENTEGRASYON BURAYA ----
  // const provider = new Iyzipay({ apiKey: process.env.IYZICO_API_KEY, ... });
  // const session = await provider.checkoutForm.create({ price: body.amountEUR, ... });
  // return NextResponse.json({ ok: true, checkoutUrl: session.paymentPageUrl });

  // Bayrak açık ama kod henüz yazılmadıysa güvenli varsayılan:
  return NextResponse.json({ ok: false, error: 'not_implemented' });
}
