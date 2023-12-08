import { Typography } from '@mui/material';

import { Wrapper, Description } from './DetailsChar.styled';

const DetailsChar = () => {
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

export default DetailsChar;
