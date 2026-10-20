import { ArrowLeft, ClipboardCheck, Info, Play, SearchX, TriangleAlert } from 'lucide-react';
import { useMemo, useState, type ReactNode } from 'react';
import { Link, useParams } from 'react-router';
import { usePageTitle } from '@/app/usePageTitle';
import { examDisplayTitle } from '@/content/labels';
import { examFileUrl } from '@/content/loader';
import type { Exam } from '@/content/schema.types';
import { useExam } from '@/content/useContent';
import { Button } from '@/design/ui/Button';
import { Card, CardTitle } from '@/design/ui/Card';
import { EmptyState } from '@/design/ui/EmptyState';
import { PageHeader } from '@/design/ui/PageHeader';
import { Skeleton } from '@/design/ui/Skeleton';
import { SwitchField } from '@/design/ui/Switch';
import { DEDUCTIONS_KEY, type ExamResult } from '@/domain/scoring/exam';
import { ContentErrorState } from '@/features/exams/ContentErrorState';
import { formatDate, formatNumber, t } from '@/i18n';
import { PageDrawings } from './PageDrawings';
import { CriterionReview } from './ReviewControls';
import { ShareResult } from './share/ShareDialog';
import { StatusBadge, TaskReview } from './TaskReview';
import { useAttemptData, useAttemptResult, type AttemptData } from './useAttemptData';

export function ResultsPage() {
  const { examId = '', attemptId = '' } = useParams();
  const { state, retry, manifest } = useExam(examId);
  const exam = state.status === 'ready' ? (state.data as Exam) : null;
  const data = useAttemptData(attemptId);
  const result = useAttemptResult(exam, data);
  const entry = manifest?.manifest.exams.find((e) => e.id === examId);
  const pdfUrl =
    manifest && entry?.hasPdf && exam
      ? examFileUrl(manifest.baseUrl, entry, exam.source.examPdf.file ?? '')
      : null;
  usePageTitle(
    exam ? t('results.pageTitle', { exam: examDisplayTitle(exam) }) : t('results.title'),
  );

  const back = (
    <Link
      to={`/feladatsorok/${examId}`}
      className="mb-4 inline-flex items-center gap-1.5 text-sm font-medium text-muted hover:text-text"
    >
      <ArrowLeft aria-hidden="true" className="size-4" />
      {t('results.backToExam')}
    </Link>
  );

  if (state.status === 'error')
    return (
      <>
        {back}
        <ContentErrorState error={state.error} title={t('exam.loadErrorTitle')} onRetry={retry} />
      </>
    );
  if (!exam || data === undefined || !result) {
    return (
      <div aria-busy="true" className="grid gap-4">
        <p className="sr-only">{t('common.loading')}</p>
        <Skeleton className="h-10 w-1/2" />
        <Skeleton className="h-40" />
      </div>
    );
  }
  if (data === null || data.attempt.examId !== exam.id) {
    return (
      <>
        {back}
        <EmptyState
          icon={<SearchX />}
          title={t('results.notFoundTitle')}
          description={t('results.notFoundBody')}
        />
      </>
    );
  }
  if (!data.attempt.submittedAt) {
    return (
      <>
        {back}
        <EmptyState
          icon={<Info />}
          title={t('results.notSubmittedTitle')}
          description={t('results.notSubmittedBody')}
          action={
            <Button asChild>
              <Link to={`/feladatsorok/${examId}/gyakorlas`}>
                <Play aria-hidden="true" />
                {t('results.continueAttempt')}
              </Link>
            </Button>
          }
        />
      </>
    );
  }

  return (
    <>
      {back}
      <Results
        exam={exam}
        data={data}
        result={result}
        reportEmail={manifest?.manifest.reportEmail}
        pdfUrl={pdfUrl}
      />
    </>
  );
}

function formatDuration(seconds: number): string {
  const minutes = Math.round(seconds / 60);
  return t('exam.minutes', { minutes });
}

