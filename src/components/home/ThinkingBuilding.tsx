import { useState, useEffect, useRef } from 'react';
import { SectionLabel } from '../ui/SectionLabel';
import { FiArrowUpRight } from '../ui/Icons';
import { Link } from 'react-router-dom';

type PrincipleData = {
  id: string;
  number: string;
  title: string;
  headline: string;
  content: string;
  focusPoints: string[];
  visualType: 'why' | 'complexity' | 'outcome' | 'iterate';
  projectRef?: string;
};

const THINKING_PRINCIPLES: PrincipleData[] = [
  {
    id: 'start-with-why',
    number: '01',
    title: 'START WITH WHY',
    headline: 'Understand the problem before designing the solution.',
    content: 'I look at the user, business context, workflow and constraints before deciding what the interface should be.',
    focusPoints: ['USER', 'PROBLEM', 'CONTEXT', 'OPPORTUNITY'],
    visualType: 'why',
    projectRef: 'FISPOKE EXPERIENCE',
  },
  {
    id: 'make-complexity-clear',
    number: '02',
    title: 'MAKE COMPLEXITY CLEAR',
    headline: 'Turn complicated workflows into understandable experiences.',
    content: 'Complex products should not feel complex to the people using them. I structure information, workflows and interactions so users can understand what matters and what to do next.',
    focusPoints: ['COMPLEXITY', 'STRUCTURE', 'CLARITY'],
    visualType: 'complexity',
    projectRef: 'UNITYONE ARCHITECTURE',
  },
  {
    id: 'design-for-outcome',
    number: '03',
    title: 'DESIGN FOR THE OUTCOME',
    headline: 'A good interface is only part of the product.',
    content: 'I think beyond screens and interactions to understand what the experience needs to help users accomplish and how that connects with business and technical realities.',
    focusPoints: ['USER NEED', 'EXPERIENCE', 'OUTCOME'],
    visualType: 'outcome',
    projectRef: 'PRISMX ENGINE',
  },
  {
    id: 'build-learn-iterate',
    number: '04',
    title: 'BUILD, LEARN, ITERATE',
    headline: 'Ideas become stronger when they meet reality.',
    content: 'I use prototypes, feedback and iteration to move from assumptions toward better product decisions.',
    focusPoints: ['IDEA', 'PROTOTYPE', 'LEARN', 'IMPROVE'],
    visualType: 'iterate',
    projectRef: 'PROTOTYPE EVOLUTION',
  },
];

