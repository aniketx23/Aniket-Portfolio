
import React from 'react';
import Section from './Section';

const About: React.FC = () => {
  return (
    <Section id="about" title="About Me">
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/3 flex justify-center">
            <img 
              src="https://picsum.photos/seed/aniket-awasthi/400/400" 
              alt="Aniket Awasthi" 
              className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover border-4 border-accent shadow-lg"
            />
        </div>
        <div className="md:w-2/3 text-lg text-text-secondary space-y-4 text-center md:text-left">
          <p>
            Hello! I'm Aniket, a passionate AI and Automation Engineer based in India. With a strong foundation in Computer Science from Bennett University, I specialize in architecting and deploying intelligent systems that streamline processes and enhance efficiency.
          </p>
          <p>
            My journey in tech has been driven by a curiosity for how automation and machine learning can solve real-world problems. From building full-stack project management tools to developing computer vision systems for lane detection, I enjoy tackling challenges across the entire development lifecycle.
          </p>
          <p>
            I'm currently seeking junior or entry-level roles in the AI and Software Engineering fields where I can contribute my skills, learn from experienced professionals, and help drive innovative projects forward.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default About;
