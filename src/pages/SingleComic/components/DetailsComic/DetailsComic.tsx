import { FC } from 'react';
import { Box, Typography } from '@mui/material';

import { Container, Description, Price, LinkToBack } from './DetailsComic.styled';
import { IComic } from '../../../../types';

interface Props {
  comic: IComic;
}

const DetailsComic: FC<Props> = ({
  comic: { thumbnail, title, description, pageCount, language, price },
}) => {
  return (
    <Container>
      <img src={thumbnail} alt='' />
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
        <Typography variant='h3' component='h2'>
          {title}
        </Typography>
        <Description>{description}</Description>
        <Description>{pageCount}</Description>
        <Description>Language: {language}</Description>
        <Price>{price}</Price>
      </Box>
      <LinkToBack to='/comics'>Back to all</LinkToBack>
    </Container>
  );
};

export default DetailsComic;
