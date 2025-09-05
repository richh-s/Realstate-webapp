import type { Metadata } from 'next';
import AboutClient from './AboutClient';

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
  // Server component wrapper — renders the client UI
  return <AboutClient />;
}
