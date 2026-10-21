import { useState, useEffect, useRef } from 'react';
import { Mascot } from '../ui/Mascot';
import kamranDirections from '../../assets/images/avatar/kamran-directions.webp';
import kamranReactions from '../../assets/images/avatar/kamran-reactions.webp';
import resumePdf from '../../assets/documents/PankajPede_UXUiDesigner_12.pdf';
import { HeroIdBadge } from './HeroIdBadge';
import {
  FiDownload,
  FiMail,
  FiPhone,
  FiMapPin,
  FiCopy,
  FiCheck,
  FiBriefcase,
  FiClock,
} from '../ui/Icons';

// Import technology SVG icons
import iconFigma from '../../assets/images/skills/figma.svg';
import iconIllustrator from '../../assets/images/skills/adobe-illustrator-cs6.svg';
import iconPhotoshop from '../../assets/images/skills/adobe-photoshop.svg';
import iconMiro from '../../assets/images/skills/miro.svg';
import iconReact from '../../assets/images/skills/react-native.svg';
import iconAngular from '../../assets/images/skills/angular.svg';
import iconTypescript from '../../assets/images/skills/typescript.svg';
import iconTailwind from '../../assets/images/skills/tailwind-css.svg';
import iconBootstrap from '../../assets/images/skills/bootstrap-5.svg';
import iconGithub from '../../assets/images/skills/github.svg';

// Custom inline SVG icons for web, languages and AI tools
const IconHtml5 = () => (
  <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none">
    <path d="M1.5 0h21l-1.91 21.563L11.97 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.236-2.657-12.984.002.701 8.028h8.802l-.337 3.524-2.73.743-2.738-.743-.175-1.956H6.386l.342 4.093 5.243 1.45 5.234-1.45.696-7.318H8.531z" fill="#E34F26" />
  </svg>
);

