import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';

export type Theme = 'day' | 'night';

interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

/** Read the theme the no-flash inline script (in index.html) already applied. */
const getInitialTheme = (): Theme => {
  if (typeof document !== 'undefined') {
    const attr = document.documentElement.getAttribute('data-theme');
    if (attr === 'day' || attr === 'night') return attr;
  }
  return 'night';
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  const applyTheme = useCallback((next: Theme) => {
    const root = document.documentElement;
    // Enable the brief cross-fade, flip the attribute, then disable it again.
    root.classList.add('theme-transition');
    root.setAttribute('data-theme', next);
    try {
      localStorage.setItem('theme', next);
    } catch {
      /* storage unavailable (private mode) — non-fatal */
    }
    window.setTimeout(() => root.classList.remove('theme-transition'), 450);
  }, []);

  // Keep the DOM attribute in sync with state on mount.
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next: Theme = prev === 'night' ? 'day' : 'night';
      applyTheme(next);
      return next;
    });
  }, [applyTheme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = (): ThemeContextValue => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within a ThemeProvider');
  return ctx;
};
