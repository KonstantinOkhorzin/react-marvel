import { FC, ReactNode } from 'react';
import { Box } from '@mui/material';

import AppBanner from './components/AppBanner';

interface ISubLayoutProps {
  children: ReactNode;
}

const SubLayout: FC<ISubLayoutProps> = ({ children }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '50px' }}>
      <AppBanner />
      {children}
    </Box>
  );
};

export default SubLayout;
