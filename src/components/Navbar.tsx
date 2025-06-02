import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon, AcademicCapIcon, BriefcaseIcon } from '@heroicons/react/24/outline';
import nitinlogo from '@/assets/Nitin Logo.png';

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
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    // Handle home navigation
    if (href === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setIsOpen(false);
      return;
    }
    
    // For experience section, look for the section with the specific class or content
    if (href === '#experience') {
      // Try to find the experience section by its class or content
      const experienceSection = document.querySelector('section.bg-gray-50') || 
                               document.querySelector('[class*="py-20"]') ||
                               document.querySelector('section:has(h2)') ||
                               Array.from(document.querySelectorAll('section')).find(section => 
                                 section.textContent?.includes('Professional Experience') || 
                                 section.textContent?.includes('Educational Background')
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
    } else {
      // For other sections, try standard approach
      const element = document.querySelector(href);
      if (element) {
        const navHeight = 80;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - navHeight;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
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
    <div className={`relative group ${isMobile ? 'flex flex-col items-center' : ''}`}>
      <a
        href={link.href}
        onClick={(e) => handleNavClick(e, link.href)}
        className={`relative transition-all duration-300 font-medium group flex items-center ${
          isMobile 
            ? 'text-text-secondary hover:text-accent py-2 text-lg' 
            : 'text-text-secondary hover:text-accent'
        }`}
      >
        <div className="flex items-center space-x-1">
          <link.icon className="w-4 h-4" />
          <span>{link.label}</span>
          <span className="text-xs opacity-60">/</span>
          <link.subIcon className="w-4 h-4" />
          <span>{link.subLabel}</span>
        </div>
        
        {/* Animated underline */}
        <span className={`absolute left-0 w-0 h-0.5 bg-gradient-to-r from-accent to-secondary group-hover:w-full transition-all duration-300 ${
          isMobile ? '-bottom-1 left-1/2 transform -translate-x-1/2' : '-bottom-1'
        }`}></span>
      </a>
      
      {/* Tooltip for desktop */}
      {!isMobile && (
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-2 bg-primary/95 backdrop-blur-md rounded-lg text-sm text-text-secondary opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap border border-white/10 shadow-lg">
          <div className="flex items-center space-x-2">
            <AcademicCapIcon className="w-3 h-3 text-purple-400" />
            <span>Academic Path</span>
            <span className="text-xs opacity-60">+</span>
            <BriefcaseIcon className="w-3 h-3 text-blue-400" />
            <span>Professional Journey</span>
          </div>
          <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-primary/95 rotate-45 border-l border-t border-white/10"></div>
        </div>
      )}
    </div>
  );

  return (
    <nav className="bg-primary/80 backdrop-blur-md sticky top-0 z-50 shadow-lg border-b border-white/10">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Name/Logo with enhanced styling */}
          <a 
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="block">
            <div className="w-21 h-21 rounded-full overflow-hidden border-2 border-accent/30 hover:border-accent transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-accent/25">
              <img 
                src= {nitinlogo}
                alt="Ni3 Logo"
                className="w-full h-full object-cover hover:brightness-110 transition-all duration-300"
              />
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              link.isToggleable ? (
                <ToggleableNavItem key={link.label} link={link} />
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="relative text-text-secondary hover:text-accent transition-all duration-300 font-medium group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-accent to-secondary group-hover:w-full transition-all duration-300"></span>
                </a>
              )
            ))}
            
            {/* Desktop Resume Button */}
            <a
              href="/Nitin_Singh_Resume_AI_Engineer.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white transition-all duration-300 bg-gradient-to-r from-secondary to-accent rounded-xl hover:from-accent hover:to-secondary transform hover:scale-105 hover:shadow-xl"
            >
              <span className="relative z-10 flex items-center">
                Resume
                <svg className="w-4 h-4 ml-2 transform group-hover:translate-y-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </span>
              <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>

          {/* Mobile Menu Button with enhanced styling */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative p-2 text-text-primary focus:outline-none rounded-lg hover:bg-white/10 transition-all duration-300"
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6">
                <XMarkIcon 
                  className={`absolute inset-0 h-6 w-6 text-accent transform transition-all duration-300 ${
                    isOpen ? 'rotate-0 opacity-100' : 'rotate-90 opacity-0'
                  }`} 
                />
                <Bars3Icon 
                  className={`absolute inset-0 h-6 w-6 text-text-secondary transform transition-all duration-300 ${
                    isOpen ? '-rotate-90 opacity-0' : 'rotate-0 opacity-100'
                  }`} 
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu with enhanced animations */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="bg-primary/95 backdrop-blur-md pb-6 border-t border-white/10">
          <div className="flex flex-col items-center space-y-4 pt-4">
            {navLinks.map((link, index) => (
              link.isToggleable ? (
                <div
                  key={link.label}
                  className={`transform transition-all duration-300 ${
                    isOpen ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <ToggleableNavItem link={link} isMobile={true} />
                </div>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative text-text-secondary hover:text-accent transition-all duration-300 py-2 text-lg font-medium group transform ${
                    isOpen ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-accent to-secondary group-hover:w-full transition-all duration-300"></span>
                </a>
              )
            ))}
            
            {/* Mobile Resume Button */}
            <a
              href="/Nitin_Singh_Resume_AI_Engineer.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className={`group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white transition-all duration-500 bg-gradient-to-r from-secondary to-accent rounded-xl hover:from-accent hover:to-secondary transform hover:scale-105 hover:shadow-xl mt-2 ${
                isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
              style={{ transitionDelay: `${navLinks.length * 50}ms` }}
            >
              <span className="relative z-10 flex items-center">
                Resume
                <svg className="w-5 h-5 ml-2 transform group-hover:translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </span>
              <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Animated border */}
              <div className="absolute inset-0 rounded-xl opacity-75">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-secondary via-accent to-secondary animate-pulse"></div>
                <div className="absolute inset-0.5 rounded-xl bg-gradient-to-r from-secondary to-accent"></div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;