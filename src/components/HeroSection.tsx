import React, { useState, useEffect, useRef } from 'react';
import SectionSeparator from '@/components/SectionSeparator';

const titles = [
  'AI Developer',
  'Data Analyst',
  'ML Engineer',
  'Problem Solver'
];

const HeroSection: React.FC = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [titleIndex, setTitleIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const isMounted = useRef(true);

  useEffect(() => {
    isMounted.current = true;
    const currentTitle = titles[titleIndex];

    const timeout = setTimeout(() => {
      if (!isMounted.current) return;

      if (!isDeleting) {
        if (currentIndex < currentTitle.length) {
          setDisplayedText(currentTitle.substring(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        } else {
          setTimeout(() => {
            if (isMounted.current) setIsDeleting(true);
          }, 2000);
        }
      } else {
        if (currentIndex > 0) {
          setDisplayedText(currentTitle.substring(0, currentIndex - 1));
          setCurrentIndex(currentIndex - 1);
        } else {
          setIsDeleting(false);
          setTitleIndex((titleIndex + 1) % titles.length);
        }
      }
    }, isDeleting ? 100 : 150);

    return () => {
      isMounted.current = false;
      clearTimeout(timeout);
    };
  }, [currentIndex, isDeleting, titleIndex]);

  return (
    <>
      <section id="home" className="relative bg-primary text-text-primary py-20 md:py-32 overflow-hidden">
        {/* Enhanced Dynamic Background */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Animated Gradient Blobs */}
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-secondary/20 to-accent/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-accent/20 to-secondary/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2s"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-secondary/5 to-accent/5 rounded-full mix-blend-multiply filter blur-2xl animate-ping duration-4s"></div>
          
          {/* Subtle Particle Effects */}
          <div className="absolute inset-0">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-accent/30 rounded-full animate-ping"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 2}s`
                }}
              ></div>
            ))}
          </div>
          
          {/* Flowing Abstract Lines */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 1000 1000">
              <defs>
                <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="currentColor" className="text-secondary" />
                  <stop offset="50%" stopColor="currentColor" className="text-accent" />
                  <stop offset="100%" stopColor="currentColor" className="text-secondary" />
                </linearGradient>
              </defs>
              <path
                d="M 100 300 Q 400 100 700 300 T 900 500"
                stroke="url(#flowGradient)"
                strokeWidth="2"
                fill="none"
                className="animate-pulse"
                style={{ animationDuration: '4s' }}
              />
              <path
                d="M 200 600 Q 500 400 800 600 T 1000 800"
                stroke="url(#flowGradient)"
                strokeWidth="1"
                fill="none"
                className="animate-pulse"
                style={{ animationDuration: '6s', animationDelay: '2s' }}
              />
            </svg>
          </div>
        </div>

        <div className="container mx-auto px-6 text-center md:text-left relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-3/5 lg:w-1/2 mb-10 md:mb-0">
              <span className="text-secondary font-semibold text-lg md:text-xl block mb-2 animate-fade-in-up delay-200">
                Hi, I'm Nitin Singh.
              </span>

              <div className="mb-6">
                {/* Enhanced Headline with Glitch Effect */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-accent to-secondary mb-2 animate-fade-in-up delay-400 leading-tight relative group" 
                    style={{ fontFamily: 'Inter, system-ui, sans-serif', letterSpacing: '-0.02em' }}>
                  <span className="block relative">
                    {/* Main Text */}
                    <span className="relative z-10">
                      {displayedText}
                    </span>
                    
                    {/* Glitch Effect Overlay */}
                    <span className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse">
                      {displayedText}
                    </span>
                    
                    {/* Digital Scan Line Effect */}
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/20 to-transparent h-full w-0 group-hover:w-full transition-all duration-1000 transform skew-x-12"></span>
                    
                    {/* Cursor */}
                    <span className="inline-block w-1 h-16 md:h-20 lg:h-24 bg-accent ml-2 animate-pulse"></span>
                  </span>
                </h1>
                
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-text-secondary/80 animate-fade-in-up delay-600" 
                     style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  Building the Future with Code
                </div>
              </div>

              <p className="text-lg md:text-xl text-text-primary/90 mb-8 max-w-2xl mx-auto md:mx-0 animate-fade-in-up delay-800 leading-relaxed">
                A recent B.Tech graduate in AI & Data Science from Uka Tarsadia University, passionate about building intelligent systems and extracting actionable insights from data. I'm eager to apply my skills in AI engineering and data analysis to real-world challenges.
              </p>

              {/* Enhanced Futuristic CTA Buttons */}
              <div className="space-x-0 md:space-x-4 space-y-4 md:space-y-0 flex flex-col sm:flex-row justify-center md:justify-start animate-fade-in-up delay-1000">
                <div className="text-center md:text-left">
                  <a href="#projects" className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white transition-all duration-500 bg-gradient-to-r from-secondary to-accent rounded-xl hover:from-accent hover:to-secondary transform hover:scale-105 hover:shadow-2xl overflow-hidden">
                    {/* Glowing Border Effect */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-secondary via-accent to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
                    <div className="absolute inset-0.5 rounded-xl bg-gradient-to-r from-secondary to-accent group-hover:from-accent group-hover:to-secondary transition-all duration-500"></div>
                    
                    {/* Moving Light Effect */}
                    <div className="absolute inset-0 rounded-xl overflow-hidden">
                      <div className="absolute -top-2 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform rotate-12 group-hover:translate-x-full transition-transform duration-1000"></div>
                    </div>
                    
                    <span className="relative z-10 flex items-center">
                      View My Projects
                      <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </a>
                </div>
                
                <div className="text-center md:text-left">
                  <a href="#contact" className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white transition-all duration-500 bg-gradient-to-r from-accent to-secondary rounded-xl hover:from-secondary hover:to-accent transform hover:scale-105 hover:shadow-2xl overflow-hidden">
                    {/* Glowing Border Effect */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-accent via-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
                    <div className="absolute inset-0.5 rounded-xl bg-gradient-to-r from-accent to-secondary group-hover:from-secondary group-hover:to-accent transition-all duration-500"></div>
                    
                    {/* Moving Light Effect */}
                    <div className="absolute inset-0 rounded-xl overflow-hidden">
                      <div className="absolute -top-2 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform rotate-12 group-hover:translate-x-full transition-transform duration-1000"></div>
                    </div>
                    
                    <span className="relative z-10 flex items-center">
                      Get In Touch
                      <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* Enhanced Interactive Central Graphic */}
            <div className="md:w-2/5 lg:w-1/2 flex justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <div 
                className="relative w-80 h-80 md:w-96 md:h-96 cursor-pointer group"
                onMouseEnter={() => {
                  setIsHovered(true);
                  setTimeout(() => setShowTooltip(true), 300);
                }}
                onMouseLeave={() => {
                  setIsHovered(false);
                  setShowTooltip(false);
                }}
              >
                {/* Enhanced Central Glowing Orb */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className={`w-32 h-32 bg-gradient-to-r from-secondary to-accent rounded-full shadow-2xl transition-all duration-500 ${isHovered ? 'scale-110 shadow-accent/50' : 'animate-pulse'}`}>
                    <div className="w-full h-full bg-gradient-to-r from-accent to-secondary rounded-full animate-spin" style={{animationDuration: '8s'}}>
                      {/* Inner Pulsing Core */}
                      <div className="absolute inset-4 bg-gradient-to-r from-white/20 to-white/10 rounded-full animate-ping"></div>
                    </div>
                  </div>
                </div>
                
                {/* Data Flow Connection Lines */}
                <div className={`absolute inset-0 transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-60'}`}>
                  <svg className="w-full h-full" viewBox="0 0 400 400">
                    <defs>
                      <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="currentColor" className="text-accent" />
                        <stop offset="50%" stopColor="currentColor" className="text-secondary" />
                        <stop offset="100%" stopColor="currentColor" className="text-accent" />
                      </linearGradient>
                    </defs>
                    
                    {/* Connection lines to floating elements */}
                    <line x1="200" y1="200" x2="200" y2="50" stroke="url(#connectionGradient)" strokeWidth="1" opacity="0.3" className="animate-pulse" />
                    <line x1="200" y1="200" x2="200" y2="350" stroke="url(#connectionGradient)" strokeWidth="1" opacity="0.3" className="animate-pulse" style={{animationDelay: '0.5s'}} />
                    <line x1="200" y1="200" x2="50" y2="200" stroke="url(#connectionGradient)" strokeWidth="1" opacity="0.3" className="animate-pulse" style={{animationDelay: '1s'}} />
                    <line x1="200" y1="200" x2="350" y2="200" stroke="url(#connectionGradient)" strokeWidth="1" opacity="0.3" className="animate-pulse" style={{animationDelay: '1.5s'}} />
                  </svg>
                </div>
                
                {/* Enhanced Orbiting Elements */}
                <div className={`absolute inset-0 transition-all duration-500 ${isHovered ? 'animate-spin' : 'animate-spin'}`} style={{animationDuration: isHovered ? '15s' : '20s'}}>
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-accent rounded-full shadow-lg animate-pulse"></div>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-secondary rounded-full shadow-lg animate-pulse"></div>
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-lg animate-pulse"></div>
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-lg animate-pulse"></div>
                </div>
                
                {/* Enhanced Counter-rotating rings */}
                <div className={`absolute inset-8 border-2 border-accent/30 rounded-full transition-all duration-500 ${isHovered ? 'border-accent/60 scale-105' : ''}`} style={{animation: `spin ${isHovered ? '10s' : '15s'} linear infinite reverse`}}></div>
                <div className={`absolute inset-16 border border-secondary/20 rounded-full transition-all duration-500 ${isHovered ? 'border-secondary/40 scale-95' : ''}`} style={{animation: `spin ${isHovered ? '8s' : '10s'} linear infinite`}}></div>
                
                {/* Enhanced Floating Code Elements */}
                <div className={`absolute top-8 right-8 text-accent/60 font-mono text-sm transition-all duration-300 ${isHovered ? 'text-accent scale-110' : 'animate-bounce'}`} style={{animationDelay: '1s'}}>
                  &lt;AI/&gt;
                </div>
                <div className={`absolute bottom-8 left-8 text-secondary/60 font-mono text-sm transition-all duration-300 ${isHovered ? 'text-secondary scale-110' : 'animate-bounce'}`} style={{animationDelay: '2s'}}>
                  {'{ML}'}
                </div>
                <div className={`absolute top-1/4 left-4 text-white/40 font-mono text-xs transition-all duration-300 ${isHovered ? 'text-white/80 scale-110' : 'animate-bounce'}`} style={{animationDelay: '0.5s'}}>
                  def()
                </div>
                <div className={`absolute bottom-1/4 right-4 text-accent/40 font-mono text-xs transition-all duration-300 ${isHovered ? 'text-accent/80 scale-110' : 'animate-bounce'}`} style={{animationDelay: '1.5s'}}>
                  [Data]
                </div>
                
                {/* Enhanced Glowing Particles */}
                <div className="absolute top-12 left-12 w-1 h-1 bg-accent rounded-full animate-ping"></div>
                <div className="absolute top-20 right-16 w-1 h-1 bg-secondary rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
                <div className="absolute bottom-16 left-20 w-1 h-1 bg-white rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
                <div className="absolute bottom-12 right-12 w-1 h-1 bg-accent rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
                
                {/* Interactive Tooltip */}
                {showTooltip && (
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-secondary to-accent px-1 py-3 rounded-lg text-white text-sm font-medium shadow-xl animate-fade-in-up min-w-48">
                    <div className="text-center">Welcome to Nitin's space! explore, discover, connect.</div>
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-accent rotate-45"></div>
                  </div>
                )}
                
                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 rounded-full bg-gradient-to-r from-accent/10 to-secondary/10 transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'} animate-pulse`}></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <SectionSeparator fromDark={true} />
    </>
  );
};

export default HeroSection;