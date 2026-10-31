import { useLiveQuery } from 'dexie-react-hooks';
import { ArrowLeft, Check, Mic, Pause, Play, RotateCcw, Square, Trash2 } from 'lucide-react';
import { useEffect, useId, useMemo, useRef, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router';
import { usePageTitle } from '@/app/usePageTitle';
import { BUILTIN_ORAL_TOPICS, LANGUAGE_SUBJECTS } from '@/content/oralTopics';
import { NotFoundPage } from '@/app/ErrorScreens';
import { Button } from '@/design/ui/Button';
import { Card, CardDescription, CardTitle } from '@/design/ui/Card';
import { ConfirmDialog } from '@/design/ui/ConfirmDialog';
import { PageHeader } from '@/design/ui/PageHeader';
import { Skeleton } from '@/design/ui/Skeleton';
import { formatClock } from '@/domain/examTiming';
import { formatDate, t } from '@/i18n';
import { toast } from '@/state/toastStore';
import { db, type OralTopicRow, type RecordingRow } from '@/storage/db';
import {
  deleteRecording,
  deleteTopic,
  markPractised,
  saveOutline,
  saveRecording,
  saveRecordingChecks,
} from '@/storage/oral';
import { checklistScore, oralChecklist, type ChecklistItem } from './oralChecklist';

export function OralTopicPage() {
  const { topicId = '' } = useParams();
  const row = useLiveQuery(async () => (await db.oralTopics.get(topicId)) ?? null, [topicId]);
  usePageTitle(row?.title ?? t('practice.oral.title'));
  if (row === undefined) return <Skeleton className="h-64" />;
  if (row === null) return <NotFoundPage />;
  return <OralTopic key={row.id} row={row} />;
}

function OralTopic({ row }: { row: OralTopicRow }) {
  const navigate = useNavigate();
  const [confirm, setConfirm] = useState(false);
  const back = `/gyakorlas/szobeli?targy=${row.subject}`;
  const remove = async () => {
    await deleteTopic(row.id);
    toast({ message: t('practice.oral.deleted'), tone: 'neutral' });
    navigate(back);
  };
  const practised = async () => {
    await markPractised(row.id);
    toast({ message: t('practice.oral.markedPractised'), tone: 'success' });
  };
  return (
    <>
      <Link
        to={back}
        className="mb-4 inline-flex items-center gap-1.5 text-sm font-medium text-muted hover:text-text"
      >
        <ArrowLeft aria-hidden="true" className="size-4" />
        {t('practice.oral.back')}
      </Link>
      <PageHeader
        title={row.title}
        description={
          row.practised > 0
            ? t('practice.oral.practised', { count: row.practised })
            : t('practice.oral.notPractised')
        }
      />
      <div className="grid gap-6 lg:grid-cols-2">
        <Outline row={row} />
        <div className="grid content-start gap-6">
          <Timers
            language={LANGUAGE_SUBJECTS.includes(row.subject)}
            emelt={BUILTIN_ORAL_TOPICS.find((b) => b.id === row.builtinId)?.level === 'emelt'}
          />
          <Recorder row={row} />
        </div>
      </div>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-between">
        <Button onClick={() => void practised()}>
          <Check aria-hidden="true" />
          {t('practice.oral.markPractised')}
        </Button>
        <Button variant="ghost" onClick={() => setConfirm(true)}>
          <Trash2 aria-hidden="true" />
          {t('practice.oral.delete')}
        </Button>
      </div>
      <ConfirmDialog
        open={confirm}
        onOpenChange={setConfirm}
        title={t('practice.oral.deleteConfirmTitle')}
        description={t('practice.oral.deleteConfirmBody')}
        confirmLabel={t('practice.oral.delete')}
        tone="danger"
        onConfirm={() => void remove()}
      />
    </>
  );
}

/** Outline textarea, prefilled with a template and saved shortly after typing stops. */
function Outline({ row }: { row: OralTopicRow }) {
  const id = useId();
  const [text, setText] = useState(
    row.outline ||
      (LANGUAGE_SUBJECTS.includes(row.subject)
        ? t('practice.oral.outlineTemplateLanguage')
        : t('practice.oral.outlineTemplate')),
  );
  const [saved, setSaved] = useState(true);
  useEffect(() => {
    if (saved) return;
    const timer = setTimeout(() => {
      void saveOutline(row.id, text).then(() => setSaved(true));
    }, 600);
    return () => clearTimeout(timer);
  }, [row.id, saved, text]);
  return (
    <Card aria-labelledby={`${id}-title`}>
      <div className="flex items-baseline justify-between gap-2">
        <CardTitle id={`${id}-title`}>{t('practice.oral.outlineTitle')}</CardTitle>
        <span role="status" className="text-sm text-muted">
          {saved && row.outline ? t('practice.oral.outlineSaved') : ''}
        </span>
      </div>
      <label htmlFor={id} className="mt-3 block text-sm font-medium">
        {t('practice.oral.outlineLabel')}
      </label>
      <textarea
        id={id}
        rows={14}
        value={text}
        onChange={(event) => {
          setText(event.target.value);
          setSaved(false);
        }}
        className="mt-1 w-full rounded-md border border-border-strong bg-surface p-3 leading-relaxed"
      />
    </Card>
  );
}

function Timers({ language, emelt }: { language: boolean; emelt: boolean }) {
  return (
    <Card aria-labelledby="oral-timers">
      <CardTitle id="oral-timers">{t('practice.oral.timersTitle')}</CardTitle>
      <div className="mt-3 grid gap-4 sm:grid-cols-2">
        {!language && <Timer name={t('practice.oral.prep')} defaultMinutes={30} />}
        <Timer name={t('practice.oral.answer')} defaultMinutes={emelt ? 20 : 15} />
      </div>
      <CardDescription className="mt-3">
        {language ? t('practice.oral.timesNoteLanguage') : t('practice.oral.timesNote')}
      </CardDescription>
    </Card>
  );
}

/** A countdown that keeps time from the clock, so a background tab stays accurate. */
function Timer({ name, defaultMinutes }: { name: string; defaultMinutes: number }) {
  const id = useId();
  const [minutes, setMinutes] = useState(defaultMinutes);
  const [left, setLeft] = useState(defaultMinutes * 60);
  const [endsAt, setEndsAt] = useState<number | null>(null);

  useEffect(() => {
    if (endsAt === null) return;
    const tick = () => {
      const remaining = (endsAt - Date.now()) / 1000;
      if (remaining <= 0) {
        setLeft(0);
        setEndsAt(null);
        toast({ message: t('practice.oral.timeUp', { timer: name }), tone: 'neutral' });
      } else setLeft(remaining);
    };
    const interval = setInterval(tick, 250);
    return () => clearInterval(interval);
  }, [endsAt, name]);

  const running = endsAt !== null;
  const changeMinutes = (value: number) => {
    const next = Math.min(120, Math.max(1, Math.round(value) || 1));
    setMinutes(next);
    if (!running) setLeft(next * 60);
  };
  return (
    <div className="rounded-md border border-border p-3">
      <p className="font-medium">{name}</p>
      <p
        className="my-2 text-4xl font-semibold tabular-nums"
        aria-live={left === 0 ? 'assertive' : 'off'}
      >
        {formatClock(left)}
      </p>
      <div className="flex flex-wrap items-center gap-2">
        {running ? (
          <Button size="sm" variant="secondary" onClick={() => setEndsAt(null)}>
            <Pause aria-hidden="true" />
            {t('practice.oral.pause')}
          </Button>
        ) : (
          <Button
            size="sm"
            disabled={left === 0}
            onClick={() => setEndsAt(Date.now() + left * 1000)}
          >
            <Play aria-hidden="true" />
            {t('practice.oral.start')}
          </Button>
        )}
        <Button
          size="sm"
          variant="ghost"
          aria-label={`${t('practice.oral.reset')}: ${name}`}
          onClick={() => {
            setEndsAt(null);
            setLeft(minutes * 60);
          }}
        >
          <RotateCcw aria-hidden="true" />
          {t('practice.oral.reset')}
        </Button>
      </div>
      <label htmlFor={id} className="mt-3 flex items-center gap-2 text-sm">
        <span>{t('practice.oral.minutes')}</span>
        <input
          id={id}
          type="number"
          min={1}
          max={120}
          value={minutes}
          aria-label={t('practice.oral.minutesLabel', { timer: name })}
          onChange={(event) => changeMinutes(Number(event.target.value))}
          className="min-h-11 w-20 rounded-md border border-border-strong bg-surface px-2"
        />
      </label>
    </div>
  );
}

type RecorderState = 'idle' | 'recording' | 'denied';

/** A practice answer stops by itself after the length of a középszint answer. */
const ANSWER_SECONDS = 15 * 60;

function Recorder({ row }: { row: OralTopicRow }) {
  const topicId = row.id;
  const recordings = useLiveQuery(
    () => db.recordings.where('topicId').equals(topicId).reverse().sortBy('createdAt'),
    [topicId],
  );
  const [state, setState] = useState<RecorderState>('idle');
  const [elapsed, setElapsed] = useState(0);
  const recorder = useRef<MediaRecorder | null>(null);
  const supported = typeof MediaRecorder !== 'undefined' && !!navigator.mediaDevices?.getUserMedia;

  useEffect(() => {
    if (state !== 'recording') return;
    const started = Date.now();
    const interval = setInterval(() => {
      const seconds = (Date.now() - started) / 1000;
      setElapsed(seconds);
      if (seconds >= ANSWER_SECONDS && recorder.current?.state === 'recording') {
        recorder.current.stop();
        toast({ message: t('practice.oral.answerTimeUp'), tone: 'neutral' });
      }
    }, 500);
    return () => clearInterval(interval);
  }, [state]);

  // Stop the microphone when the page is left mid-recording.
  useEffect(() => () => recorder.current?.stop(), []);

  const start = async () => {
    let stream: MediaStream;
    try {
      stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    } catch {
      setState('denied');
      return;
    }
    const media = new MediaRecorder(stream);
    const chunks: Blob[] = [];
    const started = Date.now();
    media.ondataavailable = (event) => {
      if (event.data.size > 0) chunks.push(event.data);
    };
    media.onstop = () => {
      stream.getTracks().forEach((track) => track.stop());
      recorder.current = null;
      const blob = new Blob(chunks, { type: media.mimeType || 'audio/webm' });
      const seconds = Math.round((Date.now() - started) / 1000);
      if (blob.size > 0) void saveRecording(topicId, blob, seconds);
      setState('idle');
    };
    recorder.current = media;
    media.start();
    setElapsed(0);
    setState('recording');
  };

  return (
    <Card aria-labelledby="oral-record">
      <CardTitle id="oral-record">{t('practice.oral.recordTitle')}</CardTitle>
      {!supported ? (
        <CardDescription>{t('practice.oral.micUnsupported')}</CardDescription>
      ) : (
        <div className="mt-3 flex flex-wrap items-center gap-3">
          {state === 'recording' ? (
            <>
              <Button variant="danger" onClick={() => recorder.current?.stop()}>
                <Square aria-hidden="true" />
                {t('practice.oral.stop')}
              </Button>
              <span role="status" className="flex items-center gap-2 tabular-nums">
                <span
                  aria-hidden="true"
                  className="size-3 rounded-full bg-danger motion-safe:animate-pulse"
                />
                {t('practice.oral.recording', { time: formatClock(elapsed) })}
              </span>
              <span className="text-sm text-muted tabular-nums">
                {t('practice.oral.remaining', {
                  time: formatClock(Math.max(0, ANSWER_SECONDS - elapsed)),
                })}
              </span>
            </>
          ) : (
            <Button onClick={() => void start()}>
              <Mic aria-hidden="true" />
              {t('practice.oral.record')}
            </Button>
          )}
        </div>
      )}
      {supported && (
        <CardDescription className="mt-2">{t('practice.oral.recordHow')}</CardDescription>
      )}
      {state === 'denied' && (
        <p role="alert" className="mt-3 text-sm text-danger">
          {t('practice.oral.micDenied')}
        </p>
      )}
      {recordings === undefined ? null : recordings.length === 0 ? (
        <p className="mt-4 text-sm text-muted">{t('practice.oral.recordingsEmpty')}</p>
      ) : (
        <ul className="mt-4 grid gap-3">
          {recordings.map((recording, index) => (
            <RecordingItem
              key={recording.id}
              recording={recording}
              row={row}
              newest={index === 0}
            />
          ))}
        </ul>
      )}
      <p className="mt-4 text-sm text-muted">{t('practice.oral.privacy')}</p>
    </Card>
  );
}

function RecordingItem({
  recording,
  row,
  newest,
}: {
  recording: RecordingRow;
  row: OralTopicRow;
  newest: boolean;
}) {
  const audio = useRef<HTMLAudioElement>(null);
  // The object URL lives as long as the player, so the blob is not copied per render.
  useEffect(() => {
    const objectUrl = URL.createObjectURL(recording.blob);
    if (audio.current) audio.current.src = objectUrl;
    return () => URL.revokeObjectURL(objectUrl);
  }, [recording.blob]);
  const label = t('practice.oral.recordingLabel', {
    date: formatDate(recording.createdAt, { dateStyle: 'medium', timeStyle: 'short' }),
    time: formatClock(recording.seconds),
  });
  return (
    <li className="grid gap-2 rounded-md border border-border p-3">
      <p className="text-sm font-medium">{label}</p>
      <div className="flex items-center gap-2">
        {/* The student's own voice recording: there is no caption text to offer. */}
        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <audio ref={audio} controls aria-label={label} className="min-w-0 flex-1" />
        <Button
          size="icon"
          variant="ghost"
          aria-label={`${t('practice.oral.deleteRecording')}: ${label}`}
          onClick={() => void deleteRecording(recording.id)}
        >
          <Trash2 aria-hidden="true" />
        </Button>
      </div>
      <SelfCheck recording={recording} row={row} open={newest && !recording.checks} />
    </li>
  );
}

/** Listening back with a checklist: what went into the answer, and how it sounded. */
function SelfCheck({
  recording,
  row,
  open,
}: {
  recording: RecordingRow;
  row: OralTopicRow;
  open: boolean;
}) {
  const items = useMemo(() => oralChecklist(row.subject, row.outline), [row.subject, row.outline]);
  // Opened for a fresh recording only; afterwards the student opens and closes it.
  const [startOpen] = useState(open);
  // Ticks show at once; the stored copy follows.
  const [checks, setChecks] = useState<Record<string, boolean>>(recording.checks ?? {});
  const score = checklistScore(items, checks);
  const general = items.filter((item) => 'key' in item.label);
  const own = items.filter((item) => 'text' in item.label);
  const toggle = (key: string, value: boolean) => {
    const next = { ...checks, [key]: value };
    setChecks(next);
    void saveRecordingChecks(recording.id, next);
  };
  const renderItem = (item: ChecklistItem) => (
    <li key={item.key}>
      <label className="flex min-h-11 cursor-pointer items-start gap-3 py-1">
        <input
          type="checkbox"
          className="mt-0.5 size-5 shrink-0 accent-[var(--c-primary)]"
          checked={!!checks[item.key]}
          onChange={(event) => toggle(item.key, event.target.checked)}
        />
        <span>
          {'key' in item.label
            ? t(item.label.key)
            : t('practice.oral.mentioned', { point: item.label.text })}
        </span>
      </label>
    </li>
  );
  return (
    <details open={startOpen} className="rounded-md bg-surface-muted p-3">
      <summary className="cursor-pointer font-medium">
        {t('practice.oral.selfCheck', { done: score.done, total: score.total })}
      </summary>
      <p className="mt-2 text-sm text-muted">{t('practice.oral.selfCheckHow')}</p>
      <ul className="mt-2 grid">{general.map(renderItem)}</ul>
      {own.length > 0 && (
        <>
          <p className="mt-3 text-sm font-semibold">{t('practice.oral.ownPoints')}</p>
          <ul className="grid">{own.map(renderItem)}</ul>
        </>
      )}
      {score.total > 0 && score.done === score.total && (
        <p role="status" className="mt-2 text-sm font-medium text-success">
          {t('practice.oral.selfCheckAll')}
        </p>
      )}
    </details>
  );
}
