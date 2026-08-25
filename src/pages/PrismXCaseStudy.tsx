import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowUpRight } from '../components/ui/Icons';
import { SectionLabel } from '../components/ui/SectionLabel';
import { PrismHero } from '../components/prismx/PrismHero';

export default function PrismXCaseStudy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <article className="min-h-screen bg-background text-ink pb-24">
      
      {/* 01. EDITORIAL HERO SECTION WITH LIVE PRISMX ENGINE */}
      <PrismHero />

      {/* 02. COMPACT PROJECT OVERVIEW BLOCK */}
      <section id="overview" className="py-14 border-b border-border bg-surface">
        <div className="container mx-auto px-5 lg:px-12 xl:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-[10px] font-bold tracking-widest text-muted uppercase mb-2">ROLE</div>
              <p className="font-display text-sm sm:text-base font-semibold text-ink">Senior Product Designer</p>
            </div>

            <div>
              <div className="text-[10px] font-bold tracking-widest text-muted uppercase mb-2">FOCUS</div>
              <p className="font-display text-xs sm:text-sm font-semibold text-ink leading-snug">
                UX Architecture · Design Systems · Theme Configuration · Component Systems
              </p>
            </div>

            <div>
              <div className="text-[10px] font-bold tracking-widest text-muted uppercase mb-2">PLATFORM</div>
              <p className="font-display text-xs sm:text-sm font-semibold text-ink leading-snug">
                Configurable Application Generation
              </p>
            </div>

            <div>
              <div className="text-[10px] font-bold tracking-widest text-muted uppercase mb-2">KEY CHALLENGE</div>
              <p className="font-display text-xs sm:text-sm font-semibold text-ink leading-snug">
                How can generated applications adapt to client expectations without sacrificing consistency?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 03. THE PRODUCT INTRODUCTION */}
      <section className="py-20 lg:py-28 border-b border-border bg-background">
        <div className="container mx-auto px-5 lg:px-12 xl:px-16">
          <div className="max-w-4xl mx-auto">
            <SectionLabel number="01" title="The Product" />
            
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight mb-8 text-ink">
              One platform.<br />Different products.
            </h2>

            <div className="text-base sm:text-xl text-muted leading-relaxed font-medium space-y-6">
              <p>
                PrismX was designed around application generation from business requirements. The design challenge was making the resulting experience adaptable enough to meet different client expectations without creating a fragmented or inconsistent product experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 04. THE CORE DESIGN PROBLEM */}
      <section className="py-20 lg:py-28 border-b border-border bg-surface">
        <div className="container mx-auto px-5 lg:px-12 xl:px-16">
          <div className="max-w-4xl mx-auto">
            <SectionLabel number="02" title="The Core Design Problem" />

            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight mb-8 text-ink leading-tight">
              The generated application still needed to feel like the client's product.
            </h2>

            <div className="text-base sm:text-lg text-muted leading-relaxed font-medium space-y-6 mb-12">
              <p>
                Different clients could have different expectations around brand, typography, components, interaction patterns and visual hierarchy.
              </p>
              <p>
                The challenge was therefore not simply generating an application. It was creating a system that could support configuration while maintaining consistency.
              </p>
            </div>

            {/* Highlighted Statement Callout */}
            <div className="p-8 sm:p-10 bg-background border-l-4 border-ink rounded-r-lg border-y border-r border-border shadow-xs">
              <p className="font-display text-lg sm:text-2xl font-bold text-ink leading-snug">
                "Customization needed to happen through a system — not through one-off screen changes."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 05. CORE PRODUCT ARCHITECTURE MODEL */}
      <section className="py-20 border-b border-border bg-background">
        <div className="container mx-auto px-5 lg:px-12 xl:px-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-[10px] font-bold tracking-widest text-muted uppercase mb-8 text-center">
              CORE PRODUCT ARCHITECTURE MODEL
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left overflow-x-auto pb-4 no-scrollbar">
              {[
                'CLIENT EXPECTATIONS',
                'BUSINESS REQUIREMENTS',
                'PRODUCT CONFIGURATION',
                'DESIGN SYSTEM',
                'GENERATED APPLICATION',
                'CLIENT EXPERIENCE',
              ].map((step, idx, arr) => (
                <div key={idx} className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
                  <div className="bg-surface border border-border px-3.5 py-2.5 rounded text-[11px] font-bold tracking-wider uppercase text-ink">
                    {step}
                  </div>
                  {idx < arr.length - 1 && (
                    <span className="text-muted font-bold text-sm hidden sm:inline">→</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 06. DESIGN CHALLENGE */}
      <section className="py-20 lg:py-28 border-b border-border bg-surface">
        <div className="container mx-auto px-5 lg:px-12 xl:px-16">
          <div className="max-w-4xl mx-auto">
            <SectionLabel number="03" title="Design Challenge" />

            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight mb-6 text-ink leading-tight">
              How do you give clients control without losing consistency?
            </h2>

            <p className="text-base sm:text-lg text-muted font-medium mb-12 max-w-2xl">
              The platform needed enough flexibility to adapt to different products and organizations, while still maintaining reusable components, predictable interaction patterns and a coherent visual language.
            </p>

            {/* 3 Challenge Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 sm:p-8 bg-background border border-border rounded-lg">
                <div className="font-display text-2xl font-bold text-ink mb-3">01</div>
                <div className="text-xs font-bold tracking-widest uppercase text-ink mb-2">FLEXIBILITY</div>
                <p className="text-sm text-muted">Support different client requirements and brand identities.</p>
              </div>

              <div className="p-6 sm:p-8 bg-background border border-border rounded-lg">
                <div className="font-display text-2xl font-bold text-ink mb-3">02</div>
                <div className="text-xs font-bold tracking-widest uppercase text-ink mb-2">CONSISTENCY</div>
                <p className="text-sm text-muted">Maintain reusable patterns and component behaviors.</p>
              </div>

              <div className="p-6 sm:p-8 bg-background border border-border rounded-lg">
                <div className="font-display text-2xl font-bold text-ink mb-3">03</div>
                <div className="text-xs font-bold tracking-widest uppercase text-ink mb-2">SCALABILITY</div>
                <p className="text-sm text-muted">Allow the system to support multiple generated applications.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 07. MY ROLE & RESPONSIBILITIES */}
      <section className="py-20 lg:py-28 border-b border-border bg-background">
        <div className="container mx-auto px-5 lg:px-12 xl:px-16">
          <div className="max-w-4xl mx-auto">
            <SectionLabel number="04" title="My Role" />

            <p className="font-display text-xl sm:text-3xl font-bold text-ink leading-relaxed mb-10">
              I worked across the product experience and design system, focusing on how the platform could translate client requirements into a configurable and consistent application experience.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {[
                'Product UX',
                'UX Architecture',
                'Interaction Design',
                'UI Design',
                'Design System',
                'Theme Customization',
                'Component Customization',
                'Responsive Experience',
                'Design–Dev Collaboration',
              ].map((item, idx) => (
                <div key={idx} className="p-4 bg-surface border border-border rounded text-xs font-semibold uppercase tracking-wider text-ink flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-ink"></span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 08. MAJOR DESIGN PRINCIPLE */}
      <section className="py-24 border-b border-border bg-ink text-dark-text text-center relative overflow-hidden">
        <div className="container mx-auto px-5 lg:px-12 xl:px-16 relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-dark-muted mb-6">
              CORE DESIGN PRINCIPLE
            </div>

            <h2 className="font-display text-4xl sm:text-6xl font-bold tracking-tight uppercase mb-6 text-dark-text">
              Configuration over customization.
            </h2>

            <p className="text-base sm:text-lg text-dark-muted font-medium mb-12 max-w-xl mx-auto">
              Rather than treating every client requirement as a one-off design request, the experience needed a systematic way to express differences through configuration.
            </p>

            {/* Visual Diagram */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-xs font-bold tracking-widest uppercase">
              <div className="px-5 py-3 bg-background text-ink rounded border border-border">ONE SYSTEM</div>
              <span className="text-dark-muted font-bold text-lg">→</span>
              <div className="px-5 py-3 bg-background text-ink rounded border border-border">MULTIPLE CONFIGURATIONS</div>
              <span className="text-dark-muted font-bold text-lg">→</span>
              <div className="px-5 py-3 bg-background text-ink rounded border border-border">MULTIPLE APPLICATION EXPERIENCES</div>
            </div>
          </div>
        </div>
      </section>

      {/* 09. THE DESIGN SYSTEM */}
      <section className="py-20 lg:py-28 border-b border-border bg-background">
        <div className="container mx-auto px-5 lg:px-12 xl:px-16">
          <div className="max-w-4xl mx-auto">
            <SectionLabel number="05" title="The Design System" />

            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight mb-6 text-ink">
              The design system became part of the product.
            </h2>

            <p className="text-base sm:text-lg text-muted font-medium mb-12 max-w-2xl">
              The visual system was not only a library for designers and developers. It needed to support the generated application experience and provide a structured way to express client-specific requirements.
            </p>

            {/* 4 Groups */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 bg-surface border border-border rounded-lg">
                <div className="text-xs font-bold tracking-widest uppercase text-ink mb-4 border-b border-border pb-2">
                  COLOR SYSTEM
                </div>
                <ul className="text-xs font-medium text-muted space-y-2">
                  <li>• Primary & Secondary Ink</li>
                  <li>• Background & Surface Tokens</li>
                  <li>• Border & Divider Tones</li>
                  <li>• Interactive & Accessible States</li>
                </ul>
              </div>

              <div className="p-6 bg-surface border border-border rounded-lg">
                <div className="text-xs font-bold tracking-widest uppercase text-ink mb-4 border-b border-border pb-2">
                  TYPOGRAPHY SYSTEM
                </div>
                <ul className="text-xs font-medium text-muted space-y-2">
                  <li>• Font Family Selection</li>
                  <li>• Modular Type Scale</li>
                  <li>• Font Weight Hierarchy</li>
                  <li>• Proportional Line Heights</li>
                </ul>
              </div>

              <div className="p-6 bg-surface border border-border rounded-lg">
                <div className="text-xs font-bold tracking-widest uppercase text-ink mb-4 border-b border-border pb-2">
                  COMPONENT LIBRARY
                </div>
                <ul className="text-xs font-medium text-muted space-y-2">
                  <li>• Buttons & Actions</li>
                  <li>• Form Inputs & Selects</li>
                  <li>• Cards & Container Panels</li>
                  <li>• Data Tables & Navigation</li>
                </ul>
              </div>

              <div className="p-6 bg-surface border border-border rounded-lg">
                <div className="text-xs font-bold tracking-widest uppercase text-ink mb-4 border-b border-border pb-2">
                  LAYOUT & DENSITY
                </div>
                <ul className="text-xs font-medium text-muted space-y-2">
                  <li>• 4px / 8px Spacing Grid</li>
                  <li>• Configurable Border Radius</li>
                  <li>• Responsive Grid Breakpoints</li>
                  <li>• Visual Density Control</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. PRODUCT DECISIONS */}
      <section className="py-20 lg:py-28 border-b border-border bg-surface">
        <div className="container mx-auto px-5 lg:px-12 xl:px-16">
          <div className="max-w-4xl mx-auto">
            <SectionLabel number="06" title="Product Decisions" />

            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight mb-12 text-ink">
              Product & Design Decisions
            </h2>

            <div className="space-y-6">
              {[
                {
                  num: '01',
                  title: 'CONFIGURATION OVER ONE-OFF CUSTOMIZATION',
                  desc: 'Reusable configuration provides greater scalability than repeated screen-level changes.',
                },
                {
                  num: '02',
                  title: 'TOKENS BEFORE COMPONENTS',
                  desc: 'Establish the visual foundation before defining component variations.',
                },
                {
                  num: '03',
                  title: 'CONSISTENCY DESPITE FLEXIBILITY',
                  desc: 'Customization should not destroy established interaction patterns.',
                },
                {
                  num: '04',
                  title: 'DESIGN FOR THE GENERATED OUTPUT',
                  desc: 'The design system needed to work beyond the builder and remain coherent in the final application.',
                },
                {
                  num: '05',
                  title: 'BALANCE USER, BUSINESS AND TECHNOLOGY',
                  desc: 'Design decisions needed to consider client expectations, usability, system consistency and technical constraints.',
                },
              ].map((item, idx) => (
                <div key={idx} className="p-6 bg-background border border-border rounded-lg flex items-start gap-6">
                  <span className="font-display text-2xl font-bold text-ink shrink-0">{item.num}</span>
                  <div>
                    <h4 className="font-display text-base font-bold text-ink uppercase mb-2">{item.title}</h4>
                    <p className="text-sm text-muted font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 11. BEYOND THE INTERFACE (PRODUCT THINKING BRIDGE) */}
      <section className="py-20 lg:py-28 border-b border-border bg-background">
        <div className="container mx-auto px-5 lg:px-12 xl:px-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-[10px] font-bold tracking-widest text-muted uppercase mb-4">
              SYSTEMS THINKING & PRODUCT MATURITY
            </div>

            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight mb-8 text-ink uppercase">
              Beyond the interface.
            </h2>

            <div className="flex flex-wrap items-center gap-2 text-xs font-bold tracking-widest uppercase mb-8 text-ink">
              <span>USER NEED</span> <span>→</span>
              <span>REQUIREMENT</span> <span>→</span>
              <span>PRODUCT DECISION</span> <span>→</span>
              <span>DESIGN SYSTEM</span> <span>→</span>
              <span>IMPLEMENTATION</span> <span>→</span>
              <span>USER EXPERIENCE</span> <span>→</span>
              <span>BUSINESS OUTCOME</span>
            </div>

            <p className="text-base sm:text-lg text-muted font-medium leading-relaxed">
              Working on PrismX pushed my thinking beyond individual screens toward the systems behind a product — how requirements become functionality, how design decisions scale across applications, and how configuration can balance user needs, business expectations and technical constraints.
            </p>
          </div>
        </div>
      </section>

      {/* 12. NEXT PROJECT NAVIGATION */}
      <section className="py-16 bg-surface">
        <div className="container mx-auto px-5 lg:px-12 xl:px-16">
          <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-border pt-12">
            <div>
              <div className="text-[10px] font-bold tracking-widest text-muted uppercase mb-1">NEXT PROJECT</div>
              <h3 className="font-display text-2xl font-bold text-ink">UNITEDLAYER</h3>
              <p className="text-xs text-muted">Designing complex enterprise experiences.</p>
            </div>

            <div className="flex items-center gap-6">
              <Link
                to="/#selected-work"
                className="inline-flex items-center text-[11px] font-bold tracking-widest uppercase text-muted hover:text-primary transition-colors group relative"
              >
                BACK TO WORK
              </Link>

              <Link
                to="/work/unityone"
                className="inline-flex items-center text-[11px] font-bold tracking-widest uppercase text-primary transition-colors relative group/link"
              >
                READ CASE STUDY
                <FiArrowUpRight className="ml-1.5 w-4 h-4 text-primary group-hover/link:-translate-y-1 group-hover/link:translate-x-1 transition-transform" />
                <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-primary transition-colors"></span>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </article>
  );
}
