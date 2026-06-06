import React from 'react';

interface SectionHeadingProps {
  /** small uppercase label shown in the pill above the title */
  eyebrow: string;
  /** big faint word rendered behind the title */
  watermark?: string;
  subtitle?: React.ReactNode;
  /** the heading text (can include highlighted spans) */
  children: React.ReactNode;
  as?: 'h2' | 'h3';
  className?: string;
}

/**
 * Consistent, framed section heading: eyebrow pill + watermark word +
 * soft glow behind the title, with a gradient underline.
 */
const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  watermark,
  subtitle,
  children,
  as = 'h2',
  className = '',
}) => {
  const Tag = as;
  return (
    <div className={`relative text-center ${className}`}>
      {/* soft glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-44 bg-secondary/10 blur-[90px] rounded-full"
        aria-hidden="true"
      />

      {/* watermark word */}
      {watermark && (
        <span
          aria-hidden="true"
          className="font-display pointer-events-none select-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-extrabold uppercase tracking-tighter leading-none whitespace-nowrap text-6xl sm:text-7xl md:text-8xl text-text-primary/[0.04]"
        >
          {watermark}
        </span>
      )}

      <div className="relative">
        <div className="mb-4">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-secondary/30 bg-secondary/10 font-mono text-[0.68rem] uppercase tracking-[0.2em] text-secondary">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
            {eyebrow}
          </span>
        </div>

        <div className="relative inline-block mb-4">
          {/* viewfinder corner brackets */}
          <span aria-hidden="true" className="pointer-events-none absolute -top-3 -left-3 w-4 h-4 border-l-2 border-t-2 border-secondary/60" />
          <span aria-hidden="true" className="pointer-events-none absolute -top-3 -right-3 w-4 h-4 border-r-2 border-t-2 border-secondary/60" />
          <span aria-hidden="true" className="pointer-events-none absolute -bottom-3 -left-3 w-4 h-4 border-l-2 border-b-2 border-accent/60" />
          <span aria-hidden="true" className="pointer-events-none absolute -bottom-3 -right-3 w-4 h-4 border-r-2 border-b-2 border-accent/60" />
          <Tag className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary px-4">
            {children}
          </Tag>
        </div>

        {subtitle && <p className="text-lg text-text-secondary max-w-2xl mx-auto">{subtitle}</p>}

        <div className="w-20 h-1 bg-gradient-to-r from-secondary to-accent mx-auto mt-5 rounded-full" />
      </div>
    </div>
  );
};

export default SectionHeading;
