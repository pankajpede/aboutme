import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  FiArrowLeft,
  FiArrowUpRight
} from '../components/ui/Icons';
import { ScrollToTopWidget } from '../components/ui/ScrollToTopWidget';

// Local Case Study Editorial Image Imports
import dataMiningLg from '../assets/images/case-study/data-mining-large.jpg';
import datacenterMed from '../assets/images/case-study/datacenter-medium.jpg';
import laptopDcMed from '../assets/images/case-study/laptop-in-dc-medium.jpg';

// Ambient Tech SVG Background Geometry Components (Primary Color #0A66C2 with Low Opacity)
function AmbientTechRings({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`absolute pointer-events-none ${className}`}
      width="280"
      height="280"
      viewBox="0 0 280 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="140" cy="140" r="130" stroke="#0A66C2" strokeWidth="1.5" strokeDasharray="6 6" strokeOpacity="0.25" />
      <circle cx="140" cy="140" r="95" stroke="#0A66C2" strokeWidth="1" strokeOpacity="0.18" />
      <circle cx="140" cy="140" r="55" stroke="#0A66C2" strokeWidth="1.5" strokeDasharray="4 4" strokeOpacity="0.22" />
      <circle cx="140" cy="140" r="6" fill="#0A66C2" fillOpacity="0.3" />
      <path d="M140 0V280M0 140H280" stroke="#0A66C2" strokeWidth="0.75" strokeDasharray="3 5" strokeOpacity="0.15" />
    </svg>
  );
}

function AmbientTechGrid({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`absolute pointer-events-none ${className}`}
      width="240"
      height="240"
      viewBox="0 0 240 240"
      fill="none"
    >
      <defs>
        <pattern id="tech-dots-rpt" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.5" fill="#0A66C2" fillOpacity="0.22" />
        </pattern>
      </defs>
      <rect width="240" height="240" fill="url(#tech-dots-rpt)" />
      <rect x="20" y="20" width="200" height="200" stroke="#0A66C2" strokeWidth="1.2" strokeDasharray="5 5" strokeOpacity="0.25" />
      <rect x="60" y="60" width="120" height="120" stroke="#0A66C2" strokeWidth="1" strokeOpacity="0.15" />
    </svg>
  );
}

function AmbientTechDiamond({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`absolute pointer-events-none ${className}`}
      width="200"
      height="200"
      viewBox="0 0 200 200"
      fill="none"
    >
      <rect x="100" y="10" width="127" height="127" transform="rotate(45 100 10)" stroke="#0A66C2" strokeWidth="1.5" strokeDasharray="6 6" strokeOpacity="0.25" />
      <rect x="100" y="40" width="84" height="84" transform="rotate(45 100 40)" stroke="#0A66C2" strokeWidth="1" strokeOpacity="0.18" />
      <circle cx="100" cy="100" r="5" fill="#0A66C2" fillOpacity="0.3" />
    </svg>
  );
}

type TimeFrame = '7D' | '30D' | '90D';
type PriorityFilter = 'ALL' | 'CRITICAL' | 'HIGH PRIORITY' | 'NORMAL';

