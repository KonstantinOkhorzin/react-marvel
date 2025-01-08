import { FC } from 'react';
import { Typography, Button, Box } from '@mui/material';
import { useLocation, Link } from 'react-router-dom';

import { Header, Poster, ButtonGroup, Description, ComicList } from './CharInfo.styled';
import { ICharacter } from '../../../../../../types';
import { truncateDescription } from '../../../../../../helpers';
import { ROUTES } from '../../../../../../constants';

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
        <Poster src={thumbnail} alt={name} path={thumbnail} />
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
      <Description>{truncateDescription(description)}</Description>
      {comics.length ? (
        <>
          <Typography variant='h4' component='h3' mt='10px'>
            Comics:
          </Typography>
          <ComicList>
            {comics
              .filter((_, index) => index < 10)
              .map(({ name, id }) => (
                <Button
                  component={Link}
                  key={id}
                  to={`/${ROUTES.COMICS}/${id}`}
                  state={{ from: location }}
                  sx={{
                    width: '100%',
                    boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
                    padding: ' 4px 10px 3px',
                    fontSize: 'inherit',
                    lineHeight: 'inherit',
                    textTransform: 'none',
                    color: 'inherit',
                    justifyContent: 'start',
                    '&: hover': {
                      backgroundColor: 'transparent',
                    },
                    '.MuiTouchRipple-ripple': {
                      transform: 'scale(1.2)',
                    },
                  }}
                >
                  {name}
                </Button>
              ))}
          </ComicList>
        </>
      ) : null}
    </>
  );
};

export default CharInfo;
