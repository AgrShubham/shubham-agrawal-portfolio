import React, { useState } from 'react';
import { ExternalLink, X } from 'lucide-react';
import { EDUCATION, CERTIFICATIONS } from '../data/experience';
import type { CertificationItem } from '../data/experience';

export const EducationSection: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);

  return (
    <section id="education" className="py-14 border-t border-slate-200/80 dark:border-slate-800/80 scroll-mt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Education Header */}
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white mb-8">
          Education & Credentials
        </h2>

        <div className="space-y-10">
          
          {/* Degree Card */}
          <div className="space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  {EDUCATION.institution}
                </h3>
                <div className="text-sm font-medium text-slate-600 dark:text-slate-400">
                  {EDUCATION.degree} • {EDUCATION.location}
                </div>
              </div>
              <div className="text-xs font-mono text-slate-500 dark:text-slate-400">
                {EDUCATION.period}
              </div>
            </div>

            {/* Achievement Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/50 text-xs font-medium text-amber-800 dark:text-amber-300">
              <span>{EDUCATION.honors[0]}</span>
            </div>

            <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
              Coursework: {EDUCATION.coursework.join(' • ')}
            </p>
          </div>

          {/* Certifications Sub-Section */}
          <div className="space-y-4 pt-4 border-t border-slate-200/60 dark:border-slate-800/60">
            <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Verified Certifications
            </h3>

            <div className="grid sm:grid-cols-2 gap-3">
              {CERTIFICATIONS.map((cert) => (
                <div
                  key={cert.id}
                  onClick={() => setSelectedCert(cert)}
                  className="p-3.5 rounded-xl bg-slate-50/70 hover:bg-slate-100 dark:bg-slate-900/60 dark:hover:bg-slate-800/80 border border-slate-200/80 dark:border-slate-800 transition-colors cursor-pointer flex items-center justify-between gap-3 group"
                >
                  <div className="space-y-1 min-w-0">
                    <h4 className="text-sm font-semibold text-slate-900 dark:text-white truncate group-hover:text-sky-600 dark:group-hover:text-cyan-400 transition-colors">
                      {cert.name}
                    </h4>
                    <div className="text-xs font-mono text-slate-500 dark:text-slate-400">
                      {cert.issuer} • {cert.issueDate}
                    </div>
                  </div>

                  <span className="text-xs font-mono text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white flex-shrink-0">
                    View ↗
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

      {/* Lightbox Certificate Modal */}
      {selectedCert && (
        <div
          onClick={() => setSelectedCert(null)}
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl max-w-2xl w-full p-6 shadow-2xl relative animate-fadeIn"
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
                className="p-1 rounded-lg text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
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
