import React, { useState, useEffect } from 'react';
import { 
  Award, 
  ExternalLink, 
  CheckCircle2, 
  Download, 
  Maximize2, 
  X, 
  ChevronRight, 
  ChevronLeft, 
  Calendar, 
  Clock, 
  ShieldCheck,
  Sparkles,
  Cloud
} from 'lucide-react';
import { CERTIFICATIONS } from '../data/experience';
import type { CertificationItem } from '../data/experience';
import { LinkedinIcon } from './Icons';

export const CertificateShowcase: React.FC = () => {
  const [activeCertId, setActiveCertId] = useState<string>(CERTIFICATIONS[0].id);
  const [hoveredCertId, setHoveredCertId] = useState<string | null>(null);
  const [selectedModalCert, setSelectedModalCert] = useState<CertificationItem | null>(null);

  // The displayed certificate resolves to hovered if active, otherwise active
  const currentCertId = hoveredCertId || activeCertId;
  const currentCert = CERTIFICATIONS.find(c => c.id === currentCertId) || CERTIFICATIONS[0];

  // Keyboard navigation for lightbox modal
  useEffect(() => {
    if (!selectedModalCert) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedModalCert(null);
      } else if (e.key === 'ArrowRight') {
        const currentIndex = CERTIFICATIONS.findIndex(c => c.id === selectedModalCert.id);
        const nextIndex = (currentIndex + 1) % CERTIFICATIONS.length;
        setSelectedModalCert(CERTIFICATIONS[nextIndex]);
        setActiveCertId(CERTIFICATIONS[nextIndex].id);
      } else if (e.key === 'ArrowLeft') {
        const currentIndex = CERTIFICATIONS.findIndex(c => c.id === selectedModalCert.id);
        const prevIndex = (currentIndex - 1 + CERTIFICATIONS.length) % CERTIFICATIONS.length;
        setSelectedModalCert(CERTIFICATIONS[prevIndex]);
        setActiveCertId(CERTIFICATIONS[prevIndex].id);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedModalCert]);

  const handleNextModalCert = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedModalCert) return;
    const currentIndex = CERTIFICATIONS.findIndex(c => c.id === selectedModalCert.id);
    const nextIndex = (currentIndex + 1) % CERTIFICATIONS.length;
    setSelectedModalCert(CERTIFICATIONS[nextIndex]);
    setActiveCertId(CERTIFICATIONS[nextIndex].id);
  };

  const handlePrevModalCert = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedModalCert) return;
    const currentIndex = CERTIFICATIONS.findIndex(c => c.id === selectedModalCert.id);
    const prevIndex = (currentIndex - 1 + CERTIFICATIONS.length) % CERTIFICATIONS.length;
    setSelectedModalCert(CERTIFICATIONS[prevIndex]);
    setActiveCertId(CERTIFICATIONS[prevIndex].id);
  };

  return (
    <div className="mt-14 pt-12 border-t border-slate-800/80">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/40 border border-amber-500/30 text-xs font-mono text-amber-300 mb-3">
            <Award className="w-3.5 h-3.5 text-amber-400" />
            <span>VERIFIED CERTIFICATIONS & CREDENTIALS</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Industry Credentials & Proof of Mastery
          </h3>
          <p className="text-sm text-slate-400 mt-1 max-w-xl">
            Hover over any credential or certificate asset to preview in real-time. Click to inspect high-resolution verification proof.
          </p>
        </div>

        {/* Quick Legend / Badges */}
        <div className="flex items-center gap-2 font-mono text-xs text-slate-400">
          <span className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            4 Verified Badges
          </span>
          <span className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            Interactive Hover Sync
          </span>
        </div>
      </div>

      {/* Main Interactive Grid */}
      <div className="grid lg:grid-cols-12 gap-8 items-start">
        
        {/* ═══════════════════════════════════════════════════════════════
            LEFT COLUMN: Credentials List (5 Cols)
        ═══════════════════════════════════════════════════════════════ */}
        <div className="lg:col-span-5 space-y-3">
          <div className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center justify-between px-1">
            <span>Select or Hover Credential</span>
            <span className="text-[11px] text-cyan-400 font-sans">Synced Preview ⇄</span>
          </div>

          <div className="space-y-3" role="list">
            {CERTIFICATIONS.map((cert) => {
              const isSelected = cert.id === currentCert.id;
              const isAws = cert.issuer.includes('AWS');

              return (
                <div
                  key={cert.id}
                  role="listitem"
                  tabIndex={0}
                  onMouseEnter={() => setHoveredCertId(cert.id)}
                  onMouseLeave={() => setHoveredCertId(null)}
                  onClick={() => {
                    setActiveCertId(cert.id);
                    setSelectedModalCert(cert);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      setActiveCertId(cert.id);
                      setSelectedModalCert(cert);
                    }
                  }}
                  className={`group relative p-4 rounded-xl transition-all cursor-pointer border text-left outline-none ${
                    isSelected
                      ? 'bg-gradient-to-r from-slate-900 via-[#0e1524] to-[#0c121e] border-cyan-500/50 shadow-lg shadow-cyan-950/40 ring-1 ring-cyan-500/20'
                      : 'bg-[#0b0f17] border-slate-800/90 hover:border-slate-700 hover:bg-slate-900/60'
                  }`}
                >
                  {/* Active indicator bar */}
                  <div 
                    className={`absolute left-0 top-3 bottom-3 w-1 rounded-r transition-all ${
                      isSelected 
                        ? 'bg-gradient-to-b from-cyan-400 to-indigo-500 opacity-100' 
                        : 'opacity-0 group-hover:opacity-40 bg-slate-600'
                    }`} 
                  />

                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3">
                      {/* Icon Avatar */}
                      <div 
                        className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 border transition-colors ${
                          isAws 
                            ? 'bg-amber-950/40 border-amber-500/30 text-amber-400 group-hover:border-amber-400/60' 
                            : 'bg-sky-950/40 border-sky-500/30 text-sky-400 group-hover:border-sky-400/60'
                        }`}
                      >
                        {isAws ? <Cloud className="w-4 h-4" /> : <LinkedinIcon className="w-4 h-4" />}
                      </div>

                      <div>
                        {/* Title */}
                        <h4 className={`text-sm font-bold transition-colors ${isSelected ? 'text-white' : 'text-slate-200 group-hover:text-white'}`}>
                          {cert.name}
                        </h4>

                        {/* Issuer & Issue Date */}
                        <div className="flex items-center gap-2 mt-1 text-xs">
                          <span className={`font-mono font-medium ${isAws ? 'text-amber-400' : 'text-sky-400'}`}>
                            {cert.issuer}
                          </span>
                          <span className="text-slate-600">•</span>
                          <span className="text-slate-400 font-mono text-[11px] flex items-center gap-1">
                            <Calendar className="w-3 h-3 text-slate-500" />
                            {cert.issueDate}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Status Pill */}
                    <div className="flex flex-col items-end flex-shrink-0">
                      <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold border ${
                        isSelected 
                          ? 'bg-emerald-950/80 border-emerald-500/50 text-emerald-300'
                          : 'bg-slate-900 border-slate-800 text-slate-400'
                      }`}>
                        <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                        <span>Verified</span>
                      </span>

                      {cert.duration && (
                        <span className="text-[10px] text-slate-400 font-mono flex items-center gap-1 mt-1">
                          <Clock className="w-2.5 h-2.5" />
                          {cert.duration}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Skills tags */}
                  <div className="mt-3 pt-2.5 border-t border-slate-800/80 flex flex-wrap gap-1.5">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`px-2 py-0.5 rounded text-[10px] font-mono transition-colors ${
                          isSelected
                            ? 'bg-cyan-950/60 border border-cyan-800/40 text-cyan-300'
                            : 'bg-slate-900 border border-slate-800 text-slate-400'
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Hover prompt hint */}
                  <div className={`mt-2 flex items-center justify-between text-[11px] font-mono transition-opacity ${
                    isSelected ? 'opacity-100 text-cyan-400' : 'opacity-0 group-hover:opacity-100 text-slate-400'
                  }`}>
                    <span className="flex items-center gap-1">
                      <Maximize2 className="w-3 h-3" />
                      Click to inspect full certificate
                    </span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════════════
            RIGHT COLUMN: Live Certificate Asset Preview Showcase (7 Cols)
        ═══════════════════════════════════════════════════════════════ */}
        <div 
          className="lg:col-span-7 bg-[#0c1017] border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-2xl relative overflow-hidden"
          onMouseEnter={() => setHoveredCertId(currentCert.id)}
          onMouseLeave={() => setHoveredCertId(null)}
        >
          {/* Subtle Ambient Glow behind preview */}
          <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-cyan-500/5 blur-[80px] pointer-events-none rounded-full" />
          <div className="absolute bottom-10 left-10 w-60 h-60 bg-amber-500/5 blur-[90px] pointer-events-none rounded-full" />

          {/* Top Bar inside preview pane */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-4 border-b border-slate-800/90 relative z-10">
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-mono font-semibold text-slate-300">
                ACTIVE CERTIFICATE ASSET
              </span>
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-slate-900 text-cyan-400 border border-slate-800">
                {currentCert.issuer}
              </span>
            </div>

            <div className="flex items-center gap-2">
              {currentCert.verifyUrl && (
                <a
                  href={currentCert.verifyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-2.5 py-1 rounded-lg bg-emerald-950/60 hover:bg-emerald-900/60 border border-emerald-500/40 text-emerald-300 font-mono text-xs flex items-center gap-1.5 transition-colors"
                  title="Verify official credential"
                >
                  <ExternalLink className="w-3 h-3" />
                  <span>Credly Verification</span>
                </a>
              )}

              {currentCert.pdfUrl && (
                <a
                  href={currentCert.pdfUrl}
                  download
                  className="px-2.5 py-1 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-mono text-xs flex items-center gap-1.5 transition-colors"
                  title="Download Certificate PDF"
                >
                  <Download className="w-3 h-3 text-cyan-400" />
                  <span>PDF</span>
                </a>
              )}

              <button
                onClick={() => setSelectedModalCert(currentCert)}
                className="p-1.5 rounded-lg bg-cyan-950/60 hover:bg-cyan-900/60 border border-cyan-500/40 text-cyan-400 transition-colors cursor-pointer"
                title="Open fullscreen lightbox"
              >
                <Maximize2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Certificate Image Frame */}
          <div 
            onClick={() => setSelectedModalCert(currentCert)}
            className="group relative rounded-xl overflow-hidden border border-slate-700/80 bg-slate-950 shadow-inner cursor-pointer transition-all hover:border-cyan-400/60 aspect-[16/11] sm:aspect-[16/10] flex items-center justify-center"
          >
            {/* High-Resolution Certificate Asset */}
            <img
              src={currentCert.image}
              alt={`${currentCert.name} Certificate`}
              className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
              loading="lazy"
            />

            {/* Hover overlay hint */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-5">
              <div className="flex items-center justify-between text-white">
                <div>
                  <div className="text-sm font-bold flex items-center gap-2">
                    <span>{currentCert.name}</span>
                    <Maximize2 className="w-3.5 h-3.5 text-cyan-400" />
                  </div>
                  <div className="text-xs text-slate-300 font-mono mt-0.5">
                    Click to view full-resolution certificate with zoom & verify links
                  </div>
                </div>

                <span className="px-3 py-1.5 rounded-lg bg-cyan-500 text-slate-950 font-bold text-xs shadow-lg">
                  Enlarge
                </span>
              </div>
            </div>
          </div>

          {/* Metadata Footer bar */}
          <div className="mt-4 pt-3 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="space-y-1">
              <div className="font-semibold text-slate-200">
                {currentCert.name}
              </div>
              <div className="text-slate-400 font-mono text-[11px] flex items-center gap-2">
                <span>Issued to: <strong className="text-white">SHUBHAM AGRAWAL</strong></span>
                {currentCert.credentialId && (
                  <>
                    <span>•</span>
                    <span>ID: <code className="text-cyan-300 font-mono">{currentCert.credentialId}</code></span>
                  </>
                )}
              </div>
            </div>

            <button
              onClick={() => setSelectedModalCert(currentCert)}
              className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Maximize2 className="w-3.5 h-3.5 text-cyan-400" />
              <span>Full View Lightbox</span>
            </button>
          </div>

          {/* ═══════════════════════════════════════════════════════════════
              THUMBNAIL GALLERY STRIP ("Vice Versa" Interactive Hover Sync)
          ═══════════════════════════════════════════════════════════════ */}
          <div className="mt-6 pt-4 border-t border-slate-800/90">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2.5">
              <span>All Certificate Assets (Hover to switch ⇄)</span>
              <span className="text-[11px] text-slate-400">4 Assets Loaded</span>
            </div>

            <div className="grid grid-cols-4 gap-2 sm:gap-3">
              {CERTIFICATIONS.map((thumbCert) => {
                const isThumbSelected = thumbCert.id === currentCert.id;

                return (
                  <button
                    key={thumbCert.id}
                    onMouseEnter={() => setHoveredCertId(thumbCert.id)}
                    onMouseLeave={() => setHoveredCertId(null)}
                    onClick={() => {
                      setActiveCertId(thumbCert.id);
                      setSelectedModalCert(thumbCert);
                    }}
                    className={`relative rounded-lg overflow-hidden border p-1 text-left transition-all cursor-pointer aspect-[4/3] bg-slate-950 group ${
                      isThumbSelected
                        ? 'border-cyan-400 shadow-md shadow-cyan-950/60 ring-2 ring-cyan-500/30'
                        : 'border-slate-800 hover:border-slate-600 opacity-70 hover:opacity-100'
                    }`}
                    title={`Hover or click to view ${thumbCert.name}`}
                  >
                    <img
                      src={thumbCert.image}
                      alt={thumbCert.name}
                      className="w-full h-full object-cover rounded"
                    />

                    {/* Bottom mini label */}
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-1">
                      <div className="text-[9px] font-mono text-slate-200 truncate">
                        {thumbCert.issuer.replace(' Learning', '')}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

        </div>

      </div>

      {/* ═══════════════════════════════════════════════════════════════
          FULL-SCREEN INTERACTIVE LIGHTBOX MODAL
      ═══════════════════════════════════════════════════════════════ */}
      {selectedModalCert && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setSelectedModalCert(null)}
        >
          <div 
            className="relative w-full max-w-5xl bg-[#090d15] border border-slate-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-slate-900/60">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white tracking-tight">
                    {selectedModalCert.name}
                  </h4>
                  <div className="text-xs text-slate-400 font-mono flex items-center gap-2">
                    <span className="text-cyan-400">{selectedModalCert.issuer}</span>
                    <span>•</span>
                    <span>Issued {selectedModalCert.issueDate}</span>
                    {selectedModalCert.credentialId && (
                      <>
                        <span>•</span>
                        <span>ID: <code className="text-slate-300">{selectedModalCert.credentialId}</code></span>
                      </>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {selectedModalCert.verifyUrl && (
                  <a
                    href={selectedModalCert.verifyUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-500/40 text-emerald-300 font-semibold text-xs flex items-center gap-1.5 transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Verify Credly</span>
                  </a>
                )}

                {selectedModalCert.pdfUrl && (
                  <a
                    href={selectedModalCert.pdfUrl}
                    download
                    className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-600 text-slate-100 font-semibold text-xs flex items-center gap-1.5 transition-colors"
                  >
                    <Download className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Download PDF</span>
                  </a>
                )}

                <button
                  onClick={() => setSelectedModalCert(null)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
                  title="Close (Esc)"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Body: Large Image with Prev/Next Controls */}
            <div className="relative flex-1 bg-black/90 p-4 sm:p-8 flex items-center justify-center overflow-auto min-h-[350px]">
              {/* Prev Button */}
              <button
                onClick={handlePrevModalCert}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white border border-slate-700 shadow-xl transition-all cursor-pointer z-10"
                title="Previous certificate (←)"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Next Button */}
              <button
                onClick={handleNextModalCert}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white border border-slate-700 shadow-xl transition-all cursor-pointer z-10"
                title="Next certificate (→)"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Main Full-Size Image */}
              <img
                src={selectedModalCert.image}
                alt={`${selectedModalCert.name} full view`}
                className="max-h-[68vh] w-auto max-w-full object-contain rounded-lg shadow-2xl border border-slate-800"
              />
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-3 border-t border-slate-800/80 bg-slate-900/90 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400 font-mono">
              <div className="flex items-center gap-2">
                <span>Navigate: <kbd className="px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 text-slate-300">←</kbd> <kbd className="px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 text-slate-300">→</kbd></span>
                <span>•</span>
                <span>Close: <kbd className="px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 text-slate-300">Esc</kbd></span>
              </div>

              <div className="flex items-center gap-1.5 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Digitally Authenticated Certificate • Recipient: <strong>SHUBHAM AGRAWAL</strong></span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
