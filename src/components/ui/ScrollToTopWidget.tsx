import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FiArrowUp } from './Icons';

export type SectionInfo = {
  id: string;
  label: string;
};

const HOME_SECTIONS: SectionInfo[] = [
  { id: 'hero-overview', label: 'Overview' },
  { id: 'learning-sharing', label: 'Certifications' },
  { id: 'about-career', label: 'Career' },
  { id: 'selected-work', label: 'Work' },
  { id: 'thinking-building', label: 'How I Think' },
  { id: 'recognition-cta', label: 'Connect' },
];

const UNITYONE_OVERVIEW_SECTIONS: SectionInfo[] = [
  { id: 'unityone-case-studies', label: 'Case Studies' },
];

type Props = {
  sections?: SectionInfo[];
  defaultLabel?: string;
};

export function ScrollToTopWidget({ sections, defaultLabel }: Props) {
  const location = useLocation();
  const [visible, setVisible] = useState(false);
  const [activeLabel, setActiveLabel] = useState(defaultLabel || 'Overview');
  const [progress, setProgress] = useState(0);

  // Determine active section set based on current pathname if not explicitly passed
  let activeSections = sections;
  if (!activeSections) {
    if (location.pathname === '/') {
      activeSections = HOME_SECTIONS;
    } else if (location.pathname === '/work/unityone') {
      activeSections = UNITYONE_OVERVIEW_SECTIONS;
    } else if (location.pathname === '/work/unityone/complex-it-operations') {
      activeSections = [{ id: 'complex-it-study', label: 'Complex IT' }];
    } else if (location.pathname === '/work/unityone/ai-assistant') {
      activeSections = [{ id: 'ai-assistant-study', label: 'AI Assistant' }];
    } else if (location.pathname === '/work/unityone/reporting-data') {
      activeSections = [{ id: 'reporting-study', label: 'Reporting' }];
    } else if (location.pathname === '/work') {
      activeSections = [{ id: 'work-page-header', label: 'Selected Work' }];
    } else {
      activeSections = [{ id: 'top', label: 'Top' }];
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = Math.min(1, Math.max(0, scrollHeight > 0 ? scrollY / scrollHeight : 0));
      
      setProgress(currentProgress);
      setVisible(scrollY > 150);

      // Section detection logic based on viewport scroll position
      let current = defaultLabel || (activeSections && activeSections[0]?.label) || 'Overview';
      if (activeSections && activeSections.length > 0) {
        for (const sec of activeSections) {
          const el = document.getElementById(sec.id);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= window.innerHeight * 0.5 && rect.bottom >= 100) {
              current = sec.label;
            }
          }
        }
      }
      setActiveLabel(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname, activeSections, defaultLabel]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // SVG Circular Progress Calculation
  const radius = 19;
  const circumference = 2 * Math.PI * radius; // ~119.38
  const strokeDashoffset = circumference - progress * circumference;

  return (
    <div
      className={`fixed bottom-2 right-[-10px] z-40 w-32 flex flex-col items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        visible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-6 pointer-events-none'
      }`}
    >
      {/* Outline Progress Ring Button Container with Hover Tooltip */}
      <div className="relative flex flex-col items-center group/btn">
        
        {/* Tooltip on Hover */}
        <div className="opacity-0 group-hover/btn:opacity-100 group-hover/btn:-translate-y-1 transition-all duration-200 pointer-events-none absolute -top-9 bg-ink text-dark-text text-[9px] font-bold tracking-widest uppercase px-2.5 py-1 rounded shadow-md whitespace-nowrap z-50">
          GO TO TOP
          <div className="w-1.5 h-1.5 bg-ink rotate-45 absolute -bottom-0.5 left-1/2 -translate-x-1/2"></div>
        </div>

        {/* Circular Progress Indicator + Outline Button */}
        <button
          onClick={scrollToTop}
          aria-label="Go to top of page"
          className="relative w-11 h-11 rounded-full flex items-center justify-center bg-background border border-border/40 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-ink"
        >
          {/* SVG Circular Progress Ring */}
          <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none" viewBox="0 0 44 44">
            {/* Background Track Circle */}
            <circle
              cx="22"
              cy="22"
              r={radius}
              fill="none"
              stroke="var(--color-border)"
              strokeWidth="2.5"
              className="opacity-40"
            />
            {/* Active Scroll Progress Circle */}
            <circle
              cx="22"
              cy="22"
              r={radius}
              fill="none"
              stroke="var(--color-ink)"
              strokeWidth="2.5"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              className="transition-all duration-150 ease-out"
            />
          </svg>

          {/* Center Up-Arrow Icon */}
          <FiArrowUp className="w-4 h-4 text-ink relative z-10 group-hover/btn:-translate-y-0.5 transition-transform" />
        </button>
      </div>

      {/* Current Section Name Label Below Icon */}
      <span className="w-full capitalize text-center text-[10px] font-semibold text-ink mt-1 font-display transition-all duration-300 drop-shadow-xs">
        {activeLabel}
      </span>
    </div>
  );
}
