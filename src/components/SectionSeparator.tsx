import React from 'react';

const SectionSeparator = ({ fromDark = true, className = "" }) => {
  return (
    <div className={`relative w-full h-32 overflow-hidden ${className}`}>
      {/* Main gradient background */}
      <div className={`absolute inset-0 ${
        fromDark 
          ? 'bg-gradient-to-b from-black via-gray-800 to-gray-100' 
          : 'bg-gradient-to-b from-gray-100 via-gray-800 to-black'
      }`}></div>
      
      {/* Animated wave layers */}
      <div className="absolute inset-0">
        {/* Wave 1 */}
        <svg 
          className="absolute bottom-0 w-full h-24 animate-pulse" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path 
            d="M0,60 C300,120 600,0 900,60 C1050,90 1150,30 1200,60 L1200,120 L0,120 Z" 
            fill={fromDark ? "rgba(243, 244, 246, 0.3)" : "rgba(0, 0, 0, 0.3)"}
          />
        </svg>
        
        {/* Wave 2 */}
        <svg 
          className="absolute bottom-0 w-full h-20" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
          style={{ animation: 'wave 8s ease-in-out infinite' }}
        >
          <path 
            d="M0,80 C200,20 400,100 600,50 C800,0 1000,80 1200,40 L1200,120 L0,120 Z" 
            fill={fromDark ? "rgba(243, 244, 246, 0.2)" : "rgba(0, 0, 0, 0.2)"}
          />
        </svg>
        
        {/* Wave 3 */}
        <svg 
          className="absolute bottom-0 w-full h-16" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
          style={{ animation: 'wave 12s ease-in-out infinite reverse' }}
        >
          <path 
            d="M0,40 C150,80 350,20 500,60 C650,100 850,40 1000,70 C1100,85 1150,65 1200,70 L1200,120 L0,120 Z" 
            fill={fromDark ? "rgba(243, 244, 246, 0.1)" : "rgba(0, 0, 0, 0.1)"}
          />
        </svg>
      </div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 rounded-full ${
              fromDark ? 'bg-white/20' : 'bg-black/20'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>
      
      {/* Central divider line with glow */}
      <div className="absolute top-1/2 left-0 right-0 h-px transform -translate-y-1/2">
        <div className={`h-full bg-gradient-to-r ${
          fromDark 
            ? 'from-transparent via-white/50 to-transparent' 
            : 'from-transparent via-black/50 to-transparent'
        }`}></div>
        <div className={`absolute top-0 left-1/2 w-32 h-px transform -translate-x-1/2 ${
          fromDark ? 'bg-white shadow-white' : 'bg-black shadow-black'
        } shadow-lg animate-pulse`}></div>
      </div>
    </div>
  );
};

export default SectionSeparator;