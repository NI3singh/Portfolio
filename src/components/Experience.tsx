import React, { useState } from 'react';
import { BriefcaseIcon, AcademicCapIcon, CalendarIcon, MapPinIcon, TrophyIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import SectionSeparator from '@/components/SectionSeparator';
import { motion, AnimatePresence } from 'framer-motion';

interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  location: string;
  duration: string;
  description?: string;
  responsibilities: string[];
  technologies: string[];
  projectGif?: string;
  thumbnail?: string;
}

interface EducationItem {
  id: number;
  degree: string;
  institution: string;
  location: string;
  duration: string;
  grade?: string;
  description?: string;
  achievements: string[];
  subjects?: string[];
}

const experienceData: ExperienceItem[] = [
  {
    id: 1,
    title: 'AI/ML Engineer',
    company: 'ELaunch Solution Pvt. Ltd.',
    location: 'Surat, Gujarat',
    duration: 'Dec 2024 - Present',
    description: 'Face Recognition Web Application (Find You) | RetinaFace, Facenet',
    responsibilities: [
      'Engineered a face detection and image search system achieving 92% accuracy using OpenCV and custom CNN architecture.',
      'Ensuring Proper Security implementation by adding feature "Authorized access only by Password-Protected-Link".',
      'Orchestrated version control workflows with Git/GitHub, reducing merge conflicts through strategic branching strategies.'
    ],
    technologies: ['Python', 'OpenCV', 'TensorFlow', 'RetinaFace', 'Facenet', 'Git', 'GitHub'],
    thumbnail: '/api/placeholder/300/200'
  },
  {
    id: 2,
    title: 'Data Analyst Intern',
    company: 'JBcodeapp',
    location: 'Surat, Gujarat',
    duration: 'May 2024 - June 2024',
    description: 'Student Performance Analysis | Python, Numpy',
    responsibilities: [
      'Applied MLOps concepts to create a robust machine learning pipeline.',
      'Developed Python backend processing 5,000+ student records with 98.5% data integrity through efficient ETL processes.'
    ],
    technologies: ['Python', 'NumPy', 'Pandas', 'MLOps', 'Data Analysis'],
    thumbnail: '/api/placeholder/300/200'
  },
  {
    id: 3,
    title: 'AI/ML Trainee',
    company: 'AlgoBrain AI',
    location: 'Surat, Gujarat',
    duration: 'Sep 2023 - Jan 2024',
    description: 'Movie-Ticket Booking Chatbot | DialogFlow CX',
    responsibilities: [
      'Developed an intelligent chatbot for movie ticket booking using DialogFlow CX.',
      'Implemented natural language processing to handle user queries and booking workflows.',
      'Identified and resolved 50+ critical bugs across 4 web applications through systematic testing methodologies.'
    ],
    technologies: ['DialogFlow CX', 'NLP', 'JavaScript', 'Node.js', 'Testing'],
    thumbnail: '/api/placeholder/300/200'
  },
  {
    id: 4,
    title: 'Google Student Ambassador',
    company: 'Google',
    location: 'Remote',
    duration: 'Sep 2025 - Dec 2025',
    description: 'Campus advocacy and technical outreach for Gemini AI.',
    responsibilities: [
      'Served as the official campus representative, driving adoption and awareness of Gemini AI tools among the student body.',
      'Organized and led technical workshops to educate peers on leveraging Google’s AI ecosystem and cloud resources.',
      'Collaborated with university stakeholders to streamline student engagement with emerging technologies.'
    ],
    technologies: ['Gemini AI', 'Google Cloud', 'Community Management', 'Public Speaking'],
    thumbnail: '/api/placeholder/300/200'
  },
  {
    id: 5,
    title: 'Gujarat State Lead',
    company: 'Open Source Connect',
    location: 'Surat, Gujarat (Remote)',
    duration: 'Jul 2025 - Sep 2025',
    description: 'Regional leadership for open-source AI/ML initiatives.',
    responsibilities: [
      'Spearheaded state-wide outreach programs focused on AI/ML literacy and open-source contribution.',
      'Designed and executed marketing strategies that expanded community engagement and program visibility.',
      'Managed program development and stakeholder coordination to foster regional technical collaboration.'
    ],
    technologies: ['AI/ML', 'Marketing Strategy', 'Community Development', 'Open Source'],
    thumbnail: '/api/placeholder/300/200'
  },
  {
    id: 6,
    title: 'Perplexity AI Business Fellow',
    company: 'Perplexity',
    location: 'Surat, Gujarat (Remote)',
    duration: 'Feb 2025 - Aug 2025',
    description: 'Business development and strategic positioning for AI-driven search.',
    responsibilities: [
      'Participated in a selective fellowship focusing on the business integration and strategic growth of Perplexity AI.',
      'Analyzed market trends and user feedback to support product refinement for generative search experiences.',
      'Developed insights on AI-driven workflows to enhance business efficiency and strategic communication.'
    ],
    technologies: ['Perplexity AI', 'Strategic Thinking', 'Market Analysis', 'Business Development'],
    thumbnail: '/api/placeholder/300/200'
  }
];

