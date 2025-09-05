'use client';

import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SearchBar, { type SearchFilters } from '@/components/SearchBar';
import ListingCard from '@/components/ListingCard';
import { listings as DATA } from '@/lib/data/listings';
import { createContainerVariants } from '@/lib/motion';

export default function HomePage() {
  const [filtered, setFiltered] = useState(DATA);
  const [loading, setLoading] = useState(true);
  const [sort, setSort] = useState('newest');
  const reduced = useReducedMotion();
  const containerVariants = createContainerVariants(reduced);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(t);
  }, []);

  const onSearch = (f: SearchFilters) => {
    setLoading(true);
    setTimeout(() => {
      let res = [...DATA];
      if (f.location) {
        const q = f.location.toLowerCase();
        res = res.filter(l =>
          l.address.city.toLowerCase().includes(q) ||
          l.address.state.toLowerCase().includes(q) ||
          l.address.zip.includes(f.location) ||
          l.address.street.toLowerCase().includes(q)
        );
      }
      if (f.priceMin) { const v = parseInt(f.priceMin); if (!isNaN(v)) res = res.filter(l => l.price >= v); }
      if (f.priceMax) { const v = parseInt(f.priceMax); if (!isNaN(v)) res = res.filter(l => l.price <= v); }
      if (f.beds !== 'Any') { const v = parseInt(f.beds); if (!isNaN(v)) res = res.filter(l => l.bedrooms >= v); }
      if (f.baths !== 'Any') { const v = parseInt(f.baths); if (!isNaN(v)) res = res.filter(l => l.bathrooms >= v); }
      if (f.propertyType !== 'Any') res = res.filter(l => l.propertyType === f.propertyType);
      setFiltered(res);
      setLoading(false);
    }, 400);
  };

  const onSort = (opt: string) => {
    setSort(opt);
    let s = [...filtered];
    if (opt === 'price-asc') s.sort((a,b)=>a.price-b.price);
    else if (opt === 'price-desc') s.sort((a,b)=>b.price-a.price);
    else if (opt === 'beds-desc') s.sort((a,b)=>b.bedrooms-a.bedrooms);
    else if (opt === 'sqft-desc') s.sort((a,b)=>b.squareFeet-a.squareFeet);
    else s.sort((a,b)=> new Date(b.listedDate).getTime() - new Date(a.listedDate).getTime());
    setFiltered(s);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main id="main-content" className="flex-1">
        {/* Hero */}
        <section className="relative bg-blue-700 dark:bg-blue-900 text-white py-16 md:py-24">
          <div className="absolute inset-0 overflow-hidden">
            {/* decorative image */}
            <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=60" alt=""
              className="w-full h-full object-cover opacity-20" />
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Find Your Dream Home</h1>
              <p className="text-xl md:text-2xl mb-8">Discover the perfect property that matches your lifestyle.</p>
            </div>
            <div className="mt-8">
              <SearchBar onSearch={onSearch} />
            </div>
          </div>
        </section>

        {/* Listings */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
              <div className="mb-4 md:mb-0">
                <h2 className="text-2xl md:text-3xl font-bold">Featured Properties</h2>
                <p className="text-gray-700 dark:text-gray-300 mt-1">
                  <span aria-live="polite">
                    {loading ? 'Loading properties...' : `Showing ${filtered.length} properties`}
                  </span>
                </p>
              </div>
              <div className="flex items-center">
                <label htmlFor="sort" className="mr-2 text-gray-700 dark:text-gray-300 text-sm">Sort by:</label>
                <select id="sort" value={sort} onChange={(e)=>onSort(e.target.value)}
                  className="border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="newest">Newest First</option>
                  <option value="price-asc">Price (Low to High)</option>
                  <option value="price-desc">Price (High to Low)</option>
                  <option value="beds-desc">Most Bedrooms</option>
                  <option value="sqft-desc">Largest Size</option>
                </select>
              </div>
            </div>

            {loading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div key={i} className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm h-full animate-pulse">
                    <div className="aspect-[4/3] bg-gray-300 dark:bg-gray-700" />
                    <div className="p-4">
                      <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded mb-2" />
                      <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded mb-4 w-2/3" />
                      <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded w-full" />
                    </div>
                  </div>
                ))}
              </div>
            ) : filtered.length === 0 ? (
              <div className="text-center py-12">
                <h3 className="text-xl font-medium mb-2">No properties found</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">Try adjusting your search filters</p>
                <button onClick={() => onSearch({ location: '', priceMin: '', priceMax: '', beds: 'Any', baths: 'Any', propertyType: 'Any' })}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Reset Filters</button>
              </div>
            ) : (
              <motion.div variants={containerVariants} initial="hidden" animate="visible"
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filtered.map((l, i) => <ListingCard key={l.id} listing={l} index={i} />)}
              </motion.div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
