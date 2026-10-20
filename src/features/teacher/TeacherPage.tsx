import { Copy, Download, ExternalLink, Info, Link2, Users } from 'lucide-react';
import { useId, useMemo, useState } from 'react';
import { appBaseUrl } from '@/app/config';
import { usePageTitle } from '@/app/usePageTitle';
import { DEFAULT_SUBJECTS, subjectShortName } from '@/content/catalog';
import { examDisplayTitle } from '@/content/labels';
import type { Exam } from '@/content/schema.types';
import { useExams } from '@/content/useExams';
import { Button } from '@/design/ui/Button';
import { Card, CardDescription, CardTitle } from '@/design/ui/Card';
import { PageHeader } from '@/design/ui/PageHeader';
import { SegmentedControl } from '@/design/ui/SegmentedControl';
import { Skeleton } from '@/design/ui/Skeleton';
import {
  assignmentId,
  encodeAssignment,
  findResults,
  MAX_ITEMS,
  MAX_NOTE,
  MAX_TITLE,
  type AssignmentResult,
} from '@/domain/assignment/link';
import type { TaskRef } from '@/domain/practice/topics';
import { formatDate, formatNumber, t } from '@/i18n';
import { copyText } from '@/lib/clipboard';
import { useSettings } from '@/state/settingsStore';
import { toast } from '@/state/toastStore';
import { QrCode } from './QrCode';

const refKey = (ref: TaskRef) => `${ref.examId}|${ref.taskId}`;

/** Newest official paper first, samples last. */
const byRecency = (a: Exam, b: Exam) =>
  Number(!!a.sample) - Number(!!b.sample) || b.year - a.year || b.session.localeCompare(a.session);

export function TeacherPage() {
  usePageTitle(t('teacher.title'));
  const [code, setCode] = useState<string | null>(null);
  const [labels, setLabels] = useState<string[]>([]);
  return (
    <>
      <PageHeader title={t('teacher.title')} description={t('teacher.intro')} />
      <div className="grid gap-6">
        <Builder
          onCreate={(next, numbers) => {
            setCode(next);
            setLabels(numbers);
          }}
        />
        {code && <LinkCard code={code} />}
        <Results ownId={code ? assignmentId(code) : null} ownLabels={labels} />
      </div>
    </>
  );
}

