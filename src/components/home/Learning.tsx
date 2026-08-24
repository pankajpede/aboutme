import { SectionLabel } from '../ui/SectionLabel';
import { learningPath } from '../../data/learning';

export function Learning() {
  const completed = learningPath.filter(l => l.status === 'COMPLETED');
  const inProgress = learningPath.filter(l => l.status === 'IN PROGRESS');
  const future = learningPath.filter(l => l.status === 'FUTURE');

  return (
    <section className="py-24 lg:py-32 bg-surface border-t border-border">
      <div className="container mx-auto px-5 lg:px-12 xl:px-16">

        <SectionLabel number="06" title="Learning" />

        <div className="mb-20 lg:mb-32">
          <h3 className="font-display text-[clamp(40px,5vw,72px)] font-semibold leading-[1.1] max-w-4xl mb-8 text-ink">
            Always learning.<br />Always building.
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <h4 className="text-[10px] font-bold tracking-widest text-text-muted uppercase mb-8">COMPLETED</h4>
            <div className="flex flex-col gap-6">
              {completed.map(item => (
                <div key={item.id} className="pb-6 border-b border-border">
                  <div className="text-sm font-semibold text-ink mb-2">{item.title}</div>
                  <div className="text-xs text-text-muted">{item.topic}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4">
            <h4 className="text-[10px] font-bold tracking-widest text-text-muted uppercase mb-8">IN PROGRESS</h4>
            <div className="flex flex-col gap-6">
              {inProgress.map(item => (
                <div key={item.id} className="pb-6 border-b border-border">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-1.5 h-1.5 bg-ink rounded-full"></div>
                    <div className="text-sm font-semibold text-ink">{item.title}</div>
                  </div>
                  <div className="text-xs text-text-muted">{item.topic}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4">
            <h4 className="text-[10px] font-bold tracking-widest text-text-muted uppercase mb-8">NEXT</h4>
            <div className="flex flex-col gap-6">
              {future.map(item => (
                <div key={item.id} className="pb-6 border-b border-border">
                  <div className="text-sm font-semibold text-text-muted mb-2">{item.title}</div>
                  <div className="text-xs text-border">{item.topic}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
