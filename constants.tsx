
import React from 'react';
import { Project, Experience, Award } from './types.ts';

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

export const PROJECTS: Project[] = [
  {
    id: 'drt-impact',
    title: 'Impact of Demand-Responsive Transit (DRT) on Property Values',
    period: 'Sep. 2025 - Dec. 2025',
    role: 'Undergraduate Capstone Project',
    description: 'An RDD-based causal analysis quantifying the impact of DRT as a catalyst for property value appreciation in transport-disadvantaged areas.',
    tags: ['Python', 'Econometrics'],
    image: 'https://raw.githubusercontent.com/jineoni/my-portfolio/53c1a61cbeaa652d1519c02cee5de22ade2cca64/image/capstone.png',
    thumbnailPosition: 'object-right', // 그래프가 있는 우측 강조
    bullets: [
      'Computed regional accessibility indices using Python and GIS to identify target areas',
      'Constructed a 10-year longitudinal dataset merging housing transactions and DRT logs',
      'Applied Regression Discontinuity Design to isolate the causal impact on property values',
      'Synthesized research findings into a comprehensive presentation panel'
    ],
    details: {
      overview: 'An RDD-based causal analysis quantifying the impact of DRT as a catalyst for property value appreciation in transport-disadvantaged areas.',
      problemContext: 'Limited transit options in disadvantaged areas can suppress local housing market potential. While DRT aims to bridge this "mobility gap," its actual impact on property values needed verification through empirical data.',
      proposedSolution: {
        concept: 'Focused on analyzing the relationship between transit accessibility and real estate prices:',
        components: [
          'Target Area Identification: Computed a regional accessibility index using Python and GIS to identify transport-disadvantaged areas and grouped regions with similar accessibility profiles.',
          'Dataset Construction: Merged 10 years of housing transaction records with official DRT service logs to track long-term price changes.',
          'Causal Analysis: Applied a Regression Discontinuity Design (RDD) to compare property value trends before and after DRT introduction, isolating its specific market effect.'
        ]
      },
      resultsSummary: 'Verified the economic impact of DRT by comparing service areas with similar non-service areas:',
      results: [
        'Value Appreciation: Shifted downward price trends toward a 3.51 growth trend in declining markets, turning a slump into an improvement.',
        'Market Amplification: Achieved a price increase 1.5x stronger than non-service areas in upward markets, driven by enhanced accessibility.',
        'Price Defense: Moderated property value drops during downturns, reducing the extent of price depreciation by 60% compared to non-service areas.'
      ]
    }
  },
  {
    id: 'dotori-ai',
    title: 'Dotori - AI College Application Consulting Agent',
    period: 'Nov. 2024 - Apr. 2025',
    role: 'Team Project',
    description: 'An AI-powered platform providing personalized, cost-effective, and data-backed college admissions strategies for students.',
    tags: ['Python', 'TypeScript', 'OpenAI', 'FastAPI'],
    image: 'https://raw.githubusercontent.com/jineoni/my-portfolio/627152f6c278db2a3f569d8516957849b271d173/image/dotori-dashboard.png',
    thumbnailPosition: 'object-center', // 대시보드 중앙 강조
    repoUrl: 'https://github.com/jineoni/dotori-data',
    bullets: [
      'Automated extraction of Common Data Set (CDS) statistics from university PDF reports',
      'Developed a weighted scoring algorithm to evaluate student-to-school compatibility',
      'Designed a visualization dashboard for identifying strengths and weaknesses per university',
      'Explored AI-driven essay strategies by mapping student experiences to university values'
    ],
    details: {
      overview: 'An AI-powered platform providing personalized, cost-effective, and data-backed college admissions strategies for students.',
      problemContext: 'Professional admissions consulting is often prohibitively expensive, and manual research across multiple institutions is time-intensive, creating significant barriers to information access.',
      proposedSolution: {
        concept: 'Focused on engineering the data pipeline and recommendation logic:',
        components: [
          'Automated Data Extraction: Built a pipeline to convert unstructured PDF reports (Common Data Sets) from various universities into a structured database.',
          'Weighted Matching Algorithm: Developed a scoring system using weighted metrics to categorize school compatibility into Reach, Match, and Safety based on student profiles.',
          'Matching Dashboard: Developed a visualization feature for students to identify their strengths and weaknesses for each matched university.',
          'AI Essay Strategy: Explored the feasibility of generating personalized essay drafts'
        ]
      }
    }
  },
  {
    id: 'mobility-solution',
    title: 'Mobility Solution for Yonsei University Students',
    period: 'Sep. 2023 - Dec. 2023',
    role: 'Team Project',
    description: 'A feasibility study integrating DRT system design and Logit modeling to overcome infrastructure barriers and optimize campus mobility.',
    tags: ['R', 'SP Survey', 'Logit Model'],
    image: 'https://raw.githubusercontent.com/jineoni/my-portfolio/627152f6c278db2a3f569d8516957849b271d173/image/yonsei-mobility-solution.png',
    thumbnailPosition: 'object-center', // 다이어그램 중앙 강조
    repoUrl: 'https://github.com/jineoni/mobility-solution-proposal',
    bullets: [
      'Analyzed student mode-choice behavior via a SP survey of 100+ users',
      'Estimated behavioral drivers and choice probabilities using a MNL model',
      'Evaluated the feasibility of a campus-wide Demand-Responsive Transit (DRT) shuttle'
    ],
    details: {
      overview: 'A feasibility study integrating DRT system design and Logit modeling to overcome infrastructure barriers and optimize campus mobility.',
      problemContext: 'Steep slopes and narrow pedestrian paths in residential areas discourage walking and increase commute stress. Existing fixed-route shuttles lack the flexibility to adapt to the dynamic demand patterns of the student population.',
      proposedSolution: {
        concept: 'Focused on system design and behavioral modeling:',
        components: [
          'System & Operation Design: Proposed an app-based DRT model featuring real-time requests, tiered fare policies, and UWB-based secure boarding verification.',
          'Routing Algorithm: Applied K-means clustering for initial assignment and developed logic to minimize additional travel time during dynamic route updates.',
          'Discrete Choice Modeling: Designed a Stated-Preference (SP) survey and built a Logit model to analyze the utility of DRT compared to walking, local buses, and personal mobility.',
          'Model Optimization: Identified and resolved critical estimation errors, such as multicollinearity in fare variables and lack of variation in fixed-level parameters.'
        ]
      },
      results: [
        'Behavioral Insights: Quantified the negative impact of access time and fares on transit utility, providing a data-driven basis for DRT adoption.',
        'Demographic Analysis: Identified significant variations in transit utility based on gender, age, and academic status (e.g., higher PM utility for undergraduates).',
        'Methodological Rigor: Improved model accuracy by restructuring variable levels, ensuring statistically significant coefficient estimation for future mobility studies.'
      ]
    }
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'kakao-mobility',
    company: 'Kakao Mobility',
    location: 'Seongnam, South Korea',
    role: 'Data Science Intern',
    period: 'May 2025 - Feb. 2026',
    logo: 'https://raw.githubusercontent.com/jineoni/my-portfolio/bff1c21c02b095544e856cc1c33faa83b7e3d6a3/kakaomobility.png',
    description: "South Korea’s leading mobility platform, providing integrated transportation services including taxi-hailing, navigation, and parking.",
    websiteUrl: 'https://www.kakaomobility.com/',
    bullets: [
      <div className="mb-2">
        <h5 className="text-[15px] font-bold text-slate-900 dark:text-slate-100 mb-1">Dashboard Development</h5>
        <p className="text-[15px] text-slate-600 dark:text-slate-300 mb-2">Developed real-time dashboards to monitor routing performance and system reliability.</p>
        <ul className="space-y-2 ml-4">
          <li className="flex items-start gap-2">
            <span className="text-slate-300 dark:text-slate-600 mt-1.5 h-1 w-1 rounded-full shrink-0 bg-slate-400 dark:bg-slate-500" />
            <span className="text-[15px] text-slate-600 dark:text-slate-300"><strong className="text-slate-900 dark:text-slate-100">Integrated Routing Dashboard:</strong> Built a centralized dashboard using Superset to track key routing metrics and detect system anomalies in real-time</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-slate-300 dark:text-slate-600 mt-1.5 h-1 w-1 rounded-full shrink-0 bg-slate-400 dark:bg-slate-500" />
            <span className="text-[15px] text-slate-600 dark:text-slate-300"><strong className="text-slate-900 dark:text-slate-100">Metric Logic Reconstruction:</strong> Redefined and implemented core metrics, including Follow-link rate and Route Adherence.</span>
          </li>
        </ul>
      </div>,
      <div className="mb-2">
        <h5 className="text-[15px] font-bold text-slate-900 dark:text-slate-100 mb-1">Data Analysis</h5>
        <p className="text-[15px] text-slate-600 dark:text-slate-300 mb-2">Performed in-depth statistical investigations to drive data-informed improvements across the navigation service.</p>
        <ul className="space-y-2 ml-4">
          <li className="flex items-start gap-2">
            <span className="text-slate-300 dark:text-slate-600 mt-1.5 h-1 w-1 rounded-full shrink-0 bg-slate-400 dark:bg-slate-500" />
            <span className="text-[15px] text-slate-600 dark:text-slate-300"><strong className="text-slate-900 dark:text-slate-100">Signal Cycle Estimation:</strong> Estimated intersection signal cycles using Lomb-Scargle frequency analysis to assist in ETA model calibration; applied sliding windows to handle irregular data intervals</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-slate-300 dark:text-slate-600 mt-1.5 h-1 w-1 rounded-full shrink-0 bg-slate-400 dark:bg-slate-500" />
            <span className="text-[15px] text-slate-600 dark:text-slate-300"><strong className="text-slate-900 dark:text-slate-100">Edge Case Analysis:</strong> Conducted diagnostic EDA on high-error trajectories to pinpoint link-level drivers of speed discrepancies against ground-truth logs.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-slate-300 dark:text-slate-600 mt-1.5 h-1 w-1 rounded-full shrink-0 bg-slate-400 dark:bg-slate-500" />
            <span className="text-[15px] text-slate-600 dark:text-slate-300"><strong className="text-slate-900 dark:text-slate-100">Road Clustering:</strong> Developed a methodology to distinguish road types by clustering dynamic traffic patterns (PCA + K-means) based on time-space trajectories</span>
          </li>
        </ul>
      </div>
    ],
    tags: ['Python', 'SQL', 'GCP', 'Superset']
  },
  {
    id: 'yonsei-lab',
    company: 'Transportation Planning Lab, Yonsei University',
    location: 'Seoul, South Korea',
    role: 'Research Intern',
    period: 'Mar. 2024 - Jun. 2024',
    logo: 'https://raw.githubusercontent.com/jineoni/my-portfolio/bff1c21c02b095544e856cc1c33faa83b7e3d6a3/yonsei.png',
    description: "Academic research laboratory focused on urban transportation systems, travel behavior analysis, and demand forecasting.",
    bullets: [
      <div className="mb-2">
        <h5 className="text-[15px] font-bold text-slate-900 dark:text-slate-100 mb-1">Modeling</h5>
        <p className="text-[15px] text-slate-600 dark:text-slate-300 mb-2">Developed a predictive model for railway station access time to enhance the accuracy of mode choice simulations.</p>
        <ul className="space-y-2 ml-4">
          <li className="flex items-start gap-2">
            <span className="text-slate-300 dark:text-slate-600 mt-1.5 h-1 w-1 rounded-full shrink-0 bg-slate-400 dark:bg-slate-500" />
            <span className="text-[15px] text-slate-600 dark:text-slate-300">Identified spatial and behavioral determinants of railway station access time through a systematic literature review</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-slate-300 dark:text-slate-600 mt-1.5 h-1 w-1 rounded-full shrink-0 bg-slate-400 dark:bg-slate-500" />
            <span className="text-[15px] text-slate-600 dark:text-slate-300">Validated significant predictors using statistical hypothesis testing (t-test, ANOVA) on a dataset of over 15,000 individual trip records</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-slate-300 dark:text-slate-600 mt-1.5 h-1 w-1 rounded-full shrink-0 bg-slate-400 dark:bg-slate-500" />
            <span className="text-[15px] text-slate-600 dark:text-slate-300">Developed a Multiple Linear Regression (MLR) model achieving R² &gt; 0.30, providing refined access-time parameters for regional mode choice models</span>
          </li>
        </ul>
      </div>
    ],
    tags: ['Python', 'R']
  }
];

