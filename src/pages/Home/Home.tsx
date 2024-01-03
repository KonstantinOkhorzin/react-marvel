import CharList from './components/CharList';
import RandomChar from './components/RandomChar';
import SideBar from './components/SideBar';
import decoration from '../../assets/img/vision.png';
import { InnerMainWrapper, Decoration } from './Home.styled';
import ScrollToTopButton from '../../components/ScrollToTopButton';

const Home = () => {
  return (
    <InnerMainWrapper>
      <RandomChar />
      <CharList />
      <SideBar />
      <Decoration src={decoration} alt='vision' />
      <ScrollToTopButton />
    </InnerMainWrapper>
  );
};

export default Home;
