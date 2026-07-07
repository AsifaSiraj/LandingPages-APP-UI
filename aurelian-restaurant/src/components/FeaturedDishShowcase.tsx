'use client';

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppStore } from '@/store/useAppStore';

interface Dish {
  id: number;
  name: string;
  price: string;
  description: string;
  ingredients: string[];
  calories: string;
  preparation: string;
  portions: string[];
  rating: number;
  image: string;
  chefRecommended: boolean;
}

const dishes: Dish[] = [
  {
  id: 1,
  name: 'Wagyu Beef Tenderloin',
  price: '$185',
  description:
    'A5 Japanese Wagyu, seared to perfection and served with truffle jus, roasted bone marrow, and seasonal microgreens. Each bite delivers an unmatched depth of flavor and buttery tenderness that defines our culinary philosophy.',
  ingredients: ['A5 Wagyu Beef', 'Black Truffle', 'Bone Marrow', 'Microgreens', 'Red Wine Jus'],
  calories: '680 kcal',
  preparation: 'Sous-vide 48h, pan-seared, rested',
  portions: ['8oz', '12oz', '16oz'],
  rating: 4.9,
  image:
    'https://scontent.fkhi20-1.fna.fbcdn.net/v/t39.30808-6/532910789_739570835722588_317625551371601039_n.jpg?stp=dst-jpg_tt6&cstp=mx1024x1024&ctp=s1024x1024&_nc_cat=109&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=7uhH3wNZJMsQ7kNvwHK4MvJ&_nc_oc=Adp2ZU41OAB6FrfEhXnprszVm3Y74ASw93CCZWKBry3SAm0rNtt1QnqlUwaGgxiM3EA&_nc_zt=23&_nc_ht=scontent.fkhi20-1.fna&_nc_gid=tzqhTBCPPdEVSspMLc0img&_nc_ss=7b2a8&oh=00_AQDTAkJ-ErCyhLsvtNXzKCL7s22cPinQoYuogxuvRtkNTA&oe=6A52ECC8',
  chefRecommended: true,
},
  {
    id: 2,
    name: 'Lobster Thermidor',
    price: '$165',
    description:
      'Fresh Maine lobster baked in a rich brandy cream sauce with Gruyere gratin, served with saffron risotto and grilled asparagus. A timeless classic elevated to extraordinary heights through meticulous preparation and the finest ingredients.',
    ingredients: ['Maine Lobster', 'Cognac', 'Gruyere', 'Saffron', 'Arborio Rice'],
    calories: '560 kcal',
    preparation: 'Baked at 400F, gratinated',
    portions: ['Whole', 'Half'],
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1559737558-2f5a35f4523b?w=800&q=80',
    chefRecommended: false,
  },
  {
    id: 3,
    name: 'Black Truffle Pasta',
    price: '$125',
    description:
      'Hand-rolled tagliatelle tossed with fresh black Perigord truffles, aged Parmigiano-Reggiano, and brown butter. Simple, pure, and utterly unforgettable. The aroma alone transports you to the Italian countryside.',
    ingredients: ['Black Truffle', 'Tagliatelle', 'Parmigiano-Reggiano', 'Brown Butter', 'Pecorino'],
    calories: '420 kcal',
    preparation: 'Hand-rolled, tossed tableside',
    portions: ['Regular', 'Large'],
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=800&q=80',
    chefRecommended: true,
  },
  {
    id: 4,
    name: 'Omakase Sushi Selection',
    price: '$220',
    description:
      'Chef&apos;s curated selection of 12 pieces of premium nigiri featuring the finest seasonal fish flown in daily from Tsukiji Market. Each piece is a masterclass in balance, texture, and restraint.',
    ingredients: ['Bluefin Tuna', 'Hokkaido Uni', 'Golden Takoyaki', 'Iwashi', 'Hiramasa'],
    calories: '380 kcal',
    preparation: 'Hand-formed, served immediately',
    portions: ['12 pieces', '18 pieces'],
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=800&q=80',
    chefRecommended: true,
  },
  {
    id: 5,
    name: 'Grand Mille-Feuille',
    price: '$75',
    description:
      'Layers of caramelized puff pastry filled with Madagascar vanilla bean creme patissiere and fresh raspberries, finished with a delicate gold leaf crown. A showstopping finale that embodies the art of French patisserie.',
    ingredients: ['Puff Pastry', 'Madagascar Vanilla', 'Raspberries', 'Gold Leaf', 'Creme Chantilly'],
    calories: '340 kcal',
    preparation: 'Baked fresh, assembled to order',
    portions: ['Single', 'Double'],
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&q=80',
    chefRecommended: false,
  },
  {
    id: 6,
    name: 'Pan-Seared Sea Bass',
    price: '$145',
    description:
      'Wild-caught Mediterranean sea bass with crispy skin, served on a bed of saffron beurre blanc, accompanied by charred leeks and caviar pearls. The perfect harmony of ocean freshness and rich, luxurious sauces.',
    ingredients: ['Sea Bass', 'Caviar', 'Saffron', 'Leeks', 'Beurre Blanc'],
    calories: '490 kcal',
    preparation: 'Skin-on seared, sous-vide finish',
    portions: ['Regular', 'Large'],
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab?w=800&q=80',
    chefRecommended: false,
  },
];

