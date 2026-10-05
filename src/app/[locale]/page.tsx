import { getTranslations, getLocale, setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import type { Locale } from '@/i18n/routing';
import { publishedTreatments } from '@/content/treatments';
import { resolveContent } from '@/content/types';
import { surgeonFullName } from '@/content/surgeon';
import { featuredTreatmentSlugs, heroDoctorPhoto } from '@/config/homepage';
import { publicImage } from '@/lib/publicImage';
import { resolveConsultation } from '@/content/consultation';
import { WhatsAppCta } from '@/components/WhatsAppCta';
import { whatsappMessageFor } from '@/config/site';
import { TreatmentCard } from '@/components/TreatmentCard';
import { HeroSlider } from '@/components/HeroSlider';
import { Icon, type IconName } from '@/components/Icon';

export default async function HomePage({
  params
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('Home');
  const tc = await getTranslations('Common');
  // Ana sayfa CTA'sı için ön-dolu WhatsApp mesajı (bölüm başlığı değil) + kaynak kodu.
  const waMessage = whatsappMessageFor(
    tc('whatsappTopicMessage', { topic: t('treatmentsTitle') }),
    locale,
    'anasayfa'
  );

  /**
   * ÖNE ÇIKAN TEDAVİLER — config/homepage.ts'teki SIRAYLA.
   * Taslağa alınmış veya silinmiş bir slug sessizce atlanır.
   */
  const featured = featuredTreatmentSlugs
    .map((slug) => publishedTreatments.find((tr) => tr.slug === slug))
    .filter((tr): tr is NonNullable<typeof tr> => Boolean(tr));

  const doctorName = surgeonFullName(locale);

  const why: { icon: IconName; title: string; body: string }[] = [
    { icon: 'robot', title: t('why.experienceTitle'), body: t('why.experienceBody') },
    { icon: 'swap', title: t('why.transparencyTitle'), body: t('why.transparencyBody') },
    { icon: 'shield', title: t('why.supportTitle'), body: t('why.supportBody') },
    { icon: 'check', title: t('why.trustTitle'), body: t('why.trustBody') }
  ];

  return (
    <>
      {/* HERO SLIDER — içerik src/content/heroSlides.ts'ten okunur (güncellenebilir) */}
      <HeroSlider
        doctor={{
          name: doctorName,
          specialty: t('heroSpecialty'),
          // Dosya yoksa undefined gelir → fotoğraf alanı hiç basılmaz.
          photo: publicImage(heroDoctorPhoto),
          photoAlt: t('heroDoctorPhotoAlt', { name: doctorName })
        }}
      />
      {/* KALDIRILDI: ana sayfadaki Google yorumlari seridi (yildiz + hasta
          alintilari). Gerekce: hasta yorumu ve yildiz gosterimi Saglik
          Bakanligi tanitim yonetmeligi acisindan risklidir; bu bolum yalnizca
          Turkce disi dillerde aciktir diye tutulmustu, simdi tum dillerden
          kaldirildi. Footer'daki Google Isletme baglantisi (alintisiz) kalir. */}

      {/* KALDIRILDI: "Mesleki üyelik" bölümü (EAU rozeti).
          Gerekçe: Bölüm 0 → dernek üyeliği yok; doğrulanamayan üyelik beyanı
          yanıltıcı tanıtım sayılır. Üyelik belgelenirse trust.ts ile birlikte geri gelir. */}

      {/* KALDIRILDI: "Rakamlarla" vaka sayısı bandı (StatsBand).
          Gerekçe: Yayındaki rakamlar (5.230 / 945) ile bildirilen işlem bazlı
          rakamlar (toplam 2.385) çelişiyor ve hiçbiri doğrulanmadı.
          Doğrulanınca content/caseStats.ts doldurulup features.caseNumbers açılır. */}

      {/* TEDAVİLER */}
      <section className="container-content py-6 md:py-10">
        <div className="mb-6">
          <h2 className="text-xl font-bold md:text-2xl">{t('treatmentsTitle')}</h2>
          <p className="mt-1 text-muted">{t('treatmentsSubtitle')}</p>
        </div>
        {/*
          Ana sayfada TÜM tedaviler değil, config/homepage.ts'te belirtilen
          altı öne çıkan tedavi gösterilir. Tam liste /tedaviler sayfasında.
        */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((tr) => {
            const c = resolveContent(tr, locale);
            return (
              <TreatmentCard
                key={tr.slug}
                slug={tr.slug}
                icon={tr.icon}
                title={c.title}
                summary={c.summary}
              />
            );
          })}
        </div>
        <div className="mt-6">
          <Link
            href="/tedaviler"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
          >
            {tc('allTreatments')}
            <Icon name="arrow" size={16} className="rtl:rotate-180" />
          </Link>
        </div>

        {/* Rekonstrüktif kategori — diğerlerinden ayrışan, uzmanlık odaklı kart */}
        <Link
          href="/rekonstruktif-uroloji"
          className="group mt-5 flex flex-col items-start gap-4 rounded-2xl border border-primary/30 bg-primary-soft/60 p-6 transition-colors hover:border-primary/50 md:flex-row md:items-center md:justify-between md:p-8"
        >
          <div className="flex items-start gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-fg">
              <Icon name="repair" size={24} />
            </span>
            <div>
              <p className="label-mono text-primary">{t('reconstructiveCardText')}</p>
              <h3 className="mt-1 text-lg font-bold">{t('reconstructiveCardTitle')}</h3>
            </div>
          </div>
          <span className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-primary">
            {t('reconstructiveCardCta')}
            <Icon name="arrow" size={16} className="transition-transform group-hover:translate-x-0.5 rtl:rotate-180" />
          </span>
        </Link>
      </section>

      {/* ÖZEL ONLINE DANIŞMANLIK — tedavi kartlarından bağımsız, ayrı bölüm */}
      {(() => {
        const consult = resolveConsultation(locale);
        return (
          <section className="container-content pb-4">
            <div className="overflow-hidden rounded-2xl border border-accent/30 bg-gradient-to-br from-accent/10 to-transparent p-6 md:p-10">
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div className="max-w-2xl">
                  <span className="chip border-accent/40 bg-accent/15 text-accent">
                    <Icon name="video" size={14} />
                    {consult.badge}
                  </span>
                  <h2 className="mt-3 text-2xl font-bold md:text-3xl">{consult.title}</h2>
                  <p className="mt-2 text-muted">{consult.summary}</p>
                </div>
                <Link href="/ozel-danismanlik" className="btn bg-accent text-accent-fg hover:bg-accent/90 shrink-0">
                  <Icon name="video" size={18} />
                  {consult.ctaBook}
                </Link>
              </div>
            </div>
          </section>
        );
      })()}

      {/* NEDEN BİZ */}
      <section className="container-content py-14">
        <h2 className="mb-6 text-xl font-bold md:text-2xl">{t('whyTitle')}</h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {why.map((w) => (
            <div key={w.title} className="card p-6">
              <span className="mb-3 flex h-11 w-11 items-center justify-center rounded-lg bg-primary-soft text-primary">
                <Icon name={w.icon} size={22} />
              </span>
              <h3 className="font-bold">{w.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">{w.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DÖNÜŞÜM BANDI */}
      <section className="container-content pb-16">
        <div className="rounded-2xl border border-primary/25 bg-primary p-8 text-primary-fg md:p-12">
          <h2 className="max-w-2xl text-2xl font-bold text-primary-fg md:text-3xl">
            {t('processCtaTitle')}
          </h2>
          <p className="mt-3 max-w-2xl text-primary-fg/85">{t('processCtaBody')}</p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <WhatsAppCta message={waMessage} />
            <Link
              href="/iletisim"
              className="btn bg-accent text-accent-fg hover:bg-accent/90"
            >
              {tc('formCta')}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
