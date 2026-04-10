
import React, { useState } from 'react';
import Section from './Section';
import { PROJECTS_DATA, GitHubIcon, ExternalLinkIcon } from '../constants';

const Projects: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const MOBILE_INITIAL_COUNT = 4;
  
  const visibleProjects = showAll ? PROJECTS_DATA : PROJECTS_DATA.slice(0, MOBILE_INITIAL_COUNT);
  const hasMoreProjects = PROJECTS_DATA.length > MOBILE_INITIAL_COUNT;

  return (
    <Section id="projects" title="Projects">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
        {/* On mobile, show limited projects; on desktop show all */}
        {PROJECTS_DATA.map((project, index) => (
          <div 
            key={index} 
            className={`bg-secondary border border-border rounded-lg p-4 md:p-6 flex flex-col hover:border-accent transition-colors duration-300 shadow-lg ${
              !showAll && index >= MOBILE_INITIAL_COUNT ? 'hidden md:flex' : ''
            }`}
          >
            <div className="flex-grow">
              <div className="flex justify-between items-start mb-3 md:mb-4">
                  <div className="flex-1 min-w-0 pr-2">
                    <h3 className="text-base md:text-xl font-bold text-accent leading-tight">{project.title}</h3>
                    <p className="text-xs md:text-sm text-text-secondary mt-1 line-clamp-1 md:line-clamp-none">{project.subtitle}</p>
                  </div>
                  <div className="flex space-x-2 md:space-x-3 text-text-secondary flex-shrink-0">
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                          <GitHubIcon className="w-5 h-5 md:w-6 md:h-6" />
                      </a>
                      {project.liveLink && (
                          <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                              <ExternalLinkIcon className="w-5 h-5 md:w-6 md:h-6" />
                          </a>
                      )}
                  </div>
              </div>
              <p className="text-text-secondary text-sm md:text-base mb-3 md:mb-4 line-clamp-3 md:line-clamp-none">{project.description}</p>
            </div>
            <div className="flex flex-wrap gap-1.5 md:gap-2 mt-auto">
              {project.technologies.slice(0, 4).map((tech) => (
                <span key={tech} className="bg-primary text-accent text-xs font-semibold px-2 py-0.5 md:px-2.5 md:py-1 rounded-full border border-border">
                  {tech}
                </span>
              ))}
              {project.technologies.length > 4 && (
                <span className="text-text-secondary text-xs md:hidden">+{project.technologies.length - 4}</span>
              )}
              {/* Show all tech tags on desktop */}
              {project.technologies.slice(4).map((tech) => (
                <span key={tech} className="hidden md:inline-block bg-primary text-accent text-xs font-semibold px-2.5 py-1 rounded-full border border-border">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      {/* Show More button - only visible on mobile when there are more projects */}
      {hasMoreProjects && (
        <div className="md:hidden flex justify-center mt-6">
          <button
            onClick={() => setShowAll(!showAll)}
            className="bg-transparent border-2 border-accent text-accent font-bold py-2 px-6 rounded-lg hover:bg-accent hover:text-primary transition-colors"
          >
            {showAll ? 'Show Less' : `Show All ${PROJECTS_DATA.length} Projects`}
          </button>
        </div>
      )}
    </Section>
  );
};

export default Projects;
