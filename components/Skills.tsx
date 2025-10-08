
import React from 'react';
import Section from './Section';
import { SKILLS_DATA } from '../constants';
import type { Skill } from '../types';

const Skills: React.FC = () => {
  const categorizedSkills = SKILLS_DATA.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<Skill['category'], Skill[]>);

  const categoryOrder: Skill['category'][] = [
    'Programming Languages',
    'CRM/ERP & Automation Tools',
    'Frameworks & Tools',
    'Cloud & Databases',
    'AI/ML',
  ];

  return (
    <Section id="skills" title="Technical Skills">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categoryOrder.map((category) => (
          <div key={category} className="bg-secondary p-6 rounded-lg border border-border shadow-lg">
            <h3 className="text-xl font-bold text-accent mb-4">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {categorizedSkills[category]?.map((skill) => (
                <span key={skill.name} className="bg-primary text-text-secondary text-sm font-medium px-3 py-1 rounded-full border border-border">
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
