import { Box, Typography } from '@mui/material';
import LinkToBack from '../../components/LinkToBack';

const NotFound = () => {
  return (
    <Box component='main' display='flex' flexDirection='column' alignItems='center'>
      <Typography color='primary' variant='h1'>
        404 PAGE NOT FOUND
      </Typography>
      <LinkToBack to='/'>GO TO MAIN</LinkToBack>
    </Box>
  );
};

export default NotFound;
