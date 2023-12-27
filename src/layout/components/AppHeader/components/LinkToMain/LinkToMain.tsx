import { FC, ReactNode } from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

interface Props {
  children: ReactNode;
  to: string;
}

const LinkToMain: FC<Props> = ({ children, to }) => {
  return (
    <Button
      component={Link}
      to={to}
      sx={{
        width: 'auto',
        padding: 0,
        fontSize: 'inherit',
        fontWeight: 'inherit',
        lineHeight: 'inherit',
        textTransform: 'none',
        '&: hover': {
          backgroundColor: 'transparent',
        },
      }}
    >
      {children}
    </Button>
  );
};

export default LinkToMain;
