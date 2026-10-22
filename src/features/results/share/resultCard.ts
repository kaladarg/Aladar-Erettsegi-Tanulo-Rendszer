import { findSubject } from '@/content/catalog';
import { examDisplayTitle } from '@/content/labels';
import type { Exam } from '@/content/schema.types';
import type { ExamResult } from '@/domain/scoring/exam';
import { formatDate, formatNumber, t } from '@/i18n';

/** What the shared image shows: the paper and the result, nothing about the student. */
export interface CardContent {
  subject: string;
  exam: string;
  percent: string;
  grade: string | null;
  points: string;
  meta: string;
}

export function cardContent(
  exam: Exam,
  result: ExamResult,
  mode: 'practice' | 'exam',
  submittedAt: number,
): CardContent {
  return {
    subject: `${findSubject(exam.subject)?.name ?? exam.subject} · ${t('home.levelLabel')}`,
    exam: examDisplayTitle(exam),
    percent: `${formatNumber(Math.round(result.percent))}%`,
    grade: result.complete
      ? t('results.grade', { label: result.grade.label, grade: String(result.grade.grade) })
      : null,
    points: t('share.cardPoints', { points: result.points, max: result.maxPoints }),
    meta: t('share.cardMode', {
      mode: mode === 'exam' ? t('results.modeExam') : t('results.modePractice'),
      date: formatDate(submittedAt, { dateStyle: 'long' }),
    }),
  };
}

/** Link to the paper's page on this site (no attempt data in it). */
export function examLink(examId: string): string {
  return new URL(`${import.meta.env.BASE_URL}feladatsorok/${examId}`, document.baseURI).href;
}

const SIZE = 1080;
const ACCENT: Record<string, string> = {
  matematika: '#4338ca',
  tortenelem: '#b45309',
  magyar: '#be123c',
  angol: '#0e7490',
  nemet: '#15803d',
  foldrajz: '#6d28d9',
};

function wrap(ctx: CanvasRenderingContext2D, text: string, maxWidth: number): string[] {
  const lines: string[] = [];
  let line = '';
  for (const word of text.split(' ')) {
    const next = line ? `${line} ${word}` : word;
    if (ctx.measureText(next).width > maxWidth && line) {
      lines.push(line);
      line = word;
    } else line = next;
  }
  if (line) lines.push(line);
  return lines;
}

/** Draws the square result card (fixed light colours, so it looks the same everywhere). */
export async function drawResultCard(content: CardContent, subjectId: string): Promise<Blob> {
  await document.fonts?.ready;
  const canvas = document.createElement('canvas');
  canvas.width = SIZE;
  canvas.height = SIZE;
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('Canvas is not available');
  const family = `'Inter Variable', Inter, system-ui, sans-serif`;
  const font = (weight: number, size: number) => `${weight} ${size}px ${family}`;
  const pad = 96;

  const background = ctx.createLinearGradient(0, 0, SIZE, SIZE);
  background.addColorStop(0, '#1a4fd6');
  background.addColorStop(1, '#0d2f86');
  ctx.fillStyle = background;
  ctx.fillRect(0, 0, SIZE, SIZE);
  ctx.fillStyle = ACCENT[subjectId] ?? '#f5b301';
  ctx.fillRect(0, 0, SIZE, 24);

  ctx.fillStyle = '#ffffff';
  ctx.textBaseline = 'alphabetic';
  ctx.font = font(700, 44);
  ctx.fillText(t('share.cardTitle'), pad, 150);

  ctx.font = font(600, 52);
  let y = 290;
  for (const line of wrap(ctx, content.subject, SIZE - pad * 2)) {
    ctx.fillText(line, pad, y);
    y += 64;
  }
  ctx.font = font(500, 44);
  ctx.fillStyle = '#ccfbf1';
  ctx.fillText(content.exam, pad, y);

  ctx.fillStyle = '#ffffff';
  ctx.font = font(800, 220);
  ctx.fillText(content.percent, pad - 8, 640);

  ctx.font = font(600, content.grade ? 52 : 42);
  ctx.fillText(content.grade ?? t('share.cardPartial'), pad, 740);
  ctx.font = font(500, 44);
  ctx.fillStyle = '#ccfbf1';
  ctx.fillText(content.points, pad, 810);
  ctx.fillText(content.meta, pad, 870);

  ctx.fillStyle = 'rgba(255,255,255,0.75)';
  ctx.font = font(500, 34);
  ctx.fillText(t('share.cardFooter'), pad, SIZE - 80);

  return new Promise((resolve, reject) =>
    canvas.toBlob((blob) => (blob ? resolve(blob) : reject(new Error('No image'))), 'image/png'),
  );
}
