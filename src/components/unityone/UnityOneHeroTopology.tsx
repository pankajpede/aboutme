import { useState, useEffect } from 'react';
import { FiServer, FiCloud, FiActivity, FiCpu, FiDatabase, FiCheck, FiSliders } from '../ui/Icons';

type DomainFilter = 'ALL' | 'INFRASTRUCTURE' | 'OBSERVABILITY' | 'CLOUD' | 'OPERATIONS';

type NodeItem = {
  id: string;
  name: string;
  category: 'INFRASTRUCTURE' | 'OBSERVABILITY' | 'CLOUD' | 'OPERATIONS';
  status: string;
  health: string;
  systems: number;
  icon: any;
  x: number;
  y: number;
};

const NODES: NodeItem[] = [
  { id: 'dcim', name: 'DCIM', category: 'INFRASTRUCTURE', status: 'Optimal', health: '99%', systems: 14, icon: FiServer, x: 20, y: 25 },
  { id: 'aiops', name: 'AIOPS', category: 'OPERATIONS', status: 'Active', health: '97%', systems: 18, icon: FiCpu, x: 50, y: 15 },
  { id: 'hcmp', name: 'HCMP', category: 'CLOUD', status: 'Operational', health: '98%', systems: 22, icon: FiCloud, x: 80, y: 25 },
  { id: 'cloud', name: 'CLOUD', category: 'CLOUD', status: 'Optimal', health: '99%', systems: 30, icon: FiCloud, x: 20, y: 75 },
  { id: 'infra', name: 'INFRASTRUCTURE', category: 'INFRASTRUCTURE', status: 'Operational', health: '96%', systems: 42, icon: FiDatabase, x: 50, y: 85 },
  { id: 'obs', name: 'OBSERVABILITY', category: 'OBSERVABILITY', status: 'Monitoring', health: '98%', systems: 28, icon: FiActivity, x: 80, y: 75 },
];

