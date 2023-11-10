import { Typography } from '@mui/material';

import { Wrapper, Description } from './SingleChar.styled';

const SingleChar = () => {
  return (
    <Wrapper>
      <img src='' alt='' />
      <div>
        <Typography variant='h4' component='h2'></Typography>
        <Description></Description>
      </div>
    </Wrapper>
  );
};

export default SingleChar;
