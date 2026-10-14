import { SectionLabel } from '../ui/SectionLabel';
import { projects } from '../../data/projects';
import { FiArrowUpRight } from '../ui/Icons';
import { Link } from 'react-router-dom';
import dcRoomMed from '../../assets/images/case-study/dc-room-medium.jpg';
import dcRoomLarge from '../../assets/images/case-study/dc-room-large.jpg';
import fispokeCaseStudy from '../../assets/images/case-study/fispoke-casestudy.avif';
import fispokeLogo from '../../assets/images/logo/fispoke-logo.svg';
import prismxMed from '../../assets/images/case-study/prismx-medium.jpg';
import prismxLarge from '../../assets/images/case-study/prismx-large.jpg';
import iconFigma from '../../assets/images/skills/figma.svg';
import iconMiro from '../../assets/images/skills/miro.svg';
import iconGithub from '../../assets/images/skills/github.svg';

const IconVSCode = ({ className = "w-3.5 h-3.5" }: { className?: string }) => (
  <svg className={`${className} shrink-0 text-[#007ACC]`} viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.12a.75.75 0 0 0-.96.06L.26 7.73a.75.75 0 0 0 .02 1.08l4.49 4.07-4.49 4.07a.75.75 0 0 0-.02 1.08l1.705 1.66a.75.75 0 0 0 .96.06l4.12-3.12 9.46 8.63c.49.45 1.2.56 1.705.29l4.94-2.377c.54-.26.85-.79.85-1.38V3.967c0-.59-.31-1.12-.85-1.38zM18 16.5l-6.5-4.5L18 7.5v9z"/>
  </svg>
);

const IconStorybook = ({ className = "w-3.5 h-3.5" }: { className?: string }) => (
  <svg className={`${className} shrink-0 text-[#FF4785]`} viewBox="0 0 24 24" fill="currentColor">
    <path d="M16.71.243l-.12 2.718a.157.157 0 0 0 .232.14l1.782-.96a.158.158 0 0 1 .23.141v18.72c0 .484-.37.892-.853.924l-11.8.8A.934.934 0 0 1 5.25 21.8V4.538a.933.933 0 0 1 .867-.93l10.593-.765V.243z"/>
  </svg>
);

const IconNotion = ({ className = "w-3.5 h-3.5" }: { className?: string }) => (
  <svg className={`${className} shrink-0 text-ink`} viewBox="0 0 24 24" fill="currentColor">
    <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.047-.326L17.86 1.777c-.467-.373-.84-.373-1.68-.326L3.992 2.617c-.373.047-.466.233-.373.466l.84 1.125zm1.12 4.108v12.787c0 .653.466.84 1.12.793l14.428-.887c.746-.047.887-.606.887-1.167V7.15c0-.513-.233-.746-.746-.7l-14.894.887c-.513.047-.795.326-.795.979zm13.447.606c.093.42.047.887-.373.933l-.7.093v10.547c-.56.326-1.167.42-1.727.42-.84 0-1.26-.28-1.587-.84l-4.527-7.233v6.86c.653.047.933.187 1.026.653l-3.5.233c.093-.466.42-.606 1.026-.653V9.297c0-.513.187-.793.746-.84.793-.093 1.353.187 1.773.84l4.62 7.373V9.67c-.653-.047-.887-.233-.98-.653l3.253-.187z"/>
  </svg>
);

