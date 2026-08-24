import { useState } from 'react';
import { FiActivity } from '../ui/Icons';

type ReportEnv = 'All' | 'Production' | 'Staging';
type ReportSev = 'All' | 'Critical' | 'High' | 'Medium';
type ReportTime = '24 Hours' | '7 Days' | '30 Days';

type IncidentRow = {
  id: string;
  incident: string;
  system: string;
  severity: 'Critical' | 'High' | 'Medium';
  status: 'Resolved' | 'Investigating' | 'Monitoring';
  duration: string;
  updated: string;
  env: ReportEnv;
};

const ALL_INCIDENTS: IncidentRow[] = [
  { id: 'inc-101', incident: 'API Gateway Latency Spike', system: 'API Gateway Node 02', severity: 'Critical', status: 'Investigating', duration: '28m', updated: '2m ago', env: 'Production' },
  { id: 'inc-102', incident: 'PostgreSQL Connection Timeout', system: 'Database Cluster A', severity: 'Critical', status: 'Monitoring', duration: '45m', updated: '5m ago', env: 'Production' },
  { id: 'inc-103', incident: 'Redis Cache Memory Pressure', system: 'Application Cache', severity: 'High', status: 'Resolved', duration: '12m', updated: '18m ago', env: 'Production' },
  { id: 'inc-104', incident: 'Storage I/O Quota Reached', system: 'Staging SAN Storage', severity: 'Medium', status: 'Resolved', duration: '34m', updated: '1h ago', env: 'Staging' },
  { id: 'inc-105', incident: 'Staging Deploy Pipeline Halted', system: 'CI/CD Cluster', severity: 'High', status: 'Resolved', duration: '19m', updated: '2h ago', env: 'Staging' },
];

