import { useState, useEffect, useMemo, FC } from 'react';
import { Typography } from '@mui/material';

import { Status, ICharacter } from '../../types';
import CharListView from './CharListView';
import MarvelService from '../../services/marvel';
import Spinner from '../Spinner';

interface Props {
  onSetSelectedCharId: (id: number) => void;
  selectedCharId: number | null;
}

const CharList: FC<Props> = ({ onSetSelectedCharId, selectedCharId }) => {
  const [charList, setCharList] = useState<ICharacter[]>([]);
  const [status, setStatus] = useState<Status>(Status.IDLE);
  const [error, setError] = useState<string>('');
  const marvelService = useMemo(() => new MarvelService(), []);

  useEffect(() => {
    setStatus(Status.PENDING);
    marvelService
      .getAllCharacters()
      .then(result => {
        setCharList(result);
        setStatus(Status.RESOLVED);
      })
      .catch(error => {
        setError(error);
        setStatus(Status.REJECTED);
      });
  }, [marvelService]);

  switch (status) {
    case Status.PENDING:
      return <Spinner />;

    case Status.RESOLVED:
      return (
        <CharListView
          charList={charList}
          onSetSelectedCharId={onSetSelectedCharId}
          selectedCharId={selectedCharId}
        />
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

export default CharList;
