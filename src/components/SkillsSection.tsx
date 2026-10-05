import React, { useState } from 'react';
import { Layers, Network, Code, Layout, Database, Wrench, CheckCircle } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/experience';

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

  const getCategoryIcon = (title: string) => {
    switch (title) {
      case 'Languages':
        return <Code className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />;
      case 'Frontend & Mobile':
        return <Layout className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />;
      case 'Systems & Networking':
        return <Network className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />;
      case 'Databases & Cloud':
        return <Database className="w-4 h-4 text-sky-600 dark:text-sky-400" />;
      default:
        return <Wrench className="w-4 h-4 text-amber-600 dark:text-amber-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 md:py-24 relative border-t border-slate-200 dark:border-slate-800/80 bg-slate-100/40 dark:bg-[#080b11]/75 backdrop-blur-sm scroll-mt-16 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200/70 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-xs font-mono text-cyan-700 dark:text-cyan-400 mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>CORE SKILLS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-3">
            Technical Skills & Expertise
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
            Proficiencies across low-level networking protocols, systems programming, modern web frameworks, and cloud databases.
          </p>
        </div>

        {/* Skill Clusters Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SKILL_CATEGORIES.map((category, index) => {
            const isSelected = selectedCategory === index;
            return (
              <div
                key={category.title}
                onClick={() => setSelectedCategory(isSelected ? null : index)}
                className={`p-6 rounded-xl border transition-all cursor-pointer shadow-sm ${
                  isSelected 
                    ? 'bg-white dark:bg-slate-900/90 border-cyan-500 dark:border-cyan-500/60 shadow-lg shadow-cyan-500/10' 
                    : 'bg-white/95 dark:bg-[#0c1017] border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-slate-50/80 dark:hover:bg-[#0e1420]'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                      {getCategoryIcon(category.title)}
                    </div>
                    <h3 className="font-bold text-slate-900 dark:text-white text-base tracking-tight">
                      {category.title}
                    </h3>
                  </div>
                  <span className="text-[11px] font-mono text-slate-500">
                    {category.skills.length} skills
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-md bg-slate-100/90 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-xs font-mono text-slate-700 dark:text-slate-300 flex items-center gap-1.5"
                    >
                      <CheckCircle className="w-3 h-3 text-cyan-600 dark:text-cyan-400/80" />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}

          {/* Core Foundations Card */}
          <div className="p-6 rounded-xl border bg-white/95 dark:bg-[#0c1017] border-slate-200 dark:border-slate-800 hover:border-purple-300 dark:hover:border-slate-700 transition-all shadow-sm">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="p-2 rounded-lg bg-purple-50 dark:bg-slate-900 border border-purple-200 dark:border-slate-800">
                <Layers className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white text-base tracking-tight">
                Computer Science Foundations
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                'Data Structures & Algorithms',
                'Computer Networks & Protocols',
                'Operating Systems & Win32',
                'Object-Oriented Programming (OOP)',
                'Database Management (DBMS)',
                'RESTful API Architecture',
              ].map((foundation) => (
                <span
                  key={foundation}
                  className="px-2.5 py-1 rounded-md bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-800/40 text-xs font-mono text-purple-800 dark:text-purple-300 flex items-center gap-1.5"
                >
                  <CheckCircle className="w-3 h-3 text-purple-600 dark:text-purple-400/80" />
                  {foundation}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
