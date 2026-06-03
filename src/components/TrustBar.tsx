import React from 'react';

// Real affiliations, fellowships, and recognitions — honest social proof.
const items = [
  'Google',
  'Perplexity',
  'McKinsey & Company',
  'IIT Guwahati',
  'IIT Gandhinagar',
  'ELaunch Solution',
  'AlgoBrain AI',
  'Aspire · Harvard',
];

const TrustBar: React.FC = () => {
  const row = [...items, ...items];

  return (
    <section aria-label="Affiliations and recognition" className="relative py-10 border-y border-line overflow-hidden">
      <p className="mono-label text-center text-faint mb-7 px-6">
        Fellowships · Programs · Recognition
      </p>

      <div className="relative overflow-hidden pause-on-hover">
        <div className="absolute left-0 top-0 w-24 sm:w-40 h-full bg-gradient-to-r from-canvas to-transparent z-10" />
        <div className="absolute right-0 top-0 w-24 sm:w-40 h-full bg-gradient-to-l from-canvas to-transparent z-10" />

        <div className="scrolling-wrapper flex w-max animate-scroll">
          {row.map((name, i) => (
            <div key={i} className="flex items-center gap-9 px-6">
              <span className="font-display text-xl md:text-2xl font-medium text-dim hover:text-ink transition-colors whitespace-nowrap">
                {name}
              </span>
              <span className="w-1.5 h-1.5 rotate-45 bg-signal/40 flex-shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
