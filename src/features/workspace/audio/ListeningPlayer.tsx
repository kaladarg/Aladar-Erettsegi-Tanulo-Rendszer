import { FolderOpen, Headphones, Pause, Play, RotateCcw, RotateCw, Trash2 } from 'lucide-react';
import { useEffect, useId, useMemo, useRef, useState } from 'react';
import { removeAudio, storeAudio, useImportedAudio } from '@/content/audioImport';
import type { Exam, Part } from '@/content/schema.types';
import { Button } from '@/design/ui/Button';
import { formatClock as clock } from '@/domain/examTiming';
import { t } from '@/i18n';
import { useAnswer, useAnswers } from '@/state/answerStore';
import { toast } from '@/state/toastStore';
import { audioPositionKey } from './clock';

const SPEEDS = [0.75, 0.9, 1, 1.25];
/** Elapsed time rounds down (the exam clock rounds its countdown up). */
const formatClock = (seconds: number) => clock(Math.floor(seconds));

type Source =
  | { status: 'loading' }
  | { status: 'missing' }
  | { status: 'error' }
  | { status: 'ready'; url: string; imported?: string };

/**
 * The pack's recording, fetched whole (so the service worker can keep it for
 * offline use without range requests), or one the student opened.
 */
function useAudioSource(exam: Exam, part: Part, packUrl: string | null): Source {
  const imported = useImportedAudio(exam.id, part.id);
  const [fetched, setFetched] = useState<{ url: string; src: string } | 'error' | null>(null);

  useEffect(() => {
    if (!packUrl) return;
    let active = true;
    let objectUrl: string | null = null;
    void fetch(packUrl)
      .then((response) => {
        // A static host may answer a missing file with its HTML error page.
        if (!response.ok || response.headers.get('content-type')?.startsWith('text/html'))
          throw new Error(String(response.status));
        return response.blob();
      })
      .then((blob) => {
        if (blob.size === 0) throw new Error('empty recording');
        if (!active) return;
        objectUrl = URL.createObjectURL(blob);
        setFetched({ url: objectUrl, src: packUrl });
      })
      .catch(() => active && setFetched('error'));
    return () => {
      active = false;
      if (objectUrl) URL.revokeObjectURL(objectUrl);
    };
  }, [packUrl]);

  const importedUrl = useMemo(
    () => (imported ? URL.createObjectURL(imported.blob) : null),
    [imported],
  );
  useEffect(() => () => void (importedUrl && URL.revokeObjectURL(importedUrl)), [importedUrl]);

  if (imported === undefined) return { status: 'loading' };
  if (imported && importedUrl)
    return { status: 'ready', url: importedUrl, imported: imported.name };
  if (!packUrl) return { status: 'missing' };
  if (fetched === 'error') return { status: 'missing' };
  if (fetched && fetched.src === packUrl) return { status: 'ready', url: fetched.url };
  return { status: 'loading' };
}

/**
 * Plays the recording of a listening part. In practice the student can pause,
 * rewind and slow it down; in exam mode it plays through once without
 * stopping, as at the érettségi, and resumes where it was after a reload.
 */
export function ListeningPlayer({
  exam,
  part,
  packUrl,
  examMode,
}: {
  exam: Exam;
  part: Part;
  packUrl: string | null;
  examMode: boolean;
}) {
  const source = useAudioSource(exam, part, packUrl);
  const titleId = useId();
  return (
    <section
      aria-labelledby={titleId}
      className="sticky top-[var(--ws-top,3.75rem)] z-20 border-b border-border bg-surface shadow-1"
    >
      <div className="mx-auto flex max-w-5xl flex-wrap items-center gap-x-4 gap-y-2 px-3 py-2 sm:px-4">
        <h2 id={titleId} className="flex items-center gap-2 text-sm font-semibold">
          <Headphones aria-hidden="true" className="size-4 text-primary" />
          {t('workspace.audio.title', { part: part.title })}
        </h2>
        {source.status === 'ready' ? (
          <Controls
            key={source.url}
            url={source.url}
            part={part}
            examMode={examMode}
            imported={source.imported}
            onRemove={() => void removeAudio(exam.id, part.id)}
          />
        ) : source.status === 'loading' ? (
          <p className="text-sm text-muted" role="status">
            {t('workspace.audio.loading')}
          </p>
        ) : (
          <MissingAudio exam={exam} part={part} />
        )}
      </div>
    </section>
  );
}

