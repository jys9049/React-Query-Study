import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from '../App';
import { lazy } from 'react';

const QueryPage = lazy(() => import('../pages/query'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/query',
    element: <QueryPage />,
  },
]);

export default router;
