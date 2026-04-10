
import React from 'react';
import type { Skill, Experience, Project, EducationItem } from './types';

export const GITHUB_URL = "https://github.com/Ai983";
export const LINKEDIN_URL = "https://www.linkedin.com/in/aniket-awasthi08/";
export const EMAIL_ADDRESS = "aniketawasthi.work@gmail.com";

export const SKILLS_DATA: Skill[] = [
    // AI & LLM
    { name: 'OpenAI GPT API', category: 'AI & LLM' },
    { name: 'Prompt Engineering', category: 'AI & LLM' },
    { name: 'Structured Output Parsing', category: 'AI & LLM' },
    { name: 'AI Agent Evaluation', category: 'AI & LLM' },

    // Automation & Tools
    { name: 'n8n', category: 'Automation & Tools' },
    { name: 'Google Apps Script', category: 'Automation & Tools' },
    { name: 'Maytapi (WhatsApp API)', category: 'Automation & Tools' },
    { name: 'Webhook Pipelines', category: 'Automation & Tools' },
    { name: 'Firebase Cloud Functions', category: 'Automation & Tools' },

    // Computer Vision
    { name: 'OpenCV', category: 'Computer Vision' },
    { name: 'Python Image Processing', category: 'Computer Vision' },

    // Frontend
    { name: 'React.js', category: 'Frontend' },
    { name: 'Tailwind CSS', category: 'Frontend' },
    { name: 'Framer Motion', category: 'Frontend' },
    { name: 'HTML5', category: 'Frontend' },
    { name: 'CSS3', category: 'Frontend' },
    { name: 'JavaScript (ES6+)', category: 'Frontend' },
    { name: 'TypeScript', category: 'Frontend' },

    // Backend & APIs
    { name: 'Node.js', category: 'Backend & APIs' },
    { name: 'Express.js', category: 'Backend & APIs' },
    { name: 'Flask', category: 'Backend & APIs' },
    { name: 'RESTful APIs', category: 'Backend & APIs' },
    { name: 'WebSockets', category: 'Backend & APIs' },
    { name: 'JWT Authentication', category: 'Backend & APIs' },
    { name: 'RBAC', category: 'Backend & APIs' },

    // Databases
    { name: 'MongoDB', category: 'Databases' },
    { name: 'Supabase', category: 'Databases' },
    { name: 'Firebase', category: 'Databases' },
    { name: 'SQL', category: 'Databases' },

    // Languages
    { name: 'Python', category: 'Languages' },
    { name: 'JavaScript', category: 'Languages' },
    { name: 'TypeScript', category: 'Languages' },
    { name: 'SQL', category: 'Languages' },

    // CMS & Platforms
    { name: 'WordPress', category: 'CMS & Platforms' },
    { name: 'Vercel', category: 'CMS & Platforms' },
    { name: 'EmailJS', category: 'CMS & Platforms' },

    // Tools
    { name: 'Git', category: 'Tools' },
    { name: 'GitHub', category: 'Tools' },
    { name: 'Postman', category: 'Tools' },
];

export const EXPERIENCE_DATA: Experience[] = [
    {
        role: 'AI Integration Engineer & Full Stack Developer',
        company: 'Hager Stone International Pvt. Ltd.',
        period: 'Apr 2025 – Present',
        location: 'Noida, India',
        description: [
            'Integrated OpenAI GPT API into a production invoice processing pipeline achieving 93%+ field extraction accuracy across 850+ financial records — implemented structured output validation, schema enforcement, and automated downstream ERP entry.',
            'Orchestrated 5 end-to-end automation workflows using n8n covering Daily Progress Reports, imprest/expense approvals, lead-to-estimate-to-follow-up pipelines, and attendance reporting — all live and actively reducing manual operational workload.',
            'Configured WhatsApp notification pipelines via Maytapi API integrated with n8n — delivering automated daily summaries, approval alerts, and task notifications to team members.',
            'Assessed 10+ AI agents using structured QA frameworks covering accuracy, completeness, hallucination risk, instruction-following, and business relevance.',
            'Architected a Centralised Procurement Management System (React.js, Node.js, Supabase) covering the full procurement lifecycle — 27 PRs, 28 RFQs across 566 suppliers, 14 POs issued, ₹26.9L+ procurement value managed — with blind quotation system, anti-corruption controls, JWT-secured APIs, and role-based access.',
            'Rebuilt the corporate website migrating from WordPress to React.js — 75% faster page load (4.2s → 1.1s), driving 700+ monthly active users and 34 qualified leads.',
        ]
    },
    {
        role: 'Business Development Intern',
        company: 'Vertel Digital Pvt. Ltd.',
        period: 'Feb 2025 – Mar 2025',
        location: 'Noida, India',
        description: [
            'Constructed Python and SQL data validation pipelines improving CRM data reliability by 30%.',
            'Implemented multi-platform reporting dashboards across HubSpot CRM, ClickUp, and SharePoint.',
        ]
    },
    {
        role: 'Founding Member & Tech Lead',
        company: 'YUMMMO',
        period: 'Jan 2023 – Dec 2024',
        location: '',
        description: [
            'Co-founded early-stage tech venture; led technical operations including CRM architecture, order tracking, and client workflows.',
            'Secured ₹40,000 in funding through Bennovate 3.0 incubation program.',
        ]
    }
];

