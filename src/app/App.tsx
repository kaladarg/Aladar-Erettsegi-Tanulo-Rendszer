import { useEffect, useState } from 'react';
import { RouterProvider } from 'react-router';
import { Toaster } from '@/design/ui/Toaster';
import { useSettings } from '@/state/settingsStore';
import { applyAppearance, watchSystemTheme } from './appearance';
import { AppErrorBoundary } from './ErrorScreens';
import { PwaPrompt } from './PwaPrompt';
import { createRouter } from './router';

export function App() {
  const [router] = useState(createRouter);
  const load = useSettings((state) => state.load);

  useEffect(() => {
    void load();
    return watchSystemTheme(() => applyAppearance(useSettings.getState().settings));
  }, [load]);

  return (
    <AppErrorBoundary>
      <RouterProvider router={router} />
      <Toaster />
      {import.meta.env.PROD && <PwaPrompt />}
    </AppErrorBoundary>
  );
}
