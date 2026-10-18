import type { Exam, Field, SourceMaterial, Task } from '@/content/schema.types';
import { expectedAnswer } from '@/domain/scoring/rules';

const SUBJECTS: Record<string, string> = {
  matematika: 'mathematics',
  tortenelem: 'history',
  magyar: 'Hungarian language and literature',
};

function sourcesOf(exam: Exam, task: Task): string {
  const byId = new Map<string, SourceMaterial>((exam.sources ?? []).map((s) => [s.id, s]));
  return (task.sourceRefs ?? [])
    .map((id) => byId.get(id))
    .filter((s): s is SourceMaterial => !!s)
    .map((s) => `<source title="${s.title ?? s.id}" kind="${s.kind}">\n${s.text ?? ''}\n</source>`)
    .join('\n');
}

function markingScheme(task: Task): string {
  const fields = new Map<string, Field>(task.fields.map((f) => [f.id, f]));
  const { rules = [], steps = [], criteria = [] } = task.scoring;
  return [
    ...rules.map((r) => `- Accepted answer (${r.points} p): ${expectedAnswer(r, fields)}`),
    ...steps.map((s) => `- Step (${s.points} p): ${s.description}`),
    ...criteria.map((c) => `- Criterion "${c.label}" (${c.maxPoints} p): ${c.description ?? ''}`),
    task.explanation ? `- Explanation: ${task.explanation}` : '',
  ]
    .filter(Boolean)
    .join('\n');
}

/**
 * System prompt of the tutor in the help panel. The marking scheme is given
 * so the help is accurate; the student decides whether to see the solution.
 */
export function tutorSystem(exam: Exam, task: Task): string {
  return `You are a patient tutor helping a Hungarian secondary-school student practise for the középszintű érettségi in ${SUBJECTS[exam.subject] ?? exam.subject}. The student is working on one task from a past paper (${exam.title}).

Answer in Hungarian, in plain language a 17-year-old understands, and keep answers short: a few sentences or a short list. Help the student think: explain what the task asks, the concepts involved and how to approach it. Do not give the final answer or write the solution for them unless they clearly ask for it; if they do, give it with a brief explanation. If a question has nothing to do with the task or the subject, say so kindly in one sentence.

<task number="${task.number}" points="${task.maxPoints}">
${task.text}
</task>
${sourcesOf(exam, task)}

The official marking scheme (javítási-értékelési útmutató), for your reference only:
<marking_scheme>
${markingScheme(task)}
</marking_scheme>`;
}

export interface EssayFeedback {
  criteria: { id: string; points: number; reason: string }[];
  summary: string;
}

/** JSON schema of the essay feedback answer. */
export function essayFeedbackSchema(task: Task): Record<string, unknown> {
  const ids = (task.scoring.criteria ?? []).map((c) => c.id);
  return {
    type: 'object',
    additionalProperties: false,
    required: ['criteria', 'summary'],
    properties: {
      criteria: {
        type: 'array',
        items: {
          type: 'object',
          additionalProperties: false,
          required: ['id', 'points', 'reason'],
          properties: {
            id: { type: 'string', enum: ids },
            points: { type: 'integer' },
            reason: { type: 'string' },
          },
        },
      },
      summary: { type: 'string' },
    },
  };
}

export const ESSAY_SYSTEM = `You are an experienced Hungarian secondary-school teacher who marks középszintű érettségi essays strictly by the official marking scheme (javítási-értékelési útmutató). Rate each criterion with an integer from 0 to its maximum, following the criterion's description and levels. For each criterion give a one or two sentence reason in Hungarian that points to what is present or missing in the essay. In the summary, give the student two or three concrete, encouraging suggestions in Hungarian for improving this essay. If the essay is off-topic or empty, rate it accordingly.`;

/** The essay with its task and rubric, as the user message of the feedback request. */
export function essayFeedbackPrompt(exam: Exam, task: Task, essay: string): string {
  const criteria = (task.scoring.criteria ?? [])
    .map((c) => {
      const levels = (c.levels ?? [])
        .map((l) => `    - ${l.points} p: ${l.description}`)
        .join('\n');
      return `- id "${c.id}", "${c.label}", maximum ${c.maxPoints} p: ${c.description ?? ''}${levels ? `\n${levels}` : ''}`;
    })
    .join('\n');
  return `<task number="${task.number}">
${task.text}
</task>
${sourcesOf(exam, task)}
<rubric>
${criteria}
${task.explanation ? `Note: ${task.explanation}` : ''}
</rubric>
<essay words="${essay.trim().split(/\s+/).filter(Boolean).length}">
${essay}
</essay>`;
}
