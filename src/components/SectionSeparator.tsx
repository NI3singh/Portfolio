import React from 'react';

// Minimal on-brand divider for the unified charcoal canvas.
// `fromDark` is kept for backward compatibility with existing callers.
const SectionSeparator: React.FC<{ fromDark?: boolean; className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative w-full py-8 ${className}`} aria-hidden="true">
      <div className="container mx-auto px-6">
        <div className="relative flex items-center justify-center">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
          <span className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 bg-primary">
            <span className="w-1.5 h-1.5 rotate-45 bg-secondary"></span>
            <span className="w-1.5 h-1.5 rotate-45 bg-accent/50"></span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SectionSeparator;
