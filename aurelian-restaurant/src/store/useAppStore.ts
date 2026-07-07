import { create } from 'zustand';

export type ActiveView =
  | null
  | 'login'
  | 'signup'
  | 'settings'
  | 'cart'
  | 'full-gallery'
  | 'full-menu'
  | 'search';

interface CartItem {
  id: number;
  name: string;
  price: string;
  image: string;
  quantity: number;
  portion: string;
}

interface UserProfile {
  name: string;
  email: string;
  phone: string;
  avatar: string;
  preferences: string[];
  dietaryRestrictions: string;
  reservationCount: number;
  memberSince: string;
  tier: 'Silver' | 'Gold' | 'Platinum';
}

interface AppState {
  activeView: ActiveView;
  setActiveView: (view: ActiveView) => void;

  isAuthenticated: boolean;
  user: UserProfile | null;
  login: (email: string, password: string) => void;
  signup: (name: string, email: string, password: string) => void;
  logout: () => void;
  updateProfile: (updates: Partial<UserProfile>) => void;

  cart: CartItem[];
  addToCart: (item: Omit<CartItem, 'quantity'>) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;

  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const defaultUser: UserProfile = {
  name: 'Alexandra Duval',
  email: 'alexandra@example.com',
  phone: '+33 6 12 34 56 78',
  avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
  preferences: ['Window Seat', "Chef's Tasting Menu", 'Wine Pairing'],
  dietaryRestrictions: 'None',
  reservationCount: 24,
  memberSince: 'January 2023',
  tier: 'Gold',
};

export const useAppStore = create<AppState>((set) => ({
  activeView: null,
  setActiveView: (view) => set({ activeView: view }),

  isAuthenticated: false,
  user: null,
  login: (_email, _password) =>
    set({ isAuthenticated: true, user: defaultUser, activeView: null }),
  signup: (name, email, _password) =>
    set({
      isAuthenticated: true,
      user: { ...defaultUser, name, email },
      activeView: null,
    }),
  logout: () =>
    set({ isAuthenticated: false, user: null, activeView: null, cart: [] }),
  updateProfile: (updates) =>
    set((state) => ({
      user: state.user ? { ...state.user, ...updates } : null,
    })),

  cart: [],
  addToCart: (item) =>
    set((state) => {
      const existing = state.cart.find((c) => c.id === item.id);
      if (existing) {
        return {
          cart: state.cart.map((c) =>
            c.id === item.id ? { ...c, quantity: c.quantity + 1 } : c
          ),
        };
      }
      return { cart: [...state.cart, { ...item, quantity: 1 }] };
    }),
  removeFromCart: (id) =>
    set((state) => ({ cart: state.cart.filter((c) => c.id !== id) })),
  updateQuantity: (id, quantity) =>
    set((state) => ({
      cart:
        quantity <= 0
          ? state.cart.filter((c) => c.id !== id)
          : state.cart.map((c) => (c.id === id ? { ...c, quantity } : c)),
    })),
  clearCart: () => set({ cart: [] }),

  searchQuery: '',
  setSearchQuery: (query) => set({ searchQuery: query }),
}));