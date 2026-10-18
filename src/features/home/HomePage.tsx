import { PlayCircle, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router';
import { usePageTitle } from '@/app/usePageTitle';
import { DEFAULT_LEVELS, DEFAULT_SUBJECTS, subjectAccent } from '@/content/catalog';
import { SubjectIcon } from '@/content/SubjectIcon';
import { Badge } from '@/design/ui/Badge';
import { Button } from '@/design/ui/Button';
import { EmptyState } from '@/design/ui/EmptyState';
import { PageHeader } from '@/design/ui/PageHeader';
import { Skeleton } from '@/design/ui/Skeleton';
import { t } from '@/i18n';
import { useOnboarding } from '@/state/onboardingStore';
import { useSettings } from '@/state/settingsStore';

export function HomePage() {
  usePageTitle(t('nav.home'));
  const loaded = useSettings((state) => state.loaded);
  const selected = useSettings((state) => state.settings.subjects);
  const showOnboarding = useOnboarding((state) => state.show);
  const subjects = DEFAULT_SUBJECTS.filter((subject) => selected.includes(subject.id));
  const level = DEFAULT_LEVELS[0];

  return (
    <>
      <PageHeader title={t('home.greeting')} description={t('home.intro')} />

      <section aria-labelledby="home-subjects">
        <h2 id="home-subjects" className="mb-4 text-xl font-semibold">
          {t('home.yourSubjects')}
        </h2>

        {!loaded ? (
          <div className="grid gap-4 sm:grid-cols-2" aria-busy="true">
            <Skeleton className="h-28" />
            <Skeleton className="h-28" />
          </div>
        ) : subjects.length === 0 ? (
          <EmptyState
            icon={<PlayCircle />}
            title={t('home.noSubjectsTitle')}
            description={t('home.noSubjectsBody')}
            action={<Button onClick={showOnboarding}>{t('home.chooseSubjects')}</Button>}
          />
        ) : (
          <ul className="grid gap-4 sm:grid-cols-2">
            {subjects.map((subject) => (
              <li
                key={subject.id}
                className="flex items-center gap-4 rounded-lg border border-border bg-surface p-5 shadow-1"
              >
                <span className="flex size-12 shrink-0 items-center justify-center rounded-md bg-surface-muted">
                  <SubjectIcon
                    subject={subject}
                    className={`size-6 ${subjectAccent(subject.id)}`}
                  />
                </span>
                <div className="min-w-0">
                  <p className="text-lg font-semibold">{subject.name}</p>
                  {level && <Badge className="mt-1">{level.name}</Badge>}
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>

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
