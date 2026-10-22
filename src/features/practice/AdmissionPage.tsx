import { useLiveQuery } from 'dexie-react-hooks';
import { Check, ExternalLink, GraduationCap, Sparkles } from 'lucide-react';
import { useId, useMemo, useState, type ReactNode } from 'react';
import { usePageTitle } from '@/app/usePageTitle';
import { DEFAULT_SUBJECTS } from '@/content/catalog';
import { Button } from '@/design/ui/Button';
import { Card, CardDescription, CardTitle } from '@/design/ui/Card';
import { PageHeader } from '@/design/ui/PageHeader';
import { SegmentedControl } from '@/design/ui/SegmentedControl';
import {
  ADMISSION_SLOTS,
  admissionPoints,
  DEFAULT_ADMISSION,
  examPoints,
  practiceEstimate,
  RULES_CHECKED,
  RULES_YEAR,
  type AdmissionInputs,
  type AdmissionSlot,
  type ExamLevel,
} from '@/domain/admission';
import { formatNumber, t } from '@/i18n';
import { cn } from '@/lib/cn';
import { useSettings } from '@/state/settingsStore';
import { db } from '@/storage/db';
import { BackLink } from './BackLink';

const FELVI_URL = 'https://www.felvi.hu/felveteli/pontszamitas';
const LANGUAGES = ['angol', 'nemet'];
const FIXED: Record<Exclude<AdmissionSlot, 'nyelv' | 'valasztott'>, string> = {
  magyar: 'magyar',
  matematika: 'matematika',
  tortenelem: 'tortenelem',
};
const input = 'min-h-11 rounded-md border border-border-strong bg-surface px-3';

const subjectName = (id: string) =>
  DEFAULT_SUBJECTS.find((s) => s.id === id)?.name ?? t('admission.other');

/** The subject id behind a slot, to look up practice results. */
function slotSubject(inputs: AdmissionInputs, slot: AdmissionSlot): string {
  if (slot === 'nyelv') return inputs.languageSubject;
  if (slot === 'valasztott') return inputs.electiveSubject;
  return FIXED[slot];
}

function slotName(inputs: AdmissionInputs, slot: AdmissionSlot): string {
  if (slot === 'nyelv')
    return inputs.languageSubject ? subjectName(inputs.languageSubject) : t('admission.language');
  if (slot === 'valasztott')
    return inputs.electiveSubject ? subjectName(inputs.electiveSubject) : t('admission.elective');
  return subjectName(FIXED[slot]);
}

/** University admission points estimated from grades and practice results. */
export function AdmissionPage() {
  usePageTitle(t('admission.title'));
  const loaded = useSettings((s) => s.loaded);
  return (
    <>
      <BackLink />
      <PageHeader title={t('admission.title')} description={t('admission.intro')} />
      {loaded && <Calculator />}
    </>
  );
}

function Calculator() {
  const saved = useSettings((s) => s.settings.admission);
  const update = useSettings((s) => s.update);
  const [inputs, setInputs] = useState<AdmissionInputs>(saved ?? DEFAULT_ADMISSION);
  const [notice, setNotice] = useState('');
  const attempts = useLiveQuery(() => db.attempts.toArray(), []);
  const result = useMemo(() => admissionPoints(inputs), [inputs]);

  const estimates = useMemo(() => {
    const map = new Map<AdmissionSlot, ReturnType<typeof practiceEstimate>>();
    if (attempts)
      for (const slot of ADMISSION_SLOTS) {
        const subject = slotSubject(inputs, slot);
        map.set(slot, subject ? practiceEstimate(attempts, subject) : null);
      }
    return map;
  }, [attempts, inputs]);

  const change = (next: AdmissionInputs) => {
    setInputs(next);
    void update({ admission: next });
  };
  const setExam = (slot: AdmissionSlot, patch: Partial<AdmissionInputs['exams'][AdmissionSlot]>) =>
    change({ ...inputs, exams: { ...inputs.exams, [slot]: { ...inputs.exams[slot], ...patch } } });

  const fillAll = () => {
    let count = 0;
    const exams = { ...inputs.exams };
    for (const slot of ADMISSION_SLOTS) {
      const estimate = estimates.get(slot);
      if (!estimate) continue;
      exams[slot] = { ...exams[slot], percent: estimate.percent };
      count++;
    }
    change({ ...inputs, exams });
    setNotice(count > 0 ? t('admission.filled', { count }) : t('admission.filledNone'));
  };

  return (
    <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_18rem] md:items-start">
      <div className="grid gap-6 md:sticky md:top-6 md:order-2">
        <ResultCard inputs={inputs} result={result} />
      </div>
      <div className="grid min-w-0 gap-6">
        <ExamsCard
          inputs={inputs}
          estimates={estimates}
          setExam={setExam}
          change={change}
          fillAll={fillAll}
          notice={notice}
        />
        <PointsCard inputs={inputs} change={change} />
        <GradesCard inputs={inputs} change={change} gradePoints={result.gradePoints} />
        <InstitutionalCard inputs={inputs} change={change} />
        <div className="flex flex-wrap items-center justify-between gap-3 text-sm text-muted">
          <p className="max-w-prose">
            {t('admission.rules', { year: String(RULES_YEAR), date: RULES_CHECKED })}
          </p>
          <Button variant="ghost" size="sm" onClick={() => change(DEFAULT_ADMISSION)}>
            {t('admission.reset')}
          </Button>
        </div>
      </div>
    </div>
  );
}

