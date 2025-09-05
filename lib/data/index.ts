import { listings, Listing } from './listings';

export async function getListings(): Promise<Listing[]> {
  // Here you could swap to XML/API. For now use local data.
  return listings;
}

export async function getListingBySlug(slug: string): Promise<Listing | undefined> {
  const all = await getListings();
  return all.find(l => l.slug === slug);
}
