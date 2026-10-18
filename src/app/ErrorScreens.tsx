import { Compass, RefreshCw, TriangleAlert } from 'lucide-react';
import { Component, type ErrorInfo, type ReactNode } from 'react';
import { Link } from 'react-router';
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

/** Used as the router's errorElement. */
export function RouteError() {
  usePageTitle(t('errors.genericTitle'));
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
    console.error('Unhandled UI error', error, info.componentStack);
  }

  render() {
    return this.state.failed ? <CrashScreen /> : this.props.children;
  }
}
