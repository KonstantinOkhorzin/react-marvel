import { Typography, CircularProgress } from '@mui/material';
import { useParams } from 'react-router-dom';

import SubLayout from '../../components/SubLayout';
import DetailsComic from './components/DetailsComic';
import { useGetComicByIdQuery } from '../../redux/comics/api';
import { handleError } from '../../helpers';

const SingleComic = () => {
  const { comicId } = useParams();
  const {
    data: comic,
    error,
    isFetching,
  } = useGetComicByIdQuery(comicId, {
    skip: comicId === undefined,
  });

  return (
    <SubLayout>
      {isFetching && <CircularProgress sx={{ margin: '0 auto', display: 'block' }} />}

      {comic && <DetailsComic comic={comic} />}
      
      {error && (
        <Typography variant='h1' component='p' color='error' align='center'>
          {handleError(error)}
        </Typography>
      )}
    </SubLayout>
  );
};

export default SingleComic;