export const PROJECTS_DATA: Project[] = [
    // AI & Automation Projects
    {
        title: 'AI Invoice Extraction Pipeline',
        subtitle: 'OpenAI GPT API · Node.js · Express.js · Structured Output Parsing · ERP Integration',
        description: 'Production LLM pipeline using OpenAI GPT API with structured output schema validation — achieved 93%+ field extraction accuracy across 850+ invoices, eliminating manual data entry and automating full invoice-to-ERP ingestion for the finance team.',
        technologies: ['OpenAI GPT API', 'Node.js', 'Express.js', 'Structured Output Parsing', 'ERP Integration'],
        githubLink: 'https://github.com/Ai983',
    },
    {
        title: 'Business Workflow Automation Suite',
        subtitle: 'n8n · Maytapi WhatsApp API · Google Apps Script · Webhook Pipelines · Supabase',
        description: 'Designed and deployed 5 live automation workflows in n8n: Daily Progress Reports with weather/AQI auto-population, multi-level imprest/expense approval, lead → estimate → follow-up sales pipeline, WhatsApp team summaries via Maytapi, and attendance reporting — all actively reducing manual work across operations.',
        technologies: ['n8n', 'Maytapi API', 'Google Apps Script', 'Webhooks', 'Supabase'],
        githubLink: 'https://github.com/Ai983',
    },
    {
        title: 'AI Resume Screening Agent',
        subtitle: 'n8n · LLM Workflow · Gmail Trigger · Structured Output Parsing',
        description: 'Automated resume-to-JD evaluation workflow in n8n — processes up to 60 resumes per run via Gmail trigger, generates structured shortlisting scores and evaluation outputs for recruitment teams.',
        technologies: ['n8n', 'LLM Workflow', 'Gmail API', 'Structured Output Parsing'],
        githubLink: 'https://github.com/Ai983',
    },
    {
        title: 'Lane Line Detection System',
        subtitle: 'Python · OpenCV · Computer Vision · Image Processing',
        description: 'Real-time lane line detection system using Python and OpenCV — applied Canny edge detection, Hough Line Transform, and region-of-interest masking to identify lane boundaries from road footage.',
        technologies: ['Python', 'OpenCV', 'Computer Vision', 'Image Processing'],
        githubLink: 'https://github.com/Ai983',
    },
    // Full Stack Web Applications
    {
        title: 'Centralised Procurement Management System (CPS)',
        subtitle: 'React.js · Node.js · Supabase · JWT · RBAC · Tailwind CSS',
        description: 'Full stack procurement platform managing ₹26.9L+ in live procurement value — 27 PRs raised, 28 RFQs dispatched, 14 POs issued across multi-city project sites. Covers a 21-step workflow from PR submission through blind vendor quote collection, automated comparison sheets, founder approval, and PO generation. Manages 566 active suppliers with built-in anti-corruption controls.',
        technologies: ['React.js', 'Node.js', 'Supabase', 'JWT', 'RBAC', 'Tailwind CSS'],
        githubLink: 'https://github.com/Ai983/hagerstone-cps',
        liveLink: 'https://hagerstone-cps.vercel.app/login',
    },
    {
        title: 'Corporate Website Revamp — WordPress to React',
        subtitle: 'React.js · Tailwind CSS · Framer Motion · Flask · EmailJS · SEO',
        description: '75% faster load (4.2s → 1.1s), improved Core Web Vitals and SEO; 700+ monthly users, 34 leads captured; international traffic from Germany, UK, and Netherlands.',
        technologies: ['React.js', 'Tailwind CSS', 'Framer Motion', 'Flask', 'EmailJS', 'SEO'],
        githubLink: 'https://github.com/Ai983/Hagerstone-International-Website',
        liveLink: 'https://hagerstone.com/',
    },
    {
        title: 'Vendor Intelligence System',
        subtitle: 'React.js · Node.js · Supabase · REST API · Mobile-First',
        description: 'Mobile-first vendor search platform indexing 210+ vendors, 850+ invoices, and 300+ materials — instant lookup by vendor name, GSTIN, location, contact details, and historical rate data. Reduced vendor identification time from 60 minutes to under 10 seconds for field procurement teams.',
        technologies: ['React.js', 'Node.js', 'Supabase', 'REST API', 'Mobile-First Design'],
        githubLink: 'https://github.com/Ai983/procurement-intelligence-system',
        liveLink: 'https://procurement-intelligence-system.vercel.app/',
    },
    {
        title: 'Expense Management & HR Hiring Platforms',
        subtitle: 'React.js · Supabase · Node.js · Approval Workflows · Candidate Pipeline',
        description: 'Two live platforms: expense management with multi-level approval workflows and automated reporting; HR hiring platform with structured candidate pipeline and stage-based workflows — both in daily production use.',
        technologies: ['React.js', 'Supabase', 'Node.js', 'Approval Workflows', 'Workflow Automation'],
        githubLink: 'https://github.com/Ai983/Expense-Automation-',
        liveLink: 'https://expense-automation-three.vercel.app/',
    },
];

export const EDUCATION_DATA: EducationItem[] = [
    {
        university: 'Bennett University',
        degree: 'Bachelor of Technology',
        field: 'Computer Science',
        period: '2021 – 2025',
        cgpa: '8.7 / 10 CGPA',
        location: 'Greater Noida, India'
    }
]

export const CERTIFICATIONS_DATA: string[] = [
    'Advanced Computer Vision with TensorFlow',
    'AWS Academy Cloud Foundations',
    'AWS Cloud Quest: Cloud Practitioner',
    'Programming with Python',
    'Tools of the Trade: Linux and SQL',
    'Project Planning: Putting It All Together',
    'Advanced Excel',
];

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
