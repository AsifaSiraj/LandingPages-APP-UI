'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppStore } from '@/store/useAppStore';

const navItems = [
  { label: 'Home', href: '#hero' },
  { label: 'Menu', href: '#menu-collection', action: 'full-menu' as const },
  { label: 'Specialties', href: '#signature-dishes' },
  { label: 'Experience', href: '#chef-experience' },
  { label: 'Reservations', href: '#reservations' },
  { label: 'Gallery', href: '#gallery', action: 'full-gallery' as const },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#footer' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { setActiveView, isAuthenticated, user, cart } = useAppStore();
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close user menu on outside click
  useEffect(() => {
    if (!userMenuOpen) return;
    const handler = () => setUserMenuOpen(false);
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, [userMenuOpen]);

  const handleNavClick = (item: (typeof navItems)[number]) => {
    setMobileOpen(false);
    if (item.action) {
      setActiveView(item.action);
    } else {
      const el = document.querySelector(item.href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const cartCount = cart.reduce((sum, c) => sum + c.quantity, 0);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled ? 'glass py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <button onClick={() => handleNavClick(navItems[0])} className="flex-shrink-0">
            <span className="text-2xl md:text-3xl tracking-wider gold-text" style={{ fontFamily: 'var(--font-playfair)' }}>
              AURELIAN
            </span>
          </button>

          {/* Center nav - desktop */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item)}
                className="text-[13px] tracking-[0.15em] uppercase text-subtext hover:text-gold transition-colors duration-300"
                style={{ fontFamily: 'var(--font-inter)' }}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3 md:gap-4">
            {/* Search */}
            <button
              onClick={() => setActiveView('search')}
              className="hidden md:flex text-subtext hover:text-gold transition-colors duration-300 p-1.5"
              aria-label="Search"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </button>

            {/* Cart */}
            <button
              onClick={() => setActiveView('cart')}
              className="relative text-subtext hover:text-gold transition-colors duration-300 p-1.5"
              aria-label="Cart"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              {cartCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 w-4.5 h-4.5 bg-gold text-deep-black text-[9px] font-bold rounded-full flex items-center justify-center"
                  style={{ fontFamily: 'var(--font-inter)', width: 18, height: 18 }}
                >
                  {cartCount}
                </motion.span>
              )}
            </button>

            {/* Auth / User */}
            {isAuthenticated && user ? (
              <div className="relative" onClick={(e) => e.stopPropagation()}>
                <button
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className="flex items-center gap-2"
                >
                  <div className="w-8 h-8 rounded-full overflow-hidden border border-gold/30">
                    <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
                  </div>
                  <span className="hidden md:inline text-ivory text-xs tracking-wider" style={{ fontFamily: 'var(--font-inter)' }}>
                    {user.name.split(' ')[0]}
                  </span>
                </button>

                <AnimatePresence>
                  {userMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -8, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -8, scale: 0.97 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 top-full mt-3 w-56 glass rounded-xl py-2 z-50"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {/* User info */}
                      <div className="px-4 py-3 border-b border-white/[0.06]">
                        <p className="text-ivory text-sm font-medium" style={{ fontFamily: 'var(--font-inter)' }}>{user.name}</p>
                        <p className="text-subtext text-xs mt-0.5" style={{ fontFamily: 'var(--font-inter)' }}>{user.email}</p>
                        <span className="inline-block mt-2 text-[9px] tracking-[0.2em] uppercase border border-gold/30 text-gold px-2 py-0.5 rounded-full" style={{ fontFamily: 'var(--font-inter)' }}>
                          {user.tier} Member
                        </span>
                      </div>

                      {[
                        { label: 'My Profile', action: 'settings', icon: (
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                        )},
                        { label: 'My Orders', action: 'cart', icon: (
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
                        )},
                        { label: 'Reservations', action: null, href: '#reservations', icon: (
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                        )},
                      ].map((menuItem) => (
                        <button
                          key={menuItem.label}
                          onClick={() => {
                            setUserMenuOpen(false);
                            if (menuItem.action) {
                              setActiveView(menuItem.action);
                            } else if (menuItem.href) {
                              document.querySelector(menuItem.href)?.scrollIntoView({ behavior: 'smooth' });
                            }
                          }}
                          className="w-full text-left flex items-center gap-3 px-4 py-2.5 text-subtext hover:text-ivory hover:bg-white/[0.03] transition-colors duration-200"
                          style={{ fontFamily: 'var(--font-inter)' }}
                        >
                          {menuItem.icon}
                          <span className="text-xs tracking-wider">{menuItem.label}</span>
                        </button>
                      ))}

                      <div className="border-t border-white/[0.06] mt-1 pt-1">
                        <button
                          onClick={() => {
                            setUserMenuOpen(false);
                            useAppStore.getState().logout();
                          }}
                          className="w-full text-left flex items-center gap-3 px-4 py-2.5 text-red-400/70 hover:text-red-400 hover:bg-white/[0.03] transition-colors duration-200"
                          style={{ fontFamily: 'var(--font-inter)' }}
                        >
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/>
                          </svg>
                          <span className="text-xs tracking-wider">Sign Out</span>
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <button
                onClick={() => setActiveView('login')}
                className="hidden sm:inline-flex items-center gap-2 text-subtext hover:text-gold transition-colors duration-300 text-xs tracking-wider"
                style={{ fontFamily: 'var(--font-inter)' }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                <span className="hidden md:inline">Sign In</span>
              </button>
            )}

            {/* Reserve button */}
            <button
              onClick={() => {
                setMobileOpen(false);
                document.querySelector('#reservations')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-luxury hidden sm:inline-flex items-center px-5 py-2.5 border border-gold/40 text-gold text-xs tracking-[0.2em] uppercase hover:bg-gold hover:text-deep-black transition-all duration-400"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              Reserve
            </button>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden flex flex-col gap-1.5 p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <motion.span animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }} className="block w-6 h-px bg-ivory" />
              <motion.span animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }} className="block w-6 h-px bg-ivory" />
              <motion.span animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }} className="block w-6 h-px bg-ivory" />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-deep-black/95 backdrop-blur-xl flex flex-col items-center justify-center gap-6"
          >
            {navItems.map((item, i) => (
              <motion.button
                key={item.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04, duration: 0.4 }}
                onClick={() => handleNavClick(item)}
                className="text-2xl tracking-[0.12em] uppercase text-ivory hover:text-gold transition-colors duration-300"
                style={{ fontFamily: 'var(--font-playfair)' }}
              >
                {item.label}
              </motion.button>
            ))}

            {/* Mobile: Auth / Cart / Search row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navItems.length * 0.04, duration: 0.4 }}
              className="flex items-center gap-6 mt-4"
            >
              <button
                onClick={() => { setMobileOpen(false); setActiveView('search'); }}
                className="text-subtext hover:text-gold transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
                </svg>
              </button>
              <button
                onClick={() => { setMobileOpen(false); setActiveView('cart'); }}
                className="relative text-subtext hover:text-gold transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 0 1-8 0" />
                </svg>
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-gold text-deep-black text-[8px] font-bold rounded-full flex items-center justify-center" style={{ fontFamily: 'var(--font-inter)' }}>
                    {cartCount}
                  </span>
                )}
              </button>
              <button
                onClick={() => {
                  setMobileOpen(false);
                  setActiveView(isAuthenticated ? 'settings' : 'login');
                }}
                className="text-subtext hover:text-gold transition-colors text-xs tracking-wider"
                style={{ fontFamily: 'var(--font-inter)' }}
              >
                {isAuthenticated ? 'Account' : 'Sign In'}
              </button>
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: (navItems.length + 1) * 0.04, duration: 0.4 }}
              onClick={() => {
                setMobileOpen(false);
                document.querySelector('#reservations')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="mt-2 btn-luxury px-8 py-3 border border-gold text-gold text-sm tracking-[0.2em] uppercase hover:bg-gold hover:text-deep-black transition-all duration-400"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              Reserve a Table
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}