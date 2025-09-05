'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { Bed, Bath, Square, Heart } from 'lucide-react';
import type { Listing } from '@/lib/data/listings';
import { formatPrice, getPropertyTypeColor, getTimeSinceListing } from '@/lib/helpers';
import { createCardVariants } from '@/lib/motion';

export default function ListingCard({
  listing,
  index,
}: {
  listing: Listing;
  index: number;
}) {
  // Runtime safety (prevents the destructure crash even if a bad prop slips through)
  if (!listing) return null;

  // Framer Motion v11 can return boolean | null; coerce to boolean
  const reduced = useReducedMotion() ?? false;
  const cardVariants = createCardVariants(reduced);

  const {
    slug,
    title,
    price,
    bedrooms,
    bathrooms,
    squareFeet,
    address,
    images,
    propertyType,
    listedDate,
  } = listing;

  return (
    <motion.div
      className="h-full"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      transition={{ delay: (index ?? 0) * 0.1 }}
      layout
    >
      <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm h-full flex flex-col transition-shadow hover:shadow-md">
        <div className="relative">
          <Link href={`/listings/${slug}`} className="block aspect-[4/3] overflow-hidden">
            <Image
              src={images[0].url}
              alt={images[0].alt}
              fill
              className="object-cover"
              sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              priority={index === 0}
            />
          </Link>

          <div className="absolute top-4 left-4">
            <span
              className={`text-xs font-medium px-2 py-1 rounded-full ${getPropertyTypeColor(
                propertyType
              )}`}
            >
              {propertyType}
            </span>
          </div>

          <div className="absolute top-4 right-4">
            <motion.button
              whileTap={{ scale: 0.95 }}
              aria-label="Save to favorites"
              className="w-8 h-8 flex items-center justify-center bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full text-gray-700 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400 transition-colors"
            >
              <Heart className="w-4 h-4" />
            </motion.button>
          </div>

          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 pt-8">
            <span className="text-white font-bold text-xl">{formatPrice(price)}</span>
          </div>
        </div>

        <div className="p-4 flex flex-col flex-grow">
          <Link href={`/listings/${slug}`} className="block">
            <h3 className="text-lg font-semibold mb-1 text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              {title}
            </h3>
          </Link>

          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 flex items-center">
            <MapPinIcon className="w-4 h-4 mr-1" />
            {address.city}, {address.state}
          </p>

          <div className="mt-auto">
            <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-4 text-sm text-gray-700 dark:text-gray-300">
                <span className="flex items-center">
                  <Bed className="w-4 h-4 mr-1" />
                  {bedrooms}
                </span>
                <span className="flex items-center">
                  <Bath className="w-4 h-4 mr-1" />
                  {bathrooms}
                </span>
                <span className="flex items-center">
                  <Square className="w-4 h-4 mr-1" />
                  {squareFeet}
                </span>
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                {getTimeSinceListing(listedDate)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

const MapPinIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);
