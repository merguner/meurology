'use client';

import { useState } from 'react';
import { Icon } from '@/components/Icon';

interface MapEmbedProps {
  /** Haritada aranacak adres metni. */
  query: string;
  locale: string;
  /** iframe başlığı (erişilebilirlik). */
  title: string;
  /** Yükleme düğmesinin metni. */
  loadLabel: string;
  /** Tıklamadan önce gösterilen gizlilik açıklaması. */
  notice: string;
}

/**
 * GOOGLE HARİTALAR FACADE'I (prompt m.3.4 + çerez politikası).
 *
 * Harita, kullanıcı tıklayana kadar YÜKLENMEZ. Böylece sayfa açıldığında
 * Google'a hiçbir istek gitmez ve IP adresi paylaşılmaz. Çerez politikasında
 * "harita siz tıklayana kadar çalıştırılmaz" denildiği için bu bileşenin
 * davranışı değiştirilirse o metin de güncellenmelidir.
 *
 * Yan fayda: üçüncü taraf iframe ilk yüklemeden çıktığı için LCP ve
 * toplam istek sayısı düşer.
 */
export function MapEmbed({ query, locale, title, loadLabel, notice }: MapEmbedProps) {
  const [loaded, setLoaded] = useState(false);

  if (loaded) {
    return (
      <div className="mt-4 overflow-hidden rounded-xl border border-border">
        <iframe
          title={title}
          src={`https://maps.google.com/maps?q=${encodeURIComponent(
            query
          )}&hl=${locale}&z=15&output=embed`}
          width="100%"
          height="240"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="block w-full border-0"
        />
      </div>
    );
  }

  return (
    <div className="mt-4 overflow-hidden rounded-xl border border-border bg-surface-2">
      <div className="flex h-[240px] flex-col items-center justify-center gap-3 px-6 text-center">
        <span className="text-muted">
          <Icon name="pin" size={28} />
        </span>
        <p className="max-w-sm text-xs text-muted">{notice}</p>
        <button
          type="button"
          onClick={() => setLoaded(true)}
          className="rounded-lg border border-border bg-surface px-4 py-2 text-sm font-medium text-fg transition-colors hover:bg-surface-2"
        >
          {loadLabel}
        </button>
      </div>
    </div>
  );
}
