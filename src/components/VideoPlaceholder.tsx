import { Icon } from './Icon';
import { LiteYouTube } from './LiteYouTube';

/**
 * YouTube adresinden video ID'sini çıkarır; YouTube değilse undefined.
 * watch?v=, youtu.be/, /embed/ ve nocookie biçimlerini kabul eder.
 */
function youtubeId(url: string): string | undefined {
  try {
    const u = new URL(url);
    if (u.hostname === 'youtu.be') return u.pathname.slice(1) || undefined;
    if (!/(^|\.)(youtube\.com|youtube-nocookie\.com)$/.test(u.hostname)) return undefined;
    const v = u.searchParams.get('v');
    if (v) return v;
    const m = u.pathname.match(/\/embed\/([^/?]+)/);
    return m?.[1];
  } catch {
    return undefined;
  }
}

/**
 * Hasta deneyimi / tanıtım videosu için yer tutucu.
 * Gerçek embed geldiğinde `embedUrl` verilerek video render edilir;
 * verilmezse görsel bir placeholder gösterilir (gerçek içerik üretilmez).
 *
 * YouTube adresleri LiteYouTube ile gösterilir: iframe kullanıcı tıklayana
 * kadar oluşturulmaz, böylece sayfa açılışında YouTube script ve çerezi inmez.
 */
export function VideoPlaceholder({
  caption,
  embedUrl,
  title
}: {
  caption: string;
  embedUrl?: string;
  title?: string;
}) {
  if (embedUrl) {
    const ytId = youtubeId(embedUrl);
    if (ytId) return <LiteYouTube videoId={ytId} title={title ?? caption} />;
    return (
      <div className="aspect-video overflow-hidden rounded-xl border border-border bg-black">
        <iframe
          src={embedUrl}
          title={title ?? 'Video'}
          className="h-full w-full"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }
  // Embed yokken: markalı, "eksik" hissettirmeyen kanal kartı (YouTube kırmızısı play).
  return (
    <div className="relative flex aspect-video flex-col items-center justify-center gap-4 overflow-hidden rounded-xl border border-border bg-gradient-to-br from-primary-soft via-surface to-surface p-6 text-center">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:radial-gradient(circle_at_25%_25%,rgb(var(--c-primary))_0,transparent_45%)]"
      />
      <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-[#FF0000] text-white shadow-card">
        <Icon name="play" size={30} className="ms-0.5" />
      </span>
      <p className="relative max-w-sm text-sm text-muted">{caption}</p>
    </div>
  );
}
