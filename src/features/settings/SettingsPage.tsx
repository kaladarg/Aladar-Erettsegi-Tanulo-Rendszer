import {
  Download,
  Minus,
  Monitor,
  Moon,
  Plus,
  ShieldCheck,
  Sun,
  Trash2,
  Upload,
} from 'lucide-react';
import { useRef, useState } from 'react';
import { usePageTitle } from '@/app/usePageTitle';
import { TEXT_SCALE_STEPS, stepTextScale, type ThemePreference } from '@/domain/settings';
import { Button } from '@/design/ui/Button';
import { Card, CardDescription, CardTitle } from '@/design/ui/Card';
import { ConfirmDialog } from '@/design/ui/ConfirmDialog';
import { PageHeader } from '@/design/ui/PageHeader';
import { SegmentedControl } from '@/design/ui/SegmentedControl';
import { SwitchField } from '@/design/ui/Switch';
import { SubjectPicker } from '@/features/onboarding/SubjectPicker';
import { formatDate, formatNumber, t } from '@/i18n';
import type { BackupFile } from '@/storage/backup';
import { useSettings } from '@/state/settingsStore';
import { AiKeySection } from './AiKeySection';
import { ContentSourceSection } from './ContentSourceSection';
import { applyBackup, exportToFile, readBackupFile, resetAllData } from './dataActions';

export function SettingsPage() {
  usePageTitle(t('settings.title'));
  const settings = useSettings((state) => state.settings);
  const update = useSettings((state) => state.update);

  return (
    <>
      <PageHeader title={t('settings.title')} description={t('settings.intro')} />
      <div className="grid gap-6">
        <Card aria-labelledby="settings-appearance">
          <CardTitle id="settings-appearance">{t('settings.appearance')}</CardTitle>

          <div className="mt-5">
            <p className="mb-2 font-medium" aria-hidden="true">
              {t('settings.theme.title')}
            </p>
            <SegmentedControl<ThemePreference>
              label={t('settings.theme.title')}
              value={settings.theme}
              onValueChange={(theme) => void update({ theme })}
              options={[
                {
                  value: 'system',
                  label: t('settings.theme.system'),
                  icon: <Monitor aria-hidden="true" />,
                },
                {
                  value: 'light',
                  label: t('settings.theme.light'),
                  icon: <Sun aria-hidden="true" />,
                },
                {
                  value: 'dark',
                  label: t('settings.theme.dark'),
                  icon: <Moon aria-hidden="true" />,
                },
              ]}
            />
          </div>

          <TextSizeControl
            value={settings.textScale}
            onChange={(textScale) => void update({ textScale })}
          />

          <div className="mt-4 divide-y divide-border">
            <SwitchField
              label={t('settings.font.title')}
              description={t('settings.font.description')}
              checked={settings.dyslexicFont}
              onCheckedChange={(dyslexicFont) => void update({ dyslexicFont })}
            />
            <SwitchField
              label={t('settings.motion.title')}
              description={t('settings.motion.description')}
              checked={settings.reducedMotion}
              onCheckedChange={(reducedMotion) => void update({ reducedMotion })}
            />
          </div>
        </Card>

        <Card aria-labelledby="settings-subjects">
          <CardTitle id="settings-subjects">{t('settings.subjects.title')}</CardTitle>
          <CardDescription>{t('settings.subjects.description')}</CardDescription>
          <div className="mt-5">
            <SubjectPicker
              legend={t('settings.subjects.title')}
              hideLegend
              selected={settings.subjects}
              onChange={(subjects) => void update({ subjects })}
            />
          </div>
        </Card>

        <DataSection />
        <AiKeySection />
        <ContentSourceSection />

        <Card aria-labelledby="settings-privacy" className="border-success/40">
          <CardTitle id="settings-privacy" className="flex items-center gap-2">
            <ShieldCheck aria-hidden="true" className="size-5 text-success" />
            {t('settings.privacy.title')}
          </CardTitle>
          <CardDescription className="text-text">{t('settings.privacy.body')}</CardDescription>
        </Card>
      </div>
    </>
  );
}