export function UnityOneHeroTopology() {
  const [activeFilter, setActiveFilter] = useState<DomainFilter>('ALL');
  const [selectedNodeId, setSelectedNodeId] = useState<string>('dcim');
  const [isPaused, setIsPaused] = useState<boolean>(false);

  // Auto-cycle filters faster (2000ms delay) unless paused by hover/click
  useEffect(() => {
    if (isPaused) return;
    const filters: DomainFilter[] = ['ALL', 'INFRASTRUCTURE', 'OBSERVABILITY', 'CLOUD', 'OPERATIONS'];

    const timer = setInterval(() => {
      setActiveFilter((prev) => {
        const nextIdx = (filters.indexOf(prev) + 1) % filters.length;
        const nextFilter = filters[nextIdx];

        // Auto-select corresponding node for active category
        if (nextFilter !== 'ALL') {
          const matchedNode = NODES.find((n) => n.category === nextFilter);
          if (matchedNode) setSelectedNodeId(matchedNode.id);
        } else {
          setSelectedNodeId('dcim');
        }

        return nextFilter;
      });
    }, 2000);

    return () => clearInterval(timer);
  }, [isPaused]);

  const activeNode = NODES.find((n) => n.id === selectedNodeId) || NODES[0];

  const isNodeActive = (node: NodeItem) => {
    if (activeFilter === 'ALL') return true;
    return node.category === activeFilter;
  };

  return (
    <div
      className="w-full bg-background border border-border p-5 sm:p-6 lg:p-7 relative rounded-xl shadow-md overflow-hidden"
    >
      {/* Simulation Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border pb-4 mb-5">
        <div className="flex items-center gap-2 text-[10px] font-bold tracking-widest text-muted uppercase">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse-soft"></span>
          <span>UNITYONE TOPOLOGY SIMULATION</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[9px] font-bold font-mono px-2 py-0.5 rounded bg-primary/10 border border-primary/20 text-primary">
            LIVE 2.0S CYCLE
          </span>
          <span className="text-[9px] font-bold tracking-widest uppercase px-2 py-0.5 rounded bg-primary/10 border border-primary/20 text-primary">
            UNIFIED CONTROL PLANE
          </span>
        </div>
      </div>

      {/* Domain Interactive Filter Controls */}
      <div className="flex flex-wrap items-center gap-2 mb-6 border-b border-border/60 pb-4">
        <div className="text-[9px] font-bold tracking-widest text-muted uppercase mr-2 flex items-center gap-1.5">
          <FiSliders className="w-3 h-3 text-primary" />
          <span>FILTER DOMAIN:</span>
        </div>
        {(['ALL', 'INFRASTRUCTURE', 'OBSERVABILITY', 'CLOUD', 'OPERATIONS'] as DomainFilter[]).map((f) => (
          <button
            key={f}
            onClick={() => {
              setActiveFilter(f);
              if (f !== 'ALL') {
                const matchedNode = NODES.find((n) => n.category === f);
                if (matchedNode) setSelectedNodeId(matchedNode.id);
              }
              setIsPaused(true);
            }}
            className={`text-[9px] font-bold tracking-widest uppercase px-3 py-1.5 rounded transition-all duration-200 ${activeFilter === f
              ? 'bg-primary/15 text-primary border border-primary/40 font-bold shadow-xs'
              : 'bg-background border border-border text-muted hover:text-primary hover:border-primary/40'
              }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Topology Canvas Diagram */}
      <div className="relative w-full aspect-[16/10] min-h-[300px] sm:min-h-[340px] bg-background border border-border rounded-lg overflow-hidden p-4 flex flex-col justify-between">

        {/* SVG Network Connections Layer */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
          {/* Central Hub Lines */}
          {NODES.map((node) => {
            const active = isNodeActive(node);
            return (
              <line
                key={node.id}
                x1={node.x}
                y1={node.y}
                x2={50}
                y2={50}
                stroke={active ? 'var(--color-primary)' : 'var(--color-border)'}
                strokeWidth={active ? '0.6' : '0.35'}
                strokeDasharray={active ? '2 1' : 'none'}
                opacity={active ? 0.6 : 0.2}
                className={active ? 'animate-pulse' : ''}
              />
            );
          })}
        </svg>

        {/* Central UnityOne Control Hub Node */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-primary/15 text-primary border-2 border-primary/40 shadow-md shadow-primary/10 flex items-center justify-center font-display text-[11px] sm:text-xs font-bold tracking-widest uppercase text-center p-2 group transition-transform hover:scale-105">
            ONE.ai
          </div>
          <span className="text-[8px] font-bold tracking-widest uppercase text-primary mt-1.5 bg-background/90 px-2 py-0.5 rounded border border-primary/20">
            UNIFIED VIEW
          </span>
        </div>

        {/* Outer Domain Nodes */}
        {NODES.map((node) => {
          const active = isNodeActive(node);
          const isSelected = selectedNodeId === node.id;
          const NodeIcon = node.icon;

          return (
            <button
              key={node.id}
              onClick={() => {
                setSelectedNodeId(node.id);
                setIsPaused(true);
              }}
              style={{ top: `${node.y}%`, left: `${node.x}%` }}
              className={`absolute -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center group transition-all duration-300 ${active ? 'opacity-100 scale-100' : 'opacity-35 scale-95'
                }`}
            >
              <div
                className={`w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center transition-all shadow-xs ${isSelected
                  ? 'bg-primary/15 border-2 border-primary text-primary shadow-xs'
                  : active
                    ? 'bg-surface border border-primary/40 text-primary group-hover:bg-primary/15'
                    : 'bg-surface/50 border border-border text-muted'
                  }`}
              >
                <NodeIcon className="w-4 h-4" />
              </div>
              <span className="text-[8px] font-bold tracking-wider uppercase mt-1 text-ink bg-background/80 backdrop-blur-xs px-1.5 py-0.5 rounded border border-border/60">
                {node.name}
              </span>
            </button>
          );
        })}

        {/* Bottom Context Inspector Badge */}
        <div className="relative z-30 mt-auto pt-2 flex items-center justify-between bg-surface/90 backdrop-blur-md border border-border rounded-md p-2.5">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded bg-primary/15 border border-primary/30 text-primary flex items-center justify-center shrink-0">
              <FiCheck className="w-3.5 h-3.5" />
            </div>
            <div>
              <div className="text-[9px] font-bold tracking-widest text-ink uppercase">
                {activeNode.name} · CONTEXT INSPECTOR
              </div>
              <div className="text-[8px] text-muted font-medium">
                {activeNode.category} DOMAIN ACTIVE
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 text-[9px] font-mono">
            <div>
              <span className="text-muted block text-[7px] uppercase">STATUS</span>
              <span className="font-bold text-ink">{activeNode.status}</span>
            </div>
            <div>
              <span className="text-muted block text-[7px] uppercase">HEALTH</span>
              <span className="font-bold text-ink">{activeNode.health}</span>
            </div>
            <div>
              <span className="text-muted block text-[7px] uppercase">SYSTEMS</span>
              <span className="font-bold text-ink">{activeNode.systems}</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
