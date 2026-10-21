import { Copy, Download, Share2, X } from 'lucide-react';
import { Dialog } from 'radix-ui';
import { useEffect, useState } from 'react';
import { examFullTitle } from '@/content/labels';
import type { Exam } from '@/content/schema.types';
import { Button } from '@/design/ui/Button';
import { buttonVariants } from '@/design/ui/buttonVariants';
import type { ExamResult } from '@/domain/scoring/exam';
import { t } from '@/i18n';
import { cardContent, drawResultCard, examLink } from './resultCard';

function ShareContent({
  exam,
  result,
  mode,
  submittedAt,
}: {
  exam: Exam;
  result: ExamResult;
  mode: 'practice' | 'exam';
  submittedAt: number;
}) {
  const [image, setImage] = useState<{ file: File; url: string } | null>(null);
  const [status, setStatus] = useState<'copied' | 'failed' | null>(null);
  const content = cardContent(exam, result, mode, submittedAt);
  const percent = content.percent;
  const fileName = t('share.fileName', { exam: exam.id });

  useEffect(() => {
    let url = '';
    let active = true;
    void drawResultCard(content, exam.subject).then((blob) => {
      if (!active) return;
      url = URL.createObjectURL(blob);
      setImage({ file: new File([blob], fileName, { type: 'image/png' }), url });
    });
    return () => {
      active = false;
      if (url) URL.revokeObjectURL(url);
    };
    // The card is drawn once per opening; the content does not change meanwhile.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const text = t('share.shareText', { exam: examFullTitle(exam), percent });
  const canShareFile =
    !!image &&
    typeof navigator.canShare === 'function' &&
    navigator.canShare({ files: [image.file] });

  const share = async () => {
    if (!image) return;
    try {
      await navigator.share({ files: [image.file], text, url: examLink(exam.id) });
    } catch {
      // Cancelled by the student, or not allowed: nothing to report.
    }
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(`${text} ${examLink(exam.id)}`);
      setStatus('copied');
    } catch {
      setStatus('failed');
    }
  };

  return (
    <div className="grid gap-4">
      <p className="text-sm text-muted">{t('share.body')}</p>
      <div className="aspect-square w-full overflow-hidden rounded-md border border-border bg-surface-muted">
        {image && (
          <img src={image.url} alt={t('share.preview')} className="size-full object-contain" />
        )}
      </div>
      <div className="flex flex-wrap gap-2">
        {canShareFile && (
          <Button onClick={() => void share()}>
            <Share2 aria-hidden="true" />
            {t('share.share')}
          </Button>
        )}
        <a
          href={image?.url}
          download={fileName}
          aria-disabled={!image || undefined}
          className={buttonVariants({ variant: canShareFile ? 'secondary' : 'primary' })}
        >
          <Download aria-hidden="true" />
          {t('share.download')}
        </a>
        <Button variant="secondary" onClick={() => void copyLink()}>
          <Copy aria-hidden="true" />
          {t('share.copyLink')}
        </Button>
      </div>
      <p role="status" className="text-sm font-medium">
        {status === 'copied' && t('share.linkCopied')}
        {status === 'failed' && t('share.linkFailed')}
      </p>
    </div>
  );
}

/** Button and dialog to share the result as an image or a link. */
export function ShareResult(props: {
  exam: Exam;
  result: ExamResult;
  mode: 'practice' | 'exam';
  submittedAt: number;
}) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button variant="secondary">
          <Share2 aria-hidden="true" />
          {t('share.open')}
        </Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-40 anim-overlay bg-black/50 backdrop-blur-[2px]" />
        <Dialog.Content
          aria-describedby={undefined}
          className="fixed top-1/2 left-1/2 z-50 max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-md -translate-x-1/2 -translate-y-1/2 anim-dialog overflow-y-auto rounded-xl border border-border bg-surface p-6 shadow-3"
        >
          <div className="mb-3 flex items-center justify-between gap-3">
            <Dialog.Title className="text-xl font-semibold">{t('share.title')}</Dialog.Title>
            <Dialog.Close asChild>
              <Button variant="ghost" size="icon" aria-label={t('common.close')}>
                <X aria-hidden="true" />
              </Button>
            </Dialog.Close>
          </div>
          <ShareContent {...props} />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
