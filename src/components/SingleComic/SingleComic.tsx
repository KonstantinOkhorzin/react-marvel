import { Box, Typography } from '@mui/material';

import { Container, Description, Price, LinkToBack } from './SingleComic.styled';

const SingleComic = () => {
  return (
    <Container>
      <img src='' alt='' />
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
        <Typography variant='h3' component='h2'></Typography>
        <Description></Description>
        <Description></Description>
        <Description></Description>
        <Price></Price>
      </Box>
      <LinkToBack href=''>Back to all</LinkToBack>
    </Container>
  );
};

export default SingleComic;
