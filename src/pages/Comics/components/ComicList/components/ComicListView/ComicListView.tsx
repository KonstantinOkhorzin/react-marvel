import { FC } from 'react';

import { List } from './ComicListView.styled';
import { IComic } from '../../../../../../types';
import ComicCard from './components/ComicCard';

interface Props {
  comicList: IComic[];
}

const ComicListView: FC<Props> = ({ comicList }) => {
  return (
    <section>
      <List>
        {comicList.map((comic, index) => (
          <ComicCard key={index} comic={comic} />
        ))}
      </List>
    </section>
  );
};

export default ComicListView;
