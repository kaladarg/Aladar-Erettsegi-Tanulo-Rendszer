import {
  Check,
  Dices,
  Layers,
  ListChecks,
  Play,
  RotateCcw,
  Sparkles,
  Target,
  X,
} from 'lucide-react';
import { useState, type ReactNode } from 'react';
import { Link, useNavigate } from 'react-router';
import { usePageTitle } from '@/app/usePageTitle';
import { findSubject, subjectAccent } from '@/content/catalog';
import { SubjectIcon } from '@/content/SubjectIcon';
import { Button } from '@/design/ui/Button';
import { SegmentedControl } from '@/design/ui/SegmentedControl';
import { Skeleton } from '@/design/ui/Skeleton';
import { TINTS, type Tint } from '@/design/ui/tints';
import {
  DAILY_LENGTHS,
  MAX_AREAS,
  type DailyLength,
  type DailyPlan,
} from '@/domain/practice/daily';
import { formatNumber, t } from '@/i18n';
import { cn } from '@/lib/cn';
import { useSettings } from '@/state/settingsStore';
import { createDrill } from '@/storage/practice';
import { Study } from '../cards/CardStudyPage';
import { useDailyPlan, useDailySubjects, useTodaysDaily, type DailyChoiceInput } from './useDaily';

const AREA_TINTS: Tint[] = ['blue', 'violet', 'teal', 'amber', 'rose', 'indigo', 'green'];

/**
 * "Mai adag": the student picks a subject, what to practise (or a surprise)
 * and how long. A short card warm-up comes first where the subject has
 * cards, then the tasks run in the usual practice round.
 */
export function DailyPage() {
  usePageTitle(t('practice.daily.title'));
  const today = useTodaysDaily();
  // The builder starts from the last saved choice, so it waits for the settings.
  const loaded = useSettings((s) => s.loaded);
  const [fresh, setFresh] = useState(false);
  // Once started, the plan is kept as it was: answering cards changes the
  // schedule the plan is built from.
  const [running, setRunning] = useState<DailyPlan | null>(null);

  return (
    <div className="flex min-h-dvh flex-col bg-bg">
      <header className="sticky top-0 z-20 flex items-center gap-3 border-b border-border bg-surface/95 px-3 py-2 backdrop-blur">
        <Button asChild variant="ghost" size="icon" aria-label={t('practice.daily.exit')}>
          <Link to="/">
            <X aria-hidden="true" />
          </Link>
        </Button>
        <h1 className="min-w-0 flex-1 truncate font-semibold">{t('practice.daily.title')}</h1>
        {running && (
          <span className="text-sm font-medium text-muted">{t('practice.daily.stepCards')}</span>
        )}
      </header>
      <main id="main" tabIndex={-1} className="mx-auto w-full max-w-2xl flex-1 p-4 outline-none">
        {today === undefined || !loaded ? (
          <Skeleton className="h-80" />
        ) : running ? (
          <CardsStep plan={running} />
        ) : today && !today.finishedAt && !fresh ? (
          <Unfinished id={today.id} onNew={() => setFresh(true)} />
        ) : (
          <Builder doneToday={!!today?.finishedAt} round={fresh ? 1 : 0} onCards={setRunning} />
        )}
      </main>
    </div>
  );
}

function useStartTasks() {
  const navigate = useNavigate();
  return async (plan: DailyPlan) => {
    if (plan.tasks.length === 0) {
      navigate('/', { replace: true });
      return;
    }
    const id = await createDrill({
      kind: 'daily',
      subject: plan.tasks[0]!.subject,
      items: plan.tasks.map(({ examId, taskId }) => ({ examId, taskId })),
    });
    navigate(`/gyakorlas/kor/${id}`, { replace: true });
  };
}

function CardsStep({ plan }: { plan: DailyPlan }) {
  const startTasks = useStartTasks();
  return (
    <Study
      session={{ queue: plan.cards, extra: false }}
      back="/"
      onRestart={() => undefined}
      onFinish={() => void startTasks(plan)}
    />
  );
}

function Unfinished({ id, onNew }: { id: string; onNew: () => void }) {
  return (
    <section className="grid animate-rise-in justify-items-center gap-4 rounded-xl border border-border bg-surface p-6 text-center shadow-2">
      <span className="grid size-14 place-items-center rounded-full bg-primary-soft text-primary-soft-fg">
        <Play aria-hidden="true" className="size-7" />
      </span>
      <h2 className="text-2xl font-bold">{t('practice.daily.unfinishedTitle')}</h2>
      <p className="text-muted">{t('practice.daily.unfinishedBody')}</p>
      <div className="flex flex-wrap justify-center gap-2">
        <Button asChild size="lg">
          <Link to={`/gyakorlas/kor/${id}`}>
            <Play aria-hidden="true" />
            {t('practice.daily.continue')}
          </Link>
        </Button>
        <Button size="lg" variant="secondary" onClick={onNew}>
          <RotateCcw aria-hidden="true" />
          {t('practice.daily.newOne')}
        </Button>
      </div>
    </section>
  );
}

