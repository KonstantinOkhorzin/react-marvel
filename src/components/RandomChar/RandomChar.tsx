import { Typography, Button } from '@mui/material';

import { Wrapper, DynamicBlock, Description, ButtonGroup, StaticBlock } from './RandomChar.styled';

const RandomChar = () => {
  return (
    <Wrapper>
      <DynamicBlock>
        <img src='' alt='' />
        <div>
          <Typography variant='h3' component='h2' sx={{ textTransform: 'uppercase' }}></Typography>
          <Description></Description>
          <ButtonGroup>
            <Button variant='contained'>homepage</Button>
            <Button variant='contained' color='secondary'>
              Wiki
            </Button>
          </ButtonGroup>
        </div>
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
        <Button variant='contained'>try it</Button>
      </StaticBlock>
    </Wrapper>
  );
};

export default RandomChar;
