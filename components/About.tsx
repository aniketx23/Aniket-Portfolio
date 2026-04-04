
import React from 'react';
import Section from './Section';

const About: React.FC = () => {
  return (
    <Section id="about" title="About Me">
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/3 flex justify-center">
            <img 
              src="/Profile-Pic.png" 
              alt="Aniket Awasthi" 
              className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover border-4 border-accent shadow-lg"
            />
        </div>
        <div className="md:w-2/3 text-lg text-text-secondary space-y-4 text-center md:text-left">
          <p>
            I'm a final-year Computer Science student at Bennett University (CGPA: 8.7) and a Full Stack Developer currently building internal tools and web platforms at Hager Stone International in Noida.
          </p>
          <p>
            In the past year, I've shipped 5 production applications — from a real-time ERP platform to a procurement search tool that replaced an hour of manual work with a 10-second query. I own the full stack: React on the front, Node.js and Supabase in the back, deployed to Vercel.
          </p>
          <p>
            I'm looking for my next role as a Full Stack Developer or Website Developer where I can keep building systems that people actually use.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default About;
