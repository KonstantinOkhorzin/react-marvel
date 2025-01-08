import { lazy } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { ROUTES } from '../constants';
import Layout from '../layout';
import Home from '../pages/Home';

const Comics = lazy(() => import('../pages/Comics'));
const SingleComic = lazy(() => import('../pages/SingleComic'));
const SingleChar = lazy(() => import('../pages/SingleChar'));
const NotFound = lazy(() => import('../pages/NotFound'));

function App() {
  const router = createBrowserRouter([
    {
      path: ROUTES.HOME,
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: ROUTES.COMICS,
          element: <Comics />,
        },
        {
          path: ROUTES.SINGLE_COMIC,
          element: <SingleComic />,
        },
        {
          path: ROUTES.SINGLE_CHAR,
          element: <SingleChar />,
        },
      ],
      errorElement: <NotFound />
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
