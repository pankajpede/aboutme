import { Link } from 'react-router-dom';
import resumePdf from '../../assets/documents/PankajPede_UXUiDesigner_12.pdf';
import { FiLinkedin, FiMessageCircle, FiMail, FiDownload } from '../ui/Icons';

export function Footer() {
  const navLinks = [
    { label: 'WORK', to: '/work' },
    { label: 'THINKING', to: '/product-thinking' },
    { label: 'TOOLS', to: '/ux-tools' },
    { label: 'LEARNING', to: '/learning' },
    { label: 'CONTENT', to: '/content' },
    { label: 'ABOUT', to: '/about' },
  ];

  return (
    <footer className="bg-background text-ink py-5 border-t border-border">
      <div className="container mx-auto px-5 lg:px-12 xl:px-16">

        {/* Top Row: Branding (Left) & Inline Navigation Links with Separators (Right) */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-5 border-b border-border">

          {/* Left: Branding */}
          <div className="flex flex-col gap-2">
            <Link to="/" className="flex items-baseline font-display text-3xl font-bold tracking-tighter text-ink leading-none">
              P<span className="w-2 h-2 rounded-full bg-ink animate-pulse-soft inline-block ml-0.5 mb-0.5"></span>
            </Link>
            <p className="text-[11px] font-bold tracking-[0.1em] text-muted uppercase">
              SENIOR PRODUCT DESIGNER · 13+ YEARS · INDIA
            </p>
          </div>

          {/* Right: Inline Navigation Links separated by · */}
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[10px] sm:text-[11px] font-bold tracking-widest uppercase">
            {navLinks.map((link, idx) => (
              <div key={link.label} className="flex items-center gap-3">
                <Link to={link.to} className="text-ink hover:text-muted transition-colors relative group">
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-ink group-hover:w-full transition-all duration-300"></span>
                </Link>
                {idx < navLinks.length - 1 && (
                  <span className="text-muted font-bold select-none">·</span>
                )}
              </div>
            ))}
          </div>

        </div>

        {/* Bottom Row: Round Outline Social Media Icons (Left) & Copyright (Right) */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-5">

          {/* Left: Round Outline Social Icons (Fill on hover) */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/pankaj-pede/"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              aria-label="LinkedIn"
              className="w-10 h-10 rounded-full border border-border bg-surface text-ink hover:bg-ink hover:text-dark-text hover:border-ink transition-all duration-300 flex items-center justify-center shadow-2xs hover:scale-105 active:scale-95"
            >
              <FiLinkedin className="w-4 h-4" />
            </a>

            <a
              href="https://wa.me/919561311757"
              target="_blank"
              rel="noopener noreferrer"
              title="WhatsApp"
              aria-label="WhatsApp"
              className="w-10 h-10 rounded-full border border-border bg-surface text-ink hover:bg-ink hover:text-dark-text hover:border-ink transition-all duration-300 flex items-center justify-center shadow-2xs hover:scale-105 active:scale-95"
            >
              <FiMessageCircle className="w-4 h-4" />
            </a>

            <a
              href="mailto:pede.pankaj@gmail.com"
              title="Email"
              aria-label="Email"
              className="w-10 h-10 rounded-full border border-border bg-surface text-ink hover:bg-ink hover:text-dark-text hover:border-ink transition-all duration-300 flex items-center justify-center shadow-2xs hover:scale-105 active:scale-95"
            >
              <FiMail className="w-4 h-4" />
            </a>

            <a
              href={resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              download="PankajPede_Resume.pdf"
              title="Download Resume"
              aria-label="Download Resume"
              className="w-10 h-10 rounded-full border border-border bg-surface text-ink hover:bg-ink hover:text-dark-text hover:border-ink transition-all duration-300 flex items-center justify-center shadow-2xs hover:scale-105 active:scale-95"
            >
              <FiDownload className="w-4 h-4" />
            </a>
          </div>

          {/* Right: Copyright Text */}
          <div className="text-[9px] sm:text-[10px] font-bold tracking-widest uppercase text-muted font-mono">
            © {new Date().getFullYear()} PANKAJ PEDE. ALL RIGHTS RESERVED.
          </div>

        </div>

      </div>
    </footer>
  );
}
