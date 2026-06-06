import React, { useState, useEffect, useCallback } from 'react';
import { CodeBracketIcon, ArrowTopRightOnSquareIcon, CheckCircleIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { StarIcon } from '@heroicons/react/24/solid';
import { motion, AnimatePresence, useMotionValue } from 'framer-motion';
import SectionHeading from '@/components/SectionHeading';

interface Project {
  id: number;
  title: string;
  description: string[];
  technologies: string[];
  achievements?: string[];
  githubLink: string;
  liveLink?: string;
}

// Current GitHub star counts — instant-render fallback, refreshed live on mount.
const STAR_FALLBACK: Record<string, number> = {
  'ai-avtaar': 2,
  'aron': 1,
  'stock-news-summarizer': 8,
  'ai-resume-updater': 1,
  'image-editing': 2,
  'amd-ai-premiere-league-hackathon': 1,
  'qwen3.5-4b-base-blindspots': 1,
  'solana-data-analysis': 4,
  'image-to-text': 1,
  'find-you': 1,
  'final_year_project-1': 1,
  'gender-detection': 2,
  'support-finder-extension': 1,
  'auto-doc': 1,
  'notifiq': 0,
  'snowflake-project': 1,
};

const repoNameFromUrl = (url: string): string =>
  (url.split('github.com/NI3singh/')[1] || '').split(/[/?#]/)[0].toLowerCase();

const ProjectCard: React.FC<Project & { liveLink?: string; index: number; stars: number }> = ({
  title,
  description,
  technologies,
  achievements,
  githubLink,
  liveLink,
  index,
  stars,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="h-full px-3 md:px-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`
        relative h-full bg-surface-strong backdrop-blur-xl rounded-2xl overflow-hidden
        border border-border transition-all duration-500 group
        ${isHovered ? 'border-secondary/50 glow-card' : 'hover:border-border'}
      `}>
        {/* Gradient Glow Effect */}
        <div className={`
          absolute inset-0 bg-gradient-to-br from-secondary/10 via-accent/5 to-transparent
          opacity-0 transition-opacity duration-500
          ${isHovered ? 'opacity-100' : ''}
        `} />

        <div className="relative p-6 sm:p-8 flex flex-col h-full z-10">
          {/* Header */}
          <div className="mb-6">
            <div className="flex items-start justify-between gap-3 mb-4">
              <div className="flex items-center gap-3">
                <div className={`
                  p-2 rounded-lg text-secondary
                  transition-all duration-300 ${isHovered ? 'scale-110 bg-secondary/20' : 'bg-secondary/10'}
                `}>
                  <CodeBracketIcon className="w-6 h-6" />
                </div>
                <h3 className={`text-xl font-bold transition-colors ${isHovered ? 'text-secondary' : 'text-text-primary'}`}>
                  {title}
                </h3>
              </div>
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${stars} GitHub stars`}
                className="flex-shrink-0 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-glass border border-border text-xs font-semibold text-text-secondary hover:border-secondary/40 hover:text-secondary transition-colors"
              >
                <StarIcon className="w-3.5 h-3.5 text-secondary" />
                {stars}
              </a>
            </div>

            {/* Technologies Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {technologies.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-medium px-2.5 py-1 rounded-full bg-glass text-text-secondary border border-border"
                >
                  {tech}
                </span>
              ))}
              {technologies.length > 4 && (
                <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-glass text-text-secondary border border-border">
                  +{technologies.length - 4}
                </span>
              )}
            </div>
          </div>

          {/* Description */}
          <div className="flex-grow space-y-3 mb-6">
            {description.slice(0, 2).map((desc, i) => (
              <p key={i} className="text-sm text-text-secondary leading-relaxed line-clamp-3" dangerouslySetInnerHTML={{ __html: desc }} />
            ))}
          </div>

          {/* Achievements Preview (Only visible on hover or if space permits) */}
          {achievements && achievements.length > 0 && (
            <div className={`
              mb-6 overflow-hidden transition-all duration-500
              ${isHovered ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}
            `}>
              <div className="bg-accent/10 rounded-lg p-3 border border-accent/20">
                <div className="flex items-center gap-2 text-accent mb-2">
                  <CheckCircleIcon className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wider">Key Achievement</span>
                </div>
                <p className="text-xs text-accent" dangerouslySetInnerHTML={{ __html: achievements[0] }} />
              </div>
            </div>
          )}

          {/* Footer Actions */}
          <div className="mt-auto pt-4 border-t border-border flex items-center justify-between gap-4">
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-text-secondary hover:text-text-primary transition-colors group/link"
            >
              <span>Source Code</span>
              <ArrowTopRightOnSquareIcon className="w-4 h-4 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
            </a>

            {liveLink && (
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium text-secondary hover:text-accent transition-colors group/link"
              >
                <span>Live Demo</span>
                <ArrowTopRightOnSquareIcon className="w-4 h-4 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const projectData: Project[] = [
    {
      id: 1,
      title: 'AI-Avtaar — AI Character & Virtual Try-On Pipeline',
      description: [
        'Built an end-to-end Streamlit pipeline that turns a handful of user photos into a consistent AI character — Train, Generate, then Try-On.',
        'Fine-tunes a custom LoRA model with Kohya_ss, generates images via Automatic1111 (SDXL), and applies photorealistic virtual clothing with CatVTON.',
        'Orchestrated three specialized engines in isolated environments for clean dependency management and stability.'
      ],
      technologies: ['Stable Diffusion (SDXL)', 'LoRA Fine-tuning', 'Kohya_ss', 'Automatic1111', 'CatVTON', 'Streamlit', 'Generative AI'],
      achievements: [
        'Unified LoRA fine-tuning, image generation, and virtual try-on in a single application',
      ],
      githubLink: 'https://github.com/NI3singh/AI-Avtaar'
    },
    {
      id: 2,
      title: 'ARON — AI Video Creator Pipeline',
      description: [
        'Prototyped an end-to-end pipeline that generates short, multi-scene videos from a single text prompt.',
        'Chains a director LLM (Llama-3.1-8B) that writes the script and storyboard, FLUX.1-dev for concept art, and Wan2.2 to animate each scene into video.',
        'Wrapped the multi-model workflow in a guided Gradio interface with a modular, swappable architecture.'
      ],
      technologies: ['Llama-3.1-8B', 'FLUX.1-dev', 'Wan2.2 (Text-to-Video)', 'Diffusers', 'Transformers', 'Gradio', 'Generative AI'],
      achievements: [
        'Automated multimodal pipeline: LLM storyboard → text-to-image → image-to-video',
      ],
      githubLink: 'https://github.com/NI3singh/ARON',
      liveLink: 'https://youtu.be/fK2iA8LlV88'
    },
    {
      id: 3,
      title: 'Stock News Summarizer',
      description: [
        'Engineered an automated financial news aggregation system collecting data from multiple sources (TradingView, Finviz, Polygon API) with AI-powered insights.',
        'Integrated Google Gemini Pro to analyze and summarize top stories, generating "What Changed Today" reports with 7-day historical context.',
        'Built production-ready Flask application with scheduled daily updates, persistent storage, and responsive UI for real-time ticker management.'
      ],
      technologies: ['Flask', 'SQLite', 'Google Gemini Pro', 'Data Aggregation', 'REST API', 'Polygon API', 'Natural Language Processing'],
      achievements: [
        'Reduced manual news research time by 80% through automated multi-source aggregation',
        'Processes 15+ articles per ticker into <500 word AI-generated summaries with 7-day historical tracking'
      ],
      githubLink: 'https://github.com/NI3singh/stock-news-summarizer',
      liveLink: 'https://stock-news-summarizer.onrender.com/'
    },
    {
      id: 4,
      title: 'ResumeTeX Builder — AI Résumé Builder',
      description: [
        'Full-stack LaTeX résumé builder with AI-powered parsing, cloud storage, and multi-version management.',
        'Write one master résumé, fork it for every job application, and compile to a pixel-perfect PDF through your own LaTeX template.',
        'Ships a 9-section editor with live LaTeX preview, drag-to-reorder, 50-step undo, autosave every 2 seconds, and one-click rollback.'
      ],
      technologies: ['Next.js 14', 'Supabase', 'TypeScript', 'LaTeX', 'LLM API', 'Tailwind CSS'],
      achievements: [
        'Cloud-synced version control for résumés with instant rollback and continuous autosave',
      ],
      githubLink: 'https://github.com/NI3singh/AI-Resume-Updater',
      liveLink: 'https://ai-resume-updater-omega.vercel.app'
    },
    {
      id: 5,
      title: 'Qwen Image Editor',
      description: [
        'Built a browser-based interface for Alibaba\'s Qwen-Image-Edit model enabling advanced, instruction-based image editing.',
        'Upload an image, describe the edit in natural language, and get real-time semantic and appearance-based results.',
        'Optimized and tested to run locally on AMD Instinct MI300X GPUs (ROCm 6.4), processing images privately on-device.'
      ],
      technologies: ['Qwen-Image-Edit', 'Gradio', 'PyTorch', 'AMD ROCm', 'Generative AI', 'Computer Vision'],
      achievements: [
        'Instruction-based image editing tuned for stable inference on AMD MI300X',
      ],
      githubLink: 'https://github.com/NI3singh/Image-editing'
    },
    {
      id: 6,
      title: 'AMD AI Premiere League — IIT Bombay',
      description: [
        'Competed in AMD\'s AI Premiere League hackathon at IIT Bombay, building competing LLM agents for a cricket-style knockout tournament.',
        'Engineered a Question-agent that poses puzzle-based questions on given topics and an Answer-agent that solves the opponent\'s questions.',
        'Designed both agents to strict input/output schemas for automated 1v1 agent-vs-agent matches.'
      ],
      technologies: ['LLMs', 'Multi-Agent Systems', 'Prompt Engineering', 'Python', 'AMD GPUs'],
      achievements: [
        'Built dueling question and answer LLM agents for an automated tournament at IIT Bombay',
      ],
      githubLink: 'https://github.com/NI3singh/AMD-AI-Premiere-League-Hackathon'
    },
    {
      id: 7,
      title: 'Qwen3.5-4B Blind-Spot Evaluation',
      description: [
        'Fatima Fellowship 2026 technical challenge focused on finding the blind spots of frontier language models.',
        'Stress-tested the Qwen3.5-4B base model to surface confidently-wrong answers across negation, false premises, character-level tasks, and physics and logic reasoning.',
        'Ran greedy inference on Modal (A10G GPU) with Hugging Face Transformers and curated a documented failure dataset.'
      ],
      technologies: ['LLMs', 'Hugging Face Transformers', 'Modal', 'Model Evaluation', 'Jupyter', 'Python'],
      achievements: [
        'Documented 10 diverse model blind spots and published the dataset on Hugging Face',
      ],
      githubLink: 'https://github.com/NI3singh/qwen3.5-4b-base-blindspots',
      liveLink: 'https://huggingface.co/datasets/Ni3SinghR/qwen3.5-4b-base-blindspots'
    },
    {
      id: 8,
      title: 'Solana Price Data Analysis',
      description: [
        'Analyzed 1,300+ days of historical Solana market data in OHLCV format to identify price volatility drivers.',
        'Engineered robust data pipeline enriching raw dataset with 25+ technical indicators including RSI, MACD, and Bollinger Bands.',
        'Synthesized enhanced 44-column dataset improving baseline ML model predictive performance for price forecasting.'
      ],
      technologies: ['Data Engineering', 'Data Analysis', 'Data Visualisation', 'Matplotlib', 'Technical Analysis'],
      achievements: [
        'Built scalable pipeline for cryptocurrency market data analysis and trading insights'
      ],
      githubLink: 'https://github.com/NI3singh/Solana-Data-Analysis',
      liveLink: 'https://solana-live-dashboard.onrender.com/'
    },
    {
      id: 9,
      title: 'Text Extraction from Image',
      description: [
        'Developed a robust text extraction system capable of accurately processing a wide range of image types and text styles.',
        'Developed a versatile system combining GOT OCR2.0 and EasyOCR LLM models for accurate text.',
        'Used HuggingFace and Gradio for Deploying the project.',
        'Achieved 94.8% text recognition accuracy in english language and font styles.'
      ],
      technologies: ['GOT OCR2.0', 'EasyOCR', 'Gradio', 'HuggingFace'],
      achievements: [
        'Text recognition accuracy in english language:- 94.8%',
      ],
      githubLink: 'https://github.com/NI3singh/Image-to-text',
      liveLink: 'https://huggingface.co/spaces/Ni3SinghR/IMAGE-TO_TEXT-GOT-OCR2.0'
    },
    {
      id: 10,
      title: 'Face Recognition Web Application (Find You)',
      description: [
        'This is a Flask-based web application for face recognition.',
        'Users can upload or capture photos to find matched faces from a dataset.',
        'The app also provides options to download all matched photos as a zip file.',
        'Ensuring Proper Security implementation by adding feature "Authorized access only by Password-Protected-Link".',
        'Achieved 96.3% face recognition accuracy on a diverse dataset of 500+ images'
      ],
      technologies: ['Retina Face', 'Facenet', 'Flask'],
      achievements: [
        'Face Recognition Accuracy:- 96.3%',
      ],
      githubLink: 'https://github.com/NI3singh/Find-You/tree/main',
    },
    {
      id: 11,
      title: 'Object Detection and Distance Measurement',
      description: [
        'Developed a real-time object detection system using YOLOv5x model to detect multiple objects in dynamic environments.',
        'Implemented custom distance measurement algorithm.',
        'Integrated the system with speech output for real-time feedback, enhancing usability in practical applications like autonomous navigation.',
        'Achieved 92.7% accuracy in distance measurements within 10 meters range.'
      ],
      technologies: ['Computer Vision', 'YOLOv5', 'pyttsx3', 'OpenCV'],
      achievements: [
        'Detection Accuracy within 10 meters range :- 92.7%'
      ],
      githubLink: 'https://github.com/NI3singh/FINAL_YEAR_PROJECT-1',
    },
    {
      id: 12,
      title: 'Gender Detection API',
      description: [
        'Built a FastAPI service that detects a person\'s gender from an uploaded image.',
        'Uses RetinaFace to detect and validate human faces, then OpenAI\'s CLIP model to classify gender.',
        'Handles edge cases gracefully — no face detected, multiple faces, or non-human and low-quality images.'
      ],
      technologies: ['FastAPI', 'RetinaFace', 'CLIP', 'Computer Vision', 'Python'],
      achievements: [
        'Face-validated gender classification with robust handling of invalid inputs',
      ],
      githubLink: 'https://github.com/NI3singh/Gender-detection'
    },
    {
      id: 13,
      title: 'Support Finder — Chrome Extension',
      description: [
        'Chrome extension that finds the best public support contact for any site you\'re visiting — email, contact form, help center, or live chat.',
        'A four-layer deterministic pipeline scans the active page, probes conventional support paths on the same domain, and ranks results by confidence.',
        'Each result includes a confidence score, a short explanation, one-tap Open or Copy actions, and an optional draft message template.'
      ],
      technologies: ['TypeScript', 'Chrome Extension (MV3)', 'Service Worker', 'Content Scripts', 'Heuristics'],
      achievements: [
        'Confidence-ranked support routes surfaced through deterministic heuristics, with no AI-invented contacts',
      ],
      githubLink: 'https://github.com/NI3singh/support-finder-extension'
    },
    {
      id: 14,
      title: 'Auto-Doc - VS Code Extension',
      description: [
        'Developed a zero-configuration VS Code extension that automatically tracks and documents code changes in real-time with intelligent diff detection.',
        'Implemented line-by-line change logging with timestamps on every file save, generating clean Markdown documentation without manual effort.',
        'Built intuitive UI with status bar controls, command palette integration, and PDF export for seamless developer workflow.',
      ],
      technologies: ['JavaScript', 'VS Code API', 'Git Diff Algorithm '],
      achievements: [
        'Achieved 100% automated documentation with zero-configuration setup',
        'Line-level change logging with timestamps generated automatically on every file save'
      ],
      githubLink: 'https://github.com/NI3singh/Auto-Doc'
    },
    {
      id: 15,
      title: 'NotifIQ — Intelligent Notification Manager',
      description: [
        'Native Android app that scores every notification on-device — from Important to Spam — using 6 weighted scorers, surfacing what matters and silencing the noise.',
        'Includes a suppression mode (always protecting OTPs, banking, and calls), a private local inbox, quiet hours, and daily and weekly analytics.',
        'Learns from user feedback over time, with zero network requests and zero telemetry, on a strict multi-module Clean Architecture.'
      ],
      technologies: ['Kotlin', 'Jetpack Compose', 'Room', 'On-device ML', 'Clean Architecture', 'Android'],
      achievements: [
        '100% on-device classification — no cloud, no tracking — that adapts to user feedback',
      ],
      githubLink: 'https://github.com/NI3singh/NotifIQ'
    },
    {
      id: 16,
      title: 'Retail Sales Analysis on Snowflake',
      description: [
        'Managed end-to-end data analysis pipeline processing 1M+ rows of Rossmann retail sales data for demand forecasting.',
        'Executed comprehensive data cleaning and feature engineering entirely with SQL, creating custom time-based features.',
        'Conducted extensive EDA using complex SQL queries to analyze relationships between promotions and sales performance.'
      ],
      technologies: ['Snowflake', 'SQL', 'Data Engineering', 'Feature Engineering', 'Cloud Data Platform'],
      achievements: [
        'Discovered promotional periods boost average daily sales by 67.7% (EUR 4,406 to EUR 7,391)',
      ],
      githubLink: 'https://github.com/NI3singh/Snowflake-Project'
    }
  ];

  // Infinite Carousel Logic
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [cardsToShow, setCardsToShow] = useState(3);
  const [liveStars, setLiveStars] = useState<Record<string, number>>({});
  const [isPaused, setIsPaused] = useState(false);

  // Refresh GitHub star counts with a single API call (falls back to STAR_FALLBACK)
  useEffect(() => {
    let cancelled = false;
    fetch('https://api.github.com/users/NI3singh/repos?per_page=100&type=owner')
      .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
      .then((repos: Array<{ name: string; stargazers_count: number }>) => {
        if (cancelled || !Array.isArray(repos)) return;
        const map: Record<string, number> = {};
        for (const r of repos) map[r.name.toLowerCase()] = r.stargazers_count;
        setLiveStars(map);
      })
      .catch(() => {});
    return () => { cancelled = true; };
  }, []);

  // Update cards to show based on screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setCardsToShow(1);
      else if (window.innerWidth < 1024) setCardsToShow(2);
      else setCardsToShow(3);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Create extended array for infinite scroll: [Last Few, ...Original, ...Original, ...First Few]
  // We triple the array to ensure smooth infinite scrolling in both directions
  const extendedProjects = [...projectData, ...projectData, ...projectData];
  const totalProjects = projectData.length;

  // Initialize at the middle set
  useEffect(() => {
    setCurrentIndex(totalProjects);
  }, [totalProjects]);

  const handleNext = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  }, [isTransitioning]);

  const handlePrev = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  }, [isTransitioning]);

  // Handle infinite loop reset
  const handleTransitionEnd = () => {
    setIsTransitioning(false);

    // If we've scrolled past the second set (to the right)
    if (currentIndex >= totalProjects * 2) {
      setCurrentIndex(totalProjects);
    }
    // If we've scrolled before the second set (to the left)
    else if (currentIndex < totalProjects) {
      setCurrentIndex(totalProjects * 2 - 1);
    }
  };

  // Auto-play: gently advance unless paused (hover) or the user prefers reduced motion.
  // Including currentIndex in deps restarts the timer after every advance or manual nav.
  useEffect(() => {
    if (isPaused) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const interval = setInterval(handleNext, 4500);
    return () => clearInterval(interval);
  }, [isPaused, handleNext, currentIndex]);

  return (
    <section id="projects" className="relative bg-transparent py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading
          eyebrow="My Work"
          watermark="WORK"
          subtitle="A collection of my work in AI, Data Science, and Full Stack Development."
          className="mb-12 animate-fade-in-up"
        >
          Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">Projects</span>
        </SectionHeading>

        {/* Carousel Container */}
        <div
          className="relative group"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 p-3 rounded-full bg-surface-strong border border-border text-text-primary hover:bg-secondary hover:border-secondary hover:text-on-accent transition-all duration-300 opacity-0 group-hover:opacity-100 focus:opacity-100 shadow-lg backdrop-blur-sm"
            aria-label="Previous Project"
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 p-3 rounded-full bg-surface-strong border border-border text-text-primary hover:bg-secondary hover:border-secondary hover:text-on-accent transition-all duration-300 opacity-0 group-hover:opacity-100 focus:opacity-100 shadow-lg backdrop-blur-sm"
            aria-label="Next Project"
          >
            <ChevronRightIcon className="w-6 h-6" />
          </button>

          {/* Slider Track */}
          <div className="overflow-hidden -mx-4 py-10"> {/* Negative margin to allow cards to touch edges if needed, py for hover growth */}
            <motion.div
              className="flex"
              initial={false}
              animate={{
                x: `calc(-${currentIndex * (100 / cardsToShow)}%)`
              }}
              transition={{
                duration: isTransitioning ? 0.5 : 0,
                ease: "easeInOut"
              }}
              onAnimationComplete={handleTransitionEnd}
            >
              {extendedProjects.map((project, index) => {
                const repo = repoNameFromUrl(project.githubLink);
                const stars = liveStars[repo] ?? STAR_FALLBACK[repo] ?? 0;
                return (
                  <div
                    key={`${project.id}-${index}`}
                    className="flex-shrink-0"
                    style={{ width: `${100 / cardsToShow}%` }}
                  >
                    <ProjectCard {...project} index={index} stars={stars} />
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {projectData.map((_, index) => {
            // Calculate active dot based on modulo of currentIndex
            const isActive = (currentIndex % totalProjects) === index;
            return (
              <button
                key={index}
                onClick={() => {
                  setIsTransitioning(true);
                  // Calculate nearest target index to minimize travel
                  const currentMod = currentIndex % totalProjects;
                  const diff = index - currentMod;
                  setCurrentIndex(currentIndex + diff);
                }}
                className={`
                  h-2 rounded-full transition-all duration-300
                  ${isActive ? 'w-8 bg-secondary' : 'w-2 bg-text-secondary/40 hover:bg-text-secondary/60'}
                `}
                aria-label={`Go to project ${index + 1}`}
              />
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/NI3singh"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-glass hover:bg-glass-strong border border-border hover:border-secondary/40 hover:text-secondary text-text-primary font-medium transition-colors duration-300"
          >
            <span>View More on GitHub</span>
            <ArrowTopRightOnSquareIcon className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