function Builder({ onCreate }: { onCreate: (code: string, labels: string[]) => void }) {
  const chosen = useSettings((s) => s.settings.subjects);
  const [subject, setSubject] = useState(
    chosen.find((s) => DEFAULT_SUBJECTS.some((d) => d.id === s)) ?? 'matematika',
  );
  const subjects = useMemo(() => [subject], [subject]);
  const { exams, loading } = useExams(subjects);
  const [title, setTitle] = useState('');
  const [note, setNote] = useState('');
  const [picked, setPicked] = useState<TaskRef[]>([]);
  const [error, setError] = useState<string | null>(null);
  const ids = { title: useId(), note: useId() };

  const papers = [...exams.values()].sort(byRecency);
  const taskOf = (ref: TaskRef) =>
    exams
      .get(ref.examId)
      ?.parts.flatMap((p) => p.tasks)
      .find((task) => task.id === ref.taskId);
  const points = picked.reduce((sum, ref) => sum + (taskOf(ref)?.maxPoints ?? 0), 0);
  const isPicked = (ref: TaskRef) => picked.some((p) => refKey(p) === refKey(ref));
  const toggle = (ref: TaskRef) => {
    setError(null);
    if (isPicked(ref)) setPicked(picked.filter((p) => refKey(p) !== refKey(ref)));
    else if (picked.length >= MAX_ITEMS) setError(t('teacher.tooMany', { max: MAX_ITEMS }));
    else setPicked([...picked, ref]);
  };

  const create = () => {
    if (!title.trim()) return setError(t('teacher.needTitle'));
    if (picked.length === 0) return setError(t('teacher.needTasks'));
    setError(null);
    // Keep the order of the papers, so the round follows the paper structure.
    const order = papers.flatMap((exam) =>
      exam.parts.flatMap((part) => part.tasks.map((task) => `${exam.id}|${task.id}`)),
    );
    const items = [...picked].sort((a, b) => order.indexOf(refKey(a)) - order.indexOf(refKey(b)));
    onCreate(
      encodeAssignment({ title: title.trim(), subject, note: note.trim() || undefined, items }),
      items.map((ref) => taskOf(ref)?.number ?? ref.taskId),
    );
  };

  return (
    <Card aria-labelledby="teacher-build">
      <CardTitle id="teacher-build" className="flex items-center gap-2">
        <Link2 aria-hidden="true" className="size-5 text-primary" />
        {t('teacher.buildTitle')}
      </CardTitle>
      <div className="mt-4 grid gap-4">
        <SegmentedControl
          label={t('teacher.subject')}
          value={subject}
          onValueChange={(value) => {
            setSubject(value);
            setPicked([]);
          }}
          options={DEFAULT_SUBJECTS.map((s) => ({ value: s.id, label: subjectShortName(s) }))}
        />
        <div className="grid gap-1">
          <label htmlFor={ids.title} className="text-sm font-medium">
            {t('teacher.titleLabel')}
          </label>
          <input
            id={ids.title}
            value={title}
            maxLength={MAX_TITLE}
            placeholder={t('teacher.titlePlaceholder')}
            onChange={(event) => setTitle(event.target.value)}
            className="min-h-11 rounded-md border border-border-strong bg-surface px-3"
          />
        </div>
        <div className="grid gap-1">
          <label htmlFor={ids.note} className="text-sm font-medium">
            {t('teacher.noteLabel')}
          </label>
          <textarea
            id={ids.note}
            rows={2}
            value={note}
            maxLength={MAX_NOTE}
            onChange={(event) => setNote(event.target.value)}
            className="rounded-md border border-border-strong bg-surface p-3"
          />
        </div>
        <fieldset className="grid gap-2">
          <legend className="mb-2 text-sm font-medium">{t('teacher.papers')}</legend>
          {loading ? (
            <Skeleton className="h-32" />
          ) : (
            papers.map((exam) => {
              const count = picked.filter((p) => p.examId === exam.id).length;
              return (
                <details key={exam.id} className="rounded-md border border-border">
                  <summary className="flex min-h-11 cursor-pointer items-center justify-between gap-2 px-3 py-2 font-medium">
                    {examDisplayTitle(exam)}
                    {count > 0 && (
                      <span className="text-sm text-primary">
                        {t('teacher.paperTasks', { count })}
                      </span>
                    )}
                  </summary>
                  <ul className="grid gap-1 border-t border-border p-3 sm:grid-cols-2">
                    {exam.parts
                      .flatMap((part) => part.tasks)
                      .map((task) => {
                        const ref = { examId: exam.id, taskId: task.id };
                        return (
                          <li key={task.id}>
                            <label className="flex min-h-11 cursor-pointer items-start gap-3 rounded-md p-2 hover:bg-surface-muted">
                              <input
                                type="checkbox"
                                checked={isPicked(ref)}
                                onChange={() => toggle(ref)}
                                className="mt-0.5 size-5 shrink-0 accent-[var(--c-primary)]"
                              />
                              <span>
                                <span className="font-medium">
                                  {t('teacher.taskLabel', {
                                    number: task.number,
                                    points: task.maxPoints,
                                  })}
                                </span>
                                {task.topics && task.topics.length > 0 && (
                                  <span className="block text-sm text-muted">
                                    {task.topics.join(', ')}
                                  </span>
                                )}
                              </span>
                            </label>
                          </li>
                        );
                      })}
                  </ul>
                </details>
              );
            })
          )}
        </fieldset>
        <p aria-live="polite" className="font-medium">
          {t('teacher.selected', { count: picked.length, points })}
        </p>
        {error && (
          <p role="alert" className="text-sm font-medium text-danger">
            {error}
          </p>
        )}
        <div className="flex flex-wrap gap-2">
          <Button onClick={create}>
            <Link2 aria-hidden="true" />
            {t('teacher.create')}
          </Button>
          {picked.length > 0 && (
            <Button variant="ghost" onClick={() => setPicked([])}>
              {t('teacher.clear')}
            </Button>
          )}
        </div>
        <p className="flex gap-2 text-sm text-muted">
          <Info aria-hidden="true" className="mt-0.5 size-4 shrink-0" />
          {t('teacher.availability')}
        </p>
      </div>
    </Card>
  );
}

