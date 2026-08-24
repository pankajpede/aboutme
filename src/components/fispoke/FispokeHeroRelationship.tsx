import { useState, useEffect } from 'react';
import { FiUser, FiUsers, FiCreditCard, FiDollarSign, FiBriefcase, FiSliders, FiCheck } from '../ui/Icons';

type ProductContext = 'ALL' | 'CASH' | 'CREDIT' | 'LENDING';

type ContextMetric = {
  label: string;
  metric1: string;
  metric1Label: string;
  metric2: string;
  metric2Label: string;
  status: string;
};

const METRICS_DATA: Record<ProductContext, ContextMetric> = {
  ALL: {
    label: 'CONNECTED FINANCIAL ECOSYSTEM',
    metric1: '$1.2M',
    metric1Label: 'TOTAL RELATIONSHIP',
    metric2: '3 ACTIVE',
    metric2Label: 'PRODUCT CONTEXTS',
    status: 'ACTIVE RELATIONSHIP',
  },
  CASH: {
    label: 'CASH MANAGEMENT CONTEXT',
    metric1: '$250,000',
    metric1Label: 'HYSA BALANCE',
    metric2: '3.56%',
    metric2Label: 'ANNUAL YIELD (APY)',
    status: 'ACTIVE ACCOUNT',
  },
  CREDIT: {
    label: 'CREDIT CONTEXT',
    metric1: '$420,000',
    metric1Label: 'AVAILABLE CREDIT',
    metric2: '34%',
    metric2Label: 'UTILIZATION RATE',
    status: 'ELIGIBLE FOR REVIEW',
  },
  LENDING: {
    label: 'LENDING CONTEXT',
    metric1: '$600,000',
    metric1Label: 'LOAN AMOUNT',
    metric2: '30 YEARS',
    metric2Label: 'STRUCTURED TERM',
    status: 'APPLICATION IN REVIEW',
  },
};

