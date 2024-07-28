import { FC } from 'react';
import { Button } from '@mui/material';

import { Container, List } from './CharListView.styled';
import { ICharacter } from '../../../../../../types';
import CharCard from './components/CharCard';
import LoadingButton from '../../../../../../components/LoadingButton';

interface Props {
  charList: ICharacter[];
  onLoadMore: () => void;
  isLoadingMore: boolean;
  canLoadMore: boolean;
}

const CharListView: FC<Props> = ({ charList, onLoadMore, isLoadingMore, canLoadMore }) => {
  return (
    <Container>
      <List>
        {charList.map(char => (
          <CharCard key={char.id} char={char} />
        ))}
      </List>
      {canLoadMore &&
        (isLoadingMore ? (
          <LoadingButton />
        ) : (
          <Button onClick={onLoadMore} variant='contained' sx={{ width: '170px' }}>
            load more
          </Button>
        ))}
    </Container>
  );
};

export default CharListView;
