'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useAppStore } from '@/store/useAppStore';

const dietaryOptions = ['None', 'Vegetarian', 'Vegan', 'Gluten-Free', 'Nut Allergy', 'Shellfish Allergy', 'Dairy-Free', 'Kosher', 'Halal'];

const seatingPrefs = ['Window Seat', 'Private Booth', 'Chef\'s Table', 'Garden Terrace', 'Bar Seating', 'No Preference'];

export default function SettingsOverlay() {
  const { setActiveView, user, updateProfile, logout } = useAppStore();
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || '',
    dietaryRestrictions: user?.dietaryRestrictions || 'None',
  });
  const [savedPrefs, setSavedPrefs] = useState<string[]>(user?.preferences || []);
  const [toast, setToast] = useState('');

  const handleSave = () => {
    updateProfile({ ...form, preferences: savedPrefs });
    setEditing(false);
    setToast('Profile updated successfully');
    setTimeout(() => setToast(''), 3000);
  };

  const togglePref = (pref: string) => {
    setSavedPrefs((prev) =>
      prev.includes(pref) ? prev.filter((p) => p !== pref) : [...prev, pref]
    );
  };

  if (!user) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed inset-0 z-[60] bg-deep-black/95 backdrop-blur-2xl overflow-y-auto"
      onClick={(e) => e.target === e.currentTarget && setActiveView(null)}
    >
      <div className="max-w-3xl mx-auto px-6 py-8 md:py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-2" style={{ fontFamily: 'var(--font-inter)' }}>
              Account
            </p>
            <h2 className="heading-display text-3xl md:text-4xl text-ivory">
              My Profile
            </h2>
          </div>
          <button
            onClick={() => setActiveView(null)}
            className="text-subtext hover:text-gold transition-colors duration-300"
            aria-label="Close"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Profile card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="glass-card rounded-2xl p-8 md:p-10 mb-8"
        >
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-8">
            <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-gold/30 flex-shrink-0">
              <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
            </div>
            <div className="text-center sm:text-left flex-1">
              <h3 className="heading-display text-2xl text-ivory mb-1">{user.name}</h3>
              <p className="text-subtext text-sm mb-3" style={{ fontFamily: 'var(--font-inter)' }}>{user.email}</p>
              <div className="flex items-center gap-2 justify-center sm:justify-start">
                <span className={`text-[10px] tracking-[0.2em] uppercase px-3 py-1 rounded-full border ${
                  user.tier === 'Platinum' ? 'border-gold text-gold bg-gold/10' :
                  user.tier === 'Gold' ? 'border-gold-champagne text-gold-champagne bg-gold-champagne/10' :
                  'border-subtext/30 text-subtext'
                }`} style={{ fontFamily: 'var(--font-inter)' }}>
                  {user.tier} Member
                </span>
                <span className="text-subtext text-xs" style={{ fontFamily: 'var(--font-inter)' }}>
                  Since {user.memberSince}
                </span>
              </div>
            </div>
            {!editing ? (
              <button
                onClick={() => setEditing(true)}
                className="btn-luxury px-5 py-2.5 border border-gold/30 text-gold text-[10px] tracking-[0.2em] uppercase hover:bg-gold hover:text-deep-black transition-all duration-400"
                style={{ fontFamily: 'var(--font-inter)' }}
              >
                Edit
              </button>
            ) : (
              <div className="flex gap-2">
                <button onClick={handleSave} className="btn-luxury px-5 py-2.5 bg-gold text-deep-black text-[10px] tracking-[0.2em] uppercase" style={{ fontFamily: 'var(--font-inter)' }}>Save</button>
                <button onClick={() => setEditing(false)} className="px-5 py-2.5 border border-white/10 text-subtext text-[10px] tracking-[0.2em] uppercase hover:text-ivory transition-colors" style={{ fontFamily: 'var(--font-inter)' }}>Cancel</button>
              </div>
            )}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/[0.06]">
            <div className="text-center">
              <p className="heading-display text-2xl gold-text">{user.reservationCount}</p>
              <p className="text-subtext text-xs mt-1" style={{ fontFamily: 'var(--font-inter)' }}>Reservations</p>
            </div>
            <div className="text-center">
              <p className="heading-display text-2xl gold-text">12</p>
              <p className="text-subtext text-xs mt-1" style={{ fontFamily: 'var(--font-inter)' }}>Orders</p>
            </div>
            <div className="text-center">
              <p className="heading-display text-2xl gold-text">{user.preferences.length}</p>
              <p className="text-subtext text-xs mt-1" style={{ fontFamily: 'var(--font-inter)' }}>Preferences</p>
            </div>
          </div>
        </motion.div>

        {/* Editable form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="glass-card rounded-2xl p-8 md:p-10 mb-8"
        >
          <h3 className="heading-display text-xl text-ivory mb-6">Personal Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gold text-[10px] tracking-[0.2em] uppercase mb-2" style={{ fontFamily: 'var(--font-inter)' }}>Full Name</label>
              <input
                type="text"
                value={editing ? form.name : user.name}
                onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                disabled={!editing}
                className="w-full bg-transparent border-b border-white/10 text-ivory text-sm py-3 focus:border-gold focus:outline-none transition-colors duration-300 disabled:opacity-60"
                style={{ fontFamily: 'var(--font-inter)' }}
              />
            </div>
            <div>
              <label className="block text-gold text-[10px] tracking-[0.2em] uppercase mb-2" style={{ fontFamily: 'var(--font-inter)' }}>Email</label>
              <input
                type="email"
                value={editing ? form.email : user.email}
                onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                disabled={!editing}
                className="w-full bg-transparent border-b border-white/10 text-ivory text-sm py-3 focus:border-gold focus:outline-none transition-colors duration-300 disabled:opacity-60"
                style={{ fontFamily: 'var(--font-inter)' }}
              />
            </div>
            <div>
              <label className="block text-gold text-[10px] tracking-[0.2em] uppercase mb-2" style={{ fontFamily: 'var(--font-inter)' }}>Phone</label>
              <input
                type="tel"
                value={editing ? form.phone : user.phone}
                onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
                disabled={!editing}
                className="w-full bg-transparent border-b border-white/10 text-ivory text-sm py-3 focus:border-gold focus:outline-none transition-colors duration-300 disabled:opacity-60"
                style={{ fontFamily: 'var(--font-inter)' }}
              />
            </div>
            <div>
              <label className="block text-gold text-[10px] tracking-[0.2em] uppercase mb-2" style={{ fontFamily: 'var(--font-inter)' }}>Dietary Restrictions</label>
              {editing ? (
                <select
                  value={form.dietaryRestrictions}
                  onChange={(e) => setForm((p) => ({ ...p, dietaryRestrictions: e.target.value }))}
                  className="w-full bg-transparent border-b border-white/10 text-ivory text-sm py-3 focus:border-gold focus:outline-none transition-colors duration-300 appearance-none"
                  style={{ fontFamily: 'var(--font-inter)' }}
                >
                  {dietaryOptions.map((o) => (
                    <option key={o} value={o} className="bg-charcoal text-ivory">{o}</option>
                  ))}
                </select>
              ) : (
                <input
                  type="text"
                  value={user.dietaryRestrictions}
                  disabled
                  className="w-full bg-transparent border-b border-white/10 text-ivory text-sm py-3 disabled:opacity-60"
                  style={{ fontFamily: 'var(--font-inter)' }}
                />
              )}
            </div>
          </div>
        </motion.div>

        {/* Seating Preferences */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="glass-card rounded-2xl p-8 md:p-10 mb-8"
        >
          <h3 className="heading-display text-xl text-ivory mb-2">Seating Preferences</h3>
          <p className="text-subtext text-xs mb-6" style={{ fontFamily: 'var(--font-inter)' }}>
            Select your preferred seating for future reservations
          </p>
          <div className="flex flex-wrap gap-3">
            {seatingPrefs.map((pref) => (
              <button
                key={pref}
                onClick={() => editing && togglePref(pref)}
                disabled={!editing}
                className={`px-4 py-2.5 rounded-full text-xs tracking-wider transition-all duration-300 border ${
                  savedPrefs.includes(pref)
                    ? 'border-gold text-gold bg-gold/10'
                    : 'border-white/10 text-subtext hover:border-gold/30 hover:text-ivory'
                } disabled:cursor-default`}
                style={{ fontFamily: 'var(--font-inter)' }}
              >
                {pref}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Notifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.5 }}
          className="glass-card rounded-2xl p-8 md:p-10 mb-8"
        >
          <h3 className="heading-display text-xl text-ivory mb-6">Notifications</h3>
          <div className="space-y-4">
            {[
              { label: 'Reservation confirmations', desc: 'Receive updates about your bookings' },
              { label: 'New menu announcements', desc: 'Be the first to know about seasonal changes' },
              { label: 'Exclusive events', desc: 'Invitations to private tastings and chef events' },
              { label: 'Special offers', desc: 'Member-only promotions and loyalty rewards' },
            ].map((notif) => (
              <div key={notif.label} className="flex items-center justify-between py-2">
                <div>
                  <p className="text-ivory text-sm" style={{ fontFamily: 'var(--font-inter)' }}>{notif.label}</p>
                  <p className="text-subtext text-xs" style={{ fontFamily: 'var(--font-inter)' }}>{notif.desc}</p>
                </div>
                <div className="w-10 h-6 bg-gold/30 rounded-full relative cursor-pointer">
                  <div className="absolute right-0.5 top-0.5 w-5 h-5 bg-gold rounded-full" />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Danger zone */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/[0.06]"
        >
          <p className="text-subtext text-xs" style={{ fontFamily: 'var(--font-inter)' }}>
            Sign out of your account on this device
          </p>
          <button
            onClick={logout}
            className="px-6 py-2.5 border border-red-500/30 text-red-400 text-[10px] tracking-[0.2em] uppercase hover:bg-red-500/10 transition-all duration-300"
            style={{ fontFamily: 'var(--font-inter)' }}
          >
            Sign Out
          </button>
        </motion.div>
      </div>

      {/* Toast */}
      {toast && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-8 left-1/2 -translate-x-1/2 glass rounded-xl px-6 py-3 z-[70]"
        >
          <p className="text-gold text-sm" style={{ fontFamily: 'var(--font-inter)' }}>{toast}</p>
        </motion.div>
      )}
    </motion.div>
  );
}