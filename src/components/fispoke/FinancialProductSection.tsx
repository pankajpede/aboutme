import { useState } from 'react';
import { FiArrowRight, FiCheck } from '../ui/Icons';

type FinancialProductKey = 'hysa' | 'securities' | 'realestate';

type ProductStateData = {
  id: FinancialProductKey;
  title: string;
  category: string;
  metric1: string;
  metric1Label: string;
  metric2: string;
  metric2Label: string;
  status: string;
  detail: string;
  actionText: string;
};

const FINANCIAL_PRODUCTS: Record<FinancialProductKey, ProductStateData> = {
  hysa: {
    id: 'hysa',
    title: 'HIGH-YIELD SAVINGS',
    category: 'CASH MANAGEMENT',
    metric1: '3.56%',
    metric1Label: 'ANNUAL YIELD (APY)',
    metric2: '$250,000',
    metric2Label: 'CURRENT BALANCE',
    status: 'Active Account',
    detail: 'No minimum balance required · Auto-payout enabled',
    actionText: 'EXPLORE PRODUCT',
  },
  securities: {
    id: 'securities',
    title: 'SECURITIES-BACKED LENDING',
    category: 'PORTFOLIO CREDIT',
    metric1: '$420,000',
    metric1Label: 'AVAILABLE CREDIT LINE',
    metric2: '34%',
    metric2Label: 'CREDIT UTILIZATION',
    status: 'Eligible for Expansion',
    detail: 'Backed by $1.2M eligible portfolio securities',
    actionText: 'REVIEW OPTIONS',
  },
  realestate: {
    id: 'realestate',
    title: 'REAL-ESTATE LENDING',
    category: 'PROPERTY FINANCING',
    metric1: '$600,000',
    metric1Label: 'LOAN STRUCTURE AMOUNT',
    metric2: '30 YEARS',
    metric2Label: 'STRUCTURED MORTGAGE TERM',
    status: 'Application Pending',
    detail: '$850,000 estimated property valuation',
    actionText: 'VIEW DETAILS',
  },
};

