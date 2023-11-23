import { FC } from 'react';
import { Button } from '@mui/material';

import { Container, List, Item, Name } from './CharListView.styled';
import { ICharacter } from '../../../types';

interface Props {
  charList: ICharacter[];
}

const CharListView: FC<Props> = ({ charList }) => {
  return (
    <Container>
      <List>
        {charList.map(({ id, name, thumbnail }) => (
          <Item key={id}>
            <img src={thumbnail} alt='' />
            <Name>{name}</Name>
          </Item>
        ))}
      </List>
      <Button variant='contained' sx={{ width: '170px' }}>
        load more
      </Button>
    </Container>
  );
};

export default CharListView;
