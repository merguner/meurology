import Image from 'next/image';

/**
 * Hasta fotoğrafı galerisi (next/image ile otomatik optimize + lazy-load).
 * Fotoğraf yoksa hiçbir şey render etmez — çağıran sayfada koşul gerekmez.
 *
 * NOT: Androloji ve rekonstrüktif tedavilerde photosForTreatment() daima boş
 * dizi döndürdüğü için bu bileşen o sayfalarda otomatik olarak gizlenir.
 */
export function PatientGallery({
  photos,
  alt,
  title
}: {
  photos: string[];
  alt: string;
  title?: string;
}) {
  if (!photos.length) return null;

  return (
    <div>
      {title ? <h2 className="mb-4 text-xl font-bold md:text-2xl">{title}</h2> : null}
      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
        {photos.map((src) => (
          <li
            key={src}
            className="relative aspect-[3/4] overflow-hidden rounded-xl border border-border bg-surface-2"
          >
            <Image
              src={src}
              alt={alt}
              fill
              sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 22vw"
              className="object-cover"
              loading="lazy"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
