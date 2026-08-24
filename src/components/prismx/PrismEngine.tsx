import { useState, useEffect } from 'react';
import {
  FiSettings,
  FiSliders,
  FiType,
  FiLayers,
  FiCheck,
} from '../ui/Icons';

export type ThemePreset = {
  id: string;
  name: string;
  primary: string;
  surface: string;
  border: string;
  accent: string;
  radius: string;
  fontDisplay: string;
};

export const THEME_PRESETS: ThemePreset[] = [
  {
    id: 'monochrome',
    name: 'MONOCHROME',
    primary: '#242425',
    surface: '#F4EEE1',
    border: '#E0D7C5',
    accent: '#242425',
    radius: '8px',
    fontDisplay: 'Clash Display',
  },
  {
    id: 'purple',
    name: 'PURPLE SYSTEM',
    primary: '#6757D9',
    surface: '#F7F6FC',
    border: '#DDD9F0',
    accent: '#6757D9',
    radius: '12px',
    fontDisplay: 'Clash Display',
  },
  {
    id: 'coral',
    name: 'WARM CORAL',
    primary: '#C75A1E',
    surface: '#FAF5F1',
    border: '#E6D8D0',
    accent: '#C75A1E',
    radius: '4px',
    fontDisplay: 'Clash Display',
  },
  {
    id: 'green',
    name: 'DEEP GREEN',
    primary: '#355C4A',
    surface: '#F4F7F3',
    border: '#D6DED7',
    accent: '#355C4A',
    radius: '16px',
    fontDisplay: 'Clash Display',
  },
];

