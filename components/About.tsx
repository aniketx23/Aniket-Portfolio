
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
            AI Integration Engineer and Full Stack Developer with 1+ year of production experience building LLM-powered applications, end-to-end workflow automations, and data-driven web platforms at Hager Stone International in Noida.
          </p>
          <p>
            Designed and deployed a production invoice extraction pipeline using OpenAI GPT API achieving 93%+ accuracy across 850+ financial records; engineered 5 live n8n automation workflows covering daily reporting, expense approvals, WhatsApp notifications, and lead pipelines — all actively used by internal teams. Delivered 6 full stack web applications in parallel, including an ERP platform serving 30+ users.
          </p>
          <p>
            Proficient in OpenAI GPT API, n8n, Python, React.js, Node.js, and Supabase. B.Tech Computer Science, Bennett University (CGPA: 8.7). Looking for my next role as an AI Integration Engineer or Full Stack Developer where I can build systems that deliver real business impact.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default About;
