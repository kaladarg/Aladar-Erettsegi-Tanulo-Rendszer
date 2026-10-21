import type { ReactNode } from 'react';

interface PageHeaderProps {
  title: string;
  description?: string;
  actions?: ReactNode;
}

/** Page title. The h1 receives focus after navigation (see RouteFocus). */
export function PageHeader({ title, description, actions }: PageHeaderProps) {
  return (
    <header className="mb-6 flex flex-col gap-4 sm:mb-8 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <span
          aria-hidden="true"
          className="mb-3 block h-1.5 w-12 origin-left rounded-full bg-linear-90 from-primary to-accent motion-safe:animate-[grow-x_var(--motion-slow)_var(--ease-out)_both]"
        />
        <h1
          tabIndex={-1}
          data-page-title
          className="text-3xl font-bold tracking-tight outline-none sm:text-4xl"
        >
          {title}
        </h1>
        {description && <p className="mt-2 max-w-prose text-lg text-muted">{description}</p>}
      </div>
      {actions}
    </header>
  );
}
