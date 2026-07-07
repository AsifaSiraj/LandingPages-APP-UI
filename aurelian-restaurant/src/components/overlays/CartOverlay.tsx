'use client';

import { motion } from 'framer-motion';
import { useAppStore } from '@/store/useAppStore';

const pastOrders = [
  {
    id: 'AUR-4821',
    date: 'June 28, 2026',
    items: ['Wagyu Beef Tenderloin', 'Black Truffle Pasta', 'Grand Mille-Feuille'],
    total: '$385',
    status: 'Completed',
  },
  {
    id: 'AUR-4756',
    date: 'June 14, 2026',
    items: ['Omakase Sushi Selection', 'Pan-Seared Sea Bass'],
    total: '$365',
    status: 'Completed',
  },
  {
    id: 'AUR-4690',
    date: 'May 30, 2026',
    items: ['Lobster Thermidor', 'Truffle Risotto', 'Caviar Service'],
    total: '$360',
    status: 'Completed',
  },
];

export default function CartOverlay() {
  const { cart, setActiveView, removeFromCart, updateQuantity, clearCart, addToCart } = useAppStore();

  const cartTotal = cart.reduce((sum, item) => {
    const priceNum = parseInt(item.price.replace(/[^0-9]/g, ''));
    return sum + priceNum * item.quantity;
  }, 0);

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
        <div className="flex items-center justify-between mb-10">
          <div>
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-2" style={{ fontFamily: 'var(--font-inter)' }}>
              Your Selection
            </p>
            <h2 className="heading-display text-3xl md:text-4xl text-ivory">
              {cart.length > 0 ? 'Your Cart' : 'Your Orders'}
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

        {/* Current Cart */}
        {cart.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card rounded-2xl p-6 md:p-8 mb-8"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-gold text-xs tracking-[0.2em] uppercase" style={{ fontFamily: 'var(--font-inter)' }}>
                Current Order ({cart.length} {cart.length === 1 ? 'item' : 'items'})
              </h3>
              <button
                onClick={clearCart}
                className="text-subtext text-xs hover:text-red-400 transition-colors"
                style={{ fontFamily: 'var(--font-inter)' }}
              >
                Clear All
              </button>
            </div>

            <div className="space-y-4">
              {cart.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center gap-4 py-4 border-b border-white/[0.06] last:border-0"
                >
                  <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-ivory text-sm truncate" style={{ fontFamily: 'var(--font-inter)' }}>{item.name}</p>
                    <p className="text-subtext text-xs mt-0.5" style={{ fontFamily: 'var(--font-inter)' }}>{item.portion} / {item.price}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-subtext hover:border-gold hover:text-gold transition-colors text-sm"
                    >
                      -
                    </button>
                    <span className="text-ivory text-sm w-6 text-center" style={{ fontFamily: 'var(--font-inter)' }}>{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-subtext hover:border-gold hover:text-gold transition-colors text-sm"
                    >
                      +
                    </button>
                  </div>
                  <p className="text-gold text-sm w-16 text-right" style={{ fontFamily: 'var(--font-inter)' }}>
                    ${parseInt(item.price.replace(/[^0-9]/g, '')) * item.quantity}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Totals */}
            <div className="mt-6 pt-6 border-t border-white/[0.06] space-y-3">
              <div className="flex justify-between text-subtext text-sm" style={{ fontFamily: 'var(--font-inter)' }}>
                <span>Subtotal</span>
                <span>${cartTotal}</span>
              </div>
              <div className="flex justify-between text-subtext text-sm" style={{ fontFamily: 'var(--font-inter)' }}>
                <span>Service charge (5%)</span>
                <span>${Math.round(cartTotal * 0.05)}</span>
              </div>
              <div className="flex justify-between text-ivory text-lg heading-display pt-2">
                <span>Total</span>
                <span className="gold-text">${cartTotal + Math.round(cartTotal * 0.05)}</span>
              </div>
            </div>

            <button
              onClick={() => {
                clearCart();
                setActiveView(null);
              }}
              className="btn-luxury w-full py-4 bg-gold text-deep-black text-xs tracking-[0.25em] uppercase font-medium hover:bg-gold-champagne transition-all duration-400 mt-8"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              Place Order
            </button>
          </motion.div>
        )}

        {/* Order History */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <h3 className="text-gold text-xs tracking-[0.2em] uppercase mb-6" style={{ fontFamily: 'var(--font-inter)' }}>
            Order History
          </h3>

          <div className="space-y-4">
            {pastOrders.map((order, i) => (
              <motion.div
                key={order.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + i * 0.08 }}
                className="glass-card rounded-xl p-5 md:p-6 group hover:border-gold/20 transition-colors duration-500"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <p className="text-ivory text-sm font-medium" style={{ fontFamily: 'var(--font-inter)' }}>{order.id}</p>
                      <span className="text-[10px] tracking-wider text-emerald-400 border border-emerald-400/20 px-2 py-0.5 rounded-full" style={{ fontFamily: 'var(--font-inter)' }}>
                        {order.status}
                      </span>
                    </div>
                    <p className="text-subtext text-xs" style={{ fontFamily: 'var(--font-inter)' }}>{order.date}</p>
                  </div>
                  <p className="text-gold heading-display text-xl">{order.total}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {order.items.map((item) => (
                    <span
                      key={item}
                      className="text-subtext text-[11px] border border-white/[0.06] rounded-full px-3 py-1"
                      style={{ fontFamily: 'var(--font-inter)' }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 mt-4 pt-4 border-t border-white/[0.04]">
                  <button className="text-gold text-[10px] tracking-[0.15em] uppercase hover:text-gold-champagne transition-colors" style={{ fontFamily: 'var(--font-inter)' }}>
                    Reorder
                  </button>
                  <span className="text-subtext/30">|</span>
                  <button className="text-subtext text-[10px] tracking-[0.15em] uppercase hover:text-ivory transition-colors" style={{ fontFamily: 'var(--font-inter)' }}>
                    View Details
                  </button>
                  <span className="text-subtext/30">|</span>
                  <button className="text-subtext text-[10px] tracking-[0.15em] uppercase hover:text-ivory transition-colors" style={{ fontFamily: 'var(--font-inter)' }}>
                    Download Receipt
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}