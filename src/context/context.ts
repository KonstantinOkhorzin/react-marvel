import { createContext, Dispatch, SetStateAction } from 'react';

import { ICharacter, IComic } from '../types';

export interface IContext {
  charList: ICharacter[];
  setCharList: Dispatch<SetStateAction<ICharacter[]>>;
  charPage: number;
  setCharPage: Dispatch<SetStateAction<number>>;
  canLoadMoreCharacters: boolean;
  setCanLoadMoreCharacters: Dispatch<SetStateAction<boolean>>;
  selectedCharId: number | null;
  setSelectedCharId: Dispatch<SetStateAction<number | null>>;
  comicList: IComic[];
  setComicList: Dispatch<SetStateAction<IComic[]>>;
  comicsPage: number;
  setComicsPage: Dispatch<SetStateAction<number>>;
  canLoadMoreComics: boolean;
  setCanLoadMoreComics: Dispatch<SetStateAction<boolean>>;
  selectedChar: ICharacter | null;
  setSelectedChar: Dispatch<SetStateAction<ICharacter | null>>;
}

export default createContext<IContext>({
  charList: [],
  setCharList: () => {},
  charPage: 1,
  setCharPage: () => {},
  canLoadMoreCharacters: false,
  setCanLoadMoreCharacters: () => {},
  selectedCharId: null,
  setSelectedCharId: () => {},
  comicList: [],
  setComicList: () => {},
  comicsPage: 1,
  setComicsPage: () => {},
  canLoadMoreComics: false,
  setCanLoadMoreComics: () => {},
  selectedChar: null,
  setSelectedChar: () => {},
});
