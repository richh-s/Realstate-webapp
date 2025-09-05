'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, ChevronDown, X } from 'lucide-react';
import { buttonTapAnimation } from '@/lib/motion';
import React from 'react';

export interface SearchFilters {
  location: string;
  priceMin: string;
  priceMax: string;
  beds: string;
  baths: string;
  propertyType: string;
}

export default function SearchBar({ onSearch }: { onSearch: (f: SearchFilters) => void; }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [filters, setFilters] = useState<SearchFilters>({
    location: '', priceMin: '', priceMax: '', beds: 'Any', baths: 'Any', propertyType: 'Any'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFilters(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const reset = () => setFilters({ location: '', priceMin: '', priceMax: '', beds: 'Any', baths: 'Any', propertyType: 'Any' });

  return (
    <div className="w-full bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden">
      <form onSubmit={(e) => { e.preventDefault(); onSearch(filters); }} className="w-full">
        <div className="p-4">
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <div className="flex-grow">
              <label htmlFor="location" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Location</label>
              <div className="relative">
                <input id="location" name="location" value={filters.location} onChange={handleChange}
                  placeholder="City, neighborhood, or address"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white pr-10" />
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              </div>
            </div>

            <div className="md:w-auto">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">&nbsp;</label>
              <motion.button type="button" whileTap={buttonTapAnimation} onClick={() => setIsExpanded(v => !v)}
                className="w-full md:w-auto flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800">
                {isExpanded ? 'Hide Filters' : 'More Filters'}
                <ChevronDown className={`ml-2 w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
              </motion.button>
            </div>

            <div className="md:w-auto">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">&nbsp;</label>
              <motion.button type="submit" whileTap={buttonTapAnimation}
                className="w-full md:w-auto flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800">
                <Search className="w-5 h-5 mr-2" />
                Search
              </motion.button>
            </div>
          </div>

          <motion.div initial={false} animate={{ height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0 }}
            transition={{ duration: 0.3 }} className="overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
              {/* Price */}
              <div className="lg:col-span-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Price Range</label>
                <div className="flex space-x-2">
                  <div className="relative flex-1">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400">$</span>
                    <input id="priceMin" name="priceMin" value={filters.priceMin} onChange={handleChange}
                      placeholder="Min" className="w-full pl-8 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white" />
                  </div>
                  <div className="relative flex-1">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400">$</span>
                    <input id="priceMax" name="priceMax" value={filters.priceMax} onChange={handleChange}
                      placeholder="Max" className="w-full pl-8 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white" />
                  </div>
                </div>
              </div>

              {/* Beds */}
              <div>
                <label htmlFor="beds" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Bedrooms</label>
                <select id="beds" name="beds" value={filters.beds} onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white">
                  {['Any','0','1','2','3','4','5'].map(v => <option key={v} value={v}>{v === '0' ? 'Studio' : v === 'Any' ? 'Any' : `${v}+`}</option>)}
                </select>
              </div>

              {/* Baths */}
              <div>
                <label htmlFor="baths" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Bathrooms</label>
                <select id="baths" name="baths" value={filters.baths} onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white">
                  {['Any','1','2','3','4'].map(v => <option key={v} value={v}>{v === 'Any' ? 'Any' : `${v}+`}</option>)}
                </select>
              </div>

              {/* Type */}
              <div>
                <label htmlFor="propertyType" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Property Type</label>
                <select id="propertyType" name="propertyType" value={filters.propertyType} onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white">
                  {['Any','House','Condo','Townhouse','Apartment','Estate','Cabin','Cottage','Land'].map(v =>
                    <option key={v} value={v}>{v}</option>
                  )}
                </select>
              </div>

              <div className="lg:col-span-5 flex justify-end">
                <motion.button type="button" whileTap={buttonTapAnimation} onClick={reset}
                  className="flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                  <X className="w-4 h-4 mr-1" />
                  Clear Filters
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </form>
    </div>
  );
}
