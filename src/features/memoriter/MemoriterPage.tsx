import { ArrowLeft, Check, Eye, Pause, RotateCcw, Volume2 } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { Link, useParams, useSearchParams } from 'react-router';
import { NotFoundPage } from '@/app/ErrorScreens';
import { usePageTitle } from '@/app/usePageTitle';
import { MEMORITEREK } from '@/content/memoriter/poems';
import type { Memoriter } from '@/content/memoriter/types';
import { Badge } from '@/design/ui/Badge';
import { Button } from '@/design/ui/Button';
import { SegmentedControl } from '@/design/ui/SegmentedControl';
import { SwitchField } from '@/design/ui/Switch';
import { checkRecitation, hiddenWords, type ReciteResult } from '@/domain/memoriter/recite';
import { formatNumber, t } from '@/i18n';
import { cn } from '@/lib/cn';
import { KNOWN_SCORE, saveRecitation, setKnown, useMemoriterProgress } from '@/storage/memoriter';
import { allLines, findMemoriter } from './poem';

type Mode = 'olvasas' | 'tanulas' | 'felmondas';
const MODES: Mode[] = ['olvasas', 'tanulas', 'felmondas'];
const LEVELS = ['0', '25', '50', '75', '100'] as const;

export function MemoriterPage() {
  const { poemId = '' } = useParams();
  const poem = findMemoriter(MEMORITEREK, poemId);
  if (!poem) return <NotFoundPage />;
  return <PoemPage key={poem.id} poem={poem} />;
}

function PoemPage({ poem }: { poem: Memoriter }) {
  usePageTitle(`${poem.author}: ${poem.title}`);
  const [params, setParams] = useSearchParams();
  const mode: Mode = MODES.find((m) => m === params.get('mod')) ?? 'olvasas';
  const row = useMemoriterProgress()?.get(poem.id);
  const setMode = (next: Mode) =>
    setParams(
      (current) => {
        const copy = new URLSearchParams(current);
        copy.set('mod', next);
        return copy;
      },
      { replace: true },
    );

  return (
    <article className="mx-auto max-w-2xl">
      <Link
        to="/gyakorlas/memoriterek"
        className="mb-4 inline-flex items-center gap-1.5 text-sm font-medium text-muted hover:text-text"
      >
        <ArrowLeft aria-hidden="true" className="size-4" />
        {t('memoriter.back')}
      </Link>
      <p className="text-sm font-medium text-muted">{poem.author}</p>
      <h1 className="mt-1 text-3xl font-bold tracking-tight [overflow-wrap:anywhere]">
        {poem.title}
      </h1>
      <div className="mt-3 flex flex-wrap items-center gap-2 text-sm">
        <Badge>{t('memoriter.grade', { grade: poem.grade.replace('-', '–') + '.' })}</Badge>
        {poem.part && <Badge tone="info">{poem.part}</Badge>}
        {row?.known && <Badge tone="success">{t('memoriter.known')}</Badge>}
        {row?.bestScore !== undefined && (
          <span className="text-muted">
            {t('memoriter.best', { score: formatNumber(row.bestScore) })}
          </span>
        )}
      </div>
      {poem.note && <p className="mt-2 text-sm text-muted italic">{poem.note}</p>}

      <div className="sticky top-[4.25rem] z-10 -mx-4 mt-5 border-b border-border bg-bg/95 px-4 py-2 backdrop-blur sm:-mx-6 sm:px-6 md:top-0">
        <SegmentedControl<Mode>
          label={t('memoriter.mode')}
          value={mode}
          onValueChange={setMode}
          options={MODES.map((m) => ({ value: m, label: t(`memoriter.modes.${m}`) }))}
        />
      </div>
      <p className="mt-3 text-sm text-muted">{t(`memoriter.modeHint.${mode}`)}</p>

      <div className="mt-5">
        {mode === 'olvasas' && <ReadMode poem={poem} known={!!row?.known} />}
        {mode === 'tanulas' && <LearnMode poem={poem} />}
        {mode === 'felmondas' && <ReciteMode poem={poem} />}
      </div>
    </article>
  );
}

function Stanzas({
  poem,
  renderLine,
}: {
  poem: Memoriter;
  renderLine: (line: string, index: number) => React.ReactNode;
}) {
  let index = 0;
  return (
    <div
      lang="hu"
      className="poem grid gap-5 rounded-xl border border-border bg-surface p-5 text-lg leading-relaxed shadow-1 sm:p-7"
    >
      {poem.stanzas.map((stanza, si) => (
        <div key={si}>
          {stanza.label && (
            <p className="mb-1 font-sans text-sm font-semibold text-muted not-italic">
              {stanza.label}
            </p>
          )}
          {stanza.lines.map((line) => {
            const i = index++;
            return (
              <p key={i} className="[overflow-wrap:anywhere]">
                {renderLine(line, i)}
              </p>
            );
          })}
        </div>
      ))}
    </div>
  );
}

