import React from 'react';
import { WORK_EXPERIENCE } from '../data/experience';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-14 border-t border-slate-200/80 dark:border-slate-800/80 scroll-mt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white mb-8">
          Work Experience
        </h2>

        <div className="space-y-8">
          {WORK_EXPERIENCE.map((job) => (
            <div key={job.company} className="space-y-3">
              
              {/* Header: Role, Company & Dates */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {job.role}
                  </h3>
                  <div className="text-sm font-medium text-slate-600 dark:text-slate-400">
                    {job.company} • {job.location} ({job.type})
                  </div>
                </div>

                <div className="text-xs font-mono text-slate-500 dark:text-slate-400">
                  {job.period}
                </div>
              </div>

              {/* Bullet points */}
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed list-disc list-outside pl-4">
                {job.description.map((bullet, idx) => (
                  <li key={idx}>
                    {bullet}
                  </li>
                ))}
              </ul>

              {/* Technologies */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {job.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-0.5 rounded text-xs font-mono bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200/80 dark:border-slate-800"
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
