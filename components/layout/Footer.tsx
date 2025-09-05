'use client';

import Link from 'next/link';
import { Home, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <Home className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">HomeHarbor</span>
            </div>
            <p className="text-gray-400 mb-4">
              Finding your perfect home has never been easier. Explore our curated selection of properties.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" aria-label="Social" className="text-gray-400 hover:text-white">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home','Properties','About Us','Our Agents','Blog','Contact Us'].map((label) => (
                <li key={label}>
                  <Link href="/" className="text-gray-400 hover:text-white">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Property Types</h3>
            <ul className="space-y-2">
              {['Houses','Apartments','Condos','Townhouses','Land','Commercial'].map((label) => (
                <li key={label}>
                  <Link href="/" className="text-gray-400 hover:text-white">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-500 mt-0.5" />
                <span className="text-gray-400">123 Real Estate Blvd<br/>Seattle, WA 98101</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-500" />
                <span className="text-gray-400">(206) 555-1234</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-500" />
                <span className="text-gray-400">info@homeharbor.com</span>
              </li>
            </ul>
          </div>
        </div>
        <hr className="border-gray-800 my-8" />
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} HomeHarbor. All rights reserved.
          </p>
          <div className="flex space-x-4 text-sm text-gray-500">
            {['Privacy Policy','Terms of Service','Cookie Policy'].map((label) => (
              <Link key={label} href="/" className="hover:text-white">{label}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
