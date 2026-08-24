import { FiCheck, FiLock } from '../ui/Icons';

export function FispokeDesignSystem() {
  const roles = [
    'PRODUCT DESIGN',
    'UX ARCHITECTURE',
    'WORKFLOW DESIGN',
    'INTERACTION DESIGN',
    'DESIGN SYSTEM',
  ];

  const principles = [
    {
      num: '01',
      title: 'CLARITY',
      desc: 'Financial information should be understandable before it becomes actionable.',
    },
    {
      num: '02',
      title: 'CONTEXT',
      desc: 'Users should understand why information matters.',
    },
    {
      num: '03',
      title: 'CONTROL',
      desc: 'The user should always understand what happens next.',
    },
  ];

  const systemTokens = [
    'TYPOGRAPHY',
    'COLOR',
    'SPACING',
    'COMPONENTS',
    'FORMS',
    'TABLES',
    'STATUS',
    'NAVIGATION',
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

        {/* Fintech Design Principles Section */}
        <div className="border-t border-border pt-16 mb-20">
          <div className="text-[10px] font-bold tracking-[0.15em] text-muted uppercase mb-3">
            DESIGN PHILOSOPHY
          </div>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-ink mb-12">
            Designing for Financial Confidence
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {principles.map((p) => (
              <div key={p.num} className="p-6 bg-background border border-border rounded-xl">
                <span className="text-xs font-mono font-bold text-muted block mb-2">{p.num}</span>
                <h3 className="font-display text-lg font-bold text-ink mb-2">{p.title}</h3>
                <p className="text-xs text-muted font-medium leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Design System Architecture Section */}
        <div className="border-t border-border pt-16">
          <div className="text-[10px] font-bold tracking-[0.15em] text-muted uppercase mb-3">
            SYSTEM ARCHITECTURE
          </div>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-ink mb-4">
            Financial UI Component System
          </h2>
          <p className="text-base text-muted max-w-2xl mb-12">
            Fispoke required structured component patterns to maintain clarity, visual hierarchy, and accessible state indication across cash, credit, and lending experiences.
          </p>

          <div className="flex flex-wrap gap-2.5 mb-12">
            {systemTokens.map((token) => (
              <span
                key={token}
                className="text-[9px] font-bold tracking-widest px-3.5 py-1.5 border border-border rounded uppercase text-muted bg-background"
              >
                {token}
              </span>
            ))}
          </div>

          {/* Micro Component Sample Bar */}
          <div className="p-6 bg-background border border-border rounded-xl space-y-4">
            <div className="text-[9px] font-bold tracking-widest text-muted uppercase border-b border-border pb-3">
              SAMPLE COMPONENT PATTERNS
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="p-3 bg-surface border border-border rounded space-y-1">
                <span className="text-[8px] font-bold text-muted block uppercase">FORM INPUT</span>
                <div className="px-2 py-1 bg-background border border-border text-[9px] text-muted rounded">
                  $250,000 Deposit
                </div>
              </div>

              <div className="p-3 bg-surface border border-border rounded space-y-1">
                <span className="text-[8px] font-bold text-muted block uppercase">STATUS BADGE</span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-surface border border-border text-ink text-[9px] font-bold rounded">
                  <FiCheck className="w-2.5 h-2.5 text-ink" />
                  VERIFIED
                </span>
              </div>

              <div className="p-3 bg-surface border border-border rounded space-y-1">
                <span className="text-[8px] font-bold text-muted block uppercase">SECURITY ICON</span>
                <div className="flex items-center gap-1.5 text-[9px] font-bold text-ink">
                  <FiLock className="w-3 h-3 text-ink" />
                  <span>256-BIT ENCRYPTION</span>
                </div>
              </div>

              <div className="p-3 bg-surface border border-border rounded space-y-1">
                <span className="text-[8px] font-bold text-muted block uppercase">ACTION BUTTON</span>
                <button className="w-full py-1 bg-ink text-dark-text text-[9px] font-bold rounded uppercase">
                  CONFIRM
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
