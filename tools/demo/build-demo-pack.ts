/**
 * Generates the public demo content pack (public/demo-pack) from the sample
 * papers in demoExams.ts: a printable PDF per paper, laid out like a real
 * exam, plus exam.json with exact answer-box coordinates and manifest.json.
 *   npm run demo:build
 */
import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { join, resolve } from 'node:path';
import fontkit from '@pdf-lib/fontkit';
import { PDFDocument, rgb, type PDFFont, type PDFPage } from 'pdf-lib';
import { DEFAULT_LEVELS, DEFAULT_SUBJECTS } from '../../src/content/catalog';
import type { Exam, Field, Part, Rect, SourceMaterial, Task } from '../../src/content/schema.types';
import { buildPack } from '../build-pack';
import { sha256 } from '../lib/hash';
import { isMain } from '../lib/isMain';
import { DEMO_EXAMS, type DemoExam, type DemoSource, type DemoTask } from './demoExams';

const OUT = resolve(import.meta.dirname, '../../public/demo-pack');
const FONT_DIR = resolve(import.meta.dirname, '../../node_modules/dejavu-fonts-ttf/ttf');
/** Fixed so regenerating unchanged content produces identical files. */
const FIXED_DATE = new Date('2026-01-01T00:00:00Z');
const UPDATED_AT = '2026-10-18';

const PAGE_W = 595.28;
const PAGE_H = 841.89;
const MARGIN = 56;
const CONTENT_W = PAGE_W - 2 * MARGIN;
const BOTTOM = PAGE_H - MARGIN - 18;
const INK = rgb(0.1, 0.1, 0.1);
const MUTED = rgb(0.4, 0.4, 0.4);
const LINE = rgb(0.55, 0.55, 0.55);

const plain = (text: string) => text.replace(/\*\*|\*|\$/g, '');

class Layout {
  page!: PDFPage;
  /** Distance from the top edge of the current page. */
  y = 0;
  pageNumber = 0;

  constructor(
    private readonly doc: PDFDocument,
    private readonly regular: PDFFont,
    private readonly bold: PDFFont,
    private readonly header: string,
  ) {}

  newPage() {
    this.page = this.doc.addPage([PAGE_W, PAGE_H]);
    this.pageNumber++;
    this.page.drawText(this.header, {
      x: MARGIN,
      y: PAGE_H - 32,
      size: 8,
      font: this.regular,
      color: MUTED,
    });
    this.y = MARGIN;
  }

  ensure(height: number) {
    if (this.y + height > BOTTOM) this.newPage();
  }

  wrap(text: string, size: number, width: number, bold = false): string[] {
    const font = bold ? this.bold : this.regular;
    const lines: string[] = [];
    for (const paragraph of text.split('\n')) {
      if (paragraph.trim() === '') {
        lines.push('');
        continue;
      }
      let line = '';
      for (const word of paragraph.split(/\s+/)) {
        const candidate = line ? `${line} ${word}` : word;
        if (font.widthOfTextAtSize(candidate, size) > width && line) {
          lines.push(line);
          line = word;
        } else line = candidate;
      }
      lines.push(line);
    }
    return lines;
  }

  /** Draws wrapped text at the cursor and advances it. */
  text(
    text: string,
    { size = 10.5, bold = false, x = MARGIN, width = CONTENT_W, color = INK, gap = 4 } = {},
  ) {
    const lineHeight = size * 1.4;
    for (const line of this.wrap(text, size, width, bold)) {
      this.ensure(lineHeight);
      if (line) {
        this.page.drawText(line, {
          x,
          y: PAGE_H - this.y - size,
          size,
          font: bold ? this.bold : this.regular,
          color,
        });
      }
      this.y += line ? lineHeight : lineHeight / 2;
    }
    this.y += gap;
  }

  rightText(text: string, size: number, yTop: number, bold = false) {
    const font = bold ? this.bold : this.regular;
    this.page.drawText(text, {
      x: MARGIN + CONTENT_W - font.widthOfTextAtSize(text, size),
      y: PAGE_H - yTop - size,
      size,
      font,
      color: INK,
    });
  }

  box(x: number, yTop: number, w: number, h: number): Rect {
    this.page.drawRectangle({
      x,
      y: PAGE_H - yTop - h,
      width: w,
      height: h,
      borderColor: LINE,
      borderWidth: 0.8,
    });
    return toRect(this.pageNumber, x, yTop, w, h);
  }
}

const round = (value: number) => Math.round(value * 10_000) / 10_000;
function toRect(page: number, x: number, yTop: number, w: number, h: number): Rect {
  return {
    page,
    x: round(x / PAGE_W),
    y: round(yTop / PAGE_H),
    w: round(w / PAGE_W),
    h: round(h / PAGE_H),
  };
}

const SMALL_BOX: Partial<Record<Field['kind'], number>> = {
  text: 170,
  number: 120,
  choice: 70,
  multi: 110,
};

