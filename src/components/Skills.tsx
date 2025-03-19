
import React from 'react';
import SkillBadge from './ui/SkillBadge';
import { Shield, Target, Zap, Server, Layout, Lock } from 'lucide-react';

const Skills: React.FC = () => {
  const frontendSkills = [
    { name: 'HTML/CSS', level: 9 },
    { name: 'JavaScript', level: 9 },
    { name: 'React', level: 8 },
    { name: 'TypeScript', level: 8 },
    { name: 'Tailwind CSS', level: 9 },
    { name: 'Redux', level: 7 }
  ];
  
  const backendSkills = [
    { name: 'Node.js', level: 7 },
    { name: 'Express', level: 7 },
    { name: 'MongoDB', level: 6 },
    { name: 'SQL', level: 6 },
    { name: 'Firebase', level: 7 },
    { name: 'REST API', level: 8 }
  ];
  
  const otherSkills = [
    { name: 'Git/GitHub', level: 8 },
    { name: 'UI/UX Design', level: 7 },
    { name: 'Figma', level: 7 },
    { name: 'Testing', level: 6 },
    { name: 'Performance Optimization', level: 7 },
    { name: 'Responsive Design', level: 9 }
  ];

  return (
    <section id="skills" className="section-container bg-cod-dark-gray/30">
      <div className="text-center mb-16">
        <span className="inline-block px-3 py-1 bg-cod-green/20 text-cod-green text-xs mb-4 font-orbitron">
          COMBAT ABILITIES
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">TACTICAL SKILLSET</h2>
        <div className="h-0.5 w-20 bg-cod-green mx-auto mb-6"></div>
        <p className="text-white/70 max-w-2xl mx-auto">
          Armed with a diverse range of development skills for any mission scenario. Specialized in front-end warfare with supporting capabilities in back-end operations.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="animate-fade-in-up" style={{ animationDelay: '100ms' }}>
          <div className="flex items-center mb-6">
            <div className="w-10 h-10 rounded-sm bg-cod-green/20 flex items-center justify-center mr-4">
              <Layout className="w-5 h-5 text-cod-green" />
            </div>
            <h3 className="text-xl font-orbitron text-white">FRONTEND</h3>
          </div>
          
          <div className="space-y-4">
            {frontendSkills.map((skill, index) => (
              <SkillBadge 
                key={skill.name}
                name={skill.name}
                level={skill.level} 
              />
            ))}
          </div>
        </div>
        
        <div className="animate-fade-in-up" style={{ animationDelay: '300ms' }}>
          <div className="flex items-center mb-6">
            <div className="w-10 h-10 rounded-sm bg-cod-orange/20 flex items-center justify-center mr-4">
              <Server className="w-5 h-5 text-cod-orange" />
            </div>
            <h3 className="text-xl font-orbitron text-white">BACKEND</h3>
          </div>
          
          <div className="space-y-4">
            {backendSkills.map((skill, index) => (
              <SkillBadge 
                key={skill.name}
                name={skill.name}
                level={skill.level} 
              />
            ))}
          </div>
        </div>
        
        <div className="animate-fade-in-up" style={{ animationDelay: '500ms' }}>
          <div className="flex items-center mb-6">
            <div className="w-10 h-10 rounded-sm bg-cod-red/20 flex items-center justify-center mr-4">
              <Zap className="w-5 h-5 text-cod-red" />
            </div>
            <h3 className="text-xl font-orbitron text-white">TACTICAL</h3>
          </div>
          
          <div className="space-y-4">
            {otherSkills.map((skill, index) => (
              <SkillBadge 
                key={skill.name}
                name={skill.name}
                level={skill.level} 
              />
            ))}
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-16">
        <div className="neo-card p-5 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
          <div className="flex items-center mb-3">
            <Shield className="text-cod-green w-5 h-5 mr-2" />
            <h4 className="text-white font-semibold">Combat Ready</h4>
          </div>
          <p className="text-cod-light-gray text-sm">Ready to deploy development skills in high-pressure environments with tactical precision.</p>
        </div>
        
        <div className="neo-card p-5 animate-fade-in-up" style={{ animationDelay: '700ms' }}>
          <div className="flex items-center mb-3">
            <Target className="text-cod-green w-5 h-5 mr-2" />
            <h4 className="text-white font-semibold">Precision Focused</h4>
          </div>
          <p className="text-cod-light-gray text-sm">Meticulous attention to detail in code quality, performance, and user experience.</p>
        </div>
        
        <div className="neo-card p-5 animate-fade-in-up" style={{ animationDelay: '800ms' }}>
          <div className="flex items-center mb-3">
            <Lock className="text-cod-green w-5 h-5 mr-2" />
            <h4 className="text-white font-semibold">Security Conscious</h4>
          </div>
          <p className="text-cod-light-gray text-sm">Implementing robust security measures to protect mission-critical applications.</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
