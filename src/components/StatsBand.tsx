'use client';

import { useEffect, useRef, useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { TOTAL_PROCEDURES, YEARS_EXPERIENCE, categoryStats } from '@/content/stats';

/**
 * Locale binlik ayraçlı sayı. GERÇEK değer server-side render edilir ve ilk
 * paint'te (JS kapalıyken de) doğru görünür. Count-up animasyonu yalnızca
 * GÖRSEL bir efekttir: eleman ekrana KAYDIRILIP girdiğinde 0'dan hedefe sayar.
 * Zaten görünür durumdaysa (veya reduced-motion) animasyon yapılmaz — sayı
 * asla "0"da takılı kalmaz.
 */
function CountUp({ target, className }: { target: number; className?: string }) {
  const locale = useLocale();
  const fmt = (n: number) => {
    try {
      return new Intl.NumberFormat(locale).format(Math.round(n));
    } catch {
      return new Intl.NumberFormat('en').format(Math.round(n));
    }
  };

  // SSR + ilk render: gerçek (nihai) değer → SEO ve JS'siz görünüm doğru.
  const [display, setDisplay] = useState<string>(() => fmt(target));
  const ref = useRef<HTMLSpanElement>(null);

  // useEffect (layout değil): ilk paint SSR değerini gösterir, sonra karar verir.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return; // animasyon yok — gerçek değer kalır

    let raf = 0;
    const DURATION = 1400;
    const animate = () => {
      const t0 = performance.now();
      const tick = (now: number) => {
        const p = Math.min(1, (now - t0) / DURATION);
        const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
        setDisplay(fmt(target * eased));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      setDisplay(fmt(0));
      raf = requestAnimationFrame(tick);
    };

    // Mount anında zaten görünürse: animasyon yok (0 flash'ı olmaz, gerçek değer kalır).
    const rect = el.getBoundingClientRect();
    const alreadyVisible = rect.top < window.innerHeight && rect.bottom > 0;
    if (alreadyVisible) return;

    // Ekrana kaydırılıp girince bir kez 0'dan hedefe say.
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          io.disconnect();
          animate();
        }
      },
      { threshold: 0 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target, locale]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}

/**
 * "Rakamlarla" — cerrahi deneyim istatistikleri.
 * showCategories=false → yalnızca iki başlık sayı (dar alanlar/cerrah profili).
 */
export function StatsBand({ showCategories = true }: { showCategories?: boolean }) {
  const t = useTranslations('Stats');

  return (
    <div>
      <h2 className="text-xl font-bold md:text-2xl">{t('title')}</h2>

      {/* Başlık sayılar */}
      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <div className="card p-6">
          <CountUp target={TOTAL_PROCEDURES} className="font-mono text-4xl font-bold text-primary md:text-5xl" />
          <p className="mt-2 text-sm font-medium text-muted">{t('totalLabel')}</p>
        </div>
        <div className="card p-6">
          <CountUp target={YEARS_EXPERIENCE} className="font-mono text-4xl font-bold text-primary md:text-5xl" />
          <p className="mt-2 text-sm font-medium text-muted">{t('yearsLabel')}</p>
        </div>
      </div>

      {/* Kategori kırılımı */}
      {showCategories && (
        <>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categoryStats.map((s) => (
              <div key={s.key} className="rounded-xl border border-border bg-surface p-5">
                <CountUp target={s.value} className="font-mono text-2xl font-bold text-fg" />
                <p className="mt-1 text-sm text-muted">{t(`categories.${s.key}`)}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-muted">{t('note')}</p>
        </>
      )}
    </div>
  );
}
