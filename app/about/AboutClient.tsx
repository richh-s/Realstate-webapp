'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';

// Motion helpers (no string easings to satisfy FM v11 typings)
const fadeUp = (reduced: boolean) => ({
  hidden: { opacity: 0, y: reduced ? 0 : 20 },
  show: { opacity: 1, y: 0, transition: { duration: reduced ? 0 : 0.5 } },
});
const stagger = (reduced: boolean) => ({
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: reduced ? 0 : 0.08, delayChildren: 0.1 },
  },
});

export default function AboutClient() {
  const reduced = useReducedMotion() ?? false;

  return (
    <main id="main-content" className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* HERO */}
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

      {/* VALUES */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          variants={stagger(reduced)}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            {
              title: 'Clarity & Transparency',
              body:
                'Plain-language listings with real specs, clear pricing, and no dark patterns.',
              icon: '🔎',
            },
            {
              title: 'Inclusive by Default',
              body:
                'Keyboard-friendly, screen reader aware, and mindful motion for all users.',
              icon: '♿️',
            },
            {
              title: 'Performance First',
              body:
                'Image optimization, streaming, and SEO hygiene for a fast, discoverable site.',
              icon: '⚡️',
            },
            {
              title: 'Modern Engineering',
              body:
                'Next.js App Router, TypeScript, edge-ready patterns, and testable UI.',
              icon: '🧩',
            },
          ].map(({ title, body, icon }) => (
            <motion.article
              key={title}
              variants={fadeUp(reduced)}
              className="group bg-white/80 dark:bg-gray-800/70 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-3xl mb-2" aria-hidden>
                {icon}
              </div>
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h2>
              <p className="mt-2 text-gray-700 dark:text-gray-300">{body}</p>
              <div className="mt-4 h-1 w-0 group-hover:w-16 transition-all bg-blue-600 rounded-full" />
            </motion.article>
          ))}
        </motion.div>
      </section>

      {/* STORY */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10">
        <div className="mx-auto max-w-3xl">
          <motion.h2
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp(reduced)}
            className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white"
          >
            Our Story
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp(reduced)}
            className="mt-3 text-gray-700 dark:text-gray-300 leading-relaxed"
          >
            HomeHarbor blends great design, reliable data, and performance to help you find a place
            you love. We prioritize accessibility, speed, and clear information so you can focus on
            what matters: your next home.
          </motion.p>

          <ol className="relative mt-8 border-l border-gray-200 dark:border-gray-700 space-y-8">
            {[
              {
                title: 'Design-first exploration',
                desc:
                  'We prototyped an interface that emphasizes clarity and motion that helps—not distracts.',
                when: 'Phase 1',
              },
              {
                title: 'Data integration',
                desc:
                  'We wired listings to a single source of truth and standardized metadata for SEO.',
                when: 'Phase 2',
              },
              {
                title: 'Perf & a11y pass',
                desc:
                  'We tuned images, semantics, focus states, and reduced motion paths to hit our targets.',
                when: 'Phase 3',
              },
            ].map((step) => (
              <motion.li
                key={step.title}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeUp(reduced)}
                className="ml-4"
              >
                <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full bg-blue-600 ring-4 ring-blue-200 dark:ring-blue-900" />
                <time className="text-xs uppercase tracking-wide text-blue-600">{step.when}</time>
                <h3 className="mt-1 font-semibold text-gray-900 dark:text-white">{step.title}</h3>
                <p className="mt-1 text-gray-700 dark:text-gray-300">{step.desc}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      {/* TEAM */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp(reduced)}
          className="text-center mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
            Meet the team
          </h2>
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            Small, focused, and obsessed with user experience.
          </p>
        </motion.div>

        <motion.ul
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={stagger(reduced)}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
        >
          {[
            {
              name: 'Alex Rivera',
              role: 'Design',
              src:
                'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=640&auto=format&fit=crop',
            },
            {
              name: 'Samira Lee',
              role: 'Frontend',
              src:
                'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=640&auto=format&fit=crop',
            },
            {
              name: 'Jordan Wang',
              role: 'Data',
              src:
                'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=640&auto=format&fit=crop',
            },
            {
              name: 'Priya Patel',
              role: 'Accessibility',
              src:
                'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=640&auto=format&fit=crop',
            },
          ].map(({ name, role, src }) => (
            <motion.li
              key={name}
              variants={fadeUp(reduced)}
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative h-40">
                <Image
                  src={src}
                  alt={`${name} – ${role}`}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 25vw, 50vw"
                />
              </div>
              <div className="p-4">
                <p className="font-semibold text-gray-900 dark:text-white">{name}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{role}</p>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </section>

      {/* CTA */}
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
          <a
            href="/listings"
            className="inline-block mt-5 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 dark:focus:ring-offset-gray-900"
          >
            Browse Listings
          </a>
        </motion.div>
      </section>
    </main>
  );
}
