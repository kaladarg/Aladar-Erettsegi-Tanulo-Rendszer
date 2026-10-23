import { useLiveQuery } from 'dexie-react-hooks';
import {
  ArrowLeft,
  Check,
  CircleDashed,
  ClipboardCheck,
  Pause,
  PencilLine,
  Play,
  Plus,
  RotateCcw,
  Timer,
  X,
} from 'lucide-react';
import { useEffect, useId, useMemo, useRef, useState, type ReactNode } from 'react';
import { Link, useParams } from 'react-router';
import { usePageTitle } from '@/app/usePageTitle';
import { examFullTitle } from '@/content/labels';
import { examFileUrl } from '@/content/loader';
import { RichText } from '@/content/RichText';
import type { Criterion } from '@/content/schema.types';
import { useManifest } from '@/content/useContent';
import { Badge } from '@/design/ui/Badge';
import { Button } from '@/design/ui/Button';
import { ConfirmDialog } from '@/design/ui/ConfirmDialog';
import { EmptyState } from '@/design/ui/EmptyState';
import { PageHeader } from '@/design/ui/PageHeader';
import { SegmentedControl } from '@/design/ui/SegmentedControl';
import { Skeleton } from '@/design/ui/Skeleton';
import { instructionsIn } from '@/domain/help/instructions';
import {
  criterionRole,
  directives as taskDirectives,
  estimate,
  listItems,
  MIN_CONCEPTS,
  outlineSlots,
  PLAN_MINUTES,
  slotDone,
  type EssayKind,
  type OutlineSlot,
  type Rating,
} from '@/domain/practice/essayOutline';
import { SourceCard } from '@/features/workspace/FormMode';
import {
  createWorkspace,
  useWorkspace,
  WorkspaceContext,
} from '@/features/workspace/WorkspaceContext';
import { formatNumber, t } from '@/i18n';
import { cn } from '@/lib/cn';
import type { EssayOutlineRow } from '@/storage/db';
import { db } from '@/storage/db';
import { deleteOutline, emptyOutline, outlineKey, saveOutline } from '@/storage/essays';
import { useEssayTasks, type EssayTask } from './useEssayTasks';

const RATINGS: Rating[] = ['full', 'partial', 'none'];
const field = 'w-full rounded-md border border-border-strong bg-surface px-3 py-2';

const clock = (seconds: number) =>
  `${Math.floor(seconds / 60)}:${String(Math.floor(seconds % 60)).padStart(2, '0')}`;

/** Plan one essay with a timer and a checklist, then compare it with the key. */
export function EssayOutlinePage() {
  const { examId = '', taskId = '' } = useParams();
  const { tasks, loading } = useEssayTasks();
  const item = tasks.find((x) => x.exam.id === examId && x.task.id === taskId);
  const key = outlineKey(examId, taskId);
  // `null` while loading, `undefined` when there is no saved outline yet.
  const saved = useLiveQuery(
    async () => (await db.essayOutlines.get(key)) ?? null,
    [key],
    'loading',
  );
  usePageTitle(item ? t('essay.planTitle', { number: item.task.number }) : t('essay.title'));

  const back = (
    <Link
      to={`/gyakorlas/esszevazlat${item ? `?targy=${item.exam.subject}` : ''}`}
      className="mb-4 inline-flex items-center gap-1.5 text-sm font-medium text-muted hover:text-text"
    >
      <ArrowLeft aria-hidden="true" className="size-4" />
      {t('essay.back')}
    </Link>
  );

  if (!item) {
    return (
      <>
        {back}
        {loading ? (
          <Skeleton className="h-64" />
        ) : (
          <EmptyState
            icon={<PencilLine />}
            title={t('essay.missingTitle')}
            description={t('essay.missingBody')}
          />
        )}
      </>
    );
  }
  return (
    <>
      {back}
      {saved === 'loading' ? (
        <Skeleton className="h-64" />
      ) : (
        <Editor key={key} item={item} initial={saved ?? emptyOutline(examId, taskId)} />
      )}
    </>
  );
}

