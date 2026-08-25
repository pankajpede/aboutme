import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  FiArrowLeft,
  FiArrowRight,
  FiArrowUpRight,
  FiLayers,
  FiCpu,
  FiHardDrive,
  FiServer,
  FiCheck,
  FiActivity,
  FiCloud,
  FiSliders,
  FiDatabase,
  FiSearch,
  FiAlertCircle,
  FiGitBranch,
  FiEye,
  FiShield,
  FiTarget,
  FiBriefcase,
  FiUsers,
  FiFileText,
  FiCheckCircle,
  FiHelpCircle
} from '../components/ui/Icons';
import { ScrollToTopWidget } from '../components/ui/ScrollToTopWidget';

// Local Case Study Editorial Image Imports
import datacenterLg from '../assets/images/case-study/datacenter-large.jpg';
import datacenterMed from '../assets/images/case-study/datacenter-medium.jpg';
import laptopDcMed from '../assets/images/case-study/laptop-in-dc-medium.jpg';
import dataMiningMed from '../assets/images/case-study/data-mining-medium.jpg';

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
        <pattern id="tech-dots-bg" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.5" fill="#0A66C2" fillOpacity="0.22" />
        </pattern>
      </defs>
      <rect width="240" height="240" fill="url(#tech-dots-bg)" />
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



type DomainFilter = 'ALL' | 'NETWORK' | 'COMPUTE' | 'STORAGE' | 'INFRASTRUCTURE' | 'OBSERVABILITY';

type TopologyNode = {
  id: string;
  name: string;
  category: DomainFilter;
  status: 'Operational' | 'Warning' | 'Critical';
  health: number;
  connections: number;
  icon: any;
  col: number;
};

const TOPOLOGY_NODES: TopologyNode[] = [
  { id: 'dcim', name: 'DCIM Cluster', category: 'INFRASTRUCTURE', status: 'Operational', health: 99, connections: 14, icon: FiServer, col: 1 },
  { id: 'cloud-aws', name: 'AWS Multi-Cloud', category: 'NETWORK', status: 'Operational', health: 98, connections: 24, icon: FiCloud, col: 1 },
  { id: 'obs-metrics', name: 'Metrics Pipeline', category: 'OBSERVABILITY', status: 'Operational', health: 97, connections: 18, icon: FiActivity, col: 1 },

  { id: 'ai-engine', name: 'AIOps Core Engine', category: 'COMPUTE', status: 'Operational', health: 100, connections: 36, icon: FiCpu, col: 2 },
  { id: 'hcmp-broker', name: 'HCMP Broker', category: 'NETWORK', status: 'Warning', health: 91, connections: 19, icon: FiLayers, col: 2 },

  { id: 'infra-storage', name: 'SAN Storage Array', category: 'STORAGE', status: 'Operational', health: 98, connections: 12, icon: FiDatabase, col: 3 },
  { id: 'ops-workflow', name: 'Automation Engine', category: 'COMPUTE', status: 'Operational', health: 99, connections: 22, icon: FiCpu, col: 3 },
];

