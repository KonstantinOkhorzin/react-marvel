import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';

interface Props {
  children: string;
  to: string;
}

const LinkItem: FC<Props> = ({ children, to }) => {
  return (
    <Button
      component={NavLink}
      to={to}
      sx={{
        width: 'auto',
        padding: 0,
        minWidth: 'auto',
        fontSize: 'inherit',
        fontWeight: 'inherit',
        lineHeight: 'inherit',
        textTransform: 'none',
        '&: hover': {
          color: 'primary.main',
          backgroundColor: 'transparent',
        },
        '&.active': {
          color: 'primary.main',
        },
      }}
    >
      {children}
    </Button>
  );
};

export default LinkItem;
