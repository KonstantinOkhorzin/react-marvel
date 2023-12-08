import { useState } from 'react';

import CharList from './components/CharList';
import RandomChar from './components/RandomChar';
import SideBar from './components/SideBar';
import decoration from '../../assets/img/vision.png';
import { InnerMainWrapper, Decoration } from './Home.styled';

const Home = () => {
    const [selectedCharId, setSelectedCharId] = useState<number | null>(null);
  return (
    <InnerMainWrapper>
      <RandomChar />
      <CharList onSetSelectedCharId={setSelectedCharId} selectedCharId={selectedCharId} />
      <SideBar selectedCharId={selectedCharId} />
      <Decoration src={decoration} alt='vision' />
    </InnerMainWrapper>
  );
};

export default Home;