function layoutField(layout: Layout, field: DemoTask['fields'][number]): Field {
  const small = SMALL_BOX[field.kind];
  if (small) {
    const unitWidth = field.unit ? 34 : 0;
    const labelWidth = CONTENT_W - small - unitWidth - 16;
    const labelLines = layout.wrap(field.label ?? 'Válasz:', 10.5, labelWidth);
    const rowHeight = Math.max(labelLines.length * 14.7, 24) + 8;
    layout.ensure(rowHeight);
    const top = layout.y;
    layout.text(field.label ?? 'Válasz:', { width: labelWidth, gap: 0 });
    const boxX = MARGIN + CONTENT_W - small - unitWidth;
    const pdfRect = layout.box(boxX, top - 2, small, 24);
    if (field.unit) {
      layout.page.drawText(field.unit, {
        x: boxX + small + 6,
        y: PAGE_H - top - 17,
        size: 10.5,
        font: layoutFont(layout),
      });
    }
    layout.y = top + rowHeight;
    return { ...field, pdfRect };
  }
  const height = field.kind === 'work' ? 170 : field.kind === 'textarea' ? 90 : 0;
  if (field.kind === 'essay') {
    layout.newPage();
    layout.text(field.label ?? 'Válasz:', { bold: true });
    const top = layout.y;
    const pdfRect = layout.box(MARGIN, top, CONTENT_W, BOTTOM - top);
    layout.y = BOTTOM;
    return { ...field, pdfRect };
  }
  layout.ensure(height + 20);
  layout.text(field.label ?? 'Válasz:', { size: 9.5, color: MUTED, gap: 2 });
  const pdfRect = layout.box(MARGIN, layout.y, CONTENT_W, height);
  layout.y += height + 10;
  return { ...field, pdfRect };
}

// The regular font is needed for units; Layout keeps it private, so expose it here.
let currentRegular: PDFFont;
const layoutFont = (_layout: Layout) => currentRegular;

/** Estimated height of a task, so it can start on a new page instead of splitting. */
function estimateTask(layout: Layout, task: DemoTask): number {
  const line = 14.7;
  let height =
    40 + layout.wrap(task.pdfText ?? plain(task.text), 10.5, CONTENT_W - 50).length * line;
  const listed = task.fields.find(
    (f) => (f.kind === 'choice' || f.kind === 'multi') && task.type !== 'true_false',
  );
  height += (listed?.options?.length ?? 0) * line;
  for (const field of task.fields) {
    const small = SMALL_BOX[field.kind];
    if (small)
      height +=
        Math.max(layout.wrap(field.label ?? '', 10.5, CONTENT_W - small - 50).length * line, 24) +
        8;
    else if (field.kind === 'work') height += 200;
    else if (field.kind === 'textarea') height += 120;
  }
  return height;
}

function layoutTask(layout: Layout, task: DemoTask): Task {
  const estimate = estimateTask(layout, task);
  layout.ensure(estimate < BOTTOM - MARGIN ? estimate : 60);
  const page = layout.pageNumber;
  const top = layout.y;
  layout.rightText(`${task.maxPoints} pont`, 9.5, top + 1);
  layout.text(task.number, { bold: true, size: 11, gap: 2 });
  const { pdfText, ...rest } = task;
  layout.text(pdfText ?? plain(task.text), { width: CONTENT_W - 50 });

  const listed = task.fields.find(
    (f) => (f.kind === 'choice' || f.kind === 'multi') && task.type !== 'true_false',
  );
  if (listed?.options) {
    for (const option of listed.options)
      layout.text(`${option.value})  ${option.label}`, { x: MARGIN + 14, gap: 0 });
    layout.y += 6;
  }
  const fields = task.fields.map((field) => layoutField(layout, field));
  const end = layout.y;
  layout.y += 14;
  const pdfRect =
    page === layout.pageNumber ? toRect(page, MARGIN, top, CONTENT_W, end - top) : undefined;
  return { ...rest, fields, ...(pdfRect ? { pdfRect } : {}) };
}

function layoutSource(layout: Layout, source: DemoSource): SourceMaterial {
  const lines = layout.wrap(plain(source.text ?? ''), 10, CONTENT_W - 24);
  const height = 24 + lines.length * 14 + (source.credit ? 16 : 0) + 12;
  layout.ensure(height);
  const top = layout.y;
  const pdfRect = layout.box(MARGIN, top, CONTENT_W, height);
  layout.y += 10;
  if (source.title)
    layout.text(source.title, { bold: true, x: MARGIN + 12, width: CONTENT_W - 24, size: 10.5 });
  layout.text(plain(source.text ?? ''), {
    x: MARGIN + 12,
    width: CONTENT_W - 24,
    size: 10,
    gap: 2,
  });
  if (source.credit)
    layout.text(source.credit, { x: MARGIN + 12, width: CONTENT_W - 24, size: 8.5, color: MUTED });
  layout.y = top + height + 14;
  return { ...source, pdfRects: [pdfRect] };
}

