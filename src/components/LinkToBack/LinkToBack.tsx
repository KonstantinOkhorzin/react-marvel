import { FC } from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

interface Props {
  children: string;
  to: string;
}

const LinkToBack: FC<Props> = ({ children, to }) => {
  return (
    <Button
      component={Link}
      to={to}
      sx={{
        width: 'auto',
        fontWeight: 700,
        fontSize: 18,
        lineHeight: 1.3,
        textTransform: 'none',
        '&: hover': {
          color: 'primary.main',
          backgroundColor: 'transparent',
        },
      }}
    >
      {children}
    </Button>
  );
};

export default LinkToBack;