function TextSizeControl({
  value,
  onChange,
}: {
  value: number;
  onChange: (value: number) => void;
}) {
  const min = TEXT_SCALE_STEPS[0];
  const max = TEXT_SCALE_STEPS.at(-1) ?? min;
  const percent = formatNumber(value, { style: 'percent' });
  return (
    <div className="mt-6">
      <p className="font-medium" id="text-size-label">
        {t('settings.textSize.title')}
      </p>
      <p className="text-sm text-muted">{t('settings.textSize.description')}</p>
      <div
        className="mt-3 flex flex-wrap items-center gap-2"
        role="group"
        aria-labelledby="text-size-label"
      >
        <Button
          variant="secondary"
          size="icon"
          aria-label={t('settings.textSize.decrease')}
          disabled={value <= min}
          onClick={() => onChange(stepTextScale(value, -1))}
        >
          <Minus aria-hidden="true" />
        </Button>
        <output
          aria-live="polite"
          className="min-w-16 text-center text-lg font-semibold tabular-nums"
        >
          {percent}
        </output>
        <Button
          variant="secondary"
          size="icon"
          aria-label={t('settings.textSize.increase')}
          disabled={value >= max}
          onClick={() => onChange(stepTextScale(value, 1))}
        >
          <Plus aria-hidden="true" />
        </Button>
        <Button variant="ghost" size="sm" disabled={value === 1} onClick={() => onChange(1)}>
          {t('settings.textSize.reset')}
        </Button>
      </div>
      <p className="mt-3 rounded-md bg-surface-muted px-4 py-3">{t('settings.textSize.preview')}</p>
    </div>
  );
}

function DataSection() {
  const fileInput = useRef<HTMLInputElement>(null);
  const [pending, setPending] = useState<BackupFile | null>(null);
  const [confirmReset, setConfirmReset] = useState(false);

  return (
    <Card aria-labelledby="settings-data">
      <CardTitle id="settings-data">{t('settings.data.title')}</CardTitle>
      <CardDescription>{t('settings.data.description')}</CardDescription>

      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <Button variant="secondary" onClick={() => void exportToFile()}>
          <Download aria-hidden="true" />
          {t('settings.data.export')}
        </Button>
        <Button variant="secondary" onClick={() => fileInput.current?.click()}>
          <Upload aria-hidden="true" />
          {t('settings.data.import')}
        </Button>
        <input
          ref={fileInput}
          type="file"
          accept="application/json,.json"
          className="sr-only"
          tabIndex={-1}
          aria-hidden="true"
          onChange={async (event) => {
            const file = event.target.files?.[0];
            event.target.value = '';
            if (!file) return;
            const backup = await readBackupFile(file);
            if (backup) setPending(backup);
          }}
        />
        <Button variant="danger" className="sm:ml-auto" onClick={() => setConfirmReset(true)}>
          <Trash2 aria-hidden="true" />
          {t('settings.data.reset')}
        </Button>
      </div>

      <ConfirmDialog
        open={pending !== null}
        onOpenChange={(open) => !open && setPending(null)}
        title={t('settings.data.importConfirmTitle')}
        description={t('settings.data.importConfirmBody', {
          date: pending
            ? formatDate(new Date(pending.exportedAt), { dateStyle: 'long', timeStyle: 'short' })
            : '',
        })}
        confirmLabel={t('settings.data.importConfirm')}
        onConfirm={() => {
          if (pending) void applyBackup(pending);
          setPending(null);
        }}
      />
      <ConfirmDialog
        open={confirmReset}
        onOpenChange={setConfirmReset}
        tone="danger"
        title={t('settings.data.resetConfirmTitle')}
        description={t('settings.data.resetConfirmBody')}
        confirmLabel={t('settings.data.resetConfirm')}
        onConfirm={() => void resetAllData()}
      />
    </Card>
  );
}
