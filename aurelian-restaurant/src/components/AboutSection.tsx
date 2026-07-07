'use client';

import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';
import { motion } from 'framer-motion';

const easing = [0.25, 0.1, 0.25, 1];

const values = [
  {
    title: 'Sourcing',
    description:
      'We partner directly with the world\'s finest purveyors, from Japanese fish markets to French truffle farms. Every ingredient is selected at its peak, ensuring that quality begins long before it reaches our kitchen.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C7A86D" strokeWidth="1.2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: 'Craftsmanship',
    description:
      'Each dish undergoes hours of development, testing, and refinement. Our kitchen team practices classical techniques while embracing modern innovation, resulting in flavors that are both timeless and surprising.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C7A86D" strokeWidth="1.2">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1m18.07-5.07l-4.24 4.24M9.17 9.17 4.93 4.93m14.14 14.14l-4.24-4.24M9.17 14.83l-4.24 4.24" />
      </svg>
    ),
  },
  {
    title: 'Seasonality',
    description:
      'Our menu evolves with the seasons, reflecting the natural rhythm of the finest produce available. This commitment to seasonality ensures that every visit offers a unique and perfectly timed culinary experience.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C7A86D" strokeWidth="1.2">
        <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75" />
      </svg>
    ),
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-deep-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Story */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, ease: easing as unknown as number[] }}
              className="text-gold text-xs tracking-[0.4em] uppercase mb-4"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              Our Story
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.1, ease: easing as unknown as number[] }}
              className="heading-display text-3xl md:text-4xl lg:text-5xl text-ivory mb-8"
            >
              Where Passion Meets <span className="gold-text">Perfection</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.2, ease: easing as unknown as number[] }}
              className="text-ivory/80 text-sm leading-[1.8] mb-6"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              Founded in 2018 by Chef Marcus Aurelian, our restaurant was born from a singular
              vision: to create a dining destination that honors the traditions of French haute
              cuisine while embracing the bold flavors and techniques of global gastronomy. What
              began as a humble 24-seat establishment has grown into one of the most celebrated
              dining experiences in the world.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.3, ease: easing as unknown as number[] }}
              className="text-ivory/80 text-sm leading-[1.8]"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              Located in the heart of Paris, Aurelian occupies a meticulously restored 19th-century
              townhouse. The space blends original architectural details with contemporary design,
              creating an atmosphere that is at once grand and intimate. Every element, from the
              hand-selected tableware to the curated art collection, has been chosen to enhance
              your dining journey.
            </motion.p>
          </div>

          {/* Right: Values */}
          <div className="space-y-8">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: i * 0.15, ease: easing as unknown as number[] }}
                className="glass-card rounded-xl p-6 md:p-8 group hover:border-gold/20 transition-colors duration-500"
              >
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full border border-gold/20 flex items-center justify-center group-hover:border-gold/40 transition-colors duration-500">
                    {value.icon}
                  </div>
                  <div>
                    <h3 className="heading-display text-xl text-ivory mb-3">
                      {value.title}
                    </h3>
                    <p className="text-subtext text-sm leading-relaxed" style={{ fontFamily: 'var(--font-inter)' }}>
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}