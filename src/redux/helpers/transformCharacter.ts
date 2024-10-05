import { ICharacter } from "../../types";
import { CharacterResponse } from "../types/characters";

const transformCharacter = (char: CharacterResponse): ICharacter => {
  return {
    id: char.id,
    name: char.name,
    description: char.description ? char.description : 'There is no description for this character',
    thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
    homepage: char.urls[0].url,
    wiki: char.urls[1].url,
    comics: char.comics.items.map(comic => ({
      name: comic.name,
      id: comic.resourceURI.match(/(\d+)$/)?.[0] ?? '',
    })),
  };
};

export default transformCharacter;
