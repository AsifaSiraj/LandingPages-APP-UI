# 🎬 StreamRoll — Anime Streaming Clone

## 📖 Complete Technical Documentation

---

## 📋 Table of Contents

1. [Project Overview](#project-overview)
2. [Tech Stack](#tech-stack)
3. [Architecture](#architecture)
4. [Routing System](#routing-system)
5. [Pages — Detailed Breakdown](#pages--detailed-breakdown)
6. [Data Structures](#data-structures)
7. [Component System](#component-system)
8. [Interactive Features](#interactive-features)
9. [Keyboard Shortcuts](#keyboard-shortcuts)
10. [CSS Architecture](#css-architecture)
11. [Unique Improvements](#unique-improvements)
12. [File Structure](#file-structure)
13. [How to Run](#how-to-run)
14. [Known Limitations](#known-limitations)
15. [Future Enhancements](#future-enhancements)

---

## 📌 Project Overview

**StreamRoll** is a fully functional **Single Page Application (SPA)** inspired by anime streaming platforms.

- Built using **pure HTML, CSS, and JavaScript**
- No frameworks, no bundlers
- Entire app exists in **one HTML file**
- Focused on **performance, simplicity, and UX improvements**

---

## ⚙️ Tech Stack

| Technology | Purpose |
|----------|--------|
| Tailwind CSS | Styling |
| Inter Font | Typography |
| Font Awesome | Icons |
| Vanilla JS | Logic & Rendering |

---

## 🧠 Architecture

### SPA with Hash Routing

```
#home → Home Page  
#browse → Catalog  
#detail → Anime Detail  
```

### Core Function

```javascript
function go(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('pg-' + page).classList.add('active');

  if (page === 'browse') renderBrowse();
  if (page === 'detail') renderDetail();
}
```

✔ Lazy rendering (better performance)  
✔ No unnecessary DOM load  

---

## 🔁 Routing System

```javascript
window.addEventListener('hashchange', () => {
  go(location.hash.slice(1) || 'home');
});
```

---

## 📄 Pages Overview

| Page | Purpose |
|------|--------|
| Home | Dashboard |
| Browse | Anime catalog |
| Detail | Anime info |
| Manga | Manga library |
| News | Articles |
| Watch Party | Social viewing |
| Seasonal | Release chart |
| History | Watch history |
| Premium | Pricing |
| Profile | User dashboard |
| Login | Auth |
| Signup | Registration |

---

## 🧱 Data Structures

### Anime Object

```javascript
{
  id: Number,
  t: String,
  g: String,
  gk: String,
  m: Number,
  r: Number,
  ep: Number,
  s: String
}
```

---

## 🧩 Component System

No frameworks — components are **functions returning HTML**

```javascript
function aCard(a) {
  return `<div>${a.t}</div>`;
}
```

---

## ⚡ Interactive Features

### 🎭 Mood Discovery
- Select mood → filter anime
- Shuffle random mood

### 🛡 Spoiler Mode
```css
.spoiler-hidden .spoiler-text {
  filter: blur(5px);
}
```

### 🎬 Video Player
- Simulated playback
- Progress updates dynamically

### 🔍 Search
- Real-time filtering
- Title + genre matching

---

## ⌨️ Keyboard Shortcuts

| Key | Action |
|-----|-------|
| Ctrl + K | Open search |
| Esc | Close modal |
| Space | Play/Pause |
| ← → | Scroll |

---

## 🎨 CSS Architecture

### Variables

```css
:root {
  --brand-500: #F47521;
}
```

### Components

- `.match-ring`
- `.card-hover`
- `.spoiler-text`

---

## 🚀 Unique Improvements

- 🎭 Mood-based discovery  
- 🛡 Spoiler protection  
- 📊 User analytics  
- 🎬 Watch parties  
- 🏷 Watchlist tags  
- ⌨ Keyboard-first UX  

---

## 📁 File Structure

```
index.html
├── <head>
├── <body>
│   ├── صفحات (pages)
│   ├── navbar
│   ├── modals
│   └── footer
└── <script>
    ├── data
    ├── state
    ├── routing
    ├── renderers
```

---

## ▶️ How to Run

### Method 1
```
Open index.html
```

### Method 2 (Recommended)

```bash
python -m http.server 8000
```

```bash
npx serve .
```

---

## ⚠️ Known Limitations

- No backend  
- No real video playback  
- No database  
- Static data only  
- No authentication  

---

## 🔮 Future Enhancements

### High Priority
- localStorage persistence  
- Real API integration  
- Video streaming  

### Medium
- Advanced search  
- Infinite scroll  
- Light/Dark mode  

### Low
- PWA support  
- Offline mode  
- Accessibility improvements  

---

## 🌐 Browser Support

| Browser | Status |
|--------|--------|
| Chrome | ✅ |
| Firefox | ✅ |
| Safari | ✅ |
| Edge | ✅ |
| IE11 | ❌ |

---

## 💡 Summary

StreamRoll proves that:

> ⚡ You **don’t need frameworks** to build modern, scalable UI.

---
