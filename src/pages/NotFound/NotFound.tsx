import { Box, Typography } from '@mui/material';
import LinkToBack from '../../components/LinkToBack';
import notFoundImg from '../../assets/img/404.jpg';

const NotFound = () => {
  return (
    <Box
      component='main'
      display='flex'
      flexDirection='column'
      alignItems='center'
      justifyContent='center'
      gap='15px'
      sx={{ height: '100vh', padding: '15px' }}
    >
      <img src={notFoundImg} alt='404 page not found' />
      <Typography color='primary' variant='h1' align='center'>
        PAGE NOT FOUND
      </Typography>
      <LinkToBack to='/'>GO TO MAIN</LinkToBack>
    </Box>
  );
};

export default NotFound;
