import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IComic, DataResponse } from '../../types';
import { DEFAULTS } from '../../constants';

interface InitialState {
  comicList: IComic[];
  offset: number;
  canLoadMore: boolean;
}

const initialState: InitialState = {
  comicList: [],
  offset: DEFAULTS.COMICS_OFFSET,
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
