import { getTranslations } from 'next-intl/server';
import { whatsappLink, siteConfig } from '@/config/site';
import { Icon } from './Icon';

/**
 * Sabit iletişim erişimi (prompt m.4.2 son madde).
 *
 * Mobilde: ekranın altında WhatsApp + Ara çubuğu (iki düğme, CTA kalabalığı yok).
 * Masaüstünde: sağ altta tek WhatsApp balonu — mevcut davranış korunur.
 *
 * Çubuk sayfa içeriğini örtmesin diye body'ye mobilde alt dolgu eklenir
 * (globals.css: `body { padding-bottom: ... }` yerine burada spacer kullanılır).
 */
export async function FloatingWhatsApp() {
  const t = await getTranslations('Common');
  const tc = await getTranslations('Contact');

  return (
    <aside role="complementary" aria-label={t('whatsappCta')}>
      {/*
        Mobil: alt sabit çubuk.

        GENİŞLİK AÇIKÇA VERİLİR (w-full) — `inset-x-0` tek başına yetmiyordu:
        çubuk içeriğine göre genişleyip (ör. Arapçada 1501 px) sayfada yatay
        taşmaya yol açıyordu. Ölçümde /ar mobilde belge genişliği 375 px yerine
        10375 px çıkıyordu. Alt öğelere `min-w-0` eklenmesi de gereklidir:
        grid öğelerinin örtük en küçük boyutu içerik genişliğidir ve bu olmadan
        sütunlar 1fr'ye sığmaz. `overflow-hidden` son güvenlik ağıdır.
      */}
      <div className="fixed inset-x-0 bottom-0 z-40 grid w-full grid-cols-2 overflow-hidden border-t border-border bg-surface md:hidden">
        <a
          href={`tel:${siteConfig.phoneIntl}`}
          aria-label={tc('callCta')}
          className="flex min-w-0 items-center justify-center gap-2 py-3 text-sm font-medium text-fg transition-colors hover:bg-surface-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring"
        >
          <Icon name="phone" size={18} />
          {tc('callCta')}
        </a>
        {/*
          aria-label KULLANILMAZ: düğmenin görünen metni zaten "WhatsApp".
          Daha uzun bir aria-label vermek, erişilebilir adın görünen metni
          içermemesine yol açıyordu (WCAG 2.5.3 "Label in Name" ihlali;
          Lighthouse label-content-name-mismatch). Görünen metin yeterli ad.
        */}
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-w-0 items-center justify-center gap-2 bg-[#25D366] py-3 text-sm font-medium text-[#062b14] transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring"
        >
          <Icon name="whatsapp" size={18} />
          WhatsApp
        </a>
      </div>
      {/* Mobilde çubuğun içeriği örtmemesi için boşluk */}
      <div aria-hidden className="h-[52px] md:hidden" />

      {/* Masaüstü: sağ alt balon */}
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t('whatsappCta')}
        className="fixed bottom-5 end-5 z-40 hidden h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-[#062b14] shadow-lg transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-bg md:flex"
      >
        <Icon name="whatsapp" size={28} />
      </a>
    </aside>
  );
}
