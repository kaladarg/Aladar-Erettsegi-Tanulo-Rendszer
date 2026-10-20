import { CalendarClock, Play, RotateCcw } from 'lucide-react';
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
import { dueCards, upcomingCards, type ReviewCard } from '@/domain/practice/review';
import { formatDate, formatNumber, t } from '@/i18n';
import { createDrill } from '@/storage/practice';
import { BackLink } from './BackLink';
import { useReviewCards } from './useReviewCards';

const MAX_ROUND = 15;

function parseDay(day: string) {
  const [y, m, d] = day.split('-').map(Number);
  return new Date(y!, m! - 1, d!);
}

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
  const later = upcomingCards(filtered);
  const subjects = DEFAULT_SUBJECTS.filter((s) => (cards ?? []).some((c) => c.subject === s.id));

  const start = async (list: ReviewCard[]) => {
    const items = list.slice(0, MAX_ROUND).map((c) => ({ examId: c.examId, taskId: c.taskId }));
    // A round practises one subject at a time, so the help and lookup fit the tasks.
    const first = list[0]!.subject;
    const id = await createDrill({
      kind: 'review',
      subject: first,
      items: items.filter((_, i) => list[i]!.subject === first),
    });
    navigate(`/gyakorlas/kor/${id}`);
  };

  const describe = (card: ReviewCard) => {
    const entry = entries.find((e) => e.id === card.examId);
    return `${entry ? examFullTitle(entry) : card.examId} · ${t('workspace.taskHeading', { number: card.number })}`;
  };

  return (
    <>
      <BackLink />
      <PageHeader title={t('practice.review.title')} description={t('practice.review.intro')} />
      {cards === undefined ? (
        <Skeleton className="h-40" />
      ) : cards.length === 0 ? (
        <EmptyState
          icon={<RotateCcw />}
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
              <CalendarClock aria-hidden="true" className="size-5 text-primary" />
              {t('practice.review.dueTitle')}
            </CardTitle>
            <CardDescription>
              {due.length > 0
                ? t('practice.review.dueCount', { count: due.length })
                : t('practice.review.allDone')}
            </CardDescription>
            <div className="mt-4 flex flex-wrap gap-2">
              {due.length > 0 && (
                <Button onClick={() => void start(due)}>
                  <Play aria-hidden="true" />
                  {t('practice.review.start')}
                </Button>
              )}
              {due.length === 0 && filtered.length > 0 && (
                <Button variant="secondary" onClick={() => void start(later)}>
                  <Play aria-hidden="true" />
                  {t('practice.review.startAll')}
                </Button>
              )}
            </div>
            {due.length > 0 && (
              <ul className="mt-4 grid gap-2">
                {due.map((card) => (
                  <ReviewRow key={card.key} card={card} label={describe(card)} />
                ))}
              </ul>
            )}
          </Card>
          {later.length > 0 && (
            <section aria-labelledby="review-later" className="grid gap-3">
              <h2 id="review-later" className="text-xl font-semibold">
                {t('practice.review.upcomingTitle')}
              </h2>
              <ul className="grid gap-2">
                {later.map((card) => (
                  <ReviewRow key={card.key} card={card} label={describe(card)} />
                ))}
              </ul>
            </section>
          )}
          <p className="text-sm text-muted">{t('practice.review.skippedNote')}</p>
        </div>
      )}
    </>
  );
}

function ReviewRow({ card, label }: { card: ReviewCard; label: string }) {
  return (
    <li className="flex flex-wrap items-center justify-between gap-2 rounded-md border border-border bg-surface p-3">
      <span className="min-w-0">
        <span className="block font-medium">{label}</span>
        <span className="text-sm text-muted">
          {findSubject(card.subject)?.name}
          {card.topics.length > 0 && ` · ${card.topics.slice(0, 3).join(', ')}`}
        </span>
      </span>
      <span className="flex flex-wrap items-center gap-2 text-sm">
        <Badge tone={card.box === 0 ? 'warning' : 'info'}>
          {t('practice.review.stage', { box: formatNumber(card.box + 1) })}
        </Badge>
        <span className="text-muted">
          {t('practice.review.dueOn', {
            date: formatDate(parseDay(card.due), { month: 'long', day: 'numeric' }),
          })}
        </span>
      </span>
    </li>
  );
}
