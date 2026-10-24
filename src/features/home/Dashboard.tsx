import { ArrowRight, ClipboardCheck, RotateCcw, Sparkles, Target, Zap } from 'lucide-react';
import type { ReactNode } from 'react';
import { Link } from 'react-router';
import { findSubject } from '@/content/catalog';
import { examDisplayTitle, examFullTitle } from '@/content/labels';
import { useManifest } from '@/content/useContent';
import { Button } from '@/design/ui/Button';
import { Skeleton } from '@/design/ui/Skeleton';
import { dueCards } from '@/domain/practice/review';
import { recommendations } from '@/domain/stats/stats';
import { formatNumber, t } from '@/i18n';
import { useSettings } from '@/state/settingsStore';
import { useReviewCards } from '../practice/useReviewCards';
import { useBackfillSummaries, type StatsData } from '../stats/useStatsData';

interface Step {
  icon: ReactNode;
  title: string;
  body: string;
  action: string;
  to: string;
}

/**
 * One clear next step instead of a list: marking that waits first, then the
 * weakest topic, then the Ismétlés list, then a paper not tried yet, and the
 * Mai adag when there is nothing else.
 */
export function NextStepCard({ data }: { data: StatsData }) {
  const { state } = useManifest();
  const manifest = state.status === 'ready' ? state.data : null;
  useBackfillSummaries(data?.attempts, manifest);
  const subjects = useSettings((s) => s.settings.subjects);
  const review = useReviewCards();
  const due = review
    ? dueCards(review).filter((c) => !subjects.length || subjects.includes(c.subject)).length
    : 0;

  if (!manifest) return <Skeleton className="h-36" />;
  const exams = manifest.manifest.exams;
  const recs = recommendations(data.attempts, exams, subjects, 10);
  const marking = recs.find((r) => r.kind === 'review');
  const topic = recs.find((r) => r.kind === 'topic');
  const fresh = recs.find((r) => r.kind === 'newExam');

  let step: Step;
  if (marking?.kind === 'review') {
    const entry = exams.find((e) => e.id === marking.examId);
    step = {
      icon: <ClipboardCheck />,
      title: t('dashboard.recommendReview', {
        exam: entry ? examFullTitle(entry) : marking.examId,
      }),
      body: t('dashboard.recommendReviewBody', { points: marking.pendingPoints }),
      action: t('home.next.markAction'),
      to: `/feladatsorok/${marking.examId}/eredmeny/${marking.attemptId}`,
    };
  } else if (topic?.kind === 'topic') {
    step = {
      icon: <Target />,
      title: t('dashboard.recommendTopic', { topic: topic.stat.topic }),
      body: t('home.next.topicBody', {
        subject: findSubject(topic.stat.subject)?.name ?? topic.stat.subject,
        percent: formatNumber(Math.round(topic.stat.ratio * 100)),
      }),
      action: t('home.next.topicAction'),
      to: `/gyakorlas/temakorok?targy=${topic.stat.subject}&tema=${encodeURIComponent(topic.stat.topic)}`,
    };
  } else if (due > 0) {
    step = {
      icon: <RotateCcw />,
      title: t('home.next.reviewTitle', { count: due }),
      body: t('home.next.reviewBody'),
      action: t('home.next.reviewAction'),
      to: '/gyakorlas/ismetles',
    };
  } else if (fresh?.kind === 'newExam') {
    step = {
      icon: <Sparkles />,
      title: t('dashboard.recommendNewExam', { exam: examDisplayTitle(fresh.entry) }),
      body: t('home.next.examBody', {
        subject: findSubject(fresh.entry.subject)?.name ?? fresh.entry.subject,
      }),
      action: t('home.next.examAction'),
      to: `/feladatsorok/${fresh.entry.id}`,
    };
  } else {
    step = {
      icon: <Zap />,
      title: t('home.next.dailyTitle'),
      body: t('home.next.dailyBody'),
      action: t('home.next.dailyAction'),
      to: '/gyakorlas/mai-adag',
    };
  }

  return (
    <section
      aria-labelledby="next-step"
      className="animate-rise-in rounded-xl border border-border bg-surface p-4 shadow-1 sm:p-5"
    >
      <h2 id="next-step" className="text-sm font-semibold text-muted">
        {t('home.next.title')}
      </h2>
      <div className="mt-2 flex flex-wrap items-center gap-3">
        <span
          aria-hidden="true"
          className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary-soft-fg [&_svg]:size-5"
        >
          {step.icon}
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-lg font-semibold">{step.title}</p>
          <p className="text-sm text-muted">{step.body}</p>
        </div>
        <Button asChild variant="secondary">
          <Link to={step.to}>
            {step.action}
            <ArrowRight aria-hidden="true" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
