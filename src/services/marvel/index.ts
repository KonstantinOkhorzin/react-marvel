import { ServerCharactersData, CharacterResponse } from './types/characters';
import { ComicResponse } from './types/comics';
import { ICharacter, CharactersDataResponse, IComic } from '../../types';

export default class MarvelService {
  private apiKey: string = import.meta.env.VITE_MARVEL_KEY;
  private baseUrl: string = 'https://gateway.marvel.com:443/v1/public/';
  private defaultCharactersOffset: number = 210;
  private charactersLimit: number = 9;
  private defaultComicsOffset: number = 0;
  private comicsLimit: number = 8;

  private getResource = async (url: string) => {
    const response = await fetch(url);

    if (!response.ok) {
      return Promise.reject('Failed to fetch data!');
    }

    return await response.json();
  };

  private transformCharacter = (char: CharacterResponse): ICharacter => {
    return {
      id: char.id,
      name: char.name,
      description: char.description
        ? `${char.description.slice(0, 210)}...`
        : 'There is no description for this character',
      thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
      homepage: char.urls[0].url,
      wiki: char.urls[1].url,
      comics: char.comics.items,
    };
  };

  private transformComics = (comics: ComicResponse): IComic => {
    return {
      id: comics.id,
      title: comics.title,
      description: comics.description || 'There is no description',
      pageCount: comics.pageCount
        ? `${comics.pageCount} p.`
        : 'No information about the number of pages',
      thumbnail: comics.thumbnail.path + '.' + comics.thumbnail.extension,
      language: comics.textObjects[0]?.language || 'en-us',
      price: comics.prices[0].price ? `${comics.prices[0].price}$` : 'not available',
    };
  };

  private canLoadMoreCharacters = ({ total, offset, count }: ServerCharactersData): boolean => {
    return total - (offset + count) > 0;
  };

  getAllCharacters = async (page: number = 1): Promise<CharactersDataResponse> => {
    const {
      defaultCharactersOffset,
      charactersLimit,
      apiKey,
      baseUrl,
      getResource,
      canLoadMoreCharacters,
    } = this;
    const offset: number = defaultCharactersOffset + charactersLimit * page - charactersLimit;

    const response = await getResource(
      `${baseUrl}characters?limit=${charactersLimit}&offset=${offset}&apikey=${apiKey}`
    );

    const { data } = response;

    return {
      characters: data.results.map(this.transformCharacter),
      canLoadMore: canLoadMoreCharacters(data),
    };
  };

  getCharacter = async (id: number): Promise<ICharacter> => {
    const response = await this.getResource(
      `${this.baseUrl}characters/${id}?apikey=${this.apiKey}`
    );

    return this.transformCharacter(response.data.results[0]);
  };

  getAllComics = async (): Promise<IComic[]> => {
    const response = await this.getResource(
      `${this.baseUrl}comics?limit=${this.comicsLimit}&offset=${this.defaultComicsOffset}&apikey=${this.apiKey}`
    );
    return response.data.results.map(this.transformComics);
  };

  getComic = async (id: number): Promise<IComic> => {
    const response = await this.getResource(`${this.baseUrl}comics/${id}?apikey=${this.apiKey}`);
    return this.transformComics(response.data.results[0]);
  };
}
