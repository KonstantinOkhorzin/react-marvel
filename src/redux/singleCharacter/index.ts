import { asyncThunkCreator, buildCreateSlice } from '@reduxjs/toolkit';

import { ICharacter, Status } from '../../types';
import MarvelService from '../../services/marvel';

interface InitialState {
  char: ICharacter | null;
  status: Status;
  error: string | null;
}

const initialState: InitialState = {
  char: null,
  status: Status.IDLE,
  error: null,
};

const { getCharacterById } = new MarvelService();

const createSlice = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
});

const slice = createSlice({
  name: 'singleCharacter',
  initialState,
  reducers: create => ({
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
          state.char = action.payload;
          state.status = Status.RESOLVED;
        },
      }
    ),
  }),
  selectors: {
    selectSingleCharacter: state => state,
  },
});

export const { fetchCharacterById } = slice.actions;
export const { selectSingleCharacter } = slice.selectors;

export default slice.reducer;
