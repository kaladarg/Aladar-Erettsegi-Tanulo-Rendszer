import { Check, RotateCcw, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import type { QuizQuestion } from '@/content/guide';
import { RichText } from '@/content/RichText';
import { Button } from '@/design/ui/Button';
import { formatNumber, t } from '@/i18n';
import { cn } from '@/lib/cn';
import { saveGuideQuiz } from '@/storage/guide';
import { plainOption } from './plainOption';

/**
 * Self-check at the end of a page: each answer is checked at once with an
 * explanation, and the score is kept when every question is answered.
 */
export function GuideQuiz({ pageId, questions }: { pageId: string; questions: QuizQuestion[] }) {
  const [answers, setAnswers] = useState<(number | null)[]>(() => questions.map(() => null));
  const [round, setRound] = useState(0);
  const saved = useRef(false);
  const done = answers.every((a) => a !== null);
  const correct = answers.filter((a, i) => a === questions[i]?.answer).length;

  useEffect(() => {
    if (!done || saved.current) return;
    saved.current = true;
    void saveGuideQuiz(pageId, correct, questions.length);
  }, [done, correct, pageId, questions.length]);

  const restart = () => {
    saved.current = false;
    setAnswers(questions.map(() => null));
    setRound((r) => r + 1);
  };

  return (
    <div className="grid gap-4">
      <ol className="grid gap-4">
        {questions.map((q, qi) => {
          const chosen = answers[qi];
          const answered = chosen !== null && chosen !== undefined;
          return (
            <li
              key={`${round}-${qi}`}
              className="rounded-lg border border-border bg-surface p-4 shadow-1"
            >
              <fieldset>
                <legend className="mb-3 font-semibold">
                  <span className="mr-1 text-muted tabular-nums">{qi + 1}.</span>
                  <RichText text={q.question} className="inline-grid" />
                  {q.emelt && (
                    <span className="ml-2 rounded-full bg-primary-soft px-1.5 py-0.5 text-[0.7rem] font-semibold text-primary-soft-fg">
                      {t('guide.emelt')}
                    </span>
                  )}
                </legend>
                <div className="grid gap-2">
                  {q.options.map((option, oi) => {
                    const isRight = oi === q.answer;
                    const isChosen = oi === chosen;
                    return (
                      <button
                        key={oi}
                        type="button"
                        disabled={answered}
                        aria-pressed={isChosen}
                        aria-label={plainOption(option)}
                        onClick={() =>
                          setAnswers((current) => current.map((a, i) => (i === qi ? oi : a)))
                        }
                        className={cn(
                          'flex min-h-11 items-center gap-2 rounded-md border px-3 py-2 text-left transition-colors',
                          !answered && 'border-border-strong hover:bg-surface-muted',
                          answered && isRight && 'border-success bg-success-soft',
                          answered && isChosen && !isRight && 'border-danger bg-danger-soft',
                          answered && !isChosen && !isRight && 'border-border opacity-70',
                        )}
                      >
                        {answered && isRight && (
                          <Check aria-hidden="true" className="size-4 shrink-0 text-success" />
                        )}
                        {answered && isChosen && !isRight && (
                          <X aria-hidden="true" className="size-4 shrink-0 text-danger" />
                        )}
                        <RichText text={option} />
                      </button>
                    );
                  })}
                </div>
                {answered && (
                  <div role="status" className="mt-3 text-sm">
                    <p
                      className={cn(
                        'font-semibold',
                        chosen === q.answer ? 'text-success' : 'text-danger',
                      )}
                    >
                      {chosen === q.answer ? t('guide.quiz.right') : t('guide.quiz.wrong')}
                    </p>
                    <RichText text={q.explanation} className="mt-1 text-muted" />
                  </div>
                )}
              </fieldset>
            </li>
          );
        })}
      </ol>
      {done && (
        <div className="flex flex-wrap items-center justify-between gap-3 rounded-lg bg-primary-soft p-4 text-primary-soft-fg">
          <p className="text-lg font-bold">
            {t('guide.quiz.score', {
              correct: formatNumber(correct),
              total: formatNumber(questions.length),
            })}
          </p>
          <Button variant="secondary" size="sm" onClick={restart}>
            <RotateCcw aria-hidden="true" />
            {t('guide.quiz.again')}
          </Button>
        </div>
      )}
    </div>
  );
}