export function FinancialProductSection() {
  const [selectedProduct, setSelectedProduct] = useState<FinancialProductKey>('hysa');
  const [showComparison, setShowComparison] = useState<boolean>(false);
  const [actionExecuted, setActionExecuted] = useState<boolean>(false);

  const currentProduct = FINANCIAL_PRODUCTS[selectedProduct];

  const focusPoints = ['Product Information', 'Financial Data', 'Comparison', 'Eligibility', 'Decision Support'];
  const tags = ['FINTECH UX', 'INFORMATION DESIGN', 'DATA EXPERIENCE', 'PRODUCT THINKING'];

  return (
    <section id="experience-03" className="py-20 lg:py-28 border-b border-border bg-background">
      <div className="container mx-auto px-5 lg:px-12 xl:px-16">
        
        {/* Experience 03: Odd Section -> Content Left / Visual Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: Content */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            
            <div className="text-[10px] sm:text-[11px] font-bold tracking-[0.15em] uppercase text-muted mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-ink"></span>
              03 / EXPERIENCE 03
            </div>

            <h2 className="font-display text-xs font-bold tracking-[0.2em] uppercase text-muted mb-2">
              FINANCIAL PRODUCT EXPERIENCE
            </h2>

            <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-ink leading-tight mb-6">
              Making complex financial products easier to understand and act on.
            </h3>

            <p className="text-base text-muted font-medium leading-relaxed mb-8 max-w-lg">
              Designing product experiences that make financial information, eligibility and next steps easier to understand.
            </p>

            {/* Focus List */}
            <div className="mb-8 p-4 bg-surface border border-border rounded-lg space-y-2">
              <div className="text-[9px] font-bold tracking-widest text-muted uppercase mb-3">
                PRODUCT UX FOCUS
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

          {/* RIGHT COLUMN: Interactive Financial Product Preview */}
          <div className="lg:col-span-7">
            <div className="bg-surface border border-border rounded-xl p-5 sm:p-6 lg:p-7 shadow-xs">
              
              {/* Header Bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border pb-4 mb-5">
                <div className="text-[10px] font-bold tracking-widest text-ink uppercase">
                  FINANCIAL PRODUCT PREVIEW
                </div>
                <button
                  onClick={() => setShowComparison(!showComparison)}
                  className={`text-[9px] font-bold tracking-widest uppercase px-3 py-1 rounded transition-all ${
                    showComparison ? 'bg-ink text-dark-text' : 'bg-background border border-border text-muted hover:text-ink'
                  }`}
                >
                  {showComparison ? 'HIDE COMPARISON' : 'COMPARE PRODUCTS'}
                </button>
              </div>

              {/* Product Selector Bar */}
              <div className="grid grid-cols-3 gap-2 mb-6">
                <button
                  onClick={() => {
                    setSelectedProduct('hysa');
                    setActionExecuted(false);
                  }}
                  className={`p-2.5 rounded border text-left transition-all ${
                    selectedProduct === 'hysa'
                      ? 'bg-ink text-dark-text border-ink font-bold shadow-xs'
                      : 'bg-background border-border text-ink hover:bg-surface'
                  }`}
                >
                  <div className="text-[9px] font-bold tracking-widest uppercase">HYSA</div>
                  <div className="text-[8px] opacity-70">Cash Yield</div>
                </button>

                <button
                  onClick={() => {
                    setSelectedProduct('securities');
                    setActionExecuted(false);
                  }}
                  className={`p-2.5 rounded border text-left transition-all ${
                    selectedProduct === 'securities'
                      ? 'bg-ink text-dark-text border-ink font-bold shadow-xs'
                      : 'bg-background border-border text-ink hover:bg-surface'
                  }`}
                >
                  <div className="text-[9px] font-bold tracking-widest uppercase">SECURITIES</div>
                  <div className="text-[8px] opacity-70">Portfolio Line</div>
                </button>

                <button
                  onClick={() => {
                    setSelectedProduct('realestate');
                    setActionExecuted(false);
                  }}
                  className={`p-2.5 rounded border text-left transition-all ${
                    selectedProduct === 'realestate'
                      ? 'bg-ink text-dark-text border-ink font-bold shadow-xs'
                      : 'bg-background border-border text-ink hover:bg-surface'
                  }`}
                >
                  <div className="text-[9px] font-bold tracking-widest uppercase">REAL-ESTATE</div>
                  <div className="text-[8px] opacity-70">Property Loan</div>
                </button>
              </div>

              {/* Dynamic Product Card Display */}
              {!showComparison ? (
                <div className="p-5 bg-background border border-border rounded-lg space-y-4">
                  <div className="flex items-center justify-between border-b border-border pb-3">
                    <div>
                      <span className="text-[8px] font-bold text-muted uppercase tracking-widest block">
                        {currentProduct.category}
                      </span>
                      <span className="font-display text-sm sm:text-base font-bold text-ink">
                        {currentProduct.title}
                      </span>
                    </div>
                    <span className="text-[9px] font-bold tracking-widest uppercase px-2.5 py-0.5 rounded bg-surface border border-border text-ink">
                      {currentProduct.status}
                    </span>
                  </div>

                  {/* Primary Metrics Grid */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 bg-surface border border-border rounded">
                      <span className="text-[7px] font-bold text-muted uppercase tracking-widest block mb-1">
                        {currentProduct.metric1Label}
                      </span>
                      <span className="font-display text-xl sm:text-2xl font-bold text-ink">
                        {currentProduct.metric1}
                      </span>
                    </div>

                    <div className="p-3 bg-surface border border-border rounded">
                      <span className="text-[7px] font-bold text-muted uppercase tracking-widest block mb-1">
                        {currentProduct.metric2Label}
                      </span>
                      <span className="font-display text-xl sm:text-2xl font-bold text-ink">
                        {currentProduct.metric2}
                      </span>
                    </div>
                  </div>

                  <div className="p-3 bg-surface border border-border rounded text-[10px] text-muted flex items-center justify-between">
                    <span>{currentProduct.detail}</span>
                    <span className="font-mono text-[8px] font-bold uppercase text-ink">CONCEPTUAL DATA</span>
                  </div>

                  <div className="pt-2 flex justify-end">
                    <button
                      onClick={() => setActionExecuted(true)}
                      className="px-4 py-2 rounded text-[9px] font-bold tracking-widest uppercase bg-ink text-dark-text hover:bg-ink-hover transition-colors flex items-center gap-1.5"
                    >
                      {actionExecuted ? (
                        <>
                          <FiCheck className="w-3 h-3" />
                          ACTION CONFIRMED
                        </>
                      ) : (
                        <>
                          {currentProduct.actionText}
                          <FiArrowRight className="w-3 h-3" />
                        </>
                      )}
                    </button>
                  </div>

                </div>
              ) : (
                /* Compact Product Comparison View */
                <div className="p-4 bg-background border border-border rounded-lg overflow-x-auto">
                  <div className="text-[9px] font-bold tracking-widest text-muted uppercase mb-3">
                    PRODUCT COMPARISON MATRIX
                  </div>
                  <table className="w-full text-left text-[10px] border-collapse">
                    <thead>
                      <tr className="border-b border-border text-[8px] font-bold text-muted uppercase">
                        <th className="p-2">PRODUCT</th>
                        <th className="p-2">PURPOSE</th>
                        <th className="p-2">KEY METRIC</th>
                        <th className="p-2">STATUS</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      <tr>
                        <td className="p-2 font-bold text-ink">HYSA</td>
                        <td className="p-2 text-muted">Cash Yield</td>
                        <td className="p-2 font-mono font-bold text-ink">3.56% APY</td>
                        <td className="p-2"><span className="px-1.5 py-0.5 rounded bg-surface border border-border text-[8px] font-bold">Active</span></td>
                      </tr>
                      <tr>
                        <td className="p-2 font-bold text-ink">Securities Line</td>
                        <td className="p-2 text-muted">Liquidity</td>
                        <td className="p-2 font-mono font-bold text-ink">$420K Line</td>
                        <td className="p-2"><span className="px-1.5 py-0.5 rounded bg-surface border border-border text-[8px] font-bold">Eligible</span></td>
                      </tr>
                      <tr>
                        <td className="p-2 font-bold text-ink">Real-Estate Loan</td>
                        <td className="p-2 text-muted">Refinance</td>
                        <td className="p-2 font-mono font-bold text-ink">$600K Loan</td>
                        <td className="p-2"><span className="px-1.5 py-0.5 rounded bg-surface border border-border text-[8px] font-bold">Pending</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
