import React from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { useTheme } from '@/components/ThemeProvider';

/** Sun/Moon switch that flips the site between Solaris (day) and Acid Lab (night). */
const ThemeToggle: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { theme, toggleTheme } = useTheme();
  const isDay = theme === 'day';

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDay ? 'Switch to night mode' : 'Switch to day mode'}
      title={isDay ? 'Switch to night mode' : 'Switch to day mode'}
      className={`relative inline-flex items-center justify-center w-10 h-10 rounded-xl border border-glass/15 bg-glass/5 text-text-primary hover:border-secondary/40 hover:text-secondary hover:bg-glass/10 transition-all duration-300 ${className}`}
    >
      <SunIcon
        className={`absolute w-5 h-5 transition-all duration-500 ${
          isDay ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-50'
        }`}
      />
      <MoonIcon
        className={`absolute w-5 h-5 transition-all duration-500 ${
          isDay ? 'opacity-0 rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100'
        }`}
      />
    </button>
  );
};

export default ThemeToggle;
