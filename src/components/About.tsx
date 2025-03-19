
import React from 'react';
import { User, Briefcase, Globe, Cpu, Code } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="section-container">
      <div className="max-w-3xl mx-auto mb-16">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-cod-green/20 text-cod-green text-xs mb-4 font-orbitron">
            PERSONNEL FILE
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">OPERATIVE PROFILE</h2>
          <div className="h-0.5 w-20 bg-cod-green mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="neo-card p-6 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-sm bg-cod-green/20 flex items-center justify-center mr-4">
                <User className="w-5 h-5 text-cod-green" />
              </div>
              <h3 className="text-xl font-orbitron text-white">IDENTITY</h3>
            </div>
            <p className="text-cod-light-gray mb-4">Elite developer with tactical approach to problem-solving. Specialized in creating seamless digital experiences with military precision.</p>
            <div className="flex flex-col space-y-2 text-cod-light-gray">
              <div className="flex items-baseline">
                <span className="text-cod-green font-mono mr-2">&gt;</span>
                <span className="text-white/70 w-24">Codename:</span>
                <span>Operative</span>
              </div>
              <div className="flex items-baseline">
                <span className="text-cod-green font-mono mr-2">&gt;</span>
                <span className="text-white/70 w-24">Status:</span>
                <span>Active Duty</span>
              </div>
              <div className="flex items-baseline">
                <span className="text-cod-green font-mono mr-2">&gt;</span>
                <span className="text-white/70 w-24">Experience:</span>
                <span>5+ Years</span>
              </div>
            </div>
          </div>
          
          <div className="neo-card p-6 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-sm bg-cod-orange/20 flex items-center justify-center mr-4">
                <Briefcase className="w-5 h-5 text-cod-orange" />
              </div>
              <h3 className="text-xl font-orbitron text-white">SPECIALIZATION</h3>
            </div>
            <p className="text-cod-light-gray mb-4">Skilled in tactical deployment of web applications with secure, responsive interfaces and optimized performance.</p>
            <div className="flex flex-col space-y-2 text-cod-light-gray">
              <div className="flex items-baseline">
                <span className="text-cod-orange font-mono mr-2">&gt;</span>
                <span className="text-white/70 w-24">Primary:</span>
                <span>Frontend Development</span>
              </div>
              <div className="flex items-baseline">
                <span className="text-cod-orange font-mono mr-2">&gt;</span>
                <span className="text-white/70 w-24">Secondary:</span>
                <span>UI/UX Design</span>
              </div>
              <div className="flex items-baseline">
                <span className="text-cod-orange font-mono mr-2">&gt;</span>
                <span className="text-white/70 w-24">Support:</span>
                <span>Backend Integration</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="neo-card p-6 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 rounded-sm bg-cod-green/20 flex items-center justify-center mr-3">
                <Globe className="w-4 h-4 text-cod-green" />
              </div>
              <h3 className="text-lg font-orbitron text-white">DEPLOYMENT</h3>
            </div>
            <p className="text-cod-light-gray">Strategic implementation of web solutions with global reach and accessibility.</p>
          </div>
          
          <div className="neo-card p-6 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 rounded-sm bg-cod-green/20 flex items-center justify-center mr-3">
                <Cpu className="w-4 h-4 text-cod-green" />
              </div>
              <h3 className="text-lg font-orbitron text-white">SYSTEMS</h3>
            </div>
            <p className="text-cod-light-gray">Proficient in multiple frameworks and platforms, adapting to any technical environment.</p>
          </div>
          
          <div className="neo-card p-6 animate-fade-in-up" style={{ animationDelay: '500ms' }}>
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 rounded-sm bg-cod-green/20 flex items-center justify-center mr-3">
                <Code className="w-4 h-4 text-cod-green" />
              </div>
              <h3 className="text-lg font-orbitron text-white">PROTOCOLS</h3>
            </div>
            <p className="text-cod-light-gray">Following best practice protocols to ensure secure, scalable, and maintainable code.</p>
          </div>
        </div>
      </div>
      
      <div className="relative mx-auto w-full max-w-4xl">
        <div className="absolute -top-6 -left-6 w-12 h-12 border-t-2 border-l-2 border-cod-green opacity-50"></div>
        <div className="absolute -bottom-6 -right-6 w-12 h-12 border-b-2 border-r-2 border-cod-green opacity-50"></div>
        
        <div className="bg-skull-green bg-cover bg-center h-80 rounded">
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-r from-cod-black/80 via-transparent to-cod-black/80">
            <div className="text-center p-6 glass rounded max-w-lg" data-text="COMBAT READY">
              <h3 className="text-2xl font-bold mb-3 text-white glitch-text" data-text="COMBAT READY">COMBAT READY</h3>
              <p className="text-white/80">
                Equipped with cutting-edge development skills and battle-tested experience to take on the most challenging missions in the digital battlefield.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
