
import React from 'react';
import { GitHubIcon, LinkedInIcon, MailIcon, GITHUB_URL, LINKEDIN_URL, EMAIL_ADDRESS } from '../constants';

// A simple typing animation component to avoid external dependencies.
const TypeAnimation: React.FC<{ sequence: (string | number)[] }> = ({ sequence }) => {
  const [text, setText] = React.useState('');
  const [isDeleting, setIsDeleting] = React.useState(false);
  const [loopNum, setLoopNum] = React.useState(0);
  const [typingSpeed, setTypingSpeed] = React.useState(150);

  React.useEffect(() => {
    const strings = sequence.filter(item => typeof item === 'string') as string[];
    const handleType = () => {
      const i = loopNum % strings.length;
      const fullText = strings[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 75 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, sequence, typingSpeed]);

  return <span className="text-accent">{text}&nbsp;</span>;
};


const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-start text-left py-20">
      <div className="animate-fade-in-up">
        <h1 className="text-5xl md:text-7xl font-bold text-text-primary mb-4">
          Aniket Awasthi
        </h1>
        <h2 className="text-3xl md:text-5xl font-semibold text-text-secondary mb-6">
          <TypeAnimation
            sequence={[
              'AI Integration Engineer',
              2000,
              'Workflow Automation Expert',
              2000,
              'Full Stack Developer',
              2000,
            ]}
          />
        </h2>
        <p className="max-w-xl text-lg text-text-secondary mb-8">
          I build LLM-powered applications, end-to-end workflow automations, and data-driven web platforms — from AI invoice pipelines to real-time ERP systems — that ship to production and deliver measurable impact.
        </p>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex flex-wrap gap-3">
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="inline-block bg-accent text-primary font-bold py-3 px-6 rounded-lg hover:bg-accent/90 transition-colors"
            >
              Get In Touch
            </a>
            <a
              href="/AniketResume.pdf"
              download="Aniket_Awasthi_Resume.pdf"
              className="inline-block bg-transparent border-2 border-accent text-accent font-bold py-3 px-6 rounded-lg hover:bg-accent hover:text-primary transition-colors"
            >
              My Resume
            </a>
          </div>
          <div className="flex items-center space-x-5">
              <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-text-secondary hover:text-accent transition-colors">
                  <GitHubIcon className="w-7 h-7" />
              </a>
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-text-secondary hover:text-accent transition-colors">
                  <LinkedInIcon className="w-7 h-7" />
              </a>
              <a href={`mailto:${EMAIL_ADDRESS}`} aria-label="Email" className="text-text-secondary hover:text-accent transition-colors">
                  <MailIcon className="w-7 h-7" />
              </a>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-6 sm:gap-8 mt-10">
          <div className="text-center">
            <p className="text-2xl font-bold text-accent">93%+</p>
            <p className="text-sm text-text-secondary">AI Extraction Accuracy</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-accent">5</p>
            <p className="text-sm text-text-secondary">Live n8n Workflows</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-accent">6+</p>
            <p className="text-sm text-text-secondary">Production Apps</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
