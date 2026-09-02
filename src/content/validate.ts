import type { Treatment, TreatmentContent } from './types';
import { defaultLocale } from '@/i18n/routing';

/**
 * DERLEME ZAMANI VERİ DOĞRULAMASI
 * ------------------------------------------------------------------
 * TypeScript alanların VARLIĞINI zorunlu kılar; ancak BOŞ dizi/boş string
 * gibi durumlar tipten geçer ve sayfada sessizce boş bölüm olarak görünür.
 * Bu doğrulayıcı modül yüklenirken (build + dev başlangıcı) çalışır ve eksik/
 * boş içerik bulursa net bir mesajla HATA fırlatır → build kırmızıya döner,
 * içerik asla sessizce boş geçmez.
 */

function fail(slug: string, locale: string, message: string): never {
  throw new Error(
    `[content/treatments] Geçersiz içerik — tedavi "${slug}", dil "${locale}": ${message}`
  );
}

function isNonEmptyString(v: unknown): v is string {
  return typeof v === 'string' && v.trim().length > 0;
}

const STRING_FIELDS: (keyof TreatmentContent)[] = [
  'title',
  'summary',
  'metaTitle',
  'metaDescription'
];

const ARRAY_FIELDS: (keyof TreatmentContent)[] = [
  'definition',
  'timeline',
  'risks',
  'alternatives',
  'packageIncludes',
  'faqs'
];

function validateContent(slug: string, locale: string, c: TreatmentContent): void {
  // Zorunlu, boş olmayan metin alanları
  for (const f of STRING_FIELDS) {
    if (!isNonEmptyString(c[f] as unknown)) fail(slug, locale, `"${f}" alanı boş.`);
  }

  // Zorunlu, boş olmayan diziler
  for (const f of ARRAY_FIELDS) {
    const arr = c[f] as unknown;
    if (!Array.isArray(arr) || arr.length === 0) {
      fail(slug, locale, `"${f}" dizisi boş veya eksik.`);
    }
  }

  // definition: her paragraf dolu string
  c.definition.forEach((p, i) => {
    if (!isNonEmptyString(p)) fail(slug, locale, `definition[${i}] boş.`);
  });

  // timeline: her adımda when/title/body dolu
  c.timeline.forEach((s, i) => {
    if (!isNonEmptyString(s?.when) || !isNonEmptyString(s?.title) || !isNonEmptyString(s?.body)) {
      fail(slug, locale, `timeline[${i}] alanları (when/title/body) eksik.`);
    }
  });

  // risks / alternatives / packageIncludes: dolu string öğeler
  (['risks', 'alternatives', 'packageIncludes'] as const).forEach((f) => {
    c[f].forEach((item, i) => {
      if (!isNonEmptyString(item)) fail(slug, locale, `${f}[${i}] boş.`);
    });
  });

  // faqs: her öğede q/a dolu
  c.faqs.forEach((q, i) => {
    if (!isNonEmptyString(q?.q) || !isNonEmptyString(q?.a)) {
      fail(slug, locale, `faqs[${i}] (q/a) eksik.`);
    }
  });

  // surgeonExperience
  if (!isNonEmptyString(c.surgeonExperience?.caseVolume) || !isNonEmptyString(c.surgeonExperience?.note)) {
    fail(slug, locale, 'surgeonExperience (caseVolume/note) eksik.');
  }

  // expertise opsiyonel; varsa tüm alanları dolu olmalı (rekonstrüktif tedaviler)
  if (c.expertise) {
    if (
      !isNonEmptyString(c.expertise.redoRate) ||
      !isNonEmptyString(c.expertise.complexCase) ||
      !isNonEmptyString(c.expertise.advancedTechnique)
    ) {
      fail(slug, locale, 'expertise (redoRate/complexCase/advancedTechnique) eksik.');
    }
  }

  // price: sayısal alanlar + para birimi
  if (
    !c.price ||
    typeof c.price.from !== 'number' ||
    typeof c.price.to !== 'number' ||
    !isNonEmptyString(c.price.currency)
  ) {
    fail(slug, locale, 'price (from/to/currency) geçersiz.');
  }

  // comparison opsiyonel; varsa sütun/satır tutarlı olmalı
  if (c.comparison) {
    const { columns, rows, title } = c.comparison;
    if (!isNonEmptyString(title)) fail(slug, locale, 'comparison.title boş.');
    if (!Array.isArray(columns) || columns.length === 0) {
      fail(slug, locale, 'comparison.columns boş.');
    }
    if (!Array.isArray(rows) || rows.length === 0) {
      fail(slug, locale, 'comparison.rows boş.');
    }
    rows.forEach((r, i) => {
      if (!isNonEmptyString(r?.label)) fail(slug, locale, `comparison.rows[${i}].label boş.`);
      // her satır: label + değerler, sütun sayısıyla uyumlu (label ilk sütun)
      if (!Array.isArray(r.values) || r.values.length !== columns.length - 1) {
        fail(
          slug,
          locale,
          `comparison.rows[${i}].values sütun sayısıyla uyumsuz (beklenen ${columns.length - 1}, gelen ${r?.values?.length ?? 0}).`
        );
      }
    });
  }
}

/**
 * Tüm tedavileri doğrular. Her tedavinin en azından varsayılan dil (fallback
 * tabanı) içeriği eksiksiz olmalı; i18n'de tanımlı HER dil de tam olmalıdır.
 */
export function assertTreatmentsValid(list: Treatment[]): Treatment[] {
  if (!Array.isArray(list) || list.length === 0) {
    throw new Error('[content/treatments] Tedavi listesi boş.');
  }

  const seen = new Set<string>();
  for (const t of list) {
    if (!isNonEmptyString(t.slug)) {
      throw new Error('[content/treatments] slug’ı olmayan bir tedavi kaydı var.');
    }
    if (seen.has(t.slug)) {
      throw new Error(`[content/treatments] Yinelenen slug: "${t.slug}".`);
    }
    seen.add(t.slug);

    // Nihai fallback tabanı (varsayılan dil) her zaman dolu olmalı.
    const base = t.i18n[defaultLocale];
    if (!base) {
      fail(t.slug, defaultLocale, `Varsayılan dil (${defaultLocale}) içeriği eksik — fallback tabanı zorunlu.`);
    }

    // Tanımlı her dil içeriği eksiksiz olmalı.
    for (const [locale, content] of Object.entries(t.i18n)) {
      if (!content) fail(t.slug, locale, 'İçerik nesnesi tanımsız.');
      validateContent(t.slug, locale, content);
    }
  }

  return list;
}
