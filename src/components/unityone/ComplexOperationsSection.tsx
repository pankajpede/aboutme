import { useState } from 'react';
import { FiServer, FiCloud, FiActivity, FiCpu, FiDatabase, FiLayers } from '../ui/Icons';

type FilterType = 'ALL' | 'INFRASTRUCTURE' | 'CLOUD' | 'OBSERVABILITY' | 'OPERATIONS';

type TopologyNode = {
  id: string;
  label: string;
  domain: FilterType;
  status: 'Operational' | 'Warning' | 'Critical';
  health: number;
  connections: number;
  icon: any;
  col: number; // 1: top, 2: mid, 3: bottom
};

const NODES: TopologyNode[] = [
  { id: 'dcim', label: 'DCIM Cluster', domain: 'INFRASTRUCTURE', status: 'Operational', health: 99, connections: 14, icon: FiServer, col: 1 },
  { id: 'cloud-aws', label: 'AWS Multi-Cloud', domain: 'CLOUD', status: 'Operational', health: 98, connections: 24, icon: FiCloud, col: 1 },
  { id: 'obs-metrics', label: 'Metrics Pipeline', domain: 'OBSERVABILITY', status: 'Operational', health: 97, connections: 18, icon: FiActivity, col: 1 },
  
  { id: 'ai-engine', label: 'AIOps Core Engine', domain: 'OPERATIONS', status: 'Operational', health: 100, connections: 36, icon: FiCpu, col: 2 },
  { id: 'hcmp-broker', label: 'HCMP Broker', domain: 'CLOUD', status: 'Warning', health: 91, connections: 19, icon: FiLayers, col: 2 },
  
  { id: 'infra-storage', label: 'SAN Storage Array', domain: 'INFRASTRUCTURE', status: 'Operational', health: 98, connections: 12, icon: FiDatabase, col: 3 },
  { id: 'ops-workflow', label: 'Automation Flow', domain: 'OPERATIONS', status: 'Operational', health: 99, connections: 22, icon: FiCpu, col: 3 },
];

