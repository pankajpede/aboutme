import { Link } from 'react-router-dom';
import { FiUser, FiClipboard, FiDollarSign } from '../components/ui/Icons';
import { FispokeHero } from '../components/fispoke/FispokeHero';
import { AdvisorWorkspaceSection } from '../components/fispoke/AdvisorWorkspaceSection';
import { ApplicationJourneySection } from '../components/fispoke/ApplicationJourneySection';
import { FinancialProductSection } from '../components/fispoke/FinancialProductSection';
import { FispokeDesignSystem } from '../components/fispoke/FispokeDesignSystem';

export default function FispokeCaseStudy() {
  return (
    <div className="bg-background text-ink selection:bg-ink selection:text-dark-text">
      
      {/* 01. HERO SECTION */}
      <FispokeHero />

      {/* 02. THE PRODUCT OVERVIEW */}
      <section className="py-20 lg:py-28 border-b border-border bg-surface">
        <div className="container mx-auto px-5 lg:px-12 xl:px-16">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-[10px] font-bold tracking-[0.15em] text-muted uppercase mb-3">
              THE PRODUCT FOUNDATION
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-ink mb-6">
              Connecting financial products to the advisor relationship.
            </h2>
            <p className="text-base text-muted font-medium leading-relaxed mb-12">
              Fispoke provides a connected financial experience for advisors and clients, structuring complex financial products into clear, actionable workflows.
            </p>

            {/* Foundation Flow */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 p-6 bg-background border border-border rounded-xl">
              <div className="p-3 text-center border-r border-border/60 last:border-r-0">
                <span className="text-[9px] font-mono font-bold text-muted block mb-1">01 / ROLE</span>
                <span className="font-display text-xs font-bold text-ink">ADVISOR</span>
              </div>
              <div className="p-3 text-center border-r border-border/60 last:border-r-0">
                <span className="text-[9px] font-mono font-bold text-muted block mb-1">02 / CONTEXT</span>
                <span className="font-display text-xs font-bold text-ink">UNDERSTAND</span>
              </div>
              <div className="p-3 text-center border-r border-border/60 last:border-r-0">
                <span className="text-[9px] font-mono font-bold text-muted block mb-1">03 / ADVICE</span>
                <span className="font-display text-xs font-bold text-ink">RECOMMEND</span>
              </div>
              <div className="p-3 text-center border-r border-border/60 last:border-r-0">
                <span className="text-[9px] font-mono font-bold text-muted block mb-1">04 / JOURNEY</span>
                <span className="font-display text-xs font-bold text-ink">APPLY</span>
              </div>
              <div className="p-3 text-center">
                <span className="text-[9px] font-mono font-bold text-muted block mb-1">05 / OUTCOME</span>
                <span className="font-display text-xs font-bold text-ink">MANAGE</span>
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
            One financial ecosystem. Three different UX challenges.
          </p>

          {/* Quick Experience Jump Anchors */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a
              href="#experience-01"
              className="inline-flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase px-4 py-2 bg-surface border border-border rounded text-ink hover:border-ink transition-colors"
            >
              <FiUser className="w-3.5 h-3.5" />
              01 / ADVISOR WORKSPACE
            </a>
            <a
              href="#experience-02"
              className="inline-flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase px-4 py-2 bg-surface border border-border rounded text-ink hover:border-ink transition-colors"
            >
              <FiClipboard className="w-3.5 h-3.5" />
              02 / APPLICATION JOURNEY
            </a>
            <a
              href="#experience-03"
              className="inline-flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase px-4 py-2 bg-surface border border-border rounded text-ink hover:border-ink transition-colors"
            >
              <FiDollarSign className="w-3.5 h-3.5" />
              03 / FINANCIAL PRODUCT
            </a>
          </div>
        </div>
      </section>

      {/* 04. THREE EXPERIENCES (STRICTLY ALTERNATING LAYOUTS) */}
      <AdvisorWorkspaceSection />
      <ApplicationJourneySection />
      <FinancialProductSection />

      {/* 05. MY ROLE & DESIGN SYSTEM */}
      <FispokeDesignSystem />

      {/* 06. QUALITATIVE OUTCOME */}
      <section className="py-20 border-b border-border bg-background">
        <div className="container mx-auto px-5 lg:px-12 xl:px-16">
          <div className="max-w-3xl mx-auto p-8 bg-surface border border-border rounded-xl text-center">
            <div className="text-[10px] font-bold tracking-[0.15em] text-muted uppercase mb-3">
              QUALITATIVE OUTCOME
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-ink mb-4">
              Connected experiences across financial products and workflows.
            </h3>
            <p className="text-sm text-muted leading-relaxed max-w-xl mx-auto">
              Delivered a more connected experience across advisor workflows, application journeys and financial product information.
            </p>
          </div>
        </div>
      </section>

      {/* 07. CASE STUDY ENDING & NEXT PROJECT NAVIGATION */}
      <footer className="py-20 bg-surface">
        <div className="container mx-auto px-5 lg:px-12 xl:px-16 text-center">
          <div className="text-[10px] font-bold tracking-[0.15em] text-muted uppercase mb-2">
            FISPOKE
          </div>
          <h3 className="font-display text-2xl font-bold text-ink mb-10">
            Designing clearer journeys through complex financial products.
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {/* Previous: UnityOne */}
            <Link
              to="/work/unityone"
              className="p-6 bg-background border border-border rounded-xl text-left hover:border-ink transition-all group"
            >
              <span className="text-[9px] font-bold tracking-widest text-muted uppercase block mb-1">
                PREVIOUS PROJECT
              </span>
              <h4 className="font-display text-xl font-bold text-ink group-hover:translate-x-1 transition-transform">
                UNITYONE →
              </h4>
              <p className="text-xs text-muted mt-1">Designing clarity across complex IT operations.</p>
            </Link>

            {/* Next: PrismX */}
            <Link
              to="/work/prismx"
              className="p-6 bg-background border border-border rounded-xl text-left hover:border-ink transition-all group"
            >
              <span className="text-[9px] font-bold tracking-widest uppercase block mb-1 text-muted">
                NEXT PROJECT
              </span>
              <h4 className="font-display text-xl font-bold text-ink group-hover:translate-x-1 transition-transform">
                PRISMX →
              </h4>
              <p className="text-xs text-muted mt-1">Configurable application-generation platform.</p>
            </Link>
          </div>
        </div>
      </footer>

    </div>
  );
}
