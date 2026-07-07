'use client';

import { motion } from 'framer-motion';

const easing = [0.25, 0.1, 0.25, 1];

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1200&q=80',
    alt: 'Chef preparing a signature dish',
    span: 'md:col-span-3 md:row-span-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80',
    alt: 'Restaurant interior',
    span: 'md:col-span-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80',
    alt: 'Fine dining setup',
    span: 'md:col-span-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1550966871-3ed3cdb51f3a?w=800&q=80',
    alt: 'Wine cellar',
    span: 'md:col-span-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=800&q=80',
    alt: 'Elegant ambiance',
    span: 'md:col-span-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80',
    alt: 'Dessert artistry',
    span: 'md:col-span-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80',
    alt: 'Kitchen artistry',
    span: 'md:col-span-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=800&q=80',
    alt: 'Private dining',
    span: 'md:col-span-2',
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="relative py-24 md:py-32 bg-deep-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: easing as unknown as number[] }}
            className="text-gold text-xs tracking-[0.4em] uppercase mb-4"
            style={{ fontFamily: 'var(--font-inter)' }}
          >
            Visual Journey
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.1, ease: easing as unknown as number[] }}
            className="heading-display text-3xl md:text-4xl lg:text-5xl text-ivory"
          >
            The <span className="gold-text">Gallery</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2, ease: easing as unknown as number[] }}
            className="text-subtext text-sm md:text-base max-w-xl mx-auto mt-6 leading-relaxed"
            style={{ fontFamily: 'var(--font-inter)' }}
          >
            A curated collection of moments captured within our walls, from the intimacy of private dining to the artistry of every plate.
          </motion.p>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[260px]">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: i * 0.06, ease: easing as unknown as number[] }}
              className={`group relative overflow-hidden rounded-xl cursor-pointer ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-deep-black/0 group-hover:bg-deep-black/30 transition-colors duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-5 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                <p className="text-ivory text-sm" style={{ fontFamily: 'var(--font-cormorant)' }}>
                  {img.alt}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}