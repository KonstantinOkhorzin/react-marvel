import { useEffect, useMemo, useState } from 'react';
import { Typography, CircularProgress } from '@mui/material';
import { useParams } from 'react-router-dom';

import SubLayout from '../../components/SubLayout';
import DetailsComic from './components/DetailsComic';

import MarvelService from '../../services/marvel';
import { Status, IComic } from '../../types';

const SingleComic = () => {
  const { comicId } = useParams();
  const [comic, setComic] = useState<IComic | null>(null);
  const [status, setStatus] = useState<Status>(Status.IDLE);
  const [error, setError] = useState<string>('');
  const marvelService = useMemo(() => new MarvelService(), []);

  useEffect(() => {
    if (!comicId) return;

    setStatus(Status.PENDING);
    marvelService
      .getComic(comicId)
      .then(comic => {
        setComic(comic);
        setStatus(Status.RESOLVED);
      })
      .catch(error => {
        setError(error);
        setStatus(Status.REJECTED);
      });
  }, [comicId, marvelService]);

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
