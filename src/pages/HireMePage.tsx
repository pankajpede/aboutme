import { SectionLabel } from '../components/ui/SectionLabel';
import { RecognitionCTA } from '../components/home/RecognitionCTA';
import { ScrollToTopWidget } from '../components/ui/ScrollToTopWidget';

export default function HireMePage() {
  return (
    <div className="bg-background text-ink relative min-h-screen">
      <ScrollToTopWidget />

      {/* HERO SECTION - CENTER ALIGNED WITH 2-LINE 2-COLOR HEADING */}
      <section className="py-20 lg:py-24 bg-surface border-b border-border relative overflow-hidden">
        {/* Subtle Ambient Background Gradient */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-5 lg:px-12 xl:px-16 flex flex-col items-center text-center space-y-6">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
            </span>
            <span className="text-[10px] font-bold tracking-widest text-emerald-700 uppercase font-mono">
              ACTIVELY OPEN TO FULL-TIME ROLES
            </span>
          </div>

          {/* Main Title Heading - 2 Lines & 2 Colors */}
          <div className="space-y-4 max-w-3xl mx-auto">
            <h1 className="font-display text-[36px] font-semibold leading-[1] text-ink mt-2">
              Let's make something<br /><span className="text-primary">together.</span>
            </h1>

            <p className="text-sm sm:text-base text-muted font-medium leading-relaxed max-w-2xl mx-auto">
              Senior Product Designer · 8+ years · Available immediately · Based in Bangalore, comfortable with hybrid and remote.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 01 / WHAT I BRING */}
      <section className="py-16 lg:py-20 bg-background border-b border-border">
        <div className="container mx-auto px-5 lg:px-12 xl:px-16 space-y-8">
          <div>
            <SectionLabel number="01" title="WHAT I BRING" />
            <h2 className="font-display text-[36px] font-semibold leading-[1] text-ink mt-2">
              Three things<br /><span className="text-primary">you can count on.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="p-8 bg-surface border border-border rounded-2xl space-y-4 shadow-xs hover:border-primary/40 transition-all duration-300">
              <h3 className="font-display text-xl font-bold text-ink">
                Deep UX Research
              </h3>
              <p className="text-xs sm:text-sm text-muted font-medium leading-relaxed">
                Synthesis-driven decisions backed by usability tests, behavioral data, and stakeholder alignment.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-8 bg-surface border border-border rounded-2xl space-y-4 shadow-xs hover:border-primary/40 transition-all duration-300">
              <h3 className="font-display text-xl font-bold text-ink">
                End-to-end Product Design
              </h3>
              <p className="text-xs sm:text-sm text-muted font-medium leading-relaxed">
                From 0→1 discovery through scalable systems and ship-quality interaction craft.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-8 bg-surface border border-border rounded-2xl space-y-4 shadow-xs hover:border-primary/40 transition-all duration-300">
              <h3 className="font-display text-xl font-bold text-ink">
                Creative Range
              </h3>
              <p className="text-xs sm:text-sm text-muted font-medium leading-relaxed">
                3D, motion, visual systems — bringing craft from outside UX back into product work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 02 / IDEAL ROLE */}
      <section className="py-16 lg:py-20 bg-surface border-b border-border">
        <div className="container mx-auto px-5 lg:px-12 xl:px-16 space-y-6">
          <div className="flex justify-center">
            <SectionLabel number="02" title="IDEAL ROLE" />
          </div>

          <div className="p-10 sm:p-16 bg-ink text-white rounded-3xl space-y-6 text-center max-w-4xl mx-auto shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

            <blockquote className="font-display font-medium text-lg sm:text-xl lg:text-2xl leading-relaxed text-white/95 max-w-3xl mx-auto">
              "I’m looking for a Senior Product Designer or Design Lead role where I can combine UX, product strategy, and leadership. I thrive in 0→1 and 1→N environments and am looking to take broader ownership of product direction, teams, and outcomes."
            </blockquote>
          </div>
        </div>
      </section>

      {/* EXACT RECOGNITION CTA SECTION FROM OVERVIEW PAGE */}
      <RecognitionCTA />
    </div>
  );
}
