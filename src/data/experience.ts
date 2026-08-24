export type ExperienceStep = {
  id: string;
  role: string;
  year: string;
  isCurrent?: boolean;
  isFuture?: boolean;
};

export const experienceTimeline: ExperienceStep[] = [
  { id: 'web', role: 'WEB DESIGN', year: '2013' },
  { id: 'uxui', role: 'UX/UI', year: '2017' },
  { id: 'seniorux', role: 'SENIOR UX', year: '2018' },
  { id: 'productdesign', role: 'PRODUCT DESIGN', year: 'NOW', isCurrent: true },
  { id: 'productthinking', role: 'PRODUCT THINKING', year: 'NEXT', isFuture: true },
  { id: 'productmanagement', role: 'PRODUCT MANAGEMENT', year: 'LONG TERM', isFuture: true },
];
