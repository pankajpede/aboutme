import { SectionLabel } from '../ui/SectionLabel';

export function UXToolsLab() {
  return (
    <section className="py-24 lg:py-32 bg-background border-t border-border overflow-hidden">
      <div className="container mx-auto px-5 lg:px-12 xl:px-16">

        <SectionLabel number="04" title="UX Tools Lab" />

        <div className="mb-20 lg:mb-32">
          <h3 className="font-display text-[clamp(40px,5vw,72px)] font-semibold leading-[1.1] max-w-3xl text-ink">
            Building the tools<br />I wish existed.
          </h3>
        </div>

        {/* Studio Shelf Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">

          {/* Tool 1: Semantic UI Builder */}
          <div className="group">
            <div className="w-full aspect-[4/3] bg-surface rounded-lg border border-border mb-6 relative overflow-hidden flex items-end justify-center p-8">
              {/* Abstract Monochrome Interface */}
              <div className="w-[85%] h-[90%] bg-white border-t border-x border-border rounded-t shadow-sm flex flex-col group-hover:translate-y-[-8px] transition-transform duration-700">
                <div className="h-8 border-b border-border/50 flex items-center px-4 gap-2">
                  <div className="w-2 h-2 rounded-full bg-border"></div>
                  <div className="w-2 h-2 rounded-full bg-border"></div>
                </div>
                <div className="flex-1 p-6 flex flex-col gap-4">
                  <div className="w-1/3 h-4 bg-background rounded-sm"></div>
                  <div className="flex gap-4">
                    <div className="w-1/2 h-20 border border-border/50 rounded-sm bg-surface"></div>
                    <div className="w-1/2 h-20 border border-border/50 rounded-sm bg-surface"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-display text-2xl font-semibold text-ink">Semantic UI Builder</h4>
              <span className="text-[9px] font-bold tracking-widest text-text-muted border border-border px-2 py-1 rounded uppercase">Coming Soon</span>
            </div>
          </div>

          {/* Tool 2: Brand Builder */}
          <div className="group mt-0 md:mt-24">
            <div className="w-full aspect-[4/3] bg-surface rounded-lg border border-border mb-6 relative overflow-hidden flex items-center justify-center p-8">
              {/* Abstract Monochrome Typography/Brand Tester */}
              <div className="w-[80%] aspect-square bg-white border border-border rounded shadow-sm group-hover:scale-[1.02] transition-transform duration-700 flex flex-col justify-between p-6">
                <div>
                  <div className="text-[10px] font-bold tracking-widest text-text-muted mb-2 uppercase">Typography Specimen</div>
                  <div className="font-display text-4xl font-bold tracking-tighter text-ink mb-1">Aa.</div>
                  <div className="w-1/2 h-[1px] bg-border mb-4"></div>
                  <div className="space-y-2">
                    <div className="w-full h-2 bg-text-muted rounded-full"></div>
                    <div className="w-5/6 h-2 bg-text-muted rounded-full"></div>
                    <div className="w-4/6 h-2 bg-text-muted rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-display text-2xl font-semibold text-ink">Brand Builder</h4>
              <span className="text-[9px] font-bold tracking-widest text-text-muted border border-border px-2 py-1 rounded uppercase">Coming Soon</span>
            </div>
          </div>

          {/* Tool 3: Design Token Builder */}
          <div className="group">
            <div className="w-full aspect-[4/3] bg-surface rounded-lg border border-border mb-6 relative overflow-hidden flex items-center justify-center p-8">
              {/* Monochrome Token Grid */}
              <div className="w-[85%] aspect-[4/3] bg-white border border-border rounded shadow-sm group-hover:-translate-y-2 group-hover:rotate-1 transition-transform duration-700 grid grid-cols-3 grid-rows-2 gap-px bg-border p-px">
                <div className="bg-ink-deep"></div>
                <div className="bg-ink"></div>
                <div className="bg-text-secondary"></div>
                <div className="bg-border"></div>
                <div className="bg-surface"></div>
                <div className="bg-background"></div>
              </div>
            </div>
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-display text-2xl font-semibold text-ink">Design Token Builder</h4>
              <span className="text-[9px] font-bold tracking-widest text-text-muted border border-border px-2 py-1 rounded uppercase">Coming Soon</span>
            </div>
          </div>

          {/* Tool 4: AI UX Tools */}
          <div className="group mt-0 md:mt-24">
            <div className="w-full aspect-[4/3] bg-surface rounded-lg border border-border mb-6 relative overflow-hidden flex items-center justify-center p-8">
              {/* Monochrome AI Wireframe Tool */}
              <div className="w-[85%] h-[85%] bg-white border border-border rounded shadow-sm group-hover:scale-[1.02] transition-transform duration-700 flex">
                <div className="w-1/3 h-full border-r border-border/50 p-4 flex flex-col gap-3">
                  <div className="w-full h-8 bg-surface rounded-sm border border-border/50"></div>
                  <div className="w-full h-24 bg-surface rounded-sm border border-border/50"></div>
                </div>
                <div className="flex-1 p-4 flex items-center justify-center">
                  <div className="text-[9px] font-bold tracking-widest text-text-muted border border-border px-3 py-1 rounded">PROMPT INPUT</div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-display text-2xl font-semibold text-ink">AI UX Tools</h4>
              <span className="text-[9px] font-bold tracking-widest text-text-muted border border-border px-2 py-1 rounded uppercase">Coming Soon</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
