import React from 'react';
import { CodeBracketIcon, ArrowTopRightOnSquareIcon, CheckCircleIcon } from '@heroicons/react/24/outline'; // Example icons
import SectionSeparator from '@/components/SectionSeparator';

interface Project {
  id: number;
  title: string;
  description: string[]; // Array of strings for bullet points or paragraphs
  technologies: string[];
  achievements?: string[]; // Optional achievements
  githubLink: string; // Placeholder for actual link
  imagePlaceholder?: string; // For a future image/gif
  animationDelay?: string;
}

const ProjectCard: React.FC<Project> = ({
  title,
  description,
  technologies,
  achievements,
  githubLink,
  animationDelay
}) => {
  return (
    <div 
      className="bg-gray-900/90 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-blue-500/20 flex flex-col h-full animate-fade-in-up hover:border-blue-400/40 transition-all duration-500 hover:shadow-blue-500/10 hover:-translate-y-1"
      style={{ animationDelay: animationDelay || '0s' }}
    >
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

      <div className="mt-auto pt-4 border-t border-gray-700/50">
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-all duration-300 hover:underline group"
        >
          View on GitHub
          <ArrowTopRightOnSquareIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
        </a>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const projectData: Project[] = [
    {
      id: 1,
      title: 'Vaccine Uptake Prediction Model',
      description: [
        'Developed a dual-prediction model to forecast individual likelihood of receiving XYZ and seasonal flu vaccines.',
        'Achieved 87% accuracy in predicting XYZ vaccine uptake, 23% above baseline.',
        'The goal of this project is to predict the likelihood of individuals receiving two types of vaccines.'
      ],
      technologies: ['Numpy', 'Sklearn', 'Random Forest Algorithm'],
      achievements: [
        'Accuracy:- 87% ',
        'Recieved Excellence Award for this project in GFG Hackathon.',
      ],
      githubLink: 'https://github.com/NI3singh/GFG-Hackathon', // Placeholder
      animationDelay: '0.1s'
    },
    {
      id: 2,
      title: 'Face Recognition Web Application (Find You)',
      description: [
        'This is a Flask-based web application for face recognition.',
        'Users can upload or capture photos to find matched faces from a dataset[cite: 13].',
        'The app also provides options to download all matched photos as a zip file[cite: 14].',
        'Ensuring Proper Security implementation by adding feature "Authorized access only by Password-Protected-Link"[cite: 15].',
        'Achieved 96.3% face recognition accuracy on a diverse dataset of 500+ images'
      ],
      technologies: ['Retina Face', 'Facenet', 'Flask'],
      achievements: [
        'Face Recognition Accuracy:- 96.3% .',
      ],
      githubLink: 'https://github.com/NI3singh/Find-You/tree/main', // Placeholder
      animationDelay: '0.2s'
    },
    {
      id: 3,
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
      githubLink: 'https://github.com/NI3singh/FINAL_YEAR_PROJECT-1', // Placeholder
      animationDelay: '0.3s'
    },
    {
      id: 4,
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
      githubLink: 'https://github.com/NI3singh/Image-to-text', // Placeholder for link from [cite: 20]
      animationDelay: '0.4s'
    },
    {
      id: 5,
      title: 'Emergency Assistance Tweet System',
      description: [
        'Developed a web-based application to automate emergency tweet posting and storage.',
        'Integrated Twitter API for real-time tweet posting and MySQL for secure data storage.',
      ],
      technologies: ['Node.js', 'Twitter API', 'HTML', 'CSS', 'JavaScript'],
      achievements: [
        'Automated 100+ emergency tweets with real-time posting, reducing response time by 60%',
      ],
      githubLink: 'https://github.com/NI3singh/IITGN-and-Odoo-Hackathon', // Placeholder for link from [cite: 23]
      animationDelay: '0.5s'
    },
    {
      id: 6,
      title: 'Solana Price Data Analysis',
      description: [
        'Constructed a comprehensive analysis pipeline processing 1,300+ days of Solana price data (01-01-2021 to 29-09-2024) in OHLCV format.',
        'Engineered 25+ technical indicators and executed advanced data cleaning techniques.',
        'Synthesized an enhanced dataset with 44 columns improving ML model predictive performance by 28%.'
      ],
      technologies: ['Data Engineering', 'Data Science', 'Data Analysis', 'Data Visualisation', 'Pandas', 'Numpy', 'Matplotlib'],
      achievements: [
        'Achieved 28% accuracy gain with 44-column dataset from 1,300 days of OHLCV data.',
      ],
      githubLink: 'https://github.com/NI3singh/Solana-Data-Analysis', // Placeholder for link from [cite: 23]
      animationDelay: '0.6s'
    },
  ];

  return (
    <>
      <section id="projects" className="bg-primary text-text-primary py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up">
              My Projects
            </h2>
            <p className="text-lg text-text-primary max-w-3xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              A selection of projects that demonstrate my skills in AI and Data Science.
            </p>
            <div className="w-24 h-1 bg-secondary mx-auto mt-4 animate-fade-in-up" style={{animationDelay: '0.3s'}}></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectData.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        </div>
      </section>
      <SectionSeparator fromDark={true} />
    </> 
  );
};

export default Projects;