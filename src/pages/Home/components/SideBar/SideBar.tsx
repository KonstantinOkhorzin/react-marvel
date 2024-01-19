import { useEffect } from 'react';
import { Typography, CircularProgress } from '@mui/material';
import { useSelector } from 'react-redux';

import CharInfo from './components/CharInfo';
import SearchForm from './components/SearchForm';
import Skeleton from './components/Skeleton';
import { Wrapper, BlockWrapper } from './SideBar.styled';
import { useAppDispatch } from '../../../../hooks';
import { Status } from '../../../../types';
import { selectCharacterDetails, fetchCharacterById } from '../../../../redux/characterDetails';

const SideBar = () => {
  const dispatch = useAppDispatch();
  const { selectedChar, selectedCharId, status, error } = useSelector(selectCharacterDetails);

  useEffect(() => {
    if (selectedCharId === null || (selectedChar && selectedChar.id === selectedCharId)) return;

    dispatch(fetchCharacterById(String(selectedCharId)));
  }, [dispatch, selectedChar, selectedCharId]);

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