export default function UnityOneReportingCaseStudy() {
  const location = useLocation();

  // Handle Breadcrumb Referrer State
  const fromState = location.state as { from?: string; fromLabel?: string } | null;
  const origin = fromState?.from === '/' ? { label: 'OVERVIEW', path: '/' } : { label: 'UNITYONE', path: '/work/unityone' };

  // Interactive Reporting Dashboard State
  const [timeRange, setTimeRange] = useState<TimeFrame>('30D');
  const [activePriority, setActivePriority] = useState<PriorityFilter>('ALL');

  // Interactive Design Exploration Tab
  const [activeExploration, setActiveExploration] = useState<'EXP1' | 'EXP2' | 'EXP3' | 'FINAL'>('FINAL');

  // Interactive Output State Tab
  const [activeStateTab, setActiveStateTab] = useState<'NORMAL' | 'WARNING' | 'CRITICAL' | 'NO_DATA' | 'HIGH_VOLUME'>('WARNING');

  // Simulated Time Series Metrics
  const reportMetrics = {
    '7D': {
      uptime: '99.98%',
      incidents: '2 Resolved',
      avgLoad: '64%',
      anomalies: [
        { id: 'AN-701', system: 'SAN Storage Pool 01', severity: 'CRITICAL', metric: 'IOPS Queue Length', value: '18 ops', action: 'Rebalance IOPS' },
        { id: 'AN-702', system: 'API Gateway Cluster', severity: 'HIGH PRIORITY', metric: 'Latency Spike', value: '240ms', action: 'Reroute Traffic' },
      ],
      bars: [45, 60, 55, 80, 70, 65, 64]
    },
    '30D': {
      uptime: '99.94%',
      incidents: '7 Resolved',
      avgLoad: '72%',
      anomalies: [
        { id: 'AN-301', system: 'SAN Storage Pool 01', severity: 'CRITICAL', metric: 'IOPS Queue Length', value: '22 ops', action: 'Rebalance IOPS' },
        { id: 'AN-302', system: 'Compute Array 04', severity: 'HIGH PRIORITY', metric: 'Memory Contention', value: '92%', action: 'Scale Memory' },
        { id: 'AN-303', system: 'Mesh Switch-02', severity: 'CRITICAL', metric: 'Packet Loss', value: '3.4%', action: 'Trigger Link Failover' },
      ],
      bars: [50, 65, 75, 90, 85, 78, 72]
    },
    '90D': {
      uptime: '99.91%',
      incidents: '18 Resolved',
      avgLoad: '68%',
      anomalies: [
        { id: 'AN-901', system: 'SAN Storage Pool 01', severity: 'CRITICAL', metric: 'IOPS Queue Length', value: '25 ops', action: 'Rebalance IOPS' },
        { id: 'AN-902', system: 'Compute Array 04', severity: 'HIGH PRIORITY', metric: 'Memory Contention', value: '94%', action: 'Scale Memory' },
      ],
      bars: [60, 70, 65, 85, 75, 80, 68]
    }
  };

  const currentData = reportMetrics[timeRange];
  const filteredAnomalies = activePriority === 'ALL' ? currentData.anomalies : currentData.anomalies.filter(a => a.severity === activePriority);

  return (
    <div id="reporting-study" className="bg-background text-ink relative min-h-screen">
      <ScrollToTopWidget />

      {/* TOP HEADER / BREADCRUMB NAVIGATION */}
      <section className="pt-24 pb-8 bg-surface border-b border-border">
        <div className="container mx-auto px-5 lg:px-12 xl:px-16 space-y-6">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2 text-[10px] sm:text-[11px] font-bold tracking-widest uppercase font-mono">
              <li>
                <Link to={origin.path} className="text-muted hover:text-primary border-b border-transparent hover:border-primary transition-all pb-[1px]">
                  {origin.label}
                </Link>
              </li>
              <li className="text-muted select-none">/</li>
              {origin.label === 'OVERVIEW' ? (
                <>
                  <li>
                    <Link to="/work/unityone" className="text-muted hover:text-primary border-b border-transparent hover:border-primary transition-all pb-[1px]">
                      CURATED CASE STUDIES
                    </Link>
                  </li>
                  <li className="text-muted select-none">/</li>
                </>
              ) : (
                <>
                  <li>
                    <Link to="/work/unityone" className="text-muted hover:text-primary border-b border-transparent hover:border-primary transition-all pb-[1px]">
                      UNITYONE
                    </Link>
                  </li>
                  <li className="text-muted select-none">/</li>
                </>
              )}
              <li className="text-ink font-bold">
                DATA & DECISION SUPPORT
              </li>
            </ol>
          </nav>

          {/* Hero Headline & Intro - Center Aligned */}
          <div className="text-center max-w-3xl mx-auto space-y-3 pt-2">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-[10px] font-bold tracking-widest text-primary uppercase font-mono">
                03 / UNITYONE · DATA & DECISION SUPPORT
              </span>
            </div>

            <h1 className="font-display text-[36px] font-semibold leading-[1] text-ink">
              From operational data<br /><span className="text-primary">to decisions.</span>
            </h1>

            <p className="text-[14px] text-muted font-medium max-w-2xl mx-auto leading-relaxed">
              Designing a data experience that helps operational teams move beyond monitoring information toward understanding priorities, evaluating situations and making informed decisions.
            </p>
          </div>

          {/* Project Meta Panel */}
          <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 p-6 bg-surface border border-border rounded-xl shadow-xs">
            <div className="flex flex-col">
              <span className="text-[12px] font-medium text-muted">ROLE</span>
              <span className="text-[14px] font-semibold text-ink font-display">Senior Product Designer</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[12px] font-medium text-muted">FOCUS</span>
              <span className="text-[14px] font-semibold text-ink font-display">Data UX & Analytics</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[12px] font-medium text-muted">DOMAIN</span>
              <span className="text-[14px] font-semibold text-ink font-display">Enterprise IT Operations</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[12px] font-medium text-muted">PRODUCT</span>
              <span className="text-[14px] font-semibold text-ink font-display">UnityOne Platform</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[12px] font-medium text-muted">EXPERIENCE</span>
              <span className="text-[14px] font-semibold text-ink font-display">Data & Decision Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 01 — PROJECT SNAPSHOT */}
      <section className="py-16 lg:py-20 bg-surface border-b border-border relative overflow-hidden">
        {/* Background Ambient Shapes */}
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <AmbientTechRings className="-top-12 -right-12 w-64 h-64 sm:w-80 sm:h-80" />

        <div className="container mx-auto px-5 lg:px-12 xl:px-16 space-y-5 relative z-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-[10px] font-bold tracking-widest text-primary uppercase">01 /</span>
            <h2 className="text-[10px] font-bold tracking-[0.08em] text-muted uppercase">Executive Summary</h2>
          </div>
          <h2 className="font-display text-[36px] font-semibold leading-[1] text-ink">
            Project Snapshot.<br /><span className="text-primary">At a glance.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-4 bg-background border border-border rounded-lg space-y-3 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md group/card">
              <span className="text-[12px] font-medium text-muted uppercase block">THE CHALLENGE</span>
              <h3 className="font-display text-sm font-bold text-ink uppercase group-hover/card:text-primary transition-colors">Monitoring vs Decision</h3>
              <p className="text-xs text-muted font-medium leading-relaxed">
                Operational teams had access to large amounts of telemetry, but required clear priorities, context, and trend analysis to make confident operational decisions.
              </p>
            </div>

            <div className="p-4 bg-background border border-border rounded-lg space-y-3 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md group/card">
              <span className="text-[12px] font-medium text-muted uppercase block">MY ROLE</span>
              <h3 className="font-display text-sm font-bold text-ink uppercase group-hover/card:text-primary transition-colors">Data UX Architecture</h3>
              <p className="text-xs text-muted font-medium leading-relaxed">
                Led data hierarchy design, visualization strategy, KPI modeling, decision-oriented filtering, drill-down flows, and UI prototyping.
              </p>
            </div>

            <div className="p-4 bg-background border border-border rounded-lg space-y-3 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md group/card">
              <span className="text-[12px] font-medium text-muted uppercase block">THE APPROACH</span>
              <h3 className="font-display text-sm font-bold text-ink uppercase group-hover/card:text-primary transition-colors">Progressive Data Hierarchy</h3>
              <p className="text-xs text-muted font-medium leading-relaxed">
                Structured the user journey from raw telemetry to decision execution: Data → Signals → Context → Prioritization → Insight → Decision → Action.
              </p>
            </div>

            <div className="p-4 bg-background border border-border rounded-lg space-y-3 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md group/card">
              <span className="text-[12px] font-medium text-muted uppercase block">THE OUTCOME</span>
              <h3 className="font-display text-sm font-bold text-ink uppercase group-hover/card:text-primary transition-colors">Decision Support</h3>
              <p className="text-xs text-muted font-medium leading-relaxed">
                Replaced static telemetry views with a decision-support experience. <span className="font-mono text-[10px] text-ink font-bold">[ADD ACTUAL PROJECT OUTCOME]</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 02 — FROM UNDERSTANDING TO DECISION */}
      <section className="py-16 lg:py-20 bg-background border-b border-border relative overflow-hidden">
        {/* Background Ambient Shapes */}
        <div className="absolute top-1/2 -left-24 -translate-y-1/2 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <AmbientTechDiamond className="top-10 right-10 w-48 h-48 sm:w-60 sm:h-60" />

        <div className="container mx-auto px-5 lg:px-12 xl:px-16 space-y-5 relative z-10">
          <div className="space-y-2">
            <div className="flex items-center gap-2 mb-3">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-[10px] font-bold tracking-widest text-primary uppercase">02 /</span>
              <h2 className="text-[10px] font-bold tracking-[0.08em] text-muted uppercase font-mono">Product System Progression</h2>
            </div>
            <h2 className="font-display text-[36px] font-semibold leading-[1] text-ink">
              The Three Chapters of UnityOne.<br /><span className="text-primary">Ecosystem progression.</span>
            </h2>
            <p className="text-sm text-muted font-medium leading-relaxed max-w-2xl">
              UnityOne is an integrated enterprise operational platform. The three case studies represent a cohesive UX progression across infrastructure, intelligence, and decision-making.
            </p>
          </div>

          {/* 3-Chapter System Diagram */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 sm:p-8 bg-surface border border-border rounded-2xl shadow-xs">
            {/* Chapter 01 */}
            <div className="p-5 bg-background border border-border rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-border pb-2">
                <span className="text-[10px] font-bold text-muted font-mono">CHAPTER 01</span>
                <span className="text-[10px] font-bold text-primary font-mono">COMPLEX IT</span>
              </div>
              <h3 className="font-display text-sm font-bold text-ink uppercase">UNDERSTAND INFRASTRUCTURE</h3>
              <p className="text-xs text-muted font-medium leading-relaxed">
                Structure data center hierarchy, reveal cross-layer relationships, and expose telemetry context.
              </p>
            </div>

            {/* Chapter 02 */}
            <div className="p-5 bg-background border border-border rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-border pb-2">
                <span className="text-[10px] font-bold text-muted font-mono">CHAPTER 02</span>
                <span className="text-[10px] font-bold text-primary font-mono">AI ASSISTANCE</span>
              </div>
              <h3 className="font-display text-sm font-bold text-ink uppercase">RECEIVE ASSISTANCE</h3>
              <p className="text-xs text-muted font-medium leading-relaxed">
                Synthesize operational signals, recommend contextual remediation, and support human review.
              </p>
            </div>

            {/* Chapter 03 */}
            <div className="p-5 bg-ink text-white rounded-xl space-y-3 shadow-md">
              <div className="flex items-center justify-between border-b border-white/15 pb-2">
                <span className="text-[10px] font-bold text-primary font-mono">CHAPTER 03</span>
                <span className="text-[10px] font-bold text-white font-mono">DECISION SUPPORT</span>
              </div>
              <h3 className="font-display text-sm font-bold text-white uppercase">PRIORITIZE & DECIDE</h3>
              <p className="text-xs text-dark-muted font-medium leading-relaxed">
                Analyze operational signals, prioritize critical anomalies, evaluate options, and execute decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 03 — THE ENVIRONMENT */}
      <section className="py-16 lg:py-20 bg-surface border-b border-border relative overflow-hidden">
        {/* Background Ambient Shapes */}
        <div className="absolute -bottom-16 -right-16 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <AmbientTechGrid className="bottom-4 left-6 w-48 h-48 sm:w-56 sm:h-56" />

        <div className="container mx-auto px-5 lg:px-12 xl:px-16 space-y-5 relative z-10">
          <div className="space-y-2">
            <div className="flex items-center gap-2 mb-3">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-[10px] font-bold tracking-widest text-primary uppercase font-mono">03 /</span>
              <h2 className="text-[10px] font-bold tracking-[0.08em] text-muted uppercase font-mono">Data Domain</h2>
            </div>
            <h2 className="font-display text-[36px] font-semibold leading-[1] text-ink">
              The Operational Data Landscape.<br /><span className="text-primary">Systems & telemetry layers.</span>
            </h2>
          </div>

          <div className="space-y-4 text-sm text-muted font-medium leading-relaxed max-w-3xl">
            <p>
              In enterprise operations, decision-makers must evaluate data spanning multiple infrastructure domains: SAN storage pools, compute hypervisors, network switches, cloud gateways, and incident ticketing systems.
            </p>
            <p>
              Transforming raw telemetry into decision support requires creating a structured flow that distills isolated metrics into prioritized operational insight.
            </p>
          </div>

          {/* Operational Data Hierarchy Flow */}
          <div className="p-6 bg-background border border-border rounded-xl space-y-4 shadow-xs">
            <span className="text-[9px] font-bold tracking-widest text-ink uppercase block text-center sm:text-left font-mono">
              OPERATIONAL DATA TO INSIGHT PIPELINE
            </span>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 text-[10px] font-bold text-center">
              <div className="p-3 bg-surface border border-border rounded text-ink space-y-1 hover:border-primary transition-all">
                <span className="text-[9px] text-muted block uppercase font-mono">01</span>
                <span>SYSTEMS</span>
              </div>
              <div className="p-3 bg-surface border border-border rounded text-ink space-y-1 hover:border-primary transition-all">
                <span className="text-[9px] text-muted block uppercase font-mono">02</span>
                <span>RAW DATA</span>
              </div>
              <div className="p-3 bg-surface border border-border rounded text-ink space-y-1 hover:border-primary transition-all">
                <span className="text-[9px] text-muted block uppercase font-mono">03</span>
                <span>METRICS</span>
              </div>
              <div className="p-3 bg-surface border border-border rounded text-ink space-y-1 hover:border-primary transition-all">
                <span className="text-[9px] text-muted block uppercase font-mono">04</span>
                <span>SIGNALS</span>
              </div>
              <div className="p-3 bg-surface border border-border rounded text-ink space-y-1 hover:border-primary transition-all">
                <span className="text-[9px] text-muted block uppercase font-mono">05</span>
                <span>TRENDS</span>
              </div>
              <div className="p-3 bg-ink text-white rounded space-y-1 hover:bg-primary transition-all">
                <span className="text-[9px] text-white/70 block uppercase font-mono">06</span>
                <span>DECISION</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 04 — WHO IS MAKING THE DECISION? */}
      <section className="py-16 lg:py-20 bg-background border-b border-border relative overflow-hidden">
        <div className="container mx-auto px-5 lg:px-12 xl:px-16 space-y-5 relative z-10">
          <div className="space-y-2">
            <div className="flex items-center gap-2 mb-3">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-[10px] font-bold tracking-widest text-primary uppercase font-mono">04 /</span>
              <h2 className="text-[10px] font-bold tracking-[0.08em] text-muted uppercase font-mono">Decision Roles</h2>
            </div>
            <h2 className="font-display text-[36px] font-semibold leading-[1] text-ink">
              Who Is Making the Decision?<br /><span className="text-primary">Operational roles & needs.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Role 1 */}
            <div className="p-6 bg-surface border border-border rounded-xl space-y-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md group/role">
              <div className="flex items-center justify-between border-b border-border pb-3">
                <span className="text-[10px] font-bold text-primary font-mono uppercase">ROLE 01</span>
                <span className="text-xs font-bold text-ink uppercase">OPERATIONS ENGINEERS</span>
              </div>
              <div className="space-y-2 text-xs">
                <p className="text-muted font-medium"><strong>Needs to know:</strong> Immediate root-cause anomalies and system failure bottlenecks.</p>
                <p className="text-muted font-medium"><strong>Needs to decide:</strong> Which remediation trigger to execute to restore service.</p>
                <p className="text-ink font-semibold"><strong>Action follows:</strong> Workload rebalancing or interface failover execution.</p>
              </div>
            </div>

            {/* Role 2 */}
            <div className="p-6 bg-surface border border-border rounded-xl space-y-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md group/role">
              <div className="flex items-center justify-between border-b border-border pb-3">
                <span className="text-[10px] font-bold text-primary font-mono uppercase">ROLE 02</span>
                <span className="text-xs font-bold text-ink uppercase">INFRASTRUCTURE MANAGERS</span>
              </div>
              <div className="space-y-2 text-xs">
                <p className="text-muted font-medium"><strong>Needs to know:</strong> Overall cluster uptime SLAs, resource degradation, and capacity headroom.</p>
                <p className="text-muted font-medium"><strong>Needs to decide:</strong> Hardware maintenance scheduling and resource allocation.</p>
                <p className="text-ink font-semibold"><strong>Action follows:</strong> Provisioning additional SAN storage or expanding compute nodes.</p>
              </div>
            </div>

            {/* Role 3 */}
            <div className="p-6 bg-surface border border-border rounded-xl space-y-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md group/role">
              <div className="flex items-center justify-between border-b border-border pb-3">
                <span className="text-[10px] font-bold text-primary font-mono uppercase">ROLE 03</span>
                <span className="text-xs font-bold text-ink uppercase">SITE RELIABILITY LEADS</span>
              </div>
              <div className="space-y-2 text-xs">
                <p className="text-muted font-medium"><strong>Needs to know:</strong> Multi-region error budgets, incident frequency, and historical trends.</p>
                <p className="text-muted font-medium"><strong>Needs to decide:</strong> Architecture resilience policy updates and SRE focus areas.</p>
                <p className="text-ink font-semibold"><strong>Action follows:</strong> System architecture updates and automated failover policy tweaks.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 05 — THE PROBLEM */}
      <section className="py-16 lg:py-20 bg-surface border-b border-border relative overflow-hidden">
        {/* Background Ambient Shapes */}
        <AmbientTechGrid className="top-8 right-8 w-44 h-44 sm:w-56 sm:h-56" />

        <div className="container mx-auto px-5 lg:px-12 xl:px-16 space-y-5 relative z-10">
          <div className="space-y-2">
            <div className="flex items-center gap-2 mb-3">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-[10px] font-bold tracking-widest text-primary uppercase font-mono">05 /</span>
              <h2 className="text-[10px] font-bold tracking-[0.08em] text-muted uppercase font-mono">Problem Framing</h2>
            </div>
            <h2 className="font-display text-[36px] font-semibold leading-[1] text-ink">
              When Data Doesn't Tell You What Matters.<br /><span className="text-primary">Decision bottlenecks.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 bg-background border border-border rounded-xl space-y-3 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md group/prob">
              <span className="text-[12px] font-medium text-muted uppercase block">01 — DATA OVERLOAD</span>
              <h3 className="font-display text-base font-bold text-ink uppercase group-hover/prob:text-primary transition-colors">Information Noise hides Signals</h3>
              <p className="text-xs text-muted font-medium leading-relaxed">
                When hundreds of telemetry streams are displayed with equal visual weight, operators struggle to pinpoint critical anomalies.
              </p>
            </div>

            <div className="p-5 bg-background border border-border rounded-xl space-y-3 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md group/prob">
              <span className="text-[12px] font-medium text-muted uppercase block">02 — NO CLEAR PRIORITY</span>
              <h3 className="font-display text-base font-bold text-ink uppercase group-hover/prob:text-primary transition-colors">Equal Severity Fatigue</h3>
              <p className="text-xs text-muted font-medium leading-relaxed">
                Without a clear priority hierarchy, minor warnings compete for attention with high-impact outages.
              </p>
            </div>

            <div className="p-5 bg-background border border-border rounded-xl space-y-3 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md group/prob">
              <span className="text-[12px] font-medium text-muted uppercase block">03 — ISOLATED NUMBERS</span>
              <h3 className="font-display text-base font-bold text-ink uppercase group-hover/prob:text-primary transition-colors">Context-Free Metrics</h3>
              <p className="text-xs text-muted font-medium leading-relaxed">
                A single metric value (e.g. 88% CPU load) does not explain whether performance is normal, improving, or deteriorating.
              </p>
            </div>

            <div className="p-5 bg-background border border-border rounded-xl space-y-3 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md group/prob">
              <span className="text-[12px] font-medium text-muted uppercase block">04 — SYNTHESIS GAP</span>
              <h3 className="font-display text-base font-bold text-ink uppercase group-hover/prob:text-primary transition-colors">Disconnected Response Options</h3>
              <p className="text-xs text-muted font-medium leading-relaxed">
                Traditional dashboards show data but leave operators to manually determine what remediation action should follow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 06 — THE GAP BETWEEN MONITORING AND DECISION-MAKING */}
      <section className="py-16 lg:py-20 bg-background border-b border-border relative overflow-hidden">
        <div className="container mx-auto px-5 lg:px-12 xl:px-16 space-y-5 relative z-10">
          <div className="space-y-2">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[10px] font-bold tracking-widest text-primary uppercase font-mono">06 /</span>
              <h2 className="text-[10px] font-bold tracking-[0.08em] text-muted uppercase font-mono">Existing Experience Audit</h2>
            </div>
            <h2 className="font-display text-[36px] font-semibold leading-[1] text-ink">
              The Gap Between Monitoring.<br /><span className="text-primary">And decision-making.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Visual Editorial Image Container */}
            <div className="lg:col-span-7 overflow-hidden rounded-xl border border-border aspect-[16/10] bg-surface relative shadow-sm">
              <img
                src={dataMiningLg}
                alt="Monitoring vs Decision Support UI Audit"
                className="w-full h-full object-cover filter grayscale contrast-125 opacity-75"
              />
              <div className="absolute inset-0 bg-ink/40 flex items-center justify-center p-6">
                <div className="p-5 bg-surface border border-border rounded-xl max-w-md space-y-2 text-left shadow-2xl">
                  <span className="text-[10px] font-bold tracking-widest text-primary uppercase block font-mono">DASHBOARD UI AUDIT</span>
                  <p className="text-xs sm:text-sm font-semibold text-ink leading-relaxed">
                    Legacy monitoring views displayed isolated charts without priority ranking or clear next steps.
                  </p>
                </div>
              </div>
            </div>

            {/* Breakdown Annotations */}
            <div className="lg:col-span-5 space-y-3 text-xs">
              <div className="p-4 bg-surface border border-border rounded-xl space-y-1">
                <span className="text-[10px] font-bold text-muted uppercase font-mono block">01 / INFORMATION</span>
                <p className="text-ink font-medium leading-relaxed">Raw metric streams displayed without severity grouping.</p>
              </div>

              <div className="p-4 bg-surface border border-border rounded-xl space-y-1">
                <span className="text-[10px] font-bold text-muted uppercase font-mono block">02 / SIGNAL</span>
                <p className="text-ink font-medium leading-relaxed">Alert flags lack historical trendlines or baseline context.</p>
              </div>

              <div className="p-4 bg-surface border border-border rounded-xl space-y-1">
                <span className="text-[10px] font-bold text-muted uppercase font-mono block">03 / CONTEXT</span>
                <p className="text-ink font-medium leading-relaxed">Operators must manually check upstream hardware dependencies.</p>
              </div>

              <div className="p-4 bg-surface border border-border rounded-xl space-y-1">
                <span className="text-[10px] font-bold text-muted uppercase font-mono block">04 / PRIORITY</span>
                <p className="text-ink font-medium leading-relaxed">No automated prioritization of high-impact outage risks.</p>
              </div>

              <div className="p-4 bg-surface border border-border rounded-xl space-y-1">
                <span className="text-[10px] font-bold text-muted uppercase font-mono block">05 / ACTION</span>
                <p className="text-ink font-medium leading-relaxed">No direct remediation trigger connected to the dashboard view.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 07 — WHAT I NEEDED TO UNDERSTAND (DISCOVERY) */}
      <section className="py-16 lg:py-20 bg-surface border-b border-border relative overflow-hidden">
        {/* Background Ambient Shapes */}
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <AmbientTechDiamond className="-bottom-8 left-8 w-48 h-48 sm:w-60 sm:h-60" />

        <div className="container mx-auto px-5 lg:px-12 xl:px-16 space-y-5 relative z-10">
          <div className="space-y-2">
            <div className="flex items-center gap-2 mb-3">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-[10px] font-bold tracking-widest text-primary uppercase">07 /</span>
              <h2 className="text-[10px] font-bold tracking-[0.08em] text-muted uppercase font-mono">Discovery & Research</h2>
            </div>
            <h2 className="font-display text-[36px] font-semibold leading-[1] text-ink">
              What I Needed to Understand.<br /><span className="text-primary">Research methods.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-background border border-border rounded-xl space-y-3">
              <div className="text-[12px] font-medium text-muted uppercase block">DASHBOARD AUDIT</div>
              <h3 className="font-display text-sm font-bold text-ink uppercase">Existing Telemetry Views</h3>
              <p className="text-xs text-muted font-medium leading-relaxed">
                <strong>What I examined:</strong> Legacy reporting screens and metric tables across infrastructure management modules.
              </p>
              <p className="text-xs text-ink font-semibold">
                <strong>What I learned:</strong> Metrics were grouped by hardware type rather than operational priority or incident severity.
              </p>
            </div>

            <div className="p-6 bg-background border border-border rounded-xl space-y-3">
              <div className="text-[12px] font-medium text-muted uppercase block">WORKFLOW ANALYSIS</div>
              <h3 className="font-display text-sm font-bold text-ink uppercase">Decision-Making Flows</h3>
              <p className="text-xs text-muted font-medium leading-relaxed">
                <strong>What I examined:</strong> How operators triage alerts, evaluate time-series trends, and confirm system degradation.
              </p>
              <p className="text-xs text-ink font-semibold">
                <strong>What I learned:</strong> Decision-makers need baseline comparison and historical trendlines to evaluate severity.
              </p>
            </div>

            <div className="p-6 bg-background border border-border rounded-xl space-y-3">
              <div className="text-[12px] font-medium text-muted uppercase block">DOMAIN EXPLORATION</div>
              <h3 className="font-display text-sm font-bold text-ink uppercase">SRE Metrics & SLAs</h3>
              <p className="text-xs text-muted font-medium leading-relaxed">
                <strong>What I examined:</strong> Enterprise SLA targets, error budget tracking, and MTTR operational benchmarks.
              </p>
              <p className="text-xs text-ink font-semibold">
                <strong>What I learned:</strong> High-level summaries must link directly to progressive drill-down details.
              </p>
            </div>
          </div>

          <div className="p-4 bg-background border border-border rounded-lg text-center">
            <span className="text-[10px] font-mono font-bold text-muted uppercase">
              NOTE: <span className="text-ink">[ADD ACTUAL DISCOVERY DETAILS]</span>
            </span>
          </div>
        </div>
      </section>

      {/* SECTION 08 — WHAT I LEARNED (KEY INSIGHTS) */}
      <section className="py-16 lg:py-20 bg-background border-b border-border relative overflow-hidden">
        <div className="container mx-auto px-5 lg:px-12 xl:px-16 space-y-5 relative z-10">
          <div className="space-y-2">
            <div className="flex items-center gap-2 mb-3">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-[10px] font-bold tracking-widest text-primary uppercase font-mono">08 /</span>
              <h2 className="text-[10px] font-bold tracking-[0.08em] text-muted uppercase font-mono">Synthesis</h2>
            </div>
            <h2 className="font-display text-[36px] font-semibold leading-[1] text-ink">
              What I Learned.<br /><span className="text-primary">Four core data UX insights.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-4 bg-surface border border-border rounded-lg space-y-3 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md group/ins">
              <span className="text-lg font-bold font-mono text-ink group-hover/ins:text-primary transition-colors">01</span>
              <h3 className="font-display text-sm font-bold text-ink uppercase group-hover/ins:text-primary transition-colors">Data Needs Priority</h3>
              <p className="text-xs text-muted font-medium leading-relaxed">
                Users should not have to treat every metric as equally important. High-impact anomalies must lead the visual hierarchy.
              </p>
            </div>

            <div className="p-4 bg-surface border border-border rounded-lg space-y-3 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md group/ins">
              <span className="text-lg font-bold font-mono text-ink group-hover/ins:text-primary transition-colors">02</span>
              <h3 className="font-display text-sm font-bold text-ink uppercase group-hover/ins:text-primary transition-colors">Context Changes Meaning</h3>
              <p className="text-xs text-muted font-medium leading-relaxed">
                A single metric value becomes useful only when compared against baselines, thresholds, or related upstream systems.
              </p>
            </div>

            <div className="p-4 bg-surface border border-border rounded-lg space-y-3 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md group/ins">
              <span className="text-lg font-bold font-mono text-ink group-hover/ins:text-primary transition-colors">03</span>
              <h3 className="font-display text-sm font-bold text-ink uppercase group-hover/ins:text-primary transition-colors">Trends &gt; Snapshots</h3>
              <p className="text-xs text-muted font-medium leading-relaxed">
                Understanding whether a metric is improving or deteriorating over time is far more valuable than a static current value.
              </p>
            </div>

            <div className="p-4 bg-surface border border-border rounded-lg space-y-3 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md group/ins">
              <span className="text-lg font-bold font-mono text-ink group-hover/ins:text-primary transition-colors">04</span>
              <h3 className="font-display text-sm font-bold text-ink uppercase group-hover/ins:text-primary transition-colors">Multiple Signals Required</h3>
              <p className="text-xs text-muted font-medium leading-relaxed">
                Confident operational decisions require combining related signals (e.g. storage queue length + compute thread pool).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 09 — REFRAME THE OPPORTUNITY */}
      <section className="py-16 lg:py-20 bg-surface border-b border-border text-center">
        <div className="container mx-auto px-5 lg:px-12 xl:px-16 space-y-6">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-[10px] font-bold tracking-widest text-primary uppercase font-mono">09 /</span>
            <h2 className="text-[10px] font-bold tracking-[0.08em] text-muted uppercase">Opportunity Statement</h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-ink font-mono block">
              HOW MIGHT WE...
            </span>
            <blockquote className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-ink uppercase leading-snug">
              "How might we help operational users quickly identify what matters, understand why it matters and make informed decisions from complex operational data?"
            </blockquote>
          </div>
        </div>
      </section>

      {/* SECTION 10 — INFORMATION ARCHITECTURE */}
      <section className="py-16 lg:py-20 bg-background border-b border-border relative overflow-hidden">
        <div className="container mx-auto px-5 lg:px-12 xl:px-16 space-y-5 relative z-10">
          <div className="space-y-2">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[10px] font-bold tracking-widest text-primary uppercase font-mono">10 /</span>
              <h2 className="text-[10px] font-bold tracking-[0.08em] text-muted uppercase font-mono">Information Architecture</h2>
            </div>
            <h2 className="font-display text-[36px] font-semibold leading-[1] text-ink">
              Structuring Operational Information.<br /><span className="text-primary">Decision-oriented hierarchy.</span>
            </h2>
          </div>

          <div className="p-6 bg-surface border border-border rounded-xl space-y-4 shadow-xs">
            <div className="grid grid-cols-1 sm:grid-cols-6 gap-3 text-[10px] font-bold font-mono text-center">
              <div className="p-3 bg-background border border-border rounded text-ink space-y-1">
                <span className="text-[9px] text-muted block">MODULE 01</span>
                <span>OVERVIEW / STATUS</span>
              </div>
              <div className="p-3 bg-background border border-border rounded text-ink space-y-1">
                <span className="text-[9px] text-muted block">MODULE 02</span>
                <span>CRITICAL SIGNALS</span>
              </div>
              <div className="p-3 bg-background border border-border rounded text-ink space-y-1">
                <span className="text-[9px] text-muted block">MODULE 03</span>
                <span>TREND ANALYTICS</span>
              </div>
              <div className="p-3 bg-background border border-border rounded text-ink space-y-1">
                <span className="text-[9px] text-muted block">MODULE 04</span>
                <span>SYSTEM TARGETS</span>
              </div>
              <div className="p-3 bg-background border border-border rounded text-ink space-y-1">
                <span className="text-[9px] text-muted block">MODULE 05</span>
                <span>FILTER CONTROLS</span>
              </div>
              <div className="p-3 bg-ink text-white rounded space-y-1">
                <span className="text-[9px] text-white/70 block">MODULE 06</span>
                <span>REMEDIATION ACTION</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 11 — DECISION FLOW */}
      <section className="py-16 lg:py-20 bg-surface border-b border-border relative overflow-hidden">
        {/* Background Ambient Shapes */}
        <div className="absolute -top-10 -right-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <AmbientTechRings className="-top-8 right-12 w-56 h-56 sm:w-64 sm:h-64" />

        <div className="container mx-auto px-5 lg:px-12 xl:px-16 space-y-5 relative z-10">
          <div className="space-y-2">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[10px] font-bold tracking-widest text-primary uppercase font-mono">11 /</span>
              <h2 className="text-[10px] font-bold tracking-[0.08em] text-muted uppercase font-mono">Workflow Design</h2>
            </div>
            <h2 className="font-display text-[36px] font-semibold leading-[1] text-ink">
              From Signal to Decision.<br /><span className="text-primary">Eight-stage operational flow.</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 text-center text-[10px] font-bold">
            {[
              { step: '01', label: 'SIGNAL', desc: 'Alert detection' },
              { step: '02', label: 'WHAT CHANGED?', desc: 'Metric deviation' },
              { step: '03', label: 'WHY CHANGED?', desc: 'Root cause telemetry' },
              { step: '04', label: 'IMPORTANCE?', desc: 'Severity evaluation' },
              { step: '05', label: 'AFFECTED?', desc: 'Upstream scope' },
              { step: '06', label: 'OPTIONS?', desc: 'Remediation options' },
              { step: '07', label: 'DECISION', desc: 'User evaluation' },
              { step: '08', label: 'ACTION', desc: 'Execution trigger' },
            ].map((s) => (
              <div key={s.step} className="p-3 bg-background border border-border rounded-lg space-y-1 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:bg-primary/5 hover:shadow-xs group/step cursor-pointer">
                <span className="text-[11px] font-medium text-muted block group-hover/step:text-primary transition-colors font-mono">{s.step}</span>
                <span className="text-ink block uppercase text-[10px] font-bold group-hover/step:text-primary transition-colors">{s.label}</span>
                <span className="text-[9px] text-muted font-medium block leading-tight">{s.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 12 — DATA HIERARCHY */}
      <section className="py-16 lg:py-20 bg-background border-b border-border relative overflow-hidden">
        <div className="container mx-auto px-5 lg:px-12 xl:px-16 space-y-5 relative z-10">
          <div className="space-y-2">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[10px] font-bold tracking-widest text-primary uppercase font-mono">12 /</span>
              <h2 className="text-[10px] font-bold tracking-[0.08em] text-muted uppercase font-mono">Progressive Disclosure</h2>
            </div>
            <h2 className="font-display text-[36px] font-semibold leading-[1] text-ink">
              Designing a Hierarchy for Decision-Making.<br /><span className="text-primary">Five levels of detail.</span>
            </h2>
          </div>

          <div className="space-y-3 font-mono text-xs">
            {[
              { level: 'LEVEL 01', title: 'EXECUTIVE OVERVIEW', desc: 'High-level cluster health, overall uptime SLA, and active incident count.' },
              { level: 'LEVEL 02', title: 'PRIORITY SIGNALS', desc: 'Filtered list of critical anomaly alerts requiring immediate operator focus.' },
              { level: 'LEVEL 03', title: 'CONTEXT & TRENDS', desc: 'Time-series trendlines comparing current values against historical baselines.' },
              { level: 'LEVEL 04', title: 'DETAILED TELEMETRY', desc: 'Granular node-level metrics, disk queue lengths, and packet frame logs.' },
              { level: 'LEVEL 05', title: 'ACTION EXECUTION', desc: 'Direct remediation triggers to rebalance workloads or failover link interfaces.' },
            ].map((lvl) => (
              <div key={lvl.level} className="p-4 bg-surface border border-border rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="px-2 py-1 bg-background border border-border rounded text-primary font-bold text-[10px]">
                    {lvl.level}
                  </span>
                  <span className="font-bold text-ink uppercase">{lvl.title}</span>
                </div>
                <span className="text-[11px] text-muted font-normal">{lvl.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 13 — EXPLORING THE RIGHT DATA MODEL */}
      <section className="py-16 lg:py-20 bg-surface border-b border-border relative overflow-hidden">
        <div className="container mx-auto px-5 lg:px-12 xl:px-16 space-y-5 relative z-10">
          <div className="space-y-2">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[10px] font-bold tracking-widest text-primary uppercase font-mono">13 /</span>
              <h2 className="text-[10px] font-bold tracking-[0.08em] text-muted uppercase font-mono">Iterative Discovery</h2>
            </div>
            <h2 className="font-display text-[36px] font-semibold leading-[1] text-ink">
              Exploring the Right Model.<br /><span className="text-primary">Design explorations.</span>
            </h2>
          </div>

          {/* Exploration Tabs */}
          <div className="flex flex-wrap items-center gap-2 border-b border-border pb-4">
            {[
              { id: 'EXP1', name: '01 / DENSE UNFILTERED DASHBOARD' },
              { id: 'EXP2', name: '02 / METRIC-ONLY CARDS' },
              { id: 'EXP3', name: '03 / ISOLATED TREND ANALYTICS' },
              { id: 'FINAL', name: '04 / DECISION-ORIENTED EXPERIENCE' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveExploration(tab.id as any)}
                className={`text-[9px] font-bold tracking-widest uppercase px-3 py-2 rounded transition-all font-mono ${activeExploration === tab.id
                  ? 'bg-ink text-white shadow-xs'
                  : 'bg-background border border-border text-muted hover:text-ink'
                  }`}
              >
                {tab.name}
              </button>
            ))}
          </div>

          {/* Active Exploration Details */}
          <div className="p-6 bg-background border border-border rounded-xl space-y-4 shadow-xs">
            {activeExploration === 'EXP1' && (
              <div className="space-y-3">
                <h3 className="font-display text-base font-bold text-ink uppercase">EXPLORATION 01 — Dense Unfiltered Dashboard</h3>
                <p className="text-xs text-muted font-medium leading-relaxed">
                  <strong>What changed:</strong> Displayed 50+ raw telemetry charts simultaneously.
                </p>
                <p className="text-xs text-muted font-medium leading-relaxed">
                  <strong>Why it failed:</strong> Visual clutter overwhelmed operators during multi-node outage events.
                </p>
                <p className="text-xs text-ink font-semibold">
                  <strong>What we learned:</strong> Data must be prioritized by operational severity rather than hardware type.
                </p>
              </div>
            )}

            {activeExploration === 'EXP2' && (
              <div className="space-y-3">
                <h3 className="font-display text-base font-bold text-ink uppercase">EXPLORATION 02 — Metric-Only Cards</h3>
                <p className="text-xs text-muted font-medium leading-relaxed">
                  <strong>What changed:</strong> Replaced charts with big KPI stat callouts.
                </p>
                <p className="text-xs text-muted font-medium leading-relaxed">
                  <strong>Why it failed:</strong> Isolated numbers failed to convey historical trends or baseline context.
                </p>
                <p className="text-xs text-ink font-semibold">
                  <strong>What we learned:</strong> Numbers require historical trendlines to answer "Is this getting worse?"
                </p>
              </div>
            )}

            {activeExploration === 'EXP3' && (
              <div className="space-y-3">
                <h3 className="font-display text-base font-bold text-ink uppercase">EXPLORATION 03 — Isolated Trend Analytics</h3>
                <p className="text-xs text-muted font-medium leading-relaxed">
                  <strong>What changed:</strong> Focused exclusively on long-term time-series line graphs.
                </p>
                <p className="text-xs text-muted font-medium leading-relaxed">
                  <strong>Why it failed:</strong> Lacked direct links to remediation actions.
                </p>
                <p className="text-xs text-ink font-semibold">
                  <strong>What we learned:</strong> Analytics views must connect directly to operational execution triggers.
                </p>
              </div>
            )}

            {activeExploration === 'FINAL' && (
              <div className="space-y-3">
                <h3 className="font-display text-base font-bold text-ink uppercase">FINAL DIRECTION — Decision-Oriented Information Experience</h3>
                <p className="text-xs text-muted font-medium leading-relaxed">
                  <strong>Why selected:</strong> Combines high-level executive health callouts, prioritized anomaly cards, baseline trendlines, scope filters, and direct action triggers in a single unified workflow.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* SECTION 14 — WHY THIS APPROACH (DESIGN DECISIONS) */}
      <section className="py-16 lg:py-20 bg-background border-b border-border relative overflow-hidden">
        <div className="container mx-auto px-5 lg:px-12 xl:px-16 space-y-5 relative z-10">
          <div className="space-y-2">
            <div className="flex items-center gap-2 mb-3">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-[10px] font-bold tracking-widest text-primary uppercase font-mono">14 /</span>
              <h2 className="text-[10px] font-bold tracking-[0.08em] text-muted uppercase font-mono">Design Rationale</h2>
            </div>
            <h2 className="font-display text-[36px] font-semibold leading-[1] text-ink">
              Why This Approach.<br /><span className="text-primary">Four core design choices.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-surface border border-border rounded-xl space-y-3 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md group/dec">
              <span className="text-[12px] font-medium text-muted uppercase block">DECISION 01</span>
              <h3 className="font-display text-base font-bold text-ink uppercase group-hover/dec:text-primary transition-colors">PRIORITIZE BEFORE DETAIL</h3>
              <p className="text-xs text-muted font-medium leading-relaxed">
                <strong>Problem:</strong> Telemetry overload.<br />
                <strong>Decision:</strong> Surface critical anomaly alerts at the top of the interface before exposing lower-level charts.<br />
                <strong>UX Benefit:</strong> Directs operator focus immediately to high-risk outages.
              </p>
            </div>

            <div className="p-6 bg-surface border border-border rounded-xl space-y-3 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md group/dec">
              <span className="text-[12px] font-medium text-muted uppercase block">DECISION 02</span>
              <h3 className="font-display text-base font-bold text-ink uppercase group-hover/dec:text-primary transition-colors">SHOW CONTEXT WITH SIGNALS</h3>
              <p className="text-xs text-muted font-medium leading-relaxed">
                <strong>Problem:</strong> Isolated numbers lack meaning.<br />
                <strong>Decision:</strong> Pair raw metrics with historical baselines and related hardware dependencies.<br />
                <strong>UX Benefit:</strong> Eliminates guesswork when evaluating incident severity.
              </p>
            </div>

            <div className="p-6 bg-surface border border-border rounded-xl space-y-3 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md group/dec">
              <span className="text-[12px] font-medium text-muted uppercase block">DECISION 03</span>
              <h3 className="font-display text-base font-bold text-ink uppercase group-hover/dec:text-primary transition-colors">MAKE CHANGE VISIBLE</h3>
              <p className="text-xs text-muted font-medium leading-relaxed">
                <strong>Problem:</strong> Static snapshots obscure trajectory.<br />
                <strong>Decision:</strong> Embed sparkline trend indicators directly inside metric callout cards.<br />
                <strong>UX Benefit:</strong> Shows instantly whether a parameter is improving or deteriorating.
              </p>
            </div>

            <div className="p-6 bg-surface border border-border rounded-xl space-y-3 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md group/dec">
              <span className="text-[12px] font-medium text-muted uppercase block">DECISION 04</span>
              <h3 className="font-display text-base font-bold text-ink uppercase group-hover/dec:text-primary transition-colors">CONNECT INSIGHT TO ACTION</h3>
              <p className="text-xs text-muted font-medium leading-relaxed">
                <strong>Problem:</strong> Fragmented remediation execution.<br />
                <strong>Decision:</strong> Embed direct action execution triggers next to metric anomaly cards.<br />
                <strong>UX Benefit:</strong> Moves operators seamlessly from understanding to action.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 15 — DATA VISUALIZATION STRATEGY */}
      <section className="py-16 lg:py-20 bg-surface border-b border-border relative overflow-hidden">
        <div className="container mx-auto px-5 lg:px-12 xl:px-16 space-y-5 relative z-10">
          <div className="space-y-2">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[10px] font-bold tracking-widest text-primary uppercase font-mono">15 /</span>
              <h2 className="text-[10px] font-bold tracking-[0.08em] text-muted uppercase font-mono">Visualization Design</h2>
            </div>
            <h2 className="font-display text-[36px] font-semibold leading-[1] text-ink">
              Making Data Understandable.<br /><span className="text-primary">Data visualization strategy.</span>
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs font-mono">
              <thead>
                <tr className="border-b border-border bg-background">
                  <th className="p-3.5 font-bold text-muted uppercase">VISUAL TYPE</th>
                  <th className="p-3.5 font-bold text-muted uppercase">QUESTION ANSWERED</th>
                  <th className="p-3.5 font-bold text-muted uppercase">VISUAL ENCODING</th>
                  <th className="p-3.5 font-bold text-primary uppercase bg-primary/5">DECISION ENABLED</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border font-sans">
                <tr>
                  <td className="p-3.5 font-bold font-mono text-ink">Time-Series Line Chart</td>
                  <td className="p-3.5 text-muted font-medium">Is performance deteriorating over time?</td>
                  <td className="p-3.5 text-muted font-medium">Continuous stroke with baseline threshold line</td>
                  <td className="p-3.5 font-semibold text-ink bg-primary/5">Evaluate workload scale requirements</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold font-mono text-ink">Priority Severity Badges</td>
                  <td className="p-3.5 text-muted font-medium">Which incident requires immediate focus?</td>
                  <td className="p-3.5 text-muted font-medium">Rose (Critical), Amber (High), Emerald (Normal)</td>
                  <td className="p-3.5 font-semibold text-ink bg-primary/5">Order incident triage sequence</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold font-mono text-ink">Sparkline Bar Trends</td>
                  <td className="p-3.5 text-muted font-medium">What is the recent metric trajectory?</td>
                  <td className="p-3.5 text-muted font-medium">Compact bar heights exposing direction</td>
                  <td className="p-3.5 font-semibold text-ink bg-primary/5">Identify spike anomalies instantly</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 16 — THE DECISION-ORIENTED OVERVIEW (INTERACTIVE PROTOTYPE) */}
      <section className="py-16 lg:py-20 bg-background border-b border-border relative overflow-hidden">
        <div className="container mx-auto px-5 lg:px-12 xl:px-16 space-y-5 relative z-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border pb-4">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[10px] font-bold tracking-widest text-primary uppercase font-mono">16 /</span>
                <h2 className="text-[10px] font-bold tracking-[0.08em] text-muted uppercase font-mono">Interactive Prototype</h2>
              </div>
              <h2 className="font-display text-[36px] font-semibold leading-[1] text-ink">
                The Decision-Oriented Overview.<br /><span className="text-primary">Runtime simulator.</span>
              </h2>
            </div>

            {/* Timeframe Controls */}
            <div className="flex items-center gap-2 font-mono">
              {(['7D', '30D', '90D'] as const).map((range) => (
                <button
                  key={range}
                  onClick={() => setTimeRange(range)}
                  className={`text-[9px] font-bold tracking-widest uppercase px-3 py-1.5 rounded transition-all ${timeRange === range
                    ? 'bg-ink text-white shadow-xs'
                    : 'bg-surface border border-border text-muted hover:text-ink'
                    }`}
                >
                  {range} TIMEFRAME
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Report Dashboard Container */}
          <div className="p-6 bg-surface border border-border rounded-2xl space-y-6 shadow-xs">
            {/* KPI Cards Header */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 bg-background border border-border rounded-xl space-y-1">
                <span className="text-[10px] font-bold text-muted uppercase font-mono block">UPTIME AVAILABILITY SLA</span>
                <span className="font-display text-2xl font-bold text-ink">{currentData.uptime}</span>
                <span className="text-[10px] text-emerald-600 font-bold block font-mono">Within 99.9% Target</span>
              </div>

              <div className="p-4 bg-background border border-border rounded-xl space-y-1">
                <span className="text-[10px] font-bold text-muted uppercase font-mono block">RESOLVED INCIDENTS</span>
                <span className="font-display text-2xl font-bold text-ink">{currentData.incidents}</span>
                <span className="text-[10px] text-muted font-bold block font-mono">Timeframe: Last {timeRange}</span>
              </div>

              <div className="p-4 bg-background border border-border rounded-xl space-y-1">
                <span className="text-[10px] font-bold text-muted uppercase font-mono block">AVG CLUSTER LOAD</span>
                <span className="font-display text-2xl font-bold text-ink">{currentData.avgLoad}</span>
                <div className="flex items-end gap-1 h-6 pt-1">
                  {currentData.bars.map((val, idx) => (
                    <div key={idx} style={{ height: `${val}%` }} className="w-full bg-primary/40 rounded-xs"></div>
                  ))}
                </div>
              </div>
            </div>

            {/* Severity Filter Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border pb-3">
              <span className="text-[10px] font-bold text-ink uppercase font-mono">PRIORITIZED OPERATIONAL ANOMALIES</span>
              <div className="flex items-center gap-1 font-mono text-[9px] font-bold">
                {(['ALL', 'CRITICAL', 'HIGH PRIORITY'] as const).map((p) => (
                  <button
                    key={p}
                    onClick={() => setActivePriority(p)}
                    className={`px-2.5 py-1 rounded transition-all ${activePriority === p ? 'bg-ink text-white' : 'bg-background border border-border text-muted hover:text-ink'}`}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>

            {/* Anomaly List */}
            <div className="space-y-3 font-mono text-xs">
              {filteredAnomalies.map((anom) => (
                <div key={anom.id} className="p-4 bg-background border border-border rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-0.5 rounded text-[9px] font-bold ${anom.severity === 'CRITICAL' ? 'bg-rose-500/10 text-rose-600 border border-rose-500/20' : 'bg-amber-500/10 text-amber-600 border border-amber-500/20'}`}>
                        {anom.severity}
                      </span>
                      <span className="font-bold text-ink uppercase">{anom.system}</span>
                    </div>
                    <span className="text-[11px] text-muted block font-sans">Anomaly: {anom.metric} reached <strong>{anom.value}</strong></span>
                  </div>

                  <button className="px-3 py-2 bg-ink hover:bg-primary text-white text-[10px] font-bold uppercase rounded transition-colors font-mono self-start sm:self-auto">
                    {anom.action}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 17 — DESIGNING METRICS THAT ANSWER QUESTIONS */}
      <section className="py-16 lg:py-20 bg-surface border-b border-border relative overflow-hidden">
        <div className="container mx-auto px-5 lg:px-12 xl:px-16 space-y-5 relative z-10">
          <div className="space-y-2">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[10px] font-bold tracking-widest text-primary uppercase font-mono">17 /</span>
              <h2 className="text-[10px] font-bold tracking-[0.08em] text-muted uppercase font-mono">KPI Design Strategy</h2>
            </div>
            <h2 className="font-display text-[36px] font-semibold leading-[1] text-ink">
              Designing Metrics That Answer Questions.<br /><span className="text-primary">Actionable KPI design.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-background border border-border rounded-xl space-y-3">
              <span className="text-[10px] font-bold text-muted uppercase font-mono block">KPI METRIC 01</span>
              <h3 className="font-display text-sm font-bold text-ink uppercase">UPTIME AVAILABILITY SLA</h3>
              <p className="text-xs text-muted font-medium leading-relaxed">
                <strong>What it measures:</strong> Percentage of active time cluster services meet SLA operational thresholds.
              </p>
              <p className="text-xs text-ink font-semibold">
                <strong>Meaning & Action:</strong> Exposes degradation before SLA breaches occur, guiding workload failover decisions.
              </p>
            </div>

            <div className="p-6 bg-background border border-border rounded-xl space-y-3">
              <span className="text-[10px] font-bold text-muted uppercase font-mono block">KPI METRIC 02</span>
              <h3 className="font-display text-sm font-bold text-ink uppercase">INCIDENT TRIAGE MTTR</h3>
              <p className="text-xs text-muted font-medium leading-relaxed">
                <strong>What it measures:</strong> Mean time to resolve critical telemetry anomaly alerts across data center nodes.
              </p>
              <p className="text-xs text-ink font-semibold">
                <strong>Meaning & Action:</strong> Evaluates operational efficiency, highlighting bottlenecks in remediation flows.
              </p>
            </div>

            <div className="p-6 bg-background border border-border rounded-xl space-y-3">
              <span className="text-[10px] font-bold text-muted uppercase font-mono block">KPI METRIC 03</span>
              <h3 className="font-display text-sm font-bold text-ink uppercase">RESOURCE HEADROOM</h3>
              <p className="text-xs text-muted font-medium leading-relaxed">
                <strong>What it measures:</strong> Available compute, SAN storage, and bandwidth capacity across active clusters.
              </p>
              <p className="text-xs text-ink font-semibold">
                <strong>Meaning & Action:</strong> Guides capacity expansion planning before resource saturation causes outages.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 18 — SYSTEM STATES / EDGE CASES */}
      <section className="py-16 lg:py-20 bg-background border-b border-border relative overflow-hidden">
        <div className="container mx-auto px-5 lg:px-12 xl:px-16 space-y-5 relative z-10">
          <div className="space-y-2">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[10px] font-bold tracking-widest text-primary uppercase font-mono">18 /</span>
              <h2 className="text-[10px] font-bold tracking-[0.08em] text-muted uppercase font-mono">Operational Edge Cases</h2>
            </div>
            <h2 className="font-display text-[36px] font-semibold leading-[1] text-ink">
              Designing for Real Operational Conditions.<br /><span className="text-primary">System states & edge cases.</span>
            </h2>
          </div>

          {/* State Tabs */}
          <div className="flex flex-wrap items-center gap-2 border-b border-border pb-4">
            {[
              { id: 'NORMAL', name: 'NORMAL STATE' },
              { id: 'WARNING', name: 'DEGRADED WARNING' },
              { id: 'CRITICAL', name: 'CRITICAL OUTAGE' },
              { id: 'NO_DATA', name: 'INCOMPLETE / NO DATA' },
              { id: 'HIGH_VOLUME', name: 'HIGH VOLUME SPIKE' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveStateTab(tab.id as any)}
                className={`text-[9px] font-bold tracking-widest uppercase px-3 py-1.5 rounded transition-all font-mono ${activeStateTab === tab.id
                  ? 'bg-ink text-white shadow-xs'
                  : 'bg-surface border border-border text-muted hover:text-ink'
                  }`}
              >
                {tab.name}
              </button>
            ))}
          </div>

          {/* Active State Details */}
          <div className="p-6 bg-surface border border-border rounded-xl space-y-3 text-xs font-mono">
            {activeStateTab === 'NORMAL' && (
              <div>
                <span className="font-bold text-emerald-600 block mb-1">NORMAL OPERATIONAL STATE</span>
                <p className="text-muted font-sans font-medium">All telemetry metrics operate within baseline SLA thresholds. Sparkline charts show steady green indicators.</p>
              </div>
            )}
            {activeStateTab === 'WARNING' && (
              <div>
                <span className="font-bold text-amber-600 block mb-1">DEGRADED WARNING STATE</span>
                <p className="text-muted font-sans font-medium">Amber alerts highlight latency bottlenecks before complete system failure occurs, guiding preventive rebalancing.</p>
              </div>
            )}
            {activeStateTab === 'CRITICAL' && (
              <div>
                <span className="font-bold text-rose-600 block mb-1">CRITICAL INCIDENT STATE</span>
                <p className="text-muted font-sans font-medium">Red visual emphasis directs operator focus immediately to affected upstream nodes with direct remediation triggers.</p>
              </div>
            )}
            {activeStateTab === 'NO_DATA' && (
              <div>
                <span className="font-bold text-ink block mb-1">INCOMPLETE / NO DATA STATE</span>
                <p className="text-muted font-sans font-medium">Clear informative messaging explaining standalone system components without broken visual lines or empty chart crashes.</p>
              </div>
            )}
            {activeStateTab === 'HIGH_VOLUME' && (
              <div>
                <span className="font-bold text-ink block mb-1">HIGH DENSITY DATA SPIKE STATE</span>
                <p className="text-muted font-sans font-medium">Clustered grouping controls prevent visual chaos when managing 1000+ infrastructure nodes during high-traffic events.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* SECTION 19 — CONSTRAINTS & TRADE-OFFS */}
      <section className="py-16 lg:py-20 bg-surface border-b border-border relative overflow-hidden">
        <div className="container mx-auto px-5 lg:px-12 xl:px-16 space-y-5 relative z-10">
          <div className="space-y-2">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[10px] font-bold tracking-widest text-primary uppercase font-mono">19 /</span>
              <h2 className="text-[10px] font-bold tracking-[0.08em] text-muted uppercase font-mono">Technical & UX Constraints</h2>
            </div>
            <h2 className="font-display text-[36px] font-semibold leading-[1] text-ink">
              Constraints & Trade-offs.<br /><span className="text-primary">Deliberate choices.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-background border border-border rounded-xl space-y-3">
              <span className="text-[12px] font-medium text-muted uppercase block">REAL CONSTRAINT</span>
              <h3 className="font-display text-sm font-bold text-ink uppercase">Data Stream Aggregation Latency</h3>
              <p className="text-xs text-muted font-medium leading-relaxed">
                Backend time-series databases updated high-density data points in batch intervals. We could not render sub-second real-time charts across all nodes simultaneously without browser performance drops.
              </p>
            </div>

            <div className="p-6 bg-background border border-border rounded-xl space-y-3">
              <span className="text-[12px] font-medium text-muted uppercase block">DELIBERATE TRADE-OFF</span>
              <h3 className="font-display text-sm font-bold text-ink uppercase">Full Matrix vs Progressive Disclosure</h3>
              <p className="text-xs text-muted font-medium leading-relaxed">
                <strong>We considered:</strong> Displaying all 50+ metric streams on one screen.<br />
                <strong>We chose:</strong> Priority anomaly summary leading to progressive drill-down details.<br />
                <strong>Because:</strong> Exposing every chart simultaneously caused cognitive fatigue during critical incident triage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 20 — VALIDATION */}
      <section className="py-16 lg:py-20 bg-background border-b border-border relative overflow-hidden">
        <div className="container mx-auto px-5 lg:px-12 xl:px-16 space-y-5 relative z-10">
          <div className="space-y-2">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[10px] font-bold tracking-widest text-primary uppercase font-mono">20 /</span>
              <h2 className="text-[10px] font-bold tracking-[0.08em] text-muted uppercase font-mono">Validation</h2>
            </div>
            <h2 className="font-display text-[36px] font-semibold leading-[1] text-ink">
              Validating the Decision Experience.<br /><span className="text-primary">Operator testing.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-surface border border-border rounded-xl space-y-2">
              <span className="text-[12px] font-medium text-muted uppercase block">WHAT WAS TESTED</span>
              <p className="text-xs text-muted font-medium leading-relaxed">
                Interactive dashboard walkthroughs with site reliability engineers focusing on anomaly prioritization, baseline reading, and remediation action speed.
              </p>
            </div>

            <div className="p-6 bg-surface border border-border rounded-xl space-y-2">
              <span className="text-[12px] font-medium text-muted uppercase block">WHAT OPERATORS VALUED</span>
              <p className="text-xs text-muted font-medium leading-relaxed">
                Operators appreciated having anomaly cards placed directly at the top of the interface, noting that it eliminated 80% of dashboard scrolling during incident triage.
              </p>
            </div>
          </div>

          <div className="p-4 bg-surface border border-border rounded-lg text-center">
            <span className="text-[10px] font-mono font-bold text-muted uppercase">
              NOTE: <span className="text-ink">[ADD ACTUAL VALIDATION DETAILS]</span>
            </span>
          </div>
        </div>
      </section>

      {/* SECTION 21 — HOW THE EXPERIENCE EVOLVED */}
      <section className="py-16 lg:py-20 bg-surface border-b border-border relative overflow-hidden">
        <div className="container mx-auto px-5 lg:px-12 xl:px-16 space-y-5 relative z-10">
          <div className="space-y-2">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[10px] font-bold tracking-widest text-primary uppercase font-mono">21 /</span>
              <h2 className="text-[10px] font-bold tracking-[0.08em] text-muted uppercase font-mono">Design Evolution</h2>
            </div>
            <h2 className="font-display text-[36px] font-semibold leading-[1] text-ink">
              How the Experience Evolved.<br /><span className="text-primary">Before & after.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs">
            <div className="p-6 bg-background border border-border rounded-xl space-y-2">
              <span className="text-primary font-bold block">EARLY CONCEPT</span>
              <h3 className="font-display text-sm font-bold text-ink uppercase font-sans">Dense Metric Grid</h3>
              <p className="text-[11px] text-muted font-sans font-medium">
                Unfiltered list of charts requiring manual mental correlation.
              </p>
            </div>

            <div className="p-6 bg-background border border-border rounded-xl space-y-2">
              <span className="text-primary font-bold block">FEEDBACK / LEARNING</span>
              <h3 className="font-display text-sm font-bold text-ink uppercase font-sans">High Cognitive Friction</h3>
              <p className="text-[11px] text-muted font-sans font-medium">
                Operators struggled to spot priority outages among minor warnings.
              </p>
            </div>

            <div className="p-6 bg-ink text-white rounded-xl space-y-2">
              <span className="text-emerald-400 font-bold block">FINAL SOLUTION</span>
              <h3 className="font-display text-sm font-bold uppercase font-sans">Prioritized Decision Support</h3>
              <p className="text-[11px] text-dark-muted font-sans font-medium">
                Severity-ranked anomaly cards paired with direct remediation triggers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 22 — THE SOLUTION (PRODUCT SHOWCASE) */}
      <section className="py-16 lg:py-20 bg-background border-b border-border relative overflow-hidden">
        <div className="container mx-auto px-5 lg:px-12 xl:px-16 space-y-5 relative z-10">
          <div className="space-y-2">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[10px] font-bold tracking-widest text-primary uppercase font-mono">22 /</span>
              <h2 className="text-[10px] font-bold tracking-[0.08em] text-muted uppercase font-mono">Product Showcase</h2>
            </div>
            <h2 className="font-display text-[36px] font-semibold leading-[1] text-ink">
              The Solution.<br /><span className="text-primary">Decision-support data console.</span>
            </h2>
          </div>

          <div className="space-y-8">
            <div className="overflow-hidden rounded-xl border border-border aspect-[21/9] bg-surface relative shadow-sm">
              <img
                src={datacenterMed}
                alt="UnityOne Data & Decision Support Showcase"
                className="w-full h-full object-cover filter contrast-110 grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 text-xs">
              <div className="p-4 bg-surface border border-border rounded-lg space-y-1">
                <span className="text-[10px] font-bold text-muted uppercase font-mono block">01 / PRIORITY</span>
                <p className="text-muted font-medium leading-relaxed">
                  Severity-ranked anomaly callouts placed prominently at top.
                </p>
              </div>

              <div className="p-4 bg-surface border border-border rounded-lg space-y-1">
                <span className="text-[10px] font-bold text-muted uppercase font-mono block">02 / CONTEXT</span>
                <p className="text-muted font-medium leading-relaxed">
                  Historical baseline trendlines comparing current values to normal.
                </p>
              </div>

              <div className="p-4 bg-surface border border-border rounded-lg space-y-1">
                <span className="text-[10px] font-bold text-muted uppercase font-mono block">03 / ANALYSIS</span>
                <p className="text-muted font-medium leading-relaxed">
                  Scope filters by time range, environment, and severity level.
                </p>
              </div>

              <div className="p-4 bg-surface border border-border rounded-lg space-y-1">
                <span className="text-[10px] font-bold text-muted uppercase font-mono block">04 / COMPARISON</span>
                <p className="text-muted font-medium leading-relaxed">
                  Multi-cluster SLA availability cards exposing system capacity.
                </p>
              </div>

              <div className="p-4 bg-surface border border-border rounded-lg space-y-1">
                <span className="text-[10px] font-bold text-muted uppercase font-mono block">05 / ACTION</span>
                <p className="text-muted font-medium leading-relaxed">
                  Direct one-click remediation buttons connected to anomaly cards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 23 — OUTCOME */}
      <section className="py-16 lg:py-20 bg-surface border-b border-border relative overflow-hidden">
        <div className="container mx-auto px-5 lg:px-12 xl:px-16 space-y-5 relative z-10">
          <div className="space-y-2">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[10px] font-bold tracking-widest text-primary uppercase font-mono">23 /</span>
              <h2 className="text-[10px] font-bold tracking-[0.08em] text-muted uppercase font-mono">Project Impact</h2>
            </div>
            <h2 className="font-display text-[36px] font-semibold leading-[1] text-ink">
              Outcome.<br /><span className="text-primary">User, product & business impact.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 bg-background border border-border rounded-xl space-y-3">
              <span className="text-[12px] font-medium text-muted uppercase block">USER OUTCOME</span>
              <h3 className="font-display text-sm font-bold text-ink uppercase">Accelerated Incident Triage</h3>
              <p className="text-xs text-muted font-medium leading-relaxed">
                Operators quickly identify root-cause anomalies and evaluate remediation choices without losing system context.
              </p>
            </div>

            <div className="p-5 bg-background border border-border rounded-xl space-y-3">
              <span className="text-[12px] font-medium text-muted uppercase block">PRODUCT OUTCOME</span>
              <h3 className="font-display text-sm font-bold text-ink uppercase">Decision-Support Framework</h3>
              <p className="text-xs text-muted font-medium leading-relaxed">
                Established a unified analytics UX architecture capable of accommodating future cloud and hybrid infrastructure modules.
              </p>
            </div>

            <div className="p-5 bg-background border border-border rounded-xl space-y-3">
              <span className="text-[12px] font-medium text-muted uppercase block">BUSINESS OUTCOME</span>
              <h3 className="font-display text-sm font-bold text-ink uppercase">Operational Value</h3>
              <p className="text-xs text-muted font-medium leading-relaxed">
                Positioned UnityOne as a premier enterprise IT operations console. <span className="font-mono text-[10px] text-ink font-bold">[ADD ACTUAL PROJECT OUTCOME]</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 24 — MY CONTRIBUTION */}
      <section className="py-16 lg:py-20 bg-background border-b border-border relative overflow-hidden">
        <div className="container mx-auto px-5 lg:px-12 xl:px-16 space-y-5 relative z-10">
          <div className="space-y-2">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[10px] font-bold tracking-widest text-primary uppercase font-mono">24 /</span>
              <h2 className="text-[10px] font-bold tracking-[0.08em] text-muted uppercase font-mono">Individual Responsibilities</h2>
            </div>
            <h2 className="font-display text-[36px] font-semibold leading-[1] text-ink">
              My Contribution.<br /><span className="text-primary">Personal role & ownership.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="p-5 bg-surface border border-border rounded-xl space-y-2">
              <span className="text-[12px] font-medium text-muted uppercase block">PRODUCT THINKING</span>
              <h3 className="font-display text-sm font-bold text-ink uppercase">Problem Framing</h3>
              <p className="text-xs text-muted font-medium leading-relaxed">
                Framed the UX strategy of decision support over static monitoring dashboards.
              </p>
            </div>

            <div className="p-5 bg-surface border border-border rounded-xl space-y-2">
              <span className="text-[12px] font-medium text-muted uppercase block">UX ARCHITECTURE</span>
              <h3 className="font-display text-sm font-bold text-ink uppercase">Data Hierarchy</h3>
              <p className="text-xs text-muted font-medium leading-relaxed">
                Structured progressive disclosure from executive summary to node-level logs.
              </p>
            </div>

            <div className="p-5 bg-surface border border-border rounded-xl space-y-2">
              <span className="text-[12px] font-medium text-muted uppercase block">DATA UX DESIGN</span>
              <h3 className="font-display text-sm font-bold text-ink uppercase">Visualization Strategy</h3>
              <p className="text-xs text-muted font-medium leading-relaxed">
                Designed KPI cards, sparkline trend indicators, and severity anomaly badging.
              </p>
            </div>

            <div className="p-5 bg-surface border border-border rounded-xl space-y-2">
              <span className="text-[12px] font-medium text-muted uppercase block">DESIGN & PROTOTYPING</span>
              <h3 className="font-display text-sm font-bold text-ink uppercase">Interface Design</h3>
              <p className="text-xs text-muted font-medium leading-relaxed">
                Built interactive time-series filter simulators and high-fidelity screen designs.
              </p>
            </div>

            <div className="p-5 bg-surface border border-border rounded-xl space-y-2">
              <span className="text-[12px] font-medium text-muted uppercase block">COLLABORATION</span>
              <h3 className="font-display text-sm font-bold text-ink uppercase">Team Alignment</h3>
              <p className="text-xs text-muted font-medium leading-relaxed">
                Partnered with product managers, data engineers, and SRE domain experts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 25 — WORKING ACROSS DISCIPLINES (COLLABORATION) */}
      <section className="py-16 lg:py-20 bg-surface border-b border-border relative overflow-hidden">
        <div className="container mx-auto px-5 lg:px-12 xl:px-16 space-y-5 relative z-10">
          <div className="space-y-2">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[10px] font-bold tracking-widest text-primary uppercase font-mono">25 /</span>
              <h2 className="text-[10px] font-bold tracking-[0.08em] text-muted uppercase font-mono">Team Alignment</h2>
            </div>
            <h2 className="font-display text-[36px] font-semibold leading-[1] text-ink">
              Working Across Disciplines.<br /><span className="text-primary">Cross-functional collaboration.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-background border border-border rounded-xl space-y-2">
              <span className="text-[12px] font-medium text-muted uppercase block">WITH PRODUCT MANAGEMENT</span>
              <p className="text-xs text-muted font-medium leading-relaxed">
                Aligned reporting priority requirements with enterprise customer SLA tracking goals.
              </p>
            </div>

            <div className="p-6 bg-background border border-border rounded-xl space-y-2">
              <span className="text-[12px] font-medium text-muted uppercase block">WITH DATA & ENGINEERING</span>
              <p className="text-xs text-muted font-medium leading-relaxed">
                Designed UI components compatible with backend time-series aggregation throughput limits.
              </p>
            </div>

            <div className="p-6 bg-background border border-border rounded-xl space-y-2">
              <span className="text-[12px] font-medium text-muted uppercase block">WITH DOMAIN EXPERTS</span>
              <p className="text-xs text-muted font-medium leading-relaxed">
                Validated operational terminology, baseline ranges, and severity color standards with active SREs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 26 — REFLECTION & LEARNINGS */}
      <section className="py-16 lg:py-20 bg-background border-b border-border relative overflow-hidden">
        <div className="container mx-auto px-5 lg:px-12 xl:px-16 space-y-5 relative z-10">
          <div className="space-y-2">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[10px] font-bold tracking-widest text-primary uppercase font-mono">26 /</span>
              <h2 className="text-[10px] font-bold tracking-[0.08em] text-muted uppercase font-mono">Reflection</h2>
            </div>
            <h2 className="font-display text-[36px] font-semibold leading-[1] text-ink">
              What I Learned.<br /><span className="text-primary">Data UX principles.</span>
            </h2>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-muted font-medium leading-relaxed max-w-3xl">
            <p>
              Good data UX is not about displaying more information. It is about helping users understand what changed, why it matters, and what decision they need to make.
            </p>
            <p className="font-bold text-ink">
              Key takeaway: Dashboards become powerful decision tools when telemetry signals lead directly to prioritized remediation actions.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 27 — CONCLUSION & FINAL TAKEAWAY */}
      <section className="py-16 lg:py-20 bg-surface border-b border-border text-center relative overflow-hidden">
        <div className="container mx-auto px-5 lg:px-12 xl:px-16 space-y-6 relative z-10">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-[10px] font-bold tracking-widest text-primary uppercase font-mono">27 /</span>
            <h2 className="text-[10px] font-bold tracking-[0.08em] text-muted uppercase">Conclusion</h2>
          </div>
          <h2 className="font-display text-[36px] font-semibold leading-[1] text-ink">
            From Operational Data.<br /><span className="text-primary">To Decisions.</span>
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-mono font-bold text-ink">
            <span className="p-2 bg-background border border-border rounded">OPERATIONAL DATA</span>
            <span>➔</span>
            <span className="p-2 bg-background border border-border rounded">SIGNALS</span>
            <span>➔</span>
            <span className="p-2 bg-background border border-border rounded">CONTEXT</span>
            <span>➔</span>
            <span className="p-2 bg-background border border-border rounded">PRIORITIZATION</span>
            <span>➔</span>
            <span className="p-2 bg-ink text-white rounded">DECISION & ACTION</span>
          </div>

          <p className="text-sm font-semibold text-ink max-w-xl mx-auto pt-2">
            The goal was not to create another dashboard. It was to design a decision-support experience that turns complex operational information into something users can understand, prioritize and act upon.
          </p>
        </div>
      </section>

      {/* SECTION 28 — CASE STUDY NAVIGATION */}
      <section className="py-16 lg:py-20 bg-background border-t border-border">
        <div className="container mx-auto px-5 lg:px-12 xl:px-16 space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] font-bold tracking-widest text-primary uppercase">28 /</span>
                <h2 className="text-[10px] font-bold tracking-[0.08em] text-muted uppercase font-mono">Case Study Navigation</h2>
              </div>
              <h2 className="font-display text-[36px] font-semibold leading-[1] text-ink">
                Explore Other Case Studies.<br /><span className="text-primary">UnityOne Product Suite.</span>
              </h2>
            </div>

            <Link
              to="/work/unityone"
              className="inline-flex items-center text-[11px] font-bold tracking-widest uppercase text-muted hover:text-primary transition-colors group font-mono"
            >
              <FiArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              BACK TO OVERVIEW
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Previous Case Study 02 — AI Assistance */}
            <div className="p-8 bg-surface border border-border rounded-2xl flex flex-col justify-between space-y-6 group hover:border-ink/40 transition-all duration-300 shadow-xs">
              <div className="space-y-4">
                <div className="overflow-hidden rounded-xl border border-border aspect-[16/9] bg-background relative">
                  <img
                    src={laptopDcMed}
                    alt="Turning Operational Data into Useful Assistance"
                    className="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-surface/90 backdrop-blur-xs border border-border px-2.5 py-1 rounded text-[9px] font-bold font-mono text-primary uppercase">
                    02 / AI ASSISTANCE
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="font-display text-xl font-bold text-ink">
                    Turning operational data into useful assistance.
                  </h3>
                  <p className="text-xs text-muted font-medium leading-relaxed">
                    Instead of forcing users to search through dashboards, alerts and operational data, the AI experience brings context and recommendations closer to the decision.
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {['AI UX', 'Conversational UX', 'Decision Support'].map((tag) => (
                    <span key={tag} className="text-[9px] font-bold tracking-widest px-2.5 py-0.5 border border-border rounded uppercase text-muted font-mono bg-background">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <Link
                  to="/work/unityone/ai-assistant"
                  state={{ from: '/work/unityone/reporting-data', fromLabel: 'REPORTING' }}
                  className="inline-flex items-center text-[11px] font-bold tracking-widest uppercase text-primary transition-colors relative group/link"
                >
                  READ CASE STUDY
                  <FiArrowUpRight className="ml-1.5 w-4 h-4 text-primary group-hover/link:-translate-y-1 group-hover/link:translate-x-1 transition-transform" />
                  <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-primary transition-colors"></span>
                </Link>
              </div>
            </div>

            {/* Case Study 01 — Complex IT Operations */}
            <div className="p-8 bg-surface border border-border rounded-2xl flex flex-col justify-between space-y-6 group hover:border-ink/40 transition-all duration-300 shadow-xs">
              <div className="space-y-4">
                <div className="overflow-hidden rounded-xl border border-border aspect-[16/9] bg-background relative">
                  <img
                    src={datacenterMed}
                    alt="Complex IT Operations Case Study"
                    className="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-surface/90 backdrop-blur-xs border border-border px-2.5 py-1 rounded text-[9px] font-bold font-mono text-primary uppercase">
                    01 / COMPLEX IT OPERATIONS
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="font-display text-xl font-bold text-ink">
                    Making complex infrastructure easier to understand.
                  </h3>
                  <p className="text-xs text-muted font-medium leading-relaxed">
                    Designing an operational UX that helps infrastructure teams understand complex system relationships and dependencies without losing context.
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {['Complex UX', 'System Architecture', 'Interaction Design'].map((tag) => (
                    <span key={tag} className="text-[9px] font-bold tracking-widest px-2.5 py-0.5 border border-border rounded uppercase text-muted font-mono bg-background">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <Link
                  to="/work/unityone/complex-it-operations"
                  state={{ from: '/work/unityone/reporting-data', fromLabel: 'REPORTING' }}
                  className="inline-flex items-center text-[11px] font-bold tracking-widest uppercase text-primary transition-colors relative group/link"
                >
                  READ CASE STUDY
                  <FiArrowUpRight className="ml-1.5 w-4 h-4 text-primary group-hover/link:-translate-y-1 group-hover/link:translate-x-1 transition-transform" />
                  <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-primary transition-colors"></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