function Results({
  exam,
  data,
  result,
  reportEmail,
  pdfUrl,
}: {
  exam: Exam;
  data: AttemptData;
  result: ExamResult;
  reportEmail?: string;
  pdfUrl: string | null;
}) {
  const { attempt, answers } = data;
  const pdfSource = useMemo(() => (pdfUrl ? { url: pdfUrl } : null), [pdfUrl]);
  const [onlyMistakes, setOnlyMistakes] = useState(false);
  const pendingTasks = result.parts.flatMap((p) =>
    p.tasks.filter((t) => t.counted && t.pendingPoints > 0),
  );
  const pendingDeductions = result.deductions.filter((d) => d.points === null);
  const seconds = Object.values(attempt.partSeconds).reduce((a, b) => a + b, 0);
  const missingChoice = result.parts.some((p) => p.missingChoices.length > 0);
  const common = { answers, attemptId: attempt.id, examId: exam.id, reportEmail, exam };

  return (
    <>
      <PageHeader
        title={t('results.title')}
        description={`${examDisplayTitle(exam)} · ${t('results.submittedAt', {
          date: formatDate(attempt.submittedAt!, { dateStyle: 'medium', timeStyle: 'short' }),
        })} · ${attempt.mode === 'exam' ? t('results.modeExam') : t('results.modePractice')}${
          attempt.mode === 'exam' && seconds > 0
            ? ` · ${t('results.timeUsed', { time: formatDuration(seconds) })}`
            : ''
        }`}
      />

      <ScoreSummary result={result} />
      <div className="mt-4 flex flex-wrap gap-2">
        <ShareResult
          exam={exam}
          result={result}
          mode={attempt.mode}
          submittedAt={attempt.submittedAt!}
        />
      </div>

      {missingChoice && (
        <p className="mt-4 flex items-start gap-2 rounded-md bg-warning-soft p-3 text-sm">
          <TriangleAlert aria-hidden="true" className="mt-0.5 size-4 shrink-0" />
          {t('results.choiceMissing')}
        </p>
      )}

      <section aria-labelledby="review-title" className="mt-10 grid gap-4">
        <h2 id="review-title" className="flex items-center gap-2 text-2xl font-bold">
          <ClipboardCheck aria-hidden="true" className="size-6" />
          {t('results.reviewTitle')}
        </h2>
        {pendingTasks.length + pendingDeductions.length === 0 ? (
          <p className="text-muted">{t('results.reviewDone')}</p>
        ) : (
          <>
            <p className="max-w-prose text-muted">{t('results.reviewIntro')}</p>
            {pendingTasks.map((task) => (
              <TaskReview key={task.task.id} result={task} {...common} />
            ))}
          </>
        )}
        {result.deductions.length > 0 && (
          <Card aria-labelledby="deductions-title">
            <CardTitle id="deductions-title">{t('results.deductions')}</CardTitle>
            <ul className="mt-4 grid gap-3">
              {result.deductions.map((d) => (
                <CriterionReview
                  key={d.criterion.id}
                  target={{ attemptId: attempt.id, taskId: DEDUCTIONS_KEY }}
                  criterion={d.criterion}
                  points={d.points}
                  negative
                />
              ))}
            </ul>
          </Card>
        )}
      </section>

      <section aria-labelledby="breakdown-title" className="mt-10 grid gap-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 id="breakdown-title" className="text-2xl font-bold">
            {t('results.breakdownTitle')}
          </h2>
          <SwitchField
            label={t('results.onlyMistakes')}
            checked={onlyMistakes}
            onCheckedChange={setOnlyMistakes}
          />
        </div>
        {result.parts.map((part) => {
          const tasks = part.tasks.filter(
            (task) =>
              task.counted &&
              (!onlyMistakes || (task.points < task.maxPoints && task.status !== 'pending')),
          );
          return (
            <section
              key={part.part.id}
              aria-labelledby={`part-${part.part.id}`}
              className="grid gap-3"
            >
              <h3
                id={`part-${part.part.id}`}
                className="flex flex-wrap items-baseline justify-between gap-2 text-lg font-semibold"
              >
                {part.part.title}
                <span className="text-base font-medium text-muted tabular-nums">
                  {part.part.scale
                    ? t('results.partScaled', {
                        points: part.points,
                        max: part.maxPoints,
                        examPoints: part.examPoints,
                        examMax: part.examMaxPoints,
                      })
                    : t('results.score', { points: part.points, max: part.maxPoints })}
                </span>
              </h3>
              {tasks.length === 0 ? (
                <p className="text-muted">{t('results.noMistakes')}</p>
              ) : (
                <ul className="grid gap-2">
                  {tasks.map((task) => (
                    <li key={task.task.id}>
                      <details className="group rounded-lg border border-border bg-surface">
                        <summary className="flex min-h-12 cursor-pointer flex-wrap items-center justify-between gap-2 px-4 py-2">
                          <span className="font-semibold">
                            {t('workspace.taskHeading', { number: task.task.number })}
                          </span>
                          <span className="flex items-center gap-2">
                            <StatusBadge status={task.status} />
                            <span className="text-sm tabular-nums">
                              {t('results.taskScore', { points: task.points, max: task.maxPoints })}
                            </span>
                          </span>
                        </summary>
                        <div className="border-t border-border p-3">
                          <TaskReview result={task} {...common} headingLevel={4} />
                        </div>
                      </details>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          );
        })}
      </section>

      <PageDrawings answers={answers} source={pdfSource} />
    </>
  );
}

function Stat({ label, value, hint }: { label: string; value: string; hint?: ReactNode }) {
  return (
    <div className="rounded-md bg-surface-muted p-3">
      <dt className="text-sm text-muted">{label}</dt>
      <dd className="mt-1 text-lg font-semibold tabular-nums">{value}</dd>
      {hint}
    </div>
  );
}

function ScoreSummary({ result }: { result: ExamResult }) {
  const deducted = result.deductions.reduce((s, d) => s + (d.points ?? 0), 0);
  return (
    <Card aria-labelledby="score-title" className="grid gap-5">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 id="score-title" className="text-4xl font-bold tabular-nums sm:text-5xl">
            {t('results.score', { points: result.points, max: result.maxPoints })}
          </h2>
          <p className="mt-1 text-xl text-muted tabular-nums">
            {t('results.percent', {
              percent: formatNumber(result.percent, { maximumFractionDigits: 0 }),
            })}
          </p>
        </div>
        <div className="text-right">
          <p className="text-xl font-semibold">
            {t('results.grade', { label: result.grade.label, grade: String(result.grade.grade) })}
          </p>
          <p className="text-sm text-muted">
            {result.complete ? t('results.gradeNote') : t('results.gradePending')}
          </p>
        </div>
      </div>
      <dl className="grid gap-3 sm:grid-cols-3">
        <Stat
          label={t('results.autoPoints')}
          value={t('results.pointsValue', { points: result.autoPoints })}
        />
        <Stat
          label={t('results.reviewedPoints')}
          value={t('results.pointsValue', { points: result.reviewedPoints })}
        />
        <Stat
          label={t('results.pendingPoints')}
          value={
            result.pendingPoints > 0
              ? t('results.upToPoints', { points: result.pendingPoints })
              : t('results.pointsValue', { points: 0 })
          }
        />
        {result.deductions.length > 0 && (
          <Stat
            label={t('results.deductions')}
            value={t('results.deductionsValue', { points: deducted })}
          />
        )}
      </dl>
      {result.parts.some((part) => part.part.scale) && (
        <p className="text-sm text-muted">{t('results.scaledNote')}</p>
      )}
    </Card>
  );
}
