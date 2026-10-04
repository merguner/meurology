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
      {/* Mobil: alt sabit çubuk */}
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-border bg-surface-1 md:hidden">
        <a
          href={`tel:${siteConfig.phoneIntl}`}
          aria-label={tc('callCta')}
          className="flex items-center justify-center gap-2 py-3 text-sm font-medium text-fg transition-colors hover:bg-surface-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring"
        >
          <Icon name="phone" size={18} />
          {tc('callCta')}
        </a>
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t('whatsappCta')}
          className="flex items-center justify-center gap-2 bg-[#25D366] py-3 text-sm font-medium text-[#062b14] transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring"
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
