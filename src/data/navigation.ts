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
    title: 'PRISMX',
    desc: 'Configurable application-generation platform',
    link: '/work/prismx',
  },
  {
    num: '02',
    title: 'UNITYONE',
    desc: 'Designing clarity across complex IT operations',
    link: '/work/unityone',
  },
  {
    num: '03',
    title: 'FISPOKE',
    desc: 'Product / platform experience',
    link: '/work/fispoke',
  },
];

export const TOOLS_EXPERIMENTS_NAV: WorkItem[] = [
  {
    num: '01',
    title: 'UX TOOLS',
    desc: "Tools and experiments I'm building",
    link: '/ux-tools',
  },
  {
    num: '02',
    title: 'DESIGN SYSTEM TOOLS',
    desc: 'Systems, tokens and UI experiments',
    link: '/ux-tools#ds',
  },
  {
    num: '03',
    title: 'AI × UX',
    desc: 'AI-powered UX experiments',
    link: '/ux-tools#ai',
  },
  {
    num: '04',
    title: 'PRODUCT EXPERIMENTS',
    desc: 'Self-initiated product ideas',
    link: '/ux-tools#experiments',
  },
  {
    num: '05',
    title: 'COMING SOON',
    desc: 'New experiments in progress',
    link: '/ux-tools#coming-soon',
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
