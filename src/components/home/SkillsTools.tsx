import { SectionLabel } from '../ui/SectionLabel';

import iconFigma from '../../assets/images/skills/figma.svg';
import iconMiro from '../../assets/images/skills/miro.svg';
import iconGithub from '../../assets/images/skills/github.svg';

const IconOpenAI = () => (
  <svg className="w-3.5 h-3.5 shrink-0 text-ink" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7938.7938 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5355-3.0137l.142.0852 4.783 2.7582a.7748.7748 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 8.4956a4.485 4.485 0 0 1 2.3657-1.9728v5.6868a.7653.7653 0 0 0 .3879.6765l5.8144 3.359-2.0201 1.1687a.0758.0758 0 0 1-.071 0l-4.8303-2.7913A4.4944 4.4944 0 0 1 2.3408 8.4956zm16.0993 3.8558l-5.8428-3.3685 2.0201-1.1686a.0758.0758 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.682a.7653.7653 0 0 0-.4021-.6764zm2.0107-3.0231l-.142-.0852-4.7735-2.7582a.7748.7748 0 0 0-.7806 0l-5.8428 3.3685V7.521a.0804.0804 0 0 1 .0332-.0615l4.981-2.8764a4.4992 4.4992 0 0 1 6.5247 4.7417zM9.0143 14.1616l-2.02-1.1686a.071.071 0 0 1-.038-.052V7.3584a4.504 4.504 0 0 1 7.371-3.4536l-.142.0804-4.7782 2.7582a.7938.7938 0 0 0-.3928.6813v6.7369zm1.3121-2.9096l2.368-1.3692 2.368 1.3692v2.7384l-2.368 1.3692-2.368-1.3692V11.252z"/>
  </svg>
);

const IconClaude = () => (
  <svg className="w-3.5 h-3.5 shrink-0 text-[#D97757]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2z" />
  </svg>
);

const IconGemini = () => (
  <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none">
    <path d="M12 0C12 6.627 6.627 12 0 12C6.627 12 12 17.373 12 24C12 17.373 17.373 12 24 12C17.373 12 12 6.627 12 0Z" fill="url(#gemini-grad-st)" />
    <defs>
      <linearGradient id="gemini-grad-st" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
        <stop stopColor="#1A73E8" />
        <stop offset="0.5" stopColor="#8AB4F8" />
        <stop offset="1" stopColor="#D93025" />
      </linearGradient>
    </defs>
  </svg>
);

const IconAntigravity = () => (
  <svg className="w-3.5 h-3.5 shrink-0 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 3v18M3 12h18" />
    <circle cx="12" cy="12" r="3" fill="currentColor" />
  </svg>
);

const IconCursor = () => (
  <svg className="w-3.5 h-3.5 shrink-0 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="3 11 22 2 13 21 11 13 3 11" />
  </svg>
);

const IconNotion = () => (
  <svg className="w-3.5 h-3.5 shrink-0 text-ink" viewBox="0 0 24 24" fill="currentColor">
    <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.047-.326L17.86 1.777c-.467-.373-.84-.373-1.68-.326L3.992 2.617c-.373.047-.466.233-.373.466l.84 1.125zm1.12 4.108v12.787c0 .653.466.84 1.12.793l14.428-.887c.746-.047.887-.606.887-1.167V7.15c0-.513-.233-.746-.746-.7l-14.894.887c-.513.047-.795.326-.795.979zm13.447.606c.093.42.047.887-.373.933l-.7.093v10.547c-.56.326-1.167.42-1.727.42-.84 0-1.26-.28-1.587-.84l-4.527-7.233v6.86c.653.047.933.187 1.026.653l-3.5.233c.093-.466.42-.606 1.026-.653V9.297c0-.513.187-.793.746-.84.793-.093 1.353.187 1.773.84l4.62 7.373V9.67c-.653-.047-.887-.233-.98-.653l3.253-.187z"/>
  </svg>
);

const IconFigJam = () => (
  <svg className="w-3.5 h-3.5 shrink-0 text-[#9747FF]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-2h2v2h-2zm0-11h2v7h-2v-7z" />
  </svg>
);

const IconStorybook = () => (
  <svg className="w-3.5 h-3.5 shrink-0 text-[#FF4785]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16.71.243l-.12 2.718a.157.157 0 0 0 .232.14l1.782-.96a.158.158 0 0 1 .23.141v18.72c0 .484-.37.892-.853.924l-11.8.8A.934.934 0 0 1 5.25 21.8V4.538a.933.933 0 0 1 .867-.93l10.593-.765V.243z"/>
  </svg>
);

const IconVSCode = () => (
  <svg className="w-3.5 h-3.5 shrink-0 text-[#007ACC]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.12a.75.75 0 0 0-.96.06L.26 7.73a.75.75 0 0 0 .02 1.08l4.49 4.07-4.49 4.07a.75.75 0 0 0-.02 1.08l1.705 1.66a.75.75 0 0 0 .96.06l4.12-3.12 9.46 8.63c.49.45 1.2.56 1.705.29l4.94-2.377c.54-.26.85-.79.85-1.38V3.967c0-.59-.31-1.12-.85-1.38zM18 16.5l-6.5-4.5L18 7.5v9z"/>
  </svg>
);