export async function renderExam(demo: DemoExam): Promise<{ exam: Exam; pdf: Uint8Array }> {
  const doc = await PDFDocument.create();
  doc.registerFontkit(fontkit);
  const regular = await doc.embedFont(await readFile(join(FONT_DIR, 'DejaVuSerif.ttf')), {
    subset: true,
  });
  const bold = await doc.embedFont(await readFile(join(FONT_DIR, 'DejaVuSerif-Bold.ttf')), {
    subset: true,
  });
  currentRegular = regular;
  for (const d of [doc]) {
    d.setTitle(demo.title);
    d.setAuthor('Érettségi Gyakorló');
    d.setSubject('Nem hivatalos mintafeladatsor');
    d.setProducer('Érettségi Gyakorló demo pack generator');
    d.setCreator('Érettségi Gyakorló');
    d.setCreationDate(FIXED_DATE);
    d.setModificationDate(FIXED_DATE);
  }

  const layout = new Layout(doc, regular, bold, `${demo.title} · nem hivatalos mintafeladatsor`);
  layout.newPage();
  layout.text(demo.title, { bold: true, size: 17, gap: 6 });
  layout.text(
    'Ez a feladatsor az Érettségi Gyakorló bemutatójához készült. Nem hivatalos érettségi feladatsor; a felépítése a középszintű írásbeli vizsgát követi.',
    { color: MUTED, size: 10 },
  );
  for (const part of demo.parts) {
    layout.text(`${part.title}: ${part.timeLimitMinutes} perc, ${part.maxPoints} pont`, { gap: 0 });
  }
  layout.text(`Összesen: ${demo.maxPoints} pont`, { bold: true, gap: 10 });

  const sources = new Map<string, SourceMaterial>();
  const parts: Part[] = [];
  for (const [index, part] of demo.parts.entries()) {
    if (index > 0) layout.newPage();
    layout.text(part.title, { bold: true, size: 14, gap: 2 });
    layout.text(
      `Időtartam: ${part.timeLimitMinutes} perc · Elérhető pontszám: ${part.maxPoints} pont`,
      {
        size: 9.5,
        color: MUTED,
      },
    );
    if (part.instructions) layout.text(part.instructions, { size: 10, gap: 10 });
    for (const id of part.sourceIds ?? []) {
      const source = demo.sources?.find((s) => s.id === id);
      if (source) sources.set(id, layoutSource(layout, source));
    }
    const { sourceIds: _ids, tasks, ...partRest } = part;
    parts.push({ ...partRest, tasks: tasks.map((task) => layoutTask(layout, task)) } as Part);
  }

  const total = doc.getPageCount();
  doc.getPages().forEach((page, i) => {
    const label = `${i + 1} / ${total}`;
    page.drawText(label, {
      x: PAGE_W - MARGIN - regular.widthOfTextAtSize(label, 8),
      y: 30,
      size: 8,
      font: regular,
      color: MUTED,
    });
  });

  const pdf = await doc.save({ useObjectStreams: false });
  const { subjectName: _name, parts: _parts, sources: demoSources, ...meta } = demo;
  const exam: Exam = {
    schemaVersion: 1,
    ...meta,
    source: {
      publisher: 'Érettségi Gyakorló (saját mintafeladatsor)',
      examPdf: { file: 'feladatlap.pdf', sha256: sha256(pdf), pages: total, label: 'Feladatlap' },
    },
    ...(demoSources ? { sources: demoSources.map((s) => sources.get(s.id) ?? s) } : {}),
    parts,
    review: {
      status: 'reviewed',
      reviewedBy: ['Érettségi Gyakorló'],
      notes: ['Saját készítésű, nem hivatalos feladatsor.'],
    },
  };
  return { exam, pdf };
}

export async function buildDemoPack(out = OUT) {
  await rm(join(out, 'exams'), { recursive: true, force: true });
  await mkdir(out, { recursive: true });
  await writeFile(
    join(out, 'pack.json'),
    `${JSON.stringify(
      {
        packId: 'demo',
        title: 'Mintafeladatsorok',
        notice: 'Saját készítésű, nem hivatalos mintafeladatsorok az alkalmazás kipróbálásához.',
        repositoryUrl: 'https://github.com/kaladarg/Aladar-Erettsegi-Tanulo-Rendszer',
        subjects: DEFAULT_SUBJECTS,
        levels: DEFAULT_LEVELS,
      },
      null,
      2,
    )}\n`,
  );
  for (const demo of DEMO_EXAMS) {
    const { exam, pdf } = await renderExam(demo);
    const dir = join(out, 'exams', exam.id);
    await mkdir(dir, { recursive: true });
    await writeFile(join(dir, 'feladatlap.pdf'), pdf);
    await writeFile(join(dir, 'exam.json'), `${JSON.stringify(exam, null, 2)}\n`);
  }
  return buildPack(out, UPDATED_AT);
}

if (isMain(import.meta.url)) {
  const { manifest, problems } = await buildDemoPack();
  console.log(`Demo pack: ${manifest.exams.length} exam(s) in ${OUT}`);
  for (const problem of problems) console.error(`  ${problem}`);
  if (problems.length) process.exit(1);
}
