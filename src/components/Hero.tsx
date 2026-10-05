import React, { useState } from 'react';
import { Terminal, Copy, Check, ArrowDown, Activity, Cpu, Layers, FileText, ShieldCheck, MonitorSmartphone } from 'lucide-react';
import { RESUME_DATA } from '../data/resumeData';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(RESUME_DATA.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="about" className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden scroll-mt-20">
      {/* Background Subtle Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-sky-500/10 via-indigo-500/10 to-transparent dark:from-cyan-500/10 dark:via-indigo-500/10 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-sky-500/5 dark:bg-cyan-500/5 blur-[90px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          
          {/* Top Formal Credential Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-700/80 text-xs font-mono text-slate-700 dark:text-slate-300 mb-8 shadow-xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-emerald-700 dark:text-emerald-400 font-semibold tracking-wide">AVAILABLE FOR SDE ROLES</span>
            <span className="text-slate-300 dark:text-slate-600">•</span>
            <span>B.TECH COMPUTER SCIENCE (2025)</span>
            <span className="hidden sm:inline text-slate-300 dark:text-slate-600">•</span>
            <span className="hidden sm:inline text-slate-500 dark:text-slate-400">INDORE / REMOTE</span>
          </div>

          {/* Primary Authority Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4 leading-[1.1] transition-colors">
            {RESUME_DATA.personal.name}
          </h1>

          {/* Sub-headline / Role Scope */}
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-indigo-600 to-slate-800 dark:from-cyan-400 dark:via-sky-300 dark:to-indigo-300 mb-6 transition-colors">
            Software Development Engineer — Systems & Web Platforms
          </h2>

          {/* Formal Technical Executive Summary */}
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 mb-10 leading-relaxed font-normal max-w-3xl mx-auto transition-colors">
            Software Engineer specializing in low-latency networked systems, native operating system interfaces, and production full-stack web platforms. Proven experience designing sub-millisecond UDP datagram pipelines, building cross-platform real-time event streaming servers, and delivering production client software.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-16">
            <a
              href="#projects"
              className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white dark:bg-slate-100 dark:hover:bg-white dark:text-slate-950 font-bold text-sm shadow-md hover:shadow-sky-500/20 dark:hover:shadow-cyan-500/20 transition-all flex items-center gap-2 group cursor-pointer"
            >
              <span>Explore Technical Projects</span>
              <ArrowDown className="w-4 h-4 text-slate-300 dark:text-slate-700 group-hover:translate-y-0.5 transition-transform" />
            </a>

            {/* View Resume PDF CTA */}
            <button
              onClick={onOpenResume}
              className="px-5 py-3 rounded-xl bg-white hover:bg-slate-50 dark:bg-slate-900/90 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-700 hover:border-sky-500/50 dark:hover:border-cyan-500/50 text-slate-800 dark:text-slate-200 hover:text-sky-700 dark:hover:text-white font-semibold text-sm transition-all flex items-center gap-2 shadow-xs cursor-pointer"
            >
              <FileText className="w-4 h-4 text-sky-600 dark:text-cyan-400" />
              <span>Curriculum Vitae (PDF)</span>
            </button>

            {/* 1-Click Copy Email */}
            <button
              onClick={handleCopyEmail}
              className="px-5 py-3 rounded-xl bg-white hover:bg-slate-50 dark:bg-slate-900/90 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-700 hover:border-sky-500/50 dark:hover:border-cyan-500/50 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white font-medium text-sm transition-all flex items-center gap-2 shadow-xs active:scale-95 cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span className="text-emerald-700 dark:text-emerald-400 font-semibold">Email Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                  <span>Copy Contact Email</span>
                </>
              )}
            </button>
          </div>

          {/* Formal Technical Core Competencies Panel */}
          <div className="rounded-2xl bg-white/95 dark:bg-[#0c1017] border border-slate-200 dark:border-slate-800 p-5 sm:p-6 text-left shadow-md dark:shadow-xl transition-colors">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-200 dark:border-slate-800/80 text-xs font-mono text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-1.5 text-slate-900 dark:text-slate-300 font-semibold uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5 text-sky-600 dark:text-cyan-400" />
                Technical Competency Architecture
              </span>
              <span className="text-[11px] text-slate-500 dark:text-slate-400">Verified Engineering Benchmarks</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
              {/* Pillar 1: Systems & Networking */}
              <div className="p-4 rounded-xl bg-slate-50/80 dark:bg-[#080c14] border border-slate-200/90 dark:border-slate-800/90 hover:border-sky-500/30 dark:hover:border-cyan-500/30 transition-colors">
                <div className="flex items-center gap-2 text-sky-600 dark:text-cyan-400 mb-2">
                  <Activity className="w-4 h-4" />
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">Low-Latency Systems</span>
                </div>
                <div className="text-lg font-bold text-slate-900 dark:text-white font-mono mb-1">&lt; 1 ms Latency</div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Sub-millisecond UDP datagram streaming (Port 5002) eliminating TCP Head-of-Line blocking.
                </p>
              </div>

              {/* Pillar 2: Native OS Integration */}
              <div className="p-4 rounded-xl bg-slate-50/80 dark:bg-[#080c14] border border-slate-200/90 dark:border-slate-800/90 hover:border-indigo-500/30 transition-colors">
                <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 mb-2">
                  <Cpu className="w-4 h-4" />
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">OS Subsystems</span>
                </div>
                <div className="text-lg font-bold text-slate-900 dark:text-white font-mono mb-1">Zero Drivers</div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Direct user-space event synthesis via Windows <code className="text-slate-800 dark:text-slate-300 font-mono text-[11px]">user32.dll SendInput</code>.
                </p>
              </div>

              {/* Pillar 3: Client Production Full-Stack */}
              <div className="p-4 rounded-xl bg-slate-50/80 dark:bg-[#080c14] border border-slate-200/90 dark:border-slate-800/90 hover:border-emerald-500/30 transition-colors">
                <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 mb-2">
                  <Layers className="w-4 h-4" />
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">Client Platforms</span>
                </div>
                <div className="text-lg font-bold text-slate-900 dark:text-white font-mono mb-1">React 19 Core</div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Production boutique platform featuring custom serialized WhatsApp concierge checkout pipeline.
                </p>
              </div>

              {/* Pillar 4: Cross-Platform Runtime */}
              <div className="p-4 rounded-xl bg-slate-50/80 dark:bg-[#080c14] border border-slate-200/90 dark:border-slate-800/90 hover:border-sky-500/30 transition-colors">
                <div className="flex items-center gap-2 text-sky-600 dark:text-sky-400 mb-2">
                  <Terminal className="w-4 h-4" />
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">Cross-Platform OS</span>
                </div>
                <div className="text-lg font-bold text-slate-900 dark:text-white font-mono mb-1">Win / Mac / Linux</div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Background daemons orchestrating real-time event streams across desktop platforms via Socket.IO.
                </p>
              </div>

              {/* Pillar 5: Web & Mobile Responsive UI/UX */}
              <div className="p-4 rounded-xl bg-slate-50/80 dark:bg-[#080c14] border border-slate-200/90 dark:border-slate-800/90 hover:border-amber-500/30 transition-colors sm:col-span-2 lg:col-span-1">
                <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 mb-2">
                  <MonitorSmartphone className="w-4 h-4" />
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">Responsive UI/UX</span>
                </div>
                <div className="text-lg font-bold text-slate-900 dark:text-white font-mono mb-1">Web & Mobile</div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Pixel-perfect responsive interfaces engineered for accessibility, fluid 60fps motion, and optimal UX across all viewports.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
