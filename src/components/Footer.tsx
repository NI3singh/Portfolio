import React from 'react';
import { ArrowUpCircleIcon } from '@heroicons/react/24/solid';
import { MapPin, Code } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const links = [
    { href: '#projects', label: 'Work' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <footer className="relative z-10 bg-transparent border-t border-white/10 py-8">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5">
          {/* Brand */}
          <a href="#home" onClick={(e) => { e.preventDefault(); scrollToTop(); }} className="flex items-center gap-2 group">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-r from-secondary to-accent flex items-center justify-center">
              <Code className="h-4 w-4 text-[#0b0c0a]" />
            </div>
            <span className="font-semibold text-text-primary group-hover:text-secondary transition-colors">Nitin Singh</span>
          </a>

          {/* Quick links */}
          <nav className="flex items-center gap-6">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-gray-400 hover:text-secondary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-sm text-secondary hover:text-accent transition-colors"
            aria-label="Scroll to top"
          >
            <span>Back to top</span>
            <ArrowUpCircleIcon className="h-4 w-4" />
          </button>
        </div>

        {/* Bottom line */}
        <div className="max-w-5xl mx-auto mt-6 pt-5 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-500">
          <span>© {currentYear} Nitin Singh. All rights reserved.</span>
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5" />
            Surat, Gujarat, India
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
