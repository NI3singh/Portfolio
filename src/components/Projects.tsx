import React, { useState, useEffect, useCallback } from 'react';
import { CodeBracketIcon, ArrowTopRightOnSquareIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

interface Project {
  id: number;
  title: string;
  description: string[];
  technologies: string[];
  achievements?: string[];
  githubLink: string;
  liveLink?: string;
}

const ProjectCard: React.FC<Project & { liveLink?: string }> = ({
  title,
  description,
  technologies,
  achievements,
  githubLink,
  liveLink
}) => {
  return (
    <div className="bg-gray-900/90 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-blue-500/20 flex flex-col h-full hover:border-blue-400/40 transition-all duration-500 hover:shadow-blue-500/10 hover:-translate-y-1">
      <h3 className="text-xl font-bold text-white mb-4 flex items-center">
        <CodeBracketIcon className="w-6 h-6 mr-3 text-blue-400" />
        {title}
      </h3>
      
      <div className="text-gray-300 text-base mb-6 space-y-3 leading-relaxed flex-grow">
        {description.map((desc, index) => (
          <p key={index} className="text-sm leading-6" dangerouslySetInnerHTML={{ __html: desc }}></p>
        ))}
      </div>

      {achievements && achievements.length > 0 && (
        <div className="mb-6 bg-green-950/30 p-4 rounded-lg border border-green-500/20">
          <h4 className="text-base font-semibold text-green-400 mb-3 flex items-center">
            <CheckCircleIcon className="w-5 h-5 mr-2" />
            Key Achievements
          </h4>
          <ul className="list-none space-y-2">
            {achievements.map((ach, index) => (
              <li key={index} className="flex items-start text-sm text-green-300">
                <CheckCircleIcon className="w-4 h-4 mr-3 flex-shrink-0 mt-0.5 text-green-400" />
                <span dangerouslySetInnerHTML={{ __html: ach }}></span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="mb-6">
        <h4 className="text-base font-semibold text-gray-200 mb-3">Technologies Used</h4>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="bg-blue-600/20 text-blue-300 text-sm px-4 py-2 rounded-full border border-blue-500/30 hover:bg-blue-600/30 transition-colors duration-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-auto pt-4 border-t border-gray-700/50 flex items-center justify-between flex-wrap gap-3">
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-all duration-300 hover:underline group"
        >
          View on GitHub
          <ArrowTopRightOnSquareIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
        </a>
        {liveLink && (
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-green-400 hover:text-green-300 font-medium transition-all duration-300 hover:underline group"
          >
            View Live
            <ArrowTopRightOnSquareIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          </a>
        )}
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [dotsBlinking, setDotsBlinking] = useState(false);

  const projectData: Project[] = [
    {
      id: 1,
      title: 'Youtopia - YouTube Learning Libraryl',
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
    }
  ];

  // Create extended array for infinite scroll
  const extendedProjects = [...projectData, ...projectData, ...projectData];
  const totalProjects = projectData.length;

  // Initialize at middle set for smooth infinite scrolling
  useEffect(() => {
    setCurrentIndex(totalProjects);
  }, [totalProjects]);

  // Navigation with infinite smooth scrolling
  const navigate = useCallback((direction: 'next' | 'prev') => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setDotsBlinking(true);
      
      setCurrentIndex(prev => {
        const newIndex = direction === 'next' ? prev + 1 : prev - 1;
        
        // Handle infinite loop transitions
        if (newIndex >= totalProjects * 2) {
          setTimeout(() => {
            setIsTransitioning(false);
            setCurrentIndex(totalProjects);
          }, 600);
          return newIndex;
        } else if (newIndex < totalProjects) {
          setTimeout(() => {
            setIsTransitioning(false);
            setCurrentIndex(totalProjects * 2 - 1);
          }, 600);
          return newIndex;
        }
        
        return newIndex;
      });
      
      setTimeout(() => {
        setIsTransitioning(false);
        setDotsBlinking(false);
      }, 600);
    }
  }, [isTransitioning, totalProjects]);

  const goToNext = useCallback(() => navigate('next'), [navigate]);
  const goToPrev = useCallback(() => navigate('prev'), [navigate]);

  // Direct navigation to specific slide
  const goToSlide = (index: number) => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setDotsBlinking(true);
      setCurrentIndex(totalProjects + index);
      setTimeout(() => {
        setIsTransitioning(false);
        setDotsBlinking(false);
      }, 600);
    }
  };

  // Keyboard support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        goToPrev();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        goToNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToPrev, goToNext]);

  // Touch support
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > 50) goToNext();
    else if (distance < -50) goToPrev();
  };

  // Calculate active dot index
  const activeDotIndex = currentIndex % totalProjects;

  return (
    <section id="projects" className="bg-gray-950 text-white py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-6 mb-12 md:mb-16">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            My Projects
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            A selection of projects that demonstrate my skills in AI and Data Science.
          </p>
          <div className="w-24 h-1 bg-blue-500 mx-auto mt-4"></div>
        </div>
      </div>

      {/* Full Width Carousel Container */}
      <div className="relative w-full">
        {/* Gradient Overlays for Edge Fade Effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-950 to-transparent z-50 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-950 to-transparent z-50 pointer-events-none"></div>
        
        {/* Navigation Buttons */}
        <div className="absolute inset-0 flex items-center justify-between px-4 sm:px-8 z-50 pointer-events-none">
          <button
            onClick={goToPrev}
            className="pointer-events-auto w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-blue-500/10 backdrop-blur-md border border-blue-400/30 flex items-center justify-center transition-all duration-300 hover:bg-blue-500/20 hover:scale-110 hover:border-blue-400/50 group"
            aria-label="Previous projects"
          >
            <svg className="w-6 h-6 text-blue-400 group-hover:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={goToNext}
            className="pointer-events-auto w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-blue-500/10 backdrop-blur-md border border-blue-400/30 flex items-center justify-center transition-all duration-300 hover:bg-blue-500/20 hover:scale-110 hover:border-blue-400/50 group"
            aria-label="Next projects"
          >
            <svg className="w-6 h-6 text-blue-400 group-hover:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Full Width Carousel Track */}
        <div className="w-full">
          <div 
            className="flex gap-6 px-[calc((100vw-1024px)/2)]"
            style={{
              transform: `translateX(calc(-${currentIndex * (100/3)}% - ${currentIndex * 1.5}rem))`,
              transition: isTransitioning ? 'transform 600ms cubic-bezier(0.16, 1, 0.3, 1)' : 'none',
            }}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {extendedProjects.map((project, index) => (
              <div 
                key={`${project.id}-${index}`}
                className="flex-shrink-0"
                style={{ width: 'min(400px, calc(33.333vw - 1rem))' }}
              >
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -bottom-20 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -top-20 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Controls Section */}
      <div className="container mx-auto px-6 mt-12">
        {/* Pagination Dots */}
        <div className="flex justify-center space-x-3">
          {projectData.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all ${
                dotsBlinking ? 'duration-150' : 'duration-300'
              } ${
                index === activeDotIndex
                  ? 'w-8 h-3 bg-blue-500 rounded-full shadow-lg shadow-blue-500/50'
                  : 'w-3 h-3 bg-gray-600 rounded-full hover:bg-gray-500'
              } ${
                dotsBlinking && index === activeDotIndex ? 'animate-pulse' : ''
              }`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>

        {/* Project Counter and GitHub Link */}
        <div className="text-center mt-8 space-y-3">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-gray-800/50 backdrop-blur-sm rounded-full border border-gray-700/50">
            <span className="text-gray-300 font-medium">
              Project <span className="text-blue-400 font-bold">{activeDotIndex + 1}</span> of <span className="text-blue-400 font-bold">{totalProjects}</span>
            </span>
          </div>
          
          <div className="flex items-center justify-center gap-2 text-gray-400">
            <span className="text-sm">Want to see more projects?</span>
            <a
              href="https://github.com/NI3singh"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm text-blue-400 hover:text-blue-300 font-medium transition-all duration-300 hover:underline group"
            >
              Visit my GitHub
              <ArrowTopRightOnSquareIcon className="w-4 h-4 ml-1.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;