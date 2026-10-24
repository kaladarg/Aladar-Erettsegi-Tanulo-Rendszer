import { Library, PlayCircle, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router';
import { usePageTitle } from '@/app/usePageTitle';
import { DEFAULT_SUBJECTS } from '@/content/catalog';
import { SubjectBadge } from '@/content/SubjectIcon';
import { Button } from '@/design/ui/Button';
import { EmptyState } from '@/design/ui/EmptyState';
import { Skeleton } from '@/design/ui/Skeleton';
import { t } from '@/i18n';
import { useOnboarding } from '@/state/onboardingStore';
import { useSettings } from '@/state/settingsStore';
import { useStatsData } from '../stats/useStatsData';
import { NextStepCard } from './Dashboard';
import { ResumeCard } from './Resume';
import { WeeklySummary } from './WeeklySummary';
import { HeroBanner } from './HeroBanner';
import { DataSafetyReminder } from '../settings/DataSafety';
import { PracticeTools, WhatsNew } from './PracticeTools';

export function HomePage() {
  usePageTitle(t('nav.home'));
  const settingsLoaded = useSettings((state) => state.loaded);
  const stats = useStatsData();
  // Settings and progress both come from IndexedDB within milliseconds; showing
  // them together avoids the page jumping as each part arrives.
  const loaded = settingsLoaded && !!stats;
  const selected = useSettings((state) => state.settings.subjects);
  const showOnboarding = useOnboarding((state) => state.show);
  const subjects = DEFAULT_SUBJECTS.filter((subject) => selected.includes(subject.id));

  return (
    <>
      <HeroBanner data={stats} />
      {loaded && <DataSafetyReminder />}
      {loaded && <WhatsNew />}
      {loaded && (
        <div className="grid gap-4">
          <WeeklySummary data={stats} />
          <ResumeCard />
          <NextStepCard data={stats} />
        </div>
      )}

      <section aria-labelledby="home-subjects" className="mt-8">
        <h2 id="home-subjects" className="mb-3 text-xl font-semibold">
          {t('home.yourSubjects')}
        </h2>
        {!loaded ? (
          <Skeleton className="h-12" aria-busy="true" />
        ) : subjects.length === 0 ? (
          <EmptyState
            icon={<PlayCircle />}
            title={t('home.noSubjectsTitle')}
            description={t('home.noSubjectsBody')}
            action={<Button onClick={showOnboarding}>{t('home.chooseSubjects')}</Button>}
          />
        ) : (
          // A compact row: the subject pages are one tap away, without a card each.
          <ul className="flex flex-wrap gap-2">
            {subjects.map((subject) => (
              <li key={subject.id}>
                <Link
                  to={`/feladatsorok?targy=${subject.id}`}
                  aria-label={t('home.browseSubject', { subject: subject.name })}
                  data-ripple=""
                  className="inline-flex min-h-11 items-center gap-2 rounded-full border border-border bg-surface py-1 pr-4 pl-1 font-medium shadow-1 hover:border-border-strong"
                >
                  <SubjectBadge subject={subject} size="sm" />
                  {subject.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/feladatsorok"
                className="inline-flex min-h-11 items-center gap-2 rounded-full px-3 font-medium text-primary underline-offset-4 hover:underline"
              >
                <Library aria-hidden="true" className="size-4" />
                {t('home.subjectsAll')}
              </Link>
            </li>
          </ul>
        )}
      </section>

      {loaded && <PracticeTools />}

      <div className="mt-10 flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="flex items-center gap-2 text-sm text-muted">
          <ShieldCheck aria-hidden="true" className="size-4 text-success" />
          {t('home.privacyNote')}{' '}
          <Link to="/beallitasok" className="underline underline-offset-4 hover:text-text">
            {t('nav.settings')}
          </Link>
        </p>
        <Button variant="secondary" size="sm" onClick={showOnboarding}>
          {t('home.reopenOnboarding')}
        </Button>
      </div>
    </>
  );
}
