'use client';

import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useAppStore } from '@/store/useAppStore';

const searchableItems = [
  { name: 'Wagyu Beef Tenderloin', category: 'Mains', price: '$185' },
  { name: 'Lobster Thermidor', category: 'Seafood', price: '$165' },
  { name: 'Black Truffle Pasta', category: 'Pasta', price: '$125' },
  { name: 'Omakase Sushi Selection', category: 'Sushi', price: '$220' },
  { name: 'Grand Mille-Feuille', category: 'Desserts', price: '$75' },
  { name: 'Pan-Seared Sea Bass', category: 'Seafood', price: '$145' },
  { name: 'Foie Gras Terrine', category: 'Starters', price: '$65' },
  { name: 'Duck Confit', category: 'Mains', price: '$85' },
  { name: 'Truffle Risotto', category: 'Mains', price: '$95' },
  { name: 'Chocolate Soufflé', category: 'Desserts', price: '$45' },
  { name: 'Champagne Collection', category: 'Beverages', price: '$45–$850' },
  { name: 'Wine Pairing Flight', category: 'Beverages', price: '$120' },
  { name: 'Seared Foie Gras', category: 'Starters', price: '$110' },
  { name: 'Caviar Service', category: 'Starters', price: '$150' },
  { name: 'Burrata & Heirloom Tomato', category: 'Starters', price: '$42' },
  { name: 'Tuna Tartare', category: 'Starters', price: '$55' },
  { name: 'Rack of Lamb', category: 'Mains', price: '$145' },
  { name: 'Lobster Linguine', category: 'Pasta', price: '$110' },
  { name: 'Reservations', category: 'Page', price: '' },
  { name: 'Private Dining', category: 'Experience', price: '' },
  { name: 'Chef Marcus Aurelian', category: 'About', price: '' },
  { name: 'Gallery', category: 'Page', price: '' },
  { name: 'Wine Cellar', category: 'Experience', price: '' },
];

export default function SearchOverlay() {
  const { setActiveView, searchQuery, setSearchQuery } = useAppStore();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const results = searchQuery.length > 1
    ? searchableItems.filter(
        (item) =>
          item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const handleSelect = (item: typeof searchableItems[0]) => {
    if (item.category === 'Page') {
      if (item.name === 'Reservations') {
        setActiveView(null);
        setTimeout(() => {
          document.querySelector('#reservations')?.scrollIntoView({ behavior: 'smooth' });
        }, 300);
      } else if (item.name === 'Gallery') {
        setActiveView('full-gallery');
      }
    } else {
      setActiveView('full-menu');
    }
    setSearchQuery('');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[60] bg-deep-black/95 backdrop-blur-2xl"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          setActiveView(null);
          setSearchQuery('');
        }
      }}
    >
      <div className="max-w-2xl mx-auto px-6 pt-24 md:pt-32">
        {/* Search input */}
        <div className="relative mb-8">
          <svg
            className="absolute left-0 top-1/2 -translate-y-1/2 text-subtext"
            width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
          <input
            ref={inputRef}
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Escape' && setActiveView(null)}
            placeholder="Search dishes, experiences, pages..."
            className="w-full bg-transparent text-ivory text-2xl md:text-3xl border-b-2 border-white/10 focus:border-gold pb-4 pl-10 focus:outline-none transition-colors duration-300 placeholder:text-subtext/30"
            style={{ fontFamily: 'var(--font-playfair)' }}
          />
          <button
            onClick={() => { setActiveView(null); setSearchQuery(''); }}
            className="absolute right-0 top-1/2 -translate-y-1/2 text-subtext hover:text-gold transition-colors text-xs tracking-wider"
            style={{ fontFamily: 'var(--font-inter)' }}
          >
            ESC
          </button>
        </div>

        {/* Results */}
        {searchQuery.length > 1 && (
          <div>
            {results.length > 0 ? (
              <>
                <p className="text-subtext text-xs tracking-wider mb-4" style={{ fontFamily: 'var(--font-inter)' }}>
                  {results.length} result{results.length !== 1 ? 's' : ''}
                </p>
                <div className="space-y-1">
                  {results.map((item, i) => (
                    <motion.button
                      key={item.name}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.04 }}
                      onClick={() => handleSelect(item)}
                      className="w-full text-left flex items-center justify-between py-4 px-3 rounded-lg hover:bg-white/[0.03] transition-colors duration-200 group"
                    >
                      <div>
                        <p className="text-ivory text-base group-hover:text-gold transition-colors duration-200" style={{ fontFamily: 'var(--font-inter)' }}>
                          {item.name}
                        </p>
                        <p className="text-subtext text-xs mt-0.5" style={{ fontFamily: 'var(--font-inter)' }}>
                          {item.category}
                        </p>
                      </div>
                      {item.price && (
                        <span className="text-gold text-sm heading-editorial">{item.price}</span>
                      )}
                    </motion.button>
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-16">
                <p className="text-subtext text-lg heading-editorial mb-2">No results found</p>
                <p className="text-subtext/50 text-sm" style={{ fontFamily: 'var(--font-inter)' }}>
                  Try searching for &ldquo;wagyu&rdquo;, &ldquo;dessert&rdquo;, or &ldquo;wine&rdquo;
                </p>
              </div>
            )}
          </div>
        )}

        {/* Quick suggestions when empty */}
        {searchQuery.length <= 1 && (
          <div>
            <p className="text-subtext text-xs tracking-wider mb-5" style={{ fontFamily: 'var(--font-inter)' }}>
              Popular Searches
            </p>
            <div className="flex flex-wrap gap-2">
              {['Wagyu', 'Truffle', 'Lobster', 'Dessert', 'Wine Pairing', 'Chef\'s Table', 'Private Dining', 'Sushi'].map((term) => (
                <button
                  key={term}
                  onClick={() => setSearchQuery(term)}
                  className="px-4 py-2 rounded-full border border-white/10 text-subtext text-xs hover:border-gold/30 hover:text-ivory transition-all duration-300"
                  style={{ fontFamily: 'var(--font-inter)' }}
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}