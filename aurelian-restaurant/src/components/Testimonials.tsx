'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const easing = [0.25, 0.1, 0.25, 1];

const testimonials = [
  {
    name: 'James Wellington',
    title: 'Food Critic, The Times',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
    text: 'Aurelian delivers what few restaurants can claim: a genuinely transformative experience. The Wagyu alone is worth the journey, and Chef Marcus has created something that transcends mere dining.',
    rating: 5,
  },
  {
    name: 'Sophia Laurent',
    title: 'Travel Editor, Condé Nast',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
    text: 'In twenty years of reviewing the world\'s finest establishments, Aurelian stands apart. The attention to detail, the theatrical presentation, and above all, the depth of flavor is simply unmatched.',
    rating: 5,
  },
  {
    name: 'Alexander Chen',
    title: 'Michelin Guide Inspector',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80',
    text: 'Every element at Aurelian reflects a chef at the absolute peak of his craft. The omakase sushi selection is a masterclass in precision and restraint, while the dessert program is nothing short of extraordinary.',
    rating: 5,
  },
  {
    name: 'Victoria Sterling',
    title: 'Interior Designer',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
    text: 'The ambiance is as carefully curated as the menu. From the moment you enter, every sense is engaged. The private dining experience for our anniversary was flawless in every conceivable way.',
    rating: 5,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const t = testimonials[current];

  return (
    <section id="testimonials" className="relative py-24 md:py-32 bg-charcoal overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: easing as unknown as number[] }}
            className="text-gold text-xs tracking-[0.4em] uppercase mb-4"
            style={{ fontFamily: 'var(--font-inter)' }}
          >
            Testimonials
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.1, ease: easing as unknown as number[] }}
            className="heading-display text-3xl md:text-4xl lg:text-5xl text-ivory"
          >
            Words from Our <span className="gold-text">Guests</span>
          </motion.h2>
        </div>

        {/* Testimonial card */}
        <div className="relative">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              initial={{ opacity: 0, x: direction * 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -direction * 60 }}
              transition={{ duration: 0.6, ease: easing as unknown as number[] }}
              className="glass-card rounded-2xl p-8 md:p-12 text-center"
            >
              {/* Quote mark */}
              <div className="mb-6">
                <span className="heading-display text-5xl md:text-6xl gold-text opacity-30">
                  &ldquo;
                </span>
              </div>

              <p className="text-ivory/90 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-8" style={{ fontFamily: 'var(--font-cormorant)' }}>
                {t.text}
              </p>

              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#C7A86D">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>

              {/* Author */}
              <div className="flex flex-col items-center gap-3">
                <div className="w-14 h-14 rounded-full overflow-hidden border border-gold/20">
                  <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="text-ivory text-sm font-medium" style={{ fontFamily: 'var(--font-inter)' }}>
                    {t.name}
                  </p>
                  <p className="text-subtext text-xs mt-0.5" style={{ fontFamily: 'var(--font-inter)' }}>
                    {t.title}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation arrows */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-subtext hover:border-gold hover:text-gold transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-subtext hover:border-gold hover:text-gold transition-all duration-300"
              aria-label="Next testimonial"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > current ? 1 : -1);
                  setCurrent(i);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-400 ${
                  i === current ? 'bg-gold w-6' : 'bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}