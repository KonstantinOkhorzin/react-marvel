import { Button } from '@mui/material';

import { Container, Item, List, Poster, Price, Title } from './ComicsList.styled';

const ComicsList = () => {
  return (
    <Container>
      <List>
        <Item>
          <a href=''>
            <Poster src='' alt='' />
            <Title></Title>
            <Price></Price>
          </a>
        </Item>
      </List>
      <Button variant='contained' sx={{ width: '170px' }}>
        load more
      </Button>
    </Container>
  );
};

export default ComicsList;
