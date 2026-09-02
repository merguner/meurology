/**
 * Google yorumlarını OTOMATİK çeker (resmi Google Places API — Place Details).
 * - Anahtar/Place ID .env'de: GOOGLE_PLACES_API_KEY, GOOGLE_PLACE_ID
 * - Anahtar yoksa null döner → sayfa mevcut içeriğe sorunsuz düşer (build kırılmaz).
 * - fetch 24 saat cache'lenir (revalidate) — Google kotasını korur, ToS'a uygun.
 * NOT: Places API en fazla 5 yorum döndürür ve hangilerini göstereceğini Google seçer.
 * Yorumlar Google'a atıfla (yazar adı + tarih) gösterilir; metin değiştirilmez.
 */

export interface GoogleReview {
  author: string;
  rating: number;
  text: string;
  relativeTime: string;
  authorUrl?: string;
  time: number;
}

export interface GoogleReviewsData {
  rating: number;
  total: number;
  reviews: GoogleReview[];
}

export async function getGoogleReviews(locale: string): Promise<GoogleReviewsData | null> {
  const key = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;
  if (!key || !placeId) return null;

  try {
    const url = new URL('https://maps.googleapis.com/maps/api/place/details/json');
    url.searchParams.set('place_id', placeId);
    url.searchParams.set('fields', 'rating,user_ratings_total,reviews');
    url.searchParams.set('language', locale);
    url.searchParams.set('key', key);

    const res = await fetch(url.toString(), { next: { revalidate: 86400 } });
    if (!res.ok) return null;

    const data = (await res.json()) as {
      status?: string;
      result?: {
        rating?: number;
        user_ratings_total?: number;
        reviews?: Array<{
          author_name?: string;
          rating?: number;
          text?: string;
          relative_time_description?: string;
          author_url?: string;
          time?: number;
        }>;
      };
    };

    if (data.status !== 'OK' || !data.result) return null;
    const r = data.result;

    const reviews: GoogleReview[] = (r.reviews ?? [])
      .filter((rv) => rv.text && rv.text.trim().length > 0)
      .map((rv) => ({
        author: rv.author_name ?? 'Google',
        rating: rv.rating ?? 0,
        text: (rv.text ?? '').trim(),
        relativeTime: rv.relative_time_description ?? '',
        authorUrl: rv.author_url,
        time: rv.time ?? 0
      }));

    return {
      rating: r.rating ?? 0,
      total: r.user_ratings_total ?? 0,
      reviews
    };
  } catch {
    return null;
  }
}
