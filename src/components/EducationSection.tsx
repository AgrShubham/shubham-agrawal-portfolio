import React, { useState } from 'react';
import { 
  GraduationCap, 
  Calendar, 
  MapPin, 
  Trophy, 
  ExternalLink, 
  X, 
  BookOpen,
  ShieldCheck
} from 'lucide-react';
import { EDUCATION, CERTIFICATIONS } from '../data/experience';
import type { CertificationItem } from '../data/experience';

export const EducationSection: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);

  return (
    <section id="education" className="py-16 border-t border-slate-200/80 dark:border-slate-800/80 scroll-mt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex items-center gap-2.5 mb-8">
          <div className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300">
            <GraduationCap className="w-4 h-4" />
          </div>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            Education & Credentials
          </h2>
        </div>

        {/* Connected Node Timeline for Education */}
        <div className="relative pl-6 sm:pl-8 space-y-10 mb-12">
          
          {/* Vertical Connecting Line */}
          <div className="absolute left-[11px] sm:left-[15px] top-3 bottom-3 w-px bg-slate-200 dark:bg-slate-800" />

          <div className="relative group">
            
            {/* Timeline Node Bullet */}
            <div className="absolute -left-[23px] sm:-left-[31px] top-1.5 flex items-center justify-center w-6 h-6 rounded-full bg-white dark:bg-[#0a0a0a] border-2 border-slate-400 dark:border-slate-600 shadow-xs group-hover:border-slate-900 dark:group-hover:border-white transition-colors">
              <div className="w-2 h-2 rounded-full bg-slate-900 dark:bg-white" />
            </div>

            {/* Elevated Degree Card */}
            <div className="rounded-2xl bg-white dark:bg-[#111115] border border-slate-200/90 dark:border-white/[0.08] p-5 sm:p-6 shadow-xs dark:shadow-md hover:border-slate-300 dark:hover:border-white/[0.15] transition-all space-y-4">
              
              {/* Header: Degree & Timeline */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100 dark:border-white/[0.06]">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white tracking-tight">
                    {EDUCATION.degree}
                  </h3>
                  <div className="text-sm font-medium text-slate-600 dark:text-slate-400 flex items-center gap-1.5 mt-0.5">
                    <span className="font-semibold text-slate-800 dark:text-slate-200">{EDUCATION.institution}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1 text-xs">
                      <MapPin className="w-3 h-3 text-slate-400" />
                      {EDUCATION.location}
                    </span>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-50 dark:bg-slate-900 text-xs font-mono text-slate-600 dark:text-slate-400 border border-slate-200/70 dark:border-slate-800/80 self-start sm:self-auto">
                  <Calendar className="w-3 h-3 text-slate-400" />
                  <span>{EDUCATION.period}</span>
                </div>
              </div>

              {/* Elevated CSI Udaan 2024 Award Banner */}
              <div className="rounded-xl bg-amber-500/[0.07] border border-amber-500/25 p-3.5 sm:p-4 flex items-start gap-3.5 transition-colors">
                <div className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 flex-shrink-0">
                  <Trophy className="w-4 h-4" />
                </div>
                <div className="space-y-0.5">
                  <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                    <span>2nd Position — Udaan 2024 CSI Project Exhibition</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    Regional CSI engineering exhibition award recognizing the low-latency wireless peripheral ecosystem (Remote Trackpad & Gamepad).
                  </p>
                </div>
              </div>

              {/* Coursework Tags */}
              <div className="space-y-2 pt-1">
                <div className="flex items-center gap-1.5 text-xs font-mono text-slate-500 dark:text-slate-400">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Relevant Engineering Coursework:</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {EDUCATION.coursework.map((course) => (
                    <span
                      key={course}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-100/80 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-800/80"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Verified Certifications Section */}
        <div className="space-y-4 pt-6 border-t border-slate-200/80 dark:border-slate-800/80">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              Verified Industry Certifications
            </h3>
            <span className="text-[11px] font-mono text-slate-400">Click to preview</span>
          </div>

          <div className="grid sm:grid-cols-2 gap-3">
            {CERTIFICATIONS.map((cert) => (
              <div
                key={cert.id}
                onClick={() => setSelectedCert(cert)}
                className="p-4 rounded-xl bg-white dark:bg-[#111115] border border-slate-200/90 dark:border-white/[0.08] hover:border-slate-300 dark:hover:border-white/[0.18] transition-all cursor-pointer flex items-center justify-between gap-3 group shadow-xs"
              >
                <div className="space-y-1 min-w-0">
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-white truncate group-hover:text-sky-600 dark:group-hover:text-cyan-400 transition-colors">
                    {cert.name}
                  </h4>
                  <div className="text-xs font-mono text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                    <span>{cert.issuer}</span>
                    <span>•</span>
                    <span>{cert.issueDate}</span>
                  </div>
                </div>

                <span className="text-xs font-mono text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white flex-shrink-0 transition-colors">
                  View ↗
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Lightbox Certificate Modal */}
      {selectedCert && (
        <div
          onClick={() => setSelectedCert(null)}
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white dark:bg-[#121216] border border-slate-200 dark:border-slate-800 rounded-2xl max-w-2xl w-full p-6 shadow-2xl relative animate-fadeIn"
          >
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  {selectedCert.name}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                  {selectedCert.issuer} • Issued {selectedCert.issueDate}
                </p>
              </div>

              <button
                onClick={() => setSelectedCert(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Certificate Image Preview */}
            <div className="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 mb-4">
              <img
                src={selectedCert.image}
                alt={selectedCert.name}
                className="w-full h-auto max-h-[450px] object-contain mx-auto"
              />
            </div>

            {/* Credential Links */}
            <div className="flex items-center justify-end gap-3 text-xs font-mono">
              {selectedCert.verifyUrl && (
                <a
                  href={selectedCert.verifyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-sky-600 dark:text-cyan-400 hover:underline"
                >
                  <span>Verify on Credly</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
