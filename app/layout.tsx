import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'HomeHarbor – Real Estate',
  description: 'Find your dream home with modern listings and detail pages.',
  openGraph: {
    title: 'HomeHarbor – Real Estate',
    description: 'Find your dream home with modern listings and detail pages.',
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
  icons: { icon: '/favicon.ico' }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
        {children}
      </body>
    </html>
  );
}
