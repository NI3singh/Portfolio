import React from 'react';
// Optional: import an image if you want to include one
import ProfileImage from '@/assets/Nitin_Profile_Image.png'; // Example path
import SectionSeparator from '@/components/SectionSeparator';


const About: React.FC = () => {
  return (
    <>
      <section id="about" className="bg-light-gray text-primary py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 md:mb-16 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-primary">
              About Me
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              A Glimpse into My Journey and Expertise in AI and Data.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-secondary to-accent mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12">
            {/* Optional: Image Section */}
            <div className="md:w-1/3 w-full flex justify-center animate-slide-in-left mb-8 md:mb-0">
              <div className="profile-image-container relative rounded-full shadow-md w-48 h-48 overflow-hidden group">
                {/* Gradient border that appears on hover */}
                <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-1">
                  <div className="w-full h-full rounded-full bg-gradient-to-r from-green-500 via-orange-500 to-blue-500 animate-spin-slow"></div>
                </div>
                <img 
                  src={ProfileImage}
                  alt="Nitin Singh" 
                  className="relative z-10 w-full h-full object-cover rounded-full" 
                />
              </div>
            </div>
            
            {/* Text Content Section */}
            <div className="md:w-full text-gray-800 text-left md:text-left animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              {/* Name and title card */}
              <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 mb-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl md:text-3xl font-bold text-transparent bg-gradient-to-r from-secondary to-primary bg-clip-text mb-2">
                  Nitin Singh
                </h3>
                <p className="text-secondary font-semibold text-lg">AI Developer & Data Analyst</p>
                <div className="flex items-center mt-2 text-gray-600">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  Surat, Gujarat
                </div>
              </div>
              <p className="mb-4 text-lg leading-relaxed">
                Hello! I'm Nitin Singh, an enthusiastic and detail-oriented AI Developer and Data Analyst based in Surat, Gujarat . I recently completed my B.Tech in Artificial Intelligence & Data Science from Uka Tarsadia University, achieving an aggregate CGPA of (8.68). My academic journey has equipped me with a strong foundation in machine learning, deep learning, computer vision, and natural language processing.
              </p>
              <p className="mb-4 text-lg leading-relaxed">
                I have a keen interest in developing robust machine learning pipelines and have applied MLOps concepts in projects like Student Performance Analysis. My experience extends to building practical applications such as movie-ticket booking chatbots using DialogFlow CX, and exploring time series analysis techniques like ARIMA and SARIMAX. I'm also proficient in Python and familiar with frameworks like Pandas, Numpy, Scikit-Learn, and PyTorch.
              </p>
              <p className="mb-6 text-lg leading-relaxed">
                While my resume highlights my skills as an AI Engineer, I am equally passionate about the entire data lifecycle, from collection and preparation to analysis and visualization for deriving meaningful insights. I'm driven by the challenge of solving complex problems and am always eager to learn and explore new technologies in the ever-evolving field of AI and data.
              </p>
              
              {/* Skills and Interests in enhanced cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gradient-to-br from-white/40 to-white/20 backdrop-blur-sm rounded-xl p-6 border border-white/30 hover:shadow-lg transition-all duration-300 group">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-secondary/20 rounded-lg flex items-center justify-center mr-3 group-hover:bg-secondary/30 transition-colors duration-300">
                      <svg className="w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-secondary">Key Skills</h4>
                  </div>
                  <ul className="space-y-2">
                    {[
                      "Machine Learning & Deep Learning",
                      "Computer Vision (YOLOv5, RetinaFace)",
                      "Natural Language Processing (NLP)",
                      "Data Analysis & Visualization (Power BI)",
                      "MLOps & Model Deployment (FastAPI, Gradio)"
                    ].map((skill, index) => (
                      <li key={index} className="flex items-center text-gray-700 hover:text-gray-900 transition-colors duration-200">
                        <div className="w-2 h-2 bg-secondary rounded-full mr-3 flex-shrink-0"></div>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-white/40 to-white/20 backdrop-blur-sm rounded-xl p-6 border border-white/30 hover:shadow-lg transition-all duration-300 group">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center mr-3 group-hover:bg-accent/30 transition-colors duration-300">
                      <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-accent">Interests</h4>
                  </div>
                  <ul className="space-y-2">
                    {[
                      "Exploring new AI Architectures",
                      "Generative AI (GenAI)",
                      "Robotics",
                      "World Affairs & Cricket"
                    ].map((interest, index) => (
                      <li key={index} className="flex items-center text-gray-700 hover:text-gray-900 transition-colors duration-200">
                        <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0"></div>
                        {interest}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Connect Button */}

              <div className="text-center md:text-left">
                <a 
                  href="#contact" 
                  className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white transition-all duration-300 bg-gradient-to-r from-secondary to-accent rounded-xl hover:from-accent hover:to-secondary transform hover:scale-105 hover:shadow-xl">
                  {/* Glowing Border Effect */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-secondary via-accent to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
                  <div className="absolute inset-0.5 rounded-xl bg-gradient-to-r from-secondary to-accent group-hover:from-accent group-hover:to-secondary transition-all duration-500"></div>
                  
                  {/* Moving Light Effect */}
                  <div className="absolute inset-0 rounded-xl overflow-hidden">
                    <div className="absolute -top-2 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform rotate-12 group-hover:translate-x-full transition-transform duration-1000"></div>
                  </div>
                  <span className="relative z-10 flex items-center">
                    Let's Connect
                    <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <SectionSeparator fromDark={false} />
    </>
  );
};

export default About;