function MissingAudio({ exam, part }: { exam: Exam; part: Part }) {
  const input = useRef<HTMLInputElement>(null);
  const pick = async (file: File | undefined) => {
    if (!file) return;
    if (!file.type.startsWith('audio/') && !/\.(mp3|m4a|ogg|wav|aac)$/i.test(file.name)) {
      toast({ message: t('workspace.audio.notAudio'), tone: 'danger' });
      return;
    }
    await storeAudio(exam.id, part.id, file);
    toast({ message: t('workspace.audio.stored'), tone: 'success' });
  };
  return (
    <div className="flex flex-1 flex-wrap items-center gap-x-3 gap-y-2 text-sm">
      <p className="min-w-56 flex-1">
        {t('workspace.audio.missing')}{' '}
        {exam.source.officialPage && (
          <a
            href={exam.source.officialPage}
            target="_blank"
            rel="noreferrer"
            className="font-medium text-primary underline"
          >
            {t('workspace.audio.officialLink')}
          </a>
        )}
      </p>
      <input
        ref={input}
        type="file"
        accept="audio/*,.mp3,.m4a,.ogg,.wav"
        className="sr-only"
        tabIndex={-1}
        aria-hidden="true"
        onChange={(event) => {
          void pick(event.target.files?.[0]);
          event.target.value = '';
        }}
      />
      <Button size="sm" variant="secondary" onClick={() => input.current?.click()}>
        <FolderOpen aria-hidden="true" />
        {t('workspace.audio.open')}
      </Button>
    </div>
  );
}

