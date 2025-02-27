import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { DataResponse, IComic } from '../../types';
import { ServerComicsData } from '../types/comics';
import { transformComic, canLoadMore } from '../helpers';
import { DEFAULTS } from '../../constants';

const apiKey: string = import.meta.env.VITE_MARVEL_KEY;
const baseUrl: string = `${import.meta.env.VITE_MARVEL_URL}comics`;

const comicsApi = createApi({
  reducerPath: 'comicsApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: builder => ({
    getComics: builder.query<DataResponse<IComic>, number>({
      transformResponse: (response: ServerComicsData) => {
        return {
          items: response.data.results.map(transformComic),
          canLoadMore: canLoadMore(response),
        };
      },
      query: offset => `?limit=${DEFAULTS.COMICS_LIMIT}&offset=${offset}&apikey=${apiKey}`,
    }),

    getComicById: builder.query<IComic, string | undefined>({
      transformResponse: (response: ServerComicsData) => transformComic(response.data.results[0]),
      query: id => `/${id}?apikey=${apiKey}`,
    }),
  }),
});

export const { useGetComicsQuery, useGetComicByIdQuery } = comicsApi;

export default comicsApi;
