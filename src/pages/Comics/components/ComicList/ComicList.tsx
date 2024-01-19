import { useState, useEffect } from 'react';
import { Typography, CircularProgress } from '@mui/material';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useSelector } from 'react-redux';

import ComicListView from './components/ComicListView';
import { Status } from '../../../../types';
import { useAppDispatch } from '../../../../hooks';
import { selectComics, fetchComics, fetchMoreComics, setPage } from '../../../../redux/comics';

const ComicsList = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const dispatch = useAppDispatch();
  const { comicList, page, status, error, canLoadMore } = useSelector(selectComics);

  useEffect(() => {
    if (comicList.length > 0) return;

    dispatch(fetchComics(page));
  }, [comicList.length, dispatch, page]);

  useEffect(() => {
    if (page === 1 || currentPage !== page) return;

    dispatch(fetchMoreComics(page));
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
      if (comicList.length > 0) {
        return (
          <InfiniteScroll
            dataLength={comicList.length}
            next={loadMore}
            hasMore={canLoadMore}
            loader={<CircularProgress sx={{ margin: '0 auto', display: 'block' }} />}
            style={{ overflow: 'visible' }}
          >
            <ComicListView comicList={comicList} />
          </InfiniteScroll>
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

export default ComicsList;
