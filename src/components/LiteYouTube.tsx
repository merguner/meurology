'use client';

import { useState } from 'react';
import { Icon } from './Icon';

/**
 * HAFİF YOUTUBE GÖMME (facade) — prompt m.3.5 "YouTube için lite embed".
 *
 * Normal bir YouTube iframe'i sayfa açılır açılmaz birkaç yüz KB JavaScript
 * ve çerez indirir; bu hem LCP'yi hem de çerez politikasını etkiler. Burada
 * önce yalnızca kapak görseli gösterilir, iframe KULLANICI TIKLAYINCA
 * oluşturulur. MapEmbed ile aynı mantık.
 *
 * youtube-nocookie.com kullanılır: kullanıcı videoyu oynatana kadar
 * YouTube tarafına izleme çerezi yazılmaz. Oynatma kullanıcının kendi
 * eylemi olduğu için çerez onayı ayrıca gerekmez.
 */
export function LiteYouTube({
  videoId,
  title,
  className
}: {
  videoId: string;
  title: string;
  className?: string;
}) {
  const [playing, setPlaying] = useState(false);

  const box = `relative aspect-video overflow-hidden rounded-xl border border-border bg-black ${className ?? ''}`;

  if (playing) {
    return (
      <div className={box}>
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          className="h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <div className={box}>
      {/*
        Kapak görseli doğrudan YouTube'un görsel sunucusundan gelir.
        next/image kullanılmaz: tek bir dış görsel için remotePatterns
        yapılandırması eklemek, kazandırdığından fazla bağımlılık getirir.
      */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <button
        type="button"
        onClick={() => setPlaying(true)}
        /* Erişilebilir ad görünen metni (başlık) içerir — WCAG 2.5.3. */
        aria-label={title}
        className="group absolute inset-0 flex items-center justify-center bg-black/30 transition hover:bg-black/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#FF0000] text-white shadow-card transition group-hover:scale-105">
          <Icon name="play" size={30} className="ms-0.5" />
        </span>
      </button>
    </div>
  );
}
