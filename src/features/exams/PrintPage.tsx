import { ArrowLeft, FileText, Headphones, Printer } from 'lucide-react';
import { useState, type ReactNode } from 'react';
import { Link, useParams } from 'react-router';
import { usePageTitle } from '@/app/usePageTitle';
import { examDisplayTitle, partMeta } from '@/content/labels';
import { examFileUrl } from '@/content/loader';
import { RichText } from '@/content/RichText';
import type { Exam, Field, Part, SourceMaterial, Task } from '@/content/schema.types';
import { useExam } from '@/content/useContent';
import { Button } from '@/design/ui/Button';
import { Skeleton } from '@/design/ui/Skeleton';
import { expectedAnswer } from '@/domain/scoring/rules';
import { PdfCrop } from '@/features/workspace/pdf/PdfCrop';
import type { PdfSource } from '@/features/workspace/pdf/pdfjs';
import { usePdfSource } from '@/features/workspace/pdf/usePdfSource';
import { t } from '@/i18n';
import { ContentErrorState } from './ContentErrorState';

/**
 * The paper as a clean sheet to print or save as PDF, with lines and boxes
 * for the answers and, if asked, the answer key at the end.
 */
export function PrintPage() {
  const { examId = '' } = useParams();
  const { state, retry, entry, manifest } = useExam(examId);
  const exam = state.status === 'ready' ? (state.data as Exam) : null;
  const subject = manifest?.manifest.subjects.find((s) => s.id === exam?.subject);
  const title = exam ? `${subject?.name ?? ''} – ${examDisplayTitle(exam)}` : t('print.title');
  usePageTitle(`${t('print.title')}: ${title}`);
  const [withKey, setWithKey] = useState(false);
  const packPdf =
    exam && entry?.hasPdf && manifest && exam.source.examPdf.file
      ? examFileUrl(manifest.baseUrl, entry, exam.source.examPdf.file)
      : null;
  const pdf = usePdfSource(exam, packPdf, !!entry?.hasPdf);

  return (
    <div className="min-h-dvh bg-surface-muted print:bg-white">
      <header className="sticky top-0 z-10 border-b border-border bg-surface/95 px-4 py-3 backdrop-blur print:hidden">
        <div className="mx-auto flex max-w-[52rem] flex-wrap items-center gap-x-4 gap-y-3">
          <Link
            to={`/feladatsorok/${examId}`}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted hover:text-text"
          >
            <ArrowLeft aria-hidden="true" className="size-4" />
            {t('print.back')}
          </Link>
          <div className="ml-auto flex flex-wrap items-center gap-3">
            <label className="flex min-h-11 items-center gap-2 text-sm font-medium">
              <input
                type="checkbox"
                checked={withKey}
                onChange={(event) => setWithKey(event.target.checked)}
                className="size-5 accent-[var(--c-primary)]"
              />
              {t('print.withKey')}
            </label>
            {packPdf && (
              <a
                href={packPdf}
                target="_blank"
                rel="noopener noreferrer"
                title={t('print.originalHint')}
                className="inline-flex min-h-11 items-center gap-1.5 rounded-md px-3 text-sm font-medium hover:bg-surface-muted"
              >
                <FileText aria-hidden="true" className="size-4" />
                {t('print.original')}
                <span className="sr-only"> {t('common.newTab')}</span>
              </a>
            )}
            <Button onClick={() => window.print()} disabled={!exam}>
              <Printer aria-hidden="true" />
              {t('print.print')}
            </Button>
          </div>
        </div>
      </header>

      <main className="px-4 py-6 print:p-0">
        {state.status === 'error' ? (
          <ContentErrorState error={state.error} title={t('exam.loadErrorTitle')} onRetry={retry} />
        ) : !exam ? (
          <div className="mx-auto grid max-w-[52rem] gap-4">
            <Skeleton className="h-10 w-2/3" />
            <Skeleton className="h-96 w-full" />
          </div>
        ) : (
          <>
            <p className="mx-auto mb-4 max-w-[52rem] text-sm text-muted print:hidden">
              {t('print.intro')}
            </p>
            <Sheet
              exam={exam}
              title={title}
              pdf={pdf.status === 'ready' ? pdf.source : null}
              withKey={withKey}
            />
          </>
        )}
      </main>
    </div>
  );
}

