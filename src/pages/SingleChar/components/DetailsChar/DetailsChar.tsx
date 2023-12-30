import { FC } from 'react';
import { Typography } from '@mui/material';

import { Wrapper, Content, Description } from './DetailsChar.styled';
import { ICharacter } from '../../../../types';
import LinkToBack from '../../../../components/LinkToBack';

interface Props {
  char: ICharacter;
}

const DetailsChar: FC<Props> = ({ char: { name, thumbnail, description } }) => {
  return (
    <Wrapper>
      <Content>
        <img src={thumbnail} alt='' />
        <div>
          <Typography variant='h4' component='h2'>
            {name.toLocaleUpperCase()}
          </Typography>
          <Description>{description}</Description>
        </div>
      </Content>
      <LinkToBack to='/'>Back to all</LinkToBack>
    </Wrapper>
  );
};

export default DetailsChar;
