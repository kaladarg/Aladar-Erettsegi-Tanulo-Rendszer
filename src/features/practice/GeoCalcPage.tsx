import { Check, RefreshCw, X } from 'lucide-react';
import { useId, useState } from 'react';
import { usePageTitle } from '@/app/usePageTitle';
import { RichText } from '@/content/RichText';
import { Button } from '@/design/ui/Button';
import { PageHeader } from '@/design/ui/PageHeader';
import { SegmentedControl } from '@/design/ui/SegmentedControl';
import {
  CALC_KINDS,
  checkCalcAnswer,
  makeCalcTask,
  type CalcKind,
  type CalcTask,
} from '@/domain/geography/calc';
import { t } from '@/i18n';
import { BackLink } from './BackLink';

/** Generated földrajz calculation tasks with a worked solution, as many as the student wants. */
export function GeoCalcPage() {
  usePageTitle(t('geoCalc.title'));
  const [kind, setKind] = useState<CalcKind>('meretarany');
  const [task, setTask] = useState<CalcTask>(() => makeCalcTask('meretarany'));
  const [input, setInput] = useState('');
  const [result, setResult] = useState<boolean | null>(null);
  const [shown, setShown] = useState(false);
  const inputId = useId();

  const fresh = (next: CalcKind) => {
    setKind(next);
    setTask(makeCalcTask(next));
    setInput('');
    setResult(null);
    setShown(false);
  };
  const check = () => {
    const ok = checkCalcAnswer(task, input);
    setResult(ok);
    if (ok !== null) setShown(true);
  };

  return (
    <>
      <BackLink />
      <PageHeader title={t('geoCalc.title')} description={t('geoCalc.intro')} />
      <div className="mb-4">
        <SegmentedControl<CalcKind>
          label={t('geoCalc.kind')}
          value={kind}
          onValueChange={fresh}
          options={CALC_KINDS.map((id) => ({
            value: id,
            label: t(`geoCalc.kinds.${id}`),
          }))}
        />
      </div>
      <div className="grid gap-4 rounded-xl border border-border bg-surface p-4 shadow-1 sm:p-5">
        <div className="text-lg">
          <RichText text={task.problem} />
        </div>
        <form
          className="flex flex-wrap items-end gap-2"
          onSubmit={(event) => {
            event.preventDefault();
            check();
          }}
        >
          <div className="grid gap-1">
            <label htmlFor={inputId} className="text-sm font-medium">
              {task.answerType === 'time'
                ? t('geoCalc.answerTime')
                : t('geoCalc.answer', { unit: task.unit })}
            </label>
            <input
              id={inputId}
              value={input}
              inputMode={task.answerType === 'time' ? 'text' : 'decimal'}
              autoComplete="off"
              onChange={(event) => {
                setInput(event.target.value);
                setResult(null);
              }}
              className="min-h-11 w-40 rounded-md border border-border-strong bg-surface px-3"
            />
          </div>
          <Button type="submit">{t('geoCalc.check')}</Button>
          <Button type="button" variant="secondary" onClick={() => setShown(true)}>
            {t('geoCalc.showSolution')}
          </Button>
        </form>
        <div role="status">
          {result === true && (
            <p className="flex items-center gap-2 font-semibold text-success">
              <Check aria-hidden="true" className="size-5" />
              {t('geoCalc.right')}
            </p>
          )}
          {result === false && (
            <p className="flex items-center gap-2 font-semibold text-danger">
              <X aria-hidden="true" className="size-5" />
              {t('geoCalc.wrong')}
            </p>
          )}
        </div>
        {shown && (
          <ol className="grid list-decimal gap-1 pl-5">
            {task.steps.map((step) => (
              <li key={step}>
                <RichText text={step} />
              </li>
            ))}
          </ol>
        )}
        <Button variant="secondary" onClick={() => fresh(kind)} className="justify-self-start">
          <RefreshCw aria-hidden="true" />
          {t('geoCalc.next')}
        </Button>
      </div>
    </>
  );
}