export function ReportingSection() {
  const [envFilter, setEnvFilter] = useState<ReportEnv>('All');
  const [sevFilter, setSevFilter] = useState<ReportSev>('All');
  const [timeFilter, setTimeFilter] = useState<ReportTime>('7 Days');

  // Filter Incident Data Rows
  const filteredIncidents = ALL_INCIDENTS.filter((row) => {
    const matchEnv = envFilter === 'All' || row.env === envFilter;
    const matchSev = sevFilter === 'All' || row.severity === sevFilter;
    return matchEnv && matchSev;
  });

  // Calculate Deterministic KPIs based on selected filters
  const totalCount = filteredIncidents.length * (timeFilter === '24 Hours' ? 4 : timeFilter === '7 Days' ? 24 : 85);
  const resolvedCount = Math.floor(totalCount * 0.87);
  const criticalCount = filteredIncidents.filter((i) => i.severity === 'Critical').length * (timeFilter === '24 Hours' ? 2 : 5);
  const mttr = timeFilter === '24 Hours' ? '32m' : timeFilter === '7 Days' ? '42m' : '38m';

  const chartHeights = timeFilter === '24 Hours' ? [45, 60, 35, 80, 50, 95, 70] : timeFilter === '7 Days' ? [65, 85, 55, 90, 75, 60, 80] : [80, 70, 90, 65, 85, 75, 95];

  const focusPoints = ['Information Hierarchy', 'Data Visualization', 'Filtering', 'Drill-down & Context'];
  const tags = ['DATA EXPERIENCE', 'INFORMATION DESIGN', 'DATA VISUALIZATION', 'INSIGHT DESIGN'];

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
              REPORTING & DATA EXPERIENCE
            </h2>

            <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-ink leading-tight mb-6">
              Turning operational data into actionable insight.
            </h3>

            <p className="text-base text-muted font-medium leading-relaxed mb-8 max-w-lg">
              Designing reporting experiences that help users move from raw operational data to trends, context and actionable insight.
            </p>

            {/* Focus List */}
            <div className="mb-8 p-4 bg-surface border border-border rounded-lg space-y-2">
              <div className="text-[9px] font-bold tracking-widest text-muted uppercase mb-3">
                REPORTING DESIGN FOCUS
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

          {/* RIGHT COLUMN: Interactive Enterprise Reporting Visual Interface */}
          <div className="lg:col-span-7">
            <div className="bg-surface border border-border rounded-xl p-5 sm:p-6 lg:p-7 shadow-xs">
              
              {/* Report Header Bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border pb-4 mb-5">
                <div>
                  <div className="text-[10px] font-bold tracking-widest text-ink uppercase flex items-center gap-2">
                    <FiActivity className="w-4 h-4 text-ink" />
                    <span>OPERATIONAL PERFORMANCE REPORT</span>
                  </div>
                  <div className="text-[8px] text-muted font-mono mt-0.5">FILTER ➔ DATA ➔ INSIGHT</div>
                </div>
                <div className="text-[9px] font-bold tracking-widest uppercase px-2.5 py-0.5 rounded bg-background border border-border text-muted">
                  ENTERPRISE DATA VIEW
                </div>
              </div>

              {/* Filter Controls Bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6 p-3 bg-background border border-border rounded-lg text-[9px] font-bold uppercase">
                {/* Environment Filter */}
                <div className="flex items-center gap-2">
                  <span className="text-[8px] text-muted">ENVIRONMENT:</span>
                  <div className="flex gap-1">
                    {(['All', 'Production', 'Staging'] as ReportEnv[]).map((e) => (
                      <button
                        key={e}
                        onClick={() => setEnvFilter(e)}
                        className={`px-2 py-1 rounded text-[8px] transition-all ${
                          envFilter === e ? 'bg-ink text-dark-text' : 'bg-surface text-muted border border-border'
                        }`}
                      >
                        {e}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Severity Filter */}
                <div className="flex items-center gap-2">
                  <span className="text-[8px] text-muted">SEVERITY:</span>
                  <div className="flex gap-1">
                    {(['All', 'Critical', 'High'] as ReportSev[]).map((s) => (
                      <button
                        key={s}
                        onClick={() => setSevFilter(s)}
                        className={`px-2 py-1 rounded text-[8px] transition-all ${
                          sevFilter === s ? 'bg-ink text-dark-text' : 'bg-surface text-muted border border-border'
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Time Range Filter */}
                <div className="flex items-center gap-2">
                  <span className="text-[8px] text-muted">TIME:</span>
                  <div className="flex gap-1">
                    {(['24 Hours', '7 Days', '30 Days'] as ReportTime[]).map((t) => (
                      <button
                        key={t}
                        onClick={() => setTimeFilter(t)}
                        className={`px-2 py-1 rounded text-[8px] transition-all ${
                          timeFilter === t ? 'bg-ink text-dark-text' : 'bg-surface text-muted border border-border'
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* KPI Summary Cards Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                <div className="p-3 bg-background border border-border rounded-lg">
                  <span className="text-[7px] font-bold text-muted uppercase tracking-widest block">TOTAL INCIDENTS</span>
                  <span className="font-display text-xl sm:text-2xl font-bold text-ink">{totalCount}</span>
                </div>
                <div className="p-3 bg-background border border-border rounded-lg">
                  <span className="text-[7px] font-bold text-muted uppercase tracking-widest block">RESOLVED</span>
                  <span className="font-display text-xl sm:text-2xl font-bold text-ink">{resolvedCount}</span>
                </div>
                <div className="p-3 bg-background border border-border rounded-lg">
                  <span className="text-[7px] font-bold text-muted uppercase tracking-widest block">CRITICAL</span>
                  <span className="font-display text-xl sm:text-2xl font-bold text-amber-700">{criticalCount}</span>
                </div>
                <div className="p-3 bg-background border border-border rounded-lg">
                  <span className="text-[7px] font-bold text-muted uppercase tracking-widest block">MTTR</span>
                  <span className="font-display text-xl sm:text-2xl font-bold text-ink">{mttr}</span>
                </div>
              </div>

              {/* Simple Trend Distribution Bar Chart */}
              <div className="p-3.5 bg-background border border-border rounded-lg mb-6">
                <div className="flex items-center justify-between text-[8px] font-bold text-muted uppercase tracking-widest mb-3">
                  <span>INCIDENT TREND DISTRIBUTION ({timeFilter.toUpperCase()})</span>
                  <span>PEAK 95%</span>
                </div>
                <div className="flex items-end gap-2 h-14 pt-2">
                  {chartHeights.map((h, idx) => (
                    <div key={idx} className="flex-1 bg-surface border border-border rounded-t flex flex-col justify-end overflow-hidden h-full">
                      <div
                        style={{ height: `${h}%` }}
                        className="w-full bg-ink transition-all duration-500 ease-out"
                      ></div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Enterprise Incident Data Table */}
              <div className="bg-background border border-border rounded-lg overflow-hidden">
                <div className="p-2.5 bg-surface border-b border-border text-[9px] font-bold tracking-widest text-muted uppercase flex justify-between items-center">
                  <span>INCIDENT LOG ({filteredIncidents.length} RECORDS)</span>
                  <span className="text-[8px] font-mono">REAL-TIME SYNC</span>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-[10px]">
                    <thead>
                      <tr className="border-b border-border bg-surface/50 text-[8px] font-bold text-muted uppercase tracking-wider">
                        <th className="p-2.5">INCIDENT</th>
                        <th className="p-2.5">SYSTEM</th>
                        <th className="p-2.5">SEVERITY</th>
                        <th className="p-2.5">STATUS</th>
                        <th className="p-2.5">DURATION</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border/60">
                      {filteredIncidents.map((row) => (
                        <tr key={row.id} className="hover:bg-surface/60 transition-colors">
                          <td className="p-2.5 font-bold text-ink">{row.incident}</td>
                          <td className="p-2.5 text-muted font-mono text-[9px]">{row.system}</td>
                          <td className="p-2.5">
                            <span className={`px-1.5 py-0.5 rounded text-[8px] font-bold uppercase ${
                              row.severity === 'Critical' ? 'bg-amber-100 text-amber-800 border border-amber-300' : 'bg-surface border border-border text-ink'
                            }`}>
                              {row.severity}
                            </span>
                          </td>
                          <td className="p-2.5">
                            <span className="text-[9px] font-medium text-ink flex items-center gap-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-ink"></span>
                              {row.status}
                            </span>
                          </td>
                          <td className="p-2.5 font-mono text-[9px] text-muted">{row.duration}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
