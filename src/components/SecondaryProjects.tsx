import React, { useState } from 'react';
import { FolderGit2, ChevronDown, ChevronUp } from 'lucide-react';
import { PROJECTS } from '../data/projects';
import { GithubIcon } from './Icons';

export const SecondaryProjects: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Filter out the non-flagships
  const secondaryProjects = PROJECTS.filter((p) => !p.featured);

  return (
    <section id="other-work" className="py-12 border-t border-slate-200 dark:border-slate-800/80 bg-slate-50/60 dark:bg-[#080b11]/75 backdrop-blur-sm transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Toggle Bar */}
        <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-[#0c1017] p-5 flex flex-wrap items-center justify-between gap-4 shadow-sm transition-colors">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400">
              <FolderGit2 className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">Other Explorations & Tools</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Additional frontend experiments, Canvas API tools, and recipe management apps ({secondaryProjects.length} projects)
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-700 text-xs font-mono text-cyan-700 dark:text-cyan-400 transition-colors shadow-sm"
          >
            <span>{isOpen ? 'Collapse Explorations' : 'View Explorations'}</span>
            {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>

        {/* Collapsible Content */}
        {isOpen && (
          <div className="grid md:grid-cols-2 gap-5 mt-6 animate-fadeIn">
            {secondaryProjects.map((project) => (
              <div
                key={project.slug}
                className="p-6 rounded-xl bg-white/95 dark:bg-[#0c1017] border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 shadow-sm transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400">
                      {project.category}
                    </span>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                      title="GitHub"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  </div>

                  <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{project.title}</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">{project.summary}</p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100 dark:border-slate-800/80">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-900 border border-slate-200/80 dark:border-transparent text-[10px] font-mono text-slate-600 dark:text-slate-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