const IconChart = () => (
  <svg className="w-3.5 h-3.5 shrink-0 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="20" x2="18" y2="10" />
    <line x1="12" y1="20" x2="12" y2="4" />
    <line x1="6" y1="20" x2="6" y2="14" />
  </svg>
);

export function SkillsTools() {
  const capabilityCards = [
    {
      number: '01',
      title: 'PRODUCT STRATEGY',
      items: [
        'Problem framing',
        'Opportunity discovery',
        'Prioritization',
        'Product thinking'
      ],
      toolItems: [
        { name: 'ChatGPT', CustomIcon: IconOpenAI },
        { name: 'Gemini', CustomIcon: IconGemini },
        { name: 'Claude', CustomIcon: IconClaude },
        { name: 'Notion', CustomIcon: IconNotion }
      ]
    },
    {
      number: '02',
      title: 'EXPERIENCE & SYSTEMS',
      items: [
        'UX architecture',
        'User journeys',
        'Design systems',
        'Tokens & Accessibility'
      ],
      toolItems: [
        { name: 'Figma', iconSrc: iconFigma },
        { name: 'FigJam', CustomIcon: IconFigJam },
        { name: 'Miro', iconSrc: iconMiro },
        { name: 'Storybook', CustomIcon: IconStorybook }
      ]
    },
    {
      number: '03',
      title: 'DATA & INSIGHTS',
      items: [
        'Data visualization',
        'Dashboards',
        'Complex workflows',
        'Decision making'
      ],
      toolItems: [
        { name: 'ECharts', CustomIcon: IconChart },
        { name: 'Chart.js', CustomIcon: IconChart },
        { name: 'InfoVis', CustomIcon: IconChart }
      ]
    },
    {
      number: '04',
      title: 'BUILD & DELIVERY',
      items: [
        'Prototyping',
        'Design → Code',
        'Collaboration',
        'Rapid implementation'
      ],
      toolItems: [
        { name: 'Antigravity', CustomIcon: IconAntigravity },
        { name: 'Cursor', CustomIcon: IconCursor },
        { name: 'GitHub', iconSrc: iconGithub },
        { name: 'VS Code', CustomIcon: IconVSCode }
      ]
    }
  ];

  return (
    <section id="skills-tools" className="py-14 lg:py-16 bg-surface border-t border-border overflow-hidden">
      <div className="container mx-auto px-5 lg:px-12 xl:px-16 space-y-10">
        
        {/* Compact Section Header */}
        <div>
          <SectionLabel number="01" title="PRODUCT CAPABILITIES" />
          <h3 className="font-display text-[36px] font-semibold leading-[1] text-ink mt-2">
            What I bring to product.<br />
            <span className="text-primary">Design expertise & product thinking.</span>
          </h3>
        </div>

        {/* 4 Pillar Capability Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {capabilityCards.map((card) => (
            <div
              key={card.number}
              className="p-5 bg-background border border-border rounded-xl hover:border-border/80 transition-all duration-300 flex flex-col justify-between shadow-2xs"
            >
              <div>
                {/* Top Metadata Number */}
                <div className="flex items-center justify-between mb-2.5">
                  <span className="font-mono text-[11px] font-bold tracking-widest text-muted">
                    {card.number}
                  </span>
                </div>

                {/* Category Title */}
                <h4 className="font-display text-sm sm:text-base font-bold text-ink uppercase tracking-normal mb-3.5 leading-snug">
                  {card.title}
                </h4>

                {/* Capability List Items */}
                <ul className="space-y-2 mb-5">
                  {card.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="text-xs sm:text-sm font-medium text-ink/90 flex items-start gap-2 leading-tight"
                    >
                      <span className="inline-block w-1.5 h-1.5 rounded-full mt-1 shrink-0 bg-muted/40" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Bottom: Supporting Tools Evidence */}
              <div className="pt-3.5 border-t border-border/60 mt-auto">
                <div className="text-[9px] font-mono font-semibold tracking-wider text-muted/70 uppercase mb-2">
                  TOOLS USED
                </div>
                <div className="flex flex-wrap items-center gap-1.5">
                  {card.toolItems.map((tool, tIdx) => (
                    <div
                      key={tIdx}
                      className="px-2 py-0.5 bg-surface border border-border/80 rounded-md flex items-center gap-1.5 text-[10.5px] font-display font-medium text-ink/90 hover:border-primary/40 transition-colors shadow-2xs"
                    >
                      {tool.CustomIcon ? (
                        <tool.CustomIcon />
                      ) : (
                        <img
                          src={tool.iconSrc}
                          alt={`${tool.name} logo`}
                          className="w-3 h-3 shrink-0 object-contain"
                        />
                      )}
                      <span>{tool.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
