import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  FiMenu,
  FiX,
  FiChevronDown,
  FiLinkedin,
  FiMessageCircle,
  FiMail,
  FiDownload,
  FiArrowUpRight,
} from '../ui/Icons';
import {
  SELECTED_WORK_NAV,
  TOOLS_EXPERIMENTS_NAV,
  CONNECT_NAV,
} from '../../data/navigation';

export function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [workOpen, setWorkOpen] = useState(false);
  const [connectOpen, setConnectOpen] = useState(false);

  // Mobile accordion state
  const [mobileWorkOpen, setMobileWorkOpen] = useState(false);
  const [mobileConnectOpen, setMobileConnectOpen] = useState(false);

  const workRef = useRef<HTMLDivElement>(null);
  const workButtonRef = useRef<HTMLButtonElement>(null);
  const connectRef = useRef<HTMLDivElement>(null);
  const connectButtonRef = useRef<HTMLButtonElement>(null);

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns on route change
  useEffect(() => {
    setWorkOpen(false);
    setConnectOpen(false);
    setMobileOpen(false);
  }, [location.pathname]);

  // Handle Outside Click & Escape Key
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        workRef.current &&
        !workRef.current.contains(target) &&
        workButtonRef.current &&
        !workButtonRef.current.contains(target)
      ) {
        setWorkOpen(false);
      }
      if (
        connectRef.current &&
        !connectRef.current.contains(target) &&
        connectButtonRef.current &&
        !connectButtonRef.current.contains(target)
      ) {
        setConnectOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setWorkOpen(false);
        setConnectOpen(false);
        setMobileOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const toggleWork = () => {
    setConnectOpen(false);
    setWorkOpen((prev) => !prev);
  };

  const toggleConnect = () => {
    setWorkOpen(false);
    setConnectOpen((prev) => !prev);
  };

  const isOverviewActive = location.pathname === '/';
  const isWorkActive = location.pathname.startsWith('/work') || location.pathname.startsWith('/ux-tools');
  const isAboutActive = location.pathname.startsWith('/about');

  const renderConnectIcon = (iconName: string) => {
    switch (iconName) {
      case 'linkedin':
        return <FiLinkedin className="w-4 h-4" />;
      case 'whatsapp':
        return <FiMessageCircle className="w-4 h-4" />;
      case 'email':
        return <FiMail className="w-4 h-4" />;
      case 'download':
        return <FiDownload className="w-4 h-4" />;
      default:
        return <FiArrowUpRight className="w-4 h-4" />;
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
          scrolled
            ? 'bg-background/90 backdrop-blur-md border-border shadow-xs'
            : 'bg-background/50 backdrop-blur-xs border-transparent'
        }`}
      >
        <div className="container mx-auto px-5 lg:px-12 xl:px-16 flex items-center justify-between h-[68px] lg:h-[76px]">
          
          {/* LEFT: BRAND LOGO P. */}
          <Link
            to="/"
            className="flex items-baseline group font-display text-2xl font-bold tracking-tighter text-ink leading-none"
            aria-label="Pankaj Pede Portfolio Home"
          >
            P<span className="w-1.5 h-1.5 rounded-full bg-ink inline-block ml-0.5 mb-0.5"></span>
          </Link>

          {/* RIGHT: DESKTOP PRIMARY NAVIGATION & CONNECT CTA */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="flex items-center space-x-8 text-[11px] font-bold tracking-widest uppercase text-ink">
              
              {/* 01. OVERVIEW (HOME) DIRECT ROUTE */}
              <Link
                to="/"
                className={`hover:text-muted relative py-1 transition-colors ${
                  isOverviewActive ? 'text-ink font-extrabold' : ''
                }`}
              >
                OVERVIEW
                {isOverviewActive && (
                  <span className="absolute -bottom-1 left-0 w-full h-[1.5px] bg-ink"></span>
                )}
              </Link>

              {/* 02. WORK DROPDOWN TRIGGER */}
              <div className="relative">
                <button
                  ref={workButtonRef}
                  onClick={toggleWork}
                  aria-expanded={workOpen}
                  aria-haspopup="true"
                  className={`inline-flex items-center gap-1 hover:text-muted transition-colors relative py-1 ${
                    isWorkActive ? 'text-ink font-extrabold' : ''
                  }`}
                >
                  WORK
                  <FiChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      workOpen ? 'rotate-180 text-ink' : 'text-muted'
                    }`}
                  />
                  {isWorkActive && (
                    <span className="absolute -bottom-1 left-0 w-full h-[1.5px] bg-ink"></span>
                  )}
                </button>

                {/* WORK MEGA DROPDOWN PANEL */}
                <div
                  ref={workRef}
                  className={`absolute right-[-140px] top-full mt-3 w-[660px] max-w-[calc(100vw-32px)] bg-surface border border-border rounded-xl p-6 z-50 text-ink shadow-[0_24px_54px_rgba(36,36,37,0.12)] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    workOpen
                      ? 'opacity-100 translate-y-0 scale-100 visible pointer-events-auto'
                      : 'opacity-0 -translate-y-2 scale-98 invisible pointer-events-none'
                  }`}
                >
                  <div className="grid grid-cols-12 gap-8">
                    
                    {/* LEFT COLUMN: SELECTED WORK */}
                    <div className="col-span-6 border-r border-border/80 pr-6 space-y-4">
                      <div className="text-[9px] font-bold tracking-[0.15em] text-muted uppercase pb-2 border-b border-border">
                        SELECTED WORK
                      </div>

                      <div className="space-y-4">
                        {SELECTED_WORK_NAV.map((item) => (
                          <Link
                            key={item.num}
                            to={item.link}
                            onClick={() => setWorkOpen(false)}
                            className="group block p-2 rounded-lg hover:bg-surface/60 transition-colors"
                          >
                            <div className="flex items-center justify-between mb-1">
                              <span className="font-display text-sm font-bold text-ink group-hover:translate-x-1 transition-transform">
                                {item.num} / {item.title}
                              </span>
                              <FiArrowUpRight className="w-3.5 h-3.5 text-muted group-hover:text-ink group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                            </div>
                            <p className="text-[11px] text-muted leading-tight font-medium">
                              {item.desc}
                            </p>
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* RIGHT COLUMN: TOOLS & EXPERIMENTS */}
                    <div className="col-span-6 space-y-4">
                      <div className="text-[9px] font-bold tracking-[0.15em] text-muted uppercase pb-2 border-b border-border">
                        TOOLS & EXPERIMENTS
                      </div>

                      <div className="space-y-2.5">
                        {TOOLS_EXPERIMENTS_NAV.map((item) => (
                          <Link
                            key={item.num}
                            to={item.link}
                            onClick={() => setWorkOpen(false)}
                            className="group block p-1.5 rounded-md hover:bg-surface/60 transition-colors"
                          >
                            <div className="flex items-center justify-between">
                              <span className="font-display text-xs font-bold text-ink group-hover:translate-x-0.5 transition-transform">
                                {item.title}
                              </span>
                              <span className="text-[9px] font-bold text-muted font-mono">{item.num}</span>
                            </div>
                            <p className="text-[10px] text-muted leading-tight truncate">
                              {item.desc}
                            </p>
                          </Link>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>
              </div>

              {/* 03. ABOUT DIRECT ROUTE */}
              <Link
                to="/about"
                className={`hover:text-muted relative py-1 transition-colors ${
                  isAboutActive ? 'text-ink font-extrabold' : ''
                }`}
              >
                ABOUT
                {isAboutActive && (
                  <span className="absolute -bottom-1 left-0 w-full h-[1.5px] bg-ink"></span>
                )}
              </Link>

              {/* 04. HIRE ME DIRECT ROUTE */}
              <Link
                to="/hire-me"
                className={`hover:text-muted relative py-1 transition-colors ${
                  location.pathname === '/hire-me' ? 'text-ink font-extrabold' : ''
                }`}
              >
                HIRE ME
                {location.pathname === '/hire-me' && (
                  <span className="absolute -bottom-1 left-0 w-full h-[1.5px] bg-ink"></span>
                )}
              </Link>

            </div>

            {/* 05. CONNECT DROPDOWN TRIGGER */}
            <div ref={connectRef} className="relative">
              <button
                ref={connectButtonRef}
                onClick={toggleConnect}
                aria-expanded={connectOpen}
                aria-haspopup="true"
                className="inline-flex items-center gap-1.5 bg-primary text-white px-5 py-2.5 rounded-full text-[11px] font-bold tracking-widest uppercase hover:opacity-90 transition-all duration-300 shadow-xs focus:outline-none focus:ring-2 focus:ring-primary"
              >
                CONNECT
                <FiChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    connectOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* CONNECT COMPACT DROPDOWN PANEL */}
              <div
                className={`absolute right-0 top-full mt-3 w-[270px] bg-surface border border-border rounded-xl p-2 z-50 text-ink shadow-[0_20px_50px_rgba(36,36,37,0.12)] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  connectOpen
                    ? 'opacity-100 translate-y-0 scale-100 visible pointer-events-auto'
                    : 'opacity-0 -translate-y-2 scale-98 invisible pointer-events-none'
                }`}
              >
                <div className="p-2 border-b border-border/60 text-[9px] font-bold tracking-widest text-muted uppercase">
                  DIRECT CONTACT
                </div>

                <div className="py-1 space-y-1">
                  {CONNECT_NAV.map((item) => {
                    const isExternal = item.external;
                    const isDownload = item.download;

                    if (isDownload) {
                      return (
                        <a
                          key={item.id}
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          download="PankajPede_Resume.pdf"
                          onClick={() => setConnectOpen(false)}
                          className="group flex items-center gap-3 p-2.5 rounded-lg hover:bg-surface transition-colors"
                        >
                          <div className="w-7 h-7 rounded-full bg-surface border border-border flex items-center justify-center text-ink shrink-0">
                            {renderConnectIcon(item.iconName)}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <span className="font-display text-xs font-bold text-ink group-hover:translate-x-0.5 transition-transform">
                                {item.label}
                              </span>
                            </div>
                            <span className="text-[10px] text-muted leading-tight block">
                              {item.sublabel}
                            </span>
                          </div>
                        </a>
                      );
                    }

                    return (
                      <a
                        key={item.id}
                        href={item.link}
                        target={isExternal ? '_blank' : undefined}
                        rel={isExternal ? 'noopener noreferrer' : undefined}
                        onClick={() => setConnectOpen(false)}
                        className="group flex items-center gap-3 p-2.5 rounded-lg hover:bg-surface transition-colors"
                      >
                        <div className="w-7 h-7 rounded-full bg-surface border border-border flex items-center justify-center text-ink shrink-0">
                          {renderConnectIcon(item.iconName)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <span className="font-display text-xs font-bold text-ink group-hover:translate-x-0.5 transition-transform">
                              {item.label}
                            </span>
                          </div>
                          <span className="text-[10px] text-muted leading-tight block">
                            {item.sublabel}
                          </span>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

          </div>

          {/* MOBILE MENU TOGGLE BUTTON */}
          <button
            className="lg:hidden p-2 text-ink"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle Mobile Navigation"
          >
            {mobileOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
          </button>

        </div>
      </nav>

      {/* MOBILE FULL-WIDTH ACCORDION NAVIGATION OVERLAY */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-background pt-24 px-6 pb-12 overflow-y-auto lg:hidden animate-fadeIn">
          <div className="flex flex-col space-y-6 max-w-lg mx-auto">
            
            {/* OVERVIEW ROUTE */}
            <div className="border-b border-border pb-4">
              <Link
                to="/"
                onClick={() => setMobileOpen(false)}
                className="font-display text-2xl font-bold uppercase text-ink block"
              >
                OVERVIEW
              </Link>
            </div>

            {/* WORK ACCORDION */}
            <div className="border-b border-border pb-4">
              <button
                onClick={() => setMobileWorkOpen(!mobileWorkOpen)}
                className="w-full flex items-center justify-between font-display text-2xl font-bold uppercase text-ink"
              >
                <span>WORK</span>
                <FiChevronDown
                  className={`w-5 h-5 transition-transform ${mobileWorkOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {mobileWorkOpen && (
                <div className="mt-4 pl-3 space-y-5 border-l-2 border-border">
                  <div>
                    <div className="text-[9px] font-bold tracking-widest text-muted uppercase mb-2">SELECTED WORK</div>
                    <div className="space-y-2">
                      {SELECTED_WORK_NAV.map((item) => (
                        <Link
                          key={item.num}
                          to={item.link}
                          onClick={() => setMobileOpen(false)}
                          className="block text-sm font-bold text-ink hover:text-muted"
                        >
                          {item.num} / {item.title}
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="text-[9px] font-bold tracking-widest text-muted uppercase mb-2">TOOLS & EXPERIMENTS</div>
                    <div className="space-y-2">
                      {TOOLS_EXPERIMENTS_NAV.map((item) => (
                        <Link
                          key={item.num}
                          to={item.link}
                          onClick={() => setMobileOpen(false)}
                          className="block text-sm font-medium text-ink hover:text-muted"
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* ABOUT ROUTE */}
            <div className="border-b border-border pb-4">
              <Link
                to="/about"
                onClick={() => setMobileOpen(false)}
                className="font-display text-2xl font-bold uppercase text-ink block"
              >
                ABOUT
              </Link>
            </div>

            {/* HIRE ME ROUTE */}
            <div className="border-b border-border pb-4">
              <Link
                to="/hire-me"
                onClick={() => setMobileOpen(false)}
                className="font-display text-2xl font-bold uppercase text-ink block"
              >
                HIRE ME
              </Link>
            </div>

            {/* CONNECT ACCORDION */}
            <div className="border-b border-border pb-4">
              <button
                onClick={() => setMobileConnectOpen(!mobileConnectOpen)}
                className="w-full flex items-center justify-between font-display text-2xl font-bold uppercase text-ink"
              >
                <span>CONNECT</span>
                <FiChevronDown
                  className={`w-5 h-5 transition-transform ${mobileConnectOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {mobileConnectOpen && (
                <div className="mt-4 pl-3 space-y-3 border-l-2 border-border">
                  {CONNECT_NAV.map((item) => (
                    <a
                      key={item.id}
                      href={item.link}
                      target={item.external || item.download ? '_blank' : undefined}
                      rel={item.external || item.download ? 'noopener noreferrer' : undefined}
                      download={item.download ? 'PankajPede_Resume.pdf' : undefined}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-3 text-sm font-bold text-ink"
                    >
                      {renderConnectIcon(item.iconName)}
                      <span>{item.label}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>

          </div>
        </div>
      )}
    </>
  );
}
