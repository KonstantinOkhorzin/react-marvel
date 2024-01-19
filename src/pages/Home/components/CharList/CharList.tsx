import { useState, useEffect } from 'react';
import { Typography, CircularProgress } from '@mui/material';
import { useSelector } from 'react-redux';

import { Status } from '../../../../types';
import CharListView from './components/CharListView';
import { useAppDispatch } from '../../../../hooks';
import {
  fetchCharacters,
  fetchMoreCharacters,
  setPage,
  selectCharacters,
} from '../../../../redux/characters';

const CharList = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const dispatch = useAppDispatch();
  const { charList, page, status, error, isLoadingMore, canLoadMore } =
    useSelector(selectCharacters);

  useEffect(() => {
    if (charList.length > 0) return;

    dispatch(fetchCharacters(page));
  }, [charList.length, dispatch, page]);

  useEffect(() => {
    if (page === 1 || currentPage !== page) return;

    dispatch(fetchMoreCharacters(page));
  }, [currentPage, dispatch, page]);

  const loadMore = () => {
    setCurrentPage(page + 1);
    dispatch(setPage(page + 1));
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