function ReadMode({ poem, known }: { poem: Memoriter; known: boolean }) {
  const canSpeak = typeof window !== 'undefined' && 'speechSynthesis' in window;
  const [speaking, setSpeaking] = useState(false);
  useEffect(
    () => () => {
      if (canSpeak) window.speechSynthesis.cancel();
    },
    [canSpeak],
  );
  const toggleSpeech = () => {
    if (speaking) {
      window.speechSynthesis.cancel();
      setSpeaking(false);
      return;
    }
    const text = poem.stanzas.map((s) => s.lines.join('\n')).join('\n\n');
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'hu-HU';
    utterance.rate = 0.9;
    utterance.onend = () => setSpeaking(false);
    utterance.onerror = () => setSpeaking(false);
    window.speechSynthesis.speak(utterance);
    setSpeaking(true);
  };
  return (
    <div className="grid gap-4">
      <Stanzas poem={poem} renderLine={(line) => line} />
      <div className="flex flex-wrap items-center gap-3">
        {canSpeak && (
          <Button variant="secondary" onClick={toggleSpeech} aria-pressed={speaking}>
            {speaking ? <Pause aria-hidden="true" /> : <Volume2 aria-hidden="true" />}
            {speaking ? t('memoriter.stop') : t('memoriter.listen')}
          </Button>
        )}
      </div>
      <div className="rounded-lg border border-border bg-surface px-4">
        <SwitchField
          label={t('memoriter.markKnown')}
          description={t('memoriter.markKnownHint')}
          checked={known}
          onCheckedChange={(value) => void setKnown(poem.id, value)}
        />
      </div>
    </div>
  );
}

function LearnMode({ poem }: { poem: Memoriter }) {
  const [level, setLevel] = useState<(typeof LEVELS)[number]>('25');
  const [initials, setInitials] = useState(true);
  const [revealed, setRevealed] = useState<Set<number>>(new Set());
  const lines = allLines(poem);
  const lineWords = lines.map((line) => line.split(/\s+/).filter(Boolean));
  const offsets = lineWords.reduce<number[]>((acc, _words, i) => {
    acc.push(i === 0 ? 0 : acc[i - 1]! + lineWords[i - 1]!.length);
    return acc;
  }, []);
  const total = lineWords.reduce((sum, words) => sum + words.length, 0);
  const hidden = useMemo(
    () => hiddenWords(total, Number(level) / 100, poem.id),
    [total, level, poem.id],
  );

  return (
    <div className="grid gap-4">
      <div className="grid gap-2 rounded-lg border border-border bg-surface p-3">
        <SegmentedControl<(typeof LEVELS)[number]>
          label={t('memoriter.hideLevel')}
          value={level}
          onValueChange={(value) => {
            setLevel(value);
            setRevealed(new Set());
          }}
          options={LEVELS.map((l) => ({ value: l, label: `${l}%` }))}
        />
        <SwitchField
          label={t('memoriter.initials')}
          description={t('memoriter.initialsHint')}
          checked={initials}
          onCheckedChange={setInitials}
        />
      </div>
      <Stanzas
        poem={poem}
        renderLine={(_, li) =>
          lineWords[li]!.map((word, wi) => {
            const k = offsets[li]! + wi;
            const space = wi > 0 ? ' ' : '';
            if (!hidden[k] || revealed.has(k)) return <span key={k}>{space + word}</span>;
            const letters = [...word];
            const masked = letters
              .map((ch, ci) => (/\p{L}/u.test(ch) ? (ci === 0 && initials ? ch : '_') : ch))
              .join('');
            return (
              <span key={k}>
                {space}
                <button
                  type="button"
                  onClick={() => setRevealed((s) => new Set(s).add(k))}
                  className="rounded-sm bg-primary-soft px-0.5 font-mono text-[0.9em] tracking-wider text-primary-soft-fg hover:bg-primary hover:text-primary-fg"
                  aria-label={t('memoriter.revealWord')}
                >
                  {masked}
                </button>
              </span>
            );
          })
        }
      />
      <div className="flex flex-wrap gap-3">
        <Button
          variant="secondary"
          onClick={() => setRevealed(new Set(hidden.flatMap((h, k) => (h ? [k] : []))))}
        >
          <Eye aria-hidden="true" />
          {t('memoriter.revealAll')}
        </Button>
        <Button variant="ghost" onClick={() => setRevealed(new Set())}>
          <RotateCcw aria-hidden="true" />
          {t('memoriter.hideAgain')}
        </Button>
      </div>
    </div>
  );
}

