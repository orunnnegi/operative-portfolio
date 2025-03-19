
import React from 'react';
import MissionCard from './ui/MissionCard';

const Projects: React.FC = () => {
  const missions = [
    {
      title: "Tactical Dashboard",
      description: "Developed a responsive admin dashboard with real-time data visualization, user authentication, and system monitoring.",
      status: "completed" as const,
      date: "2023-05-15",
      technologies: ["React", "Redux", "Tailwind CSS", "Chart.js", "Firebase"]
    },
    {
      title: "Recon Application",
      description: "Built an intelligence gathering application with maps integration, data filtering, and export capabilities.",
      status: "completed" as const,
      date: "2023-02-10",
      technologies: ["TypeScript", "React", "Node.js", "MongoDB", "Leaflet"]
    },
    {
      title: "Secure Authentication System",
      description: "Implemented a robust authentication system with multi-factor authentication, session management, and role-based access control.",
      status: "in-progress" as const,
      date: "2023-08-03",
      technologies: ["JWT", "Express", "React", "AWS Cognito", "Redis"]
    },
    {
      title: "Command Center Interface",
      description: "Designed and developed an intuitive interface for mission control with real-time updates and team coordination features.",
      status: "completed" as const,
      date: "2022-11-20",
      technologies: ["React", "WebSockets", "Node.js", "Material UI", "MongoDB"]
    }
  ];

  return (
    <section id="missions" className="section-container">
      <div className="text-center mb-16">
        <span className="inline-block px-3 py-1 bg-cod-green/20 text-cod-green text-xs mb-4 font-orbitron">
          OPERATION HISTORY
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">COMPLETED MISSIONS</h2>
        <div className="h-0.5 w-20 bg-cod-green mx-auto mb-6"></div>
        <p className="text-white/70 max-w-2xl mx-auto">
          Record of successfully executed development operations and missions. Each project represents a strategic objective accomplished with precision.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {missions.map((mission, index) => (
          <MissionCard
            key={mission.title}
            title={mission.title}
            description={mission.description}
            status={mission.status}
            date={mission.date}
            technologies={mission.technologies}
            className="animate-fade-in-up"
            style={{ animationDelay: `${index * 200}ms` }}
          />
        ))}
      </div>
      
      <div className="text-center mt-16">
        <div className="relative inline-block">
          <div className="absolute -inset-1 bg-gradient-to-r from-cod-green/0 via-cod-green/30 to-cod-green/0 blur"></div>
          <a 
            href="#contact" 
            className="relative tactical-btn text-base group"
          >
            REQUEST NEW MISSION
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
