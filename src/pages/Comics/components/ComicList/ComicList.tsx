import { useState, useEffect, useMemo } from 'react';
import { Typography, CircularProgress } from '@mui/material';
import InfiniteScroll from 'react-infinite-scroll-component';

import ComicListView from './components/ComicListView';
import { Status } from '../../../../types';
import MarvelService from '../../../../services/marvel';
import { useGlobalContext } from '../../../../hooks';

const ComicsList = () => {
  const [status, setStatus] = useState<Status>(Status.IDLE);
  const [error, setError] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const marvelService = useMemo(() => new MarvelService(), []);
  const {
    comicList,
    setComicList,
    comicsPage,
    setComicsPage,
    canLoadMoreComics: canLoadMore,
    setCanLoadMoreComics: setCanLoadMore,
  } = useGlobalContext();

  useEffect(() => {
    if (comicList.length > 0) return;

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
  }, [comicList.length, marvelService, setCanLoadMore, setComicList]);

  useEffect(() => {
    if (comicsPage === 1 || currentPage !== comicsPage) return;

    marvelService
      .getAllComics(comicsPage)
      .then(({ items: comics, canLoadMore }) => {
        setComicList(prevComicList => [...prevComicList, ...comics]);
        setCanLoadMore(canLoadMore);
      })
      .catch(setError);
  }, [marvelService, comicsPage, setComicList, setCanLoadMore, currentPage]);

  const loadMore = () => {
    setComicsPage(prevPage => {
      setCurrentPage(prevPage + 1);
      return prevPage + 1;
    });
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
