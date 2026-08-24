import { Link } from 'react-router-dom';
import { FiLayers, FiCpu, FiActivity } from '../components/ui/Icons';
import { UnityOneHero } from '../components/unityone/UnityOneHero';
import { ComplexOperationsSection } from '../components/unityone/ComplexOperationsSection';
import { AIAssistanceSection } from '../components/unityone/AIAssistanceSection';
import { ReportingSection } from '../components/unityone/ReportingSection';
import { UnityOneDesignSystem } from '../components/unityone/UnityOneDesignSystem';

export default function UnityOneCaseStudy() {
  return (
    <div className="bg-background text-ink selection:bg-ink selection:text-dark-text">
      
      {/* 01. HERO SECTION */}
      <UnityOneHero />

      {/* 02. THE PRODUCT OVERVIEW */}
      <section className="py-20 lg:py-28 border-b border-border bg-surface">
        <div className="container mx-auto px-5 lg:px-12 xl:px-16">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-[10px] font-bold tracking-[0.15em] text-muted uppercase mb-3">
              THE PRODUCT ECOSYSTEM
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-ink mb-6">
              One platform. Multiple IT operational domains.
            </h2>
            <p className="text-base text-muted font-medium leading-relaxed mb-12">
              UnityOne brings multiple IT operational experiences into a unified product environment, moving from raw system complexity to context, intelligence, and action.
            </p>

            {/* System Transformation Flow */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 bg-background border border-border rounded-xl">
              <div className="p-3 text-center border-r border-border/60 last:border-r-0">
                <span className="text-[9px] font-mono font-bold text-muted block mb-1">01 / INPUT</span>
                <span className="font-display text-xs font-bold text-ink">SYSTEMS</span>
              </div>
              <div className="p-3 text-center border-r border-border/60 last:border-r-0">
                <span className="text-[9px] font-mono font-bold text-muted block mb-1">02 / STRUCTURE</span>
                <span className="font-display text-xs font-bold text-ink">OPERATIONAL CONTEXT</span>
              </div>
              <div className="p-3 text-center border-r border-border/60 last:border-r-0">
                <span className="text-[9px] font-mono font-bold text-muted block mb-1">03 / INTELLIGENCE</span>
                <span className="font-display text-xs font-bold text-ink">INSIGHT</span>
              </div>
              <div className="p-3 text-center">
                <span className="text-[9px] font-mono font-bold text-muted block mb-1">04 / OUTPUT</span>
                <span className="font-display text-xs font-bold text-ink">ACTION</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 03. THREE PRODUCT EXPERIENCES HEADER */}
      <section id="three-experiences" className="py-16 border-b border-border bg-background">
        <div className="container mx-auto px-5 lg:px-12 xl:px-16 text-center">
          <div className="text-[10px] font-bold tracking-[0.2em] text-muted uppercase mb-2">
            KEY PRODUCT CONTRIBUTIONS
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink mb-3">
            Three Product Experiences
          </h2>
          <p className="text-sm font-semibold tracking-wide text-muted uppercase">
            One platform. Three different UX challenges.
          </p>

          {/* Quick Experience Jump Anchors */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a
              href="#experience-01"
              className="inline-flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase px-4 py-2 bg-surface border border-border rounded text-ink hover:border-ink transition-colors"
            >
              <FiLayers className="w-3.5 h-3.5" />
              01 / COMPLEX IT OPS
            </a>
            <a
              href="#experience-02"
              className="inline-flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase px-4 py-2 bg-surface border border-border rounded text-ink hover:border-ink transition-colors"
            >
              <FiCpu className="w-3.5 h-3.5" />
              02 / AI ASSISTANCE
            </a>
            <a
              href="#experience-03"
              className="inline-flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase px-4 py-2 bg-surface border border-border rounded text-ink hover:border-ink transition-colors"
            >
              <FiActivity className="w-3.5 h-3.5" />
              03 / REPORTING & DATA
            </a>
          </div>
        </div>
      </section>

      {/* 04. THREE EXPERIENCES (STRICTLY ALTERNATING LAYOUTS) */}
      <ComplexOperationsSection />
      <AIAssistanceSection />
      <ReportingSection />

      {/* 05. MY ROLE & DESIGN SYSTEM */}
      <UnityOneDesignSystem />

      {/* 06. QUALITATIVE OUTCOME */}
      <section className="py-20 border-b border-border bg-background">
        <div className="container mx-auto px-5 lg:px-12 xl:px-16">
          <div className="max-w-3xl mx-auto p-8 bg-surface border border-border rounded-xl text-center">
            <div className="text-[10px] font-bold tracking-[0.15em] text-muted uppercase mb-3">
              QUALITATIVE OUTCOME
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-ink mb-4">
              Coherent operations across data, intelligence & workflows.
            </h3>
            <p className="text-sm text-muted leading-relaxed max-w-xl mx-auto">
              Delivered a more coherent product experience across complex operational workflows, AI-assisted interactions and data-heavy reporting, reducing friction across disparate enterprise tools.
            </p>
          </div>
        </div>
      </section>

      {/* 07. CASE STUDY ENDING & NEXT PROJECT NAVIGATION */}
      <footer className="py-20 bg-surface">
        <div className="container mx-auto px-5 lg:px-12 xl:px-16 text-center">
          <div className="text-[10px] font-bold tracking-[0.15em] text-muted uppercase mb-2">
            UNITYONE
          </div>
          <h3 className="font-display text-2xl font-bold text-ink mb-10">
            Three experiences. One product ecosystem.
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {/* Previous/Next: PrismX */}
            <Link
              to="/work/prismx"
              className="p-6 bg-background border border-border rounded-xl text-left hover:border-ink transition-all group"
            >
              <span className="text-[9px] font-bold tracking-widest text-muted uppercase block mb-1">
                PREVIOUS PROJECT
              </span>
              <h4 className="font-display text-xl font-bold text-ink group-hover:translate-x-1 transition-transform">
                PRISMX →
              </h4>
              <p className="text-xs text-muted mt-1">Configurable application-generation platform.</p>
            </Link>

            {/* Next: Fispoke */}
            <Link
              to="/work/fispoke"
              className="p-6 bg-background border border-border rounded-xl text-left hover:border-ink transition-all group"
            >
              <span className="text-[9px] font-bold tracking-widest text-muted uppercase block mb-1">
                NEXT PROJECT
              </span>
              <h4 className="font-display text-xl font-bold text-ink group-hover:translate-x-1 transition-transform">
                FISPOKE →
              </h4>
              <p className="text-xs text-muted mt-1">Financial technology services platform.</p>
            </Link>
          </div>
        </div>
      </footer>

    </div>
  );
}
