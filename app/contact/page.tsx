// app/contact/page.tsx
import type { Metadata } from 'next';
import ContactForm from '@/components/forms/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us | HomeHarbor',
  description:
    'Get in touch with HomeHarbor about listings, partnerships, or support. We usually reply within one business day.',
  openGraph: {
    title: 'Contact Us | HomeHarbor',
    description:
      'Get in touch with HomeHarbor about listings, partnerships, or support.',
    type: 'website',
    url: 'https://your-domain.com/contact',
  },
  alternates: { canonical: 'https://your-domain.com/contact' },
};

export default function ContactPage() {
  // You can set these based on route/search params if needed
  const agentName = 'Sarah Johnson';
  const propertyTitle = 'General Inquiry';

  return (
    <main id="main-content" className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="max-w-2xl">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Contact Us
          </h1>
          <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
            Have a question about a property or partnership? Send us a message and we’ll respond shortly.
          </p>
        </header>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <section
            aria-label="Contact form"
            className="lg:col-span-2"
          >
            <ContactForm agentName={agentName} propertyTitle={propertyTitle} />
          </section>

          <aside className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Office
            </h2>
            <address className="not-italic text-gray-700 dark:text-gray-300">
              123 Real Estate Blvd
              <br />
              Seattle, WA 98101
            </address>

            <div className="mt-4 space-y-2 text-gray-700 dark:text-gray-300">
              <p>
                Phone:{' '}
                <a className="text-blue-600 dark:text-blue-400" href="tel:+12065551234">
                  (206) 555-1234
                </a>
              </p>
              <p>
                Email:{' '}
                <a className="text-blue-600 dark:text-blue-400" href="mailto:info@homeharbor.com">
                  info@homeharbor.com
                </a>
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                Mon–Fri, 9:00–17:00 PT
              </p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