function LinkCard({ code }: { code: string }) {
  const id = useId();
  const url = `${appBaseUrl()}feladat?d=${code}`;
  const copy = async () =>
    toast(
      (await copyText(url))
        ? { message: t('teacher.copied'), tone: 'success' }
        : { message: t('teacher.copyFailed'), tone: 'danger' },
    );
  const qrFits = url.length <= 1200;
  return (
    <Card aria-labelledby="teacher-link">
      <CardTitle id="teacher-link">{t('teacher.linkTitle')}</CardTitle>
      <label htmlFor={id} className="mt-3 block text-sm font-medium">
        {t('teacher.linkLabel')}
      </label>
      <input
        id={id}
        readOnly
        value={url}
        onFocus={(event) => event.target.select()}
        className="mt-1 min-h-11 w-full rounded-md border border-border-strong bg-surface-muted px-3 text-sm"
      />
      <div className="mt-3 flex flex-wrap gap-2">
        <Button onClick={() => void copy()}>
          <Copy aria-hidden="true" />
          {t('teacher.copy')}
        </Button>
        <Button asChild variant="secondary">
          <a href={url} target="_blank" rel="noreferrer">
            <ExternalLink aria-hidden="true" />
            {t('teacher.open')}
          </a>
        </Button>
      </div>
      <div className="mt-4">
        {qrFits ? (
          <QrCode text={url} label={t('teacher.qrLabel')} />
        ) : (
          <p className="text-sm text-muted">{t('teacher.qrTooLong')}</p>
        )}
      </div>
    </Card>
  );
}

function Results({ ownId, ownLabels }: { ownId: string | null; ownLabels: string[] }) {
  const id = useId();
  const [text, setText] = useState('');
  const results = useMemo(() => findResults(text), [text]);
  const groups = new Map<string, AssignmentResult[]>();
  for (const result of results)
    groups.set(result.assignment, [...(groups.get(result.assignment) ?? []), result]);

  return (
    <Card aria-labelledby="teacher-results">
      <CardTitle id="teacher-results" className="flex items-center gap-2">
        <Users aria-hidden="true" className="size-5 text-primary" />
        {t('teacher.resultsTitle')}
      </CardTitle>
      <CardDescription>{t('teacher.resultsBody')}</CardDescription>
      <label htmlFor={id} className="mt-4 block text-sm font-medium">
        {t('teacher.resultsLabel')}
      </label>
      <textarea
        id={id}
        rows={4}
        value={text}
        onChange={(event) => setText(event.target.value)}
        className="mt-1 w-full rounded-md border border-border-strong bg-surface p-3 font-mono text-sm"
      />
      {text.trim() && results.length === 0 && (
        <p className="mt-2 text-sm text-danger">{t('teacher.resultsNone')}</p>
      )}
      {[...groups].map(([assignment, rows]) => (
        <ResultTable
          key={assignment}
          heading={
            assignment === ownId
              ? t('teacher.thisAssignment')
              : t('teacher.otherAssignment', { id: assignment })
          }
          rows={rows}
          labels={assignment === ownId ? ownLabels : []}
        />
      ))}
      {results.length > 0 && (
        <p className="mt-4 flex gap-2 text-sm text-muted">
          <Info aria-hidden="true" className="mt-0.5 size-4 shrink-0" />
          {t('teacher.resultsWarning')}
        </p>
      )}
    </Card>
  );
}

const total = (r: AssignmentResult) => r.points.reduce<number>((sum, p) => sum + (p ?? 0), 0);
const max = (r: AssignmentResult) => r.maxPoints.reduce((sum, p) => sum + p, 0);

