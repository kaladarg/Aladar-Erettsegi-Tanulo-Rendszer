import {
  ArrowLeft,
  ArrowRight,
  BookOpenCheck,
  GalleryVerticalEnd,
  Layers,
  Mic,
  PenLine,
  RotateCcw,
  ShieldCheck,
  Smile,
  Timer,
} from 'lucide-react';
import { Dialog } from 'radix-ui';
import { useState, type ReactNode } from 'react';
import { useNavigate } from 'react-router';
import { Button } from '@/design/ui/Button';
import { findSubject } from '@/content/catalog';
import { SegmentedControl } from '@/design/ui/SegmentedControl';
import { CURRENT_FEATURES, type ExamLevelId } from '@/domain/settings';
import { t } from '@/i18n';
import { cn } from '@/lib/cn';
import { useOnboarding } from '@/state/onboardingStore';
import { useSettings } from '@/state/settingsStore';
import { SubjectPicker } from './SubjectPicker';

const TOTAL_STEPS = 5;

/** First-run introduction: pick subjects, learn how it works, start. */
export function OnboardingDialog() {
  const onboardingDone = useSettings((state) => state.settings.onboardingDone);
  const savedSubjects = useSettings((state) => state.settings.subjects);
  const savedDates = useSettings((state) => state.settings.examDates);
  const savedLevels = useSettings((state) => state.settings.levels);
  const update = useSettings((state) => state.update);
  const reopened = useOnboarding((state) => state.open);
  const closeReopened = useOnboarding((state) => state.close);
  const suppressed = useOnboarding((state) => state.suppressed);
  const navigate = useNavigate();

  const open = (!onboardingDone && !suppressed) || reopened;
  const [step, setStep] = useState(0);
  const [subjects, setSubjects] = useState<string[]>(savedSubjects);
  const [dates, setDates] = useState<Record<string, string>>(savedDates);
  const [levels, setLevels] = useState<Record<string, ExamLevelId>>(savedLevels);
  const [showHint, setShowHint] = useState(false);
  const [wasOpen, setWasOpen] = useState(open);

  // Start from the saved choices every time the dialog opens again.
  if (open !== wasOpen) {
    setWasOpen(open);
    if (open) {
      setSubjects(savedSubjects);
      setDates(savedDates);
      setLevels(savedLevels);
      setStep(0);
      setShowHint(false);
    }
  }

  const finish = async (openExams = false) => {
    await update({
      onboardingDone: true,
      subjects,
      featuresSeen: CURRENT_FEATURES,
      examDates: Object.fromEntries(Object.entries(dates).filter(([, day]) => day)),
      levels,
    });
    closeReopened();
    setStep(0);
    if (openExams) {
      navigate(subjects.length === 1 ? `/feladatsorok?targy=${subjects[0]}` : '/feladatsorok');
    }
  };

  const next = () => {
    if (step === 0 && subjects.length === 0) {
      setShowHint(true);
      return;
    }
    setShowHint(false);
    setStep((current) => Math.min(TOTAL_STEPS - 1, current + 1));
  };

  return (
    <Dialog.Root
      open={open}
      onOpenChange={(isOpen) => {
        // Closing early (Esc) counts as "skip": keep what was picked so far.
        if (!isOpen) void finish();
      }}
    >
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-40 anim-overlay bg-black/50 backdrop-blur-[2px]" />
        <Dialog.Content
          aria-describedby="onboarding-step-body"
          // Focus the dialog itself so the first subject card does not look pre-selected.
          onOpenAutoFocus={(event) => {
            event.preventDefault();
            (event.currentTarget as HTMLElement).focus();
          }}
          tabIndex={-1}
          className="fixed inset-x-0 bottom-0 z-50 flex max-h-[92dvh] anim-dialog flex-col overflow-y-auto rounded-t-xl border border-border bg-surface p-6 shadow-3 outline-none sm:top-1/2 sm:right-auto sm:bottom-auto sm:left-1/2 sm:w-[calc(100%-2rem)] sm:max-w-lg sm:-translate-x-1/2 sm:-translate-y-1/2 sm:rounded-xl"
        >
          <div className="mb-5 flex items-center justify-between gap-4">
            <p className="text-sm text-muted">
              {t('common.stepOf', { current: step + 1, total: TOTAL_STEPS })}
            </p>
            <StepDots step={step} />
          </div>

          {step === 0 && (
            <Step title={t('onboarding.welcome.title')} body={t('onboarding.welcome.body')}>
              <SubjectPicker
                legend={t('subjects.title')}
                hideLegend
                selected={subjects}
                onChange={(next) => {
                  setSubjects(next);
                  if (next.length > 0) setShowHint(false);
                }}
              />
              {showHint && (
                <p role="alert" className="mt-3 text-sm font-medium text-danger">
                  {t('onboarding.welcome.pickAtLeastOne')}
                </p>
              )}
              <p className="mt-5 flex gap-3 text-sm text-muted">
                <Smile aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-primary" />
                <span>
                  {t('onboarding.welcome.note')}
                  <span className="mt-1 block font-semibold text-text italic">
                    {t('onboarding.welcome.signature')}
                  </span>
                </span>
              </p>
            </Step>
          )}

          {step === 1 && (
            <Step title={t('onboarding.exams.title')} body={t('onboarding.exams.body')}>
              <ul className="grid gap-4">
                {subjects.map((id) => {
                  const subject = findSubject(id);
                  return (
                    <li key={id} className="grid gap-2 rounded-lg border border-border p-3">
                      <p className="font-semibold">{subject?.name ?? id}</p>
                      <SegmentedControl<ExamLevelId>
                        label={t('onboarding.exams.levelLabel', { subject: subject?.name ?? id })}
                        value={levels[id] ?? 'kozep'}
                        onValueChange={(level) => setLevels((l) => ({ ...l, [id]: level }))}
                        options={[
                          { value: 'kozep', label: t('onboarding.exams.kozep') },
                          { value: 'emelt', label: t('onboarding.exams.emelt') },
                        ]}
                      />
                      <label className="grid gap-1 text-sm font-medium">
                        {t('onboarding.exams.dateLabel')}
                        <input
                          type="date"
                          value={dates[id] ?? ''}
                          onChange={(event) => {
                            const day = event.target.value;
                            setDates((d) => ({ ...d, [id]: day }));
                          }}
                          className="min-h-11 rounded-md border border-border-strong bg-surface px-3 text-base font-normal"
                        />
                      </label>
                    </li>
                  );
                })}
              </ul>
              <p className="mt-3 text-sm text-muted">{t('onboarding.exams.later')}</p>
            </Step>
          )}

          {step === 2 && (
            <Step title={t('onboarding.how.title')}>
              <ul className="grid gap-4">
                <Feature icon={<BookOpenCheck />} title={t('onboarding.how.paperTitle')}>
                  {t('onboarding.how.paperBody')}
                </Feature>
                <Feature icon={<Timer />} title={t('onboarding.how.practiceTitle')}>
                  {t('onboarding.how.practiceBody')}
                </Feature>
                <Feature icon={<ShieldCheck />} title={t('onboarding.how.privacyTitle')}>
                  {t('onboarding.how.privacyBody')}
                </Feature>
              </ul>
            </Step>
          )}

          {step === 3 && (
            <Step title={t('onboarding.tools.title')}>
              <ul className="grid gap-4">
                <Feature icon={<Layers />} title={t('onboarding.tools.topicsTitle')}>
                  {t('onboarding.tools.topicsBody')}
                </Feature>
                <Feature icon={<RotateCcw />} title={t('onboarding.tools.reviewTitle')}>
                  {t('onboarding.tools.reviewBody')}
                </Feature>
                <Feature icon={<PenLine />} title={t('onboarding.tools.drawTitle')}>
                  {t('onboarding.tools.drawBody')}
                </Feature>
                <Feature icon={<GalleryVerticalEnd />} title={t('onboarding.tools.cardsTitle')}>
                  {t('onboarding.tools.cardsBody')}
                </Feature>
                <Feature icon={<Mic />} title={t('onboarding.tools.oralTitle')}>
                  {t('onboarding.tools.oralBody')}
                </Feature>
              </ul>
            </Step>
          )}

          {step === 4 && (
            <Step title={t('onboarding.start.title')} body={t('onboarding.start.body')} />
          )}

          <div className="mt-8 flex items-center justify-between gap-3">
            {step > 0 ? (
              <Button variant="ghost" onClick={() => setStep(step - 1)}>
                <ArrowLeft aria-hidden="true" />
                {t('common.back')}
              </Button>
            ) : (
              <Button variant="ghost" onClick={() => void finish()}>
                {t('common.skip')}
              </Button>
            )}
            {step < TOTAL_STEPS - 1 ? (
              <Button onClick={next}>
                {t('common.next')}
                <ArrowRight aria-hidden="true" />
              </Button>
            ) : (
              <Button onClick={() => void finish(true)}>
                {t('onboarding.start.cta')}
                <ArrowRight aria-hidden="true" />
              </Button>
            )}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

function Step({ title, body, children }: { title: string; body?: string; children?: ReactNode }) {
  return (
    <div>
      <Dialog.Title className="text-2xl font-bold">{title}</Dialog.Title>
      <div id="onboarding-step-body">
        {body && <p className="mt-2 text-muted">{body}</p>}
        {children && <div className="mt-5">{children}</div>}
      </div>
    </div>
  );
}

function Feature({
  icon,
  title,
  children,
}: {
  icon: ReactNode;
  title: string;
  children: ReactNode;
}) {
  return (
    <li className="flex gap-4">
      <span
        aria-hidden="true"
        className="flex size-11 shrink-0 items-center justify-center rounded-md bg-primary-soft text-primary-soft-fg [&_svg]:size-5"
      >
        {icon}
      </span>
      <div>
        <p className="font-semibold">{title}</p>
        <p className="text-muted">{children}</p>
      </div>
    </li>
  );
}

function StepDots({ step }: { step: number }) {
  return (
    <div aria-hidden="true" className="flex gap-1.5">
      {Array.from({ length: TOTAL_STEPS }, (_, index) => (
        <span
          key={index}
          className={cn(
            'h-2 rounded-full transition-all',
            index === step ? 'w-6 bg-primary' : 'w-2 bg-border-strong',
          )}
        />
      ))}
    </div>
  );
}
