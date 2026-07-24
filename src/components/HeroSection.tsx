import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import SectionSeparator from '@/components/SectionSeparator';
import NitinImage from '@/assets/Nitin-Portfolio-Image.webp';

const titles = [
  'AI Developer',
  'Data Analyst',
  'ML Engineer',
  'Problem Solver'
];

const HeroSection: React.FC = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [titleIndex, setTitleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const { scrollY } = useScroll();
  const svgParallax = useTransform(scrollY, [0, 1000], [0, 150]);

  useEffect(() => {
    const currentTitle = titles[titleIndex];
    let timer: NodeJS.Timeout;

    if (!isDeleting) {
      if (displayedText.length < currentTitle.length) {
        timer = setTimeout(() => {
          setDisplayedText(currentTitle.slice(0, displayedText.length + 1));
        }, 80);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 2200);
      }
    } else {
      if (displayedText.length > 0) {
        timer = setTimeout(() => {
          setDisplayedText(currentTitle.slice(0, displayedText.length - 1));
        }, 40);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(false);
          setTitleIndex((prev) => (prev + 1) % titles.length);
        }, 300);
      }
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, titleIndex]);

  return (
    <>
      <section id="home" className="relative bg-transparent text-text-primary py-20 md:py-32 overflow-hidden">
        {/* Enhanced Dynamic Background */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Animated Gradient Blobs */}

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
          <motion.div style={{ y: svgParallax }} className="absolute inset-0 opacity-10">
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
          </motion.div>
        </div>

        <div className="container mx-auto px-6 text-center md:text-left relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-3/5 lg:w-1/2 mb-10 md:mb-0">
              <span className="text-secondary font-semibold text-lg md:text-xl block mb-2 animate-fade-in-up delay-200">
                Hi, I'm Nitin Singh.
              </span>

              <div className="mb-6">
                {/* Ultra-Smooth Typewriter Headline */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-3 animate-fade-in-up delay-400 min-h-[1.25em] flex items-center justify-center md:justify-start"
                  style={{ fontFamily: '"Space Grotesk", "Inter", system-ui, sans-serif', letterSpacing: '-0.03em' }}>
                  <span className="bg-gradient-to-r from-text-primary via-accent to-secondary bg-clip-text text-transparent inline-flex items-center">
                    {displayedText.split('').map((char, index) => (
                      <motion.span
                        key={`${titleIndex}-${index}-${char}`}
                        initial={{ opacity: 0, y: 3, filter: 'blur(2px)' }}
                        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                        transition={{ duration: 0.1, ease: 'easeOut' }}
                        style={{ display: 'inline-block', whiteSpace: 'pre' }}
                      >
                        {char}
                      </motion.span>
                    ))}
                  </span>
                  <motion.span
                    animate={{ opacity: [1, 0.2, 1] }}
                    transition={{ duration: 0.8, repeat: Infinity, ease: 'easeInOut' }}
                    className="inline-block w-[3px] sm:w-[4px] h-[0.85em] bg-secondary ml-1.5 rounded-full shadow-[0_0_12px_var(--color-secondary)] align-middle"
                    aria-hidden="true"
                  />
                </h1>

                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-text-secondary/80 animate-fade-in-up delay-600"
                  style={{ fontFamily: '"Space Grotesk", "Inter", system-ui, sans-serif' }}>
                  Building the Future with Code
                </div>
              </div>

              <p className="text-lg md:text-xl text-text-primary/90 mb-8 max-w-2xl mx-auto md:mx-0 animate-fade-in-up delay-800 leading-relaxed">
                AI/ML Engineer with 2+ years building LLM-powered applications, fine-tuning large models, and architecting autonomous agentic systems. I specialize in LoRA fine-tuning, RAG pipelines, multi-agent orchestration, and computer vision, deployed end-to-end with FastAPI, LangChain, and AWS. Co-authored an arXiv preprint on image restoration; placed Top 5 at IIT Bombay & IIT Gandhinagar hackathons.
              </p>

              {/* Enhanced Futuristic CTA Buttons */}
              <div className="space-x-0 md:space-x-4 space-y-4 md:space-y-0 flex flex-col sm:flex-row justify-center md:justify-start animate-fade-in-up delay-1000">
                <div className="text-center md:text-left">
                  <a href="#projects" className="btn btn-primary group px-8 py-4 text-lg">
                    View My Projects
                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>

                <div className="text-center md:text-left">
                  <a href="#contact" className="btn btn-secondary group px-8 py-4 text-lg">
                    Get In Touch
                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Enhanced Interactive Central Graphic */}
            <div className="md:w-2/5 lg:w-1/2 flex justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <div
                className="relative w-80 h-80 md:w-96 md:h-96 lg:scale-110 xl:scale-125 cursor-pointer group"
                onMouseEnter={() => {
                  setIsHovered(true);
                  setTimeout(() => setShowTooltip(true), 300);
                }}
                onMouseLeave={() => {
                  setIsHovered(false);
                  setShowTooltip(false);
                }}
              >
                {/* Central Avatar — circular photo with a bright light behind */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* bright light behind the photo */}
                  <div
                    className="hero-aura absolute w-56 h-56 md:w-72 md:h-72 rounded-full"
                    style={{ filter: 'blur(30px)' }}
                  ></div>
                  {/* photo (already circular) */}
                  <img
                    src={NitinImage}
                    alt="Nitin Singh"
                    className={`glow-secondary relative z-20 w-40 h-40 md:w-56 md:h-56 rounded-full object-cover transition-transform duration-500 ${isHovered ? 'scale-[1.04]' : ''}`}
                  />
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
                    <line x1="200" y1="200" x2="200" y2="350" stroke="url(#connectionGradient)" strokeWidth="1" opacity="0.3" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
                    <line x1="200" y1="200" x2="50" y2="200" stroke="url(#connectionGradient)" strokeWidth="1" opacity="0.3" className="animate-pulse" style={{ animationDelay: '1s' }} />
                    <line x1="200" y1="200" x2="350" y2="200" stroke="url(#connectionGradient)" strokeWidth="1" opacity="0.3" className="animate-pulse" style={{ animationDelay: '1.5s' }} />
                  </svg>
                </div>

                {/* Enhanced Orbiting Elements */}
                <div className={`absolute inset-0 transition-all duration-500 ${isHovered ? 'animate-spin' : 'animate-spin'}`} style={{ animationDuration: isHovered ? '15s' : '20s' }}>
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-accent rounded-full shadow-lg animate-pulse"></div>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-secondary rounded-full shadow-lg animate-pulse"></div>
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-text-primary rounded-full shadow-lg animate-pulse"></div>
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-text-primary rounded-full shadow-lg animate-pulse"></div>
                </div>

                {/* Enhanced Counter-rotating rings */}
                <div className={`absolute inset-8 border-2 border-accent/50 rounded-full transition-all duration-500 ${isHovered ? 'border-accent/70 scale-105' : ''}`} style={{ animation: `spin ${isHovered ? '10s' : '15s'} linear infinite reverse` }}></div>
                <div className={`absolute inset-16 border border-secondary/40 rounded-full transition-all duration-500 ${isHovered ? 'border-secondary/60 scale-95' : ''}`} style={{ animation: `spin ${isHovered ? '8s' : '10s'} linear infinite` }}></div>

                {/* Enhanced Floating Code Elements */}
                <div className={`absolute top-8 right-8 text-accent/60 font-mono text-sm transition-all duration-300 ${isHovered ? 'text-accent scale-110' : 'animate-bounce'}`} style={{ animationDelay: '1s' }}>
                  &lt;AI/&gt;
                </div>
                <div className={`absolute bottom-8 left-8 text-secondary/60 font-mono text-sm transition-all duration-300 ${isHovered ? 'text-secondary scale-110' : 'animate-bounce'}`} style={{ animationDelay: '2s' }}>
                  {'{ML}'}
                </div>
                <div className={`absolute top-1/4 left-4 text-text-primary/40 font-mono text-xs transition-all duration-300 ${isHovered ? 'text-text-primary/80 scale-110' : 'animate-bounce'}`} style={{ animationDelay: '0.5s' }}>
                  def()
                </div>
                <div className={`absolute bottom-1/4 right-4 text-accent/40 font-mono text-xs transition-all duration-300 ${isHovered ? 'text-accent/80 scale-110' : 'animate-bounce'}`} style={{ animationDelay: '1.5s' }}>
                  [Data]
                </div>

                {/* Enhanced Glowing Particles */}
                <div className="absolute top-12 left-12 w-1 h-1 bg-accent rounded-full animate-ping"></div>
                <div className="absolute top-20 right-16 w-1 h-1 bg-secondary rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-16 left-20 w-1 h-1 bg-text-primary rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute bottom-12 right-12 w-1 h-1 bg-accent rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>

                {/* Interactive Tooltip */}
                {showTooltip && (
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-secondary to-accent px-1 py-3 rounded-lg text-on-accent text-sm font-medium shadow-xl animate-fade-in-up min-w-48">
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