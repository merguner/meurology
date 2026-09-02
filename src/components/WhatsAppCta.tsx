import { useTranslations } from 'next-intl';
import { whatsappLink } from '@/config/site';
import { Icon } from './Icon';

/** Satır içi WhatsApp CTA butonu (opsiyonel ön-dolu mesaj). */
export function WhatsAppCta({
  message,
  className = ''
}: {
  message?: string;
  className?: string;
}) {
  const t = useTranslations('Common');
  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn-whatsapp ${className}`}
    >
      <Icon name="whatsapp" size={18} />
      {t('whatsappCta')}
    </a>
  );
}
