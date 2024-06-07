import { asyncThunkCreator, buildCreateSlice, PayloadAction } from '@reduxjs/toolkit';

import { ICharacter, Status } from '../../types';
import marvelService from '../../services/marvel';

interface InitialState {
  selectedChar: ICharacter | null;
  status: Status;
  error: string | null;
  selectedCharId: number | null;
}

const initialState: InitialState = {
  selectedChar: null,
  status: Status.IDLE,
  error: null,
  selectedCharId: null,
};

const { getCharacterById } = marvelService;

const createSlice = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
});

const slice = createSlice({
  name: 'characterDetails',
  initialState,
  reducers: create => ({
    setSelectedId: create.reducer((state, action: PayloadAction<number>) => {
      state.selectedCharId = action.payload;
    }),
    fetchCharacterById: create.asyncThunk(
      async (id: string, thunkApi) => {
        try {
          return await getCharacterById(id);
        } catch (error) {
          return thunkApi.rejectWithValue(error);
        }
      },
      {
        pending: state => {
          state.status = Status.PENDING;
        },
        rejected: (state, { payload }) => {
          if (typeof payload === 'string') {
            state.error = payload;
          }
          state.status = Status.REJECTED;
        },
        fulfilled: (state, action) => {
          state.selectedChar = action.payload;
          state.status = Status.RESOLVED;
        },
      }
    ),
  }),
  selectors: {
    selectCharacterDetails: state => state,
    selectCharId: state => state.selectedCharId,
  },
});

export const { fetchCharacterById, setSelectedId } = slice.actions;
export const { selectCharacterDetails, selectCharId } = slice.selectors;

export default slice.reducer;
