'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useAppStore } from '@/store/useAppStore';

export default function SignupOverlay() {
  const { setActiveView, signup } = useAppStore();
  const [form, setForm] = useState({ name: '', email: '', password: '', confirm: '' });
  const [error, setError] = useState('');

  const update = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setError('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.password || !form.confirm) {
      setError('Please fill in all fields');
      return;
    }
    if (form.password !== form.confirm) {
      setError('Passwords do not match');
      return;
    }
    if (form.password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }
    signup(form.name, form.email, form.password);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed inset-0 z-[60] bg-deep-black/95 backdrop-blur-2xl flex items-center justify-center overflow-y-auto py-12"
      onClick={(e) => e.target === e.currentTarget && setActiveView(null)}
    >
      <button
        onClick={() => setActiveView(null)}
        className="absolute top-6 right-6 text-subtext hover:text-gold transition-colors duration-300 z-10"
        aria-label="Close"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M18 6 6 18M6 6l12 12" />
        </svg>
      </button>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.97 }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        className="w-full max-w-md mx-6"
      >
        <div className="text-center mb-10">
          <span className="text-2xl gold-text heading-display">AURELIAN</span>
          <h2 className="heading-display text-3xl md:text-4xl text-ivory mt-6 mb-3">
            Create Account
          </h2>
          <p className="text-subtext text-sm" style={{ fontFamily: 'var(--font-inter)' }}>
            Join our exclusive community and unlock a world of culinary privileges
          </p>
        </div>

        {/* Membership tiers preview */}
        <div className="grid grid-cols-3 gap-3 mb-10">
          {[
            { tier: 'Silver', perks: 'Priority booking' },
            { tier: 'Gold', perks: 'Tasting events' },
            { tier: 'Platinum', perks: 'Private dining' },
          ].map((t) => (
            <div key={t.tier} className="glass-card rounded-lg p-3 text-center">
              <p className="text-gold text-[10px] tracking-[0.2em] uppercase mb-1" style={{ fontFamily: 'var(--font-inter)' }}>
                {t.tier}
              </p>
              <p className="text-subtext text-[10px]" style={{ fontFamily: 'var(--font-inter)' }}>
                {t.perks}
              </p>
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gold text-[10px] tracking-[0.2em] uppercase mb-2" style={{ fontFamily: 'var(--font-inter)' }}>
              Full Name
            </label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => update('name', e.target.value)}
              className="w-full bg-transparent border-b border-white/10 text-ivory text-sm py-3 focus:border-gold focus:outline-none transition-colors duration-300 placeholder:text-subtext/40"
              style={{ fontFamily: 'var(--font-inter)' }}
              placeholder="Your full name"
            />
          </div>

          <div>
            <label className="block text-gold text-[10px] tracking-[0.2em] uppercase mb-2" style={{ fontFamily: 'var(--font-inter)' }}>
              Email Address
            </label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => update('email', e.target.value)}
              className="w-full bg-transparent border-b border-white/10 text-ivory text-sm py-3 focus:border-gold focus:outline-none transition-colors duration-300 placeholder:text-subtext/40"
              style={{ fontFamily: 'var(--font-inter)' }}
              placeholder="your@email.com"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gold text-[10px] tracking-[0.2em] uppercase mb-2" style={{ fontFamily: 'var(--font-inter)' }}>
                Password
              </label>
              <input
                type="password"
                value={form.password}
                onChange={(e) => update('password', e.target.value)}
                className="w-full bg-transparent border-b border-white/10 text-ivory text-sm py-3 focus:border-gold focus:outline-none transition-colors duration-300 placeholder:text-subtext/40"
                style={{ fontFamily: 'var(--font-inter)' }}
                placeholder="Min. 6 characters"
              />
            </div>
            <div>
              <label className="block text-gold text-[10px] tracking-[0.2em] uppercase mb-2" style={{ fontFamily: 'var(--font-inter)' }}>
                Confirm
              </label>
              <input
                type="password"
                value={form.confirm}
                onChange={(e) => update('confirm', e.target.value)}
                className="w-full bg-transparent border-b border-white/10 text-ivory text-sm py-3 focus:border-gold focus:outline-none transition-colors duration-300 placeholder:text-subtext/40"
                style={{ fontFamily: 'var(--font-inter)' }}
                placeholder="Repeat password"
              />
            </div>
          </div>

          {error && (
            <motion.p
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-400 text-xs"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              {error}
            </motion.p>
          )}

          <label className="flex items-start gap-3 cursor-pointer">
            <input type="checkbox" className="w-4 h-4 mt-0.5 accent-gold rounded-none" />
            <span className="text-subtext text-xs leading-relaxed" style={{ fontFamily: 'var(--font-inter)' }}>
              I agree to Aurelian&apos;s Terms of Service and Privacy Policy, and wish to receive exclusive dining updates and offers
            </span>
          </label>

          <button
            type="submit"
            className="btn-luxury w-full py-4 bg-gold text-deep-black text-xs tracking-[0.25em] uppercase font-medium hover:bg-gold-champagne transition-all duration-400"
            style={{ fontFamily: 'var(--font-inter)' }}
          >
            Create Account
          </button>
        </form>

        <div className="flex items-center gap-4 my-8">
          <div className="flex-1 h-px bg-white/10" />
          <span className="text-subtext text-xs" style={{ fontFamily: 'var(--font-inter)' }}>or</span>
          <div className="flex-1 h-px bg-white/10" />
        </div>

        <div className="grid grid-cols-2 gap-4 mb-8">
          <button className="glass-card rounded-lg py-3 text-ivory text-xs tracking-wider hover:border-gold/20 transition-colors duration-300 flex items-center justify-center gap-2" style={{ fontFamily: 'var(--font-inter)' }}>
            <svg width="16" height="16" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Google
          </button>
          <button className="glass-card rounded-lg py-3 text-ivory text-xs tracking-wider hover:border-gold/20 transition-colors duration-300 flex items-center justify-center gap-2" style={{ fontFamily: 'var(--font-inter)' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
              <path d="M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-2.987 1.57-.18 0-.36-.02-.53-.06-.01-.06-.04-.22-.04-.39 0-1.15.572-2.27 1.206-2.98.804-.94 2.142-1.64 3.248-1.68.03.21.05.43.05.46zm4.565 17.71c-.22.52-.52 1-.88 1.44-.63.78-1.52 1.75-2.63 1.76-1 .01-1.33-.66-2.76-.65-1.43.01-1.79.66-2.79.65-1.11-.01-1.95-.89-2.58-1.67-1.77-2.19-3.1-6.2-1.3-8.91.89-1.35 2.49-2.21 4.22-2.24.99-.02 1.94.67 2.55.67.61 0 1.75-.83 2.95-.71.5.02 1.92.2 2.83 1.53-.07.05-1.69.99-1.67 2.95.02 2.37 2.06 3.16 2.08 3.17-.02.06-.33 1.13-.98 2.24l.06-.23z"/>
            </svg>
            Apple
          </button>
        </div>

        <p className="text-center text-subtext text-sm" style={{ fontFamily: 'var(--font-inter)' }}>
          Already have an account?{' '}
          <button
            onClick={() => setActiveView('login')}
            className="text-gold hover:text-gold-champagne transition-colors"
          >
            Sign In
          </button>
        </p>
      </motion.div>
    </motion.div>
  );
}