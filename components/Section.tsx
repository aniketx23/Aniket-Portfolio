
import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, children }) => {
  return (
    <section id={id} className="py-20 animate-fade-in-up" style={{ animationFillMode: 'both', animationDelay: '0.2s' }}>
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-text-primary">
        <span className="relative inline-block">
          {title}
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-accent"></span>
        </span>
      </h2>
      {children}
    </section>
  );
};

export default Section;
