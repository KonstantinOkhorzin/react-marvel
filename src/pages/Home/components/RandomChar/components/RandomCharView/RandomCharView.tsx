import { FC } from 'react';
import { Typography, Button } from '@mui/material';

import { Wrapper, Poster, Info, Description, ButtonGroup } from './RandomCharView.styled';
import { ICharacter } from '../../../../../../types';
import { truncateDescription } from '../../../../../../helpers';

interface Props {
  char: ICharacter;
}

const RandomCharView: FC<Props> = ({ char: { name, description, thumbnail, homepage, wiki } }) => {
  return (
    <Wrapper>
      <Poster path={thumbnail} src={thumbnail} alt='' />
      <Info>
        <Typography variant='h3' component='h2' sx={{ textTransform: 'uppercase' }}>
          {name}
        </Typography>
        <Description>{truncateDescription(description)}</Description>
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
