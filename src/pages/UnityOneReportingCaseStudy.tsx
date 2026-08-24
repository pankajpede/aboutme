import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiCheck, FiBarChart2 } from '../components/ui/Icons';
import { ScrollToTopWidget } from '../components/ui/ScrollToTopWidget';
import dataMiningLg from '../assets/images/case-study/data-mining-large.jpg';

export default function UnityOneReportingCaseStudy() {
  const [timeRange, setTimeRange] = useState<'7D' | '30D' | '90D'>('30D');

  const reportData = {
    '7D': { uptime: '99.98%', incidents: '2 Resolved', load: '64%', trend: [40, 65, 55, 80, 70, 60, 64] },
    '30D': { uptime: '99.94%', incidents: '7 Resolved', load: '72%', trend: [50, 60, 75, 90, 85, 78, 72] },
    '90D': { uptime: '99.91%', incidents: '18 Resolved', load: '68%', trend: [60, 70, 65, 85, 75, 80, 68] },
  };

  const currentReport = reportData[timeRange];

  return (
    <div id="reporting-study" className="py-20 lg:py-28 bg-background text-ink relative">
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
                REPORTING & DATA
              </li>
            </ol>
          </nav>
          <span className="text-[10px] font-mono font-bold text-muted uppercase">
            CASE STUDY 03 OF 03
          </span>
        </div>

        {/* Case Study Title Header */}
        <div className="space-y-6 max-w-4xl">
          <div className="text-[10px] font-bold tracking-[0.15em] text-muted uppercase flex items-center gap-2 font-mono">
            <span className="w-2 h-2 rounded-full bg-ink"></span>
            03 / UNITYONE · REPORTING & DATA
          </div>

          <h1 className="font-display text-[clamp(36px,5vw,60px)] font-bold tracking-tight text-ink leading-tight uppercase">
            From operational data to decisions.
          </h1>

          <p className="text-base sm:text-lg text-muted font-medium leading-relaxed">
            Enterprise users often need to understand large volumes of operational data quickly. The challenge was designing reporting and data experiences that help users identify patterns, compare information and move from data toward decisions.
          </p>

          {/* Metadata Bar */}
          <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-6 p-6 bg-surface border border-border rounded-xl">
            <div>
              <span className="text-[9px] font-bold tracking-widest text-muted uppercase block mb-1 font-mono">ROLE</span>
              <span className="text-xs font-bold text-ink uppercase block font-display">Senior Product Designer</span>
            </div>
            <div>
              <span className="text-[9px] font-bold tracking-widest text-muted uppercase block mb-1 font-mono">FOCUS</span>
              <span className="text-xs font-bold text-ink uppercase block font-display">Data Visualization & Dashboards</span>
            </div>
            <div>
              <span className="text-[9px] font-bold tracking-widest text-muted uppercase block mb-1 font-mono">DOMAIN</span>
              <span className="text-xs font-bold text-ink uppercase block font-display">Reporting UX</span>
            </div>
            <div>
              <span className="text-[9px] font-bold tracking-widest text-muted uppercase block mb-1 font-mono">DATA</span>
              <span className="text-xs font-bold text-ink uppercase block font-display">Sanitized Portfolio Metrics</span>
            </div>
          </div>
        </div>

        {/* Section 1: The Problem */}
        <div className="p-8 sm:p-12 bg-surface border border-border rounded-2xl space-y-6">
          <span className="text-[9px] font-bold tracking-widest text-muted uppercase font-mono block">
            SECTION 01 / THE PROBLEM
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-ink uppercase">
            Overwhelming Data & Static Reports
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-muted font-medium leading-relaxed">
            <p>
              IT infrastructure monitoring generates massive volumes of time-series data. Traditional reporting often exported static spreadsheets or dense charts without clear visual hierarchy, making it difficult for stakeholders to evaluate overall system health or identify trends.
            </p>
            <p>
              The reporting UX design focused on creating dynamic, interactive views where operators and managers could quickly filter timeframes, compare operational parameters, and draw actionable conclusions.
            </p>
          </div>
        </div>

        {/* Section 2: UX Challenge Flow */}
        <div className="p-8 sm:p-12 bg-background border border-border rounded-2xl space-y-6 text-center">
          <span className="text-[9px] font-bold tracking-widest text-muted uppercase font-mono block">
            SECTION 02 / REPORTING UX VALUE FLOW
          </span>

          <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-bold font-mono text-ink">
            <span className="px-3 py-1.5 bg-surface border border-border rounded">OPERATIONAL DATA</span>
            <span className="text-muted">➔</span>
            <span className="px-3 py-1.5 bg-surface border border-border rounded">VISUAL HIERARCHY</span>
            <span className="text-muted">➔</span>
            <span className="px-3 py-1.5 bg-surface border border-border rounded">TREND PATTERNS</span>
            <span className="text-muted">➔</span>
            <span className="px-3 py-1.5 bg-ink text-dark-text rounded shadow-2xs">DECISION</span>
          </div>
        </div>

        {/* Section 3: Interactive Reporting Dashboard Prototype */}
        <div className="p-8 sm:p-12 bg-surface border border-border rounded-2xl space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border pb-4">
            <div>
              <span className="text-[9px] font-bold tracking-widest text-muted uppercase font-mono block">
                SECTION 03 / SYSTEM VISUALIZATION & INTERACTIVE PROTOTYPE
              </span>
              <h3 className="font-display text-xl font-bold text-ink uppercase">
                Interactive Operational Report Dashboard
              </h3>
            </div>

            {/* Time Range Filter Controls */}
            <div className="flex items-center gap-2">
              {(['7D', '30D', '90D'] as const).map((range) => (
                <button
                  key={range}
                  onClick={() => setTimeRange(range)}
                  className={`text-[9px] font-bold tracking-widest uppercase px-3 py-1.5 rounded transition-all ${
                    timeRange === range
                      ? 'bg-ink text-dark-text shadow-xs'
                      : 'bg-background border border-border text-muted hover:text-ink'
                  }`}
                >
                  {range}
                </button>
              ))}
            </div>
          </div>

          {/* Large Hero Case Study Editorial Image */}
          <div className="overflow-hidden rounded-xl border border-border aspect-[21/9] bg-background">
            <img
              src={dataMiningLg}
              alt="UnityOne Operational Data Analytics & Mining Environment"
              className="w-full h-full object-cover filter contrast-110 grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>

          {/* Interactive Report Simulation Container */}
          <div className="p-6 sm:p-8 bg-background border border-border rounded-xl space-y-6">
            <div className="flex items-center justify-between border-b border-border pb-3">
              <div className="flex items-center gap-2">
                <FiBarChart2 className="w-4 h-4 text-ink" />
                <span className="text-[10px] font-bold tracking-widest text-ink uppercase font-mono">OPERATIONAL HEALTH REPORT</span>
              </div>
              <span className="text-[8px] font-bold font-mono px-2.5 py-0.5 rounded bg-surface border border-border text-muted">
                SANITIZED PORTFOLIO DATA
              </span>
            </div>

            {/* Summary KPIs */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 bg-surface border border-border rounded-lg">
                <span className="text-[9px] font-bold tracking-widest text-muted uppercase font-mono block">SYSTEM UPTIME</span>
                <span className="font-display text-2xl font-bold text-ink">{currentReport.uptime}</span>
              </div>

              <div className="p-4 bg-surface border border-border rounded-lg">
                <span className="text-[9px] font-bold tracking-widest text-muted uppercase font-mono block">INCIDENTS</span>
                <span className="font-display text-2xl font-bold text-ink">{currentReport.incidents}</span>
              </div>

              <div className="p-4 bg-surface border border-border rounded-lg">
                <span className="text-[9px] font-bold tracking-widest text-muted uppercase font-mono block">AVG INFRA LOAD</span>
                <span className="font-display text-2xl font-bold text-ink">{currentReport.load}</span>
              </div>
            </div>

            {/* Trend Bar Chart Simulation */}
            <div className="p-5 bg-surface border border-border rounded-lg space-y-3">
              <span className="text-[9px] font-bold tracking-widest text-muted uppercase font-mono block">
                THROUGHPUT TREND ({timeRange})
              </span>

              <div className="h-32 flex items-end justify-between gap-2 pt-4 px-2">
                {currentReport.trend.map((val, idx) => (
                  <div key={idx} className="flex-1 flex flex-col items-center gap-2">
                    <div
                      className="w-full bg-ink rounded-t transition-all duration-500"
                      style={{ height: `${val}%` }}
                    ></div>
                    <span className="text-[8px] font-mono text-muted">T{idx + 1}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Section 4: Key Design Decisions */}
        <div className="p-8 sm:p-12 bg-surface border border-border rounded-2xl space-y-8">
          <span className="text-[9px] font-bold tracking-widest text-muted uppercase font-mono block">
            SECTION 04 / KEY DESIGN DECISIONS
          </span>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 bg-background border border-border rounded-xl space-y-2">
              <span className="font-mono text-xs font-bold text-ink block">01</span>
              <h4 className="font-display text-base font-bold text-ink uppercase">VISUAL HIERARCHY</h4>
              <p className="text-xs text-muted font-medium leading-relaxed">
                Position high-level health KPIs at the top, followed by trend graphs and detailed status tables.
              </p>
            </div>

            <div className="p-6 bg-background border border-border rounded-xl space-y-2">
              <span className="font-mono text-xs font-bold text-ink block">02</span>
              <h4 className="font-display text-base font-bold text-ink uppercase">INTERACTIVE TIMEFRAMES</h4>
              <p className="text-xs text-muted font-medium leading-relaxed">
                Allow operators to switch between 7-day, 30-day and custom time ranges without page reloads.
              </p>
            </div>

            <div className="p-6 bg-background border border-border rounded-xl space-y-2">
              <span className="font-mono text-xs font-bold text-ink block">03</span>
              <h4 className="font-display text-base font-bold text-ink uppercase">CONSISTENT STATUS COLORS</h4>
              <p className="text-xs text-muted font-medium leading-relaxed">
                Enforce explicit typographic badges and high-contrast indicators for system status distribution.
              </p>
            </div>

            <div className="p-6 bg-background border border-border rounded-xl space-y-2">
              <span className="font-mono text-xs font-bold text-ink block">04</span>
              <h4 className="font-display text-base font-bold text-ink uppercase">EXPORT & SHARING</h4>
              <p className="text-xs text-muted font-medium leading-relaxed">
                Designed role-specific reporting views tailored for both operational teams and executive leadership.
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
                <span>Clearer data visibility for complex operational environments.</span>
              </li>
              <li className="flex items-center gap-2">
                <FiCheck className="w-4 h-4 text-ink shrink-0" />
                <span>More structured transition from monitoring data to decisions.</span>
              </li>
              <li className="flex items-center gap-2">
                <FiCheck className="w-4 h-4 text-ink shrink-0" />
                <span>A unified reporting framework across infrastructure modules.</span>
              </li>
            </ul>
          </div>

          <div className="p-8 bg-background border border-border rounded-2xl space-y-4">
            <span className="text-[9px] font-bold tracking-widest text-muted uppercase font-mono block">
              SECTION 06 / WHAT I LEARNED
            </span>
            <h3 className="font-display text-xl font-bold text-ink uppercase">Personal Reflection</h3>
            <p className="text-xs text-muted font-medium leading-relaxed">
              Designing data-dense reporting taught me that effective visualization is not about displaying all data at once — it is about guiding the user's eye to patterns that support confident decision making.
            </p>
          </div>
        </div>

        {/* Case Study Bottom Navigation */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-6">
          <Link
            to="/work/unityone/ai-assistant"
            className="inline-flex items-center text-[11px] font-bold tracking-widest uppercase text-muted hover:text-ink transition-colors group"
          >
            <FiArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            PREVIOUS: CASE STUDY 02 (AI ASSISTANT)
          </Link>

          <Link
            to="/work/unityone"
            className="inline-flex items-center text-[11px] font-bold tracking-widest uppercase text-ink hover:text-muted transition-colors group"
          >
            BACK TO UNITYONE OVERVIEW
          </Link>
        </div>

      </div>
    </div>
  );
}
