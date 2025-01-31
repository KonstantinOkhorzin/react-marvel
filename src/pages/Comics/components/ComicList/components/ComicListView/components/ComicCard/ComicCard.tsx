import { FC } from 'react';
import { useLocation } from 'react-router-dom';

import { IComic } from '../../../../../../../../types';
import { Wrapper, Poster, Price, Title } from './ComicCard.styled';
import { ROUTES } from '../../../../../../../../constants';

interface Props {
  comic: IComic;
}

const ComicCard: FC<Props> = ({ comic: { id, thumbnail, title, price } }) => {
  const location = useLocation();
  
  return (
    <Wrapper to={`/${ROUTES.COMICS}/${id}`} state={{ from: location }}>
      <Poster src={thumbnail} alt='' />
      <Title>{title}</Title>
      <Price>{price}</Price>
    </Wrapper>
  );
};

export default ComicCard;
