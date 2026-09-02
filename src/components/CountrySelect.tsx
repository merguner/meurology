'use client';

import { useEffect, useMemo, useState } from 'react';
import { useLocale } from 'next-intl';
import { COUNTRY_CODES } from '@/lib/countries';

/**
 * Ülke seçimi — ISO 3166-1 listesi, adlar locale'e göre (Intl.DisplayNames).
 *
 * HYDRATION GÜVENLİĞİ: Ülke adları/sırası locale-duyarlıdır ve Node (SSR) ile
 * tarayıcının ICU/collation kuralları FARKLI sonuç verebilir → SSR ile client
 * render'ı ayrışır (hydration hatası). Bu yüzden seçenekleri YALNIZCA mount
 * sonrası (client) üretiriz; SSR ve ilk client render'ında sadece placeholder
 * bulunur (birebir eşleşir), sıralama/adlandırma tamamen client tarafında olur.
 */
export function CountrySelect({
  id,
  name,
  placeholder,
  defaultValue,
  value,
  onChange,
  className
}: {
  id?: string;
  name?: string;
  placeholder: string;
  defaultValue?: string;
  /** Kontrollü kullanım (BookingFlow gibi). Verilirse defaultValue yok sayılır. */
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
}) {
  const locale = useLocale();
  const controlled = value !== undefined;
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const options = useMemo(() => {
    if (!mounted) return []; // SSR + ilk render: yalnızca placeholder
    let dn: Intl.DisplayNames | null = null;
    try {
      dn = new Intl.DisplayNames([locale], { type: 'region' });
    } catch {
      dn = null;
    }
    return COUNTRY_CODES.map((code) => ({ code, label: dn?.of(code) ?? code })).sort((a, b) =>
      a.label.localeCompare(b.label, locale)
    );
  }, [mounted, locale]);

  return (
    <select
      id={id}
      name={name}
      {...(controlled
        ? { value, onChange: (e) => onChange?.(e.target.value) }
        : { defaultValue: defaultValue ?? '' })}
      className={className ?? 'form-input'}
    >
      <option value="">{placeholder}</option>
      {options.map((o) => (
        <option key={o.code} value={o.code}>
          {o.label}
        </option>
      ))}
    </select>
  );
}
