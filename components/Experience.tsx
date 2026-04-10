
import React, { useState } from 'react';
import Section from './Section';
import { EXPERIENCE_DATA } from '../constants';

const Experience: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <Section id="experience" title="Professional Experience">
      <div className="relative border-l-2 border-border ml-2 md:ml-0">
        {EXPERIENCE_DATA.map((exp, index) => {
          const isExpanded = expandedIndex === index;
          const visibleDescriptions = isExpanded ? exp.description : exp.description.slice(0, 2);
          const hasMore = exp.description.length > 2;

          return (
            <div key={index} className="mb-6 md:mb-12 pl-6 md:pl-10 relative">
              <div className="absolute -left-[9px] md:-left-[11px] top-1 w-4 h-4 md:w-5 md:h-5 bg-accent rounded-full border-4 border-secondary"></div>
              <p className="text-xs md:text-sm text-text-secondary">{exp.period}</p>
              <h3 className="text-base md:text-xl font-bold text-accent mt-1">{exp.role}</h3>
              <h4 className="text-sm md:text-lg font-semibold text-text-primary mb-2 md:mb-3">{exp.company}{exp.location ? ` - ${exp.location}` : ''}</h4>
              <ul className="list-disc list-outside ml-4 space-y-1 md:space-y-2 text-text-secondary text-sm md:text-base">
                {visibleDescriptions.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
              {/* Show more/less button on mobile */}
              {hasMore && (
                <button
                  onClick={() => setExpandedIndex(isExpanded ? null : index)}
                  className="md:hidden text-accent text-sm mt-2 hover:underline"
                >
                  {isExpanded ? '← Show less' : `+${exp.description.length - 2} more...`}
                </button>
              )}
              {/* Always show all on desktop */}
              <ul className="hidden md:block list-disc list-outside ml-4 space-y-2 text-text-secondary">
                {exp.description.slice(2).map((desc, i) => (
                  <li key={i + 2}>{desc}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default Experience;
