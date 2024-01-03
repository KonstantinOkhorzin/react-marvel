import { useEffect, useMemo, useState } from 'react';
import { Typography, CircularProgress } from '@mui/material';

import CharInfo from './components/CharInfo';
import SearchForm from './components/SearchForm';
import Skeleton from './components/Skeleton';
import { Wrapper, BlockWrapper } from './SideBar.styled';

import MarvelService from '../../../../services/marvel';
import { Status } from '../../../../types';
import { useGlobalContext } from '../../../../hooks';

const SideBar = () => {
  const [status, setStatus] = useState<Status>(Status.IDLE);
  const [error, setError] = useState<string>('');
  // const [currentId, setCurrentId] = useState<number | null>(null);
  const marvelService = useMemo(() => new MarvelService(), []);
  const { selectedCharId, selectedChar, setSelectedChar } = useGlobalContext();

  useEffect(() => {
    if (selectedCharId === null) return;

    if (selectedChar && selectedChar.id === selectedCharId) return;
      
      setStatus(Status.PENDING);
    marvelService
      .getCharacterById(selectedCharId)
      .then(char => {
        setSelectedChar(char);
        setStatus(Status.RESOLVED);
        // setCurrentId(selectedCharId);
      })
      .catch(error => {
        setError(error);
        setStatus(Status.REJECTED);
      });
  }, [marvelService, selectedChar, selectedCharId, setSelectedChar]);

  return (
    <Wrapper>
      <BlockWrapper>
        {status === Status.IDLE && selectedChar === null && <Skeleton />}
        {status === Status.PENDING && (
          <CircularProgress sx={{ margin: '0 auto', display: 'block' }} />
        )}
        {((status === Status.RESOLVED && selectedChar) ||
          (status === Status.IDLE && selectedChar)) && <CharInfo char={selectedChar} />}
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
