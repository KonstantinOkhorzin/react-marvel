import { FC } from 'react';
import { Button } from '@mui/material';

import { Container, List } from './CharListView.styled';
import { ICharacter } from '../../../../../../types';
import CharCard from './components/CharCard';

interface Props {
  charList: ICharacter[];
  onLoadMore: () => void;
  isLoadingMore: boolean;
  canLoadMore: boolean;
}

const CharListView: FC<Props> = ({
  charList,
  onLoadMore,
  isLoadingMore,
  canLoadMore,
}) => {
  return (
    <Container>
      <List>
        {charList.map(char => (
          <CharCard
            key={char.id}
            char={char}
          />
        ))}
      </List>
      {canLoadMore && (
        <Button
          onClick={onLoadMore}
          disabled={isLoadingMore}
          variant='contained'
          sx={{ width: '170px' }}
        >
          {isLoadingMore ? 'loading...' : 'load more'}
        </Button>
      )}
    </Container>
  );
};

export default CharListView;
