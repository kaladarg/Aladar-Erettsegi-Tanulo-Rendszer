import { useLiveQuery } from 'dexie-react-hooks';
import { ArrowRight, PartyPopper, Check, Flag, SkipForward, X } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router';
import { usePageTitle } from '@/app/usePageTitle';
import { examFullTitle } from '@/content/labels';
import { examFileUrl } from '@/content/loader';
import type { Exam, Task } from '@/content/schema.types';
import { useManifest } from '@/content/useContent';
import { useExams } from '@/content/useExams';
import { Badge } from '@/design/ui/Badge';
import { Button } from '@/design/ui/Button';
import { EmptyState } from '@/design/ui/EmptyState';
import { Skeleton } from '@/design/ui/Skeleton';
import { scoreTask } from '@/domain/scoring/exam';
import { findTask } from '@/domain/practice/topics';
import { StatusBadge, TaskReview } from '@/features/results/TaskReview';
import { SourceCard, TaskCard } from '@/features/workspace/FormMode';
import { HelpSheet } from '@/features/workspace/help/HelpSheet';
import { SelectionLookup } from '@/features/workspace/help/SelectionLookup';
import { createWorkspace, WorkspaceContext } from '@/features/workspace/WorkspaceContext';
import { t } from '@/i18n';
import { cn } from '@/lib/cn';
import { useAnswers } from '@/state/answerStore';
import { ListeningPlayer } from '../workspace/audio/ListeningPlayer';
import { loadReviews } from '@/storage/attempts';
import { findSubject } from '@/content/catalog';
import { db, type DrillSessionRow } from '@/storage/db';
import { drillAttemptId, finishDrill, recordDrillCheck, setDrillIndex } from '@/storage/practice';
import { DrillSummary } from './DrillSummary';

function drillTitle(session: DrillSessionRow): string {
  switch (session.kind) {
    case 'topic':
      return t('practice.topicTitle', { topic: session.topic ?? '' });
    case 'mixed':
      return t('practice.mixedTitle', {
        subject: findSubject(session.subject)?.name ?? session.subject,
      });
    case 'assignment':
      return session.title || t('practice.assignmentTitle');
    case 'review':
      return t('practice.reviewTitle');
    case 'daily':
      return t('practice.daily.title');
  }
}

/** A practice round: single tasks from any paper, checked one by one. */
export function DrillPage() {
  const { sessionId = '' } = useParams();
  const session = useLiveQuery(
    async () => (await db.drillSessions.get(sessionId)) ?? null,
    [sessionId],
  );
  const subjects = useMemo(
    () => (session ? (session.subjects ?? [session.subject]) : undefined),
    [session],
  );
  const { exams, loading } = useExams(subjects);
  const title = session ? drillTitle(session) : t('practice.title');
  usePageTitle(title);

  if (session === undefined || (session && loading)) {
    return (
      <div aria-busy="true" className="mx-auto grid max-w-3xl gap-4 p-6">
        <p className="sr-only">{t('common.loading')}</p>
        <Skeleton className="h-10 w-1/2" />
        <Skeleton className="h-64" />
      </div>
    );
  }
  if (session === null) {
    return (
      <div className="mx-auto max-w-xl p-6">
        <EmptyState
          icon={<Flag />}
          title={t('practice.notFoundTitle')}
          description={t('practice.notFoundBody')}
          action={
            <Button asChild>
              <Link to="/gyakorlas">{t('practice.backToHub')}</Link>
            </Button>
          }
        />
      </div>
    );
  }
  return <Drill session={session} exams={exams} title={title} />;
}

