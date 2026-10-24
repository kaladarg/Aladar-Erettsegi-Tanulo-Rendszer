import { Compass, RefreshCw, TriangleAlert } from 'lucide-react';
import { Component, useEffect, type ErrorInfo, type ReactNode } from 'react';
import { Link, useRouteError } from 'react-router';
import { Button } from '@/design/ui/Button';
import { EmptyState } from '@/design/ui/EmptyState';
import { PageHeader } from '@/design/ui/PageHeader';
import { t } from '@/i18n';
import { usePageTitle } from './usePageTitle';

export function CrashScreen() {
  return (
    <div className="mx-auto max-w-xl px-4 py-16">
      <EmptyState
        tone="danger"
        icon={<TriangleAlert />}
        title={t('errors.genericTitle')}
        description={t('errors.genericBody')}
        action={
          <Button onClick={() => window.location.reload()}>
            <RefreshCw aria-hidden="true" />
            {t('errors.reload')}
          </Button>
        }
      />
    </div>
  );
}

const CHUNK_ERROR =
  /dynamically imported module|Importing a module script failed|error loading dynamically imported module|Loading chunk/i;
const RELOADED_KEY = 'eg-chunk-reload';

/**
 * After a new version is published, a page that was opened earlier still asks
 * for the old code files, which are gone. Reloading once fetches the new ones.
 */
function reloadAfterChunkError(error: unknown): boolean {
  const message = error instanceof Error ? error.message : String(error);
  if (!CHUNK_ERROR.test(message)) return false;
  try {
    const last = Number(sessionStorage.getItem(RELOADED_KEY) ?? 0);
    if (Date.now() - last < 30_000) return false;
    sessionStorage.setItem(RELOADED_KEY, String(Date.now()));
  } catch {
    return false;
  }
  window.location.reload();
  return true;
}

/** Used as the router's errorElement. */
export function RouteError() {
  const error = useRouteError();
  usePageTitle(t('errors.genericTitle'));
  useEffect(() => {
    reloadAfterChunkError(error);
  }, [error]);
  return <CrashScreen />;
}

export function NotFoundPage() {
  usePageTitle(t('errors.notFoundTitle'));
  return (
    <>
      <PageHeader title={t('errors.notFoundTitle')} description={t('errors.notFoundBody')} />
      <Button asChild>
        <Link to="/">
          <Compass aria-hidden="true" />
          {t('errors.goHome')}
        </Link>
      </Button>
    </>
  );
}

interface BoundaryState {
  failed: boolean;
}

/** Last-resort boundary around the whole app (outside the router). */
export class AppErrorBoundary extends Component<{ children: ReactNode }, BoundaryState> {
  state: BoundaryState = { failed: false };

  static getDerivedStateFromError(): BoundaryState {
    return { failed: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo): void {
    if (reloadAfterChunkError(error)) return;
    console.error('Unhandled UI error', error, info.componentStack);
  }

  render() {
    return this.state.failed ? <CrashScreen /> : this.props.children;
  }
}
