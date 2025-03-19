
import React, { useState, useEffect } from 'react';
import Terminal from './ui/Terminal';
import { ArrowRight, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);
  
  const terminalLines = [
    "Initializing systems...",
    "Loading profile data...",
    "Running security protocols...",
    "Access granted.",
    "Welcome, operator.",
    "Mission briefing available.",
    "Standing by for your command."
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 pb-8">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-cod-black/80 pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-700 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <div className="tactical-border">
              <span className="inline-block px-3 py-1 bg-cod-green/20 text-cod-green text-xs mb-4 font-orbitron">
                TOP CLEARANCE
              </span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 font-orbitron">
                TACTICAL <span className="text-cod-green">DEVELOPER</span>
              </h1>
              
              <h2 className="text-xl md:text-2xl text-cod-light-gray mb-6 font-rajdhani">
                SPECIALIZED IN MISSION-CRITICAL OPERATIONS
              </h2>
              
              <p className="text-white/80 mb-8 max-w-lg">
                Front-line web developer with expertise in tactical UI/UX deployments and strategic problem-solving. Ready for your mission requirements.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#missions" 
                  className="tactical-btn group"
                >
                  VIEW MISSIONS <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                
                <a 
                  href="#about" 
                  className="px-4 py-2 bg-transparent border border-white/30 text-white hover:bg-white/5 transition-colors duration-300 font-orbitron"
                >
                  PROFILE DETAILS
                </a>
              </div>
            </div>
          </div>
          
          <div className={`transition-all duration-700 delay-300 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <Terminal lines={terminalLines} className="shadow-lg shadow-cod-green/10" />
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <p className="text-white/50 text-sm mb-2 font-orbitron">SCROLL FOR INTEL</p>
        <ChevronDown className="w-6 h-6 text-cod-green animate-bounce" />
      </div>
    </section>
  );
};

export default Hero;
