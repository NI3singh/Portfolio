import React, { useEffect, useState } from 'react';

/** Thin lime→mint progress bar pinned to the top of the page. */
const ScrollProgress: React.FC = () => {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const max = el.scrollHeight - el.clientHeight;
      const ratio = max > 0 ? el.scrollTop / max : 0;
      setPct(Math.min(1, Math.max(0, ratio)) * 100);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-[2px] z-[60] pointer-events-none">
      <div
        className="h-full bg-gradient-to-r from-secondary to-accent"
        style={{ width: `${pct}%` }}
      />
    </div>
  );
};

export default ScrollProgress;
