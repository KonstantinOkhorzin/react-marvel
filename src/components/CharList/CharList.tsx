import { useState, useEffect, useMemo, FC } from 'react';
import { Typography, CircularProgress } from '@mui/material';

import { Status, ICharacter } from '../../types';
import CharListView from './CharListView';
import MarvelService from '../../services/marvel';

interface Props {
  onSetSelectedCharId: (id: number) => void;
  selectedCharId: number | null;
}

const CharList: FC<Props> = ({ onSetSelectedCharId, selectedCharId }) => {
  const [charList, setCharList] = useState<ICharacter[]>([]);
  const [status, setStatus] = useState<Status>(Status.IDLE);
  const [error, setError] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [isLoadingMore, setIsLoadingMore] = useState<boolean>(false);
  const [canLoadMore, setCanLoadMore] = useState<boolean>(false);
  const marvelService = useMemo(() => new MarvelService(), []);

  useEffect(() => {
    setStatus(Status.PENDING);
    marvelService
      .getAllCharacters()
      .then(({ characters, canLoadMore }) => {
        setCharList(characters);
        setCanLoadMore(canLoadMore);
        setStatus(Status.RESOLVED);
      })
      .catch(error => {
        setError(error);
        setStatus(Status.REJECTED);
      });
  }, [marvelService]);

  useEffect(() => {
    if (page === 1) return;

    setIsLoadingMore(true);
    marvelService
      .getAllCharacters(page)
      .then(({ characters, canLoadMore }) => {
        setCharList(prevCharList => [...prevCharList, ...characters]);
        setCanLoadMore(canLoadMore);
      })
      .catch(setError)
      .finally(() => setIsLoadingMore(false));
  }, [marvelService, page]);

  const loadMore = () => setPage(prePage => prePage + 1);

  switch (status) {
    case Status.PENDING:
      return <CircularProgress sx={{ margin: '0 auto' }} />;

    case Status.RESOLVED:
      return (
        <CharListView
          charList={charList}
          onSetSelectedCharId={onSetSelectedCharId}
          selectedCharId={selectedCharId}
          onLoadMore={loadMore}
          isLoadingMore={isLoadingMore}
          canLoadMore={canLoadMore}
        />
      );

    case Status.REJECTED:
      return (
        <Typography variant='h3' component='p' color='error' align='center'>
          {error}
        </Typography>
      );

    default:
      return null;
  }
};

export default CharList;
