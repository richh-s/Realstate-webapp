import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Bed, Bath, Square, Calendar, Tag, Home, Phone, Mail, ArrowLeft, Check } from 'lucide-react';
import { getListingBySlug, getListings } from '@/lib/data';
import {
  formatPrice, formatDate, formatSquareFeet,
  getPropertyTypeColor, getBedroomsText, getBathroomsText
} from '@/lib/helpers';
import Gallery from '@/components/listings/Gallery';
import ContactForm from '@/components/forms/ContactForm';
import type { Metadata } from 'next';

export async function generateStaticParams() {
  const all = await getListings();
  // must return [{ slug: 'modern-downtown-loft' }, ...]
  return all.map(l => ({ slug: l.slug }));
}

export async function generateMetadata(
  { params }: { params: { slug: string } }
): Promise<Metadata> {
  const listing = await getListingBySlug(params.slug);
  if (!listing) return { title: 'Property Not Found' };

  const title = `${listing.title} · ${listing.address.city} · ${formatPrice(listing.price)}`;
  const description = `${listing.bedrooms} bed · ${listing.bathrooms} bath · ${formatSquareFeet(listing.squareFeet)} – ${listing.description.slice(0, 140)}…`;
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://your-site.vercel.app';
  const url = `${base}/listings/${listing.slug}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title, description, url, type: 'article',
      images: [{ url: listing.images[0].url, width: 1200, height: 630, alt: listing.images[0].alt }]
    },
    twitter: { card: 'summary_large_image', title, description, images: [listing.images[0].url] }
  };
}

export default async function ListingDetail({ params }: { params: { slug: string } }) {
  const listing = await getListingBySlug(params.slug);
  if (!listing) notFound();

  const similar = (await getListings())
    .filter(l =>
      l.id !== listing.id &&
      (l.propertyType === listing.propertyType || l.address.city === listing.address.city)
    )
    .slice(0, 3);

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <main id="main-content" className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-6xl">
        {/* Breadcrumbs */}
        <nav className="flex mb-6 text-sm" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2">
            <li>
              <Link href="/" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                <Home className="w-4 h-4" />
                <span className="sr-only">Home</span>
              </Link>
            </li>
            <li className="text-gray-500">/</li>
            <li>
              <Link href="/listings" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                Properties
              </Link>
            </li>
            <li className="text-gray-500">/</li>
            <li><span className="text-gray-900 dark:text-white font-medium" aria-current="page">{listing.title}</span></li>
          </ol>
        </nav>

        <Link href="/listings" className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 mb-6">
          <ArrowLeft className="w-4 h-4 mr-1" /> Back to results
        </Link>

        {/* Gallery */}
        <div className="mb-8">
          <Gallery images={listing.images} />
        </div>

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <span className={`text-xs font-medium px-2 py-1 rounded-full ${getPropertyTypeColor(listing.propertyType)}`}>
                {listing.propertyType}
              </span>
              <span className="text-sm text-gray-600 dark:text-gray-400 flex items-center">
                <Calendar className="w-4 h-4 mr-1" /> Listed {formatDate(listing.listedDate)}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">{listing.title}</h1>
            <p className="text-xl mb-2">{formatPrice(listing.price)}</p>
            <p className="text-gray-700 dark:text-gray-300">
              {listing.address.street}, {listing.address.city}, {listing.address.state} {listing.address.zip}
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {[
            { Icon: Bed, label: getBedroomsText(listing.bedrooms), value: listing.bedrooms },
            { Icon: Bath, label: getBathroomsText(listing.bathrooms), value: listing.bathrooms },
            { Icon: Square, label: 'Square Feet', value: formatSquareFeet(listing.squareFeet) }
          ].map(({ Icon, label, value }, i) => (
            <div key={i} className="flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-sm">
              <Icon className="w-8 h-8 text-blue-600 mb-2" />
              <span className="text-2xl font-bold">{value}</span>
              <span className="text-gray-600 dark:text-gray-400">{label}</span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Description */}
          <div className="lg:col-span-2">
            <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-6 mb-8">
              <h2 className="text-xl font-semibold mb-4">About This Property</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                {listing.description}
              </p>
            </section>

            <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <Tag className="w-5 h-5 mr-2 text-blue-600" />
                Features & Amenities
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                {listing.features.map((f, i) => (
                  <li key={i} className="flex items-center text-gray-700 dark:text-gray-300">
                    <Check className="w-5 h-5 mr-2 text-green-500" /> {f}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Agent & form */}
          <aside className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-6 mb-6">
              <div className="flex items-center mb-4">
                <Image
                  src={listing.agent.photo}
                  alt={listing.agent.name}
                  width={64}
                  height={64}
                  className="rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold">{listing.agent.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Listing Agent</p>
                </div>
              </div>
              <div className="space-y-2">
                <a href={`tel:${listing.agent.phone}`} className="flex items-center hover:text-blue-600 dark:hover:text-blue-400">
                  <Phone className="w-5 h-5 mr-2 text-blue-600" /> {listing.agent.phone}
                </a>
                <a href={`mailto:${listing.agent.email}`} className="flex items-center hover:text-blue-600 dark:hover:text-blue-400">
                  <Mail className="w-5 h-5 mr-2 text-blue-600" /> {listing.agent.email}
                </a>
              </div>
            </div>
            <ContactForm agentName={listing.agent.name} propertyTitle={listing.title} />
          </aside>
        </div>

        {/* Similar */}
        {similar.length > 0 && (
          <section className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Similar Properties</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {similar.map(l => (
                <Link
                  key={l.id}
                  href={`/listings/${l.slug}`}
                  className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="relative aspect-[4/3]">
                    <Image src={l.images[0].url} alt={l.images[0].alt} fill className="object-cover" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold">{l.title}</h3>
                    <p className="text-blue-600 font-medium mt-1">{formatPrice(l.price)}</p>
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mt-2">
                      <span className="mr-3 flex items-center"><Bed className="w-4 h-4 mr-1" />{l.bedrooms}</span>
                      <span className="mr-3 flex items-center"><Bath className="w-4 h-4 mr-1" />{l.bathrooms}</span>
                      <span className="flex items-center"><Square className="w-4 h-4 mr-1" />{formatSquareFeet(l.squareFeet)}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
