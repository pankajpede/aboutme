import { useState } from 'react';
import { FiCpu, FiCheck } from '../ui/Icons';

type Environment = 'Production' | 'Staging';
type Severity = 'All' | 'High' | 'Critical';
type TimeRange = '30 min' | '2 hr' | '24 hr';
type Domain = 'Infrastructure' | 'Cloud' | 'Application';

type RecommendationData = {
  query: string;
  context: string;
  recommendation: string;
  causes: string[];
  why: string;
  action: string;
};

const RECOMMENDATIONS: Record<string, RecommendationData> = {
  'Production-Critical': {
    query: 'What high-priority operational anomalies require immediate attention?',
    context: 'Production Cluster A · High Resource Contention',
    recommendation: 'CPU utilization spiked by 34% over the last 30 minutes in Production Cluster A.',
    causes: ['Sudden ingress traffic spike (+42%)', 'Microservice container resource leak', 'Database thread pool contention'],
    why: 'Peak memory usage exceeded 88% threshold alongside node 04 latency degrading.',
    action: 'Reallocate container memory & inspect database query thread pool.',
  },
  'Production-High': {
    query: 'How is system health performing across Production environment?',
    context: 'Production Multi-Cloud · Traffic Spike Detected',
    recommendation: 'Elevated API response times detected on Primary Gateway Node 02.',
    causes: ['Upstream cache miss rate increased to 18%', 'SSL handshake timeout variance', 'Node 02 CPU throttling'],
    why: 'Average latency increased from 45ms to 180ms during traffic window.',
    action: 'Scale Gateway replica instances from 4 to 8 nodes.',
  },
  'Staging-Critical': {
    query: 'Are there any blocking issues in Staging environment?',
    context: 'Staging Integration Pipeline · Build Anomaly',
    recommendation: 'Staging deployment pipeline halted due to storage cluster i/o degradation.',
    causes: ['Integration test run generated 12GB temp logs', 'Storage disk iops capped at 90%', 'Staging node B unresponsive'],
    why: 'Automated regression test suite overloaded local staging storage pool.',
    action: 'Purge temp logs and reset Staging storage quota.',
  },
  'Default': {
    query: 'Surface recommended optimization steps for operational stability.',
    context: 'Unified Environment · Standard Health Matrix',
    recommendation: 'Routine operational stability check completed across all active clusters.',
    causes: ['Normal background workload distribution', 'Idle container instances detected', 'Storage capacity at 45%'],
    why: 'Resource metrics fall well within normal operational baselines.',
    action: 'Review recommended cloud cost optimization report.',
  },
};

