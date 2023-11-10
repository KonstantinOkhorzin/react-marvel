import { Outlet } from 'react-router-dom';

import { AppWrapper } from './Layout.styled';
import AppHeader from '../AppHeader';

const Layout = () => {
  return (
    <AppWrapper>
      <AppHeader />
      <Outlet />
    </AppWrapper>
  );
};

export default Layout;