function Editor({ item, initial }: { item: EssayTask; initial: EssayOutlineRow }) {
  const { exam, entry, task, kind } = item;
  const { state } = useManifest();
  const manifest = state.status === 'ready' ? state.data : null;
  const workspace = useMemo(() => {
    const pdf =
      manifest && entry.hasPdf
        ? { url: examFileUrl(manifest.baseUrl, entry, exam.source.examPdf.file ?? '') }
        : null;
    return createWorkspace(exam, pdf, null, false);
  }, [exam, entry, manifest]);

  const [row, setRow] = useState(initial);
  const [confirmRestart, setConfirmRestart] = useState(false);
  const criteria = useMemo(() => task.scoring.criteria ?? [], [task]);
  const slots = useMemo(() => outlineSlots(kind, criteria), [kind, criteria]);
  const questions = useMemo(() => taskDirectives(task.text), [task]);
  const top = useRef<HTMLDivElement>(null);

  // Choices are saved at once; typing and the clock at most once a second, and on leaving.
  const latest = useRef(row);
  const pending = useRef<number | null>(null);
  const dirty = useRef(false);
  const flush = () => {
    if (pending.current !== null) window.clearTimeout(pending.current);
    pending.current = null;
    if (!dirty.current) return;
    dirty.current = false;
    void saveOutline(latest.current);
  };
  const flushRef = useRef(flush);
  useEffect(() => {
    flushRef.current = flush;
  });
  useEffect(() => {
    const leave = () => flushRef.current();
    window.addEventListener('pagehide', leave);
    return () => {
      window.removeEventListener('pagehide', leave);
      leave();
    };
  }, []);
  const update = (
    change: (current: EssayOutlineRow) => Partial<EssayOutlineRow>,
    immediate = false,
  ) => {
    const next = { ...latest.current, ...change(latest.current) };
    latest.current = next;
    dirty.current = true;
    setRow(next);
    if (immediate) flush();
    else pending.current ??= window.setTimeout(flush, 1000);
  };
  const setValue = (id: string, value: string) =>
    update((r) => ({ values: { ...r.values, [id]: value } }));

  const showCompare = (compared: boolean) => {
    update(() => ({ compared }), true);
    top.current?.scrollIntoView({ block: 'start' });
  };

  const title = t('essay.planTitle', { number: task.number });
  const description = t('essay.planDescription', {
    exam: examFullTitle(entry),
    kind: t(`essay.kinds.${kind}`),
    points: task.maxPoints,
  });

  return (
    <WorkspaceContext.Provider value={workspace}>
      <div ref={top} className="scroll-mt-4">
        <PageHeader title={title} description={description} />
      </div>
      {row.compared ? (
        <Compare
          item={item}
          row={row}
          slots={slots}
          criteria={criteria}
          onRate={(id, rating) =>
            update((r) => ({ ratings: { ...r.ratings, [id]: rating } }), true)
          }
          actions={
            <>
              <Button variant="ghost" onClick={() => setConfirmRestart(true)}>
                <RotateCcw aria-hidden="true" />
                {t('essay.restart')}
              </Button>
              <Button variant="secondary" onClick={() => showCompare(false)}>
                <PencilLine aria-hidden="true" />
                {t('essay.edit')}
              </Button>
              <Link
                to={`/feladatsorok/${encodeURIComponent(exam.id)}/gyakorlas?nezet=urlap`}
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-primary px-4 font-semibold text-primary-fg shadow-1 hover:bg-primary-hover"
              >
                {t('essay.write')}
              </Link>
            </>
          }
        />
      ) : (
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-start">
          <div className="grid min-w-0 gap-6">
            <TaskPanel item={item} questions={questions} row={row} update={update} />
            <section aria-labelledby="essay-outline" className="grid gap-4">
              <h2 id="essay-outline" className="text-xl font-bold">
                {t('essay.outlineTitle')}
              </h2>
              <SlotFields kind={kind} slots={slots} values={row.values} setValue={setValue} />
            </section>
          </div>
          <aside className="grid gap-4 lg:sticky lg:top-4">
            <PlanTimer
              minutes={PLAN_MINUTES[kind]}
              seconds={row.seconds}
              onTick={() => update((r) => ({ seconds: r.seconds + 1 }))}
            />
            <Checklist
              kind={kind}
              slots={slots}
              row={row}
              questions={questions.length}
              onCompare={() => showCompare(true)}
            />
          </aside>
        </div>
      )}
      <ConfirmDialog
        open={confirmRestart}
        onOpenChange={setConfirmRestart}
        title={t('essay.restartTitle')}
        description={t('essay.restartBody')}
        confirmLabel={t('essay.restart')}
        tone="danger"
        onConfirm={() => {
          if (pending.current !== null) window.clearTimeout(pending.current);
          pending.current = null;
          dirty.current = false;
          latest.current = emptyOutline(exam.id, task.id);
          setRow(latest.current);
          void deleteOutline(row.key);
        }}
      />
    </WorkspaceContext.Provider>
  );
}

