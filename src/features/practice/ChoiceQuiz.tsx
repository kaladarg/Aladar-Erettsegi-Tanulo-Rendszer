import { Check, RotateCcw, X } from 'lucide-react';
import { useState, type ReactNode } from 'react';
import { Link } from 'react-router';
import { RichText } from '@/content/RichText';
import { Button } from '@/design/ui/Button';
import { formatNumber, t } from '@/i18n';
import { cn } from '@/lib/cn';

export interface ChoiceItem {
  id: string;
  /** Rich text (**bold**, *italic*). */
  question: string;
  options: string[];
  answer: number;
  explanation: string;
  /** Shown above the question, e.g. a map. */
  figure?: ReactNode;
  /** Where to read more about the item. */
  link?: { to: string; label: string };
}

/** One question at a time with instant feedback and an explanation, then the score. */
export function ChoiceQuiz({ items, onNewRound }: { items: ChoiceItem[]; onNewRound: () => void }) {
  const [index, setIndex] = useState(0);
  const [chosen, setChosen] = useState<number | null>(null);
  const [correct, setCorrect] = useState(0);
  const item = items[index];

  if (!item) {
    return (
      <div
        role="status"
        className="grid gap-3 rounded-xl border border-border bg-surface p-5 shadow-1"
      >
        <p className="text-xl font-bold">
          {t('choiceQuiz.score', {
            correct: formatNumber(correct),
            total: formatNumber(items.length),
          })}
        </p>
        <Button onClick={onNewRound} className="justify-self-start">
          <RotateCcw aria-hidden="true" />
          {t('choiceQuiz.newRound')}
        </Button>
      </div>
    );
  }

  const answered = chosen !== null;
  const choose = (option: number) => {
    if (answered) return;
    setChosen(option);
    if (option === item.answer) setCorrect((c) => c + 1);
  };
  const next = () => {
    setChosen(null);
    setIndex((i) => i + 1);
  };

  return (
    <div className="grid gap-4 rounded-xl border border-border bg-surface p-4 shadow-1 sm:p-5">
      <p className="text-sm font-medium text-muted">
        {t('choiceQuiz.progress', {
          current: formatNumber(index + 1),
          total: formatNumber(items.length),
        })}
      </p>
      {item.figure}
      <div className="text-lg font-semibold">
        <RichText text={item.question} />
      </div>
      <ul className="grid gap-2" aria-label={t('choiceQuiz.options')}>
        {item.options.map((option, oi) => {
          const isAnswer = oi === item.answer;
          const isChosen = oi === chosen;
          return (
            <li key={option}>
              <button
                type="button"
                onClick={() => choose(oi)}
                aria-pressed={isChosen}
                disabled={answered && !isChosen && !isAnswer}
                className={cn(
                  'flex min-h-11 w-full items-center gap-2 rounded-lg border px-3 py-2 text-left',
                  !answered && 'border-border-strong hover:bg-surface-muted',
                  answered && isAnswer && 'border-success bg-success-soft',
                  answered && isChosen && !isAnswer && 'border-danger bg-danger-soft',
                  answered && !isChosen && !isAnswer && 'border-border opacity-60',
                )}
              >
                {answered && isAnswer && (
                  <Check aria-hidden="true" className="size-4 shrink-0 text-success" />
                )}
                {answered && isChosen && !isAnswer && (
                  <X aria-hidden="true" className="size-4 shrink-0 text-danger" />
                )}
                <RichText text={option} />
              </button>
            </li>
          );
        })}
      </ul>
      {answered && (
        <div role="status" className="grid gap-2">
          <p className="font-semibold">
            {chosen === item.answer ? t('choiceQuiz.right') : t('choiceQuiz.wrong')}
          </p>
          <RichText text={item.explanation} />
          {item.link && (
            <Link to={item.link.to} className="text-sm font-medium text-primary underline">
              {item.link.label}
            </Link>
          )}
          <Button onClick={next} className="justify-self-start">
            {index + 1 < items.length ? t('choiceQuiz.next') : t('choiceQuiz.finish')}
          </Button>
        </div>
      )}
    </div>
  );
}
