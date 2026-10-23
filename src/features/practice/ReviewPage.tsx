import { Check, CheckCheck, Clock3, Play, RotateCcw, Sparkles, Undo2 } from 'lucide-react';
import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router';
import { usePageTitle } from '@/app/usePageTitle';
import { DEFAULT_SUBJECTS, findSubject, subjectShortName } from '@/content/catalog';
import { examFullTitle } from '@/content/labels';
import { useManifest } from '@/content/useContent';
import { Badge } from '@/design/ui/Badge';
import { Button } from '@/design/ui/Button';
import { Card, CardDescription, CardTitle } from '@/design/ui/Card';
import { EmptyState } from '@/design/ui/EmptyState';
import { PageHeader } from '@/design/ui/PageHeader';
import { SegmentedControl } from '@/design/ui/SegmentedControl';
import { Skeleton } from '@/design/ui/Skeleton';
import {
  doneCards,
  dueCards,
  upcomingCards,
  type ReviewCard,
  type ReviewChoice,
} from '@/domain/practice/review';
import { formatDate, t } from '@/i18n';
import { toast } from '@/state/toastStore';
import { createDrill } from '@/storage/practice';
import { markReview, undoReviewMark } from '@/storage/review';
import { BackLink } from './BackLink';
import { useReviewCards } from './useReviewCards';

const MAX_ROUND = 10;

function parseDay(day: string) {
  const [y, m, d] = day.split('-').map(Number);
  return new Date(y!, m! - 1, d!);
}

/** Ismétlés: tasks to look at again, and the student decides when they are done. */
export function ReviewPage() {
  usePageTitle(t('practice.review.title'));
  const cards = useReviewCards();
  const { state } = useManifest();
  const entries = state.status === 'ready' ? state.data.manifest.exams : [];
  const [subject, setSubject] = useState('all');
  const navigate = useNavigate();

  const filtered = useMemo(
    () => (cards ?? []).filter((c) => subject === 'all' || c.subject === subject),
    [cards, subject],
  );
  const due = dueCards(filtered);
  const resting = upcomingCards(filtered);
  const done = doneCards(filtered);
  const subjects = DEFAULT_SUBJECTS.filter((s) => (cards ?? []).some((c) => c.subject === s.id));

  const start = async (list: ReviewCard[]) => {
    // A round practises one subject at a time, so the help and lookup fit the tasks.
    const first = list[0]!.subject;
    const items = list
      .filter((c) => c.subject === first)
      .slice(0, MAX_ROUND)
      .map((c) => ({ examId: c.examId, taskId: c.taskId }));
    const id = await createDrill({ kind: 'review', subject: first, items });
    navigate(`/gyakorlas/kor/${id}`);
  };

  const label = (card: ReviewCard) => {
    const entry = entries.find((e) => e.id === card.examId);
    return `${entry ? examFullTitle(entry) : card.examId} · ${t('workspace.taskHeading', { number: card.number })}`;
  };

  const decide = async (card: ReviewCard, choice: ReviewChoice) => {
    const id = await markReview(card, choice);
    toast({
      message:
        choice === 'accepted'
          ? t('practice.review.acceptedToast')
          : choice === 'again' || choice === 'saved'
            ? t('practice.review.backToast')
            : t('practice.review.doneToast'),
      tone: 'success',
      action: { label: t('common.undo'), onAction: () => void undoReviewMark(id) },
    });
  };

  if (cards === undefined)
    return (
      <>
        <BackLink />
        <PageHeader title={t('practice.review.title')} description={t('practice.review.intro')} />
        <Skeleton className="h-40" />
      </>
    );

  return (
    <>
      <BackLink />
      <PageHeader title={t('practice.review.title')} description={t('practice.review.intro')} />
      {cards.length === 0 ? (
        <EmptyState
          icon={<Sparkles />}
          title={t('practice.review.empty')}
          description={t('practice.review.emptyBody')}
        />
      ) : (
        <div className="grid gap-6">
          {subjects.length > 1 && (
            <SegmentedControl
              label={t('practice.review.subjectFilter')}
              value={subject}
              onValueChange={setSubject}
              options={[
                { value: 'all', label: t('practice.review.all') },
                ...subjects.map((s) => ({ value: s.id, label: subjectShortName(s) })),
              ]}
            />
          )}

          <Card aria-labelledby="review-due">
            <CardTitle id="review-due" className="flex items-center gap-2">
              <RotateCcw aria-hidden="true" className="size-5 text-primary" />
              {t('practice.review.dueTitle')}
            </CardTitle>
            <CardDescription>
              {due.length > 0
                ? t('practice.review.dueCount', { count: due.length })
                : t('practice.review.allDone')}
            </CardDescription>
            {due.length > 0 && (
              <>
                <div className="mt-4 flex flex-wrap items-center gap-3">
                  <Button onClick={() => void start(due)}>
                    <Play aria-hidden="true" />
                    {t('practice.review.start')}
                  </Button>
                  <span className="text-sm text-muted">
                    {t('practice.review.startHint', { count: MAX_ROUND })}
                  </span>
                </div>
                <ul className="mt-4 grid gap-2">
                  {due.map((card) => (
                    <ReviewRow
                      key={card.key}
                      card={card}
                      label={label(card)}
                      onDecide={(choice) => void decide(card, choice)}
                    />
                  ))}
                </ul>
              </>
            )}
          </Card>

          {resting.length > 0 && (
            <section aria-labelledby="review-resting" className="grid gap-3">
              <div>
                <h2 id="review-resting" className="flex items-center gap-2 text-xl font-semibold">
                  <Clock3 aria-hidden="true" className="size-5 text-muted" />
                  {t('practice.review.restingTitle')}
                </h2>
                <p className="text-sm text-muted">{t('practice.review.restingBody')}</p>
              </div>
              <Button
                variant="secondary"
                size="sm"
                className="justify-self-start"
                onClick={() => void start(resting)}
              >
                <Play aria-hidden="true" />
                {t('practice.review.practiseNow')}
              </Button>
              <ul className="grid gap-2">
                {resting.map((card) => (
                  <ReviewRow
                    key={card.key}
                    card={card}
                    label={label(card)}
                    onDecide={(choice) => void decide(card, choice)}
                  />
                ))}
              </ul>
            </section>
          )}

          {done.length > 0 && (
            <details className="rounded-lg border border-border bg-surface p-4">
              <summary className="cursor-pointer font-semibold">
                {t('practice.review.doneTitle', { count: done.length })}
              </summary>
              <p className="mt-2 text-sm text-muted">{t('practice.review.doneBody')}</p>
              <ul className="mt-3 grid gap-2">
                {done.map((card) => (
                  <ReviewRow
                    key={card.key}
                    card={card}
                    label={label(card)}
                    onDecide={(choice) => void decide(card, choice)}
                  />
                ))}
              </ul>
            </details>
          )}
          <p className="text-sm text-muted">{t('practice.review.skippedNote')}</p>
        </div>
      )}
    </>
  );
}

