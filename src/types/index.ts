export interface ICharacter {
  id: number;
  name: string;
  description: string;
  thumbnail: string;
  homepage: string;
  wiki: string;
  comics: Comic[];
}

interface Comic {
  resourceURI: string;
  name: string;
}
