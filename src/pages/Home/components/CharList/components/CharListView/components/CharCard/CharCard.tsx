import { FC } from 'react';
import { useSelector } from 'react-redux';

import { Wrapper, Poster, Title } from './CharCard.styled';
import { ICharacter } from '../../../../../../../../types';
import { useAppDispatch } from '../../../../../../../../hooks';
import { selectCharId, setSelectedId } from '../../../../../../../../redux/characterDetails';

interface Props {
  char: ICharacter;
}

const CharCard: FC<Props> = ({ char: { id, name, thumbnail } }) => {
  const dispatch = useAppDispatch();
  const selectedCharId = useSelector(selectCharId);

  return (
    <Wrapper onClick={() => dispatch(setSelectedId(id))} selected={selectedCharId === id}>
      <Poster src={thumbnail} alt='' path={thumbnail} />
      <Title>{name}</Title>
    </Wrapper>
  );
};

export default CharCard;
