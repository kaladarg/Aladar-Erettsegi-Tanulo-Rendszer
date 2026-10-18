import type { Part } from '@/content/schema.types';
import { useAnswers } from '@/state/answerStore';
import { choiceKey } from '@/storage/attempts';

/** Task ids the student did not pick in a decided choice group (shown dimmed). */
export function useUnchosenTasks(part: Part): Set<string> {
  const answers = useAnswers((state) => state.answers);
  const unchosen = new Set<string>();
  part.choices?.forEach((choice, index) => {
    const picked = answers[choiceKey(part.id, index)];
    if (!Array.isArray(picked) || picked.length < choice.pick) return;
    for (const unit of choice.taskIds) {
      if (picked.includes(unit)) continue;
      // A unit is a task id or a group of sub-tasks.
      for (const task of part.tasks)
        if (task.id === unit || task.group === unit) unchosen.add(task.id);
    }
  });
  return unchosen;
}
