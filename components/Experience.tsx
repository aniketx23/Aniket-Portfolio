
import React from 'react';
import Section from './Section';
import { EXPERIENCE_DATA } from '../constants';

const Experience: React.FC = () => {
  return (
    <Section id="experience" title="Professional Experience">
      <div className="relative border-l-2 border-border ml-4 md:ml-0">
        {EXPERIENCE_DATA.map((exp, index) => (
          <div key={index} className="mb-12 pl-10 relative">
            <div className="absolute -left-[11px] top-1 w-5 h-5 bg-accent rounded-full border-4 border-secondary"></div>
            <p className="text-sm text-text-secondary">{exp.period}</p>
            <h3 className="text-xl font-bold text-accent mt-1">{exp.role}</h3>
            <h4 className="text-lg font-semibold text-text-primary mb-3">{exp.company} - {exp.location}</h4>
            <ul className="list-disc list-inside space-y-2 text-text-secondary">
              {exp.description.map((desc, i) => (
                <li key={i}>{desc}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Experience;