const easing = [0.25, 0.1, 0.25, 1];

export default function FeaturedDishShowcase() {
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null);
  const [imagePos, setImagePos] = useState<'center' | 'left'>('center');
  const { addToCart, setActiveView } = useAppStore();

  const handleSelect = useCallback((dish: Dish) => {
    if (selectedDish?.id === dish.id) {
      setSelectedDish(null);
      setImagePos('center');
    } else {
      setSelectedDish(dish);
      setImagePos('left');
    }
  }, [selectedDish]);

  return (
    <section id="featured-dishes" className="relative min-h-screen py-24 md:py-32 bg-deep-black overflow-hidden">
      {/* Section header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16 md:mb-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: easing }}
          className="text-gold text-xs tracking-[0.4em] uppercase mb-4"
          style={{ fontFamily: 'var(--font-inter)' }}
        >
          Curated Selection
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.1, ease: easing }}
          className="heading-display text-3xl md:text-4xl lg:text-5xl text-ivory"
        >
          Featured <span className="gold-text">Dishes</span>
        </motion.h2>
      </div>

      {/* Main showcase area */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12 min-h-[500px]">
          {/* Left: Dish Image */}
          <div className={`w-full ${selectedDish ? 'lg:w-1/2' : 'lg:w-full'} flex-shrink-0 flex items-center justify-center transition-all duration-1000`}>
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedDish?.id || 'default'}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: selectedDish ? 0.85 : 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.8, ease: easing as unknown as number[] }}
                className={`relative ${!selectedDish ? 'animate-float' : ''}`}
              >
                {/* Glow behind image */}
                {selectedDish && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute -inset-8 bg-gold/5 rounded-full blur-3xl"
                  />
                )}
                <div className="relative w-[320px] h-[320px] md:w-[420px] md:h-[420px] lg:w-[500px] lg:h-[500px] rounded-full overflow-hidden border border-gold/10">
                  <img
                    src={selectedDish?.image || dishes[0].image}
                    alt={selectedDish?.name || 'Featured Dish'}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-black/40 to-transparent" />
                </div>
                {/* Dish name overlay on image */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-center"
                >
                  <p className="text-ivory text-sm md:text-base tracking-wider" style={{ fontFamily: 'var(--font-cormorant)' }}>
                    {selectedDish?.name || 'Select a Dish'}
                  </p>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right: Detail Panel */}
          <AnimatePresence>
            {selectedDish && (
              <motion.div
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 60 }}
                transition={{ duration: 0.8, ease: easing as unknown as number[] }}
                className="w-full lg:w-1/2 glass-card rounded-2xl p-8 md:p-10"
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="heading-display text-2xl md:text-3xl text-ivory mb-2">
                      {selectedDish.name}
                    </h3>
                    <p className="text-gold text-xl font-light" style={{ fontFamily: 'var(--font-cormorant)' }}>
                      {selectedDish.price}
                    </p>
                  </div>
                  {selectedDish.chefRecommended && (
                    <span className="text-[10px] tracking-[0.2em] uppercase border border-gold/30 text-gold px-3 py-1 rounded-full">
                      Chef&apos;s Pick
                    </span>
                  )}
                </div>

                <div className="divider-gold mb-6" />

                <p className="text-subtext text-sm leading-relaxed mb-6" style={{ fontFamily: 'var(--font-inter)' }}>
                  {selectedDish.description}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <p className="text-gold text-[10px] tracking-[0.2em] uppercase mb-2">Ingredients</p>
                    <p className="text-ivory/80 text-xs leading-relaxed" style={{ fontFamily: 'var(--font-inter)' }}>
                      {selectedDish.ingredients.join('  /  ')}
                    </p>
                  </div>
                  <div>
                    <p className="text-gold text-[10px] tracking-[0.2em] uppercase mb-2">Calories</p>
                    <p className="text-ivory/80 text-xs" style={{ fontFamily: 'var(--font-inter)' }}>
                      {selectedDish.calories}
                    </p>
                  </div>
                  <div>
                    <p className="text-gold text-[10px] tracking-[0.2em] uppercase mb-2">Preparation</p>
                    <p className="text-ivory/80 text-xs" style={{ fontFamily: 'var(--font-inter)' }}>
                      {selectedDish.preparation}
                    </p>
                  </div>
                  <div>
                    <p className="text-gold text-[10px] tracking-[0.2em] uppercase mb-2">Portions</p>
                    <p className="text-ivory/80 text-xs" style={{ fontFamily: 'var(--font-inter)' }}>
                      {selectedDish.portions.join('  /  ')}
                    </p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-3 mb-8">
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg
                        key={i}
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill={i < Math.floor(selectedDish.rating) ? '#C7A86D' : 'none'}
                        stroke="#C7A86D"
                        strokeWidth="1.5"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-subtext text-xs" style={{ fontFamily: 'var(--font-inter)' }}>
                    {selectedDish.rating} / 5.0
                  </span>
                </div>

                {/* Action buttons */}
                <div className="flex gap-4">
                  <button
                    onClick={() => {
                      if (selectedDish) {
                        addToCart({ id: selectedDish.id, name: selectedDish.name, price: selectedDish.price, image: selectedDish.image, portion: selectedDish.portions[0] });
                        setActiveView('cart');
                      }
                    }}
                    className="btn-luxury flex-1 py-3.5 bg-gold text-deep-black text-xs tracking-[0.2em] uppercase font-medium hover:bg-gold-champagne transition-all duration-400"
                  >
                    Order Now
                  </button>
                  <button
                    onClick={() => {
                      if (selectedDish) {
                        addToCart({ id: selectedDish.id, name: selectedDish.name, price: selectedDish.price, image: selectedDish.image, portion: selectedDish.portions[0] });
                      }
                    }}
                    className="btn-luxury flex-1 py-3.5 border border-gold/30 text-gold text-xs tracking-[0.2em] uppercase hover:bg-gold/10 transition-all duration-400"
                  >
                    Add to Cart
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Dish selection thumbnails */}
        <div className="mt-16 md:mt-20">
          <div className="flex gap-4 md:gap-6 overflow-x-auto pb-4 scrollbar-hide justify-start md:justify-center">
            {dishes.map((dish) => (
              <motion.button
                key={dish.id}
                onClick={() => handleSelect(dish)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className={`flex-shrink-0 relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-2 transition-all duration-500 ${
                  selectedDish?.id === dish.id
                    ? 'border-gold shadow-[0_0_30px_rgba(199,168,109,0.3)]'
                    : 'border-white/10 hover:border-gold/40'
                }`}
              >
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-deep-black/30" />
                <div className="absolute bottom-0 left-0 right-0 p-2">
                  <p className="text-[9px] md:text-[10px] text-ivory/90 text-center truncate" style={{ fontFamily: 'var(--font-inter)' }}>
                    {dish.name}
                  </p>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}