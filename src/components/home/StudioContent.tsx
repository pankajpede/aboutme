import { SectionLabel } from '../ui/SectionLabel';
import { FiArrowUpRight } from '../ui/Icons';
import { Link } from 'react-router-dom';

export function StudioContent() {
  return (
    <section className="py-24 lg:py-32 bg-background border-t border-border">
      <div className="container mx-auto px-5 lg:px-12 xl:px-16">

        <SectionLabel number="05" title="From the Studio" />

        <div className="mb-20 lg:mb-32">
          <h3 className="font-display text-[clamp(40px,5vw,72px)] font-semibold leading-[1.1] max-w-4xl mb-8 text-ink">
            Things I'm learning,<br />building and sharing.
          </h3>
        </div>

        <div className="flex flex-col border-t border-border">
          {/* Category 1: ARTICLES */}
          <div className="group flex flex-col lg:flex-row lg:items-center justify-between py-10 lg:py-16 border-b border-border hover:bg-surface transition-colors px-6 -mx-6 cursor-default">
            <div className="flex items-start gap-8 lg:gap-16 mb-6 lg:mb-0">
              <span className="text-[10px] font-bold tracking-widest text-muted uppercase mt-3">
                TXT
              </span>
              <h4 className="font-display text-4xl lg:text-6xl font-semibold tracking-tight text-ink">
                ARTICLES
              </h4>
            </div>

            <div className="lg:w-1/3 pl-14 lg:pl-0">
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center text-sm font-medium border-b border-border/50 pb-2">
                  <span className="text-ink">Building Enterprise Design Systems</span>
                  <span className="text-[10px] font-bold tracking-widest text-muted uppercase">UPCOMING</span>
                </div>
                <div className="flex justify-between items-center text-sm font-medium border-b border-border/50 pb-2">
                  <span className="text-ink">The AI Transition for UX</span>
                  <span className="text-[10px] font-bold tracking-widest text-muted uppercase">DRAFT</span>
                </div>
              </div>
            </div>
          </div>

          {/* Category 2: REELS */}
          <div className="group flex flex-col lg:flex-row lg:items-center justify-between py-10 lg:py-16 border-b border-border hover:bg-surface transition-colors px-6 -mx-6 cursor-default">
            <div className="flex items-start gap-8 lg:gap-16 mb-6 lg:mb-0">
              <span className="text-[10px] font-bold tracking-widest text-muted uppercase mt-3">
                MP4
              </span>
              <h4 className="font-display text-4xl lg:text-6xl font-semibold tracking-tight text-ink">
                REELS
              </h4>
            </div>

            <div className="lg:w-1/3 pl-14 lg:pl-0">
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center text-sm font-medium border-b border-border/50 pb-2">
                  <span className="text-ink">Figma Component Architecture</span>
                  <span className="text-[10px] font-bold tracking-widest text-muted uppercase">RECORDING</span>
                </div>
                <div className="flex justify-between items-center text-sm font-medium border-b border-border/50 pb-2">
                  <span className="text-ink">Product Strategy Basics</span>
                  <span className="text-[10px] font-bold tracking-widest text-muted uppercase">PLANNED</span>
                </div>
              </div>
            </div>
          </div>

          {/* Category 3: VIDEOS */}
          <div className="group flex flex-col lg:flex-row lg:items-center justify-between py-10 lg:py-16 border-b border-border hover:bg-surface transition-colors px-6 -mx-6 cursor-default">
            <div className="flex items-start gap-8 lg:gap-16 mb-6 lg:mb-0">
              <span className="text-[10px] font-bold tracking-widest text-muted uppercase mt-3">
                YT
              </span>
              <h4 className="font-display text-4xl lg:text-6xl font-semibold tracking-tight text-ink">
                VIDEOS
              </h4>
            </div>

            <div className="lg:w-1/3 pl-14 lg:pl-0">
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center text-sm font-medium border-b border-border/50 pb-2">
                  <span className="text-ink">Discovery Framework Walkthrough</span>
                  <span className="text-[10px] font-bold tracking-widest text-muted uppercase">FREE</span>
                </div>
                <div className="flex justify-between items-center text-sm font-medium border-b border-border/50 pb-2">
                  <span className="text-ink">UX Audit Template</span>
                  <span className="text-[10px] font-bold tracking-widest text-muted uppercase">FREE</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link to="/content" className="inline-flex items-center text-[11px] font-bold tracking-widest uppercase text-primary transition-colors relative group/link">
            BROWSE ALL CONTENT
            <FiArrowUpRight className="ml-1.5 w-4 h-4 text-primary group-hover/link:-translate-y-1 group-hover/link:translate-x-1 transition-transform" />
            <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-primary transition-colors"></span>
          </Link>
        </div>

      </div>
    </section>
  );
}
