import { useEffect, useRef, useState } from 'react';
import type { CSSProperties } from 'react';

const DIRECTIONS = [
  'up-left',
  'up',
  'up-right',
  'left',
  'center',
  'right',
  'down-left',
  'down',
  'down-right',
] as const;

const REACTIONS = [
  'blink',
  'heart',
  'sparkle',
  'surprised',
  'wink',
  'bashful',
  'sleepy',
  'dizzy',
  'delighted',
] as const;

type Direction = (typeof DIRECTIONS)[number];
type Reaction = (typeof REACTIONS)[number];

// Clockwise from the right, matching atan2 with y pointing down.
const CLOCKWISE: Direction[] = [
  'right',
  'down-right',
  'down',
  'down-left',
  'left',
  'up-left',
  'up',
  'up-right',
];
const SECTOR = (Math.PI * 2) / CLOCKWISE.length;
const HYSTERESIS = 0.12;
const DEAD_ZONE = 70;

const PAYOFFS: Reaction[] = ['heart', 'sparkle', 'delighted'];
const BOOP_PAYOFF = 120;
const BOOP_END = 560;
const SQUASH_MS = 420;
const DIZZY_AFTER = 4;
const DIZZY_WINDOW = 1600;
const DIZZY_END = 1100;

const SQUASH: Keyframe[] = [
  { transform: 'scale(1, 1)', easing: 'ease-in' },
  { transform: 'scale(1.10, 0.86)', offset: 0.18, easing: 'ease-out' },
  { transform: 'scale(0.95, 1.08)', offset: 0.45, easing: 'ease-in-out' },
  { transform: 'scale(1.03, 0.97)', offset: 0.72, easing: 'ease-in-out' },
  { transform: 'scale(1, 1)' },
];

// background-size 300% makes each cell a clean 0/50/100% step on both axes.
function cell(index: number): CSSProperties {
  return { backgroundPosition: `${(index % 3) * 50}% ${Math.floor(index / 3) * 50}%` };
}

function wrap(angle: number) {
  return Math.atan2(Math.sin(angle), Math.cos(angle));
}

const layer: CSSProperties = {
  position: 'absolute',
  inset: 0,
  backgroundSize: '300% 300%',
  backgroundRepeat: 'no-repeat',
};

export type MascotProps = {
  /** The 3x3 sheet of head directions. A served path, or an imported image. */
  directions: string;
  /** The 3x3 sheet of expressions. */
  reactions: string;
  size?: number | string;
  className?: string;
  /** What a screen reader calls it. */
  label?: string;
};

export function Mascot(props: MascotProps) {
  const { directions, reactions, size = '100%', className, label = 'Interactive Mascot' } = props;

  const buttonRef = useRef<HTMLButtonElement>(null);
  const squashRef = useRef<HTMLSpanElement>(null);
  const timersRef = useRef<number[]>([]);
  const boopsRef = useRef({ count: 0, at: 0 });
  const [direction, setDirection] = useState<Direction>('center');
  const [reaction, setReaction] = useState<Reaction | null>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Listen to prefers-reduced-motion so clicking still reacts (just without squash).
  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(query.matches);
    const onChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    query.addEventListener('change', onChange);
    return () => query.removeEventListener('change', onChange);
  }, []);

  // Clear timers on unmount.
  useEffect(() => {
    return () => {
      timersRef.current.forEach(window.clearTimeout);
    };
  }, []);

  // Track the pointer. Coarse pointers (touch) don't steer the head: the mascot
  // just rests at center and reacts when tapped.
  useEffect(() => {
    const hasFinePointer = window.matchMedia('(pointer: fine)').matches;
    if (!hasFinePointer) return;

    let current = direction;

    const onMove = (e: MouseEvent) => {
      const el = buttonRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;

      // Center dead zone: looking right at the viewer feels best here.
      if (dx * dx + dy * dy < DEAD_ZONE * DEAD_ZONE) {
        if (current !== 'center') {
          current = 'center';
          setDirection('center');
        }
        return;
      }

      const angle = Math.atan2(dy, dx);
      const currentIndex = CLOCKWISE.indexOf(current);
      // When already in a sector, stay in it until the angle has crossed
      // clearly into the next, so the head does not jitter on the boundary.
      if (currentIndex !== -1) {
        const centerAngle = currentIndex * SECTOR;
        const diff = Math.abs(wrap(angle - centerAngle));
        if (diff < SECTOR / 2 + HYSTERESIS) return;
      }

      const normalized = (angle + Math.PI * 2) % (Math.PI * 2);
      const index = Math.floor((normalized + SECTOR / 2) / SECTOR) % CLOCKWISE.length;
      const next = CLOCKWISE[index];
      if (next !== current) {
        current = next;
        setDirection(next);
      }
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, [direction]);

  const after = (ms: number, fn: () => void) => {
    const id = window.setTimeout(fn, ms);
    timersRef.current.push(id);
  };

  const boop = () => {
    timersRef.current.forEach(window.clearTimeout);
    timersRef.current = [];

    if (!prefersReducedMotion && squashRef.current) {
      squashRef.current.animate(SQUASH, { duration: SQUASH_MS, fill: 'none' });
    }

    const now = Date.now();
    const isRapid = now - boopsRef.current.at < DIZZY_WINDOW;
    const count = isRapid ? boopsRef.current.count + 1 : 1;
    boopsRef.current = { count, at: now };

    if (count >= DIZZY_AFTER) {
      boopsRef.current = { count: 0, at: 0 };
      setReaction('dizzy');
      after(DIZZY_END, () => setReaction(null));
      return;
    }

    setReaction('blink');
    after(BOOP_PAYOFF, () => {
      const payoff = PAYOFFS[Math.floor(Math.random() * PAYOFFS.length)];
      setReaction(payoff);
      after(BOOP_END - BOOP_PAYOFF, () => setReaction(null));
    });
  };

  const dirIndex = DIRECTIONS.indexOf(direction);
  const reactIndex = reaction ? REACTIONS.indexOf(reaction) : -1;

  return (
    <button
      ref={buttonRef}
      type="button"
      onClick={boop}
      aria-label={label}
      className={className}
      style={{
        width: size,
        height: size,
        padding: 0,
        margin: 0,
        background: 'transparent',
        border: 0,
        cursor: 'pointer',
        display: 'inline-block',
        position: 'relative',
        touchAction: 'manipulation',
      }}
    >
      <span
        ref={squashRef}
        style={{
          display: 'block',
          width: '100%',
          height: '100%',
          position: 'relative',
          transformOrigin: '50% 90%',
        }}
      >
        <span
          aria-hidden="true"
          style={{
            ...layer,
            backgroundImage: `url(${directions})`,
            ...cell(dirIndex),
          }}
        />
        {reactIndex !== -1 && (
          <span
            aria-hidden="true"
            style={{
              ...layer,
              backgroundImage: `url(${reactions})`,
              ...cell(reactIndex),
            }}
          />
        )}
      </span>
    </button>
  );
}
