import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { CircularProgress } from '@mui/material';

import { AppWrapper } from './Layout.styled';
import AppHeader from './components/AppHeader';

const Layout = () => {
  return (
    <AppWrapper>
      <AppHeader />
      <Suspense fallback={<CircularProgress sx={{ margin: '0 auto' }} />}>
        <Outlet />
      </Suspense>
    </AppWrapper>
  );
};

export default Layout;
