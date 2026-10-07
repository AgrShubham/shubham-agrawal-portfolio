import { useState } from 'react';
import { Header } from './components/Header';
import { HeroInteractive } from './components/HeroInteractive';
import { HeroMinimal } from './components/HeroMinimal';
import { FlagshipSection } from './components/FlagshipSection';
import { SecondaryProjects } from './components/SecondaryProjects';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { SkillsSection } from './components/SkillsSection';
import { EducationSection } from './components/EducationSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { InteractiveBackground } from './components/InteractiveBackground';
import { ThemeProvider } from './context/ThemeContext';
import { ViewModeProvider, useViewMode } from './context/ViewModeContext';

export function AppContent() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const { viewMode } = useViewMode();

  return (
    <div
      className={`min-h-screen flex flex-col font-sans transition-colors duration-200 ${
        viewMode === 'interactive'
          ? 'bg-slate-50 dark:bg-[#080b11] text-slate-900 dark:text-slate-100 selection:bg-cyan-500/20 selection:text-cyan-700 dark:selection:text-cyan-300 relative'
          : 'bg-white dark:bg-[#0a0a0a] text-slate-900 dark:text-slate-100 selection:bg-slate-200 dark:selection:bg-slate-800'
      }`}
    >
      {/* Dynamic 60fps coordinate blueprint canvas & spotlight (Active in Interactive Mode) */}
      {viewMode === 'interactive' && <InteractiveBackground />}

      {/* Sticky Top Navigation & Mode Switcher */}
      <Header onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content Sections */}
      <main className={`flex-1 ${viewMode === 'interactive' ? 'relative z-10' : ''}`}>
        {/* Hero Section */}
        {viewMode === 'interactive' ? (
          <HeroInteractive onOpenResume={() => setIsResumeOpen(true)} />
        ) : (
          <HeroMinimal onOpenResume={() => setIsResumeOpen(true)} />
        )}

        {/* Experience Section (Connected-node timeline works seamlessly in both) */}
        <ExperienceSection />

        {/* Projects Section */}
        {viewMode === 'interactive' ? (
          <>
            <FlagshipSection />
            <SecondaryProjects />
          </>
        ) : (
          <ProjectsSection />
        )}

        {/* Skills Section */}
        <SkillsSection />

        {/* Education & Credentials */}
        <EducationSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* ATS PDF Resume Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </div>
  );
}

export function App() {
  return (
    <ThemeProvider>
      <ViewModeProvider>
        <AppContent />
      </ViewModeProvider>
    </ThemeProvider>
  );
}

export default App;
