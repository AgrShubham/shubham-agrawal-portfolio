import React from 'react';
import { RESUME_DATA } from '../data/resumeData';
import { TechBadge } from './TechIcon';

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-14 border-t border-slate-200/80 dark:border-slate-800/80 scroll-mt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white mb-8">
          Technical Skills
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {RESUME_DATA.technicalSkills.map((cat) => (
            <div key={cat.category} className="space-y-2.5">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                {cat.category}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {cat.skills.map((skill) => (
                  <TechBadge key={skill} name={skill} size="sm" />
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