export function AIAssistanceSection() {
  const [env, setEnv] = useState<Environment>('Production');
  const [severity, setSeverity] = useState<Severity>('Critical');
  const [timeRange, setTimeRange] = useState<TimeRange>('30 min');
  const [domain, setDomain] = useState<Domain>('Infrastructure');
  const [actionTaken, setActionTaken] = useState<string | null>(null);

  const lookupKey = `${env}-${severity}`;
  const currentRec = RECOMMENDATIONS[lookupKey] || RECOMMENDATIONS['Default'];

  const tags = ['AI PRODUCT DESIGN', 'CONVERSATIONAL UX', 'INTERACTION DESIGN', 'PRODUCT THINKING'];

  return (
    <section id="experience-02" className="py-20 lg:py-28 border-b border-border bg-surface">
      <div className="container mx-auto px-5 lg:px-12 xl:px-16">
        
        {/* Experience 02: Even Section -> Visual Left / Content Right (Strict Alternation) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: Interactive AI Assistant Visual Interface */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="bg-background border border-border rounded-xl p-5 sm:p-6 lg:p-7 shadow-xs">
              
              {/* AI Header Bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border pb-4 mb-5">
                <div className="flex items-center gap-2 text-[10px] font-bold tracking-widest text-ink uppercase">
                  <FiCpu className="w-4 h-4 text-ink" />
                  <span>ONE.AI ASSISTANT</span>
                </div>
                <div className="text-[9px] font-bold tracking-widest uppercase px-2.5 py-0.5 rounded bg-surface border border-border text-muted">
                  PRINCIPLE: ASSIST NOT REPLACE
                </div>
              </div>

              {/* Parameter Controls Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6 p-3 bg-surface border border-border rounded-lg text-[9px] font-bold uppercase">
                {/* Environment Filter */}
                <div>
                  <span className="text-[7px] text-muted block mb-1">ENVIRONMENT</span>
                  <div className="flex gap-1">
                    {(['Production', 'Staging'] as Environment[]).map((e) => (
                      <button
                        key={e}
                        onClick={() => { setEnv(e); setActionTaken(null); }}
                        className={`px-2 py-1 rounded text-[8px] tracking-wider transition-all ${
                          env === e ? 'bg-ink text-dark-text' : 'bg-background text-muted border border-border'
                        }`}
                      >
                        {e}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Severity Filter */}
                <div>
                  <span className="text-[7px] text-muted block mb-1">SEVERITY</span>
                  <div className="flex gap-1">
                    {(['All', 'High', 'Critical'] as Severity[]).map((s) => (
                      <button
                        key={s}
                        onClick={() => { setSeverity(s); setActionTaken(null); }}
                        className={`px-2 py-1 rounded text-[8px] tracking-wider transition-all ${
                          severity === s ? 'bg-ink text-dark-text' : 'bg-background text-muted border border-border'
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Time Range Filter */}
                <div>
                  <span className="text-[7px] text-muted block mb-1">TIME RANGE</span>
                  <div className="flex gap-1">
                    {(['30 min', '2 hr', '24 hr'] as TimeRange[]).map((t) => (
                      <button
                        key={t}
                        onClick={() => { setTimeRange(t); setActionTaken(null); }}
                        className={`px-2 py-1 rounded text-[8px] tracking-wider transition-all ${
                          timeRange === t ? 'bg-ink text-dark-text' : 'bg-background text-muted border border-border'
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Domain Filter */}
                <div>
                  <span className="text-[7px] text-muted block mb-1">DOMAIN</span>
                  <div className="flex gap-1">
                    {(['Infrastructure', 'Cloud', 'Application'] as Domain[]).map((d) => (
                      <button
                        key={d}
                        onClick={() => { setDomain(d); setActionTaken(null); }}
                        className={`px-2 py-1 rounded text-[8px] tracking-wider transition-all ${
                          domain === d ? 'bg-ink text-dark-text' : 'bg-background text-muted border border-border'
                        }`}
                      >
                        {d.slice(0, 4)}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* AI Conversation & Recommendation Panel */}
              <div className="space-y-4">
                
                {/* Context Badge */}
                <div className="text-[9px] font-mono text-muted bg-surface/80 border border-border px-3 py-1.5 rounded flex items-center justify-between">
                  <span>CONTEXT: {currentRec.context}</span>
                  <span className="text-ink font-bold">{domain.toUpperCase()} · {timeRange} WINDOW</span>
                </div>

                {/* User Query Prompt */}
                <div className="p-3 bg-surface border border-border rounded-lg flex items-start gap-3">
                  <div className="w-5 h-5 rounded bg-ink text-dark-text text-[9px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                    U
                  </div>
                  <div className="text-xs font-semibold text-ink">
                    "{currentRec.query}"
                  </div>
                </div>

                {/* AI Recommendation Box */}
                <div className="p-4 bg-surface border border-ink/40 rounded-lg space-y-3 shadow-xs relative">
                  <div className="flex items-center justify-between text-[9px] font-bold tracking-widest text-ink uppercase border-b border-border/80 pb-2">
                    <div className="flex items-center gap-2">
                      <FiCpu className="w-3.5 h-3.5 text-ink" />
                      <span>AI RECOMMENDATION</span>
                    </div>
                    <span className="text-muted font-mono">CONFIDENCE 94%</span>
                  </div>

                  <p className="text-xs font-bold text-ink leading-relaxed">
                    {currentRec.recommendation}
                  </p>

                  {/* Potential Causes */}
                  <div className="space-y-1 pt-1">
                    <span className="text-[9px] font-bold text-muted uppercase tracking-wider">POTENTIAL CAUSES:</span>
                    <div className="space-y-1">
                      {currentRec.causes.map((cause, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-[11px] text-ink font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-ink"></span>
                          <span>{cause}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* WHY / Explanation (Builds User Trust) */}
                  <div className="p-2.5 bg-background border border-border rounded text-[10px] text-muted">
                    <span className="font-bold text-ink uppercase text-[8px] block mb-0.5">WHY THIS RECOMMENDATION:</span>
                    {currentRec.why}
                  </div>

                  {/* Action Bar */}
                  <div className="pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-border/80">
                    <div className="text-[10px] font-bold text-ink">
                      RECOMMENDED ACTION: <span className="text-muted font-normal">{currentRec.action}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      {actionTaken ? (
                        <span className="text-[9px] font-bold tracking-widest uppercase px-3 py-1.5 bg-ink text-dark-text rounded flex items-center gap-1.5">
                          <FiCheck className="w-3 h-3" /> ACTION {actionTaken.toUpperCase()}
                        </span>
                      ) : (
                        <>
                          <button
                            onClick={() => setActionTaken('reviewed')}
                            className="px-3 py-1.5 rounded text-[9px] font-bold tracking-widest uppercase bg-ink text-dark-text hover:bg-ink-hover transition-colors"
                          >
                            REVIEW
                          </button>
                          <button
                            onClick={() => setActionTaken('accepted')}
                            className="px-3 py-1.5 rounded text-[9px] font-bold tracking-widest uppercase border border-border text-ink hover:bg-background transition-colors"
                          >
                            ACCEPT
                          </button>
                          <button
                            onClick={() => setActionTaken('dismissed')}
                            className="px-3 py-1.5 rounded text-[9px] font-bold tracking-widest uppercase border border-border text-muted hover:text-ink transition-colors"
                          >
                            DISMISS
                          </button>
                        </>
                      )}
                    </div>
                  </div>

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
              AI ASSISTANCE
            </h2>

            <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-ink leading-tight mb-6">
              Designing AI-assisted operational decision making.
            </h3>

            <p className="text-base text-muted font-medium leading-relaxed mb-8 max-w-lg">
              Designing an AI interaction that helps users understand operational context, surface relevant recommendations and move from insight toward action.
            </p>

            {/* Trust Principle Note */}
            <div className="mb-8 p-4 bg-background border border-border rounded-lg space-y-2">
              <div className="text-[9px] font-bold tracking-widest text-ink uppercase mb-1">
                UX TRUST PRINCIPLE: ASSIST NOT REPLACE
              </div>
              <p className="text-xs text-muted leading-relaxed">
                The AI assistant surfaces context and recommendations while keeping the user firmly in control to review, accept, or dismiss decisions.
              </p>
            </div>

            {/* Tags */}
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
