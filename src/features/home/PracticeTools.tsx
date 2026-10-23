import { useLiveQuery } from 'dexie-react-hooks';
import {
  CalendarDays,
  Dices,
  GalleryVerticalEnd,
  Layers,
  Mic,
  NotebookPen,
  RotateCcw,
  Sparkles,
  X,
} from 'lucide-react';
import type { ReactNode } from 'react';
import { Link } from 'react-router';
import { Button } from '@/design/ui/Button';
import { Card, CardTitle } from '@/design/ui/Card';
import { TINTS, type Tint } from '@/design/ui/tints';
import { cn } from '@/lib/cn';
import { cardStates } from '@/domain/cards/schedule';
import { dueCards } from '@/domain/practice/review';
import { CURRENT_FEATURES } from '@/domain/settings';
import { t, type MessageKey } from '@/i18n';
import { useSettings } from '@/state/settingsStore';
import { dayKey, db } from '@/storage/db';
import { fitsSubjects } from '../practice/subjectTools';
import { useReviewCards } from '../practice/useReviewCards';

/** One-time note for students who used the app before these features existed. */
export function WhatsNew() {
  const onboardingDone = useSettings((s) => s.settings.onboardingDone);
  const seen = useSettings((s) => s.settings.featuresSeen);
  const update = useSettings((s) => s.update);
  if (!onboardingDone || seen >= CURRENT_FEATURES) return null;
  const dismiss = () => void update({ featuresSeen: CURRENT_FEATURES });
  const items: MessageKey[] = [
    'home.newItems.daily',
    'home.newItems.worked',
    'home.newItems.oralCheck',
  ];
  return (
    <Card aria-labelledby="home-new" className="mb-10 border-primary/40">
      <div className="flex items-start justify-between gap-3">
        <CardTitle id="home-new" className="flex items-center gap-2">
          <Sparkles aria-hidden="true" className="size-5 text-primary" />
          {t('home.newTitle')}
        </CardTitle>
        <Button variant="ghost" size="icon" aria-label={t('home.newDismiss')} onClick={dismiss}>
          <X aria-hidden="true" />
        </Button>
      </div>
      <p className="mt-2">{t('home.newBody')}</p>
      <ul className="mt-2 list-disc space-y-1 pl-5">
        {items.map((key) => (
          <li key={key}>{t(key)}</li>
        ))}
      </ul>
      <div className="mt-4 flex flex-wrap gap-2">
        <Button asChild>
          <Link to="/gyakorlas/mai-adag" onClick={dismiss}>
            {t('home.newOpen')}
          </Link>
        </Button>
        <Button variant="secondary" onClick={dismiss}>
          {t('home.newDismiss')}
        </Button>
      </div>
    </Card>
  );
}

/** Shortcuts to the practice tools, with what is due today. */
export function PracticeTools() {
  const reviews = useReviewCards();
  const chosen = useSettings((s) => s.settings.subjects);
  // Counted from the progress alone, so the home page does not load the card texts.
  const dueCardsCount =
    useLiveQuery(async () => {
      const today = dayKey(Date.now());
      const states = cardStates(await db.cardEvents.toArray());
      return [...states.values()].filter((state) => state.due <= today).length;
    }, []) ?? 0;
  const dueReviews = reviews ? dueCards(reviews).length : 0;
  return (
    <section aria-labelledby="home-tools" className="mt-10">
      <h2 id="home-tools" className="mb-4 text-xl font-semibold">
        {t('home.toolsTitle')}
      </h2>
      <ul className="grid stagger grid-cols-2 gap-3 sm:grid-cols-3">
        <Tool
          to="/gyakorlas/temakorok"
          tint="blue"
          icon={<Layers />}
          label={t('practice.hub.topicsTitle')}
        />
        <Tool
          to="/gyakorlas/hibaim"
          tint="rose"
          icon={<RotateCcw />}
          label={t('practice.hub.reviewTitle')}
          due={dueReviews}
        />
        <Tool
          to="/gyakorlas/kartyak"
          tint="violet"
          icon={<GalleryVerticalEnd />}
          label={t('practice.hub.cardsTitle')}
          due={dueCardsCount}
        />
        {fitsSubjects('probability', chosen) && (
          <Tool
            to="/gyakorlas/valoszinuseg"
            tint="cyan"
            icon={<Dices />}
            label={t('home.toolProbability')}
          />
        )}
        {fitsSubjects('essay', chosen) && (
          <Tool
            to="/gyakorlas/esszevazlat"
            tint="rose"
            icon={<NotebookPen />}
            label={t('home.toolEssay')}
          />
        )}
        {fitsSubjects('oral', chosen) && (
          <Tool
            to="/gyakorlas/szobeli"
            tint="orange"
            icon={<Mic />}
            label={t('practice.hub.oralTitle')}
          />
        )}
        <Tool
          to="/gyakorlas/terv"
          tint="green"
          icon={<CalendarDays />}
          label={t('practice.hub.planTitle')}
        />
      </ul>
    </section>
  );
}

function Tool({
  to,
  icon,
  label,
  tint,
  due = 0,
}: {
  to: string;
  icon: ReactNode;
  label: string;
  tint: Tint;
  due?: number;
}) {
  return (
    <li>
      <Link
        to={to}
        data-ripple=""
        className="group flex h-full min-h-16 lift flex-col items-start gap-2 rounded-lg border border-border bg-surface p-3 shadow-1 hover:border-border-strong min-[420px]:flex-row min-[420px]:items-center min-[420px]:gap-3"
      >
        <span
          aria-hidden="true"
          className={cn(
            'flex size-10 shrink-0 items-center justify-center rounded-lg transition-transform duration-(--motion-base) ease-(--ease-spring) group-hover:scale-110 group-hover:-rotate-6 [&_svg]:size-5',
            TINTS[tint],
          )}
        >
          {icon}
        </span>
        <span className="min-w-0">
          <span className="block font-medium wrap-break-word hyphens-auto">{label}</span>
          {due > 0 && (
            <span className="mt-0.5 inline-block animate-pop-in rounded-full bg-primary px-2 text-xs font-semibold text-primary-fg">
              {t('home.toolsDue', { count: due })}
            </span>
          )}
        </span>
      </Link>
    </li>
  );
}
