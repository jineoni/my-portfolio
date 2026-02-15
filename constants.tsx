
import React from 'react';
import { Project, Experience, Education, Award } from './types.ts';

export const PROJECTS: Project[] = [
  {
    id: 'drt-impact',
    title: 'Impact of Demand-Responsive Transit (DRT) on Property Values',
    period: 'Sep. 2025 - Dec. 2025',
    role: 'Undergraduate Capstone Project',
    description: 'Estimated the causal impact of DRT on property values using a Regression Discontinuity Design (RDD) on housing transaction data.',
    tags: ['Python', 'Econometrics'],
    image: 'https://raw.githubusercontent.com/jineoni/my-portfolio/53c1a61cbeaa652d1519c02cee5de22ade2cca64/image/capstone.png',
    bullets: [
      'Constructed accessibility indices from 5,000+ transit nodes to identify transport-disadvantaged areas',
      'Designed a quasi-experimental setup by normalizing accessibility levels and matching comparable regions',
      'Leveraged RDD to estimate property value changes linked to mobility improvements'
    ]
  },
  {
    id: 'dotori-ai',
    title: 'Dotori - AI College Application Consulting Agent',
    period: 'Nov. 2024 - Apr. 2025',
    role: 'Team Project',
    description: 'Developed a compatibility scoring algorithm and responsive analytics dashboard for data-driven college consulting.',
    tags: ['Python', 'TypeScript', 'OpenAI'],
    image: 'https://raw.githubusercontent.com/jineoni/my-portfolio/627152f6c278db2a3f569d8516957849b271d173/image/dotori-dashboard.png',
    repoUrl: 'https://github.com/jineoni/dotori-data',
    bullets: [
      'Built Python pipelines to automatically extract and preprocess admissions data from 100+ Common Data Sets',
      'Developed a compatibility scoring algorithm by defining weighted metrics to evaluate user-school fit',
      'Built a responsive analytics dashboard to provide data-driven insights for strategic college consulting'
    ]
  },
  {
    id: 'mobility-solution',
    title: 'Mobility Solution for Yonsei University Students',
    period: 'Sep. 2023 - Dec. 2023',
    role: 'Team Project',
    description: 'Analyzed mode-choice behavior via SP survey and developed a multinomial logit model to assess campus DRT feasibility.',
    tags: ['R', 'SP Survey', 'Logit Model'],
    image: 'https://raw.githubusercontent.com/jineoni/my-portfolio/627152f6c278db2a3f569d8516957849b271d173/image/yonsei-mobility-solution.png',
    bullets: [
      'Analyzed mode-choice behavior via Stated Preference (SP) survey of 100 students',
      'Estimated choice probabilities and behavioral drivers for transit modes by developing a multinomial logit model',
      'Optimized model stability by resolving multi-collinearity and refining variable specifications'
    ]
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'kakao-mobility',
    company: 'Kakao Mobility',
    location: 'Seongnam, South Korea',
    role: 'Data Science Intern',
    period: 'May 2025 - Feb. 2026',
    bullets: [
      'Developed an integrated dashboard to monitor real-time routing metrics, enabling rapid anomaly detection',
      'Reduced ETA bias by integrating traffic signal cycles estimated via Lomb-Scargle as model calibration factors',
      'Analyzed ETA deviations to identify root causes and deliver actionable insights for routing algorithm improvement',
      'Built SQL pipelines to preprocess and standardize 100M+ GPS records for internal research and external delivery',
      'Re-classified road segments by clustering dynamic traffic flow patterns via PCA and K-means'
    ],
    tags: ['Python', 'SQL', 'GCP', 'Superset']
  },
  {
    id: 'yonsei-lab',
    company: 'Transportation Planning Lab, Yonsei University',
    location: 'Seoul, South Korea',
    role: 'Research Intern',
    period: 'Mar. 2024 - Jun. 2024',
    bullets: [
      'Identified spatial and behavioral determinants of railway station access time through systematic literature review',
      'Validated key predictors via statistical hypothesis testing (t-test, ANOVA) on 15,000+ trip records',
      'Developed a multiple linear regression model for station access time, achieving R² > 0.30'
    ],
    tags: ['R', 'Statistical Testing', 'Regression']
  }
];

export const EDUCATIONS: Education[] = [
  {
    id: 'yonsei',
    school: 'Yonsei University',
    location: 'Seoul, South Korea',
    degree: 'B.S. in Urban Planning and Engineering, B.A. in Applied Statistics',
    period: 'Mar. 2021 - Feb. 2026',
    bullets: [
      'Clubs: Student Council, Yonsei Computer Club (YCC), Big Data Analysis (BDA)'
    ]
  },
  {
    id: 'uga',
    school: 'University of Georgia',
    location: 'Athens, GA',
    degree: 'Exchange Student',
    period: 'Aug. 2024 - May 2025',
    bullets: [
      <>
        Research on <a href="https://arxiv.org/abs/2504.03071" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Alzheimer’s-Focused LLM Development</a>
      </>,
      'Clubs: Dogs for the Paws'
    ]
  }
];

export const AWARDS: Award[] = [
  {
    id: 'award-1',
    title: 'Best Capstone Project Award',
    organization: (
      <>
        Dept. of Urban Planning and Engineering, Yonsei University
        <br />
        * Selected for ST-Y RISE Fair Exhibition
      </>
    ),
    year: '2025'
  },
  {
    id: 'award-2',
    title: 'Honorable Mention',
    organization: 'Truist Challenge at UGA Hacks X',
    year: '2025'
  },
  {
    id: 'award-3',
    title: 'Academic Excellence Awards (with Jilli Scholarship)',
    organization: 'Yonsei University',
    year: '2021-2024'
  }
];

export const SKILL_CATEGORIES = {
  languages: ['Python', 'SQL', 'R', 'JavaScript'],
  tools: ['GCP', 'Tableau', 'Looker', 'Superset', 'Git']
};

export const Icons = {
  LinkedIn: () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
  ),
  Github: () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.372.82 1.102.82 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  ),
  Mail: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  ExternalLink: () => (
    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  )
};
