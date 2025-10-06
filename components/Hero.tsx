
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
          I build intelligent solutions as an
          <br />
          <TypeAnimation 
            sequence={[
              'AI Engineer',
              1500,
              'Automation Engineer',
              1500,
              'Full-Stack Developer',
              1500,
            ]}
          />
        </h2>
        <p className="max-w-xl text-lg text-text-secondary mb-8">
          B.Tech in Computer Science specializing in AI. Passionate about creating efficient, scalable, and intelligent automation and software solutions.
        </p>
        <div className="flex items-center space-x-4">
          <a
            href={`mailto:${EMAIL_ADDRESS}`}
            className="inline-block bg-accent text-primary font-bold py-3 px-6 rounded-lg hover:bg-accent/90 transition-colors"
          >
            Get In Touch
          </a>
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
      </div>
    </section>
  );
};

export default Hero;
