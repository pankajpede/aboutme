import { SectionLabel } from '../ui/SectionLabel';
import { FiArrowUpRight, FiLayers, FiSliders, FiBox, FiCheckCircle2 } from '../ui/Icons';

export function UXToolsLab() {
  const builtTools = [
    {
      id: 'brand-builder',
      number: '01',
      title: 'Brand Builder',
      subtitle: 'Specimen & Token Generator',
      description: 'A specimen generator for testing typography scaling, HSL color harmony, and visual design token systems across themes.',
      status: 'LIVE TOOL',
      isLive: true,
      link: 'https://pankajpede.github.io/OX-brandbuilder/#/brand-builder',
      icon: FiSliders,
      tags: ['Typography', 'Color Systems', 'Design Specs']
    },
    {
      id: 'semantic-ui',
      number: '02',
      title: 'Semantic UI Builder',
      subtitle: 'Component Architecture & Tokenization',
      description: 'An internal tool built to automate design token mapping, component composition, and clean semantic HTML/CSS generation.',
      status: 'INTERNAL TOOL',
      icon: FiLayers,
      tags: ['Design Tokens', 'HTML/CSS', 'UI Architecture']
    },
    {
      id: 'ux-auditor',
      number: '03',
      title: 'UX Auditor',
      subtitle: 'Heuristic & Accessibility Auditor',
      description: 'Automated UX audit tool evaluating interface accessibility, contrast ratios, WCAG guidelines, and usability patterns.',
      status: 'INTERNAL TOOL',
      icon: FiCheckCircle2,
      tags: ['Accessibility', 'Heuristics', 'UX Audit']
    },
    {
      id: 'token-builder',
      number: '04',
      title: 'Design Token Builder',
      subtitle: 'CSS & Design Variable Pipeline',
      description: 'Tool for managing cross-platform design tokens, theme variables, and automated export to Tailwind & SCSS.',
      status: 'UTILITY',
      icon: FiBox,
      tags: ['Tokens', 'CSS Variables', 'Design Systems']
    }
  ];

  return (
    <section id="ufx-studio" className="py-20 lg:py-16 bg-surface border-t border-border overflow-hidden">
      <div className="container mx-auto px-5 lg:px-12 xl:px-16 space-y-10">

        {/* Section Header */}
        <div>
          <SectionLabel number="03" title="UFX STUDIO" />
          <h3 className="font-display text-[36px] font-semibold leading-[1] text-ink mt-2">
            Tools I build.<br />
            <span className="text-primary">Building the tools I wish existed.</span>
          </h3>
        </div>

        {/* 4 Tool Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {builtTools.map((tool) => {
            const IconComponent = tool.icon;
            return (
              <div
                key={tool.id}
                className="p-5 bg-background border border-border rounded-xl hover:border-border/80 transition-all duration-300 flex flex-col justify-between shadow-2xs group"
              >
                <div>
                  {/* Top Metadata */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-[11px] font-bold tracking-widest text-muted">
                      {tool.number}
                    </span>
                    <span
                      className={`text-[9px] font-mono font-bold tracking-wider uppercase px-2 py-0.5 rounded border ${
                        tool.isLive
                          ? 'bg-primary/10 text-primary border-primary/30'
                          : 'bg-surface text-muted border-border'
                      }`}
                    >
                      {tool.status}
                    </span>
                  </div>

                  {/* Tool Icon & Title */}
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-surface border border-border flex items-center justify-center text-ink group-hover:border-primary/40 group-hover:text-primary transition-colors shrink-0">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <h4 className="font-display text-sm sm:text-base font-bold text-ink tracking-normal leading-snug group-hover:text-primary transition-colors">
                      {tool.title}
                    </h4>
                  </div>

                  <p className="text-[11px] font-mono font-semibold text-muted mb-3">
                    {tool.subtitle}
                  </p>

                  <p className="text-xs text-muted font-medium leading-relaxed mb-4">
                    {tool.description}
                  </p>
                </div>

                {/* Tags & Action Link Bottom */}
                <div className="pt-3 border-t border-border/60 mt-auto flex flex-col gap-2.5">
                  <div className="flex flex-wrap gap-1.5">
                    {tool.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[9.5px] font-mono font-medium px-2 py-0.5 bg-surface border border-border/70 rounded text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {tool.link && (
                    <a
                      href={tool.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-[11px] font-bold tracking-widest uppercase text-primary hover:text-ink transition-colors group/link mt-1"
                    >
                      LAUNCH TOOL
                      <FiArrowUpRight className="ml-1 w-3.5 h-3.5 text-primary group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 transition-transform" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
