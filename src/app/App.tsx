import { lazy } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Layout from '../layout';
import Home from '../pages/Home';

const Comics = lazy(() => import('../pages/Comics'));
const SingleComic = lazy(() => import('../pages/SingleComic'));
const SingleChar = lazy(() => import('../pages/SingleChar'));
const NotFound = lazy(() => import('../pages/NotFound'));

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: 'comics',
          element: <Comics />,
        },
        {
          path: 'comics/:comicId',
          element: <SingleComic />,
        },
        {
          path: 'characters/:charId',
          element: <SingleChar />,
        },
        {
          path: '*',
          element: <NotFound />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
