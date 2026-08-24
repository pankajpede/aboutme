import { useState, useRef, useEffect } from 'react';
import { FiLinkedin, FiMessageCircle, FiMail, FiDownload, FiArrowRight, FiX } from '../ui/Icons';
import resumePdf from '../../assets/documents/PankajPede_UXUiDesigner_12.pdf';

export function RecognitionCTA() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close floating connect menu on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const connectOptions = [
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/pankaj-pede/',
      icon: FiLinkedin,
      isExternal: true,
    },
    {
      label: 'WhatsApp',
      href: 'https://wa.me/919561311757',
      icon: FiMessageCircle,
      isExternal: true,
    },
    {
      label: 'Email',
      href: 'mailto:pede.pankaj@gmail.com',
      icon: FiMail,
      isExternal: false,
    },
    {
      label: 'Resume',
      href: resumePdf,
      icon: FiDownload,
      isDownload: true,
      isExternal: true,
    },
  ];

  return (
    <section id="recognition-cta" className="py-16 bg-ink text-dark-text text-center relative overflow-hidden">

      {/* Very subtle background texture */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(247,247,245,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(247,247,245,0.03)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none"></div>

      <div className="container mx-auto px-5 lg:px-12 xl:px-16 relative z-10">

        <div className="max-w-3xl mx-auto">
          <div className="text-[10px] font-bold tracking-[0.2em] text-dark-muted uppercase mb-6">
            ✦ OPEN FOR NEW OPPORTUNITIES
          </div>

          <h2 className="font-display text-[40px] font-semibold leading-[1] text-dark-text mb-5">
            LET'S BUILD<br /><span className="text-primary">SOMETHING MEANINGFUL.</span>
          </h2>

          <p className="text-[14px] text-dark-muted mb-10 max-w-xl mx-auto font-medium">
            Product design, UX strategy, and product thinking.
          </p>

          {/* Interactive Connect Button & Floating Options */}
          <div ref={containerRef} className="relative inline-block">
            
            {/* Floating Options Popup Bar */}
            {isOpen && (
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 p-3 bg-surface border border-border rounded-2xl shadow-xl flex items-center gap-3 animate-fade-in-up z-30">
                {connectOptions.map((opt) => {
                  const Icon = opt.icon;
                  return (
                    <a
                      key={opt.label}
                      href={opt.href}
                      target={opt.isExternal ? '_blank' : undefined}
                      rel={opt.isExternal ? 'noopener noreferrer' : undefined}
                      download={opt.isDownload ? 'PankajPede_Resume.pdf' : undefined}
                      onClick={() => setIsOpen(false)}
                      title={opt.label}
                      aria-label={opt.label}
                      className="group flex flex-col items-center gap-1"
                    >
                      <div className="w-11 h-11 rounded-full bg-background border border-border text-ink hover:bg-ink hover:text-dark-text hover:border-ink transition-all duration-300 flex items-center justify-center shadow-2xs group-hover:scale-110 active:scale-95">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-[8px] font-bold tracking-widest text-muted uppercase group-hover:text-ink transition-colors">
                        {opt.label}
                      </span>
                    </a>
                  );
                })}
              </div>
            )}

            {/* Main Toggle Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center h-11 px-6 rounded-full text-[11px] font-bold tracking-widest uppercase transition-all duration-300 active:scale-95 shadow-md ${
                isOpen
                  ? 'bg-dark-muted text-ink'
                  : 'bg-primary text-white hover:opacity-90'
              }`}
            >
              {isOpen ? 'CLOSE OPTIONS' : 'CONNECT'}
              {isOpen ? (
                <FiX className="ml-2.5 w-4 h-4" />
              ) : (
                <FiArrowRight className="ml-2.5 w-4 h-4" />
              )}
            </button>

          </div>
        </div>

      </div>
    </section>
  );
}
