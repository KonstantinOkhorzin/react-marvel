import { Link } from 'react-router-dom';

import { HeaderWrapper, Title, LinkList, LinkItem } from './AppHeader.styled';

const AppHeader = () => {
  return (
    <HeaderWrapper>
      <Title>
        <Link to='/'>
          <span>Marvel</span> information portal
        </Link>
      </Title>
      <nav>
        <LinkList>
          <li>
            <LinkItem to='/'>Characters</LinkItem>
          </li>
          /
          <li>
            <LinkItem to='/comics'>Comics</LinkItem>
          </li>
        </LinkList>
      </nav>
    </HeaderWrapper>
  );
};

export default AppHeader;
