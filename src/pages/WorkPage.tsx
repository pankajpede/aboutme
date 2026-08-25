import { Link } from 'react-router-dom';
import { FiArrowUpRight, FiLayers, FiCpu, FiActivity, FiUser, FiClipboard, FiDollarSign } from '../components/ui/Icons';
import { PrismEngine } from '../components/prismx/PrismEngine';
import { UnityOneHeroTopology } from '../components/unityone/UnityOneHeroTopology';
import { FispokeEngine } from '../components/fispoke/FispokeEngine';

export default function WorkPage() {
  return (
    <div className="py-20 lg:py-28 bg-background text-ink">
      <div className="container mx-auto px-5 lg:px-12 xl:px-16">
        
        {/* Work Header */}
        <div className="mb-20">
          <div className="text-[10px] font-bold tracking-[0.15em] text-muted uppercase mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-ink"></span>
            CURATED PORTFOLIO
          </div>
          <h1 className="font-display text-[clamp(40px,6vw,76px)] font-bold tracking-tight text-ink leading-tight mb-4 uppercase">
            Selected Work
          </h1>
          <p className="text-base text-muted max-w-2xl font-medium leading-relaxed">
            Case studies, platform UX architecture, configurable engines, and financial product experiences designed for enterprise platforms.
          </p>
        </div>

        {/* Large Editorial Project Blocks */}
        <div className="flex flex-col gap-24 lg:gap-36">
          
          {/* PROJECT 01: UNITYONE */}
          <article className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center group">
            
            {/* Content (Order-1 on Mobile/Tablet, Order-2 on Desktop) */}
            <div className="lg:col-span-5 order-1 lg:order-2">
              <div className="text-[10px] font-bold tracking-[0.08em] text-muted uppercase mb-3">
                01 / PRODUCT DESIGN · PLATFORM UX
              </div>
              <h2 className="font-display text-4xl lg:text-5xl font-bold mb-3 text-ink">UNITYONE</h2>
              <p className="text-sm font-semibold tracking-wide text-ink uppercase mb-4">
                Designing clarity across complex IT operations.
              </p>
              <p className="text-base text-muted mb-6 max-w-md leading-relaxed">
                I designed experiences across complex IT operations, AI-assisted workflows and data-heavy reporting, bringing multiple operational needs into a more coherent product experience.
              </p>

              {/* Three Product Experiences List */}
              <div className="mb-8 p-4 bg-surface border border-border rounded-lg space-y-2.5">
                <div className="text-[9px] font-bold tracking-widest text-muted uppercase mb-2">
                  THREE PRODUCT EXPERIENCES
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2.5 text-xs font-bold text-ink">
                    <FiLayers className="w-3.5 h-3.5 text-muted shrink-0" />
                    <span>01 / Complex IT Operations</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs font-bold text-ink">
                    <FiCpu className="w-3.5 h-3.5 text-muted shrink-0" />
                    <span>02 / AI Assistance</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs font-bold text-ink">
                    <FiActivity className="w-3.5 h-3.5 text-muted shrink-0" />
                    <span>03 / Reporting & Data Experience</span>
                  </div>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-10">
                {['PRODUCT DESIGN', 'UX ARCHITECTURE', 'COMPLEX SYSTEMS', 'DATA EXPERIENCE'].map((tag) => (
                  <span
                    key={tag}
                    className="text-[9px] font-bold tracking-widest px-3 py-1 border border-border rounded uppercase text-muted bg-surface/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <Link
                to="/work/unityone"
                className="inline-flex items-center text-[11px] font-bold tracking-widest uppercase text-primary transition-colors relative group/link"
              >
                READ CASE STUDY
                <FiArrowUpRight className="ml-1.5 w-3.5 h-3.5 text-primary group-hover/link:-translate-y-1 group-hover/link:translate-x-1 transition-transform" />
                <span className="absolute -bottom-2 left-0 w-full h-[1px] bg-primary transition-colors"></span>
              </Link>
            </div>

            {/* Visual (Order-2 on Mobile/Tablet, Order-1 on Desktop) */}
            <div className="lg:col-span-7 order-2 lg:order-1">
              <UnityOneHeroTopology />
            </div>

          </article>

          {/* PROJECT 02: FISPOKE */}
          <article className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center group">
            
            {/* Content (Order-1 on Mobile/Tablet & Desktop) */}
            <div className="lg:col-span-5 order-1 lg:order-1">
              <div className="text-[10px] font-bold tracking-[0.08em] text-muted uppercase mb-3">
                02 / PRODUCT DESIGN · FINTECH
              </div>
              <h2 className="font-display text-4xl lg:text-5xl font-bold mb-3 text-ink">FISPOKE</h2>
              <p className="text-sm font-semibold tracking-wide text-ink uppercase mb-4">
                Designing simpler journeys through complex financial products.
              </p>
              <p className="text-base text-muted mb-6 max-w-md leading-relaxed">
                Designing connected experiences for advisors and clients across financial products, applications and operational workflows.
              </p>

              {/* Three Product Experiences List */}
              <div className="mb-8 p-4 bg-surface border border-border rounded-lg space-y-2.5">
                <div className="text-[9px] font-bold tracking-widest text-muted uppercase mb-2">
                  THREE PRODUCT EXPERIENCES
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2.5 text-xs font-bold text-ink">
                    <FiUser className="w-3.5 h-3.5 text-muted shrink-0" />
                    <span>01 / Advisor Workspace</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs font-bold text-ink">
                    <FiClipboard className="w-3.5 h-3.5 text-muted shrink-0" />
                    <span>02 / Client & Application Journey</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs font-bold text-ink">
                    <FiDollarSign className="w-3.5 h-3.5 text-muted shrink-0" />
                    <span>03 / Financial Product Experience</span>
                  </div>
                </div>
              </div>

              {/* Approved Tags */}
              <div className="flex flex-wrap gap-2 mb-10">
                {['PRODUCT DESIGN', 'FINTECH UX', 'WORKFLOW DESIGN', 'PRODUCT THINKING'].map((tag) => (
                  <span
                    key={tag}
                    className="text-[9px] font-bold tracking-widest px-3 py-1 border border-border rounded uppercase text-muted bg-surface/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <Link
                to="/work/fispoke"
                className="inline-flex items-center text-[11px] font-bold tracking-widest uppercase text-primary transition-colors relative group/link"
              >
                READ CASE STUDY
                <FiArrowUpRight className="ml-1.5 w-3.5 h-3.5 text-primary group-hover/link:-translate-y-1 group-hover/link:translate-x-1 transition-transform" />
                <span className="absolute -bottom-2 left-0 w-full h-[1px] bg-primary transition-colors"></span>
              </Link>
            </div>

            {/* Visual (Order-2 on Mobile/Tablet & Desktop) */}
            <div className="lg:col-span-7 order-2 lg:order-2">
              <FispokeEngine />
            </div>

          </article>

          {/* PROJECT 03: PRISMX */}
          <article className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center group">
            
            {/* Content (Order-1 on Mobile/Tablet, Order-2 on Desktop) */}
            <div className="lg:col-span-5 order-1 lg:order-2">
              <div className="text-[10px] font-bold tracking-[0.08em] text-muted uppercase mb-3">
                03 / PRODUCT DESIGN · PLATFORM UX
              </div>
              <h2 className="font-display text-4xl lg:text-5xl font-bold mb-3 text-ink">PRISMX</h2>
              <p className="text-sm font-semibold tracking-wide text-ink uppercase mb-4">
                Designing a configurable application-generation platform.
              </p>
              <p className="text-base text-muted mb-8 max-w-md leading-relaxed">
                I designed the experience and design system behind a platform that generates applications while allowing client-specific control over theme, components, typography and visual language.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-10">
                {['PRODUCT DESIGN', 'PLATFORM UX', 'DESIGN SYSTEMS', 'CONFIGURATION'].map((tag) => (
                  <span
                    key={tag}
                    className="text-[9px] font-bold tracking-widest px-3 py-1 border border-border rounded uppercase text-muted bg-surface/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <Link
                to="/work/prismx"
                className="inline-flex items-center text-[11px] font-bold tracking-widest uppercase text-primary transition-colors relative group/link"
              >
                READ CASE STUDY
                <FiArrowUpRight className="ml-1.5 w-3.5 h-3.5 text-primary group-hover/link:-translate-y-1 group-hover/link:translate-x-1 transition-transform" />
                <span className="absolute -bottom-2 left-0 w-full h-[1px] bg-primary transition-colors"></span>
              </Link>
            </div>

            {/* Visual (Order-2 on Mobile/Tablet, Order-1 on Desktop) */}
            <div className="lg:col-span-7 order-2 lg:order-1">
              <PrismEngine />
            </div>

          </article>

        </div>

      </div>
    </div>
  );
}