function TaskPanel({
  item,
  questions,
  row,
  update,
}: {
  item: EssayTask;
  questions: string[];
  row: EssayOutlineRow;
  update: (
    change: (current: EssayOutlineRow) => Partial<EssayOutlineRow>,
    immediate?: boolean,
  ) => void;
}) {
  const { exam, task } = item;
  const sources = useWorkspaceSources(task.sourceRefs ?? []);
  const instructions = instructionsIn(task.text);
  const limit = task.wordLimit;
  const toggle = (index: number) =>
    update(
      (r) => ({
        directives: r.directives.includes(index)
          ? r.directives.filter((i) => i !== index)
          : [...r.directives, index].sort((a, b) => a - b),
      }),
      true,
    );

  return (
    <>
      <section
        aria-labelledby="essay-task"
        className="rounded-lg border border-border bg-surface p-5 shadow-1 sm:p-6"
      >
        <h2 id="essay-task" className="mb-3 text-lg font-bold">
          {t('essay.taskTitle')}
        </h2>
        <RichText text={task.text} lang={exam.language} />
        {limit && (limit.min || limit.max) && (
          <p className="mt-3 text-sm">
            <span className="font-semibold">{t('essay.wordsTitle')}: </span>
            {limit.min && limit.max
              ? t('essay.words', { min: limit.min, max: limit.max })
              : t('essay.wordsMin', { min: limit.min ?? 0 })}
          </p>
        )}
        {instructions.length > 0 && (
          <dl className="mt-4 grid gap-2 sm:grid-cols-2">
            {instructions.map((id) => (
              <div key={id} className="rounded-md bg-surface-muted p-3">
                <dt className="font-semibold">„{t(`help.instructions.${id}.label`)}”</dt>
                <dd className="text-sm">{t(`help.instructions.${id}.meaning`)}</dd>
              </div>
            ))}
          </dl>
        )}
      </section>

      {sources.length > 0 && (
        <details className="group rounded-lg border border-border bg-surface p-4 shadow-1">
          <summary className="cursor-pointer font-semibold">
            {t('essay.sourcesTitle', { count: sources.length })}
          </summary>
          <div className="mt-3 grid gap-3">{sources}</div>
        </details>
      )}

      {questions.length > 0 && (
        <section
          aria-labelledby="essay-questions"
          className="rounded-lg border-2 border-dashed border-primary bg-surface p-4"
        >
          <h2 id="essay-questions" className="font-bold">
            {t('essay.questionsTitle')}
          </h2>
          <p className="mb-3 text-sm text-muted">{t('essay.questionsHint')}</p>
          <ul className="grid gap-2">
            {questions.map((question, index) => (
              <li key={index}>
                <label className="flex cursor-pointer items-start gap-3 rounded-md p-2 hover:bg-surface-muted">
                  <input
                    type="checkbox"
                    checked={row.directives.includes(index)}
                    onChange={() => toggle(index)}
                    className="mt-1 size-5 shrink-0 accent-(--color-primary)"
                  />
                  <span>{question}</span>
                </label>
              </li>
            ))}
          </ul>
        </section>
      )}
    </>
  );
}

function useWorkspaceSources(ids: string[]): ReactNode[] {
  const workspace = useWorkspace();
  return ids.flatMap((id) => {
    const source = workspace.sources.get(id);
    return source ? [<SourceCard key={id} source={source} />] : [];
  });
}

