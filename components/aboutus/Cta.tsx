'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeUp } from './motion';

export default function Cta({ reduced }: { reduced: boolean }) {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp(reduced)}
        className="rounded-2xl border border-blue-200 dark:border-blue-900 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 p-6 md:p-10 text-center"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
          Ready to start your search?
        </h2>
        <p className="mt-2 text-gray-700 dark:text-gray-300">
          Explore listings tailored to your lifestyle and budget.
        </p>
        <Link
          href="/listings"
          className="inline-block mt-5 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 dark:focus:ring-offset-gray-900"
        >
          Browse Listings
        </Link>
      </motion.div>
    </section>
  );
}
