
import React from 'react';
import { Github, Linkedin, Twitter, Crosshair } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-cod-black py-12 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <Crosshair className="w-6 h-6 text-cod-green mr-2" />
              <span className="font-orbitron text-xl font-bold tracking-wider text-white">
                OPER<span className="text-cod-green">ATIVE</span>
              </span>
            </div>
            <p className="text-cod-light-gray mb-6 max-w-md">
              Elite web developer specialized in tactical digital solutions. Deployed for critical missions in the frontend and backend battlefields.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-sm bg-cod-dark-gray flex items-center justify-center hover:bg-cod-green/20 transition-colors">
                <Github className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-sm bg-cod-dark-gray flex items-center justify-center hover:bg-cod-green/20 transition-colors">
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-sm bg-cod-dark-gray flex items-center justify-center hover:bg-cod-green/20 transition-colors">
                <Twitter className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-orbitron text-lg mb-4">QUICK NAVIGATION</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-cod-light-gray hover:text-cod-green transition-colors">Home Base</a>
              </li>
              <li>
                <a href="#about" className="text-cod-light-gray hover:text-cod-green transition-colors">Profile</a>
              </li>
              <li>
                <a href="#skills" className="text-cod-light-gray hover:text-cod-green transition-colors">Tactical Skills</a>
              </li>
              <li>
                <a href="#missions" className="text-cod-light-gray hover:text-cod-green transition-colors">Mission History</a>
              </li>
              <li>
                <a href="#contact" className="text-cod-light-gray hover:text-cod-green transition-colors">Command Center</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-orbitron text-lg mb-4">MISSION SECTORS</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-cod-light-gray hover:text-cod-green transition-colors">Web Development</a>
              </li>
              <li>
                <a href="#" className="text-cod-light-gray hover:text-cod-green transition-colors">UI/UX Design</a>
              </li>
              <li>
                <a href="#" className="text-cod-light-gray hover:text-cod-green transition-colors">Mobile Applications</a>
              </li>
              <li>
                <a href="#" className="text-cod-light-gray hover:text-cod-green transition-colors">Software Engineering</a>
              </li>
              <li>
                <a href="#" className="text-cod-light-gray hover:text-cod-green transition-colors">System Architecture</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-cod-gray pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-cod-light-gray text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} OPERATIVE. All rights secured.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-cod-light-gray hover:text-cod-green text-sm transition-colors">
              Privacy Protocol
            </a>
            <a href="#" className="text-cod-light-gray hover:text-cod-green text-sm transition-colors">
              Terms of Operation
            </a>
            <a href="#" className="text-cod-light-gray hover:text-cod-green text-sm transition-colors">
              Mission Statement
            </a>
          </div>
        </div>
      </div>
      
      {/* Background grid effect */}
      <div className="absolute inset-0 flex flex-wrap opacity-5 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="w-1/5 h-1/5 border border-cod-green"></div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
