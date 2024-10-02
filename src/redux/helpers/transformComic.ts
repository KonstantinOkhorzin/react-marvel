import { IComic } from "../../types";
import { ComicResponse } from "../types/comics";

const transformComic = (comic
  : ComicResponse): IComic => {
  return {
    id: comic.id,
    title: comic.title,
    description: comic.description || 'There is no description',
    pageCount: comic.pageCount
      ? `${comic.pageCount} pages`
      : 'No information about the number of pages',
    thumbnail: comic.thumbnail.path + '.' + comic.thumbnail.extension,
    language: comic.textObjects[0]?.language || 'en-us',
    price: comic.prices[0].price ? `${comic.prices[0].price}$` : 'not available',
  };
};

export default transformComic;