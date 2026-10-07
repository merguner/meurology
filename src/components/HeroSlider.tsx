'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { whatsappLink, whatsappMessageFor } from '@/config/site';
import { heroSlides } from '@/content/heroSlides';
import type { Locale } from '@/i18n/routing';
import { Icon } from './Icon';

const AUTOPLAY_MS = 6500;

/**
 * Hekim kimlik satırı — hero'nun üstünde, her slaytta aynı yerde durur.
 * Değerler SUNUCUDA hesaplanıp prop olarak gelir: fotoğrafın var olup
 * olmadığı dosya sistemine bakılarak belirlenir (bkz. lib/publicImage).
 */
export interface HeroDoctor {
  name: string;
  specialty: string;
  /** Dosya yoksa undefined gelir ve fotoğraf alanı hiç render edilmez. */
  photo?: string;
  photoAlt: string;
}

export function HeroSlider({ doctor }: { doctor?: HeroDoctor }) {
  const t = useTranslations('Home');
  const tc = useTranslations('Common');
  const locale = useLocale() as Locale;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false); // kullanıcı etkileşiminde kalıcı durur
  const touchX = useRef<number | null>(null);
  const count = heroSlides.length;

  const go = useCallback((i: number) => setIndex((i + count) % count), [count]);
  const stopAuto = useCallback(() => setPaused(true), []);

  // Otomatik geçiş — reduced-motion'da veya etkileşim sonrası kapalı.
  useEffect(() => {
    if (paused) return;
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;
    const id = setInterval(() => setIndex((p) => (p + 1) % count), AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused, count]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      stopAuto();
      go(locale === 'ar' ? index + 1 : index - 1);
    } else if (e.key === 'ArrowRight') {
      stopAuto();
      go(locale === 'ar' ? index - 1 : index + 1);
    }
  };

  const onTouchStart = (e: React.TouchEvent) => {
    touchX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    if (Math.abs(dx) > 40) {
      stopAuto();
      // Sağa kaydırma → önceki; sola → sonraki (RTL'de ters).
      const forward = dx < 0;
      const dir = locale === 'ar' ? !forward : forward;
      go(index + (dir ? 1 : -1));
    }
    touchX.current = null;
  };

  return (
    <section
      aria-roledescription="carousel"
      aria-label={t('sliderLabel')}
      className="relative overflow-hidden border-b border-border"
      onKeyDown={onKeyDown}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      tabIndex={0}
    >
      <div className="relative min-h-[460px] md:min-h-[540px]">
        {heroSlides.map((slide, i) => {
          // Eksik çeviride İngilizce'ye düşer (Türkçe'ye değil): yabancı dildeki
          // ziyaretçiye Türkçe metin göstermek kabul edilemez.
          const c = slide.i18n[locale] ?? slide.i18n.en ?? slide.i18n.tr!;
          const active = i === index;
          // Ön-dolu mesaj: slayt BAŞLIĞI değil, anlaşılır bir soru + kaynak kodu.
          const href =
            slide.cta.type === 'whatsapp'
              ? whatsappLink(whatsappMessageFor(tc('whatsappTopicMessage', { topic: c.ctaTopic ?? c.title }), locale, slide.id))
              : slide.cta.href ?? '/';
          // SEO: sayfada tek <h1> — yalnızca ilk slide h1, diğerleri h2 (görsel olarak aynı).
          const Heading = i === 0 ? 'h1' : 'h2';
          return (
            <div
              key={slide.id}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} / ${count}`}
              aria-hidden={!active}
              className={`absolute inset-0 transition-opacity duration-700 ${slide.bg} ${
                active ? 'opacity-100' : 'pointer-events-none opacity-0'
              }`}
            >
              {/* Opsiyonel arka plan görseli — ilk slide öncelikli, diğerleri lazy */}
              {slide.image ? (
                <>
                  <Image
                    src={slide.image}
                    alt=""
                    fill
                    priority={i === 0}
                    loading={i === 0 ? undefined : 'lazy'}
                    sizes="100vw"
                    className="object-cover"
                  />
                  <div aria-hidden="true" className="absolute inset-0 bg-bg/60" />
                </>
              ) : null}

              <div className="container-content relative flex min-h-[460px] flex-col justify-center py-16 md:min-h-[540px] md:py-24">
                {/* HEKİM KİMLİĞİ — başlığın üstünde, her slaytta aynı.
                    Fotoğraf dosyası yoksa yalnızca ad satırı görünür. */}
                {doctor && (
                  <p className="mb-5 flex items-center gap-3">
                    {doctor.photo && (
                      <Image
                        src={doctor.photo}
                        alt={doctor.photoAlt}
                        width={44}
                        height={44}
                        priority={i === 0}
                        className="h-11 w-11 shrink-0 rounded-full object-cover ring-2 ring-primary/30"
                      />
                    )}
                    <span className="text-sm font-semibold text-fg md:text-base">
                      {doctor.name}
                      <span aria-hidden="true" className="mx-2 text-muted">
                        ·
                      </span>
                      <span className="font-normal text-muted">{doctor.specialty}</span>
                    </span>
                  </p>
                )}
                <Heading className="max-w-3xl text-3xl font-bold leading-[1.22] md:text-5xl md:leading-[1.18]">
                  {c.title}
                </Heading>
                <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{c.subtitle}</p>
                <div className="mt-8">
                  {slide.cta.type === 'whatsapp' ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      tabIndex={active ? 0 : -1}
                      className="btn bg-[#25D366] text-[#062b14] hover:bg-[#1fb457]"
                    >
                      <Icon name="whatsapp" size={20} />
                      {c.ctaLabel}
                    </a>
                  ) : (
                    <Link
                      href={slide.cta.href ?? '/'}
                      tabIndex={active ? 0 : -1}
                      className="btn bg-accent text-accent-fg hover:bg-accent/90"
                    >
                      <Icon name="video" size={20} />
                      {c.ctaLabel}
                    </Link>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Prev / Next (masaüstü) */}
      {count > 1 && (
        <>
          <button
            type="button"
            aria-label={t('sliderPrev')}
            onClick={() => {
              stopAuto();
              go(index - 1);
            }}
            className="absolute start-3 top-1/2 hidden -translate-y-1/2 items-center justify-center rounded-full border border-border bg-bg/80 p-2 text-fg backdrop-blur transition-colors hover:bg-surface-2 md:inline-flex"
          >
            <Icon name="arrow" size={20} className="rotate-180 rtl:rotate-0" />
          </button>
          <button
            type="button"
            aria-label={t('sliderNext')}
            onClick={() => {
              stopAuto();
              go(index + 1);
            }}
            className="absolute end-3 top-1/2 hidden -translate-y-1/2 items-center justify-center rounded-full border border-border bg-bg/80 p-2 text-fg backdrop-blur transition-colors hover:bg-surface-2 md:inline-flex"
          >
            <Icon name="arrow" size={20} className="rtl:rotate-180" />
          </button>
        </>
      )}

      {/* Nokta göstergeleri.
          Dokunma hedefi 24x24 (WCAG 2.5.8): görünen nokta küçük kalır,
          tıklanabilir alan büyür. bottom değeri, daha uzun düğme yüzünden
          noktanın ekrandaki konumu kaymasın diye 5'ten 3'e çekildi. */}
      {count > 1 && (
        <div className="absolute inset-x-0 bottom-3 flex justify-center gap-1">
          {heroSlides.map((slide, i) => (
            <button
              key={slide.id}
              type="button"
              aria-label={`${t('sliderGoTo')} ${i + 1}`}
              aria-current={i === index}
              onClick={() => {
                stopAuto();
                go(i);
              }}
              className="grid h-6 min-w-6 place-items-center rounded-full px-1"
            >
              <span
                aria-hidden="true"
                className={`block h-2.5 rounded-full transition-all ${
                  i === index ? 'w-7 bg-primary' : 'w-2.5 bg-border'
                }`}
              />
            </button>
          ))}
        </div>
      )}
    </section>
  );
}
