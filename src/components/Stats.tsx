import React from 'react';
import { TrophyIcon, PencilSquareIcon, CodeBracketIcon, LightBulbIcon } from '@heroicons/react/24/outline';
import SectionSeparator from '@/components/SectionSeparator';
import SectionHeading from '@/components/SectionHeading';

import quizWinnerImage from '@/assets/Win.webp';
import scriptWritingImage from '@/assets/ScriptWriting.webp';
import tattvaHackathonImage from '@/assets/TattvaHackathon.webp';
import finnovateImage from '@/assets/Finnovate.webp';
import iitgcertificateImage from '@/assets/IITG_Certificate.webp';

interface StatCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  description: string;
  animationDelay?: string;
  imageUrl?: string;
  imageAlt?: string;
  showWinnerTag?: boolean;
}

const StatCard: React.FC<StatCardProps> = ({
  icon,
  title,
  value,
  description,
  animationDelay,
  imageUrl,
  imageAlt,
}) => {
  return (
    <div
      className="group relative flex flex-col h-full bg-surface/60 backdrop-blur-xl border border-glass/10 rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:bg-surface/80 hover:border-secondary/30 hover:shadow-secondary/10 animate-fade-in-up"
      style={{ animationDelay: animationDelay || '0s' }}
    >
      {/* Image Section - Top Half */}
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent z-10" />
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={imageAlt || title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div className="w-full h-full bg-surface-2 flex items-center justify-center">
            <TrophyIcon className="w-12 h-12 text-text-secondary" />
          </div>
        )}

        {/* Floating Icon */}
        <div className="absolute bottom-4 left-6 z-20 p-3 bg-surface/90 backdrop-blur-md border border-glass/10 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
          <div className="text-secondary group-hover:text-accent transition-colors">
            {icon}
          </div>
        </div>
      </div>

      {/* Content Section - Bottom Half */}
      <div className="flex-grow p-6 pt-2 flex flex-col relative z-10">
        <div className="mb-1">
          <h3 className="text-lg font-bold text-text-primary group-hover:text-secondary transition-colors duration-300 line-clamp-1">
            {title}
          </h3>
        </div>

        <div className="mb-3">
          <span className="inline-block text-2xl font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
            {value}
          </span>
        </div>

        <p className="text-sm text-text-secondary leading-relaxed group-hover:text-text-primary transition-colors duration-300">
          {description}
        </p>

        {/* Hover Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
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
      imageUrl: quizWinnerImage,
      imageAlt: 'Quiz Competition Winner Certificate',
      showWinnerTag: true
    },
    {
      icon: <CodeBracketIcon className="h-6 w-6" />,
      title: 'TattvaHackathon-2025',
      value: 'Runner Up',
      description: 'Runner Up in TattvaHackathon-2025 organized by CGPIT',
      animationDelay: '0.2s',
      imageUrl: tattvaHackathonImage,
      imageAlt: 'TattvaHackathon Runner Up Certificate'
    },
    {
      icon: <TrophyIcon className="h-6 w-6" />,
      title: 'Summer Analytics (IIT Guwahati)',
      value: 'Top 10',
      description: 'Certificate of Excellence for finishing in top 10 of all participants',
      animationDelay: '0.3s',
      imageUrl: iitgcertificateImage,
      imageAlt: 'Summer Analytics IIT Guwahati Certificate'
    },
    {
      icon: <PencilSquareIcon className="h-6 w-6" />,
      title: 'Script Writing Competition-2023',
      value: '3rd Rank',
      description: '3rd Rank in intercollege Script Writing competition',
      animationDelay: '0.4s',
      imageUrl: scriptWritingImage,
      imageAlt: 'Script Writing Competition Certificate'
    },
    {
      icon: <LightBulbIcon className="h-6 w-6" />,
      title: 'IIT Gandhinagar Finnovate-2024',
      value: 'Selected',
      description: 'Selected in IIT Gandhinagar Finnovate Hackathon 2024 from 150+ Participants',
      animationDelay: '0.5s',
      imageUrl: finnovateImage,
      imageAlt: 'IIT Gandhinagar Finnovate Hackathon Selection'
    },
  ];

  const skills = [
    'Python', 'JavaScript', 'Machine Learning', 'Data Analytics', 'Deep Learning', 'Computer Vision', 'Exploratory Data Analysis (EDA)',
    'NLP', 'GenAI', 'Time Series Analysis', 'Pandas', 'Numpy', 'Scikit-Learn', 'PyTorch', 'FastAPI', 'SQL',
    'Power BI', 'MLOps', 'DialogFlow CX', 'TensorFlow', 'React', 'Node.js', 'Amazon Web Services (AWS)', 'Git', 'Google Cloud Platform (GCP)'
  ];

  // Duplicate skills for seamless loop
  const duplicatedSkills = [...skills, ...skills];

  return (
    <>
      <section id="stats" className="relative bg-transparent text-text-primary py-20 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 bg-secondary/5 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-20 right-10 w-64 h-64 bg-accent/5 rounded-full blur-[100px]"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Achievements Section */}
          <SectionHeading
            eyebrow="Recognition"
            watermark="AWARDS"
            subtitle="Highlighting my performance in competitions and core areas of expertise."
            className="mb-16 animate-fade-in-up"
          >
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">Achievements</span>
          </SectionHeading>

          {/* 3-Column Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-24 max-w-7xl mx-auto">
            {keyStats.map((stat, index) => (
              <div
                key={index}
                className={`${
                  // Logic to center the last 2 items on the bottom row in a 3-column layout
                  index >= 3 ? 'lg:col-span-1.5 lg:w-[calc(100%)] lg:mx-auto' : ''
                  } ${
                  // Special handling for the 4th item to push it to center-left
                  index === 3 ? 'lg:ml-auto' : ''
                  } ${
                  // Special handling for the 5th item to push it to center-right
                  index === 4 ? 'lg:mr-auto' : ''
                  }`}
              >
                {/* 
                    Note: The above grid logic is a bit complex to get perfect centering for 5 items in 3 cols.
                    A simpler approach for 5 items in 3 cols is just standard grid flow, 
                    but centering the last row requires flex or specific grid placement.
                    Let's try a cleaner Flex wrap approach for the container or just standard grid.
                    Standard grid is safer. Let's revert to standard grid but use a wrapper for the last row if we want centering.
                    Actually, standard grid-cols-3 will put 3 on top, 2 on bottom left-aligned.
                    To center the bottom 2, we can use flex for the container or specific classes.
                    Let's stick to a clean grid-cols-1 md:grid-cols-2 lg:grid-cols-3.
                    The 2 items on the bottom will be left-aligned by default.
                    To center them, we can make the last two items span differently or use flex.
                    Let's use a Flex container with wrap and justify-center. It handles 5 items perfectly (3 top, 2 bottom centered).
                 */}
              </div>
            ))}
          </div>

          {/* Re-implementing the list using Flexbox for perfect centering of 5 items */}
          <div className="flex flex-wrap justify-center gap-6 lg:gap-8 mb-24 max-w-7xl mx-auto">
            {keyStats.map((stat, index) => (
              <div
                key={index}
                className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-md"
              >
                <StatCard
                  icon={stat.icon}
                  title={stat.title}
                  value={stat.value}
                  description={stat.description}
                  animationDelay={stat.animationDelay}
                  imageUrl={stat.imageUrl}
                  imageAlt={stat.imageAlt}
                  showWinnerTag={stat.showWinnerTag}
                />
              </div>
            ))}
          </div>

          {/* Core Technical Skills Section */}
          <div className="mt-20 text-center animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <SectionHeading
              as="h3"
              eyebrow="Tech Stack"
              watermark="SKILLS"
              className="mb-8"
            >
              Core Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">Skills</span>
            </SectionHeading>

            {/* Animated Skills Rail — full-bleed, edge-faded, seamless loop */}
            <div className="relative left-1/2 -translate-x-1/2 w-screen overflow-hidden py-6 marquee-mask">
              <div className="scrolling-wrapper flex w-max animate-scroll">
                {duplicatedSkills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 mx-3 group cursor-pointer"
                  >
                    <div className="relative px-6 py-3 bg-surface/50 backdrop-blur-md border border-glass/10 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:bg-secondary/10 hover:border-secondary/30">
                      <span className="relative z-10 text-sm font-medium text-text-primary group-hover:text-secondary whitespace-nowrap transition-colors">
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