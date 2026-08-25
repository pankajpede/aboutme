import { Link, useLocation } from 'react-router-dom';
import { FiArrowUpRight, FiLayers, FiCpu, FiActivity } from '../components/ui/Icons';
import { ScrollToTopWidget } from '../components/ui/ScrollToTopWidget';

// Local Case Study Image Imports
import datacenterMed from '../assets/images/case-study/datacenter-medium.jpg';
import laptopDcMed from '../assets/images/case-study/laptop-in-dc-medium.jpg';
import dataMiningMed from '../assets/images/case-study/data-mining-medium.jpg';

export default function UnityOneOverviewPage() {
  const location = useLocation();

  // Dynamic origin calculation based on router state or document referrer
  const getOrigin = () => {
    if (location.state?.from) {
      return {
        label: location.state.fromLabel || (location.state.from === '/' ? 'HOME' : 'WORK'),
        path: location.state.from,
      };
    }
    if (typeof document !== 'undefined' && document.referrer) {
      try {
        const referrerUrl = new URL(document.referrer);
        const path = referrerUrl.pathname;
        if (path === '/' || path === '/aboutme' || path === '/aboutme/') {
          return { label: 'HOME', path: '/' };
        } else if (path.includes('/about')) {
          return { label: 'ABOUT', path: '/about' };
        } else if (path.includes('/work')) {
          return { label: 'WORK', path: '/work' };
        }
      } catch {
        // Fallback to WORK
      }
    }
    return { label: 'WORK', path: '/work' };
  };

  const origin = getOrigin();

  const caseStudies = [
    {
      id: 'complex-it-operations',
      number: '01',
      category: '01 / COMPLEX IT OPERATIONS',
      title: 'Making complex infrastructure easier to understand.',
      description: 'Enterprise infrastructure generates a huge amount of operational information. The challenge was to create an experience where users could move from a high-level view into infrastructure details without losing context.',
      tags: ['Information Architecture', 'Operational UX', 'Data Visualization', 'Interaction Design'],
      link: '/work/unityone/complex-it-operations',
      icon: FiLayers,
      image: datacenterMed,
      imageAlt: 'Data Center Enterprise Infrastructure View',
    },
    {
      id: 'ai-assistant',
      number: '02',
      category: '02 / AI ASSISTANT',
      title: 'Turning operational data into useful assistance.',
      description: 'Instead of forcing users to search through dashboards, alerts and operational data, the AI experience brings context and recommendations closer to the decision.',
      tags: ['AI UX', 'Conversational UX', 'Decision Support', 'Workflow Design'],
      link: '/work/unityone/ai-assistant',
      icon: FiCpu,
      image: laptopDcMed,
      imageAlt: 'AI Assistant Operational Workflows in Data Center Environment',
    },
    {
      id: 'reporting-data',
      number: '03',
      category: '03 / REPORTING & DATA',
      title: 'From operational data to decisions.',
      description: 'Enterprise users often need to understand large volumes of operational data quickly. The challenge was designing reporting and data experiences that help users identify patterns, compare information and move from data toward decisions.',
      tags: ['Data Visualization', 'Dashboard UX', 'Reporting', 'Information Hierarchy'],
      link: '/work/unityone/reporting-data',
      icon: FiActivity,
      image: dataMiningMed,
      imageAlt: 'Operational Data Analytics and Reporting Visualization',
    },
  ];

  return (
    <div className="pb-16 bg-background text-ink relative">
      <ScrollToTopWidget />

      <div className="container mx-auto px-5 lg:px-12 xl:px-16 space-y-2">

        {/* Dynamic Center-Aligned Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex justify-center text-center">
          <ol className="flex flex-wrap items-center justify-center gap-2 text-[10px] sm:text-[11px] font-bold tracking-widest uppercase font-mono">
            <li>
              <Link to={origin.path} className="text-muted hover:text-primary border-b border-transparent hover:border-primary transition-all pb-[1px]">
                {origin.label}
              </Link>
            </li>
            <li className="text-muted select-none">/</li>
            <li>
              <Link to="/work/unityone" className="text-muted hover:text-primary border-b border-transparent hover:border-primary transition-all pb-[1px]">
                UNITYONE
              </Link>
            </li>
            <li className="text-muted select-none">/</li>
            <li className="text-ink font-bold">
              CURATED CASE STUDIES
            </li>
          </ol>
        </nav>

        {/* THREE CASE STUDIES */}
        <div id="unityone-case-studies" className="space-y-12 mt-0">

          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h3 className="font-display text-[36px] font-semibold leading-[1] text-ink mt-2">
              Three Problems.<br /><span className="text-primary">One Product.</span>
            </h3>
            <p className="text-sm text-muted font-medium leading-relaxed">
              I focused on different parts of the experience where complexity had the greatest impact on how users understand and act.
            </p>
          </div>

          {/* Case Study Cards List */}
          <div className="grid grid-cols-1 gap-12">
            {caseStudies.map((cs) => {
              const Icon = cs.icon;
              return (
                <div
                  key={cs.id}
                  className="p-8 sm:p-10 bg-surface border border-border rounded-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center group hover:border-ink/50 transition-all duration-300 shadow-xs"
                >
                  {/* Left Column: Text & Meta */}
                  <div className="lg:col-span-6 space-y-5">
                    <div className="flex items-center gap-3">
                      <span className="p-2 rounded bg-background border border-border text-ink">
                        <Icon className="w-5 h-5" />
                      </span>
                      <span className="text-[10px] font-bold tracking-widest text-muted uppercase font-mono">
                        {cs.category}
                      </span>
                    </div>

                    <h4 className="font-display text-[36px] font-semibold leading-[1] text-ink">
                      {cs.title}
                    </h4>

                    <p className="text-sm sm:text-base text-muted font-medium leading-relaxed">
                      {cs.description}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {cs.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[9px] font-bold tracking-widest px-3 py-1 border border-border rounded uppercase text-muted bg-background"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="pt-4">
                      <Link
                        to={cs.link}
                        state={{ from: '/work/unityone', fromLabel: 'OVERVIEW' }}
                        className="inline-flex items-center text-[11px] font-bold tracking-widest uppercase text-primary transition-colors relative group/link"
                      >
                        READ CASE STUDY
                        <FiArrowUpRight className="ml-1.5 w-4 h-4 text-primary group-hover/link:-translate-y-1 group-hover/link:translate-x-1 transition-transform" />
                        <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-primary transition-colors"></span>
                      </Link>
                    </div>
                  </div>

                  {/* Right Column: High-Fidelity Editorial Local Image Frame */}
                  <div className="lg:col-span-6">
                    <Link
                      to={cs.link}
                      state={{ from: '/work/unityone', fromLabel: 'OVERVIEW' }}
                      className="block overflow-hidden rounded-xl border border-border relative bg-background aspect-[16/10]"
                    >
                      <img
                        src={cs.image}
                        alt={cs.imageAlt}
                        className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 filter grayscale contrast-125 group-hover:grayscale-0"
                      />
                      <div className="absolute inset-0 bg-ink/10 group-hover:bg-transparent transition-colors duration-300 pointer-events-none"></div>
                    </Link>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </div>
  );
}