function slotLabel(slot: OutlineSlot): string {
  switch (slot.group) {
    case 'concepts':
      return slot.variant === 'general'
        ? t('essay.slots.conceptsGeneral')
        : slot.variant === 'concrete'
          ? t('essay.slots.conceptsConcrete')
          : t('essay.slots.concepts');
    case 'source':
      return t('essay.slots.source', { number: slot.index ?? 1 });
    case 'knowledge':
      return t('essay.slots.knowledgeItem', { number: slot.index ?? 1 });
    case 'point':
      return t('essay.slots.pointItem', { number: slot.index ?? 1 });
    default:
      return t(`essay.slots.${slot.group}`);
  }
}

function slotHint(slot: OutlineSlot, kind: EssayKind): string {
  const long = kind === 'history-long';
  const literature = kind === 'literature';
  switch (slot.group) {
    case 'intro':
      return literature ? t('essay.slots.introHintLiterature') : t('essay.slots.introHint');
    case 'conclusion':
      return literature
        ? t('essay.slots.conclusionHintLiterature')
        : t('essay.slots.conclusionHint');
    case 'time':
      return long ? t('essay.slots.timeHintLong') : t('essay.slots.timeHintShort');
    case 'place':
      return long ? t('essay.slots.placeHintLong') : t('essay.slots.placeHintShort');
    case 'thesis':
      return t('essay.slots.thesisHint');
    case 'concepts':
      return slot.variant === 'general'
        ? t('essay.slots.conceptsHintGeneral', { count: MIN_CONCEPTS })
        : slot.variant === 'concrete'
          ? t('essay.slots.conceptsHintConcrete', { count: MIN_CONCEPTS })
          : t('essay.slots.conceptsHint', { count: MIN_CONCEPTS });
    default:
      return '';
  }
}

/** The outline form, grouped like the key: frame, orientation, concepts, sources, knowledge. */
function SlotFields({
  kind,
  slots,
  values,
  setValue,
}: {
  kind: EssayKind;
  slots: OutlineSlot[];
  values: Record<string, string>;
  setValue: (id: string, value: string) => void;
}) {
  const groups: { title?: string; hint?: string; slots: OutlineSlot[] }[] = [];
  for (const slot of slots) {
    const pairGroup = slot.shape === 'pair' ? slot.group : null;
    const last = groups.at(-1);
    if (pairGroup && last?.slots[0]?.group === pairGroup) {
      last.slots.push(slot);
      continue;
    }
    groups.push(
      pairGroup === 'source'
        ? { title: t('essay.slots.sources'), hint: t('essay.slots.sourcesHint'), slots: [slot] }
        : pairGroup === 'knowledge'
          ? {
              title: t('essay.slots.knowledge'),
              hint: t('essay.slots.knowledgeHint'),
              slots: [slot],
            }
          : pairGroup === 'point'
            ? { title: t('essay.slots.points'), hint: t('essay.slots.pointsHint'), slots: [slot] }
            : { slots: [slot] },
    );
  }
  return groups.map((group, index) =>
    group.title ? (
      <fieldset
        key={index}
        className="grid gap-3 rounded-lg border border-border bg-surface p-4 shadow-1"
      >
        <legend className="px-1 text-lg font-semibold">{group.title}</legend>
        <p className="-mt-1 text-sm text-muted">{group.hint}</p>
        {group.slots.map((slot) => (
          <PairField key={slot.id} slot={slot} values={values} setValue={setValue} />
        ))}
      </fieldset>
    ) : (
      <div key={index} className="rounded-lg border border-border bg-surface p-4 shadow-1">
        {group.slots.map((slot) =>
          slot.shape === 'list' ? (
            <ListField
              key={slot.id}
              slot={slot}
              hint={slotHint(slot, kind)}
              value={values[slot.id] ?? ''}
              onChange={(value) => setValue(slot.id, value)}
            />
          ) : (
            <LineField
              key={slot.id}
              slot={slot}
              hint={slotHint(slot, kind)}
              value={values[slot.id] ?? ''}
              onChange={(value) => setValue(slot.id, value)}
            />
          ),
        )}
      </div>
    ),
  );
}