function Builder({
  doneToday,
  round,
  onCards,
}: {
  doneToday: boolean;
  round: number;
  onCards: (plan: DailyPlan) => void;
}) {
  const subjects = useDailySubjects();
  const saved = useSettings((s) => s.settings.daily);
  const update = useSettings((s) => s.update);
  const [choice, setChoice] = useState<DailyChoiceInput>(() => ({
    subject: saved && subjects.includes(saved.subject) ? saved.subject : (subjects[0] ?? ''),
    areas: saved && subjects.includes(saved.subject) ? saved.areas : [],
    length: saved?.length ?? 10,
  }));
  const data = useDailyPlan(choice, round + (doneToday ? 1 : 0));
  const startTasks = useStartTasks();

  const toggleArea = (id: string) =>
    setChoice((c) => ({
      ...c,
      areas: c.areas.includes(id)
        ? c.areas.filter((a) => a !== id)
        : c.areas.length < MAX_AREAS
          ? [...c.areas, id]
          : c.areas,
    }));

  const start = () => {
    if (!data) return;
    void update({ daily: choice });
    if (data.plan.cards.length > 0) onCards(data.plan);
    else void startTasks(data.plan);
  };

  const plan = data?.plan;
  const reviews = plan?.tasks.filter((x) => x.reason === 'review').length ?? 0;
  const weak = plan?.tasks.filter((x) => x.reason === 'weak').length ?? 0;
  const empty = plan && plan.tasks.length === 0 && plan.cards.length === 0;

  return (
    <div className="grid gap-4">
      {doneToday && (
        <div
          role="status"
          className="flex animate-pop-in items-start gap-3 rounded-xl border border-success/40 bg-success-soft p-4"
        >
          <Sparkles aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-success" />
          <div>
            <p className="font-semibold">{t('practice.daily.doneTodayTitle')}</p>
            <p className="text-sm">{t('practice.daily.doneTodayBody')}</p>
          </div>
        </div>
      )}
      <section
        aria-labelledby="daily-title"
        className="grid animate-rise-in gap-6 rounded-xl border border-border bg-surface p-5 shadow-2 sm:p-6"
      >
        <div>
          <h2 id="daily-title" className="text-2xl font-bold">
            {t('practice.daily.heading')}
          </h2>
          <p className="mt-1 text-muted">{t('practice.daily.intro')}</p>
        </div>

        <Step number={1} title={t('practice.daily.subjectStep')}>
          <div
            role="group"
            aria-label={t('practice.daily.subjectStep')}
            className="flex flex-wrap gap-2"
          >
            {subjects.map((id) => {
              const subject = findSubject(id);
              const active = choice.subject === id;
              return (
                <button
                  key={id}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setChoice((c) => ({ ...c, subject: id, areas: [] }))}
                  className={cn(
                    'inline-flex min-h-11 items-center gap-2 rounded-full border px-4 text-sm font-semibold transition-colors',
                    active
                      ? 'border-primary bg-primary text-primary-fg'
                      : 'border-border bg-surface hover:border-border-strong',
                  )}
                >
                  {subject && (
                    <SubjectIcon
                      subject={subject}
                      className={cn('size-4', !active && subjectAccent(id))}
                    />
                  )}
                  {subject?.name ?? id}
                </button>
              );
            })}
          </div>
        </Step>

        <Step
          number={2}
          title={t('practice.daily.focusStep')}
          hint={t('practice.daily.focusHint', { count: MAX_AREAS })}
        >
          {!data ? (
            <div className="grid gap-2 sm:grid-cols-2" aria-busy="true">
              <Skeleton className="h-20" />
              <Skeleton className="h-20" />
              <Skeleton className="h-20" />
              <Skeleton className="h-20" />
            </div>
          ) : (
            <>
              <div className="grid gap-2 sm:grid-cols-2">
                <Option
                  selected={choice.areas.length === 0}
                  onClick={() => setChoice((c) => ({ ...c, areas: [] }))}
                  tint="cyan"
                  icon={<Dices />}
                  title={t('practice.daily.surprise')}
                  body={
                    data.hasResults
                      ? t('practice.daily.surpriseBodyWeak')
                      : t('practice.daily.surpriseBody')
                  }
                />
                {data.areas.map((group, index) => {
                  const selected = choice.areas.includes(group.area.id);
                  return (
                    <Option
                      key={group.area.id}
                      selected={selected}
                      disabled={!selected && choice.areas.length >= MAX_AREAS}
                      onClick={() => toggleArea(group.area.id)}
                      tint={AREA_TINTS[index % AREA_TINTS.length]!}
                      icon={<Layers />}
                      title={group.area.name}
                      body={t('practice.daily.areaTopics', { count: group.topics.length })}
                      badge={
                        data.weakAreas.has(group.area.id) ? t('practice.daily.areaWeak') : undefined
                      }
                    />
                  );
                })}
              </div>
              {choice.areas.length >= MAX_AREAS && (
                <p className="text-sm text-muted">
                  {t('practice.daily.focusLimit', { count: MAX_AREAS })}
                </p>
              )}
            </>
          )}
        </Step>

        <Step number={3} title={t('practice.daily.lengthStep')}>
          <SegmentedControl<string>
            label={t('practice.daily.lengthStep')}
            value={String(choice.length)}
            onValueChange={(value) =>
              setChoice((c) => ({ ...c, length: Number(value) as DailyLength }))
            }
            options={DAILY_LENGTHS.map((minutes) => ({
              value: String(minutes),
              label: t('practice.daily.lengthOption', { minutes }),
            }))}
          />
        </Step>

        <div role="status" className="rounded-lg bg-surface-muted p-4">
          {!plan ? (
            <Skeleton className="h-6 w-2/3" />
          ) : empty ? (
            <p>{t('practice.daily.noTasks')}</p>
          ) : (
            <>
              <p className="mb-2 text-sm font-semibold text-muted">
                {t('practice.daily.previewTitle')}
              </p>
              <ul className="flex flex-wrap gap-2">
                {plan.cards.length > 0 && (
                  <Chip icon={<Layers />}>
                    {t('practice.daily.previewCards', { count: plan.cards.length })}
                  </Chip>
                )}
                <Chip icon={<ListChecks />}>
                  {t('practice.daily.previewTasks', { count: plan.tasks.length })}
                </Chip>
                {reviews > 0 && (
                  <Chip icon={<RotateCcw />}>
                    {t('practice.daily.previewReview', { count: reviews })}
                  </Chip>
                )}
                {weak > 0 && (
                  <Chip icon={<Target />}>{t('practice.daily.previewWeak', { count: weak })}</Chip>
                )}
                <Chip>
                  {t('practice.daily.previewMinutes', {
                    minutes: formatNumber(Math.max(1, plan.minutes)),
                  })}
                </Chip>
              </ul>
            </>
          )}
        </div>

        <Button size="lg" onClick={start} disabled={!plan || !!empty}>
          <Play aria-hidden="true" />
          {t('practice.daily.start')}
        </Button>
        <p className="text-xs text-muted">{t('practice.daily.why')}</p>
      </section>
    </div>
  );
}

