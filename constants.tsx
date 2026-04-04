
import React from 'react';
import type { Skill, Experience, Project, EducationItem } from './types';

export const GITHUB_URL = "https://github.com/Ai983";
export const LINKEDIN_URL = "https://www.linkedin.com/in/aniket-awasthi08/";
export const EMAIL_ADDRESS = "aniketawasthi.work@gmail.com";

export const SKILLS_DATA: Skill[] = [
    { name: 'React.js', category: 'Frontend' },
    { name: 'Tailwind CSS', category: 'Frontend' },
    { name: 'Framer Motion', category: 'Frontend' },
    { name: 'HTML5', category: 'Frontend' },
    { name: 'CSS3', category: 'Frontend' },
    { name: 'JavaScript (ES6+)', category: 'Frontend' },
    { name: 'TypeScript', category: 'Frontend' },
    { name: 'Responsive Design', category: 'Frontend' },

    { name: 'Node.js', category: 'Backend & APIs' },
    { name: 'Express.js', category: 'Backend & APIs' },
    { name: 'Flask', category: 'Backend & APIs' },
    { name: 'RESTful APIs', category: 'Backend & APIs' },
    { name: 'WebSockets', category: 'Backend & APIs' },
    { name: 'JWT Authentication', category: 'Backend & APIs' },
    { name: 'RBAC', category: 'Backend & APIs' },

    { name: 'MongoDB', category: 'Databases' },
    { name: 'Supabase', category: 'Databases' },
    { name: 'Firebase', category: 'Databases' },
    { name: 'SQL', category: 'Databases' },

    { name: 'JavaScript', category: 'Languages' },
    { name: 'TypeScript', category: 'Languages' },
    { name: 'Python', category: 'Languages' },
    { name: 'SQL', category: 'Languages' },

    { name: 'WordPress', category: 'CMS & Platforms' },
    { name: 'Vercel', category: 'CMS & Platforms' },
    { name: 'EmailJS', category: 'CMS & Platforms' },
    { name: 'Google Apps Script', category: 'CMS & Platforms' },

    { name: 'Git', category: 'Tools' },
    { name: 'GitHub', category: 'Tools' },
    { name: 'Postman', category: 'Tools' },
    { name: 'Firebase Cloud Functions', category: 'Tools' },
];

export const EXPERIENCE_DATA: Experience[] = [
    {
        role: 'Full Stack Developer',
        company: 'Hager Stone International Pvt. Ltd.',
        period: 'Apr 2025 – Present',
        location: 'Noida, India',
        description: [
            'Built and shipped 5 live production web applications covering project management, procurement, expense approvals, HR hiring, and corporate web presence — all deployed on Vercel.',
            'Architected ERP-style PMS with React.js, Node.js, MongoDB — real-time WebSockets, JWT auth, RBAC — serving 30+ users across 5 departments.',
            'Rebuilt corporate website from WordPress to React.js — 75% faster page load, 700+ monthly users, 34 captured leads.',
            'Developed Procurement Intelligence, Expense Automation, and HR Hiring platforms on React.js + Supabase stack used daily by field teams.',
        ]
    },
    {
        role: 'Business Development Intern',
        company: 'Vertel Digital Pvt. Ltd.',
        period: 'Feb 2025 – Mar 2025',
        location: 'Noida, India',
        description: [
            'Built Python + SQL data validation pipelines improving CRM data reliability by 30%.',
            'Developed reporting dashboards integrating HubSpot CRM, ClickUp, and SharePoint.',
        ]
    },
    {
        role: 'Founding Member & Tech Lead',
        company: 'YUMMMO',
        period: 'Jan 2023 – Dec 2024',
        location: '',
        description: [
            'Co-founded early-stage tech venture; led CRM, order tracking, and client workflow systems.',
            'Secured ₹40,000 in seed funding through Bennovate 3.0 incubation program.',
        ]
    }
];

export const PROJECTS_DATA: Project[] = [
    {
        title: 'ERP-Style Project Management System',
        subtitle: 'React.js · Node.js · MongoDB · WebSockets · JWT · RBAC',
        description: 'Production-grade internal ERP platform with real-time Kanban boards, role-based dashboards, and multi-project task tracking. Supports 80+ active tasks across 30+ users in 5 departments. JWT-secured REST APIs with WebSocket live sync at sub-2-second latency.',
        technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'WebSockets', 'JWT', 'RBAC'],
        githubLink: 'https://github.com/Ai983/hagerstone-cps',
        liveLink: 'https://hagerstone-cps.vercel.app/login',
    },
    {
        title: 'Corporate Website Revamp — WordPress to React',
        subtitle: 'React.js · Tailwind CSS · Framer Motion · Flask · EmailJS · SEO',
        description: 'Migrated legacy WordPress site to custom React.js app. 75% improvement in page load speed (4.2s to 1.1s). Improved Core Web Vitals and SEO. Lead capture driving 700+ monthly users, 3800+ interactions, and 34 qualified leads. Traffic from Germany, UK, Netherlands.',
        technologies: ['React.js', 'Tailwind CSS', 'Framer Motion', 'Flask', 'EmailJS', 'SEO'],
        githubLink: 'https://github.com/Ai983/Hagerstone-International-Website',
        liveLink: 'https://hagerstone.com/',
    },
    {
        title: 'Procurement Intelligence Platform',
        subtitle: 'React.js · Node.js · Supabase · REST API · Mobile-First',
        description: 'Mobile-first web application enabling real-time search across 850+ invoices, 210+ vendors, and 300+ materials. Filter by GSTIN, location, contact, and rate history. Reduced vendor lookup time from 30-60 minutes to under 10 seconds. Used daily by field teams.',
        technologies: ['React.js', 'Node.js', 'Supabase', 'REST API', 'Mobile-First Design'],
        githubLink: 'https://github.com/Ai983/procurement-intelligence-system',
        liveLink: 'https://procurement-intelligence-system.vercel.app/',
    },
    {
        title: 'Expense Management & Automation System',
        subtitle: 'React.js · Supabase · Node.js · Approval Workflows',
        description: 'Full stack expense management platform with imprest request submission, multi-level approval workflows, bill clearance tracking, and automated weekly/monthly reporting for finance and operations teams.',
        technologies: ['React.js', 'Supabase', 'Node.js', 'Approval Workflows', 'Reporting'],
        githubLink: 'https://github.com/Ai983/Expense-Automation-',
        liveLink: 'https://expense-automation-three.vercel.app/',
    },
    {
        title: 'HR Hiring Automation Platform',
        subtitle: 'React.js · Supabase · Node.js · Workflow Automation',
        description: 'End-to-end hiring management platform with job requisition tracking, structured candidate pipeline, stage-based status workflows, and automated communication. Used by HR team for active recruitment.',
        technologies: ['React.js', 'Supabase', 'Node.js', 'Candidate Pipeline', 'Workflow Automation'],
        githubLink: 'https://github.com/Ai983/HR_Hiring_Automation',
        liveLink: 'https://hr-hiring-automation.vercel.app/',
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
    'AWS Academy Cloud Foundations',
    'AWS Cloud Quest: Cloud Practitioner',
    'Programming with Python',
    'Advanced Excel',
    'Tools of the Trade: Linux and SQL',
    'Project Planning: Putting It All Together',
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
