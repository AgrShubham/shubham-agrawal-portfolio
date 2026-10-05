import React, { useState } from 'react';
import { FileText, Mail, Menu, X, ArrowUpRight } from 'lucide-react';
import { RESUME_DATA } from '../data/resumeData';
import { GithubIcon, LinkedinIcon } from './Icons';

interface HeaderProps {
  onOpenResume: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenResume }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800/80 bg-[#080b11]/85 backdrop-blur-md transition-all">
      {/* Recruiter Fast-Bar Alert on top */}
      <div className="bg-gradient-to-r from-cyan-950/60 via-indigo-950/50 to-slate-900/80 px-4 py-1.5 text-xs border-b border-cyan-500/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-slate-300 font-medium">
              Actively seeking <strong className="text-emerald-400 font-semibold">SDE, Full-Stack & Systems</strong> roles
            </span>
            <span className="hidden md:inline-block text-slate-500">• Open to Relocation & Remote</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="mailto:shubhamagrawal.code@gmail.com"
              className="text-slate-300 hover:text-cyan-400 flex items-center gap-1 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-cyan-400" />
              <span className="hidden sm:inline">shubhamagrawal.code@gmail.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand */}
        <a href="#about" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-mono font-bold text-sm tracking-wider shadow-sm group-hover:border-cyan-400/60 transition-all">
            SA
          </div>
          <div>
            <div className="font-bold text-slate-100 text-sm tracking-tight flex items-center gap-1.5">
              {RESUME_DATA.personal.name}
            </div>
            <div className="text-[11px] text-slate-400 font-mono">
              Software Engineer
            </div>
          </div>
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-8 text-sm font-medium text-slate-300">
          <a href="#about" className="hover:text-cyan-400 transition-colors">
            About
          </a>
          <a href="#experience" className="hover:text-cyan-400 transition-colors">
            Experience
          </a>
          <a href="#projects" className="hover:text-cyan-400 transition-colors">
            Projects
          </a>
          <a href="#skills" className="hover:text-cyan-400 transition-colors">
            Skills
          </a>
          <a href="#contact" className="hover:text-cyan-400 transition-colors">
            Contact
          </a>
        </nav>

        {/* Action CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={RESUME_DATA.personal.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="p-2 text-slate-400 hover:text-slate-100 hover:bg-slate-800/60 rounded-lg border border-transparent hover:border-slate-700/60 transition-all"
            title="GitHub Profile"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={RESUME_DATA.personal.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className="p-2 text-slate-400 hover:text-cyan-400 hover:bg-slate-800/60 rounded-lg border border-transparent hover:border-slate-700/60 transition-all"
            title="LinkedIn Profile"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>

          {/* Resume Button (Opens PDF Modal Viewer) */}
          <button
            onClick={onOpenResume}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 font-semibold text-xs shadow-md shadow-cyan-950/50 hover:shadow-cyan-500/20 transition-all cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
            <ArrowUpRight className="w-3 h-3 ml-0.5 opacity-80" />
          </button>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-slate-400 hover:text-slate-100 focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-800/80 bg-[#080b11] px-4 pt-3 pb-6 space-y-3">
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-200 font-medium hover:text-cyan-400"
          >
            About
          </a>
          <a
            href="#experience"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-200 font-medium hover:text-cyan-400"
          >
            Experience
          </a>
          <a
            href="#projects"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-200 font-medium hover:text-cyan-400"
          >
            Projects
          </a>
          <a
            href="#skills"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-200 font-medium hover:text-cyan-400"
          >
            Skills
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-200 font-medium hover:text-cyan-400"
          >
            Contact
          </a>

          <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
            <div className="flex gap-2">
              <a
                href={RESUME_DATA.personal.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2 text-slate-400 hover:text-slate-100 rounded-lg bg-slate-900 border border-slate-800"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={RESUME_DATA.personal.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2 text-slate-400 hover:text-cyan-400 rounded-lg bg-slate-900 border border-slate-800"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="px-3.5 py-2 rounded-lg bg-cyan-500 text-slate-950 font-bold text-xs flex items-center gap-1.5 cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              Resume
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
