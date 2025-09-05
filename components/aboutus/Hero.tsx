'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeUp } from './motion';

export default function Hero({ reduced }: { reduced: boolean }) {
  return (
    <section className="relative isolate">
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1920&auto=format&fit=crop"
          alt="Warm, modern living room interior with sunlight"
          fill
          priority
          className="object-cover opacity-70 dark:opacity-40"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/70 to-white dark:from-gray-900/80 dark:via-gray-900/70 dark:to-gray-900" />
      </div>

      <motion.div
        initial="hidden"
        animate="show"
        variants={fadeUp(reduced)}
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32"
      >
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            About HomeHarbor
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-700 dark:text-gray-300">
            We’re on a mission to make real estate discovery simple, transparent, and delightful.
          </p>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Thoughtful design + reliable data + performance-first engineering.
          </p>
        </div>
      </motion.div>

      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 0.25, scale: reduced ? 1 : 1.05 }}
        transition={{ duration: reduced ? 0 : 4, repeat: Infinity, repeatType: 'reverse' }}
        className="pointer-events-none absolute -top-10 -right-10 h-56 w-56 rounded-full bg-blue-500 blur-3xl opacity-20 dark:opacity-30"
      />
    </section>
  );
}
