import { FC, useEffect, useMemo, useState } from 'react';
import { Typography, CircularProgress } from '@mui/material';

import CharInfo from '../CharInfo';
import SearchForm from '../SearchForm';
import Skeleton from '../Skeleton';
import { Wrapper, BlockWrapper } from './SideBar.styled';

import MarvelService from '../../services/marvel';
import { Status, ICharacter } from '../../types';

interface Props {
  selectedCharId: number | null;
}

const SideBar: FC<Props> = ({ selectedCharId }) => {
  const [selectedChar, setSelectedChar] = useState<ICharacter | null>(null);
  const [status, setStatus] = useState<Status>(Status.IDLE);
  const [error, setError] = useState<string>('');
  const marvelService = useMemo(() => new MarvelService(), []);

  useEffect(() => {
    if (selectedCharId === null) return;

    setStatus(Status.PENDING);
    marvelService
      .getCharacter(selectedCharId)
      .then(char => {
        setSelectedChar(char);
        setStatus(Status.RESOLVED);
      })
      .catch(error => {
        setError(error);
        setStatus(Status.REJECTED);
      });
  }, [marvelService, selectedCharId]);

  return (
    <Wrapper>
      <BlockWrapper>
        {status === Status.IDLE && <Skeleton />}
        {status === Status.PENDING && (
          <CircularProgress sx={{ margin: '0 auto', display: 'block' }} />
        )}
        {status === Status.RESOLVED && selectedChar && <CharInfo char={selectedChar} />}
        {status === Status.REJECTED && (
          <Typography variant='h3' component='p' color='error' align='center'>
            {error}
          </Typography>
        )}
      </BlockWrapper>
      <BlockWrapper>
        <SearchForm />
      </BlockWrapper>
    </Wrapper>
  );
};

export default SideBar;
