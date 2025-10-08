
export interface Skill {
  name: string;
  category: 'Programming Languages' | 'CRM/ERP & Automation Tools' | 'Frameworks & Tools' | 'Cloud & Databases' | 'AI/ML';
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string[];
}

export interface Project {
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  githubLink: string;
  liveLink?: string;
}

export interface EducationItem {
    university: string;
    degree: string;
    field: string;
    period: string;
    cgpa: string;
    location: string;
}
