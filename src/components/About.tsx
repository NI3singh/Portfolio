import React from 'react';
import SectionSeparator from '@/components/SectionSeparator';
import SectionHeading from '@/components/SectionHeading';

const skills = [
  'AI-Assisted Development',
  'Generative AI (GenAI) Engineering',
  'LLM Fine-tuning (LoRA, Quantization)',
  'RAG & Agentic Systems',
  'Machine Learning & Deep Learning',
  'Computer Vision (YOLOv5, RetinaFace)',
  'Natural Language Processing (NLP)',
  'MLOps & Deployment (FastAPI, LangChain, AWS)',
  'Data Analysis & Visualization (Power BI)',
];

const interests = [
  'Building software solutions (with or without AI)',
  'Robotics',
  'Open-Source Contribution',
  'World Affairs',
  'Cricket',
];

const About: React.FC = () => {
  return (
    <>
      <section id="about" className="relative bg-transparent text-text-primary py-20 md:py-28">
        <div className="container mx-auto px-6">
          {/* Header */}
          <SectionHeading
            eyebrow="Who I Am"
            watermark="ABOUT"
            subtitle="A Glimpse into My Journey and Expertise in AI and Data."
            className="mb-12 md:mb-16 animate-fade-in-up"
          >
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">Me</span>
          </SectionHeading>

          {/* Bento grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">

            {/* Bio card */}
            <div className="relative overflow-hidden md:col-span-2 lg:col-span-2 lg:row-span-2 flex flex-col bg-glass backdrop-blur-sm border border-border rounded-2xl p-8 hover:border-secondary/30 transition-colors duration-300 animate-fade-in-up">
              {/* decorative glow */}
              <div className="absolute -top-12 -right-12 w-44 h-44 bg-secondary/10 rounded-full blur-3xl pointer-events-none"></div>

              {/* Identity */}
              <div className="relative">
                <h3 className="text-3xl font-bold text-transparent bg-gradient-to-r from-secondary to-accent bg-clip-text inline-block">
                  Nitin Singh
                </h3>
                <p className="text-secondary font-medium mt-1">AI/ML Engineer · Generative AI</p>
                <div className="flex items-center gap-1.5 mt-2 text-text-secondary text-sm">
                  <svg className="w-4 h-4 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  Surat, India
                </div>
              </div>

              <div className="h-px bg-border my-6"></div>

              {/* Bio */}
              <div className="relative space-y-4 text-text-secondary leading-relaxed">
                <p className="text-lg">
                  I&apos;m Nitin Singh — an AI/ML Engineer based in Surat, India, with 2+ years of experience designing LLM-powered applications, fine-tuning large models, and building autonomous agentic systems. I hold a B.Tech in Artificial Intelligence &amp; Data Science from Uka Tarsadia University, graduating with a CGPA of 8.68 and a perfect 10.0 SGPA in my final semester.
                </p>
                <p>
                  My work spans the full stack of modern AI — from LoRA fine-tuning, 4-bit quantization, and RAG pipeline architecture to multi-agent orchestration and computer vision — shipped end-to-end with FastAPI, LangChain, and AWS. I&apos;ve fine-tuned Stable Diffusion for AI avatar generation, deployed agentic RAG chatbots, trained a Temporal Fusion Transformer for real-time financial forecasting, and co-authored an arXiv preprint on image restoration.
                </p>
                <p>
                  I move fast with AI-assisted development and care about turning research into clean, dependable products people actually use. I&apos;m driven by hard problems and always learning — most recently placing in the Top 5 at the IIT Bombay and IIT Gandhinagar hackathons.
                </p>
              </div>

              {/* CTA */}
              <a href="#contact" className="btn btn-primary group/btn mt-auto self-start px-6 py-3">
                Let&apos;s Connect
                <svg className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            {/* Key Skills card */}
            <div className="bg-glass backdrop-blur-sm border border-border rounded-2xl p-6 hover:border-secondary/30 transition-colors duration-300 animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-secondary/10 border border-secondary/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-secondary">Key Skills</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-medium px-3 py-1.5 rounded-full bg-secondary/[0.07] border border-secondary/20 text-text-primary hover:border-secondary/50 hover:text-text-primary transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Interests card */}
            <div className="bg-glass backdrop-blur-sm border border-border rounded-2xl p-6 hover:border-accent/30 transition-colors duration-300 animate-fade-in-up" style={{ animationDelay: '0.25s' }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-accent">Interests</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest) => (
                  <span
                    key={interest}
                    className="text-xs font-medium px-3 py-1.5 rounded-full bg-accent/[0.07] border border-accent/20 text-text-primary hover:border-accent/50 hover:text-text-primary transition-colors"
                  >
                    {interest}
                  </span>
                ))}
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
