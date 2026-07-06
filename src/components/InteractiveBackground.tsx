import React, { useEffect, useMemo, useRef } from 'react';

/**
 * Global animated backdrop for the Acid Lab theme.
 * - a lime/mint glow that eases toward the cursor (GPU transform, rAF + lerp)
 * - slow-drifting aurora blobs
 * - a faint graph-paper grid (masked to fade at the edges)
 * - a handful of floating particles
 * Sits behind all content (z-0); content is lifted to z-10 in App.
 */
const InteractiveBackground: React.FC = () => {
  const glowRef = useRef<HTMLDivElement>(null);

  const particles = useMemo(
    () =>
      Array.from({ length: 9 }, (_, i) => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: `${Math.random() * 5}s`,
        duration: `${6 + Math.random() * 6}s`,
        mint: i % 2 === 0,
      })),
    []
  );

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;

    let tx = window.innerWidth / 2;
    let ty = window.innerHeight / 2;
    let cx = tx;
    let cy = ty;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
    };

    const tick = () => {
      cx += (tx - cx) * 0.09;
      cy += (ty - cy) * 0.09;
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${cx - 320}px, ${cy - 320}px, 0)`;
      }
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* faint graph-paper grid */}
      <div className="absolute inset-0 bg-grid-acid" />

      {/* drifting aurora blobs */}
      <div className="absolute -top-48 -left-48 w-[42rem] h-[42rem] rounded-full bg-secondary/[0.08] blur-[120px] animate-aurora-1" />
      <div className="absolute top-1/3 -right-48 w-[38rem] h-[38rem] rounded-full bg-accent/[0.07] blur-[120px] animate-aurora-2" />
      <div className="absolute -bottom-48 left-1/4 w-[36rem] h-[36rem] rounded-full bg-secondary/[0.05] blur-[120px] animate-aurora-3" />

      {/* floating particles */}
      {particles.map((p, i) => (
        <span
          key={i}
          className={`absolute w-1 h-1 rounded-full ${p.mint ? 'bg-accent/40' : 'bg-secondary/40'}`}
          style={{
            left: p.left,
            top: p.top,
            animation: `float ${p.duration} ease-in-out infinite`,
            animationDelay: p.delay,
          }}
        />
      ))}

      {/* cursor-following glow */}
      <div
        ref={glowRef}
        className="cursor-glow absolute top-0 left-0 w-[640px] h-[640px] rounded-full mix-blend-screen will-change-transform"
        style={{
          background:
            'radial-gradient(circle, var(--cursor-glow-core, color-mix(in srgb, var(--color-secondary) 13%, transparent)) 0%, var(--cursor-glow-mid, color-mix(in srgb, var(--color-accent) 7%, transparent)) 38%, transparent 70%)',
          transform: 'translate3d(calc(50vw - 320px), calc(50vh - 320px), 0)',
        }}
      />
    </div>
  );
};

export default InteractiveBackground;