export function PrismEngine() {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const [cursorTargetIdx, setCursorTargetIdx] = useState<number>(0);
  const [isClicking, setIsClicking] = useState<boolean>(false);
  const [isPaused, _setIsPaused] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'theme' | 'type' | 'components'>('theme');
  const [_signalAnimating, setSignalAnimating] = useState<boolean>(false);

  const currentTheme = THEME_PRESETS[activeIdx];

  // Manual theme selection
  const handleSelectTheme = (idx: number) => {
    setActiveIdx(idx);
    setCursorTargetIdx(idx);
    setSignalAnimating(true);
    setTimeout(() => setSignalAnimating(false), 700);
  };

  // Choreographed Cursor Move -> Click -> Theme Change Animation Loop
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches || isPaused || activeTab !== 'theme') return;

    const interval = setInterval(() => {
      // Step 1: Determine next theme index
      const nextIdx = (activeIdx + 1) % THEME_PRESETS.length;

      // Step 2: Move cursor pointer to next menu item
      setCursorTargetIdx(nextIdx);

      // Step 3: Trigger click animation after cursor arrives (~600ms)
      setTimeout(() => {
        setIsClicking(true);

        // Step 4: Execute theme change on click (~250ms)
        setTimeout(() => {
          setIsClicking(false);
          setActiveIdx(nextIdx);
          setSignalAnimating(true);
          setTimeout(() => setSignalAnimating(false), 700);
        }, 250);
      }, 600);

    }, 3600);

    return () => clearInterval(interval);
  }, [activeIdx, isPaused, activeTab]);

  return (
    <div
      className="w-full bg-background border border-border rounded-xl shadow-md overflow-hidden flex flex-col relative select-none transition-colors duration-500"
    >
      {/* 01. PANEL HEADER */}
      <div className="h-10 border-b border-border bg-surface/80 px-4 sm:px-5 flex items-center justify-between text-[10px] sm:text-[11px] font-bold tracking-wider text-ink">
        <div className="flex items-center gap-2">
          <FiSettings className="w-3.5 h-3.5 text-muted animate-spin-slow" />
          <span className="font-display tracking-widest uppercase">PRISMX PLATFORM ENGINE</span>
        </div>

        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          <span className="text-[9px] tracking-widest font-bold text-primary uppercase">
            LIVE ANIMATING
          </span>
        </div>
      </div>

      {/* 02. MAIN TWO-COLUMN SIMULATION ENGINE */}
      <div className="grid grid-cols-12 min-h-[380px] sm:min-h-[420px] relative overflow-hidden">

        {/* LEFT CONTROL PANEL (42% width on desktop) */}
        <div className="col-span-12 sm:col-span-5 md:col-span-5 border-r border-border bg-background p-4 sm:p-5 flex flex-col justify-between relative">

          <div className="space-y-5 relative">

            {/* Control Navigation Tabs */}
            <div className="flex items-center justify-between border-b border-border pb-3">
              <button
                onClick={() => setActiveTab('theme')}
                className={`flex items-center gap-1.5 text-[10px] font-bold tracking-wider uppercase transition-colors ${activeTab === 'theme' ? 'text-primary border-b-2 border-primary -mb-[13px] pb-2' : 'text-muted hover:text-ink'}`}
              >
                <FiSliders className="w-3 h-3" />
                THEME
              </button>

              <button
                onClick={() => setActiveTab('type')}
                className={`flex items-center gap-1.5 text-[10px] font-bold tracking-wider uppercase transition-colors ${activeTab === 'type' ? 'text-primary border-b-2 border-primary -mb-[13px] pb-2' : 'text-muted hover:text-ink'}`}
              >
                <FiType className="w-3 h-3" />
                TYPE
              </button>

              <button
                onClick={() => setActiveTab('components')}
                className={`flex items-center gap-1.5 text-[10px] font-bold tracking-wider uppercase transition-colors ${activeTab === 'components' ? 'text-primary border-b-2 border-primary -mb-[13px] pb-2' : 'text-muted hover:text-ink'}`}
              >
                <FiLayers className="w-3 h-3" />
                RADIUS
              </button>
            </div>

            {/* TAB 1: THEME SELECTOR WITH ANIMATED CURSOR */}
            {activeTab === 'theme' && (
              <div className="space-y-4 relative">
                <div className="text-[9px] font-bold tracking-widest text-muted uppercase">
                  ACTIVE SYSTEM TOKENS
                </div>

                <div className="space-y-2.5 relative">

                  {/* ANIMATED MOUSE CURSOR POINTER */}
                  {!isPaused && (
                    <div
                      className="absolute z-40 pointer-events-none transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] flex items-center gap-1"
                      style={{
                        top: `${cursorTargetIdx * 46 + 10}px`,
                        left: '70%',
                        transform: isClicking ? 'scale(0.85) translateY(2px)' : 'scale(1)',
                      }}
                    >
                      {/* SVG Cursor Arrow */}
                      <svg className="w-5 h-5 text-primary drop-shadow-sm fill-primary" viewBox="0 0 24 24">
                        <path d="M3 3l7 18 3-7 7-3L3 3z" stroke="white" strokeWidth="1.5" />
                      </svg>

                      {/* Click Ripple Effect */}
                      {isClicking && (
                        <span className="w-4 h-4 rounded-full bg-primary/40 animate-ping absolute -top-1 -left-1"></span>
                      )}
                    </div>
                  )}

                  {THEME_PRESETS.map((preset, idx) => {
                    const isSelected = idx === activeIdx;
                    const isCursorHovered = idx === cursorTargetIdx && !isPaused;

                    return (
                      <button
                        key={preset.id}
                        onClick={() => handleSelectTheme(idx)}
                        className={`w-full p-2.5 rounded-lg border text-left transition-all duration-300 flex items-center justify-between group ${isSelected
                            ? 'border-primary/40 bg-primary/10 text-primary shadow-xs scale-[1.01]'
                            : isCursorHovered
                              ? 'border-primary/30 bg-primary/5'
                              : 'border-border bg-background hover:bg-surface/50'
                          }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <span
                            className="w-4 h-4 rounded-full border border-black/10 shadow-xs transition-transform group-hover:scale-110"
                            style={{ backgroundColor: preset.primary }}
                          ></span>
                          <span className="text-[10px] font-bold tracking-wide text-ink uppercase">
                            {preset.name}
                          </span>
                        </div>

                        <div className="flex items-center gap-1.5">
                          <span className="text-[9px] font-mono text-muted font-semibold">
                            {preset.primary}
                          </span>
                          {isSelected && <FiCheck className="w-3 h-3 text-primary" />}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* TAB 2: TYPOGRAPHY CONFIGURATION */}
            {activeTab === 'type' && (
              <div className="space-y-4">
                <div className="text-[9px] font-bold tracking-widest text-muted uppercase">
                  TYPOGRAPHY SCHEMA
                </div>

                <div className="p-3 bg-surface border border-border rounded-lg space-y-3">
                  <div>
                    <div className="text-[9px] text-muted uppercase font-semibold">DISPLAY FAMILY</div>
                    <div className="font-display text-xs font-bold text-ink">Clash Display (Variable)</div>
                  </div>
                  <div className="border-t border-border pt-2">
                    <div className="text-[9px] text-muted uppercase font-semibold">BODY SCALE</div>
                    <div className="text-xs font-medium text-ink">Proportional Modular 1.25</div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: COMPONENT CONFIGURATION */}
            {activeTab === 'components' && (
              <div className="space-y-4">
                <div className="text-[9px] font-bold tracking-widest text-muted uppercase">
                  BORDER RADIUS DENSITY
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {['4px', '8px', '12px', '16px'].map((r) => (
                    <div
                      key={r}
                      className={`p-2.5 border rounded-lg text-center transition-all ${currentTheme.radius === r ? 'border-ink bg-surface font-bold text-ink' : 'border-border text-muted'
                        }`}
                    >
                      <span className="text-[10px] font-mono">{r}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Bottom Takeaway Badge */}
          <div className="pt-4 border-t border-border flex items-center justify-between text-[9px] font-bold tracking-widest uppercase text-muted">
            <span>CONFIGURED TOKENS</span>
            <span className="text-ink font-mono">{currentTheme.primary}</span>
          </div>

        </div>

        {/* RIGHT PREVIEW PANEL (58% width on desktop) */}
        <div
          className="col-span-12 sm:col-span-7 md:col-span-7 p-4 sm:p-5 flex flex-col justify-between transition-colors duration-700 ease-out"
          style={{
            backgroundColor: currentTheme.surface,
          }}
        >
          {/* Miniature SaaS Application Preview Wrapper */}
          <div
            className="w-full bg-white border rounded-lg shadow-sm overflow-hidden flex flex-col transition-all duration-700 ease-out"
            style={{
              borderColor: currentTheme.border,
              borderRadius: currentTheme.radius,
            }}
          >
            {/* Top Miniature Navbar */}
            <div
              className="h-8 px-3 border-b flex items-center justify-between text-[9px] font-bold tracking-wider transition-colors duration-700"
              style={{
                borderColor: currentTheme.border,
                backgroundColor: currentTheme.surface,
              }}
            >
              <div className="flex items-center gap-2">
                <span
                  className="w-2.5 h-2.5 rounded-full transition-colors duration-700"
                  style={{ backgroundColor: currentTheme.primary }}
                ></span>
                <span className="text-black/80 font-display">APP DASHBOARD</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[8px] px-1.5 py-0.5 rounded bg-black/5 text-black/60">LIVE</span>
                <span
                  className="w-4 h-4 rounded-full border flex items-center justify-center text-[7px] font-bold text-white transition-colors duration-700"
                  style={{ backgroundColor: currentTheme.primary }}
                >
                  P
                </span>
              </div>
            </div>

            {/* Dashboard Content Grid */}
            <div className="p-3.5 space-y-3">

              {/* Heading & Action */}
              <div className="flex items-center justify-between">
                <div>
                  <h4
                    className="font-display text-xs sm:text-sm font-bold transition-colors duration-700 leading-tight"
                    style={{ color: currentTheme.primary }}
                  >
                    Analytics Overview
                  </h4>
                  <p className="text-[8px] text-black/50 font-medium">Real-time generated system output</p>
                </div>

                <button
                  className="px-2.5 py-1 text-[8px] font-bold tracking-wider uppercase text-white transition-all duration-700 shadow-xs"
                  style={{
                    backgroundColor: currentTheme.primary,
                    borderRadius: currentTheme.radius,
                  }}
                >
                  EXPORT
                </button>
              </div>

              {/* Metric Cards Row */}
              <div className="grid grid-cols-2 gap-2">
                <div
                  className="p-2 border rounded transition-all duration-700"
                  style={{
                    borderColor: currentTheme.border,
                    backgroundColor: currentTheme.surface,
                    borderRadius: currentTheme.radius,
                  }}
                >
                  <div className="text-[8px] text-black/50 font-bold uppercase">REVENUE</div>
                  <div className="text-xs font-bold text-black/90 font-mono">$48,250</div>
                </div>

                <div
                  className="p-2 border rounded transition-all duration-700"
                  style={{
                    borderColor: currentTheme.border,
                    backgroundColor: currentTheme.surface,
                    borderRadius: currentTheme.radius,
                  }}
                >
                  <div className="text-[8px] text-black/50 font-bold uppercase">ACTIVE USERS</div>
                  <div className="text-xs font-bold text-black/90 font-mono">1,280</div>
                </div>
              </div>

              {/* Data Visualization Bars */}
              <div
                className="p-2.5 border rounded space-y-1.5 transition-all duration-700"
                style={{
                  borderColor: currentTheme.border,
                  borderRadius: currentTheme.radius,
                }}
              >
                <div className="flex justify-between text-[8px] text-black/60 font-bold uppercase">
                  <span>MONTHLY GROWTH</span>
                  <span>+14.2%</span>
                </div>

                <div className="flex items-end gap-1.5 h-10 pt-1">
                  {[40, 65, 45, 85, 60, 95, 75].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t transition-all duration-700"
                      style={{
                        height: `${h}%`,
                        backgroundColor: i === 5 ? currentTheme.primary : currentTheme.border,
                      }}
                    ></div>
                  ))}
                </div>
              </div>

              {/* Table / List Item */}
              <div
                className="p-2 border rounded flex items-center justify-between text-[8px] font-medium transition-all duration-700"
                style={{
                  borderColor: currentTheme.border,
                  borderRadius: currentTheme.radius,
                }}
              >
                <div className="flex items-center gap-2">
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: currentTheme.primary }}
                  ></span>
                  <span className="font-bold text-black/80">System Configuration Model</span>
                </div>
                <span
                  className="px-1.5 py-0.5 rounded text-[7px] font-bold text-white transition-colors duration-700"
                  style={{ backgroundColor: currentTheme.primary }}
                >
                  ACTIVE
                </span>
              </div>

            </div>
          </div>

          {/* Final Takeaway Statement */}
          <div className="mt-3 pt-3 border-t border-black/10 flex items-center justify-between">
            <span className="text-[9px] font-bold tracking-widest uppercase text-black/60 font-display">
              ONE SYSTEM. MULTIPLE EXPERIENCES.
            </span>
            <span
              className="text-[8px] font-bold tracking-widest px-2 py-0.5 rounded text-white transition-colors duration-700"
              style={{ backgroundColor: currentTheme.primary }}
            >
              {currentTheme.name}
            </span>
          </div>

        </div>

      </div>
    </div>
  );
}
