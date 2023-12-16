import { FC } from 'react';

import { List, Item, Poster, Price, Title } from './ComicListView.styled';
import { IComic } from '../../../../../../types';
import { Link } from 'react-router-dom';

interface Props {
  comicList: IComic[];
}

const ComicListView: FC<Props> = ({ comicList }) => {
  return (
    <section>
      <List>
        {comicList.map(({ id, thumbnail, title, price }, index) => (
          <Item key={index}>
            <Link to={`/comics/${id}`}>
              <Poster src={thumbnail} alt='' />
              <Title>{title}</Title>
              <Price>{price}</Price>
            </Link>
          </Item>
        ))}
      </List>
    </section>
  );
};

export default ComicListView;
