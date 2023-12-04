export interface ICharacter {
  id: number;
  name: string;
  description: string;
  thumbnail: string;
  homepage: string;
  wiki: string;
  comics: Comic[];
}

export interface CharactersDataResponse {
  characters: ICharacter[];
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
