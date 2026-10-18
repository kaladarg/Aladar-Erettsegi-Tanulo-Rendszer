import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router';

/**
 * After client-side navigation, move focus to the new page's h1 so keyboard
 * and screen reader users land on the new content (WCAG 2.4.3).
 */
export function RouteFocus() {
  const { pathname } = useLocation();
  const first = useRef(true);

  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    window.scrollTo({ top: 0 });
    const heading = document.querySelector<HTMLElement>('[data-page-title]');
    heading?.focus({ preventScroll: true });
  }, [pathname]);

  return null;
}