function Sheet({
  exam,
  title,
  pdf,
  withKey,
}: {
  exam: Exam;
  title: string;
  pdf: PdfSource | null;
  withKey: boolean;
}) {
  const sources = new Map((exam.sources ?? []).map((s) => [s.id, s]));
  const minutes = exam.parts.reduce((sum, p) => sum + (p.timeLimitMinutes ?? 0), 0);
  return (
    <article
      lang={exam.language}
      className="print-sheet mx-auto max-w-[52rem] rounded-lg bg-white p-6 text-[#111827] shadow-2 sm:p-10 print:max-w-none print:rounded-none print:p-0 print:shadow-none"
    >
      <header className="border-b-2 border-[#111827] pb-4">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="mt-1 text-sm text-[#4b5563]">
          {t('print.total', { points: exam.maxPoints, minutes })}
        </p>
        <dl className="mt-4 grid grid-cols-[2fr_1fr_1fr] gap-4 text-sm">
          {[t('print.name'), t('print.class'), t('print.date')].map((label) => (
            <div key={label} className="flex items-end gap-2">
              <dt className="font-medium">{label}:</dt>
              <dd className="flex-1 border-b border-dotted border-[#6b7280]">&nbsp;</dd>
            </div>
          ))}
        </dl>
      </header>

      {exam.parts.map((part, index) => (
        <PrintPart key={part.id} part={part} first={index === 0} sources={sources} pdf={pdf} />
      ))}

      {withKey && <AnswerKey exam={exam} />}

      <p className="mt-10 border-t border-[#d1d5db] pt-3 text-xs text-[#6b7280]">
        {t('print.footer', { title })}
      </p>
    </article>
  );
}

function PrintPart({
  part,
  first,
  sources,
  pdf,
}: {
  part: Part;
  first: boolean;
  sources: Map<string, SourceMaterial>;
  pdf: PdfSource | null;
}) {
  const shown = new Set<string>();
  return (
    <section className={first ? 'mt-6' : 'mt-10 break-before-page print:mt-0'}>
      <header className="mb-4">
        <h2 className="text-xl font-bold">{part.title}</h2>
        <p className="text-sm text-[#4b5563]">{partMeta(part)}</p>
        {part.instructions && <p className="mt-2 text-sm italic">{part.instructions}</p>}
        {part.audio && (
          <p className="mt-2 flex items-center gap-2 text-sm font-medium">
            <Headphones aria-hidden="true" className="size-4" />
            {t('print.audio')}
          </p>
        )}
      </header>
      <div className="space-y-6">
        {part.tasks.map((task) => {
          const newSources = (task.sourceRefs ?? [])
            .filter((id) => !shown.has(id))
            .map((id) => sources.get(id))
            .filter((s): s is SourceMaterial => !!s);
          newSources.forEach((s) => shown.add(s.id));
          return (
            <div key={task.id} className="space-y-4">
              {newSources.map((source) => (
                <PrintSource key={source.id} source={source} pdf={pdf} />
              ))}
              <PrintTask task={task} />
            </div>
          );
        })}
      </div>
    </section>
  );
}

function PrintSource({ source, pdf }: { source: SourceMaterial; pdf: PdfSource | null }) {
  const figure = pdf && source.kind !== 'text' && source.pdfRects?.length ? source.pdfRects : null;
  return (
    <aside className="break-inside-avoid rounded-md border border-[#9ca3af] p-4">
      {source.title && <h3 className="mb-2 font-semibold">{source.title}</h3>}
      {figure ? (
        <div className="grid justify-items-center gap-3 [&_canvas]:max-h-[22cm] [&_canvas]:w-auto [&_canvas]:max-w-full">
          {figure.map((rect, index) => (
            <PdfCrop
              key={index}
              source={pdf!}
              rect={rect}
              label={source.text ?? source.title ?? ''}
            />
          ))}
        </div>
      ) : (
        source.text && <RichText text={source.text} className="text-sm leading-relaxed" />
      )}
      {source.credit && <p className="mt-2 text-xs text-[#6b7280]">{source.credit}</p>}
    </aside>
  );
}

function PrintTask({ task }: { task: Task }) {
  return (
    <section className="space-y-3">
      <div className="break-inside-avoid space-y-3">
        <header className="flex break-after-avoid items-baseline justify-between gap-3 border-b border-[#d1d5db] pb-1">
          <h3 className="text-lg font-bold">{t('print.taskHeading', { number: task.number })}</h3>
          <span className="shrink-0 text-sm font-medium">
            {t('print.points', { points: task.maxPoints })}
          </span>
        </header>
        <RichText text={task.text} />
      </div>
      <div className="space-y-3">
        {task.fields.map((field) => (
          <PrintField key={field.id} field={field} />
        ))}
      </div>
    </section>
  );
}

const line = 'h-8 border-b border-dotted border-[#6b7280]';

function Lines({ count }: { count: number }) {
  return (
    <div aria-hidden="true">
      {Array.from({ length: count }, (_, i) => (
        <div key={i} className={line} />
      ))}
    </div>
  );
}

