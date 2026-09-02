/** Sayfa başlığı bloğu — iç sayfalar için tutarlı üst alan. */
export function PageHero({
  eyebrow,
  title,
  description
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="border-b border-border bg-surface">
      <div className="container-content py-12 md:py-16">
        {eyebrow && <p className="label-mono mb-3">{eyebrow}</p>}
        <h1 className="max-w-3xl text-3xl font-bold leading-tight md:text-4xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}

/** Bölüm başlığı (ikon opsiyonel). */
export function SectionHeading({
  title,
  children
}: {
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="mb-5 flex items-center gap-3">
      {children}
      <h2 className="text-xl font-bold md:text-2xl">{title}</h2>
    </div>
  );
}
