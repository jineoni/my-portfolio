
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
}

export interface Experience {
  id: string;
  company: string;
  location: string;
  role: string;
  period: string;
  bullets: ReactNode[];
  tags?: string[];
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
  organization: string;
  year: string;
}