function ReciteMode({ poem }: { poem: Memoriter }) {
  const [text, setText] = useState('');
  const [punctuation, setPunctuation] = useState(true);
  const [result, setResult] = useState<ReciteResult | null>(null);
  const check = () => {
    const r = checkRecitation(allLines(poem), text, { punctuation });
    setResult(r);
    void saveRecitation(poem.id, r.score);
  };
  return (
    <div className="grid gap-4">
      <label className="grid gap-2">
        <span className="font-semibold">{t('memoriter.writeLabel')}</span>
        <textarea
          lang="hu"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
            setResult(null);
          }}
          rows={Math.min(14, allLines(poem).length + 2)}
          spellCheck={false}
          autoCorrect="off"
          autoCapitalize="sentences"
          className="poem w-full rounded-lg border border-border-strong bg-surface p-3 text-lg leading-relaxed"
        />
      </label>
      <div className="rounded-lg border border-border bg-surface px-4">
        <SwitchField
          label={t('memoriter.punctuation')}
          description={t('memoriter.punctuationHint')}
          checked={punctuation}
          onCheckedChange={(value) => {
            setPunctuation(value);
            setResult(null);
          }}
        />
      </div>
      <div className="flex flex-wrap gap-3">
        <Button onClick={check} disabled={text.trim() === ''}>
          <Check aria-hidden="true" />
          {t('memoriter.check')}
        </Button>
        <Button
          variant="ghost"
          onClick={() => {
            setText('');
            setResult(null);
          }}
        >
          <RotateCcw aria-hidden="true" />
          {t('memoriter.again')}
        </Button>
      </div>
      {result && <Result poem={poem} result={result} />}
    </div>
  );
}

function Result({ poem, result }: { poem: Memoriter; result: ReciteResult }) {
  const great = result.score >= KNOWN_SCORE;
  return (
    <section aria-labelledby="recite-result" className="grid gap-4">
      <div
        role="status"
        className={cn(
          'rounded-lg p-4',
          great ? 'bg-success-soft' : result.score >= 70 ? 'bg-warning-soft' : 'bg-danger-soft',
        )}
      >
        <h2 id="recite-result" className="text-2xl font-bold">
          {t('memoriter.score', { score: formatNumber(result.score) })}
        </h2>
        <p className="mt-1">
          {t('memoriter.wordsOk', {
            correct: formatNumber(result.correct),
            total: formatNumber(result.total),
          })}
          {result.extra.length > 0 &&
            ' ' + t('memoriter.extra', { count: formatNumber(result.extra.length) })}
        </p>
        <p className="mt-1 text-sm">{great ? t('memoriter.great') : t('memoriter.keepGoing')}</p>
      </div>
      <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted">
        <span>
          <span className="rounded-sm bg-danger-soft px-1 text-danger line-through decoration-2">
            {t('memoriter.legendMissingSample')}
          </span>{' '}
          {t('memoriter.legendMissing')}
        </span>
        <span>
          <span className="rounded-sm bg-warning-soft px-1 underline decoration-wavy">
            {t('memoriter.legendWrongSample')}
          </span>{' '}
          {t('memoriter.legendWrong')}
        </span>
      </div>
      <Stanzas
        poem={poem}
        renderLine={(_, li) =>
          result.lines[li]!.map((w, wi) => {
            const space = wi > 0 ? ' ' : '';
            if (w.status === 'ok') return <span key={wi}>{space + w.text}</span>;
            if (w.status === 'missing')
              return (
                <span key={wi}>
                  {space}
                  <del className="rounded-sm bg-danger-soft px-0.5 text-danger decoration-2">
                    <span className="sr-only">{t('memoriter.srMissing')} </span>
                    {w.text}
                  </del>
                </span>
              );
            return (
              <span key={wi}>
                {space}
                <mark className="rounded-sm bg-warning-soft px-0.5 text-text underline decoration-wavy">
                  {w.text}
                  <span className="text-sm text-muted">
                    {' '}
                    ({t('memoriter.youWrote', { word: w.typed ?? '' })})
                  </span>
                </mark>
              </span>
            );
          })
        }
      />
      {result.extra.length > 0 && (
        <p className="text-sm text-muted">
          {t('memoriter.extraWords')}: {result.extra.join(', ')}
        </p>
      )}
    </section>
  );
}
