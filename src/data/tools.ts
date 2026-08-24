export type UXTool = {
  id: string;
  title: string;
  status: 'COMING SOON' | 'EXPLORING' | 'LIVE';
};

export const tools: UXTool[] = [
  {
    id: 'semantic-ui',
    title: 'SEMANTIC UI BUILDER',
    status: 'COMING SOON',
  },
  {
    id: 'brand-builder',
    title: 'BRAND BUILDER',
    status: 'COMING SOON',
  },
  {
    id: 'design-token',
    title: 'DESIGN TOKEN BUILDER',
    status: 'COMING SOON',
  },
  {
    id: 'ai-ux',
    title: 'AI UX TOOLS',
    status: 'COMING SOON',
  },
];
