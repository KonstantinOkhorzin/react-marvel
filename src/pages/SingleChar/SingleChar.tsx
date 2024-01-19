import { useEffect } from 'react';
import { Typography, CircularProgress } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import SubLayout from '../../components/SubLayout';
import DetailsChar from './components/DetailsChar';
import { useAppDispatch } from '../../hooks';
import { Status } from '../../types';
import { selectSingleCharacter, fetchCharacterById } from '../../redux/singleCharacter';

const SingleChar = () => {
  const { charId } = useParams();
  const dispatch = useAppDispatch();
  const { char, status, error } = useSelector(selectSingleCharacter);

  useEffect(() => {
    if (!charId || (char && char.id === Number(charId))) return;

    dispatch(fetchCharacterById(charId));
  }, [char, charId, dispatch]);

  return (
    <SubLayout>
      {status === Status.PENDING && (
        <CircularProgress sx={{ margin: '0 auto', display: 'block' }} />
      )}
      {status === Status.RESOLVED && char && <DetailsChar char={char} />}
      {status === Status.REJECTED && (
        <Typography variant='h1' component='p' color='error' align='center'>
          {error}
        </Typography>
      )}
    </SubLayout>
  );
};

export default SingleChar;
