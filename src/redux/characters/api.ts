import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { DataResponse, ICharacter } from '../../types';
import { ServerCharactersData } from '../types/characters';
import { transformCharacter, canLoadMore } from '../helpers';
import { DEFAULTS } from '../../constants';

const apiKey: string = import.meta.env.VITE_MARVEL_KEY;
const baseUrl: string = `${import.meta.env.VITE_MARVEL_URL}characters`;

interface ICharacterQuery {
  id?: number;
  name?: string;
}

const charactersApi = createApi({
  reducerPath: 'charactersApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: builder => ({
    getCharacters: builder.query<DataResponse<ICharacter>, number>({
      transformResponse: (response: ServerCharactersData) => {
        return {
          items: response.data.results.map(transformCharacter),
          canLoadMore: canLoadMore(response),
        };
      },
      query: offset => `?limit=${DEFAULTS.CHARACTERS_LIMIT}&offset=${offset}&apikey=${apiKey}`,
    }),

    getCharacterByIdOrName: builder.query<ICharacter | null, ICharacterQuery | undefined>({
      transformResponse: (response: ServerCharactersData) =>
        response.data.results.length ? transformCharacter(response.data.results[0]) : null,
      query: query => (query?.id ? `/${query.id}?` : `?name=${query?.name}&`) + `apikey=${apiKey}`,
    }),
  }),
});

export const { useGetCharactersQuery, useGetCharacterByIdOrNameQuery } = charactersApi;

export default charactersApi;