function LineField({
  slot,
  hint,
  value,
  onChange,
}: {
  slot: OutlineSlot;
  hint: string;
  value: string;
  onChange: (value: string) => void;
}) {
  const id = useId();
  const hintId = useId();
  const short = slot.group === 'time' || slot.group === 'place';
  return (
    <div className="grid gap-1.5">
      <label htmlFor={id} className="text-lg font-semibold">
        {slotLabel(slot)}
      </label>
      <p id={hintId} className="text-sm text-muted">
        {hint}
      </p>
      {short ? (
        <input
          id={id}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          aria-describedby={hintId}
          className={cn(field, 'min-h-11')}
        />
      ) : (
        <textarea
          id={id}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          aria-describedby={hintId}
          rows={2}
          className={field}
        />
      )}
    </div>
  );
}

function ListField({
  slot,
  hint,
  value,
  onChange,
}: {
  slot: OutlineSlot;
  hint: string;
  value: string;
  onChange: (value: string) => void;
}) {
  const id = useId();
  const hintId = useId();
  const [draft, setDraft] = useState('');
  const items = listItems(value);
  const target = slot.target ?? MIN_CONCEPTS;
  const add = () => {
    const next = listItems(draft);
    if (next.length === 0) return;
    onChange([...items, ...next].join('\n'));
    setDraft('');
  };
  return (
    <div className="grid gap-1.5">
      <div className="flex items-baseline justify-between gap-2">
        <label htmlFor={id} className="text-lg font-semibold">
          {slotLabel(slot)}
        </label>
        <span
          className={cn(
            'text-sm font-semibold tabular-nums',
            items.length >= target ? 'text-success' : 'text-muted',
          )}
        >
          {t('essay.slots.count', { count: items.length, target })}
        </span>
      </div>
      <p id={hintId} className="text-sm text-muted">
        {hint}
      </p>
      {items.length > 0 && (
        <ul className="flex flex-wrap gap-2">
          {items.map((item, index) => (
            <li
              key={`${item}-${index}`}
              className="inline-flex animate-rise-in items-center gap-1 rounded-full bg-primary-soft py-1 pr-1 pl-3 text-sm font-medium text-primary-soft-fg"
            >
              {item}
              <button
                type="button"
                aria-label={t('essay.slots.remove', { item })}
                onClick={() => onChange(items.filter((_, i) => i !== index).join('\n'))}
                className="grid size-7 place-items-center rounded-full hover:bg-surface"
              >
                <X aria-hidden="true" className="size-4" />
              </button>
            </li>
          ))}
        </ul>
      )}
      <div className="flex gap-2">
        <input
          id={id}
          value={draft}
          onChange={(event) => setDraft(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              event.preventDefault();
              add();
            }
          }}
          placeholder={t('essay.slots.conceptInput')}
          aria-describedby={hintId}
          className={cn(field, 'min-h-11 flex-1')}
        />
        <Button variant="secondary" onClick={add} disabled={!draft.trim()}>
          <Plus aria-hidden="true" />
          {t('essay.slots.add')}
        </Button>
      </div>
    </div>
  );
}

function PairField({
  slot,
  values,
  setValue,
}: {
  slot: OutlineSlot;
  values: Record<string, string>;
  setValue: (id: string, value: string) => void;
}) {
  const factId = useId();
  const pointId = useId();
  const literature = slot.group === 'point';
  const done = slotDone(slot, values);
  return (
    <div className="grid gap-2 rounded-md bg-surface-muted p-3">
      <p className="flex items-center gap-2 font-semibold">
        {done ? (
          <Check aria-hidden="true" className="size-4 text-success" />
        ) : (
          <CircleDashed aria-hidden="true" className="size-4 text-muted" />
        )}
        {slotLabel(slot)}
      </p>
      <div className="grid gap-2 sm:grid-cols-2">
        <div className="grid gap-1">
          <label htmlFor={factId} className="text-sm font-medium">
            {literature ? t('essay.slots.claim') : t('essay.slots.fact')}
          </label>
          <textarea
            id={factId}
            rows={2}
            value={values[`${slot.id}.fact`] ?? ''}
            onChange={(event) => setValue(`${slot.id}.fact`, event.target.value)}
            placeholder={
              literature
                ? t('essay.slots.claimPlaceholder')
                : slot.group === 'source'
                  ? t('essay.slots.factPlaceholderSource')
                  : t('essay.slots.factPlaceholder')
            }
            className={field}
          />
        </div>
        <div className="grid gap-1">
          <label htmlFor={pointId} className="text-sm font-medium">
            {literature ? t('essay.slots.example') : t('essay.slots.point')}
          </label>
          <textarea
            id={pointId}
            rows={2}
            value={values[`${slot.id}.point`] ?? ''}
            onChange={(event) => setValue(`${slot.id}.point`, event.target.value)}
            placeholder={
              literature ? t('essay.slots.examplePlaceholder') : t('essay.slots.pointPlaceholder')
            }
            className={field}
          />
        </div>
      </div>
    </div>
  );
}

