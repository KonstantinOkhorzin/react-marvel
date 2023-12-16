export interface ICharacter {
  id: number;
  name: string;
  description: string;
  thumbnail: string;
  homepage: string;
  wiki: string;
  comics: Comic[];
}

export interface IComic {
  id: number;
  title: string;
  description: string;
  pageCount: string;
  thumbnail: string;
  language: string;
  price: string;
}

export interface CharactersDataResponse {
  characters: ICharacter[];
  canLoadMore: boolean;
}

export interface ComicsDataResponse {
  comics: IComic[];
  canLoadMore: boolean;
}

interface Comic {
  resourceURI: string;
  name: string;
}

export enum Status {
  IDLE = 'idle',
  PENDING = 'pending',
  RESOLVED = 'resolved',
  REJECTED = 'rejected',
}
