
import React from 'react';
import type { Skill, Experience, Project, EducationItem } from './types';

export const GITHUB_URL = "https://github.com/aniket-awasthi";
export const LINKEDIN_URL = "https://www.linkedin.com/in/aniket-awasthi-";
export const EMAIL_ADDRESS = "aniketawasthi.work@gmail.com";

export const SKILLS_DATA: Skill[] = [
    { name: 'Python', category: 'Programming Languages' },
    { name: 'JavaScript', category: 'Programming Languages' },
    { name: 'TypeScript', category: 'Programming Languages' },
    { name: 'SQL', category: 'Programming Languages' },
    { name: 'HTML/CSS', category: 'Programming Languages' },
    { name: 'Machine Learning', category: 'AI/ML' },
    { name: 'Scikit-learn', category: 'AI/ML' },
    { name: 'Computer Vision', category: 'AI/ML' },
    { name: 'Data Pipelines', category: 'AI/ML' },
    { name: 'Model Deployment', category: 'AI/ML' },
    { name: 'React.js', category: 'Full Stack' },
    { name: 'Node.js', category: 'Full Stack' },
    { name: 'Express.js', category: 'Full Stack' },
    { name: 'Flask', category: 'Full Stack' },
    { name: 'Tailwind CSS', category: 'Full Stack' },
    { name: 'Framer Motion', category: 'Full Stack' },
    { name: 'REST APIs', category: 'Full Stack' },
    { name: 'JWT Authentication', category: 'Full Stack' },
    { name: 'MongoDB', category: 'Cloud & Databases' },
    { name: 'MySQL', category: 'Cloud & Databases' },
    { name: 'Firebase', category: 'Cloud & Databases' },
    { name: 'AWS (Certified)', category: 'Cloud & Databases' },
    { name: 'Google Cloud Platform', category: 'Cloud & Databases' },
    { name: 'Google Apps Script', category: 'Automation & Tools' },
    { name: 'Power BI', category: 'Automation & Tools' },
    { name: 'HubSpot', category: 'Automation & Tools' },
    { name: 'ClickUp', category: 'Automation & Tools' },
    { name: 'DOM parsing', category: 'Web Scraping' },
    { name: 'XPath', category: 'Web Scraping' },
    { name: 'Regex', category: 'Web Scraping' },
    { name: 'Web automation', category: 'Web Scraping' },
    { name: 'ETL pipelines', category: 'Web Scraping' },
];

export const EXPERIENCE_DATA: Experience[] = [
    {
        role: 'AI & Automation Engineer',
        company: 'Hager Stone International Pvt Ltd.',
        period: 'April 2025 - Present',
        location: 'Noida, India',
        description: [
            'Architected and deployed full-stack automation solutions using Python, JavaScript, and Streamlit for BOQ generation, leave management, and real-time data synchronization with Google Sheets, improving reporting efficiency by 30%.',
            'Integrated backend services with Google Apps Script and Firebase Cloud Functions to automate WhatsApp notifications and form submissions, reducing manual processing time by 42%.',
            'Established structured data pipelines for reporting and invoicing processes aligned with SAP CI module standards, streamlining financial workflow operations.'
        ]
    },
    {
        role: 'Business Development International',
        company: 'Vertel Digital Pvt Ltd.',
        period: 'Feb 2025 - Mar 2025',
        location: 'Noida, India',
        description: [
            'Improved data quality and lead generation workflows by 30% using Python and SQL for validation and transformation processes.',
            'Achieved 50+ email responses through automated outreach campaigns, reducing manual data processing time by 40%.',
            'Streamlined lead generation for North American market, collecting and validating 500+ companies.'
        ]
    },
    {
        role: 'Founding Member & Tech Lead',
        company: 'YUMMMO',
        period: 'Jan 2023 - Dec 2024',
        location: 'Remote',
        description: [
            'Engineered comprehensive tracking systems for corporate orders using ClickUp and HubSpot automation, improving team response efficiency by 20%.',
            'Directed cross-functional collaboration between product, engineering, and operations teams to optimize digital workflows and process efficiency.',
            'Secured 40,000 worth of crash course funding and lifetime mentorship through Bennovate 3.0, driving business growth initiatives.'
        ]
    }
];

export const PROJECTS_DATA: Project[] = [
    {
        title: 'Project Management System',
        subtitle: 'Full-Stack Web Application',
        description: 'A production-ready, role-based project management platform for 30+ concurrent users across 5+ departments. Features a dynamic Kanban board with real-time WebSocket connections, 3-tier authentication, and a scalable RESTful API architecture.',
        technologies: ['React.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'WebSocket'],
        githubLink: 'https://github.com/aniket-awasthi',
    },
    {
        title: 'Hagerstone Corporate Website Revamp',
        subtitle: 'Frontend Development',
        description: 'Led a digital transformation from WordPress to a custom React application, achieving 75% faster page loads. Developed 15+ responsive UI components with a mobile-first design and integrated contact forms with EmailJS.',
        technologies: ['React.js', 'Flask', 'Framer Motion', 'EmailJS', 'Tailwind CSS'],
        githubLink: 'https://github.com/aniket-awasthi',
    },
    {
        title: 'Lane Line Detection System',
        subtitle: 'Computer Vision',
        description: 'Built real-time lane detection algorithms for autonomous vehicle applications, achieving 90% accuracy. Optimized frame processing performance by 35% and implemented testing frameworks for precision and reliability.',
        technologies: ['Python', 'OpenCV', 'Computer Vision'],
        githubLink: 'https://github.com/aniket-awasthi',
    },
];

export const EDUCATION_DATA: EducationItem[] = [
    {
        university: 'Bennett University',
        degree: 'Bachelor of Technology',
        field: 'Computer Science',
        period: 'October 2021 - May 2025',
        cgpa: '7.5 CGPA',
        location: 'Greater Noida, India'
    }
]

// ICONS

export const GitHubIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

export const LinkedInIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export const MailIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

export const ExternalLinkIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
        <polyline points="15 3 21 3 21 9"></polyline>
        <line x1="10" y1="14" x2="21" y2="3"></line>
    </svg>
);
