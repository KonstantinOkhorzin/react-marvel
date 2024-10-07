import { useEffect } from 'react';
import { Typography, CircularProgress } from '@mui/material';
import { useSelector } from 'react-redux';

import CharListView from './components/CharListView';
import { useAppDispatch } from '../../../../hooks';
import { selectCharacters, setOffset, setData } from '../../../../redux/characters/slice';
import { useGetCharactersQuery } from '../../../../redux/characters/api';
import { handleError } from '../../../../helpers';

const charactersLimit = Number(import.meta.env.VITE_CHARACTERS_LIMIT) || 9;
const defaultCharactersOffset = Number(import.meta.env.VITE_DEFAULT_CHARACTERS_OFFSET) || 210;

const CharList = () => {
  const dispatch = useAppDispatch();
  const { charList, offset, canLoadMore } = useSelector(selectCharacters);
  const { data, error, isLoading, isFetching } = useGetCharactersQuery(offset, {
    skip:
      charList.length > 0 &&
      (offset === charList.length + defaultCharactersOffset - charactersLimit || !canLoadMore),
  });

  useEffect(() => {
    if (!data) return;

    dispatch(setData(data));
  }, [data, dispatch]);

  const loadMore = () => {
    dispatch(setOffset(offset + charactersLimit));
  };

  return (
    <>
      {isLoading && charList.length === 0 && <CircularProgress sx={{ margin: '0 auto' }} />}

      {charList.length > 0 && (
        <CharListView
          charList={charList}
          onLoadMore={loadMore}
          isLoadingMore={isFetching}
          canLoadMore={canLoadMore}
        />
      )}

      {error && (
        <Typography variant='h3' component='p' color='error' align='center'>
          {handleError(error)}
        </Typography>
      )}
    </>
  );
};

export default CharList;
