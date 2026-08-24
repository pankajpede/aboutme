import { useState, useEffect, useRef } from 'react';

export function BrandSplash({ onComplete }: { onComplete?: () => void }) {
  const [step, setStep] = useState(0);
  const [hidden, setHidden] = useState(false);
  const onCompleteRef = useRef(onComplete);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    // Lock body scroll while splash screen is active
    document.body.style.overflow = 'hidden';

    // Step 0: Initial dark background #2C2D32

    // Step 1: Outer solid circle fades in
    const t1 = setTimeout(() => setStep(1), 400);

    // Step 2: Middle solid circle fades in
    const t2 = setTimeout(() => setStep(2), 850);

    // Step 3: Inner solid circle fades in
    const t3 = setTimeout(() => setStep(3), 1300);

    // Step 4: P. logo appears together in center
    const t4 = setTimeout(() => setStep(4), 1800);

    // Step 5: P. logo stays visible together, dot '.' blinks 2-3 calm times (4.0s breathing window)
    const t5 = setTimeout(() => setStep(5), 2400);

    // Step 6: Dot expands smoothly from its center to wipe the viewport off-white #F7F7F5
    const t6 = setTimeout(() => {
      setStep(6);
    }, 6400);

    // Step 7: Complete sequence, hide splash overlay & trigger hero typewriter in perfect synch
    const t7 = setTimeout(() => {
      setHidden(true);
      document.body.style.overflow = '';
      if (onCompleteRef.current) onCompleteRef.current();
    }, 7800);

    return () => {
      document.body.style.overflow = '';
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
      clearTimeout(t6);
      clearTimeout(t7);
    };
  }, []);

  if (hidden) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center overflow-hidden select-none pointer-events-auto transition-all duration-700 ease-out ${
        step >= 6 ? 'bg-background' : 'bg-primary'
      } ${step >= 7 ? 'opacity-0' : 'opacity-100'}`}
    >

      {/* Concentric Circle 1 (Outer Lighter Disc) */}
      <div
        className={`absolute w-[440px] h-[440px] rounded-full bg-white/[0.15] transition-all duration-1000 ease-out ${
          step >= 1 && step < 6 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
      ></div>

      {/* Concentric Circle 2 (Middle Lighter Disc) */}
      <div
        className={`absolute w-[290px] h-[290px] rounded-full bg-white/[0.25] transition-all duration-1000 ease-out ${
          step >= 2 && step < 6 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
      ></div>

      {/* Concentric Circle 3 (Inner Center Disc in Warm Background) */}
      <div
        className={`absolute w-[160px] h-[160px] rounded-full bg-background shadow-2xl flex items-center justify-center transition-all duration-1000 ease-out ${
          step >= 3 && step < 6 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
      ></div>

      {/* P. Logo Display */}
      <div className="relative z-10 flex items-baseline justify-center font-display font-bold text-5xl lg:text-6xl text-primary tracking-tighter leading-none">

        {/* P character - gracefully fades out as dot expands */}
        <span
          className={`transition-all duration-500 ease-out ${
            step >= 4 && step < 6
              ? 'opacity-100 translate-y-0 scale-100'
              : 'opacity-0 scale-90'
          }`}
        >
          P
        </span>

        {/* Expanding Dot "." - Expands seamlessly to wipe screen into background shade */}
        <span
          className={`inline-block w-2.5 h-2.5 rounded-full ml-1 mb-1 origin-center transition-transform duration-[1400ms] ease-[cubic-bezier(0.7,0,0.2,1)] ${
            step < 4
              ? 'opacity-0 scale-50 bg-primary'
              : step === 4
                ? 'opacity-100 scale-100 bg-primary'
                : step === 5
                  ? 'opacity-100 scale-110 animate-pulse-soft bg-primary'
                  : 'opacity-100 z-50 !bg-background'
          }`}
          style={{
            transform: step >= 6 ? 'scale(600)' : undefined
          }}
        ></span>

      </div>

    </div>
  );
}
