import React, { createContext, useContext, useState, useEffect } from 'react';

export type ViewMode = 'interactive' | 'minimalist';

interface ViewModeContextType {
  viewMode: ViewMode;
  setViewMode: (mode: ViewMode) => void;
  toggleViewMode: () => void;
}

const ViewModeContext = createContext<ViewModeContextType | undefined>(undefined);

export const ViewModeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [viewMode, setViewModeState] = useState<ViewMode>(() => {
    if (typeof window !== 'undefined') {
      try {
        const params = new URLSearchParams(window.location.search);
        const urlView = params.get('view') || params.get('mode');
        if (urlView === 'interactive' || urlView === 'minimalist') {
          return urlView;
        }
        const saved = localStorage.getItem('portfolio_view_mode') as ViewMode | null;
        if (saved === 'interactive' || saved === 'minimalist') {
          return saved;
        }
      } catch {
        // Fallback if localStorage or URL parsing fails
      }
    }
    // Default mode: 'interactive' to showcase full capabilities, switchable with 1-click
    return 'interactive';
  });

  const setViewMode = (mode: ViewMode) => {
    setViewModeState(mode);
    try {
      localStorage.setItem('portfolio_view_mode', mode);
      const url = new URL(window.location.href);
      url.searchParams.set('view', mode);
      window.history.replaceState({}, '', url.toString());
    } catch {
      // ignore storage errors
    }
  };

  const toggleViewMode = () => {
    setViewMode(viewMode === 'interactive' ? 'minimalist' : 'interactive');
  };

  // Sync with system or window events if needed
  useEffect(() => {
    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search);
      const urlView = params.get('view') || params.get('mode');
      if (urlView === 'interactive' || urlView === 'minimalist') {
        setViewModeState(urlView);
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  return (
    <ViewModeContext.Provider value={{ viewMode, setViewMode, toggleViewMode }}>
      {children}
    </ViewModeContext.Provider>
  );
};

export const useViewMode = (): ViewModeContextType => {
  const context = useContext(ViewModeContext);
  if (!context) {
    throw new Error('useViewMode must be used within a ViewModeProvider');
  }
  return context;
};
