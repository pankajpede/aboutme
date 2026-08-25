import { SectionLabel } from '../ui/SectionLabel';
import { FiArrowUpRight } from '../ui/Icons';
import { Link } from 'react-router-dom';
import { projects } from '../../data/projects';

export function WebBrands() {
  const brandProjects = projects.filter(p => p.category === 'DIGITAL BRAND');

  return (
    <section className="py-24 lg:py-32 bg-surface">
      <div className="container mx-auto px-5 lg:px-12 xl:px-16">
        
        <SectionLabel number="05" title="Web & Digital Brands" />

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 lg:mb-20">
          <div>
            <h3 className="font-display text-4xl lg:text-5xl font-medium tracking-tight mb-4">
              Beyond product screens.
            </h3>
            <p className="text-lg text-foreground-muted">
              Brand, experience, website, and responsive design.
            </p>
          </div>
          <Link to="/work" className="inline-flex items-center text-[11px] font-bold tracking-widest uppercase text-primary transition-colors relative group/link">
            VIEW ALL WORK
            <FiArrowUpRight className="ml-1.5 w-4 h-4 text-primary group-hover/link:-translate-y-1 group-hover/link:translate-x-1 transition-transform" />
            <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-primary transition-colors"></span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {brandProjects.map((project) => (
            <div key={project.id} className="group cursor-pointer">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-surface-elevated border border-border group-hover:border-accent/30 transition-colors mb-6">
                <div className="absolute inset-0 flex items-center justify-center group-hover:scale-[1.02] transition-transform duration-700 ease-out">
                  <span className="text-sm font-medium text-foreground-muted">{project.imagePlaceholder}</span>
                </div>
              </div>
              <h4 className="font-display text-2xl font-medium mb-2 group-hover:text-accent transition-colors">{project.title}</h4>
              <p className="text-foreground-muted mb-4">{project.description}</p>
              <div className="flex gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-medium tracking-wider px-3 py-1 bg-surface-muted rounded-full uppercase">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
