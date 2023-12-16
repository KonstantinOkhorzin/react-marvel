import SubLayout from '../../components/SubLayout';
import ComicList from './components/ComicList';
import ScrollToTopButton from '../../components/ScrollToTopButton';

const Comics = () => {
  return (
    <SubLayout>
      <ComicList />
      <ScrollToTopButton />
    </SubLayout>
  );
};

export default Comics;