function Drill({
  session,
  exams,
  title,
}: {
  session: DrillSessionRow;
  exams: Map<string, Exam>;
  title: string;
}) {
  const navigate = useNavigate();
  const done = session.finishedAt !== undefined || session.index >= session.items.length;
  const total = session.items.length;
  const shown = Math.min(session.index + 1, total);

  return (
    <div className="min-h-dvh bg-bg">
      <header className="sticky top-0 z-30 border-b border-border bg-surface">
        <div className="flex h-[3.75rem] items-center gap-2 px-2 sm:gap-3 sm:px-4">
          <Button asChild variant="ghost" size="icon">
            <Link
              to={session.kind === 'daily' ? '/' : '/gyakorlas'}
              aria-label={t('practice.exit')}
            >
              <X aria-hidden="true" />
            </Link>
          </Button>
          <h1 className="min-w-0 flex-1 truncate font-semibold">{title}</h1>
          {!done && (
            <span className="shrink-0 text-sm font-medium text-muted tabular-nums">
              {t('practice.progress', { current: shown, total })}
            </span>
          )}
        </div>
        <div
          className="h-1 bg-surface-muted"
          role="progressbar"
          aria-label={t('practice.progressLabel')}
          aria-valuemin={0}
          aria-valuemax={total}
          aria-valuenow={Object.keys(session.checked).length}
        >
          <div
            className="h-full bg-primary transition-[width]"
            style={{
              width: `${(Object.keys(session.checked).length / Math.max(1, total)) * 100}%`,
            }}
          />
        </div>
      </header>
      <main id="main" className="mx-auto grid w-full max-w-3xl gap-6 px-4 py-6 sm:px-6">
        {done ? (
          <DrillSummary
            session={session}
            exams={exams}
            onExit={() => navigate(session.kind === 'daily' ? '/' : '/gyakorlas')}
          />
        ) : (
          <DrillItem key={session.index} session={session} exams={exams} />
        )}
      </main>
    </div>
  );
}

function DrillItem({ session, exams }: { session: DrillSessionRow; exams: Map<string, Exam> }) {
  const { state } = useManifest();
  const manifest = state.status === 'ready' ? state.data : null;
  const ref = session.items[session.index]!;
  const found = findTask(exams, ref);
  const attemptId = drillAttemptId(session.id, session.index);
  const open = useAnswers((s) => s.open);
  const ready = useAnswers((s) => s.attemptId === attemptId);
  const [checked, setChecked] = useState(session.checked[session.index] !== undefined);

  useEffect(() => {
    void open(attemptId);
  }, [open, attemptId]);
  useEffect(() => () => void useAnswers.getState().close(), []);

  const entry = manifest?.manifest.exams.find((e) => e.id === ref.examId);
  const workspace = useMemo(() => {
    if (!found || !manifest || !entry) return null;
    const pdf = entry.hasPdf
      ? { url: examFileUrl(manifest.baseUrl, entry, found.exam.source.examPdf.file ?? '') }
      : null;
    return createWorkspace(found.exam, pdf, null, true);
  }, [found, manifest, entry]);

  const next = async (result?: ReturnType<typeof scoreTask>) => {
    await useAnswers.getState().flush();
    if (result && found) {
      await recordDrillCheck(
        session.id,
        session.index,
        {
          points: result.points,
          maxPoints: result.maxPoints,
          pendingPoints: result.pendingPoints,
        },
        {
          examId: ref.examId,
          taskId: ref.taskId,
          type: found.task.type,
          // A daily round mixes subjects: each task counts for its own.
          subject: found.exam.subject,
          topics: found.task.topics,
          number: found.task.number,
        },
      );
    }
    const index = session.index + 1;
    if (index >= session.items.length) await finishDrill(session.id);
    else await setDrillIndex(session.id, index);
    window.scrollTo({ top: 0 });
  };

  if (!found || !workspace) {
    return (
      <EmptyState
        icon={<Flag />}
        title={t('practice.taskMissingTitle')}
        description={t('practice.taskMissingBody')}
        action={<Button onClick={() => void next()}>{t('practice.next')}</Button>}
      />
    );
  }
  if (!ready) return <Skeleton className="h-64" />;
  const part = found.exam.parts.find((p) => p.tasks.includes(found.task));

  return (
    <WorkspaceContext.Provider value={workspace}>
      <HelpSheet />
      <SelectionLookup />
      {part?.audio && (
        <div className="-mx-4 sm:-mx-6">
          <ListeningPlayer
            exam={found.exam}
            part={part}
            examMode={false}
            packUrl={
              manifest && entry && part.audio.file
                ? examFileUrl(manifest.baseUrl, entry, part.audio.file)
                : null
            }
          />
        </div>
      )}
      <p className="text-sm text-muted">
        {entry ? examFullTitle(entry) : ref.examId} ·{' '}
        {t('workspace.taskHeading', { number: found.task.number })}
      </p>
      {(found.task.sourceRefs ?? []).map((id) => {
        const source = workspace.sources.get(id);
        return source && <SourceCard key={id} source={source} />;
      })}
      <TaskCard task={found.task} dimmed={false} />
      {checked ? (
        <CheckedTask
          task={found.task}
          exam={found.exam}
          attemptId={attemptId}
          last={session.index + 1 >= session.items.length}
          onNext={(result) => void next(result)}
        />
      ) : (
        <div className="sticky bottom-0 -mx-4 flex flex-wrap justify-end gap-2 border-t border-border bg-surface/95 px-4 py-3 backdrop-blur sm:mx-0 sm:rounded-lg sm:border">
          <Button variant="ghost" onClick={() => void next()}>
            <SkipForward aria-hidden="true" />
            {t('practice.skip')}
          </Button>
          <Button
            onClick={() => {
              void useAnswers.getState().flush();
              setChecked(true);
            }}
          >
            <Check aria-hidden="true" />
            {t('practice.check')}
          </Button>
        </div>
      )}
    </WorkspaceContext.Provider>
  );
}

