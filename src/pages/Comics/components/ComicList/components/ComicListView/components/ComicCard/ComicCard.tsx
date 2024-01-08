import { FC } from 'react';

import { IComic } from '../../../../../../../../types';
import { Wrapper, Poster, Price, Title } from './ComicCard.styled';

interface Props {
  comic: IComic;
}

const ComicCard: FC<Props> = ({ comic: { id, thumbnail, title, price } }) => {
  return (
    <Wrapper to={`/comics/${id}`}>
      <Poster src={thumbnail} alt='' />
      <Title>{title}</Title>
      <Price>{price}</Price>
    </Wrapper>
  );
};

export default ComicCard;