const educationData: EducationItem[] = [
  {
    id: 1,
    degree: 'Bachelor of Technology - Artificial Intelligence & Data Science',
    institution: 'Uka Tarsadia University, Surat',
    location: 'Surat, Gujarat',
    duration: '2021 - 2025',
    grade: 'CGPA: 8.68',
    achievements: [
      'Specialized in Machine Learning and Artificial Intelligence.',
      'Completed multiple projects in Computer Vision and Natural Language Processing.',
      'Scored 10.0 SGPA in 8th semester.',
      'Participated in various hackathons and coding competitions.'
    ],
    subjects: ['Machine Learning', 'Deep Learning', 'Computer Vision', 'NLP', 'Data Structures', 'Algorithms']
  },
  {
    id: 2,
    degree: 'Higher Secondary Certificate (HSC) - Science',
    institution: 'MT Jariwala Madhyamik Shala',
    location: 'Surat, Gujarat',
    duration: '2018 - 2021',
    grade: 'Percentage: 52.31%',
    achievements: [
      'Participated in District level science competitions and exhibitions and secured 2nd positions.',
      'Participated in various Games and Sports events at school level.',
      'Well-behaved and disciplined student with a keen interest in science and mathematics.',
    ],
    subjects: ['Physics', 'Chemistry', 'Mathematics']
  },
  {
    id: 3,
    degree: 'Secondary School Certificate (SSC)',
    institution: 'Shree Sardar Patel Higher Secondary School',
    location: 'Surat, Gujarat',
    duration: '2017 - 2018',
    grade: 'Percentage: 66%',
    achievements: [
      'Secured victory in the school-level football tournament!',
      'Excelled in Language and History, with a strong grasp of concepts and analytical skills.',
      'Consistently engaged in cultural and academic activities.'
    ]
  },
  {
    id: 4,
    degree: 'Aspire Leaders Program 2024',
    institution: 'Aspire Institute (Founded at Harvard University)',
    location: 'Remote',
    duration: 'Aug 2024 - Nov 2024',
    grade: 'Completion Certificate',
    achievements: [
      'Engaged in leadership development sessions with Harvard Business School faculties.',
      'Developed critical thinking and global collaboration skills via real-world case studies.',
      'Selected for a transformative initiative focused on empowering emerging global leaders.'
    ],
    subjects: ['Leadership', 'Problem Solving', 'Communication', 'Critical Thinking']
  },
  {
    id: 5,
    degree: 'Forward Program - Business Analytics & Strategic Thinking',
    institution: 'McKinsey & Company',
    location: 'Remote',
    duration: 'Apr 2025 - Jun 2025',
    grade: 'Professional Certificate',
    achievements: [
      "Mastered McKinsey's structured problem-solving methodology and strategic communication.",
      'Completed comprehensive modules on business analytics and leadership management.',
      'Earned proficiency in core business and analytical skills through rigorous assessment.'
    ],
    subjects: ['Business Analytics', 'Strategic Thinking', 'Communication & Presentation', 'Leadership Management']
  }
];

const TechnologyBadge: React.FC<{ tech: string }> = ({ tech }) => (
  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-secondary/10 text-secondary border border-secondary/20 hover:bg-secondary/20 transition-all duration-300 transform hover:scale-105">
    {tech}
  </span>
);

const SubjectBadge: React.FC<{ subject: string }> = ({ subject }) => (
  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent border border-accent/20 hover:bg-accent/20 transition-all duration-300 transform hover:scale-105">
    {subject}
  </span>
);

const ExperienceEducationSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'experience' | 'education'>('experience');
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const ExperienceCard: React.FC<{ item: ExperienceItem }> = ({ item }) => {
    const isHovered = hoveredCard === item.id;

    return (
    <div className="flex group">
      {/* Icon */}
      <div className="flex flex-col items-center mr-8 relative">
        <div className={`w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center shadow-xl transform transition-all duration-500 group-hover:scale-110 group-hover:shadow-2xl ${isHovered ? 'ring-4 ring-secondary ring-opacity-40' : ''}`}>
          <BriefcaseIcon className="w-8 h-8 text-[#0b0c0a]" />
        </div>
        <div className="w-1 h-24 bg-gradient-to-b from-secondary to-secondary/30 mt-6 rounded-full relative overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-secondary to-accent"
            initial={{ translateY: '100%' }}
            animate={{ translateY: isHovered ? '0%' : '100%' }}
            transition={{ duration: 0.7, ease: 'easeInOut' }}
          />
        </div>
      </div>

      {/* Card Content */}
      <div
        className="flex-1 bg-gray-900/60 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-2xl p-8 border-l-4 border-secondary transform transition-all duration-500 cursor-pointer relative overflow-hidden group"
        onMouseEnter={() => setHoveredCard(item.id)}
        onMouseLeave={() => setHoveredCard(null)}
      >
        {/* Background Animation */}
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        <div className="relative z-10">
          {/* Header - Always Visible */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-text-primary mb-2 group-hover:text-secondary transition-colors duration-300">
                {item.title}
              </h3>
              <div className="text-secondary font-semibold mb-2 flex items-center flex-wrap gap-x-4 gap-y-1">
                <span>{item.company}</span>
                <span className="flex items-center text-gray-400">
                  <MapPinIcon className="w-4 h-4 mr-1" />
                  {item.location}
                </span>
              </div>
              <div className="flex items-center text-gray-400">
                <CalendarIcon className="w-5 h-5 mr-2 text-secondary" />
                <span className="font-medium">{item.duration}</span>
              </div>
            </div>
          </div>

          {/* Expandable Content */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                className="overflow-hidden"
              >
                {/* Project Description */}
                {item.description && (
                  <div className="bg-white/5 rounded-lg p-4 mb-6 border-l-4 border-secondary/40">
                    <p className="text-gray-300 font-medium italic">{item.description}</p>
                  </div>
                )}

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wide">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map((tech, idx) => (
                      <TechnologyBadge key={idx} tech={tech} />
                    ))}
                  </div>
                </div>

                {/* Responsibilities */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-300 mb-4 uppercase tracking-wide">Key Achievements</h4>
                  <ul className="space-y-3">
                    {item.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start text-gray-300 group/item">
                        <span className="w-3 h-3 bg-gradient-to-br from-secondary to-accent rounded-full mr-4 mt-1.5 flex-shrink-0 transform transition-all duration-300 group-hover/item:scale-125"></span>
                        <span className="leading-relaxed">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Expand Arrow */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
          <ChevronDownIcon className={`w-6 h-6 text-gray-500 transition-transform duration-300 ${isHovered ? 'rotate-180' : ''}`} />
        </div>
      </div>
    </div>
    );
  };

  const EducationCard: React.FC<{ item: EducationItem }> = ({ item }) => {
    const isHovered = hoveredCard === item.id;

    return (
    <div className="flex group">
      {/* Icon */}
      <div className="flex flex-col items-center mr-8 relative">
        <div className={`w-16 h-16 bg-gradient-to-br from-accent to-secondary rounded-full flex items-center justify-center shadow-xl transform transition-all duration-500 group-hover:scale-110 group-hover:shadow-2xl ${isHovered ? 'ring-4 ring-accent ring-opacity-40' : ''}`}>
          <AcademicCapIcon className="w-8 h-8 text-[#0b0c0a]" />
        </div>
        <div className="w-1 h-24 bg-gradient-to-b from-accent to-accent/30 mt-6 rounded-full relative overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-accent to-secondary"
            initial={{ translateY: '100%' }}
            animate={{ translateY: isHovered ? '0%' : '100%' }}
            transition={{ duration: 0.7, ease: 'easeInOut' }}
          />
        </div>
      </div>

      {/* Card Content */}
      <div
        className="flex-1 bg-gray-900/60 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-2xl p-8 border-l-4 border-accent transform transition-all duration-500 cursor-pointer relative overflow-hidden group"
        onMouseEnter={() => setHoveredCard(item.id)}
        onMouseLeave={() => setHoveredCard(null)}
      >
        {/* Background Animation */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        <div className="relative z-10">
          {/* Header - Always Visible */}
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-text-primary mb-2 group-hover:text-accent transition-colors duration-300">
              {item.degree}
            </h3>
            <div className="text-accent font-semibold mb-2 flex items-center flex-wrap gap-x-4 gap-y-1">
              <span>{item.institution}</span>
              <span className="flex items-center text-gray-400">
                <MapPinIcon className="w-4 h-4 mr-1" />
                {item.location}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center text-gray-400">
                <CalendarIcon className="w-5 h-5 mr-2 text-accent" />
                <span className="font-medium">{item.duration}</span>
              </div>
              {item.grade && (
                <div className="flex items-center bg-accent/10 px-4 py-2 rounded-full">
                  <TrophyIcon className="w-5 h-5 mr-2 text-accent" />
                  <span className="text-accent font-bold">{item.grade}</span>
                </div>
              )}
            </div>
          </div>

          {/* Expandable Content */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 30,
                  mass: 0.8
                }}
                className="overflow-hidden"
              >
                {/* Subjects */}
                {item.subjects && (
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wide">Key Subjects</h4>
                    <div className="flex flex-wrap gap-2">
                      {item.subjects.map((subject, idx) => (
                        <SubjectBadge key={idx} subject={subject} />
                      ))}
                    </div>
                  </div>
                )}

                {/* Description */}
                {item.description && (
                  <div className="bg-white/5 rounded-lg p-4 mb-6 border-l-4 border-accent/40">
                    <p className="text-gray-300 font-medium italic">{item.description}</p>
                  </div>
                )}

                {/* Achievements */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-300 mb-4 uppercase tracking-wide">Achievements & Activities</h4>
                  <ul className="space-y-3">
                    {item.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start text-gray-300 group/item">
                        <span className="w-3 h-3 bg-gradient-to-br from-accent to-secondary rounded-full mr-4 mt-1.5 flex-shrink-0 transform transition-all duration-300 group-hover/item:scale-125"></span>
                        <span className="leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Expand Arrow */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
          <ChevronDownIcon className={`w-6 h-6 text-gray-500 transition-transform duration-300 ${isHovered ? 'rotate-180' : ''}`} />
        </div>
      </div>
    </div>
    );
  };

  return (
    <>
      <section id="experience" className="bg-transparent py-20 md:py-28 relative overflow-hidden">
        {/* Background atmosphere (matches Projects/Stats) */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 bg-secondary/5 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-20 right-10 w-64 h-64 bg-accent/5 rounded-full blur-[100px]"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up text-text-primary">
              {activeTab === 'experience' ? 'Professional Journey' : 'Educational Foundation'}
            </h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              {activeTab === 'experience'
                ? 'Experiences that defined my professional growth and skills.'
                : 'A timeline of my academic milestones and achievements.'}
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-secondary to-accent mx-auto mt-4 animate-fade-in-up rounded-full" style={{animationDelay: '0.3s'}}></div>
          </div>

          {/* Enhanced Toggle Switch */}
          <div className="flex justify-center mb-16">
            <div className="bg-gray-900/60 rounded-2xl p-3 shadow-2xl border border-white/10 backdrop-blur-sm relative">
              <div className="flex relative z-10">
                <button
                  onClick={() => setActiveTab('experience')}
                  className={`px-8 py-4 rounded-xl font-semibold transition-all duration-500 flex items-center transform ${
                    activeTab === 'experience' ? 'text-[#0b0c0a]' : 'text-gray-400 hover:text-text-primary'
                  }`}
                  aria-label="Show Experience"
                >
                  <BriefcaseIcon className={`w-6 h-6 mr-3 transition-transform duration-300 ${activeTab === 'experience' ? 'scale-110' : ''}`} />
                  Experience
                </button>
                <button
                  onClick={() => setActiveTab('education')}
                  className={`px-8 py-4 rounded-xl font-semibold transition-all duration-500 flex items-center transform ${
                    activeTab === 'education' ? 'text-[#0b0c0a]' : 'text-gray-400 hover:text-text-primary'
                  }`}
                  aria-label="Show Education"
                >
                  <AcademicCapIcon className={`w-6 h-6 mr-3 transition-transform duration-300 ${activeTab === 'education' ? 'scale-110' : ''}`} />
                  Education
                </button>
              </div>
              {/* Animated Slider Background */}
              <div
                className={`absolute top-3 bottom-3 rounded-xl transition-all duration-500 ease-in-out ${
                  activeTab === 'experience'
                    ? 'left-3 w-[calc(50%-0.75rem)] bg-gradient-to-r from-secondary to-accent'
                    : 'left-[calc(50%+0.25rem)] w-[calc(50%-0.5rem)] bg-gradient-to-r from-accent to-secondary'
                }`}
              />
            </div>
          </div>

          {/* Content */}
          <div className="max-w-5xl mx-auto group">
            {activeTab === 'experience' ? (
              <div className="space-y-8">
                {experienceData.map((item) => (
                  <div
                    key={item.id}
                    className={`transition-all duration-500 ${hoveredCard !== null && hoveredCard !== item.id ? 'opacity-40 scale-[0.98]' : 'opacity-100'}`}
                  >
                    <ExperienceCard item={item} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-8">
                {educationData.map((item) => (
                  <div
                    key={item.id}
                    className={`transition-all duration-500 ${hoveredCard !== null && hoveredCard !== item.id ? 'opacity-40 scale-[0.98]' : 'opacity-100'}`}
                  >
                    <EducationCard item={item} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <SectionSeparator fromDark={false} />
    </>
  );
};

export default ExperienceEducationSection;
  