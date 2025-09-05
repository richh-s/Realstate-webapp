// app/listings/page.tsx
import type { Metadata } from 'next';
import ListingCard from '@/components/listings/ListingCard';
import { listings as allListings, type Listing } from '@/lib/data/listings';

export const metadata: Metadata = {
  title: 'Listings | HomeHarbor',
  description:
    'Browse featured real estate listings including houses, condos, and estates. Filter by price, beds, baths and more.',
  openGraph: {
    title: 'Listings | HomeHarbor',
    description:
      'Browse featured real estate listings including houses, condos, and estates.',
    type: 'website',
    url: 'https://your-domain.com/listings',
  },
  alternates: { canonical: 'https://your-domain.com/listings' },
};

export default function ListingsPage() {
  const listings: Listing[] = allListings ?? [];

  return (
    <main id="main-content" className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Featured Listings
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Showing {listings.length} properties
          </p>
        </header>

        {/* Grid of cards */}
        <section
          aria-label="Property results"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {listings.map((listing, index) => (
            <ListingCard key={listing.id} listing={listing} index={index} />
          ))}
        </section>
      </div>
    </main>
  );
}
