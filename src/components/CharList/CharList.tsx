import { Button } from '@mui/material';
import { Container, List, Item, Name } from './CharList.styled';

const CharList = () => {
  return (
    <Container>
      <List>
        <Item>
          <img src='' alt='' />
          <Name></Name>
        </Item>
      </List>
      <Button variant='contained' sx={{ width: '170px' }}>
        load more
      </Button>
    </Container>
  );
};

export default CharList;
