import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FlagshipSection } from './components/FlagshipSection';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { SecondaryProjects } from './components/SecondaryProjects';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#080b11] text-slate-100 flex flex-col font-sans selection:bg-cyan-500/20 selection:text-cyan-300">
      {/* Sticky Top Navigation & Recruiter Fast-Bar */}
      <Header onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <ExperienceSection />
        <FlagshipSection />
        <SkillsSection />
        <SecondaryProjects />
      </main>

      {/* Footer & Conversion Channel */}
      <Footer />

      {/* Full-Screen In-Browser PDF Resume Viewer Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </div>
  );
}

export default App;
