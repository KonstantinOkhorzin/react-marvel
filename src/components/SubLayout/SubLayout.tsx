import { FC, ReactElement } from 'react';
import { Box } from '@mui/material';

import AppBanner from '../AppBanner';

interface ISubLayoutProps {
  children: ReactElement;
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
