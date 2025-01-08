import { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';

import { Container, Description, Price, Content } from './DetailsComic.styled';
import LinkToBack from '../../../../components/LinkToBack';
import { IComic } from '../../../../types';
import { ROUTES } from '../../../../constants';

interface Props {
  comic: IComic;
}

const DetailsComic: FC<Props> = ({
  comic: { thumbnail, title, description, pageCount, language, price },
}) => {
  const location = useLocation();

  return (
    <Container>
      <Content>
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
      </Content>
      <LinkToBack to={location.state?.from ?? `/${ROUTES.COMICS}`}>Back to all</LinkToBack>
    </Container>
  );
};

export default DetailsComic;
