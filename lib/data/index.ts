// lib/data/index.ts
import { listings } from './listings'; // your existing array

export type { Listing } from './listings';

export async function getListings() {
  // could be a fetch in real life; keep as sync data for now
  return listings;
}

export async function getListingBySlug(slug: string) {
  const all = await getListings();
  return all.find(l => l.slug === slug);
}
