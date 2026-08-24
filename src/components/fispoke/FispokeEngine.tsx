import { useState, useEffect } from 'react';
import {
  FiArrowUpRight,
} from '../ui/Icons';

export type FintechView = {
  id: string;
  name: string;
  category: string;
  description: string;
  primaryMetric: string;
  primaryMetricLabel: string;
  secondaryMetric: string;
  secondaryMetricLabel: string;
  status: string;
  chartHeights: number[];
  tableRows: { col1: string; col2: string; col3: string; col4: string }[];
};

export const FINTECH_VIEWS: FintechView[] = [
  {
    id: 'portfolio',
    name: 'PORTFOLIO OVERVIEW',
    category: 'WEALTH MANAGEMENT',
    description: 'Unified advisor dashboard displaying client portfolio assets & returns.',
    primaryMetric: '$2,840,000',
    primaryMetricLabel: 'TOTAL ASSETS UNDER MANAGEMENT',
    secondaryMetric: '+$14.2K / MO',
    secondaryMetricLabel: 'MONTHLY YIELD GENERATED',
    status: 'OPTIMAL BALANCE',
    chartHeights: [55, 70, 65, 85, 75, 95, 90],
    tableRows: [
      { col1: 'Alex Morgan', col2: '$1,200,000', col3: 'HYSA + Lending', col4: 'Active' },
      { col1: 'Sarah Williams', col2: '$850,000', col3: 'Cash Management', col4: 'Active' },
      { col1: 'James Carter', col2: '$2,400,000', col3: 'Securities Credit', col4: 'In Review' },
    ],
  },
  {
    id: 'cash',
    name: 'CASH MANAGEMENT',
    category: 'HIGH-YIELD SAVINGS',
    description: 'Automated cash allocation & annual interest yield optimization.',
    primaryMetric: '$450,000',
    primaryMetricLabel: 'HYSA CASH BALANCE',
    secondaryMetric: '3.56%',
    secondaryMetricLabel: 'ANNUAL YIELD (APY)',
    status: 'AUTO-YIELD ACTIVE',
    chartHeights: [40, 50, 60, 75, 80, 85, 100],
    tableRows: [
      { col1: 'Primary Reserve', col2: '$250,000', col3: '3.56% APY', col4: 'Earning' },
      { col1: 'Operating Account', col2: '$120,000', col3: 'Liquid ACH', col4: 'Ready' },
      { col1: 'Escrow Buffer', col2: '$80,000', col3: 'FDIC Insured', col4: 'Locked' },
    ],
  },
  {
    id: 'credit',
    name: 'CREDIT & LENDING',
    category: 'STRUCTURED CREDIT',
    description: 'Securities-backed credit lines & real-estate financing workflows.',
    primaryMetric: '$850,000',
    primaryMetricLabel: 'AVAILABLE CREDIT LINE',
    secondaryMetric: '28%',
    secondaryMetricLabel: 'CREDIT UTILIZATION',
    status: 'ELIGIBLE FOR EXPANSION',
    chartHeights: [85, 60, 45, 30, 40, 35, 28],
    tableRows: [
      { col1: 'Securities Credit Line', col2: '$420,000', col3: '34% Utilized', col4: 'Active' },
      { col1: 'Real-Estate Refinance', col2: '$600,000', col3: '30-Yr Fixed', col4: 'Pending' },
      { col1: 'Advisor Line of Credit', col2: '$150,000', col3: 'Prime -0.5%', col4: 'Approved' },
    ],
  },
  {
    id: 'applications',
    name: 'CLIENT APPLICATIONS',
    category: 'GUIDED WORKFLOW',
    description: 'Step-by-step application pipeline & document verification scan.',
    primaryMetric: '3 ACTIVE',
    primaryMetricLabel: 'APPLICATIONS IN PIPELINE',
    secondaryMetric: '98.4%',
    secondaryMetricLabel: 'VERIFICATION COMPLIANCE',
    status: 'VERIFICATION IN PROGRESS',
    chartHeights: [30, 45, 65, 80, 85, 90, 100],
    tableRows: [
      { col1: 'HYSA Account Setup', col2: 'Alex Morgan', col3: 'Step 04 / Funding', col4: 'Action Needed' },
      { col1: 'Securities Line Expansion', col2: 'James Carter', col3: 'Step 03 / Underwriting', col4: 'In Review' },
      { col1: 'Mortgage Refinance', col2: 'Sarah Williams', col3: 'Step 01 / Eligibility', col4: 'Completed' },
    ],
  },
];

