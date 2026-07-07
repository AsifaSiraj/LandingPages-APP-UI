'use client';

import { motion } from 'framer-motion';

const easing = [0.25, 0.1, 0.25, 1];

const footerLinks = {
  Dining: ['Menu', 'Wine List', 'Private Dining', 'Chef\'s Table', 'Events'],
  Experience: ['Our Story', 'The Chef', 'Awards', 'Sustainability', 'Careers'],
  Visit: ['Reservations', 'Location', 'Dress Code', 'Gift Cards', 'FAQ'],
};

export default function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="relative bg-deep-black border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-10">
        {/* Top area */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-3xl gold-text heading-display">AURELIAN</span>
              <p className="text-subtext text-sm leading-relaxed mt-4 max-w-xs" style={{ fontFamily: 'var(--font-inter)' }}>
                A Michelin-starred fine dining destination where culinary artistry meets
                timeless elegance. Every dish is a masterpiece. Every evening, unforgettable.
              </p>

              {/* Newsletter */}
              <div className="mt-8">
                <p className="text-gold text-[10px] tracking-[0.2em] uppercase mb-3" style={{ fontFamily: 'var(--font-inter)' }}>
                  Stay Informed
                </p>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-1 bg-transparent border-b border-white/10 text-ivory text-sm py-3 focus:border-gold focus:outline-none transition-colors duration-300 placeholder:text-subtext/40"
                    style={{ fontFamily: 'var(--font-inter)' }}
                  />
                  <button className="ml-3 text-gold hover:text-gold-champagne transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links], ci) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (ci + 1) * 0.1 }}
            >
              <p className="text-gold text-[10px] tracking-[0.25em] uppercase mb-5" style={{ fontFamily: 'var(--font-inter)' }}>
                {title}
              </p>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <button
                      className="text-subtext text-sm hover:text-ivory transition-colors duration-300"
                      style={{ fontFamily: 'var(--font-inter)' }}
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="divider-gold mb-10" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-subtext text-xs" style={{ fontFamily: 'var(--font-inter)' }}>
            <p>
              42 Rue de la Gastronomie, Paris 8e
            </p>
            <p className="hidden md:inline">|</p>
            <p>
              Tue - Sun: 6:00 PM - 11:00 PM
            </p>
            <p className="hidden md:inline">|</p>
            <p>
              +33 1 42 00 00 00
            </p>
          </div>

          <div className="flex items-center gap-5">
            {/* Social links */}
            {['Instagram', 'Facebook', 'Twitter'].map((social) => (
              <button
                key={social}
                className="text-subtext hover:text-gold transition-colors duration-300"
                aria-label={social}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  {social === 'Instagram' && (
                    <>
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </>
                  )}
                  {social === 'Facebook' && (
                    <>
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </>
                  )}
                  {social === 'Twitter' && (
                    <>
                      <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                      <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                    </>
                  )}
                </svg>
              </button>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-10">
          <p className="text-subtext/40 text-[11px]" style={{ fontFamily: 'var(--font-inter)' }}>
            2024 Aurelian. All rights reserved. Crafted with passion.
          </p>
        </div>
      </div>
    </footer>
  );
}