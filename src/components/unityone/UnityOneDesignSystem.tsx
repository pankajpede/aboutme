import { FiSliders, FiServer } from '../ui/Icons';

export function UnityOneDesignSystem() {
  const roles = [
    'PRODUCT DESIGN',
    'UX ARCHITECTURE',
    'INTERACTION DESIGN',
    'DATA EXPERIENCE',
    'DESIGN SYSTEM',
  ];

  const steps = [
    { title: 'TOKENS', desc: 'Color, Spacing, Typography & Elevation' },
    { title: 'COMPONENTS', desc: 'Buttons, Controls, Inputs & Badges' },
    { title: 'PATTERNS', desc: 'Tables, Topology Nodes & Data Widgets' },
    { title: 'PRODUCT MODULES', desc: 'IT Ops, AI Assistant & Reports' },
  ];

  return (
    <section className="py-20 lg:py-28 border-b border-border bg-surface">
      <div className="container mx-auto px-5 lg:px-12 xl:px-16">
        
        {/* Role Section */}
        <div className="mb-20">
          <div className="text-[10px] font-bold tracking-[0.15em] text-muted uppercase mb-3">
            CONTRIBUTION & RESPONSIBILITIES
          </div>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-ink mb-6">
            My Role
          </h2>
          <div className="flex flex-wrap gap-2.5 max-w-2xl">
            {roles.map((role) => (
              <span
                key={role}
                className="text-[10px] font-bold tracking-widest px-4 py-2 border border-border rounded uppercase text-ink bg-background shadow-2xs"
              >
                {role}
              </span>
            ))}
          </div>
        </div>

        {/* Design System Architecture Section */}
        <div className="border-t border-border pt-16">
          <div className="text-[10px] font-bold tracking-[0.15em] text-muted uppercase mb-3">
            REUSABLE UX PATTERNS
          </div>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-ink mb-4">
            Design System Architecture
          </h2>
          <p className="text-base text-muted max-w-2xl mb-12">
            The UnityOne experience required reusable UI patterns across complex operational contexts, maintaining visual hierarchy and interactive consistency across all modules.
          </p>

          {/* 4-Step Flow */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {steps.map((step, idx) => (
              <div key={step.title} className="p-5 bg-background border border-border rounded-xl">
                <div className="text-[10px] font-mono font-bold text-muted mb-2">0{idx + 1}</div>
                <div className="font-display text-sm font-bold text-ink mb-1">{step.title}</div>
                <div className="text-xs text-muted leading-relaxed">{step.desc}</div>
              </div>
            ))}
          </div>

          {/* Component Micro-Samples Gallery */}
          <div className="p-6 bg-background border border-border rounded-xl space-y-6">
            <div className="text-[9px] font-bold tracking-widest text-muted uppercase border-b border-border pb-3">
              SAMPLE COMPONENT LIBRARY & REUSABLE TOKENS
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4">
              {/* Button Component */}
              <div className="p-3 bg-surface border border-border rounded space-y-2">
                <span className="text-[8px] font-bold text-muted block uppercase">BUTTON</span>
                <button className="w-full py-1.5 bg-ink text-dark-text text-[9px] font-bold rounded uppercase">
                  ACTION
                </button>
              </div>

              {/* Status Badge Component */}
              <div className="p-3 bg-surface border border-border rounded space-y-2">
                <span className="text-[8px] font-bold text-muted block uppercase">STATUS</span>
                <span className="inline-flex items-center gap-1 px-2 py-1 bg-surface border border-border text-ink text-[9px] font-bold rounded">
                  <span className="w-1.5 h-1.5 rounded-full bg-ink"></span>
                  HEALTHY
                </span>
              </div>

              {/* Filter Pill Component */}
              <div className="p-3 bg-surface border border-border rounded space-y-2">
                <span className="text-[8px] font-bold text-muted block uppercase">FILTER</span>
                <span className="inline-flex items-center gap-1 px-2 py-1 bg-ink text-dark-text text-[9px] font-bold rounded uppercase">
                  <FiSliders className="w-2.5 h-2.5" />
                  FILTER
                </span>
              </div>

              {/* Topology Node Component */}
              <div className="p-3 bg-surface border border-border rounded space-y-2">
                <span className="text-[8px] font-bold text-muted block uppercase">TOPOLOGY</span>
                <div className="flex items-center gap-1.5 text-[9px] font-bold text-ink">
                  <FiServer className="w-3 h-3 text-ink" />
                  <span>DCIM NODE</span>
                </div>
              </div>

              {/* Input Component */}
              <div className="p-3 bg-surface border border-border rounded space-y-2">
                <span className="text-[8px] font-bold text-muted block uppercase">INPUT</span>
                <div className="px-2 py-1 bg-background border border-border text-[9px] text-muted rounded">
                  Search systems...
                </div>
              </div>

              {/* Metric Card Component */}
              <div className="p-3 bg-surface border border-border rounded space-y-1">
                <span className="text-[8px] font-bold text-muted block uppercase">METRIC</span>
                <span className="font-display text-sm font-bold text-ink">99.4%</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