export function FispokeEngine() {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const [cursorTargetIdx, setCursorTargetIdx] = useState<number>(0);
  const [isClicking, setIsClicking] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  const activeView = FINTECH_VIEWS[activeIdx];

  // Auto-play choreography loop
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      const nextIdx = (activeIdx + 1) % FINTECH_VIEWS.length;
      setCursorTargetIdx(nextIdx);

      const clickTimer = setTimeout(() => {
        setIsClicking(true);
        setActiveIdx(nextIdx);
        setTimeout(() => setIsClicking(false), 250);
      }, 600);

      return () => clearTimeout(clickTimer);
    }, 2500);

    return () => clearInterval(interval);
  }, [activeIdx, isPaused]);

  const handleSelectView = (idx: number) => {
    setIsPaused(true);
    setCursorTargetIdx(idx);
    setIsClicking(true);
    setActiveIdx(idx);

    setTimeout(() => setIsClicking(false), 200);
  };

  return (
    <div className="w-full bg-transparent border border-border rounded-xl shadow-xl overflow-hidden transition-all duration-300">
      {/* 01. ENGINE HEADER BAR */}
      <div className="p-4 sm:p-5 border-b border-border bg-background flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-border"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-border"></span>
          </div>
          <span className="text-[10px] font-bold tracking-widest uppercase text-ink font-mono border-l border-border pl-3">
            FISPOKE FINTECH ENGINE
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[9px] font-bold tracking-widest uppercase px-2.5 py-1 rounded border border-primary/20 bg-primary/10 text-primary">
            LIVE ANIMATING
          </span>
          <span className="text-[9px] font-bold tracking-widest uppercase px-2.5 py-1 rounded bg-primary/10 border border-primary/20 text-primary">
            CONNECTED ADVISOR PLATFORM
          </span>
        </div>
      </div>

      {/* 02. MAIN TWO-COLUMN SIMULATION ENGINE */}
      <div className="grid grid-cols-12 min-h-[380px] sm:min-h-[420px] relative overflow-hidden">

        {/* LEFT COLUMN: Fintech Navigation Controls (~40% width) */}
        <div className="col-span-12 md:col-span-5 border-b md:border-b-0 md:border-r border-border p-4 sm:p-5 bg-surface/50 flex flex-col justify-between relative">

          <div className="space-y-4 relative">
            <div className="flex items-center justify-between border-b border-border pb-3">
              <div className="text-[9px] font-bold tracking-widest uppercase text-muted">
                FINTECH WORKFLOWS
              </div>
              <span className="text-[9px] font-mono text-muted">4 MODULES</span>
            </div>

            <div className="space-y-2 relative">

              {/* ANIMATED MOUSE CURSOR POINTER */}
              {!isPaused && (
                <div
                  style={{
                    transform: `translateY(${cursorTargetIdx * 64}px)`,
                  }}
                  className="absolute left-3 top-2.5 z-40 pointer-events-none transition-transform duration-500 ease-out"
                >
                  <div
                    className={`relative transition-transform duration-150 ${isClicking ? 'scale-75' : 'scale-100'}`}
                  >
                    {/* SVG Pointer Arrow */}
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="var(--color-primary)"
                      stroke="var(--color-background)"
                      strokeWidth="1.5"
                      className="drop-shadow-md"
                    >
                      <path d="M3 3l7 18 3-7 7-3L3 3z" />
                    </svg>

                    {/* Click Ripple Effect */}
                    {isClicking && (
                      <span className="absolute -top-1 -left-1 w-6 h-6 rounded-full border-2 border-primary animate-ping opacity-75"></span>
                    )}
                  </div>
                </div>
              )}

              {/* View Buttons */}
              {FINTECH_VIEWS.map((view, idx) => {
                const isActive = activeIdx === idx;
                return (
                  <button
                    key={view.id}
                    onClick={() => handleSelectView(idx)}
                    className={`w-full p-3 rounded-lg border text-left transition-all duration-300 flex items-center justify-between group ${isActive
                      ? 'border-primary/40 bg-primary/10 text-primary font-bold shadow-xs'
                      : 'border-border bg-background text-ink hover:bg-surface'
                      }`}
                  >
                    <div>
                      <div className="text-[9px] font-mono font-bold opacity-70">0{idx + 1}</div>
                      <div className="text-[11px] font-bold tracking-wider uppercase">{view.name}</div>
                    </div>
                    <FiArrowUpRight
                      className={`w-3.5 h-3.5 transition-transform ${isActive ? 'rotate-45 text-primary' : 'text-muted group-hover:translate-x-0.5'
                        }`}
                    />
                  </button>
                );
              })}

            </div>
          </div>

          <div className="pt-4 border-t border-border/60 text-[9px] text-muted font-mono flex items-center justify-between">
            <span>FINTECH DESIGN SYSTEM</span>
            <span className="font-bold text-primary">FISPOKE UX</span>
          </div>
        </div>

        {/* RIGHT COLUMN: Generated Live Fintech Dashboard Preview (~60% width) */}
        <div className="col-span-12 md:col-span-7 p-4 sm:p-5 bg-background flex flex-col justify-between relative">

          <div className="space-y-4">

            {/* View Header */}
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border pb-3">
              <div>
                <span className="text-[8px] font-bold tracking-widest text-muted uppercase block">
                  {activeView.category}
                </span>
                <h4 className="font-display text-base font-bold text-ink">{activeView.name}</h4>
              </div>
              <span className="text-[8px] font-bold tracking-widest uppercase px-2 py-0.5 rounded bg-primary/10 border border-primary/20 text-primary font-bold">
                {activeView.status}
              </span>
            </div>

            {/* Metric Summary Cards */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 bg-surface border border-border rounded-lg">
                <span className="text-[7px] font-bold text-muted uppercase tracking-widest block mb-1">
                  {activeView.primaryMetricLabel}
                </span>
                <span className="font-display text-lg sm:text-xl font-bold text-ink">
                  {activeView.primaryMetric}
                </span>
              </div>

              <div className="p-3 bg-surface border border-border rounded-lg">
                <span className="text-[7px] font-bold text-muted uppercase tracking-widest block mb-1">
                  {activeView.secondaryMetricLabel}
                </span>
                <span className="font-display text-lg sm:text-xl font-bold text-ink">
                  {activeView.secondaryMetric}
                </span>
              </div>
            </div>

            {/* Performance Bar Chart Preview */}
            <div className="p-3 bg-surface border border-border rounded-lg">
              <div className="flex items-center justify-between text-[7px] font-bold text-muted uppercase tracking-widest mb-2">
                <span>TREND MONITORING</span>
                <span>PEAK 100%</span>
              </div>
              <div className="flex items-end gap-1.5 h-12 pt-1">
                {activeView.chartHeights.map((h, i) => (
                  <div key={i} className="flex-1 bg-background border border-border/80 rounded-t h-full flex flex-col justify-end overflow-hidden">
                    <div
                      style={{ height: `${h}%` }}
                      className="w-full bg-primary/75 transition-all duration-500 ease-out"
                    ></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Data Table Preview */}
            <div className="bg-surface border border-border rounded-lg overflow-hidden text-[9px]">
              <div className="p-2 border-b border-border text-[8px] font-bold text-muted uppercase tracking-widest">
                ACTIVE FINANCIAL RECORDS
              </div>
              <div className="divide-y divide-border/60">
                {activeView.tableRows.map((row, idx) => (
                  <div key={idx} className="p-2 flex items-center justify-between">
                    <span className="font-bold text-ink">{row.col1}</span>
                    <span className="font-mono text-muted">{row.col2}</span>
                    <span className="text-muted hidden sm:inline">{row.col3}</span>
                    <span className="px-1.5 py-0.5 rounded bg-background border border-border text-[8px] font-bold">
                      {row.col4}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          <div className="pt-3 mt-3 border-t border-border flex items-center justify-between text-[8px] font-mono text-muted">
            <span>CONNECTED CLIENT DATA</span>
            <span className="text-ink font-bold">REAL-TIME SYNC</span>
          </div>

        </div>

      </div>
    </div>
  );
}