/** A planning clock that keeps going after the recommended time, without blocking anything. */
function PlanTimer({
  minutes,
  seconds,
  onTick,
}: {
  minutes: number;
  seconds: number;
  onTick: () => void;
}) {
  const [running, setRunning] = useState(false);
  const tick = useRef(onTick);
  useEffect(() => {
    tick.current = onTick;
  });
  useEffect(() => {
    if (!running) return;
    const id = window.setInterval(() => tick.current(), 1000);
    return () => window.clearInterval(id);
  }, [running]);

  const budget = minutes * 60;
  const over = seconds >= budget;
  const share = Math.min(1, seconds / budget);
  return (
    <section
      aria-labelledby="essay-timer"
      className={cn(
        'rounded-lg border bg-surface p-4 shadow-1',
        over ? 'border-warning' : 'border-border',
      )}
    >
      <div className="flex items-center justify-between gap-3">
        <h2 id="essay-timer" className="flex items-center gap-2 font-semibold">
          <Timer aria-hidden="true" className="size-5 text-primary" />
          {t('essay.timer.label')}
        </h2>
        <span
          className={cn('text-2xl font-bold tabular-nums', over && 'text-warning')}
          aria-live="off"
        >
          {over
            ? t('essay.timer.overBy', { time: clock(seconds - budget) })
            : clock(budget - seconds)}
        </span>
      </div>
      <div className="mt-3 h-2 overflow-hidden rounded-full bg-surface-muted" aria-hidden="true">
        <div
          className={cn(
            'h-full rounded-full transition-[width] duration-1000 ease-linear',
            over ? 'bg-warning' : 'bg-primary',
          )}
          style={{ width: `${share * 100}%` }}
        />
      </div>
      <p className="mt-2 text-sm text-muted">{t('essay.timer.recommended', { minutes })}</p>
      {over && (
        <p role="status" className="mt-2 text-sm font-medium">
          {t('essay.timer.over')}
        </p>
      )}
      <Button
        variant={running ? 'secondary' : 'primary'}
        size="sm"
        className="mt-3 w-full"
        onClick={() => setRunning(!running)}
      >
        {running ? <Pause aria-hidden="true" /> : <Play aria-hidden="true" />}
        {running
          ? t('essay.timer.pause')
          : seconds > 0
            ? t('essay.timer.resume')
            : t('essay.timer.start')}
      </Button>
    </section>
  );
}

function checkLabel(slot: OutlineSlot, values: Record<string, string>): string {
  const done = listItems(values[slot.id]).length;
  switch (slot.group) {
    case 'concepts':
      return slot.variant === 'general'
        ? t('essay.checks.conceptsGeneral', { count: MIN_CONCEPTS, done })
        : slot.variant === 'concrete'
          ? t('essay.checks.conceptsConcrete', { count: MIN_CONCEPTS, done })
          : t('essay.checks.concepts', { count: MIN_CONCEPTS, done });
    case 'source':
    case 'knowledge':
    case 'point':
      return t(`essay.checks.${slot.group}`, { number: slot.index ?? 1 });
    default:
      return t(`essay.checks.${slot.group}`);
  }
}