export const AWARDS: Award[] = [
  {
    id: 'research-1',
    title: 'Research on Alzheimer’s-Focused LLM Development',
    organization: (
      <div className="flex flex-col gap-1">
        <span className="text-slate-500 dark:text-slate-400 font-medium">University of Georgia</span>
        <a 
          href="https://arxiv.org/abs/2504.03071" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-1"
        >
          arXiv:2504.03071
          <Icons.ExternalLink />
        </a>
      </div>
    ),
    year: '2025'
  },
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
    organization: (
      <div className="flex flex-col gap-1">
        <span className="text-slate-500 dark:text-slate-400 font-medium">Truist Challenge at UGA Hacks X</span>
        <a 
          href="https://devpost.com/software/ugahacksxfincompare" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-1"
        >
          Devpost
          <Icons.ExternalLink />
        </a>
      </div>
    ),
    year: '2025'
  },
  {
    id: 'award-3',
    title: 'Academic Excellence Awards',
    organization: (
      <>
        Yonsei University
        <br />
        * with Jilli Scholarship
      </>
    ),
    year: '2021-2024'
  }
];

export const SKILL_CATEGORIES = {
  languages: ['Python', 'SQL', 'R', 'JavaScript'],
  tools: ['GCP', 'Tableau', 'Looker', 'Superset', 'Git']
};
