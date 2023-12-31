import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from '../layout';
import Home from '../pages/Home';

const Comics = lazy(() => import('../pages/Comics'));
const SingleComic = lazy(() => import('../pages/SingleComic'));
const SingleChar = lazy(() => import('../pages/SingleChar'));
const NotFound = lazy(() => import('../pages/NotFound'));

function App() {
  return (
    <Routes >
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='comics' element={<Comics />} />
        <Route path='comics/:comicId' element={<SingleComic />} />
        <Route path='characters/:charId' element={<SingleChar />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
