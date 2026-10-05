import React, { useState } from 'react';
import { Mail, MapPin, Copy, Check, ArrowUp, Terminal } from 'lucide-react';
import { RESUME_DATA } from '../data/resumeData';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Footer: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(RESUME_DATA.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="py-20 relative z-10 border-t border-slate-200 dark:border-slate-800 bg-slate-100/70 dark:bg-[#05070b]/80 backdrop-blur-sm scroll-mt-16 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main CTA Box */}
        <div className="rounded-2xl bg-gradient-to-br from-white via-sky-50/50 to-slate-50 dark:from-[#0c121e] dark:via-[#090d16] dark:to-[#07090e] border border-cyan-500/30 dark:border-cyan-500/20 p-8 sm:p-12 mb-16 text-center relative overflow-hidden shadow-xl shadow-cyan-900/5 dark:shadow-2xl transition-colors">
          <div className="absolute top-0 right-1/4 w-96 h-48 bg-cyan-500/10 blur-[100px] pointer-events-none rounded-full" />

          <div className="max-w-2xl mx-auto space-y-5 relative z-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-950/80 border border-cyan-200 dark:border-cyan-800/40 text-xs font-mono text-cyan-700 dark:text-cyan-400">
              <Terminal className="w-3.5 h-3.5" />
              <span>READY TO COLLABORATE</span>
            </span>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Let's Build Something High-Performance
            </h2>

            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              I am actively looking for <strong className="text-slate-900 dark:text-white">Software Development Engineer (SDE)</strong>, Full-Stack, and Systems roles. Whether you need low-latency backend pipelines, native mobile apps, or polished React 19 interfaces, my inbox is open.
            </p>

            {/* Direct Contact CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-3">
              <a
                href={`mailto:${RESUME_DATA.personal.email}`}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 text-white dark:from-cyan-500 dark:to-indigo-600 dark:text-slate-950 font-bold text-sm shadow-md hover:shadow-cyan-500/25 transition-all flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                <span>Send Email</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="px-5 py-3 rounded-xl bg-white hover:bg-slate-50 dark:bg-slate-900 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-medium text-sm transition-all flex items-center gap-2 shadow-sm"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                    <span>Copy Address</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Footer Meta Details */}
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400 font-mono">
          <div className="flex items-center gap-4">
            <span className="text-slate-800 dark:text-slate-300 font-bold">{RESUME_DATA.personal.name}</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3 text-cyan-600 dark:text-cyan-400" />
              Open to Relocation & Remote
            </span>
            <span>•</span>
            <a href={`tel:${RESUME_DATA.personal.phone}`} className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
              +91 {RESUME_DATA.personal.phone}
            </a>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={RESUME_DATA.personal.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors flex items-center gap-1"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <a
              href={RESUME_DATA.personal.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="text-slate-500 hover:text-cyan-600 dark:text-slate-400 dark:hover:text-cyan-400 transition-colors flex items-center gap-1"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <button
              onClick={scrollToTop}
              className="p-1.5 rounded-lg bg-white hover:bg-slate-50 dark:bg-slate-900 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-800 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors ml-2 shadow-sm"
              title="Back to Top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
