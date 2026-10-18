# Design system

Calm, friendly and readable for teenagers. All values live in [`src/design/tokens.css`](../src/design/tokens.css) and are exposed as Tailwind utilities in [`src/index.css`](../src/index.css). Do not use raw hex colors or arbitrary sizes in components.

## Color tokens

| Token (Tailwind)                                    | Use                                                          |
| --------------------------------------------------- | ------------------------------------------------------------ |
| `bg-bg`, `bg-surface`, `bg-surface-muted`           | page, cards, subtle fills                                    |
| `border-border`, `border-border-strong`             | dividers, input and control outlines (strong = 3:1 contrast) |
| `text-text`, `text-muted`                           | body text, secondary text                                    |
| `bg-primary` / `text-primary-fg`                    | main actions (teal)                                          |
| `bg-primary-soft` / `text-primary-soft-fg`          | selected states, icon chips                                  |
| `success`, `warning`, `danger`, `info` (+ `-soft`)  | feedback; text on `-soft` uses `text-text`                   |
| `text-subject-matematika`, `-tortenelem`, `-magyar` | subject accents (icons only)                                 |
| `outline-focus`                                     | focus ring                                                   |

Every listed text/background pair is checked against WCAG 2.2 AA in `src/design/tokens.test.ts`, for both themes. Add new pairs there when you add tokens.

## Typography

- Font: Inter (variable, self-hosted). Dyslexia-friendly option: OpenDyslexic (`data-font="dyslexic"`).
- Scale (rem): `text-xs` 13 · `sm` 14 · `base` 16 · `lg` 18 · `xl` 20 · `2xl` 24 · `3xl` 30 · `4xl` 36.
- User text size multiplies the root font size (87.5% to 150%), so always size text in rem-based utilities.

## Spacing, radius, elevation, motion

- Spacing: Tailwind's 4 px scale. Page gutter `px-4` on phones, `px-6` from `sm`.
- Radius: `rounded-sm` 6 · `rounded-md` 10 · `rounded-lg` 16 · `rounded-full`.
- Shadows: `shadow-1` (cards), `shadow-2` (raised), `shadow-3` (dialogs, toasts).
- Motion: `--motion-fast` 120 ms, `--motion-base` 200 ms; both become 0 with the system "reduce motion" setting or the in-app switch.

## Components (`src/design/ui`)

`Button` (primary, secondary, ghost, danger, link; sm, md, lg, icon), `Card`, `Badge`, `SwitchField`, `SegmentedControl`, `ConfirmDialog`, `Toaster` + `toast()` (with optional undo action), `Skeleton`, `EmptyState`, `PageHeader`.

Rules:

- Touch targets are at least 44 px (`min-h-11`).
- Every page starts with `PageHeader`; its `h1` receives focus after navigation.
- Icons are decorative (`aria-hidden`) unless they are the only content of a button, which then needs `aria-label`.
- Destructive actions use `ConfirmDialog` with `tone="danger"` and offer undo through a toast.
