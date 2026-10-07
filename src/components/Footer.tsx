import React from 'react';
import { Mail, Phone, ArrowUp } from 'lucide-react';
import { RESUME_DATA } from '../data/resumeData';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Footer: React.FC = () => {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="py-16 border-t border-slate-200/80 dark:border-slate-800/80 scroll-mt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
        
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
          <div className="space-y-1">
            <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
              Get in Touch
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              I am open to full-time Software Engineering roles. Feel free to reach out.
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors cursor-pointer self-start sm:self-auto"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Contact Links Grid */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-700 dark:text-slate-300">
          
          <a
            href={`mailto:${RESUME_DATA.personal.email}`}
            className="inline-flex items-center gap-1.5 hover:text-sky-600 dark:hover:text-cyan-400 transition-colors"
          >
            <Mail className="w-4 h-4 text-slate-400" />
            <span>{RESUME_DATA.personal.email}</span>
          </a>

          <span>•</span>

          <a
            href={`tel:${RESUME_DATA.personal.phone}`}
            className="inline-flex items-center gap-1.5 hover:text-sky-600 dark:hover:text-cyan-400 transition-colors"
          >
            <Phone className="w-4 h-4 text-slate-400" />
            <span>+91 {RESUME_DATA.personal.phone}</span>
          </a>

          <span>•</span>

          <a
            href={RESUME_DATA.personal.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-sky-600 dark:hover:text-cyan-400 transition-colors"
          >
            <GithubIcon className="w-4 h-4 text-slate-400" />
            <span>GitHub</span>
          </a>

          <span>•</span>

          <a
            href={RESUME_DATA.personal.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-sky-600 dark:hover:text-cyan-400 transition-colors"
          >
            <LinkedinIcon className="w-4 h-4 text-slate-400" />
            <span>LinkedIn</span>
          </a>

        </div>

        {/* Copyright / Signoff */}
        <div className="pt-8 border-t border-slate-200/60 dark:border-slate-800/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-slate-400 font-mono">
          <div>
            © {new Date().getFullYear()} {RESUME_DATA.personal.name}.
          </div>
          <div>
            Crafted with React 19, TypeScript & Tailwind CSS.
          </div>
        </div>

      </div>
    </footer>
  );
};
