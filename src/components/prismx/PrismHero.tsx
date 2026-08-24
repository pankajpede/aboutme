import { Link } from 'react-router-dom';
import { FiArrowRight, FiArrowDown } from '../ui/Icons';
import { PrismEngine } from './PrismEngine';

export function PrismHero() {
  const tags = ['PRODUCT DESIGN', 'PLATFORM UX', 'DESIGN SYSTEMS', 'CONFIGURATION'];

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
              01 / PRODUCT DESIGN · PLATFORM UX
            </div>

            {/* Main Title */}
            <h1 className="font-display text-[clamp(34px,6vw,84px)] font-bold tracking-tight leading-[0.95] text-ink mb-6 uppercase">
              PRISMX
            </h1>

            {/* Headline */}
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-ink leading-tight mb-6">
              Designing a configurable<br className="hidden sm:block" /> application-generation platform.
            </h2>

            {/* Supporting Paragraph */}
            <p className="text-base text-muted font-medium leading-relaxed mb-8 max-w-lg">
              I designed the experience and design system behind a platform that generates applications while allowing client-specific control over theme, components, typography and visual language.
            </p>

            {/* Tags */}
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

            {/* Actions */}
            <div className="flex items-center gap-6">
              <a
                href="#overview"
                className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3.5 rounded-full text-[11px] font-bold tracking-widest uppercase hover:opacity-90 transition-colors shadow-xs group"
              >
                VIEW PROJECT
                <FiArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
              </a>

              <Link
                to="/#selected-work"
                className="inline-flex items-center text-[11px] font-bold tracking-widest uppercase text-ink hover:text-muted transition-colors relative group"
              >
                BACK TO WORK
                <FiArrowRight className="ml-1.5 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-ink transition-colors"></span>
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
