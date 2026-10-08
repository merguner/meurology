import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class', '[data-theme="dark"]'],
  /*
   * TARAMA YOLLARI — config/ ve content/ TS dosyalari da DAHIL olmali.
   *
   * 8 Eki 2026'da iki sessiz ariza bu eksiklikten cikti:
   *  1. config/nav.ts icine tasinan 'min-[1200px]:block' gibi siniflar hic
   *     uretilmedi; masaustu menusu tum dillerde gizli kaldi.
   *  2. content/heroSlides.ts icindeki 'via-bg' hic uretilmedi; hero
   *     gradyaninin orta renk duragi uygulanmiyordu.
   *
   * KURAL: Tailwind sinifi iceren HER dosya burada listelenmeli. Sinif
   * adlari TAM METIN yazilmali; birlestirilmis siniflar taranamaz.
   */
  content: [
    './src/app/**/*.{ts,tsx,mdx}',
    './src/components/**/*.{ts,tsx}',
    './src/config/**/*.{ts,tsx}',
    './src/content/**/*.{ts,tsx,md,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        // Tüm renkler CSS custom property token'ları üzerinden — açık/koyu tema
        // globals.css içinde tanımlı. rgb(var(--x) / <alpha>) formatı opaklık destekler.
        bg: 'rgb(var(--c-bg) / <alpha-value>)',
        surface: 'rgb(var(--c-surface) / <alpha-value>)',
        'surface-2': 'rgb(var(--c-surface-2) / <alpha-value>)',
        border: 'rgb(var(--c-border) / <alpha-value>)',
        fg: 'rgb(var(--c-fg) / <alpha-value>)',
        muted: 'rgb(var(--c-muted) / <alpha-value>)',
        primary: 'rgb(var(--c-primary) / <alpha-value>)',
        'primary-strong': 'rgb(var(--c-primary-strong) / <alpha-value>)',
        'primary-fg': 'rgb(var(--c-primary-fg) / <alpha-value>)',
        'primary-soft': 'rgb(var(--c-primary-soft) / <alpha-value>)',
        brand: 'rgb(var(--c-brand) / <alpha-value>)',
        accent: 'rgb(var(--c-accent) / <alpha-value>)',
        'accent-fg': 'rgb(var(--c-accent-fg) / <alpha-value>)',
        ring: 'rgb(var(--c-ring) / <alpha-value>)',
        success: 'rgb(var(--c-success) / <alpha-value>)',
        danger: 'rgb(var(--c-danger) / <alpha-value>)'
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
        brand: ['var(--font-brand)', 'system-ui', 'sans-serif']
      },
      borderRadius: {
        lg: '0.75rem',
        xl: '1rem',
        '2xl': '1.25rem'
      },
      maxWidth: {
        content: '72rem'
      },
      boxShadow: {
        card: '0 1px 2px rgb(0 0 0 / 0.04), 0 8px 24px -12px rgb(0 0 0 / 0.12)'
      }
    }
  },
  plugins: []
};

export default config;