const IconHtml = () => (
  <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none">
    <rect width="24" height="24" rx="4" fill="#E44D26" fillOpacity="0.12" stroke="#E44D26" strokeWidth="1.4" />
    <path d="M7 8l-3 4 3 4M17 8l3 4-3 4M13.5 7l-3 10" stroke="#E44D26" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconCss3 = () => (
  <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none">
    <path d="M1.5 0h21l-1.91 21.563L11.97 24l-8.564-2.438L1.5 0zm14.156 12.094l.236-2.657H6.551l.232 2.657h8.873zm.472-5.375l.236-2.657H5.612l.232 2.657h10.871zm-9.578 7.331l.175 1.956 2.738.743 2.73-.743.337-3.524H6.216l-.342 4.093 5.243 1.45 5.234-1.45.696-7.318h-8.802" fill="#1572B6" />
  </svg>
);

const IconCss = () => (
  <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none">
    <rect width="24" height="24" rx="4" fill="#264DE4" fillOpacity="0.12" stroke="#264DE4" strokeWidth="1.4" />
    <path d="M6 8h12M6 12h8M6 16h10" stroke="#264DE4" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const IconScss = () => (
  <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm3.842 16.593c-2.43 1.258-5.385.733-6.953-.615-1.226-1.055-1.396-2.73-.398-3.924 1.156-1.385 3.23-1.61 4.79-.81 1.255.644 1.933 1.83 1.54 3.013-.263.79-.98 1.34-1.848 1.465a3.86 3.86 0 0 1-1.36-.04.428.428 0 0 0-.484.341c-.05.244.1.48.347.535a4.78 4.78 0 0 0 2.45-.162c1.378-.396 2.37-1.493 2.583-2.906.276-1.836-.723-3.66-2.464-4.557-2.316-1.194-5.267-.84-7.008 1.246-1.503 1.797-1.244 4.324.6 5.91 2.35 2.023 6.307 2.228 9.294.693.305-.157.426-.532.27-.837a.618.618 0 0 0-.402-.288z" fill="#CC6699" />
  </svg>
);

const IconJs = () => (
  <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
    <rect width="24" height="24" rx="3.5" fill="#F7DF1E" />
    <path d="M7 16.5c.5.8 1.3 1.2 2.3 1.2 1.3 0 2.1-.6 2.1-1.9V9.5h-1.8v6.3c0 .5-.3.8-.7.8-.4 0-.6-.2-.8-.5l-1.1 1.4zm7.5-4.2c.7-.4 1.5-.7 2.3-.7 1.3 0 2 .6 2 1.6 0 1.1-.7 1.6-2 2-1.5.5-2.3 1.1-2.3 2.3 0 1.5 1.2 2.4 2.8 2.4 1.1 0 2-.4 2.7-1.1l-.9-1.3c-.5.5-1.2.8-1.8.8-.9 0-1.4-.4-1.4-1 0-.8.6-1.1 1.9-1.6 1.6-.6 2.4-1.2 2.4-2.5 0-1.4-1.1-2.3-2.7-2.3-1 0-1.9.3-2.6.9l.6 1.5z" fill="#000000" />
  </svg>
);

const IconStorybook = () => (
  <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none">
    <rect width="24" height="24" rx="3.5" fill="#FF4785" />
    <path d="M7 6.5h8.5c.8 0 1.5.7 1.5 1.5v9c0 .8-.7 1.5-1.5 1.5H7a1 1 0 0 1-1-1v-10a1 1 0 0 1 1-1z" fill="#ffffff" />
    <path d="M11 6.5v4l2-1.2 2 1.2v-4h-4z" fill="#FF4785" />
  </svg>
);

const IconOpenAI = () => (
  <svg className="w-4 h-4 shrink-0 text-ink" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.28 9.82a5.98 5.98 0 0 0-.52-4.91 6.05 6.05 0 0 0-6.51-2.9 6.07 6.07 0 0 0-10.27 2.17 5.98 5.98 0 0 0-4 2.9 6.05 6.05 0 0 0 .74 7.1 5.98 5.98 0 0 0 .51 4.91 6.05 6.05 0 0 0 6.51 2.9 5.98 5.98 0 0 0 4.51 2.01 6.06 6.06 0 0 0 5.77-4.21 5.99 5.99 0 0 0 4-2.9 6.06 6.06 0 0 0-.75-7.07zm-9.02 12.6a4.48 4.48 0 0 1-2.88-1.04l.14-.08 4.78-2.76a.8.8 0 0 0 .4-.68v-6.74l2.02 1.17a.07.07 0 0 1 .04.05v5.59a4.5 4.5 0 0 1-4.5 4.49zM3.6 18.3a4.47 4.47 0 0 1-.54-3.02l.14.09 4.79 2.76a.77.77 0 0 0 .78 0l5.84-3.37v2.33a.08.08 0 0 1-.03.06L9.74 19.95a4.5 4.5 0 0 1-6.14-1.65zM2.34 8.5a4.49 4.49 0 0 1 2.37-1.98v5.69a.77.77 0 0 0 .38.68l5.82 3.36-2.02 1.17a.08.08 0 0 1-.07 0L4 14.63A4.49 4.49 0 0 1 2.34 8.5zm16.1 3.85l-5.84-3.37 2.02-1.16a.08.08 0 0 1 .07 0l4.83 2.79a4.49 4.49 0 0 1-.68 8.1v-5.68a.77.77 0 0 0-.4-.68zm2.01-3.02l-.14-.09-4.78-2.76a.77.77 0 0 0-.78 0l-5.84 3.37V7.52a.08.08 0 0 1 .03-.06l4.98-2.88a4.5 4.5 0 0 1 6.53 4.74zM9.01 14.16l-2.02-1.17a.07.07 0 0 1-.04-.05V7.36a4.5 4.5 0 0 1 7.37-3.45l-.14.08-4.78 2.76a.8.8 0 0 0-.39.68v6.73zm1.32-2.91l2.36-1.37 2.37 1.37v2.74l-2.37 1.37-2.36-1.37V11.25z" />
  </svg>
);

const IconClaude = () => (
  <svg className="w-4 h-4 shrink-0 text-[#D97757]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2z" />
  </svg>
);

const IconCursor = () => (
  <svg className="w-4 h-4 shrink-0 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="3 11 22 2 13 21 11 13 3 11" fill="currentColor" fillOpacity="0.15" />
  </svg>
);

function Typewriter({
  text,
  delay = 0,
  speed = 20,
  active = false,
  skip = false,
  onComplete,
}: {
  text: string;
  delay?: number;
  speed?: number;
  active?: boolean;
  skip?: boolean;
  onComplete?: () => void;
}) {
  const [count, setCount] = useState(skip ? text.length : 0);
  const [start, setStart] = useState(skip);

  useEffect(() => {
    if (skip) {
      setCount(text.length);
      setStart(true);
      if (onComplete) onComplete();
      return;
    }

    if (!active) {
      setCount(0);
      setStart(false);
      return;
    }
    const timer = setTimeout(() => setStart(true), delay);
    return () => clearTimeout(timer);
  }, [active, delay, skip, text.length, onComplete]);

  useEffect(() => {
    if (skip || !start) return;
    if (count < text.length) {
      const currentChar = text[count];
      let charDelay = Math.floor(Math.random() * 14) + speed;
      if (['.', ',', '·', '✦'].includes(currentChar)) {
        charDelay += Math.floor(Math.random() * 60) + 50;
      } else if (currentChar === ' ') {
        charDelay += Math.floor(Math.random() * 20) + 15;
      }

      const charTimer = setTimeout(() => setCount((prev) => prev + 1), charDelay);
      return () => clearTimeout(charTimer);
    } else if (count >= text.length && onComplete) {
      onComplete();
    }
  }, [start, count, text, speed, skip, onComplete]);

  const displayed = text.slice(0, count);
  const isTyping = !skip && start && count < text.length;

  return (
    <span className="inline whitespace-normal">
      {displayed}
      {isTyping && (
        <span className="w-2 h-2 rounded-full bg-ink animate-pulse-soft inline-block ml-1 self-center shrink-0 shadow-xs"></span>
      )}
    </span>
  );
}

export function Hero({ splashFinished }: { splashFinished?: boolean }) {
  const wasSplashActive = useRef<boolean>(splashFinished === false);

  const [skipTypewriter] = useState<boolean>(() => {
    return splashFinished === true && !wasSplashActive.current;
  });

  const [mounted, setMounted] = useState<boolean>(splashFinished !== false || skipTypewriter);
  const [ctaVisible, setCtaVisible] = useState<boolean>(skipTypewriter);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [copiedField, setCopiedField] = useState<'phone' | 'email' | null>(null);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (skipTypewriter) {
      setMounted(true);
      setCtaVisible(true);
      return;
    }

    if (splashFinished === true) {
      const timer = setTimeout(() => {
        setMounted(true);
      }, 50);
      return () => clearTimeout(timer);
    } else if (splashFinished === false) {
      setMounted(false);
      setCtaVisible(false);
    }
  }, [splashFinished, skipTypewriter]);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const offsetX = (e.clientX - centerX) / (rect.width / 2);
    const offsetY = (e.clientY - centerY) / (rect.height / 2);
    setMousePos({ x: offsetX, y: offsetY });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  const handleCopy = (text: string, field: 'phone' | 'email') => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => {
      setCopiedField(null);
    }, 2000);
  };

  // Curated skills grouped by category
  const skillCategories = [
    {
      category: 'Design & Craft',
      skills: [
        { name: 'Figma', iconSrc: iconFigma },
        { name: 'Miro', iconSrc: iconMiro },
        { name: 'Illustrator', iconSrc: iconIllustrator },
        { name: 'Photoshop', iconSrc: iconPhotoshop },
      ],
    },
    {
      category: 'Web & Styling',
      skills: [
        { name: 'HTML5', CustomIcon: IconHtml5 },
        { name: 'HTML', CustomIcon: IconHtml },
        { name: 'CSS3', CustomIcon: IconCss3 },
        { name: 'CSS', CustomIcon: IconCss },
        { name: 'SCSS', CustomIcon: IconScss },
        { name: 'Tailwind CSS', iconSrc: iconTailwind },
        { name: 'Bootstrap 5', iconSrc: iconBootstrap },
      ],
    },
    {
      category: 'Frontend & Systems',
      skills: [
        { name: 'JavaScript', CustomIcon: IconJs },
        { name: 'TypeScript', iconSrc: iconTypescript },
        { name: 'React', iconSrc: iconReact },
        { name: 'Angular', iconSrc: iconAngular },
        { name: 'Storybook', CustomIcon: IconStorybook },
        { name: 'GitHub', iconSrc: iconGithub },
      ],
    },
    {
      category: 'AI & Workflows',
      skills: [
        { name: 'ChatGPT', CustomIcon: IconOpenAI },
        { name: 'Claude', CustomIcon: IconClaude },
        { name: 'Cursor AI', CustomIcon: IconCursor },
      ],
    },
  ];

  return (
    <section
      id="hero-overview"
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="flex flex-col justify-center pb-4 relative overflow-x-clip bg-background"
    >
      {/* Background Micro-Grid */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0 bg-hero-grid opacity-30 transition-transform duration-300 ease-out"
          style={{
            transform: `translate3d(${mousePos.x * 2}px, ${mousePos.y * 2}px, 0)`
          }}
        ></div>
      </div>

      <div className="container mx-auto px-5 lg:px-10 xl:px-14 relative z-10">

        {/* 3-COLUMN EDITORIAL HERO GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-12 items-center">

          {/* ========================================================
              LEFT COLUMN: THE STORY & PRIMARY CTAs
              ======================================================== */}
          <div className="lg:col-span-4 xl:col-span-4 flex flex-col justify-center text-center lg:text-left items-center lg:items-start order-2 lg:order-1">

            {/* Top Micro Tag */}
            <div
              className={`flex items-center justify-center lg:justify-start gap-2 text-[11px] sm:text-xs font-bold tracking-[0.15em] uppercase text-muted mb-3 sm:mb-4 transition-all duration-700 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
            >
              <span className="text-primary ">01 —</span>
              <span className="text-ink">
                <Typewriter text="ABOUT & VISION" delay={100} speed={25} active={mounted} skip={skipTypewriter} />
              </span>
            </div>

            {/* Main Name Row: PANKAJ PEDE (Hidden on mobile to avoid repeating name on card directly above) */}
            <div className="hidden lg:flex items-center justify-start gap-4 sm:gap-5 mb-4 sm:mb-5 group/header">
              {/* 2-Line Name: PANKAJ PEDE */}
              <h1 className="font-display text-[30px] sm:text-[38px] xl:text-[46px] font-bold leading-[0.92] text-ink flex flex-col items-center lg:items-start uppercase">
                <span className="min-h-[1em] block">
                  <Typewriter text="PANKAJ" delay={500} speed={60} active={mounted} skip={skipTypewriter} />
                </span>
                <span className="min-h-[1em] block text-primary">
                  <Typewriter text="PEDE" delay={1000} speed={60} active={mounted} skip={skipTypewriter} />
                </span>
              </h1>
            </div>

            {/* Primary Positioning Statement */}
            <h2
              className={`font-display text-lg sm:text-xl xl:text-2xl font-bold leading-snug text-ink mb-3 max-w-sm sm:max-w-md transition-all duration-700 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              style={{ transitionDelay: skipTypewriter ? '0ms' : '1200ms' }}
            >
              <Typewriter
                text="I design products, not just interfaces."
                delay={1300}
                speed={20}
                active={mounted}
                skip={skipTypewriter}
              />
            </h2>

            {/* Narrative Summary (Refined mobile body font to 13.5px for effortless reading) */}
            <p
              className={`text-[13.5px] sm:text-sm text-muted font-normal leading-relaxed mb-6 max-w-sm sm:max-w-md mx-auto lg:mx-0 transition-all duration-700 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              style={{ transitionDelay: skipTypewriter ? '0ms' : '1800ms' }}
            >
              <Typewriter
                text="Turning complex enterprise problems into simple, valuable experiences. Over 13+ years shaping hybrid cloud platforms, AI workflows, and design systems."
                delay={1900}
                speed={16}
                active={mounted}
                skip={skipTypewriter}
                onComplete={() => setCtaVisible(true)}
              />
            </p>

            {/* MOBILE ONLY: Credential Pills (Without title, seamlessly supporting bio) */}
            <div className="lg:hidden flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mb-4">
              {/* Experience */}
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-surface-soft border border-border text-[11px] font-medium text-ink shadow-2xs">
                <FiBriefcase className="w-3 h-3 text-primary" />
                <span>13+ Years Exp</span>
              </div>

              {/* Based In */}
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-surface-soft border border-border text-[11px] font-medium text-ink shadow-2xs">
                <FiMapPin className="w-3 h-3 text-primary" />
                <span>Pune, India</span>
              </div>

              {/* Availability */}
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[11px] font-semibold text-emerald-600 shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Available</span>
              </div>
            </div>

            {/* Unified Action Suite: Download Resume + Mobile Call/Email Dock */}
            <div
              className={`w-full max-w-sm sm:max-w-md mx-auto lg:mx-0 transition-all duration-700 ease-out ${
                ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: skipTypewriter ? '0ms' : '200ms' }}
            >
              {/* Primary: Download Resume */}
              <div className="flex items-center justify-center lg:justify-start mb-2 lg:mb-0">
                <a
                  href={resumePdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  download="PankajPede_Resume.pdf"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-full bg-ink text-white hover:bg-primary font-bold text-xs tracking-wider uppercase transition-all duration-300 shadow-sm hover:shadow-md active:scale-95 group"
                  aria-label="Download Résumé"
                >
                  <span>Download Resume</span>
                  <FiDownload className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
                </a>
              </div>

              {/* MOBILE ONLY: Call & Email Action Buttons */}
              <div className="lg:hidden grid grid-cols-2 gap-2">
                <a
                  href="tel:+919561311757"
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl border border-border bg-surface hover:border-primary/60 text-ink text-xs font-semibold shadow-2xs active:scale-95 transition-all"
                >
                  <FiPhone className="w-3.5 h-3.5 text-primary" />
                  <span>Call Directly</span>
                </a>
                <a
                  href="mailto:pede.pankaj@gmail.com"
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl border border-border bg-surface hover:border-primary/60 text-ink text-xs font-semibold shadow-2xs active:scale-95 transition-all"
                >
                  <FiMail className="w-3.5 h-3.5 text-primary" />
                  <span>Email Me</span>
                </a>
              </div>
            </div>

          </div>


          {/* ========================================================
              CENTER COLUMN: 3D LANYARD ID CARD BADGE
              ======================================================== */}
          <div className="lg:col-span-4 xl:col-span-4 flex justify-center items-center order-1 lg:order-2 pt-0 pb-4 lg:py-0">
            <HeroIdBadge mousePos={mousePos} />
          </div>


          {/* ========================================================
              RIGHT COLUMN: QUICK SPECS, CONTACT & SKILLS
              ======================================================== */}
          <div className="lg:col-span-4 xl:col-span-4 flex flex-col justify-center text-left order-3 lg:order-3 w-full max-w-md mx-auto lg:max-w-none">

            {/* Quick Specs Container Card */}
            <div className="p-3">

              {/* DESKTOP ONLY: Quick Specs Header Title */}
              <div className="hidden lg:flex items-center justify-between pb-3">
                <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-ink">
                  QUICK SPECS
                </span>
              </div>

              {/* DESKTOP ONLY: Key-Value Facts Table */}
              <div className="hidden lg:block text-xs">

                {/* Total Experience */}
                <div className="flex items-center justify-between py-3 border-b border-dashed border-border/60">
                  <span className="text-muted font-medium flex items-center gap-1.5">
                    <FiBriefcase className="w-3 h-3 text-primary" />
                    Experience
                  </span>
                  <span className="font-semibold text-ink ">13+ Years</span>
                </div>

                {/* Location */}
                <div className="flex items-center justify-between py-3 border-b border-dashed border-border/60">
                  <span className="text-muted font-medium flex items-center gap-1.5">
                    <FiMapPin className="w-3 h-3 text-primary" />
                    Based In
                  </span>
                  <span className="font-semibold text-ink">Pune, India</span>
                </div>

                {/* Availability */}
                <div className="flex items-center justify-between py-3 border-b border-dashed border-border/60">
                  <span className="text-muted font-medium flex items-center gap-1.5">
                    <FiClock className="w-3 h-3 text-primary" />
                    Availability
                  </span>
                  <span className="font-semibold text-emerald-600 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    Open for opportunities
                  </span>
                </div>

                {/* Phone */}
                <div className="flex items-center justify-between py-3 border-b border-dashed border-border/60">
                  <span className="text-muted font-medium flex items-center gap-1.5">
                    <FiPhone className="w-3 h-3 text-primary" />
                    Phone
                  </span>
                  <div className="flex items-center gap-2">
                    <a
                      href="tel:+919561311757"
                      className="font-semibold  text-ink hover:text-primary transition-colors"
                    >
                      +91 95613 11757
                    </a>
                    <button
                      type="button"
                      onClick={() => handleCopy('+919561311757', 'phone')}
                      className="text-muted hover:text-ink transition-colors p-1"
                      title="Copy phone number"
                    >
                      {copiedField === 'phone' ? (
                        <FiCheck className="w-3.5 h-3.5 text-emerald-600" />
                      ) : (
                        <FiCopy className="w-3 h-3" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center justify-between py-3 border-b border-dashed border-border/60">
                  <span className="text-muted font-medium flex items-center gap-1.5">
                    <FiMail className="w-3 h-3 text-primary" />
                    Email
                  </span>
                  <div className="flex items-center gap-2">
                    <a
                      href="mailto:pede.pankaj@gmail.com"
                      className="font-semibold  text-ink hover:text-primary transition-colors text-[11px] sm:text-xs truncate max-w-[150px] sm:max-w-none"
                    >
                      pede.pankaj@gmail.com
                    </a>
                    <button
                      type="button"
                      onClick={() => handleCopy('pede.pankaj@gmail.com', 'email')}
                      className="text-muted hover:text-ink transition-colors p-1"
                      title="Copy email address"
                    >
                      {copiedField === 'email' ? (
                        <FiCheck className="w-3.5 h-3.5 text-emerald-600" />
                      ) : (
                        <FiCopy className="w-3 h-3" />
                      )}
                    </button>
                  </div>
                </div>

              </div>

              {/* Skills & Tech Logos Grouped by Category (Inline Row Layout) */}
              <div className="mt-4">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[10px] font-bold tracking-wider uppercase text-ink">
                    CORE TOOLKIT & SKILLS
                  </span>
                </div>

                <div className="divide-y divide-dashed divide-border/40">
                  {skillCategories.map((group) => (
                    <div
                      key={group.category}
                      className="flex items-center gap-2 sm:gap-3 py-1.5"
                    >
                      {/* Category Label (Inline Left) */}
                      <span className="text-[9.5px] sm:text-[10px] font-bold tracking-wider uppercase text-muted shrink-0 w-[86px] sm:w-[98px] leading-tight">
                        {group.category}
                      </span>

                      {/* Category Icons Row (Inline Right) */}
                      <div className="flex flex-wrap items-center gap-1.5 flex-1">
                        {group.skills.map((skill) => (
                          <div
                            key={skill.name}
                            className="relative flex items-center justify-center group/skill"
                          >
                            {/* Styled Floating Tooltip */}
                            <div className="opacity-0 group-hover/skill:opacity-100 group-hover/skill:-translate-y-1 transition-all duration-150 pointer-events-none absolute -top-8 bg-ink text-white text-[9.5px] font-semibold tracking-wide px-2 py-0.5 rounded shadow-md whitespace-nowrap z-50">
                              {skill.name}
                              <div className="w-1.5 h-1.5 bg-ink rotate-45 absolute -bottom-0.5 left-1/2 -translate-x-1/2"></div>
                            </div>

                            {/* Icon Tile (Full color by default, compact size) */}
                            <div className="w-7 h-7 sm:w-[30px] sm:h-[30px] rounded-lg border border-border bg-surface-soft hover:bg-surface hover:border-primary/60 hover:scale-110 hover:shadow-xs transition-all duration-200 flex items-center justify-center p-1.5 shadow-2xs cursor-pointer">
                              {skill.iconSrc ? (
                                <img
                                  src={skill.iconSrc}
                                  alt={skill.name}
                                  className="w-full h-full object-contain"
                                />
                              ) : skill.CustomIcon ? (
                                <div className="w-full h-full flex items-center justify-center">
                                  <skill.CustomIcon />
                                </div>
                              ) : null}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Editorial Signature Quote */}
              {/* <div className="mt-4 pt-3 border-t border-dashed border-border/80">
                <p className="font-serif italic text-xs text-muted/90 leading-snug">
                  "From complex infrastructure to the last human interaction."
                </p>
              </div> */}

            </div>

          </div>

        </div>

        {/* 04. Minimal Scroll Indicator */}
        <div className="flex justify-center mt-6 lg:mt-8">
          <button
            onClick={() => {
              const target = document.getElementById('learning-sharing') || document.querySelector('section:nth-of-type(2)');
              if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="flex items-center gap-2 cursor-pointer group text-muted hover:text-primary transition-colors"
            aria-label="Scroll down to explore"
          >
            <div className="w-4 h-6 rounded-full border border-border flex items-start justify-center p-0.5 group-hover:border-primary transition-colors">
              <div className="w-1 h-1 rounded-full bg-primary animate-scroll-dot"></div>
            </div>
            <span className="text-[9px]  tracking-[0.2em] uppercase font-bold">
              SCROLL
            </span>
          </button>
        </div>

      </div>
    </section>
  );
}
