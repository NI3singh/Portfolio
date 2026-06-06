import React, { useState } from 'react';

type Theme = 'night' | 'day';
type DocumentVT = Document & { startViewTransition?: (cb: () => void) => unknown };

// Initial value mirrors what the no-flash script in index.html already applied.
const getInitialTheme = (): Theme =>
  typeof document !== 'undefined' && document.documentElement.dataset.theme === 'day'
    ? 'day'
    : 'night';

const applyTheme = (t: Theme) => {
  const root = document.documentElement;
  root.dataset.theme = t;
  try {
    localStorage.setItem('theme', t);
  } catch {
    /* storage unavailable (private mode) — ignore */
  }
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute('content', t === 'day' ? '#f4f4f5' : '#0b0c0a');
};

/**
 * Animated celestial theme switch.
 * Reflects the active theme — a silver crescent moon (+ twinkling stars) at night,
 * an amber sun with blooming rays in day — and morphs between them on click.
 * Switching animates: a circular reveal rippling out from the orb (View Transitions
 * API where supported), with a global colour-crossfade fallback. Both respect
 * prefers-reduced-motion.
 */
const ThemeToggle: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const isDay = theme === 'day';

  const handleToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    const next: Theme = isDay ? 'night' : 'day';
    const root = document.documentElement;
    const reduce =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const vt = (document as DocumentVT).startViewTransition;

    // Premium path: circular reveal of the new theme, rippling from the click point.
    if (vt && !reduce) {
      const x = e.clientX;
      const y = e.clientY;
      const r = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y));
      root.style.setProperty('--theme-x', `${x}px`);
      root.style.setProperty('--theme-y', `${y}px`);
      root.style.setProperty('--theme-r', `${r}px`);
      vt.call(document, () => {
        applyTheme(next);
        setTheme(next);
      });
      return;
    }

    // Fallback: brief global colour crossfade (instant under reduced motion).
    if (!reduce) {
      root.classList.add('theme-animating');
      window.setTimeout(() => root.classList.remove('theme-animating'), 480);
    }
    applyTheme(next);
    setTheme(next);
  };

  return (
    <button
      type="button"
      onClick={handleToggle}
      aria-label={isDay ? 'Switch to night mode' : 'Switch to day mode'}
      title={isDay ? 'Switch to night mode' : 'Switch to day mode'}
      className={`theme-orb inline-flex items-center justify-center p-2 ${className}`}
    >
      <svg viewBox="0 0 24 24" className="w-7 h-7" aria-hidden="true">
        <defs>
          <mask id="orb-crescent-mask">
            <rect x="0" y="0" width="24" height="24" fill="white" />
            {/* Night: carves the crescent. Day: slides away → full sun disc. */}
            <circle className="orb-mask-circle" cx="17" cy="7" r="5.5" fill="black" />
          </mask>
        </defs>

        {/* Stars — visible at night, beside the moon */}
        <g className="orb-stars" fill="currentColor">
          <circle className="orb-star" cx="5.5" cy="5" r="0.7" />
          <circle className="orb-star" cx="8" cy="2.8" r="0.5" />
          <circle className="orb-star" cx="3.6" cy="9.4" r="0.6" />
        </g>

        {/* Rays — bloom open in day */}
        <g className="orb-rays" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
          <line x1="12" y1="1.6" x2="12" y2="4" />
          <line x1="12" y1="20" x2="12" y2="22.4" />
          <line x1="1.6" y1="12" x2="4" y2="12" />
          <line x1="20" y1="12" x2="22.4" y2="12" />
          <line x1="4.6" y1="4.6" x2="6.3" y2="6.3" />
          <line x1="17.7" y1="17.7" x2="19.4" y2="19.4" />
          <line x1="4.6" y1="19.4" x2="6.3" y2="17.7" />
          <line x1="17.7" y1="6.3" x2="19.4" y2="4.6" />
        </g>

        {/* Body — sun disc / moon crescent (carved by the mask) */}
        <circle cx="12" cy="12" r="5.5" fill="currentColor" mask="url(#orb-crescent-mask)" />
      </svg>
    </button>
  );
};

export default ThemeToggle;
