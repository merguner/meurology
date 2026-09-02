import { Icon } from './Icon';

export interface VerifiedItem {
  label: string;
  value: string;
  note?: string;
}

/**
 * Doğrulanabilir güven bileşeni — diploma tescil no, dernek üyeliği, vaka
 * sayısı gibi bilgileri göze çarpan, ayrı bir blokta gösterir.
 */
export function VerifiedInfo({
  title,
  note,
  items
}: {
  title: string;
  note?: string;
  items: VerifiedItem[];
}) {
  return (
    <div className="rounded-xl border border-primary/25 bg-primary-soft/50 p-6">
      <div className="mb-4 flex items-center gap-2 text-primary">
        <Icon name="shield" size={20} />
        <h3 className="font-serif text-lg font-bold text-fg">{title}</h3>
      </div>
      {note && <p className="mb-4 text-sm text-muted">{note}</p>}
      <dl className="grid gap-4 sm:grid-cols-2">
        {items.map((item, i) => (
          <div key={i} className="rounded-lg border border-border bg-surface p-4">
            <dt className="label-mono mb-1">{item.label}</dt>
            <dd className="font-mono text-sm font-semibold text-fg">{item.value}</dd>
            {item.note && <p className="mt-1 text-xs text-muted">{item.note}</p>}
          </div>
        ))}
      </dl>
    </div>
  );
}
