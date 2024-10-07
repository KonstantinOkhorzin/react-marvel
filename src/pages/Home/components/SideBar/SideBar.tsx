import { useEffect } from 'react';
import { Typography, CircularProgress } from '@mui/material';
import { useSelector } from 'react-redux';

import CharInfo from './components/CharInfo';
import SearchForm from './components/SearchForm';
import Skeleton from './components/Skeleton';
import { Wrapper, BlockWrapper } from './SideBar.styled';
import { useAppDispatch } from '../../../../hooks';
import { selectCharId, selectChar, setSelectedChar } from '../../../../redux/characters/slice';
import { useGetCharacterByIdOrNameQuery } from '../../../../redux/characters/api';
import { handleError } from '../../../../helpers';

const SideBar = () => {
  const dispatch = useAppDispatch();
  const selectedCharId = useSelector(selectCharId);
  const selectedChar = useSelector(selectChar);
  const { data, error, isFetching } = useGetCharacterByIdOrNameQuery(
    { id: selectedCharId },
    { skip: selectedCharId === undefined }
  );

  useEffect(() => {
    if (!data) return;

    dispatch(setSelectedChar(data));
  }, [data, dispatch, selectedCharId]);

  return (
    <Wrapper>
      <BlockWrapper>
        {!selectedChar && !isFetching && <Skeleton />}

        {isFetching && <CircularProgress sx={{ margin: '0 auto', display: 'block' }} />}

        {selectedChar && !isFetching && <CharInfo char={selectedChar} />}

        {error && (
          <Typography variant='h3' component='p' color='error' align='center'>
            {handleError(error)}
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
