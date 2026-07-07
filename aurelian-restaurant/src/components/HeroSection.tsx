'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current || !imageRef.current) return;

    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      gsap.to(imageRef.current, {
        x: x,
        y: y,
        duration: 1.2,
        ease: 'power2.out',
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative h-screen w-full overflow-hidden flex items-center justify-center"
    >
      {/* Background image with slow zoom */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          ref={imageRef}
          className="absolute inset-[-40px] animate-slow-zoom"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-deep-black z-10" />

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p
            className="text-gold text-xs md:text-sm tracking-[0.4em] uppercase mb-6"
            style={{ fontFamily: 'var(--font-inter)' }}
          >
            Est. 2018  |  Michelin Starred
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="heading-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-ivory mb-8"
        >
          A Dining Experience
          <br />
          <span className="gold-text">Beyond Taste</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-subtext text-base md:text-lg lg:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
          style={{ fontFamily: 'var(--font-inter)' }}
        >
          Discover exceptional cuisine crafted with passion, precision,
          and unforgettable flavors
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => scrollTo('#reservations')}
            className="btn-luxury px-10 py-4 bg-gold text-deep-black text-xs tracking-[0.25em] uppercase font-medium hover:bg-gold-champagne transition-all duration-400"
            style={{ fontFamily: 'var(--font-inter)' }}
          >
            Reserve a Table
          </button>
          <button
            onClick={() => scrollTo('#menu-collection')}
            className="btn-luxury px-10 py-4 border border-ivory/20 text-ivory text-xs tracking-[0.25em] uppercase hover:border-gold hover:text-gold transition-all duration-400"
            style={{ fontFamily: 'var(--font-inter)' }}
          >
            Explore Menu
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-subtext text-[10px] tracking-[0.3em] uppercase" style={{ fontFamily: 'var(--font-inter)' }}>
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-8 bg-gradient-to-b from-gold/60 to-transparent"
        />
      </motion.div>
    </section>
  );
}