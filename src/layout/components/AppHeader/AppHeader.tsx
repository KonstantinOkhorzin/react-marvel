import LinkToMain from './components/LinkToMain';
import LinkItem from './components/LinkItem';
import { HeaderWrapper, Title, NavList } from './AppHeader.styled';

const AppHeader = () => {
  return (
    <HeaderWrapper>
      <Title>
        <LinkToMain to='/'>
          <span>Marvel&nbsp;</span> information portal
        </LinkToMain>
      </Title>

      <NavList>
        <LinkItem to='/'>Characters</LinkItem>/<LinkItem to='/comics'>Comics</LinkItem>
      </NavList>
    </HeaderWrapper>
  );
};

export default AppHeader;
