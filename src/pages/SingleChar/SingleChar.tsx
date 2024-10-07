import { Typography, CircularProgress } from '@mui/material';
import { useParams } from 'react-router-dom';

import SubLayout from '../../components/SubLayout';
import DetailsChar from './components/DetailsChar';
import { useGetCharacterByIdOrNameQuery } from '../../redux/characters/api';
import { handleError } from '../../helpers';

const SingleChar = () => {
  const { charId } = useParams();
  const {
    data: char,
    error,
    isFetching,
  } = useGetCharacterByIdOrNameQuery(
    { id: Number(charId) },
    {
      skip: charId === undefined,
    }
  );

  return (
    <SubLayout>
      {isFetching && <CircularProgress sx={{ margin: '0 auto', display: 'block' }} />}

      {char && <DetailsChar char={char} />}

      {error && (
        <Typography variant='h1' component='p' color='error' align='center'>
          {handleError(error)}
        </Typography>
      )}
    </SubLayout>
  );
};

export default SingleChar;
