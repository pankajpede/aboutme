import { FiArrowRight } from '../ui/Icons';
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import profilePhoto from '../../assets/images/profile-photo.jpeg';

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
      // AI Stream Typing Algorithm
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
    <span className="inline whitespace-pre">
      {displayed}
      {isTyping && (
        <span className="w-2 h-2 lg:w-2.5 lg:h-2.5 rounded-full bg-ink animate-pulse-soft inline-block ml-1 self-center shrink-0 shadow-sm"></span>
      )}
    </span>
  );
}

export function Hero({ splashFinished }: { splashFinished?: boolean }) {
  // Track if splash screen was actively running when Hero first mounted (initial load / refresh)
  const wasSplashActive = useRef<boolean>(splashFinished === false);

  // Skip typewriter animation ONLY if Hero mounted after splash was already finished (internal navigation)
  const [skipTypewriter] = useState<boolean>(() => {
    return splashFinished === true && !wasSplashActive.current;
  });

  const [mounted, setMounted] = useState<boolean>(splashFinished !== false || skipTypewriter);
  const [ctaVisible, setCtaVisible] = useState<boolean>(skipTypewriter);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (skipTypewriter) {
      setMounted(true);
      setCtaVisible(true);
      return;
    }

    // When splash finishes on fresh page load, mount Hero and trigger typewriter
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

  const handleTypewriterComplete = () => {
    setCtaVisible(true);
  };

  return (
    <section
      id="hero-overview"
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="flex flex-col justify-center pb-0 relative overflow-hidden bg-background"
    >
      {/* Layer 0: Subtle Micro-Grid Pattern */}
      <div
        className="absolute inset-0 bg-hero-grid opacity-30 pointer-events-none transition-transform duration-300 ease-out"
        style={{
          transform: `translate3d(${mousePos.x * 2}px, ${mousePos.y * 2}px, 0)`
        }}
      ></div>

      {/* Subtle Micro Crosshair Tracker */}
      <div
        className="hidden lg:block absolute w-4 h-4 text-border opacity-40 pointer-events-none z-0 transition-transform duration-100 ease-out"
        style={{
          transform: `translate3d(${mousePos.x * 12}px, ${mousePos.y * 12}px, 0)`
        }}
      >
        +
      </div>

      <div className="container mx-auto px-5 lg:px-12 xl:px-16 relative z-10 py-8 lg:py-12">

        <div className="flex flex-col items-center text-center">

          {/* Typography (Center Aligned Full Focus Content) */}
          <div className="w-full max-w-4xl mx-auto z-20 flex flex-col justify-center items-center text-center">

            {/* 01. Top Small Metadata - Typewriter */}
            <div
              className={`flex flex-wrap items-center justify-center gap-2 text-[10px] lg:text-[11px] font-semibold tracking-[0.1em] uppercase text-muted mb-5 transition-all duration-700 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
            >
              <span className="text-ink">
                <Typewriter text="✦ 13+ YEARS · INDIA" delay={100} speed={30} active={mounted} skip={skipTypewriter} />
              </span>
            </div>

            {/* 02. Main Name Display with B&W Profile Avatar & Typewriter */}
            <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-6 mb-5">
              {/* Left: B&W Profile Avatar Image */}
              <div
                className={`inline-block relative overflow-hidden rounded-full border-2 border-ink w-[40px] h-[40px] sm:w-[60px] sm:h-[60px] lg:w-[80px] lg:h-[80px] shrink-0 shadow-md transform hover:scale-105 transition-all duration-700 ease-out ${mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                  }`}
                style={{ transitionDelay: skipTypewriter ? '0ms' : '500ms' }}
              >
                <img
                  src={profilePhoto}
                  alt="Pankaj Pede"
                  className="w-full h-full object-cover filter grayscale contrast-110"
                />
              </div>

              {/* Right: 2 Line Name PANKAJ PEDE - Typewriter */}
              <h1 className="font-display text-[36px] sm:text-[42px] lg:text-[48px] font-bold leading-[0.95] text-ink flex flex-col items-start text-left uppercase">
                <span className="min-h-[1em] block">
                  <Typewriter text="PANKAJ" delay={600} speed={65} active={mounted} skip={skipTypewriter} />
                </span>
                <span className="min-h-[1em] block text-primary">
                  <Typewriter text="PEDE" delay={1100} speed={65} active={mounted} skip={skipTypewriter} />
                </span>
              </h1>
            </div>

            {/* 03. Primary Positioning Statement - Typewriter */}
            <h2
              className={`font-display text-xl lg:text-[20px] font-normal leading-[1.25] text-ink mb-5 max-w-xl mx-auto text-center tracking-tight transition-all duration-700 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
            >
              <Typewriter text="Designing at the intersection" delay={1500} speed={25} active={mounted} skip={skipTypewriter} /><br />
              <Typewriter text="of " delay={2250} speed={25} active={mounted} skip={skipTypewriter} />
              <span className="font-semibold">
                <Typewriter text="people" delay={2330} speed={25} active={mounted} skip={skipTypewriter} />
              </span>
              <Typewriter text=", " delay={2480} speed={25} active={mounted} skip={skipTypewriter} />
              <span className="font-semibold">
                <Typewriter text="business" delay={2530} speed={25} active={mounted} skip={skipTypewriter} />
              </span>
              <Typewriter text=" and " delay={2730} speed={25} active={mounted} skip={skipTypewriter} />
              <span className="font-semibold">
                <Typewriter text="technology" delay={2850} speed={25} active={mounted} skip={skipTypewriter} />
              </span>
              <Typewriter text="." delay={3100} speed={25} active={mounted} skip={skipTypewriter} />
            </h2>

            {/* 04. Supporting Line - Typewriter */}
            <p
              className={`text-sm lg:text-base font-medium tracking-wide text-muted mb-5 max-w-md mx-auto text-center transition-all duration-700 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
            >
              <Typewriter
                text="UX · Product · Systems · Digital Experiences"
                delay={3250}
                speed={25}
                active={mounted}
                skip={skipTypewriter}
                onComplete={handleTypewriterComplete}
              />
            </p>

            {/* 05. Action CTAs - Smooth Reveal ONLY after typing finishes */}
            <div
              className={`flex flex-wrap items-center justify-center gap-4 transition-all duration-700 ease-out ${ctaVisible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'
                }`}
            >
              {/* Primary CTA Button */}
              <Link
                to="/work"
                className="inline-flex items-center justify-center bg-primary text-white h-10 px-7 rounded-full text-[11px] font-bold tracking-widest uppercase hover:opacity-90 hover:-translate-y-0.5 transition-all duration-300 group shadow-sm"
              >
                VIEW MY WORK
                <FiArrowRight className="ml-2.5 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>

              {/* Secondary CTA Button */}
              <Link
                to="/about"
                className="inline-flex items-center justify-center bg-transparent border border-primary text-primary h-10 px-7 rounded-full text-[11px] font-bold tracking-widest uppercase hover:bg-primary hover:text-white hover:-translate-y-0.5 transition-all duration-300 group"
              >
                ABOUT MY JOURNEY
                <FiArrowRight className="ml-2 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* 06. Interactive Animated Scroll Indicator */}
            <button
              onClick={() => {
                const target = document.getElementById('learning-sharing') || document.querySelector('section:nth-of-type(2)');
                if (target) {
                  target.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className={`mt-10 sm:mt-12 flex flex-col items-center gap-2 cursor-pointer group transition-all duration-700 ease-out ${ctaVisible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'
                }`}
              style={{ transitionDelay: skipTypewriter ? '0ms' : '300ms' }}
              aria-label="Scroll down to explore content"
            >
              {/* Pill Mouse Outline Icon */}
              <div className="w-5 h-8 rounded-full border-[1.75px] border-ink/80 flex items-start justify-center p-1 group-hover:border-primary transition-colors shadow-sm">
                {/* Vertical Moving Scroll Wheel Dot */}
                <div className="w-1 h-1.5 rounded-full bg-primary animate-scroll-dot"></div>
              </div>

              {/* Spaced "Scroll" Label */}
              <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-muted group-hover:text-primary transition-colors">
                Scroll
              </span>
            </button>
          </div>

        </div>
      </div>

    </section>
  );
}
