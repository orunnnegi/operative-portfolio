
import React from 'react';

interface SkillBadgeProps {
  name: string;
  level: number; // 1-10
  className?: string;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({
  name,
  level,
  className = ""
}) => {
  const percentage = (level / 10) * 100;
  
  return (
    <div className={`group relative p-4 border border-cod-gray bg-cod-dark-gray/60 rounded ${className}`}>
      <div className="flex items-center justify-between mb-2">
        <h4 className="text-sm font-medium text-white">{name}</h4>
        <span className="text-xs text-cod-green">{level}/10</span>
      </div>
      
      <div className="progress-container">
        <div 
          className="progress-bar"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      
      {/* Skill level indicator */}
      <div className="absolute top-0 right-0 p-1 opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="w-1 h-1 bg-cod-green rounded-full"></div>
      </div>
    </div>
  );
};

export default SkillBadge;