const IconCloud = ({ className = "w-3.5 h-3.5" }: { className?: string }) => (
  <svg className={`${className} shrink-0 text-[#0284C7]`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
  </svg>
);

type ToolItem = {
  name: string;
  iconSrc?: string;
  CustomIcon?: React.ComponentType<{ className?: string }>;
};

const unityoneTools: ToolItem[] = [
  { name: 'Figma', iconSrc: iconFigma },
  { name: 'Cloud', CustomIcon: IconCloud },
  { name: 'VS Code', CustomIcon: IconVSCode },
  { name: 'Miro', iconSrc: iconMiro },
];

const fispokeTools: ToolItem[] = [
  { name: 'Figma', iconSrc: iconFigma },
  { name: 'Miro', iconSrc: iconMiro },
  { name: 'Notion', CustomIcon: IconNotion },
  { name: 'VS Code', CustomIcon: IconVSCode },
];

const prismxTools: ToolItem[] = [
  { name: 'Figma', iconSrc: iconFigma },
  { name: 'Storybook', CustomIcon: IconStorybook },
  { name: 'VS Code', CustomIcon: IconVSCode },
  { name: 'GitHub', iconSrc: iconGithub },
];

function ToolBadgeList({ tools }: { tools: ToolItem[] }) {
  return (
    <div className="flex flex-wrap items-center gap-2 mb-8">
      {tools.map((tool) => (
        <div
          key={tool.name}
          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-surface/80 border border-border/80 text-[11px] font-medium text-ink/80 hover:border-ink/40 transition-colors"
        >
          {tool.iconSrc ? (
            <img src={tool.iconSrc} alt={tool.name} className="w-3.5 h-3.5 object-contain" />
          ) : tool.CustomIcon ? (
            <tool.CustomIcon className="w-3.5 h-3.5" />
          ) : null}
          <span>{tool.name}</span>
        </div>
      ))}
    </div>
  );
}

export function SelectedWork() {
  const unityone = projects.find((p) => p.id === 'unityone') || projects[0];
  const fispoke = projects.find((p) => p.id === 'fispoke') || projects[1];
  const prismx = projects.find((p) => p.id === 'prismx') || projects[2];

  return (
    <section id="selected-work" className="py-20 lg:py-16 border-t border-border overflow-hidden bg-background">
      <div className="container mx-auto px-5 lg:px-12 xl:px-16">

        <SectionLabel number="04" title="Selected Work" />

        <div className="mb-10">
          <h3 className="font-display text-[36px] font-semibold leading-[1] text-ink mt-2">
            Products I've designed.<br /><span className="text-primary">Experiences I've shaped.</span>
          </h3>
        </div>

        <div className="flex flex-col gap-20">

          {/* Project 01: UNITYONE */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center group">

            {/* Content (Order-1 on Mobile/Tablet, Order-2 on Desktop) */}
            <div className="lg:col-span-5 order-1 lg:order-2">
              <div className="text-[10px] font-bold tracking-[0.08em] text-muted uppercase mb-3">
                01 / {unityone.category}
              </div>
              <h4 className="font-display text-[36px] font-semibold leading-[1] text-ink mt-2 mb-3">{unityone.title}</h4>
              <p className="text-sm font-semibold tracking-wide text-ink uppercase mb-4">{unityone.headline}</p>
              <p className="text-base text-muted mb-6 max-w-md leading-relaxed">{unityone.description}</p>

              {/* Three Product Experiences Grid Showcase */}
              {/* <div className="mb-8 p-4 bg-surface border border-border rounded-lg space-y-3">
                <div className="text-[9px] font-bold tracking-widest text-muted uppercase mb-2">
                  THREE MAJOR PRODUCT EXPERIENCES
                </div>

                <div className="space-y-2.5">
                  <Link
                    to="/work/unityone/complex-it-operations"
                    className="p-2.5 bg-background border border-border/80 hover:border-ink/50 hover:bg-surface rounded-lg flex items-center justify-between gap-2.5 transition-all group/item cursor-pointer block"
                  >
                    <div className="flex items-start gap-2.5">
                      <FiLayers className="w-4 h-4 text-ink shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[11px] font-bold text-ink block group-hover/item:text-primary transition-colors">01 / Complex IT Operations</span>
                        <span className="text-[10px] text-muted leading-tight block">Making complex IT operations understandable and actionable.</span>
                      </div>
                    </div>
                    <FiArrowUpRight className="w-3.5 h-3.5 text-muted group-hover/item:text-primary group-hover/item:-translate-y-0.5 group-hover/item:translate-x-0.5 transition-all shrink-0" />
                  </Link>

                  <Link
                    to="/work/unityone/ai-assistant"
                    className="p-2.5 bg-background border border-border/80 hover:border-ink/50 hover:bg-surface rounded-lg flex items-center justify-between gap-2.5 transition-all group/item cursor-pointer block"
                  >
                    <div className="flex items-start gap-2.5">
                      <FiCpu className="w-4 h-4 text-ink shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[11px] font-bold text-ink block group-hover/item:text-primary transition-colors">02 / AI Assistant</span>
                        <span className="text-[10px] text-muted leading-tight block">Designing AI-assisted operational decision making.</span>
                      </div>
                    </div>
                    <FiArrowUpRight className="w-3.5 h-3.5 text-muted group-hover/item:text-primary group-hover/item:-translate-y-0.5 group-hover/item:translate-x-0.5 transition-all shrink-0" />
                  </Link>

                  <Link
                    to="/work/unityone/reporting-data"
                    className="p-2.5 bg-background border border-border/80 hover:border-ink/50 hover:bg-surface rounded-lg flex items-center justify-between gap-2.5 transition-all group/item cursor-pointer block"
                  >
                    <div className="flex items-start gap-2.5">
                      <FiActivity className="w-4 h-4 text-ink shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[11px] font-bold text-ink block group-hover/item:text-primary transition-colors">03 / Reporting & Data</span>
                        <span className="text-[10px] text-muted leading-tight block">Turning operational data into actionable insight.</span>
                      </div>
                    </div>
                    <FiArrowUpRight className="w-3.5 h-3.5 text-muted group-hover/item:text-primary group-hover/item:-translate-y-0.5 group-hover/item:translate-x-0.5 transition-all shrink-0" />
                  </Link>
                </div>
              </div> */}

              {/* Tools & Tech Stack */}
              <ToolBadgeList tools={unityoneTools} />

              <div className="flex flex-wrap items-center gap-6">
                <Link
                  to={unityone.link}
                  className="inline-flex items-center text-[11px] font-bold tracking-widest uppercase text-primary transition-colors relative group/link"
                >
                  READ CASE STUDY
                  <FiArrowUpRight className="ml-1.5 w-4 h-4 text-primary group-hover/link:-translate-y-1 group-hover/link:translate-x-1 transition-transform" />
                  <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-primary transition-colors"></span>
                </Link>

                {unityone.websiteUrl && (
                  <a
                    href={unityone.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[11px] font-bold tracking-widest uppercase text-muted hover:text-primary transition-colors relative group/web"
                  >
                    VISIT WEBSITE
                    <FiArrowUpRight className="ml-1.5 w-4 h-4 group-hover/web:-translate-y-1 group-hover/web:translate-x-1 transition-transform" />
                  </a>
                )}
              </div>
            </div>

            {/* Visual (Order-2 on Mobile/Tablet, Order-1 on Desktop) */}
            <div className="lg:col-span-7 order-2 lg:order-1">
              <Link to={unityone.link} className="block overflow-hidden rounded-xl border border-border relative bg-background aspect-[16/10] shadow-md group/img">
                <picture>
                  <source media="(min-width: 1024px)" srcSet={dcRoomLarge} />
                  <img
                    src={dcRoomMed}
                    alt="UnityOne Data Center Operations"
                    className="w-full h-full object-cover object-center transform group-hover/img:scale-105 group-hover:scale-105 transition-transform duration-700 filter grayscale contrast-125 group-hover/img:grayscale-0 group-hover:grayscale-0"
                  />
                </picture>
                <div className="absolute inset-0 bg-ink/10 group-hover/img:bg-transparent group-hover:bg-transparent transition-colors duration-300 pointer-events-none"></div>
              </Link>
            </div>

          </div>

          {/* Project 02: FISPOKE */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center group">

            {/* Left Content (Order-1 on Mobile/Tablet & Desktop) */}
            <div className="lg:col-span-5 order-1 lg:order-1">
              <div className="text-[10px] font-bold tracking-[0.08em] text-muted uppercase mb-3">
                02 / {fispoke.category}
              </div>
              <div className="flex items-center gap-3 mt-2 mb-3">
                <img src={fispokeLogo} alt="Fispoke Logo" className="h-6 sm:h-7 w-auto object-contain text-ink" />
              </div>
              <p className="text-sm font-semibold tracking-wide text-ink uppercase mb-4">{fispoke.headline}</p>
              <p className="text-base text-muted mb-6 max-w-md leading-relaxed">{fispoke.description}</p>

              {/* Three Product Experiences Showcase */}
              {/* <div className="mb-8 p-4 bg-surface border border-border rounded-lg space-y-3">
                <div className="text-[9px] font-bold tracking-widest text-muted uppercase mb-2">
                  THREE MAJOR PRODUCT EXPERIENCES
                </div>

                <div className="space-y-2.5">
                  {fispoke.experiences ? (
                    fispoke.experiences.map((exp, i) => {
                      const icons = [FiUser, FiDollarSign, FiClipboard];
                      const IconComp = icons[i % icons.length];
                      return (
                        <div key={exp.num} className="p-2 bg-background border border-border/80 rounded flex items-start gap-2.5">
                          <IconComp className="w-4 h-4 text-ink shrink-0 mt-0.5" />
                          <div>
                            <span className="text-[11px] font-bold text-ink block">{exp.num} / {exp.title}</span>
                            <span className="text-[10px] text-muted leading-tight block">{exp.desc}</span>
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <>
                      <div className="p-2 bg-background border border-border/80 rounded flex items-start gap-2.5">
                        <FiUser className="w-4 h-4 text-ink shrink-0 mt-0.5" />
                        <div>
                          <span className="text-[11px] font-bold text-ink block">01 / Advisor Banking Portal</span>
                          <span className="text-[10px] text-muted leading-tight block">Giving independent RIAs unified visibility across client accounts, liquidity and lending.</span>
                        </div>
                      </div>

                      <div className="p-2 bg-background border border-border/80 rounded flex items-start gap-2.5">
                        <FiDollarSign className="w-4 h-4 text-ink shrink-0 mt-0.5" />
                        <div>
                          <span className="text-[11px] font-bold text-ink block">02 / High-Yield Cash & Savings</span>
                          <span className="text-[10px] text-muted leading-tight block">Automated cash allocation & annual interest yield optimization for client reserves.</span>
                        </div>
                      </div>

                      <div className="p-2 bg-background border border-border/80 rounded flex items-start gap-2.5">
                        <FiClipboard className="w-4 h-4 text-ink shrink-0 mt-0.5" />
                        <div>
                          <span className="text-[11px] font-bold text-ink block">03 / Securities-Backed & Credit</span>
                          <span className="text-[10px] text-muted leading-tight block">Custom liquidity, securities-backed credit lines, and real-estate financing workflows.</span>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div> */}

              {/* Tools & Tech Stack */}
              <ToolBadgeList tools={fispokeTools} />

              <div className="flex flex-wrap items-center gap-6">
                <Link
                  to={fispoke.link}
                  className="inline-flex items-center text-[11px] font-bold tracking-widest uppercase text-primary transition-colors relative group/link"
                >
                  READ CASE STUDY
                  <FiArrowUpRight className="ml-1.5 w-4 h-4 text-primary group-hover/link:-translate-y-1 group-hover/link:translate-x-1 transition-transform" />
                  <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-primary transition-colors"></span>
                </Link>

                {fispoke.websiteUrl && (
                  <a
                    href={fispoke.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[11px] font-bold tracking-widest uppercase text-muted hover:text-primary transition-colors relative group/web"
                  >
                    VISIT WEBSITE
                    <FiArrowUpRight className="ml-1.5 w-4 h-4 group-hover/web:-translate-y-1 group-hover/web:translate-x-1 transition-transform" />
                  </a>
                )}
              </div>
            </div>

            {/* Right Visual (Order-2 on Mobile/Tablet & Desktop) */}
            <div className="lg:col-span-7 order-2 lg:order-2">
              <Link to={fispoke.link} className="block overflow-hidden rounded-xl border border-border relative bg-background aspect-[16/10] shadow-md group/img">
                <img
                  src={fispokeCaseStudy}
                  alt="Fispoke Private Banking Platform"
                  className="w-full h-full object-cover object-center transform group-hover/img:scale-105 group-hover:scale-105 transition-transform duration-700 filter grayscale contrast-125 group-hover/img:grayscale-0 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-ink/10 group-hover/img:bg-transparent group-hover:bg-transparent transition-colors duration-300 pointer-events-none"></div>
              </Link>
            </div>

          </div>

          {/* Project 03: PRISMX */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center group">

            {/* Content (Order-1 on Mobile/Tablet, Order-2 on Desktop) */}
            <div className="lg:col-span-5 order-1 lg:order-2">
              <div className="text-[10px] font-bold tracking-[0.08em] text-muted uppercase mb-3">
                03 / {prismx.category}
              </div>
              <h4 className="font-display text-[36px] font-semibold leading-[1] text-ink mt-2 mb-3">{prismx.title}</h4>
              <p className="text-sm font-semibold tracking-wide text-ink uppercase mb-4">{prismx.headline}</p>
              <p className="text-base text-muted mb-6 max-w-md leading-relaxed">{prismx.description}</p>

              {/* Tools & Tech Stack */}
              <ToolBadgeList tools={prismxTools} />

              <div className="flex flex-wrap items-center gap-6">
                <Link
                  to={prismx.link}
                  className="inline-flex items-center text-[11px] font-bold tracking-widest uppercase text-primary transition-colors relative group/link"
                >
                  READ CASE STUDY
                  <FiArrowUpRight className="ml-1.5 w-4 h-4 text-primary group-hover/link:-translate-y-1 group-hover/link:translate-x-1 transition-transform" />
                  <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-primary transition-colors"></span>
                </Link>

                {prismx.websiteUrl && (
                  <a
                    href={prismx.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[11px] font-bold tracking-widest uppercase text-muted hover:text-primary transition-colors relative group/web"
                  >
                    VISIT WEBSITE
                    <FiArrowUpRight className="ml-1.5 w-4 h-4 group-hover/web:-translate-y-1 group-hover/web:translate-x-1 transition-transform" />
                  </a>
                )}
              </div>
            </div>

            {/* Visual (Order-2 on Mobile/Tablet, Order-1 on Desktop) */}
            <div className="lg:col-span-7 order-2 lg:order-1">
              <Link to={prismx.link} className="block overflow-hidden rounded-xl border border-border relative bg-background aspect-[16/10] shadow-md group/img">
                <picture>
                  <source media="(min-width: 1024px)" srcSet={prismxLarge} />
                  <img
                    src={prismxMed}
                    alt="PrismX Configuration & Live Preview Platform"
                    className="w-full h-full object-cover object-center transform group-hover/img:scale-105 group-hover:scale-105 transition-transform duration-700 filter grayscale contrast-125 group-hover/img:grayscale-0 group-hover:grayscale-0"
                  />
                </picture>
                <div className="absolute inset-0 bg-ink/10 group-hover/img:bg-transparent group-hover:bg-transparent transition-colors duration-300 pointer-events-none"></div>
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
