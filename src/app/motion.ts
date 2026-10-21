import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router';

/** True when the student (Settings) or the system asks for less motion. */
export function motionReduced(): boolean {
  if (typeof document === 'undefined') return true;
  if (document.documentElement.dataset.motion === 'reduced') return true;
  return typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Press feedback: a soft ripple spreads from the pointer on every element
 * marked `data-ripple` (buttons, tiles, navigation). One delegated listener,
 * no React state, removed again when its animation ends.
 */
export function installRipple(): () => void {
  const onDown = (event: PointerEvent) => {
    if (event.button !== 0 || motionReduced()) return;
    const host = (event.target as Element | null)?.closest<HTMLElement>('[data-ripple]');
    if (!host || host.matches(':disabled, [aria-disabled="true"]')) return;
    const rect = host.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 2.2;
    const ripple = document.createElement('span');
    ripple.className = 'ripple';
    ripple.setAttribute('aria-hidden', 'true');
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${event.clientX - rect.left - size / 2}px`;
    ripple.style.top = `${event.clientY - rect.top - size / 2}px`;
    host.appendChild(ripple);
    ripple.addEventListener('animationend', () => ripple.remove(), { once: true });
    // Safety net if the animation never runs (hidden tab).
    setTimeout(() => ripple.remove(), 1000);
  };
  document.addEventListener('pointerdown', onDown, { passive: true });
  return () => document.removeEventListener('pointerdown', onDown);
}

/**
 * Fades and lifts the page in after each navigation. Uses the Web Animations
 * API on the existing element, so nothing is remounted.
 */
export function usePageTransition() {
  const ref = useRef<HTMLDivElement>(null);
  const { pathname } = useLocation();
  useEffect(() => {
    const element = ref.current;
    if (!element || motionReduced() || typeof element.animate !== 'function') return;
    const animation = element.animate(
      [
        { opacity: 0, transform: 'translateY(10px)' },
        { opacity: 1, transform: 'none' },
      ],
      { duration: 360, easing: 'cubic-bezier(0.22, 1, 0.36, 1)' },
    );
    return () => animation.cancel();
  }, [pathname]);
  return ref;
}
