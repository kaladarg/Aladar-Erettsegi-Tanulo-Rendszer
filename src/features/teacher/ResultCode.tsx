import { Copy, Send } from 'lucide-react';
import { useId, useState } from 'react';
import type { Exam } from '@/content/schema.types';
import { Button } from '@/design/ui/Button';
import { Card, CardDescription, CardTitle } from '@/design/ui/Card';
import { assignmentId, encodeResult, MAX_NAME } from '@/domain/assignment/link';
import { findTask } from '@/domain/practice/topics';
import { t } from '@/i18n';
import { copyText } from '@/lib/clipboard';
import { toast } from '@/state/toastStore';
import type { DrillSessionRow } from '@/storage/db';

const NAME_KEY = 'egy-student-name';

function savedName(): string {
  try {
    return localStorage.getItem(NAME_KEY) ?? '';
  } catch {
    return '';
  }
}

/** The result code a student sends back to their teacher after an assignment. */
export function ResultCode({
  session,
  exams,
}: {
  session: DrillSessionRow;
  exams: Map<string, Exam>;
}) {
  const [name, setName] = useState(savedName);
  const ids = { name: useId(), code: useId() };
  const code = encodeResult({
    assignment: assignmentId(session.assignment ?? ''),
    name,
    points: session.items.map((_, i) => session.checked[i]?.points ?? null),
    maxPoints: session.items.map(
      (ref, i) => session.checked[i]?.maxPoints ?? findTask(exams, ref)?.task.maxPoints ?? 0,
    ),
    pending: session.items.map((_, i) => session.checked[i]?.pendingPoints ?? 0),
    finishedAt: session.finishedAt ?? session.updatedAt,
  });
  const changeName = (value: string) => {
    setName(value);
    try {
      localStorage.setItem(NAME_KEY, value);
    } catch {
      // Private mode: the name is simply not remembered.
    }
  };
  const copy = async () =>
    toast(
      (await copyText(code))
        ? { message: t('teacher.copied'), tone: 'success' }
        : { message: t('teacher.copyFailed'), tone: 'danger' },
    );
  const canShare = typeof navigator !== 'undefined' && 'share' in navigator;
  return (
    <Card aria-labelledby="result-code">
      <CardTitle id="result-code">{t('teacher.resultTitle')}</CardTitle>
      <CardDescription>{t('teacher.resultBody')}</CardDescription>
      <div className="mt-4 grid gap-3">
        <div className="grid gap-1">
          <label htmlFor={ids.name} className="text-sm font-medium">
            {t('teacher.nameLabel')}
          </label>
          <input
            id={ids.name}
            value={name}
            maxLength={MAX_NAME}
            autoComplete="name"
            onChange={(event) => changeName(event.target.value)}
            className="min-h-11 rounded-md border border-border-strong bg-surface px-3"
          />
        </div>
        <div className="grid gap-1">
          <label htmlFor={ids.code} className="text-sm font-medium">
            {t('teacher.codeLabel')}
          </label>
          <textarea
            id={ids.code}
            readOnly
            rows={3}
            value={code}
            onFocus={(event) => event.target.select()}
            className="rounded-md border border-border-strong bg-surface-muted p-3 font-mono text-sm break-all"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          <Button onClick={() => void copy()}>
            <Copy aria-hidden="true" />
            {t('teacher.copyCode')}
          </Button>
          {canShare && (
            <Button
              variant="secondary"
              onClick={() => void navigator.share({ text: code }).catch(() => undefined)}
            >
              <Send aria-hidden="true" />
              {t('teacher.share')}
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
}
