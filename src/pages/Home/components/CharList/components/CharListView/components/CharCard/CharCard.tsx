import { FC } from 'react';

import { Wrapper, Poster, Title } from './CharCard.styled';

import { ICharacter } from '../../../../../../../../types';

interface Props {
  char: ICharacter;
  onSetSelectedCharId: (id: number) => void;
  selectedCharId: number | null;
}

const CharCard: FC<Props> = ({
  char: { id, name, thumbnail },
  onSetSelectedCharId,
  selectedCharId,
}) => {
  return (
    <Wrapper onClick={() => onSetSelectedCharId(id)} selected={selectedCharId === id}>
      <Poster src={thumbnail} alt='' path={thumbnail} />
      <Title>{name}</Title>
    </Wrapper>
  );
};

export default CharCard;
