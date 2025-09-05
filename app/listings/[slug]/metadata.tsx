import type { Metadata } from 'next';
import { getListingBySlug } from '@/lib/data';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const listing = await getListingBySlug(params.slug);
  if (!listing) return { title: 'Property Not Found' };
  const title = `${listing.title} · ${listing.address.city} · $${listing.price.toLocaleString()}`;
  const description = `${listing.bedrooms} bed · ${listing.bathrooms} bath · ${listing.squareFeet.toLocaleString()} sq ft – ${listing.description.slice(0, 140)}…`;
  const url = `${process.env.NEXT_PUBLIC_SITE_URL ?? 'https://your-site.vercel.app'}/listings/${listing.slug}`;
  return {
    title, description,
    alternates: { canonical: url },
    openGraph: {
      title, description, url, type: 'article',
      images: [{ url: listing.images[0].url, width: 1200, height: 630, alt: listing.images[0].alt }]
    },
    twitter: { card: 'summary_large_image', title, description, images: [listing.images[0].url] }
  };
}
