import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon, AcademicCapIcon, BriefcaseIcon } from '@heroicons/react/24/outline';
import ThemeToggle from './ThemeToggle';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { 
      href: '#experience', 
      label: 'Education',
      subLabel: 'Experience',
      icon: AcademicCapIcon,
      subIcon: BriefcaseIcon,
      isToggleable: true
    },
    { href: '#projects', label: 'Projects' },
    { href: '#about', label: 'About' },
    { href: '#stats', label: 'Skills' },
    { href: '#contact', label: 'Contact' },
  ];

  // Smooth scroll function
  // Fixed Smooth scroll function
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    // Handle home navigation
    if (href === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setIsOpen(false);
      return;
    }
    
    // Standard approach for all sections including experience
    const element = document.querySelector(href);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    } else {
      // Fallback: If exact ID not found, try to find experience section by unique characteristics
      if (href === '#experience') {
        const experienceSection = document.querySelector('section[id="experience"]') ||
                                Array.from(document.querySelectorAll('section')).find(section => 
                                  section.textContent?.includes('Professional Journey') || 
                                  section.textContent?.includes('Educational Foundation') ||
                                  section.classList.contains('bg-gradient-to-br') && 
                                  section.textContent?.includes('Toggle Switch')
                                );
        
        if (experienceSection) {
          const navHeight = 80;
          const elementPosition = experienceSection.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - navHeight;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    }
    
    setIsOpen(false);
  };

  interface ToggleableLink {
    href: string;
    label: string;
    subLabel: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    subIcon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    isToggleable: boolean;
  }

  const ToggleableNavItem: React.FC<{ link: ToggleableLink; isMobile?: boolean }> = ({ link, isMobile = false }) => (
    <a
      href={link.href}
      onClick={(e) => handleNavClick(e, link.href)}
      className={`flex items-center gap-1.5 rounded-lg font-medium text-text-secondary hover:text-text-primary hover:bg-glass-strong transition-colors duration-300 ${
        isMobile ? 'w-full justify-center px-4 py-2.5 text-lg' : 'px-3 py-1.5 text-sm'
      }`}
    >
      <link.icon className="w-4 h-4" />
      <span>{link.label}</span>
      <span className="opacity-40">/</span>
      <link.subIcon className="w-4 h-4" />
      <span>{link.subLabel}</span>
    </a>
  );

  return (
    <nav className="sticky top-0 z-50 px-4 pt-4">
      <div className="max-w-5xl mx-auto">
        {/* Floating glass island */}
        <div className="relative flex items-center justify-between gap-4 rounded-2xl border border-border nav-glass backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.28)] px-4 sm:px-5 py-2.5">
          {/* Brand spot: animated sun/moon theme switch */}
          <ThemeToggle className="flex-shrink-0" />

          {/* Centered nav links (desktop) */}
          <div className="hidden lg:flex flex-1 items-center justify-center gap-1">
            {navLinks.map((link) => (
              link.isToggleable ? (
                <ToggleableNavItem key={link.label} link={link} />
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-3 py-1.5 rounded-lg text-sm font-medium text-text-secondary hover:text-text-primary hover:bg-glass-strong transition-colors duration-300"
                >
                  {link.label}
                </a>
              )
            ))}
          </div>

          {/* Right: resume (desktop) + hamburger (mobile) */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <a
              href="/Nitin_Singh_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary group hidden lg:inline-flex px-5 py-2.5 text-sm">
              Resume
              <svg className="w-4 h-4 transform group-hover:translate-y-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden relative p-2 -mr-1 text-text-primary rounded-lg hover:bg-glass-strong transition-colors duration-300 focus:outline-none"
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6">
                <XMarkIcon
                  className={`absolute inset-0 h-6 w-6 text-secondary transition-all duration-300 ${
                    isOpen ? 'rotate-0 opacity-100' : 'rotate-90 opacity-0'
                  }`}
                />
                <Bars3Icon
                  className={`absolute inset-0 h-6 w-6 text-text-secondary transition-all duration-300 ${
                    isOpen ? '-rotate-90 opacity-0' : 'rotate-0 opacity-100'
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile dropdown — matching glass panel */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-[32rem] opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="mt-2 rounded-2xl border border-border bg-primary/80 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.28)] p-3 flex flex-col gap-1">
            {navLinks.map((link, index) => (
              link.isToggleable ? (
                <div
                  key={link.label}
                  className={`transform transition-all duration-300 ${
                    isOpen ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <ToggleableNavItem link={link} isMobile />
                </div>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-4 py-2.5 rounded-lg text-center text-lg font-medium text-text-secondary hover:text-text-primary hover:bg-glass-strong transition-all duration-300 transform ${
                    isOpen ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  {link.label}
                </a>
              )
            ))}

            {/* Mobile Resume Button */}
            <a
              href="/Nitin_Singh_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className={`btn btn-primary group w-full mt-2 px-6 py-3 text-base transition-all duration-500 ${
                isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
              style={{ transitionDelay: `${navLinks.length * 50}ms` }}
            >
              Resume
              <svg className="w-5 h-5 transform group-hover:translate-y-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
