
import React from 'react';
import Section from './Section';
import { GitHubIcon, LinkedInIcon, MailIcon, GITHUB_URL, LINKEDIN_URL, EMAIL_ADDRESS } from '../constants';

const Contact: React.FC = () => {
  return (
    <>
      <Section id="contact" title="Get In Touch">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-lg text-text-secondary mb-8">
            I'm actively looking for new opportunities and my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          <a
            href={`mailto:${EMAIL_ADDRESS}`}
            className="inline-block bg-accent text-primary font-bold py-4 px-8 rounded-lg text-lg hover:bg-accent/90 transition-transform duration-300 hover:scale-105"
          >
            Say Hello
          </a>
        </div>
      </Section>
      <footer className="text-center py-8 border-t border-border mt-12">
        <div className="flex justify-center space-x-6 mb-4">
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-text-secondary hover:text-accent transition-colors">
                <GitHubIcon className="w-6 h-6" />
            </a>
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-text-secondary hover:text-accent transition-colors">
                <LinkedInIcon className="w-6 h-6" />
            </a>
            <a href={`mailto:${EMAIL_ADDRESS}`} aria-label="Email" className="text-text-secondary hover:text-accent transition-colors">
                <MailIcon className="w-6 h-6" />
            </a>
        </div>
        <p className="text-text-secondary text-sm">
          Designed & Built by Aniket Awasthi
        </p>
      </footer>
    </>
  );
};

export default Contact;
