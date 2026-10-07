import React, { useState, useRef } from 'react';
import { ExternalLink, Download, Smartphone, ArrowUpRight, MousePointer } from 'lucide-react';
import { GithubIcon } from './Icons';

export const ProjectsSection: React.FC = () => {
  // Optional interactive pointer tracker for the trackpad demo
  const [pointerPos, setPointerPos] = useState({ x: 120, y: 55 });
  const [delta, setDelta] = useState({ dx: 0, dy: 0 });
  const [velocity, setVelocity] = useState(0);
  const [isTracking, setIsTracking] = useState(false);
  const lastPosRef = useRef({ x: 120, y: 55, time: Date.now() });

  const handlePointerMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const currentX = Math.round(e.clientX - rect.left);
    const currentY = Math.round(e.clientY - rect.top);
    const now = Date.now();
    const dt = Math.max(1, now - lastPosRef.current.time);

    const rawDx = +(currentX - lastPosRef.current.x).toFixed(1);
    const rawDy = +(currentY - lastPosRef.current.y).toFixed(1);
    const dist = Math.hypot(rawDx, rawDy);
    const v = +(dist / dt).toFixed(2);

    lastPosRef.current = { x: currentX, y: currentY, time: now };
    setPointerPos({ x: currentX, y: currentY });
    setDelta({ dx: rawDx, dy: rawDy });
    setVelocity(v);
  };

  const projects = [
    {
      id: 'remote-trackpad-app',
      name: 'Remote Trackpad & Gamepad (Android App)',
      period: 'Sep 2026',
      tech: ['React Native', 'TypeScript', 'Python', 'UDP', 'Win32 SendInput', 'Android'],
      description:
        'An Android-to-Windows wireless peripheral system that turns an Android smartphone into a low-latency PC trackpad, console gamepad, and keyboard over local Wi-Fi.',
      highlights: [
        'Implemented low-latency UDP input streaming on Port 5002 with Wi-Fi host discovery, eliminating TCP Head-of-Line blocking and achieving <1ms latency.',
        'Hooked directly into user-space via Windows user32.dll SendInput APIs, requiring zero kernel driver installations.',
        'Developed configurable control layouts with sensitivity curves, deadzones, haptic feedback, and orientation support.',
      ],
      links: [
        { label: 'GitHub', href: 'https://github.com/AgrShubham/Remote-trackpad-app', icon: GithubIcon },
        { label: 'Windows Server (.exe)', href: 'https://github.com/AgrShubham/Remote-trackpad-app/releases/download/v1.0.0/RemoteMouseServer.exe', icon: Download },
        { label: 'Android APK', href: 'https://github.com/AgrShubham/Remote-trackpad-app/releases/download/v1.0.0/app-release.apk', icon: Smartphone },
      ],
    },
    {
      id: 'remote-trackpad-web',
      name: 'Remote Trackpad (Web Application)',
      period: 'Nov 2025',
      tech: ['Python', 'Flask', 'Socket.IO', 'JavaScript', 'Pynput', 'rAF Batching'],
      description:
        'A browser-based wireless peripheral system that turns smartphones and tablets into a desktop trackpad, gamepad, and keyboard for Windows, macOS, and Linux without installing an app.',
      highlights: [
        'Batches touch coordinate deltas inside a 60fps requestAnimationFrame (rAF) loop to eliminate socket congestion.',
        'Implemented real-time input communication using Socket.IO and cross-platform OS event synthesis via Pynput.',
        'Tuned touch-driven interactions including velocity acceleration curves and inertial scroll glide physics.',
      ],
      links: [
        { label: 'GitHub', href: 'https://github.com/AgrShubham/remote_mouse', icon: GithubIcon },
      ],
      hasInteractiveDemo: true,
    },
    {
      id: 'shree-mewa',
      name: 'Shree Mewa — Luxury Boutique Platform',
      period: '2025',
      tech: ['React 19', 'TypeScript', 'Tailwind CSS', 'Vite', 'Schema.org JSON-LD'],
      description:
        'A production digital showroom and e-commerce platform built for a regional dry fruits merchant in Jharkhand, featuring a frictionless WhatsApp concierge checkout flow.',
      highlights: [
        'Designed a WhatsApp concierge ordering pipeline that serializes cart items, custom engraving requests, and SKU pricing into formatted WhatsApp messages with 1 tap, reducing high-ticket cart abandonment.',
        'Automated Google Sheets catalog synchronization and engineered 1-click printable PDF corporate lookbooks.',
        'Embedded Schema.org LocalBusiness structured data for local search ranking and discoverability.',
      ],
      links: [
        { label: 'GitHub', href: 'https://github.com/AgrShubham/ShreeMewa', icon: GithubIcon },
        { label: 'Live Showroom', href: 'https://github.com/AgrShubham/ShreeMewa', icon: ExternalLink },
      ],
    },
    {
      id: 'chef-claude',
      name: 'Chef Claude',
      period: 'Dec 2024',
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
      description:
        'A responsive recipe web application with real-time ingredient management and dynamic UI state.',
      highlights: [
        'Implemented React hooks and modular components to manage interactive state and reduce repetitive UI logic.',
        'Optimized frontend bundle performance using Vite and Tailwind CSS for instant load times.',
      ],
      links: [
        { label: 'GitHub', href: 'https://github.com/AgrShubham/Chef-Claude', icon: GithubIcon },
      ],
    },
    {
      id: 'meme-generator',
      name: 'Meme Generator',
      period: 'July 2025',
      tech: ['React', 'JavaScript', 'HTML5 Canvas API'],
      description:
        'A client-side image manipulation and meme generator tool built with React and the HTML5 Canvas API.',
      highlights: [
        'Implemented real-time text overlay rendering and Canvas API image generation, removing any dependency on server-side processing.',
        'Built responsive layouts for seamless mobile and desktop usage.',
      ],
      links: [
        { label: 'GitHub', href: 'https://github.com/AgrShubham/MemeGenerator', icon: GithubIcon },
      ],
    },
  ];

  return (
    <section id="projects" className="py-14 border-t border-slate-200/80 dark:border-slate-800/80 scroll-mt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white mb-8">
          Featured Projects
        </h2>

        <div className="space-y-12">
          {projects.map((project) => (
            <div key={project.id} className="space-y-4">
              
              {/* Project Header */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {project.name}
                </h3>
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                  {project.period}
                </span>
              </div>

              {/* Description */}
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {project.description}
              </p>

              {/* Highlights */}
              <ul className="space-y-1.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed list-disc list-outside pl-4">
                {project.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>

              {/* Interactive Demo for Trackpad (Clean, tactile, minimal) */}
              {project.hasInteractiveDemo && (
                <div className="pt-2">
                  <div
                    onMouseMove={handlePointerMove}
                    onMouseEnter={() => setIsTracking(true)}
                    onMouseLeave={() => setIsTracking(false)}
                    className="relative h-28 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-dashed border-slate-300 dark:border-slate-700 flex items-center justify-center cursor-crosshair overflow-hidden select-none"
                  >
                    <div
                      className="absolute w-3 h-3 rounded-full bg-slate-900 dark:bg-white -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-transform duration-75"
                      style={{ left: `${pointerPos.x}px`, top: `${pointerPos.y}px` }}
                    />
                    <div className="text-center pointer-events-none">
                      <div className="flex items-center justify-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-mono mb-1">
                        <MousePointer className="w-3.5 h-3.5" />
                        <span>{isTracking ? 'Tracking touch coordinates...' : 'Move cursor across this pad'}</span>
                      </div>
                      <div className="text-[11px] font-mono text-slate-700 dark:text-slate-300">
                        dx: {delta.dx > 0 ? `+${delta.dx}` : delta.dx}px • dy: {delta.dy > 0 ? `+${delta.dy}` : delta.dy}px • velocity: {velocity}px/ms
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Tech Tags & Links Row */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded text-xs font-mono bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200/80 dark:border-slate-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  {project.links.map((link) => {
                    const Icon = link.icon;
                    return (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded text-xs font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 transition-colors"
                      >
                        <Icon className="w-3.5 h-3.5" />
                        <span>{link.label}</span>
                        <ArrowUpRight className="w-3 h-3 opacity-60" />
                      </a>
                    );
                  })}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