function CheckedTask({
  task,
  exam,
  attemptId,
  last,
  onNext,
}: {
  task: Task;
  exam: Exam;
  attemptId: string;
  last: boolean;
  onNext: (result: ReturnType<typeof scoreTask>) => void;
}) {
  const answers = useAnswers((s) => s.answers);
  const reviews = useLiveQuery(() => loadReviews(attemptId), [attemptId]);
  const result = useMemo(
    () => scoreTask(task, answers, reviews?.[task.id] ?? {}),
    [task, answers, reviews],
  );

  return (
    <section aria-labelledby="drill-result" className="grid gap-4">
      <div
        className={cn(
          'flex flex-wrap items-center justify-between gap-3 rounded-lg border-2 bg-surface p-4 shadow-1',
          result.status === 'correct'
            ? 'animate-glow-success border-success'
            : result.status === 'wrong' || result.status === 'partial'
              ? 'animate-shake border-warning'
              : 'border-border',
        )}
      >
        <h2 id="drill-result" className="flex items-center gap-2 text-lg font-bold">
          {result.status === 'correct' && (
            <PartyPopper aria-hidden="true" className="size-5 animate-pop-in text-success" />
          )}
          {t('practice.resultTitle')}
        </h2>
        <span className="flex items-center gap-2">
          <StatusBadge status={result.status} />
          <Badge>{t('results.taskScore', { points: result.points, max: result.maxPoints })}</Badge>
        </span>
      </div>
      {result.pendingPoints > 0 && (
        <p className="text-sm text-muted">{t('practice.markYourself')}</p>
      )}
      <TaskReview
        result={result}
        answers={answers}
        attemptId={attemptId}
        examId={exam.id}
        exam={exam}
        headingLevel={3}
      />
      <div className="sticky bottom-0 -mx-4 flex justify-end border-t border-border bg-surface/95 px-4 py-3 backdrop-blur sm:mx-0 sm:rounded-lg sm:border">
        <Button onClick={() => onNext(result)}>
          {last ? t('practice.finish') : t('practice.next')}
          <ArrowRight aria-hidden="true" />
        </Button>
      </div>
    </section>
  );
}
