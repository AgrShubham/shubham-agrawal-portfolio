import React, { useState, useRef } from 'react';
import { 
  Download, 
  ExternalLink, 
  Sparkles, 
  ShoppingBag, 
  Code2, 
  Smartphone,
  CheckCircle2,
  Activity,
  MousePointer,
  Radio
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { TechBadge } from './TechIcon';

export const FlagshipSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'architecture' | 'challenges' | 'math'>('architecture');

  // Interactive Gesture & Event Stream Telemetry State for Flagship #3
  const [pointerPos, setPointerPos] = useState({ x: 140, y: 75 });
  const [delta, setDelta] = useState({ dx: 1.84, dy: -0.92 });
  const [velocity, setVelocity] = useState(0.48);
  const [packetCount, setPacketCount] = useState(256);
  const [isHovered, setIsHovered] = useState(false);
  const lastPosRef = useRef({ x: 140, y: 75, time: Date.now() });

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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-mono text-slate-700 dark:text-slate-300 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-sky-600 dark:text-cyan-400" />
            <span>PROJECTS & SYSTEMS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Featured Projects
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
            Real software I've engineered from the ground up—explaining why I built each one, the technical hurdles I faced, and what broke along the way.
          </p>
        </div>

        {/* ═══════════════════════════════════════════════════════════════════════
            FLAGSHIP 1: REMOTE TRACKPAD & GAMEPAD PRO
        ═══════════════════════════════════════════════════════════════════════ */}
        <div className="mb-24 rounded-3xl bg-white/95 dark:bg-[#0c1017] border border-slate-200 dark:border-slate-800 overflow-hidden shadow-xl shadow-slate-200/50 dark:shadow-2xl dark:shadow-black/40 backdrop-blur-sm transition-colors">
          
          {/* Top Banner */}
          <div className="px-6 py-4 bg-slate-50 dark:bg-[#090d16] border-b border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 rounded-lg bg-sky-50 dark:bg-cyan-950/60 border border-sky-200 dark:border-cyan-800/40 text-sky-700 dark:text-cyan-300 font-mono text-xs font-semibold">
                SYSTEMS & MOBILE
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400 hidden sm:inline">• Android App & Python Host Server</span>
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              <a
                href="https://github.com/AgrShubham/Remote-trackpad-app"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 text-xs font-medium text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 transition-colors shadow-xs"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub Source</span>
              </a>
              <a
                href="https://github.com/AgrShubham/Remote-trackpad-app/releases/download/v1.0.0/RemoteMouseServer.exe"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white dark:bg-white dark:hover:bg-slate-100 dark:text-slate-950 text-xs font-semibold transition-all shadow-xs"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Windows Server (.exe)</span>
              </a>
              <a
                href="https://github.com/AgrShubham/Remote-trackpad-app/releases/download/v1.0.0/app-release.apk"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 text-xs font-medium text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 transition-colors shadow-xs"
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span>Android (.apk)</span>
              </a>
            </div>
          </div>

          <div className="p-6 sm:p-8 lg:p-10">
            <div className="grid lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Context & The Story */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-2">
                    Remote Trackpad & Gamepad Pro
                  </h3>
                  <p className="text-sm sm:text-base text-sky-700 dark:text-cyan-400 font-medium">
                    Turn your Android phone into an ultra-low-latency PC trackpad, game controller, and keyboard over local Wi-Fi.
                  </p>
                </div>

                <div className="space-y-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  <p>
                    <strong className="text-slate-900 dark:text-white">Why I built this:</strong> During college exams, my wireless mouse suddenly died. I tried popular mobile trackpad apps from the Play Store, but they were frustratingly sluggish (150ms+ delay), required ad-watching, and frequently dropped connection. I wanted to see if I could build a solution that felt as instantaneous as physical hardware without requiring custom driver installations.
                  </p>
                  <p>
                    <strong className="text-slate-900 dark:text-white">The Breakthrough:</strong> Early prototypes using WebSockets suffered from Wi-Fi jitter. In TCP, when a single packet drops, the OS pauses the entire queue (Head-of-Line blocking), making the mouse freeze and then violently jump. I decoupled motion from discrete clicks: streaming raw 12-byte motion vectors over <strong className="text-slate-900 dark:text-white">UDP Port 5002</strong> directly into Windows <code className="text-sky-700 dark:text-cyan-400 font-mono text-xs">user32.dll SendInput</code>, eliminating lag entirely.
                  </p>
                </div>

                {/* Tech Stack Chips */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {['React Native', 'TypeScript', 'Python', 'Win32 API', 'UDP Sockets', 'WebSockets', 'Android'].map((tech) => (
                    <TechBadge key={tech} name={tech} />
                  ))}
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                    <div className="text-sky-600 dark:text-cyan-400 font-mono font-bold text-lg">&lt; 1 ms</div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400">Motion Latency</div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                    <div className="text-indigo-600 dark:text-indigo-400 font-mono font-bold text-lg">UDP 5002</div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400">Binary Packets</div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                    <div className="text-emerald-600 dark:text-emerald-400 font-mono font-bold text-lg">Zero Drivers</div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400">User-Space Win32</div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                    <div className="text-slate-900 dark:text-white font-mono font-bold text-lg">3 Layouts</div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400">Trackpad / Gamepad</div>
                  </div>
                </div>
              </div>

              {/* Right Column: Implementation Notes */}
              <div className="lg:col-span-5 rounded-2xl bg-slate-950 border border-slate-800 p-5 font-mono text-xs">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                  <span className="text-slate-300 font-semibold flex items-center gap-1.5">
                    <Code2 className="w-4 h-4 text-sky-400" />
                    ENGINEERING NOTES
                  </span>
                  <div className="flex gap-1">
                    <button
                      onClick={() => setActiveTab('architecture')}
                      className={`px-2.5 py-1 rounded text-[11px] transition-colors ${
                        activeTab === 'architecture' ? 'bg-sky-500/20 text-sky-300 border border-sky-500/30' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      Pipeline
                    </button>
                    <button
                      onClick={() => setActiveTab('math')}
                      className={`px-2.5 py-1 rounded text-[11px] transition-colors ${
                        activeTab === 'math' ? 'bg-sky-500/20 text-sky-300 border border-sky-500/30' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      Physics
                    </button>
                    <button
                      onClick={() => setActiveTab('challenges')}
                      className={`px-2.5 py-1 rounded text-[11px] transition-colors ${
                        activeTab === 'challenges' ? 'bg-sky-500/20 text-sky-300 border border-sky-500/30' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      Hard Bugs
                    </button>
                  </div>
                </div>

                {/* Tab: Architecture */}
                {activeTab === 'architecture' && (
                  <div className="space-y-3">
                    <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800/80">
                      <span className="text-sky-400 font-bold block mb-1">1. Discovery Beacon (UDP Broadcast - 5001)</span>
                      <p className="text-slate-300 text-[11px] leading-relaxed">
                        The Windows server broadcasts discovery packets across the local subnet every 2 seconds. The phone automatically discovers and pairs without typing IP addresses.
                      </p>
                    </div>

                    <div className="p-3 rounded-lg bg-slate-900/90 border border-emerald-500/20">
                      <span className="text-emerald-400 font-bold block mb-1">2. Real-Time Motion (UDP Datagrams - 5002)</span>
                      <p className="text-slate-300 text-[11px] leading-relaxed">
                        Sends raw coordinate deltas in 12-byte payloads. No handshakes, no acknowledgements—if a packet drops, the next one arrives in 1ms anyway.
                      </p>
                    </div>

                    <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800/80">
                      <span className="text-indigo-400 font-bold block mb-1">3. Reliable Controls (WebSockets - 5000)</span>
                      <p className="text-slate-300 text-[11px] leading-relaxed">
                        Reserved only for discrete clicks, modifier keys (Ctrl/Alt/Shift), volume controls, and connection heartbeats.
                      </p>
                    </div>
                  </div>
                )}

                {/* Tab: Physics */}
                {activeTab === 'math' && (
                  <div className="space-y-3">
                    <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800">
                      <span className="text-sky-400 font-bold block mb-0.5">Velocity Acceleration Curve</span>
                      <code className="text-white text-[11px] block bg-slate-950 p-2 rounded my-1.5 border border-slate-800">
                        v_smooth = v_raw * (1.0 + min(2.5, v_raw * 0.6))
                      </code>
                      <p className="text-slate-400 text-[11px]">
                        Slow finger movements maintain 0.1px sub-pixel accuracy for UI buttons, while quick flicks smoothly traverse multi-monitor setups.
                      </p>
                    </div>

                    <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800">
                      <span className="text-indigo-400 font-bold block mb-0.5">Kinetic Inertial Decay</span>
                      <code className="text-white text-[11px] block bg-slate-950 p-2 rounded my-1.5 border border-slate-800">
                        v_next = v_current * 0.92 (until |v| &lt; 0.05)
                      </code>
                      <p className="text-slate-400 text-[11px]">
                        Simulates physical momentum and smooth deceleration when two-finger scrolling.
                      </p>
                    </div>
                  </div>
                )}

                {/* Tab: Hard Bugs */}
                {activeTab === 'challenges' && (
                  <div className="space-y-3">
                    <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800">
                      <span className="text-amber-400 font-bold block">Touch Digitizer Micro-Jitter:</span>
                      <p className="text-slate-300 text-[11px] mt-1 leading-relaxed">
                        Capacitive screens report tiny fluctuations even when a thumb is resting still. Fixed by adding an adaptive 0.1px deadband filter so the cursor never trembles.
                      </p>
                    </div>
                    <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800">
                      <span className="text-amber-400 font-bold block">Zero Kernel Driver Requirement:</span>
                      <p className="text-slate-300 text-[11px] mt-1 leading-relaxed">
                        Rather than asking users to install unsigned Windows kernel drivers (which trigger scary Defender warnings), I hooked directly into user-space via <code className="text-cyan-400">user32.dll SendInput</code>.
                      </p>
                    </div>
                  </div>
                )}
              </div>

            </div>
          </div>
        </div>


        {/* ═══════════════════════════════════════════════════════════════════════
            FLAGSHIP 2: SHREE MEWA — E-COMMERCE CONCIERGE PLATFORM
        ═══════════════════════════════════════════════════════════════════════ */}
        <div className="mb-24 rounded-3xl bg-white/95 dark:bg-[#0c1017] border border-slate-200 dark:border-slate-800 overflow-hidden shadow-xl shadow-slate-200/50 dark:shadow-2xl dark:shadow-black/40 backdrop-blur-sm transition-colors">
          
          <div className="px-6 py-4 bg-slate-50 dark:bg-[#090d16] border-b border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/40 text-emerald-800 dark:text-emerald-300 font-mono text-xs font-semibold">
                CLIENT PRODUCTION
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400 hidden sm:inline">• Live Luxury Dry Fruits & Gifting Boutique</span>
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              <a
                href="https://github.com/AgrShubham/ShreeMewa"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 text-xs font-medium text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 transition-colors shadow-xs"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub Source</span>
              </a>
              <a
                href="https://github.com/AgrShubham/ShreeMewa"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white dark:bg-white dark:hover:bg-slate-100 dark:text-slate-950 text-xs font-semibold transition-all shadow-xs"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>View Live Site</span>
              </a>
            </div>
          </div>

          <div className="p-6 sm:p-8 lg:p-10">
            <div className="grid lg:grid-cols-12 gap-8 items-start">
              
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-2">
                    Shree Mewa — Luxury Dry Fruits & Gifting
                  </h3>
                  <p className="text-sm sm:text-base text-indigo-700 dark:text-indigo-300 font-medium">
                    A modern, high-touch e-commerce showroom with a custom WhatsApp concierge checkout flow.
                  </p>
                </div>

                <div className="space-y-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  <p>
                    <strong className="text-slate-900 dark:text-white">The Real-World Problem:</strong> For an artisanal dry fruits merchant in Jharkhand, high-value corporate and wedding gift hampers range from ₹5,000 to ₹25,000+. Customers consistently abandon standard credit card checkouts because they need custom box engravings, personalized greeting notes, and direct reassurance before paying.
                  </p>
                  <p>
                    <strong className="text-slate-900 dark:text-white">The Engineering Solution:</strong> I built a frictionless <strong className="text-slate-900 dark:text-white">WhatsApp Concierge Ordering Engine</strong> in React 19. It serializes items, box selections, and client notes into a pre-formatted WhatsApp message with 1 click. The business owner receives clean order specs and can immediately confirm custom details and accept payments via UPI.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-1">
                  {['React 19', 'TypeScript', 'Vite', 'Tailwind CSS', 'Web Share API', 'JSON-LD Schema', 'Client Cart'].map((tech) => (
                    <TechBadge key={tech} name={tech} />
                  ))}
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                    <div className="text-indigo-600 dark:text-indigo-400 font-mono font-bold text-lg">React 19</div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400">Modern Frontend</div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                    <div className="text-sky-600 dark:text-cyan-400 font-mono font-bold text-lg">TypeScript</div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400">Strict Typing</div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                    <div className="text-emerald-600 dark:text-emerald-400 font-mono font-bold text-lg">WhatsApp</div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400">Concierge Flow</div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                    <div className="text-slate-900 dark:text-white font-mono font-bold text-lg">Zero Cost</div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400">Edge Hosting</div>
                  </div>
                </div>
              </div>

              {/* Right Column: Pragmatic Architecture */}
              <div className="lg:col-span-5 rounded-2xl bg-slate-950 border border-slate-800 p-5 font-mono text-xs space-y-3">
                <span className="text-slate-300 font-semibold flex items-center gap-1.5 pb-2 border-b border-slate-800">
                  <ShoppingBag className="w-4 h-4 text-indigo-400" />
                  PRACTICAL DESIGN DECISIONS
                </span>

                <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800 space-y-1">
                  <div className="flex items-center gap-2 text-indigo-300 font-bold">
                    <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" />
                    Automated Google Sheets Catalog Pipeline
                  </div>
                  <p className="text-slate-400 text-[11px] leading-relaxed">
                    Built a lightweight parser that turns the client's inventory Google Sheet into typed TypeScript objects, enabling them to update prices without touching code.
                  </p>
                </div>

                <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800 space-y-1">
                  <div className="flex items-center gap-2 text-sky-300 font-bold">
                    <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />
                    1-Click Printable Corporate Lookbook
                  </div>
                  <p className="text-slate-400 text-[11px] leading-relaxed">
                    Designed print-optimized CSS rules (<code className="text-sky-300">@media print</code>) allowing corporate HR buyers to generate clean PDF catalogs instantly.
                  </p>
                </div>

                <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800 space-y-1">
                  <div className="flex items-center gap-2 text-emerald-300 font-bold">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    Structured Local SEO Schema
                  </div>
                  <p className="text-slate-400 text-[11px] leading-relaxed">
                    Embedded Schema.org LocalBusiness metadata for Google Maps rankings and local search visibility in Jharkhand.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>


        {/* ═══════════════════════════════════════════════════════════════════════
            FLAGSHIP 3: INTERACTIVE GESTURE & TELEMETRY DEMO
        ═══════════════════════════════════════════════════════════════════════ */}
        <div className="rounded-3xl bg-white/95 dark:bg-[#0c1017] border border-slate-200 dark:border-slate-800 overflow-hidden shadow-xl shadow-slate-200/50 dark:shadow-2xl dark:shadow-black/40 backdrop-blur-sm transition-colors">
          
          <div className="px-6 py-4 bg-slate-50 dark:bg-[#090d16] border-b border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 rounded-lg bg-sky-50 dark:bg-sky-950/60 border border-sky-200 dark:border-sky-800/40 text-sky-700 dark:text-sky-300 font-mono text-xs font-semibold">
                INTERACTIVE DEMO
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400 hidden sm:inline">• Live 60fps Event Loop & Network Packet Serialization</span>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="https://github.com/AgrShubham/remote_mouse"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 text-xs font-medium text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 transition-colors shadow-xs"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>Web Platform Source</span>
              </a>
            </div>
          </div>

          <div className="p-6 sm:p-8 lg:p-10">
            <div className="grid lg:grid-cols-12 gap-8 items-start">
              
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-2">
                    Interactive Gesture & Packet Inspector
                  </h3>
                  <p className="text-sm sm:text-base text-sky-700 dark:text-cyan-400 font-medium">
                    Try the live trackpad below to see how pointer coordinates and velocity deltas are calculated in real time.
                  </p>
                </div>

                <div className="space-y-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  <p>
                    When a user glides their finger on a trackpad, the browser fires dozens of raw pointer events per millisecond. If you stream each coordinate individually over the network, you flood the socket buffer and cause choppy stuttering.
                  </p>
                  <p>
                    To fix this, I batch events inside the browser's <strong className="text-slate-900 dark:text-white">requestAnimationFrame (rAF) loop</strong>. By accumulating micro-deltas over 16.6ms intervals and calculating dynamic velocity damping, movement remains fluid without choking network throughput.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-1">
                  {['JavaScript', 'rAF Event Batching', 'Subpixel Math', 'Socket.IO', 'Python', 'Pynput'].map((tech) => (
                    <TechBadge key={tech} name={tech} />
                  ))}
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                    <div className="text-sky-600 dark:text-cyan-400 font-mono font-bold text-lg">Browser-Based</div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400">Zero App Installs</div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                    <div className="text-indigo-600 dark:text-indigo-400 font-mono font-bold text-lg">60 Hz rAF</div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400">Batched Socket Loop</div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                    <div className="text-slate-900 dark:text-white font-mono font-bold text-lg">Cross-Host</div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400">Win / Mac / Linux</div>
                  </div>
                </div>
              </div>

              {/* Right Column: LIVE GESTURE & NETWORK PACKET TELEMETRY INSPECTOR */}
              <div className="lg:col-span-5 rounded-2xl bg-slate-950 border border-slate-800 p-5 font-mono text-xs space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
                  <span className="text-sky-400 font-bold flex items-center gap-1.5">
                    <Radio className="w-4 h-4 text-sky-400 animate-pulse" />
                    LIVE POINTER & PACKET INSPECTOR
                  </span>
                  <span className="text-slate-400 text-[10px]">Move Cursor Below</span>
                </div>

                {/* Interactive Trackpad Simulation Pad */}
                <div 
                  onMouseMove={handleTrackpadMove}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  className="relative h-32 rounded-xl bg-[#090d16] border border-dashed border-slate-700 hover:border-sky-400 transition-colors flex items-center justify-center cursor-crosshair overflow-hidden group select-none"
                >
                  {/* Subtle Grid */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:16px_16px] opacity-15 pointer-events-none" />

                  {/* Following Indicator */}
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
                    <span className="text-slate-300 text-[11px] block font-sans font-medium">
                      {isHovered ? 'Tracking gesture input...' : 'Move or drag your mouse across this pad'}
                    </span>
                    <span className="text-[10px] text-slate-500">Live delta accumulator in action</span>
                  </div>
                </div>

                {/* Live Telemetry Metrics */}
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="p-2 rounded-lg bg-slate-900/90 border border-slate-800">
                    <span className="text-slate-500 text-[10px] block">Sync Rate</span>
                    <span className="text-sky-300 font-bold text-xs">60 FPS</span>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-900/90 border border-slate-800">
                    <span className="text-slate-500 text-[10px] block">Deltas (dx, dy)</span>
                    <span className="text-emerald-400 font-bold text-xs">
                      {delta.dx > 0 ? `+${delta.dx}` : delta.dx}, {delta.dy > 0 ? `+${delta.dy}` : delta.dy}
                    </span>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-900/90 border border-slate-800">
                    <span className="text-slate-500 text-[10px] block">Velocity</span>
                    <span className="text-cyan-300 font-bold text-xs">{velocity} px/ms</span>
                  </div>
                </div>

                {/* Serialized Socket.IO Packet JSON preview */}
                <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800">
                  <div className="flex items-center justify-between text-slate-400 text-[10px] mb-1.5 pb-1 border-b border-slate-800">
                    <span className="flex items-center gap-1 text-slate-300 font-bold">
                      <Activity className="w-3 h-3 text-cyan-400" />
                      Serialized Payload:
                    </span>
                    <span className="text-emerald-400 font-mono">Frame #{packetCount}</span>
                  </div>
                  <pre className="text-cyan-300 text-[11px] font-mono leading-tight overflow-x-auto">
{`{
  "event": "pointer_delta",
  "dx": ${delta.dx},
  "dy": ${delta.dy},
  "velocity": ${(velocity * 1.5).toFixed(2)},
  "batch": "rAF_synced"
}`}
                  </pre>
                </div>

                <div className="flex items-center justify-between text-[11px] text-slate-400 pt-0.5">
                  <span>Transport: <strong className="text-sky-400 font-mono">Socket.IO</strong></span>
                  <span className="text-emerald-400">Direct OS Synthesis</span>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
