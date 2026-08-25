import { Link } from 'react-router-dom';
import { FiArrowUpRight } from '../ui/Icons';
import { PrismEngine } from './PrismEngine';

export function PrismHero() {
  const tags = ['PRODUCT DESIGN', 'PLATFORM UX', 'DESIGN SYSTEMS', 'CONFIGURATION'];

  return (
    <header className="py-12 lg:py-20 border-b border-border bg-background">
      <div className="container mx-auto px-5 lg:px-12 xl:px-16">
        
        {/* Dynamic Canvas & Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 space-y-6">
            <div className="text-[10px] font-bold tracking-[0.08em] text-muted uppercase">
              03 / PRODUCT DESIGN · PLATFORM UX
            </div>

            <h1 className="font-display text-[44px] sm:text-[56px] lg:text-[64px] font-bold leading-[1.02] tracking-tight text-ink uppercase">
              PrismX
            </h1>

            <p className="font-display text-lg sm:text-xl font-bold uppercase tracking-wider text-primary">
              Designing a configurable application-generation platform.
            </p>

            <p className="text-base text-muted leading-relaxed font-medium">
              I designed the experience and design system behind a platform that generates applications while allowing client-specific control over theme, components, typography and visual language.
            </p>

            {/* Tags */}
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

            {/* Actions */}
            <div className="flex items-center gap-6 pt-2">
              <a
                href="#overview"
                className="inline-flex items-center text-[11px] font-bold tracking-widest uppercase text-primary transition-colors relative group/link"
              >
                VIEW PROJECT
                <FiArrowUpRight className="ml-1.5 w-4 h-4 text-primary group-hover/link:-translate-y-1 group-hover/link:translate-x-1 transition-transform" />
                <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-primary transition-colors"></span>
              </a>

              <Link
                to="/#selected-work"
                className="inline-flex items-center text-[11px] font-bold tracking-widest uppercase text-muted hover:text-primary transition-colors relative group/link"
              >
                BACK TO WORK
                <FiArrowUpRight className="ml-1.5 w-4 h-4 group-hover/link:-translate-y-1 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>

          </div>

          {/* RIGHT COLUMN (~57% Width: Live PrismX Platform Engine Simulation) */}
          <div className="lg:col-span-7">
            <PrismEngine />
          </div>

        </div>

      </div>
    </header>
  );
}
