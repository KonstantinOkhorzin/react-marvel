import { useEffect, useMemo, useState } from 'react';
import { Typography, CircularProgress } from '@mui/material';
import { useParams } from 'react-router-dom';

import SubLayout from '../../components/SubLayout';
import DetailsChar from './components/DetailsChar';

import MarvelService from '../../services/marvel';
import { Status, ICharacter } from '../../types';

const SingleChar = () => {
  const { charId } = useParams();
  const [char, setChar] = useState<ICharacter | null>(null);
  const [status, setStatus] = useState<Status>(Status.IDLE);
  const [error, setError] = useState<string>('');
  const marvelService = useMemo(() => new MarvelService(), []);

  useEffect(() => {
    if (!charId) return;

    setStatus(Status.PENDING);
    marvelService
      .getCharacterById(charId)
      .then(char => {
        setChar(char);
        setStatus(Status.RESOLVED);
      })
      .catch(error => {
        setError(error);
        setStatus(Status.REJECTED);
      });
  }, [charId, marvelService]);

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
