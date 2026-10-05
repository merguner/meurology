import dynamic from 'next/dynamic';
import type { Locale } from '@/i18n/routing';
import { getPathname } from '@/i18n/navigation';
import { assistantEnabled } from '@/config/assistant';

/**
 * Sohbet balonunun SUNUCU tarafındaki kapısı.
 *
 * ANTHROPIC_API_KEY tanımlı değilse hiçbir şey render edilmez: istemciye
 * ne bileşen, ne de "asistan var" bilgisi gider. Anahtarın kendisi
 * NEXT_PUBLIC_ olmadığı için tarayıcıya hiçbir koşulda ulaşmaz.
 *
 * DİKKAT: [locale] düzeni statik üretildiği için bu kontrol DERLEME
 * ANINDA yapılır. Anahtar sonradan eklenirse yeniden derleme gerekir.
 *
 * Sohbet bileşeni yalnızca gerektiğinde indirilsin diye `dynamic` ile
 * ayrı bir parçaya alınır; ilk yükte ana paketi büyütmez.
 */
const AsistanSohbet = dynamic(() => import('./AsistanSohbet'));

export function AssistantBubble({ locale }: { locale: Locale }) {
  if (!assistantEnabled()) return null;

  // Gizlilik bağlantısı dile göre yerelleştirilmiş yoldur (/en/legal/kvkk gibi).
  const gizlilik = getPathname({ locale, href: '/yasal/kvkk' });

  return <AsistanSohbet dil={locale} gizlilikLinki={gizlilik} />;
}
