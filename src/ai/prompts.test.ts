import { describe, expect, it } from 'vitest';
import type { Exam, Task } from '@/content/schema.types';
import { essayFeedbackPrompt, essayFeedbackSchema, tutorSystem } from './prompts';

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

describe('AI prompts', () => {
  it('gives the tutor the task, its sources and the marking scheme', () => {
    const system = tutorSystem(exam, task);
    expect(system).toContain('history');
    expect(system).toContain('Mutassa be az áprilisi törvényeket!');
    expect(system).toContain('Az úrbéri szolgálatok megszűnnek.');
    expect(system).toContain('Criterion "Tartalom" (6 p)');
    expect(system).toContain('A jobbágyfelszabadítás a legfontosabb.');
  });

  it('limits rubric ids to the task criteria', () => {
    const schema = essayFeedbackSchema(task) as {
      properties: { criteria: { items: { properties: { id: { enum: string[] } } } } };
    };
    expect(schema.properties.criteria.items.properties.id.enum).toEqual(['c1', 'c2']);
  });

  it('sends the essay with the rubric levels and word count', () => {
    const prompt = essayFeedbackPrompt(exam, task, 'Az áprilisi törvények fontosak voltak.');
    expect(prompt).toContain('id "c1", "Tartalom", maximum 6 p');
    expect(prompt).toContain('- 6 p: Teljes');
    expect(prompt).toContain('<essay words="5">');
  });
});
