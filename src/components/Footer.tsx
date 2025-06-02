import React from 'react';
import { ArrowUpCircleIcon } from '@heroicons/react/24/solid';
import { MapPin, Code } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const techStack = ['React', 'TypeScript', 'Tailwind', 'Next.js'];

  return (
    <footer className="bg-gray-900 text-white py-8 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          
          {/* Main Content */}
          <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
            
            {/* Left - Brand & Tech Stack */}
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start space-x-2 mb-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Code className="h-4 w-4 text-white" />
                </div>
                <span className="text-lg font-semibold">Nitin Singh</span>
              </div>
              <p className="text-gray-400 text-sm mb-2">
                Visionary AI Developer & Data Analyst shaping next-gen digital experiences
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-2">
                {techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 text-xs text-gray-300 bg-gray-800 rounded border border-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Right - Location & Back to Top */}
            <div className="text-center md:text-right space-y-4">
              <div className="inline-flex items-center space-x-2 text-gray-300">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">Surat, Gujarat, India</span>
              </div>
              
              <button
                onClick={scrollToTop}
                className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-200"
                aria-label="Scroll to top"
              >
                <span className="text-sm">Back to Top</span>
                <ArrowUpCircleIcon className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-6 pt-6 border-t border-gray-800 text-center">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Nitin Singh. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;