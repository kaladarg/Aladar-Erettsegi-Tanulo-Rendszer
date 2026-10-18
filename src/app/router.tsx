import { createBrowserRouter, createMemoryRouter, type RouteObject } from 'react-router';
import { HomePage } from '@/features/home/HomePage';
import { NotFoundPage, RouteError } from './ErrorScreens';
import { Layout } from './Layout';

/**
 * The portable build (VITE_PORTABLE=1) runs inside a frame it does not control,
 * such as a shared preview link, so it keeps the route in memory instead of the
 * address bar.
 */
const PORTABLE = import.meta.env.VITE_PORTABLE === '1';

export function createRouter() {
  const routes: RouteObject[] = [
    {
      // Full-screen workspace without the app navigation.
      path: 'feladatsorok/:examId/gyakorlas',
      errorElement: <RouteError />,
      lazy: async () => ({
        Component: (await import('@/features/workspace/WorkspacePage')).WorkspacePage,
      }),
    },
    {
      path: 'feladatsorok/:examId/vizsga',
      errorElement: <RouteError />,
      lazy: async () => ({
        Component: (await import('@/features/workspace/WorkspacePage')).ExamWorkspacePage,
      }),
    },
    {
      element: <Layout />,
      errorElement: <RouteError />,
      children: [
        { index: true, element: <HomePage /> },
        // Secondary screens load on demand to keep the first load small.
        {
          path: 'feladatsorok',
          lazy: async () => ({
            Component: (await import('@/features/exams/ExamBrowserPage')).ExamBrowserPage,
          }),
        },
        {
          path: 'feladatsorok/:examId',
          lazy: async () => ({
            Component: (await import('@/features/exams/ExamOverviewPage')).ExamOverviewPage,
          }),
        },
        {
          path: 'feladatsorok/:examId/eredmeny/:attemptId',
          lazy: async () => ({
            Component: (await import('@/features/results/ResultsPage')).ResultsPage,
          }),
        },
        {
          path: 'statisztika',
          lazy: async () => ({
            Component: (await import('@/features/stats/StatsPage')).StatsPage,
          }),
        },
        {
          path: 'beallitasok',
          lazy: async () => ({
            Component: (await import('@/features/settings/SettingsPage')).SettingsPage,
          }),
        },
        {
          path: 'nevjegy',
          lazy: async () => ({
            Component: (await import('@/features/about/AboutPage')).AboutPage,
          }),
        },
        { path: '*', element: <NotFoundPage /> },
      ],
    },
  ];
  if (PORTABLE) return createMemoryRouter(routes);
  // Vite's BASE_URL ends with a slash; the router expects none.
  return createBrowserRouter(routes, {
    basename: import.meta.env.BASE_URL.replace(/\/$/, '') || '/',
  });
}
