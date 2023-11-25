import { FC } from 'react';
import { Typography, Button } from '@mui/material';

import { Wrapper, Poster, Info, Description, ButtonGroup } from './RandomCharView.styled';
import { ICharacter } from '../../../types';

interface Props {
  char: ICharacter;
}

const RandomCharView: FC<Props> = ({ char: { name, description, thumbnail, homepage, wiki } }) => {
  return (
    <Wrapper>
      <Poster
        isDefaultImage={
          thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg'
        }
        src={thumbnail}
        alt=''
      />
      <Info>
        <Typography variant='h3' component='h2' sx={{ textTransform: 'uppercase' }}>
          {name}
        </Typography>
        <Description>{description}</Description>
        <ButtonGroup>
          <Button href={homepage} target='_blank' variant='contained'>
            homepage
          </Button>
          <Button href={wiki} target='_blank' variant='contained' color='secondary'>
            Wiki
          </Button>
        </ButtonGroup>
      </Info>
    </Wrapper>
  );
};

export default RandomCharView;
