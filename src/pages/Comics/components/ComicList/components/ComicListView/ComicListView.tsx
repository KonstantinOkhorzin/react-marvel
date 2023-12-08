import { Container, Item, List, Poster, Price, Title } from './ComicListView.styled';

const ComicListView = () => {
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
    </Container>
  );
};

export default ComicListView;
