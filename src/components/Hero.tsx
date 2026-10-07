import React, { useState } from 'react';
import { 
  FileText, 
  Copy, 
  Check, 
  ArrowDown, 
  MapPin, 
  Terminal, 
  Globe,
  Award
} from 'lucide-react';
import { RESUME_DATA } from '../data/resumeData';
import { GithubIcon, LinkedinIcon } from './Icons';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [copied, setCopied] = useState(false);
  const [avatarError, setAvatarError] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(RESUME_DATA.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="about" className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden scroll-mt-20">
      {/* Soft Ambient Warmth (subtle, non-cyberpunk) */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[700px] h-[320px] bg-gradient-to-tr from-sky-500/10 via-indigo-500/5 to-transparent dark:from-cyan-500/10 dark:via-indigo-500/5 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Personal Introduction Card */}
        <div className="rounded-3xl bg-white/90 dark:bg-[#0c1017]/95 border border-slate-200/90 dark:border-slate-800/90 p-6 sm:p-10 lg:p-12 shadow-xl shadow-slate-200/50 dark:shadow-2xl dark:shadow-black/40 backdrop-blur-md transition-colors">
          
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 sm:gap-8 mb-8 pb-8 border-b border-slate-100 dark:border-slate-800/80">
            
            {/* Human Profile Portrait / Avatar */}
            <div className="relative flex-shrink-0 group">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden bg-gradient-to-br from-sky-100 via-indigo-50 to-slate-100 dark:from-cyan-950/60 dark:via-slate-900 dark:to-indigo-950/60 border-2 border-slate-200 dark:border-slate-700/80 shadow-md flex items-center justify-center relative">
                {!avatarError ? (
                  <img
                    src="/profile.jpg"
                    alt={RESUME_DATA.personal.name}
                    onError={() => setAvatarError(true)}
                    className="w-full h-full object-cover object-center"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center text-center p-2 bg-gradient-to-br from-sky-500 to-indigo-600 text-white font-mono">
                    <span className="text-2xl font-extrabold tracking-wider">SA</span>
                    <span className="text-[10px] opacity-80 uppercase tracking-widest mt-0.5">Engineer</span>
                  </div>
                )}
              </div>

              {/* Status Indicator Dot */}
              <div className="absolute -bottom-1 -right-1 flex items-center justify-center p-1 bg-white dark:bg-[#0c1017] rounded-full shadow-xs">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
              </div>
            </div>

            {/* Name, Role & Location */}
            <div className="flex-1 space-y-2">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/40 text-xs font-medium text-emerald-800 dark:text-emerald-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                  Open for full-time SDE roles
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-xs text-slate-600 dark:text-slate-300 font-mono">
                  <MapPin className="w-3 h-3 text-slate-400" />
                  Indore, India
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                Shubham Agrawal
              </h1>

              <p className="text-lg sm:text-xl text-slate-700 dark:text-slate-300 font-medium">
                Full-Stack & Systems Developer • Low-Latency Networks & React 19
              </p>
            </div>

            {/* Quick Social Links */}
            <div className="flex md:flex-col items-center gap-2 flex-shrink-0">
              <a
                href={RESUME_DATA.personal.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors"
                title="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={RESUME_DATA.personal.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors"
                title="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Genuine First-Person Bio */}
          <div className="max-w-4xl space-y-4 mb-8 text-slate-700 dark:text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
            <p>
              Hey, I'm Shubham. I'm a 2025 Computer Science graduate from IPS Academy, Indore. I enjoy building software that feels instantaneous to use—whether that means stripping network latency down to sub-milliseconds using raw UDP datagrams or crafting snappy, accessible web apps in React 19.
            </p>
            <p>
              I like diving into the boundary where user interfaces meet systems programming: from writing background Python daemons that inject native OS events via Win32 APIs, to building bespoke concierge checkout flows for local businesses.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-10">
            <a
              href="#projects"
              className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white dark:bg-white dark:hover:bg-slate-100 dark:text-slate-950 font-semibold text-sm shadow-md hover:shadow-lg transition-all flex items-center gap-2 group cursor-pointer"
            >
              <span>Explore My Work</span>
              <ArrowDown className="w-4 h-4 text-slate-400 group-hover:translate-y-0.5 transition-transform" />
            </a>

            <button
              onClick={onOpenResume}
              className="px-5 py-3 rounded-xl bg-white hover:bg-slate-50 dark:bg-slate-900 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 font-semibold text-sm transition-all flex items-center gap-2 shadow-xs cursor-pointer"
            >
              <FileText className="w-4 h-4 text-sky-600 dark:text-cyan-400" />
              <span>View Resume (PDF)</span>
            </button>

            <button
              onClick={handleCopyEmail}
              className="px-5 py-3 rounded-xl bg-white hover:bg-slate-50 dark:bg-slate-900 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white font-medium text-sm transition-all flex items-center gap-2 shadow-xs active:scale-95 cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span className="text-emerald-700 dark:text-emerald-400 font-semibold">Email Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-slate-400" />
                  <span>Copy Email</span>
                </>
              )}
            </button>
          </div>

          {/* Three Human "How I Work & What I Care About" Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t border-slate-100 dark:border-slate-800/80">
            
            {/* Card 1: Low-Latency Systems */}
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-50/70 dark:bg-[#080c14]/80 border border-slate-200/80 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700 transition-colors">
              <div className="flex items-center gap-2.5 text-sky-600 dark:text-cyan-400 mb-2.5">
                <Terminal className="w-4 h-4" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Systems & Protocols
                </span>
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1.5">
                Low-Latency Networking
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                I like working with raw UDP sockets, Win32 input APIs, and WebSocket event batching to make peripherals and real-time tools feel instantaneous.
              </p>
            </div>

            {/* Card 2: Modern Web */}
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-50/70 dark:bg-[#080c14]/80 border border-slate-200/80 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700 transition-colors">
              <div className="flex items-center gap-2.5 text-indigo-600 dark:text-indigo-400 mb-2.5">
                <Globe className="w-4 h-4" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Frontend Craft
                </span>
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1.5">
                Modern Web & React 19
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Building fast, responsive interfaces with TypeScript, Tailwind CSS, and clean component state. Focused on zero-layout-shift and sub-50ms loads.
              </p>
            </div>

            {/* Card 3: Pragmatic Problem Solving */}
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-50/70 dark:bg-[#080c14]/80 border border-slate-200/80 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700 transition-colors">
              <div className="flex items-center gap-2.5 text-emerald-600 dark:text-emerald-400 mb-2.5">
                <Award className="w-4 h-4" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Recognition & Degree
                </span>
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1.5">
                2nd Prize @ CSI Udaan '24
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                B.Tech in Computer Science (2021–2025). Awarded 2nd position in regional CSI Project Exhibition for my cross-platform wireless peripheral system.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