/** Live structure checklist: what is planned and what is still missing. */
function Checklist({
  slots,
  row,
  questions,
  onCompare,
}: {
  kind: EssayKind;
  slots: OutlineSlot[];
  row: EssayOutlineRow;
  questions: number;
  onCompare: () => void;
}) {
  const items = [
    ...(questions > 0
      ? [
          {
            id: 'questions',
            label: t('essay.checks.questions', { done: row.directives.length, total: questions }),
            done: row.directives.length >= questions,
          },
        ]
      : []),
    ...slots.map((slot) => ({
      id: slot.id,
      label: checkLabel(slot, row.values),
      done: slotDone(slot, row.values),
    })),
  ];
  const done = items.filter((i) => i.done).length;
  return (
    <section
      aria-labelledby="essay-checklist"
      className="rounded-lg border border-border bg-surface p-4 shadow-1"
    >
      <div className="mb-2 flex items-baseline justify-between gap-2">
        <h2 id="essay-checklist" className="font-semibold">
          {t('essay.checklistTitle')}
        </h2>
        <span className="text-sm font-semibold text-muted tabular-nums">
          {t('essay.checklistProgress', { done, total: items.length })}
        </span>
      </div>
      <ul className="grid gap-1.5 text-sm">
        {items.map((item) => (
          <li key={item.id} className="flex items-start gap-2">
            {item.done ? (
              <Check aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-success" />
            ) : (
              <CircleDashed aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-muted" />
            )}
            <span className={cn(item.done && 'text-muted line-through decoration-1')}>
              <span className="sr-only">{item.done ? '✓ ' : '○ '}</span>
              {item.label}
            </span>
          </li>
        ))}
      </ul>
      <Button className="mt-4 w-full" onClick={onCompare}>
        <ClipboardCheck aria-hidden="true" />
        {t('essay.compare')}
      </Button>
      <p className="mt-2 text-xs text-muted">{t('essay.compareNote')}</p>
    </section>
  );
}

/** The outline next to the key, criterion by criterion, with the student's own rating. */
function Compare({
  item,
  row,
  slots,
  criteria,
  onRate,
  actions,
}: {
  item: EssayTask;
  row: EssayOutlineRow;
  slots: OutlineSlot[];
  criteria: Criterion[];
  onRate: (id: string, rating: Rating) => void;
  actions: ReactNode;
}) {
  const { kind } = item;
  const result = estimate(kind, criteria, row.ratings);
  return (
    <section aria-labelledby="essay-compare" className="grid gap-4">
      <h2 id="essay-compare" className="text-xl font-bold">
        {t('essay.compareTitle')}
      </h2>
      <p className="text-muted">{t('essay.compareIntro')}</p>

      <div className="grid gap-3 sm:grid-cols-2">
        <div
          role="region"
          aria-label={t('essay.estimate')}
          className="rounded-lg border border-border bg-surface p-4 shadow-1"
        >
          <p className="text-sm font-semibold text-muted">{t('essay.estimate')}</p>
          <p className="text-3xl font-bold tabular-nums">
            {t('essay.estimateOf', { points: result.points, max: result.maxPoints })}
          </p>
          {!result.complete && (
            <p className="mt-1 text-sm text-muted">{t('essay.estimateIncomplete')}</p>
          )}
          {result.complete && result.points === 0 && kind !== 'literature' && (
            <p className="mt-1 text-sm">{t('essay.estimateZero')}</p>
          )}
        </div>
        <div className="rounded-lg border border-border bg-surface p-4 shadow-1">
          <p className="flex items-center gap-2 text-sm font-semibold text-muted">
            <Timer aria-hidden="true" className="size-4" />
            {t('essay.timer.label')}
          </p>
          <p className="mt-1">
            {t('essay.timeUsed', { time: clock(row.seconds), minutes: PLAN_MINUTES[kind] })}
          </p>
        </div>
      </div>

      <ul className="grid gap-3">
        {criteria.map((criterion) => (
          <CriterionRow
            key={criterion.id}
            kind={kind}
            criterion={criterion}
            planned={plannedFor(criterion, slots, row.values)}
            rating={row.ratings[criterion.id]}
            derived={result.derived[criterion.id]}
            onRate={(rating) => onRate(criterion.id, rating)}
          />
        ))}
      </ul>

      <div className="sticky bottom-0 -mx-4 flex flex-wrap items-center justify-end gap-2 border-t border-border bg-surface/95 px-4 py-3 backdrop-blur sm:mx-0 sm:rounded-lg sm:border">
        {actions}
      </div>
      <p className="text-sm text-muted">
        <Link
          to={`/gyakorlas/esszevazlat?targy=${item.exam.subject}`}
          className="underline underline-offset-4"
        >
          {t('essay.other')}
        </Link>
      </p>
    </section>
  );
}

