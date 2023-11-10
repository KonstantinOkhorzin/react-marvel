import { Typography, Button, Box } from '@mui/material';
import { Header, ButtonGroup, Description, ComicsList, ComicsItem } from './CharInfo.styled';

const CharDetailsInfo = () => {
  return (
    <>
      <Header>
        <img src='' alt='' />
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <Typography variant='h3' component='h2' sx={{ textTransform: 'uppercase' }}></Typography>
          <ButtonGroup>
            <Button variant='contained'>Homepage</Button>
            <Button variant='contained' color='secondary'>
              Wiki
            </Button>
          </ButtonGroup>
        </Box>
      </Header>
      <Description></Description>
      <Typography variant='h4' component='h3' mt='10px'>
        Comics:
      </Typography>
      <ComicsList>
        <ComicsItem></ComicsItem>
      </ComicsList>
    </>
  );
};

export default CharDetailsInfo;
