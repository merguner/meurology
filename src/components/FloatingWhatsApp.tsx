import { getTranslations } from 'next-intl/server';
import { whatsappLink } from '@/config/site';
import { Icon } from './Icon';

/** Ekranda sabit kalan WhatsApp hızlı erişim düğmesi. */
export async function FloatingWhatsApp() {
  const t = await getTranslations('Common');
  return (
    // role="complementary" (aside) — içerik bir landmark içinde olsun (axe "region").
    <aside role="complementary" aria-label={t('whatsappCta')}>
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t('whatsappCta')}
        className="fixed bottom-5 end-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-[#062b14] shadow-lg transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
      >
        <Icon name="whatsapp" size={28} />
      </a>
    </aside>
  );
}
