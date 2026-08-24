export type ContentItem = {
  id: string;
  type: 'ARTICLE' | 'REEL' | 'VIDEO';
  title: string;
  status: 'COMING SOON' | 'PUBLISHED';
};

export const studioContent: ContentItem[] = [
  { id: 'article-1', type: 'ARTICLE', title: 'Product teardown', status: 'COMING SOON' },
  { id: 'reel-1', type: 'REEL', title: 'UX tool build', status: 'COMING SOON' },
  { id: 'video-1', type: 'VIDEO', title: 'AI × UX experiment', status: 'COMING SOON' },
];
