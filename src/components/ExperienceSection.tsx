import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { TechBadge } from './TechIcon';
import { WORK_EXPERIENCE } from '../data/experience';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-16 border-t border-slate-200/80 dark:border-slate-800/80 scroll-mt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex items-center gap-2.5 mb-8">
          <div className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300">
            <Briefcase className="w-4 h-4" />
          </div>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            Work Experience
          </h2>
        </div>

        {/* Connected Node Timeline */}
        <div className="relative pl-6 sm:pl-8 space-y-8">
          
          {/* Vertical Connecting Line */}
          <div className="absolute left-[11px] sm:left-[15px] top-3 bottom-3 w-px bg-slate-200 dark:bg-slate-800" />

          {WORK_EXPERIENCE.map((job) => (
            <div key={job.company} className="relative group">
              
              {/* Timeline Node Bullet */}
              <div className="absolute -left-[23px] sm:-left-[31px] top-1.5 flex items-center justify-center w-6 h-6 rounded-full bg-white dark:bg-[#0a0a0a] border-2 border-slate-400 dark:border-slate-600 shadow-xs group-hover:border-slate-900 dark:group-hover:border-white transition-colors">
                <div className="w-2 h-2 rounded-full bg-slate-900 dark:bg-white" />
              </div>

              {/* Elevated Architectural Experience Card */}
              <div className="rounded-2xl bg-white dark:bg-[#111115] border border-slate-200/90 dark:border-white/[0.08] p-5 sm:p-6 shadow-xs dark:shadow-md hover:border-slate-300 dark:hover:border-white/[0.15] transition-all space-y-4">
                
                {/* Header Row: Role, Company & Timeline */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100 dark:border-white/[0.06]">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white tracking-tight">
                        {job.role}
                      </h3>
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-mono bg-sky-50 dark:bg-sky-950/60 border border-sky-200 dark:border-sky-800/50 text-sky-700 dark:text-sky-300">
                        {job.type}
                      </span>
                    </div>

                    <div className="text-sm font-medium text-slate-600 dark:text-slate-400 flex items-center gap-1.5 mt-0.5">
                      <span className="font-semibold text-slate-800 dark:text-slate-200">{job.company}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1 text-xs">
                        <MapPin className="w-3 h-3 text-slate-400" />
                        {job.location}
                      </span>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-50 dark:bg-slate-900 text-xs font-mono text-slate-600 dark:text-slate-400 border border-slate-200/70 dark:border-slate-800/80 self-start sm:self-auto">
                    <Calendar className="w-3 h-3 text-slate-400" />
                    <span>{job.period}</span>
                  </div>
                </div>

                {/* Accomplishment Bullets */}
                <div className="space-y-2.5 pt-1">
                  {job.description.map((bullet, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>

                {/* Technology Pills */}
                <div className="pt-3 border-t border-slate-100 dark:border-white/[0.06] flex flex-wrap gap-1.5">
                  {job.skills.map((skill) => (
                    <TechBadge key={skill} name={skill} size="sm" />
                  ))}
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};
