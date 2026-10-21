import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import type { Exam, Task } from '@/content/schema.types';
import { WorkedExample } from './WorkedExample';

const task = {
  id: '13a',
  number: '13. a)',
  type: 'calculation',
  text: 'Oldja meg!',
  maxPoints: 3,
  fields: [{ id: 'f', kind: 'number', label: 'x =' }],
  scoring: {
    steps: [
      { id: 's1', points: 1, description: 'Szorzás 100-zal.' },
      {
        id: 's2',
        points: 1,
        description: '9x + 20 = 200.',
        auto: { fieldIds: ['w'], alternatives: [[['9x'], ['200']]] },
      },
    ],
    rules: [{ id: 'r', points: 1, fieldIds: ['f'], answer: { kind: 'number', accepted: [20] } }],
  },
} as unknown as Task;
const exam = { id: 'm', parts: [] } as unknown as Exam;

const enabledReveal = () =>
  screen
    .getAllByRole<HTMLButtonElement>('button', { name: 'Megnézem' })
    .find((button) => !button.disabled)!;

describe('WorkedExample', () => {
  it('shows every line of a full example and lets the student go on', async () => {
    const onDone = vi.fn();
    render(<WorkedExample task={task} exam={exam} hidden={0} last onDone={onDone} />);
    expect(screen.getByText('Kidolgozott példa')).toBeInTheDocument();
    expect(screen.getByText('Szorzás 100-zal.')).toBeInTheDocument();
    expect(screen.getByText('x = 20')).toBeInTheDocument();
    await userEvent.click(screen.getByRole('button', { name: /Befejezés/ }));
    expect(onDone).toHaveBeenCalledWith({ same: 0, hidden: 0 });
  });

  it('hides the last lines and uncovers them one by one', async () => {
    const user = userEvent.setup();
    const onDone = vi.fn();
    render(<WorkedExample task={task} exam={exam} hidden={2} last={false} onDone={onDone} />);
    expect(screen.getByText('Szorzás 100-zal.')).toBeInTheDocument();
    expect(screen.queryByText('9x + 20 = 200.')).not.toBeInTheDocument();
    const next = screen.getByRole('button', { name: /Következő/ });
    expect(next).toBeDisabled();

    // Only the first hidden line can be written now.
    const [first, second] = screen.getAllByRole('textbox');
    expect(second).toBeDisabled();
    await user.type(first!, '9x + 20 = 200');
    await user.click(enabledReveal());
    expect(screen.getByText('9x + 20 = 200.')).toBeInTheDocument();
    expect(screen.getByText(/megvannak az útmutató kulcsszavai/)).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: /Nekem is ez jött ki/ }));

    await user.type(screen.getAllByRole('textbox')[1]!, 'x = 2');
    await user.click(enabledReveal());
    expect(screen.getByText(/nem találtam meg az útmutató kulcsszavait/)).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: /Mást írtam/ }));

    expect(screen.getByText('1 / 2 sort írtál meg jól')).toBeInTheDocument();
    await user.click(next);
    expect(onDone).toHaveBeenCalledWith({ same: 1, hidden: 2 });
  });
});
