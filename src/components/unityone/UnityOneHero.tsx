import { Link } from 'react-router-dom';
import { FiArrowUpRight } from '../ui/Icons';
import { UnityOneHeroTopology } from './UnityOneHeroTopology';

export function UnityOneHero() {
  const tags = ['PRODUCT DESIGN', 'UX ARCHITECTURE', 'COMPLEX SYSTEMS', 'DATA EXPERIENCE'];

  return (
    <header className="py-12 lg:py-20 border-b border-border bg-background">
      <div className="container mx-auto px-5 lg:px-12 xl:px-16">
        
        {/* Dynamic Topology & Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="text-[10px] font-bold tracking-[0.08em] text-muted uppercase">
              PRODUCT DESIGN CASE STUDY
            </div>

            <h1 className="font-display text-[44px] sm:text-[56px] lg:text-[64px] font-bold leading-[1.02] tracking-tight text-ink">
              UnityOne
            </h1>

            <p className="font-display text-lg sm:text-xl font-bold uppercase tracking-wider text-primary">
              Designing clarity across complex IT operations.
            </p>

            <p className="text-base text-muted leading-relaxed max-w-xl font-medium">
              Enterprise infrastructure generates massive operational data across compute, network, and storage. I designed UnityOne to bring structure, context, and AI assistance to critical IT management workflows.
            </p>

            {/* Approved Skill Tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[9px] font-bold tracking-widest px-3 py-1 border border-border rounded uppercase text-muted bg-surface/50"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Hero CTAs */}
            <div className="flex flex-wrap items-center gap-6 pt-2">
              <a
                href="#three-experiences"
                className="inline-flex items-center text-[11px] font-bold tracking-widest uppercase text-primary transition-colors relative group/link"
              >
                EXPLORE EXPERIENCES
                <FiArrowUpRight className="ml-1.5 w-4 h-4 text-primary group-hover/link:-translate-y-1 group-hover/link:translate-x-1 transition-transform" />
                <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-primary transition-colors"></span>
              </a>

              <Link
                to="/work"
                className="inline-flex items-center text-[11px] font-bold tracking-widest uppercase text-muted hover:text-primary transition-colors relative group/link"
              >
                BACK TO WORK
                <FiArrowUpRight className="ml-1.5 w-4 h-4 group-hover/link:-translate-y-1 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>

          </div>

          {/* RIGHT COLUMN (~57% Width: Interactive Product Visualization) */}
          <div className="lg:col-span-7">
            <UnityOneHeroTopology />
          </div>

        </div>

      </div>
    </header>
  );
}
