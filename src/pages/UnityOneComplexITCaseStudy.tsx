import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiArrowRight, FiLayers, FiCpu, FiHardDrive, FiServer, FiCheck } from '../components/ui/Icons';
import { ScrollToTopWidget } from '../components/ui/ScrollToTopWidget';
import datacenterLg from '../assets/images/case-study/datacenter-large.jpg';

export default function UnityOneComplexITCaseStudy() {
  const [activeFilter, setActiveFilter] = useState<'ALL' | 'NETWORK' | 'COMPUTE' | 'STORAGE'>('ALL');

  return (
    <div id="complex-it-study" className="py-20 lg:py-28 bg-background text-ink relative">
      <ScrollToTopWidget />
      <div className="container mx-auto px-5 lg:px-12 xl:px-16 space-y-20">
        
        {/* Breadcrumb Navigation */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border pb-6">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2 text-[10px] sm:text-[11px] font-bold tracking-widest uppercase font-mono">
              <li>
                <Link to="/work" className="text-muted hover:text-ink transition-colors">
                  WORK
                </Link>
              </li>
              <li className="text-muted select-none">/</li>
              <li>
                <Link to="/work/unityone" className="text-muted hover:text-ink transition-colors">
                  UNITYONE
                </Link>
              </li>
              <li className="text-muted select-none">/</li>
              <li className="text-ink font-bold">
                COMPLEX IT OPERATIONS
              </li>
            </ol>
          </nav>
          <span className="text-[10px] font-mono font-bold text-muted uppercase">
            CASE STUDY 01 OF 03
          </span>
        </div>

        {/* Case Study Title Header */}
        <div className="space-y-6 max-w-4xl">
          <div className="text-[10px] font-bold tracking-[0.15em] text-muted uppercase flex items-center gap-2 font-mono">
            <span className="w-2 h-2 rounded-full bg-ink"></span>
            01 / UNITYONE · COMPLEX IT OPERATIONS
          </div>

          <h1 className="font-display text-[clamp(36px,5vw,60px)] font-bold tracking-tight text-ink leading-tight uppercase">
            Making complex infrastructure easier to understand.
          </h1>

          <p className="text-base sm:text-lg text-muted font-medium leading-relaxed">
            The challenge was to help users navigate complex infrastructure information while maintaining context between overview, system relationships and detailed operational information.
          </p>

          {/* Metadata Bar */}
          <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-6 p-6 bg-surface border border-border rounded-xl">
            <div>
              <span className="text-[9px] font-bold tracking-widest text-muted uppercase block mb-1 font-mono">ROLE</span>
              <span className="text-xs font-bold text-ink uppercase block font-display">Senior Product Designer</span>
            </div>
            <div>
              <span className="text-[9px] font-bold tracking-widest text-muted uppercase block mb-1 font-mono">FOCUS</span>
              <span className="text-xs font-bold text-ink uppercase block font-display">Information Architecture</span>
            </div>
            <div>
              <span className="text-[9px] font-bold tracking-widest text-muted uppercase block mb-1 font-mono">DOMAIN</span>
              <span className="text-xs font-bold text-ink uppercase block font-display">IT Infrastructure UX</span>
            </div>
            <div>
              <span className="text-[9px] font-bold tracking-widest text-muted uppercase block mb-1 font-mono">DATA</span>
              <span className="text-xs font-bold text-ink uppercase block font-display">Sanitized Portfolio Model</span>
            </div>
          </div>
        </div>

        {/* Section 1: The Problem */}
        <div className="p-8 sm:p-12 bg-surface border border-border rounded-2xl space-y-6">
          <span className="text-[9px] font-bold tracking-widest text-muted uppercase font-mono block">
            SECTION 01 / THE PROBLEM
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-ink uppercase">
            Dense Information & Lost Context
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-muted font-medium leading-relaxed">
            <p>
              Enterprise IT infrastructure generates thousands of signals across data centers, network routing, compute servers and storage arrays. Legacy operational consoles often presented these signals in isolation, forcing operators to manually cross-reference disconnected tables.
            </p>
            <p>
              When operational issues arose, operators struggled to trace dependency chains. The primary goal was creating an intuitive visual model where operators can zoom from high-level topology into granular node health without losing context.
            </p>
          </div>
        </div>

        {/* Section 2: The UX Challenge Diagram */}
        <div className="p-8 sm:p-12 bg-background border border-border rounded-2xl space-y-8 text-center">
          <span className="text-[9px] font-bold tracking-widest text-muted uppercase font-mono block">
            SECTION 02 / THE UX CHALLENGE
          </span>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-4xl mx-auto">
            {/* Before Flow */}
            <div className="p-6 bg-surface border border-border rounded-xl space-y-3">
              <span className="text-[9px] font-bold text-muted uppercase font-mono block">BEFORE DESIGN</span>
              <div className="flex flex-col gap-2 text-xs font-bold font-mono text-muted">
                <div className="p-2 border border-border rounded">TOO MUCH INFORMATION</div>
                <span>↓</span>
                <div className="p-2 border border-border rounded">LITTLE CONTEXT</div>
                <span>↓</span>
                <div className="p-2 border border-border rounded">SLOW UNDERSTANDING</div>
              </div>
            </div>

            {/* After Flow */}
            <div className="p-6 bg-surface border border-ink/40 rounded-xl space-y-3 shadow-xs">
              <span className="text-[9px] font-bold text-ink uppercase font-mono block">DESIGN SOLUTION</span>
              <div className="flex flex-col gap-2 text-xs font-bold font-mono text-ink">
                <div className="p-2 bg-background border border-border rounded">STRUCTURE</div>
                <span>↓</span>
                <div className="p-2 bg-background border border-border rounded">RELATIONSHIPS</div>
                <span>↓</span>
                <div className="p-2 bg-background border border-border rounded">CONTEXT</div>
                <span>↓</span>
                <div className="p-2 bg-ink text-dark-text rounded shadow-2xs">ACTION</div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: High-Fidelity Editorial Visual & Interactive Prototype */}
        <div className="p-8 sm:p-12 bg-surface border border-border rounded-2xl space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border pb-4">
            <div>
              <span className="text-[9px] font-bold tracking-widest text-muted uppercase font-mono block">
                SECTION 03 / SYSTEM VISUALIZATION & INTERACTIVE PROTOTYPE
              </span>
              <h3 className="font-display text-xl font-bold text-ink uppercase">
                Enterprise Infrastructure & Interactive Topology
              </h3>
            </div>

            {/* Topology Filters */}
            <div className="flex items-center gap-2">
              {(['ALL', 'NETWORK', 'COMPUTE', 'STORAGE'] as const).map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`text-[9px] font-bold tracking-widest uppercase px-3 py-1.5 rounded transition-all ${
                    activeFilter === filter
                      ? 'bg-ink text-dark-text shadow-xs'
                      : 'bg-background border border-border text-muted hover:text-ink'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* Large Hero Case Study Editorial Image */}
          <div className="overflow-hidden rounded-xl border border-border aspect-[21/9] bg-background">
            <img
              src={datacenterLg}
              alt="UnityOne Data Center IT Infrastructure"
              className="w-full h-full object-cover filter contrast-110 grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>

          {/* Topology Canvas */}
          <div className="p-8 bg-background border border-border rounded-xl space-y-8 text-center relative overflow-hidden">
            <span className="text-[8px] font-bold tracking-widest text-muted uppercase font-mono block">
              SANITIZED PORTFOLIO TOPOLOGY SIMULATION
            </span>

            <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono font-bold">
              {/* Data Center */}
              <div className={`p-4 rounded-xl border transition-all ${activeFilter === 'ALL' ? 'bg-surface border-ink text-ink shadow-xs' : 'bg-surface/50 border-border text-muted'}`}>
                <FiServer className="w-5 h-5 mx-auto mb-2" />
                <span>DATA CENTER</span>
              </div>

              <span className="text-muted font-bold">➔</span>

              {/* Network */}
              <div className={`p-4 rounded-xl border transition-all ${activeFilter === 'ALL' || activeFilter === 'NETWORK' ? 'bg-ink text-dark-text border-ink shadow-md scale-105' : 'bg-surface/50 border-border text-muted opacity-40'}`}>
                <FiLayers className="w-5 h-5 mx-auto mb-2" />
                <span>NETWORK ROUTING</span>
              </div>

              <span className="text-muted font-bold">➔</span>

              {/* Compute */}
              <div className={`p-4 rounded-xl border transition-all ${activeFilter === 'ALL' || activeFilter === 'COMPUTE' ? 'bg-ink text-dark-text border-ink shadow-md scale-105' : 'bg-surface/50 border-border text-muted opacity-40'}`}>
                <FiCpu className="w-5 h-5 mx-auto mb-2" />
                <span>COMPUTE CLUSTER</span>
              </div>

              <span className="text-muted font-bold">➔</span>

              {/* Storage */}
              <div className={`p-4 rounded-xl border transition-all ${activeFilter === 'ALL' || activeFilter === 'STORAGE' ? 'bg-ink text-dark-text border-ink shadow-md scale-105' : 'bg-surface/50 border-border text-muted opacity-40'}`}>
                <FiHardDrive className="w-5 h-5 mx-auto mb-2" />
                <span>STORAGE ARRAY</span>
              </div>
            </div>

            <div className="p-3 bg-surface border border-border rounded text-[10px] font-mono text-muted max-w-md mx-auto">
              ACTIVE NODE HIGHLIGHT: <span className="font-bold text-ink uppercase">{activeFilter} LAYER</span>
            </div>
          </div>
        </div>

        {/* Section 4: Design Decisions */}
        <div className="p-8 sm:p-12 bg-surface border border-border rounded-2xl space-y-8">
          <span className="text-[9px] font-bold tracking-widest text-muted uppercase font-mono block">
            SECTION 04 / KEY DESIGN DECISIONS
          </span>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 bg-background border border-border rounded-xl space-y-2">
              <span className="font-mono text-xs font-bold text-ink block">01</span>
              <h4 className="font-display text-base font-bold text-ink uppercase">PROGRESSIVE DISCLOSURE</h4>
              <p className="text-xs text-muted font-medium leading-relaxed">
                Show high-level system topology first, allowing operators to drill into specific node metrics on demand.
              </p>
            </div>

            <div className="p-6 bg-background border border-border rounded-xl space-y-2">
              <span className="font-mono text-xs font-bold text-ink block">02</span>
              <h4 className="font-display text-base font-bold text-ink uppercase">CONTEXTUAL INFORMATION</h4>
              <p className="text-xs text-muted font-medium leading-relaxed">
                Keep parent-child dependencies visible so operators never lose their place within the broader system.
              </p>
            </div>

            <div className="p-6 bg-background border border-border rounded-xl space-y-2">
              <span className="font-mono text-xs font-bold text-ink block">03</span>
              <h4 className="font-display text-base font-bold text-ink uppercase">ACTIONABLE INFORMATION</h4>
              <p className="text-xs text-muted font-medium leading-relaxed">
                Prioritize health alerts that directly impact operational throughput over low-priority background noise.
              </p>
            </div>

            <div className="p-6 bg-background border border-border rounded-xl space-y-2">
              <span className="font-mono text-xs font-bold text-ink block">04</span>
              <h4 className="font-display text-base font-bold text-ink uppercase">CONSISTENT VISUAL LANGUAGE</h4>
              <p className="text-xs text-muted font-medium leading-relaxed">
                Standardized status badges and icon iconography across all complex infrastructure modules.
              </p>
            </div>
          </div>
        </div>

        {/* Section 5: Qualitative Outcome & Key Takeaway */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 bg-surface border border-border rounded-2xl space-y-4">
            <span className="text-[9px] font-bold tracking-widest text-muted uppercase font-mono block">
              SECTION 05 / QUALITATIVE OUTCOME
            </span>
            <h3 className="font-display text-xl font-bold text-ink uppercase">Product Impact</h3>
            <ul className="space-y-2 text-xs font-semibold text-ink">
              <li className="flex items-center gap-2">
                <FiCheck className="w-4 h-4 text-ink shrink-0" />
                <span>A clearer operational hierarchy across complex infrastructure.</span>
              </li>
              <li className="flex items-center gap-2">
                <FiCheck className="w-4 h-4 text-ink shrink-0" />
                <span>More structured access to complex system relationships.</span>
              </li>
              <li className="flex items-center gap-2">
                <FiCheck className="w-4 h-4 text-ink shrink-0" />
                <span>A scalable interaction model for enterprise IT operations.</span>
              </li>
            </ul>
          </div>

          <div className="p-8 bg-background border border-border rounded-2xl space-y-4">
            <span className="text-[9px] font-bold tracking-widest text-muted uppercase font-mono block">
              SECTION 06 / WHAT I LEARNED
            </span>
            <h3 className="font-display text-xl font-bold text-ink uppercase">Personal Reflection</h3>
            <p className="text-xs text-muted font-medium leading-relaxed">
              Designing enterprise software taught me that complexity is not always something to remove. Sometimes the better approach is to structure it, make relationships visible and give users control over how much detail they see.
            </p>
          </div>
        </div>

        {/* Case Study Bottom Navigation */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-6">
          <Link
            to="/work/unityone"
            className="inline-flex items-center text-[11px] font-bold tracking-widest uppercase text-muted hover:text-ink transition-colors group"
          >
            <FiArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            BACK TO UNITYONE OVERVIEW
          </Link>

          <Link
            to="/work/unityone/ai-assistant"
            className="inline-flex items-center text-[11px] font-bold tracking-widest uppercase text-ink hover:text-muted transition-colors group"
          >
            NEXT: CASE STUDY 02 (AI ASSISTANT)
            <FiArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </div>
  );
}
