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

export interface DataResponse<T> {
  items: T[];
  canLoadMore: boolean;
}

interface Comic {
  id: string;
  name: string;
}

export enum Status {
  IDLE = 'idle',
  PENDING = 'pending',
  RESOLVED = 'resolved',
  REJECTED = 'rejected',
}
