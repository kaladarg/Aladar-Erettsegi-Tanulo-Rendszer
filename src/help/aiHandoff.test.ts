import { describe, expect, it } from 'vitest';
import type { Exam, Task } from '@/content/schema.types';
import { AI_CHATS, essayHandoffPrompt, tutorHandoffPrompt } from './aiHandoff';

const task: Task = {
  id: '6',
  number: '6.',
  type: 'essay',
  text: 'Mutassa be az áprilisi törvényeket!',
  maxPoints: 10,
  sourceRefs: ['src-1'],
  fields: [{ id: '6-f1', kind: 'essay' }],
  scoring: {
    criteria: [
      { id: 'c1', label: 'Tartalom', maxPoints: 6, levels: [{ points: 6, description: 'Teljes' }] },
      { id: 'c2', label: 'Nyelv', maxPoints: 4 },
    ],
  },
  explanation: 'A jobbágyfelszabadítás a legfontosabb.',
};
const exam = {
  id: 'x',
  subject: 'tortenelem',
  title: 'Történelem középszint',
  sources: [
    { id: 'src-1', kind: 'text', title: 'Törvény', text: 'Az úrbéri szolgálatok megszűnnek.' },
  ],
  parts: [{ id: 'II', title: 'II.', maxPoints: 10, tasks: [task] }],
} as unknown as Exam;

describe('AI chat hand-off', () => {
  it('links only to chats over https', () => {
    for (const chat of AI_CHATS) expect(chat.url).toMatch(/^https:\/\//);
  });

  it('gives the task and sources but not the marking scheme', () => {
    const prompt = tutorHandoffPrompt(exam, task);
    expect(prompt).toContain('történelem');
    expect(prompt).toContain('Mutassa be az áprilisi törvényeket!');
    expect(prompt).toContain('Az úrbéri szolgálatok megszűnnek.');
    expect(prompt).toContain('A megoldást ne mondd meg');
    expect(prompt).not.toContain('jobbágyfelszabadítás');
    expect(prompt).toContain('Kérdésem: Mit kér ez a feladat');
  });

  it('adds the question and the answer only when given', () => {
    const prompt = tutorHandoffPrompt(exam, task, { question: 'Mi az úrbér?', answer: 'Adó.' });
    expect(prompt).toContain('Kérdésem: Mi az úrbér?');
    expect(prompt).toContain('Az eddigi válaszom:\nAdó.');
    expect(tutorHandoffPrompt(exam, task)).not.toContain('Az eddigi válaszom');
  });

  it('asks for essay feedback by the rubric', () => {
    const prompt = essayHandoffPrompt(exam, task, 'Az áprilisi törvények fontosak voltak.');
    expect(prompt).toContain('- Tartalom (legfeljebb 6 pont)');
    expect(prompt).toContain('   - 6 pont: Teljes');
    expect(prompt).toContain('- Nyelv (legfeljebb 4 pont)');
    expect(prompt).toContain('Az esszém:\nAz áprilisi törvények fontosak voltak.');
  });
});
