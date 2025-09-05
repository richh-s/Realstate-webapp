import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/NavBar';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'HomeHarbor – Real Estate',
  description: 'Find your dream home with modern listings and detail pages.',
  openGraph: {
    title: 'HomeHarbor – Real Estate',
    description: 'Find your dream home with modern listings and detail pages.',
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
  icons: { icon: '/favicon.ico' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] bg-blue-600 text-white px-3 py-2 rounded"
        >
          Skip to main content
        </a>

        <Navbar />

        <main id="main-content" className="min-h-[60vh]">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
