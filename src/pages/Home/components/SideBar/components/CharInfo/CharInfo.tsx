import { FC } from 'react';
import { Typography, Button, Box } from '@mui/material';
import { useLocation } from 'react-router-dom';

import {
  Header,
  Poster,
  ButtonGroup,
  Description,
  ComicList,
  Comic,
  ComicLink,
} from './CharInfo.styled';
import { ICharacter } from '../../../../../../types';

interface Props {
  char: ICharacter;
}

const CharInfo: FC<Props> = ({
  char: { name, thumbnail, description, homepage, wiki, comics },
}) => {
  const location = useLocation();

  return (
    <>
      <Header>
        <Poster
          isDefaultImage={
            thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg'
          }
          src={thumbnail}
          alt={name}
        />
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <Typography variant='h3' component='h2' sx={{ textTransform: 'uppercase' }}>
            {name}
          </Typography>
          <ButtonGroup>
            <Button href={homepage} target='_blank' variant='contained'>
              Homepage
            </Button>
            <Button href={wiki} target='_blank' variant='contained' color='secondary'>
              Wiki
            </Button>
          </ButtonGroup>
        </Box>
      </Header>
      <Description>{description}</Description>
      {comics.length ? (
        <>
          <Typography variant='h4' component='h3' mt='10px'>
            Comics:
          </Typography>
          <ComicList>
            {comics
              .filter((_, index) => index < 10)
              .map(({ name, id }) => (
                <Comic key={id}>
                  <ComicLink to={`/comics/${id}`} state={{ from: location }}>
                    {name}
                  </ComicLink>
                </Comic>
              ))}
          </ComicList>
        </>
      ) : null}
    </>
  );
};

export default CharInfo;
