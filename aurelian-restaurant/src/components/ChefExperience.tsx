'use client';

import { motion } from 'framer-motion';

const easing = [0.25, 0.1, 0.25, 1];

const stats = [
  { value: '22', label: 'Years of Excellence' },
  { value: '3', label: 'Michelin Stars' },
  { value: '15', label: 'International Awards' },
  { value: '50k+', label: 'Guests Served Annually' },
];

export default function ChefExperience() {
  return (
    <section id="chef-experience" className="relative py-24 md:py-32 bg-charcoal overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Chef portrait */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.9, ease: easing as unknown as number[] }}
            className="relative"
          >
            <div className="relative aspect-[3/4] max-w-md mx-auto lg:mx-0 rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=700&q=80"
                alt="Chef Marcus Aurelian"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-black/50 to-transparent" />
            </div>
            {/* Decorative gold border accent */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-gold/20 rounded-2xl -z-10" />
            <div className="absolute -top-4 -left-4 w-24 h-24 border border-gold/10 rounded-2xl -z-10" />
          </motion.div>

          {/* Right: Story and philosophy */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.9, ease: easing as unknown as number[] }}
          >
            <p
              className="text-gold text-xs tracking-[0.4em] uppercase mb-4"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              The Chef
            </p>
            <h2 className="heading-display text-3xl md:text-4xl lg:text-5xl text-ivory mb-3">
              Marcus <span className="gold-text">Aurelian</span>
            </h2>
            <p
              className="text-subtext text-sm mb-8"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              Executive Chef &amp; Founder
            </p>

            <div className="divider-gold mb-8" />

            <p className="text-ivory/80 text-sm leading-[1.8] mb-6" style={{ fontFamily: 'var(--font-inter)' }}>
              With over two decades of culinary mastery spanning three continents,
              Chef Marcus Aurelian has redefined what it means to dine at the highest level.
              His philosophy is rooted in the belief that extraordinary dining begins with
              extraordinary ingredients, each treated with the reverence and precision they deserve.
            </p>
            <p className="text-ivory/80 text-sm leading-[1.8] mb-10" style={{ fontFamily: 'var(--font-inter)' }}>
              Trained under the tutelage of culinary legends in Paris, Tokyo, and Copenhagen,
              Marcus brings a unique perspective that blends classical French technique with
              Japanese precision and Nordic innovation. His dishes are not merely meals but
              narratives, each plate a chapter in a story that unfolds with every course.
            </p>

            {/* Quote */}
            <blockquote className="border-l-2 border-gold/40 pl-6 mb-10">
              <p className="heading-editorial text-xl md:text-2xl text-ivory/90 italic leading-relaxed">
                &ldquo;Cooking is the ultimate act of generosity. Every dish I create
                is an invitation to share in something beautiful.&rdquo;
              </p>
            </blockquote>

            {/* Stats grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                >
                  <p className="heading-display text-2xl md:text-3xl gold-text mb-1">
                    {stat.value}
                  </p>
                  <p className="text-subtext text-[11px] tracking-wide" style={{ fontFamily: 'var(--font-inter)' }}>
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}