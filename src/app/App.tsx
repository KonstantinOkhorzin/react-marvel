import { useState } from 'react';
import styled from '@emotion/styled';

import AppHeader from '../components/AppHeader';
import { AppWrapper } from '../components/Layout/Layout.styled';

import CharList from '../components/CharList';
import RandomChar from '../components/RandomChar';
import decoration from '../assets/img/vision.png';
import SideBar from '../components/SideBar';

const InnerMainWrapper = styled.main`
  position: relative;
  display: grid;
  align-items: start;
  grid-template-columns: 650px 425px;
  grid-template-rows: 250px;
  column-gap: 25px;
  row-gap: 50px;
`;

const Decoration = styled.img`
  position: absolute;
  right: -174px;
  bottom: -70px;
  z-index: -1;
`;

function App() {
  const [selectedCharId, setSelectedCharId] = useState<number | null>(null);

  return (
    <AppWrapper>
      <AppHeader />
      <InnerMainWrapper>
        <RandomChar />
        <CharList onSetSelectedCharId={setSelectedCharId} selectedCharId={selectedCharId} />
        <SideBar selectedCharId={selectedCharId} />
        <Decoration src={decoration} alt='vision' />
      </InnerMainWrapper>
    </AppWrapper>
  );
}

export default App;
