import { useState, ReactNode, FC, useMemo } from 'react';

import Context from './context';
import { ICharacter, IComic } from '../types';

interface Props {
  children: ReactNode;
}

const Provider: FC<Props> = ({ children }) => {
  const [charList, setCharList] = useState<ICharacter[]>([]);
  const [charPage, setCharPage] = useState<number>(1);
  const [canLoadMoreCharacters, setCanLoadMoreCharacters] = useState<boolean>(false);
  const [selectedCharId, setSelectedCharId] = useState<number | null>(null);
  const [comicList, setComicList] = useState<IComic[]>([]);
  const [comicsPage, setComicsPage] = useState<number>(1);
  const [canLoadMoreComics, setCanLoadMoreComics] = useState<boolean>(false);
  const [selectedChar, setSelectedChar] = useState<ICharacter | null>(null);

  const providerValue = useMemo(() => {
    return {
      charList,
      setCharList,
      charPage,
      setCharPage,
      canLoadMoreCharacters,
      setCanLoadMoreCharacters,
      selectedCharId,
      setSelectedCharId,
      comicList,
      setComicList,
      comicsPage,
      setComicsPage,
      canLoadMoreComics,
      setCanLoadMoreComics,
      selectedChar,
      setSelectedChar,
    };
  }, [
    canLoadMoreCharacters,
    canLoadMoreComics,
    charList,
    charPage,
    comicList,
    comicsPage,
    selectedChar,
    selectedCharId,
  ]);

  return <Context.Provider value={providerValue}>{children}</Context.Provider>;
};

export default Provider;
