import React from 'react';
import { useActiveSection } from '@/hooks/useActiveSection';

const items = [
  { id: 'home', label: 'Index' },
  { id: 'projects', label: 'Work' },
  { id: 'experience', label: 'Path' },
  { id: 'stats', label: 'Skills' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
];

const ids = items.map((i) => i.id);

/** Fixed lab-style section index on the right edge (desktop only).
 *  Highlights the active section and jumps on click. */
const SectionRail: React.FC = () => {
  const active = useActiveSection(ids);

  const go = (id: string) => {
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 80, behavior: 'smooth' });
    }
  };

  return (
    <nav aria-label="Section navigation" className="hidden lg:flex flex-col gap-3.5 fixed right-5 top-1/2 -translate-y-1/2 z-40">
      {items.map((it, i) => {
        const isActive = active === it.id;
        return (
          <button
            key={it.id}
            onClick={() => go(it.id)}
            className="group flex items-center justify-end gap-3 cursor-pointer"
            aria-label={`Go to ${it.label}`}
            aria-current={isActive ? 'true' : undefined}
          >
            <span className={`font-mono text-[0.6rem] tracking-[0.2em] uppercase transition-all duration-300 ${
              isActive ? 'text-signal opacity-100' : 'text-faint opacity-0 group-hover:opacity-100'
            }`}>
              {String(i + 1).padStart(2, '0')} {it.label}
            </span>
            <span className={`h-px transition-all duration-300 ${
              isActive ? 'w-8 bg-signal' : 'w-4 bg-line-2 group-hover:bg-dim'
            }`} />
          </button>
        );
      })}
    </nav>
  );
};

export default SectionRail;
