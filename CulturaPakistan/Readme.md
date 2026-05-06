# Cultura Pakistan — Smart Tourism Platform

Cultura Pakistan is a modern, mobile-first web application designed to be the ultimate digital companion for travelers exploring Pakistan. It blends cultural heritage discovery with smart, AI-inspired features and community-driven intelligence.

## ✨ Features

- **Smart Location Switching**: Browse content and recommendations for major Pakistani cities (Lahore, Islamabad, Karachi, Peshawar, Multan, Larkana).
- **AI-Powered Recommendations**: The home screen features dynamically generated "AI picks" for heritage sites and services.
- **Comprehensive Exploration**: Search, filter, and sort through a database of places including heritage sites, food spots, hotels, transport hubs, and shopping districts.
- **Interactive Map Visualization**:
  - A stylized, interactive map with radar and scan-line effects.
  - Clickable map markers for different categories (heritage, food, hotels, etc.).
  - Integrated list view of nearby locations with navigation prompts.
- **Community Pulse**:
  - Real-time style updates from verified locals, guides, and businesses.
  - Filter updates by category: Safety, Prices, Events, and Tips.
  - View top community contributors with gamification badges (Gold, Silver, Bronze).
- **User Profile Section**:
  - Personalized profile with travel stats (visited places, reviews, points).
  - A "Saved Places" collection.
  - Menu for travel history, achievements, contributor dashboard, settings, and help.
- **Detailed Place Modals**:
  - Rich information for each location including rating, travel distance/time, entry fee, and description.
  - "Navigate" and "Save" actions.
- **Polished UI/UX**:
  - Smooth screen transitions and bottom tab navigation.
  - Skeleton loading states, toast notifications, and responsive design.
  - Elegant color palette (Terra, Navy, Gold, Cream) inspired by Pakistani aesthetics.

## 🛠️ Tech Stack

- **HTML5**: Semantic structure.
- **Tailwind CSS**: Utility-first styling for a highly responsive and consistent design.
- **Font Awesome 6**: Icon library for visual elements.
- **Google Fonts**: Playfair Display (headings) and DM Sans (body text).
- **Vanilla JavaScript**: All interactivity, dynamic rendering, and client-side logic.

## 🚀 How to Run the Application

This is a client-side only application. No build steps or backend servers are required.

1.  **Download the Code**: Save the provided `index.html` file to your computer.
2.  **Open in Browser**: Double-click the `index.html` file or right-click and open it with any modern web browser (Chrome, Firefox, Safari, Edge).
3.  **Start Exploring**: The app is fully functional and ready to use.

*Note: The app uses Lorem Picsum for placeholder images and all data is currently front-end mock data, making it perfect for demonstrations, prototyping, or as a template for a real backend integration.*

## 📱 Core Application Structure

The app is structured around five main screens, accessible via the bottom navigation bar:

1.  **Home**:
    - Hero banner for a featured site.
    - Category filters.
    - AI recommendation carousel.
    - Grid of top heritage sites.
    - Community pulse preview.
    - List of nearby services.

2.  **Explore**:
    - Full-text search bar.
    - Filter chips for all categories.
    - Sort functionality (Nearest, Top Rated).
    - Responsive grid layout of all discoverable places.

3.  **Map**:
    - Canvas-style interactive map with location markers.
    - Scan-line and radar animation effects.
    - Bottom sheet with a list of nearby locations and quick navigation.

4.  **Community**:
    - Statistics header (contributors, updates, accuracy).
    - Categorized feed of user/guide updates with likes and share actions.
    - Horizontal scroll of top contributors.

5.  **Profile**:
    - User information card with stats.
    - Horizontal list of saved places.
    - Settings-style menu for app sections.

## 🔧 Configuration & Customization

- **Data**: The main `places`, `communityUpdates`, `contributors`, and `mapLocations` arrays in the `<script>` section hold all the application data. You can replace the mock data with real data from an API or a database.
- **Images**: The `imgUrl()` function uses `picsum.photos` for placeholders. Replace the `seed` values or the entire function to use your own image URLs.
- **Colors**: The main color theme is defined in the `tailwind.config` object and CSS `:root` variables. You can easily change the `terra`, `navy`, `gold`, `cream`, and `sand` colors to match a different brand.
- **Cities**: Modify the `cities` array to add, remove, or change the available locations.

## ⚠️ Notes

- This is a **front-end demo/blueprint**. It does not have a backend, database, or real AI. All AI features are UI simulations.
- The application is designed to be viewed on a **mobile device** or via a mobile-sized browser window (max-width: 500px) for the best experience. It centers its content in a card-like container.
- All interactive buttons (like, share, navigate) display demo toast messages to simulate functionality.

## 📄 License

This project is open-sourced and available for educational and commercial use. Please attribute appropriately if you use a significant portion of the code.

---

**Cultura Pakistan — Discover the Soul of Pakistan, Intelligently.**