function Controls({
  url,
  part,
  examMode,
  imported,
  onRemove,
}: {
  url: string;
  part: Part;
  examMode: boolean;
  imported?: string;
  onRemove: () => void;
}) {
  const audio = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [time, setTime] = useState(0);
  const [duration, setDuration] = useState(part.audio?.durationSeconds ?? 0);
  const [ended, setEnded] = useState(false);
  const [speed, setSpeed] = useState(1);
  const sliderId = useId();
  const saved = useAnswer(audioPositionKey(part.id));
  const setAnswer = useAnswers((state) => state.setAnswer);
  const lastSave = useRef(0);
  const segments = part.audio?.segments ?? [];

  // Exam mode resumes from the saved position (e.g. after the page was reloaded).
  const startAt = examMode && typeof saved === 'string' ? Number(saved) || 0 : 0;
  const restored = useRef(false);

  const play = () => void audio.current?.play().catch(() => setPlaying(false));
  const seek = (to: number) => {
    const el = audio.current;
    if (!el) return;
    el.currentTime = Math.max(0, Math.min(to, el.duration || to));
    setTime(el.currentTime);
  };

  return (
    <div className="flex flex-1 flex-wrap items-center gap-x-3 gap-y-2">
      {/* eslint-disable-next-line jsx-a11y/media-has-caption -- the transcript is shown after checking */}
      <audio
        ref={audio}
        src={url}
        preload="auto"
        onLoadedMetadata={(event) => {
          const el = event.currentTarget;
          if (Number.isFinite(el.duration)) setDuration(el.duration);
          if (!restored.current && startAt > 0) {
            el.currentTime = Math.min(startAt, el.duration || startAt);
            setTime(el.currentTime);
          }
          restored.current = true;
          el.playbackRate = speed;
        }}
        onPlay={() => {
          setPlaying(true);
          setEnded(false);
        }}
        onPause={() => setPlaying(false)}
        onEnded={() => {
          setPlaying(false);
          setEnded(true);
          if (examMode) setAnswer(audioPositionKey(part.id), String(Math.ceil(duration)));
        }}
        onTimeUpdate={(event) => {
          const now = event.currentTarget.currentTime;
          setTime(now);
          if (examMode && Math.abs(now - lastSave.current) >= 5) {
            lastSave.current = now;
            setAnswer(audioPositionKey(part.id), String(Math.floor(now)));
          }
        }}
      />
      {examMode ? (
        <>
          <Button
            size="sm"
            onClick={play}
            disabled={playing || ended || (duration > 0 && startAt >= duration - 1)}
          >
            <Play aria-hidden="true" />
            {startAt > 0 || time > 0 ? t('workspace.audio.resume') : t('workspace.audio.start')}
          </Button>
          <p className="text-sm tabular-nums" aria-live="off">
            {formatClock(time)} / {formatClock(duration)}
          </p>
          <p className="text-xs text-muted">
            {ended || (duration > 0 && startAt >= duration - 1)
              ? t('workspace.audio.finished')
              : t('workspace.audio.examNote')}
          </p>
        </>
      ) : (
        <>
          <div className="flex items-center gap-1">
            <Button
              size="icon"
              variant="ghost"
              aria-label={t('workspace.audio.back')}
              onClick={() => seek(time - 10)}
            >
              <RotateCcw aria-hidden="true" />
            </Button>
            <Button
              size="icon"
              aria-label={playing ? t('workspace.audio.pause') : t('workspace.audio.play')}
              onClick={() => (playing ? audio.current?.pause() : play())}
            >
              {playing ? <Pause aria-hidden="true" /> : <Play aria-hidden="true" />}
            </Button>
            <Button
              size="icon"
              variant="ghost"
              aria-label={t('workspace.audio.forward')}
              onClick={() => seek(time + 10)}
            >
              <RotateCw aria-hidden="true" />
            </Button>
          </div>
          <label htmlFor={sliderId} className="sr-only">
            {t('workspace.audio.position')}
          </label>
          <input
            id={sliderId}
            type="range"
            min={0}
            max={Math.max(1, Math.floor(duration))}
            step={1}
            value={Math.floor(time)}
            aria-valuetext={`${formatClock(time)} / ${formatClock(duration)}`}
            onChange={(event) => seek(Number(event.target.value))}
            className="min-w-32 flex-1 accent-[var(--c-primary)]"
          />
          <span className="text-sm tabular-nums">
            {formatClock(time)} / {formatClock(duration)}
          </span>
          <label className="flex items-center gap-1 text-sm">
            <span>{t('workspace.audio.speed')}</span>
            <select
              value={speed}
              onChange={(event) => {
                const next = Number(event.target.value);
                setSpeed(next);
                if (audio.current) audio.current.playbackRate = next;
              }}
              className="min-h-9 rounded-md border border-border bg-surface px-1"
            >
              {SPEEDS.map((value) => (
                <option key={value} value={value}>
                  {t('workspace.audio.speedValue', { speed: String(value).replace('.', ',') })}
                </option>
              ))}
            </select>
          </label>
          {segments.length > 0 && (
            <div className="flex basis-full flex-wrap gap-1">
              {segments.map((segment) => (
                <Button
                  key={segment.label}
                  size="sm"
                  variant="secondary"
                  onClick={() => {
                    seek(segment.startSeconds);
                    play();
                  }}
                >
                  {segment.label}
                </Button>
              ))}
            </div>
          )}
          {imported && (
            <p className="flex basis-full flex-wrap items-center gap-2 text-xs text-muted">
              {t('workspace.audio.ownFile', { name: imported })}
              <Button size="sm" variant="ghost" onClick={onRemove}>
                <Trash2 aria-hidden="true" />
                {t('workspace.audio.remove')}
              </Button>
            </p>
          )}
        </>
      )}
    </div>
  );
}
