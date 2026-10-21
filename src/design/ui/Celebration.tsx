import { useState } from 'react';
import { motionReduced } from '@/app/motion';

const COLORS = ['#1a4fd6', '#f5b301', '#16a34a', '#e11d48', '#0ea5e9', '#a855f7'];
const PIECES = 36;

interface Piece {
  left: number;
  delay: number;
  duration: number;
  drift: number;
  spin: number;
  color: string;
  round: boolean;
}

function pieces(): Piece[] {
  return Array.from({ length: PIECES }, (_, i) => ({
    left: Math.random() * 100,
    delay: Math.random() * 250,
    duration: 1100 + Math.random() * 900,
    drift: (Math.random() - 0.5) * 160,
    spin: 360 + Math.random() * 540,
    color: COLORS[i % COLORS.length]!,
    round: i % 3 === 0,
  }));
}

/**
 * A short burst of confetti from the top of the screen, for a goal reached.
 * Purely decorative: hidden from screen readers, skipped with reduced motion.
 */
export function Celebration() {
  const [items] = useState(() => (motionReduced() ? [] : pieces()));
  if (items.length === 0) return null;
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-x-0 top-0 z-50 h-0 overflow-visible"
    >
      {items.map((piece, i) => (
        <span
          key={i}
          className="absolute top-0 block h-3 w-2"
          style={{
            left: `${piece.left}%`,
            background: piece.color,
            borderRadius: piece.round ? '9999px' : '2px',
            animation: `confetti-fall ${piece.duration}ms cubic-bezier(0.2, 0.6, 0.4, 1) ${piece.delay}ms both`,
            ['--drift' as string]: `${piece.drift}px`,
            ['--spin' as string]: `${piece.spin}deg`,
          }}
        />
      ))}
    </div>
  );
}
