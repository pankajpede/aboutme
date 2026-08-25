import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  FiArrowLeft,
  FiArrowUpRight,
  FiCpu,
  FiMessageSquare,
  FiCheck,
  FiUsers,
  FiActivity,
  FiServer,
  FiZap,
  FiSliders,
  FiHelpCircle,
  FiShield,
  FiDatabase,
  FiLayers
} from '../components/ui/Icons';
import { ScrollToTopWidget } from '../components/ui/ScrollToTopWidget';

// Local Case Study Editorial Image Imports
import laptopDcLg from '../assets/images/case-study/laptop-in-dc-large.jpg';
import datacenterMed from '../assets/images/case-study/datacenter-medium.jpg';
import dataMiningMed from '../assets/images/case-study/data-mining-medium.jpg';
import dcRoomMed from '../assets/images/case-study/dc-room-medium.jpg';

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
        <pattern id="tech-dots-ai" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.5" fill="#0A66C2" fillOpacity="0.22" />
        </pattern>
      </defs>
      <rect width="240" height="240" fill="url(#tech-dots-ai)" />
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

type EnvOption = 'PRODUCTION' | 'STAGING' | 'HYBRID CLOUD';
type NodeOption = 'COMPUTE ARRAY 04' | 'STORAGE POOL 02' | 'API GATEWAY CLUSTER';
type IssueOption = 'LATENCY SPIKE' | 'IOPS BOTTLENECK' | 'PACKET LOSS';

