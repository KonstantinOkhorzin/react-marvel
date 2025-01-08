import LinkToMain from './components/LinkToMain';
import LinkItem from './components/LinkItem';
import { HeaderWrapper, Title, NavList } from './AppHeader.styled';
import { ROUTES } from '../../../constants';

const AppHeader = () => {
  const { HOME, COMICS } = ROUTES;

  return (
    <HeaderWrapper>
      <Title>
        <LinkToMain to={HOME}>
          <span>Marvel&nbsp;</span> information portal
        </LinkToMain>
      </Title>

      <NavList>
        <LinkItem to={HOME}>Characters</LinkItem>/<LinkItem to={COMICS}>Comics</LinkItem>
      </NavList>
    </HeaderWrapper>
  );
};

export default AppHeader;