function Step({
  number,
  title,
  hint,
  children,
}: {
  number: number;
  title: string;
  hint?: string;
  children: ReactNode;
}) {
  return (
    <div className="grid gap-3">
      <div>
        <h3 className="flex items-center gap-2 text-lg font-semibold">
          <span
            aria-hidden="true"
            className="grid size-7 place-items-center rounded-full bg-primary text-sm font-bold text-primary-fg"
          >
            {number}
          </span>
          {title}
        </h3>
        {hint && <p className="mt-1 text-sm text-muted">{hint}</p>}
      </div>
      {children}
    </div>
  );
}

function Option({
  selected,
  disabled,
  onClick,
  tint,
  icon,
  title,
  body,
  badge,
}: {
  selected: boolean;
  disabled?: boolean;
  onClick: () => void;
  tint: Tint;
  icon: ReactNode;
  title: string;
  body: string;
  badge?: string;
}) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      disabled={disabled}
      onClick={onClick}
      className={cn(
        'flex min-w-0 items-start gap-3 rounded-lg border-2 bg-surface p-3 text-left transition-[border-color,transform] duration-(--motion-fast) active:scale-[0.98] disabled:opacity-50',
        selected ? 'border-primary' : 'border-border hover:border-border-strong',
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          'grid size-10 shrink-0 place-items-center rounded-lg [&_svg]:size-5',
          TINTS[tint],
        )}
      >
        {selected ? <Check className="animate-pop-in" /> : icon}
      </span>
      <span className="min-w-0 flex-1">
        <span className="block font-semibold">{title}</span>
        <span className="block text-sm text-muted">{body}</span>
        {badge && (
          <span className="mt-1 inline-block rounded-full bg-warning-soft px-2 py-0.5 text-xs font-semibold">
            {badge}
          </span>
        )}
      </span>
    </button>
  );
}

function Chip({ icon, children }: { icon?: ReactNode; children: ReactNode }) {
  return (
    <li className="inline-flex items-center gap-1.5 rounded-full bg-surface px-3 py-1 text-sm font-medium shadow-1 [&_svg]:size-4 [&_svg]:text-primary">
      {icon && <span aria-hidden="true">{icon}</span>}
      {children}
    </li>
  );
}
