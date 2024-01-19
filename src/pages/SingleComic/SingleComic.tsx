import { useEffect } from 'react';
import { Typography, CircularProgress } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import SubLayout from '../../components/SubLayout';
import DetailsComic from './components/DetailsComic';
import { useAppDispatch } from '../../hooks';
import { Status } from '../../types';
import { selectSingleComic, fetchComicById } from '../../redux/singleComic';

const SingleComic = () => {
  const { comicId } = useParams();
  const dispatch = useAppDispatch();
  const { comic, status, error } = useSelector(selectSingleComic);

  useEffect(() => {
    if (!comicId || (comic && comic.id === Number(comicId))) return;

    dispatch(fetchComicById(comicId));
  }, [comic, comicId, dispatch]);

  return (
    <SubLayout>
      {status === Status.PENDING && (
        <CircularProgress sx={{ margin: '0 auto', display: 'block' }} />
      )}
      {status === Status.RESOLVED && comic && <DetailsComic comic={comic} />}
      {status === Status.REJECTED && (
        <Typography variant='h1' component='p' color='error' align='center'>
          {error}
        </Typography>
      )}
    </SubLayout>
  );
};

export default SingleComic;
