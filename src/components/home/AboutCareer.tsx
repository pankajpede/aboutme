import { SectionLabel } from '../ui/SectionLabel';
import { FiArrowUpRight } from '../ui/Icons';
import { Link } from 'react-router-dom';

type CareerStageItem = {
  number: string;
  period: string;
  company: string;
  role: string;
  stage: string;
  description: string;
  isCurrent?: boolean;
  isNext?: boolean;
};

const CAREER_STAGES: CareerStageItem[] = [
  {
    number: '01',
    period: '2013–2017',
    company: 'ENOSIS SOFTWARE SOLUTIONS',
    role: 'WEB DESIGNER',
    stage: 'FOCUS: DIGITAL INTERFACES',
    description: 'Started with web design, building a foundation in visual design, responsive interfaces and digital experiences.',
  },
  {
    number: '02',
    period: '2017–2018',
    company: 'BENCHMARK IT SOLUTIONS LLC',
    role: 'UX DESIGNER',
    stage: 'FOCUS: USER EXPERIENCE',
    description: 'Moved from designing interfaces toward understanding users, flows and interaction.',
  },
  {
    number: '03',
    period: '2018–2022',
    company: 'INTELLIGENT MACHINES LAB',
    role: 'SR. UX UI DESIGNER',
    stage: 'FOCUS: COMPLEX PRODUCTS',
    description: 'Expanded into more complex digital products, workflows, systems and connected experiences.',
  },
  {
    number: '04',
    period: '2022–PRESENT',
    company: 'UNITEDLAYER',
    role: 'SR. UX DESIGNER',
    stage: 'FOCUS: PRODUCT DESIGN',
    isCurrent: true,
    description: 'Working across complex digital products, enterprise experiences, systems, AI-assisted experiences and data-driven interfaces.',
  },
  {
    number: '05',
    period: 'NEXT CHAPTER',
    company: 'PRODUCT THINKING & STRATEGY',
    role: 'PRODUCT MANAGEMENT',
    stage: 'FOCUS: PRODUCT STRATEGY',
    isNext: true,
    description: 'Expanding from designing experiences toward product strategy, product thinking and Product Management.',
  },
];

export function AboutCareer() {
  const activeIdx = CAREER_STAGES.length - 1; // Stage 05 (Next Chapter) permanently active

  return (
    <section id="about-career" className="py-20 lg:py-16 border-t border-border overflow-hidden">
      <div className="container mx-auto px-5 lg:px-12 xl:px-16">

        <SectionLabel number="02" title="Career Journey" />

        {/* ------------------------------------------------------------------------ */}
        {/* DESKTOP LAYOUT (lg:block): Title + Subtext Header -> Horizontal Timeline */}
        {/* ------------------------------------------------------------------------ */}
        <div className="hidden lg:block">
          {/* Header */}
          <div className="grid grid-cols-12 gap-16 items-start mb-20">
            <div className="col-span-6">
              <h3 className="font-display text-[36px] font-semibold leading-[1] text-ink mt-2">
                From designing interfaces<br /><span className="text-primary">to shaping products.</span>
              </h3>
            </div>

            <div className="col-span-6 flex flex-col justify-between">
              <p className="text-base text-muted font-medium leading-relaxed max-w-lg mb-8">
                More than a decade of designing digital experiences — growing from web interfaces and UX into complex products, systems and product thinking.
              </p>

              {/* <div>
                <Link
                  to="/about"
                  className="inline-flex items-center text-[11px] font-bold tracking-widest uppercase text-ink hover:text-muted transition-colors group relative"
                >
                  VIEW MY JOURNEY
                  <FiArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-ink transition-colors"></span>
                </Link>
              </div> */}
            </div>
          </div>

          {/* Horizontal Desktop Timeline */}
          <div className="pt-0 relative">
            <div className="absolute top-[33px] left-0 w-full h-[1px] bg-border z-0">
              <div className="w-full h-full bg-ink"></div>
            </div>

            <div className="grid grid-cols-5 gap-4 relative z-10">
              {CAREER_STAGES.map((stage, idx) => {
                const isLast = idx === activeIdx;
                return (
                  <div key={stage.number} className="flex flex-col items-center text-center group">
                    <span className={`text-[9px] font-bold tracking-widest uppercase mb-3 ${isLast ? 'text-ink font-bold' : 'text-muted'
                      }`}>
                      {stage.period}
                    </span>

                    <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center mb-4 transition-transform ${isLast ? 'bg-ink border-ink scale-125 ring-4 ring-[#2C2D32]/20 shadow-xs' : 'bg-ink border-ink'
                      }`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-dark-text"></span>
                    </div>

                    <span className={`font-mono text-[10px] font-bold block mb-1 ${isLast ? 'text-ink' : 'text-muted'}`}>
                      {stage.number}
                    </span>

                    <span className="font-display text-xs sm:text-sm font-bold tracking-wider uppercase block mb-1 text-primary">
                      {stage.role}
                    </span>

                    <span className="text-[9px] font-semibold tracking-widest text-muted uppercase block truncate max-w-full">
                      {stage.company}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ------------------------------------------------------------------------ */}
        {/* MOBILE & TABLET LAYOUT (lg:hidden): 1. Title -> 2. Timeline -> 3. Subtext + Action */}
        {/* ------------------------------------------------------------------------ */}
        <div className="block lg:hidden space-y-10">

          {/* 1. TITLE */}
          <div>
            <h3 className="font-display text-[clamp(28px,6vw,44px)] font-semibold leading-[1.15] text-ink">
              From designing interfaces<br /><span className="text-primary">to shaping products.</span>
            </h3>
          </div>

          {/* 2. TIMELINE */}
          <div className="pt-6 border-t border-border relative">
            <div className="relative pl-6 space-y-8">
              <div className="absolute top-2 bottom-2 left-2 w-[1px] bg-ink"></div>

              {CAREER_STAGES.map((stage, idx) => {
                const isLast = idx === activeIdx;
                return (
                  <div key={stage.number} className="relative space-y-1">
                    <div className={`absolute -left-[21px] top-1.5 w-3.5 h-3.5 rounded-full border-2 bg-ink border-ink ${isLast ? 'ring-4 ring-[#2C2D32]/20' : ''
                      }`}></div>

                    <div className="flex items-center gap-2">
                      <span className="text-[9px] font-mono font-bold text-muted">{stage.number}</span>
                      <span className="text-[9px] font-bold tracking-widest text-muted uppercase">{stage.period}</span>
                    </div>

                    <h4 className="font-display text-sm font-bold text-primary uppercase">{stage.role}</h4>
                    <div className="text-[10px] font-bold text-muted uppercase">{stage.company}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 3. SUBTEXT & ACTION BUTTON */}
          <div className="pt-6 border-t border-border space-y-6">
            <p className="text-sm sm:text-base text-muted font-medium leading-relaxed">
              More than a decade of designing digital experiences — growing from web interfaces and UX into complex products, systems and product thinking.
            </p>

            <div>
              <Link
                to="/about"
                className="inline-flex items-center text-[11px] font-bold tracking-widest uppercase text-primary transition-colors relative group/link"
              >
                VIEW MY JOURNEY
                <FiArrowUpRight className="ml-1.5 w-4 h-4 text-primary group-hover/link:-translate-y-1 group-hover/link:translate-x-1 transition-transform" />
                <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-primary transition-colors"></span>
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
