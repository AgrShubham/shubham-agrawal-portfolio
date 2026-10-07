import React, { useState } from 'react';
import { FileText, Mail, Copy, Check, MapPin, ArrowUpRight } from 'lucide-react';
import { RESUME_DATA } from '../data/resumeData';
import { GithubIcon, LinkedinIcon } from './Icons';

interface HeroMinimalProps {
  onOpenResume: () => void;
}

export const HeroMinimal: React.FC<HeroMinimalProps> = ({ onOpenResume }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(RESUME_DATA.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="about" className="pt-16 pb-14 md:pt-24 md:pb-20 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Top Profile Header */}
        <div className="flex flex-col-reverse sm:flex-row items-start sm:items-center justify-between gap-6 sm:gap-8 mb-8">
          
          <div className="space-y-2 max-w-xl">
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              {RESUME_DATA.personal.name}
            </h1>
            
            <p className="text-lg sm:text-xl font-medium text-slate-700 dark:text-slate-300">
              Software Development Engineer
            </p>

            <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400 pt-1">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" />
                Indore, India
              </span>
              <span>•</span>
              <span className="text-emerald-600 dark:text-emerald-400 font-sans font-medium">
                Open for full-time SDE roles
              </span>
            </div>
          </div>

          {/* Authentic Real Portrait Photo */}
          <div className="relative flex-shrink-0">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden ring-2 ring-slate-200 dark:ring-slate-800 shadow-md">
              <img
                src="/profile.jpg"
                alt={RESUME_DATA.personal.name}
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

        </div>

        {/* Narrative / Authentic Summary */}
        <div className="space-y-4 text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed font-normal mb-8">
          <p>
            Software developer with hands-on experience building low-latency networked systems, responsive web applications, and mobile apps using React, TypeScript, Python, and modern development tools. 2025 Computer Science graduate from Institute of Engineering and Science, IPS Academy, Indore.
          </p>
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400">
            I enjoy working at the boundary where systems software meets user experience—from designing sub-millisecond UDP peripheral streaming servers using native Windows <code className="font-mono text-slate-700 dark:text-slate-300 text-xs">user32.dll SendInput</code> APIs, to crafting production e-commerce platforms in React 19.
          </p>
        </div>

        {/* Action CTAs & Direct Links */}
        <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-slate-200/80 dark:border-slate-800/80">
          
          <button
            onClick={onOpenResume}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white dark:bg-white dark:hover:bg-slate-100 dark:text-slate-950 font-medium text-sm transition-colors cursor-pointer shadow-xs"
          >
            <FileText className="w-4 h-4" />
            <span>View Resume (PDF)</span>
          </button>

          <a
            href={`mailto:${RESUME_DATA.personal.email}`}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 text-sm font-medium border border-slate-200 dark:border-slate-800 transition-colors"
          >
            <Mail className="w-4 h-4 text-slate-500" />
            <span>{RESUME_DATA.personal.email}</span>
          </a>

          <button
            onClick={handleCopyEmail}
            className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800 transition-colors cursor-pointer"
            title="Copy Email Address"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
          </button>

          <div className="flex items-center gap-2 sm:ml-auto">
            <a
              href={RESUME_DATA.personal.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-mono text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
              <ArrowUpRight className="w-3 h-3 opacity-60" />
            </a>

            <a
              href={RESUME_DATA.personal.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-mono text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <LinkedinIcon className="w-4 h-4" />
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3 h-3 opacity-60" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
