import React, { useState, useRef } from 'react';
import { 
  Download, 
  ExternalLink, 
  Zap, 
  ShoppingBag, 
  Code2, 
  Smartphone,
  CheckCircle2,
  Activity,
  MousePointer,
  Radio
} from 'lucide-react';
import { GithubIcon } from './Icons';

export const FlagshipSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'architecture' | 'challenges' | 'math'>('architecture');

  // Interactive Gesture & Event Stream Telemetry State for Flagship #3
  const [pointerPos, setPointerPos] = useState({ x: 120, y: 70 });
  const [delta, setDelta] = useState({ dx: 1.84, dy: -0.92 });
  const [velocity, setVelocity] = useState(0.48);
  const [packetCount, setPacketCount] = useState(256);
  const [isHovered, setIsHovered] = useState(false);
  const lastPosRef = useRef({ x: 120, y: 70, time: Date.now() });

  const handleTrackpadMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const currentX = Math.round(e.clientX - rect.left);
    const currentY = Math.round(e.clientY - rect.top);
    const now = Date.now();
    const dt = Math.max(1, now - lastPosRef.current.time);

    const rawDx = +(currentX - lastPosRef.current.x).toFixed(2);
    const rawDy = +(currentY - lastPosRef.current.y).toFixed(2);
    const dist = Math.hypot(rawDx, rawDy);
    const v = +(dist / dt).toFixed(2);

    lastPosRef.current = { x: currentX, y: currentY, time: now };
    setPointerPos({ x: currentX, y: currentY });
    setDelta({ dx: rawDx, dy: rawDy });
    setVelocity(v);
    setPacketCount((c) => c + 1);
  };

  return (
    <section id="projects" className="py-20 md:py-28 relative border-t border-slate-200 dark:border-slate-800/80 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-950/80 border border-cyan-200 dark:border-cyan-800/40 text-xs font-mono text-cyan-700 dark:text-cyan-400 mb-3">
            <Zap className="w-3.5 h-3.5" />
            <span>FEATURED PROJECTS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Featured Projects & Systems
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
            Real engineering systems solving low-latency streaming bottlenecks, native OS security constraints, and client production workflows.
          </p>
        </div>

        {/* ═══════════════════════════════════════════════════════════════════════
            FLAGSHIP 1: REMOTE TRACKPAD & GAMEPAD PRO (Mobile & Native Systems)
        ═══════════════════════════════════════════════════════════════════════ */}
        <div className="mb-24 rounded-2xl bg-white/95 dark:bg-[#0c1017] border border-cyan-500/30 dark:border-cyan-500/20 overflow-hidden shadow-xl shadow-cyan-900/5 dark:shadow-2xl dark:shadow-cyan-950/20 backdrop-blur-sm transition-colors">
          {/* Top Banner */}
          <div className="px-6 py-4 bg-gradient-to-r from-cyan-50 via-slate-50 to-indigo-50/60 dark:from-cyan-950/80 dark:via-slate-900 dark:to-indigo-950/50 border-b border-cyan-500/20 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/30 text-cyan-700 dark:text-cyan-400 font-mono text-xs font-bold tracking-wider">
                FLAGSHIP SHOWSTOPPER
              </span>
              <span className="text-xs font-mono text-slate-500 dark:text-slate-400 hidden sm:inline">• Sole Systems Architect</span>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="https://github.com/AgrShubham/Remote-trackpad-app"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 text-xs font-medium text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700 transition-colors shadow-sm"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub Source</span>
              </a>
              <a
                href="https://github.com/AgrShubham/Remote-trackpad-app/releases/download/v1.0.0/RemoteMouseServer.exe"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white dark:bg-cyan-500 dark:hover:bg-cyan-400 dark:text-slate-950 text-xs font-bold transition-all shadow-sm shadow-cyan-950/20"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download .exe (27MB)</span>
              </a>
              <a
                href="https://github.com/AgrShubham/Remote-trackpad-app/releases/download/v1.0.0/app-release.apk"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 text-xs font-medium text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700 transition-colors shadow-sm"
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span>APK (48MB)</span>
              </a>
            </div>
          </div>

          <div className="p-6 sm:p-8 lg:p-10">
            <div className="grid lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Context & High-level */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <h3 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-2">
                    Remote Trackpad & Gamepad Pro
                  </h3>
                  <p className="text-sm sm:text-base text-cyan-700 dark:text-cyan-300 font-medium">
                    Sub-millisecond UDP peripheral ecosystem transforming Android into a glass trackpad, console gamepad & mechanical keyboard for Windows PCs.
                  </p>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Early prototypes built with standard WebSockets suffered from jitter-induced buffer bloat—when a Wi-Fi packet dropped, TCP held back motion coordinates, causing the desktop cursor to freeze and suddenly snap. I re-architected the input pipeline by decoupling real-time motion from stateful events and streaming raw motion vectors over <strong className="text-slate-900 dark:text-white">UDP Port 5002</strong> directly into Win32 <code className="text-cyan-700 dark:text-cyan-400 font-mono text-xs">user32.dll SendInput</code> APIs.
                </p>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {['React Native 0.76', 'TypeScript', 'Python 3.11', 'Win32 SendInput', 'UDP Datagrams', 'WebSockets', 'Android SDK 34'].map((tech) => (
                    <span key={tech} className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-mono text-slate-700 dark:text-slate-300">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Headline Metrics Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                  <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                    <div className="text-cyan-600 dark:text-cyan-400 font-mono font-bold text-lg">&lt; 1 ms</div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400">Motion Latency</div>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                    <div className="text-indigo-600 dark:text-indigo-400 font-mono font-bold text-lg">Port 5002</div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400">UDP Streaming</div>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                    <div className="text-emerald-600 dark:text-emerald-400 font-mono font-bold text-lg">0 Drivers</div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400">Safe User-Space</div>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                    <div className="text-slate-900 dark:text-white font-mono font-bold text-lg">3 Layouts</div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400">Xbox / PS / Arc</div>
                  </div>
                </div>
              </div>

              {/* Right Column: Interactive Architecture Explorer */}
              <div className="lg:col-span-5 rounded-xl bg-slate-950 border border-slate-800 p-5 font-mono text-xs">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                  <span className="text-slate-400 font-semibold flex items-center gap-1.5">
                    <Code2 className="w-4 h-4 text-cyan-400" />
                    TECHNICAL DOSSIER
                  </span>
                  <div className="flex gap-1">
                    <button
                      onClick={() => setActiveTab('architecture')}
                      className={`px-2 py-1 rounded text-[11px] transition-colors ${
                        activeTab === 'architecture' ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      Architecture
                    </button>
                    <button
                      onClick={() => setActiveTab('math')}
                      className={`px-2 py-1 rounded text-[11px] transition-colors ${
                        activeTab === 'math' ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      Math Models
                    </button>
                    <button
                      onClick={() => setActiveTab('challenges')}
                      className={`px-2 py-1 rounded text-[11px] transition-colors ${
                        activeTab === 'challenges' ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      Hard Bugs
                    </button>
                  </div>
                </div>

                {/* Tab: Architecture */}
                {activeTab === 'architecture' && (
                  <div className="space-y-3">
                    <div className="p-2.5 rounded bg-slate-900/90 border border-slate-800/80">
                      <span className="text-cyan-400 font-bold block mb-1">1. Discovery Beacon (UDP Broadcast - 5001)</span>
                      <p className="text-slate-300 text-[11px]">
                        Windows server emits lightweight discovery beacons every 2s over Wi-Fi. Mobile radar auto-pairs without manual IP input.
                      </p>
                    </div>

                    <div className="p-2.5 rounded bg-slate-900/90 border border-cyan-500/20">
                      <span className="text-emerald-400 font-bold block mb-1">2. Motion Pipeline (UDP Datagrams - 5002)</span>
                      <p className="text-slate-300 text-[11px]">
                        React Native streams raw touch vectors directly via UDP unicast without TCP handshake or ACK roundtrips, achieving &lt;1ms cursor injection.
                      </p>
                    </div>

                    <div className="p-2.5 rounded bg-slate-900/90 border border-slate-800/80">
                      <span className="text-indigo-400 font-bold block mb-1">3. Control Pipeline (TCP WebSocket - 5000)</span>
                      <p className="text-slate-300 text-[11px]">
                        Stateful discrete events: modifier latching (Ctrl/Alt/Shift), volume scrubbers, and keep-alive heartbeats.
                      </p>
                    </div>
                  </div>
                )}

                {/* Tab: Math Models */}
                {activeTab === 'math' && (
                  <div className="space-y-3">
                    <div className="p-2.5 rounded bg-slate-900/90 border border-slate-800">
                      <span className="text-cyan-400 font-bold block mb-0.5">Velocity Ballistics Curve</span>
                      <code className="text-white text-[11px] block bg-slate-950 p-1.5 rounded my-1 border border-slate-800">
                        v_smooth = v_raw * (1.0 + min(2.5, v_raw * 0.6))
                      </code>
                      <p className="text-slate-400 text-[11px]">
                        Prevents overshoot on rapid flicks while granting sub-pixel 0.1px precision on micro adjustments.
                      </p>
                    </div>

                    <div className="p-2.5 rounded bg-slate-900/90 border border-slate-800">
                      <span className="text-indigo-400 font-bold block mb-0.5">Kinetic Momentum Glide Decay</span>
                      <code className="text-white text-[11px] block bg-slate-950 p-1.5 rounded my-1 border border-slate-800">
                        v_t = v_decay * 0.92 (decay until |v| &lt; 0.05)
                      </code>
                      <p className="text-slate-400 text-[11px]">
                        Simulates macOS-grade inertial scroll glide physics across Windows desktops.
                      </p>
                    </div>
                  </div>
                )}

                {/* Tab: Hard Bugs */}
                {activeTab === 'challenges' && (
                  <div className="space-y-2.5">
                    <div className="p-2.5 rounded bg-slate-900/90 border border-slate-800">
                      <span className="text-amber-400 font-bold block">Capacitive Digitizer Drift:</span>
                      <p className="text-slate-300 text-[11px] mt-0.5">
                        Touchscreens report 0.05px jitter even when thumbs are still. Solved with adaptive deadband filters (0.1px threshold) + velocity-bypassing EMA filters.
                      </p>
                    </div>
                    <div className="p-2.5 rounded bg-slate-900/90 border border-slate-800">
                      <span className="text-amber-400 font-bold block">Kernel Driver Flagging:</span>
                      <p className="text-slate-300 text-[11px] mt-0.5">
                        Avoided unsigned virtual hardware drivers by calling user-space Win32 SendInput APIs via Python, running zero-installation with 0 anti-cheat flags.
                      </p>
                    </div>
                  </div>
                )}
              </div>

            </div>
          </div>
        </div>


        {/* ═══════════════════════════════════════════════════════════════════════
            FLAGSHIP 2: SHREE MEWA — LUXURY BOUTIQUE PLATFORM (Client Production)
        ═══════════════════════════════════════════════════════════════════════ */}
        <div className="mb-24 rounded-2xl bg-white/95 dark:bg-[#0c1017] border border-indigo-500/30 dark:border-indigo-500/20 overflow-hidden shadow-xl shadow-indigo-900/5 dark:shadow-2xl dark:shadow-indigo-950/20 backdrop-blur-sm transition-colors">
          <div className="px-6 py-4 bg-gradient-to-r from-indigo-50 via-slate-50 to-cyan-50/60 dark:from-indigo-950/80 dark:via-slate-900 dark:to-cyan-950/50 border-b border-indigo-500/20 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-400 font-mono text-xs font-bold tracking-wider">
                CLIENT PRODUCTION
              </span>
              <span className="text-xs font-mono text-slate-500 dark:text-slate-400 hidden sm:inline">• Live Luxury Dry Fruits & Gifting Commerce</span>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="https://github.com/AgrShubham/ShreeMewa"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 text-xs font-medium text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700 transition-colors shadow-sm"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub Source</span>
              </a>
              <a
                href="https://github.com/AgrShubham/ShreeMewa"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-lg bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white dark:from-indigo-500 dark:to-cyan-500 dark:hover:from-indigo-400 dark:hover:to-cyan-400 dark:text-slate-950 text-xs font-bold transition-all shadow-sm"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>View Live Showroom</span>
              </a>
            </div>
          </div>

          <div className="p-6 sm:p-8 lg:p-10">
            <div className="grid lg:grid-cols-12 gap-8 items-start">
              
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <h3 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-2">
                    Shree Mewa — Luxury Boutique Platform
                  </h3>
                  <p className="text-sm sm:text-base text-indigo-700 dark:text-indigo-300 font-medium">
                    High-touch digital showroom and WhatsApp concierge gifting commerce platform built with React 19, TypeScript 5.8, and Tailwind CSS v4.
                  </p>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  In ceremonial Indian and corporate gifting, customers ordering ₹25,000+ custom hampers consistently abandon generic credit-card shopping carts because bespoke laser engraving and customized confectionery require personal consultation. I replaced the cart with a <strong className="text-slate-900 dark:text-white">WhatsApp Concierge Ordering Engine</strong> that serializes multi-attribute client selections directly into formatted WhatsApp deep-links.
                </p>

                <div className="flex flex-wrap gap-2 pt-1">
                  {['React 19', 'TypeScript 5.8', 'Vite 6', 'Tailwind CSS v4', 'Web Share API', 'JSON-LD Schema', 'Lucide React'].map((tech) => (
                    <span key={tech} className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-mono text-slate-700 dark:text-slate-300">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                  <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                    <div className="text-indigo-600 dark:text-indigo-400 font-mono font-bold text-lg">React 19</div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400">Core Frontend</div>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                    <div className="text-cyan-600 dark:text-cyan-400 font-mono font-bold text-lg">TypeScript 5.8</div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400">Strict Typing</div>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                    <div className="text-emerald-600 dark:text-emerald-400 font-mono font-bold text-lg">0 Cart Drop</div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400">Concierge Flow</div>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                    <div className="text-slate-900 dark:text-white font-mono font-bold text-lg">Local SEO</div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400">Schema.org JSON-LD</div>
                  </div>
                </div>
              </div>

              {/* Right Column: Production Highlights */}
              <div className="lg:col-span-5 rounded-xl bg-slate-950 border border-slate-800 p-5 font-mono text-xs space-y-3">
                <span className="text-slate-400 font-semibold flex items-center gap-1.5 pb-2 border-b border-slate-800">
                  <ShoppingBag className="w-4 h-4 text-indigo-400" />
                  CLIENT PRODUCTION ARCHITECTURE
                </span>

                <div className="p-3 rounded bg-slate-900/90 border border-slate-800 space-y-1">
                  <div className="flex items-center gap-2 text-indigo-300 font-bold">
                    <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" />
                    Automated Client Intake Pipeline
                  </div>
                  <p className="text-slate-400 text-[11px] leading-relaxed">
                    Created <code className="text-cyan-400">ShreeMewa_DataCollectionForm</code> that parses client Google Sheet inventories into strongly typed TypeScript schemas automatically.
                  </p>
                </div>

                <div className="p-3 rounded bg-slate-900/90 border border-slate-800 space-y-1">
                  <div className="flex items-center gap-2 text-cyan-300 font-bold">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                    Instant Print Digital Lookbook
                  </div>
                  <p className="text-slate-400 text-[11px] leading-relaxed">
                    Engineered print-optimized stylesheets (<code className="text-cyan-400">window.print()</code>) allowing corporate procurement officers to generate clean PDFs with 1 click.
                  </p>
                </div>

                <div className="p-3 rounded bg-slate-900/90 border border-slate-800 space-y-1">
                  <div className="flex items-center gap-2 text-emerald-300 font-bold">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    Structured Local Business SEO
                  </div>
                  <p className="text-slate-400 text-[11px] leading-relaxed">
                    Full <code className="text-emerald-400">schema.org/LocalBusiness</code> JSON-LD metadata for Google knowledge panel and geo-coordinates in Jharkhand.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>


        {/* ═══════════════════════════════════════════════════════════════════════
            FLAGSHIP 3: REMOTE TRACKPAD WEB (Browser Systems & Real-Time Event Loop)
        ═══════════════════════════════════════════════════════════════════════ */}
        <div className="rounded-2xl bg-white/95 dark:bg-[#0c1017] border border-sky-500/30 dark:border-sky-500/20 overflow-hidden shadow-xl shadow-sky-900/5 dark:shadow-2xl dark:shadow-sky-950/20 backdrop-blur-sm transition-colors">
          <div className="px-6 py-4 bg-gradient-to-r from-sky-50 via-slate-50 to-indigo-50/60 dark:from-sky-950/80 dark:via-slate-900 dark:to-indigo-950/50 border-b border-sky-500/20 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 rounded-md bg-sky-500/10 border border-sky-500/30 text-sky-700 dark:text-sky-400 font-mono text-xs font-bold tracking-wider">
                SYSTEMS & WEB PLATFORMS
              </span>
              <span className="text-xs font-mono text-slate-500 dark:text-slate-400 hidden sm:inline">• Real-Time Browser-to-Host Event Stream</span>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="https://github.com/AgrShubham/remote_mouse"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 text-xs font-medium text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700 transition-colors shadow-sm"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub Source</span>
              </a>
            </div>
          </div>

          <div className="p-6 sm:p-8 lg:p-10">
            <div className="grid lg:grid-cols-12 gap-8 items-start">
              
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <h3 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-2">
                    Remote Trackpad Pro (Web Platform)
                  </h3>
                  <p className="text-sm sm:text-base text-sky-700 dark:text-sky-300 font-medium">
                    Zero-installation browser-based wireless peripheral server transforming any mobile browser into a high-precision trackpad & console gamepad for Windows, macOS, and Linux.
                  </p>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Engineered an asynchronous web-peripheral system running inside mobile Safari, Chrome, and Edge. Solved high-frequency touch event congestion by batching coordinate deltas inside <strong className="text-slate-900 dark:text-white">requestAnimationFrame (rAF) loops</strong>, accumulating subpixel remainders to eliminate jitter on high-DPI displays, and streaming serialized events across local WebSockets to a multi-threaded Python daemon leveraging <code className="text-sky-700 dark:text-sky-300 font-mono text-xs">pynput</code> for cross-platform OS control.
                </p>

                <div className="flex flex-wrap gap-2 pt-1">
                  {['Python 3.9+', 'Flask', 'Socket.IO', 'JavaScript ES6+', 'Pynput', 'HTML5 Canvas', 'rAF Batching'].map((tech) => (
                    <span key={tech} className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-mono text-slate-700 dark:text-slate-300">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                  <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                    <div className="text-sky-600 dark:text-sky-400 font-mono font-bold text-lg">0 Client Installs</div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400">Runs in Safari/Chrome</div>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                    <div className="text-indigo-600 dark:text-indigo-400 font-mono font-bold text-lg">60 Hz rAF</div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400">Batched Socket.IO</div>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                    <div className="text-slate-900 dark:text-white font-mono font-bold text-lg">Win/Mac/Linux</div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400">Cross-Platform Host</div>
                  </div>
                </div>
              </div>

              {/* Right Column: LIVE GESTURE & NETWORK PACKET TELEMETRY INSPECTOR */}
              <div className="lg:col-span-5 rounded-xl bg-slate-950 border border-sky-500/30 p-5 font-mono text-xs space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
                  <span className="text-sky-400 font-bold flex items-center gap-1.5">
                    <Radio className="w-4 h-4 text-sky-400 animate-pulse" />
                    LIVE GESTURE & NETWORK TELEMETRY
                  </span>
                  <span className="text-slate-500 text-[10px]">rAF Synced Loop</span>
                </div>

                {/* Interactive Trackpad Simulation Pad */}
                <div 
                  onMouseMove={handleTrackpadMove}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  className="relative h-32 rounded-xl bg-[#090d16] border border-dashed border-sky-500/40 hover:border-sky-400 transition-colors flex items-center justify-center cursor-crosshair overflow-hidden group select-none"
                >
                  {/* Subtle Grid Lines */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:16px_16px] opacity-20 pointer-events-none" />

                  {/* Following Crosshair Indicator */}
                  <div 
                    className="absolute w-4 h-4 rounded-full border-2 border-sky-400 bg-sky-400/20 -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-transform duration-75"
                    style={{ left: `${pointerPos.x}px`, top: `${pointerPos.y}px` }}
                  >
                    <span className="absolute -top-4 left-4 text-[9px] text-sky-300 font-bold whitespace-nowrap">
                      {pointerPos.x}, {pointerPos.y}
                    </span>
                  </div>

                  <div className="text-center pointer-events-none z-10">
                    <MousePointer className="w-5 h-5 text-sky-400 mx-auto mb-1 group-hover:scale-110 transition-transform opacity-70" />
                    <span className="text-slate-400 text-[11px] block">
                      {isHovered ? 'Tracking Gesture Input...' : 'Hover or Drag Pointer Across This Pad'}
                    </span>
                    <span className="text-[10px] text-slate-500">Live delta accumulator in action</span>
                  </div>
                </div>

                {/* Live Telemetry Metrics */}
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="p-2 rounded bg-slate-900/90 border border-slate-800">
                    <span className="text-slate-500 text-[10px] block">rAF Sync Rate</span>
                    <span className="text-sky-300 font-bold text-xs">60 FPS</span>
                  </div>
                  <div className="p-2 rounded bg-slate-900/90 border border-slate-800">
                    <span className="text-slate-500 text-[10px] block">Subpixel (dx, dy)</span>
                    <span className="text-emerald-400 font-bold text-xs">
                      {delta.dx > 0 ? `+${delta.dx}` : delta.dx}, {delta.dy > 0 ? `+${delta.dy}` : delta.dy}
                    </span>
                  </div>
                  <div className="p-2 rounded bg-slate-900/90 border border-slate-800">
                    <span className="text-slate-500 text-[10px] block">Velocity</span>
                    <span className="text-cyan-300 font-bold text-xs">{velocity} px/ms</span>
                  </div>
                </div>

                {/* Serialized Socket.IO Packet JSON preview */}
                <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800">
                  <div className="flex items-center justify-between text-slate-400 text-[10px] mb-1.5 pb-1 border-b border-slate-800">
                    <span className="flex items-center gap-1 text-slate-300 font-bold">
                      <Activity className="w-3 h-3 text-cyan-400" />
                      Serialized Socket.IO Payload:
                    </span>
                    <span className="text-emerald-400 font-mono">Frame #{packetCount}</span>
                  </div>
                  <pre className="text-cyan-300 text-[11px] font-mono leading-tight overflow-x-auto">
{`{
  "event": "pointer_delta",
  "dx": ${delta.dx},
  "dy": ${delta.dy},
  "v_accel": ${(velocity * 1.5).toFixed(2)},
  "batch": "rAF_synced"
}`}
                  </pre>
                </div>

                <div className="flex items-center justify-between text-[11px] text-slate-400 pt-0.5">
                  <span>Transport: <strong className="text-sky-400 font-mono">Socket.IO Binary</strong></span>
                  <span className="text-emerald-400">Zero Kernel Drivers</span>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
