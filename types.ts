
export interface Skill {
  name: string;
  category: 'AI & LLM' | 'Automation & Tools' | 'Computer Vision' | 'Frontend' | 'Backend & APIs' | 'Databases' | 'Languages' | 'CMS & Platforms' | 'Tools';
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
