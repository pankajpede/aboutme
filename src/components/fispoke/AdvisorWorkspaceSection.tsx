import { useState } from 'react';
import { FiUser, FiDollarSign, FiCreditCard, FiBriefcase, FiCheck, FiArrowRight } from '../ui/Icons';

type ClientData = {
  id: string;
  name: string;
  portfolio: string;
  activeProducts: number;
  cashBalance: string;
  creditAvailable: string;
  lendingAmount: string;
  opportunity: string;
  nextAction: string;
};

const CLIENTS: ClientData[] = [
  {
    id: 'alex',
    name: 'Alex Morgan',
    portfolio: '$1.2M',
    activeProducts: 3,
    cashBalance: '$250,000',
    creditAvailable: '$420,000',
    lendingAmount: '$600,000',
    opportunity: 'Lending Opportunity (Real-Estate Refinance)',
    nextAction: 'Review lending eligibility & rate lock options',
  },
  {
    id: 'sarah',
    name: 'Sarah Williams',
    portfolio: '$850,000',
    activeProducts: 2,
    cashBalance: '$180,000',
    creditAvailable: '$250,000',
    lendingAmount: '$350,000',
    opportunity: 'Cash Management (HYSA Yield Boost)',
    nextAction: 'Recommend HYSA auto-allocation schedule',
  },
  {
    id: 'james',
    name: 'James Carter',
    portfolio: '$2.4M',
    activeProducts: 4,
    cashBalance: '$500,000',
    creditAvailable: '$850,000',
    lendingAmount: '$1,200,000',
    opportunity: 'Securities-Backed Credit Review',
    nextAction: 'Initiate portfolio credit line expansion review',
  },
];

type ProductFilter = 'ALL' | 'CASH' | 'CREDIT' | 'LENDING';

