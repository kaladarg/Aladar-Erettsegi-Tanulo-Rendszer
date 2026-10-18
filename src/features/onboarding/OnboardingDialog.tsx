import { ArrowLeft, ArrowRight, BookOpenCheck, ShieldCheck, Timer } from 'lucide-react';
import { Dialog } from 'radix-ui';
import { useState, type ReactNode } from 'react';
import { useNavigate } from 'react-router';
import { Button } from '@/design/ui/Button';
import { t } from '@/i18n';
import { cn } from '@/lib/cn';
import { useOnboarding } from '@/state/onboardingStore';
import { useSettings } from '@/state/settingsStore';
import { SubjectPicker } from './SubjectPicker';

const TOTAL_STEPS = 3;

/** First-run introduction: pick subjects, learn how it works, start. */
export function OnboardingDialog() {
  const onboardingDone = useSettings((state) => state.settings.onboardingDone);
  const savedSubjects = useSettings((state) => state.settings.subjects);
  const update = useSettings((state) => state.update);
  const reopened = useOnboarding((state) => state.open);
  const closeReopened = useOnboarding((state) => state.close);
  const suppressed = useOnboarding((state) => state.suppressed);
  const navigate = useNavigate();

  const open = (!onboardingDone && !suppressed) || reopened;
  const [step, setStep] = useState(0);
  const [subjects, setSubjects] = useState<string[]>(savedSubjects);
  const [showHint, setShowHint] = useState(false);
  const [wasOpen, setWasOpen] = useState(open);

  // Start from the saved choices every time the dialog opens again.
  if (open !== wasOpen) {
    setWasOpen(open);
    if (open) {
      setSubjects(savedSubjects);
      setStep(0);
      setShowHint(false);
    }
  }

  const finish = async (openExams = false) => {
    await update({ onboardingDone: true, subjects });
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
        <Dialog.Overlay className="fixed inset-0 z-40 bg-black/50 motion-safe:animate-[fade-in_var(--motion-base)]" />
        <Dialog.Content
          aria-describedby="onboarding-step-body"
          // Focus the dialog itself so the first subject card does not look pre-selected.
          onOpenAutoFocus={(event) => {
            event.preventDefault();
            (event.currentTarget as HTMLElement).focus();
          }}
          tabIndex={-1}
          className="fixed inset-x-0 bottom-0 z-50 flex max-h-[92dvh] flex-col overflow-y-auto rounded-t-lg border border-border bg-surface p-6 shadow-3 outline-none sm:top-1/2 sm:right-auto sm:bottom-auto sm:left-1/2 sm:w-[calc(100%-2rem)] sm:max-w-lg sm:-translate-x-1/2 sm:-translate-y-1/2 sm:rounded-lg"
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
            </Step>
          )}

          {step === 1 && (
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

          {step === 2 && (
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
