import type { Treatment } from '../types';
import { cocukUrolojisi } from './cocukUrolojisi';
import { hipospadias } from './hipospadias';
import { vurCerrahisi } from './vurCerrahisi';
import { tot } from './tot';
import { pektopeksi } from './pektopeksi';
import { mesaneBotoksu } from './mesaneBotoksu';
import { yapaySfinkter } from './yapaySfinkter';
import { tumt } from './tumt';
import { mikroVarikoselektomi } from './mikroVarikoselektomi';

/**
 * YENİ TEDAVİ SAYFALARI (Görev 7)
 * ------------------------------------------------------------------
 * content/treatments.ts tek bir dosyada 30.000 satırı aştığı için yeni
 * sayfalar buraya, her biri kendi dosyasına yazılır. Dizi sırası
 * listelerdeki sıradır; bu liste treatments.ts'in sonunda ana diziye
 * eklenir.
 *
 * Bu dosyadaki tüm girdiler `reviewStatus: 'draft'` taşır: metinler
 * hazırdır ancak HEKİM ONAYI BEKLEMEKTEDİR. Bu nedenle hiçbirinde
 * `lastReviewed` doldurulmamıştır; sayfalarda "Son tıbbi gözden geçirme"
 * satırı ve JSON-LD'de reviewedBy alanı basılmaz.
 */
export const newProcedures: Treatment[] = [cocukUrolojisi, hipospadias, vurCerrahisi, tot, pektopeksi, mesaneBotoksu, yapaySfinkter, tumt, mikroVarikoselektomi];

/** Hekim onayı bekleyen sayfaların slug listesi (PR ve denetim için). */
export const draftProcedureSlugs = newProcedures
  .filter((t) => t.reviewStatus === 'draft')
  .map((t) => t.slug);
