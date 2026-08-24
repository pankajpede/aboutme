import { SectionLabel } from '../ui/SectionLabel';
import { ArrowRight } from '../ui/Icons';
import { Link } from 'react-router-dom';

export function AboutIntro() {
  return (
    <section className="py-24 lg:py-32 bg-surface border-t border-border">
      <div className="container mx-auto px-5 lg:px-12 xl:px-16">
        
        <SectionLabel number="04" title="About" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          <div className="lg:col-span-6">
            <h3 className="font-display text-[clamp(48px,6vw,96px)] font-semibold tracking-tight leading-[1.05] mb-8 text-ink">
              From interfaces<br/>to products.
            </h3>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="prose prose-lg text-muted leading-relaxed max-w-lg mb-12">
              <p className="mb-6 text-xl">
                I started in web design, moved into UX/UI, and spent more than a decade designing digital experiences.
              </p>
              <p>
                Today I'm expanding that practice toward product thinking, strategy and Product Management.
              </p>
            </div>

            <Link to="/about" className="inline-flex items-center text-[11px] font-bold tracking-widest uppercase text-ink hover:text-muted transition-colors group relative self-start">
              READ FULL STORY
              <ArrowRight className="ml-2 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              <span className="absolute -bottom-2 left-0 w-full h-[1px] bg-ink transition-colors"></span>
            </Link>
          </div>

        </div>

        {/* Minimal Career Story Timeline */}
        <div className="mt-32 pt-16 border-t border-border">
          <div className="text-[10px] font-bold tracking-widest text-muted uppercase mb-12">CAREER EVOLUTION</div>
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 md:gap-4 relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-border -z-10"></div>
            
            {[
              { year: '2014', title: 'WEB DESIGN' },
              { year: '2016', title: 'UX/UI' },
              { year: '2019', title: 'SENIOR UX' },
              { year: '2022', title: 'PRODUCT DESIGN' },
              { year: '2024', title: 'PRODUCT THINKING' },
              { year: 'FUTURE', title: 'PRODUCT MANAGEMENT' },
            ].map((step, idx) => (
              <div key={idx} className="flex flex-row md:flex-col items-center gap-4 md:gap-3 bg-surface md:px-2">
                <div className="w-2 h-2 rounded-full bg-ink"></div>
                <div className="flex flex-col md:items-center text-left md:text-center">
                  <span className="text-[9px] font-bold text-muted uppercase tracking-widest">{step.year}</span>
                  <span className="text-[10px] font-bold text-ink uppercase tracking-widest mt-1">{step.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
