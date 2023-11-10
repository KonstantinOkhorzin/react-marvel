import CharInfo from '../CharInfo';
import SearchForm from '../SearchForm';
import Skeleton from '../Skeleton';
import { Wrapper, BlockWrapper } from './SideBar.styled';

const SideBar = () => {
  return (
    <Wrapper>
      <BlockWrapper>
        <Skeleton />
        <CharInfo />
      </BlockWrapper>
      <BlockWrapper>
        <SearchForm />
      </BlockWrapper>
    </Wrapper>
  );
};

export default SideBar;
