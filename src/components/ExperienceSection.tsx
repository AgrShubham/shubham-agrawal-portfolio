import React from 'react';
import { Briefcase, GraduationCap, Award, Calendar, MapPin } from 'lucide-react';
import { WORK_EXPERIENCE, EDUCATION } from '../data/experience';
import { CertificateShowcase } from './CertificateShowcase';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 md:py-24 relative border-t border-slate-800/80 bg-[#06080e]/75 backdrop-blur-sm scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-xs font-mono text-cyan-400 mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>EXPERIENCE & EDUCATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
            Work Experience & Education
          </h2>
          <p className="text-base text-slate-400 max-w-2xl leading-relaxed">
            Professional software development track record backed by a formal Computer Science engineering degree and competitive project exhibition awards.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Work Experience (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-cyan-400" />
              Professional Experience
            </h3>

            {WORK_EXPERIENCE.map((job) => (
              <div
                key={job.company}
                className="p-6 sm:p-7 rounded-xl bg-[#0c1017] border border-slate-800 hover:border-slate-700 transition-all space-y-4"
              >
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h4 className="text-xl font-bold text-white">{job.role}</h4>
                    <div className="text-sm font-medium text-cyan-400 font-mono mt-0.5">{job.company}</div>
                  </div>

                  <div className="text-right">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-cyan-950/60 border border-cyan-800/40 text-cyan-300 font-mono text-xs">
                      <Calendar className="w-3 h-3" />
                      {job.period}
                    </span>
                    <div className="text-xs text-slate-400 flex items-center gap-1 justify-end mt-1 font-mono">
                      <MapPin className="w-3 h-3" />
                      {job.location} ({job.type})
                    </div>
                  </div>
                </div>

                {/* Bullets */}
                <ul className="space-y-2.5 pt-1">
                  {job.description.map((bullet, idx) => (
                    <li key={idx} className="text-sm text-slate-300 flex items-start gap-2.5 leading-relaxed">
                      <span className="text-cyan-400 mt-1 flex-shrink-0">▹</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Skills tags */}
                <div className="pt-2 border-t border-slate-800/80 flex flex-wrap gap-1.5">
                  {job.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-400"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Education & Certifications (5 Cols) */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Education Box */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-indigo-400" />
                Education
              </h3>

              <div className="p-6 rounded-xl bg-[#0c1017] border border-slate-800 space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h4 className="text-base font-bold text-white">{EDUCATION.degree}</h4>
                    <p className="text-xs text-indigo-400 font-mono mt-0.5">{EDUCATION.institution}</p>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-indigo-950/60 border border-indigo-800/40 text-indigo-300 font-mono text-xs whitespace-nowrap">
                    2021 – 2025
                  </span>
                </div>

                <div className="text-xs text-slate-400 font-mono flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  {EDUCATION.location}
                </div>

                {/* Honors */}
                <div className="pt-2 border-t border-slate-800">
                  <div className="p-2.5 rounded-lg bg-emerald-950/30 border border-emerald-500/30 text-emerald-300 text-xs font-semibold flex items-center gap-2">
                    <Award className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>{EDUCATION.honors[0]}</span>
                  </div>
                </div>

                {/* Coursework */}
                <div className="pt-2">
                  <span className="text-[11px] font-mono text-slate-400 block mb-1.5 uppercase tracking-wider">
                    Core CS Coursework:
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {EDUCATION.coursework.map((course) => (
                      <span
                        key={course}
                        className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[10px] font-mono text-slate-300"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* ═══════════════════════════════════════════════════════════════
            INTERACTIVE VERIFIED CERTIFICATIONS & CREDENTIALS SHOWCASE
        ═══════════════════════════════════════════════════════════════ */}
        <CertificateShowcase />

      </div>
    </section>
  );
};
