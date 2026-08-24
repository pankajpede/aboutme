import { Link } from 'react-router-dom';
import { FiArrowRight } from '../ui/Icons';
import { FispokeHeroRelationship } from './FispokeHeroRelationship';

export function FispokeHero() {
  const tags = ['PRODUCT DESIGN', 'FINTECH UX', 'WORKFLOW DESIGN', 'PRODUCT THINKING'];

  return (
    <header className="py-12 lg:py-20 border-b border-border bg-background">
      <div className="container mx-auto px-5 lg:px-12 xl:px-16">
        
        {/* Two-Column Editorial Desktop Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* LEFT COLUMN (~43% Width) */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            
            {/* Eyebrow */}
            <div className="text-[10px] sm:text-[11px] font-bold tracking-[0.15em] uppercase text-muted mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-ink"></span>
              03 / PRODUCT DESIGN · FINTECH
            </div>

            {/* Main Title */}
            <h1 className="font-display text-[clamp(34px,6vw,84px)] font-bold tracking-tight leading-[0.95] text-ink mb-6 uppercase">
              FISPOKE
            </h1>

            {/* Headline */}
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-ink leading-tight mb-6">
              Designing simpler journeys<br className="hidden sm:block" /> through complex financial products.
            </h2>

            {/* Concise Supporting Description */}
            <p className="text-base text-muted font-medium leading-relaxed mb-8 max-w-lg">
              Designing connected experiences for advisors and clients across financial products, applications and operational workflows.
            </p>

            {/* Approved Skills Tags */}
            <div className="flex flex-wrap gap-2 mb-10">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[9px] font-bold tracking-widest px-3 py-1 border border-border rounded uppercase text-muted bg-surface/60"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Hero CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#three-experiences"
                className="inline-flex items-center justify-center bg-ink text-dark-text h-11 px-6 rounded text-[11px] font-bold tracking-widest uppercase hover:bg-ink-hover transition-all duration-300 group shadow-xs"
              >
                EXPLORE EXPERIENCES
                <FiArrowRight className="ml-2 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>

              <Link
                to="/work"
                className="inline-flex items-center justify-center bg-transparent border border-border text-ink h-11 px-5 rounded text-[11px] font-bold tracking-widest uppercase hover:bg-surface hover:border-ink transition-all duration-300"
              >
                BACK TO WORK
              </Link>
            </div>

          </div>

          {/* RIGHT COLUMN (~57% Width: Interactive Product Visualization) */}
          <div className="lg:col-span-7">
            <FispokeHeroRelationship />
          </div>

        </div>

      </div>
    </header>
  );
}