export function ComplexOperationsSection() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('ALL');
  const [selectedNodeId, setSelectedNodeId] = useState<string>('ai-engine');

  const selectedNode = NODES.find((n) => n.id === selectedNodeId) || NODES[3];

  const isNodeActive = (node: TopologyNode) => {
    if (activeFilter === 'ALL') return true;
    return node.domain === activeFilter;
  };

  const focusPoints = ['Information Architecture', 'Operational Workflows', 'Navigation', 'System Relationships'];
  const tags = ['PRODUCT DESIGN', 'UX ARCHITECTURE', 'COMPLEX SYSTEMS', 'WORKFLOW DESIGN'];

  return (
    <section id="experience-01" className="py-20 lg:py-28 border-b border-border bg-background">
      <div className="container mx-auto px-5 lg:px-12 xl:px-16">
        
        {/* Experience 01: Odd Section -> Content Left / Visual Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: Content */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            
            <div className="text-[10px] sm:text-[11px] font-bold tracking-[0.15em] uppercase text-muted mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-ink"></span>
              01 / EXPERIENCE 01
            </div>

            <h2 className="font-display text-xs font-bold tracking-[0.2em] uppercase text-muted mb-2">
              COMPLEX IT OPERATIONS
            </h2>

            <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-ink leading-tight mb-6">
              Making complex IT operations understandable and actionable.
            </h3>

            <p className="text-base text-muted font-medium leading-relaxed mb-8 max-w-lg">
              Designing an experience that brings multiple operational systems and infrastructure contexts into a clearer, more navigable product experience.
            </p>

            {/* Focus List */}
            <div className="mb-8 p-4 bg-surface border border-border rounded-lg space-y-2">
              <div className="text-[9px] font-bold tracking-widest text-muted uppercase mb-3">
                UX ARCHITECTURE FOCUS
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

            {/* Tags */}
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

          {/* RIGHT COLUMN: Interactive Network Topology Visual */}
          <div className="lg:col-span-7">
            <div className="bg-surface border border-border rounded-xl p-5 sm:p-6 lg:p-7 shadow-xs">
              
              {/* Topology Bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border pb-4 mb-5">
                <div className="text-[10px] font-bold tracking-widest text-muted uppercase">
                  ENTERPRISE TOPOLOGY MAP
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[9px] font-mono font-bold px-2 py-0.5 rounded bg-background border border-border text-muted">
                    INTERACTIVE UX PREVIEW
                  </span>
                </div>
              </div>

              {/* Filter Buttons */}
              <div className="flex flex-wrap items-center gap-1.5 mb-6">
                {(['ALL', 'INFRASTRUCTURE', 'CLOUD', 'OBSERVABILITY', 'OPERATIONS'] as FilterType[]).map((f) => (
                  <button
                    key={f}
                    onClick={() => setActiveFilter(f)}
                    className={`text-[9px] font-bold tracking-widest uppercase px-3 py-1.5 rounded transition-all duration-200 ${
                      activeFilter === f
                        ? 'bg-ink text-dark-text shadow-xs'
                        : 'bg-background border border-border text-muted hover:text-ink'
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>

              {/* Topology Diagram Container */}
              <div className="bg-background border border-border rounded-lg p-5 min-h-[300px] flex flex-col justify-between relative overflow-hidden">
                
                {/* Node Grid Layout */}
                <div className="grid grid-cols-3 gap-4 items-center min-h-[200px] relative z-10">
                  
                  {/* Column 1: Source Clusters */}
                  <div className="space-y-4">
                    {NODES.filter((n) => n.col === 1).map((node) => {
                      const active = isNodeActive(node);
                      const isSelected = selectedNodeId === node.id;
                      const Icon = node.icon;
                      return (
                        <button
                          key={node.id}
                          onClick={() => setSelectedNodeId(node.id)}
                          className={`w-full p-3 rounded-lg border text-left transition-all duration-300 flex items-center justify-between group ${
                            isSelected
                              ? 'bg-ink text-dark-text border-ink shadow-xs scale-[1.02]'
                              : active
                              ? 'bg-surface border-ink/60 text-ink hover:bg-surface-soft'
                              : 'bg-surface/30 border-border/60 text-muted opacity-40'
                          }`}
                        >
                          <div className="flex items-center gap-2.5 min-w-0">
                            <Icon className="w-4 h-4 shrink-0" />
                            <span className="text-[11px] font-bold truncate">{node.label}</span>
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  {/* Column 2: Core Hub */}
                  <div className="space-y-4">
                    {NODES.filter((n) => n.col === 2).map((node) => {
                      const active = isNodeActive(node);
                      const isSelected = selectedNodeId === node.id;
                      const Icon = node.icon;
                      return (
                        <button
                          key={node.id}
                          onClick={() => setSelectedNodeId(node.id)}
                          className={`w-full p-3 rounded-lg border text-left transition-all duration-300 flex items-center justify-between group ${
                            isSelected
                              ? 'bg-ink text-dark-text border-ink shadow-xs scale-[1.02]'
                              : active
                              ? 'bg-surface border-ink/60 text-ink hover:bg-surface-soft'
                              : 'bg-surface/30 border-border/60 text-muted opacity-40'
                          }`}
                        >
                          <div className="flex items-center gap-2.5 min-w-0">
                            <Icon className="w-4 h-4 shrink-0" />
                            <span className="text-[11px] font-bold truncate">{node.label}</span>
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  {/* Column 3: Downstream Target Operations */}
                  <div className="space-y-4">
                    {NODES.filter((n) => n.col === 3).map((node) => {
                      const active = isNodeActive(node);
                      const isSelected = selectedNodeId === node.id;
                      const Icon = node.icon;
                      return (
                        <button
                          key={node.id}
                          onClick={() => setSelectedNodeId(node.id)}
                          className={`w-full p-3 rounded-lg border text-left transition-all duration-300 flex items-center justify-between group ${
                            isSelected
                              ? 'bg-ink text-dark-text border-ink shadow-xs scale-[1.02]'
                              : active
                              ? 'bg-surface border-ink/60 text-ink hover:bg-surface-soft'
                              : 'bg-surface/30 border-border/60 text-muted opacity-40'
                          }`}
                        >
                          <div className="flex items-center gap-2.5 min-w-0">
                            <Icon className="w-4 h-4 shrink-0" />
                            <span className="text-[11px] font-bold truncate">{node.label}</span>
                          </div>
                        </button>
                      );
                    })}
                  </div>

                </div>

                {/* Selected Node Details Inspector */}
                <div className="mt-5 pt-3 border-t border-border flex items-center justify-between bg-surface p-3 rounded-md">
                  <div>
                    <div className="text-[9px] font-bold tracking-widest text-muted uppercase">SELECTED NODE</div>
                    <div className="font-display text-xs font-bold text-ink">{selectedNode.label}</div>
                  </div>
                  <div className="flex items-center gap-4 text-[9px] font-mono">
                    <div>
                      <span className="text-muted block text-[7px]">STATUS</span>
                      <span className={`font-bold ${selectedNode.status === 'Warning' ? 'text-amber-700' : 'text-ink'}`}>
                        {selectedNode.status}
                      </span>
                    </div>
                    <div>
                      <span className="text-muted block text-[7px]">HEALTH</span>
                      <span className="font-bold text-ink">{selectedNode.health}%</span>
                    </div>
                    <div>
                      <span className="text-muted block text-[7px]">CONNECTIONS</span>
                      <span className="font-bold text-ink">{selectedNode.connections}</span>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
