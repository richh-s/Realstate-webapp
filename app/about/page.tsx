import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | HomeHarbor',
  description:
    'HomeHarbor helps buyers and renters discover modern, high-quality homes through a fast, accessible experience.',
  openGraph: {
    title: 'About Us | HomeHarbor',
    description:
      'We help buyers and renters discover modern, high-quality homes through a fast, accessible experience.',
    type: 'website',
    url: 'https://your-domain.com/about',
  },
  alternates: { canonical: 'https://your-domain.com/about' },
};

export default function AboutPage() {
  return (
    <main id="main-content" className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            About HomeHarbor
          </h1>
          <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
            We’re on a mission to make real estate discovery simple, transparent, and delightful.
          </p>
        </header>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <article className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Our Story
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              HomeHarbor blends great design, reliable data, and performance to help you find
              a place you love. We prioritize accessibility, speed, and clear information so you
              can focus on what matters: your next home.
            </p>

            <h3 className="mt-6 text-lg font-semibold text-gray-900 dark:text-white">
              What We Value
            </h3>
            <ul className="mt-2 list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
              <li>Clarity and transparency</li>
              <li>Inclusive, accessible experiences</li>
              <li>Performance and quality</li>
              <li>Modern, maintainable engineering</li>
            </ul>
          </article>

          <aside className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Fast facts
            </h2>
            <dl className="space-y-3 text-gray-700 dark:text-gray-300">
              <div className="flex items-baseline justify-between border-b border-gray-200 dark:border-gray-700 pb-2">
                <dt>Listings curated</dt>
                <dd className="font-semibold">10+</dd>
              </div>
              <div className="flex items-baseline justify-between border-b border-gray-200 dark:border-gray-700 pb-2">
                <dt>Framework</dt>
                <dd className="font-semibold">Next.js (App Router)</dd>
              </div>
              <div className="flex items-baseline justify-between">
                <dt>Styling</dt>
                <dd className="font-semibold">Tailwind CSS</dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>
    </main>
  );
}
