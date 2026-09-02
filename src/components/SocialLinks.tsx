import { siteConfig } from '@/config/site';
import { Icon, type IconName } from './Icon';

const items: { href: string; label: string; icon: IconName; hover: string }[] = [
  { href: siteConfig.social.youtube, label: 'YouTube', icon: 'youtube', hover: 'hover:text-[#FF0000]' },
  { href: siteConfig.social.instagram, label: 'Instagram', icon: 'instagram', hover: 'hover:text-[#E1306C]' },
  { href: siteConfig.social.linkedin, label: 'LinkedIn', icon: 'linkedin', hover: 'hover:text-[#0A66C2]' }
];

/** Sosyal medya ikon bağlantıları. aria-label marka adını birebir kullanır. */
export function SocialLinks({ className = '' }: { className?: string }) {
  return (
    <ul className={`flex items-center gap-2 ${className}`}>
      {items.map((s) => (
        <li key={s.label}>
          <a
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${siteConfig.name} — ${s.label}`}
            className={`inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface text-muted transition-colors ${s.hover}`}
          >
            <Icon name={s.icon} size={20} />
          </a>
        </li>
      ))}
    </ul>
  );
}
