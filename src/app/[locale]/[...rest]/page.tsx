import { notFound } from 'next/navigation';

/**
 * Eşleşmeyen tüm yollar için yakalayıcı — locale kök layout'u altında
 * kalır ve yerelleştirilmiş 404 sayfasını tetikler.
 */
export default function CatchAllPage() {
  notFound();
}
