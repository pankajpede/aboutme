import { SectionLabel } from '../ui/SectionLabel';
import { projects } from '../../data/projects';
import { FiArrowUpRight, FiLayers, FiCpu, FiActivity, FiUser, FiClipboard, FiDollarSign } from '../ui/Icons';
import { Link } from 'react-router-dom';
import dcRoomMed from '../../assets/images/case-study/dc-room-medium.jpg';
import dcRoomLarge from '../../assets/images/case-study/dc-room-large.jpg';
import fispokeCaseStudy from '../../assets/images/case-study/fispoke-casestudy.avif';
import fispokeLogo from '../../assets/images/logo/fispoke-logo.svg';
import prismxMed from '../../assets/images/case-study/prismx-medium.jpg';
import prismxLarge from '../../assets/images/case-study/prismx-large.jpg';

export function SelectedWork() {
  const unityone = projects.find((p) => p.id === 'unityone') || projects[0];
  const fispoke = projects.find((p) => p.id === 'fispoke') || projects[1];
  const prismx = projects.find((p) => p.id === 'prismx') || projects[2];

  return (
    <section id="selected-work" className="py-20 lg:py-16 border-t border-border overflow-hidden bg-surface">
      <div className="container mx-auto px-5 lg:px-12 xl:px-16">

        <SectionLabel number="03" title="Selected Work" />

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
              <div className="mb-8 p-4 bg-surface border border-border rounded-lg space-y-3">
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
              </div>

              {/* Skill Tags */}
              <div className="flex flex-wrap gap-2 mb-10">
                {unityone.tags.map((tag) => (
                  <span key={tag} className="text-[9px] font-bold tracking-widest px-3 py-1 border border-border rounded uppercase text-muted bg-surface/50">
                    {tag}
                  </span>
                ))}
              </div>

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
              <div className="mb-8 p-4 bg-surface border border-border rounded-lg space-y-3">
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
              </div>

              {/* Skill Tags */}
              <div className="flex flex-wrap gap-2 mb-10">
                {fispoke.tags.map((tag) => (
                  <span key={tag} className="text-[9px] font-bold tracking-widest px-3 py-1 border border-border rounded uppercase text-muted bg-surface/50">
                    {tag}
                  </span>
                ))}
              </div>

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
              <p className="text-base text-muted mb-8 max-w-md leading-relaxed">{prismx.description}</p>

              <div className="flex flex-wrap gap-2 mb-10">
                {prismx.tags.map((tag) => (
                  <span key={tag} className="text-[9px] font-bold tracking-widest px-3 py-1 border border-border rounded uppercase text-muted bg-surface/50">
                    {tag}
                  </span>
                ))}
              </div>

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