/** The outline lines that belong to a criterion, as plain text. */
function plannedFor(
  criterion: Criterion,
  slots: OutlineSlot[],
  values: Record<string, string>,
): string[] {
  return slots
    .filter((slot) => slot.criterionIds.includes(criterion.id))
    .flatMap((slot) => {
      if (slot.shape === 'pair') {
        const fact = values[`${slot.id}.fact`]?.trim();
        const point = values[`${slot.id}.point`]?.trim();
        return fact || point
          ? [`${slotLabel(slot)}: ${[fact, point].filter(Boolean).join(' → ')}`]
          : [];
      }
      if (slot.shape === 'list') {
        const items = listItems(values[slot.id]);
        return items.length ? [`${slotLabel(slot)}: ${items.join(', ')}`] : [];
      }
      const text = values[slot.id]?.trim();
      return text ? [`${slotLabel(slot)}: ${text}`] : [];
    });
}

function CriterionRow({
  kind,
  criterion,
  planned,
  rating,
  derived,
  onRate,
}: {
  kind: EssayKind;
  criterion: Criterion;
  planned: string[];
  rating: Rating | undefined;
  derived: number | undefined;
  onRate: (rating: Rating) => void;
}) {
  const role = criterionRole(criterion, kind);
  return (
    <li className="grid gap-3 rounded-lg border border-border bg-surface p-4 shadow-1">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="font-semibold">{criterion.label}</h3>
        <Badge>{t('essay.criterionPoints', { points: criterion.maxPoints })}</Badge>
      </div>
      {role !== 'understanding' && role !== 'language' && (
        <div>
          <p className="text-sm font-semibold text-muted">{t('essay.yourPlan')}</p>
          {planned.length > 0 ? (
            <ul className="mt-1 grid gap-1 text-sm">
              {planned.map((line, index) => (
                <li key={index} className="rounded-md bg-surface-muted px-3 py-1.5">
                  {line}
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-1 text-sm text-warning">{t('essay.nothingPlanned')}</p>
          )}
        </div>
      )}
      <div className="rounded-md border-l-4 border-primary bg-primary-soft/50 px-3 py-2">
        <p className="text-sm font-semibold">{t('essay.keyTitle')}</p>
        {criterion.description ? (
          <RichText text={criterion.description} className="text-sm" />
        ) : (
          <p className="text-sm text-muted">{t('essay.keyMissing')}</p>
        )}
        {criterion.levels && criterion.levels.length > 0 && (
          <details className="mt-2 text-sm">
            <summary className="cursor-pointer font-medium">{t('essay.levelsTitle')}</summary>
            <ul className="mt-1 grid gap-1">
              {criterion.levels.map((level) => (
                <li key={level.points}>
                  <span className="font-semibold tabular-nums">
                    {t('essay.criterionPoints', { points: level.points })}:
                  </span>{' '}
                  {level.description}
                </li>
              ))}
            </ul>
          </details>
        )}
      </div>
      {role === 'understanding' ? (
        <p className="text-sm font-medium">
          {t('essay.derived', { points: formatNumber(derived ?? 0) })}
        </p>
      ) : (
        <>
          {role === 'language' && <p className="text-sm text-muted">{t('essay.languageNote')}</p>}
          <SegmentedControl
            label={t('essay.ratingLabel', { criterion: criterion.label })}
            value={rating ?? ('' as Rating)}
            options={RATINGS.map((value) => ({ value, label: t(`essay.ratings.${value}`) }))}
            onValueChange={onRate}
          />
        </>
      )}
    </li>
  );
}
