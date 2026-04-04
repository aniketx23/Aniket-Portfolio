
import React from 'react';
import Section from './Section';
import { PROJECTS_DATA, GitHubIcon, ExternalLinkIcon } from '../constants';

const Projects: React.FC = () => {
  return (
    <Section id="projects" title="Projects">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS_DATA.map((project, index) => (
          <div key={index} className="bg-secondary border border-border rounded-lg p-6 flex flex-col hover:border-accent transition-colors duration-300 shadow-lg">
            <div className="flex-grow">
              <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-accent">{project.title}</h3>
                    <p className="text-sm text-text-secondary">{project.subtitle}</p>
                  </div>
                  <div className="flex space-x-3 text-text-secondary">
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                          <GitHubIcon className="w-6 h-6" />
                      </a>
                      {project.liveLink && (
                          <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                              <ExternalLinkIcon className="w-6 h-6" />
                          </a>
                      )}
                  </div>
              </div>
              <p className="text-text-secondary mb-4">{project.description}</p>
            </div>
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.technologies.map((tech) => (
                <span key={tech} className="bg-primary text-accent text-xs font-semibold px-2.5 py-1 rounded-full border border-border">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
