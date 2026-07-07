'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const easing = [0.25, 0.1, 0.25, 1];

export default function ReservationSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    requests: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="reservations" className="relative py-24 md:py-32 bg-deep-black overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold/[0.02] rounded-full blur-[120px]" />

      <div className="relative max-w-3xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14 md:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: easing as unknown as number[] }}
            className="text-gold text-xs tracking-[0.4em] uppercase mb-4"
            style={{ fontFamily: 'var(--font-inter)' }}
          >
            Reserve Your Table
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.1, ease: easing as unknown as number[] }}
            className="heading-display text-3xl md:text-4xl lg:text-5xl text-ivory mb-4"
          >
            An Unforgettable <span className="gold-text">Evening</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2, ease: easing as unknown as number[] }}
            className="text-subtext text-sm max-w-md mx-auto"
            style={{ fontFamily: 'var(--font-inter)' }}
          >
            Secure your place for an extraordinary dining experience. We recommend booking at least 48 hours in advance.
          </motion.p>
        </div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-card rounded-2xl p-12 text-center"
          >
            <div className="w-16 h-16 rounded-full border border-gold/30 flex items-center justify-center mx-auto mb-6">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C7A86D" strokeWidth="1.5">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h3 className="heading-display text-2xl text-ivory mb-3">Reservation Confirmed</h3>
            <p className="text-subtext text-sm max-w-sm mx-auto mb-6" style={{ fontFamily: 'var(--font-inter)' }}>
              Thank you, {formData.name}. We look forward to welcoming you on {formData.date} at {formData.time}.
              A confirmation has been sent to {formData.email}.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({ name: '', email: '', phone: '', date: '', time: '', guests: '2', requests: '' });
              }}
              className="text-gold text-xs tracking-[0.15em] uppercase hover:text-gold-champagne transition-colors"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              Make Another Reservation
            </button>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease: easing as unknown as number[] }}
            onSubmit={handleSubmit}
            className="glass-card rounded-2xl p-8 md:p-10 space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gold text-[10px] tracking-[0.2em] uppercase mb-2" style={{ fontFamily: 'var(--font-inter)' }}>
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-white/10 text-ivory text-sm py-3 focus:border-gold focus:outline-none transition-colors duration-300 placeholder:text-subtext/40"
                  style={{ fontFamily: 'var(--font-inter)' }}
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-gold text-[10px] tracking-[0.2em] uppercase mb-2" style={{ fontFamily: 'var(--font-inter)' }}>
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-white/10 text-ivory text-sm py-3 focus:border-gold focus:outline-none transition-colors duration-300 placeholder:text-subtext/40"
                  style={{ fontFamily: 'var(--font-inter)' }}
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-gold text-[10px] tracking-[0.2em] uppercase mb-2" style={{ fontFamily: 'var(--font-inter)' }}>
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-white/10 text-ivory text-sm py-3 focus:border-gold focus:outline-none transition-colors duration-300 placeholder:text-subtext/40"
                  style={{ fontFamily: 'var(--font-inter)' }}
                  placeholder="+1 (555) 000-0000"
                />
              </div>
              <div>
                <label className="block text-gold text-[10px] tracking-[0.2em] uppercase mb-2" style={{ fontFamily: 'var(--font-inter)' }}>
                  Number of Guests
                </label>
                <select
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-white/10 text-ivory text-sm py-3 focus:border-gold focus:outline-none transition-colors duration-300 appearance-none cursor-pointer"
                  style={{ fontFamily: 'var(--font-inter)' }}
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                    <option key={n} value={n} className="bg-charcoal text-ivory">
                      {n} {n === 1 ? 'Guest' : 'Guests'}
                    </option>
                  ))}
                  <option value="9+" className="bg-charcoal text-ivory">
                    9+ (Private Dining)
                  </option>
                </select>
              </div>
              <div>
                <label className="block text-gold text-[10px] tracking-[0.2em] uppercase mb-2" style={{ fontFamily: 'var(--font-inter)' }}>
                  Preferred Date
                </label>
                <input
                  type="date"
                  name="date"
                  required
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-white/10 text-ivory text-sm py-3 focus:border-gold focus:outline-none transition-colors duration-300 [color-scheme:dark]"
                  style={{ fontFamily: 'var(--font-inter)' }}
                />
              </div>
              <div>
                <label className="block text-gold text-[10px] tracking-[0.2em] uppercase mb-2" style={{ fontFamily: 'var(--font-inter)' }}>
                  Preferred Time
                </label>
                <select
                  name="time"
                  required
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-white/10 text-ivory text-sm py-3 focus:border-gold focus:outline-none transition-colors duration-300 appearance-none cursor-pointer"
                  style={{ fontFamily: 'var(--font-inter)' }}
                >
                  <option value="" disabled className="bg-charcoal text-ivory">
                    Select time
                  </option>
                  {['6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM'].map((t) => (
                    <option key={t} value={t} className="bg-charcoal text-ivory">
                      {t}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-gold text-[10px] tracking-[0.2em] uppercase mb-2" style={{ fontFamily: 'var(--font-inter)' }}>
                Special Requests
              </label>
              <textarea
                name="requests"
                value={formData.requests}
                onChange={handleChange}
                rows={3}
                className="w-full bg-transparent border-b border-white/10 text-ivory text-sm py-3 focus:border-gold focus:outline-none transition-colors duration-300 placeholder:text-subtext/40 resize-none"
                style={{ fontFamily: 'var(--font-inter)' }}
                placeholder="Dietary requirements, celebrations, seating preferences..."
              />
            </div>

            <button
              type="submit"
              className="btn-luxury w-full py-4 bg-gold text-deep-black text-xs tracking-[0.25em] uppercase font-medium hover:bg-gold-champagne transition-all duration-400 mt-4"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              Reserve Your Table
            </button>
          </motion.form>
        )}
      </div>
    </section>
  );
}