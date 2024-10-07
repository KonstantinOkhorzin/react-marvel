import { useState, useEffect } from 'react';
import { Typography, Button, CircularProgress } from '@mui/material';

import { Wrapper, DynamicBlock, StaticBlock } from './RandomChar.styled';
import RandomCharView from './components/RandomCharView';
import ErrorView from './components/ErrorView';
import { useGetCharacterByIdOrNameQuery } from '../../../../redux/characters/api';

const MIN_ID = 1011000;
const MAX_ID = 1011400;
const INTERVAL_TIME = 60000;

const generateRandomId = () => Math.round(Math.random() * (MAX_ID - MIN_ID) + MIN_ID);

const RandomChar = () => {
  const [randomId, setRandomId] = useState<number>(generateRandomId);
  const { data: char, isFetching, isError } = useGetCharacterByIdOrNameQuery({ id: randomId });

  useEffect(() => {
    const timerId = setInterval(generateRandomId, INTERVAL_TIME);

    return () => {
      clearInterval(timerId);
    };
  }, [randomId]);

  return (
    <Wrapper>
      <DynamicBlock>
        {isFetching && <CircularProgress />}

        {char && !isFetching && <RandomCharView char={char} />}

        {isError && <ErrorView />}
      </DynamicBlock>
      <StaticBlock>
        <Typography variant='h2' component='p' mb='33px'>
          Random character for today!
          <br />
          Do you want to get to know him better?
        </Typography>
        <Typography variant='h2' component='p' mb='13px'>
          Or choose another one
        </Typography>
        <Button onClick={() => setRandomId(generateRandomId)} variant='contained'>
          try it
        </Button>
      </StaticBlock>
    </Wrapper>
  );
};

export default RandomChar;