export default function UnityOneComplexITCaseStudy() {
  const location = useLocation();
  const [activeFilter, setActiveFilter] = useState<DomainFilter>('ALL');
  const [selectedNodeId, setSelectedNodeId] = useState<string>('ai-engine');
  const [activeExploration, setActiveExploration] = useState<'EXP1' | 'EXP2' | 'EXP3' | 'FINAL'>('FINAL');
  const [activeStateTab, setActiveStateTab] = useState<'NORMAL' | 'WARNING' | 'CRITICAL' | 'EMPTY' | 'LARGE'>('NORMAL');

  // Dynamic origin calculation based on router state or document referrer
  const getOrigin = () => {
    if (location.state?.from) {
      return {
        label: location.state.fromLabel || 'OVERVIEW',
        path: location.state.from,
      };
    }
    if (typeof document !== 'undefined' && document.referrer) {
      try {
        const referrerUrl = new URL(document.referrer);
        const path = referrerUrl.pathname;
        if (path.includes('/unityone')) {
          return { label: 'OVERVIEW', path: '/work/unityone' };
        } else if (path.includes('/work')) {
          return { label: 'WORK', path: '/work' };
        }
      } catch {
        // Fallback
      }
    }
    return { label: 'OVERVIEW', path: '/work/unityone' };
  };

  const origin = getOrigin();
  const selectedNode = TOPOLOGY_NODES.find((n) => n.id === selectedNodeId) || TOPOLOGY_NODES[3];

  return (
    <div id="complex-it-study" className="bg-background text-ink relative">
      <ScrollToTopWidget />

      {/* SECTION 01 — HERO & BREADCRUMB */}
      <section className="pt-8 pb-16 lg:pb-20 bg-background border-b border-border">
        <div className="container mx-auto px-5 lg:px-12 xl:px-16 space-y-6">
          {/* Dynamic Center-Aligned Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="flex justify-center text-center">
            <ol className="flex flex-wrap items-center justify-center gap-2 text-[10px] sm:text-[11px] font-bold tracking-widest uppercase font-mono">
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
                COMPLEX IT OPERATIONS
              </li>
            </ol>
          </nav>

          {/* Hero Headline & Intro - Center Aligned */}
          <div className="text-center max-w-3xl mx-auto space-y-3 pt-2">
            <h1 className="font-display text-[36px] font-semibold leading-[1] text-ink">
              Making complex infrastructure<br /><span className="text-primary">easier to understand.</span>
            </h1>

            <p className="text-[14px] text-muted font-medium max-w-2xl mx-auto">
              Designing an operational UX that helps infrastructure teams understand complex system relationships, dependencies, and operational signals without losing context.
            </p>
          </div>

          {/* Project Meta Panel */}
          <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 p-6 bg-surface border border-border rounded-xl">
            <div className='flex flex-col'>
              <span className="text-[12px] font-medium text-muted">ROLE</span>
              <span className="text-[14px] font-semibold text-ink font-display">Senior Product Designer</span>
            </div>
            <div className='flex flex-col'>
              <span className="text-[12px] font-medium text-muted">FOCUS</span>
              <span className="text-[14px] font-semibold text-ink font-display">UX Strategy & IA</span>
            </div>
            <div className='flex flex-col'>
              <span className="text-[12px] font-medium text-muted">DOMAIN</span>
              <span className="text-[14px] font-semibold text-ink font-display">Enterprise IT & Cloud</span>
            </div>
            <div className='flex flex-col'>
              <span className="text-[12px] font-medium text-muted">CONTRIBUTION</span>
              <span className="text-[14px] font-semibold text-ink font-display">UX & Interaction</span>
            </div>
            <div className='flex flex-col'>
              <span className="text-[12px] font-medium text-muted">PRODUCT</span>
              <span className="text-[14px] font-semibold text-ink font-display">UnityOne Platform</span>
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
              <h3 className="font-display text-sm font-bold text-ink uppercase group-hover/card:text-primary transition-colors">Disconnected Signals</h3>
              <p className="text-xs text-muted font-medium leading-relaxed">
                Dense infrastructure signals competed for attention across isolated telemetry tables, making root causes hard to identify during incidents.
              </p>
            </div>

            <div className="p-4 bg-background border border-border rounded-lg space-y-3 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md group/card">
              <span className="text-[12px] font-medium text-muted uppercase block">MY ROLE</span>
              <h3 className="font-display text-sm font-bold text-ink uppercase group-hover/card:text-primary transition-colors">End-to-End UX Architecture</h3>
              <p className="text-xs text-muted font-medium leading-relaxed">
                Led problem framing, information architecture, topology interaction design, contextual navigation models, and prototype validation.
              </p>
            </div>

            <div className="p-4 bg-background border border-border rounded-lg space-y-3 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md group/card">
              <span className="text-[12px] font-medium text-muted uppercase block">THE APPROACH</span>
              <h3 className="font-display text-sm font-bold text-ink uppercase group-hover/card:text-primary transition-colors">Progressive Context</h3>
              <p className="text-xs text-muted font-medium leading-relaxed">
                Structured information hierarchy into a progressive model: Structure → Relationships → Context → Action to prevent cognitive overload.
              </p>
            </div>

            <div className="p-4 bg-background border border-border rounded-lg space-y-3 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md group/card">
              <span className="text-[12px] font-medium text-muted uppercase block">THE OUTCOME</span>
              <h3 className="font-display text-sm font-bold text-ink uppercase group-hover/card:text-primary transition-colors">Operational Clarity</h3>
              <p className="text-xs text-muted font-medium leading-relaxed">
                Transformed fragmented telemetry into a unified context-aware operational experience. <span className="font-mono text-[10px] text-ink font-bold">[ADD ACTUAL PROJECT OUTCOME]</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 03 — THE CONTEXT (UNDERSTANDING THE ENVIRONMENT) */}
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
              <span className="text-[10px] font-bold tracking-widest text-primary uppercase">03 /</span>
              <h2 className="text-[10px] font-bold tracking-[0.08em] text-muted uppercase">Domain Complexity</h2>
            </div>
            <h2 className="font-display text-[36px] font-semibold leading-[1] text-ink">
              Understanding the Environment.<br /><span className="text-primary">System context.</span>
            </h2>
          </div>

          <div className="space-y-4 w-full text-sm text-muted font-medium leading-relaxed">
            <p>
              Enterprise IT infrastructure is inherently interconnected. A single operational event—such as a network latency spike or storage array bottleneck—can cascade across physical data centers, hypervisors, cloud clusters, and software workloads.
            </p>
            <p>
              Traditional monitoring tools expose raw data tables without explaining dependency connections. The primary challenge was exposing enough information for operators to understand complex multi-layer relationships without forcing them to navigate through endless nested menus.
            </p>
          </div>

          {/* Horizontal Desktop Flow Model */}
          <div className="p-5 sm:p-6 bg-surface border border-border rounded-xl space-y-4 shadow-xs">
            <span className="text-[9px] font-bold tracking-widest text-ink uppercase block text-center sm:text-left">
              INFRASTRUCTURE UX RELATIONSHIP MODEL
            </span>
            <div className="flex flex-col md:flex-row items-center justify-between gap-2 text-[10px] sm:text-[11px] font-bold text-center">
              <div className="p-3 bg-background border border-border rounded text-ink flex-1 w-full md:w-auto hover:border-primary hover:bg-primary/5 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer">INFRASTRUCTURE OVERVIEW</div>
              <span className="text-muted text-[10px] md:rotate-0 rotate-90 my-0.5 md:my-0">➔</span>
              <div className="p-3 bg-background border border-border rounded text-ink flex-1 w-full md:w-auto hover:border-primary hover:bg-primary/5 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer">NETWORKS & CLUSTERS</div>
              <span className="text-muted text-[10px] md:rotate-0 rotate-90 my-0.5 md:my-0">➔</span>
              <div className="p-3 bg-background border border-border rounded text-ink flex-1 w-full md:w-auto hover:border-primary hover:bg-primary/5 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer">COMPONENTS & METRICS</div>
              <span className="text-muted text-[10px] md:rotate-0 rotate-90 my-0.5 md:my-0">➔</span>
              <div className="p-3 bg-background border border-border rounded text-ink flex-1 w-full md:w-auto hover:border-primary hover:bg-primary/5 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer">DEPENDENCY RELATIONSHIPS</div>
              <span className="text-muted text-[10px] md:rotate-0 rotate-90 my-0.5 md:my-0">➔</span>
              <div className="p-3 bg-background border border-border rounded text-ink flex-1 w-full md:w-auto hover:border-primary hover:bg-primary/5 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer">OPERATIONAL CONTEXT</div>
              <span className="text-muted text-[10px] md:rotate-0 rotate-90 my-0.5 md:my-0">➔</span>
              <div className="p-3 bg-ink text-white rounded flex-1 w-full md:w-auto hover:bg-primary transition-all duration-300 cursor-pointer">DIRECT ACTION</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 04 — USERS (WHO ARE WE DESIGNING FOR?) */}
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
              <span className="text-[10px] font-bold tracking-widest text-primary uppercase">04 /</span>
              <h2 className="text-[10px] font-bold tracking-[0.08em] text-muted uppercase">User Characteristics</h2>
            </div>
            <h2 className="font-display text-[36px] font-semibold leading-[1] text-ink">
              Who Are We Designing For?<br /><span className="text-primary">Operator needs.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 p-6 bg-background border border-border rounded-xl space-y-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md group/usercard">
              <div className="flex items-center gap-3">
                <span className="p-2 bg-surface border border-border rounded text-ink group-hover/usercard:border-primary group-hover/usercard:text-primary transition-colors">
                  <FiUsers className="w-5 h-5" />
                </span>
                <div>
                  <span className="text-[12px] font-medium text-muted uppercase block">PRIMARY USER</span>
                  <h3 className="font-display text-lg font-bold text-ink uppercase group-hover/usercard:text-primary transition-colors">Infrastructure Operator</h3>
                </div>
              </div>
              <p className="text-xs text-muted font-medium leading-relaxed">
                Site Reliability Engineers (SREs), Data Center Administrators, and IT Operations Specialists responsible for maintaining system uptime and resolving critical incidents rapidly.
              </p>
            </div>

            <div className="lg:col-span-7 space-y-4">
              <span className="text-[10px] font-semibold text-muted uppercase block">
                OPERATIONAL QUESTIONS THEY MUST ANSWER INSTANTLY:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  '1. What infrastructure node is affected?',
                  '2. What connected systems depend on it?',
                  '3. What upstream system caused the issue?',
                  '4. What historical context explains it?',
                  '5. What operational action should be taken next?',
                ].map((q) => (
                  <div key={q} className="p-3.5 bg-background border border-border rounded-lg text-xs font-semibold text-ink flex items-center gap-2 transition-all duration-300 hover:border-primary/50 hover:translate-x-1 hover:shadow-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span>
                    <span>{q}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 05 — THE PROBLEM */}
      <section className="py-16 lg:py-20 bg-background border-b border-border relative overflow-hidden">
        {/* Background Ambient Shapes */}
        <div className="absolute -top-16 -left-16 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <AmbientTechRings className="-bottom-10 right-8 w-56 h-56 sm:w-72 sm:h-72" />

        <div className="container mx-auto px-5 lg:px-12 xl:px-16 space-y-5 relative z-10">
          <div className="space-y-2">
            <div className="flex items-center gap-2 mb-3">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-[10px] font-bold tracking-widest text-primary uppercase">05 /</span>
              <h2 className="text-[10px] font-bold tracking-[0.08em] text-muted uppercase">Problem Statement</h2>
            </div>
            <h2 className="font-display text-[36px] font-semibold leading-[1] text-ink">
              Dense information was not the only issue.<br /><span className="text-primary">The missing piece was context.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 bg-surface border border-border rounded-lg space-y-3 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md group/prob">
              <span className="text-[12px] font-medium text-muted uppercase block">INFORMATION DENSITY</span>
              <h3 className="font-display text-base font-bold text-ink uppercase group-hover/prob:text-primary transition-colors">Signal Overload</h3>
              <p className="text-xs text-muted font-medium leading-relaxed">
                Thousands of active alerts competed for visual priority simultaneously. High-severity incidents were easily buried beneath routine system logs.
              </p>
            </div>

            <div className="p-4 bg-surface border border-border rounded-lg space-y-3 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md group/prob">
              <span className="text-[12px] font-medium text-muted uppercase block">LOST RELATIONSHIPS</span>
              <h3 className="font-display text-base font-bold text-ink uppercase group-hover/prob:text-primary transition-colors">Invisible Dependencies</h3>
              <p className="text-xs text-muted font-medium leading-relaxed">
                Telemetry tables presented items in flat lists. Operators had to manually reconstruct complex hardware and software dependency chains in their heads.
              </p>
            </div>

            <div className="p-4 bg-surface border border-border rounded-lg space-y-3 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md group/prob">
              <span className="text-[12px] font-medium text-muted uppercase block">CONTEXT SWITCHING</span>
              <h3 className="font-display text-base font-bold text-ink uppercase group-hover/prob:text-primary transition-colors">Tool Fragmentation</h3>
              <p className="text-xs text-muted font-medium leading-relaxed">
                Diagnosing a single root cause required switching between separate monitoring dashboards, log viewers, and infrastructure consoles.
              </p>
            </div>

            <div className="p-4 bg-surface border border-border rounded-lg space-y-3 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md group/prob">
              <span className="text-[12px] font-medium text-muted uppercase block">UNCLEAR NEXT STEP</span>
              <h3 className="font-display text-base font-bold text-ink uppercase group-hover/prob:text-primary transition-colors">Action Disconnect</h3>
              <p className="text-xs text-muted font-medium leading-relaxed">
                Even after identifying an operational anomaly, interfaces failed to provide direct remediation controls or automated action triggers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 06 — EXISTING EXPERIENCE (WHERE THE EXPERIENCE BROKE DOWN) */}
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
              <span className="text-[10px] font-bold tracking-widest text-primary uppercase">06 /</span>
              <h2 className="text-[10px] font-bold tracking-[0.08em] text-muted uppercase">Legacy UX Audit</h2>
            </div>
            <h2 className="font-display text-[36px] font-semibold leading-[1] text-ink">
              Where the Experience<br /><span className="text-primary">Broke Down.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Visual Screenshot Container */}
            <div className="lg:col-span-7 overflow-hidden rounded-xl border border-border aspect-[16/10] bg-background relative">
              <img
                src={datacenterMed}
                alt="Legacy Infrastructure Monitoring Visual"
                className="w-full h-full object-cover filter grayscale contrast-125 opacity-50"
              />
              <div className="absolute inset-0 bg-ink/40 flex items-center justify-center p-6 text-center">
                <div className="p-5 bg-surface border border-border rounded-xl max-w-md space-y-2 text-left shadow-2xl">
                  <span className="text-[10px] font-bold tracking-widest text-primary uppercase block">LEGACY INTERFACE ANNOTATION</span>
                  <p className="text-xs sm:text-sm font-semibold text-ink leading-relaxed">
                    Flat tabular layout with disconnected status indicators and no visual topology links.
                  </p>
                </div>
              </div>
            </div>

            {/* Breakdown Annotations */}
            <div className="lg:col-span-5 space-y-4">
              <div className="p-5 bg-surface border border-border rounded-xl space-y-1.5 shadow-xs">
                <span className="text-[12px] font-medium text-muted uppercase block">INFORMATION FRAGMENTATION</span>
                <p className="text-xs text-ink font-medium leading-relaxed">
                  Data points were scattered across 6+ tabs with inconsistent metric labels.
                </p>
              </div>

              <div className="p-5 bg-surface border border-border rounded-xl space-y-1.5 shadow-xs">
                <span className="text-[12px] font-medium text-muted uppercase block">POOR RELATIONSHIP VISIBILITY</span>
                <p className="text-xs text-ink font-medium leading-relaxed">
                  No visual representation of how a failing storage node impacted compute workloads.
                </p>
              </div>

              <div className="p-5 bg-surface border border-border rounded-xl space-y-1.5 shadow-xs">
                <span className="text-[12px] font-medium text-muted uppercase block">HIGH COGNITIVE EFFORT</span>
                <p className="text-xs text-ink font-medium leading-relaxed">
                  Operators spent up to 70% of incident triage time simply cross-referencing identifiers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 07 — DISCOVERY / RESEARCH */}
      <section className="py-16 lg:py-20 bg-background border-b border-border">
        <div className="container mx-auto px-5 lg:px-12 xl:px-16 space-y-5">
          <div className="space-y-2">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[10px] font-bold tracking-widest text-primary uppercase">07 /</span>
              <h2 className="text-[10px] font-bold tracking-[0.08em] text-muted uppercase">Research & Discovery</h2>
            </div>
            <h2 className="font-display text-[36px] font-semibold leading-[1] text-ink">
              What I needed to understand.<br /><span className="text-primary">Workflow analysis.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-surface border border-border rounded-xl space-y-3">
              <div className="text-[12px] font-medium text-muted uppercase block">DOMAIN AUDIT</div>
              <h3 className="font-display text-sm font-bold text-ink uppercase">Technical & Telemetry Mapping</h3>
              <p className="text-xs text-muted font-medium leading-relaxed">
                <strong>What we looked at:</strong> API structures, telemetry schemas, and hardware data streams across network, compute, and storage layers.
              </p>
              <p className="text-xs text-ink font-semibold">
                <strong>What it helped us understand:</strong> Backend constraints dictated that progressive data loading was essential for performance.
              </p>
            </div>

            <div className="p-6 bg-surface border border-border rounded-xl space-y-3">
              <div className="text-[12px] font-medium text-muted uppercase block">WORKFLOW ANALYSIS</div>
              <h3 className="font-display text-sm font-bold text-ink uppercase">Incident Triage Walkthroughs</h3>
              <p className="text-xs text-muted font-medium leading-relaxed">
                <strong>What we looked at:</strong> Real-world operational procedures followed by systems engineers during server outages.
              </p>
              <p className="text-xs text-ink font-semibold">
                <strong>What it helped us understand:</strong> Operators don't think in isolated nodes—they think in dependency chains and blast radiuses.
              </p>
            </div>
          </div>

          <div className="p-4 bg-surface border border-border rounded-lg text-center">
            <span className="text-[10px] font-mono font-bold text-muted uppercase">
              NOTE: <span className="text-ink">[ADD ACTUAL DISCOVERY / RESEARCH DETAILS]</span>
            </span>
          </div>
        </div>
      </section>

      {/* SECTION 08 — KEY INSIGHTS */}
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
              <span className="text-[10px] font-bold tracking-widest text-primary uppercase">08 /</span>
              <h2 className="text-[10px] font-bold tracking-[0.08em] text-muted uppercase">Synthesis</h2>
            </div>
            <h2 className="font-display text-[36px] font-semibold leading-[1] text-ink">
              What I learned.<br /><span className="text-primary">Core UX principles.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-4 bg-background border border-border rounded-lg space-y-3 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md group/insight">
              <span className="text-lg font-bold font-mono text-ink group-hover/insight:text-primary transition-colors">01</span>
              <h3 className="font-display text-sm font-bold text-ink uppercase group-hover/insight:text-primary transition-colors">Density ≠ Understanding</h3>
              <p className="text-xs text-muted font-medium leading-relaxed">
                Exposing all telemetry simultaneously creates paralysis. Users need the right information at the exact moment of investigation.
              </p>
            </div>

            <div className="p-4 bg-background border border-border rounded-lg space-y-3 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md group/insight">
              <span className="text-lg font-bold font-mono text-ink group-hover/insight:text-primary transition-colors">02</span>
              <h3 className="font-display text-sm font-bold text-ink uppercase group-hover/insight:text-primary transition-colors">Relationships Need Context</h3>
              <p className="text-xs text-muted font-medium leading-relaxed">
                A system link is only useful when operators understand whether it represents a healthy data flow or a bottleneck.
              </p>
            </div>

            <div className="p-4 bg-background border border-border rounded-lg space-y-3 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md group/insight">
              <span className="text-lg font-bold font-mono text-ink group-hover/insight:text-primary transition-colors">03</span>
              <h3 className="font-display text-sm font-bold text-ink uppercase group-hover/insight:text-primary transition-colors">Progressive Disclosure</h3>
              <p className="text-xs text-muted font-medium leading-relaxed">
                Layering detail keeps the primary interface clean while leaving deep telemetry one click away.
              </p>
            </div>

            <div className="p-4 bg-background border border-border rounded-lg space-y-3 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md group/insight">
              <span className="text-lg font-bold font-mono text-ink group-hover/insight:text-primary transition-colors">04</span>
              <h3 className="font-display text-sm font-bold text-ink uppercase group-hover/insight:text-primary transition-colors">Lead Toward Action</h3>
              <p className="text-xs text-muted font-medium leading-relaxed">
                Observability without action creates friction. Every status badge should offer a direct path to remediation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 09 — OPPORTUNITY (REFRAMING THE PROBLEM) */}
      <section className="py-16 lg:py-20 bg-background border-b border-border text-center">
        <div className="container mx-auto px-5 lg:px-12 xl:px-16 space-y-6">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-[10px] font-bold tracking-widest text-primary uppercase">09 /</span>
            <h2 className="text-[10px] font-bold tracking-[0.08em] text-muted uppercase">Problem Reframing</h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-ink font-mono block">
              HOW MIGHT WE...
            </span>
            <blockquote className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-ink uppercase leading-snug">
              "How might we help infrastructure operators understand complex system relationships while preserving the context they need to investigate and act?"
            </blockquote>
          </div>
        </div>
      </section>

      {/* SECTION 10 — INFORMATION ARCHITECTURE */}
      <section className="py-16 lg:py-20 bg-surface border-b border-border relative overflow-hidden">
        <div className="container mx-auto px-5 lg:px-12 xl:px-16 space-y-5 relative z-10">
          <div className="space-y-2">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[10px] font-bold tracking-widest text-primary uppercase">10 /</span>
              <h2 className="text-[10px] font-bold tracking-[0.08em] text-muted uppercase">System Architecture</h2>
            </div>
            <h2 className="font-display text-[36px] font-semibold leading-[1] text-ink">
              Structuring the complexity.<br /><span className="text-primary">Information architecture.</span>
            </h2>
            <p className="text-sm text-muted font-medium leading-relaxed max-w-2xl">
              The goal was organizing information around how operators investigate problems rather than mirroring flat database structures.
            </p>
          </div>

          {/* IA Diagram Tree */}
          <div className="p-8 bg-background border border-border rounded-xl space-y-6 text-xs">
            <div className="text-[9px] font-bold tracking-widest text-muted uppercase block text-center mb-4">
              UNITYONE OPERATIONAL INFORMATION ARCHITECTURE
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
              <div className="p-4 bg-surface border border-border rounded-lg space-y-2 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xs group/ia">
                <span className="text-[12px] font-medium text-muted uppercase block">OVERVIEW</span>
                <span className="text-xs font-semibold text-ink block uppercase group-hover/ia:text-primary transition-colors">Infrastructure Health</span>
                <span className="text-[10px] text-muted font-medium block">Global Alert Status</span>
              </div>

              <div className="p-4 bg-surface border border-border rounded-lg space-y-2 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xs group/ia">
                <span className="text-[12px] font-medium text-muted uppercase block">TOPOLOGY</span>
                <span className="text-xs font-semibold text-ink block uppercase group-hover/ia:text-primary transition-colors">Network Routing</span>
                <span className="text-[10px] text-muted font-medium block">Compute & Storage Arrays</span>
              </div>

              <div className="p-4 bg-surface border border-border rounded-lg space-y-2 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xs group/ia">
                <span className="text-[12px] font-medium text-muted uppercase block">CONTEXT</span>
                <span className="text-xs font-semibold text-ink block uppercase group-hover/ia:text-primary transition-colors">Node Metrics</span>
                <span className="text-[10px] text-muted font-medium block">Dependency Chains</span>
              </div>

              <div className="p-4 bg-ink text-white rounded-lg space-y-2 transition-all duration-300 hover:-translate-y-1 hover:bg-primary transition-colors">
                <span className="text-[12px] font-medium text-white/80 uppercase block">ACTION</span>
                <span className="text-xs font-semibold text-white block uppercase">Remediation Triggers</span>
                <span className="text-[10px] text-dark-muted font-medium block">Automated Workflows</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 11 — USER FLOW */}
      <section className="py-16 lg:py-20 bg-background border-b border-border relative overflow-hidden">
        {/* Background Ambient Shapes */}
        <div className="absolute -top-10 -right-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <AmbientTechRings className="-top-8 right-12 w-56 h-56 sm:w-64 sm:h-64" />

        <div className="container mx-auto px-5 lg:px-12 xl:px-16 space-y-5 relative z-10">
          <div className="space-y-2">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[10px] font-bold tracking-widest text-primary uppercase">11 /</span>
              <h2 className="text-[10px] font-bold tracking-[0.08em] text-muted uppercase">Operational Journey</h2>
            </div>
            <h2 className="font-display text-[36px] font-semibold leading-[1] text-ink">
              From issue.<br /><span className="text-primary">To action.</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 text-center text-[10px] font-bold">
            {[
              { step: '01', label: 'ISSUE ALERT', desc: 'Operator receives signal' },
              { step: '02', label: 'AFFECTED NODE', desc: 'Locates system component' },
              { step: '03', label: 'CONTEXT', desc: 'Inspects telemetry trends' },
              { step: '04', label: 'RELATIONSHIPS', desc: 'Traces upstream links' },
              { step: '05', label: 'DEPENDENCIES', desc: 'Evaluates blast radius' },
              { step: '06', label: 'DIAGNOSIS', desc: 'Pinpoints root cause' },
              { step: '07', label: 'ACTION', desc: 'Triggers remediation' },
            ].map((s) => (
              <div key={s.step} className="p-3 bg-background border border-border rounded-lg space-y-1 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:bg-primary/5 hover:shadow-xs group/step cursor-pointer">
                <span className="text-[12px] font-medium text-muted block group-hover/step:text-primary transition-colors">{s.step}</span>
                <span className="text-ink block uppercase text-[11px] font-bold group-hover/step:text-primary transition-colors">{s.label}</span>
                <span className="text-[10px] text-muted font-medium block leading-tight">{s.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 12 — DESIGN EXPLORATION */}
      <section className="py-16 lg:py-20 bg-surface border-b border-border relative overflow-hidden">
        <div className="container mx-auto px-5 lg:px-12 xl:px-16 space-y-5 relative z-10">
          <div className="space-y-2">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[10px] font-bold tracking-widest text-primary uppercase">12 /</span>
              <h2 className="text-[10px] font-bold tracking-[0.08em] text-muted uppercase">Iterative Discovery</h2>
            </div>
            <h2 className="font-display text-[36px] font-semibold leading-[1] text-ink">
              Exploring the right model.<br /><span className="text-primary">Design explorations.</span>
            </h2>
          </div>

          {/* Exploration Tabs */}
          <div className="flex flex-wrap items-center gap-2 border-b border-border pb-4">
            {[
              { id: 'EXP1', name: '01 / TABLE DENSE MODEL' },
              { id: 'EXP2', name: '02 / FULL MATRIX GRID' },
              { id: 'EXP3', name: '03 / GRAPH ONLY MODEL' },
              { id: 'FINAL', name: '04 / FINAL PROGRESSIVE MODEL' },
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

          {/* Active Exploration Content */}
          <div className="p-6 bg-background border border-border rounded-xl space-y-4">
            {activeExploration === 'EXP1' && (
              <div className="space-y-3">
                <h3 className="font-display text-base font-bold text-ink uppercase">EXPLORATION 01 — Table Dense Model</h3>
                <p className="text-xs text-muted font-medium leading-relaxed">
                  <strong>What worked:</strong> Provided high data density for experienced engineers familiar with node identifiers.
                </p>
                <p className="text-xs text-muted font-medium leading-relaxed">
                  <strong>What didn't:</strong> Completely failed to communicate cross-layer relationships during multi-node outages.
                </p>
              </div>
            )}

            {activeExploration === 'EXP2' && (
              <div className="space-y-3">
                <h3 className="font-display text-base font-bold text-ink uppercase">EXPLORATION 02 — Full Matrix Grid</h3>
                <p className="text-xs text-muted font-medium leading-relaxed">
                  <strong>What worked:</strong> Visualized all system connections simultaneously in a matrix map.
                </p>
                <p className="text-xs text-muted font-medium leading-relaxed">
                  <strong>What didn't:</strong> Created extreme visual clutter ("node hairball") that increased cognitive fatigue.
                </p>
              </div>
            )}

            {activeExploration === 'EXP3' && (
              <div className="space-y-3">
                <h3 className="font-display text-base font-bold text-ink uppercase">EXPLORATION 03 — Graph Only Model</h3>
                <p className="text-xs text-muted font-medium leading-relaxed">
                  <strong>What worked:</strong> High visual impact and interactive node drag capabilities.
                </p>
                <p className="text-xs text-muted font-medium leading-relaxed">
                  <strong>What didn't:</strong> Lacked structural alignment, making precise metric inspections difficult.
                </p>
              </div>
            )}

            {activeExploration === 'FINAL' && (
              <div className="space-y-3">
                <h3 className="font-display text-base font-bold text-ink uppercase">FINAL DIRECTION — Progressive Context Model</h3>
                <p className="text-xs text-muted font-medium leading-relaxed">
                  <strong>Why selected:</strong> Combined a structured topology layout with progressive disclosure drawers, balancing relationship visibility with precise metric access.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* SECTION 13 — DESIGN DECISIONS */}
      <section className="py-16 lg:py-20 bg-background border-b border-border relative overflow-hidden">
        {/* Background Ambient Shapes */}
        <div className="absolute top-1/3 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <AmbientTechGrid className="top-12 -left-12 w-52 h-52 sm:w-64 sm:h-64" />

        <div className="container mx-auto px-5 lg:px-12 xl:px-16 space-y-5 relative z-10">
          <div className="space-y-2">
            <div className="flex items-center gap-2 mb-3">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-[10px] font-bold tracking-widest text-primary uppercase">13 /</span>
              <h2 className="text-[10px] font-bold tracking-[0.08em] text-muted uppercase">Design Rationale</h2>
            </div>
            <h2 className="font-display text-[36px] font-semibold leading-[1] text-ink">
              Why this approach.<br /><span className="text-primary">UX reasoning.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-surface border border-border rounded-xl space-y-3 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md group/dec">
              <span className="text-[12px] font-medium text-muted uppercase block">DECISION</span>
              <h3 className="font-display text-base font-bold text-ink uppercase group-hover/dec:text-primary transition-colors">PROGRESSIVE DISCLOSURE</h3>
              <p className="text-xs text-muted font-medium leading-relaxed">
                <strong>Problem:</strong> Telemetry overload.<br />
                <strong>Decision:</strong> Show high-level system topology first, revealing granular node health metrics on click.<br />
                <strong>UX Benefit:</strong> Reduces initial cognitive friction while preserving access to deep data.
              </p>
            </div>

            <div className="p-6 bg-surface border border-border rounded-xl space-y-3 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md group/dec">
              <span className="text-[12px] font-medium text-muted uppercase block">DECISION</span>
              <h3 className="font-display text-base font-bold text-ink uppercase group-hover/dec:text-primary transition-colors">CONTEXTUAL PANELS</h3>
              <p className="text-xs text-muted font-medium leading-relaxed">
                <strong>Problem:</strong> Disorientation when drilling down.<br />
                <strong>Decision:</strong> Keep parent-child topology visible alongside detailed node inspector panels.<br />
                <strong>UX Benefit:</strong> Operators maintain mental orientation within the broader environment.
              </p>
            </div>

            <div className="p-6 bg-surface border border-border rounded-xl space-y-3 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md group/dec">
              <span className="text-[12px] font-medium text-muted uppercase block">DECISION</span>
              <h3 className="font-display text-base font-bold text-ink uppercase group-hover/dec:text-primary transition-colors">ACTIONABLE TELEMETRY</h3>
              <p className="text-xs text-muted font-medium leading-relaxed">
                <strong>Problem:</strong> Disconnected remediation.<br />
                <strong>Decision:</strong> Embed operational triggers directly into health alert inspector drawers.<br />
                <strong>UX Benefit:</strong> Moves users immediately from problem diagnosis to action execution.
              </p>
            </div>

            <div className="p-6 bg-surface border border-border rounded-xl space-y-3 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md group/dec">
              <span className="text-[12px] font-medium text-muted uppercase block">DECISION</span>
              <h3 className="font-display text-base font-bold text-ink uppercase group-hover/dec:text-primary transition-colors">CONSISTENT VISUAL LANGUAGE</h3>
              <p className="text-xs text-muted font-medium leading-relaxed">
                <strong>Problem:</strong> Inconsistent status signals.<br />
                <strong>Decision:</strong> Standardize status colors, badges, and icon conventions across all modules.<br />
                <strong>UX Benefit:</strong> Accelerates visual scanning and pattern recognition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 14 — CORE DESIGN MODEL */}
      <section className="py-16 lg:py-20 bg-surface border-b border-border relative overflow-hidden">
        {/* Background Ambient Shapes */}
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <AmbientTechRings className="bottom-0 right-0 w-60 h-60 sm:w-72 sm:h-72" />

        <div className="container mx-auto px-5 lg:px-12 xl:px-16 space-y-5 relative z-10">
          <div className="space-y-2">
            <div className="flex items-center gap-2 mb-3">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-[10px] font-bold tracking-widest text-primary uppercase">14 /</span>
              <h2 className="text-[10px] font-bold tracking-[0.08em] text-muted uppercase">The UX Model</h2>
            </div>
            <h2 className="font-display text-[36px] font-semibold leading-[1] text-ink">
              The Design Model.<br /><span className="text-primary">Four core stages.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-4 bg-background border border-border rounded-lg space-y-3 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md group/stage">
              <span className="text-[12px] font-medium text-muted uppercase block">STAGE</span>
              <h3 className="font-display text-sm font-bold text-ink uppercase group-hover/stage:text-primary transition-colors">STRUCTURE</h3>
              <p className="text-xs text-muted font-medium leading-relaxed">
                Help operators orient themselves instantly within the global data center hierarchy.
              </p>
            </div>

            <div className="p-4 bg-background border border-border rounded-lg space-y-3 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md group/stage">
              <span className="text-[12px] font-medium text-muted uppercase block">STAGE</span>
              <h3 className="font-display text-sm font-bold text-ink uppercase group-hover/stage:text-primary transition-colors">RELATIONSHIPS</h3>
              <p className="text-xs text-muted font-medium leading-relaxed">
                Reveal connected systems, data paths, and upstream dependency chains clearly.
              </p>
            </div>

            <div className="p-4 bg-background border border-border rounded-lg space-y-3 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md group/stage">
              <span className="text-[12px] font-medium text-muted uppercase block">STAGE</span>
              <h3 className="font-display text-sm font-bold text-ink uppercase group-hover/stage:text-primary transition-colors">CONTEXT</h3>
              <p className="text-xs text-muted font-medium leading-relaxed">
                Keep relevant node metrics visible alongside broader system relationships.
              </p>
            </div>

            <div className="p-6 bg-ink text-white rounded-xl space-y-3 transition-all duration-300 hover:bg-primary">
              <span className="text-[12px] font-medium text-white/80 uppercase block">STAGE</span>
              <h3 className="font-display text-sm font-bold uppercase">ACTION</h3>
              <p className="text-xs text-dark-muted font-medium leading-relaxed">
                Provide direct operational controls to resolve anomalies without leaving the interface.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 15 — FINAL SOLUTION */}
      <section className="py-16 lg:py-20 bg-background border-b border-border">
        <div className="container mx-auto px-5 lg:px-12 xl:px-16 space-y-5">
          <div className="space-y-2">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[10px] font-bold tracking-widest text-primary uppercase">15 /</span>
              <h2 className="text-[10px] font-bold tracking-[0.08em] text-muted uppercase">Product Showcase</h2>
            </div>
            <h2 className="font-display text-[36px] font-semibold leading-[1] text-ink">
              The Solution.<br /><span className="text-primary">Unified operations experience.</span>
            </h2>
          </div>

          <div className="space-y-8">
            <div className="overflow-hidden rounded-xl border border-border aspect-[21/9] bg-surface">
              <img
                src={datacenterLg}
                alt="UnityOne Complex Operations Product Showcase"
                className="w-full h-full object-cover filter contrast-110 grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 bg-surface border border-border rounded-lg space-y-1">
                <span className="text-[12px] font-medium text-muted uppercase block">NAVIGATION</span>
                <p className="text-xs text-muted font-medium leading-relaxed">
                  Unified header control plane linking data center clusters.
                </p>
              </div>

              <div className="p-4 bg-surface border border-border rounded-lg space-y-1">
                <span className="text-[12px] font-medium text-muted uppercase block">RELATIONSHIP</span>
                <p className="text-xs text-muted font-medium leading-relaxed">
                  Interactive topology lines representing live data throughput.
                </p>
              </div>

              <div className="p-4 bg-surface border border-border rounded-lg space-y-1">
                <span className="text-[12px] font-medium text-muted uppercase block">CONTEXT</span>
                <p className="text-xs text-muted font-medium leading-relaxed">
                  Side-drawer node inspector exposing live health metrics.
                </p>
              </div>

              <div className="p-4 bg-surface border border-border rounded-lg space-y-1">
                <span className="text-[12px] font-medium text-muted uppercase block">ACTION</span>
                <p className="text-xs text-muted font-medium leading-relaxed">
                  One-click remediation execution directly on active nodes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 16 — TOPOLOGY EXPERIENCE (INTERACTIVE SIMULATOR) */}
      <section className="py-16 lg:py-20 bg-surface relative">
        <div className="container mx-auto px-5 lg:px-12 xl:px-16 space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border pb-4">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[10px] font-bold tracking-widest text-primary uppercase">16 /</span>
                <h2 className="text-[10px] font-bold tracking-[0.08em] text-muted uppercase">Interactive Topology Simulator</h2>
              </div>
              <h2 className="font-display text-[36px] font-semibold leading-[1] text-ink">
                Making infrastructure relationships<br /><span className="text-primary">visible and actionable.</span>
              </h2>
            </div>

            {/* Topology Filters */}
            <div className="flex flex-wrap items-center gap-2">
              {(['ALL', 'NETWORK', 'COMPUTE', 'STORAGE', 'INFRASTRUCTURE', 'OBSERVABILITY'] as const).map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`text-[9px] font-bold tracking-widest uppercase px-3 py-1.5 rounded transition-all font-mono ${activeFilter === filter
                    ? 'bg-ink text-white shadow-xs'
                    : 'bg-background border border-border text-muted hover:text-ink'
                    }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* Topology Interactive Grid */}
          <div className="p-8 bg-background border border-border rounded-xl space-y-8 text-center relative overflow-hidden">
            <span className="text-[8px] font-bold tracking-widest text-muted uppercase font-mono block">
              SANITIZED PORTFOLIO TOPOLOGY SIMULATION · CLICK NODE TO INSPECT
            </span>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center max-w-4xl mx-auto">
              {TOPOLOGY_NODES.map((node) => {
                const Icon = node.icon;
                const isMatch = activeFilter === 'ALL' || node.category === activeFilter;
                const isSelected = selectedNodeId === node.id;

                return (
                  <div
                    key={node.id}
                    onClick={() => setSelectedNodeId(node.id)}
                    className={`p-5 rounded-xl border transition-all cursor-pointer text-left space-y-3 ${isSelected
                      ? 'bg-ink text-white border-ink shadow-md scale-102'
                      : isMatch
                        ? 'bg-surface border-border text-ink hover:border-ink/50'
                        : 'bg-surface/40 border-border/40 text-muted opacity-40'
                      }`}
                  >
                    <div className="flex items-center justify-between">
                      <Icon className="w-5 h-5" />
                      <span className={`text-[9px] font-bold font-mono px-2 py-0.5 rounded ${node.status === 'Operational' ? 'bg-emerald-500/10 text-emerald-600 border border-emerald-500/20' : 'bg-amber-500/10 text-amber-600 border border-amber-500/20'
                        }`}>
                        {node.status}
                      </span>
                    </div>

                    <div>
                      <h4 className="font-display text-sm font-bold uppercase">{node.name}</h4>
                      <span className="text-[10px] font-mono text-muted block">{node.category} LAYER</span>
                    </div>

                    <div className="flex items-center justify-between text-[10px] font-mono pt-2 border-t border-border/40">
                      <span>HEALTH: {node.health}%</span>
                      <span>LINKS: {node.connections}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Selected Node Details Drawer */}
            <div className="p-4 bg-surface border border-border rounded-xl text-left max-w-2xl mx-auto space-y-2">
              <div className="flex items-center justify-between text-xs font-mono font-bold">
                <span className="text-ink uppercase">SELECTED NODE: {selectedNode.name}</span>
                <span className="text-primary uppercase">DOMAIN: {selectedNode.category}</span>
              </div>
              <p className="text-xs text-muted font-medium leading-relaxed">
                Active telemetry context: {selectedNode.connections} upstream connections operating at {selectedNode.health}% health capacity. Remediation workflow triggers available.
              </p>
            </div>
          </div>
        </div>

      </section>

      {/* SECTION 17 — PROGRESSIVE DISCLOSURE */}
      <section className="py-16 lg:py-20 bg-background border-b border-border">
        <div className="container mx-auto px-5 lg:px-12 xl:px-16 space-y-5">
          <div className="space-y-2">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[10px] font-bold tracking-widest text-primary uppercase">17 /</span>
              <h2 className="text-[10px] font-bold tracking-[0.08em] text-muted uppercase">Depth Hierarchy</h2>
            </div>
            <h2 className="font-display text-[36px] font-semibold leading-[1] text-ink">
              Progressive disclosure.<br /><span className="text-primary">Five levels of detail.</span>
            </h2>
          </div>

          <div className="space-y-3 font-mono text-xs">
            {[
              { level: 'LEVEL 01', title: 'GLOBAL OVERVIEW', desc: 'High-level data center health status across all active regions.' },
              { level: 'LEVEL 02', title: 'SYSTEM RELATIONSHIP', desc: 'Topology view exposing data paths between network, compute, and storage layers.' },
              { level: 'LEVEL 03', title: 'COMPONENT DETAIL', desc: 'Granular node inspection panel showing live telemetry metrics.' },
              { level: 'LEVEL 04', title: 'OPERATIONAL CONTEXT', desc: 'Historical alert logs and correlated event timelines.' },
              { level: 'LEVEL 05', title: 'ACTION EXECUTION', desc: 'Direct automated workflow triggers to re-route or resolve issues.' },
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

      {/* SECTION 18 — UI STATES / EDGE CASES */}
      <section className="py-16 lg:py-20 bg-surface relative">
        <div className="container mx-auto px-5 lg:px-12 xl:px-16 space-y-5">
          <div className="space-y-2">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[10px] font-bold tracking-widest text-primary uppercase">18 /</span>
              <h2 className="text-[10px] font-bold tracking-[0.08em] text-muted uppercase">Real-World System States</h2>
            </div>
            <h2 className="font-display text-[36px] font-semibold leading-[1] text-ink">
              Designing for real-world states.<br /><span className="text-primary">Operational edge cases.</span>
            </h2>
          </div>

          {/* State Tabs */}
          <div className="flex flex-wrap items-center gap-2 border-b border-border pb-4">
            {[
              { id: 'NORMAL', name: 'NORMAL STATE' },
              { id: 'WARNING', name: 'WARNING STATE' },
              { id: 'CRITICAL', name: 'CRITICAL STATE' },
              { id: 'EMPTY', name: 'EMPTY / NO LINKS' },
              { id: 'LARGE', name: 'LARGE DATA SET' },
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
          <div className="p-4 bg-background border border-border rounded-lg space-y-3 text-xs font-mono">
            {activeStateTab === 'NORMAL' && (
              <div>
                <span className="font-bold text-emerald-600 block mb-1">NORMAL OPERATIONAL STATE</span>
                <p className="text-muted font-sans font-medium">All telemetry indicators show green status badges. Topology paths display steady data throughput animations.</p>
              </div>
            )}
            {activeStateTab === 'WARNING' && (
              <div>
                <span className="font-bold text-amber-600 block mb-1">WARNING DEGRADED STATE</span>
                <p className="text-muted font-sans font-medium">Amber alerts highlight latency bottlenecks before complete system failure occurs.</p>
              </div>
            )}
            {activeStateTab === 'CRITICAL' && (
              <div>
                <span className="font-bold text-rose-600 block mb-1">CRITICAL INCIDENT STATE</span>
                <p className="text-muted font-sans font-medium">Red visual emphasis directs operator focus immediately to affected upstream nodes.</p>
              </div>
            )}
            {activeStateTab === 'EMPTY' && (
              <div>
                <span className="font-bold text-ink block mb-1">UNCONNECTED NODE STATE</span>
                <p className="text-muted font-sans font-medium">Clear informative messaging explaining standalone system components without broken visual lines.</p>
              </div>
            )}
            {activeStateTab === 'LARGE' && (
              <div>
                <span className="font-bold text-ink block mb-1">HIGH DENSITY SYSTEM STATE</span>
                <p className="text-muted font-sans font-medium">Clustered grouping controls prevent visual chaos when managing 1000+ infrastructure nodes.</p>
              </div>
            )}

            <div className="pt-2 text-[10px] text-muted">
              NOTE: <span className="text-ink font-bold">[ADD ACTUAL PRODUCT STATES IF AVAILABLE]</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 19 — CONSTRAINTS & TRADE-OFFS */}
      <section className="py-16 lg:py-20 bg-background border-b border-border">
        <div className="container mx-auto px-5 lg:px-12 xl:px-16 space-y-5">
          <div className="space-y-2">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[10px] font-bold tracking-widest text-primary uppercase">19 /</span>
              <h2 className="text-[10px] font-bold tracking-[0.08em] text-muted uppercase">Technical & UX Constraints</h2>
            </div>
            <h2 className="font-display text-[36px] font-semibold leading-[1] text-ink">
              Constraints & Trade-offs.<br /><span className="text-primary">Deliberate UX choices.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-surface border border-border rounded-xl space-y-3">
              <span className="text-[12px] font-medium text-muted uppercase block">DESIGN CONSTRAINT</span>
              <h3 className="font-display text-sm font-bold text-ink uppercase">Data Stream Latency</h3>
              <p className="text-xs text-muted font-medium leading-relaxed">
                Backend APIs returned telemetry in asynchronous batches. We couldn't rely on real-time sub-second rendering for every single node.
              </p>
            </div>

            <div className="p-6 bg-surface border border-border rounded-xl space-y-3">
              <span className="text-[12px] font-medium text-muted uppercase block">DELIBERATE TRADE-OFF</span>
              <h3 className="font-display text-sm font-bold text-ink uppercase">Exposures vs Progressive Tracing</h3>
              <p className="text-xs text-muted font-medium leading-relaxed">
                <strong>We considered:</strong> Exposing full 3D topology graphs simultaneously.<br />
                <strong>We chose:</strong> 2D grouped progressive disclosure.<br />
                <strong>Because:</strong> Unfiltered 3D graphs degraded rendering performance and overwhelmed operator focus.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 20 — VALIDATION */}
      <section className="py-16 lg:py-20 bg-surface relative">
        <div className="container mx-auto px-5 lg:px-12 xl:px-16 space-y-5">
          <div className="space-y-2">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[10px] font-bold tracking-widest text-primary uppercase">20 /</span>
              <h2 className="text-[10px] font-bold tracking-[0.08em] text-muted uppercase">Testing & Feedback</h2>
            </div>
            <h2 className="font-display text-[36px] font-semibold leading-[1] text-ink">
              Validating the experience.<br /><span className="text-primary">Operator feedback.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-background border border-border rounded-xl space-y-2">
              <span className="text-[12px] font-medium text-muted uppercase block">WHAT WE TESTED</span>
              <p className="text-xs text-muted font-medium leading-relaxed">
                Interactive prototype walkthroughs with infrastructure operators focusing on incident triage efficiency and mental model accuracy.
              </p>
            </div>

            <div className="p-6 bg-background border border-border rounded-xl space-y-2">
              <span className="text-[12px] font-medium text-muted uppercase block">WHAT WE LEARNED</span>
              <p className="text-xs text-muted font-medium leading-relaxed">
                Operators prioritized fast access to node remediation actions directly from alert badges over static diagnostic metrics.
              </p>
            </div>
          </div>

          <div className="p-4 bg-background border border-border rounded-lg text-center">
            <span className="text-[10px] font-mono font-bold text-muted uppercase">
              NOTE: <span className="text-ink">[ADD ACTUAL VALIDATION / FEEDBACK DETAILS]</span>
            </span>
          </div>
        </div>
      </section>

      {/* SECTION 21 — DESIGN ITERATION */}
      <section className="py-16 lg:py-20 bg-background border-b border-border">
        <div className="container mx-auto px-5 lg:px-12 xl:px-16 space-y-5">
          <div className="space-y-2">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[10px] font-bold tracking-widest text-primary uppercase font-mono">21 /</span>
              <h2 className="text-[10px] font-bold tracking-[0.08em] text-muted uppercase">Evolution</h2>
            </div>
            <h2 className="font-display text-[36px] font-semibold leading-[1] text-ink">
              Design Iteration.<br /><span className="text-primary">Before & after.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs">
            <div className="p-6 bg-surface border border-border rounded-xl space-y-2">
              <span className="text-primary font-bold block">BEFORE</span>
              <h3 className="font-display text-sm font-bold text-ink uppercase font-sans">Flat Telemetry Tables</h3>
              <p className="text-[11px] text-muted font-sans font-medium">
                Disconnected data lists requiring manual mental correlation.
              </p>
            </div>

            <div className="p-6 bg-surface border border-border rounded-xl space-y-2">
              <span className="text-primary font-bold block">ITERATION</span>
              <h3 className="font-display text-sm font-bold text-ink uppercase font-sans">Unfiltered Node Graph</h3>
              <p className="text-[11px] text-muted font-sans font-medium">
                Too much visual noise and overlapping relationship lines.
              </p>
            </div>

            <div className="p-6 bg-ink text-white rounded-xl space-y-2">
              <span className="text-emerald-400 font-bold block">FINAL</span>
              <h3 className="font-display text-sm font-bold uppercase font-sans">Progressive Context UX</h3>
              <p className="text-[11px] text-dark-muted font-sans font-medium">
                Structured topology hierarchy paired with action-oriented side drawers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 22 — OUTCOME */}
      <section className="py-16 lg:py-20 bg-surface relative">
        <div className="container mx-auto px-5 lg:px-12 xl:px-16 space-y-5">
          <div className="space-y-2">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[10px] font-bold tracking-widest text-primary uppercase font-mono">22 /</span>
              <h2 className="text-[10px] font-bold tracking-[0.08em] text-muted uppercase">Project Impact</h2>
            </div>
            <h2 className="font-display text-[36px] font-semibold leading-[1] text-ink">
              Outcome.<br /><span className="text-primary">User, product & business impact.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 bg-background border border-border rounded-lg space-y-3">
              <span className="text-[12px] font-medium text-muted uppercase block">USER OUTCOME</span>
              <h3 className="font-display text-sm font-bold text-ink uppercase">Reduced Cognitive Load</h3>
              <p className="text-xs text-muted font-medium leading-relaxed">
                Operators maintain clear orientation within complex infrastructure environments during high-stress operational incidents.
              </p>
            </div>

            <div className="p-4 bg-background border border-border rounded-lg space-y-3">
              <span className="text-[12px] font-medium text-muted uppercase block">PRODUCT OUTCOME</span>
              <h3 className="font-display text-sm font-bold text-ink uppercase">Scalable Topology Framework</h3>
              <p className="text-xs text-muted font-medium leading-relaxed">
                Established a unified design system framework capable of accommodating future cloud and hybrid infrastructure modules.
              </p>
            </div>

            <div className="p-4 bg-background border border-border rounded-lg space-y-3">
              <span className="text-[12px] font-medium text-muted uppercase block">BUSINESS OUTCOME</span>
              <h3 className="font-display text-sm font-bold text-ink uppercase">Operational Value</h3>
              <p className="text-xs text-muted font-medium leading-relaxed">
                Positioned UnityOne as a premier enterprise IT operations console. <span className="font-mono text-[10px] text-ink font-bold">[ADD ACTUAL PROJECT OUTCOME]</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 23 — MY CONTRIBUTION */}
      <section className="py-16 lg:py-20 bg-background border-b border-border">
        <div className="container mx-auto px-5 lg:px-12 xl:px-16 space-y-5">
          <div className="space-y-2">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[10px] font-bold tracking-widest text-primary uppercase font-mono">23 /</span>
              <h2 className="text-[10px] font-bold tracking-[0.08em] text-muted uppercase">Individual Responsibilities</h2>
            </div>
            <h2 className="font-display text-[36px] font-semibold leading-[1] text-ink">
              My Contribution.<br /><span className="text-primary">Personal role & ownership.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-surface border border-border rounded-xl space-y-2">
              <span className="text-[12px] font-medium text-muted uppercase block">PRODUCT THINKING</span>
              <h3 className="font-display text-sm font-bold text-ink uppercase">Problem Framing</h3>
              <p className="text-xs text-muted font-medium leading-relaxed">
                Defined the core UX strategy of progressive context over flat telemetry tables.
              </p>
            </div>

            <div className="p-6 bg-surface border border-border rounded-xl space-y-2">
              <span className="text-[12px] font-medium text-muted uppercase block">UX ARCHITECTURE</span>
              <h3 className="font-display text-sm font-bold text-ink uppercase">Information Hierarchy</h3>
              <p className="text-xs text-muted font-medium leading-relaxed">
                Structured system navigation and multi-layer dependency relationship models.
              </p>
            </div>

            <div className="p-6 bg-surface border border-border rounded-xl space-y-2">
              <span className="text-[12px] font-medium text-muted uppercase block">DESIGN & PROTOTYPING</span>
              <h3 className="font-display text-sm font-bold text-ink uppercase">Interaction Systems</h3>
              <p className="text-xs text-muted font-medium leading-relaxed">
                Built interactive topology simulators, filter controls, and side drawer inspector UI.
              </p>
            </div>

            <div className="p-6 bg-surface border border-border rounded-xl space-y-2">
              <span className="text-[12px] font-medium text-muted uppercase block">COLLABORATION</span>
              <h3 className="font-display text-sm font-bold text-ink uppercase">Cross-Functional Alignment</h3>
              <p className="text-xs text-muted font-medium leading-relaxed">
                Partnered with product managers and infrastructure engineers to validate technical feasibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 24 — COLLABORATION */}
      <section className="py-16 lg:py-20 bg-surface relative">
        <div className="container mx-auto px-5 lg:px-12 xl:px-16 space-y-5">
          <div className="space-y-2">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[10px] font-bold tracking-widest text-primary uppercase font-mono">24 /</span>
              <h2 className="text-[10px] font-bold tracking-[0.08em] text-muted uppercase">Team Alignment</h2>
            </div>
            <h2 className="font-display text-[36px] font-semibold leading-[1] text-ink">
              Working across disciplines.<br /><span className="text-primary">Cross-functional collaboration.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-background border border-border rounded-xl space-y-2">
              <span className="text-[12px] font-medium text-muted uppercase block">WITH PRODUCT MANAGEMENT</span>
              <p className="text-xs text-muted font-medium leading-relaxed">
                Aligned product roadmap priorities with essential operator workflow requirements.
              </p>
            </div>

            <div className="p-6 bg-background border border-border rounded-xl space-y-2">
              <span className="text-[12px] font-medium text-muted uppercase block">WITH INFRASTRUCTURE ENGINEERING</span>
              <p className="text-xs text-muted font-medium leading-relaxed">
                Designed UI patterns compatible with backend data streaming throughput limits.
              </p>
            </div>

            <div className="p-6 bg-background border border-border rounded-xl space-y-2">
              <span className="text-[12px] font-medium text-muted uppercase block">WITH DOMAIN EXPERTS</span>
              <p className="text-xs text-muted font-medium leading-relaxed">
                Validated domain terminology and status color conventions with active SRE specialists.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 25 — LEARNINGS */}
      <section className="py-16 lg:py-20 bg-background border-b border-border">
        <div className="container mx-auto px-5 lg:px-12 xl:px-16 space-y-5">
          <div className="space-y-2">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[10px] font-bold tracking-widest text-primary uppercase font-mono">25 /</span>
              <h2 className="text-[10px] font-bold tracking-[0.08em] text-muted uppercase">Reflection</h2>
            </div>
            <h2 className="font-display text-[36px] font-semibold leading-[1] text-ink">
              What I learned.<br /><span className="text-primary">Enterprise UX principles.</span>
            </h2>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-muted font-medium leading-relaxed max-w-3xl">
            <p>
              Designing complex enterprise software taught me that simplicity in enterprise UX does not mean removing necessary information. Instead, true simplicity is achieved by structuring complexity—making system relationships visual and giving operators intuitive control over how much technical detail they inspect.
            </p>
            <p className="font-bold text-ink">
              Key takeaway: Operational telemetry becomes powerful only when it directly guides operators toward informed action.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 26 — FINAL TAKEAWAY */}
      <section className="py-16 lg:py-20 bg-surface border-b border-border text-center relative overflow-hidden">
        <div className="container mx-auto px-5 lg:px-12 xl:px-16 space-y-6">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-[10px] font-bold tracking-widest text-primary uppercase font-mono">26 /</span>
            <h2 className="text-[10px] font-bold tracking-[0.08em] text-muted uppercase">Conclusion</h2>
          </div>
          <h2 className="font-display text-[36px] font-semibold leading-[1] text-ink">
            From Information.<br /><span className="text-primary">To Understanding.</span>
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-mono font-bold text-ink">
            <span className="p-2 bg-background border border-border rounded">INFRASTRUCTURE</span>
            <span>➔</span>
            <span className="p-2 bg-background border border-border rounded">RELATIONSHIPS</span>
            <span>➔</span>
            <span className="p-2 bg-background border border-border rounded">CONTEXT</span>
            <span>➔</span>
            <span className="p-2 bg-ink text-white rounded">ACTION</span>
          </div>
        </div>
      </section>

      {/* SECTION 27 — MORE CASE STUDIES IN UNITYONE */}
      <section className="py-16 lg:py-20 bg-background border-t border-border">
        <div className="container mx-auto px-5 lg:px-12 xl:px-16 space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] font-bold tracking-widest text-primary uppercase">27 /</span>
                <h2 className="text-[10px] font-bold tracking-[0.08em] text-muted uppercase font-mono">More Case Studies</h2>
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
            {/* Case Study 02 — AI Assistant */}
            <div className="p-8 bg-surface border border-border rounded-2xl flex flex-col justify-between space-y-6 group hover:border-ink/40 transition-all duration-300 shadow-xs">
              <div className="space-y-4">
                <div className="overflow-hidden rounded-xl border border-border aspect-[16/9] bg-background relative">
                  <img
                    src={laptopDcMed}
                    alt="AI Assistant Operational Workflows"
                    className="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-surface/90 backdrop-blur-xs border border-border px-2.5 py-1 rounded text-[9px] font-bold font-mono text-primary uppercase">
                    02 / AI ASSISTANT
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
                  state={{ from: '/work/unityone/complex-it-operations', fromLabel: 'COMPLEX IT' }}
                  className="inline-flex items-center text-[11px] font-bold tracking-widest uppercase text-primary transition-colors relative group/link"
                >
                  READ CASE STUDY
                  <FiArrowUpRight className="ml-1.5 w-4 h-4 text-primary group-hover/link:-translate-y-1 group-hover/link:translate-x-1 transition-transform" />
                  <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-primary transition-colors"></span>
                </Link>
              </div>
            </div>

            {/* Case Study 03 — Reporting & Data */}
            <div className="p-8 bg-surface border border-border rounded-2xl flex flex-col justify-between space-y-6 group hover:border-ink/40 transition-all duration-300 shadow-xs">
              <div className="space-y-4">
                <div className="overflow-hidden rounded-xl border border-border aspect-[16/9] bg-background relative">
                  <img
                    src={dataMiningMed}
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
                    Enterprise users often need to understand large volumes of operational data quickly. The challenge was designing reporting and data experiences that help users identify patterns.
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
                  state={{ from: '/work/unityone/complex-it-operations', fromLabel: 'COMPLEX IT' }}
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
