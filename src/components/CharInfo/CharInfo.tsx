import { FC } from 'react';
import { Typography, Button, Box } from '@mui/material';

import {
  Header,
  Poster,
  ButtonGroup,
  Description,
  ComicsList,
  ComicsItem,
} from './CharInfo.styled';
import { ICharacter } from '../../types';

interface Props {
  char: ICharacter;
}

const CharInfo: FC<Props> = ({
  char: { name, thumbnail, description, homepage, wiki, comics },
}) => {
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
            <Button href={homepage} variant='contained'>
              Homepage
            </Button>
            <Button href={wiki} variant='contained' color='secondary'>
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
          <ComicsList>
            {comics
              .filter((_, index) => index < 10)
              .map(({ name }, index) => (
                <ComicsItem key={index}>{name}</ComicsItem>
              ))}
          </ComicsList>
        </>
      ) : null}
    </>
  );
};

export default CharInfo;
