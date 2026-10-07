import React, { useState } from 'react';
import { Menu, X, FileText, Sparkles } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { useViewMode } from '../context/ViewModeContext';
import { RESUME_DATA } from '../data/resumeData';

interface HeaderProps {
  onOpenResume: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenResume }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { viewMode, setViewMode, toggleViewMode } = useViewMode();

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Education', href: '#education' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 dark:border-slate-800/80 bg-white/90 dark:bg-[#0a0a0a]/90 backdrop-blur-md transition-colors duration-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        
        {/* Name / Brand */}
        <a 
          href="#about" 
          className="font-bold text-slate-900 dark:text-white text-base tracking-tight hover:text-slate-600 dark:hover:text-slate-300 transition-colors flex-shrink-0"
        >
          {RESUME_DATA.personal.name}
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-5 text-sm font-medium text-slate-600 dark:text-slate-400">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions: View Switcher + Resume + Theme Toggle */}
        <div className="hidden md:flex items-center gap-2.5 flex-shrink-0">
          
          {/* Interactive / Minimalist Segmented Pill */}
          <div className="inline-flex items-center p-0.5 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 text-xs shadow-2xs">
            <button
              onClick={() => setViewMode('interactive')}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full font-medium transition-all cursor-pointer ${
                viewMode === 'interactive'
                  ? 'bg-white dark:bg-slate-800 text-sky-600 dark:text-cyan-400 shadow-xs border border-slate-200/60 dark:border-slate-700'
                  : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-300'
              }`}
              title="Interactive Mode: Live telemetry, interactive canvas, deep-tech showcase"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Interactive</span>
            </button>

            <button
              onClick={() => setViewMode('minimalist')}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full font-medium transition-all cursor-pointer ${
                viewMode === 'minimalist'
                  ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-xs border border-slate-200/60 dark:border-slate-700'
                  : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-300'
              }`}
              title="Minimalist Mode: Clean typography, fast-reading resume format, quiet canvas"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Minimalist</span>
            </button>
          </div>

          {/* Resume PDF Viewer Button */}
          <button
            onClick={onOpenResume}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 transition-colors cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
            <span>Resume</span>
          </button>

          {/* Theme Toggle (Dark / Light) */}
          <ThemeToggle />
        </div>

        {/* Mobile Controls: View Switcher Badge + Theme Toggle + Menu */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleViewMode}
            className="px-2.5 py-1 rounded-full text-xs font-mono border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 flex items-center gap-1 shadow-2xs"
            title="Toggle Interactive / Minimalist Mode"
          >
            {viewMode === 'interactive' ? (
              <>
                <Sparkles className="w-3.5 h-3.5 text-cyan-500" />
                <span className="font-semibold text-cyan-600 dark:text-cyan-400">Interactive</span>
              </>
            ) : (
              <>
                <FileText className="w-3.5 h-3.5 text-slate-500" />
                <span className="font-semibold text-slate-800 dark:text-slate-200">Minimal</span>
              </>
            )}
          </button>

          <ThemeToggle />

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0a0a0a] px-4 py-4 space-y-3">
          
          {/* Mode Switcher in Drawer */}
          <div className="pb-3 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
            <span className="text-xs font-mono text-slate-500 dark:text-slate-400">View Experience:</span>
            <div className="inline-flex items-center p-0.5 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs">
              <button
                onClick={() => setViewMode('interactive')}
                className={`px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1.5 transition-all ${
                  viewMode === 'interactive'
                    ? 'bg-white dark:bg-slate-800 text-cyan-600 dark:text-cyan-400 shadow-xs'
                    : 'text-slate-500'
                }`}
              >
                <Sparkles className="w-3 h-3" />
                Interactive
              </button>
              <button
                onClick={() => setViewMode('minimalist')}
                className={`px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1.5 transition-all ${
                  viewMode === 'minimalist'
                    ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-xs'
                    : 'text-slate-500'
                }`}
              >
                <FileText className="w-3 h-3" />
                Minimalist
              </button>
            </div>
          </div>

          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white py-1"
            >
              {link.label}
            </a>
          ))}

          <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full text-left py-1 text-sm font-medium text-sky-600 dark:text-sky-400 flex items-center gap-2"
            >
              <FileText className="w-4 h-4" />
              <span>View Resume (PDF)</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
