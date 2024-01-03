import { useState, useEffect, useMemo } from 'react';
import { Typography, CircularProgress } from '@mui/material';

import { Status } from '../../../../types';
import CharListView from './components/CharListView';
import MarvelService from '../../../../services/marvel';
import { useGlobalContext } from '../../../../hooks';

const CharList = () => {
  const [status, setStatus] = useState<Status>(Status.IDLE);
  const [error, setError] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isLoadingMore, setIsLoadingMore] = useState<boolean>(false);
  const marvelService = useMemo(() => new MarvelService(), []);
  const {
    charList,
    setCharList,
    charPage,
    setCharPage,
    canLoadMoreCharacters: canLoadMore,
    setCanLoadMoreCharacters: setCanLoadMore,
    selectedCharId,
    setSelectedCharId,
  } = useGlobalContext();

  useEffect(() => {
    if (charList.length > 0) return;

    setStatus(Status.PENDING);
    marvelService
      .getAllCharacters()
      .then(({ items: characters, canLoadMore }) => {
        setCharList(characters);
        setCanLoadMore(canLoadMore);
        setStatus(Status.RESOLVED);
      })
      .catch(error => {
        setError(error);
        setStatus(Status.REJECTED);
      });
  }, [charList.length, marvelService, setCanLoadMore, setCharList]);

  useEffect(() => {
    if (charPage === 1 || currentPage !== charPage) return;

    setIsLoadingMore(true);
    marvelService
      .getAllCharacters(charPage)
      .then(({ items: characters, canLoadMore }) => {
        setCharList(prevCharList => [...prevCharList, ...characters]);
        setCanLoadMore(canLoadMore);
      })
      .catch(setError)
      .finally(() => setIsLoadingMore(false));
  }, [marvelService, charPage, setCharList, currentPage, setCanLoadMore]);

  const loadMore = () => {
    setCharPage(prevPage => {
      setCurrentPage(prevPage + 1);
      return prevPage + 1;
    });
  };

  switch (status) {
    case Status.PENDING:
      return <CircularProgress sx={{ margin: '0 auto' }} />;

    case Status.RESOLVED:
    case Status.IDLE:
      if (charList.length > 0) {
        return (
          <CharListView
            charList={charList}
            onSetSelectedCharId={setSelectedCharId}
            selectedCharId={selectedCharId}
            onLoadMore={loadMore}
            isLoadingMore={isLoadingMore}
            canLoadMore={canLoadMore}
          />
        );
      }
      break;

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
