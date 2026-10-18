import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router';

const HEADING = '[data-page-title]';

/**
 * After client-side navigation, move focus to the new page's h1 so keyboard
 * and screen reader users land on the new content (WCAG 2.4.3). Pages that
 * load data render their heading later, so wait for it briefly.
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
    const focus = () => {
      const heading = document.querySelector<HTMLElement>(HEADING);
      if (!heading) return false;
      heading.focus({ preventScroll: true });
      return true;
    };
    if (focus()) return;
    const observer = new MutationObserver(() => {
      if (focus()) observer.disconnect();
    });
    observer.observe(document.body, { childList: true, subtree: true });
    const timeout = window.setTimeout(() => observer.disconnect(), 5_000);
    return () => {
      observer.disconnect();
      window.clearTimeout(timeout);
    };
  }, [pathname]);

  return null;
}
