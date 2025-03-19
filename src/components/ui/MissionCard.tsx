
import React from 'react';
import { ChevronRight, Calendar, Target, Shield } from 'lucide-react';

interface MissionCardProps {
  title: string;
  description: string;
  status: 'completed' | 'in-progress';
  date: string;
  technologies: string[];
  className?: string;
  onClick?: () => void;
}

const MissionCard: React.FC<MissionCardProps> = ({
  title,
  description,
  status,
  date,
  technologies,
  className = "",
  onClick
}) => {
  return (
    <div 
      className={`neo-card p-5 hover:border-cod-green/50 transition-all duration-300 cursor-pointer ${className}`}
      onClick={onClick}
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-cod-green transition-colors">{title}</h3>
          <div className="flex items-center space-x-2 mb-2">
            <span className={`mission-badge ${status}`}>
              {status === 'completed' ? 'MISSION COMPLETE' : 'MISSION ACTIVE'}
            </span>
            <div className="flex items-center text-cod-light-gray text-xs">
              <Calendar className="w-3 h-3 mr-1" />
              <span>{date}</span>
            </div>
          </div>
        </div>
        <ChevronRight className="text-cod-green w-5 h-5" />
      </div>
      
      <p className="text-cod-light-gray text-sm mb-4">{description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech, index) => (
          <span key={index} className="bg-cod-dark-gray px-2 py-1 text-xs rounded-sm text-cod-light-gray">
            {tech}
          </span>
        ))}
      </div>
      
      <div className="flex items-center justify-between border-t border-cod-gray pt-3 mt-auto">
        <div className="flex items-center space-x-4">
          <div className="flex items-center text-cod-light-gray text-xs">
            <Target className="w-3 h-3 mr-1 text-cod-green" />
            <span>Objective</span>
          </div>
          <div className="flex items-center text-cod-light-gray text-xs">
            <Shield className="w-3 h-3 mr-1 text-cod-orange" />
            <span>Operation</span>
          </div>
        </div>
        <div className="progress-container w-1/3">
          <div className="progress-bar" style={{ width: status === 'completed' ? '100%' : '70%' }}></div>
        </div>
      </div>
    </div>
  );
};

export default MissionCard;
