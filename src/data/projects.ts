export interface ProjectChallenge {
  title: string;
  problem: string;
  solution: string;
  impact: string;
}

export interface ProjectData {
  slug: string;
  title: string;
  tagline: string;
  category: "Systems & Networking" | "Mobile & Native" | "Production Web" | "Interactive Tools";
  badge: "FLAGSHIP SHOWSTOPPER" | "CLIENT PRODUCTION" | "FEATURED TOOL";
  featured: boolean;
  status: "Production Ready" | "Active Client" | "Completed";
  summary: string;
  githubUrl: string;
  liveUrl?: string;
  downloadExeUrl?: string;
  downloadApkUrl?: string;
  stats: { label: string; value: string }[];
  stack: string[];
  highlights: string[];
  architectureOverview: string;
  technicalDetails: {
    protocol?: string;
    ports?: { port: string; protocol: string; purpose: string }[];
    mathematicalModels?: { name: string; formula: string; explanation: string }[];
    features: string[];
  };
  challenges: ProjectChallenge[];
}

export const PROJECTS: ProjectData[] = [
  {
    slug: "remote-trackpad-app",
    title: "Remote Trackpad & Gamepad Pro",
    tagline: "Sub-millisecond UDP peripheral ecosystem transforming Android into a glass trackpad, console gamepad & mechanical keyboard for Windows PCs.",
    category: "Mobile & Native",
    badge: "FLAGSHIP SHOWSTOPPER",
    featured: true,
    status: "Production Ready",
    summary: "Built an open-source, ultra-low latency wireless input ecosystem for Windows 10/11 PCs. Solved TCP head-of-line blocking by architecting an asynchronous UDP motion streaming pipeline injecting inputs directly into user32.dll Win32 APIs with sub-millisecond execution.",
    githubUrl: "https://github.com/AgrShubham/Remote-trackpad-app",
    downloadExeUrl: "https://github.com/AgrShubham/Remote-trackpad-app/releases/download/v1.0.0/RemoteMouseServer.exe",
    downloadApkUrl: "https://github.com/AgrShubham/Remote-trackpad-app/releases/download/v1.0.0/app-release.apk",
    stats: [
      { label: "Motion Latency", value: "< 1 ms" },
      { label: "UDP Streaming", value: "Port 5002" },
      { label: "Console Layouts", value: "3 Modes" },
      { label: "External Drivers", value: "0 Required" },
    ],
    stack: [
      "React Native 0.76",
      "TypeScript",
      "Python 3.11",
      "Win32 SendInput",
      "UDP Sockets",
      "WebSocket",
      "Android SDK 34",
    ],
    highlights: [
      "Sub-Millisecond UDP Motion Engine: Streams cursor coordinate deltas over Port 5002 directly to Win32 user32.dll APIs, bypassing TCP congestion and head-of-line lag.",
      "Dual-Wave Wi-Fi Radar Scanner: Host broadcasts discovery beacons on Port 5001; mobile app renders animated radar scanner for 1-tap auto pairing.",
      "Calmed Natural Ballistics: Mac-grade acceleration curve preventing cursor fling while maintaining single-pixel precision and rapid multi-monitor travel.",
      "3-Way Pro Console Gamepad: Real-time dynamic switcher between Arc (ergonomic handheld), Xbox (asymmetric), and PlayStation (symmetric) layouts.",
      "Interactive Deadzone & Sensitivity Tuning: Live draggable drawer tuning thumbstick deadbands (5%–30%) and sensitivity (0.5×–2.5×) in real time.",
      "Stretched 80% Mechanical Keyboard: 3D press physics with physical 2px key travel, green LED toggles for Caps/Ctrl/Alt, and navigation clusters.",
      "Zero-Setup Standalone Distribution: Shipped compiled 27MB RemoteMouseServer.exe system tray app and 48MB signed Android APK.",
    ],
    architectureOverview: `
The system uses a hybrid dual-channel architecture:
1. Discovery Beacon (UDP Broadcast - Port 5001): Windows server periodically emits lightweight JSON beacons containing host metadata and ports.
2. High-Speed Motion Pipeline (UDP Datagrams - Port 5002): React Native streams raw touch vectors directly via UDP datagrams without TCP handshake or ACK roundtrips, achieving sub-millisecond cursor injection via SendInput.
3. Reliable Control Pipeline (TCP WebSocket - Port 5000): Manages stateful events such as modifier latching, discrete key combinations, volume scrubbers, and ping heartbeats.
    `,
    technicalDetails: {
      protocol: "Hybrid UDP Unicast Datagram + TCP WebSocket",
      ports: [
        { port: "5000", protocol: "TCP (WebSocket)", purpose: "Stateful keypresses, clicks, media commands, ping monitoring" },
        { port: "5001", protocol: "UDP (Broadcast)", purpose: "Wi-Fi network host auto-discovery beacon" },
        { port: "5002", protocol: "UDP (Unicast)", purpose: "High-speed mouse motion & thumbstick packet streaming (<1ms)" },
      ],
      mathematicalModels: [
        {
          name: "Natural Velocity Ballistics Curve",
          formula: "v_smooth = v_raw * (1.0 + min(2.5, v_raw * 0.6))",
          explanation: "Prevents erratic coordinate overshooting on rapid flicks while ensuring fine 0.1px precision on micro movements."
        },
        {
          name: "Kinetic Momentum Glide Decay",
          formula: "v_t = v_{t-1} * 0.92 (per frame until |v| < 0.05)",
          explanation: "Simulates macOS-style natural friction deceleration when releasing two-finger scroll gestures."
        }
      ],
      features: [
        "100% Offline & Driverless Win32 input injection",
        "Sub-pixel 0.1px motion detection threshold",
        "Kinetic momentum scrolling with 0.92 decay rate",
        "Tactile haptic feedback modulation (Subtle/Medium/Strong)",
        "Master volume scrubber and streaming video control suite",
      ]
    },
    challenges: [
      {
        title: "Overcoming TCP Head-of-Line Blocking for Real-Time Input",
        problem: "Early prototypes using standard WebSockets suffered from micro-stutters. When a single Wi-Fi packet experienced 20ms jitter, TCP held all subsequent touch packets in buffer, causing the desktop cursor to freeze and suddenly 'jump' across the screen.",
        solution: "Decoupled real-time motion from state events. Architected a custom UDP datagram protocol over Port 5002 for cursor and thumbstick coordinates. Dropped motion frames are safely ignored as newer coordinates arrive immediately, eliminating packet queuing.",
        impact: "Reduced cursor latency from ~45ms down to <1ms with zero buffer-bloat jump artifacts."
      },
      {
        title: "Eliminating Capacitive Touch Sensor Coordinate Jitter",
        problem: "Mobile touchscreen digitizers report microscopic coordinate drift (0.05px) even when a thumb is resting still, causing high-DPI desktop pointers to wobble.",
        solution: "Implemented an adaptive deadband threshold filter (0.1px minimum travel) paired with an exponential moving average (EMA) smoothing filter that selectively bypasses smoothing when finger velocity exceeds rapid movement thresholds.",
        impact: "Smooth cursor tracking matching native Apple trackpad feel without latency penalties on swift flicks."
      },
      {
        title: "Safe Driverless OS Kernel Input Injection",
        problem: "Virtual gamepad and mouse drivers often require kernel-level installation (e.g. unsigned .sys files), triggering anti-cheat security flags (Vanguard, EasyAntiCheat) and requiring administrator elevation.",
        solution: "Used Win32 user-space SendInput APIs via Python, wrapping input structs directly. Packaged the host daemon with PyInstaller into a standalone system tray executable.",
        impact: "Users can run RemoteMouseServer.exe with a single double-click with zero driver installations or system modifications."
      }
    ]
  },
  {
    slug: "remote-trackpad-web",
    title: "Remote Trackpad Pro (Web Platform)",
    tagline: "Browser-based wireless input server transforming any mobile browser into a MacBook-grade glass trackpad & mechanical keyboard.",
    category: "Systems & Networking",
    badge: "FLAGSHIP SHOWSTOPPER",
    featured: true,
    status: "Production Ready",
    summary: "Created a zero-installation wireless peripheral system running entirely inside modern mobile web browsers. Engineered an acoustic Cherry MX switch synthesizer using the Web Audio API to deliver physical tactile confirmation on iOS Safari where hardware vibration is restricted.",
    githubUrl: "https://github.com/AgrShubham/Remote_trackpad_web",
    stats: [
      { label: "Client Install", value: "Zero (Pure Web)" },
      { label: "Audio Synthesizer", value: "Web Audio API" },
      { label: "Platform Support", value: "Win/Mac/Linux" },
      { label: "Event Pipeline", value: "Socket.IO + Pynput" },
    ],
    stack: [
      "Python 3.9+",
      "Flask",
      "Flask-SocketIO",
      "JavaScript (ES6+)",
      "Web Audio API",
      "Pynput",
      "HTML5 / CSS3",
    ],
    highlights: [
      "Zero App Installation: Runs directly in mobile Safari, Chrome, Edge, and Samsung Internet with instant responsive full-screen scaling.",
      "Acoustic Switch Synthesizer: Synthesizes real-time 1750Hz click snaps + 220Hz bottom-out clacks via Web Audio API oscillators, overcoming iOS vibration restrictions.",
      "Monolithic Glass Trackpad: Subpixel accumulator, thumb-and-glide dragging, and two-finger inertial scrolling with rAF batching.",
      "Dual-Layout Pro Gamepad: Asymmetric (Xbox) and Symmetric (PlayStation) console layouts with concentric thumbsticks and 82% outer sprint ring.",
      "Smart Modifier Latching: Virtual Shift, Caps Lock LED toggles, and persistent Ctrl/Alt latches for remote Windows shortcuts.",
      "Gyroscope Motion Steering: Toggles mobile device orientation sensors for racing game steering and first-person shooter aiming.",
    ],
    architectureOverview: `
A lightweight Flask and Socket.IO server hosts an optimized, zero-dependency mobile web client. 
When touch gestures occur, client-side requestAnimationFrame loops batch touch coordinate deltas and emit binary/JSON events across local WebSockets.
On the desktop host, Python receives the events, normalizes screen resolution coordinates, and triggers OS inputs through pynput.
    `,
    technicalDetails: {
      protocol: "Socket.IO over Local Wi-Fi (Port 5000)",
      features: [
        "Cherry MX mechanical switch audio synthesizer (Web Audio API)",
        "Gyroscope motion steering and aim integration",
        "Subpixel coordinate accumulator on host",
        "Dynamic button remap modal with localStorage persistence",
        "rAF-synchronized touch event batching",
      ]
    },
    challenges: [
      {
        title: "Bypassing Mobile Safari Haptics Restrictions",
        problem: "Apple Safari on iOS blocks navigator.vibrate() across all web applications for policy reasons, preventing users from feeling physical feedback when pressing virtual mechanical keys.",
        solution: "Engineered a client-side sound synthesizer using the Web Audio API. When a key is tapped, twin audio nodes generate an instantaneous 1750Hz tactile snap followed by a 220Hz bottom-out clack with micro-millisecond envelope decay.",
        impact: "Universal tactile and acoustic confirmation on every keystroke across both iOS and Android browsers."
      }
    ]
  },
  {
    slug: "shree-mewa",
    title: "Shree Mewa — Luxury Boutique Platform",
    tagline: "High-touch digital showroom and WhatsApp concierge gifting commerce platform built with React 19, TypeScript, and Tailwind CSS v4.",
    category: "Production Web",
    badge: "CLIENT PRODUCTION",
    featured: true,
    status: "Active Client",
    summary: "Engineered a ceremonial dry fruits and bespoke luxury gifting digital showroom for Shree Mewa (Ramgarh, Jharkhand). Replaced traditional cart abandonment with an automated WhatsApp concierge funnel, printable digital lookbooks, and an automated client data intake pipeline.",
    githubUrl: "https://github.com/AgrShubham/ShreeMewa",
    liveUrl: "https://github.com/AgrShubham/ShreeMewa",
    stats: [
      { label: "Frontend Core", value: "React 19" },
      { label: "Type Safety", value: "TypeScript 5.8" },
      { label: "Styling Engine", value: "Tailwind v4" },
      { label: "Local SEO", value: "JSON-LD Schema" },
    ],
    stack: [
      "React 19",
      "TypeScript 5.8",
      "Vite 6",
      "Tailwind CSS v4",
      "Lucide React",
      "Web Share API",
      "Schema.org SEO",
    ],
    highlights: [
      "Concierge Commerce Engine: Replaces generic shopping carts with multi-attribute wedding and corporate gifting inquiry funnels integrated directly with WhatsApp.",
      "Digital Lookbook & Print Engine: Dedicated catalog with instant print stylesheet (window.print()) for corporate procurement officers and mobile sharing via Web Share API.",
      "Local Business SEO: Full schema.org/LocalBusiness JSON-LD implementation with geo-coordinates, store hours, and Jharkhand service areas.",
      "Automated Client Intake Suite: Created a standalone data intake form (ShreeMewa_DataCollectionForm) that automates converting client Google Sheet data into typed TypeScript schemas.",
      "Zero-Jank Responsive Design: Luxury typography (Cormorant Garamond + Plus Jakarta Sans) with accessible modal dialogs and smooth drawer navigation.",
    ],
    architectureOverview: `
Component-driven React 19 architecture with strict TypeScript data contracts. All product offerings, hamper collections, and boutique metadata are statically compiled with Vite 6 and styled using Tailwind CSS v4's high-speed CSS variable pipeline.
    `,
    technicalDetails: {
      features: [
        "Single-harvest dry fruit inventory with origin and grade metadata",
        "Bespoke wedding hamper customizer with monogram engraving options",
        "Bilingual Devanagari / English brand typography",
        "Google Maps interactive showroom integration",
        "Automated client intake pipeline with JSON/TS export scripts",
      ]
    },
    challenges: [
      {
        title: "Eliminating High-Ticket Luxury Gifting Cart Friction",
        problem: "In traditional Indian ceremonial and corporate gifting, customers do not complete raw credit-card checkout for customized ₹25,000+ hamper orders without speaking to store owners.",
        solution: "Architected a WhatsApp Concierge Ordering Pipeline that serializes user selections (box finish, laser monogramming, nut grade, custom greeting) into an encrypted, formatted WhatsApp deep-link message.",
        impact: "Significantly accelerated client lead qualification and enabled high-touch closing directly with boutique management."
      }
    ]
  },
  {
    slug: "chef-claude",
    title: "Chef Claude — AI Recipe Studio",
    tagline: "Interactive culinary assistant synthesizing curated recipes in real time from pantry ingredient inventories.",
    category: "Interactive Tools",
    badge: "FEATURED TOOL",
    featured: false,
    status: "Completed",
    summary: "Built a sleek, responsive React 19 web application with Vite and Tailwind CSS. Features dynamic pantry ingredient management, optimistic UI updates, and intelligent recipe suggestion workflows.",
    githubUrl: "https://github.com/AgrShubham/Chef-Claude",
    stats: [
      { label: "Frontend", value: "React 19" },
      { label: "Build Tool", value: "Vite 6" },
      { label: "Styling", value: "Tailwind CSS" },
      { label: "State Logic", value: "React Hooks" },
    ],
    stack: ["React 19", "JavaScript (ES6+)", "Vite", "Tailwind CSS", "PostCSS"],
    highlights: [
      "Dynamic Ingredient State: Instant tag addition, validation, and deletion with real-time UI state synchronization.",
      "Optimistic UI Updates: Zero-latency user experience with responsive state management.",
      "Mobile-First Layout: Optimized touch targets and responsive card layouts across all viewport sizes.",
    ],
    architectureOverview: "Clean unidirectional React dataflow leveraging modular component decomposition and custom hook abstraction.",
    technicalDetails: {
      features: [
        "Interactive pantry ingredient tagger",
        "Real-time state validation",
        "Tailwind CSS responsive design tokens",
      ]
    },
    challenges: [
      {
        title: "Clean State Decomposition in Dynamic Forms",
        problem: "Preventing unnecessary re-renders across the entire recipe view when rapid ingredient tags are typed and deleted.",
        solution: "Isolated ingredient input state into localized subcomponents with memoized callbacks, maintaining sub-millisecond input responsiveness.",
        impact: "Fluid 60fps typing experience on low-end mobile browsers."
      }
    ]
  },
  {
    slug: "meme-generator",
    title: "Canvas Meme Studio",
    tagline: "Client-side image processing and raster rendering engine built with React and HTML5 Canvas API.",
    category: "Interactive Tools",
    badge: "FEATURED TOOL",
    featured: false,
    status: "Completed",
    summary: "Developed a client-side image manipulation and text overlay studio. Utilizes the HTML5 Canvas API for real-time raster rendering, custom typography styling, and instant high-resolution downloads without server compute dependency.",
    githubUrl: "https://github.com/AgrShubham/MemeGenerator",
    stats: [
      { label: "Graphics API", value: "HTML5 Canvas" },
      { label: "Server Cost", value: "$0 (Client Only)" },
      { label: "Framework", value: "React.js" },
      { label: "Image Export", value: "PNG / JPEG" },
    ],
    stack: ["React.js", "JavaScript", "HTML5 Canvas", "CSS3", "FileReader API"],
    highlights: [
      "100% Client-Side Rendering: Processes images, typography offsets, and export rendering locally in the browser.",
      "Real-Time Text Overlay: Live font sizing, stroke borders, and alignment preview as the user types.",
      "Local File Ingestion: Drag-and-drop or file upload via FileReader API with automatic aspect ratio scaling.",
    ],
    architectureOverview: "Canvas rendering context abstraction integrated within React's lifecycle, rendering reactive overlays on top of loaded Image objects.",
    technicalDetails: {
      features: [
        "HTML5 2D Canvas context rendering pipeline",
        "Client-side blob export and instant download generation",
        "Dynamic aspect ratio correction",
      ]
    },
    challenges: [
      {
        title: "Zero-Latency Canvas Text Rasterization",
        problem: "Redrawing heavy photographic backgrounds on every keystroke caused noticeable visual stutter on mobile devices.",
        solution: "Implemented an offscreen canvas rendering buffer that caches the scaled base image, compositing only the dirty text overlay layer during active input.",
        impact: "Eliminated canvas redraw lag for immediate 60fps interactive text updates."
      }
    ]
  }
];
