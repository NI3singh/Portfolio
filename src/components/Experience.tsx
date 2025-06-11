import React, { useState } from 'react';
import { BriefcaseIcon, AcademicCapIcon, CalendarIcon, MapPinIcon, TrophyIcon } from '@heroicons/react/24/outline';
import SectionSeparator from '@/components/SectionSeparator';

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

const ExperienceEducationSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'experience' | 'education'>('experience');
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const experienceData: ExperienceItem[] = [
    {
      id: 1,
      title: 'Junior AI/ML Engineer',
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
      title: 'AI/ML Engineer Intern',
      company: 'JBcodeapp',
      location: 'Surat, Gujarat',
      duration: 'May 2024 - June 2024',
      description: 'Project: Student Performance Analysis | Python, Numpy',
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
      description: 'Project: Movie-Ticket Booking Chatbot | DialogFlow CX',
      responsibilities: [
        'Developed an intelligent chatbot for movie ticket booking using DialogFlow CX.',
        'Implemented natural language processing to handle user queries and booking workflows.',
        'Identified and resolved 50+ critical bugs across 4 web applications through systematic testing methodologies.'
      ],
      technologies: ['DialogFlow CX', 'NLP', 'JavaScript', 'Node.js', 'Testing'],
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
    }
  ];

  const TechnologyBadge: React.FC<{ tech: string }> = ({ tech }) => (
    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 border border-blue-200 hover:from-blue-200 hover:to-purple-200 transition-all duration-300 transform hover:scale-105">
      {tech}
    </span>
  );

  const SubjectBadge: React.FC<{ subject: string }> = ({ subject }) => (
    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 border border-purple-200 hover:from-purple-200 hover:to-pink-200 transition-all duration-300 transform hover:scale-105">
      {subject}
    </span>
  );

  const ExperienceCard: React.FC<{ item: ExperienceItem; index: number }> = ({ item, index }) => (
    <div className="flex mb-16 group">
      {/* Timeline */}
      <div className="flex flex-col items-center mr-8 relative">
        <div className={`w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center shadow-xl transform transition-all duration-500 group-hover:scale-110 group-hover:shadow-2xl ${hoveredCard === item.id ? 'ring-4 ring-blue-300 ring-opacity-50' : ''}`}>
          <BriefcaseIcon className="w-8 h-8 text-white" />
        </div>
        {index < experienceData.length - 1 && (
          <div className="w-1 h-24 bg-gradient-to-b from-blue-400 to-blue-200 mt-6 rounded-full relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-600 to-blue-400 transform translate-y-full group-hover:translate-y-0 transition-transform duration-700"></div>
          </div>
        )}
      </div>
      
      {/* Card Content */}
      <div 
        className="flex-1 bg-white rounded-xl shadow-lg hover:shadow-2xl p-8 border-l-4 border-blue-500 transform transition-all duration-500 hover:-translate-y-2 cursor-pointer relative overflow-hidden group"
        onMouseEnter={() => setHoveredCard(item.id)}
        onMouseLeave={() => setHoveredCard(null)}
      >
        {/* Background Animation */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        <div className="relative z-10">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors duration-300">
                {item.title}
              </h3>
              <div className="text-blue-600 font-semibold mb-2 flex items-center">
                <span className="mr-4">{item.company}</span>
                <span className="flex items-center text-gray-500">
                  <MapPinIcon className="w-4 h-4 mr-1" />
                  {item.location}
                </span>
              </div>
              <div className="flex items-center text-gray-600 mb-4">
                <CalendarIcon className="w-5 h-5 mr-2 text-blue-500" />
                <span className="font-medium">{item.duration}</span>
              </div>
            </div>
          </div>
          
          {/* Project Description */}
          {item.description && (
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 mb-6 border-l-4 border-blue-300">
              <p className="text-gray-800 font-medium italic">{item.description}</p>
            </div>
          )}
          
          {/* Technologies */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">Technologies Used</h4>
            <div className="flex flex-wrap gap-2">
              {item.technologies.map((tech, idx) => (
                <TechnologyBadge key={idx} tech={tech} />
              ))}
            </div>
          </div>
          
          {/* Responsibilities */}
          <div>
            <h4 className="text-sm font-semibold text-gray-700 mb-4 uppercase tracking-wide">Key Achievements</h4>
            <ul className="space-y-3">
              {item.responsibilities.map((resp, idx) => (
                <li key={idx} className="flex items-start text-gray-700 group/item">
                  <span className="w-3 h-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mr-4 mt-1.5 flex-shrink-0 transform transition-all duration-300 group-hover/item:scale-125"></span>
                  <span className="leading-relaxed">{resp}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  const EducationCard: React.FC<{ item: EducationItem; index: number }> = ({ item, index }) => (
    <div className="flex mb-16 group">
      {/* Timeline */}
      <div className="flex flex-col items-center mr-8 relative">
        <div className={`w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center shadow-xl transform transition-all duration-500 group-hover:scale-110 group-hover:shadow-2xl ${hoveredCard === item.id ? 'ring-4 ring-purple-300 ring-opacity-50' : ''}`}>
          <AcademicCapIcon className="w-8 h-8 text-white" />
        </div>
        {index < educationData.length - 1 && (
          <div className="w-1 h-24 bg-gradient-to-b from-purple-400 to-purple-200 mt-6 rounded-full relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-purple-600 to-purple-400 transform translate-y-full group-hover:translate-y-0 transition-transform duration-700"></div>
          </div>
        )}
      </div>
      
      {/* Card Content */}
      <div 
        className="flex-1 bg-white rounded-xl shadow-lg hover:shadow-2xl p-8 border-l-4 border-purple-500 transform transition-all duration-500 hover:-translate-y-2 cursor-pointer relative overflow-hidden group"
        onMouseEnter={() => setHoveredCard(item.id)}
        onMouseLeave={() => setHoveredCard(null)}
      >
        {/* Background Animation */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        <div className="relative z-10">
          {/* Header */}
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-purple-700 transition-colors duration-300">
              {item.degree}
            </h3>
            <div className="text-purple-600 font-semibold mb-2 flex items-center">
              <span className="mr-4">{item.institution}</span>
              <span className="flex items-center text-gray-500">
                <MapPinIcon className="w-4 h-4 mr-1" />
                {item.location}
              </span>
            </div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center text-gray-600">
                <CalendarIcon className="w-5 h-5 mr-2 text-purple-500" />
                <span className="font-medium">{item.duration}</span>
              </div>
              {item.grade && (
                <div className="flex items-center bg-green-100 px-4 py-2 rounded-full">
                  <TrophyIcon className="w-5 h-5 mr-2 text-green-600" />
                  <span className="text-green-700 font-bold">{item.grade}</span>
                </div>
              )}
            </div>
          </div>
          
          {/* Subjects */}
          {item.subjects && (
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">Key Subjects</h4>
              <div className="flex flex-wrap gap-2">
                {item.subjects.map((subject, idx) => (
                  <SubjectBadge key={idx} subject={subject} />
                ))}
              </div>
            </div>
          )}
          
          {/* Description */}
          {item.description && (
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-4 mb-6 border-l-4 border-purple-300">
              <p className="text-gray-800 font-medium italic">{item.description}</p>
            </div>
          )}
          
          {/* Achievements */}
          <div>
            <h4 className="text-sm font-semibold text-gray-700 mb-4 uppercase tracking-wide">Achievements & Activities</h4>
            <ul className="space-y-3">
              {item.achievements.map((achievement, idx) => (
                <li key={idx} className="flex items-start text-gray-700 group/item">
                  <span className="w-3 h-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mr-4 mt-1.5 flex-shrink-0 transform transition-all duration-300 group-hover/item:scale-125"></span>
                  <span className="leading-relaxed">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <section id="experience" className="bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 py-20 md:py-28 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600 to-purple-600"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up text-gray-900">
              {activeTab === 'experience' ? 'Professional Journey' : 'Educational Foundation'}
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {activeTab === 'experience'
                ? 'Experiences that defined my professional growth and skills.'
                : 'A timeline of my academic milestones and achievements.'}
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-secondary to-accent mx-auto mt-4 animate-fade-in-up rounded-full" style={{animationDelay: '0.3s'}}></div>
          </div>

          {/* Enhanced Toggle Switch */}
          <div className="flex justify-center mb-16">
            <div className="bg-white rounded-2xl p-3 shadow-2xl border border-gray-200 backdrop-blur-sm">
              <div className="flex relative">
                <button
                  onClick={() => setActiveTab('education')}
                  className={`px-8 py-4 rounded-xl font-semibold transition-all duration-500 flex items-center transform ${
                    activeTab === 'education'
                      ? 'bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-xl scale-105'
                      : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'
                  }`}
                >
                  <AcademicCapIcon className="w-6 h-6 mr-3" />
                  Education
                </button>
                <button
                  onClick={() => setActiveTab('experience')}
                  className={`px-8 py-4 rounded-xl font-semibold transition-all duration-500 flex items-center transform ${
                    activeTab === 'experience'
                      ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-xl scale-105'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  <BriefcaseIcon className="w-6 h-6 mr-3" />
                  Experience
                </button>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="max-w-5xl mx-auto">
            {activeTab === 'experience' ? (
              <div className="space-y-8">
                {experienceData.map((item, index) => (
                  <ExperienceCard key={item.id} item={item} index={index} />
                ))}
              </div>
            ) : (
              <div className="space-y-8">
                {educationData.map((item, index) => (
                  <EducationCard key={item.id} item={item} index={index} />
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