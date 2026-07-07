'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppStore } from '@/store/useAppStore';

interface MenuItem {
  id: number;
  name: string;
  price: string;
  description: string;
  image: string;
  category: string;
  chefPick: boolean;
}

const menuCategories = ['All', 'Starters', 'Mains', 'Seafood', 'Pasta', 'Desserts', 'Sushi', 'Beverages'];

const menuItems: MenuItem[] = [
  { id: 1, name: 'Foie Gras Terrine', price: '$65', description: 'House-made foie gras with spiced fig compote, toasted brioche, and fleur de sel. A rich, velvety start to any meal.', image: 'https://images.unsplash.com/photo-1432139509613-5c4255a1d0a7?w=400&q=75', category: 'Starters', chefPick: true },
  { id: 2, name: 'Burrata & Heirloom Tomato', price: '$42', description: 'Creamy burrata with vine-ripened heirloom tomatoes, aged balsamic reduction, and micro-basil.', image: 'https://images.unsplash.com/photo-1608897013039-887f21d8c804?w=400&q=75', category: 'Starters', chefPick: false },
  { id: 3, name: 'Tuna Tartare', price: '$55', description: 'Yellowfin tuna with avocado mousse, sesame tuile, yuzu dressing, and wasabi crème fraîche.', image: 'https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab?w=400&q=75', category: 'Starters', chefPick: false },
  { id: 4, name: 'Wagyu Beef Tenderloin', price: '$185', description: 'A5 Japanese Wagyu, seared to perfection with truffle jus, roasted bone marrow, and seasonal microgreens.', image: 'https://images.unsplash.com/photo-1546833998-877b37c2e5c6?w=400&q=75', category: 'Mains', chefPick: true },
  { id: 5, name: 'Duck Confit', price: '$85', description: 'Slow-cooked duck leg with cherry gastrique, roasted root vegetables, and herb salad.', image: 'https://images.unsplash.com/photo-1580554530778-ca36943571b4?w=400&q=75', category: 'Mains', chefPick: false },
  { id: 6, name: 'Rack of Lamb', price: '$145', description: 'Herb-crusted New Zealand lamb with pommes dauphine, glazed baby carrots, and rosemary jus.', image: 'https://images.unsplash.com/photo-1514516345957-556ca7d90a29?w=400&q=75', category: 'Mains', chefPick: false },
  { id: 7, name: 'Lobster Thermidor', price: '$165', description: 'Maine lobster baked in brandy cream sauce with Gruyere gratin and saffron risotto.', image: 'https://images.unsplash.com/photo-1559737558-2f5a35f4523b?w=400&q=75', category: 'Seafood', chefPick: true },
  { id: 8, name: 'Pan-Seared Sea Bass', price: '$145', description: 'Mediterranean sea bass with crispy skin, saffron beurre blanc, charred leeks, and caviar.', image: 'https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab?w=400&q=75', category: 'Seafood', chefPick: false },
  { id: 9, name: 'Black Truffle Pasta', price: '$125', description: 'Hand-rolled tagliatelle with fresh Perigord truffles, aged Parmigiano-Reggiano, and brown butter.', image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=400&q=75', category: 'Pasta', chefPick: true },
  { id: 10, name: 'Lobster Linguine', price: '$110', description: 'Fresh linguine with Maine lobster, cherry tomatoes, garlic, white wine, and tarragon.', image: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=400&q=75', category: 'Pasta', chefPick: false },
  { id: 11, name: 'Grand Mille-Feuille', price: '$75', description: 'Caramelized puff pastry with Madagascar vanilla cream, fresh raspberries, and gold leaf.', image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&q=75', category: 'Desserts', chefPick: true },
  { id: 12, name: 'Chocolate Soufflé', price: '$45', description: 'Dark Valrhona chocolate soufflé with crème anglaise and cocoa dust. Prepared with 20 minutes notice.', image: 'https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?w=400&q=75', category: 'Desserts', chefPick: false },
  { id: 13, name: 'Omakase Sushi', price: '$220', description: "Chef's curated 12-piece premium nigiri featuring seasonal fish flown in daily from Tsukiji Market.", image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&q=75', category: 'Sushi', chefPick: true },
  { id: 14, name: 'Truffle Risotto', price: '$95', description: 'Carnaroli rice with black truffle shavings, aged Parmesan, and a drizzle of truffle oil.', image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=400&q=75', category: 'Mains', chefPick: false },
  { id: 15, name: 'Champagne Collection', price: '$45–$850', description: 'Curated selection of vintage Champagnes from prestigious houses including Dom Pérignon, Cristal, and Salon.', image: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=400&q=75', category: 'Beverages', chefPick: false },
  { id: 16, name: 'Wine Pairing Flight', price: '$120', description: 'Five-course wine pairing selected by our sommelier to complement the tasting menu.', image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400&q=75', category: 'Beverages', chefPick: true },
];

export default function FullMenuOverlay() {
  const { setActiveView, addToCart } = useAppStore();
  const [activeCategory, setActiveCategory] = useState('All');
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const filtered = activeCategory === 'All' ? menuItems : menuItems.filter((item) => item.category === activeCategory);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed inset-0 z-[60] bg-deep-black overflow-y-auto"
    >
      {/* Sticky header */}
      <div className="sticky top-0 z-10 glass py-5">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 flex items-center justify-between">
          <div>
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-1" style={{ fontFamily: 'var(--font-inter)' }}>
              Culinary Excellence
            </p>
            <h2 className="heading-display text-2xl md:text-3xl text-ivory">
              The Full Menu
            </h2>
          </div>
          <button
            onClick={() => setActiveView(null)}
            className="text-subtext hover:text-gold transition-colors duration-300"
            aria-label="Close"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Category tabs */}
        <div className="max-w-5xl mx-auto px-6 lg:px-8 mt-5">
          <div className="flex gap-3 overflow-x-auto pb-2">
            {menuCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-xs tracking-wider transition-all duration-300 border ${
                  activeCategory === cat
                    ? 'border-gold text-gold bg-gold/10'
                    : 'border-white/10 text-subtext hover:border-gold/30 hover:text-ivory'
                }`}
                style={{ fontFamily: 'var(--font-inter)' }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Menu list */}
      <div className="max-w-5xl mx-auto px-6 lg:px-8 py-8 pb-20">
        <AnimatePresence mode="popLayout">
          {filtered.map((item, i) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, delay: i * 0.03 }}
              className="border-b border-white/[0.06] py-6 group"
            >
              <button
                onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
                className="w-full text-left"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1.5">
                      <h3 className="heading-display text-lg md:text-xl text-ivory group-hover:text-gold transition-colors duration-300">
                        {item.name}
                      </h3>
                      {item.chefPick && (
                        <span className="text-[9px] tracking-[0.2em] uppercase border border-gold/30 text-gold px-2 py-0.5 rounded-full flex-shrink-0" style={{ fontFamily: 'var(--font-inter)' }}>
                          Chef&apos;s Pick
                        </span>
                      )}
                    </div>
                    <p className="text-subtext text-xs" style={{ fontFamily: 'var(--font-inter)' }}>
                      {item.category}
                    </p>
                  </div>
                  <div className="flex items-center gap-4 flex-shrink-0">
                    <span className="heading-editorial text-xl text-gold">{item.price}</span>
                    <svg
                      width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
                      className={`text-subtext transition-transform duration-300 ${expandedId === item.id ? 'rotate-180' : ''}`}
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </div>
                </div>

                <AnimatePresence>
                  {expandedId === item.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="flex flex-col sm:flex-row gap-5 mt-4 pt-4 border-t border-white/[0.04]">
                        <div className="w-28 h-28 rounded-xl overflow-hidden flex-shrink-0">
                          <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1">
                          <p className="text-ivory/70 text-sm leading-relaxed mb-4" style={{ fontFamily: 'var(--font-inter)' }}>
                            {item.description}
                          </p>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              addToCart({ id: item.id, name: item.name, price: item.price, image: item.image, portion: 'Regular' });
                            }}
                            className="btn-luxury px-5 py-2.5 border border-gold/30 text-gold text-[10px] tracking-[0.2em] uppercase hover:bg-gold hover:text-deep-black transition-all duration-400"
                            style={{ fontFamily: 'var(--font-inter)' }}
                          >
                            Add to Order
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </AnimatePresence>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-subtext text-sm" style={{ fontFamily: 'var(--font-inter)' }}>
              No items in this category yet
            </p>
          </div>
        )}
      </div>
    </motion.div>
  );
}