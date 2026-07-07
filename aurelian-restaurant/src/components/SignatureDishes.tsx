'use client';

import { motion } from 'framer-motion';

const easing = [0.25, 0.1, 0.25, 1];

const signatureDishes = [
  {
    name: 'Truffle Risotto',
    description: 'Carnaroli rice with black truffle shavings, aged Parmesan, and a drizzle of truffle oil.',
    price: '$95',
    image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=600&q=80',
  },
  {
    name: 'Seared Foie Gras',
    description: 'Pan-seared duck foie gras with fig compote, brioche toast, and port wine reduction.',
    price: '$110',
    image: 'https://images.unsplash.com/photo-1432139509613-5c4255a1d0a7?w=600&q=80',
  },
  {
    name: 'Caviar Service',
    description: 'Royal Ossetra caviar with blini, creme fraiche, chives, and gold leaf accents.',
    price: '$150',
    image: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=600&q=80',
  },
  {
    name: 'Duck Confit',
    description: 'Slow-cooked duck leg confit with cherry gastrique, roasted root vegetables, and herb salad.',
    price: '$85',
    image: 'https://images.unsplash.com/photo-1580554530778-ca36943571b4?w=600&q=80',
  },
];

export default function SignatureDishes() {
  return (
    <section id="signature-dishes" className="relative py-24 md:py-32 bg-deep-black overflow-hidden">
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
            Signature Creations
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.1, ease: easing as unknown as number[] }}
            className="heading-display text-3xl md:text-4xl lg:text-5xl text-ivory"
          >
            Chef&apos;s <span className="gold-text">Masterpieces</span>
          </motion.h2>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {signatureDishes.map((dish, i) => (
            <motion.div
              key={dish.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: easing as unknown as number[] }}
              whileHover={{ y: -8, transition: { duration: 0.4 } }}
              className="group glass-card rounded-2xl overflow-hidden cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent" />
                {/* Price badge */}
                <div className="absolute top-4 right-4 glass rounded-full px-3 py-1">
                  <span className="text-gold text-xs" style={{ fontFamily: 'var(--font-inter)' }}>
                    {dish.price}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="heading-display text-xl text-ivory mb-3">
                  {dish.name}
                </h3>
                <p className="text-subtext text-xs leading-relaxed mb-5" style={{ fontFamily: 'var(--font-inter)' }}>
                  {dish.description}
                </p>
                <button className="btn-luxury w-full py-3 border border-gold/30 text-gold text-[10px] tracking-[0.25em] uppercase hover:bg-gold hover:text-deep-black transition-all duration-400">
                  Order Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}