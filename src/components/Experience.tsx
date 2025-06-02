import React, { useState } from 'react';
import { BriefcaseIcon, AcademicCapIcon, CalendarIcon } from '@heroicons/react/24/outline';
import SectionSeparator from '@/components/SectionSeparator';

interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  location: string;
  duration: string;
  description?: string;
  responsibilities: string[];
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
}

const ExperienceEducationSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'experience' | 'education'>('experience');

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
        'Ensuring Proper Security implementation by adding feature “Authorized access only by Password-Protected-Link".',
        'Orchestrated version control workflows with Git/GitHub, reducing merge conflicts through strategic branching strategies.'
      ]
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
      ]
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
      ]
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
      ]
    },
    {
      id: 2,
      degree: 'Higher Secondary Certificate (HSC) - Science',
      institution: 'MT Jariwala Madhyamik Shala',
      location: 'Surat, Gujarat',
      duration: '2018 - 2021',
      grade: 'Subjects: PCM',
      achievements: [
        'Participated in District level science competitions and exhibitions and secured 2nd positions.',
        'Participated in various Games and Sports events at school level.',
        'Well-behaved and disciplined student with a keen interest in science and mathematics.',
      ]
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

  const ExperienceCard: React.FC<{ item: ExperienceItem; index: number }> = ({ item, index }) => (
    <div className="flex mb-12 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
      <div className="flex flex-col items-center mr-8">
        <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
          <BriefcaseIcon className="w-6 h-6 text-white" />
        </div>
        {index < experienceData.length - 1 && (
          <div className="w-0.5 h-20 bg-blue-200 mt-4"></div>
        )}
      </div>
      
      <div className="flex-1 bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-500">
        <h3 className="text-xl font-bold experience-title mb-2">{item.title}</h3>
        <div className="text-blue-600 font-semibold mb-1">{item.company} | {item.location}</div>
        <div className="flex items-center text-gray-600 mb-4">
          <CalendarIcon className="w-4 h-4 mr-2" />
          {item.duration}
        </div>
        
        {item.description && (
          <div className="text-gray-700 font-medium mb-3">{item.description}</div>
        )}
        
        <ul className="space-y-2">
          {item.responsibilities.map((resp, idx) => (
            <li key={idx} className="flex items-start text-gray-700">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
              {resp}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  const EducationCard: React.FC<{ item: EducationItem; index: number }> = ({ item, index }) => (
    <div className="flex mb-12 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
      <div className="flex flex-col items-center mr-8">
        <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center shadow-lg">
          <AcademicCapIcon className="w-6 h-6 text-white" />
        </div>
        {index < educationData.length - 1 && (
          <div className="w-0.5 h-20 bg-purple-200 mt-4"></div>
        )}
      </div>
      
      <div className="flex-1 bg-white rounded-lg shadow-lg p-6 border-l-4 border-purple-500">
        <h3 className="text-xl font-bold education-title mb-2">{item.degree}</h3>
        <div className="text-purple-600 font-semibold mb-1">{item.institution} | {item.location}</div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center text-gray-600">
            <CalendarIcon className="w-4 h-4 mr-2" />
            {item.duration}
          </div>
          {item.grade && (
            <div className="text-green-600 font-semibold">{item.grade}</div>
          )}
        </div>
        
        {item.description && (
          <div className="text-gray-700 font-medium mb-3">{item.description}</div>
        )}
        
        <ul className="space-y-2">
          {item.achievements.map((achievement, idx) => (
            <li key={idx} className="flex items-start text-gray-700">
              <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
              {achievement}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
  <>
    <section id="experience" className="bg-gray-50 py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up text-gray-900">
            {activeTab === 'experience' ? 'Professional Experience' : 'Educational Background'}
          </h2>
          <p
            className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up leading-relaxed"
            style={{ animationDelay: '0.2s' }}
          >
            {activeTab === 'experience'
              ? 'Experiences that defined my professional growth and skills.'
              : 'A timeline of my academic milestones and achievements.'}
          </p>
          <div
            className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-6 rounded-full animate-fade-in-up"
            style={{ animationDelay: '0.3s' }}
          ></div>
        </div>

        {/* Toggle Switch */}
        <div className="flex justify-center mb-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <div className="bg-white rounded-full p-2 shadow-lg border border-gray-200">
            <div className="flex relative">
              <button
                onClick={() => setActiveTab('education')}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center ${
                  activeTab === 'education'
                    ? 'bg-purple-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-purple-600'
                }`}
              >
                <AcademicCapIcon className="w-5 h-5 mr-2" />
                Education
              </button>
              <button
                onClick={() => setActiveTab('experience')}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center ${
                  activeTab === 'experience'
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                <BriefcaseIcon className="w-5 h-5 mr-2" />
                Experience
              </button>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          {activeTab === 'experience' ? (
            <div>
              {experienceData.map((item, index) => (
                <ExperienceCard key={item.id} item={item} index={index} />
              ))}
            </div>
          ) : (
            <div>
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
)};

export default ExperienceEducationSection;