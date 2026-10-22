import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
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

describe('WorkedExample', () => {
  it('uncovers the solution one step at a time, asking to think ahead', async () => {
    const user = userEvent.setup();
    render(
      <WorkedExample
        task={task}
        exam={exam}
        number={2}
        actions={<button>Megoldom egyedül</button>}
      />,
    );
    expect(screen.getByText('2. kidolgozott példa')).toBeInTheDocument();
    expect(screen.queryByText('Szorzás 100-zal.')).not.toBeInTheDocument();
    expect(screen.getByText(/Hogyan kezdenél hozzá/)).toBeInTheDocument();
    // The student can stop and try alone at any time.
    expect(screen.getByRole('button', { name: 'Megoldom egyedül' })).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: /Első lépés/ }));
    expect(screen.getByText('Szorzás 100-zal.')).toBeInTheDocument();
    expect(screen.getByText(/Mi lehet a következő lépés/)).toBeInTheDocument();
    expect(screen.getByText('Még 2 lépés van hátra.')).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: /Következő lépés/ }));
    expect(screen.getByText('9x + 20 = 200.')).toBeInTheDocument();
    expect(screen.queryByText('x = 20')).not.toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: /Végeredmény/ }));
    expect(screen.getByText('x = 20')).toBeInTheDocument();
    expect(screen.getByText(/ezt a feladatot oldod meg te/)).toBeInTheDocument();
  });

  it('can show the whole solution at once', async () => {
    render(<WorkedExample task={task} exam={exam} number={1} actions={null} />);
    await userEvent.click(screen.getByRole('button', { name: /Az egész megoldás/ }));
    for (const text of ['Szorzás 100-zal.', '9x + 20 = 200.', 'x = 20'])
      expect(screen.getByText(text)).toBeInTheDocument();
  });

  it('opens every step at once when the student comes back from trying', () => {
    render(<WorkedExample task={task} exam={exam} number={1} showAll actions={null} />);
    for (const text of ['Szorzás 100-zal.', '9x + 20 = 200.', 'x = 20'])
      expect(screen.getByText(text)).toBeInTheDocument();
  });
});
