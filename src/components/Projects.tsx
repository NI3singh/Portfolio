import React, { useState, useEffect, useCallback } from 'react';
import { CodeBracketIcon, ArrowTopRightOnSquareIcon, CheckCircleIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence, useMotionValue } from 'framer-motion';

interface Project {
  id: number;
  title: string;
  description: string[];
  technologies: string[];
  achievements?: string[];
  githubLink: string;
  liveLink?: string;
}

const ProjectCard: React.FC<Project & { liveLink?: string; index: number }> = ({
  title,
  description,
  technologies,
  achievements,
  githubLink,
  liveLink,
  index
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="h-full px-3 md:px-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`
        relative h-full bg-gray-900/80 backdrop-blur-xl rounded-2xl overflow-hidden
        border border-white/10 transition-all duration-500 group
        ${isHovered ? 'border-blue-500/50 shadow-[0_0_30px_-5px_rgba(59,130,246,0.3)]' : 'hover:border-white/20'}
      `}>
        {/* Gradient Glow Effect */}
        <div className={`
          absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-transparent
          opacity-0 transition-opacity duration-500
          ${isHovered ? 'opacity-100' : ''}
        `} />

        <div className="relative p-6 sm:p-8 flex flex-col h-full z-10">
          {/* Header */}
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-4">
              <div className={`
                p-2 rounded-lg bg-blue-500/10 text-blue-400
                transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-500/20
              `}>
                <CodeBracketIcon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-blue-200 transition-colors">
                {title}
              </h3>
            </div>

            {/* Technologies Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {technologies.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-medium px-2.5 py-1 rounded-full bg-white/5 text-gray-300 border border-white/5"
                >
                  {tech}
                </span>
              ))}
              {technologies.length > 4 && (
                <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-white/5 text-gray-400 border border-white/5">
                  +{technologies.length - 4}
                </span>
              )}
            </div>
          </div>

          {/* Description */}
          <div className="flex-grow space-y-3 mb-6">
            {description.slice(0, 2).map((desc, i) => (
              <p key={i} className="text-sm text-gray-400 leading-relaxed line-clamp-3" dangerouslySetInnerHTML={{ __html: desc }} />
            ))}
          </div>

          {/* Achievements Preview (Only visible on hover or if space permits) */}
          {achievements && achievements.length > 0 && (
            <div className={`
              mb-6 overflow-hidden transition-all duration-500
              ${isHovered ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}
            `}>
              <div className="bg-green-500/10 rounded-lg p-3 border border-green-500/20">
                <div className="flex items-center gap-2 text-green-400 mb-2">
                  <CheckCircleIcon className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wider">Key Achievement</span>
                </div>
                <p className="text-xs text-green-300" dangerouslySetInnerHTML={{ __html: achievements[0] }} />
              </div>
            </div>
          )}

          {/* Footer Actions */}
          <div className="mt-auto pt-4 border-t border-white/10 flex items-center justify-between gap-4">
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors group/link"
            >
              <span>Source Code</span>
              <ArrowTopRightOnSquareIcon className="w-4 h-4 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
            </a>

            {liveLink && (
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors group/link"
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
      title: 'Youtopia - YouTube Learning Library',
      description: [
        'Developed a full-stack web application that transforms YouTube into a structured and trackable personal learning library.',
        'Built automatic viewing progress tracking system for YouTube videos and playlists with real-time data persistence.',
        'Created polished, mobile-responsive interface with real-time search, batch operations, and custom UI components.'
      ],
      technologies: ['Full-Stack Development', 'JavaScript', 'React', 'Node.js', 'python-backend'],
      achievements: [
        'Built complete progress tracking system with automatic save functionality',
      ],
      githubLink: 'https://github.com/NI3singh/YouTopia',
      liveLink: 'https://ni3-youtopia.vercel.app/'
    },
    {
      id: 2,
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
      id: 3,
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
      id: 4,
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
      id: 5,
      title: 'Student Performance Analysis',
      description: [
        'Analyzed a comprehensive dataset of 5,000+ student records to identify key predictors of academic success.',
        'Engineered automated ETL pipeline using Python achieving 98.5% data integrity through robust validation processes.',
        'Developed full-stack web application with React frontend and Python backend for interactive data visualization.'
      ],
      technologies: ['Python', 'Pandas', 'Scikit-learn', 'React', 'Data Pipeline Engineering'],
      achievements: [
        'Achieved 98.5% data integrity through automated ETL pipeline',
        'Discovered 67.7% correlation between engagement metrics and final grades'
      ],
      githubLink: 'https://github.com/NI3singh/Student-Performance-Analysis',
      liveLink: 'https://student-performance-analysis-1-omrb.onrender.com/'
    },
    {
      id: 6,
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
      id: 7,
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
    },

    {
      id: 8,
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
      id: 9,
      title: 'Auto-Doc - VS Code Extension',
      description: [
        'Developed a zero-configuration VS Code extension that automatically tracks and documents code changes in real-time with intelligent diff detection.',
        'Implemented line-by-line change logging with timestamps on every file save, generating clean Markdown documentation without manual effort.',
        'Built intuitive UI with status bar controls, command palette integration, and PDF export for seamless developer workflow.',
      ],
      technologies: ['JavaScript', 'VS Code API', 'Git Diff Algorithm '],
      achievements: [
        'Achieved 100% automated documentation with zero-configuration setup',
        'Detection accuracy within 10 meters range: ~92.7% (line-level precision for all code changes)'
      ],
      githubLink: 'https://github.com/NI3singh/Auto-Doc'
    }
  ];

  // Infinite Carousel Logic
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [cardsToShow, setCardsToShow] = useState(3);

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

  // Auto-play (optional, currently disabled but ready)
  // useEffect(() => {
  //   const interval = setInterval(handleNext, 5000);
  //   return () => clearInterval(interval);
  // }, [handleNext]);

  return (
    <section id="projects" className="relative bg-gray-950 py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Projects</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A collection of my work in AI, Data Science, and Full Stack Development.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative group">
          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 p-3 rounded-full bg-gray-900/80 border border-white/10 text-white hover:bg-blue-500 hover:border-blue-500 transition-all duration-300 opacity-0 group-hover:opacity-100 focus:opacity-100 shadow-lg backdrop-blur-sm"
            aria-label="Previous Project"
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 p-3 rounded-full bg-gray-900/80 border border-white/10 text-white hover:bg-blue-500 hover:border-blue-500 transition-all duration-300 opacity-0 group-hover:opacity-100 focus:opacity-100 shadow-lg backdrop-blur-sm"
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
              {extendedProjects.map((project, index) => (
                <div
                  key={`${project.id}-${index}`}
                  className="flex-shrink-0"
                  style={{ width: `${100 / cardsToShow}%` }}
                >
                  <ProjectCard {...project} index={index} />
                </div>
              ))}
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
                  ${isActive ? 'w-8 bg-blue-500' : 'w-2 bg-gray-700 hover:bg-gray-600'}
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
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-medium transition-all duration-300 hover:scale-105"
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
