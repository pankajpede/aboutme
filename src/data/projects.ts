export type Project = {
  id: string;
  number: string;
  title: string;
  category: string;
  headline?: string;
  description: string;
  role: string;
  tags: string[];
  imagePlaceholder: string;
  link: string;
  websiteUrl?: string;
  experiences?: {
    num: string;
    title: string;
    desc: string;
    link?: string;
  }[];
};

export const projects: Project[] = [
  {
    id: 'unityone',
    number: '01',
    title: 'UNITYONE',
    category: 'PRODUCT DESIGN · PLATFORM UX',
    headline: 'Designing clarity across complex IT operations.',
    description: 'I designed experiences across complex IT operations, AI-assisted workflows and data-heavy reporting, bringing multiple operational needs into a more coherent product experience.',
    role: 'SENIOR PRODUCT DESIGNER',
    tags: ['PRODUCT DESIGN', 'UX ARCHITECTURE', 'COMPLEX SYSTEMS', 'DATA EXPERIENCE'],
    imagePlaceholder: 'UnityOne Unified Operations Console',
    link: '/work/unityone',
    websiteUrl: 'https://www.unitedlayer.com/unityone',
    experiences: [
      {
        num: '01',
        title: 'Complex IT Operations',
        desc: 'Making complex IT operations understandable and actionable.',
        link: '/work/unityone/complex-it-operations',
      },
      {
        num: '02',
        title: 'AI Assistant',
        desc: 'Designing AI-assisted operational decision making.',
        link: '/work/unityone/ai-assistant',
      },
      {
        num: '03',
        title: 'Reporting & Data',
        desc: 'Turning operational data into actionable insight.',
        link: '/work/unityone/reporting-data',
      },
    ],
  },
  {
    id: 'fispoke',
    number: '02',
    title: 'FISPOKE',
    category: 'PRIVATE BANKING PLATFORM · FINTECH',
    headline: 'Connecting independent financial advisors with private banking solutions.',
    description: 'Fispoke connects independent financial advisors (RIAs) with private banking and lending solutions through one platform — providing institutional capabilities without building a bank.',
    role: 'SENIOR PRODUCT DESIGNER',
    tags: ['PRIVATE BANKING', 'RIA PLATFORM', 'FINTECH UX', 'WEALTH MANAGEMENT'],
    imagePlaceholder: 'Fispoke Private Banking Platform & Advisor Journeys',
    link: '/work/fispoke',
    websiteUrl: 'https://www.fispoke.com',
    experiences: [
      {
        num: '01',
        title: 'Advisor Banking Portal',
        desc: 'Giving independent RIAs unified visibility across client accounts, liquidity and lending.',
      },
      {
        num: '02',
        title: 'High-Yield Cash & Savings',
        desc: 'Automated cash allocation & annual interest yield optimization for client reserves.',
      },
      {
        num: '03',
        title: 'Securities-Backed & Credit',
        desc: 'Custom liquidity, securities-backed credit lines, and real-estate financing workflows.',
      },
    ],
  },
  {
    id: 'prismx',
    number: '03',
    title: 'PRISMX',
    category: 'PRODUCT DESIGN · PLATFORM UX',
    headline: 'Designing a configurable application-generation platform.',
    description: 'I designed the experience and design system behind a platform that generates applications while allowing client-specific control over theme, components, typography and visual language.',
    role: 'SENIOR PRODUCT DESIGNER',
    tags: ['PRODUCT DESIGN', 'PLATFORM UX', 'DESIGN SYSTEMS', 'CONFIGURATION'],
    imagePlaceholder: 'PrismX Configuration & Live Preview Platform',
    link: '/work/prismx',
    websiteUrl: 'https://www.unitedlayer.com',
  },
];
