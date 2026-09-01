import resumePdf from '../assets/documents/PankajPede_UXUiDesigner_12.pdf';

export type WorkItem = {
  num: string;
  title: string;
  desc: string;
  link: string;
  external?: boolean;
};

export type ConnectItem = {
  id: string;
  label: string;
  sublabel: string;
  link: string;
  iconName: 'linkedin' | 'whatsapp' | 'email' | 'download';
  external?: boolean;
  download?: boolean;
};

export const SELECTED_WORK_NAV: WorkItem[] = [
  {
    num: '01',
    title: 'UNITYONE',
    desc: 'Designing clarity across complex IT operations',
    link: '/work/unityone',
  },
  {
    num: '02',
    title: 'FISPOKE',
    desc: 'Private banking & wealth management platform',
    link: '/work/fispoke',
  },
  {
    num: '03',
    title: 'PRISMX',
    desc: 'Configurable application-generation platform',
    link: '/work/prismx',
  },
];

export const TOOLS_EXPERIMENTS_NAV: WorkItem[] = [
  {
    num: '01',
    title: 'BRAND BUILDER',
    desc: 'Specimen & token generator',
    link: 'https://pankajpede.github.io/OX-brandbuilder/#/brand-builder',
    external: true,
  },
  {
    num: '02',
    title: 'SEMANTIC UI BUILDER',
    desc: 'Component architecture & tokenization',
    link: '/#ufx-studio',
  },
  {
    num: '03',
    title: 'UX AUDITOR',
    desc: 'Heuristic & accessibility auditor',
    link: '/#ufx-studio',
  },
  {
    num: '04',
    title: 'DESIGN TOKEN BUILDER',
    desc: 'CSS & design variable pipeline',
    link: '/#ufx-studio',
  },
];

export const CONNECT_NAV: ConnectItem[] = [
  {
    id: 'linkedin',
    label: 'CONNECT ON LINKEDIN',
    sublabel: 'Professional profile',
    link: 'https://www.linkedin.com/in/pankaj-pede/',
    iconName: 'linkedin',
    external: true,
  },
  {
    id: 'whatsapp',
    label: 'WHATSAPP',
    sublabel: 'Start a conversation',
    link: 'https://wa.me/919561311757',
    iconName: 'whatsapp',
    external: true,
  },
  {
    id: 'email',
    label: 'EMAIL ME',
    sublabel: 'Send me an email',
    link: 'mailto:pede.pankaj@gmail.com',
    iconName: 'email',
  },
  {
    id: 'resume',
    label: 'DOWNLOAD RESUME',
    sublabel: 'PDF · Updated 2026',
    link: resumePdf,
    iconName: 'download',
    download: true,
  },
];
