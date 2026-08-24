import { SectionLabel } from '../ui/SectionLabel';
import { ArrowRight } from '../ui/Icons';
import { productTopics } from '../../data/product';

export function ProductThinking() {
  return (
    <section className="py-24 lg:py-32 bg-background border-t border-border">
      <div className="container mx-auto px-5 lg:px-12 xl:px-16">

        <SectionLabel number="05" title="Product Thinking" />

        <div className="mb-20 lg:mb-32">
          <h3 className="font-display text-[clamp(40px,5vw,72px)] font-semibold leading-[1.1] max-w-4xl mb-8 text-ink">
            Designing the problem,<br />not just the interface.
          </h3>
        </div>

        <div className="flex flex-col border-t border-border">
          {productTopics.map((topic) => (
            <div key={topic.id} className="group flex items-center justify-between py-8 lg:py-12 border-b border-border hover:bg-surface transition-colors px-6 -mx-6 cursor-pointer">
              <h4 className="font-display text-[clamp(32px,4vw,64px)] font-semibold tracking-tight group-hover:text-text-secondary transition-colors text-ink uppercase">
                {topic.title}
              </h4>
              <ArrowRight className="w-8 h-8 lg:w-12 lg:h-12 text-border group-hover:text-ink group-hover:translate-x-2 transition-all duration-300" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
