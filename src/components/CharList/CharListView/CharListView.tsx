import { FC } from 'react';
import { Button } from '@mui/material';

import { Container, List, Item, Name } from './CharListView.styled';
import { ICharacter } from '../../../types';

interface Props {
  charList: ICharacter[];
  onSetSelectedCharId: (id: number) => void;
  selectedCharId: number | null;
  onLoadMore: () => void;
  isLoadingMore: boolean;
}

const CharListView: FC<Props> = ({
  charList,
  onSetSelectedCharId,
  selectedCharId,
  onLoadMore,
  isLoadingMore,
}) => {
  return (
    <Container>
      <List>
        {charList.map(({ id, name, thumbnail }) => (
          <Item key={id} onClick={() => onSetSelectedCharId(id)} selected={selectedCharId === id}>
            <img src={thumbnail} alt='' />
            <Name>{name}</Name>
          </Item>
        ))}
      </List>
      <Button
        onClick={onLoadMore}
        disabled={isLoadingMore}
        variant='contained'
        sx={{ width: '170px' }}
      >
        {isLoadingMore ? 'loading...' : 'load more'}
      </Button>
    </Container>
  );
};

export default CharListView;
