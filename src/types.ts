export interface MetricHighlight {
  label: string;
  value: string;
  detail: string;
}

export interface ProfileData {
  name: string;
  role: string;
  tagline: string;
  location: string;
  status: string;
  avatarUrl: string;
  aboutSummary: string;
  fullBio: string[];
  highlights: MetricHighlight[];
  email: string;
  github: string;
  linkedin: string;
  website?: string;
  phone?: string;
  nationality?: string;
  workPermit?: string;
  languagesSpoken?: { language: string; proficiency: string }[];
  twitter?: string;
  resumeUrl?: string;
  values: {
    title: string;
    description: string;
    icon: string;
  }[];
}

export type ProjectCategory = 'All' | 'Full-Stack' | 'Cloud & Systems' | 'Frontend & UI' | 'Open Source';

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: 'Full-Stack' | 'Cloud & Systems' | 'Frontend & UI' | 'Open Source';
  image: string;
  technologies: string[];
  featured: boolean;
  metric?: {
    value: string;
    label: string;
  };
  liveUrl?: string;
  githubUrl?: string;
  details: {
    overview: string;
    problem: string;
    solution: string;
    keyFeatures: string[];
    technicalArchitecture: string;
    outcomes: string[];
  };
}

export interface SkillItem {
  name: string;
  level: number; // 0 to 100
  experience: string;
  category: string;
  highlight?: boolean;
}

export interface SkillCategoryGroup {
  name: string;
  description: string;
  icon: string;
  skills: SkillItem[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  period: string;
  location: string;
  type: string; // Full-time, Lead, etc.
  description: string;
  keyOutcomes: string[];
  techStack: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  location: string;
  honors?: string;
  coursework?: string;
}

export interface PublicationOrTalk {
  title: string;
  type: 'Publication' | 'Talk' | 'Seminar';
  venue: string;
  date: string;
  description?: string;
}
