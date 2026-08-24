import { useState } from 'react';
import { FiCheck, FiArrowRight, FiClipboard } from '../ui/Icons';

type JourneyProduct = 'HYSA' | 'LENDING';

type StepDetail = {
  id: string;
  stepNum: string;
  name: string;
  title: string;
  description: string;
  completedItems: string[];
  requiredItem: string;
};

const JOURNEY_STEPS: Record<JourneyProduct, StepDetail[]> = {
  HYSA: [
    {
      id: 'step-1',
      stepNum: '01',
      name: 'Eligibility',
      title: 'ACCOUNT ELIGIBILITY',
      description: 'Confirm identity and citizenship requirements for high-yield cash account.',
      completedItems: ['US Citizenship Verified', 'SSN Check'],
      requiredItem: 'Select Funding Account',
    },
    {
      id: 'step-2',
      stepNum: '02',
      name: 'Account Details',
      title: 'ACCOUNT SETUP',
      description: 'Define initial deposit amount and interest payout schedule.',
      completedItems: ['Deposit Amount ($250,000)', 'Monthly Payout Selected'],
      requiredItem: 'Confirm ACH Routing',
    },
    {
      id: 'step-3',
      stepNum: '03',
      name: 'Verification',
      title: 'IDENTITY VERIFICATION',
      description: 'Instant multi-factor identity verification and AML compliance scan.',
      completedItems: ['Multi-Factor Auth Passed', 'AML Scan Passed'],
      requiredItem: 'Sign Deposit Agreement',
    },
    {
      id: 'step-4',
      stepNum: '04',
      name: 'Funding',
      title: 'WIRE & ACH FUNDING',
      description: 'Transfer funds securely via connected financial institution.',
      completedItems: ['Connected Institution Verified'],
      requiredItem: 'Authorize $250k Wire',
    },
    {
      id: 'step-5',
      stepNum: '05',
      name: 'Confirmation',
      title: 'ACCOUNT ACTIVE',
      description: 'Final confirmation and instant access to advisor portfolio dashboard.',
      completedItems: ['Agreement Executed', 'Account Created'],
      requiredItem: 'View Account Dashboard',
    },
  ],
  LENDING: [
    {
      id: 'step-1',
      stepNum: '01',
      name: 'Purpose',
      title: 'LOAN PURPOSE & SIZE',
      description: 'Specify borrowing purpose and total requested credit line.',
      completedItems: ['Purpose: Real-Estate Refinance', 'Requested Line: $600,000'],
      requiredItem: 'Confirm Collateral Assets',
    },
    {
      id: 'step-2',
      stepNum: '02',
      name: 'Financial Info',
      title: 'FINANCIAL STATEMENT',
      description: 'Review portfolio asset valuation and liquidity ratios.',
      completedItems: ['Portfolio Asset Sync ($1.2M)', 'Liquidity Assessment'],
      requiredItem: 'Upload Tax Schedule',
    },
    {
      id: 'step-3',
      stepNum: '03',
      name: 'Verification',
      title: 'UNDERWRITING VERIFICATION',
      description: 'Automated debt-to-income and collateral verification scan.',
      completedItems: ['Identity Confirmed', 'Collateral Valuation ($1.2M)'],
      requiredItem: 'Underwriting Review Required',
    },
    {
      id: 'step-4',
      stepNum: '04',
      name: 'Documents',
      title: 'DOCUMENTATION COLLECTION',
      description: 'Collect and verify signed loan agreements and disclosures.',
      completedItems: ['Promissory Note Drafted', 'Disclosure Approved'],
      requiredItem: 'Upload Proof of Insurance',
    },
    {
      id: 'step-5',
      stepNum: '05',
      name: 'Review',
      title: 'FINAL ADVISOR REVIEW',
      description: 'Advisor approval and credit line disbursement authorization.',
      completedItems: ['Advisor Sign-off', 'Compliance Approval'],
      requiredItem: 'Execute Credit Agreement',
    },
  ],
};