function ReviewRow({
  card,
  label,
  onDecide,
}: {
  card: ReviewCard;
  label: string;
  onDecide: (choice: ReviewChoice) => void;
}) {
  const today = new Date();
  const resting = card.status === 'open' && parseDay(card.due) > today;
  return (
    <li className="grid gap-2 rounded-md border border-border bg-surface p-3">
      <div className="min-w-0">
        <p className="font-medium">{label}</p>
        <p className="text-sm text-muted">
          {findSubject(card.subject)?.name}
          {card.topics.length > 0 && ` · ${card.topics.slice(0, 3).join(', ')}`}
        </p>
        <p className="mt-1 flex flex-wrap gap-2">
          {card.status === 'done' ? (
            <Badge tone="success">
              {card.doneReason === 'accepted'
                ? t('practice.review.acceptedReason')
                : t('practice.review.doneReason')}
            </Badge>
          ) : (
            <Badge tone={card.source === 'saved' ? 'info' : 'neutral'}>
              {card.source === 'saved'
                ? t('practice.review.sourceSaved')
                : t('practice.review.sourceMissed')}
            </Badge>
          )}
          {card.status === 'open' && card.lastRatio === 1 && (
            <Badge tone="success">{t('practice.review.lastRight')}</Badge>
          )}
          {resting && (
            <span className="text-sm text-muted">
              {t('practice.review.restingOn', {
                date: formatDate(parseDay(card.due), { month: 'long', day: 'numeric' }),
              })}
            </span>
          )}
        </p>
      </div>
      <div className="flex flex-wrap gap-2">
        {card.status === 'done' ? (
          <Button
            size="sm"
            variant="ghost"
            aria-label={t('practice.review.putBackLabel', { task: label })}
            onClick={() => onDecide('saved')}
          >
            <Undo2 aria-hidden="true" />
            {t('practice.review.putBack')}
          </Button>
        ) : (
          <>
            <Button
              size="sm"
              variant="secondary"
              aria-label={t('practice.review.markDoneLabel', { task: label })}
              onClick={() => onDecide('done')}
            >
              <Check aria-hidden="true" />
              {t('practice.review.markDone')}
            </Button>
            {card.source === 'missed' && (
              <Button
                size="sm"
                variant="ghost"
                aria-label={t('practice.review.markAcceptedLabel', { task: label })}
                onClick={() => onDecide('accepted')}
              >
                <CheckCheck aria-hidden="true" />
                {t('practice.review.markAccepted')}
              </Button>
            )}
          </>
        )}
      </div>
    </li>
  );
}