function ResultTable({
  heading,
  rows,
  labels,
}: {
  heading: string;
  rows: AssignmentResult[];
  labels: string[];
}) {
  const columns = Math.max(...rows.map((r) => r.maxPoints.length));
  const label = (i: number) => labels[i] ?? t('teacher.columnTask', { number: i + 1 });
  const sorted = [...rows].sort((a, b) => a.name.localeCompare(b.name, 'hu'));
  const downloadCsv = () => {
    const cell = (value: string) => `"${value.replace(/"/g, '""')}"`;
    const lines = [
      [
        t('teacher.columnName'),
        ...Array.from({ length: columns }, (_, i) => label(i)),
        t('teacher.columnTotal'),
        t('teacher.columnFinished'),
      ],
      ...sorted.map((r) => [
        r.name || t('teacher.noName'),
        ...Array.from({ length: columns }, (_, i) =>
          r.points[i] === null || r.points[i] === undefined ? '' : String(r.points[i]),
        ),
        `${total(r)}/${max(r)}`,
        formatDate(r.finishedAt, { dateStyle: 'short', timeStyle: 'short' }),
      ]),
    ];
    // Semicolons and a BOM let Hungarian Excel open the file directly.
    const csv = `${String.fromCharCode(0xfeff)}${lines.map((line) => line.map(cell).join(';')).join('\r\n')}`;
    const url = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8' }));
    const link = document.createElement('a');
    link.href = url;
    link.download = 'eredmenyek.csv';
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1_000);
  };
  return (
    <section className="mt-6 grid gap-2">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="font-semibold">
          {heading} · {t('teacher.resultsCount', { count: rows.length })}
        </h3>
        <Button size="sm" variant="secondary" onClick={downloadCsv}>
          <Download aria-hidden="true" />
          {t('teacher.csv')}
        </Button>
      </div>
      <div className="overflow-x-auto rounded-md border border-border">
        <table className="w-full text-sm">
          <caption className="sr-only">{heading}</caption>
          <thead className="bg-surface-muted">
            <tr>
              <th scope="col" className="p-2 text-left">
                {t('teacher.columnName')}
              </th>
              {Array.from({ length: columns }, (_, i) => (
                <th key={i} scope="col" className="p-2 text-right tabular-nums">
                  {label(i)}
                </th>
              ))}
              <th scope="col" className="p-2 text-right">
                {t('teacher.columnTotal')}
              </th>
              <th scope="col" className="p-2 text-left">
                {t('teacher.columnFinished')}
              </th>
            </tr>
          </thead>
          <tbody>
            {sorted.map((r, index) => (
              <tr key={index} className="border-t border-border">
                <th scope="row" className="p-2 text-left font-medium">
                  {r.name || t('teacher.noName')}
                </th>
                {Array.from({ length: columns }, (_, i) => {
                  const points = r.points[i];
                  const pending = r.pending[i] ?? 0;
                  return (
                    <td
                      key={i}
                      className="p-2 text-right tabular-nums"
                      title={
                        points === null
                          ? t('teacher.skipped')
                          : pending > 0
                            ? t('teacher.pending', { points: pending })
                            : undefined
                      }
                    >
                      {points === null || points === undefined ? (
                        <span className="text-muted">
                          <span aria-hidden="true">–</span>
                          <span className="sr-only">{t('teacher.skipped')}</span>
                        </span>
                      ) : (
                        <>
                          {formatNumber(points)}/{formatNumber(r.maxPoints[i] ?? 0)}
                          {pending > 0 && <span aria-hidden="true">*</span>}
                          {pending > 0 && (
                            <span className="sr-only">
                              , {t('teacher.pending', { points: pending })}
                            </span>
                          )}
                        </>
                      )}
                    </td>
                  );
                })}
                <td className="p-2 text-right font-semibold tabular-nums">
                  {formatNumber(total(r))}/{formatNumber(max(r))}
                </td>
                <td className="p-2 whitespace-nowrap">
                  {formatDate(r.finishedAt, { dateStyle: 'short', timeStyle: 'short' })}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