export function FispokeHeroRelationship() {
  const [activeContext, setActiveContext] = useState<ProductContext>('ALL');
  const [isPaused, setIsPaused] = useState<boolean>(false);

  // Auto-cycle contexts smoothly unless paused
  useEffect(() => {
    if (isPaused) return;
    const contexts: ProductContext[] = ['ALL', 'CASH', 'CREDIT', 'LENDING'];
    const timer = setInterval(() => {
      setActiveContext((prev) => {
        const nextIdx = (contexts.indexOf(prev) + 1) % contexts.length;
        return contexts[nextIdx];
      });
    }, 2000);

    return () => clearInterval(timer);
  }, [isPaused]);

  const currentMetric = METRICS_DATA[activeContext];

  return (
    <div
      className="w-full bg-background border border-border p-5 sm:p-6 lg:p-7 relative rounded-xl shadow-md overflow-hidden"
    >
      {/* Simulation Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border pb-4 mb-5">
        <div className="flex items-center gap-2 text-[10px] font-bold tracking-widest text-muted uppercase">
          <span className="w-2 h-2 rounded-full bg-ink animate-pulse-soft"></span>
          <span>FISPOKE RELATIONSHIP VISUALIZATION</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[9px] font-bold font-mono px-2 py-0.5 rounded bg-background border border-border text-muted">
            {isPaused ? 'PAUSED' : '2.0S CYCLE'}
          </span>
          <span className="text-[9px] font-bold tracking-widest uppercase px-2 py-0.5 rounded bg-ink text-dark-text">
            CONNECTED JOURNEY
          </span>
        </div>
      </div>

      {/* Product Context Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-6 border-b border-border/60 pb-4">
        <div className="text-[9px] font-bold tracking-widest text-muted uppercase mr-2 flex items-center gap-1.5">
          <FiSliders className="w-3 h-3 text-ink" />
          <span>PRODUCT CONTEXT:</span>
        </div>
        {(['ALL', 'CASH', 'CREDIT', 'LENDING'] as ProductContext[]).map((ctx) => (
          <button
            key={ctx}
            onClick={() => {
              setActiveContext(ctx);
              setIsPaused(true);
            }}
            className={`text-[9px] font-bold tracking-widest uppercase px-3.5 py-1.5 rounded transition-all duration-200 ${activeContext === ctx
                ? 'bg-ink text-dark-text shadow-xs'
                : 'bg-background border border-border text-muted hover:text-ink hover:border-ink/50'
              }`}
          >
            {ctx}
          </button>
        ))}
      </div>

      {/* Human Relationship Canvas */}
      <div className="relative w-full aspect-[16/10] min-h-[300px] sm:min-h-[340px] bg-background border border-border rounded-lg overflow-hidden p-5 flex flex-col justify-between">

        {/* SVG Connecting Flow Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
          {/* Line: Advisor (50, 15) to Cash (22, 50) */}
          <line
            x1="50" y1="15" x2="22" y2="50"
            stroke={activeContext === 'ALL' || activeContext === 'CASH' ? 'var(--color-ink)' : 'var(--color-border)'}
            strokeWidth={activeContext === 'CASH' ? '1.2' : '0.5'}
            opacity={activeContext === 'ALL' || activeContext === 'CASH' ? 0.9 : 0.25}
          />
          {/* Line: Advisor (50, 15) to Credit (50, 50) */}
          <line
            x1="50" y1="15" x2="50" y2="50"
            stroke={activeContext === 'ALL' || activeContext === 'CREDIT' ? 'var(--color-ink)' : 'var(--color-border)'}
            strokeWidth={activeContext === 'CREDIT' ? '1.2' : '0.5'}
            opacity={activeContext === 'ALL' || activeContext === 'CREDIT' ? 0.9 : 0.25}
          />
          {/* Line: Advisor (50, 15) to Lending (78, 50) */}
          <line
            x1="50" y1="15" x2="78" y2="50"
            stroke={activeContext === 'ALL' || activeContext === 'LENDING' ? 'var(--color-ink)' : 'var(--color-border)'}
            strokeWidth={activeContext === 'LENDING' ? '1.2' : '0.5'}
            opacity={activeContext === 'ALL' || activeContext === 'LENDING' ? 0.9 : 0.25}
          />

          {/* Line: Cash (22, 50) to Client (50, 85) */}
          <line
            x1="22" y1="50" x2="50" y2="85"
            stroke={activeContext === 'ALL' || activeContext === 'CASH' ? 'var(--color-ink)' : 'var(--color-border)'}
            strokeWidth={activeContext === 'CASH' ? '1.2' : '0.5'}
            opacity={activeContext === 'ALL' || activeContext === 'CASH' ? 0.9 : 0.25}
          />
          {/* Line: Credit (50, 50) to Client (50, 85) */}
          <line
            x1="50" y1="50" x2="50" y2="85"
            stroke={activeContext === 'ALL' || activeContext === 'CREDIT' ? 'var(--color-ink)' : 'var(--color-border)'}
            strokeWidth={activeContext === 'CREDIT' ? '1.2' : '0.5'}
            opacity={activeContext === 'ALL' || activeContext === 'CREDIT' ? 0.9 : 0.25}
          />
          {/* Line: Lending (78, 50) to Client (50, 85) */}
          <line
            x1="78" y1="50" x2="50" y2="85"
            stroke={activeContext === 'ALL' || activeContext === 'LENDING' ? 'var(--color-ink)' : 'var(--color-border)'}
            strokeWidth={activeContext === 'LENDING' ? '1.2' : '0.5'}
            opacity={activeContext === 'ALL' || activeContext === 'LENDING' ? 0.9 : 0.25}
          />
        </svg>

        {/* 01. TOP NODE: ADVISOR */}
        <div className="relative z-10 flex flex-col items-center">
          <div className="px-4 py-2 rounded-full bg-ink text-dark-text border border-background shadow-xs flex items-center gap-2">
            <FiUser className="w-3.5 h-3.5" />
            <span className="text-[10px] font-bold tracking-widest uppercase">ADVISOR WORKSPACE</span>
          </div>
        </div>

        {/* 02. MIDDLE ROW: FINANCIAL PRODUCT NODES */}
        <div className="relative z-10 grid grid-cols-3 gap-3 my-auto">
          {/* CASH NODE */}
          <button
            onClick={() => { setActiveContext('CASH'); setIsPaused(true); }}
            className={`p-3 rounded-lg border text-center transition-all duration-300 flex flex-col items-center gap-1.5 ${activeContext === 'CASH'
                ? 'bg-ink text-dark-text border-ink ring-2 ring-ink ring-offset-2 ring-offset-background scale-105'
                : activeContext === 'ALL'
                  ? 'bg-surface border-ink/60 text-ink hover:bg-surface-soft'
                  : 'bg-surface/40 border-border text-muted opacity-40'
              }`}
          >
            <FiDollarSign className="w-4 h-4" />
            <span className="text-[9px] font-bold tracking-wider uppercase">CASH</span>
          </button>

          {/* CREDIT NODE */}
          <button
            onClick={() => { setActiveContext('CREDIT'); setIsPaused(true); }}
            className={`p-3 rounded-lg border text-center transition-all duration-300 flex flex-col items-center gap-1.5 ${activeContext === 'CREDIT'
                ? 'bg-ink text-dark-text border-ink ring-2 ring-ink ring-offset-2 ring-offset-background scale-105'
                : activeContext === 'ALL'
                  ? 'bg-surface border-ink/60 text-ink hover:bg-surface-soft'
                  : 'bg-surface/40 border-border text-muted opacity-40'
              }`}
          >
            <FiCreditCard className="w-4 h-4" />
            <span className="text-[9px] font-bold tracking-wider uppercase">CREDIT</span>
          </button>

          {/* LENDING NODE */}
          <button
            onClick={() => { setActiveContext('LENDING'); setIsPaused(true); }}
            className={`p-3 rounded-lg border text-center transition-all duration-300 flex flex-col items-center gap-1.5 ${activeContext === 'LENDING'
                ? 'bg-ink text-dark-text border-ink ring-2 ring-ink ring-offset-2 ring-offset-background scale-105'
                : activeContext === 'ALL'
                  ? 'bg-surface border-ink/60 text-ink hover:bg-surface-soft'
                  : 'bg-surface/40 border-border text-muted opacity-40'
              }`}
          >
            <FiBriefcase className="w-4 h-4" />
            <span className="text-[9px] font-bold tracking-wider uppercase">LENDING</span>
          </button>
        </div>

        {/* 03. BOTTOM NODE: CLIENT */}
        <div className="relative z-10 flex flex-col items-center">
          <div className="px-4 py-2 rounded-full bg-ink text-dark-text border border-background shadow-xs flex items-center gap-2">
            <FiUsers className="w-3.5 h-3.5" />
            <span className="text-[10px] font-bold tracking-widest uppercase">CLIENT RELATIONSHIP</span>
          </div>
        </div>

        {/* Bottom Context Metric Badge */}
        <div className="relative z-20 mt-3 pt-2 flex items-center justify-between bg-surface/90 backdrop-blur-md border border-border rounded-md p-2.5">
          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6 rounded bg-ink text-dark-text flex items-center justify-center shrink-0">
              <FiCheck className="w-3.5 h-3.5" />
            </div>
            <div>
              <div className="text-[9px] font-bold tracking-widest text-ink uppercase">
                {currentMetric.label}
              </div>
              <div className="text-[8px] text-muted font-mono">
                {currentMetric.status}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 text-[9px] font-mono">
            <div>
              <span className="text-muted block text-[7px] uppercase">{currentMetric.metric1Label}</span>
              <span className="font-bold text-ink">{currentMetric.metric1}</span>
            </div>
            <div>
              <span className="text-muted block text-[7px] uppercase">{currentMetric.metric2Label}</span>
              <span className="font-bold text-ink">{currentMetric.metric2}</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
