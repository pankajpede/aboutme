export type Certification = {
  id: string;
  title: string;
  status: 'COMPLETED' | 'IN PROGRESS' | 'FUTURE';
};

export const certifications: Certification[] = [
  { id: 'cert-1', title: 'Google UX Design Professional Certificate', status: 'COMPLETED' },
  { id: 'cert-2', title: 'Get Started Figma', status: 'COMPLETED' },
  { id: 'cert-3', title: 'Figma UI UX Design Advanced', status: 'COMPLETED' },
  { id: 'cert-4', title: 'ChatGPT Prompt Engineering for UX Design', status: 'COMPLETED' },
  { id: 'cert-5', title: 'Google Project Management', status: 'IN PROGRESS' },
  { id: 'cert-6', title: 'Agile', status: 'FUTURE' },
  { id: 'cert-7', title: 'Scrum', status: 'FUTURE' },
  { id: 'cert-8', title: 'Kanban', status: 'FUTURE' },
  { id: 'cert-9', title: 'Product Management', status: 'FUTURE' },
];