function ResultCard({
  inputs,
  result,
}: {
  inputs: AdmissionInputs;
  result: ReturnType<typeof admissionPoints>;
}) {
  return (
    <section
      aria-labelledby="admission-result"
      className="overflow-hidden rounded-lg bg-linear-135 from-hero-from to-hero-to p-5 text-hero-fg shadow-primary"
    >
      <h2 id="admission-result" className="flex items-center gap-2 text-sm font-semibold">
        <GraduationCap aria-hidden="true" className="size-5" />
        {t('admission.estimate')}
      </h2>
      <p aria-live="polite" className="mt-2 flex items-baseline gap-2">
        {result.total === null ? (
          <span className="text-sm">{t('admission.missing')}</span>
        ) : (
          <>
            <span className="text-5xl font-extrabold tabular-nums">
              {formatNumber(result.total)}
            </span>
            <span className="font-medium opacity-90">{t('admission.outOf')}</span>
          </>
        )}
      </p>
      {result.total !== null && (
        <div
          aria-hidden="true"
          className="mt-3 h-2 overflow-hidden rounded-full bg-[color-mix(in_srgb,currentColor_25%,transparent)]"
        >
          <div
            className="h-full rounded-full bg-current transition-[width] duration-(--motion-slow)"
            style={{ width: `${(result.total / 500) * 100}%` }}
          />
        </div>
      )}
      <dl className="mt-4 grid gap-2 rounded-md bg-surface p-4 text-sm text-text">
        <Row
          label={t('admission.study')}
          value={
            result.studyPoints === null
              ? '–'
              : t('admission.of', { points: formatNumber(result.studyPoints), max: '200' })
          }
          detail={
            result.studyPoints === null
              ? t('admission.studyMissing')
              : t('admission.studyDetail', {
                  grades: formatNumber(result.gradePoints!),
                  average: formatNumber(result.averagePoints!),
                })
          }
        />
        <Row
          label={t('admission.examPoints')}
          value={
            result.examPoints === null
              ? '–'
              : t('admission.of', { points: formatNumber(result.examPoints), max: '200' })
          }
          detail={inputs.pointSlots.map((slot) => slotName(inputs, slot)).join(' + ')}
        />
        <Method
          label={t('admission.methodRegular')}
          value={result.regular}
          used={result.method === 'regular'}
        />
        <Method
          label={t('admission.methodDoubled')}
          value={result.doubled}
          used={result.method === 'doubled'}
        />
        <Row
          label={t('admission.institutional')}
          value={t('admission.of', { points: formatNumber(result.institutional), max: '100' })}
        />
      </dl>
      <a
        href={FELVI_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold underline underline-offset-4"
      >
        {t('admission.felvi')}
        <ExternalLink aria-hidden="true" className="size-3.5" />
        <span className="sr-only"> {t('common.newTab')}</span>
      </a>
    </section>
  );
}

function Row({ label, value, detail }: { label: string; value: string; detail?: string }) {
  return (
    <div className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-x-3">
      <dt className="font-medium">{label}</dt>
      <dd className="font-semibold tabular-nums">{value}</dd>
      {detail && <dd className="col-span-2 text-xs text-muted">{detail}</dd>}
    </div>
  );
}

function Method({ label, value, used }: { label: string; value: number | null; used: boolean }) {
  return (
    <div
      className={cn(
        '-mx-2 grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-x-3 rounded-sm px-2 py-1',
        used && 'bg-primary-soft text-primary-soft-fg',
      )}
    >
      <dt className="flex items-center gap-1.5">
        {used && <Check aria-hidden="true" className="size-4 shrink-0" />}
        {label}
      </dt>
      <dd className="font-semibold tabular-nums">{value === null ? '–' : formatNumber(value)}</dd>
      {used && <dd className="col-span-2 text-xs">{t('admission.methodUsed')}</dd>}
    </div>
  );
}

function Section({
  id,
  title,
  body,
  children,
  action,
}: {
  id: string;
  title: string;
  body: string;
  children: ReactNode;
  action?: ReactNode;
}) {
  return (
    <Card aria-labelledby={id}>
      <div className="flex flex-wrap items-start justify-between gap-3">
        <CardTitle id={id}>{title}</CardTitle>
        {action}
      </div>
      <CardDescription>{body}</CardDescription>
      <div className="mt-4">{children}</div>
    </Card>
  );
}

function ExamsCard({
  inputs,
  estimates,
  setExam,
  change,
  fillAll,
  notice,
}: {
  inputs: AdmissionInputs;
  estimates: Map<AdmissionSlot, ReturnType<typeof practiceEstimate>>;
  setExam: (slot: AdmissionSlot, patch: Partial<AdmissionInputs['exams'][AdmissionSlot]>) => void;
  change: (next: AdmissionInputs) => void;
  fillAll: () => void;
  notice: string;
}) {
  return (
    <Section
      id="admission-exams"
      title={t('admission.examsTitle')}
      body={t('admission.examsBody')}
      action={
        <Button size="sm" variant="secondary" onClick={fillAll}>
          <Sparkles aria-hidden="true" />
          {t('admission.fillAll')}
        </Button>
      }
    >
      <p role="status" className={cn('text-sm font-medium text-primary', notice && 'mb-3')}>
        {notice}
      </p>
      <ul className="grid gap-4">
        {ADMISSION_SLOTS.map((slot) => (
          <ExamRow
            key={slot}
            slot={slot}
            inputs={inputs}
            estimate={estimates.get(slot) ?? null}
            setExam={setExam}
            change={change}
          />
        ))}
      </ul>
    </Section>
  );
}

function ExamRow({
  slot,
  inputs,
  estimate,
  setExam,
  change,
}: {
  slot: AdmissionSlot;
  inputs: AdmissionInputs;
  estimate: ReturnType<typeof practiceEstimate>;
  setExam: (slot: AdmissionSlot, patch: Partial<AdmissionInputs['exams'][AdmissionSlot]>) => void;
  change: (next: AdmissionInputs) => void;
}) {
  const id = useId();
  const exam = inputs.exams[slot];
  const name = slotName(inputs, slot);
  const choices =
    slot === 'nyelv'
      ? LANGUAGES
      : slot === 'valasztott'
        ? DEFAULT_SUBJECTS.map((s) => s.id).filter(
            (s) => !['magyar', 'matematika', 'tortenelem'].includes(s),
          )
        : null;
  return (
    <li className="grid gap-3 rounded-md border border-border p-4 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center">
      <div className="grid min-w-0 gap-2">
        <p className="font-semibold">{name}</p>
        {choices && (
          <label className="flex flex-wrap items-center gap-2 text-sm">
            <span className="text-muted">
              {slot === 'nyelv' ? t('admission.languageLabel') : t('admission.electiveLabel')}
            </span>
            <select
              value={slot === 'nyelv' ? inputs.languageSubject : inputs.electiveSubject}
              onChange={(event) =>
                change({
                  ...inputs,
                  [slot === 'nyelv' ? 'languageSubject' : 'electiveSubject']: event.target.value,
                })
              }
              className={cn(input, 'min-h-10 text-sm')}
            >
              {choices.map((subject) => (
                <option key={subject} value={subject}>
                  {subjectName(subject)}
                </option>
              ))}
              <option value="">{t('admission.other')}</option>
            </select>
          </label>
        )}
        {estimate && (
          <p className="flex flex-wrap items-center gap-x-2 text-sm text-muted">
            {t('admission.fromPractice', {
              percent: String(estimate.percent),
              papers: estimate.papers,
            })}
            {exam.percent !== estimate.percent && (
              <Button
                size="sm"
                variant="ghost"
                aria-label={t('admission.useThisLabel', { subject: name })}
                onClick={() => setExam(slot, { percent: estimate.percent })}
              >
                {t('admission.useThis')}
              </Button>
            )}
          </p>
        )}
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <label htmlFor={id} className="sr-only">
          {t('admission.percentLabel', { subject: name })}
        </label>
        <span className="relative">
          <input
            id={id}
            type="number"
            inputMode="numeric"
            min={0}
            max={100}
            value={exam.percent ?? ''}
            onChange={(event) => {
              const value = event.target.value;
              setExam(slot, {
                percent:
                  value === '' ? null : Math.min(100, Math.max(0, Math.round(Number(value)))),
              });
            }}
            className={cn(input, 'w-24 pr-8 text-right tabular-nums')}
          />
          <span aria-hidden="true" className="absolute top-1/2 right-3 -translate-y-1/2 text-muted">
            %
          </span>
        </span>
        <SegmentedControl<ExamLevel>
          label={t('admission.levelLabel', { subject: name })}
          value={exam.level}
          options={[
            { value: 'kozep', label: t('admission.kozep') },
            { value: 'emelt', label: t('admission.emelt') },
          ]}
          onValueChange={(level) => setExam(slot, { level })}
          className="w-auto"
        />
      </div>
    </li>
  );
}

function PointsCard({
  inputs,
  change,
}: {
  inputs: AdmissionInputs;
  change: (next: AdmissionInputs) => void;
}) {
  const ids = [useId(), useId()];
  return (
    <Section
      id="admission-points"
      title={t('admission.pointsTitle')}
      body={t('admission.pointsBody')}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {inputs.pointSlots.map((slot, index) => {
          const exam = inputs.exams[slot];
          const other = inputs.pointSlots[1 - index]!;
          return (
            <div key={index} className="grid gap-1">
              <label htmlFor={ids[index]} className="text-sm font-medium">
                {t('admission.pointsSubject', { number: index + 1 })}
              </label>
              <select
                id={ids[index]}
                value={slot}
                onChange={(event) => {
                  const next = [...inputs.pointSlots] as AdmissionInputs['pointSlots'];
                  next[index] = event.target.value as AdmissionSlot;
                  change({ ...inputs, pointSlots: next });
                }}
                className={input}
              >
                {ADMISSION_SLOTS.filter((s) => s !== other).map((s) => (
                  <option key={s} value={s}>
                    {slotName(inputs, s)}
                  </option>
                ))}
              </select>
              <p className="text-sm text-muted">
                {exam.percent === null
                  ? '–'
                  : `${exam.percent}% · ${t(`admission.${exam.level}`)} → ${t(
                      'admission.pointsValue',
                      {
                        points: examPoints(exam.percent, exam.level),
                      },
                    )}`}
              </p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

const GRADES = [5, 4, 3, 2, 1];
const HALF_GRADES = [5, 4.5, 4, 3.5, 3, 2.5, 2, 1.5, 1];

function GradesCard({
  inputs,
  change,
  gradePoints,
}: {
  inputs: AdmissionInputs;
  change: (next: AdmissionInputs) => void;
  gradePoints: number | null;
}) {
  const years = [t('admission.yearBefore'), t('admission.yearLast')];
  return (
    <Section
      id="admission-grades"
      title={t('admission.gradesTitle')}
      body={t('admission.gradesBody')}
    >
      <table className="w-full text-left">
        <thead>
          <tr className="text-sm text-muted">
            <th scope="col" className="sr-only">
              {t('admission.examsTitle')}
            </th>
            {years.map((year) => (
              <th key={year} scope="col" className="px-1 pb-2 font-medium">
                {year}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {ADMISSION_SLOTS.map((slot) => {
            const name = slotName(inputs, slot);
            return (
              <tr key={slot} className="border-t border-border">
                <th scope="row" className="py-2 pr-2 font-medium">
                  {name}
                </th>
                {[0, 1].map((year) => (
                  <td key={year} className="px-1 py-2">
                    <select
                      aria-label={t('admission.gradeLabel', { subject: name, year: years[year]! })}
                      value={inputs.grades[slot][year] ?? ''}
                      onChange={(event) => {
                        const pair = [...inputs.grades[slot]] as [number | null, number | null];
                        pair[year] = event.target.value === '' ? null : Number(event.target.value);
                        change({ ...inputs, grades: { ...inputs.grades, [slot]: pair } });
                      }}
                      className={cn(input, 'w-full min-w-18 px-2')}
                    >
                      <option value="">{t('admission.gradeNone')}</option>
                      {(slot === 'magyar' ? HALF_GRADES : GRADES).map((grade) => (
                        <option key={grade} value={grade}>
                          {formatNumber(grade)}
                        </option>
                      ))}
                    </select>
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      {gradePoints !== null && (
        <p className="mt-3 text-sm font-medium">
          {t('admission.gradesTotal', { points: formatNumber(gradePoints) })}
        </p>
      )}
    </Section>
  );
}

function InstitutionalCard({
  inputs,
  change,
}: {
  inputs: AdmissionInputs;
  change: (next: AdmissionInputs) => void;
}) {
  const id = useId();
  return (
    <Section
      id="admission-institutional"
      title={t('admission.institutionalTitle')}
      body={t('admission.institutionalBody')}
    >
      <div className="grid gap-1">
        <label htmlFor={id} className="text-sm font-medium">
          {t('admission.institutionalLabel')}
        </label>
        <input
          id={id}
          type="number"
          inputMode="numeric"
          min={0}
          max={100}
          value={inputs.institutional || ''}
          onChange={(event) =>
            change({
              ...inputs,
              institutional: Math.min(
                100,
                Math.max(0, Math.round(Number(event.target.value) || 0)),
              ),
            })
          }
          className={cn(input, 'w-28 tabular-nums')}
        />
      </div>
      <p className="mt-3 text-sm text-muted">{t('admission.institutionalExample')}</p>
    </Section>
  );
}
