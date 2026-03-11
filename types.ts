
import { ReactNode } from 'react';

export interface Project {
  id: string;
  title: string;
  period: string;
  role: string;
  description: string;
  tags: string[];
  image: string;
  bullets: string[];
  repoUrl?: string;
  liveUrl?: string;
  thumbnailPosition?: string; // e.g., 'object-right', 'object-left', 'object-center'
  details?: {
    overview?: string;
    problemContext?: string;
    proposedSolution?: {
      concept?: string;
      components?: string[];
      farePolicy?: string;
    };
    resultsSummary?: string;
    results?: string[];
    contributions?: string[];
  };
}

export interface Experience {
  id: string;
  company: string;
  location: string;
  role: string;
  period: string;
  description?: string;
  websiteUrl?: string;
  bullets: ReactNode[];
  tags?: string[];
  logo?: string;
}

export interface Education {
  id: string;
  school: string;
  location: string;
  degree: string;
  period: string;
  details?: string;
  bullets?: ReactNode[];
}

export interface Award {
  id: string;
  title: string;
  organization: ReactNode;
  year: string;
}
