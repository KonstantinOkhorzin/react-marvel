import { useState, useEffect, useMemo } from 'react';
import { Typography, CircularProgress } from '@mui/material';

import ComicListView from './components/ComicListView';
import { Status, IComic } from '../../../../types';
import MarvelService from '../../../../services/marvel';

const ComicsList = () => {
  const [comicList, setComicList] = useState<IComic[]>([]);
  const [status, setStatus] = useState<Status>(Status.IDLE);
  const [error, setError] = useState<string>('');
  const marvelService = useMemo(() => new MarvelService(), []);

   useEffect(() => {
     setStatus(Status.PENDING);
     marvelService
       .getAllComics()
       .then(comics => {
         setComicList(comics);
         setStatus(Status.RESOLVED);
       })
       .catch(error => {
         setError(error);
         setStatus(Status.REJECTED);
       });
   }, [marvelService]);
 
  switch (status) {
    case Status.PENDING:
      return <CircularProgress sx={{ margin: '0 auto' }} />;

    case Status.RESOLVED:
      return <ComicListView comicList={comicList} />;

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
