import { useLiveQuery } from 'dexie-react-hooks';
import { CircleAlert, ClipboardList, MessageSquareQuote, Play } from 'lucide-react';
import { useMemo } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router';
import { usePageTitle } from '@/app/usePageTitle';
import { findSubject } from '@/content/catalog';
import { examDisplayTitle } from '@/content/labels';
import { useExams } from '@/content/useExams';
import { Button } from '@/design/ui/Button';
import { Card, CardTitle } from '@/design/ui/Card';
import { EmptyState } from '@/design/ui/EmptyState';
import { PageHeader } from '@/design/ui/PageHeader';
import { Skeleton } from '@/design/ui/Skeleton';
import { decodeAssignment } from '@/domain/assignment/link';
import { findTask } from '@/domain/practice/topics';
import { t } from '@/i18n';
import { db } from '@/storage/db';
import { createDrill } from '@/storage/practice';

/** A student opens a teacher's link: what the assignment contains, then start. */
export function AssignmentPage() {
  const [params] = useSearchParams();
  const code = params.get('d') ?? '';
  const assignment = useMemo(() => decodeAssignment(code), [code]);
  usePageTitle(assignment?.title ?? t('teacher.landingTitle'));
  const subjects = useMemo(() => (assignment ? [assignment.subject] : []), [assignment]);
  const { exams, loading } = useExams(subjects);
  const navigate = useNavigate();
  // An unfinished round of the same assignment is continued instead of restarted.
  const open = useLiveQuery(
    async () =>
      (await db.drillSessions.toArray()).find((s) => s.assignment === code && !s.finishedAt) ??
      null,
    [code],
  );

  if (!assignment) {
    return (
      <EmptyState
        tone="danger"
        icon={<CircleAlert />}
        title={t('teacher.invalidTitle')}
        description={t('teacher.invalidBody')}
        action={
          <Button asChild>
            <Link to="/">{t('errors.goHome')}</Link>
          </Button>
        }
      />
    );
  }

  const rows = assignment.items.map((ref) => ({ ref, found: findTask(exams, ref) }));
  const available = rows.filter((row) => row.found).length;
  const start = async () => {
    if (open) return navigate(`/gyakorlas/kor/${open.id}`);
    const id = await createDrill({
      kind: 'assignment',
      subject: assignment.subject,
      title: assignment.title,
      assignment: code,
      items: assignment.items,
    });
    navigate(`/gyakorlas/kor/${id}`);
  };

  return (
    <>
      <PageHeader
        title={assignment.title}
        description={`${t('teacher.landingTitle')} · ${findSubject(assignment.subject)?.name ?? assignment.subject}`}
      />
      <div className="grid gap-6">
        {assignment.note && (
          <Card aria-labelledby="assignment-note">
            <CardTitle id="assignment-note" className="flex items-center gap-2">
              <MessageSquareQuote aria-hidden="true" className="size-5 text-primary" />
              {t('teacher.fromTeacher')}
            </CardTitle>
            <p className="mt-2 whitespace-pre-line">{assignment.note}</p>
          </Card>
        )}
        <Card aria-labelledby="assignment-tasks">
          <CardTitle id="assignment-tasks" className="flex items-center gap-2">
            <ClipboardList aria-hidden="true" className="size-5 text-primary" />
            {t('teacher.tasks')}
          </CardTitle>
          {loading ? (
            <Skeleton className="mt-3 h-24" />
          ) : (
            <ol className="mt-3 grid gap-2">
              {rows.map(({ ref, found }, index) => (
                <li
                  key={`${ref.examId}-${ref.taskId}-${index}`}
                  className="rounded-md border border-border p-3"
                >
                  {found ? (
                    t('teacher.taskItem', {
                      exam: examDisplayTitle(found.exam),
                      number: found.task.number,
                    })
                  ) : (
                    <span className="text-muted">{t('teacher.missing')}</span>
                  )}
                </li>
              ))}
            </ol>
          )}
          {!loading && available === 0 ? (
            <p role="alert" className="mt-4 text-sm font-medium text-danger">
              {t('teacher.allMissing')}
            </p>
          ) : (
            <Button className="mt-4" disabled={loading} onClick={() => void start()}>
              <Play aria-hidden="true" />
              {open ? t('teacher.continue') : t('teacher.start')}
            </Button>
          )}
        </Card>
      </div>
    </>
  );
}