export function ThinkingBuilding() {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll Progress Tracking for Desktop Sticky Interaction
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalScrollable = rect.height - windowHeight;

      if (totalScrollable <= 0) return;

      const currentScroll = -rect.top;
      const rawProgress = currentScroll / totalScrollable;
      const progress = Math.max(0, Math.min(0.999, rawProgress));

      const nextIdx = Math.floor(progress * THINKING_PRINCIPLES.length);
      setActiveIdx(nextIdx);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const activePrinciple = THINKING_PRINCIPLES[activeIdx];

  return (
    <section id="thinking-building" className="bg-background border-t border-border">

      {/* ------------------------------------------------------------------------ */}
      {/* DESKTOP STICKY SCROLL-DRIVEN EXPERIENCE (lg:block) */}
      {/* ------------------------------------------------------------------------ */}
      <div ref={containerRef} className="hidden lg:block relative h-[280vh] bg-background">

        {/* Sticky Viewport Container with top offset to clear navbar */}
        <div className="sticky top-0 h-screen flex flex-col justify-between pt-24 pb-8 overflow-hidden">

          <div className="container mx-auto px-5 lg:px-12 xl:px-16 flex-1 flex flex-col justify-between">

            {/* FULL WIDTH CENTER-ALIGNED HEADER BLOCK (Included in Sticky Viewport) */}
            <div className="text-center max-w-3xl mx-auto mb-4 flex flex-col items-center">
              <div className="flex justify-center">
                <SectionLabel number="06" title="How I Think" />
              </div>
              <h3 className="font-display text-[36px] font-semibold leading-[1] text-ink">
                Beyond <span className="text-primary">the interface.</span>
              </h3>
              <p className="text-sm text-muted font-medium leading-relaxed max-w-xl mx-auto">
                Understanding the problem. Creating clarity. Moving products forward.
              </p>
            </div>

            {/* 2-COLUMN GRID: Vertical Indicator Tabs (Left) + Active Principle Content (Right) */}
            <div className="grid grid-cols-12 gap-10 xl:gap-14 items-center flex-1 my-auto">

              {/* LEFT COLUMN (~33%): Vertical Tabs for 4 Principles */}
              <div className="col-span-4 pr-6 border-r border-border/60">
                <div className="text-[9px] font-bold tracking-widest text-muted uppercase block mb-3">
                  DESIGN PHILOSOPHY FRAMEWORK
                </div>

                <div className="space-y-2.5">
                  {THINKING_PRINCIPLES.map((principle, idx) => {
                    const isActive = activeIdx === idx;
                    return (
                      <div
                        key={principle.id}
                        onClick={() => setActiveIdx(idx)}
                        className={`p-3 rounded-xl border transition-all duration-300 flex items-center justify-between cursor-pointer ${isActive
                          ? 'bg-ink text-dark-text border-ink shadow-md translate-x-1 font-bold'
                          : 'bg-surface border-border text-muted hover:text-ink hover:border-ink/50'
                          }`}
                      >
                        <span className="text-xs sm:text-sm font-bold tracking-wider uppercase font-display">
                          {principle.title}
                        </span>
                        <span className={`w-2 h-2 rounded-full transition-all duration-300 ${isActive ? 'bg-dark-text scale-125' : 'bg-border'
                          }`}></span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* RIGHT COLUMN (~67%): Active Principle Content & Visual Flow */}
              <div className="col-span-8 pl-6">
                <div key={activePrinciple.id} className="animate-fade-in-up transition-all duration-500 space-y-4">

                  {/* Headline */}
                  <h4 className="font-display text-2xl sm:text-3xl font-bold text-ink leading-snug">
                    "{activePrinciple.headline}"
                  </h4>

                  {/* Content */}
                  <p className="text-sm sm:text-base text-muted font-medium leading-relaxed max-w-xl">
                    {activePrinciple.content}
                  </p>

                  {/* Abstract Visual System Flow Diagram */}
                  <div className="p-4 bg-surface border border-border rounded-xl text-center">
                    <span className="text-[8px] font-bold tracking-widest text-muted uppercase block mb-2.5">
                      PRODUCT THINKING VISUAL SYSTEM
                    </span>

                    {activePrinciple.visualType === 'why' && (
                      <div className="flex items-center justify-center gap-3 text-xs font-bold font-mono text-ink">
                        <span className="px-3 py-1.5 bg-background border border-border rounded">USER</span>
                        <span className="text-muted">➔</span>
                        <span className="px-3 py-1.5 bg-background border border-border rounded">PROBLEM</span>
                        <span className="text-muted">➔</span>
                        <span className="px-3 py-1.5 bg-background border border-border rounded">CONTEXT</span>
                        <span className="text-muted">➔</span>
                        <span className="px-3 py-1.5 bg-ink text-dark-text rounded shadow-2xs">OPPORTUNITY</span>
                      </div>
                    )}

                    {activePrinciple.visualType === 'complexity' && (
                      <div className="flex items-center justify-center gap-3 text-xs font-bold font-mono text-ink">
                        <span className="px-3 py-1.5 bg-background border border-border rounded text-muted">COMPLEXITY</span>
                        <span className="text-muted">➔</span>
                        <span className="px-3 py-1.5 bg-background border border-border rounded">STRUCTURE</span>
                        <span className="text-muted">➔</span>
                        <span className="px-3 py-1.5 bg-ink text-dark-text rounded shadow-2xs">CLARITY</span>
                      </div>
                    )}

                    {activePrinciple.visualType === 'outcome' && (
                      <div className="flex items-center justify-center gap-3 text-xs font-bold font-mono text-ink">
                        <span className="px-3 py-1.5 bg-background border border-border rounded">USER NEED</span>
                        <span className="text-muted">➔</span>
                        <span className="px-3 py-1.5 bg-background border border-border rounded">EXPERIENCE</span>
                        <span className="text-muted">➔</span>
                        <span className="px-3 py-1.5 bg-ink text-dark-text rounded shadow-2xs">OUTCOME</span>
                      </div>
                    )}

                    {activePrinciple.visualType === 'iterate' && (
                      <div className="flex items-center justify-center gap-2.5 text-xs font-bold font-mono text-ink">
                        <span className="px-2.5 py-1 bg-background border border-border rounded">IDEA</span>
                        <span className="text-muted">➔</span>
                        <span className="px-2.5 py-1 bg-background border border-border rounded">PROTOTYPE</span>
                        <span className="text-muted">➔</span>
                        <span className="px-2.5 py-1 bg-background border border-border rounded">LEARN</span>
                        <span className="text-muted">➔</span>
                        <span className="px-2.5 py-1 bg-ink text-dark-text rounded shadow-2xs">IMPROVE</span>
                      </div>
                    )}
                  </div>

                </div>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* ------------------------------------------------------------------------ */}
      {/* MOBILE SEQUENCE EXPERIENCE (lg:hidden) */}
      {/* ------------------------------------------------------------------------ */}
      <div className="block lg:hidden py-16 px-5 sm:px-8 space-y-12">

        {/* Centered Mobile Intro */}
        <div className="text-center flex flex-col items-center">
          <div className="flex justify-center">
            <SectionLabel number="06" title="How I Think" />
          </div>
          <h3 className="font-display text-[36px] font-semibold leading-[1] text-ink mt-2 uppercase mb-3">
            Beyond <span className="text-primary">the interface.</span>
          </h3>
          <p className="text-sm text-muted font-medium leading-relaxed max-w-lg mx-auto">
            Understanding the problem. Creating clarity. Moving products forward.
          </p>
        </div>

        {/* 4 Principle Flow */}
        <div className="space-y-10">
          {THINKING_PRINCIPLES.map((principle) => (
            <div key={principle.id} className="p-5 bg-surface border border-border rounded-xl space-y-4">
              <div className="flex items-center justify-between border-b border-border pb-3">
                <span className="text-[9px] font-bold tracking-widest uppercase px-2.5 py-0.5 rounded bg-ink text-dark-text">
                  0{principle.number} / 04
                </span>
                <span className="text-[9px] font-bold font-mono text-muted uppercase">
                  {principle.title}
                </span>
              </div>

              <div>
                <h4 className="font-display text-lg font-bold text-ink leading-snug">
                  "{principle.headline}"
                </h4>
              </div>

              <p className="text-xs text-muted font-medium leading-relaxed">
                {principle.content}
              </p>

              <div className="p-3 bg-background border border-border rounded space-y-2">
                <span className="text-[8px] font-bold tracking-widest text-muted uppercase block">
                  FOCUS & VISUAL FLOW
                </span>
                <div className="flex flex-wrap gap-1.5 text-[9px] font-bold font-mono text-ink">
                  {principle.focusPoints.map((pt, i) => (
                    <span key={pt} className="flex items-center gap-1">
                      <span>{pt}</span>
                      {i < principle.focusPoints.length - 1 && <span className="text-muted">➔</span>}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Transition End */}
        <div className="pt-8 border-t border-border text-center space-y-4">
          <p className="text-xs font-bold tracking-wider text-muted uppercase font-mono">
            GOOD DESIGN IS NOT JUST ABOUT WHAT USERS SEE. IT IS ABOUT WHAT THEY CAN DO.
          </p>
          <div>
            <Link
              to="/work"
              className="inline-flex items-center text-[11px] font-bold tracking-widest uppercase text-primary transition-colors relative group/link"
            >
              VIEW MY WORK
              <FiArrowUpRight className="ml-1.5 w-4 h-4 text-primary group-hover/link:-translate-y-1 group-hover/link:translate-x-1 transition-transform" />
              <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-primary transition-colors"></span>
            </Link>
          </div>
        </div>

      </div>

    </section>
  );
}
