import {
  BarChart3,
  Dumbbell,
  GraduationCap,
  House,
  Info,
  Library,
  Settings as SettingsIcon,
} from 'lucide-react';
import { NavLink, Outlet } from 'react-router';
import { t, type MessageKey } from '@/i18n';
import { cn } from '@/lib/cn';
import { OnboardingDialog } from '@/features/onboarding/OnboardingDialog';
import { useSettings } from '@/state/settingsStore';
import { RouteFocus } from './RouteFocus';
import { StorageWarning } from './StorageWarning';
import { usePersistentStorage } from './usePersistentStorage';

/** `sideOnly` items stay out of the five-slot bottom bar; Settings links to them. */
const NAV_ITEMS: { to: string; label: MessageKey; icon: typeof House; sideOnly?: boolean }[] = [
  { to: '/', label: 'nav.home', icon: House },
  { to: '/feladatsorok', label: 'nav.exams', icon: Library },
  { to: '/gyakorlas', label: 'nav.practice', icon: Dumbbell },
  { to: '/statisztika', label: 'nav.stats', icon: BarChart3 },
  { to: '/beallitasok', label: 'nav.settings', icon: SettingsIcon },
  { to: '/nevjegy', label: 'nav.about', icon: Info, sideOnly: true },
];

function NavItems({ variant }: { variant: 'side' | 'bottom' }) {
  return (
    <ul className={cn(variant === 'bottom' ? 'grid grid-cols-5' : 'flex flex-col gap-1')}>
      {NAV_ITEMS.filter((item) => variant === 'side' || !item.sideOnly).map(
        ({ to, label, icon: Icon }) => (
          <li key={to}>
            <NavLink
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                cn(
                  'flex items-center rounded-md font-medium transition-colors',
                  variant === 'side'
                    ? 'min-h-11 gap-3 px-3 hover:bg-surface-muted'
                    : 'min-h-16 flex-col justify-center gap-1 px-0.5 text-center text-[0.6875rem] leading-tight',
                  isActive
                    ? variant === 'side'
                      ? 'bg-primary-soft text-primary-soft-fg hover:bg-primary-soft'
                      : 'text-primary'
                    : 'text-muted hover:text-text',
                )
              }
            >
              <Icon aria-hidden="true" className="size-5" />
              {t(label)}
            </NavLink>
          </li>
        ),
      )}
    </ul>
  );
}

export function Layout() {
  const loaded = useSettings((state) => state.loaded);
  usePersistentStorage();

  return (
    <div className="min-h-dvh md:grid md:grid-cols-[15rem_1fr]">
      <a
        href="#main"
        className="sr-only z-50 rounded-md bg-surface px-4 py-2 shadow-2 focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        {t('app.skipToContent')}
      </a>

      <aside className="hidden border-r border-border bg-surface md:block">
        <div className="sticky top-0 flex h-dvh flex-col p-4">
          <AppMark />
          <nav aria-label={t('app.mainNav')} className="mt-8">
            <NavItems variant="side" />
          </nav>
        </div>
      </aside>

      <header className="sticky top-0 z-30 border-b border-border bg-surface/95 px-4 py-3 backdrop-blur md:hidden">
        <AppMark />
      </header>

      <main id="main" tabIndex={-1} className="outline-none">
        <div className="mx-auto w-full max-w-4xl px-4 pt-6 pb-28 sm:px-6 md:pt-10 md:pb-12">
          <StorageWarning />
          <Outlet />
        </div>
      </main>

      <nav
        aria-label={t('app.mainNav')}
        className="fixed inset-x-0 bottom-0 z-30 border-t border-border bg-surface/95 pb-[env(safe-area-inset-bottom)] backdrop-blur md:hidden"
      >
        <NavItems variant="bottom" />
      </nav>

      <RouteFocus />
      {loaded && <OnboardingDialog />}
    </div>
  );
}

function AppMark() {
  return (
    <NavLink to="/" className="flex items-center gap-2 rounded-md text-lg font-bold">
      <span className="flex size-9 items-center justify-center rounded-md bg-primary text-primary-fg">
        <GraduationCap aria-hidden="true" className="size-5" />
      </span>
      {t('app.name')}
    </NavLink>
  );
}
