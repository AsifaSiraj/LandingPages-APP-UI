'use client';

import { motion } from 'framer-motion';

const easing = [0.25, 0.1, 0.25, 1];

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80',
    alt: 'Luxury restaurant interior',
    span: 'md:col-span-2 md:row-span-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&q=80',
    alt: 'Chef plating a dish',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80',
    alt: 'Fine dining table setup',
    span: '',
  },
  {
    src: '/images/wine-pairing.png',
    alt: 'Wine pairing experience',
    span: 'md:col-span-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=600&q=80',
    alt: 'Elegant dining ambiance',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80',
    alt: 'Gourmet dessert presentation',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80',
    alt: 'Kitchen moments',
    span: 'md:col-span-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=600&q=80',
    alt: 'Private dining room',
    span: '',
  },
];

export default function MenuCollection() {
  return (
    <section id="menu-collection" className="relative py-24 md:py-32 bg-charcoal overflow-hidden">
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
            Our Collection
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.1, ease: easing as unknown as number[] }}
            className="heading-display text-3xl md:text-4xl lg:text-5xl text-ivory"
          >
            The Art of <span className="gold-text">Dining</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2, ease: easing as unknown as number[] }}
            className="text-subtext text-sm md:text-base max-w-xl mx-auto mt-6 leading-relaxed"
            style={{ fontFamily: 'var(--font-inter)' }}
          >
            Every dish tells a story. Every ingredient is chosen with purpose.
            Explore the visual journey of our culinary excellence.
          </motion.p>
        </div>

        {/* Magazine-style grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-5 auto-rows-[220px] md:auto-rows-[240px]">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: easing as unknown as number[] }}
              className={`group relative overflow-hidden rounded-xl cursor-pointer ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
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