function PrintField({ field }: { field: Field }) {
  const label = field.label ? <span className="font-medium">{field.label}</span> : null;
  let body: ReactNode;
  switch (field.kind) {
    case 'text':
    case 'number':
      return (
        <div className="flex break-inside-avoid items-end gap-2">
          {label}
          <span className={`${line} min-w-24 flex-1`} />
          {field.unit && <span>{field.unit}</span>}
        </div>
      );
    case 'choice':
    case 'multi':
      body = (
        <ul className="mt-1 grid gap-1">
          {field.options?.map((option) => (
            <li key={option.value} className="flex items-start gap-2">
              <span
                aria-hidden="true"
                className={`mt-1 size-4 shrink-0 border border-[#111827] ${field.kind === 'choice' ? 'rounded-full' : 'rounded-sm'}`}
              />
              <span>
                {option.label === option.value ? option.label : `${option.value}) ${option.label}`}
              </span>
            </li>
          ))}
        </ul>
      );
      break;
    case 'textarea':
      body = <Lines count={4} />;
      break;
    case 'work':
      body = (
        <div
          aria-hidden="true"
          className="mt-1 h-56 rounded-sm border border-[#9ca3af] bg-[linear-gradient(#e5e7eb_1px,transparent_1px),linear-gradient(90deg,#e5e7eb_1px,transparent_1px)] bg-size-[0.5cm_0.5cm] print:h-[9cm]"
        />
      );
      return (
        <div className="break-inside-avoid">
          <span className="font-medium">{field.label ?? t('print.work')}</span>
          {body}
        </div>
      );
    case 'essay':
      return (
        <div>
          <span className="font-medium">{field.label ?? t('print.essay')}</span>
          <Lines count={30} />
        </div>
      );
  }
  return (
    <div className="break-inside-avoid">
      {label}
      {body}
    </div>
  );
}

function AnswerKey({ exam }: { exam: Exam }) {
  return (
    <section className="mt-10 break-before-page print:mt-0">
      <h2 className="border-b-2 border-[#111827] pb-2 text-xl font-bold">{t('print.keyTitle')}</h2>
      <p className="mt-2 text-sm text-[#4b5563]">{t('print.keyIntro')}</p>
      {exam.parts.map((part) => (
        <div key={part.id} className="mt-6">
          <h3 className="font-bold">{part.title}</h3>
          <ol className="mt-2 grid gap-4">
            {part.tasks.map((task) => (
              <KeyTask key={task.id} task={task} />
            ))}
          </ol>
        </div>
      ))}
    </section>
  );
}

function KeyTask({ task }: { task: Task }) {
  const fields = new Map(task.fields.map((f) => [f.id, f]));
  const rules = task.scoring?.rules ?? [];
  const steps = task.scoring?.steps ?? [];
  const criteria = task.scoring?.criteria ?? [];
  return (
    <li className="break-inside-avoid border-l-4 border-[#d1d5db] pl-3 text-sm">
      <p className="font-semibold">
        {t('print.taskHeading', { number: task.number })} ·{' '}
        {t('print.points', { points: task.maxPoints })}
      </p>
      {rules.length > 0 && (
        <ul className="mt-1 grid gap-0.5">
          {rules.map((rule) => {
            const label = fields.get(rule.fieldIds[0]!)?.label;
            const answer = expectedAnswer(rule, fields);
            const showLabel = label && rule.answer.kind !== 'matching';
            return (
              <li key={rule.id}>
                {showLabel ? <span className="text-[#4b5563]">{label} </span> : null}
                <strong>{answer}</strong>{' '}
                <span className="text-[#6b7280]">
                  ({t('print.points', { points: rule.points })})
                </span>
              </li>
            );
          })}
        </ul>
      )}
      {steps.length > 0 && (
        <KeyList title={t('print.keySteps')}>
          {steps.map((step) => (
            <li key={step.id}>
              <RichText text={step.description} className="inline" />{' '}
              <span className="text-[#6b7280]">({t('print.points', { points: step.points })})</span>
            </li>
          ))}
        </KeyList>
      )}
      {criteria.length > 0 && (
        <KeyList title={t('print.keyCriteria')}>
          {criteria.map((criterion) => (
            <li key={criterion.id}>
              {criterion.label}{' '}
              <span className="text-[#6b7280]">
                ({t('print.points', { points: criterion.maxPoints })})
              </span>
            </li>
          ))}
        </KeyList>
      )}
      {task.explanation && (
        <div className="mt-1 text-[#374151]">
          <span className="font-medium">{t('print.keyExplanation')}: </span>
          <RichText text={task.explanation} className="inline" />
        </div>
      )}
    </li>
  );
}

function KeyList({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="mt-1">
      <p className="font-medium">{title}:</p>
      <ul className="ml-4 list-disc">{children}</ul>
    </div>
  );
}