export function AdvisorWorkspaceSection() {
  const [selectedClientId, setSelectedClientId] = useState<string>('alex');
  const [productFilter, setProductFilter] = useState<ProductFilter>('ALL');
  const [actionReviewed, setActionReviewed] = useState<boolean>(false);

  const activeClient = CLIENTS.find((c) => c.id === selectedClientId) || CLIENTS[0];

  const focusPoints = ['Client Context', 'Financial Opportunities', 'Workflow', 'Actionable Information'];
  const tags = ['PRODUCT DESIGN', 'WORKFLOW DESIGN', 'INFORMATION ARCHITECTURE', 'ADVISOR EXPERIENCE'];

  return (
    <section id="experience-01" className="py-20 lg:py-28 border-b border-border bg-background">
      <div className="container mx-auto px-5 lg:px-12 xl:px-16">
        
        {/* Experience 01: Odd Section -> Content Left / Visual Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: Content */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            
            <div className="text-[10px] sm:text-[11px] font-bold tracking-[0.15em] uppercase text-muted mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-ink"></span>
              01 / EXPERIENCE 01
            </div>

            <h2 className="font-display text-xs font-bold tracking-[0.2em] uppercase text-muted mb-2">
              ADVISOR WORKSPACE
            </h2>

            <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-ink leading-tight mb-6">
              Helping advisors see opportunities across the client relationship.
            </h3>

            <p className="text-base text-muted font-medium leading-relaxed mb-8 max-w-lg">
              Designing a workspace that brings client context, financial products and relevant actions into a more connected advisor experience.
            </p>

            {/* Focus List */}
            <div className="mb-8 p-4 bg-surface border border-border rounded-lg space-y-2">
              <div className="text-[9px] font-bold tracking-widest text-muted uppercase mb-3">
                ADVISOR UX FOCUS
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs font-semibold text-ink">
                {focusPoints.map((fp) => (
                  <div key={fp} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-ink"></span>
                    <span>{fp}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Approved Tags */}
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[9px] font-bold tracking-widest px-3 py-1 border border-border rounded uppercase text-muted bg-surface/50"
                >
                  {tag}
                </span>
              ))}
            </div>

          </div>

          {/* RIGHT COLUMN: Interactive Advisor Workspace Visual Interface */}
          <div className="lg:col-span-7">
            <div className="bg-surface border border-border rounded-xl p-5 sm:p-6 lg:p-7 shadow-xs">
              
              {/* Header Bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border pb-4 mb-5">
                <div className="flex items-center gap-2 text-[10px] font-bold tracking-widest text-ink uppercase">
                  <FiUser className="w-4 h-4 text-ink" />
                  <span>FISPOKE ADVISOR WORKSPACE</span>
                </div>
                <div className="text-[9px] font-mono font-bold px-2 py-0.5 rounded bg-background border border-border text-muted">
                  CLIENT ➔ OPPORTUNITY ➔ ACTION
                </div>
              </div>

              {/* Client Selector Buttons */}
              <div className="mb-5">
                <span className="text-[8px] font-bold text-muted uppercase tracking-widest block mb-2">SELECT CLIENT RELATIONSHIP:</span>
                <div className="grid grid-cols-3 gap-2">
                  {CLIENTS.map((c) => (
                    <button
                      key={c.id}
                      onClick={() => {
                        setSelectedClientId(c.id);
                        setActionReviewed(false);
                      }}
                      className={`p-2.5 rounded border text-left transition-all ${
                        selectedClientId === c.id
                          ? 'bg-ink text-dark-text border-ink shadow-xs font-bold'
                          : 'bg-background border-border text-ink hover:bg-surface'
                      }`}
                    >
                      <div className="text-[11px] truncate">{c.name}</div>
                      <div className="text-[9px] opacity-70 font-mono">{c.portfolio}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Secondary Product View Filter */}
              <div className="flex items-center gap-2 mb-6 p-2 bg-background border border-border rounded text-[9px] font-bold uppercase">
                <span className="text-muted mr-1">VIEW:</span>
                {(['ALL', 'CASH', 'CREDIT', 'LENDING'] as ProductFilter[]).map((f) => (
                  <button
                    key={f}
                    onClick={() => setProductFilter(f)}
                    className={`px-2.5 py-1 rounded transition-all ${
                      productFilter === f ? 'bg-ink text-dark-text' : 'text-muted hover:text-ink'
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>

              {/* Client Context Overview Card */}
              <div className="p-4 bg-background border border-border rounded-lg space-y-4 mb-5">
                <div className="flex items-center justify-between border-b border-border pb-3">
                  <div>
                    <span className="text-[8px] font-bold text-muted uppercase tracking-widest block">CLIENT OVERVIEW</span>
                    <span className="font-display text-sm font-bold text-ink">{activeClient.name}</span>
                  </div>
                  <div className="flex items-center gap-4 text-[9px] font-mono">
                    <div>
                      <span className="text-muted block text-[7px] uppercase">PORTFOLIO</span>
                      <span className="font-bold text-ink">{activeClient.portfolio}</span>
                    </div>
                    <div>
                      <span className="text-muted block text-[7px] uppercase">PRODUCTS</span>
                      <span className="font-bold text-ink">{activeClient.activeProducts} ACTIVE</span>
                    </div>
                  </div>
                </div>

                {/* Context Metrics Grid */}
                <div className="grid grid-cols-3 gap-2.5">
                  <div className={`p-2.5 rounded border transition-all ${
                    productFilter === 'ALL' || productFilter === 'CASH' ? 'bg-surface border-ink/40 text-ink' : 'bg-surface/30 border-border text-muted opacity-40'
                  }`}>
                    <div className="flex items-center gap-1.5 text-[8px] font-bold text-muted uppercase mb-1">
                      <FiDollarSign className="w-3 h-3" />
                      CASH
                    </div>
                    <div className="font-mono text-xs font-bold">{activeClient.cashBalance}</div>
                  </div>

                  <div className={`p-2.5 rounded border transition-all ${
                    productFilter === 'ALL' || productFilter === 'CREDIT' ? 'bg-surface border-ink/40 text-ink' : 'bg-surface/30 border-border text-muted opacity-40'
                  }`}>
                    <div className="flex items-center gap-1.5 text-[8px] font-bold text-muted uppercase mb-1">
                      <FiCreditCard className="w-3 h-3" />
                      CREDIT
                    </div>
                    <div className="font-mono text-xs font-bold">{activeClient.creditAvailable}</div>
                  </div>

                  <div className={`p-2.5 rounded border transition-all ${
                    productFilter === 'ALL' || productFilter === 'LENDING' ? 'bg-surface border-ink/40 text-ink' : 'bg-surface/30 border-border text-muted opacity-40'
                  }`}>
                    <div className="flex items-center gap-1.5 text-[8px] font-bold text-muted uppercase mb-1">
                      <FiBriefcase className="w-3 h-3" />
                      LENDING
                    </div>
                    <div className="font-mono text-xs font-bold">{activeClient.lendingAmount}</div>
                  </div>
                </div>
              </div>

              {/* Opportunity & Next Action Trigger */}
              <div className="p-4 bg-surface border border-ink/40 rounded-lg flex flex-wrap items-center justify-between gap-3">
                <div>
                  <div className="text-[8px] font-bold text-muted uppercase tracking-widest">IDENTIFIED OPPORTUNITY</div>
                  <div className="text-xs font-bold text-ink mt-0.5">{activeClient.opportunity}</div>
                  <div className="text-[10px] text-muted font-medium mt-0.5">{activeClient.nextAction}</div>
                </div>

                <button
                  onClick={() => setActionReviewed(true)}
                  className={`px-4 py-2 rounded text-[9px] font-bold tracking-widest uppercase transition-colors shrink-0 flex items-center gap-1.5 ${
                    actionReviewed ? 'bg-ink text-dark-text' : 'bg-ink text-dark-text hover:bg-ink-hover'
                  }`}
                >
                  {actionReviewed ? (
                    <>
                      <FiCheck className="w-3 h-3" />
                      ACTION REVIEWED
                    </>
                  ) : (
                    <>
                      REVIEW
                      <FiArrowRight className="w-3 h-3" />
                    </>
                  )}
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
