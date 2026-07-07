# Aurelian - Luxury Fine Dining Restaurant Website

A premium, award-winning restaurant website built with Next.js 16, featuring cinematic animations, an interactive dish showcase, and a fully functional auth/cart/booking system. Designed to replicate the experience of a Michelin-star restaurant brand on the web.

---

## Live Preview

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-purple?logo=framer)
![License](https://img.shields.io/badge/License-MIT-gold)

---

## Screenshots

| Hero Section | Featured Dish Showcase | Full Menu |
|:---:|:---:|:---:|
| Full-screen cinematic hero with parallax mouse tracking, slow-zoom background, and gold accent typography | Interactive dish selector with animated left/right panel layout, detail info, ratings, and add-to-cart | Categorized menu with expandable items, chef picks, and direct ordering |

| Login / Signup | User Settings | Cart & Orders |
|:---:|:---:|:---:|
| Glassmorphic auth modals with social login (Google, Apple), form validation, and membership tier preview | Full profile editor with seating preferences, dietary restrictions, notification toggles, and stats | Live cart with quantity controls, order history, reorder, and receipt download |

| Gallery Lightbox | Search | Reservation |
|:---:|:---:|:---:|
| Category-filtered gallery with full-screen lightbox, prev/next navigation, and counter | Instant search with popular suggestions, live results, and keyboard support | Premium booking form with date, time, guest count, and confirmation screen |

---

## Features

### Core Website Sections
- **Floating Navigation** - Transparent nav that becomes glassmorphic on scroll, with responsive mobile drawer
- **Hero Section** - Full-screen cinematic hero with parallax mouse tracking, slow-zoom background animation, and dual CTA
- **Featured Dish Showcase** - Interactive dish selector: select a dish, watch it animate to the left while a detail panel slides in from the right with ingredients, calories, preparation, portions, ratings, and order controls
- **Menu Collection** - Magazine-style masonry grid with hover zoom and overlay reveals
- **Signature Dishes** - Horizontal card layout with hover lift, scale, and glow effects
- **Chef Experience** - Split layout with chef portrait, editorial quote, and animated stats
- **About Section** - Brand story with icon-driven value cards (Sourcing, Craftsmanship, Seasonality)
- **Reservation Form** - Premium booking with name, email, phone, date, time, guests, special requests, and animated confirmation
- **Testimonials** - Auto-rotating carousel with directional navigation and dot indicators
- **Gallery** - Full-width photography showcase with hover effects
- **Footer** - Multi-column layout with newsletter signup, social links, and contact info

### Full-Screen Overlay Pages
- **Login** - Email/password auth with Google and Apple social login, remember me, and forgot password
- **Signup** - Registration with membership tier preview (Silver/Gold/Platinum), password confirmation, and terms
- **User Settings** - Profile editor with avatar, personal info, dietary restrictions, seating preferences, notification toggles, and sign out
- **Cart & Orders** - Live cart with quantity controls, subtotal/tax/total calculation, place order, and order history with reorder and receipt download
- **Full Menu** - 16+ items across 7 categories with expandable details, chef picks, and add-to-order
- **Full Gallery** - 18 images with category filtering (All/Food/Interior/Kitchen/Dining/Wine) and full-screen lightbox with prev/next
- **Search** - Instant search with popular suggestions, live filtered results, and ESC to close

### Design System
- **Color Palette** - Deep Black (#050505), Charcoal (#111111), Warm Gold (#C7A86D), Champagne Gold (#D6B67C), Soft Ivory (#F8F4EC)
- **Typography** - Playfair Display (headings), Cormorant Garamond (editorial), Inter (body)
- **Glassmorphism** - Frosted glass effects on nav, cards, and modals
- **Custom Scrollbar** - Gold-accented thin scrollbar
- **Gold Gradient Text** - CSS gradient text effect for headings and accents
- **Luxury Button Shimmer** - Hover shimmer sweep animation on all CTA buttons

### Animations & Interactions
- Lenis smooth scrolling with custom easing
- GSAP parallax mouse tracking on hero
- Framer Motion scroll-triggered fade-ins on all sections
- Animated dish showcase with cinematic left/right panel transition
- Hover lift, scale, and glow on signature dish cards
- Auto-rotating testimonial carousel with directional transitions
- Image hover zoom and overlay reveals throughout
- Floating animation on featured dish circle
- Scroll indicator bounce animation
- Mobile hamburger to X morphing animation

### State Management
- **Zustand** store managing: active overlay view, authentication state, user profile, cart items, search query
- Mock login/signup with simulated user session
- Add-to-cart from Featured Dish Showcase and Full Menu
- Cart persistence across overlays during session

---

## Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| [Next.js](https://nextjs.org/) | 16 | React framework with App Router |
| [TypeScript](https://www.typescriptlang.org/) | 5 | Type safety |
| [Tailwind CSS](https://tailwindcss.com/) | 4 | Utility-first styling |
| [Framer Motion](https://www.framer.com/motion/) | 12 | Animations and transitions |
| [GSAP](https://gsap.com/) | 3.15 | Parallax and advanced animations |
| [Lenis](https://github.com/darkroomengineering/lenis) | 1.0 | Smooth scrolling |
| [Zustand](https://zustand-demo.pmnd.rs/) | 5 | Client state management |
| [shadcn/ui](https://ui.shadcn.com/) | Latest | UI component library |
| [Lucide React](https://lucide.dev/) | 0.525 | Icon library |

---

## Project Structure

```
aurelian-restaurant/
├── public/
│   ├── logo.svg
│   └── robots.txt
├── prisma/
│   └── schema.prisma
├── src/
│   ├── app/
│   │   ├── api/route.ts
│   │   ├── globals.css          # Global styles, theme variables, custom utilities
│   │   ├── layout.tsx           # Root layout with Playfair, Cormorant, Inter fonts
│   │   └── page.tsx             # Main page assembling all sections + overlays
│   ├── components/
│   │   ├── overlays/
│   │   │   ├── CartOverlay.tsx       # Cart + order history
│   │   │   ├── FullGalleryOverlay.tsx # Filterable gallery with lightbox
│   │   │   ├── FullMenuOverlay.tsx   # Categorized expandable menu
│   │   │   ├── LoginOverlay.tsx      # Login with social auth
│   │   │   ├── OverlayManager.tsx    # AnimatePresence wrapper
│   │   │   ├── SearchOverlay.tsx     # Instant search
│   │   │   ├── SettingsOverlay.tsx   # User profile & preferences
│   │   │   └── SignupOverlay.tsx     # Registration with tiers
│   │   ├── ui/                       # shadcn/ui components
│   │   ├── AboutSection.tsx          # Brand story + values + SmoothScrollProvider
│   │   ├── ChefExperience.tsx        # Chef split layout with stats
│   │   ├── FeaturedDishShowcase.tsx  # Interactive dish selector
│   │   ├── Footer.tsx                # Multi-column footer
│   │   ├── Gallery.tsx               # Photography grid
│   │   ├── HeroSection.tsx           # Full-screen hero with parallax
│   │   ├── MenuCollection.tsx        # Magazine-style gallery
│   │   ├── Navigation.tsx            # Floating nav with user menu
│   │   ├── ReservationSection.tsx    # Booking form
│   │   ├── SignatureDishes.tsx       # Horizontal dish cards
│   │   └── Testimonials.tsx          # Auto-rotating carousel
│   ├── hooks/
│   │   ├── use-mobile.ts
│   │   └── use-toast.ts
│   ├── lib/
│   │   ├── db.ts
│   │   └── utils.ts
│   └── store/
│       └── useAppStore.ts            # Zustand store (auth, cart, views)
├── .gitignore
├── Caddyfile
├── components.json
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
└── tsconfig.json
```

---

## Getting Started

### Prerequisites

- **Node.js** 18.17 or later
- **Bun** 1.0+ (recommended) or npm/yarn/pnpm
- **Git**

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/YOUR_USERNAME/aurelian-restaurant.git
   cd aurelian-restaurant
   ```

2. **Install dependencies:**
   ```bash
   bun install
   # or
   npm install
   # or
   pnpm install
   # or
   yarn install
   ```

3. **Start the development server:**
   ```bash
   bun dev
   # or
   npm run dev
   ```

4. **Open in your browser:**
   ```
   http://localhost:3000
   ```

### Production Build

```bash
bun run build
bun start
```

---

## Usage Guide

### Browsing the Website
- **Scroll** through all sections with Lenis smooth scrolling
- **Hover** over gallery images, signature dishes, and buttons for premium micro-interactions
- Click **Menu** in the nav to open the full categorized menu overlay
- Click **Gallery** in the nav to open the filterable full gallery with lightbox

### Interactive Dish Showcase
1. Scroll to the **Featured Dishes** section
2. Click any dish thumbnail below the main circle
3. Watch the dish animate to the left and a detail panel slide in from the right
4. Click **Add to Cart** or **Order Now** to add items to your cart
5. Click the same dish again to deselect and return to center view

### Authentication
1. Click **Sign In** in the top-right navigation
2. Enter any email and password (demo mode - all credentials are accepted)
3. Or click **Google** / **Apple** for social login simulation
4. After login, your avatar appears in the nav with a dropdown menu
5. Click **Create Account** on the login screen to see the signup flow with membership tiers

### User Profile & Settings
1. After logging in, click your **avatar** in the navigation
2. Select **My Profile** to access settings
3. Edit personal info, dietary restrictions, and seating preferences
4. Toggle notification preferences
5. Click **Sign Out** to end your session

### Cart & Ordering
1. Add items from the **Featured Dish Showcase** or **Full Menu**
2. Click the **cart icon** (top-right) to view your cart
3. Adjust quantities with +/- buttons
4. View **Order History** with reorder and receipt download options
5. Click **Place Order** to complete (demo mode)

### Search
1. Click the **search icon** in the navigation
2. Type to search dishes, experiences, and pages
3. Click any result to navigate directly
4. Press **ESC** or click outside to close

### Reservations
1. Scroll to **Reservations** or click **Reserve** in the nav
2. Fill in your details (name, email, phone, date, time, guests)
3. Add any special requests
4. Submit to see the animated confirmation screen

---

## Customization

### Changing Colors
Edit the CSS variables in `src/app/globals.css`:
```css
:root {
  --primary: #C7A86D;        /* Warm Gold - change this */
  --accent: #D6B67C;         /* Champagne Gold */
  --background: #050505;     /* Deep Black */
  --foreground: #F8F4EC;    /* Soft Ivory */
}
```

### Changing Fonts
Update the font imports in `src/app/layout.tsx` and CSS variables in `globals.css`.

### Adding Menu Items
Edit the `menuItems` array in `src/components/overlays/FullMenuOverlay.tsx` and the `dishes` array in `src/components/FeaturedDishShowcase.tsx`.

### Adding Gallery Images
Edit the `galleryImages` array in `src/components/Gallery.tsx` and `allGalleryImages` in `src/components/overlays/FullGalleryOverlay.tsx`.

### Connecting a Real Backend
Replace the Zustand mock functions in `src/store/useAppStore.ts` with real API calls:
```typescript
login: async (email, password) => {
  const res = await fetch('/api/auth/login', { method: 'POST', body: JSON.stringify({ email, password }) });
  const user = await res.json();
  set({ isAuthenticated: true, user });
}
```

---

## Performance

- Optimized with Next.js 16 App Router and server components where possible
- Google Fonts loaded via `next/font` for zero layout shift
- Framer Motion `viewport={{ once: true }}` prevents re-animation on scroll
- Lazy overlay rendering with `AnimatePresence` for minimal initial bundle
- Tailwind CSS 4 with JIT compilation for minimal CSS output
- Image optimization via Unsplash's built-in CDN with quality parameters

---

## Browser Support

- Chrome 90+
- Firefox 90+
- Safari 15+
- Edge 90+

---

## License

This project is open source and available under the [MIT License](LICENSE).

---

## Acknowledgments

- Photography by [Unsplash](https://unsplash.com/)
- Fonts by [Google Fonts](https://fonts.google.com/)
- Icons by [Lucide](https://lucide.dev/)
- Built with [Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/), and [Framer Motion](https://www.framer.com/motion/)

---

<p align="center">
  Crafted with precision and passion, just like the cuisine it represents.
</p>