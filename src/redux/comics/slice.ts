import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IComic, DataResponse } from '../../types';

const defaultComicsOffset = Number(import.meta.env.VITE_DEFAULT_COMICS_OFFSET) || 100;

interface InitialState {
  comicList: IComic[];
  offset: number;
  canLoadMore: boolean;
}

const initialState: InitialState = {
  comicList: [],
  offset: defaultComicsOffset,
  canLoadMore: false,
};

const slice = createSlice({
  name: 'comics',
  initialState,
  reducers: {
    setOffset: (state, action: PayloadAction<number>) => {
      state.offset = action.payload;
    },
    setData: (state, action: PayloadAction<DataResponse<IComic>>) => {
      state.canLoadMore = action.payload.canLoadMore;
      state.comicList.push(...action.payload.items);
    },
  },
  selectors: {
    selectComics: state => state,
  },
});

export const { setOffset, setData } = slice.actions;
export const { selectComics } = slice.selectors;

export default slice.reducer;
