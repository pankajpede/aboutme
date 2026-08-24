import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiArrowRight, FiCpu, FiMessageSquare, FiCheck, FiCornerDownRight } from '../components/ui/Icons';
import { ScrollToTopWidget } from '../components/ui/ScrollToTopWidget';
import laptopDcLg from '../assets/images/case-study/laptop-in-dc-large.jpg';

export default function UnityOneAIAssistantCaseStudy() {
  const [step, setStep] = useState<number>(0);

  const aiSteps = [
    {
      query: "Why is this service showing degraded performance?",
      status: "Investigating related signals across network routing and compute nodes...",
      insights: ["Performance anomaly detected on Compute Cluster 04", "Network latency spike affecting API gateway"],
      recommendation: "Review network latency routing affecting API gateway service.",
      actionLabel: "TAKE ACTION",
    },
    {
      query: "Show me recent infrastructure alerts for this cluster.",
      status: "Filtering critical events in the last 24 hours...",
      insights: ["2 High Priority storage latency warnings", "1 Network packet drop alert resolved automatically"],
      recommendation: "Rebalance storage IOPS throughput across node pools.",
      actionLabel: "APPLY RECOMMENDATION",
    },
  ];

  const currentAI = aiSteps[step];

  return (
    <div id="ai-assistant-study" className="py-20 lg:py-28 bg-background text-ink relative">
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
                AI ASSISTANT
              </li>
            </ol>
          </nav>
          <span className="text-[10px] font-mono font-bold text-muted uppercase">
            CASE STUDY 02 OF 03
          </span>
        </div>

        {/* Case Study Title Header */}
        <div className="space-y-6 max-w-4xl">
          <div className="text-[10px] font-bold tracking-[0.15em] text-muted uppercase flex items-center gap-2 font-mono">
            <span className="w-2 h-2 rounded-full bg-ink"></span>
            02 / UNITYONE · AI ASSISTANT
          </div>

          <h1 className="font-display text-[clamp(36px,5vw,60px)] font-bold tracking-tight text-ink leading-tight uppercase">
            Turning operational data into useful assistance.
          </h1>

          <p className="text-base sm:text-lg text-muted font-medium leading-relaxed">
            Instead of forcing users to search through dashboards, alerts and operational data, the AI experience brings context and recommendations closer to the decision.
          </p>

          {/* Metadata Bar */}
          <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-6 p-6 bg-surface border border-border rounded-xl">
            <div>
              <span className="text-[9px] font-bold tracking-widest text-muted uppercase block mb-1 font-mono">ROLE</span>
              <span className="text-xs font-bold text-ink uppercase block font-display">Senior Product Designer</span>
            </div>
            <div>
              <span className="text-[9px] font-bold tracking-widest text-muted uppercase block mb-1 font-mono">FOCUS</span>
              <span className="text-xs font-bold text-ink uppercase block font-display">AI UX & Decision Support</span>
            </div>
            <div>
              <span className="text-[9px] font-bold tracking-widest text-muted uppercase block mb-1 font-mono">MODEL</span>
              <span className="text-xs font-bold text-ink uppercase block font-display">Conversational UX</span>
            </div>
            <div>
              <span className="text-[9px] font-bold tracking-widest text-muted uppercase block mb-1 font-mono">DATA</span>
              <span className="text-xs font-bold text-ink uppercase block font-display">Sanitized AI Simulation</span>
            </div>
          </div>
        </div>

        {/* Section 1: The Problem */}
        <div className="p-8 sm:p-12 bg-surface border border-border rounded-2xl space-y-6">
          <span className="text-[9px] font-bold tracking-widest text-muted uppercase font-mono block">
            SECTION 01 / THE PROBLEM
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-ink uppercase">
            Alert Fatigue & Scattered Context
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-muted font-medium leading-relaxed">
            <p>
              In complex operational environments, operators spend significant time searching across disparate dashboards to diagnose root causes. High alert volumes create fatigue, making it hard to identify which signal requires immediate action.
            </p>
            <p>
              The AI Assistant experience was designed to act as a contextual partner — surfacing relevant signals, synthesizing complex data into clear recommendations, and allowing operators to execute decisions directly within the workflow.
            </p>
          </div>
        </div>

        {/* Section 2: UX Challenge Flow */}
        <div className="p-8 sm:p-12 bg-background border border-border rounded-2xl space-y-6 text-center">
          <span className="text-[9px] font-bold tracking-widest text-muted uppercase font-mono block">
            SECTION 02 / AI ASSISTANCE VALUE FLOW
          </span>

          <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-bold font-mono text-ink">
            <span className="px-3 py-1.5 bg-surface border border-border rounded">QUESTION</span>
            <span className="text-muted">➔</span>
            <span className="px-3 py-1.5 bg-surface border border-border rounded">CONTEXT</span>
            <span className="text-muted">➔</span>
            <span className="px-3 py-1.5 bg-surface border border-border rounded">ANALYSIS</span>
            <span className="text-muted">➔</span>
            <span className="px-3 py-1.5 bg-surface border border-border rounded">RECOMMENDATION</span>
            <span className="text-muted">➔</span>
            <span className="px-3 py-1.5 bg-ink text-dark-text rounded shadow-2xs">ACTION</span>
          </div>
        </div>

        {/* Section 3: Interactive Visual AI Assistant Simulation */}
        <div className="p-8 sm:p-12 bg-surface border border-border rounded-2xl space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border pb-4">
            <div>
              <span className="text-[9px] font-bold tracking-widest text-muted uppercase font-mono block">
                SECTION 03 / SYSTEM VISUALIZATION & INTERACTIVE PROTOTYPE
              </span>
              <h3 className="font-display text-xl font-bold text-ink uppercase">
                AI Assistant Conversational Flow
              </h3>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setStep(0)}
                className={`text-[9px] font-bold tracking-widest uppercase px-3 py-1.5 rounded transition-all ${
                  step === 0 ? 'bg-ink text-dark-text shadow-xs' : 'bg-background border border-border text-muted hover:text-ink'
                }`}
              >
                PROMPT 01
              </button>
              <button
                onClick={() => setStep(1)}
                className={`text-[9px] font-bold tracking-widest uppercase px-3 py-1.5 rounded transition-all ${
                  step === 1 ? 'bg-ink text-dark-text shadow-xs' : 'bg-background border border-border text-muted hover:text-ink'
                }`}
              >
                PROMPT 02
              </button>
            </div>
          </div>

          {/* Large Hero Case Study Editorial Image */}
          <div className="overflow-hidden rounded-xl border border-border aspect-[21/9] bg-background">
            <img
              src={laptopDcLg}
              alt="UnityOne AI Assistant Operational Environment"
              className="w-full h-full object-cover filter contrast-110 grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>

          {/* AI Simulation Container */}
          <div className="p-6 sm:p-8 bg-background border border-border rounded-xl space-y-6 max-w-3xl mx-auto">
            
            {/* User Prompt */}
            <div className="p-4 bg-surface border border-border rounded-lg flex items-start gap-3">
              <FiMessageSquare className="w-4 h-4 text-ink shrink-0 mt-1" />
              <div>
                <span className="text-[9px] font-bold text-muted uppercase font-mono block">OPERATOR QUERY</span>
                <span className="text-sm font-bold text-ink font-display">"{currentAI.query}"</span>
              </div>
            </div>

            {/* AI Response Card */}
            <div className="p-5 bg-surface border border-ink/40 rounded-lg space-y-4 shadow-xs">
              <div className="flex items-center justify-between border-b border-border pb-2">
                <div className="flex items-center gap-2">
                  <FiCpu className="w-4 h-4 text-ink" />
                  <span className="text-[10px] font-bold tracking-widest text-ink uppercase font-mono">UNITYONE AI ASSISTANT</span>
                </div>
                <span className="text-[8px] font-bold font-mono px-2 py-0.5 rounded bg-ink text-dark-text">ACTIVE ANALYTICS</span>
              </div>

              <p className="text-xs text-muted font-mono leading-relaxed">{currentAI.status}</p>

              <div className="space-y-2">
                <span className="text-[9px] font-bold tracking-widest text-muted uppercase font-mono block">IDENTIFIED SIGNALS</span>
                {currentAI.insights.map((ins, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs font-bold text-ink">
                    <FiCornerDownRight className="w-3.5 h-3.5 text-muted shrink-0" />
                    <span>{ins}</span>
                  </div>
                ))}
              </div>

              {/* Recommendation Box */}
              <div className="p-4 bg-background border border-border rounded-lg space-y-2">
                <span className="text-[8px] font-bold tracking-widest text-muted uppercase font-mono block">RECOMMENDED ACTION</span>
                <p className="text-xs font-bold text-ink">{currentAI.recommendation}</p>
                
                <div className="pt-2 flex gap-3">
                  <button className="px-4 py-2 bg-ink text-dark-text rounded text-[10px] font-bold tracking-widest uppercase hover:bg-muted transition-colors shadow-2xs">
                    {currentAI.actionLabel}
                  </button>
                  <button className="px-4 py-2 bg-surface border border-border text-ink rounded text-[10px] font-bold tracking-widest uppercase hover:bg-background transition-colors">
                    VIEW DETAILS
                  </button>
                </div>
              </div>

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
              <h4 className="font-display text-base font-bold text-ink uppercase">CONTEXTUAL ASSISTANCE</h4>
              <p className="text-xs text-muted font-medium leading-relaxed">
                Position AI recommendations directly within operational screens rather than in a disconnected side chat.
              </p>
            </div>

            <div className="p-6 bg-background border border-border rounded-xl space-y-2">
              <span className="font-mono text-xs font-bold text-ink block">02</span>
              <h4 className="font-display text-base font-bold text-ink uppercase">TRANSPARENT REASONING</h4>
              <p className="text-xs text-muted font-medium leading-relaxed">
                Show the underlying infrastructure signals and context behind every AI recommendation to build operator trust.
              </p>
            </div>

            <div className="p-6 bg-background border border-border rounded-xl space-y-2">
              <span className="font-mono text-xs font-bold text-ink block">03</span>
              <h4 className="font-display text-base font-bold text-ink uppercase">ONE-CLICK EXECUTION</h4>
              <p className="text-xs text-muted font-medium leading-relaxed">
                Allow operators to execute suggested fixes or recommendations directly from the AI card with full auditability.
              </p>
            </div>

            <div className="p-6 bg-background border border-border rounded-xl space-y-2">
              <span className="font-mono text-xs font-bold text-ink block">04</span>
              <h4 className="font-display text-base font-bold text-ink uppercase">ENTERPRISE CONVERSATIONAL UX</h4>
              <p className="text-xs text-muted font-medium leading-relaxed">
                Designed tailored query prompts suited for enterprise IT, avoiding generic consumer chatbot tropes.
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
                <span>Reduced search friction when diagnosing complex system anomalies.</span>
              </li>
              <li className="flex items-center gap-2">
                <FiCheck className="w-4 h-4 text-ink shrink-0" />
                <span>A clear bridge between operational data and actionable decisions.</span>
              </li>
              <li className="flex items-center gap-2">
                <FiCheck className="w-4 h-4 text-ink shrink-0" />
                <span>Enhanced operator confidence during critical IT events.</span>
              </li>
            </ul>
          </div>

          <div className="p-8 bg-background border border-border rounded-2xl space-y-4">
            <span className="text-[9px] font-bold tracking-widest text-muted uppercase font-mono block">
              SECTION 06 / WHAT I LEARNED
            </span>
            <h3 className="font-display text-xl font-bold text-ink uppercase">Personal Reflection</h3>
            <p className="text-xs text-muted font-medium leading-relaxed">
              Designing AI experiences for enterprise environments showed me that trust is paramount. AI is most valuable when it provides clear, verifiable reasoning and empowers the operator to make informed decisions.
            </p>
          </div>
        </div>

        {/* Case Study Bottom Navigation */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-6">
          <Link
            to="/work/unityone/complex-it-operations"
            className="inline-flex items-center text-[11px] font-bold tracking-widest uppercase text-muted hover:text-ink transition-colors group"
          >
            <FiArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            PREVIOUS: CASE STUDY 01 (COMPLEX IT)
          </Link>

          <Link
            to="/work/unityone/reporting-data"
            className="inline-flex items-center text-[11px] font-bold tracking-widest uppercase text-ink hover:text-muted transition-colors group"
          >
            NEXT: CASE STUDY 03 (REPORTING & DATA)
            <FiArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </div>
  );
}
