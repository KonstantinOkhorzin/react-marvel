import { useState, useEffect, useMemo } from 'react';
import { Typography, CircularProgress } from '@mui/material';
import InfiniteScroll from 'react-infinite-scroll-component';

import ComicListView from './components/ComicListView';
import { Status, IComic } from '../../../../types';
import MarvelService from '../../../../services/marvel';

const ComicsList = () => {
  const [comicList, setComicList] = useState<IComic[]>([]);
  const [status, setStatus] = useState<Status>(Status.IDLE);
  const [error, setError] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [canLoadMore, setCanLoadMore] = useState<boolean>(false);
  const marvelService = useMemo(() => new MarvelService(), []);

  useEffect(() => {
    setStatus(Status.PENDING);
    marvelService
      .getAllComics()
      .then(({ items: comics, canLoadMore }) => {
        setComicList(comics);
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

    marvelService
      .getAllComics(page)
      .then(({ items: comics, canLoadMore }) => {
        setComicList(prevComicList => [...prevComicList, ...comics]);
        setCanLoadMore(canLoadMore);
      })
      .catch(setError);
  }, [marvelService, page]);

  switch (status) {
    case Status.PENDING:
      return <CircularProgress sx={{ margin: '0 auto' }} />;

    case Status.RESOLVED:
      return (
        <InfiniteScroll
          dataLength={comicList.length}
          next={() => setPage(page => page + 1)}
          hasMore={canLoadMore}
          loader={<CircularProgress sx={{ margin: '0 auto', display: 'block' }} />}
          style={{ overflow: 'visible' }}
        >
          <ComicListView comicList={comicList} />
        </InfiniteScroll>
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

export default ComicsList;