export default function UnityOneAIAssistantCaseStudy() {
  const location = useLocation();

  // Handle Breadcrumb Referrer State
  const fromState = location.state as { from?: string; fromLabel?: string } | null;
  const origin = fromState?.from === '/' ? { label: 'OVERVIEW', path: '/' } : { label: 'UNITYONE', path: '/work/unityone' };

  // Interactive AI Parameter State
  const [selectedEnv, setSelectedEnv] = useState<EnvOption>('PRODUCTION');
  const [selectedNode, setSelectedNode] = useState<NodeOption>('COMPUTE ARRAY 04');
  const [selectedIssue, setSelectedIssue] = useState<IssueOption>('LATENCY SPIKE');

  // Interactive Design Exploration Tab
  const [activeExploration, setActiveExploration] = useState<'EXP1' | 'EXP2' | 'EXP3' | 'FINAL'>('FINAL');

  // Interactive Output State Tab
  const [activeStateTab, setActiveStateTab] = useState<'INITIAL' | 'ANALYZING' | 'RECOMMENDATION' | 'NEEDS_CONTEXT' | 'REFINEMENT' | 'UNCERTAINTY'>('RECOMMENDATION');

  // Dynamic AI Simulation Responses
  const getSimulatedResponse = () => {
    if (selectedNode === 'COMPUTE ARRAY 04' && selectedIssue === 'LATENCY SPIKE') {
      return {
        context: `${selectedEnv} / Compute Cluster 04 (12 Active Hypervisors)`,
        signals: 'API Gateway response times elevated by 240ms. Upstream storage IOPS throughput nominal.',
        recommendation: 'Re-route incoming workload traffic to Compute Cluster 02 and inspect VM thread pool allocation on Node-04B.',
        reasoning: 'Memory contention on Node-04B is driving thread queuing while neighboring compute pools have 45% idle headroom.',
        nextAction: 'EXECUTE WORKLOAD REBALANCING'
      };
    } else if (selectedNode === 'STORAGE POOL 02' && selectedIssue === 'IOPS BOTTLENECK') {
      return {
        context: `${selectedEnv} / SAN Storage Pool 02 (NVMe Array Cluster)`,
        signals: 'Disk queue length exceeding 18 operations. Compute workloads experiencing I/O wait states.',
        recommendation: 'Throttle non-critical background backup sync and expand active NVMe cache allocation.',
        reasoning: 'Scheduled maintenance job overlapped with peak transaction processing, saturating primary controller channel B.',
        nextAction: 'PAUSE SYNC & EXPAND CACHE'
      };
    } else {
      return {
        context: `${selectedEnv} / ${selectedNode}`,
        signals: `Intermittent packet drop detected on redundant mesh interface eth-02 during peak routing.`,
        recommendation: 'Failover traffic to redundant secondary interface eth-03 and run diagnostic link test.',
        reasoning: 'Physical interface eth-02 experiencing CRC frame errors due to transient optic transceiver thermal degradation.',
        nextAction: 'TRIGGER LINK FAILOVER'
      };
    }
  };

  const simResult = getSimulatedResponse();

  return (
    <div id="ai-assistant-study" className="bg-background text-ink relative min-h-screen">
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
                AI ASSISTANCE
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
                02 / UNITYONE · AI ASSISTANCE
              </span>
            </div>

            <h1 className="font-display text-[36px] font-semibold leading-[1] text-ink">
              Turning operational data<br /><span className="text-primary">into useful assistance.</span>
            </h1>

            <p className="text-[14px] text-muted font-medium max-w-2xl mx-auto leading-relaxed">
              Designing an AI-assisted operational experience that turns complex infrastructure and operational data into contextual recommendations users can understand, evaluate and act on.
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
              <span className="text-[14px] font-semibold text-ink font-display">AI UX & Strategy</span>
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
              <span className="text-[14px] font-semibold text-ink font-display">AI Assistance UX</span>
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
              <h3 className="font-display text-sm font-bold text-ink uppercase group-hover/card:text-primary transition-colors">Information Overload</h3>
              <p className="text-xs text-muted font-medium leading-relaxed">
                How can dense operational data become useful assistance instead of simply adding more information to overloaded operator screens?
              </p>
            </div>

            <div className="p-4 bg-background border border-border rounded-lg space-y-3 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md group/card">
              <span className="text-[12px] font-medium text-muted uppercase block">MY ROLE</span>
              <h3 className="font-display text-sm font-bold text-ink uppercase group-hover/card:text-primary transition-colors">End-to-End AI UX Strategy</h3>
              <p className="text-xs text-muted font-medium leading-relaxed">
                Led AI interaction design, contextual parameter modeling, recommendation UI architecture, prototyping, and user control systems.
              </p>
            </div>

            <div className="p-4 bg-background border border-border rounded-lg space-y-3 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md group/card">
              <span className="text-[12px] font-medium text-muted uppercase block">THE APPROACH</span>
              <h3 className="font-display text-sm font-bold text-ink uppercase group-hover/card:text-primary transition-colors">Contextual Assistance</h3>
              <p className="text-xs text-muted font-medium leading-relaxed">
                Embedded assistance directly into the operational workflow: Data → Context → AI Understanding → Recommendation → Decision → Action.
              </p>
            </div>

            <div className="p-4 bg-background border border-border rounded-lg space-y-3 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md group/card">
              <span className="text-[12px] font-medium text-muted uppercase block">THE OUTCOME</span>
              <h3 className="font-display text-sm font-bold text-ink uppercase group-hover/card:text-primary transition-colors">Decision Clarity</h3>
              <p className="text-xs text-muted font-medium leading-relaxed">
                Transformed raw telemetry into actionable guidance while maintaining full human control. <span className="font-mono text-[10px] text-ink font-bold">[ADD ACTUAL PROJECT OUTCOME]</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 02 — FROM UNDERSTANDING TO ASSISTANCE */}
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
              <h2 className="text-[10px] font-bold tracking-[0.08em] text-muted uppercase">Product System Architecture</h2>
            </div>
            <h2 className="font-display text-[36px] font-semibold leading-[1] text-ink">
              From Understanding.<br /><span className="text-primary">To Assistance.</span>
            </h2>
            <p className="text-sm text-muted font-medium leading-relaxed max-w-2xl">
              UnityOne is built as a coherent product suite. While Chapter 01 focused on visualizing complex infrastructure, Chapter 02 builds directly on that context to provide intelligent assistance.
            </p>
          </div>

          {/* System Continuity Visual Comparison Block */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 sm:p-8 bg-surface border border-border rounded-2xl shadow-xs">
            {/* Layer 1: Complex IT Operations */}
            <div className="p-5 bg-background border border-border rounded-xl space-y-4">
              <div className="flex items-center justify-between border-b border-border pb-3">
                <span className="text-[10px] font-bold tracking-widest text-muted uppercase font-mono">CHAPTER 01</span>
                <span className="text-xs font-bold text-ink uppercase">COMPLEX IT OPERATIONS</span>
              </div>
              <p className="text-xs text-muted font-medium leading-relaxed">
                Establishes the structural foundation: helping operators map hardware, networks, and dependencies.
              </p>
              <div className="space-y-2 font-mono text-[10px] font-bold text-ink">
                <div className="p-2.5 bg-surface border border-border rounded flex items-center justify-between">
                  <span>01 / STRUCTURE</span>
                  <span className="text-muted">Understand hierarchy</span>
                </div>
                <div className="p-2.5 bg-surface border border-border rounded flex items-center justify-between">
                  <span>02 / RELATIONSHIPS</span>
                  <span className="text-muted">Trace dependencies</span>
                </div>
                <div className="p-2.5 bg-surface border border-border rounded flex items-center justify-between">
                  <span>03 / CONTEXT</span>
                  <span className="text-muted">Expose system metrics</span>
                </div>
              </div>
            </div>

            {/* Layer 2: AI Assistance */}
            <div className="p-5 bg-ink text-white rounded-xl space-y-4 shadow-md">
              <div className="flex items-center justify-between border-b border-white/15 pb-3">
                <span className="text-[10px] font-bold tracking-widest text-primary uppercase font-mono">CHAPTER 02</span>
                <span className="text-xs font-bold text-white uppercase">AI ASSISTANCE</span>
              </div>
              <p className="text-xs text-dark-muted font-medium leading-relaxed">
                Leverages established operational context to synthesize telemetry into actionable guidance.
              </p>
              <div className="space-y-2 font-mono text-[10px] font-bold">
                <div className="p-2.5 bg-white/10 border border-white/10 rounded flex items-center justify-between">
                  <span className="text-primary">01 / USE CONTEXT</span>
                  <span className="text-white/70">Read telemetry signals</span>
                </div>
                <div className="p-2.5 bg-white/10 border border-white/10 rounded flex items-center justify-between">
                  <span className="text-primary">02 / INTERPRET DATA</span>
                  <span className="text-white/70">Synthesize anomalies</span>
                </div>
                <div className="p-2.5 bg-white/10 border border-white/10 rounded flex items-center justify-between">
                  <span className="text-primary">03 / RECOMMEND</span>
                  <span className="text-white/70">Support decision & action</span>
                </div>
              </div>
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
              <span className="text-[10px] font-bold tracking-widest text-primary uppercase">03 /</span>
              <h2 className="text-[10px] font-bold tracking-[0.08em] text-muted uppercase font-mono">Domain Context</h2>
            </div>
            <h2 className="font-display text-[36px] font-semibold leading-[1] text-ink">
              The Nature of Operational Data.<br /><span className="text-primary">Data sources & signals.</span>
            </h2>
          </div>

          <div className="space-y-4 text-sm text-muted font-medium leading-relaxed max-w-3xl">
            <p>
              In enterprise IT operations consoles, the core challenge is not a lack of data. Modern data centers continuously stream gigabytes of telemetry across compute nodes, network switches, SAN storage arrays, and cloud hypervisors.
            </p>
            <p>
              The real problem is that raw data is uninterpreted. Showing an operator a 98% CPU load metric or an elevated disk queue length does not automatically tell them what is happening or what action to consider next.
            </p>
          </div>

          {/* Editorial Pipeline Flow Diagram */}
          <div className="p-6 bg-background border border-border rounded-xl space-y-4 shadow-xs">
            <span className="text-[9px] font-bold tracking-widest text-ink uppercase block text-center sm:text-left font-mono">
              OPERATIONAL ASSISTANCE DATA PIPELINE
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 text-[10px] sm:text-[11px] font-bold text-center">
              <div className="p-3.5 bg-surface border border-border rounded text-ink space-y-1 hover:border-primary transition-all">
                <span className="text-[9px] text-muted block uppercase">STEP 01</span>
                <span>DATA SOURCES</span>
              </div>
              <div className="p-3.5 bg-surface border border-border rounded text-ink space-y-1 hover:border-primary transition-all">
                <span className="text-[9px] text-muted block uppercase">STEP 02</span>
                <span>OPERATIONAL SIGNALS</span>
              </div>
              <div className="p-3.5 bg-surface border border-border rounded text-ink space-y-1 hover:border-primary transition-all">
                <span className="text-[9px] text-muted block uppercase">STEP 03</span>
                <span>SYSTEM CONTEXT</span>
              </div>
              <div className="p-3.5 bg-surface border border-border rounded text-ink space-y-1 hover:border-primary transition-all">
                <span className="text-[9px] text-muted block uppercase">STEP 04</span>
                <span>AI INTERPRETATION</span>
              </div>
              <div className="p-3.5 bg-ink text-white rounded space-y-1 hover:bg-primary transition-all">
                <span className="text-[9px] text-white/70 block uppercase">STEP 05</span>
                <span>USEFUL ASSISTANCE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 04 — WHO ARE WE ASSISTING? */}
      <section className="py-16 lg:py-20 bg-background border-b border-border relative overflow-hidden">
        <div className="container mx-auto px-5 lg:px-12 xl:px-16 space-y-5 relative z-10">
          <div className="space-y-2">
            <div className="flex items-center gap-2 mb-3">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-[10px] font-bold tracking-widest text-primary uppercase">04 /</span>
              <h2 className="text-[10px] font-bold tracking-[0.08em] text-muted uppercase font-mono">User Focus</h2>
            </div>
            <h2 className="font-display text-[36px] font-semibold leading-[1] text-ink">
              Who Are We Assisting?<br /><span className="text-primary">Operator needs & goals.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 bg-surface border border-border rounded-xl space-y-3 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md group/usr">
              <div className="flex items-center gap-2 text-primary font-mono text-[10px] font-bold">
                <FiServer className="w-4 h-4" />
                <span>WHAT THEY KNOW</span>
              </div>
              <h3 className="font-display text-sm font-bold text-ink uppercase group-hover/usr:text-primary transition-colors">Operational Context</h3>
              <p className="text-xs text-muted font-medium leading-relaxed">
                Deep familiarity with enterprise system architecture, data center hardware specs, and organizational uptime requirements.
              </p>
            </div>

            <div className="p-5 bg-surface border border-border rounded-xl space-y-3 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md group/usr">
              <div className="flex items-center gap-2 text-primary font-mono text-[10px] font-bold">
                <FiZap className="w-4 h-4" />
                <span>WHAT THEY NEED</span>
              </div>
              <h3 className="font-display text-sm font-bold text-ink uppercase group-hover/usr:text-primary transition-colors">Fast Synthesis</h3>
              <p className="text-xs text-muted font-medium leading-relaxed">
                Clear, correlated interpretation of scattered alerts during active incidents to minimize time-to-resolution.
              </p>
            </div>

            <div className="p-5 bg-surface border border-border rounded-xl space-y-3 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md group/usr">
              <div className="flex items-center gap-2 text-primary font-mono text-[10px] font-bold">
                <FiActivity className="w-4 h-4" />
                <span>WHAT THEY ARE DOING</span>
              </div>
              <h3 className="font-display text-sm font-bold text-ink uppercase group-hover/usr:text-primary transition-colors">Triage & Decision</h3>
              <p className="text-xs text-muted font-medium leading-relaxed">
                Evaluating root causes, weighing operational trade-offs, and triggering remediation actions under high-stress conditions.
              </p>
            </div>

            <div className="p-5 bg-surface border border-border rounded-xl space-y-3 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md group/usr">
              <div className="flex items-center gap-2 text-primary font-mono text-[10px] font-bold">
                <FiCpu className="w-4 h-4" />
                <span>WHERE AI HELPS</span>
              </div>
              <h3 className="font-display text-sm font-bold text-ink uppercase group-hover/usr:text-primary transition-colors">Contextual Guidance</h3>
              <p className="text-xs text-muted font-medium leading-relaxed">
                Reducing manual cross-referencing, highlighting key anomaly patterns, and recommending actionable remediation options.
              </p>
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
              <span className="text-[10px] font-bold tracking-widest text-primary uppercase">05 /</span>
              <h2 className="text-[10px] font-bold tracking-[0.08em] text-muted uppercase font-mono">Problem Framing</h2>
            </div>
            <h2 className="font-display text-[36px] font-semibold leading-[1] text-ink">
              When Data Is Available.<br /><span className="text-primary">But answers are not.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 bg-background border border-border rounded-xl space-y-3 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md group/prob">
              <span className="text-[12px] font-medium text-muted uppercase block">01 — RAW INFORMATION OVERLOAD</span>
              <h3 className="font-display text-base font-bold text-ink uppercase group-hover/prob:text-primary transition-colors">Data Access ≠ Understanding</h3>
              <p className="text-xs text-muted font-medium leading-relaxed">
                Users can access dozens of raw metric streams, but still must manually connect data points to understand what is actually breaking.
              </p>
            </div>

            <div className="p-5 bg-background border border-border rounded-xl space-y-3 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md group/prob">
              <span className="text-[12px] font-medium text-muted uppercase block">02 — SCATTERED OPERATIONAL CONTEXT</span>
              <h3 className="font-display text-base font-bold text-ink uppercase group-hover/prob:text-primary transition-colors">Isolated Signal Silos</h3>
              <p className="text-xs text-muted font-medium leading-relaxed">
                Relevant telemetry is distributed across separate screens, forcing operators to jump between dashboards during critical outages.
              </p>
            </div>

            <div className="p-5 bg-background border border-border rounded-xl space-y-3 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md group/prob">
              <span className="text-[12px] font-medium text-muted uppercase block">03 — SYNTHESIS EFFORT</span>
              <h3 className="font-display text-base font-bold text-ink uppercase group-hover/prob:text-primary transition-colors">Manual Pattern Matching</h3>
              <p className="text-xs text-muted font-medium leading-relaxed">
                Connecting a network latency spike with a storage queue bottleneck requires significant cognitive effort under pressure.
              </p>
            </div>

            <div className="p-5 bg-background border border-border rounded-xl space-y-3 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md group/prob">
              <span className="text-[12px] font-medium text-muted uppercase block">04 — INFORMATION VS GUIDANCE</span>
              <h3 className="font-display text-base font-bold text-ink uppercase group-hover/prob:text-primary transition-colors">Status Badges Don't Recommend</h3>
              <p className="text-xs text-muted font-medium leading-relaxed">
                Showing a red alert indicator informs users that something failed, but does not provide direct guidance on what to consider next.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 06 — THE GAP BETWEEN DATA AND ACTION */}
      <section className="py-16 lg:py-20 bg-background border-b border-border relative overflow-hidden">
        <div className="container mx-auto px-5 lg:px-12 xl:px-16 space-y-5 relative z-10">
          <div className="space-y-2">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[10px] font-bold tracking-widest text-primary uppercase font-mono">06 /</span>
              <h2 className="text-[10px] font-bold tracking-[0.08em] text-muted uppercase font-mono">Existing Experience Audit</h2>
            </div>
            <h2 className="font-display text-[36px] font-semibold leading-[1] text-ink">
              The Gap Between Data.<br /><span className="text-primary">And Action.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Visual Editorial Image Container */}
            <div className="lg:col-span-7 overflow-hidden rounded-xl border border-border aspect-[16/10] bg-surface relative shadow-sm">
              <img
                src={laptopDcLg}
                alt="Operational Data Screen Annotations"
                className="w-full h-full object-cover filter grayscale contrast-125 opacity-70"
              />
              <div className="absolute inset-0 bg-ink/40 flex items-center justify-center p-6">
                <div className="p-5 bg-surface border border-border rounded-xl max-w-md space-y-2 text-left shadow-2xl">
                  <span className="text-[10px] font-bold tracking-widest text-primary uppercase block font-mono">OPERATIONAL UI AUDIT</span>
                  <p className="text-xs sm:text-sm font-semibold text-ink leading-relaxed">
                    Raw telemetry views required manual interpretation before any operational action could be determined.
                  </p>
                </div>
              </div>
            </div>

            {/* Breakdown Annotations */}
            <div className="lg:col-span-5 space-y-4">
              <div className="p-5 bg-surface border border-border rounded-xl space-y-1.5 shadow-xs">
                <span className="text-[12px] font-medium text-muted uppercase block">01 — AVAILABLE DATA</span>
                <p className="text-xs text-ink font-medium leading-relaxed">
                  Real-time data streams present metrics without highlighting critical anomalies.
                </p>
              </div>

              <div className="p-5 bg-surface border border-border rounded-xl space-y-1.5 shadow-xs">
                <span className="text-[12px] font-medium text-muted uppercase block">02 — REQUIRED CONTEXT</span>
                <p className="text-xs text-ink font-medium leading-relaxed">
                  Operators must manually pull up related cluster health logs to understand scope.
                </p>
              </div>

              <div className="p-5 bg-surface border border-border rounded-xl space-y-1.5 shadow-xs">
                <span className="text-[12px] font-medium text-muted uppercase block">03 — MANUAL INTERPRETATION</span>
                <p className="text-xs text-ink font-medium leading-relaxed">
                  The user must mentally synthesize hardware trends to form a hypothesis.
                </p>
              </div>

              <div className="p-5 bg-surface border border-border rounded-xl space-y-1.5 shadow-xs">
                <span className="text-[12px] font-medium text-muted uppercase block">04 — FINAL ACTION</span>
                <p className="text-xs text-ink font-medium leading-relaxed">
                  Navigating away from the dashboard to execute remediation commands in external CLIs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 07 — WHAT I NEEDED TO UNDERSTAND */}
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
              <div className="text-[12px] font-medium text-muted uppercase block">WORKFLOW ANALYSIS</div>
              <h3 className="font-display text-sm font-bold text-ink uppercase">Operator Triage Patterns</h3>
              <p className="text-xs text-muted font-medium leading-relaxed">
                <strong>What I looked at:</strong> Incident triage procedures and decision points followed by site reliability engineers during system outages.
              </p>
              <p className="text-xs text-ink font-semibold">
                <strong>What it helped reveal:</strong> Operators immediately seek cause-and-effect explanations before deciding on remediation.
              </p>
            </div>

            <div className="p-6 bg-background border border-border rounded-xl space-y-3">
              <div className="text-[12px] font-medium text-muted uppercase block">PRODUCT AUDIT</div>
              <h3 className="font-display text-sm font-bold text-ink uppercase">Telemetry Schema Analysis</h3>
              <p className="text-xs text-muted font-medium leading-relaxed">
                <strong>What I looked at:</strong> Available telemetry parameters, metric refresh rates, and data center cluster boundaries.
              </p>
              <p className="text-xs text-ink font-semibold">
                <strong>What it helped reveal:</strong> Assistance must be explicitly contextualized by environment, node pool, and timeframe.
              </p>
            </div>

            <div className="p-6 bg-background border border-border rounded-xl space-y-3">
              <div className="text-[12px] font-medium text-muted uppercase block">DOMAIN EXPLORATION</div>
              <h3 className="font-display text-sm font-bold text-ink uppercase">Enterprise Trust Models</h3>
              <p className="text-xs text-muted font-medium leading-relaxed">
                <strong>What I looked at:</strong> SRE comfort levels with automated recommendations versus manual execution controls.
              </p>
              <p className="text-xs text-ink font-semibold">
                <strong>What it helped reveal:</strong> Human-in-the-loop validation is non-negotiable for enterprise infrastructure.
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

      {/* SECTION 08 — WHAT I LEARNED */}
      <section className="py-16 lg:py-20 bg-background border-b border-border relative overflow-hidden">
        <div className="container mx-auto px-5 lg:px-12 xl:px-16 space-y-5 relative z-10">
          <div className="space-y-2">
            <div className="flex items-center gap-2 mb-3">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-[10px] font-bold tracking-widest text-primary uppercase">08 /</span>
              <h2 className="text-[10px] font-bold tracking-[0.08em] text-muted uppercase font-mono">Synthesis</h2>
            </div>
            <h2 className="font-display text-[36px] font-semibold leading-[1] text-ink">
              What I learned.<br /><span className="text-primary">Core AI UX insights.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-4 bg-surface border border-border rounded-lg space-y-3 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md group/ins">
              <span className="text-lg font-bold font-mono text-ink group-hover/ins:text-primary transition-colors">01</span>
              <h3 className="font-display text-sm font-bold text-ink uppercase group-hover/ins:text-primary transition-colors">AI Needs Context</h3>
              <p className="text-xs text-muted font-medium leading-relaxed">
                A recommendation is only useful when it understands the exact operational situation surrounding the target system.
              </p>
            </div>

            <div className="p-4 bg-surface border border-border rounded-lg space-y-3 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md group/ins">
              <span className="text-lg font-bold font-mono text-ink group-hover/ins:text-primary transition-colors">02</span>
              <h3 className="font-display text-sm font-bold text-ink uppercase group-hover/ins:text-primary transition-colors">Explain, Don't Just Suggest</h3>
              <p className="text-xs text-muted font-medium leading-relaxed">
                AI output must help users understand why a specific remediation was suggested by exposing underlying signals.
              </p>
            </div>

            <div className="p-4 bg-surface border border-border rounded-lg space-y-3 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md group/ins">
              <span className="text-lg font-bold font-mono text-ink group-hover/ins:text-primary transition-colors">03</span>
              <h3 className="font-display text-sm font-bold text-ink uppercase group-hover/ins:text-primary transition-colors">User-Controlled Assistance</h3>
              <p className="text-xs text-muted font-medium leading-relaxed">
                The AI should support human decision-making rather than silently executing consequential infrastructure changes.
              </p>
            </div>

            <div className="p-4 bg-surface border border-border rounded-lg space-y-3 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md group/ins">
              <span className="text-lg font-bold font-mono text-ink group-hover/ins:text-primary transition-colors">04</span>
              <h3 className="font-display text-sm font-bold text-ink uppercase group-hover/ins:text-primary transition-colors">Lead Toward Action</h3>
              <p className="text-xs text-muted font-medium leading-relaxed">
                The value of AI is not simply generating text; it is providing a direct path to a meaningful next operational step.
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
              "How might we transform operational data into contextual assistance that helps users understand what is happening, why it matters and what they can consider doing next?"
            </blockquote>
          </div>
        </div>
      </section>

      {/* SECTION 10 — WHAT SHOULD THE AI ACTUALLY DO? */}
      <section className="py-16 lg:py-20 bg-background border-b border-border relative overflow-hidden">
        <div className="container mx-auto px-5 lg:px-12 xl:px-16 space-y-5 relative z-10">
          <div className="space-y-2">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[10px] font-bold tracking-widest text-primary uppercase font-mono">10 /</span>
              <h2 className="text-[10px] font-bold tracking-[0.08em] text-muted uppercase font-mono">AI Experience Strategy</h2>
            </div>
            <h2 className="font-display text-[36px] font-semibold leading-[1] text-ink">
              What Should the AI Actually Do?<br /><span className="text-primary">Core responsibilities.</span>
            </h2>
            <p className="text-sm text-muted font-medium leading-relaxed max-w-2xl">
              AI assistance in enterprise operations is not a generic conversational chatbot. It is a set of embedded responsibilities focused on guiding the operator.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="p-4 bg-surface border border-border rounded-lg space-y-2 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xs group/resp">
              <span className="text-[9px] font-bold tracking-widest text-primary uppercase font-mono block">STEP 01</span>
              <h3 className="font-display text-xs font-bold text-ink uppercase group-hover/resp:text-primary transition-colors">UNDERSTAND</h3>
              <p className="text-[11px] text-muted font-medium leading-relaxed">
                Read and interpret relevant system context and data streams.
              </p>
            </div>

            <div className="p-4 bg-surface border border-border rounded-lg space-y-2 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xs group/resp">
              <span className="text-[9px] font-bold tracking-widest text-primary uppercase font-mono block">STEP 02</span>
              <h3 className="font-display text-xs font-bold text-ink uppercase group-hover/resp:text-primary transition-colors">IDENTIFY</h3>
              <p className="text-[11px] text-muted font-medium leading-relaxed">
                Surface critical anomaly patterns across telemetry layers.
              </p>
            </div>

            <div className="p-4 bg-surface border border-border rounded-lg space-y-2 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xs group/resp">
              <span className="text-[9px] font-bold tracking-widest text-primary uppercase font-mono block">STEP 03</span>
              <h3 className="font-display text-xs font-bold text-ink uppercase group-hover/resp:text-primary transition-colors">EXPLAIN</h3>
              <p className="text-[11px] text-muted font-medium leading-relaxed">
                Help operators understand why specific signals require attention.
              </p>
            </div>

            <div className="p-4 bg-surface border border-border rounded-lg space-y-2 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xs group/resp">
              <span className="text-[9px] font-bold tracking-widest text-primary uppercase font-mono block">STEP 04</span>
              <h3 className="font-display text-xs font-bold text-ink uppercase group-hover/resp:text-primary transition-colors">RECOMMEND</h3>
              <p className="text-[11px] text-muted font-medium leading-relaxed">
                Suggest clear, contextual remediation next steps.
              </p>
            </div>

            <div className="p-4 bg-ink text-white rounded-lg space-y-2 text-center transition-all duration-300 hover:-translate-y-1 hover:bg-primary transition-colors">
              <span className="text-[9px] font-bold tracking-widest text-primary uppercase font-mono block">STEP 05</span>
              <h3 className="font-display text-xs font-bold text-white uppercase">SUPPORT</h3>
              <p className="text-[11px] text-dark-muted font-medium leading-relaxed">
                Provide direct execution triggers for user decision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 11 — AI ASSISTANCE MODEL */}
      <section className="py-16 lg:py-20 bg-surface border-b border-border relative overflow-hidden">
        {/* Background Ambient Shapes */}
        <div className="absolute -top-10 -right-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <AmbientTechRings className="-top-8 right-12 w-56 h-56 sm:w-64 sm:h-64" />

        <div className="container mx-auto px-5 lg:px-12 xl:px-16 space-y-5 relative z-10">
          <div className="space-y-2">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[10px] font-bold tracking-widest text-primary uppercase font-mono">11 /</span>
              <h2 className="text-[10px] font-bold tracking-[0.08em] text-muted uppercase font-mono">Core UX Architecture</h2>
            </div>
            <h2 className="font-display text-[36px] font-semibold leading-[1] text-ink">
              The AI Assistance Model.<br /><span className="text-primary">Seven-stage interaction flow.</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 text-center text-[10px] font-bold">
            {[
              { step: '01', label: 'OPERATIONAL CONTEXT', desc: 'Environment & system state' },
              { step: '02', label: 'RELEVANT DATA', desc: 'Telemetry signals & logs' },
              { step: '03', label: 'AI ANALYSIS', desc: 'Anomaly synthesis' },
              { step: '04', label: 'INSIGHT', desc: 'Correlated root cause' },
              { step: '05', label: 'RECOMMENDATION', desc: 'Suggested action' },
              { step: '06', label: 'USER REVIEW', desc: 'Evaluation & control' },
              { step: '07', label: 'ACTION', desc: 'Execution trigger' },
            ].map((s) => (
              <div key={s.step} className="p-3 bg-background border border-border rounded-lg space-y-1 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:bg-primary/5 hover:shadow-xs group/step cursor-pointer">
                <span className="text-[12px] font-medium text-muted block group-hover/step:text-primary transition-colors font-mono">{s.step}</span>
                <span className="text-ink block uppercase text-[11px] font-bold group-hover/step:text-primary transition-colors">{s.label}</span>
                <span className="text-[10px] text-muted font-medium block leading-tight">{s.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 12 — GIVING THE AI THE RIGHT CONTEXT (PARAMETERS & INPUTS) */}
      <section className="py-16 lg:py-20 bg-background border-b border-border relative overflow-hidden">
        <div className="container mx-auto px-5 lg:px-12 xl:px-16 space-y-5 relative z-10">
          <div className="space-y-2">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[10px] font-bold tracking-widest text-primary uppercase font-mono">12 /</span>
              <h2 className="text-[10px] font-bold tracking-[0.08em] text-muted uppercase font-mono">Context Modeling</h2>
            </div>
            <h2 className="font-display text-[36px] font-semibold leading-[1] text-ink">
              Giving the AI the Right Context.<br /><span className="text-primary">Explicit parameter controls.</span>
            </h2>
            <p className="text-sm text-muted font-medium leading-relaxed max-w-2xl">
              Rather than forcing operators to type free-form text prompts from scratch ("Type something → Magic answer"), the interface exposes clear parameter controls to scope the assistance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-surface border border-border rounded-xl space-y-3">
              <div className="flex items-center gap-2 text-primary font-mono text-[10px] font-bold">
                <FiSliders className="w-4 h-4" />
                <span>PARAMETER 01</span>
              </div>
              <h3 className="font-display text-sm font-bold text-ink uppercase">ENVIRONMENT CONTEXT</h3>
              <p className="text-xs text-muted font-medium leading-relaxed">
                Scopes the investigation to Production, Staging, or Hybrid Cloud clusters to prevent cross-environment confusion.
              </p>
            </div>

            <div className="p-6 bg-surface border border-border rounded-xl space-y-3">
              <div className="flex items-center gap-2 text-primary font-mono text-[10px] font-bold">
                <FiServer className="w-4 h-4" />
                <span>PARAMETER 02</span>
              </div>
              <h3 className="font-display text-sm font-bold text-ink uppercase">SYSTEM & NODE TARGET</h3>
              <p className="text-xs text-muted font-medium leading-relaxed">
                Binds the AI synthesis directly to selected hardware nodes, compute pools, or network gateway clusters.
              </p>
            </div>

            <div className="p-6 bg-surface border border-border rounded-xl space-y-3">
              <div className="flex items-center gap-2 text-primary font-mono text-[10px] font-bold">
                <FiActivity className="w-4 h-4" />
                <span>PARAMETER 03</span>
              </div>
              <h3 className="font-display text-sm font-bold text-ink uppercase">ISSUE TYPE & TIMEFRAME</h3>
              <p className="text-xs text-muted font-medium leading-relaxed">
                Filters data stream analysis by specific operational anomaly categories (Latency, IOPS, Packet Drops) and window logs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 13 — RECOMMENDATIONS WITH CONTEXT (INTERACTIVE DEMO) */}
      <section className="py-16 lg:py-20 bg-surface border-b border-border relative overflow-hidden">
        <div className="container mx-auto px-5 lg:px-12 xl:px-16 space-y-5 relative z-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border pb-4">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[10px] font-bold tracking-widest text-primary uppercase font-mono">13 /</span>
                <h2 className="text-[10px] font-bold tracking-[0.08em] text-muted uppercase font-mono">Interactive AI Experience</h2>
              </div>
              <h2 className="font-display text-[36px] font-semibold leading-[1] text-ink">
                Recommendations with Context.<br /><span className="text-primary">Runtime simulator.</span>
              </h2>
            </div>

            <span className="text-[10px] font-mono font-bold text-muted uppercase">
              SELECT PARAMETERS BELOW TO UPDATE AI SYNTHESIS
            </span>
          </div>

          {/* Interactive AI Parameter Configuration Panel */}
          <div className="p-6 bg-background border border-border rounded-2xl space-y-6">
            {/* Controls Header */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs">
              <div className="space-y-1.5">
                <span className="text-[9px] font-bold text-muted uppercase block">ENVIRONMENT</span>
                <div className="flex flex-wrap gap-1">
                  {(['PRODUCTION', 'STAGING', 'HYBRID CLOUD'] as const).map((e) => (
                    <button
                      key={e}
                      onClick={() => setSelectedEnv(e)}
                      className={`px-2.5 py-1 rounded text-[10px] font-bold transition-all ${selectedEnv === e ? 'bg-ink text-white shadow-xs' : 'bg-surface border border-border text-muted hover:text-ink'
                        }`}
                    >
                      {e}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-1.5">
                <span className="text-[9px] font-bold text-muted uppercase block">TARGET NODE POOL</span>
                <div className="flex flex-wrap gap-1">
                  {(['COMPUTE ARRAY 04', 'STORAGE POOL 02', 'API GATEWAY CLUSTER'] as const).map((n) => (
                    <button
                      key={n}
                      onClick={() => setSelectedNode(n)}
                      className={`px-2.5 py-1 rounded text-[10px] font-bold transition-all ${selectedNode === n ? 'bg-ink text-white shadow-xs' : 'bg-surface border border-border text-muted hover:text-ink'
                        }`}
                    >
                      {n}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-1.5">
                <span className="text-[9px] font-bold text-muted uppercase block">ANOMALY CATEGORY</span>
                <div className="flex flex-wrap gap-1">
                  {(['LATENCY SPIKE', 'IOPS BOTTLENECK', 'PACKET LOSS'] as const).map((i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedIssue(i)}
                      className={`px-2.5 py-1 rounded text-[10px] font-bold transition-all ${selectedIssue === i ? 'bg-ink text-white shadow-xs' : 'bg-surface border border-border text-muted hover:text-ink'
                        }`}
                    >
                      {i}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* AI Recommendation Output Card Display */}
            <div className="p-6 bg-surface border border-border rounded-xl space-y-4 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border pb-3 font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                  <span className="text-xs font-bold text-ink uppercase">AI SYNTHESIS OUTPUT</span>
                </div>
                <span className="text-[10px] text-muted font-bold">CONTEXT: {simResult.context}</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
                <div className="space-y-2">
                  <span className="text-[10px] font-bold text-muted uppercase block font-mono">DETECTED TELEMETRY SIGNALS</span>
                  <p className="p-3 bg-background border border-border rounded-lg text-ink font-medium leading-relaxed">
                    {simResult.signals}
                  </p>
                </div>

                <div className="space-y-2">
                  <span className="text-[10px] font-bold text-primary uppercase block font-mono">CONTEXTUAL RECOMMENDATION</span>
                  <p className="p-3 bg-primary/5 border border-primary/20 rounded-lg text-ink font-semibold leading-relaxed">
                    {simResult.recommendation}
                  </p>
                </div>
              </div>

              <div className="p-3 bg-background border border-border rounded-lg text-xs space-y-1">
                <span className="text-[9px] font-bold text-muted uppercase block font-mono">WHY THIS RECOMMENDATION?</span>
                <p className="text-muted font-medium leading-relaxed">
                  {simResult.reasoning}
                </p>
              </div>

              <div className="flex justify-end pt-2">
                <button className="px-4 py-2.5 bg-ink hover:bg-primary text-white text-xs font-bold uppercase rounded transition-colors font-mono shadow-xs">
                  {simResult.nextAction}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 14 — EXPLORING THE RIGHT AI MODEL */}
      <section className="py-16 lg:py-20 bg-background border-b border-border relative overflow-hidden">
        <div className="container mx-auto px-5 lg:px-12 xl:px-16 space-y-5 relative z-10">
          <div className="space-y-2">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[10px] font-bold tracking-widest text-primary uppercase font-mono">14 /</span>
              <h2 className="text-[10px] font-bold tracking-[0.08em] text-muted uppercase font-mono">Iterative Discovery</h2>
            </div>
            <h2 className="font-display text-[36px] font-semibold leading-[1] text-ink">
              Exploring the Right Model.<br /><span className="text-primary">Design explorations.</span>
            </h2>
          </div>

          {/* Exploration Tabs */}
          <div className="flex flex-wrap items-center gap-2 border-b border-border pb-4">
            {[
              { id: 'EXP1', name: '01 / STANDALONE CHATBOT' },
              { id: 'EXP2', name: '02 / CONTEXTUAL SIDE PANEL' },
              { id: 'EXP3', name: '03 / INLINE SUGGESTIONS' },
              { id: 'FINAL', name: '04 / EMBEDDED CONTEXT-AWARE ASSISTANCE' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveExploration(tab.id as any)}
                className={`text-[9px] font-bold tracking-widest uppercase px-3 py-2 rounded transition-all font-mono ${activeExploration === tab.id
                  ? 'bg-ink text-white shadow-xs'
                  : 'bg-surface border border-border text-muted hover:text-ink'
                  }`}
              >
                {tab.name}
              </button>
            ))}
          </div>

          {/* Active Exploration Details */}
          <div className="p-6 bg-surface border border-border rounded-xl space-y-4 shadow-xs">
            {activeExploration === 'EXP1' && (
              <div className="space-y-3">
                <h3 className="font-display text-base font-bold text-ink uppercase">EXPLORATION 01 — Standalone Chatbot Interface</h3>
                <p className="text-xs text-muted font-medium leading-relaxed">
                  <strong>What it enabled:</strong> Provided a familiar conversational text box for typing open-ended questions.
                </p>
                <p className="text-xs text-muted font-medium leading-relaxed">
                  <strong>What it failed to solve:</strong> Forced operators to leave their active telemetry views, manually describe node IDs, and type repetitive prompts.
                </p>
                <p className="text-xs text-ink font-semibold">
                  <strong>Why it changed:</strong> Created a secondary context layer rather than solving the problem inside the user's workflow.
                </p>
              </div>
            )}

            {activeExploration === 'EXP2' && (
              <div className="space-y-3">
                <h3 className="font-display text-base font-bold text-ink uppercase">EXPLORATION 02 — Contextual Side Panel</h3>
                <p className="text-xs text-muted font-medium leading-relaxed">
                  <strong>What it enabled:</strong> Kept the assistant visible alongside primary infrastructure topology diagrams.
                </p>
                <p className="text-xs text-muted font-medium leading-relaxed">
                  <strong>What it failed to solve:</strong> Still required users to initiate assistance manually without surfacing proactive alert correlation.
                </p>
                <p className="text-xs text-ink font-semibold">
                  <strong>Why it changed:</strong> Evolved into embedded recommendations that trigger directly on active node inspection.
                </p>
              </div>
            )}

            {activeExploration === 'EXP3' && (
              <div className="space-y-3">
                <h3 className="font-display text-base font-bold text-ink uppercase">EXPLORATION 03 — Inline Status Suggestions</h3>
                <p className="text-xs text-muted font-medium leading-relaxed">
                  <strong>What it enabled:</strong> Displayed short AI text snippets directly inside metric cards.
                </p>
                <p className="text-xs text-muted font-medium leading-relaxed">
                  <strong>What it failed to solve:</strong> Visual clutter overwhelmed the main dashboard during high-severity multi-alert events.
                </p>
                <p className="text-xs text-ink font-semibold">
                  <strong>Why it changed:</strong> Refined to progressive context disclosure drawers balancing telemetry density with clear reasoning.
                </p>
              </div>
            )}

            {activeExploration === 'FINAL' && (
              <div className="space-y-3">
                <h3 className="font-display text-base font-bold text-ink uppercase">FINAL DIRECTION — Embedded Context-Aware Assistance</h3>
                <p className="text-xs text-muted font-medium leading-relaxed">
                  <strong>Why selected:</strong> Automatically binds AI synthesis to the operator's active environment, parameter configuration, and selected infrastructure node—surfacing structured recommendations with explicit reasoning and direct execution controls.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* SECTION 15 — WHY THE EXPERIENCE ISN'T JUST A CHATBOT */}
      <section className="py-16 lg:py-20 bg-surface border-b border-border relative overflow-hidden">
        <div className="container mx-auto px-5 lg:px-12 xl:px-16 space-y-5 relative z-10">
          <div className="space-y-2">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[10px] font-bold tracking-widest text-primary uppercase font-mono">15 /</span>
              <h2 className="text-[10px] font-bold tracking-[0.08em] text-muted uppercase font-mono">Interaction Comparison</h2>
            </div>
            <h2 className="font-display text-[36px] font-semibold leading-[1] text-ink">
              Why the Experience Isn't Just a Chatbot.<br /><span className="text-primary">Enterprise UX comparison.</span>
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs font-mono">
              <thead>
                <tr className="border-b border-border bg-background">
                  <th className="p-3.5 font-bold text-muted uppercase">UX DIMENSION</th>
                  <th className="p-3.5 font-bold text-muted uppercase">GENERIC AI CHATBOT</th>
                  <th className="p-3.5 font-bold text-primary uppercase bg-primary/5">CONTEXTUAL OPERATIONAL ASSISTANCE</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border font-sans">
                <tr>
                  <td className="p-3.5 font-bold font-mono text-ink">Starting Point</td>
                  <td className="p-3.5 text-muted font-medium">User starts from a blank prompt box</td>
                  <td className="p-3.5 font-semibold text-ink bg-primary/5">Starts from active system & node context</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold font-mono text-ink">Input Model</td>
                  <td className="p-3.5 text-muted font-medium">Requires typing free-form queries</td>
                  <td className="p-3.5 font-semibold text-ink bg-primary/5">Uses explicit operational parameters</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold font-mono text-ink">Output Format</td>
                  <td className="p-3.5 text-muted font-medium">Generates unstructured text responses</td>
                  <td className="p-3.5 font-semibold text-ink bg-primary/5">Produces structured, actionable recommendations</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold font-mono text-ink">Workflow Fit</td>
                  <td className="p-3.5 text-muted font-medium">Isolated in a separate chat window</td>
                  <td className="p-3.5 font-semibold text-ink bg-primary/5">Embedded directly into incident triage screens</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold font-mono text-ink">User Role</td>
                  <td className="p-3.5 text-muted font-medium">User must manually verify output text</td>
                  <td className="p-3.5 font-semibold text-ink bg-primary/5">User evaluates recommendation & executes action</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 16 — DESIGNING TRUSTWORTHY ASSISTANCE */}
      <section className="py-16 lg:py-20 bg-background border-b border-border relative overflow-hidden">
        <div className="container mx-auto px-5 lg:px-12 xl:px-16 space-y-5 relative z-10">
          <div className="space-y-2">
            <div className="flex items-center gap-2 mb-3">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-[10px] font-bold tracking-widest text-primary uppercase font-mono">16 /</span>
              <h2 className="text-[10px] font-bold tracking-[0.08em] text-muted uppercase font-mono">Design Rationale</h2>
            </div>
            <h2 className="font-display text-[36px] font-semibold leading-[1] text-ink">
              Designing Trustworthy Assistance.<br /><span className="text-primary">Four core design choices.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-surface border border-border rounded-xl space-y-3 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md group/dec">
              <span className="text-[12px] font-medium text-muted uppercase block">DECISION 01</span>
              <h3 className="font-display text-base font-bold text-ink uppercase group-hover/dec:text-primary transition-colors">CONTEXT BEFORE OUTPUT</h3>
              <p className="text-xs text-muted font-medium leading-relaxed">
                <strong>Problem:</strong> Opaque AI outputs create skepticism.<br />
                <strong>Decision:</strong> Explicitly display data parameters used to generate the recommendation.<br />
                <strong>UX Benefit:</strong> Establishes trust by proving the AI understands the current environment.
              </p>
            </div>

            <div className="p-6 bg-surface border border-border rounded-xl space-y-3 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md group/dec">
              <span className="text-[12px] font-medium text-muted uppercase block">DECISION 02</span>
              <h3 className="font-display text-base font-bold text-ink uppercase group-hover/dec:text-primary transition-colors">EXPLAIN THE RECOMMENDATION</h3>
              <p className="text-xs text-muted font-medium leading-relaxed">
                <strong>Problem:</strong> Raw suggestions without context are risky.<br />
                <strong>Decision:</strong> Include a dedicated "Why This Recommendation?" reasoning block.<br />
                <strong>UX Benefit:</strong> Helps operators evaluate the logic before acting.
              </p>
            </div>

            <div className="p-6 bg-surface border border-border rounded-xl space-y-3 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md group/dec">
              <span className="text-[12px] font-medium text-muted uppercase block">DECISION 03</span>
              <h3 className="font-display text-base font-bold text-ink uppercase group-hover/dec:text-primary transition-colors">HUMAN IN THE LOOP</h3>
              <p className="text-xs text-muted font-medium leading-relaxed">
                <strong>Problem:</strong> Autonomous actions cause operational fear.<br />
                <strong>Decision:</strong> Require explicit human review and button triggers for all actions.<br />
                <strong>UX Benefit:</strong> Preserves full operator agency and safety guarantees.
              </p>
            </div>

            <div className="p-6 bg-surface border border-border rounded-xl space-y-3 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md group/dec">
              <span className="text-[12px] font-medium text-muted uppercase block">DECISION 04</span>
              <h3 className="font-display text-base font-bold text-ink uppercase group-hover/dec:text-primary transition-colors">MAKE THE NEXT STEP CLEAR</h3>
              <p className="text-xs text-muted font-medium leading-relaxed">
                <strong>Problem:</strong> Text recommendations require manual execution elsewhere.<br />
                <strong>Decision:</strong> Embed direct action execution triggers inside recommendation drawers.<br />
                <strong>UX Benefit:</strong> Bridges the gap between diagnosis and remediation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 17 — THE SOLUTION (PRODUCT SHOWCASE) */}
      <section className="py-16 lg:py-20 bg-surface border-b border-border relative overflow-hidden">
        <div className="container mx-auto px-5 lg:px-12 xl:px-16 space-y-5 relative z-10">
          <div className="space-y-2">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[10px] font-bold tracking-widest text-primary uppercase font-mono">17 /</span>
              <h2 className="text-[10px] font-bold tracking-[0.08em] text-muted uppercase font-mono">Product Showcase</h2>
            </div>
            <h2 className="font-display text-[36px] font-semibold leading-[1] text-ink">
              The Solution.<br /><span className="text-primary">Unified AI operational experience.</span>
            </h2>
          </div>

          <div className="space-y-8">
            <div className="overflow-hidden rounded-xl border border-border aspect-[21/9] bg-background relative shadow-sm">
              <img
                src={dataMiningMed}
                alt="UnityOne AI Assistance Product Showcase"
                className="w-full h-full object-cover filter contrast-110 grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 text-xs">
              <div className="p-4 bg-background border border-border rounded-lg space-y-1">
                <span className="text-[10px] font-bold text-muted uppercase font-mono block">01 / CONTEXT</span>
                <p className="text-muted font-medium leading-relaxed">
                  Active environment, cluster state, and target system bound automatically.
                </p>
              </div>

              <div className="p-4 bg-background border border-border rounded-lg space-y-1">
                <span className="text-[10px] font-bold text-muted uppercase font-mono block">02 / INPUT</span>
                <p className="text-muted font-medium leading-relaxed">
                  Configurable parameters allow refining scope without typing text prompts.
                </p>
              </div>

              <div className="p-4 bg-background border border-border rounded-lg space-y-1">
                <span className="text-[10px] font-bold text-muted uppercase font-mono block">03 / OUTPUT</span>
                <p className="text-muted font-medium leading-relaxed">
                  Synthesized recommendations highlighted with clear visual priority.
                </p>
              </div>

              <div className="p-4 bg-background border border-border rounded-lg space-y-1">
                <span className="text-[10px] font-bold text-muted uppercase font-mono block">04 / EXPLANATION</span>
                <p className="text-muted font-medium leading-relaxed">
                  Explicit underlying signal logs exposing reasoning for user review.
                </p>
              </div>

              <div className="p-4 bg-background border border-border rounded-lg space-y-1">
                <span className="text-[10px] font-bold text-muted uppercase font-mono block">05 / ACTION</span>
                <p className="text-muted font-medium leading-relaxed">
                  Direct one-click execution triggers embedded in the recommendation UI.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 18 — RECOMMENDATION DETAIL */}
      <section className="py-16 lg:py-20 bg-background border-b border-border relative overflow-hidden">
        <div className="container mx-auto px-5 lg:px-12 xl:px-16 space-y-5 relative z-10">
          <div className="space-y-2">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[10px] font-bold tracking-widest text-primary uppercase font-mono">18 /</span>
              <h2 className="text-[10px] font-bold tracking-[0.08em] text-muted uppercase font-mono">UI Deep Dive</h2>
            </div>
            <h2 className="font-display text-[36px] font-semibold leading-[1] text-ink">
              Recommendation Architecture.<br /><span className="text-primary">Anatomy of an AI output.</span>
            </h2>
          </div>

          <div className="p-8 bg-surface border border-border rounded-2xl space-y-6 shadow-xs max-w-4xl mx-auto font-mono">
            <div className="flex items-center justify-between border-b border-border pb-4">
              <span className="text-xs font-bold text-ink uppercase">AI ASSISTANT RECOMMENDATION CARD</span>
              <span className="text-[10px] text-primary font-bold">STATUS: CONFIRMED ANOMALY</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs font-sans">
              <div className="p-4 bg-background border border-border rounded-xl space-y-2">
                <span className="text-[10px] font-bold text-muted uppercase font-mono block">RECOMMENDATION</span>
                <p className="text-ink font-semibold leading-relaxed">
                  Re-route API traffic to Compute Pool 02 and throttle non-critical background backup sync on Node 04B.
                </p>
              </div>

              <div className="p-4 bg-background border border-border rounded-xl space-y-2">
                <span className="text-[10px] font-bold text-muted uppercase font-mono block">WHY THIS RECOMMENDATION?</span>
                <p className="text-muted font-medium leading-relaxed">
                  Compute Pool 02 has 55% available headroom. Backup sync is consuming 40% of disk queue bandwidth during peak traffic.
                </p>
              </div>
            </div>

            <div className="p-4 bg-background border border-border rounded-xl text-xs space-y-2 font-sans">
              <span className="text-[10px] font-bold text-muted uppercase font-mono block">CONTEXT & PARAMETERS USED</span>
              <div className="flex flex-wrap gap-2 text-[10px] font-mono font-bold">
                <span className="px-2.5 py-1 bg-surface border border-border rounded text-ink">ENV: PRODUCTION</span>
                <span className="px-2.5 py-1 bg-surface border border-border rounded text-ink">NODE: COMPUTE-04B</span>
                <span className="px-2.5 py-1 bg-surface border border-border rounded text-ink">WINDOW: LAST 1 HOUR</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 19 — AI OUTPUT STATES */}
      <section className="py-16 lg:py-20 bg-surface border-b border-border relative overflow-hidden">
        <div className="container mx-auto px-5 lg:px-12 xl:px-16 space-y-5 relative z-10">
          <div className="space-y-2">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[10px] font-bold tracking-widest text-primary uppercase font-mono">19 /</span>
              <h2 className="text-[10px] font-bold tracking-[0.08em] text-muted uppercase font-mono">System States</h2>
            </div>
            <h2 className="font-display text-[36px] font-semibold leading-[1] text-ink">
              Designing for System States.<br /><span className="text-primary">Operational edge cases.</span>
            </h2>
          </div>

          {/* State Tabs */}
          <div className="flex flex-wrap items-center gap-2 border-b border-border pb-4">
            {[
              { id: 'INITIAL', name: 'INITIAL / IDLE' },
              { id: 'ANALYZING', name: 'ANALYZING TELEMETRY' },
              { id: 'RECOMMENDATION', name: 'RECOMMENDATION READY' },
              { id: 'NEEDS_CONTEXT', name: 'NEEDS MORE CONTEXT' },
              { id: 'REFINEMENT', name: 'USER REFINEMENT' },
              { id: 'UNCERTAINTY', name: 'UNCERTAINTY / ERROR' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveStateTab(tab.id as any)}
                className={`text-[9px] font-bold tracking-widest uppercase px-3 py-1.5 rounded transition-all font-mono ${activeStateTab === tab.id
                  ? 'bg-ink text-white shadow-xs'
                  : 'bg-background border border-border text-muted hover:text-ink'
                  }`}
              >
                {tab.name}
              </button>
            ))}
          </div>

          {/* Active State Details */}
          <div className="p-6 bg-background border border-border rounded-xl space-y-3 text-xs font-mono">
            {activeStateTab === 'INITIAL' && (
              <div>
                <span className="font-bold text-ink block mb-1">INITIAL / IDLE STATE</span>
                <p className="text-muted font-sans font-medium">Assistant stands by awaiting node selection or anomaly trigger. No intrusive popups or unrequested overlays.</p>
              </div>
            )}
            {activeStateTab === 'ANALYZING' && (
              <div>
                <span className="font-bold text-primary block mb-1">ANALYZING TELEMETRY STATE</span>
                <p className="text-muted font-sans font-medium">Subtle animated status indicator showing data stream scanning across selected parameters.</p>
              </div>
            )}
            {activeStateTab === 'RECOMMENDATION' && (
              <div>
                <span className="font-bold text-emerald-600 block mb-1">RECOMMENDATION AVAILABLE STATE</span>
                <p className="text-muted font-sans font-medium">Clear structured card exposing recommendation text, underlying reasoning, and action button.</p>
              </div>
            )}
            {activeStateTab === 'NEEDS_CONTEXT' && (
              <div>
                <span className="font-bold text-amber-600 block mb-1">INSUFFICIENT CONTEXT STATE</span>
                <p className="text-muted font-sans font-medium">Prompts operator to select specific environment or timeframe parameters to enable precise synthesis.</p>
              </div>
            )}
            {activeStateTab === 'REFINEMENT' && (
              <div>
                <span className="font-bold text-ink block mb-1">USER REFINEMENT STATE</span>
                <p className="text-muted font-sans font-medium">Operator modifies parameter filters; assistant updates recommendation dynamically without losing prior context.</p>
              </div>
            )}
            {activeStateTab === 'UNCERTAINTY' && (
              <div>
                <span className="font-bold text-rose-600 block mb-1">UNCERTAINTY / ERROR STATE</span>
                <p className="text-muted font-sans font-medium">Transparent notice when AI confidence is low: "Multiple potential root causes detected. Manual inspection recommended."</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* SECTION 20 — KEEPING THE HUMAN IN THE LOOP (USER CONTROL) */}
      <section className="py-16 lg:py-20 bg-background border-b border-border relative overflow-hidden">
        <div className="container mx-auto px-5 lg:px-12 xl:px-16 space-y-5 relative z-10">
          <div className="space-y-2">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[10px] font-bold tracking-widest text-primary uppercase font-mono">20 /</span>
              <h2 className="text-[10px] font-bold tracking-[0.08em] text-muted uppercase font-mono">User Control</h2>
            </div>
            <h2 className="font-display text-[36px] font-semibold leading-[1] text-ink">
              Keeping the Human in the Loop.<br /><span className="text-primary">Operator agency & safety.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 bg-surface border border-border rounded-xl space-y-3">
              <div className="text-[12px] font-medium text-muted uppercase block">CONTROL 01</div>
              <h3 className="font-display text-sm font-bold text-ink uppercase">INSPECT CONTEXT</h3>
              <p className="text-xs text-muted font-medium leading-relaxed">
                Operators can view all data streams and logs used by the AI before considering recommendations.
              </p>
            </div>

            <div className="p-5 bg-surface border border-border rounded-xl space-y-3">
              <div className="text-[12px] font-medium text-muted uppercase block">CONTROL 02</div>
              <h3 className="font-display text-sm font-bold text-ink uppercase">MODIFY PARAMETERS</h3>
              <p className="text-xs text-muted font-medium leading-relaxed">
                Users can adjust environment, node, or time filters to explore alternative operational scenarios.
              </p>
            </div>

            <div className="p-5 bg-surface border border-border rounded-xl space-y-3">
              <div className="text-[12px] font-medium text-muted uppercase block">CONTROL 03</div>
              <h3 className="font-display text-sm font-bold text-ink uppercase">REJECT / DISMISS</h3>
              <p className="text-xs text-muted font-medium leading-relaxed">
                Recommendations can be dismissed at any time without blocking standard manual triage workflows.
              </p>
            </div>

            <div className="p-5 bg-surface border border-border rounded-xl space-y-3">
              <div className="text-[12px] font-medium text-muted uppercase block">CONTROL 04</div>
              <h3 className="font-display text-sm font-bold text-ink uppercase">MANUAL EXECUTION</h3>
              <p className="text-xs text-muted font-medium leading-relaxed">
                No automated change is applied until the operator explicitly clicks the confirmation trigger.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 21 — CONSTRAINTS & TRADE-OFFS */}
      <section className="py-16 lg:py-20 bg-surface border-b border-border relative overflow-hidden">
        <div className="container mx-auto px-5 lg:px-12 xl:px-16 space-y-5 relative z-10">
          <div className="space-y-2">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[10px] font-bold tracking-widest text-primary uppercase font-mono">21 /</span>
              <h2 className="text-[10px] font-bold tracking-[0.08em] text-muted uppercase font-mono">Technical & UX Constraints</h2>
            </div>
            <h2 className="font-display text-[36px] font-semibold leading-[1] text-ink">
              Constraints & Trade-offs.<br /><span className="text-primary">Deliberate choices.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-background border border-border rounded-xl space-y-3">
              <span className="text-[12px] font-medium text-muted uppercase block">REAL CONSTRAINT</span>
              <h3 className="font-display text-sm font-bold text-ink uppercase">API Data Stream Availability</h3>
              <p className="text-xs text-muted font-medium leading-relaxed">
                Backend telemetry streams arrived in asynchronous batches. We could not guarantee instant sub-second AI synthesis for every metric change.
              </p>
            </div>

            <div className="p-6 bg-background border border-border rounded-xl space-y-3">
              <span className="text-[12px] font-medium text-muted uppercase block">DELIBERATE TRADE-OFF</span>
              <h3 className="font-display text-sm font-bold text-ink uppercase">Chatbot vs Embedded Controls</h3>
              <p className="text-xs text-muted font-medium leading-relaxed">
                <strong>We considered:</strong> A full conversational chatbot interface.<br />
                <strong>We chose:</strong> Embedded parameter-based contextual assistance.<br />
                <strong>Because:</strong> Chatbots forced unnecessary typing and added context-switching overhead in enterprise operational workflows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 22 — VALIDATING THE ASSISTANCE */}
      <section className="py-16 lg:py-20 bg-background border-b border-border relative overflow-hidden">
        <div className="container mx-auto px-5 lg:px-12 xl:px-16 space-y-5 relative z-10">
          <div className="space-y-2">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[10px] font-bold tracking-widest text-primary uppercase font-mono">22 /</span>
              <h2 className="text-[10px] font-bold tracking-[0.08em] text-muted uppercase font-mono">Validation</h2>
            </div>
            <h2 className="font-display text-[36px] font-semibold leading-[1] text-ink">
              Validating the Assistance.<br /><span className="text-primary">Operator testing.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-surface border border-border rounded-xl space-y-2">
              <span className="text-[12px] font-medium text-muted uppercase block">WHAT WAS TESTED</span>
              <p className="text-xs text-muted font-medium leading-relaxed">
                Interactive prototype walkthroughs with infrastructure operators evaluating parameter selection, reasoning readability, and recommendation execution workflows.
              </p>
            </div>

            <div className="p-6 bg-surface border border-border rounded-xl space-y-2">
              <span className="text-[12px] font-medium text-muted uppercase block">WHAT OPERATORS VALUED</span>
              <p className="text-xs text-muted font-medium leading-relaxed">
                Operators prioritized the explicit "Why This Recommendation?" explanation block, noting that understanding underlying signals was essential for trusting the guidance.
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

      {/* SECTION 23 — HOW THE EXPERIENCE EVOLVED */}
      <section className="py-16 lg:py-20 bg-surface border-b border-border relative overflow-hidden">
        <div className="container mx-auto px-5 lg:px-12 xl:px-16 space-y-5 relative z-10">
          <div className="space-y-2">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[10px] font-bold tracking-widest text-primary uppercase font-mono">23 /</span>
              <h2 className="text-[10px] font-bold tracking-[0.08em] text-muted uppercase font-mono">Design Evolution</h2>
            </div>
            <h2 className="font-display text-[36px] font-semibold leading-[1] text-ink">
              How the Experience Evolved.<br /><span className="text-primary">Before & after.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs">
            <div className="p-6 bg-background border border-border rounded-xl space-y-2">
              <span className="text-primary font-bold block">EARLY CONCEPT</span>
              <h3 className="font-display text-sm font-bold text-ink uppercase font-sans">Open Chatbot Prompt</h3>
              <p className="text-[11px] text-muted font-sans font-medium">
                Required manual prompt drafting without pre-bound system context.
              </p>
            </div>

            <div className="p-6 bg-background border border-border rounded-xl space-y-2">
              <span className="text-primary font-bold block">FEEDBACK / LEARNING</span>
              <h3 className="font-display text-sm font-bold text-ink uppercase font-sans">High Prompt Friction</h3>
              <p className="text-[11px] text-muted font-sans font-medium">
                Operators didn't want to type questions during high-stress outages.
              </p>
            </div>

            <div className="p-6 bg-ink text-white rounded-xl space-y-2">
              <span className="text-emerald-400 font-bold block">FINAL EXPERIENCE</span>
              <h3 className="font-display text-sm font-bold uppercase font-sans">Embedded Contextual AI</h3>
              <p className="text-[11px] text-dark-muted font-sans font-medium">
                Pre-bound parameters, structured reasoning, and direct action triggers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 24 — OUTCOME */}
      <section className="py-16 lg:py-20 bg-background border-b border-border relative overflow-hidden">
        <div className="container mx-auto px-5 lg:px-12 xl:px-16 space-y-5 relative z-10">
          <div className="space-y-2">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[10px] font-bold tracking-widest text-primary uppercase font-mono">24 /</span>
              <h2 className="text-[10px] font-bold tracking-[0.08em] text-muted uppercase font-mono">Project Impact</h2>
            </div>
            <h2 className="font-display text-[36px] font-semibold leading-[1] text-ink">
              Outcome.<br /><span className="text-primary">User, product & operational impact.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 bg-surface border border-border rounded-xl space-y-3">
              <span className="text-[12px] font-medium text-muted uppercase block">USER OUTCOME</span>
              <h3 className="font-display text-sm font-bold text-ink uppercase">Reduced Interpretation Effort</h3>
              <p className="text-xs text-muted font-medium leading-relaxed">
                Operators receive synthesized anomaly insights and clear recommendations directly within active incident workflows.
              </p>
            </div>

            <div className="p-5 bg-surface border border-border rounded-xl space-y-3">
              <span className="text-[12px] font-medium text-muted uppercase block">PRODUCT OUTCOME</span>
              <h3 className="font-display text-sm font-bold text-ink uppercase">Contextual Assistance Layer</h3>
              <p className="text-xs text-muted font-medium leading-relaxed">
                Established a scalable AI UX framework that connects operational data directly to decision-support workflows.
              </p>
            </div>

            <div className="p-5 bg-surface border border-border rounded-xl space-y-3">
              <span className="text-[12px] font-medium text-muted uppercase block">OPERATIONAL VALUE</span>
              <h3 className="font-display text-sm font-bold text-ink uppercase">Enterprise Trust</h3>
              <p className="text-xs text-muted font-medium leading-relaxed">
                Positioned UnityOne as a forward-thinking operational console. <span className="font-mono text-[10px] text-ink font-bold">[ADD ACTUAL PROJECT OUTCOME]</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 25 — MY CONTRIBUTION */}
      <section className="py-16 lg:py-20 bg-surface border-b border-border relative overflow-hidden">
        <div className="container mx-auto px-5 lg:px-12 xl:px-16 space-y-5 relative z-10">
          <div className="space-y-2">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[10px] font-bold tracking-widest text-primary uppercase font-mono">25 /</span>
              <h2 className="text-[10px] font-bold tracking-[0.08em] text-muted uppercase font-mono">Individual Responsibilities</h2>
            </div>
            <h2 className="font-display text-[36px] font-semibold leading-[1] text-ink">
              My Contribution.<br /><span className="text-primary">Personal role & ownership.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="p-5 bg-background border border-border rounded-xl space-y-2">
              <span className="text-[12px] font-medium text-muted uppercase block">PRODUCT THINKING</span>
              <h3 className="font-display text-sm font-bold text-ink uppercase">Problem Framing</h3>
              <p className="text-xs text-muted font-medium leading-relaxed">
                Defined the strategy of contextual assistance over isolated conversational chatbots.
              </p>
            </div>

            <div className="p-5 bg-background border border-border rounded-xl space-y-2">
              <span className="text-[12px] font-medium text-muted uppercase block">UX ARCHITECTURE</span>
              <h3 className="font-display text-sm font-bold text-ink uppercase">Interaction Flow</h3>
              <p className="text-xs text-muted font-medium leading-relaxed">
                Architected the 7-stage Data → Context → Recommendation → Action flow.
              </p>
            </div>

            <div className="p-5 bg-background border border-border rounded-xl space-y-2">
              <span className="text-[12px] font-medium text-muted uppercase block">AI UX DESIGN</span>
              <h3 className="font-display text-sm font-bold text-ink uppercase">Context Modeling</h3>
              <p className="text-xs text-muted font-medium leading-relaxed">
                Designed parameter-bound input controls and recommendation reasoning UI.
              </p>
            </div>

            <div className="p-5 bg-background border border-border rounded-xl space-y-2">
              <span className="text-[12px] font-medium text-muted uppercase block">DESIGN & PROTOTYPING</span>
              <h3 className="font-display text-sm font-bold text-ink uppercase">Interface Design</h3>
              <p className="text-xs text-muted font-medium leading-relaxed">
                Created high-fidelity screens, interactive simulators, and UI state models.
              </p>
            </div>

            <div className="p-5 bg-background border border-border rounded-xl space-y-2">
              <span className="text-[12px] font-medium text-muted uppercase block">COLLABORATION</span>
              <h3 className="font-display text-sm font-bold text-ink uppercase">Team Alignment</h3>
              <p className="text-xs text-muted font-medium leading-relaxed">
                Partnered with product managers, engineers, and SRE domain experts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 26 — WORKING ACROSS DISCIPLINES (COLLABORATION) */}
      <section className="py-16 lg:py-20 bg-background border-b border-border relative overflow-hidden">
        <div className="container mx-auto px-5 lg:px-12 xl:px-16 space-y-5 relative z-10">
          <div className="space-y-2">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[10px] font-bold tracking-widest text-primary uppercase font-mono">26 /</span>
              <h2 className="text-[10px] font-bold tracking-[0.08em] text-muted uppercase font-mono">Team Alignment</h2>
            </div>
            <h2 className="font-display text-[36px] font-semibold leading-[1] text-ink">
              Working Across Disciplines.<br /><span className="text-primary">Cross-functional collaboration.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-surface border border-border rounded-xl space-y-2">
              <span className="text-[12px] font-medium text-muted uppercase block">WITH PRODUCT MANAGEMENT</span>
              <p className="text-xs text-muted font-medium leading-relaxed">
                Aligned assistance capabilities with operator workflow priorities and release roadmaps.
              </p>
            </div>

            <div className="p-6 bg-surface border border-border rounded-xl space-y-2">
              <span className="text-[12px] font-medium text-muted uppercase block">WITH INFRASTRUCTURE ENGINEERING</span>
              <p className="text-xs text-muted font-medium leading-relaxed">
                Validated backend telemetry streaming rates and API latency limits for runtime recommendations.
              </p>
            </div>

            <div className="p-6 bg-surface border border-border rounded-xl space-y-2">
              <span className="text-[12px] font-medium text-muted uppercase block">WITH DOMAIN EXPERTS</span>
              <p className="text-xs text-muted font-medium leading-relaxed">
                Reviewed operational reasoning clarity and status terminology with active SRE specialists.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 27 — REFLECTION & LEARNINGS */}
      <section className="py-16 lg:py-20 bg-surface border-b border-border relative overflow-hidden">
        <div className="container mx-auto px-5 lg:px-12 xl:px-16 space-y-5 relative z-10">
          <div className="space-y-2">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[10px] font-bold tracking-widest text-primary uppercase font-mono">27 /</span>
              <h2 className="text-[10px] font-bold tracking-[0.08em] text-muted uppercase font-mono">Reflection</h2>
            </div>
            <h2 className="font-display text-[36px] font-semibold leading-[1] text-ink">
              What I Learned.<br /><span className="text-primary">Enterprise AI UX lessons.</span>
            </h2>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-muted font-medium leading-relaxed max-w-3xl">
            <p>
              Designing AI for enterprise software is less about making the interface conversational and more about making intelligence contextual, understandable, and useful within an existing workflow.
            </p>
            <p className="font-bold text-ink">
              Key takeaway: True AI assistance in enterprise UX does not replace human judgment—it provides the context and reasoning necessary for operators to make confident decisions faster.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 28 — CONCLUSION & FINAL TAKEAWAY */}
      <section className="py-16 lg:py-20 bg-surface border-b border-border text-center relative overflow-hidden">
        <div className="container mx-auto px-5 lg:px-12 xl:px-16 space-y-6 relative z-10">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-[10px] font-bold tracking-widest text-primary uppercase font-mono">28 /</span>
            <h2 className="text-[10px] font-bold tracking-[0.08em] text-muted uppercase">Conclusion</h2>
          </div>
          <h2 className="font-display text-[36px] font-semibold leading-[1] text-ink">
            From Operational Data.<br /><span className="text-primary">To Useful Assistance.</span>
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-mono font-bold text-ink">
            <span className="p-2 bg-background border border-border rounded">OPERATIONAL DATA</span>
            <span>➔</span>
            <span className="p-2 bg-background border border-border rounded">CONTEXT</span>
            <span>➔</span>
            <span className="p-2 bg-background border border-border rounded">AI UNDERSTANDING</span>
            <span>➔</span>
            <span className="p-2 bg-background border border-border rounded">RECOMMENDATION</span>
            <span>➔</span>
            <span className="p-2 bg-ink text-white rounded">ACTION</span>
          </div>

          <p className="text-sm font-semibold text-ink max-w-xl mx-auto pt-2">
            The goal was not to add AI to the product. The goal was to make the operational data already available in UnityOne more useful to the people working with it.
          </p>
        </div>
      </section>

      {/* SECTION 29 — CASE STUDY NAVIGATION */}
      <section className="py-16 lg:py-20 bg-background border-t border-border">
        <div className="container mx-auto px-5 lg:px-12 xl:px-16 space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] font-bold tracking-widest text-primary uppercase">29 /</span>
                <h2 className="text-[10px] font-bold tracking-[0.08em] text-muted uppercase font-mono">Case Study Navigation</h2>
              </div>
              <h2 className="font-display text-[36px] font-semibold leading-[1] text-ink">
                Explore Next Case Studies.<br /><span className="text-primary">UnityOne Product Suite.</span>
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
            {/* Previous Case Study 01 — Complex IT Operations */}
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
                  state={{ from: '/work/unityone/ai-assistant', fromLabel: 'AI ASSISTANT' }}
                  className="inline-flex items-center text-[11px] font-bold tracking-widest uppercase text-primary transition-colors relative group/link"
                >
                  READ CASE STUDY
                  <FiArrowUpRight className="ml-1.5 w-4 h-4 text-primary group-hover/link:-translate-y-1 group-hover/link:translate-x-1 transition-transform" />
                  <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-primary transition-colors"></span>
                </Link>
              </div>
            </div>

            {/* Next Case Study 03 — Reporting & Data */}
            <div className="p-8 bg-surface border border-border rounded-2xl flex flex-col justify-between space-y-6 group hover:border-ink/40 transition-all duration-300 shadow-xs">
              <div className="space-y-4">
                <div className="overflow-hidden rounded-xl border border-border aspect-[16/9] bg-background relative">
                  <img
                    src={dcRoomMed}
                    alt="Operational Data Analytics and Reporting Visualization"
                    className="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-surface/90 backdrop-blur-xs border border-border px-2.5 py-1 rounded text-[9px] font-bold font-mono text-primary uppercase">
                    03 / REPORTING & DATA
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="font-display text-xl font-bold text-ink">
                    From operational data to decisions.
                  </h3>
                  <p className="text-xs text-muted font-medium leading-relaxed">
                    Enterprise users often need to understand large volumes of operational data quickly. Designing reporting and data experiences that help users identify patterns.
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {['Data Visualization', 'Dashboard UX', 'Reporting'].map((tag) => (
                    <span key={tag} className="text-[9px] font-bold tracking-widest px-2.5 py-0.5 border border-border rounded uppercase text-muted font-mono bg-background">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <Link
                  to="/work/unityone/reporting-data"
                  state={{ from: '/work/unityone/ai-assistant', fromLabel: 'AI ASSISTANT' }}
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
