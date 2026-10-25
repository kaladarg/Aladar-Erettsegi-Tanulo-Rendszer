import { FileText, GalleryVerticalEnd, Play } from 'lucide-react';
import { useMemo } from 'react';
import { Link, useNavigate } from 'react-router';
import { deckPage } from '@/features/practice/cards/links';
import { matchesTopic, type GuidePage, type LevelView } from '@/content/guide';
import { examDisplayTitle } from '@/content/labels';
import { fitsLevel, useExams } from '@/content/useExams';
import { Button } from '@/design/ui/Button';
import { Skeleton } from '@/design/ui/Skeleton';
import { isDrillable } from '@/domain/practice/review';
import type { TaskRef } from '@/domain/practice/topics';
import { formatNumber, t } from '@/i18n';
import { createDrill, randomRound } from '@/storage/practice';

const ROUND_SIZE = 10;
const SHOWN = 6;

/** Past-paper tasks on the page's topic, a practice round from them, and the matching cards. */
export function ExamTasks({ page, view }: { page: GuidePage; view: LevelView }) {
  const subjects = useMemo(() => [page.subject], [page.subject]);
  const { exams, loading } = useExams(subjects);
  const navigate = useNavigate();

  const tasks = useMemo(() => {
    const found: { ref: TaskRef; label: string; drillable: boolean; year: number }[] = [];
    for (const exam of exams.values()) {
      if (!fitsLevel(exam.level, view)) continue;
      for (const part of exam.parts)
        for (const task of part.tasks)
          if (task.topics?.some((topic) => matchesTopic(page, topic)))
            found.push({
              ref: { examId: exam.id, taskId: task.id },
              label: `${examDisplayTitle(exam)} · ${task.number}`,
              drillable: isDrillable(task.type),
              year: exam.year,
            });
    }
    return found.sort((a, b) => b.year - a.year);
  }, [exams, page, view]);
  const drillable = tasks.filter((task) => task.drillable).map((task) => task.ref);

  const start = async () => {
    const id = await createDrill({
      kind: 'topic',
      subject: page.subject,
      topic: page.title,
      items: randomRound(drillable, ROUND_SIZE),
    });
    navigate(`/gyakorlas/kor/${id}`);
  };

  return (
    <div className="grid gap-4">
      {loading ? (
        <Skeleton className="h-24" />
      ) : tasks.length === 0 ? (
        <p className="text-muted">{t('guide.tasks.none')}</p>
      ) : (
        <div className="rounded-lg border border-border bg-surface p-4 shadow-1">
          <p className="font-semibold">
            {t('guide.tasks.found', { count: formatNumber(tasks.length) })}
          </p>
          <ul className="mt-2 grid gap-1 text-sm">
            {tasks.slice(0, SHOWN).map((task) => (
              <li key={`${task.ref.examId}/${task.ref.taskId}`}>
                <Link
                  to={`/feladatsorok/${task.ref.examId}`}
                  className="inline-flex items-center gap-1.5 text-primary underline underline-offset-4"
                >
                  <FileText aria-hidden="true" className="size-4 shrink-0" />
                  {task.label}
                </Link>
              </li>
            ))}
          </ul>
          {tasks.length > SHOWN && (
            <p className="mt-1 text-sm text-muted">
              {t('guide.tasks.more', { count: formatNumber(tasks.length - SHOWN) })}
            </p>
          )}
          {drillable.length > 0 && (
            <Button className="mt-3" onClick={() => void start()}>
              <Play aria-hidden="true" />
              {t('guide.tasks.practice', {
                count: formatNumber(Math.min(ROUND_SIZE, drillable.length)),
              })}
            </Button>
          )}
        </div>
      )}
      {page.cards && (
        <Button asChild variant="secondary" className="justify-self-start">
          <Link to={deckPage(page.cards)}>
            <GalleryVerticalEnd aria-hidden="true" />
            {t('guide.tasks.cards')}
          </Link>
        </Button>
      )}
    </div>
  );
}
