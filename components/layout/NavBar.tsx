'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, useReducedMotion } from 'framer-motion';
import { Menu, X, Home, Search, User, Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const pathname = usePathname();
  const reduced = useReducedMotion() ?? false;

  // Dark mode sync
  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDark(mq.matches);
    document.documentElement.classList.toggle('dark', mq.matches);
    const onChange = (e: MediaQueryListEvent) => {
      setIsDark(e.matches);
      document.documentElement.classList.toggle('dark', e.matches);
    };
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  const toggleDark = () => {
    setIsDark(v => {
      const next = !v;
      document.documentElement.classList.toggle('dark', next);
      return next;
    });
  };

  const linkClass = (href: string) =>
    `text-sm md:text-base font-medium transition-colors ${
      pathname === href
        ? 'text-blue-500'
        : 'text-slate-300 hover:text-blue-400'
    }`;

  return (
    <header className="sticky top-0 z-50 w-full bg-slate-900/95 backdrop-blur supports-[backdrop-filter]:bg-slate-900/80">
      {/* Skip link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] bg-blue-600 text-white px-3 py-2 rounded"
      >
        Skip to main content
      </a>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop bar */}
        <div className="hidden md:grid grid-cols-3 items-center h-16">
          {/* Left: Logo */}
          <Link href="/" className="flex items-center space-x-2" aria-label="HomeHarbor">
            <motion.div
              whileHover={reduced ? {} : { rotate: 10 }}
              className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center"
            >
              <Home className="w-5 h-5 text-white" />
            </motion.div>
            <span className="text-lg md:text-xl font-semibold text-white">HomeHarbor</span>
          </Link>

          {/* Center: Nav */}
          <nav className="justify-self-center flex items-center gap-8">
            <Link href="/" className={linkClass('/')}>Home</Link>
            <Link href="/listings" className={linkClass('/listings')}>Listings</Link>
            <Link href="/about" className={linkClass('/about')}>About</Link>
            <Link href="/contact" className={linkClass('/contact')}>Contact</Link>
          </nav>

          {/* Right: Actions */}
          <div className="justify-self-end flex items-center gap-5 text-slate-300">
            <button
              onClick={toggleDark}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              className="p-2 rounded-full hover:text-white hover:bg-white/10"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <Link
              href="/listings"
              aria-label="Search properties"
              className="p-2 rounded-full hover:text-white hover:bg-white/10"
            >
              <Search className="w-5 h-5" />
            </Link>
            <button
              aria-label="User account"
              className="p-2 rounded-full hover:text-white hover:bg-white/10"
            >
              <User className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mobile bar */}
        <div className="md:hidden flex items-center justify-between h-14">
          <Link href="/" className="flex items-center space-x-2" aria-label="HomeHarbor">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <Home className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-semibold text-white">HomeHarbor</span>
          </Link>

          <button
            onClick={() => setIsOpen(v => !v)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            className="p-2 rounded-md text-slate-300 hover:text-white hover:bg-white/10"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu panel */}
        <motion.nav
          id="mobile-menu"
          initial={false}
          animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          className="md:hidden overflow-hidden"
        >
          <div className="pb-3 pt-1 space-y-1 text-slate-200">
            <Link href="/" onClick={() => setIsOpen(false)} className="block px-2 py-2 rounded hover:bg-white/10">Home</Link>
            <Link href="/listings" onClick={() => setIsOpen(false)} className="block px-2 py-2 rounded hover:bg-white/10">Listings</Link>
            <Link href="/about" onClick={() => setIsOpen(false)} className="block px-2 py-2 rounded hover:bg-white/10">About</Link>
            <Link href="/contact" onClick={() => setIsOpen(false)} className="block px-2 py-2 rounded hover:bg-white/10">Contact</Link>
            <div className="flex items-center gap-3 px-2 pt-2">
              <button
                onClick={toggleDark}
                aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
                className="p-2 rounded-full hover:text-white hover:bg-white/10"
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <Link
                href="/listings"
                aria-label="Search properties"
                className="p-2 rounded-full hover:text-white hover:bg-white/10"
                onClick={() => setIsOpen(false)}
              >
                <Search className="w-5 h-5" />
              </Link>
              <button
                aria-label="User account"
                className="p-2 rounded-full hover:text-white hover:bg-white/10"
              >
                <User className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.nav>
      </div>
    </header>
  );
}
