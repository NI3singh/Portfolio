import React from 'react';
import { TrophyIcon, PencilSquareIcon, CodeBracketIcon, LightBulbIcon } from '@heroicons/react/24/outline';
import SectionSeparator from '@/components/SectionSeparator';

import quizWinnerImage from '@/assets/Win.JPG'; // Replace with your actual filename
import scriptWritingImage from '@/assets/0Q7A9268.JPG';
import tattvaHackathonImage from '@/assets/TattvaHackathon.jpg';
import finnovateImage from '@/assets/Finnovate Hackathon.jpg';

interface StatCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  description: string;
  animationDelay?: string;
  imageUrl?: string;
  imageAlt?: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon, title, value, description, animationDelay, imageUrl, imageAlt }) => {
  return (
    <div 
      className="group relative bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl shadow-2xl transform transition-all duration-500 hover:scale-105 hover:bg-white/10 hover:border-accent/30 animate-fade-in-up"
      style={{ animationDelay: animationDelay || '0s' }}
    >
      {/* Glass effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Glowing border effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-secondary/20 via-accent/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
      
      <div className="relative z-10">
        <div className="flex items-center text-accent mb-4">
          <div className="p-2 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors duration-300">
            {icon}
          </div>
          <h3 className="ml-3 text-xl font-semibold text-text-primary group-hover:text-white transition-colors duration-300">{title}</h3>
        </div>
        <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent mb-2 group-hover:from-accent group-hover:to-secondary transition-all duration-300">{value}</p>
        <p className="text-text-secondary text-sm group-hover:text-text-primary/80 transition-colors duration-300 mb-4">{description}</p>
        
        {/* Achievement Image */}
        {imageUrl && (
          <div className="mt-4 overflow-hidden rounded-lg border border-white/10 group-hover:border-accent/30 transition-colors duration-300">
            <img 
              src={imageUrl} 
              alt={imageAlt || title}
              className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
              decoding="async"
              style={{ 
                maxWidth: '100%',
                height: 'auto',
                aspectRatio: '16/9'
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

const Stats: React.FC = () => {
  const keyStats = [
    {
      icon: <TrophyIcon className="h-6 w-6" />,
      title: 'Quiz Competition Winner-2023',
      value: '1st Place',
      description: 'Winner in Quiz(Group) Competition at College Fest 2023',
      animationDelay: '0.1s',
      imageUrl: quizWinnerImage, // Replace with actual image path
      imageAlt: 'Quiz Competition Winner Certificate'
    },
    {
      icon: <CodeBracketIcon className="h-6 w-6" />,
      title: 'TattvaHackathon-2025',
      value: 'Runner Up',
      description: 'Runner Up in TattvaHackathon-2025 organized by CGPIT',
      animationDelay: '0.2s',
      imageUrl: tattvaHackathonImage, // Replace with actual image path
      imageAlt: 'TattvaHackathon Runner Up Certificate'
    },
    {
      icon: <PencilSquareIcon className="h-6 w-6" />,
      title: 'Script Writing Competition-2023',
      value: '3rd Rank',
      description: '3rd Rank in intercollege Script Writing competition',
      animationDelay: '0.3s',
      imageUrl: scriptWritingImage, // Replace with actual image path
      imageAlt: 'Script Writing Competition Certificate'
    },
    {
      icon: <LightBulbIcon className="h-6 w-6" />,
      title: 'IIT Gandhinagar Finnovate-2024',
      value: 'Selected',
      description: 'Selected in IIT Gandhinagar Finnovate Hackathon 2024 from 150+ Participants',
      animationDelay: '0.4s',
      imageUrl: finnovateImage, // Replace with actual image path
      imageAlt: 'IIT Gandhinagar Finnovate Hackathon Selection'
    },
  ];

  const skills = [
    'Python', 'JavaScript', 'Machine Learning', 'Deep Learning', 'Computer Vision', 
    'NLP', 'GenAI', 'Pandas', 'Numpy', 'Scikit-Learn', 'PyTorch', 'FastAPI', 
    'Power BI', 'MLOps', 'DialogFlow CX', 'TensorFlow', 'React', 'Node.js'
  ];

  // Duplicate skills for seamless loop
  const duplicatedSkills = [...skills, ...skills];

  return (
    <>
      <section id="stats" className="relative bg-primary text-text-primary py-16 md:py-24 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-secondary/5 rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/5 rounded-full blur-2xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up bg-gradient-to-r from-white via-accent to-white bg-clip-text text-transparent">
              My Achievements
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              Highlighting my performance in competitions and core areas of expertise.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-secondary to-accent mx-auto mt-4 animate-fade-in-up rounded-full" style={{animationDelay: '0.3s'}}></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-20">
            {keyStats.map((stat, index) => (
              <StatCard
                key={index}
                icon={stat.icon}
                title={stat.title}
                value={stat.value}
                description={stat.description}
                animationDelay={stat.animationDelay}
                imageUrl={stat.imageUrl}
                imageAlt={stat.imageAlt}
              />
            ))}
          </div>
          
          <div className="mt-16 text-center animate-fade-in-up" style={{animationDelay: '0.5s'}}>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up bg-gradient-to-r from-white via-accent to-white bg-clip-text text-transparent">
              Core Technical Skills
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-secondary to-accent mx-auto mb-6 animate-fade-in-up rounded-full" style={{animationDelay: '0.3s'}}></div>
            
            {/* Animated Skills Rail */}
            <div className="relative overflow-hidden py-4 pause-on-hover">
              {/* Gradient masks for smooth edges */}
              <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-primary to-transparent z-10"></div>
              <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-primary to-transparent z-10"></div>
              
              <div className="scrolling-wrapper flex animate-scroll">
                {duplicatedSkills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 mx-3 group cursor-pointer"
                  >
                    <div className="relative px-6 py-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:bg-white/10 hover:border-accent/30">
                      {/* Glowing effect */}
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-secondary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                      
                      {/* Glass overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      <span className="relative z-10 text-sm font-medium bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent group-hover:from-white group-hover:to-accent whitespace-nowrap">
                        {skill}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <SectionSeparator fromDark={true} />
    </>
  );
};

export default Stats;