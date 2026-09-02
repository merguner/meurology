import type { Metadata } from 'next';
import { buildAlternates, getPathname } from '@/i18n/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Locale } from '@/i18n/routing';
import { surgeon, surgeonReconstructive } from '@/content/surgeon';
import { isPlaceholder } from '@/content/types';
import { Link } from '@/i18n/navigation';
import { siteConfig } from '@/config/site';
import { PageHero } from '@/components/PageHero';
import { VerifiedInfo } from '@/components/VerifiedInfo';
import { StatsBand } from '@/components/StatsBand';
import { VideoPlaceholder } from '@/components/VideoPlaceholder';
import { WhatsAppCta } from '@/components/WhatsAppCta';
import { Icon } from '@/components/Icon';
import { JsonLd } from '@/components/JsonLd';

const LANG_NAMES: Record<string, string> = {
  tr: 'Türkçe',
  en: 'English',
  ar: 'العربية',
  de: 'Deutsch',
  ru: 'Русский'
};

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Surgeon' });
  const c = surgeon.i18n[locale] ?? surgeon.i18n.en!;
  return {
    title: c.fullName,
    description: `${c.fullName} — ${c.title}`,
    alternates: buildAlternates(locale, '/cerrah')
  };
}

export default async function SurgeonPage({
  params
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('Surgeon');
  const c = surgeon.i18n[locale] ?? surgeon.i18n.en!;

  // Gerçek veri gelene kadar placeholder alanları gizle (uydurma yapmadan).
  const education = c.education.filter((e) => !isPlaceholder(e.year) && !isPlaceholder(e.item));
  const publications = c.publications.filter(
    (pub) => !isPlaceholder(pub.title) && !isPlaceholder(pub.journal) && !isPlaceholder(pub.year)
  );
  const courses = (c.courses ?? []).filter((x) => !isPlaceholder(x.year) && !isPlaceholder(x.item));
  const awards = (c.awards ?? []).filter((x) => !isPlaceholder(x.year) && !isPlaceholder(x.item));

  // Fotoğraf yerine markalı baş-harf avatarı için (ör. "ME").
  const surgeonInitials = surgeon.name
    .split(/\s+/)
    .map((w) => w[0] ?? '')
    .join('')
    .slice(0, 2)
    .toLocaleUpperCase(locale);
  // Öne çıkan video ID'si girilmişse embed URL'i; değilse markalı kanal kartı.
  const featuredVideoEmbed = siteConfig.youtubeFeaturedId
    ? `https://www.youtube.com/embed/${siteConfig.youtubeFeaturedId}`
    : undefined;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Physician',
    name: c.fullName,
    jobTitle: c.title,
    medicalSpecialty: 'Urology',
    url: `${siteConfig.domain}${getPathname({ locale, href: '/cerrah' })}`,
    knowsLanguage: surgeon.languages,
    ...(c.awards && c.awards.length ? { award: c.awards.map((a) => a.item) } : {})
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <PageHero
        eyebrow={t('title')}
        title={c.fullName}
        description={c.role ? `${c.title} · ${c.role}` : c.title}
      />

      <div className="container-content grid gap-10 py-12 lg:grid-cols-3">
        <div className="space-y-10 lg:col-span-2">
          {/* Bio */}
          <section className="prose-content space-y-3">
            {c.bio.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </section>

          {/* Rakamlarla — cerrahi deneyim (sayaç animasyonlu) */}
          <section>
            <StatsBand />
          </section>

          {/* Doğrulanabilir bilgiler — yalnızca gösterilecek doğrulanmış bilgi varsa */}
          {!isPlaceholder(surgeon.diplomaRegistryNo) && (
            <VerifiedInfo
              title={t('verifiedTitle')}
              note={t('verifiedNote')}
              items={[{ label: t('diplomaLabel'), value: surgeon.diplomaRegistryNo }]}
            />
          )}

          {/* Rekonstrüktif üroloji deneyimi — ayrı, vurgulu bölüm */}
          {(() => {
            const r = surgeonReconstructive[locale] ?? surgeonReconstructive.en!;
            return (
              <section className="rounded-xl border border-primary/25 bg-primary-soft/50 p-6">
                <div className="mb-3 flex items-center gap-2 text-primary">
                  <Icon name="repair" size={20} />
                  <h2 className="font-serif text-lg font-bold text-fg">{t('reconstructiveTitle')}</h2>
                </div>
                <p className="text-sm leading-relaxed text-muted">{r.body}</p>
                <ul className="mt-4 space-y-2">
                  {r.points.map((p, i) => (
                    <li key={i} className="flex gap-2 text-sm">
                      <Icon name="check" size={16} className="mt-0.5 shrink-0 text-primary" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/rekonstruktif-uroloji"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
                >
                  {t('reconstructiveLink')}
                  <Icon name="arrow" size={16} className="rtl:rotate-180" />
                </Link>
              </section>
            );
          })()}

          {/* Eğitim — gerçek veri girilince görünür (placeholder'ken gizli) */}
          {education.length > 0 && (
            <section>
              <h2 className="mb-4 text-xl font-bold">{t('educationTitle')}</h2>
              <ol className="space-y-4 border-s-2 border-border ps-6">
                {education.map((e, i) => (
                  <li key={i} className="relative">
                    <span className="absolute -start-[1.72rem] top-1.5 h-3 w-3 rounded-full bg-primary" aria-hidden="true" />
                    <span className="label-mono">{e.year}</span>
                    <p className="font-medium">{e.item}</p>
                    {e.note ? <p className="mt-0.5 text-sm text-muted">{e.note}</p> : null}
                  </li>
                ))}
              </ol>
            </section>
          )}

          {/* Kurslar ve Sertifikalar */}
          {courses.length > 0 && (
            <section>
              <h2 className="mb-4 text-xl font-bold">{t('coursesTitle')}</h2>
              <ul className="space-y-3">
                {courses.map((x, i) => (
                  <li key={i} className="flex gap-3 text-sm">
                    <span className="label-mono shrink-0 pt-0.5">{x.year}</span>
                    <span className="text-fg/90">{x.item}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Ödüller */}
          {awards.length > 0 && (
            <section>
              <h2 className="mb-4 text-xl font-bold">{t('awardsTitle')}</h2>
              <ul className="space-y-2">
                {awards.map((x, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm">
                    <Icon name="star" size={18} className="mt-0.5 shrink-0 text-[#F4B400]" />
                    <span>
                      <span className="font-medium text-fg">{x.item}</span>
                      <span className="text-muted"> · {x.year}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Yayınlar — gerçek veri girilince görünür (placeholder'ken gizli) */}
          {publications.length > 0 && (
            <section>
              <h2 className="mb-4 text-xl font-bold">{t('publicationsTitle')}</h2>
              <ul className="space-y-3">
                {publications.map((p, i) => (
                  <li key={i} className="card p-4">
                    <p className="font-medium">{p.title}</p>
                    <p className="mt-1 text-sm text-muted">
                      {p.authors ? <span>{p.authors} · </span> : null}
                      <span className="italic">{p.journal}</span> · {p.year}
                    </p>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>

        {/* Yan panel */}
        <aside className="space-y-5">
          {/* Cerrah görseli. TODO: surgeon.photo eklenince next/image ile değiştir.
              Şimdilik markalı baş-harf avatarı (nötr, "eksik" hissettirmeyen tasarım). */}
          <div className="card overflow-hidden">
            <div className="relative flex aspect-[4/5] flex-col items-center justify-center gap-4 bg-gradient-to-br from-primary-soft via-surface to-surface p-6 text-center">
              <span
                aria-hidden="true"
                className="flex h-28 w-28 items-center justify-center rounded-full bg-primary font-brand text-4xl font-bold tracking-tight text-primary-fg shadow-card"
              >
                {surgeonInitials}
              </span>
              <div>
                <p className="font-semibold text-fg">{c.fullName}</p>
                <p className="mt-0.5 text-sm text-muted">{c.title}</p>
              </div>
            </div>
          </div>

          {/* Konuştuğu diller */}
          <div className="card p-5">
            <h3 className="mb-3 flex items-center gap-2 font-semibold">
              <Icon name="globe" size={18} className="text-primary" />
              {t('languagesLabel')}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {surgeon.languages.map((l) => (
                <li key={l} className="chip">{LANG_NAMES[l] ?? l}</li>
              ))}
            </ul>
          </div>

          <WhatsAppCta className="w-full" />
        </aside>
      </div>

      {/* Tanıtım videosu — belirli tanıtım videosunun embed URL'i girilince
          VideoPlaceholder'a embedUrl geçilerek gömülecek. Şimdilik YouTube
          kanalına yönlendiren buton. */}
      <section className="container-content pb-14">
        <h2 className="mb-4 text-xl font-bold">{t('videoTitle')}</h2>
        <div className="max-w-3xl">
          <VideoPlaceholder caption={t('videoCaption')} title={c.fullName} embedUrl={featuredVideoEmbed} />
          {!featuredVideoEmbed && (
            <a
              href={siteConfig.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline mt-4"
            >
              <Icon name="youtube" size={18} className="text-[#FF0000]" />
              {t('watchChannel')}
            </a>
          )}
        </div>
      </section>
    </>
  );
}
