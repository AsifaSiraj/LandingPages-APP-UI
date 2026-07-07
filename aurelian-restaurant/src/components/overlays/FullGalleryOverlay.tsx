'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppStore } from '@/store/useAppStore';

const allGalleryImages = [
  { src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1600&q=85', alt: 'Chef preparing a signature dish', category: 'Kitchen' },
  { src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600&q=85', alt: 'Restaurant interior', category: 'Interior' },
  { src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&q=85', alt: 'Fine dining table setup', category: 'Dining' },
  { src: 'https://images.unsplash.com/photo-1550966871-3ed3cdb51f3a?w=1600&q=85', alt: 'Wine cellar', category: 'Wine' },
  { src: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=1600&q=85', alt: 'Elegant ambiance', category: 'Interior' },
  { src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1600&q=85', alt: 'Dessert artistry', category: 'Food' },
  { src: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=1600&q=85', alt: 'Kitchen artistry', category: 'Kitchen' },
  { src: 'https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=1600&q=85', alt: 'Private dining', category: 'Dining' },
  { src: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=1600&q=85', alt: 'Chef portrait', category: 'Kitchen' },
  { src: 'https://images.unsplash.com/photo-1546833998-877b37c2e5c6?w=1600&q=85', alt: 'Wagyu beef', category: 'Food' },
  { src: 'https://images.unsplash.com/photo-1559737558-2f5a35f4523b?w=1600&q=85', alt: 'Lobster thermidor', category: 'Food' },
  { src: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=1600&q=85', alt: 'Truffle pasta', category: 'Food' },
  { src: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=1600&q=85', alt: 'Sushi selection', category: 'Food' },
  { src: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=1600&q=85', alt: 'Mille-feuille', category: 'Food' },
  { src: 'https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab?w=1600&q=85', alt: 'Sea bass', category: 'Food' },
  { src: 'https://images.unsplash.com/photo-1432139509613-5c4255a1d0a7?w=1600&q=85', alt: 'Foie gras', category: 'Food' },
  { src: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=1600&q=85', alt: 'Truffle risotto', category: 'Food' },
  { src: 'https://images.unsplash.com/photo-1580554530778-ca36943571b4?w=1600&q=85', alt: 'Duck confit', category: 'Food' },
];

const categories = ['All', 'Food', 'Interior', 'Kitchen', 'Dining', 'Wine'];

export default function FullGalleryOverlay() {
  const { setActiveView } = useAppStore();
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = activeCategory === 'All' ? allGalleryImages : allGalleryImages.filter((img) => img.category === activeCategory);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed inset-0 z-[60] bg-deep-black overflow-y-auto"
    >
      {/* Header */}
      <div className="sticky top-0 z-10 glass py-5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
          <div>
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-1" style={{ fontFamily: 'var(--font-inter)' }}>
              Visual Journey
            </p>
            <h2 className="heading-display text-2xl md:text-3xl text-ivory">
              Full Gallery
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

        {/* Category filters */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-5">
          <div className="flex gap-3 overflow-x-auto pb-2">
            {categories.map((cat) => (
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

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((img, i) => (
              <motion.button
                key={`${img.src}-${activeCategory}`}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.03 }}
                onClick={() => setLightboxIndex(i)}
                className="relative aspect-square overflow-hidden rounded-xl group cursor-pointer"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-deep-black/0 group-hover:bg-deep-black/40 transition-colors duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                  <p className="text-ivory text-sm" style={{ fontFamily: 'var(--font-cormorant)' }}>{img.alt}</p>
                  <p className="text-gold text-[10px] tracking-[0.2em] uppercase mt-1" style={{ fontFamily: 'var(--font-inter)' }}>{img.category}</p>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && filtered[lightboxIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-deep-black/98 flex items-center justify-center p-6"
            onClick={() => setLightboxIndex(null)}
          >
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 text-subtext hover:text-gold transition-colors z-10"
              aria-label="Close lightbox"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>

            {/* Prev/Next */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex(lightboxIndex > 0 ? lightboxIndex - 1 : filtered.length - 1);
              }}
              className="absolute left-4 md:left-8 text-subtext hover:text-gold transition-colors z-10"
              aria-label="Previous"
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex(lightboxIndex < filtered.length - 1 ? lightboxIndex + 1 : 0);
              }}
              className="absolute right-4 md:right-8 text-subtext hover:text-gold transition-colors z-10"
              aria-label="Next"
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>

            <motion.img
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              src={filtered[lightboxIndex].src.replace('w=1600', 'w=1920')}
              alt={filtered[lightboxIndex].alt}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Caption */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
              <p className="text-ivory text-sm" style={{ fontFamily: 'var(--font-cormorant)' }}>
                {filtered[lightboxIndex].alt}
              </p>
              <p className="text-subtext text-xs mt-1" style={{ fontFamily: 'var(--font-inter)' }}>
                {lightboxIndex + 1} / {filtered.length}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}