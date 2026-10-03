import type { Locale, StaticPathname } from '@/i18n/routing';

/**
 * ANA SAYFA HERO SLIDER İÇERİĞİ — TEK DÜZENLEME NOKTASI.
 *
 * Yeni slide eklemek veya metin/CTA/arka plan değiştirmek için YALNIZCA bu
 * dosyayı düzenleyin; HeroSlider bileşen kodunu değiştirmeye gerek yoktur.
 *
 * Alanlar:
 *  - bg:       Tailwind arka plan sınıfları (tema token'larıyla; açık/koyu uyumlu).
 *  - image:    (opsiyonel) /public altındaki arka plan görseli. Verilirse next/image
 *              ile gösterilir; İLK slideّ'ın görseli otomatik "priority" yüklenir.
 *  - cta.type: 'whatsapp' → wa.me linki (mesaj = slide başlığı) | 'internal' → site içi yol.
 *  - cta.href: 'internal' için hedef yol (örn. '/ozel-danismanlik').
 *  - i18n:     Dile göre başlık / alt metin / CTA etiketi.
 */
export interface HeroSlide {
  id: string;
  bg: string;
  image?: string;
  cta: { type: 'whatsapp' | 'internal'; href?: StaticPathname };
  i18n: Partial<
    Record<
      Locale,
      {
        title: string;
        subtitle: string;
        ctaLabel: string;
        /** WhatsApp ön-dolu mesajında geçecek KONU (slayt başlığı değil). */
        ctaTopic?: string;
      }
    >
  >;
}

export const heroSlides: HeroSlide[] = [
  {
    id: 'genel',
    bg: 'bg-gradient-to-br from-primary-soft via-bg to-bg',
    cta: { type: 'whatsapp' },
    i18n: {
      tr: {
        title: 'Ürolojik Cerrahide Deneyim, Şeffaflık ve Uluslararası Standart',
        subtitle:
          'Robotik ve minimal invaziv ürolojik cerrahi için tek noktadan koordinasyon: değerlendirme, tedavi, konaklama ve takip.',
        ctaLabel: 'Hemen WhatsApp’tan yazın',
        ctaTopic: 'ürolojik tedavi seçenekleri'
      },
      en: {
        title: 'Experience, Transparency and International Standards in Urological Surgery',
        subtitle:
          'Single-point coordination for robotic and minimally invasive urological surgery: assessment, treatment, accommodation and follow-up.',
        ctaLabel: 'Message us on WhatsApp',
        ctaTopic: 'urological treatment options'
      },
      de: {
        title: 'Erfahrung, Transparenz und internationaler Standard in der urologischen Chirurgie',
        subtitle:
          'Koordination aus einer Hand für robotische und minimalinvasive urologische Chirurgie: Bewertung, Behandlung, Unterkunft und Nachsorge.',
        ctaLabel: 'Schreiben Sie uns auf WhatsApp',
        ctaTopic: 'urologische Behandlungsmöglichkeiten'
      },
      ru: {
        title: 'Опыт, прозрачность и международный стандарт в урологической хирургии',
        subtitle:
          'Координация в одном месте для роботической и малоинвазивной урологической хирургии: оценка, лечение, проживание и наблюдение.',
        ctaLabel: 'Напишите нам в WhatsApp',
        ctaTopic: 'варианты урологического лечения'
      },
      ar: {
        title: 'الخبرة والشفافية والمعايير الدولية في جراحة المسالك البولية',
        subtitle:
          'تنسيق من نقطة واحدة للجراحة الروبوتية والطفيفة التوغل: التقييم والعلاج والإقامة والمتابعة.',
        ctaLabel: 'راسلنا على واتساب',
        ctaTopic: 'خيارات علاج المسالك البولية'
      },
      fr: {
        title: 'Expérience, transparence et normes internationales en chirurgie urologique',
        subtitle:
          'Une coordination unique pour la chirurgie urologique robotique et mini-invasive : évaluation, traitement, hébergement et suivi.',
        ctaLabel: 'Écrivez-nous sur WhatsApp',
        ctaTopic: 'les options de traitement urologique'
      }
    }
  },
  {
    id: 'androloji-danismanlik',
    bg: 'bg-gradient-to-br from-accent/15 via-bg to-bg',
    cta: { type: 'internal', href: '/ozel-danismanlik' },
    i18n: {
      tr: {
        title: 'Androloji Online Danışmanlık',
        subtitle:
          'Mahremiyetinize saygılı, birebir ve gizli online görüşme. Randevunuzu güvenle planlayın.',
        ctaLabel: 'Online danışmanlık randevusu'
      },
      en: {
        title: 'Andrology Online Consultation',
        subtitle:
          'A private, one-to-one online consultation that respects your confidentiality. Book your appointment with confidence.',
        ctaLabel: 'Book an online consultation'
      },
      de: {
        title: 'Andrologie – Online-Beratung',
        subtitle:
          'Eine private Einzelberatung online, die Ihre Vertraulichkeit wahrt. Buchen Sie Ihren Termin mit Vertrauen.',
        ctaLabel: 'Online-Beratung buchen'
      },
      ru: {
        title: 'Андрология: онлайн-консультация',
        subtitle:
          'Конфиденциальная индивидуальная онлайн-консультация с уважением к вашей приватности. Запишитесь с уверенностью.',
        ctaLabel: 'Записаться на онлайн-консультацию'
      },
      ar: {
        title: 'استشارة الذكورة عبر الإنترنت',
        subtitle:
          'استشارة فردية خاصة عبر الإنترنت تحترم خصوصيتك. احجز موعدك بثقة.',
        ctaLabel: 'احجز استشارة عبر الإنترنت'
      },
      fr: {
        title: 'Consultation d’andrologie en ligne',
        subtitle:
          'Une consultation en ligne individuelle et confidentielle, respectueuse de votre intimité. Réservez votre rendez-vous en toute sérénité.',
        ctaLabel: 'Réserver une consultation en ligne'
      }
    }
  }
];
