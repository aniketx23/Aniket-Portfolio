
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Section from './Section';
import { GitHubIcon, LinkedInIcon, MailIcon, GITHUB_URL, LINKEDIN_URL, EMAIL_ADDRESS } from '../constants';

const EMAILJS_SERVICE_ID = 'service_157mxyf';
const EMAILJS_TEMPLATE_ID = 'template_4227hh8';
const EMAILJS_PUBLIC_KEY = '7W5N8Gt17MX2-Uk-l';

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus('sending');
    emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, EMAILJS_PUBLIC_KEY)
      .then(() => {
        setStatus('success');
        formRef.current?.reset();
      })
      .catch(() => setStatus('error'));
  };

  return (
    <>
      <Section id="contact" title="Get In Touch">
        <div className="max-w-2xl mx-auto">
          <p className="text-lg text-text-secondary mb-8 text-center">
            I'm actively looking for new opportunities and my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-text-primary placeholder-text-secondary focus:outline-none focus:border-accent transition-colors"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-text-primary placeholder-text-secondary focus:outline-none focus:border-accent transition-colors"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              required
              className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-text-primary placeholder-text-secondary focus:outline-none focus:border-accent transition-colors resize-none"
            />
            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full bg-accent text-primary font-bold py-4 px-8 rounded-lg text-lg hover:bg-accent/90 transition-transform duration-300 hover:scale-105 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === 'sending' ? 'Sending...' : 'Say Hello'}
            </button>
            {status === 'success' && (
              <p className="text-center text-accent font-medium">Message sent! I'll get back to you soon.</p>
            )}
            {status === 'error' && (
              <p className="text-center text-red-400 font-medium">Something went wrong. Please try again or email me directly.</p>
            )}
          </form>
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
