import { useLocale } from 'next-intl';
import { accreditations } from '@/content/trust';
import { anyHospitalHas } from '@/config/hospitals';
import type { Locale } from '@/i18n/routing';
import { Icon } from './Icon';

/**
 * Akreditasyon rozetleri — her biri sadece logo değil, ne anlama geldiğini
 * anlatan 1 cümlelik açıklama ile gösterilir. (Logolar eklendiğinde
 * `logo` alanı üzerinden next/image ile değiştirilebilir.)
 *
 * JCI ve ISO 9001 rozetleri artık config/hospitals.ts'e bağlıdır: hiçbir
 * hastanede o belge işaretli değilse rozet HİÇ gösterilmez. Böylece
 * doğrulama sonucu belge düşerse metin değil, tek bir boolean değişir.
 */
export function AccreditationBadges({ only }: { only?: string[] }) {
  const locale = useLocale() as Locale;
  const gated: Record<string, boolean> = {
    jci: anyHospitalHas('jci'),
    iso: anyHospitalHas('iso9001')
  };
  const available = accreditations.filter((a) => gated[a.id] !== false);
  const items = only ? available.filter((a) => only.includes(a.id)) : available;
  return (
    <ul className={only ? 'grid max-w-xl gap-4' : 'grid gap-4 sm:grid-cols-2 lg:grid-cols-4'}>
      {items.map((a) => {
        const c = a.i18n[locale] ?? a.i18n.en ?? a.i18n.tr!;
        return (
          <li key={a.id} className="card flex flex-col gap-2 p-5">
            <span className="flex items-center gap-2 text-primary">
              <Icon name="shield" size={20} />
              <span className="font-serif text-base font-bold text-fg">{c.name}</span>
            </span>
            <p className="text-sm leading-relaxed text-muted">{c.explainer}</p>
          </li>
        );
      })}
    </ul>
  );
}
