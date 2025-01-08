import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ICharacter, DataResponse } from '../../types';
import { DEFAULTS } from '../../constants';

interface InitialState {
  charList: ICharacter[];
  offset: number;
  canLoadMore: boolean;
  selectedChar: ICharacter | null;
  selectedCharId: number | undefined;
}

const initialState: InitialState = {
  charList: [],
  offset: DEFAULTS.CHARACTERS_OFFSET,
  canLoadMore: false,
  selectedChar: null,
  selectedCharId: undefined,
};

const slice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    setOffset: (state, action: PayloadAction<number>) => {
      state.offset = action.payload;
    },
    setData: (state, action: PayloadAction<DataResponse<ICharacter>>) => {
      state.canLoadMore = action.payload.canLoadMore;
      state.charList.push(...action.payload.items);
    },
    setSelectedChar: (state, action: PayloadAction<ICharacter>) => {
      state.selectedChar = action.payload;
    },
    setSelectedCharId: (state, action: PayloadAction<number>) => {
      state.selectedCharId = action.payload;
    },
  },
  selectors: {
    selectCharacters: state => state,
    selectChar: state => state.selectedChar,
    selectCharId: state => state.selectedCharId,
  },
});

export const { setOffset, setData, setSelectedCharId, setSelectedChar } = slice.actions;
export const { selectCharacters, selectChar, selectCharId } = slice.selectors;

export default slice.reducer;
