<div align="center">

# 🌐 Shubham Agrawal — Portfolio
### *Software Development Engineer — Low-Latency Systems & Modern Web Platforms*

[![React 19](https://img.shields.io/badge/React-19.0-61dafb?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript 5.8](https://img.shields.io/badge/TypeScript-5.8-3178c6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite 6](https://img.shields.io/badge/Vite-6.0-646cff?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4.0-38bdf8?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Vercel-Edge_Deployed-black?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-emerald?style=for-the-badge)](LICENSE)

<br />

**[🚀 Live Demo](https://shubham-agrawal-portfolio.vercel.app) • [📄 Curriculum Vitae (PDF)](public/Shubham_Agrawal_Resume.pdf) • [💼 LinkedIn](https://linkedin.com/in/shubham-agrawal-dev) • [🐙 GitHub](https://github.com/AgrShubham)**

<br />

*A high-performance personal engineering portfolio engineered from the ground up to demonstrate low-latency networked systems, user-space OS event synthesis, and modern production React 19 web platforms.*

</div>

---

## 📌 Table of Contents

- [Architectural Philosophy](#-architectural-philosophy)
- [Key Technical Highlights](#-key-technical-highlights)
- [Flagship Systems Dossier](#-flagship-systems-dossier)
- [Interactive Cybernetic Canvas](#-interactive-cybernetic-canvas)
- [Cross-Device Responsiveness Audit](#-cross-device-responsiveness-audit)
- [Verified Credentials & Lightbox](#-verified-credentials--lightbox)
- [System Architecture & Directory Map](#-system-architecture--directory-map)
- [Local Development & Build](#-local-development--build)
- [Edge Deployment & Vercel Configuration](#-edge-deployment--vercel-configuration)
- [Conventional Commit Discipline](#-conventional-commit-discipline)
- [Author & Contact](#-author--contact)

---

## 🏛️ Architectural Philosophy

In an industry saturated by boilerplate templates, this portfolio is built with strict engineering principles:
1. **Zero-Fluff Proof of Work:** Elevates heavy-hitting original systems—such as sub-millisecond UDP streaming and Win32 `user32.dll` SendInput—over generic tutorials.
2. **Obsidian Tech Aesthetic:** Designed with a curated dark charcoal `#080b11` palette, translucent frosted surfaces (`backdrop-blur-md`), and precision typography (`Plus Jakarta Sans` paired with `JetBrains Mono`).
3. **Hardware-Accelerated Interactivity:** Custom 60fps HTML5 Canvas graphics engine with spring-damped lerp physics, coordinate grids, and live Socket.IO packet telemetry.
4. **Instant ATS Resume Accessibility:** Embedded interactive ATS PDF resume viewer modal with 1-click direct download, keeping recruiters on-site.
5. **Zero-Cost Edge Infrastructure:** Optimized for 100% free forever hosting on Vercel with Anycast global edge caching, clean URLs, and sub-50ms TTFB worldwide.

---

## ⚡ Key Technical Highlights

| Engineering Metric | Specification | Real-World Benchmark |
|---|---|---|
| **Motion Latency** | `< 1 ms` | Raw touch vectors streamed via UDP Port 5002 datagrams directly into Windows `user32.dll` SendInput. |
| **Driver Overhead** | `0 External Drivers` | User-space synthetic input generation avoiding kernel-mode security restrictions and anti-cheat triggers. |
| **Web Runtime** | `React 19 + TypeScript 5.8` | High-frequency Hot Module Replacement (HMR) powered by Vite 6 with zero hydration mismatches. |
| **Cross-Platform OS** | `Win / Mac / Linux` | Decoupled background daemons orchestrating real-time input pipelines across all desktop platforms. |
| **Responsive UI/UX** | `6 Viewports Audited` | Verified **0px horizontal overflow** from 375px mobile phones to 1920px Full HD monitors. |

---

## 🛠️ Flagship Systems Dossier

### 1. Remote Trackpad & Gamepad Pro (Mobile & Native Systems)
* **Domain:** Systems & Networking / Mobile & Native
* **Tech Stack:** `React Native 0.76` • `TypeScript` • `Python 3.11` • `Win32 user32.dll SendInput` • `UDP Sockets` • `Android SDK 34`
* **Core Problem:** Wi-Fi input streaming over TCP/WebSockets suffers from packet jitter buffer bloat and head-of-line blocking, causing cursor stuttering and sudden jumps.
* **Engineering Solution:**
  - Decoupled real-time motion from stateful events.
  - Streamed raw motion vectors over high-speed UDP datagrams (`Port 5002`) directly into Windows `user32.dll` SendInput.
  - Implemented kinetic momentum glide decay ($v_t = v_{t-1} \times 0.92$) and dynamic velocity ballistics.
  - Packaged as a standalone driverless executable (`RemoteMouseServer.exe`) with Android APK releases.
* **Source:** [GitHub Repository](https://github.com/AgrShubham/Remote-trackpad-app)

---

### 2. Shree Mewa — Luxury Boutique Platform (Client Production)
* **Domain:** Production Web & E-Commerce Engineering
* **Tech Stack:** `React 19` • `TypeScript 5.8` • `Vite 6` • `Tailwind CSS v4` • `Web Share API` • `Schema.org JSON-LD`
* **Client Context:** Bespoke ceremonial dry-fruit and luxury gifting boutique in Ramgarh, Jharkhand.
* **Core Problem:** High-ticket corporate and wedding gifting orders (₹25,000+) suffered massive cart abandonment in traditional multi-step checkout funnels because buyers demanded personalized consultations.
* **Engineering Solution:**
  - Engineered a **WhatsApp Concierge Funnel** serializing deep hamper customizations (finishes, laser monogramming, nut grade) into structured inquiry payloads.
  - Built an automated client data intake pipeline (`ShreeMewa_DataCollectionForm`) transforming Google Sheets into typed TypeScript models.
  - Implemented print-optimized lookbook stylesheets (`window.print()`) and complete LocalBusiness JSON-LD schema for SEO.
* **Source:** [GitHub Repository](https://github.com/AgrShubham/ShreeMewa)

---

### 3. Remote Trackpad Pro (Web Platform & Telemetry Inspector)
* **Domain:** Browser Systems & Real-Time Event Telemetry
* **Tech Stack:** `Python 3.9+` • `Flask` • `Flask-SocketIO` • `JavaScript ES6+` • `Pynput` • `HTML5 Canvas`
* **Core Feature:** Real-Time Gesture & Network Telemetry Inspector:
  - Interactive touch/mouse tracking pad calculating pointer $(\Delta x, \Delta y)$ deltas in real time.
  - Displays 60 FPS `requestAnimationFrame` gesture batching metrics.
  - Serializes and streams live Socket.IO JSON packet payloads (`{ event: "mouse_move", dx: 14.2, dy: -3.8, timestamp: 1772849201 }`).
* **Source:** [GitHub Repository](https://github.com/AgrShubham/remote_mouse)

---

## 🌌 Interactive Cybernetic Canvas

The entire site features a custom, zero-dependency, hardware-accelerated interactive canvas background ([InteractiveBackground.tsx](src/components/InteractiveBackground.tsx)):

- **Coordinate Blueprint Grid:** Subtle 48px coordinate grid in faint slate (`rgba(148, 163, 184, 0.035)`), reinforcing the systems engineering identity.
- **Spring-Damped Spotlight:** Dual-tone luminescent spotlight (electric cyan `#38bdf8` to deep indigo `#6366f1`) tracking cursor coordinates with a spring lerp damping factor of `0.075`.
- **Intersection Crosshairs (`+`):** Precision crosshairs illuminate at grid vertices within the spotlight radius (~360px).
- **Expanding Click Shockwaves:** Concentric dashed coordinate pulse waves expand outward on mouse clicks or mobile taps, illuminating intersecting grid coordinates.
- **Ambient Idle / Mobile Drift:** Smooth Lissajous curve drift keeps the background alive during idle periods and on touch devices.
- **Zero Interference:** Wrapped in `pointer-events-none` container, ensuring 0% interference with text selection, modals, or button interactions.

---

## 📱 Cross-Device Responsiveness Audit

Audited via automated headless browser testing (`puppeteer-core` driving local Chrome) across 6 standard viewport profiles:

| Profile | Viewport Resolution | Device Class | DPR | Horizontal Overflow | Layout Status |
|---|---|---|---|---|---|
| `01_mobile_375x812` | 375 × 812 | iPhone 13 / 14 | 3x | **0px** | ✅ Verified (Drawer active) |
| `02_mobile_large_414x896` | 414 × 896 | iPhone Plus / Max | 3x | **0px** | ✅ Verified (Touch-optimized) |
| `03_tablet_768x1024` | 768 × 1024 | iPad Portrait | 2x | **0px** | ✅ Optimized (`gap-4 lg:gap-8`) |
| `04_tablet_landscape_1024x768` | 1024 × 768 | iPad Landscape | 2x | **0px** | ✅ Verified (2-col grid) |
| `05_desktop_1280x800` | 1280 × 800 | MacBook / Ultrabook | 1x | **0px** | ✅ Verified (5-col competency) |
| `06_desktop_fhd_1920x1080` | 1920 × 1080 | 1080p Monitor | 1x | **0px** | ✅ Verified (7xl centered) |

Screen recordings and full-page snapshots are preserved in [screen_recordings/](screen_recordings/).

---

## 🎓 Verified Credentials & Lightbox

The portfolio integrates verified certificate assets with bidirectional hover synchronization and an in-browser Lightbox modal ([CertificateShowcase.tsx](src/components/CertificateShowcase.tsx)):

- **AWS Academy Graduate — Cloud Foundations:** [Credly Verification](https://www.credly.com/go/1mNIxVxM)
- **AWS Academy Graduate — Machine Learning Foundations:** [Credly Verification](https://www.credly.com/go/olUPF91W)
- **LinkedIn Learning — React.js Essential Training:** Completion ID `Adr69Q9vQcdM1iv-WezQ_t6Jqg4c`
- **LinkedIn Learning — Learning Git and GitHub:** Completion ID `ATqCLCtXXqM5Eq40a6HkEg39tvoU`

Hovering over any credential synchronizes the high-resolution certificate preview, and clicking opens a fullscreen Lightbox with keyboard navigation (`←`, `→`, `Esc`) and direct PDF downloads.

---

## 📁 System Architecture & Directory Map

```text
MyPortfolio2/
├── public/
│   ├── certificates/             # High-resolution certificate PNGs & official PDFs
│   │   ├── aws-cloud-foundations.png
│   │   ├── aws-cloud-foundations.pdf
│   │   ├── aws-machine-learning.png
│   │   └── aws-machine-learning.pdf
│   ├── Shubham_Agrawal_Resume.pdf# Authentic ATS-compliant resume PDF
│   └── favicon.svg               # Brand vector favicon
├── src/
│   ├── components/
│   │   ├── Header.tsx            # Sticky glassmorphic navbar & recruiter fast-bar
│   │   ├── Hero.tsx              # Executive profile, headline, 5 competency pillars
│   │   ├── FlagshipSection.tsx   # 3 flagship dossiers & interactive telemetry inspector
│   │   ├── SkillsSection.tsx     # Categorized domain taxonomy & skill chips
│   │   ├── ExperienceSection.tsx # Amnesea internship, B.Tech, and CSI award
│   │   ├── CertificateShowcase.tsx # Bidirectional hover sync & fullscreen Lightbox
│   │   ├── SecondaryProjects.tsx # Collapsible explorations (Chef Claude, Meme Gen)
│   │   ├── InteractiveBackground.tsx # Cybernetic grid & spring-damped spotlight canvas
│   │   ├── ResumeModal.tsx       # In-browser ATS PDF viewer & direct download modal
│   │   ├── Footer.tsx            # Contact channels, 1-click email copy & smooth scroll
│   │   └── Icons.tsx             # Custom SVG brand icons
│   ├── data/
│   │   ├── resumeData.ts         # Centralized candidate metadata & contact schema
│   │   ├── projects.ts           # Curated technical project dossiers
│   │   └── experience.ts         # Professional experience, education & awards
│   ├── App.tsx                   # Main layout coordinator & modal state
│   ├── main.tsx                  # React 19 application root entry
│   └── index.css                 # Obsidian tokens, font imports & glass utilities
├── screen_recordings/            # Animated scroll recordings (.webp, .gif) & audit logs
├── audit_and_record.cjs          # Automated Puppeteer multi-viewport audit runner
├── compile_recordings.py         # Pillow animated screen session compiler
├── HERO_REDESIGN_PLAN.md         # Formal SDE hero architectural transformation dossier
├── PORTFOLIO_MASTER_PLAN.md      # Comprehensive master plan & 19 architectural logs
├── PROJECT_CHAT_HISTORY.md       # Complete turn-by-turn chat history (1,400+ lines)
├── vercel.json                   # Edge routing, clean URLs & immutable caching rules
├── vite.config.ts                # Vite 6 + React 19 build configuration
└── package.json                  # Dependencies & build scripts
```

---

## 💻 Local Development & Build

### Prerequisites
- Node.js `18.x` or higher
- npm `9.x` or higher

### Installation & Run

```bash
# Clone the repository
git clone https://github.com/AgrShubham/shubham-agrawal-portfolio.git
cd shubham-agrawal-portfolio

# Install dependencies
npm install

# Start local development server with HMR
npm run dev
```

Visit `http://localhost:5173/` in your browser.

### Production Build & Typecheck

```bash
# Typecheck with TypeScript and build optimized bundle via Vite
npm run build

# Preview the production build locally
npm run preview
```

Typical production build duration: **~400–550ms** with zero errors (`dist/index.html` ~1.9 kB, `dist/assets/index.js` ~334 kB, `dist/assets/index.css` ~66 kB).

---

## ☁️ Edge Deployment & Vercel Configuration

The project includes a production-grade [vercel.json](vercel.json) configuration:

```json
{
  "framework": "vite",
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "cleanUrls": true,
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ],
  "headers": [
    {
      "source": "/assets/(.*)",
      "headers": [
        { "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }
      ]
    }
  ]
}
```

### 1-Click Deployment to Vercel
1. Navigate to [vercel.com/new](https://vercel.com/new).
2. Select your GitHub repository: `AgrShubham/shubham-agrawal-portfolio`.
3. Click **Deploy**. Vercel will build and publish your site with automated HTTPS SSL and global Anycast Edge caching.

---

## 📜 Conventional Commit Discipline

This repository strictly adheres to the [Conventional Commits](https://www.conventionalcommits.org/) specification with atomic commits tracking every architectural milestone:

```text
dbb27b5 docs: append Turn 21 to project chat history and update git commit log
151c9af chore(deploy): add vercel edge deployment configuration and rewrite rules
92b4988 feat(ui): implement interactive cybernetic coordinate grid with spring-damped spotlight and ripple physics
e91655d docs: generate comprehensive project chat history and architectural decision log
6f3663f test(responsive): audit 6 viewports, generate screen recordings, and optimize tablet navbar spacing
907cf8e feat(hero): add 5th technical competency card for Web & Mobile Responsive UI/UX
5b9c717 feat(assets): add public vector icons and favicon
656c6fc docs: establish master portfolio plan, hero redesign dossier, and architectural decision logs
ced54a9 refactor(hero): formalize hero section to FAANG/SDE executive profile with technical competency panel
8399651 refactor(nav): professionalize header navigation hierarchy and section scroll offsets
1919fe8 feat(certifications): integrate verified certificate assets with bidirectional hover sync and lightbox modal
533da9e feat(skills): implement categorized domain skills matrix with systems and fullstack chasm
7709148 feat(projects): implement flagship systems showcases with interactive real-time gesture telemetry
8614891 feat(resume): add in-browser ATS PDF resume viewer modal and 1-click download pipeline
adb61df feat(design-system): implement obsidian tech dark palette and SVG icons
c94bef6 feat(data): establish baseline candidate schema and raw content dossiers
1b55578 chore(init): bootstrap project scaffolding with Vite 6, React 19, TypeScript, and Tailwind CSS
```

---

## 📬 Author & Contact

**Shubham Agrawal**  
Software Development Engineer — Systems, Mobile & Modern Web  
*B.Tech in Computer Science & Engineering (2021–2025) • IPS Academy Indore*  

- **Email:** [shubhamagrawal.code@gmail.com](mailto:shubhamagrawal.code@gmail.com)
- **LinkedIn:** [linkedin.com/in/shubham-agrawal-dev](https://linkedin.com/in/shubham-agrawal-dev)
- **GitHub:** [github.com/AgrShubham](https://github.com/AgrShubham)
- **Portfolio Repository:** [github.com/AgrShubham/shubham-agrawal-portfolio](https://github.com/AgrShubham/shubham-agrawal-portfolio)

---

<div align="center">
  <sub>Engineered with precision using Vite 6, React 19, TypeScript 5.8, Tailwind CSS, and Antigravity. © 2026 Shubham Agrawal. All rights reserved.</sub>
</div>
