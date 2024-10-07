import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Typography, CircularProgress } from '@mui/material';
import InfiniteScroll from 'react-infinite-scroll-component';

import ComicListView from './components/ComicListView';
import { useGetComicsQuery } from '../../../../redux/comics/api';
import { handleError } from '../../../../helpers';
import { useAppDispatch } from '../../../../hooks';
import { selectComics, setOffset, setData } from '../../../../redux/comics/slice';

const comicsLimit = Number(import.meta.env.VITE_COMICS_LIMIT) || 8;
const defaultComicsOffset = Number(import.meta.env.VITE_DEFAULT_COMICS_OFFSET) || 100;

const ComicsList = () => {
  const dispatch = useAppDispatch();
  const { comicList, offset, canLoadMore } = useSelector(selectComics);
  const { data, error, isLoading } = useGetComicsQuery(offset, {
    skip:
      comicList.length > 0 &&
      (offset === comicList.length + defaultComicsOffset - comicsLimit || !canLoadMore),
  });

  useEffect(() => {
    if (!data) return;

    dispatch(setData(data));
  }, [data, dispatch]);

  const loadMore = () => {
    dispatch(setOffset(offset + comicsLimit));
  };

  return (
    <>
      {isLoading && comicList.length === 0 && <CircularProgress sx={{ margin: '0 auto' }} />}

      {comicList.length > 0 && (
        <InfiniteScroll
          dataLength={comicList.length}
          next={loadMore}
          hasMore={canLoadMore}
          loader={<CircularProgress sx={{ margin: '0 auto', display: 'block' }} />}
          style={{ overflow: 'visible' }}
        >
          <ComicListView comicList={comicList} />
        </InfiniteScroll>
      )}

      {error && (
        <Typography variant='h3' component='p' color='error' align='center'>
          {handleError(error)}
        </Typography>
      )}
    </>
  );
};

export default ComicsList;
