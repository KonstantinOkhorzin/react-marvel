import { HeaderWrapper, Title, LinkList } from './AppHeader.styled';

const AppHeader = () => {
  return (
    <HeaderWrapper>
      <Title>
        <a href='#'>
          <span>Marvel</span> information portal
        </a>
      </Title>
      <nav>
        <LinkList>
          <li>
            <a href='#'>Characters</a>
          </li>
          /
          <li>
            <a href='#'>Comics</a>
          </li>
        </LinkList>
      </nav>
    </HeaderWrapper>
  );
};

export default AppHeader;