export function ApplicationJourneySection() {
  const [activeProduct, setActiveProduct] = useState<JourneyProduct>('HYSA');
  const [activeStepIdx, setActiveStepIdx] = useState<number>(2); // Step 03 default
  const [stepCompleted, setStepCompleted] = useState<boolean>(false);

  const steps = JOURNEY_STEPS[activeProduct];
  const currentStep = steps[activeStepIdx] || steps[0];

  const focusPoints = ['Progressive Disclosure', 'Form Design', 'Validation', 'Document Collection', 'Status'];
  const tags = ['PRODUCT DESIGN', 'FORM UX', 'ONBOARDING', 'WORKFLOW DESIGN'];

  return (
    <section id="experience-02" className="py-20 lg:py-28 border-b border-border bg-surface">
      <div className="container mx-auto px-5 lg:px-12 xl:px-16">
        
        {/* Experience 02: Even Section -> Visual Left / Content Right (Strict Alternation) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: Interactive Application Journey Visual */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="bg-background border border-border rounded-xl p-5 sm:p-6 lg:p-7 shadow-xs">
              
              {/* Header Bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border pb-4 mb-5">
                <div className="flex items-center gap-2 text-[10px] font-bold tracking-widest text-ink uppercase">
                  <FiClipboard className="w-4 h-4 text-ink" />
                  <span>APPLICATION JOURNEY</span>
                </div>
                <div className="flex items-center gap-1.5">
                  {(['HYSA', 'LENDING'] as JourneyProduct[]).map((p) => (
                    <button
                      key={p}
                      onClick={() => {
                        setActiveProduct(p);
                        setActiveStepIdx(2);
                        setStepCompleted(false);
                      }}
                      className={`text-[9px] font-bold tracking-widest uppercase px-3 py-1 rounded transition-all ${
                        activeProduct === p ? 'bg-ink text-dark-text' : 'bg-surface border border-border text-muted hover:text-ink'
                      }`}
                    >
                      {p} JOURNEY
                    </button>
                  ))}
                </div>
              </div>

              {/* Progress Indicator Step Journey Flow */}
              <div className="grid grid-cols-5 gap-1.5 mb-6">
                {steps.map((step, idx) => (
                  <button
                    key={step.id}
                    onClick={() => {
                      setActiveStepIdx(idx);
                      setStepCompleted(false);
                    }}
                    className={`p-2 rounded text-center transition-all ${
                      activeStepIdx === idx
                        ? 'bg-ink text-dark-text font-bold shadow-xs'
                        : idx < activeStepIdx
                        ? 'bg-surface border border-ink/40 text-ink'
                        : 'bg-surface/30 border border-border text-muted opacity-50'
                    }`}
                  >
                    <span className="text-[8px] font-mono block">0{idx + 1}</span>
                    <span className="text-[9px] truncate block">{step.name}</span>
                  </button>
                ))}
              </div>

              {/* Active Step Form & Detail Inspector Card */}
              <div className="p-5 bg-surface border border-border rounded-lg space-y-4">
                <div className="flex items-center justify-between border-b border-border pb-3">
                  <div>
                    <span className="text-[8px] font-bold text-muted uppercase tracking-widest block">
                      STEP {currentStep.stepNum} / {steps.length} · {currentStep.name.toUpperCase()}
                    </span>
                    <span className="font-display text-sm font-bold text-ink">{currentStep.title}</span>
                  </div>
                  <span className="text-[9px] font-mono font-bold px-2 py-0.5 rounded bg-background border border-border text-muted">
                    GUIDED PROGRESSION
                  </span>
                </div>

                <p className="text-xs text-muted leading-relaxed font-medium">
                  {currentStep.description}
                </p>

                {/* Verification Checkmarks */}
                <div className="space-y-2 pt-1">
                  <span className="text-[8px] font-bold text-muted uppercase tracking-widest block">COMPLETED VERIFICATIONS:</span>
                  {currentStep.completedItems.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-bold text-ink">
                      <div className="w-4 h-4 rounded-full bg-ink text-dark-text flex items-center justify-center shrink-0">
                        <FiCheck className="w-2.5 h-2.5" />
                      </div>
                      <span>{item}</span>
                      <span className="text-[8px] font-mono text-muted uppercase ml-auto">COMPLETE</span>
                    </div>
                  ))}
                </div>

                {/* Pending Required Item */}
                <div className="p-3 bg-background border border-ink/40 rounded flex items-center justify-between">
                  <div>
                    <span className="text-[7px] font-bold text-muted uppercase tracking-widest block">ACTION REQUIRED</span>
                    <span className="text-xs font-bold text-ink">{currentStep.requiredItem}</span>
                  </div>
                  <button
                    onClick={() => setStepCompleted(true)}
                    className={`px-3.5 py-1.5 rounded text-[9px] font-bold tracking-widest uppercase transition-colors flex items-center gap-1.5 ${
                      stepCompleted ? 'bg-ink text-dark-text' : 'bg-ink text-dark-text hover:bg-ink-hover'
                    }`}
                  >
                    {stepCompleted ? (
                      <>
                        <FiCheck className="w-3 h-3" />
                        COMPLETED
                      </>
                    ) : (
                      <>
                        CONTINUE
                        <FiArrowRight className="w-3 h-3" />
                      </>
                    )}
                  </button>
                </div>

              </div>

            </div>
          </div>

          {/* RIGHT COLUMN: Content */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex flex-col justify-center">
            
            <div className="text-[10px] sm:text-[11px] font-bold tracking-[0.15em] uppercase text-muted mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-ink"></span>
              02 / EXPERIENCE 02
            </div>

            <h2 className="font-display text-xs font-bold tracking-[0.2em] uppercase text-muted mb-2">
              CLIENT & APPLICATION JOURNEY
            </h2>

            <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-ink leading-tight mb-6">
              Turning complex financial applications into guided experiences.
            </h3>

            <p className="text-base text-muted font-medium leading-relaxed mb-8 max-w-lg">
              Designing guided application experiences that help users understand what is required, where they are in the process and what comes next.
            </p>

            {/* Focus List */}
            <div className="mb-8 p-4 bg-background border border-border rounded-lg space-y-2">
              <div className="text-[9px] font-bold tracking-widest text-muted uppercase mb-3">
                APPLICATION UX FOCUS
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
                  className="text-[9px] font-bold tracking-widest px-3 py-1 border border-border rounded uppercase text-muted bg-background"
                >
                  {tag}
                </span>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
